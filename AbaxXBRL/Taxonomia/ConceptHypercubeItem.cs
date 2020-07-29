using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un concepto definido en la taxonomía cuyo grupo de sustitución es <code>hypercubeItem</code>.
    /// Un hipercubo representa un conjunto de dimensiones en la declaración de una taxonomía dimensional. Es un elemento abastracto
    /// que participa en relaciones del tipo <code>has-hypercube</code> y del tipo <code>hypercube-dimension</code>
    /// <author>Emigdio Hernández Rodríguez</author>
    /// <version>1.0</version>
    /// </summary>
    public class ConceptHypercubeItem : ConceptItem
    {
        
        /// <summary>
        /// Constructor de la clase <code>ConceptHypercube</code>
        /// </summary>
        /// <param name="elemento">el Elemento XML que da origen a este <code>ConceptHypercubeItem</code></param>
        public ConceptHypercubeItem(XmlSchemaElement elemento)
            : base(elemento)
        {
            
        }
    }
}
