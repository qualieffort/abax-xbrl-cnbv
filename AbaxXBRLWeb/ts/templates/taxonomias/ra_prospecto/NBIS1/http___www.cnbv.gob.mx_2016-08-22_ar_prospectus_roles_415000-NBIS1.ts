///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/415000-NBIS1
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_415000_NBIS1 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_415000_NBIS1
         */
        constructor() {

            this.ListadoDeFormulas = {


                'No_Vacios_Operación_de_Bursatilización_ar_pros_TechnicalCommittee': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_TechnicalCommittee',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TechnicalCommittee',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Operación_de_Bursatilización_ar_pros_TrustEstate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_TrustEstate',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_RelevantInformationOfThePeriod': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_RelevantInformationOfThePeriod',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_OtherThirdPartiesObligatedWithTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_OtherThirdPartiesObligatedWithTheTrust',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_EvolutionOfTheAssetsInTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_EvolutionOfTheAssetsInTrust',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_PerformanceOfSecuritiesIssued': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_PerformanceOfSecuritiesIssued',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_AssetPerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_AssetPerformance',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_CompositionOfTotalAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_CompositionOfTotalAssets',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_VariationInBalanceAndNumberOfAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_VariationInBalanceAndNumberOfAssets',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_AssetsStatusByGradeOrLevelOfCompliance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_AssetsStatusByGradeOrLevelOfCompliance',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_GuaranteesOnAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_GuaranteesOnAssets',
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
                'No_Vacios_Operación_de_Bursatilización_ar_pros_IssuingOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Operación_de_Bursatilización_ar_pros_IssuingOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuingOfValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx": {
    "Id": "ctx",
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
  "ar_pros_ReferenceIncorporationSecuritizationTransaction_1e2aed94-754b-4789-8f6b-0f35a63d2b48": {
    "Id": "ar_pros_ReferenceIncorporationSecuritizationTransaction_1e2aed94-754b-4789-8f6b-0f35a63d2b48",
    "IdConcepto": "ar_pros_ReferenceIncorporationSecuritizationTransaction",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationSecuritizationTransaction"
  },
  "ar_pros_TechnicalCommittee_03afc2a5-cf83-4f57-8027-15c179442dd5": {
    "Id": "ar_pros_TechnicalCommittee_03afc2a5-cf83-4f57-8027-15c179442dd5",
    "IdConcepto": "ar_pros_TechnicalCommittee",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTechnicalCommittee"
  },
  "ar_pros_TrustEstate_bded1c30-d38d-4d6e-a644-13c35d87d61e": {
    "Id": "ar_pros_TrustEstate_bded1c30-d38d-4d6e-a644-13c35d87d61e",
    "IdConcepto": "ar_pros_TrustEstate",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EvolutionOfTheAssetsInTrust_3c8da682-dbc4-4152-9bec-0128c77813ad": {
    "Id": "ar_pros_EvolutionOfTheAssetsInTrust_3c8da682-dbc4-4152-9bec-0128c77813ad",
    "IdConcepto": "ar_pros_EvolutionOfTheAssetsInTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AssetPerformance_4c2a8d4a-5537-48d9-8a5f-becc7ea8b28d": {
    "Id": "ar_pros_AssetPerformance_4c2a8d4a-5537-48d9-8a5f-becc7ea8b28d",
    "IdConcepto": "ar_pros_AssetPerformance",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CompositionOfTotalAssets_ada1900a-0796-4638-90e8-6bef55349474": {
    "Id": "ar_pros_CompositionOfTotalAssets_ada1900a-0796-4638-90e8-6bef55349474",
    "IdConcepto": "ar_pros_CompositionOfTotalAssets",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_VariationInBalanceAndNumberOfAssets_76143c2e-9739-4329-8c89-7add30ad7330": {
    "Id": "ar_pros_VariationInBalanceAndNumberOfAssets_76143c2e-9739-4329-8c89-7add30ad7330",
    "IdConcepto": "ar_pros_VariationInBalanceAndNumberOfAssets",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AssetsStatusByGradeOrLevelOfCompliance_c4ec75d1-cfc7-4cdb-9afe-e71a92c976f8": {
    "Id": "ar_pros_AssetsStatusByGradeOrLevelOfCompliance_c4ec75d1-cfc7-4cdb-9afe-e71a92c976f8",
    "IdConcepto": "ar_pros_AssetsStatusByGradeOrLevelOfCompliance",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_GuaranteesOnAssets_b38a0e32-c7ce-4e1a-a6a8-89f21f2d7cda": {
    "Id": "ar_pros_GuaranteesOnAssets_b38a0e32-c7ce-4e1a-a6a8-89f21f2d7cda",
    "IdConcepto": "ar_pros_GuaranteesOnAssets",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IssuingOfValues_0a9dc20c-323b-4295-b3a7-3a89a7a2c076": {
    "Id": "ar_pros_IssuingOfValues_0a9dc20c-323b-4295-b3a7-3a89a7a2c076",
    "IdConcepto": "ar_pros_IssuingOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PerformanceOfSecuritiesIssued_aaed5d9c-b9d9-4464-b267-7698d84dbdaf": {
    "Id": "ar_pros_PerformanceOfSecuritiesIssued_aaed5d9c-b9d9-4464-b267-7698d84dbdaf",
    "IdConcepto": "ar_pros_PerformanceOfSecuritiesIssued",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RelevantInformationOfThePeriod_84528df6-5ad2-4920-acfb-45d9a57146cc": {
    "Id": "ar_pros_RelevantInformationOfThePeriod_84528df6-5ad2-4920-acfb-45d9a57146cc",
    "IdConcepto": "ar_pros_RelevantInformationOfThePeriod",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherThirdPartiesObligatedWithTheTrust_1862f38e-bc6a-4146-bf3e-4b99f2f94822": {
    "Id": "ar_pros_OtherThirdPartiesObligatedWithTheTrust_1862f38e-bc6a-4146-bf3e-4b99f2f94822",
    "IdConcepto": "ar_pros_OtherThirdPartiesObligatedWithTheTrust",
    "IdContextoPlantilla": "ctx",
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