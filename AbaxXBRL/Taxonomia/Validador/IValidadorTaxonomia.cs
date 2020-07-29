using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Validador
{
    /// <summary>
    /// Definición de un validador de la estructura de la taxonomía.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IValidadorTaxonomia : IValidadorXBRL
    {
        /// <summary>
        /// La taxonomía a validar
        /// </summary>
        ITaxonomiaXBRL Taxonomia { get; set; }
    }
}
