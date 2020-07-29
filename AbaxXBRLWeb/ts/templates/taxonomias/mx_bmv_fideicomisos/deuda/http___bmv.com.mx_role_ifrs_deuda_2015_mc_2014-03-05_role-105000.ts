///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/mc_2014-03-05_role-105000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_mc_2014_03_05_role_105000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_mc_2014_03_05_role_105000
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
                                IdConcepto: 'mx_deuda_HeritageOfTheFund',
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
                                IdConcepto: 'mx_deuda_Ticker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                

                'VA_PeriodCoveredByFinancialStatements': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_PeriodCoveredByFinancialStatements',
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

                

                
                'VA_DescriptionOfPresentationCurrency': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_DescriptionOfPresentationCurrency',
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

                
                'VA_TrusteesAdministratorAvalOrGuarantor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_TrusteesAdministratorAvalOrGuarantor',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_deuda_TrusteesAdministratorAvalOrGuarantor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),

                

                'VA_TrustNumber': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_TrustNumber',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_deuda_TrustNumber',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),

                

                'VA_CashFlowStatementForIndirectMethod': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_CashFlowStatementForIndirectMethod',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_deuda_CashFlowStatementForInderectMethod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),

                

                'VA_NumberOfQuarter': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_NumberOfQuarter',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_deuda_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),

                'VA_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory',
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
                                IdConcepto: 'mx_deuda_NameServiceProviderExternalAudit',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_deuda_NumberOfQuarter',
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
                                IdConcepto: 'mx_deuda_NameOfTheAsociadoSigningOpinion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_deuda_NumberOfQuarter',
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
                                IdConcepto: 'mx_deuda_TypeOfOpinionOnTheFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_deuda_NumberOfQuarter',
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
                                IdConcepto: 'mx_deuda_DateOfOpinionOnTheFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_deuda_NumberOfQuarter',
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
                    })
            };

            this.ContextosPlantillaPorId = {
                "Acum_Actual": {
                    "Id": "Acum_Actual",
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
                "A134c1b1d-85b4-418e-8957-bdff5735e661": {
                    "Id": "A134c1b1d-85b4-418e-8957-bdff5735e661",
                    "IdConcepto": "ifrs-mc_ManagementCommentaryExplanatory",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A663024a8-54ea-4414-bd87-88326fcb34ca": {
                    "Id": "A663024a8-54ea-4414-bd87-88326fcb34ca",
                    "IdConcepto": "ifrs-mc_DisclosureOfNatureOfBusinessExplanatory",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A67c7b22a-933d-4b34-8d8d-ebcf3ce4b221": {
                    "Id": "A67c7b22a-933d-4b34-8d8d-ebcf3ce4b221",
                    "IdConcepto": "ifrs-mc_DisclosureOfManagementsObjectivesAndItsStrategiesForMeetingThoseObjectivesExplanatory",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A2fa7ae80-033a-40be-8024-a0db44222166": {
                    "Id": "A2fa7ae80-033a-40be-8024-a0db44222166",
                    "IdConcepto": "ifrs-mc_DisclosureOfEntitysMostSignificantResourcesRisksAndRelationshipsExplanatory",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A25ffdfbf-370f-467a-83c2-841109e49504": {
                    "Id": "A25ffdfbf-370f-467a-83c2-841109e49504",
                    "IdConcepto": "ifrs-mc_DisclosureOfResultsOfOperationsAndProspectsExplanatory",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A55d52dee-25f9-4cd7-840c-82e4e4c86cfd": {
                    "Id": "A55d52dee-25f9-4cd7-840c-82e4e4c86cfd",
                    "IdConcepto": "ifrs-mc_DisclosureOfCriticalPerformanceMeasuresAndIndicatorsThatManagementUsesToEvaluateEntitysPerformanceAgainstStatedObjectivesExplanatory",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A346c0b9f-3330-4c45-a9a4-2e57a73eb2cd": {
                    "Id": "A346c0b9f-3330-4c45-a9a4-2e57a73eb2cd",
                    "IdConcepto": "mx_deuda_TheSecuritizationTransaction",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A4efa5dca-e6c3-4b3e-9657-c244b7008490": {
                    "Id": "A4efa5dca-e6c3-4b3e-9657-c244b7008490",
                    "IdConcepto": "mx_deuda_HeritageOfTheFund",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aadd1b470-05f2-44d0-a2dc-d2e2c5492367": {
                    "Id": "Aadd1b470-05f2-44d0-a2dc-d2e2c5492367",
                    "IdConcepto": "mx_deuda_RelevantDisclosureAboutThePeriod",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A8c2468de-6962-4231-9648-199eaafea9db": {
                    "Id": "A8c2468de-6962-4231-9648-199eaafea9db",
                    "IdConcepto": "mx_deuda_OtherRequiredThirdToTheTrustOrSecurityHoldersIfAny",
                    "IdContextoPlantilla": "Acum_Actual",
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