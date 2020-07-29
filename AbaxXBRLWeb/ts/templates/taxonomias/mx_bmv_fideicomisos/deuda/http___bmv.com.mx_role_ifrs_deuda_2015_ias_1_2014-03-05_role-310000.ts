///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-310000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_310000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_310000
         */
        constructor() {

			this.ListadoDeFormulas = {};

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
  "trimestre_actual": {
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
  "A5bb7a33f-516d-45a2-8d57-ea874aee5c1d": {
    "Id": "A5bb7a33f-516d-45a2-8d57-ea874aee5c1d",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6dab5d29-6d86-4367-84f9-dfbc46730c8d": {
    "Id": "A6dab5d29-6d86-4367-84f9-dfbc46730c8d",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
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


  "Af6f2387f-f301-4e0e-9683-6f93f4e5e931": {
    "Id": "Af6f2387f-f301-4e0e-9683-6f93f4e5e931",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9e96ee10-4843-4e2e-9db3-b04e11cc66ca": {
    "Id": "A9e96ee10-4843-4e2e-9db3-b04e11cc66ca",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
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


  "Ae18712e5-eea6-4886-9f58-2a8948373717": {
    "Id": "Ae18712e5-eea6-4886-9f58-2a8948373717",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad66747cb-986c-4e53-9acd-96bbdf097122": {
    "Id": "Ad66747cb-986c-4e53-9acd-96bbdf097122",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
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
  },
  "ATANT_310_3": {
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



  "A2443fe77-5d59-470f-bc84-b5ab787dde8b": {
    "Id": "A2443fe77-5d59-470f-bc84-b5ab787dde8b",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8128f4bc-bacf-4305-b38e-92f32d70cb08": {
    "Id": "A8128f4bc-bacf-4305-b38e-92f32d70cb08",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
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


  "Ada50e829-49a5-4ea4-89b3-2955045d24b3": {
    "Id": "Ada50e829-49a5-4ea4-89b3-2955045d24b3",
    "IdConcepto": "mx_deuda_EstimatesAndReservesForImpairmentAssets",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A44ca24bf-31b1-4b08-b72c-67533789be46": {
    "Id": "A44ca24bf-31b1-4b08-b72c-67533789be46",
    "IdConcepto": "mx_deuda_EstimatesAndReservesForImpairmentAssets",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_5": {
      "Id": "ATA_310_5",
      "IdConcepto": "mx_deuda_EstimatesAndReservesForImpairmentAssets",
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
      "IdConcepto": "mx_deuda_EstimatesAndReservesForImpairmentAssets",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ab8cec40b-221e-4684-ba5a-22eb53ed9f9a": {
    "Id": "Ab8cec40b-221e-4684-ba5a-22eb53ed9f9a",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3572b048-1d8a-4c8e-9889-102781e22180": {
    "Id": "A3572b048-1d8a-4c8e-9889-102781e22180",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_310_6": {
      "Id": "ATA_310_6",
      "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
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



  "Adeb24af2-e7fe-4382-82df-e7956d92eb4f": {
    "Id": "Adeb24af2-e7fe-4382-82df-e7956d92eb4f",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aec3d9302-571d-4196-bcb5-4372be2cd471": {
    "Id": "Aec3d9302-571d-4196-bcb5-4372be2cd471",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
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



  "Ad881287f-3dc3-44ca-ba87-533eb7548462": {
    "Id": "Ad881287f-3dc3-44ca-ba87-533eb7548462",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4fac8336-26bf-4020-8d91-e5e74b05a2a8": {
    "Id": "A4fac8336-26bf-4020-8d91-e5e74b05a2a8",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
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



  "A303b9472-144b-432c-a6f4-0bbd01f37ce5": {
    "Id": "A303b9472-144b-432c-a6f4-0bbd01f37ce5",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8a30696d-3bbe-4fe9-94a5-bdb17c95383d": {
    "Id": "A8a30696d-3bbe-4fe9-94a5-bdb17c95383d",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
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