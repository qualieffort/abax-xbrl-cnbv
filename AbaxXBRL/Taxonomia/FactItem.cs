using AbaxXBRL.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implmenentación de un hecho simple reportado en un documento instancia XBRL que corresponde a un concepto definido en la taxonomía cuyo grupo de sustitución es item.
    /// 
    /// Un elemento representa un hecho simple o una medida de negocio. En el esquema XML de las instancias XBRL, 
    /// un elemento es definido como un Elemento Abstracto. Esto significa que nunca aparecerá por si mismo en un documento instancia XBRL. Por lo tanto, todos 
    /// los elementos que representan hechos simple o medidas de negocio en una documento de taxonomìa XBRL  y que son reportados en un documento instancia XBRL
    /// DEBEN ser ya sea a) miembros del grupo de sustitución item ó b) miembros del grupo de sustitución originalmente basados en item.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class FactItem : Fact
    {
        /// <summary>
        /// El contexto en el que se reporta este hecho dentro del documento instancia
        /// </summary>
        public Context Contexto { get; set; }

        /// <summary>
        /// El valor reportado en el hecho
        /// </summary>
        protected String _valor = null;
        public virtual string Valor
        {
            get { return _valor; }
            set { _valor = value; }
        }
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public FactItem():base()
        {
            
        }
        /// <summary>
        /// Constructor de la clase <code>FactItem</code>
        /// </summary>
        /// <param name="nodo">el Elemento XML que da origen a este <code>FactItem</code></param>
        public FactItem(XmlNode nodo):base(nodo)
        {
            
            this.Tipo = Concept.Item;
        }
        /// <summary>
        /// Verifica si el elemento tiene el mismo contexto equivalente al hecho a comparar
        /// y su valor no numerico es igual
        /// </summary>
        /// <param name="comparar">Hecho a comparar</param>
        /// <returns>True si es value equals, false en otro caso</returns>
        public Boolean ValueEquals(FactItem comparar)
        {
            return Contexto.StructureEquals(comparar.Contexto) && Valor.Equals(comparar.Valor);    
        }
    }
}
