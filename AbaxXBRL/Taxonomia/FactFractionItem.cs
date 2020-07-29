using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un hecho compuesto reportado en un documento instancia XBRL que corresponde a un concepto definido en la taxonomía cuyo grupo de sustitución es item y su tipo de dato deriva o es fractionItemType.
    /// 
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class FactFractionItem : FactItem
    {
        /// <summary>
        /// La unidad del elemento de tipo fracción
        /// </summary>
        public Unit Unidad { get; set; }

        /// <summary>
        /// El numerador del valor de este hecho
        /// </summary>
        public decimal Numerador { get; set; }

        /// <summary>
        /// El denominador del valor de este hecho
        /// </summary>
        public decimal Denominador { get; set; }

        /// <summary>
        /// Constructor de la clase <code>FactFractionItem</code>
        /// </summary>
        /// <param name="nodo">el Elemento XML que da origen a este <code>FactFractionItem</code></param>
        public FactFractionItem(XmlNode nodo)
            : base(nodo)
        {

        }
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public FactFractionItem():base()
        {
            
        }
    }
}
