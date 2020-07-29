///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-800200
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_800200 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_800200
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
  "A20501339-c74e-4249-b0d2-ac5343e944a7": {
    "Id": "A20501339-c74e-4249-b0d2-ac5343e944a7",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8862f3a5-5b48-4f2d-a0a2-1d02c05f12fa": {
    "Id": "A8862f3a5-5b48-4f2d-a0a2-1d02c05f12fa",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_1": {
      "Id": "ATA_800200_1",
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



  "A36e5574b-5018-4097-a6e7-f973ef0b9368": {
    "Id": "A36e5574b-5018-4097-a6e7-f973ef0b9368",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A25a2183e-8570-4a03-8171-f7d3c5f55a4b": {
    "Id": "A25a2183e-8570-4a03-8171-f7d3c5f55a4b",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_2": {
      "Id": "ATA_800200_2",
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



  "A0558401f-7cf8-48a0-8376-f42b9f84c243": {
    "Id": "A0558401f-7cf8-48a0-8376-f42b9f84c243",
    "IdConcepto": "mx_deuda_FinancialProductsInvestment",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afed1b93e-c47e-429d-aa1f-6da720bb5d59": {
    "Id": "Afed1b93e-c47e-429d-aa1f-6da720bb5d59",
    "IdConcepto": "mx_deuda_FinancialProductsInvestment",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_3": {
      "Id": "ATA_800200_3",
      "IdConcepto": "mx_deuda_FinancialProductsInvestment",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_3": {
      "Id": "ATANT_800200_3",
      "IdConcepto": "mx_deuda_FinancialProductsInvestment",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ab9f9da8d-2fe6-4d72-b3c9-1ec45d921c6b": {
    "Id": "Ab9f9da8d-2fe6-4d72-b3c9-1ec45d921c6b",
    "IdConcepto": "mx_deuda_FinancialsCreditRights",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abdbd9fc9-2f41-49de-9d61-1ff696972e1e": {
    "Id": "Abdbd9fc9-2f41-49de-9d61-1ff696972e1e",
    "IdConcepto": "mx_deuda_FinancialsCreditRights",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_4": {
      "Id": "ATA_800200_4",
      "IdConcepto": "mx_deuda_FinancialsCreditRights",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_4": {
      "Id": "ATANT_800200_4",
      "IdConcepto": "mx_deuda_FinancialsCreditRights",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A6eec3ab6-ff32-4e23-a257-a7f692acf177": {
    "Id": "A6eec3ab6-ff32-4e23-a257-a7f692acf177",
    "IdConcepto": "mx_deuda_InvestmentValuationSurplus",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A627a3d48-2676-4884-98a4-71be819000b1": {
    "Id": "A627a3d48-2676-4884-98a4-71be819000b1",
    "IdConcepto": "mx_deuda_InvestmentValuationSurplus",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_5": {
      "Id": "ATA_800200_5",
      "IdConcepto": "mx_deuda_InvestmentValuationSurplus",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  }, "ATANT_800200_5": {
      "Id": "ATANT_800200_5",
      "IdConcepto": "mx_deuda_InvestmentValuationSurplus",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A166bda81-aeae-466c-af2b-785202e5e96c": {
    "Id": "A166bda81-aeae-466c-af2b-785202e5e96c",
    "IdConcepto": "mx_deuda_BiologicalAssetsGain",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5e303d20-66c2-4b72-8032-c9c665942b44": {
    "Id": "A5e303d20-66c2-4b72-8032-c9c665942b44",
    "IdConcepto": "mx_deuda_BiologicalAssetsGain",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_6": {
      "Id": "ATA_800200_6",
      "IdConcepto": "mx_deuda_BiologicalAssetsGain",
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
      "IdConcepto": "mx_deuda_BiologicalAssetsGain",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A867d4e72-d9a1-4b6d-99f6-9de8b0d9614d": {
    "Id": "A867d4e72-d9a1-4b6d-99f6-9de8b0d9614d",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac58751f7-22d3-4b0f-80b2-5d8912d063f5": {
    "Id": "Ac58751f7-22d3-4b0f-80b2-5d8912d063f5",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_7": {
      "Id": "ATA_800200_7",
      "IdConcepto": "ifrs-full_OtherRevenue",
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
  }, "ATA_800200_8": {
      "Id": "ATA_800200_8",
      "IdConcepto": "ifrs-full_Revenue",
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



  "A80332486-620d-480a-b09c-f6d3b2fdff80": {
    "Id": "A80332486-620d-480a-b09c-f6d3b2fdff80",
    "IdConcepto": "mx_deuda_ComissionRepresentativeServices",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad0ab7ee4-a850-4300-aa2f-473df6fabb2a": {
    "Id": "Ad0ab7ee4-a850-4300-aa2f-473df6fabb2a",
    "IdConcepto": "mx_deuda_ComissionRepresentativeServices",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_9": {
      "Id": "ATA_800200_9",
      "IdConcepto": "mx_deuda_ComissionRepresentativeServices",
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
      "IdConcepto": "mx_deuda_ComissionRepresentativeServices",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A49b54ded-686b-43eb-bddf-4d94030a3ebf": {
    "Id": "A49b54ded-686b-43eb-bddf-4d94030a3ebf",
    "IdConcepto": "mx_deuda_ManagementFee",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0f4362b4-bda4-4bd0-8691-a53d79f00af7": {
    "Id": "A0f4362b4-bda4-4bd0-8691-a53d79f00af7",
    "IdConcepto": "mx_deuda_ManagementFee",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_10": {
      "Id": "ATA_800200_10",
      "IdConcepto": "mx_deuda_ManagementFee",
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
      "IdConcepto": "mx_deuda_ManagementFee",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A96ad1d22-e2b3-483f-b258-873d7933ece1": {
    "Id": "A96ad1d22-e2b3-483f-b258-873d7933ece1",
    "IdConcepto": "mx_deuda_Honorariums",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A84dc2951-c9f6-4b3b-81dd-4c9e1388ae57": {
    "Id": "A84dc2951-c9f6-4b3b-81dd-4c9e1388ae57",
    "IdConcepto": "mx_deuda_Honorariums",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_11": {
      "Id": "ATA_800200_11",
      "IdConcepto": "mx_deuda_Honorariums",
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
      "IdConcepto": "mx_deuda_Honorariums",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A1ae5c160-2a42-4b5c-bf31-4a5076f4acc8": {
    "Id": "A1ae5c160-2a42-4b5c-bf31-4a5076f4acc8",
    "IdConcepto": "mx_deuda_Taxes",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A00276216-d85c-4a23-bf72-287856505632": {
    "Id": "A00276216-d85c-4a23-bf72-287856505632",
    "IdConcepto": "mx_deuda_Taxes",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_12": {
      "Id": "ATA_800200_12",
      "IdConcepto": "mx_deuda_Taxes",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },
  "ATANT_800200_12": {
      "Id": "ATANT_800200_12",
      "IdConcepto": "mx_deuda_Taxes",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },




  "A5effe95e-cd14-4810-9a15-e49c2e30a223": {
    "Id": "A5effe95e-cd14-4810-9a15-e49c2e30a223",
    "IdConcepto": "mx_deuda_InsurancesAndGuarantees",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2329aadd-e70f-4b58-b89a-50792bd35283": {
    "Id": "A2329aadd-e70f-4b58-b89a-50792bd35283",
    "IdConcepto": "mx_deuda_InsurancesAndGuarantees",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_13": {
      "Id": "ATA_800200_13",
      "IdConcepto": "mx_deuda_InsurancesAndGuarantees",
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
      "IdConcepto": "mx_deuda_InsurancesAndGuarantees",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Adc3516f9-7ae8-4ab9-b4a3-c6f38f6ba094": {
    "Id": "Adc3516f9-7ae8-4ab9-b4a3-c6f38f6ba094",
    "IdConcepto": "mx_deuda_FeesAndRights",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac799dbd0-621e-4037-8c11-e19ba27c8625": {
    "Id": "Ac799dbd0-621e-4037-8c11-e19ba27c8625",
    "IdConcepto": "mx_deuda_FeesAndRights",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_14": {
      "Id": "ATA_800200_14",
      "IdConcepto": "mx_deuda_FeesAndRights",
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
      "IdConcepto": "mx_deuda_FeesAndRights",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A606cf4c9-8870-4abb-81b0-8b9319796355": {
    "Id": "A606cf4c9-8870-4abb-81b0-8b9319796355",
    "IdConcepto": "mx_deuda_AssetMaintenanceCosts",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9a06dd7d-b2a4-4855-a5c2-d6de96bf8050": {
    "Id": "A9a06dd7d-b2a4-4855-a5c2-d6de96bf8050",
    "IdConcepto": "mx_deuda_AssetMaintenanceCosts",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_15": {
      "Id": "ATA_800200_15",
      "IdConcepto": "mx_deuda_AssetMaintenanceCosts",
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
      "IdConcepto": "mx_deuda_AssetMaintenanceCosts",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A52644ffa-5754-49b4-bf64-b1266748767e": {
    "Id": "A52644ffa-5754-49b4-bf64-b1266748767e",
    "IdConcepto": "mx_deuda_OtherAdministrativeExpensesAndMaintenance",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1de8e8a5-9484-4aec-8e9f-0272172326c6": {
    "Id": "A1de8e8a5-9484-4aec-8e9f-0272172326c6",
    "IdConcepto": "mx_deuda_OtherAdministrativeExpensesAndMaintenance",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_16": {
      "Id": "ATA_800200_16",
      "IdConcepto": "mx_deuda_OtherAdministrativeExpensesAndMaintenance",
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
      "IdConcepto": "mx_deuda_OtherAdministrativeExpensesAndMaintenance",
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
  }, "ATA_800200_17": {
      "Id": "ATA_800200_17",
      "IdConcepto": "ifrs-full_AdministrativeExpense",
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



  "A9619b2ab-30cd-47a9-89a7-8534cb836df9": {
    "Id": "A9619b2ab-30cd-47a9-89a7-8534cb836df9",
    "IdConcepto": "mx_deuda_InterestIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0831bf37-38ce-4c6c-8bf8-8d8903f37d9a": {
    "Id": "A0831bf37-38ce-4c6c-8bf8-8d8903f37d9a",
    "IdConcepto": "mx_deuda_InterestIncome",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_18": {
      "Id": "ATA_800200_18",
      "IdConcepto": "mx_deuda_InterestIncome",
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
      "IdConcepto": "mx_deuda_InterestIncome",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A2b42f8f7-100b-4e68-b7d7-8599a90cf8ce": {
    "Id": "A2b42f8f7-100b-4e68-b7d7-8599a90cf8ce",
    "IdConcepto": "mx_deuda_GainOnForeignExchange",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A50488608-3680-4a34-8ef7-9ee4fa854124": {
    "Id": "A50488608-3680-4a34-8ef7-9ee4fa854124",
    "IdConcepto": "mx_deuda_GainOnForeignExchange",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_19": {
      "Id": "ATA_800200_19",
      "IdConcepto": "mx_deuda_GainOnForeignExchange",
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
      "IdConcepto": "mx_deuda_GainOnForeignExchange",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A184d6a1b-6c86-434c-b133-d5e7cd986793": {
    "Id": "A184d6a1b-6c86-434c-b133-d5e7cd986793",
    "IdConcepto": "mx_deuda_GainOnChangeInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A389c5fc3-4266-48e1-80eb-dde6fafcd2ab": {
    "Id": "A389c5fc3-4266-48e1-80eb-dde6fafcd2ab",
    "IdConcepto": "mx_deuda_GainOnChangeInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_20": {
      "Id": "ATA_800200_20",
      "IdConcepto": "mx_deuda_GainOnChangeInFairValueOfFinancialInstruments",
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
      "IdConcepto": "mx_deuda_GainOnChangeInFairValueOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ab618f728-09e9-48d0-80c7-8782123a7dec": {
    "Id": "Ab618f728-09e9-48d0-80c7-8782123a7dec",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A19fcf64f-84f6-4a8d-90e8-720be30648ea": {
    "Id": "A19fcf64f-84f6-4a8d-90e8-720be30648ea",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_21": {
      "Id": "ATA_800200_21",
      "IdConcepto": "ifrs-full_OtherFinanceIncome",
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
  }, "ATA_800200_22": {
      "Id": "ATA_800200_22",
      "IdConcepto": "ifrs-full_FinanceIncome",
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



  "A888af265-d9f9-442a-88a6-b226f318608e": {
    "Id": "A888af265-d9f9-442a-88a6-b226f318608e",
    "IdConcepto": "mx_deuda_AccruedInterestExpense",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae39473d9-a6ba-4900-bf1b-06d42ac16fda": {
    "Id": "Ae39473d9-a6ba-4900-bf1b-06d42ac16fda",
    "IdConcepto": "mx_deuda_AccruedInterestExpense",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_23": {
      "Id": "ATA_800200_23",
      "IdConcepto": "mx_deuda_AccruedInterestExpense",
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
      "IdConcepto": "mx_deuda_AccruedInterestExpense",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A8f993352-0c8d-4a3f-8515-38521cd7a367": {
    "Id": "A8f993352-0c8d-4a3f-8515-38521cd7a367",
    "IdConcepto": "mx_deuda_ForeignExchangeLoss",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ade5017be-ce16-4679-9057-b3ed95ea817b": {
    "Id": "Ade5017be-ce16-4679-9057-b3ed95ea817b",
    "IdConcepto": "mx_deuda_ForeignExchangeLoss",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_24": {
      "Id": "ATA_800200_24",
      "IdConcepto": "mx_deuda_ForeignExchangeLoss",
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
      "IdConcepto": "mx_deuda_ForeignExchangeLoss",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Aaac2d0de-af26-4321-a790-a2f81fbd4fe3": {
    "Id": "Aaac2d0de-af26-4321-a790-a2f81fbd4fe3",
    "IdConcepto": "mx_deuda_LossOnChangesInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aacea35e8-98f8-4ff6-823c-4f4c621ba072": {
    "Id": "Aacea35e8-98f8-4ff6-823c-4f4c621ba072",
    "IdConcepto": "mx_deuda_LossOnChangesInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_25": {
      "Id": "ATA_800200_25",
      "IdConcepto": "mx_deuda_LossOnChangesInFairValueOfFinancialInstruments",
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
      "IdConcepto": "mx_deuda_LossOnChangesInFairValueOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A4212fa88-8bb3-41b7-9ca8-91c456f25546": {
    "Id": "A4212fa88-8bb3-41b7-9ca8-91c456f25546",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2477a876-d7f6-43ca-8307-e2554464bd7c": {
    "Id": "A2477a876-d7f6-43ca-8307-e2554464bd7c",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "Acumulado_anio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_26": {
      "Id": "ATA_800200_26",
      "IdConcepto": "ifrs-full_OtherFinanceCost",
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
  },
  "ATA_800200_27": {
      "Id": "ATA_800200_27",
      "IdConcepto": "ifrs-full_FinanceCosts",
      "IdContextoPlantilla": "trimestre_actual",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },
  "ATANT_800200_27": {
      "Id": "ATANT_800200_27",
      "IdConcepto": "ifrs-full_FinanceCosts",
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