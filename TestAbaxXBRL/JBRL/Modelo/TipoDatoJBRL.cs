using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Modelo
{
    /// <summary>
    /// Representa un tipo de información que puede ser reportada dentro de una taxonomía JBRL
    /// </summary>
    public class TipoDatoJBRL
    {
        /// <summary>
        /// Identificador único del tipo de dato.
        /// </summary>
        public int id { get; set; }
        /// <summary>
        /// Nombre del tipo de dato
        /// </summary>
        public String nombre { get; set; }
        /// <summary>
        /// Descripción general del tipo de dato.
        /// </summary>
        public String descripcion { get; set; }

    }
}
