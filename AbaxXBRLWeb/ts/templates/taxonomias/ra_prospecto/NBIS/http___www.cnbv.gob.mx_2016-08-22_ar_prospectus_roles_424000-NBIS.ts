///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/424000-NBIS
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_NBIS implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_NBIS
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_Informacion_Financiera_ar_pros_SelectedFinancialInformationDisclosure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_SelectedFinancialInformationDisclosure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedFinancialInformationDisclosure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_ar_pros_SelectedQuarterlyFinancialInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_SelectedQuarterlyFinancialInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedQuarterlyFinancialInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_ar_pros_CommentsAndManagementAnalysisOnOperatingResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_CommentsAndManagementAnalysisOnOperatingResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CommentsAndManagementAnalysisOnOperatingResults',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_ar_pros_OperationResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_OperationResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OperationResults',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_ar_pros_FinancialPositionLiquidityAndCapitalResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_FinancialPositionLiquidityAndCapitalResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FinancialPositionLiquidityAndCapitalResources',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
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
                "pesos": {
                    "Id": "pesos",
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
  "ar_pros_ReferenceIncorporationFinancialInformation_06008c72-04de-4b91-b0bf-017a35da40db": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformation_06008c72-04de-4b91-b0bf-017a35da40db",
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
  "ifrs-full_Revenue_43779bb5-beed-47e2-b811-f0dfe25138a1": {
    "Id": "ifrs-full_Revenue_43779bb5-beed-47e2-b811-f0dfe25138a1",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Revenue_e66fc7fd-58d5-489f-91c3-8c3065838652": {
    "Id": "ifrs-full_Revenue_e66fc7fd-58d5-489f-91c3-8c3065838652",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Revenue_51b0b46c-8df5-45a1-8327-fe1327f8b3bb": {
    "Id": "ifrs-full_Revenue_51b0b46c-8df5-45a1-8327-fe1327f8b3bb",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_48bb05aa-525b-475d-bcd0-e9411ea059f1": {
    "Id": "ifrs-full_GrossProfit_48bb05aa-525b-475d-bcd0-e9411ea059f1",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_03fbc50b-9f7b-42e5-b208-0e308e9a17f6": {
    "Id": "ifrs-full_GrossProfit_03fbc50b-9f7b-42e5-b208-0e308e9a17f6",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_9d04ee81-f1e7-469d-95bc-3bc358da1e78": {
    "Id": "ifrs-full_GrossProfit_9d04ee81-f1e7-469d-95bc-3bc358da1e78",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_66007861-0dfd-4792-9fa5-e3e66110c2d6": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_66007861-0dfd-4792-9fa5-e3e66110c2d6",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_c25ac77b-dd08-4896-b748-f82c67056bb1": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_c25ac77b-dd08-4896-b748-f82c67056bb1",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_c753b122-22f0-427d-87ca-9894fc1615da": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_c753b122-22f0-427d-87ca-9894fc1615da",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_cc44e8f4-4733-4c44-829a-5e8416a3b466": {
    "Id": "ifrs-full_ProfitLoss_cc44e8f4-4733-4c44-829a-5e8416a3b466",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_59e933e7-6b98-4fab-b179-f5577c695c17": {
    "Id": "ifrs-full_ProfitLoss_59e933e7-6b98-4fab-b179-f5577c695c17",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_8575afe9-f1fe-48e3-a75c-350159a5bb13": {
    "Id": "ifrs-full_ProfitLoss_8575afe9-f1fe-48e3-a75c-350159a5bb13",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_3a62135f-21ee-40da-9d21-b1320bbc2868": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_3a62135f-21ee-40da-9d21-b1320bbc2868",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_de0e3b66-a759-4246-8787-778c0a222b78": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_de0e3b66-a759-4246-8787-778c0a222b78",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_bcb6f6cd-3aa4-4713-b8a7-78e9e1428dd0": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_bcb6f6cd-3aa4-4713-b8a7-78e9e1428dd0",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_16dcd83c-888c-493d-8a63-961ad516c859": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_16dcd83c-888c-493d-8a63-961ad516c859",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_2b9a4e6d-1505-4d97-b796-d67bde43a12c": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_2b9a4e6d-1505-4d97-b796-d67bde43a12c",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_b840ccdb-2f23-4134-a112-9e2b4090bd91": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_b840ccdb-2f23-4134-a112-9e2b4090bd91",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_6f073979-6bdb-4a53-b22c-923b15a8e4c5": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_6f073979-6bdb-4a53-b22c-923b15a8e4c5",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_78e88b22-74ec-4b74-b96f-36b6922ac634": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_78e88b22-74ec-4b74-b96f-36b6922ac634",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_cc253199-bb21-4086-b49a-0e7a24e5ebd8": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_cc253199-bb21-4086-b49a-0e7a24e5ebd8",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_7b1d2893-7aff-4447-86ce-c72a060b8871": {
    "Id": "ifrs-full_Assets_7b1d2893-7aff-4447-86ce-c72a060b8871",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_c4c2a248-44b4-496b-b676-b65c0148c2f7": {
    "Id": "ifrs-full_Assets_c4c2a248-44b4-496b-b676-b65c0148c2f7",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_8ee24055-a61d-41b7-87eb-f4a651e7f967": {
    "Id": "ifrs-full_Assets_8ee24055-a61d-41b7-87eb-f4a651e7f967",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_533466c1-a7e7-4e5d-839a-04444e357093": {
    "Id": "ifrs-full_NoncurrentLiabilities_533466c1-a7e7-4e5d-839a-04444e357093",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_91361786-4343-435f-b1dc-18653c9f1bfd": {
    "Id": "ifrs-full_NoncurrentLiabilities_91361786-4343-435f-b1dc-18653c9f1bfd",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_8567ff72-9394-48e0-9952-ec145d5559e3": {
    "Id": "ifrs-full_NoncurrentLiabilities_8567ff72-9394-48e0-9952-ec145d5559e3",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnover_b4d24b52-8caf-4a1f-a3ce-cec4737cca24": {
    "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnover_b4d24b52-8caf-4a1f-a3ce-cec4737cca24",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnover",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnover_eeba0cbd-359a-42b1-9724-9b4ddc84c31c": {
    "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnover_eeba0cbd-359a-42b1-9724-9b4ddc84c31c",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnover",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnover_fc74c122-64fd-47b5-89b2-dff740fbb811": {
    "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnover_fc74c122-64fd-47b5-89b2-dff740fbb811",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnover",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnover_e9cf5638-3b97-42d0-a102-b28385bd0142": {
    "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnover_e9cf5638-3b97-42d0-a102-b28385bd0142",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnover",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnover_4cc3f7b7-bdcf-4a57-9ce1-1987e98a3e48": {
    "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnover_4cc3f7b7-bdcf-4a57-9ce1-1987e98a3e48",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnover",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnover_f64b84eb-617a-4d44-84a6-6c9956850fe5": {
    "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnover_f64b84eb-617a-4d44-84a6-6c9956850fe5",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnover",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnover_4521c4ae-cd3f-44dc-af15-e7833be8a650": {
    "Id": "ifrs_mx-cor_20141205_InventoryTurnover_4521c4ae-cd3f-44dc-af15-e7833be8a650",
    "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnover",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnover_baa95849-b1a1-4435-9d52-85371d7428e7": {
    "Id": "ifrs_mx-cor_20141205_InventoryTurnover_baa95849-b1a1-4435-9d52-85371d7428e7",
    "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnover",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnover_5dcd7b17-4316-46c5-96c4-b9ce077b662f": {
    "Id": "ifrs_mx-cor_20141205_InventoryTurnover_5dcd7b17-4316-46c5-96c4-b9ce077b662f",
    "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnover",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_253ab20f-9118-4f3d-b7a0-592ff74bbd93": {
    "Id": "ifrs-full_Equity_253ab20f-9118-4f3d-b7a0-592ff74bbd93",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_0295c65f-7115-4939-89f3-07b608d50581": {
    "Id": "ifrs-full_Equity_0295c65f-7115-4939-89f3-07b608d50581",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_15420c1f-54e2-4308-a9ed-70c63a9db31f": {
    "Id": "ifrs-full_Equity_15420c1f-54e2-4308-a9ed-70c63a9db31f",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_c241f269-aa7c-4aa3-bc84-bcc891e21510": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_c241f269-aa7c-4aa3-bc84-bcc891e21510",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_4f50141f-d2b3-44a0-9e62-6b717cb8afa6": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_4f50141f-d2b3-44a0-9e62-6b717cb8afa6",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_2de1ad4d-e919-47cd-9e07-373c0f690467": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_2de1ad4d-e919-47cd-9e07-373c0f690467",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_SelectedFinancialInformationDisclosure_9ff43e40-656e-474a-b7c0-b1e98b492bab": {
    "Id": "ar_pros_SelectedFinancialInformationDisclosure_9ff43e40-656e-474a-b7c0-b1e98b492bab",
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
  "ar_pros_SelectedQuarterlyFinancialInformation_c4246b93-1aa4-4539-b69c-4eefa0fb491b": {
    "Id": "ar_pros_SelectedQuarterlyFinancialInformation_c4246b93-1aa4-4539-b69c-4eefa0fb491b",
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
  "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer_29cb7c9d-b95b-4cc9-97fb-e8aa8cec604f": {
    "Id": "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer_29cb7c9d-b95b-4cc9-97fb-e8aa8cec604f",
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
  "ar_pros_CommentsAndManagementAnalysisOnOperatingResults_714e5285-dfb8-44d5-91db-e4f20d69004c": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnOperatingResults_714e5285-dfb8-44d5-91db-e4f20d69004c",
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
  "ar_pros_OperationResults_b0ec7c9e-f7b3-4782-bea3-9e9cf5dda7f1": {
    "Id": "ar_pros_OperationResults_b0ec7c9e-f7b3-4782-bea3-9e9cf5dda7f1",
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
  "ar_pros_FinancialPositionLiquidityAndCapitalResources_884ca386-d414-40b4-9575-9bf269b33d9f": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResources_884ca386-d414-40b4-9575-9bf269b33d9f",
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