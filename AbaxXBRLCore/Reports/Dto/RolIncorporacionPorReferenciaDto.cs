using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// Clase con la definición de elementos para presentar un rol de incorporación por refrencia.
    /// </summary>
    public class RolIncorporacionPorReferenciaDto
    {
        /// <summary>
        /// URI del rol que  se pretende evaluar.
        /// </summary>
        public String Uri { get; set; }
        /// <summary>
        /// Concepto que se debe validar para indicar si la información se incorpora por referencia ó no.
        /// </summary>
        public String IdConceptoIncorporacionPorReferencia { get; set; }
        /// <summary>
        /// Identificador del concepto que contiene la referencia que se pretende presentar.
        /// </summary>
        public String IdConceptoTextoReferencia { get; set; }
    }
}
