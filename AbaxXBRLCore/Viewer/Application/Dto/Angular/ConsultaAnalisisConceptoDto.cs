using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// DTO con la informacion de los conceptos que tiene una configuración de la consulta de analisis
    /// </summary>
    public class ConsultaAnalisisConceptoDto
    {
        /** El identificador unico de la consulta de analisis */
        public long IdConsultaAnalisis{ get; set; }

        /** El identificador unico de la consulta de analisis de un concepto*/
        public long IdConsultaAnalisisConcepto{ get; set; }

        /** El identificador del concepto al cual pertenece este hecho */
        public string IdConcepto{ get; set; }

        /** Descripcion del concepto */
        public string DescripcionConcepto { get; set; }

    }
}
