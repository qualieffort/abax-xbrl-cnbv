///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/425000-HBIS2
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_425000_HBIS2 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_425000_HBIS2
         */
        constructor() {

            this.ListadoDeFormulas = {

                'FINANCIERA_FIDEICOMISO_obligatorio__ar_pros_SelectedFinancialInformationOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'FINANCIERA_FIDEICOMISO_obligatorio__ar_pros_SelectedFinancialInformationOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedFinancialInformationOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'FINANCIERA_FIDEICOMISO_obligatorio__ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'FINANCIERA_FIDEICOMISO_obligatorio__ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_RelevantCreditReportTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_RelevantCreditReportTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_RelevantCreditReportTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_OperationResultsTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_OperationResultsTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_OperationResultsTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_InternalControlTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'FINANCIERA_FIDEICOMISO_obligatorio_ar_pros_InternalControlTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_InternalControlTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx_2014": {
    "Id": "ctx_2014",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2014_12_31",
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

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust_c645f218-74fd-458c-9adb-0753917f0c58": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust_c645f218-74fd-458c-9adb-0753917f0c58",
    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationFinancialInformationOfTheTrust"
  },
  "ar_pros_SelectedFinancialInformationOfTheTrust_95dc22ea-a922-4298-bf48-7b764c369ddd": {
    "Id": "ar_pros_SelectedFinancialInformationOfTheTrust_95dc22ea-a922-4298-bf48-7b764c369ddd",
    "IdConcepto": "ar_pros_SelectedFinancialInformationOfTheTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests_4efff1ca-a722-441f-b055-78d26d19c3ac": {
    "Id": "ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests_4efff1ca-a722-441f-b055-78d26d19c3ac",
    "IdConcepto": "ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RelevantCreditReportTrust_9621ee09-1a1d-43c7-9395-a6a09531a00b": {
    "Id": "ar_pros_RelevantCreditReportTrust_9621ee09-1a1d-43c7-9395-a6a09531a00b",
    "IdConcepto": "ar_pros_RelevantCreditReportTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults_d57ea4ea-ad75-4382-a6e8-d0356a467ce6": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults_d57ea4ea-ad75-4382-a6e8-d0356a467ce6",
    "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OperationResultsTrust_915fcc3b-5ea0-47a3-be3f-9fb0388f7b88": {
    "Id": "ar_pros_OperationResultsTrust_915fcc3b-5ea0-47a3-be3f-9fb0388f7b88",
    "IdConcepto": "ar_pros_OperationResultsTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust_077f8f6e-e4d6-4cba-bc60-e77cec8ff62f": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust_077f8f6e-e4d6-4cba-bc60-e77cec8ff62f",
    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InternalControlTrust_ce545ee2-50b9-4387-b41d-2db460116141": {
    "Id": "ar_pros_InternalControlTrust_ce545ee2-50b9-4387-b41d-2db460116141",
    "IdConcepto": "ar_pros_InternalControlTrust",
    "IdContextoPlantilla": "ctx_2014",
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