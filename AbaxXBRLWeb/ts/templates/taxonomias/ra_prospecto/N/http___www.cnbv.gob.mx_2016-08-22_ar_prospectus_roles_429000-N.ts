///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/429000-N
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_429000_N implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_429000_N
         */
        constructor() {

            this.ListadoDeFormulas = {


                'Obligatorio_Condicional_Mercado_Capitales_ar_pros_ShareholdingStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mercado_Capitales_ar_pros_ShareholdingStructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ShareholdingStructure",
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
                'Obligatorio_Condicional_Mercado_Capitales_ar_pros_BehaviorOfTheShare': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mercado_Capitales_ar_pros_BehaviorOfTheShare',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_BehaviorOfTheShare",
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
                'Obligatorio_Condicional_Mercado_Capitales_ar_pros_NameOfEachMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mercado_Capitales_ar_pros_NameOfEachMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfEachMarketMaker",
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
                'Obligatorio_Condicional_Mercado_Capitales_ar_pros_IdentificationOfTheValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mercado_Capitales_ar_pros_IdentificationOfTheValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IdentificationOfTheValues",
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
                'Obligatorio_Condicional_Mercado_Capitales_ar_pros_EffectiveBeginningExtensionOrRenewal': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mercado_Capitales_ar_pros_EffectiveBeginningExtensionOrRenewal',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_EffectiveBeginningExtensionOrRenewal",
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
                'Obligatorio_Condicional_Mercado_Capitales_ar_pros_DescriptionOfTheServicesProvided': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mercado_Capitales_ar_pros_DescriptionOfTheServicesProvided',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfTheServicesProvided",
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
                'Obligatorio_Condicional_Mercado_Capitales_ar_pros_OverviewOfTheImpactOfThePerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mercado_Capitales_ar_pros_OverviewOfTheImpactOfThePerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OverviewOfTheImpactOfThePerformance",
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
  "ar_pros_ShareholdingStructure_5cbf27a4-1f68-43ed-a6bb-67743b429a3e": {
    "Id": "ar_pros_ShareholdingStructure_5cbf27a4-1f68-43ed-a6bb-67743b429a3e",
    "IdConcepto": "ar_pros_ShareholdingStructure",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BehaviorOfTheShare_cf31b3f1-1b14-4e64-a297-152d5d877676": {
    "Id": "ar_pros_BehaviorOfTheShare_cf31b3f1-1b14-4e64-a297-152d5d877676",
    "IdConcepto": "ar_pros_BehaviorOfTheShare",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfEachMarketMaker_a8b6eb85-cd4c-4c04-9f93-f22c4e9ee6b8": {
    "Id": "ar_pros_NameOfEachMarketMaker_a8b6eb85-cd4c-4c04-9f93-f22c4e9ee6b8",
    "IdConcepto": "ar_pros_NameOfEachMarketMaker",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IdentificationOfTheValues_39f6e9e0-f7ee-44ef-a2b9-82b809e3075b": {
    "Id": "ar_pros_IdentificationOfTheValues_39f6e9e0-f7ee-44ef-a2b9-82b809e3075b",
    "IdConcepto": "ar_pros_IdentificationOfTheValues",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EffectiveBeginningExtensionOrRenewal_218906d5-2e38-4f38-8407-47c1f6276e3e": {
    "Id": "ar_pros_EffectiveBeginningExtensionOrRenewal_218906d5-2e38-4f38-8407-47c1f6276e3e",
    "IdConcepto": "ar_pros_EffectiveBeginningExtensionOrRenewal",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfTheServicesProvided_12084a5f-db3b-4c0c-912b-9aa5a910aa5c": {
    "Id": "ar_pros_DescriptionOfTheServicesProvided_12084a5f-db3b-4c0c-912b-9aa5a910aa5c",
    "IdConcepto": "ar_pros_DescriptionOfTheServicesProvided",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OverviewOfTheImpactOfThePerformance_e647ff0e-cf70-41cd-8dcc-ed990601cd80": {
    "Id": "ar_pros_OverviewOfTheImpactOfThePerformance_e647ff0e-cf70-41cd-8dcc-ed990601cd80",
    "IdConcepto": "ar_pros_OverviewOfTheImpactOfThePerformance",
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