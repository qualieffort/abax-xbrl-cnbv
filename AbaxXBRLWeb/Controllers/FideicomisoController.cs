using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controlador para las páginas relacionadas a la administración de documentos de fideicomisos
    /// <author>Oscar Ernesto Loyola Sánchez</author>
    /// </summary>
    [RoutePrefix("Fideicomiso")]
    [Authorize]
    public class FideicomisoController : BaseController
    {
        /// <summary>
        /// Servicio para la administración de fideicomisos.
        /// </summary>
        private IFideicomisoService FideicomisoService {get; set;}
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public FideicomisoController()
        {
            try
            {
                FideicomisoService = (IFideicomisoService)ServiceLocator.ObtenerFabricaSpring().GetObject("FideicomisoService"); 
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }

        /// <summary>
        /// Registra un nuevo fideicomiso.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [Route("RegistrarFideicomiso")]
        [HttpPost]
        public IHttpActionResult RegistrarFideicomiso()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var param = getFormKeyValue("json");
                var fideicomiso = new FideicomisoDto();
                JsonConvert.PopulateObject(param, fideicomiso);
                fideicomiso.IdEmpresa = IdEmpresa;
                FideicomisoService.Insertar(fideicomiso);
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = ex.Message;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Actualiza los datos de un fideicomiso fideicomiso.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [Route("ActualizarFideicomiso")]
        [HttpPost]
        public IHttpActionResult ActualizarFideicomiso()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var param = getFormKeyValue("json");
                var fideicomiso = new FideicomisoDto();
                JsonConvert.PopulateObject(param, fideicomiso);
                fideicomiso.IdEmpresa = IdEmpresa;
                FideicomisoService.Actualizar(fideicomiso);
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = ex.Message;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Elimina el fideicomiso indicado fideicomiso.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [Route("EliminarFideicomiso")]
        [HttpPost]
        public IHttpActionResult EliminarFideicomiso()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var param = getFormKeyValue("IdFideicomiso");
                var idFideicomiso = Int64.Parse(param);
                FideicomisoService.Eliminar(idFideicomiso);
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = ex.Message;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Elimina el fideicomiso indicado fideicomiso.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [Route("ObtenListaFideicomisos")]
        [HttpPost]
        public IHttpActionResult ObtenListaFideicomisos()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var elementos = FideicomisoService.ObtenerLista(IdEmpresa);
                resultado.InformacionExtra = elementos;
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = ex.Message;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Elimina el fideicomiso indicado fideicomiso.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [Route("ExportarExcel")]
        [HttpPost]
        public IHttpActionResult ExportarExcel()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var elementos = FideicomisoService.ObtenerLista(IdEmpresa);
                Dictionary<String, String> columns = new Dictionary<String, String>() { { "ClaveFideicomiso", "ClaveFideicomiso" }, { "Descripcion", "Descripcion" } };
                return this.ExportDataToExcel("IndexFideicomiso", elementos, "fideicomiso.xls", columns);
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = ex.Message;
                return Ok(resultado);
            }
        }
    }
}