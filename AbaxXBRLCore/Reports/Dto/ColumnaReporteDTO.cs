using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// Representa una columna de datos de un reporte, los datos tienen una fecha o periodo, una moneda y una entidad
    /// </summary>
    public class ColumnaReporteDTO
    {
        /// <summary>
        /// Indica el tipo de periodo de la columna  :  1: Instante,  2: Duración, 3: Para siempre,
        /// estas contantes están en PeriodoDTO
        /// </summary>
        public int TipoPeriodo { get; set; }
        /// <summary>
        /// Fecha de inicio del periodo
        /// </summary>
        public DateTime FechaInicio { get; set; }
        /// <summary>
        /// Fecha de fin del periodo
        /// </summary>
        public DateTime FechaFin { get; set; }
        /// <summary>
        /// Identificador de la entidad
        /// </summary>
        public String Entidad { get; set; }
        /// <summary>
        /// Identificador de la moneda
        /// </summary>
        public String Moneda { get; set; }
        /// <summary>
        /// Título visible de la columna
        /// </summary>
        public String Titulo { get; set; }

        /// <summary>
        /// Hechos en esta columna
        /// </summary>
        public IDictionary<String, CellStore.Modelo.Hecho> Hechos { get; set; }
    }
}
