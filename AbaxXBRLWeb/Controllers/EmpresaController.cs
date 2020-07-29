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
    ///     Controlador que administra el funcionamiento de las pantalla que definen a una Empresa.
    ///     <author>Juan Carlos HUizar Moreno</author>
    ///     <version>1.0</version>
    /// </summary>
    [RoutePrefix("Empresa")]
    [Authorize]
    public class EmpresaController : BaseController
    {

        #region Propiedades
        /// <summary>
        /// El protocolo DBEntities que permite instanciar a una entidad de la base de datos para leer los datos para una entidad en particular. 
        /// </summary>


        /// <summary>
        /// Interface del Servicio para realizar operaciones CRUD relacionadas con la Empresa.
        /// </summary>
        public IEmpresaService EmpresaService { get; set; }
        /// <summary>
        /// Utilería auxiliar para el parseo de información entre entidades y dtos.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();
        #endregion

        #region Constructor
        /// <summary>
        /// Constructor
        /// </summary>
        public EmpresaController()
        {
            try
            {
                EmpresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }
        #endregion

        #region WebServices Empresas
        /// <summary>
        /// Servicio para la consulta de las empresas existentes.
        /// </summary>
        /// <returns>Lista de empresas existentes</returns>
        [Route("GetEmpresas")]
        [HttpPost]
        public IHttpActionResult GetEmpresas()
        {

            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {

                var dataTableRequest = ObtenPeticionEmpresaDataTable();
                var dataTableRequestResultado = ObtenPeticionEmpresaDTODataTable();

                dataTableRequest.filtros = new Dictionary<string, object>();

                var grupoEmpresa = SesionActual.GrupoEmpresa;
                var entidades = new List<Empresa>();
                var empresas = new List<EmpresaDto>();

                if (grupoEmpresa != null)
                {
                    var peticionInformationDataTable = EmpresaService.ObtenerInformacionEmpresasPorGrupoEmpresa(grupoEmpresa, dataTableRequest);
                    dataTableRequestResultado.recordsTotal = peticionInformationDataTable.recordsTotal;
                    dataTableRequestResultado.data = CopiadoUtil.Copia(peticionInformationDataTable.data).ToList();
                    resultado.InformacionExtra = dataTableRequestResultado;
                    resultado.Resultado = true;
                }
                else
                {
                    dataTableRequestResultado = EmpresaService.ObtenerInformacionEmpresas(dataTableRequestResultado);                                    
                    resultado.InformacionExtra = dataTableRequestResultado;
                    resultado.Resultado = true;
                }

            }
            catch(Exception e)
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

        private PeticionInformationDataTableDto<EmpresaDto> ObtenPeticionEmpresaDTODataTable()
        {
            String param;
            List<DataTableOrderColumn> orders = new List<DataTableOrderColumn>();
            for (var index = 0; index < 13; index++)
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

            var dataTableRequest = new PeticionInformationDataTableDto<EmpresaDto>()
            {
                draw = Int32.Parse(getFormKeyValue("draw")),
                length = Int32.Parse(getFormKeyValue("length")),
                start = Int32.Parse(getFormKeyValue("start")),
                search = getFormKeyValue("search[value]"),
                order = orders
            };
            return dataTableRequest;
        }

        private PeticionInformationDataTableDto<Empresa> ObtenPeticionEmpresaDataTable()
        {
            String param;
            List<DataTableOrderColumn> orders = new List<DataTableOrderColumn>();
            for (var index = 0; index < 13; index++)
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

            var dataTableRequest = new PeticionInformationDataTableDto<Empresa>()
            {
                draw = Int32.Parse(getFormKeyValue("draw")),
                length = Int32.Parse(getFormKeyValue("length")),
                start = Int32.Parse(getFormKeyValue("start")),
                search = getFormKeyValue("search[value]"),
                order = orders
            };
            return dataTableRequest;
        }


        /// <summary>
        /// Inicializar la pantalla de registro de empresa y edición
        /// </summary>
        /// <returns></returns>
        [Route("InitEmpresa")]
        [HttpPost]
        public IHttpActionResult InitEmpresa()
        {
            var resultadoOperacion = new ResultadoOperacionDto();
            var empresa = new Empresa();
            empresa.GrupoEmpresa = SesionActual.GrupoEmpresa;
            resultadoOperacion.Resultado = true;
            resultadoOperacion.InformacionExtra = empresa;
            return Ok(resultadoOperacion);
        }



        /// <summary>
        /// Servicio para la consulta de las empresa requerida.
        /// </summary>
        /// <returns>Empresa requerida</returns>
        [Route("GetEmpresa")]
        [HttpPost]
        public IHttpActionResult GetEmpresa()
        {
            var param = getFormKeyValue("id");
            var id = Int64.Parse(param);
            var entidad = EmpresaService.ObtenerEmpresaPorId(id).InformacionExtra as Empresa;
            var empresa = CopiadoUtil.Copia(entidad);
            return Ok(empresa);
        }

        [Route("AddEmpresa")]
        [HttpPost]
        public IHttpActionResult AddEmpresa()
        {
            if (ConstantsAbax.DESHABILITAR_CREAR_EMPRESAS)
            {
                return Ok(new ResultadoOperacionDto() { Resultado = false, Mensaje = "MENSAJE_WARNING_SIN_PRIVILEGIO_CREAR_EMPRESA" });
            }


            var param = getFormKeyValue("json");
            var empresa = new Empresa();
            JsonConvert.PopulateObject(param, empresa);
            ResultadoOperacionDto resultado = ValidateEmpresa(empresa);
            if (string.IsNullOrEmpty(resultado.Mensaje))
            {
                resultado = EmpresaService.GuardarEmpresa(empresa, IdUsuarioExec);
                long idEmpresa = Convert.ToInt64(resultado.InformacionExtra);

                UsuarioEmpresa usuarioEmpresa = new UsuarioEmpresa()
                {
                    IdEmpresa = idEmpresa,
                    IdUsuario = IdUsuarioExec
                };

                IUsuarioService UsuarioService = UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
                resultado = UsuarioService.GuardarUsuarioEmpresa(usuarioEmpresa, IdUsuarioExec);

                resultado = CreaRolesEmpresaNueva(idEmpresa, empresa.NombreCorto);
            }
            return Ok(resultado);
        }

        [Route("UpdateEmpresa")]
        [HttpPost]
        public IHttpActionResult UpdateEmpresa()
        {
            var jsonString = getFormKeyValue("json");
            var empresa = new Empresa();
            JsonConvert.PopulateObject(jsonString, empresa);

            ResultadoOperacionDto resultado = ValidateEmpresa(empresa);
            if (string.IsNullOrEmpty(resultado.Mensaje))
            {
                var empresaBd = EmpresaService.ObtenerEmpresaPorId(empresa.IdEmpresa).InformacionExtra as Empresa;
                empresaBd.IdEmpresa = empresa.IdEmpresa;
                empresaBd.NombreCorto = empresa.NombreCorto;
                empresaBd.AliasClaveCotizacion = empresa.AliasClaveCotizacion;
                empresaBd.RazonSocial = empresa.RazonSocial;
                empresaBd.RFC = empresa.RFC;
                empresaBd.DomicilioFiscal = empresa.DomicilioFiscal;
                empresaBd.GrupoEmpresa = empresa.GrupoEmpresa;
                empresaBd.Fideicomitente = empresa.Fideicomitente;
                empresaBd.RepresentanteComun = empresa.RepresentanteComun;

                resultado = EmpresaService.GuardarEmpresa(empresaBd, IdUsuarioExec);
            }

            return Ok(resultado);
        }

        [Route("DeleteEmpresa")]
        [HttpPost]
        public IHttpActionResult DeleteEmpresa()
        {
            var param = getFormKeyValue("id");
            var id = Int64.Parse(param);
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            var empresa = EmpresaService.ObtenerEmpresaPorId(id).InformacionExtra as Empresa;
            if (empresa != null)
            {
                resultado = EmpresaService.BorrarEmpresaLogicamente(id, IdUsuarioExec);
            }
            return Ok(resultado);
        }

        [Route("ExportarDatos")]
        [HttpPost]
        public IHttpActionResult ExportarDatos()
        {
            var empresas = EmpresaService.ObtenerEmpresas().InformacionExtra as List<EmpresaDto>;
            

            Dictionary<String, String> columns = new Dictionary<String, String>() { { "NombreCorto", "Nombre Corto" }, { "RazonSocial", "Razón Social" }, { "RFC", "RFC" }, { "DomicilioFiscal", "Domicilio Fiscal" } };

            return this.ExportDataToExcel("Index", empresas.ToList(), "empresas.xls", columns);
        }


        [Route("ExportEmpresas")]
        [HttpPost]
        public IHttpActionResult ExportEmpresas()
        {
            var empresas = EmpresaService.ObtenerEmpresas().InformacionExtra as List<EmpresaDto>;
            

            Dictionary<String, String> columns = new Dictionary<String, String>() { { "NombreCorto", "Nombre Corto" }, { "RazonSocial", "Razón Social" }, { "RFC", "RFC" }, { "DomicilioFiscal", "Domicilio Fiscal" } };

            return this.ExportDataToExcel("Index", empresas.ToList(), "empresas.xls", columns);
        }
        #endregion

        #region WebServices Tipos de Empresa
        /// <summary>
        /// Servicio para la consulta de los tipos de empresa existentes.
        /// </summary>
        /// <returns>Lista de tipos de empresa existentes</returns>
        [Route("GetTiposEmpresa")]
        [HttpPost]
        public IHttpActionResult GetTiposEmpresa()
        {
            var entidades = EmpresaService.ObtenerTiposEmpresa();
            var tiposEmpresa = CopiadoUtil.Copia(entidades);

            if (getFormKeyValue("comoResultado") != null)
                return Ok(new ResultadoOperacionDto { Resultado = true, InformacionExtra = tiposEmpresa });

            return Ok(tiposEmpresa.ToList());
        }

        [Route("SaveTipoEmpresa")]
        [HttpPost]
        public IHttpActionResult SaveTipoEmpresa()
        {
            var param = getFormKeyValue("json");
            var tipoEmpresa = new TipoEmpresa();
            JsonConvert.PopulateObject(param, tipoEmpresa);
            var resultado = EmpresaService.GuardarTipoEmpresa(tipoEmpresa, IdUsuarioExec);
            return Ok(resultado);
        }

        [Route("DeleteTipoEmpresa")]
        [HttpPost]
        public IHttpActionResult DeleteTipoEmpresa()
        {
            var param = getFormKeyValue("id");
            var id = Convert.ToInt64(param);
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            var tipoEmpresa = EmpresaService.ObtenerTipoEmpresa(id);
            if (tipoEmpresa != null)
            {
                resultado = EmpresaService.BorrarTipoEmpresaLogicamente(id, IdUsuarioExec);
            }
            return Ok(resultado);
        }

        /// <summary>
        /// Exporta a excel el listado de tipos de empres existentes.
        /// </summary>
        /// <returns>Resupesta a la solicitud</returns>
        [Route("ExportTiposEmpresa")]
        [HttpPost]
        public IHttpActionResult ExportTiposEmpresa()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                resultado = EmpresaService.ObtenRegistrosReporte(IdUsuarioExec, IdEmpresa);
                if (!resultado.Resultado)
                {
                    return Ok(resultado);
                }
                var dtos = resultado.InformacionExtra as IList<TipoEmpresaExcelDto>;
                Dictionary<String, String> columns = new Dictionary<String, String>() { 
                    { "Nombre", "Nombre Tipo" }, 
                    { "Descripcion", "Descripción Tipo" }, 
                    { "Empresa", "Empresa" }, 
                    { "RazonSocial", "Razón Social" }
                };
                return this.ExportDataToExcel("Index", dtos, "TiposEmpresa.xls", columns);
                //return null;
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
        /// Retorna el listado de roles asignados al usuario indicado.
        /// </summary>
        /// <returns>Listado de roles.</returns>
        [HttpPost]
        [Route("ObtenTiposEmpresaAsignados")]
        public IHttpActionResult ObtenTiposEmpresaAsignados()
        {

            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);
            var tiposEmpresaAsignados = CopiadoUtil.Copia(EmpresaService.ObtenerTiposEmpresa(idEmpresa));

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK",
                InformacionExtra = tiposEmpresaAsignados,
            };

            return Ok(resultado);
        }

        /// <summary>
        /// Reasigna una lista de roles al grupo indicado.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [Authorize]
        [Route("AsignaTiposEmpresa")]
        public IHttpActionResult AsignaTiposEmpresa()
        {
            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);
            var sListaJson = getFormKeyValue("listaJson");
            var idsTiposEmpresa = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idsTiposEmpresa);

            var resultado = EmpresaService.AsignarTiposEmpresa(idEmpresa, idsTiposEmpresa, IdUsuarioExec);

            return Ok(resultado);
        }
        #endregion

        #region WebServices Taxonomias Xbrl
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

        [Route("SaveTaxonomiaXbrl")]
        [HttpPost]
        public IHttpActionResult SaveTaxonomiaXbrl()
        {
            var param = getFormKeyValue("json");
            var taxonomiaXbrl = new TaxonomiaXbrlDto();
            JsonConvert.PopulateObject(param, taxonomiaXbrl);
            var resultado = EmpresaService.GuardarTaxonomiaXbrl(taxonomiaXbrl, IdUsuarioExec);
            return Ok(resultado);
        }

        [Route("DeleteTaxonomiaXbrl")]
        [HttpPost]
        public IHttpActionResult DeleteTaxonomiaXbrl()
        {
            var param = getFormKeyValue("id");
            var id = Convert.ToInt64(param);
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            var taxonomia = EmpresaService.ObtenerTaxonomiaXbrlPorId(id);
            if (taxonomia != null)
            {
                resultado = EmpresaService.BorrarTaxonomiaXbrl(id, IdUsuarioExec);
            }
            return Ok(resultado);
        }

        [Route("ExportTaxonomiasXbrl")]
        [HttpPost]
        public IHttpActionResult ExportTaxonomiasXbrl()
        {
            var taxonomiasXbrl = EmpresaService.ObtenerTaxonomiasXbrl();

            Dictionary<string, string> columns = new Dictionary<string, string>() {
                { "Nombre", "Nombre" },
                { "Descripcion", "Descripción" },
                { "Anio", "Año" },
                { "Activa", "Activa" },
                { "EspacioNombresPrincipal", "Espacio de Nombres" },
                { "PuntoEntrada", "Punto de Entrada" }
            };

            return this.ExportDataToExcel("Index", taxonomiasXbrl, "TaxonomiasXbrl.xls", columns);
        }

        /// <summary>
        /// Retorna el listado de taxonomias asignadas al tipo de empresa indicado.
        /// </summary>
        /// <returns>Listado de taxonomias.</returns>
        [HttpPost]
        [Route("ObtenTaxonomiasAsignadas")]
        public IHttpActionResult ObtenTaxonomiasAsignadas()
        {

            var sIdTipoEmpresa = getFormKeyValue("idTipoEmpresa");
            var idTipoEmpresa = Convert.ToInt64(sIdTipoEmpresa);

            var taxonomiasAsignadas = EmpresaService.ObtenerTaxonomiasXbrl(idTipoEmpresa);

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK",
                InformacionExtra = taxonomiasAsignadas,
            };

            return Ok(resultado);
        }

        /// <summary>
        /// Reasigna una lista de taxonomias al tipo de empresa indicado.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [Authorize]
        [Route("AsignaTaxonomias")]
        public IHttpActionResult AsignaTaxonomias()
        {
            var sIdTipoEmpresa = getFormKeyValue("idTipoEmpresa");
            var idTipoEmpresa = Convert.ToInt64(sIdTipoEmpresa);
            var sListaJson = getFormKeyValue("listaJson");
            var idsTaxonomias = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idsTaxonomias);

            var resultado = EmpresaService.AsignarTaxonomias(idTipoEmpresa, idsTaxonomias, IdUsuarioExec);

            return Ok(resultado);
        }
        #endregion

        #region WebServices Fiduciarios
        /// <summary>
        /// Servicio para la consulta de las empresas existentes.
        /// </summary>
        /// <returns>Lista de empresas existentes</returns>
        [Route("GetFiduciarios")]
        [HttpPost]
        public IHttpActionResult GetFiduciarios()
        {
            var param = getFormKeyValue("idFideicomitente");
            var idFideicomitente = Int32.Parse(param);
            var fiduciarios = EmpresaService.ObtenEmpresasDispniblesAFiduciarios(idFideicomitente);

            var resultado = new ResultadoOperacionDto() 
            {
                Resultado = true,
                InformacionExtra = fiduciarios
            
            };

            return Ok(resultado);
        }

        /// <summary>
        /// Servicio para la consulta de las empresas disponibles para asignar a un Representante común.
        /// </summary>
        /// <returns>Lista de empresas existentes</returns>
        [Route("GetFiduciariosDisponiblesRepComun")]
        [HttpPost]
        public IHttpActionResult GetFiduciariosDisponiblesRepComun()
        {
            var param = getFormKeyValue("idFideicomitente");
            var idFideicomitente = Int32.Parse(param);
            var fiduciarios = EmpresaService.ObtenEmpresasDisponiblesParaRepresentanteComun(idFideicomitente);

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                InformacionExtra = fiduciarios

            };

            return Ok(resultado);
        }

        /// <summary>
        /// Servicio para la consulta de las empresas existentes.
        /// </summary>
        /// <returns>Lista de empresas existentes</returns>
        [Route("ObtenTodasEmpresasCombo")]
        [HttpPost]
        public IHttpActionResult ObtenTodasEmpresasCombo()
        {
            var resultado = EmpresaService.ObtenerEmpresas();
            var entidades = resultado.InformacionExtra as List<EmpresaDto>;

            var fiduciarios = entidades.Select(e =>
            {
                return new Emisora
                {
                    IdEmpresa = e.IdEmpresa,
                    NombreCorto = e.NombreCorto
                };
            });
            resultado.InformacionExtra = fiduciarios;

            return Ok(resultado);
        }
        
        /// <summary>
        /// Retorna el listado de fiduciarios secundarios asignados al fiduciario primario indicado.
        /// </summary>
        /// <returns>Listado de fiduciarios secundarios.</returns>
        [HttpPost]
        [Route("ObtenFiduciariosAsignados")]
        public IHttpActionResult ObtenFiduciariosAsignados()
        {
            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK"
            };

            try
            {
                var relaciones = EmpresaService.ConsultarEmpresasSecundariasPorTipoRelacionYEmpresaPrimaria(1, idEmpresa);
                var entidades = relaciones.InformacionExtra as List<Empresa>;
                var fiduciariosAsignados = entidades.Select(empresa =>
                {
                    return new Emisora
                    {
                        IdEmpresa = empresa.IdEmpresa,
                        NombreCorto = empresa.NombreCorto
                    };
                });

                resultado.InformacionExtra = fiduciariosAsignados;
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex.ToString();
            }

            return Ok(resultado);
        }

        [HttpPost]
        [Route("ObtenFiduciariosAsignadosRepComun")]
        public IHttpActionResult ObtenFiduciariosAsignadosRepComun()
        {
            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK"
            };

            try
            {
                var relaciones = EmpresaService.ConsultarEmpresasSecundariasRepComunPorTipoRelacionYEmpresaPrimaria(2, idEmpresa);
                var entidades = relaciones.InformacionExtra as List<Empresa>;
                var fiduciariosAsignados = entidades.Select(empresa =>
                {
                    return new Emisora
                    {
                        IdEmpresa = empresa.IdEmpresa,
                        NombreCorto = empresa.NombreCorto
                    };
                });

                resultado.InformacionExtra = fiduciariosAsignados;
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex.ToString();
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Reasigna una lista de taxonomias al tipo de empresa indicado.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [Authorize]
        [Route("AsignaFiduciarios")]
        public IHttpActionResult AsignaFiduciarios()
        {
            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);
            var sListaJson = getFormKeyValue("listaJson");
            var idsFiduciarios = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idsFiduciarios);

            var resultado = EmpresaService.AsignarFiduciarios(idEmpresa, idsFiduciarios, IdUsuarioExec);

            return Ok(resultado);
        }

        /// <summary>
        /// Asigna una lista de Empresas a un representante común.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [Authorize]
        [Route("AsignaFiduciariosARepresentanteComun")]
        public IHttpActionResult AsignaFiduciariosARepresentanteComun()
        {
            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);
            var sListaJson = getFormKeyValue("listaJson");
            var idsFiduciarios = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idsFiduciarios);

            var resultado = EmpresaService.AsignarFiduciariosRepComun(idEmpresa, idsFiduciarios, IdUsuarioExec);

            return Ok(resultado);            
        }
        #endregion

        #region Utilidades
        /// <summary>
        /// Método que valida la existencia de los campos requeridos
        /// </summary>
        /// <param name="empresa"></param>
        /// <returns></returns>
        private ResultadoOperacionDto ValidateEmpresa(Empresa empresa)
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            if (String.IsNullOrEmpty(empresa.NombreCorto))
            {
                resultado.Mensaje = AbaxXbrl.NombreCortoEmpresaVacio;
            }
            if (String.IsNullOrEmpty(empresa.RazonSocial))
            {
                resultado.Mensaje = AbaxXbrl.RazonSocialVacio;
            }
            if (String.IsNullOrEmpty(empresa.RFC))
            {
                resultado.Mensaje = AbaxXbrl.RFCVacio;
            }
            var regex = ConfigurationManager.AppSettings["expresionValidacionRfc"];
            var expression = new Regex(regex);
            if (!expression.IsMatch(empresa.RFC))
            {
                resultado.Mensaje = AbaxXbrl.RfcSinFormato;
            }
            return resultado;
        }

        private ResultadoOperacionDto CreaRolesEmpresaNueva(long idEmpresa, string nombreEmpresa)
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            string[] nombreRoles = new string[4] {
                "Administrador General",
                "Administrador",
                "Usuario Negocio",
                "Usuario Negocio Solo Lectura"
            };

            int[][] facultadesRolesEmpresaNueva = new int[4][];
            //Facultades del rol "Administrador General"
            facultadesRolesEmpresaNueva[0] = new int[] {
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40
            };
            //Facultades del rol "Administrador"
            facultadesRolesEmpresaNueva[1] = new int[] {
                8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21, 25, 26,
                27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40
            };
            //Facultades del rol "Usuario Negocio"
            facultadesRolesEmpresaNueva[2] = new int[] {
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62
            };
            //Facultades del rol "Usuario Negocio Solo Lectura"
            facultadesRolesEmpresaNueva[3] = new int[] {
                52, 53, 57, 62
            };

            IRolService RolService = (IRolService)ServiceLocator.ObtenerFabricaSpring().GetObject("RolService");
            IUsuarioService UsuarioService = UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");

            for (int i = 0; i < facultadesRolesEmpresaNueva.Length; i++)
            {
                Rol rol = new Rol();
                rol.Nombre = string.Format("{0} {1}", nombreRoles[i], nombreEmpresa);
                rol.IdEmpresa = idEmpresa;
                rol.Descripcion = string.Format("{0} de la empresa: {1}", nombreRoles[i], nombreEmpresa);
                resultado = RolService.GuardarRol(rol, IdUsuarioExec);

                long idRol = Convert.ToInt64(resultado.InformacionExtra);
                List<RolFacultad> rolFacultadList = new List<RolFacultad>();
                foreach (int facultadesRolEmpresaNueva in facultadesRolesEmpresaNueva[i])
                {
                    rolFacultadList.Add(new RolFacultad()
                    {
                        IdRol = idRol,
                        IdFacultad = facultadesRolEmpresaNueva
                    });
                }
                resultado = RolService.GuardarRolFacultadBulk(rolFacultadList, IdUsuarioExec);

                if (i == 0)
                {
                    UsuarioRol usuarioRol = new UsuarioRol()
                    {
                        IdUsuario = IdUsuarioExec,
                        IdRol = idRol
                    };
                    resultado = UsuarioService.GuardarUsuarioRol(usuarioRol, IdUsuarioExec);
                }
            }

            return resultado;
        }
        #endregion
    }
}