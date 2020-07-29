using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// DTO con la informacion de las entidades que tiene una configuración de la consulta de analisis
    /// </summary>
    public class ConsultaAnalisisEntidadDto
    {
        /** El identificador unico de la consulta de analisis */
        public long IdConsultaAnalisis { get; set; }

        /** El identificador unico de la consulta de analisis de una entidad*/
        public long IdConsultaAnalisisEntidad{ get; set; }

        /** Valor del identificador de la entidad*/
        public long IdEmpresa{ get; set; }

        /** Nombre de la entidad*/
        public string NombreEntidad { get; set; }

    }
}
