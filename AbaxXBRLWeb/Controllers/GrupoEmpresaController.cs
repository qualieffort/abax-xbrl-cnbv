using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controlador que expone los servicio para la administración de gurpos de empresa.
    /// </summary>
    [RoutePrefix("GrupoEmpresaController")]
    [Authorize]
    public class GrupoEmpresaController : BaseController
    {
        /// <summary>
        /// Servicio para la administración de grupos de empresas.
        /// </summary>
        IGrupoEmpresaService GrupoEmpresaService { get; set; }

        /// <summary>
        /// Utilería auxiliar para el parseo de información entre entidades y dtos.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();

        /// <summary>
        /// Constructor por defecto que inicializa los servicios.
        /// </summary>
        public GrupoEmpresaController() 
        {
            try
            {
                GrupoEmpresaService = (IGrupoEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("GrupoEmpresaService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }
        /// <summary>
        /// Obtiene el listado de grupos de empresas existentes.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("ConsultaGrupoEmpresas")]
        [HttpPost]
        public IHttpActionResult ConsultaGrupoEmpresas()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var entidades = GrupoEmpresaService.ObtenTodosGruposEmpresa();
                var dtos = CopiadoUtil.Copia(entidades);
                resultado.InformacionExtra = dtos;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene el listado de grupos de empresas existentes.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("BorraGrupoEmpresa")]
        [HttpPost]
        public IHttpActionResult BorraGrupoEmpresa()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("id");
                var idGrupoEmpresa = Int64.Parse(param);
                resultado = GrupoEmpresaService.EliminaGrupoEmpresa(idGrupoEmpresa, IdUsuarioExec,IdEmpresa);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene el listado de grupos de empresas existentes.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("GuardarGrupoEmpresa")]
        [HttpPost]
        public IHttpActionResult GuardarGrupoEmpresa()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("editando");
                var editando = Boolean.Parse(param);
                param = getFormKeyValue("json");
                var dto = new GrupoEmpresaDto();
                JsonConvert.PopulateObject(param, dto);

                if (editando)
                {
                    resultado = GrupoEmpresaService.ActualizarGrupoEmpresa(dto, IdUsuarioExec,IdEmpresa);
                }
                else
                {
                    resultado = GrupoEmpresaService.GuardaGrupoEmpresa(dto, IdUsuarioExec,IdEmpresa);
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

        /// <summary>
        /// Obtiene el listado de grupos de empresas existentes.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("ExportarExcelGruposEmpresas")]
        [HttpPost]
        public IHttpActionResult ExportarExcelGruposEmpresas()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                resultado = GrupoEmpresaService.ObtenRegistrosReporte(IdUsuarioExec,IdEmpresa);
                if (!resultado.Resultado)
                {
                    return Ok(resultado);
                }
                var dtos = resultado.InformacionExtra as IList<GrupoEmpresaExcelDto>;
                Dictionary<String, String> columns = new Dictionary<String, String>() { 
                    { "Nombre", "Nombre Grupo" }, 
                    { "Descripcion", "Descripción Grupo" }, 
                    { "Empresa", "Empresa" }, 
                    { "RazonSocial", "Razón Social" }
                };
                return this.ExportDataToExcel("Index", dtos, "gruposEmpresas.xls", columns);

            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene el listado de grupos de empresas existentes.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("ObtenEmpresasAsignables")]
        [HttpPost]
        public IHttpActionResult ObtenEmpresasAsignables()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var dtos = GrupoEmpresaService.ObtenEmpresasAsignables();
                resultado.InformacionExtra = dtos;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene el listado de empresas asignadas a un grupo empresa en particular.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("ObtenEmpresasAsignadas")]
        [HttpPost]
        public IHttpActionResult ObtenEmpresasAsignadas()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("idPropietario");
                var idGrupoEmpresa = Int64.Parse(param);
                var dtos = GrupoEmpresaService.ObtenEmpresasAsignadas(idGrupoEmpresa);
                resultado.InformacionExtra = dtos;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene el listado de grupos de empresas existentes.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("ObtenGruposEmpresasAsignables")]
        [HttpPost]
        public IHttpActionResult ObtenGruposEmpresasAsignables()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var dtos = GrupoEmpresaService.ObtenGruposAsignables();
                resultado.InformacionExtra = dtos;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene el listado de grupos de empresas asignados a una empresa en particuar.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("ObtenGruposEmpresasAsignados")]
        [HttpPost]
        public IHttpActionResult ObtenGruposEmpresasAsignados()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("idPropietario");
                var idEmpresa = Int64.Parse(param);
                var dtos = GrupoEmpresaService.ObtenGruposEmpresasAsignados(idEmpresa);
                resultado.InformacionExtra = dtos;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Persiste las relaciones que tiene un grupo de empresas con las empresas.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("GuardarEmpresasAsignadasGrupoEmpresas")]
        [HttpPost]
        public IHttpActionResult GuardarEmpresasAsignadasGrupoEmpresas()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("idPropietario");
                var idGrupoEmpresa = Int64.Parse(param);
                param = getFormKeyValue("listaJson");
                var listaIdsEmpresa = new List<long>();
                JsonConvert.PopulateObject(param, listaIdsEmpresa);
                resultado = GrupoEmpresaService.ActualizaRelacionGrupoEmpresas(idGrupoEmpresa, listaIdsEmpresa, IdUsuarioExec, IdEmpresa);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Guarda las relaciones que tiene una empresa con los grupos de empresas..
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("GuardarGruposEmpresasAsingadosEmpresa")]
        [HttpPost]
        public IHttpActionResult GuardarGruposEmpresasAsingadosEmpresa()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("idPropietario");
                var idEmpresa = Int64.Parse(param);
                param = getFormKeyValue("listaJson");
                var listaIdsGruposEmpresa = new List<long>();
                JsonConvert.PopulateObject(param, listaIdsGruposEmpresa);
                resultado = GrupoEmpresaService.ActualizaRelacionEmpresa(IdEmpresa, listaIdsGruposEmpresa, IdUsuarioExec, IdEmpresa);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return Ok(resultado);
        }

    }
}