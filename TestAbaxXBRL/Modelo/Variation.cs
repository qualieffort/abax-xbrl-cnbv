using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Modelo
{
    /// <summary>
    /// Implementación del modelo que representa una variación o escenario de un caso de prueba de la Conformance Suite de la especificación XBRL 2.1
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class Variation
    {

        /// <summary>
        /// La cadena que representa un resultado esperado válido
        /// </summary>
        public const string ResultadoValido = "valid";
        /// <summary>
        /// Cadena que representa a un resultado no válido
        /// </summary>
        public const string ResultadoInvalido = "invalid";

        /// <summary>
        /// El identificador único de la variación dentro del caso de prueba
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El nombre de la variación dentro del caso de prueba
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// La descripción de la variación del caso de prueba
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Los datos que componen la prueba del escenario
        /// </summary>
        public IList<TestData> Data { get; set; }

        /// <summary>
        /// El resultado esperado de la prueba
        /// </summary>
        public string ExpectedResult { get; set; }

        /// <summary>
        /// La ruta relativa al archivo de definición del caso de prueba en que se encuentra el archivo contra el cual debe compararse el resultado.
        /// </summary>
        public string ExpectedResultRelativePath { get; set; }
        /// <summary>
        /// Código de error esperado
        /// </summary>
        public string ErrorCode { get; set; }
        /// <summary>
        /// Indica si es un test dimensional
        /// </summary>
        public bool TestDimensional { get; set; }
    }
}
