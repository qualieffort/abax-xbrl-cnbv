using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Dtos.Sincronizacion
{
    /// <summary>
    /// Define los posibles tipos de movimiento que una emisora puede tener
    /// </summary>
    public class TipoMovimiento
    {
        /// <summary>
        /// Indica que la emisora se crea como nueva
        /// </summary>
        public static int ALTA = 1;
        /// <summary>
        /// Indica un cambio en los datos de la emisora
        /// </summary>
        public static int CAMBIO = 2;
        /// <summary>
        /// Indica un cambio de estatus a suspensión
        /// </summary>
        public static int BAJA = 3;
        /// <summary>
        /// Sin cambios en la emisora
        /// </summary>
        public static int SIN_CAMBIOS = 4;
        /// <summary>
        /// Registro con error
        /// </summary>
        public static int ERROR = 5;
    }
}
