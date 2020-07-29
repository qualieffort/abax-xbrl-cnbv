using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual contiene las operaciones de cálculo que se realizan dentro de un formato(rol) de una taxonomía XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class RolCalculoDTO
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
        /// Contiene las operaciones de cálculo 
        /// </summary>
        public IDictionary<string, IList<SumandoCalculoDto>> OperacionesCalculo { get; set; }
    }
}
