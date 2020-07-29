///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-210000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_210000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_210000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_210000_1_Activos': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_210000_1_Activos',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El valor de {variable1} es igual al valor del Total de patrimonio / Activos netos y pasivos.',
                        MensajeError: 'El valor de {variable1} debe ser igual al valor del Total de patrimonio / Activos netos y pasivos.',
                         
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_Assets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_EquityAndLiabilities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    })
            };

            this.ContextosPlantillaPorId = {
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
                "A005caf00-0309-4573-aafd-8e779fb56647": {
                    "Id": "A005caf00-0309-4573-aafd-8e779fb56647",
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
                "Aa7ffb235-a81f-48c0-9d0f-540d644da76d": {
                    "Id": "Aa7ffb235-a81f-48c0-9d0f-540d644da76d",
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
                "Adf4070ca-0d89-4db7-acf7-55f54d334978": {
                    "Id": "Adf4070ca-0d89-4db7-acf7-55f54d334978",
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
                "A0c36d34a-5dc5-4604-a3c1-48fc150404fb": {
                    "Id": "A0c36d34a-5dc5-4604-a3c1-48fc150404fb",
                    "IdConcepto": "mx_deuda_Collateralizedloan",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8094895b-7178-4145-8d42-1cb4d4c03e80": {
                    "Id": "A8094895b-7178-4145-8d42-1cb4d4c03e80",
                    "IdConcepto": "mx_deuda_Collateralizedloan",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4171d51e-21b4-4960-9d87-7576ccf006bf": {
                    "Id": "A4171d51e-21b4-4960-9d87-7576ccf006bf",
                    "IdConcepto": "mx_deuda_Collateralizedloan",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af9a54c62-9984-4cb0-b931-54d3e19769e7": {
                    "Id": "Af9a54c62-9984-4cb0-b931-54d3e19769e7",
                    "IdConcepto": "mx_deuda_Receivable",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1bfc4e7e-9810-493f-9a36-cb3e5022efcc": {
                    "Id": "A1bfc4e7e-9810-493f-9a36-cb3e5022efcc",
                    "IdConcepto": "mx_deuda_Receivable",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A71c14fb7-40d7-4341-8d47-115322fb51b4": {
                    "Id": "A71c14fb7-40d7-4341-8d47-115322fb51b4",
                    "IdConcepto": "mx_deuda_Receivable",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A07b6c6d9-5fc9-4551-ae9a-4dcf21191478": {
                    "Id": "A07b6c6d9-5fc9-4551-ae9a-4dcf21191478",
                    "IdConcepto": "ifrs-full_TradeAndOtherCurrentReceivables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7513ba00-44c0-478e-9b3f-ccef105a65d6": {
                    "Id": "A7513ba00-44c0-478e-9b3f-ccef105a65d6",
                    "IdConcepto": "ifrs-full_TradeAndOtherCurrentReceivables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A40c33a5d-82ed-487c-ae00-7121518d9f78": {
                    "Id": "A40c33a5d-82ed-487c-ae00-7121518d9f78",
                    "IdConcepto": "ifrs-full_TradeAndOtherCurrentReceivables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac06d91b2-0bc3-422f-9ee1-0072b90cef23": {
                    "Id": "Ac06d91b2-0bc3-422f-9ee1-0072b90cef23",
                    "IdConcepto": "ifrs-full_OtherCurrentFinancialAssets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A28ef2342-a578-4838-82ae-9ffc209feecc": {
                    "Id": "A28ef2342-a578-4838-82ae-9ffc209feecc",
                    "IdConcepto": "ifrs-full_OtherCurrentFinancialAssets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8b857a6b-e8aa-49c3-9543-b554b042a45d": {
                    "Id": "A8b857a6b-e8aa-49c3-9543-b554b042a45d",
                    "IdConcepto": "ifrs-full_OtherCurrentFinancialAssets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab776be45-ac61-42b6-83b0-516c36133bd8": {
                    "Id": "Ab776be45-ac61-42b6-83b0-516c36133bd8",
                    "IdConcepto": "ifrs-full_CurrentBiologicalAssets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A39c3e109-db18-499e-b3e3-25ee827a369b": {
                    "Id": "A39c3e109-db18-499e-b3e3-25ee827a369b",
                    "IdConcepto": "ifrs-full_CurrentBiologicalAssets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac31d1a9c-fc97-4fd8-a3c5-a610f7cb787f": {
                    "Id": "Ac31d1a9c-fc97-4fd8-a3c5-a610f7cb787f",
                    "IdConcepto": "ifrs-full_CurrentBiologicalAssets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7257accd-d786-45db-b1cd-d4f1c6fa38b9": {
                    "Id": "A7257accd-d786-45db-b1cd-d4f1c6fa38b9",
                    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialAssets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A988bd943-30c5-44dd-ace2-2314df1a3c3d": {
                    "Id": "A988bd943-30c5-44dd-ace2-2314df1a3c3d",
                    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialAssets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac452a7db-8b3d-41f2-995c-70d75f02c4d0": {
                    "Id": "Ac452a7db-8b3d-41f2-995c-70d75f02c4d0",
                    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialAssets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6d802487-8fe8-4b6c-93a3-7dfc3d44f544": {
                    "Id": "A6d802487-8fe8-4b6c-93a3-7dfc3d44f544",
                    "IdConcepto": "ifrs-full_CurrentAssets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3eab2456-836d-4ef6-b376-62073beaee2e": {
                    "Id": "A3eab2456-836d-4ef6-b376-62073beaee2e",
                    "IdConcepto": "ifrs-full_CurrentAssets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7fa770a2-9b4d-4bfe-bbd8-2fff79f5cb8c": {
                    "Id": "A7fa770a2-9b4d-4bfe-bbd8-2fff79f5cb8c",
                    "IdConcepto": "ifrs-full_CurrentAssets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2e2e9db2-401c-4ea4-b57c-8a6ed6752875": {
                    "Id": "A2e2e9db2-401c-4ea4-b57c-8a6ed6752875",
                    "IdConcepto": "mx_deuda_EstimatedPaymentsOfISRToDistributeToHolders",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7baae580-1010-4d70-8339-33664b636cec": {
                    "Id": "A7baae580-1010-4d70-8339-33664b636cec",
                    "IdConcepto": "mx_deuda_EstimatedPaymentsOfISRToDistributeToHolders",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac1446ff9-1eed-42f3-8a02-ca4e56f3c749": {
                    "Id": "Ac1446ff9-1eed-42f3-8a02-ca4e56f3c749",
                    "IdConcepto": "mx_deuda_EstimatedPaymentsOfISRToDistributeToHolders",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8dc41b5c-f134-4878-9304-8f4b3799b088": {
                    "Id": "A8dc41b5c-f134-4878-9304-8f4b3799b088",
                    "IdConcepto": "mx_deuda_Foreclosed",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A85449a31-d37c-4ee1-8e3a-69c87d11fa0d": {
                    "Id": "A85449a31-d37c-4ee1-8e3a-69c87d11fa0d",
                    "IdConcepto": "mx_deuda_Foreclosed",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A35b01cbf-6753-4898-8ee3-1b32a9a0b0df": {
                    "Id": "A35b01cbf-6753-4898-8ee3-1b32a9a0b0df",
                    "IdConcepto": "mx_deuda_Foreclosed",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5e057f89-03b2-4466-9043-0f4a3fef2ee9": {
                    "Id": "A5e057f89-03b2-4466-9043-0f4a3fef2ee9",
                    "IdConcepto": "ifrs-full_NoncurrentReceivables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A96df7c7f-84f3-4a59-b93b-11ecaf89da50": {
                    "Id": "A96df7c7f-84f3-4a59-b93b-11ecaf89da50",
                    "IdConcepto": "ifrs-full_NoncurrentReceivables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5563e5f5-f04c-493a-ae98-42603f1bc46a": {
                    "Id": "A5563e5f5-f04c-493a-ae98-42603f1bc46a",
                    "IdConcepto": "ifrs-full_NoncurrentReceivables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7c690608-e54a-4bcf-afc5-f54202e8d149": {
                    "Id": "A7c690608-e54a-4bcf-afc5-f54202e8d149",
                    "IdConcepto": "ifrs-full_NoncurrentBiologicalAssets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5ac434be-6f68-4a8c-9564-575baa1f5a01": {
                    "Id": "A5ac434be-6f68-4a8c-9564-575baa1f5a01",
                    "IdConcepto": "ifrs-full_NoncurrentBiologicalAssets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad621518b-9f99-46ba-b96d-2556a86d7d67": {
                    "Id": "Ad621518b-9f99-46ba-b96d-2556a86d7d67",
                    "IdConcepto": "ifrs-full_NoncurrentBiologicalAssets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aafdf143f-a7c7-4318-bccd-421beeb53ea3": {
                    "Id": "Aafdf143f-a7c7-4318-bccd-421beeb53ea3",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedging",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3f150256-d85b-483a-8a45-28b3253435e9": {
                    "Id": "A3f150256-d85b-483a-8a45-28b3253435e9",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedging",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A95a8b09e-78a1-4e6d-9032-671b864500e3": {
                    "Id": "A95a8b09e-78a1-4e6d-9032-671b864500e3",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedging",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acbe28fd8-31c5-49cd-943c-fa294e7310b5": {
                    "Id": "Acbe28fd8-31c5-49cd-943c-fa294e7310b5",
                    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialAssets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A794d0bda-b5a5-46ab-bf7f-b5cae6f81d67": {
                    "Id": "A794d0bda-b5a5-46ab-bf7f-b5cae6f81d67",
                    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialAssets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab4d8541c-47b3-4ae0-9edd-43d9f0477451": {
                    "Id": "Ab4d8541c-47b3-4ae0-9edd-43d9f0477451",
                    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialAssets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9a0dfb06-8c87-4dd4-a07d-fa17a3653ece": {
                    "Id": "A9a0dfb06-8c87-4dd4-a07d-fa17a3653ece",
                    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialAssets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaf5fa9b0-e341-44bd-99ed-40ac5551894e": {
                    "Id": "Aaf5fa9b0-e341-44bd-99ed-40ac5551894e",
                    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialAssets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A96cf446c-1b80-4382-93ea-b98b213829e2": {
                    "Id": "A96cf446c-1b80-4382-93ea-b98b213829e2",
                    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialAssets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0c4be312-7026-4325-9b20-07869dd221bb": {
                    "Id": "A0c4be312-7026-4325-9b20-07869dd221bb",
                    "IdConcepto": "ifrs-full_NoncurrentAssets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5dff7922-998c-44d5-8ad5-2b934513a3ce": {
                    "Id": "A5dff7922-998c-44d5-8ad5-2b934513a3ce",
                    "IdConcepto": "ifrs-full_NoncurrentAssets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa764ef1e-4fe7-4271-9a8c-55beafc066fa": {
                    "Id": "Aa764ef1e-4fe7-4271-9a8c-55beafc066fa",
                    "IdConcepto": "ifrs-full_NoncurrentAssets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1fbe8147-d312-43e9-8a62-2b80a19a2d9b": {
                    "Id": "A1fbe8147-d312-43e9-8a62-2b80a19a2d9b",
                    "IdConcepto": "ifrs-full_Assets",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A993a0fa9-b160-4ea9-89c7-9d18f8918253": {
                    "Id": "A993a0fa9-b160-4ea9-89c7-9d18f8918253",
                    "IdConcepto": "ifrs-full_Assets",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3cbe4a47-09c7-4993-920f-6ef8890c2398": {
                    "Id": "A3cbe4a47-09c7-4993-920f-6ef8890c2398",
                    "IdConcepto": "ifrs-full_Assets",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aacd7bc34-3009-4189-9d5c-066df7c05ae1": {
                    "Id": "Aacd7bc34-3009-4189-9d5c-066df7c05ae1",
                    "IdConcepto": "ifrs-full_TradeAndOtherCurrentPayables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaa72347d-7809-4dcf-a83b-7a559c7448f2": {
                    "Id": "Aaa72347d-7809-4dcf-a83b-7a559c7448f2",
                    "IdConcepto": "ifrs-full_TradeAndOtherCurrentPayables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A65d40950-2ce5-4390-b2cd-e875daf77992": {
                    "Id": "A65d40950-2ce5-4390-b2cd-e875daf77992",
                    "IdConcepto": "ifrs-full_TradeAndOtherCurrentPayables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae7f21519-13be-494c-890a-1e22921b434d": {
                    "Id": "Ae7f21519-13be-494c-890a-1e22921b434d",
                    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesCurrent",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad4a18921-72fd-47ce-9ebb-fe118fc653a0": {
                    "Id": "Ad4a18921-72fd-47ce-9ebb-fe118fc653a0",
                    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesCurrent",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab99d1037-0d65-4bea-b79c-b40370a3dc0f": {
                    "Id": "Ab99d1037-0d65-4bea-b79c-b40370a3dc0f",
                    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesCurrent",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af45d1cc3-0df4-4505-b985-065c5e09cbdb": {
                    "Id": "Af45d1cc3-0df4-4505-b985-065c5e09cbdb",
                    "IdConcepto": "ifrs-full_OtherCurrentFinancialLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaaa569fe-35d5-4e3c-a2cf-6db9966008a2": {
                    "Id": "Aaaa569fe-35d5-4e3c-a2cf-6db9966008a2",
                    "IdConcepto": "ifrs-full_OtherCurrentFinancialLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac25730aa-c8fa-4cf9-adcb-2cf64ba023ff": {
                    "Id": "Ac25730aa-c8fa-4cf9-adcb-2cf64ba023ff",
                    "IdConcepto": "ifrs-full_OtherCurrentFinancialLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1af32348-494a-47fb-ac3f-182105db982c": {
                    "Id": "A1af32348-494a-47fb-ac3f-182105db982c",
                    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5321c713-589f-496d-bc07-b05ddef90758": {
                    "Id": "A5321c713-589f-496d-bc07-b05ddef90758",
                    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3abf42e1-26cd-4609-81c0-dd68b413c51c": {
                    "Id": "A3abf42e1-26cd-4609-81c0-dd68b413c51c",
                    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad0cee10b-fea3-4f5e-85fd-da47e2ca23f5": {
                    "Id": "Ad0cee10b-fea3-4f5e-85fd-da47e2ca23f5",
                    "IdConcepto": "ifrs-full_OtherShorttermProvisions",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5029b920-466d-416d-b1dd-47801bedce02": {
                    "Id": "A5029b920-466d-416d-b1dd-47801bedce02",
                    "IdConcepto": "ifrs-full_OtherShorttermProvisions",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A232bbe16-628e-4b07-868e-39315b824ba2": {
                    "Id": "A232bbe16-628e-4b07-868e-39315b824ba2",
                    "IdConcepto": "ifrs-full_OtherShorttermProvisions",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5f8a4ea5-7631-44da-bc71-dc0f494bf138": {
                    "Id": "A5f8a4ea5-7631-44da-bc71-dc0f494bf138",
                    "IdConcepto": "ifrs-full_CurrentProvisions",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa250ae80-9a3c-4077-b826-b99af84c6d15": {
                    "Id": "Aa250ae80-9a3c-4077-b826-b99af84c6d15",
                    "IdConcepto": "ifrs-full_CurrentProvisions",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A64bd0edf-8516-49d2-91d1-d164727d9c86": {
                    "Id": "A64bd0edf-8516-49d2-91d1-d164727d9c86",
                    "IdConcepto": "ifrs-full_CurrentProvisions",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9920b185-41ac-48a5-9015-a49aea6ec941": {
                    "Id": "A9920b185-41ac-48a5-9015-a49aea6ec941",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedgingClassifiedAsShortTermLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa4f2b47d-ba11-430e-8ae7-e83773f7ba82": {
                    "Id": "Aa4f2b47d-ba11-430e-8ae7-e83773f7ba82",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedgingClassifiedAsShortTermLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f733a28-e846-4ccc-beaf-e5be44b3b39c": {
                    "Id": "A4f733a28-e846-4ccc-beaf-e5be44b3b39c",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedgingClassifiedAsShortTermLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A856f05d6-6927-4814-b91b-a518cba2c4cc": {
                    "Id": "A856f05d6-6927-4814-b91b-a518cba2c4cc",
                    "IdConcepto": "ifrs-full_CurrentLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2701389a-4c4d-4fb7-81f0-ee3e99b02528": {
                    "Id": "A2701389a-4c4d-4fb7-81f0-ee3e99b02528",
                    "IdConcepto": "ifrs-full_CurrentLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9dca2637-f7b2-4227-8fcc-2ce3855a3880": {
                    "Id": "A9dca2637-f7b2-4227-8fcc-2ce3855a3880",
                    "IdConcepto": "ifrs-full_CurrentLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae9741db2-b775-41af-8d33-0fd5b5d6ac9a": {
                    "Id": "Ae9741db2-b775-41af-8d33-0fd5b5d6ac9a",
                    "IdConcepto": "ifrs-full_NoncurrentPayables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abe369914-4918-4d31-82c9-0030a7bcae1a": {
                    "Id": "Abe369914-4918-4d31-82c9-0030a7bcae1a",
                    "IdConcepto": "ifrs-full_NoncurrentPayables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A32c350b8-6ae0-48b9-893f-8e754b6c6428": {
                    "Id": "A32c350b8-6ae0-48b9-893f-8e754b6c6428",
                    "IdConcepto": "ifrs-full_NoncurrentPayables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adf8abe46-f1d0-4fc3-9677-835f65613cd3": {
                    "Id": "Adf8abe46-f1d0-4fc3-9677-835f65613cd3",
                    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesNoncurrent",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0dd73eed-b32b-448e-98b4-6e2d9a05665b": {
                    "Id": "A0dd73eed-b32b-448e-98b4-6e2d9a05665b",
                    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesNoncurrent",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0006554e-67f4-49a0-935f-c10fd2bf51fc": {
                    "Id": "A0006554e-67f4-49a0-935f-c10fd2bf51fc",
                    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesNoncurrent",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae7de27b1-e6f5-47ea-8513-e140439c6134": {
                    "Id": "Ae7de27b1-e6f5-47ea-8513-e140439c6134",
                    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A342da1ad-1e23-4e38-8eb5-b7523dbbbcfc": {
                    "Id": "A342da1ad-1e23-4e38-8eb5-b7523dbbbcfc",
                    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A760f4a8d-a15d-4894-8e55-9594218fd79e": {
                    "Id": "A760f4a8d-a15d-4894-8e55-9594218fd79e",
                    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae40104f9-6925-4569-a38f-3a8b70032bf9": {
                    "Id": "Ae40104f9-6925-4569-a38f-3a8b70032bf9",
                    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaa7cdadc-ea4b-4792-ace3-b2c2b200826d": {
                    "Id": "Aaa7cdadc-ea4b-4792-ace3-b2c2b200826d",
                    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4238cf31-0630-4281-a2aa-ef98f458b30c": {
                    "Id": "A4238cf31-0630-4281-a2aa-ef98f458b30c",
                    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7729b4db-9bc9-410c-af4a-5eb2f19a1249": {
                    "Id": "A7729b4db-9bc9-410c-af4a-5eb2f19a1249",
                    "IdConcepto": "ifrs-full_OtherLongtermProvisions",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3aabdc3d-6e32-4586-8a5f-9f8bc94ef20e": {
                    "Id": "A3aabdc3d-6e32-4586-8a5f-9f8bc94ef20e",
                    "IdConcepto": "ifrs-full_OtherLongtermProvisions",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A42fdb5c6-dcbb-429b-ace3-8801859a8c5f": {
                    "Id": "A42fdb5c6-dcbb-429b-ace3-8801859a8c5f",
                    "IdConcepto": "ifrs-full_OtherLongtermProvisions",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A58630270-ebe6-4ea6-89a4-1211f2387ec5": {
                    "Id": "A58630270-ebe6-4ea6-89a4-1211f2387ec5",
                    "IdConcepto": "ifrs-full_NoncurrentProvisions",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A762a0fb5-cab1-49f7-8895-1044db3d65fd": {
                    "Id": "A762a0fb5-cab1-49f7-8895-1044db3d65fd",
                    "IdConcepto": "ifrs-full_NoncurrentProvisions",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9b184bbb-513b-4ad9-9b39-5c0951bacc2d": {
                    "Id": "A9b184bbb-513b-4ad9-9b39-5c0951bacc2d",
                    "IdConcepto": "ifrs-full_NoncurrentProvisions",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa2bdba39-da5b-44ee-9d55-41299d375e1b": {
                    "Id": "Aa2bdba39-da5b-44ee-9d55-41299d375e1b",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedgingClassifiedAsLongTermLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0420e37a-3d4b-486e-82b2-cb437dab21ea": {
                    "Id": "A0420e37a-3d4b-486e-82b2-cb437dab21ea",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedgingClassifiedAsLongTermLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af801251a-8e96-4d92-96f5-b713b7dd6f8c": {
                    "Id": "Af801251a-8e96-4d92-96f5-b713b7dd6f8c",
                    "IdConcepto": "mx_deuda_DerivativeFinancialInstrumentsAndHedgingClassifiedAsLongTermLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6592d381-b13e-4a16-9786-5db023559623": {
                    "Id": "A6592d381-b13e-4a16-9786-5db023559623",
                    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af9851f1b-f43b-4dfd-9f5a-41b908c92754": {
                    "Id": "Af9851f1b-f43b-4dfd-9f5a-41b908c92754",
                    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f241f6d-679d-48f5-9e63-2e80712fda7e": {
                    "Id": "A4f241f6d-679d-48f5-9e63-2e80712fda7e",
                    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A20f2783b-30bc-4189-8e52-706eb926fb4a": {
                    "Id": "A20f2783b-30bc-4189-8e52-706eb926fb4a",
                    "IdConcepto": "ifrs-full_Liabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A551e11fc-d734-4ec0-b302-f9e28f042e9e": {
                    "Id": "A551e11fc-d734-4ec0-b302-f9e28f042e9e",
                    "IdConcepto": "ifrs-full_Liabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A89dd95d7-aec4-4916-bba1-133d6e9a0923": {
                    "Id": "A89dd95d7-aec4-4916-bba1-133d6e9a0923",
                    "IdConcepto": "ifrs-full_Liabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adf92ee07-9381-47dc-8af2-4432b76d9297": {
                    "Id": "Adf92ee07-9381-47dc-8af2-4432b76d9297",
                    "IdConcepto": "ifrs-full_IssuedCapital",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A01aaf772-e87b-44fc-90e6-e8ce90d17c4d": {
                    "Id": "A01aaf772-e87b-44fc-90e6-e8ce90d17c4d",
                    "IdConcepto": "ifrs-full_IssuedCapital",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3d8389b6-2a42-49f3-b4ea-916399247cea": {
                    "Id": "A3d8389b6-2a42-49f3-b4ea-916399247cea",
                    "IdConcepto": "ifrs-full_IssuedCapital",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad7d99f77-9595-46d3-992a-92bf63ddd84e": {
                    "Id": "Ad7d99f77-9595-46d3-992a-92bf63ddd84e",
                    "IdConcepto": "ifrs-full_RetainedEarnings",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A17924fb5-048b-4960-866f-533f63069812": {
                    "Id": "A17924fb5-048b-4960-866f-533f63069812",
                    "IdConcepto": "ifrs-full_RetainedEarnings",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aba4ff451-afdc-4855-bd54-ad5f39776c4c": {
                    "Id": "Aba4ff451-afdc-4855-bd54-ad5f39776c4c",
                    "IdConcepto": "ifrs-full_RetainedEarnings",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2bfd27e3-c14b-47e0-956e-832c5389b689": {
                    "Id": "A2bfd27e3-c14b-47e0-956e-832c5389b689",
                    "IdConcepto": "ifrs-full_OtherReserves",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac6338def-328b-4592-914d-84921b581c41": {
                    "Id": "Ac6338def-328b-4592-914d-84921b581c41",
                    "IdConcepto": "ifrs-full_OtherReserves",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A91405756-5cd0-4317-8aa6-3c6bff745781": {
                    "Id": "A91405756-5cd0-4317-8aa6-3c6bff745781",
                    "IdConcepto": "ifrs-full_OtherReserves",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A102ddbc0-14ac-41f5-9843-a49fefb28940": {
                    "Id": "A102ddbc0-14ac-41f5-9843-a49fefb28940",
                    "IdConcepto": "ifrs-full_EquityAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0a15e07b-3b97-47f7-bba9-f117e5d2231a": {
                    "Id": "A0a15e07b-3b97-47f7-bba9-f117e5d2231a",
                    "IdConcepto": "ifrs-full_EquityAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09a22325-92dc-46ad-9238-30402231f065": {
                    "Id": "A09a22325-92dc-46ad-9238-30402231f065",
                    "IdConcepto": "ifrs-full_EquityAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad597cd36-c6b8-4fb3-b1a5-52f1595a9736": {
                    "Id": "Ad597cd36-c6b8-4fb3-b1a5-52f1595a9736",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4e80b117-f5cb-4075-9e6a-efbe524b84bb": {
                    "Id": "A4e80b117-f5cb-4075-9e6a-efbe524b84bb",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acbc9c009-37bd-498a-bf2c-9b06d12be0eb": {
                    "Id": "Acbc9c009-37bd-498a-bf2c-9b06d12be0eb",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A156e47c0-bfe9-40ce-9471-eeb428c69a26": {
                    "Id": "A156e47c0-bfe9-40ce-9471-eeb428c69a26",
                    "IdConcepto": "ifrs-full_EquityAndLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aeddb85a9-243a-4411-9b9a-caff70fe1860": {
                    "Id": "Aeddb85a9-243a-4411-9b9a-caff70fe1860",
                    "IdConcepto": "ifrs-full_EquityAndLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A00af5884-3181-4a66-8e72-d1ac99a85170": {
                    "Id": "A00af5884-3181-4a66-8e72-d1ac99a85170",
                    "IdConcepto": "ifrs-full_EquityAndLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
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