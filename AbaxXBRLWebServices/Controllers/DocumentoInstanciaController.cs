using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Viewer.Application.Service;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using AbaxXBRLCore.Viewer.Application.Import.Impl;
using AbaxXBRLCore.Distribucion.Ems;
using AbaxXBRLCore.Distribucion;
using System.Configuration;
using System.Net;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controlador para la atención de las peticiones REST para el procesaminto de documentos de instancia
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
        /// Servicio para el acceso a los datos de usuarios y sus empresas asignadas
        /// </summary>
        private IUsuarioService UsuarioService = null;
        /// <summary>
        /// Servicio para la transformación de modelos de taxonomías y documentos de instancia
        /// </summary>
        public IXbrlViewerService XbrlViewerService { get; set; }
        /// <summary>
        /// Estrategia de caché para la carga de documentos
        /// </summary>
        private EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia = null;
        /// <summary>e
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
        /// El objeto para consultar el listado de documentos instancia
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// Servicio para realizar operaciones con un documento de instancia.
        /// </summary>
        public IAlmacenarDocumentoInstanciaService AlmacenarDocumentoInstanciaService { get; set; }
        
        /// <summary>
        /// Servicio para consulta de datos de empresas y sus relaciones
        /// </summary>
        public IEmpresaService EmpresaService { get; set; }

        /// <summary>
        /// Servicio para validación de documentos XBRL
        /// </summary>
        public IValidarDocumentoInstanciaService ValidarDocumentoInstanciaService { get; set; }

        public IProcesarSobreXBRLService ProcesarSobreXBRLService { get; set; }

        /// <summary>
        /// Bandera que indica si se debe de hacer usuo de queue en elenvío.
        /// </summary>
        private bool USAR_QUEUE = true;

        public DocumentoInstanciaController():base()
        {
            try 
            {
                DocumentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
                XbrlViewerService = (IXbrlViewerService)ServiceLocator.ObtenerFabricaSpring().GetObject("XbrlViewerService");
                _estrategiaCacheTaxonomia = (EstrategiaCacheTaxonomiaMemoria)ServiceLocator.ObtenerFabricaSpring().GetObject("EstrategiaCacheTaxonomia");
                _cacheTaxonomiaXbrl = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");
                ImportadorExportadorArchivoPlantilla = (ImportadorExportadorBase)ServiceLocator.ObtenerFabricaSpring().GetObject("importadorExportadorArchivosPlantilla");
                DocumentoInstanciaRepository = (IDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaRepository");
                EmpresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
                AlmacenarDocumentoInstanciaService = (IAlmacenarDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("AlmacenarDocumentoInstanciaService");
                ValidarDocumentoInstanciaService = (IValidarDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("ValidarDocumentoInstanciaService");
                ProcesarSobreXBRLService = (IProcesarSobreXBRLService)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarSobreXBRLService");

                var usuarQueueString = ConfigurationManager.AppSettings.Get("UsarQueue");
                var usarQueue = true;
                if (!String.IsNullOrEmpty(usuarQueueString))
                {
                    Boolean.TryParse(usuarQueueString, out usarQueue);
                }
                USAR_QUEUE = usarQueue;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }


        /// <summary>
        /// Acción predeterminada
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("Index")]
        public IHttpActionResult Index()
        {
            return Json("App OK");
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
                   nombreArchivo = fileData.Headers.ContentDisposition.FileName;
                    if (String.IsNullOrEmpty(nombreArchivo) || nombreArchivo.Equals("\"blob\""))
                    {
                        nombreArchivo = fileData.Headers.ContentDisposition.Name??"";
                    }

                   nombreArchivo = nombreArchivo.Replace("\\", "").Replace("\"", "");
                   LogUtil.Info("Nombre del archivo:" + nombreArchivo + ": Parámetros de la petición:" + valorParams);
                   
                   resultado = ValidarDocumentoInstanciaService.ValidarDocumentoInstanciaXBRL(null, rutaArchivo,nombreArchivo, parametros);
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
           
           //System.GC.Collect();
           LogUtil.Info("Memoria usada:" + System.GC.GetTotalMemory(true));
           return jsonResult;
       
       }

       [HttpPost]
       [Route("AlmacenarDocumentoXBRL")]
       public async Task<IHttpActionResult> AlmacenarDocumentoXBRL()
       {
           LogUtil.Info("Petición de Almacenamiento de documento de instancia recibida");
           var resultado = new ResultadoOperacionDto();
           
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
                       resultado = AlmacenarDocumentoInstanciaService.GuardarDocumentoInstanciaXBRL(streamArchivo,rutaArchivo, nombreArchivo, parametros);
                       //Enviar mensaje para procesar el documento
                       var identificadorDocNuevo = resultado.InformacionExtra as long[];

                       if (resultado.Resultado)
                       {
                           var idDocmentoInstancia = identificadorDocNuevo[0];
                           var idVersionDocumento = identificadorDocNuevo[1];
                           if (USAR_QUEUE)
                           {
                               var envioMensajes = (ProcesarDocumentoXBRLEmsGateway)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDocumentoXBRLGateway");
                               envioMensajes.EnviarSolicitudProcesarXBRL(idDocmentoInstancia, idVersionDocumento);
                           }
                           else
                           {
                               var procesador = (IProcesarDistribucionDocumentoXBRLService)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDistribucionDocumentoXBRLService");
                               procesador.DistribuirDocumentoInstanciaXBRL(idDocmentoInstancia, idVersionDocumento, new Dictionary<string, object>());
                           }
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


       [HttpGet]
       [Route("AlmacenarDocumentoPruebaXBRL")]
       public async Task<IHttpActionResult> AlmacenarDocumentoPruebaXBRL()
       {
           LogUtil.Info("Petición de Almacenamiento de documento de instancia recibida");
           var resultado = new ResultadoOperacionDto();
           
           try
           {
                   var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
               
               
                   string rutaArchivo = null;
                   string nombreArchivo = null;
               
                   var parametros = new Dictionary<string, string>();
                   var valorParams = "";

                   parametros.Add("fechaTrimestre", "2017-03-31");
                   parametros.Add("cvePizarra", "WALMEX");
                   parametros.Add("cveUsuario", "1");
                   //parametros.Add("cveFideicomitente", "FIDECCD");
                   parametros.Add("idEnvio", "100291");
                   parametros.Add("acuse", "AC443549466763-rqqszr");




                   rutaArchivo = "C:/Users/Loyola/Downloads/ifrsxbrl_WALMEX_2017-1_.zip";
                   
                   nombreArchivo = "FIDECCD3T2015.zip";
                   
                   using (var streamArchivo = new FileStream(rutaArchivo, FileMode.Open))
                   {
                       resultado = AlmacenarDocumentoInstanciaService.GuardarDocumentoInstanciaXBRL(streamArchivo, rutaArchivo, nombreArchivo, parametros);
                       //Enviar mensaje para procesar el documento
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
       


       [HttpGet]
       [Route("ReprocesoManual")]
       public IHttpActionResult ReprocesoManual(long idDocumentoInstancia, long idVersion) 
       {
         
           var procesador = (IProcesarDistribucionDocumentoXBRLService)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDistribucionDocumentoXBRLService");
           return Json(procesador.DistribuirDocumentoInstanciaXBRL(idDocumentoInstancia, idVersion, new Dictionary<string, object>()));
       }

       [HttpGet]
       [Route("Version")]
       public IHttpActionResult Version()
       {
           var versionData = new Dictionary<String, String>();
           versionData["AbaxVersion"] = ConfigurationManager.AppSettings.Get("Version");
           return Json(versionData);
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
            resultado.Resultado = false;
            var cveFiduciario = getFormKeyValue("cveEmisora");
            if (String.IsNullOrEmpty(cveFiduciario))
            {
                resultado.Resultado = false;
                resultado.Mensaje = "El paraémtro 'cveEmisora' es requerido";
            }
            else
            {
                var listEmpresasResult = EmpresaService.ObtenerEmpresasPorFiltro(cveFiduciario);
                if (listEmpresasResult.Resultado)
                {
                    var listaEmp = (listEmpresasResult.InformacionExtra as IQueryable<Empresa>).ToList();
                    if (listaEmp.Count == 1)
                    {
                        //Agregar al resultado los fideicomisos representados.
                        var resultFides = EmpresaService.ConsultarEmpresasSecundariasPorTipoRelacionYEmpresaPrimaria(ConstantsTipoRelacionEmpresa.FIDUCIARIO_DE_FIDEICOMITENTE, listaEmp[0].IdEmpresa);
                        var resultFidesRepComun = EmpresaService.ConsultarEmpresasSecundariasRepComunPorTipoRelacionYEmpresaPrimaria(ConstantsTipoRelacionEmpresa.REPRESENTANTE_COMUN_DE_FIDEICOMITENTE, listaEmp[0].IdEmpresa);

                        List<Empresa> resultFidesFinal = new List<Empresa>();
                        resultFidesFinal.AddRange(resultFides.InformacionExtra as IList<Empresa>);

                        foreach(Empresa empresa in resultFidesRepComun.InformacionExtra as IList<Empresa> )
                        {
                            Boolean existeEmpresa = false;

                            foreach (Empresa empresaAux in resultFidesFinal)
                            {
                                if (empresa.Equals(empresaAux))
                                {
                                    existeEmpresa = true;
                                    break;
                                }
                            }

                            if(!existeEmpresa)
                            {
                                resultFidesFinal.Add(empresa);
                            }

                        }

                        if (resultFides.Resultado)
                        {
                            resultado.Resultado = true;
                            var listaFides = resultFidesFinal;
                            var mapaResultado = new Dictionary<string, Object>();
                            mapaResultado.Add("esFiduciario", listaFides.Count > 0 ? "1" : "0");
                            mapaResultado.Add("listaFideicomitentes", listaFides.Select(x => x.NombreCorto));
                            resultado.InformacionExtra = mapaResultado;
                        }
                    }
                    else if (listaEmp.Count == 0)
                    {
                        resultado.Mensaje = "No existen empresas cuyo nombre corto sea:" + cveFiduciario;

                    }
                    else if (listaEmp.Count > 1)
                    {
                        resultado.Mensaje = "Existe mas de una empresa cuyo nombre corto es:" + cveFiduciario;
                    }
                }
                else
                {
                    resultado = listEmpresasResult;
                }
            }
            return Json(resultado);
        }
        [HttpPost]
        [Route("AlmacenarDocumentoXBRLDirecto")]
        public async Task<IHttpActionResult> AlmacenarDocumentoXBRLDirecto()
        {
            LogUtil.Info("Petición de Almacenamiento de documento de instancia recibida, no se aplicará validación");
            var resultado = new ResultadoOperacionDto();
            
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
                    foreach (var key in provider.FormData.AllKeys)
                    {
                        parametros.Add(key, provider.FormData[key]);
                    }
                    rutaArchivo = fileData.LocalFileName;
                    nombreArchivo = fileData.Headers.ContentDisposition.FileName ?? "";
                    nombreArchivo = nombreArchivo.Replace("\\", "").Replace("\"", "");
                    LogUtil.Info("Nombre del archivo:" + fileData.Headers.ContentDisposition.FileName);
                    using (var streamArchivo = new FileStream(rutaArchivo, FileMode.Open))
                    {
                        resultado = AlmacenarDocumentoInstanciaService.GuardarDocumentoInstanciaXBRL(streamArchivo, rutaArchivo, nombreArchivo.Trim(), parametros);
                        //Enviar mensaje para procesar el documento
                        var identificadorDocNuevo = resultado.InformacionExtra as long[];
                        
                        if (resultado.Resultado)
                        {
                            var idDocmentoInstancia = identificadorDocNuevo[0];
                            var idVersionDocumento = identificadorDocNuevo[1];

                            if (USAR_QUEUE)
                            {
                                var envioMensajes = (ProcesarDocumentoXBRLEmsGateway)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDocumentoXBRLGateway");
                                envioMensajes.EnviarSolicitudProcesarXBRL(idDocmentoInstancia, idVersionDocumento);
                            }
                            else 
                            {
                                var procesador = (IProcesarDistribucionDocumentoXBRLService)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDistribucionDocumentoXBRLService");
                                procesador.DistribuirDocumentoInstanciaXBRL(idDocmentoInstancia, idVersionDocumento, new Dictionary<string, object>());
                            }
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

        [HttpPost]
        [HttpGet]
        [Route("AjustarAnexoT")]
        public IHttpActionResult AjustarAnexoT ()
        {
            var visorExternoUrl = ConfigurationManager.AppSettings["UrlVisorExterno"];
            var resultado = DocumentoInstanciaService.ActualizaNumerosFideicomisosAnexoT(visorExternoUrl);
            return Json(resultado);
        }

        /// <summary>
        /// Método de controller que atiende las solicitudes REST de obtención de firmas en un documento instancia XBRL sobre.
        /// Este método espera una solicitud de tipo multi part, puede recibir cualquier número de parámetro y 
        /// valida el primer archivo de la lista de archivos adjuntos (ZIP o XBRL), retorna en formato Json 
        /// la información resultado de las firmas y ruta del sobre en dto json.
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("ObtenrFirmasXBRLSobre")]
        public async Task<IHttpActionResult> ObtenrFirmasXBRLSobre()
        {
            LogUtil.Info("Petición de obtención de firmas de XBRL Sobre");
            var resultado = new ResultadoOperacionDto();
            
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
                        resultado = AlmacenarDocumentoInstanciaService.ObtenerFirmasXBRLSobre(streamArchivo, rutaArchivo, nombreArchivo);

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
                    LogUtil.Info("Petición de obtención de firmas no contiene ningún archivo adjunto");
                    resultado = new ResultadoOperacionDto();
                    resultado.Resultado = false;
                    resultado.Mensaje = "Falta archivo de instancia XBRL Sobre a validar";
                }

            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado = new ResultadoOperacionDto();
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error general al obtener las firmas del sobre XBRL:" + ex.Message;
                resultado.Excepcion = ex.StackTrace;
            }
            var jsonResult = this.Json(resultado);
            return jsonResult;
        }

        /// <summary>
        /// Método de controller que atiende las solicitudes REST para procesar el XBRL Sobre y persistir el XBRL adjunto
        /// Este método espera una clave de emisora del usuario que realiza el envío 
        /// y la URL del json del sobre almacenado en la obtención de firmas, retorna en formato Json 
        /// la información resultado de la validación y persistencia el archivo adjunto.
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("ProcesarXBRLSobre")]
        public async Task<IHttpActionResult> ProcesarXBRLSobre()
        {
            LogUtil.Info("Petición para procesar y validar XBRL Sobre");
            var resultado = new ResultadoOperacionDto();

            try
            {
                var root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads");
                var provider = new MultipartFormDataStreamProvider(root);
                await Request.Content.ReadAsMultipartAsync(provider);

                var parametros = new Dictionary<string, string>();                
                var parametroRutaJson = "";
                var claveUsuarioEnvio = "";

                foreach (var key in provider.FormData.AllKeys)
                {
                    parametros.Add(key, provider.FormData[key]);                    

                    if (key.Equals("rutaSobreJson"))
                    {
                        parametroRutaJson = provider.FormData[key];
                    }
                }

                parametros.TryGetValue("rutaSobreJson", out parametroRutaJson);
                parametros.TryGetValue("cvePizarra", out claveUsuarioEnvio);

                //Si recibimos el parametro con la ruta del json, llenamos el DTO y validamos el Sobre.
                if (parametroRutaJson != null && !parametroRutaJson.Equals("") && claveUsuarioEnvio != null && !claveUsuarioEnvio.Equals(""))
                {
                    resultado = ProcesarSobreXBRLService.ProcesarXbrlSobre(parametroRutaJson, claveUsuarioEnvio);
                }
                else
                {
                    LogUtil.Info("No se cuenta con los parámetros necesarios para procesar el sobre.");
                    resultado = new ResultadoOperacionDto();
                    resultado.Resultado = false;
                    resultado.Mensaje = "No se cuenta con los parámetros necesarios para procesar el sobre.";
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado = new ResultadoOperacionDto();
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error general al obtener las firmas del sobre XBRL:" + ex.Message;
                resultado.Excepcion = ex.StackTrace;
            }
            var jsonResult = this.Json(resultado);
            return jsonResult;
        }

    }
}
