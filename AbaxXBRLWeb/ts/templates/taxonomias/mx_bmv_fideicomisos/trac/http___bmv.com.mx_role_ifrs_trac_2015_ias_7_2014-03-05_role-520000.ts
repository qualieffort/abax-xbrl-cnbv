///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_7_2014-03-05_role-520000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_7_2014_03_05_role_520000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_7_2014_03_05_role_520000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_520000_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_520000_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable3) - bignumber(variable2)',
                        MensajeExito: 'El valor de {variable1} es igual al valor de Efectivo y equivalentes de efectivo al final del periodo - Efectivo y equivalentes de efectivo al principio del periodo.',
                        MensajeError: 'El valor de {variable1} debe ser igual al valor de Efectivo y equivalentes de efectivo al final del periodo - Efectivo y equivalentes de efectivo al principio del periodo.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_IncreaseDecreaseInCashAndCashEquivalents',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,

                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_CashAndCashEquivalents',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                EmpatarPeriodo: model.TipoMatchPeriodo.PeriodStartMatch,
                                RolEtiqueta: "http://www.xbrl.org/2003/role/periodStartLabel"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs-full_CashAndCashEquivalents',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                EmpatarPeriodo: model.TipoMatchPeriodo.PeriodEndMatch,
                                RolEtiqueta: "http://www.xbrl.org/2003/role/periodEndLabel"
                            })
                        }
                    })
            };

            this.ContextosPlantillaPorId = {
                "Acumulado_AnoActual": {
                    "Id": "Acumulado_AnoActual",
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
                },
                "Acumulado_AnioAnterior": {
                    "Id": "Acumulado_AnioAnterior",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2014_01_01",
                        "FechaFin": "#fecha_2014_09_30",
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
                },
                "Trimestre_AnioActual": {
                    "Id": "Trimestre_AnioActual",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2015_09_30",
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
                "Cierre_EjercicioAnterior": {
                    "Id": "Cierre_EjercicioAnterior",
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
                "Inicio_EjercicioAnterior": {
                    "Id": "Inicio_EjercicioAnterior",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_12_31",
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
                "Cierre_TrimestreAnioAnterior": {
                    "Id": "Cierre_TrimestreAnioAnterior",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2014_09_30",
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
                "A1e841afa-36ad-42e6-bb95-c2696a15c94c": {
                    "Id": "A1e841afa-36ad-42e6-bb95-c2696a15c94c",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aec784537-7bdd-49a8-830c-d47550c3c745": {
                    "Id": "Aec784537-7bdd-49a8-830c-d47550c3c745",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A497a3afe-a308-4b88-8d8c-932797879c0a": {
                    "Id": "A497a3afe-a308-4b88-8d8c-932797879c0a",
                    "IdConcepto": "ifrs-full_AdjustmentsForFinanceCosts",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9b31aee1-679c-4742-a661-eaabf4e552d6": {
                    "Id": "A9b31aee1-679c-4742-a661-eaabf4e552d6",
                    "IdConcepto": "ifrs-full_AdjustmentsForFinanceCosts",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abe92c19b-f5e0-41f3-9024-929961da890c": {
                    "Id": "Abe92c19b-f5e0-41f3-9024-929961da890c",
                    "IdConcepto": "ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A826662a4-e7f4-4ada-8511-2392a49ec821": {
                    "Id": "A826662a4-e7f4-4ada-8511-2392a49ec821",
                    "IdConcepto": "ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A60739e56-4339-4911-89e7-6f1ebb2cbba8": {
                    "Id": "A60739e56-4339-4911-89e7-6f1ebb2cbba8",
                    "IdConcepto": "ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1aa5af95-0755-4613-a78a-8b07ee51d729": {
                    "Id": "A1aa5af95-0755-4613-a78a-8b07ee51d729",
                    "IdConcepto": "ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa27c5dc2-949d-4231-a8b4-1cd958f6eae4": {
                    "Id": "Aa27c5dc2-949d-4231-a8b4-1cd958f6eae4",
                    "IdConcepto": "ifrs-full_AdjustmentsForProvisions",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e388ffd-2a4b-458c-aa59-9e150eb60688": {
                    "Id": "A1e388ffd-2a4b-458c-aa59-9e150eb60688",
                    "IdConcepto": "ifrs-full_AdjustmentsForProvisions",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aed96e0b8-3ffe-4f8c-9ec4-b2db5e86983a": {
                    "Id": "Aed96e0b8-3ffe-4f8c-9ec4-b2db5e86983a",
                    "IdConcepto": "ifrs-full_AdjustmentsForFairValueGainsLosses",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2e6cd03d-4cff-4c90-9206-ea0156a75d09": {
                    "Id": "A2e6cd03d-4cff-4c90-9206-ea0156a75d09",
                    "IdConcepto": "ifrs-full_AdjustmentsForFairValueGainsLosses",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A93ae777e-7a8a-42ca-9040-5c67ce2f6b2d": {
                    "Id": "A93ae777e-7a8a-42ca-9040-5c67ce2f6b2d",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A84d0d34d-4f84-4a1c-adee-bc356174f3d4": {
                    "Id": "A84d0d34d-4f84-4a1c-adee-bc356174f3d4",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa6a8d30a-6a8b-4cfc-88ae-9b25de1dd9a5": {
                    "Id": "Aa6a8d30a-6a8b-4cfc-88ae-9b25de1dd9a5",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A81d0a629-0166-41f8-84c1-fffaee6fe4ca": {
                    "Id": "A81d0a629-0166-41f8-84c1-fffaee6fe4ca",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A83ddcc3c-afd6-40bd-9756-eae15c6c70da": {
                    "Id": "A83ddcc3c-afd6-40bd-9756-eae15c6c70da",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ade13b408-912e-4bcf-864c-b25c98e64f94": {
                    "Id": "Ade13b408-912e-4bcf-864c-b25c98e64f94",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af1d2e07b-22ac-480f-ada6-e5c644940374": {
                    "Id": "Af1d2e07b-22ac-480f-ada6-e5c644940374",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Add003685-cdc9-4a36-873a-f345e3f16eb6": {
                    "Id": "Add003685-cdc9-4a36-873a-f345e3f16eb6",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acd31a27f-33df-48f5-a996-81ede9d21f3d": {
                    "Id": "Acd31a27f-33df-48f5-a996-81ede9d21f3d",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsForWhichCashEffectsAreInvestingOrFinancingCashFlow",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adafe35fa-167c-46df-940f-9ef76f011a78": {
                    "Id": "Adafe35fa-167c-46df-940f-9ef76f011a78",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsForWhichCashEffectsAreInvestingOrFinancingCashFlow",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7f6061f4-85d6-49fc-b615-948b2df01b22": {
                    "Id": "A7f6061f4-85d6-49fc-b615-948b2df01b22",
                    "IdConcepto": "mx_trac_IssuanceOfCertificatesNet",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9048ca43-d163-4dd5-aaa1-3322726dd4f4": {
                    "Id": "A9048ca43-d163-4dd5-aaa1-3322726dd4f4",
                    "IdConcepto": "mx_trac_IssuanceOfCertificatesNet",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9e1fc897-f1cd-479f-bd90-22e61115119e": {
                    "Id": "A9e1fc897-f1cd-479f-bd90-22e61115119e",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsForNoncashItems",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab119ac89-8cf7-4a54-b6b7-53dd7e60141a": {
                    "Id": "Ab119ac89-8cf7-4a54-b6b7-53dd7e60141a",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsForNoncashItems",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6ca9caff-e05a-48d4-b5d5-9fb50a238d80": {
                    "Id": "A6ca9caff-e05a-48d4-b5d5-9fb50a238d80",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsToReconcileProfitLoss",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac18c2fdb-e072-4e62-9d27-ac2f939e5785": {
                    "Id": "Ac18c2fdb-e072-4e62-9d27-ac2f939e5785",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsToReconcileProfitLoss",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7917ef0e-a30a-4c18-8b1e-2f84e8e39b0c": {
                    "Id": "A7917ef0e-a30a-4c18-8b1e-2f84e8e39b0c",
                    "IdConcepto": "ifrs-full_AdjustmentsForReconcileProfitLoss",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A024fee4d-4c99-4ce4-83fc-57ee179826e6": {
                    "Id": "A024fee4d-4c99-4ce4-83fc-57ee179826e6",
                    "IdConcepto": "ifrs-full_AdjustmentsForReconcileProfitLoss",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aad4e7fd0-22b0-46d0-9a18-230651872f3f": {
                    "Id": "Aad4e7fd0-22b0-46d0-9a18-230651872f3f",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperations",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A81eaa526-0b98-4e10-8a5d-ad4d341b2f78": {
                    "Id": "A81eaa526-0b98-4e10-8a5d-ad4d341b2f78",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperations",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A701b85cd-2007-4e9e-a3e8-dd181945988b": {
                    "Id": "A701b85cd-2007-4e9e-a3e8-dd181945988b",
                    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A10414aac-2ad4-40ad-887a-1309ccc2aeb0": {
                    "Id": "A10414aac-2ad4-40ad-887a-1309ccc2aeb0",
                    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A76631511-33aa-4910-9094-50d8b8303a33": {
                    "Id": "A76631511-33aa-4910-9094-50d8b8303a33",
                    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A40e9b48a-b0a9-4e2d-ae9b-25842f7445f3": {
                    "Id": "A40e9b48a-b0a9-4e2d-ae9b-25842f7445f3",
                    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab0c1478a-097c-4791-949f-fc7fc8e24427": {
                    "Id": "Ab0c1478a-097c-4791-949f-fc7fc8e24427",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A97e81690-392b-42e6-ad5c-1a99a0811f7c": {
                    "Id": "A97e81690-392b-42e6-ad5c-1a99a0811f7c",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af44dc7b4-3375-4cfd-9adc-918768e58a50": {
                    "Id": "Af44dc7b4-3375-4cfd-9adc-918768e58a50",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1c8d6006-583d-4698-9b9c-3bdbe2912f45": {
                    "Id": "A1c8d6006-583d-4698-9b9c-3bdbe2912f45",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af3add769-e9ad-45eb-b031-066fb7d84d9a": {
                    "Id": "Af3add769-e9ad-45eb-b031-066fb7d84d9a",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aba527c12-45a7-41da-8731-d27665610129": {
                    "Id": "Aba527c12-45a7-41da-8731-d27665610129",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A62206739-f5cf-4ad1-81d7-cc5e75c36e92": {
                    "Id": "A62206739-f5cf-4ad1-81d7-cc5e75c36e92",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6408343b-3c26-4d69-a6ce-0be483707a6d": {
                    "Id": "A6408343b-3c26-4d69-a6ce-0be483707a6d",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A216e3f56-0087-4b18-8126-0a655de395c9": {
                    "Id": "A216e3f56-0087-4b18-8126-0a655de395c9",
                    "IdConcepto": "ifrs-full_ProceedsFromOtherLongtermAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A647e15e2-9701-405b-af3d-05a97dbcd001": {
                    "Id": "A647e15e2-9701-405b-af3d-05a97dbcd001",
                    "IdConcepto": "ifrs-full_ProceedsFromOtherLongtermAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4877c621-1c1f-4b9f-b7be-6e926cf528f4": {
                    "Id": "A4877c621-1c1f-4b9f-b7be-6e926cf528f4",
                    "IdConcepto": "ifrs-full_PurchaseOfOtherLongtermAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A80500ce7-275b-450c-8bd1-3a551334e54e": {
                    "Id": "A80500ce7-275b-450c-8bd1-3a551334e54e",
                    "IdConcepto": "ifrs-full_PurchaseOfOtherLongtermAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A75e245ee-427b-4d8b-8a5f-8a49d758b9f8": {
                    "Id": "A75e245ee-427b-4d8b-8a5f-8a49d758b9f8",
                    "IdConcepto": "ifrs-full_CashReceiptsFromRepaymentOfAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A78b00eec-d5dd-4ed0-85b9-2d9798811d1e": {
                    "Id": "A78b00eec-d5dd-4ed0-85b9-2d9798811d1e",
                    "IdConcepto": "ifrs-full_CashReceiptsFromRepaymentOfAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8a8de0e8-108a-445c-b0f0-537cde86d86b": {
                    "Id": "A8a8de0e8-108a-445c-b0f0-537cde86d86b",
                    "IdConcepto": "ifrs-full_CashPaymentsForFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adf61d8ac-124d-4042-83b5-008a4338b220": {
                    "Id": "Adf61d8ac-124d-4042-83b5-008a4338b220",
                    "IdConcepto": "ifrs-full_CashPaymentsForFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9d919ebb-8900-4e9f-8ba8-0b7ffb72b525": {
                    "Id": "A9d919ebb-8900-4e9f-8ba8-0b7ffb72b525",
                    "IdConcepto": "ifrs-full_CashReceiptsFromFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac55614ba-f2cd-4bb1-a25e-0ceb553e2953": {
                    "Id": "Ac55614ba-f2cd-4bb1-a25e-0ceb553e2953",
                    "IdConcepto": "ifrs-full_CashReceiptsFromFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A874b091e-4113-49df-9baa-f91dc7cde491": {
                    "Id": "A874b091e-4113-49df-9baa-f91dc7cde491",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6a25ec63-50a4-45c5-b611-ac5091ef3cc6": {
                    "Id": "A6a25ec63-50a4-45c5-b611-ac5091ef3cc6",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8f9667f2-8c11-49a8-998e-0855f4c0118a": {
                    "Id": "A8f9667f2-8c11-49a8-998e-0855f4c0118a",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa9ac9e21-ad57-4370-973d-02aa808ac855": {
                    "Id": "Aa9ac9e21-ad57-4370-973d-02aa808ac855",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A172c1d4d-5392-49f5-a844-151021728894": {
                    "Id": "A172c1d4d-5392-49f5-a844-151021728894",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A262a6bb4-85e4-4853-82fd-4c6f36d701fa": {
                    "Id": "A262a6bb4-85e4-4853-82fd-4c6f36d701fa",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7bf8d57d-fc04-4051-bebe-b967735e5fb3": {
                    "Id": "A7bf8d57d-fc04-4051-bebe-b967735e5fb3",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae7845053-2035-4495-be0d-8f7c13151eb4": {
                    "Id": "Ae7845053-2035-4495-be0d-8f7c13151eb4",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8cdab835-7550-4f80-bb0d-855bffbca566": {
                    "Id": "A8cdab835-7550-4f80-bb0d-855bffbca566",
                    "IdConcepto": "ifrs-full_ProceedsFromIssuingShares",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa1f825c7-48b1-49f2-b036-5e6f75145e0a": {
                    "Id": "Aa1f825c7-48b1-49f2-b036-5e6f75145e0a",
                    "IdConcepto": "ifrs-full_ProceedsFromIssuingShares",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae14926c9-9682-4ed9-aed0-37db09806adc": {
                    "Id": "Ae14926c9-9682-4ed9-aed0-37db09806adc",
                    "IdConcepto": "ifrs-full_ProceedsFromIssuingOtherEquityInstruments",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa8d30fdf-8ea7-4aa0-9286-be086c16c590": {
                    "Id": "Aa8d30fdf-8ea7-4aa0-9286-be086c16c590",
                    "IdConcepto": "ifrs-full_ProceedsFromIssuingOtherEquityInstruments",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A39a629a7-79cf-4d4d-8c75-f35bd2001f9b": {
                    "Id": "A39a629a7-79cf-4d4d-8c75-f35bd2001f9b",
                    "IdConcepto": "ifrs-full_ProceedsFromBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A19eac383-3bbc-4dc6-b1b2-e25204050824": {
                    "Id": "A19eac383-3bbc-4dc6-b1b2-e25204050824",
                    "IdConcepto": "ifrs-full_ProceedsFromBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acf821729-fad8-4d4a-bd8a-92ee6dc9ea11": {
                    "Id": "Acf821729-fad8-4d4a-bd8a-92ee6dc9ea11",
                    "IdConcepto": "ifrs-full_RepaymentsOfBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aab70a948-3c35-473f-9c37-6e07b10214d5": {
                    "Id": "Aab70a948-3c35-473f-9c37-6e07b10214d5",
                    "IdConcepto": "ifrs-full_RepaymentsOfBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa4f643c3-6cdf-4128-9c29-9dd8e2a2c0df": {
                    "Id": "Aa4f643c3-6cdf-4128-9c29-9dd8e2a2c0df",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A787bbb75-caf5-4e96-908c-8dd6a2342935": {
                    "Id": "A787bbb75-caf5-4e96-908c-8dd6a2342935",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa0277ba3-c9dd-4459-9242-bbfa0c7ecc0f": {
                    "Id": "Aa0277ba3-c9dd-4459-9242-bbfa0c7ecc0f",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab0dbc80f-2752-4125-8435-df95e11f110b": {
                    "Id": "Ab0dbc80f-2752-4125-8435-df95e11f110b",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab5834b05-a554-4ee5-9430-143868f43995": {
                    "Id": "Ab5834b05-a554-4ee5-9430-143868f43995",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aee1a46e2-a4d6-49ec-a2ba-698fb5040ebc": {
                    "Id": "Aee1a46e2-a4d6-49ec-a2ba-698fb5040ebc",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abe779c2c-659a-45e3-9ac8-67d234c7a92c": {
                    "Id": "Abe779c2c-659a-45e3-9ac8-67d234c7a92c",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aca3b506a-51a6-4323-b33f-d43b0b16d3f1": {
                    "Id": "Aca3b506a-51a6-4323-b33f-d43b0b16d3f1",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af24b54d0-3e5f-4aea-973d-3265b7827ca7": {
                    "Id": "Af24b54d0-3e5f-4aea-973d-3265b7827ca7",
                    "IdConcepto": "ifrs-full_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A58dda1a2-88bb-4708-b84e-72d9f1901413": {
                    "Id": "A58dda1a2-88bb-4708-b84e-72d9f1901413",
                    "IdConcepto": "ifrs-full_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A36aca917-996b-4ccc-9047-1c1a2ee14f2d": {
                    "Id": "A36aca917-996b-4ccc-9047-1c1a2ee14f2d",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A102eac93-9c9d-41dc-ba42-63b30414cafd": {
                    "Id": "A102eac93-9c9d-41dc-ba42-63b30414cafd",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6262ec50-e994-411e-bc7e-04410d9c2fe4": {
                    "Id": "A6262ec50-e994-411e-bc7e-04410d9c2fe4",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aeeaefc7e-6980-44ea-971a-58b8bac70e1f": {
                    "Id": "Aeeaefc7e-6980-44ea-971a-58b8bac70e1f",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa2be892e-edda-4e67-b0ce-99bbfa970fb6": {
                    "Id": "Aa2be892e-edda-4e67-b0ce-99bbfa970fb6",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae7707729-3326-4c9b-b471-8446f4d47aed": {
                    "Id": "Ae7707729-3326-4c9b-b471-8446f4d47aed",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "Cierre_TrimestreAnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                }
            };
        }
    }

}