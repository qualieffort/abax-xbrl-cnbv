///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/430000-O
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_430000_O implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_430000_O
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_DescriptionOfTheUnderlyingAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_DescriptionOfTheUnderlyingAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Estructurados" and squeeze(size(variable1)) > 0) or (variable2 != "Estructurados")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "Estructurados"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "Estructurados"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfTheUnderlyingAssets',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_TypeOfInstrument',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_HistoricalPerformanceOfTheUnderlyingAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_HistoricalPerformanceOfTheUnderlyingAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Estructurados" and squeeze(size(variable1)) > 0) or (variable2 != "Estructurados")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "Estructurados"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "Estructurados"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HistoricalPerformanceOfTheUnderlyingAssets',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_TypeOfInstrument',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_ExercisesToIdentifyThePossibleReturns': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_ExercisesToIdentifyThePossibleReturns',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Estructurados" and squeeze(size(variable1)) > 0) or (variable2 != "Estructurados")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "Estructurados"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "Estructurados"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExercisesToIdentifyThePossibleReturns',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_TypeOfInstrument',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_OtherInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_OtherInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Estructurados" and squeeze(size(variable1)) > 0) or (variable2 != "Estructurados")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "Estructurados"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "Estructurados"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OtherInformation',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_TypeOfInstrument',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
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
  "ar_pros_DescriptionOfTheUnderlyingAssets_fb10933b-c7ee-4b39-9c2c-2af5d94774be": {
    "Id": "ar_pros_DescriptionOfTheUnderlyingAssets_fb10933b-c7ee-4b39-9c2c-2af5d94774be",
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
  "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets_2ac4a8c5-e72d-4a3f-8e13-7e640628d7a0": {
    "Id": "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets_2ac4a8c5-e72d-4a3f-8e13-7e640628d7a0",
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
  "ar_pros_ExercisesToIdentifyThePossibleReturns_928f8716-52f7-431d-a9ba-d262b6f74d7e": {
    "Id": "ar_pros_ExercisesToIdentifyThePossibleReturns_928f8716-52f7-431d-a9ba-d262b6f74d7e",
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
  "ar_pros_OtherInformation_82e08a7a-ef44-4845-9c49-d951149f3a70": {
    "Id": "ar_pros_OtherInformation_82e08a7a-ef44-4845-9c49-d951149f3a70",
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