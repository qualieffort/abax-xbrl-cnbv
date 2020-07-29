using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Los conceptos son definidos en los esquemas de las taxonomías. Cada concepto definido en un esquema de taxonomía es identificado de manera única por la definición de sintaxis de un elemento en el esquema de taxonomía.
    /// Para conrresponder a una definición de concepto, una definición de elemento en un esquema XML tiene que especificar el nombre del elemento, un grupo de sustitución y un tipo. Todos los nombres de elementos DEBEN ser
    /// únicos dentro de un esquema de taxonomía dada. El elemento DEBE ser un miembro del grupo de sustitución <code>item</code> o <code>tuple</code>. El elemento PUEDE también incluir cualquiera de los otros atributos de un
    /// esquema XML que puedan ser utilizados en la sintaxis de definición de un elemento, incluyendo <code>abstract</code> y <code>nillable</code>.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public abstract class Concept : ElementoXBRL
    {
        

        /// <summary>
        /// Identifica el grupo de substición elemento
        /// </summary>
        public const string SubstitutionGroupItem = "item";

        /// <summary>
        /// Identifica el grupo de substición tupla
        /// </summary>
        public const string SubstitutionGroupTuple = "tuple";

		/// <summary>
        /// Identifica el grupo de substición parte
        /// </summary>
        public const string SubstitutionGroupPart = "part";
        /// <summary>
        /// Identifica el grupo de substitución para un Hipercubo
        /// </summary>
        public const string SubstitutionGroupHypercubeItem = "hypercubeItem";
        /// <summary>
        /// Identifica el grupo de substitución para una Dimensión de hipercubo
        /// </summary>
        public const string SubstitutionGroupDimensionItem = "dimensionItem";

        /// <summary>
        /// Indica que el elemento es la definición de una tupla
        /// </summary>
        public const int Tuple = 1;

        /// <summary>
        /// Indica que el elemento es la definición de un elemento
        /// </summary>
        public const int Item = 2;
        /// <summary>
        /// Indica que el elemento es la definición de un hipercubo
        /// </summary>
        public const int HypercubeItem = 3;
        /// <summary>
        /// Indica que el elemento es la definición de una dimensión de hipercubo
        /// </summary>
        public const int DimensionItem = 4;

        /// <summary>
        /// Indica el tipo de definición que contiene este elemento (tupla o concepto).
        /// </summary>
        public int Tipo { get; set; }

        /// <summary>
        /// Conjunto de atributos aidicionales definidos en un concepto de la taxonomía
        /// </summary>
        public IDictionary<String,String> AtributosAdicionales { get; set;}

       
    }
}
