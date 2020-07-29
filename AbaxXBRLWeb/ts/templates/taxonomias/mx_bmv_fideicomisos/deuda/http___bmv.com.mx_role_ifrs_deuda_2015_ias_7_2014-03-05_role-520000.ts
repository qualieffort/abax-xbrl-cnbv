///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_7_2014-03-05_role-520000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_7_2014_03_05_role_520000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_7_2014_03_05_role_520000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_520000_Metodo_Indirecto_Si': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_520000_Metodo_Indirecto_Si',
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
                                IdConcepto: 'mx_deuda_CashFlowStatementForInderectMethod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ExcepcionPeriodo: true
                            })
                        }
                    }),
                'VA_520000_Metodo_Indirecto_Si_TotalAjustes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_520000_Metodo_Indirecto_Si_TotalAjustes',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable16=="NO") or ( bignumber(variable1) == bignumber(variable2) + bignumber(variable3)+bignumber(variable4)+bignumber(variable5)+bignumber(variable6)+bignumber(variable7)+bignumber(variable8)+bignumber(variable9)+bignumber(variable10)+bignumber(variable11)+bignumber(variable12)+bignumber(variable13)+bignumber(variable14)+bignumber(variable15))',
                        MensajeExito: 'El valor de {variable1} corresponde a la sumatoria de su integración.',
                        MensajeError: 'El valor de {variable1} no corresponde a la sumatoria de su integración.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_AdjustmentsForReconcileProfitLoss',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_AdjustmentsForFinanceCosts',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'ifrs-full_AdjustmentsForProvisions',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'ifrs-full_AdjustmentsForFairValueGainsLosses',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable7': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable7',
                                IdConcepto: 'ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable8': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable8',
                                IdConcepto: 'ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable9': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable9',
                                IdConcepto: 'ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable10': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable10',
                                IdConcepto: 'ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable11': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable11',
                                IdConcepto: 'mx_deuda_DecreaseIncreaseReceivables',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable12': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable12',
                                IdConcepto: 'mx_deuda_DecreaseIncreaseInLoansWithCollateral',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable13': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable13',
                                IdConcepto: 'mx_deuda_SaleOfRepossessedAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable14': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable14',
                                IdConcepto: 'ifrs-full_OtherAdjustmentsForNoncashItems',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable15': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable15',
                                IdConcepto: 'ifrs-full_OtherAdjustmentsToReconcileProfitLoss',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable16': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable16',
                                IdConcepto: 'mx_deuda_CashFlowStatementForInderectMethod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ExcepcionPeriodo: true
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
                },
                "Acumulado_anio_anterior": {
                    "Id": "Acumulado_anio_anterior",
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
                "Instante_ejercicio_inicio_ejercicio_anterior": {
                    "Id": "Instante_ejercicio_inicio_ejercicio_anterior",
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
                "Instante_Actual": {
                    "Id": "Instante_Actual",
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
                "Instante_fin_ejercicio_anterior": {
                    "Id": "Instante_fin_ejercicio_anterior",
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
                "Instante_ejercicio_anterior": {
                    "Id": "Instante_ejercicio_anterior",
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
                "Ad04b35ea-3b21-46b6-9c2d-f6a63215391c": {
                    "Id": "Ad04b35ea-3b21-46b6-9c2d-f6a63215391c",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A96804bcc-98d5-46cc-8ca5-9c98ee3e68a7": {
                    "Id": "A96804bcc-98d5-46cc-8ca5-9c98ee3e68a7",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa62fb5b6-64e8-4442-a360-7f4f76fe99ec": {
                    "Id": "Aa62fb5b6-64e8-4442-a360-7f4f76fe99ec",
                    "IdConcepto": "ifrs-full_AdjustmentsForFinanceCosts",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A68a7cef6-21b1-4be0-a75a-45f8afb52865": {
                    "Id": "A68a7cef6-21b1-4be0-a75a-45f8afb52865",
                    "IdConcepto": "ifrs-full_AdjustmentsForFinanceCosts",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8822dacc-1f35-4877-9da9-ce1922ff1b4a": {
                    "Id": "A8822dacc-1f35-4877-9da9-ce1922ff1b4a",
                    "IdConcepto": "ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A65102b64-0bcb-4331-974a-b672c77c2922": {
                    "Id": "A65102b64-0bcb-4331-974a-b672c77c2922",
                    "IdConcepto": "ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A501dac16-cba9-4618-af5f-4e5cb2d4da91": {
                    "Id": "A501dac16-cba9-4618-af5f-4e5cb2d4da91",
                    "IdConcepto": "ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1399be0f-dcee-4328-bfaa-9cfe8c389a44": {
                    "Id": "A1399be0f-dcee-4328-bfaa-9cfe8c389a44",
                    "IdConcepto": "ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9818e3bb-f504-496b-bf1c-1800b16fa2d4": {
                    "Id": "A9818e3bb-f504-496b-bf1c-1800b16fa2d4",
                    "IdConcepto": "ifrs-full_AdjustmentsForProvisions",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaa5bf82e-1e23-4b59-9ecb-3f47094cf35f": {
                    "Id": "Aaa5bf82e-1e23-4b59-9ecb-3f47094cf35f",
                    "IdConcepto": "ifrs-full_AdjustmentsForProvisions",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9852fb90-827a-40e8-aef1-142c465caa8b": {
                    "Id": "A9852fb90-827a-40e8-aef1-142c465caa8b",
                    "IdConcepto": "ifrs-full_AdjustmentsForFairValueGainsLosses",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af112f3f6-3bb3-4089-b0a6-062680ee295a": {
                    "Id": "Af112f3f6-3bb3-4089-b0a6-062680ee295a",
                    "IdConcepto": "ifrs-full_AdjustmentsForFairValueGainsLosses",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa6285ec0-8177-4ed2-aed1-6e11339805a5": {
                    "Id": "Aa6285ec0-8177-4ed2-aed1-6e11339805a5",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac2e12f6b-a442-4dba-b982-8c416b8436f0": {
                    "Id": "Ac2e12f6b-a442-4dba-b982-8c416b8436f0",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A04cdd76e-351b-462b-b17b-89f435ece882": {
                    "Id": "A04cdd76e-351b-462b-b17b-89f435ece882",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4fce57eb-c47a-4b31-a594-9d6cf4bcdde7": {
                    "Id": "A4fce57eb-c47a-4b31-a594-9d6cf4bcdde7",
                    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad2655a59-e1dc-4157-ba5d-1ace563269e9": {
                    "Id": "Ad2655a59-e1dc-4157-ba5d-1ace563269e9",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae9ee3646-f9e9-49c5-9725-ef852d746b3d": {
                    "Id": "Ae9ee3646-f9e9-49c5-9725-ef852d746b3d",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac3cac731-b71d-45f6-941b-f4d064e9ceca": {
                    "Id": "Ac3cac731-b71d-45f6-941b-f4d064e9ceca",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A366e48f9-52ea-4f65-b13f-cd5a9657adc3": {
                    "Id": "A366e48f9-52ea-4f65-b13f-cd5a9657adc3",
                    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A89180d6f-62ab-4059-a155-74b202fa6dd2": {
                    "Id": "A89180d6f-62ab-4059-a155-74b202fa6dd2",
                    "IdConcepto": "mx_deuda_DecreaseIncreaseReceivables",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab729fb21-9a88-4fc0-a573-7751d56403cb": {
                    "Id": "Ab729fb21-9a88-4fc0-a573-7751d56403cb",
                    "IdConcepto": "mx_deuda_DecreaseIncreaseReceivables",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A03ec02fb-ff90-416a-82fe-66b41c597f26": {
                    "Id": "A03ec02fb-ff90-416a-82fe-66b41c597f26",
                    "IdConcepto": "mx_deuda_DecreaseIncreaseInLoansWithCollateral",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acc93233f-052a-49cc-ae26-f015770237df": {
                    "Id": "Acc93233f-052a-49cc-ae26-f015770237df",
                    "IdConcepto": "mx_deuda_DecreaseIncreaseInLoansWithCollateral",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3b25e892-e20d-4d66-a379-a597e6e82f34": {
                    "Id": "A3b25e892-e20d-4d66-a379-a597e6e82f34",
                    "IdConcepto": "mx_deuda_SaleOfRepossessedAssets",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa1d5bd01-35a2-4c76-8722-6011de7b270b": {
                    "Id": "Aa1d5bd01-35a2-4c76-8722-6011de7b270b",
                    "IdConcepto": "mx_deuda_SaleOfRepossessedAssets",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac9683267-9883-4552-a76f-f19a24245736": {
                    "Id": "Ac9683267-9883-4552-a76f-f19a24245736",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsForNoncashItems",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A81f2a26f-6c33-40b3-8f1b-f760a3bd8c75": {
                    "Id": "A81f2a26f-6c33-40b3-8f1b-f760a3bd8c75",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsForNoncashItems",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4b99361d-48ab-42eb-9c76-262d6162be3b": {
                    "Id": "A4b99361d-48ab-42eb-9c76-262d6162be3b",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsToReconcileProfitLoss",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aca013f3f-c4a1-47a4-98fe-5da61ef3a276": {
                    "Id": "Aca013f3f-c4a1-47a4-98fe-5da61ef3a276",
                    "IdConcepto": "ifrs-full_OtherAdjustmentsToReconcileProfitLoss",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6e2dfd73-221a-48ce-ad6e-50295db18e24": {
                    "Id": "A6e2dfd73-221a-48ce-ad6e-50295db18e24",
                    "IdConcepto": "ifrs-full_AdjustmentsForReconcileProfitLoss",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa8a5e5ab-a117-4334-96c7-002c512d0852": {
                    "Id": "Aa8a5e5ab-a117-4334-96c7-002c512d0852",
                    "IdConcepto": "ifrs-full_AdjustmentsForReconcileProfitLoss",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A380394bd-1f5a-4b3a-b7f5-19c37045e173": {
                    "Id": "A380394bd-1f5a-4b3a-b7f5-19c37045e173",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperations",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5ba78c71-f24f-4e4b-a529-3b952bcd2394": {
                    "Id": "A5ba78c71-f24f-4e4b-a529-3b952bcd2394",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperations",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A883658a7-071e-4da3-a1af-63fe6e774e6c": {
                    "Id": "A883658a7-071e-4da3-a1af-63fe6e774e6c",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A719fb7e4-9556-43ed-b612-fbd93b9a3b81": {
                    "Id": "A719fb7e4-9556-43ed-b612-fbd93b9a3b81",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A28dd0af5-c7f0-47b9-97e4-7c02a7124b4d": {
                    "Id": "A28dd0af5-c7f0-47b9-97e4-7c02a7124b4d",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A159c2fb9-02f3-4227-b104-beb0a7edbe15": {
                    "Id": "A159c2fb9-02f3-4227-b104-beb0a7edbe15",
                    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2487a72d-139a-48ea-a429-3bb16e3f06e3": {
                    "Id": "A2487a72d-139a-48ea-a429-3bb16e3f06e3",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af317addf-d424-446f-8030-6cfbe94d538d": {
                    "Id": "Af317addf-d424-446f-8030-6cfbe94d538d",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6c339ace-b550-40d1-a524-d0b4654e57d0": {
                    "Id": "A6c339ace-b550-40d1-a524-d0b4654e57d0",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperatingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af59d75db-c72b-495c-ad7e-69ce49fa8bd2": {
                    "Id": "Af59d75db-c72b-495c-ad7e-69ce49fa8bd2",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abb09d407-f304-4013-8afc-2f0ae190e950": {
                    "Id": "Abb09d407-f304-4013-8afc-2f0ae190e950",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A016a4aff-1593-4f27-9d8a-09ccb15503fc": {
                    "Id": "A016a4aff-1593-4f27-9d8a-09ccb15503fc",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1d78b70c-e2fe-4658-9511-8ba675e84939": {
                    "Id": "A1d78b70c-e2fe-4658-9511-8ba675e84939",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInInvestingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A043b8ef1-ee74-4645-b1ae-cabb94fc3e67": {
                    "Id": "A043b8ef1-ee74-4645-b1ae-cabb94fc3e67",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInInvestingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acd02703b-b07d-4049-b67f-26ba24cae961": {
                    "Id": "Acd02703b-b07d-4049-b67f-26ba24cae961",
                    "IdConcepto": "ifrs-full_ProceedsFromIssuingShares",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aee8c93a4-b2ac-4bee-9e52-32027563f176": {
                    "Id": "Aee8c93a4-b2ac-4bee-9e52-32027563f176",
                    "IdConcepto": "ifrs-full_ProceedsFromIssuingShares",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acb0a8d50-8b08-466e-9e40-b3dca04fbc6c": {
                    "Id": "Acb0a8d50-8b08-466e-9e40-b3dca04fbc6c",
                    "IdConcepto": "ifrs-full_ProceedsFromBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A07f183fb-1798-498f-93f2-eae84e94b76f": {
                    "Id": "A07f183fb-1798-498f-93f2-eae84e94b76f",
                    "IdConcepto": "ifrs-full_ProceedsFromBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2ea4e38f-18b8-48c6-85ed-d00d6f6c247c": {
                    "Id": "A2ea4e38f-18b8-48c6-85ed-d00d6f6c247c",
                    "IdConcepto": "ifrs-full_RepaymentsOfBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad72320f6-2ec4-4a12-bd2e-529c52d65d10": {
                    "Id": "Ad72320f6-2ec4-4a12-bd2e-529c52d65d10",
                    "IdConcepto": "ifrs-full_RepaymentsOfBorrowingsClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6958e7c3-b739-4a50-977d-bda5ef5d0db2": {
                    "Id": "A6958e7c3-b739-4a50-977d-bda5ef5d0db2",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8de27c8a-296d-4317-abc2-9d61fa3404f4": {
                    "Id": "A8de27c8a-296d-4317-abc2-9d61fa3404f4",
                    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8441f167-5f12-4a51-a14a-da10ec499711": {
                    "Id": "A8441f167-5f12-4a51-a14a-da10ec499711",
                    "IdConcepto": "mx_deuda_IssueAndPlacementOfStockCertificates",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f8c71ed-1a58-4cbe-b862-f511e87c8fa9": {
                    "Id": "A4f8c71ed-1a58-4cbe-b862-f511e87c8fa9",
                    "IdConcepto": "mx_deuda_IssueAndPlacementOfStockCertificates",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A538158cf-9bf3-4dca-89a6-2b937a735bdc": {
                    "Id": "A538158cf-9bf3-4dca-89a6-2b937a735bdc",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae2cae281-e7ca-4d02-9838-8af03388a260": {
                    "Id": "Ae2cae281-e7ca-4d02-9838-8af03388a260",
                    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2a87d849-0d6e-4576-acc8-588ef44789a2": {
                    "Id": "A2a87d849-0d6e-4576-acc8-588ef44789a2",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInFinancingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A12c0ce22-b095-470d-b677-92c115cd4226": {
                    "Id": "A12c0ce22-b095-470d-b677-92c115cd4226",
                    "IdConcepto": "ifrs-full_CashFlowsFromUsedInFinancingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aee868a4d-4236-4088-9c8b-76caf2265ec7": {
                    "Id": "Aee868a4d-4236-4088-9c8b-76caf2265ec7",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae1bc32cc-6fc1-4e8f-bb39-1dce7746d7a0": {
                    "Id": "Ae1bc32cc-6fc1-4e8f-bb39-1dce7746d7a0",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8cd84dd5-8858-4828-9266-528e7ebd7ce9": {
                    "Id": "A8cd84dd5-8858-4828-9266-528e7ebd7ce9",
                    "IdConcepto": "ifrs-full_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad6369c47-700e-46da-80c4-10dcedf2fa17": {
                    "Id": "Ad6369c47-700e-46da-80c4-10dcedf2fa17",
                    "IdConcepto": "ifrs-full_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6e14acb5-7640-4b98-9bb2-0dd9984b02dd": {
                    "Id": "A6e14acb5-7640-4b98-9bb2-0dd9984b02dd",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A32ed0e25-c851-44eb-9bc7-50c9db034d4f": {
                    "Id": "A32ed0e25-c851-44eb-9bc7-50c9db034d4f",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad964de9a-b9fc-4d7d-839b-d09f551a58a1": {
                    "Id": "Ad964de9a-b9fc-4d7d-839b-d09f551a58a1",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab6fe7c10-4f0c-42cf-8e56-88376ca5166e": {
                    "Id": "Ab6fe7c10-4f0c-42cf-8e56-88376ca5166e",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A68925864-62df-4b61-bca5-e0dfac921900": {
                    "Id": "A68925864-62df-4b61-bca5-e0dfac921900",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ada2aa93c-fc67-402b-be2f-f6eb5132d83b": {
                    "Id": "Ada2aa93c-fc67-402b-be2f-f6eb5132d83b",
                    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_ejercicio_anterior",
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