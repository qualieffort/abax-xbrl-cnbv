///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_34_2014-03-05_role-813000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_34_2014_03_05_role_813000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_34_2014_03_05_role_813000
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
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "A57140c09-ed8e-48a9-a0a5-bc81917aa0fb": {
    "Id": "A57140c09-ed8e-48a9-a0a5-bc81917aa0fb",
    "IdConcepto": "ifrs-full_DisclosureOfInterimFinancialReportingExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8a992d39-b204-4cc1-a6f6-806dd794bd3f": {
    "Id": "A8a992d39-b204-4cc1-a6f6-806dd794bd3f",
    "IdConcepto": "ifrs-full_DescriptionOfSignificantEventsAndTransactions",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad3df565a-01fc-4f2d-92c7-2be2320c5ef1": {
    "Id": "Ad3df565a-01fc-4f2d-92c7-2be2320c5ef1",
    "IdConcepto": "ifrs-full_ExplanationOfAccountingPoliciesAndMethodsOfComputationFollowedInInterimFinancialStatements",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A16b31663-d495-4e50-ad68-eda0eec9eb1a": {
    "Id": "A16b31663-d495-4e50-ad68-eda0eec9eb1a",
    "IdConcepto": "ifrs-full_ExplanationOfSeasonalityOrCyclicalityOfInterimOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad57f6e47-54b8-47cc-9167-552d4b24ac34": {
    "Id": "Ad57f6e47-54b8-47cc-9167-552d4b24ac34",
    "IdConcepto": "ifrs-full_ExplanationOfNatureAndAmountOfItemsAffectingAssetsLiabilitiesEquityNetIncomeOrCashFlowsThatAreUnusualBecauseOfTheirNatureSizeOrIncidence",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A223ef4ca-ec6f-4b14-a72c-72a898084a17": {
    "Id": "A223ef4ca-ec6f-4b14-a72c-72a898084a17",
    "IdConcepto": "ifrs-full_ExplanationOfNatureAndAmountOfChangesInEstimatesOfAmountsReportedInPriorInterimPeriodsOrPriorFinancialYears",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7fe64693-4290-49b3-b140-fa40b28d3616": {
    "Id": "A7fe64693-4290-49b3-b140-fa40b28d3616",
    "IdConcepto": "ifrs-full_ExplanationOfIssuancesRepurchasesAndRepaymentsOfDebtAndEquitySecurities",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A943e8fa7-a2ee-4a50-a6ba-20dcd58c7bb6": {
    "Id": "A943e8fa7-a2ee-4a50-a6ba-20dcd58c7bb6",
    "IdConcepto": "ifrs-full_ExplanationOfMaterialEventsSubsequentToEndOfInterimPeriodThatHaveNotBeenReflected",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac6757cf5-a517-4aef-8463-2f7f5878b19e": {
    "Id": "Ac6757cf5-a517-4aef-8463-2f7f5878b19e",
    "IdConcepto": "ifrs-full_ExplanationOfEffectOfChangesInCompositionOfEntityDuringInterimPeriod",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A89f82931-3d0e-4775-9e43-c2babc81fb5c": {
    "Id": "A89f82931-3d0e-4775-9e43-c2babc81fb5c",
    "IdConcepto": "ifrs-full_DescriptionOfComplianceWithIFRSsIfAppliedForInterimFinancialReport",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2adf7fd8-b034-4fe7-8f94-daa1765acdac": {
    "Id": "A2adf7fd8-b034-4fe7-8f94-daa1765acdac",
    "IdConcepto": "ifrs-full_DescriptionOfNatureAndAmountOfChangeInEstimateDuringFinalInterimPeriod",
    "IdContextoPlantilla": "Acum_Actual",
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