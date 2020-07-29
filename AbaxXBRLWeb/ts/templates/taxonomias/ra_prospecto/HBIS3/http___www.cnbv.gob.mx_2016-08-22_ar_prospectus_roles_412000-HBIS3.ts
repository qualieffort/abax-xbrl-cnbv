///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-HBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_Condicional_Emision_Al_Amparo_ar_pros_IssuanceUnderArt13OfTheCUELegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Al_Amparo_ar_pros_IssuanceUnderArt13OfTheCUELegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "SI" or squeeze(size(variable1)) > 0 )',
                        MensajeExito: 'El hecho {variable1} debe ser reportado en caso de que el concepto "Emisión al amparo del art. 13 bis de la CUE" sea "SI", en caso contrario no debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado en caso de que el concepto "Emisión al amparo del art. 13 bis de la CUE" sea "SI", en caso contrario no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            }
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueDateOfIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueNumberOfValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueTerm': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueTerm',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueTerm',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValuePlacementPrice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValuePlacementPrice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValuePlacementPrice',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueObservations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueObservations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueObservations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Tratándose_de_Valores_Adicionales_ar_pros_InTheCaseOfAdditionalValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Tratándose_de_Valores_Adicionales_ar_pros_InTheCaseOfAdditionalValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_IssuerLogo': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_IssuerLogo',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IssuerLogo",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTrustee': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTrustee',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfTrustee",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LogoOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LogoOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_LogoOfTheSettlor",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NameOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameOfTheSettlor",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_Series': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_Series',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Series",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_DateOfPublicationOfTenderNotice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_DateOfPublicationOfTenderNotice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_Obligatorio_Serie_ar_pros_Series': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Serie_ar_pros_Series',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Series',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Serie_ar_pros_Type': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Serie_ar_pros_Type',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Type',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Serie_ar_pros_Class': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Serie_ar_pros_Class',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Class',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Serie_ar_pros_NominalValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Serie_ar_pros_NominalValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NominalValue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Serie_ar_pros_NumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Serie_ar_pros_NumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberOfValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Serie_ar_pros_TickerOfTheOriginStockMarket': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Serie_ar_pros_TickerOfTheOriginStockMarket',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TickerOfTheOriginStockMarket',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Serie_ar_pros_TypeOfOperation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Serie_ar_pros_TypeOfOperation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfOperation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Serie_ar_pros_Observations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Serie_ar_pros_Observations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Observations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_PeriodOrDateOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_PeriodOrDateOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PeriodOrDateOfTheOffer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_ClosingDateBookOrAuction': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_ClosingDateBookOrAuction',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ClosingDateBookOrAuction",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DateOfRegisterInTheStockExchange': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DateOfRegisterInTheStockExchange',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DateOfRegisterInTheStockExchange",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SettlementDate",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalAmountOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalAmountOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalAmountOfSecurities",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalNumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalNumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalNumberOfValues",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_IssuanceUnderArt13OfTheCUELegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_IssuanceUnderArt13OfTheCUELegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AmountProgramAndOrNumberOfCertificates': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AmountProgramAndOrNumberOfCertificates',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AmountProgramAndOrNumberOfCertificates",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_LifeOfTheProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_LifeOfTheProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_LifeOfTheProgram",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SerieNumberOfCorrespondingEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SerieNumberOfCorrespondingEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SerieNumberOfCorrespondingEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Emision_Unica_Prospecto__ar_pros_TotalAmountOfTheIssueWithCapitalCalls': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto__ar_pros_TotalAmountOfTheIssueWithCapitalCalls',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or  variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Emision_Unica_Prospecto_2_ar_pros_MaximumNumberOfSecuritiesToBeRegistered': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto_2_ar_pros_MaximumNumberOfSecuritiesToBeRegistered',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or  variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Emision_Unica_Prospecto_2_ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto_2_ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or  variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Mencion_Oferta_Publica_ar_pros_TheMentionOfBeingPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Mencion_Oferta_Publica_ar_pros_TheMentionOfBeingPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and variable3 == "INF") or (squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto o de Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_NumberOfTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NumberOfTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberOfTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_DataRelatedToTheIndenture': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_DataRelatedToTheIndenture',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DataRelatedToTheIndenture',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_TrusteesInFirstPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TrusteesInFirstPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TrusteesInFirstPlace',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_TrusteesInSecondPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TrusteesInSecondPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TrusteesInSecondPlace',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_TrusteesInThirdPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TrusteesInThirdPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TrusteesInThirdPlace',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_OtherTrustees': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_OtherTrustees',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OtherTrustees',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_TrustEstateManager': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TrustEstateManager',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TrustEstateManager',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_AdvisoryOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_AdvisoryOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdvisoryOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_IndicationOfAnyOtherRelevantThirdParties': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_IndicationOfAnyOtherRelevantThirdParties',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IndicationOfAnyOtherRelevantThirdParties',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_SummaryOfTheMostImportantCharacteristics': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_SummaryOfTheMostImportantCharacteristics',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SummaryOfTheMostImportantCharacteristics',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_DistributionsFrequencyAndCalculationProcedure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_DistributionsFrequencyAndCalculationProcedure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DistributionsFrequencyAndCalculationProcedure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_SourceOfTheDistributions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_SourceOfTheDistributions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SourceOfTheDistributions',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_IndicationThatRealEstateTrustBondsAreNotRedeemable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_IndicationThatRealEstateTrustBondsAreNotRedeemable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IndicationThatRealEstateTrustBondsAreNotRedeemable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_LocationAndPaymentOfDistributions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_LocationAndPaymentOfDistributions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LocationAndPaymentOfDistributions',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_SerieDepositary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_SerieDepositary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieDepositary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_LegendArticle86OfTheLMV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_LegendArticle86OfTheLMV',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LegendArticle86OfTheLMV',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_NumberOfRegister': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NumberOfRegister',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberOfRegister',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_LegendDocumentAvailableWithTheUnderwriter': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_LegendDocumentAvailableWithTheUnderwriter',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LegendDocumentAvailableWithTheUnderwriter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_ProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_ProspectusSupplementBrochure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ProspectusSupplementBrochure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_ParticipantName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_ParticipantName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ParticipantName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_ParticipantName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_ParticipantName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ParticipantName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_SignificantParticipationInTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_renglon_tabla_Participantes_en_la_oferta_ar_pros_SignificantParticipationInTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SignificantParticipationInTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                //===========================================================================================================================
                // Existence Asertions
                //===========================================================================================================================
                'ExistenciaPersonaResponsable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaPersonaResponsable',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Nombre" de la tabla "Personas responsables del informe" debe existir y ser reportado al menos una vez.',
                        MensajeError: 'El concepto "Nombre" de la tabla "Personas responsables del informe" debe existir y ser reportado al menos una vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ResponsiblePersonName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'ExistenciaNumeroCaracteristicasTitulos': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaNumeroCaracteristicasTitulos',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Serie" de la tabla "Número y características de los títulos que se ofrecen" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Serie" de la tabla "Número y características de los títulos que se ofrecen" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Series',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'ExistenciaValoresAdicionales': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaValoresAdicionales',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Fecha de emisión" de la tabla "Valores adicionales" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Fecha de emisión" de la tabla "Valores adicionales" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdditionalValueDateOfIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Calificaciones_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Calificaciones_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable2)) > 0) or (squeeze(size(variable3)) > 0) or (squeeze(size(variable4)) > 0) or (squeeze(size(variable5)) > 0) or (squeeze(size(variable6)) > 0) or (squeeze(size(variable7)) > 0) or (squeeze(size(variable8)) > 0) or (squeeze(size(variable9)) > 0)',
                        MensajeExito: 'Para cada serie de deuda se debe registrar almenos una calificación.',
                        MensajeError: 'Para cada serie de deuda se debe registrar almenos una calificación.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DebtSeries",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember",
                                        "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                        "IdItemMiembro": "ar_pros_FitchMexicoSADeCVMember"
                                    }
                                ],
                                "MismasDimensiones": true
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:HRRatingsDeMexicoSADeCVMember",
                                        "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                        "IdItemMiembro": "ar_pros_HRRatingsDeMexicoSADeCVMember"
                                    }
                                ],
                                "MismasDimensiones": true
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MoodysDeMexicoSADeCVMember",
                                        "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                        "IdItemMiembro": "ar_pros_MoodysDeMexicoSADeCVMember"
                                    }
                                ],
                                "MismasDimensiones": true
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StandardAndPoorsSADeCVMember",
                                        "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                        "IdItemMiembro": "ar_pros_StandardAndPoorsSADeCVMember"
                                    }
                                ],
                                "MismasDimensiones": true
                            },
                            "variable6": {
                                "Id": "variable6",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:VerumCalificadoraDeValoresSAPIDeCVMember",
                                        "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                        "IdItemMiembro": "ar_pros_VerumCalificadoraDeValoresSAPIDeCVMember"
                                    }
                                ],
                                "MismasDimensiones": true
                            },
                            "variable7": {
                                "Id": "variable7",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AMBestAmericaLatinaSADeCVMember",
                                        "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                        "IdItemMiembro": "ar_pros_AMBestAmericaLatinaSADeCVMember"
                                    }
                                ],
                                "MismasDimensiones": true
                            },
                            "variable8": {
                                "Id": "variable8",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DBRSRatingsMexicoSAdeCVMember",
                                        "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                        "IdItemMiembro": "ar_pros_DBRSRatingsMexicoSAdeCVMember"
                                    }
                                ],
                                "MismasDimensiones": true
                            },
                            "variable9": {
                                "Id": "variable9",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingOtherMember",
                                        "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                        "IdItemMiembro": "ar_pros_SecuritiesRatingOtherMember"
                                    }
                                ],
                                "MismasDimensiones": true
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtIssuanceDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtIssuanceDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtIssuanceDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieSettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieSettlementDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieTermOfTheIssuancePros': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieTermOfTheIssuancePros',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieTermOfTheIssuancePros',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtInterestPerformanceAndCalculationProcedure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtInterestPerformanceAndCalculationProcedure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtInterestPerformanceAndCalculationProcedure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtPaymentFrequencyOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtPaymentFrequencyOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtPaymentFrequencyOfInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSubordinationOfTitlesIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSubordinationOfTitlesIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSubordinationOfTitlesIfAny',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtGuaranteeIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtGuaranteeIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtGuaranteeIfAny',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtTrustIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtTrustIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtTrustIfAny',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtCommonRepresentative': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtCommonRepresentative',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtCommonRepresentative',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtDepositary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtDepositary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtDepositary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtTaxRegime': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtTaxRegime',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtTaxRegime',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Condicional_LeyendaSuplemento_ar_pros_SupplementLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_LeyendaSuplemento_ar_pros_SupplementLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Suplemento" el concepto "Leyenda sumplemento" es requerido, para otro tipo de reporte el concepto "Leyenda suplemento" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Suplemento" el concepto "Leyenda sumplemento" es requerido, para otro tipo de reporte el concepto "Leyenda suplemento" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_SupplementLegend",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_Supplement",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional_Emision_Unica_Prospecto_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 != "INF" or  variable2 == 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_PlacementProspectus",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_OnlyEmission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Obligatorio_Leyenda_Prospecto_ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Leyenda_Prospecto_ar_pros_ProspectusLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_ProspectusLegend",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_PlacementProspectus",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_IssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_IssuanceUnderArt13OfTheCUE',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuanceUnderArt13OfTheCUE',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_LimitedPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_LimitedPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LimitedPublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TypeOfInstrument': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TypeOfInstrument',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrument',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_ForeingIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_ForeingIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ForeingIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_MentioningwhetherOrNotHaveCollateral': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_MentioningwhetherOrNotHaveCollateral',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MentioningwhetherOrNotHaveCollateral',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'obligatorio_condicional_mencionar_dependiendo_parcial_o_total_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'obligatorio_condicional_mencionar_dependiendo_parcial_o_total_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Fideicomisos" and squeeze(size(variable1)) > 0)  or (variable2 != "Fideicomisos")',
                        MensajeExito: 'El concepto "Mencionar dependencia parcial o total" existe y es reportado cuando el "Tipo de instrumento" es "Fideicomisos"',
                        MensajeError: 'El concepto "Mencionar dependencia parcial o total" debe existir y ser reportado cuando el "Tipo de instrumento" es "Fideicomisos"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
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
                                }
                            }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx": {
    "Id": "ctx",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2015_06_10",
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
  },
  "ctx_1": {
    "Id": "ctx_1",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2015_06_10",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfParticipationsInTheOfferAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:NationalLawyersMember</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ar_pros:ParticipantsInTheOfferSequenceTypedAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">1</ar_pros:ParticipantSequenceDomain></xbrldi:typedMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
        "IdItemMiembro": "ar_pros_NationalLawyersMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:NationalLawyersMember",
        "ElementoMiembroTipificado": null
      },
      {
        "Explicita": false,
        "IdDimension": "ar_pros_ParticipantsInTheOfferSequenceTypedAxis",
        "IdItemMiembro": null,
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis",
        "QNameItemMiembro": null,
        "ElementoMiembroTipificado": "<ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">1</ar_pros:ParticipantSequenceDomain>"
      }
    ]
  }
};

            this.UnidadesPlantillaPorId = {
  "moneda": {
    "Id": "moneda",
    "Tipo": 1,
    "Medidas": [
      {
        "Nombre": "#medida_MXN",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "MedidasDenominador": [],
    "MedidasNumerador": []
  }
};
            
            this.HechosPlantillaPorId = {
  "ar_pros_TheMentionOfBeingPublicOffering_e324a2fd-2550-4ef9-8dcb-9ab8a45b97b9": {
    "Id": "ar_pros_TheMentionOfBeingPublicOffering_e324a2fd-2550-4ef9-8dcb-9ab8a45b97b9",
    "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },

  "ar_pros_SerieDepositary_c005abe0-b078-46ae-817b-9ce2a7423592": {
      "Id": "ar_pros_SerieDepositary_c005abe0-b078-46ae-817b-9ce2a7423592",
      "IdConcepto": "ar_pros_SerieDepositary",
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TypeOfOffer_984a2a9c-833f-4461-bbfc-25f6db0bfde8": {
    "Id": "ar_pros_TypeOfOffer_984a2a9c-833f-4461-bbfc-25f6db0bfde8",
    "IdConcepto": "ar_pros_TypeOfOffer",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTypeOfOffer"
  },
  "ar_pros_IssuerLogo_4f8b54eb-1047-480d-b145-134cdd549d83": {
    "Id": "ar_pros_IssuerLogo_4f8b54eb-1047-480d-b145-134cdd549d83",
    "IdConcepto": "ar_pros_IssuerLogo",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTrustee_0567ab30-cd0e-448d-9a9c-f3624f00c56c": {
    "Id": "ar_pros_NameOfTrustee_0567ab30-cd0e-448d-9a9c-f3624f00c56c",
    "IdConcepto": "ar_pros_NameOfTrustee",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LogoOfTheSettlor_84b7b1d6-a882-47d9-bdb3-cad213b9ccc9": {
    "Id": "ar_pros_LogoOfTheSettlor_84b7b1d6-a882-47d9-bdb3-cad213b9ccc9",
    "IdConcepto": "ar_pros_LogoOfTheSettlor",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTheSettlor_f1f0187f-a6a4-4781-b9a4-2918bf627a09": {
    "Id": "ar_pros_NameOfTheSettlor_f1f0187f-a6a4-4781-b9a4-2918bf627a09",
    "IdConcepto": "ar_pros_NameOfTheSettlor",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Ticker_65ff9e8a-e702-4e87-b6b7-aed09debee9c": {
    "Id": "ar_pros_Ticker_65ff9e8a-e702-4e87-b6b7-aed09debee9c",
    "IdConcepto": "ar_pros_Ticker",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_15f3464e-1d9b-403c-ab0d-a9085060943e": {
    "Id": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_15f3464e-1d9b-403c-ab0d-a9085060943e",
    "IdConcepto": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_c51d887a-1d7e-45f6-b553-627244c1ce00": {
    "Id": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_c51d887a-1d7e-45f6-b553-627244c1ce00",
    "IdConcepto": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_a9ec314e-20f1-4037-9ca0-9cb073f07ec3": {
    "Id": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_a9ec314e-20f1-4037-9ca0-9cb073f07ec3",
    "IdConcepto": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultDesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized"
  },
  "ar_pros_AmountProgramAndOrNumberOfCertificates_4a00e028-c9c5-45f0-9c2b-488f7da6467e": {
    "Id": "ar_pros_AmountProgramAndOrNumberOfCertificates_4a00e028-c9c5-45f0-9c2b-488f7da6467e",
    "IdConcepto": "ar_pros_AmountProgramAndOrNumberOfCertificates",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LifeOfTheProgram_f3774ea8-3fbb-4aae-bb61-144f2c7d174e": {
    "Id": "ar_pros_LifeOfTheProgram_f3774ea8-3fbb-4aae-bb61-144f2c7d174e",
    "IdConcepto": "ar_pros_LifeOfTheProgram",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TotalAmountOfTheOffer_0104b8b9-aa81-46ec-8311-c9dc0fd5cb3e": {
    "Id": "ar_pros_TotalAmountOfTheOffer_0104b8b9-aa81-46ec-8311-c9dc0fd5cb3e",
    "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_c952e5dd-e3ee-425b-9e9b-ae79973b9363": {
    "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_c952e5dd-e3ee-425b-9e9b-ae79973b9363",
    "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNameOfTheReferenceCurrencyInWhichTheIssueIsMade"
  },
  "ar_pros_ExchangeRateUDIValue_019a2986-eb04-484b-86a8-158227811572": {
    "Id": "ar_pros_ExchangeRateUDIValue_019a2986-eb04-484b-86a8-158227811572",
    "IdConcepto": "ar_pros_ExchangeRateUDIValue",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PlacementPriceValues_50ed12d3-ba50-4cf5-b0d6-d6d97d8a23e6": {
    "Id": "ar_pros_PlacementPriceValues_50ed12d3-ba50-4cf5-b0d6-d6d97d8a23e6",
    "IdConcepto": "ar_pros_PlacementPriceValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_DateOfPublicationOfTenderNotice_0bd94056-a30b-46a2-8351-50d707a9823f": {
    "Id": "ar_pros_DateOfPublicationOfTenderNotice_0bd94056-a30b-46a2-8351-50d707a9823f",
    "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultDateOfPublicationOfTenderNotice"
  },
  "ar_pros_PeriodOrDateOfTheOffer_24f7de8c-aa48-4fb9-b4dc-1b2bd0b67e5f": {
    "Id": "ar_pros_PeriodOrDateOfTheOffer_24f7de8c-aa48-4fb9-b4dc-1b2bd0b67e5f",
    "IdConcepto": "ar_pros_PeriodOrDateOfTheOffer",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ClosingDateBookOrAuction_178f4974-23e0-4996-b54e-38298be2b351": {
    "Id": "ar_pros_ClosingDateBookOrAuction_178f4974-23e0-4996-b54e-38298be2b351",
    "IdConcepto": "ar_pros_ClosingDateBookOrAuction",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultClosingDateBookOrAuction"
  },
  "ar_pros_DateOfRegisterInTheStockExchange_a90d2a07-9d45-472c-a806-2ae3bf6d020c": {
    "Id": "ar_pros_DateOfRegisterInTheStockExchange_a90d2a07-9d45-472c-a806-2ae3bf6d020c",
    "IdConcepto": "ar_pros_DateOfRegisterInTheStockExchange",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultDateOfRegisterInTheStockExchange"
  },
  "ar_pros_SettlementDate_353f0e80-2795-430d-9596-b5da82bd0444": {
    "Id": "ar_pros_SettlementDate_353f0e80-2795-430d-9596-b5da82bd0444",
    "IdConcepto": "ar_pros_SettlementDate",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultSettlementDate"
  },
  "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_a31b67b2-6f24-44ef-9a55-08e7ae8a3d7d": {
    "Id": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_a31b67b2-6f24-44ef-9a55-08e7ae8a3d7d",
    "IdConcepto": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PotentialAcquirers_29cca043-0ad5-4db3-9395-7425ac6464b5": {
    "Id": "ar_pros_PotentialAcquirers_29cca043-0ad5-4db3-9395-7425ac6464b5",
    "IdConcepto": "ar_pros_PotentialAcquirers",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PossibleLimitations_af099c60-02e7-4a09-88cb-efc501ba48dd": {
    "Id": "ar_pros_PossibleLimitations_af099c60-02e7-4a09-88cb-efc501ba48dd",
    "IdConcepto": "ar_pros_PossibleLimitations",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TypeOfInvestorToWhichItIsAddressed_9029b628-6560-40ea-b75f-bc45dc75dbb8": {
    "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_9029b628-6560-40ea-b75f-bc45dc75dbb8",
    "IdConcepto": "ar_pros_TypeOfInvestorToWhichItIsAddressed",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SerieNumberOfCorrespondingEmission_dfe9f1f1-93dd-41ba-8b0f-cd6791071afe": {
    "Id": "ar_pros_SerieNumberOfCorrespondingEmission_dfe9f1f1-93dd-41ba-8b0f-cd6791071afe",
    "IdConcepto": "ar_pros_SerieNumberOfCorrespondingEmission",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NumberOfTrust_c8a43d77-4e31-404d-8103-62fc56ced52a": {
    "Id": "ar_pros_NumberOfTrust_c8a43d77-4e31-404d-8103-62fc56ced52a",
    "IdConcepto": "ar_pros_NumberOfTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DataRelatedToTheIndenture_7d912d6f-7c99-4717-9ab8-7b3ff31c136d": {
    "Id": "ar_pros_DataRelatedToTheIndenture_7d912d6f-7c99-4717-9ab8-7b3ff31c136d",
    "IdConcepto": "ar_pros_DataRelatedToTheIndenture",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrusteesInFirstPlace_64e7d2a2-f285-476d-9273-e99431ae6176": {
    "Id": "ar_pros_TrusteesInFirstPlace_64e7d2a2-f285-476d-9273-e99431ae6176",
    "IdConcepto": "ar_pros_TrusteesInFirstPlace",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrusteesInSecondPlace_a638b30c-7585-4ccb-b07e-5aa3ffd065ea": {
    "Id": "ar_pros_TrusteesInSecondPlace_a638b30c-7585-4ccb-b07e-5aa3ffd065ea",
    "IdConcepto": "ar_pros_TrusteesInSecondPlace",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrusteesInThirdPlace_95899e53-a38d-4e32-97e6-47be145701c0": {
    "Id": "ar_pros_TrusteesInThirdPlace_95899e53-a38d-4e32-97e6-47be145701c0",
    "IdConcepto": "ar_pros_TrusteesInThirdPlace",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherTrustees_4873c365-9612-4467-8267-8e138934f9fa": {
    "Id": "ar_pros_OtherTrustees_4873c365-9612-4467-8267-8e138934f9fa",
    "IdConcepto": "ar_pros_OtherTrustees",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrustEstateManager_91a2395d-9bef-45d8-be76-f215f1ac3495": {
    "Id": "ar_pros_TrustEstateManager_91a2395d-9bef-45d8-be76-f215f1ac3495",
    "IdConcepto": "ar_pros_TrustEstateManager",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdvisoryOfTheTrust_f25de205-c703-4dbd-b44b-1535884333c3": {
    "Id": "ar_pros_AdvisoryOfTheTrust_f25de205-c703-4dbd-b44b-1535884333c3",
    "IdConcepto": "ar_pros_AdvisoryOfTheTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IndicationOfAnyOtherRelevantThirdParties_a212c6ae-ff09-4747-9c49-e3456d570af8": {
    "Id": "ar_pros_IndicationOfAnyOtherRelevantThirdParties_a212c6ae-ff09-4747-9c49-e3456d570af8",
    "IdConcepto": "ar_pros_IndicationOfAnyOtherRelevantThirdParties",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SummaryOfTheMostImportantCharacteristics_32e660b7-7d56-4898-a2f2-ec31bfb4df9d": {
    "Id": "ar_pros_SummaryOfTheMostImportantCharacteristics_32e660b7-7d56-4898-a2f2-ec31bfb4df9d",
    "IdConcepto": "ar_pros_SummaryOfTheMostImportantCharacteristics",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DistributionsFrequencyAndCalculationProcedure_b2bb9f3a-7795-459e-b0ea-590d61254f58": {
    "Id": "ar_pros_DistributionsFrequencyAndCalculationProcedure_b2bb9f3a-7795-459e-b0ea-590d61254f58",
    "IdConcepto": "ar_pros_DistributionsFrequencyAndCalculationProcedure",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SourceOfTheDistributions_9732f519-51af-4a19-8d92-21e973bcda39": {
    "Id": "ar_pros_SourceOfTheDistributions_9732f519-51af-4a19-8d92-21e973bcda39",
    "IdConcepto": "ar_pros_SourceOfTheDistributions",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest_4459e2b3-4ced-45b6-bd02-69e24bf94ee6": {
    "Id": "ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest_4459e2b3-4ced-45b6-bd02-69e24bf94ee6",
    "IdConcepto": "ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IndicationThatRealEstateTrustBondsAreNotRedeemable_b8242d3e-9e16-4e23-94bd-5908482ca7ae": {
    "Id": "ar_pros_IndicationThatRealEstateTrustBondsAreNotRedeemable_b8242d3e-9e16-4e23-94bd-5908482ca7ae",
    "IdConcepto": "ar_pros_IndicationThatRealEstateTrustBondsAreNotRedeemable",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LocationAndPaymentOfDistributions_879087dd-d9e7-441e-b232-ecd4e1d15ec2": {
    "Id": "ar_pros_LocationAndPaymentOfDistributions_879087dd-d9e7-441e-b232-ecd4e1d15ec2",
    "IdConcepto": "ar_pros_LocationAndPaymentOfDistributions",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ParticipantName_dedba434-a64e-4ef2-920a-256700ace402": {
    "Id": "ar_pros_ParticipantName_dedba434-a64e-4ef2-920a-256700ace402",
    "IdConcepto": "ar_pros_ParticipantName",
    "IdContextoPlantilla": "ctx_1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FiscalRegimeApplicable_9f7b0008-d72c-468f-8c51-a3e5e22cd8ca": {
    "Id": "ar_pros_FiscalRegimeApplicable_9f7b0008-d72c-468f-8c51-a3e5e22cd8ca",
    "IdConcepto": "ar_pros_FiscalRegimeApplicable",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_496dbca3-0c2c-493d-8c54-ee8d92c5cba6": {
    "Id": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_496dbca3-0c2c-493d-8c54-ee8d92c5cba6",
    "IdConcepto": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation_c9739b66-07f4-4d62-ab14-753bb3310d85": {
    "Id": "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation_c9739b66-07f4-4d62-ab14-753bb3310d85",
    "IdConcepto": "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_01c8bd78-57e6-46ad-8a40-e3e2f1bd9913": {
    "Id": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_01c8bd78-57e6-46ad-8a40-e3e2f1bd9913",
    "IdConcepto": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV"
  },
  "ar_pros_LegendArticle86OfTheLMV_93ae99fa-87f4-4696-9e8f-7e1fdd7e3df6": {
    "Id": "ar_pros_LegendArticle86OfTheLMV_93ae99fa-87f4-4696-9e8f-7e1fdd7e3df6",
    "IdConcepto": "ar_pros_LegendArticle86OfTheLMV",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultLegendArticle86OfTheLMV"
  },
  "ar_pros_NumberOfRegister_002c5bed-d947-4d60-a044-76981bbea4b6": {
    "Id": "ar_pros_NumberOfRegister_002c5bed-d947-4d60-a044-76981bbea4b6",
    "IdConcepto": "ar_pros_NumberOfRegister",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_a0c8f61c-125c-4d94-a054-63c63e2dbb27": {
    "Id": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_a0c8f61c-125c-4d94-a054-63c63e2dbb27",
    "IdConcepto": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_c2aaa866-1bd7-4d38-a62d-659bd9ac3b58": {
    "Id": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_c2aaa866-1bd7-4d38-a62d-659bd9ac3b58",
    "IdConcepto": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LegendDocumentAvailableWithTheUnderwriter_8cb494a0-f61f-434c-b9aa-a6ba947f9804": {
    "Id": "ar_pros_LegendDocumentAvailableWithTheUnderwriter_8cb494a0-f61f-434c-b9aa-a6ba947f9804",
    "IdConcepto": "ar_pros_LegendDocumentAvailableWithTheUnderwriter",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultLegendDocumentAvailableWithTheUnderwriter"
  },
  "ar_pros_ProspectusSupplementBrochure_0d44ffab-e9b3-42c9-af76-314df2e23b35": {
    "Id": "ar_pros_ProspectusSupplementBrochure_0d44ffab-e9b3-42c9-af76-314df2e23b35",
    "IdConcepto": "ar_pros_ProspectusSupplementBrochure",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultProspectusSupplementBrochure"
  },
  "ar_pros_LegendProspectusSupplementBrochure_7e6a0c89-6a0f-49fe-be84-f047dcd7e1d8": {
    "Id": "ar_pros_LegendProspectusSupplementBrochure_7e6a0c89-6a0f-49fe-be84-f047dcd7e1d8",
    "IdConcepto": "ar_pros_LegendProspectusSupplementBrochure",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InTheCaseOfAdditionalValues_a8fd6cd9-caa6-4a29-ad44-e9d619aff705": {
    "Id": "ar_pros_InTheCaseOfAdditionalValues_a8fd6cd9-caa6-4a29-ad44-e9d619aff705",
    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultInTheCaseOfAdditionalValues"
  },
  "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_23bf1abe-b963-46d5-a207-a40681af88c2": {
    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_23bf1abe-b963-46d5-a207-a40681af88c2",
    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TotalAmountOfSecurities_d44161c4-31e3-4eda-a26a-c1672137a375": {
    "Id": "ar_pros_TotalAmountOfSecurities_d44161c4-31e3-4eda-a26a-c1672137a375",
    "IdConcepto": "ar_pros_TotalAmountOfSecurities",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_TotalNumberOfValues_ebf3bb50-0402-404d-8287-200c3c99655a": {
    "Id": "ar_pros_TotalNumberOfValues_ebf3bb50-0402-404d-8287-200c3c99655a",
    "IdConcepto": "ar_pros_TotalNumberOfValues",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_IssuanceUnderArt13OfTheCUELegend_6e167ca7-d07b-461c-ba32-df68f1a1a3a1": {
      "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegend_6e167ca7-d07b-461c-ba32-df68f1a1a3a1",
      "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUELegend"
                },
                "ar_pros_PlacementProspectus_90bbbfeb-3897-4754-9a2d-e7066ccad7ef": {
                    "Id": "ar_pros_PlacementProspectus_90bbbfeb-3897-4754-9a2d-e7066ccad7ef",
                    "IdConcepto": "ar_pros_PlacementProspectus",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultpros_PlacementProspectus"
                },
                "ar_pros_OnlyEmission_6aaddd00-2c9a-4e82-b651-89d14e0cde31": {
                    "Id": "ar_pros_OnlyEmission_6aaddd00-2c9a-4e82-b651-89d14e0cde31",
                    "IdConcepto": "ar_pros_OnlyEmission",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultpros_OnlyEmission"
                },
                "ar_pros_ProspectusLegend_75865f05-8cea-4bd4-affd-143ad468cef1": {
                    "Id": "ar_pros_ProspectusLegend_75865f05-8cea-4bd4-affd-143ad468cef1",
                    "IdConcepto": "ar_pros_ProspectusLegend",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Supplement_463d6be4-05eb-4b23-b470-4ed5456a24b2": {
                    "Id": "ar_pros_Supplement_463d6be4-05eb-4b23-b470-4ed5456a24b2",
                    "IdConcepto": "ar_pros_Supplement",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultSupplement"
                },
                "ar_pros_SupplementLegend_3e8b26a3-5cba-4c94-a7a4-1341fc16c542": {
                    "Id": "ar_pros_SupplementLegend_3e8b26a3-5cba-4c94-a7a4-1341fc16c542",
                    "IdConcepto": "ar_pros_SupplementLegend",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Brochure_057a88a3-fa85-4ea7-888b-fcb13c628d0d": {
                    "Id": "ar_pros_Brochure_057a88a3-fa85-4ea7-888b-fcb13c628d0d",
                    "IdConcepto": "ar_pros_Brochure",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultBrochure"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUE_f5e04933-9b5c-4de3-af2d-6e00c3991e30": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_f5e04933-9b5c-4de3-af2d-6e00c3991e30",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUE"
                },
                "ar_pros_LimitedPublicOffering_82c4d7ba-a1c1-487c-b4c3-696efc31fdc6": {
                    "Id": "ar_pros_LimitedPublicOffering_82c4d7ba-a1c1-487c-b4c3-696efc31fdc6",
                    "IdConcepto": "ar_pros_LimitedPublicOffering",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLimitedPublicOffering"
                },
                "ar_pros_TypeOfInstrument_528ef4e9-da60-47c5-b854-3b3f4c64e02e": {
                    "Id": "ar_pros_TypeOfInstrument_528ef4e9-da60-47c5-b854-3b3f4c64e02e",
                    "IdConcepto": "ar_pros_TypeOfInstrument",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#tipoInstrumentoDefault"
                },
                "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000": {
                    "Id": "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000",
                    "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#tipoInstrumentoDescripcionDefault"
                },
                "ar_pros_ForeingIssuer_0805755d-89c4-4fc1-b247-7643cba3296d": {
                    "Id": "ar_pros_ForeingIssuer_0805755d-89c4-4fc1-b247-7643cba3296d",
                    "IdConcepto": "ar_pros_ForeingIssuer",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultForeingIssuer"
                },
                "ar_pros_MentioningwhetherOrNotHaveCollateral_4f32ddfc-66ba-4ca0-977f-d10535d84aec": {
                    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_4f32ddfc-66ba-4ca0-977f-d10535d84aec",
                    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentioningPartialOrTotalDependencePros_f6de1f82-2a84-49ff-9a29-60b38ec6387d": {
                    "Id": "ar_pros_MentioningPartialOrTotalDependencePros_f6de1f82-2a84-49ff-9a29-60b38ec6387d",
                    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
                },
                "ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose_f5dca46f-6583-4d57-a453-99ad8cedf7ee": {
                    "Id": "ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose_f5dca46f-6583-4d57-a453-99ad8cedf7ee",
                    "IdConcepto": "ar_pros_CompanyIncorporatedSoThatTheTrustMeetsItsPurpose",
                    "IdContextoPlantilla": "ctx",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultCompanyIncorporatedSoThatTheTrustMeetsItsPurpose"
                }
};
        }
    }

}