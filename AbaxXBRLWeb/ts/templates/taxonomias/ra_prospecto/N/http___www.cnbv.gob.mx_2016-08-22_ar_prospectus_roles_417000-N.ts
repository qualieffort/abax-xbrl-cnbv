///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/417000-N
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_417000_N implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_417000_N
         */
        constructor() {

            this.ListadoDeFormulas = {



                'Obligatorio_La_Emisora_ar_pros_HistoryAndDevelopmentOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_HistoryAndDevelopmentOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HistoryAndDevelopmentOfTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_BusinessOverview': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_BusinessOverview',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BusinessOverview',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_MainActivity': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_MainActivity',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MainActivity',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_DistributionChannels': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_DistributionChannels',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DistributionChannels',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_PatentsLicensesTrademarksAndOtherContracts': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_PatentsLicensesTrademarksAndOtherContracts',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PatentsLicensesTrademarksAndOtherContracts',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_MainCustomers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_MainCustomers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MainCustomers',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_ApplicableLawAndTaxSituation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_ApplicableLawAndTaxSituation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ApplicableLawAndTaxSituation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_EnvironmentalPerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_EnvironmentalPerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EnvironmentalPerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_HumanResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_HumanResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HumanResources',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_IssuerMarketInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_IssuerMarketInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuerMarketInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_CorporateStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_CorporateStructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CorporateStructure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_DescriptionOfKeyAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_DescriptionOfKeyAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfKeyAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Emisora_ar_pros_JudicialAdministrativeOrArbitrationProceedings': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Emisora_ar_pros_JudicialAdministrativeOrArbitrationProceedings',
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
                'Obligatorio_Condicional_La_Emisora_Acciones_ar_pros_Dividends': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_La_Emisora_Acciones_ar_pros_Dividends',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Dividends",
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
                'Obligatorio_Condicional_La_Emisora_AccionesYDeuda_ar_pros_CapitalShares': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_La_Emisora_AccionesYDeuda_ar_pros_CapitalShares',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Acciones" or variable2 == "Acciones,Deuda LP" or variable2 == "Acciones,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP" or variable2 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable2 == "Acciones,Estructurados" or variable2 == "Deuda LP" or variable2 == "Deuda CP" or variable2 == "Deuda LP,Deuda CP" or variable2 == "Deuda LP,Deuda CP,Estructurados" or variable2 == "Deuda LP,Fideicomisos" or variable2 == "Deuda LP,Estructurados" or variable2 == "Deuda CP,Fideicomisos" or variable2 == "Deuda CP,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones" y "Deuda".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones" y "Deuda".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_CapitalShares",
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
                'Obligatorio_Condicional_La_Emisora_Emision_Extranjera_ar_pros_ExchangeControlsAndOtherLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_La_Emisora_Emision_Extranjera_ar_pros_ExchangeControlsAndOtherLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExchangeControlsAndOtherLimitations',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ForeingIssuer',
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
  "ar_pros_ReferenceIncorporationTheIssuer_ec940375-bde5-4194-88eb-7f4e9221c791": {
    "Id": "ar_pros_ReferenceIncorporationTheIssuer_ec940375-bde5-4194-88eb-7f4e9221c791",
    "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationTheIssuer"
  },
  "ar_pros_HistoryAndDevelopmentOfTheIssuer_b3b8d4ea-f828-42fc-8d10-23f66bee293a": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTheIssuer_b3b8d4ea-f828-42fc-8d10-23f66bee293a",
    "IdConcepto": "ar_pros_HistoryAndDevelopmentOfTheIssuer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BusinessOverview_a721a583-803e-4fd5-8337-e95636ba5252": {
    "Id": "ar_pros_BusinessOverview_a721a583-803e-4fd5-8337-e95636ba5252",
    "IdConcepto": "ar_pros_BusinessOverview",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainActivity_ea2ecc8a-3c4e-4123-ba2a-337f9397fe21": {
    "Id": "ar_pros_MainActivity_ea2ecc8a-3c4e-4123-ba2a-337f9397fe21",
    "IdConcepto": "ar_pros_MainActivity",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DistributionChannels_add76682-d7b9-40e5-afe8-8c7b90237fa3": {
    "Id": "ar_pros_DistributionChannels_add76682-d7b9-40e5-afe8-8c7b90237fa3",
    "IdConcepto": "ar_pros_DistributionChannels",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PatentsLicensesTrademarksAndOtherContracts_82fef7d7-13e7-4cab-8a53-b2ae2cfc9ce2": {
    "Id": "ar_pros_PatentsLicensesTrademarksAndOtherContracts_82fef7d7-13e7-4cab-8a53-b2ae2cfc9ce2",
    "IdConcepto": "ar_pros_PatentsLicensesTrademarksAndOtherContracts",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainCustomers_13fc0688-df9b-4eaa-9d12-d6a9abf976c8": {
    "Id": "ar_pros_MainCustomers_13fc0688-df9b-4eaa-9d12-d6a9abf976c8",
    "IdConcepto": "ar_pros_MainCustomers",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ApplicableLawAndTaxSituation_e6b4030b-ad04-4a8b-8bd9-546ab0f9dfc5": {
    "Id": "ar_pros_ApplicableLawAndTaxSituation_e6b4030b-ad04-4a8b-8bd9-546ab0f9dfc5",
    "IdConcepto": "ar_pros_ApplicableLawAndTaxSituation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_HumanResources_7dd2bafc-c780-4a06-a407-b67a7708ec81": {
    "Id": "ar_pros_HumanResources_7dd2bafc-c780-4a06-a407-b67a7708ec81",
    "IdConcepto": "ar_pros_HumanResources",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EnvironmentalPerformance_5c8bcdb4-c03e-4cf3-a7b8-8000f63dda01": {
    "Id": "ar_pros_EnvironmentalPerformance_5c8bcdb4-c03e-4cf3-a7b8-8000f63dda01",
    "IdConcepto": "ar_pros_EnvironmentalPerformance",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IssuerMarketInformation_d233105d-3562-4695-86a7-8f7bf12f92b0": {
    "Id": "ar_pros_IssuerMarketInformation_d233105d-3562-4695-86a7-8f7bf12f92b0",
    "IdConcepto": "ar_pros_IssuerMarketInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CorporateStructure_11933a35-3932-44c0-b394-f0ebd4f722d2": {
    "Id": "ar_pros_CorporateStructure_11933a35-3932-44c0-b394-f0ebd4f722d2",
    "IdConcepto": "ar_pros_CorporateStructure",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfKeyAssets_d9bb211a-7eb9-4506-9c80-b4b5c4bde2e5": {
    "Id": "ar_pros_DescriptionOfKeyAssets_d9bb211a-7eb9-4506-9c80-b4b5c4bde2e5",
    "IdConcepto": "ar_pros_DescriptionOfKeyAssets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_JudicialAdministrativeOrArbitrationProceedings_45dce72a-5303-467a-9698-3577ea472b5a": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedings_45dce72a-5303-467a-9698-3577ea472b5a",
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
  "ar_pros_CapitalShares_7e065d0e-ca6d-4e45-a4a6-bed4a2ee4e1a": {
    "Id": "ar_pros_CapitalShares_7e065d0e-ca6d-4e45-a4a6-bed4a2ee4e1a",
    "IdConcepto": "ar_pros_CapitalShares",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Dividends_b5700d64-03a6-41cb-8e1f-dad1a03bb943": {
    "Id": "ar_pros_Dividends_b5700d64-03a6-41cb-8e1f-dad1a03bb943",
    "IdConcepto": "ar_pros_Dividends",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ExchangeControlsAndOtherLimitations_ed06177a-983e-4fb6-b635-f22dc01dfd86": {
    "Id": "ar_pros_ExchangeControlsAndOtherLimitations_ed06177a-983e-4fb6-b635-f22dc01dfd86",
    "IdConcepto": "ar_pros_ExchangeControlsAndOtherLimitations",
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