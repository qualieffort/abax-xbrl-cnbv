#region

using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Converter;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Viewer.Application.Service;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using AbaxXBRLWeb.App_Code.Common.Service;
using Microsoft.Owin;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using AbaxXBRLCore.Viewer.Application.Dto;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

#endregion

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Implementación del Controlador para 
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    [RoutePrefix("DocumentosInstancia")]
    public class DocumentosInstanciaController : BaseController
    {

        /// <summary>
        /// El servicio para las operaciones de carga, validación y guardado de documentos instancia XBRL
        /// </summary>
        public IDocumentoInstanciaService DocumentoInstanciaService { get; set; }
        /// <summary>
        /// Adminsitrador de caché de taxonomías
        /// </summary>
        public ICacheTaxonomiaXBRL CacheTaxonomia { get; set; }

        public EstrategiaCacheTaxonomiaMemoria EstrategiaCacheTaxonomia { get; set; }
        /// <summary>
        /// El servicio que permite la consulta de usuarios
        /// </summary>
        public IUsuarioService UsuarioService { get; set; }


        public IXbrlViewerService XbrlViewerService { get; set; }
        /// <summary>
        /// Constructor por defecto de la clase <code>DocumentosInstanciaController</code>
        /// </summary>
        public DocumentosInstanciaController()
        {

            DocumentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
            UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
            CacheTaxonomia = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");
            EstrategiaCacheTaxonomia = (EstrategiaCacheTaxonomiaMemoria)ServiceLocator.ObtenerFabricaSpring().GetObject("EstrategiaCacheTaxonomia");
            XbrlViewerService = new XbrlViewerService();
        }

        /// <summary>
        /// Preprara el modelo de datos necesario para presentar/editar un documento instancia XBRL.
        /// </summary>
        /// <param name="documentoUrl">El URL donde se encuentra el documento a procesar.</param>
        /// <returns>un elemento <code>ActionResult</code> el cual contiene el resultado de la ejecución de esta acción.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerModeloVisorXbrl")]
        public IHttpActionResult ObtenerModeloVisorXbrl(string documentoUrl)
        {

            var documentoInstancia = new DocumentoInstanciaXBRL();
            var manejadorErrores = new ManejadorErroresCargaTaxonomia();

            var resultadoOperacion = new ResultadoOperacionDto();

            documentoInstancia.ManejadorErrores = manejadorErrores;
            //documentoInstancia.Taxonomia = DocumentoInstanciaService.ObtenerTaxonomiaIFRS_BMV();
            documentoInstancia.Cargar(documentoUrl);
            /*if (manejadorErrores.PuedeContinuar())
            {*/
            IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
            IValidadorDocumentoInstancia validador = new ValidadorDocumentoInstancia();
            grupoValidadores.ManejadorErrores = manejadorErrores;
            grupoValidadores.DocumentoInstancia = documentoInstancia;
            grupoValidadores.AgregarValidador(validador);
            grupoValidadores.ValidarDocumento();

            var xbrlViewerService = new XbrlViewerService();
            resultadoOperacion.Resultado = true;
            resultadoOperacion.InformacionExtra = xbrlViewerService.PreparaDocumentoParaVisor(documentoInstancia);
            (resultadoOperacion.InformacionExtra as DocumentoInstanciaXbrlDto).IdEmpresa = IdEmpresa;

            /*}*/

            var jsonResult = this.Json(resultadoOperacion);
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
        public IHttpActionResult GuardarDocumentoInstanciaXbrl(string documentoInstanciaJSON)
        {
            var documentoInstanciaDto =
                (DocumentoInstanciaXbrlDto)
                    JsonConvert.DeserializeObject(documentoInstanciaJSON, typeof(DocumentoInstanciaXbrlDto));
            XbrlViewerService.AjustarIdentificadoresDimensioneConQname(documentoInstanciaDto);

            var jsonResult = this.Json(DocumentoInstanciaService.GuardarDocumentoInstanciaXbrl(documentoInstanciaDto, IdUsuarioExec));
            return jsonResult;
        }

        /// <summary>
        /// Importa la información de un documento instancia a partir de un documento excel
        /// </summary>
        /// <returns>El resultado de la operación en formato JSON</returns>
        [HttpPost]
        [Authorize]
        [Route("ImportarDocumentoInstanciaExcel")]
        public async Task<IHttpActionResult> ImportarDocumentoInstanciaExcel()
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

            string archivo = provider.FileData.Select(x => x.LocalFileName).FirstOrDefault();
            var sDocumentoInstancia = provider.FormData["documentoInstancia"];
            if (archivo != null && sDocumentoInstancia != null)
            {

                var documentoInstancia = (DocumentoInstanciaXbrlDto)JsonConvert.DeserializeObject(sDocumentoInstancia,typeof(DocumentoInstanciaXbrlDto));
                using (var archivoStream = new FileStream(archivo, FileMode.Open, FileAccess.Read))
                {
                    resultado = DocumentoInstanciaService.ImportarFormatoExcel(archivoStream, documentoInstancia, IdUsuarioExec);
                }
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = "Faltan parámetros en la invocación";
            }
            var jsonResult = this.Json(resultado);
            return jsonResult;
        }



        /// <summary>
        /// Importa la información de un documento word y obtiene su representación en html
        /// </summary>
        /// <param name="form">los datos de invocación del controller</param>
        /// <returns>El resultado de la operación en formato JSON</returns>
        [HttpPost]
        [Authorize]
        [Route("ImportarDocumentoWord")]
        public IHttpActionResult ImportarDocumentoWord(FormCollection form)
        {
           ResultadoOperacionDto resultado = new ResultadoOperacionDto();
           /*
          if (Request.Files["archivoDOC"] != null && Request.Files["archivoDOC"].ContentLength > 0)
          {
              HttpPostedFileBase archivo = Request.Files["archivoDOC"];

              resultado = DocumentoInstanciaService.ImportarDocumentoWord(archivo.InputStream);
          }
          else
          {
              resultado.Resultado = false;
              resultado.Mensaje = "Faltan parámetros en la invocación";
          }*/

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
        public IHttpActionResult ActualizarUsuariosAsignadosDocumentoInstancia(long idDocumentoInstancia, string usuariosAsignadosJSON)
        {
            var usuariosAsignados = (IList<UsuarioDocumentoInstancia>)JsonConvert.DeserializeObject(usuariosAsignadosJSON, typeof(List<UsuarioDocumentoInstancia>));

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
        public IHttpActionResult BuscarUsuariosParaCompartir(long idDocumentoInstancia)
        {

            ResultadoOperacionDto resultado = UsuarioService.ObtenerUsuariosPorEmisorayNombre(IdEmpresa, null);
            ResultadoOperacionDto resultadoAsignados = DocumentoInstanciaService.ObtenerUsuariosDeDocumentoInstancia(idDocumentoInstancia, IdEmpresa, IdUsuarioExec);

            var resultados = new Dictionary<string, List<IDictionary<string, object>>>();
            var listaPorAsignar = new List<IDictionary<string, object>>();
            var listaAsignados = new List<IDictionary<string, object>>();

            IList<UsuarioDocumentoInstancia> usuariosAsignados = (IList<UsuarioDocumentoInstancia>)resultadoAsignados.InformacionExtra;
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
        /// <param name="idDocumentoInstancia">El identificador del documento instancia a consultar.</param>
        /// <returns>El listado de versiones del documento instancia en formato JSON.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenerVersionesDocumentoInstancia")]
        public IHttpActionResult ObtenerVersionesDocumentoInstancia(long idDocumentoInstancia)
        {

            var listaResultados = new List<IDictionary<string, object>>();

            ResultadoOperacionDto resultado = DocumentoInstanciaService.ObtenerVersionesDocumentoInstancia(idDocumentoInstancia);

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
        public IHttpActionResult BloquearLiberarDocumentoInstancia(long idDocumentoInstancia, bool bloquear)
        {
            return this.Json(DocumentoInstanciaService.BloquearLiberarDocumentoInstancia(idDocumentoInstancia, bloquear, IdUsuarioExec));
        }

        /// <summary>
        /// Implementación de un ContractResolver para indicar qué propiedades deben ser excluidas de la serialización a JSON.
        /// <author>José Antonio Huizar Moreno</author>
        /// <version>1.0</version>
        /// </summary>
        private class CatalogoElementosContractResolver : DefaultContractResolver
        {
            protected override IList<JsonProperty> CreateProperties(Type type, MemberSerialization memberSerialization)
            {
                IList<JsonProperty> properties = base.CreateProperties(type, memberSerialization);

                properties = properties.Where(p => (!p.PropertyName.Equals("REPOSITORIO_HECHOS") && !p.PropertyName.Equals("FORMATO"))).ToList();

                return properties;
            }
        }


        /// <summary>
        /// Evita que una sesión caduque, se puede estar enviando solicitudes a este controller para evitar
        /// que una sesión caduque
        /// </summary>
        public IHttpActionResult PingSession()
        {
            return this.Json("OK");
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
        public IHttpActionResult CargarDocumentoInstanciaXbrl(long? idDocumentoInstancia, int? numeroVersion)
        {
            var viewerService = new XbrlViewerService();
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
                    var taxonomiaDto = CacheTaxonomia.ObtenerTaxonomia(instanciaDto.DtsDocumentoInstancia);
                    if (taxonomiaDto == null)
                    {
                        var taxo = new TaxonomiaXBRL { ManejadorErrores = new ManejadorErroresCargaTaxonomia() };
                        foreach (var dts in instanciaDto.DtsDocumentoInstancia)
                        {
                            if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                            {
                                taxo.ProcesarDefinicionDeEsquema(dts.HRef);
                            }
                        }
                        taxo.CrearArbolDeRelaciones();
                        taxonomiaDto = viewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxo);
                        CacheTaxonomia.AgregarTaxonomia(instanciaDto.DtsDocumentoInstancia, taxonomiaDto);
                        EstrategiaCacheTaxonomia.AgregarTaxonomia(DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(instanciaDto.DtsDocumentoInstancia), taxo);
                    }
                    (resultadoOperacion.InformacionExtra as DocumentoInstanciaXbrlDto).Taxonomia = taxonomiaDto;
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
    }
}