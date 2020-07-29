using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Modelo
{
    /// <summary>
    /// Modelo con la información que define a una variable de formaula para la prueba unitaria.
    /// </summary>
    public class VariableFormulaTest
    {
        /// <summary>
        /// Identificador del concepto.
        /// </summary>
        public string Concepto { get; set; }
        /// <summary>
        /// Definicion de condiciones dimensionales de la variable
        /// </summary>
        public IList<IDictionary<string, string>> Dimensiones { get; set; }
        /// <summary>
        /// Cadena con la definición de las condiciones dimensionales.
        /// </summary>
        public string TextoCondicionesDimensionales { get; set; }

        /// <summary>
        /// En caso de que la variable de la formula requiera el valor fullback.
        /// </summary>
        public string ValorFallback { get; set; }


    }
}
