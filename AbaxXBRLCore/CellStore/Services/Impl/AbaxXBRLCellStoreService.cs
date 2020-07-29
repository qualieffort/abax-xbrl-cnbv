using AbaxXBRLBlockStore.Common.Constants;
using AbaxXBRLCore.CellStore.Adapter;
using static AbaxXBRLCore.CellStore.Constants.ConstantesCellStore.ColeccionMongoEnum;
using AbaxXBRLCore.CellStore.DTO;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.CellStore.Util;
using AbaxXBRLCore.Common.Entity;
using AbaxXBRLCore.Services;
using AbaxXBRLBlockStore.Common.Entity;
using MongoDB.Bson.Serialization;
using AbaxXBRLCore.MongoDB.Common.Entity;
using AbaxXBRL.Constantes;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Distribucion;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.CellStore.Services;


namespace AbaxXBRLCore.CellStore.Services.Impl
{
    /// <summary>
    /// Implementación del servicio para el manejo de la persistencia de las entidades cell store en la base de datos.
    /// </summary>
    public class AbaxXBRLCellStoreService : IAbaxXBRLCellStoreService
    {
        private static Dictionary<String, String> NOMBRE_TAXONOMIA = new Dictionary<string, string>
        {
            {"http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all", "IFRS BMV 2013"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05", "IFRS BMV 2015 para ICS"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_sapib_entry_point_2014-12-05", "IFRS BMV 2015 para SAPIB"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05", "IFRS BMV 2015 para Corto Plazo"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05", "IFRS BMV 2015 para FIBRAS"},
            {"http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30", "Fideicomisos CCD"},
            {"http://www.bmv.com.mx/2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30", "Fideicomisos Deuda"},
            {"http://www.bmv.com.mx/2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30", "Fideicomisos Trac"},
            {"http://www.bmv.com.mx/2016-08-22/annext_entrypoint", "Anexo T"},
            {"http://www.cnbv.gob.mx/2016-08-22/annext_entrypoint", "Anexo T"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22", "Reporte Anual - Anexo N"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS_entry_point_2016-08-22", "Reporte Anual - Anexo NBIS"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS1_entry_point_2016-08-22", "Reporte Anual - Anexo NBIS1"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS2_entry_point_2016-08-22", "Reporte Anual - Anexo NBIS2"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS3_entry_point_2016-08-22", "Reporte Anual - Anexo NBIS3"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS4_entry_point_2016-08-22", "Reporte Anual - Anexo NBIS4"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS5_entry_point_2016-08-22", "Reporte Anual - Anexo NBIS5"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_O_entry_point_2016-08-22", "Reporte Anual - Anexo O"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_H_entry_point_2016-08-22", "Prospecto de Colocación - Anexo H"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS_entry_point_2016-08-22", "Prospecto de Colocación - Anexo HBIS"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS1_entry_point_2016-08-22", "Prospecto de Colocación - Anexo HBIS1"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS2_entry_point_2016-08-22", "Prospecto de Colocación - Anexo HBIS2"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS3_entry_point_2016-08-22", "Prospecto de Colocación - Anexo HBIS3"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS4_entry_point_2016-08-22", "Prospecto de Colocación - Anexo HBIS4"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS5_entry_point_2016-08-22", "Prospecto de Colocación - Anexo HBIS5"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_L_entry_point_2016-08-22", "Prospecto de Colocación - Anexo L"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_I_entry_point_2016-08-22", "Prospecto de Colocación - Anexo I"},
            {"http://www.bmv.com.mx/2016-08-22/rel_ev_emisoras_entrypoint", "Eventos relevantes 2016 - Emisoras"},
            {"http://www.bmv.com.mx/2016-08-22/rel_ev_fondos_entrypoint", "Eventos relevantes 2016 - Fondos de inversión"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2016-08-22", "IFRS BMV 2016 para FIBRAS"},
            {"http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22", "Fideicomisos CCD 2016"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point", "Eventos relevantes - representante común"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point", "Eventos relevantes - fondos de inversión"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point", "Eventos relevantes - emisoras"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point", "Eventos relevantes - agencia calificadora"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point", "Eventos relevantes -Fiduciarios"},
        };
        /// <summary>
        /// Rol presentación por defecto para las etiquetas de los conceptos.
        /// </summary>
        private const string ETIQUETA_ROL_PRESENTACION_DEFAULT = "http://www.xbrl.org/2003/role/label";
        /// <summary>
        /// Objecto de acceso a datos en Mongo.
        /// </summary>
        public AbaxXBRLCore.CellStore.Services.Impl.AbaxXBRLCellStoreMongo AbaxXBRLCellStoreMongo { get; set; }
        /// <summary>
        /// Servicio para obtener la información de las emrpesas de un grupo
        /// </summary>
        public IGrupoEmpresaService GrupoEmpresaService { get; set; }
        /// <summary>
        /// Servicio para obtener la información de las emrpesas de un grupo
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Bandera que indica si se está ejecutando el proceso de reprocesamiento de documentos de mongo
        /// </summary>
        private static bool EjecutandoReprocesamiento;
        /// <summary>
        /// Atrinuto que indica el total de documentos instancia que se están reprocesando
        /// </summary>
        private static int TotalDeDocumentosAProcesar;
        /// <summary>
        /// Atrinuto que indica el total de documentos instancia que se están reprocesando
        /// </summary>
        private static int DocumentosProcesados;
        /// <summary>
        /// Atrinuto que indica el total de documentos instancia que se están reprocesando
        /// </summary>
        private static object LockObject = new object();
        /// <summary>
        /// Servicio para obtener la información de las emrpesas de un grupo
        /// </summary>
        public IVersionDocumentoInstanciaRepository VersionDocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDistribucionDocumentoXBRL DistribucionDocumentoXBRL = null;
        /// <summary>
        /// Manejadro del caché en memoria de la taxonomía XBRL
        /// </summary>
        public ICacheTaxonomiaXBRL CacheTaxonomiaXBRL { get; set; }

        /// <summary>
        /// Referencia a la base de datos de mongo.
        /// </summary>
        private IMongoDatabase MongoDB { get; set; }


        /// <summary>
        /// Persiste la información del documento en la Base de Datos relacional y en la base de datos de Mongo.
        /// </summary>
        /// <param name="instancia">Documento a procesar.</param>
        /// <param name="parametros">Diccionario de parámetros adicionales.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto PersisteInformacion(DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros)
        {
            var resultadoOperacion = ExtraeModeloDocumentoInstancia(instancia, parametros);
            if (!resultadoOperacion.Resultado)
            {
                return resultadoOperacion;
            }
            var modelo = (EstructuraMapeoDTO)resultadoOperacion.InformacionExtra;
            resultadoOperacion = PersisteModeloCellstoreMongo(modelo);
            return resultadoOperacion;
        }

        /// <summary>
        /// Extrae la información del documento de instancia al modelo de DTOS.
        /// </summary> 
        /// <param name="instancia">Documento de instancia a procesar.</param>
        /// <param name="parametros">Diccionario de parámetros adicionales.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto ExtraeModeloDocumentoInstancia(DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var estructuraMapeo = new EstructuraMapeoDTO(instancia);
                Object fechaRecepcion;
                if (parametros != null && parametros.TryGetValue("FechaRecepcion", out fechaRecepcion))
                {
                    estructuraMapeo.FechaRecepcion = (DateTime)fechaRecepcion;
                }
                

                LogUtil.Info(new Dictionary<string, object>()
                {
                    {"Estructura","DocumentoInstancia"},
                    {"Archivo",Path.GetFileName(instancia.NombreArchivo)},
                    {"EntidadesPorId",instancia.EntidadesPorId.Count},
                    {"ConceptosPorId",instancia.Taxonomia.ConceptosPorId.Count},
                    {"UnidadesPorId",instancia.UnidadesPorId.Count},
                    {"ContextosPorId",instancia.ContextosPorId.Count},
                    {"HechosPorId",instancia.HechosPorId.Count}
                });
                ProcesaTaxonomia(estructuraMapeo);
                ProcesaConceptos(estructuraMapeo);
                ProcesaRolesPresentacionConceptos(estructuraMapeo);
                ProcesaHechos(estructuraMapeo);
                ProcesaBitacoraReporte(estructuraMapeo);
                LogUtil.Info(new Dictionary<string, object>()
                {
                    {"Estructura","HECHOS_CELLSTORE"},
                    {"Archivo",estructuraMapeo.Envio.NombreArchivo},
                    {"Entidades",estructuraMapeo.Entidades.Count},
                    {"Conceptos",estructuraMapeo.Conceptos.Count},
                    {"Unidades",estructuraMapeo.Unidades.Count},
                    {"Periodos",estructuraMapeo.Periodos.Count},
                    {"DimensionesMiembroGrupo",estructuraMapeo.DimensionesMiembroGrupo.Count},
                    {"DimensionesMiembroConcepto",estructuraMapeo.DimensionesMiembroConcepto.Count},
                    {"Hechos",estructuraMapeo.Hechos.Count},
                    {"Medidas",estructuraMapeo.Medidas.Count},
                    {"Etiquetas",estructuraMapeo.Etiquetas.Count},
                    {"RolesPresentacionCatalogo",estructuraMapeo.RolesPresentacionCatalogo.Count},
                    {"ConceptosRolPresentacion",estructuraMapeo.ConceptosRolPresentacion.Count}
                });

                resultado.Resultado = true;
                //Limitamos las referencias a los diccionarios para liberar memoria.
                resultado.InformacionExtra = new EstructuraMapeoDTO()
                {
                    Taxonomia = estructuraMapeo.Taxonomia,
                    Entidades = estructuraMapeo.Entidades,
                    Conceptos = estructuraMapeo.Conceptos,
                    Unidades = estructuraMapeo.Unidades,
                    Periodos = estructuraMapeo.Periodos,
                    DimensionesMiembroGrupo = estructuraMapeo.DimensionesMiembroGrupo,
                    DimensionesMiembroConcepto = estructuraMapeo.DimensionesMiembroConcepto,
                    Hechos = estructuraMapeo.Hechos,
                    Medidas = estructuraMapeo.Medidas,
                    Etiquetas = estructuraMapeo.Etiquetas,
                    RolesPresentacionCatalogo = estructuraMapeo.RolesPresentacionCatalogo,
                    ConceptosRolPresentacion = estructuraMapeo.ConceptosRolPresentacion,
                    Envio = estructuraMapeo.Envio,
                    DocumentoInstancia = instancia
                };
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
            }

            return resultado;
        }
        /// <summary>
        /// Persiste el modelo en la base de datos de mongo.
        /// </summary>
        /// <param name="estructuraMapeo">Persiste el moodelo en mongo.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto PersisteModeloCellstoreMongo(EstructuraMapeoDTO estructuraMapeo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                AbaxXBRLCellStoreMongo.PeristeModeloCellStore(estructuraMapeo);
                resultado.Resultado = true;
                resultado.InformacionExtra = estructuraMapeo;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
            }

