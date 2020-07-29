using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Representa una fila de una tabla para presentar un hipercubo.
    /// </summary>
    public class FilaPresentacionHipercuboDto
    {
        /// <summary>
        /// Tipo de fila que se pretende presentar.
        /// "UnaFila": Significa que todos los valores se presentaran en una misma fila.
        /// "DosFilas": Signdifica que se presentará una primera fila con el título del concepto y una segunda con su valor.
        /// </summary>
        public String Tipo { get; set; }
        /// <summary>
        /// Lista de celdas que serán presentadas en esta fila.
        /// </summary>
        public IList<CeldasPresentacionHipercuboDto> Celdas {get; set;}
    }
}
