using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// DTO que representa los errores de validación de taxonomía o documento de instancia.
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class ErrorCargaTaxonomiaDto
    {
        /// <summary>
        /// Tipo de severidad para Error
        /// </summary>
        public const int SEVERIDAD_ERROR = 1;
        /// <summary>
        /// Tipo de severidad para una Advertencia
        /// </summary>
        public const int SEVERIDAD_ADVERTENCIA = 2;
        /// <summary>
        /// Tipo de severidad de error fatal
        /// </summary>
        public const int SEVERIDAD_FATAL = 3;
        /// <summary>
        ///  ID del hecho asociado al error
        /// </summary>
        public String IdHecho {get;set;}
        /// <summary>
        /// ID del contexto asociado al error
        /// </summary>
        public String IdContexto { get; set; }

        /// <summary>
        /// Severidad del error
        /// </summary>
        public int Severidad { get; set; }
        /// <summary>
        /// Mensaje del código de error
        /// </summary>
        public string Mensaje { get; set; }
        /// <summary>
        /// Código de error de carga o validación
        /// </summary>
        public string CodigoError { get; set; }
        /// <summary>
        /// Ubicación del archivo donde se genera el error
        /// </summary>
        public string UriArchivo { get; set; }
        /// <summary>
        /// Línea del archivo donde se genera el error
        /// </summary>
        public int Linea { get; set; }
        /// <summary>
        /// Columna del archivo donde se genera el error 
        /// </summary>
        public int Columna { get; set; }
        /// <summary>
        /// Información extra referente al error
        /// </summary>
    }
}
