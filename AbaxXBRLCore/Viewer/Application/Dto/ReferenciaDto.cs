using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual representa una referencia de un concepto de la taxonomía XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ReferenciaDto
    {
        /// <summary>
        /// Las partes que componen a la referencia.
        /// </summary>
        public IList<ParteReferenciaDto> Partes { get; set; }

        /// <summary>
        /// El arco rol con el que se asoció la referencia al concepto de la taxonomía.
        /// </summary>
        public string Rol { get; set; }
    }
}