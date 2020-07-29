///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/mc_2014-03-05_role-105000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_mc_2014_03_05_role_105000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_mc_2014_03_05_role_105000
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
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "A6e0f4366-71e7-4681-b031-9b903c6326d6": {
    "Id": "A6e0f4366-71e7-4681-b031-9b903c6326d6",
    "IdConcepto": "mx_trac_TheSecurityTransaction",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af0cd6397-20e6-49c1-b027-81b52f8e8876": {
    "Id": "Af0cd6397-20e6-49c1-b027-81b52f8e8876",
    "IdConcepto": "mx_trac_HeritageOfTheFund",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af8320df0-a2ea-457f-acdf-15831a70a1aa": {
    "Id": "Af8320df0-a2ea-457f-acdf-15831a70a1aa",
    "IdConcepto": "mx_trac_RelevantDisclosureAboutThePeriod",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad22853c5-3691-46ad-90a1-77c180abcee0": {
    "Id": "Ad22853c5-3691-46ad-90a1-77c180abcee0",
    "IdConcepto": "mx_trac_OtherRequiredThirdToTheTrustOrSecurityHoldersIfAny",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2b12343f-19e0-4f48-b7f9-319d7f1498f3": {
    "Id": "A2b12343f-19e0-4f48-b7f9-319d7f1498f3",
    "IdConcepto": "ifrs-mc_ManagementCommentaryExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A39ae9db8-1097-4b14-9e47-92b41bea76ab": {
    "Id": "A39ae9db8-1097-4b14-9e47-92b41bea76ab",
    "IdConcepto": "ifrs-mc_DisclosureOfNatureOfBusinessExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A65a2a960-e4e5-436f-9e0d-9376221e6e0a": {
    "Id": "A65a2a960-e4e5-436f-9e0d-9376221e6e0a",
    "IdConcepto": "ifrs-mc_DisclosureOfManagementsObjectivesAndItsStrategiesForMeetingThoseObjectivesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A52cd27e5-da03-4740-a4f3-70367787efd1": {
    "Id": "A52cd27e5-da03-4740-a4f3-70367787efd1",
    "IdConcepto": "ifrs-mc_DisclosureOfEntitysMostSignificantResourcesRisksAndRelationshipsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2bf12005-ea00-4a2e-8bfc-c67f8dbba6d6": {
    "Id": "A2bf12005-ea00-4a2e-8bfc-c67f8dbba6d6",
    "IdConcepto": "ifrs-mc_DisclosureOfResultsOfOperationsAndProspectsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A027d63c2-af5c-4a14-bdf5-22165cff48e3": {
    "Id": "A027d63c2-af5c-4a14-bdf5-22165cff48e3",
    "IdConcepto": "ifrs-mc_DisclosureOfCriticalPerformanceMeasuresAndIndicatorsThatManagementUsesToEvaluateEntitysPerformanceAgainstStatedObjectivesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  }
};
        }
    }

}