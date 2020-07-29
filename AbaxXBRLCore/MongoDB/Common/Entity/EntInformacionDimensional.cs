using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Entity
{
    /// <summary>
    /// Informacion dimensional de la consulta al repositorio por concepto
    /// </summary>
    public class EntInformacionDimensional
    {
        /// <summary>
        /// Indica si la dimensión es explicita o implicita
        /// </summary>
        public bool Explicita { get; set; }
        /// <summary>
        /// Identificador de la dimensión a la que pertence este miembro
        /// </summary>
        public string IdDimension { get; set; }
        /// <summary>
        /// Miembro de la dimensión en caso que sea explícita
        /// </summary>
        public string IdItemMiembro { get; set; }
        /// <summary>
        /// Nombre completo del elemento de dimension
        /// </summary>
        public string QNameDimension { get; set; }
        /// <summary>
        /// Nombre completo del elemento Item de una dimensión explícita
        /// </summary>
        public string QNameItemMiembro { get; set; }

        /// <summary>
        /// Miembro de la dimensión en caso que sea tipificada
        /// </summary>
        public string ElementoMiembroTipificado { get; set; }

        /// <summary>
        /// Filtro de consulta para una dimension implicita
        /// </summary>
        public string Filtro;

    }
}
