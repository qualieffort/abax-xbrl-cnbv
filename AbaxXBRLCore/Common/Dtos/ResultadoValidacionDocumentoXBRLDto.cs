using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// Representa el resultado de validar de acuerdo a las reglas de la taxonomía asociada al documento
    /// y a las reglas de negocio extra definidas para la taxonomía, un documento de instancia XBRL
    /// </summary>
    public class ResultadoValidacionDocumentoXBRLDto
    {
        /// <summary>
        /// Indica si el resultado final del proceso es un archivo de instancia válido
        /// </summary>
        public Boolean Valido { get; set; }
        /// <summary>
        /// Errores generales de la validación, incluye errores que no pueden asociarse a un contexto específico
        /// </summary>
        public IList<ErrorCargaTaxonomiaDto> ErroresGenerales { get; set; }
        /// <summary>
        ///  Lista de los periodos contenidos en un archivo de instancia XBRL y que a su vez contiene 
        ///  los posibles errores de validación
        /// </summary>
        public IList<ResumenValidacionPeriodoXBRLDto> Periodos { get; set; }
        /// <summary>
        /// Milisegundos empleados en la carga
        /// </summary>
        public long MsCarga { get; set; }
        /// <summary>
        /// Milisegundos empleados en la validacion 2.1 y calculo
        /// </summary>
        public long MsValidacion { get; set; }
        /// <summary>
        /// Milisegundos empleados en validar fórmulas
        /// </summary>
        public long MsFormulas { get; set; }
        /// <summary>
        /// Milisegundos empleados en la transformacion a DTO
        /// </summary>
        public long MsTransformacion { get; set; }
    }
}
