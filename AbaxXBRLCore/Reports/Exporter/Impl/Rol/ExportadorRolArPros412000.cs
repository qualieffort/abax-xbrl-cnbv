using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.IO;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Xml;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    public class ExportadorRolArPros412000 : ExportadorRolDocumentoBase
    {
        public int banderahecho = 0;
        public int banderahecho1 = 0;
        public Boolean numerico = false;
        public static String ID_Tipo_Oferta = "ar_pros_TypeOfOffer";
        public static String ID_Tipo_Oferta_1 = "ar_pros_offerTypeItemType";
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

        private IList<string> hipercubosSerie = new List<string>()
        {

            "ar_pros_DebtSeriesCharacteristicsAbstract",
            "ar_pros_CharacteristicsOfTheCurrentListedSeriesTable",
            "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesAbstract",
            "ar_pros_InTheCaseOfDebtIssuersAbstract",
            "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedAbstract",
            "ar_pros_CharacteristicsOfTheCurrentListedSeriesAbstract",
            "ar_pros_StructuredSeriesCharacteristicsAbstract"
        };
        private IList<string> hipercubosExist = new List<string>()
        {
           // "ar_pros_CompanyAdministratorsTable",
           // "ar_pros_CompanyShareholdersTable",
            "ar_pros_SecuritiesRatingTable",
          //  "ar_pros_ResponsiblePersonsOfTheReportTable",
            //"ar_pros_ParticipantsInTheOfferTable",
            //"ar_pros_MultiplesTables",
           
           // "ar_pros_CompanyAdministratorsAbstract",
           // "ar_pros_ResponsiblePersonsOfTheReportAbstract",
           // "ar_pros_NameOfTheUnderWriter",
          //  "ar_pros_WhereAppropriateRateGivenByRatingInstitutionAbstract",
          //  "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfSecurities",
          //  "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfStructuredSecurities",
          //  "ar_pros_AdditionalValuesAbstract",
          //  "ar_pros_MultiplesAbstract",
          //   "ar_pros_SecuritiesRatingLineItems",
          //  "ar_pros_SecuritiesRatingAbstract",
         //   "ar_pros_ParticipantsInTheOfferAbstract",
         //   "ar_pros_CompanyAdministratorsAbstract",
          //  "ar_pros_ResponsiblePersonsOfTheReportAbstract"


        };

		private IDictionary<String, Boolean> conceptosHipercubos = new Dictionary<String, Boolean>()
            {
                {"ar_pros_DebtSeries", true},
                {"ar_pros_DebtIssuanceDate", true},
                {"ar_pros_DebtSerieSettlementDate", true},
                {"ar_pros_DebtSerieTermOfTheIssuance", true},
                {"ar_pros_DebtInterestPerformanceAndCalculationProcedure", true},
                {"ar_pros_DebtPaymentFrequencyOfInterest", true},
                {"ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal", true},
                {"ar_pros_DebtSubordinationOfTitlesIfAny", true},
                {"ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable", true},
                {"ar_pros_DebtGuaranteeIfAny", true},
                {"ar_pros_DebtTrustIfAny", true},
                {"ar_pros_DebtCommonRepresentative", true},
                {"ar_pros_DebtDepositary", true},
                {"ar_pros_DebtTaxRegime", true},
                {"ar_pros_DebtGuaranteedCapital", true},
                {"ar_pros_DebtUnderlyingAsset", true},
                {"ar_pros_DebtCalculationAgentIfAny", true},
                {"ar_pros_DebtMultiplierIfApplicable", true},
                {"ar_pros_DebtSerieObservations", true},
                {"ar_pros_Rating", true},
                {"ar_pros_RatingMeaning", true},
                {"ar_pros_SecuritiesRatingOherName", true},
                {"ar_pros_StructuredSeriesCharacteristicsLineItems", true},
                {"ar_pros_StructuredSeries", true},
                {"ar_pros_StructuredSeriesIssuanceDate", true},
                {"ar_pros_StructuredSeriesSettlementDate", true},
                {"ar_pros_StructuredSeriesTermOfTheIssuance", true},
                {"ar_pros_StructuredSeriesInterestPerformanceAndCalculationProcedure", true},
                {"ar_pros_StructuredSeriesPaymentFrequencyOfInterest", true},
                {"ar_pros_StructuredSeriesLocationAndPaymentOfInterestAndPrincipal", true},
                {"ar_pros_StructuredSeriesSubordinationOfTitlesIfAny", true},
                {"ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable", true},
                {"ar_pros_StructuredSeriesGuaranteeIfAny", true},
                {"ar_pros_StructuredSeriesTrustIfAny", true},
                {"ar_pros_StructuredSeriesCommonRepresentative", true},
                {"ar_pros_StructuredSeriesDepositary", true},
                {"ar_pros_StructuredSeriesTaxRegime", true},
                {"ar_pros_StructuredSeriesObservations", true},
                {"ar_pros_Class", true},
                {"ar_pros_EquitySerie", true},
                {"ar_pros_SerieType", true},
                {"ar_pros_SerieNumberOfStocks", true},
                {"ar_pros_SerieStockExhangesWhereTheyAreRegistered", true},
                {"ar_pros_SerieTickerFromTheSourceMarket", true},
                {"ar_pros_SerieTypeOfOperation", true},
                {"ar_pros_SerieObservations", true},
                {"ar_pros_SerieTotalAmount", true},
                {"ar_pros_SerieNominalValue", true}

            };

        private IDictionary<string,int> columnasPorCubo = new Dictionary<string,int>()
        {
       
            { "ar_pros_DebtSeriesCharacteristicsAbstract" ,4},
            { "ar_pros_CharacteristicsOfTheCurrentListedSeriesTable",5 },
            { "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesAbstract",5 },
            { "ar_pros_InTheCaseOfDebtIssuersAbstract",5 },
            { "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedAbstract",5 },
            { "ar_pros_CharacteristicsOfTheCurrentListedSeriesAbstract",5 },
            { "ar_pros_StructuredSeriesCharacteristicsAbstract", 5 }
        };
        /// <summary>
        /// Desactiva los hehos de portada.
        /// </summary>
        public bool DesactivarHechosPortada { get; set; }

        public override void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {

          
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;
            imprimirPortada(docBuilder, rolAExportar);

            var lista= new List<ConceptoReporteDTO>();
            var lista2= new List<ConceptoReporteDTO>();
            var lista3= new List<ConceptoReporteDTO>();
            HechoReporteDTO hecho = null;
            int indiceHechosPortada = instancia.Taxonomia.ConceptosPorId.ContainsKey("ar_pros_LogoOfTheSettlor") ? 6 : 3;
            if (DesactivarHechosPortada)
            {
                indiceHechosPortada = 0;
            }
            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {
                 if (concepto.Hechos != null)
                {
                    foreach (String llave in concepto.Hechos.Keys)
                    { 
                        hecho = concepto.Hechos[llave];
                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                        {
                            if (!ConceptoHiper.Contains(concepto.IdConcepto) && !conceptosHipercubos.ContainsKey(concepto.IdConcepto))
                            {
                                EscribirConceptoEnTablaNota(docBuilder, estructuraReporte, hecho, concepto,indiceHechosPortada);
                            }
                            string tipoNumerico = ObtenertipoDato(concepto, TIPO_DATO_MONETARY);
                            if (concepto.TipoDato == tipoNumerico && !conceptosHipercubos.ContainsKey(concepto.IdConcepto))
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

                            if (concepto.TipoDato == conceptoAdosColumnas || concepto.IdConcepto == ID_Tipo_Oferta || concepto.IdConcepto== ID_Tipo_Oferta_1)
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
                    if (hipercubosExist.Contains(concepto.IdConcepto))
                    {
                        docBuilder.Writeln();
                       
                        string[] d = concepto.IdConcepto.Split(new string[] { "Abstract" }, StringSplitOptions.None);
                        string ConceptoHipercubo = (d[0]);
                        PintaTablaDimensionExplicita(docBuilder, ConceptoHipercubo, instancia, rolAExportar, estructuraReporte);
                    }
                    //if (concepto.IdConcepto.Equals("ar_pros_SecuritiesRatingAbstract")) {

                    //    ImprimeTitulo(docBuilder, concepto);
                    //    ConceptoHiper.Add("ar_pros_Rating");
                    //    ConceptoHiper.Add("ar_pros_RatingMeaning");
                    //    PintaTarjetaCalificaciones(docBuilder, instancia, estructuraReporte.Hipercubos["ar_pros_SecuritiesRatingTable"], estructuraReporte);
                    //}
                }
                banderahecho1 += 1;

            }
        
       
            
            banderahecho1 = 0;
            banderahecho = 0;
            Evaluador.Clear();
            ConceptoHiper.Clear();

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

            // escribir introduccion al indice
            imprimirIndice(docBuilder);
            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);

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
                                countType = matrizPlantillaContexto[idPlantillaContexto].Length;
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
                                    var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                                    ConceptoHiper.Add(idConcepto);
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
                            docBuilder.EndRow();
                        }


                        establecerBordesGrisesTabla(tablaActual);
                        docBuilder.EndTable();
                        docBuilder.Writeln();
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

                    if (hipercubo.Value.Titulos.Count == 0) {

                        break;
                    }

                    if (columnasPorCubo.ContainsKey(concepto.IdConcepto)) {
                        int maxCols = columnasPorCubo[concepto.IdConcepto];

                        IList<HipercuboReporteDTO> hipercubosFinales = DividirHipercuboPorColumnas(hipercubo.Value, maxCols);
                        foreach (var hcFinal in hipercubosFinales) {
                            PintaTablaCubo(new KeyValuePair<string, HipercuboReporteDTO>(hipercubo.Key,hcFinal), instancia, estructuraReporte, docBuilder, concepto);
                        }
                    }
                    else
                    {
                        PintaTablaCubo(hipercubo, instancia, estructuraReporte, docBuilder, concepto);
                    }

                    


                    
                    
                    Evaluador.Add(variable.Key);
                    break;
                }

            }



        }
        /// <summary>
        /// Crea varios hipercubos a partir del original tomando en cuenta un número máximo de columnas
        /// </summary>
        /// <returns></returns>
        private IList<HipercuboReporteDTO> DividirHipercuboPorColumnas(HipercuboReporteDTO hipercuboOrigen, int maxCols)
        {
            var listaSubCubos = new List<HipercuboReporteDTO>();
            HipercuboReporteDTO cuboActual = null;
            int colActual = 0;
            for (var iCol = 0; iCol < hipercuboOrigen.Titulos.Count; iCol++) {

                var tituloActual = hipercuboOrigen.Titulos[iCol];

                if (colActual >= maxCols || cuboActual == null)
                {
                    cuboActual = new HipercuboReporteDTO();
                    cuboActual.Utileria = hipercuboOrigen.Utileria;
                    cuboActual.Hechos = new Dictionary<string, IDictionary<string, HechoDto[]>>();
                    cuboActual.Titulos = new List<String>();
                    colActual = 0;
                    listaSubCubos.Add(cuboActual);
                }

                cuboActual.Titulos.Add(tituloActual);
                foreach (var hechoKey in hipercuboOrigen.Hechos.Keys) {
                    if (!cuboActual.Hechos.ContainsKey(hechoKey)){
                        cuboActual.Hechos[hechoKey] = new Dictionary<string, HechoDto[]>();
                    }
                    
                    foreach (var subHechoKey in hipercuboOrigen.Hechos[hechoKey].Keys) {
                        if (!cuboActual.Hechos[hechoKey].ContainsKey(subHechoKey))
                        {
                            cuboActual.Hechos[hechoKey][subHechoKey] = new HechoDto[maxCols];
                        }
                        cuboActual.Hechos[hechoKey][subHechoKey][colActual] = hipercuboOrigen.Hechos[hechoKey][subHechoKey][iCol];
                    }
                }
                
                colActual++;
            }

            return listaSubCubos;
        }

        /// <summary>
        /// Pinta el contenido de un cubo ya organizado en una tabla de Word
        /// </summary>

        private void PintaTablaCubo(KeyValuePair<string, HipercuboReporteDTO> hipercubo, DocumentoInstanciaXbrlDto instancia, 
            ReporteXBRLDTO estructuraReporte, DocumentBuilder docBuilder, ConceptoReporteDTO concepto)
        {
                    Table tablaActual = docBuilder.StartTable();
                    Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
                    docBuilder.ParagraphFormat.SpaceAfter = 0;
                    docBuilder.ParagraphFormat.SpaceBefore = 2;
                    var cantidadSeries = hipercubo.Value.Titulos.Count;
                    var percentWidth = 100 / (cantidadSeries + 1);
                    //docBuilder.InsertCell(); 
                    // docBuilder.EndRow(); 
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    docBuilder.Font.Color = Color.White;
                    docBuilder.Font.Size = TamanioLetraContenidoTabla;

                    docBuilder.InsertCell();

                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(percentWidth);
                    docBuilder.Font.Color = Color.White;
                    establecerFuenteTituloCampo(docBuilder);
                    docBuilder.Font.Size = TamanioLetraTituloTabla;
                    docBuilder.Write("Serie [Eje]");
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
                    docBuilder.RowFormat.HeadingFormat = true;
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
                    if (concepto.Abstracto)
                    {

                        PintaFilaSubTitulo(concepto.Valor, docBuilder, hipercubo.Value.Titulos.Count);
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
                        //Si es el concepto de representante comun primero pintamos las calificaciones
                        if (idConcepto.Equals("ar_pros_DebtCommonRepresentative"))
                        {
                    PintaCalificacionesEnTabla(docBuilder, instancia, estructuraReporte,hipercubo);
                        }

                        var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                        docBuilder.InsertCell();
                        docBuilder.RowFormat.HeadingFormat = false;
                        var nombreConcepto =
                        DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                        docBuilder.Write(nombreConcepto??"");
                        ConceptoHiper.Add(idConcepto);
                        foreach (var idPlantillaContexto in matrizPlantillaContexto.Keys)
                        {
                            var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                            if (listaHechos.Length == 0) 
                            {
                                continue;
                            }
                            docBuilder.CellFormat.WrapText = true;
                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                            
                            for (var indexHecho = 0; indexHecho < listaHechos.Length; indexHecho++)
                            {
                                var hecho = listaHechos[indexHecho];
                                if (hecho == null)
                                {
                                    continue;
                                }
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


                                if (hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor) && instancia.Taxonomia.ConceptosPorId.ContainsKey(hecho.IdConcepto))
                                {
                                    var conceptoHecho = instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto];
                                    if (conceptoHecho.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK))
                                    {
                                        WordUtil.InsertHtml(docBuilder, hecho.IdConcepto + ":" + hecho.Id, PARRAFO_HTML_NOTAS_Texblock + valorHecho + "</p>", false, true);
                                        
                                    }
                                    else
                                    {
                                        EscribirValorHecho(docBuilder, estructuraReporte, hecho, instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto]);
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
        }

        /// <summary>
        /// Escribe las notas con una consideración para la portada.
        /// </summary>
        /// <param name="docBuilder">Puntero actual de redacción del documento.</param>
        /// <param name="estructuraReporte">DTO con la información del reporte.</param>
        /// <param name="hecho">Hecho que se peretende presentar.</param>
        /// <param name="conceptoActual">Concepto a prestar.</param>
        /// <param name="indicePortada">Indice de los conceptos pertenecientes a la portada</param>
        protected void EscribirConceptoEnTablaNota( DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual, int indicePortada)
        {
            // condicion para obtener el formato de los tres primeros conceptos
            string text_block = ObtenertipoDato(conceptoActual, TIPO_DATO_TEXT_BLOCK);

            if (conceptoActual.AtributosAdicionales != null && conceptoActual.AtributosAdicionales.Count > 0)
            {
                conceptosEnIndice(docBuilder, conceptoActual);
            }

            if ( conceptoActual.TipoDato==text_block && banderahecho1<= indicePortada)
            {
                var ETIQUETA_DE = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_DE");

                Table tablaActual = docBuilder.StartTable();
                docBuilder.InsertCell();
                docBuilder.Font.Size = 1;
                docBuilder.Font.Spacing = -10;
                tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
                docBuilder.CellFormat.Borders.Top.Color = Color.White;
                docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
                docBuilder.CellFormat.Borders.Top.LineWidth = 0;

              
                establecerFuenteValorCampo(docBuilder);
                docBuilder.Font.Color = Color.Black;
                docBuilder.Font.Size = 12;
                docBuilder.Font.Spacing = 0;
                // docBuilder.InsertParagraph();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);

                Section seccion = docBuilder.CurrentSection;
                seccion.PageSetup.DifferentFirstPageHeaderFooter = false;
                seccion.HeadersFooters.LinkToPrevious(false);
                seccion.HeadersFooters.Clear();
                docBuilder.MoveToHeaderFooter(HeaderFooterType.HeaderPrimary);
                docBuilder.MoveToHeaderFooter(HeaderFooterType.FooterPrimary);
                docBuilder.InsertField("PAGE", "");
                docBuilder.Write(" " + ETIQUETA_DE + " ");
                docBuilder.InsertField("NUMPAGES", "");
                docBuilder.CurrentParagraph.ParagraphFormat.Alignment = ParagraphAlignment.Right;

                docBuilder.EndRow();
                docBuilder.EndTable();
               
            }

            if(banderahecho1 == indicePortada)
            {
                docBuilder.InsertBreak(BreakType.PageBreak);
            }

            string cadena = ObtenertipoDato(conceptoActual, TIPO_DATO_STRING);
            var esTokenItemType = EsTipoDatoTokenItemType(conceptoActual.TipoDato);

            if (conceptoActual.TipoDato == cadena || esTokenItemType || (conceptoActual.TipoDato==text_block && banderahecho1 > indicePortada))
            {
              
                establecerFuenteTituloCampo(docBuilder);
                docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
                docBuilder.Font.Color = Color.Black;
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                docBuilder.Write(conceptoActual != null ? conceptoActual.Valor + ":" : "");

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
        /// <summary>
        /// Pinta una fila con el titulo indicado.
        /// </summary>
        /// <param name="textoTitulo">Texto del título.</param>
        /// <param name="docBuilder">Puntero del documento.</param>
        /// <param name="numeroSeries">Cantidad de series existentes.</param>
        private void PintaFilaSubTitulo(String textoTitulo,DocumentBuilder docBuilder, int numeroSeries)
        {
            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
            docBuilder.InsertCell();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.Write(textoTitulo);
            docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
            if (numeroSeries > 0)
            {
                for (var indexTitulo = 0; indexTitulo < numeroSeries; indexTitulo++)
                {
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
                }
            }
            docBuilder.EndRow();
            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
        }
        /// <summary>
        /// Pinta la sección de calificaciones en la tabla correspondiente.
        /// </summary>
        /// <param name="docBuilder">Puntero de </param>
        /// <param name="instancia"></param>
        /// <param name="estructuraReporte"></param>
        private void PintaCalificacionesEnTabla(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO estructuraReporte, 
            KeyValuePair<string, HipercuboReporteDTO> hipercuboSerie)
        {
            var hipercubo = estructuraReporte.Hipercubos["ar_pros_SecuritiesRatingTable"];

            hipercubo = FiltrarHipercuboCalificaciones(hipercubo,hipercuboSerie.Value);

            if (hipercubo == null)
            {
                return;
            }
            var lenguaje = estructuraReporte.Lenguaje;
            var textoTituloSecciion = ObtenEtiquetaConcepto("ar_pros_SecuritiesRatingAbstract", instancia, lenguaje);
            PintaFilaSubTitulo(textoTituloSecciion, docBuilder, hipercubo.Titulos.Count);
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaConceptoImplicita(hipercubo.Hechos);
            
            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                try
                {
                    var diccionarioConceptos = diccionarioTarjetas[clavePlantilla];
                    var primerHecho = diccionarioConceptos.Values.First().First();
                    var idDimensionExplicita = hipercubo.Utileria.ObtenDimensionesTipo(primerHecho, instancia, true).First().IdDimension;
                    var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, idDimensionExplicita, instancia);
                    var textoTituloMiembro = "  " + ObtenEtiquetaConcepto(miembroExplicita.IdItemMiembro, instancia, lenguaje);
                    PintaFilaSubTitulo(textoTituloMiembro, docBuilder, hipercubo.Titulos.Count);

                    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                    docBuilder.Font.Color = Color.Black;
                    docBuilder.Bold = false;
                    docBuilder.RowFormat.HeadingFormat = false;

                    foreach (var idConcepto in diccionarioConceptos.Keys)
                    {
                        docBuilder.InsertCell();
                        var nombreConcepto = "    " + DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                        docBuilder.Write(nombreConcepto);
                        var listaHechos = diccionarioConceptos[idConcepto];
                        for (var indexHecho = 0; indexHecho < listaHechos.Count; indexHecho++)
                        {
                            var hecho = listaHechos[indexHecho];
                            docBuilder.InsertCell();
                            if (hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor))
                            {
                                EscribirValorHecho(docBuilder, estructuraReporte, hecho, instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto]);
                            }
                        }
                        docBuilder.EndRow();
                    }
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                }
            }
        }
        /// <summary>
        /// Recorta el hipercubo de calificaciones de acuerdo al cubo de serie enviado 
        /// </summary>
        /// <param name="hipercubo"></param>
        /// <param name="hipercuboSerie"></param>
        /// <returns></returns>
        private HipercuboReporteDTO FiltrarHipercuboCalificaciones(HipercuboReporteDTO hipercubo, HipercuboReporteDTO hipercuboSerie)
        {
            HipercuboReporteDTO nuevoCubo = new HipercuboReporteDTO();

            nuevoCubo.Utileria = hipercubo.Utileria;

            nuevoCubo.Hechos = new Dictionary<string, IDictionary<string, HechoDto[]>>();
            nuevoCubo.Titulos = new List<String>();

            
            for (var iCol = 0; iCol < hipercuboSerie.Titulos.Count; iCol++)
            {

                var tituloActual = hipercuboSerie.Titulos[iCol];

                nuevoCubo.Titulos.Add(tituloActual);
                foreach (var hechoKey in hipercubo.Hechos.Keys)
                {
                    if (!nuevoCubo.Hechos.ContainsKey(hechoKey))
                    {
                        nuevoCubo.Hechos[hechoKey] = new Dictionary<string, HechoDto[]>();
                    }

                    foreach (var subHechoKey in hipercubo.Hechos[hechoKey].Keys)
                    {
                        if (!nuevoCubo.Hechos[hechoKey].ContainsKey(subHechoKey))
                        {
                            nuevoCubo.Hechos[hechoKey][subHechoKey] = new HechoDto[hipercuboSerie.Titulos.Count];
                        }
                        try
                        {

                            if (hipercubo.Hechos[hechoKey][subHechoKey].Count() > hipercubo.Titulos.IndexOf(tituloActual)) {
                                nuevoCubo.Hechos[hechoKey][subHechoKey][iCol] = hipercubo.Hechos[hechoKey][subHechoKey][hipercubo.Titulos.IndexOf(tituloActual)];
                            }
                            else
                            {
                                nuevoCubo.Hechos[hechoKey][subHechoKey][iCol] = new HechoDto();
                            }
                            
                        }catch(Exception ex)
                        {
                            System.Console.WriteLine(ex.StackTrace);
                        }
                       
                    }
                }

                
            }

            return nuevoCubo;

        }

        /// <summary>
        /// Imprime las tarjetas de los administradores.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="hipercubo">Información del hipercubo.</param>
        private void PintaTarjetaCalificaciones(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hipercubo, ReporteXBRLDTO estructuraReporte)
        {

            var matrizPlantillaContexto = hipercubo.Hechos;
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaTituloConcepto(matrizPlantillaContexto, hipercubo.Titulos);
            var lenguaje = estructuraReporte.Lenguaje;
            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                var listaTajetasExplicita = diccionarioTarjetas[clavePlantilla];
                if (!ContieneInfomracion(listaTajetasExplicita))
                {
                    continue;
                }
                var primerHecho = listaTajetasExplicita.Values.First().Values.First();
                var idDimensionExplicita = hipercubo.Utileria.ObtenDimensionesTipo(primerHecho, instancia, true).First().IdDimension;
                var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, idDimensionExplicita, instancia);
                var textoTituloMiembro = ObtenEtiquetaConcepto(miembroExplicita.IdItemMiembro, instancia, lenguaje);
                ImprimeSubTitulo(docBuilder, textoTituloMiembro);
                foreach (var serie in listaTajetasExplicita.Keys)
                {
                    PintaTarjetaCalificaciones(docBuilder, serie, listaTajetasExplicita[serie], instancia, lenguaje);
                }
            }
        }
        /// <summary>
        /// Pinta una tarjeta de tipo calificaciones.
        /// </summary>
        /// <param name="docBuilder"></param>
        /// <param name="tituloSerie"></param>
        /// <param name="tarjeta"></param>
        /// <param name="instancia"></param>
        /// <param name="idioma"></param>
        private void PintaTarjetaCalificaciones(DocumentBuilder docBuilder, String tituloSerie ,IDictionary<string, HechoDto> tarjeta, DocumentoInstanciaXbrlDto instancia, String idioma)
        {
            if (ContieneInformacion(tarjeta))
            {
                docBuilder.StartTable();

                establecerBordesCeldaTabla(docBuilder);
                establecerFuenteCeldaTitulo(docBuilder);
                SetCellColspan(docBuilder, tituloSerie, 2);
                docBuilder.EndRow();
                var conceptosPrimeraFila = new List<string>(tarjeta.Keys);
                ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosPrimeraFila, instancia, 0, idioma);

                docBuilder.EndTable();
                docBuilder.Writeln();
            }
        }
        /// <summary>
        /// Determina si la tarjeta proporcionada contiene información.
        /// </summary>
        /// <param name="tarjeta">Diccionario de conceptos con los hechos a evaluar.</param>
        /// <returns>Retorna true si almento uno de los hechos contiene información.</returns>
        private Boolean ContieneInformacion(IDictionary<string, HechoDto> tarjeta)
        {
            var contiene = false;
            foreach (var idConcepto in tarjeta.Keys)
            {
                var hecho = tarjeta[idConcepto];
                if (hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor))
                {
                    contiene = true;
                    break;
                }
            }
            return contiene;
        }
        /// <summary>
        /// Detarmina si almenos uno de los conjuntos de hechos contiene información.
        /// </summary>
        /// <param name="diccionarioTarjetas">Diccionario con los conjuntos de hechos a evaluar.</param>
        /// <returns>Si almenos uno de los conjuntos de hechos contiene información.</returns>
        private Boolean ContieneInfomracion(IDictionary<String, IDictionary<string, HechoDto>> diccionarioTarjetas)
        {
            var contiene = false;
            foreach (var idPlantillaContexto in diccionarioTarjetas.Keys)
            {
                var tarjeta = diccionarioTarjetas[idPlantillaContexto];
                if (ContieneInformacion(tarjeta))
                {
                    contiene = true;
                    break;
                }
            }
            return contiene;
        }
    }
    }


 

