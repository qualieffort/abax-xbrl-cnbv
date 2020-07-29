///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-410000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_410000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_410000
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
  }, "ATA_410_1": {
      "Id": "ATA_410_1",
      "IdConcepto": "ifrs-full_ProfitLoss",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_1": {
      "Id": "ATANT_410_1",
      "IdConcepto": "ifrs-full_ProfitLoss",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A43b0e3af-9a3a-4ef3-bcc0-79f60d233b3e": {
    "Id": "A43b0e3af-9a3a-4ef3-bcc0-79f60d233b3e",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2af45473-3ea5-4cb6-8184-05dcfa6a3133": {
    "Id": "A2af45473-3ea5-4cb6-8184-05dcfa6a3133",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_2": {
      "Id": "ATA_410_2",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_2": {
      "Id": "ATANT_410_2",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A60e8d6b2-17c6-4db1-9cec-b303f62eac19": {
    "Id": "A60e8d6b2-17c6-4db1-9cec-b303f62eac19",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3f845ae3-da52-4b7a-aacb-2a1074d35ebc": {
    "Id": "A3f845ae3-da52-4b7a-aacb-2a1074d35ebc",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_3": {
      "Id": "ATA_410_3",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_3": {
      "Id": "ATANT_410_3",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A82a273fc-1271-482a-8781-09731167c1d0": {
    "Id": "A82a273fc-1271-482a-8781-09731167c1d0",
    "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abf96cd3d-0490-4100-97d0-7c8524f79913": {
    "Id": "Abf96cd3d-0490-4100-97d0-7c8524f79913",
    "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_4": {
      "Id": "ATA_410_4",
      "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_4": {
      "Id": "ATANT_410_4",
      "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A61270c2d-d667-4b0d-9e81-f1b6af793a9b": {
    "Id": "A61270c2d-d667-4b0d-9e81-f1b6af793a9b",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A618b7861-9a18-4402-ba7f-7b1399d5fa7d": {
    "Id": "A618b7861-9a18-4402-ba7f-7b1399d5fa7d",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_5": {
      "Id": "ATA_410_5",
      "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_5": {
      "Id": "ATANT_410_5",
      "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A7a8f708b-b012-4f59-868c-5a11b32c91e9": {
    "Id": "A7a8f708b-b012-4f59-868c-5a11b32c91e9",
    "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab72159ef-62f0-4373-9ae1-acdd2445ec65": {
    "Id": "Ab72159ef-62f0-4373-9ae1-acdd2445ec65",
    "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_6": {
      "Id": "ATA_410_6",
      "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_6": {
      "Id": "ATANT_410_6",
      "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Acd2b0c77-42bb-460d-ba33-a77057fea5e0": {
    "Id": "Acd2b0c77-42bb-460d-ba33-a77057fea5e0",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5fb6e6d2-9375-468b-ad75-6c1a5f2da6a7": {
    "Id": "A5fb6e6d2-9375-468b-ad75-6c1a5f2da6a7",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_7": {
      "Id": "ATA_410_7",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_7": {
      "Id": "ATANT_410_7",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Aa8133ca8-b503-45ab-b783-6561e0417b70": {
    "Id": "Aa8133ca8-b503-45ab-b783-6561e0417b70",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A029ddd5b-bd35-40e0-b43f-e8883dc0ca1b": {
    "Id": "A029ddd5b-bd35-40e0-b43f-e8883dc0ca1b",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_8": {
      "Id": "ATA_410_8",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_8": {
      "Id": "ATANT_410_8",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A35857447-28c3-4ea6-a6eb-b64148ce3563": {
    "Id": "A35857447-28c3-4ea6-a6eb-b64148ce3563",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3034979f-5eef-40f9-bc01-1f08ed311a7c": {
    "Id": "A3034979f-5eef-40f9-bc01-1f08ed311a7c",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_9": {
      "Id": "ATA_410_9",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_9": {
      "Id": "ATANT_410_9",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A25ec2e57-4523-48be-88c0-c31c10240015": {
    "Id": "A25ec2e57-4523-48be-88c0-c31c10240015",
    "IdConcepto": "ifrs-full_ComprehensiveIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1c750c56-bedd-41b1-86ba-79f932eb6c76": {
    "Id": "A1c750c56-bedd-41b1-86ba-79f932eb6c76",
    "IdConcepto": "ifrs-full_ComprehensiveIncome",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_10": {
      "Id": "ATA_410_10",
      "IdConcepto": "ifrs-full_ComprehensiveIncome",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_410_10": {
      "Id": "ATANT_410_10",
      "IdConcepto": "ifrs-full_ComprehensiveIncome",
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