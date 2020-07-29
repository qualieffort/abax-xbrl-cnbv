using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Drawing;
using System.Linq;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    public class ExportadorRolAnnexT301100 : ExportadorRolDocumentoBase
    {
        private const String ID_ROL = "301100";

        private OrderedDictionary ConceptosAbstractosPadres = new OrderedDictionary();

        public ExportadorRolAnnexT301100()
        {
            ConceptosAbstractosPadres.Add("annext_DisclosureOfGeneralInformationAboutTheIssueAbstract", new List<String>() {
                "annext_CorporateNameOfTheIssuer",
                "annext_Ticker",
                "annext_ContractNumberOfTheTrust",
                "annext_Series",
                "annext_DenominationOfTheIssue",
                "annext_ReportedYear",
                "annext_ReportedMonth",
                "annext_GuarantorOrAval",
                "annext_GuarantorAndGuaranteeName",
                "annext_TypeOfGuarantee",
                "annext_MasterAdministrator",
                "annext_DenominationoftheMasterAdministrator",
                "annext_AdministratorOrOperator",
                "annext_CommonRepresentative",
                "annext_Overcollateralization",
                "annext_LevelOfRoundingUsed",
                "annext_ResponsibilityLetterPdf"
            });

            ConceptosAbstractosPadres.Add("annext_TrustAssetsAbstract", new List<String>() {
                "annext_OutstandingBalanceOfCurrentAssetsAtEndOfPeriod",
                "annext_OutstandingBalanceOfOverdueAtEndOfPeriodAssets",
                "annext_CashInTheTrustAtTheEndOfThePeriod",
                "annext_OtherAssetsHeldAtTheTrust"
            });

            ConceptosAbstractosPadres.Add("annext_TrustLiabilitiesAbstract", new List<String>() {
                "annext_OutstandingBalanceOfTheIssueAtEndOfPeriod",

                "annext_DebitsForExpensesOfTheTrust",
                "annext_DebtsPerExerciseOfFinancialGuaranteeIfApplicable",
                "annext_TotalAmortizationOfPrincipalOwedToTheHoldersOfTrustNotes",
                "annext_TotalInterestOwedToHoldersOfTrustNotes",
                "annext_OtherDebts"
            });

            ConceptosAbstractosPadres.Add("annext_CapitalTrustAbstract", new List<String>() {
                "annext_OvercollateralizationAmountAtEndOfPeriod",
                "annext_OvercollateralizationEexpressedInPercentage"
            });

            ConceptosAbstractosPadres.Add("annext_IncomeTrustAbstract", new List<String>() {
                "annext_ExchangeRateUsedToDetermineTheValueOfThePortfolioOfAssetsDenominatedInCurrenciesOtherThanMexicanCurrency",
                "annext_ScheduledAmortizationCharged",
                "annext_UnscheduledPrincipalPayments",
                "annext_IncomeFromSettlementsAndAwards",
                "annext_OrdinaryInterestReceived",
                "annext_DefaultInterestCharged",
                "annext_IncomeFromCollectedInsurance",
                "annext_HedgingInstrumentsCollected",
                "annext_FeesCharged",
                "annext_ExerciseOfTheFinancialGuarantee",
                "annext_NetIncomeFromInvestments",
                "annext_OtherIncome",
                "annext_TotalIncomeToTheTrust"
            });

            ConceptosAbstractosPadres.Add("annext_ChargesAndPaymentTrustAbstract", new List<String>() {
                "annext_ExchangeRateForThePaymentOfStockCertificates",
                "annext_LifeInsurancePaid",
                "annext_DamageInsurancePaid",
                "annext_HedgingInstrumentsPremiumsPaid",
                "annext_ManagementFeesPaidToTheMasterServicer",
                "annext_FeesForAdministrationToPrimaryServers",
                "annext_CollectionChargesPaidWithFundsFromTheTrust",
                "annext_TrusteeFees",
                "annext_FeesCommonRepresentative",
                "annext_RegulatoryAgencies",
                "annext_RatingAgenciesAndExternalAuditors",
                "annext_AwardCosts",
                "annext_PaymentGuaranteeToHolders",
                "annext_CreditInsuranceAndOrGuaranteeOfPaymentForBreachOfTheAssets",
                "annext_AmountOfInterestPaidToHoldersOfTrustNotes",

                "annext_AmountPaidForAmortizationToHoldersOfTrustNotes",

                "annext_AmountPaidToHoldersOfCertificatesOrBondsOrSubordinatedResidual",
                "annext_IncreaseOrDecreaseInReserves",
                "annext_OtherTrustExpensesDuringThePeriod",
                "annext_TotalChargesAndPayments"
            });

            ConceptosAbstractosPadres.Add("annext_SituationOfTrustPortfolioAssetsAbstract", new List<String>() {
                
                "annext_NumberOfAssetsAtEndOfPeriod",
                "annext_TheWeightedAverageInterestRateOfThePortfolio",
                "annext_TheWeightedAverageInterestRateOfThePortfolioDisclosure",
                "annext_NPLRatio",
                "annext_NPLRatioDisclosure",
                "annext_RateOfPrepayment",
                "annext_UnscheduledPaymentAmount",
                "annext_RateOfPrepaymentDisclosure",

                "annext_NumberOfPrepaidActive",
                "annext_NumberOfAssetsAtEndOfPeriodExpired",
                "annext_NumberOfAssetsOutstandingAtEndOfPeriod",
                "annext_NumberOfRecoveredAssetsInThePeriod",

                "annext_InLieuOfPayment",
                "annext_AwardOrLiquidation",
                "annext_SubstitutionOfDebtor",
                "annext_OtherAssetsRecovered",

                "annext_UnpaidBalanceOfTheAssetsGroupedInArrearsAtTheEndOfThePeriod",
                "annext_UnpaidBalanceOfTheAssetsGroupedInArrearsAtTheEndOfThePeriodAbstract",
                "annext_CurrentMonth",
                "annext_LastMonth",

                "annext_NumberOfAssetsGroupedInArrearsAtTheEndOfThePeriod",
                "annext_NumberOfAssetsGroupedInArrearsAtTheEndOfThePeriodAbstract",
                "annext_NumberOfAssetsCurrentMonth",
                "annext_NumberOfAssetsLastMonth",
            });

            ConceptosAbstractosPadres.Add("annext_OtherRelevantInformationAbstract", new List<String>() {
                "annext_GuaranteesOnGoodsRightsOrValuesTrust",
                "annext_ContractsAndAgreements",
                "annext_JudicialAdministrativeOrArbitrationProceedings",
                "annext_Directors"
            });

            ConceptosAbstractosPadres.Add("annext_AdditionalInformationIfAnyAbstract", new List<String>() {
                "annext_AdditionalInformation"
            });
        }

        public override void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;

            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);

            foreach (String IdConceptoAbstracto in ConceptosAbstractosPadres.Keys)
            {
                docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
                imprimirTituloConceptoAbstracto(docBuilder, estructuraReporte, IdConceptoAbstracto);

                var idsConceptosHijos = (List<String>)ConceptosAbstractosPadres[IdConceptoAbstracto];

                switch (IdConceptoAbstracto)
                {
                    case "annext_DisclosureOfGeneralInformationAboutTheIssueAbstract":
                        escribirInformacionGeneral(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                    case "annext_TrustAssetsAbstract":
                        escribirActivosFideicomiso(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                    case "annext_TrustLiabilitiesAbstract":
                        escribirPasivosFideicomiso(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                    case "annext_CapitalTrustAbstract":
                        escribirCapitalFideicomiso(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                    case "annext_IncomeTrustAbstract":
                        escribirIngresosFideicomiso(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                    case "annext_ChargesAndPaymentTrustAbstract":
                        escribirCargosPagosFideicomiso(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                    case "annext_SituationOfTrustPortfolioAssetsAbstract":
                        escribirSituacionCarteraFideicomitidos(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                    case "annext_OtherRelevantInformationAbstract":
                        escribirInformacionRelevante(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                    case "annext_AdditionalInformationIfAnyAbstract":
                        escribirInformacionAdicional(docBuilder, estructuraReporte, instancia, idsConceptosHijos);
                        break;
                }
            }
        }

        private void escribirInformacionGeneral(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 0, IdsConceptos.Count, 9);
        }

        private void escribirActivosFideicomiso(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 0, IdsConceptos.Count, 9, ParagraphAlignment.Right);
        }
        /// <summary>
        /// Intenta obtener la definición del hipercubo, en cose de no conseguirlo manda un error detallado al log.
        /// </summary>
        /// <param name="claveHipercubo">Clave del hipercubo requerido.</param>
        /// <param name="estructuraReporte">Estructura del reporte donde se obtendra la definición del hipercubo.</param>
        /// <returns></returns>
        private HipercuboReporteDTO ObtenHipercuboReporte(String claveHipercubo, ReporteXBRLDTO estructuraReporte)
        {
            HipercuboReporteDTO hiperCuboAnexoT;
            if (!estructuraReporte.Hipercubos.TryGetValue(claveHipercubo, out hiperCuboAnexoT))
            {
                var detalleError = new Dictionary<string, object>()
                {
                    { "Error", "No existe la definición de \"" + claveHipercubo + "\" en la configuración actual."},
                    { "Hipercubos", estructuraReporte.Hipercubos.Keys}
                };
                LogUtil.Error(detalleError);
                throw new KeyNotFoundException(detalleError["Error"].ToString());
            }
            return hiperCuboAnexoT;
        }

        private void escribirPasivosFideicomiso(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 0, 1, 9, ParagraphAlignment.Right);
            escribirTablaSerie(docBuilder, estructuraReporte, instancia, ObtenHipercuboReporte("annext_OutstandingBalanceOfTheIssueAtEndOfPeriodTable", estructuraReporte));
            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 1, IdsConceptos.Count, 9, ParagraphAlignment.Right);
        }

        private void escribirCapitalFideicomiso(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 0, IdsConceptos.Count, 9, ParagraphAlignment.Right);
        }

        private void escribirIngresosFideicomiso(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 0, IdsConceptos.Count, 9, ParagraphAlignment.Right);
        }

        private void escribirCargosPagosFideicomiso(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 0, 15, 9, ParagraphAlignment.Right);

            escribirTablaSerie(docBuilder, estructuraReporte, instancia, ObtenHipercuboReporte("annext_AmountOfInterestPaidToHoldersOfTrustNotesTable", estructuraReporte));

            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 15, 16, 9, ParagraphAlignment.Right);

            escribirTablaSerie(docBuilder, estructuraReporte, instancia, ObtenHipercuboReporte("annext_AmountPaidForAmortizationToHoldersOfTrustNotesTable", estructuraReporte));

            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 16, IdsConceptos.Count, 9, ParagraphAlignment.Right);
        }

        private void escribirSituacionCarteraFideicomitidos(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);

            
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Legal;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;

            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 0, 2, 9, ParagraphAlignment.Right);

            escribirNotas(docBuilder, estructuraReporte, IdsConceptos, 2, 3);

            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 3, 4, 9, ParagraphAlignment.Right);

            escribirNotas(docBuilder, estructuraReporte, IdsConceptos, 4, 5);

            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 5, 7, 9, ParagraphAlignment.Right);

            escribirNotas(docBuilder, estructuraReporte, IdsConceptos, 7, 8);

            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 8, 12, 9, ParagraphAlignment.Right);

            escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos, 12, 16, 18, ParagraphAlignment.Right);


            escribirDosColumnas(docBuilder, estructuraReporte,instancia, IdsConceptos, 16, 17,9, ParagraphAlignment.Right);
            docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Landscape;
            escribirTablaIntervaloTiempo(docBuilder, estructuraReporte, instancia, IdsConceptos, 17, 20);

            escribirNotas(docBuilder, estructuraReporte, IdsConceptos, 20, 21);

            escribirTablaIntervaloTiempo(docBuilder, estructuraReporte, instancia, IdsConceptos, 21, IdsConceptos.Count);
        }

        private void escribirInformacionRelevante(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;

            escribirNotas(docBuilder, estructuraReporte, IdsConceptos, 0, IdsConceptos.Count);
        }

        private void escribirInformacionAdicional(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos)
        {
            escribirNotas(docBuilder, estructuraReporte, IdsConceptos, 0, IdsConceptos.Count);
        }

        private void escribirDosColumnas(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos, int inicio, int final, double tabulacionConcepto = 0, ParagraphAlignment alineacionValor = ParagraphAlignment.Left)
        {
            if (inicio < final & final <= IdsConceptos.Count)
            {
                Table tablaActual = docBuilder.StartTable();
                docBuilder.ParagraphFormat.SpaceAfter = 5;
                docBuilder.ParagraphFormat.SpaceBefore = 5;

                for (int i = inicio; i < final; i++)
                {
                    escribirDosColumnas(docBuilder, estructuraReporte, instancia, IdsConceptos[i], tabulacionConcepto, alineacionValor);
                }

                tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
                tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
                tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
                docBuilder.EndTable();
                //docBuilder.InsertParagraph();
            }
            else
            {
                throw new IndexOutOfRangeException("El concepto no existe o está fuera del rango establecido.");
            }
        }

        private void escribirNotas(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, List<String> IdsConceptos, int inicio, int final)
        {
            if (inicio < final & final <= IdsConceptos.Count)
            {
                for (int i = inicio; i < final; i++)
                {
                    escribirNotaEnTabla(docBuilder, estructuraReporte, IdsConceptos[i]);
                }
            }
            else
            {
                throw new IndexOutOfRangeException("El concepto no existe o está fuera del rango establecido.");
            }
        }

        private void imprimirTituloConceptoAbstracto(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, String idConcepto)
        {
            var conceptoDto = BuscarPorIdConcepto(estructuraReporte, idConcepto);

            if (conceptoDto != null)
            {
                docBuilder.Font.Name = TipoLetraTituloRol;
                docBuilder.Font.Bold = TituloRolNegrita;
                docBuilder.Font.Size = TamanioLetraTituloRol;
                docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading1;
                docBuilder.ParagraphFormat.LeftIndent = 0;
                docBuilder.Font.Color = Color.Black;
                docBuilder.StartBookmark(conceptoDto.IdConcepto);
                docBuilder.InsertHyperlink(conceptoDto.Valor, "index", true);
                //docBuilder.Write(rolAExportar.Descripcion);
                docBuilder.EndBookmark(conceptoDto.IdConcepto);
                docBuilder.InsertParagraph();
                docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
                //docBuilder.Writeln();
            }
        }

        private void escribirDosColumnas(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, String idConcepto, double tabulacionConcepto, ParagraphAlignment alineacionValor)
        {
            var conceptoDto = BuscarPorIdConcepto(estructuraReporte, idConcepto);

            if (conceptoDto != null)
            {
                docBuilder.InsertCell();
                docBuilder.Font.Name = TipoLetraTituloConcepto;
                docBuilder.Font.Bold = TituloConceptoNegrita;
                docBuilder.Font.Size = 9;
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                docBuilder.ParagraphFormat.LeftIndent = tabulacionConcepto;
                docBuilder.Write(conceptoDto.Valor);

                docBuilder.InsertCell();
                docBuilder.Font.Name = TipoLetraTextos;
                docBuilder.Font.Bold = false;
                docBuilder.Font.Size = TamanioLetraTextos;
                docBuilder.ParagraphFormat.LeftIndent = 0;
                docBuilder.ParagraphFormat.Alignment = alineacionValor;
                docBuilder.CellFormat.VerticalAlignment = CellVerticalAlignment.Center;

                if (conceptoDto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_ENTERO_NO_NEGATIVO) )
                {
                    var valorHecho = obtenerValorNoNumerico(instancia, idConcepto);
                    var valorFormateadoEntero = ReporteXBRLUtil.formatoDecimal(Convert.ToDecimal(valorHecho), ReporteXBRLUtil.FORMATO_CANTIDADES_ENTERAS);
                    docBuilder.Write(!String.IsNullOrEmpty(valorFormateadoEntero) ? valorFormateadoEntero : String.Empty);
                }
                else if(conceptoDto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_DECIMAL))
                {
                    var valorHecho = obtenerValorNoNumerico(instancia, idConcepto);
                    var valorFormateadoDecimal = ReporteXBRLUtil.formatoDecimal(Convert.ToDecimal(valorHecho), ReporteXBRLUtil.FORMATO_CANTIDADES_DECIMALES);
                    docBuilder.Write(!String.IsNullOrEmpty(valorFormateadoDecimal) ? valorFormateadoDecimal : String.Empty);
                }
                else
                {
                escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[ID_ROL], idConcepto);
                }

                docBuilder.EndRow();
            }
        }

        private void escribirTablaSerie(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hipercubo)
        {
            docBuilder.Font.Size = TamanioLetraTituloTabla;
            docBuilder.Writeln();
            Table tablaDesglose = docBuilder.StartTable();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;

            docBuilder.InsertCell();
            
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Font.Name = TipoLetraTituloConcepto;
            docBuilder.Font.Bold = TituloConceptoNegrita;
            docBuilder.Font.Size = TamanioLetraTituloTabla;
            docBuilder.Font.Color = Color.White;

            docBuilder.Write((String)estructuraReporte.ParametrosReporte["annext_SerieTypedAxis_HEADER"]);

            for (var indexTitulo = 0; indexTitulo < hipercubo.Titulos.Count; indexTitulo++)
            {
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaTitulos);
                var titulo = hipercubo.Titulos[indexTitulo];
                docBuilder.InsertCell();
                docBuilder.Write(titulo);
            }

            docBuilder.EndRow();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
            docBuilder.Font.Color = Color.Black;

            foreach (var idConcepto in hipercubo.Hechos.Keys)
            {
                var matrizPlantillaContexto = hipercubo.Hechos[idConcepto];
                docBuilder.InsertCell();
                var nombreConcepto = ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT, idConcepto, instancia);
                docBuilder.Font.Name = TipoLetraTituloConcepto;
                docBuilder.Font.Bold = false;
                docBuilder.Font.Size = TamanioLetraContenidoTabla;
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                docBuilder.Write(nombreConcepto);
                foreach (var idPlantillaContexto in matrizPlantillaContexto.Keys)
                {
                    var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                    for (var indexHecho = 0; indexHecho < listaHechos.Length; indexHecho++)
                    {
                        var hecho = listaHechos[indexHecho];
                        var valorHecho = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                        docBuilder.InsertCell();
                        docBuilder.Font.Name = TipoLetraTextos;
                        docBuilder.Font.Bold = false;
                        docBuilder.Font.Size = TamanioLetraContenidoTabla;
                        docBuilder.ParagraphFormat.LeftIndent = 0;
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
                        docBuilder.CellFormat.VerticalAlignment = CellVerticalAlignment.Center;
                        docBuilder.Write(valorHecho);
                    }
                }
                docBuilder.EndRow();
            }
            docBuilder.EndTable();
            docBuilder.Writeln();
        }

        private void escribirTablaIntervaloTiempo(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, DocumentoInstanciaXbrlDto instancia, List<String> IdsConceptos, int inicio, int final)
        {
            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);

            IList<string> ConceptosAbstractosPermitidos = new List<string>()
            {
                IdsConceptos[inicio]
            };

            List<ConceptoReporteDTO> conceptos = new List<ConceptoReporteDTO>();

            if (inicio < final & final <= IdsConceptos.Count)
            {
                for (int i = inicio; i < final; i++)
                {
                    conceptos.Add(BuscarPorIdConcepto(estructuraReporte, IdsConceptos[i]));
                }
            }

            docBuilder.Writeln();
            Table tablaActual = docBuilder.StartTable();
            ConceptoReporteDTO primerConcepto = null;
            foreach (ConceptoReporteDTO concepto in conceptos)
            {
                if (!concepto.Abstracto)
                {
                    primerConcepto = concepto;
                    break;
                }
            }
            docBuilder.Font.Color = Color.White;
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloTabla;

            //Titlo de dimension

            docBuilder.InsertCell();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
            int iCol = 0;
            foreach (String columna in primerConcepto.Hechos.Keys)
            {
                if (!columna.Equals("periodo_actual"))
                {
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                    docBuilder.CellFormat.WrapText = false;
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    if (iCol == 0)
                    {
                        String descPeriodo = (String)estructuraReporte.ParametrosReporte["annext_TimeIntervalAxis_HEADER"];
                        docBuilder.Write(descPeriodo);
                        docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
                    }
                    else
                    {
                        docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
                    }
                    iCol++;
                }
            }

            docBuilder.EndRow();

            docBuilder.InsertCell();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
            foreach (String columna in primerConcepto.Hechos.Keys)
            {
                if (!columna.Equals("periodo_actual"))
                {
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                    docBuilder.CellFormat.WrapText = false;
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    String descPeriodo = (String)estructuraReporte.ParametrosReporte[columna + "_HEADER"];
                    docBuilder.Write(descPeriodo);
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
                }
            }
            docBuilder.EndRow();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
            foreach (ConceptoReporteDTO concepto in conceptos)
            {
                if (concepto.Abstracto && !ConceptosAbstractosPermitidos.Contains(concepto.IdConcepto))
                {
                    continue;
                }
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
                    foreach (String contexto in concepto.Hechos.Keys)
                    {
                        if (!contexto.Equals("periodo_actual"))
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
                            escribirValorHecho(docBuilder, estructuraReporte, concepto.Hechos[contexto], concepto);
                        }
                    }
                }
                docBuilder.RowFormat.AllowBreakAcrossPages = true;
                docBuilder.RowFormat.HeadingFormat = false;
                docBuilder.EndRow();
            }

            tablaActual.SetBorders(LineStyle.Single, 1, ReportConstants.DEFAULT_BORDER_GREY_COLOR);
            docBuilder.EndTable();
            docBuilder.Writeln();
        }

        private void escribirNotaEnTabla(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, String idConcepto)
        {
            var conceptoDto = ((List<ConceptoReporteDTO>)estructuraReporte.Roles[ID_ROL]).Find(c => c.IdConcepto == idConcepto);
            HechoReporteDTO hecho = null;

            if (conceptoDto != null && conceptoDto.Hechos != null)
            {
                foreach (String llave in conceptoDto.Hechos.Keys)
                {
                    hecho = conceptoDto.Hechos[llave];
                    if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                    {
                        establecerFuenteTituloCampo(docBuilder);

                        docBuilder.Font.Size = 9;
                        docBuilder.Font.Color = Color.Black;
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        docBuilder.ParagraphFormat.LeftIndent = 9;
                        docBuilder.Write(conceptoDto.Valor);

                        Table tablaActual = docBuilder.StartTable();
                        docBuilder.InsertCell();
                        docBuilder.Font.Size = 1;
                        docBuilder.Font.Spacing = 1;
                        tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
                        docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
                        docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
                        docBuilder.CellFormat.Borders.Top.LineWidth = 2;
                        docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                        docBuilder.EndRow();
                        docBuilder.EndTable();

                        establecerFuenteValorCampo(docBuilder);
                        docBuilder.Font.Color = Color.Black;
                        docBuilder.InsertParagraph();
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        docBuilder.ParagraphFormat.LeftIndent = 0;
                        escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoDto);

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

                        //docBuilder.Writeln();
                        //docBuilder.Writeln();
                    }
                }
            }
        }

        public override void escribirEncabezado(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO estructuraReporte, bool imprimirFooter)
        {
            var ETIQUETA_DE = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_DE");
            var ETIQUETA_CLAVE_COTIZACION = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_CLAVE_COTIZACION");
            var ETIQUETA_FIDEICOMISO = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_FIDEICOMISO");
            var ETIQUETA_PERIODO = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_PERIODO");
            var ETIQUETA_RAZON_SOCIAL = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_RAZON_SOCIAL");
            var ETIQUETA_SERIE = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_SERIE");

            Section seccion = docBuilder.CurrentSection;
            seccion.PageSetup.DifferentFirstPageHeaderFooter = false;
            seccion.HeadersFooters.LinkToPrevious(false);
            seccion.HeadersFooters.Clear();
            docBuilder.MoveToHeaderFooter(HeaderFooterType.HeaderPrimary);

            Table tablaHead = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 2;
            docBuilder.ParagraphFormat.SpaceBefore = 3;
            docBuilder.CellFormat.ClearFormatting();

            ///Fila de clave cotizacion, fideicomiso y periodo
            docBuilder.InsertCell();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(33);
            docBuilder.Font.Color = Color.Gray;
            docBuilder.Font.Bold = false;
            docBuilder.Write(ETIQUETA_CLAVE_COTIZACION + ":       ");
            docBuilder.Font.Color = Color.Black;
            docBuilder.Write(estructuraReporte.ClaveCotizacion);

            docBuilder.InsertCell();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(33);
            docBuilder.Font.Color = Color.Gray;
            docBuilder.Font.Bold = false;
            docBuilder.Write(ETIQUETA_FIDEICOMISO + ":       ");
            docBuilder.Font.Color = Color.Black;
            docBuilder.Write(estructuraReporte.Fideicomiso);

            docBuilder.InsertCell();
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(33);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            docBuilder.Font.Color = Color.Gray;
            docBuilder.Write(ETIQUETA_PERIODO + ":     ");
            docBuilder.Font.Color = Color.Black;
            docBuilder.Write(DateReporteUtil.obtenerFechaPorFormatoLocalizado(estructuraReporte.FechaReporte, DateUtil.MMMMYYYYDateFormat, estructuraReporte.Lenguaje));
            docBuilder.EndRow();

            //Fila con la razón social y series
            docBuilder.InsertCell();
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(70);
            docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Write(!String.IsNullOrEmpty(estructuraReporte.RazonSocial) ? estructuraReporte.RazonSocial : String.Empty);

            docBuilder.InsertCell();
            docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;

            docBuilder.InsertCell();
            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(30);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            docBuilder.Font.Color = Color.Gray;
            docBuilder.Write(ETIQUETA_SERIE + ":     ");
            docBuilder.Font.Color = Color.Black;
            docBuilder.Write(estructuraReporte.Series);
            docBuilder.EndRow();

            tablaHead.PreferredWidth = PreferredWidth.Auto;
            tablaHead.Alignment = TableAlignment.Center;
            tablaHead.SetBorders(LineStyle.None, 0, Color.Black);
            tablaHead.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaHead.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
            docBuilder.EndTable();

            docBuilder.MoveToHeaderFooter(HeaderFooterType.FooterPrimary);

            docBuilder.InsertField("PAGE", "");
            docBuilder.Write(" " + ETIQUETA_DE + " ");
            docBuilder.InsertField("NUMPAGES", "");
            docBuilder.CurrentParagraph.ParagraphFormat.Alignment = ParagraphAlignment.Right;

            docBuilder.MoveToDocumentEnd();
        }

        protected virtual void establecerFuenteTituloCampo(DocumentBuilder docBuilder)
        {
            docBuilder.Font.Name = TipoLetraTituloConcepto;
            docBuilder.Font.Bold = TituloConceptoNegrita;
            docBuilder.Font.Size = TamanioLetraTituloConcepto;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
        }

        private ConceptoReporteDTO BuscarPorIdConcepto(ReporteXBRLDTO estructuraReporte, String idConcepto)
        {
            return ((List<ConceptoReporteDTO>) estructuraReporte.Roles[ID_ROL]).Find(c => c.IdConcepto == idConcepto);
        }
    }
}
