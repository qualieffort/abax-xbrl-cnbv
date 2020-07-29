using System.Diagnostics;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using Newtonsoft.Json;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLWeb.Models;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLWeb.Controllers
{

    /// <summary>
    ///     Controlador que administra el funcionamiento de las pantalla que definen a una ListaNotificacion.
    ///     <author>Juan Carlos HUizar Moreno</author>
    ///     <version>1.0</version>
    /// </summary>
    [RoutePrefix("ListaNotificacion")]
    [Authorize]
    public class ListaNotificacionController : BaseController
    {

        #region Propiedades
        /// <summary>
        /// Interface del Servicio para realizar operaciones CRUD relacionadas con la ListaNotificacion.
        /// </summary>
        public IListaNotificacionService ListaNotificacionService { get; set; }
        #endregion

        #region Constructor
        /// <summary>
        /// Constructor
        /// </summary>
        public ListaNotificacionController()
        {
            try
            {
                ListaNotificacionService = (IListaNotificacionService)ServiceLocator.ObtenerFabricaSpring().GetObject("ListaNotificacionService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }
        #endregion

        #region WebServices ListaNotificacion

        [Route("ObtenerListasNotificacion")]
        [HttpPost]
        public IHttpActionResult ObtenerListasNotificacion()
        {
            return Ok(ListaNotificacionService.ObtenerListasNotificacion());
        }

        [Route("GuardarListaNotificacion")]
        [HttpPost]
        public IHttpActionResult GuardarListaNotificacion()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = false };

            var jsonString = getFormKeyValue("json");
            var parametroSistema = new ListaNotificacionDto();
            JsonConvert.PopulateObject(jsonString, parametroSistema);

            resultado = ListaNotificacionService.GuardarListaNotificacion(parametroSistema, IdUsuarioExec, IdEmpresa);

            return Ok(resultado);
        }

        [Route("BorrarListaNotificacion")]
        [HttpPost]
        public IHttpActionResult BorrarListaNotificacion()
        {
            var id = Convert.ToInt64(getFormKeyValue("id"));

            return Ok(ListaNotificacionService.BorrarListaNotificacion(id, IdUsuarioExec, IdEmpresa));
        }

        [Route("ExportarListasNotificacion")]
        [HttpPost]
        public IHttpActionResult ExportarListasNotificacion()
        {
            var listas = ListaNotificacionService.ObtenerListasNotificacion();

            ListaNotificacionService.RegistrarAccionAuditoriaExportarExcelListas(IdUsuarioExec, IdEmpresa);

            Dictionary<string, string> columns = new Dictionary<string, string>
            {
                { "Nombre", "Nombre" },
                { "Descripcion", "Descripción" },
                { "ClaveLista", "Clave" },
                { "TituloMensaje", "Título del Mensaje" }
            };

            return this.ExportDataToExcel("Index", listas, "Listas.xls", columns);
        }

        #endregion

        #region WebServices Destinatario Notificacion

        [Route("ObtenerDestinatariosNotificacion")]
        [HttpPost]
        public IHttpActionResult ObtenerDestinatariosNotificacion()
        {
            var id = Convert.ToInt64(getFormKeyValue("id"));

            return Ok(ListaNotificacionService.ObtenerDestinatariosNotificacion(id));
        }

        [Route("GuardarDestinatarioNotificacion")]
        [HttpPost]
        public IHttpActionResult GuardarDestinatarioNotificacion()
        {
            var jsonString = getFormKeyValue("json");
            var parametroSistema = new DestinatarioNotificacionDto();
            JsonConvert.PopulateObject(jsonString, parametroSistema);

            var resultado = ListaNotificacionService.GuardarDestinatarioNotificacion(parametroSistema, IdUsuarioExec, IdEmpresa);

            return Ok(resultado);
        }

        [Route("BorrarDestinatarioNotificacion")]
        [HttpPost]
        public IHttpActionResult BorrarDestinatarioNotificacion()
        {
            var id = Convert.ToInt64(getFormKeyValue("id"));

            return Ok(ListaNotificacionService.BorrarDestinatarioNotificacion(id, IdUsuarioExec, IdEmpresa));
        }

        [Route("ExportarDestinatariosNotificacion")]
        [HttpPost]
        public IHttpActionResult ExportarDestinatariosNotificacion()
        {
            var id = Convert.ToInt64(getFormKeyValue("id"));
            var destinatarios = ListaNotificacionService.ObtenerDestinatariosNotificacion(id);

            ListaNotificacionService.RegistrarAccionAuditoriaExportarExcelDestinatarios(id, IdUsuarioExec, IdEmpresa);

            Dictionary<string, string> columns = new Dictionary<string, string>
            {
                { "Nombre", "Nombre" },
                { "CorreoElectronico", "Correo Electrónico" }
            };

            return this.ExportDataToExcel("Index", destinatarios, "Destinatarios.xls", columns);
        }

        #endregion
    }
}