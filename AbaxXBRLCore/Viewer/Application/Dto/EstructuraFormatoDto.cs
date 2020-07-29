using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO para modelar la Estructura de Presentación de un Formato XBRL
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class EstructuraFormatoDto
    {
        /// <summary>
        /// El identificador del concepto contenido en esta esctructura.
        /// </summary>
        public string IdConcepto { get; set; }

        /// <summary>
        /// El rol de la etiqueta preferido que deberá mostrarse
        /// </summary>
        public string RolEtiquetaPreferido { get; set; }
        /// <summary>
        /// Rol del arco que une a esta estructura con su padre
        /// </summary>
        public string RolArco { get; set; }
        /// <summary>
        /// Las subestructuras que componen este formato.
        /// </summary>
        public IList<EstructuraFormatoDto> SubEstructuras { get; set; }
        /// <summary>
        /// Indica si es una estructura importada de otro target role
        /// </summary>
        public Boolean Importada { get; set; }
    }
}