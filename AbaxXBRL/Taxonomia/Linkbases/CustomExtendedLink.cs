using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Implementación de un elemento de tipo extendido personalizado en una taxonomía
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class CustomExtendedLink
    {
        /// <summary>
        /// El nombre calificado del elemento que define el tipo extendido
        /// </summary>
        public XmlQualifiedName Nombre { get; set; }

        /// <summary>
        /// La definición del elemento en la taxonomía
        /// </summary>
        public XmlSchemaElement Elemento { get; set; }
    }
}
