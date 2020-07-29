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
using AbaxXBRLCore.ExportGeneric;
using AbaxXBRLCore.Export;
using AbaxXBRLCore.CellStore.Services.Impl;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controlador para las páginas relacionadas a la administración de las consultas del repositorio en MongoDB
    /// <author>Luis Angel Morales Gonzalez</author>
    /// </summary>
    [RoutePrefix("ConsultaRepositorioInformacion")]
    
    public class ConsultaRepositorioInformacionController : BaseController
    {


        /// <summary>
        /// Servicio para el manejo de las consultas del repositorio de AbaxCellStore
        /// </summary>
        private AbaxXBRLCellStoreService AbaxXBRLCellStoreService;


        /// <summary>
        /// Servicio para el manejo de las consultas del repositorio de mongo
        /// </summary>
        private IConsultaRepositorioService ConsultaRepositorioService;

        /// <summary>
        /// Servicio para obtener la información de las emrpesas de un grupo
        /// </summary>
        public IGrupoEmpresaService GrupoEmpresaService { get; set; }


        /// <summary>
        /// Constructir del controlador de peticiones para las consultas de informacion al repositorio
        /// </summary>
        public ConsultaRepositorioInformacionController()
            : base()
        {
            try
            {
                AbaxXBRLCellStoreService = (AbaxXBRLCellStoreService)ServiceLocator.ObtenerFabricaSpring().GetObject("AbaxXBRLCellStoreService");
                ConsultaRepositorioService = (IConsultaRepositorioService)ServiceLocator.ObtenerFabricaSpring().GetObject("ConsultaRepositorioService");
                GrupoEmpresaService = (IGrupoEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("GrupoEmpresaService");
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
                var paginaRequerida = getFormKeyValue("pagina");
                var numeroRegistros = getFormKeyValue("numeroRegistros");

                var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
                var filtrosConsultaHecho = JsonConvert.DeserializeObject<EntFiltroConsultaHecho>(filtrosConsulta, settings);

                /**
                var filtrosConsultaHecho = new EntFiltroConsultaHecho();
                filtrosConsultaHecho.conceptos = new EntConcepto[1];
                filtrosConsultaHecho.conceptos[0] = new EntConcepto();
                filtrosConsultaHecho.conceptos[0].Id = "ifrs-full_ChangesInEquity";
                filtrosConsultaHecho.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
                filtrosConsultaHecho.conceptos[0].dimension=new EntInformacionDimensional[1];
                filtrosConsultaHecho.conceptos[0].dimension[0] = new EntInformacionDimensional();
                filtrosConsultaHecho.conceptos[0].dimension[0].Explicita = true;
                filtrosConsultaHecho.conceptos[0].dimension[0].QNameDimension = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis";
                filtrosConsultaHecho.conceptos[0].dimension[0].IdDimension = "ifrs-full_ComponentsOfEquityAxis";
                filtrosConsultaHecho.conceptos[0].dimension[0].QNameItemMiembro = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember";
                filtrosConsultaHecho.conceptos[0].dimension[0].IdItemMiembro = "ifrs-full_IssuedCapitalMember";

                filtrosConsultaHecho.filtros = new EntFiltrosAdicionales();
                filtrosConsultaHecho.filtros.entidades=new EntEntidad[1];
                filtrosConsultaHecho.filtros.entidades[0] = new EntEntidad();
                filtrosConsultaHecho.filtros.entidades[0].Id="ICA";
                filtrosConsultaHecho.filtros.periodos=new EntPeriodo[1];
                filtrosConsultaHecho.filtros.periodos[0] = new EntPeriodo();
                filtrosConsultaHecho.filtros.periodos[0].EsTipoInstante=false;
                filtrosConsultaHecho.filtros.periodos[0].Tipo=2;
                filtrosConsultaHecho.filtros.periodos[0].FechaInicio=new DateTime(2015,1,1);
                filtrosConsultaHecho.filtros.periodos[0].FechaFin=new DateTime(2015,6,30);
                

                filtrosConsultaHecho.filtros.unidades=new string[1];
                filtrosConsultaHecho.filtros.unidades[0] = "MXN";

                paginaRequerida = "1";
                numeroRegistros = "10";
                */

                resultado = AbaxXBRLCellStoreService.ConsultarRepositorio(filtrosConsultaHecho, int.Parse(paginaRequerida), int.Parse(numeroRegistros));

                ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();

                EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtrosConsultaHecho, resultado, true);
                estructuraReporteGenerico = reporteGenericoMongoDB.AgruparHechosPorPeriodo(filtrosConsultaHecho,estructuraReporteGenerico);
                resultado.InformacionExtra = estructuraReporteGenerico;

            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
                LogUtil.Error(e);
            }


            return Ok(resultado);
        }


        /// <summary>
        /// Consulta la informacion de los hechos relacionados a los filtros de consulta
        /// </summary>
        /// <returns>Resultado de la operacion en la informacion extra con un listado de hechos</returns>
        [HttpPost]
        [Route("NumeroRegistrosHechos")]
        public IHttpActionResult ObtenerNumeroRegistrosHechos()
        {

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                var filtrosConsulta = getFormKeyValue("consulta");
                //var filtrosConsulta = "{\"conceptos\":[{\"Id\":\"ifrs-full_AdministrativeExpense\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":1,\"indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_DistributionCosts\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_Inventories\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_Equity\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":2,\"esAbstracto\":false,\"dimension\":[{\"Filtro\":null,\"Explicita\":true,\"IdDimension\":\"ifrs-full_ComponentsOfEquityAxis\",\"IdItemMiembro\":\"ifrs-full_OtherReservesMember\",\"QNameDimension\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis\",\"QNameItemMiembro\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember\",\"ElementoMiembroTipificado\":null}],\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs_mx-cor_20141205_ComercioExteriorBancarios\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":5,\"indentacion\":2,\"esAbstracto\":false,\"dimension\":[{\"Filtro\":\"TOTAL\",\"Explicita\":false,\"IdDimension\":\"ifrs_mx-cor_20141205_InstitucionEje\",\"IdItemMiembro\":null,\"QNameDimension\":\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje\",\"QNameItemMiembro\":null,\"ElementoMiembroTipificado\":null}],\"Nombre\":null,\"etiqueta\":null}],\"filtros\":{\"entidades\":[\"DAIMLER\",\"AEROMEX\"],\"entidadesDiccionario\":null,\"unidades\":[\"MXN\",\"USD\"],\"gruposEntidades\":null,\"periodos\":[{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2015-01-01T00:00:00\",\"FechaFin\":\"2015-06-30T00:00:00\"},{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2015-04-01T00:00:00\",\"FechaFin\":\"2015-06-30T00:00:00\"},{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2014-04-01T00:00:00\",\"FechaFin\":\"2014-12-31T00:00:00\"}]},\"idioma\":\"es\"}";

                var numeroRegistros = getFormKeyValue("numeroRegistros");

                var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
                var filtrosConsultaHecho = JsonConvert.DeserializeObject<EntFiltroConsultaHecho>(filtrosConsulta, settings);

                var numeroDocumentos = AbaxXBRLCellStoreService.ObtenerNumeroRegistrosConsultaHechos(filtrosConsultaHecho);

                resultado.InformacionExtra = numeroDocumentos;
            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
                LogUtil.Error(e);
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene la lista de roles por taxonomia
        /// </summary>
        [HttpPost]
        [Route("ConsultarRolesPorTaxonomia")]
        public IHttpActionResult ConsultarRolesPorTaxonomia()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                var espacioNombresTaxonomia = getFormKeyValue("EspacioNombresTaxonomia");
                var idioma = getFormKeyValue("Idioma");
                resultado = AbaxXBRLCellStoreService.ConsultarRoles(espacioNombresTaxonomia, idioma);
            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene la lista de los conceptos por taxonomia y rol
        /// </summary>
        [HttpPost]
        [Route("ConsultarConceptosPorTaxonomiaYRol")]
        public IHttpActionResult ConsultarConceptosPorTaxonomiYRol()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                var espacioNombresTaxonomia = getFormKeyValue("EspacioNombresTaxonomia");
                var rolUri = getFormKeyValue("RolUri");
                resultado = AbaxXBRLCellStoreService.ConsultarConceptos(espacioNombresTaxonomia, rolUri);
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
                resultado = AbaxXBRLCellStoreService.ConsultarConceptos(espacioNombresTaxonomia);
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
                resultado = AbaxXBRLCellStoreService.ConsultarTaxonomias();
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
                var espacioNombresTaxonomia = getFormKeyValue("EspacioNombresTaxonomia");

                resultado = AbaxXBRLCellStoreService.ConsultarEmisoras();
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
        [Route("ConsultarFideicomisos")]
        public IHttpActionResult ObtenerListaFideicomisos()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };

                var entidadesJSON = getFormKeyValue("Entidades");
                var gruposEntidadesJSON = getFormKeyValue("GruposEntidades");
                
                var entidades = JsonConvert.DeserializeObject<List<String>>(entidadesJSON, settings);
                var gruposEntidades = JsonConvert.DeserializeObject<long[]>(gruposEntidadesJSON, settings);

                if (gruposEntidades != null && gruposEntidades.Length > 0)
                {
                    var listadoEntidades = GrupoEmpresaService.ObtenEmpresasAsignadas(gruposEntidades);

                    foreach (var item in listadoEntidades)
                    {
                        entidades.Add(item.Etiqueta);
                    }
                }

                resultado = AbaxXBRLCellStoreService.ConsultarFideicomisos(entidades.ToArray());
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
        [Route("ConsultarFechasReporte")]
        public IHttpActionResult ObtenerFechasReporte()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };

                var entidadesJSON = getFormKeyValue("Entidades");
                var gruposEntidadesJSON = getFormKeyValue("GruposEntidades");

                var entidades = JsonConvert.DeserializeObject<List<String>>(entidadesJSON, settings);
                var gruposEntidades = JsonConvert.DeserializeObject<long[]>(gruposEntidadesJSON, settings);

                if (gruposEntidades != null && gruposEntidades.Length > 0)
                {
                    var listadoEntidades = GrupoEmpresaService.ObtenEmpresasAsignadas(gruposEntidades);

                    foreach (var item in listadoEntidades)
                    {
                        entidades.Add(item.Etiqueta);
                    }
                }

                resultado = AbaxXBRLCellStoreService.ConsultarFechasReporte(entidades.ToArray());
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
                resultado = AbaxXBRLCellStoreService.ConsultarUnidades();
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
        [Route("ConsultarTrimestres")]
        public IHttpActionResult ObtenerTrimestres()
        {
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                resultado = AbaxXBRLCellStoreService.ConsultarTrimestres();
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
        [Route("ExportarReporteExcelConsultasRepositorio")]
        public IHttpActionResult ExportarReporteExcelConsultasRepositorio()
        { 
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                //var filtrosConsulta = "{\"conceptos\":[{\"Id\":\"ifrs-full_AdministrativeExpense\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":1,\"indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_DistributionCosts\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_Inventories\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_Equity\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":2,\"esAbstracto\":false,\"dimension\":[{\"Filtro\":null,\"Explicita\":true,\"IdDimension\":\"ifrs-full_ComponentsOfEquityAxis\",\"IdItemMiembro\":\"ifrs-full_OtherReservesMember\",\"QNameDimension\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis\",\"QNameItemMiembro\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember\",\"ElementoMiembroTipificado\":null}],\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs_mx-cor_20141205_ComercioExteriorBancarios\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":5,\"indentacion\":2,\"esAbstracto\":false,\"dimension\":[{\"Filtro\":\"TOTAL\",\"Explicita\":false,\"IdDimension\":\"ifrs_mx-cor_20141205_InstitucionEje\",\"IdItemMiembro\":null,\"QNameDimension\":\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje\",\"QNameItemMiembro\":null,\"ElementoMiembroTipificado\":null}],\"Nombre\":null,\"etiqueta\":null}],\"filtros\":{\"entidades\":[\"DAIMLER\",\"AEROMEX\"],\"entidadesDiccionario\":null,\"unidades\":[\"MXN\",\"USD\"],\"gruposEntidades\":null,\"periodos\":[{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2015-01-01T00:00:00\",\"FechaFin\":\"2015-06-30T00:00:00\"},{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2015-04-01T00:00:00\",\"FechaFin\":\"2015-06-30T00:00:00\"},{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2014-04-01T00:00:00\",\"FechaFin\":\"2014-12-31T00:00:00\"}]},\"idioma\":\"es\"}";
                var filtrosConsulta = getFormKeyValue("consulta");
                var isExportWord = getFormKeyValue("isExportWord");

                var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
                var filtrosConsultaHecho = JsonConvert.DeserializeObject<EntFiltroConsultaHecho>(filtrosConsulta, settings);

                resultado = AbaxXBRLCellStoreService.ConsultarRepositorio(filtrosConsultaHecho, -1, -1);

                if (resultado.Resultado && ((EntHecho[])resultado.InformacionExtra).Count() > 0)
                {
                    ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();

                    EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtrosConsultaHecho, resultado, true);
                    estructuraReporteGenerico = reporteGenericoMongoDB.AgruparHechosPorPeriodo(filtrosConsultaHecho, estructuraReporteGenerico);

                    CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();

                    if(isExportWord == null)
                    {
                        var contenidoDelReporteExcel = crearReporteGenerico.ExcelStream(estructuraReporteGenerico);
                        return this.ExportDatosToExcel(contenidoDelReporteExcel, "ReporteConsultaRepositorio.xls");
                    } else
                    {
                        var contenidoDelReporteWord = crearReporteGenerico.ExportWordConsultaReporte(estructuraReporteGenerico);
                        return this.ExportDatosToWord(contenidoDelReporteWord, "ReporteConsultaRepositorio.docx");
                    }

                }
                resultado.Resultado = false;

            }
            catch (Exception e)
            {
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
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
                    resultado.InformacionExtra = ConsultaRepositorioService.ActualizarConsultaRepositorio(dto, IdUsuarioExec, IdEmpresa).InformacionExtra;
                }
                else 
                {
                    resultado.InformacionExtra = ConsultaRepositorioService.GuardaConsultaRepositorio(dto, IdUsuarioExec, IdEmpresa).InformacionExtra;
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