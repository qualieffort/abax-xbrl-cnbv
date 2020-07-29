using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Clase con las constantes correspondientes a los parámetros de configuración
    /// </summary>
    public class ConstantsParametrosSistema
    {
        /// <summary>
        /// Paraémtro de configuración donde se encuentra la clave de la lista de distribución
        /// a la cuál se debe de enviar un mail notificando que existe error en un proceso de xbrl
        /// </summary>
        public const String CLAVE_PARAM_LISTA_DIST_ERROR_XBRL = "ListaDistribucionErrorSTIV";
        /// <summary>
        /// Parámetro de configuración donde se encuentra la clave de la lista de distribución
        /// para la notificación de un procesamiento de XBRL exitoso
        /// </summary>
        public const String CLAVE_PARAM_LISTA_DIST_EXITO_XBRL = "ListaDistribucionExitoSTIV";
        /// <summary>
        /// Clave del parámetro que corresponde al máximo número de errores a reportar cuando
        /// se validar un XBRL
        /// </summary>
        public const String MAX_ERROR_VALIDAR_XBRL = "MaximosMensajesErrorSTIV";
        /// <summary>
        /// Clave del parámetro del sistema que corresponde al número de reintentos de procesamiento 
        /// de las distribuciones de un documento XBRL
        /// </summary>
        public const String NUMERO_REINTENTOS_PROCESAR_XBRL = "NumeroIntentosEnvioSTIV";
    }
}
