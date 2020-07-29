using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
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
using System.Xml;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    public class ExportadorRolPros414 : ExportadorRolDocumentoBase
    {


        public static String ID_Caracteristicas_valores = "ar_pros_OfferCharacteristics";
        public static String ID_Tipo_Oferta = "ar_pros_TypeOfOffer";
        public static String ID_Denominacion_moneda = "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade";

        public static String ID_Importe = "ar_pros_AmountOfferCost";
        public static String ID_IVA = "ar_pros_IvaOfferCost";
        public static String ID_Total = "ar_pros_TotalOfferCost";
        public static String ID_Pesos = "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade";
        public static String ID_Pesos1 = "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized";
  
        private IList<string> hipercubosSerie = new List<string>()
        {
            "ar_pros_DebtSeriesCharacteristicsTable",
            "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesTable",
            "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedTable",
           // "ar_pros_AdditionalValuesTable",
            "ar_pros_CharacteristicsOfTheCurrentListedSeriesTable",
                 "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesAbstract",
              "ar_pros_InTheCaseOfDebtIssuersAbstract",
              "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedAbstract",
              "ar_pros_CharacteristicsOfTheCurrentListedSeriesAbstract"
        };
        private IList<string> hipercubosExist = new List<string>()
        {
          
         
            "ar_pros_SecuritiesRatingAbstract",
            "ar_pros_CompanyAdministratorsAbstract",
            "ar_pros_ResponsiblePersonsOfTheReportAbstract",
            "ar_pros_NameOfTheUnderWriter",
            "ar_pros_WhereAppropriateRateGivenByRatingInstitutionAbstract",
            "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfSecurities",
            "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfStructuredSecurities",
            "ar_pros_AdditionalValuesAbstract",
            "ar_pros_MultiplesAbstract",
            "ar_pros_SecuritiesRatingAbstract",
            "ar_pros_ParticipantsInTheOfferAbstract",
            "ar_pros_CompanyAdministratorsAbstract",
            "ar_pros_ResponsiblePersonsOfTheReportAbstract"

        };
        private IList<string> ConceptosOcultar = new List<string>()
        {
            "ar_pros_HomeOfTheAnnualReportAbstract",
            "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesAbstract",
            "ar_pros_TheIssuerAbstract",
            "ar_pros_SelectedFinancialInformationAbstract",
            "ar_pros_AdministrationAbstract",
            "ar_pros_EquityMarket",
            "ar_pros_ResponsiblePersonsAbstract",
            "ar_pros_ExhibitAbstract",
            "ar_pros_AdditionalValuesAbstract",
            "ar_pros_GuaranteesAndGuarantorsAbstract",
            "ar_pros_GeneralDataAbstract",       
            "ar_pros_InTheCaseOfAuctionSecuritiesAbstract",
            "ar_pros_NameOfTheUnderWriter",
            "ar_pros_WhereAppropriateRateGivenByRatingInstitutionAbstract",
            "ar_pros_InTheCaseOfSharesInAdditionShallIncludeTheFollowingAbstract",
            "ar_pros_InTheCaseOfDebtSecuritiesAbstract",
            "ar_pros_InTheCaseOfStructuredValuesAbstract",
            "ar_pros_InTheCaseOfSecuritiesIssuedUnderATrustAbstract",
            "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfSecurities",
            "ar_pros_InTheCaseOfSecuritiesIssuedByATrustAbstract",
            "ar_pros_AdditionalValuesLineItems",
            "ar_pros_SupplyProgram",
            "ar_pros_LeafletCoverAbstract",
            "ar_pros_ForSharesAbstract"

        };
    
        public int banderahecho = 0;
        public Boolean numerico = false;
       
        public override void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {

            //   docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;

            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;

            //  escribirEncabezado(docBuilder, instancia, estructuraReporte, true);

            imprimirTituloRol(docBuilder, rolAExportar);
            var lista = new List<ConceptoReporteDTO>();
            var lista2 = new List<ConceptoReporteDTO>();
            var lista3 = new List<ConceptoReporteDTO>();
            HechoReporteDTO hecho = null;
            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {
                
                if (concepto.Hechos != null)
                {
                    foreach (String llave in concepto.Hechos.Keys)
                    { 
                        hecho = concepto.Hechos[llave];
                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                        {
                            if (!ConceptoHiper.Contains(concepto.IdConcepto))
                            {
                            escribirConceptoEnTablaNota(docBuilder, estructuraReporte, hecho, concepto);
                            }
                            string tipoNumerico = ObtenertipoDato(concepto, TIPO_DATO_MONETARY);
                    
                            if (concepto.TipoDato == tipoNumerico && concepto.IdConcepto!= ID_Importe && concepto.IdConcepto!= ID_IVA && concepto.IdConcepto!= ID_Total )
                            {
                                lista.Add(concepto);
                                banderahecho = 1;
                            }
                            else if (banderahecho == 1)
                            {
                                PintaTabla(docBuilder, instancia, rolAExportar, estructuraReporte, lista);
                                banderahecho = 0;
                                lista.Clear();
                            }
                            string tipoNoNegativo = ObtenertipoDato(concepto, TIPO_DATO_NoNEGATIVO);
                            if (concepto.TipoDato == tipoNoNegativo)
                            {
                                lista2.Add(concepto);
                                banderahecho = 2;
                            }
                            else if (banderahecho == 2)
                            {
                                PintaTabla(docBuilder, instancia, rolAExportar, estructuraReporte, lista2);
                                banderahecho = 0;
                                lista2.Clear();
                            }
                            string tipoDecimal = ObtenertipoDato(concepto, TIPO_DATO_DECIMAL);
                            if (concepto.TipoDato == tipoNoNegativo)
                            {
                                lista3.Add(concepto);
                                banderahecho = 3;
                            }
                            else if (banderahecho == 3)
                            {
                                PintaTabla(docBuilder, instancia, rolAExportar, estructuraReporte, lista3);
                                banderahecho = 0;
                                lista3.Clear();
                            }

                            string conceptoAdosColumnas = ObtenertipoDato(concepto, TIPO_DATO_SI_NO);

                            if (concepto.TipoDato == conceptoAdosColumnas || concepto.IdConcepto == ID_Tipo_Oferta 
                                || concepto.IdConcepto == ID_Denominacion_moneda || concepto.IdConcepto == ID_Pesos|| concepto.IdConcepto== ID_Pesos1)
                            {
                                escribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
                            }
                        }
                      
                    }

                    if (hipercubosSerie.Contains(concepto.IdConcepto))
                    {
                        docBuilder.Writeln();
                        var conceptoActual = concepto;
                        string[] d = concepto.IdConcepto.Split(new string[] { "Abstract" }, StringSplitOptions.None);
                        string ConceptoHipercubo = (d[0]);
                        PintaTablaDimensionSerie(docBuilder, ConceptoHipercubo, instancia, rolAExportar, estructuraReporte, conceptoActual);

                    }
                    else if (hipercubosExist.Contains(concepto.IdConcepto))
                    {
                        docBuilder.Writeln();
                       
                        string[] d = concepto.IdConcepto.Split(new string[] { "Abstract" }, StringSplitOptions.None);
                        string ConceptoHipercubo = (d[0]);
                        PintaTablaDimensionExplicita(docBuilder, ConceptoHipercubo, instancia, rolAExportar, estructuraReporte);
                    }

                }

            }
       
            banderahecho = 0;
            Evaluador.Clear();
            ConceptoHiper.Clear();

        }
        private void PintaTablaDimensionExplicita(DocumentBuilder docBuilder, String valor, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            docBuilder.Writeln();

            foreach (var dato in estructuraReporte.Hipercubos)
            {
                if (dato.Value.Hechos.Count > 0)
                {
                    var variable = dato;
                    // modificaciones en la condicion para obtner un hipercubo exlicito
                    string[] d = variable.Key.Split(new string[] { "Table" }, StringSplitOptions.None);
                    string conceptoHipercuboTable = (d[0]);

                    if (conceptoHipercuboTable == valor && !Evaluador.Contains(variable.Key))
                    {
                        var hipercubo = variable;
                        docBuilder.InsertBreak(BreakType.PageBreak);
                        Table tablaActual = docBuilder.StartTable();
                        Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
                        docBuilder.ParagraphFormat.SpaceAfter = 0;
                        docBuilder.ParagraphFormat.SpaceBefore = 2;

                        //docBuilder.InsertCell(); 
                        // docBuilder.EndRow(); 
                        // Formatos de celdas que le da el color de fondo de los titulos de la tabla que se crea
                        docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                        docBuilder.Font.Color = Color.White;
                        docBuilder.Font.Size = TamanioLetraContenidoTabla;

                        //   docBuilder.InsertCell();


                        foreach (var idConcepto in hipercubo.Value.Hechos.Keys)
                        {
                            var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                            docBuilder.InsertCell();
                            var nombreConcepto =
                                DesgloseDeCreditosHelper
                                .obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                            docBuilder.Write(nombreConcepto);
                        }
                        docBuilder.EndRow();

                        docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                        docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                        docBuilder.Font.Color = Color.Black;
                        var cantidadCeldasVacias = hipercubo.Value.Hechos.Count - 1;

                        if (hipercubo.Value.Hechos.Count == 0)
                        {
                            return;
                        }

                        foreach (var idPlantillaContexto in hipercubo.Value.Utileria.configuracion.PlantillasContextos.Keys)
                        {

                            var plantilla = hipercubo.Value.Utileria.configuracion.PlantillasContextos[idPlantillaContexto];
                            var miembroPlantilla = plantilla.ValoresDimension[0];
                            var nombreMiembro =
                                   DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, miembroPlantilla.IdItemMiembro, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                            /* docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.LightGray;
                               docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                               docBuilder.Font.Color = Color.Black;*/
                            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                            docBuilder.Font.Color = Color.White;
                            docBuilder.Font.Size = TamanioLetraContenidoTabla;
                            docBuilder.InsertCell();
                            docBuilder.Write(nombreMiembro);
                            if (cantidadCeldasVacias > 0)
                            {
                                for (var indexMiembro = 0; indexMiembro < cantidadCeldasVacias; indexMiembro++)
                                {
                                    docBuilder.InsertCell();
                                    docBuilder.Write(String.Empty);
                                }
                                docBuilder.EndRow();
                            }
                            var countType = 0;
                            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                            docBuilder.Font.Color = Color.Black;
                            docBuilder.Bold = false;
                            foreach (var idConcepto in hipercubo.Value.Hechos.Keys)
                            {
                                var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                                if (matrizPlantillaContexto.ContainsKey(idPlantillaContexto))
                                {
                                    countType = matrizPlantillaContexto[idPlantillaContexto].Length;
                                }
                                else
                                {
                                    LogUtil.Error("No se encontro la definición para la plantilla de contexto:" + idPlantillaContexto);
                                }
                                break;
                            }
                            Boolean dimensiones = false;
                            for (var indexType = 0; indexType < countType; indexType++)
                            {


                                if (indexType > 0)
                                {
                                    dimensiones = true;
                                }

                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                foreach (var idConcepto in hipercubo.Value.Hechos.Keys)
                                {


                                    var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                                    ConceptoHiper.Add(idConcepto);
                                    var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                                    if (listaHechos != null)
                                    {
                                        var hecho = listaHechos[indexType];

                                        var valorHecho = hecho.Valor;
                                        if (dimensiones)
                                        {
                                            docBuilder.EndRow();
                                            docBuilder.InsertCell();
                                            dimensiones = false;
                                        }
                                        else
                                        {
                                            docBuilder.InsertCell();
                                        }

                                        if (hecho.NoEsNumerico)
                                        {
                                            docBuilder.CellFormat.WrapText = true;
                                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                        }
                                        else
                                        {
                                            docBuilder.CellFormat.WrapText = false;
                                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

                                        }
                                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                                        {
                                            docBuilder.Write(valorHecho);
                                        }
                                    }

                                }


                            }
                            docBuilder.RowFormat.AllowBreakAcrossPages = true;
                            docBuilder.RowFormat.HeadingFormat = false;
                            if (countType > 0)
                            {
                                docBuilder.EndRow();
                            }
                            
                        }


                        establecerBordesGrisesTabla(tablaActual);
                        docBuilder.EndTable();
                        docBuilder.Writeln();
                        Evaluador.Add(variable.Key);



                    }
                }

            }





        }

        private void PintaTablaDimensionSerie(DocumentBuilder docBuilder, String valor, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, ConceptoReporteDTO concepto)
        {
            docBuilder.Writeln();
            // var listaConseptosReportes = estructuraReporte.Hipercubos;
            foreach (var dato in estructuraReporte.Hipercubos)
            {

                var variable = dato;
                string[] d = variable.Key.Split(new string[] { "Table" }, StringSplitOptions.None);
                string conceptoHipercuboTable = (d[0]);

                if (conceptoHipercuboTable == valor && !Evaluador.Contains(variable.Key))
                {

                    ConceptoReporteDTO primerConcepto = null;

                    if (!estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
                    {
                        throw new IndexOutOfRangeException("No existe el rol [" + rolAExportar.Rol + "] dentro del listado de roles del reporte.");
                    }
                    if (estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
                    {

                        if (!concepto.Abstracto)
                        {
                            primerConcepto = concepto;
                            break;
                        }

                    }

                    var hipercubo = variable;


                    Table tablaActual = docBuilder.StartTable();
                    Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
                    docBuilder.ParagraphFormat.SpaceAfter = 0;
                    docBuilder.ParagraphFormat.SpaceBefore = 2;

                    //docBuilder.InsertCell(); 
                    // docBuilder.EndRow(); 
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    docBuilder.Font.Color = Color.White;
                    docBuilder.Font.Size = TamanioLetraContenidoTabla;

                    docBuilder.InsertCell();

                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                    docBuilder.Font.Color = Color.White;
                    establecerFuenteTituloCampo(docBuilder);
                    docBuilder.Font.Size = TamanioLetraTituloTabla;
                    docBuilder.Write("Serie [Eje]");
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

                    if (hipercubo.Value.Titulos.Count > 0)
                    {
                        for (var indexTitulo = 0; indexTitulo < hipercubo.Value.Titulos.Count; indexTitulo++)
                        {
                            var titulo = hipercubo.Value.Titulos[indexTitulo];
                            docBuilder.InsertCell();
                            docBuilder.Write(titulo);
                        }
                        docBuilder.EndRow();
                    }



                    establecerFuenteTituloCampo(docBuilder);
                    docBuilder.Font.Size = TamanioLetraTituloTabla;

                    int fila = 0;


                    if (concepto.Abstracto)
                    {
                        fila = +1;

                        for (int iCell = 0; iCell < fila; iCell++)
                        {

                            docBuilder.InsertCell();
                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        }

                    }
                    if (concepto.Abstracto)
                    {
                        docBuilder.Bold = true;
                        docBuilder.Font.Color = Color.White;
                        docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;

                        docBuilder.ParagraphFormat.LeftIndent = (concepto.Tabuladores < 0 ? concepto.Tabuladores : 0);
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        docBuilder.Write(concepto.Valor);
                        docBuilder.InsertCell();
                        docBuilder.EndRow();
                        //  tituloAbstracto.Add(concepto.Valor);


                    }
                    else
                    {
                        docBuilder.Bold = false;

                    }


                    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                    docBuilder.Font.Color = Color.Black;
                    docBuilder.Bold = false;
                    foreach (var idConcepto in hipercubo.Value.Hechos.Keys)
                    {


                        var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                        docBuilder.InsertCell();
                        var nombreConcepto =
                        DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                        docBuilder.Write(nombreConcepto);
                        ConceptoHiper.Add(idConcepto);

                        foreach (var idPlantillaContexto in matrizPlantillaContexto.Keys)
                        {
                            docBuilder.CellFormat.WrapText = true;
                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                            var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                            for (var indexHecho = 0; indexHecho < listaHechos.Length; indexHecho++)
                            {
                                var hecho = listaHechos[indexHecho];
                                var valorHecho = hecho.Valor;

                                docBuilder.InsertCell();
                                if (hecho.NoEsNumerico)
                                {
                                    docBuilder.CellFormat.WrapText = true;
                                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                }
                                else
                                {
                                    docBuilder.CellFormat.WrapText = false;
                                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

                                }


                                if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)) && instancia.Taxonomia.ConceptosPorId.ContainsKey(hecho.IdConcepto))
                                {
                                    var conceptoHecho = instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto];
                                    if (conceptoHecho.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK))
                                    {
                                        WordUtil.InsertHtml(docBuilder, hecho.IdConcepto + ":" + hecho.Id, PARRAFO_HTML_NOTAS_Texblock + valorHecho + "</p>", false, true);

                                        //docBuilder.InsertHtml(PARRAFO_HTML_NOTAS_Texblock + limpiarBloqueTexto(valorHecho) + "</p>", true);
                                    }
                                    else
                                    {
                                        docBuilder.Writeln(valorHecho);
                                    }

                                }
                            }
                        }

                        docBuilder.EndRow();
                    }


                    establecerBordesGrisesTabla(tablaActual);
                    docBuilder.EndTable();
                    docBuilder.Writeln();
                    docBuilder.Writeln();
                    Evaluador.Add(variable.Key);
                    break;
                }

            }



        }
        protected override void escribirConceptoEnTablaNota( DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual, bool forzarHtml = false)
        {
            // condicion para obtener el formato de los tres primeros conceptos
            string text_block = ObtenertipoDato(conceptoActual, TIPO_DATO_TEXT_BLOCK);


            string cadena = ObtenertipoDato(conceptoActual, TIPO_DATO_STRING);

            if (conceptoActual.TipoDato == cadena || conceptoActual.TipoDato==text_block)
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
                Table tablaActual2 = docBuilder.StartTable();
                docBuilder.InsertCell();
                docBuilder.Font.Size = 1;
                docBuilder.Font.Spacing = 1;
                tablaActual2.SetBorders(LineStyle.None, 0, Color.Black);
                docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
                docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
                docBuilder.CellFormat.Borders.Top.LineWidth = 2;
                docBuilder.EndRow();
                docBuilder.EndTable();

                establecerFuenteValorCampo(docBuilder);
                docBuilder.Font.Color = Color.Black;
                //  docBuilder.InsertParagraph();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);

                tablaActual2 = docBuilder.StartTable();
                docBuilder.InsertCell();
                docBuilder.Font.Size = 1;
                docBuilder.Font.Spacing = 1;
                tablaActual2.SetBorders(LineStyle.None, 0, Color.Black);
                docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
                docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
                docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
            
                docBuilder.EndRow();
                docBuilder.EndTable();
                docBuilder.Writeln();

            }
            docBuilder.MoveToDocumentEnd();

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



        private void PintaTabla(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listaConseptosReporte)
        {
            docBuilder.Writeln();
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

              //  string valor = ObtenertipoDato(concepto, TIPO_DATO_MONETARY);
                //string tipoNoNegativo = ObtenertipoDato(concepto, TIPO_DATO_NoNEGATIVO);
                if ( concepto.IdConcepto != ID_Importe && concepto.IdConcepto != ID_IVA && concepto.IdConcepto != ID_Total) 
                    
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
            }
            establecerBordesGrisesTabla(tablaActual);
            docBuilder.EndTable();
            docBuilder.Writeln();
        }
        private void escribirADosColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 5;
            docBuilder.ParagraphFormat.SpaceBefore = 5;



            docBuilder.InsertCell();
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            escribirTituloConcepto(docBuilder, idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
            docBuilder.Write(": ");

            docBuilder.InsertCell();
            establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);
            docBuilder.EndRow();

            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);

            docBuilder.EndTable();
        }
    }
    }


 

