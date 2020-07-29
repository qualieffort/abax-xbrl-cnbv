using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Representa una nota al pie de página en un documento instancia. Una nota al pie de página es de tipo recurso por lo que hereda todas sus propiedades.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class NotaAlPie : Recurso
    {

        /// <summary>
        /// El Arco Rol utilizado por defecto en un elemento <code>&lt;footnoteArc&gt;</code>
        /// </summary>
        public const string ArcoRolNota = "http://www.xbrl.org/2003/arcrole/fact-footnote";

        /// <summary>
        /// El idioma en el que se expresa el contenido de la nota al pie de página.
        /// </summary>
        public string Idioma { get; set; }

        /// <summary>
        /// Notas al pie asociadas a esta nota al pie.
        /// </summary>
        public IList<NotaAlPie> Notas { get; set; }
    }
}
