using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// Contiene la información de un hecho que ha sido sobreescrito durante la importación de un archivo Excel
    /// </summary>
    public class InformacionHechoSobreescritoDto
    {
        /// <summary>
        /// Identificador del concepto del hecho que se sobreescribe
        /// </summary>
        public String IdConcepto { get; set; }
        /// <summary>
        /// Identificador del hecho sobreescrito
        /// </summary>
        public String IdHecho { get; set; }
        /// <summary>
        /// Valor inicial del hecho
        /// </summary>
        public String ValorInicial  {get;set;}
        /// <summary>
        /// Valor final con el que se sobreescribe
        /// </summary>
        public String ValorFinal { get; set; }
        /// <summary>
        /// Nombre de la hoja inicial del hecho
        /// </summary>
        public String HojaInicial { get; set; }
        /// <summary>
        /// Nombre de la hoja que lo sobreescribe
        /// </summary>
        public String HojaFinal { get; set; }
        /// <summary>
        /// Mensaje a mostrar con la advertencia
        /// </summary>
        public String Mensaje { get; set; }
    }
}
