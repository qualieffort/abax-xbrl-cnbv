///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/414000-HBIS4
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS4 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS4
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_CharacteristicsOfTheValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_CharacteristicsOfTheValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_CharacteristicsOfTheValues",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_InvestorName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_InvestorName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_ParticipantName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_Prospecto__ar_pros_ParticipantName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
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
                'Obligatorio_Posibles_Adquirentes_ar_pros_PossiblePurchasers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Posibles_Adquirentes_ar_pros_PossiblePurchasers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PossiblePurchasers',
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
                ),
                'obligatorio_condicional_posibles_limitantes_ar_pros_LimitedPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'obligatorio_condicional_posibles_limitantes_ar_pros_LimitedPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
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
                                IdConcepto: 'ar_pros_PossibleLimitations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Condicional_Emision_Unica_Prospecto__ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto__ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or  variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
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
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Emision_Unica_Prospecto__ar_pros_MaximumNumberOfSecuritiesToBeRegistered': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto__ar_pros_MaximumNumberOfSecuritiesToBeRegistered',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or  variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered",
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
                'Obligatorio_Condicional_Emision_Unica_Prospecto__ar_pros_TotalAmountOfTheIssueWithCapitalCalls': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto__ar_pros_TotalAmountOfTheIssueWithCapitalCalls',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or  variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls",
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ExchangeRateUDIValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_ExchangeRateUDIValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
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
                            }
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_SellingShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_SellingShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DescriptionOfHowThePlacementPriceWasDetermined': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_Suplemento_EmisionUnica__ar_pros_DescriptionOfHowThePlacementPriceWasDetermined',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceWasDetermined",
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
                'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_SignificantParticipationInTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_otros_miembros_tabla_Pasticipantes_en_la_oferta_ar_pros_SignificantParticipationInTheOffer',
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
                )
            };

            this.ContextosPlantillaPorId = {
  "cxt": {
    "Id": "cxt",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2016_07_25",
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
  "ar_pros_CharacteristicsOfTheValues_35e241dd-a0fe-4f9b-b2d9-cbe6669026c9": {
    "Id": "ar_pros_CharacteristicsOfTheValues_35e241dd-a0fe-4f9b-b2d9-cbe6669026c9",
    "IdConcepto": "ar_pros_CharacteristicsOfTheValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TypeOfOffer_d8c64087-c43e-4e34-8b39-7c2e00cefed8": {
    "Id": "ar_pros_TypeOfOffer_d8c64087-c43e-4e34-8b39-7c2e00cefed8",
    "IdConcepto": "ar_pros_TypeOfOffer",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTypeOfOffer"
  },
  "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_7e4ba839-f87b-4207-be90-b02c9a62cf83": {
    "Id": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_7e4ba839-f87b-4207-be90-b02c9a62cf83",
    "IdConcepto": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_03a40816-b552-4fe1-9ea9-a59d7ac3c273": {
    "Id": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_03a40816-b552-4fe1-9ea9-a59d7ac3c273",
    "IdConcepto": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_698ea542-d2bf-42ee-b5a3-304c0fd3c2b7": {
    "Id": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_698ea542-d2bf-42ee-b5a3-304c0fd3c2b7",
    "IdConcepto": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultDesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized"
  },
  "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary_a1ab1867-c48d-457c-81ec-192b383f2c13": {
    "Id": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary_a1ab1867-c48d-457c-81ec-192b383f2c13",
    "IdConcepto": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoPrimaryAmount_7d378b2c-53a6-4248-bf52-6db69053b0f0": {
    "Id": "ar_pros_MexicoPrimaryAmount_7d378b2c-53a6-4248-bf52-6db69053b0f0",
    "IdConcepto": "ar_pros_MexicoPrimaryAmount",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_PrimaryOverallotmentMexicoAmount_e6d1b7dd-b769-4691-a7ea-052a6017c4c8": {
    "Id": "ar_pros_PrimaryOverallotmentMexicoAmount_e6d1b7dd-b769-4691-a7ea-052a6017c4c8",
    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoAmount",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoSecondaryAmount_268fd763-9c24-4903-9ac7-032a21e2258f": {
    "Id": "ar_pros_MexicoSecondaryAmount_268fd763-9c24-4903-9ac7-032a21e2258f",
    "IdConcepto": "ar_pros_MexicoSecondaryAmount",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoOverallotmentSecondaryAmount_53b92cd5-a3dd-481a-91ef-0ce403c5cbc0": {
    "Id": "ar_pros_MexicoOverallotmentSecondaryAmount_53b92cd5-a3dd-481a-91ef-0ce403c5cbc0",
    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryAmount",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AbroadPrimaryAmount_7c9c4cd1-68d5-4bd8-80b6-8f6670df3bbd": {
    "Id": "ar_pros_AbroadPrimaryAmount_7c9c4cd1-68d5-4bd8-80b6-8f6670df3bbd",
    "IdConcepto": "ar_pros_AbroadPrimaryAmount",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignPrimaryOverAllotmentAmount_776aa748-459a-4a31-8f08-726cdde4d727": {
    "Id": "ar_pros_ForeignPrimaryOverAllotmentAmount_776aa748-459a-4a31-8f08-726cdde4d727",
    "IdConcepto": "ar_pros_ForeignPrimaryOverAllotmentAmount",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignSecondaryAmount_2cf87c2e-6029-4691-8918-d925269bc982": {
    "Id": "ar_pros_ForeignSecondaryAmount_2cf87c2e-6029-4691-8918-d925269bc982",
    "IdConcepto": "ar_pros_ForeignSecondaryAmount",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignOverallotmentSecondaryAmount_b6304f87-3d95-42b7-adb3-560c63196ae1": {
    "Id": "ar_pros_ForeignOverallotmentSecondaryAmount_b6304f87-3d95-42b7-adb3-560c63196ae1",
    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryAmount",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary_4193bcd2-dc00-4321-98af-54b50d970f8b": {
    "Id": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary_4193bcd2-dc00-4321-98af-54b50d970f8b",
    "IdConcepto": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoPrimaryNumberOfValues_a5ffa3fc-da97-4535-bb70-655276f3c593": {
    "Id": "ar_pros_MexicoPrimaryNumberOfValues_a5ffa3fc-da97-4535-bb70-655276f3c593",
    "IdConcepto": "ar_pros_MexicoPrimaryNumberOfValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_PrimaryOverallotmentMexicoNumberOfValues_ae4399b3-3c7f-48b6-9fd8-ee580ff7f260": {
    "Id": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues_ae4399b3-3c7f-48b6-9fd8-ee580ff7f260",
    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoSecondaryNumberOfValues_dbd63cbe-75e9-41e8-9bf0-7b62a0a52921": {
    "Id": "ar_pros_MexicoSecondaryNumberOfValues_dbd63cbe-75e9-41e8-9bf0-7b62a0a52921",
    "IdConcepto": "ar_pros_MexicoSecondaryNumberOfValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MexicoOverallotmentSecondaryNumberOfValues_238ba528-43f1-41b7-b541-993eb27d2dd1": {
    "Id": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues_238ba528-43f1-41b7-b541-993eb27d2dd1",
    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_AbroadPrimaryNumberOfValues_5bc7663a-3210-49d2-87e1-ec082740985c": {
    "Id": "ar_pros_AbroadPrimaryNumberOfValues_5bc7663a-3210-49d2-87e1-ec082740985c",
    "IdConcepto": "ar_pros_AbroadPrimaryNumberOfValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignPrimaryOverallotmentNumberOfValues_756774e8-b5f3-4bfc-83c6-21c680571470": {
    "Id": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues_756774e8-b5f3-4bfc-83c6-21c680571470",
    "IdConcepto": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignSecondaryNumberOfValues_859142d4-afbc-4e3e-8794-63981a0bf7d4": {
    "Id": "ar_pros_ForeignSecondaryNumberOfValues_859142d4-afbc-4e3e-8794-63981a0bf7d4",
    "IdConcepto": "ar_pros_ForeignSecondaryNumberOfValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_ForeignOverallotmentSecondaryNumberOfValues_7228be84-83d2-4b27-9d7d-b413a60dbda6": {
    "Id": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues_7228be84-83d2-4b27-9d7d-b413a60dbda6",
    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_PlacementPriceValues_6887a605-47bd-4755-99d1-da29ff4f7ab4": {
    "Id": "ar_pros_PlacementPriceValues_6887a605-47bd-4755-99d1-da29ff4f7ab4",
    "IdConcepto": "ar_pros_PlacementPriceValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_DescriptionOfHowThePlacementPriceWasDetermined_87e8609f-e075-4b0b-83a6-56cf8fb2e68e": {
    "Id": "ar_pros_DescriptionOfHowThePlacementPriceWasDetermined_87e8609f-e075-4b0b-83a6-56cf8fb2e68e",
    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceWasDetermined",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_4110a5d3-a7f3-4959-8179-5001a4e35308": {
    "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_4110a5d3-a7f3-4959-8179-5001a4e35308",
    "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNameOfTheReferenceCurrencyInWhichTheIssueIsMade"
  },
  "ar_pros_ExchangeRateUDIValue_c38328d7-8e64-4b38-b9b1-ff7eb8310513": {
    "Id": "ar_pros_ExchangeRateUDIValue_c38328d7-8e64-4b38-b9b1-ff7eb8310513",
    "IdConcepto": "ar_pros_ExchangeRateUDIValue",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherConsiderationsOfSupply_13f3ba48-d382-4da7-b954-06ac61df7cc9": {
    "Id": "ar_pros_OtherConsiderationsOfSupply_13f3ba48-d382-4da7-b954-06ac61df7cc9",
    "IdConcepto": "ar_pros_OtherConsiderationsOfSupply",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_ab0d21d1-e415-4961-9a1d-ad9a041dd34a": {
    "Id": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_ab0d21d1-e415-4961-9a1d-ad9a041dd34a",
    "IdConcepto": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_9ed53b86-8cbe-44b2-9c23-e8ae7202c902": {
    "Id": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_9ed53b86-8cbe-44b2-9c23-e8ae7202c902",
    "IdConcepto": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PossiblePurchasers_b0d8fde8-59bb-4f8e-96d8-b5cd168384f2": {
    "Id": "ar_pros_PossiblePurchasers_b0d8fde8-59bb-4f8e-96d8-b5cd168384f2",
    "IdConcepto": "ar_pros_PossiblePurchasers",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PossibleLimitations_a2fcc228-0bd8-405b-b874-702a2225b149": {
    "Id": "ar_pros_PossibleLimitations_a2fcc228-0bd8-405b-b874-702a2225b149",
    "IdConcepto": "ar_pros_PossibleLimitations",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TypeOfInvestorToWhichItIsAddressed_2000023f-36a5-45cf-8ffb-c76cd8f5eb12": {
    "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_2000023f-36a5-45cf-8ffb-c76cd8f5eb12",
    "IdConcepto": "ar_pros_TypeOfInvestorToWhichItIsAddressed",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TranscriptOfOtherRelevantTermsTitle_2050ef8d-a585-4bc0-a69b-80e7190b3dda": {
    "Id": "ar_pros_TranscriptOfOtherRelevantTermsTitle_2050ef8d-a585-4bc0-a69b-80e7190b3dda",
    "IdConcepto": "ar_pros_TranscriptOfOtherRelevantTermsTitle",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources_8f744e7a-5669-40b0-ba34-dcb083eb1582": {
    "Id": "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources_8f744e7a-5669-40b0-ba34-dcb083eb1582",
    "IdConcepto": "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FiscalRegimeApplicable_e2af0f09-4c9b-4483-aa82-73899bef1f5a": {
    "Id": "ar_pros_FiscalRegimeApplicable_e2af0f09-4c9b-4483-aa82-73899bef1f5a",
    "IdConcepto": "ar_pros_FiscalRegimeApplicable",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SpecifyIfTheGoodsAreInsured_0764b676-0556-4dd4-8a04-aa92262a0428": {
    "Id": "ar_pros_SpecifyIfTheGoodsAreInsured_0764b676-0556-4dd4-8a04-aa92262a0428",
    "IdConcepto": "ar_pros_SpecifyIfTheGoodsAreInsured",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_UseOfFunds_d3967259-7333-41bc-adfa-afd18abeda05": {
    "Id": "ar_pros_UseOfFunds_d3967259-7333-41bc-adfa-afd18abeda05",
    "IdConcepto": "ar_pros_UseOfFunds",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DistributionPlan_53287370-4646-4013-9c7b-0c23fd674307": {
    "Id": "ar_pros_DistributionPlan_53287370-4646-4013-9c7b-0c23fd674307",
    "IdConcepto": "ar_pros_DistributionPlan",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FeaturesCommonRepresentative_7e7bbe45-584f-47b8-8b6d-6381135c02c1": {
    "Id": "ar_pros_FeaturesCommonRepresentative_7e7bbe45-584f-47b8-8b6d-6381135c02c1",
    "IdConcepto": "ar_pros_FeaturesCommonRepresentative",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer_6075205c-f443-4a19-bf6e-a45babcfd99e": {
    "Id": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer_6075205c-f443-4a19-bf6e-a45babcfd99e",
    "IdConcepto": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InTheCaseOfAdditionalValues_01994ad2-1c7d-498f-a7fd-96f121094dd1": {
    "Id": "ar_pros_InTheCaseOfAdditionalValues_01994ad2-1c7d-498f-a7fd-96f121094dd1",
    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultInTheCaseOfAdditionalValues"
  },
  "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_af8e1411-21ae-4bc9-b528-17371fdb197a": {
    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_af8e1411-21ae-4bc9-b528-17371fdb197a",
    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TotalAmountOfSecurities_5a3901c6-d065-4270-8cd2-a0209d1c6f87": {
    "Id": "ar_pros_TotalAmountOfSecurities_5a3901c6-d065-4270-8cd2-a0209d1c6f87",
    "IdConcepto": "ar_pros_TotalAmountOfSecurities",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_56e76389-a919-4218-8a07-2dfdc9ce731a": {
    "Id": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_56e76389-a919-4218-8a07-2dfdc9ce731a",
    "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }
};
        }
    }

}