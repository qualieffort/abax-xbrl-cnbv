using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto;
using System.Drawing;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol.EventoRelevante
{

    /// <summary>
    /// Imprime el contenido del evento relevante.
    /// </summary>
    public class ExportadorHipercuboEventoRelevante : IExportadorSubseccionConcepto
    {
        public void CreaSeccion(ConceptoReporteDTO conceptoOrigen, DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IExportadorRolDocumentoInstancia exportadorOrigen)
        {
            var exportadorBase = (ExportadorGeneralProspecto)exportadorOrigen;
            var hecho =  exportadorBase.ObtenPrimerHechoPorIdConcepto(instancia, "rel_news_RelevantEventContent");
            ContextoDto contexto;
            if (instancia.ContextosPorId.TryGetValue(hecho.IdContexto, out contexto))
            {
                var elementoDimension = contexto.ValoresDimension.First();
                var etiqueta = "Tipo de evento relevante";//exportadorBase.ObtenEtiquetaConcepto(elementoDimension.IdDimension, instancia, estructuraReporte.Lenguaje);
                var miembro = exportadorBase.ObtenEtiquetaConcepto(elementoDimension.IdItemMiembro, instancia, estructuraReporte.Lenguaje);

                AplicarEstilosEtiquetaNota(docBuilder, exportadorBase);
                docBuilder.Write(etiqueta);
                EliminaEstilosLinea(docBuilder, exportadorBase);

                AplicarEstilosValorNotaInicio(docBuilder, exportadorBase);
                WordUtil.InsertHtml(docBuilder, elementoDimension.IdDimension + ":" + hecho.Id, miembro, false, true);
                AplicarEstilosValorNotaFin(docBuilder, exportadorBase);
            }
            ConceptoDto concepto;
            if (instancia.Taxonomia.ConceptosPorId.TryGetValue(hecho.IdConcepto, out concepto))
            {
                var etiquetaHecho = exportadorBase.ObtenEtiquetaConcepto(hecho.IdConcepto, instancia, estructuraReporte.Lenguaje);
                AplicarEstilosEtiquetaNota(docBuilder, exportadorBase);
                docBuilder.Write(etiquetaHecho);
                EliminaEstilosLinea(docBuilder, exportadorBase);

                AplicarEstilosValorNotaInicio(docBuilder, exportadorBase);
                exportadorBase.EscribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
                AplicarEstilosValorNotaFin(docBuilder, exportadorBase);
            }
        }
        /// <summary>
        /// Aplica los estilos base para presentar una nota.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorBase">Exportador original.</param>
        public void AplicarEstilosValorNotaInicio(DocumentBuilder docBuilder, ExportadorGeneralProspecto exportadorBase)
        {
            exportadorBase.establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
        }
        /// <summary>
        /// Aplica los estilos base para presentar una nota.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorBase">Exportador original.</param>
        public void AplicarEstilosValorNotaFin(DocumentBuilder docBuilder, ExportadorGeneralProspecto exportadorBase)
        {
            docBuilder.Writeln();
            docBuilder.ParagraphFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.ParagraphFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.ParagraphFormat.Borders.Top.LineWidth = 2;
            docBuilder.Writeln();
            docBuilder.ParagraphFormat.Borders.LineStyle = LineStyle.None;
            docBuilder.ParagraphFormat.Borders.Color = Color.White;
            docBuilder.ParagraphFormat.Borders.LineWidth = 0;

        }

        public void EliminaEstilosLinea(DocumentBuilder docBuilder, ExportadorGeneralProspecto exportadorBase)
        {
            docBuilder.Writeln();
            docBuilder.ParagraphFormat.Borders.LineStyle = LineStyle.None;
            docBuilder.ParagraphFormat.Borders.Color = Color.White;
            docBuilder.ParagraphFormat.Borders.LineWidth = 0;
        }
        /// <summary>
        /// Establece los estilos para una etiqueta de nota.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorBase">Exportador original.</param>
        public void AplicarEstilosEtiquetaNota(DocumentBuilder docBuilder, ExportadorGeneralProspecto exportadorBase)
        {
            exportadorBase.establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = exportadorBase.TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.ParagraphFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.ParagraphFormat.Borders.Bottom.Color = Color.DarkGray;
            docBuilder.ParagraphFormat.Borders.Bottom.LineWidth = 2;
        }

        public IList<string> ObtenConceptosDescartar(ConceptoReporteDTO conceptoOrigen, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IExportadorRolDocumentoInstancia exportadorOrigen)
        {
            return new List<string>();
        }
    }
}
