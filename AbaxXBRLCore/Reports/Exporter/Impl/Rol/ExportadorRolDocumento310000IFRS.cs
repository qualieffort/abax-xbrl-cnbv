using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Dto;
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
    /// Exportador para el rol 310000 de IFRS con la finalidad de manejar varias tablas y notas.
    /// </summary>
    public class ExportadorRolDocumento310000IFRS : ExportadorRolDocumentoBase
    {
        /// <summary>
        /// Lista con los identificadores de concepto que deben de ocultarse en este rol.
        /// </summary>
        private IList<string> ConceptosOcultar = new List<string>()
        {
            "ifrs-full_EarningsPerShareTable",
            "ifrs-full_ClassesOfOrdinarySharesAxis",
            "ifrs-full_OrdinarySharesMember"
        };

        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ExportadorRolDocumento310000IFRS()
            : base()
        { 
            TamanioLetraTituloTabla = 7;
	        TamanioLetraContenidoTabla = 7;
        }
        override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;

            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);

            imprimirTituloRol(docBuilder, rolAExportar);
            var listaConseptosReporte = estructuraReporte.Roles[rolAExportar.Rol];
            PintaTabla(docBuilder, instancia, rolAExportar, estructuraReporte, listaConseptosReporte);
            
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
            foreach (String periodo in primerConcepto.Hechos.Keys)
            {
                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                //docBuilder.CellFormat.Width = 35;
                docBuilder.CellFormat.WrapText = false;
                docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                String descPeriodo = estructuraReporte.PeriodosReporte[periodo];
                docBuilder.Writeln(estructuraReporte.Titulos[periodo]);
                docBuilder.Write(descPeriodo.Replace("_", " - "));
            }
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.EndRow();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
            foreach (ConceptoReporteDTO concepto in listaConseptosReporte)
            {

                if (ConceptosOcultar.Contains(concepto.IdConcepto)) 
                {
                    continue;
                }
                
                //if(!concepto.Abstracto && !concepto.Numerico)
                //{
                //    establecerBordesGrisesTabla(tablaActual);
                //    docBuilder.EndTable();
                //    var subLista = ObtenSubLista(listaConseptosReporte, listaConseptosReporte.IndexOf(concepto));
                //    EscribeNotas(docBuilder, instancia, rolAExportar, estructuraReporte, subLista);
                //    return;
                //}
                
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
                docBuilder.Write(concepto.Valor);
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
                    foreach (HechoReporteDTO hecho in concepto.Hechos.Values)
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
            establecerBordesGrisesTabla(tablaActual);
            docBuilder.EndTable();
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
