using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRL.Constantes;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// El arco de cáluclo define cómo se relacionan lo Conceptos entre sí para propósitos de cálculo.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ArcoCalculo : Arco
    {
         /// <summary>
        /// Constructor predeterminado, asigna el tipo de arco de la clase base
        /// </summary>
        public ArcoCalculo()
        {
            base.TipoArco = TipoArco.TipoArcoCalculo;
        }
        /// <summary>
        /// El valor del rol estándar para un arco de cálculo.
        /// </summary>
        public const string SummationItemRole = "http://www.xbrl.org/2003/arcrole/summation-item";

        /// <summary>
        /// Este atributo indica el multiplicador que será aplicado a un elemento cuando se acumulen los valores numéricos de elementos a sumas.
        /// Este atributo es requerido.
        /// </summary>
        public decimal Peso { get; set; }
    }
}
