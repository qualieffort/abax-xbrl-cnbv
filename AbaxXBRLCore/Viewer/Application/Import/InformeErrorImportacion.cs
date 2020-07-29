using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Import
{
    /// <summary>
    /// Representa un error durante el proceso de importación de un archivo 
    /// a un documento de instancia
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class InformeErrorImportacion
    {
        /// <summary>
        /// Mensaje de Error
        /// </summary>
        public string Mensaje { get; set; }
        /// <summary>
        /// Identificador del concepto que se estaba importando cuando ocurrió el error
        /// </summary>
        public string IdConcepto { get; set; }
        /// <summary>
        /// Identificador del periodo que se estaba procesando cuando ocurrió el error
        /// </summary>
        public string IdPeriodo { get; set; }
        /// <summary>
        /// Identificador del rol que se estaba procesando cuando ocurrió el error
        /// </summary>
        public string IdRol { get; set; }
        /// <summary>
        /// Nombre de la hoja importada
        /// </summary>
        public string Hoja { get; set; }
        /// <summary>
        /// Renglon que genera el error
        /// </summary>
        public string Renglon { get; set; }
        /// <summary>
        /// Columna que genera el error
        /// </summary>
        public string Columna { get; set; }
        /// <summary>
        /// Valor leido del archivo excel
        /// </summary>
        public string ValorLeido { get; set; }
    }
}
