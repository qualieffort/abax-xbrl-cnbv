///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ccd/2015/ias_7_2014-03-05_role-520000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_7_2014_03_05_role_520000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_7_2014_03_05_role_520000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_510000_Metodo_Indirecto_Si': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_510000_Metodo_Indirecto_Si',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable4=="NO") or ( bignumber(variable1) == bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'El valor de {variable1} corresponde a la sumatoria de su integración.',
                        MensajeError: 'El valor de {variable1} no corresponde a la sumatoria de su integración.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_CashFlowsFromUsedInOperations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_ProfitLoss',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs-full_AdjustmentsForReconcileProfitLoss',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'mx_ccd_CashFlowStatementForInderectMethod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ExcepcionPeriodo: true
                            })
                        }
                    })
            };

            this.ContextosPlantillaPorId = {
                "trimestre_acumulado_comparativo": {
                    "Id": "trimestre_acumulado_comparativo",
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
                },
                "fin_trimestre_actual": {
                    "Id": "fin_trimestre_actual",
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
                "inicio_ejercicio_anterior": {
                    "Id": "inicio_ejercicio_anterior",
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
                "fin_ejercicio_anterior": {
                    "Id": "fin_ejercicio_anterior",
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
                "FinTrimestreAnterior": {
                    "Id": "FinTrimestreAnterior",
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
                "A678282c4-2b98-44da-a434-016d0f62abe6": {
                    "Id": "A678282c4-2b98-44da-a434-016d0f62abe6",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad5e39b14-93c4-45a1-8a44-5405c6cd893d": {
                    "Id": "Ad5e39b14-93c4-45a1-8a44-5405c6cd893d",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A13f29e5f-fb60-40dc-b363-a6755ddf14d6": {
                    "Id": "A13f29e5f-fb60-40dc-b363-a6755ddf14d6",
                    "IdConcepto": "mx_ccd_DiscontinuedOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09f44ac3-cf6a-4cc5-8974-9fb92f427c1f": {
                    "Id": "A09f44ac3-cf6a-4cc5-8974-9fb92f427c1f",
                    "IdConcepto": "mx_ccd_DiscontinuedOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aea24e31b-eb3f-4485-ae05-0cf0cc886acc": {
                    "Id": "Aea24e31b-eb3f-4485-ae05-0cf0cc886acc",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncomeTaxExpense",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A71da74fe-8faf-4ea5-843a-17562b04a143": {
                    "Id": "A71da74fe-8faf-4ea5-843a-17562b04a143",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncomeTaxExpense",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad4d80ec7-eda1-442a-85db-f71e146049a1": {
                    "Id": "Ad4d80ec7-eda1-442a-85db-f71e146049a1",
                    "IdConcepto": "ifrs-full_AdjustmentsForFinanceCosts",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A624ae63e-7628-4893-8b0a-1212315d7119": {
                    "Id": "A624ae63e-7628-4893-8b0a-1212315d7119",
                    "IdConcepto": "ifrs-full_AdjustmentsForFinanceCosts",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aead2af47-c792-48bb-b430-df3afc206bb9": {
                    "Id": "Aead2af47-c792-48bb-b430-df3afc206bb9",
                    "IdConcepto": "ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2012a794-8c53-4276-ad73-d95e73514afb": {
                    "Id": "A2012a794-8c53-4276-ad73-d95e73514afb",
                    "IdConcepto": "ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8e988c33-c325-4be0-89f6-4792a492ae48": {
                    "Id": "A8e988c33-c325-4be0-89f6-4792a492ae48",
                    "IdConcepto": "ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abff2fcc6-8ff5-4b95-a440-d8397d92d39c": {
                    "Id": "Abff2fcc6-8ff5-4b95-a440-d8397d92d39c",
                    "IdConcepto": "ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afcaf31ac-b4b2-430b-8ddd-daa4f79d88d1": {
                    "Id": "Afcaf31ac-b4b2-430b-8ddd-daa4f79d88d1",
                    "IdConcepto": "ifrs-full_AdjustmentsForProvisions",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A562de8b5-5eb1-4695-b217-9cabb2afc612": {
                    "Id": "A562de8b5-5eb1-4695-b217-9cabb2afc612",
                    "IdConcepto": "ifrs-full_AdjustmentsForProvisions",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0f67e1d1-d6f1-4d0b-96e5-52a940bd002c": {
                    "Id": "A0f67e1d1-d6f1-4d0b-96e5-52a940bd002c",
                    "IdConcepto": "ifrs-full_AdjustmentsForUnrealisedForeignExchangeLossesGains",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A61f91265-9e16-4f21-9cc6-a67908e73a0d": {
                    "Id": "A61f91265-9e16-4f21-9cc6-a67908e73a0d",
                    "IdConcepto": "ifrs-full_AdjustmentsForUnrealisedForeignExchangeLossesGains",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3420f138-975b-4989-bbe3-58f5cfac1ec7": {
                    "Id": "A3420f138-975b-4989-bbe3-58f5cfac1ec7",
                    "IdConcepto": "ifrs-full_AdjustmentsForFairValueGainsLosses",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3249edc2-a362-447a-b4c7-02971fd5f226": {
                    "Id": "A3249edc2-a362-447a-b4c7-02971fd5f226",
                    "IdConcepto": "ifrs-full_AdjustmentsForFairValueGainsLosses",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A44378882-1891-4460-8507-6de106307d7b": {
                    "Id": "A44378882-1891-4460-8507-6de106307d7b",
                    "IdConcepto": "ifrs-full_AdjustmentsForLossesGainsOnDisposalOfNoncurrentAssets",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1b27429a-7ab0-4cd7-9d54-b58f0a0f04ea": {
                    "Id": "A1b27429a-7ab0-4cd7-9d54-b58f0a0f04ea",
                    "IdConcepto": "ifrs-full_AdjustmentsForLossesGainsOnDisposalOfNoncurrentAssets",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A25180a55-1f08-4f6c-995b-ceff748cacab": {
                    "Id": "A25180a55-1f08-4f6c-995b-ceff748cacab",
                    "IdConcepto": "mx_ccd_ParticipationInAssociatesAndJointVentures",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af12938ea-4b10-4e61-a7c1-963c24ceff5f": {
                    "Id": "Af12938ea-4b10-4e61-a7c1-963c24ceff5f",
                    "IdConcepto": "mx_ccd_ParticipationInAssociatesAndJointVentures",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0abb2004-5187-4cb7-9f23-8a2c6edcff87": {
                    "Id": "A0abb2004-5187-4cb7-9f23-8a2c6edcff87",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A26b84cd6-0b15-4f43-b4b3-5a50d476841b": {
                    "Id": "A26b84cd6-0b15-4f43-b4b3-5a50d476841b",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac8d38024-26b2-411b-8911-0c0aa776e49d": {
                    "Id": "Ac8d38024-26b2-411b-8911-0c0aa776e49d",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abe0ed92e-8681-4f7c-b732-7cf442dcacfd": {
                    "Id": "Abe0ed92e-8681-4f7c-b732-7cf442dcacfd",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa3228ee0-2f22-499a-a49e-cbc6e2d4b2a8": {
                    "Id": "Aa3228ee0-2f22-499a-a49e-cbc6e2d4b2a8",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A225e31d7-4606-4938-9fdf-7d786005f702": {
                    "Id": "A225e31d7-4606-4938-9fdf-7d786005f702",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A22397ccf-0edf-406f-b51c-99ba77db1554": {
                    "Id": "A22397ccf-0edf-406f-b51c-99ba77db1554",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6eb792ec-b797-4dcf-8372-753d4652f6d3": {
                    "Id": "A6eb792ec-b797-4dcf-8372-753d4652f6d3",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A90b8a2d3-0635-4b72-9bdc-a2bc47f719c5": {
                    "Id": "A90b8a2d3-0635-4b72-9bdc-a2bc47f719c5",
                    "IdConcepto": "mx_ccd_DecreaseIncreaseReceivables",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Accfe853c-6c53-4e09-95ae-53b1532850f9": {
                    "Id": "Accfe853c-6c53-4e09-95ae-53b1532850f9",
                    "IdConcepto": "mx_ccd_DecreaseIncreaseReceivables",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A14008460-8704-423c-be6a-5da0f3a23d39": {
                    "Id": "A14008460-8704-423c-be6a-5da0f3a23d39",
                    "IdConcepto": "mx_ccd_DesignatedFinancialInstrumentsAtFairValue",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A399c643e-ab8e-4ead-97b6-7271e9995af5": {
                    "Id": "A399c643e-ab8e-4ead-97b6-7271e9995af5",
                    "IdConcepto": "mx_ccd_DesignatedFinancialInstrumentsAtFairValue",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6221a442-ef33-42aa-81b2-211692e69a29": {
                    "Id": "A6221a442-ef33-42aa-81b2-211692e69a29",
                    "IdConcepto": "mx_ccd_DecreaseIncreaseInLoansAndReceivablesAtAmortizedCost",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A22acd460-bbad-463f-9d3b-0ad4342a6732": {
                    "Id": "A22acd460-bbad-463f-9d3b-0ad4342a6732",
                    "IdConcepto": "mx_ccd_DecreaseIncreaseInLoansAndReceivablesAtAmortizedCost",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A97186825-1807-435d-8f13-ba45f0250f94": {
                    "Id": "A97186825-1807-435d-8f13-ba45f0250f94",
                    "IdConcepto": "mx_ccd_RealizedGainOfAssetsDesignatedAtFairValue",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A786af348-56ab-488d-b81f-08e8e1285a89": {
                    "Id": "A786af348-56ab-488d-b81f-08e8e1285a89",
                    "IdConcepto": "mx_ccd_RealizedGainOfAssetsDesignatedAtFairValue",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A97ac24f5-d69f-4094-81b2-0f65360500d6": {
                    "Id": "A97ac24f5-d69f-4094-81b2-0f65360500d6",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsForNoncashItems",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7b3377a3-d14e-4462-a116-5c1ce27c0ec9": {
                    "Id": "A7b3377a3-d14e-4462-a116-5c1ce27c0ec9",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsForNoncashItems",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A944cac98-65ff-4e05-9b9c-ba30be27c988": {
                    "Id": "A944cac98-65ff-4e05-9b9c-ba30be27c988",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsToReconcileProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7554042a-9696-4712-971c-1a79cd30cbc5": {
                    "Id": "A7554042a-9696-4712-971c-1a79cd30cbc5",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsToReconcileProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adb13e877-9277-4160-b500-282e89bbbddf": {
                    "Id": "Adb13e877-9277-4160-b500-282e89bbbddf",
                    "IdConcepto": "ifrs-full_AdjustmentsForReconcileProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad237abb8-7f28-4bff-81b7-e48a1eedc473": {
                    "Id": "Ad237abb8-7f28-4bff-81b7-e48a1eedc473",
                    "IdConcepto": "ifrs-full_AdjustmentsForReconcileProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A21784f0a-eb67-483f-aca9-6097524eb775": {
                    "Id": "A21784f0a-eb67-483f-aca9-6097524eb775",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af6dabecc-2079-4209-9f43-6653714ab8d0": {
                    "Id": "Af6dabecc-2079-4209-9f43-6653714ab8d0",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1a7f09ae-5321-40ef-855e-c2be089f122c": {
                    "Id": "A1a7f09ae-5321-40ef-855e-c2be089f122c",
                    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae685736f-5cb2-4e56-be10-8935080acc31": {
                    "Id": "Ae685736f-5cb2-4e56-be10-8935080acc31",
                    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7763f3c3-48b2-4535-a70b-9f3d967bc89d": {
                    "Id": "A7763f3c3-48b2-4535-a70b-9f3d967bc89d",
                    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A696541cd-dfcc-46b1-8882-fc46691b9597": {
                    "Id": "A696541cd-dfcc-46b1-8882-fc46691b9597",
                    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab8fbd429-8628-49c3-a43a-75e9234320d8": {
                    "Id": "Ab8fbd429-8628-49c3-a43a-75e9234320d8",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1719199d-dc04-4d3f-9501-8874bbd60470": {
                    "Id": "A1719199d-dc04-4d3f-9501-8874bbd60470",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A83e6c4d0-ff5a-44f6-8d84-97a289c83a4d": {
                    "Id": "A83e6c4d0-ff5a-44f6-8d84-97a289c83a4d",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9bc7df71-eaa0-49e7-a4be-2956945f94ca": {
                    "Id": "A9bc7df71-eaa0-49e7-a4be-2956945f94ca",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A941a4973-67ed-44f1-84d3-f95b1536c9ab": {
                    "Id": "A941a4973-67ed-44f1-84d3-f95b1536c9ab",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A35f8f0aa-01ed-49e6-89bf-7de2b4aec73a": {
                    "Id": "A35f8f0aa-01ed-49e6-89bf-7de2b4aec73a",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2cdb8c59-aba5-4b94-a032-dab047fe13a0": {
                    "Id": "A2cdb8c59-aba5-4b94-a032-dab047fe13a0",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac00f3652-b8aa-41cb-b9db-eee323455970": {
                    "Id": "Ac00f3652-b8aa-41cb-b9db-eee323455970",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0d4cac7d-4b73-4631-b490-83117ce1b955": {
                    "Id": "A0d4cac7d-4b73-4631-b490-83117ce1b955",
                    "IdConcepto": "ifrs-full_CashFlowsFromLosingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ade5afb6a-ff11-41ab-932c-71842a7bec6d": {
                    "Id": "Ade5afb6a-ff11-41ab-932c-71842a7bec6d",
                    "IdConcepto": "ifrs-full_CashFlowsFromLosingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adafb9321-e202-4d5f-b9cd-adcbe3a45d3e": {
                    "Id": "Adafb9321-e202-4d5f-b9cd-adcbe3a45d3e",
                    "IdConcepto": "ifrs-full_CashFlowsUsedInObtainingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8c4df9fa-cda5-4bc2-ba01-a7159c4d4f76": {
                    "Id": "A8c4df9fa-cda5-4bc2-ba01-a7159c4d4f76",
                    "IdConcepto": "ifrs-full_CashFlowsUsedInObtainingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A07f5345e-7f96-4877-8834-4cb9a88b952a": {
                    "Id": "A07f5345e-7f96-4877-8834-4cb9a88b952a",
                    "IdConcepto": "ifrs-full_OtherCashReceiptsFromSalesOfEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6ff55433-fac5-43e3-8889-ac36499001d3": {
                    "Id": "A6ff55433-fac5-43e3-8889-ac36499001d3",
                    "IdConcepto": "ifrs-full_OtherCashReceiptsFromSalesOfEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa9c23c3f-5aed-4606-8582-808ab507efe6": {
                    "Id": "Aa9c23c3f-5aed-4606-8582-808ab507efe6",
                    "IdConcepto": "ifrs-full_OtherCashPaymentsToAcquireEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1fc536ee-47a4-4e98-9a26-b834232a507e": {
                    "Id": "A1fc536ee-47a4-4e98-9a26-b834232a507e",
                    "IdConcepto": "ifrs-full_OtherCashPaymentsToAcquireEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad588eebe-7049-4a46-8c26-b574c4b64e2e": {
                    "Id": "Ad588eebe-7049-4a46-8c26-b574c4b64e2e",
                    "IdConcepto": "mx_ccd_CashFlowFromInvestmentFunds",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A265acf41-ad14-4b93-a793-b4e3452afac9": {
                    "Id": "A265acf41-ad14-4b93-a793-b4e3452afac9",
                    "IdConcepto": "mx_ccd_CashFlowFromInvestmentFunds",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af2e6dbbd-cf24-472e-816f-d0a897ed5851": {
                    "Id": "Af2e6dbbd-cf24-472e-816f-d0a897ed5851",
                    "IdConcepto": "mx_ccd_CashFlowsUsedForTheAcquisitionOfInvestmentFunds",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0c8ac913-8255-4cf0-83b8-f93e616d434a": {
                    "Id": "A0c8ac913-8255-4cf0-83b8-f93e616d434a",
                    "IdConcepto": "mx_ccd_CashFlowsUsedForTheAcquisitionOfInvestmentFunds",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac29f4ee6-dc2b-4562-a476-b5f0360d198e": {
                    "Id": "Ac29f4ee6-dc2b-4562-a476-b5f0360d198e",
                    "IdConcepto": "ifrs-full_ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A60d28d37-c985-47e3-91bf-ba15e19c5938": {
                    "Id": "A60d28d37-c985-47e3-91bf-ba15e19c5938",
                    "IdConcepto": "ifrs-full_ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A40c3e00d-8d58-4ae3-a4f4-2940b4d727a9": {
                    "Id": "A40c3e00d-8d58-4ae3-a4f4-2940b4d727a9",
                    "IdConcepto": "ifrs-full_PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0a2a666d-0af0-4300-9a25-e6297634cf30": {
                    "Id": "A0a2a666d-0af0-4300-9a25-e6297634cf30",
                    "IdConcepto": "ifrs-full_PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab14f487b-c81a-474f-9f39-f17613520986": {
                    "Id": "Ab14f487b-c81a-474f-9f39-f17613520986",
                    "IdConcepto": "ifrs-full_ProceedsFromOtherLongtermAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A24d82533-cac2-4d5b-a8fe-0dca251fcf65": {
                    "Id": "A24d82533-cac2-4d5b-a8fe-0dca251fcf65",
                    "IdConcepto": "ifrs-full_ProceedsFromOtherLongtermAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7788b158-18e6-4b0c-b7b1-ce257c4c15ac": {
                    "Id": "A7788b158-18e6-4b0c-b7b1-ce257c4c15ac",
                    "IdConcepto": "ifrs-full_PurchaseOfOtherLongtermAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0e8ba9cf-23bf-45c2-b55c-7c690c0f2c14": {
                    "Id": "A0e8ba9cf-23bf-45c2-b55c-7c690c0f2c14",
                    "IdConcepto": "ifrs-full_PurchaseOfOtherLongtermAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad43e4416-b6ad-48a0-b1e6-62abf61bea3b": {
                    "Id": "Ad43e4416-b6ad-48a0-b1e6-62abf61bea3b",
                    "IdConcepto": "ifrs-full_CashAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5e2a9f1a-7944-4534-83cb-7b4a78c50dfe": {
                    "Id": "A5e2a9f1a-7944-4534-83cb-7b4a78c50dfe",
                    "IdConcepto": "ifrs-full_CashAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6a98bc9c-ad84-4ae4-a460-bdbfd90bdf4f": {
                    "Id": "A6a98bc9c-ad84-4ae4-a460-bdbfd90bdf4f",
                    "IdConcepto": "ifrs-full_CashReceiptsFromRepaymentOfAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A15a89c65-2dbd-4064-b5f3-6043b212b26c": {
                    "Id": "A15a89c65-2dbd-4064-b5f3-6043b212b26c",
                    "IdConcepto": "ifrs-full_CashReceiptsFromRepaymentOfAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Add56ad23-737c-40ad-a7d6-f7ddef535c38": {
                    "Id": "Add56ad23-737c-40ad-a7d6-f7ddef535c38",
                    "IdConcepto": "ifrs-full_CashPaymentsForFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A64737879-e01b-48bf-9cb8-762a1bb38ca8": {
                    "Id": "A64737879-e01b-48bf-9cb8-762a1bb38ca8",
                    "IdConcepto": "ifrs-full_CashPaymentsForFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5135ea9c-257a-49b8-8007-b9c1ad4cb31f": {
                    "Id": "A5135ea9c-257a-49b8-8007-b9c1ad4cb31f",
                    "IdConcepto": "ifrs-full_CashReceiptsFromFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad187b063-6428-493c-8faa-0420558ae407": {
                    "Id": "Ad187b063-6428-493c-8faa-0420558ae407",
                    "IdConcepto": "ifrs-full_CashReceiptsFromFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5f396776-52f1-4ea2-8e38-337218a24a53": {
                    "Id": "A5f396776-52f1-4ea2-8e38-337218a24a53",
                    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaca4f45d-93bd-47b3-878c-27edec8fd3a8": {
                    "Id": "Aaca4f45d-93bd-47b3-878c-27edec8fd3a8",
                    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7fe86ab0-4779-43c4-baed-f21d2bd3997d": {
                    "Id": "A7fe86ab0-4779-43c4-baed-f21d2bd3997d",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae262efe1-0b1b-4543-98d3-1ac7b2064f8f": {
                    "Id": "Ae262efe1-0b1b-4543-98d3-1ac7b2064f8f",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A12102385-2173-4d32-a4d2-77c457b5304f": {
                    "Id": "A12102385-2173-4d32-a4d2-77c457b5304f",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6b65bb0e-ec64-409c-8f8f-474869c1a7ec": {
                    "Id": "A6b65bb0e-ec64-409c-8f8f-474869c1a7ec",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af4fff598-8288-4107-8b53-e284ab0e3977": {
                    "Id": "Af4fff598-8288-4107-8b53-e284ab0e3977",
                    "IdConcepto": "ifrs-full_IncomeTaxesPaidRefundClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aadfd9822-6c73-422a-afb7-e5409761c8e6": {
                    "Id": "Aadfd9822-6c73-422a-afb7-e5409761c8e6",
                    "IdConcepto": "ifrs-full_IncomeTaxesPaidRefundClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A75b8ce4b-e881-46e5-9197-6cc34733bd59": {
                    "Id": "A75b8ce4b-e881-46e5-9197-6cc34733bd59",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A256b23c0-7789-44f5-bd83-97bd21323f6d": {
                    "Id": "A256b23c0-7789-44f5-bd83-97bd21323f6d",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afc72c641-12fd-4456-aaf4-8c466f459381": {
                    "Id": "Afc72c641-12fd-4456-aaf4-8c466f459381",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adf9c565b-3b1f-4975-b281-1a628d3ff48d": {
                    "Id": "Adf9c565b-3b1f-4975-b281-1a628d3ff48d",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInInvestingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5a43dea0-c2ec-4af1-95e3-22c91f70fbde": {
                    "Id": "A5a43dea0-c2ec-4af1-95e3-22c91f70fbde",
                    "IdConcepto": "ifrs-full_ProceedsFromIssuingShares",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad059f3a2-dad2-4377-b830-042de59e2191": {
                    "Id": "Ad059f3a2-dad2-4377-b830-042de59e2191",
                    "IdConcepto": "ifrs-full_ProceedsFromIssuingShares",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad4aab4c5-a2f8-484d-9e5b-099ad110c111": {
                    "Id": "Ad4aab4c5-a2f8-484d-9e5b-099ad110c111",
                    "IdConcepto": "ifrs-full_PaymentsOfOtherEquityInstruments",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A24d6c486-9a61-4213-b26e-1ec992bfeb7f": {
                    "Id": "A24d6c486-9a61-4213-b26e-1ec992bfeb7f",
                    "IdConcepto": "ifrs-full_PaymentsOfOtherEquityInstruments",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad851a287-5969-4765-a8d8-ea5d66874222": {
                    "Id": "Ad851a287-5969-4765-a8d8-ea5d66874222",
                    "IdConcepto": "ifrs-full_ProceedsFromBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A82a83a49-cf96-4273-a970-de684afaf5fb": {
                    "Id": "A82a83a49-cf96-4273-a970-de684afaf5fb",
                    "IdConcepto": "ifrs-full_ProceedsFromBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A22dd23aa-a500-4204-aa77-247f22b0fcdc": {
                    "Id": "A22dd23aa-a500-4204-aa77-247f22b0fcdc",
                    "IdConcepto": "ifrs-full_RepaymentsOfBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A80cd7e4b-db80-4687-a2e3-e938cd7e0302": {
                    "Id": "A80cd7e4b-db80-4687-a2e3-e938cd7e0302",
                    "IdConcepto": "ifrs-full_RepaymentsOfBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1ede019c-b7e9-4575-870f-acb041fc302e": {
                    "Id": "A1ede019c-b7e9-4575-870f-acb041fc302e",
                    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa918e91d-b9e4-4401-bf34-ffac4893c3d0": {
                    "Id": "Aa918e91d-b9e4-4401-bf34-ffac4893c3d0",
                    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A96ea0a47-d092-49e9-aa26-a205a4c4b324": {
                    "Id": "A96ea0a47-d092-49e9-aa26-a205a4c4b324",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad3791436-d344-42f3-a864-43ba95c4fdba": {
                    "Id": "Ad3791436-d344-42f3-a864-43ba95c4fdba",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa6b6f900-8253-473c-9d76-4a7779559e48": {
                    "Id": "Aa6b6f900-8253-473c-9d76-4a7779559e48",
                    "IdConcepto": "mx_ccd_IssueAndPlacementOfStockCertificates",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A843178a7-2380-4444-9957-833aad32c328": {
                    "Id": "A843178a7-2380-4444-9957-833aad32c328",
                    "IdConcepto": "mx_ccd_IssueAndPlacementOfStockCertificates",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7a57f452-049b-4d0d-a835-246889b55add": {
                    "Id": "A7a57f452-049b-4d0d-a835-246889b55add",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab57b965e-ba19-4885-849f-26ce205c4dd9": {
                    "Id": "Ab57b965e-ba19-4885-849f-26ce205c4dd9",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab1b940d1-172b-4ffe-b8d0-fa6f3ff84a95": {
                    "Id": "Ab1b940d1-172b-4ffe-b8d0-fa6f3ff84a95",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A17e0eb1d-b85a-44b1-82c2-1780ff720927": {
                    "Id": "A17e0eb1d-b85a-44b1-82c2-1780ff720927",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInFinancingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A11814a21-3b78-45e8-befd-60750fb8aaa0": {
                    "Id": "A11814a21-3b78-45e8-befd-60750fb8aaa0",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1b6de3c3-5c22-4eaf-81a4-b3a5ac434703": {
                    "Id": "A1b6de3c3-5c22-4eaf-81a4-b3a5ac434703",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7dc5169b-7759-474e-970f-56e9fff397ba": {
                    "Id": "A7dc5169b-7759-474e-970f-56e9fff397ba",
                    "IdConcepto": "ifrs-full_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A89483310-5197-4e7f-9065-954203a0291a": {
                    "Id": "A89483310-5197-4e7f-9065-954203a0291a",
                    "IdConcepto": "ifrs-full_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abc69e8ef-4200-42af-8ba6-50e3418e4099": {
                    "Id": "Abc69e8ef-4200-42af-8ba6-50e3418e4099",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6297e079-80df-4433-b151-c18e8f686df9": {
                    "Id": "A6297e079-80df-4433-b151-c18e8f686df9",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acc92796c-2ffb-4e17-b08e-b43078c497b7": {
                    "Id": "Acc92796c-2ffb-4e17-b08e-b43078c497b7",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "fin_trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6328834b-c47c-463b-af3b-7746bbb5a575": {
                    "Id": "A6328834b-c47c-463b-af3b-7746bbb5a575",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aee574a33-d581-45a9-a28e-b18473c3dc3c": {
                    "Id": "Aee574a33-d581-45a9-a28e-b18473c3dc3c",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4c8826d9-0c1c-46e0-89e7-ee264c9ad61d": {
                    "Id": "A4c8826d9-0c1c-46e0-89e7-ee264c9ad61d",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "FinTrimestreAnterior",
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