            return resultado;
        }
        /// <summary>
        /// Procesa los hechos existentes en el documento de instancia.
        /// </summary>
        /// <param name="estructuraMapeo">Estructura con el mapeo del cellstore.</param>
        private void ProcesaHechos(EstructuraMapeoDTO estructuraMapeo)
        {
            var instancia = estructuraMapeo.DocumentoInstancia;
            var hechosPorId = instancia.HechosPorId;
            var contextosPorId = instancia.ContextosPorId;
            var espacioNombresPrincipal = instancia.EspacioNombresPrincipal;
            var rolesPresentacion = instancia.Taxonomia.RolesPresentacion;
            var unidadDefault = new Unidad();
            var dimensionesMiembrosPorHash = estructuraMapeo.ListasDimensionesMiembrosPorHash;
            var taxonomia = estructuraMapeo.Taxonomia;

            foreach (var idhecho in hechosPorId.Keys)
            {
                var hechoInstancia = hechosPorId[idhecho];
                var contextoInstancia = contextosPorId[hechoInstancia.IdContexto];
                var idConcepto = hechoInstancia.IdConcepto;
                //LogUtil.Info(hechoInstancia);
                var concepto = ProcesaConceptoInstancia(idConcepto, estructuraMapeo);
                if (concepto.TipoDato.Contains("base64BinaryItemType"))
                {
                    continue;
                }
                var unidad = String.IsNullOrEmpty(hechoInstancia.IdUnidad) ? unidadDefault : ProcesaUnidad(hechoInstancia.IdUnidad, estructuraMapeo);
                var entidad = ProcesaEntidad(contextoInstancia.Entidad.IdEntidad, estructuraMapeo);
                var periodo = ProcesaPeriodoEntidad(contextoInstancia.Id, estructuraMapeo);
                var dimensionesMiembrosHash = ProcesaDimensionMiembroGrupo(contextoInstancia.Id, estructuraMapeo);
                var tupla = new Tupla()
                {
                    IdInterno = hechoInstancia.Consecutivo,
                    IdPadre = hechoInstancia.ConsecutivoPadre
                };
                string hashGrupoRolPresentacion = null;
                IList<RolPresentacionHecho> listaRolesPresentacion = new List<RolPresentacionHecho>();
                IList<MiembrosDimensionales> dimensionesMiembro = null;
                if (!String.IsNullOrEmpty(dimensionesMiembrosHash))
                {
                    ProcesaDimensionMiembroConcepto(idConcepto, contextoInstancia.Id, estructuraMapeo);
                    if (dimensionesMiembrosPorHash.ContainsKey(dimensionesMiembrosHash))
                    {
                        dimensionesMiembro = dimensionesMiembrosPorHash[dimensionesMiembrosHash];
                    }
                }
                if (estructuraMapeo.HashRolesPresentacionGrupoPorIdConcepto.ContainsKey(idConcepto))
                {
                    hashGrupoRolPresentacion = estructuraMapeo.HashRolesPresentacionGrupoPorIdConcepto[idConcepto];
                }
                if (estructuraMapeo.UrisRolesPresentacionGrupoPorIdConcepto.ContainsKey(idConcepto))
                {
                    foreach (var uri in estructuraMapeo.UrisRolesPresentacionGrupoPorIdConcepto[idConcepto])
                    {
                        var item = new RolPresentacionHecho() { Uri = uri };
                        listaRolesPresentacion.Add(item);
                    }
                    
                }
                var esValorChunks = false;
                if (!String.IsNullOrWhiteSpace(hechoInstancia.Valor) && hechoInstancia.Valor.Length > ConstBlockStoreHechos.MAX_STRING_VALUE_LENGTH)
                {
                    esValorChunks = true;
                }

                var hecho = new Hecho()
                {

                    Valor = hechoInstancia.Valor,
                    ValorNumerico = hechoInstancia.ValorNumerico,
                    EsValorChunks = esValorChunks,
                    Precision = hechoInstancia.Precision,
                    Decimales = hechoInstancia.Decimales,
                    EsNumerico = hechoInstancia.EsNumerico,
                    EsValorNil = hechoInstancia.EsValorNil,
                    EsTupla = hechoInstancia.EsTupla,
                    EsFraccion = unidad != null && unidad.Tipo == UnidadDto.Divisoria,
                    Activo = true,
                    Tupla = tupla,
                    Unidad = unidad,
                    Concepto = concepto,
                    Taxonomia = espacioNombresPrincipal,
                    EsDimensional = contextoInstancia.ContieneInformacionDimensional,
                    Periodo = periodo,
                    Entidad = entidad,
                    RolesPresentacion = listaRolesPresentacion,
                    MiembrosDimensionales = dimensionesMiembro
                };
                hecho.FechaRepresentativa = hecho.Periodo.TipoPeriodo == PeriodoDto.Duracion ? hecho.Periodo.FechaFin : hecho.Periodo.FechaInstante;
                DeterminaHechoMasReciente(hecho, estructuraMapeo);
                hecho.IdHecho = hecho.GeneraHashId();
                if (!estructuraMapeo.Hechos.ContainsKey(hecho.IdHecho))
                {
                    estructuraMapeo.Hechos.Add(hecho.IdHecho, hecho);
                }
                if (!estructuraMapeo.HechosPorId.ContainsKey(idhecho))
                {
                    estructuraMapeo.HechosPorId.Add(idhecho, hecho);
                }
            }

        }
        /// <summary>
        /// Determina si el hecho es el más actual para su concepto en el reporte enviado.
        /// </summary>
        /// <param name="hecho">Hecho que se pretende evaluar.</param>
        /// <param name="estructuraMapeo">Estructura de mapeo.</param>
        private void DeterminaHechoMasReciente(Hecho hecho, EstructuraMapeoDTO estructuraMapeo)
        {
            IDictionary<String, Hecho> diccioanrioDimensiones;
            if (!estructuraMapeo.DiccionarioHechosMasRecientesReporte.TryGetValue(hecho.Concepto.IdConcepto, out diccioanrioDimensiones))
            {
                diccioanrioDimensiones = new Dictionary<String, Hecho>();
                estructuraMapeo.DiccionarioHechosMasRecientesReporte[hecho.Concepto.IdConcepto] = diccioanrioDimensiones;
            }
            var hashDimensiones = hecho.GeneraHashDimensiones();
            Hecho hechoAuxiliar;
            if (diccioanrioDimensiones.TryGetValue(hashDimensiones, out hechoAuxiliar))
            {
                DateTime fechaAuxiliar = hechoAuxiliar.FechaRepresentativa ?? DateTime.MinValue;
                DateTime fechaHecho = hecho.FechaRepresentativa ?? DateTime.MinValue;
                if (fechaAuxiliar < fechaHecho)
                {
                    hechoAuxiliar.MasRecienteEnEnvioActual = false;
                    hecho.MasRecienteEnEnvioActual = true;
                    diccioanrioDimensiones[hashDimensiones] = hecho;
                }
            }
            else
            {
                hecho.MasRecienteEnEnvioActual = true;
                diccioanrioDimensiones[hashDimensiones] = hecho;
            }
        }

