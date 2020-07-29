using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Contiene la definición de los diferentes tipos de uso que son permitidos en un arco.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public sealed class TiposUso
    {
        /// <summary>
        /// Cualquier tipo de uso. El grafo PUEDE contener cualquier número de uso dirigidos y cualquier número de uso no dirigidos.
        /// </summary>
        public static readonly TiposUso Opcional = new TiposUso("optional");

        /// <summary>
        /// uso no dirigidos. El grafo PUEDE contener cualquier número de uso no dirigidos, pero NO DEBE contener ningún ciclo dirigido.
        /// </summary>
        public static readonly TiposUso Prohibido = new TiposUso("prohibited");

        /// <summary>
        /// El valor del tipo de uso como cadena.
        /// </summary>
        public string Valor { get; private set; }

        /// <summary>
        /// Constructor privado de la clase.
        /// </summary>
        /// <param name="valor">El valor para el tipo de uso.</param>
        private TiposUso(string valor)
        {
            Valor = valor;
        }

        /// <summary>
        /// Obtiene la representación en cadena del tipo de uso.
        /// </summary>
        /// <param name="ne">el tipo de uso a representar como cadena</param>
        /// <returns>el valor como cadena del tipo de uso</returns>
        public static implicit operator string(TiposUso ne) 
        {
            return ne.Valor; 
        }
        /// <summary>
        /// Determina si el valor en cadena de un tipo de uso se encuentra dentro de los tipos de uso válidos
        /// registrados en la clase
        /// </summary>
        /// <param name="tipoUso">Tipo de uso a validar</param>
        /// <returns>true si es valido, false en otro caso</returns>
        public static Boolean EsTipoUsoValido(string tipoUso)
        {
            if (Opcional.Valor.Equals(tipoUso) || Prohibido.Valor.Equals(tipoUso))
            {
                return true;
            }
            return false;
        }
    }
}
