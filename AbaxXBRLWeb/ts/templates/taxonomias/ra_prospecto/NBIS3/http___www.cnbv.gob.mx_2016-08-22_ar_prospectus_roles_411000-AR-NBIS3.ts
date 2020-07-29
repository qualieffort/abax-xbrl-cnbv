///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-AR-NBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_AR_NBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_AR_NBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {

                
            };

            this.ContextosPlantillaPorId = {
  "ctx": {
    "Id": "ctx",
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
  "ar_pros_AnnualReport_d92b499a-530e-477e-a9b0-4da9e6a932d4": {
    "Id": "ar_pros_AnnualReport_d92b499a-530e-477e-a9b0-4da9e6a932d4",
    "IdConcepto": "ar_pros_AnnualReport",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultAnnualReport"
  },
  "ar_pros_LimitedPublicOffering_bdd18179-65ce-4636-be3e-4f976c3c3f78": {
    "Id": "ar_pros_LimitedPublicOffering_bdd18179-65ce-4636-be3e-4f976c3c3f78",
    "IdConcepto": "ar_pros_LimitedPublicOffering",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultLimitedPublicOffering"
  },
  "ar_pros_TypeOfInstrument_a7423397-b3a8-4376-a0e5-252c24531663": {
    "Id": "ar_pros_TypeOfInstrument_a7423397-b3a8-4376-a0e5-252c24531663",
    "IdConcepto": "ar_pros_TypeOfInstrument",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTypeOfInstrument"
  },
  "ar_pros_ForeingIssuer_d268b172-8631-476d-b31f-0f64d7268355": {
    "Id": "ar_pros_ForeingIssuer_d268b172-8631-476d-b31f-0f64d7268355",
    "IdConcepto": "ar_pros_ForeingIssuer",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultForeingIssuer"
  },
  "ar_pros_MentioningwhetherOrNotHaveCollateral_235cd753-1851-4322-805e-18781a628875": {
    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_235cd753-1851-4322-805e-18781a628875",
    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MentioningPartialOrTotalDependence_5bd36a0d-2b74-471b-8427-54fdc0db61e6": {
    "Id": "ar_pros_MentioningPartialOrTotalDependence_5bd36a0d-2b74-471b-8427-54fdc0db61e6",
    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependence",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
  },
  "ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose_1ded68e6-865a-4a87-b11a-6eb145aaae10": {
    "Id": "ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose_1ded68e6-865a-4a87-b11a-6eb145aaae10",
    "IdConcepto": "ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultCompanyIncorporatedSoThatTheTrustMeetsItsPurpose"
  }
};
        }
    }

}