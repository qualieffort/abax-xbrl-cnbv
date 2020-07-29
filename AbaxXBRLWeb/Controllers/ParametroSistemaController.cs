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
    ///     Controlador que administra el funcionamiento de las pantalla que definen a una ParametroSistema.
    ///     <author>Juan Carlos HUizar Moreno</author>
    ///     <version>1.0</version>
    /// </summary>
    [RoutePrefix("ParametroSistema")]
    [Authorize]
    public class ParametroSistemaController : BaseController
    {

        #region Propiedades
        /// <summary>
        /// Interface del Servicio para realizar operaciones CRUD relacionadas con la ParametroSistema.
        /// </summary>
        public IParametroSistemaService ParametroSistemaService { get; set; }
        #endregion

        #region Constructor
        /// <summary>
        /// Constructor
        /// </summary>
        public ParametroSistemaController()
        {
            try
            {
                ParametroSistemaService = (IParametroSistemaService)ServiceLocator.ObtenerFabricaSpring().GetObject("ParametroSistemaService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }
        #endregion

        #region WebServices ParametroSistemas
        /// <summary>
        /// Servicio para la consulta de las empresas existentes.
        /// </summary>
        /// <returns>Lista de empresas existentes</returns>
        [Route("Obtener")]
        [HttpPost]
        public IHttpActionResult Obtener()
        {
            return Ok(ParametroSistemaService.Obtener());
        }

        [Route("Actualizar")]
        [HttpPost]
        public IHttpActionResult Actualizar()
        {
            var jsonString = getFormKeyValue("json");
            var parametroSistema = new ParametroSistema();
            JsonConvert.PopulateObject(jsonString, parametroSistema);

            var resultado = ParametroSistemaService.ActualizarParametroSistema(parametroSistema, IdUsuarioExec, IdEmpresa);

            return Ok(resultado);
        }

        [Route("Exportar")]
        [HttpPost]
        public IHttpActionResult Exportar()
        {
            var parametros = ParametroSistemaService.Obtener();

            ParametroSistemaService.RegistrarAccionAuditoriaExportarExcel(IdUsuarioExec, IdEmpresa);

            Dictionary<string, string> columns = new Dictionary<string, string>()
            {
                { "Nombre", "Nombre" },
                { "Descripcion", "Descripción" },
                { "Valor", "Valor" }
            };

            return this.ExportDataToExcel("Index", parametros, "ParametrosSistema.xls", columns);
        }
        #endregion
    }
}