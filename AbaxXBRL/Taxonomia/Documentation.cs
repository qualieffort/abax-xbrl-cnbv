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
    /// Elemento de documentación que puede ser encontrado dentro de diferentes elementos de una taxonomía.
    /// De este elemento únicamente sirve el contenido que es de tipo string
    /// Puede contener un atriburo del tipo "xml:lang" que indica el lenguaje en el que está escrita la documentación
    /// </summary>
    public class Documentation
    {

        /// <summary>
        /// Constructor predeterminado donde se pasa como parámetro del nodo de donde se lee la documentación
        /// </summary>
        /// <param name="nodo">Nodo origen de la documentación</param>
        public Documentation(XmlNode nodo)
        {
            this.Elemento = nodo;
        }
        /// <summary>
        /// El elemento al cual esta clase sirve como decorator.
        /// </summary>
        public XmlNode Elemento { get; set; }
        /// <summary>
        /// Etiqueta de lenguaje estándar del contenido, puede ser vacía
        /// </summary>
        public String Lang { get; set; }
        /// <summary>
        /// Contenido de cadena dentro de la etiqueda de documentación
        /// </summary>
        public String Contenido { get; set; }
    }
}
