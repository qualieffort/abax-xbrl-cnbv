using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual representa una etiqueta de un elemento de la taxonomía XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class EtiquetaDto
    {
        /// <summary>
        /// El arco rol utilizado al asignar esta etiqueta al concepto
        /// </summary>
        public string Rol { get; set; }

        /// <summary>
        /// El valor de la etiqueta
        /// </summary>
        public string Valor { get; set; }

        /// <summary>
        /// El idioma en que está expresada la etiqueta
        /// </summary>
        public string Idioma { get; set; }

    }
}