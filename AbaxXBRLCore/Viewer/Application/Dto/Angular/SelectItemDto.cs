using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Estructura con la definición de las propiedades de un elemento de un combo.
    /// </summary>
    public class SelectItemDto
    {
        /// <summary>
        /// Etiqueta del elemento.
        /// </summary>
        public string Etiqueta { get; set; }
        /// <summary>
        /// Valor del elemento.
        /// </summary>
        public string Valor { get; set; }
    }
}
