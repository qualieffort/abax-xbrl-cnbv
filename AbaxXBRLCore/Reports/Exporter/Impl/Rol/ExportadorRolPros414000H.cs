using AbaxXBRLCore.Common.Constants;
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
    /// Implementación de un exportador de rol personalizado
    /// para el formato 110000 de las taxonomías IFRS
    /// </summary>
    public class ExportadorRolPros414000H : ExportadorRolDocumentoBase
    {
        /// <summary>
        /// Identificadores utilizados en este exportador
        /// </summary>

        public static String ID_Caracteristicas_valores = "ar_pros_OfferCharacteristics";
        public static String ID_Tipo_Oferta = "ar_pros_TypeOfOffer";

        public static String ID_Monto_Total = "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary";
        public static String ID_Valor_Precio = "ar_pros_PlacementPriceValues";

        public static String ID_Descripcion_Forma = "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined";
        public static String ID_Mencion_Acta_Asamblea = "ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders";

        public static String ID_Monto_Capital = "ar_pros_AmountOfFixedCapitalBeforePlacement";
        public static String ID_Porcentaje_Incluyendo_Opción = "ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer";

        public static String ID_Fecha_Asamblea = "ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed";
        public static String ID_Descripcion_Precio_Colocacion = "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue";
        public static String ID_Mencionar_Cuenta_Aval = "ar_pros_MentioningwhetherOrNotHaveCollateral";
        public static String ID_Plan_Distribucion = "ar_pros_DistributionPlan";

        /// <summary>
        /// Indicador de trimestre 4 Dictaminado
        /// </summary>


        override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {

            IList<ConceptoReporteDTO> listaConceptos = estructuraReporte.Roles[rolAExportar.Rol];
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);
            imprimirTituloRol(docBuilder, rolAExportar);
           var listaConseptosReporte = estructuraReporte.Roles[rolAExportar.Rol];

            escribirADosColumnasConceptoValor(docBuilder, ID_Tipo_Oferta, ID_Caracteristicas_valores, rolAExportar, estructuraReporte);

            PintaTabla(docBuilder, ID_Monto_Total, ID_Valor_Precio, instancia, rolAExportar, estructuraReporte, listaConseptosReporte);

            escribirADosColumnasConceptoValor(docBuilder, ID_Mencion_Acta_Asamblea, ID_Descripcion_Forma, rolAExportar, estructuraReporte);

            PintaTabla(docBuilder, ID_Monto_Capital, ID_Porcentaje_Incluyendo_Opción, instancia, rolAExportar, estructuraReporte, listaConseptosReporte);

            escribirADosColumnasConceptoValor(docBuilder, ID_Fecha_Asamblea, ID_Fecha_Asamblea, rolAExportar, estructuraReporte);

            escribirADosColumnasConceptoValor(docBuilder, ID_Plan_Distribucion, ID_Mencionar_Cuenta_Aval, rolAExportar, estructuraReporte);


        }
        private IList<ConceptoReporteDTO> ObtenSubLista(IList<ConceptoReporteDTO> lista, int index)
        {
            var subLista = new List<ConceptoReporteDTO>();
            for (var indice = index; indice < lista.Count(); indice++)
            {
                subLista.Add(lista[indice]);
            }
            return subLista;
        }
        
        private void PintaTabla(DocumentBuilder docBuilder,String ConceptoInicio,String ConceptoFin,  DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listaConseptosReporte)
        {
            var bandera = 0;
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
                
                if (concepto.IdConcepto == ConceptoInicio) {
                    bandera = 1;
                }
                
                if (bandera == 1) { 
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
                if (concepto.IdConcepto == ConceptoFin)
                {
                    bandera = 0;
                }
            }
            establecerBordesGrisesTabla(tablaActual);
            docBuilder.EndTable();
       
        }

     /*   public void EscribeNotas(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listaConseptosReporte)
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
        }*/


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
           // docBuilder.InsertParagraph();

        }

    


    ///
    /// Escribe NOMBRE : VALOR de un hecho en 2 columnas y una tercera más de relleno
    ///
    private void escribirATresColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)  
        {

            docBuilder.InsertCell();
		    establecerFuenteTituloCampo(docBuilder);
		    escribirTituloConcepto(docBuilder,idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
		    docBuilder.Write(": ");
		    docBuilder.InsertCell();
		    establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);
		    docBuilder.InsertCell();
		    docBuilder.EndRow();
	    }
	
	
	    /// <summary>
	    /// Escribe NOMBRE : VALOR de un hecho en 2 columnas 
	    /// </summary>
	    private void escribirADosColumnasConceptoValor(DocumentBuilder docBuilder, String idConceptoFin,String idInicioConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            docBuilder.Writeln("");
            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 5;
            docBuilder.ParagraphFormat.SpaceBefore = 5;
            var banderahecho = 0;
            
            HechoReporteDTO hecho = null;
                foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
                {
                if (concepto.IdConcepto==idInicioConcepto)
                {
                    banderahecho = 1;
                }

                if (banderahecho == 1)
                {
                    if (concepto.Hechos != null)
                    {
                        foreach (String llave in concepto.Hechos.Keys)
                        {
                            hecho = concepto.Hechos[llave];
                            docBuilder.InsertCell();
                            if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                            {
                               // docBuilder.InsertCell();
                                establecerFuenteTituloCampo(docBuilder);
                                escribirTituloConcepto(docBuilder, concepto.IdConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
                                docBuilder.Write(": ");
                                docBuilder.InsertCell();
                                establecerFuenteValorCampo(docBuilder);
                                escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], concepto.IdConcepto);
                                docBuilder.EndRow();
                            }

                        }
                    }
                  
                }
                   if (concepto.IdConcepto == idConceptoFin)
                     { banderahecho = 0; }
    
             
                
             }
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
            docBuilder.EndTable();
           
     
        }
    }

}
