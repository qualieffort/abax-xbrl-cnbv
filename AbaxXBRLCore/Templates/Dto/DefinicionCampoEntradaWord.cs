using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Templates.Dto
{
    /// <summary>
    /// Definicion de parametros para la identificación de un hecho en el documento de instancia.
    /// </summary>
    public class DefinicionCampoEntradaWord
    {
        /// <summary>
        /// Identificador del concepto.
        /// </summary>
        public string IdConcepto { get; set; }
        /// <summary>
        /// Identificación del hecho de plantilla.
        /// </summary>
        public string IdHechoPlantilla { get; set; }
    }
}
