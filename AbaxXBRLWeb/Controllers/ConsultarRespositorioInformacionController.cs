using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Converter;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using AbaxXBRLWeb.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Web.UI;
using System.Web.UI.WebControls;
using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;
using System.Threading;
using System.Globalization;
using NPOI.SS.Util;
using AbaxXBRL.Taxonomia;
using NPOI.HSSF.UserModel;
using AbaxXBRL.Taxonomia.Linkbases;
using System.Drawing;
using AbaxXBRLBlockStore.Services;
using AbaxXBRLCore.Common.Entity;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controlador para las páginas relacionadas a la administración de las consultas del repositorio en MongoDB
    /// <author>Luis Angel Morales Gonzalez</author>
    /// </summary>
    [RoutePrefix("ConsultaRespositorioInformacion")]
    [Authorize]
    public class ConsultaRespositorioInformacionController : BaseController
    {


        /// <summary>
        /// Servicio para el manejo de las consultas del repositorio de mongo
        /// </summary>
        private BlockStoreHechoService BlockStoreHechoService;


        /// <summary>
        /// Servicio para el manejo de las consultas del repositorio de mongo
        /// </summary>
        private IConsultaRepositorioService ConsultaRepositorioService;


        /// <summary>
        /// Constructir del controlador de peticiones para las consultas de informacion al repositorio
        /// </summary>
        public ConsultaRespositorioInformacionController()
            : base()
        {
            try
            {
                BlockStoreHechoService = (BlockStoreHechoService)ServiceLocator.ObtenerFabricaSpring().GetObject("BlockStoreHechoService");
                ConsultaRepositorioService = (IConsultaRepositorioService)ServiceLocator.ObtenerFabricaSpring().GetObject("ConsultaRepositorioService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
            
        }


        /// <summary>
        /// Consulta la informacion de los hechos relacionados a los filtros de consulta
        /// </summary>
        /// <returns>Resultado de la operacion en la informacion extra con un listado de hechos</returns>
        [HttpPost]
        [Route("ConsultarRepositorio")]
        public IHttpActionResult ConsultarRepositorio()
        {

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {

                var filtrosConsulta = getFormKeyValue("consulta");
                var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
                var filtrosConsultaHecho = JsonConvert.DeserializeObject<EntFiltroConsultaHecho>(filtrosConsulta, settings);

                resultado = BlockStoreHechoService.ConsultarRepositorio(filtrosConsultaHecho);
            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
            }


            return Ok(resultado);
        }


        /// <summary>
        /// Obtiene la lista de los conceptos por taxonomia
        /// </summary>
        [HttpPost]
        [Route("ConsultarConceptosPorTaxonomia")]
        public IHttpActionResult ConsultarConceptosPorTaxonomia()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                var espacioNombresTaxonomia = getFormKeyValue("EspacioNombresTaxonomia");
                resultado = BlockStoreHechoService.ConsultarConceptos(espacioNombresTaxonomia);
            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene la lista de los espacios de nombres de las taxonomias registradas
        /// </summary>
        [HttpPost]
        [Route("ConsultarEspacioNombresTaxonomia")]
        public IHttpActionResult ConsultarEspacioNombresTaxonomia()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                resultado = BlockStoreHechoService.ConsultarTaxonomias();
            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
            }

            return Ok(resultado);
        }



        /// <summary>
        /// Consulta las empresas que han reportado  
        /// </summary>
        [HttpPost]
        [Route("ConsultarEntidades")]
        public IHttpActionResult ObtenerListaEntidades()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                resultado = BlockStoreHechoService.ConsultarEmisoras();
            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Consulta las unidades que se tienen reportadas
        /// </summary>
        [HttpPost]
        [Route("ConsultarUnidades")]
        public IHttpActionResult ObtenerUnidades()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                resultado = BlockStoreHechoService.ConsultarUnidades();
            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
            }

            return Ok(resultado);
        }


        /// <summary>
        /// Consulta las empresas que han reportado  
        /// </summary>
        [HttpPost]
        [Route("ConsultarDimensionesPorConcepto")]
        public IHttpActionResult ConsultarDimensionesPorConcepto()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                var idConcepto = getFormKeyValue("IdConcepto");
                resultado = BlockStoreHechoService.ConsultarDimensionesPorConcepto(idConcepto);
            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
            }


            return Ok(resultado);
        }


        /// <summary>
        /// Registra una consulta de informacion al repositorio  
        /// </summary>
        [HttpPost]
        [Route("RegistrarConsultaInformacion")]
        public IHttpActionResult RegistrarConsultaInformacion()
        {

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };
            return Ok(resultado);
        }

        /// <summary>
        /// Retorna las consultas al repositorio de información registradas en el catalogo.
        /// </summary>
        /// <returns>Respuesta a la solicitud.</returns>
        [HttpPost]
        [Route("ObtenerListadoConsultasRepositorio")]
        public IHttpActionResult ObtenerListadoConsultasRepositorio()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                
                resultado.InformacionExtra = ConsultaRepositorioService.ObtenConsultasRepositorioDtos(IdUsuarioExec);
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
        /// Retorna un archivo de Excel con los datos en el catalogo de consultas al repositorio.
        /// </summary>
        /// <returns>Respuesta a la solicitud.</returns>
        [HttpPost]
        [Route("ObtenerReporteExcelConsultasRepositorio")]
        public IHttpActionResult ObtenerReporteExcelConsultasRepositorio()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                resultado = ConsultaRepositorioService.ObtenRegistrosReporteExcel(IdUsuarioExec, IdEmpresa);
                if (!resultado.Resultado)
                {
                    return Ok(resultado);
                }
                var dtos = resultado.InformacionExtra as IList<ConsultaRepositorioCnbvDto>;
                Dictionary<String, String> columns = new Dictionary<String, String>() { 
                    { "Nombre", "Nombre Consulta" }, 
                    { "Descripcion", "Descripción Consulta" }, 
                    { "FechaCreacion", "Fecha Creación" }, 
                    { "Usuario", "Usuario" },
                    { "Consulta", "Consulta" }
                };
                return this.ExportDataToExcel("Index", dtos, "ConsultasRepositorio.xls", columns);
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
        /// Borra un registsro de consulta al repositorio.
        /// </summary>
        /// <returns>Respuesta a la solicitud.</returns>
        [HttpPost]
        [Route("BorrarConsultaRepositorio")]
        public IHttpActionResult BorrarConsultaRepositorio()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var param = getFormKeyValue("id");
                var idConsultaRepositorio = Int64.Parse(param);
                resultado = ConsultaRepositorioService.EliminaConsultaRepositorio(idConsultaRepositorio, IdUsuarioExec, IdEmpresa);
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
        /// Persiste la informacion de una entidad de ConsultaRepositorio.
        /// </summary>
        /// <returns>Respuesta a la solicitud.</returns>
        [HttpPost]
        [Route("PersistirConsultaRepositorio")]
        public IHttpActionResult PersistirConsultaRepositorio()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var param = getFormKeyValue("editando");
                var editando = Boolean.Parse(param);
                var dto = new ConsultaRepositorioCnbvDto();
                param = getFormKeyValue("json");
                JsonConvert.PopulateObject(param, dto);
                if (editando)
                {
                    resultado.InformacionExtra = ConsultaRepositorioService.ActualizarConsultaRepositorio(dto, IdUsuarioExec, IdEmpresa);
                }
                else 
                {
                    resultado.InformacionExtra = ConsultaRepositorioService.GuardaConsultaRepositorio(dto, IdUsuarioExec, IdEmpresa);
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

    }
}