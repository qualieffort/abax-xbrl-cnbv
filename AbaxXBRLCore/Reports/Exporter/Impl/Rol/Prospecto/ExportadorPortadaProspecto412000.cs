using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.IO;
using Aspose.Words.Drawing;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto
{
    /// <summary>
    /// Exportador de la portada de prospecto.
    /// </summary>
    public class ExportadorPortadaProspecto412000 : ExportadorGeneralProspecto
    {
        /// <summary>
        /// Lista de conceptos que se deben presentar despues del indice.
        /// </summary>
        public IList<String> ConceptosDespuesDelIndice { get; set; }
        /// <summary>
        /// Exportador a Word.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">DTO con la información de la instancia XBRL</param>
        /// <param name="rolAExportar">DTO con la información del rol a exportar.</param>
        /// <param name="estructuraReporte"></param>
        public override void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            estructuraReporte.AgregarSignoAMonetarios = true;
            InicializaConfiguracionPaginaDefault(docBuilder);
            AgregarTituloPortada(docBuilder, rolAExportar);
            InsertarLeyendaProspectoDefinitivo(docBuilder, instancia, estructuraReporte);
            IsertaLogotipoDeEmisora(docBuilder, instancia, estructuraReporte);
            ImprimirContenidoRol(docBuilder, instancia, rolAExportar, estructuraReporte);
            ImprimirFirmasArt13(docBuilder, instancia);
            imprimirIndice(docBuilder, BreakType.SectionBreakNewPage);
            ImprimirConceptosDespuesIndice(docBuilder, instancia, rolAExportar, estructuraReporte);
            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);
        }
        /// <summary>
        /// Inserta los elementos de la leyenda para el prospecto definitivo.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="estructuraReporte">Estructura del reporte.</param>
        private void InsertarLeyendaProspectoDefinitivo(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO estructuraReporte)
        {
            var hechoDocumentoDefinitivo = ObtenPrimerHechoPorIdConcepto(instancia, "ar_pros_DefinitiveDocument");
            var nombreTipoReporte = "Prospecto";
            String idTipoReporte;
            if (instancia.ParametrosConfiguracion.TryGetValue("tipoReporte", out idTipoReporte))
            {
                if (idTipoReporte.Equals("su"))
                {
                    nombreTipoReporte = "Suplemento";
                }
                else if (idTipoReporte.Equals("fo"))
                {
                    nombreTipoReporte = "Folleto";
                }
            }
            docBuilder.Writeln();
            docBuilder.Writeln();
            docBuilder.Writeln();
            docBuilder.Writeln();
            docBuilder.Writeln();
            docBuilder.Writeln();

            if (hechoDocumentoDefinitivo != null && !String.IsNullOrEmpty(hechoDocumentoDefinitivo.Valor))
            {
                if (hechoDocumentoDefinitivo.Valor.Equals("SI"))
                {
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                    docBuilder.Writeln(nombreTipoReporte + " Definitivo");
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                }
                else
                {
                    docBuilder.Font.Color = Color.Red;
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                    docBuilder.Writeln(nombreTipoReporte);
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                }
            }
            var hechoLeyenda = ObtenPrimerHechoPorIdConcepto(instancia, "ar_pros_LegendProspectusSupplementBrochure");
            if (hechoDocumentoDefinitivo != null && !String.IsNullOrEmpty(hechoDocumentoDefinitivo.Valor))
            {
                ConceptoDto concepto;
                if (instancia.Taxonomia.ConceptosPorId.TryGetValue(hechoLeyenda.IdConcepto, out concepto))
                {
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
                    WordUtil.InsertHtml(docBuilder, hechoLeyenda.IdConcepto + ":" + hechoLeyenda.Id,
                        PARRAFO_HTML_NOTAS + (hechoLeyenda.Valor) + "</p>", false, true);
                    docBuilder.Writeln();
                }
            }
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertBreak(BreakType.PageBreak);
        }
        /// <summary>
        /// Inserta el logotipo de la emisora.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="estructuraReporte">Dto con información general del reporte.</param>
        private void IsertaLogotipoDeEmisora(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO estructuraReporte)
        {
            var idConcepto = "ar_pros_IssuerLogo";
            var hechoLogotipo = ObtenPrimerHechoPorIdConcepto(instancia, idConcepto);
            if (hechoLogotipo != null && !String.IsNullOrEmpty(hechoLogotipo.Valor))
            {
                ConceptoDto concepto;
                if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                {
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                    WordUtil.InsertHtml(docBuilder, hechoLogotipo.IdConcepto + ":" + hechoLogotipo.Id, 
                        PARRAFO_HTML_NOTAS + (hechoLogotipo.Valor) + "</p>", false, true);
                    docBuilder.Writeln();
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
                }
                
            }
        }
        /// <summary>
        /// Inserta una referencia a la portada para ser considerada en el indice.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="rolAExportar">Rol que se pretende exportar.</param>
        protected void AgregarTituloPortada(DocumentBuilder docBuilder, IndiceReporteDTO rolAExportar)
        {
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading1;
            docBuilder.Font.Name = TipoLetraTituloRol;
            docBuilder.Font.Color = Color.Transparent;
            docBuilder.Font.Size = 1;
            docBuilder.StartBookmark(rolAExportar.Rol);
            docBuilder.InsertHyperlink(rolAExportar.Descripcion, "index", true);
            //docBuilder.Write(rolAExportar.Descripcion);
            docBuilder.EndBookmark(rolAExportar.Rol);
            docBuilder.InsertParagraph();

            docBuilder.Font.Size = TamanioLetraTituloRol;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            //docBuilder.Writeln();
        }

        /// <summary>
        /// Muestra el documento del articulo 13
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instacia</param>
        private void ImprimirFirmasArt13(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia)
        {
            IList<String> listaIdHechoFirmaLeyenda13 = null;
            if (instancia.HechosPorIdConcepto.TryGetValue("ar_pros_IssuanceUnderArt13OfTheCUELegendPDF", out listaIdHechoFirmaLeyenda13) &&
                listaIdHechoFirmaLeyenda13.Count() > 0)
            {
                var idHechoFirmas = listaIdHechoFirmaLeyenda13.First();
                HechoDto hechoFirmas = null;
                if (instancia.HechosPorId.TryGetValue(idHechoFirmas, out hechoFirmas))
                {
                    AgregaImagenFirmas(docBuilder, hechoFirmas);
                }
            }
        }

        /// <summary>
        /// Obtiene las imagenes del PDF adjunto al concepto indicado y las agrega al documento.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="hecho">Hecho del concepto que contiene el binario</param>
        private void AgregaImagenFirmas(DocumentBuilder docBuilder, HechoDto hecho)
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
        /// Obtiene el listado de los conceptos que no deben ser presentados.
        /// </summary>
        /// <param name="instancia">Documento de instancia a evaluar.</param>
        /// <param name="rolAExportar">Rol que se pretende exportar.</param>
        /// <param name="estructuraReporte">Dto con datos generales del reporte</param>
        /// <returns>Lista de conceptos que no sepresentand.</returns>
        public override IList<String> ObtenConceptosDescartar(
            DocumentoInstanciaXbrlDto instancia,
            IndiceReporteDTO rolAExportar,
            ReporteXBRLDTO estructuraReporte)
        {
            var listaDescartar = base.ObtenConceptosDescartar(instancia,rolAExportar,estructuraReporte);
            var hechoEmisionUnica = ObtenPrimerHechoPorIdConcepto(instancia, "ar_pros_OnlyEmission");
            if (hechoEmisionUnica == null || String.IsNullOrEmpty(hechoEmisionUnica.Valor) || !hechoEmisionUnica.Valor.Equals("SI"))
            {
                listaDescartar.Add("ar_pros_OnlyEmission");
            }
            if (ConceptosDespuesDelIndice != null)
            {
                foreach (var idConcepto in ConceptosDespuesDelIndice)
                {
                    listaDescartar.Add(idConcepto);
                }
            }
            return listaDescartar;
        }
        /// <summary>
        /// Imprime los conceptos que se deben de presentar despues del indice.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="rolAExportar">Rol que se esta exportando.</param>
        /// <param name="estructuraReporte">Dto con información general del reporte.</param>
        private void ImprimirConceptosDespuesIndice(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            var idsConceptosDescartar = new List<String>();
            var conceptosHiercubos = new Dictionary<String, bool>();
            if (ConceptosDespuesDelIndice != null)
            {
                foreach (var idConcepto in ConceptosDespuesDelIndice)
                {
                    var concepto = ObtenConceptoReporte(idConcepto, estructuraReporte);
                    if (concepto != null)
                    {
                        docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
                        PresentaConcepto(docBuilder, instancia, rolAExportar, estructuraReporte, concepto, idsConceptosDescartar, conceptosHiercubos);
                    }
                }
            }
        }

        /// Escribe el encabezado en la secci?ctual al 100% de ancho
        /// <param name="docBuilder">Clase auxiliar para escribir elementos</param>
        /// <param name="instancia">Documento de instancia actualmente procesado</param>
        /// <param name="estructuraReporte">Estructura del reporte del documento</param>
        /// @throws Exception 
        ///
        public override void escribirEncabezado(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO estructuraReporte, bool imprimirFooter)
        {
            
            var ETIQUETA_CLAVE_COTIZACION = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_CLAVE_COTIZACION");
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

            docBuilder.Write(ETIQUETA_CLAVE_COTIZACION + ":       ");
            docBuilder.Font.Color = Color.Black;

            if (!String.IsNullOrEmpty(estructuraReporte.ClaveCotizacion))
            {
                docBuilder.Write(estructuraReporte.ClaveCotizacion);
            }

            docBuilder.InsertCell();
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(30);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            docBuilder.Font.Color = Color.Gray;

            tablaHead.PreferredWidth = PreferredWidth.FromPercent(100);
            tablaHead.SetBorders(LineStyle.None, 0, Color.Black);
            tablaHead.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaHead.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
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
