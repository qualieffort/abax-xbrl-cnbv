using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Constants
{
    /// <summary>
    /// Constantes generales para la interacción del api Cell Store.
    /// </summary>
    public class ConstantesCellStore
    {
        /// <summary>
        /// Contiene las distintas collecciones de mongo disponibles.
        /// </summary>
        public enum ColeccionMongoEnum
        {
            /// <summary>
            /// Colección principal con toda la información de los hechos.
            /// </summary>
            HECHO,
            /// <summary>
            /// Contiene los roles de presentación del linkbase de presentación.
            /// </summary>
            ROL_PRESENTACION,
            /// <summary>
            /// Contiene el reporte envío.
            /// </summary>
            ENVIO,
        }
    }
}
