using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Modelo
{
    /// <summary>
    /// Contexto que integra la combinación de mienbros dimensionales para la definción JBRL
    /// </summary>
    public class ContextoJBRL
    {
        /// <summary>
        /// Identificador único del contexto para un informe dado.
        /// </summary>
        public String id { get; set; }
        /// <summary>
        /// Información dimencional que representa este concepto.
        /// </summary>
        public IDictionary<String, String> informacionDimensional { get; set; }
    }
}
