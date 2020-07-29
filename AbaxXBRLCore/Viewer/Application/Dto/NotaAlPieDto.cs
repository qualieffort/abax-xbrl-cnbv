using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa una nota al pie a un hecho en un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class NotaAlPieDto
    {
        /// <summary>
        /// El idioma en que está expresada la nota al pie.
        /// </summary>
        public string Idioma { get; set; }

        /// <summary>
        /// El contenido de la nota al pie
        /// </summary>
        public string Valor { get; set; }
        /// <summary>
        /// Rol de la nota
        /// </summary>
        public string Rol { get; set; }
    }
}
