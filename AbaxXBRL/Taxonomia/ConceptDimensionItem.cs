using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un concepto definido en la taxonomía cuyo grupo de sustitución es <code>dimensionItem</code>.
    /// Una dimensión representa cada uno de los diferentes aspectos para los que un hecho puede ser catacterizado.
    /// Una dimensión tiene únicamente un dominio efectivo. Un dominio consiste en los posibles elementos con que se puede
    /// caraterizar un hecho. Las dimesiones son elementos abstractos en el grupo de sustitución <code>xbrldt:dimensionItem</code>
    /// <author>Emigdio Hernández Rodríguez</author>
    /// <version>1.0</version>
    /// </summary>
    public class ConceptDimensionItem : ConceptItem
    {
        /// <summary>
        /// Constructor de la clase <code>ConceptDimensionItem</code>
        /// </summary>
        /// <param name="elemento">el Elemento XML que da origen a este <code>ConceptDimensionItem</code></param>
        public ConceptDimensionItem(XmlSchemaElement elemento)
            : base(elemento)
        {
            Explicita = true;
        }
        /// <summary>
        /// Indica si es una dimensión explícita
        /// </summary>
        public bool Explicita { get; set; }
        /// <summary>
        ///Atriburo requerido para la definición de una dimensión tipificada typedDimension que apunta mediante un elemento XPtr
        /// a la declaración del elemento del schema válido para participar como miembro de la dimensión que declara
        /// </summary>
        public ApuntadorElementoXBRL ReferenciaDimensionTipificada { get; set; }
        /// <summary>
        /// Elemento que contiene al objeto XmlSchemaElement que declara el tipo de elementos que puede tener el dominio de una dimensión tipificada
        /// </summary>
        public XmlSchemaElement ElementoDimensionTipificada { get; set; }
        
    }
}