        /// <summary>
        /// Obtiene el listao de estructuras completo en un solo nivel.
        /// </summary>
        /// <param name="listaEstructurasFormato">Listado que representa el arbol de estructuras.</param>
        /// <returns>Conjunto completo de estructuras en un solo nivel.</returns>
        private IList<EstructuraFormatoDto> ObtenArbolEstructurasFormatoComoLista(IList<EstructuraFormatoDto> listaEstructurasFormato)
        {
            var lista = new List<EstructuraFormatoDto>();
            foreach (var estructura in listaEstructurasFormato)
            {
                lista.Add(estructura);
                var subEstructuras = estructura.SubEstructuras;
                if (subEstructuras != null && subEstructuras.Count > 0)
                {
                    var subLista = ObtenArbolEstructurasFormatoComoLista(subEstructuras);
                    lista.AddRange(subLista);
                }
            }

            return lista;
        }
        /// <summary>
        /// Procesa el indice de miembros dimensionales por concepto.
        /// </summary>
        /// <param name="idConcepto">Identificador de concepto.</param>
        /// <param name="idContexto">Identificador del contexto con las dimensiones.</param>
        /// <param name="estructuraMapeo">Estructura para el mapeo del cell store.</param>
        private void ProcesaDimensionMiembroConcepto(string idConcepto, string idContexto, EstructuraMapeoDTO estructuraMapeo)
        {
            var dimencionesMiembroGrupoProIdConcepto = estructuraMapeo.DimencionesMiembroGrupoProIdConcepto;
            if (dimencionesMiembroGrupoProIdConcepto.ContainsKey(idConcepto)
                && dimencionesMiembroGrupoProIdConcepto[idConcepto].ContainsKey(idContexto))
            {
                return;
            }
            var dimencionesPorContexto = estructuraMapeo.DimensionesMiembroGrupoPorId;
            if (!dimencionesPorContexto.ContainsKey(idContexto))
            {
                var dimensionesMiembrosHash = ProcesaDimensionMiembroGrupo(idContexto, estructuraMapeo);
                if (!String.IsNullOrEmpty(dimensionesMiembrosHash))
                {
                    return;
                }
                if (!dimencionesPorContexto.ContainsKey(idConcepto))
                {
                    throw new KeyNotFoundException("No fue posible indexar las dimensiones para el contexto [" + idContexto + "].");
                }
            }
            var conceptosPorId = estructuraMapeo.ConceptosPorId;
            if (!conceptosPorId.ContainsKey(idConcepto))
            {
                ProcesaConceptoInstancia(idConcepto, estructuraMapeo);
            }


            var concepto = conceptosPorId[idConcepto];
            var dimensionesPorContexto = dimencionesPorContexto[idContexto];
            var dimensionesMiembroConcepto = estructuraMapeo.DimensionesMiembroConcepto;
            var listaDiencionesConcepto = new List<MiembrosDimensionales>();
            foreach (var dimensionItem in dimensionesPorContexto)
            {
                var dimensionMiembroConcepto = new MiembrosDimensionales()
                {
                    Explicita = dimensionItem.Explicita,
                    IdDimension = dimensionItem.IdDimension,
                    IdItemMiembro = dimensionItem.IdItemMiembro,
                    QNameDimension = dimensionItem.QNameDimension,
                    QNameItemMiembro = dimensionItem.QNameItemMiembro,
                    MiembroTipificado = dimensionItem.MiembroTipificado,
                    EtiquetasDimension = dimensionItem.EtiquetasDimension,
                    EtiquetasMiembroDimension = dimensionItem.EtiquetasMiembroDimension
                };
                dimensionMiembroConcepto.HashMiembrosDimensionales = dimensionMiembroConcepto.GeneraHashId();
                listaDiencionesConcepto.Add(dimensionMiembroConcepto);
                if (!dimensionesMiembroConcepto.ContainsKey(dimensionMiembroConcepto.HashMiembrosDimensionales))
                {
                    dimensionesMiembroConcepto.Add(dimensionMiembroConcepto.HashMiembrosDimensionales, dimensionMiembroConcepto);
                }
            }

            if (!dimencionesMiembroGrupoProIdConcepto.ContainsKey(idConcepto))
            {
                dimencionesMiembroGrupoProIdConcepto.Add(idConcepto, new Dictionary<string, IList<MiembrosDimensionales>>());
            }
            if (!dimencionesMiembroGrupoProIdConcepto[idConcepto].ContainsKey(idContexto))
            {
                dimencionesMiembroGrupoProIdConcepto[idConcepto].Add(idContexto, listaDiencionesConcepto);
            }

        }
        /// <summary>
        /// Genera los cellstor de los grupos de dimensiones miembro para un contexto determinado.
        /// </summary>
        /// <param name="idContexto">Identificador del contexto.</param>
        /// <param name="estructuraMapeo">Mapeo para cellstrore.</param>
        /// <returns>Hash del grupo de dimensiones.</returns>
        private string ProcesaDimensionMiembroGrupo(string idContexto, EstructuraMapeoDTO estructuraMapeo)
        {
            var contextoDto = estructuraMapeo.DocumentoInstancia.ContextosPorId[idContexto];
            var conceptosPorId = estructuraMapeo.DocumentoInstancia.Taxonomia.ConceptosPorId;
            var dimensionesMiembrosPorHash = estructuraMapeo.ListasDimensionesMiembrosPorHash;
            if (!contextoDto.ContieneInformacionDimensional && !contextoDto.Entidad.ContieneInformacionDimensional)
            {
                return String.Empty;
            }
            var dimensionesMiembroGrupoPorId = estructuraMapeo.DimensionesMiembroGrupoPorId;
            if (dimensionesMiembroGrupoPorId.ContainsKey(idContexto))
            {
                return idContexto;
            }
            //LogUtil.Info(contextoDto);
            var dimensionesMiembroGrupo = estructuraMapeo.DimensionesMiembroGrupo;
            var listaDimensionesInstancia = contextoDto.ContieneInformacionDimensional ? contextoDto.ValoresDimension : contextoDto.Entidad.ValoresDimension;
            var listaDimensionesMimembroGrupo = new List<MiembrosDimensionales>();
            var listaModeloBase = new List<MiembrosDimensionales>();
            var etiquetasPorHash = estructuraMapeo.ListasEtiquetasPorHash;
            foreach (var dimensionDto in listaDimensionesInstancia)
            {
                var dimensionItem = new MiembrosDimensionales()
                {
                    Explicita = dimensionDto.Explicita,
                    IdDimension = dimensionDto.IdDimension,
                    QNameDimension = dimensionDto.QNameDimension,
                    IdItemMiembro = dimensionDto.IdItemMiembro,
                    QNameItemMiembro = dimensionDto.QNameItemMiembro,
                    MiembroTipificado = dimensionDto.ElementoMiembroTipificado,
                };

                if (!String.IsNullOrEmpty(dimensionDto.IdDimension) && conceptosPorId.ContainsKey(dimensionDto.IdDimension))
                {
                    var etiquetasDimension = conceptosPorId[dimensionDto.IdDimension].Etiquetas;
                    var keyEtiquetasDimension = ObtenHashGrupoEtiquetasDicionario(dimensionDto.IdDimension, etiquetasDimension, estructuraMapeo);
                    if (etiquetasPorHash.ContainsKey(keyEtiquetasDimension))
                    {
                        dimensionItem.EtiquetasDimension = etiquetasPorHash[keyEtiquetasDimension];
                    }
                }
                if (!String.IsNullOrEmpty(dimensionDto.IdItemMiembro) && conceptosPorId.ContainsKey(dimensionDto.IdItemMiembro))
                {
                    var etiquetasMiembro = conceptosPorId[dimensionDto.IdItemMiembro].Etiquetas;
                    var keyEtiquetasMiembro = ObtenHashGrupoEtiquetasDicionario(dimensionDto.IdItemMiembro, etiquetasMiembro, estructuraMapeo);
                    if (etiquetasPorHash.ContainsKey(keyEtiquetasMiembro))
                    {
                        dimensionItem.EtiquetasMiembroDimension = etiquetasPorHash[keyEtiquetasMiembro];
                    }
                }
                listaDimensionesMimembroGrupo.Add(dimensionItem);
                listaModeloBase.Add(dimensionItem);
            }
            //var hashGrupo = GeneraHashGrupo(listaOrdenamiento);
            foreach (var dimensionItem in listaDimensionesMimembroGrupo)
            {
                if (!dimensionesMiembroGrupo.ContainsKey(idContexto))
                {
                    dimensionesMiembroGrupo.Add(idContexto, dimensionItem);
                }
            }
            if (!dimensionesMiembrosPorHash.ContainsKey(idContexto))
            {
                dimensionesMiembrosPorHash.Add(idContexto, listaModeloBase);
            }

            dimensionesMiembroGrupoPorId.Add(idContexto, listaDimensionesMimembroGrupo);
            return idContexto;
        }
        /// <summary>
        /// Obtiene el has del grupo de etiquetas por lenguaje.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto propietario de las etiquetas.</param>
        /// <param name="etiquetasPorLenguajeRol">Diccionario de diccionarios de etiquetas.</param>
        /// <param name="estructuraMapeo">Mapeo cellstore.</param>
        /// <returns>Hashdel grupo de etiquetas.</returns>
        private string ObtenHashGrupoEtiquetasDicionario(String idConcepto, IDictionary<string, IDictionary<string, EtiquetaDto>> etiquetasPorLenguajeRol, EstructuraMapeoDTO estructuraMapeo)
        {
            var listaEtiquetas = new List<EtiquetaDto>();
            foreach (var lenguaje in etiquetasPorLenguajeRol.Keys)
            {
                var etiquetasPorRol = etiquetasPorLenguajeRol[lenguaje];
                foreach (var rol in etiquetasPorRol.Keys)
                {
                    var valorEtiqueta = etiquetasPorRol[rol];
                    listaEtiquetas.Add(valorEtiqueta);
                }
            }
            var hashGrupoEtiquetas = ProcesaListadoEtiquetas(idConcepto, listaEtiquetas, estructuraMapeo);
            return hashGrupoEtiquetas;
        }
        /// <summary>
        /// Procesa un diccionario de etiquetas y agrega las etiquetas al mapeo cellstore.
        /// </summary>
        /// <param name="diccionarioEtiquetas">Diccionario con las etiquetas a procesar.</param>
        /// <param name="estructuraMapeo">Estructura de mapeo cell store.</param>
        /// <returns>Hash del grupo de etiquetas procesado.</returns>
        private string ObtenHashGrupoEtiquetasDicionario(String idConcepto, IDictionary<string, EtiquetaDto> diccionarioEtiquetas, EstructuraMapeoDTO estructuraMapeo)
        {
            var listaEtiquetas = new List<EtiquetaDto>();
            foreach (var lenguaje in diccionarioEtiquetas.Keys)
            {
                var etiqueta = diccionarioEtiquetas[lenguaje];
                listaEtiquetas.Add(etiqueta);
            }
            var hashGrupoEtiquetas = ProcesaListadoEtiquetas(idConcepto, listaEtiquetas, estructuraMapeo);
            return hashGrupoEtiquetas;
        }
        /// <summary>
        /// Procesa el periodo para el contexto dado.
        /// </summary>
        /// <param name="idContexto">Identificador del contexto del que se requeire el periodo entidad.</param>
        /// <param name="estructuraMapeo">Estructura de mapeo del cellstroe.</param>
        /// <returns>Periodo cell store.</returns>
        private Periodo ProcesaPeriodoEntidad(string idContexto, EstructuraMapeoDTO estructuraMapeo)
        {
            var periodosPorId = estructuraMapeo.PeriodosPorId;
            if (periodosPorId.ContainsKey(idContexto))
            {
                return periodosPorId[idContexto];
            }
            var instancia = estructuraMapeo.DocumentoInstancia;
            var contextoDto = instancia.ContextosPorId[idContexto];
            var periodoDto = contextoDto.Periodo;
            var ano = periodoDto.Tipo == PeriodoDto.Instante ? periodoDto.FechaInstante.Year :
                      periodoDto.Tipo == PeriodoDto.Duracion ? periodoDto.FechaFin.Year : 0;
            var nombrePeriodo = GeneraNombrePeriodo(periodoDto, out ano, estructuraMapeo);
            var trimestre = DeterminaValorTrimestre(periodoDto, estructuraMapeo);
            var periodo = new Periodo()
            {
                TipoPeriodo = periodoDto.Tipo,
                FechaInicio = periodoDto.FechaInicio,
                FechaFin = periodoDto.FechaFin,
                FechaInstante = periodoDto.FechaInstante,
                Alias = nombrePeriodo
            };

            periodo.HashPeriodo = periodo.GeneraHashId();

            var periodos = estructuraMapeo.Periodos;
            if (!periodos.ContainsKey(periodo.HashPeriodo))
            {
                periodos.Add(periodo.HashPeriodo, periodo);
            }
            periodosPorId.Add(idContexto, periodo);
            return periodo;
        }
        /// <summary>
        /// Inteta determinar el nombre del periodo medainte las fechas.
        /// </summary>
        /// <param name="periodoDto">Periodo a evaluar.</param>
        /// <param name="ano">Ano actual.</param>
        /// <param name="estructuraMapeo">Estructura de mapeo cell strore.</param>
        /// <returns>Nombre del periodo.</returns>
        private string GeneraNombrePeriodo(PeriodoDto periodoDto, out int ano, EstructuraMapeoDTO estructuraMapeo)
        {
            string nombre = null;
            if (periodoDto.Tipo == PeriodoDto.Instante)
            {
                var fecha = periodoDto.FechaInstante;
                int cierreTrimestre = DeterminaTrimestreFechaFin(fecha);
                ano = fecha.Year;

                if (cierreTrimestre == 1)
                {
                    nombre = "Cierre T1";
                }
                else if (cierreTrimestre == 2)
                {
                    nombre = "Cierre T2";
                }
                else if (cierreTrimestre == 3)
                {
                    nombre = "Cierre T3";
                }
                else if (cierreTrimestre == 4)
                {
                    nombre = "Cierre T4";
                }
                else if (cierreTrimestre == 5)
                {
                    nombre = "Cierre T4";
                    ano = fecha.Year - 1;
                }
                else
                {
                    nombre = String.Empty;
                }
            }
            else if (periodoDto.Tipo == PeriodoDto.Duracion)
            {
                var fechaInicio = periodoDto.FechaInicio;
                var fechaFin = periodoDto.FechaFin;
                ano = fechaFin.Year;

                int cierreTrimestre = DeterminaTrimestreFechaFin(fechaFin);
                int inicioTrimestre = DeterminaTrimestreFechaInicio(fechaInicio);
                int anosDiferencia = fechaFin.Year - fechaInicio.Year;
                if (cierreTrimestre <= -1 || inicioTrimestre <= -1 || (anosDiferencia) > 1)
                {
                    return nombre;
                }
                if (cierreTrimestre == 4 && fechaInicio.Year < fechaFin.Year)
                {
                    ano = fechaInicio.Year;
                }

                if (cierreTrimestre >= 4)
                {
                    cierreTrimestre = 4;
                }
                if (inicioTrimestre == 0)
                {
                    inicioTrimestre = 1;
                }
                if (inicioTrimestre == 1)
                {
                    if (cierreTrimestre == 1)
                    {
                        nombre = "T1";
                    }
                    else
                    {
                        nombre = "Acumulado T" + cierreTrimestre;
                    }
                }
                else if ((anosDiferencia == 1) && ((fechaFin - fechaInicio).TotalDays >= 364))
                {
                    nombre = "A 12 meses T" + cierreTrimestre;
                }
                else if (inicioTrimestre == cierreTrimestre)
                {
                    nombre = "T" + cierreTrimestre;
                }


            }
            else
            {
                ano = 0;
                nombre = "Por Siempre";
            }
            return nombre;
        }
        /// <summary>
        /// Determina el trimeste por la fecha de cierre.
        /// Retorna -1 si la fecha no representa un fin de trimestre.
        /// Retorna 5 si la fecha es un primero de enero es decir un cuarto trimestre del año anterior.
        /// </summary>
        /// <param name="fechaFin">Fecha de cierre del trimestre</param>
        /// <returns>Numero de trimestre.</returns>
        private int DeterminaTrimestreFechaFin(DateTime fechaFin)
        {
            var cierreTrimestre = -1;
            if ((fechaFin.Month == 3 && fechaFin.Day == 31) || (fechaFin.Month == 4 && fechaFin.Day == 1))
            {
                cierreTrimestre = 1;
            }
            else if ((fechaFin.Month == 6 && fechaFin.Day == 30) || (fechaFin.Month == 7 && fechaFin.Day == 1))
            {
                cierreTrimestre = 2;
            }
            else if ((fechaFin.Month == 9 && fechaFin.Day == 30) || (fechaFin.Month == 10 && fechaFin.Day == 1))
            {
                cierreTrimestre = 3;
            }
            else if ((fechaFin.Month == 12 && fechaFin.Day == 31))
            {
                cierreTrimestre = 4;
            }
            else if ((fechaFin.Month == 1 && fechaFin.Day == 1))
            {
                cierreTrimestre = 5;
            }
            return cierreTrimestre;

        }
        /// <summary>
        /// Determina el trimeste por la fecha de cierre.
        /// Retorna -1 si la fecha no representa un fin de trimestre.
        /// Retorna 0 si la fecha es 31 de diciembre osea inicio de T1 pero del año anterior.
        /// </summary>
        /// <param name="fechaFin">Fecha de cierre del trimestre</param>
        /// <returns>Numero de trimestre.</returns>
        private int DeterminaTrimestreFechaInicio(DateTime fechaInicio)
        {
            var inicioTrimestre = -1;
            if ((fechaInicio.Month == 3 && fechaInicio.Day == 31) || (fechaInicio.Month == 4 && fechaInicio.Day == 1))
            {
                inicioTrimestre = 2;
            }
            else if ((fechaInicio.Month == 6 && fechaInicio.Day == 30) || (fechaInicio.Month == 7 && fechaInicio.Day == 1))
            {
                inicioTrimestre = 3;
            }
            else if ((fechaInicio.Month == 9 && fechaInicio.Day == 30) || (fechaInicio.Month == 10 && fechaInicio.Day == 1))
            {
                inicioTrimestre = 4;
            }
            else if ((fechaInicio.Month == 1 && fechaInicio.Day == 1))
            {
                inicioTrimestre = 1;
            }
            else if ((fechaInicio.Month == 12 && fechaInicio.Day == 31))
            {
                inicioTrimestre = 0;
            }
            return inicioTrimestre;

        }
        /// <summary>
        /// Determina el nombre del trimestre para el periodo indicado.
        /// </summary>
        /// <param name="estructuraMapeo">Nombre del trimestre para el periodo indicado.</param>
        /// <returns>Nombre del trimestre</returns>
        private int DeterminaValorTrimestre(PeriodoDto periodoDto, EstructuraMapeoDTO estructuraMapeo)
        {
            int trimestre = 0;
            if (periodoDto.Tipo == PeriodoDto.Instante)
            {
                var fecha = periodoDto.FechaInstante;
                int cierreTrimestre = DeterminaTrimestreFechaFin(fecha);

                if (cierreTrimestre >= 1 && cierreTrimestre <= 4)
                {
                    trimestre = cierreTrimestre;
                }
                else
                {
                    if (cierreTrimestre == 5)
                    {
                        trimestre = 4;
                    }
                }
            }
            else if (periodoDto.Tipo == PeriodoDto.Duracion)
            {
                var fechaInicio = periodoDto.FechaInicio;
                var fechaFin = periodoDto.FechaFin;
                int cierreTrimestre = DeterminaTrimestreFechaFin(fechaFin);
                int inicioTrimestre = DeterminaTrimestreFechaInicio(fechaInicio);
                int anosDiferencia = fechaFin.Year - fechaInicio.Year;
                if (cierreTrimestre <= -1 || inicioTrimestre <= -1 || (anosDiferencia) > 1)
                {
                    return trimestre;
                }
                if (cierreTrimestre >= 4)
                {
                    cierreTrimestre = 4;
                }
                if (inicioTrimestre == 0)
                {
                    inicioTrimestre = 1;
                }
                if (inicioTrimestre == 1)
                {
                    if (cierreTrimestre == 1)
                    {
                        trimestre = 1;
                    }
                    else
                    {
                        trimestre = cierreTrimestre;
                    }
                }
                else if ((anosDiferencia == 1) && ((fechaFin - fechaInicio).TotalDays >= 364))
                {
                    trimestre = cierreTrimestre;
                }
                else if (inicioTrimestre == cierreTrimestre)
                {
                    trimestre = cierreTrimestre;
                }
            }
            return trimestre;
        }
        /// <summary>
        /// Procesa la empresa en el mapeo.
        /// </summary>
        /// <param name="idEntidad">Identificador de la entidad.</param>
        /// <param name="estructuraMapeo">Estrucutra de mapeo del cell store.</param>
        /// <returns>Hash de la entidad.</returns>
        private Entidad ProcesaEntidad(string idEntidad, EstructuraMapeoDTO estructuraMapeo)
        {
            var entidadesPorId = estructuraMapeo.EntidadesPorId;
            if (entidadesPorId.ContainsKey(idEntidad))
            {
                return entidadesPorId[idEntidad];
            }
            if (!estructuraMapeo.DocumentoInstancia.EntidadesPorId.ContainsKey(idEntidad))
            {
                LogUtil.Error(new Dictionary<string, object>()
                {
                    {"Error","No existe la entidad [" + idEntidad + "] en el documento de instancia."},
                    {"EntidadesExistentes", estructuraMapeo.DocumentoInstancia.EntidadesPorId}
                });
                throw new System.Collections.Generic.KeyNotFoundException("No existe la entidad [" + idEntidad + "] en el documento de instancia.");
            }
            var entidadDto = estructuraMapeo.DocumentoInstancia.EntidadesPorId[idEntidad];
            var entidad = new Entidad
            {
                IdEntidad = entidadDto.IdEntidad,
                Nombre = entidadDto.Id,
                Esquema = entidadDto.EsquemaId
            };

            entidad.HashEntidad = entidad.GeneraHashId();
            var entidades = estructuraMapeo.Entidades;
            if (!entidades.ContainsKey(entidad.HashEntidad))
            {
                entidades.Add(entidad.HashEntidad, entidad);
            }
            entidadesPorId.Add(idEntidad, entidad);
            return entidad;
        }
        /// <summary>
        /// Retorna el hash de la unidad en el cellstrore.
        /// </summary>
        /// <param name="idUnidad">Unidad a procesar.</param>
        /// <param name="estructuraMapeo">Mapeo cellstore</param>
        /// <returns>Hash que identifica la unidad en el cellstrore.</returns>
        private Unidad ProcesaUnidad(string idUnidad, EstructuraMapeoDTO estructuraMapeo)
        {

            var unidadesPorId = estructuraMapeo.UnidadesPorId;

            if (unidadesPorId.ContainsKey(idUnidad))
            {
                return unidadesPorId[idUnidad];
            }
            var unidadDto = estructuraMapeo.DocumentoInstancia.UnidadesPorId[idUnidad];
            var unidades = estructuraMapeo.Unidades;

            var unidad = new Unidad()
            {
                Tipo = unidadDto.Tipo
            };
            if (unidadDto.Tipo == UnidadDto.Divisoria)
            {
                unidad.MedidasNumerador = ProcesaMedidas(unidadDto.MedidasNumerador, estructuraMapeo);
                unidad.MedidasDenominador = ProcesaMedidas(unidadDto.MedidasDenominador, estructuraMapeo);
            }
            else
            {
                unidad.Medidas = ProcesaMedidas(unidadDto.Medidas, estructuraMapeo);
            }
            unidad.HashUnidad = unidad.GeneraHashId();
            if (!unidades.ContainsKey(unidad.HashUnidad))
            {
                unidades.Add(unidad.HashUnidad, unidad);
            }
            unidadesPorId.Add(idUnidad, unidad);
            return unidad;
        }
        /// <summary>
        /// Procesa el listado de medidas y retorna el hash del conjunto de medidas.
        /// </summary>
        /// <param name="listaMedidasInstancia">Lista conn las medidas a evaluar.</param>
        /// <param name="estructuraMapeo">Estructura dondes serán mapeadas.</param>
        /// <returns>Hash del grupo de medidas generado.</returns>
        private IList<Medida> ProcesaMedidas(IList<MedidaDto> listaMedidasInstancia, EstructuraMapeoDTO estructuraMapeo)
        {
            var listaMedidas = new List<Medida>();
            foreach (var medidaDto in listaMedidasInstancia)
            {
                var medida = new Medida()
                {
                    EspacioNombres = medidaDto.EspacioNombres,
                    Nombre = medidaDto.Nombre
                };
                medida.HashMedida = medida.GeneraHashId();
                listaMedidas.Add(medida);
                if (!estructuraMapeo.Medidas.ContainsKey(medida.HashMedida))
                {
                    estructuraMapeo.Medidas.Add(medida.HashMedida, medida);
                }
            }
            return listaMedidas;
        }
        /// <summary>
        /// Asigna los conceptos del documento de instancia al diccionario correspondiente.
        /// </summary>
        /// <param name="estructuraMapeo">Estructura a procesar.</param>
        private void ProcesaConceptos(EstructuraMapeoDTO estructuraMapeo)
        {
            var instancia = estructuraMapeo.DocumentoInstancia;
            foreach (var idconceptoInstancia in instancia.Taxonomia.ConceptosPorId.Keys)
            {
                ProcesaConceptoInstancia(idconceptoInstancia, estructuraMapeo);
            }
        }
        /// <summary>
        /// Procesa los roles de presentacción para llenar los mapas de elementos a persistir.
        /// </summary>
        /// <param name="estructuraMapeo">Mapa con los elementos del cellstore.</param>
        private void ProcesaRolesPresentacionConceptos(EstructuraMapeoDTO estructuraMapeo)
        {
            var listaRolesPresentacionTaxonomia = estructuraMapeo.DocumentoInstancia.Taxonomia.RolesPresentacion;
            var catalogoRolesPresentacion = estructuraMapeo.RolesPresentacionCatalogo;
            var catalogoConceptosRolPresentacion = estructuraMapeo.ConceptosRolPresentacion;
            var taxonomia = estructuraMapeo.Taxonomia;
            var nombreTaxonomia = NOMBRE_TAXONOMIA.ContainsKey(taxonomia.EspacioNombresPrincipal) ?  
                NOMBRE_TAXONOMIA[taxonomia.EspacioNombresPrincipal] : taxonomia.EspacioNombresPrincipal;

            foreach (var rolPresentacionTaxonomia in listaRolesPresentacionTaxonomia)
            {
                var rolPresentacion = new RolPresentacion()
                {
                    Taxonomia = taxonomia.EspacioNombresPrincipal,
                    NombreTaxonomia = nombreTaxonomia,
                    Uri = rolPresentacionTaxonomia.Uri,
                    Conceptos = new List<ConceptoRolPresentacion>()
                };
                rolPresentacion.IdRolPresentacion = rolPresentacion.GeneraHashId();
                rolPresentacion.Etiquetas = ObtenEtiquetasRol(rolPresentacionTaxonomia, estructuraMapeo.DocumentoInstancia.Taxonomia.EtiquetasRol);

                if (!catalogoRolesPresentacion.ContainsKey(rolPresentacion.IdRolPresentacion))
                {
                    catalogoRolesPresentacion.Add(rolPresentacion.IdRolPresentacion, rolPresentacion);
                }
                AsignaConceptosRolPresentacion(rolPresentacionTaxonomia.Estructuras, rolPresentacion, 0, estructuraMapeo);
            }
        }
        /// <summary>
        /// Asigna la uri indicada a todos los conceptos  del listado de conceptos y sus sub listados de subestructuras.
        /// </summary>
        /// <param name="listaEstructuras">Lista de estructuras a a anlizar.</param>
        /// <param name="uri">Uri a asignar.</param>
        /// <param name="urisPorIdConcepto">Diccionario donde se relacionean las uris por idconcepto.</param>
        private void AsignaUrisPorConcepto(IList<EstructuraFormatoDto> listaEstructuras, string uri, IDictionary<string, IList<string>> urisPorIdConcepto)
        {
            foreach (var estrictura in listaEstructuras)
            {
                var idConcepto = estrictura.IdConcepto;
                if (!urisPorIdConcepto.ContainsKey(idConcepto))
                {
                    urisPorIdConcepto.Add(idConcepto, new List<string>());
                }
                var listaUris = urisPorIdConcepto[idConcepto];
                if (!listaUris.Contains(uri))
                {
                    listaUris.Add(uri);
                }
                var subEstructuras = estrictura.SubEstructuras;
                if (subEstructuras != null)
                {
                    AsignaUrisPorConcepto(subEstructuras, uri, urisPorIdConcepto);
                }
            }
        }


