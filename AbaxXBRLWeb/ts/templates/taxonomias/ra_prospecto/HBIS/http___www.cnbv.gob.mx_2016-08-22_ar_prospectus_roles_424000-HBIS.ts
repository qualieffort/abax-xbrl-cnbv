///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/424000-HBIS
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_HBIS implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_HBIS
         */
        constructor() {

            this.ListadoDeFormulas = {

                'INF_FINANCIERA_no_vacios_ar_pros_SelectedFinancialInformationDisclosure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_SelectedFinancialInformationDisclosure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or(variable2 != "SI" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_SelectedFinancialInformationDisclosure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_SelectedQuarterlyFinancialInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_SelectedQuarterlyFinancialInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SelectedQuarterlyFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_CommentsAndManagementAnalysisOnOperatingResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_CommentsAndManagementAnalysisOnOperatingResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnOperatingResults",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_OperationResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_OperationResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OperationResults",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResources",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx_2014": {
    "Id": "ctx_2014",
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
  "ctx_duration_2014": {
    "Id": "ctx_duration_2014",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2014_01_01",
      "FechaFin": "#fecha_2014_12_31",
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
  "ctx_duration_2013": {
    "Id": "ctx_duration_2013",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2013_01_01",
      "FechaFin": "#fecha_2013_12_31",
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
  "ctx_duration_2012": {
    "Id": "ctx_duration_2012",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2012_01_01",
      "FechaFin": "#fecha_2012_12_31",
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
  "ctx_2013": {
    "Id": "ctx_2013",
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
  "ctx_2012": {
    "Id": "ctx_2012",
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
  },

    "PURE": {
        "Id": "PURE",
        "Tipo": 1,
        "Medidas": [
                 {
                    "Nombre": "#medida_pure",
                    "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
                 }
                    ],
                    "MedidasDenominador": [],
                    "MedidasNumerador": []
                }
};
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationFinancialInformation_78c5d8c2-ffdf-4376-b1d8-325dde63a3ba": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformation_78c5d8c2-ffdf-4376-b1d8-325dde63a3ba",
    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationFinancialInformation"
  },
  "ifrs-full_Revenue_46767bd6-eb5e-4904-9d8d-d93895218b30": {
    "Id": "ifrs-full_Revenue_46767bd6-eb5e-4904-9d8d-d93895218b30",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Revenue_97b921a6-8e6a-4123-8da6-5ec11c95acce": {
    "Id": "ifrs-full_Revenue_97b921a6-8e6a-4123-8da6-5ec11c95acce",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Revenue_8807b630-604d-473c-844e-c004346ab7e0": {
    "Id": "ifrs-full_Revenue_8807b630-604d-473c-844e-c004346ab7e0",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_24b432f7-e440-4ee0-bacb-dbe3bab1810f": {
    "Id": "ifrs-full_GrossProfit_24b432f7-e440-4ee0-bacb-dbe3bab1810f",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_ed500306-133d-40f7-810c-1e0c4e9406ce": {
    "Id": "ifrs-full_GrossProfit_ed500306-133d-40f7-810c-1e0c4e9406ce",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_3a0d9ec5-166c-43b8-a99b-820fa6875a51": {
    "Id": "ifrs-full_GrossProfit_3a0d9ec5-166c-43b8-a99b-820fa6875a51",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_9fb608cb-c3ac-47be-ae81-4c64cc6f5b6e": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_9fb608cb-c3ac-47be-ae81-4c64cc6f5b6e",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_3b22c712-6bfc-48ef-96fa-ca11c3165688": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_3b22c712-6bfc-48ef-96fa-ca11c3165688",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_97ef3b34-77c3-4441-93f8-ec4131c39300": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_97ef3b34-77c3-4441-93f8-ec4131c39300",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_15887efd-7388-4f8d-a818-8f07a6f173f6": {
    "Id": "ifrs-full_ProfitLoss_15887efd-7388-4f8d-a818-8f07a6f173f6",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_ee549516-b8ec-46d4-81f3-e331cde9798b": {
    "Id": "ifrs-full_ProfitLoss_ee549516-b8ec-46d4-81f3-e331cde9798b",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_b4223a10-66af-42fe-9a47-e5972b0851ad": {
    "Id": "ifrs-full_ProfitLoss_b4223a10-66af-42fe-9a47-e5972b0851ad",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_6bdab271-192f-4774-9692-17f508d17420": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_6bdab271-192f-4774-9692-17f508d17420",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_67583b58-f9e1-4e55-9e80-d859a5a1c6e1": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_67583b58-f9e1-4e55-9e80-d859a5a1c6e1",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_88a0654c-8e20-467b-8702-f7c1563d574b": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_88a0654c-8e20-467b-8702-f7c1563d574b",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_1bff9c93-7640-447b-963b-4870c8eab4c6": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_1bff9c93-7640-447b-963b-4870c8eab4c6",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_477d6056-3093-4700-8a87-de483ae13b76": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_477d6056-3093-4700-8a87-de483ae13b76",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_bdf25f75-0d94-4367-aab7-b9a31ac92194": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_bdf25f75-0d94-4367-aab7-b9a31ac92194",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_c971acee-bea5-466f-a02e-f13f4eb5950a": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_c971acee-bea5-466f-a02e-f13f4eb5950a",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_113d4cb4-b57a-466e-9291-547f95b60fe1": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_113d4cb4-b57a-466e-9291-547f95b60fe1",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_cdd5202e-eff9-43cd-b919-da00e0f83858": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_cdd5202e-eff9-43cd-b919-da00e0f83858",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_f04b0ba6-3f8a-48c0-bcfc-17d0e696eed5": {
    "Id": "ifrs-full_Assets_f04b0ba6-3f8a-48c0-bcfc-17d0e696eed5",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_fbc4f51b-5407-46ef-b7ea-a197e84b6ba8": {
    "Id": "ifrs-full_Assets_fbc4f51b-5407-46ef-b7ea-a197e84b6ba8",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_b4216de9-2571-4992-ba2b-30ca0cab3597": {
    "Id": "ifrs-full_Assets_b4216de9-2571-4992-ba2b-30ca0cab3597",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_4bf9b055-363d-4472-a8ed-b81faf674871": {
    "Id": "ifrs-full_NoncurrentLiabilities_4bf9b055-363d-4472-a8ed-b81faf674871",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_b7d0e1a9-e6a6-47c4-9298-9921d3818590": {
    "Id": "ifrs-full_NoncurrentLiabilities_b7d0e1a9-e6a6-47c4-9298-9921d3818590",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_922d7437-fab4-4733-8155-501ecbbf586b": {
    "Id": "ifrs-full_NoncurrentLiabilities_922d7437-fab4-4733-8155-501ecbbf586b",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal_9a9cbbc2-f088-4c81-a737-995ebbc7d252": {
      "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal_9a9cbbc2-f088-4c81-a737-995ebbc7d252",
      "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal_4fa705ac-ed10-4b62-81bf-a322184b4097": {
      "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal_4fa705ac-ed10-4b62-81bf-a322184b4097",
      "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal_ea073eef-e019-4c21-a073-56d8f0e8d022": {
      "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal_ea073eef-e019-4c21-a073-56d8f0e8d022",
      "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
      "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal_00ad472b-e695-482d-a56c-b4420ff9a857": {
      "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal_00ad472b-e695-482d-a56c-b4420ff9a857",
      "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
      "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal_01fd6ed9-d602-41d8-a114-49dd3647b0fd": {
      "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal_01fd6ed9-d602-41d8-a114-49dd3647b0fd",
      "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
      "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal_73dee771-dba5-4a9a-84bd-1ff9abe0f99c": {
      "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal_73dee771-dba5-4a9a-84bd-1ff9abe0f99c",
      "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
      "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnoverDecimal_d27b9078-8353-4637-b1c6-9571baa7af1f": {
      "Id": "ifrs_mx-cor_20141205_InventoryTurnoverDecimal_d27b9078-8353-4637-b1c6-9571baa7af1f",
      "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
      "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnoverDecimal_40410368-9c65-4f25-9cb8-a552baf4cb9b": {
      "Id": "ifrs_mx-cor_20141205_InventoryTurnoverDecimal_40410368-9c65-4f25-9cb8-a552baf4cb9b",
      "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
      "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnoverDecimal_cfd1531d-6738-43f4-992a-6dcaddd1babd": {
      "Id": "ifrs_mx-cor_20141205_InventoryTurnoverDecimal_cfd1531d-6738-43f4-992a-6dcaddd1babd",
      "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnoverDecimal",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
      "IdUnidadPlantilla": "PURE",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_d1450ba0-8e97-4844-98c0-1e12dc9a5892": {
    "Id": "ifrs-full_Equity_d1450ba0-8e97-4844-98c0-1e12dc9a5892",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_d46e0711-cb32-40e0-acf2-aac66f656cd8": {
    "Id": "ifrs-full_Equity_d46e0711-cb32-40e0-acf2-aac66f656cd8",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_b519144b-4898-497a-b6ec-1d3fc8629788": {
    "Id": "ifrs-full_Equity_b519144b-4898-497a-b6ec-1d3fc8629788",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_5b047799-60d0-44e2-85d0-3cd2865c44b9": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_5b047799-60d0-44e2-85d0-3cd2865c44b9",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_bb3f1516-9d46-4196-85a3-c451f6183100": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_bb3f1516-9d46-4196-85a3-c451f6183100",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_c0b470d0-e6e6-4b29-8b46-dda55e20d26f": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_c0b470d0-e6e6-4b29-8b46-dda55e20d26f",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_SelectedFinancialInformationDisclosure_fcd48267-c88f-4cf5-b92c-badfef160300": {
    "Id": "ar_pros_SelectedFinancialInformationDisclosure_fcd48267-c88f-4cf5-b92c-badfef160300",
    "IdConcepto": "ar_pros_SelectedFinancialInformationDisclosure",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SelectedQuarterlyFinancialInformation_460ce6f9-5000-4b1d-9c45-85d47677209d": {
    "Id": "ar_pros_SelectedQuarterlyFinancialInformation_460ce6f9-5000-4b1d-9c45-85d47677209d",
    "IdConcepto": "ar_pros_SelectedQuarterlyFinancialInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer_fc8ec39f-cef8-433b-aed9-3559b638e0cd": {
    "Id": "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer_fc8ec39f-cef8-433b-aed9-3559b638e0cd",
    "IdConcepto": "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndManagementAnalysisOnOperatingResults_4302bce0-96ea-4503-8d58-75481895143b": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnOperatingResults_4302bce0-96ea-4503-8d58-75481895143b",
    "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnOperatingResults",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OperationResults_310bbfbf-cfe3-48bc-b488-c0a5d7ccf61e": {
    "Id": "ar_pros_OperationResults_310bbfbf-cfe3-48bc-b488-c0a5d7ccf61e",
    "IdConcepto": "ar_pros_OperationResults",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialPositionLiquidityAndCapitalResources_6b436559-f685-481d-b1c3-51709a382835": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResources_6b436559-f685-481d-b1c3-51709a382835",
    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResources",
    "IdContextoPlantilla": "ctx_2014",
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