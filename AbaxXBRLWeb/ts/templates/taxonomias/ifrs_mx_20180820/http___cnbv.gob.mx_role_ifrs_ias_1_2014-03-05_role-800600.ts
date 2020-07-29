///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ias_1_2014-03-05_role-800600
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ias_1_2014_03_05_role_800600 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ias_1_2014_03_05_role_800600
         */
        constructor() {

            this.ListadoDeFormulas = {
                //Se integran formulas de < Value Assertion>  ID : VA_800600_01: string - length(Información a revelar sobre un resumen de las políticas contables significativas [bloque de texto] ) gt 0[dimensional]
                'formula101': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula101',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    })
            };

            this.ContextosPlantillaPorId = {
  "trimestre_actual": {
    "Id": "trimestre_actual",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2015_07_01",
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
  },
  "acumulado_ejercicio_actual": {
    "Id": "acumulado_ejercicio_actual",
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
  },
  "trimestre_ejercicio_anterior": {
    "Id": "trimestre_ejercicio_anterior",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2014_07_01",
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
  "acumulado_ejercicio_anterior": {
    "Id": "acumulado_ejercicio_anterior",
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
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "Ad72c522e-d186-4035-bd30-27ed3c32afe3": {
    "Id": "Ad72c522e-d186-4035-bd30-27ed3c32afe3",
    "IdConcepto": "ifrs-full_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
   "Aff316f82-c86d-42ca-8965-4cc198e661dc": {
    "Id": "Aff316f82-c86d-42ca-8965-4cc198e661dc",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForAvailableforsaleFinancialAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2b6094b0-cd38-40e9-976e-22ebfb95ed9c": {
    "Id": "A2b6094b0-cd38-40e9-976e-22ebfb95ed9c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBiologicalAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9882be40-baa4-4f00-88ee-d894801712d6": {
    "Id": "A9882be40-baa4-4f00-88ee-d894801712d6",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBorrowingCostsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3bcaec65-9663-4e52-b2a4-a31ca7c5dc09": {
    "Id": "A3bcaec65-9663-4e52-b2a4-a31ca7c5dc09",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBorrowingsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A24c9f492-5088-4492-a31d-6d5e9b8b34ab": {
    "Id": "A24c9f492-5088-4492-a31d-6d5e9b8b34ab",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBusinessCombinationsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa6ba6a2e-ab75-487c-b3da-f663587e4695": {
    "Id": "Aa6ba6a2e-ab75-487c-b3da-f663587e4695",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForBusinessCombinationsAndGoodwillExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A696343ce-b44f-4067-853a-523da9be0909": {
    "Id": "A696343ce-b44f-4067-853a-523da9be0909",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForCashFlowsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae0670c64-d15d-4a21-9423-7a23fa9a399d": {
    "Id": "Ae0670c64-d15d-4a21-9423-7a23fa9a399d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForCollateralExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac884ba67-e2db-4690-bafd-e909f4d9916c": {
    "Id": "Ac884ba67-e2db-4690-bafd-e909f4d9916c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForConstructionInProgressExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac33e9fc0-c66e-4a18-81fd-aeca0ab8ceb0": {
    "Id": "Ac33e9fc0-c66e-4a18-81fd-aeca0ab8ceb0",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForCustomerAcquisitionCostsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad72db23f-7960-4c84-b766-a32c85f986ec": {
    "Id": "Ad72db23f-7960-4c84-b766-a32c85f986ec",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDecommissioningRestorationAndRehabilitationProvisionsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae25e111e-3aa3-4c29-ba3f-6a7ad05205a3": {
    "Id": "Ae25e111e-3aa3-4c29-ba3f-6a7ad05205a3",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDeferredAcquisitionCostsArisingFromInsuranceContractsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad4388b4b-7c68-4975-aa2f-c3e52bf9d97d": {
    "Id": "Ad4388b4b-7c68-4975-aa2f-c3e52bf9d97d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDepreciationExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A08b6e1e9-0262-4557-8e8b-4bc64388b5e7": {
    "Id": "A08b6e1e9-0262-4557-8e8b-4bc64388b5e7",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerecognitionOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A14f0c3a6-f223-47c4-8f9a-e24b9556789c": {
    "Id": "A14f0c3a6-f223-47c4-8f9a-e24b9556789c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerivativeFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8c7dfa8a-17c7-44aa-a7fb-38217da82927": {
    "Id": "A8c7dfa8a-17c7-44aa-a7fb-38217da82927",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDerivativeFinancialInstrumentsAndHedgingExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad47d5ef1-9a63-4364-9c45-ec2bd550234a": {
    "Id": "Ad47d5ef1-9a63-4364-9c45-ec2bd550234a",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyToDetermineComponentsOfCashAndCashEquivalents",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6121eac4-56aa-4a07-9dec-31dbfa353c12": {
    "Id": "A6121eac4-56aa-4a07-9dec-31dbfa353c12",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDiscontinuedOperationsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A38c874ee-3120-4e2d-8392-8234b58bc3f0": {
    "Id": "A38c874ee-3120-4e2d-8392-8234b58bc3f0",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForDividendsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aaf6c4c53-2987-4eec-94f0-daf53b72a7b9": {
    "Id": "Aaf6c4c53-2987-4eec-94f0-daf53b72a7b9",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForEarningsPerShareExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A52fcbe9c-8917-42cb-81f3-e2355577960d": {
    "Id": "A52fcbe9c-8917-42cb-81f3-e2355577960d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForEmployeeBenefitsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aaa1c7e16-1087-43b6-b51d-77e1932f9b2e": {
    "Id": "Aaa1c7e16-1087-43b6-b51d-77e1932f9b2e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForEnvironmentRelatedExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7ada6047-768d-477e-914f-051b2fde8bfa": {
    "Id": "A7ada6047-768d-477e-914f-051b2fde8bfa",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForExpensesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aad11240e-a1fa-47d9-b5dd-abaecb73b786": {
    "Id": "Aad11240e-a1fa-47d9-b5dd-abaecb73b786",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForExplorationAndEvaluationExpenditures",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A70745b1a-7d89-40d0-b0f8-983b613225ff": {
    "Id": "A70745b1a-7d89-40d0-b0f8-983b613225ff",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFairValueMeasurementExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae9c29bad-d76d-4998-9944-93d5a072d943": {
    "Id": "Ae9c29bad-d76d-4998-9944-93d5a072d943",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFeeAndCommissionIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa4300335-482e-4129-8d74-08de17b96d3c": {
    "Id": "Aa4300335-482e-4129-8d74-08de17b96d3c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinanceCostsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad41ca42d-1ad9-4f95-b741-566cb55937b9": {
    "Id": "Ad41ca42d-1ad9-4f95-b741-566cb55937b9",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinanceIncomeAndCostsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9fe5da66-fe0d-4405-a91a-a7aeabd5ac45": {
    "Id": "A9fe5da66-fe0d-4405-a91a-a7aeabd5ac45",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aba7b1474-d220-4681-b50d-fdaae2714297": {
    "Id": "Aba7b1474-d220-4681-b50d-fdaae2714297",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialGuaranteesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A26b38dbb-22c8-4eea-bcf2-c1a9d9d92b2e": {
    "Id": "A26b38dbb-22c8-4eea-bcf2-c1a9d9d92b2e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afd342727-c9c1-4278-b901-5261abfa87b4": {
    "Id": "Afd342727-c9c1-4278-b901-5261abfa87b4",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialInstrumentsAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae7aa4c71-8385-45c2-8884-576040ee9e4c": {
    "Id": "Ae7aa4c71-8385-45c2-8884-576040ee9e4c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFinancialLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa8069a86-7825-4fdd-a347-6a4b5b11eda8": {
    "Id": "Aa8069a86-7825-4fdd-a347-6a4b5b11eda8",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForForeignCurrencyTranslationExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9ab70946-c1c4-4f43-b3be-f631ce130e36": {
    "Id": "A9ab70946-c1c4-4f43-b3be-f631ce130e36",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForFunctionalCurrencyExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Add478674-992b-4c6d-a9a7-bcc8ee9ce124": {
    "Id": "Add478674-992b-4c6d-a9a7-bcc8ee9ce124",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForGoodwillExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afc4599e7-681f-4b38-9858-19f95ab04525": {
    "Id": "Afc4599e7-681f-4b38-9858-19f95ab04525",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForGovernmentGrants",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af6b0b457-2766-4c69-abd6-193fb4eb6f43": {
    "Id": "Af6b0b457-2766-4c69-abd6-193fb4eb6f43",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForHedgingExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8d6abadd-43f2-4577-852a-ea87a1722cec": {
    "Id": "A8d6abadd-43f2-4577-852a-ea87a1722cec",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForHeldtomaturityInvestmentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae89a9bd2-bd41-41ce-b0e7-985a95450875": {
    "Id": "Ae89a9bd2-bd41-41ce-b0e7-985a95450875",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5c742c3e-17b3-4928-9b2a-ab35bd86162f": {
    "Id": "A5c742c3e-17b3-4928-9b2a-ab35bd86162f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfFinancialAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac862acc1-17d2-4a58-9eaa-22537b172e40": {
    "Id": "Ac862acc1-17d2-4a58-9eaa-22537b172e40",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForImpairmentOfNonfinancialAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2a330b1e-0f86-442a-8db0-16a07e6391df": {
    "Id": "A2a330b1e-0f86-442a-8db0-16a07e6391df",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIncomeTaxExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad5a592ed-9e31-48b3-9287-522e79189896": {
    "Id": "Ad5a592ed-9e31-48b3-9287-522e79189896",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInsuranceContracts",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A934482cb-a45d-405f-9ebe-42a0c7364929": {
    "Id": "A934482cb-a45d-405f-9ebe-42a0c7364929",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIntangibleAssetsAndGoodwillExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A520f7797-26a4-46a1-b7fd-8b910ccde63a": {
    "Id": "A520f7797-26a4-46a1-b7fd-8b910ccde63a",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIntangibleAssetsOtherThanGoodwillExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4022f1d4-aff8-455b-b8c5-26363fbb9298": {
    "Id": "A4022f1d4-aff8-455b-b8c5-26363fbb9298",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInterestIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A431e6363-fc58-4492-abfa-b70b9ff0778f": {
    "Id": "A431e6363-fc58-4492-abfa-b70b9ff0778f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentInAssociates",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A139a0394-f54c-4a76-94b2-e0d9f18d3ac3": {
    "Id": "A139a0394-f54c-4a76-94b2-e0d9f18d3ac3",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentInAssociatesAndJointVenturesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5d2d9950-a372-4d0e-baf2-8e7528da6372": {
    "Id": "A5d2d9950-a372-4d0e-baf2-8e7528da6372",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentsInJointVentures",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa5696cc2-6b1e-4fc9-acc6-f88c2200f897": {
    "Id": "Aa5696cc2-6b1e-4fc9-acc6-f88c2200f897",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentPropertyExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A54344910-8f0b-4cdb-a2ff-cc04b8449b9f": {
    "Id": "A54344910-8f0b-4cdb-a2ff-cc04b8449b9f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForInvestmentsOtherThanInvestmentsAccountedForUsingEquityMethodExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abb36a946-f148-4198-9d43-351fc4cf87bb": {
    "Id": "Abb36a946-f148-4198-9d43-351fc4cf87bb",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForIssuedCapitalExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2f376e3e-f033-4c0f-a78a-06323cf72fa4": {
    "Id": "A2f376e3e-f033-4c0f-a78a-06323cf72fa4",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForLeasesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab3d899a9-256c-4c04-a4f0-a5cdb2ce93a8": {
    "Id": "Ab3d899a9-256c-4c04-a4f0-a5cdb2ce93a8",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForLoansAndReceivablesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A31fb4d15-6dca-49d0-ad25-ef4a081bd47d": {
    "Id": "A31fb4d15-6dca-49d0-ad25-ef4a081bd47d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForMeasuringInventories",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab2626559-bf4d-48e8-bd81-3771b96ef417": {
    "Id": "Ab2626559-bf4d-48e8-bd81-3771b96ef417",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForMiningAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa6a01fc4-7492-4902-a99b-a4239f942041": {
    "Id": "Aa6a01fc4-7492-4902-a99b-a4239f942041",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForMiningRightsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5df16333-79e7-444e-8406-b446fbfb53b5": {
    "Id": "A5df16333-79e7-444e-8406-b446fbfb53b5",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForNoncurrentAssetsOrDisposalGroupsClassifiedAsHeldForSaleExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9f8cb41a-bc1e-4d82-9719-8ab85eb18465": {
    "Id": "A9f8cb41a-bc1e-4d82-9719-8ab85eb18465",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForNoncurrentAssetsOrDisposalGroupsClassifiedAsHeldForSaleAndDiscontinuedOperationsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8e7cd065-e56a-4768-bcb5-7abb7de447be": {
    "Id": "A8e7cd065-e56a-4768-bcb5-7abb7de447be",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForOffsettingOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A89b4dd28-160a-4962-8d76-57ee47f115f3": {
    "Id": "A89b4dd28-160a-4962-8d76-57ee47f115f3",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForOilAndGasAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aeaa1819b-9930-42d3-b52e-19555291b4fc": {
    "Id": "Aeaa1819b-9930-42d3-b52e-19555291b4fc",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForPropertyPlantAndEquipmentExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afca0051b-860a-4c45-b182-1c9f2e07d387": {
    "Id": "Afca0051b-860a-4c45-b182-1c9f2e07d387",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForProvisionsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7ba84652-3ea7-4aca-bb3a-21b7180c4d8d": {
    "Id": "A7ba84652-3ea7-4aca-bb3a-21b7180c4d8d",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForReclassificationOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A70edae58-b011-4d21-afcd-98bea1425cc5": {
    "Id": "A70edae58-b011-4d21-afcd-98bea1425cc5",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRecognisingDifferenceBetweenFairValueAtInitialRecognitionAndAmountDeterminedUsingValuationTechniqueExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A64f5363e-220f-41b7-898f-0a43fde17670": {
    "Id": "A64f5363e-220f-41b7-898f-0a43fde17670",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRecognitionOfRevenue",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A916c1cd7-a4c3-4e2e-a897-137bd96c07a2": {
    "Id": "A916c1cd7-a4c3-4e2e-a897-137bd96c07a2",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForReinsuranceExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A310a8c19-b441-4ba5-afaf-d077f32bd14c": {
    "Id": "A310a8c19-b441-4ba5-afaf-d077f32bd14c",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRepurchaseAndReverseRepurchaseAgreementsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aab1617ab-93df-49bc-a268-3be9b7b20a4e": {
    "Id": "Aab1617ab-93df-49bc-a268-3be9b7b20a4e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForResearchAndDevelopmentExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acfeefb75-d58a-468e-a1cd-c4120a945f8f": {
    "Id": "Acfeefb75-d58a-468e-a1cd-c4120a945f8f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForRestrictedCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acb6a6e11-60be-4d2b-b8d1-087f8728662e": {
    "Id": "Acb6a6e11-60be-4d2b-b8d1-087f8728662e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForSegmentReportingExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A98287311-0cce-47a8-81e8-68129a4b82f4": {
    "Id": "A98287311-0cce-47a8-81e8-68129a4b82f4",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForSharebasedPaymentTransactionsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A53f68dbe-f204-4e84-a7e9-f407192ef262": {
    "Id": "A53f68dbe-f204-4e84-a7e9-f407192ef262",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForStrippingCostsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Accc0d095-4019-4321-bbc0-af81c5555c3f": {
    "Id": "Accc0d095-4019-4321-bbc0-af81c5555c3f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForSubsidiariesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2200d82a-5f93-44e0-a164-82356ca17399": {
    "Id": "A2200d82a-5f93-44e0-a164-82356ca17399",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTerminationBenefits",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A91f46a25-c897-4244-85c6-3557acb39604": {
    "Id": "A91f46a25-c897-4244-85c6-3557acb39604",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradeAndOtherPayablesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A878a8e24-c406-44b2-8b99-20bd9d82217b": {
    "Id": "A878a8e24-c406-44b2-8b99-20bd9d82217b",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradeAndOtherReceivablesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A871d5e32-47b4-4f35-9af5-4c00b4655ee5": {
    "Id": "A871d5e32-47b4-4f35-9af5-4c00b4655ee5",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTradingIncomeAndExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1548e53c-9f1c-41b8-a98c-b6b7a1434d6f": {
    "Id": "A1548e53c-9f1c-41b8-a98c-b6b7a1434d6f",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTransactionsWithNoncontrollingInterestsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A38386a7c-c18f-476c-afb9-f79c1e0a20e2": {
    "Id": "A38386a7c-c18f-476c-afb9-f79c1e0a20e2",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTransactionsWithRelatedPartiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A705dde27-fa20-4a5b-b6c2-b840ceba129e": {
    "Id": "A705dde27-fa20-4a5b-b6c2-b840ceba129e",
    "IdConcepto": "ifrs-full_DescriptionOfAccountingPolicyForTreasurySharesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae43aad04-38a6-4d34-8aea-497dc73fd6c0": {
    "Id": "Ae43aad04-38a6-4d34-8aea-497dc73fd6c0",
    "IdConcepto": "ifrs-full_DescriptionOfOtherAccountingPoliciesRelevantToUnderstandingOfFinancialStatements",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
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