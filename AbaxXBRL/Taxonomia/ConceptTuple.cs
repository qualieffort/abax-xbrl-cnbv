using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un concepto definido en la taxonomía cuyo grupo de sustitución es <code>tuple</code>.
    /// 
    /// Mientras que la mayoría de los hechos de negocio pueden ser entendidos de manera independiente, algunos hechos son dependientes unos de otros para entenderse apropiadamente, especialmente si existen múltiple ocurrencias de ese hecho que está siendo reportado.
    /// Por ejemplo, en el reporte de administración de una compañía, cada nombre de un administrador tiene que estar asociado apropiadamente al puesto correcto del administrador. Tal conjunto de hechos (puesto del administrador/nombre del administrador) son llamados tuplas.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ConceptTuple : Concept
    {
        /// <summary>
        /// La lista de elementos (tuplas o conceptos) que definen la estructura de la tupla
        /// </summary>
        public IList<Concept> Elementos { get; set; }

        /// <summary>
        /// Constructor de la clase <code>ConceptTuple</code>
        /// </summary>
        /// <param name="elemento">el Elemento XML que da origen a este <code>ConceptTuple</code></param>
        public ConceptTuple(XmlSchemaElement elemento)
        {
            this.Elemento = elemento;
        }
    }
}
