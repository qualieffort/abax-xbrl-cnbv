using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// DTO para el envío de objetos del tipo llave-valor para 
    /// el llenado de combos en la vista
    /// </summary>
    public class LlaveValorDto
    {

        public LlaveValorDto()
        {
        }

        public LlaveValorDto(string _llave, string _valor)
        {
            Llave = _llave;
            Valor = _valor;
        }
        /// <summary>
        /// Llave del valor
        /// </summary>
        public string Llave { get; set; }
        /// <summary>
        /// Valor
        /// </summary>
        public string Valor { get; set; }

    }
}
