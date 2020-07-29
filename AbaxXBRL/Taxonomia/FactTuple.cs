using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un hecho compuesto reportado en un documento instancia XBRL que corresponde a un concepto definido en la taxonomía cuyo grupo de sustitución es tuple.
    /// 
    /// Mientras que la mayoría de los hechos de negocio pueden ser entendidos de manera independiente, algunos hechos son dependientes unos de otros para entenderse apropiadamente, especialmente si existen múltiple ocurrencias de ese hecho que está siendo reportado.
    /// Por ejemplo, en el reporte de administración de una compañía, cada nombre de un administrador tiene que estar asociado apropiadamente al puesto correcto del administrador. Tal conjunto de hechos (puesto del administrador/nombre del administrador) son llamados tuplas.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class FactTuple : Fact
    {
        /// <summary>
        /// La lista de hechos que comprenden este hecho compuesto.
        /// </summary>
        public IList<Fact> Hechos { get; set; }
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public FactTuple():base()
        {
          Hechos = new List<Fact>();   
        }
        /// <summary>
        /// Constructor de la clase <code>FactTuple</code>
        /// </summary>
        /// <param name="nodo">el Elemento XML que da origen a este <code>FactTuple</code></param>
        public FactTuple(XmlNode nodo):base(nodo)
        {
            this.Nodo = nodo;
            this.Tipo = Concept.Tuple;
            Hechos = new List<Fact>();
        }
    }
}
