using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Common.Application;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Converter;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLCore.Viewer.Application.Service;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace AbaxXBRLWeb.Controllers
{

    [RoutePrefix("ValidarHerramienta")]
    public class ValidarHerramientaController : BaseController
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        /// <summary>
        /// Interface del Servicio para realizar operaciones CRUD relacionadas con la Empresa.
        /// </summary>
        public IEmpresaService EmpresaService { get; set; }

        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();

        /// <summary>
        /// Coneccion al directorio activo
        /// </summary>
        public IActiveDirectoryConnection activeDirectoryConnection { get; set; }

        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDocumentoInstanciaService DocumentoInstanciaService = null;

        /// <summary>
        /// Caché de  los DTO's que representan una taxonomía
        /// </summary>
        private ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl = null;

        /// <summary>
        /// Estrategia de caché para la carga de documentos
        /// </summary>
        private EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia = null;

        /// <summary>
        /// Servicio para la transformación de modelos de taxonomías y documentos de instancia
        /// </summary>
        public IXbrlViewerService XbrlViewerService { get; set; }


        public ValidarHerramientaController()
            : base()
        {
            try
            {
                UsuarioRepository = (IUsuarioRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioRepository");
                EmpresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
                DocumentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
                _cacheTaxonomiaXbrl = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");
                _estrategiaCacheTaxonomia = (EstrategiaCacheTaxonomiaMemoria)ServiceLocator.ObtenerFabricaSpring().GetObject("EstrategiaCacheTaxonomia");
                XbrlViewerService = (IXbrlViewerService)ServiceLocator.ObtenerFabricaSpring().GetObject("XbrlViewerService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }


        [HttpPost]
        [Route("ValidarServicios")]
        public async Task<IHttpActionResult> ValidarServicios()
        {

            var validacion = new Dictionary<string, string>();

            try
            {
                String correoElectronico = HttpContext.Current.Request.Params["correoElectronico"];
                String usuarioDirectorioActivo = HttpContext.Current.Request.Params["idUsuario"];


                validacion.Add("validacionCorreo", this.ValidarCorreo(correoElectronico));
                validacion.Add("ValidarConexionBaseDatos", this.ValidarConexionBaseDatos());
                

                if (!Request.Content.IsMimeMultipartContent())
                {
                    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
                }
                var respuesta = "Los permisos de las carpetas son correctos";
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
                    else {
                        respuesta = "Error: No se especifico el archivo para validacion";
                    }
                }
                catch (Exception ex)
                {
                    respuesta = "Error: "+ex.Message + " - " + ex.StackTrace;
                }

                validacion.Add("ValidarPermisosCarpetaExcel", respuesta);


                validacion.Add("ValidarConexionDirectorioActivo", this.ValidarConexionDirectorioActivo(usuarioDirectorioActivo));
                validacion.Add("ValidarCargaTaxonomia", this.ValidarCargaTaxonomia());

            }
            catch (Exception ex)
            {
                validacion.Add("errorGeneral", ex.Message + " - " + ex.StackTrace);
            }

            return Ok(validacion);

        }

        private string ValidarCorreo(String correoElectronico)
        {
            string validacionCorreo = "Se realizó la validación del correo de manera correcta, se ha enviado un correo de prueba al siguiente correo:" + correoElectronico;

            try
            {
                UsuarioRepository.EnvioCorreoPrueba(correoElectronico);
            }
            catch (Exception e)
            {
                validacionCorreo = "Ocurrio un error al intentar enviar el correo " + e.Message;
            }

            return validacionCorreo;

        }
        private string ValidarConexionBaseDatos()
        {
            string validacionConexionBaseDatos = "";
            try
            {
                var empresas = EmpresaService.ObtenerEmpresas().InformacionExtra as List<EmpresaDto>;
                

                validacionConexionBaseDatos = "Se realizó la validación de la conexion de BD de manera correcta, se consulto las empresas con un total de :" + empresas.Count + " Registros";

            }
            catch (Exception e)
            {
                validacionConexionBaseDatos = "Ocurrio un error al intentar abrir la conexion de BD: " + e.Message;
            }

            return validacionConexionBaseDatos;

        }
        
        private string ValidarConexionDirectorioActivo(string nombreUsuarioValidacion)
        {
            

            if (activeDirectoryConnection == null)
            {
                var tipoLoginLDAP = ConfigurationManager.AppSettings.Get("TipoLoginLDAP");
                activeDirectoryConnection = (IActiveDirectoryConnection)ServiceLocator.ObtenerFabricaSpring().GetObject(tipoLoginLDAP);
            }

            var resultadoOperacion = activeDirectoryConnection.ObtenerUsuario(nombreUsuarioValidacion);

            var resultado ="Error al intentar validar un usuario del directorio activo" + resultadoOperacion.Mensaje;

            if (resultadoOperacion.Resultado || resultadoOperacion.Mensaje.Contains("MENSAJE_WARNING_USUARIO_NO_ENCONTRADO") || resultadoOperacion.Mensaje.Contains("MENSAJE_WARNING_USUARIO_SIN_GRUPO") || resultadoOperacion.Mensaje.Contains("MENSAJE_WARNING_USUARIO_NO_ENCONTRADO") || resultadoOperacion.Mensaje.Contains("MENSAJE_WARNING_USUARIO_NO_ACTIVO"))
            {
                resultado ="Es posible validar usuarios del directorio activo";
            }

            return resultado;

        }
        private string ValidarCargaTaxonomia()
        {
            
            var resultadoOperacion = this.ObtenerDefinicionTaxonomiaPorId(2);

            return resultadoOperacion.Resultado ? "Es posible validar la taxonomia ICS 2015" : "Error al intentar recuperar la informacion de la taxonomia ICS 2015" + resultadoOperacion.Mensaje; 
        }


        /// <summary>
        /// Retorna la definición de la taxonomía por el identificador.
        /// </summary>
        /// <param name="idTaxonomia">Identificador de la taxonomía.</param>
        /// <returns>Resultado con la definición de la taxonomía.</returns>
        private ResultadoOperacionDto ObtenerDefinicionTaxonomiaPorId(long idTaxonomia)
        {
            var resultado = DocumentoInstanciaService.ObtenerTaxonomiaBdPorId(idTaxonomia);
            var errores = new List<ErrorCargaTaxonomiaDto>();
            if (resultado.Resultado && resultado.InformacionExtra != null)
            {
                //Cargar la taxonomía
                var taxoBd = resultado.InformacionExtra as TaxonomiaXbrl;
                var listaDts =
                    DocumentoInstanciaXbrlDtoConverter.ConvertirDTSDocumentoInstancia(taxoBd.ArchivoTaxonomiaXbrl);
                var taxoDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(listaDts);
                if (taxoDto == null)
                {
                    var resultadoTaxonomia = DocumentoInstanciaService.ObtenerTaxonomiaXbrlProcesada(idTaxonomia, errores);
                    var taxonomia = resultadoTaxonomia.InformacionExtra as ITaxonomiaXBRL;
                    taxoDto = XbrlViewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxonomia);
                    if (taxonomia.ManejadorErrores.PuedeContinuar())
                    {
                        _cacheTaxonomiaXbrl.AgregarTaxonomia(listaDts, taxoDto);
                        _estrategiaCacheTaxonomia.AgregarTaxonomia(DocumentoInstanciaXbrlDtoConverter.ConvertirArchivoTaxonomiaXbrl(taxoBd.ArchivoTaxonomiaXbrl)
                            , taxonomia);
                    }
                    else
                    {
                        resultado.Resultado = false;
                        resultado.InformacionExtra = taxonomia.ManejadorErrores.GetErroresTaxonomia();
                    }
                }
                
            }
            if (errores.Count() > 0)
            {
                LogUtil.Error(errores);
            }
            return resultado;
        }



    }
}