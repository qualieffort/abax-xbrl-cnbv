///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/414000-HBIS
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS
         */
        constructor() {

            this.ListadoDeFormulas = {

                'LA_OFERTA_no_vacio__ar_pros_CharacteristicsOfTheValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_no_vacio__ar_pros_CharacteristicsOfTheValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CharacteristicsOfTheValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_no_vacio__ar_pros_InsertACopyOfTheResultOfTheOpinionOfNacionalFinancieraSnc': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_no_vacio__ar_pros_InsertACopyOfTheResultOfTheOpinionOfNacionalFinancieraSnc',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InsertACopyOfTheResultOfTheOpinionOfNacionalFinancieraSnc',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_TypeOfOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_TypeOfOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
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
                            }
                        }
                    }
                ),
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
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
                            }
                        }
                    }
                ),
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_NumerationOfPossibleAcquirers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_NumerationOfPossibleAcquirers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumerationOfPossibleAcquirers",
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
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_PossibleLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_PossibleLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
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
                            }
                        }
                    }
                ),
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders",
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
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented",
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
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_RedemptionDateIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_RedemptionDateIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_RedemptionDateIfAny",
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
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation",
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
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation",
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
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_SummaryOfTheIndenture': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_SummaryOfTheIndenture',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SummaryOfTheIndenture",
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
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_DistributionPlan': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_DistributionPlan',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
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
                            }
                        }
                    }
                ),
                'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_ParticipantName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_LA_OFERTA_obligatorio_condicional_prospecto__ar_pros_ParticipantName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ParticipantName",
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
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_PrimaryOverallotmentMexicoAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_PrimaryOverallotmentMexicoAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AbroadPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AbroadPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignPrimaryOverAllotmentAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignPrimaryOverAllotmentAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoPrimaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoPrimaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_PrimaryOverallotmentMexicoNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_PrimaryOverallotmentMexicoNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoSecondaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoSecondaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoOverallotmentSecondaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MexicoOverallotmentSecondaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AbroadPrimaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AbroadPrimaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignPrimaryOverallotmentNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignPrimaryOverallotmentNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignSecondaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignSecondaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignOverallotmentSecondaryNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ForeignOverallotmentSecondaryNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_PlacementPriceValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_PlacementPriceValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_DescriptionOfHowThePlacementPriceIsDetermined',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ExchangeRateUDIValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ExchangeRateUDIValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_OtherConsiderationsOfSupply': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_OtherConsiderationsOfSupply',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_TypeOfInvestorToWhichItIsAddressed': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_TypeOfInvestorToWhichItIsAddressed',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AmountOfFixedCapitalBeforePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AmountOfFixedCapitalBeforePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AmountOfVariableCapitalBeforePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AmountOfVariableCapitalBeforePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AmountOfFixedCapitalAfterPlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AmountOfFixedCapitalAfterPlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AmountVariableShareCapitalAfterThePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_AmountVariableShareCapitalAfterThePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_PercentageThatRepresentsTheAmountPlaced': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_PercentageThatRepresentsTheAmountPlaced',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PercentageThatRepresentsTheAmountPlaced",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_UseOfFunds': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_UseOfFunds',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_CapitalStructureAfterTheOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_CapitalStructureAfterTheOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_Dilution': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_Dilution',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_SellingShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_SellingShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MarketInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_MarketInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_NameOfTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_NameOfTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_DurationOfTheContractWithTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_DurationOfTheContractWithTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ListedSerie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_ListedSerie',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_InvestorName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_InvestorName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InvestorName",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_FoundingShareholdersName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_EmisionUnica__ar_pros_FoundingShareholdersName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_FoundingShareholdersName",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_renglon_tabla_caracteristicas_de_las_series_en_circulacion_ar_pros_ListedSerie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_renglon_tabla_caracteristicas_de_las_series_en_circulacion_ar_pros_ListedSerie',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ListedSerie',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_renglon_tabla_caracteristicas_de_las_series_en_circulacion_ar_pros_TheNumberOfSharesOutstandingPriorToThePublicOfferingClassifiedBySeries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_renglon_tabla_caracteristicas_de_las_series_en_circulacion_ar_pros_TheNumberOfSharesOutstandingPriorToThePublicOfferingClassifiedBySeries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TheNumberOfSharesOutstandingPriorToThePublicOfferingClassifiedBySeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_renglon_tabla_caracteristicas_de_las_series_en_circulacion_ar_pros_TheNumberOfSharesOutstandingAfterThePublicOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_renglon_tabla_caracteristicas_de_las_series_en_circulacion_ar_pros_TheNumberOfSharesOutstandingAfterThePublicOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TheNumberOfSharesOutstandingAfterThePublicOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_renglon_tabla_caracteristicas_de_las_series_en_circulacion_ar_pros_IndicateTheTypeOfSharesAndCorporateRightsConferred': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_renglon_tabla_caracteristicas_de_las_series_en_circulacion_ar_pros_IndicateTheTypeOfSharesAndCorporateRightsConferred',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IndicateTheTypeOfSharesAndCorporateRightsConferred',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsBeforeTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsBeforeTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueBeforeTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueBeforeTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaBeforeTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaBeforeTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleBeforeBid': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleBeforeBid',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsAfterTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsAfterTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueAfterTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueAfterTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaAfterTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaAfterTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleAfterTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleAfterTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsBeforeTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsBeforeTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueBeforeTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueBeforeTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaBeforeTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaBeforeTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleBeforeBid_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleBeforeBid_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsAfterTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsAfterTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueAfterTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueAfterTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaAfterTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaAfterTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleAfterTheOffer_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleAfterTheOffer_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsBeforeTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsBeforeTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueBeforeTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueBeforeTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaBeforeTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaBeforeTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleBeforeBid_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleBeforeBid_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsAfterTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEarningsAfterTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueAfterTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceBookValueAfterTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaAfterTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_MultiplePriceEbitdaAfterTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleAfterTheOffer_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Multiplos__ar_pros_OtherMultipleAfterTheOffer_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
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
                            }
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
                'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_AmountOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_AmountOfferCost',
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
                'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_IvaOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_IvaOfferCost',
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
                'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_TotalOfferCost': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_TotalOfferCost',
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
                'LA_OFERTA_obligatorio_renglon_tabla_Accionistas_fundadores_ar_pros_FoundingShareholdersName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Accionistas_fundadores_ar_pros_FoundingShareholdersName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FoundingShareholdersName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Accionistas_fundadores_ar_pros_FoundingShareholderPosition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Accionistas_fundadores_ar_pros_FoundingShareholderPosition',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FoundingShareholderPosition',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx_2014": {
    "Id": "ctx_2014",
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
  "ctx_tipoMultiplo_presentarMultiplos": {
    "Id": "ctx_tipoMultiplo_presentarMultiplos",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfMultiplesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:PresentMultiplesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfMultiplesAxis",
        "IdItemMiembro": "ar_pros_PresentMultiplesMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PresentMultiplesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "ctx_tipoMultiplo_multiplosSectorORamo": {
    "Id": "ctx_tipoMultiplo_multiplosSectorORamo",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfMultiplesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:MultiplesOfSectorOrBranchMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfMultiplesAxis",
        "IdItemMiembro": "ar_pros_MultiplesOfSectorOrBranchMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MultiplesOfSectorOrBranchMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "ctx_tipoMultiplo_multiplosDelMercado": {
    "Id": "ctx_tipoMultiplo_multiplosDelMercado",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfMultiplesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:MarketMultiplesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfMultiplesAxis",
        "IdItemMiembro": "ar_pros_MarketMultiplesMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MarketMultiplesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  }
};

            this.UnidadesPlantillaPorId = {
  "MXN": {
    "Id": "MXN",
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
  "ar_pros_CharacteristicsOfTheValues_4891121c-0bb6-42e3-be1c-f9c311d29376": {
    "Id": "ar_pros_CharacteristicsOfTheValues_4891121c-0bb6-42e3-be1c-f9c311d29376",
    "IdConcepto": "ar_pros_CharacteristicsOfTheValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TypeOfOffer_64745a5c-dc04-4f7e-835a-a826b8255148": {
    "Id": "ar_pros_TypeOfOffer_64745a5c-dc04-4f7e-835a-a826b8255148",
    "IdConcepto": "ar_pros_TypeOfOffer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTypeOfOffer"
  },
  "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary_48de5982-927a-4cb9-8cb3-42531e601f62": {
    "Id": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary_48de5982-927a-4cb9-8cb3-42531e601f62",
    "IdConcepto": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoPrimaryAmount_31111d17-07a7-45e1-ac16-d9454ea67da6": {
    "Id": "ar_pros_MexicoPrimaryAmount_31111d17-07a7-45e1-ac16-d9454ea67da6",
    "IdConcepto": "ar_pros_MexicoPrimaryAmount",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_PrimaryOverallotmentMexicoAmount_6f646d00-b7d8-4f60-a3ee-fb4db4536cb3": {
    "Id": "ar_pros_PrimaryOverallotmentMexicoAmount_6f646d00-b7d8-4f60-a3ee-fb4db4536cb3",
    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoAmount",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoSecondaryAmount_98723ef5-79e2-4eb6-a5e8-2c6dbc6aeab2": {
    "Id": "ar_pros_MexicoSecondaryAmount_98723ef5-79e2-4eb6-a5e8-2c6dbc6aeab2",
    "IdConcepto": "ar_pros_MexicoSecondaryAmount",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoOverallotmentSecondaryAmount_9e7364b0-0554-4924-b1e4-e8b6dc311774": {
    "Id": "ar_pros_MexicoOverallotmentSecondaryAmount_9e7364b0-0554-4924-b1e4-e8b6dc311774",
    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryAmount",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AbroadPrimaryAmount_a70f21a3-5859-43c7-861c-4452f287fd2d": {
    "Id": "ar_pros_AbroadPrimaryAmount_a70f21a3-5859-43c7-861c-4452f287fd2d",
    "IdConcepto": "ar_pros_AbroadPrimaryAmount",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignPrimaryOverAllotmentAmount_a165de3a-6443-4971-a4ae-35f52e128165": {
    "Id": "ar_pros_ForeignPrimaryOverAllotmentAmount_a165de3a-6443-4971-a4ae-35f52e128165",
    "IdConcepto": "ar_pros_ForeignPrimaryOverAllotmentAmount",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignSecondaryAmount_3b1d6310-c05a-4a1d-bced-e7d0a1db4a28": {
    "Id": "ar_pros_ForeignSecondaryAmount_3b1d6310-c05a-4a1d-bced-e7d0a1db4a28",
    "IdConcepto": "ar_pros_ForeignSecondaryAmount",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignOverallotmentSecondaryAmount_0042be31-603c-411a-8afb-1847fe4aad12": {
    "Id": "ar_pros_ForeignOverallotmentSecondaryAmount_0042be31-603c-411a-8afb-1847fe4aad12",
    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryAmount",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary_7275e25f-4b76-4059-a7f1-df3f84262d72": {
    "Id": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary_7275e25f-4b76-4059-a7f1-df3f84262d72",
    "IdConcepto": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoPrimaryNumberOfValues_6fe6efac-0765-4c4b-b19e-da5bcdaabb58": {
    "Id": "ar_pros_MexicoPrimaryNumberOfValues_6fe6efac-0765-4c4b-b19e-da5bcdaabb58",
    "IdConcepto": "ar_pros_MexicoPrimaryNumberOfValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_PrimaryOverallotmentMexicoNumberOfValues_a4c120d8-97d6-4893-bb9f-35de9d13f85a": {
    "Id": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues_a4c120d8-97d6-4893-bb9f-35de9d13f85a",
    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoSecondaryNumberOfValues_8c95889a-f0df-4361-8c77-f47e90760fd6": {
    "Id": "ar_pros_MexicoSecondaryNumberOfValues_8c95889a-f0df-4361-8c77-f47e90760fd6",
    "IdConcepto": "ar_pros_MexicoSecondaryNumberOfValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoOverallotmentSecondaryNumberOfValues_7d5035df-f835-4c33-ab8e-c464d084ed4f": {
    "Id": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues_7d5035df-f835-4c33-ab8e-c464d084ed4f",
    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AbroadPrimaryNumberOfValues_c64a3375-d724-4e4e-a122-2adfb4f1385a": {
    "Id": "ar_pros_AbroadPrimaryNumberOfValues_c64a3375-d724-4e4e-a122-2adfb4f1385a",
    "IdConcepto": "ar_pros_AbroadPrimaryNumberOfValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignPrimaryOverallotmentNumberOfValues_9aeba9b8-9f08-4ee5-8e5c-1c458441ae59": {
    "Id": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues_9aeba9b8-9f08-4ee5-8e5c-1c458441ae59",
    "IdConcepto": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignSecondaryNumberOfValues_c369b204-0f8c-4e26-93c6-0560daad6bca": {
    "Id": "ar_pros_ForeignSecondaryNumberOfValues_c369b204-0f8c-4e26-93c6-0560daad6bca",
    "IdConcepto": "ar_pros_ForeignSecondaryNumberOfValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignOverallotmentSecondaryNumberOfValues_76b1e620-c426-48e1-b6a4-168f44cbd849": {
    "Id": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues_76b1e620-c426-48e1-b6a4-168f44cbd849",
    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_PlacementPriceValues_06f201bb-2cf7-43d3-9a6e-f6d00d2ab2a0": {
    "Id": "ar_pros_PlacementPriceValues_06f201bb-2cf7-43d3-9a6e-f6d00d2ab2a0",
    "IdConcepto": "ar_pros_PlacementPriceValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_c1e463d8-c75f-468e-b511-093f60950eab": {
    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_c1e463d8-c75f-468e-b511-093f60950eab",
    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_bc345cab-c9b8-4df5-8306-5f36f1b3c35f": {
    "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_bc345cab-c9b8-4df5-8306-5f36f1b3c35f",
    "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNameOfTheReferenceCurrencyInWhichTheIssueIsMade"
  },
  "ar_pros_ExchangeRateUDIValue_95faa017-e888-4fd9-964b-40bd5bd074b9": {
    "Id": "ar_pros_ExchangeRateUDIValue_95faa017-e888-4fd9-964b-40bd5bd074b9",
    "IdConcepto": "ar_pros_ExchangeRateUDIValue",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherConsiderationsOfSupply_a1c06ba7-9705-4270-bbfb-b38fcd09d76a": {
    "Id": "ar_pros_OtherConsiderationsOfSupply_a1c06ba7-9705-4270-bbfb-b38fcd09d76a",
    "IdConcepto": "ar_pros_OtherConsiderationsOfSupply",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_2fab472a-162a-4817-8401-7205010ba65d": {
    "Id": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_2fab472a-162a-4817-8401-7205010ba65d",
    "IdConcepto": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_690d8851-78fe-4e49-88a7-c8947e771e42": {
    "Id": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_690d8851-78fe-4e49-88a7-c8947e771e42",
    "IdConcepto": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NumerationOfPossibleAcquirers_06f9b443-40bf-41f5-bd68-75268f2e52fd": {
    "Id": "ar_pros_NumerationOfPossibleAcquirers_06f9b443-40bf-41f5-bd68-75268f2e52fd",
    "IdConcepto": "ar_pros_NumerationOfPossibleAcquirers",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNumerationOfPossibleAcquirers"
  },
  "ar_pros_PossibleLimitations_2d143fb1-9ce2-469f-9062-9f194802d428": {
    "Id": "ar_pros_PossibleLimitations_2d143fb1-9ce2-469f-9062-9f194802d428",
    "IdConcepto": "ar_pros_PossibleLimitations",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TypeOfInvestorToWhichItIsAddressed_146e43e4-987f-4a67-a33a-57de9252d58f": {
    "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_146e43e4-987f-4a67-a33a-57de9252d58f",
    "IdConcepto": "ar_pros_TypeOfInvestorToWhichItIsAddressed",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders_0d869dcf-cafe-4637-b06d-ab7d14ce35a6": {
    "Id": "ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders_0d869dcf-cafe-4637-b06d-ab7d14ce35a6",
    "IdConcepto": "ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AmountOfFixedCapitalBeforePlacement_6ffef076-b181-4fe5-a24a-43c077e0a598": {
    "Id": "ar_pros_AmountOfFixedCapitalBeforePlacement_6ffef076-b181-4fe5-a24a-43c077e0a598",
    "IdConcepto": "ar_pros_AmountOfFixedCapitalBeforePlacement",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AmountOfVariableCapitalBeforePlacement_64613a5a-fa3f-4cde-a154-c5fafe1d1856": {
    "Id": "ar_pros_AmountOfVariableCapitalBeforePlacement_64613a5a-fa3f-4cde-a154-c5fafe1d1856",
    "IdConcepto": "ar_pros_AmountOfVariableCapitalBeforePlacement",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AmountOfFixedCapitalAfterPlacement_960446d3-25da-4bc3-9bf9-231426c60712": {
    "Id": "ar_pros_AmountOfFixedCapitalAfterPlacement_960446d3-25da-4bc3-9bf9-231426c60712",
    "IdConcepto": "ar_pros_AmountOfFixedCapitalAfterPlacement",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AmountVariableShareCapitalAfterThePlacement_7f472199-7fe3-456f-ba12-1f3fc4e2c104": {
    "Id": "ar_pros_AmountVariableShareCapitalAfterThePlacement_7f472199-7fe3-456f-ba12-1f3fc4e2c104",
    "IdConcepto": "ar_pros_AmountVariableShareCapitalAfterThePlacement",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_PercentageThatRepresentsTheAmountPlaced_98d30990-8934-4d9c-9966-d84600555def": {
    "Id": "ar_pros_PercentageThatRepresentsTheAmountPlaced_98d30990-8934-4d9c-9966-d84600555def",
    "IdConcepto": "ar_pros_PercentageThatRepresentsTheAmountPlaced",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer_5130abd8-e2a4-495d-93c9-c122d5492ee4": {
    "Id": "ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer_5130abd8-e2a4-495d-93c9-c122d5492ee4",
    "IdConcepto": "ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed_0c8819f8-7372-4796-8035-4ee1acaaf361": {
    "Id": "ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed_0c8819f8-7372-4796-8035-4ee1acaaf361",
    "IdConcepto": "ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultDateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed"
  },
  "ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented_a4845b91-f5f4-45f9-8165-c5f29644d3fe": {
    "Id": "ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented_a4845b91-f5f4-45f9-8165-c5f29644d3fe",
    "IdConcepto": "ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RedemptionDateIfAny_86b45215-bbad-4965-8960-ddb751064caa": {
    "Id": "ar_pros_RedemptionDateIfAny_86b45215-bbad-4965-8960-ddb751064caa",
    "IdConcepto": "ar_pros_RedemptionDateIfAny",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultRedemptionDateIfAny"
  },
  "ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation_f6742c85-183e-4ada-bc89-5387dd4ddc94": {
    "Id": "ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation_f6742c85-183e-4ada-bc89-5387dd4ddc94",
    "IdConcepto": "ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultIndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation"
  },
  "ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation_eb700b16-2b1b-4a64-a939-1d63442d670a": {
    "Id": "ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation_eb700b16-2b1b-4a64-a939-1d63442d670a",
    "IdConcepto": "ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEarningsBeforeTheOffer_725b02d0-51ed-45da-b46f-7613af80b043": {
    "Id": "ar_pros_MultiplePriceEarningsBeforeTheOffer_725b02d0-51ed-45da-b46f-7613af80b043",
    "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEarningsBeforeTheOffer_a9979549-432f-4e35-bf68-af89bd97fdbc": {
    "Id": "ar_pros_MultiplePriceEarningsBeforeTheOffer_a9979549-432f-4e35-bf68-af89bd97fdbc",
    "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEarningsBeforeTheOffer_4199a9be-05a4-47d9-b2f4-71632fa71dee": {
    "Id": "ar_pros_MultiplePriceEarningsBeforeTheOffer_4199a9be-05a4-47d9-b2f4-71632fa71dee",
    "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceBookValueBeforeTheOffer_deb1eaa6-8b95-47d2-881f-d06482b7bc4f": {
    "Id": "ar_pros_MultiplePriceBookValueBeforeTheOffer_deb1eaa6-8b95-47d2-881f-d06482b7bc4f",
    "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceBookValueBeforeTheOffer_33f84bd2-9f10-42ea-a26d-faaa96e160c6": {
    "Id": "ar_pros_MultiplePriceBookValueBeforeTheOffer_33f84bd2-9f10-42ea-a26d-faaa96e160c6",
    "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceBookValueBeforeTheOffer_67ac3843-58fa-4b59-b56e-5c4cd43a0ab0": {
    "Id": "ar_pros_MultiplePriceBookValueBeforeTheOffer_67ac3843-58fa-4b59-b56e-5c4cd43a0ab0",
    "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEbitdaBeforeTheOffer_057645f6-d1e3-4745-a1f5-00b53d28151b": {
    "Id": "ar_pros_MultiplePriceEbitdaBeforeTheOffer_057645f6-d1e3-4745-a1f5-00b53d28151b",
    "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEbitdaBeforeTheOffer_6fe7f45a-67c9-45a7-bac8-1f44efafcd2c": {
    "Id": "ar_pros_MultiplePriceEbitdaBeforeTheOffer_6fe7f45a-67c9-45a7-bac8-1f44efafcd2c",
    "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEbitdaBeforeTheOffer_ef3cd73b-034b-45fb-a209-f6edc3b355e0": {
    "Id": "ar_pros_MultiplePriceEbitdaBeforeTheOffer_ef3cd73b-034b-45fb-a209-f6edc3b355e0",
    "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_2add9323-e679-44e8-82db-07cb8937712a": {
    "Id": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_2add9323-e679-44e8-82db-07cb8937712a",
    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_8352c799-2e54-4ca1-896f-7456ae86fcc9": {
    "Id": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_8352c799-2e54-4ca1-896f-7456ae86fcc9",
    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_74877477-8733-4b44-bbb5-358b8aa85d6e": {
    "Id": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_74877477-8733-4b44-bbb5-358b8aa85d6e",
    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_OtherMultipleBeforeBid_158171fe-eeb0-4883-97b6-0d56c0709f3d": {
    "Id": "ar_pros_OtherMultipleBeforeBid_158171fe-eeb0-4883-97b6-0d56c0709f3d",
    "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_OtherMultipleBeforeBid_52a9d83f-baab-4121-8952-0ba4b215f303": {
    "Id": "ar_pros_OtherMultipleBeforeBid_52a9d83f-baab-4121-8952-0ba4b215f303",
    "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_OtherMultipleBeforeBid_3c15261d-46e4-4381-aa0b-2c12d07fabb1": {
    "Id": "ar_pros_OtherMultipleBeforeBid_3c15261d-46e4-4381-aa0b-2c12d07fabb1",
    "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEarningsAfterTheOffer_5a0e4263-c749-4a66-9e48-531946fc4144": {
    "Id": "ar_pros_MultiplePriceEarningsAfterTheOffer_5a0e4263-c749-4a66-9e48-531946fc4144",
    "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEarningsAfterTheOffer_48884992-2f77-4feb-b36a-4bce752f64b8": {
    "Id": "ar_pros_MultiplePriceEarningsAfterTheOffer_48884992-2f77-4feb-b36a-4bce752f64b8",
    "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEarningsAfterTheOffer_9b11224d-b8a3-4166-8b2c-6b604b04be70": {
    "Id": "ar_pros_MultiplePriceEarningsAfterTheOffer_9b11224d-b8a3-4166-8b2c-6b604b04be70",
    "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceBookValueAfterTheOffer_c01e2ae1-e1a7-4585-b09c-579d7658ad86": {
    "Id": "ar_pros_MultiplePriceBookValueAfterTheOffer_c01e2ae1-e1a7-4585-b09c-579d7658ad86",
    "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceBookValueAfterTheOffer_725ae0d3-4aca-40e4-9d5c-85c07dd08800": {
    "Id": "ar_pros_MultiplePriceBookValueAfterTheOffer_725ae0d3-4aca-40e4-9d5c-85c07dd08800",
    "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceBookValueAfterTheOffer_61f487d0-fc11-4870-bd98-3bb1a0817e90": {
    "Id": "ar_pros_MultiplePriceBookValueAfterTheOffer_61f487d0-fc11-4870-bd98-3bb1a0817e90",
    "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEbitdaAfterTheOffer_b823a392-4373-4110-87a5-e9e3ce886fec": {
    "Id": "ar_pros_MultiplePriceEbitdaAfterTheOffer_b823a392-4373-4110-87a5-e9e3ce886fec",
    "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEbitdaAfterTheOffer_3950f809-baba-48a7-8f8a-f56200bb707c": {
    "Id": "ar_pros_MultiplePriceEbitdaAfterTheOffer_3950f809-baba-48a7-8f8a-f56200bb707c",
    "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MultiplePriceEbitdaAfterTheOffer_60c5f176-9c60-4085-a7ee-0a9313d0eddb": {
    "Id": "ar_pros_MultiplePriceEbitdaAfterTheOffer_60c5f176-9c60-4085-a7ee-0a9313d0eddb",
    "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_d4f1bd2b-018d-4dd0-b402-dee9ef363742": {
    "Id": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_d4f1bd2b-018d-4dd0-b402-dee9ef363742",
    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_9fb53b2c-94b2-4ee2-ae2c-ad5b2f71286c": {
    "Id": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_9fb53b2c-94b2-4ee2-ae2c-ad5b2f71286c",
    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_95fd58cf-2bdb-4927-8743-5ecc3d34dea8": {
    "Id": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_95fd58cf-2bdb-4927-8743-5ecc3d34dea8",
    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_OtherMultipleAfterTheOffer_89c4de8a-7dee-465c-8aac-92f96b7b01b7": {
    "Id": "ar_pros_OtherMultipleAfterTheOffer_89c4de8a-7dee-465c-8aac-92f96b7b01b7",
    "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_OtherMultipleAfterTheOffer_79688641-4883-41b4-99c2-f56b042a7f04": {
    "Id": "ar_pros_OtherMultipleAfterTheOffer_79688641-4883-41b4-99c2-f56b042a7f04",
    "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_OtherMultipleAfterTheOffer_9c7f0715-1e97-44bc-a4a1-fa6e1003f06b": {
    "Id": "ar_pros_OtherMultipleAfterTheOffer_9c7f0715-1e97-44bc-a4a1-fa6e1003f06b",
    "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_InsertACopyOfTheResultOfTheOpinionOfNacionalFinancieraSnc_4105a1b3-fc80-4888-9156-adb2828f5b8e": {
    "Id": "ar_pros_InsertACopyOfTheResultOfTheOpinionOfNacionalFinancieraSnc_4105a1b3-fc80-4888-9156-adb2828f5b8e",
    "IdConcepto": "ar_pros_InsertACopyOfTheResultOfTheOpinionOfNacionalFinancieraSnc",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SummaryOfTheIndenture_84c4328e-f564-404b-9797-0ad38eda0927": {
    "Id": "ar_pros_SummaryOfTheIndenture_84c4328e-f564-404b-9797-0ad38eda0927",
    "IdConcepto": "ar_pros_SummaryOfTheIndenture",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_UseOfFunds_194c03a1-9400-40d3-a1b0-19e8bf8c5636": {
    "Id": "ar_pros_UseOfFunds_194c03a1-9400-40d3-a1b0-19e8bf8c5636",
    "IdConcepto": "ar_pros_UseOfFunds",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DistributionPlan_27a4c211-12cf-42a5-af48-2ad3b51a3140": {
    "Id": "ar_pros_DistributionPlan_27a4c211-12cf-42a5-af48-2ad3b51a3140",
    "IdConcepto": "ar_pros_DistributionPlan",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CapitalStructureAfterTheOffering_d1dcc424-123b-461b-9220-553ea5076716": {
    "Id": "ar_pros_CapitalStructureAfterTheOffering_d1dcc424-123b-461b-9220-553ea5076716",
    "IdConcepto": "ar_pros_CapitalStructureAfterTheOffering",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer_cfc4ffce-9e81-4dea-a2b4-4ad1bf2c0451": {
    "Id": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer_cfc4ffce-9e81-4dea-a2b4-4ad1bf2c0451",
    "IdConcepto": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Dilution_75083bae-6429-49ea-b04d-0cb6dc8ecc88": {
    "Id": "ar_pros_Dilution_75083bae-6429-49ea-b04d-0cb6dc8ecc88",
    "IdConcepto": "ar_pros_Dilution",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SellingShareholders_cc93c30f-125d-42d7-9444-23575229c24e": {
    "Id": "ar_pros_SellingShareholders_cc93c30f-125d-42d7-9444-23575229c24e",
    "IdConcepto": "ar_pros_SellingShareholders",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MarketInformation_dc7e151c-311c-4ef9-96cd-100506fd999f": {
    "Id": "ar_pros_MarketInformation_dc7e151c-311c-4ef9-96cd-100506fd999f",
    "IdConcepto": "ar_pros_MarketInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTheMarketMaker_6534814c-fd5f-43f8-82b9-bd21c528de28": {
    "Id": "ar_pros_NameOfTheMarketMaker_6534814c-fd5f-43f8-82b9-bd21c528de28",
    "IdConcepto": "ar_pros_NameOfTheMarketMaker",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker_87fb4f5e-3184-40f6-b2f2-f832f55e59d1": {
    "Id": "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker_87fb4f5e-3184-40f6-b2f2-f832f55e59d1",
    "IdConcepto": "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DurationOfTheContractWithTheMarketMaker_acbbe1d9-5a13-4032-8214-4f9b216b5614": {
    "Id": "ar_pros_DurationOfTheContractWithTheMarketMaker_acbbe1d9-5a13-4032-8214-4f9b216b5614",
    "IdConcepto": "ar_pros_DurationOfTheContractWithTheMarketMaker",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker_0c69e530-0a06-4741-badc-26b435ea69a4": {
    "Id": "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker_0c69e530-0a06-4741-badc-26b435ea69a4",
    "IdConcepto": "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker",
    "IdContextoPlantilla": "ctx_2014",
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