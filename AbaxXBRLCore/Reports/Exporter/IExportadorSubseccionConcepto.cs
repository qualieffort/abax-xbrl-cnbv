using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using System;
using System.Collections.Generic;

namespace AbaxXBRLCore.Reports.Exporter
{
    /// <summary>
    /// Interface que definie los elementos que deben ser implemntados para construir una 
    /// sub seccion del reporte en base a un concepto.
    /// </summary>
    public interface IExportadorSubseccionConcepto
    {
        /// <summary>
        /// Crea una parte del reporte para un conjunto de elementos de la instancia XBRL definidos 
        /// o agrupados por un concepto en particular como es un hipercubo ó un conjunto de conceptos
        /// agrupados por un abstracto.
        /// </summary>
        /// <param name="conceptoOrigen">Concepto origen que sirve como marca para iniciar la generación de la sección.</param>
        /// <param name="docBuilder">Constructor base del reporte.</param>
        /// <param name="instancia">Documento de instancia evaluado.</param>
        /// <param name="rolAExportar">Rol que se está exportando.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador del rol.</param>
        void CreaSeccion(
            ConceptoReporteDTO conceptoOrigen,
            DocumentBuilder docBuilder,
            DocumentoInstanciaXbrlDto instancia,
            IndiceReporteDTO rolAExportar,
            ReporteXBRLDTO estructuraReporte,
            IExportadorRolDocumentoInstancia exportadorOrigen);
        /// <summary>
        /// Retorna un listado con los conceptos que deben ser considerados para no ser evaluados por el exportador origen.
        /// </summary>
        /// <param name="conceptoOrigen">Concepto origen que sirve como marca para iniciar la generación de la sección.</param>
        /// <param name="instancia">Documento de instancia evaluado.</param>
        /// <param name="rolAExportar">Rol que se está exportando.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador del rol.</param>
        /// <returns>Retorna un listado con los conceptos que deben ser descartados en la presentación del exportador original.</returns>
        IList<String> ObtenConceptosDescartar(
            ConceptoReporteDTO conceptoOrigen,
            DocumentoInstanciaXbrlDto instancia,
            IndiceReporteDTO rolAExportar,
            ReporteXBRLDTO estructuraReporte,
            IExportadorRolDocumentoInstancia exportadorOrigen);
    }
}
