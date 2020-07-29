using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// DTO que representa la entidad de fideicomiso.
    /// </summary>
    public class FideicomisoDto
    {
        /// <summary>
        /// Identificador de la entidad.
        /// </summary>
        public long IdFideicomiso { get; set; }
        /// <summary>
        /// Identificador de la empresa a la que pertenece.
        /// </summary>
        public long IdEmpresa { get; set; }
        /// <summary>
        /// Clave que identifica al fideicomiso.
        /// </summary>
        public string ClaveFideicomiso { get; set; }
        /// <summary>
        /// Descripción del fideicomiso.
        /// </summary>
        public string Descripcion { get; set; }
    }
}
