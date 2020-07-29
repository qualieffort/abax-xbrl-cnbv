using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Dtos.Sincronizacion
{
    /// <summary>
    /// DTO que representa a un fideicomiso importado de la información compartida por la BMV
    /// </summary>
    public class FideicomisoImportadoBMVDto
    {
        /// <summary>
        /// Número de línea del fideicomiso en el archivo
        /// </summary>
        public long NumeroLinea { get; set; }
        /// <summary>
        /// Clave de pizarra del fideicomiso
        /// </summary>
        public String ClaveFideicomiso { get; set; }
        /// <summary>
        /// Número del fideicomiso
        /// </summary>
        public String NumeroFideicomiso { get; set; }
        /// <summary>
        /// Razón social del fiduciario emisor del fideicomiso
        /// </summary>
        public String RazonSocialFiduciario { get; set; }
        /// <summary>
        /// Razón social del fideicomitente del fideicomiso
        /// </summary>
        public String RazonSocialFideicomitente { get; set; }

        /// <summary>
        /// Tipo de movimiento del registro
        /// </summary>
        public int TipoMovimiento { get; set; }

        /// <summary>
        /// Error en el registro
        /// </summary>
        public String Error { get; set; }
    }
}
