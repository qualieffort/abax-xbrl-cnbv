using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using AbaxXBRLWeb.Controllers;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using Newtonsoft.Json;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.CellStore.Modelo;
using System.IO;
using System.Net.Http;
using System.Net;
using System.Net.Http.Headers;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Viewer.Application.Dto;

namespace AbaxXbrlNgWeb.Controllers
{
    [RoutePrefix("PersonasResponsables")]
    public class PersonasResponsablesController : BaseController
    {
        public IAuditoriaService AuditoriaService { get; set; }
        public IUsuarioService UsuarioService { get; set; }
        public IEmpresaService EmpresaService { get; set; }
        public IConsultaPersonasResponsablesService ConsultaPersonasResponsablesService { get; set; }
        public IReporteFichaTecnicaCellStoreMongoService ReporteFichaTecnicaCellStoreMongoService { get; set; }
        public IReporteFichaAdministrativaService ReporteFichaAdministrativaService { get; set; }
        public IReporteCellStoreMongoService ReporteCellStoreMongoService { get; set; }

        /// <summary>
        /// Utilería auxiliar para el copiado de entidades a dtos.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();

        public PersonasResponsablesController()
        {
            try
            {
                AuditoriaService = (IAuditoriaService)ServiceLocator.ObtenerFabricaSpring().GetObject("AuditoriaService");
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
                EmpresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
                ConsultaPersonasResponsablesService = (IConsultaPersonasResponsablesService)ServiceLocator.ObtenerFabricaSpring().GetObject("ConsultaPersonasResponsablesService");
                ReporteFichaTecnicaCellStoreMongoService = (IReporteFichaTecnicaCellStoreMongoService)ServiceLocator.ObtenerFabricaSpring().GetObject("ReporteFichaTecnicaCellStoreMongoService");
                ReporteFichaAdministrativaService = (IReporteFichaAdministrativaService)ServiceLocator.ObtenerFabricaSpring().GetObject("ReporteFichaAdministrativaService");
                ReporteCellStoreMongoService = (IReporteCellStoreMongoService)ServiceLocator.ObtenerFabricaSpring().GetObject("ReporteCellStoreMongoService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }

        /// <summary>
        /// Servicio para la consulta de las emisoras.
        /// </summary>
        /// <returns>Lista de emisoras</returns>
        [HttpPost]
        [Authorize]
        [Route("GetEmisoras")]
        public IHttpActionResult GetEmisoras()
        {
            var usuario = UsuarioService.ObtenerUsuarioPorId(IdUsuarioExec).InformacionExtra as Usuario;

            IList<long> empresas = usuario.UsuarioEmpresa.Select(x => x.IdEmpresa).ToList();
            var emisoras = (EmpresaService.ObtenerEmpresas().InformacionExtra as List<EmpresaDto>);
            var dtos = emisoras.Where(x => empresas.Contains(x.IdEmpresa)).ToList();

            return Ok(dtos);
        }

        /// <summary>
        /// Servicio para la consulta de los modulos.
        /// </summary>
        /// <returns>Lista de modulos</returns>
        [HttpPost]
        [Authorize]
        [Route("GetModulos")]
        public IHttpActionResult GetModulos()
        {
            var modulos = AuditoriaService.ObtenerModulos().InformacionExtra as List<Modulo>;
            var dtos = CopiadoUtil.Copia(modulos);
            return Ok(dtos);
        }

        /// <summary>
        /// Servicio para la consulta de las acciones.
        /// </summary>
        /// <returns>Lista de acciones</returns>
        [HttpPost]
        [Authorize]
        [Route("GetAcciones")]
        public IHttpActionResult GetAcciones()
        {
            var acciones = AuditoriaService.ObtenerAccionesAuditable().InformacionExtra as List<AccionAuditable>;
            var dtos = CopiadoUtil.Copia(acciones);
            return Ok(dtos);
        }

        /// <summary>
        /// Servicio para la consulta de los usuarios.
        /// </summary>
        /// <returns>Lista de usuarios</returns>
        [HttpPost]
        [Authorize]
        [Route("GetUsuarios")]
        public IHttpActionResult GetUsuarios()
        {
            var usuarios = UsuarioService.ObtenerUsuarios().InformacionExtra as List<Usuario>;
            var dtos = CopiadoUtil.Copia(usuarios);
            return Ok(dtos);
        }

        private PeticionInformationDataTableDto<PersonaResponsable> ObtenPeticionDataTable()
        {
            String param;
            List<DataTableOrderColumn> orders = new List<DataTableOrderColumn>();
            for (var index = 0; index < 6; index++)
            {
                var columnKey = "order[" + index + "][column]";
                param = getFormKeyValue(columnKey);
                if (param != null)
                {
                    var dirKey = "order[" + index + "][dir]";
                    var orderItem = new DataTableOrderColumn()
                    {
                        column = Int32.Parse(param),
                        dir = getFormKeyValue(dirKey)
                    };
                    orders.Add(orderItem);
                }
            }

            var dataTableRequest = new PeticionInformationDataTableDto<PersonaResponsable>()
            {
                draw = Int32.Parse(getFormKeyValue("draw")),
                length = Int32.Parse(getFormKeyValue("length")),
                start = Int32.Parse(getFormKeyValue("start")),
                search = getFormKeyValue("search"),
                order = orders
            };
            return dataTableRequest;
        }

        private PeticionInformationDataTableDto<Administrador> ObtenPeticionAdministradorDataTable()
        {
            String param;
            List<DataTableOrderColumn> orders = new List<DataTableOrderColumn>();
            for (var index = 0; index < 6; index++)
            {
                var columnKey = "order[" + index + "][column]";
                param = getFormKeyValue(columnKey);
                if (param != null)
                {
                    var dirKey = "order[" + index + "][dir]";
                    var orderItem = new DataTableOrderColumn()
                    {
                        column = Int32.Parse(param),
                        dir = getFormKeyValue(dirKey)
                    };
                    orders.Add(orderItem);
                }
            }

            var dataTableRequest = new PeticionInformationDataTableDto<Administrador>()
            {
                draw = Int32.Parse(getFormKeyValue("draw")),
                length = Int32.Parse(getFormKeyValue("length")),
                start = Int32.Parse(getFormKeyValue("start")),
                search = getFormKeyValue("search"),
                order = orders
            };
            return dataTableRequest;
        }

        private PeticionInformationDataTableDto<ResumenInformacion4DDTO> ObtenPeticionResumenInformacion4DDataTable()
        {
            String param;
            List<DataTableOrderColumn> orders = new List<DataTableOrderColumn>();
            for (var index = 0; index < 6; index++)
            {
                var columnKey = "order[" + index + "][column]";
                param = getFormKeyValue(columnKey);
                if (param != null)
                {
                    var dirKey = "order[" + index + "][dir]";
                    var orderItem = new DataTableOrderColumn()
                    {
                        column = Int32.Parse(param),
                        dir = getFormKeyValue(dirKey)
                    };
                    orders.Add(orderItem);
                }
            }

            var dataTableRequest = new PeticionInformationDataTableDto<ResumenInformacion4DDTO>()
            {
                draw = Int32.Parse(getFormKeyValue("draw")),
                length = Int32.Parse(getFormKeyValue("length")),
                start = Int32.Parse(getFormKeyValue("start")),
                search = getFormKeyValue("search"),
                order = orders
            };
            return dataTableRequest;
        }

        /// <summary>
        /// Servicio para la consulta de los tipos de empresa existentes.
        /// </summary>
        /// <returns>Lista de tipos de empresa existentes</returns>
        [Route("GetTaxonomiasXbrl")]
        [HttpPost]
        public IHttpActionResult GetTaxonomiasXbrl()
        {
            return Ok(EmpresaService.ObtenerTaxonomiasXbrl());
        }

        /// <summary>
        /// Servicio para la consulta de las emisoras.
        /// </summary>
        /// <returns>Lista de emisoras</returns>
        [HttpPost]
        [Authorize]
        [Route("GetEmisorasByGrupoEmpresa")]
        public IHttpActionResult GetEmisorasByGrupoEmpresa()
        {
            String param = getFormKeyValue("idGrupoEmpresa");

            var idGrupoEmpresa = long.Parse(param);
            var entidades = new List<Empresa>();
            var empresas = new List<EmpresaDto>();

            entidades = EmpresaService.ObtenerEmpresasPorGrupoEmpresa(idGrupoEmpresa).InformacionExtra as List<Empresa>;
            empresas = CopiadoUtil.Copia(entidades).ToList();

            return Ok(empresas.ToList());
        }

        [HttpPost]
        [Authorize]
        [Route("GetSectores")]
        public IHttpActionResult GetSectores()
        {
            return Ok(ReporteCellStoreMongoService.ObtenerSectores());
        }

        [HttpPost]
        [Authorize]
        [Route("GetSubSectores")]
        public IHttpActionResult GetSubSectores()
        {
            string idSector = getFormKeyValue("idSector");
            return Ok(ReporteCellStoreMongoService.ObtenerSubSectores(Convert.ToInt32(idSector)));
        }

        [HttpPost]
        [Authorize]
        [Route("GetRamos")]
        public IHttpActionResult GetRamos()
        {
            string idSubSector = getFormKeyValue("idSubSector");
            return Ok(ReporteCellStoreMongoService.ObtenerRamos(Convert.ToInt32(idSubSector)));
        }

        [HttpPost]
        [Authorize]
        [Route("GetAniosIfrsReporteDescripcionSectores")]
        public IHttpActionResult GetAniosIfrsReporteDescripcionSectores()
        {
            string idSector = getFormKeyValue("idSector");
            string idSubSector = getFormKeyValue("idSubSector");
            string idRamo = getFormKeyValue("idRamo");

            List<LlaveValorDto> listaEmisoras = (List<LlaveValorDto>)ReporteCellStoreMongoService.ObtenerEmisorasPorRamo(Convert.ToInt32(idRamo)).InformacionExtra;
            String[] emisoras = listaEmisoras.Select(emisora => emisora.Valor).ToArray();
            List<LlaveValorDto> anios = (List<LlaveValorDto>)ReporteCellStoreMongoService.ObtenerAniosEnvioIFRS(emisoras).InformacionExtra;

            return Ok(anios);
        }

        [HttpPost]
        [Authorize]
        [Route("GetTrimestresIfrsReporteDescripcionSectores")]
        public IHttpActionResult GetTrimestresIfrsReporteDescripcionSectores()
        {
            string idSector = getFormKeyValue("idSector");            
            string idSubSector = getFormKeyValue("idSubSector");
            string idRamo = getFormKeyValue("idRamo");            
            string parametroAnio = getFormKeyValue("parametroAnio");

            List<int> listaAnios = new List<int>();
            listaAnios.Add(Convert.ToInt32(parametroAnio));

            List<LlaveValorDto> listaEmisoras = (List<LlaveValorDto>)ReporteCellStoreMongoService.ObtenerEmisorasPorRamo(Convert.ToInt32(idRamo)).InformacionExtra;
            String[] emisoras = listaEmisoras.Select(emisora => emisora.Valor).ToArray();
            List<LlaveValorDto> trimestres = (List<LlaveValorDto>)ReporteCellStoreMongoService.ObtenerTrimestreEnvioIFRS(emisoras, listaAnios).InformacionExtra;

            return Ok(trimestres);
        }

        [HttpPost]
        [Route("GetResumenInformacion4D")]
        public IHttpActionResult GetResumenInformacion4D()
        {

            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {

                var espacioNombres = getFormKeyValue("espacioNombres");
                var grupoEmpresa = getFormKeyValue("grupoEmpresa");
                var nombreCorto = getFormKeyValue("nombreCorto");
                var fechaReporte = getFormKeyValue("fecha");

                var dataTableRequest = ObtenPeticionResumenInformacion4DDataTable();
                dataTableRequest.filtros = new Dictionary<string, object>();

                if (!String.IsNullOrEmpty(espacioNombres))
                {
                    dataTableRequest.filtros["Taxonomia"] = espacioNombres;
                }

                IList<Empresa> listaEmpresasPorGrupo;
                List<String> listaEmpresas = new List<string>();
                String value = "";
                var key = "ClaveCotizacion: { $in: [";

                if (!String.IsNullOrEmpty(grupoEmpresa))
                {
                    listaEmpresasPorGrupo = EmpresaService.ObtenerEmpresasPorGrupoEmpresa(long.Parse(grupoEmpresa)).InformacionExtra as List<Empresa>;
                    if (listaEmpresasPorGrupo != null && listaEmpresasPorGrupo.Count > 0)
                    {
                        listaEmpresas = (from nombreEmprea in listaEmpresasPorGrupo select nombreEmprea.NombreCorto).ToList();
                    }

                    if (listaEmpresas != null && listaEmpresas.Count > 0)
                    {
                        var indice = 1;
                        foreach (var nombre in listaEmpresas)
                        {
                            if (indice < listaEmpresas.Count())
                            {
                                value = value + "'" + nombre + "' ,";
                            }
                            else
                            {
                                value = value + "'" + nombre + "'";
                            }
                            indice++;
                        }
                    }
                }

                if (!String.IsNullOrEmpty(nombreCorto))
                {
                    value = value + ", '" + nombreCorto + "'";
                }

                if (value.Length > 0)
                {
                    dataTableRequest.filtros.Add(key, value + " ]}");
                }

                String[] fechaSeparada;

                if (fechaReporte != null)
                {
                    fechaSeparada = fechaReporte.Split('-');
                    fechaReporte = fechaSeparada[2].Trim() + "/" + fechaSeparada[1].Trim() + "/" + fechaSeparada[0].Trim();
                }

                if (!String.IsNullOrEmpty(fechaReporte))
                {
                    dataTableRequest.filtros["FechaReporte"] = "'" + fechaReporte.Trim() + "'";
                }

                var paginacionDocumentos = ConsultaPersonasResponsablesService.ObtenerResumenInformacion4D(dataTableRequest);

                resultado.InformacionExtra = paginacionDocumentos;

                resultado.Resultado = true;
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                resultado.Mensaje = e.Message;
                resultado.Excepcion = e.StackTrace;
                if (e.InnerException != null)
                {
                    resultado.Mensaje += ":" + e.InnerException.Message;
                    resultado.Excepcion += ";" + e.InnerException.StackTrace;
                }

            }

            return Json(resultado.InformacionExtra);
        }

        [HttpPost]
        [Route("ExportExcelResumenInformacion4D")]
        public IHttpActionResult ExportExcelResumenInformacion4D()
        {
            IList<ResumenInformacion4DDTO> listaResumen4D = new List<ResumenInformacion4DDTO>();

            var espacioNombres = getFormKeyValue("espacioNombres");
            var grupoEmpresa = getFormKeyValue("grupoEmpresa");
            var nombreCorto = getFormKeyValue("nombreCorto");
            var fechaReporte = getFormKeyValue("fecha");

            Dictionary<String, object> parametros = new Dictionary<String, object>();

            if (espacioNombres != null)
            {
                parametros.Add("Taxonomia", espacioNombres);
            }

            IList<Empresa> listaEmpresasPorGrupo;
            List<String> listaEmpresas = new List<string>();
            String value = "";
            var key = "ClaveCotizacion: { $in: [";

            if (!String.IsNullOrEmpty(grupoEmpresa))
            {
                listaEmpresasPorGrupo = EmpresaService.ObtenerEmpresasPorGrupoEmpresa(long.Parse(grupoEmpresa)).InformacionExtra as List<Empresa>;
                if (listaEmpresasPorGrupo != null && listaEmpresasPorGrupo.Count > 0)
                {
                    listaEmpresas = (from nombreEmprea in listaEmpresasPorGrupo select nombreEmprea.NombreCorto).ToList();
                }

                if (listaEmpresas != null && listaEmpresas.Count > 0)
                {
                    var indice = 1;
                    foreach (var nombre in listaEmpresas)
                    {
                        if (indice < listaEmpresas.Count())
                        {
                            value = value + "'" + nombre + "' ,";
                        }
                        else
                        {
                            value = value + "'" + nombre + "'";
                        }
                        indice++;
                    }
                }
            }

            if (!String.IsNullOrEmpty(nombreCorto))
            {
                value = value + ", '" + nombreCorto + "'";
            }

            if (value.Length > 0)
            {
                parametros.Add(key, value + " ]}");
            }

            String[] fechaSeparada;

            if (fechaReporte != null)
            {
                fechaSeparada = fechaReporte.Split('-');
                fechaReporte = fechaSeparada[2].Trim() + "/" + fechaSeparada[1].Trim() + "/" + fechaSeparada[0].Trim();
            }

            if (!String.IsNullOrEmpty(fechaReporte))
            {
                parametros.Add("FechaReporte", "'" + fechaReporte.Trim() + "'");
            }

            listaResumen4D = ConsultaPersonasResponsablesService.ObtenerResumenInformaicon4DPorFiltro(parametros);

            return this.ExportDataToExcel("Listado", listaResumen4D, "resumen4D.xls", ResumenInformacion4DDTO.diccionarioColumnasExcel);

        }

        [HttpPost]
        [Route("GetAdministradores")]
        public IHttpActionResult GetAdministradores()
        {

            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {

                var espacioNombres = getFormKeyValue("espacioNombres");
                var grupoEmpresa = getFormKeyValue("grupoEmpresa");
                var nombreCorto = getFormKeyValue("nombreCorto");
                var fechaReporte = getFormKeyValue("fecha");

                var dataTableRequest = ObtenPeticionAdministradorDataTable();
                dataTableRequest.filtros = new Dictionary<string, object>();

                if (!String.IsNullOrEmpty(espacioNombres))
                {
                    dataTableRequest.filtros["Taxonomia"] = espacioNombres;
                }

                IList<Empresa> listaEmpresasPorGrupo;
                List<String> listaEmpresas = new List<string>();
                String value = "";
                var key = "ClaveCotizacion: { $in: [";

                if (!String.IsNullOrEmpty(grupoEmpresa))
                {
                    listaEmpresasPorGrupo = EmpresaService.ObtenerEmpresasPorGrupoEmpresa(long.Parse(grupoEmpresa)).InformacionExtra as List<Empresa>;
                    if (listaEmpresasPorGrupo != null && listaEmpresasPorGrupo.Count > 0)
                    {
                        listaEmpresas = (from nombreEmprea in listaEmpresasPorGrupo select nombreEmprea.NombreCorto).ToList();
                    }

                    if (listaEmpresas != null && listaEmpresas.Count > 0)
                    {
                        var indice = 1;
                        foreach (var nombre in listaEmpresas)
                        {
                            if (indice < listaEmpresas.Count())
                            {
                                value = value + "'" + nombre + "' ,";
                            }
                            else
                            {
                                value = value + "'" + nombre + "'";
                            }
                            indice++;
                        }
                    }
                }

                if (!String.IsNullOrEmpty(nombreCorto))
                {
                    value = value + ", '" + nombreCorto + "'";
                }

                if (value.Length > 0)
                {
                    dataTableRequest.filtros.Add(key, value + " ]}");
                }

                String[] fechaSeparada;

                if (fechaReporte != null)
                {
                    fechaSeparada = fechaReporte.Split('-');
                    fechaReporte = fechaSeparada[2].Trim() + "/" + fechaSeparada[1].Trim() + "/" + fechaSeparada[0].Trim();
                }

                if (!String.IsNullOrEmpty(fechaReporte))
                {
                    dataTableRequest.filtros["FechaReporte"] = "'" + fechaReporte.Trim() + "'";
                }

                var paginacionDocumentos = ConsultaPersonasResponsablesService.ObtenerInformacionAdministradores(dataTableRequest);

                resultado.InformacionExtra = paginacionDocumentos;

                resultado.Resultado = true;
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                resultado.Mensaje = e.Message;
                resultado.Excepcion = e.StackTrace;
                if (e.InnerException != null)
                {
                    resultado.Mensaje += ":" + e.InnerException.Message;
                    resultado.Excepcion += ";" + e.InnerException.StackTrace;
                }

            }

            return Json(resultado.InformacionExtra);
        }

        [HttpPost]
        [Route("ExportExcelAdministradores")]
        public IHttpActionResult ExportExcelAdministradores()
        {
            IList<Administrador> listaAdministradores = new List<Administrador>();

            var espacioNombres = getFormKeyValue("espacioNombres");
            var grupoEmpresa = getFormKeyValue("grupoEmpresa");
            var nombreCorto = getFormKeyValue("nombreCorto");
            var fechaReporte = getFormKeyValue("fecha");

            Dictionary<String, object> parametros = new Dictionary<String, object>();

            if (espacioNombres != null)
            {
                parametros.Add("Taxonomia", espacioNombres);
            }

            IList<Empresa> listaEmpresasPorGrupo;
            List<String> listaEmpresas = new List<string>();
            String value = "";
            var key = "ClaveCotizacion: { $in: [";

            if (!String.IsNullOrEmpty(grupoEmpresa))
            {
                listaEmpresasPorGrupo = EmpresaService.ObtenerEmpresasPorGrupoEmpresa(long.Parse(grupoEmpresa)).InformacionExtra as List<Empresa>;
                if (listaEmpresasPorGrupo != null && listaEmpresasPorGrupo.Count > 0)
                {
                    listaEmpresas = (from nombreEmprea in listaEmpresasPorGrupo select nombreEmprea.NombreCorto).ToList();
                }

                if (listaEmpresas != null && listaEmpresas.Count > 0)
                {
                    var indice = 1;
                    foreach (var nombre in listaEmpresas)
                    {
                        if (indice < listaEmpresas.Count())
                        {
                            value = value + "'" + nombre + "' ,";
                        }
                        else
                        {
                            value = value + "'" + nombre + "'";
                        }
                        indice++;
                    }
                }
            }

            if (!String.IsNullOrEmpty(nombreCorto))
            {
                value = value + ", '" + nombreCorto + "'";
            }

            if (value.Length > 0)
            {
                parametros.Add(key, value + " ]}");
            }

            String[] fechaSeparada;

            if (fechaReporte != null)
            {
                fechaSeparada = fechaReporte.Split('-');
                fechaReporte = fechaSeparada[2].Trim() + "/" + fechaSeparada[1].Trim() + "/" + fechaSeparada[0].Trim();
            }

            if (!String.IsNullOrEmpty(fechaReporte))
            {
                parametros.Add("FechaReporte", "'" + fechaReporte.Trim() + "'");
            }

            listaAdministradores = ConsultaPersonasResponsablesService.ObtenerInformacionReporteAdministradores(parametros);

            return this.ExportDataToExcel("Listado", listaAdministradores, "administradores.xls", Administrador.diccionarioColumnasExcel);

        }

        [HttpPost]
        [Route("GetPersonasResponsables")]
        public IHttpActionResult GetPersonasResponsables()
        {

            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {

                var espacioNombres = getFormKeyValue("espacioNombres");
                var grupoEmpresa = getFormKeyValue("grupoEmpresa");
                var nombreCorto = getFormKeyValue("nombreCorto");
                var fechaReporte = getFormKeyValue("fecha");

                var dataTableRequest = this.ObtenPeticionDataTable();
                dataTableRequest.filtros = new Dictionary<string, object>();

                if (!String.IsNullOrEmpty(espacioNombres))
                {
                    dataTableRequest.filtros["Taxonomia"] = espacioNombres;
                }

                IList<Empresa> listaEmpresasPorGrupo;
                List<String> listaEmpresas = new List<string>();
                String value = "";
                var key = "ClaveCotizacion: { $in: [";

                if (!String.IsNullOrEmpty(grupoEmpresa))
                {
                    listaEmpresasPorGrupo = EmpresaService.ObtenerEmpresasPorGrupoEmpresa(long.Parse(grupoEmpresa)).InformacionExtra as List<Empresa>;
                    if (listaEmpresasPorGrupo != null && listaEmpresasPorGrupo.Count > 0)
                    {
                        listaEmpresas = (from nombreEmprea in listaEmpresasPorGrupo select nombreEmprea.NombreCorto).ToList();
                    }

                    if (listaEmpresas != null && listaEmpresas.Count > 0)
                    {
                        var indice = 1;
                        foreach (var nombre in listaEmpresas)
                        {
                            if (indice < listaEmpresas.Count())
                            {
                                value = value + "'" + nombre + "' ,";
                            }
                            else
                            {
                                value = value + "'" + nombre + "'";
                            }
                            indice++;
                        }
                    }
                }

                if (!String.IsNullOrEmpty(nombreCorto))
                {
                    value = value + ", '" + nombreCorto + "'";
                }

                if (value.Length > 0)
                {
                    dataTableRequest.filtros.Add(key, value + " ]}");
                }

                String[] fechaSeparada;

                if (fechaReporte != null)
                {
                    fechaSeparada = fechaReporte.Split('-');
                    fechaReporte = fechaSeparada[2].Trim() + "/" + fechaSeparada[1].Trim() + "/" + fechaSeparada[0].Trim();
                }

                if (!String.IsNullOrEmpty(fechaReporte))
                {
                    dataTableRequest.filtros["Fecha"] = "'" + fechaReporte.Trim() + "'";
                }

                var paginacionDocumentos = ConsultaPersonasResponsablesService.ObtenerInformacionPersonasResponsables(dataTableRequest);

                resultado.InformacionExtra = paginacionDocumentos;

                resultado.Resultado = true;
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                resultado.Mensaje = e.Message;
                resultado.Excepcion = e.StackTrace;
                if (e.InnerException != null)
                {
                    resultado.Mensaje += ":" + e.InnerException.Message;
                    resultado.Excepcion += ";" + e.InnerException.StackTrace;
                }

            }

            return Json(resultado.InformacionExtra);
        }

        [HttpPost]
        [Route("ExportExcelPersonasResponsables")]
        public IHttpActionResult ExportExcelPersonasResponsables()
        {
            IList<PersonaResponsable> personaResponsable = new List<PersonaResponsable>();

            var espacioNombres = getFormKeyValue("espacioNombres");
            var grupoEmpresa = getFormKeyValue("grupoEmpresa");
            var nombreCorto = getFormKeyValue("nombreCorto");
            var fechaReporte = getFormKeyValue("fecha");

            Dictionary<String, object> parametros = new Dictionary<String, object>();

            if (espacioNombres != null)
            {
                parametros.Add("Taxonomia", espacioNombres);
            }

            IList<Empresa> listaEmpresasPorGrupo;
            List<String> listaEmpresas = new List<string>();
            String value = "";
            var key = "ClaveCotizacion: { $in: [";

            if (!String.IsNullOrEmpty(grupoEmpresa))
            {
                listaEmpresasPorGrupo = EmpresaService.ObtenerEmpresasPorGrupoEmpresa(long.Parse(grupoEmpresa)).InformacionExtra as List<Empresa>;
                if (listaEmpresasPorGrupo != null && listaEmpresasPorGrupo.Count > 0)
                {
                    listaEmpresas = (from nombreEmprea in listaEmpresasPorGrupo select nombreEmprea.NombreCorto).ToList();
                }

                if (listaEmpresas != null && listaEmpresas.Count > 0)
                {
                    var indice = 1;
                    foreach (var nombre in listaEmpresas)
                    {
                        if (indice < listaEmpresas.Count())
                        {
                            value = value + "'" + nombre + "' ,";
                        }
                        else
                        {
                            value = value + "'" + nombre + "'";
                        }
                        indice++;
                    }
                }
            }

            if (!String.IsNullOrEmpty(nombreCorto))
            {
                value = value + ", '" + nombreCorto + "'";
            }

            if (value.Length > 0)
            {
                parametros.Add(key, value + " ]}");
            }

            String[] fechaSeparada;

            if (fechaReporte != null)
            {
                fechaSeparada = fechaReporte.Split('-');
                fechaReporte = fechaSeparada[2].Trim() + "/" + fechaSeparada[1].Trim() + "/" + fechaSeparada[0].Trim();
            }

            if (!String.IsNullOrEmpty(fechaReporte))
            {
                parametros.Add("Fecha", "'" + fechaReporte.Trim() + "'");
            }

            personaResponsable = ConsultaPersonasResponsablesService.ObtenerInformacionReportePersonasResponsables(parametros);

            return this.ExportDataToExcel("Listado", personaResponsable, "administradores.xls", PersonaResponsable.diccionarioColumnasExcel);

        }

        [HttpPost]
        [Route("ObtenerAniosEnvioReporteAnual")]
        public IHttpActionResult ObtenerAniosEnvioReporteAnual()
        {
            var claveCotizacion = getFormKeyValue("claveCotizacion");
            return Ok(ConsultaPersonasResponsablesService.ObtenerAniosEnvioReporteAnual(claveCotizacion));
        }

        [HttpPost]
        [Route("ObtenerTrimestresICSPorEntidadYAnio")]
        public IHttpActionResult ObtenerTrimestresICSPorEntidadYAnio()
        {
            var claveCotizacion = getFormKeyValue("Entidad.Nombre");
            var anio = getFormKeyValue("Parametros.Ano");

            return Ok(ConsultaPersonasResponsablesService.ObtenerTrimestresICSPorEntidadYAnio(anio, claveCotizacion));
        }

        [HttpPost]
        [Route("GenerarReporteFichaTecnica")]
        public IHttpActionResult GenerarReporteFichaTecnica()
        {
            var response = new HttpResponseMessage();

            var claveCotizacion = getFormKeyValue("claveCotizacion");
            var anio = getFormKeyValue("anio");
            var trimestre = getFormKeyValue("trimestre");

            if (claveCotizacion == null && anio == null && trimestre == null)
            {
                response.StatusCode = HttpStatusCode.NotFound;
                return ResponseMessage(response);
            }

            var parametros = new Dictionary<String, String>();
            parametros["claveCotizacion"] = claveCotizacion;
            parametros["anio"] = anio;
            parametros["trimestre"] = trimestre;

            var resultadoOut = ReporteFichaTecnicaCellStoreMongoService.GenerarFichaTecnicaEmisora(parametros);

            if (resultadoOut.Resultado)
            {
                MemoryStream s = new MemoryStream(resultadoOut.InformacionExtra as byte[]);
                response.StatusCode = HttpStatusCode.OK;
                response.Content = new StreamContent(s);
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = claveCotizacion + ".xlsx";
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.ms-excel");
            }
            else
            {
                response.StatusCode = HttpStatusCode.NoContent;
                return ResponseMessage(response);
            }

            return ResponseMessage(response);
        }

        [HttpPost]
        [Route("GenerarReporteFichaAdministrativa")]
        public IHttpActionResult GenerarReporteFichaAdministrativa()
        {
            var response = new HttpResponseMessage();

            var claveCotizacion = getFormKeyValue("claveCotizacion");
            var anio = getFormKeyValue("anio");

            if (claveCotizacion == null && anio == null)
            {
                response.StatusCode = HttpStatusCode.NotFound;
                return ResponseMessage(response);
            }

            var parametros = new Dictionary<String, String>();
            parametros["ticker"] = claveCotizacion;
            parametros["anio"] = anio;

            var resultadoOut = ReporteFichaAdministrativaService.GenerarFichaAdministrativaEmisora(parametros);

            if (resultadoOut.Resultado)
            {
                MemoryStream s = new MemoryStream(resultadoOut.InformacionExtra as byte[]);
                response.StatusCode = HttpStatusCode.OK;
                response.Content = new StreamContent(s);
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = claveCotizacion + ".xlsx";
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.ms-excel");
            }
            else
            {
                response.StatusCode = HttpStatusCode.NoContent;
                return ResponseMessage(response);
            }

            return ResponseMessage(response);
        }

        [HttpPost]
        [Route("GenerarReporteDescripcionPorSectores")]
        public IHttpActionResult GenerarReporteDescripcionPorSectores()
        {
            var response = new HttpResponseMessage();

            string idSector = getFormKeyValue("idSector");
            string nombreSector = getFormKeyValue("nombreSector");
            string idSubSector = getFormKeyValue("idSubSector");
            string nombreSubSector = getFormKeyValue("nombreSubSector");
            string idRamo = getFormKeyValue("idRamo");
            string nombreRamo = getFormKeyValue("nombreRamo");

            string parametroTrimestre = getFormKeyValue("trimestre");
            string parametroAnio = getFormKeyValue("anio");
                        
            int anio = Convert.ToInt32(parametroAnio);

            List<LlaveValorDto> listaEmisoras = (List<LlaveValorDto>)ReporteCellStoreMongoService.ObtenerEmisorasPorRamo(Convert.ToInt32(idRamo)).InformacionExtra;
            String[] emisoras = listaEmisoras.Select(emisora => emisora.Valor).ToArray();                        
            ResultadoOperacionDto resultadoOperacionDto = ReporteCellStoreMongoService.GenerarReporteERyPCS(nombreSector, nombreSubSector, nombreRamo, emisoras, parametroTrimestre, anio);

            if (resultadoOperacionDto.Resultado)
            {
                MemoryStream s = new MemoryStream(resultadoOperacionDto.InformacionExtra as byte[]);
                response.StatusCode = HttpStatusCode.OK;
                response.Content = new StreamContent(s);
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = "descipcion_por_sectores" + ".xls";
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.ms-excel");
            }
            else
            {
                response.StatusCode = HttpStatusCode.NoContent;
                return ResponseMessage(response);
            }

            return ResponseMessage(response);
        }

        [HttpPost]
        [Route("GenerarReporteCalculoDeMaterialidad")]
        public IHttpActionResult GenerarReporteCalculoDeMaterialidad()
        {
            var response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.NoContent;

            try
            {
                string parametroEmisora = getFormKeyValue("parametroEmisora");
                string datoTipoDeInstumento = getFormKeyValue("datoTipoDeInstumento");
                string datoMoneda = getFormKeyValue("datoMoneda");
                string datoFecha = getFormKeyValue("datoFecha");
                string datoMontoDeOperacion = getFormKeyValue("datoMontoDeOperacion");
                string datoTipoDeCambio = getFormKeyValue("datoTipoDeCambio");
                string datoNoticia = getFormKeyValue("datoNoticia");

                Dictionary<String, object> parametrosDelReporte = new Dictionary<string, object>();
                Dictionary<String, object> datosDelReporte = new Dictionary<string, object>();

                if (parametroEmisora != null)
                {
                    parametrosDelReporte.Add("'Entidad.Nombre'", parametroEmisora);
                }

                if (datoTipoDeInstumento != null)
                {
                    datosDelReporte.Add("datoTipoDeInstumento", datoTipoDeInstumento);
                }

                if (datoMoneda != null)
                {
                    datosDelReporte.Add("datoMoneda", datoMoneda);
                }

                if (datoFecha != null)
                {
                    datosDelReporte.Add("datoFecha", datoFecha);
                }

                if (datoMontoDeOperacion != null)
                {
                    datosDelReporte.Add("datoMontoDeOperacion", Convert.ToDouble(datoMontoDeOperacion));
                }

                if (datoTipoDeCambio != null)
                {
                    datosDelReporte.Add("datoTipoDeCambio", Convert.ToDouble(datoTipoDeCambio));
                }

                if (datoNoticia != null)
                {
                    datosDelReporte.Add("datoNoticia", datoNoticia);
                }

                ResultadoOperacionDto resultadoOperacionDto = ReporteCellStoreMongoService.GenerarReporteCalculoMaterialidad(parametrosDelReporte, datosDelReporte);

                if (resultadoOperacionDto.Resultado)
                {
                    MemoryStream s = new MemoryStream(resultadoOperacionDto.InformacionExtra as byte[]);
                    response.StatusCode = HttpStatusCode.OK;
                    response.Content = new StreamContent(s);
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = "calculo_de_materialidad" + ".xls";
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.ms-excel");
                }                
                
            }catch(Exception e)
            {
                LogUtil.Error(e);
                response.ReasonPhrase = e.Message;
                response.Content = new StringContent(e.StackTrace.ToString());                
            }

            return ResponseMessage(response);
        }

    }

}