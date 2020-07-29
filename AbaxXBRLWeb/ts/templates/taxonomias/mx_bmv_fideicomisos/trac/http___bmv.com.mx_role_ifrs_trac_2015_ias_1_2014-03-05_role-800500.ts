///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-800500
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_800500 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_800500
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
  "A2af0234a-cbfb-42af-90d0-88fe018d7c8b": {
    "Id": "A2af0234a-cbfb-42af-90d0-88fe018d7c8b",
    "IdConcepto": "ifrs-full_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac4b882bf-142e-4093-a913-ad1dcff293dd": {
    "Id": "Ac4b882bf-142e-4093-a913-ad1dcff293dd",
    "IdConcepto": "ifrs-full_DisclosureOfAccountingJudgementsAndEstimatesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3a06ac19-d5bd-4db6-9213-945aeb05585e": {
    "Id": "A3a06ac19-d5bd-4db6-9213-945aeb05585e",
    "IdConcepto": "ifrs-full_DisclosureOfAccruedExpensesAndOtherLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af0077135-ca14-491b-89d5-df145ffc1663": {
    "Id": "Af0077135-ca14-491b-89d5-df145ffc1663",
    "IdConcepto": "ifrs-full_DisclosureOfAllowanceForCreditLossesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A21a0c60b-2c15-430f-9313-2b77af94b20e": {
    "Id": "A21a0c60b-2c15-430f-9313-2b77af94b20e",
    "IdConcepto": "ifrs-full_DisclosureOfAuditorsRemunerationExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3b280016-1881-4bd1-baf3-9c7266e331d6": {
    "Id": "A3b280016-1881-4bd1-baf3-9c7266e331d6",
    "IdConcepto": "ifrs-full_DisclosureOfAuthorisationOfFinancialStatementsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aed6970ed-8e63-4ca4-a131-6c388062d0af": {
    "Id": "Aed6970ed-8e63-4ca4-a131-6c388062d0af",
    "IdConcepto": "ifrs-full_DisclosureOfBasisOfPreparationOfFinancialStatementsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9cf010f5-6949-4df4-bdc2-bb2ea73238f4": {
    "Id": "A9cf010f5-6949-4df4-bdc2-bb2ea73238f4",
    "IdConcepto": "ifrs-full_DisclosureOfBorrowingsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A20e93f13-c87d-44e8-81b5-830dd65832e1": {
    "Id": "A20e93f13-c87d-44e8-81b5-830dd65832e1",
    "IdConcepto": "ifrs-full_DisclosureOfCashAndBankBalancesAtCentralBanksExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aadb71cf9-f863-4520-b922-01d46cacf497": {
    "Id": "Aadb71cf9-f863-4520-b922-01d46cacf497",
    "IdConcepto": "ifrs-full_DisclosureOfCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2b9e5e3f-68d2-4770-b1f9-5a1e2b2ffd58": {
    "Id": "A2b9e5e3f-68d2-4770-b1f9-5a1e2b2ffd58",
    "IdConcepto": "ifrs-full_DisclosureOfCashFlowStatementExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A66b2c4e6-b6ed-4a64-8195-bd9633209209": {
    "Id": "A66b2c4e6-b6ed-4a64-8195-bd9633209209",
    "IdConcepto": "ifrs-full_DisclosureOfChangesInAccountingPoliciesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3c43695c-9c13-4b91-9fe6-b58eee76af4e": {
    "Id": "A3c43695c-9c13-4b91-9fe6-b58eee76af4e",
    "IdConcepto": "ifrs-full_DisclosureOfChangesInAccountingPoliciesAccountingEstimatesAndErrorsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acd3405b7-77cf-4595-a986-948e5466e69d": {
    "Id": "Acd3405b7-77cf-4595-a986-948e5466e69d",
    "IdConcepto": "ifrs-full_DisclosureOfCollateralExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A661c8021-bd05-4c20-953d-254c8d870bd3": {
    "Id": "A661c8021-bd05-4c20-953d-254c8d870bd3",
    "IdConcepto": "ifrs-full_DisclosureOfClaimsAndBenefitsPaidExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1e510024-48cb-46fa-8f94-f95dd6ec0d69": {
    "Id": "A1e510024-48cb-46fa-8f94-f95dd6ec0d69",
    "IdConcepto": "ifrs-full_DisclosureOfCommitmentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac7384f65-2cfd-499d-858e-39431b9371be": {
    "Id": "Ac7384f65-2cfd-499d-858e-39431b9371be",
    "IdConcepto": "ifrs-full_DisclosureOfCommitmentsAndContingentLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A180b2df8-ec63-4796-af1b-4986796e964c": {
    "Id": "A180b2df8-ec63-4796-af1b-4986796e964c",
    "IdConcepto": "ifrs-full_DisclosureOfContingentLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A907c44bc-2d50-42b8-8128-910e07e4287a": {
    "Id": "A907c44bc-2d50-42b8-8128-910e07e4287a",
    "IdConcepto": "ifrs-full_DisclosureOfCreditRiskExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A62c1c32f-118a-4648-99c5-61f10fd4c1c4": {
    "Id": "A62c1c32f-118a-4648-99c5-61f10fd4c1c4",
    "IdConcepto": "ifrs-full_DisclosureOfDebtSecuritiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa2259196-db66-439a-b8be-53f4977f435c": {
    "Id": "Aa2259196-db66-439a-b8be-53f4977f435c",
    "IdConcepto": "ifrs-full_DisclosureOfDeferredAcquisitionCostsArisingFromInsuranceContractsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7a142046-d665-4a1b-b6f9-cb38270ebb43": {
    "Id": "A7a142046-d665-4a1b-b6f9-cb38270ebb43",
    "IdConcepto": "ifrs-full_DisclosureOfDepositsFromBanksExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1a8965fd-50b8-41af-aa4d-0d67afa5e30b": {
    "Id": "A1a8965fd-50b8-41af-aa4d-0d67afa5e30b",
    "IdConcepto": "ifrs-full_DisclosureOfDerivativeFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A24445a2e-6ee1-4456-a7c2-7675afb6dcd0": {
    "Id": "A24445a2e-6ee1-4456-a7c2-7675afb6dcd0",
    "IdConcepto": "ifrs-full_DisclosureOfDividendsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae8440963-25bb-40d7-9955-9cc3c0067fc5": {
    "Id": "Ae8440963-25bb-40d7-9955-9cc3c0067fc5",
    "IdConcepto": "ifrs-full_DisclosureOfEffectOfChangesInForeignExchangeRatesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6e466dbf-8aa3-4209-8bb8-c61928c35959": {
    "Id": "A6e466dbf-8aa3-4209-8bb8-c61928c35959",
    "IdConcepto": "ifrs-full_DisclosureOfEventsAfterReportingPeriodExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ace3829d2-fa7b-496c-abfa-9a801478b6c0": {
    "Id": "Ace3829d2-fa7b-496c-abfa-9a801478b6c0",
    "IdConcepto": "ifrs-full_DisclosureOfExpensesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7dbed4e9-2f2a-4243-9ecc-653f867d2295": {
    "Id": "A7dbed4e9-2f2a-4243-9ecc-653f867d2295",
    "IdConcepto": "ifrs-full_DisclosureOfExpensesByNatureExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aba8ebe9e-b30b-445a-80e5-911bab339c61": {
    "Id": "Aba8ebe9e-b30b-445a-80e5-911bab339c61",
    "IdConcepto": "ifrs-full_DisclosureOfExplorationAndEvaluationAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2d1f6769-8a27-4811-81f2-603862cb6da6": {
    "Id": "A2d1f6769-8a27-4811-81f2-603862cb6da6",
    "IdConcepto": "ifrs-full_DisclosureOfFairValueMeasurementExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abc193f36-30cd-489d-8032-5a1825ddb1d3": {
    "Id": "Abc193f36-30cd-489d-8032-5a1825ddb1d3",
    "IdConcepto": "ifrs-full_DisclosureOfFairValueOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af902f321-a124-4417-85df-abfa2b45d282": {
    "Id": "Af902f321-a124-4417-85df-abfa2b45d282",
    "IdConcepto": "ifrs-full_DisclosureOfFeeAndCommissionIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af9b9df6a-0b16-41c7-9312-52c609bcfe9e": {
    "Id": "Af9b9df6a-0b16-41c7-9312-52c609bcfe9e",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceCostExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aee1f8e0a-48e8-40db-8641-b9fd2b5d357e": {
    "Id": "Aee1f8e0a-48e8-40db-8641-b9fd2b5d357e",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6dd973dd-5bfd-48e5-91f1-0a5582c7d108": {
    "Id": "A6dd973dd-5bfd-48e5-91f1-0a5582c7d108",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceIncomeExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8955280b-6b8d-42b2-a206-0d948a69a50d": {
    "Id": "A8955280b-6b8d-42b2-a206-0d948a69a50d",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialAssetsHeldForTradingExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A795de1a5-f5a1-46f1-8367-5c501ca964da": {
    "Id": "A795de1a5-f5a1-46f1-8367-5c501ca964da",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A897d970c-d782-4ea9-af6d-8d0f2c79710e": {
    "Id": "A897d970c-d782-4ea9-af6d-8d0f2c79710e",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af4346b88-fd1b-4c92-a472-637ab2668f85": {
    "Id": "Af4346b88-fd1b-4c92-a472-637ab2668f85",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsDesignatedAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A349562f1-ffce-490b-8911-841aca43c293": {
    "Id": "A349562f1-ffce-490b-8911-841aca43c293",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsHeldForTradingExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af146a1ee-1d15-4c13-9742-99bd429de786": {
    "Id": "Af146a1ee-1d15-4c13-9742-99bd429de786",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialLiabilitiesHeldForTradingExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af4408416-0b03-4074-ad2c-6c74ad1750ec": {
    "Id": "Af4408416-0b03-4074-ad2c-6c74ad1750ec",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialRiskManagementExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8c9bee18-d88c-4386-9ef6-c91fc36274ea": {
    "Id": "A8c9bee18-d88c-4386-9ef6-c91fc36274ea",
    "IdConcepto": "ifrs-full_DisclosureOfFirstTimeAdoptionExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A13700910-8ba7-4daa-807a-cb083f072e1a": {
    "Id": "A13700910-8ba7-4daa-807a-cb083f072e1a",
    "IdConcepto": "ifrs-full_DisclosureOfGeneralAndAdministrativeExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A94cec5de-ead2-4484-ba2a-7c2351d5dff9": {
    "Id": "A94cec5de-ead2-4484-ba2a-7c2351d5dff9",
    "IdConcepto": "ifrs-full_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5a145ee7-3a22-477e-b3b0-c76b0e401c62": {
    "Id": "A5a145ee7-3a22-477e-b3b0-c76b0e401c62",
    "IdConcepto": "ifrs-full_DisclosureOfGoingConcernExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab09131e0-f1f0-4684-af1a-551ecd6f6a50": {
    "Id": "Ab09131e0-f1f0-4684-af1a-551ecd6f6a50",
    "IdConcepto": "ifrs-full_DisclosureOfImpairmentOfAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A51c3e349-0dfe-4725-884e-786e9701be7a": {
    "Id": "A51c3e349-0dfe-4725-884e-786e9701be7a",
    "IdConcepto": "ifrs-full_DisclosureOfInsuranceContractsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A18f63713-c388-4287-8fb7-b322a2561d83": {
    "Id": "A18f63713-c388-4287-8fb7-b322a2561d83",
    "IdConcepto": "ifrs-full_DisclosureOfInsurancePremiumRevenueExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A71d04c8e-4ccc-4878-b517-33a3183b5f33": {
    "Id": "A71d04c8e-4ccc-4878-b517-33a3183b5f33",
    "IdConcepto": "ifrs-full_DisclosureOfInterestExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abf21036a-a14c-4487-b4ca-646ccbdf33fb": {
    "Id": "Abf21036a-a14c-4487-b4ca-646ccbdf33fb",
    "IdConcepto": "ifrs-full_DisclosureOfInterestIncomeExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A75285bea-efee-4f50-a646-2268c4e93966": {
    "Id": "A75285bea-efee-4f50-a646-2268c4e93966",
    "IdConcepto": "ifrs-full_DisclosureOfInterestIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A39792150-9704-4b5b-8877-54bf3ca272d6": {
    "Id": "A39792150-9704-4b5b-8877-54bf3ca272d6",
    "IdConcepto": "ifrs-full_DisclosureOfInvestmentContractsLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5c8b3d41-4ddd-4b35-b9bc-8f7d67578cd2": {
    "Id": "A5c8b3d41-4ddd-4b35-b9bc-8f7d67578cd2",
    "IdConcepto": "ifrs-full_DisclosureOfIssuedCapitalExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A52079c4d-510c-434f-90a4-7ca864a9b067": {
    "Id": "A52079c4d-510c-434f-90a4-7ca864a9b067",
    "IdConcepto": "ifrs-full_DisclosureOfLiquidityRiskExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A753a8dc8-56ae-4641-a028-2716a7c5b9f6": {
    "Id": "A753a8dc8-56ae-4641-a028-2716a7c5b9f6",
    "IdConcepto": "ifrs-full_DisclosureOfLoansAndAdvancesToBanksExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6f2bb33c-94b8-4f47-ac79-0af4ecd7a295": {
    "Id": "A6f2bb33c-94b8-4f47-ac79-0af4ecd7a295",
    "IdConcepto": "ifrs-full_DisclosureOfMarketRiskExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A44055c03-a1ea-4dda-ad50-5adaba8d8fd5": {
    "Id": "A44055c03-a1ea-4dda-ad50-5adaba8d8fd5",
    "IdConcepto": "ifrs-full_DisclosureOfNetAssetValueAttributableToUnitholdersExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aace4e2b8-5a8b-4c80-b160-3f1ed1baa911": {
    "Id": "Aace4e2b8-5a8b-4c80-b160-3f1ed1baa911",
    "IdConcepto": "ifrs-full_DisclosureOfOtherAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2b4bb631-bef4-4042-9b67-243b1d57c56e": {
    "Id": "A2b4bb631-bef4-4042-9b67-243b1d57c56e",
    "IdConcepto": "ifrs-full_DisclosureOfOtherCurrentAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afe26e364-a1c8-4131-b9db-38c19842fa3a": {
    "Id": "Afe26e364-a1c8-4131-b9db-38c19842fa3a",
    "IdConcepto": "ifrs-full_DisclosureOfOtherCurrentLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A97f49ac5-86df-43a6-957a-5deb80d3b521": {
    "Id": "A97f49ac5-86df-43a6-957a-5deb80d3b521",
    "IdConcepto": "ifrs-full_DisclosureOfOtherLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A81b1a5e8-0b13-492c-9ee9-1afccaa62c12": {
    "Id": "A81b1a5e8-0b13-492c-9ee9-1afccaa62c12",
    "IdConcepto": "ifrs-full_DisclosureOfOtherNoncurrentAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5f1f2ab4-ce60-443d-a7d8-eef097750ed2": {
    "Id": "A5f1f2ab4-ce60-443d-a7d8-eef097750ed2",
    "IdConcepto": "ifrs-full_DisclosureOfOtherNoncurrentLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa6fa040b-ad79-4bc4-93c6-cf7c0d1f371c": {
    "Id": "Aa6fa040b-ad79-4bc4-93c6-cf7c0d1f371c",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A40fed09f-ade7-4bdd-9939-973b6d55532e": {
    "Id": "A40fed09f-ade7-4bdd-9939-973b6d55532e",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abbcccac9-eb2a-4d1a-81af-c187328264cf": {
    "Id": "Abbcccac9-eb2a-4d1a-81af-c187328264cf",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingIncomeExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A633246c5-363c-4efe-86cf-8cb1b60c5340": {
    "Id": "A633246c5-363c-4efe-86cf-8cb1b60c5340",
    "IdConcepto": "ifrs-full_DisclosureOfPrepaymentsAndOtherAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2531dbc0-4fce-4149-b31b-424b6bb28a00": {
    "Id": "A2531dbc0-4fce-4149-b31b-424b6bb28a00",
    "IdConcepto": "ifrs-full_DisclosureOfProfitLossFromOperatingActivitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad72b070b-34c5-4fd6-81df-712ccf55a11f": {
    "Id": "Ad72b070b-34c5-4fd6-81df-712ccf55a11f",
    "IdConcepto": "ifrs-full_DisclosureOfProvisionsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9f2da918-6253-480a-9e15-ef9694975345": {
    "Id": "A9f2da918-6253-480a-9e15-ef9694975345",
    "IdConcepto": "ifrs-full_DisclosureOfReclassificationOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aaeef37e3-bde5-429f-a82c-f9d645bc26d7": {
    "Id": "Aaeef37e3-bde5-429f-a82c-f9d645bc26d7",
    "IdConcepto": "ifrs-full_DisclosureOfRecognisedRevenueFromConstructionContractsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A562052dd-6054-4071-898d-42bbf5275597": {
    "Id": "A562052dd-6054-4071-898d-42bbf5275597",
    "IdConcepto": "ifrs-full_DisclosureOfReinsuranceExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A790478e8-bc19-496c-92c1-df59af8eeaab": {
    "Id": "A790478e8-bc19-496c-92c1-df59af8eeaab",
    "IdConcepto": "ifrs-full_DisclosureOfReservesAndOtherEquityInterestExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A38a890d0-f398-4916-92b5-249ed50cb737": {
    "Id": "A38a890d0-f398-4916-92b5-249ed50cb737",
    "IdConcepto": "ifrs-full_DisclosureOfRestrictedCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A86da97f3-522b-4cda-83eb-36059515bba8": {
    "Id": "A86da97f3-522b-4cda-83eb-36059515bba8",
    "IdConcepto": "ifrs-full_DisclosureOfRevenueExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2932a37c-30a5-46e5-8827-63e2f41046e7": {
    "Id": "A2932a37c-30a5-46e5-8827-63e2f41046e7",
    "IdConcepto": "ifrs-full_DisclosureOfServiceConcessionArrangementsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aad315d17-3318-4d9d-a59d-6bd2c6650817": {
    "Id": "Aad315d17-3318-4d9d-a59d-6bd2c6650817",
    "IdConcepto": "ifrs-full_DisclosureOfShareCapitalReservesAndOtherEquityInterestExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1856c1d6-ae03-415e-ac5d-b6069c8d26f6": {
    "Id": "A1856c1d6-ae03-415e-ac5d-b6069c8d26f6",
    "IdConcepto": "ifrs-full_DisclosureOfSubordinatedLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af0ec6674-0ca6-4e45-aa9e-fb72144d0ffc": {
    "Id": "Af0ec6674-0ca6-4e45-aa9e-fb72144d0ffc",
    "IdConcepto": "ifrs-full_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A690b5971-8353-455b-bac7-68c3f107ebd1": {
    "Id": "A690b5971-8353-455b-bac7-68c3f107ebd1",
    "IdConcepto": "ifrs-full_DisclosureOfTaxReceivablesAndPayablesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae6cdb7f2-65c7-42eb-8dfa-12b0f2ec66d6": {
    "Id": "Ae6cdb7f2-65c7-42eb-8dfa-12b0f2ec66d6",
    "IdConcepto": "ifrs-full_DisclosureOfTradeAndOtherPayablesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A087b6274-10a6-4a77-bdd7-1b50f226b091": {
    "Id": "A087b6274-10a6-4a77-bdd7-1b50f226b091",
    "IdConcepto": "ifrs-full_DisclosureOfTradeAndOtherReceivablesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7338a3cd-d88e-478c-8bae-79bacb9584d9": {
    "Id": "A7338a3cd-d88e-478c-8bae-79bacb9584d9",
    "IdConcepto": "ifrs-full_DisclosureOfTradingIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abe9e3946-4465-491a-bf79-6dc48f4552bb": {
    "Id": "Abe9e3946-4465-491a-bf79-6dc48f4552bb",
    "IdConcepto": "mx_trac_FinancialAssetsAndLiabilitiesAtFairValueThroughProfitOrLoss",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2d5828cd-0ca2-4a11-9bc4-0c9b82d6afe3": {
    "Id": "A2d5828cd-0ca2-4a11-9bc4-0c9b82d6afe3",
    "IdConcepto": "mx_trac_MemorandumAccounts",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa1c7fc6f-56fb-4d8a-8962-9373c56c4212": {
    "Id": "Aa1c7fc6f-56fb-4d8a-8962-9373c56c4212",
    "IdConcepto": "mx_trac_DisclosureOfDistributionsPaid",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac8e6e8ae-4dd7-42c3-8aa6-cb556409a36e": {
    "Id": "Ac8e6e8ae-4dd7-42c3-8aa6-cb556409a36e",
    "IdConcepto": "mx_trac_InvestmentsForTradingShares",
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