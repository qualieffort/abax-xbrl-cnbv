using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa una unidad utilizada en una plantilla de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class UnidadPlantillaDto
    {
        /// <summary>
        /// El identificador de la unidad dentro de la plantilla
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El tipo de la unidad
        /// </summary>
        public int Tipo { get; set; }

        /// <summary>
        /// Contiene la colección de medidas que conforman la unidad
        /// </summary>
        public IList<MedidaPlantillaDto> Medidas { get; set; }

        /// <summary>
        /// Contiene la colección de medidas que conforman el numerador de la unidad
        /// </summary>
        public IList<MedidaPlantillaDto> MedidasNumerador { get; set; }

        /// <summary>
        /// Contiene la colección de medidas que conforman el denominador de la unidad
        /// </summary>
        public IList<MedidaPlantillaDto> MedidasDenominador { get; set; }
    }
}
