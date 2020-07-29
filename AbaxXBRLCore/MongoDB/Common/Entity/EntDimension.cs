// ReSharper disable InconsistentNaming
using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'Dimension' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntDimension
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
        /// clasificación de la dimensión.
        /// </summary>
        public string miTipoDimension { get; set; }

        /// <summary>
        /// Lista de Etiquetas por idioma de la dimension.
        /// </summary>
        public List<EntEtiqueta> etiquetasDimension { get; set; }

        /// <summary>
        /// Lista de Etiquetas por idioma de la dimension.
        /// </summary>
        public List<EntEtiqueta> etiquetasMiembro { get; set; }

    }

}
