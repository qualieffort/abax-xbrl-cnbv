using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using AbaxXBRLCore.Distribucion;
using System.Collections.Generic;
using System.IO;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.XPE.impl;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using AbaxXBRLCore.Distribucion.Impl;
using AbaxXBRLCore.Common.Cache;
using System.Linq;
using AbaxXBRLCore.CellStore.Services.Impl;
using System.Text;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.CellStore.Modelo;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Reprocesa los documentos 4D.
    /// </summary>
    [TestClass]
    public class TestReProcesamiento4D : AbstractDependencyInjectionSpringContextTests
    {
        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/common.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/repository.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/services_desarrollo.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo_solo_mongo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_mongodisable.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/bitacora.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/transaccion.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templates.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templatesold.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.Reports/reportesXBRL.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/connectionMongoDB.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/serviceBlockStore.xml",
                };
            }
        }

        private String CONSULTA_DOCUMENTOS_4D = 
                            "SELECT DOCU.*  " +
                            "FROM DocumentoInstancia AS DOCU,  " +
                            "( " +
	                            "SELECT DOC.[EspacioNombresPrincipal],DOC.[ClaveEmisora],DOC.[FechaReporte],DOC.[NumFideicomiso], MAX(DOC.[FechaCreacion]) AS FechaCreacion   " +
	                            "FROM [DocumentoInstancia] AS DOC  " +
	                            "WHERE DOC.[Trimestre] LIKE '%4D%' " +
                                  "AND DOC.[EspacioNombresPrincipal] IS NOT NULL " +
                                  "AND DOC.[IdUsuarioUltMod] IS NULL " +
                                  "AND DOC.[ClaveEmisora] IS NOT NULL " +
                                  "AND DOC.[FechaReporte] IS NOT NULL " +
                                  "AND DOC.[ClaveEmisora] = 'RASSINI' " +
                                "GROUP BY DOC.[EspacioNombresPrincipal],DOC.[ClaveEmisora],DOC.[FechaReporte],DOC.[NumFideicomiso] " +
                            ") AS AUXB  " +
                            "WHERE DOCU.[EspacioNombresPrincipal] = AUXB.[EspacioNombresPrincipal] " +
                              "AND DOCU.[ClaveEmisora] = AUXB.[ClaveEmisora]  " +
                              "AND DOCU.[FechaReporte] = AUXB.[FechaReporte]  " +
                              "AND ((DOCU.[NumFideicomiso] = AUXB.[NumFideicomiso]) OR ((DOCU.[NumFideicomiso] IS NULL) AND (AUXB.[NumFideicomiso] IS NULL)) ) " +
                              "AND DOCU.[FechaCreacion] = AUXB.[FechaCreacion]";

        [TestMethod]
        public void ReprocesaDocumentos()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            try
            {
                var procesador = (IProcesarDistribucionDocumentoXBRLService)applicationContext.GetObject("ProcesarDistribucionDocumentoXBRLService");
                var documentoInstanciaRepository = (IDocumentoInstanciaRepository)applicationContext.GetObject("DocumentoInstanciaRepository");
                var cellStoreMongo = (AbaxXBRLCellStoreMongo)applicationContext.GetObject("AbaxXBRLCellStoreMongo");
                var versionDocumentoInstanciaRepository = (IVersionDocumentoInstanciaRepository)applicationContext.GetObject("VersionDocumentoInstanciaRepository");
                var distribucionCellstore = (IDistribucionDocumentoXBRL)applicationContext.GetObject("DistribucionCellStore");
                var candidatosReprocesar = documentoInstanciaRepository.ObtenDocumentosInstancia(CONSULTA_DOCUMENTOS_4D);
                //var detalleLog = new Dictionary<String, object>();
                //detalleLog.Add("candidatosReprocesar", candidatosReprocesar);
                //LogUtil.Info(detalleLog);
                foreach (var candidato in candidatosReprocesar)
                {
                    var queryEnvios = GeneraQueryEnviosMongo(candidato);
                    var enviosMongo = cellStoreMongo.ConsultaElementosColeccion<Envio>(queryEnvios);
                    //Eliminamos envios previos para depurar
                    foreach (var envioMongo in enviosMongo)
                    {
                        var cantidadEnvios = candidatosReprocesar.Where(x =>
                           x.EspacioNombresPrincipal.Equals(envioMongo.Taxonomia) &&
                           x.ClaveEmisora.Equals(envioMongo.Entidad.Nombre) &&
                           ParseJson(x.FechaReporte).Equals(ParseJson(envioMongo.Periodo.Fecha)) &&
                           ParseJson(x.FechaCreacion).Equals(ParseJson(envioMongo.FechaRecepcion))).Count();
                        if (cantidadEnvios == 0)
                        {
                            cellStoreMongo.EliminarAsync("Envio", "{\"IdEnvio\" : \"" + envioMongo.IdEnvio + "\"}");
                            cellStoreMongo.EliminarAsync("Hecho", "{\"IdEnvio\" : \"" + envioMongo.IdEnvio + "\"}");
                        }
                    }
                    var queryExistencia = GeneraQueryExistenciaEnvio(candidato);
                    var cantidad = cellStoreMongo.CuentaElementosColeccion("Envio", queryExistencia);
                    if (cantidad > 0)
                    {
                        LogUtil.Info("Reprocesando: " +
                        candidato.IdDocumentoInstancia + ", " +
                        candidato.FechaReporte + ", " +
                        candidato.ClaveEmisora + ", " + ", " +
                        candidato.NumFideicomiso + "," +
                        candidato.EspacioNombresPrincipal);

                        EjecutaDistribucion(
                            candidato.IdDocumentoInstancia,
                            1,
                            new Dictionary<String, object>(),
                            versionDocumentoInstanciaRepository,
                            documentoInstanciaRepository,
                            distribucionCellstore);


                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }

        private void EjecutaDistribucion(
            long idDocumentoInstancia,
            long version,
            IDictionary<string, object> parametros,
            IVersionDocumentoInstanciaRepository versionDocumentoInstanciaRepository,
            IDocumentoInstanciaRepository documentoInstanciaRepository,
            IDistribucionDocumentoXBRL distribucion
            )
        {
            versionDocumentoInstanciaRepository.DbContext.Database.CommandTimeout = 380;
            var versionDocumento = versionDocumentoInstanciaRepository.GetQueryable().Where(x => x.IdDocumentoInstancia == idDocumentoInstancia && x.Version == version).FirstOrDefault();
            if (versionDocumento == null)
            {
                return;
            }

            var bitacora = versionDocumentoInstanciaRepository.GetQueryable().Where(x => x.IdVersionDocumentoInstancia == versionDocumento.IdVersionDocumentoInstancia).FirstOrDefault();

            String newData = ZipUtil.UnZip(versionDocumento.Datos);
            versionDocumento.Datos = null;
            System.GC.Collect();
            LogUtil.Info("Memoria usada:" + System.GC.GetTotalMemory(true));
            var documentoInstanciaXbrlDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(newData);
            newData = null;
            newData = null;
            versionDocumento.Datos = null;
            documentoInstanciaXbrlDto.IdDocumentoInstancia = bitacora.IdDocumentoInstancia;
            documentoInstanciaXbrlDto.Version = 1;
            documentoInstanciaXbrlDto.Taxonomia = ObtenerTaxonomia(documentoInstanciaXbrlDto.DtsDocumentoInstancia);
            var fechaRecepcion = documentoInstanciaRepository.GetQueryable().Where(x => x.IdDocumentoInstancia == idDocumentoInstancia).Select(x => x.FechaCreacion).FirstOrDefault();
            if (parametros == null)
            {
                parametros = new Dictionary<string, object>();
            }
            if (!parametros.ContainsKey("FechaRecepcion"))
            {
                parametros.Add("FechaRecepcion", fechaRecepcion);
            }
            var bitacorasAActualizar = new List<BitacoraDistribucionDocumento>();

            if (documentoInstanciaXbrlDto.Taxonomia == null)
            {
                LogUtil.Error("Ocurrió un error al obtener la taxonomía del documento");
            }
            else
            {
                distribucion.EjecutarDistribucion(documentoInstanciaXbrlDto, parametros);
            }
        }

        private String GeneraQueryEnviosMongo(DocumentoInstancia documento)
        {
            var query = new StringBuilder();
            query.Append("{");
            query.Append(" \"Taxonomia\" : ");
            query.Append(ParseJson(documento.EspacioNombresPrincipal));
            query.Append(", \"Entidad.Nombre\" : ");
            query.Append(ParseJson(documento.ClaveEmisora));
            query.Append(", \"Periodo.Fecha\" : ");
            query.Append(ParseJson(documento.FechaReporte));
            query.Append(" }");

            return query.ToString();
        }

        private String GeneraQueryExistenciaEnvio(DocumentoInstancia documento)
        {
            var query = new StringBuilder();
            query.Append("{");
            query.Append(" \"Taxonomia\" : ");
            query.Append(ParseJson(documento.EspacioNombresPrincipal));
            query.Append(", \"Entidad.Nombre\" : ");
            query.Append(ParseJson(documento.ClaveEmisora));
            query.Append(", \"Periodo.Fecha\" : ");
            query.Append(ParseJson(documento.FechaReporte));
            query.Append(", \"FechaRecepcion\" : ");
            query.Append(ParseJson(documento.FechaCreacion));
            query.Append(" }");

            return query.ToString();
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public string ParseJson(DateTime? fecha)
        {
            if (fecha == null)
            {
                return "null";
            }
            var fechaAux = fecha ?? DateTime.MinValue;
            var sValue = fechaAux.ToString("yyyy-MM-ddTHH:mm:ssZ");
            return "ISODate(\"" + sValue + "\")";
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public static string ParseJson(string value)
        {
            var json = value ?? String.Empty;
            json = JsonConvert.ToString(value);
            return json;
        }

        /// <summary>
        /// Obtiene una taxonomía del caché o la carga y agrega en caso de no encontrarse
        /// </summary>
        /// <param name="listaDts"></param>
        /// <returns></returns>
        private TaxonomiaDto ObtenerTaxonomia(IList<DtsDocumentoInstanciaDto> listaDts)
        {

            var cacheTaxonomia = (ICacheTaxonomiaXBRL)applicationContext.GetObject("CacheTaxonomia");
            var tax = cacheTaxonomia.ObtenerTaxonomia(listaDts);
            if (tax == null)
            {
                //Cargar taxonomía si no se encuentra en cache
                var errores = new List<ErrorCargaTaxonomiaDto>();
                var xpe = AbaxXBRLCore.XPE.impl.XPEServiceImpl.GetInstance();
                tax = xpe.CargarTaxonomiaXbrl(listaDts.Where(x => x.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF).First().HRef, errores, true);
                if (tax != null)
                {
                    cacheTaxonomia.AgregarTaxonomia(listaDts, tax);
                }
                else
                {
                    LogUtil.Error("Error al cargar taxonomía:" + listaDts.Where(x => x.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF).First().HRef);
                    foreach (var error in errores)
                    {
                        LogUtil.Error(error.Mensaje);
                    }
                }
            }
            return tax;
        }
    }
}
