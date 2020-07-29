///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/ias_1_2014-03-05_role-800500
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_ias_1_2014_03_05_role_800500 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_ias_1_2014_03_05_role_800500
         */
        constructor() {

            this.ListadoDeFormulas = {
                //Se integran formulas de < Value Assertion>  ID : VA_800500_01: string - length(Información a revelar sobre notas, declaración de cumplimiento con las NIIF y otra información explicativa de la entidad [bloque de texto] ) gt 0[dimensional]
                'formula102': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula102',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory',
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
  "A4db3626c-a6e4-4b6a-a432-0ff0bacd4797": {
    "Id": "A4db3626c-a6e4-4b6a-a432-0ff0bacd4797",
    "IdConcepto": "ifrs-full_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
   
  "A78241a5d-937b-4a83-b132-8d7cfee818b9": {
    "Id": "A78241a5d-937b-4a83-b132-8d7cfee818b9",
    "IdConcepto": "ifrs-full_DisclosureOfAccountingJudgementsAndEstimatesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac64edc91-9cc9-4793-99c2-7a702817f167": {
    "Id": "Ac64edc91-9cc9-4793-99c2-7a702817f167",
    "IdConcepto": "ifrs-full_DisclosureOfAccruedExpensesAndOtherLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A39e470b4-0baa-4e69-8506-e061e6feeffe": {
    "Id": "A39e470b4-0baa-4e69-8506-e061e6feeffe",
    "IdConcepto": "ifrs-full_DisclosureOfAllowanceForCreditLossesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4daf7fb0-6084-44bf-bfe0-13093dc324c7": {
    "Id": "A4daf7fb0-6084-44bf-bfe0-13093dc324c7",
    "IdConcepto": "ifrs-full_DisclosureOfSignificantInvestmentsInAssociatesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A577b8c02-dc86-47f6-80ad-3ad43da845f0": {
    "Id": "A577b8c02-dc86-47f6-80ad-3ad43da845f0",
    "IdConcepto": "ifrs-full_DisclosureOfAuditorsRemunerationExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acba20dec-7509-4659-94b4-55da0afce2ad": {
    "Id": "Acba20dec-7509-4659-94b4-55da0afce2ad",
    "IdConcepto": "ifrs-full_DisclosureOfAuthorisationOfFinancialStatementsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5c8b040f-0753-4949-8c3e-524a22fa6142": {
    "Id": "A5c8b040f-0753-4949-8c3e-524a22fa6142",
    "IdConcepto": "ifrs-full_DisclosureOfAvailableforsaleAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2c1250cd-9ecf-4af9-a827-b6e16b83c7bc": {
    "Id": "A2c1250cd-9ecf-4af9-a827-b6e16b83c7bc",
    "IdConcepto": "ifrs-full_DisclosureOfBasisOfConsolidationExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acb75f221-1b06-46b9-b23d-b0249d2bcb31": {
    "Id": "Acb75f221-1b06-46b9-b23d-b0249d2bcb31",
    "IdConcepto": "ifrs-full_DisclosureOfBasisOfPreparationOfFinancialStatementsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5c1a11f3-935b-47b5-a8b5-aacfddfee4e1": {
    "Id": "A5c1a11f3-935b-47b5-a8b5-aacfddfee4e1",
    "IdConcepto": "ifrs-full_DisclosureOfBiologicalAssetsAndGovernmentGrantsForAgriculturalActivityExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0563a087-dfa4-4b51-8141-02789c4f165f": {
    "Id": "A0563a087-dfa4-4b51-8141-02789c4f165f",
    "IdConcepto": "ifrs-full_DisclosureOfBorrowingsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4d232519-ea5a-43f5-a67c-3b5c1cd3566c": {
    "Id": "A4d232519-ea5a-43f5-a67c-3b5c1cd3566c",
    "IdConcepto": "ifrs-full_DisclosureOfBusinessCombinationsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A75d731f3-f25c-436b-840d-ba724677f18b": {
    "Id": "A75d731f3-f25c-436b-840d-ba724677f18b",
    "IdConcepto": "ifrs-full_DisclosureOfCashAndBankBalancesAtCentralBanksExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae5696aa3-527f-41b0-bba2-4e31d91b6922": {
    "Id": "Ae5696aa3-527f-41b0-bba2-4e31d91b6922",
    "IdConcepto": "ifrs-full_DisclosureOfCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0dd00d0e-bdaf-463c-8358-148bff0ad1b4": {
    "Id": "A0dd00d0e-bdaf-463c-8358-148bff0ad1b4",
    "IdConcepto": "ifrs-full_DisclosureOfCashFlowStatementExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac7b8964d-b0f5-4aba-a695-d9cab5f95494": {
    "Id": "Ac7b8964d-b0f5-4aba-a695-d9cab5f95494",
    "IdConcepto": "ifrs-full_DisclosureOfChangesInAccountingPoliciesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8e4f87a1-142c-448b-a532-8dada45b942a": {
    "Id": "A8e4f87a1-142c-448b-a532-8dada45b942a",
    "IdConcepto": "ifrs-full_DisclosureOfChangesInAccountingPoliciesAccountingEstimatesAndErrorsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adefc7150-baf0-4aae-be29-acff30830e0d": {
    "Id": "Adefc7150-baf0-4aae-be29-acff30830e0d",
    "IdConcepto": "ifrs-full_DisclosureOfCollateralExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A32cea732-773c-4e93-88a7-e57b85f5caf0": {
    "Id": "A32cea732-773c-4e93-88a7-e57b85f5caf0",
    "IdConcepto": "ifrs-full_DisclosureOfClaimsAndBenefitsPaidExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1782a0c6-96b6-4a3c-82fd-68af0d48da0f": {
    "Id": "A1782a0c6-96b6-4a3c-82fd-68af0d48da0f",
    "IdConcepto": "ifrs-full_DisclosureOfCommitmentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afad136fa-1722-445c-b83a-322a4a6276cf": {
    "Id": "Afad136fa-1722-445c-b83a-322a4a6276cf",
    "IdConcepto": "ifrs-full_DisclosureOfCommitmentsAndContingentLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad43dd652-0443-48ab-8f43-8b7b6918813e": {
    "Id": "Ad43dd652-0443-48ab-8f43-8b7b6918813e",
    "IdConcepto": "ifrs-full_DisclosureOfContingentLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0698f598-39ec-4542-b192-4a301920b135": {
    "Id": "A0698f598-39ec-4542-b192-4a301920b135",
    "IdConcepto": "ifrs-full_DisclosureOfCostOfSalesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af7c450a3-28f0-43ae-b5b4-0b4113d4f31e": {
    "Id": "Af7c450a3-28f0-43ae-b5b4-0b4113d4f31e",
    "IdConcepto": "ifrs-full_DisclosureOfCreditRiskExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5b9a65e8-f66f-485d-a901-42fe5b8dd848": {
    "Id": "A5b9a65e8-f66f-485d-a901-42fe5b8dd848",
    "IdConcepto": "ifrs-full_DisclosureOfDebtSecuritiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abd7b1f6b-e22d-491e-ae82-4e707113735c": {
    "Id": "Abd7b1f6b-e22d-491e-ae82-4e707113735c",
    "IdConcepto": "ifrs-full_DisclosureOfDeferredAcquisitionCostsArisingFromInsuranceContractsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6b5842b0-1d2d-4014-8a18-169ace669447": {
    "Id": "A6b5842b0-1d2d-4014-8a18-169ace669447",
    "IdConcepto": "ifrs-full_DisclosureOfDeferredIncomeExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afd0411c7-6550-4df6-b0e6-30b91e731349": {
    "Id": "Afd0411c7-6550-4df6-b0e6-30b91e731349",
    "IdConcepto": "ifrs-full_DisclosureOfDeferredTaxesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aebd33f74-b81e-4bab-94fb-00dd87028af6": {
    "Id": "Aebd33f74-b81e-4bab-94fb-00dd87028af6",
    "IdConcepto": "ifrs-full_DisclosureOfDepositsFromBanksExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abc9669ea-9f89-405a-a080-e04f9a2f88f0": {
    "Id": "Abc9669ea-9f89-405a-a080-e04f9a2f88f0",
    "IdConcepto": "ifrs-full_DisclosureOfDepositsFromCustomersExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8de21c33-e036-4abb-9f89-09c6bfecf204": {
    "Id": "A8de21c33-e036-4abb-9f89-09c6bfecf204",
    "IdConcepto": "ifrs-full_DisclosureOfDepreciationAndAmortisationExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aeba8c602-b184-465d-8726-cc4e1425234b": {
    "Id": "Aeba8c602-b184-465d-8726-cc4e1425234b",
    "IdConcepto": "ifrs-full_DisclosureOfDerivativeFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A02a10e32-3204-4c98-8009-56e7db98025e": {
    "Id": "A02a10e32-3204-4c98-8009-56e7db98025e",
    "IdConcepto": "ifrs-full_DisclosureOfDiscontinuedOperationsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ac78dfb30-a55a-448d-9bdf-0d7b804b294a": {
    "Id": "Ac78dfb30-a55a-448d-9bdf-0d7b804b294a",
    "IdConcepto": "ifrs-full_DisclosureOfDividendsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af034a160-1e57-435b-8439-bea756e99754": {
    "Id": "Af034a160-1e57-435b-8439-bea756e99754",
    "IdConcepto": "ifrs-full_DisclosureOfEarningsPerShareExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A005ef02d-dd2c-467d-8e3e-45322e42a856": {
    "Id": "A005ef02d-dd2c-467d-8e3e-45322e42a856",
    "IdConcepto": "ifrs-full_DisclosureOfEffectOfChangesInForeignExchangeRatesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa60e8468-958e-4ddb-aa7e-a9e1fe6d98a4": {
    "Id": "Aa60e8468-958e-4ddb-aa7e-a9e1fe6d98a4",
    "IdConcepto": "ifrs-full_DisclosureOfEmployeeBenefitsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A98347058-bafb-46eb-a2bd-1029430e52a8": {
    "Id": "A98347058-bafb-46eb-a2bd-1029430e52a8",
    "IdConcepto": "ifrs-full_DisclosureOfEntitysReportableSegmentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aff969ad0-734a-40ec-8c8a-ca9f432ef864": {
    "Id": "Aff969ad0-734a-40ec-8c8a-ca9f432ef864",
    "IdConcepto": "ifrs-full_DisclosureOfEventsAfterReportingPeriodExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acd5d3fb9-9763-49cb-84da-9c2ade1d53e7": {
    "Id": "Acd5d3fb9-9763-49cb-84da-9c2ade1d53e7",
    "IdConcepto": "ifrs-full_DisclosureOfExpensesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A99f7d0e5-65ce-4571-b019-076816a08c46": {
    "Id": "A99f7d0e5-65ce-4571-b019-076816a08c46",
    "IdConcepto": "ifrs-full_DisclosureOfExpensesByNatureExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A446b5a92-1259-40e5-afe5-d65b64e247db": {
    "Id": "A446b5a92-1259-40e5-afe5-d65b64e247db",
    "IdConcepto": "ifrs-full_DisclosureOfExplorationAndEvaluationAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3605fe60-3acf-4a37-96fd-60ed474ba939": {
    "Id": "A3605fe60-3acf-4a37-96fd-60ed474ba939",
    "IdConcepto": "ifrs-full_DisclosureOfFairValueMeasurementExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A79f7aa5e-2f46-4a74-84f9-868358a2c39b": {
    "Id": "A79f7aa5e-2f46-4a74-84f9-868358a2c39b",
    "IdConcepto": "ifrs-full_DisclosureOfFairValueOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa92052c2-0e64-4f26-b2e9-09f16683576c": {
    "Id": "Aa92052c2-0e64-4f26-b2e9-09f16683576c",
    "IdConcepto": "ifrs-full_DisclosureOfFeeAndCommissionIncomeExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa9dba2e5-595c-416c-924e-85f78d6ce45a": {
    "Id": "Aa9dba2e5-595c-416c-924e-85f78d6ce45a",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceCostExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A01148f2b-da55-43ef-b437-b29bdbaee36f": {
    "Id": "A01148f2b-da55-43ef-b437-b29bdbaee36f",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceIncomeExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3f60ff6b-e344-4d45-b08b-220fbdb12e25": {
    "Id": "A3f60ff6b-e344-4d45-b08b-220fbdb12e25",
    "IdConcepto": "ifrs-full_DisclosureOfFinanceIncomeExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae68afd77-93b6-4863-955b-8694b8128dc6": {
    "Id": "Ae68afd77-93b6-4863-955b-8694b8128dc6",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialAssetsHeldForTradingExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6ade27a5-c10b-421b-abf0-687110b7409f": {
    "Id": "A6ade27a5-c10b-421b-abf0-687110b7409f",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A416ae0d3-6ee3-48c3-a89f-9b798216356b": {
    "Id": "A416ae0d3-6ee3-48c3-a89f-9b798216356b",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A02d569fa-fa85-49ba-ac0b-5b3456c70576": {
    "Id": "A02d569fa-fa85-49ba-ac0b-5b3456c70576",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsDesignatedAtFairValueThroughProfitOrLossExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1175c334-f704-4f40-8a9d-f4a2afd9d15e": {
    "Id": "A1175c334-f704-4f40-8a9d-f4a2afd9d15e",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialInstrumentsHeldForTradingExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A78cd243e-d1cf-4cf6-855d-05b66fd8c3c7": {
    "Id": "A78cd243e-d1cf-4cf6-855d-05b66fd8c3c7",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialLiabilitiesHeldForTradingExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7b95a577-2929-4c72-86c2-d51985dc7baa": {
    "Id": "A7b95a577-2929-4c72-86c2-d51985dc7baa",
    "IdConcepto": "ifrs-full_DisclosureOfFinancialRiskManagementExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa8d6f513-2a0e-4a11-85f4-dd1627eac029": {
    "Id": "Aa8d6f513-2a0e-4a11-85f4-dd1627eac029",
    "IdConcepto": "ifrs-full_DisclosureOfFirstTimeAdoptionExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afeb67a35-7ee3-4973-8f91-67fec8ef1107": {
    "Id": "Afeb67a35-7ee3-4973-8f91-67fec8ef1107",
    "IdConcepto": "ifrs-full_DisclosureOfGeneralAndAdministrativeExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5f309eb8-4fd0-43d6-afcc-001c3cb9edde": {
    "Id": "A5f309eb8-4fd0-43d6-afcc-001c3cb9edde",
    "IdConcepto": "ifrs-full_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9229420e-b2d3-4298-b454-b5ff16e65b5f": {
    "Id": "A9229420e-b2d3-4298-b454-b5ff16e65b5f",
    "IdConcepto": "ifrs-full_DisclosureOfGoingConcernExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A59e6e196-3b69-467d-808d-a4530e7150e0": {
    "Id": "A59e6e196-3b69-467d-808d-a4530e7150e0",
    "IdConcepto": "ifrs-full_DisclosureOfGoodwillExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A84f59b45-f46a-4d50-b8c1-be7c33406985": {
    "Id": "A84f59b45-f46a-4d50-b8c1-be7c33406985",
    "IdConcepto": "ifrs-full_DisclosureOfGovernmentGrantsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab713127f-df68-41c5-a775-266b2bdba4a9": {
    "Id": "Ab713127f-df68-41c5-a775-266b2bdba4a9",
    "IdConcepto": "ifrs-full_DisclosureOfImpairmentOfAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A23b2d0b2-345d-4f25-9579-fdd39a862217": {
    "Id": "A23b2d0b2-345d-4f25-9579-fdd39a862217",
    "IdConcepto": "ifrs-full_DisclosureOfIncomeTaxExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A905476b9-885e-4757-a029-3cdf7abe6311": {
    "Id": "A905476b9-885e-4757-a029-3cdf7abe6311",
    "IdConcepto": "ifrs-full_DisclosureOfInformationAboutEmployeesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A03955052-9885-47f6-a321-75c52572adbf": {
    "Id": "A03955052-9885-47f6-a321-75c52572adbf",
    "IdConcepto": "ifrs-full_DisclosureOfInformationAboutKeyManagementPersonnelExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad4978ef8-f377-48e9-b0d2-8dc373a6235d": {
    "Id": "Ad4978ef8-f377-48e9-b0d2-8dc373a6235d",
    "IdConcepto": "ifrs-full_DisclosureOfInsuranceContractsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A45cfa098-e472-4e03-9d9d-bdc8296dd2f2": {
    "Id": "A45cfa098-e472-4e03-9d9d-bdc8296dd2f2",
    "IdConcepto": "ifrs-full_DisclosureOfInsurancePremiumRevenueExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab4d9e664-65a2-4fd6-abf1-4f1b94d2fa0d": {
    "Id": "Ab4d9e664-65a2-4fd6-abf1-4f1b94d2fa0d",
    "IdConcepto": "ifrs-full_DisclosureOfIntangibleAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af59db623-fa72-4801-9f9b-4bab00c46788": {
    "Id": "Af59db623-fa72-4801-9f9b-4bab00c46788",
    "IdConcepto": "ifrs-full_DisclosureOfIntangibleAssetsAndGoodwillExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5f7911c6-d39d-4913-8acf-e7d6a19d74d4": {
    "Id": "A5f7911c6-d39d-4913-8acf-e7d6a19d74d4",
    "IdConcepto": "ifrs-full_DisclosureOfInterestExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Affbc6f20-2561-449a-a55f-ffbd3853b1ec": {
    "Id": "Affbc6f20-2561-449a-a55f-ffbd3853b1ec",
    "IdConcepto": "ifrs-full_DisclosureOfInterestIncomeExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adee2d3b3-f226-4177-8a3b-0aab2e9a8dea": {
    "Id": "Adee2d3b3-f226-4177-8a3b-0aab2e9a8dea",
    "IdConcepto": "ifrs-full_DisclosureOfInterestIncomeExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa1e1e73f-469d-4c8e-b494-fae90d775772": {
    "Id": "Aa1e1e73f-469d-4c8e-b494-fae90d775772",
    "IdConcepto": "ifrs-full_DisclosureOfInventoriesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Acc017918-083c-49c5-b360-8086954c04ac": {
    "Id": "Acc017918-083c-49c5-b360-8086954c04ac",
    "IdConcepto": "ifrs-full_DisclosureOfInvestmentContractsLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad5676134-6f3f-4e75-92c3-888c956da859": {
    "Id": "Ad5676134-6f3f-4e75-92c3-888c956da859",
    "IdConcepto": "ifrs-full_DisclosureOfInvestmentPropertyExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab05ea8b0-5357-4686-9f2f-4cf26debc692": {
    "Id": "Ab05ea8b0-5357-4686-9f2f-4cf26debc692",
    "IdConcepto": "ifrs-full_DisclosureOfInvestmentsAccountedForUsingEquityMethodExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A209e2125-2e1f-4790-a19b-64ed08526fb5": {
    "Id": "A209e2125-2e1f-4790-a19b-64ed08526fb5",
    "IdConcepto": "ifrs-full_DisclosureOfInvestmentsOtherThanInvestmentsAccountedForUsingEquityMethodExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A98c088ae-72b3-4514-90f5-08794387feef": {
    "Id": "A98c088ae-72b3-4514-90f5-08794387feef",
    "IdConcepto": "ifrs-full_DisclosureOfIssuedCapitalExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1d22c447-3125-4de1-a3e4-3ffa04a421ef": {
    "Id": "A1d22c447-3125-4de1-a3e4-3ffa04a421ef",
    "IdConcepto": "ifrs-full_DisclosureOfJointVenturesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab5902c1b-3529-4eba-8342-ae751b3997ba": {
    "Id": "Ab5902c1b-3529-4eba-8342-ae751b3997ba",
    "IdConcepto": "ifrs-full_DisclosureOfLeasePrepaymentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A5d39e8e5-d336-4c49-8da0-e552821c9533": {
    "Id": "A5d39e8e5-d336-4c49-8da0-e552821c9533",
    "IdConcepto": "ifrs-full_DisclosureOfLeasesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A56921b1b-e0ba-40dc-8443-acb83322e3de": {
    "Id": "A56921b1b-e0ba-40dc-8443-acb83322e3de",
    "IdConcepto": "ifrs-full_DisclosureOfLiquidityRiskExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afa20fcdc-ef7e-496a-962b-a40fe71a51c1": {
    "Id": "Afa20fcdc-ef7e-496a-962b-a40fe71a51c1",
    "IdConcepto": "ifrs-full_DisclosureOfLoansAndAdvancesToBanksExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A23799150-81de-4876-872e-e7502ddc79fe": {
    "Id": "A23799150-81de-4876-872e-e7502ddc79fe",
    "IdConcepto": "ifrs-full_DisclosureOfLoansAndAdvancesToCustomersExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adba8f2a6-4f33-404d-8975-082e6908c706": {
    "Id": "Adba8f2a6-4f33-404d-8975-082e6908c706",
    "IdConcepto": "ifrs-full_DisclosureOfMarketRiskExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A89923dc3-86ed-4697-9493-b05bbd22b318": {
    "Id": "A89923dc3-86ed-4697-9493-b05bbd22b318",
    "IdConcepto": "ifrs-full_DisclosureOfNetAssetValueAttributableToUnitholdersExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A636e5f07-9378-46fc-be53-1c9839f8eb65": {
    "Id": "A636e5f07-9378-46fc-be53-1c9839f8eb65",
    "IdConcepto": "ifrs-full_DisclosureOfNoncontrollingInterestsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aed9db7ff-fad0-4a8d-a3e8-f7e3c6ff6ad6": {
    "Id": "Aed9db7ff-fad0-4a8d-a3e8-f7e3c6ff6ad6",
    "IdConcepto": "ifrs-full_DisclosureOfNoncurrentAssetsHeldForSaleAndDiscontinuedOperationsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7415423c-2f15-4b6c-a3bb-b01c69c0dd57": {
    "Id": "A7415423c-2f15-4b6c-a3bb-b01c69c0dd57",
    "IdConcepto": "ifrs-full_DisclosureOfNoncurrentAssetsOrDisposalGroupsClassifiedAsHeldForSaleExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Adfd3ad80-31f2-4f17-bb74-ea3fc7a49481": {
    "Id": "Adfd3ad80-31f2-4f17-bb74-ea3fc7a49481",
    "IdConcepto": "ifrs-full_DisclosureOfObjectivesPoliciesAndProcessesForManagingCapitalExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A75113b77-bfcd-403e-918b-4bb79649646d": {
    "Id": "A75113b77-bfcd-403e-918b-4bb79649646d",
    "IdConcepto": "ifrs-full_DisclosureOfOtherAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A13883105-4378-4fb7-9d29-6b781193ca0b": {
    "Id": "A13883105-4378-4fb7-9d29-6b781193ca0b",
    "IdConcepto": "ifrs-full_DisclosureOfOtherCurrentAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9554c348-ecd7-4770-924a-843ac0e04eb8": {
    "Id": "A9554c348-ecd7-4770-924a-843ac0e04eb8",
    "IdConcepto": "ifrs-full_DisclosureOfOtherCurrentLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abda8be78-55db-4ed5-9a30-0ac08865d7fc": {
    "Id": "Abda8be78-55db-4ed5-9a30-0ac08865d7fc",
    "IdConcepto": "ifrs-full_DisclosureOfOtherLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A984421dd-e3f7-4d70-8045-22e25184f865": {
    "Id": "A984421dd-e3f7-4d70-8045-22e25184f865",
    "IdConcepto": "ifrs-full_DisclosureOfOtherNoncurrentAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A486f58c6-b20d-4f62-8fb3-083e4348ec74": {
    "Id": "A486f58c6-b20d-4f62-8fb3-083e4348ec74",
    "IdConcepto": "ifrs-full_DisclosureOfOtherNoncurrentLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae6a6d95f-c83b-44a9-9b65-bc87e5603688": {
    "Id": "Ae6a6d95f-c83b-44a9-9b65-bc87e5603688",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae28e89fb-df7f-417e-b5a1-e25bd0ced8fa": {
    "Id": "Ae28e89fb-df7f-417e-b5a1-e25bd0ced8fa",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingIncomeExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A81fe27f9-1cea-49b4-bed6-bf35006738df": {
    "Id": "A81fe27f9-1cea-49b4-bed6-bf35006738df",
    "IdConcepto": "ifrs-full_DisclosureOfOtherOperatingIncomeExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A515a3501-55f9-43f0-8cdb-5644d8f885c9": {
    "Id": "A515a3501-55f9-43f0-8cdb-5644d8f885c9",
    "IdConcepto": "ifrs-full_DisclosureOfPrepaymentsAndOtherAssetsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6a8b14e3-c442-43d8-8752-2a3c56cf712c": {
    "Id": "A6a8b14e3-c442-43d8-8752-2a3c56cf712c",
    "IdConcepto": "ifrs-full_DisclosureOfProfitLossFromOperatingActivitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A8ef6c09b-454b-44af-8ff4-b9d31cf167ba": {
    "Id": "A8ef6c09b-454b-44af-8ff4-b9d31cf167ba",
    "IdConcepto": "ifrs-full_DisclosureOfPropertyPlantAndEquipmentExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae89a4399-7bde-4a93-990a-df01f9868478": {
    "Id": "Ae89a4399-7bde-4a93-990a-df01f9868478",
    "IdConcepto": "ifrs-full_DisclosureOfProvisionsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A77d3194e-f48c-431e-b887-1b124e48ef6f": {
    "Id": "A77d3194e-f48c-431e-b887-1b124e48ef6f",
    "IdConcepto": "ifrs-full_DisclosureOfReclassificationOfFinancialInstrumentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af1fb549a-2694-4592-a5c5-c3ff7d0aa135": {
    "Id": "Af1fb549a-2694-4592-a5c5-c3ff7d0aa135",
    "IdConcepto": "ifrs-full_DisclosureOfRecognisedRevenueFromConstructionContractsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2eb64a1f-2531-47fc-b7ce-32954245c8f4": {
    "Id": "A2eb64a1f-2531-47fc-b7ce-32954245c8f4",
    "IdConcepto": "ifrs-full_DisclosureOfReinsuranceExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Afccc4a24-bc37-4bd3-b016-1e9a6a7e7467": {
    "Id": "Afccc4a24-bc37-4bd3-b016-1e9a6a7e7467",
    "IdConcepto": "ifrs-full_DisclosureOfRelatedPartyExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa0777e90-5145-44ea-92dc-06a424a8e6f2": {
    "Id": "Aa0777e90-5145-44ea-92dc-06a424a8e6f2",
    "IdConcepto": "ifrs-full_DisclosureOfRepurchaseAndReverseRepurchaseAgreementsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A93beb66b-2ec8-4349-98da-7d3177fbfd51": {
    "Id": "A93beb66b-2ec8-4349-98da-7d3177fbfd51",
    "IdConcepto": "ifrs-full_DisclosureOfResearchAndDevelopmentExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A626b0183-bbc5-4415-9db7-2219d749bf9c": {
    "Id": "A626b0183-bbc5-4415-9db7-2219d749bf9c",
    "IdConcepto": "ifrs-full_DisclosureOfReservesAndOtherEquityInterestExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A7b440c18-bd2b-400f-8d27-0a600a77684c": {
    "Id": "A7b440c18-bd2b-400f-8d27-0a600a77684c",
    "IdConcepto": "ifrs-full_DisclosureOfRestrictedCashAndCashEquivalentsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A145846b3-4d29-4624-baaa-259f3106f2b2": {
    "Id": "A145846b3-4d29-4624-baaa-259f3106f2b2",
    "IdConcepto": "ifrs-full_DisclosureOfRevenueExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3a7c1360-8181-4d59-88b5-01aed2b74926": {
    "Id": "A3a7c1360-8181-4d59-88b5-01aed2b74926",
    "IdConcepto": "ifrs-full_DisclosureOfServiceConcessionArrangementsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9dd125fb-2ecf-44db-9638-6bccb96d920d": {
    "Id": "A9dd125fb-2ecf-44db-9638-6bccb96d920d",
    "IdConcepto": "ifrs-full_DisclosureOfShareCapitalReservesAndOtherEquityInterestExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad6da674e-30e0-4b30-a3d8-52319c6956ad": {
    "Id": "Ad6da674e-30e0-4b30-a3d8-52319c6956ad",
    "IdConcepto": "ifrs-full_DisclosureOfSharebasedPaymentArrangementsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A2057f096-5969-4da6-be66-b23468760d59": {
    "Id": "A2057f096-5969-4da6-be66-b23468760d59",
    "IdConcepto": "ifrs-full_DisclosureOfSubordinatedLiabilitiesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1045475d-615f-48a5-b218-5a1719ad624f": {
    "Id": "A1045475d-615f-48a5-b218-5a1719ad624f",
    "IdConcepto": "ifrs-full_DisclosureOfSignificantInvestmentsInSubsidiariesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
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
  "Ab43bf1ff-e0ae-4928-b02a-8053f242be6d": {
    "Id": "Ab43bf1ff-e0ae-4928-b02a-8053f242be6d",
    "IdConcepto": "ifrs-full_DisclosureOfTaxReceivablesAndPayablesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A663e806e-dfbf-47de-8e37-1ab44c554db3": {
    "Id": "A663e806e-dfbf-47de-8e37-1ab44c554db3",
    "IdConcepto": "ifrs-full_DisclosureOfTradeAndOtherPayablesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9d7fb0ae-31ac-4f3e-a6ce-02acd549398e": {
    "Id": "A9d7fb0ae-31ac-4f3e-a6ce-02acd549398e",
    "IdConcepto": "ifrs-full_DisclosureOfTradeAndOtherReceivablesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A51989271-7716-4ec8-9ab1-b5dafd44d2aa": {
    "Id": "A51989271-7716-4ec8-9ab1-b5dafd44d2aa",
    "IdConcepto": "ifrs-full_DisclosureOfTradingIncomeExpenseExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aad5bb574-79c3-4e9e-83e9-1ce7cd6f848b": {
    "Id": "Aad5bb574-79c3-4e9e-83e9-1ce7cd6f848b",
    "IdConcepto": "ifrs-full_DisclosureOfTreasurySharesExplanatory",
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