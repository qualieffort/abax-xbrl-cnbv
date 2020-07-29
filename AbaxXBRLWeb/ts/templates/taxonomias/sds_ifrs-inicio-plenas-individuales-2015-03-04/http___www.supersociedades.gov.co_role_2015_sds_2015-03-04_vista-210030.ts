///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.supersociedades.gov.co/role/2015/sds_2015-03-04_vista-210030
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_supersociedades_gov_co_role_2015_sds_2015_03_04_vista_210030 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_supersociedades_gov_co_role_2015_sds_2015_03_04_vista_210030
         */
        constructor() {

			this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
  "Cierre_Actual": {
    "Id": "Cierre_Actual",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2014_09_30",
      "FechaInicio": "",
      "FechaFin": ""
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
  "Cierre_Anterior": {
    "Id": "Cierre_Anterior",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2013_12_31",
      "FechaInicio": "",
      "FechaFin": ""
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
  "A9c1d9027-7404-45b1-945c-c9d000f573d2": {
    "Id": "A9c1d9027-7404-45b1-945c-c9d000f573d2",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aba96fab7-82ef-4b2a-9226-05660d378a59": {
    "Id": "Aba96fab7-82ef-4b2a-9226-05660d378a59",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A36d73213-c9b4-48d4-8008-f0b9d76597a3": {
    "Id": "A36d73213-c9b4-48d4-8008-f0b9d76597a3",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentReceivables",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A83491c60-e50b-4e2b-946b-696f6cbd2af5": {
    "Id": "A83491c60-e50b-4e2b-946b-696f6cbd2af5",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentReceivables",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa5db1e94-2e9d-4e90-a0d7-11e21afd3e9c": {
    "Id": "Aa5db1e94-2e9d-4e90-a0d7-11e21afd3e9c",
    "IdConcepto": "ifrs-full_Inventories",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acc53ec7c-fc86-488b-957d-6289462b05a1": {
    "Id": "Acc53ec7c-fc86-488b-957d-6289462b05a1",
    "IdConcepto": "ifrs-full_Inventories",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A77bd418e-3b0e-41f6-bb2a-662defd08c0c": {
    "Id": "A77bd418e-3b0e-41f6-bb2a-662defd08c0c",
    "IdConcepto": "ifrs-full_CurrentTaxAssetsCurrent",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A51d7d23d-9878-478b-93b1-4ac1a97eef39": {
    "Id": "A51d7d23d-9878-478b-93b1-4ac1a97eef39",
    "IdConcepto": "ifrs-full_CurrentTaxAssetsCurrent",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ace438def-fae4-4a57-808e-11f63cf70a34": {
    "Id": "Ace438def-fae4-4a57-808e-11f63cf70a34",
    "IdConcepto": "ifrs-full_CurrentBiologicalAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8a363493-6a3d-4975-83e5-13bc8cb0c90f": {
    "Id": "A8a363493-6a3d-4975-83e5-13bc8cb0c90f",
    "IdConcepto": "ifrs-full_CurrentBiologicalAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A10718288-0dfc-4051-a770-30c95417b785": {
    "Id": "A10718288-0dfc-4051-a770-30c95417b785",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A003f0163-058d-4780-a54b-ab9376606f5c": {
    "Id": "A003f0163-058d-4780-a54b-ab9376606f5c",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afe0663e8-2116-4d7d-8451-44b566f00066": {
    "Id": "Afe0663e8-2116-4d7d-8451-44b566f00066",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A06f373dc-e5dc-44a6-98df-eeca473edca1": {
    "Id": "A06f373dc-e5dc-44a6-98df-eeca473edca1",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A90ca5980-8ec8-406e-bdf3-4322b8dcbe69": {
    "Id": "A90ca5980-8ec8-406e-bdf3-4322b8dcbe69",
    "IdConcepto": "ifrs-full_CurrentNoncashAssetsPledgedAsCollateralForWhichTransfereeHasRightByContractOrCustomToSellOrRepledgeCollateral",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae53ddfc2-b10c-4368-84fe-01459aac3075": {
    "Id": "Ae53ddfc2-b10c-4368-84fe-01459aac3075",
    "IdConcepto": "ifrs-full_CurrentNoncashAssetsPledgedAsCollateralForWhichTransfereeHasRightByContractOrCustomToSellOrRepledgeCollateral",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae883d344-3a45-437c-ba6c-c14adb0374d6": {
    "Id": "Ae883d344-3a45-437c-ba6c-c14adb0374d6",
    "IdConcepto": "ifrs-full_CurrentAssetsOtherThanAssetsOrDisposalGroupsClassifiedAsHeldForSaleOrAsHeldForDistributionToOwners",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1f988ea4-1911-4328-82b4-88745a1fff54": {
    "Id": "A1f988ea4-1911-4328-82b4-88745a1fff54",
    "IdConcepto": "ifrs-full_CurrentAssetsOtherThanAssetsOrDisposalGroupsClassifiedAsHeldForSaleOrAsHeldForDistributionToOwners",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A96e404ec-55be-4eb3-a7ef-e5ad932a174e": {
    "Id": "A96e404ec-55be-4eb3-a7ef-e5ad932a174e",
    "IdConcepto": "ifrs-full_NoncurrentAssetsOrDisposalGroupsClassifiedAsHeldForSaleOrAsHeldForDistributionToOwners",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8c816680-1ccd-492b-b9ef-14fdd44ba3e3": {
    "Id": "A8c816680-1ccd-492b-b9ef-14fdd44ba3e3",
    "IdConcepto": "ifrs-full_NoncurrentAssetsOrDisposalGroupsClassifiedAsHeldForSaleOrAsHeldForDistributionToOwners",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2e288655-05dd-450f-b7a1-b6788007d973": {
    "Id": "A2e288655-05dd-450f-b7a1-b6788007d973",
    "IdConcepto": "ifrs-full_CurrentAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4af092a0-36e5-4764-9ebf-a1f54e4156bd": {
    "Id": "A4af092a0-36e5-4764-9ebf-a1f54e4156bd",
    "IdConcepto": "ifrs-full_CurrentAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2b39d311-738c-414c-9a04-e1e28ad86592": {
    "Id": "A2b39d311-738c-414c-9a04-e1e28ad86592",
    "IdConcepto": "ifrs-full_InvestmentProperty",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9f38a406-7b4e-4002-9ddc-f7d67e568b7d": {
    "Id": "A9f38a406-7b4e-4002-9ddc-f7d67e568b7d",
    "IdConcepto": "ifrs-full_InvestmentProperty",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab74018f9-8571-421e-a1d9-2148fd0af7f7": {
    "Id": "Ab74018f9-8571-421e-a1d9-2148fd0af7f7",
    "IdConcepto": "ifrs-full_PropertyPlantAndEquipment",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5c17946c-8c8c-4746-b79d-35ac5bafed8d": {
    "Id": "A5c17946c-8c8c-4746-b79d-35ac5bafed8d",
    "IdConcepto": "ifrs-full_PropertyPlantAndEquipment",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab42a7f06-0e0d-4b4a-8cfc-e01f7977f578": {
    "Id": "Ab42a7f06-0e0d-4b4a-8cfc-e01f7977f578",
    "IdConcepto": "ifrs-full_Goodwill",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afcf8c232-7824-4cd6-9482-1739b18d819f": {
    "Id": "Afcf8c232-7824-4cd6-9482-1739b18d819f",
    "IdConcepto": "ifrs-full_Goodwill",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A797bff00-eaef-4a21-8c02-94505ddccbad": {
    "Id": "A797bff00-eaef-4a21-8c02-94505ddccbad",
    "IdConcepto": "ifrs-full_IntangibleAssetsOtherThanGoodwill",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aab36b509-ca84-4f91-a806-f7b9983c40e2": {
    "Id": "Aab36b509-ca84-4f91-a806-f7b9983c40e2",
    "IdConcepto": "ifrs-full_IntangibleAssetsOtherThanGoodwill",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa37a28b9-2c99-4293-ac79-93815530db80": {
    "Id": "Aa37a28b9-2c99-4293-ac79-93815530db80",
    "IdConcepto": "ifrs-full_InvestmentAccountedForUsingEquityMethod",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1fddc4b4-07bb-4b02-aacc-1e1be7f7d6c8": {
    "Id": "A1fddc4b4-07bb-4b02-aacc-1e1be7f7d6c8",
    "IdConcepto": "ifrs-full_InvestmentAccountedForUsingEquityMethod",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af5c43df8-968d-4696-b732-78840344ea69": {
    "Id": "Af5c43df8-968d-4696-b732-78840344ea69",
    "IdConcepto": "ifrs-full_InvestmentsInSubsidiariesJointVenturesAndAssociates",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa4699877-2c7a-42f9-b635-0c44ace994a4": {
    "Id": "Aa4699877-2c7a-42f9-b635-0c44ace994a4",
    "IdConcepto": "ifrs-full_InvestmentsInSubsidiariesJointVenturesAndAssociates",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af754ac53-075d-4188-8570-876e05012882": {
    "Id": "Af754ac53-075d-4188-8570-876e05012882",
    "IdConcepto": "ifrs-full_NoncurrentBiologicalAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A870bbcf7-26f2-4dd3-bb2f-a98ae08f00ba": {
    "Id": "A870bbcf7-26f2-4dd3-bb2f-a98ae08f00ba",
    "IdConcepto": "ifrs-full_NoncurrentBiologicalAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A40ed6018-dbdd-4895-8b95-54407b0cfdf9": {
    "Id": "A40ed6018-dbdd-4895-8b95-54407b0cfdf9",
    "IdConcepto": "ifrs-full_NoncurrentReceivables",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8e94b480-41f3-45fb-98e6-1f669d4fe916": {
    "Id": "A8e94b480-41f3-45fb-98e6-1f669d4fe916",
    "IdConcepto": "ifrs-full_NoncurrentReceivables",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae73cc115-1560-4798-980a-970571e77fa5": {
    "Id": "Ae73cc115-1560-4798-980a-970571e77fa5",
    "IdConcepto": "ifrs-full_NoncurrentInventories",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad5088d45-2de3-4ada-a601-58754b29ece4": {
    "Id": "Ad5088d45-2de3-4ada-a601-58754b29ece4",
    "IdConcepto": "ifrs-full_NoncurrentInventories",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A07babc33-17f1-463b-a886-ba9479dd5707": {
    "Id": "A07babc33-17f1-463b-a886-ba9479dd5707",
    "IdConcepto": "ifrs-full_DeferredTaxAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab4c43710-0885-4893-8fbd-21737a60e172": {
    "Id": "Ab4c43710-0885-4893-8fbd-21737a60e172",
    "IdConcepto": "ifrs-full_DeferredTaxAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae125cebe-9364-462f-8fe8-6f4ad0c4be5a": {
    "Id": "Ae125cebe-9364-462f-8fe8-6f4ad0c4be5a",
    "IdConcepto": "ifrs-full_CurrentTaxAssetsNoncurrent",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A01d9fb2a-0658-4d0f-a0a1-b606a22daef5": {
    "Id": "A01d9fb2a-0658-4d0f-a0a1-b606a22daef5",
    "IdConcepto": "ifrs-full_CurrentTaxAssetsNoncurrent",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7c46687f-ffb0-4a95-a4f0-a3669a870eb1": {
    "Id": "A7c46687f-ffb0-4a95-a4f0-a3669a870eb1",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aff4ebd51-fa66-4f90-9186-108519c5475c": {
    "Id": "Aff4ebd51-fa66-4f90-9186-108519c5475c",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A89c8bca2-dcc3-4e61-b312-ce50a86469c5": {
    "Id": "A89c8bca2-dcc3-4e61-b312-ce50a86469c5",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2e214742-da4c-4970-9525-dce7d1d7c47a": {
    "Id": "A2e214742-da4c-4970-9525-dce7d1d7c47a",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A401caed6-b587-47fd-911f-afdc6e039caa": {
    "Id": "A401caed6-b587-47fd-911f-afdc6e039caa",
    "IdConcepto": "ifrs-full_NoncurrentNoncashAssetsPledgedAsCollateralForWhichTransfereeHasRightByContractOrCustomToSellOrRepledgeCollateral",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A12ed3550-8a17-4845-a51b-f4d4129e5019": {
    "Id": "A12ed3550-8a17-4845-a51b-f4d4129e5019",
    "IdConcepto": "ifrs-full_NoncurrentNoncashAssetsPledgedAsCollateralForWhichTransfereeHasRightByContractOrCustomToSellOrRepledgeCollateral",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af7f952d7-d315-45bc-9b4c-2978400b7ae7": {
    "Id": "Af7f952d7-d315-45bc-9b4c-2978400b7ae7",
    "IdConcepto": "ifrs-full_NoncurrentAssets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abea7af9d-9046-432f-bc31-74f45b585a5d": {
    "Id": "Abea7af9d-9046-432f-bc31-74f45b585a5d",
    "IdConcepto": "ifrs-full_NoncurrentAssets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8d4fde92-04f3-4ee3-ae8d-72c1c598ca24": {
    "Id": "A8d4fde92-04f3-4ee3-ae8d-72c1c598ca24",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1966e968-60f5-4c37-b503-267dafe371e5": {
    "Id": "A1966e968-60f5-4c37-b503-267dafe371e5",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3d871bec-06ef-47ad-bbbf-9aea0939982c": {
    "Id": "A3d871bec-06ef-47ad-bbbf-9aea0939982c",
    "IdConcepto": "ifrs-full_CurrentProvisionsForEmployeeBenefits",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acb3da792-58ee-481f-b5dd-350283154fcc": {
    "Id": "Acb3da792-58ee-481f-b5dd-350283154fcc",
    "IdConcepto": "ifrs-full_CurrentProvisionsForEmployeeBenefits",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8123b7ad-91cf-4e8d-a417-6f9fb12db99e": {
    "Id": "A8123b7ad-91cf-4e8d-a417-6f9fb12db99e",
    "IdConcepto": "ifrs-full_OtherShorttermProvisions",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa011758d-8144-4e33-8ec2-1e84198df48a": {
    "Id": "Aa011758d-8144-4e33-8ec2-1e84198df48a",
    "IdConcepto": "ifrs-full_OtherShorttermProvisions",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9bd1794d-6dfb-462e-89b7-fd3f54442208": {
    "Id": "A9bd1794d-6dfb-462e-89b7-fd3f54442208",
    "IdConcepto": "ifrs-full_CurrentProvisions",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2682c3ec-8318-49fc-830f-8a3da26831f9": {
    "Id": "A2682c3ec-8318-49fc-830f-8a3da26831f9",
    "IdConcepto": "ifrs-full_CurrentProvisions",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A65e4b538-af54-476d-8da6-8cd8735d3f01": {
    "Id": "A65e4b538-af54-476d-8da6-8cd8735d3f01",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentPayables",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A359f3acd-8cde-4f43-80f9-de9a1ab142d8": {
    "Id": "A359f3acd-8cde-4f43-80f9-de9a1ab142d8",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentPayables",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3255425f-a54b-4d8b-90bc-8081c24c75b3": {
    "Id": "A3255425f-a54b-4d8b-90bc-8081c24c75b3",
    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesCurrent",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A04b6c0a4-60cd-46a7-a59d-e7137f834790": {
    "Id": "A04b6c0a4-60cd-46a7-a59d-e7137f834790",
    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesCurrent",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afab8e20b-b2a1-40b6-a013-b8b01c8e9fe2": {
    "Id": "Afab8e20b-b2a1-40b6-a013-b8b01c8e9fe2",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialLiabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0d55f31a-b161-4f6c-be55-c838f6bb47ad": {
    "Id": "A0d55f31a-b161-4f6c-be55-c838f6bb47ad",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialLiabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0fe91415-a47c-4c51-a135-5b7a5c88b391": {
    "Id": "A0fe91415-a47c-4c51-a135-5b7a5c88b391",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6ed55c4c-f374-453e-b3f4-fad4d2304d2e": {
    "Id": "A6ed55c4c-f374-453e-b3f4-fad4d2304d2e",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aab8e630a-be17-4446-9d4c-e515e7e887f6": {
    "Id": "Aab8e630a-be17-4446-9d4c-e515e7e887f6",
    "IdConcepto": "ifrs-full_CurrentLiabilitiesOtherThanLiabilitiesIncludedInDisposalGroupsClassifiedAsHeldForSale",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9f07ef61-2d58-4193-9487-b3fd21dfd423": {
    "Id": "A9f07ef61-2d58-4193-9487-b3fd21dfd423",
    "IdConcepto": "ifrs-full_CurrentLiabilitiesOtherThanLiabilitiesIncludedInDisposalGroupsClassifiedAsHeldForSale",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9590daf4-c5c0-4480-acae-238a83f2595a": {
    "Id": "A9590daf4-c5c0-4480-acae-238a83f2595a",
    "IdConcepto": "ifrs-full_LiabilitiesIncludedInDisposalGroupsClassifiedAsHeldForSale",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6fe751ee-3d64-415a-b821-b4eb455c6557": {
    "Id": "A6fe751ee-3d64-415a-b821-b4eb455c6557",
    "IdConcepto": "ifrs-full_LiabilitiesIncludedInDisposalGroupsClassifiedAsHeldForSale",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A21fb03c8-c2cb-4b04-9b28-6dc943fb0920": {
    "Id": "A21fb03c8-c2cb-4b04-9b28-6dc943fb0920",
    "IdConcepto": "ifrs-full_CurrentLiabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af123321f-fe28-44fc-afbf-bb5e609812f8": {
    "Id": "Af123321f-fe28-44fc-afbf-bb5e609812f8",
    "IdConcepto": "ifrs-full_CurrentLiabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab68c0deb-849b-4726-80e9-bd168e6c9347": {
    "Id": "Ab68c0deb-849b-4726-80e9-bd168e6c9347",
    "IdConcepto": "ifrs-full_NoncurrentProvisionsForEmployeeBenefits",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A600b37f0-fc4f-4263-98dc-b738e6dd435c": {
    "Id": "A600b37f0-fc4f-4263-98dc-b738e6dd435c",
    "IdConcepto": "ifrs-full_NoncurrentProvisionsForEmployeeBenefits",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab19610ff-dd7d-4d4d-b6d9-03a0c63f34b3": {
    "Id": "Ab19610ff-dd7d-4d4d-b6d9-03a0c63f34b3",
    "IdConcepto": "ifrs-full_OtherLongtermProvisions",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A12f61bc1-361a-48ce-b845-7cb2d543e711": {
    "Id": "A12f61bc1-361a-48ce-b845-7cb2d543e711",
    "IdConcepto": "ifrs-full_OtherLongtermProvisions",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A40658e7d-2211-468e-834d-4aabf0c7c849": {
    "Id": "A40658e7d-2211-468e-834d-4aabf0c7c849",
    "IdConcepto": "ifrs-full_NoncurrentProvisions",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6c2f4699-cb48-4de8-9a7e-0535ef0c6aba": {
    "Id": "A6c2f4699-cb48-4de8-9a7e-0535ef0c6aba",
    "IdConcepto": "ifrs-full_NoncurrentProvisions",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6c9539e9-7d25-480b-89cb-36e90208a8bf": {
    "Id": "A6c9539e9-7d25-480b-89cb-36e90208a8bf",
    "IdConcepto": "ifrs-full_NoncurrentPayables",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8eb6ef81-fa60-4ecc-a71b-755d0583ad4a": {
    "Id": "A8eb6ef81-fa60-4ecc-a71b-755d0583ad4a",
    "IdConcepto": "ifrs-full_NoncurrentPayables",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A36cb0fe3-3076-46da-ba20-e5a4b5c9a527": {
    "Id": "A36cb0fe3-3076-46da-ba20-e5a4b5c9a527",
    "IdConcepto": "ifrs-full_DeferredTaxLiabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5bc98576-dbb7-4f5e-8bd5-d718b415450f": {
    "Id": "A5bc98576-dbb7-4f5e-8bd5-d718b415450f",
    "IdConcepto": "ifrs-full_DeferredTaxLiabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0ba1a163-ed14-48f2-9a65-64882d56a9ff": {
    "Id": "A0ba1a163-ed14-48f2-9a65-64882d56a9ff",
    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesNoncurrent",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af56abb5c-b566-412a-948d-b981a1284af2": {
    "Id": "Af56abb5c-b566-412a-948d-b981a1284af2",
    "IdConcepto": "ifrs-full_CurrentTaxLiabilitiesNoncurrent",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac6b6f7a7-a7ef-4e0e-8cc5-67e73a3a8f69": {
    "Id": "Ac6b6f7a7-a7ef-4e0e-8cc5-67e73a3a8f69",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialLiabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac7b52cf5-8bdc-4395-9146-620fe6c3449b": {
    "Id": "Ac7b52cf5-8bdc-4395-9146-620fe6c3449b",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialLiabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abd66f98c-645a-4475-9a32-34f9f606cdfa": {
    "Id": "Abd66f98c-645a-4475-9a32-34f9f606cdfa",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A00721147-25e9-411a-b6d5-11bccd7bb65b": {
    "Id": "A00721147-25e9-411a-b6d5-11bccd7bb65b",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa0124747-18c2-4370-b727-da59305c08da": {
    "Id": "Aa0124747-18c2-4370-b727-da59305c08da",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa6b2834e-7855-410e-ac93-592120102e64": {
    "Id": "Aa6b2834e-7855-410e-ac93-592120102e64",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1f469228-1892-47ad-893c-6a15f17e1cdd": {
    "Id": "A1f469228-1892-47ad-893c-6a15f17e1cdd",
    "IdConcepto": "ifrs-full_Liabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae139d462-6f2c-4d7c-84ae-1addebd2f14e": {
    "Id": "Ae139d462-6f2c-4d7c-84ae-1addebd2f14e",
    "IdConcepto": "ifrs-full_Liabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A36756207-e699-4e60-833a-4c421bc35f78": {
    "Id": "A36756207-e699-4e60-833a-4c421bc35f78",
    "IdConcepto": "ifrs-full_IssuedCapital",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad0b17a62-8f50-4ea5-970f-ee7a12764f88": {
    "Id": "Ad0b17a62-8f50-4ea5-970f-ee7a12764f88",
    "IdConcepto": "ifrs-full_IssuedCapital",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac033f12a-a126-43d1-a6b0-1118cf04b529": {
    "Id": "Ac033f12a-a126-43d1-a6b0-1118cf04b529",
    "IdConcepto": "ifrs-full_RetainedEarnings",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0e74af7a-2933-4f25-99d5-b94eb6cfd86f": {
    "Id": "A0e74af7a-2933-4f25-99d5-b94eb6cfd86f",
    "IdConcepto": "ifrs-full_RetainedEarnings",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A909d8eff-9096-4c7f-aba7-7d5047d2108d": {
    "Id": "A909d8eff-9096-4c7f-aba7-7d5047d2108d",
    "IdConcepto": "ifrs-full_SharePremium",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae2f1d3e4-c2f9-4e01-b924-75ecb1920fc9": {
    "Id": "Ae2f1d3e4-c2f9-4e01-b924-75ecb1920fc9",
    "IdConcepto": "ifrs-full_SharePremium",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afdda9b95-3305-47f9-868e-e32af22acb83": {
    "Id": "Afdda9b95-3305-47f9-868e-e32af22acb83",
    "IdConcepto": "ifrs-full_TreasuryShares",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A62df6335-4b4a-4d6f-b955-1939060c3896": {
    "Id": "A62df6335-4b4a-4d6f-b955-1939060c3896",
    "IdConcepto": "ifrs-full_TreasuryShares",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aca5dcd8b-56e3-45b9-9f45-a774201f4f11": {
    "Id": "Aca5dcd8b-56e3-45b9-9f45-a774201f4f11",
    "IdConcepto": "sds_InversionSuplementariaAlCapitalAsignado",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A05ea29e2-01c8-4181-aa01-b56a7636e3de": {
    "Id": "A05ea29e2-01c8-4181-aa01-b56a7636e3de",
    "IdConcepto": "sds_InversionSuplementariaAlCapitalAsignado",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aea84c4e7-eebb-47b6-b113-b56a535da59b": {
    "Id": "Aea84c4e7-eebb-47b6-b113-b56a535da59b",
    "IdConcepto": "ifrs-full_OtherEquityInterest",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A55f847b4-5dcd-40b0-8054-14ee3dc8c77b": {
    "Id": "A55f847b4-5dcd-40b0-8054-14ee3dc8c77b",
    "IdConcepto": "ifrs-full_OtherEquityInterest",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4ecb8963-f0d0-4522-a0b5-4989eec019a0": {
    "Id": "A4ecb8963-f0d0-4522-a0b5-4989eec019a0",
    "IdConcepto": "ifrs-full_OtherReserves",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A41a0ec43-0fc8-4409-9930-04d55ca48582": {
    "Id": "A41a0ec43-0fc8-4409-9930-04d55ca48582",
    "IdConcepto": "ifrs-full_OtherReserves",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3ae6da1c-fdce-4a8f-a7df-4e773b2b72df": {
    "Id": "A3ae6da1c-fdce-4a8f-a7df-4e773b2b72df",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad22d5151-ce98-4bc0-8603-28f37dca0091": {
    "Id": "Ad22d5151-ce98-4bc0-8603-28f37dca0091",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3b3000eb-bd49-4470-b50e-9b162dcf08b7": {
    "Id": "A3b3000eb-bd49-4470-b50e-9b162dcf08b7",
    "IdConcepto": "ifrs-full_EquityAndLiabilities",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab87c18d0-ca09-45a8-b3f2-5cd8d0ae172e": {
    "Id": "Ab87c18d0-ca09-45a8-b3f2-5cd8d0ae172e",
    "IdConcepto": "ifrs-full_EquityAndLiabilities",
    "IdContextoPlantilla": "Cierre_Anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Moneda_Reprte",
    "Decimales": "INF",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }
};
        }
    }

}