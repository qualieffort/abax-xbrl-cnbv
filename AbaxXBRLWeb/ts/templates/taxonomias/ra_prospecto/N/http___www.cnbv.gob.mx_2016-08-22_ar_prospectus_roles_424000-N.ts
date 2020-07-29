///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/424000-N
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_N implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_N
         */
        constructor() {

            this.ListadoDeFormulas = {


                'Obligatorio_Informacion_Financiera_ar_pros_FinancialInformationByBusinessLine': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_FinancialInformationByBusinessLine',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FinancialInformationByBusinessLine',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_ar_pros_RelevantCreditReport': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_RelevantCreditReport',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RelevantCreditReport',
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
                ),
                'Obligatorio_Informacion_Financiera_ar_pros_InternalControl': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_InternalControl',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InternalControl',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_ar_pros_EstimatesCriticalAccountingProvisionsOrReserves': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_ar_pros_EstimatesCriticalAccountingProvisionsOrReserves',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EstimatesCriticalAccountingProvisionsOrReserves',
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
  }
};

            this.UnidadesPlantillaPorId = {
              "moneda_reporte": {
                    "Id": "moneda_reporte",
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
  "ar_pros_ReferenceIncorporationFinancialInformation_6ec4eae7-ef55-48ed-a372-3d2c6a3bc478": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformation_6ec4eae7-ef55-48ed-a372-3d2c6a3bc478",
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
  "ifrs-full_Revenue_d8f996c6-ad51-4e45-81ae-aa1c367c1830": {
    "Id": "ifrs-full_Revenue_d8f996c6-ad51-4e45-81ae-aa1c367c1830",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Revenue_495f2d3a-7aac-45e6-8bf8-8c811a36dccc": {
    "Id": "ifrs-full_Revenue_495f2d3a-7aac-45e6-8bf8-8c811a36dccc",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Revenue_9fb2f526-6038-4855-83fe-91189aaf5a26": {
    "Id": "ifrs-full_Revenue_9fb2f526-6038-4855-83fe-91189aaf5a26",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_023dc1aa-f720-4116-932f-ac0a789b4534": {
    "Id": "ifrs-full_GrossProfit_023dc1aa-f720-4116-932f-ac0a789b4534",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_b36411b6-f83e-4002-866f-ecd96e722d9d": {
    "Id": "ifrs-full_GrossProfit_b36411b6-f83e-4002-866f-ecd96e722d9d",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_GrossProfit_c106b4af-010f-45c4-8b8d-4a46b6277c43": {
    "Id": "ifrs-full_GrossProfit_c106b4af-010f-45c4-8b8d-4a46b6277c43",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_33fa6185-18b5-4dd6-8a3e-bbb8cea2bae4": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_33fa6185-18b5-4dd6-8a3e-bbb8cea2bae4",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_c842a287-b9b3-4d11-82fc-d924d578532c": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_c842a287-b9b3-4d11-82fc-d924d578532c",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLossFromOperatingActivities_fb42f249-ce7c-4860-bd2b-74ca78c42fb9": {
    "Id": "ifrs-full_ProfitLossFromOperatingActivities_fb42f249-ce7c-4860-bd2b-74ca78c42fb9",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_bd4e0b45-ebea-4398-b89a-974132cffc85": {
    "Id": "ifrs-full_ProfitLoss_bd4e0b45-ebea-4398-b89a-974132cffc85",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_e3b96cda-b63f-4b75-a289-57ed609a4c83": {
    "Id": "ifrs-full_ProfitLoss_e3b96cda-b63f-4b75-a289-57ed609a4c83",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_ProfitLoss_565ab264-5591-4dee-a9aa-26c28f96946e": {
    "Id": "ifrs-full_ProfitLoss_565ab264-5591-4dee-a9aa-26c28f96946e",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_9ee71550-42d9-4c29-9361-fc8df6107fa6": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_9ee71550-42d9-4c29-9361-fc8df6107fa6",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_e00ef895-add5-4af3-a3f2-b37f7e69f810": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_e00ef895-add5-4af3-a3f2-b37f7e69f810",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_BasicEarningsLossPerShare_c850f503-20ee-4757-a251-f786bb750a99": {
    "Id": "ifrs-full_BasicEarningsLossPerShare_c850f503-20ee-4757-a251-f786bb750a99",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_37c1e03c-1b61-4100-8d2b-f4250c2442d0": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_37c1e03c-1b61-4100-8d2b-f4250c2442d0",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_2b64723f-97cf-4366-bb50-ced2ef08918b": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_2b64723f-97cf-4366-bb50-ced2ef08918b",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_13813860-e3a8-4fc6-b362-442b65e0f827": {
    "Id": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment_13813860-e3a8-4fc6-b362-442b65e0f827",
    "IdConcepto": "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_035445e4-02fb-45b8-9c7c-721b41cdcca7": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_035445e4-02fb-45b8-9c7c-721b41cdcca7",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_a92bee83-60f4-4721-afa9-b4bfd369186c": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_a92bee83-60f4-4721-afa9-b4bfd369186c",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_4757dcda-f862-4ebc-b53a-c012cad7325d": {
    "Id": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa_4757dcda-f862-4ebc-b53a-c012cad7325d",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_9913c27a-e6f5-4c5a-97d4-f0e173d44884": {
    "Id": "ifrs-full_Assets_9913c27a-e6f5-4c5a-97d4-f0e173d44884",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_1dfc4a7e-2896-41b6-9965-c967448a63e8": {
    "Id": "ifrs-full_Assets_1dfc4a7e-2896-41b6-9965-c967448a63e8",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Assets_b4a4defd-0874-47b7-aeb6-17a8780cb667": {
    "Id": "ifrs-full_Assets_b4a4defd-0874-47b7-aeb6-17a8780cb667",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_567bc58e-8b81-4996-a89d-a07eeb6767c1": {
    "Id": "ifrs-full_NoncurrentLiabilities_567bc58e-8b81-4996-a89d-a07eeb6767c1",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_bbdf1529-832a-4a1e-808e-b41a9dfda5f5": {
    "Id": "ifrs-full_NoncurrentLiabilities_bbdf1529-832a-4a1e-808e-b41a9dfda5f5",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_NoncurrentLiabilities_ba84424d-e70d-468b-809c-8262256cfc7f": {
    "Id": "ifrs-full_NoncurrentLiabilities_ba84424d-e70d-468b-809c-8262256cfc7f",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnover_c0230160-981b-47a3-a9c0-c2bf8792df68": {
    "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnover_c0230160-981b-47a3-a9c0-c2bf8792df68",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnover",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnover_dcf448c2-9d6d-4eca-a9fa-5c2d743215ea": {
    "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnover_dcf448c2-9d6d-4eca-a9fa-5c2d743215ea",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnover",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsReceivableTurnover_fca19d13-73d6-4c27-be8d-5e58546bea19": {
    "Id": "ifrs_mx-cor_20141205_AccountsReceivableTurnover_fca19d13-73d6-4c27-be8d-5e58546bea19",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsReceivableTurnover",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnover_37946ca0-90b6-4aee-b17d-3ef382ea5642": {
    "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnover_37946ca0-90b6-4aee-b17d-3ef382ea5642",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnover",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnover_41a704a0-337e-4b47-9bee-94ec362aae6c": {
    "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnover_41a704a0-337e-4b47-9bee-94ec362aae6c",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnover",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_AccountsPayableTurnover_ad216682-1133-4f6b-81da-488cb1be2ece": {
    "Id": "ifrs_mx-cor_20141205_AccountsPayableTurnover_ad216682-1133-4f6b-81da-488cb1be2ece",
    "IdConcepto": "ifrs_mx-cor_20141205_AccountsPayableTurnover",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnover_6e739a9e-5bbf-4c1e-b0c7-d9c5316fd6f6": {
    "Id": "ifrs_mx-cor_20141205_InventoryTurnover_6e739a9e-5bbf-4c1e-b0c7-d9c5316fd6f6",
    "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnover",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnover_192302aa-7394-434c-a615-ea12f732889d": {
    "Id": "ifrs_mx-cor_20141205_InventoryTurnover_192302aa-7394-434c-a615-ea12f732889d",
    "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnover",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_InventoryTurnover_386334e4-583a-40e1-9bbc-48efe3be7596": {
    "Id": "ifrs_mx-cor_20141205_InventoryTurnover_386334e4-583a-40e1-9bbc-48efe3be7596",
    "IdConcepto": "ifrs_mx-cor_20141205_InventoryTurnover",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_461e8055-64a9-4804-8a7f-8ca9761c35d9": {
    "Id": "ifrs-full_Equity_461e8055-64a9-4804-8a7f-8ca9761c35d9",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_4ca357d3-88dd-4630-8d72-6b31850abbf6": {
    "Id": "ifrs-full_Equity_4ca357d3-88dd-4630-8d72-6b31850abbf6",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs-full_Equity_2f39044d-04af-45a5-9371-2b0f408e16b1": {
    "Id": "ifrs-full_Equity_2f39044d-04af-45a5-9371-2b0f408e16b1",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "ctx_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_dbdf077f-561c-45c4-bc93-50c22dcb5244": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_dbdf077f-561c-45c4-bc93-50c22dcb5244",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2012",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_38b420e6-61c5-433a-8042-68a0eefa2294": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_38b420e6-61c5-433a-8042-68a0eefa2294",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2013",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_4766e51b-dfcb-4232-af2c-4122009effbb": {
    "Id": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare_4766e51b-dfcb-4232-af2c-4122009effbb",
    "IdConcepto": "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare",
    "IdContextoPlantilla": "ctx_duration_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda_reporte",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_SelectedFinancialInformationDisclosure_cb9bdc85-d2c9-43e4-93d9-fdbf72f8732c": {
    "Id": "ar_pros_SelectedFinancialInformationDisclosure_cb9bdc85-d2c9-43e4-93d9-fdbf72f8732c",
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
  "ar_pros_SelectedQuarterlyFinancialInformation_0ffeccc4-b00e-40ee-9500-d643376df27b": {
    "Id": "ar_pros_SelectedQuarterlyFinancialInformation_0ffeccc4-b00e-40ee-9500-d643376df27b",
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
  "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer_20d35d63-be63-4da8-b903-8401011d2a33": {
    "Id": "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer_20d35d63-be63-4da8-b903-8401011d2a33",
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
  "ar_pros_FinancialInformationByBusinessLine_a4179f01-2620-42be-9842-83bfaeb85b54": {
    "Id": "ar_pros_FinancialInformationByBusinessLine_a4179f01-2620-42be-9842-83bfaeb85b54",
    "IdConcepto": "ar_pros_FinancialInformationByBusinessLine",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RelevantCreditReport_c130080b-ac0f-434f-882b-f5db8f4c0216": {
    "Id": "ar_pros_RelevantCreditReport_c130080b-ac0f-434f-882b-f5db8f4c0216",
    "IdConcepto": "ar_pros_RelevantCreditReport",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndManagementAnalysisOnOperatingResults_9ab974d2-1480-441e-9a84-f450283b5037": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnOperatingResults_9ab974d2-1480-441e-9a84-f450283b5037",
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
  "ar_pros_OperationResults_ede6e0e1-9823-4d7e-b603-b9eb77e461d4": {
    "Id": "ar_pros_OperationResults_ede6e0e1-9823-4d7e-b603-b9eb77e461d4",
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
  "ar_pros_FinancialPositionLiquidityAndCapitalResources_4515144a-74f6-4dc9-8457-1610ce4c711e": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResources_4515144a-74f6-4dc9-8457-1610ce4c711e",
    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResources",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InternalControl_627830bf-4cc1-49fd-873a-31205b4dc368": {
    "Id": "ar_pros_InternalControl_627830bf-4cc1-49fd-873a-31205b4dc368",
    "IdConcepto": "ar_pros_InternalControl",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves_5d20b0c5-b8b4-4c44-9903-03306d8055c5": {
    "Id": "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves_5d20b0c5-b8b4-4c44-9903-03306d8055c5",
    "IdConcepto": "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves",
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