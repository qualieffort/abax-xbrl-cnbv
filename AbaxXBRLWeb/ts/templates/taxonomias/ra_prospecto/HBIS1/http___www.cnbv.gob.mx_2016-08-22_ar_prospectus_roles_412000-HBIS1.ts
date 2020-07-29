///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-HBIS1
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS1 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS1
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_Condicional_Emision_Al_Amparo_ar_pros_IssuanceUnderArt13OfTheCUELegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Al_Amparo_ar_pros_IssuanceUnderArt13OfTheCUELegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "SI" or squeeze(size(variable1)) > 0 )',
                        MensajeExito: 'El hecho {variable1} debe ser reportado en caso de que el concepto "Emisión al amparo del art. 13 bis de la CUE" sea "SI", en caso contrario no debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado en caso de que el concepto "Emisión al amparo del art. 13 bis de la CUE" sea "SI", en caso contrario no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Mencion_Oferta_Publica_ar_pros_TheMentionOfBeingPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mencion_Oferta_Publica_ar_pros_TheMentionOfBeingPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and variable3 == "INF") or (squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTrustee': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTrustee',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfTrustee",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NumberOfTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NumberOfTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfTrust",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TermAndExpirationDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TermAndExpirationDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TermAndExpirationDate",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_DataRelatedToTheIndenture': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_DataRelatedToTheIndenture',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DataRelatedToTheIndenture",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TrustEstateManager': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TrustEstateManager',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TrustEstateManager",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TrusteesInFirstPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TrusteesInFirstPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TrusteesInFirstPlace",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TrusteesInSecondPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TrusteesInSecondPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TrusteesInSecondPlace",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TrusteesInThirdPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TrusteesInThirdPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TrusteesInThirdPlace",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_AssetsRightsOrValuesUnderATrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_AssetsRightsOrValuesUnderATrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AssetsRightsOrValuesUnderATrust",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_OtherTrustees': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_OtherTrustees',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherTrustees",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_SummaryOfTheMostImportantCharacteristics': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_SummaryOfTheMostImportantCharacteristics',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SummaryOfTheMostImportantCharacteristics",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_BasisForDeterminingThePerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_BasisForDeterminingThePerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_BasisForDeterminingThePerformance",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_WhereAppropriateMinimumPerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_WhereAppropriateMinimumPerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_WhereAppropriateMinimumPerformance",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_FrequencyAndFormOfAmortizationOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_FrequencyAndFormOfAmortizationOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_FrequencyAndFormOfAmortizationOfSecurities",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_PeriodicityAndPaymentOfIncome': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_PeriodicityAndPaymentOfIncome',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PeriodicityAndPaymentOfIncome",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LocationAndPaymentOfIncomeAndAmortization': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LocationAndPaymentOfIncomeAndAmortization',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_LocationAndPaymentOfIncomeAndAmortization",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTheCommonRepresentative': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTheCommonRepresentative',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfTheCommonRepresentative",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_WhereAppropriateValuatotyOpinion': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_WhereAppropriateValuatotyOpinion',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_WhereAppropriateValuatotyOpinion",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_SerieDepositary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_SerieDepositary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SerieDepositary",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LegendArticle86OfTheLMV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LegendArticle86OfTheLMV',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_LegendArticle86OfTheLMV",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NumberOfRegister': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NumberOfRegister',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfRegister",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_ProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_ProspectusSupplementBrochure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ProspectusSupplementBrochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfTheSettlor",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Ticker",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_Nombre_Accionistras_Vendedores_ar_pros_NameOfTheSellingShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Nombre_Accionistras_Vendedores_ar_pros_NameOfTheSellingShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto o Folleto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto o Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfTheSellingShareholders",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Numero_Y_Carateristicas_De_Los_Titulos_Que_Se_Ofrecen_ar_pros_Series': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Numero_Y_Carateristicas_De_Los_Titulos_Que_Se_Ofrecen_ar_pros_Series',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Series",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_En_caso_de_emisiones_al_amparo_de_un_programa_ar_pros_InTheCaseOfEmissionsUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_En_caso_de_emisiones_al_amparo_de_un_programa_ar_pros_InTheCaseOfEmissionsUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InTheCaseOfEmissionsUnderAProgram",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Monto_total_programa_inscripcion_ar_pros_TotalAmountProgramRegistration': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Monto_total_programa_inscripcion_ar_pros_TotalAmountProgramRegistration',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "NO") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Series': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Series',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Series',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Class': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Class',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Class',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Type': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Type',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Type',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_NominalValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_NominalValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NominalValue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_NumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_NumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberOfValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_TickerOfTheOriginStockMarket': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_TickerOfTheOriginStockMarket',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TickerOfTheOriginStockMarket',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_TypeOfOperation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_TypeOfOperation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfOperation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Observations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Observations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Observations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Calificadora_ar_pros_Rating': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Calificadora_ar_pros_Rating',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Rating',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Calificadora_ar_pros_ReasonsForThisRating': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Calificadora_ar_pros_ReasonsForThisRating',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ReasonsForThisRating',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Calificadora_ar_pros_RatingMeaning': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Calificadora_ar_pros_RatingMeaning',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RatingMeaning',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueDateOfIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueNumberOfValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueTerm': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueTerm',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueTerm',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValuePlacementPrice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValuePlacementPrice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValuePlacementPrice',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueObservations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueObservations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueObservations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Tratándose_de_Valores_Adicionales_ar_pros_InTheCaseOfAdditionalValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Tratándose_de_Valores_Adicionales_ar_pros_InTheCaseOfAdditionalValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Programa_con_caracter_de_revolvente_ar_pros_RevolvingCharacterProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Programa_con_caracter_de_revolvente_ar_pros_RevolvingCharacterProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF" and variable5 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de reporte Programa, Suplemento o Folleto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de reporte Programa, Suplemento o Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_RevolvingCharacterProgram",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Programa_con_caracter_de_revolvente_ar_pros_InterestRateApplicableForTheFirstPeriod': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Programa_con_caracter_de_revolvente_ar_pros_InterestRateApplicableForTheFirstPeriod',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF" and variable5 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de reporte Programa, Suplemento o Folleto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de reporte Programa, Suplemento o Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InterestRateApplicableForTheFirstPeriod",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Programa_con_caracter_de_revolvente_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Programa_con_caracter_de_revolvente_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF" and variable5 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de reporte Programa, Suplemento o Folleto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de reporte Programa, Suplemento o Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_LifeOfTheProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_LifeOfTheProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_LifeOfTheProgram",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_EffectOfEmissionsUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_EffectOfEmissionsUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_EffectOfEmissionsUnderAProgram",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DateOfPublicationOfTenderNotice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DateOfPublicationOfTenderNotice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_PeriodOrDateOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_PeriodOrDateOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PeriodOrDateOfTheOffer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_ClosingDateBookOrAuction': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_ClosingDateBookOrAuction',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ClosingDateBookOrAuction",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DateOfRegisterInTheStockExchange': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DateOfRegisterInTheStockExchange',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DateOfRegisterInTheStockExchange",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_SettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_SettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SettlementDate",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_AmountOfPositionsPresented': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_AmountOfPositionsPresented',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AmountOfPositionsPresented",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NumberOfPositionsPresented': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NumberOfPositionsPresented',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfPositionsPresented",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_TotalDemandValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_TotalDemandValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalDemandValues",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NumberOfAssignedPositions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NumberOfAssignedPositions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfAssignedPositions",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_RateOrMinimumAndMaximumPrice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_RateOrMinimumAndMaximumPrice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_RateOrMinimumAndMaximumPrice",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_AssignedRateOrPrice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_AssignedRateOrPrice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AssignedRateOrPrice",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DescriptionOfHowThePlacementPriceIsDetermined',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_TotalAmountOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_TotalAmountOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalAmountOfSecurities",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_TotalNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_TotalNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalNumberOfValues",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_SerieNumberOfCorrespondingEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_SerieNumberOfCorrespondingEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF") and ((variable3 == "SI") or variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SerieNumberOfCorrespondingEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TheMentionOfBeingPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TheMentionOfBeingPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_LegendDocumentAvailableWithTheUnderwriter': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_LegendDocumentAvailableWithTheUnderwriter',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_LegendDocumentAvailableWithTheUnderwriter",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                //===========================================================================================================================
                // Existence Asertions
                //===========================================================================================================================
                'ExistenciaParticipantesOferta': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaParticipantesOferta',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Nombre participante" de "Participantes en la oferta" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Nombre participante" de "Participantes en la oferta" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ParticipantName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'ExistenciaPersonaResponsable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaPersonaResponsable',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Nombre" de la tabla "Personas responsables del informe" debe existir y ser reportado al menos una vez.',
                        MensajeError: 'El concepto "Nombre" de la tabla "Personas responsables del informe" debe existir y ser reportado al menos una vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ResponsiblePersonName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'ExistenciaNumeroCaracteristicasTitulos': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaNumeroCaracteristicasTitulos',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Serie" de la tabla "Número y características de los títulos que se ofrecen" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Serie" de la tabla "Número y características de los títulos que se ofrecen" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Series',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'ExistenciaValoresAdicionales': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaValoresAdicionales',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Fecha de emisión" de la tabla "Valores adicionales" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Fecha de emisión" de la tabla "Valores adicionales" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueDateOfIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'ExistenciaRelacionInversionista': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaRelacionInversionista',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Relación con inversionista" de la tabla "Relación con inversionistas" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Relación con inversionista" de la tabla "Relación con inversionistas" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InvestorName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'ExistenciaCalificacionValores': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaCalificacionValores',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Calificación" de la tabla "Calificación de valores" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Calificación" de la tabla "Calificación de valores" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Rating',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'Obligatorio_Condicional__ar_pros_OnlyEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional__ar_pros_OnlyEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_OnlyEmission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_PlacementProspectus",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional__ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional__ar_pros_ProspectusLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_ProspectusLegend",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_PlacementProspectus",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional_LeyendaSuplemento_ar_pros_SupplementLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_LeyendaSuplemento_ar_pros_SupplementLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Suplemento" el concepto "Leyenda sumplemento" es requerido, para otro tipo de reporte el concepto "Leyenda suplemento" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Suplemento" el concepto "Leyenda sumplemento" es requerido, para otro tipo de reporte el concepto "Leyenda suplemento" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_SupplementLegend",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_Supplement",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'obligatorio_condicional_mencionar_dependiendo_parcial_o_total_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'obligatorio_condicional_mencionar_dependiendo_parcial_o_total_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Fideicomisos" and squeeze(size(variable1)) > 0)  or (variable2 != "Fideicomisos")',
                        MensajeExito: 'El concepto "Mencionar dependencia parcial o total" existe y es reportado cuando el "Tipo de instrumento" es "Fideicomisos"',
                        MensajeError: 'El concepto "Mencionar dependencia parcial o total" debe existir y ser reportado cuando el "Tipo de instrumento" es "Fideicomisos"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_TypeOfInstrument",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx": {
    "Id": "ctx",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2014_12_31",
      "FechaInicio": "",
      "FechaFin": ""
    },
    "Entidad": {
      "Id": "#nombreEntidad",
      "EsquemaId": "#esquemaEntidad",
      "ContieneInformacionDimensional": false,
      "Segmento": null,
      "ValoresDimension": []
    },
    "ContieneInformacionDimensional": false,
    "Escenario": null,
    "ValoresDimension": []
  },
  "cxt_3": {
    "Id": "cxt_3",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2014_12_31",
      "FechaInicio": "",
      "FechaFin": ""
    },
    "Entidad": {
      "Id": "#nombreEntidad",
      "EsquemaId": "#esquemaEntidad",
      "ContieneInformacionDimensional": false,
      "Segmento": null,
      "ValoresDimension": []
    },
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:SecuritiesRatingAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:FitchMexicoSADeCVMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_SecuritiesRatingAxis",
        "IdItemMiembro": "ar_pros_FitchMexicoSADeCVMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "cxt_4": {
      "Id": "cxt_4",
      "Periodo": {
          "Tipo": 1,
          "FechaInstante": "#fecha_2014_12_31",
          "FechaInicio": "",
          "FechaFin": ""
      },
      "Entidad": {
          "Id": "#nombreEntidad",
          "EsquemaId": "#esquemaEntidad",
          "ContieneInformacionDimensional": false,
          "Segmento": null,
          "ValoresDimension": []
      },
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:SecuritiesRatingAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:HRRatingsDeMexicoSADeCVMember</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "ar_pros_SecuritiesRatingAxis",
              "IdItemMiembro": "ar_pros_HRRatingsDeMexicoSADeCVMember",
              "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
              "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:HRRatingsDeMexicoSADeCVMember",
              "ElementoMiembroTipificado": null
          }
      ]
  },
  "cxt6": {
      "Id": "cxt6",
      "Periodo": {
          "Tipo": 1,
          "FechaInstante": "#fecha_2014_12_31",
          "FechaInicio": "",
          "FechaFin": ""
      },
      "Entidad": {
          "Id": "#nombreEntidad",
          "EsquemaId": "#esquemaEntidad",
          "ContieneInformacionDimensional": false,
          "Segmento": null,
          "ValoresDimension": []
      },
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:SecuritiesRatingAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:MoodysDeMexicoSADeCVMember</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "ar_pros_SecuritiesRatingAxis",
              "IdItemMiembro": "ar_pros_MoodysDeMexicoSADeCVMember",
              "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
              "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MoodysDeMexicoSADeCVMember",
              "ElementoMiembroTipificado": null
          }
      ]
  },
  "cxt5": {
      "Id": "cxt5",
      "Periodo": {
          "Tipo": 1,
          "FechaInstante": "#fecha_2014_12_31",
          "FechaInicio": "",
          "FechaFin": ""
      },
      "Entidad": {
          "Id": "#nombreEntidad",
          "EsquemaId": "#esquemaEntidad",
          "ContieneInformacionDimensional": false,
          "Segmento": null,
          "ValoresDimension": []
      },
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:SecuritiesRatingAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:StandardAndPoorsSADeCVMember</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "ar_pros_SecuritiesRatingAxis",
              "IdItemMiembro": "ar_pros_StandardAndPoorsSADeCVMember",
              "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
              "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StandardAndPoorsSADeCVMember",
              "ElementoMiembroTipificado": null
          }
      ]
  },
  "cxt7": {
      "Id": "cxt7",
      "Periodo": {
          "Tipo": 1,
          "FechaInstante": "#fecha_2014_12_31",
          "FechaInicio": "",
          "FechaFin": ""
      },
      "Entidad": {
          "Id": "#nombreEntidad",
          "EsquemaId": "#esquemaEntidad",
          "ContieneInformacionDimensional": false,
          "Segmento": null,
          "ValoresDimension": []
      },
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:SecuritiesRatingAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:VerumCalificadoraDeValoresSAPIDeCVMember</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "ar_pros_SecuritiesRatingAxis",
              "IdItemMiembro": "ar_pros_VerumCalificadoraDeValoresSAPIDeCVMember",
              "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
              "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:VerumCalificadoraDeValoresSAPIDeCVMember",
              "ElementoMiembroTipificado": null
          }
      ]
  },
  "cxt8": {
      "Id": "cxt8",
      "Periodo": {
          "Tipo": 1,
          "FechaInstante": "#fecha_2014_12_31",
          "FechaInicio": "",
          "FechaFin": ""
      },
      "Entidad": {
          "Id": "#nombreEntidad",
          "EsquemaId": "#esquemaEntidad",
          "ContieneInformacionDimensional": false,
          "Segmento": null,
          "ValoresDimension": []
      },
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:SecuritiesRatingAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:AMBestAmericaLatinaSADeCVMember</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "ar_pros_SecuritiesRatingAxis",
              "IdItemMiembro": "ar_pros_AMBestAmericaLatinaSADeCVMember",
              "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
              "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AMBestAmericaLatinaSADeCVMember",
              "ElementoMiembroTipificado": null
          }
      ]
  },
  "cxt9": {
      "Id": "cxt9",
      "Periodo": {
          "Tipo": 1,
          "FechaInstante": "#fecha_2014_12_31",
          "FechaInicio": "",
          "FechaFin": ""
      },
      "Entidad": {
          "Id": "#nombreEntidad",
          "EsquemaId": "#esquemaEntidad",
          "ContieneInformacionDimensional": false,
          "Segmento": null,
          "ValoresDimension": []
      },
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:SecuritiesRatingAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:DBRSRatingsMexicoSAdeCVMember</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "ar_pros_SecuritiesRatingAxis",
              "IdItemMiembro": "ar_pros_DBRSRatingsMexicoSAdeCVMember",
              "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
              "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DBRSRatingsMexicoSAdeCVMember",
              "ElementoMiembroTipificado": null
          }
      ]
  }
};

            this.UnidadesPlantillaPorId = {
  "moneda": {
    "Id": "moneda",
    "Tipo": 1,
    "Medidas": [
      {
        "Nombre": "#medida_MXN",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "MedidasDenominador": [],
    "MedidasNumerador": []
  }
};
            
            this.HechosPlantillaPorId = {
                "ar_pros_TheMentionOfBeingPublicOffering_76ce53ce-3568-4f21-906f-ac4e03f8e51c": {
                    "Id": "ar_pros_TheMentionOfBeingPublicOffering_76ce53ce-3568-4f21-906f-ac4e03f8e51c",
                    "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TypeOfOffer_815f2826-319c-45bf-8573-f3d7d5e6a22e": {
                    "Id": "ar_pros_TypeOfOffer_815f2826-319c-45bf-8573-f3d7d5e6a22e",
                    "IdConcepto": "ar_pros_TypeOfOffer",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTrustee_5fa25865-0e21-43c2-9fe8-4c53bdf9b188": {
                    "Id": "ar_pros_NameOfTrustee_5fa25865-0e21-43c2-9fe8-4c53bdf9b188",
                    "IdConcepto": "ar_pros_NameOfTrustee",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTheSettlor_7729d03c-b31f-48bd-a442-cdf2a2a74030": {
                    "Id": "ar_pros_NameOfTheSettlor_7729d03c-b31f-48bd-a442-cdf2a2a74030",
                    "IdConcepto": "ar_pros_NameOfTheSettlor",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SerieDepositary_4c7d80ee-855c-481b-a611-07b2c2f7abce": {
                    "Id": "ar_pros_SerieDepositary_4c7d80ee-855c-481b-a611-07b2c2f7abce",
                    "IdConcepto": "ar_pros_SerieDepositary",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Ticker_7874bf03-73d9-44d7-9225-833f5cf79909": {
                    "Id": "ar_pros_Ticker_7874bf03-73d9-44d7-9225-833f5cf79909",
                    "IdConcepto": "ar_pros_Ticker",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_f9f1343c-7c2f-4155-a594-cd5755678862": {
                    "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_f9f1343c-7c2f-4155-a594-cd5755678862",
                    "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ExchangeRateUDIValue_b5e7c4d8-c8b7-4036-af0b-d9d680d59ea7": {
                    "Id": "ar_pros_ExchangeRateUDIValue_b5e7c4d8-c8b7-4036-af0b-d9d680d59ea7",
                    "IdConcepto": "ar_pros_ExchangeRateUDIValue",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PlacementPriceValues_b735caef-6311-4cb2-a6c4-3c2edb8be536": {
                    "Id": "ar_pros_PlacementPriceValues_b735caef-6311-4cb2-a6c4-3c2edb8be536",
                    "IdConcepto": "ar_pros_PlacementPriceValues",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalAmountOfTheOffer_e03e16f3-71e4-4082-b4db-55ff4a0776d0": {
                    "Id": "ar_pros_TotalAmountOfTheOffer_e03e16f3-71e4-4082-b4db-55ff4a0776d0",
                    "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TermAndExpirationDate_e533699f-ca09-4ec7-b6a1-275566f85de1": {
                    "Id": "ar_pros_TermAndExpirationDate_e533699f-ca09-4ec7-b6a1-275566f85de1",
                    "IdConcepto": "ar_pros_TermAndExpirationDate",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided_fe1aec90-c4af-4852-b581-00f3b914fa21": {
                    "Id": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided_fe1aec90-c4af-4852-b581-00f3b914fa21",
                    "IdConcepto": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SerieNumberOfCorrespondingEmission_7874890a-5d90-4077-b6ec-2f325a5e9431": {
                    "Id": "ar_pros_SerieNumberOfCorrespondingEmission_7874890a-5d90-4077-b6ec-2f325a5e9431",
                    "IdConcepto": "ar_pros_SerieNumberOfCorrespondingEmission",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NumberOfTrust_092c825e-bf62-46a8-9dc9-3515f5822e13": {
                    "Id": "ar_pros_NumberOfTrust_092c825e-bf62-46a8-9dc9-3515f5822e13",
                    "IdConcepto": "ar_pros_NumberOfTrust",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DataRelatedToTheIndenture_7b3d662a-bd97-4dde-a895-8185b11c6dd1": {
                    "Id": "ar_pros_DataRelatedToTheIndenture_7b3d662a-bd97-4dde-a895-8185b11c6dd1",
                    "IdConcepto": "ar_pros_DataRelatedToTheIndenture",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Settlor_04f671fa-af3e-4156-88aa-bc36e4e53335": {
                    "Id": "ar_pros_Settlor_04f671fa-af3e-4156-88aa-bc36e4e53335",
                    "IdConcepto": "ar_pros_Settlor",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrustEstateManager_089cb309-72cd-43ab-be77-7592293144dd": {
                    "Id": "ar_pros_TrustEstateManager_089cb309-72cd-43ab-be77-7592293144dd",
                    "IdConcepto": "ar_pros_TrustEstateManager",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInFirstPlace_9bd00e7d-a3c7-407c-bf8c-09296586e364": {
                    "Id": "ar_pros_TrusteesInFirstPlace_9bd00e7d-a3c7-407c-bf8c-09296586e364",
                    "IdConcepto": "ar_pros_TrusteesInFirstPlace",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInSecondPlace_1ce07a93-fa08-4809-8a88-ecd7b1df6328": {
                    "Id": "ar_pros_TrusteesInSecondPlace_1ce07a93-fa08-4809-8a88-ecd7b1df6328",
                    "IdConcepto": "ar_pros_TrusteesInSecondPlace",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInThirdPlace_25adc285-3fbf-4bc0-8657-5ad284d57392": {
                    "Id": "ar_pros_TrusteesInThirdPlace_25adc285-3fbf-4bc0-8657-5ad284d57392",
                    "IdConcepto": "ar_pros_TrusteesInThirdPlace",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OtherTrustees_52c8bbd2-6d8c-4961-be96-11625e64d355": {
                    "Id": "ar_pros_OtherTrustees_52c8bbd2-6d8c-4961-be96-11625e64d355",
                    "IdConcepto": "ar_pros_OtherTrustees",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AssetsRightsOrValuesUnderATrust_717e1a3c-57da-496c-8b3d-3c165a63f969": {
                    "Id": "ar_pros_AssetsRightsOrValuesUnderATrust_717e1a3c-57da-496c-8b3d-3c165a63f969",
                    "IdConcepto": "ar_pros_AssetsRightsOrValuesUnderATrust",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SummaryOfTheMostImportantCharacteristics_6424c04f-b8ba-4d04-9522-f9318bfa69b6": {
                    "Id": "ar_pros_SummaryOfTheMostImportantCharacteristics_6424c04f-b8ba-4d04-9522-f9318bfa69b6",
                    "IdConcepto": "ar_pros_SummaryOfTheMostImportantCharacteristics",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_BasisForDeterminingThePerformance_44d6b74e-5f6c-48c3-ac10-3754123f8922": {
                    "Id": "ar_pros_BasisForDeterminingThePerformance_44d6b74e-5f6c-48c3-ac10-3754123f8922",
                    "IdConcepto": "ar_pros_BasisForDeterminingThePerformance",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_WhereAppropriateMinimumPerformance_f05ad751-4ea1-4664-927a-ea24c11b647d": {
                    "Id": "ar_pros_WhereAppropriateMinimumPerformance_f05ad751-4ea1-4664-927a-ea24c11b647d",
                    "IdConcepto": "ar_pros_WhereAppropriateMinimumPerformance",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InterestRateApplicableForTheFirstPeriod_b8776a02-f9dc-4b9f-a9cf-1f7d4fa84903": {
                    "Id": "ar_pros_InterestRateApplicableForTheFirstPeriod_b8776a02-f9dc-4b9f-a9cf-1f7d4fa84903",
                    "IdConcepto": "ar_pros_InterestRateApplicableForTheFirstPeriod",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_FrequencyAndFormOfAmortizationOfSecurities_dca0c798-aea9-4b0e-93fe-6a3199fa9e20": {
                    "Id": "ar_pros_FrequencyAndFormOfAmortizationOfSecurities_dca0c798-aea9-4b0e-93fe-6a3199fa9e20",
                    "IdConcepto": "ar_pros_FrequencyAndFormOfAmortizationOfSecurities",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PeriodicityAndPaymentOfIncome_1b5d7764-ce24-47a9-a7ce-d4c52585437d": {
                    "Id": "ar_pros_PeriodicityAndPaymentOfIncome_1b5d7764-ce24-47a9-a7ce-d4c52585437d",
                    "IdConcepto": "ar_pros_PeriodicityAndPaymentOfIncome",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LocationAndPaymentOfIncomeAndAmortization_296d4a9b-b6e3-412a-bde4-e3f2321e6b97": {
                    "Id": "ar_pros_LocationAndPaymentOfIncomeAndAmortization_296d4a9b-b6e3-412a-bde4-e3f2321e6b97",
                    "IdConcepto": "ar_pros_LocationAndPaymentOfIncomeAndAmortization",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTheCommonRepresentative_61969073-7b71-4b27-bd2a-ad595d5d70de": {
                    "Id": "ar_pros_NameOfTheCommonRepresentative_61969073-7b71-4b27-bd2a-ad595d5d70de",
                    "IdConcepto": "ar_pros_NameOfTheCommonRepresentative",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_WhereAppropriateValuatotyOpinion_19c0184f-0ff7-4478-8767-6994e14d8d44": {
                    "Id": "ar_pros_WhereAppropriateValuatotyOpinion_19c0184f-0ff7-4478-8767-6994e14d8d44",
                    "IdConcepto": "ar_pros_WhereAppropriateValuatotyOpinion",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation_838acd57-c10e-476f-b4a8-ee4e21b8082d": {
                    "Id": "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation_838acd57-c10e-476f-b4a8-ee4e21b8082d",
                    "IdConcepto": "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfEmissionsUnderAProgram_95531f94-6d3b-4d11-915f-29e82529fa90": {
                    "Id": "ar_pros_InTheCaseOfEmissionsUnderAProgram_95531f94-6d3b-4d11-915f-29e82529fa90",
                    "IdConcepto": "ar_pros_InTheCaseOfEmissionsUnderAProgram",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalAmountProgramRegistration_29379cc0-8a11-4ad9-b43b-6c8339d81bdd": {
                    "Id": "ar_pros_TotalAmountProgramRegistration_29379cc0-8a11-4ad9-b43b-6c8339d81bdd",
                    "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_RevolvingCharacterProgram_cfd8ea75-5c1d-49c2-be8e-69d7cccdfee3": {
                    "Id": "ar_pros_RevolvingCharacterProgram_cfd8ea75-5c1d-49c2-be8e-69d7cccdfee3",
                    "IdConcepto": "ar_pros_RevolvingCharacterProgram",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultRevolvingCharacterProgram"
                },
                "ar_pros_LifeOfTheProgram_bfe81a91-710e-4a35-98ac-6aa52a4aef79": {
                    "Id": "ar_pros_LifeOfTheProgram_bfe81a91-710e-4a35-98ac-6aa52a4aef79",
                    "IdConcepto": "ar_pros_LifeOfTheProgram",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DateOfPublicationOfTenderNotice_afdd900a-a5c4-4065-a2b7-320e58c4b8b2": {
                    "Id": "ar_pros_DateOfPublicationOfTenderNotice_afdd900a-a5c4-4065-a2b7-320e58c4b8b2",
                    "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDateOfPublicationOfTenderNotice"
                },
                "ar_pros_PeriodOrDateOfTheOffer_5941d647-e61d-4248-8715-2444c4cdd721": {
                    "Id": "ar_pros_PeriodOrDateOfTheOffer_5941d647-e61d-4248-8715-2444c4cdd721",
                    "IdConcepto": "ar_pros_PeriodOrDateOfTheOffer",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ClosingDateBookOrAuction_df0b8aee-8ba4-4498-8886-8f0880adcfda": {
                    "Id": "ar_pros_ClosingDateBookOrAuction_df0b8aee-8ba4-4498-8886-8f0880adcfda",
                    "IdConcepto": "ar_pros_ClosingDateBookOrAuction",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultClosingDateBookOrAuction"
                },
                "ar_pros_DateOfRegisterInTheStockExchange_12a4afe6-bfc8-4fbc-bb2e-3a59a0d7d5df": {
                    "Id": "ar_pros_DateOfRegisterInTheStockExchange_12a4afe6-bfc8-4fbc-bb2e-3a59a0d7d5df",
                    "IdConcepto": "ar_pros_DateOfRegisterInTheStockExchange",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDateOfRegisterInTheStockExchange"
                },
                "ar_pros_SettlementDate_327edd93-17ec-45d2-afdd-af8a89b0c561": {
                    "Id": "ar_pros_SettlementDate_327edd93-17ec-45d2-afdd-af8a89b0c561",
                    "IdConcepto": "ar_pros_SettlementDate",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultSettlementDate"
                },
                "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_6e160a58-bcbd-48a4-ad97-8349ffe54214": {
                    "Id": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_6e160a58-bcbd-48a4-ad97-8349ffe54214",
                    "IdConcepto": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountOfPositionsPresented_6145cebf-c357-47ff-9ca5-e9cc7e8e96d8": {
                    "Id": "ar_pros_AmountOfPositionsPresented_6145cebf-c357-47ff-9ca5-e9cc7e8e96d8",
                    "IdConcepto": "ar_pros_AmountOfPositionsPresented",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_NumberOfPositionsPresented_f2899fa3-fee9-4dfc-9df9-e1345dbef995": {
                    "Id": "ar_pros_NumberOfPositionsPresented_f2899fa3-fee9-4dfc-9df9-e1345dbef995",
                    "IdConcepto": "ar_pros_NumberOfPositionsPresented",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_NumberOfAssignedPositions_6823b66f-ccc5-416a-84a3-5c11abe1a069": {
                    "Id": "ar_pros_NumberOfAssignedPositions_6823b66f-ccc5-416a-84a3-5c11abe1a069",
                    "IdConcepto": "ar_pros_NumberOfAssignedPositions",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalDemandValues_1e59a04e-8aae-46c9-b75e-9a053fa264fc": {
                    "Id": "ar_pros_TotalDemandValues_1e59a04e-8aae-46c9-b75e-9a053fa264fc",
                    "IdConcepto": "ar_pros_TotalDemandValues",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_RateOrMinimumAndMaximumPrice_e2530431-0a9c-48f5-beea-503f4e8d5729": {
                    "Id": "ar_pros_RateOrMinimumAndMaximumPrice_e2530431-0a9c-48f5-beea-503f4e8d5729",
                    "IdConcepto": "ar_pros_RateOrMinimumAndMaximumPrice",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AssignedRateOrPrice_0088db20-9e1d-42ca-b59e-4c3a6ca03829": {
                    "Id": "ar_pros_AssignedRateOrPrice_0088db20-9e1d-42ca-b59e-4c3a6ca03829",
                    "IdConcepto": "ar_pros_AssignedRateOrPrice",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PotentialAcquirers_27d03724-9c9e-41a0-9504-81a8b84e1cb0": {
                    "Id": "ar_pros_PotentialAcquirers_27d03724-9c9e-41a0-9504-81a8b84e1cb0",
                    "IdConcepto": "ar_pros_PotentialAcquirers",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PossibleLimitations_c5978642-a4c0-486b-9f20-f08fba0147e3": {
                    "Id": "ar_pros_PossibleLimitations_c5978642-a4c0-486b-9f20-f08fba0147e3",
                    "IdConcepto": "ar_pros_PossibleLimitations",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TypeOfInvestorToWhichItIsAddressed_d3866155-0706-4bd8-a66c-0cbe64010889": {
                    "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_d3866155-0706-4bd8-a66c-0cbe64010889",
                    "IdConcepto": "ar_pros_TypeOfInvestorToWhichItIsAddressed",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_8e62b938-26b8-4132-95a1-0767d9db8c48": {
                    "Id": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_8e62b938-26b8-4132-95a1-0767d9db8c48",
                    "IdConcepto": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SerieDepositary_8e62b938-26b8-4132-95a1-0767d9db8c47": {
                    "Id": "ar_pros_SerieDepositary_8e62b938-26b8-4132-95a1-0767d9db8c47",
                    "IdConcepto": "ar_pros_SerieDepositary",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Rating_81f574d3-9c37-40f8-b080-34c4ebba3096": {
                    "Id": "ar_pros_Rating_81f574d3-9c37-40f8-b080-34c4ebba3096",
                    "IdConcepto": "ar_pros_Rating",
                    "IdContextoPlantilla": "cxt_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ReasonsForThisRating_4fa77653-a6d4-4318-beea-e770587dbeaf": {
                    "Id": "ar_pros_ReasonsForThisRating_4fa77653-a6d4-4318-beea-e770587dbeaf",
                    "IdConcepto": "ar_pros_ReasonsForThisRating",
                    "IdContextoPlantilla": "cxt_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_RatingMeaning_26930bd2-bede-4a1a-b3a6-f52c4a8e0c07": {
                    "Id": "ar_pros_RatingMeaning_26930bd2-bede-4a1a-b3a6-f52c4a8e0c07",
                    "IdConcepto": "ar_pros_RatingMeaning",
                    "IdContextoPlantilla": "cxt_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegalBasisOfTheTaxRegimeApplicable_f77547ec-759f-470c-af06-7f34bb0ec7c2": {
                    "Id": "ar_pros_LegalBasisOfTheTaxRegimeApplicable_f77547ec-759f-470c-af06-7f34bb0ec7c2",
                    "IdConcepto": "ar_pros_LegalBasisOfTheTaxRegimeApplicable",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_c268b229-ee10-46b1-8b4a-6e567ce51aca": {
                    "Id": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_c268b229-ee10-46b1-8b4a-6e567ce51aca",
                    "IdConcepto": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV"
                },
                "ar_pros_LegendArticle86OfTheLMV_3710c03d-1127-4698-9352-55728e1674c4": {
                    "Id": "ar_pros_LegendArticle86OfTheLMV_3710c03d-1127-4698-9352-55728e1674c4",
                    "IdConcepto": "ar_pros_LegendArticle86OfTheLMV",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLegendArticle86OfTheLMV"
                },
                "ar_pros_NumberOfRegister_ec72318e-d3e1-4cac-b74d-e8e730314660": {
                    "Id": "ar_pros_NumberOfRegister_ec72318e-d3e1-4cac-b74d-e8e730314660",
                    "IdConcepto": "ar_pros_NumberOfRegister",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_a7d4e3dd-821a-4a3d-bfe6-9f634e0b05d8": {
                    "Id": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_a7d4e3dd-821a-4a3d-bfe6-9f634e0b05d8",
                    "IdConcepto": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_130444c9-9aa4-44b5-892d-b462742e1537": {
                    "Id": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_130444c9-9aa4-44b5-892d-b462742e1537",
                    "IdConcepto": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegendDocumentAvailableWithTheUnderwriter_bfef9dca-e348-4391-bc01-e79ccd5c75ed": {
                    "Id": "ar_pros_LegendDocumentAvailableWithTheUnderwriter_bfef9dca-e348-4391-bc01-e79ccd5c75ed",
                    "IdConcepto": "ar_pros_LegendDocumentAvailableWithTheUnderwriter",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLegendDocumentAvailableWithTheUnderwriter"
                },
                "ar_pros_ProspectusSupplementBrochure_f0b11ce3-7737-4ebc-aba6-2a9166a39880": {
                    "Id": "ar_pros_ProspectusSupplementBrochure_f0b11ce3-7737-4ebc-aba6-2a9166a39880",
                    "IdConcepto": "ar_pros_ProspectusSupplementBrochure",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultProspectusSupplementBrochure"
                },
                "ar_pros_LegendProspectusSupplementBrochure_8244b6ab-5b49-4f39-9204-4c85bdcb0c8a": {
                    "Id": "ar_pros_LegendProspectusSupplementBrochure_8244b6ab-5b49-4f39-9204-4c85bdcb0c8a",
                    "IdConcepto": "ar_pros_LegendProspectusSupplementBrochure",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfAdditionalValues_33dc926c-db7a-40e7-84ec-7294207de76c": {
                    "Id": "ar_pros_InTheCaseOfAdditionalValues_33dc926c-db7a-40e7-84ec-7294207de76c",
                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_9d36c57d-f06c-476e-8954-7abd2c1287a7": {
                    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_9d36c57d-f06c-476e-8954-7abd2c1287a7",
                    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalAmountOfSecurities_4ae3b8b7-c4fe-44a5-9951-0d0bfca467e2": {
                    "Id": "ar_pros_TotalAmountOfSecurities_4ae3b8b7-c4fe-44a5-9951-0d0bfca467e2",
                    "IdConcepto": "ar_pros_TotalAmountOfSecurities",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalNumberOfValues_ceb58ed9-7336-4c6b-882f-079863cbedc0": {
                    "Id": "ar_pros_TotalNumberOfValues_ceb58ed9-7336-4c6b-882f-079863cbedc0",
                    "IdConcepto": "ar_pros_TotalNumberOfValues",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_IssuanceUnderArt13OfTheCUELegend_52438976-3aa8-41bd-a040-1ca5e7129aa9": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegend_52438976-3aa8-41bd-a040-1ca5e7129aa9",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUELegend"
                },
                "ar_pros_PlacementProspectus_396ee96a-4022-4239-a86e-df9d36cc40cf": {
                    "Id": "ar_pros_PlacementProspectus_396ee96a-4022-4239-a86e-df9d36cc40cf",
                    "IdConcepto": "ar_pros_PlacementProspectus",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultPlacementProspectus"
                },
                "ar_pros_ProspectusLegend_57d2c5d5-8a35-4c90-b5dd-8fe1b29a7089": {
                    "Id": "ar_pros_ProspectusLegend_57d2c5d5-8a35-4c90-b5dd-8fe1b29a7089",
                    "IdConcepto": "ar_pros_ProspectusLegend",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OnlyEmission_f94a5de3-f508-4b46-a6bc-5738babb00d6": {
                    "Id": "ar_pros_OnlyEmission_f94a5de3-f508-4b46-a6bc-5738babb00d6",
                    "IdConcepto": "ar_pros_OnlyEmission",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultOnlyEmission"
                },
                "ar_pros_Supplement_cac26d6a-249a-418e-81ad-7c166c05e7e3": {
                    "Id": "ar_pros_Supplement_cac26d6a-249a-418e-81ad-7c166c05e7e3",
                    "IdConcepto": "ar_pros_Supplement",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoSupplement"
                },
                "ar_pros_SupplementLegend_ee15cb0b-608d-4039-8dfd-e7c7364e3783": {
                    "Id": "ar_pros_SupplementLegend_ee15cb0b-608d-4039-8dfd-e7c7364e3783",
                    "IdConcepto": "ar_pros_SupplementLegend",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Brochure_5b7b4b4d-67de-4a6b-90fa-999f868bbd85": {
                    "Id": "ar_pros_Brochure_5b7b4b4d-67de-4a6b-90fa-999f868bbd85",
                    "IdConcepto": "ar_pros_Brochure",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultBrochure"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUE_2931c1f3-e179-4a15-a4bc-3bb3c6c82d24": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_2931c1f3-e179-4a15-a4bc-3bb3c6c82d24",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUE"
                },
                "ar_pros_LimitedPublicOffering_54f65357-c03f-4807-9df3-72e435fcc4ef": {
                    "Id": "ar_pros_LimitedPublicOffering_54f65357-c03f-4807-9df3-72e435fcc4ef",
                    "IdConcepto": "ar_pros_LimitedPublicOffering",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLimitedPublicOffering"
                },
                "ar_pros_TypeOfInstrument_951860b4-e843-4461-a26c-291b38a9204d": {
                    "Id": "ar_pros_TypeOfInstrument_951860b4-e843-4461-a26c-291b38a9204d",
                    "IdConcepto": "ar_pros_TypeOfInstrument",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#tipoInstrumentoDefault"
                },
                "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000": {
                    "Id": "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000",
                    "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#tipoInstrumentoDescripcionDefault"
                },
                "ar_pros_ForeingIssuer_0c9582eb-f8e4-4c8d-9e1c-c80bc1605708": {
                    "Id": "ar_pros_ForeingIssuer_0c9582eb-f8e4-4c8d-9e1c-c80bc1605708",
                    "IdConcepto": "ar_pros_ForeingIssuer",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultForeingIssuer"
                },
                "ar_pros_MentioningwhetherOrNotHaveCollateral_28b5ec08-1322-409b-9148-4790f4485884": {
                    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_28b5ec08-1322-409b-9148-4790f4485884",
                    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentioningPartialOrTotalDependencePros_259aae01-d2dd-4371-bb0f-ba7af86fe0eb": {
                    "Id": "ar_pros_MentioningPartialOrTotalDependencePros_259aae01-d2dd-4371-bb0f-ba7af86fe0eb",
                    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
                }
            };
        }
    }

}