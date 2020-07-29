using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Implementación de un nodo de un árbol nario indexado. El nodo representa un elemento referenciado por un linkbase con sus arcos entrantes y salientes.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class NodoLinkbase
    {
        
        /// <summary>
        /// El elemento que contiene este nodo
        /// </summary>
        public ElementoXBRL Elemento { get; set; }

        /// <summary>
        /// La lista de conectores que hacen referencia como nodo siguiente a este nodo.
        /// </summary>
        public IList<ConectorLinkbase> ConectoresEntrantes { get; set; }

        /// <summary>
        /// La lista de conectores que hacen referencia a otros nodos en la estructura a partir de este nodo.
        /// </summary>
        public IList<ConectorLinkbase> ConectoresSalientes { get; set; }

        /// <summary>
        /// El indice utilizado para la detección de ciclos de Tarjan
        /// </summary>
        public int Indice { get; set; }

        /// <summary>
        /// El indice abjo utilizado para la detección de ciclos de Tarjan
        /// </summary>
        public int IndiceBajo { get; set; }

        /// <summary>
        /// Constructor por defecto de la clase <code>NodoLinkbase</code>
        /// </summary>
        public NodoLinkbase()
        {
            IndiceBajo = -1;
            Indice = -1;
        }
        /// <summary>
        /// Crea un nuevo nodo copiando los elementos relevantes del nodo enviado
        /// </summary>
        /// <param name="nodoLinkbase"></param>
        public NodoLinkbase(NodoLinkbase nodoLinkbase)
        {
            ConectoresEntrantes = new List<ConectorLinkbase>();
            ConectoresSalientes = new List<ConectorLinkbase>();
            Elemento = nodoLinkbase.Elemento;
        }
        /// <summary>
        /// Indica si se tiene al menos un conector entrante
        /// </summary>
        /// <returns>True si tiene al menos un padre, false en otro caso</returns>
        public bool TienePadres()
        {
            return ConectoresEntrantes != null && ConectoresEntrantes.Count > 0;
        }
        /// <summary>
        /// Indica si tiene al menos un conector saliente
        /// </summary>
        /// <returns>True si tiene al menos un hijo, false en otro caso</returns>
        public bool TieneHijos()
        {
            return ConectoresSalientes != null && ConectoresSalientes.Count > 0;
        }
        /// <summary>
        /// Verifica si el nodo enviado como parámetro es padre de este nodo
        /// en alguna de sus relaciones entrantes
        /// </summary>
        /// <param name="nodoPadre">Nodo a verificar si es padre</param>
        /// <returns>True si es nodo padre, false en otro caso</returns>
        public bool EsNodoPadre(NodoLinkbase nodoPadre)
        {
            return ConectoresEntrantes != null && ConectoresEntrantes.Count(cx => cx.NodoSiguiente == nodoPadre) > 0;
        }
    }
}
