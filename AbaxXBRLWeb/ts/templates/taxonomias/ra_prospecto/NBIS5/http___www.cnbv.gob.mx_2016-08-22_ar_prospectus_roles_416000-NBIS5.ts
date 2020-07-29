///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/416000-NBIS5
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_416000_NBIS5 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_416000_NBIS5
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
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_Rights': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_Rights',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Rights',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_TechnicalCommitteeText': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_TechnicalCommitteeText',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TechnicalCommitteeText',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_Distributions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_Distributions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Distributions',
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
                'No_Vacios_Estructura_de_la_Operacion_ar_pros_JudicialAdministrativeOrArbitrationProceedings': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Estructura_de_la_Operacion_ar_pros_JudicialAdministrativeOrArbitrationProceedings',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_JudicialAdministrativeOrArbitrationProceedings',
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
  "ar_pros_ReferenceIncorporationOperationStructure_c91673bd-bba4-4fe0-b6c0-c5366d51f0b8": {
    "Id": "ar_pros_ReferenceIncorporationOperationStructure_c91673bd-bba4-4fe0-b6c0-c5366d51f0b8",
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
  "ar_pros_TrustEstate_a8a6f29e-d3ec-49a7-9665-f7092fb847ac": {
    "Id": "ar_pros_TrustEstate_a8a6f29e-d3ec-49a7-9665-f7092fb847ac",
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
  "ar_pros_PerformanceOfSecuritiesIssued_d313e71c-284a-4bb6-99ba-1859efd2a7dc": {
    "Id": "ar_pros_PerformanceOfSecuritiesIssued_d313e71c-284a-4bb6-99ba-1859efd2a7dc",
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
  "ar_pros_ContractsAndAgreements_6cff5cf7-39a2-42a6-880f-59e025dec929": {
    "Id": "ar_pros_ContractsAndAgreements_6cff5cf7-39a2-42a6-880f-59e025dec929",
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
  "ar_pros_JudicialAdministrativeOrArbitrationProceedings_8930842a-4028-4589-95b7-0f5b60fcf17d": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedings_8930842a-4028-4589-95b7-0f5b60fcf17d",
    "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedings",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Rights_35ed148d-8c79-40de-ac23-59536bc907fe": {
    "Id": "ar_pros_Rights_35ed148d-8c79-40de-ac23-59536bc907fe",
    "IdConcepto": "ar_pros_Rights",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Distributions_79f8d005-851d-4b8a-a4ae-23e27f7939b0": {
    "Id": "ar_pros_Distributions_79f8d005-851d-4b8a-a4ae-23e27f7939b0",
    "IdConcepto": "ar_pros_Distributions",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BusinessPlanAnalysisAndInvestmentSchedule_b2e0a389-1d40-4d07-8990-5f451e7a65ec": {
    "Id": "ar_pros_BusinessPlanAnalysisAndInvestmentSchedule_b2e0a389-1d40-4d07-8990-5f451e7a65ec",
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
  "ar_pros_Valuation_69e03e3c-a3bd-459a-8fc2-3d3a7ebb3e33": {
    "Id": "ar_pros_Valuation_69e03e3c-a3bd-459a-8fc2-3d3a7ebb3e33",
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
  "ar_pros_FeesCostsAndExpensesOfTheAdministratorOfTheEstate_796eb121-4f76-4703-a105-9bb7597f38b8": {
    "Id": "ar_pros_FeesCostsAndExpensesOfTheAdministratorOfTheEstate_796eb121-4f76-4703-a105-9bb7597f38b8",
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
  "ar_pros_RelevantInformationOfThePeriod_bedad611-7863-4368-b1a0-7f16782c9f91": {
    "Id": "ar_pros_RelevantInformationOfThePeriod_bedad611-7863-4368-b1a0-7f16782c9f91",
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
  "ar_pros_OtherThirdPartiesObligatedWithTheTrust_de5c5fa7-5e72-49c2-b12f-476d8056423b": {
    "Id": "ar_pros_OtherThirdPartiesObligatedWithTheTrust_de5c5fa7-5e72-49c2-b12f-476d8056423b",
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
  "ar_pros_GeneralMeetingsOfHolders_a2112e71-78f0-469f-a940-58a2b78bc9ae": {
    "Id": "ar_pros_GeneralMeetingsOfHolders_a2112e71-78f0-469f-a940-58a2b78bc9ae",
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
  "ar_pros_TechnicalCommitteeText_8dabd992-4c72-4496-b008-8c6bca2dc337": {
    "Id": "ar_pros_TechnicalCommitteeText_8dabd992-4c72-4496-b008-8c6bca2dc337",
    "IdConcepto": "ar_pros_TechnicalCommitteeText",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest_d403765b-7169-4176-9df0-6355e741905b": {
    "Id": "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest_d403765b-7169-4176-9df0-6355e741905b",
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