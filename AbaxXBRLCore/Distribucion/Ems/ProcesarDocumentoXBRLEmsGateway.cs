using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using Spring.Messaging.Ems.Common;
using Spring.Messaging.Ems.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TIBCO.EMS;

namespace AbaxXBRLCore.Distribucion.Ems
{
    /// <summary>
    /// Clase que permite realizar el envío de mensajes a la cola de solicitudes
    /// de procesamiento de archivo XBRL de forma asíncrona
    /// </summary>
    public class ProcesarDocumentoXBRLEmsGateway : EmsGatewaySupport
    {
        /// <summary>
        /// Nombre del Queue destino de Tibco que recibirá el mensaje
        /// </summary>
        public String ColaDestino { get; set; }
        /// <summary>
        /// Envía un mensaje para el procesamiento asíncrono a una cola de Tibco para 
        /// el procesamiento de distribuciones XBRL
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia a procesar</param>
        /// <param name="idVersion">Versión del documento de instancia a procesar</param>
        /// <returns>El resultado de la operación de envío a  la cola de TIBCO</returns>
        public ResultadoOperacionDto EnviarSolicitudProcesarXBRL(long idDocumentoInstancia, long idVersion,int reintento=0) {
            var resultado = new ResultadoOperacionDto();
            LogUtil.Info("Enviando mensaje a la cola para procesamiento asíncrono de documento: " + idDocumentoInstancia + ", Version:" + idVersion);
            try
            {
                EmsTemplate.SendWithDelegate(ColaDestino,
                delegate(ISession session)
                {
                    MapMessage message = session.CreateMapMessage();
                    message.SetLong(DistribucionDocumentoConstants.PARAM_MENSAJE_ID_DOCUMENTO, idDocumentoInstancia);
                    message.SetLong(DistribucionDocumentoConstants.PARAM_MENSAJE_ID_VERSION, idVersion);
                    message.SetInt(DistribucionDocumentoConstants.PARAM_MENSAJE_REINTENTO, reintento);
                    return message;
                });
                resultado.Resultado = true;
                LogUtil.Info("Mensaje enviado a la cola para procesamiento asíncrono de documento: " + idDocumentoInstancia + ", Version:" + idVersion);
            }
            catch (Exception ex) {
                LogUtil.Error("Ocurrió un error al enviar mensaje a la cola de mensajes: " + ColaDestino + ": \n\r" + ex.StackTrace);
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al enviar mensaje a la cola de mensajes: " + ColaDestino + ": " + ex.Message;
                resultado.Excepcion = ex.StackTrace;
                LogUtil.Error(resultado);
            }
            return resultado;
        }


    }
}
