using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using AbaxXBRL.Taxonomia.Linkbases;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un hecho reportado en un documento instancia el cual corresponde a un concepto definido en su DTS relacionado. Los hechos pueden ser siemples, en cuyo caso sus valores son expresados como contenido simple
    /// (excepto en el caso de hechos simples cuyos valores estén expresados en una tasa), los hechos pueden ser compuestos en cuyo caso sus valores están construidos de otros hechos simples o compuestos. Los hechos simples son
    /// expresados utilizando items y los hechos compuestos son expresados utilizando tuples.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public abstract class Fact
    {
        //Constructor predeterminado
        public Fact()
        {
            
        }
        /// <summary>
        /// Constructor completo
        /// </summary>
        /// <param name="nodo"></param>
        public Fact(XmlNode nodo)
        {
            Nodo = nodo;
            IsNilValue = false;
        }
        /// <summary>
        /// El Nodo al cual esta clase sirve como decorator.
        /// </summary>
        public XmlNode Nodo { get; set; }

        /// <summary>
        /// Indica el tipo de hecho que contiene este nodo (tuple o item).
        /// </summary>
        public int Tipo { get; set; }

        /// <summary>
        /// El identificador del nodo en el documento instancia
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El concepto de la taxonomía que define a este hecho reportado
        /// </summary>
        public Concept Concepto { get; set; }

        /// <summary>
        /// La lista de notas al pie ligadas a este hecho reportado en un documento instancia.
        /// </summary>
        public IList<NotaAlPie> NotasAlPie { get; set; }
        
        /// <summary>
        /// Lista de elementos con los que este hecho está duplicado en un documento de instancia
        /// </summary>
        public IList<Fact> DuplicadoCon { get; set; }
        
        /// <summary>
        /// Indica si el valor nil fue especificado para este hecho
        /// </summary>
        public Boolean IsNilValue { get; set; }
        
        /// <summary>
        /// Referencia a la tupla padre de este hecho
        /// </summary>
        public FactTuple TuplaPadre { get; set; }
        
        /// <summary>
        /// Compara si los padres de los nodos correspondientes a este hecho y a su hecho a comparar son los mismos
        /// </summary>
        /// <param name="comparar">Hecho a comparar</param>
        /// <returns></returns>
        public Boolean ParentEqual(Fact comparar)
        {
            if(Nodo != null && comparar.Nodo != null)
            {
                return Nodo.ParentNode.Equals(comparar.Nodo.ParentNode);
            }

            if(TuplaPadre == null && comparar.TuplaPadre == null)
            {
                return true;
            }

            if(TuplaPadre != null && comparar.TuplaPadre != null)
            {
                return TuplaPadre == comparar.TuplaPadre;
            }
            return false;
        }
    }
}
