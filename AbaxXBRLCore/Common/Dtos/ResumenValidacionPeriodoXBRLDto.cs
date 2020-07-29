using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO que contiene la validación de un periodo reportado en un archivo XBRL
    /// </summary>
    public class ResumenValidacionPeriodoXBRLDto
    {
               
        /// <summary>
        /// Listado de errores asociado al periodo
        /// </summary>
        public IList<ErrorCargaTaxonomiaDto> Errores { get; set; }

        /// <summary>
        /// Lista de unidades monetarias que este periodo contiene
        /// </summary>
        public IList<String> Unidades { get; set; }
        /// <summary>
        /// Identificadores de los contextos que se incluyen en este objeto de resumen de periodo
        /// </summary>
        public IList<String> IdContextos { get; set; }
        /// <summary>
        /// Tipo del periodo según la clasificación de XBRL
	    /// Instante, Duración o Infinito
        /// </summary>
        public Int16 TipoPeriodo { get; set; }
        /// <summary>
        /// Identificador de la entidad que reporta
        /// </summary>
        public String Entidad {get;set;}
        /// <summary>
        /// Fecha de inicio del periodo en caso de que sea duración
        /// </summary>
        public DateTime FechaInicio { get; set; }
        /// <summary>
        /// Fecha de fin o de instante
        /// </summary>
        public DateTime FechaFin { get; set; }
    }
}
