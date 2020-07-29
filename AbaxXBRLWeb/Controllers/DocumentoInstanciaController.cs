using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Converter;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using Ionic.Zip;
using Newtonsoft.Json;
using AbaxXBRLCore.Viewer.Application.Import.Impl;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System.Net.Http.Headers;
using NPOI.XSSF.UserModel;
using AbaxXBRLCore.Viewer.Application.Model;
using AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico;
using AbaxXBRLCore.XPE.impl;
using AbaxXBRLCore.XPE.Common;
using AbaxXBRLCore.Reports.Builder.Factory;
using AbaxXBRLCore.Reports.Exporter.Impl;
using AbaxXBRLCore.Templates.Builder;
using System.Security.Cryptography;
using System.Configuration;
using System.Management;
using AbaxXBRLCore.Distribucion;
using AbaxXBRLCore.CellStore.Services.Impl;
using AbaxXBRLCore.CellStore.DTO;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controlador para las páginas relacionadas a la administración de documentos de instancia XBRL
    /// <author>Emigdio Hernández</author>
    /// </summary>
    [RoutePrefix("DocumentoInstancia")]
    public class DocumentoInstanciaController : BaseController
    {
       
        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDocumentoInstanciaService DocumentoInstanciaService = null;

        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDistribucionDocumentoXBRL DistribucionDocumentoXBRL = null;

        /// <summary>
        /// Servicio para el acceso a los datos de usuarios y sus empresas asignadas
        /// </summary>
        private IUsuarioService UsuarioService = null;
        /// <summary>
        /// Servicio para la transformación de modelos de taxonomías y documentos de instancia
        /// </summary>
        public XbrlViewerService XbrlViewerService { get; set; }
        /// <summary>
        /// Servicio para procear los elementos de una emisora.
        /// </summary>
        public IEmpresaService EmpresaService { get; set; }
        /// <summary>
        /// Estrategia de caché para la carga de documentos
        /// </summary>
        private EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia = null;
        /// <summary>
        /// Caché de  los DTO's que representan una taxonomía
        /// </summary>
        private ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl = null;
        /// <summary>
        /// Utileria auxiliar para la serialización a json.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();
        
        /// <summary>
        /// Importador y exportador base de la plantilla
        /// </summary>
        public ImportadorExportadorBase ImportadorExportadorArchivoPlantilla { get; set; }
        /// <summary>
        /// Fabrica de constructores de reporte.
        /// </summary>
        public ReporteBuilderFactory ReporteBuilderFactoryService;
        /// <summary>
        /// Fabrica de exportadores de documentos de instacia.
        /// </summary>
        public ExportadorDocumentoInstanciaFactory ExportadorDocumentoInstanciaFactoryService;
        /// <summary>
        /// El objeto para consultar el listado de documentos instancia
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// El objeto para consultar el listado de documentos instancia
        /// </summary>
        public AbaxXBRLCellStoreService AbaxXBRLCellStoreService { get; set; }

        private bool _forzarEsquemaHttp = false;
       
        public DocumentoInstanciaController():base()
        {
            try
            {
                DocumentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
                XbrlViewerService = (XbrlViewerService)ServiceLocator.ObtenerFabricaSpring().GetObject("XbrlViewerService");
                _estrategiaCacheTaxonomia = (EstrategiaCacheTaxonomiaMemoria)ServiceLocator.ObtenerFabricaSpring().GetObject("EstrategiaCacheTaxonomia");
                _cacheTaxonomiaXbrl = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");
                ImportadorExportadorArchivoPlantilla = (ImportadorExportadorBase)ServiceLocator.ObtenerFabricaSpring().GetObject("importadorExportadorArchivosPlantilla");
                DocumentoInstanciaRepository = (IDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaRepository");
                EmpresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
                ReporteBuilderFactoryService = (ReporteBuilderFactory)ServiceLocator.ObtenerFabricaSpring().GetObject("ReporteBuilderFactory");
                ExportadorDocumentoInstanciaFactoryService = (ExportadorDocumentoInstanciaFactory)ServiceLocator.ObtenerFabricaSpring().GetObject("ExportadorDocumentoInstanciaFactory");
                AbaxXBRLCellStoreService = (AbaxXBRLCellStoreService)ServiceLocator.ObtenerFabricaSpring().GetObject("AbaxXBRLCellStoreService");




            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }

            var paramForzarHttp = ConfigurationManager.AppSettings.Get("ForzarEsquemaHttp");
            if (!String.IsNullOrEmpty(paramForzarHttp))
            {
                Boolean.TryParse(paramForzarHttp, out _forzarEsquemaHttp);
                //LogUtil.Info("Valor del parámetro: ForzarEsquemaHttp = " + _forzarEsquemaHttp);
            }
        }

        /// <summary>
        /// Acción predeterminada
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ListaDocumentosInstanciaCompletos")]
        public IHttpActionResult Index()
        {
            return ListaDocumentosInstancia(null,null,1,1);
        }
       


        /// <summary>
        /// Acción para la consulta de los documentos de instancia para los que el usuario actual tiene
        /// persmisos
        /// </summary>
        /// <returns>Resultado de la Acción</returns>
        [HttpPost]
        [Authorize]
        [Route("ListaDocumentosInstancia")]
        public IHttpActionResult ListaDocumentosInstancia()
        {
            string claveEmisora = getFormKeyValue("claveEmisora");
            string fecha = getFormKeyValue("fecha");
            int paginaPropios = 1, paginaCompartidos = 1;

            return ListaDocumentosInstancia(claveEmisora, fecha, paginaPropios, paginaCompartidos);
        }

        [HttpPost]
        [Authorize]
        [Route("ObtenerDocumentosUsuarioEnListaUnificada")]
        public IHttpActionResult ObtenerDocumentosUsuarioEnListaUnificada() 
        {
            
            var listPropios = (DocumentoInstanciaService.ObtenerDocumentosDeUsuario(null, DateTime.MinValue, true,
                                                                 IdUsuarioExec).InformacionExtra as IQueryable<DocumentoInstancia>).ToList();

            var listCompartidos = (DocumentoInstanciaService.ObtenerDocumentosDeUsuario(null, DateTime.MinValue, false,
                                                                 IdUsuarioExec).InformacionExtra as IQueryable<DocumentoInstancia>).ToList();

            var diccionarioTaxonomiasPropios = ObtenTaxonomiasPorDocumentoInstancia(listPropios);
            var diccionarioTaxonomiasCompartidos = ObtenTaxonomiasPorDocumentoInstancia(listCompartidos);

            var documentosPropios = CopiadoUtil.Copia(listPropios);
            var documentosCompartidos = CopiadoUtil.Copia(listCompartidos);

            var diccionarioUsurios = new Dictionary<long, UsuarioDto>();

            foreach (var documento in documentosPropios)
            {
                if (diccionarioTaxonomiasPropios.ContainsKey(documento.IdDocumentoInstancia))
                {
                    documento.Taxonomia = diccionarioTaxonomiasPropios[documento.IdDocumentoInstancia];
                    AgregaEntidadUsuarioUltimaModificacion(documento, diccionarioUsurios);
                }
            }

            foreach (var documento in documentosCompartidos)
            {
                if (diccionarioTaxonomiasCompartidos.ContainsKey(documento.IdDocumentoInstancia))
                {
                    documento.Taxonomia = diccionarioTaxonomiasCompartidos[documento.IdDocumentoInstancia];
                    AgregaEntidadUsuarioUltimaModificacion(documento, diccionarioUsurios);
                }
            }

            foreach(var docIns in documentosCompartidos )
            {
                documentosPropios.Add(docIns);
            }
            
            var datos = new Dictionary<String, Object>();
            datos.Add("ListaDocumentos", documentosPropios);

            var resultado = new ResultadoOperacionDto()
            {
                Mensaje = "OK",
                Resultado = true,
                InformacionExtra = datos
            };



            Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            var response = Ok(resultado);

            return response;
        }

        [HttpPost]
        [Authorize]
        [Route("ObtenerDocumentosEnvioVersion")]
        public IHttpActionResult ObtenerDocumentosEnvioVersion()
        {
            var param = getFormKeyValue("idDocumentoInstancia");
            var idDocumentoInstanciaOriginal = Int64.Parse(param);


            var listaDocumentos = (DocumentoInstanciaService.ObtenerVersionesDocumentoInstanciaComparador(idDocumentoInstanciaOriginal).InformacionExtra as IQueryable<DocumentoInstancia>).ToList();
            var diccionarioTaxonomias = ObtenTaxonomiasPorDocumentoInstancia(listaDocumentos);

            var documentos = CopiadoUtil.Copia(listaDocumentos);

            var diccionarioUsurios = new Dictionary<long, UsuarioDto>();

            foreach (var documento in documentos)
            {
                if (diccionarioTaxonomias.ContainsKey(documento.IdDocumentoInstancia))
                {
                    documento.Taxonomia = diccionarioTaxonomias[documento.IdDocumentoInstancia];
                    AgregaEntidadUsuarioUltimaModificacion(documento, diccionarioUsurios);
                }
            }
            var datos = new Dictionary<String, Object>();
            datos.Add("ListaDocumentos", documentos);
            var resultado = new ResultadoOperacionDto()
            {
                Mensaje = "OK",
                Resultado = true,
                InformacionExtra = datos
            };
            Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            var response = Ok(resultado);
            return response;
        }

        /// <summary>
        /// Obtiene la entidad del último usuario en modificar el documento y la asigna al dto.
        /// </summary>
        /// <param name="documento">Documento modificado a evaluar.</param>
        /// <param name="diccionarioUsurios">Diccionario de usuarios en cache.</param>
        private void AgregaEntidadUsuarioUltimaModificacion(AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto documento, IDictionary<long, UsuarioDto> diccionarioUsurios)
        {
            long idUsuarioUltimaModificacion;
            UsuarioDto usuarioUltimaModificacion = null;
            Usuario usuarioEntidad;
            ResultadoOperacionDto resultadoConsulta;

            idUsuarioUltimaModificacion = documento.IdUsuarioUltMod ?? 0;
            if (idUsuarioUltimaModificacion <= 0)
            {
                return;
            }


            if (!diccionarioUsurios.ContainsKey(idUsuarioUltimaModificacion))
            {
                resultadoConsulta = UsuarioService.ObtenerUsuarioPorId(idUsuarioUltimaModificacion);
                if (resultadoConsulta.Resultado)
                {
                    usuarioEntidad = resultadoConsulta.InformacionExtra as Usuario;
                    if (usuarioEntidad != null)
                    {
                        usuarioUltimaModificacion = CopiadoUtil.Copia(usuarioEntidad);
                        diccionarioUsurios.Add(usuarioUltimaModificacion.IdUsuario, usuarioUltimaModificacion);
                    }
                }
            }
            else 
            {
                usuarioUltimaModificacion = diccionarioUsurios[idUsuarioUltimaModificacion];
            }
            documento.UsuarioUltMod = usuarioUltimaModificacion;
        }

        public IHttpActionResult ListaDocumentosInstancia(string claveEmisora, string fecha, int paginaPropios = 1, int paginaCompartidos = 1)
        {
            DateTime fechaParam = DateTime.MinValue;
            if (!String.IsNullOrEmpty(fecha))
            {
                fechaParam = DateUtil.ParseStandarDate(fecha);
            }
            var listPropios = (DocumentoInstanciaService.ObtenerDocumentosDeUsuario(claveEmisora, fechaParam, true,
                                                                 IdUsuarioExec).InformacionExtra as IQueryable<DocumentoInstancia>).ToList();

            var listCompartidos = (DocumentoInstanciaService.ObtenerDocumentosDeUsuario(claveEmisora, fechaParam, false,
                                                                 IdUsuarioExec).InformacionExtra as IQueryable<DocumentoInstancia>).ToList();

            var listEnviados = (DocumentoInstanciaService.ObtenerDocumentosEnviadosSinUsuario(claveEmisora, fechaParam).InformacionExtra 
                as IQueryable<DocumentoInstancia>).ToList();

            var diccionarioTaxonomiasPropios = ObtenTaxonomiasPorDocumentoInstancia(listPropios);
            var diccionarioTaxonomiasCompartidos = ObtenTaxonomiasPorDocumentoInstancia(listCompartidos);
            var diccionarioTaxonomiasEnviados = ObtenTaxonomiasPorDocumentoInstancia(listEnviados);

            var documentosPropios = CopiadoUtil.Copia(listPropios);
            var documentosCompartidos = CopiadoUtil.Copia(listCompartidos);
            var documentosEnviados = CopiadoUtil.Copia(listEnviados);

            var diccionarioUsurios = new Dictionary<long, UsuarioDto>(); 
            
            foreach (var documento in documentosPropios)
            {
                if (diccionarioTaxonomiasPropios.ContainsKey(documento.IdDocumentoInstancia))
                {
                    documento.Taxonomia = diccionarioTaxonomiasPropios[documento.IdDocumentoInstancia];
                    AgregaEntidadUsuarioUltimaModificacion(documento, diccionarioUsurios);
                }
            }

            foreach (var documento in documentosCompartidos)
            {
                if (diccionarioTaxonomiasCompartidos.ContainsKey(documento.IdDocumentoInstancia))
                {
                    documento.Taxonomia = diccionarioTaxonomiasCompartidos[documento.IdDocumentoInstancia];
                    AgregaEntidadUsuarioUltimaModificacion(documento, diccionarioUsurios);
                }
            }

            foreach (var documento in documentosEnviados)
            {
                if (diccionarioTaxonomiasEnviados.ContainsKey(documento.IdDocumentoInstancia))
                {
                    documento.Taxonomia = diccionarioTaxonomiasEnviados[documento.IdDocumentoInstancia];
                    AgregaEntidadUsuarioUltimaModificacion(documento, diccionarioUsurios);
                }
            }


            //Consultar listas de emisoras de usuario
            var datos = new Dictionary<String, object>();

            var DocumentosPropios = new List<DocumentoInstancia>();
            var usuariosEmpresas = (List<UsuarioEmpresa>)UsuarioService.ObtenerEmpresasPorIdEmpresaIdUsuario(null, IdUsuarioExec).InformacionExtra;

            datos.Add("DocumentosPropios", documentosPropios);
            datos.Add("DocumentosCompartidos", documentosCompartidos);
            datos.Add("DocumentosEnviados", documentosEnviados);
            datos.Add("paginaPropios", paginaPropios);
            datos.Add("paginaCompartidos", paginaCompartidos);
            datos.Add("EmpresasUsuario", CopiadoUtil.Copia(usuariosEmpresas));
            datos.Add("ClaveEmisora", claveEmisora);
            datos.Add("Fecha", fecha);

            var resultado = new ResultadoOperacionDto()
            {
                Mensaje = "OK",
                Resultado = true,
                InformacionExtra = datos
            };

            Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            var response = Ok(resultado);

            return response;
        }


        /// <summary>
        /// Obtiene un diccionario por IdDocumentoInstancia con los nombres de las taxonomias asignadas a cada documento.
        /// </summary>
        /// <param name="entidades">Lista de documentos de instancia a los que se les va ha determinar la taxonomía.</param>
        /// <returns>Diccionario con las taxonomías por documento.</returns>
        private IDictionary<long, string> ObtenTaxonomiasPorDocumentoInstancia(IList<DocumentoInstancia> entidades)
        {
            var taxonomias = (IList<TaxonomiaXbrl>)DocumentoInstanciaService.ObtenerTaxonomiasRegistradas().InformacionExtra;
            var diccionarioTaxonomias = new Dictionary<long, string>();
            foreach (var taxonomia in taxonomias)
            {
                foreach (var entidad in entidades)
                {
                    var contieneTodos = true;
                    foreach (var archivoTaxonomia in taxonomia.ArchivoTaxonomiaXbrl)
                    {
                        var contieneArchivo = false;
                        foreach (var dtsDocumentoInstancia in entidad.DtsDocumentoInstancia)
                        {
                            if (archivoTaxonomia.Href.Equals(dtsDocumentoInstancia.Href))
                            {
                                contieneArchivo = true;
                                break;
                            }
                        }
                        if (!contieneArchivo)
                        {
                            contieneTodos = false;
                            break;
                        }
                    }
                    if (contieneTodos)
                    {
                        diccionarioTaxonomias[entidad.IdDocumentoInstancia] = taxonomia.Nombre;
                    }
                }
            }
            return diccionarioTaxonomias;
        }

       

        /// <summary>
        /// Obtiene de la base de datos la lista de taxonomías registradas y sus archivos importados
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerTaxonomiasRegistradasJsonResult")]
        public IHttpActionResult ObtenerTaxonomiasRegistradasJsonResult()
        {
            var resultado = DocumentoInstanciaService.ObtenerTaxonomiasRegistradas();
            //resultado.InformacionExtra = ((IList<TaxonomiaXbrl>)resultado.InformacionExtra).OrderBy(r => r.Nombre).ToList();
            resultado.Resultado = true;

            var json =
                GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling =
                    ReferenceLoopHandling.Ignore;

            
            resultado.InformacionExtra= DocumentoInstanciaXbrlDtoConverter.ConvertirTaxonomiaXbrl((IList<TaxonomiaXbrl>)resultado.InformacionExtra);

            return Json(resultado);
        }



        /// <summary>
        /// Obtiene la lista de los diferentes conceptos que existen en las taxonomías en caché
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerListaConceptosTaxonomias")]
        public IHttpActionResult ObtenerListaConceptosTaxonomias()
        {
            String idTaxonomia = getFormKeyValue("idTaxonomia");
            var resultadoConceptos = new Dictionary<string, string>();

            var resultadoOperacionTaxonomia = DocumentoInstanciaService.ObtenerTaxonomiaBdPorId(long.Parse(idTaxonomia));

            if (resultadoOperacionTaxonomia.Resultado)
            {
                var taxonomia = (TaxonomiaXbrl)resultadoOperacionTaxonomia.InformacionExtra;

                var listaDts = DocumentoInstanciaXbrlDtoConverter.ConvertirDTSDocumentoInstancia(taxonomia.ArchivoTaxonomiaXbrl);
                var taxoDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(listaDts);

                if (taxoDto!=null)
                    foreach (var concepto in taxoDto.ConceptosPorId.Values)
                    {
                        var EsAbstracto = concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false;
                        var EsDimension = concepto.EsDimension != null ? concepto.EsDimension.Value : false;
                        var EsMiembroDimension = concepto.EsMiembroDimension != null ? concepto.EsMiembroDimension.Value : false;
                        if (!EsAbstracto && !EsDimension && !concepto.EsHipercubo &&
                            !EsMiembroDimension && concepto.Tipo == Concept.Item)
                        {
                            if (!resultadoConceptos.ContainsKey(concepto.Id))
                            {
                                var etiqueta = concepto.Nombre;
                                if (concepto.Etiquetas != null && concepto.Etiquetas.Values.Count() > 0)
                                {
                                    etiqueta = concepto.Etiquetas.First().Value.First().Value.Valor;
                                    foreach (var idioma in concepto.Etiquetas)
                                    {
                                        if (idioma.Key.Contains(CommonConstants.LenguajeEsp))
                                        {
                                            etiqueta = idioma.Value.First().Value.Valor;
                                            break;
                                        }
                                    }
                                }
                                resultadoConceptos.Add(concepto.Id, etiqueta);
                            }
                        }
                    }

            }
            return Ok(resultadoConceptos);
        }

        /// <summary>
        /// Obtiene la lista de los roles de una taxonomia
        /// </summary>
        /// <returns>Resultado de operacion con la informacion de los roles de presentacion de una taxonomia</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerListaRolesTaxonomia")]
        public IHttpActionResult ObtenerListaRolesTaxonomia()
        {
            var param = getFormKeyValue("idTaxonomia");
            var idTaxonomia = Int64.Parse(param);
            var resultado = ObtenerDefinicionTaxonomiaPorId(idTaxonomia);

            if (!resultado.Resultado)
            {
                return Ok(resultado);
            }

            var taxDto = resultado.InformacionExtra as TaxonomiaDto;

            var resultadoTaxonomia = new Dictionary<string, Dictionary<string, string>>();

            var resultadoRolesTaxonomia = new Dictionary<string, string>();
            var resultadoIdiomaTaxonomia = new Dictionary<string, string>();

            foreach (var rol in taxDto.RolesPresentacion)
            {
                resultadoRolesTaxonomia.Add(rol.Uri, rol.Nombre);
            }


            foreach (var idIdioma in taxDto.IdiomasTaxonomia.Keys)
            {
                var idiomaTaxonomia = taxDto.IdiomasTaxonomia[idIdioma];
                resultadoIdiomaTaxonomia.Add(idIdioma, idiomaTaxonomia);
            }

            resultadoTaxonomia.Add("idiomas", resultadoIdiomaTaxonomia);
            resultadoTaxonomia.Add("roles",resultadoRolesTaxonomia);

            return Ok(resultadoTaxonomia);

        }


        [HttpPost]
        [Authorize]
        [Route("ObtenerHechosPorConcepto")]
        public IHttpActionResult ObtenerHechosPorConcepto()
        {
            ResultadoOperacionDto res = null;
            try
            {
                String cuentaBusqueda = getFormKeyValue("idConcepto");
                String idTaxonomia = getFormKeyValue("idTaxonomia");

                string[] idConceptos = null;
                if (cuentaBusqueda != null)
                {
                    string[] cuentasSeparadas = cuentaBusqueda.Split(',');
                    if (cuentasSeparadas != null && cuentasSeparadas.Length > 0)
                    {
                        idConceptos = new string[cuentasSeparadas.Length];
                        int iCuenta = 0;
                        foreach (var cuentasSeparada in cuentasSeparadas)
                        {
                            idConceptos[iCuenta++] = cuentasSeparada;
                        }
                    }
                }
                if (idConceptos == null)
                {
                    idConceptos = new string[0];
                }
                res = DocumentoInstanciaService.ObtenerHechosPorFiltro(idConceptos, IdUsuarioExec, long.Parse(idTaxonomia));
            }
            catch (Exception exception)
            {
                res = new ResultadoOperacionDto()
                {
                    Resultado = false,
                    Mensaje = exception.Message,
                    InformacionExtra = exception
                };
            }
            return Ok(res);
        }


        

        /// <summary>
        /// Action para atender las solicitudes de importación de documento de instancia ya sea mediante la carga de:
        /// 
        /// Archivo XBRL
        /// URL del archivo a importar
        /// </summary>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ImportarDocumentoInstancia")]
        public async Task<HttpResponseMessage> ImportarDocumentoInstancia()
        {

            var resultado = new ResultadoOperacionDto();
            String json = null;
            if (!Request.Content.IsMimeMultipartContent("form-data"))
            {
                throw new HttpResponseException
                 (Request.CreateResponse(HttpStatusCode.UnsupportedMediaType));
            }
            DocumentoInstanciaXbrlDto documentoInstancia = null;
            try
            {
                var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);
                var fileData = provider.FileData.FirstOrDefault();
                string rutaArchivo = null;
                string nombreArchivo = null;
                if (fileData != null)
                {
                    rutaArchivo = fileData.LocalFileName;
                    nombreArchivo = fileData.Headers.ContentDisposition.FileName ?? "";
                    nombreArchivo = nombreArchivo.Replace("\\", "").Replace("\"", "");
                }
                string urlArchivo = provider.FormData["urlArchivoImportado"]; ;
              
                if (rutaArchivo != null)
                {
                   
                        //Se importó un archivo ZIP
                        if (nombreArchivo.EndsWith(CommonConstants.ExtensionZIP))
                        {
                            using (var archivoStream = new FileStream(rutaArchivo, FileMode.Open))
                            {
                                documentoInstancia = ProcesarArchivoZip(archivoStream, resultado);
                            }
                        }
                        else
                        {
                            documentoInstancia = ProcesarArchivoInstancia(rutaArchivo, null, resultado);
                        }
                    
                    try
                    {
                        File.Delete(rutaArchivo);
                    }
                    catch (Exception e)
                    {
                        Debug.WriteLine(e.StackTrace);
                    }
                }
                else if (!String.IsNullOrEmpty(urlArchivo))
                {
                    documentoInstancia = ProcesarArchivoInstancia(urlArchivo, null, resultado);
                }
                if (documentoInstancia != null)
                {
                    resultado.Resultado = true; 

                                        
                    documentoInstancia.NombreArchivo = nombreArchivo ?? urlArchivo;
                    
                    resultado.InformacionExtra = documentoInstancia;

                    if (documentoInstancia.Taxonomia != null && _cacheTaxonomiaXbrl.ObtenerTaxonomia(documentoInstancia.DtsDocumentoInstancia) == null)
                    {
                        var servXPE = XPEServiceImpl.GetInstance(_forzarEsquemaHttp);
                        var erroresTax = new List<ErrorCargaTaxonomiaDto>();
                        TaxonomiaDto taxonomiaNueva = null;
                        foreach(var href in documentoInstancia.DtsDocumentoInstancia){
                            if(href.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF){
                                taxonomiaNueva = servXPE.CargarTaxonomiaXbrl(href.HRef,erroresTax,false);
                                break;
                            }
                        }
                        if (taxonomiaNueva != null && erroresTax.Count(x=>x.Severidad == ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL) == 0)
                        {
                            _cacheTaxonomiaXbrl.AgregarTaxonomia(documentoInstancia.DtsDocumentoInstancia, taxonomiaNueva);
                        }
                        
                    }
                }
                Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                Configuration.Formatters.JsonFormatter.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                json = JsonConvert.SerializeObject(resultado, Configuration.Formatters.JsonFormatter.SerializerSettings);
                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(json, Encoding.UTF8, "application/json");
                return response;
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
                resultado.InformacionExtra = ex.StackTrace;
                Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                Configuration.Formatters.JsonFormatter.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                json = JsonConvert.SerializeObject(resultado, Configuration.Formatters.JsonFormatter.SerializerSettings);
                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(json, Encoding.UTF8, "application/json");
                return response;
            }
            finally
            {
                if (documentoInstancia != null)
                {
                    documentoInstancia.Cerrar();
                    documentoInstancia = null;
                }
            }
        }

        /// <summary>
        /// Verifica si se agrega taxonomía del documento al cache
        /// </summary>
        /// <param name="documentoInstancia"></param>
        private void VerificarAgregarTaxonomiaACache(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            if (_cacheTaxonomiaXbrl.ObtenerTaxonomia(documentoInstancia.DtsDocumentoInstancia) == null)
            {
                var errores = new List<ErrorCargaTaxonomiaDto>();
                var taxonomia = XPEServiceImpl.GetInstance(_forzarEsquemaHttp).CargarTaxonomiaXbrl(documentoInstancia.DtsDocumentoInstancia[0].HRef, errores, false);
                if (taxonomia != null)
                {
                    _cacheTaxonomiaXbrl.AgregarTaxonomia(documentoInstancia.DtsDocumentoInstancia,taxonomia);
                }
                else
                {
                    foreach (var error in errores)
                    {
                        LogUtil.Error(error);
                    }
                }
            }
        }

        /// <summary>
        /// Procesa un documento de instancia dentro de un archivo zip, extrae los archivos a un directorio
        /// temporal y procesa el archivo XBRL que haya dentro
        /// </summary>
        /// <param name="inputStream">Stream de ZIP de entrada</param>
        /// <param name="resultado">Resultado de la operación</param>
        /// <returns>Documento de instancia cargado, null si no se puede cargar el documento</returns>
        private DocumentoInstanciaXbrlDto ProcesarArchivoZip(Stream inputStream, ResultadoOperacionDto resultado)
        {
            string archivoXbrl = null;
            DocumentoInstanciaXbrlDto documento = null;
            DirectoryInfo tmpDir = null;
            try
            {
                using (var zipFile = ZipFile.Read(inputStream))
                {
                    tmpDir = UtilAbax.ObtenerDirectorioTemporal();
                    zipFile.ExtractAll(tmpDir.FullName, ExtractExistingFileAction.OverwriteSilently);
                    foreach (var archivoInterno in zipFile)
                    {
                        if (!archivoInterno.IsDirectory &&
                            archivoInterno.FileName.ToLower().EndsWith(CommonConstants.ExtensionXBRL))
                        {
                            archivoXbrl = archivoInterno.FileName;
                        }
                    }
                }
                if (archivoXbrl == null)
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "No se encontró ningún archivo XBRL dentro del archivo ZIP";
                }
                else
                {
                    var uriArchivo = new Uri(tmpDir.FullName + Path.DirectorySeparatorChar + archivoXbrl, UriKind.Absolute);
                    documento = ProcesarArchivoInstancia(uriArchivo.AbsoluteUri, null, resultado);
                    if (documento != null)
                    {
                        documento.NombreArchivo = archivoXbrl;
                        if (tmpDir != null)
                        {
                            if (tmpDir.Exists)
                            {
                                tmpDir.Delete(true);
                            }
                        }
                    }
                    else
                    {
                        resultado.Resultado = false;
                        resultado.InformacionExtra = null;
                        resultado.Mensaje = "No fué posible cargar el documento indicado";
                    }
                    
                }
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al leer el archivo ZIP: " + ex.Message;
                LogUtil.Error(new Dictionary<string, object> { 
                    
                    {"Error","Ocurrió un error al leer el archivo ZIP: " + ex.Message},
                    {"tmpDir",tmpDir != null ? tmpDir.FullName : "null"},
                    {"Exception",ex},
                });
                LogUtil.Error(ex);
            }
            return documento;
        }

        /// <summary>
        /// Procesa un documento de instancia indicado en la uri del archivo enviado como parámetro o en su flujo de bytes de entrada
        /// </summary>
        /// <param name="uriArchivo">URL del archivo a procesar</param>
        /// <param name="resultado">Resultado de la operación</param>
        /// <returns>Documento de instancia cargado, null si no se puede cargar el documento</returns>
        private DocumentoInstanciaXbrlDto ProcesarArchivoInstancia(string uriArchivo, Stream streamArchivo, ResultadoOperacionDto resultado)
        {
            
            var serv = XPEServiceImpl.GetInstance(_forzarEsquemaHttp);

            DocumentoInstanciaXbrlDto instXPE = null;
            var erroresXPE = new List<ErrorCargaTaxonomiaDto>();
            var info = new AbaxCargaInfoDto();

            ConfiguracionCargaInstanciaDto config = new ConfiguracionCargaInstanciaDto();

            config.Errores = erroresXPE;
            config.InfoCarga = info;
            config.EjecutarValidaciones = true;
            config.CacheTaxonomia = _cacheTaxonomiaXbrl;
            config.ConstruirTaxonomia = true;
            if (uriArchivo != null)
            {
                config.UrlArchivo = uriArchivo;                
            }
            else
            {
                config.Archivo = streamArchivo;                
            }

            instXPE = serv.CargarDocumentoInstanciaXbrl(config);



            LogUtil.Info("Tiempo de carga:" + info.MsCarga);
            LogUtil.Info("Tiempo de Validación:" + info.MsValidacion);
            LogUtil.Info("Tiempo de Procesamiento de Fórmulas:" + info.MsFormulas);
            LogUtil.Info("Tiempo de Transformación:" + info.MsTransformacion);
            resultado.Resultado = !erroresXPE.Any(x => x.Severidad == ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL);
            resultado.InformacionExtra = erroresXPE;
            if (instXPE != null)
            {
                instXPE.EsCorrecto = erroresXPE.Count == 0;
                instXPE.Errores = erroresXPE;
            }
            else
            {
                LogUtil.Info(erroresXPE);
            }
            
            return instXPE;
        }
        
        /// <summary>
        /// Obtiene de la base de datos la lista de emisoras disponibles para el usuario
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerEmisorasAsignadas")]
        public IHttpActionResult ObtenerEmisorasAsignadas()
        {
            var resultado = UsuarioService.ObtenerEmpresasPorIdEmpresaIdUsuario(null, IdUsuarioExec);
            var listaResultado = new List<LlaveValorDto>();
            if (resultado.Resultado)
            {
                foreach (var usuarioEmpresa in resultado.InformacionExtra as IList<UsuarioEmpresa>)
                {
                    listaResultado.Add(new LlaveValorDto(usuarioEmpresa.Empresa.NombreCorto, usuarioEmpresa.Empresa.NombreCorto));
                }
            }
            resultado.InformacionExtra = listaResultado;
            return Json(resultado);
        }

		/// <summary>
        /// Obtiene de la base de datos de una emisora su fecha de constitucion
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerFechaConstitucionEmisora")]
        public IHttpActionResult ObtenerFechaConstitucionEmisora()
        {
            String claveCot = getFormKeyValue("emisora");
            ResultadoOperacionDto resultado = null;
            if (!String.IsNullOrEmpty(claveCot))
            {
                resultado = EmpresaService.ObtenerEmpresasPorFiltro(claveCot);
                resultado.Resultado = false;
                if (resultado.InformacionExtra != null)
                {
                    var empresa = (resultado.InformacionExtra as IQueryable<Empresa>).FirstOrDefault();
                    if (empresa != null)
                    {
                        resultado.InformacionExtra = DateTime.Parse("2000-01-01"); //empresa.FechaConstitucion;
                        resultado.Resultado = true;
                    }
                    else
                    {
                        resultado.InformacionExtra = null;
                    }
                }
            }
            else
            {
                resultado = new ResultadoOperacionDto();
                resultado.Resultado = true;
            }
            return Json(resultado);
        }

        /// <summary>
        /// Obtiene de la base de datos la lista de fideicomisos existentes.
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerFideicomisos")]
        public IHttpActionResult ObtenerFideicomisos()
        {
            var emisoraNombreCorto = getFormKeyValue("emisora");
            var lista = UsuarioService.ObtenListaFideicomisos(emisoraNombreCorto);
            var listaResultado = new List<LlaveValorDto>();
            foreach (var clave in lista)
            {
                listaResultado.Add(new LlaveValorDto(clave, clave));
            }
            
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                InformacionExtra = listaResultado
            };
            return Json(resultado);
        }


        /// <summary>
        /// Obtiene la definición de una taxonomía basado en el ID que tiene en base de datos, la transforma en 
        /// el DTO que la representa y la retorna a la página que lo invocó
        /// </summary>
        /// <param name="idTaxonomia">Identificador a buscar</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerDefinicionTaxonomia")]
        public IHttpActionResult ObtenerDefinicionTaxonomia()
        {
            var sIdTaxonomia = getFormKeyValue("idTaxonomia");
            var idTaxonomia = Int64.Parse(sIdTaxonomia);
            var resultado = ObtenerDefinicionTaxonomiaPorId(idTaxonomia);
            return Json(resultado);
        }

        /// <summary>
        /// Retorna la definición de la taxonomía por el identificador.
        /// </summary>
        /// <param name="idTaxonomia">Identificador de la taxonomía.</param>
        /// <returns>Resultado con la definición de la taxonomía.</returns>
        private ResultadoOperacionDto ObtenerDefinicionTaxonomiaPorId(long idTaxonomia)
        {
            var resultado = DocumentoInstanciaService.ObtenerTaxonomiaBdPorId(idTaxonomia);
            if (resultado.Resultado && resultado.InformacionExtra != null)
            {
                //Cargar la taxonomía
                var taxoBd = resultado.InformacionExtra as TaxonomiaXbrl;
                var listaDts =
                    DocumentoInstanciaXbrlDtoConverter.ConvertirDTSDocumentoInstancia(taxoBd.ArchivoTaxonomiaXbrl);
                var taxoDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(listaDts);
                if (taxoDto == null)
                {
                    var errores = new List<ErrorCargaTaxonomiaDto>();
                    var resultadoTaxonomia = DocumentoInstanciaService.ObtenerTaxonomiaXbrlProcesada(idTaxonomia, errores);
                    var taxonomiaDto = resultadoTaxonomia.InformacionExtra as TaxonomiaDto;
                    var puedeContinuar = resultadoTaxonomia.Resultado;
                    if (puedeContinuar)
                    {
                        _cacheTaxonomiaXbrl.AgregarTaxonomia(listaDts, taxonomiaDto);
                        taxoDto = taxonomiaDto;
                    }
                    else
                    {
                        resultado.Resultado = false;
                        resultado.InformacionExtra = errores;
                    }
                }
                if (resultado.Resultado)
                {
                    resultado.InformacionExtra = taxoDto;
                }
                else 
                {
                    resultado.Mensaje = "MENSAJE_ERROR_PROCESAR_TAXONOMIAS";
                }
            }
            return resultado;
        }



        /// <summary>
        /// Atiende la solicitud de eliminación de un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento a eliminar</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("EliminarDocumentoInstancia")]
        public IHttpActionResult EliminarDocumentoInstancia()
        {
            var sIdDocumentoInstancia = getFormKeyValue("idDocumentoInstancia");
            var idDocumentoInstancia = Int64.Parse(sIdDocumentoInstancia);
            DocumentoInstanciaService.EliminarDocumentoInstancia(idDocumentoInstancia, IdUsuarioExec);
            var claveEmisora = getFormKeyValue("claveEmisora");
            var fecha = getFormKeyValue("fecha");
            return ListaDocumentosInstancia(claveEmisora, fecha, 1, 1);
        }
        /// <summary>
        /// Carga la taxonomía del documento de instancia.
        /// </summary>
        /// <param name="documentoInstanciaDto">Documento de instnacia.</param>
        /// <returns>Taxonomía del documento de instancia.</returns>
        private ITaxonomiaXBRL CargaTaxonomiaApartirDeDocumentoInstanciaXBRL(DocumentoInstanciaXbrlDto documentoInstanciaDto)
        {
            var manejadorErrores = new ManejadorErroresCargaTaxonomia();
            ITaxonomiaXBRL taxonomiaXbrl = new TaxonomiaXBRL { ManejadorErrores = manejadorErrores };
            foreach (var dts in documentoInstanciaDto.DtsDocumentoInstancia)
            {
                if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                {
                    taxonomiaXbrl.ProcesarDefinicionDeEsquema(dts.HRef, _forzarEsquemaHttp);
                }
            }
            taxonomiaXbrl.CrearArbolDeRelaciones();
            TaxonomiaDto taxonomiaDto = XbrlViewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxonomiaXbrl);
            if (manejadorErrores.PuedeContinuar())
            {
                _cacheTaxonomiaXbrl.AgregarTaxonomia(documentoInstanciaDto.DtsDocumentoInstancia, taxonomiaDto);
                _estrategiaCacheTaxonomia.AgregarTaxonomia(DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(documentoInstanciaDto.DtsDocumentoInstancia), taxonomiaXbrl);
            }
            else
            {
                LogUtil.Error(new Dictionary<string, object>()
                {
                    { "Error", "Error al cargar la taxonomía" },
                    { "Espacio de Nombres", documentoInstanciaDto.EspacioNombresPrincipal},
                    { "Errores taxonomía" , taxonomiaXbrl.ManejadorErrores}
                });
                taxonomiaXbrl = null;
            }
            return taxonomiaXbrl;
        }

        public AbaxXBRLCore.Viewer.Application.Dto.HechoDto FirmaDocumentoXBRL(DocumentoInstanciaXbrlDto documentoInstanciaDto)
        {
            LogUtil.Info("intentando FirmaDocumentoXBRL");
            IList<String> idsHechosReporteAnualList;
            AbaxXBRLCore.Viewer.Application.Dto.HechoDto hecho = null;
            if (documentoInstanciaDto.HechosPorIdConcepto.TryGetValue("ar_pros_AnnualReport", out idsHechosReporteAnualList))
            {
                LogUtil.Info("Hecho ar_pros_AnnualReport encontrado");
                AbaxXBRLCore.Viewer.Application.Dto.HechoDto hechoReporteAnual;
                if (documentoInstanciaDto.HechosPorId.TryGetValue(idsHechosReporteAnualList.First(), out hechoReporteAnual))
                {
                    LogUtil.Info("Argegando hecho ar_pros_XbrlProcessorSignature");
                    var idContexto = hechoReporteAnual.IdContexto;
                    hecho = new AbaxXBRLCore.Viewer.Application.Dto.HechoDto();
                    hecho.Id = "F" + Guid.NewGuid().ToString();
                    hecho.IdConcepto = "ar_pros_XbrlProcessorSignature";
                    hecho.IdContexto = idContexto;
                    var claveEmisora = documentoInstanciaDto.EntidadesPorId.Values.First().Id;
                    var idProcesador = ObtenProcesadorId();
                    var momento = DateTime.Now.ToString();
                    var texto = "AbaxXBRL-" + idProcesador + "-" + claveEmisora + "-" + momento;
                    hecho.Valor = EncryptString(texto, "088xXq937a0587N");
                    documentoInstanciaDto.HechosPorId.Add(hecho.Id, hecho);
                    LogUtil.Info("Hecho agregado:" + hecho.Valor);
                }
            }

            return hecho;
        }

        public string ObtenProcesadorId()
        {
            var mbs = new ManagementObjectSearcher("Select ProcessorId From Win32_processor");
            ManagementObjectCollection mbsList = mbs.Get();
            string id = "";
            foreach (ManagementObject mo in mbsList)
            {
                id = mo["ProcessorId"].ToString();
                break;
            }
            return id;
        }

        public static string EncryptString(string plainText, string passPhrase)
        { 
            var initVector = "pemgail9uzpgzl88";
            byte[] initVectorBytes = Encoding.UTF8.GetBytes(initVector);
            byte[] plainTextBytes = Encoding.UTF8.GetBytes(plainText);
            PasswordDeriveBytes password = new PasswordDeriveBytes(passPhrase, null);
            byte[] keyBytes = password.GetBytes(256 / 8);
            RijndaelManaged symmetricKey = new RijndaelManaged();
            symmetricKey.Mode = CipherMode.CBC;
            ICryptoTransform encryptor = symmetricKey.CreateEncryptor(keyBytes, initVectorBytes);
            MemoryStream memoryStream = new MemoryStream();
            CryptoStream cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write);
            cryptoStream.Write(plainTextBytes, 0, plainTextBytes.Length);
            cryptoStream.FlushFinalBlock();
            byte[] cipherTextBytes = memoryStream.ToArray();
            memoryStream.Close();
            cryptoStream.Close();
            return Convert.ToBase64String(cipherTextBytes);
        }


        /// <summary>
        /// Genera el XML de un documento XBRL en base a los datos de un documento de instancia de la base de datos
        /// </summary>
        /// <param name="idDocumentoInstancia"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("GenerarDocumentoXBRL")]
        public IHttpActionResult GenerarDocumentoXBRL()
        {
            var documentoInstancia = getFormKeyValue("documentoInstancia");
            var formatoZip = false;
            formatoZip = !String.IsNullOrEmpty(getFormKeyValue("zip")) && Boolean.TrueString.ToLowerInvariant().Equals(getFormKeyValue("zip"));
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            long idEmpresa = 0;
            long idUsuario = 0;
            long.TryParse(getFormKeyValue("idEmpresa"), out idEmpresa);
            long.TryParse(getFormKeyValue("idUsuario"), out idUsuario);
            ConfiguracionAuxiliarXBRL configuracionAuxiliarXbrl;
            DocumentoInstanciaXbrlDto documentoInstanciaDto = null;
            try
            {
                documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
                configuracionAuxiliarXbrl = DocumentoInstanciaService.ObtenConfiguracionAuxiliarXBRL();

                var dtsDocumentoInstancia = new Dictionary<String, DtsDocumentoInstanciaDto>();
                var remplazado = false;
                foreach (var dtos in documentoInstanciaDto.DtsDocumentoInstancia)
                {
                    String hrefSustituto = dtos.HRef;
                    foreach (var dominioOrigen in configuracionAuxiliarXbrl.DominiosSustitutosDocumentoInstancia.Keys)
                    {
                        if (hrefSustituto.Contains(dominioOrigen))
                        {
                            var nuevoDominio = configuracionAuxiliarXbrl.DominiosSustitutosDocumentoInstancia[dominioOrigen];
                            hrefSustituto = hrefSustituto.Replace(dominioOrigen, nuevoDominio);
                            dtos.HRef = hrefSustituto;
                            remplazado = true;
                        }
                    }
                    dtsDocumentoInstancia[dtos.HRef] = dtos;
                }
                if (remplazado)
                {
                    documentoInstanciaDto.DtsDocumentoInstancia = new List<DtsDocumentoInstanciaDto>(dtsDocumentoInstancia.Values);
                }



                AdjuntarTaxonomia(documentoInstanciaDto);
                XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
                XbrlViewerService.EliminarElementosDuplicados(documentoInstanciaDto);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                if (documentoInstanciaDto != null)
                {
                    var archivoImportadoDocumentoList = DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(documentoInstanciaDto.DtsDocumentoInstancia);
                    ITaxonomiaXBRL taxonomiaXbrl = _estrategiaCacheTaxonomia.ResolverTaxonomiaXbrl(archivoImportadoDocumentoList);
                    /*
                    if (taxonomiaXbrl == null && documentoInstanciaDto.Taxonomia != null)
                    {
                        taxonomiaXbrl = CargaTaxonomiaApartirDeDocumentoInstanciaXBRL(documentoInstanciaDto);
                        if (taxonomiaXbrl == null)
                        {
                            throw new NullReferenceException("No fue posible obtener la taxonomía del documento de instancia indicado: " + documentoInstanciaDto.EspacioNombresPrincipal);
                        }
                    }
                    */
                    try
                    {
                        var hecho = FirmaDocumentoXBRL(documentoInstanciaDto);
                    }
                    catch (Exception ex) {
                        LogUtil.Error("Error al firmar hecho en el documento");
                        LogUtil.Error(ex);
                    }



                    var tituloEspecificoDocumento = ObtenerTituloEspecificoDocumento(documentoInstanciaDto);

                    var nombreArchivoXBRL = tituloEspecificoDocumento!=null?tituloEspecificoDocumento:(
                        (String.IsNullOrEmpty(documentoInstanciaDto.Titulo) ? "export" : documentoInstanciaDto.Titulo));

                    var xpeService = XPEServiceImpl.GetInstance(_forzarEsquemaHttp);
                    var stream = xpeService.GenerarDocumentoInstanciaXbrl(documentoInstanciaDto, _cacheTaxonomiaXbrl);

                    //XmlUtil.EscribirXMLAStream(xbrl, stream, "iso-8859-1");
                    
                    stream.Position = 0;
                    response.StatusCode = HttpStatusCode.OK;
                    response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });
                        if (formatoZip)
                        {
                        nombreArchivoXBRL = nombreArchivoXBRL.Replace("/","");
                        var streamZip = ZipUtil.CrearZipAPartirDeStream(stream, nombreArchivoXBRL + ".xbrl");
                        stream.Close();
                        streamZip.Position = 0;
                        response.Content = new StreamContent(streamZip);
                        response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                        response.Content.Headers.ContentDisposition.FileName = nombreArchivoXBRL + ".zip";
                        response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/zip");
                        }
                        else
                        {
                        response.Content = new StreamContent(stream);
                        response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                        response.Content.Headers.ContentDisposition.FileName = nombreArchivoXBRL + ".xbrl";
                        response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/xml");
                    }


                    var infoAudit = new InformacionAuditoriaDto
                    {
                        Accion = ConstantsAccionAuditable.Exportar,
                        Empresa = idEmpresa,
                        Fecha = DateTime.Now,
                        IdUsuario = idUsuario,
                        Modulo = ConstantsModulo.EditorDocumentosXBRL,
                        Registro =
                            "Generación XBRL de documento de instancia: Título:  " +
                            documentoInstanciaDto.Titulo + " con el identificador: " +
                            documentoInstanciaDto.IdDocumentoInstancia + " y versión:" + documentoInstanciaDto.Version
                    };
                    DocumentoInstanciaService.RegistrarAccionAuditoria(infoAudit);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                response.StatusCode = HttpStatusCode.OK;
                var dtoResultado = new ResultadoOperacionDto();
                dtoResultado.Resultado = false;
                dtoResultado.Mensaje = ex.Message;
                dtoResultado.InformacionExtra = ex.StackTrace;
                dtoResultado.Excepcion = ex.StackTrace;
                response.Content = new StringContent(dtoResultado.Mensaje);
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            }
            finally
            {
                if (documentoInstanciaDto != null)
                {
                    documentoInstanciaDto.Cerrar();
                    documentoInstanciaDto = null;
                }
            }
            return ResponseMessage(response);
        }

        /// <summary>
        /// Ajusta el valor de los decimales para los hechos del reporte anual.
        /// </summary>
        /// <param name="documentoInstanciaDto">Documento que requiere ser ajustado.</param>
        private void EvaluaDecimalesDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciaDto)
        {
            if (documentoInstanciaDto.EspacioNombresPrincipal.Contains("ar_prospectus"))
            {
                if (documentoInstanciaDto.Taxonomia != null)
                {
                    foreach (var idConcepto in documentoInstanciaDto.Taxonomia.ConceptosPorId.Keys)
                    {
                        ConceptoDto concepto;
                        if (documentoInstanciaDto.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                        {
                            if (concepto.TipoDatoXbrl.Contains("monetaryItemType"))
                            {
                                IList<String> idsHechosConcepto;
                                if (documentoInstanciaDto.HechosPorIdConcepto.TryGetValue(idConcepto, out idsHechosConcepto))
                                {
                                    foreach(var idHechoConcepto in idsHechosConcepto)
                                    {
                                        AbaxXBRLCore.Viewer.Application.Dto.HechoDto hecho;
                                        if (documentoInstanciaDto.HechosPorId.TryGetValue(idHechoConcepto, out hecho))
                                        {
                                            hecho.Decimales = "-3";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Verifica si no tiene una taxonomía asignada, recuperar la taxonomía del caché
        /// </summary>
        /// <param name="documentoInstanciaDto"></param>
        private void AdjuntarTaxonomia(DocumentoInstanciaXbrlDto documentoInstanciaDto)
        {
            var taxoCache = _cacheTaxonomiaXbrl.ObtenerTaxonomia(documentoInstanciaDto.DtsDocumentoInstancia);
            if (taxoCache != null)
            {
                documentoInstanciaDto.Taxonomia = taxoCache;
            }
        }

        /// <summary>
        /// Verifica si el documento de instancia tiene una plantilla y si la tiene, obtiene el título específico que debe de tener el documento
        /// </summary>
        /// <param name="instancia">Documento de instancia del cuál se obtiene el título</param>
        /// <returns>Título del documento indicado por la plantilla</returns>
        private string ObtenerTituloEspecificoDocumento(DocumentoInstanciaXbrlDto instancia)
        {
            if (instancia != null && instancia.EspacioNombresPrincipal != null)
            {
                var idBean = UtilAbax.ObtenerIdSpringDefinicionPlantilla(instancia.EspacioNombresPrincipal);
                if (ServiceLocator.ObtenerFabricaSpring().ContainsObject(idBean))
                {
                    var plantilla = (IDefinicionPlantillaXbrl)ServiceLocator.ObtenerFabricaSpring().GetObject(idBean);
                    plantilla.Inicializar(instancia);
                    return plantilla.ObtenerTituloEspecificoDocumentoXbrl(instancia);
                }
            }
            return null;
        }
        /// <summary>
        /// Obtiene la definición de plantilla ara el documento de instancia indicado.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia del que se requiere la definición de plantilla.</param>
        /// <returns>Definición de plantilla para el documento de instancia solicitado.</returns>
        private IDefinicionPlantillaXbrl ObtenDefinicionPlantilla(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var espacioNombres = documentoInstancia.EspacioNombresPrincipal;
            if (String.IsNullOrEmpty(espacioNombres) && documentoInstancia.Taxonomia != null)
            {
                espacioNombres = documentoInstancia.Taxonomia.EspacioNombresPrincipal;
            }
            if (String.IsNullOrEmpty(espacioNombres))
            {
                throw new NullReferenceException("No fué posible obtener el espacio de nombres del documento.");
            }
            var idBean = espacioNombres.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
            var plantilla = (IDefinicionPlantillaXbrl)ServiceLocator.ObtenerFabricaSpring().GetObject(idBean);
            plantilla.Inicializar(documentoInstancia);
            return plantilla;
        }

        /// <summary>
        /// Genera un documento de instancia de la base de datos en un documento con formato excel (xlsx)
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador unico del documento instancia</param>
        /// <returns>Resultado de la operacion con el documento en el response</returns>
        [HttpPost]
        [Route("GenerarDocumentoExcel")]
        public IHttpActionResult GenerarDocumentoExcel()
        {
            var espacioNombresPrincipal = getFormKeyValue("espacioNombresPrincipal");
            var documentoInstancia = getFormKeyValue("documentoInstancia");
            var idioma = getFormKeyValue("idioma");
            var dtsJson = getFormKeyValue("dtsTaxonomia");
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            var conceptosDescartarAtt = getFormKeyValue("conceptosDescartar");
            var hojasDescartarAtt = getFormKeyValue("hojasDescartar");
            ResultadoOperacionDto resultado;
            var dtsDoc = (List<DtsDocumentoInstanciaDto>)JsonConvert.DeserializeObject(dtsJson, typeof(List<DtsDocumentoInstanciaDto>));
            var resTax = ObtenerOAgregarTaxonomiaACache(dtsDoc);


            long idEmpresa = 0;
            long idUsuario = 0;
            long.TryParse(getFormKeyValue("idEmpresa"), out idEmpresa);
            long.TryParse(getFormKeyValue("idUsuario"), out idUsuario);

            var conceptosDescartar = (IDictionary<string, bool>)JsonConvert.DeserializeObject(conceptosDescartarAtt, typeof(IDictionary<string, bool>));
            var hojasDescartar = (IList<string>)JsonConvert.DeserializeObject(hojasDescartarAtt, typeof(IList<string>));

            MemoryStream stream = null;

            if (resTax.Resultado) {
                resultado = ImportadorExportadorArchivoPlantilla.ObtenerPlantillaExcel(espacioNombresPrincipal, idioma, resTax.InformacionExtra as TaxonomiaDto, conceptosDescartar, hojasDescartar);
                if (resultado.Resultado) {
                    stream = (MemoryStream)resultado.InformacionExtra;
                    stream.Position = 0;
                    response.Content = new StreamContent(stream);
                }
            }


            DocumentoInstanciaXbrlDto documentoInstanciaDto = null;
            try
            {

                documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
                AdjuntarTaxonomia(documentoInstanciaDto);
                XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                if (documentoInstanciaDto != null)
                {

                    var resultadoExportacion = ImportadorExportadorArchivoPlantilla.ExportarDocumentoExcel(documentoInstanciaDto, idioma, resTax.InformacionExtra as TaxonomiaDto, conceptosDescartar, hojasDescartar);
                    if (resultadoExportacion.Resultado)
                    {
                        var documentoExcel = (byte[])(resultadoExportacion.InformacionExtra as Dictionary<string, object>)["archivo"];
                        response.StatusCode = HttpStatusCode.OK;
                        response.Content = new ByteArrayContent(documentoExcel);
                        response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                        response.Content.Headers.ContentDisposition.FileName = (string.IsNullOrEmpty(documentoInstanciaDto.Titulo) ? "export" : documentoInstanciaDto.Titulo) + ".xlsx";
                        response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                        response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });

                        var infoAudit = new InformacionAuditoriaDto
                        {
                            Accion = ConstantsAccionAuditable.Exportar,
                            Empresa = idEmpresa,
                            Fecha = DateTime.Now,
                            IdUsuario = idUsuario,
                            Modulo = ConstantsModulo.EditorDocumentosXBRL,
                            Registro =
                                "Generación Archivo Excel de documento de instancia: Título:  " +
                                documentoInstanciaDto.Titulo + " con el identificador: " +
                                documentoInstanciaDto.IdDocumentoInstancia + " y versión:" + documentoInstanciaDto.Version
                        };
                        DocumentoInstanciaService.RegistrarAccionAuditoria(infoAudit);

                    }
                    else
                    {
                        response.StatusCode = HttpStatusCode.OK;
                        response.Content = new StringContent(resultadoExportacion.Mensaje);
                        response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
                    }
                }
            }
            catch (Exception ex)
            {
                response.StatusCode = HttpStatusCode.OK;
                var dtoResultado = new ResultadoOperacionDto();
                dtoResultado.Resultado = false;
                dtoResultado.Mensaje = ex.Message;
                dtoResultado.InformacionExtra = ex.StackTrace;
                response.Content = new StringContent(dtoResultado.Mensaje);
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            }
            finally
            {
                if (documentoInstanciaDto != null)
                {
                    documentoInstanciaDto.Cerrar();
                    documentoInstanciaDto = null;
                }
            }


            return ResponseMessage(response);
        }

        [HttpPost]
        [Route("TestExcel")]
        public async Task<IHttpActionResult> TestExcel()
        {

            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }
            var respuesta = "";
            try
            {
                var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);
                var fileData = provider.FileData.FirstOrDefault();
                string rutaArchivo = null;
                string nombreArchivo = null;
                if (fileData != null)
                {
                    rutaArchivo = fileData.LocalFileName;
                    nombreArchivo = fileData.Headers.ContentDisposition.FileName ?? "";
                    nombreArchivo = nombreArchivo.Replace("\\", "").Replace("\"", "");
                }


                if (rutaArchivo != null)
                {
                    using (var archivoStream = new FileStream(rutaArchivo, FileMode.Open))
                    {
                        var workBookImportar = new XSSFWorkbook(archivoStream);
                        for (var iItem = 0; iItem < workBookImportar.Count; iItem++)
                        {
                            var hojaImportar =
                                workBookImportar.GetSheetAt(iItem);
                            if (hojaImportar != null)
                            {
                                respuesta += hojaImportar.SheetName;
                            }
                        }
                    }

                    File.Delete(rutaArchivo);

                }
            }
            catch (Exception ex)
            {
                respuesta = ex.Message + " - " + ex.StackTrace;
            }
            
            return Ok(respuesta);

        }
       
        /// <summary>
        /// Genera un documento de Word en base a los datos de un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador unico del documento instancia</param>
        /// <returns>Resultado de la operacion con el documento en el response</returns>
        [HttpPost]
        [Route("GenerarDocumentoWord")]
        public IHttpActionResult GenerarDocumentoWord()
        {
            long idEmpresa = 0;
            long idUsuario = 0;
            long.TryParse(getFormKeyValue("idEmpresa"), out idEmpresa);
            long.TryParse(getFormKeyValue("idUsuario"), out idUsuario);
            var documentoInstancia = getFormKeyValue("documentoInstancia");
            var claveIdioma = getFormKeyValue("idioma");
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });
            try
            {
                var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
                AdjuntarTaxonomia(documentoInstanciaDto);
                XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                if (documentoInstanciaDto != null)
                {
                    var espacioNombres = documentoInstanciaDto.EspacioNombresPrincipal.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
                    var plantilla = (IDefinicionPlantillaXbrl) ServiceLocator.ObtenerFabricaSpring().GetObject(espacioNombres);
                    var builder = ReporteBuilderFactoryService.obtenerReporteBuilder(documentoInstanciaDto, plantilla, claveIdioma);
                    var exporter = ExportadorDocumentoInstanciaFactoryService.ObtenerExportadorParaDocumento(documentoInstanciaDto);
                    builder.crearReporteXBRLDTO(documentoInstanciaDto);
                    var archivo = exporter.exportarDocumentoAWord(documentoInstanciaDto, builder.ReporteXBRLDTO);


                    var documentoWord = archivo;
                    response.StatusCode = HttpStatusCode.OK;
                    response.Content = new ByteArrayContent(documentoWord);
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = (string.IsNullOrEmpty(documentoInstanciaDto.Titulo) ? "export" : documentoInstanciaDto.Titulo) + ".docx";
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.wordprocessingml.document");

                    var infoAudit = new InformacionAuditoriaDto
                    {
                        Accion = ConstantsAccionAuditable.Exportar,
                        Empresa = idEmpresa,
                        Fecha = DateTime.Now,
                        IdUsuario = idUsuario,
                        Modulo = ConstantsModulo.EditorDocumentosXBRL,
                        Registro =
                            "Generación Archivo Word de documento de instancia: Título:  " +
                            documentoInstanciaDto.Titulo + " con el identificador: " +
                            documentoInstanciaDto.IdDocumentoInstancia + " y versión:" + documentoInstanciaDto.Version
                    };
                    DocumentoInstanciaService.RegistrarAccionAuditoria(infoAudit);

                    
                   
                }

            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                response.StatusCode = HttpStatusCode.NotFound;
                var dtoResultado = new ResultadoOperacionDto();
                dtoResultado.Resultado = false;
                dtoResultado.Mensaje = ex.Message;
                dtoResultado.InformacionExtra = ex.StackTrace;
                response.Content = new StringContent(JsonConvert.SerializeObject(dtoResultado));
            }
            return ResponseMessage(response);
        }

        /// <summary>
        /// Genera un documento de PDF en base a los datos de un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador unico del documento instancia</param>
        /// <returns>Resultado de la operacion con el documento en el response</returns>
        [HttpPost]
        [Route("GenerarDocumentoPdf")]
        public IHttpActionResult GenerarDocumentoPdf()
        {
            long idEmpresa = 0;
            long idUsuario = 0;
            long.TryParse(getFormKeyValue("idEmpresa"), out idEmpresa);
            long.TryParse(getFormKeyValue("idUsuario"), out idUsuario);
            var documentoInstancia = getFormKeyValue("documentoInstancia");
            var claveIdioma = getFormKeyValue("idioma");
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });
            try
            {
                var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
                AdjuntarTaxonomia(documentoInstanciaDto);
                XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                if (documentoInstanciaDto != null)
                {
                    var espacioNombres = documentoInstanciaDto.EspacioNombresPrincipal.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
                    var plantilla = (IDefinicionPlantillaXbrl)ServiceLocator.ObtenerFabricaSpring().GetObject(espacioNombres);
                    var builder = ReporteBuilderFactoryService.obtenerReporteBuilder(documentoInstanciaDto, plantilla, claveIdioma);
                    var exporter = ExportadorDocumentoInstanciaFactoryService.ObtenerExportadorParaDocumento(documentoInstanciaDto);
                    builder.crearReporteXBRLDTO(documentoInstanciaDto);

                    var concatenarArchivos = false;
                    if (espacioNombres.Contains("_ar_N") || espacioNombres.Contains("_ar_O"))
                    {
                        concatenarArchivos = true;
                    }

                    var archivo = exporter.exportarDocumentoAPDF(documentoInstanciaDto, builder.ReporteXBRLDTO, concatenarArchivos);


                    var documentoWord = archivo;
                    response.StatusCode = HttpStatusCode.OK;
                    response.Content = new ByteArrayContent(documentoWord);
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = (string.IsNullOrEmpty(documentoInstanciaDto.Titulo) ? "export" : documentoInstanciaDto.Titulo) + ".pdf";
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.pdf");

                    var infoAudit = new InformacionAuditoriaDto
                    {
                        Accion = ConstantsAccionAuditable.Exportar,
                        Empresa = idEmpresa,
                        Fecha = DateTime.Now,
                        IdUsuario = idUsuario,
                        Modulo = ConstantsModulo.EditorDocumentosXBRL,
                        Registro =
                            "Generación Archivo Word de documento de instancia: Título:  " +
                            documentoInstanciaDto.Titulo + " con el identificador: " +
                            documentoInstanciaDto.IdDocumentoInstancia + " y versión:" + documentoInstanciaDto.Version
                    };
                    DocumentoInstanciaService.RegistrarAccionAuditoria(infoAudit);

                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                response.StatusCode = HttpStatusCode.NotFound;
                var dtoResultado = new ResultadoOperacionDto();
                dtoResultado.Resultado = false;
                dtoResultado.Mensaje = ex.Message;
                dtoResultado.InformacionExtra = ex.StackTrace;
                response.Content = new StringContent(JsonConvert.SerializeObject(dtoResultado));
            }
            return ResponseMessage(response);
        }


        /// <summary>
        /// Genera un documento de HTML en base a los datos de un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador unico del documento instancia</param>
        /// <returns>Resultado de la operacion con el documento en el response</returns>
        [HttpPost]
        [Route("GenerarDocumentoHtml")]
        public IHttpActionResult GenerarDocumentoHtml()
        {
            long idEmpresa = 0;
            long idUsuario = 0;
            long.TryParse(getFormKeyValue("idEmpresa"), out idEmpresa);
            long.TryParse(getFormKeyValue("idUsuario"), out idUsuario);
            var documentoInstancia = getFormKeyValue("documentoInstancia");
            var claveIdioma = getFormKeyValue("idioma");
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });
            try
            {
                var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
                AdjuntarTaxonomia(documentoInstanciaDto);
                XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                if (documentoInstanciaDto != null)
                {
                    var espacioNombres = documentoInstanciaDto.EspacioNombresPrincipal.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
                    var plantilla = (IDefinicionPlantillaXbrl)ServiceLocator.ObtenerFabricaSpring().GetObject(espacioNombres);
                    var builder = ReporteBuilderFactoryService.obtenerReporteBuilder(documentoInstanciaDto, plantilla, claveIdioma);
                    var exporter = ExportadorDocumentoInstanciaFactoryService.ObtenerExportadorParaDocumento(documentoInstanciaDto);
                    builder.crearReporteXBRLDTO(documentoInstanciaDto);
                    var archivo = exporter.exportarDocumentoAHTML(documentoInstanciaDto, builder.ReporteXBRLDTO);

                    var documentoWord = archivo;
                    response.StatusCode = HttpStatusCode.OK;
                    response.Content = new ByteArrayContent(documentoWord);
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = (string.IsNullOrEmpty(documentoInstanciaDto.Titulo) ? "export" : documentoInstanciaDto.Titulo) + ".html";
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html");
                    var infoAudit = new InformacionAuditoriaDto
                    {
                        Accion = ConstantsAccionAuditable.Exportar,
                        Empresa = idEmpresa,
                        Fecha = DateTime.Now,
                        IdUsuario = idUsuario,
                        Modulo = ConstantsModulo.EditorDocumentosXBRL,
                        Registro =
                            "Generación Archivo HTML de documento de instancia: Título:  " +
                            documentoInstanciaDto.Titulo + " con el identificador: " +
                            documentoInstanciaDto.IdDocumentoInstancia + " y versión:" + documentoInstanciaDto.Version
                    };
                    DocumentoInstanciaService.RegistrarAccionAuditoria(infoAudit);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                response.StatusCode = HttpStatusCode.NotFound;
                var dtoResultado = new ResultadoOperacionDto();
                dtoResultado.Resultado = false;
                dtoResultado.Mensaje = ex.Message;
                dtoResultado.InformacionExtra = ex.StackTrace;
                response.Content = new StringContent(JsonConvert.SerializeObject(dtoResultado));
            }
            return ResponseMessage(response);
        }

        /// <summary>
        /// Genera un documento de Word en base a los datos de un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador unico del documento instancia</param>
        /// <returns>Resultado de la operacion con el documento en el response</returns>
        [HttpPost]
        [Route("GenerarNotaDocumentoWord")]
        public IHttpActionResult GenerarNotaDocumentoWord()
        {
            //long idEmpresa = 0;
            //long idUsuario = 0;
            //long.TryParse(getFormKeyValue("idEmpresa"), out idEmpresa);
            //long.TryParse(getFormKeyValue("idUsuario"), out idUsuario);
            var nota = getFormKeyValue("nota");
            //var claveIdioma = getFormKeyValue("idioma");
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });

            var exporter = new ExportadorNota();
            try
            {
                var archivo = exporter.exportarNotaWord(nota);

                var documentoWord = archivo;
                response.StatusCode = HttpStatusCode.OK;
                response.Content = new ByteArrayContent(documentoWord);
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = "export_note.doc";
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.wordprocessingml.document");

                /*var infoAudit = new InformacionAuditoriaDto
                {
                    Accion = ConstantsAccionAuditable.Exportar,
                    Empresa = idEmpresa,
                    Fecha = DateTime.Now,
                    IdUsuario = idUsuario,
                    Modulo = ConstantsModulo.EditorDocumentosXBRL,
                    Registro =
                        "Generación Archivo Word de nota: Título:  "
                        //+
                        //documentoInstanciaDto.Titulo + " con el identificador: " +
                        //documentoInstanciaDto.IdDocumentoInstancia + " y versión:" + documentoInstanciaDto.Version
                };
                DocumentoInstanciaService.RegistrarAccionAuditoria(infoAudit);*/
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                response.StatusCode = HttpStatusCode.NotFound;
                var dtoResultado = new ResultadoOperacionDto();
                dtoResultado.Resultado = false;
                dtoResultado.Mensaje = ex.Message;
                dtoResultado.InformacionExtra = ex.StackTrace;
                response.Content = new StringContent(JsonConvert.SerializeObject(dtoResultado));
            }
            return ResponseMessage(response);
        }

        /// <summary>
        /// Action para la importación de notas de un documento de instancia 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ImportarNotasDocumentoInstancia")]
        public async Task<IHttpActionResult> ImportarNotasDocumentoInstancia()
        {
            var resultado = new ResultadoOperacionDto();

            if (!Request.Content.IsMimeMultipartContent("form-data"))
            {
                throw new HttpResponseException
                 (Request.CreateResponse(HttpStatusCode.UnsupportedMediaType));
            }
            try
            {
                var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);
                var fileData = provider.FileData.FirstOrDefault();
                if (fileData != null)
                {
                    var rutaArchivo = fileData.LocalFileName;
                    using (var archivoStream = new FileStream(rutaArchivo, FileMode.Open))
                    {
                        var sDocumentoInstancia = provider.FormData["documentoInstancia"];
                        var esPlantillaDinamica = provider.FormData["esPlantillaDinamica"];
                        var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(sDocumentoInstancia, typeof(DocumentoInstanciaXbrlDto));
                        XbrlViewerService.EliminarElementosDuplicados(documentoInstanciaDto);

                        resultado.Resultado = true;
                        if (!String.IsNullOrEmpty(esPlantillaDinamica) && esPlantillaDinamica.Equals("true"))
                        {
                            PlantillaNotasBuilder notasBuilder = new PlantillaNotasBuilder(documentoInstanciaDto, true);
                            notasBuilder.ApplicationContext = ServiceLocator.ObtenerFabricaSpring();
                            resultado = notasBuilder.ImportarNotas(archivoStream, documentoInstanciaDto);
                        }
                        else
                        {
                        resultado = ImportadorExportadorArchivoPlantilla.ImportarNotasWord(archivoStream, documentoInstanciaDto);
                        }
                        resultado.InformacionExtra = documentoInstanciaDto;
                    }
                    try
                    {
                        File.Delete(rutaArchivo);
                    }
                    catch (Exception e)
                    {
                        Debug.WriteLine(e.StackTrace);
                    }
                }
                else
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "No se seleccionó ningún archivo";
                }
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
                resultado.InformacionExtra = ex.StackTrace;
                LogUtil.Error(ex);
            }
            
            var jsonResult = this.Json(resultado);
            return jsonResult;
        }

        /// <summary>
        /// Obtiene el archivo plantilla para la importacion de informacion de notas en un documento instancia
        /// </summary>
        /// <returns>Resultado de la operacion con el documento en el response</returns>
        [HttpPost]
        [Route("ObtenerPlantillaNotasDocumentoInstancia")]
        public IHttpActionResult ObtenerPlantillaNotasDocumentoInstancia()
        {

            var espacioNombresPrincipal = getFormKeyValue("espacioNombresPrincipal");
            var documentoInstanciaAtt = getFormKeyValue("documentoInstanciaXbrl");
            var idioma = getFormKeyValue("idioma");
            var paramColoresConceptos = getFormKeyValue("coloresConceptos");

            var response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });

            if (String.IsNullOrEmpty(documentoInstanciaAtt))
            {
                var resultado = ImportadorExportadorArchivoPlantilla.ObtenerPlantillaWord(espacioNombresPrincipal);
            if (resultado.Resultado)
            {
                MemoryStream stream = (MemoryStream)resultado.InformacionExtra;
                stream.Position = 0;

                response.Content = new StreamContent(stream);
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = "plantillaDocumentoInstancia.dotx";
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.wordprocessingml.template");
               
            }
            }
            else
            {
                var serializerSettings = new JsonSerializerSettings();
                serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstanciaAtt, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
                IDictionary<string, string> diccionarioColoresConceptos = null;
                if (!String.IsNullOrEmpty(paramColoresConceptos))
                {
                    diccionarioColoresConceptos = (IDictionary<string, string>)JsonConvert.DeserializeObject(paramColoresConceptos, typeof(Dictionary<string, string>));
                }
                if (String.IsNullOrEmpty(documentoInstanciaDto.Taxonomia.nombreAbax) && !String.IsNullOrEmpty(documentoInstanciaDto.EspacioNombresPrincipal))
                {
                    documentoInstanciaDto.Taxonomia.nombreAbax = 
                        DocumentoInstanciaRepository.
                        ObtenerNombreTaxonomia(documentoInstanciaDto.EspacioNombresPrincipal);
                }

                PlantillaNotasBuilder notasBuilder = new PlantillaNotasBuilder(documentoInstanciaDto, false, idioma??"es", diccionarioColoresConceptos);
                notasBuilder.ApplicationContext = ServiceLocator.ObtenerFabricaSpring();
                notasBuilder.build();
                var bytes = notasBuilder.export();
                var stream = new MemoryStream(bytes);
                response.Content = new StreamContent(stream);
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = (documentoInstanciaDto.Titulo??"") + "PlantillaNotas.docx";
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.wordprocessingml.template");
            }
            return ResponseMessage(response);
        }

        /// <summary>
        /// Obtiene el archivo plantilla para la importacion de informacion de notas en un documento instancia
        /// </summary>
        /// <returns>Resultado de la operacion con el documento en el response</returns>
        [HttpPost]
        [Route("ExportarAPlantillaNotasWordDocumentoInstancia")]
        public IHttpActionResult ExportarAPlantillaNotasWordDocumentoInstancia()
        {

            var documentoInstanciaAtt = getFormKeyValue("documentoInstanciaXbrl");
            var idioma = getFormKeyValue("idioma");
            var paramColoresConceptos = getFormKeyValue("coloresConceptos");
            var response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
            var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstanciaAtt, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
            if (String.IsNullOrEmpty(documentoInstanciaDto.Taxonomia.nombreAbax) && !String.IsNullOrEmpty(documentoInstanciaDto.EspacioNombresPrincipal))
            {
                documentoInstanciaDto.Taxonomia.nombreAbax =
                    DocumentoInstanciaRepository.
                    ObtenerNombreTaxonomia(documentoInstanciaDto.EspacioNombresPrincipal);
            }
            IDictionary<string, string> diccionarioColoresConceptos = null;
            if (!String.IsNullOrEmpty(paramColoresConceptos))
            {
                diccionarioColoresConceptos = (IDictionary<string, string>)JsonConvert.DeserializeObject(paramColoresConceptos, typeof(Dictionary<string, string>));
            }
            PlantillaNotasBuilder notasBuilder = new PlantillaNotasBuilder(documentoInstanciaDto, true, idioma??"es", diccionarioColoresConceptos);
            notasBuilder.build();
            var bytes = notasBuilder.export();
            var stream = new MemoryStream(bytes);
            response.Content = new StreamContent(stream);
            response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = (documentoInstanciaDto.Titulo??"Nuevo") + "_Export_PlantillaNotas.docx";
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.wordprocessingml.template");
            return ResponseMessage(response);
        }

        [HttpPost]
        [Route("ObtenerPlantillaImportacionExcel")]
        public IHttpActionResult ObtenerPlantillaImportacionExcel()
        {
            var espacioNombresPrincipal = getFormKeyValue("espacioNombresPrincipal");
            var dtsJson = getFormKeyValue("dtsTaxonomia");
            var idioma = getFormKeyValue("idioma");
            var conceptosDescartarAtt = getFormKeyValue("conceptosDescartar");
            var hojasDescartarAtt = getFormKeyValue("hojasDescartar");
            var dtsDoc = (List<DtsDocumentoInstanciaDto>)JsonConvert.DeserializeObject(dtsJson, typeof(List<DtsDocumentoInstanciaDto>));
            var resTax = ObtenerOAgregarTaxonomiaACache(dtsDoc);
            var conceptosDescartar = (IDictionary<string, bool>) JsonConvert.DeserializeObject(conceptosDescartarAtt, typeof(IDictionary<string, bool>));
            var hojasDescartar = (IList<string>)JsonConvert.DeserializeObject(hojasDescartarAtt, typeof(IList<string>));

            var response = new HttpResponseMessage();
            ResultadoOperacionDto resultado;
            response.StatusCode = HttpStatusCode.OK;
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });

            if (resTax.Resultado)
            {
                resultado = ImportadorExportadorArchivoPlantilla.ObtenerPlantillaExcel(espacioNombresPrincipal, idioma, resTax.InformacionExtra as TaxonomiaDto, conceptosDescartar, hojasDescartar);
                if (resultado.Resultado)
                {
                    Stream stream = (Stream)resultado.InformacionExtra;
                    stream.Position = 0;
                    response.Content = new StreamContent(stream);
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = "plantillaDocumentoInstancia.xlsx";
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                }
                else
                {
                    return Ok(resultado);
                }
            }
            else
            {
                return Ok(resTax);
            }
            return ResponseMessage(response);
        }
        [HttpPost]
        [Authorize]
        [Route("CargarTaxonomiaPorUrl")]
        public IHttpActionResult CargarTaxonomiaPorUrl()
        {
            var urlEntryPoint = getFormKeyValue("urlEntryPoint");
            var res = new ResultadoOperacionDto();

            if (CommonConstants.BuscarSufijoTaxonomia(urlEntryPoint))
            {
                var taxo = new TaxonomiaXBRL();
                var errores = new ManejadorErroresCargaTaxonomia();
                taxo.ManejadorErrores = errores;
                    taxo.ProcesarDefinicionDeEsquema(urlEntryPoint, _forzarEsquemaHttp);
                if (errores.PuedeContinuar())
                {
                    var validador = new GrupoValidadoresTaxonomia();
                    validador.Taxonomia = taxo;
                    validador.ManejadorErrores = errores;
                    validador.AgregarValidador(new ValidadorTaxonomia());
                    validador.AgregarValidador(new ValidadorTaxonomiaDinemsional());
                    validador.ValidarDocumento();
                }

                res.Resultado = errores.ErroresCarga.Count == 0;
                if (res.Resultado)
                {
                    res.InformacionExtra = XbrlViewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxo);
                }
                else
                {
                    res.InformacionExtra = errores;
                }
            }
            else
            {
                var errores = new List<ErrorCargaTaxonomiaDto>();
                var taxonomia = XPEServiceImpl.GetInstance(_forzarEsquemaHttp).CargarTaxonomiaXbrl(urlEntryPoint, errores, false);

                res.Resultado = errores.Count == 0;
                if (res.Resultado)
                {
                    res.InformacionExtra = taxonomia;
                }
                else
                {
                    res.InformacionExtra = errores;
                }
            }

            var jsonResult = this.Json(res);
            //jsonResult.MaxJsonLength = int.MaxValue;
            return jsonResult;

        }

        /// <summary>
        /// Almacena una nueva versión de un documento instancia.
        /// </summary>
        /// <returns>El objeto con el resultado de la acción de este controller.</returns>
        [HttpPost]
        [Authorize]
        [Route("GuardarDocumentoInstanciaXbrl")]
        public IHttpActionResult GuardarDocumentoInstanciaXbrl()
        {
            var documentoInstanciaDto =
                (DocumentoInstanciaXbrlDto)
                    JsonConvert.DeserializeObject(getFormKeyValue("documentoInstanciaJSON"), typeof(DocumentoInstanciaXbrlDto));
            AdjuntarTaxonomia(documentoInstanciaDto);
            XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
            XbrlViewerService.EliminarElementosDuplicados(documentoInstanciaDto);
            DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
            ResultadoOperacionDto resultado = null;
            try
            {
               resultado = DocumentoInstanciaService.GuardarDocumentoInstanciaXbrl(documentoInstanciaDto, IdUsuarioExec);
            }
            catch (Exception ex)
            {
                resultado = new ResultadoOperacionDto();
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al guardar el documento de instancia: " + ex.Message;
                resultado.Excepcion = ex.StackTrace;
                resultado.InformacionExtra = ex;
                Debug.WriteLine(ex.Message + ": " + ex.StackTrace);
            }
            finally
            {
                if (documentoInstanciaDto != null)
                {
                    documentoInstanciaDto.Cerrar();
                    documentoInstanciaDto = null;
                }
            }
            var jsonResult = this.Json(resultado);
            return jsonResult;
        }

        /// <summary>
        /// Importa la información de un documento instancia a partir de un documento excel
        /// </summary>
        /// <returns>El resultado de la operación en formato JSON</returns>
        [HttpPost]
        [Authorize]
        [Route("ImportarDocumentoInstanciaExcel")]
        public async Task<HttpResponseMessage> ImportarDocumentoInstanciaExcel()
        {
            var resultado = new ResultadoOperacionDto();
            if (!Request.Content.IsMimeMultipartContent("form-data"))
            {
                throw new HttpResponseException
                 (Request.CreateResponse(HttpStatusCode.UnsupportedMediaType));
            }
            DocumentoInstanciaXbrlDto documentoInstancia = null;
            String json = null;
            try
            {
                var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);
                var fileData = provider.FileData.FirstOrDefault();
                string rutaArchivo = null;
                if (fileData != null)
                {
                    rutaArchivo = fileData.LocalFileName;
                }
                var sDocumentoInstancia = provider.FormData["documentoInstancia"];
                var miniTax = new TaxonomiaDto();
                if (rutaArchivo != null && sDocumentoInstancia != null)
                {
                    documentoInstancia = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(sDocumentoInstancia, typeof(DocumentoInstanciaXbrlDto));
                    miniTax = documentoInstancia.Taxonomia;
                    AdjuntarTaxonomia(documentoInstancia);
                    if (String.IsNullOrEmpty(documentoInstancia.Taxonomia.nombreAbax) && !String.IsNullOrEmpty(documentoInstancia.EspacioNombresPrincipal))
                    {
                        documentoInstancia.Taxonomia.nombreAbax =
                            DocumentoInstanciaRepository.
                            ObtenerNombreTaxonomia(documentoInstancia.EspacioNombresPrincipal);
                    }
                    XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstancia);
                    XbrlViewerService.EliminarElementosDuplicados(documentoInstancia);
                    DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstancia);
                    using (var archivoStream = new FileStream(rutaArchivo, FileMode.Open, FileAccess.Read))
                    {
                        IDictionary<string, bool> conceptosDescartar = null;
                        IList<string> hojasDescartar = null;
                        var attConceptosDescartar = provider.FormData["conceptosDescartar"];
                        var attHojasDescartar = provider.FormData["hojasDescartar"];
                        if (!String.IsNullOrEmpty(attConceptosDescartar))
                        {
                            conceptosDescartar = (IDictionary<string, bool>)JsonConvert.DeserializeObject(attConceptosDescartar, typeof(IDictionary<string, bool>));
                        }
                        if (!String.IsNullOrEmpty(attHojasDescartar))
                        {
                            hojasDescartar = (IList<string>)JsonConvert.DeserializeObject(attHojasDescartar, typeof(IList<string>));
                        }

                        resultado = DocumentoInstanciaService.ImportarFormatoExcel(archivoStream, documentoInstancia, IdUsuarioExec, conceptosDescartar, hojasDescartar);
                    }
                    try
                    {
                        File.Delete(rutaArchivo);
                    }
                    catch (Exception e)
                    {
                        Debug.WriteLine(e.StackTrace);
                    }
                }
                else
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "Faltan parámetros en la invocación";
                }
                Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                ((resultado.InformacionExtra as Dictionary<string,Object>)["documentoInstancia"] as DocumentoInstanciaXbrlDto).Taxonomia = miniTax;
                json = JsonConvert.SerializeObject(resultado);
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
                resultado.InformacionExtra = ex.StackTrace;
                Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                json = JsonConvert.SerializeObject(resultado);
                LogUtil.Error(ex);
            }
            finally
            {
                if (documentoInstancia != null)
            {
                    documentoInstancia.Cerrar();
                    documentoInstancia = null;
                }
            }

            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(json, Encoding.UTF8, "application/json");

            return response;
        }



        /// <summary>
        /// Importa la información de un documento word y obtiene su representación en html
        /// </summary>
        /// <param name="form">los datos de invocación del controller</param>
        /// <returns>El resultado de la operación en formato JSON</returns>
        [HttpPost]
        [Route("ImportarDocumentoWord")]
        public async Task<IHttpActionResult>  ImportarDocumentoWord()
        {
            var resultado = new ResultadoOperacionDto();
            
            if (!Request.Content.IsMimeMultipartContent("form-data"))
            {
                throw new HttpResponseException
                 (Request.CreateResponse(HttpStatusCode.UnsupportedMediaType));
            }
            try
            {
                var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);
                var fileData = provider.FileData.FirstOrDefault();
                if (fileData != null)
                {
                    var rutaArchivo = fileData.LocalFileName;
                    using (var archivoStream = new FileStream(rutaArchivo, FileMode.Open))
                    {
                        resultado = DocumentoInstanciaService.ImportarDocumentoWord(archivoStream);
                    }
                    try
                    {
                        File.Delete(rutaArchivo);
                    }
                    catch (Exception e)
                    {
                        Debug.WriteLine(e.StackTrace);
                    }
                }
                else
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "Faltan parámetros en la invocación";
                }
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
                resultado.InformacionExtra = ex.StackTrace;
            }
            var jsonResult = this.Json(resultado);
            return jsonResult;
        }

        /// <summary>
        /// Importa la información de un documento binario y obtiene su representación en una cadena Base64
        /// </summary>
        /// <param name="form">los datos de invocación del controller</param>
        /// <returns>El resultado de la operación en formato JSON</returns>
        [HttpPost]
        [Route("ImportarArchivoBase64")]
        public async Task<IHttpActionResult> ImportarArchivoBase64()
        {
            var resultado = new ResultadoOperacionDto();

            if (!Request.Content.IsMimeMultipartContent("form-data"))
            {
                throw new HttpResponseException
                 (Request.CreateResponse(HttpStatusCode.UnsupportedMediaType));
            }
            try
            {
                var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);
                var fileData = provider.FileData.FirstOrDefault();
                if (fileData != null)
                {
                    var rutaArchivo = fileData.LocalFileName;
                    using (var archivoStream = new FileStream(rutaArchivo, FileMode.Open))
                    {
                        resultado = DocumentoInstanciaService.ImportarArchivoBase64(archivoStream);
                    }
                    try
                    {
                        File.Delete(rutaArchivo);
                    }
                    catch (Exception e)
                    {
                        Debug.WriteLine(e.StackTrace);
                    }
                }
                else
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "Faltan parámetros en la invocación";
                }
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
                resultado.InformacionExtra = ex.StackTrace;
            }
            var jsonResult = this.Json(resultado);
            return jsonResult;
        }
        /// <summary>
        /// Actualiza los usuarios asignados a un documento instancia.
        /// </summary>
        /// <param name="idDocumentoInstancia">El identificador del documento instancia</param>
        /// <param name="usuariosAsignadosJSON">La representación en formato JSON de los usuarios que deberán ser asignados</param>
        /// <returns>El resultado de la operación en formato JSON</returns>
        [HttpPost]
        [Authorize]
        [Route("ActualizarUsuariosAsignadosDocumentoInstancia")]
        public IHttpActionResult ActualizarUsuariosAsignadosDocumentoInstancia()
        {
            long idDocumentoInstancia = 0;
            Int64.TryParse(getFormKeyValue("idDocumentoInstancia"), out idDocumentoInstancia);
            var usuariosAsignadosJSON = getFormKeyValue("usuariosAsignadosJSON");

            var usuariosAsignados = (IList<UsuarioDocumentoInstancia>)JsonConvert.DeserializeObject(usuariosAsignadosJSON, typeof(List<UsuarioDocumentoInstancia>));
            var usuarioBloqueo = DocumentoInstanciaService.ObtenUsuarioBloqueoDocumentoInstancia(idDocumentoInstancia);
            if (usuarioBloqueo != null)
            {
                UsuarioDocumentoInstancia usuarioBloqueoAsignado = null;
                foreach (var usuarioItera in usuariosAsignados)
                {
                    if (usuarioItera.IdUsuario == usuarioBloqueo.IdUsuario)
                    {
                        usuarioBloqueoAsignado = usuarioItera;
                        break;
                    }
                }
                if (usuarioBloqueoAsignado == null)
                {
                    return Ok(new ResultadoOperacionDto() { Resultado = false, Mensaje = "MENSAJE_ERROR_DESASINGAR_USUARIO_BLOQUEANTE", InformacionExtra = usuarioBloqueo.Usuario.NombreCompleto() });
                }
                if (!usuarioBloqueoAsignado.PuedeEscribir)
                {
                    return Ok(new ResultadoOperacionDto() { Resultado = false, Mensaje = "MENSAJE_ERROR_QUITAR_PERMISO_ESCRITURA_USUARIO_BLOQUEANTE", InformacionExtra = usuarioBloqueo.Usuario.NombreCompleto() });
                }
            }
            

            ResultadoOperacionDto resultadoOperacion = DocumentoInstanciaService.ActualizarUsuariosDeDocumentoInstancia(idDocumentoInstancia, IdEmpresa, usuariosAsignados, IdUsuarioExec);

            if (resultadoOperacion.Resultado)
            {
                bool puedeEscribir = false;
                bool esDueno = false;
                foreach (var usuario in usuariosAsignados)
                {
                    if (usuario.IdUsuario == IdUsuarioExec)
                    {
                        puedeEscribir = usuario.PuedeEscribir;
                        esDueno = usuario.EsDueno;
                    }
                }

                var datosUsuario = new Dictionary<string, object>();

                datosUsuario.Add("PuedeEscribir", puedeEscribir);
                datosUsuario.Add("EsDueno", esDueno);
                resultadoOperacion.InformacionExtra = datosUsuario;
            }

            return this.Json(resultadoOperacion);
        }

        /// <summary>
        /// Obtiene los usuarios de la misma empresa del usuario en sesión con los cuales puede compartirse un documento.
        /// </summary>
        /// <param name="idDocumentoInstancia">el identificador del documento instancia a compartir</param>
        /// <returns>Una lista con los usuarios con los cuales puede compartir un documento en formato JSON.</returns>
        [HttpPost]
        [Authorize]
        [Route("BuscarUsuariosParaCompartir")]
        public IHttpActionResult BuscarUsuariosParaCompartir()
        {
            long idDocumentoInstancia = 0;
            Int64.TryParse(getFormKeyValue("idDocumentoInstancia"), out idDocumentoInstancia);

            var resultado = UsuarioService.ObtenerUsuariosPorEmisorayNombre(IdEmpresa, null);
            var resultadoAsignados = DocumentoInstanciaService.ObtenerUsuariosDeDocumentoInstancia(idDocumentoInstancia, IdEmpresa, IdUsuarioExec);

            var resultados = new Dictionary<string, List<IDictionary<string, object>>>();
            var listaPorAsignar = new List<IDictionary<string, object>>();
            var listaAsignados = new List<IDictionary<string, object>>();
            if (!resultadoAsignados.Resultado)
            {
                return Ok(resultadoAsignados);
            }

            var usuariosAsignados = (IList<UsuarioDocumentoInstancia>)resultadoAsignados.InformacionExtra;
            foreach (var usuario in ((DbQuery<Usuario>)resultado.InformacionExtra).ToList())
            {
                UsuarioDocumentoInstancia datosUsuarioAsignado = null;
                foreach (var usuarioAsignado in usuariosAsignados)
                {
                    if (usuarioAsignado.IdUsuario.Equals(usuario.IdUsuario))
                    {
                        datosUsuarioAsignado = usuarioAsignado;
                        break;
                    }
                }

                var datosUsuario = new Dictionary<string, object>();
                datosUsuario.Add("IdDocumentoInstancia", idDocumentoInstancia);

                if (datosUsuarioAsignado != null)
                {
                    datosUsuario.Add("NombreCompleto", datosUsuarioAsignado.Usuario.NombreCompleto());
                    datosUsuario.Add("IdUsuario", datosUsuarioAsignado.Usuario.IdUsuario);
                    datosUsuario.Add("EsDueno", datosUsuarioAsignado.EsDueno);
                    datosUsuario.Add("PuedeEscribir", datosUsuarioAsignado.PuedeEscribir);

                    datosUsuario.Add("PuedeLeer", datosUsuarioAsignado.PuedeLeer);
                    listaAsignados.Add(datosUsuario);
                }
                else
                {
                    datosUsuario.Add("NombreCompleto", usuario.NombreCompleto());
                    datosUsuario.Add("IdUsuario", usuario.IdUsuario);
                    listaPorAsignar.Add(datosUsuario);
                }
            }

            resultados.Add("UsuariosPorAsignar", listaPorAsignar);
            resultados.Add("UsuariosAsignados", listaAsignados);

            resultado.InformacionExtra = resultados;
            resultado.Resultado = true;
            return this.Json(resultado);
        }

        /// <summary>
        /// Obtiene todas las versiones de un documento instancia por medio de su identificador del documento.
        /// </summary>
        /// <returns>El listado de versiones del documento instancia en formato JSON.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerVersionesDocumentoInstancia")]
        public IHttpActionResult ObtenerVersionesDocumentoInstancia()
        {

            var listaResultados = new List<IDictionary<string, object>>();
            var documentoInstancia = getFormKeyValue("idDocumentoInstancia");
            ResultadoOperacionDto resultado = DocumentoInstanciaService.ObtenerVersionesDocumentoInstancia(Int64.Parse(documentoInstancia));

            foreach (var version in (IList<VersionDocumentoInstancia>)resultado.InformacionExtra)
            {

                var datosVersion = new Dictionary<string, object>();

                datosVersion.Add("IdDocumentoInstancia", version.IdDocumentoInstancia);
                datosVersion.Add("IdVersionDocumentoInstancia", version.IdVersionDocumentoInstancia);
                datosVersion.Add("Fecha", version.Fecha.ToString("dd/MM/yyyy HH:mm"));
                datosVersion.Add("NombreUsuario", version.Usuario.Nombre + " " + version.Usuario.ApellidoPaterno);
                datosVersion.Add("Version", version.Version);
                datosVersion.Add("Comentarios", version.Comentarios);
                datosVersion.Add("EsCorrecto", version.EsCorrecto);

                listaResultados.Add(datosVersion);
            }

            resultado.InformacionExtra = listaResultados;

            return this.Json(resultado);
        }

        /// <summary>
        /// Bloquea o libera un documento instancia por medio del identificador del documento.
        /// </summary>
        /// <param name="idDocumentoInstancia">El identificador del documento instancia</param>
        /// <param name="bloquear">Indica si debe bloquearse o liberarse el documento instancia</param>
        /// <returns>Un DTO con el resultado de la operación</returns>
        [HttpPost]
        [Authorize]
        [Route("BloquearLiberarDocumentoInstancia")]
        public IHttpActionResult BloquearLiberarDocumentoInstancia()
        {
            long idDocumentoInstancia = 0;
            bool bloquear = true;
            var stringIdDoc = getFormKeyValue("idDocumentoInstancia");
            var stringBloquear = getFormKeyValue("bloquear");
            Int64.TryParse(stringIdDoc, out idDocumentoInstancia);
            Boolean.TryParse(stringBloquear, out bloquear);
            return this.Json(DocumentoInstanciaService.BloquearLiberarDocumentoInstancia(idDocumentoInstancia, bloquear, IdUsuarioExec));
        }

        /// <summary>
        /// Prepara la información necesaria para presentar un editor de documento instancia XBRL
        /// </summary>
        /// <param name="idDocumentoInstancia">El identificador del documento instancia</param>
        /// <param name="numeroVersion">El identificador de la versión del documento instancia a cargar</param>
        /// <param name="emisora">La clave de la emisora a la que pertenece el reporte</param>
        /// <param name="numeroTrimestre">El número de trimestr que se desea reportar</param>
        /// <param name="anioReporte">El año en que se desea crear el reporte</param>
        /// <param name="moneda">La moneda de reporte</param>
        /// <returns>El objeto con el resultado de la acción de este controller.</returns>
        [HttpPost]
        [Authorize]
        [Route("CargarDocumentoInstanciaXbrl")]
        public IHttpActionResult CargarDocumentoInstanciaXbrl()
        {
            try
            {
                long? idDocumentoInstancia = null;
                int? numeroVersion = null;
                var stringIdDocumento = getFormKeyValue("idDocumentoInstancia");
                var stringNumeroVersion = getFormKeyValue("numeroVersion");
                String json = null;
                if (!String.IsNullOrEmpty(stringIdDocumento))
                {
                    long idDocTmp = 0;
                    if (Int64.TryParse(stringIdDocumento, out idDocTmp))
                    {
                        idDocumentoInstancia = idDocTmp;
                    }
                    int versionTmp = 0;
                    if (Int32.TryParse(stringNumeroVersion, out versionTmp))
                    {
                        numeroVersion = versionTmp;
                    }
                }

                var viewerService = new XbrlViewerService();
                var xpeServ = XPEServiceImpl.GetInstance(_forzarEsquemaHttp);
                var resultadoOperacion = new ResultadoOperacionDto();

                if (idDocumentoInstancia != null)
                {
                    if (numeroVersion != null)
                    {
                        resultadoOperacion = DocumentoInstanciaService.ObtenerVersionModeloDocumentoInstanciaXbrl(idDocumentoInstancia.Value, numeroVersion.Value, IdUsuarioExec);
                    }
                    else
                    {
                        resultadoOperacion = DocumentoInstanciaService.ObtenerModeloDocumentoInstanciaXbrl(idDocumentoInstancia.Value, IdUsuarioExec);
                    }

                    var instanciaDto = (resultadoOperacion.InformacionExtra as DocumentoInstanciaXbrlDto);

                    if (instanciaDto != null)
                    {
                        var taxonomiaDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(instanciaDto.DtsDocumentoInstancia);
                        if (taxonomiaDto == null)
                        {
                            var erroresTax = new List<ErrorCargaTaxonomiaDto>();
                            foreach (var dts in instanciaDto.DtsDocumentoInstancia)
                            {
                                if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                                {
                                    taxonomiaDto = xpeServ.CargarTaxonomiaXbrl(dts.HRef, erroresTax, false);
                                    break;
                                }
                            }

                            if (!erroresTax.Any(x => x.Severidad == ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL))
                            {
                                _cacheTaxonomiaXbrl.AgregarTaxonomia(instanciaDto.DtsDocumentoInstancia, taxonomiaDto);
                            }
                            else
                            {
                                resultadoOperacion.Resultado = false;
                                resultadoOperacion.Mensaje = "MENSAJE_ERROR_PROCESAR_TAXONOMIAS";
                                resultadoOperacion.InformacionExtra = erroresTax;

                            }
                        }

                        if (taxonomiaDto != null)
                        {
                            instanciaDto.EspacioNombresPrincipal = taxonomiaDto.EspacioNombresPrincipal;
                            instanciaDto.Taxonomia = taxonomiaDto;
                        }

                        //ValidaReasignaErroesTaxonomia(manejadorErrores, instanciaDto);

                    }


                    if (instanciaDto != null)
                    {
                        viewerService.AjustarValoresDeHechosInvalidos(instanciaDto);
                    }



                }
                else
                {
                    resultadoOperacion.Resultado = false;
                    resultadoOperacion.Mensaje = "El identificador del documento de instancia es requerido";
                }
                var jsonResult = this.Json(resultadoOperacion);
                return jsonResult;
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                throw e;
            }
        }

        /// <summary>
        /// Importa el valor de los hechos de un documentos de instancia
        /// </summary>
        /// <returns>Resultado de la solicitud</returns>
        [HttpPost]
        [Authorize]
        [Route("ImportarHechosDocumentoInstancia")]
        public IHttpActionResult ImportarHechosDocumentoInstancia()
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;

            var sDocumento = getFormKeyValue("documentoInstancia");
            var idDocumentoImportar = getFormKeyValue("idDocumentoImportar");
            var stringCoincidirMoneda = getFormKeyValue("coincidirMoneda");
            var stringSobreescribirValores = getFormKeyValue("sobreescribirValores");

            var coincidirMoneda = !String.IsNullOrEmpty(stringCoincidirMoneda) && Boolean.TrueString.Equals(stringCoincidirMoneda, StringComparison.InvariantCultureIgnoreCase);
            var sobreescribirValores = !String.IsNullOrEmpty(stringSobreescribirValores) && Boolean.TrueString.Equals(stringSobreescribirValores, StringComparison.InvariantCultureIgnoreCase);

            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
            if (sDocumento != null)
            {
                long intIdDocumentoImportar = 0;
                if (idDocumentoImportar != null && Int64.TryParse(idDocumentoImportar, out intIdDocumentoImportar))
                {
                    var resultadoOperacionImportar = DocumentoInstanciaService.ObtenerModeloDocumentoInstanciaXbrl(intIdDocumentoImportar, IdUsuarioExec);
                    var instanciaDtoImportar = resultadoOperacionImportar.InformacionExtra as DocumentoInstanciaXbrlDto;
                    if (resultadoOperacionImportar.Resultado)
                    {
                        var resultadoTaxonomia = ObtenerOAgregarTaxonomiaACache(instanciaDtoImportar.DtsDocumentoInstancia);
                        if (resultadoTaxonomia.Resultado)
                        {
                            instanciaDtoImportar.Taxonomia = resultadoTaxonomia.InformacionExtra as TaxonomiaDto;
                            var documentoInstancia = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(sDocumento, typeof(DocumentoInstanciaXbrlDto));

                            var resultadoImportar = DocumentoInstanciaService.ImportarHechosADocumentoInstancia(documentoInstancia, intIdDocumentoImportar, coincidirMoneda, sobreescribirValores, IdUsuarioExec);
                            if (resultadoImportar.Resultado)
                            {
                                resultado.Resultado = true;
                                var datosExtras = new Dictionary<string, Object>();
                                datosExtras["hechosImportados"] = (resultadoImportar.InformacionExtra as IDictionary<string, string>)["hechosImportados"];
                                datosExtras["documentoInstancia"] = documentoInstancia;
                                resultado.InformacionExtra = datosExtras;
                            }
                            else
                            {
                                resultado.Mensaje = resultadoTaxonomia.Mensaje;
                            }
                        }
                        else
                        {
                            resultado.Mensaje = resultadoTaxonomia.Mensaje;
                        }
                    }
                    else
                    {
                        resultado.Mensaje = resultadoOperacionImportar.Mensaje;
                    }

                }
                else
                {
                    resultado.Mensaje = "No se recibió ningún identificador de instancia a importar";
                }
            }
            else
            {
                resultado.Mensaje = "No se recibió ningún documento instancia de origen";
            }

            var jsonResult = this.Json(resultado);
            return jsonResult;
        }

        /// <summary>
        /// Carga los datos de un documento de instancia e importa los hechos al documento que se está trabajando actualmente en pantalla
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("AgregarDocumentoInstanciaAComparar")]
        public IHttpActionResult AgregarDocumentoInstanciaAComparar()
        {
            try
            {
                ResultadoOperacionDto resultado = new ResultadoOperacionDto();
                resultado.Resultado = false;

                var paramEsVersion = getFormKeyValue("paramEsVersion");
                var sDocumento = getFormKeyValue("documentoInstancia");
                var idDocumentoComparar = getFormKeyValue("idDocumentoComparar");
                long intIdDocumentoComparar = 0;
                var esVersionDocumentoOriginal = false;
                Boolean.TryParse(paramEsVersion, out esVersionDocumentoOriginal);
                LogUtil.Info("{esVersionDocumentoOriginal:[" + esVersionDocumentoOriginal + "]}");
                var serializerSettings = new JsonSerializerSettings();
                serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                if (sDocumento != null)
                {
                    if (idDocumentoComparar != null && Int64.TryParse(idDocumentoComparar, out intIdDocumentoComparar))
                    {
                        var resultadoOperacionComparar = DocumentoInstanciaService.ObtenerModeloDocumentoInstanciaXbrl(intIdDocumentoComparar, IdUsuarioExec);
                        var instanciaDtoComparar = resultadoOperacionComparar.InformacionExtra as DocumentoInstanciaXbrlDto;
                        var salt = "_Ant";
                        if (esVersionDocumentoOriginal)
                        {
                            var entidadesSalt = new Dictionary<string, EntidadDto>();
                            foreach (var entidad in instanciaDtoComparar.EntidadesPorId.Values)
                            {
                                entidad.Id += salt;
                                entidadesSalt[entidad.IdEntidad] = entidad;
                            }
                            instanciaDtoComparar.EntidadesPorId = entidadesSalt;
                            var contextosSalt = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                            foreach (var contexto in instanciaDtoComparar.ContextosPorId.Values)
                            {
                                contexto.Id += salt;
                                if (entidadesSalt.ContainsKey(contexto.Entidad.Id))
                                {
                                    contexto.Entidad = entidadesSalt[contexto.Entidad.Id];
                                }
                                else
                                {
                                    contexto.Entidad.Id += salt;
                                }
                                contextosSalt[contexto.Id] = contexto;
                            }
                            foreach (var keyContexto in contextosSalt.Keys)
                            {
                                instanciaDtoComparar.ContextosPorId[keyContexto] = contextosSalt[keyContexto];
                            }
                            var hechosSatl = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>();
                            foreach (var hecho in instanciaDtoComparar.HechosPorId.Values)
                            {
                                hecho.Id += salt;
                                hecho.IdContexto += salt;
                                hechosSatl[hecho.Id] = hecho;
                            }
                            instanciaDtoComparar.HechosPorId = hechosSatl;
                        }

                        if (resultadoOperacionComparar.Resultado)
                        {
                            var resultadoTaxonomia = ObtenerOAgregarTaxonomiaACache(instanciaDtoComparar.DtsDocumentoInstancia);
                            if (resultadoTaxonomia.Resultado)
                            {
                                instanciaDtoComparar.Taxonomia = resultadoTaxonomia.InformacionExtra as TaxonomiaDto;
                                var documentoInstancia = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(sDocumento, typeof(DocumentoInstanciaXbrlDto));
                                unificarDocumentosInstancia(documentoInstancia, instanciaDtoComparar, _cacheTaxonomiaXbrl, _estrategiaCacheTaxonomia);
                                DocumentoInstanciaService.DeterminaDiferenciasHechosEquivalentes(documentoInstancia, salt);
                                var resultadoEstructura = DocumentoInstanciaService.CrearEstructuraDocumento(documentoInstancia);
                                if (resultadoEstructura.Resultado)
                                {   
                                    documentoInstancia.estructurasDocumentoInstanciaPorRol = 
                                        (Dictionary<string, IList<AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico.ElementoDocumentoDto>>)resultadoEstructura.InformacionExtra;
                                }
                                resultado.Resultado = true;
                                resultado.InformacionExtra = documentoInstancia;
                            }
                            else
                            {
                                resultado.Mensaje = resultadoTaxonomia.Mensaje;
                            }
                        }
                        else
                        {
                            resultado.Mensaje = resultadoOperacionComparar.Mensaje;
                        }

                    }
                    else
                    {
                        resultado.Mensaje = "No se recibió ningún identificador de instancia a comparar";
                    }
                }
                else
                {
                    resultado.Mensaje = "No se recibió ningún documento instancia de origen";
                }
                var jsonResult = this.Json(resultado);
                return jsonResult;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }

        private ResultadoOperacionDto ObtenerOAgregarTaxonomiaACache(IList<DtsDocumentoInstanciaDto> dtsDoc)
        {
            var taxonomiaDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(dtsDoc);
            var manejadorErrores = new ManejadorErroresCargaTaxonomia();
            var viewerService = new XbrlViewerService();
            var resultadoOperacion = new ResultadoOperacionDto();
            if (taxonomiaDto == null)
            {
                var taxo = new TaxonomiaXBRL { ManejadorErrores = manejadorErrores };
                foreach (var dts in dtsDoc)
                {
                    if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                    {
                        taxo.ProcesarDefinicionDeEsquema(dts.HRef);
                    }
                }
                taxo.CrearArbolDeRelaciones();
                taxonomiaDto = viewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxo);
                if (manejadorErrores.PuedeContinuar())
                {
                    _cacheTaxonomiaXbrl.AgregarTaxonomia(dtsDoc, taxonomiaDto);
                    _estrategiaCacheTaxonomia.AgregarTaxonomia(DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(dtsDoc), taxo);
                }
                else
                {
                    resultadoOperacion.Resultado = false;
                    resultadoOperacion.Mensaje = "MENSAJE_ERROR_PROCESAR_TAXONOMIAS";
                    resultadoOperacion.InformacionExtra = manejadorErrores.GetErroresTaxonomia();

                }
            }
            else
            {
                resultadoOperacion.Resultado = true;
                resultadoOperacion.InformacionExtra = taxonomiaDto;
            }

            return resultadoOperacion;
        }

        private void unificarDocumentosInstancia(DocumentoInstanciaXbrlDto instanciaDto, DocumentoInstanciaXbrlDto instanciaDtoComparar, 
            ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia)
        {
            var viewerService = new XbrlViewerService();
            var taxoXbrlOrigen = _estrategiaCacheTaxonomia.ResolverTaxonomiaXbrl(DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(instanciaDto.DtsDocumentoInstancia));

            var taxoXbrlComparar = _estrategiaCacheTaxonomia.ResolverTaxonomiaXbrl(DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(instanciaDtoComparar.DtsDocumentoInstancia));


            var taxoDtoOrigen = viewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxoXbrlOrigen);
            if (taxoXbrlComparar != null && taxoDtoOrigen != null)
            {
                viewerService.IncorporarTaxonomia(taxoDtoOrigen, taxoXbrlComparar);
                instanciaDto.Taxonomia = taxoDtoOrigen;
            }
            foreach(var hechoIncorporar in instanciaDtoComparar.HechosPorId.Values)
            {
                instanciaDto.ImportarHecho(hechoIncorporar, instanciaDtoComparar);
            }
            DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(instanciaDto);
        }

        /// <summary>
        /// Valida si existen errores en la taxonomía y de ser asi los asigna al listado de errores del documento de instnacia.
        /// </summary>
        /// <param name="manejadorErrores">Manejdador de errores de la taxonomía.</param>
        /// <param name="instanciaDto">Documento de instancia al que serán asignados los errores.</param>
        private void ValidaReasignaErroesTaxonomia(ManejadorErroresCargaTaxonomia manejadorErrores, DocumentoInstanciaXbrlDto instanciaDto)
        {
            if (manejadorErrores.ErroresCarga.Count > 0)
            {
                var errores = CopiadoUtil.Copia(manejadorErrores.ErroresCarga);
                foreach (var error in errores)
                {
                    if (error.Severidad == ErrorCargaTaxonomiaDto.SEVERIDAD_ERROR)
                    {
                        instanciaDto.Errores.Add(error);
                    }
                }
            }
        }






        /// <summary>
        /// Crea un nuevo documento instancia vacio a partir de su taxonomia.
        /// </summary>
        /// <returns>El objeto con el resultado de la acción de este controller.</returns>
        [HttpPost]
        //[Authorize]
        [Route("CrearDocumentoInstanciaXbrl")]
        public IHttpActionResult CrearDocumentoInstanciaXbrlAPartirTaxonomia()
        {
            var archivosTaxonomiaXbrl = getFormKeyValue("ArchivoTaxonomiaXbrl");
            var Titulo = getFormKeyValue("Titulo");
            var Comentarios = getFormKeyValue("Comentarios");

            var resultado = new ResultadoOperacionDto();

            ICollection<ArchivoTaxonomiaXbrl> archivosTaxonomia = (ICollection<ArchivoTaxonomiaXbrl>)JsonConvert.DeserializeObject(archivosTaxonomiaXbrl, typeof(ICollection<ArchivoTaxonomiaXbrl>));

            var listaDts = DocumentoInstanciaXbrlDtoConverter.ConvertirDTSDocumentoInstancia(archivosTaxonomia);
            var taxonomiaDto = CargarTaxonomiaCachePorArchivos(listaDts); 

            DocumentoInstanciaXbrlDto documentoInstanciaDto = new DocumentoInstanciaXbrlDto();
            documentoInstanciaDto.ParametrosConfiguracion = new Dictionary<string, string>();

            documentoInstanciaDto.DtsDocumentoInstancia = listaDts;
            documentoInstanciaDto.Titulo = Titulo;
            documentoInstanciaDto.Comentarios = Comentarios;

            //resultado = DocumentoInstanciaService.GuardarDocumentoInstanciaXbrl(documentoInstanciaDto, IdUsuarioExec);
            resultado = DocumentoInstanciaService.GuardarDocumentoInstanciaXbrl(documentoInstanciaDto, 3);

            var jsonResult = this.Json(resultado);
            return jsonResult;
        }

        /// <summary>
        /// Crea un nuevo hecho en el documento instancia.
        /// </summary>
        /// <returns>El objeto con el resultado de la acción de este controller.</returns>
        [HttpPost]
        //[Authorize]
        [Route("CrearHechoDocumentoInstanciaXbrl")]
        public IHttpActionResult CrearHechoDocumentoInstanciaXbrl()
        {

            var idDocumentoInstancia = getFormKeyValue("idDocumentoInstancia");
            var TituloVersion = getFormKeyValue("Titulo");
            var ComentariosVersion = getFormKeyValue("Comentarios");
            var Unidades = getFormKeyValue("Unidades");
            var Contextos = getFormKeyValue("Contextos");
            var Hechos = getFormKeyValue("Hechos");

            ICollection<AbaxXBRLCore.Viewer.Application.Dto.HechoDto> hechosDocumentoInstancia = null;
            ICollection<AbaxXBRLCore.Viewer.Application.Dto.UnidadDto> unidadesDocumentoInstancia = null;
            ICollection<AbaxXBRLCore.Viewer.Application.Dto.ContextoDto> contextosDocumentoInstancia = null;

            var viewerService = new XbrlViewerService();

            if (Hechos != null)
                hechosDocumentoInstancia = (ICollection<AbaxXBRLCore.Viewer.Application.Dto.HechoDto>)JsonConvert.DeserializeObject(Hechos, typeof(ICollection<AbaxXBRLCore.Viewer.Application.Dto.HechoDto>));
            if (Unidades != null)
                unidadesDocumentoInstancia = (ICollection<AbaxXBRLCore.Viewer.Application.Dto.UnidadDto>)JsonConvert.DeserializeObject(Unidades, typeof(ICollection<AbaxXBRLCore.Viewer.Application.Dto.UnidadDto>));
            if (Contextos != null)
                contextosDocumentoInstancia = (ICollection<AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>)JsonConvert.DeserializeObject(Contextos, typeof(ICollection<AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>));


            var resultado = new ResultadoOperacionDto();

            var documentoInstanciaDto = DocumentoInstanciaService.ObtenerModeloDocumentoInstanciaXbrl(long.Parse(idDocumentoInstancia), 3);

            if (documentoInstanciaDto != null && documentoInstanciaDto.InformacionExtra != null)
            {

                var documentoInstanciaXbrl = (DocumentoInstanciaXbrlDto)documentoInstanciaDto.InformacionExtra;

                var taxonomiaDto = CargarTaxonomiaCachePorArchivos(documentoInstanciaXbrl.DtsDocumentoInstancia); 

                if (unidadesDocumentoInstancia != null)
                    foreach (var unidad in unidadesDocumentoInstancia)
                    {
                        documentoInstanciaXbrl.UnidadesPorId[unidad.Id] = unidad;
                    }

                if (contextosDocumentoInstancia != null)
                    foreach (var contexto in contextosDocumentoInstancia)
                    {
                        documentoInstanciaXbrl.ContextosPorId[contexto.Id] = contexto;
                    }
                if (hechosDocumentoInstancia != null)
                    foreach (var hecho in hechosDocumentoInstancia)
                    {
                        hecho.Id = Guid.NewGuid().ToString();
                        documentoInstanciaXbrl.HechosPorId[hecho.Id] = hecho;
                    }

                resultado = DocumentoInstanciaService.GuardarDocumentoInstanciaXbrl(documentoInstanciaXbrl, 3);
            }

            var jsonResult = this.Json(resultado);

            return jsonResult;
        }


        /// <summary>
        /// Realiza las validaciones de un documento instancia e indica si es correcto o manda
        /// la lista de errores
        /// </summary>
        /// <returns>En el caso de tener errore, regresa un listado de errores del documento 
        /// instancia de lo contrario regresa un resultado de operacion correcto</returns>
       [HttpPost]
        //[Authorize]
       [Route("ValidarDocumentoInstancia")]
        public IHttpActionResult ValidarDocumentoInstancia()
        {
            var idDocumentoInstancia = getFormKeyValue("idDocumentoInstancia");

            var viewerService = new XbrlViewerService();
            var resultado = new ResultadoOperacionDto();

            var documentoInstanciaDto = DocumentoInstanciaService.ObtenerModeloDocumentoInstanciaXbrl(long.Parse(idDocumentoInstancia), 3);

            if (documentoInstanciaDto != null && documentoInstanciaDto.InformacionExtra != null)
            {

                var documentoInstanciaXbrlDto = (DocumentoInstanciaXbrlDto)documentoInstanciaDto.InformacionExtra;

                var taxonomiaDto = CargarTaxonomiaCachePorArchivos(documentoInstanciaXbrlDto.DtsDocumentoInstancia); 

                var archivoImportadoDocumentoList = DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(documentoInstanciaXbrlDto.DtsDocumentoInstancia);
                var taxonomiaXbrl = _estrategiaCacheTaxonomia.ResolverTaxonomiaXbrl(archivoImportadoDocumentoList);

                var documentoInstanciaXbrl = XbrlViewerService.CrearDocumentoInstanciaXbrl(taxonomiaXbrl, documentoInstanciaXbrlDto);

                var errores = new ManejadorErroresCargaTaxonomia();

                documentoInstanciaXbrl.ManejadorErrores = errores;


                var grupoValidadores = new GrupoValidadoresTaxonomia();
                grupoValidadores.ManejadorErrores = errores;
                grupoValidadores.DocumentoInstancia = documentoInstanciaXbrl;
                grupoValidadores.AgregarValidador(new ValidadorDocumentoInstancia());
                grupoValidadores.AgregarValidador(new ValidadorDimensionesDocumentoInstancia());
                grupoValidadores.ValidarDocumento();
                resultado.Resultado = errores.PuedeContinuar();
                resultado.InformacionExtra = errores;
            }

            var jsonResult = this.Json(resultado);

            return jsonResult;
        }


       /// <summary>
       /// Genera el XML en un json de un documento XBRL en base a los datos de un documento de instancia de la base de datos
       /// </summary>
       /// <returns></returns>
       [HttpPost]
       //[Authorize]
       [Route("GenerarDocumentoXBRLServicio")]
       public IHttpActionResult GenerarDocumentoXBRLServicio()
       {

           var idDocumentoInstancia = getFormKeyValue("idDocumentoInstancia");

           var viewerService = new XbrlViewerService();
           var resultado = new ResultadoOperacionDto();

           var documentoInstanciaDto = DocumentoInstanciaService.ObtenerModeloDocumentoInstanciaXbrl(long.Parse(idDocumentoInstancia), 3);

           if (documentoInstanciaDto != null && documentoInstanciaDto.InformacionExtra != null)
           {

               var documentoInstanciaXbrl = (DocumentoInstanciaXbrlDto)documentoInstanciaDto.InformacionExtra;
               var taxonomiaDto = CargarTaxonomiaCachePorArchivos(documentoInstanciaXbrl.DtsDocumentoInstancia);

               XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaXbrl);
               XbrlViewerService.EliminarElementosDuplicados(documentoInstanciaXbrl);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaXbrl);
                var archivoImportadoDocumentoList = DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(documentoInstanciaXbrl.DtsDocumentoInstancia);
               var taxonomiaXbrl = _estrategiaCacheTaxonomia.ResolverTaxonomiaXbrl(archivoImportadoDocumentoList);

               var documentoInstancia = XbrlViewerService.CrearDocumentoInstanciaXbrl(taxonomiaXbrl, documentoInstanciaXbrl);

               var xbrl = documentoInstancia.GenerarDocumentoXbrl();

               resultado.Resultado = true;
               resultado.InformacionExtra = xbrl;

           }

           var jsonResult = this.Json(resultado);

           return jsonResult;

       }

        /// <summary>
        /// Carga una taxonomia especificada en base a el listado de archivos necesarios de la taxonomia
        /// </summary>
        /// <param name="dtdsDocumentoInstanciaDto">Listado de url de archivos dtds</param>
        /// <returns>Información de la taxonomia cargada en cache</returns>
       private TaxonomiaDto CargarTaxonomiaCachePorArchivos(IList<DtsDocumentoInstanciaDto> dtdsDocumentoInstanciaDto)
       {
           var taxonomiaDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(dtdsDocumentoInstanciaDto);
           var viewerService = new XbrlViewerService();

           if (taxonomiaDto == null)
           {
               var menejadorErrores = new ManejadorErroresCargaTaxonomia();
               var taxo = new TaxonomiaXBRL { ManejadorErrores = menejadorErrores };
               foreach (var dts in dtdsDocumentoInstanciaDto)
               {
                   if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                   {
                        taxo.ProcesarDefinicionDeEsquema(dts.HRef, _forzarEsquemaHttp);
                   }
               }
               taxo.CrearArbolDeRelaciones();
               taxonomiaDto = viewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxo);
               if (menejadorErrores.PuedeContinuar())
               {
                   _cacheTaxonomiaXbrl.AgregarTaxonomia(dtdsDocumentoInstanciaDto, taxonomiaDto);
                   _estrategiaCacheTaxonomia.AgregarTaxonomia(DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(dtdsDocumentoInstanciaDto), taxo);
               } 
               
           }
           return taxonomiaDto;
       }


      
       [HttpPost]
       [Route("GenerarArchivoFondosInversion")]
       public IHttpActionResult GenerarArchivoFondosInversion()
       {

           var documentoInstancia = getFormKeyValue("documentoInstancia");
           var serializerSettings = new JsonSerializerSettings();
           serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

           var response = new HttpResponseMessage();
           var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
           response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });
           try
           {
               var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
               XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                if (documentoInstanciaDto != null)
               {
                    StringBuilder archivoSalida = new StringBuilder();

                    int renglonActual = 0;
                    foreach (var idTupla in documentoInstanciaDto.HechosPorIdConcepto["inver_bmv_cor_RegistroCartera"])
                    {
                        var tupla = documentoInstanciaDto.HechosPorId[idTupla];
                        if (tupla.Hechos != null)
                        {

                            var hechosEnTupla = ObtenerHechosEnTupla(tupla.Hechos, documentoInstanciaDto);
                            archivoSalida.AppendLine(CrearRenglonLayout(hechosEnTupla, renglonActual, documentoInstanciaDto));
                            

                            renglonActual++;
                        }
                    }


                    response.StatusCode = HttpStatusCode.OK;
                    response.Content = new StringContent(archivoSalida.ToString());
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = (string.IsNullOrEmpty(documentoInstanciaDto.Titulo) ? "layout" : documentoInstanciaDto.Titulo) + ".txt";
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");

                  
               }
           }
           catch (Exception ex)
           {
               response.StatusCode = HttpStatusCode.NotFound;
               var dtoResultado = new ResultadoOperacionDto();
               dtoResultado.Resultado = false;
               dtoResultado.Mensaje = ex.Message;
               dtoResultado.InformacionExtra = ex.StackTrace;
               response.Content = new StringContent(JsonConvert.SerializeObject(dtoResultado));
           }
           return ResponseMessage(response);
       }

       private string CrearRenglonLayout(IDictionary<string, string> hechosEnTupla, int renglonActual, DocumentoInstanciaXbrlDto documentoInstanciaDto)
       {
           hechosEnTupla["id"] = renglonActual.ToString();
           hechosEnTupla["claveSociedad"] = documentoInstanciaDto.ContextosPorId.First().Value.Entidad.Id;
           hechosEnTupla["fecha"] = DateUtil.ToFormatString(documentoInstanciaDto.ContextosPorId.First().Value.Periodo.FechaInstante,"ddMMYYYY");
           var layout = new Dictionary<string, int>();
           
           layout["id"] = 2;
           layout["claveSociedad"] = 7;
           layout["infoFin"] = 1;
           layout["fecha"] = 8;
           layout["blancos1"] = 5;
           layout["inver_bmv_cor_NumeroConsecutivo"] = 3;
           layout["inver_bmv_cor_TipoInversion"] = 1;
           layout["inver_bmv_cor_Emisora"] = 7;
           layout["inver_bmv_cor_Serie"] = 7;
           layout["inver_bmv_cor_TipoValor"] = 4;
           layout["inver_bmv_cor_TasaAlValuar"] = 6;
           layout["inver_bmv_cor_TipoTasa"] = 2;
           layout["inver_bmv_cor_Bursatilidad"] = 10;
           layout["inver_bmv_cor_NumeroTitulosOperados"] = 12;
           layout["inver_bmv_cor_TotalTitulosEmision"] = 18;
           layout["inver_bmv_cor_CostoPromedioUnitario"] = 13;
           layout["inver_bmv_cor_CostoTotalAdquisicion"] = 18;
           layout["inver_bmv_cor_ValorRazonableContableUnitario"] = 13;
           layout["inver_bmv_cor_ValorRazonableContableTotal"] = 18;
           layout["inver_bmv_cor_DiasPorVencer"] = 5;
           layout["blancos2"] = 9;
           layout["blancos3"] = 7;
           layout["inver_bmv_cor_Agrupacion"] = 3;
           layout["inver_bmv_cor_Cupon"] = 4;
           layout["inver_bmv_cor_CodigoIdentificacion"] = 16;
           layout["inver_bmv_cor_PaisAdquisicionValores"] = 2;
           layout["inver_bmv_cor_Var"] = 18;
           layout["inver_bmv_cor_TipoContraparte"] = 16;
           layout["inver_bmv_cor_TipoContrato"] = 10;
           layout["inver_bmv_cor_NumeroTitulosLiquidados"] = 12;
           layout["filler"] = 43;

           StringBuilder linea = new StringBuilder();

           foreach(var campo in layout)
           {
                linea.Append(CrearCampo(campo.Key,campo.Value,hechosEnTupla));
           }

           return linea.ToString();
           
       }

       private string CrearCampo(string nombre, int longitud, IDictionary<string, string> valores)
       {
           string valorInicial = "";
           if (valores.ContainsKey(nombre))
           {
               valorInicial = valores[nombre];
           }
           valorInicial += "                                                                       ";
           if (valorInicial.Length > longitud)
           {
               valorInicial = valorInicial.Substring(0, longitud);
           }
           return valorInicial;
       }


       private IDictionary<string,string> ObtenerHechosEnTupla(IList<String> list, DocumentoInstanciaXbrlDto documentoInstancia)
       {
           var resultado = new Dictionary<string,string>();
           foreach(var hechoId in list){

                AbaxXBRLCore.Viewer.Application.Dto.HechoDto hecho;
                if (documentoInstancia.HechosPorId.TryGetValue(hechoId, out hecho))
                {
                    if (!resultado.ContainsKey(hecho.IdConcepto))
                    {
                        resultado[hecho.IdConcepto] = hecho.Valor;
                    }
                }
           }
           return resultado;
       }
        

       [HttpPost]
       [Route("GenerarDocumentosContextosActualizados")]
       public IHttpActionResult GenerarDocumentosContextosActualizados() 
       {

           var resultado = new ResultadoOperacionDto() 
           {
               Resultado = true,
               Mensaje = "Ok"
           };
           try
           {
               GeneraDocumentosInstanciaContextosActualizados(IdUsuarioExec, _cacheTaxonomiaXbrl, _estrategiaCacheTaxonomia);
           }
           catch (Exception ex)
           {
               resultado.Resultado = false;
               resultado.InformacionExtra = ex;
               resultado.Mensaje = "Ocurrio un error al migrar los documentos: " + ex.Message;
           }
           return Ok(resultado);
       }

       /// <summary>
       /// Itera todos los documentos de instancia existentes en la BD y les genera una nueva versión con los contextos actualizados.
       /// </summary>
       /// <param name="idUsuarioExec">Identificador del usuario que ejecuta este procedimiento.</param>
       /// <param name="_cacheTaxonomiaXbrl">Contiene definiciones de las taxonomias.</param>
       /// <param name="_estrategiaCacheTaxonomia">Cache de taxonomías.</param>
       public void GeneraDocumentosInstanciaContextosActualizados(long idUsuarioExec, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia)
       {
           var listaIdsDocumentosInstancia = DocumentoInstanciaRepository.ObtenIdsDocumentosInstancia();
           
           if (listaIdsDocumentosInstancia.Count > 0)
           {
               var currentIndex = 0;
               foreach (var idDocumentoInstancia in listaIdsDocumentosInstancia)
               {
                   try
                   {
                       //var service = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
                       var entiy = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
                       var idUsuario = entiy.IdUsuarioBloqueo != null ? entiy.IdUsuarioBloqueo : entiy.IdUsuarioUltMod;
                       DocumentoInstanciaService.GeneradocumentoInstaciaCotextoActualizado(idDocumentoInstancia, idUsuario ?? idUsuarioExec, _cacheTaxonomiaXbrl, _estrategiaCacheTaxonomia);
                       //service = null;
                       entiy = null;
                       currentIndex++;
                       System.Console.Write("Documentos procesdos:" + currentIndex + " de " + listaIdsDocumentosInstancia.Count);
                   }
                   catch (Exception e)
                   {
                       System.Console.Write(e);
                   }
               }
           }
       }

       /// <summary>
       /// Retorna el listado de conceptos de una taxonomía determinada.
       /// </summary>
       /// <returns>Respuesta json con el listado de las taxonomías.</returns>
       [HttpPost]
       [Route("ObtenConceptosTaxonomia")]
       public IHttpActionResult ObtenConceptosTaxonomia()
       {

           var param = getFormKeyValue("idTaxonomia");
           var idTaxonomia = Int64.Parse(param);
           var resultado = ObtenerDefinicionTaxonomiaPorId(idTaxonomia);

           if (!resultado.Resultado)
           {
               return Ok(resultado);
           }

           var taxDto = resultado.InformacionExtra as TaxonomiaDto;
           var resultadoConceptos = new Dictionary<string, string>();
           foreach (var concepto in taxDto.ConceptosPorId.Values)
           {
               var EsAbstracto = concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false;
               var EsDimension = concepto.EsDimension != null ? concepto.EsDimension.Value : false;
               var EsMiembroDimension = concepto.EsMiembroDimension != null ? concepto.EsMiembroDimension.Value : false;

               if (!EsAbstracto && !EsDimension && !concepto.EsHipercubo &&
                   !EsMiembroDimension && concepto.Tipo == Concept.Item)
               {
                   if (!resultadoConceptos.ContainsKey(concepto.Id))
                   {
                       var etiqueta = concepto.Nombre;
                       if (concepto.Etiquetas != null && concepto.Etiquetas.Values.Count() > 0)
                       {
                           etiqueta = concepto.Etiquetas.First().Value.First().Value.Valor;
                           foreach (var idioma in concepto.Etiquetas)
                           {
                               if (idioma.Key.Contains(CommonConstants.LenguajeEsp))
                               {
                                   etiqueta = idioma.Value.First().Value.Valor;
                                   break;
                               }
                           }
                       }
                       resultadoConceptos.Add(concepto.Id, etiqueta);
                   }
               }
           }

           return Ok(resultadoConceptos);
       }

        /// <summary>
       /// Retorna la estructura de presentacion en el visor de un documento instancia por formato
       /// </summary>
       /// <returns>Respuesta json con el listado de la estructura oir formato.</returns>
       [HttpPost]
       [Route("ObtenerEstructuraDocumento")]
       public IHttpActionResult ObtenerEstructuraDocumento()
       {

           var documentoInstancia = getFormKeyValue("documentoInstancia");
           ResultadoOperacionDto resultado = new ResultadoOperacionDto();
           resultado.Resultado = false;

           var serializerSettings = new JsonSerializerSettings();
           serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

           var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);

           
           resultado = DocumentoInstanciaService.CrearEstructuraDocumento(documentoInstanciaDto);

           var jsonResult = this.Json(resultado);
           return jsonResult;

       }

       /// <summary>
       /// Retorna la estructura de presentacion en el visor de un documento instancia por formato
       /// </summary>
       /// <returns>Respuesta json con el listado de la estructura oir formato.</returns>
       [HttpPost]
       [Route("ActualizarEstructuraDocumento")]
       public IHttpActionResult ActualizarEstructuraDocumento()
       {

           var documentoInstancia = getFormKeyValue("documentoInstancia");
           var estructura = getFormKeyValue("estructura");

           ResultadoOperacionDto resultado = new ResultadoOperacionDto();
           resultado.Resultado = false;

           var serializerSettings = new JsonSerializerSettings();
           serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

           var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
           var elementosDocumento = (IList<ElementoDocumentoDto>)JsonConvert.DeserializeObject(estructura, typeof(IList<ElementoDocumentoDto>), serializerSettings);


           resultado = DocumentoInstanciaService.ActualizarEstructuraDocumento(documentoInstanciaDto, elementosDocumento);

           var jsonResult = this.Json(resultado);
           return jsonResult;

       }



        /// <summary>
        /// Método de controller que atiende las solicitudes REST de validación de archivos de instancia XBRL.
        /// Este método espera una solicitud de tipo multi part, puede recibir cualquier número de parámetro y 
        /// valida el primer archivo de la lista de archivos adjuntos (ZIP o XBRL), retorna en formato Json 
        /// la información resultado de validación del archivo
        /// </summary>
        /// <returns></returns>
       [HttpPost]
       [Route("ValidarDocumentoXBRL")]
       public async Task<IHttpActionResult> ValidarDocumentoXBRL()
       {
           LogUtil.Info("Petición de validación de documento de instancia recibida");
           var servicioValidacion = (IValidarDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("ValidarDocumentoInstanciaService");


           ResultadoOperacionDto resultado = null;
           try {

               var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
               var provider = new MultipartFormDataStreamProvider(root);
               await Request.Content.ReadAsMultipartAsync(provider);
               var fileData = provider.FileData.FirstOrDefault();
               string rutaArchivo = null;
               string nombreArchivo = null;
               if (fileData != null)
               {
                   var parametros = new Dictionary<string, string>();
                   var valorParams = "";
                   foreach (var key in provider.FormData.AllKeys)
                   {
                       parametros.Add(key, provider.FormData[key]);
                       valorParams += key + ":" + provider.FormData[key] + ";";
                   }
                   
                   rutaArchivo = fileData.LocalFileName;
                   nombreArchivo = fileData.Headers.ContentDisposition.FileName ?? "";
                   nombreArchivo = nombreArchivo.Replace("\\", "").Replace("\"", "");
                   LogUtil.Info("Nombre del archivo:" + fileData.Headers.ContentDisposition.FileName + ": Parámetros de la petición:" + valorParams);
                   using (var streamArchivo = new FileStream(rutaArchivo, FileMode.Open))
                   {
                       resultado = servicioValidacion.ValidarDocumentoInstanciaXBRL(streamArchivo, rutaArchivo,nombreArchivo, parametros);
                   }
                   try
                   {
                       File.Delete(rutaArchivo);
                   }
                   catch (Exception e)
                   {
                       LogUtil.Error(e);
                   }
               }
               else
               {
                   LogUtil.Info("Petición de validación de documento de instancia no contiene ningún archivo adjunto");
                   resultado = new ResultadoOperacionDto();
                   resultado.Resultado = false;
                   resultado.Mensaje = "Falta archivo de instancia XBRL a validar";
               }
           
           }catch(Exception ex){
               LogUtil.Error(ex);
               resultado = new ResultadoOperacionDto();
               resultado.Resultado = false;
               resultado.Mensaje = "Ocurrió un error general al validar el archivo XBRL:" + ex.Message;
               resultado.Excepcion = ex.StackTrace;
           }
           var jsonResult = this.Json(resultado);
           return jsonResult;
       
       }

       [HttpPost]
       [Route("AlmacenarDocumentoXBRL")]
       public async Task<IHttpActionResult> AlmacenarDocumentoXBRL()
       {
           LogUtil.Info("Petición de Almacenamiento de documento de instancia recibida");
           var resultado = new ResultadoOperacionDto();
           var servicioAlmacenamiento = (IAlmacenarDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("AlmacenarDocumentoInstanciaService");
           
           try
           {
               var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
               var provider = new MultipartFormDataStreamProvider(root);
               await Request.Content.ReadAsMultipartAsync(provider);
               var fileData = provider.FileData.FirstOrDefault();
               string rutaArchivo = null;
               string nombreArchivo = null;
               if (fileData != null)
               {
                   var parametros = new Dictionary<string, string>();
                   var valorParams = "";
                   foreach (var key in provider.FormData.AllKeys)
                   {
                       parametros.Add(key, provider.FormData[key]);
                       valorParams += key + ":" + provider.FormData[key] + ";";
                   }
                   
                   rutaArchivo = fileData.LocalFileName;
                   nombreArchivo = fileData.Headers.ContentDisposition.FileName ?? "";
                   nombreArchivo = nombreArchivo.Replace("\\", "").Replace("\"", "");
                   LogUtil.Info("Nombre del archivo:" + fileData.Headers.ContentDisposition.FileName + ": Parámetros de la petición:" + valorParams);
                   using (var streamArchivo = new FileStream(rutaArchivo, FileMode.Open))
                   {
                       resultado = servicioAlmacenamiento.GuardarDocumentoInstanciaXBRL(streamArchivo,rutaArchivo, nombreArchivo, parametros);
                       if (resultado.Resultado) { 
                       
                           //Enviar mensaje para procesar el documento
                           //var envioMensajes = (ProcesarDocumentoXBRLEmsGateway)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDocumentoXBRLGateway");
                           //var identificadorDocNuevo = resultado.InformacionExtra as long[];
                           //envioMensajes.EnviarSolicitudProcesarXBRL(identificadorDocNuevo[0], identificadorDocNuevo[1]);
                       }
                   }
                   try
                   {
                       File.Delete(rutaArchivo);
                   }
                   catch (Exception e)
                   {
                       LogUtil.Error(e);
                   }
               }
               else
               {
                   LogUtil.Info("Petición de Almacenamiento de documento de instancia no contiene ningún archivo adjunto");
                   resultado = new ResultadoOperacionDto();
                   resultado.Resultado = false;
                   resultado.Mensaje = "Falta archivo de instancia XBRL a validar";
               }

           }
           catch (Exception ex)
           {
               LogUtil.Error(ex);
               resultado = new ResultadoOperacionDto();
               resultado.Resultado = false;
               resultado.Mensaje = "Ocurrió un error general al almacenar el archivo XBRL:" + ex.Message;
               resultado.Excepcion = ex.StackTrace;
           }
           var jsonResult = this.Json(resultado);
           return jsonResult;
       }


        /// <summary>
        /// Este método atiende las solicitudes para consultar los 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("ConsultarFideicomitentesDeFiduciario")]
        public IHttpActionResult ConsultarFideicomitentesDeFiduciario()
        {
            var resultado = new ResultadoOperacionDto();

            var cveFiduciario = getFormKeyValue("cveEmisora");
            if (String.IsNullOrEmpty(cveFiduciario))
            {
                resultado.Resultado = false;
                resultado.Mensaje = "El paraémtro 'cveEmisora' es requerido";
            }
            else {

                resultado.Resultado = true;
                var mapaResultado = new Dictionary<string, Object>();
                mapaResultado.Add("esFiduciario","1");
                mapaResultado.Add("listaFideicomitentes", new List<string>() {
                "VUELA","MAYACB","FINN","FUNO"
                });
                resultado.InformacionExtra = mapaResultado;
            
            }

            resultado.Resultado = true;
            return Json(resultado);
        }

        [HttpPost]
        [Authorize]
        [Route("IndicadorEmisorasTrimestreActualPorTaxonimia")]
        public IHttpActionResult IndicadorEmisorasTrimestreActualPorTaxonimia()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = getFormKeyValue("anio");
                var anio = Int32.Parse(param);
                param = getFormKeyValue("trimestre");
                var trimestre = param;
                resultado = DocumentoInstanciaService.IndicadorEmisorasTrimestreActualPorTaxonimia(anio,trimestre);
            }
            catch(Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }
            return Ok(resultado);
        }

        /// <summary>
        /// Acción para la consulta de los documentos de instancia para los que el usuario actual tiene
        /// persmisos
        /// </summary>
        /// <returns>Resultado de la Acción</returns>
        [HttpPost]
        [Authorize]
        [Route("ListaDocumentosInstanciaPaginados")]
        public IHttpActionResult ListaDocumentosInstanciaPaginados()
        {

            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var tipoDocumentos = getFormKeyValue("tipoDocumentos");
                var param = getFormKeyValue("paginacion");
                var paginacion = new PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto>();
                JsonConvert.PopulateObject(param, paginacion);

                if (!String.IsNullOrWhiteSpace(tipoDocumentos))
                {
                    if (tipoDocumentos.ToUpper().Equals("PROPIOS"))
                    {
                        resultado.InformacionExtra = DocumentoInstanciaService.ObtenerDocumentosPaginados(paginacion,IdUsuarioExec,true);
                    }
                    if (tipoDocumentos.ToUpper().Equals("COMPARTIDOS"))
                    {
                        resultado.InformacionExtra = DocumentoInstanciaService.ObtenerDocumentosPaginados(paginacion, IdUsuarioExec, false);
                    }
                }
                if (resultado.InformacionExtra == null)
                {
                    resultado.InformacionExtra = DocumentoInstanciaService.ObtenerDocumentosPaginados(paginacion, 0, false);
                }

                
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        private IList<ErrorCargaTaxonomiaDto> validarInternoDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciaDto)
        {
            IList<ErrorCargaTaxonomiaDto> erroresFinales = new List<ErrorCargaTaxonomiaDto>();
            if (documentoInstanciaDto != null)
            {


                var xpe = XPEServiceImpl.GetInstance(_forzarEsquemaHttp);

                VerificarAgregarTaxonomiaACache(documentoInstanciaDto);

                documentoInstanciaDto.Taxonomia = _cacheTaxonomiaXbrl.ObtenerTaxonomia(documentoInstanciaDto.DtsDocumentoInstancia);


                var sw = new Stopwatch();
                sw.Start();
                var streamDoc = xpe.GenerarDocumentoInstanciaXbrl(documentoInstanciaDto, _cacheTaxonomiaXbrl);
                sw.Stop();
                LogUtil.Info("Generar XBRL para validar :" + sw.ElapsedMilliseconds + " ms");

                ConfiguracionCargaInstanciaDto confiCarga = new ConfiguracionCargaInstanciaDto();
                streamDoc.Seek(0, SeekOrigin.Begin);
                confiCarga.Archivo = streamDoc;
                confiCarga.ConstruirTaxonomia = false;
                confiCarga.EjecutarValidaciones = true;
                confiCarga.Errores = new List<ErrorCargaTaxonomiaDto>();
                confiCarga.CacheTaxonomia = _cacheTaxonomiaXbrl;
                sw.Restart();
                var docTmp = xpe.CargarDocumentoInstanciaXbrl(confiCarga);
                sw.Stop();
                LogUtil.Info("Cargar y Validar XBRL :" + sw.ElapsedMilliseconds + " ms");
                erroresFinales = confiCarga.Errores;
                streamDoc.Dispose();
            }

            return erroresFinales;
        }

        /// <summary>
        /// Acción para la descarga del documento PDF concatenado de instancia para los que el usuario actual tiene
        /// persmisos
        /// </summary>
        /// <returns>Resultado de la Acción</returns>
        [HttpPost]
        [Authorize]
        [Route("DescagarPDFConcatenado")]
        public async Task<IHttpActionResult> DescagarPDFConcatenado()
        {
            var resultado = new ResultadoOperacionDto();

            if (!Request.Content.IsMimeMultipartContent("form-data"))
            {
                throw new HttpResponseException
                 (Request.CreateResponse(HttpStatusCode.UnsupportedMediaType));
            }
                var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);
                var filesData = provider.FileData;

                var response = new HttpResponseMessage();
                var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
                response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });

                if (filesData != null)
                {
                    List<String> pathsList = new List<String>();

                    foreach (var fileData in filesData)
                        pathsList.Add(fileData.LocalFileName);

                    var filePathResult = PDFUtil.MezclaPDFs(pathsList);


                    using (var stream = new FileStream(filePathResult, FileMode.Open))
                    {
                        var memoryStream = new MemoryStream();
                        stream.CopyTo(memoryStream);
                        memoryStream.Position = 0;
                        stream.Position = 0;
                        response.StatusCode = HttpStatusCode.OK;
                        response.Content = new StreamContent(memoryStream);
                        response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                        response.Content.Headers.ContentDisposition.FileName = "documentoAgrupado.pdf";
                        response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.pdf");
                    }
                    /*try
                    {
                        foreach (var path in pathsList)
                            File.Delete(path);

                        File.Delete(filePathResult);
                    }
                    catch (Exception e)
                    {
                        Debug.WriteLine(e.StackTrace);
                    }*/
                }
                return ResponseMessage(response);
            }
        [HttpPost]
        [Route("GeneraPlantillaFirmasPersonasResponsablesWord")]
        public IHttpActionResult GeneraPlantillaFirmasPersonasResponsablesWord()
        {
            
            var documentoInstancia = getFormKeyValue("documentoInstancia");
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });
            try
            {
                var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
                AdjuntarTaxonomia(documentoInstanciaDto);
                XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                if (documentoInstanciaDto != null)
                {
                    var espacioNombres = documentoInstanciaDto.EspacioNombresPrincipal.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
                    var plantilla = (IDefinicionPlantillaXbrl)ServiceLocator.ObtenerFabricaSpring().GetObject(espacioNombres);
                    var exportador = new AbaxXBRLCore.Reports.Exporter.Impl.Rol.ExportadorRolDocumentoArPros431000();

                    var documentoWord = exportador.GeneraDocumentoFirmasPersonasResponsables(documentoInstanciaDto,plantilla);
                    documentoWord.Position = 0;
                    response.StatusCode = HttpStatusCode.OK;
                    response.Content = new StreamContent(documentoWord);
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = (string.IsNullOrEmpty(documentoInstanciaDto.Titulo) ? "export" : documentoInstanciaDto.Titulo) + ".docx";
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                response.StatusCode = HttpStatusCode.NotFound;
                var dtoResultado = new ResultadoOperacionDto();
                dtoResultado.Resultado = false;
                dtoResultado.Mensaje = ex.Message;
                dtoResultado.InformacionExtra = ex.StackTrace;
                response.Content = new StringContent(JsonConvert.SerializeObject(dtoResultado));
            }
            return ResponseMessage(response);
        }
        /// <summary>
        /// Genera la plantillas para las personas que firman la leyenda de la emisión al amparo del articulo 13.
        /// </summary>
        /// <returns>Flujo de bytes con la plantilla de word.</returns>
        [HttpPost]
        [Route("GeneraPlantillaFirmasArticulo13")]
        public IHttpActionResult GeneraPlantillaFirmasArticulo13()
        {

            var documentoInstancia = getFormKeyValue("documentoInstancia");
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });
            try
            {
                var documentoInstanciaDto = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(documentoInstancia, typeof(DocumentoInstanciaXbrlDto), serializerSettings);
                AdjuntarTaxonomia(documentoInstanciaDto);
                XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                if (documentoInstanciaDto != null)
                {
                    var espacioNombres = documentoInstanciaDto.EspacioNombresPrincipal.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
                    var plantilla = (IDefinicionPlantillaXbrl)ServiceLocator.ObtenerFabricaSpring().GetObject(espacioNombres);
                    var exportador = new AbaxXBRLCore.Reports.Exporter.Impl.Rol.ExportadorRolDocumentoArPros431000();

                    var documentoWord = exportador.GeneraDocumentoFirmasArticulo13(documentoInstanciaDto, plantilla);
                    documentoWord.Position = 0;
                    response.StatusCode = HttpStatusCode.OK;
                    response.Content = new StreamContent(documentoWord);
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = (string.IsNullOrEmpty(documentoInstanciaDto.Titulo) ? "export" : documentoInstanciaDto.Titulo) + ".docx";
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                response.StatusCode = HttpStatusCode.NotFound;
                var dtoResultado = new ResultadoOperacionDto();
                dtoResultado.Resultado = false;
                dtoResultado.Mensaje = ex.Message;
                dtoResultado.InformacionExtra = ex.StackTrace;
                response.Content = new StringContent(JsonConvert.SerializeObject(dtoResultado));
            }
            return ResponseMessage(response);
        }


        [HttpPost]
        [Route("ObtenerTaxonomia")]
        public TaxonomiaDto ObtenerTaxonomia(IList<DtsDocumentoInstanciaDto> listaDts)
        {

            var cacheTaxonomia = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");
            var tax = cacheTaxonomia.ObtenerTaxonomia(listaDts);
            if (tax == null)
            {
                //Cargar taxonomía si no se encuentra en cache
                var errores = new List<ErrorCargaTaxonomiaDto>();
                var xpe = AbaxXBRLCore.XPE.impl.XPEServiceImpl.GetInstance();
                tax = xpe.CargarTaxonomiaXbrl(listaDts.Where(x => x.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF).First().HRef, errores, false);
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




        [HttpPost]
        [Route("EjecutaDistribucion")]
        public ResultadoOperacionDto EjecutaDistribucion(long idDocumentoInstancia,
            long version,
            IDictionary<string, object> parametros,
            IVersionDocumentoInstanciaRepository versionDocumentoInstanciaRepository,
            IDocumentoInstanciaRepository documentoInstanciaRepository,
            IDistribucionDocumentoXBRL distribucion)
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

                /* Aplicación de distribución**/
                LogUtil.Info("Ejecutando Distribución CELL STORE DB para documento: " + documentoInstanciaXbrlDto.IdDocumentoInstancia + ", archivo: " + documentoInstanciaXbrlDto.Titulo);
                resultado = new ResultadoOperacionDto()
                {
                    Resultado = true,
                    Mensaje = "OK"
                };
                try
                {
                    resultado = AbaxXBRLCellStoreService.ExtraeModeloDocumentoInstancia(documentoInstanciaXbrlDto, parametros);
                    if (resultado.Resultado)
                    {
                        var modelo = (EstructuraMapeoDTO)resultado.InformacionExtra;
                        resultado = AbaxXBRLCellStoreService.PersisteModeloCellstoreMongo(modelo);
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

        [HttpPost]
        [Route("ReprocesaCellStoreAsync")]
        public IHttpActionResult ReprocesaCellStoreAsync()
        {
            var resultado = new ResultadoOperacionDto();
            var idReprocesar = getFormKeyValue("idReprocesar");
            //AbaxXBRLCellStoreService.ReprocesaCellStore();
            return Ok(resultado);
        }


        [HttpPost]
        [Route("ReprocesaCellStore")]
        public  IHttpActionResult ReprocesaCellStore()
        {
            var idReprocesar = getFormKeyValue("idReprocesar");
            LogUtil.Info("Petición de Reprocesamiento de documentos instancia recibida");
            var resultado = new ResultadoOperacionDto();
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            //var procesador = (IProcesarDistribucionDocumentoXBRLService)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDistribucionDocumentoXBRLService");
            var documentoInstanciaRepository = (IDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaRepository");
            var cellStoreMongo = (AbaxXBRLCore.CellStore.Services.Impl.AbaxXBRLCellStoreMongo)ServiceLocator.ObtenerFabricaSpring().GetObject("AbaxXBRLCellStoreMongo");
            var versionDocumentoInstanciaRepository = (IVersionDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("VersionDocumentoInstanciaRepository");
            var documentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
            var candidatosReprocesar = documentoInstanciaRepository.ObtenCandidatosReprocesar();



            foreach (var candidato in candidatosReprocesar)
            {
                if (!(Convert.ToString(candidato.IdDocumentoInstancia).Equals(idReprocesar)))
                {
                    continue;
                }



                var queryConsultaElementosColeccion = new StringBuilder();
                queryConsultaElementosColeccion.Append("{");
                queryConsultaElementosColeccion.Append(" \"Taxonomia\" : ");
                queryConsultaElementosColeccion.Append(JsonConvert.ToString(candidato.EspacioNombresPrincipal));
                queryConsultaElementosColeccion.Append(", \"Entidad.Nombre\" : ");
                queryConsultaElementosColeccion.Append(JsonConvert.ToString(candidato.ClaveEmisora));
                queryConsultaElementosColeccion.Append(", \"Periodo.Fecha\" : ");
                queryConsultaElementosColeccion.Append(JsonConvert.ToString(candidato.FechaReporte));
                queryConsultaElementosColeccion.Append(" }");


                var queryEnvios = queryConsultaElementosColeccion.ToString();
                var enviosMongo = cellStoreMongo.ConsultaElementosColeccion<AbaxXBRLCore.CellStore.Modelo.Envio>(queryEnvios);
                //Eliminamos envios previos para depurar
                foreach (var envioMongo in enviosMongo)
                {
                    var cantidadEnvios = candidatosReprocesar.Where(x =>
                       x.EspacioNombresPrincipal.Equals(envioMongo.Taxonomia) &&
                       x.ClaveEmisora.Equals(envioMongo.Entidad.Nombre) &&
                       JsonConvert.ToString(x.FechaReporte).Equals(JsonConvert.ToString(envioMongo.Periodo.Fecha)) &&
                       JsonConvert.ToString(x.FechaCreacion).Equals(JsonConvert.ToString(envioMongo.FechaRecepcion))).Count();
                    if (cantidadEnvios == 0)
                    {
                        cellStoreMongo.EliminarAsync("Envio", "{\"IdEnvio\" : \"" + envioMongo.IdEnvio + "\"}");
                        cellStoreMongo.EliminarAsync("Hecho", "{\"IdEnvio\" : \"" + envioMongo.IdEnvio + "\"}");
                    }
                }

                var queryExistenciaEnvio = new StringBuilder();
                queryExistenciaEnvio.Append("{");
                queryExistenciaEnvio.Append(" \"Taxonomia\" : ");
                queryExistenciaEnvio.Append(JsonConvert.ToString(candidato.EspacioNombresPrincipal));
                queryExistenciaEnvio.Append(", \"Entidad.Nombre\" : ");
                queryExistenciaEnvio.Append(JsonConvert.ToString(candidato.ClaveEmisora));
                queryExistenciaEnvio.Append(", \"Periodo.Fecha\" : ");
                queryExistenciaEnvio.Append(JsonConvert.ToString(candidato.FechaReporte));
                queryExistenciaEnvio.Append(", \"FechaRecepcion\" : ");
                queryExistenciaEnvio.Append(JsonConvert.ToString(candidato.FechaCreacion));
                queryExistenciaEnvio.Append(" }");


                var queryExistencia = queryExistenciaEnvio.ToString();
                var cantidad = cellStoreMongo.CuentaElementosColeccion("Envio", queryExistencia);
                if (cantidad == 0)
                {
                    LogUtil.Info("Reprocesando: " +
                    candidato.IdDocumentoInstancia + ", " +
                    candidato.FechaReporte + ", " +
                    candidato.ClaveEmisora + ", " + ", " +
                    candidato.NumFideicomiso + "," +
                    candidato.EspacioNombresPrincipal);

                    var cacheTaxonomia = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");



                   resultado =  EjecutaDistribucion(
                        candidato.IdDocumentoInstancia,
                        1,
                        new Dictionary<String, object>(),
                        versionDocumentoInstanciaRepository,
                        documentoInstanciaRepository,
                        DistribucionDocumentoXBRL
                        );


                }
            }

            var jsonResult = this.Json(resultado);
            return Ok(resultado);

        }

        [HttpPost]
        [Route("obtenerPorcentajeProcesamiento")]
        public IHttpActionResult obtenerPorcentajeProcesamiento()
        {
            var resultado = new ResultadoOperacionDto();
            resultado.InformacionExtra = AbaxXBRLCellStoreService.obtenerPorcentajeReprocesamiento();

            var jsonResult = this.Json(resultado);
            return Ok(resultado);
        }

        [HttpPost]
        [Route("estaEjecutandoReprocesamiento")]
        public IHttpActionResult estaEjecutandoReprocesamiento()
        {
            var resultado = new ResultadoOperacionDto();
            resultado.InformacionExtra = AbaxXBRLCellStoreService.estaEjecutandoReprocesamiento();

            var jsonResult = this.Json(resultado);
            return Ok(resultado);
        }

        [HttpPost]
        [Route("ejecutarReprocesamiento")]
        public void ejecutarReprocesamiento()
        {
            var resultado = new ResultadoOperacionDto();
            var documentoInstanciaRepository = (IDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaRepository");
            var versionDocumentoInstanciaRepository = (IVersionDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("VersionDocumentoInstanciaRepository");
            _cacheTaxonomiaXbrl = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");
            AbaxXBRLCellStoreService.ReprocesarDocumentosPendientes(documentoInstanciaRepository, versionDocumentoInstanciaRepository, _cacheTaxonomiaXbrl);

        }




        [HttpPost]
        [Route("obtenerNumeroCandidatosReprocesar")]
        public async Task<IHttpActionResult> obtenerNumeroCandidatosReprocesar()
        {
            LogUtil.Info("Petición de Reprocesamiento de documentos instancia recibida");
            var resultado = new ResultadoOperacionDto();
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            //var procesador = (IProcesarDistribucionDocumentoXBRLService)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDistribucionDocumentoXBRLService");
            var documentoInstanciaRepository = (IDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaRepository");
            var cellStoreMongo = (AbaxXBRLCore.CellStore.Services.Impl.AbaxXBRLCellStoreMongo)ServiceLocator.ObtenerFabricaSpring().GetObject("AbaxXBRLCellStoreMongo");
            var versionDocumentoInstanciaRepository = (IVersionDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("VersionDocumentoInstanciaRepository");
            var documentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
            var candidatosReprocesar = documentoInstanciaRepository.ObtenCandidatosReprocesar();

            resultado.InformacionExtra = candidatosReprocesar;
            resultado.Resultado = true;


            var jsonResult = this.Json(resultado);
            return Ok(resultado);

        }
    }
}