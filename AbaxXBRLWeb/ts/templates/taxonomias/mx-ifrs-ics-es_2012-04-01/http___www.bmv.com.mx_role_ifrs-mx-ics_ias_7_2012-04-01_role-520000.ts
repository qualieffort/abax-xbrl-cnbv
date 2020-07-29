///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/role/ifrs-mx-ics/ias_7_2012-04-01_role-520000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_bmv_com_mx_role_ifrs_mx_ics_ias_7_2012_04_01_role_520000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_bmv_com_mx_role_ifrs_mx_ics_ias_7_2012_04_01_role_520000
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
                "P_Duracion_2014-07-01_2014-09-30": {
                    "Id": "P_Duracion_2014-07-01_2014-09-30",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2014_07_01",
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
                "P_Duracion_2014-01-01_2014-09-30": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30",
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
                "P_Duracion_2013-01-01_2013-09-30": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
                        "FechaFin": "#fecha_2013_09_30",
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
                "P_Duracion_2013-07-01_2013-09-30": {
                    "Id": "P_Duracion_2013-07-01_2013-09-30",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_07_01",
                        "FechaFin": "#fecha_2013_09_30",
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
                "P_Instante_2014-09-30": {
                    "Id": "P_Instante_2014-09-30",
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
                },
                "P_Instante_2013-12-31": {
                    "Id": "P_Instante_2013-12-31",
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
                "P_Instante_2012-12-31": {
                    "Id": "P_Instante_2012-12-31",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                "P_Instante_2013-09-30": {
                    "Id": "P_Instante_2013-09-30",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                "A696aef44-e404-4ac1-9412-bb8b61cb1281": {
                    "Id": "A696aef44-e404-4ac1-9412-bb8b61cb1281",
                    "IdConcepto": "ifrs_ProfitLossBeforeTax",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A177fa79a-e573-4693-b8df-1af7881e941c": {
                    "Id": "A177fa79a-e573-4693-b8df-1af7881e941c",
                    "IdConcepto": "ifrs_ProfitLossBeforeTax",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A02569a50-72f8-40d2-8eeb-08748c4f2342": {
                    "Id": "A02569a50-72f8-40d2-8eeb-08748c4f2342",
                    "IdConcepto": "ifrs_ProfitLossBeforeTax",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8929a35b-01be-4168-9f7c-8b25311f7fcd": {
                    "Id": "A8929a35b-01be-4168-9f7c-8b25311f7fcd",
                    "IdConcepto": "ifrs_ProfitLossBeforeTax",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9f239b15-7d37-407b-b263-85108a84e647": {
                    "Id": "A9f239b15-7d37-407b-b263-85108a84e647",
                    "IdConcepto": "ifrs_OtherAdjustmentsForNoncashItems",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae0955376-3e1b-4472-ba8f-3ab1749861ce": {
                    "Id": "Ae0955376-3e1b-4472-ba8f-3ab1749861ce",
                    "IdConcepto": "ifrs_OtherAdjustmentsForNoncashItems",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A45d003e3-8cf4-4e87-b15d-043dc8c627cf": {
                    "Id": "A45d003e3-8cf4-4e87-b15d-043dc8c627cf",
                    "IdConcepto": "mx-ifrs-ics_EstimacionPeriodo",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6984ca4f-4a61-4cdb-ac60-dcdbe834e5f7": {
                    "Id": "A6984ca4f-4a61-4cdb-ac60-dcdbe834e5f7",
                    "IdConcepto": "mx-ifrs-ics_EstimacionPeriodo",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7681f635-e5a5-462a-84ee-4d22111a7b5c": {
                    "Id": "A7681f635-e5a5-462a-84ee-4d22111a7b5c",
                    "IdConcepto": "mx-ifrs-ics_ProvisionPeriodo",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5a0e8ee9-2820-4ece-aa85-a760091c3d00": {
                    "Id": "A5a0e8ee9-2820-4ece-aa85-a760091c3d00",
                    "IdConcepto": "mx-ifrs-ics_ProvisionPeriodo",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afc95ae37-cc45-435c-9383-e73bef70b9b3": {
                    "Id": "Afc95ae37-cc45-435c-9383-e73bef70b9b3",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasNoRealizadas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A48dd7205-7c15-4ec1-bb93-adb0edc26295": {
                    "Id": "A48dd7205-7c15-4ec1-bb93-adb0edc26295",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasNoRealizadas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A519e2a81-d171-43bb-a4d9-7e4511a1043a": {
                    "Id": "A519e2a81-d171-43bb-a4d9-7e4511a1043a",
                    "IdConcepto": "mx-ifrs-ics_PartidasRelacionadasActividadesInversion",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A33247fb2-2f5d-4f1e-b9cc-e748785fe300": {
                    "Id": "A33247fb2-2f5d-4f1e-b9cc-e748785fe300",
                    "IdConcepto": "mx-ifrs-ics_PartidasRelacionadasActividadesInversion",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A576bc924-7b8d-4b73-b3d6-bcacc97b66c9": {
                    "Id": "A576bc924-7b8d-4b73-b3d6-bcacc97b66c9",
                    "IdConcepto": "ifrs_AdjustmentsForDepreciationAndAmortisationExpense",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A347b1ff4-9645-4bd8-87e1-7a7ce93274bd": {
                    "Id": "A347b1ff4-9645-4bd8-87e1-7a7ce93274bd",
                    "IdConcepto": "ifrs_AdjustmentsForDepreciationAndAmortisationExpense",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa8d9a195-666d-4912-85c5-01cf70b083fb": {
                    "Id": "Aa8d9a195-666d-4912-85c5-01cf70b083fb",
                    "IdConcepto": "ifrs_AdjustmentsForLossesGainsOnDisposalOfNoncurrentAssets",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A73c45e22-a490-4e84-a261-2ad0ab6644e7": {
                    "Id": "A73c45e22-a490-4e84-a261-2ad0ab6644e7",
                    "IdConcepto": "ifrs_AdjustmentsForLossesGainsOnDisposalOfNoncurrentAssets",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6356a7f0-48ca-4064-abb2-83f67e21e5e5": {
                    "Id": "A6356a7f0-48ca-4064-abb2-83f67e21e5e5",
                    "IdConcepto": "ifrs_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7efa032d-cde4-47eb-9eed-7467fbe27056": {
                    "Id": "A7efa032d-cde4-47eb-9eed-7467fbe27056",
                    "IdConcepto": "ifrs_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa063b686-0381-4569-978c-1abeb17760dc": {
                    "Id": "Aa063b686-0381-4569-978c-1abeb17760dc",
                    "IdConcepto": "mx-ifrs-ics_ParticipacionAsociadasNegociosConjuntos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09e9e389-39d1-4d64-bf3f-b1f21a35685d": {
                    "Id": "A09e9e389-39d1-4d64-bf3f-b1f21a35685d",
                    "IdConcepto": "mx-ifrs-ics_ParticipacionAsociadasNegociosConjuntos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adeac9c91-a7fd-4acd-a877-a10a1bbb0be4": {
                    "Id": "Adeac9c91-a7fd-4acd-a877-a10a1bbb0be4",
                    "IdConcepto": "ifrs_DividendsReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5f9b12ab-e3dd-4662-add2-d3bf1fd63b25": {
                    "Id": "A5f9b12ab-e3dd-4662-add2-d3bf1fd63b25",
                    "IdConcepto": "ifrs_DividendsReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9053a199-3994-4bdc-82a4-9ccf0f0fba3b": {
                    "Id": "A9053a199-3994-4bdc-82a4-9ccf0f0fba3b",
                    "IdConcepto": "ifrs_InterestReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3d11eaa0-56c6-48fb-ac5e-ae0260e13f33": {
                    "Id": "A3d11eaa0-56c6-48fb-ac5e-ae0260e13f33",
                    "IdConcepto": "ifrs_InterestReceivedClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5112d130-2eb5-44f1-a963-82ca62b4bf62": {
                    "Id": "A5112d130-2eb5-44f1-a963-82ca62b4bf62",
                    "IdConcepto": "mx-ifrs-ics_FluctuacionCambiariaPartidasRelacionadasActividadesInversion",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0408813d-fb46-4e6a-8d63-599f2238c529": {
                    "Id": "A0408813d-fb46-4e6a-8d63-599f2238c529",
                    "IdConcepto": "mx-ifrs-ics_FluctuacionCambiariaPartidasRelacionadasActividadesInversion",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A035b4d14-1ed6-48bc-a894-3933b937dd58": {
                    "Id": "A035b4d14-1ed6-48bc-a894-3933b937dd58",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasRelacionadasActividadesInversion",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ade6a71b0-6a4e-40d4-a0d1-119a5dadaf16": {
                    "Id": "Ade6a71b0-6a4e-40d4-a0d1-119a5dadaf16",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasRelacionadasActividadesInversion",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A22eb5d30-8e01-48f9-88fa-97da087d57c9": {
                    "Id": "A22eb5d30-8e01-48f9-88fa-97da087d57c9",
                    "IdConcepto": "mx-ifrs-ics_PartidasRelacionadasActividadesFinanciamiento",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A195302be-1ebf-4dbd-ad63-030c01b8890d": {
                    "Id": "A195302be-1ebf-4dbd-ad63-030c01b8890d",
                    "IdConcepto": "mx-ifrs-ics_PartidasRelacionadasActividadesFinanciamiento",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7208d7e9-77e1-42af-81ce-462987c7a49c": {
                    "Id": "A7208d7e9-77e1-42af-81ce-462987c7a49c",
                    "IdConcepto": "ifrs_InterestPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abc2cc36d-8622-45d8-aa2e-735995b67167": {
                    "Id": "Abc2cc36d-8622-45d8-aa2e-735995b67167",
                    "IdConcepto": "ifrs_InterestPaidClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A679c9281-7e74-4075-8e20-e7d18e24aca5": {
                    "Id": "A679c9281-7e74-4075-8e20-e7d18e24aca5",
                    "IdConcepto": "mx-ifrs-ics_FluctuacionCambiariaPartidasRelacionadasActividadesFinanciamiento",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5ca29f0d-57e5-4491-b32a-d0c9e4511fba": {
                    "Id": "A5ca29f0d-57e5-4491-b32a-d0c9e4511fba",
                    "IdConcepto": "mx-ifrs-ics_FluctuacionCambiariaPartidasRelacionadasActividadesFinanciamiento",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae408c57c-d92c-43bf-ab69-1cfdf180a581": {
                    "Id": "Ae408c57c-d92c-43bf-ab69-1cfdf180a581",
                    "IdConcepto": "mx-ifrs-ics_OperacionesFinancierasDerivados",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7069151b-07fe-4256-b6ed-5270b3f9a58d": {
                    "Id": "A7069151b-07fe-4256-b6ed-5270b3f9a58d",
                    "IdConcepto": "mx-ifrs-ics_OperacionesFinancierasDerivados",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae9ac691d-864b-4c77-95f0-5e0e4c14b8b9": {
                    "Id": "Ae9ac691d-864b-4c77-95f0-5e0e4c14b8b9",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasRelacionadasActividadesFinanciamiento",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1903d489-9fbe-472f-80e9-3e7acd9fe52e": {
                    "Id": "A1903d489-9fbe-472f-80e9-3e7acd9fe52e",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasRelacionadasActividadesFinanciamiento",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aedf77f15-2909-43bd-8fc5-c955f3d29703": {
                    "Id": "Aedf77f15-2909-43bd-8fc5-c955f3d29703",
                    "IdConcepto": "mx-ifrs-ics_FlujoDerivadoResultadoAntesImpuestosUtilidad",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af5d738ab-aacc-4cc2-9237-935674075fba": {
                    "Id": "Af5d738ab-aacc-4cc2-9237-935674075fba",
                    "IdConcepto": "mx-ifrs-ics_FlujoDerivadoResultadoAntesImpuestosUtilidad",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1b910a6c-3b5e-4157-8110-a3fc2fa580e6": {
                    "Id": "A1b910a6c-3b5e-4157-8110-a3fc2fa580e6",
                    "IdConcepto": "ifrs_CashFlowsFromUsedInOperations",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abfe1a72d-348e-4da0-b921-d32f7d1580f7": {
                    "Id": "Abfe1a72d-348e-4da0-b921-d32f7d1580f7",
                    "IdConcepto": "ifrs_CashFlowsFromUsedInOperations",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adbc65dd2-0244-4354-bfe8-c8d0c4eaf583": {
                    "Id": "Adbc65dd2-0244-4354-bfe8-c8d0c4eaf583",
                    "IdConcepto": "mx-ifrs-ics_DecrementoIncrementoClientes",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af53f071f-0da1-4097-a4aa-112370ced808": {
                    "Id": "Af53f071f-0da1-4097-a4aa-112370ced808",
                    "IdConcepto": "mx-ifrs-ics_DecrementoIncrementoClientes",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e2398dc-12ff-4381-beb1-9f334d41ff17": {
                    "Id": "A1e2398dc-12ff-4381-beb1-9f334d41ff17",
                    "IdConcepto": "mx-ifrs-ics_DecrementoIncrementoInventarios",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acd60e661-95a4-4afa-984d-2e9a3863a182": {
                    "Id": "Acd60e661-95a4-4afa-984d-2e9a3863a182",
                    "IdConcepto": "mx-ifrs-ics_DecrementoIncrementoInventarios",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adb1041a9-897b-477a-b92a-95cb7c92448a": {
                    "Id": "Adb1041a9-897b-477a-b92a-95cb7c92448a",
                    "IdConcepto": "mx-ifrs-ics_DecrementoIncrementoOtrasCuentasporCobrarOtrosActivosCirculantes",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6da3ee1d-fef3-49e7-a53f-08a84204ecfb": {
                    "Id": "A6da3ee1d-fef3-49e7-a53f-08a84204ecfb",
                    "IdConcepto": "mx-ifrs-ics_DecrementoIncrementoOtrasCuentasporCobrarOtrosActivosCirculantes",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad9ce1256-860a-4c90-8f6b-3b7525c5be79": {
                    "Id": "Ad9ce1256-860a-4c90-8f6b-3b7525c5be79",
                    "IdConcepto": "mx-ifrs-ics_IncrementoDecrementoProveedores",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A506e6456-230a-489e-af72-cc3c814b73d0": {
                    "Id": "A506e6456-230a-489e-af72-cc3c814b73d0",
                    "IdConcepto": "mx-ifrs-ics_IncrementoDecrementoProveedores",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac5ddea1a-052f-4c48-8871-f06810409edc": {
                    "Id": "Ac5ddea1a-052f-4c48-8871-f06810409edc",
                    "IdConcepto": "mx-ifrs-ics_IncrementoDecrementoOtrosPasivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A35a7914e-b3ec-4023-a182-0c206b1512af": {
                    "Id": "A35a7914e-b3ec-4023-a182-0c206b1512af",
                    "IdConcepto": "mx-ifrs-ics_IncrementoDecrementoOtrosPasivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aca762df2-a7bd-4c74-93a2-6f02e5decf41": {
                    "Id": "Aca762df2-a7bd-4c74-93a2-6f02e5decf41",
                    "IdConcepto": "ifrs_IncomeTaxesPaidRefundClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afa594377-c6e8-4928-9c35-16ba6a627e54": {
                    "Id": "Afa594377-c6e8-4928-9c35-16ba6a627e54",
                    "IdConcepto": "ifrs_IncomeTaxesPaidRefundClassifiedAsOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A85d2b5b5-f74a-4dff-92b2-637cfac0dccf": {
                    "Id": "A85d2b5b5-f74a-4dff-92b2-637cfac0dccf",
                    "IdConcepto": "ifrs_CashFlowsFromUsedInOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A38fa3c16-4a67-4d48-bfc0-96459e36e1da": {
                    "Id": "A38fa3c16-4a67-4d48-bfc0-96459e36e1da",
                    "IdConcepto": "ifrs_CashFlowsFromUsedInOperatingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A67b624e0-77cf-48e6-bca5-aaafc6e54f6d": {
                    "Id": "A67b624e0-77cf-48e6-bca5-aaafc6e54f6d",
                    "IdConcepto": "ifrs_CashFlowsUsedInObtainingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab34709e0-a1e3-41ca-a48c-399865873900": {
                    "Id": "Ab34709e0-a1e3-41ca-a48c-399865873900",
                    "IdConcepto": "ifrs_CashFlowsUsedInObtainingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afa152a2c-afc7-4029-baa3-ec72ddb82612": {
                    "Id": "Afa152a2c-afc7-4029-baa3-ec72ddb82612",
                    "IdConcepto": "ifrs_CashFlowsFromLosingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad09c40cc-d698-4a2d-b81e-9d696cb5e25e": {
                    "Id": "Ad09c40cc-d698-4a2d-b81e-9d696cb5e25e",
                    "IdConcepto": "ifrs_CashFlowsFromLosingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad57e1c49-5de2-44ee-840f-a60d075a9fab": {
                    "Id": "Ad57e1c49-5de2-44ee-840f-a60d075a9fab",
                    "IdConcepto": "ifrs_PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9027cd55-e261-4a80-8c34-136632dd5381": {
                    "Id": "A9027cd55-e261-4a80-8c34-136632dd5381",
                    "IdConcepto": "ifrs_PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A17c3059e-99d0-477e-af68-0b50f6527c0f": {
                    "Id": "A17c3059e-99d0-477e-af68-0b50f6527c0f",
                    "IdConcepto": "ifrs_ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A72900fe6-8c3c-4213-9d24-b4202cff4031": {
                    "Id": "A72900fe6-8c3c-4213-9d24-b4202cff4031",
                    "IdConcepto": "ifrs_ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A174c0436-faca-4ba7-94c7-fe9ec9e711d3": {
                    "Id": "A174c0436-faca-4ba7-94c7-fe9ec9e711d3",
                    "IdConcepto": "ifrs_OtherCashPaymentsToAcquireEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A87a018e5-ca3a-4f3e-9a6e-f97c7768ce4e": {
                    "Id": "A87a018e5-ca3a-4f3e-9a6e-f97c7768ce4e",
                    "IdConcepto": "ifrs_OtherCashPaymentsToAcquireEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A266cc94e-8229-4b5a-9fef-7cdc21df0153": {
                    "Id": "A266cc94e-8229-4b5a-9fef-7cdc21df0153",
                    "IdConcepto": "ifrs_OtherCashReceiptsFromSalesOfEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad62dab7b-de78-48f8-9850-2436350d669e": {
                    "Id": "Ad62dab7b-de78-48f8-9850-2436350d669e",
                    "IdConcepto": "ifrs_OtherCashReceiptsFromSalesOfEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1b322488-5448-4bc2-9191-c78cff313796": {
                    "Id": "A1b322488-5448-4bc2-9191-c78cff313796",
                    "IdConcepto": "ifrs_PurchaseOfIntangibleAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acab41d34-87a1-472b-813d-3cd08c0f800c": {
                    "Id": "Acab41d34-87a1-472b-813d-3cd08c0f800c",
                    "IdConcepto": "ifrs_PurchaseOfIntangibleAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A10f876cc-e63a-4a57-9aa4-a2fcabb92d4b": {
                    "Id": "A10f876cc-e63a-4a57-9aa4-a2fcabb92d4b",
                    "IdConcepto": "ifrs_ProceedsFromSalesOfIntangibleAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af4cbece0-6c0b-4480-9340-aa65cb543c4e": {
                    "Id": "Af4cbece0-6c0b-4480-9340-aa65cb543c4e",
                    "IdConcepto": "ifrs_ProceedsFromSalesOfIntangibleAssetsClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab04f80b3-88d9-48df-b243-047914732e3b": {
                    "Id": "Ab04f80b3-88d9-48df-b243-047914732e3b",
                    "IdConcepto": "ifrs_OtherCashPaymentsToAcquireInterestsInJointVenturesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa6b7cc63-70c0-4703-8f27-0bb900b29697": {
                    "Id": "Aa6b7cc63-70c0-4703-8f27-0bb900b29697",
                    "IdConcepto": "ifrs_OtherCashPaymentsToAcquireInterestsInJointVenturesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae1b02cd5-3c56-4e19-bea5-e81f95ec6c41": {
                    "Id": "Ae1b02cd5-3c56-4e19-bea5-e81f95ec6c41",
                    "IdConcepto": "ifrs_OtherCashReceiptsFromSalesOfInterestsInJointVenturesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab90b1dd4-9033-4a8d-9f02-f24b829cb4eb": {
                    "Id": "Ab90b1dd4-9033-4a8d-9f02-f24b829cb4eb",
                    "IdConcepto": "ifrs_OtherCashReceiptsFromSalesOfInterestsInJointVenturesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af281c76c-eb98-4aae-baec-2ab9e2401658": {
                    "Id": "Af281c76c-eb98-4aae-baec-2ab9e2401658",
                    "IdConcepto": "ifrs_DividendsReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae533259d-3278-472a-9e54-f34850b2e842": {
                    "Id": "Ae533259d-3278-472a-9e54-f34850b2e842",
                    "IdConcepto": "ifrs_DividendsReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa9b0dd02-7b3a-46e8-86a8-15ac7a30a1c5": {
                    "Id": "Aa9b0dd02-7b3a-46e8-86a8-15ac7a30a1c5",
                    "IdConcepto": "ifrs_InterestReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4cc01471-e315-4ee0-981e-f4b94ac042bd": {
                    "Id": "A4cc01471-e315-4ee0-981e-f4b94ac042bd",
                    "IdConcepto": "ifrs_InterestReceivedClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e6c0a27-0a21-4011-9d33-e169f76ee94a": {
                    "Id": "A1e6c0a27-0a21-4011-9d33-e169f76ee94a",
                    "IdConcepto": "ifrs_CashReceiptsFromRepaymentOfAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1a2fda42-839c-423f-b759-892c2bafd1c2": {
                    "Id": "A1a2fda42-839c-423f-b759-892c2bafd1c2",
                    "IdConcepto": "ifrs_CashReceiptsFromRepaymentOfAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aca867fd1-b58e-45d8-9e05-0ea349448956": {
                    "Id": "Aca867fd1-b58e-45d8-9e05-0ea349448956",
                    "IdConcepto": "ifrs_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab5020248-55ea-42e6-b88f-4de946b1f7bc": {
                    "Id": "Ab5020248-55ea-42e6-b88f-4de946b1f7bc",
                    "IdConcepto": "ifrs_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7822de8c-e54b-4ca8-bfe4-bcb36a75f46e": {
                    "Id": "A7822de8c-e54b-4ca8-bfe4-bcb36a75f46e",
                    "IdConcepto": "ifrs_CashFlowsFromUsedInInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1ee6de76-dbf2-41c0-8557-c817479ac423": {
                    "Id": "A1ee6de76-dbf2-41c0-8557-c817479ac423",
                    "IdConcepto": "ifrs_CashFlowsFromUsedInInvestingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3d5fbb71-7a71-4bcd-9241-9ef5475e293d": {
                    "Id": "A3d5fbb71-7a71-4bcd-9241-9ef5475e293d",
                    "IdConcepto": "mx-ifrs-ics_FinanciamientosBancarios",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9c39584a-7c11-4c5c-a8cf-e9b9cc7ad0bd": {
                    "Id": "A9c39584a-7c11-4c5c-a8cf-e9b9cc7ad0bd",
                    "IdConcepto": "mx-ifrs-ics_FinanciamientosBancarios",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A284f97c7-3abe-419d-b67d-0993dea93d48": {
                    "Id": "A284f97c7-3abe-419d-b67d-0993dea93d48",
                    "IdConcepto": "mx-ifrs-ics_FinanciamientosBursatiles",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A59ab9ea0-39d3-4af5-8ae7-271aa47cb1fb": {
                    "Id": "A59ab9ea0-39d3-4af5-8ae7-271aa47cb1fb",
                    "IdConcepto": "mx-ifrs-ics_FinanciamientosBursatiles",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af2723f06-28a2-46ff-be10-528c3ab1405d": {
                    "Id": "Af2723f06-28a2-46ff-be10-528c3ab1405d",
                    "IdConcepto": "mx-ifrs-ics_OtrosFinanciamientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab771ef13-9519-4b18-bc40-064d257b1c7e": {
                    "Id": "Ab771ef13-9519-4b18-bc40-064d257b1c7e",
                    "IdConcepto": "mx-ifrs-ics_OtrosFinanciamientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Affcdf1ad-79f6-43a3-9a23-de2ec6683073": {
                    "Id": "Affcdf1ad-79f6-43a3-9a23-de2ec6683073",
                    "IdConcepto": "mx-ifrs-ics_AmortizacionFinanciamientosBancarios",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afec2ce87-f258-4477-918d-e42d2298f4d5": {
                    "Id": "Afec2ce87-f258-4477-918d-e42d2298f4d5",
                    "IdConcepto": "mx-ifrs-ics_AmortizacionFinanciamientosBancarios",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaedf3bff-d706-4fd3-848c-73c514e00711": {
                    "Id": "Aaedf3bff-d706-4fd3-848c-73c514e00711",
                    "IdConcepto": "mx-ifrs-ics_AmortizacionFinanciamientosBursatiles",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A77d2af4b-32ed-4559-a44f-a61c0f88b066": {
                    "Id": "A77d2af4b-32ed-4559-a44f-a61c0f88b066",
                    "IdConcepto": "mx-ifrs-ics_AmortizacionFinanciamientosBursatiles",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aef72b0c4-2058-4bac-a7b8-66eab876bfeb": {
                    "Id": "Aef72b0c4-2058-4bac-a7b8-66eab876bfeb",
                    "IdConcepto": "mx-ifrs-ics_AmortizacionOtrosFinanciamientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa7b3d985-3e6b-43e2-a3dc-927de31670c4": {
                    "Id": "Aa7b3d985-3e6b-43e2-a3dc-927de31670c4",
                    "IdConcepto": "mx-ifrs-ics_AmortizacionOtrosFinanciamientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adf125adf-1d30-4270-b113-a911d3331afe": {
                    "Id": "Adf125adf-1d30-4270-b113-a911d3331afe",
                    "IdConcepto": "mx-ifrs-ics_IncrementoDecrementoCapitalSocial",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A598c7c92-86ea-4544-8899-1ec89973b4cd": {
                    "Id": "A598c7c92-86ea-4544-8899-1ec89973b4cd",
                    "IdConcepto": "mx-ifrs-ics_IncrementoDecrementoCapitalSocial",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7ed685d0-ef7e-46d0-a1af-3756d2f8316a": {
                    "Id": "A7ed685d0-ef7e-46d0-a1af-3756d2f8316a",
                    "IdConcepto": "ifrs_DividendsPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1f9032b5-be55-4aea-b92b-aed42060051f": {
                    "Id": "A1f9032b5-be55-4aea-b92b-aed42060051f",
                    "IdConcepto": "ifrs_DividendsPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acd60bd59-a9fd-4623-935b-c5d261591fa3": {
                    "Id": "Acd60bd59-a9fd-4623-935b-c5d261591fa3",
                    "IdConcepto": "ifrs_ProceedsFromIssuingShares",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4d3ae83b-96e3-4db1-9d5d-a32781221b62": {
                    "Id": "A4d3ae83b-96e3-4db1-9d5d-a32781221b62",
                    "IdConcepto": "ifrs_ProceedsFromIssuingShares",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac00b5ff5-09a7-4313-912b-9fa314ee98d6": {
                    "Id": "Ac00b5ff5-09a7-4313-912b-9fa314ee98d6",
                    "IdConcepto": "mx-ifrs-ics_AportacionesFuturosAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A820c3a52-016e-45f2-9f8f-55ebc543d220": {
                    "Id": "A820c3a52-016e-45f2-9f8f-55ebc543d220",
                    "IdConcepto": "mx-ifrs-ics_AportacionesFuturosAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A67c7bc20-76fe-42c9-8601-35aec91fc09d": {
                    "Id": "A67c7bc20-76fe-42c9-8601-35aec91fc09d",
                    "IdConcepto": "ifrs_InterestPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aea5cac4a-a22d-46a7-a759-6e3ac6bce908": {
                    "Id": "Aea5cac4a-a22d-46a7-a759-6e3ac6bce908",
                    "IdConcepto": "ifrs_InterestPaidClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A470026c5-be0c-4fcb-a0ba-f66145ecd605": {
                    "Id": "A470026c5-be0c-4fcb-a0ba-f66145ecd605",
                    "IdConcepto": "ifrs_PaymentsToAcquireOrRedeemEntitysShares",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4be9491d-ca05-4630-8708-02d590afe468": {
                    "Id": "A4be9491d-ca05-4630-8708-02d590afe468",
                    "IdConcepto": "ifrs_PaymentsToAcquireOrRedeemEntitysShares",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f052547-0e3f-47be-8cc8-4f2f5b417561": {
                    "Id": "A4f052547-0e3f-47be-8cc8-4f2f5b417561",
                    "IdConcepto": "ifrs_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaab117bd-a57e-4de1-840a-b58d7eeffd95": {
                    "Id": "Aaab117bd-a57e-4de1-840a-b58d7eeffd95",
                    "IdConcepto": "ifrs_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0cd9588c-353d-4185-98b4-1da531d5d990": {
                    "Id": "A0cd9588c-353d-4185-98b4-1da531d5d990",
                    "IdConcepto": "ifrs_CashFlowsFromUsedInFinancingActivities",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A574ab9a4-d0f0-4326-81ed-3a7bff2ca667": {
                    "Id": "A574ab9a4-d0f0-4326-81ed-3a7bff2ca667",
                    "IdConcepto": "ifrs_CashFlowsFromUsedInFinancingActivities",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ada903e42-6012-40f9-83bc-d9c18af6f701": {
                    "Id": "Ada903e42-6012-40f9-83bc-d9c18af6f701",
                    "IdConcepto": "ifrs_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad2500438-6f1e-4ed1-a898-856387686130": {
                    "Id": "Ad2500438-6f1e-4ed1-a898-856387686130",
                    "IdConcepto": "ifrs_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A25f2bf8d-993d-4de6-a489-97e584630b07": {
                    "Id": "A25f2bf8d-993d-4de6-a489-97e584630b07",
                    "IdConcepto": "ifrs_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1516e288-e7be-46e2-b08d-95e7930f0cc2": {
                    "Id": "A1516e288-e7be-46e2-b08d-95e7930f0cc2",
                    "IdConcepto": "ifrs_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ace02dc65-2221-46e5-8b0f-27950b8929c9": {
                    "Id": "Ace02dc65-2221-46e5-8b0f-27950b8929c9",
                    "IdConcepto": "ifrs_IncreaseDecreaseInCashAndCashEquivalents",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A58058ae8-d254-4b17-83b8-9c830a4be217": {
                    "Id": "A58058ae8-d254-4b17-83b8-9c830a4be217",
                    "IdConcepto": "ifrs_IncreaseDecreaseInCashAndCashEquivalents",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2f3b2596-d2db-40f1-9909-5e4d8d8e0d32": {
                    "Id": "A2f3b2596-d2db-40f1-9909-5e4d8d8e0d32",
                    "IdConcepto": "ifrs_CashAndCashEquivalents",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A46ef21e9-5a4c-49e8-8940-7b45d11631cd": {
                    "Id": "A46ef21e9-5a4c-49e8-8940-7b45d11631cd",
                    "IdConcepto": "ifrs_CashAndCashEquivalents",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A64f67846-b725-472f-9942-4ca29d3b2faa": {
                    "Id": "A64f67846-b725-472f-9942-4ca29d3b2faa",
                    "IdConcepto": "ifrs_CashAndCashEquivalents",
                    "IdContextoPlantilla": "P_Instante_2012-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8ca2354f-3788-4835-b230-62aca6b17fad": {
                    "Id": "A8ca2354f-3788-4835-b230-62aca6b17fad",
                    "IdConcepto": "ifrs_CashAndCashEquivalents",
                    "IdContextoPlantilla": "P_Instante_2013-09-30",
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