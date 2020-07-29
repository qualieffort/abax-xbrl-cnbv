using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Define las constantes para los diferentes tipos de archivo que pueden asociarse a un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public static class TipoArchivoConstants
    {
        /// <summary>
        /// Se refiere al tipo de archivo Excel
        /// </summary>
        public const long ArchivoXls = 1;

        /// <summary>
        /// Se refiere al tipo de archivo PDF
        /// </summary>
        public const long ArchivoPdf = 2;

        /// <summary>
        /// Se refiere al tipo de archivo XBRL
        /// </summary>
        public const long ArchivoXbrl = 3;

        /// <summary>
        /// Se refiere al tipo de archivo JSON
        /// </summary>
        public const long ArchivoJson = 4;

        /// <summary>
        /// Se refiere al tipo de archivo XBRL - ZIP
        /// </summary>
        public const long ArchivoXbrlZip = 5;

        /// <summary>
        /// Se refiere al tipo de archivo Word
        /// </summary>
        public const long ArchivoWord = 6;

    }
}
