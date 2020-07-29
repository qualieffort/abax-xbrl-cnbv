using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    class ExportadorRolEventoRelevante2018 : ExportadorGeneralProspecto
    {
        public override void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {


            DescartarAbastractos = true;
            InicializaConfiguracionPaginaDefault(docBuilder);
            ImprimirContenidoRol(docBuilder, instancia, rolAExportar, estructuraReporte);
            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);
        }

        /// <summary>
        /// Obtiene las imagenes del PDF adjunto al concepto indicado y las agrega al documento.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="hecho">Hecho del concepto que contiene el binario</param>
        private void AgregaImagen(DocumentBuilder docBuilder, HechoDto hecho)
        {
            var imagenes = PDFUtil.GetImagesFromPDFAsPathFiles(hecho.Valor);
            var index = 0;
            foreach (String imagePath in imagenes)
            {
                try
                {
                    docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
                    PageSetup ps = docBuilder.CurrentSection.PageSetup;
                    var background = docBuilder.InsertImage(imagePath);
                    background.Width = ps.PageWidth;
                    background.Height = ps.PageHeight;
                    background.RelativeHorizontalPosition = Aspose.Words.Drawing.RelativeHorizontalPosition.Page;
                    background.RelativeVerticalPosition = Aspose.Words.Drawing.RelativeVerticalPosition.Page;
                    background.Left = 0;
                    background.Top = 0;
                    background.WrapType = Aspose.Words.Drawing.WrapType.None;
                    background.BehindText = true;
                    index++;
                    //if (index < imagenes.Count)
                    //{
                    //    docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
                    //}

                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                }

            }
        }

        /// <summary>
        /// Imprime el valor de un hecho a dos columnas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte actual</param>
        /// <param name="concepto">Concepto que se presenta.</param>
        /// <param name="hecho">Hecho que se persenta.</param>
        public override void EscribirADosColumnasConceptoValor(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, ConceptoReporteDTO concepto, HechoReporteDTO hecho)
        {
            Table tablaActual = docBuilder.StartTable();

            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.ParagraphFormat.SpaceAfter = 5;
            docBuilder.ParagraphFormat.SpaceBefore = 5;

            docBuilder.InsertCell();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            var anchoMinimoEtiqueta = (AnchoMinimoTitulodosColumnas != null && AnchoMinimoTitulodosColumnas > 0) ? AnchoMinimoTitulodosColumnas ?? 30 : 30;
            var anchoMinimoValor = 100 - anchoMinimoEtiqueta;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(anchoMinimoEtiqueta);

            docBuilder.CellFormat.Borders.LineStyle = LineStyle.None;
            docBuilder.CellFormat.Borders.LineWidth = 0;
            if (!concepto.IdConcepto.Equals("rel_news_Ticker"))
            {
                docBuilder.CellFormat.Borders.Right.Color = Color.Black;
                docBuilder.CellFormat.Borders.Right.LineStyle = LineStyle.Single;
                docBuilder.CellFormat.Borders.Right.LineWidth = .75;
            }
            else
            {
                docBuilder.CellFormat.Borders.Bottom.Color = Color.Black;
                docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
                docBuilder.CellFormat.Borders.Bottom.LineWidth = .75;
            }

            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = 11;
            docBuilder.Font.Color = Color.Black;
            AplicaEstilosEtiquetaConcepto(docBuilder, concepto.IdConcepto, estructuraReporte);
            docBuilder.Write(concepto.Valor);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;

            //docBuilder.Write(": ");
            var estructurasRol = estructuraReporte.Roles.Values.First();
            var esPar = estructurasRol.IndexOf(concepto) % 2;
            docBuilder.InsertCell();
            if (esPar == 0)
            {
                docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.FromArgb(255,242,242,242);
            }
            if (!concepto.IdConcepto.Equals("rel_news_Ticker"))
            {
                docBuilder.CellFormat.Borders.Right.Color = Color.White;
                docBuilder.CellFormat.Borders.Right.LineStyle = LineStyle.None;
                docBuilder.CellFormat.Borders.Right.LineWidth = 0;
            }
            else
            {
                docBuilder.CellFormat.Borders.Bottom.Color = Color.Black;
                docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
                docBuilder.CellFormat.Borders.Bottom.LineWidth = .75;
            }
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(anchoMinimoValor);
            establecerFuenteValorCampo(docBuilder);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

            docBuilder.Font.Size = 10;
            AplicaEstilosValorConcepto(docBuilder, concepto.IdConcepto, estructuraReporte);
            escribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
            docBuilder.EndRow();
                
            docBuilder.EndTable();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
        }



        public override void escribirEncabezado(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO estructuraReporte, bool imprimirFooter)
        {
            var etiquetaReporte = ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_news_RelevantEventReportAbstract", instancia);
            var claveEntidad = ReporteXBRLUtil.obtenerValorHechoDefault("rel_news_Ticker", instancia, "");
            var etiquetaFecha = ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_news_Date", instancia);
            var fechaReporte = ReporteXBRLUtil.obtenerValorHechoDefault("rel_news_Date", instancia, "");
            var ETIQUETA_DE = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_DE");



            Section seccion = docBuilder.CurrentSection;
            seccion.PageSetup.DifferentFirstPageHeaderFooter = false;
            seccion.HeadersFooters.LinkToPrevious(false);
            seccion.HeadersFooters.Clear();
            docBuilder.MoveToHeaderFooter(HeaderFooterType.HeaderPrimary);

            Table tablaHead = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 0;
            docBuilder.CellFormat.ClearFormatting();
            ///Fila de año y trimestre
            docBuilder.InsertCell();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(70);
            docBuilder.Font.Color = Color.Gray;
            docBuilder.Font.Bold = false;
            docBuilder.Font.Size = 9;
            docBuilder.Write(etiquetaReporte + " - " + claveEntidad);
            docBuilder.Font.Color = Color.Black;
            docBuilder.EndRow();

            docBuilder.InsertCell();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Font.Color = Color.Gray;
            docBuilder.Font.Size = 8;
            docBuilder.Write(etiquetaFecha + " - " + fechaReporte);

            tablaHead.PreferredWidth = PreferredWidth.FromPercent(100);
            tablaHead.SetBorders(LineStyle.None, 0, Color.White);
            docBuilder.EndTable();

            docBuilder.MoveToHeaderFooter(HeaderFooterType.FooterPrimary);

            var leyendaReportes = System.Configuration.ConfigurationManager.AppSettings.Get("LeyendaReportes");
            if (!String.IsNullOrEmpty(leyendaReportes))
            {
                Table tablaPie = docBuilder.StartTable();
                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                docBuilder.Write(leyendaReportes);


                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

                docBuilder.InsertField("PAGE", "");
                docBuilder.Write(" " + ETIQUETA_DE + " ");
                docBuilder.InsertField("NUMPAGES", "");
                tablaPie.SetBorders(LineStyle.None, 0, Color.Black);
                docBuilder.EndTable();

            }
            else
            {
                docBuilder.InsertField("PAGE", "");
                docBuilder.Write(" " + ETIQUETA_DE + " ");
                docBuilder.InsertField("NUMPAGES", "");
                docBuilder.CurrentParagraph.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            }

            docBuilder.MoveToDocumentEnd();
        }

    }


}
