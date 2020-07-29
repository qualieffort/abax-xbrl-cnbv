using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Contiene la definición de los diferentes tipos de ciclo que son permitidos en un tipo de rol de arco.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public sealed class TiposCicloArco
    {
        /// <summary>
        /// Cualquier tipo de ciclos. El grafo PUEDE contener cualquier número de ciclos dirigidos y cualquier número de ciclos no dirigidos.
        /// </summary>
        public static readonly TiposCicloArco Cualquiera = new TiposCicloArco("any");

        /// <summary>
        /// Ciclos no dirigidos. El grafo PUEDE contener cualquier número de ciclos no dirigidos, pero NO DEBE contener ningún ciclo dirigido.
        /// </summary>
        public static readonly TiposCicloArco NoDirigidos = new TiposCicloArco("undirected");

        /// <summary>
        /// Ningún tipo de ciclo. El grafo NO DEBE contener ciclos dirigidos ni ciclos no dirigidos.
        /// </summary>
        public static readonly TiposCicloArco Ninguno = new TiposCicloArco("none");

        /// <summary>
        /// El valor del tipo de ciclo como cadena.
        /// </summary>
        public string Valor { get; private set; }

        /// <summary>
        /// Constructor privado de la clase.
        /// </summary>
        /// <param name="valor">El valor para el tipo de ciclo.</param>
        private TiposCicloArco(string valor)
        {
            Valor = valor;
        }

        /// <summary>
        /// Obtiene la representación en cadena del tipo de ciclo.
        /// </summary>
        /// <param name="ne">el tipo de ciclo a representar como cadena</param>
        /// <returns>el valor como cadena del tipo de ciclo</returns>
        public static implicit operator string(TiposCicloArco ne) 
        {
            return ne.Valor; 
        }
    }
}
