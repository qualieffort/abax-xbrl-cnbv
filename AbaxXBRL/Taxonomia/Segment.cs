using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Clase que representa el elemento "<segment>" dentro del elemento de contexto de un documento de instnacia
    /// de XBRL
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class Segment: InformacionAdicionalContexto
    {
        /// <summary>
        /// Constructor completo
        /// </summary>
        /// <param name="nodoSegmento"></param>
        /// <param name="documento"></param>
        public Segment(XmlNode nodoSegmento,IDocumentoInstanciaXBRL documento): base(nodoSegmento,documento)
        {
            
        }
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public Segment()
        {

        }
    }
}
