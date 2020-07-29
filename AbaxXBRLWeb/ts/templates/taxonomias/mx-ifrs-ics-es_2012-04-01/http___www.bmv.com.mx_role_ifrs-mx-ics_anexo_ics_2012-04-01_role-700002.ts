///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/role/ifrs-mx-ics/anexo_ics_2012-04-01_role-700002
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_bmv_com_mx_role_ifrs_mx_ics_anexo_ics_2012_04_01_role_700002 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_bmv_com_mx_role_ifrs_mx_ics_anexo_ics_2012_04_01_role_700002
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
  "P_Duracion_2014-07-01_2014-09-30": {
    "Id": "P_Duracion_2014-07-01_2014-09-30",
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
  "P_Duracion_2014-01-01_2014-09-30": {
    "Id": "P_Duracion_2014-01-01_2014-09-30",
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
  "P_Duracion_2013-01-01_2013-09-30": {
    "Id": "P_Duracion_2013-01-01_2013-09-30",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2013_01_01",
      "FechaFin": "#fecha_2013_09_30",
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
  "P_Duracion_2013-07-01_2013-09-30": {
    "Id": "P_Duracion_2013-07-01_2013-09-30",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2013_07_01",
      "FechaFin": "#fecha_2013_09_30",
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
  "A43df0da2-99d6-4619-a19e-a7d40dfbbbab": {
    "Id": "A43df0da2-99d6-4619-a19e-a7d40dfbbbab",
    "IdConcepto": "mx-ifrs-ics_DepreciacionAmortizacionOperativa",
    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ada14441f-36dc-463c-8a40-1639fc5ba9e7": {
    "Id": "Ada14441f-36dc-463c-8a40-1639fc5ba9e7",
    "IdConcepto": "mx-ifrs-ics_DepreciacionAmortizacionOperativa",
    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A12ade865-cea7-4da6-be79-3e795b8e8882": {
    "Id": "A12ade865-cea7-4da6-be79-3e795b8e8882",
    "IdConcepto": "mx-ifrs-ics_DepreciacionAmortizacionOperativa",
    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A69adb933-8934-4975-ad8d-d168d0648991": {
    "Id": "A69adb933-8934-4975-ad8d-d168d0648991",
    "IdConcepto": "mx-ifrs-ics_DepreciacionAmortizacionOperativa",
    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
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