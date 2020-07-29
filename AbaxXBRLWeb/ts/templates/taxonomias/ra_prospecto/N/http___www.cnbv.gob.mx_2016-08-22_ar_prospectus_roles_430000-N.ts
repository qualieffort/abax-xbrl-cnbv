///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/430000-N
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_430000_N implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_430000_N
         */
        constructor() {

            this.ListadoDeFormulas = {


                'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_DescriptionOfTheUnderlyingAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_DescriptionOfTheUnderlyingAssets_ar_pros_DescriptionOfTheUnderlyingAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or  not(variable2 == "Estructurados" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados" or variable2 == "Deuda LP,Estructurados" or variable2 == "Deuda CP,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfTheUnderlyingAssets",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Activos_Subyacentes_ar_pros_HistoricalPerformanceOfTheUnderlyingAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Activos_Subyacentes_ar_pros_HistoricalPerformanceOfTheUnderlyingAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or  not(variable2 == "Estructurados" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados" or variable2 == "Deuda LP,Estructurados" or variable2 == "Deuda CP,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Activos_Subyacentes_ar_pros_ExercisesToIdentifyThePossibleReturns': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Activos_Subyacentes_ar_pros_ExercisesToIdentifyThePossibleReturns',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or  not(variable2 == "Estructurados" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados" or variable2 == "Deuda LP,Estructurados" or variable2 == "Deuda CP,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ExercisesToIdentifyThePossibleReturns",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Activos_Subyacentes_ar_pros_OtherInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Activos_Subyacentes_ar_pros_OtherInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or  not(variable2 == "Estructurados" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados" or variable2 == "Deuda LP,Estructurados" or variable2 == "Deuda CP,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
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
  "ar_pros_ReferenceIncorporationUnderlyingAssets_a735f349-73ea-4792-934c-470ad87fb97a": {
    "Id": "ar_pros_ReferenceIncorporationUnderlyingAssets_a735f349-73ea-4792-934c-470ad87fb97a",
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
  "ar_pros_DescriptionOfTheUnderlyingAssets_8416fbb6-3d19-44a5-a9a4-11b8ab40382f": {
    "Id": "ar_pros_DescriptionOfTheUnderlyingAssets_8416fbb6-3d19-44a5-a9a4-11b8ab40382f",
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
  "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets_47ba6222-ebaa-4d84-b5ba-1861ea0fe1f6": {
    "Id": "ar_pros_HistoricalPerformanceOfTheUnderlyingAssets_47ba6222-ebaa-4d84-b5ba-1861ea0fe1f6",
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
  "ar_pros_ExercisesToIdentifyThePossibleReturns_cba7d373-71cd-4d2c-9b7c-03da8432bc58": {
    "Id": "ar_pros_ExercisesToIdentifyThePossibleReturns_cba7d373-71cd-4d2c-9b7c-03da8432bc58",
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
  "ar_pros_OtherInformation_3efb0c96-3ed9-47b8-88e9-ca8c9b02b2d9": {
    "Id": "ar_pros_OtherInformation_3efb0c96-3ed9-47b8-88e9-ca8c9b02b2d9",
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