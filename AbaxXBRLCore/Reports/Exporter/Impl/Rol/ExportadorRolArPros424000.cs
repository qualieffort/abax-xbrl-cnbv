using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Exportador para el rol 424000 de ArPros con la finalidad de manejar varias tablas y notas.
    /// </summary>
    public class ExportadorRolArPros424000 : ExportadorRolDocumentoBase
    {
        /// <summary>
        /// Lista con los identificadores de concepto que deben de ocultarse en este rol.
        /// </summary>
        private IList<string> ConceptosOcultar = new List<string>()
      {
            "ar_pros_SelectedFinancialInformationDisclosure",
            "ar_pros_SelectedQuarterlyFinancialInformation",
            "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer",
            "ar_pros_FinancialInformationByBusinessLine",
            "ar_pros_RelevantCreditReport",
            "ar_pros_CommentsAndManagementAnalysisOnOperatingResults",
            "ar_pros_OperationResults",
            "ar_pros_FinancialPositionLiquidityAndCapitalResources",
            "ar_pros_InternalControl",
            "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves"
      };
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ExportadorRolArPros424000()
            : base()
        {
            TamanioLetraTituloTabla = 7;
            TamanioLetraContenidoTabla = 7;
        }
        override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            //docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Landscape;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;

            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);

            imprimirTituloRol(docBuilder, rolAExportar);

            var listaConseptosReporte = estructuraReporte.Roles[rolAExportar.Rol];
            PintaTabla(docBuilder, instancia, rolAExportar, estructuraReporte, listaConseptosReporte);
            docBuilder.Writeln(" "); docBuilder.Writeln(" ");
            PintaNotas(docBuilder, instancia, rolAExportar, estructuraReporte, listaConseptosReporte);
            //docBuilder.Writeln(" "); docBuilder.Writeln(" "); docBuilder.Writeln(" "); 
            //FormatoTypeTexbloc(docBuilder, rolAExportar, estructuraReporte);

        }
        /// <summary>
        /// Pinta los conceptos de tipo nota.
        /// </summary>
        /// <param name="docBuilder"></param>
        /// <param name="instancia"></param>
        /// <param name="rolAExportar"></param>
        /// <param name="estructuraReporte"></param>
        /// <param name="listaConseptosReporte"></param>
        private void PintaNotas(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listaConseptosReporte)
        {
            HechoReporteDTO hecho = null;
            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {
                if (concepto.Hechos != null && concepto.TipoDato.EndsWith(TIPO_DATO_TEXT_BLOCK))
                {
                    foreach (String llave in concepto.Hechos.Keys)
                    {
                        hecho = concepto.Hechos[llave];
                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                        {
                            //Escribir titulo campo
                            escribirConceptoEnTablaNota(docBuilder, estructuraReporte, hecho, concepto);
                            break;
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Obtiene una sublista de elementos de la lista dada.
        /// </summary>
        /// <param name="lista">Lista Original.</param>
        /// <param name="index">Indice a partir de donde se corta.</param>
        /// <returns>Lista cortada.</returns>
        private IList<ConceptoReporteDTO> ObtenSubLista(IList<ConceptoReporteDTO> lista, int index)
        {
            var subLista = new List<ConceptoReporteDTO>();
            for (var indice = index; indice < lista.Count(); indice++)
            {
                subLista.Add(lista[indice]);
            }
            return subLista;
        }



        private void PintaTabla(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listaConseptosReporte)
        {

            Table tablaActual = docBuilder.StartTable();
            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;

            ConceptoReporteDTO primerConcepto = null;

            if (!estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
            {
                throw new IndexOutOfRangeException("No existe el rol [" + rolAExportar.Rol + "] dentro del listado de roles del reporte.");
            }
            if (estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
            {
                foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
                {
                    if (!concepto.Abstracto)
                    {
                        primerConcepto = concepto;
                        break;
                    }
                }
            }
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloTabla;
            docBuilder.InsertCell();

            //tablaActual.StyleIdentifier = StyleIdentifier.LIGHT_GRID_ACCENT_1;
            //tablaActual.StyleOptions = TableStyleOptions.FIRST_ROW;

            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.Font.Color = Color.White;
            docBuilder.Write(estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_CONCEPTO"));

            String fechaReporteCadena = estructuraReporte.FechaReporte;
            String fechaConstitucionCadena = estructuraReporte.Plantilla.ObtenerParametrosConfiguracion()["fechaConstitucion"];

            DateTime fechaReporte = DateReporteUtil.obtenerFecha(fechaReporteCadena);
            DateTime fechaConstitucion = DateReporteUtil.obtenerFecha(fechaConstitucionCadena);

            int diferenciaAnios = fechaReporte.Year - fechaConstitucion.Year;

            var periodosPermitidos = new Dictionary<String, bool>()
            {
                {"anual_actual", true },
            };

            if (diferenciaAnios == 1)
            {
                periodosPermitidos.Add("anual_anterior", true);
            }
            else if (diferenciaAnios >= 2)
            {
                periodosPermitidos.Add("anual_anterior", true);
                periodosPermitidos.Add("anual_pre_anterior", true);
            }

            foreach (String periodo in primerConcepto.Hechos.Keys)
            {
               if(!periodosPermitidos.ContainsKey(periodo))
               {
                   continue; 
               }

                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                //docBuilder.CellFormat.Width = 35;
                docBuilder.CellFormat.WrapText = false;
                docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                String descPeriodo = estructuraReporte.PeriodosReporte[periodo];
                docBuilder.Writeln(estructuraReporte.Titulos[periodo]);
                docBuilder.Writeln(estructuraReporte.Moneda);
                docBuilder.Write(descPeriodo.Replace("_", " - "));
            }
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.EndRow();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
            foreach (ConceptoReporteDTO concepto in listaConseptosReporte)
            {
               
                    /* if (ConceptosOcultar.Contains(concepto.IdConcepto)) 
                     {
                         continue;
                     }*/

                    //if(!concepto.Abstracto && !concepto.Numerico)
                    //{
                    //    establecerBordesGrisesTabla(tablaActual);
                    //    docBuilder.EndTable();
                    //    var subLista = ObtenSubLista(listaConseptosReporte, listaConseptosReporte.IndexOf(concepto));
                    //    EscribeNotas(docBuilder, instancia, rolAExportar, estructuraReporte, subLista);
                    //    return;
                    //}
                if (concepto.TipoDato.EndsWith(TIPO_DATO_MONETARY) || concepto.TipoDato.EndsWith(TIPO_DATO_PERSHERE))
                    {
                        docBuilder.InsertCell();
                        docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                        docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                        docBuilder.CellFormat.WrapText = true;
                        docBuilder.Font.Color = Color.Black;
                        if (concepto.Abstracto)
                        {
                            docBuilder.Bold = true;
                            docBuilder.Font.Color = Color.White;
                            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                        }
                        else
                        {
                            docBuilder.Bold = false;
                        }
                        docBuilder.ParagraphFormat.LeftIndent = (concepto.Tabuladores < 0 ? concepto.Tabuladores : 0);
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        if (concepto.AtributosAdicionales != null)
                        {
                            if (concepto.AtributosAdicionales.Count == 1)
                            {
                                conceptosEnIndice(docBuilder, concepto);

                            }
                        else
                        {
                            docBuilder.Write(concepto.Valor);
                        }

                    }
                        else
                        {
                            docBuilder.Write(concepto.Valor);
                        }

                    if (concepto.Abstracto)
                        {
                            for (int iCell = 0; iCell < primerConcepto.Hechos.Count(); iCell++)
                            {

                                docBuilder.InsertCell();
                                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                            }
                        }
                        else
                        {
                            foreach (var periodo in concepto.Hechos.Keys)
                            {

                            if (!periodosPermitidos.ContainsKey(periodo))
                            {
                                continue;
                            }
                            HechoReporteDTO hecho = concepto.Hechos[periodo];
                            if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                                {
                                    docBuilder.InsertCell();
                                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);

                                    docBuilder.ParagraphFormat.LeftIndent = 0;
                                    if (concepto.Numerico)
                                    {
                                        docBuilder.CellFormat.WrapText = true;
                                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
                                    }
                                    else
                                    {
                                        docBuilder.CellFormat.WrapText = false;
                                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                    }
                                    escribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
                                }
                            }
                            docBuilder.RowFormat.AllowBreakAcrossPages = true;
                            docBuilder.RowFormat.HeadingFormat = false;
                            docBuilder.EndRow();
                        }
                    }
                
            } 
            establecerBordesGrisesTabla(tablaActual);
            docBuilder.EndTable();
        }
        public void FormatoTypeTexbloc(DocumentBuilder docBuilder, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte) {
            HechoReporteDTO hecho = null;
            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            { string valor = ObtenertipoDato(concepto, TIPO_DATO_STRING);

                if (concepto.TipoDato == valor)
                {
                    if (concepto.Hechos != null)
                    {
                        foreach (String llave in concepto.Hechos.Keys)
                        {
                            hecho = concepto.Hechos[llave];
                            if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                            {
                                //Escribir titulo campo
                                escribirConceptoEnTablaNota(docBuilder, estructuraReporte, hecho, concepto);

                            }
                        }
                    }
                }
            }
        }
        protected override void escribirConceptoEnTablaNota(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual, bool forzarHtml = false)
        {
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

            if (conceptoActual.AtributosAdicionales != null && conceptoActual.AtributosAdicionales.Count == 1)
            {
                conceptosEnIndice(docBuilder, conceptoActual);

            }
            else
            {
                docBuilder.Write(conceptoActual != null ? conceptoActual.Valor + ":" : "");

            }

            Table tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);

            tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            docBuilder.Writeln();
            docBuilder.Writeln();
        }
        public void EscribeNotas(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte,IList<ConceptoReporteDTO> listaConseptosReporte)
        {
            
            HechoReporteDTO hecho = null;
            var ExportarNotasVacias = true;
            foreach (ConceptoReporteDTO concepto in listaConseptosReporte)
            {
                if (concepto.Abstracto || concepto.Numerico)
                { 
                    var subLista = ObtenSubLista(listaConseptosReporte, listaConseptosReporte.IndexOf(concepto));
                    PintaTabla(docBuilder, instancia, rolAExportar, estructuraReporte, subLista);
                    return;
                }
                
                
                if (concepto.Hechos != null)
                {
                    var imprimePeriodo = concepto.Hechos.Count > 1;

                    foreach (String llave in concepto.Hechos.Keys)
                    {
                        hecho = concepto.Hechos[llave];
                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)) || ExportarNotasVacias)
                        {                          
                            //Escribir titulo campo
                            escribirConceptoEnTablaNotaPeriodo(docBuilder, hecho, concepto, estructuraReporte, llave);
                        }
                    }
                }
            }
        }


        protected void escribirConceptoEnTablaNotaPeriodo(DocumentBuilder docBuilder, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual, ReporteXBRLDTO estructuraReporte, String periodo)
        {

            docBuilder.Writeln();
            Table tablaActual = docBuilder.StartTable();

            String descPeriodo = estructuraReporte.PeriodosReporte[periodo];

            docBuilder.InsertCell();
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Gray;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.Writeln(conceptoActual != null ? conceptoActual.Valor : String.Empty);
            docBuilder.Writeln(estructuraReporte.Titulos[periodo]);
            docBuilder.Write(descPeriodo.Replace("_", " - "));
            docBuilder.RowFormat.HeadingFormat = true;

            docBuilder.EndRow();
            docBuilder.InsertCell();
            docBuilder.Font.Color = Color.Black;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);

            establecerBordesNota(docBuilder);

            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);
            docBuilder.RowFormat.HeadingFormat = false;
            docBuilder.EndRow();
            docBuilder.EndTable();
            docBuilder.InsertParagraph();

        }
       
    }
}
