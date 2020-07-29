///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/414000-HBIS1
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS1 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS1
         */
        constructor() {

            this.ListadoDeFormulas = {

                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_IssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_IssuanceUnderArt13OfTheCUE',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_OtherConsiderationsOfSupply': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_OtherConsiderationsOfSupply',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherConsiderationsOfSupply",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_UseOfFunds': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_UseOfFunds',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_UseOfFunds",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DistributionPlan': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DistributionPlan',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DistributionPlan",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_FeaturesCommonRepresentative': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_FeaturesCommonRepresentative',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_FeaturesCommonRepresentative",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TypeOfInvestorToWhichItIsAddressed': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TypeOfInvestorToWhichItIsAddressed',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TypeOfInvestorToWhichItIsAddressed",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_LimitedPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_LimitedPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_LimitedPublicOffering",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_IdentificationOfTheSourceOfTheNecessaryResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_IdentificationOfTheSourceOfTheNecessaryResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MexicoPrimaryAmount",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PrimaryOverallotmentMexicoAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PrimaryOverallotmentMexicoAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoAmount",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MexicoSecondaryAmount",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryAmount",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AbroadPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AbroadPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AbroadPrimaryAmount",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignPrimaryOverAllotmentAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignPrimaryOverAllotmentAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ForeignPrimaryOverAllotmentAmount",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ForeignSecondaryAmount",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryAmount",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoPrimaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoPrimaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MexicoPrimaryNumberOfValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PrimaryOverallotmentMexicoNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PrimaryOverallotmentMexicoNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoSecondaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoSecondaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MexicoSecondaryNumberOfValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoOverallotmentSecondaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MexicoOverallotmentSecondaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AbroadPrimaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AbroadPrimaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AbroadPrimaryNumberOfValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignPrimaryOverallotmentNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignPrimaryOverallotmentNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignSecondaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignSecondaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ForeignSecondaryNumberOfValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignOverallotmentSecondaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ForeignOverallotmentSecondaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PlacementPriceValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PlacementPriceValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PlacementPriceValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DescriptionOfHowThePlacementPriceIsDetermined',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_OtherConsiderationsOfSupply_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_OtherConsiderationsOfSupply_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherConsiderationsOfSupply",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PotentialAcquirers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PotentialAcquirers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PotentialAcquirers",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PossibleLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PossibleLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PossibleLimitations",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmountOfFixedCapitalBeforePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmountOfFixedCapitalBeforePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AmountOfFixedCapitalBeforePlacement",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmountOfVariableCapitalBeforePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmountOfVariableCapitalBeforePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AmountOfVariableCapitalBeforePlacement",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmountOfFixedCapitalAfterPlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmountOfFixedCapitalAfterPlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AmountOfFixedCapitalAfterPlacement",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmountVariableShareCapitalAfterThePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmountVariableShareCapitalAfterThePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AmountVariableShareCapitalAfterThePlacement",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ListedSerie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ListedSerie',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ListedSerie",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MentionThatHoldersOfTheseSecuritiesAreInDisadvantaged': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MentionThatHoldersOfTheseSecuritiesAreInDisadvantaged',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "SI") and variable4 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentionThatHoldersOfTheseSecuritiesAreInDisadvantaged",
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
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Participantes_en_la_oferta_ar_pros_ParticipantName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Participantes_en_la_oferta_ar_pros_ParticipantName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ParticipantName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Participantes_en_la_oferta_ar_pros_AmountOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Participantes_en_la_oferta_ar_pros_AmountOfferCost',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AmountOfferCost',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Participantes_en_la_oferta_ar_pros_IvaOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Participantes_en_la_oferta_ar_pros_IvaOfferCost',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IvaOfferCost',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Participantes_en_la_oferta_ar_pros_TotalOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Participantes_en_la_oferta_ar_pros_TotalOfferCost',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TotalOfferCost',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_ParticipantName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_ParticipantName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ParticipantName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_SignificantParticipationInTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_SignificantParticipationInTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SignificantParticipationInTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Relacion_con_inversionistas_ar_pros_InvestorName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Relacion_con_inversionistas_ar_pros_InvestorName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InvestorName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Relacion_con_inversionistas_ar_pros_InvestorAdress': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Relacion_con_inversionistas_ar_pros_InvestorAdress',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InvestorAdress',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Relacion_con_inversionistas_ar_pros_InvestorPhone': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Relacion_con_inversionistas_ar_pros_InvestorPhone',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InvestorPhone',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Relacion_con_inversionistas_ar_pros_InvestorMail': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Relacion_con_inversionistas_ar_pros_InvestorMail',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InvestorMail',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TypeOfOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TypeOfOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TypeOfOffer",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_Settlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_Settlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Settlor",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_PlacementPriceValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_PlacementPriceValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PlacementPriceValues",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_MentioningTheQualificationOfTheCreditRiskOfTheIssueOrProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_MentioningTheQualificationOfTheCreditRiskOfTheIssueOrProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentioningTheQualificationOfTheCreditRiskOfTheIssueOrProgram",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_HowToImplementOrEnforceTheGuarantee': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_HowToImplementOrEnforceTheGuarantee',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_HowToImplementOrEnforceTheGuarantee",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_MentionIfTheCollateralAreInsured': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_MentionIfTheCollateralAreInsured',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentionIfTheCollateralAreInsured",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_IfTheTitlesHaveFiduciaryGuarantee': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_IfTheTitlesHaveFiduciaryGuarantee',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IfTheTitlesHaveFiduciaryGuarantee",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_DiscloseTheTermsOfAnyClause': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_DiscloseTheTermsOfAnyClause',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DiscloseTheTermsOfAnyClause",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TranscriptOfOtherRelevantTermsTitle': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TranscriptOfOtherRelevantTermsTitle',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TranscriptOfOtherRelevantTermsTitle",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LegalBasisOfTheTaxRegimeApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LegalBasisOfTheTaxRegimeApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_LegalBasisOfTheTaxRegimeApplicable",
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
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_SpecifyIfTheGoodsAreInsured': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_SpecifyIfTheGoodsAreInsured',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SpecifyIfTheGoodsAreInsured",
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
                'Obligatorio_Posibles_Adquirentes_ar_pros_PotentialAcquirers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Posibles_Adquirentes_ar_pros_PotentialAcquirers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PotentialAcquirers',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_LimitedPublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Posibles_Adquirentes_ar_pros_PossibleLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Posibles_Adquirentes_ar_pros_PossibleLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PossibleLimitations',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_LimitedPublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Condicional_Monto_total_programa_inscripcion_ar_pros_TotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Monto_total_programa_inscripcion_ar_pros_TotalAmountOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
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
  "ar_pros_CharacteristicsOfTheValues_6347ac0a-7b12-4f87-9661-687e7b5fc019": {
    "Id": "ar_pros_CharacteristicsOfTheValues_6347ac0a-7b12-4f87-9661-687e7b5fc019",
    "IdConcepto": "ar_pros_CharacteristicsOfTheValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
    },

  "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_42656fc2-fed3-4cfa-8fa2-b0c2f0c35423": {
      "Id": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_42656fc2-fed3-4cfa-8fa2-b0c2f0c35423",
      "IdConcepto": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities",
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
    "Valor": "#valorDefaultTypeOfOffer"
  },
  "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary_766e37ce-6654-429d-bc1f-9a13e29735ae": {
    "Id": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary_766e37ce-6654-429d-bc1f-9a13e29735ae",
    "IdConcepto": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoPrimaryAmount_568b1470-b4b4-4776-919b-ab0e7f1837e6": {
    "Id": "ar_pros_MexicoPrimaryAmount_568b1470-b4b4-4776-919b-ab0e7f1837e6",
    "IdConcepto": "ar_pros_MexicoPrimaryAmount",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoSecondaryAmount_55d99606-4a95-441e-bfb8-59af96e93f7f": {
    "Id": "ar_pros_MexicoSecondaryAmount_55d99606-4a95-441e-bfb8-59af96e93f7f",
    "IdConcepto": "ar_pros_MexicoSecondaryAmount",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AbroadPrimaryAmount_d76f5b3d-d050-4b07-b3d3-078dff443036": {
    "Id": "ar_pros_AbroadPrimaryAmount_d76f5b3d-d050-4b07-b3d3-078dff443036",
    "IdConcepto": "ar_pros_AbroadPrimaryAmount",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignSecondaryAmount_fc810243-8b74-4667-a27c-7b821733ab88": {
    "Id": "ar_pros_ForeignSecondaryAmount_fc810243-8b74-4667-a27c-7b821733ab88",
    "IdConcepto": "ar_pros_ForeignSecondaryAmount",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary_bbce9884-261c-417d-9025-108257f21d3f": {
    "Id": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary_bbce9884-261c-417d-9025-108257f21d3f",
    "IdConcepto": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoPrimaryNumberOfValues_44bd9add-485f-40d5-8420-510a15b5bbf4": {
    "Id": "ar_pros_MexicoPrimaryNumberOfValues_44bd9add-485f-40d5-8420-510a15b5bbf4",
    "IdConcepto": "ar_pros_MexicoPrimaryNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoSecondaryNumberOfValues_0cf333aa-39cd-47d7-b851-bf0ccd1d5a60": {
    "Id": "ar_pros_MexicoSecondaryNumberOfValues_0cf333aa-39cd-47d7-b851-bf0ccd1d5a60",
    "IdConcepto": "ar_pros_MexicoSecondaryNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AbroadPrimaryNumberOfValues_dbf82c77-5be7-4313-9b3d-b75bc0e88eab": {
    "Id": "ar_pros_AbroadPrimaryNumberOfValues_dbf82c77-5be7-4313-9b3d-b75bc0e88eab",
    "IdConcepto": "ar_pros_AbroadPrimaryNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignSecondaryNumberOfValues_6439da4d-8875-4917-82f4-e4f0ad144a6a": {
    "Id": "ar_pros_ForeignSecondaryNumberOfValues_6439da4d-8875-4917-82f4-e4f0ad144a6a",
    "IdConcepto": "ar_pros_ForeignSecondaryNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
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
  "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_cb4cc5cd-3de8-4ef3-83be-666f19e65e99": {
    "Id": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_cb4cc5cd-3de8-4ef3-83be-666f19e65e99",
    "IdConcepto": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultDesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized"
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
    "Valor": "#valorDefaultNameOfTheReferenceCurrencyInWhichTheIssueIsMade"
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
    "Valor": "#valorDefaultExchangeRateUDIValue"
  },
  "ar_pros_OtherConsiderationsOfSupply_3a30cc6d-0ad2-40ca-9036-dcc295b60ac2": {
    "Id": "ar_pros_OtherConsiderationsOfSupply_3a30cc6d-0ad2-40ca-9036-dcc295b60ac2",
    "IdConcepto": "ar_pros_OtherConsiderationsOfSupply",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_f602187c-b124-4e20-a9b0-208a7481a5d8": {
    "Id": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_f602187c-b124-4e20-a9b0-208a7481a5d8",
    "IdConcepto": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect",
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
  "ar_pros_MentioningTheQualificationOfTheCreditRiskOfTheIssueOrProgram_95514bae-70bd-4d33-93ad-40a8c9cca797": {
    "Id": "ar_pros_MentioningTheQualificationOfTheCreditRiskOfTheIssueOrProgram_95514bae-70bd-4d33-93ad-40a8c9cca797",
    "IdConcepto": "ar_pros_MentioningTheQualificationOfTheCreditRiskOfTheIssueOrProgram",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity_73d1b41f-8323-403d-9fe3-32cf1a8bb9a6": {
    "Id": "ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity_73d1b41f-8323-403d-9fe3-32cf1a8bb9a6",
    "IdConcepto": "ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity",
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
  },
  "ar_pros_HowToImplementOrEnforceTheGuarantee_e31efdc6-789c-4888-be30-7251e82b6f7b": {
    "Id": "ar_pros_HowToImplementOrEnforceTheGuarantee_e31efdc6-789c-4888-be30-7251e82b6f7b",
    "IdConcepto": "ar_pros_HowToImplementOrEnforceTheGuarantee",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral_89f654a6-04c2-46f6-909d-7af4235f4093": {
    "Id": "ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral_89f654a6-04c2-46f6-909d-7af4235f4093",
    "IdConcepto": "ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MentionIfTheCollateralAreInsured_fb597249-45e0-4d4e-a3a7-914b1d47d3cf": {
    "Id": "ar_pros_MentionIfTheCollateralAreInsured_fb597249-45e0-4d4e-a3a7-914b1d47d3cf",
    "IdConcepto": "ar_pros_MentionIfTheCollateralAreInsured",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IfTheTitlesHaveFiduciaryGuarantee_4a10f919-64bc-4ab5-9d56-d560dc19a5de": {
    "Id": "ar_pros_IfTheTitlesHaveFiduciaryGuarantee_4a10f919-64bc-4ab5-9d56-d560dc19a5de",
    "IdConcepto": "ar_pros_IfTheTitlesHaveFiduciaryGuarantee",
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
  "ar_pros_AmortizationTable_2afaa733-9c39-4f68-b6a3-de7e2a3aebdc": {
    "Id": "ar_pros_AmortizationTable_2afaa733-9c39-4f68-b6a3-de7e2a3aebdc",
    "IdConcepto": "ar_pros_AmortizationTable",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DiscloseTheTermsOfAnyClause_2772dc3d-7c3f-4e38-aa7d-5afef609de95": {
    "Id": "ar_pros_DiscloseTheTermsOfAnyClause_2772dc3d-7c3f-4e38-aa7d-5afef609de95",
    "IdConcepto": "ar_pros_DiscloseTheTermsOfAnyClause",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TranscriptOfOtherRelevantTermsTitle_adf4c5cf-51db-46c2-a3c1-612fc9b1bec7": {
    "Id": "ar_pros_TranscriptOfOtherRelevantTermsTitle_adf4c5cf-51db-46c2-a3c1-612fc9b1bec7",
    "IdConcepto": "ar_pros_TranscriptOfOtherRelevantTermsTitle",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources_c2772f6b-1832-43da-be91-9ef76840989e": {
    "Id": "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources_c2772f6b-1832-43da-be91-9ef76840989e",
    "IdConcepto": "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources",
    "IdContextoPlantilla": "ctx",
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
  "ar_pros_UseOfFunds_ad387e39-2083-4ad3-acab-93ca3cbad562": {
    "Id": "ar_pros_UseOfFunds_ad387e39-2083-4ad3-acab-93ca3cbad562",
    "IdConcepto": "ar_pros_UseOfFunds",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DistributionPlan_58b3bf2c-a254-4c0c-94c1-93dd6e83bbd6": {
    "Id": "ar_pros_DistributionPlan_58b3bf2c-a254-4c0c-94c1-93dd6e83bbd6",
    "IdConcepto": "ar_pros_DistributionPlan",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FeaturesCommonRepresentative_e8b46278-011e-4ed4-a492-0716e16cbc0e": {
    "Id": "ar_pros_FeaturesCommonRepresentative_e8b46278-011e-4ed4-a492-0716e16cbc0e",
    "IdConcepto": "ar_pros_FeaturesCommonRepresentative",
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
    "Valor": "#valorDefaultInTheCaseOfAdditionalValues"
  },
  "ar_pros_SpecifyIfTheGoodsAreInsured_afec0af1-43dc-4adb-b5a9-b6ad732d2653": {
    "Id": "ar_pros_SpecifyIfTheGoodsAreInsured_afec0af1-43dc-4adb-b5a9-b6ad732d2653",
    "IdConcepto": "ar_pros_SpecifyIfTheGoodsAreInsured",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_753df918-2bec-441b-9189-d1106b3a3420": {
    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_753df918-2bec-441b-9189-d1106b3a3420",
    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue",
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

  "ar_pros_Rating_5fc32b7a-02a5-4fb0-9591-40de6c06a10b": {
      "Id": "ar_pros_Rating_5fc32b7a-02a5-4fb0-9591-40de6c06a10b",
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
  "ar_pros_Rating_f5fa8442-fe24-41e8-858b-de0b54ab1305": {
      "Id": "ar_pros_Rating_f5fa8442-fe24-41e8-858b-de0b54ab1305",
      "IdConcepto": "ar_pros_Rating",
      "IdContextoPlantilla": "cxt_4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Rating_81b93449-55e2-4b78-95c6-e7474b286c21": {
      "Id": "ar_pros_Rating_81b93449-55e2-4b78-95c6-e7474b286c21",
      "IdConcepto": "ar_pros_Rating",
      "IdContextoPlantilla": "cxt6",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Rating_df01f10a-1c84-4fcc-a5b3-366c22462b90": {
      "Id": "ar_pros_Rating_df01f10a-1c84-4fcc-a5b3-366c22462b90",
      "IdConcepto": "ar_pros_Rating",
      "IdContextoPlantilla": "cxt5",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Rating_88be92a1-27e1-46c7-9a23-b0910b647a66": {
      "Id": "ar_pros_Rating_88be92a1-27e1-46c7-9a23-b0910b647a66",
      "IdConcepto": "ar_pros_Rating",
      "IdContextoPlantilla": "cxt7",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Rating_20d73ed8-0334-4275-ae85-be4c9e4dfbc9": {
      "Id": "ar_pros_Rating_20d73ed8-0334-4275-ae85-be4c9e4dfbc9",
      "IdConcepto": "ar_pros_Rating",
      "IdContextoPlantilla": "cxt8",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Rating_70816c55-b078-4615-a6b9-43ea06df773f": {
      "Id": "ar_pros_Rating_70816c55-b078-4615-a6b9-43ea06df773f",
      "IdConcepto": "ar_pros_Rating",
      "IdContextoPlantilla": "cxt9",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ReasonsForThisRating_4b66ab1d-46db-4548-9841-28bb0c6d31e4": {
      "Id": "ar_pros_ReasonsForThisRating_4b66ab1d-46db-4548-9841-28bb0c6d31e4",
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
  "ar_pros_ReasonsForThisRating_bed7fa58-983f-434b-b8c3-ad75ee1ad4d5": {
      "Id": "ar_pros_ReasonsForThisRating_bed7fa58-983f-434b-b8c3-ad75ee1ad4d5",
      "IdConcepto": "ar_pros_ReasonsForThisRating",
      "IdContextoPlantilla": "cxt_4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ReasonsForThisRating_2ef0ce7e-9699-4cb8-82bc-10643557fc74": {
      "Id": "ar_pros_ReasonsForThisRating_2ef0ce7e-9699-4cb8-82bc-10643557fc74",
      "IdConcepto": "ar_pros_ReasonsForThisRating",
      "IdContextoPlantilla": "cxt6",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ReasonsForThisRating_29ae15e8-f173-4332-b7ca-35446753673a": {
      "Id": "ar_pros_ReasonsForThisRating_29ae15e8-f173-4332-b7ca-35446753673a",
      "IdConcepto": "ar_pros_ReasonsForThisRating",
      "IdContextoPlantilla": "cxt5",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ReasonsForThisRating_743a4c56-3a5b-4cd9-b941-b79082d4ec6b": {
      "Id": "ar_pros_ReasonsForThisRating_743a4c56-3a5b-4cd9-b941-b79082d4ec6b",
      "IdConcepto": "ar_pros_ReasonsForThisRating",
      "IdContextoPlantilla": "cxt7",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ReasonsForThisRating_31d63180-b603-4202-8832-9a642ce94382": {
      "Id": "ar_pros_ReasonsForThisRating_31d63180-b603-4202-8832-9a642ce94382",
      "IdConcepto": "ar_pros_ReasonsForThisRating",
      "IdContextoPlantilla": "cxt8",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ReasonsForThisRating_4c0cc13d-f495-4f28-b223-197127e0a463": {
      "Id": "ar_pros_ReasonsForThisRating_4c0cc13d-f495-4f28-b223-197127e0a463",
      "IdConcepto": "ar_pros_ReasonsForThisRating",
      "IdContextoPlantilla": "cxt9",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RatingMeaning_e9420b4b-0ada-4d2a-98ed-82ec035f052d": {
      "Id": "ar_pros_RatingMeaning_e9420b4b-0ada-4d2a-98ed-82ec035f052d",
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
  "ar_pros_RatingMeaning_0e9bd77a-f54f-480d-8e7b-13db65f167ff": {
      "Id": "ar_pros_RatingMeaning_0e9bd77a-f54f-480d-8e7b-13db65f167ff",
      "IdConcepto": "ar_pros_RatingMeaning",
      "IdContextoPlantilla": "cxt_4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RatingMeaning_51fa9851-8943-4c06-99e7-38aae2507ac5": {
      "Id": "ar_pros_RatingMeaning_51fa9851-8943-4c06-99e7-38aae2507ac5",
      "IdConcepto": "ar_pros_RatingMeaning",
      "IdContextoPlantilla": "cxt6",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RatingMeaning_a2906981-8fd3-4a1e-99da-4b7cc29f1153": {
      "Id": "ar_pros_RatingMeaning_a2906981-8fd3-4a1e-99da-4b7cc29f1153",
      "IdConcepto": "ar_pros_RatingMeaning",
      "IdContextoPlantilla": "cxt5",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RatingMeaning_a5dc7506-96b3-4452-8beb-50123b63824e": {
      "Id": "ar_pros_RatingMeaning_a5dc7506-96b3-4452-8beb-50123b63824e",
      "IdConcepto": "ar_pros_RatingMeaning",
      "IdContextoPlantilla": "cxt7",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RatingMeaning_987e5057-7502-4f34-9c43-2aa17db44e6c": {
      "Id": "ar_pros_RatingMeaning_987e5057-7502-4f34-9c43-2aa17db44e6c",
      "IdConcepto": "ar_pros_RatingMeaning",
      "IdContextoPlantilla": "cxt8",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RatingMeaning_f0274d18-2d92-4bf6-adf9-5fc6f04ab143": {
      "Id": "ar_pros_RatingMeaning_f0274d18-2d92-4bf6-adf9-5fc6f04ab143",
      "IdConcepto": "ar_pros_RatingMeaning",
      "IdContextoPlantilla": "cxt9",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  }
};
        }
    }

}