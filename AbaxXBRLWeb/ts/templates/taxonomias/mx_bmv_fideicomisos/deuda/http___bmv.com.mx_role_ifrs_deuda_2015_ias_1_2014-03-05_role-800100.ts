///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-800100
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_800100 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_800100
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
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
                "A0b17dde2-387b-40ba-941a-7df8c2debc2c": {
                    "Id": "A0b17dde2-387b-40ba-941a-7df8c2debc2c",
                    "IdConcepto": "ifrs-full_CashOnHand",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0046b722-564a-4ec5-85ec-ce3538409f13": {
                    "Id": "A0046b722-564a-4ec5-85ec-ce3538409f13",
                    "IdConcepto": "ifrs-full_CashOnHand",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A20297434-cbe0-482e-8618-21789e1f9b2d": {
                    "Id": "A20297434-cbe0-482e-8618-21789e1f9b2d",
                    "IdConcepto": "ifrs-full_CashOnHand",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e6a71c9-02e6-413d-bdf0-c0bf26d0f037": {
                    "Id": "A1e6a71c9-02e6-413d-bdf0-c0bf26d0f037",
                    "IdConcepto": "ifrs-full_BalancesWithBanks",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2dcee2d5-8378-43d9-9dd7-b310fbab6ef5": {
                    "Id": "A2dcee2d5-8378-43d9-9dd7-b310fbab6ef5",
                    "IdConcepto": "ifrs-full_BalancesWithBanks",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A99ca200d-9885-43dd-b2ca-cbf6faf8cdee": {
                    "Id": "A99ca200d-9885-43dd-b2ca-cbf6faf8cdee",
                    "IdConcepto": "ifrs-full_BalancesWithBanks",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A17a6f1ad-0855-4a2b-ad5d-463d09a2ca33": {
                    "Id": "A17a6f1ad-0855-4a2b-ad5d-463d09a2ca33",
                    "IdConcepto": "ifrs-full_Cash",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A26b325f1-4af0-4dfe-b610-5ca003c1c3e2": {
                    "Id": "A26b325f1-4af0-4dfe-b610-5ca003c1c3e2",
                    "IdConcepto": "ifrs-full_Cash",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A915da6c4-82e8-4317-a551-2e5c954f672b": {
                    "Id": "A915da6c4-82e8-4317-a551-2e5c954f672b",
                    "IdConcepto": "ifrs-full_Cash",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac2731196-e769-4a71-bd2f-b02c739d7892": {
                    "Id": "Ac2731196-e769-4a71-bd2f-b02c739d7892",
                    "IdConcepto": "ifrs-full_ShorttermDepositsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5e3b1e2e-aa74-436b-a912-cb004f8e8df7": {
                    "Id": "A5e3b1e2e-aa74-436b-a912-cb004f8e8df7",
                    "IdConcepto": "ifrs-full_ShorttermDepositsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aad017ab3-2503-45c6-b641-92200260bea9": {
                    "Id": "Aad017ab3-2503-45c6-b641-92200260bea9",
                    "IdConcepto": "ifrs-full_ShorttermDepositsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A00b2a247-6277-4fc9-97bf-ee1af8ec15c5": {
                    "Id": "A00b2a247-6277-4fc9-97bf-ee1af8ec15c5",
                    "IdConcepto": "ifrs-full_ShorttermInvestmentsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A862268b8-6cec-4bd8-b43c-2d82db84e513": {
                    "Id": "A862268b8-6cec-4bd8-b43c-2d82db84e513",
                    "IdConcepto": "ifrs-full_ShorttermInvestmentsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A374e68a7-f368-4391-9ef5-0048f6a3c5ed": {
                    "Id": "A374e68a7-f368-4391-9ef5-0048f6a3c5ed",
                    "IdConcepto": "ifrs-full_ShorttermInvestmentsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4e02b155-62b5-47ab-b499-a88ffa1f2cf2": {
                    "Id": "A4e02b155-62b5-47ab-b499-a88ffa1f2cf2",
                    "IdConcepto": "ifrs-full_BankingArrangementsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab8f1c6c9-091f-4810-a6bc-3a1ecc1878a9": {
                    "Id": "Ab8f1c6c9-091f-4810-a6bc-3a1ecc1878a9",
                    "IdConcepto": "ifrs-full_BankingArrangementsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9cb268e8-990c-41e3-bd80-098d0bdd398a": {
                    "Id": "A9cb268e8-990c-41e3-bd80-098d0bdd398a",
                    "IdConcepto": "ifrs-full_BankingArrangementsClassifiedAsCashEquivalents",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad50c171b-c6f5-438c-8eec-74cd4c9ea6fa": {
                    "Id": "Ad50c171b-c6f5-438c-8eec-74cd4c9ea6fa",
                    "IdConcepto": "ifrs-full_CashEquivalents",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afc874c46-1138-49cc-84f3-2d568e21284d": {
                    "Id": "Afc874c46-1138-49cc-84f3-2d568e21284d",
                    "IdConcepto": "ifrs-full_CashEquivalents",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6d61cf48-2bdb-400b-8416-0fc59f8a1b2f": {
                    "Id": "A6d61cf48-2bdb-400b-8416-0fc59f8a1b2f",
                    "IdConcepto": "ifrs-full_CashEquivalents",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af2a6f764-ed61-4dfb-9249-485c536e4684": {
                    "Id": "Af2a6f764-ed61-4dfb-9249-485c536e4684",
                    "IdConcepto": "ifrs-full_CurrentRestrictedCashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A654bee97-45c0-42ff-9a9c-8e35d0376daf": {
                    "Id": "A654bee97-45c0-42ff-9a9c-8e35d0376daf",
                    "IdConcepto": "ifrs-full_CurrentRestrictedCashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3a40e389-348c-4e6c-b89f-e97834635678": {
                    "Id": "A3a40e389-348c-4e6c-b89f-e97834635678",
                    "IdConcepto": "ifrs-full_CurrentRestrictedCashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A332f0c22-0fd2-4573-ad5c-d22875cdf848": {
                    "Id": "A332f0c22-0fd2-4573-ad5c-d22875cdf848",
                    "IdConcepto": "ifrs-full_OtherCashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A395b0717-757d-4145-8466-a3935d309267": {
                    "Id": "A395b0717-757d-4145-8466-a3935d309267",
                    "IdConcepto": "ifrs-full_OtherCashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A117a029f-d28a-4c26-8de4-47c97ffb3e2d": {
                    "Id": "A117a029f-d28a-4c26-8de4-47c97ffb3e2d",
                    "IdConcepto": "ifrs-full_OtherCashAndCashEquivalents",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
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
                "Ad4abf219-dfcf-4aa7-8e70-63e528208360": {
                    "Id": "Ad4abf219-dfcf-4aa7-8e70-63e528208360",
                    "IdConcepto": "ifrs-full_CurrentTradeReceivables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad62f240c-c6ec-4b0c-bde7-811aaf30c96c": {
                    "Id": "Ad62f240c-c6ec-4b0c-bde7-811aaf30c96c",
                    "IdConcepto": "ifrs-full_CurrentTradeReceivables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6baf637e-ab60-4bbb-95cf-3fc87e23458b": {
                    "Id": "A6baf637e-ab60-4bbb-95cf-3fc87e23458b",
                    "IdConcepto": "ifrs-full_CurrentTradeReceivables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A954c9986-cfd7-4230-b446-fda3946b71e4": {
                    "Id": "A954c9986-cfd7-4230-b446-fda3946b71e4",
                    "IdConcepto": "ifrs-full_CurrentAdvancesToSuppliers",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8f7a6f7b-761a-4bb6-972f-4307732026ab": {
                    "Id": "A8f7a6f7b-761a-4bb6-972f-4307732026ab",
                    "IdConcepto": "ifrs-full_CurrentAdvancesToSuppliers",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5b1e843f-7b80-4759-800e-a493e1afa6d5": {
                    "Id": "A5b1e843f-7b80-4759-800e-a493e1afa6d5",
                    "IdConcepto": "ifrs-full_CurrentAdvancesToSuppliers",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8b4b3b49-2754-4587-919f-413c62cc19b6": {
                    "Id": "A8b4b3b49-2754-4587-919f-413c62cc19b6",
                    "IdConcepto": "ifrs-full_CurrentPrepaidExpenses",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aee437129-c779-47fa-b7f5-3c337cf88b82": {
                    "Id": "Aee437129-c779-47fa-b7f5-3c337cf88b82",
                    "IdConcepto": "ifrs-full_CurrentPrepaidExpenses",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7d639b4a-1426-40ec-beb1-8487e325c14e": {
                    "Id": "A7d639b4a-1426-40ec-beb1-8487e325c14e",
                    "IdConcepto": "ifrs-full_CurrentPrepaidExpenses",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab280e974-0695-46be-8ddc-6267cfaaf9c9": {
                    "Id": "Ab280e974-0695-46be-8ddc-6267cfaaf9c9",
                    "IdConcepto": "ifrs-full_CurrentPrepayments",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aab28f934-154a-448c-9e40-7ace3cc887b3": {
                    "Id": "Aab28f934-154a-448c-9e40-7ace3cc887b3",
                    "IdConcepto": "ifrs-full_CurrentPrepayments",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A92342bbd-b1fb-4349-945a-e7ba412f49cb": {
                    "Id": "A92342bbd-b1fb-4349-945a-e7ba412f49cb",
                    "IdConcepto": "ifrs-full_CurrentPrepayments",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1adcc887-71f8-448f-9458-66914d3d117a": {
                    "Id": "A1adcc887-71f8-448f-9458-66914d3d117a",
                    "IdConcepto": "ifrs-full_OtherCurrentReceivables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A01b53af3-70bb-421b-b422-d1dde75140bc": {
                    "Id": "A01b53af3-70bb-421b-b422-d1dde75140bc",
                    "IdConcepto": "ifrs-full_OtherCurrentReceivables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af54a4102-392a-4dcb-9110-6a9a0f137508": {
                    "Id": "Af54a4102-392a-4dcb-9110-6a9a0f137508",
                    "IdConcepto": "ifrs-full_OtherCurrentReceivables",
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
                "Ad4ea2abe-4ba8-4b56-bcf2-e00ff0e2b3e9": {
                    "Id": "Ad4ea2abe-4ba8-4b56-bcf2-e00ff0e2b3e9",
                    "IdConcepto": "ifrs-full_NoncurrentTradeReceivables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A787764ca-7cb3-47ed-a475-47e3a3554467": {
                    "Id": "A787764ca-7cb3-47ed-a475-47e3a3554467",
                    "IdConcepto": "ifrs-full_NoncurrentTradeReceivables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0992def3-89aa-436c-8e91-aa976e1973a8": {
                    "Id": "A0992def3-89aa-436c-8e91-aa976e1973a8",
                    "IdConcepto": "ifrs-full_NoncurrentTradeReceivables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afb708ca3-c48c-49a1-9a93-b87324943c46": {
                    "Id": "Afb708ca3-c48c-49a1-9a93-b87324943c46",
                    "IdConcepto": "mx_deuda_NoncurrentPrepaymentsDeuda",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa85ff021-efb7-4041-a969-dba88683618d": {
                    "Id": "Aa85ff021-efb7-4041-a969-dba88683618d",
                    "IdConcepto": "mx_deuda_NoncurrentPrepaymentsDeuda",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A25637686-6489-4a1f-921f-29a6706d98e6": {
                    "Id": "A25637686-6489-4a1f-921f-29a6706d98e6",
                    "IdConcepto": "mx_deuda_NonCurrentPrepaidExpenses",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa01d0fa2-ee14-4804-a2e3-f6a04c86d98b": {
                    "Id": "Aa01d0fa2-ee14-4804-a2e3-f6a04c86d98b",
                    "IdConcepto": "mx_deuda_NonCurrentPrepaidExpenses",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "A46f92db5-8513-4896-8cf6-cb1e68d03a09-N1": {
                    "Id": "A46f92db5-8513-4896-8cf6-cb1e68d03a09-N1",
                    "IdConcepto": "mx_deuda_NoncurrentPrepaymentsDeuda",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                }, "A46f92db5-8513-4896-8cf6-cb1e68d03a09-N2": {
                    "Id": "A46f92db5-8513-4896-8cf6-cb1e68d03a09-N2",
                    "IdConcepto": "mx_deuda_OtherComprehensiveIncomeDeuda",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },


                "A46f92db5-8513-4896-8cf6-cb1e68d03a09": {
                    "Id": "A46f92db5-8513-4896-8cf6-cb1e68d03a09",
                    "IdConcepto": "mx_deuda_NonCurrentPrepaidExpenses",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9b0e613e-8a6a-472e-9a56-56c82523d4f8": {
                    "Id": "A9b0e613e-8a6a-472e-9a56-56c82523d4f8",
                    "IdConcepto": "ifrs-full_NoncurrentPrepayments",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A896eeb2a-8a52-4d81-a6bc-5ccd8f40937d": {
                    "Id": "A896eeb2a-8a52-4d81-a6bc-5ccd8f40937d",
                    "IdConcepto": "ifrs-full_NoncurrentPrepayments",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad10aabf3-a5d2-4efb-a6c8-1adc01101dc9": {
                    "Id": "Ad10aabf3-a5d2-4efb-a6c8-1adc01101dc9",
                    "IdConcepto": "ifrs-full_NoncurrentPrepayments",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5ece30ec-bd68-440b-8de9-b0fdfa287f79": {
                    "Id": "A5ece30ec-bd68-440b-8de9-b0fdfa287f79",
                    "IdConcepto": "ifrs-full_OtherNoncurrentReceivables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac9a64c5e-47b4-4b41-b792-8b8183e9830b": {
                    "Id": "Ac9a64c5e-47b4-4b41-b792-8b8183e9830b",
                    "IdConcepto": "ifrs-full_OtherNoncurrentReceivables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae0574a88-ef69-4258-8028-ace02a7c33fc": {
                    "Id": "Ae0574a88-ef69-4258-8028-ace02a7c33fc",
                    "IdConcepto": "ifrs-full_OtherNoncurrentReceivables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
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
                "Aa59ed5d9-0425-4a20-9b8e-15aefb8c6889": {
                    "Id": "Aa59ed5d9-0425-4a20-9b8e-15aefb8c6889",
                    "IdConcepto": "mx_deuda_BankLoansCurrent",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad10867e0-8725-4585-92d1-bf441446dc56": {
                    "Id": "Ad10867e0-8725-4585-92d1-bf441446dc56",
                    "IdConcepto": "mx_deuda_BankLoansCurrent",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa0c785cb-be46-4c0e-85ec-0aaec805e1c1": {
                    "Id": "Aa0c785cb-be46-4c0e-85ec-0aaec805e1c1",
                    "IdConcepto": "mx_deuda_BankLoansCurrent",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0f8937b9-58b1-4b04-ab2a-878d1cb1aa91": {
                    "Id": "A0f8937b9-58b1-4b04-ab2a-878d1cb1aa91",
                    "IdConcepto": "mx_deuda_StockMarketLoansCurrent",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A987f1a47-0ce2-4f13-988e-fa9abc9e788c": {
                    "Id": "A987f1a47-0ce2-4f13-988e-fa9abc9e788c",
                    "IdConcepto": "mx_deuda_StockMarketLoansCurrent",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A379caeb5-1775-4e8d-becd-9cbee108bc57": {
                    "Id": "A379caeb5-1775-4e8d-becd-9cbee108bc57",
                    "IdConcepto": "mx_deuda_StockMarketLoansCurrent",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afbd4ed0c-16e4-4773-9701-9b87ea74dd0f": {
                    "Id": "Afbd4ed0c-16e4-4773-9701-9b87ea74dd0f",
                    "IdConcepto": "mx_deuda_InterestPayableInTheShortTerm",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8f0fae08-f7ae-412f-b371-4e337f600203": {
                    "Id": "A8f0fae08-f7ae-412f-b371-4e337f600203",
                    "IdConcepto": "mx_deuda_InterestPayableInTheShortTerm",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab9d8ee50-efc9-43ca-a904-41c8a186ec6c": {
                    "Id": "Ab9d8ee50-efc9-43ca-a904-41c8a186ec6c",
                    "IdConcepto": "mx_deuda_InterestPayableInTheShortTerm",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac94e4809-e7c4-4413-a8a1-fb8384037c4e": {
                    "Id": "Ac94e4809-e7c4-4413-a8a1-fb8384037c4e",
                    "IdConcepto": "ifrs-full_OtherCurrentPayables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa605c2c7-1a4a-4a72-a104-5cb72dc87324": {
                    "Id": "Aa605c2c7-1a4a-4a72-a104-5cb72dc87324",
                    "IdConcepto": "ifrs-full_OtherCurrentPayables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afd95b0a8-9f42-475f-938d-f0dc1fa58f1e": {
                    "Id": "Afd95b0a8-9f42-475f-938d-f0dc1fa58f1e",
                    "IdConcepto": "ifrs-full_OtherCurrentPayables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
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
                "Ae353dd60-5f46-4f1f-9a0a-835200c8e9a9": {
                    "Id": "Ae353dd60-5f46-4f1f-9a0a-835200c8e9a9",
                    "IdConcepto": "mx_deuda_BankLoansNonCurrent",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8dc0d653-6032-4720-a320-fcc70702463f": {
                    "Id": "A8dc0d653-6032-4720-a320-fcc70702463f",
                    "IdConcepto": "mx_deuda_BankLoansNonCurrent",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aeb066046-f8ed-4774-9d46-da19d47dc347": {
                    "Id": "Aeb066046-f8ed-4774-9d46-da19d47dc347",
                    "IdConcepto": "mx_deuda_BankLoansNonCurrent",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3c094f86-546b-4abb-b914-072c453a15e6": {
                    "Id": "A3c094f86-546b-4abb-b914-072c453a15e6",
                    "IdConcepto": "mx_deuda_StockMarketLoansNonCurrent",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A81c7d8d2-5d56-4327-8757-8d0bdaba39a4": {
                    "Id": "A81c7d8d2-5d56-4327-8757-8d0bdaba39a4",
                    "IdConcepto": "mx_deuda_StockMarketLoansNonCurrent",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8ae523ec-3125-4bd3-9dcc-dc55ab05280d": {
                    "Id": "A8ae523ec-3125-4bd3-9dcc-dc55ab05280d",
                    "IdConcepto": "mx_deuda_StockMarketLoansNonCurrent",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae75a607f-c7f6-4750-be6e-fd1c5869680e": {
                    "Id": "Ae75a607f-c7f6-4750-be6e-fd1c5869680e",
                    "IdConcepto": "mx_deuda_InterestOnLongTermDebt",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7123e8b2-1c66-4ed4-b0c4-d0d8428d538d": {
                    "Id": "A7123e8b2-1c66-4ed4-b0c4-d0d8428d538d",
                    "IdConcepto": "mx_deuda_InterestOnLongTermDebt",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A95146c0b-5989-4473-8b24-f930037eaf03": {
                    "Id": "A95146c0b-5989-4473-8b24-f930037eaf03",
                    "IdConcepto": "mx_deuda_InterestOnLongTermDebt",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1bedc859-5dce-480b-8ed8-6cc2eef69d8f": {
                    "Id": "A1bedc859-5dce-480b-8ed8-6cc2eef69d8f",
                    "IdConcepto": "ifrs-full_OtherNoncurrentPayables",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A53c3d3a7-bd0f-4f4d-a7b8-ff6a674722c3": {
                    "Id": "A53c3d3a7-bd0f-4f4d-a7b8-ff6a674722c3",
                    "IdConcepto": "ifrs-full_OtherNoncurrentPayables",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac09db664-9ae6-4cee-8be9-9d736d64eb19": {
                    "Id": "Ac09db664-9ae6-4cee-8be9-9d736d64eb19",
                    "IdConcepto": "ifrs-full_OtherNoncurrentPayables",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
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
                "A6d7c8a7e-742e-4065-b084-2b6d2b96b138": {
                    "Id": "A6d7c8a7e-742e-4065-b084-2b6d2b96b138",
                    "IdConcepto": "mx_deuda_OtherComprehensiveIncomeDeuda",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab58ab103-a2fc-4230-b40a-b49d1e30a762": {
                    "Id": "Ab58ab103-a2fc-4230-b40a-b49d1e30a762",
                    "IdConcepto": "mx_deuda_OtherComprehensiveIncomeDeuda",
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
                "A898c6aab-b3f8-4068-bedd-e13f9bd82ce9": {
                    "Id": "A898c6aab-b3f8-4068-bedd-e13f9bd82ce9",
                    "IdConcepto": "ifrs-full_NetAssetsLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad5d46951-2024-4819-86bc-6577b6848c5f": {
                    "Id": "Ad5d46951-2024-4819-86bc-6577b6848c5f",
                    "IdConcepto": "ifrs-full_NetAssetsLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afe71f063-48f4-4383-a4e4-a8d519ca410a": {
                    "Id": "Afe71f063-48f4-4383-a4e4-a8d519ca410a",
                    "IdConcepto": "ifrs-full_NetAssetsLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
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
                "A7abdbb19-720d-4b7e-922e-017b1b6414c9": {
                    "Id": "A7abdbb19-720d-4b7e-922e-017b1b6414c9",
                    "IdConcepto": "ifrs-full_CurrentAssetsLiabilities",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abd7d633c-52ff-4263-be7c-00a16905f76e": {
                    "Id": "Abd7d633c-52ff-4263-be7c-00a16905f76e",
                    "IdConcepto": "ifrs-full_CurrentAssetsLiabilities",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af4218444-f3e9-4fe3-9248-846b024cbff9": {
                    "Id": "Af4218444-f3e9-4fe3-9248-846b024cbff9",
                    "IdConcepto": "ifrs-full_CurrentAssetsLiabilities",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
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