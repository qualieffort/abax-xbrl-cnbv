using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia.Validador
{
    /// <summary>
    /// Definición de un validador para la integridad y forma correcta de una
    /// taxonomía Dimensional
    /// </summary>
    public interface IValidadorTaxonomiaDimensional: IValidadorTaxonomia
    {
        /// <summary>
        /// Taxonomía XBRL Dimensional a validar
        /// </summary>
        ITaxonomiaXBRL Taxonomia { get; set; }
    }
}
