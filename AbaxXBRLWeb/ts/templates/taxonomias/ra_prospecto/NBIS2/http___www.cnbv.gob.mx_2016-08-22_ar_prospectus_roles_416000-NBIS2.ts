///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/416000-NBIS2
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_416000_NBIS2 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_416000_NBIS2
         */
        constructor() {

            this.ListadoDeFormulas = {

                'No_Vacios_Estructura_de_la_Operacion_ar_pros_TrustEstate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_TrustEstate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TrustEstate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_EvolutionOfTheAssetsInTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_EvolutionOfTheAssetsInTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EvolutionOfTheAssetsInTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_AssetPerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_AssetPerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AssetPerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_CompositionOfTotalAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_CompositionOfTotalAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CompositionOfTotalAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_VariationInBalanceAndNumberOfAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_VariationInBalanceAndNumberOfAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_VariationInBalanceAndNumberOfAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_AssetsStatusByGradeOrLevelOfCompliance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_AssetsStatusByGradeOrLevelOfCompliance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AssetsStatusByGradeOrLevelOfCompliance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_GuaranteesOnAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_GuaranteesOnAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_GuaranteesOnAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_LoadsAndLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_LoadsAndLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LoadsAndLimitations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_PerformanceOfSecuritiesIssued': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_PerformanceOfSecuritiesIssued',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PerformanceOfSecuritiesIssued',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_ContractsAndAgreements': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_ContractsAndAgreements',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ContractsAndAgreements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_BusinessPlanAnalysisAndInvestmentSchedule': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_BusinessPlanAnalysisAndInvestmentSchedule',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BusinessPlanAnalysisAndInvestmentSchedule',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_Valuation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_Valuation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Valuation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_FeesCostsAndExpensesOfTheAdministratorOfTheEstate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_FeesCostsAndExpensesOfTheAdministratorOfTheEstate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FeesCostsAndExpensesOfTheAdministratorOfTheEstate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_RelevantInformationOfThePeriod': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_RelevantInformationOfThePeriod',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RelevantInformationOfThePeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_OtherThirdPartiesObligatedWithTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_OtherThirdPartiesObligatedWithTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OtherThirdPartiesObligatedWithTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_GeneralMeetingsOfHolders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_GeneralMeetingsOfHolders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_GeneralMeetingsOfHolders',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_ExternalAuditorsOperationStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_ExternalAuditorsOperationStructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExternalAuditorsOperationStructure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
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
  "ar_pros_ReferenceIncorporationOperationStructure_a8b15453-46c8-422a-a436-13b5f0e569c7": {
    "Id": "ar_pros_ReferenceIncorporationOperationStructure_a8b15453-46c8-422a-a436-13b5f0e569c7",
    "IdConcepto": "ar_pros_ReferenceIncorporationOperationStructure",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationOperationStructure"
  },
  "ar_pros_TrustEstate_ba733d52-6841-4abb-9ed3-b0ff3abe31bb": {
    "Id": "ar_pros_TrustEstate_ba733d52-6841-4abb-9ed3-b0ff3abe31bb",
    "IdConcepto": "ar_pros_TrustEstate",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EvolutionOfTheAssetsInTrust_c56b00d7-30ee-45a3-bb2e-4313b15f4d14": {
    "Id": "ar_pros_EvolutionOfTheAssetsInTrust_c56b00d7-30ee-45a3-bb2e-4313b15f4d14",
    "IdConcepto": "ar_pros_EvolutionOfTheAssetsInTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AssetPerformance_131c9be8-b613-4e19-9e19-1114d133c22b": {
    "Id": "ar_pros_AssetPerformance_131c9be8-b613-4e19-9e19-1114d133c22b",
    "IdConcepto": "ar_pros_AssetPerformance",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CompositionOfTotalAssets_eee2d743-130c-4e38-8d46-45f349e46f61": {
    "Id": "ar_pros_CompositionOfTotalAssets_eee2d743-130c-4e38-8d46-45f349e46f61",
    "IdConcepto": "ar_pros_CompositionOfTotalAssets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_VariationInBalanceAndNumberOfAssets_8c1cdd0c-d6d5-4573-807f-d13df5a08b3f": {
    "Id": "ar_pros_VariationInBalanceAndNumberOfAssets_8c1cdd0c-d6d5-4573-807f-d13df5a08b3f",
    "IdConcepto": "ar_pros_VariationInBalanceAndNumberOfAssets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AssetsStatusByGradeOrLevelOfCompliance_4a7a37b9-6576-41e1-a000-bee6ac4dc818": {
    "Id": "ar_pros_AssetsStatusByGradeOrLevelOfCompliance_4a7a37b9-6576-41e1-a000-bee6ac4dc818",
    "IdConcepto": "ar_pros_AssetsStatusByGradeOrLevelOfCompliance",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_GuaranteesOnAssets_611ad8a7-856e-4892-bfe9-bd41631eddc5": {
    "Id": "ar_pros_GuaranteesOnAssets_611ad8a7-856e-4892-bfe9-bd41631eddc5",
    "IdConcepto": "ar_pros_GuaranteesOnAssets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LoadsAndLimitations_724c9de8-a586-428d-9479-e0a64d002c3b": {
    "Id": "ar_pros_LoadsAndLimitations_724c9de8-a586-428d-9479-e0a64d002c3b",
    "IdConcepto": "ar_pros_LoadsAndLimitations",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PerformanceOfSecuritiesIssued_aa43a31c-bcdc-4f4b-a3ac-afc650425920": {
    "Id": "ar_pros_PerformanceOfSecuritiesIssued_aa43a31c-bcdc-4f4b-a3ac-afc650425920",
    "IdConcepto": "ar_pros_PerformanceOfSecuritiesIssued",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ContractsAndAgreements_2d061d73-cb84-4fc3-8871-6777017334ce": {
    "Id": "ar_pros_ContractsAndAgreements_2d061d73-cb84-4fc3-8871-6777017334ce",
    "IdConcepto": "ar_pros_ContractsAndAgreements",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BusinessPlanAnalysisAndInvestmentSchedule_5f7264c4-2ab4-4e1d-9cf6-f897fde14d55": {
    "Id": "ar_pros_BusinessPlanAnalysisAndInvestmentSchedule_5f7264c4-2ab4-4e1d-9cf6-f897fde14d55",
    "IdConcepto": "ar_pros_BusinessPlanAnalysisAndInvestmentSchedule",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Valuation_351213f9-0e2f-4a84-9d0c-078e6265e804": {
    "Id": "ar_pros_Valuation_351213f9-0e2f-4a84-9d0c-078e6265e804",
    "IdConcepto": "ar_pros_Valuation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FeesCostsAndExpensesOfTheAdministratorOfTheEstate_3f160788-7f29-4807-9720-64bd8bf6e7d2": {
    "Id": "ar_pros_FeesCostsAndExpensesOfTheAdministratorOfTheEstate_3f160788-7f29-4807-9720-64bd8bf6e7d2",
    "IdConcepto": "ar_pros_FeesCostsAndExpensesOfTheAdministratorOfTheEstate",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RelevantInformationOfThePeriod_19d67082-a38a-4d37-bd36-99f5d607bdd4": {
    "Id": "ar_pros_RelevantInformationOfThePeriod_19d67082-a38a-4d37-bd36-99f5d607bdd4",
    "IdConcepto": "ar_pros_RelevantInformationOfThePeriod",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherThirdPartiesObligatedWithTheTrust_bba53271-773b-4193-adf9-e846ca008dc3": {
    "Id": "ar_pros_OtherThirdPartiesObligatedWithTheTrust_bba53271-773b-4193-adf9-e846ca008dc3",
    "IdConcepto": "ar_pros_OtherThirdPartiesObligatedWithTheTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_GeneralMeetingsOfHolders_20d65e41-e428-444e-8e60-d719d10d18e4": {
    "Id": "ar_pros_GeneralMeetingsOfHolders_20d65e41-e428-444e-8e60-d719d10d18e4",
    "IdConcepto": "ar_pros_GeneralMeetingsOfHolders",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ExternalAuditorsOperationStructure_3452ad2f-68b7-43c6-a008-219d08146fe7": {
    "Id": "ar_pros_ExternalAuditorsOperationStructure_3452ad2f-68b7-43c6-a008-219d08146fe7",
    "IdConcepto": "ar_pros_ExternalAuditorsOperationStructure",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest_5a0447a6-2676-491b-abf8-1143ed7af91f": {
    "Id": "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest_5a0447a6-2676-491b-abf8-1143ed7af91f",
    "IdConcepto": "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest",
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