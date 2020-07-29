///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ccd/2015/mc_2014-03-05_role-105000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ccd_2015_mc_2014_03_05_role_105000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ccd_2015_mc_2014_03_05_role_105000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'EA_HeritageOfTheFund': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_HeritageOfTheFund',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_HeritageOfTheFund',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'EA_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_Ticker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                
                
                
                
                'EA_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'EA_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'EA_DisclosureOfInterimFinancialReportingExplanatory': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_DisclosureOfInterimFinancialReportingExplanatory',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfInterimFinancialReportingExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'EA_4D_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_4D_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_NameServiceProviderExternalAudit',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_ccd_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                'EA_4D_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_4D_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_NameOfTheAsociadoSigningOpinion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_ccd_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                'EA_4D_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_4D_3',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_TypeOfOpinionOnTheFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_ccd_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                
                'EA_4D_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_4D_4',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_DateOfOpinionOnTheFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_ccd_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                'EA_DisclosureOfDerivativeFinancialInstrumentsExplanatory': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_DisclosureOfDerivativeFinancialInstrumentsExplanatory',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfDerivativeFinancialInstrumentsExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),


                'VA_set_no_vacios_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_PeriodCoveredByFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DescriptionOfPresentationCurrency',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_3',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_Consolidated',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_6': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_6',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_TrusteesAdministratorAvalOrGuarantor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_7': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_7',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_TrustNumber',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_8': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_8',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_CashFlowStatementForInderectMethod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_9': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_9',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_ccd_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    })

                


            };

            this.ContextosPlantillaPorId = {
                "trimestre_acumulado_actual": {
                    "Id": "trimestre_acumulado_actual",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2015_01_01",
                        "FechaFin": "#fecha_2015_09_30",
                        "FechaInstante": ""
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

            this.UnidadesPlantillaPorId = {};

            this.HechosPlantillaPorId = {
                "Aa5f09383-c7fa-4ede-a454-60bf2e5f7521": {
                    "Id": "Aa5f09383-c7fa-4ede-a454-60bf2e5f7521",
                    "IdConcepto": "ifrs-mc_ManagementCommentaryExplanatory",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A14c3661c-2137-4d37-bfb7-cae8c0dabad8": {
                    "Id": "A14c3661c-2137-4d37-bfb7-cae8c0dabad8",
                    "IdConcepto": "ifrs-mc_DisclosureOfNatureOfBusinessExplanatory",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A7f1ff79e-24d5-43f0-ae04-5e0262fb2624": {
                    "Id": "A7f1ff79e-24d5-43f0-ae04-5e0262fb2624",
                    "IdConcepto": "ifrs-mc_DisclosureOfManagementsObjectivesAndItsStrategiesForMeetingThoseObjectivesExplanatory",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A7c8df741-76e8-4bd1-9c52-b948376df878": {
                    "Id": "A7c8df741-76e8-4bd1-9c52-b948376df878",
                    "IdConcepto": "ifrs-mc_DisclosureOfEntitysMostSignificantResourcesRisksAndRelationshipsExplanatory",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A1d3fc3f2-7018-468f-b635-d6cf251aec33": {
                    "Id": "A1d3fc3f2-7018-468f-b635-d6cf251aec33",
                    "IdConcepto": "ifrs-mc_DisclosureOfResultsOfOperationsAndProspectsExplanatory",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A6652a381-4dca-4871-b1c0-1d0c25e74b9e": {
                    "Id": "A6652a381-4dca-4871-b1c0-1d0c25e74b9e",
                    "IdConcepto": "ifrs-mc_DisclosureOfCriticalPerformanceMeasuresAndIndicatorsThatManagementUsesToEvaluateEntitysPerformanceAgainstStatedObjectivesExplanatory",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ae15e80eb-35e3-43f8-beac-9e408df57d00": {
                    "Id": "Ae15e80eb-35e3-43f8-beac-9e408df57d00",
                    "IdConcepto": "mx_ccd_OperationStructure",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A648b5c7c-5aec-48b4-af04-c7070c03f77c": {
                    "Id": "A648b5c7c-5aec-48b4-af04-c7070c03f77c",
                    "IdConcepto": "mx_ccd_HeritageOfTheFund",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ae24ac1f2-237e-4219-b9c0-c8f7c051e170": {
                    "Id": "Ae24ac1f2-237e-4219-b9c0-c8f7c051e170",
                    "IdConcepto": "mx_ccd_ComplianceWithTheBusinessPlanAndInvestmentScheduleAndWhereAppropiateDisvestitures",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Acee7af69-a151-406a-8df3-67bbf631e790": {
                    "Id": "Acee7af69-a151-406a-8df3-67bbf631e790",
                    "IdConcepto": "mx_ccd_Valuation",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ae8613279-18a5-461e-88f2-b62ee8185cd1": {
                    "Id": "Ae8613279-18a5-461e-88f2-b62ee8185cd1",
                    "IdConcepto": "mx_ccd_FeesCostsAndExpensesOfTheAdministratorOrOperator",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A6aa8c858-9875-4e6f-ac9f-bf4b0cf36ef7": {
                    "Id": "A6aa8c858-9875-4e6f-ac9f-bf4b0cf36ef7",
                    "IdConcepto": "mx_ccd_RelevantDisclosureAboutThePeriod",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Afefb0d44-8293-4994-acf6-832667f1d203": {
                    "Id": "Afefb0d44-8293-4994-acf6-832667f1d203",
                    "IdConcepto": "mx_ccd_OtherRequiredThirdToTheTrustOrSecurityHoldersIfAny",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aad7d3545-3907-4cc9-afab-c3aca861b6bc": {
                    "Id": "Aad7d3545-3907-4cc9-afab-c3aca861b6bc",
                    "IdConcepto": "mx_ccd_GeneralAssembliesOfShareholders",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A1f28b714-9736-4081-81a3-ea3888c3441e": {
                    "Id": "A1f28b714-9736-4081-81a3-ea3888c3441e",
                    "IdConcepto": "mx_ccd_ExternalAuditorsAndIndependentAppraiser",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ab2aab6b5-fe34-4080-b2c3-fa21e5a0796a": {
                    "Id": "Ab2aab6b5-fe34-4080-b2c3-fa21e5a0796a",
                    "IdConcepto": "mx_ccd_TransactionsWithRelatedPartiesAndConflictsOfInterest",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
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