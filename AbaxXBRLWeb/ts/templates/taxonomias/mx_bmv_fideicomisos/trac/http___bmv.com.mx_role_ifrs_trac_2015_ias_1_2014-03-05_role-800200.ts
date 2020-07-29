///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-800200
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_800200 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_800200
         */
        constructor() {

			this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
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
  },
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
  "Ae0dedce4-0509-4dca-ab6e-9555f9e488b6": {
    "Id": "Ae0dedce4-0509-4dca-ab6e-9555f9e488b6",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3fef2836-6842-43bf-b956-a060a3707f9f": {
    "Id": "A3fef2836-6842-43bf-b956-a060a3707f9f",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "Acumulado_AnoActual",
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



  "A49fc3d31-e3b9-4dc2-9cef-e1ccdf491a03": {
    "Id": "A49fc3d31-e3b9-4dc2-9cef-e1ccdf491a03",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7b872099-ee9a-4379-ab98-d03963f6ff2d": {
    "Id": "A7b872099-ee9a-4379-ab98-d03963f6ff2d",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "Acumulado_AnoActual",
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



  "Ad6fc3090-a134-4ffa-b798-aa40da57d3ea": {
    "Id": "Ad6fc3090-a134-4ffa-b798-aa40da57d3ea",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acd537389-b01c-4031-89cd-6ba1af51af85": {
    "Id": "Acd537389-b01c-4031-89cd-6ba1af51af85",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_3": {
      "Id": "ATA_800200_3",
      "IdConcepto": "ifrs-full_OtherRevenue",
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
  }, "ATA_800200_4": {
      "Id": "ATA_800200_4",
      "IdConcepto": "ifrs-full_Revenue",
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



  "A62500c06-f82c-45af-8676-e50e95a98c34": {
    "Id": "A62500c06-f82c-45af-8676-e50e95a98c34",
    "IdConcepto": "mx_trac_ManagementFee",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A132e873e-4171-46d0-aa4a-52d3baddb001": {
    "Id": "A132e873e-4171-46d0-aa4a-52d3baddb001",
    "IdConcepto": "mx_trac_ManagementFee",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_5": {
      "Id": "ATA_800200_5",
      "IdConcepto": "mx_trac_ManagementFee",
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
      "IdConcepto": "mx_trac_ManagementFee",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A08b65c05-29ac-443e-8896-da3e1193146e": {
    "Id": "A08b65c05-29ac-443e-8896-da3e1193146e",
    "IdConcepto": "mx_trac_ProfessionalFees",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0f9bc152-814b-4873-9fd5-af229ea92cd5": {
    "Id": "A0f9bc152-814b-4873-9fd5-af229ea92cd5",
    "IdConcepto": "mx_trac_ProfessionalFees",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_6": {
      "Id": "ATA_800200_6",
      "IdConcepto": "mx_trac_ProfessionalFees",
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
      "IdConcepto": "mx_trac_ProfessionalFees",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ae4b41006-5740-427d-9a6e-3dc8cfaf5232": {
    "Id": "Ae4b41006-5740-427d-9a6e-3dc8cfaf5232",
    "IdConcepto": "mx_trac_FeesAndRights",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac01c6442-2640-4fd0-a444-29639c0616d5": {
    "Id": "Ac01c6442-2640-4fd0-a444-29639c0616d5",
    "IdConcepto": "mx_trac_FeesAndRights",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_7": {
      "Id": "ATA_800200_7",
      "IdConcepto": "mx_trac_FeesAndRights",
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
      "IdConcepto": "mx_trac_FeesAndRights",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Ae69752c1-0519-4da5-94cd-4aee18feb561": {
    "Id": "Ae69752c1-0519-4da5-94cd-4aee18feb561",
    "IdConcepto": "mx_trac_Taxes",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A48bdfb83-279d-4b85-922e-c78dbdecf514": {
    "Id": "A48bdfb83-279d-4b85-922e-c78dbdecf514",
    "IdConcepto": "mx_trac_Taxes",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_8": {
      "Id": "ATA_800200_8",
      "IdConcepto": "mx_trac_Taxes",
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
      "IdConcepto": "mx_trac_Taxes",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Aa89fc7d0-6af8-44b8-8ad2-ff7c627f3529": {
    "Id": "Aa89fc7d0-6af8-44b8-8ad2-ff7c627f3529",
    "IdConcepto": "mx_trac_DividendsAndInterestPaid",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A600ff4d0-f39c-4179-b27e-db316c10267d": {
    "Id": "A600ff4d0-f39c-4179-b27e-db316c10267d",
    "IdConcepto": "mx_trac_DividendsAndInterestPaid",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_9": {
      "Id": "ATA_800200_9",
      "IdConcepto": "mx_trac_DividendsAndInterestPaid",
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
      "IdConcepto": "mx_trac_DividendsAndInterestPaid",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A3dabdbc3-f037-4426-83ec-66685868bef3": {
    "Id": "A3dabdbc3-f037-4426-83ec-66685868bef3",
    "IdConcepto": "mx_trac_OtherAdministrativeExpenses",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aef020d04-d527-4380-858d-d497f4e374d7": {
    "Id": "Aef020d04-d527-4380-858d-d497f4e374d7",
    "IdConcepto": "mx_trac_OtherAdministrativeExpenses",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_10": {
      "Id": "ATA_800200_10",
      "IdConcepto": "mx_trac_OtherAdministrativeExpenses",
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
      "IdConcepto": "mx_trac_OtherAdministrativeExpenses",
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
  }, "ATA_800200_11": {
      "Id": "ATA_800200_11",
      "IdConcepto": "ifrs-full_AdministrativeExpense",
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



  "A6c93b269-9ffd-4aff-9d90-e3f040c38df7": {
    "Id": "A6c93b269-9ffd-4aff-9d90-e3f040c38df7",
    "IdConcepto": "mx_trac_InterestIncome",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae8ccc267-0426-4437-acb0-4191cecbc2c0": {
    "Id": "Ae8ccc267-0426-4437-acb0-4191cecbc2c0",
    "IdConcepto": "mx_trac_InterestIncome",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_12": {
      "Id": "ATA_800200_12",
      "IdConcepto": "mx_trac_InterestIncome",
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
      "IdConcepto": "mx_trac_InterestIncome",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A0be01af3-4004-4d8c-824e-5c7e8bf19da6": {
    "Id": "A0be01af3-4004-4d8c-824e-5c7e8bf19da6",
    "IdConcepto": "mx_trac_GainOnForeignExchange",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A249eb206-7e00-405d-85b9-0c579abe0ccc": {
    "Id": "A249eb206-7e00-405d-85b9-0c579abe0ccc",
    "IdConcepto": "mx_trac_GainOnForeignExchange",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_13": {
      "Id": "ATA_800200_13",
      "IdConcepto": "mx_trac_GainOnForeignExchange",
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
      "IdConcepto": "mx_trac_GainOnForeignExchange",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A9899f17b-e323-406c-81bb-ced9fc1929e4": {
    "Id": "A9899f17b-e323-406c-81bb-ced9fc1929e4",
    "IdConcepto": "mx_trac_GainOnChangeInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac8ec4d73-3e8d-46c4-af4d-7c2dd5d256ee": {
    "Id": "Ac8ec4d73-3e8d-46c4-af4d-7c2dd5d256ee",
    "IdConcepto": "mx_trac_GainOnChangeInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_14": {
      "Id": "ATA_800200_14",
      "IdConcepto": "mx_trac_GainOnChangeInFairValueOfFinancialInstruments",
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
      "IdConcepto": "mx_trac_GainOnChangeInFairValueOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Abe11d8cb-c4f7-4cef-9439-d05a98442bdb": {
    "Id": "Abe11d8cb-c4f7-4cef-9439-d05a98442bdb",
    "IdConcepto": "mx_trac_GainOnSaleOfSecurities",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A14389181-0cdc-420c-8481-bee6768cf5ae": {
    "Id": "A14389181-0cdc-420c-8481-bee6768cf5ae",
    "IdConcepto": "mx_trac_GainOnSaleOfSecurities",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_15": {
      "Id": "ATA_800200_15",
      "IdConcepto": "mx_trac_GainOnSaleOfSecurities",
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
      "IdConcepto": "mx_trac_GainOnSaleOfSecurities",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A56ced4d6-8b07-4202-8960-891c720163c8": {
    "Id": "A56ced4d6-8b07-4202-8960-891c720163c8",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0b1ccf79-ae5f-411e-a2fb-2c42e886b550": {
    "Id": "A0b1ccf79-ae5f-411e-a2fb-2c42e886b550",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_16": {
      "Id": "ATA_800200_16",
      "IdConcepto": "ifrs-full_OtherFinanceIncome",
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
  }, "ATA_800200_17": {
      "Id": "ATA_800200_17",
      "IdConcepto": "ifrs-full_FinanceIncome",
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



  "A29458dbf-b638-4575-a3f5-57b0481bc144": {
    "Id": "A29458dbf-b638-4575-a3f5-57b0481bc144",
    "IdConcepto": "mx_trac_AccruedInterestExpense",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa74d314a-c1b3-43fa-b123-cd18aa78abbb": {
    "Id": "Aa74d314a-c1b3-43fa-b123-cd18aa78abbb",
    "IdConcepto": "mx_trac_AccruedInterestExpense",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_18": {
      "Id": "ATA_800200_18",
      "IdConcepto": "mx_trac_AccruedInterestExpense",
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
      "IdConcepto": "mx_trac_AccruedInterestExpense",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A33dd4a3c-443c-4c7d-9de6-c43dbd49404e": {
    "Id": "A33dd4a3c-443c-4c7d-9de6-c43dbd49404e",
    "IdConcepto": "mx_trac_ForeignExchangeLoss",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4704e582-cbef-49be-a750-e8d897ddd9ca": {
    "Id": "A4704e582-cbef-49be-a750-e8d897ddd9ca",
    "IdConcepto": "mx_trac_ForeignExchangeLoss",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_19": {
      "Id": "ATA_800200_19",
      "IdConcepto": "mx_trac_ForeignExchangeLoss",
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
      "IdConcepto": "mx_trac_ForeignExchangeLoss",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A4cda4bc7-7544-4236-8051-5edf417bc1b2": {
    "Id": "A4cda4bc7-7544-4236-8051-5edf417bc1b2",
    "IdConcepto": "mx_trac_LossOnChangesInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af6e8b501-b69e-4c62-a1f8-5885f0398e15": {
    "Id": "Af6e8b501-b69e-4c62-a1f8-5885f0398e15",
    "IdConcepto": "mx_trac_LossOnChangesInFairValueOfFinancialInstruments",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_20": {
      "Id": "ATA_800200_20",
      "IdConcepto": "mx_trac_LossOnChangesInFairValueOfFinancialInstruments",
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
      "IdConcepto": "mx_trac_LossOnChangesInFairValueOfFinancialInstruments",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "Afb8ffb7e-63ed-4775-a041-a4f2b8bd695d": {
    "Id": "Afb8ffb7e-63ed-4775-a041-a4f2b8bd695d",
    "IdConcepto": "mx_trac_LossOnSaleOfSecurities",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6d522202-b862-4e03-a13e-4ebd2b9e42e7": {
    "Id": "A6d522202-b862-4e03-a13e-4ebd2b9e42e7",
    "IdConcepto": "mx_trac_LossOnSaleOfSecurities",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_21": {
      "Id": "ATA_800200_21",
      "IdConcepto": "mx_trac_LossOnSaleOfSecurities",
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
      "IdConcepto": "mx_trac_LossOnSaleOfSecurities",
      "IdContextoPlantilla": "trimestre_comparativo",
      "Hechos": [],
      "IdUnidadPlantilla": "MXN",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },



  "A75401461-3174-4310-be31-d0631220bcf9": {
    "Id": "A75401461-3174-4310-be31-d0631220bcf9",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "Acumulado_AnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3b1dbb24-c51b-4fbd-8b24-ad4ad34b8b3c": {
    "Id": "A3b1dbb24-c51b-4fbd-8b24-ad4ad34b8b3c",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }, "ATA_800200_22": {
      "Id": "ATA_800200_22",
      "IdConcepto": "ifrs-full_OtherFinanceCost",
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
  }, "ATA_800200_23": {
      "Id": "ATA_800200_23",
      "IdConcepto": "ifrs-full_FinanceCosts",
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