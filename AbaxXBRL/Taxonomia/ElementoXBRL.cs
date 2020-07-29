using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa un elemento dentro de la taxonomía XBRL como un recurso, un concepto, un rol, un arcoRol o una parte.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ElementoXBRL
    {
        /// <summary>
        /// El identificador del elemento de la taxonomía.
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// El elemento al cual esta clase sirve como decorator.
        /// </summary>
        public XmlSchemaElement Elemento { get; set; }

        public override String ToString()
        {
            return Id;
        }
    }
}
