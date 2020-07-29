using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Dtos.Visor;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Distribucion.Impl
{
    /// <summary>
    /// Implementación de una distribución del tipo JSON para un documento de instancia XBRL
    /// </summary>
    public class DistribucionJsonXBRL : DistribucionDocumentoXBRLBase
    {
        /// <summary>
        /// Consulta para la obtención de los datos de los últimos documentos resportados de cada.
        /// Emisora, taxonomía, trimestre y año.
        /// </summary>
        const string CONSULTA_ULTIMOS_DOCUMENTOS =
            "SELECT DOC.*  " +
            "FROM DocumentoInstancia DOC " +
              ",(SELECT ISNULL(IdEmpresa,-1) AS 'IdEmpresa', ISNULL(EspacioNombresPrincipal,'null') AS 'EspacioNombresPrincipal', ISNULL(Anio,-1) AS 'Anio', ISNULL(Trimestre,-1) AS 'Trimestre', MAX(FechaCreacion) AS 'FechaCreacion' " +
                "FROM DocumentoInstancia " +
                "GROUP BY IdEmpresa, EspacioNombresPrincipal, Anio, Trimestre " +
               ") TMAX " +
            "WHERE TMAX.IdEmpresa = ISNULL(DOC.IdEmpresa,-1) " +
              "AND TMAX.EspacioNombresPrincipal = ISNULL(DOC.EspacioNombresPrincipal,'null') " +
              "AND TMAX.Anio = ISNULL(DOC.Anio,-1) " +
              "AND TMAX.Trimestre = ISNULL(DOC.Trimestre,-1) " +
              "AND TMAX.FechaCreacion = DOC.FechaCreacion " +
            "ORDER BY DOC.FechaCreacion DESC";
        /// <summary>
        /// Nombre del archivo que sirve de índice para la consulta
        /// de los documentos publicados disponibles para el visor
        /// </summary>
        public String NombreArchivoIndice { get; set; }

        /// <summary>
        /// Ruta física de destino de la distribución JSON
        /// </summary>
        public String RutaDestino { get; set; }

        /// <summary>
        /// Repository para consultar los envíos
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// Repository para la consulta de los archivos asociados a un documento instancia XBRL.
        /// </summary>
        public IArchivoDocumentoInstanciaRepository ArchivoDocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Repository para datos de empresas
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }
        /// <summary>
        /// Ejecuta una distribución del documento de instancia XBRL creando un archivo JSON con el contenido serializado del documento de instancia 
        /// y escribiendo el documento a cierto sistema de archivos
        /// </summary>
        /// <param name="instancia">Documento de instancia a serializar</param>
        /// <param name="parametros">Parametros opcionales utilizados por la distribución</param>
        /// <returns>Resultado de la operación de distribución</returns>
        [Transaction(TransactionPropagation.RequiresNew)]
        public override ResultadoOperacionDto EjecutarDistribucion(DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros)
        {
            var resultado = new ResultadoOperacionDto();
            LogUtil.Info("Ejecutando Distribución JSON para documento: " + instancia.IdDocumentoInstancia + ", archivo: " + instancia.Titulo);

            try
            {
                string objJson = JsonConvert.SerializeObject(instancia, Formatting.Indented, new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });

                
                byte[] zipBytes = ZipUtil.GZip(objJson);
                //AgregarArchivoAListaJson(instancia);
                resultado.Resultado = true;

                ArchivoDocumentoInstancia archivo = new ArchivoDocumentoInstancia();
                archivo.Archivo = zipBytes;
                archivo.IdDocumentoInstancia = (long)instancia.IdDocumentoInstancia;
                archivo.IdTipoArchivo = TipoArchivoConstants.ArchivoJson;

                ArchivoDocumentoInstanciaRepository.AgregaDistribucion(archivo);
                objJson = null;
                

            }
            catch (Exception ex)
            {
                var detalleError = new Dictionary<string, object>()
                {
                    {"Error","Error ejecutando Distribución JSON para documento: " + instancia.IdDocumentoInstancia + ", archivo: " + instancia.Titulo + ":" + ex.Message},
                    {"Excepsion", ex}
                };
                LogUtil.Error(detalleError);
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al ejecutar la Distribución JSON para el archivo:" + instancia.IdDocumentoInstancia + ", archivo" + instancia.Titulo + ": " + ex.Message;
                resultado.Excepcion = ex.StackTrace;
            }
            return resultado;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="instancia"></param>
        private void AgregarArchivoAListaJson(DocumentoInstanciaXbrlDto instancia)
        {
            //consultar todos los archivos enviados
            var query = DocumentoInstanciaRepository.DbContext.Database.SqlQuery<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto>(CONSULTA_ULTIMOS_DOCUMENTOS, new SqlParameter[0]);
            var docs = query.ToList();
            var listaDocsPublicados = new ListaDocumentosPublicadosVisorDto();
            listaDocsPublicados.ListadoDocumentosInstancia = new List<DocumentoPublicadoDto>();
            foreach (var documento in docs)
            {
                if (documento.ParametrosConfiguracion != null)
                {
                    dynamic parametros = JValue.Parse(documento.ParametrosConfiguracion);


                    if (parametros != null)
                    {
                        var fechaTrimDate = DateTime.MinValue;
                        XmlUtil.ParsearUnionDateTime((String)parametros.fechaTrimestre, out fechaTrimDate);
                        
                        var docPublicado = new DocumentoPublicadoDto()
                        {
                            Id = documento.IdDocumentoInstancia.ToString(),
                            Emisora = parametros.cveFideicomitente != null ? parametros.cveFideicomitente : parametros.cvePizarra,
                            Ejercicio = fechaTrimDate.Year.ToString(),
                            Periodo = TrimestreUtil.ObtenerTrimestre(fechaTrimDate).ToString(),
                            Descripcion = documento.Titulo,
                            NombreArchivo = "info_xbrl_" + documento.IdDocumentoInstancia + "_" + documento.UltimaVersion + ".zip",
                            NombreTaxonomia = documento.EspacioNombresPrincipal,
                            FechaRecepcion = DateUtil.ToFormatString(documento.FechaCreacion.Value, DateUtil.DMYDateFormat)
                        };
                        //Buscar si la emisora tiene alias
                        var empresa = EmpresaRepository.GetQueryable().Where(x => x.NombreCorto.Equals(docPublicado.Emisora)).FirstOrDefault();
                        if (empresa != null && !string.IsNullOrEmpty(empresa.AliasClaveCotizacion))
                        {
                            docPublicado.Emisora = empresa.AliasClaveCotizacion;
                        }
                        listaDocsPublicados.ListadoDocumentosInstancia.Add(docPublicado);
                    }

                }
            }
            //Escribir el json

            var jsonSalidaLista = JsonConvert.SerializeObject(listaDocsPublicados, Formatting.Indented, new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });


            using (var streamZip = new FileStream(RutaDestino + "\\" + NombreArchivoIndice, FileMode.Create))
            {
                var bytesEscribir = Encoding.UTF8.GetBytes(jsonSalidaLista);
                streamZip.Write(bytesEscribir, 0, bytesEscribir.Length);
            }
        }
    }
}
