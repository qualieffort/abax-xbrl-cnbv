using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Implementación de un conector de dos nodos del árbol indexado que representa el linkbase de una taxonomía.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ConectorLinkbase
    {
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public ConectorLinkbase()
        {
        }
        /// <summary>
        /// Constructor completo
        /// </summary>
        /// <param name="_arco">Arco por el cuál se crea el conector</param>
        /// <param name="_nodoSiguente">Nodo al que apunta el contector</param>
        public ConectorLinkbase(Arco _arco, NodoLinkbase _nodoSiguente)
        {
            Arco = _arco;
            NodoSiguiente = _nodoSiguente;
        }
        /// <summary>
        /// El nodo al que apunta este conector
        /// </summary>
        public NodoLinkbase NodoSiguiente { get; set; }

        /// <summary>
        /// El arco que dió origen a este conector
        /// </summary>
        public Arco Arco { get; set; }
        /// <summary>
        /// Rol de donde fue importado via targetRole en caso de que hayan sido importadas las relaciones
        /// </summary>
        public string RolOrigen { get; set; }
    }
}
