using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// Clase con la definición peresonalizada de estilos a utilizar para presentar un concepto.
    /// </summary>
    public class EstilosConceptoDTO
    {
        /// <summary>
        /// Estilo que se debe aplicar a una etiqueta del concepto..
        /// </summary>
        public EstilosReporteDTO EstiloEtiqueta { get; set; }
        /// <summary>
        /// Estilo que se debe aplicar al valor de un concepto determinado.
        /// </summary>
        public EstilosReporteDTO EstiloValor { get; set; }
    }
}
