///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_7_2014-03-05_role-510000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_7_2014_03_05_role_510000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_7_2014_03_05_role_510000
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
                        Expresion: '(variable15=="SI") or ( bignumber(variable1) == bignumber(variable2) + bignumber(variable3)+ bignumber(variable4)+ bignumber(variable5)+ bignumber(variable6)- bignumber(variable7)- bignumber(variable8)- bignumber(variable9)- bignumber(variable10)- bignumber(variable11)- bignumber(variable12)- bignumber(variable13))',
                        MensajeExito: 'El valor de {variable1} corresponde a Cobros procedentes de los ingresos + Cobros procedentes de cuentas por cobrar + Venta de bienes adjudicados + Ingresos financieros + Otros cobros por actividades de operación - Pagos por el suministro de bienes y servicios - Gastos de mantenimiento y administración - Reembolso de derechos de cobro - Pagos procedentes de cuentas por pagar - Pagos procedentes de intereses - Gastos financieros - Otros pagos por actividades de operación.',
                        MensajeError: 'El valor de {variable1} no corresponde a Cobros procedentes de los ingresos + Cobros procedentes de cuentas por cobrar + Venta de bienes adjudicados + Ingresos financieros + Otros cobros por actividades de operación - Pagos por el suministro de bienes y servicios - Gastos de mantenimiento y administración - Reembolso de derechos de cobro - Pagos procedentes de cuentas por pagar - Pagos procedentes de intereses - Gastos financieros - Otros pagos por actividades de operación.',
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
                                IdConcepto: 'mx_deuda_CollectionsFromAccountsReceivable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'mx_deuda_SaleOfRepossessedAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'mx_deuda_FinancialIncome',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'ifrs-full_OtherCashReceiptsFromOperatingActivities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable7': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable7',
                                IdConcepto: 'ifrs-full_PaymentsToSuppliersForGoodsAndServices',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable8': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable8',
                                IdConcepto: 'mx_deuda_MaintenanceAndAdministrationExpenses',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable9': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable9',
                                IdConcepto: 'mx_deuda_RepaymentOfReceivables',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable10': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable10',
                                IdConcepto: 'mx_deuda_PaymentsMadeOnAccountsPayable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable11': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable11',
                                IdConcepto: 'mx_deuda_InterestPayments',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable12': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable12',
                                IdConcepto: 'mx_deuda_FinanceCharges',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable13': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable13',
                                IdConcepto: 'ifrs-full_OtherCashPaymentsFromOperatingActivities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                           
                            'variable15': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable15',
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
                "A1685c73a-c4a0-42cf-bc69-4127490ac837": {
                    "Id": "A1685c73a-c4a0-42cf-bc69-4127490ac837",
                    "IdConcepto": "ifrs-full_ReceiptsFromSalesOfGoodsAndRenderingOfServices",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A21a817ef-3b4f-4a93-bbe9-ea920feb9fc8": {
                    "Id": "A21a817ef-3b4f-4a93-bbe9-ea920feb9fc8",
                    "IdConcepto": "ifrs-full_ReceiptsFromSalesOfGoodsAndRenderingOfServices",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A950aecdc-8018-4ba2-9e4c-605296fb8402": {
                    "Id": "A950aecdc-8018-4ba2-9e4c-605296fb8402",
                    "IdConcepto": "mx_deuda_CollectionsFromAccountsReceivable",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afeda59f6-1a58-4ddd-8b10-45e5a77b5b40": {
                    "Id": "Afeda59f6-1a58-4ddd-8b10-45e5a77b5b40",
                    "IdConcepto": "mx_deuda_CollectionsFromAccountsReceivable",
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
                "A57bf123e-5b6b-46ca-95af-727ba3288136": {
                    "Id": "A57bf123e-5b6b-46ca-95af-727ba3288136",
                    "IdConcepto": "mx_deuda_FinancialIncome",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab9690336-17f9-4faa-b2ff-5b7746afb2a7": {
                    "Id": "Ab9690336-17f9-4faa-b2ff-5b7746afb2a7",
                    "IdConcepto": "mx_deuda_FinancialIncome",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6a66e521-05b0-4863-bd03-53e5f7a5781f": {
                    "Id": "A6a66e521-05b0-4863-bd03-53e5f7a5781f",
                    "IdConcepto": "ifrs-full_OtherCashReceiptsFromOperatingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8f0cf111-1946-4eed-9dd5-9a391cd0f4eb": {
                    "Id": "A8f0cf111-1946-4eed-9dd5-9a391cd0f4eb",
                    "IdConcepto": "ifrs-full_OtherCashReceiptsFromOperatingActivities",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A23a8bee4-59a0-4deb-98fb-3113c12b41a2": {
                    "Id": "A23a8bee4-59a0-4deb-98fb-3113c12b41a2",
                    "IdConcepto": "ifrs-full_PaymentsToSuppliersForGoodsAndServices",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9f14c89c-a095-4459-8313-0245ad7fff4e": {
                    "Id": "A9f14c89c-a095-4459-8313-0245ad7fff4e",
                    "IdConcepto": "ifrs-full_PaymentsToSuppliersForGoodsAndServices",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A40c25c04-0f85-4410-bf03-990153841891": {
                    "Id": "A40c25c04-0f85-4410-bf03-990153841891",
                    "IdConcepto": "mx_deuda_MaintenanceAndAdministrationExpenses",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A08ec526e-7a2a-45dc-8713-5e3275822a28": {
                    "Id": "A08ec526e-7a2a-45dc-8713-5e3275822a28",
                    "IdConcepto": "mx_deuda_MaintenanceAndAdministrationExpenses",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A06c8c12c-656c-4cd6-9ca3-fe5c9227197c": {
                    "Id": "A06c8c12c-656c-4cd6-9ca3-fe5c9227197c",
                    "IdConcepto": "mx_deuda_RepaymentOfReceivables",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5e30cf92-c202-4232-9c01-4e2d76661329": {
                    "Id": "A5e30cf92-c202-4232-9c01-4e2d76661329",
                    "IdConcepto": "mx_deuda_RepaymentOfReceivables",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8aaaedb4-e380-416d-88d4-b95b3253e699": {
                    "Id": "A8aaaedb4-e380-416d-88d4-b95b3253e699",
                    "IdConcepto": "mx_deuda_PaymentsMadeOnAccountsPayable",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae0ea0d61-582d-4b80-841b-745d8636200c": {
                    "Id": "Ae0ea0d61-582d-4b80-841b-745d8636200c",
                    "IdConcepto": "mx_deuda_PaymentsMadeOnAccountsPayable",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3ad27f88-2e2d-4743-af08-182a3f91c5fb": {
                    "Id": "A3ad27f88-2e2d-4743-af08-182a3f91c5fb",
                    "IdConcepto": "mx_deuda_InterestPayments",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af22fb079-aafd-4aa7-a939-8a039f5231a6": {
                    "Id": "Af22fb079-aafd-4aa7-a939-8a039f5231a6",
                    "IdConcepto": "mx_deuda_InterestPayments",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0a39caa8-bfe6-4d42-bd06-934c8c6ea030": {
                    "Id": "A0a39caa8-bfe6-4d42-bd06-934c8c6ea030",
                    "IdConcepto": "mx_deuda_FinanceCharges",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad3608841-a411-4820-9770-55ae06de6f0d": {
                    "Id": "Ad3608841-a411-4820-9770-55ae06de6f0d",
                    "IdConcepto": "mx_deuda_FinanceCharges",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A22ac0d28-0f6b-407c-88a6-568a94ff18f2": {
                    "Id": "A22ac0d28-0f6b-407c-88a6-568a94ff18f2",
                    "IdConcepto": "ifrs-full_OtherCashPaymentsFromOperatingActivities",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae50990ea-09c8-485e-bae6-9b8b9b8fdef6": {
                    "Id": "Ae50990ea-09c8-485e-bae6-9b8b9b8fdef6",
                    "IdConcepto": "ifrs-full_OtherCashPaymentsFromOperatingActivities",
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