///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ccd/2015/ias_1_2014-03-05_role-800600
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_800600 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_800600
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
  "Ab7199429-dc78-4d78-aec8-a7463128a554": {
    "Id": "Ab7199429-dc78-4d78-aec8-a7463128a554",
    "IdConcepto": "ifrs-full_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae9204804-7944-4674-956b-9d4ed93914b8": {
    "Id": "Ae9204804-7944-4674-956b-9d4ed93914b8",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForAvailableforsaleFinancialAssetsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adaae2e75-09aa-4689-9dba-72acdb44e697": {
    "Id": "Adaae2e75-09aa-4689-9dba-72acdb44e697",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBorrowingCostsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0f7d087c-32e9-4e51-9147-3f63689a0f18": {
    "Id": "A0f7d087c-32e9-4e51-9147-3f63689a0f18",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBorrowingsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A990d9830-5d3e-48e2-82c2-5367f2d1c3ed": {
    "Id": "A990d9830-5d3e-48e2-82c2-5367f2d1c3ed",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForCashFlowsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A196c3e70-9106-4171-b3c0-ee34713d7bba": {
    "Id": "A196c3e70-9106-4171-b3c0-ee34713d7bba",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForConstructionInProgressExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3cf01dd0-8272-4864-8eec-dd1320114a82": {
    "Id": "A3cf01dd0-8272-4864-8eec-dd1320114a82",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForCustomerAcquisitionCostsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3d28eba0-441e-4910-a0db-2e1e7de297e3": {
    "Id": "A3d28eba0-441e-4910-a0db-2e1e7de297e3",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDecommissioningRestorationAndRehabilitationProvisionsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A68d23ebf-4b0b-4684-84f8-e21cd42fcbe0": {
    "Id": "A68d23ebf-4b0b-4684-84f8-e21cd42fcbe0",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDeferredAcquisitionCostsArisingFromInsuranceContractsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab6c278d7-f7c4-4126-9866-54ef1826c6f6": {
    "Id": "Ab6c278d7-f7c4-4126-9866-54ef1826c6f6",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDepreciationExpenseExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A82703c01-00f6-4bad-abca-3bec85400479": {
    "Id": "A82703c01-00f6-4bad-abca-3bec85400479",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerecognitionOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A72164a76-68d5-4996-9d10-096fd9f371fa": {
    "Id": "A72164a76-68d5-4996-9d10-096fd9f371fa",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerivativeFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae1a0392e-ff1c-4085-b47a-812aeae0b870": {
    "Id": "Ae1a0392e-ff1c-4085-b47a-812aeae0b870",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerivativeFinancialInstrumentsAndHedgingExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A652c79b1-48db-44cb-8965-8844727c5cf0": {
    "Id": "A652c79b1-48db-44cb-8965-8844727c5cf0",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyToDetermineComponentsOfCashAndCashEquivalents",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adf42fedb-2566-40de-9a8d-66030862fc9e": {
    "Id": "Adf42fedb-2566-40de-9a8d-66030862fc9e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDiscontinuedOperationsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aab63e27a-ed38-480d-920b-35a85b43b35d": {
    "Id": "Aab63e27a-ed38-480d-920b-35a85b43b35d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDividendsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A638a6d45-9420-491a-be68-17dddcc5c83e": {
    "Id": "A638a6d45-9420-491a-be68-17dddcc5c83e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForEnvironmentRelatedExpenseExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab8b66a31-565c-4966-8265-d58c99ac921d": {
    "Id": "Ab8b66a31-565c-4966-8265-d58c99ac921d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForExpensesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A736e8ceb-1b21-4039-9fae-c1287af5bb7d": {
    "Id": "A736e8ceb-1b21-4039-9fae-c1287af5bb7d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForExplorationAndEvaluationExpenditures",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1ee9c5e9-18ca-4934-8c19-1f0e969f98e6": {
    "Id": "A1ee9c5e9-18ca-4934-8c19-1f0e969f98e6",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFairValueMeasurementExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abff7e522-5a46-4d39-8672-6df9977ca613": {
    "Id": "Abff7e522-5a46-4d39-8672-6df9977ca613",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFeeAndCommissionIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad0890632-f00b-4023-a449-5862db380fbe": {
    "Id": "Ad0890632-f00b-4023-a449-5862db380fbe",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinanceCostsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5a887b94-80d1-4599-8608-521315081814": {
    "Id": "A5a887b94-80d1-4599-8608-521315081814",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinanceIncomeAndCostsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A18c8165a-0e8f-4a6a-a3a4-79d259ca1d43": {
    "Id": "A18c8165a-0e8f-4a6a-a3a4-79d259ca1d43",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialAssetsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4cbd26eb-1e60-4556-a729-c6b9b76e46dc": {
    "Id": "A4cbd26eb-1e60-4556-a729-c6b9b76e46dc",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialGuaranteesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A973c8dc3-cd0c-4dea-91d1-5daea97787f4": {
    "Id": "A973c8dc3-cd0c-4dea-91d1-5daea97787f4",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A897ede93-7dd8-4ca9-a491-4fac293a3ff7": {
    "Id": "A897ede93-7dd8-4ca9-a491-4fac293a3ff7",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialInstrumentsAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A34febb02-9e7e-4dc8-b154-56a1516d841c": {
    "Id": "A34febb02-9e7e-4dc8-b154-56a1516d841c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialLiabilitiesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0440d6d5-af09-4f65-84ed-3aab382344aa": {
    "Id": "A0440d6d5-af09-4f65-84ed-3aab382344aa",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForForeignCurrencyTranslationExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac236571f-ed19-4afe-bfbb-5bc46a1b6f68": {
    "Id": "Ac236571f-ed19-4afe-bfbb-5bc46a1b6f68",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFunctionalCurrencyExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4d187fd6-1606-40a6-8b0b-6ebba3e68da7": {
    "Id": "A4d187fd6-1606-40a6-8b0b-6ebba3e68da7",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForGoodwillExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A46ed2788-627c-4828-96f4-2617a6582b73": {
    "Id": "A46ed2788-627c-4828-96f4-2617a6582b73",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForHedgingExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa8b1af68-8b96-4ca1-b75f-2bc370d2cb8e": {
    "Id": "Aa8b1af68-8b96-4ca1-b75f-2bc370d2cb8e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForHeldtomaturityInvestmentsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A84324ef3-735f-47e0-ad9f-53c4fddbd26d": {
    "Id": "A84324ef3-735f-47e0-ad9f-53c4fddbd26d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfAssetsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A641d21c7-e7dd-404b-b989-93d9626768e4": {
    "Id": "A641d21c7-e7dd-404b-b989-93d9626768e4",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfFinancialAssetsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae5c2af55-e17e-46b3-abb6-3f7d91369073": {
    "Id": "Ae5c2af55-e17e-46b3-abb6-3f7d91369073",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfNonfinancialAssetsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af62ca59b-f736-4876-97e1-15a4ef4f03e9": {
    "Id": "Af62ca59b-f736-4876-97e1-15a4ef4f03e9",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIncomeTaxExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9f582212-3b99-4916-a474-0ff5780ebd80": {
    "Id": "A9f582212-3b99-4916-a474-0ff5780ebd80",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInsuranceContracts",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4686cf56-5abf-4976-82fa-9b43254fe56d": {
    "Id": "A4686cf56-5abf-4976-82fa-9b43254fe56d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIntangibleAssetsAndGoodwillExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac13e13bd-cf26-44ad-b20a-f06b03fcd06f": {
    "Id": "Ac13e13bd-cf26-44ad-b20a-f06b03fcd06f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIntangibleAssetsOtherThanGoodwillExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac6ee8f24-1515-418c-a045-5f6b4679414e": {
    "Id": "Ac6ee8f24-1515-418c-a045-5f6b4679414e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInterestIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aae5baaaa-6834-41e2-8ac9-9ccbec501529": {
    "Id": "Aae5baaaa-6834-41e2-8ac9-9ccbec501529",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentInAssociates",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad8fe6b5d-367c-4543-95ab-6aa11291c6bc": {
    "Id": "Ad8fe6b5d-367c-4543-95ab-6aa11291c6bc",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentInAssociatesAndJointVenturesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad61936c7-f493-40cf-bf5a-821d96ef7219": {
    "Id": "Ad61936c7-f493-40cf-bf5a-821d96ef7219",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentsInJointVentures",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4b2c9acb-23d5-4b57-8360-737913c5e2e7": {
    "Id": "A4b2c9acb-23d5-4b57-8360-737913c5e2e7",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentPropertyExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7bdaf183-9d7c-4725-b03e-f15cae0bf06a": {
    "Id": "A7bdaf183-9d7c-4725-b03e-f15cae0bf06a",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentsOtherThanInvestmentsAccountedForUsingEquityMethodExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A763bd658-241b-4925-81b2-4ea81831c07b": {
    "Id": "A763bd658-241b-4925-81b2-4ea81831c07b",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIssuedCapitalExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A85ea52f4-30e1-46d4-a9dd-db49f9fd21e7": {
    "Id": "A85ea52f4-30e1-46d4-a9dd-db49f9fd21e7",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForLeasesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6cb15221-f017-4cbb-9679-f8465929bc5e": {
    "Id": "A6cb15221-f017-4cbb-9679-f8465929bc5e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForLoansAndReceivablesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6d3aa9e1-b12e-4967-87b4-fbeb10636b8e": {
    "Id": "A6d3aa9e1-b12e-4967-87b4-fbeb10636b8e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForMeasuringInventories",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4105a345-cf92-41e7-bf75-a711272bbdf7": {
    "Id": "A4105a345-cf92-41e7-bf75-a711272bbdf7",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForNoncurrentAssetsOrDisposalGroupsClassifiedAsHeldForSaleExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aaace0422-36c9-4c9f-a0e4-90f9015ffe18": {
    "Id": "Aaace0422-36c9-4c9f-a0e4-90f9015ffe18",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForNoncurrentAssetsOrDisposalGroupsClassifiedAsHeldForSaleAndDiscontinuedOperationsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab3ca9911-aa35-4361-a1c2-0cd8b5721596": {
    "Id": "Ab3ca9911-aa35-4361-a1c2-0cd8b5721596",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForOffsettingOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6d4a2368-210b-4536-878e-13a804bb92c0": {
    "Id": "A6d4a2368-210b-4536-878e-13a804bb92c0",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForPropertyPlantAndEquipmentExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A891ad2bb-23de-4a57-a7e5-eae43f7374c3": {
    "Id": "A891ad2bb-23de-4a57-a7e5-eae43f7374c3",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForProvisionsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0262af84-812f-4c7d-aaa1-4a75d116788e": {
    "Id": "A0262af84-812f-4c7d-aaa1-4a75d116788e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForReclassificationOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa4580e75-7391-48ae-aa56-fd64f465f245": {
    "Id": "Aa4580e75-7391-48ae-aa56-fd64f465f245",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRecognisingDifferenceBetweenFairValueAtInitialRecognitionAndAmountDeterminedUsingValuationTechniqueExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A02de607c-1b6e-40e0-b720-02b9841f904a": {
    "Id": "A02de607c-1b6e-40e0-b720-02b9841f904a",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRecognitionOfRevenue",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab1ff398b-cbdd-4fde-8c54-14d26ed3bf6d": {
    "Id": "Ab1ff398b-cbdd-4fde-8c54-14d26ed3bf6d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForReinsuranceExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A97b71bd4-ce0c-462c-bc73-a3a8313adc4c": {
    "Id": "A97b71bd4-ce0c-462c-bc73-a3a8313adc4c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRestrictedCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4ec49d7d-76ea-4b71-8582-acb53a12d32b": {
    "Id": "A4ec49d7d-76ea-4b71-8582-acb53a12d32b",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForStrippingCostsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0c9af9e8-a465-4c02-a5d4-9227057f6606": {
    "Id": "A0c9af9e8-a465-4c02-a5d4-9227057f6606",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForSubsidiariesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A94cc1cc3-19e6-4d0d-b73f-0750cca071cf": {
    "Id": "A94cc1cc3-19e6-4d0d-b73f-0750cca071cf",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradeAndOtherPayablesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8775da10-5f08-4cba-a503-adfa152ea65e": {
    "Id": "A8775da10-5f08-4cba-a503-adfa152ea65e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradeAndOtherReceivablesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9c530032-f14e-40e8-b90c-69a9973258d4": {
    "Id": "A9c530032-f14e-40e8-b90c-69a9973258d4",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradingIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A38c83f9f-f910-4a72-b175-200da2bf240b": {
    "Id": "A38c83f9f-f910-4a72-b175-200da2bf240b",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTransactionsWithNoncontrollingInterestsExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa7de6cc6-1d2e-4f19-b767-2b1ff6a11270": {
    "Id": "Aa7de6cc6-1d2e-4f19-b767-2b1ff6a11270",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTransactionsWithRelatedPartiesExplanatory",
    "IdContextoPlantilla": "trimestre_acumulado_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aaf05895f-00c4-4eb2-b588-806bde979e24": {
    "Id": "Aaf05895f-00c4-4eb2-b588-806bde979e24",
    "IdConcepto": "ifrs-full_DescriptionOfOtherAccountingPoliciesRelevantToUnderstandingOfFinancialStatements",
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