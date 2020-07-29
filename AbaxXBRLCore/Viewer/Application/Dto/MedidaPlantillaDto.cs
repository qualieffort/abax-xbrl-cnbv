using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa una medida utilizada en una plantilla de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class MedidaPlantillaDto
    {
        /// <summary>
        /// El nombre de la medida
        /// </summary>
        public string Nombre { get; set; }

        /// <summary>
        /// El espacio de nombres de la medida
        /// </summary>
        public string EspacioNombres { get; set; }
    }
}
