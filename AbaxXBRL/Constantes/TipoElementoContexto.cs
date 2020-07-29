using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Clase que contiene la definición de los 2 posibles valores que puede tener el atributo
    /// xbrldt:contextElement de un arco de definición en una taxonomía dimensional
    /// </summary>
    public sealed class TipoElementoContexto
    {
        /// <summary>
        /// Valor del tipo de elemento
        /// </summary>
        public string Valor { get; set; }
        /// <summary>
        /// Tipo de elemento del contexto que indica que la información dimensional se encuentra en el segmento
        /// </summary>
        public static readonly TipoElementoContexto Segmento = new TipoElementoContexto("segment");
        /// <summary>
        /// Tipo de elemento del contexto que indica que la información dimensional se encuentra en el escenario
        /// </summary>
        public static readonly  TipoElementoContexto Escenario = new TipoElementoContexto("scenario");
        /// <summary>
        /// Constructor privado
        /// </summary>
        /// <param name="val"></param>
        private TipoElementoContexto(string val)
        {
            Valor = val;
        }

        /// <summary>
        /// Obtiene la representación en cadena del tipo de uso.
        /// </summary>
        /// <param name="ne">el tipo de uso a representar como cadena</param>
        /// <returns>el valor como cadena del tipo de uso</returns>
        public static implicit operator string(TipoElementoContexto ne)
        {
            return ne.Valor;
        }
        /// <summary>
        /// Convierte el valor de cadena a la constante correspondiente
        /// </summary>
        /// <param name="valor">Valor a comparar</param>
        /// <returns>Constante que corresponde, null si no existe la constante</returns>
        public static TipoElementoContexto GetTipoElementoContexto(string valor)
        {
            if(Segmento.Valor.Equals(valor))
            {
                return Segmento;
            }else if(Escenario.Valor.Equals(valor))
            {
                return Escenario;
            }

            return null;
        }
    }
}
