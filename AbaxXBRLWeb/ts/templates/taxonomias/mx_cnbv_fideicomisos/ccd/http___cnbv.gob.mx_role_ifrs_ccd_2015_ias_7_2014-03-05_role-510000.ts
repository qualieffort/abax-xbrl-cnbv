///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ccd/2015/ias_7_2014-03-05_role-510000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_7_2014_03_05_role_510000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_7_2014_03_05_role_510000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_510000_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_510000_1',
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
                    }),
                'VA_510000_Metodo_Indirecto_No': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_510000_Metodo_Indirecto_No',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable15=="SI") or ( bignumber(variable1) == bignumber(variable2) + bignumber(variable3)+ bignumber(variable4)+ bignumber(variable5)+ bignumber(variable6)+ bignumber(variable7)+ bignumber(variable8)- bignumber(variable9)- bignumber(variable10)- bignumber(variable11)- bignumber(variable12)- bignumber(variable13)- bignumber(variable14))',
                        MensajeExito: 'El valor de {variable1} corresponde a Cobros procedentes de los ingresos + Recuperación de impuestos + Comisión mercantil + Cobros procedentes de cuentas por cobrar + Ingresos financieros + Derechos de cobro + Otros cobros por actividades de operación - Pagos por el suministro de bienes y servicios - Gastos de mantenimiento y administración - Pagos procedentes de cuentas por pagar - Gastos Financieros - Pagos por comisión de administración - Otros pagos por actividades de operación .',
                        MensajeError: 'El valor de {variable1} no corresponde a Cobros procedentes de los ingresos + Recuperación de impuestos + Comisión mercantil + Cobros procedentes de cuentas por cobrar + Ingresos financieros + Derechos de cobro + Otros cobros por actividades de operación - Pagos por el suministro de bienes y servicios - Gastos de mantenimiento y administración - Pagos procedentes de cuentas por pagar - Gastos Financieros - Pagos por comisión de administración - Otros pagos por actividades de operación.',
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
                                IdConcepto: 'ifrs-full_ReceiptsFromSalesOfGoodsAndRenderingOfServices',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'mx_ccd_TaxRecovery',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'mx_ccd_CommercialCommission',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'mx_ccd_CollectionsFromAccountsReceivable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'mx_ccd_FinancialIncome',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable7': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable7',
                                IdConcepto: 'mx_ccd_Receivables',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable8': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable8',
                                IdConcepto: 'ifrs-full_OtherCashReceiptsFromOperatingActivities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable9': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable9',
                                IdConcepto: 'ifrs-full_PaymentsToSuppliersForGoodsAndServices',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable10': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable10',
                                IdConcepto: 'mx_ccd_MaintenanceAndAdministrationExpenses',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable11': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable11',
                                IdConcepto: 'mx_ccd_PaymentsMadeOnAccountsPayable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable12': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable12',
                                IdConcepto: 'mx_ccd_FinancialExpenses',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable13': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable13',
                                IdConcepto: 'mx_ccd_ManagementFeePayments',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable14': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable14',
                                IdConcepto: 'ifrs-full_OtherCashPaymentsFromOperatingActivities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable15': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable15',
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
                "A97776880-7514-4850-9699-d05fa0d8004d": {
                    "Id": "A97776880-7514-4850-9699-d05fa0d8004d",
                    "IdConcepto": "ifrs-full_ReceiptsFromSalesOfGoodsAndRenderingOfServices",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0ad45fb7-a77f-4005-81ed-7aa0c07529ad": {
                    "Id": "A0ad45fb7-a77f-4005-81ed-7aa0c07529ad",
                    "IdConcepto": "ifrs-full_ReceiptsFromSalesOfGoodsAndRenderingOfServices",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abf34254c-578f-4603-b671-ba51993bf222": {
                    "Id": "Abf34254c-578f-4603-b671-ba51993bf222",
                    "IdConcepto": "mx_ccd_TaxRecovery",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af99bcc9e-ecab-48ca-9444-c6ae727d3bd0": {
                    "Id": "Af99bcc9e-ecab-48ca-9444-c6ae727d3bd0",
                    "IdConcepto": "mx_ccd_TaxRecovery",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7dbbca9f-3930-469a-bdd6-b2f289b16be4": {
                    "Id": "A7dbbca9f-3930-469a-bdd6-b2f289b16be4",
                    "IdConcepto": "mx_ccd_CommercialCommission",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac829af18-2cd4-42f9-ba85-4cb0f723cfe7": {
                    "Id": "Ac829af18-2cd4-42f9-ba85-4cb0f723cfe7",
                    "IdConcepto": "mx_ccd_CommercialCommission",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9af9e97c-0d74-4af2-b37e-eccf4ec934ac": {
                    "Id": "A9af9e97c-0d74-4af2-b37e-eccf4ec934ac",
                    "IdConcepto": "mx_ccd_CollectionsFromAccountsReceivable",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad202414a-6868-417f-afb9-4ac0515b55c7": {
                    "Id": "Ad202414a-6868-417f-afb9-4ac0515b55c7",
                    "IdConcepto": "mx_ccd_CollectionsFromAccountsReceivable",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A64144764-25b6-4093-a494-c303faf71eda": {
                    "Id": "A64144764-25b6-4093-a494-c303faf71eda",
                    "IdConcepto": "mx_ccd_FinancialIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A29dd5c2a-516a-421a-a6a3-ea8a8c9f833c": {
                    "Id": "A29dd5c2a-516a-421a-a6a3-ea8a8c9f833c",
                    "IdConcepto": "mx_ccd_FinancialIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2abf9547-ba35-4db4-9da3-e535223a534e": {
                    "Id": "A2abf9547-ba35-4db4-9da3-e535223a534e",
                    "IdConcepto": "mx_ccd_Receivables",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0d97398c-5454-4976-ac7b-a18f7d162562": {
                    "Id": "A0d97398c-5454-4976-ac7b-a18f7d162562",
                    "IdConcepto": "mx_ccd_Receivables",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad6a33bf6-43dc-43e4-8f30-4e54299a062a": {
                    "Id": "Ad6a33bf6-43dc-43e4-8f30-4e54299a062a",
                    "IdConcepto": "ifrs-full_OtherCashReceiptsFromOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0e2088d6-ebfd-475c-aae5-14f63eb53307": {
                    "Id": "A0e2088d6-ebfd-475c-aae5-14f63eb53307",
                    "IdConcepto": "ifrs-full_OtherCashReceiptsFromOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7bc334e7-0585-418e-8abc-29f181ea9bdd": {
                    "Id": "A7bc334e7-0585-418e-8abc-29f181ea9bdd",
                    "IdConcepto": "ifrs-full_PaymentsToSuppliersForGoodsAndServices",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0bbb4769-216c-43e1-9bc3-d02155411dde": {
                    "Id": "A0bbb4769-216c-43e1-9bc3-d02155411dde",
                    "IdConcepto": "ifrs-full_PaymentsToSuppliersForGoodsAndServices",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A500a39bc-4928-4758-afd7-98a98458fdc6": {
                    "Id": "A500a39bc-4928-4758-afd7-98a98458fdc6",
                    "IdConcepto": "mx_ccd_MaintenanceAndAdministrationExpenses",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abd1e9d6d-9543-4da0-b40b-955789329006": {
                    "Id": "Abd1e9d6d-9543-4da0-b40b-955789329006",
                    "IdConcepto": "mx_ccd_MaintenanceAndAdministrationExpenses",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A31c1b149-38e3-4409-b136-3fa6347df3b1": {
                    "Id": "A31c1b149-38e3-4409-b136-3fa6347df3b1",
                    "IdConcepto": "mx_ccd_PaymentsMadeOnAccountsPayable",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1ff80bd0-62af-4a92-9d25-061c0faf4c56": {
                    "Id": "A1ff80bd0-62af-4a92-9d25-061c0faf4c56",
                    "IdConcepto": "mx_ccd_PaymentsMadeOnAccountsPayable",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3f50af61-f491-47ea-b119-efd1eefb96fa": {
                    "Id": "A3f50af61-f491-47ea-b119-efd1eefb96fa",
                    "IdConcepto": "mx_ccd_FinancialExpenses",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A30d45356-e834-45bd-a99f-08e0fb9cf86a": {
                    "Id": "A30d45356-e834-45bd-a99f-08e0fb9cf86a",
                    "IdConcepto": "mx_ccd_FinancialExpenses",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3f530e9a-d4bb-4b1d-8c49-d3abaab83dfc": {
                    "Id": "A3f530e9a-d4bb-4b1d-8c49-d3abaab83dfc",
                    "IdConcepto": "mx_ccd_ManagementFeePayments",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A89171bfc-b04f-49bf-8fc5-3d0fc74afc45": {
                    "Id": "A89171bfc-b04f-49bf-8fc5-3d0fc74afc45",
                    "IdConcepto": "mx_ccd_ManagementFeePayments",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A51d46e77-f37c-4542-8d2e-5048aa64e9fa": {
                    "Id": "A51d46e77-f37c-4542-8d2e-5048aa64e9fa",
                    "IdConcepto": "ifrs-full_OtherCashPaymentsFromOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0de593be-6040-494f-8093-3e6192fb4779": {
                    "Id": "A0de593be-6040-494f-8093-3e6192fb4779",
                    "IdConcepto": "ifrs-full_OtherCashPaymentsFromOperatingActivities",
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