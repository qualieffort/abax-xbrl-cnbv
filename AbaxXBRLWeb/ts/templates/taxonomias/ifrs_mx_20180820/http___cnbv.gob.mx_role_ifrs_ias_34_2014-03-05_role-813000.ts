///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ias_34_2014-03-05_role-813000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ias_34_2014_03_05_role_813000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ias_34_2014_03_05_role_813000
         */
        constructor() {

            this.ListadoDeFormulas = {
                //Se integran formulas de < Value Assertion>  ID : VA_813000_01: string - length(Información a revelar sobre información financiera intermedia [bloque de texto] ) gt 0[dimensional] 
                'formula100': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula100',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        
                        Expresion: '(variable2 != "4D" and squeeze(size(variable1)) > 0) or (variable2 == "4D")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres para un trimestre diferente de 4D.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres para un trimestre diferente de 4D.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfInterimFinancialReportingExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ifrs_mx-cor_20141205_NumeroDeTrimestre',
                            PuedeCrearse: false,
                            PuedeEliminarse: false
                            })
                        }
                    }),

                'formulaDescripcionSucesos': new model.DefinicionFormula().deserialize({
                    Id: 'formulaDescripcionSucesos',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        EsAdvertencia: true,
                        MensajeExito: 'El hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'El hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DescriptionOfSignificantEventsAndTransactions',
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
    }
};

            this.UnidadesPlantillaPorId = {
  "Peso_Mx": {
    "Id": "Peso_Mx",
    "Tipo": 1,
    "Medidas": [
      {
        "Nombre": "#medida_MXN",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "MedidasDenominador": [],
    "MedidasNumerador": []
  },
  "MXN_SHARES": {
    "Id": "MXN_SHARES",
    "Tipo": 2,
    "MedidasDenominador": [
      {
        "Nombre": "#medida_shares",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
      }
    ],
    "MedidasNumerador": [
      {
        "Nombre": "#medida_MXN",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "Medidas": []
  }
};
            
            this.HechosPlantillaPorId = {
  "Ae8c0cbf0-0183-4f27-b6dc-8761da15e12f": {
    "Id": "Ae8c0cbf0-0183-4f27-b6dc-8761da15e12f",
    "IdConcepto": "ifrs-full_DisclosureOfInterimFinancialReportingExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1b214411-b9bc-4567-b079-7cf925104b2f": {
    "Id": "A1b214411-b9bc-4567-b079-7cf925104b2f",
    "IdConcepto": "ifrs-full_DescriptionOfSignificantEventsAndTransactions",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa2523db2-1ad5-40e7-aa53-2c3d29b08798": {
    "Id": "Aa2523db2-1ad5-40e7-aa53-2c3d29b08798",
    "IdConcepto": "ifrs-full_ExplanationOfAccountingPoliciesAndMethodsOfComputationFollowedInInterimFinancialStatements",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A210be076-2027-44de-adb2-bc956c94d40b": {
    "Id": "A210be076-2027-44de-adb2-bc956c94d40b",
    "IdConcepto": "ifrs-full_ExplanationOfSeasonalityOrCyclicalityOfInterimOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9886aaea-1d0c-482a-a72d-0d7ffe11254b": {
    "Id": "A9886aaea-1d0c-482a-a72d-0d7ffe11254b",
    "IdConcepto": "ifrs-full_ExplanationOfNatureAndAmountOfItemsAffectingAssetsLiabilitiesEquityNetIncomeOrCashFlowsThatAreUnusualBecauseOfTheirNatureSizeOrIncidence",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A0047a381-4514-4e42-a2bc-6e0434b90a81": {
    "Id": "A0047a381-4514-4e42-a2bc-6e0434b90a81",
    "IdConcepto": "ifrs-full_ExplanationOfNatureAndAmountOfChangesInEstimatesOfAmountsReportedInPriorInterimPeriodsOrPriorFinancialYears",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ae92168cd-9306-48d2-8e58-5133a83f17b2": {
    "Id": "Ae92168cd-9306-48d2-8e58-5133a83f17b2",
    "IdConcepto": "ifrs-full_ExplanationOfIssuancesRepurchasesAndRepaymentsOfDebtAndEquitySecurities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3026ec41-925e-4a4a-9a85-f39451613c8b": {
    "Id": "A3026ec41-925e-4a4a-9a85-f39451613c8b",
    "IdConcepto": "ifrs-full_DividendsPaidOrdinaryShares",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af9b452cd-a4a0-4dc8-b8af-872602c37f6e": {
    "Id": "Af9b452cd-a4a0-4dc8-b8af-872602c37f6e",
    "IdConcepto": "ifrs-full_DividendsPaidOtherShares",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aea3f2986-7470-47a2-b621-9f18ea212241": {
    "Id": "Aea3f2986-7470-47a2-b621-9f18ea212241",
    "IdConcepto": "ifrs-full_DividendsPaidOrdinarySharesPerShare",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2b0676af-9a96-43e8-a410-57de78c6dbf2": {
    "Id": "A2b0676af-9a96-43e8-a410-57de78c6dbf2",
    "IdConcepto": "ifrs-full_DividendsPaidOtherSharesPerShare",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A932fcf78-f83d-42a9-991c-7d8ca9a05173": {
    "Id": "A932fcf78-f83d-42a9-991c-7d8ca9a05173",
    "IdConcepto": "ifrs-full_ExplanationOfMaterialEventsSubsequentToEndOfInterimPeriodThatHaveNotBeenReflected",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Aa44cd536-2580-48d3-8eeb-e690d58589b9": {
    "Id": "Aa44cd536-2580-48d3-8eeb-e690d58589b9",
    "IdConcepto": "ifrs-full_ExplanationOfEffectOfChangesInCompositionOfEntityDuringInterimPeriod",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3ffa7331-8d73-4b33-aa3a-57c9e74f92cb": {
    "Id": "A3ffa7331-8d73-4b33-aa3a-57c9e74f92cb",
    "IdConcepto": "ifrs-full_DescriptionOfComplianceWithIFRSsIfAppliedForInterimFinancialReport",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6b349f51-5cb8-40a0-a1ec-01559172c83f": {
    "Id": "A6b349f51-5cb8-40a0-a1ec-01559172c83f",
    "IdConcepto": "ifrs-full_DescriptionOfNatureAndAmountOfChangeInEstimateDuringFinalInterimPeriod",
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