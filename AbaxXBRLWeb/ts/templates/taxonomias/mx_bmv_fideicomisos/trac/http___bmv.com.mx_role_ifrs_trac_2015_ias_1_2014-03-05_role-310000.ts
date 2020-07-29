///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-310000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_310000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_310000
         */
        constructor() {

			this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
  "Acumulado_AnoActual": {
    "Id": "Acumulado_AnoActual",
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
  "Acumulado_AnioAnterior": {
    "Id": "Acumulado_AnioAnterior",
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
  },"trimestre_actual": {
      "Id": "trimestre_actual",
      "Periodo": {
          "Tipo": 2,
          "FechaInicio": "#fecha_2015_07_01",
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
  "trimestre_comparativo": {
      "Id": "trimestre_comparativo",
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
  "A6baf0ba2-e2d1-4f3e-b650-0eac670586eb": {
    "Id": "A6baf0ba2-e2d1-4f3e-b650-0eac670586eb",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae0cef417-9b48-418b-b263-0adbaa8172af": {
    "Id": "Ae0cef417-9b48-418b-b263-0adbaa8172af",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_1": {
      "Id": "ATA_310_1",
      "IdConcepto": "ifrs-full_Revenue",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_310_1": {
      "Id": "ATANT_310_1",
      "IdConcepto": "ifrs-full_Revenue",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A0a0e966e-ea16-4f6f-83cc-0e88c451513d": {
    "Id": "A0a0e966e-ea16-4f6f-83cc-0e88c451513d",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abb5291e3-85de-4d6a-b445-97a003ee5ea6": {
    "Id": "Abb5291e3-85de-4d6a-b445-97a003ee5ea6",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_2": {
      "Id": "ATA_310_2",
      "IdConcepto": "ifrs-full_AdministrativeExpense",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_310_2": {
      "Id": "ATANT_310_2",
      "IdConcepto": "ifrs-full_AdministrativeExpense",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A843620eb-04e3-4d90-8097-f9b80744ca75": {
    "Id": "A843620eb-04e3-4d90-8097-f9b80744ca75",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aacb4f727-bece-4ab9-8aa2-96fa55757ad1": {
    "Id": "Aacb4f727-bece-4ab9-8aa2-96fa55757ad1",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_3": {
      "Id": "ATA_310_3",
      "IdConcepto": "ifrs-full_OtherIncome",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_310_3": {
      "Id": "ATANT_310_3",
      "IdConcepto": "ifrs-full_OtherIncome",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A5cd02aa1-d8e9-4e3f-a489-d06c1bf5225f": {
    "Id": "A5cd02aa1-d8e9-4e3f-a489-d06c1bf5225f",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afaf5dc30-2fcc-4a73-957e-867cc51457fe": {
    "Id": "Afaf5dc30-2fcc-4a73-957e-867cc51457fe",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_4": {
      "Id": "ATA_310_4",
      "IdConcepto": "ifrs-full_OtherExpenseByFunction",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_310_4": {
      "Id": "ATANT_310_4",
      "IdConcepto": "ifrs-full_OtherExpenseByFunction",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },




  "A616f649b-bdac-4ce1-a507-d9885eef2381": {
    "Id": "A616f649b-bdac-4ce1-a507-d9885eef2381",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6e0c9500-8ea9-489e-a57b-d341d02edd6d": {
    "Id": "A6e0c9500-8ea9-489e-a57b-d341d02edd6d",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_5": {
      "Id": "ATA_310_5",
      "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_310_5": {
      "Id": "ATANT_310_5",
      "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A48f14dd7-7ed1-44aa-8c84-775972d272ed": {
    "Id": "A48f14dd7-7ed1-44aa-8c84-775972d272ed",
    "IdConcepto": "mx_trac_DistributionsPaid",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa48ac4be-ff76-4fb4-b61b-750a3abf2a0f": {
    "Id": "Aa48ac4be-ff76-4fb4-b61b-750a3abf2a0f",
    "IdConcepto": "mx_trac_DistributionsPaid",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_6": {
      "Id": "ATA_310_6",
      "IdConcepto": "mx_trac_DistributionsPaid",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_310_6": {
      "Id": "ATANT_310_6",
      "IdConcepto": "mx_trac_DistributionsPaid",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ad93ce59a-4904-49df-aac5-4dab0df0f626": {
    "Id": "Ad93ce59a-4904-49df-aac5-4dab0df0f626",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A19603678-4a10-4469-9364-edaa78f7c6ad": {
    "Id": "A19603678-4a10-4469-9364-edaa78f7c6ad",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_7": {
      "Id": "ATA_310_7",
      "IdConcepto": "ifrs-full_FinanceIncome",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_310_7": {
      "Id": "ATANT_310_7",
      "IdConcepto": "ifrs-full_FinanceIncome",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },




  "Ab926cd99-f8bf-4845-93f6-5646f4eddfee": {
    "Id": "Ab926cd99-f8bf-4845-93f6-5646f4eddfee",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aafff47fe-5f36-46e8-8db3-62949668a4a0": {
    "Id": "Aafff47fe-5f36-46e8-8db3-62949668a4a0",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_8": {
      "Id": "ATA_310_8",
      "IdConcepto": "ifrs-full_FinanceCosts",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_310_8": {
      "Id": "ATANT_310_8",
      "IdConcepto": "ifrs-full_FinanceCosts",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },




  "A1e841afa-36ad-42e6-bb95-c2696a15c94c": {
    "Id": "A1e841afa-36ad-42e6-bb95-c2696a15c94c",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aec784537-7bdd-49a8-830c-d47550c3c745": {
    "Id": "Aec784537-7bdd-49a8-830c-d47550c3c745",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_9": {
      "Id": "ATA_310_9",
      "IdConcepto": "ifrs-full_ProfitLoss",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },"ATANT_310_9": {
      "Id": "ATANT_310_9",
      "IdConcepto": "ifrs-full_ProfitLoss",
      "IdContextoPlantilla": "trimestre_comparativo",
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