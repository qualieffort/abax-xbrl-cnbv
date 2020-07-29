///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/417000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_417000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_417000_H
         */
        constructor() {

            this.ListadoDeFormulas = {


                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_HistoryAndDevelopmentOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_HistoryAndDevelopmentOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_HistoryAndDevelopmentOfTheIssuer",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_MainActivity': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_MainActivity',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MainActivity",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_DistributionChannels': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_DistributionChannels',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DistributionChannels",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_PatentsLicensesTrademarksAndOtherContracts': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_PatentsLicensesTrademarksAndOtherContracts',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PatentsLicensesTrademarksAndOtherContracts",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_MainCustomers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_MainCustomers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MainCustomers",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_ApplicableLawAndTaxSituation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_ApplicableLawAndTaxSituation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ApplicableLawAndTaxSituation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_HumanResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_HumanResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_HumanResources",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_EnvironmentalPerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_EnvironmentalPerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_EnvironmentalPerformance",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_IssuerMarketInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_IssuerMarketInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IssuerMarketInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_CorporateStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_CorporateStructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_CorporateStructure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_DescriptionOfKeyAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_DescriptionOfKeyAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfKeyAssets",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_JudicialAdministrativeOrArbitrationProceedings': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_JudicialAdministrativeOrArbitrationProceedings',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedings",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_CapitalShares': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_CapitalShares',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_CapitalShares",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_Dividends': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_Dividends',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Dividends",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_ExchangeControlsAndOtherLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_ExchangeControlsAndOtherLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ExchangeControlsAndOtherLimitations",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                
                
                'LA_EMISORA_obligatorio_condicional_emisoraExtranjera_incorporacionReferencia__ar_pros_ExchangeControlsAndOtherLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_condicional_emisoraExtranjera_incorporacionReferencia__ar_pros_ExchangeControlsAndOtherLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia y que el concepto "Emisora extranjera" sea "SI".',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia y que el concepto "Emisora extranjera" sea "SI".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ExchangeControlsAndOtherLimitations",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_ForeingIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        },

                    }
                ),


                'LA_EMISORA_obligatorio_ar_pros_ReferenceIncorporationTheIssuerText': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_ar_pros_ReferenceIncorporationTheIssuerText',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuerText",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                }
                                
                            }
                    }
                ),

                'LA_EMISORA_obligatorio_ar_pros_DenominationOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_ar_pros_DenominationOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_DenominationOfTheIssuer",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                }
                            }
                    }
                ),
                'LA_EMISORA_obligatorio_ar_pros_CommercialNameOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_ar_pros_CommercialNameOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_CommercialNameOfTheIssuer",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                }
                            }
                    }
                ),
                'LA_EMISORA_obligatorio_ar_pros_ConstitucionDateOfTheIssuer': new model.DefinicionFormula().deserialize({
                    Id: 'LA_EMISORA_obligatorio_ar_pros_ConstitucionDateOfTheIssuer',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ConstitucionDateOfTheIssuer',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false

                            
                        })
                    }
                }),
                'LA_EMISORA_obligatorio_ar_pros_MainOfficeAddress': new model.DefinicionFormula().deserialize({
                    Id: 'LA_EMISORA_obligatorio_ar_pros_MainOfficeAddress',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "SI")',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MainOfficeAddress",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                }),
                'LA_EMISORA_obligatorio_ar_pros_MainOfficeTelephoneNumbers': new model.DefinicionFormula().deserialize({
                    Id: 'LA_EMISORA_obligatorio_ar_pros_MainOfficeTelephoneNumbers',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "SI")',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MainOfficeTelephoneNumbers",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                }),
                'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_LegalFormOfConstitutionAndLegislationUnderWhichTheIssuerOperates': new model.DefinicionFormula().deserialize({
                    Id: 'LA_EMISORA_obligatorio_condicional_no_vacios__ar_pros_LegalFormOfConstitutionAndLegislationUnderWhichTheIssuerOperates',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                    MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                    MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_LegalFormOfConstitutionAndLegislationUnderWhichTheIssuerOperates",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuer",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }),
                'LA_EMISORA_obligatorio_ar_pros_TheIssuerHasHadChangesInTheLegalName': new model.DefinicionFormula().deserialize({
                    Id: 'LA_EMISORA_obligatorio_ar_pros_TheIssuerHasHadChangesInTheLegalName',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TheIssuerHasHadChangesInTheLegalName',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }),
                'LA_EMISORA_obligatorio_ar_pros_IssuerBusinessOverview': new model.DefinicionFormula().deserialize({
                    Id: 'LA_EMISORA_obligatorio_ar_pros_IssuerBusinessOverview',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_IssuerBusinessOverview',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }),
                'LA_EMISORA_obligatorio_ar_pros_ThereIsDependenceOnTheIssuerWithOneOrMoreClients': new model.DefinicionFormula().deserialize({
                    Id: 'LA_EMISORA_obligatorio_ar_pros_ThereIsDependenceOnTheIssuerWithOneOrMoreClients',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ThereIsDependenceOnTheIssuerWithOneOrMoreClients',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                })
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
  "ar_pros_ReferenceIncorporationTheIssuer_4dc7e131-4943-4b70-869d-17867bafb49f": {
    "Id": "ar_pros_ReferenceIncorporationTheIssuer_4dc7e131-4943-4b70-869d-17867bafb49f",
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
     "ar_pros_ReferenceIncorporationTheIssuerText_4dc7e131-4943-4b70-869d-17867bafb49f": {
     "Id": "ar_pros_ReferenceIncorporationTheIssuerText_4dc7e131-4943-4b70-869d-17867bafb49f",
     "IdConcepto": "ar_pros_ReferenceIncorporationTheIssuerText",
     "IdContextoPlantilla": "ctx_2014",
     "Hechos": [],
     "IdUnidadPlantilla": null,
     "ValorNumerador": null,
     "ValorDenominador": null,
     "Precision": null,
     "Decimales": null,
     "Valor": "#valorDefaultReferenceIncorporationTheIssuerText"
   },
  "ar_pros_HistoryAndDevelopmentOfTheIssuer_81ceaa6c-6996-40d0-9dab-51717fcbb9f9": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTheIssuer_81ceaa6c-6996-40d0-9dab-51717fcbb9f9",
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
  "ar_pros_MainActivity_be5eab65-bf74-4635-be81-cde4fe3264d1": {
    "Id": "ar_pros_MainActivity_be5eab65-bf74-4635-be81-cde4fe3264d1",
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
  "ar_pros_DistributionChannels_e90ab6b2-e788-4adf-8c05-74bb587d26f1": {
    "Id": "ar_pros_DistributionChannels_e90ab6b2-e788-4adf-8c05-74bb587d26f1",
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
  "ar_pros_PatentsLicensesTrademarksAndOtherContracts_8be7a042-d900-44e3-80d9-16f4588b1dc3": {
    "Id": "ar_pros_PatentsLicensesTrademarksAndOtherContracts_8be7a042-d900-44e3-80d9-16f4588b1dc3",
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
  "ar_pros_MainCustomers_34c5028f-5b18-491d-a2c2-705ff22eaad2": {
    "Id": "ar_pros_MainCustomers_34c5028f-5b18-491d-a2c2-705ff22eaad2",
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
  "ar_pros_ApplicableLawAndTaxSituation_c7d1f5af-bb4d-421d-84c9-566605e0bc97": {
    "Id": "ar_pros_ApplicableLawAndTaxSituation_c7d1f5af-bb4d-421d-84c9-566605e0bc97",
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
  "ar_pros_HumanResources_6987d543-0310-4004-a6be-f5a0724ad5ab": {
    "Id": "ar_pros_HumanResources_6987d543-0310-4004-a6be-f5a0724ad5ab",
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
  "ar_pros_EnvironmentalPerformance_c35f171c-e776-47d1-a15e-05652a770960": {
    "Id": "ar_pros_EnvironmentalPerformance_c35f171c-e776-47d1-a15e-05652a770960",
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
  "ar_pros_IssuerMarketInformation_d296e777-3d30-46a4-9b09-fabf23b43eed": {
    "Id": "ar_pros_IssuerMarketInformation_d296e777-3d30-46a4-9b09-fabf23b43eed",
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
  "ar_pros_CorporateStructure_061910ac-c686-409f-9924-49ac89cad3f3": {
    "Id": "ar_pros_CorporateStructure_061910ac-c686-409f-9924-49ac89cad3f3",
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
  "ar_pros_DescriptionOfKeyAssets_296568f5-6846-4a5d-a499-e6631cfe28ab": {
    "Id": "ar_pros_DescriptionOfKeyAssets_296568f5-6846-4a5d-a499-e6631cfe28ab",
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
  "ar_pros_JudicialAdministrativeOrArbitrationProceedings_7bb9ce1c-c18e-453f-afd4-e8afb71fbdff": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedings_7bb9ce1c-c18e-453f-afd4-e8afb71fbdff",
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
  "ar_pros_CapitalShares_c53c5908-7be9-4e25-9ee7-386d72122541": {
    "Id": "ar_pros_CapitalShares_c53c5908-7be9-4e25-9ee7-386d72122541",
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
  "ar_pros_Dividends_f756eb2e-dd1e-43c7-a4a3-a826dbb5f7ae": {
    "Id": "ar_pros_Dividends_f756eb2e-dd1e-43c7-a4a3-a826dbb5f7ae",
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
  "ar_pros_ExchangeControlsAndOtherLimitations_f58c06c2-f0d8-48de-af65-ba11a077eae6": {
    "Id": "ar_pros_ExchangeControlsAndOtherLimitations_f58c06c2-f0d8-48de-af65-ba11a077eae6",
    "IdConcepto": "ar_pros_ExchangeControlsAndOtherLimitations",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DenominationOfTheIssuer-0000-0000-0000": {
      "Id": "ar_pros_DenominationOfTheIssuer-0000-0000-0000",
      "IdConcepto": "ar_pros_DenominationOfTheIssuer",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommercialNameOfTheIssuer-0000-0000-0000": {
      "Id": "ar_pros_CommercialNameOfTheIssuer-0000-0000-0000",
      "IdConcepto": "ar_pros_CommercialNameOfTheIssuer",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ConstitucionDateOfTheIssuer-0000-0000-0000": {
      "Id": "ar_pros_ConstitucionDateOfTheIssuer-0000-0000-0000",
      "IdConcepto": "ar_pros_ConstitucionDateOfTheIssuer",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainOfficeAddress-0000-0000-0000": {
      "Id": "ar_pros_MainOfficeAddress-0000-0000-0000",
      "IdConcepto": "ar_pros_MainOfficeAddress",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainOfficeTelephoneNumbers-0000-0000-0000": {
      "Id": "ar_pros_MainOfficeTelephoneNumbers-0000-0000-0000",
      "IdConcepto": "ar_pros_MainOfficeTelephoneNumbers",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LegalFormOfConstitutionAndLegislationUnderWhichTheIssuerOperates-0000-0000-0000": {
      "Id": "ar_pros_LegalFormOfConstitutionAndLegislationUnderWhichTheIssuerOperates-0000-0000-0000",
      "IdConcepto": "ar_pros_LegalFormOfConstitutionAndLegislationUnderWhichTheIssuerOperates",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TheIssuerHasHadChangesInTheLegalName-0000-0000-0000": {
      "Id": "ar_pros_TheIssuerHasHadChangesInTheLegalName-0000-0000-0000",
      "IdConcepto": "ar_pros_TheIssuerHasHadChangesInTheLegalName",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ThereIsDependenceOnTheIssuerWithOneOrMoreClients-0000-0000-0000": {
      "Id": "ar_pros_ThereIsDependenceOnTheIssuerWithOneOrMoreClients-0000-0000-0000",
      "IdConcepto": "ar_pros_ThereIsDependenceOnTheIssuerWithOneOrMoreClients",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdditionalInformationOfTheIssuer-0000-0000-0000": {
      "Id": "ar_pros_AdditionalInformationOfTheIssuer-0000-0000-0000",
      "IdConcepto": "ar_pros_AdditionalInformationOfTheIssuer",
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