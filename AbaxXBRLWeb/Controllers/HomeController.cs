#region
using System;
using System.Collections.Generic;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using System.Web;
using System.Web.Http;
using AbaxXBRLCore.Common.Dtos;
using Newtonsoft.Json;

#endregion

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    ///     Controlador de la Pagina Home.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    //[Authorize]
    [RoutePrefix("Home")]
    public class HomeController : BaseController
    {

        /// <summary>
        /// El objeto para consultar el histórico de alertas al usuario
        /// </summary>
        public IAlertaRepository AlertaRepository { get; set; }

        /// <summary>
        /// El objeto para consultar el listado de usuarios
        /// </summary>
        public IUsuarioRepository UsuarioRepository { get; set; }

        /// <summary>
        /// El objeto para consultar la bitácora de la auditoría del sistema.
        /// </summary>
        public IRegistroAuditoriaRepository RegistroAuditoriaRepository { get; set; }

        /// <summary>
        /// El objeto para consultar el listado de documentos instancia
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Utileria auxiliar para la serialización a json.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();
        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDocumentoInstanciaService DocumentoInstanciaService = null;

        /// <summary>
        /// Constructor por defecto de la clase
        /// </summary>
        public HomeController()
        {
            try
            {
                AlertaRepository = (IAlertaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("AlertaRepository");
                UsuarioRepository = (IUsuarioRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioRepository");
                RegistroAuditoriaRepository = (IRegistroAuditoriaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("RegistroAuditoriaRepository");
                DocumentoInstanciaRepository = (IDocumentoInstanciaRepository)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaRepository");
                DocumentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
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
                    if (taxonomia.ArchivoTaxonomiaXbrl.Count > 0)
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
                            if (!diccionarioTaxonomias.ContainsKey(entidad.IdDocumentoInstancia))
                            {
                            	diccionarioTaxonomias.Add(entidad.IdDocumentoInstancia, taxonomia.Nombre);
                            }
                        }
                    }
                }
            }
            return diccionarioTaxonomias;
        }



        [HttpPost]
        [Authorize]
        [Route("UltimosDocumentosDeUsuario")]
        public IHttpActionResult UltimosDocumentosDeUsuario()
        {
            DateTime fechaParam = DateTime.MinValue;
            ResultadoOperacionDto resultado = null;
            try
            {
	            var entidades = DocumentoInstanciaRepository.ObtenerUltimosDocumentosDeUsuario(IdUsuarioExec, 5);
	            var diccionarioTaxonomias = ObtenTaxonomiasPorDocumentoInstancia(entidades);
	            var documentos = CopiadoUtil.Copia(entidades);
	            foreach(var documento in documentos)
	            {
	                if (diccionarioTaxonomias.ContainsKey(documento.IdDocumentoInstancia))
	                {
	                    documento.Taxonomia = diccionarioTaxonomias[documento.IdDocumentoInstancia];
	                }
	            }
	            resultado = new ResultadoOperacionDto()
	            {
	                Mensaje = "OK",
	                Resultado = true,
	                InformacionExtra = documentos
	            };
            }
            catch (Exception ex)
            {
                resultado = new ResultadoOperacionDto()
                {
                    Mensaje = ex.Message,
                    Resultado = false,
                    Excepcion = ex.StackTrace
                };
                LogUtil.Error(ex);
            }
            
            Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            return Ok(resultado);
        }

        [HttpPost]
        [Authorize]
        [Route("UltimosRegistrosAuditoriaDeUsuario")]
        public IHttpActionResult UltimosRegistrosAuditoriaDeUsuario()
        {
            DateTime fechaParam = DateTime.MinValue;
            var registrosAuditoria = RegistroAuditoriaRepository.ObtenerUltimosRegistrosAuditoriaDeUsuario(IdUsuarioExec, 5);


            var resultado = new ResultadoOperacionDto()
            {
                Mensaje = "OK",
                Resultado = true,
                InformacionExtra = CopiadoUtil.Copia(registrosAuditoria)
            };
            Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            
            return Ok(resultado);
        }
        [HttpPost]
        [Authorize]
        [Route("UltimasAlertasUsuario")]
        public IHttpActionResult UltimasAlertasUsuario()
        {
            var alertasUsuario = AlertaRepository.ObtenerAlertasDeUsuario(IdUsuarioExec, 5);
            var alertas = CopiadoUtil.Copia(alertasUsuario);

            foreach (var alerta in alertas)
            {
                alerta.NombreUsuario = UsuarioRepository.ObtenerUsuarioPorId(alerta.IdUsuario).NombreCompleto();
            }
            var resultado = new ResultadoOperacionDto()
            {
                Mensaje = "OK",
                Resultado = true,
                InformacionExtra = alertas
            };
            Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            
            return Ok(resultado); ;
        }



        [HttpPost]
        [Authorize]
        [Route("ConteoArchivos")]
        public IHttpActionResult CountArchivos()
        {
            var Conteo = DocumentoInstanciaRepository.ContarDocumentosDeUsuario(IdUsuarioExec);
            var resultado = new ResultadoOperacionDto()
            {
                Mensaje = "OK",
                Resultado = true,
                InformacionExtra = Conteo
            };
            Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            return Ok(resultado); ;
        }


        [HttpPost]
        [Authorize]
        [Route("AlertasRecientes")]
        public IHttpActionResult AlertasRecientes()
        {
            var alertasUsuario = AlertaRepository.ObtenerAlertasDeUsuario(IdUsuarioExec, 500);
            var alertas = CopiadoUtil.Copia(alertasUsuario);

            foreach (var alerta in alertas)
            {
                alerta.NombreUsuario = UsuarioRepository.ObtenerUsuarioPorId(alerta.IdUsuario).NombreCompleto();
                alerta.TituloDocumentoInstancia = DocumentoInstanciaRepository.GetById(alerta.IdDocumentoInstancia).Titulo;
            }
            var resultado = new ResultadoOperacionDto()
            {
                Mensaje = "OK",
                Resultado = true,
                InformacionExtra = alertas
            };
            Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            return Ok(resultado); ;
        }





       
    }
}