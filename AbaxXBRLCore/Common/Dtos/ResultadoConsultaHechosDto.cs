using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO con los valores de resultado de una consulta al repositorio de hechos
    /// </summary>
    public class ResultadoConsultaHechosDto
    {
        /// <summary>
        /// Identificador del concepto del hecho
        /// </summary>
        public string IdConcepto { get; set; }
        /// <summary>
        /// Valor del hecho
        /// </summary>
        public string Valor { get; set; }
        /// <summary>
        /// Fecha de inicio del contexto
        /// </summary>
        public DateTime? FechaInicio { get; set; }
        /// <summary>
        /// Fecha de fin del contexto
        /// </summary>
        public DateTime? FechaFin { get; set; }
        /// <summary>
        /// Entidad que reporta
        /// </summary>
        public string IdEntidad { get; set; }
        /// <summary>
        /// Título del documento de instancia donde se encuentra el concepto
        /// </summary>
        public string TituloDocumentoInstancia { get; set; }
        /// <summary>
        /// Indica si el documento es correcto
        /// </summary>
        public bool EsCorrecto { get; set; }
        /// <summary>
        /// Identificador del documento de instancia
        /// </summary>
        public long IdDocumentoInstancia { get; set; }
        /// <summary>
        /// Fecha de creación del documento
        /// </summary>
        public DateTime FechaCreacion { get; set; }
        /// <summary>
        /// Indica si el hecho es monetario
        /// </summary>
        public Boolean EsMonetario { get; set; }
        /// <summary>
        /// Indica si el hecho es numérico
        /// </summary>
        public Boolean EsNumerico { get; set; }
        /// <summary>
        /// Indica si el hecho es html
        /// </summary>
        public Boolean EsHtml { get; set; }
        /// <summary>
        /// Tipo de dato del concepto
        /// </summary>
        public String TipoDatoXbrl { get; set; }

    }
}