        /// <summary>
        /// Asigna la uri indicada a todos los conceptos  del listado de conceptos y sus sub listados de subestructuras.
        /// </summary>
        /// <param name="listaEstructuras">Lista de estructuras a a anlizar.</param>
        /// <param name="uri">Uri a asignar.</param>
        /// <param name="urisPorIdConcepto">Diccionario donde se relacionean las uris por idconcepto.</param>
        private void AsignaConceptosRolPresentacion(IList<EstructuraFormatoDto> listaEstructuras, RolPresentacion rolPresentacion, int indetancion, EstructuraMapeoDTO estructuraMapeo)
        {
            var diccionarioConceptos = estructuraMapeo.ConceptosPorId;
            var conceptosInstancia = estructuraMapeo.DocumentoInstancia.Taxonomia.ConceptosPorId;
            var conceptosRolPresentacion = estructuraMapeo.ConceptosRolPresentacion;
            //rolPresentacion.Conceptos = new List<ConceptoRolPresentacion>();
            foreach (var estructura in listaEstructuras)
            {
                var idConcepto = estructura.IdConcepto;
                var concepto = diccionarioConceptos[idConcepto];
                var conceptoInstancia = conceptosInstancia[idConcepto];
                var etiquetas = conceptoInstancia.Etiquetas;
                //var rolEtiqueta = estructura.RolEtiquetaPreferido ?? ETIQUETA_ROL_PRESENTACION_DEFAULT;
                
                var conceptoRol = new ConceptoRolPresentacion()
                {
                    IdConcepto = concepto.IdConcepto,
                    Tipo = concepto.Tipo,
                    Balance = concepto.Balance,
                    TipoDato = concepto.TipoDato,
                    Nombre = concepto.Nombre,
                    EspacioNombres = concepto.EspacioNombres,
                    EsHipercubo = conceptoInstancia.EsHipercubo,
                    EsDimension = conceptoInstancia.EsDimension ?? false,
                    EsAbstracto = conceptoInstancia.EsAbstracto ?? false,
                    EsMiembroDimension = conceptoInstancia.EsMiembroDimension ?? false,
                    Taxonomia = conceptoInstancia.EspacioNombresPrincipal,
                    Indentacion = indetancion,
                    Etiquetas = new List<Etiqueta>()

                };

                foreach (var idioma in etiquetas.Keys)
                {
                    var etiquetasPorIdioma = etiquetas[idioma];

                    foreach (var etiquetaDto in etiquetasPorIdioma.Values)
                    {
                        conceptoRol.Etiquetas.Add(new Etiqueta()
                        {
                            Rol = etiquetaDto.Rol,
                            Idioma = etiquetaDto.Idioma,
                            Valor = etiquetaDto.Valor
                        });
                    }
                }

                var listaConceptos = rolPresentacion.Conceptos;
                conceptoRol.Posicion = listaConceptos.Count();
                conceptoRol.HashConceptoRolPresentacion = conceptoRol.GeneraHashId();
                listaConceptos.Add(conceptoRol);
                if (!conceptosRolPresentacion.ContainsKey(conceptoRol.HashConceptoRolPresentacion))
                {
                    conceptosRolPresentacion.Add(conceptoRol.HashConceptoRolPresentacion, conceptoRol);
                }

                if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count() > 0)
                {
                    AsignaConceptosRolPresentacion(estructura.SubEstructuras, rolPresentacion, (indetancion + 1), estructuraMapeo);
                }
            }
        }
        /// <summary>
        /// Retorna una copia del conceptoRolPresentacion indicado.
        /// </summary>
        /// <param name="origen">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        private ConceptoRolPresentacion CopiaConceptoRolPresentacion(ConceptoRolPresentacion origen)
        {
            return new ConceptoRolPresentacion()
            {
                IdConcepto = origen.IdConcepto,
                Tipo = origen.Tipo,
                Balance = origen.Balance,
                TipoDato = origen.TipoDato,
                Nombre = origen.Nombre,
                EspacioNombres = origen.EspacioNombres,
                EsHipercubo = origen.EsHipercubo,
                EsDimension = origen.EsDimension,
                EsAbstracto = origen.EsAbstracto,
                EsMiembroDimension = origen.EsMiembroDimension,
                Taxonomia = origen.Taxonomia,
                Posicion = origen.Posicion,
                Indentacion = origen.Indentacion,
                Etiquetas = origen.Etiquetas,
                HashConceptoRolPresentacion = origen.HashConceptoRolPresentacion
            };
        }

        /// <summary>
        /// Procesa un concepto del la taxonomía.
        /// </summary>
        /// <param name="idconceptoInstancia">Identificador del concepto en la taxonomía.</param>
        /// <param name="estructuraMapeo">Estructura para el mapeo al cellstore.</param>
        /// <returns>Retorna el hash del cellstore del concepto.</returns>
        private Concepto ProcesaConceptoInstancia(String idconceptoInstancia, EstructuraMapeoDTO estructuraMapeo)
        {
            var conceptosPorId = estructuraMapeo.ConceptosPorId;
            var instancia = estructuraMapeo.DocumentoInstancia;
            var conceptos = estructuraMapeo.Conceptos;
            var etiquetasPorHash = estructuraMapeo.ListasEtiquetasPorHash;
            if (conceptosPorId.ContainsKey(idconceptoInstancia))
            {
                return conceptosPorId[idconceptoInstancia];
            }
            var taxonomia = estructuraMapeo.Taxonomia;
            ConceptoDto conceptoInstancia = null;
            Concepto concepto = null;
            if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idconceptoInstancia, out conceptoInstancia))
            {
                concepto = new Concepto()
                {
                    IdConcepto = idconceptoInstancia,
                    Tipo = conceptoInstancia.Tipo,
                    Balance = conceptoInstancia.Balance ?? -1,
                    TipoDato = conceptoInstancia.TipoDato,
                    Nombre = conceptoInstancia.Nombre,
                    EspacioNombres = conceptoInstancia.EspacioNombres
                };
            }
            else
            {
                LogUtil.Error("No se encontró el concepto [" + idconceptoInstancia + "], en la taxonomía [" + instancia.Taxonomia.EspacioNombresPrincipal + "]");
                concepto = new Concepto()
                {
                    IdConcepto = idconceptoInstancia,
                    Tipo = ConceptoDto.Item,
                    Balance = -1,
                    TipoDato = "",
                    Nombre = idconceptoInstancia,
                    EspacioNombres = taxonomia.EspacioNombres
                };
                
            }
            
            concepto.HashConcepto = concepto.GeneraHashId();
            if (conceptos.ContainsKey(concepto.HashConcepto))
            {
                conceptosPorId.Add(idconceptoInstancia, concepto);
                return concepto;
            }
            if (conceptoInstancia != null)
            {
                var idEtiquetas = ProcesaEtiquetasConcepto(conceptoInstancia, estructuraMapeo);
                if (etiquetasPorHash.ContainsKey(idEtiquetas))
                {
                    concepto.Etiquetas = etiquetasPorHash[idEtiquetas];
                }
            }
            conceptos.Add(concepto.HashConcepto, concepto);
            conceptosPorId.Add(idconceptoInstancia, concepto);
            return concepto;
        }
        /// <summary>
        /// Procesa el listado de conceptos de un concepto y lo registra en el mapeo cellstore.
        /// </summary>
        /// <param name="conceptoInstancia">Concepto del cual se procesarán las etiquetas.</param>
        /// <param name="estructuraMapeo">Estructura para el mapeo a repositorio de datos.</param>
        /// <returns>Hash del grupo de etiquetas.</returns>
        private string ProcesaEtiquetasConcepto(ConceptoDto conceptoInstancia, EstructuraMapeoDTO estructuraMapeo)
        {
            var listaEtiquetas = new List<EtiquetaDto>();
            foreach (var idIdiomaEtiquetas in conceptoInstancia.Etiquetas.Keys)
            {
                var listaEtiquetasIdioma = conceptoInstancia.Etiquetas[idIdiomaEtiquetas];

                foreach (var idRolEtiquetas in listaEtiquetasIdioma.Keys)
                {
                    var etiquetaInstancia = listaEtiquetasIdioma[idRolEtiquetas];
                    listaEtiquetas.Add(etiquetaInstancia);
                }
            }
            var hashGrupoEtiquetas = ProcesaListadoEtiquetas(conceptoInstancia.Id, listaEtiquetas, estructuraMapeo);

            return hashGrupoEtiquetas;
        }
        /// <summary>
        /// Almacena las etiquetas en el listado y retorna el hash del conjunto de etiquetas.
        /// </summary>
        /// <param name="idConcepto">Concepto propietario de las etiquetas.</param>
        /// <param name="listaEtiquetasInstancia">Etiquetas a evaluar.</param>
        /// <param name="estructuraMapeo">Estructura de mapeo cellstrore.</param>
        /// <returns>Hash del grupo de etiquetas.</returns>
        private string ProcesaListadoEtiquetas(String idConcepto, IList<EtiquetaDto> listaEtiquetasInstancia, EstructuraMapeoDTO estructuraMapeo)
        {
            var listaEtiquetas = new List<Etiqueta>();
            var listaOrdenamiento = new List<string>();
            var etiquetasHash = estructuraMapeo.ListasEtiquetasPorHash;
            var listaModeloBase = new List<Etiqueta>();
            foreach (var etiquetaInstancia in listaEtiquetasInstancia)
            {
                var etiqueta = new Etiqueta()
                {
                    Rol = etiquetaInstancia.Rol,
                    Idioma = etiquetaInstancia.Idioma,
                    Valor = etiquetaInstancia.Valor
                };
                listaEtiquetas.Add(etiqueta);
                listaModeloBase.Add(etiqueta);
                listaOrdenamiento.Add(etiqueta.GeneraJsonOrdenamiento());
            }
            
            var etiquetasPorHash = estructuraMapeo.Etiquetas;
            foreach (var etiqueta in listaEtiquetas)
            {
                etiqueta.HashEtiqueta = etiqueta.GeneraHashId();
                if (!etiquetasPorHash.ContainsKey(etiqueta.HashEtiqueta))
                {
                    etiquetasPorHash.Add(etiqueta.HashEtiqueta, etiqueta);
                }
            }
            if (!etiquetasHash.ContainsKey(idConcepto))
            {
                etiquetasHash.Add(idConcepto, listaModeloBase);
            }
            return idConcepto;
        }

        /// <summary>
        /// Genera un hash para un listado de cadenas, ordenandolas previamente.
        /// </summary>
        /// <param name="listaOrdenamiento">Lista de elementos a ordenar para conformar el hash.</param>
        /// <returns>Hash resutante de la combinacion ordenada de todos los elementos en el listado.</returns>
        private string GeneraHashGrupo(List<string> listaOrdenamiento)
        {
            //var listaSinOrdenar = new List<string>(listaOrdenamiento);
            listaOrdenamiento.Sort((x, y) => x.CompareTo(y));
            var jsonGrupoEtiquetasJash = String.Empty;
            foreach (var jsonOrdenamiento in listaOrdenamiento)
            {
                jsonGrupoEtiquetasJash += ", " + jsonOrdenamiento;
            }
            jsonGrupoEtiquetasJash = "[" + jsonGrupoEtiquetasJash.Substring(2) + "]";
            var hashGrupoEtiquetas = UtilAbax.CalcularHash(jsonGrupoEtiquetasJash);


            //LogUtil.Info(new Dictionary<string, object>()
            //    {
            //        {"SinOrdenar", listaSinOrdenar},
            //        {"Ordenada", listaOrdenamiento},
            //        {"jsonGrupoEtiquetasHash", jsonGrupoEtiquetasJash},
            //        {"hashGrupoEtiquestas", hashGrupoEtiquetas}
            //    });

            return hashGrupoEtiquetas;
        }
        /// <summary>
        /// Procesa la taxonomía del documento actual y genera la entidad correspondiente.
        /// </summary>
        /// <param name="estructuraMapeo">Estructura con el mapeo de CellStore.</param>
        /// <returns>La estructura cellstore para la taxonomia.</returns>
        private Taxonomia ProcesaTaxonomia(EstructuraMapeoDTO estructuraMapeo)
        {
            var entidadesPorId = estructuraMapeo.EntidadesPorId;
            var documentoInstancia = estructuraMapeo.DocumentoInstancia;
            var espacioNombres = documentoInstancia.Taxonomia.EspacioDeNombres;
            var espacioNombresPrincipal = documentoInstancia.Taxonomia.EspacioNombresPrincipal;

            if (String.IsNullOrEmpty(espacioNombres) && String.IsNullOrEmpty(espacioNombresPrincipal))
            {
                throw new NullReferenceException("No es posible determinar el espacio de nombres para la taxonomía.");
            }

            if (String.IsNullOrEmpty(espacioNombresPrincipal))
            {
                espacioNombresPrincipal = espacioNombres;
            }

            if (String.IsNullOrEmpty(espacioNombres))
            {
                espacioNombres = espacioNombresPrincipal;
            }

            var taxonomia = new Taxonomia()
            {
                EspacioNombres = espacioNombres,
                EspacioNombresPrincipal = espacioNombresPrincipal,
            };

            taxonomia.HashTaxonomia = taxonomia.GeneraHashId();

            estructuraMapeo.Taxonomia = taxonomia;

            return taxonomia;
        }
        /// <summary>
        /// Llena el registro para la bitacora de reporteo.
        /// </summary>
        /// <param name="estructuraMapeo">Estrucutra con la información general del modelo cellstore.</param>
        private void ProcesaBitacoraReporte(EstructuraMapeoDTO estructuraMapeo)
        {

            var listaPeriodos = estructuraMapeo.Periodos;
            var fechaMaxima = DateTime.Now;
            var taxonomia = estructuraMapeo.Taxonomia;
            estructuraMapeo.Envio = new Envio() { EsVersionActual = true };
            int result = 0;
            DateTime fechaCierre = DateTime.Parse("01/01/1900");
            DateTime fechaAComparar = DateTime.Now;
            Periodo periodoCierre = new Periodo();
            foreach (var hashPeriodo in listaPeriodos.Keys)
            {
                var periodo = listaPeriodos[hashPeriodo];
                if (periodo.TipoPeriodo == 1)
                {
                    fechaAComparar = (DateTime)periodo.FechaInstante;
                }
                else
                {
                    fechaAComparar = (DateTime)periodo.FechaFin;
                }
                result = DateTime.Compare(fechaAComparar, fechaCierre);
                if (result > 0)
                {
                    fechaCierre = fechaAComparar;
                    periodoCierre = periodo;
                }
            }

            Entidad entidad = new Entidad();
            foreach (var hashEntidad in estructuraMapeo.Entidades.Keys)
            {
                entidad = estructuraMapeo.Entidades[hashEntidad];
                break;
            }
            //Entidad
            estructuraMapeo.Envio.Entidad = entidad;
            //Concepto
            estructuraMapeo.Envio.Taxonomia = taxonomia.EspacioNombresPrincipal;
            //Periodo
            estructuraMapeo.Envio.Periodo = new PeriodoEnvio()
            {
                Fecha = fechaCierre,
                Ejercicio = fechaCierre.Year,
                Periodicidad = estructuraMapeo.DocumentoInstancia.Periodicidad
            };
            //Parametros
            EvaluaParametros(estructuraMapeo, fechaCierre);
            //Datos envío
            estructuraMapeo.Envio.FechaRecepcion = estructuraMapeo.FechaRecepcion;
            estructuraMapeo.Envio.FechaProcesamiento = DateTime.Now;
            estructuraMapeo.Envio.NombreArchivo = Path.GetFileName(estructuraMapeo.DocumentoInstancia.NombreArchivo);
            estructuraMapeo.Envio.IdEnvio = estructuraMapeo.Envio.GeneraHashId();
            var idEnvio = estructuraMapeo.Envio.IdEnvio;
            foreach (var hecho in estructuraMapeo.Hechos.Values)
            {
                hecho.IdEnvio = idEnvio;
                hecho.IdHechoEnvio = hecho.GeneraHashHechoEnvio();
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="rol"></param>
        /// <param name="etiquetasRol"></param>
        /// <returns></returns>
        private IList<Etiqueta> ObtenEtiquetasRol(RolDto<EstructuraFormatoDto> rol, IDictionary<string, IDictionary<string, EtiquetaDto>> etiquetasRol)
        {
            var etiquetas = new List<Etiqueta>();

            if (rol != null && !String.IsNullOrEmpty(rol.Uri))
            {
                var etiqueta = new Etiqueta()
                {
                    Idioma = "es",
                    Rol = rol.Uri,
                    Valor = rol.Nombre
                };

                etiquetas.Add(etiqueta);

                foreach (var roles in etiquetasRol.Values)
                {
                    EtiquetaDto etiquetaDto = null;
                    roles.TryGetValue(rol.Uri, out etiquetaDto);

                    if (etiquetaDto != null)
                    {
                        etiqueta = new Etiqueta
                        {
                            Idioma = etiquetaDto.Idioma,
                            Rol = rol.Uri,
                            Valor = etiquetaDto.Valor
                        };
                        etiquetas.Add(etiqueta);
                    }
                }
            }

            return etiquetas;
        }
        /// <summary>
        /// Determina si el reporte esta dictaminado.
        /// </summary>
        /// <param name="estructuraMapeo"></param>
        /// <returns></returns>
        public bool DeterminaDictaminado(EstructuraMapeoDTO estructuraMapeo)
        {
            Boolean dictaminado = false;
            var idHechosPorConcepto = estructuraMapeo.DocumentoInstancia.HechosPorIdConcepto;
            var hechosPorId = estructuraMapeo.DocumentoInstancia.HechosPorId;
            if (idHechosPorConcepto.ContainsKey("ifrs_mx-cor_20141205_NumeroDeTrimestre"))
            {
                var idHechoDictaminado = idHechosPorConcepto["ifrs_mx-cor_20141205_NumeroDeTrimestre"].First();
                if (hechosPorId.ContainsKey(idHechoDictaminado))
                {
                    var hechoDictaminado = hechosPorId[idHechoDictaminado];
                    if (hechoDictaminado.Valor.Contains("4D"))
                    {
                        dictaminado = true;
                    }
                }

            }
            if (idHechosPorConcepto.ContainsKey("mx_trac_NumberOfQuarter"))
            {
                var idHechoDictaminado = idHechosPorConcepto["mx_trac_NumberOfQuarter"].First();
                if (hechosPorId.ContainsKey(idHechoDictaminado))
                {
                    var hechoDictaminado = hechosPorId[idHechoDictaminado];
                    if (hechoDictaminado.Valor.Contains("4D"))
                    {
                        dictaminado = true;
                    }
                }

            }
            if (idHechosPorConcepto.ContainsKey("mx_ccd_NumberOfQuarter"))
            {
                var idHechoDictaminado = idHechosPorConcepto["mx_ccd_NumberOfQuarter"].First();
                if (hechosPorId.ContainsKey(idHechoDictaminado))
                {
                    var hechoDictaminado = hechosPorId[idHechoDictaminado];
                    if (hechoDictaminado.Valor.Contains("4D"))
                    {
                        dictaminado = true;
                    }
                }

            }
            if (idHechosPorConcepto.ContainsKey("mx_deuda_NumberOfQuarter"))
            {
                var idHechoDictaminado = idHechosPorConcepto["mx_deuda_NumberOfQuarter"].First();
                if (hechosPorId.ContainsKey(idHechoDictaminado))
                {
                    var hechoDictaminado = hechosPorId[idHechoDictaminado];
                    if (hechoDictaminado.Valor.Contains("4D"))
                    {
                        dictaminado = true;
                    }
                }
            }
            return dictaminado;
        }
        /// <summary>
        /// Determina si el reporte esta consolidado
        /// </summary>
        /// <param name="estructuraMapeo"></param>
        /// <returns></returns>
        public Boolean DeterminaConsolidado(EstructuraMapeoDTO estructuraMapeo)
        {
            Boolean consolidado = false;
            var idHechosPorConcepto = estructuraMapeo.DocumentoInstancia.HechosPorIdConcepto;
            var hechosPorId = estructuraMapeo.DocumentoInstancia.HechosPorId;
            if (idHechosPorConcepto.ContainsKey("ifrs_mx-cor_20141205_Consolidado"))
            {
                var idHechoConsolidado = idHechosPorConcepto["ifrs_mx-cor_20141205_Consolidado"].First();
                if (hechosPorId.ContainsKey(idHechoConsolidado))
                {
                    var hechoConsolidado = hechosPorId[idHechoConsolidado];
                    Boolean.TryParse(hechoConsolidado.Valor, out consolidado);
                }

            }
            return consolidado;
        }
        /// <summary>
        /// Determina el número de fideicomiso.
        /// </summary>
        /// <param name="estructuraMapeo">Número de fideicomiso del documento.</param>
        /// <returns></returns>
        public String DeterminaNumeroFideicomiso(EstructuraMapeoDTO estructuraMapeo)
        {
            var idsConceptosNumeroFideicomiso = new List<String>()
            {
                "mx_deuda_TrustNumber",
                "mx_ccd_TrustNumber",
                "mx_trac_TrustNumber",
                "ar_pros_NumberOfTrust"
            };
            var numeroFideicomiso = String.Empty;
            var idHechosPorConcepto = estructuraMapeo.DocumentoInstancia.HechosPorIdConcepto;
            var hechosPorId = estructuraMapeo.DocumentoInstancia.HechosPorId;
            foreach (var idConcepto in idsConceptosNumeroFideicomiso)
            {
                IList<String> idsHechos;
                if (idHechosPorConcepto.TryGetValue(idConcepto, out idsHechos))
                {
                    var idHecho = idsHechos.First();
                    AbaxXBRLCore.Viewer.Application.Dto.HechoDto hecho;
                    if (hechosPorId.TryGetValue(idHecho, out hecho))
                    {
                        numeroFideicomiso = hecho.Valor;
                        break;
                    }
                }
            }
            return numeroFideicomiso;
        }
        /// <summary>
        /// Determina los parámetros de configuración base.
        /// </summary>
        /// <param name="estructuraMapeo"></param>
        /// <param name="fechaCierre"></param>
        public void EvaluaParametros(EstructuraMapeoDTO estructuraMapeo, DateTime fechaCierre)
        {
            var parametros = new Dictionary<String, object>();
            var dictaminado = DeterminaDictaminado(estructuraMapeo);
            var consolidado = DeterminaConsolidado(estructuraMapeo);
            var numeroFideicomiso = DeterminaNumeroFideicomiso(estructuraMapeo);
            parametros.Add("Ano", fechaCierre.Year.ToString());
            parametros.Add("Mes", fechaCierre.Month.ToString());
            parametros.Add("Consolidado", consolidado ? "true" : "false");
            parametros.Add("Dictaminado", dictaminado ? "true" : "false");
            if (!String.IsNullOrEmpty(numeroFideicomiso))
            {
                parametros.Add("NumeroFideicomiso", numeroFideicomiso);
            }
            var trimestre = 0;
            if (estructuraMapeo.DocumentoInstancia.Periodicidad == 1)
            {
                
                var mes = fechaCierre.Month;
                if (mes <= 3)
                {
                    trimestre = 1;
                }
                else if (mes <= 6)
                {
                    trimestre = 2;
                }
                else if (mes <= 9)
                {
                    trimestre = 3;
                }
                else
                {
                    trimestre = 4;
                }
            }
            parametros.Add("Trimestre", trimestre.ToString());
            var parametrosConfiguracion = estructuraMapeo.DocumentoInstancia.ParametrosConfiguracion;
            if (parametrosConfiguracion != null && parametrosConfiguracion.Count() > 0)
            {
                foreach (var nombreParametro in parametrosConfiguracion.Keys)
                {
                    parametros[nombreParametro] = parametrosConfiguracion[nombreParametro];
                }
            }
            estructuraMapeo.Envio.Parametros = parametros;
        }

        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <returns>Listado con la representación JSON de los elementos encontrados para el filtro, ordenamiento y página dados.</returns>
        public IList<T> ConsultaElementosColeccion<T>(string filtrosString)
        {
            return AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<T>(filtrosString);
        }

        /// <summary>
        /// Consultar taxonomias que tengan datos en las taxonomias
        /// </summary>
        /// <returns>Resultado con un listado de nombres de taxonomias</returns>
        public ResultadoOperacionDto ConsultarTaxonomias()
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            IDictionary<String, String> taxonomias = new Dictionary<string, string>();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var campos = Fields.Include("Taxonomia").Include("NombreTaxonomia").Exclude("_id");

                var rolPresentacionCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ROL_PRESENTACION);
                var taxonomiasDocuments = AbaxXBRLCellStoreMongo.ObtenerDocumentos(rolPresentacionCollection, campos);

                var roles = JsonConvert.DeserializeObject<List<RolPresentacion>>(taxonomiasDocuments.ToJson(), settings);

                var resultList = roles
                    .OrderBy(rol => rol.NombreTaxonomia)
                    .GroupBy(rol => rol.Taxonomia)
                    .ToList();

                foreach (var item in resultList)
                {
                    taxonomias[item.Key] = item.First().NombreTaxonomia;
                }

                resultadoOperacion.InformacionExtra = taxonomias;
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Consultar los roles por taxonomia que se tienen registrados
        /// </summary>
        /// <param name="taxonomia"></param>
        /// <param name="idioma"></param>
        /// <returns>Resultado con un listado de roles</returns>
        public ResultadoOperacionDto ConsultarRoles(string taxonomia, string idioma = "es")
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            IDictionary<String, String> roles = new Dictionary<String, String>();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var query = Query.EQ("Taxonomia", taxonomia);
                var campos = Fields.Include("Uri").Include("Etiquetas").Exclude("_id");

                var rolesCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ROL_PRESENTACION);
                var rolesBSON = AbaxXBRLCellStoreMongo.Consulta(rolesCollection, query, campos);

                var rolesPresentacion = JsonConvert.DeserializeObject<List<RolPresentacion>>(rolesBSON.ToJson(), settings);

                foreach (var rol in rolesPresentacion)
                {
                    string nombreRol = rol.Uri;
                    Etiqueta etiqueta = rol.Etiquetas.Where(e => e.Idioma == idioma).FirstOrDefault();

                    if (etiqueta != null)
                    {
                        nombreRol = etiqueta.Valor;
                    }
                    else
                    {
                        etiqueta = rol.Etiquetas.Where(e => e.Idioma == "es").FirstOrDefault();
                        if (etiqueta != null)
                        {
                            nombreRol = etiqueta.Valor;
                        }
                    }

                    roles[rol.Uri] = nombreRol;
                }

                roles = roles.OrderBy(r => r.Value).ToDictionary(r => r.Key, r => r.Value);

                resultadoOperacion.InformacionExtra = roles;
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Consultar los conceptos que se tienen registrados
        /// </summary>
        /// <param name="taxonomia"></param>
        /// <param name="rolUri"></param>
        /// <returns>Resultado con un listado de conceptos</returns>
        public ResultadoOperacionDto ConsultarConceptos(string taxonomia, string rolUri)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            List<ConceptoDto> conceptos = new List<ConceptoDto>();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var queryTaxonomia = Query.EQ("Taxonomia", taxonomia);
                var queryRol = Query.EQ("Uri", rolUri);

                var query = Query.And(
                    queryTaxonomia,
                    queryRol
                );

                var campos = Fields.Include("Conceptos").Exclude("_id");

                var rolesCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ROL_PRESENTACION);
                var rolBSON = AbaxXBRLCellStoreMongo.Consulta(rolesCollection, query, campos);

                var roles = JsonConvert.DeserializeObject<List<RolPresentacion>>(rolBSON.ToJson(), settings);

                if (roles != null && roles.Count() == 1 && roles[0].Conceptos != null && roles[0].Conceptos.Any())
                {
                    var conceptosRol = roles[0].Conceptos.OrderBy(c => c.Posicion).ToList();

                    foreach (ConceptoRolPresentacion conceptoRol in conceptosRol)
                    {
                        ConceptoDto conceptoDto = new ConceptoAdapter(conceptoRol).ConceptoDto;
                        conceptoDto.EspacioNombresPrincipal = taxonomia;

                        conceptos.Add(conceptoDto);
                    }
                }

                resultadoOperacion.InformacionExtra = conceptos.ToArray();
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Consultar los conceptos que se tienen registrados
        /// </summary>
        /// <param name="taxonomia"></param>
        /// <returns>Resultado con un listado de conceptos</returns>
        public ResultadoOperacionDto ConsultarConceptos(string taxonomia)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            List<ConceptoDto> conceptos = new List<ConceptoDto>();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var query = Query.EQ("Taxonomia", taxonomia);
                var rolesCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ROL_PRESENTACION);
                var rolesBSON = AbaxXBRLCellStoreMongo.Consulta(rolesCollection, query);

                var roles = JsonConvert.DeserializeObject<RolPresentacion[]>(rolesBSON.ToJson(), settings);

                foreach (RolPresentacion rol in roles)
                {
                    foreach (ConceptoRolPresentacion conceptoRol in rol.Conceptos)
                    {
                        ConceptoDto conceptoDto = new ConceptoAdapter(conceptoRol).ConceptoDto;
                        conceptoDto.EspacioNombresPrincipal = rol.Taxonomia;

                        conceptos.Add(conceptoDto);
                    }
                }

                resultadoOperacion.InformacionExtra = conceptos.ToArray();
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Realiza las consultas de las emisoras
        /// </summary>
        /// <param name="taxonomia"></param>
        /// <returns>Resultado con las emisoras que se tienen cargadas</returns>
        public ResultadoOperacionDto ConsultarEmisoras(string taxonomia)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            List<EntidadDto> emisoras = new List<EntidadDto>();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var query = Query.EQ("Taxonomia", taxonomia);
                var campos = Fields.Include("Entidad").Exclude("_id");

                var envioCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ENVIO);
                var enviosBSON = AbaxXBRLCellStoreMongo.Consulta(envioCollection, query, campos);

                var envios = JsonConvert.DeserializeObject<Envio[]>(enviosBSON.ToJson(), settings);

                var entidades = envios
                    .Select(envio => envio.Entidad)
                    .OrderBy(entidad => entidad.Nombre)
                    .GroupBy(entidad => entidad.Nombre)
                    .ToList();

                foreach (var grupoEntidad in entidades)
                {
                    var entidad = new EntidadAdapter(grupoEntidad.First()).EntidadDto;

                    emisoras.Add(entidad);
                }

                resultadoOperacion.InformacionExtra = emisoras.ToArray();
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Realiza las consultas de las emisoras
        /// </summary>
        /// <returns>Resultado con las emisoras que se tienen cargadas</returns>
        public ResultadoOperacionDto ConsultarEmisoras()
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            List<EntidadDto> emisoras = new List<EntidadDto>();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var campos = Fields.Include("Entidad").Exclude("_id");

                var envioCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ENVIO);
                var enviosBSON = AbaxXBRLCellStoreMongo.ObtenerDocumentos(envioCollection, campos);
                
                var envios = JsonConvert.DeserializeObject<Envio[]>(enviosBSON.ToJson(), settings);

                var entidades = envios
                    .Select(envio => envio.Entidad)
                    .OrderBy(entidad => entidad.Nombre)
                    .GroupBy(entidad => entidad.Nombre)
                    .ToList();

                foreach (var grupoEntidad in entidades)
                {
                    var entidad = new EntidadAdapter(grupoEntidad.First()).EntidadDto;

                    emisoras.Add(entidad);
                }

                resultadoOperacion.InformacionExtra = emisoras.ToArray();
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Realiza las consultas de las fideicomisos por taxonomia y entidad
        /// </summary>
        /// <param name="taxonomia"></param>
        /// <param name="entidad"></param>
        /// <returns>Resultado con los fideicomisos que se tienen cargadas por taxonomia</returns>
        public ResultadoOperacionDto ConsultarFideicomisos(params string[] entidades)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                List<String> fideicomisos = new List<String>();

                var queryEntidades = Query.In("Entidad.Nombre", CellStoreUtil.GenerarValoresFiltro(entidades));

                var envioCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ENVIO);
                var fideicomisosBSON = AbaxXBRLCellStoreMongo.Distinct(envioCollection, "Parametros.NumeroFideicomiso", queryEntidades);
                fideicomisos = JsonConvert.DeserializeObject<List<String>>(fideicomisosBSON.ToJson(), settings);

                fideicomisos.Sort();

                resultadoOperacion.InformacionExtra = fideicomisos;
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Consultar fechas de reporte que se tengan disponibles en los registros
        /// </summary>
        /// <returns>Resultado con un listado de unidades</returns>
        public ResultadoOperacionDto ConsultarFechasReporte(params string[] entidades)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                List<DateTime> fechas = new List<DateTime>();
                List<BsonValue> entidadesBSON = new List<BsonValue>();

                var queryEntidades = Query.In("Entidad.Nombre", CellStoreUtil.GenerarValoresFiltro(entidades));

                var envioCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ENVIO);
                var fechasBSON = AbaxXBRLCellStoreMongo.Distinct(envioCollection, "Periodo.Fecha", queryEntidades);
                var fechasJSON = CellStoreUtil.DepurarIdentificadorBson(fechasBSON.ToJson());
                fechas = JsonConvert.DeserializeObject<List<DateTime>>(fechasJSON, settings);

                fechas.Sort();

                resultadoOperacion.InformacionExtra = fechas.ToArray();
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
                LogUtil.Error(e);
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Consultar unidades que se tengan disponibles en los registros
        /// </summary>
        /// <returns>Resultado con un listado de unidades</returns>
        public ResultadoOperacionDto ConsultarUnidades()
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var hechoCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(HECHO);

                var medidasBSON = AbaxXBRLCellStoreMongo.Distinct(hechoCollection, "Unidad.Medidas");
                var medidasNumeradorBSON = AbaxXBRLCellStoreMongo.Distinct(hechoCollection, "Unidad.MedidasNumerador");
                var medidasDenominadorBSON = AbaxXBRLCellStoreMongo.Distinct(hechoCollection, "Unidad.MedidasDenominador");

                var medidas = JsonConvert.DeserializeObject<Medida[]>(medidasBSON.ToJson(), settings);
                var medidasNumerador = JsonConvert.DeserializeObject<Medida[]>(medidasNumeradorBSON.ToJson(), settings);
                var medidasDenominador = JsonConvert.DeserializeObject<Medida[]>(medidasDenominadorBSON.ToJson(), settings);

                medidas
                    .Union(medidasNumerador)
                    .Union(medidasDenominador);

                resultadoOperacion.InformacionExtra = medidas;
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Consultar trimestres que se tengan disponibles en los registros
        /// </summary>
        /// <returns>Resultado con un listado de unidades</returns>
        public ResultadoOperacionDto ConsultarTrimestres()
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var envioCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ENVIO);
                var trimestresBSON = AbaxXBRLCellStoreMongo.Distinct(envioCollection, "Parametros.trimestre");
                var trimestres = JsonConvert.DeserializeObject<string[]>(trimestresBSON.ToJson(), settings);

                Array.Sort(trimestres);

                resultadoOperacion.InformacionExtra = trimestres;
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Realiza la consulta al respositorio con los filtros indicados
        /// </summary>
        /// <param name="filtrosConsultaJson">Detalle de filtros de consulta para la informacion de repositorio xbrl en mongo</param>
        /// <returns>Resultao de operacion de la consulta al repositorio de informacion</returns>
        public ResultadoOperacionDto ConsultarRepositorio(EntFiltroConsultaHecho filtrosConsulta, int paginaRequerida, int numeroRegistros)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                filtrosConsulta.filtros.entidadesId = ObtenerEntidades(filtrosConsulta.filtros);
                filtrosConsulta.idEnvios = ConsultarEnvios(filtrosConsulta.filtros);

                if (filtrosConsulta.idEnvios != null && filtrosConsulta.idEnvios.Length > 0)
                {
                    filtrosConsulta.EsValorChunks = false;
                    var hechoCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(HECHO);
                    var consulta = CellStoreUtil.GenerarConsultaHecho(filtrosConsulta);
                    var hechosBson = AbaxXBRLCellStoreMongo.Consulta(hechoCollection, consulta, paginaRequerida, numeroRegistros);
                    
                    var json = CellStoreUtil.DepurarIdentificadorBson(hechosBson.ToJson());
                    var listadoHechos = JsonConvert.DeserializeObject<Hecho[]>(json, settings);

                    List<EntHechoCheckun> entityHechos = new List<EntHechoCheckun>();

                    foreach (Hecho hecho in listadoHechos)
                    {
                        string valorFormateado = String.Empty;

                        if (hecho.Concepto.TipoDato.Contains(TiposDatoXBRL.TextBlockItemType) || hecho.Concepto.TipoDato.Contains(TiposDatoXBRL.StringItemType))
                        {
                            valorFormateado = CellStoreUtil.EliminaEtiquetas(hecho.Valor);
                        }

                        EntHechoCheckun entHecho = new HechoAdapter(hecho).EntHechoCheckun;
                        entHecho.valorFormateado = valorFormateado;
                        entityHechos.Add(entHecho);
                    }

                    filtrosConsulta.EsValorChunks = true;
                    var consultaChunks = CellStoreUtil.GenerarConsultaHecho(filtrosConsulta);
                    var hechosBsonCheckuns = AbaxXBRLCellStoreMongo.Consulta(hechoCollection, consultaChunks, paginaRequerida, numeroRegistros);

                    if (hechosBsonCheckuns.Count > 0)
                    {
                        var jsonChekuns = CellStoreUtil.DepurarIdentificadorBson(hechosBsonCheckuns.ToJson());
                        var listaHechosCheckuns = JsonConvert.DeserializeObject<Hecho[]>(jsonChekuns, settings);

                        foreach (var hechoChekun in listaHechosCheckuns)
                        {
                            if (!hechoChekun.Concepto.TipoDato.Contains(TiposDatoXBRL.Base64BinaryItemType) &&
                                (hechoChekun.Concepto.TipoDato.Contains(TiposDatoXBRL.TextBlockItemType) || hechoChekun.Concepto.TipoDato.Contains(TiposDatoXBRL.StringItemType)))
                            {
                                var valorCheckun = AbaxXBRLCellStoreMongo.ObtenValorHechoCheckun(hechoChekun.IdHecho);
                                var valorFormateado = CellStoreUtil.EliminaEtiquetas(valorCheckun);

                                EntHechoCheckun entHechoCheckun = new HechoAdapter(hechoChekun).EntHechoCheckun;
                                entHechoCheckun.valor = valorCheckun;
                                entHechoCheckun.valorFormateado = valorFormateado;
                                entityHechos.Add(entHechoCheckun);
                            }
                        }
                    }

                    resultadoOperacion.InformacionExtra = entityHechos.ToArray();
                    resultadoOperacion.Resultado = true;
                }
                else
                {
                    resultadoOperacion.Mensaje = "No existen registros que cumplan con los filtros seleccionados";
                    resultadoOperacion.Resultado = false;
                }
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Consulta el total de registros que tiene cierta consulta de informacion del repositorio
        /// </summary>
        /// <param name="filtrosConsulta">Filtros de consutla para realizar los valores de conteo</param>
        /// <returns>Estado de paginacion</returns>
        public long ObtenerNumeroRegistrosConsultaHechos(EntFiltroConsultaHecho filtrosConsulta)
        {
            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.NullValueHandling = NullValueHandling.Ignore;

            filtrosConsulta.filtros.entidadesId = ObtenerEntidades(filtrosConsulta.filtros);
            filtrosConsulta.idEnvios = ConsultarEnvios(filtrosConsulta.filtros);

            var hechoCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(HECHO);
            var FiltroConsulta = CellStoreUtil.GenerarConsultaHecho(filtrosConsulta);

            return AbaxXBRLCellStoreMongo.Count(hechoCollection, FiltroConsulta);
        }

        /// <summary>
        /// Obtiene una lista de identificadores de entidades sin repetir
        /// </summary>
        /// <param name="filtros"></param>
        private string[] ObtenerEntidades(EntFiltrosAdicionales filtros)
        {
            var entidadesConjunto = new HashSet<string>();

            foreach (var entidad in filtros.entidades)
            {
                entidadesConjunto.Add(entidad.Id);
            }

            if (filtros.gruposEntidades != null && filtros.gruposEntidades.Length > 0)
            {
                var listadoEmpresas = GrupoEmpresaService.ObtenEmpresasAsignadas(filtros.gruposEntidades);

                foreach (var empresa in listadoEmpresas)
                {
                    entidadesConjunto.Add(empresa.Etiqueta);
                }
            }

            return entidadesConjunto.ToArray();
        }

        /// <summary>
        /// Obtiene una lista de IdEnvios de acuerdo a los filtros indicados
        /// </summary>
        /// <param name="filtros"></param>
        /// <returns></returns>
        private string[] ConsultarEnvios(EntFiltrosAdicionales filtros)
        {
            var envios = new List<string>();

            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.NullValueHandling = NullValueHandling.Ignore;

            var queryEntidades = CellStoreUtil.GenerarConsultaIncluirOExcluir("Entidad.Nombre", filtros.entidadesId);
            var queryFideicomiso = CellStoreUtil.GenerarConsultaIncluirOExcluir("Parametros.NumeroFideicomiso", filtros.fideicomisos);
            var queryFechaReporte = CellStoreUtil.GenerarConsultaIncluirOExcluir("Periodo.Fecha", filtros.fechasReporte);
            var queryTrimestres = CellStoreUtil.GenerarConsultaIncluirOExcluir("Parametros.trimestre", filtros.trimestres);

            var query = Query.And(
                queryEntidades,
                queryFideicomiso,
                queryFechaReporte,
                queryTrimestres
            );

            var campos = Fields.Include("IdEnvio").Exclude("_id");

            var enviosCollection = AbaxXBRLCellStoreMongo.ObtenNombreCollecion(ENVIO);
            var enviosBSON = AbaxXBRLCellStoreMongo.Consulta(enviosCollection, query, campos);

            foreach (var envio in enviosBSON)
            {
                envios.Add(envio.GetElement("IdEnvio").Value.ToString());
            }

            return envios.ToArray();
        }

        /// <summary>
        /// Procesa los hechos existentes en el documento de instancia.
        /// </summary>
        /// <param name="estructuraMapeo">Estructura con el mapeo del cellstore.</param>
        private void ProcesaHechosSpotfire(EstructuraMapeoDTO estructuraMapeo)
        {
            var instancia = estructuraMapeo.DocumentoInstancia;
            var hechosPorId = instancia.HechosPorId;
            var contextosPorId = instancia.ContextosPorId;
            var espacioNombresPrincipal = instancia.EspacioNombresPrincipal;
            var rolesPresentacion = instancia.Taxonomia.RolesPresentacion;
            var unidadDefault = new Unidad();
            var dimensionesMiembrosPorHash = estructuraMapeo.ListasDimensionesMiembrosPorHash;
            var taxonomia = estructuraMapeo.Taxonomia;

            foreach (var idhecho in hechosPorId.Keys)
            {
                var hechoInstancia = hechosPorId[idhecho];
                var contextoInstancia = contextosPorId[hechoInstancia.IdContexto];
                var idConcepto = hechoInstancia.IdConcepto;
                //LogUtil.Info(hechoInstancia);
                var concepto = ProcesaConceptoInstancia(idConcepto, estructuraMapeo);
                var unidad = String.IsNullOrEmpty(hechoInstancia.IdUnidad) ? unidadDefault : ProcesaUnidad(hechoInstancia.IdUnidad, estructuraMapeo);
                var entidad = ProcesaEntidad(contextoInstancia.Entidad.IdEntidad, estructuraMapeo);
                var periodo = ProcesaPeriodoEntidad(contextoInstancia.Id, estructuraMapeo);
                var dimensionesMiembrosHash = ProcesaDimensionMiembroGrupo(contextoInstancia.Id, estructuraMapeo);
                var tupla = new Tupla()
                {
                    IdInterno = hechoInstancia.Consecutivo,
                    IdPadre = hechoInstancia.ConsecutivoPadre
                };
                string hashGrupoRolPresentacion = null;
                IList<RolPresentacionHecho> listaRolesPresentacion = new List<RolPresentacionHecho>();
                IList<MiembrosDimensionales> dimensionesMiembro = null;
                if (!String.IsNullOrEmpty(dimensionesMiembrosHash))
                {
                    ProcesaDimensionMiembroConcepto(idConcepto, contextoInstancia.Id, estructuraMapeo);
                    if (dimensionesMiembrosPorHash.ContainsKey(dimensionesMiembrosHash))
                    {
                        dimensionesMiembro = dimensionesMiembrosPorHash[dimensionesMiembrosHash];
                    }
                }
                if (estructuraMapeo.HashRolesPresentacionGrupoPorIdConcepto.ContainsKey(idConcepto))
                {
                    hashGrupoRolPresentacion = estructuraMapeo.HashRolesPresentacionGrupoPorIdConcepto[idConcepto];
                }
                if (estructuraMapeo.UrisRolesPresentacionGrupoPorIdConcepto.ContainsKey(idConcepto))
                {
                    foreach (var uri in estructuraMapeo.UrisRolesPresentacionGrupoPorIdConcepto[idConcepto])
                    {
                        var item = new RolPresentacionHecho() { Uri = uri };
                        listaRolesPresentacion.Add(item);
                    }

                }
                var esValorChunks = false;
                if (!String.IsNullOrWhiteSpace(hechoInstancia.Valor) && hechoInstancia.Valor.Length > ConstBlockStoreHechos.MAX_STRING_VALUE_LENGTH)
                {
                    esValorChunks = true;
                }

                var hecho = new Hecho()
                {

                    Valor = hechoInstancia.Valor,
                    ValorNumerico = hechoInstancia.ValorNumerico,
                    EsValorChunks = esValorChunks,
                    Precision = hechoInstancia.Precision,
                    Decimales = hechoInstancia.Decimales,
                    EsNumerico = hechoInstancia.EsNumerico,
                    EsValorNil = hechoInstancia.EsValorNil,
                    EsTupla = hechoInstancia.EsTupla,
                    EsFraccion = unidad != null && unidad.Tipo == UnidadDto.Divisoria,
                    Activo = true,
                    Tupla = tupla,
                    Unidad = unidad,
                    Concepto = concepto,
                    Taxonomia = espacioNombresPrincipal,
                    EsDimensional = contextoInstancia.ContieneInformacionDimensional,
                    Periodo = periodo,
                    Entidad = entidad,
                    RolesPresentacion = listaRolesPresentacion,
                    MiembrosDimensionales = dimensionesMiembro
                };
                hecho.IdHecho = hecho.GeneraHashId();
                if (!estructuraMapeo.Hechos.ContainsKey(hecho.IdHecho))
                {
                    estructuraMapeo.Hechos.Add(hecho.IdHecho, hecho);
                }
                if (!estructuraMapeo.HechosPorId.ContainsKey(idhecho))
                {
                    estructuraMapeo.HechosPorId.Add(idhecho, hecho);
                }

                var envio = estructuraMapeo.Envio;
                foreach (var idHecho in estructuraMapeo.HechosPorId.Keys)
                {
                    var hechoBase = estructuraMapeo.HechosPorId[idhecho];

                }
            }

        }

        public void ReprocesaCellStore(IVersionDocumentoInstanciaRepository VersionDocumentoInstanciaRepository, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl)
        {
            var resultado = new ResultadoOperacionDto();

            //var procesador = (IProcesarDistribucionDocumentoXBRLService)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDistribucionDocumentoXBRLService");
            //var cellStoreMongo = (AbaxXBRLCore.CellStore.Services.Impl.AbaxXBRLCellStoreMongo)ServiceLocator.ObtenerFabricaSpring().GetObject("AbaxXBRLCellStoreMongo");


            var candidatosReprocesar = DocumentoInstanciaRepository.ObtenCandidatosReprocesar();

            TotalDeDocumentosAProcesar = candidatosReprocesar.Count;
            DocumentosProcesados = 0;

            foreach (var candidato in candidatosReprocesar)
            {

                var queryExistenciaEnvio = new StringBuilder();
                queryExistenciaEnvio.Append("{");
                queryExistenciaEnvio.Append(" \"Taxonomia\" : ");
                queryExistenciaEnvio.Append(JsonConvert.ToString(candidato.EspacioNombresPrincipal));
                queryExistenciaEnvio.Append(", \"Entidad.Nombre\" : ");
                queryExistenciaEnvio.Append(JsonConvert.ToString(candidato.ClaveEmisora));
                queryExistenciaEnvio.Append(", \"Periodo.Fecha\" : ");
                queryExistenciaEnvio.Append(ParseJson(candidato.FechaReporte));
                queryExistenciaEnvio.Append(", \"FechaRecepcion\" : ");
                queryExistenciaEnvio.Append(ParseJson(candidato.FechaCreacion));
                queryExistenciaEnvio.Append(" }");



                var queryExistencia = queryExistenciaEnvio.ToString();
                var cantidad = AbaxXBRLCellStoreMongo.CuentaElementosColeccion("Envio", queryExistencia);
                if (cantidad == 0)
                {
                    LogUtil.Info("Reprocesando: " +
                    candidato.IdDocumentoInstancia + ", " +
                    candidato.FechaReporte + ", " +
                    candidato.ClaveEmisora + ", " + ", " +
                    candidato.NumFideicomiso + "," +
                    candidato.EspacioNombresPrincipal);

                    //var cacheTaxonomia = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");



                    resultado = EjecutaDistribucion(
                         candidato.IdDocumentoInstancia,
                         1,
                         new Dictionary<String, object>(),
                         VersionDocumentoInstanciaRepository,
                         DocumentoInstanciaRepository,
                         DistribucionDocumentoXBRL,
                         _cacheTaxonomiaXbrl
                         );


                }
                else {
                    DocumentosProcesados++;
                }
            }

            //var jsonResult = this.Json(resultado);
            //return Ok(resultado);
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

        public ResultadoOperacionDto EjecutaDistribucion(long idDocumentoInstancia,
            long version,
            IDictionary<string, object> parametros,
            IVersionDocumentoInstanciaRepository versionDocumentoInstanciaRepository,
            IDocumentoInstanciaRepository documentoInstanciaRepository,
            IDistribucionDocumentoXBRL distribucion,
            ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl)
        {
            var resultado = new ResultadoOperacionDto();
            versionDocumentoInstanciaRepository.DbContext.Database.CommandTimeout = 380;
            var versionDocumento = versionDocumentoInstanciaRepository.GetQueryable().Where(x => x.IdDocumentoInstancia == idDocumentoInstancia && x.Version == version).FirstOrDefault();
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
            documentoInstanciaXbrlDto.Taxonomia = ObtenerTaxonomia(documentoInstanciaXbrlDto.DtsDocumentoInstancia, _cacheTaxonomiaXbrl);
            var fechaRecepcion = documentoInstanciaRepository.GetQueryable().Where(x => x.IdDocumentoInstancia == idDocumentoInstancia).Select(x => x.FechaCreacion).FirstOrDefault();
            if (parametros == null)
            {
                parametros = new Dictionary<string, object>();
            }
            if (!parametros.ContainsKey("FechaRecepcion"))
            {
                parametros.Add("FechaRecepcion", fechaRecepcion);
            }
            var bitacorasAActualizar = new List<AbaxXBRLCore.Entities.BitacoraDistribucionDocumento>();

            if (documentoInstanciaXbrlDto.Taxonomia == null)
            {
                LogUtil.Error("Ocurrió un error al obtener la taxonomía del documento");
            }
            else
            {

                /* Aplicación de distribución**/
                LogUtil.Info("Ejecutando Distribuciones para Reprocesamiento de documento: " + documentoInstanciaXbrlDto.IdDocumentoInstancia + ", archivo: " + documentoInstanciaXbrlDto.Titulo);
                resultado = new ResultadoOperacionDto()
                {
                    Resultado = true,
                    Mensaje = "OK"
                };
                try
                {
                    resultado = ExtraeModeloDocumentoInstancia(documentoInstanciaXbrlDto, parametros);
                    if (resultado.Resultado)
                    {
                        var modelo = (EstructuraMapeoDTO)resultado.InformacionExtra;
                        resultado = PersisteModeloCellstoreMongo(modelo);
                        DocumentosProcesados++;
                    }
                }
                catch (Exception ex)
                {
                    LogUtil.Error("Ocurrió un error al ejecutar distribución de mongo para documento:" + documentoInstanciaXbrlDto.IdDocumentoInstancia + ":" + ex.Message);
                    LogUtil.Error(ex);
                    resultado.Resultado = false;
                    resultado.Mensaje = ex.Message;
                    resultado.Excepcion = ex.StackTrace;
                }



                /***********************/

                //distribucion.EjecutarDistribucion(documentoInstanciaXbrlDto, parametros);
            }
            return resultado;
        }

        public TaxonomiaDto ObtenerTaxonomia(IList<DtsDocumentoInstanciaDto> listaDts, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl)
        {
            var tax = _cacheTaxonomiaXbrl.ObtenerTaxonomia(listaDts);
            if (tax == null)
            {
                //Cargar taxonomía si no se encuentra en cache
                var errores = new List<ErrorCargaTaxonomiaDto>();
                var xpe = AbaxXBRLCore.XPE.impl.XPEServiceImpl.GetInstance();
                tax = xpe.CargarTaxonomiaXbrl(listaDts.Where(x => x.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF).First().HRef, errores, false);
                if (tax != null)
                {
                    _cacheTaxonomiaXbrl.AgregarTaxonomia(listaDts, tax);
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

        public double obtenerPorcentajeReprocesamiento() {
            if (TotalDeDocumentosAProcesar > 0) {
                double porcentaje = 0.0f;
                porcentaje = (Convert.ToDouble(DocumentosProcesados) / Convert.ToDouble(TotalDeDocumentosAProcesar)) * 100;
                return porcentaje;
            }
            return 0;
        }

        public bool estaEjecutandoReprocesamiento()
        {
            return EjecutandoReprocesamiento;
        }


        public void ReprocesarDocumentosPendientes(IDocumentoInstanciaRepository DocumentoInstanciaRepository, IVersionDocumentoInstanciaRepository VersionDocumentoInstanciaRepository, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl)
        {
            var num = 0;
            try
            {
                Task task = new Task(() => {
                    try
                    {
                        lock (LockObject)
                        {
                            EjecutandoReprocesamiento = true;

                            ReprocesaCellStore(VersionDocumentoInstanciaRepository, _cacheTaxonomiaXbrl);



                            EjecutandoReprocesamiento = false;

                        }
                    }
                    catch (Exception e)
                    {
                        LogUtil.Error(e);
                    }

                });
                task.Start();
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
            }
        }
    }
}
