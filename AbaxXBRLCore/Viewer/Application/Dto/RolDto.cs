using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual representa un rol de la taxonomía.
    /// </summary>
    public class RolDto<T>
    {
        /// <summary>
        /// El nombre del rol
        /// </summary>
        public string Nombre { get; set; }

        /// <summary>
        /// El URI del rol
        /// </summary>
        public string Uri { get; set; }

        /// <summary>
        /// Obtiene las estructuras que representan el formato.
        /// </summary>
        public IList<T> Estructuras { get; set; }

        /// <summary>
        /// Indica si el Rol contiene relaciones dimensionales
        /// </summary>
        public bool? EsDimensional { get; set; }
    }
}