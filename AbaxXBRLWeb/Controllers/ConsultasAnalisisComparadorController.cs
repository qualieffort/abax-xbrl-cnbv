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
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controlador para las páginas relacionadas a la administración de las consultas para analisis
    /// <author>Luis Angel Morales Gonzalez</author>
    /// </summary>
    [RoutePrefix("ConsultaAnalisis")]
    public class ConsultasAnalisisComparadorController : BaseController
    {

        /// <summary>
        /// El objeto para consultar el listado de documentos instancia
        /// </summary>
        public IConsultaAnalisisService ConsultaAnalisisService { get; set; }

        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDocumentoInstanciaService DocumentoInstanciaService = null;


        /// <summary>
        /// Utilidad necesaria para convertir elementos entidad en elementos dto
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();

        /// <summary>
        /// Caché de  los DTO's que representan una taxonomía
        /// </summary>
        private ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl = null;

        /// <summary>
        /// Emisoras 
        /// </summary>
        public Dictionary<string, short> emisoras = null;

        /// <summary>
        /// Convertidor de color
        /// </summary>
        public ColorConverter colorConverter = new ColorConverter();

        /// <summary>
        /// Constructir del controlador de peticiones para las consultas por analisis
        /// </summary>
        public ConsultasAnalisisComparadorController()
            : base()
        {
            try
            {
                DocumentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
                ConsultaAnalisisService = (IConsultaAnalisisService)ServiceLocator.ObtenerFabricaSpring().GetObject("ConsultaAnalisisService");
                _cacheTaxonomiaXbrl = (ICacheTaxonomiaXBRL)ServiceLocator.ObtenerFabricaSpring().GetObject("CacheTaxonomia");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }


        /// <summary>
        /// Obtiene las consultas que se tienen registradas para analisis de informacion
        /// </summary>
        [HttpPost]
        [Authorize]
        [Route("ObtenerConsultasAnalisis")]
        public IHttpActionResult ObtenerConsultasAnalisis()
        {

            var resultado = ConsultaAnalisisService.ObtenerConsultas();
            resultado.InformacionExtra = CopiadoUtil.Copia((List<ConsultaAnalisis>)resultado.InformacionExtra);

            return Json(resultado);


        }

        /// <summary>
        /// Exporta la informacion de las consultas de analisis en un documento excel
        /// </summary>
        [Route("ExportarDatos")]
        [HttpPost]
        public IHttpActionResult ExportarDatos()
        {
            string valorConsulta = getFormKeyValue("valorConsulta");

            List<ConsultaAnalisis> consultas = (List<ConsultaAnalisis>)ConsultaAnalisisService.ObtenerConsultasPorNombre(valorConsulta).InformacionExtra;
            var consultaGenerado = CopiadoUtil.Copia(consultas);
            Dictionary<String, String> columns = new Dictionary<String, String>() { { "Nombre", "Nombre" } };
            return this.ExportDataToExcel("Index", consultaGenerado.ToList(), "consultas.xls", columns);
        }

        /// <summary>
        /// Elimina una consulta de configuración de analisis
        /// </summary>
        [Route("EliminarConsulta")]
        [HttpPost]
        public IHttpActionResult EliminarConsulta()
        {
            long idConsulta = long.Parse(getFormKeyValue("idConsulta"));

            var resultadoOperacion = ConsultaAnalisisService.EliminarConsulta(idConsulta);


            return Ok(resultadoOperacion);
        }



        [HttpPost]
        [Authorize]
        [Route("ObtenerHechosPorConsultaAnalisis")]
        public IHttpActionResult ObtenerHechosPorConsultaAnalisis()
        {
            var serializerSettings = new JsonSerializerSettings();
            String consultaAnalisis = getFormKeyValue("consulta");

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            var consultaAnalisisDto = (ConsultaAnalisisDto)JsonConvert.DeserializeObject(consultaAnalisis, typeof(ConsultaAnalisisDto), serializerSettings);

            try
            {
                if (consultaAnalisisDto != null)
                {
                    resultado = DocumentoInstanciaService.ObtenerHechosPorConsultaAnalisis(consultaAnalisisDto);
                }
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = "Ocurrio un error al obtener informacion de una configuracion de una consulta de analisis: " + ex.Message;
            }


            return Ok(resultado);
        }


        [HttpPost]
        [Authorize]
        [Route("RegistrarConsultaAnalisis")]
        public IHttpActionResult RegistrarConsultaAnalisis()
        {
            var serializerSettings = new JsonSerializerSettings();
            String consultaAnalisis = getFormKeyValue("consulta");

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            var consultaAnalisisDto = (ConsultaAnalisisDto)JsonConvert.DeserializeObject(consultaAnalisis, typeof(ConsultaAnalisisDto), serializerSettings);

            try
            {
                if (consultaAnalisisDto != null)
                {
                    resultado = ConsultaAnalisisService.RegistrarConsultaAnalisis(consultaAnalisisDto);
                }

            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = "Ocurrio un error al obtener informacion de una configuracion de una consulta de analisis: " + ex.Message;
            }

            return Ok(resultado);
        }


        /// <summary>
        /// Obtiene la consulta configurada con ese identificador unico
        /// </summary>
        [HttpPost]
        [Authorize]
        [Route("ConsultaAnalisisPorId")]
        public IHttpActionResult ObtenerConsultasAnalisisPorId()
        {
            long idConsulta = long.Parse(getFormKeyValue("idConsulta"));

            var resultado = ConsultaAnalisisService.ObtenerConsultaPorId(idConsulta);
            resultado.InformacionExtra = CopiadoUtil.Copia((ConsultaAnalisis)resultado.InformacionExtra);

            return Json(resultado);
        }




        /// <summary>
        /// Descarga un archivo excel con la consulta de la ejecucion
        /// </summary>
        [HttpPost]
        [Authorize]
        [Route("DescargarEjecucionConsultaParametrizada")]
        public IHttpActionResult DescargarEjecucionConsultaParametrizada()
        {
            var serializerSettings = new JsonSerializerSettings();
            String consultaAnalisis = getFormKeyValue("consulta");

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            var consultaAnalisisDto = (ConsultaAnalisisDto)JsonConvert.DeserializeObject(consultaAnalisis, typeof(ConsultaAnalisisDto), serializerSettings);

            try
            {
                resultado = DocumentoInstanciaService.ObtenerVersionesDocumentosPorConfiguracionConsulta(consultaAnalisisDto);

                if (resultado.Resultado)
                {
                    var resultadoOperacionTaxonomia = DocumentoInstanciaService.ObtenerTaxonomiaBdPorId(consultaAnalisisDto.IdTaxonomiaXbrl);
                    if (resultadoOperacionTaxonomia.Resultado)
                    {
                        var taxonomia = (TaxonomiaXbrl)resultadoOperacionTaxonomia.InformacionExtra;

                        var listaDts = DocumentoInstanciaXbrlDtoConverter.ConvertirDTSDocumentoInstancia(taxonomia.ArchivoTaxonomiaXbrl);
                        var taxoDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(listaDts);

                        var estructuraDocumento = ConsultaAnalisisService.ObtenerInformacionConsultaDocumentos(consultaAnalisisDto, (List<DocumentoInstanciaXbrlDto>)resultado.InformacionExtra, taxoDto);
                        return this.ExportDatosEstructuraDocumento("Index", estructuraDocumento, "estructuraDocumento.xls", consultaAnalisisDto);

                    }
                }

            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = "Ocurrio un error al obtener informacion de una configuracion de una consulta de analisis: " + ex.Message;
                return Json(resultado);
            }

            return Json(resultado);
        }

        /// <summary>
        /// Descarga un archivo excel con la consulta de la ejecucion
        /// </summary>
        [HttpPost]
        [Authorize]
        [Route("DescargarEjecucionConsulta")]
        public IHttpActionResult DescargarEjecucionConsulta()
        {
            var serializerSettings = new JsonSerializerSettings();
            String consultaAnalisis = getFormKeyValue("consulta");
            String hechosAnalisis = getFormKeyValue("hechos");
            String contextosAnalisis = getFormKeyValue("contextos");

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            var consultaAnalisisDto = (ConsultaAnalisisDto)JsonConvert.DeserializeObject(consultaAnalisis, typeof(ConsultaAnalisisDto), serializerSettings);
            var hechosConsulta = (Dictionary<long, Dictionary<long, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>>>)JsonConvert.DeserializeObject(hechosAnalisis, typeof(Dictionary<long, Dictionary<long, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>>>), serializerSettings);
            var contextosConsulta = (Dictionary<long, List<AbaxXBRLCore.Common.Dtos.ContextoDto>>)JsonConvert.DeserializeObject(contextosAnalisis, typeof(Dictionary<long, List<AbaxXBRLCore.Common.Dtos.ContextoDto>>), serializerSettings);

            try
            {
                return this.ExportDataToExcel("Index", consultaAnalisisDto, "consultas.xls", hechosConsulta, contextosConsulta);

            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = "Ocurrio un error al obtener informacion de una configuracion de una consulta de analisis: " + ex.Message;
                return Json(resultado);
            }
        }

        /// <summary>
        /// Obtiene los contextos que se encuentren en las entidades
        /// </summary>
        [HttpPost]
        [Authorize]
        [Route("ObtenerListadoContextosPorEmpresas")]
        public IHttpActionResult ObtenerListadoContextosPorEmpresas()
        {
            var serializerSettings = new JsonSerializerSettings();
            String entidades = getFormKeyValue("entidades");

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            var analisisEntidades = (List<ConsultaAnalisisEntidadDto>)JsonConvert.DeserializeObject(entidades, typeof(List<ConsultaAnalisisEntidadDto>), serializerSettings);

            try
            {
                if (analisisEntidades != null)
                {
                    resultado = ConsultaAnalisisService.ObtenerListadoContextosPorEmpresas(analisisEntidades);
                }
            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = "Ocurrio un error al obtener los contextos de las entidades especificadas: " + ex.Message;
            }

            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene la lista de los diferentes conceptos que existen en las taxonomías en caché
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("ConceptosPorEntidad")]
        public IHttpActionResult ObtenerConceptosPorConsultaAnalisis()
        {
            String consultaAnalisis = getFormKeyValue("consulta");
            String idTaxonomia = getFormKeyValue("idTaxonomia");

            var serializerSettings = new JsonSerializerSettings();
            var consultaAnalisisDto = (ConsultaAnalisisDto)JsonConvert.DeserializeObject(consultaAnalisis, typeof(ConsultaAnalisisDto), serializerSettings);

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "Ok"
            };

            try
            {
                if (consultaAnalisisDto != null)
                {
                    resultado = DocumentoInstanciaService.ObtenerConceptosPorConsultaAnalisis(_cacheTaxonomiaXbrl, consultaAnalisisDto, long.Parse(idTaxonomia));
                }

            }
            catch (Exception ex)
            {
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
                resultado.Mensaje = "Ocurrio un error al obtener informacion de los hechos en una consulta de analisis: " + ex.Message;
            }


            return Ok(resultado);
        }


        /// <summary>
        /// Devuelve las emisoras asignadas a un usuario. 
        /// </summary>
        /// <param name="id">Id del usuario del que se requieren las emisoras.</param>
        /// <returns>Lista de emisoras asignadas al usuario.</returns>
        [HttpPost]
        [Route("ObtenerListaEntidades")]
        public IHttpActionResult ObtenerListaEntidades()
        {
            var resultadoOperacion = DocumentoInstanciaService.ObtenerEmpresasDocumentoInstancia();

            if (resultadoOperacion.Resultado)
            {
                var empresas = resultadoOperacion.InformacionExtra as List<String>;
                var emisoras = new List<Emisora>();
                for (var indiceEmpresa = 0; indiceEmpresa < empresas.Count; indiceEmpresa++)
                {
                    var empresa = empresas[indiceEmpresa];

                    if (empresa != null)
                    {
                        var emisora = new Emisora();
                        emisora.NombreCorto = empresa;
                        emisora.IdEmpresa = indiceEmpresa + 1;
                        emisoras.Add(emisora);
                    }
                }

                resultadoOperacion.InformacionExtra = emisoras;
            }
            return Ok(resultadoOperacion);
        }

        /// <summary>
        /// Realiza un export a formato excel para la consulta configurada
        /// </summary>
        /// <param name="view">Vista en presentacion que sera presentada la consulta</param>
        /// <param name="estructuraDocumento">Informacion de la la estructura del documento</param>
        /// <param name="filename">Nombre del archivo donde será mostrada la consulta</param>
        /// <param name="consultaAnalisisDto">Informacion de la consulta a realizar</param>
        /// <returns>Resultado de la acción</returns>
        private IHttpActionResult ExportDatosEstructuraDocumento(String view, Dictionary<string, object> estructuraDocumento, String filename, ConsultaAnalisisDto consultaAnalisisDto)
        {

            var memoryStreamSalida = DocumentoInstanciaService.ExportDatosEstructuraDocumento(estructuraDocumento, consultaAnalisisDto);

            var response = new HttpResponseMessage();
            var fileDownloadCookie = new CookieHeaderValue("fileDownload", "true") { Path = "/" };

            response.StatusCode = HttpStatusCode.OK;
            response.Content = new ByteArrayContent(memoryStreamSalida.ToArray());
            response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = filename;
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            response.Headers.AddCookies(new CookieHeaderValue[] { fileDownloadCookie });


            return ResponseMessage(response);
        }

        /// <summary>
        /// Realiza un export a formato excel para la consulta configurada
        /// </summary>
        /// <param name="view">Vista en presentacion que sera presentada la consulta</param>
        /// <param name="consultaAnalisisDto">Informacion de la consulta de configuracion base</param>
        /// <param name="filename">Nombre del archivo donde será mostrada la consulta</param>
        /// <param name="hechos">Listado de hechos de la consulta de informacion</param>
        /// <param name="contextos">Listado de contextos a mostrar</param>
        /// <returns>Resultado de la acción</returns>
        private IHttpActionResult ExportDataToExcel(String view, ConsultaAnalisisDto consultaAnalisisDto, String filename, Dictionary<long, Dictionary<long, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>>> hechos, Dictionary<long, List<AbaxXBRLCore.Common.Dtos.ContextoDto>> contextos)
        {

            //var gv = new GridView ();
            Table dt = new Table();
            TableRow headerRow = new TableRow();

            TableHeaderCell oTableCell = new TableHeaderCell();
            oTableCell.Text = "Concepto";
            oTableCell.ColumnSpan = 1;
            headerRow.Cells.Add(oTableCell);

            foreach (var idEmpresa in contextos.Keys)
            {
                var NombreEntidad = "";
                foreach (var entidad in consultaAnalisisDto.ConsultaAnalisisEntidad)
                {
                    if (entidad.IdEmpresa == idEmpresa)
                    {
                        NombreEntidad = entidad.NombreEntidad;
                        break;
                    }
                }
                oTableCell = new TableHeaderCell();
                oTableCell.Text = NombreEntidad;
                oTableCell.ColumnSpan = contextos[idEmpresa].Count;
                headerRow.Cells.Add(oTableCell);
            }

            dt.Rows.AddAt(0, headerRow);


            //Se agregan los contextos
            TableRow rowContextos = new TableRow();
            TableCell tableCell = new TableCell();
            tableCell.ColumnSpan = 1;
            tableCell.Text = "";
            rowContextos.Cells.Add(tableCell);
            foreach (var idEmpresa in contextos.Keys)
            {
                foreach (var contexto in contextos[idEmpresa])
                {

                    tableCell = new TableCell();
                    if (contexto.Fecha != null)
                    {
                        tableCell.Text = contexto.Fecha.Value.ToString("dd/MMM/yyyy");
                    }
                    else
                    {
                        tableCell.Text = contexto.FechaInicio.Value.ToString("dd/MMM/yyyy") + " AL " + contexto.FechaFin.Value.ToString("dd/MMM/yyyy");
                    }

                    tableCell.ColumnSpan = 1;
                    rowContextos.Cells.Add(tableCell);
                }
            }
            dt.Rows.AddAt(1, rowContextos);

            //Se agregan los hechos

            var indiceColumna = 2;
            foreach (var concepto in consultaAnalisisDto.ConsultaAnalisisConcepto)
            {
                TableRow rowHechosConcepto = new TableRow();
                tableCell = new TableCell();
                tableCell.ColumnSpan = 1;
                tableCell.Text = concepto.DescripcionConcepto;
                rowHechosConcepto.Cells.Add(tableCell);

                foreach (var idEmpresa in contextos.Keys)
                {
                    foreach (var contexto in contextos[idEmpresa])
                    {
                        tableCell = new TableCell();

                        if (hechos.ContainsKey(idEmpresa) && hechos[idEmpresa].ContainsKey(long.Parse(contexto.Id)) && hechos[idEmpresa][long.Parse(contexto.Id)].ContainsKey(concepto.IdConcepto))
                        {
                            var hecho = hechos[idEmpresa][long.Parse(contexto.Id)][concepto.IdConcepto];
                            tableCell.Text = hecho.Valor;
                        }
                        tableCell.ColumnSpan = 1;
                        rowHechosConcepto.Cells.Add(tableCell);
                    }
                }

                dt.Rows.AddAt(indiceColumna++, rowHechosConcepto);
            }


            dt.DataBind();
            var sw = new StringWriter();
            var htw = new HtmlTextWriter(sw);
            dt.RenderControl(htw);


            byte[] byteArray = Encoding.ASCII.GetBytes(sw.ToString());
            MemoryStream s = new MemoryStream(byteArray);

            var response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;
            response.Content = new StreamContent(s);
            response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = filename;
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.ms-excel");

            return ResponseMessage(response);
        }

    }
}