using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TIBCO.EMS;

namespace AbaxXBRLCore.Distribucion.Ems
{
    /// <summary>
    /// Implementación del componente para recibir los mensajes asíncronos con 
    /// las peticiones para el procesamiento de las distribuciones de un documento de instancia
    /// </summary>
    public class ProcesarDocumentoXBRLMessageListener : IMessageListener
    {
        private int messageCount;
        /// <summary>
        /// Contador de mensajes
        /// </summary>
        public int MessageCount
        {
            get { return messageCount; }
        }
        /// <summary>
        /// Servicio para el procesamiento de distribuciones
        /// </summary>
        public IProcesarDistribucionDocumentoXBRLService ProcesarDistribucionDocumentoXBRLService { get; set; }
        /// <summary>
        /// Servicio para la consulta de parámetros generales de sistema
        /// </summary>
        public IParametroSistemaService ParametroSistemaService { get; set; }

        public ProcesarDocumentoXBRLEmsGateway ProcesarDocumentoXBRLEmsGateway { get; set; }
        /// <summary>
        /// Método que atiene una solicitud de procesamiento de distribuciones de documentos de instancia  XBRL
        /// Intenta realizar las distribuciones configuradas que no han sido todavía exitosas
        /// </summary>
        /// <param name="message"></param>
        public void OnMessage(Message message)
        {           
            messageCount++;
            LogUtil.Info(String.Format("({0})Mensaje recibido para el procemiento de un documento XBRL",messageCount));
            try
            {
                MapMessage mapMessage = message as MapMessage;
                if (mapMessage != null)
                {
                    LogUtil.Info("Map Message (count)  = " + mapMessage.FieldCount);

                    if (mapMessage.ItemExists(DistribucionDocumentoConstants.PARAM_MENSAJE_ID_DOCUMENTO) && mapMessage.ItemExists(DistribucionDocumentoConstants.PARAM_MENSAJE_ID_VERSION))
                    {
                        var idDocumento = mapMessage.GetLong(DistribucionDocumentoConstants.PARAM_MENSAJE_ID_DOCUMENTO);
                        var idVersion = mapMessage.GetLong(DistribucionDocumentoConstants.PARAM_MENSAJE_ID_VERSION);

                        var resultado = ProcesarDistribucionDocumentoXBRLService.
                            DistribuirDocumentoInstanciaXBRL(idDocumento, idVersion, new Dictionary<string, object>());
                        //Resultado no exitoso, programar reintento
                        if (!resultado.Resultado)
                        {
                            int reintento = 0;
                            var numReintentos = Int32.Parse(ParametroSistemaService.ObtenerValorParametroSistema(ConstantsParametrosSistema.NUMERO_REINTENTOS_PROCESAR_XBRL, "0"));
                            //Realizar reintento de procesamiento
                            if (mapMessage.ItemExists(DistribucionDocumentoConstants.PARAM_MENSAJE_REINTENTO))
                            {
                                reintento = mapMessage.GetInt(DistribucionDocumentoConstants.PARAM_MENSAJE_REINTENTO);
                            }
                            LogUtil.Info(String.Format("Distribución no exitosa IdDocumento {0}, reintento: {1}",
                                idDocumento, reintento));
                            if (reintento < numReintentos)
                            {
                                reintento++;
                                LogUtil.Info(String.Format("Enviando reintento {1} para el documento {0}",idDocumento, reintento));
                                ProcesarDocumentoXBRLEmsGateway.EnviarSolicitudProcesarXBRL(idDocumento, 
                                    idVersion, reintento);
                            }
                        }
                    }
                    else {
                        LogUtil.Error("Error al procesar mensaje: " + message.CorrelationID + ": parámetros incompletos");
                    }
                } 
            }
            catch (Exception ex) {
                LogUtil.Info("Error al procesar mensaje: " + message.CorrelationID);
                LogUtil.Error(ex);
            }
        }
    }
}
