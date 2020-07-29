using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Definición de las constantes utilizadas en los procesos de distribución de documentos de instancia
    /// </summary>
    public class DistribucionDocumentoConstants
    {
        /// <summary>
        /// Valor del estatus cuando se termina de procesar de manera correcta
        /// </summary>
        public const int DISTRIBUCION_ESTATUS_APLICADO = 1;

        /// <summary>
        /// Valor del estatus cuando se termina de procesar de manera incorrecta
        /// </summary>
        public const int DISTRIBUCION_ESTATUS_ERROR = 2;


        /// <summary>
        /// Valor del estatus de los documentos pendientes de procesar
        /// </summary>
        public const int DISTRIBUCION_ESTATUS_PENDIENTE = 0;
        /// <summary>
        /// Llave del parámetro de identificador de documento de instancia en mensaje de cola de procesamiento
        /// </summary>
        public const String PARAM_MENSAJE_ID_DOCUMENTO = "IdDocumentoInstancia";
        /// <summary>
        /// Llave del parámetro de identificador de versión en mensaje de cola de procesamiento
        /// </summary>
        public const String PARAM_MENSAJE_ID_VERSION = "IdVersion";
        /// <summary>
        /// Llave del parámetro de número de reintentos en mensaje de cola de procesamiento
        /// </summary>
        public const String PARAM_MENSAJE_REINTENTO = "Reintento";
    }
}
