///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/430000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_430000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_430000_H
         */
        constructor() {

            this.ListadoDeFormulas = {

                'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados__ar_pros_ReferenceIncorporationUnderlyingAssetsText': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados__ar_pros_ReferenceIncorporationUnderlyingAssetsText',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationUnderlyingAssetsText",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationUnderlyingAssets",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "NO"
                                }
                            }
                    }
                ),

                'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados__ar_pros_DescriptionOfTheUnderlyingAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados__ar_pros_DescriptionOfTheUnderlyingAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Estructurados" and variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} debe existir y ser reportado una sola vez para el Tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe existir y ser reportado una sola vez para el Tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfTheUnderlyingAssets",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationUnderlyingAssets",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                        }
                    }
                ),
                'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados_SinIncorporacionPorReferencia__ar_pros_HistoricalPerformanceOfTheUnderlyingAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados_SinIncorporacionPorReferencia__ar_pros_HistoricalPerformanceOfTheUnderlyingAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Estructurados" and variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia y que el Tipo de instrumento sea "Estructurados".',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia y que el Tipo de instrumento sea "Estructurados".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_ReferenceIncorporationUnderlyingAssets",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados_SinIncorporacionPorReferencia__ar_pros_ExercisesToIdentifyThePossibleReturns': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados_SinIncorporacionPorReferencia__ar_pros_ExercisesToIdentifyThePossibleReturns',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Estructurados" and variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia y que el Tipo de instrumento sea "Estructurados".',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia y que el Tipo de instrumento sea "Estructurados".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ExercisesToIdentifyThePossibleReturns",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_ReferenceIncorporationUnderlyingAssets",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados_SinIncorporacionPorReferencia__ar_pros_OtherInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ACTIVOS_SUBYACENTES_obligatorios_InstrumentoEstructurados_SinIncorporacionPorReferencia__ar_pros_OtherInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Estructurados" and variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia y que el Tipo de instrumento sea "Estructurados".',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia y que el Tipo de instrumento sea "Estructurados".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_ReferenceIncorporationUnderlyingAssets",
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
  "ar_pros_ReferenceIncorporationUnderlyingAssets_c152097b-a32b-4072-aecd-ef397e8162b6": {
    "Id": "ar_pros_ReferenceIncorporationUnderlyingAssets_c152097b-a32b-4072-aecd-ef397e8162b6",
    "IdConcepto": "ar_pros_ReferenceIncorporationUnderlyingAssets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationUnderlyingAssets"
    },
   "ar_pros_ReferenceIncorporationUnderlyingAssetsText_c152097b-a32b-4072-aecd-ef397e8162b6": {
       "Id": "ar_pros_ReferenceIncorporationUnderlyingAssetsText_c152097b-a32b-4072-aecd-ef397e8162b6",
       "IdConcepto": "ar_pros_ReferenceIncorporationUnderlyingAssetsText",
   "IdContextoPlantilla": "ctx_2014",
   "Hechos": [],
   "IdUnidadPlantilla": null,
   "ValorNumerador": null,
   "ValorDenominador": null,
   "Precision": null,
   "Decimales": null,
   "Valor": "#valorDefaultReferenceIncorporationUnderlyingAssetsText"
  },
  "ar_pros_DescriptionOfTheUnderlyingAssets_8bb9406d-77c5-439a-b4b3-ad50bf7786b9": {
    "Id": "ar_pros_DescriptionOfTheUnderlyingAssets_8bb9406d-77c5-439a-b4b3-ad50bf7786b9",
    "IdConcepto": "ar_pros_DescriptionOfTheUnderlyingAssets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets_7fa35398-f2e6-492e-a97d-5fd2dd89e938": {
    "Id": "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets_7fa35398-f2e6-492e-a97d-5fd2dd89e938",
    "IdConcepto": "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ExercisesToIdentifyThePossibleReturns_ce7be270-916a-41f2-9e70-f4198320ba42": {
    "Id": "ar_pros_ExercisesToIdentifyThePossibleReturns_ce7be270-916a-41f2-9e70-f4198320ba42",
    "IdConcepto": "ar_pros_ExercisesToIdentifyThePossibleReturns",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherInformation_1f68f108-a55c-458e-8ebe-503111923b6b": {
    "Id": "ar_pros_OtherInformation_1f68f108-a55c-458e-8ebe-503111923b6b",
    "IdConcepto": "ar_pros_OtherInformation",
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