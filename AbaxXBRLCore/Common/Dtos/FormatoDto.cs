using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO para representar un formato financiero de manera provisional
    /// </summary>
    public class FormatoDto
    {
        public long IdFormato { get; set; }
        public string Nombre { get; set; }
        public IList<ContextoDto> Contextos { get; set; }
    }
}
