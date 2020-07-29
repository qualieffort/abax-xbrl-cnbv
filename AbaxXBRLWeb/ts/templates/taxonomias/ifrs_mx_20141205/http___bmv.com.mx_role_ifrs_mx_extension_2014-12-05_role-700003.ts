///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/mx_extension_2014-12-05_role-700003
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_700003 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_700003
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
  
  "info_12_meses_al_cierre_trimestre": {
    "Id": "info_12_meses_al_cierre_trimestre",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2014_10_01",
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
  "info_12_meses_al_cierre_trim_eje_anterior": {
    "Id": "info_12_meses_al_cierre_trim_eje_anterior",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2013_10_01",
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
};

            this.UnidadesPlantillaPorId = {
  "Peso_Mx": {
    "Id": "Peso_Mx",
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
                "A82d1a6e3-405f-4bc5-914f-4f1e5bdf8fa7": {
                    "Id": "A82d1a6e3-405f-4bc5-914f-4f1e5bdf8fa7",
                    "IdConcepto": "ifrs-full_Revenue",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "A7e9ee5e9-7189-4093-b913-098fb862bc58": {
                    "Id": "A7e9ee5e9-7189-4093-b913-098fb862bc58",
                    "IdConcepto": "ifrs-full_Revenue",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "A101c90a5-1429-4367-b5db-6f42bf8d55ee": {
                    "Id": "A101c90a5-1429-4367-b5db-6f42bf8d55ee",
                    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "Af4d07cbf-7006-460d-83ca-f8eec771e215": {
                    "Id": "Af4d07cbf-7006-460d-83ca-f8eec771e215",
                    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "Ab6e4f3be-6798-4993-9754-aed7950b209a": {
                    "Id": "Ab6e4f3be-6798-4993-9754-aed7950b209a",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "A62136776-c1a5-4fef-b1ba-7537fc51a783": {
                    "Id": "A62136776-c1a5-4fef-b1ba-7537fc51a783",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "Ad40c7a09-6e9c-4bd3-b91b-1fdcb6e506cf": {
                    "Id": "Ad40c7a09-6e9c-4bd3-b91b-1fdcb6e506cf",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "A75e0267e-1393-42a1-b4ad-e3e35e6ca299": {
                    "Id": "A75e0267e-1393-42a1-b4ad-e3e35e6ca299",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "Ae32b7e84-4b54-4170-8bf8-8cbb5a5cb156": {
                    "Id": "Ae32b7e84-4b54-4170-8bf8-8cbb5a5cb156",
                    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "A7324d08c-4de7-4eff-97af-87d505c133a7": {
                    "Id": "A7324d08c-4de7-4eff-97af-87d505c133a7",
                    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
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