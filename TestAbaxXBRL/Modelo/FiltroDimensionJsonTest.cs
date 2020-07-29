using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Modelo
{
    /// <summary>
    /// Objeto JSON para la prueba unitaria.
    /// </summary>
    public class FiltroDimensionJsonTest
    {
        /// <summary>
        /// Indica si la dimensión es explícita
        /// </summary>
        public bool Explicita { get; set; }

        /// <summary>
        /// Contiene el nombre completamente calificado de la dimensión
        /// </summary>
        public string QNameDimension { get; set; }

        /// <summary>
        /// Contiene el nombre completamente calificado del miembro de la dimensión en caso de que sea explícita.
        /// </summary>
        public string QNameItemMiembro { get; set; }

        /// <summary>
        /// Contiene el fragmento XML que modela el elemento miembro tipificado en caso de que sea implícita
        /// </summary>
        public string ElementoMiembroTipificado { get; set; }

        /// <summary>
        /// Identificador de la dimensión a la que pertence este miembro
        /// </summary>
        public string IdDimension { get; set; }

        /// <summary>
        /// Miembro de la dimensión en caso que sea explícita
        /// </summary>
        public string IdItemMiembro { get; set; }

        /// <summary>
        /// El valor como cadena del elemento miembro tipificado
        /// </summary>
        public string ValorTipificado { get; set; }

        /// <summary>
        /// Indica para una dimensión implícita si el valor debe ser distinto del especificado.
        /// </summary>
        public Nullable<bool> DistintoDe { get; set; }
        /// <summary>
        /// Bandera que indica que este filtro aplica independientemente del miembro de la dimensión.
        /// </summary>
        public Nullable<bool> CualquierMiembro { get; set; }
    }
}
