using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Modelo
{
    /// <summary>
    /// Implementación del modelo que representa un archivo de datos de un caso de prueba del Comformance Suite de la especificación XBRL 2.1
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class TestData
    {
        /// <summary>
        /// El identificador del tipo de archivo de datos relacionado a un archivo tipo XSD
        /// </summary>
        public const int Xsd = 1;

        /// <summary>
        /// El identificador del tipo de archivo de datos relacionado a un archivo tipo LINKBASE
        /// </summary>
        public const int Linkbase = 2;

        /// <summary>
        /// El identificador del tipo de archivo de datos relacionado a un archivo tipo INSTANCE
        /// </summary>
        public const int Instance = 3;

        /// <summary>
        /// El tipo de archivo de datos, xsd, linkbase o instance
        /// </summary>
        public int Type { get; set; }

        /// <summary>
        /// La ruta relativa al archivo en que se encuentran los datos de prueba
        /// </summary>
        public string RelativePath { get; set; }

        /// <summary>
        /// Indica si el archivo deberá ser el primero que el procesador XBRL deberá leer para comenzar el procesamiento
        /// </summary>
        public bool ReadMeFirst { get; set; }
    }
}
