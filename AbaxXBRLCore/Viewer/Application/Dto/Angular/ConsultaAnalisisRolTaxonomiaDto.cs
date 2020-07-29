using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// DTO con la informacion de los roles de la taxonomia que estan considerados en la configuracion de una consulta al repositorio
    /// </summary>
    public class ConsultaAnalisisRolTaxonomiaDto
    {
        /** El identificador unico de la consulta de analisis */
        public long IdConsultaAnalisis { get; set; }


        /** El identificador unico de la consulta de analisis de una rol de la taxonomia*/
        public long IdConsultaAnalisisRolTaxonomia { get; set; }

        /** Identificador del rol de la taxonomia*/
        public string Uri { get; set; }

        /** Descripción del rol de la taxonomia*/
        public string DescripcionRol { get; set; }

    }
}
