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
    public class ExportadorRolArPros : ExportadorRolDocumentoBase
    {


        private String Idioma = "es";
        private IList<string> hipercubosSerie = new List<string>()
        {
            "ar_pros_DebtSeriesCharacteristicsTable",
            "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesTable",
            "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedTable",
            "ar_pros_AdditionalValuesTable",
            "ar_pros_CharacteristicsOfTheCurrentListedSeriesTable",
            "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesAbstract",
            "ar_pros_InTheCaseOfDebtIssuersAbstract",
            "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedAbstract",
            "ar_pros_CharacteristicsOfTheCurrentListedSeriesAbstract"
        };
        private IList<string> hipercubosExist = new List<string>()
        {
          
            //"ar_pros_CompanyAdministratorsAbstract",
            //"ar_pros_CompanyShareholdersAbstract",	
            "ar_pros_ResponsiblePersonsOfTheReportAbstract",
            "ar_pros_NameOfTheUnderWriter",
            "ar_pros_WhereAppropriateRateGivenByRatingInstitutionAbstract",
            "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfSecurities",
            "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfStructuredSecurities",
            "ar_pros_AdditionalValuesAbstract",
            "ar_pros_MultiplesAbstract",
            "ar_pros_AdministratorsLineItems",
            "ar_pros_ShareholdersLineItems",
            "ar_pros_ParticipantsInTheOfferAbstract",
            "ar_pros_AdministratorsLineItems",
            "ar_pros_ResponsibleLineItems"


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
            "ar_pros_GuaranteesAndGuarantorsAbstract",
            "ar_pros_GeneralInformationAbstract",
            "ar_pros_AdditionalValuesAbstract"
        };

        private IDictionary<String, Boolean> ConceptosHipercubos = new Dictionary<String, Boolean>()
            {
                {"ar_pros_AdministratorName", true},
                {"ar_pros_AdministratorFirstName", true},
                {"ar_pros_AdministratorSecondName", true},
                {"ar_pros_AdministratorDirectorshipType", true},
                {"ar_pros_AdministratorDesignationDate", true},
                {"ar_pros_AdministratorAssemblyType", true},
                {"ar_pros_AdministratorAssemblyTypePros", true},
                {"ar_pros_AdministratorPeriodForWhichTheyWereElected", true},
                {"ar_pros_AdministratorPosition", true},
                {"ar_pros_AdministratorTimeWorkedInTheIssuer", true},
                {"ar_pros_AdministratorShareholding", true},
                {"ar_pros_AdministratorGender", true},
                {"ar_pros_AdministratorAdditionalInformation", true},
                {"ar_pros_ShareholdersLineItems", true},
                {"ar_pros_ShareholderNameCorporateName", true},
                {"ar_pros_ShareholderFirstName", true},
                {"ar_pros_ShareholderSecondName", true},
                {"ar_pros_ShareholderShareholding", true},
                {"ar_pros_ShareholderAdditionalInformation", true},
                {"ar_pros_SubcommitteesIntegrationOfTheSubcommitteesItems", true},
                {"ar_pros_SubcommitteesNames", true},
                {"ar_pros_SubcommitteesLastName", true},
                {"ar_pros_SubcommitteesMothersLastName", true},
                {"ar_pros_SubcommitteesTypeOfSubcommitteeToWhichItBelongs", true},
                {"ar_pros_SubcommitteesAppointmentDate", true},
                {"ar_pros_SubcommitteesTypeOfAssemblyIfApplicable", true},
                {"ar_pros_SubcommitteesPeriodForWhichTheyWereElected", true},
                {"ar_pros_SubcommitteesGender", true},
                {"ar_pros_SubcommitteesAdditionalInformation", true},
                {"ar_pros_AdministratorParticipateInCommitteesAudit", true},
                {"ar_pros_AdministratorParticipateInCommitteesCorporatePractices", true},
                {"ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation", true},
                {"ar_pros_AdministratorParticipateInCommitteesOthers", true}
            };


        public override void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;
            Idioma = estructuraReporte.Lenguaje;


            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);

            //Titulo rol
            imprimirTituloRol(docBuilder, rolAExportar);           

            HechoReporteDTO hecho = null;

            ConceptoHiper.Add("");

            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {
                if (ConceptosHipercubos.ContainsKey(concepto.IdConcepto))
                {
                    continue;
                }
                if (concepto.Hechos != null)
                {
                    foreach (String llave in concepto.Hechos.Keys)
                    {
                        hecho = concepto.Hechos[llave];
                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                        {
                            if (!ConceptoHiper.Contains(concepto.IdConcepto))
                            {                           
                            //Escribe titulo campo
                            escribirConceptoEnTablaNota(docBuilder, estructuraReporte, hecho, concepto);
                            }
                        }
                    }
                }
                
                string conceptoAdosColumnas = ObtenertipoDato(concepto, TIPO_DATO_SI_NO);

                if (concepto.TipoDato != null && 
                    (concepto.TipoDato == conceptoAdosColumnas || concepto.Numerico))
                {
                    EscribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
                }

                string conceptoPDF = ObtenertipoDato(concepto, TIPO_DATOS_BASE64_FILE);

                if (concepto.TipoDato == conceptoPDF)
                {
                    if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                    {
                        EscribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
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
                else if (concepto.IdConcepto.Equals("ar_pros_CompanyAdministratorsAbstract"))
                {
                    ImprimeTitulo(docBuilder, concepto);
                    PintaAdministradores(docBuilder, instancia, estructuraReporte.Hipercubos["ar_pros_CompanyAdministratorsTable"]);
                }
                else if (concepto.IdConcepto.Equals("ar_pros_CompanyShareholdersAbstract"))
                {
                    ImprimeTitulo(docBuilder, concepto);
                    PintaAccionistas(docBuilder, instancia, estructuraReporte.Hipercubos["ar_pros_CompanyShareholdersTable"]);
                }
                else if (concepto.IdConcepto.Equals("ar_pros_SubcommitteesSynopsis"))
                {
                    ImprimeTitulo(docBuilder, concepto);
                    PintaListaSubcomites(docBuilder, instancia, estructuraReporte.Hipercubos["ar_pros_SubcommitteesTable"]);
                }

            }

            Evaluador.Clear();
            ConceptoHiper.Clear();

        }

        private void PintaTablaDimensionExplicita(DocumentBuilder docBuilder,String valor, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
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
                                countType = matrizPlantillaContexto.ContainsKey(idPlantillaContexto) ? matrizPlantillaContexto[idPlantillaContexto].Length : 0;
                                break;
                            }
                            Boolean dimensiones=false;
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


                                if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                                {
                                    
                                    if (hecho.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK))
                                    {
                                        WordUtil.InsertHtml(docBuilder, hecho.IdConcepto + ":" + hecho.Id, PARRAFO_HTML_NOTAS_Texblock + valorHecho + "</p>", false,true);
                                    }
                                    else
                                    {
                                        docBuilder.Writeln(valorHecho);
                                    }
                                    ConceptoHiper.Add(valorHecho);

                                }
                            }
                        }

                        docBuilder.EndRow();
                    }


                    establecerBordesGrisesTabla(tablaActual);
                    docBuilder.EndTable();
                 
                    docBuilder.Writeln();
                    Evaluador.Add(variable.Key);
                    break;
                }

            }



        }
        protected override void escribirConceptoEnTablaNota(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual, bool forzarHtml = false)
    {

        string cadena = ObtenertipoDato(conceptoActual, TIPO_DATO_STRING);
        string text_block = ObtenertipoDato(conceptoActual, TIPO_DATO_TEXT_BLOCK);
        if (conceptoActual.TipoDato == cadena || conceptoActual.TipoDato == text_block)
        {
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                if (conceptoActual.AtributosAdicionales != null)
                {
                    if (conceptoActual.AtributosAdicionales.Count == 1)
                    {
                        conceptosEnIndice(docBuilder, conceptoActual);
                    }
                    else
                    {
                        docBuilder.Write(conceptoActual.Valor);
                    }

                }
                else
                {
                    docBuilder.Write(conceptoActual.Valor);
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

    }

    


        /// <summary>
        /// Imprime una tarjeta de presentación de administrador.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los datos del miembro.</param>
        /// <param name="instancia">Documento de instancia.</param>
        private void PintaTarjetaAdministrador(DocumentBuilder docBuilder, IDictionary<string, HechoDto> tarjeta, DocumentoInstanciaXbrlDto instancia, String idItemMiembroTipoAdministrador)
        {
            docBuilder.StartTable();
            establecerBordesCeldaTabla(docBuilder);
            var conceptosNombre = new List<string>() { "ar_pros_AdministratorFirstName", "ar_pros_AdministratorSecondName", "ar_pros_AdministratorName" };
            var tituloNombre = ConcatenaElementosTarjeta(tarjeta, conceptosNombre, " ");
            establecerFuenteCeldaTitulo(docBuilder);
            SetCellColspan(docBuilder, tituloNombre, 12);
            docBuilder.EndRow();
            var conceptosPrimeraFila = new List<string>() {
                "ar_pros_AdministratorGender",
                "ar_pros_AdministratorDirectorshipType"
            };
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosPrimeraFila, instancia, 6, Idioma);

            var conceptosParticipacion = new List<string>() {
                "ar_pros_AdministratorParticipateInCommitteesAudit",
                "ar_pros_AdministratorParticipateInCommitteesCorporatePractices",
                "ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation",
                //"ar_pros_AdministratorParticipateInCommitteesOthers"
            };
            var tieneDatosParticipacion = false;
            foreach (var idConceptoParticipacion in conceptosParticipacion) {

                HechoDto hechoParticipacion;
                if (tarjeta.TryGetValue(idConceptoParticipacion, out hechoParticipacion))
                {
                    if (!String.IsNullOrWhiteSpace(hechoParticipacion.Valor))
                    {
                        tieneDatosParticipacion = true;
                        break;
                    }
                }
            }

            if (tieneDatosParticipacion)
            {
                var tituloParticipacion = ObtenEtiquetaConcepto("ar_pros_AdministratorParticipateInCommittees", instancia, Idioma);
                establecerFuenteCeldaTitulo(docBuilder);
                SetCellColspan(docBuilder, tituloParticipacion, 12);
                docBuilder.EndRow();
                //ImprimeConceptosTarjetaMismaFila(docBuilder, tarjeta, conceptosParticipacion, instancia, 4, Idioma);
                ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosParticipacion, instancia, 4, Idioma);
            }
            
            HechoDto hechoOtros;
            if (tarjeta.TryGetValue("ar_pros_AdministratorParticipateInCommitteesOthers", out hechoOtros) &&
                !String.IsNullOrWhiteSpace(hechoOtros.Valor))
            {
                var conceptosOtros = new List<string>() { "ar_pros_AdministratorParticipateInCommitteesOthers" };
                ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosOtros, instancia, 12, Idioma);
            }

            var tituloDesingacion = ObtenEtiquetaConcepto("ar_pros_AdministratorDesignationAbstract", instancia, Idioma);
            establecerFuenteCeldaTitulo(docBuilder);
            SetCellColspan(docBuilder, tituloDesingacion, 12);
            docBuilder.EndRow();
            if (idItemMiembroTipoAdministrador.Equals("ar_pros_RelevantDirectorsMember")
                || idItemMiembroTipoAdministrador.Equals("ar_pros_IndependentMember")
                || idItemMiembroTipoAdministrador.Equals("ar_pros_NotIndependentMember"))
            {
	            var conceptosDesignacion = new List<string>() {
	                "ar_pros_AdministratorDesignationDate",
	                "ar_pros_AdministratorAssemblyType",
                    "ar_pros_AdministratorAssemblyTypePros"  };
	            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosDesignacion, instancia, 4, Idioma);
            }
            else
            {
                var conceptosDesignacion = new List<string>() { "ar_pros_AdministratorDesignationDate" };
                ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosDesignacion, instancia, 12, Idioma);
            }
            HechoDto hecho;
            if (!tarjeta.TryGetValue("ar_pros_AdministratorShareholding", out hecho) || String.IsNullOrEmpty(hecho.Valor))
            {
                var conceptosSegundaFila = new List<string>() {
	                "ar_pros_AdministratorPeriodForWhichTheyWereElected",
	                "ar_pros_AdministratorPosition",
	                "ar_pros_AdministratorTimeWorkedInTheIssuer"};
                ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosSegundaFila, instancia, 4, Idioma);
            }
            else
            {
	            var conceptosSegundaFila = new List<string>() {
	                "ar_pros_AdministratorPeriodForWhichTheyWereElected",
	                "ar_pros_AdministratorPosition",
	                "ar_pros_AdministratorTimeWorkedInTheIssuer",
	                "ar_pros_AdministratorShareholding" };
	            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosSegundaFila, instancia, 3, Idioma);
            }
            var conceptosTerceraFila = new List<string>() {
                "ar_pros_AdministratorAdditionalInformation"};
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosTerceraFila, instancia, 12, Idioma);
            docBuilder.EndTable();
            docBuilder.Writeln();
        }
        /// <summary>
        /// Imprime las tarjetas de los administradores.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="hipercubo">Información del hipercubo.</param>
        private void PintaAdministradores(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hipercubo)
        {

            var matrizPlantillaContexto = hipercubo.Hechos;
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(matrizPlantillaContexto);

            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                var listaTajetas = diccionarioTarjetas[clavePlantilla];
                var primerHecho = listaTajetas.First().First().Value;
                var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, "ar_pros_TypeOfCompanyAdministratorsAxis", instancia);
                var itemMiembroTipoAdministrador = miembroExplicita.IdItemMiembro;
                var textoTituloMiembro = ObtenEtiquetaConcepto(itemMiembroTipoAdministrador, instancia, Idioma);
                ImprimeSubTitulo(docBuilder, textoTituloMiembro);
                foreach (var tarjeta in listaTajetas)
                {
                    PintaTarjetaAdministrador(docBuilder, tarjeta, instancia, itemMiembroTipoAdministrador);
                }
            }
        }


        /// <summary>
        /// Imprime una tarjeta de presentación de administrador.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los datos del miembro.</param>
        /// <param name="instancia">Documento de instancia.</param>
        private void PintaTarjetaAccionista(DocumentBuilder docBuilder, IDictionary<string, HechoDto> tarjeta, DocumentoInstanciaXbrlDto instancia)
        {
            docBuilder.StartTable();
            establecerBordesCeldaTabla(docBuilder);
            var conceptosNombre = new List<string>() { "ar_pros_ShareholderFirstName", "ar_pros_ShareholderSecondName", "ar_pros_ShareholderNameCorporateName" };
            var tituloNombre = ConcatenaElementosTarjeta(tarjeta, conceptosNombre, " ");
            establecerFuenteCeldaTitulo(docBuilder);
            SetCellColspan(docBuilder, tituloNombre, 2);
            docBuilder.EndRow();
            var conceptosPrimeraFila = new List<string>() { "ar_pros_ShareholderShareholding" };
            ImprimeConceptosTarjetaMismaFila(docBuilder, tarjeta, conceptosPrimeraFila, instancia, 0, Idioma);
            var conceptosSegundaFila = new List<string>() { "ar_pros_ShareholderAdditionalInformation" };
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosSegundaFila, instancia, 2, Idioma);

            docBuilder.EndTable();
            docBuilder.Writeln();
        }

        /// <summary>
        /// Imprime las tarjetas de los accionistas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="hipercubo">Información del hipercubo.</param>
        private void PintaAccionistas(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hipercubo)
        {

            var matrizPlantillaContexto = hipercubo.Hechos;
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(matrizPlantillaContexto);

            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                var listaTajetas = diccionarioTarjetas[clavePlantilla];
                var primerHecho = listaTajetas.First().First().Value;
                var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, "ar_pros_TypeOfCompanyShareholdersAxis", instancia);
                var textoTituloMiembro = ObtenEtiquetaConcepto(miembroExplicita.IdItemMiembro, instancia, Idioma);
                ImprimeSubTitulo(docBuilder, textoTituloMiembro);
                foreach (var tarjeta in listaTajetas)
                {
                    PintaTarjetaAccionista(docBuilder, tarjeta, instancia);
                }
            }
        }

        /// <summary>
        /// Imprime una tarjeta de presentación de administrador.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los datos del miembro.</param>
        /// <param name="instancia">Documento de instancia.</param>
        private void PintaTarjetaSubcomite(DocumentBuilder docBuilder, IDictionary<string, HechoDto> tarjeta, DocumentoInstanciaXbrlDto instancia)
        {
            docBuilder.StartTable();
            establecerBordesCeldaTabla(docBuilder);
            var conceptosNombre = new List<string>() { "ar_pros_SubcommitteesNames", "ar_pros_SubcommitteesLastName", "ar_pros_SubcommitteesMothersLastName" };
            var tituloNombre = ConcatenaElementosTarjeta(tarjeta, conceptosNombre, " ");
            establecerFuenteCeldaTitulo(docBuilder);
            SetCellColspan(docBuilder, tituloNombre, 2);
            docBuilder.EndRow();
            var conceptosPrimeraFila = new List<string>() { "ar_pros_SubcommitteesTypeOfSubcommitteeToWhichItBelongs" };
            ImprimeConceptosTarjetaMismaFila(docBuilder, tarjeta, conceptosPrimeraFila, instancia, 0, Idioma);

            var designacion = ObtenEtiquetaConcepto("ar_pros_SubcommitteesDesignationSynopsis", instancia, Idioma);
            establecerFuenteCeldaTitulo(docBuilder);
            SetCellColspan(docBuilder, designacion, 2);
            docBuilder.EndRow();

            var conceptosSegundaFila = new List<string>() { "ar_pros_SubcommitteesAppointmentDate", "ar_pros_SubcommitteesTypeOfAssemblyIfApplicable" };
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosSegundaFila, instancia, 0, Idioma);

            var conceptosTerceraFila = new List<string>() { "ar_pros_SubcommitteesPeriodForWhichTheyWereElected", "ar_pros_SubcommitteesGender" };
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosTerceraFila, instancia, 0, Idioma);

            var conceptosCuartaFila = new List<string>() { "ar_pros_SubcommitteesAdditionalInformation" };
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosCuartaFila, instancia, 2, Idioma);

            docBuilder.EndTable();
            docBuilder.Writeln();
        }

        /// <summary>
        /// Imprime las tarjetas de los accionistas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="hipercubo">Información del hipercubo.</param>
        private void PintaListaSubcomites(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hipercubo)
        {

            var matrizPlantillaContexto = hipercubo.Hechos;
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(matrizPlantillaContexto);

            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                var listaTajetas = diccionarioTarjetas[clavePlantilla];
                var primerHecho = listaTajetas.First().First().Value;
                var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, "ar_pros_SubcommitteesTypeOfSubcommitteesAxis", instancia);
                var textoTituloMiembro = ObtenEtiquetaConcepto(miembroExplicita.IdItemMiembro, instancia, Idioma);
                ImprimeSubTitulo(docBuilder, textoTituloMiembro);
                foreach (var tarjeta in listaTajetas)
                {
                    PintaTarjetaSubcomite(docBuilder, tarjeta, instancia);
                }
            }
        }
    }
}
