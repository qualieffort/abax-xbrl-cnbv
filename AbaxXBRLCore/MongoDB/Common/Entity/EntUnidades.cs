using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'Medida' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntUnidades
    {

        /// <summary>
        /// Indica si la unidad corresponde a divisoria
        /// </summary>
        public bool EsDivisoria { get; set; }

        /// <summary>
        /// Medida de la unidad
        /// </summary>
        public List<EntMedida> Medidas { get; set; }

        /// <summary>
        /// Medida del Numerador
        /// </summary>
        public List<EntMedida> MedidasNumerador { get; set; }
    }

}
