using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object el cual representa un sumando de una operación de cálculo que se realiza en un formato (rol) de la taxonomía XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class SumandoCalculoDto
    {
        /// <summary>
        /// El identificador del concepto que participa como sumando en el resultado del cálculo
        /// </summary>
        public string IdConcepto { get; set; }

        /// <summary>
        /// El peso con el que participa este concepto como operando en una operación de cálculo
        /// </summary>
        public decimal Peso { get; set; }
    }
}
