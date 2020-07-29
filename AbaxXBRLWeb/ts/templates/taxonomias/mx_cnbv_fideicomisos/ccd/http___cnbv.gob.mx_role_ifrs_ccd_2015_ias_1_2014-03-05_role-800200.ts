///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ccd/2015/ias_1_2014-03-05_role-800200
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_800200 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_800200
         */
        constructor() {

			this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
  "trimestre_acumulado_actual": {
    "Id": "trimestre_acumulado_actual",
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
  "trimestre_acumulado_comparativo": {
    "Id": "trimestre_acumulado_comparativo",
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
  "A72f08445-acb1-4135-b08b-5d5fbcedc320": {
    "Id": "A72f08445-acb1-4135-b08b-5d5fbcedc320",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A66eaaa78-360c-4e21-b88c-1501c0c41cd9": {
    "Id": "A66eaaa78-360c-4e21-b88c-1501c0c41cd9",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "AT_800200_1": {
      "Id": "AT_800200_1",
      "IdConcepto": "ifrs-full_RevenueFromDividends",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_1": {
      "Id": "ATANT_800200_1",
      "IdConcepto": "ifrs-full_RevenueFromDividends",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },


  "Ad3391b47-6f13-41c0-a6ee-a6ddb404fade": {
    "Id": "Ad3391b47-6f13-41c0-a6ee-a6ddb404fade",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac6969883-c094-48fe-877f-d2fb8f40a9dd": {
    "Id": "Ac6969883-c094-48fe-877f-d2fb8f40a9dd",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "AT_800200_2": {
      "Id": "AT_800200_2",
      "IdConcepto": "ifrs-full_RevenueFromInterest",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_2": {
      "Id": "ATANT_800200_2",
      "IdConcepto": "ifrs-full_RevenueFromInterest",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },


  "Afa1016f7-38fc-4380-b1c5-a1ef6153b7c6": {
    "Id": "Afa1016f7-38fc-4380-b1c5-a1ef6153b7c6",
    "IdConcepto": "mx_ccd_ForeignExchangeIncomeFromInvestments",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A28ec05bc-cc83-4f68-b4dd-d84f4caa5282": {
    "Id": "A28ec05bc-cc83-4f68-b4dd-d84f4caa5282",
    "IdConcepto": "mx_ccd_ForeignExchangeIncomeFromInvestments",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "AT_800200_3": {
      "Id": "AT_800200_3",
      "IdConcepto": "mx_ccd_ForeignExchangeIncomeFromInvestments",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },
  "ATANT_800200_3": {
      "Id": "ATANT_800200_3",
      "IdConcepto": "mx_ccd_ForeignExchangeIncomeFromInvestments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },





  "Aabbb74c2-ee76-41bd-8999-fd50c95293f1": {
    "Id": "Aabbb74c2-ee76-41bd-8999-fd50c95293f1",
    "IdConcepto": "mx_ccd_IncomeFromChangeInFairValueOfSharesCertificatesInvestmentProperty",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A01a63a26-247e-43dd-b6ba-20fbcf5c8440": {
    "Id": "A01a63a26-247e-43dd-b6ba-20fbcf5c8440",
    "IdConcepto": "mx_ccd_IncomeFromChangeInFairValueOfSharesCertificatesInvestmentProperty",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "AT_800200_4": {
      "Id": "AT_800200_4",
      "IdConcepto": "mx_ccd_IncomeFromChangeInFairValueOfSharesCertificatesInvestmentProperty",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },
  "ATANT_800200_4": {
      "Id": "ATANT_800200_4",
      "IdConcepto": "mx_ccd_IncomeFromChangeInFairValueOfSharesCertificatesInvestmentProperty",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A573debda-5540-4f6c-809b-056b0bd7c0eb": {
    "Id": "A573debda-5540-4f6c-809b-056b0bd7c0eb",
    "IdConcepto": "mx_ccd_GainOnValuationOfFinancialInstruments",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A96f66ec3-8104-47cd-9096-4fd9ee909aa5": {
    "Id": "A96f66ec3-8104-47cd-9096-4fd9ee909aa5",
    "IdConcepto": "mx_ccd_GainOnValuationOfFinancialInstruments",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "AT_800200_5": {
      "Id": "AT_800200_5",
      "IdConcepto": "mx_ccd_GainOnValuationOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },
  "ATANT_800200_5": {
      "Id": "ATANT_800200_5",
      "IdConcepto": "mx_ccd_GainOnValuationOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A54692fee-2382-4156-991d-4a6e5aba4db2": {
    "Id": "A54692fee-2382-4156-991d-4a6e5aba4db2",
    "IdConcepto": "mx_ccd_IncomeFromRevaluationOfInvestmentCompanyPromoted",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae8dc0da7-fed9-4019-b411-dda84a9f337b": {
    "Id": "Ae8dc0da7-fed9-4019-b411-dda84a9f337b",
    "IdConcepto": "mx_ccd_IncomeFromRevaluationOfInvestmentCompanyPromoted",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_6": {
      "Id": "AT_800200_6",
      "IdConcepto": "mx_ccd_IncomeFromRevaluationOfInvestmentCompanyPromoted",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_6": {
      "Id": "ATANT_800200_6",
      "IdConcepto": "mx_ccd_IncomeFromRevaluationOfInvestmentCompanyPromoted",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A08191c64-c408-4059-bf00-6f8e36641373": {
    "Id": "A08191c64-c408-4059-bf00-6f8e36641373",
    "IdConcepto": "mx_ccd_PropertyRentalIncome",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad2ddbef9-c72a-4037-84aa-39a05a723316": {
    "Id": "Ad2ddbef9-c72a-4037-84aa-39a05a723316",
    "IdConcepto": "mx_ccd_PropertyRentalIncome",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_7": {
      "Id": "AT_800200_7",
      "IdConcepto": "mx_ccd_PropertyRentalIncome",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_7": {
      "Id": "ATANT_800200_7",
      "IdConcepto": "mx_ccd_PropertyRentalIncome",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A9c8cb633-7bb4-4280-94fa-087494c20063": {
    "Id": "A9c8cb633-7bb4-4280-94fa-087494c20063",
    "IdConcepto": "mx_ccd_RevenueFromServicesRelatedToPropertyLeasing",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4dd59571-7fee-41ea-8ddc-096d999a9e21": {
    "Id": "A4dd59571-7fee-41ea-8ddc-096d999a9e21",
    "IdConcepto": "mx_ccd_RevenueFromServicesRelatedToPropertyLeasing",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_8": {
      "Id": "AT_800200_8",
      "IdConcepto": "mx_ccd_RevenueFromServicesRelatedToPropertyLeasing",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_8": {
      "Id": "ATANT_800200_8",
      "IdConcepto": "mx_ccd_RevenueFromServicesRelatedToPropertyLeasing",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A035a2859-ed6d-447e-8570-0d838ef30b9e": {
    "Id": "A035a2859-ed6d-447e-8570-0d838ef30b9e",
    "IdConcepto": "mx_ccd_SaleOfProperty",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A41735b2d-5e33-4da8-8528-26e468e27f7e": {
    "Id": "A41735b2d-5e33-4da8-8528-26e468e27f7e",
    "IdConcepto": "mx_ccd_SaleOfProperty",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_9": {
      "Id": "AT_800200_9",
      "IdConcepto": "mx_ccd_SaleOfProperty",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_9": {
      "Id": "ATANT_800200_9",
      "IdConcepto": "mx_ccd_SaleOfProperty",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ad8b0c846-22bf-4852-9372-f6c2fa7e1063": {
    "Id": "Ad8b0c846-22bf-4852-9372-f6c2fa7e1063",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9649f6ae-f093-4094-988d-64def7194fd4": {
    "Id": "A9649f6ae-f093-4094-988d-64def7194fd4",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_10": {
      "Id": "AT_800200_10",
      "IdConcepto": "ifrs-full_OtherRevenue",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_10": {
      "Id": "ATANT_800200_10",
      "IdConcepto": "ifrs-full_OtherRevenue",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A16f9cfc2-c2a1-4ef9-8c9a-6981c53e22eb": {
    "Id": "A16f9cfc2-c2a1-4ef9-8c9a-6981c53e22eb",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac3eee251-c3bd-4223-97ea-ba3138040626": {
    "Id": "Ac3eee251-c3bd-4223-97ea-ba3138040626",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_11": {
      "Id": "AT_800200_11",
      "IdConcepto": "ifrs-full_Revenue",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_11": {
      "Id": "ATANT_800200_11",
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



  "Ab2b5bcc4-bd83-426d-921d-79a2e77c719b": {
    "Id": "Ab2b5bcc4-bd83-426d-921d-79a2e77c719b",
    "IdConcepto": "mx_ccd_ComissionRepresentativeServices",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A52b8a11a-4080-44d0-966f-3c5036080d18": {
    "Id": "A52b8a11a-4080-44d0-966f-3c5036080d18",
    "IdConcepto": "mx_ccd_ComissionRepresentativeServices",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_12": {
      "Id": "AT_800200_12",
      "IdConcepto": "mx_ccd_ComissionRepresentativeServices",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_12": {
      "Id": "ATANT_800200_12",
      "IdConcepto": "mx_ccd_ComissionRepresentativeServices",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A92bba12d-046e-4542-a0c9-f642aaf003d2": {
    "Id": "A92bba12d-046e-4542-a0c9-f642aaf003d2",
    "IdConcepto": "mx_ccd_ManagementFee",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A84bb942c-fa4d-471e-82e6-61401c0811d9": {
    "Id": "A84bb942c-fa4d-471e-82e6-61401c0811d9",
    "IdConcepto": "mx_ccd_ManagementFee",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_13": {
      "Id": "AT_800200_13",
      "IdConcepto": "mx_ccd_ManagementFee",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_13": {
      "Id": "ATANT_800200_13",
      "IdConcepto": "mx_ccd_ManagementFee",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ae6c53fb7-a676-4ace-a473-f85cdd15a3be": {
    "Id": "Ae6c53fb7-a676-4ace-a473-f85cdd15a3be",
    "IdConcepto": "mx_ccd_ProfessionalFees",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A483c7a5c-593f-49f7-87b3-9e06a9d5e1c8": {
    "Id": "A483c7a5c-593f-49f7-87b3-9e06a9d5e1c8",
    "IdConcepto": "mx_ccd_ProfessionalFees",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_14": {
      "Id": "AT_800200_14",
      "IdConcepto": "mx_ccd_ProfessionalFees",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_14": {
      "Id": "ATANT_800200_14",
      "IdConcepto": "mx_ccd_ProfessionalFees",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A086d913d-05d9-431f-aeec-fdca3e462588": {
    "Id": "A086d913d-05d9-431f-aeec-fdca3e462588",
    "IdConcepto": "mx_ccd_Taxes",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3bca1206-c9fc-4975-a612-6d2dec2a949b": {
    "Id": "A3bca1206-c9fc-4975-a612-6d2dec2a949b",
    "IdConcepto": "mx_ccd_Taxes",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_15": {
      "Id": "AT_800200_15",
      "IdConcepto": "mx_ccd_Taxes",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_15": {
      "Id": "ATANT_800200_15",
      "IdConcepto": "mx_ccd_Taxes",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A75bbd7aa-cf22-446e-abb3-12fa4d8630d7": {
    "Id": "A75bbd7aa-cf22-446e-abb3-12fa4d8630d7",
    "IdConcepto": "mx_ccd_InsurancesAndGuarantees",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A250bf8b5-951c-4711-96fc-ae60d53bd2fe": {
    "Id": "A250bf8b5-951c-4711-96fc-ae60d53bd2fe",
    "IdConcepto": "mx_ccd_InsurancesAndGuarantees",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_16": {
      "Id": "AT_800200_16",
      "IdConcepto": "mx_ccd_InsurancesAndGuarantees",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_16": {
      "Id": "ATANT_800200_16",
      "IdConcepto": "mx_ccd_InsurancesAndGuarantees",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ad4222340-e253-4c36-a9e2-50650a8a35a7": {
    "Id": "Ad4222340-e253-4c36-a9e2-50650a8a35a7",
    "IdConcepto": "mx_ccd_FeesAndRights",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A01b1bff2-1f7b-45b9-8ea0-80f3860b590d": {
    "Id": "A01b1bff2-1f7b-45b9-8ea0-80f3860b590d",
    "IdConcepto": "mx_ccd_FeesAndRights",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_17": {
      "Id": "AT_800200_17",
      "IdConcepto": "mx_ccd_FeesAndRights",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_17": {
      "Id": "ATANT_800200_17",
      "IdConcepto": "mx_ccd_FeesAndRights",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A102b7811-992e-4570-8823-26bf3cfc490f": {
    "Id": "A102b7811-992e-4570-8823-26bf3cfc490f",
    "IdConcepto": "mx_ccd_Advertising",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae0395e05-8e2a-45aa-b395-4cbac232188d": {
    "Id": "Ae0395e05-8e2a-45aa-b395-4cbac232188d",
    "IdConcepto": "mx_ccd_Advertising",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_18": {
      "Id": "AT_800200_18",
      "IdConcepto": "mx_ccd_Advertising",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_18": {
      "Id": "ATANT_800200_18",
      "IdConcepto": "mx_ccd_Advertising",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A6d45b6fb-0eb4-49d3-996d-3e6f2186ccf6": {
    "Id": "A6d45b6fb-0eb4-49d3-996d-3e6f2186ccf6",
    "IdConcepto": "mx_ccd_DepreciationAndAmortisationExpense",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9f8e9409-1edd-4d20-8b03-dc310bf3f962": {
    "Id": "A9f8e9409-1edd-4d20-8b03-dc310bf3f962",
    "IdConcepto": "mx_ccd_DepreciationAndAmortisationExpense",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_19": {
      "Id": "AT_800200_19",
      "IdConcepto": "mx_ccd_DepreciationAndAmortisationExpense",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_19": {
      "Id": "ATANT_800200_19",
      "IdConcepto": "mx_ccd_DepreciationAndAmortisationExpense",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A0f12d253-0c61-427b-b311-883b146a6bd6": {
    "Id": "A0f12d253-0c61-427b-b311-883b146a6bd6",
    "IdConcepto": "mx_ccd_MaintenanceCosts",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8004a0d3-1aef-4ca4-acd5-10cb5050fb21": {
    "Id": "A8004a0d3-1aef-4ca4-acd5-10cb5050fb21",
    "IdConcepto": "mx_ccd_MaintenanceCosts",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_20": {
      "Id": "AT_800200_20",
      "IdConcepto": "mx_ccd_MaintenanceCosts",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_20": {
      "Id": "ATANT_800200_20",
      "IdConcepto": "mx_ccd_MaintenanceCosts",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Aa8352c95-8300-447b-a1d3-df31b4c16f84": {
    "Id": "Aa8352c95-8300-447b-a1d3-df31b4c16f84",
    "IdConcepto": "mx_ccd_InterestExpense",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae59b2500-dc86-4efe-88b8-12cac88b469c": {
    "Id": "Ae59b2500-dc86-4efe-88b8-12cac88b469c",
    "IdConcepto": "mx_ccd_InterestExpense",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_21": {
      "Id": "AT_800200_21",
      "IdConcepto": "mx_ccd_InterestExpense",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_21": {
      "Id": "ATANT_800200_21",
      "IdConcepto": "mx_ccd_InterestExpense",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A17af046c-bd7f-4494-875a-14d4561c2327": {
    "Id": "A17af046c-bd7f-4494-875a-14d4561c2327",
    "IdConcepto": "mx_ccd_OtherAdministrativeExpenses",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5715c67e-576b-4c36-b37f-736cfc51aeff": {
    "Id": "A5715c67e-576b-4c36-b37f-736cfc51aeff",
    "IdConcepto": "mx_ccd_OtherAdministrativeExpenses",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_22": {
      "Id": "AT_800200_22",
      "IdConcepto": "mx_ccd_OtherAdministrativeExpenses",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_22": {
      "Id": "ATANT_800200_22",
      "IdConcepto": "mx_ccd_OtherAdministrativeExpenses",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A5bf7297c-b538-491e-9513-cdb0bf6c5b1c": {
    "Id": "A5bf7297c-b538-491e-9513-cdb0bf6c5b1c",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae8ae7b06-0a1d-42d0-8e5a-3d46e7fbc77b": {
    "Id": "Ae8ae7b06-0a1d-42d0-8e5a-3d46e7fbc77b",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_23": {
      "Id": "AT_800200_23",
      "IdConcepto": "ifrs-full_AdministrativeExpense",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_23": {
      "Id": "ATANT_800200_23",
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



  "Ad4f0f98c-587b-4542-9be2-cd411f3287ef": {
    "Id": "Ad4f0f98c-587b-4542-9be2-cd411f3287ef",
    "IdConcepto": "mx_ccd_InterestIncome",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2cbe995b-dfdf-4dd4-aa52-f7f01dfac36e": {
    "Id": "A2cbe995b-dfdf-4dd4-aa52-f7f01dfac36e",
    "IdConcepto": "mx_ccd_InterestIncome",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_24": {
      "Id": "AT_800200_24",
      "IdConcepto": "mx_ccd_InterestIncome",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_24": {
      "Id": "ATANT_800200_24",
      "IdConcepto": "mx_ccd_InterestIncome",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A0c21956f-af65-45e2-825f-7d0f00c1493c": {
    "Id": "A0c21956f-af65-45e2-825f-7d0f00c1493c",
    "IdConcepto": "mx_ccd_GainOnForeignExchange",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A52ea993d-2b99-4f3a-9a31-a6639025e900": {
    "Id": "A52ea993d-2b99-4f3a-9a31-a6639025e900",
    "IdConcepto": "mx_ccd_GainOnForeignExchange",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_25": {
      "Id": "AT_800200_25",
      "IdConcepto": "mx_ccd_GainOnForeignExchange",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_25": {
      "Id": "ATANT_800200_25",
      "IdConcepto": "mx_ccd_GainOnForeignExchange",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A5d2a3e48-7d84-4267-b958-80be114fe102": {
    "Id": "A5d2a3e48-7d84-4267-b958-80be114fe102",
    "IdConcepto": "mx_ccd_GainOnChangeInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6e0e41d2-5a3d-4fa5-b5fe-91a5d05cbc78": {
    "Id": "A6e0e41d2-5a3d-4fa5-b5fe-91a5d05cbc78",
    "IdConcepto": "mx_ccd_GainOnChangeInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_26": {
      "Id": "AT_800200_26",
      "IdConcepto": "mx_ccd_GainOnChangeInFairValueOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_26": {
      "Id": "ATANT_800200_26",
      "IdConcepto": "mx_ccd_GainOnChangeInFairValueOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A22815977-c195-4549-ae3e-bb26f03f9812": {
    "Id": "A22815977-c195-4549-ae3e-bb26f03f9812",
    "IdConcepto": "mx_ccd_GainOnValuationOfInvestmentsHeldToMaturityPreserved",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A709f0628-18b5-4940-ba17-a86182d6bdff": {
    "Id": "A709f0628-18b5-4940-ba17-a86182d6bdff",
    "IdConcepto": "mx_ccd_GainOnValuationOfInvestmentsHeldToMaturityPreserved",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_27": {
      "Id": "AT_800200_27",
      "IdConcepto": "mx_ccd_GainOnValuationOfInvestmentsHeldToMaturityPreserved",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_27": {
      "Id": "ATANT_800200_27",
      "IdConcepto": "mx_ccd_GainOnValuationOfInvestmentsHeldToMaturityPreserved",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A5848d1a1-5557-4536-9408-1215c0fd83de": {
    "Id": "A5848d1a1-5557-4536-9408-1215c0fd83de",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A00c23954-df90-458a-b7fb-e10e12f332de": {
    "Id": "A00c23954-df90-458a-b7fb-e10e12f332de",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_28": {
      "Id": "AT_800200_28",
      "IdConcepto": "ifrs-full_OtherFinanceIncome",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_28": {
      "Id": "ATANT_800200_28",
      "IdConcepto": "ifrs-full_OtherFinanceIncome",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A3b746d98-27e7-4e80-8b06-80fb54579427": {
    "Id": "A3b746d98-27e7-4e80-8b06-80fb54579427",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af74ec868-b748-4813-919f-8323051229c0": {
    "Id": "Af74ec868-b748-4813-919f-8323051229c0",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_29": {
      "Id": "AT_800200_29",
      "IdConcepto": "ifrs-full_FinanceIncome",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_29": {
      "Id": "ATANT_800200_29",
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



  "A1e4a5d4c-b5a8-494b-a367-2ed071a75de2": {
    "Id": "A1e4a5d4c-b5a8-494b-a367-2ed071a75de2",
    "IdConcepto": "mx_ccd_AccruedInterestExpense",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad351947a-bd80-4244-a86f-342c68e07b10": {
    "Id": "Ad351947a-bd80-4244-a86f-342c68e07b10",
    "IdConcepto": "mx_ccd_AccruedInterestExpense",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_30": {
      "Id": "AT_800200_30",
      "IdConcepto": "mx_ccd_AccruedInterestExpense",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_30": {
      "Id": "ATANT_800200_30",
      "IdConcepto": "mx_ccd_AccruedInterestExpense",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A05d632ff-3be5-4cd0-9243-a967cf126b80": {
    "Id": "A05d632ff-3be5-4cd0-9243-a967cf126b80",
    "IdConcepto": "mx_ccd_ForeignExchangeLoss",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A08b6e112-7065-432a-b50f-ff6a84b4c918": {
    "Id": "A08b6e112-7065-432a-b50f-ff6a84b4c918",
    "IdConcepto": "mx_ccd_ForeignExchangeLoss",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_31": {
      "Id": "AT_800200_31",
      "IdConcepto": "mx_ccd_ForeignExchangeLoss",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_31": {
      "Id": "ATANT_800200_31",
      "IdConcepto": "mx_ccd_ForeignExchangeLoss",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A371b1483-335b-4617-972a-b0d11bbfcddd": {
    "Id": "A371b1483-335b-4617-972a-b0d11bbfcddd",
    "IdConcepto": "mx_ccd_LossOnChangesInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0209e61d-9fd1-4e97-b7c0-c0d6cff4d5a7": {
    "Id": "A0209e61d-9fd1-4e97-b7c0-c0d6cff4d5a7",
    "IdConcepto": "mx_ccd_LossOnChangesInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_32": {
      "Id": "AT_800200_32",
      "IdConcepto": "mx_ccd_LossOnChangesInFairValueOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_32": {
      "Id": "ATANT_800200_32",
      "IdConcepto": "mx_ccd_LossOnChangesInFairValueOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Adc7d1678-b8bc-4f5d-aa61-5bd8a9898cbe": {
    "Id": "Adc7d1678-b8bc-4f5d-aa61-5bd8a9898cbe",
    "IdConcepto": "mx_ccd_LossOnValuationOfInvestmentsHeldToMaturityPreserved",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4301ddd8-ae0a-42ba-9a0f-8f000bd8bfd1": {
    "Id": "A4301ddd8-ae0a-42ba-9a0f-8f000bd8bfd1",
    "IdConcepto": "mx_ccd_LossOnValuationOfInvestmentsHeldToMaturityPreserved",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_33": {
      "Id": "AT_800200_33",
      "IdConcepto": "mx_ccd_LossOnValuationOfInvestmentsHeldToMaturityPreserved",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_33": {
      "Id": "ATANT_800200_33",
      "IdConcepto": "mx_ccd_LossOnValuationOfInvestmentsHeldToMaturityPreserved",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A7f6f8154-414e-440b-8632-8d4ecef30b2d": {
    "Id": "A7f6f8154-414e-440b-8632-8d4ecef30b2d",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A25e21a00-8eae-49cd-9036-5c9020dcc93f": {
    "Id": "A25e21a00-8eae-49cd-9036-5c9020dcc93f",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_34": {
      "Id": "AT_800200_34",
      "IdConcepto": "ifrs-full_OtherFinanceCost",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_34": {
      "Id": "ATANT_800200_34",
      "IdConcepto": "ifrs-full_OtherFinanceCost",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A1e946993-1bcd-45f2-88af-fb37801b4bb6": {
    "Id": "A1e946993-1bcd-45f2-88af-fb37801b4bb6",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad50af6b7-04d0-4e86-9ee8-f95bf514fd59": {
    "Id": "Ad50af6b7-04d0-4e86-9ee8-f95bf514fd59",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_35": {
      "Id": "AT_800200_35",
      "IdConcepto": "ifrs-full_FinanceCosts",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_35": {
      "Id": "ATANT_800200_35",
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



  "Ad8e87b6d-d656-4c86-9c6e-d5de5fcb742b": {
    "Id": "Ad8e87b6d-d656-4c86-9c6e-d5de5fcb742b",
    "IdConcepto": "mx_ccd_TaxCaused",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aeb54f62b-b0b1-40b8-8318-2594499c754f": {
    "Id": "Aeb54f62b-b0b1-40b8-8318-2594499c754f",
    "IdConcepto": "mx_ccd_TaxCaused",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_36": {
      "Id": "AT_800200_36",
      "IdConcepto": "mx_ccd_TaxCaused",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_36": {
      "Id": "ATANT_800200_36",
      "IdConcepto": "mx_ccd_TaxCaused",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Afcaed291-0a99-413a-a8c2-58c96f9f75ff": {
    "Id": "Afcaed291-0a99-413a-a8c2-58c96f9f75ff",
    "IdConcepto": "mx_ccd_DeferredTax",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2f4a0196-029b-4415-aed7-15669411055b": {
    "Id": "A2f4a0196-029b-4415-aed7-15669411055b",
    "IdConcepto": "mx_ccd_DeferredTax",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_37": {
      "Id": "AT_800200_37",
      "IdConcepto": "mx_ccd_DeferredTax",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_37": {
      "Id": "ATANT_800200_37",
      "IdConcepto": "mx_ccd_DeferredTax",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A25eff938-9184-4c70-a518-5d8919be29a2": {
    "Id": "A25eff938-9184-4c70-a518-5d8919be29a2",
    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A26cab955-27cb-49fa-8469-b2a4d13d0cc0": {
    "Id": "A26cab955-27cb-49fa-8469-b2a4d13d0cc0",
    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "AT_800200_38": {
      "Id": "AT_800200_38",
      "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_38": {
      "Id": "ATANT_800200_38",
      "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
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