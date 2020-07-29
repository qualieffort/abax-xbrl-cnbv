///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.supersociedades.gov.co/role/2015/sds_2015-03-04_vista-310030
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_supersociedades_gov_co_role_2015_sds_2015_03_04_vista_310030 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_supersociedades_gov_co_role_2015_sds_2015_03_04_vista_310030
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
  },
  "COP_Shares": {
    "Id": "COP_Shares",
    "Tipo": 2,
    "MedidasDenominador": [
      {
        "Nombre": "#medida_shares",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
      }
    ],
    "MedidasNumerador": [
      {
        "Nombre": "#medida_COP",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "Medidas": []
  }
};
            
            this.HechosPlantillaPorId = {
 
  "Aeca9ba1d-cbf5-4e13-b06a-16a8b6ef665f": {
    "Id": "Aeca9ba1d-cbf5-4e13-b06a-16a8b6ef665f",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aefaac70d-531e-4fb6-8f36-a46b4407bf2e": {
    "Id": "Aefaac70d-531e-4fb6-8f36-a46b4407bf2e",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "A627fc8ae-ee79-4cc5-aeda-796f3ecd3649": {
    "Id": "A627fc8ae-ee79-4cc5-aeda-796f3ecd3649",
    "IdConcepto": "ifrs-full_CostOfSales",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7cceacf0-1f73-4b87-825c-844f0f91ba05": {
    "Id": "A7cceacf0-1f73-4b87-825c-844f0f91ba05",
    "IdConcepto": "ifrs-full_CostOfSales",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
 
  "A527208e0-ce10-48ed-8e96-babee0b7bf02": {
    "Id": "A527208e0-ce10-48ed-8e96-babee0b7bf02",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A865e0c12-22e4-400e-9b8d-6c8457223c7e": {
    "Id": "A865e0c12-22e4-400e-9b8d-6c8457223c7e",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "Ac44ba4d6-ad4d-4958-b69b-fac2afdf4347": {
    "Id": "Ac44ba4d6-ad4d-4958-b69b-fac2afdf4347",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2414cf09-9252-4668-acb6-64c29676755d": {
    "Id": "A2414cf09-9252-4668-acb6-64c29676755d",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7ac5b972-0efb-493a-af81-5ce99645f62a": {
    "Id": "A7ac5b972-0efb-493a-af81-5ce99645f62a",
    "IdConcepto": "ifrs-full_DistributionCosts",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae6ebac31-9d7a-4ac3-9890-5b1e733b2501": {
    "Id": "Ae6ebac31-9d7a-4ac3-9890-5b1e733b2501",
    "IdConcepto": "ifrs-full_DistributionCosts",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3e78ccb9-7e2b-4607-a6a7-1af169a46a6a": {
    "Id": "A3e78ccb9-7e2b-4607-a6a7-1af169a46a6a",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A504cec3f-91e8-42be-8b42-8e751d91da81": {
    "Id": "A504cec3f-91e8-42be-8b42-8e751d91da81",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "A30e1216a-5ca0-49f5-99de-087f8de4dbe5": {
    "Id": "A30e1216a-5ca0-49f5-99de-087f8de4dbe5",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5f22fdc7-bfeb-42da-aab7-9c774e582454": {
    "Id": "A5f22fdc7-bfeb-42da-aab7-9c774e582454",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1ddcf848-aa07-4800-8926-dcbcd309cd4f": {
    "Id": "A1ddcf848-aa07-4800-8926-dcbcd309cd4f",
    "IdConcepto": "ifrs-full_OtherGainsLosses",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A932deeb5-9456-42e8-a901-ece81ab2cf4a": {
    "Id": "A932deeb5-9456-42e8-a901-ece81ab2cf4a",
    "IdConcepto": "ifrs-full_OtherGainsLosses",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "A22ae7f97-65e6-46aa-9125-c9046a4ebd8d": {
    "Id": "A22ae7f97-65e6-46aa-9125-c9046a4ebd8d",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A055db43d-308c-4fa6-b2b5-c7ce9a1b6a86": {
    "Id": "A055db43d-308c-4fa6-b2b5-c7ce9a1b6a86",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac90995bf-d859-47c1-abf3-13329905c661": {
    "Id": "Ac90995bf-d859-47c1-abf3-13329905c661",
    "IdConcepto": "ifrs-full_DifferenceBetweenCarryingAmountOfDividendsPayableAndCarryingAmountOfNoncashAssetsDistributed",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acdf0af16-847c-4929-9d99-1b759d553138": {
    "Id": "Acdf0af16-847c-4929-9d99-1b759d553138",
    "IdConcepto": "ifrs-full_DifferenceBetweenCarryingAmountOfDividendsPayableAndCarryingAmountOfNoncashAssetsDistributed",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6948ec66-fe29-4b13-b973-567efa79fecb": {
    "Id": "A6948ec66-fe29-4b13-b973-567efa79fecb",
    "IdConcepto": "ifrs-full_GainsLossesOnNetMonetaryPosition",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A65370147-e8b0-41b6-b2ad-bb573b8e355f": {
    "Id": "A65370147-e8b0-41b6-b2ad-bb573b8e355f",
    "IdConcepto": "ifrs-full_GainsLossesOnNetMonetaryPosition",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A32a5f889-aa64-417a-82f0-6adfde98cb6a": {
    "Id": "A32a5f889-aa64-417a-82f0-6adfde98cb6a",
    "IdConcepto": "ifrs-full_GainLossArisingFromDerecognitionOfFinancialAssetsMeasuredAtAmortisedCost",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4179ee0f-c1ca-42aa-9db4-00591232941b": {
    "Id": "A4179ee0f-c1ca-42aa-9db4-00591232941b",
    "IdConcepto": "ifrs-full_GainLossArisingFromDerecognitionOfFinancialAssetsMeasuredAtAmortisedCost",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A030114d0-a096-4258-a1e1-7c46154e3fc2": {
    "Id": "A030114d0-a096-4258-a1e1-7c46154e3fc2",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9f2c7c32-c736-479a-a97f-d01c62db4d6d": {
    "Id": "A9f2c7c32-c736-479a-a97f-d01c62db4d6d",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "A59ecc2d9-40e4-4e60-a950-e8cbad70479b": {
    "Id": "A59ecc2d9-40e4-4e60-a950-e8cbad70479b",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aea051475-a8cc-408e-9df3-ad52ce22a0fc": {
    "Id": "Aea051475-a8cc-408e-9df3-ad52ce22a0fc",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac4641b1f-d1ae-474f-8ab1-9b0909d4cf76": {
    "Id": "Ac4641b1f-d1ae-474f-8ab1-9b0909d4cf76",
    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5b9dfea2-7a4d-485d-84e3-ebe295a87054": {
    "Id": "A5b9dfea2-7a4d-485d-84e3-ebe295a87054",
    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4f266fcd-32d1-4360-86d6-0451ba401760": {
    "Id": "A4f266fcd-32d1-4360-86d6-0451ba401760",
    "IdConcepto": "ifrs-full_OtherIncomeExpenseFromSubsidiariesJointlyControlledEntitiesAndAssociates",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab8d26420-bb8c-46c6-a0b3-d59dfd8795cd": {
    "Id": "Ab8d26420-bb8c-46c6-a0b3-d59dfd8795cd",
    "IdConcepto": "ifrs-full_OtherIncomeExpenseFromSubsidiariesJointlyControlledEntitiesAndAssociates",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A66a28d8e-9925-4283-b58e-7787be7e1999": {
    "Id": "A66a28d8e-9925-4283-b58e-7787be7e1999",
    "IdConcepto": "ifrs-full_GainsLossesArisingFromDifferenceBetweenPreviousCarryingAmountAndFairValueOfFinancialAssetsReclassifiedAsMeasuredAtFairValue",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6b96638e-1374-4871-a20d-32ddd7b598a1": {
    "Id": "A6b96638e-1374-4871-a20d-32ddd7b598a1",
    "IdConcepto": "ifrs-full_GainsLossesArisingFromDifferenceBetweenPreviousCarryingAmountAndFairValueOfFinancialAssetsReclassifiedAsMeasuredAtFairValue",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3053b9a3-c3ea-48f5-9a66-aef3b9d4544e": {
    "Id": "A3053b9a3-c3ea-48f5-9a66-aef3b9d4544e",
    "IdConcepto": "ifrs-full_HedgingGainsLossesForHedgeOfGroupOfItemsWithOffsettingRiskPositions",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae5108fce-ae63-4e8a-b4df-ead0837e14b8": {
    "Id": "Ae5108fce-ae63-4e8a-b4df-ead0837e14b8",
    "IdConcepto": "ifrs-full_HedgingGainsLossesForHedgeOfGroupOfItemsWithOffsettingRiskPositions",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "A8115da4e-20b6-475f-baf3-3bdc421d472f": {
    "Id": "A8115da4e-20b6-475f-baf3-3bdc421d472f",
    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A30bfcc1e-d14e-4e5a-9d02-3d2f14047ab4": {
    "Id": "A30bfcc1e-d14e-4e5a-9d02-3d2f14047ab4",
    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "A30bd9a52-b2f5-4b07-a406-f99123268bd7": {
    "Id": "A30bd9a52-b2f5-4b07-a406-f99123268bd7",
    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A14a1e304-e713-4a26-84fd-b9d55c8285cf": {
    "Id": "A14a1e304-e713-4a26-84fd-b9d55c8285cf",
    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "A433bb4f2-96f1-42ba-b03b-4878a7f62da1": {
    "Id": "A433bb4f2-96f1-42ba-b03b-4878a7f62da1",
    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A70949334-e1de-4d0a-9e11-eba235370753": {
    "Id": "A70949334-e1de-4d0a-9e11-eba235370753",
    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aabf1e537-d00b-4f6f-b141-c68e0a361d8f": {
    "Id": "Aabf1e537-d00b-4f6f-b141-c68e0a361d8f",
    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5db5210e-2cbe-450e-b04d-a362258ef398": {
    "Id": "A5db5210e-2cbe-450e-b04d-a362258ef398",
    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
 
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
  "Ae3372aca-1f09-4626-aa3d-64f4c182e9eb": {
    "Id": "Ae3372aca-1f09-4626-aa3d-64f4c182e9eb",
    "IdConcepto": "ifrs-full_EarningsPerShareExplanatory",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A45af3af1-67bd-42cc-afbf-d54d25ac4961": {
    "Id": "A45af3af1-67bd-42cc-afbf-d54d25ac4961",
    "IdConcepto": "ifrs-full_EarningsPerShareExplanatory",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  
  "A340d8242-ff85-4eaa-8626-1127efd5171c": {
    "Id": "A340d8242-ff85-4eaa-8626-1127efd5171c",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acde0a5ae-e61a-49f6-8216-ba9d1c2778ea": {
    "Id": "Acde0a5ae-e61a-49f6-8216-ba9d1c2778ea",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A24dd63aa-06db-4e3d-a85e-d49b2d430cce": {
    "Id": "A24dd63aa-06db-4e3d-a85e-d49b2d430cce",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A54d999b3-d6bb-4572-80e5-06f07486b332": {
    "Id": "A54d999b3-d6bb-4572-80e5-06f07486b332",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  
  "A00fec34d-150f-4f7d-966d-31cde467e332": {
    "Id": "A00fec34d-150f-4f7d-966d-31cde467e332",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A793b5b69-e105-4099-b8eb-496128be062e": {
    "Id": "A793b5b69-e105-4099-b8eb-496128be062e",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac46e65a5-06c6-4938-97dc-096eed94a8d4": {
    "Id": "Ac46e65a5-06c6-4938-97dc-096eed94a8d4",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2218be27-1336-4e4c-95d1-0d719f20cefd": {
    "Id": "A2218be27-1336-4e4c-95d1-0d719f20cefd",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1fb71bfb-61e4-466e-acb0-595a9da5cbef": {
    "Id": "A1fb71bfb-61e4-466e-acb0-595a9da5cbef",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A34f9624f-5cdc-4000-88de-b339b03f871c": {
    "Id": "A34f9624f-5cdc-4000-88de-b339b03f871c",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa09ded66-7e08-4443-bb19-dc9f475ac049": {
    "Id": "Aa09ded66-7e08-4443-bb19-dc9f475ac049",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShare",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A56bc8221-bd16-4fec-a07c-13848ebbab55": {
    "Id": "A56bc8221-bd16-4fec-a07c-13848ebbab55",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShare",
    "IdContextoPlantilla": "Acum_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "COP_Shares",
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