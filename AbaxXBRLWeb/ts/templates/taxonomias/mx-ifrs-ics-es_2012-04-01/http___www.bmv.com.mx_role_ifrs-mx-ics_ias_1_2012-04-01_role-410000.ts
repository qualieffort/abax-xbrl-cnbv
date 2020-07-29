///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/role/ifrs-mx-ics/ias_1_2012-04-01_role-410000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_bmv_com_mx_role_ifrs_mx_ics_ias_1_2012_04_01_role_410000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_bmv_com_mx_role_ifrs_mx_ics_ias_1_2012_04_01_role_410000
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
                "A5e77ab04-b812-464b-90e1-538c78eecd0f": {
                    "Id": "A5e77ab04-b812-464b-90e1-538c78eecd0f",
                    "IdConcepto": "ifrs_ProfitLoss",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acc2d6446-eb2e-4724-98c5-afe982b1ae61": {
                    "Id": "Acc2d6446-eb2e-4724-98c5-afe982b1ae61",
                    "IdConcepto": "ifrs_ProfitLoss",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A942cdf2a-b40d-46b2-9731-f837e0db7d9f": {
                    "Id": "A942cdf2a-b40d-46b2-9731-f837e0db7d9f",
                    "IdConcepto": "ifrs_ProfitLoss",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A50efca7a-8f8d-4eda-9130-147b6a8f95f5": {
                    "Id": "A50efca7a-8f8d-4eda-9130-147b6a8f95f5",
                    "IdConcepto": "ifrs_ProfitLoss",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A57a99f0f-f1d0-4daf-b952-be923f5b2df0": {
                    "Id": "A57a99f0f-f1d0-4daf-b952-be923f5b2df0",
                    "IdConcepto": "ifrs_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1bcb6630-cf17-4e69-b78a-fa70b30b73b4": {
                    "Id": "A1bcb6630-cf17-4e69-b78a-fa70b30b73b4",
                    "IdConcepto": "ifrs_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae658dd36-c284-4118-b552-6279cb894e21": {
                    "Id": "Ae658dd36-c284-4118-b552-6279cb894e21",
                    "IdConcepto": "ifrs_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1821e496-3dbc-46f0-903c-320a72b123be": {
                    "Id": "A1821e496-3dbc-46f0-903c-320a72b123be",
                    "IdConcepto": "ifrs_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3ba209c6-5827-49ab-beb9-45b4c34ba513": {
                    "Id": "A3ba209c6-5827-49ab-beb9-45b4c34ba513",
                    "IdConcepto": "ifrs_OtherComprehensiveIncomeNetOfTaxActuarialGainsLossesOnDefinedBenefitPlans",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad6c49284-ad9d-454e-8882-ac139a423029": {
                    "Id": "Ad6c49284-ad9d-454e-8882-ac139a423029",
                    "IdConcepto": "ifrs_OtherComprehensiveIncomeNetOfTaxActuarialGainsLossesOnDefinedBenefitPlans",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8122589b-c2ca-4036-8003-0321d7bab6b0": {
                    "Id": "A8122589b-c2ca-4036-8003-0321d7bab6b0",
                    "IdConcepto": "ifrs_OtherComprehensiveIncomeNetOfTaxActuarialGainsLossesOnDefinedBenefitPlans",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9cbd8590-e255-4e29-b54c-b4426f47feb8": {
                    "Id": "A9cbd8590-e255-4e29-b54c-b4426f47feb8",
                    "IdConcepto": "ifrs_OtherComprehensiveIncomeNetOfTaxActuarialGainsLossesOnDefinedBenefitPlans",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f77d83c-def0-4106-a7ee-002025231872": {
                    "Id": "A4f77d83c-def0-4106-a7ee-002025231872",
                    "IdConcepto": "mx-ifrs-ics_ParticipacionResultadosporRevaluacionPropiedadesAsociadasNegociosConjuntos",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A34da31ad-8c98-4b18-a1a0-68b66aa63610": {
                    "Id": "A34da31ad-8c98-4b18-a1a0-68b66aa63610",
                    "IdConcepto": "mx-ifrs-ics_ParticipacionResultadosporRevaluacionPropiedadesAsociadasNegociosConjuntos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa720f7dc-c580-4e71-bf30-4c9ef2c6abb7": {
                    "Id": "Aa720f7dc-c580-4e71-bf30-4c9ef2c6abb7",
                    "IdConcepto": "mx-ifrs-ics_ParticipacionResultadosporRevaluacionPropiedadesAsociadasNegociosConjuntos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A40caecff-9192-4b86-ac41-46eb6c0086f4": {
                    "Id": "A40caecff-9192-4b86-ac41-46eb6c0086f4",
                    "IdConcepto": "mx-ifrs-ics_ParticipacionResultadosporRevaluacionPropiedadesAsociadasNegociosConjuntos",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A02a1535c-09f5-4cd6-8882-504ca63b49cb": {
                    "Id": "A02a1535c-09f5-4cd6-8882-504ca63b49cb",
                    "IdConcepto": "ifrs_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad009b953-8ab4-4ac5-bb27-42e92d65e928": {
                    "Id": "Ad009b953-8ab4-4ac5-bb27-42e92d65e928",
                    "IdConcepto": "ifrs_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac76ecbbc-efd5-4746-8c9d-3b9898affca9": {
                    "Id": "Ac76ecbbc-efd5-4746-8c9d-3b9898affca9",
                    "IdConcepto": "ifrs_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1cf8c225-3ce7-4cd1-94e0-c9807406d058": {
                    "Id": "A1cf8c225-3ce7-4cd1-94e0-c9807406d058",
                    "IdConcepto": "ifrs_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0e6198f6-b9a2-4e98-a2fd-d465fd579b28": {
                    "Id": "A0e6198f6-b9a2-4e98-a2fd-d465fd579b28",
                    "IdConcepto": "ifrs_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A926f9f4c-44f9-45f8-8a0c-cbfb29cc08e2": {
                    "Id": "A926f9f4c-44f9-45f8-8a0c-cbfb29cc08e2",
                    "IdConcepto": "ifrs_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A560db7de-19b6-4474-96c2-435d56e2cd05": {
                    "Id": "A560db7de-19b6-4474-96c2-435d56e2cd05",
                    "IdConcepto": "ifrs_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa77880c0-b28b-4f93-9326-7890a17d8ee7": {
                    "Id": "Aa77880c0-b28b-4f93-9326-7890a17d8ee7",
                    "IdConcepto": "ifrs_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A973cbcc9-08d9-4239-8072-9bed5474d5bf": {
                    "Id": "A973cbcc9-08d9-4239-8072-9bed5474d5bf",
                    "IdConcepto": "mx-ifrs-ics_CambiosValuacionInstrumentosFinancierosDerivadosdePartidasquePuedenSerReclasificadasSubsecuentementeaResultados",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4175a1af-904c-4bbb-8a28-9f6963c30f37": {
                    "Id": "A4175a1af-904c-4bbb-8a28-9f6963c30f37",
                    "IdConcepto": "mx-ifrs-ics_CambiosValuacionInstrumentosFinancierosDerivadosdePartidasquePuedenSerReclasificadasSubsecuentementeaResultados",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa39102be-16e8-42a8-9baf-d7ccee1107f1": {
                    "Id": "Aa39102be-16e8-42a8-9baf-d7ccee1107f1",
                    "IdConcepto": "mx-ifrs-ics_CambiosValuacionInstrumentosFinancierosDerivadosdePartidasquePuedenSerReclasificadasSubsecuentementeaResultados",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab8e8269c-5a2b-48b2-a32a-f63a1bc02b4c": {
                    "Id": "Ab8e8269c-5a2b-48b2-a32a-f63a1bc02b4c",
                    "IdConcepto": "mx-ifrs-ics_CambiosValuacionInstrumentosFinancierosDerivadosdePartidasquePuedenSerReclasificadasSubsecuentementeaResultados",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A82647eb9-0385-49b5-b8f8-45942323ec58": {
                    "Id": "A82647eb9-0385-49b5-b8f8-45942323ec58",
                    "IdConcepto": "mx-ifrs-ics_CambiosValorRazonableOtrosActivosPartidasquePuedenserReclasificadasSubsecuentementeaResultados",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af45aa3ea-122b-4859-9108-b42f2d40858b": {
                    "Id": "Af45aa3ea-122b-4859-9108-b42f2d40858b",
                    "IdConcepto": "mx-ifrs-ics_CambiosValorRazonableOtrosActivosPartidasquePuedenserReclasificadasSubsecuentementeaResultados",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4df17265-3296-4b5e-9885-f9ff5c3295ba": {
                    "Id": "A4df17265-3296-4b5e-9885-f9ff5c3295ba",
                    "IdConcepto": "mx-ifrs-ics_CambiosValorRazonableOtrosActivosPartidasquePuedenserReclasificadasSubsecuentementeaResultados",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A54c89460-0e0e-47ea-8b25-6e0d8f70fc00": {
                    "Id": "A54c89460-0e0e-47ea-8b25-6e0d8f70fc00",
                    "IdConcepto": "mx-ifrs-ics_CambiosValorRazonableOtrosActivosPartidasquePuedenserReclasificadasSubsecuentementeaResultados",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A85eed9a9-28d0-4360-931d-1a48c704aa4c": {
                    "Id": "A85eed9a9-28d0-4360-931d-1a48c704aa4c",
                    "IdConcepto": "ifrs_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8341dd28-1949-44ce-a0d6-43409bec9b25": {
                    "Id": "A8341dd28-1949-44ce-a0d6-43409bec9b25",
                    "IdConcepto": "ifrs_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A864395bb-d221-400c-a4ba-44373546ea21": {
                    "Id": "A864395bb-d221-400c-a4ba-44373546ea21",
                    "IdConcepto": "ifrs_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A383117b5-db46-4f73-bb58-729d0e1e07e2": {
                    "Id": "A383117b5-db46-4f73-bb58-729d0e1e07e2",
                    "IdConcepto": "ifrs_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab07ae208-e1ef-4c3e-8098-73c96d4d26bf": {
                    "Id": "Ab07ae208-e1ef-4c3e-8098-73c96d4d26bf",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasResultadosIntegrales",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac7c786f9-9f43-4b6c-ae34-69372440926c": {
                    "Id": "Ac7c786f9-9f43-4b6c-ae34-69372440926c",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasResultadosIntegrales",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4e36d751-dd4d-4a60-ae73-15ae82022b40": {
                    "Id": "A4e36d751-dd4d-4a60-ae73-15ae82022b40",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasResultadosIntegrales",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad917f239-c0d3-4435-85cd-d5968a9adb0f": {
                    "Id": "Ad917f239-c0d3-4435-85cd-d5968a9adb0f",
                    "IdConcepto": "mx-ifrs-ics_OtrasPartidasResultadosIntegrales",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acb017520-fa8f-4791-849a-8b47b7854084": {
                    "Id": "Acb017520-fa8f-4791-849a-8b47b7854084",
                    "IdConcepto": "ifrs_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A53be7f9e-2362-4420-a5d9-3508793966fe": {
                    "Id": "A53be7f9e-2362-4420-a5d9-3508793966fe",
                    "IdConcepto": "ifrs_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac54b4e6a-ef13-49ff-bf40-26e6f2796e0e": {
                    "Id": "Ac54b4e6a-ef13-49ff-bf40-26e6f2796e0e",
                    "IdConcepto": "ifrs_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0feae3e0-674f-4ecd-8076-f190c38a42ca": {
                    "Id": "A0feae3e0-674f-4ecd-8076-f190c38a42ca",
                    "IdConcepto": "ifrs_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad939eaff-dd1b-4e01-90e3-81130c516878": {
                    "Id": "Ad939eaff-dd1b-4e01-90e3-81130c516878",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aed3739c7-675f-42f3-94d9-954d07ac9e35": {
                    "Id": "Aed3739c7-675f-42f3-94d9-954d07ac9e35",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A689271ba-3972-418f-9c84-27ecf11d0f32": {
                    "Id": "A689271ba-3972-418f-9c84-27ecf11d0f32",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0c170f70-c3cc-4b0b-97f6-57c2d89ce955": {
                    "Id": "A0c170f70-c3cc-4b0b-97f6-57c2d89ce955",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af37002d6-d2fb-4a50-b811-db52d2cb4fdd": {
                    "Id": "Af37002d6-d2fb-4a50-b811-db52d2cb4fdd",
                    "IdConcepto": "ifrs_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aca845129-acfb-4ba1-b30a-beb91707836f": {
                    "Id": "Aca845129-acfb-4ba1-b30a-beb91707836f",
                    "IdConcepto": "ifrs_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2b381e21-9f13-4763-ba55-713eb6243faf": {
                    "Id": "A2b381e21-9f13-4763-ba55-713eb6243faf",
                    "IdConcepto": "ifrs_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abaa68075-a3c2-4043-b635-f9f1eb77df8e": {
                    "Id": "Abaa68075-a3c2-4043-b635-f9f1eb77df8e",
                    "IdConcepto": "ifrs_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A208e57ea-849b-4c74-99de-f4086e057061": {
                    "Id": "A208e57ea-849b-4c74-99de-f4086e057061",
                    "IdConcepto": "ifrs_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A876a40de-f277-4f8e-84c6-3fa4587e370a": {
                    "Id": "A876a40de-f277-4f8e-84c6-3fa4587e370a",
                    "IdConcepto": "ifrs_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4982b2fe-a5a4-4a82-aff2-1afc2acc0e23": {
                    "Id": "A4982b2fe-a5a4-4a82-aff2-1afc2acc0e23",
                    "IdConcepto": "ifrs_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A472e1bc0-e87f-484c-8df6-70843d7fde4f": {
                    "Id": "A472e1bc0-e87f-484c-8df6-70843d7fde4f",
                    "IdConcepto": "ifrs_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
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