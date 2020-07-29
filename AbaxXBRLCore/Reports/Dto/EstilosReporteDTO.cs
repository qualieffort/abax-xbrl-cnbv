using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// Clase que contiene los estilos generales de los reportes.
    /// </summary>
    public class EstilosReporteDTO
    {

        /// <summary>
        /// Multiplo que se aplica para asignar tabuladores por cada nivel de indetanción.
        /// </summary>
        public int MultiploTabuladores { get; set; }
        /// <summary>
        /// Indica el tamaño de la fuente
        /// </summary>
        public int? Tamaniofuente { get; set; }
        /// <summary>
        /// Indica si la letra es negrita
        /// </summary>
        public bool? Negrita { get; set; } 

    }
}
