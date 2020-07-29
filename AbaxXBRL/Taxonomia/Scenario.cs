using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Clase que representa el elemento "<scenario>" dentro de un contexto en un documento de instancia XBRL
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class Scenario: InformacionAdicionalContexto
    {
        /// <summary>
        /// Constructor completo
        /// </summary>
        /// <param name="nodo"></param>
        /// <param name="documento"></param>
        public Scenario(XmlNode nodo,IDocumentoInstanciaXBRL documento): base(nodo,documento)
        {
            
        }
        /// <summary>
        /// Constructor por default
        /// </summary>
        public Scenario()
        {
            
        }
    }
}
