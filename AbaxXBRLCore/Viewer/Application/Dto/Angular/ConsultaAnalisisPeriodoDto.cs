using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// DTO con la informacion de los periodos que tiene una configuración de la consulta de analisis
    /// </summary>
    public class ConsultaAnalisisPeriodoDto
    {

        /** El identificador unico de la consulta de analisis */
        public long IdConsultaAnalisis { get; set; }

        /** El identificador unico de la consulta de analisis de un periodo*/
        public long IdConsultaAnalisisPeriodo { get; set; }

        /** indica el nombre del periodo */
        public string Periodo { get; set; }

        /** indica la fecha de inicio del periodo  */
        public DateTime? FechaFinal { get; set; }

        /** indica la fecha final del periodo */
        public DateTime? FechaInicio { get; set; }


        /** indica la fecha de un instante*/
        public DateTime? Fecha { get; set; }

        /** indica si se trata de un contexto de tipo instante o periodo*/
        public int? TipoPeriodo { get; set; }

        /** indica el año del periodo de la configuracion de la consulta*/
        public int? Anio { get; set; }

        /** indica el trimestre del periodo de la configuracion de la consulta*/
        public int? Trimestre {get;set;}




    }
}
