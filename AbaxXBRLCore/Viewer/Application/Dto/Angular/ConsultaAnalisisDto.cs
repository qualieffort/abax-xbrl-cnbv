using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// DTO con la informacion de la Consulta de analisis
    /// </summary>
    public class ConsultaAnalisisDto
    {
        /// <summary>
        /// Identificador de la configuracion de la consulta de analisis
        /// </summary>
        public long IdConsultaAnalisis { get; set; }

        /// <summary>
        /// Identificador de la taxonomía
        /// </summary>
        public long IdTaxonomiaXbrl { get; set; }

        /// <summary>
        /// Nombre de la configuracion de la consulta de analisis
        /// </summary>
        public string Nombre { get; set; }

        /// <summary>
        /// Idioma seleccionado para presentar los conceptos
        /// </summary>
        public string Idioma { get; set; }


        /// <summary>
        /// Listado de los conceptos que conforman la configuracion de la consulta de analisis
        /// </summary>
        public List<ConsultaAnalisisConceptoDto> ConsultaAnalisisConcepto { get; set; }


        /// <summary>
        /// Listado de los periodos que conforman la configuracion de la consulta de analisis
        /// </summary>
        public List<ConsultaAnalisisPeriodoDto> ConsultaAnalisisPeriodo { get; set; }

        /// <summary>
        /// Listado de las entidades que conforman la configuracion de la consulta de analisis
        /// </summary>
        public List<ConsultaAnalisisEntidadDto> ConsultaAnalisisEntidad { get; set; }

        /// <summary>
        /// Listado de las entidades que conforman la configuracion de la consulta de analisis
        /// </summary>
        public List<ConsultaAnalisisRolTaxonomiaDto> ConsultaAnalisisRolTaxonomia { get; set; }
        

    }
}
