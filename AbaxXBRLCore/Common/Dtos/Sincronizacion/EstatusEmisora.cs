using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Dtos.Sincronizacion
{
    /// <summary>
    /// Contiene los estatus esperados en el documento de importación de bmv
    /// </summary>
    public class EstatusEmisora
    {
        /// <summary>
        /// Estatus emisora activa
        /// </summary>
        public static String ACTIVA = "ACTIVA";
        /// <summary>
        /// Estatus emisora listado preventivo
        /// </summary>
        public static String LISTADO_PREVENTIVO = "LISTADO_PREVENTIVO";
        /// <summary>
        /// Estatus emisora suspendida
        /// </summary>
        public static String SUSPENDIDA = "SUSPENDIDA";
    }
}
