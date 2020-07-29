using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa una entidad contenido dentro de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class EntidadPlantillaDto
    {
        /// <summary>
        /// El espacio de nombres donde se ha definido el identificador de la entidad
        /// </summary>
        public string EsquemaId { get; set; }

        /// <summary>
        /// El identificador único de la entidad en el documento instancia
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El fragmento XML que contiene el segmento de la entidad
        /// </summary>
        public string Segmento { get; set; }

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
