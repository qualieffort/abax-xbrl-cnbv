using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Modelo
{
    /// <summary>
    /// Implementación del modelo que representa un caso de prueba de la Conformance Suite de la especificación XBRL 2.1
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class TestCase
    {
        /// <summary>
        /// El nombre del caso de prueba
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// La descripción del caso de prueba
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// La ruta de salida, relativa al directorio deonde se encuentran los datos de prueba, donde se deberán localizar los archivos de salida de la prueba.
        /// </summary>
        public string Outpath { get; set; }

        /// <summary>
        /// La dirección de correo electrónico del principal contacto para este caso de prueba.
        /// </summary>
        public string Owner { get; set; }

        /// <summary>
        /// Opcional, por defecto <code>true</code>, indica si el caso de prueba es parte de la Conformance Suite mínima. <code>false</code> indica que el caso de prueba es parte del Full Conforman Suite.
        /// </summary>
        public bool Minimal { get; set; }

        /// <summary>
        /// La ruta donde se encuentra el archivo con la definición del caso de prueba
        /// </summary>
        public string Path { get; set; }

        /// <summary>
        /// La lista de variaciones o escenarios que comprenden el caso de prueba
        /// </summary>
        public IList<Variation> Variations { get; set; }
    }
}
