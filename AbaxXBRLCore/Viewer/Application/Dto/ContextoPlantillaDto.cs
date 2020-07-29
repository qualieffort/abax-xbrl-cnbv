using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa un contexto utilizando en una plantilla de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ContextoPlantillaDto
    {

        /// <summary>
        /// El identificador único del contexto dentro del documento instancia
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El periodo de reporte del contexto
        /// </summary>
        public PeriodoPlantillaDto Periodo { get; set; }

        /// <summary>
        /// El identificador de la entidad
        /// </summary>
        public EntidadPlantillaDto Entidad { get; set; }

        /// <summary>
        /// El fragmento con el XML que describe el escenario del contexto
        /// </summary>
        public string Escenario { get; set; }

        /// <summary>
        /// Indica si el escenario del contexto contiene información dimensional
        /// </summary>
        public bool ContieneInformacionDimensional { get; set; }

        /// <summary>
        /// Contiene los valores de miembros de dimensión existentes en el contexto
        /// </summary>
        public IList<DimensionInfoDto> ValoresDimension { get; set; }
    }
}
