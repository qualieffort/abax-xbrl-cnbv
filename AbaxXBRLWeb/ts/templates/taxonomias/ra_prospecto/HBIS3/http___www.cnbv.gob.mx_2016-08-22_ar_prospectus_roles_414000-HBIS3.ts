///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/414000-HBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {

                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_TypeOfOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_TypeOfOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_PossibleLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_PossibleLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_FiscalRegimeApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_FiscalRegimeApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_FiscalRegimeApplicable",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_TranscriptOfOtherRelevantTermsTitle': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_TranscriptOfOtherRelevantTermsTitle',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_IdentificationOfTheSourceOfTheNecessaryResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_IdentificationOfTheSourceOfTheNecessaryResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_SpecifyIfTheGoodsAreInsured': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_SpecifyIfTheGoodsAreInsured',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_PotentialAcquirers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_PotentialAcquirers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_TypeOfInvestorToWhichItIsAddressed': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_TypeOfInvestorToWhichItIsAddressed',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_DistributionPlan': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_DistributionPlan',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AdditionalOptions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AdditionalOptions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AdditionalOptions",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AdditionalOptionsAbroad': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AdditionalOptionsAbroad',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AdditionalOptionsAbroad",
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AdditionalOptionsNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AdditionalOptionsNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AdditionalOptionsNumberOfValues",
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AdditionalOptionsAbroadRegistrationNumberValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AdditionalOptionsAbroadRegistrationNumberValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AdditionalOptionsAbroadRegistrationNumberValues",
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_OtherConsiderationsOfSupply': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_OtherConsiderationsOfSupply',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmortizationTable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_AmortizationTable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AmortizationTable",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_FrequencyAndFormOfAmortizationOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_FrequencyAndFormOfAmortizationOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue",
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_UseOfFunds': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_UseOfFunds',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_CapitalStructureAfterTheOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_CapitalStructureAfterTheOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_CapitalStructureAfterTheOffering",
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_Dilution': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_Dilution',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Dilution",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_SellingShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_SellingShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SellingShareholders",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MarketInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_MarketInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MarketInformation",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_NameOfTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_NameOfTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfTheMarketMaker",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DurationOfTheContractWithTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DurationOfTheContractWithTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DurationOfTheContractWithTheMarketMaker",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_InTheCaseOfAdditionalValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_InTheCaseOfAdditionalValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
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
                            }
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
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_ParticipantName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_ParticipantName',
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
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_AmountOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_AmountOfferCost',
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
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_IvaOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_IvaOfferCost',
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
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_TotalOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_TotalOfferCost',
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
                'Obligatorio_Obligatorio_Prospecto_emision_unica_Suplemento_Folleto_ar_pros_TotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Obligatorio_Prospecto_emision_unica_Suplemento_Folleto_ar_pros_TotalAmountOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
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
                'Obligatorio_Obligatorio_Prospecto_emision_unica_Suplemento_Folleto_ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Obligatorio_Prospecto_emision_unica_Suplemento_Folleto_ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
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
                'Obligatorio_Obligatorio_Prospecto_emision_unica_Suplemento_Folleto_ar_pros_ExchangeRateUDIValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Obligatorio_Prospecto_emision_unica_Suplemento_Folleto_ar_pros_ExchangeRateUDIValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ExchangeRateUDIValue",
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
                'Obligatorio_Obligatorio_Prospecto_emision_unica_Suplemento_Folleto_ar_pros_PlacementPriceValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Obligatorio_Prospecto_emision_unica_Suplemento_Folleto_ar_pros_PlacementPriceValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
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
                'Obligatorio_Tipo_de_Inversionista_ar_pros_LimitedPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Tipo_de_Inversionista_ar_pros_LimitedPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LimitedPublicOffering',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_TypeOfInvestorToWhichItIsAddressed',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx": {
    "Id": "ctx",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2015_06_10",
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
  "ctx_1": {
    "Id": "ctx_1",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2015_06_10",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfParticipationsInTheOfferAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:NationalLawyersMember</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ar_pros:ParticipantsInTheOfferSequenceTypedAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">1</ar_pros:ParticipantSequenceDomain></xbrldi:typedMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
        "IdItemMiembro": "ar_pros_NationalLawyersMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:NationalLawyersMember",
        "ElementoMiembroTipificado": null
      },
      {
        "Explicita": false,
        "IdDimension": "ar_pros_ParticipantsInTheOfferSequenceTypedAxis",
        "IdItemMiembro": null,
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis",
        "QNameItemMiembro": null,
        "ElementoMiembroTipificado": "<ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">1</ar_pros:ParticipantSequenceDomain>"
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
  "ar_pros_CharacteristicsOfTheValues_43c268e2-5464-4bd5-8a9c-f4fe2347d287": {
    "Id": "ar_pros_CharacteristicsOfTheValues_43c268e2-5464-4bd5-8a9c-f4fe2347d287",
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
  "ar_pros_TypeOfOffer_984a2a9c-833f-4461-bbfc-25f6db0bfde8": {
    "Id": "ar_pros_TypeOfOffer_984a2a9c-833f-4461-bbfc-25f6db0bfde8",
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
  "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_15f3464e-1d9b-403c-ab0d-a9085060943e": {
    "Id": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_15f3464e-1d9b-403c-ab0d-a9085060943e",
    "IdConcepto": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_c51d887a-1d7e-45f6-b553-627244c1ce00": {
    "Id": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_c51d887a-1d7e-45f6-b553-627244c1ce00",
    "IdConcepto": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_a9ec314e-20f1-4037-9ca0-9cb073f07ec3": {
    "Id": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_a9ec314e-20f1-4037-9ca0-9cb073f07ec3",
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
  "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary_dd046db2-5992-4509-9bf3-9243956e93f4": {
    "Id": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary_dd046db2-5992-4509-9bf3-9243956e93f4",
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
  "ar_pros_MexicoPrimaryAmount_ba78fa24-3918-45a7-b49d-43298dc5c900": {
    "Id": "ar_pros_MexicoPrimaryAmount_ba78fa24-3918-45a7-b49d-43298dc5c900",
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
  "ar_pros_PrimaryOverallotmentMexicoAmount_7c995892-a03d-471f-9599-657ee1a84ccd": {
    "Id": "ar_pros_PrimaryOverallotmentMexicoAmount_7c995892-a03d-471f-9599-657ee1a84ccd",
    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoAmount",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoSecondaryAmount_1c1df501-2366-4de9-b438-171ab7563bc4": {
    "Id": "ar_pros_MexicoSecondaryAmount_1c1df501-2366-4de9-b438-171ab7563bc4",
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
  "ar_pros_MexicoOverallotmentSecondaryAmount_9abcea09-7ceb-42de-8989-800656a34c99": {
    "Id": "ar_pros_MexicoOverallotmentSecondaryAmount_9abcea09-7ceb-42de-8989-800656a34c99",
    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryAmount",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AdditionalOptions_69947c87-881c-4fe8-8dd7-8f8803d55972": {
    "Id": "ar_pros_AdditionalOptions_69947c87-881c-4fe8-8dd7-8f8803d55972",
    "IdConcepto": "ar_pros_AdditionalOptions",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AbroadPrimaryAmount_7462a7a6-f841-4f86-b78a-43fff4d5496c": {
    "Id": "ar_pros_AbroadPrimaryAmount_7462a7a6-f841-4f86-b78a-43fff4d5496c",
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
  "ar_pros_ForeignPrimaryOverAllotmentAmount_657b8f4f-73e9-40b4-8b28-fe606d95e98d": {
    "Id": "ar_pros_ForeignPrimaryOverAllotmentAmount_657b8f4f-73e9-40b4-8b28-fe606d95e98d",
    "IdConcepto": "ar_pros_ForeignPrimaryOverAllotmentAmount",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignSecondaryAmount_e031554e-eaa8-451f-8225-935cecb7f60e": {
    "Id": "ar_pros_ForeignSecondaryAmount_e031554e-eaa8-451f-8225-935cecb7f60e",
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
  "ar_pros_ForeignOverallotmentSecondaryAmount_9725dcf7-b57c-45e1-b3d2-ee8a2f876a63": {
    "Id": "ar_pros_ForeignOverallotmentSecondaryAmount_9725dcf7-b57c-45e1-b3d2-ee8a2f876a63",
    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryAmount",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AdditionalOptionsAbroad_88699987-5fbb-4034-b77f-ad2e5d0d8b76": {
    "Id": "ar_pros_AdditionalOptionsAbroad_88699987-5fbb-4034-b77f-ad2e5d0d8b76",
    "IdConcepto": "ar_pros_AdditionalOptionsAbroad",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary_3bc17af8-1da4-4b2b-b0c3-89c5eddcd7d9": {
    "Id": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary_3bc17af8-1da4-4b2b-b0c3-89c5eddcd7d9",
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
  "ar_pros_MexicoPrimaryNumberOfValues_77b019ca-9a74-4259-b81b-2dec2da66e64": {
    "Id": "ar_pros_MexicoPrimaryNumberOfValues_77b019ca-9a74-4259-b81b-2dec2da66e64",
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
  "ar_pros_PrimaryOverallotmentMexicoNumberOfValues_5f7f924d-a91a-4e8c-ad13-c44148ad6873": {
    "Id": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues_5f7f924d-a91a-4e8c-ad13-c44148ad6873",
    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoSecondaryNumberOfValues_90038f8d-32eb-49f8-8b3d-a1d0abf59b6e": {
    "Id": "ar_pros_MexicoSecondaryNumberOfValues_90038f8d-32eb-49f8-8b3d-a1d0abf59b6e",
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
  "ar_pros_MexicoOverallotmentSecondaryNumberOfValues_0033943a-69b1-49b3-91b7-753f845a44fd": {
    "Id": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues_0033943a-69b1-49b3-91b7-753f845a44fd",
    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AdditionalOptionsNumberOfValues_e5a5b252-271d-4cc8-8293-61cc3229b4cb": {
    "Id": "ar_pros_AdditionalOptionsNumberOfValues_e5a5b252-271d-4cc8-8293-61cc3229b4cb",
    "IdConcepto": "ar_pros_AdditionalOptionsNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AbroadPrimaryNumberOfValues_39fd4570-990a-4a14-b85f-fc2d1d555699": {
    "Id": "ar_pros_AbroadPrimaryNumberOfValues_39fd4570-990a-4a14-b85f-fc2d1d555699",
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
  "ar_pros_ForeignPrimaryOverallotmentNumberOfValues_18d0264f-96e6-4b11-875b-ca5412329fca": {
    "Id": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues_18d0264f-96e6-4b11-875b-ca5412329fca",
    "IdConcepto": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignSecondaryNumberOfValues_4e951289-3f7a-4dac-ad07-fe5cb778f571": {
    "Id": "ar_pros_ForeignSecondaryNumberOfValues_4e951289-3f7a-4dac-ad07-fe5cb778f571",
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
  "ar_pros_ForeignOverallotmentSecondaryNumberOfValues_c190991a-4cc9-483c-8b53-d55ffed9e9ff": {
    "Id": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues_c190991a-4cc9-483c-8b53-d55ffed9e9ff",
    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AdditionalOptionsAbroadRegistrationNumberValues_f9229f2f-c142-4a29-bd5b-990702829acb": {
    "Id": "ar_pros_AdditionalOptionsAbroadRegistrationNumberValues_f9229f2f-c142-4a29-bd5b-990702829acb",
    "IdConcepto": "ar_pros_AdditionalOptionsAbroadRegistrationNumberValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_PlacementPriceValues_50ed12d3-ba50-4cf5-b0d6-d6d97d8a23e6": {
    "Id": "ar_pros_PlacementPriceValues_50ed12d3-ba50-4cf5-b0d6-d6d97d8a23e6",
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
  "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_2574f8fe-ce66-4c90-bf08-d4a0c344e7e7": {
    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_2574f8fe-ce66-4c90-bf08-d4a0c344e7e7",
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
  "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_c952e5dd-e3ee-425b-9e9b-ae79973b9363": {
    "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_c952e5dd-e3ee-425b-9e9b-ae79973b9363",
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
  "ar_pros_ExchangeRateUDIValue_019a2986-eb04-484b-86a8-158227811572": {
    "Id": "ar_pros_ExchangeRateUDIValue_019a2986-eb04-484b-86a8-158227811572",
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
  "ar_pros_OtherConsiderationsOfSupply_5542ea0a-c762-4164-9327-6113986634dc": {
    "Id": "ar_pros_OtherConsiderationsOfSupply_5542ea0a-c762-4164-9327-6113986634dc",
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
  "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_18e6cc22-5d9a-45e0-9e4d-063853c68c97": {
    "Id": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_18e6cc22-5d9a-45e0-9e4d-063853c68c97",
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
  "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_0f9f4b92-284a-450f-898e-39b7a6eb8527": {
    "Id": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_0f9f4b92-284a-450f-898e-39b7a6eb8527",
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
  "ar_pros_PotentialAcquirers_29cca043-0ad5-4db3-9395-7425ac6464b5": {
    "Id": "ar_pros_PotentialAcquirers_29cca043-0ad5-4db3-9395-7425ac6464b5",
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
  "ar_pros_PossibleLimitations_af099c60-02e7-4a09-88cb-efc501ba48dd": {
    "Id": "ar_pros_PossibleLimitations_af099c60-02e7-4a09-88cb-efc501ba48dd",
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
  "ar_pros_TypeOfInvestorToWhichItIsAddressed_9029b628-6560-40ea-b75f-bc45dc75dbb8": {
    "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_9029b628-6560-40ea-b75f-bc45dc75dbb8",
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
  "ar_pros_TranscriptOfOtherRelevantTermsTitle_4da8dae6-ccfd-494d-86a9-bb5b19bb4604": {
    "Id": "ar_pros_TranscriptOfOtherRelevantTermsTitle_4da8dae6-ccfd-494d-86a9-bb5b19bb4604",
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
  "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources_3cc0b0ed-9cd5-4e74-8445-d864171a88ff": {
    "Id": "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources_3cc0b0ed-9cd5-4e74-8445-d864171a88ff",
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
  "ar_pros_FiscalRegimeApplicable_9f7b0008-d72c-468f-8c51-a3e5e22cd8ca": {
    "Id": "ar_pros_FiscalRegimeApplicable_9f7b0008-d72c-468f-8c51-a3e5e22cd8ca",
    "IdConcepto": "ar_pros_FiscalRegimeApplicable",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SpecifyIfTheGoodsAreInsured_394ce6d7-65e4-4c17-9b43-2ef24ca1ceea": {
    "Id": "ar_pros_SpecifyIfTheGoodsAreInsured_394ce6d7-65e4-4c17-9b43-2ef24ca1ceea",
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
  "ar_pros_UseOfFunds_e2c84523-1403-42a3-a7ee-f855dbc46bc9": {
    "Id": "ar_pros_UseOfFunds_e2c84523-1403-42a3-a7ee-f855dbc46bc9",
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
  "ar_pros_DistributionPlan_efec1dc9-1e9f-4b55-8414-37e7d57f04a2": {
    "Id": "ar_pros_DistributionPlan_efec1dc9-1e9f-4b55-8414-37e7d57f04a2",
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
  "ar_pros_ParticipantName_dedba434-a64e-4ef2-920a-256700ace402": {
    "Id": "ar_pros_ParticipantName_dedba434-a64e-4ef2-920a-256700ace402",
    "IdConcepto": "ar_pros_ParticipantName",
    "IdContextoPlantilla": "ctx_1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SignificantParticipationInTheOffer_2eea7ca0-d2fd-455f-a654-15942d2aa9b7": {
    "Id": "ar_pros_SignificantParticipationInTheOffer_2eea7ca0-d2fd-455f-a654-15942d2aa9b7",
    "IdConcepto": "ar_pros_SignificantParticipationInTheOffer",
    "IdContextoPlantilla": "ctx_1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultSignificantParticipationInTheOffer"
  },
  "ar_pros_InTheCaseOfAdditionalValues_a8fd6cd9-caa6-4a29-ad44-e9d619aff705": {
    "Id": "ar_pros_InTheCaseOfAdditionalValues_a8fd6cd9-caa6-4a29-ad44-e9d619aff705",
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
  "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_23bf1abe-b963-46d5-a207-a40681af88c2": {
    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_23bf1abe-b963-46d5-a207-a40681af88c2",
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
  "ar_pros_TotalAmountOfSecurities_d44161c4-31e3-4eda-a26a-c1672137a375": {
    "Id": "ar_pros_TotalAmountOfSecurities_d44161c4-31e3-4eda-a26a-c1672137a375",
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
  "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_30e22018-bace-435e-baf1-9549b4e30b71": {
    "Id": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_30e22018-bace-435e-baf1-9549b4e30b71",
    "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_FeaturesCommonRepresentative_837ef43c-0d15-41e6-8266-01841c6f9cba": {
      "Id": "ar_pros_FeaturesCommonRepresentative_837ef43c-0d15-41e6-8266-01841c6f9cba",
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
  "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer_52a6581a-ba1f-472d-b458-ff1e764b7127": {
      "Id": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer_52a6581a-ba1f-472d-b458-ff1e764b7127",
      "IdConcepto": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer",
      "IdContextoPlantilla": "ctx",
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