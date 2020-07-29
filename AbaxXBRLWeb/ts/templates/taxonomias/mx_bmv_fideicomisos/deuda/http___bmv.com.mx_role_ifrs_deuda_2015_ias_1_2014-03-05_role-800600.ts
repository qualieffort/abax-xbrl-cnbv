///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-800600
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_800600 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_800600
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
  "A5ea6422a-b3fe-48bf-addc-c5d06ab8bef9": {
    "Id": "A5ea6422a-b3fe-48bf-addc-c5d06ab8bef9",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForAvailableforsaleFinancialAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7b364d3d-752b-40ae-8d50-ab2b26c47eec": {
    "Id": "A7b364d3d-752b-40ae-8d50-ab2b26c47eec",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBiologicalAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab8c4549a-e933-4e81-9277-42b3ae79aef2": {
    "Id": "Ab8c4549a-e933-4e81-9277-42b3ae79aef2",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBorrowingCostsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A32c276dc-a51c-4d80-876b-8eddd777980c": {
    "Id": "A32c276dc-a51c-4d80-876b-8eddd777980c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBorrowingsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9f280e2c-e988-412c-aa35-7eae4cfc3cef": {
    "Id": "A9f280e2c-e988-412c-aa35-7eae4cfc3cef",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForCashFlowsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A10b17b75-a8b7-46ad-9d2a-a35c0fca5209": {
    "Id": "A10b17b75-a8b7-46ad-9d2a-a35c0fca5209",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDecommissioningRestorationAndRehabilitationProvisionsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3094b3ef-6d92-4c79-a8f8-10f17b8e295c": {
    "Id": "A3094b3ef-6d92-4c79-a8f8-10f17b8e295c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDeferredAcquisitionCostsArisingFromInsuranceContractsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5e8f69d9-95e5-4a92-ab97-20a43b1896ca": {
    "Id": "A5e8f69d9-95e5-4a92-ab97-20a43b1896ca",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDepreciationExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aebb4a416-40ca-4347-8f6c-9cdd3af17f3f": {
    "Id": "Aebb4a416-40ca-4347-8f6c-9cdd3af17f3f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerecognitionOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A007b0f3a-8b08-4644-aa6e-a766ba55b329": {
    "Id": "A007b0f3a-8b08-4644-aa6e-a766ba55b329",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerivativeFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abf2c4fb5-a9f4-4c27-bdef-ba638794b356": {
    "Id": "Abf2c4fb5-a9f4-4c27-bdef-ba638794b356",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerivativeFinancialInstrumentsAndHedgingExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9ad85429-bc2f-4af9-946f-be9f54f16295": {
    "Id": "A9ad85429-bc2f-4af9-946f-be9f54f16295",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyToDetermineComponentsOfCashAndCashEquivalents",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6e96f2e0-3b7c-434b-a2b7-49178d01edec": {
    "Id": "A6e96f2e0-3b7c-434b-a2b7-49178d01edec",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForEnvironmentRelatedExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8a921975-e776-4a82-a43f-e13a87d5c0dd": {
    "Id": "A8a921975-e776-4a82-a43f-e13a87d5c0dd",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForExpensesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af0fbf067-fd0f-4d22-9d35-7af1cadf8582": {
    "Id": "Af0fbf067-fd0f-4d22-9d35-7af1cadf8582",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForExplorationAndEvaluationExpenditures",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A314b45bf-186f-4636-9ac7-2b383dd2bd5e": {
    "Id": "A314b45bf-186f-4636-9ac7-2b383dd2bd5e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFairValueMeasurementExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aef3add8c-e6f1-4ec9-ac66-0052d990daf1": {
    "Id": "Aef3add8c-e6f1-4ec9-ac66-0052d990daf1",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFeeAndCommissionIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A69f8cf7e-e55a-46a9-91f3-170b1bcffa0a": {
    "Id": "A69f8cf7e-e55a-46a9-91f3-170b1bcffa0a",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinanceCostsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0ceca252-0fc9-4f9d-b412-441852f4c910": {
    "Id": "A0ceca252-0fc9-4f9d-b412-441852f4c910",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinanceIncomeAndCostsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A24b43b9a-bd40-45b6-9035-c3fe9877a13c": {
    "Id": "A24b43b9a-bd40-45b6-9035-c3fe9877a13c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8e3a40fa-9ed8-4b0e-9ccb-223ada41f370": {
    "Id": "A8e3a40fa-9ed8-4b0e-9ccb-223ada41f370",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialGuaranteesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3cbf301c-a284-463c-987b-86e08e758848": {
    "Id": "A3cbf301c-a284-463c-987b-86e08e758848",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A86a415c8-89fb-4fc5-af4c-8b6530d63e8a": {
    "Id": "A86a415c8-89fb-4fc5-af4c-8b6530d63e8a",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialInstrumentsAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A26be1dad-f24f-4ebb-bedb-bf087d0e51b6": {
    "Id": "A26be1dad-f24f-4ebb-bedb-bf087d0e51b6",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A233db226-6c35-45ed-abc6-286a289c440c": {
    "Id": "A233db226-6c35-45ed-abc6-286a289c440c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForForeignCurrencyTranslationExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acfbec85c-27ef-4d71-a499-d6ef906fc48e": {
    "Id": "Acfbec85c-27ef-4d71-a499-d6ef906fc48e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFunctionalCurrencyExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A345fce97-c82f-482b-a40d-56fcbcf84af2": {
    "Id": "A345fce97-c82f-482b-a40d-56fcbcf84af2",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForGovernmentGrants",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab551667d-0985-4bf4-b5b5-64bbfb61c2f9": {
    "Id": "Ab551667d-0985-4bf4-b5b5-64bbfb61c2f9",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForHedgingExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A711fd87e-f373-4e5f-8c21-d88c54d1c992": {
    "Id": "A711fd87e-f373-4e5f-8c21-d88c54d1c992",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForHeldtomaturityInvestmentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A78e70a76-29bc-44bf-8fe9-f4972038538f": {
    "Id": "A78e70a76-29bc-44bf-8fe9-f4972038538f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab88316ad-a8a6-4123-b00c-241df52a63f1": {
    "Id": "Ab88316ad-a8a6-4123-b00c-241df52a63f1",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfFinancialAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab517761b-6afa-4682-bc3b-60de7bd144b8": {
    "Id": "Ab517761b-6afa-4682-bc3b-60de7bd144b8",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfNonfinancialAssetsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7bac17b3-0c88-466f-83e8-84a839ebc13c": {
    "Id": "A7bac17b3-0c88-466f-83e8-84a839ebc13c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInsuranceContracts",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac9237cbc-43b8-4a31-86e0-eed67b5f5608": {
    "Id": "Ac9237cbc-43b8-4a31-86e0-eed67b5f5608",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInterestIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af919ed0a-e845-4f34-8138-ed44ea5a9b7b": {
    "Id": "Af919ed0a-e845-4f34-8138-ed44ea5a9b7b",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIssuedCapitalExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4bfd6d7d-aeb7-443a-ae92-35009a918008": {
    "Id": "A4bfd6d7d-aeb7-443a-ae92-35009a918008",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForLoansAndReceivablesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af958bf18-457d-44ab-80a4-df1ec833ddf2": {
    "Id": "Af958bf18-457d-44ab-80a4-df1ec833ddf2",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForOffsettingOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aae1046f4-fdfd-4164-9158-ece7fe39478b": {
    "Id": "Aae1046f4-fdfd-4164-9158-ece7fe39478b",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForProvisionsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A348b7943-d2fe-4d9c-b861-4f93a4436e57": {
    "Id": "A348b7943-d2fe-4d9c-b861-4f93a4436e57",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForReclassificationOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9c050d35-6b64-4996-ab9d-6af886f63fe1": {
    "Id": "A9c050d35-6b64-4996-ab9d-6af886f63fe1",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRecognisingDifferenceBetweenFairValueAtInitialRecognitionAndAmountDeterminedUsingValuationTechniqueExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8af65912-6c39-4f66-9c68-1497845b7ac5": {
    "Id": "A8af65912-6c39-4f66-9c68-1497845b7ac5",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRecognitionOfRevenue",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acf984f52-4c8a-4abd-a9a7-e519f920e9ac": {
    "Id": "Acf984f52-4c8a-4abd-a9a7-e519f920e9ac",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForReinsuranceExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afdcd1490-527e-48b7-aaaf-46474dee7536": {
    "Id": "Afdcd1490-527e-48b7-aaaf-46474dee7536",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRestrictedCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A080ab659-03be-4f9d-a34a-82ed7fc0945a": {
    "Id": "A080ab659-03be-4f9d-a34a-82ed7fc0945a",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForStrippingCostsExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6a16b7a8-985c-4fac-affe-2622070d4003": {
    "Id": "A6a16b7a8-985c-4fac-affe-2622070d4003",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradeAndOtherPayablesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae50f9835-8cf1-4dee-9f60-24cd2e410458": {
    "Id": "Ae50f9835-8cf1-4dee-9f60-24cd2e410458",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradeAndOtherReceivablesExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1134c640-5ec6-4c92-aee0-8ff72b09b685": {
    "Id": "A1134c640-5ec6-4c92-aee0-8ff72b09b685",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradingIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4bb776d3-f209-4ba6-b1be-b54f119b51b5": {
    "Id": "A4bb776d3-f209-4ba6-b1be-b54f119b51b5",
    "IdConcepto": "ifrs-full_DescriptionOfOtherAccountingPoliciesRelevantToUnderstandingOfFinancialStatements",
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