using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa un hecho utilizando en una plantilla de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class HechoPlantillaDto
    {
        /// <summary>
        /// El identificador del concepto al cual pertnece este hecho
        /// </summary>
        public string IdConcepto { get; set; }

        /// <summary>
        /// El identificador único dentro del documento del hecho
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El identificador del contexto al cual está relacionado el hecho
        /// </summary>
        public string IdContextoPlantilla { get; set; }

        /// <summary>
        /// El identificador de la unidad a la cual está relacionado este hecho
        /// </summary>
        public string IdUnidadPlantilla { get; set; }

        /// <summary>
        /// La precisión del hecho en caso de ser numérico
        /// </summary>
        public string Precision { get; set; }

        /// <summary>
        /// Los decimales del hecho en caso de ser numérico
        /// </summary>
        public string Decimales { get; set; }

        /// <summary>
        /// Contiene la representación en cadena del valor del hecho
        /// </summary>
        public string Valor { get; set; }

        /// <summary>
        /// Contiene la representación en cadena del valor del denominador del hecho
        /// </summary>
        public string ValorDenominador { get; set; }

        /// <summary>
        /// Contiene la representación en cadena del valor del numerador del hecho
        /// </summary>
        public string ValorNumerador { get; set; }

        /// <summary>
        /// Contiene la lista de hechos que contiene este hecho de tipo tupla
        /// </summary>
        public IList<HechoPlantillaDto> Hechos { get; set; }
    }
}
