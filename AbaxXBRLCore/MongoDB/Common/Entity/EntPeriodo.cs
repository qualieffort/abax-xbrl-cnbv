using System;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'Periodo' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntPeriodo
    {
        /// <summary>
        /// Indica si el tipo de periodo corresponde a un tipo instante o duración
        /// </summary>
        public short Tipo { get; set; }

        /// <summary>
        /// Indica si el periodo es un instante
        /// </summary>
        public bool EsTipoInstante { get; set; }

        /// <summary>
        /// Indica la fecha instante del periodo
        /// </summary>
        public DateTime? FechaInstante { get; set; }

        /// <summary>
        /// Indica la fecha inicio del periodo o la fecha instante
        /// </summary>
        public DateTime? FechaInicio { get; set; } 

        /// <summary>
        /// Indica la fecha final del periodo o la fecha instante
        /// </summary>
        public DateTime? FechaFin { get; set; } 

        

    }

}
