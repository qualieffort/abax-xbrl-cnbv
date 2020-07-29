using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Modelo
{
    /// <summary>
    /// DTO con la el resultado de un texto traducido.
    /// </summary>
    public class TranslateTextDto
    {
        /// <summary>
        /// Texto resultante
        /// </summary>
        public String text { get; set; }
        /// <summary>
        /// Clave del idioma.
        /// </summary>
        public String to { get; set; }
    }
}
