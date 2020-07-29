using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia.Dimensiones
{
    /// <summary>
    /// Representa la declaración de un elemento de dimensión en un hipercubo
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class Dimension
    {
        /// <summary>
        /// Constructor por default
        /// </summary>
        public Dimension()
        {
            MiembrosDominio = new List<ConceptItem>();
            MiembrosDominioNoUsables = new List<ConceptItem>();
        }
        /// <summary>
        /// Indica si la dimensión es explicita o implicita
        /// </summary>
        public bool Explicita { get; set; }
        /// <summary>
        /// Dimensión a la cuál pertenece este miembro
        /// </summary>
        public ConceptDimensionItem ConceptoDimension { get; set; }
        /// <summary>
        /// Conjunto de los elementos de dominio que pueden usarse en un documento de
        /// instancia para el llenado de elementos dimensionales
        /// </summary>
        public IList<ConceptItem> MiembrosDominio { get; set; }
        /// <summary>
        /// Conjunto de los elementos de dominio que no pueden usarse en un 
        /// documento de instancia para el llenado de elementos dimensionales
        /// </summary>
        public IList<ConceptItem> MiembrosDominioNoUsables { get; set; }
        /// <summary>
        /// Elemento de la dimensión que corresponde al valor predeterminado
        /// </summary>
        public ConceptItem MiembroDefault { get; set; }
        
    }
}
