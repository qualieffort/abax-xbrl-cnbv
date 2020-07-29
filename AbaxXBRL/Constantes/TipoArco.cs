using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Contiene la definición de los diferentes tipos de arco que son permitidos en la definición de un link base extendido
    /// <version>1.0</version>
    /// </summary>
    public sealed class TipoArco
    {
        /// <summary>
        /// Tipo de Arco de Presentación: Relaciona conceptos como padre-hijo
        /// </summary>
        public static readonly TipoArco TipoArcoPresentacion = new TipoArco(EtiquetasXBRLConstantes.PresentationArcElement);

        /// <summary>
        /// Tipo de Arco de etiqueta: Relaciona conceptos de la taxonomía con sus etiquetas
        /// </summary>
        public static readonly TipoArco TipoArcoEtiqueta = new TipoArco(EtiquetasXBRLConstantes.LabelArcElement);

        /// <summary>
        /// Tipo de Arco de Cálculo: Relaciona conceptos con otros conceptos que intervienen en su cálculo
        /// </summary>
        public static readonly TipoArco TipoArcoCalculo = new TipoArco(EtiquetasXBRLConstantes.CalculationArcElement);
        /// <summary>
        /// Tipo de Arco de Cálculo: Relaciona conceptos de la taxonomía con su referencia documental
        /// </summary>
        public static readonly TipoArco TipoArcoReferencia  = new TipoArco(EtiquetasXBRLConstantes.CalculationArcElement);
        /// <summary>
        /// Tipo de Arco de Definición: Relaciona conceptos de la taxonomía entre si
        /// </summary>
        public static readonly TipoArco TipoArcoDefinicion = new TipoArco(EtiquetasXBRLConstantes.DefinitionArcElement);

        /// <summary>
        /// El valor del tipo de ciclo como cadena.
        /// </summary>
        public string Valor { get; private set; }

        /// <summary>
        /// Constructor privado de la clase.
        /// </summary>
        /// <param name="valor">El valor para el tipo de arco.</param>
        private TipoArco(string valor)
        {
            Valor = valor;
        }

        /// <summary>
        /// Obtiene la representación en cadena del tipo de arco
        /// </summary>
        public static implicit operator string(TipoArco ne)
        {
            return ne.Valor;
        }

        
    }
}
