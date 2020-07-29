///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-800600
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_800600 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_800600
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
  "A589c95b6-b424-45cf-aad9-6a6d814cba6e": {
    "Id": "A589c95b6-b424-45cf-aad9-6a6d814cba6e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBorrowingCostsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A56d27c5a-3028-4b2a-a802-e958fab4b1c4": {
    "Id": "A56d27c5a-3028-4b2a-a802-e958fab4b1c4",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBorrowingsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa2d1b62e-13bd-43ca-99b7-dc69775b887e": {
    "Id": "Aa2d1b62e-13bd-43ca-99b7-dc69775b887e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForCashFlowsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5b403692-7ac0-42fc-9099-37a78514b5ff": {
    "Id": "A5b403692-7ac0-42fc-9099-37a78514b5ff",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDeferredAcquisitionCostsArisingFromInsuranceContractsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae68ab3cd-0952-4fec-a963-69cf3c443847": {
    "Id": "Ae68ab3cd-0952-4fec-a963-69cf3c443847",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerecognitionOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9f43038b-3a6e-477e-bf5e-80387e169c21": {
    "Id": "A9f43038b-3a6e-477e-bf5e-80387e169c21",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerivativeFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A13c51e6c-36ff-483b-9436-86c80dba19e2": {
    "Id": "A13c51e6c-36ff-483b-9436-86c80dba19e2",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerivativeFinancialInstrumentsAndHedgingExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A27804c81-be3c-4a0c-bc27-e722def7c930": {
    "Id": "A27804c81-be3c-4a0c-bc27-e722def7c930",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyToDetermineComponentsOfCashAndCashEquivalents",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af3ca31a0-8d16-4737-8bc6-7d02408392b8": {
    "Id": "Af3ca31a0-8d16-4737-8bc6-7d02408392b8",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDividendsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae2d2fcfb-a75b-4ddd-ba6b-5004188c40d2": {
    "Id": "Ae2d2fcfb-a75b-4ddd-ba6b-5004188c40d2",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForEnvironmentRelatedExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af152d715-fa24-4f47-bac2-c3ec2083116e": {
    "Id": "Af152d715-fa24-4f47-bac2-c3ec2083116e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForExpensesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa3d59a30-1157-427c-930d-6cf05f48af71": {
    "Id": "Aa3d59a30-1157-427c-930d-6cf05f48af71",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForExplorationAndEvaluationExpenditures",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6acf4bd4-798d-4a36-baae-17e7d6a4fafc": {
    "Id": "A6acf4bd4-798d-4a36-baae-17e7d6a4fafc",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFairValueMeasurementExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afc633ade-7e09-4a07-a142-549d9d65e70a": {
    "Id": "Afc633ade-7e09-4a07-a142-549d9d65e70a",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFeeAndCommissionIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af215f58c-5520-4ef6-b661-a268f2ee8743": {
    "Id": "Af215f58c-5520-4ef6-b661-a268f2ee8743",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinanceCostsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afa19cc3a-9154-444f-887a-94ddf19c8462": {
    "Id": "Afa19cc3a-9154-444f-887a-94ddf19c8462",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinanceIncomeAndCostsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa46128db-1b02-493e-8a2e-2927b799eab8": {
    "Id": "Aa46128db-1b02-493e-8a2e-2927b799eab8",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A57607bc7-1900-4aa2-ae25-234ca139ca94": {
    "Id": "A57607bc7-1900-4aa2-ae25-234ca139ca94",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialGuaranteesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0fe12176-1f2e-4c08-bd46-83234712af03": {
    "Id": "A0fe12176-1f2e-4c08-bd46-83234712af03",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A81680aa9-e411-46b9-9c56-f9887fd577ef": {
    "Id": "A81680aa9-e411-46b9-9c56-f9887fd577ef",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialInstrumentsAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3938f8cd-831e-44b5-9696-4d644e7036f7": {
    "Id": "A3938f8cd-831e-44b5-9696-4d644e7036f7",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialLiabilitiesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac57b40a3-5571-4773-900e-5d3dfd48e709": {
    "Id": "Ac57b40a3-5571-4773-900e-5d3dfd48e709",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForForeignCurrencyTranslationExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9389ae6e-8398-4841-8cfb-fa7005404867": {
    "Id": "A9389ae6e-8398-4841-8cfb-fa7005404867",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFunctionalCurrencyExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac6f404bf-d5f6-4d50-9fd8-588f10087351": {
    "Id": "Ac6f404bf-d5f6-4d50-9fd8-588f10087351",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForHedgingExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab30a75a8-5384-4fea-b002-63104418e374": {
    "Id": "Ab30a75a8-5384-4fea-b002-63104418e374",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForHeldtomaturityInvestmentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af77f77e7-f1fd-42df-8133-a5603f61d695": {
    "Id": "Af77f77e7-f1fd-42df-8133-a5603f61d695",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0c9331c9-84e1-41a1-ba0a-04c47f388f7f": {
    "Id": "A0c9331c9-84e1-41a1-ba0a-04c47f388f7f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfFinancialAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa6d27fff-4eff-4aaa-b76e-6c0c18f50744": {
    "Id": "Aa6d27fff-4eff-4aaa-b76e-6c0c18f50744",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfNonfinancialAssetsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae6b53192-6c52-4bc7-80f8-6162a2c2067b": {
    "Id": "Ae6b53192-6c52-4bc7-80f8-6162a2c2067b",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInsuranceContracts",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7e6b6fce-2476-4094-adc3-060cb5f6f76d": {
    "Id": "A7e6b6fce-2476-4094-adc3-060cb5f6f76d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInterestIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3dac1985-8cf0-456b-9371-7bca426d2526": {
    "Id": "A3dac1985-8cf0-456b-9371-7bca426d2526",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIssuedCapitalExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A728f4b68-5110-4533-8e8b-d771948651af": {
    "Id": "A728f4b68-5110-4533-8e8b-d771948651af",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForLoansAndReceivablesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A60c8383e-c312-448c-9587-a96ca946c2b4": {
    "Id": "A60c8383e-c312-448c-9587-a96ca946c2b4",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForOffsettingOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2bd32e44-e130-4a88-9844-69719f35274c": {
    "Id": "A2bd32e44-e130-4a88-9844-69719f35274c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForProvisionsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aed9f44ef-dc5b-434d-9b85-7830f4f7cd14": {
    "Id": "Aed9f44ef-dc5b-434d-9b85-7830f4f7cd14",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForReclassificationOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A615a0fb0-c3f3-421a-8256-e2b76f2cb8d6": {
    "Id": "A615a0fb0-c3f3-421a-8256-e2b76f2cb8d6",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRecognisingDifferenceBetweenFairValueAtInitialRecognitionAndAmountDeterminedUsingValuationTechniqueExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5898acbd-c244-48d2-881e-d97d9ae2e675": {
    "Id": "A5898acbd-c244-48d2-881e-d97d9ae2e675",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRecognitionOfRevenue",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aecdcdb51-927e-4e93-aa45-f77758d5a54c": {
    "Id": "Aecdcdb51-927e-4e93-aa45-f77758d5a54c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForReinsuranceExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aca333021-456a-403f-9bbd-d246a4d869ba": {
    "Id": "Aca333021-456a-403f-9bbd-d246a4d869ba",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRestrictedCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa87d9d37-fee5-465a-ac12-67820b777604": {
    "Id": "Aa87d9d37-fee5-465a-ac12-67820b777604",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradeAndOtherPayablesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8eef2474-38a4-4a88-bd77-ef1d3952b6b9": {
    "Id": "A8eef2474-38a4-4a88-bd77-ef1d3952b6b9",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradeAndOtherReceivablesExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0dc835ab-4c8d-4b6a-9241-a2854752c11c": {
    "Id": "A0dc835ab-4c8d-4b6a-9241-a2854752c11c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradingIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "Acumulado_AnoActual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A77db3ab4-03e9-4183-8cef-be0bf0199b85": {
    "Id": "A77db3ab4-03e9-4183-8cef-be0bf0199b85",
    "IdConcepto": "ifrs-full_DescriptionOfOtherAccountingPoliciesRelevantToUnderstandingOfFinancialStatements",
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