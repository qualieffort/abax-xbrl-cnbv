///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-AR
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_AR implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_AR
         */
        constructor() {

			this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
  "ctx_2014": {
    "Id": "ctx_2014",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2014_12_31",
      "FechaInicio": "",
      "FechaFin": ""
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

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "ar_pros_AnnualReport_2c6f7616-5c5f-42d0-a890-be559bbe0e27": {
    "Id": "ar_pros_AnnualReport_2c6f7616-5c5f-42d0-a890-be559bbe0e27",
    "IdConcepto": "ar_pros_AnnualReport",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultAnnualReport"
  },
  "ar_pros_LimitedPublicOffering_adec05ce-1d28-4741-80eb-6262200283d7": {
    "Id": "ar_pros_LimitedPublicOffering_adec05ce-1d28-4741-80eb-6262200283d7",
    "IdConcepto": "ar_pros_LimitedPublicOffering",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNo"
  },
  "ar_pros_TypeOfInstrument_7594440f-439d-44b2-a005-d921d16205e1": {
    "Id": "ar_pros_TypeOfInstrument_7594440f-439d-44b2-a005-d921d16205e1",
    "IdConcepto": "ar_pros_TypeOfInstrument",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTypeOfInstrument"
  },
  "ar_pros_ForeingIssuer_24a5f023-82df-4b7e-a6a4-7c687b53b13f": {
    "Id": "ar_pros_ForeingIssuer_24a5f023-82df-4b7e-a6a4-7c687b53b13f",
    "IdConcepto": "ar_pros_ForeingIssuer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNo"
  },
  "ar_pros_MentioningwhetherOrNotHaveCollateral_53201818-d32f-4217-bcd7-77895197d57d": {
    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_53201818-d32f-4217-bcd7-77895197d57d",
    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MentioningPartialOrTotalDependence_2b9892f4-3cd2-4add-a583-ad1eec87057b": {
    "Id": "ar_pros_MentioningPartialOrTotalDependence_2b9892f4-3cd2-4add-a583-ad1eec87057b",
    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependence",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNo"
  }
};
        }
    }

}