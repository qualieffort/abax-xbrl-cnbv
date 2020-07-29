using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// DTO con los datos de configuración para la generación de un reporte.
    /// </summary>
    public class ConfiguracionReporteDTO
    {
        /// <summary>
        /// Diccionario con los listados que contiene las claves de los periodos que aplican para un rol determinado.
        /// </summary>
        public IDictionary<string, IList<string>> PeriodosPorRol { get; set; }
        /// <summary>
        /// Estilos que serán aplicados para este reporte en particular.
        /// </summary>
        public EstilosReporteDTO EstilosReporte { get; set; }
        /// <summary>
        /// Diccionario con los distintos diccionarios de etiquetas del reporte por lenguaje.
        /// </summary>
        public IDictionary<string, IDictionary<string, string>> EtiquetasReportePorLenguaje { get; set; }

    }
}
