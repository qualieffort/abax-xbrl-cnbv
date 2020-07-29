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

namespace AbaxXbrlNgWeb.Controllers
{
    [RoutePrefix("EnviosTaxonomia")]
    public class EnviosTaxonomiaController: BaseController
    {
        public IAuditoriaService AuditoriaService { get; set; }
        public IUsuarioService UsuarioService { get; set; }
        public IEmpresaService EmpresaService { get; set; }
        public IConsultaEnviosTaxonomiaService ConsultaEnviosTaxonomiaService { get; set; }
        /// <summary>
        /// Utilería auxiliar para el copiado de entidades a dtos.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();

        public EnviosTaxonomiaController()
        {
            try
            {
                AuditoriaService = (IAuditoriaService)ServiceLocator.ObtenerFabricaSpring().GetObject("AuditoriaService");
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
                EmpresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
                ConsultaEnviosTaxonomiaService = (IConsultaEnviosTaxonomiaService)ServiceLocator.ObtenerFabricaSpring().GetObject("ConsultaEnviosTaxonomiaService");
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


        private PeticionInformationDataTableDto<EnviosTaxonomiaDto> ObtenPeticionDataTable() {
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

            var dataTableRequest = new PeticionInformationDataTableDto<EnviosTaxonomiaDto>()
            {
                draw = Int32.Parse(getFormKeyValue("draw")),
                length = Int32.Parse(getFormKeyValue("length")),
                start = Int32.Parse(getFormKeyValue("start")),
                search = getFormKeyValue("search"),
                order = orders
            };
            return dataTableRequest;
        }

        [HttpPost]
        [Route("GetNumeroFideicomisos")]
        public IHttpActionResult GetNumeroFideicomisos()
        {


            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {

                var listaNumeroFideicomisos = ConsultaEnviosTaxonomiaService.OntenerNumeroFideicomisos();
                resultado.InformacionExtra = listaNumeroFideicomisos;
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
            return Json(resultado);
        }


        [HttpPost]
        [Route("GetEnviosTaxonomia")]
        public IHttpActionResult GetEnviosTaxonomia()
        {

            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {
                var taxonomia = getFormKeyValue("taxonomia");
                var grupoEmpresasCadena = getFormKeyValue("grupoEmpresas");
                var tipoEmpresasCadena = getFormKeyValue("tipoEmpresas");
                var nombreCorto = getFormKeyValue("ClaveCotizacion");
                var fideicomiso = getFormKeyValue("NumFideicomiso");
                var fechaCreacionInicial = getFormKeyValue("fechaCreacionInicial");
                var fechaCreacionFinal = getFormKeyValue("fechaCreacionFinal");



                var dataTableRequest = ObtenPeticionDataTable();
                dataTableRequest.filtros = new Dictionary<string, object>();

                if (!String.IsNullOrEmpty(taxonomia))
                {
                    dataTableRequest.filtros["Taxonomia"] = taxonomia;
                }
                if (!String.IsNullOrEmpty(grupoEmpresasCadena))
                {
                    dataTableRequest.filtros["GE.IdGrupoEmpresa"] = Convert.ToInt32(grupoEmpresasCadena);
                }
                if (!String.IsNullOrEmpty(tipoEmpresasCadena))
                {
                    dataTableRequest.filtros["TE.IdTipoEmpresa"] = Convert.ToInt32(tipoEmpresasCadena);
                }
                if (!String.IsNullOrEmpty(nombreCorto))
                {
                    dataTableRequest.filtros["ClaveEmisora"] = nombreCorto;
                }
                if (!String.IsNullOrEmpty(fideicomiso))
                {
                    dataTableRequest.filtros["NumFideicomiso"] = fideicomiso;
                }
                if (!String.IsNullOrEmpty(fechaCreacionInicial))
                {
                    
                    dataTableRequest.filtros["FechaCreacionInicial"] = fechaCreacionInicial;
                  
                }
                if (!String.IsNullOrEmpty(fechaCreacionFinal))
                {

                    dataTableRequest.filtros["FechaCreacionFinal"] = fechaCreacionFinal;

                }

                var paginacionDocumentos = ConsultaEnviosTaxonomiaService.ObtenerInformacionConsultaEnviosTaxonomia(dataTableRequest);

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
        /// Exporta los datos de la consulta a un archivo de excel.
        /// </summary>
        /// <returns>Stream con el archivo de excel.</returns>
        [HttpPost]
        [Authorize]
        [Route("ExportarEnviosTaxonomiaExcel")]
        public IHttpActionResult ExportarEnviosTaxonomiaExcel()
        {
            IList<EnviosTaxonomiaDto> listaTaxos = new List<EnviosTaxonomiaDto>();
         
                var taxonomia = getFormKeyValue("taxonomia");
                var grupoEmpresasCadena = getFormKeyValue("grupoEmpresas");
                var tipoEmpresasCadena = getFormKeyValue("tipoEmpresas");
                var nombreCorto = getFormKeyValue("ClaveCotizacion");
                var fideicomiso = getFormKeyValue("NumFideicomiso");
                var fechaCreacionInicial = getFormKeyValue("fechaCreacionInicial");
                var fechaCreacionFinal = getFormKeyValue("fechaCreacionFinal");

            Dictionary<String, object> parametros = new Dictionary<String, object>();

                    

                if (!String.IsNullOrEmpty(taxonomia))
                {
                   
                    parametros.Add("Taxonomia", taxonomia);
                }
                if (!String.IsNullOrEmpty(grupoEmpresasCadena))
                {
                   parametros.Add("GE.IdGrupoEmpresa", Convert.ToInt32(grupoEmpresasCadena));
                }
                if (!String.IsNullOrEmpty(tipoEmpresasCadena))
                {
                parametros.Add("TE.IdTipoEmpresa", Convert.ToInt32(tipoEmpresasCadena));
                }
                if (!String.IsNullOrEmpty(nombreCorto))
                {
                    parametros.Add("ClaveEmisora", nombreCorto);
                }
                if (!String.IsNullOrEmpty(fideicomiso))
                {
                parametros.Add("NumFideicomiso", fideicomiso);
                }

                
                if (!String.IsNullOrEmpty(fechaCreacionInicial))
                {

                    parametros.Add("FechaCreacionInicial", fechaCreacionInicial);

                }
                if (!String.IsNullOrEmpty(fechaCreacionFinal))
                {

                    parametros.Add("FechaCreacionFinal", fechaCreacionFinal);

                }


            listaTaxos = ConsultaEnviosTaxonomiaService.ObtenerInformacionReporteConsultaEnviosTaxonomias(parametros);

            return this.ExportDataToExcel("Listado", listaTaxos, "envios.xls", EnviosTaxonomiaDto.diccionarioColumnasExcel);
        }
    }
}