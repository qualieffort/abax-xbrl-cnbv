using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa un periodo de reporte utilizando en una plantilla de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class PeriodoPlantillaDto
    {
        /// <summary>
        /// El tipo de periodo
        /// </summary>
        public int Tipo { get; set; }

        /// <summary>
        /// La fecha que contiene el instante de reporte
        /// </summary>
        public string FechaInstante { get; set; }

        /// <summary>
        /// La fecha que contiene la fecha de inicio de la duración de tiempo de este periodo
        /// </summary>
        public string FechaInicio { get; set; }

        /// <summary>
        /// La fecha que contiene la fecha de fin de la duración de tiempo de este periodo
        /// </summary>
        public string FechaFin { get; set; }
    }
}
