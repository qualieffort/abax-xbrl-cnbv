///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/ccd/2015/ias_34_2014-03-05_role-813000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_ccd_2015_ias_34_2014_03_05_role_813000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_ccd_2015_ias_34_2014_03_05_role_813000
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
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "A39f5b53c-ff83-4133-9e73-e0c22f158a96": {
    "Id": "A39f5b53c-ff83-4133-9e73-e0c22f158a96",
    "IdConcepto": "ifrs-full_DisclosureOfInterimFinancialReportingExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A21ab7b25-c977-47bc-8b4d-793a2976480c": {
    "Id": "A21ab7b25-c977-47bc-8b4d-793a2976480c",
    "IdConcepto": "ifrs-full_DescriptionOfSignificantEventsAndTransactions",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5265d2ae-1460-4c2b-976d-a922bb030eee": {
    "Id": "A5265d2ae-1460-4c2b-976d-a922bb030eee",
    "IdConcepto": "ifrs-full_ExplanationOfAccountingPoliciesAndMethodsOfComputationFollowedInInterimFinancialStatements",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A98481359-ed0c-461b-ba12-9936f1318454": {
    "Id": "A98481359-ed0c-461b-ba12-9936f1318454",
    "IdConcepto": "ifrs-full_ExplanationOfSeasonalityOrCyclicalityOfInterimOperations",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A26026932-b770-47a7-8bc4-5c45c55f22a1": {
    "Id": "A26026932-b770-47a7-8bc4-5c45c55f22a1",
    "IdConcepto": "ifrs-full_ExplanationOfNatureAndAmountOfItemsAffectingAssetsLiabilitiesEquityNetIncomeOrCashFlowsThatAreUnusualBecauseOfTheirNatureSizeOrIncidence",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A53e83785-b9c4-4b51-95d2-c924f92c0dc8": {
    "Id": "A53e83785-b9c4-4b51-95d2-c924f92c0dc8",
    "IdConcepto": "ifrs-full_ExplanationOfNatureAndAmountOfChangesInEstimatesOfAmountsReportedInPriorInterimPeriodsOrPriorFinancialYears",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0be9240e-e7c1-449e-8bb0-f637d867f1d6": {
    "Id": "A0be9240e-e7c1-449e-8bb0-f637d867f1d6",
    "IdConcepto": "ifrs-full_ExplanationOfIssuancesRepurchasesAndRepaymentsOfDebtAndEquitySecurities",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac0e38b4f-0f9e-4d24-8dff-49463f524321": {
    "Id": "Ac0e38b4f-0f9e-4d24-8dff-49463f524321",
    "IdConcepto": "ifrs-full_ExplanationOfMaterialEventsSubsequentToEndOfInterimPeriodThatHaveNotBeenReflected",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A039eee9c-3e69-4ada-abb5-cef06448a43f": {
    "Id": "A039eee9c-3e69-4ada-abb5-cef06448a43f",
    "IdConcepto": "ifrs-full_ExplanationOfEffectOfChangesInCompositionOfEntityDuringInterimPeriod",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A18f18576-672a-45a3-a659-5e7046822b6c": {
    "Id": "A18f18576-672a-45a3-a659-5e7046822b6c",
    "IdConcepto": "ifrs-full_DescriptionOfComplianceWithIFRSsIfAppliedForInterimFinancialReport",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1e377605-cc24-4b90-a40e-25039f2eaac7": {
    "Id": "A1e377605-cc24-4b90-a40e-25039f2eaac7",
    "IdConcepto": "ifrs-full_DescriptionOfNatureAndAmountOfChangeInEstimateDuringFinalInterimPeriod",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
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