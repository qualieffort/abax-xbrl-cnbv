///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-800500
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_800500 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_800500
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
  "A283cce9d-bd28-4a88-9afd-ab0de73227e6": {
    "Id": "A283cce9d-bd28-4a88-9afd-ab0de73227e6",
    "IdConcepto": "ifrs-full_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A77a467cb-9323-4fba-9836-f77c38d4c7fd": {
    "Id": "A77a467cb-9323-4fba-9836-f77c38d4c7fd",
    "IdConcepto": "ifrs-full_DisclosureOfAccountingJudgementsAndEstimatesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4283c1c3-9088-4b5e-badd-c6f76fb8703f": {
    "Id": "A4283c1c3-9088-4b5e-badd-c6f76fb8703f",
    "IdConcepto": "ifrs-full_DisclosureOfAccruedExpensesAndOtherLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2098affe-a5c0-4d3a-a59b-ff4cc1e8a700": {
    "Id": "A2098affe-a5c0-4d3a-a59b-ff4cc1e8a700",
    "IdConcepto": "ifrs-full_DisclosureOfAllowanceForCreditLossesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9813b21e-77fb-47a4-9b33-0c911744eef7": {
    "Id": "A9813b21e-77fb-47a4-9b33-0c911744eef7",
    "IdConcepto": "ifrs-full_DisclosureOfAuditorsRemunerationExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aaa075026-b236-4f86-b08b-f9873ef0f43d": {
    "Id": "Aaa075026-b236-4f86-b08b-f9873ef0f43d",
    "IdConcepto": "ifrs-full_DisclosureOfAuthorisationOfFinancialStatementsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae0c372c5-06d3-448e-bf83-62c83ff740fe": {
    "Id": "Ae0c372c5-06d3-448e-bf83-62c83ff740fe",
    "IdConcepto": "ifrs-full_DisclosureOfBasisOfPreparationOfFinancialStatementsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A159d6f99-570e-4e3d-b621-6fefa9ee952b": {
    "Id": "A159d6f99-570e-4e3d-b621-6fefa9ee952b",
    "IdConcepto": "ifrs-full_DisclosureOfBiologicalAssetsAndGovernmentGrantsForAgriculturalActivityExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af1e19aa4-e559-429c-b401-b553c0bcafbf": {
    "Id": "Af1e19aa4-e559-429c-b401-b553c0bcafbf",
    "IdConcepto": "ifrs-full_DisclosureOfBorrowingsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A05973678-3366-4497-9caa-3419515fc995": {
    "Id": "A05973678-3366-4497-9caa-3419515fc995",
    "IdConcepto": "ifrs-full_DisclosureOfCashAndBankBalancesAtCentralBanksExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aeaacbdac-46cb-410c-bd32-b60d7c8580a9": {
    "Id": "Aeaacbdac-46cb-410c-bd32-b60d7c8580a9",
    "IdConcepto": "ifrs-full_DisclosureOfCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2835bdb3-b4c3-460a-8c1e-3e5b8f427d75": {
    "Id": "A2835bdb3-b4c3-460a-8c1e-3e5b8f427d75",
    "IdConcepto": "ifrs-full_DisclosureOfCashFlowStatementExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A32f304bb-a4b1-43eb-a162-cdeb89b141b8": {
    "Id": "A32f304bb-a4b1-43eb-a162-cdeb89b141b8",
    "IdConcepto": "ifrs-full_DisclosureOfChangesInAccountingPoliciesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9069f5f5-12b0-47b8-bb74-2f97fd6e8c4e": {
    "Id": "A9069f5f5-12b0-47b8-bb74-2f97fd6e8c4e",
    "IdConcepto": "ifrs-full_DisclosureOfChangesInAccountingPoliciesAccountingEstimatesAndErrorsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8d264af1-ae7b-4544-8ea5-8a55b304ec61": {
    "Id": "A8d264af1-ae7b-4544-8ea5-8a55b304ec61",
    "IdConcepto": "ifrs-full_DisclosureOfCollateralExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adfc21882-c019-49e8-b427-4580c107cd1b": {
    "Id": "Adfc21882-c019-49e8-b427-4580c107cd1b",
    "IdConcepto": "ifrs-full_DisclosureOfClaimsAndBenefitsPaidExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2118504c-6d2c-45f2-8cce-7e3c30d05b6c": {
    "Id": "A2118504c-6d2c-45f2-8cce-7e3c30d05b6c",
    "IdConcepto": "ifrs-full_DisclosureOfCommitmentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad1136100-0f8d-437f-85eb-1052759b0e5a": {
    "Id": "Ad1136100-0f8d-437f-85eb-1052759b0e5a",
    "IdConcepto": "ifrs-full_DisclosureOfCommitmentsAndContingentLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3a08ed4b-afc8-484b-b7f5-12424fa4c094": {
    "Id": "A3a08ed4b-afc8-484b-b7f5-12424fa4c094",
    "IdConcepto": "ifrs-full_DisclosureOfContingentLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A95a6ea51-2e38-4c31-9ad3-066fe8b28142": {
    "Id": "A95a6ea51-2e38-4c31-9ad3-066fe8b28142",
    "IdConcepto": "ifrs-full_DisclosureOfCreditRiskExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad20a5075-c1b3-4de4-bf9c-c80276bb8da1": {
    "Id": "Ad20a5075-c1b3-4de4-bf9c-c80276bb8da1",
    "IdConcepto": "ifrs-full_DisclosureOfDebtSecuritiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3e381ede-0ea8-419f-9542-56fea4578434": {
    "Id": "A3e381ede-0ea8-419f-9542-56fea4578434",
    "IdConcepto": "ifrs-full_DisclosureOfDeferredAcquisitionCostsArisingFromInsuranceContractsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab50c4169-6dc0-46f1-a2cc-4ac2525f625e": {
    "Id": "Ab50c4169-6dc0-46f1-a2cc-4ac2525f625e",
    "IdConcepto": "ifrs-full_DisclosureOfDepositsFromBanksExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac3d3a996-7a38-4cd8-aee9-8a8b96463d6a": {
    "Id": "Ac3d3a996-7a38-4cd8-aee9-8a8b96463d6a",
    "IdConcepto": "ifrs-full_DisclosureOfDerivativeFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A93b51847-81ca-43a3-a391-f22ce7efbc01": {
    "Id": "A93b51847-81ca-43a3-a391-f22ce7efbc01",
    "IdConcepto": "ifrs-full_DisclosureOfEffectOfChangesInForeignExchangeRatesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A636c3cf7-e979-4b1a-9005-8b8ca4486563": {
    "Id": "A636c3cf7-e979-4b1a-9005-8b8ca4486563",
    "IdConcepto": "ifrs-full_DisclosureOfEventsAfterReportingPeriodExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac4e2b750-2320-4630-a4c8-938d9ca7fd67": {
    "Id": "Ac4e2b750-2320-4630-a4c8-938d9ca7fd67",
    "IdConcepto": "ifrs-full_DisclosureOfExpensesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6081200a-541b-4238-895b-6fe7856b5b35": {
    "Id": "A6081200a-541b-4238-895b-6fe7856b5b35",
    "IdConcepto": "ifrs-full_DisclosureOfExpensesByNatureExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A84ce5e19-25b6-48dc-baa0-8b54f891e3b8": {
    "Id": "A84ce5e19-25b6-48dc-baa0-8b54f891e3b8",
    "IdConcepto": "ifrs-full_DisclosureOfExplorationAndEvaluationAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4021c6be-0487-4b2b-b0b5-f88062e3168f": {
    "Id": "A4021c6be-0487-4b2b-b0b5-f88062e3168f",
    "IdConcepto": "ifrs-full_DisclosureOfFairValueMeasurementExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad23b3f75-71f2-4744-910b-a3cb732bf5eb": {
    "Id": "Ad23b3f75-71f2-4744-910b-a3cb732bf5eb",
    "IdConcepto": "ifrs-full_DisclosureOfFairValueOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1af17e03-37d7-4183-ac9d-95d5099771d7": {
    "Id": "A1af17e03-37d7-4183-ac9d-95d5099771d7",
    "IdConcepto": "ifrs-full_DisclosureOfFeeAndCommissionIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0daefcf5-6672-48f7-8b34-ddd2ab8e8dbd": {
    "Id": "A0daefcf5-6672-48f7-8b34-ddd2ab8e8dbd",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceCostExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adae4c597-2bfa-45c2-bc76-0ba4ca62ef6a": {
    "Id": "Adae4c597-2bfa-45c2-bc76-0ba4ca62ef6a",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A12eb5200-a16a-46be-80ff-9e5fb9550208": {
    "Id": "A12eb5200-a16a-46be-80ff-9e5fb9550208",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceIncomeExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7a559b6c-74a5-468e-82ba-a75b35313b7b": {
    "Id": "A7a559b6c-74a5-468e-82ba-a75b35313b7b",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialAssetsHeldForTradingExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad5d1e400-76d0-433c-a209-fb9a8a1e768a": {
    "Id": "Ad5d1e400-76d0-433c-a209-fb9a8a1e768a",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af2bb1d30-341f-41cf-9da3-6249c7012d9a": {
    "Id": "Af2bb1d30-341f-41cf-9da3-6249c7012d9a",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa5261893-8b04-4418-91b0-e66798b0319c": {
    "Id": "Aa5261893-8b04-4418-91b0-e66798b0319c",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsDesignatedAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac49792f3-c373-4556-be0f-07c64de85870": {
    "Id": "Ac49792f3-c373-4556-be0f-07c64de85870",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsHeldForTradingExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A62800927-ef7b-4183-b105-27ccb868f05f": {
    "Id": "A62800927-ef7b-4183-b105-27ccb868f05f",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialLiabilitiesHeldForTradingExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A905f0bf5-d67e-4775-b623-c738346b4671": {
    "Id": "A905f0bf5-d67e-4775-b623-c738346b4671",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialRiskManagementExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aac572b6c-dfed-499b-abee-e8b054129326": {
    "Id": "Aac572b6c-dfed-499b-abee-e8b054129326",
    "IdConcepto": "ifrs-full_DisclosureOfFirstTimeAdoptionExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8dd3102d-91c8-4720-8c2f-36916e738943": {
    "Id": "A8dd3102d-91c8-4720-8c2f-36916e738943",
    "IdConcepto": "ifrs-full_DisclosureOfGeneralAndAdministrativeExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A96752435-af92-45df-bc23-07e4c1991541": {
    "Id": "A96752435-af92-45df-bc23-07e4c1991541",
    "IdConcepto": "ifrs-full_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1c084497-6438-4222-88a2-38a37f0e58ae": {
    "Id": "A1c084497-6438-4222-88a2-38a37f0e58ae",
    "IdConcepto": "ifrs-full_DisclosureOfGoingConcernExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aaa1fcf66-90a5-44ba-b3a2-f92e5580ed88": {
    "Id": "Aaa1fcf66-90a5-44ba-b3a2-f92e5580ed88",
    "IdConcepto": "ifrs-full_DisclosureOfGovernmentGrantsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad5245aaf-3055-4627-a9dd-f75c30d002e6": {
    "Id": "Ad5245aaf-3055-4627-a9dd-f75c30d002e6",
    "IdConcepto": "ifrs-full_DisclosureOfImpairmentOfAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac4f04d81-2f64-4266-9170-c3180a306dbb": {
    "Id": "Ac4f04d81-2f64-4266-9170-c3180a306dbb",
    "IdConcepto": "ifrs-full_DisclosureOfInsuranceContractsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5546ee41-fedf-4965-b7a0-310ef139698d": {
    "Id": "A5546ee41-fedf-4965-b7a0-310ef139698d",
    "IdConcepto": "ifrs-full_DisclosureOfInsurancePremiumRevenueExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab7b655f9-6b50-4cc7-af98-0ed855759215": {
    "Id": "Ab7b655f9-6b50-4cc7-af98-0ed855759215",
    "IdConcepto": "ifrs-full_DisclosureOfInterestExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aeb90133c-cfa0-44d9-9c8d-360fd1dbd4b8": {
    "Id": "Aeb90133c-cfa0-44d9-9c8d-360fd1dbd4b8",
    "IdConcepto": "ifrs-full_DisclosureOfInterestIncomeExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A94488346-d78f-464f-8a7d-ec44b2126e85": {
    "Id": "A94488346-d78f-464f-8a7d-ec44b2126e85",
    "IdConcepto": "ifrs-full_DisclosureOfInterestIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab4a3ed05-b50e-45cb-b6b8-bdd88c4499d8": {
    "Id": "Ab4a3ed05-b50e-45cb-b6b8-bdd88c4499d8",
    "IdConcepto": "ifrs-full_DisclosureOfInvestmentContractsLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa907a4e1-a810-4830-9523-33801df62107": {
    "Id": "Aa907a4e1-a810-4830-9523-33801df62107",
    "IdConcepto": "ifrs-full_DisclosureOfIssuedCapitalExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A84f8f401-a64c-48e6-a707-7de50ea9e485": {
    "Id": "A84f8f401-a64c-48e6-a707-7de50ea9e485",
    "IdConcepto": "ifrs-full_DisclosureOfLiquidityRiskExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afeeef924-cde1-4010-80cc-1eddf00c9b28": {
    "Id": "Afeeef924-cde1-4010-80cc-1eddf00c9b28",
    "IdConcepto": "ifrs-full_DisclosureOfLoansAndAdvancesToBanksExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A39ab45cf-d8c7-4e4e-a9cd-dfcfcf724592": {
    "Id": "A39ab45cf-d8c7-4e4e-a9cd-dfcfcf724592",
    "IdConcepto": "ifrs-full_DisclosureOfMarketRiskExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac07d3fc0-2a7a-44ff-a021-5cb41f4424ed": {
    "Id": "Ac07d3fc0-2a7a-44ff-a021-5cb41f4424ed",
    "IdConcepto": "ifrs-full_DisclosureOfNetAssetValueAttributableToUnitholdersExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A95e3a97e-8703-4da4-94b1-128dd4bba217": {
    "Id": "A95e3a97e-8703-4da4-94b1-128dd4bba217",
    "IdConcepto": "ifrs-full_DisclosureOfObjectivesPoliciesAndProcessesForManagingCapitalExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afa3d3ca3-af7b-4abb-89fb-5f3cf0260557": {
    "Id": "Afa3d3ca3-af7b-4abb-89fb-5f3cf0260557",
    "IdConcepto": "ifrs-full_DisclosureOfOtherAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2520d3c6-1941-45cf-b1f3-c31cb83f27b1": {
    "Id": "A2520d3c6-1941-45cf-b1f3-c31cb83f27b1",
    "IdConcepto": "ifrs-full_DisclosureOfOtherCurrentAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af95afdb2-0f8c-4ce2-816a-fede43b84e35": {
    "Id": "Af95afdb2-0f8c-4ce2-816a-fede43b84e35",
    "IdConcepto": "ifrs-full_DisclosureOfOtherCurrentLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abd5e6aa8-e1ed-45e9-968c-1290895ada64": {
    "Id": "Abd5e6aa8-e1ed-45e9-968c-1290895ada64",
    "IdConcepto": "ifrs-full_DisclosureOfOtherLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad567db43-b515-45cc-982d-2d14575ecd8c": {
    "Id": "Ad567db43-b515-45cc-982d-2d14575ecd8c",
    "IdConcepto": "ifrs-full_DisclosureOfOtherNoncurrentAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A00c5cb5d-5d27-468e-af04-53cb24b12c66": {
    "Id": "A00c5cb5d-5d27-468e-af04-53cb24b12c66",
    "IdConcepto": "ifrs-full_DisclosureOfOtherNoncurrentLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8e1f38a5-3f5d-4ba8-afc9-c7ffb42c318f": {
    "Id": "A8e1f38a5-3f5d-4ba8-afc9-c7ffb42c318f",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A31f52ea0-b2b5-477d-aee9-3012d37b4b88": {
    "Id": "A31f52ea0-b2b5-477d-aee9-3012d37b4b88",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingIncomeExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2019588e-a106-4bb4-bf75-d2070542b652": {
    "Id": "A2019588e-a106-4bb4-bf75-d2070542b652",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingIncomeExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aee600c3d-17a9-47f6-bbec-6532f8fdb8a4": {
    "Id": "Aee600c3d-17a9-47f6-bbec-6532f8fdb8a4",
    "IdConcepto": "ifrs-full_DisclosureOfPrepaymentsAndOtherAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad0d85ae9-4cb7-4bfb-b349-050b945a197d": {
    "Id": "Ad0d85ae9-4cb7-4bfb-b349-050b945a197d",
    "IdConcepto": "ifrs-full_DisclosureOfProfitLossFromOperatingActivitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A89157972-e7d0-4339-b75c-cebf21acbed6": {
    "Id": "A89157972-e7d0-4339-b75c-cebf21acbed6",
    "IdConcepto": "ifrs-full_DisclosureOfProvisionsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7966c1d9-3e66-4b4c-bac1-5597199e275a": {
    "Id": "A7966c1d9-3e66-4b4c-bac1-5597199e275a",
    "IdConcepto": "ifrs-full_DisclosureOfReclassificationOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7f0437d4-14af-4f97-a0e7-e4d02f5119f9": {
    "Id": "A7f0437d4-14af-4f97-a0e7-e4d02f5119f9",
    "IdConcepto": "ifrs-full_DisclosureOfRecognisedRevenueFromConstructionContractsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1bb7d067-f0c6-42f2-9bf0-caed83ecbbce": {
    "Id": "A1bb7d067-f0c6-42f2-9bf0-caed83ecbbce",
    "IdConcepto": "ifrs-full_DisclosureOfReinsuranceExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aaafa02d8-3033-4007-a381-1a66a5a223cd": {
    "Id": "Aaafa02d8-3033-4007-a381-1a66a5a223cd",
    "IdConcepto": "ifrs-full_DisclosureOfReservesAndOtherEquityInterestExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7faa6ab8-354c-4553-90ee-2136b7a8256d": {
    "Id": "A7faa6ab8-354c-4553-90ee-2136b7a8256d",
    "IdConcepto": "ifrs-full_DisclosureOfRestrictedCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae4b4da66-a6cd-44e2-b67b-d541f8b2e0cd": {
    "Id": "Ae4b4da66-a6cd-44e2-b67b-d541f8b2e0cd",
    "IdConcepto": "ifrs-full_DisclosureOfRevenueExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7cd4295f-4130-4f4b-a7ba-833bc781bb79": {
    "Id": "A7cd4295f-4130-4f4b-a7ba-833bc781bb79",
    "IdConcepto": "ifrs-full_DisclosureOfServiceConcessionArrangementsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adf6700cc-9b1f-45e7-9c09-74b2055c4264": {
    "Id": "Adf6700cc-9b1f-45e7-9c09-74b2055c4264",
    "IdConcepto": "ifrs-full_DisclosureOfShareCapitalReservesAndOtherEquityInterestExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae8cd21c4-2092-48a8-8eb8-ab6ee0c9e8c5": {
    "Id": "Ae8cd21c4-2092-48a8-8eb8-ab6ee0c9e8c5",
    "IdConcepto": "ifrs-full_DisclosureOfSubordinatedLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af4788dfb-458b-465b-b1bb-399f72bb547a": {
    "Id": "Af4788dfb-458b-465b-b1bb-399f72bb547a",
    "IdConcepto": "ifrs-full_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A49746440-187c-4b9a-8e3f-c30a3af9bc04": {
    "Id": "A49746440-187c-4b9a-8e3f-c30a3af9bc04",
    "IdConcepto": "ifrs-full_DisclosureOfTradeAndOtherPayablesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af3ae93f1-30a6-42ef-b26c-2ed23af26eeb": {
    "Id": "Af3ae93f1-30a6-42ef-b26c-2ed23af26eeb",
    "IdConcepto": "ifrs-full_DisclosureOfTradeAndOtherReceivablesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae5017df2-3e5a-42b1-9f23-fc0b77f4c8f5": {
    "Id": "Ae5017df2-3e5a-42b1-9f23-fc0b77f4c8f5",
    "IdConcepto": "ifrs-full_DisclosureOfTradingIncomeExpenseExplanatory",
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