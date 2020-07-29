using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual representa una parte de la Referencia de un concepto de la taxonomía XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ParteReferenciaDto
    {
        /// <summary>
        /// El nombre de la etiqueta que representa la parte de la referencia
        /// </summary>
        public string Nombre { get; set; }

        /// <summary>
        /// El espacio de nombres de la etiqueta que representa la parte de la referencia
        /// </summary>
        public string EspacioNombres { get; set; }

        /// <summary>
        /// El valor de la parte de la referencia
        /// </summary>
        public string Valor { get; set; }

    }
}