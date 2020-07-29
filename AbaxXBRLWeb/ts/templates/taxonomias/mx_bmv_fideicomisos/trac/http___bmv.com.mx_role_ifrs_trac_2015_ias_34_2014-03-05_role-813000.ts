///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_34_2014-03-05_role-813000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_34_2014_03_05_role_813000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_34_2014_03_05_role_813000
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
  "Ade6c131b-a064-4a52-8d39-5d8031a2d1f0": {
    "Id": "Ade6c131b-a064-4a52-8d39-5d8031a2d1f0",
    "IdConcepto": "ifrs-full_DisclosureOfInterimFinancialReportingExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A16e1595a-90c9-46bd-a29c-eaa900e911eb": {
    "Id": "A16e1595a-90c9-46bd-a29c-eaa900e911eb",
    "IdConcepto": "ifrs-full_DescriptionOfSignificantEventsAndTransactions",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1e1ce320-eaf1-443b-bcd2-977ce9335357": {
    "Id": "A1e1ce320-eaf1-443b-bcd2-977ce9335357",
    "IdConcepto": "ifrs-full_ExplanationOfAccountingPoliciesAndMethodsOfComputationFollowedInInterimFinancialStatements",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A51bef8fa-c3b9-403a-9197-886190846ae7": {
    "Id": "A51bef8fa-c3b9-403a-9197-886190846ae7",
    "IdConcepto": "ifrs-full_ExplanationOfSeasonalityOrCyclicalityOfInterimOperations",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A11929307-463b-4e66-adc2-992cc688709b": {
    "Id": "A11929307-463b-4e66-adc2-992cc688709b",
    "IdConcepto": "ifrs-full_ExplanationOfNatureAndAmountOfItemsAffectingAssetsLiabilitiesEquityNetIncomeOrCashFlowsThatAreUnusualBecauseOfTheirNatureSizeOrIncidence",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A432df3c3-f0d9-4f0f-bb6f-e762a613dd77": {
    "Id": "A432df3c3-f0d9-4f0f-bb6f-e762a613dd77",
    "IdConcepto": "ifrs-full_ExplanationOfNatureAndAmountOfChangesInEstimatesOfAmountsReportedInPriorInterimPeriodsOrPriorFinancialYears",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A90a113a5-787c-4522-b09f-040d82983246": {
    "Id": "A90a113a5-787c-4522-b09f-040d82983246",
    "IdConcepto": "ifrs-full_ExplanationOfIssuancesRepurchasesAndRepaymentsOfDebtAndEquitySecurities",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6e4effb6-7367-479a-a673-9b565178722c": {
    "Id": "A6e4effb6-7367-479a-a673-9b565178722c",
    "IdConcepto": "ifrs-full_ExplanationOfMaterialEventsSubsequentToEndOfInterimPeriodThatHaveNotBeenReflected",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7a4fea1e-ce85-4499-bade-3919dc3d378e": {
    "Id": "A7a4fea1e-ce85-4499-bade-3919dc3d378e",
    "IdConcepto": "ifrs-full_ExplanationOfEffectOfChangesInCompositionOfEntityDuringInterimPeriod",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6b5064ac-a211-4936-bdfa-aa1a94691da1": {
    "Id": "A6b5064ac-a211-4936-bdfa-aa1a94691da1",
    "IdConcepto": "ifrs-full_DescriptionOfComplianceWithIFRSsIfAppliedForInterimFinancialReport",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8c8b90ca-1de6-4c73-8388-da96b4abbaae": {
    "Id": "A8c8b90ca-1de6-4c73-8388-da96b4abbaae",
    "IdConcepto": "ifrs-full_DescriptionOfNatureAndAmountOfChangeInEstimateDuringFinalInterimPeriod",
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