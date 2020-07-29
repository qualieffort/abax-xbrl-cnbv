using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Clase que sirve para almacenar la referencia a un elemento XBRL Externo a la taxonomía.
    /// Este elemento puede ser referencia desde un un linkbase personalizado.
    /// Este elemento se crea cuando el identificador es referenciado en un archivo que no existe como
    /// esquema o linkbase, por ejemplo un documento de instancia
    /// </summary>
    public class ElementoXBRLExterno: ElementoXBRL
    {
        private System.Xml.Linq.XElement elemento;

        /// <summary>
        /// Constructor con el apuntador origen del elemento
        /// </summary>
        /// <param name="ptr"></param>
        public ElementoXBRLExterno(ApuntadorElementoXBRL ptr)
        {
            Apuntador = ptr;
            Id = ptr.Identificador;
        }

        public ElementoXBRLExterno(ApuntadorElementoXBRL ptr, Object elemento)
        {
            Apuntador = ptr;
            Id = ptr.Identificador;
            ObjetoExterno = elemento;
        }
        /// <summary>
        /// Apuntador que da origen a este elemento
        /// </summary>
        public ApuntadorElementoXBRL Apuntador { get; set; }
        /// <summary>
        /// Objeto xml que representa al objeto al que apunta el localizador
        /// </summary>
        public Object ObjetoExterno { get; set; }
    }
}
