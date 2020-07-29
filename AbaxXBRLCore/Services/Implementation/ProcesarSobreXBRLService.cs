using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;

namespace AbaxXBRLCore.Services.Implementation
{

    /// <summary>
    /// Implementación del servicio de negocio para el procesamiento de Sobre XBRL.
    /// </summary>
    public class ProcesarSobreXBRLService : IProcesarSobreXBRLService
    {

        /// <summary>
        /// Servicio para realizar operaciones con un documento de instancia.
        /// </summary>
        public IAlmacenarDocumentoInstanciaService AlmacenarDocumentoInstanciaService { get; set; }

        /// <summary>
        /// Servicio para consulta de datos de empresas y sus relaciones
        /// </summary>
        public IEmpresaService EmpresaService { get; set; }

        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDocumentoInstanciaService DocumentoInstanciaService = null;

        /// <summary>
        /// Servicio para validación de documentos XBRL
        /// </summary>
        public IValidarDocumentoInstanciaService ValidarDocumentoInstanciaService { get; set; }

        /// <inheritdoc/> 
        public ResultadoOperacionDto ObtenerSobreXbrl(string rutaArchivo)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto {
                Resultado = false
            };

            ResultadoRecepcionSobreXBRLDTO resultadoRecepcionSobreXBRLDTO = new ResultadoRecepcionSobreXBRLDTO();
            using (StreamReader streamReader = new StreamReader(rutaArchivo))
            {
                string json = streamReader.ReadToEnd();
                resultadoRecepcionSobreXBRLDTO = JsonConvert.DeserializeObject<ResultadoRecepcionSobreXBRLDTO>(json);

                resultadoOperacionDto.Resultado = true;
                resultadoOperacionDto.InformacionExtra = resultadoRecepcionSobreXBRLDTO;
            }

            return resultadoOperacionDto;
        }

        /// <inheritdoc/> 
        public ResultadoOperacionDto ProcesarXbrlSobre(string rutaArchivo, string cvePizarra)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto
            {
                Resultado = false
            };

            ResultadoRecepcionSobreXBRLDTO resultadoRecepcionSobreXBRLDTO = new ResultadoRecepcionSobreXBRLDTO();
            var pathXbrlAdjunto = "";
            var parametros = new Dictionary<string, string>();
            parametros.Add("cvePizarra", cvePizarra);

            //Se obtiene el objeto ResultadoRecepcionSobreXBRLDTO de la ubicación especificada. 
            resultadoOperacionDto = ObtenerSobreXbrl(rutaArchivo);

            if (resultadoOperacionDto.Resultado)
            {
                resultadoRecepcionSobreXBRLDTO = (ResultadoRecepcionSobreXBRLDTO)resultadoOperacionDto.InformacionExtra;
            }
            
            if (resultadoRecepcionSobreXBRLDTO != null)
            {
                //Llamamos al servicio para obtener el xbrl adjunto.
                resultadoOperacionDto = AlmacenarDocumentoInstanciaService.ObtenerPathTemporalXBRLAdjunto(resultadoRecepcionSobreXBRLDTO);
                pathXbrlAdjunto = (String)resultadoOperacionDto.InformacionExtra;
            }

            if (resultadoOperacionDto.Resultado)
            {
                resultadoOperacionDto = EmpresaService.ValidarTickersXbrlSobre(cvePizarra, resultadoRecepcionSobreXBRLDTO.claveCotizacion);
                if (resultadoOperacionDto.Resultado)
                {
                    parametros.Add("cveFideicomitente", resultadoRecepcionSobreXBRLDTO.claveCotizacion);

                    ResultadoOperacionDto resultadoOperacionObtenerPeriodicidadDto = new ResultadoOperacionDto();
                    resultadoOperacionObtenerPeriodicidadDto = DocumentoInstanciaService.ObtenerPeriodicidadReportePorEspacioNombresPrincipal(resultadoRecepcionSobreXBRLDTO.espacioNombresArchivoAdjunto);

                    //Revisar que periodicidad es la taxonomia para asignar valorPeroiodo o fechaTrimestre según sea el caso.
                    if (resultadoOperacionDto.Resultado)
                    {

                        PeriodicidadReporte periodicidadReporte = (PeriodicidadReporte)resultadoOperacionObtenerPeriodicidadDto.InformacionExtra;

                        switch (periodicidadReporte.Nombre)
                        {
                            case "Anual":
                                //para anual el validador solo verifica que sea un año.
                                parametros.Add("valorPeroiodo", resultadoRecepcionSobreXBRLDTO.anioReportado.ToString());
                                break;
                            case "Mensual":
                                //para anexto T solo se verifica que el periodo sea de un año y mes válido.
                                if (resultadoRecepcionSobreXBRLDTO.mesReportado != null && resultadoRecepcionSobreXBRLDTO.mesReportado.ToString().Count() > 0)
                                {
                                    string mesReportado = resultadoRecepcionSobreXBRLDTO.mesReportado.ToString().Count() == 1 ? "0" + resultadoRecepcionSobreXBRLDTO.mesReportado.ToString() : resultadoRecepcionSobreXBRLDTO.mesReportado.ToString();
                                    parametros.Add("valorPeroiodo", resultadoRecepcionSobreXBRLDTO.anioReportado.ToString() + "-" + mesReportado + "-01");
                                }
                                break;
                            case "Trimestral":
                                //para trimestrales se válida la fecha fin de periodo.                                           
                                parametros.Add("fechaTrimestre", UtilAbax.obtenerFechaTrimestre(resultadoRecepcionSobreXBRLDTO.anioReportado.Value, resultadoRecepcionSobreXBRLDTO.trimestreReportado));
                                break;
                            default:
                                break;
                        }
                    }

                    if (!pathXbrlAdjunto.Equals(""))
                    {
                        resultadoOperacionDto = ValidarDocumentoInstanciaService.ValidarDocumentoInstanciaXBRL(null, pathXbrlAdjunto, resultadoRecepcionSobreXBRLDTO.nombreArchivoAdjunto, parametros);

                        if (resultadoOperacionDto.Resultado)
                        {
                            resultadoOperacionDto = AlmacenarDocumentoInstanciaService.GuardarDocumentoInstanciaXBRL(null, pathXbrlAdjunto, resultadoRecepcionSobreXBRLDTO.nombreArchivoAdjunto, parametros);

                            //Se mandan los mensajes de distribucion a la cola.
                            /*if (resultado.Resultado)
                            {
                                var identificadorDocNuevo = resultado.InformacionExtra as long[];

                                var idDocmentoInstancia = identificadorDocNuevo[0];
                                var idVersionDocumento = identificadorDocNuevo[1];
                                if (USAR_QUEUE)
                                {                                            
                                    var envioMensajes = (ProcesarDocumentoXBRLEmsGateway)ServiceLocator.ObtenerFabricaSpring().GetObject("ProcesarDocumentoXBRLGateway");
                                    envioMensajes.EnviarSolicitudProcesarXBRL(idDocmentoInstancia, idVersionDocumento);
                                }
                            }*/
                        }

                    }

                }

            }

            return resultadoOperacionDto;
        }

    }
}
