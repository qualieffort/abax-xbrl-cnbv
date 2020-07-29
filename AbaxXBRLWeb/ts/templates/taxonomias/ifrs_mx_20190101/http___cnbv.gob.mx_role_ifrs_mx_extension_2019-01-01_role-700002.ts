///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/mx_extension_2019-01-01_role-700002
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_mx_extension_2019_01_01_role_700002 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_700002
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
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
  "trimestre_ejercicio_anterior": {
    "Id": "trimestre_ejercicio_anterior",
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
  "acumulado_ejercicio_actual": {
    "Id": "acumulado_ejercicio_actual",
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
  "acumulado_ejercicio_anterior": {
    "Id": "acumulado_ejercicio_anterior",
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
  }
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
  "A08621a50-f933-4d3a-ad45-ec27dfc4e93f": {
    "Id": "A08621a50-f933-4d3a-ad45-ec27dfc4e93f",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "trimestre_actual",
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
  "A0b43f9d2-812f-40e1-810c-38a9e47e6b5c": {
    "Id": "A0b43f9d2-812f-40e1-810c-38a9e47e6b5c",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
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
  },
  "A398d4fa6-5cdd-4edf-9b01-ad78d00fd35d": {
    "Id": "A398d4fa6-5cdd-4edf-9b01-ad78d00fd35d",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0ca30a97-16a4-468e-b440-090eaedb8c8e": {
    "Id": "A0ca30a97-16a4-468e-b440-090eaedb8c8e",
    "IdConcepto": "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
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