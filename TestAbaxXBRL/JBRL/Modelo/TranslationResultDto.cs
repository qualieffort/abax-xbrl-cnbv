using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Modelo
{
    /// <summary>
    /// DTO con el resultado de una solicitud de traducción.
    /// </summary>
    public class TranslationResultDto
    {
        /// <summary>
        /// Resultado de los textos solicitados.
        /// </summary>
        public IList<TranslateTextDto> translations { get; set; }
    }
}
