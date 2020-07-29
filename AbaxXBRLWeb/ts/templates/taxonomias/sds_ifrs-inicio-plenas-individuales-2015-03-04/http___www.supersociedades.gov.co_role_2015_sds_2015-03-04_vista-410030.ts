///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.supersociedades.gov.co/role/2015/sds_2015-03-04_vista-410030
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_supersociedades_gov_co_role_2015_sds_2015_03_04_vista_410030 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_supersociedades_gov_co_role_2015_sds_2015_03_04_vista_410030
         */
        constructor() {

			this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
  "Acum_Actual": {
    "Id": "Acum_Actual",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2014_01_01",
      "FechaFin": "#fecha_2014_09_30",
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
  },
  "Acum_Anterior": {
    "Id": "Acum_Anterior",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2013_01_01",
      "FechaFin": "#fecha_2013_09_30",
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

            this.UnidadesPlantillaPorId = {
  "Moneda_Reprte": {
    "Id": "Moneda_Reprte",
    "Tipo": 1,
    "Medidas": [
      {
        "Nombre": "#medida_COP",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "MedidasDenominador": [],
    "MedidasNumerador": []
  }
};
            
            this.HechosPlantillaPorId = {
  "A35fec542-486a-4af1-b569-19f5fc0b4e22": {
    "Id": "A35fec542-486a-4af1-b569-19f5fc0b4e22",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2e7eb954-4090-420a-beac-b272282cd6e1": {
    "Id": "A2e7eb954-4090-420a-beac-b272282cd6e1",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abe2c8e96-8572-42b4-bfb4-da3d4fa00216": {
    "Id": "Abe2c8e96-8572-42b4-bfb4-da3d4fa00216",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesFromInvestmentsInEquityInstruments",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa119495d-38d5-4880-9ef3-b23e3965db74": {
    "Id": "Aa119495d-38d5-4880-9ef3-b23e3965db74",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesFromInvestmentsInEquityInstruments",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3a252eb9-8639-4411-9a6f-bc65c98904e8": {
    "Id": "A3a252eb9-8639-4411-9a6f-bc65c98904e8",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1f42f8cd-ac1c-4333-bae8-6c77807cae6c": {
    "Id": "A1f42f8cd-ac1c-4333-bae8-6c77807cae6c",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad2980066-6aa1-477e-9631-1be02eb3a376": {
    "Id": "Ad2980066-6aa1-477e-9631-1be02eb3a376",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRemeasurementsOfDefinedBenefitPlans",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa329e595-99b4-4711-bf67-52602a7f8ab2": {
    "Id": "Aa329e595-99b4-4711-bf67-52602a7f8ab2",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRemeasurementsOfDefinedBenefitPlans",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A27a568dd-4970-42f2-a2c1-28a9d82e201b": {
    "Id": "A27a568dd-4970-42f2-a2c1-28a9d82e201b",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiability",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab8aead4f-5b29-40b2-ade7-022d42c677f3": {
    "Id": "Ab8aead4f-5b29-40b2-ade7-022d42c677f3",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiability",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A04b3b316-178f-4ee3-9eba-7fcea09270d6": {
    "Id": "A04b3b316-178f-4ee3-9eba-7fcea09270d6",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acd87084d-e399-43a1-9c5d-a1d84c2570e4": {
    "Id": "Acd87084d-e399-43a1-9c5d-a1d84c2570e4",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa04df2a2-ba17-451e-9b10-3653b84e5b82": {
    "Id": "Aa04df2a2-ba17-451e-9b10-3653b84e5b82",
    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aaed0718e-ba44-4f9f-8b1a-cb0f6d10dac5": {
    "Id": "Aaed0718e-ba44-4f9f-8b1a-cb0f6d10dac5",
    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab27d9d05-e478-4403-91e0-c4bc9a48f7de": {
    "Id": "Ab27d9d05-e478-4403-91e0-c4bc9a48f7de",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A14c8be55-1145-4107-8285-1e0c61217c90": {
    "Id": "A14c8be55-1145-4107-8285-1e0c61217c90",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A96b803dd-dbc1-4b86-aea9-b11419f04628": {
    "Id": "A96b803dd-dbc1-4b86-aea9-b11419f04628",
    "IdConcepto": "ifrs-full_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0c1a83cc-31cc-408b-aaf9-3de88a1179e3": {
    "Id": "A0c1a83cc-31cc-408b-aaf9-3de88a1179e3",
    "IdConcepto": "ifrs-full_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Affb66e9e-e1c8-4303-9199-de0f5feea434": {
    "Id": "Affb66e9e-e1c8-4303-9199-de0f5feea434",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnExchangeDifferencesOnTranslationNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4ad2ce8c-39e5-4481-9cad-33bf2f2b1600": {
    "Id": "A4ad2ce8c-39e5-4481-9cad-33bf2f2b1600",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnExchangeDifferencesOnTranslationNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A98690fa1-b906-40a5-a3d4-c56f47e919d4": {
    "Id": "A98690fa1-b906-40a5-a3d4-c56f47e919d4",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxExchangeDifferencesOnTranslation",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0225c173-1d7d-4001-927e-70683e5124e3": {
    "Id": "A0225c173-1d7d-4001-927e-70683e5124e3",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxExchangeDifferencesOnTranslation",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab05fcade-b54f-40a6-82cb-b3f8a1dcf9bc": {
    "Id": "Ab05fcade-b54f-40a6-82cb-b3f8a1dcf9bc",
    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae78db9d5-c6d0-40de-9cbf-eabd982108e1": {
    "Id": "Ae78db9d5-c6d0-40de-9cbf-eabd982108e1",
    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aea57014b-fc54-4ac8-a4e2-b8f28c64f2a8": {
    "Id": "Aea57014b-fc54-4ac8-a4e2-b8f28c64f2a8",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac58418d8-4043-41df-b71b-40cc279fca68": {
    "Id": "Ac58418d8-4043-41df-b71b-40cc279fca68",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae5318575-48ae-4944-a7ba-5b801aeb97a8": {
    "Id": "Ae5318575-48ae-4944-a7ba-5b801aeb97a8",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A435d1cae-43a8-4076-80ee-5af65a2d179d": {
    "Id": "A435d1cae-43a8-4076-80ee-5af65a2d179d",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad51833c5-8f17-4647-b1d9-2be1b071f1b8": {
    "Id": "Ad51833c5-8f17-4647-b1d9-2be1b071f1b8",
    "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acc456a26-449a-4acd-aa31-9ee9bea7aa37": {
    "Id": "Acc456a26-449a-4acd-aa31-9ee9bea7aa37",
    "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A61a4284b-a7c8-4a96-aa68-2c01aba510e7": {
    "Id": "A61a4284b-a7c8-4a96-aa68-2c01aba510e7",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac39efdd6-7143-4def-a9e1-865dc76e0335": {
    "Id": "Ac39efdd6-7143-4def-a9e1-865dc76e0335",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A717742e2-4a90-49e9-871f-3eadd4a39183": {
    "Id": "A717742e2-4a90-49e9-871f-3eadd4a39183",
    "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2ca2ec61-1e27-407f-8f1a-f4ee0e3c5347": {
    "Id": "A2ca2ec61-1e27-407f-8f1a-f4ee0e3c5347",
    "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A53a04f58-282f-4f1c-a2c1-d2c074237a17": {
    "Id": "A53a04f58-282f-4f1c-a2c1-d2c074237a17",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A499d6e1a-151d-4e77-a1d5-d57c555d19d4": {
    "Id": "A499d6e1a-151d-4e77-a1d5-d57c555d19d4",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9d7d3966-30f7-4b40-ac58-b1193b7d03b9": {
    "Id": "A9d7d3966-30f7-4b40-ac58-b1193b7d03b9",
    "IdConcepto": "ifrs-full_GainsLossesOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A493b4f0c-6dff-4790-8b7e-f3ef9d4d6a1c": {
    "Id": "A493b4f0c-6dff-4790-8b7e-f3ef9d4d6a1c",
    "IdConcepto": "ifrs-full_GainsLossesOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A70094d7f-d320-409c-8ca4-7dc1152523dc": {
    "Id": "A70094d7f-d320-409c-8ca4-7dc1152523dc",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ade6ee654-458b-48cb-9847-543c046990eb": {
    "Id": "Ade6ee654-458b-48cb-9847-543c046990eb",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae9efdb25-ac26-406d-ae80-f9eef5036b8e": {
    "Id": "Ae9efdb25-ac26-406d-ae80-f9eef5036b8e",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxHedgesOfNetInvestmentsInForeignOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1c52bdef-dc1c-423d-a38e-f5373679deae": {
    "Id": "A1c52bdef-dc1c-423d-a38e-f5373679deae",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxHedgesOfNetInvestmentsInForeignOperations",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af2371609-61d6-470d-b08e-5e5cac4a98dd": {
    "Id": "Af2371609-61d6-470d-b08e-5e5cac4a98dd",
    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfTimeValueOfOptionsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab22f195e-907f-4741-bb09-d90fbac413a4": {
    "Id": "Ab22f195e-907f-4741-bb09-d90fbac413a4",
    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfTimeValueOfOptionsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af24efe7e-70e9-4636-85f7-7fd753793094": {
    "Id": "Af24efe7e-70e9-4636-85f7-7fd753793094",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfTimeValueOfOptionsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acb2cd68c-c43f-4d24-b242-0892aabfe5c3": {
    "Id": "Acb2cd68c-c43f-4d24-b242-0892aabfe5c3",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfTimeValueOfOptionsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa7e37ef8-b840-49e8-b183-02e3d5969c98": {
    "Id": "Aa7e37ef8-b840-49e8-b183-02e3d5969c98",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfTimeValueOfOptions",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9e0ccb40-bbf3-43d8-b1f7-55f08b994ae7": {
    "Id": "A9e0ccb40-bbf3-43d8-b1f7-55f08b994ae7",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfTimeValueOfOptions",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2d79a36c-1aa9-4b3b-a6d4-1d81121c8995": {
    "Id": "A2d79a36c-1aa9-4b3b-a6d4-1d81121c8995",
    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3455a80d-9592-4711-9681-8f01ebc11b88": {
    "Id": "A3455a80d-9592-4711-9681-8f01ebc11b88",
    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A48da9aea-bd60-49a0-ae07-e9002dd9e7e8": {
    "Id": "A48da9aea-bd60-49a0-ae07-e9002dd9e7e8",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1dfb5d4d-ccef-4b40-b1fd-913ff4ceb7ab": {
    "Id": "A1dfb5d4d-ccef-4b40-b1fd-913ff4ceb7ab",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af135f2ef-ac63-4ec8-9888-b6185b90882b": {
    "Id": "Af135f2ef-ac63-4ec8-9888-b6185b90882b",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForwardElementsOfForwardContracts",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A593173c1-a353-4093-9d2e-09a2735b17da": {
    "Id": "A593173c1-a353-4093-9d2e-09a2735b17da",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForwardElementsOfForwardContracts",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9ca0f04f-41d5-4e7d-a71c-aa76e59d1e1f": {
    "Id": "A9ca0f04f-41d5-4e7d-a71c-aa76e59d1e1f",
    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8297a2cc-3933-46fd-9243-b000be81f781": {
    "Id": "A8297a2cc-3933-46fd-9243-b000be81f781",
    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0489ff15-8fcf-4db9-ab22-92f779b238b9": {
    "Id": "A0489ff15-8fcf-4db9-ab22-92f779b238b9",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab59efb7f-2582-4ce0-a7bf-c3694339b2d5": {
    "Id": "Ab59efb7f-2582-4ce0-a7bf-c3694339b2d5",
    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aae8f3c89-6516-45e7-8958-acf91e4f184b": {
    "Id": "Aae8f3c89-6516-45e7-8958-acf91e4f184b",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForeignCurrencyBasisSpreads",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4d14e226-cb22-4198-8fe9-fa50078e0f8f": {
    "Id": "A4d14e226-cb22-4198-8fe9-fa50078e0f8f",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForeignCurrencyBasisSpreads",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A61709885-8086-4df1-83b1-6e3338041d91": {
    "Id": "A61709885-8086-4df1-83b1-6e3338041d91",
    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9c5c5930-1db6-4b6e-a759-e1fc1d80317f": {
    "Id": "A9c5c5930-1db6-4b6e-a759-e1fc1d80317f",
    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A211ab5eb-1e3d-4641-b732-06ffbb20c861": {
    "Id": "A211ab5eb-1e3d-4641-b732-06ffbb20c861",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abba35210-8a3b-454b-89a0-8a3dd108140d": {
    "Id": "Abba35210-8a3b-454b-89a0-8a3dd108140d",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A663aec13-6b4a-4028-8517-b5b3a9e17d0d": {
    "Id": "A663aec13-6b4a-4028-8517-b5b3a9e17d0d",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2af0b13e-730e-4cc2-8fe0-9ae6094fd372": {
    "Id": "A2af0b13e-730e-4cc2-8fe0-9ae6094fd372",
    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2791376e-f63d-4342-92b9-fbe08a47abf5": {
    "Id": "A2791376e-f63d-4342-92b9-fbe08a47abf5",
    "IdConcepto": "ifrs-full_ComprehensiveIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }
};
        }
    }

}