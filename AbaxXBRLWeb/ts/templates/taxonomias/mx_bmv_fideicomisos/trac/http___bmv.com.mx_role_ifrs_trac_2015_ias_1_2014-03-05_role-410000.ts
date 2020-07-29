///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-410000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_410000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_410000
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
  }, "trimestre_actual": {
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



  "A3576a056-c721-4aea-9b64-149d8b4cce4f": {
    "Id": "A3576a056-c721-4aea-9b64-149d8b4cce4f",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3f8175fc-e2ac-4090-8929-245b87c389a3": {
    "Id": "A3f8175fc-e2ac-4090-8929-245b87c389a3",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_2": {
      "Id": "ATA_410_2",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
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
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },






  "Af800c426-bab8-446a-b36f-b2c7b921c218": {
    "Id": "Af800c426-bab8-446a-b36f-b2c7b921c218",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ada780c5b-dcd6-4469-ad5e-ff5f9dd5c813": {
    "Id": "Ada780c5b-dcd6-4469-ad5e-ff5f9dd5c813",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
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



  "Adc99b176-a076-4b6e-8c09-aabd39dd2deb": {
    "Id": "Adc99b176-a076-4b6e-8c09-aabd39dd2deb",
    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2c725b20-e735-447f-bad1-7aed4d33fa22": {
    "Id": "A2c725b20-e735-447f-bad1-7aed4d33fa22",
    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_4": {
      "Id": "ATA_410_4",
      "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
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
      "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A989726f7-9ef0-4af8-8f51-6c6bfab305c0": {
    "Id": "A989726f7-9ef0-4af8-8f51-6c6bfab305c0",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab5961fa2-2dcf-42d8-8f6b-c7091bc194d5": {
    "Id": "Ab5961fa2-2dcf-42d8-8f6b-c7091bc194d5",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_5": {
      "Id": "ATA_410_5",
      "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
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
      "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Aa3fd8411-7030-46cf-97c2-43d0224a1dee": {
    "Id": "Aa3fd8411-7030-46cf-97c2-43d0224a1dee",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aad90eace-3600-40d1-aa94-597ba73c43b3": {
    "Id": "Aad90eace-3600-40d1-aa94-597ba73c43b3",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_6": {
      "Id": "ATA_410_6",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
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
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Af3780399-fc52-42a7-8d3a-ca354bda740c": {
    "Id": "Af3780399-fc52-42a7-8d3a-ca354bda740c",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af52a4e35-8cd2-4b56-ab19-c1a2bbef0877": {
    "Id": "Af52a4e35-8cd2-4b56-ab19-c1a2bbef0877",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_7": {
      "Id": "ATA_410_7",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
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



  "A421e31d1-1804-424e-8346-430a474d3df8": {
    "Id": "A421e31d1-1804-424e-8346-430a474d3df8",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acf163872-31c6-4cf7-88a2-0570a509fbb9": {
    "Id": "Acf163872-31c6-4cf7-88a2-0570a509fbb9",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_8": {
      "Id": "ATA_410_8",
      "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
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



  "A3d159ac1-2c5a-4fe4-bcfd-640a918aec86": {
    "Id": "A3d159ac1-2c5a-4fe4-bcfd-640a918aec86",
    "IdConcepto": "ifrs-full_ComprehensiveIncome",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6f3084ac-4155-4349-80c2-064e274b5e63": {
    "Id": "A6f3084ac-4155-4349-80c2-064e274b5e63",
    "IdConcepto": "ifrs-full_ComprehensiveIncome",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_410_9": {
      "Id": "ATA_410_9",
      "IdConcepto": "ifrs-full_ComprehensiveIncome",
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