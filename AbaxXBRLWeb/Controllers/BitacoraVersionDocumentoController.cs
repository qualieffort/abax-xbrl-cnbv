using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Dtos.Sincronizacion;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Distribucion.Ems;
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
    /// Controlador para los servicios de monitoreo de la Bitacora de versionamiento de documentos.
    /// </summary>
    [RoutePrefix("BitacoraVersionDocumento")]
    [Authorize]
    public class BitacoraVersionDocumentoController: BaseController
    {

        /// <summary>
        /// Utilería auxiliar para el parseo de información entre entidades y dtos.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();
        /// <summary>
        /// Servicio que encapsula la lógica de negocio para la administración de al Bitacor de versiones de documentos.
        /// </summary>
        private IBitacoraVersionDocumentoService BitacoraVersionDocumentoService;
        

        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public BitacoraVersionDocumentoController()
        {
            try
            {
                BitacoraVersionDocumentoService = (IBitacoraVersionDocumentoService)ServiceLocator.ObtenerFabricaSpring().GetObject("BitacoraVersionDocumentoService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }
        /// <summary>
        /// Retorna un listado de los registros en bitacora de varsion de documentos.
        /// </summary>
        /// <returns>Respuesta con el listado de registros.</returns>
        [Route("ObtenListaBitacoraVersionDocumentos")]
        [HttpPost]
        public IHttpActionResult ObtenListaBitacoraVersionDocumentos()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("json");
                var paginacion = new PaginacionSimpleDto<BitacoraVersionDocumentoDto>();
                JsonConvert.PopulateObject(param, paginacion);
                
                resultado.InformacionExtra = BitacoraVersionDocumentoService.ObtenElementosPaginados(paginacion);
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
        /// Retorna un listado de los registros en bitacora de varsion de documentos.
        /// </summary>
        /// <returns>Respuesta con el listado de registros.</returns>
        [Route("ObtenListaBitacoraArchivosBMV")]
        [HttpPost]
        public IHttpActionResult ObtenListaBitacoraArchivoBMV()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("json");
                var paginacion = new PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto>();
                JsonConvert.PopulateObject(param, paginacion);

                resultado.InformacionExtra = BitacoraVersionDocumentoService.ObtenElementosPaginadosBitacoraArchivosBMV(paginacion);
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
        /// Exporta a excel el listado de registros en la bitacora.
        /// </summary>
        /// <returns>Respuesta con el listado de registros.</returns>
        [Route("ExportarListaBitacoraArchivosBMV")]
        [HttpPost]
        public IHttpActionResult ExportarListaBitacoraArchivosBMV()
        {
            var entidades = BitacoraVersionDocumentoService.ObtenTodosElementosBitacoraArchivosBMV();
            var estados = new Dictionary<int, string>() { { 0, "Pendiente" }, { 1, "Enviado" }, { 2, "Error" } };

            foreach (var entidad in entidades)
            {
                if (estados.ContainsKey(entidad.Estatus))
                {
                    entidad.DescripcionEstado = estados[entidad.Estatus];
                }
                else
                {
                    entidad.DescripcionEstado = "Desconocido";
                }

            }

            Dictionary<String, String> columns = new Dictionary<String, String>()
            {
                { "FechaHoraProcesamiento", "Fecha proceso" },
                { "DescripcionEstado", "Estado" },
                { "RutaOrigenArchivoEmisoras", "Archivo Emisora" },
                { "RutaDestinoArchivoFideicomisos", "Archivo Fideicomisos" },
                { "NumeroEmisorasReportadas", "# de emisoras reportadas" },
                { "NumeroFideicomisosReportados", "# de fideicomsios reportadas" },
            };

            return this.ExportDataToExcel("Index", entidades, "Bitacora.xls", columns);
        }


        /// <summary>
        /// Exporta a excel el listado de registros en la bitacora.
        /// </summary>
        /// <returns>Respuesta con el listado de registros.</returns>
        [Route("ExportaBitacoraVersionDocumentos")]
        [HttpPost]
        public IHttpActionResult ExportaBitacoraVersionDocumentos()
        {
            var entidades = BitacoraVersionDocumentoService.ObtenTodosElementos();
            var estados = new Dictionary<int,string>() {{0,"Pendiente"}, {1,"Enviado"}, { 2, "Error"}};

            foreach (var entidad in entidades) 
            {
                if (estados.ContainsKey(entidad.Estatus))
                {
                    entidad.DescripcionEstado = estados[entidad.Estatus];
                }
                else 
                {
                    entidad.DescripcionEstado = "Desconocido";
                }
                
            }

            Dictionary<String, String> columns = new Dictionary<String, String>() 
            { 
                { "Empresa", "Empresa" },
                { "Documento", "Nombre Documento" }, 
                { "Version", "Version Documento" }, 
                { "Usuario", "Nombre Usuario" }, 
                { "DescripcionEstado", "Estado" },
                { "MensajeError", "Error" },
                { "FechaRegistro", "Fecha Creación" },
                { "FechaUltimaModificacion", "Fecha Última Modificación" },
            };

            return this.ExportDataToExcel("Index", entidades, "BitacoraVersionDocumentos.xls", columns);
        }

        /// <summary>
        /// Exporta .
        /// </summary>
        /// <returns>Respuesta con el listado de registros.</returns>
        [Route("ReProcesarVersionDocumentos")]
        [HttpPost]
        public IHttpActionResult ReProcesarVersionDocumentos()
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true, };
            try
            {
                var param = getFormKeyValue("idsReprocesar");
                var paramDistribucionesReprocesar = getFormKeyValue("idsDistribucionesReprocesar");
                var idsReprocesar = new List<long>();
                var idsDistribucionesReprocesar = new List<long>();
                JsonConvert.PopulateObject(param, idsReprocesar);
                JsonConvert.PopulateObject(paramDistribucionesReprocesar, idsDistribucionesReprocesar);
                var envioMensajes = (ProcesarDocumentoXBRLEmsGateway)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDocumentoXBRLGateway");

                if (idsDistribucionesReprocesar != null && idsDistribucionesReprocesar.Count > 0) 
                {
                    foreach (var idDistribucion in idsDistribucionesReprocesar)
                    {
                        BitacoraVersionDocumentoService.ActualizaEstadoDistribucion(idDistribucion, DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_ERROR);
                        var idBVersion = BitacoraVersionDocumentoService.ObtenBitacoraVersionDocumentoId(idDistribucion);
                        if (idBVersion > 0 && idsReprocesar != null && !idsReprocesar.Contains(idBVersion))
                        {
                            idsReprocesar.Add(idBVersion);
                        }
                    }
                }

                if(idsReprocesar != null)
                {
                    foreach(var idProc in idsReprocesar)
                    {
                        var versionDoc = BitacoraVersionDocumentoService.ObtenerVersionDocumentoInstanciaSinDatosPorIdBitacoraVersionDocumento(idProc);
                        if (versionDoc != null)
                        {
                            envioMensajes.EnviarSolicitudProcesarXBRL(versionDoc.IdDocumentoInstancia, versionDoc.Version);
                            
                        }
                        else
                        {
                            resultado.Resultado = false;
                            resultado.Mensaje = "No existe el registro de bitácora:" + idProc;
                            break;
                        }
                    }
                    resultado.Resultado = true;
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
        /// Obtiene un contador de elementos basado en su estado.
        /// </summary>
        /// <returns>Contador de los registros que tienen el estado pedido.</returns>
        [Route("VersionDocumentosPorEstado")]
        [HttpPost]
        public IHttpActionResult VersionDocumentosPorEstado()
        {
            var resultado = new ResultadoOperacionDto { Resultado = true };
            try
            {
                var param = getFormKeyValue("estado");

                if (param == null) 
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "No se mando el parametro estado.";
                    return Ok(resultado);
                }

                var estado = Convert.ToInt32(param);
                var contador = BitacoraVersionDocumentoService.ObtenTodosElementos()
                                .Where(bitacora => bitacora.Estatus == estado).Count();

                resultado.InformacionExtra = contador;
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
        /// Obtiene un contador de elementos basado en su estado.
        /// </summary>
        /// <returns>Contador de los registros que tienen el estado pedido.</returns>
        [Route("DistribucionDocumentosPorEstado")]
        [HttpPost]
        public IHttpActionResult DistribucionDocumentosPorEstado()
        {
            var resultado = new ResultadoOperacionDto { Resultado = true };
            try
            {
                var param = getFormKeyValue("estado");

                if (param == null)
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "No se mando el parametro estado.";
                    return Ok(resultado);
                }

                var distribucionDocumnetos = (IBitacoraDistribucionDocumentoService)ServiceLocator.ObtenerFabricaSpring().GetObject("BitacoraDistribucionDocumentoService");
                var estado = Convert.ToInt32(param);
                var contador = distribucionDocumnetos.ObtenTodosElementos()
                                .Where(bitacora => bitacora.Estatus == estado).Count();

                resultado.InformacionExtra = contador;
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