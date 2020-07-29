using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Clase para consumir el resumen de estadísticas de tiempos de carga de archivos XBRL
    /// </summary>
    public class AbaxCargaInfoDto
    {
        /// <summary>
        /// Milisegundos empleados en la carga
        /// </summary>
        public long MsCarga { get;set;}
        /// <summary>
        /// Milisegundos empleados en la validacion 2.1 y calculo
        /// </summary>
        public long MsValidacion { get; set; }
        /// <summary>
        /// Milisegundos empleados en validar fórmulas
        /// </summary>
        public long MsFormulas { get; set; }
        /// <summary>
        /// Milisegundos empleados en la transformacion a DTO
        /// </summary>
        public long MsTransformacion { get; set; }
    }
}
