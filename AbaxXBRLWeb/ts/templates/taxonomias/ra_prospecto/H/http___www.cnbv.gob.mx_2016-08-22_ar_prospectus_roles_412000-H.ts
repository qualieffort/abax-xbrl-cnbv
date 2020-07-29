/// <reference path="http___www.cnbv.gob.mx_2016-08-22_ar_prospectus_roles_414000-h.ts" />
///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_H
         */
        constructor() {
            this.ListadoDeFormulas = {

                'ExistenciaSerieEje_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaSerieEje_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != " _null_ ") or not(variable1 == "Acciones")',
                        MensajeExito: 'Existe al menos una serie en la tabla "Características de las acciones" para el tipo de valor "Acciones".',
                        MensajeError: 'Debería existir al menos una serie en la tabla "Características de las acciones" para el tipo de valor "Acciones".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_EquitySerie",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": " _null_ "
                                }
                            }
                    }
                ),
                'ExistenciaSerieDeudaEje_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaSerieDeudaEje_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != " _null_ ") or not(variable1 == "Certificados bursátiles de largo plazo" or variable1 == "Certificados bursátiles de corto plazo")',
                        MensajeExito: 'Existe al menos una serie en la tabla "Características de los certificados" para el tipo de valor "Deuda".',
                        MensajeError: 'Debería existir al menos una serie en la tabla "Características de los certificados" para el tipo de valor "Deuda".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_DebtSeries",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": " _null_ "
                                }
                            }
                    }
                ),
                'ExistenciaSerieEstructuradosEje_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaSerieEstructuradosEje_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != " _null_ ") or not(variable1 == "Valores estructurados de corto plazo" or variable1 == "Valores estructurados de largo plazo")',
                        MensajeExito: 'Existe al menos una serie en la tabla "Características de los valores estructurados" para el tipo de valor "Estructurados".',
                        MensajeError: 'Debería existir al menos una serie en la tabla "Características de los valores estructurados" para el tipo de valor "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSeries",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": " _null_ "
                                }
                            }
                    }
                ),
                
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
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_ExchangeRateUDIValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_ExchangeRateUDIValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExchangeRateUDIValue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_Ticker",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }
                            }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV",
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
                                    "ValorFallback": "NO"
                                }
                            }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LegendArticle86OfTheLMV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LegendArticle86OfTheLMV',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_LegendArticle86OfTheLMV",
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
                                    "ValorFallback": "NO"
                                }
                            }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NumberOfRegister': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_NumberOfRegister',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_NumberOfRegister",
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
                                    "ValorFallback": "NO"
                                }
                            }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus",
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
                                    "ValorFallback": "NO"
                                }
                            }
                    }
                ),
                'Obligatorio_portada__ar_pros_DefinitiveDocument': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_portada__ar_pros_DefinitiveDocument',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_DefinitiveDocument",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }
                            }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "SI" or squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_DefinitiveDocument",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                }
                            }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_ProspectusPublicationAuthorizationDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_ProspectusPublicationAuthorizationDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "SI" or squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_ProspectusPublicationAuthorizationDate",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_DefinitiveDocument",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                }
                            }
                    }
                ),
                'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LegendProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_EmisionAmparo13BisCUE__ar_pros_LegendProspectusSupplementBrochure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_LegendProspectusSupplementBrochure",
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
                                    "ValorFallback": "NO"
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional_Monto_total_programa_inscripcion_ar_pros_TotalAmountProgramRegistration': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Monto_total_programa_inscripcion_ar_pros_TotalAmountProgramRegistration',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        MismasDimensiones: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }
                            }
                    }
                ),
                'Obligatorio_Renglon_Serie_Acciones_Serie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Acciones_Serie',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Class': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Class',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Class',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerie',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerie',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Type': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Type',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Type',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieOfferType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieOfferType',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieOfferType',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquityTypeOfInstrument': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquityTypeOfInstrument',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquityTypeOfInstrument',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_MentionOfBeingRegisteredWithoutAnyOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_MentionOfBeingRegisteredWithoutAnyOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MentionOfBeingRegisteredWithoutAnyOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Depositary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_Depositary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Depositary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_CommonRepresentativeText': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_CommonRepresentativeText',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CommonRepresentativeText',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_InTheCaseOfNonvotingShares': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_InTheCaseOfNonvotingShares',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InTheCaseOfNonvotingShares',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieIssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieIssuanceUnderArt13OfTheCUE',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieIssuanceUnderArt13OfTheCUE',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieLimitedPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieLimitedPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieLimitedPublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieTotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieTotalAmountOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'El Monto Total de la Oferta en México es igual a la suma de los conceptos: México (primaria), importe + México (secundaria), importe',
                        MensajeError: 'El Monto Total de la Oferta en México debe ser igual a la suma de los conceptos: México (primaria), importe + México (secundaria), importe',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieTotalAmountOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieMexicoPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "0"

                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieMexicoSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "0"
                            })

                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieMexicoPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieMexicoSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0  or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieAbroadPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieAbroadPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0  or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieAbroadPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieForeignSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieForeignOverallotmentSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            })

                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieAmountProgramRegistrationInUDIS': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieAmountProgramRegistrationInUDIS',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "UDI" and squeeze(size(variable1)) > 0) or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieAmountProgramRegistrationInUDIS',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'INF'
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieAmountOfTheIssueInFOREIGNCURRENCY': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieAmountOfTheIssueInFOREIGNCURRENCY',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "OTRAS DIVISAS EXTRANJERAS" and squeeze(size(variable1)) > 0)  or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieAmountOfTheIssueInFOREIGNCURRENCY',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false

                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieExchangeRateUDIValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieExchangeRateUDIValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "PESOS") or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieExchangeRateUDIValue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieNominalValueString': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieNominalValueString',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieNominalValueString',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieNominalValueMonetary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieNominalValueMonetary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieNominalValueMonetary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySeriePlacementPrice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySeriePlacementPrice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySeriePlacementPrice',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieNumberOfStocksOfferedInMexico': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieNumberOfStocksOfferedInMexico',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieNumberOfStocksOfferedInMexico',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieMexicoPrimaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "0"

                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieMexicoSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "0"
                            })

                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieMexicoSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignPrimaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieForeignPrimaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieForeignSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieDateOfPublicationOfOfferNotice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieDateOfPublicationOfOfferNotice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieDateOfPublicationOfOfferNotice',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieClosingDateBookOrAuction': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieClosingDateBookOrAuction',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieClosingDateBookOrAuction',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieDateOfRegisterInTheStockExchange': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieDateOfRegisterInTheStockExchange',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieDateOfRegisterInTheStockExchange',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieSettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieSettlementDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 == "SI" or variable3 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_InTheCaseOfAdditionalValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable_Folleto': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable_Folleto',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 == "INF"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} para el Tipo de Reporte "Folleto" debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_Brochure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieInTheCaseOfAuctionSecuritiesAbstract': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_EquitySerieInTheCaseOfAuctionSecuritiesAbstract',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieInTheCaseOfAuctionSecuritiesAbstract',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Mixata_ar_pros_EquitySerieOfferTypeMixNational': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Mixata_ar_pros_EquitySerieOfferTypeMixNational',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 == "NO" or (variable2 != "INF" and variable3 != "INF")) or (variable4 != "SI"  and variable5 == "INF") or variable6 != "NO"',
                        MensajeExito: 'Para suplemento y Emisión Única, se debe indicar el número de valores de la porción primaria y secundaria cuando se indiquen ofertas mixtas.',
                        MensajeError: 'Para suplemento y Emisión Única, se debe indicar el número de valores de la porción primaria y secundaria cuando se indiquen ofertas mixtas.',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeMixNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'NO'
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_NumberOfSecuritiesOfThePrimaryPortion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'INF',
                                MismasDimensiones: true
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_NumberOfSecuritiesOfTheSecondaryPortion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'INF',
                                MismasDimensiones: true
                            }),
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Mixata_ar_pros_EquitySerieOfferTypeMixInternational': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Mixata_ar_pros_EquitySerieOfferTypeMixInternational',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 == "NO" or (variable2 != "INF" and variable3 != "INF")) or (variable4 != "SI"  and variable5 == "INF") or variable6 != "NO"',
                        MensajeExito: 'Para suplemento y Emisión Única, se debe indicar el número de valores de la porción primaria y secundaria cuando se indiquen ofertas mixtas.',
                        MensajeError: 'Para suplemento y Emisión Única, se debe indicar el número de valores de la porción primaria y secundaria cuando se indiquen ofertas mixtas.',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeMixInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'NO'
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_NumberOfSecuritiesOfThePrimaryPortion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'INF',
                                MismasDimensiones: true
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_NumberOfSecuritiesOfTheSecondaryPortion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'INF',
                                MismasDimensiones: true
                            }),
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Mixata_ar_pros_EquitySerieOfferTypeMixGlobal': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Mixata_ar_pros_EquitySerieOfferTypeMixGlobal',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 == "NO" or (variable2 != "INF" and variable3 != "INF")) or (variable4 != "SI"  and variable5 == "INF") or variable6 != "NO"',
                        MensajeExito: 'Para suplemento y Emisión Única, se debe indicar el número de valores de la porción primaria y secundaria cuando se indiquen ofertas mixtas.',
                        MensajeError: 'Para suplemento y Emisión Única, se debe indicar el número de valores de la porción primaria y secundaria cuando se indiquen ofertas mixtas.',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeMixGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'NO'
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_NumberOfSecuritiesOfThePrimaryPortion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'INF',
                                MismasDimensiones: true
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_NumberOfSecuritiesOfTheSecondaryPortion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: 'INF',
                                MismasDimensiones: true
                            }),
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_NumberOfSecuritiesThatWillBeAllocatedToOverallotment': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_NumberOfSecuritiesThatWillBeAllocatedToOverallotment',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: ' (variable1 == "SI" and variable2 != "INF") or (variable1 ==  "NO" and variable2 == "INF")  or (variable1 == "NO" and variable2 != "INF") or variable3 != "NO" ',
                        MensajeExito: 'Se capturó el concepto "En su caso, número de valores que se destinarán a sobreasignación" cuando "Operación con sobreasignación" es "SI".',
                        MensajeError: 'Se debe capturar el concepto "En su caso, número de valores que se destinarán a sobreasignación" cuando "Operación con sobreasignación" es "SI".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieOperationWithOverAllocation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_NumberOfSecuritiesThatWillBeAllocatedToOverallotment',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                                
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 != "SI" or squeeze(size(variable2)) > 0) or variable3 != "NO"',
                        MensajeExito: 'Se capturó el concepto "En su caso, forma en que se deberá ejercer la sobreasignación" cuando "Operación con sobreasignación" es "SI".',
                        MensajeError: 'Se debe capturar el concepto "En su caso, forma en que se deberá ejercer la sobreasignación" cuando "Operación con sobreasignación" es "SI".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieOperationWithOverAllocation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '',
                                MismasDimensiones: true
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_TickerOfTheOriginStockMarket': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_TickerOfTheOriginStockMarket',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TickerOfTheOriginStockMarket',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_TypeOfOperation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_TypeOfOperation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfOperation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Obligatorio_Condicional_Programa_con_caracter_de_revolvente_ar_pros_RevolvingCharacterProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Programa_con_caracter_de_revolvente_ar_pros_RevolvingCharacterProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de reporte Programa, Suplemento o Folleto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de reporte Programa, Suplemento o Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_RevolvingCharacterProgram",
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
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_EffectOfEmissionsUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_EffectOfEmissionsUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO"))',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_EffectOfEmissionsUnderAProgram",
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
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement",
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
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF") or variable5 != "NO"',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering",
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
                                    "IdConcepto": "ar_pros_EquitySerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_InTheCaseOfNonvotingShares': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_InTheCaseOfNonvotingShares',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF") or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_InTheCaseOfNonvotingShares",
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
                                    "IdConcepto": "ar_pros_EquitySerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DebtSerieSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_DebtSerieSettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_DebtSerieSettlementDate",
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
                'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_EmisionUnica_ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para los reportes de tipo Prospecto Emisión Única y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
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
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_OnlyEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_OnlyEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_OnlyEmission",
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
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_LegendDocumentAvailableWithTheUnderwriter': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_LegendDocumentAvailableWithTheUnderwriter',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_LegendDocumentAvailableWithTheUnderwriter",
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
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_Supplement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_Supplement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_Supplement",
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
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSeries",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": false
                                }
                            }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesIssuanceDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesIssuanceDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable3 != "NO"',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSeriesIssuanceDate",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSeries",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                }
                            }
                    }
                ),
                'Requeridos_Acciones_ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Acciones_ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5) + bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9))',
                        MensajeExito: 'El hecho {variable1}  debe ser igual a la suma de todos los importes".',
                        MensajeError: 'El hecho {variable1}  debe ser igual a la suma de todos los importes".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_EquitySerieMexicoPrimaryAmount",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable4": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_EquitySerieMexicoSecondaryAmount",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable5": {
                                    "Id": "variable5",
                                    "IdConcepto": "ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable6": {
                                    "Id": "variable6",
                                    "IdConcepto": "ar_pros_EquitySerieAbroadPrimaryAmount",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable7": {
                                    "Id": "variable7",
                                    "IdConcepto": "ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable8": {
                                    "Id": "variable8",
                                    "IdConcepto": "ar_pros_EquitySerieForeignSecondaryAmount",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable9": {
                                    "Id": "variable9",
                                    "IdConcepto": "ar_pros_EquitySerieForeignOverallotmentSecondaryAmount",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                }
                            }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5)  + bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9))',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_EquitySerieMexicoPrimaryNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable4": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_EquitySerieMexicoSecondaryNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable5": {
                                    "Id": "variable5",
                                    "IdConcepto": "ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable6": {
                                    "Id": "variable6",
                                    "IdConcepto": "ar_pros_EquitySerieForeignPrimaryNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable7": {
                                    "Id": "variable7",
                                    "IdConcepto": "ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable8": {
                                    "Id": "variable8",
                                    "IdConcepto": "ar_pros_EquitySerieForeignSecondaryNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                },
                                "variable9": {
                                    "Id": "variable9",
                                    "IdConcepto": "ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true,
                                    "ValorFallback": "0"
                                }
                            }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesSettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSeriesSettlementDate",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSeries",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "MismasDimensiones": true
                                }
                            }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_EquitySerieMexicoPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_EquitySerieMexicoPrimaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Acciones".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_EquitySerieMexicoPrimaryNumberOfStocks",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_EquitySerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                }
                            }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesPaymentFrequencyOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesPaymentFrequencyOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable3 != "NO"',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSeriesPaymentFrequencyOfInterest",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSeries",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                }
                            }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable3 != "NO"',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSeries",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                }
                            }
                    }
                ),
                /*'Requeridos_Deuda_Calificaciones_': new model.DefinicionFormula().deserialize(
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
                ),*/
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaTipoOfertaDeuda(variable1)',
                        MensajeExito: 'Tipo de oferta seleccionado correctamente',
                        MensajeError: 'Debe elegir solo un tipo de oferta',
                        VariablesCoincidenPeriodo: false,
                        ExpresionJavaScript: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                retornarIdentificadorHecho: true
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypePrimaryNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypeSecondaryNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypeMixNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypePrimaryInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypeSecondaryInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable7': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable7',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypeMixInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable8': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable8',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypePrimaryGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable9': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable9',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypeSecondaryGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable10': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable10',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypeMixGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable11': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable11',
                                IdConcepto: 'ar_pros_DebtSerieOfferTypeToBeDefined',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "NO"
                            })

                        }
                    }
                ),
                'Requeridos_Acciones_Por_Serie_ar_pros_EquitySerie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Acciones_Por_Serie_ar_pros_EquitySerie',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaTipoOfertaAcciones(variable1)',
                        MensajeExito: 'Tipo de oferta seleccionado correctamente',
                        MensajeError: 'Debe elegir solo un tipo de oferta',
                        VariablesCoincidenPeriodo: false,
                        ExpresionJavaScript: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerie',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                retornarIdentificadorHecho: true
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypePrimaryNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeSecondaryNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeMixNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypePrimaryInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeSecondaryInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable7': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable7',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeMixInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable8': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable8',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypePrimaryGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable9': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable9',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeSecondaryGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable10': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable10',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeMixGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable11': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable11',
                                IdConcepto: 'ar_pros_EquitySerieOfferTypeToBeDefined',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "NO"
                            })

                        }
                    }
                ),

                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSeries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSeries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaTipoOfertaEstructurados(variable1)',
                        MensajeExito: 'Tipo de oferta seleccionado correctamente',
                        MensajeError: 'Debe elegir solo un tipo de oferta',
                        VariablesCoincidenPeriodo: false,
                        ExpresionJavaScript: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                retornarIdentificadorHecho: true
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypePrimaryNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypeSecondaryNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypeMixNational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypePrimaryInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable7': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable7',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypeSecondaryInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable8': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable8',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypeMixInternational',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable9': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable9',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypePrimaryGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable10': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable10',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypeSecondaryGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable11': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable11',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypeMixGlobal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable12': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable12',
                                IdConcepto: 'ar_pros_StructuredSerieOfferTypeToBeDefined',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "NO"
                            })

                        }
                    }
                ),
                'Requeridos_Deuda_Tasa_Interes_Por_Serie_ar_pros_DebtSeries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Tasa_Interes_Por_Serie_ar_pros_DebtSeries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaTasaInteres(variable1)',
                        MensajeExito: 'Tipo de interés seleccionado correctamente',
                        MensajeError: 'Seleccionar solo un tipo de interes',
                        VariablesCoincidenPeriodo: false,
                        ExpresionJavaScript: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                retornarIdentificadorHecho: true
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })

                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeries_existence': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeries_existence',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true

                            })

                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieOfferType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieOfferType',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieOfferType',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtTypeOfInstrumentIssuers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtTypeOfInstrumentIssuers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtTypeOfInstrumentIssuers',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieIssueNumberUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieIssueNumberUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieIssueNumberUnderAProgram',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieIssueNumberUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieIssueNumberUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieIssueNumberUnderAProgram',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_EquitySerieIssueNumberUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_EquitySerieIssueNumberUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieIssueNumberUnderAProgram',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtTypeOfInstrumentTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtTypeOfInstrumentTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtTypeOfInstrumentTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieIssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieIssuanceUnderArt13OfTheCUE',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieIssuanceUnderArt13OfTheCUE',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieLimitedPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieLimitedPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieLimitedPublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieTotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieTotalAmountOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'El Monto Total de la Oferta en México es igual a la suma de los conceptos: México (primaria), importe + México (secundaria), importe',
                        MensajeError: 'El Monto Total de la Oferta en México debe ser igual a la suma de los conceptos: México (primaria), importe + México (secundaria), importe',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieTotalAmountOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false

                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieMexicoPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                "ValorFallback": "0"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieMexicoSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                "ValorFallback": "0"
                            })
                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieMexicoPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieMexicoSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieAbroadPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieAbroadPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieAbroadPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieForeignSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieForeignOverallotmentSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_ar_pros_DebtSerieAmountOfTheIssueInFOREIGNCURRENCY': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_DebtSerieAmountOfTheIssueInFOREIGNCURRENCY',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((variable2 != "OTRAS DIVISAS EXTRANJERAS") or (squeeze(size(variable1)) > 0)) or (variable3 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieAmountOfTheIssueInFOREIGNCURRENCY',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieExchangeRateUDIValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieExchangeRateUDIValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "PESOS") or variable3 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieExchangeRateUDIValue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurado_Por_Serie_ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurado_Por_Serie_ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })

                        }
                    }
                ),
                'Requeridos_acciones_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_acciones_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaSerieAdicional()',
                        MensajeExito: 'Existe una Serie "NO Adicional"',
                        MensajeError: 'Debería existir al menos una Serie "NO Adicional" o Existe mas de una Serie "NO Adicional"',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,

                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    }
                ),
                'Requeridos_acciones_ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_acciones_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaImporteTotalEmision(variable1)',
                        MensajeExito: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Importe total de la emisión en México y en el extranjero, en su caso." Es la suma de la fila "Importe total de la emisión en México y en el extranjero, en su caso." de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        MensajeError: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Importe total de la emisión en México y en el extranjero, en su caso." debe ser la suma de la fila "Importe total de la emisión en México y en el extranjero, en su caso." de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,

                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    }
                ),

                'Requeridos_deuda_ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaImporteTotalEmision(variable1)',
                        MensajeExito: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Importe total de la emisión en México y en el extranjero, en su caso." Es la suma de la fila "Importe total de la emisión en México y en el extranjero, en su caso." de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        MensajeError: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Importe total de la emisión en México y en el extranjero, en su caso." debe ser la suma de la fila "Importe total de la emisión en México y en el extranjero, en su caso." de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,

                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    }
                ),

                'Requeridos_estructurados_ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurados_ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaImporteTotalEmision(variable1)',
                        MensajeExito: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Importe total de la emisión en México y en el extranjero, en su caso." Es la suma de la fila "Importe total de la emisión en México y en el extranjero, en su caso." de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        MensajeError: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Importe total de la emisión en México y en el extranjero, en su caso." debe ser la suma de la fila "Importe total de la emisión en México y en el extranjero, en su caso." de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,

                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_StructuredSeriesCurrencyInWhichTheIssueIsMade',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    }
                ),

                'Requeridos_acciones_ar_pros_TotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_acciones_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaImporteTotalOferta(variable1)',
                        MensajeExito: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Monto total de la oferta en México" Es la suma de la fila "Monto total de la oferta en México" de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        MensajeError: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Monto total de la oferta en México" debe ser la suma de la fila "Monto total de la oferta en México" de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,

                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TotalAmountOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_EquitySerieTotalAmountOfTheOffer',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    }
                ),

                'Requeridos_deuda_ar_pros_TotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_acciones_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaImporteTotalOferta(variable1)',
                        MensajeExito: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Monto total de la oferta en México" Es la suma de la fila "Monto total de la oferta en México" de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        MensajeError: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Monto total de la oferta en México." debe ser la suma de la fila "Monto total de la oferta en México" de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,

                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TotalAmountOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieTotalAmountOfTheOffer',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    }
                ),

                'Requeridos_estructurados_ar_pros_TotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_acciones_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaImporteTotalOferta(variable1)',
                        MensajeExito: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Monto total de la oferta en México" Es la suma de la fila "Monto total de la oferta en México" de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        MensajeError: 'Cuando "Moneda en que se realiza la emisión" = PESOS el "Monto total de la oferta en México" debe ser la suma de la fila "Monto total de la oferta en México" de las series(original y adicionales).Si la moneda es diferente de PESOS NO se valida la suma.',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,

                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TotalAmountOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_StructuredSerieTotalAmountOfTheOffer',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    }
                ),
                'Requeridos_acciones_clave_pizarra_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_acciones_clave_pizarra_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_EquitySerie")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerie',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_clave_pizarra_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_clave_pizarra_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeries")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurados_clave_pizarra_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurados_clave_pizarra_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeries")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_acciones_tipo_instrumento_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_acciones_tipo_instrumento_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_EquityTypeOfInstrument")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquityTypeOfInstrument',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_tipo_instrumento_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_tipo_instrumento_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtTypeOfInstrumentIssuers")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtTypeOfInstrumentIssuers',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurados_tipo_instrumento_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurados_tipo_instrumento_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredTypeOfInstrumentIssuers")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredTypeOfInstrumentIssuers',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_acciones_moneda_emision_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_acciones_moneda_emision_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_moneda_emision_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_moneda_emision_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurados_moneda_emision_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_moneda_emision_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_tasa_descuento_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_tasa_descuento_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_tasa_rendimiento_fijo_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_tasa_rendimiento_fijo_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_tasa_rendimiento_variable_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_tasa_rendimiento_variable_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),

                'Requeridos_deuda_aval_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_aval_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesTypeOfGuaranteeWarranty")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeWarranty',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurados_aval_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurados_aval_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeriesTypeOfGuaranteeWarranty")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeriesTypeOfGuaranteeWarranty',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_fideicomiso_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_fideicomiso_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesTypeOfGuaranteeTrust")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurado_fideicomiso_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurado_fideicomiso_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeriesTypeOfGuaranteeTrust")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeriesTypeOfGuaranteeTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_Gubernamental_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_Gubernamental_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesTypeOfGuaranteeGovernment")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeGovernment',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurados_Gubernamental_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurados_Gubernamental_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeriesTypeOfGuaranteeGovernment")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeriesTypeOfGuaranteeGovernment',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_hipotecaria_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_hipotecaria_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesTypeOfGuaranteeMortgage")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeMortgage',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurado_hipotecaria_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurado_hipotecaria_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeriesTypeOfGuaranteeMortgage")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeriesTypeOfGuaranteeMortgage',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_prendaria_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_prendaria_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesTypeOfGuaranteePledge")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteePledge',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurados_prendaria_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurados_prendaria_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeriesTypeOfGuaranteePledge")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeriesTypeOfGuaranteePledge',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_Quirografaria_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_Quirografaria_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesTypeOfGuaranteeChirographic")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeChirographic',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurado_Quirografaria_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurado_Quirografaria_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeriesTypeOfGuaranteeChirographic")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeriesTypeOfGuaranteeChirographic',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_para_cada_emision_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_para_cada_emision_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesTypeOfGuaranteeWillBeSpecifiedInEachIssue")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeWillBeSpecifiedInEachIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurado_para_cada_emision_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurado_para_cada_emision_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeriesTypeOfGuaranteeWillBeSpecifiedInEachIssue")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeriesTypeOfGuaranteeWillBeSpecifiedInEachIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_deuda_otra_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_deuda_otra_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_DebtSeriesTypeOfGuaranteeOther")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeOther',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Requeridos_estructurados_otra_ar_pros_TypeOfInstrumentDescription': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_estructurados_otra_ar_pros_TypeOfInstrumentDescription',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaConceptosIgualesValoresAdicionales("ar_pros_StructuredSeriesTypeOfGuaranteeOther")',
                        MensajeExito: 'Todas las series tienen el mismo dato en el campo {variable2}',
                        MensajeError: 'Todas las series deben tener el mismo dato en el campo {variable2}',
                        ExpresionJavaScript: true,
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSeriesTypeOfGuaranteeOther',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_ar_pros_StructuredSerieAmountOfTheIssueInFOREIGNCURRENCY': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_StructuredSerieAmountOfTheIssueInFOREIGNCURRENCY',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((variable2 != "OTRAS DIVISAS EXTRANJERAS") or (bignumber(variable1) > 0)) or (variable3 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieAmountOfTheIssueInFOREIGNCURRENCY',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieExchangeRateUDIValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieExchangeRateUDIValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "PESOS") or variable3 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieExchangeRateUDIValue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesNominalValueString': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesNominalValueString',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesNominalValueString',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesNominalValueMonetary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesNominalValueMonetary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesNominalValueMonetary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriePlacementPrice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriePlacementPrice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriePlacementPrice',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriePlacementPrice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriePlacementPrice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriePlacementPrice',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieNumberOfStocksOfferedInMexico': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieNumberOfStocksOfferedInMexico',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieNumberOfStocksOfferedInMexico',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieMexicoPrimaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "0"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieMexicoSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "0"
                            })

                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoPrimaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieMexicoPrimaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignPrimaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieForeignPrimaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieForeignSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieDateOfPublicationOfOfferNotice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieDateOfPublicationOfOfferNotice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieDateOfPublicationOfOfferNotice',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieClosingDateBookOrAuction': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieClosingDateBookOrAuction',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieClosingDateBookOrAuction',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieDateOfRegisterInTheStockExchange': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieDateOfRegisterInTheStockExchange',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieDateOfRegisterInTheStockExchange',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieSettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieSettlementDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieDueDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieDueDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieDueDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieDueDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieDueDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieDueDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesEffectOfEmissionsUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesEffectOfEmissionsUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesEffectOfEmissionsUnderAProgram',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesPositioningMechanism': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesPositioningMechanism',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(((variable2 != "SI") and variable3 == "INF") or (variable1 != "Cierre de libro,Subasta"))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {

                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesPositioningMechanism',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable2",
                                IdConcepto: "ar_pros_OnlyEmission",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable3",
                                IdConcepto: "ar_pros_Supplement",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable4",
                                IdConcepto: "ar_pros_PlacementProspectus",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesDiscountOrYieldInterestRateAbstract': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_ar_pros_DebtSeriesDiscountOrYieldInterestRateAbstract',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ar_pros_DebtSeriesDiscountOrYieldInterestRateAbstract',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesBasisForDeterminingThePerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesBasisForDeterminingThePerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesBasisForDeterminingThePerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieInterestRateApplicableForTheFirstPeriod': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieInterestRateApplicableForTheFirstPeriod',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieInterestRateApplicableForTheFirstPeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtPaymentFrequencyOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtPaymentFrequencyOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud dxel texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtPaymentFrequencyOfInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriePaymentFrequencyOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriePaymentFrequencyOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud dxel texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriePaymentFrequencyOfInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 == "SI" or variable3 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_InTheCaseOfAdditionalValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DescriptionOfThePolicyOrProgramOfLaborInclusion': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DescriptionOfThePolicyOrProgramOfLaborInclusion',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres cuando se indica que cuenta con políticas de inclusión laboral',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres cuando se indica que cuenta con políticas de inclusión laboral',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfThePolicyOrProgramOfLaborInclusion",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_HasAPolicyOrProgramOfLaborInclusion",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5)+ bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false

                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_DebtSerieMexicoPrimaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_DebtSerieMexicoSecondaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable6": {
                                "Id": "variable6",
                                "IdConcepto": "ar_pros_DebtSerieAbroadPrimaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable7": {
                                "Id": "variable7",
                                "IdConcepto": "ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable8": {
                                "Id": "variable8",
                                "IdConcepto": "ar_pros_DebtSerieForeignSecondaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable9": {
                                "Id": "variable9",
                                "IdConcepto": "ar_pros_DebtSerieForeignOverallotmentSecondaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_DebtSerieNumberOfStocksOfferedInMexicoAndForeign': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_DebtSerieNumberOfStocksOfferedInMexicoAndForeign',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5) + bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DebtSerieNumberOfStocksOfferedInMexicoAndForeign",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_DebtSerieMexicoPrimaryNumberOfStocks",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "0",
                                "MismasDimensiones": true,


                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "0",
                                "MismasDimensiones": true
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_DebtSerieMexicoSecondaryNumberOfStocks",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "0",
                                "MismasDimensiones": true
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "0",
                                "MismasDimensiones": true
                            },
                            "variable6": {
                                "Id": "variable6",
                                "IdConcepto": "ar_pros_DebtSerieForeignPrimaryNumberOfStocks",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "0",
                                "MismasDimensiones": true
                            },
                            "variable7": {
                                "Id": "variable7",
                                "IdConcepto": "ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "0",
                                "MismasDimensiones": true
                            },
                            "variable8": {
                                "Id": "variable8",
                                "IdConcepto": "ar_pros_DebtSerieForeignSecondaryNumberOfStocks",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "0",
                                "MismasDimensiones": true
                            },
                            "variable9": {
                                "Id": "variable9",
                                "IdConcepto": "ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "0",
                                "MismasDimensiones": true
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeAbstract': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeAbstract',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeAbstract',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeWarranty': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeWarranty',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeWarranty',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeGovernment': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeGovernment',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeGovernment',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeMortgage': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeMortgage',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeMortgage',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteePledge': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteePledge',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteePledge',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeChirographic': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeriesTypeOfGuaranteeChirographic',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesTypeOfGuaranteeChirographic',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 == "SI" or variable3 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_InTheCaseOfAdditionalValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable_Folleto': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable_Folleto',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 == "INF"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} para el Tipo de Reporte "Folleto" debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_Brochure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 == "SI" or variable3 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_InTheCaseOfAdditionalValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable_Folleto': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable_Folleto',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 == "INF"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} para el Tipo de Reporte "Folleto" debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_Brochure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieInterestRateApplicableForTheFirstPeriod': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieInterestRateApplicableForTheFirstPeriod',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieInterestRateApplicableForTheFirstPeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriePaymentFrequencyOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriePaymentFrequencyOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriePaymentFrequencyOfInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieInTheCaseOfAuctionSecuritiesAbstract': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieInTheCaseOfAuctionSecuritiesAbstract',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieInTheCaseOfAuctionSecuritiesAbstract',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieSecuritiesTotalDemand': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieSecuritiesTotalDemand',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) and (variable2 != "Subasta") or variable3 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieSecuritiesTotalDemand',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSeriesPositioningMechanism',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Requeridos_Acciones_Por_Serie_ar_pros_EquitySeriesPositioningMechanism': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Acciones_Por_Serie_ar_pros_EquitySeriesPositioningMechanism',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(((variable2 != "SI") and variable3 == "INF") or (variable1 != "Cierre de libro,Subasta"))',
                        MensajeExito: 'Se seleciono una opcion como "Mecanismo de colocación" cuando se trata de una emisión única o suplemento.',
                        MensajeError: 'Solo se puede seleccionar una opcion como "Mecanismo de colocación" cuando se trata de una emisión única o suplemento.',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySeriesPositioningMechanism',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable2",
                                IdConcepto: "ar_pros_OnlyEmission",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable3",
                                IdConcepto: "ar_pros_Supplement",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable4",
                                IdConcepto: "ar_pros_PlacementProspectus",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })

                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieMexicoSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieMexicoSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtIssuanceDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtIssuanceDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtIssuanceDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_DebtSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),


                'Requeridos_Deuda_Por_Serie_ar_pros_ForeingIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_ForeingIssuer',
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
                'Requeridos_Deuda_Por_Serie_ar_pros_IssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_IssuanceUnderArt13OfTheCUE',
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


                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieOfferType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieOfferType',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieOfferType',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredTypeOfInstrumentIssuers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredTypeOfInstrumentIssuers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredTypeOfInstrumentIssuers',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieIssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieIssuanceUnderArt13OfTheCUE',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieIssuanceUnderArt13OfTheCUE',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieLimitedPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieLimitedPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieLimitedPublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieTotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieTotalAmountOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'El Monto Total de la Oferta en México es igual a la suma de los conceptos: México (primaria), importe + México (secundaria), importe',
                        MensajeError: 'El Monto Total de la Oferta en México debe ser igual a la suma de los conceptos: México (primaria), importe + México (secundaria), importe',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieTotalAmountOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                "ValorFallback": "0"

                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                "ValorFallback": "0"
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5)+ bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,

                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_StructuredSerieMexicoPrimaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable4": {
                                "Id": "variable4",
                                "IdConcepto": "ar_pros_StructuredSerieMexicoSecondaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable5": {
                                "Id": "variable5",
                                "IdConcepto": "ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable6": {
                                "Id": "variable6",
                                "IdConcepto": "ar_pros_StructuredSerieAbroadPrimaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable7": {
                                "Id": "variable7",
                                "IdConcepto": "ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable8": {
                                "Id": "variable8",
                                "IdConcepto": "ar_pros_StructuredSerieForeignSecondaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            },
                            "variable9": {
                                "Id": "variable9",
                                "IdConcepto": "ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ValorFallback": "0"
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieMexicoPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieMexicoPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieMexicoSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieMexicoSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieAbroadPrimaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieAbroadPrimaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieAbroadPrimaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieForeignSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieForeignSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieForeignSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesNominalValueString': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesNominalValueString',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        ExcepcionSinHijos: true,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesNominalValueString',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesNominalValueMonetary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesNominalValueMonetary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesNominalValueMonetary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurado_Por_Serie_ar_pros_StructuredSerieNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurado_Por_Serie_ar_pros_StructuredSerieNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_StructuredSerieNumberOfStocksOfferedInMexico': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Serie_Titulos_que_se_ofrecen_ar_pros_StructuredSerieNumberOfStocksOfferedInMexico',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieNumberOfStocksOfferedInMexico',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "0"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true,
                                ValorFallback: "0"
                            })

                        }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_EquitySeriesIssuanceDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_EquitySeriesIssuanceDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" or variable3 == "INF" or variable4 == "INF") or variable7 != "NO"',
                        MensajeExito: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        MensajeError: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_EquitySeriesIssuanceDate",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
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


                                },
                                "variable4": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_OnlyEmission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable5": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedTable",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"

                                },
                                "variable6": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_DebtSeriesCharacteristicsTable",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable7": {
                                    "Id": "variable7",
                                    "IdConcepto": "ar_pros_EquitySerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                }

                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_DebtIssuanceDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_DebtIssuanceDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" or variable3 == "INF" or variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        MensajeError: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_DebtIssuanceDate",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
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


                                },
                                "variable4": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_OnlyEmission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable5": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedTable",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"

                                },
                                "variable6": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_DebtSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false

                                }

                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSeriesIssuanceDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSeriesIssuanceDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" or variable3 == "INF" or variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        MensajeError: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSeriesIssuanceDate",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
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


                                },
                                "variable4": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_OnlyEmission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable5": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedTable",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"

                                },
                                "variable6": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_DebtSeriesCharacteristicsTable",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"


                                }

                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSerieGeneralCharacteristicsOfTheUnderlyingAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSerieGeneralCharacteristicsOfTheUnderlyingAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) or (variable3 != "INF")) or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        MensajeError: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSerieGeneralCharacteristicsOfTheUnderlyingAssets",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_Brochure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                    
                                },

                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSeriesPerformanceAndCalculationProcedure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSeriesPerformanceAndCalculationProcedure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) or (variable3 != "INF")) or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        MensajeError: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSeriesPerformanceAndCalculationProcedure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_Brochure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"

                                },


                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSerieHistoricalPerformanceOfTheUnderlyingAsset': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSerieHistoricalPerformanceOfTheUnderlyingAsset',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) or (variable3 != "INF")) or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        MensajeError: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSerieHistoricalPerformanceOfTheUnderlyingAsset",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_Brochure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"

                                },


                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSerieGuaranteedCapital': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_StructuredSerieGuaranteedCapital',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) or (variable3 != "INF")) or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        MensajeError: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_StructuredSerieGuaranteedCapital",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_Brochure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"

                                },

                            }
                    }
                ),

                'Obligatorio_Condicional_Suplemento_ar_pros_RecentEvents': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_ar_pros_RecentEvents',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) or (variable3 == "INF")) or variable2 != "NO"',
                        MensajeExito: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        MensajeError: 'El hecho {variable1} no debe ser reportado para reporte del tipo Folleto y tipo de intrumento Estructurado.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_RecentEvents",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_StructuredSerieAdditionalSecurities",
                                    "ValorFallback": "NO",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "MismasDimensiones": true
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_Supplement",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"

                                },

                            }
                    }
                ),


                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieForeignPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieForeignPrimaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieForeignSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieForeignSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieForeignSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_TypeOfInstrument': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_TypeOfInstrument',
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

                'Requeridos_Deuda_Por_Serie_ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSeriesPositioningMechanism': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Estructurados_Por_Serie_ar_pros_StructuredSeriesPositioningMechanism',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(((variable2 != "SI") and variable3 == "INF") or (variable1 != "Cierre de libro,Subasta"))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesPositioningMechanism',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable2",
                                IdConcepto: "ar_pros_OnlyEmission",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable3",
                                IdConcepto: "ar_pros_Supplement",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable4",
                                IdConcepto: "ar_pros_PlacementProspectus",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'ar_pros_EquitySerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesPaymentFrequencyOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesPaymentFrequencyOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesPaymentFrequencyOfInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_ParticipantName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_ar_pros_ParticipantName',
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

                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesDepositary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesDepositary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesDepositary',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesEffectOfEmissionsUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_StructuredSeriesEffectOfEmissionsUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0 or variable2 != "NO"',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_StructuredSeriesEffectOfEmissionsUnderAProgram',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_StructuredSerieAdditionalSecurities',
                                ValorFallback: "NO",
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                //Datos Generales
                'Obligatorio_Condicional__ar_pros_OnlyEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional__ar_pros_OnlyEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_OnlyEmission",
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
                'Obligatorio_Condicional__ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional__ar_pros_ProspectusLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0)',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
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
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional__ar_pros_AmountProgramRegistrationInUDIS': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional__ar_pros_AmountProgramRegistrationInUDIS',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((variable2 != "SI") or (squeeze(size(variable1)) > 0))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AmountProgramRegistrationInUDIS",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional__ar_pros_AmountProgramRegistrationInUSD': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional__ar_pros_AmountProgramRegistrationInUSD',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "SI" or squeeze(size(variable1)) > 0)',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AmountProgramRegistrationInUSD",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional__ar_pros_AmountProgramRegistrationInFOREIGNCURRENCY': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional__ar_pros_AmountProgramRegistrationInFOREIGNCURRENCY',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "SI" or squeeze(size(variable1)) > 0)',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AmountProgramRegistrationInFOREIGNCURRENCY",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
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
                )
                , 'MontoTotal_ar_pros_StructuredSerieNumberOfStocksOfferedInMexico': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfStocksOfferedInMexico',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieNumberOfStocksOfferedInMexico',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoPrimaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoPrimaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoPrimaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoPrimaryAmount_validación_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoPrimaryAmount_validación_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" or bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (primaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (primaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                  
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable2",
                            IdConcepto: "ar_pros_MexicoPrimaryAmount",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        })
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de 	"Sobreasignación México primaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de 	"Sobreasignación México primaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (secundaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (secundaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México secundaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México secundaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieAbroadPrimaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieAbroadPrimaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AbroadPrimaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieAbroadPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieAbroadPrimaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieAbroadPrimaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (primaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (primaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_AbroadPrimaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieAbroadPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero primaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero primaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieForeignSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (secundaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (secundaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieForeignSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero secundaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero secundaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (primaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (primaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México primaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México primaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (secundaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (secundaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México secundaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México secundaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AbroadPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (primaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (primaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_AbroadPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverallotmentNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero primaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero primaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverallotmentNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieForeignSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (secundaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (secundaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieForeignSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero secundaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero secundaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"

                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis',
                                    IdDimension: 'ar_pros_StructuredSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                ,  'MontoTotal_ar_pros_DebtSerieNumberOfStocksOfferedInMexico': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfStocksOfferedInMexico',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieNumberOfStocksOfferedInMexico',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoPrimaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoPrimaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_MexicoPrimaryAmount",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": " _null_ "
                        },
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieMexicoPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        })
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoPrimaryAmount_validación_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoPrimaryAmount_validación_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (primaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (primaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {


                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable2",
                            IdConcepto: "ar_pros_MexicoPrimaryAmount",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieMexicoPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        })
                    }
                })
                , 'MontoTotal_ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México primaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México primaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieMexicoSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (secundaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (secundaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieMexicoSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México secundaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México secundaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieAbroadPrimaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieAbroadPrimaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AbroadPrimaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieAbroadPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieAbroadPrimaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieAbroadPrimaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (primaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (primaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_AbroadPrimaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieAbroadPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero primaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero primaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieForeignSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (secundaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (secundaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieForeignSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignOverallotmentSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignOverallotmentSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignOverallotmentSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero secundaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero secundaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })

                , 'MontoTotal_ar_pros_DebtSerieNumberOfStocksOfferedInMexicoAndForeign': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieNumberOfStocksOfferedInMexicoAndForeign',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieNumberOfStocksOfferedInMexicoAndForeign',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                }),

                'MontoTotalSum_ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign': new model.DefinicionFormula().deserialize({
                    Id: 'Requeridos_Deuda_Por_Serie_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5) + bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9))',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "0",
                            "MismasDimensiones": true
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "0",
                            "MismasDimensiones": true
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "0",
                            "MismasDimensiones": true

                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "0",
                            "MismasDimensiones": true
                        },
                        "variable6": {
                            "Id": "variable6",
                            "IdConcepto": "ar_pros_StructuredSerieForeignPrimaryNumberOfStocks",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "0",
                            "MismasDimensiones": true
                        },
                        "variable7": {
                            "Id": "variable7",
                            "IdConcepto": "ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "0",
                            "MismasDimensiones": true
                        },
                        "variable8": {
                            "Id": "variable8",
                            "IdConcepto": "ar_pros_StructuredSerieForeignSecondaryNumberOfStocks",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "0",
                            "MismasDimensiones": true
                        },
                        "variable9": {
                            "Id": "variable9",
                            "IdConcepto": "ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "0",
                            "MismasDimensiones": true
                        }
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoPrimaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieMexicoPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoPrimaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoPrimaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (primaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (primaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieMexicoPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México primaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México primaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieMexicoSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (secundaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (secundaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieMexicoSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México secundaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México secundaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignPrimaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AbroadPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieForeignPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignPrimaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignPrimaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (primaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (primaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_AbroadPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieForeignPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverallotmentNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero primaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero primaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverallotmentNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieForeignSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (secundaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (secundaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieForeignSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks_validacionn_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks_validacionn_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero secundaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero secundaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis',
                                    IdDimension: 'ar_pros_DebtSeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                ,  'MontoTotal_ar_pros_EquitySerieMexicoPrimaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoPrimaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'TEST El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_MexicoPrimaryAmount",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": " _null_ "
                        },
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieMexicoPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieMexicoPrimaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoPrimaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" or bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (primaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (primaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable2",
                            IdConcepto: "ar_pros_MexicoPrimaryAmount",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieMexicoPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México primaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México primaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieMexicoSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieMexicoSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieMexicoSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (secundaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (secundaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieMexicoSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México secundaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México secundaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieAbroadPrimaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieAbroadPrimaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AbroadPrimaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieAbroadPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieAbroadPrimaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieAbroadPrimaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (primaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (primaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_AbroadPrimaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieAbroadPrimaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero primaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero primaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieForeignSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (secundaria), importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (secundaria), importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieForeignSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignOverallotmentSecondaryAmount': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignOverallotmentSecondaryAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignOverallotmentSecondaryAmount_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignOverallotmentSecondaryAmount_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero secundaria, importe" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero secundaria, importe" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieForeignOverallotmentSecondaryAmount',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'Requeridos_ar_pros_TickerOfTheOriginStockMarket': new model.DefinicionFormula().deserialize({
                    Id: 'Requeridos_ar_pros_TickerOfTheOriginStockMarket',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaTiposOferta() || variable1.length > 0',
                    MensajeExito: 'Para suplemento y folleto debe seleccionarse solo un tipo de oferta',
                    MensajeError: 'Para suplemento y folleto debe seleccionarse solo un tipo de oferta',
                    ExpresionJavaScript: true,
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TickerOfTheOriginStockMarket",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        }
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieNumberOfStocksOfferedInMexico': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieNumberOfStocksOfferedInMexico',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfStocksOfferedInMexico',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieNumberOfStocksOfferedInMexico',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })


                , 'MontoTotal_ar_pros_EquitySerieMexicoPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoPrimaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieMexicoPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieMexicoPrimaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoPrimaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (primaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (primaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieMexicoPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })

                , 'MontoTotal_ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México primaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México primaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_PrimaryOverallotmentMexicoNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })

                , 'MontoTotal_ar_pros_EquitySerieMexicoSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieMexicoSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieMexicoSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "México (secundaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "México (secundaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieMexicoSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })

                , 'MontoTotal_ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación México secundaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación México secundaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MexicoOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignPrimaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignPrimaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AbroadPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieForeignPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignPrimaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignPrimaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (primaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (primaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_AbroadPrimaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieForeignPrimaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverallotmentNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero primaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero primaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignPrimaryOverallotmentNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })

                , 'MontoTotal_ar_pros_EquitySerieForeignSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieForeignSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                }),
                 'MontoTotal_ar_pros_EquitySerieForeignSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                     Id: 'MontoTotal_ar_pros_EquitySerieForeignSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Extranjero (secundaria), número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Extranjero (secundaria), número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                     DefinicionVariables: {
                         'variable1': new model.DefinicionVariableFormula().deserialize({
                             Id: "variable1",
                             IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                             PuedeEliminarse: false,
                             PuedeCrearse: false,
                             ConteoHechos: false
                         }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieForeignSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                }),
                'LA_EMISORA_obligatorio_ar_pros_DenominationOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_ar_pros_DenominationOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0)',
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
                                }
                            }
                    }
                )

                , 'MontoTotal_ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                })
                , 'MontoTotal_ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks_validacion_existencia': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks_validacion_existencia',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'variable2 != "INF" and bignumber(variable3) > 0',
                    MensajeExito: 'El valor de "Sobreasignación Extranjero secundaria, número de valores" es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de "Sobreasignación Extranjero secundaria, número de valores" debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: "variable1",
                            IdConcepto: "ar_pros_TypeOfInstrumentDescription",
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ForeignOverallotmentSecondaryNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: "INF"
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis',
                                    IdDimension: 'ar_pros_SeriesTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
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

            this.UnidadesPlantillaPorId = {
                "pesos": {
                    "Id": "pesos",
                    "Tipo": 1,
                    "Medidas": [
                        {
                            "Nombre": "#medida_MXN",
                            "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
                        }
                    ],
                    "MedidasDenominador": [],
                    "MedidasNumerador": []
                },
                "pure": {
                    "Id": "pure",
                    "Tipo": 1,
                    "Medidas": [
                        {
                            "Nombre": "#medida_pure",
                            "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
                        }
                    ],
                    "MedidasDenominador": [],
                    "MedidasNumerador": []
                }
            };


            this.HechosPlantillaPorId = {
                "ar_pros_PlacementProspectus_1148df0f-fac0-43f3-b2b3-91cc6eb33df9": {
                    "Id": "ar_pros_PlacementProspectus_1148df0f-fac0-43f3-b2b3-91cc6eb33df9",
                    "IdConcepto": "ar_pros_PlacementProspectus",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ProspectusLegend_564a9c80-d6bd-439d-90bb-532419f39528": {
                    "Id": "ar_pros_ProspectusLegend_564a9c80-d6bd-439d-90bb-532419f39528",
                    "IdConcepto": "ar_pros_ProspectusLegend",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultProspectusLegend"
                },
                "ar_pros_OnlyEmission_f16904d1-c81f-49c5-9c2b-c2fcd7bcfc30": {
                    "Id": "ar_pros_OnlyEmission_f16904d1-c81f-49c5-9c2b-c2fcd7bcfc30",
                    "IdConcepto": "ar_pros_OnlyEmission",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Supplement_754c144a-0636-4c90-9381-65da45cd2845": {
                    "Id": "ar_pros_Supplement_754c144a-0636-4c90-9381-65da45cd2845",
                    "IdConcepto": "ar_pros_Supplement",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SupplementLegend_3129f564-b741-438c-be9b-1bdce2826474": {
                    "Id": "ar_pros_SupplementLegend_3129f564-b741-438c-be9b-1bdce2826474",
                    "IdConcepto": "ar_pros_SupplementLegend",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultSupplementLegendText"
                },
                "ar_pros_Brochure_e558da0b-a064-4c7e-a33e-7f49ad43483c": {
                    "Id": "ar_pros_Brochure_e558da0b-a064-4c7e-a33e-7f49ad43483c",
                    "IdConcepto": "ar_pros_Brochure",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DenominationOfTheIssuer_da256a2f-3791-46c1-b6a8-ad25d794d788": {
                    "Id": "ar_pros_DenominationOfTheIssuer_da256a2f-3791-46c1-b6a8-ad25d794d788",
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
                "ar_pros_Ticker_6e3cdc02-5517-4b1e-8e51-365947a1c608": {
                    "Id": "ar_pros_Ticker_6e3cdc02-5517-4b1e-8e51-365947a1c608",
                    "IdConcepto": "ar_pros_Ticker",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DefinitiveDocument_6e3cdc02-5517-4b1e-8e51-365947a1c608": {
                    "Id": "ar_pros_DefinitiveDocument_6e3cdc02-5517-4b1e-8e51-365947a1c608",
                    "IdConcepto": "ar_pros_DefinitiveDocument",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ForeingIssuer_862a8f87-c514-4309-9fd6-9e292dbd4a25": {
                    "Id": "ar_pros_ForeingIssuer_862a8f87-c514-4309-9fd6-9e292dbd4a25",
                    "IdConcepto": "ar_pros_ForeingIssuer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfBeingPublicOffering_43daeef5-bb04-4938-a5fb-d86ff34b44d4": {
                    "Id": "ar_pros_TheMentionOfBeingPublicOffering_43daeef5-bb04-4938-a5fb-d86ff34b44d4",
                    "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUE_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalAmountProgramRegistration_ae85cc76-ecbd-4165-8288-c0ff05bb7bc2": {
                    "Id": "ar_pros_TotalAmountProgramRegistration_ae85cc76-ecbd-4165-8288-c0ff05bb7bc2",
                    "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ObservationsOnTheAuthorizedAmountOfTheProgramRegistration_84c69d54-9e23-4f84-ab3a-f4335cacc070": {
                    "Id": "ar_pros_ObservationsOnTheAuthorizedAmountOfTheProgramRegistration_84c69d54-9e23-4f84-ab3a-f4335cacc070",
                    "IdConcepto": "ar_pros_ObservationsOnTheAuthorizedAmountOfTheProgramRegistration",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_RevolvingCharacterProgram_f000c411-7993-48fe-82b7-87d647f7c4d8": {
                    "Id": "ar_pros_RevolvingCharacterProgram_f000c411-7993-48fe-82b7-87d647f7c4d8",
                    "IdConcepto": "ar_pros_RevolvingCharacterProgram",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LifeOfTheProgram_e3afbff4-6732-499b-93d5-c518c60f3564": {
                    "Id": "ar_pros_LifeOfTheProgram_e3afbff4-6732-499b-93d5-c518c60f3564",
                    "IdConcepto": "ar_pros_LifeOfTheProgram",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TypeOfInstrument_eb0f03f4-b3b4-4dc7-8bb7-0bfb4054d680": {
                    "Id": "ar_pros_TypeOfInstrument_eb0f03f4-b3b4-4dc7-8bb7-0bfb4054d680",
                    "IdConcepto": "ar_pros_TypeOfInstrument",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#tipoInstrumentoDefault"
                },
                "ar_pros_TypeOfInstrumentDescription_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_TypeOfInstrumentDescription_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfAdditionalValues_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_InTheCaseOfAdditionalValues_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MoratoriumInterests_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_MoratoriumInterests_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_MoratoriumInterests",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountProgramIssueInUDIS_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_AmountProgramIssueInUDIS_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_AmountProgramIssueInUDIS",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountOfTheIssueInUSD_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_AmountOfTheIssueInUSD_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_AmountOfTheIssueInUSD",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountOfTheIssueInFOREIGNCURRENCY_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_AmountOfTheIssueInFOREIGNCURRENCY_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_AmountOfTheIssueInFOREIGNCURRENCY",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentioningwhetherOrNotHaveCollateral_ba1d891f-9828-4025-b7e3-b85b0ddf119b": {
                    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_ba1d891f-9828-4025-b7e3-b85b0ddf119b",
                    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty_c131e00d-f54c-47bc-86e1-13748e6110aa": {
                    "Id": "ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty_c131e00d-f54c-47bc-86e1-13748e6110aa",
                    "IdConcepto": "ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTheSellingShareholders_3b96a32a-43f1-445a-8656-f8bfe8332a7e": {
                    "Id": "ar_pros_NameOfTheSellingShareholders_3b96a32a-43f1-445a-8656-f8bfe8332a7e",
                    "IdConcepto": "ar_pros_NameOfTheSellingShareholders",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfAdditionalValues_2e0565b2-6959-4325-b2bc-0077bf2c79e3": {
                    "Id": "ar_pros_InTheCaseOfAdditionalValues_2e0565b2-6959-4325-b2bc-0077bf2c79e3",
                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_075dfe18-3197-4b16-9102-b6f654e9580d": {
                    "Id": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_075dfe18-3197-4b16-9102-b6f654e9580d",
                    "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_035be0b7-7e36-49e5-9a04-5b9ae834223e": {
                    "Id": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_035be0b7-7e36-49e5-9a04-5b9ae834223e",
                    "IdConcepto": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PotentialAcquirers_29081ad5-6ff7-409a-9aac-63d69d6bc06e": {
                    "Id": "ar_pros_PotentialAcquirers_29081ad5-6ff7-409a-9aac-63d69d6bc06e",
                    "IdConcepto": "ar_pros_PotentialAcquirers",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultPotentialAcquirers"
                },
                "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_eaa8ab76-9262-4e2f-81ae-0280dc76f780": {
                    "Id": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_eaa8ab76-9262-4e2f-81ae-0280dc76f780",
                    "IdConcepto": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion_fe9e3813-7567-4cbd-b74c-d621bcc2d634": {
                    "Id": "ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion_fe9e3813-7567-4cbd-b74c-d621bcc2d634",
                    "IdConcepto": "ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_21dac395-6c21-4f33-8e70-3880a92f8696": {
                    "Id": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_21dac395-6c21-4f33-8e70-3880a92f8696",
                    "IdConcepto": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV"
                },
                "ar_pros_MentionThatTitlesAreListed_5b78a4fd-8788-40f6-bc48-8138ffdbd771": {
                    "Id": "ar_pros_MentionThatTitlesAreListed_5b78a4fd-8788-40f6-bc48-8138ffdbd771",
                    "IdConcepto": "ar_pros_MentionThatTitlesAreListed",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegendArticle86OfTheLMV_b0414493-e724-4bbd-a067-ce5f8f5461b8": {
                    "Id": "ar_pros_LegendArticle86OfTheLMV_b0414493-e724-4bbd-a067-ce5f8f5461b8",
                    "IdConcepto": "ar_pros_LegendArticle86OfTheLMV",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLegendArticle86OfTheLMV"
                },
                "ar_pros_NumberOfRegister_f55c04cd-8440-4293-8a5c-00a253b0235d": {
                    "Id": "ar_pros_NumberOfRegister_f55c04cd-8440-4293-8a5c-00a253b0235d",
                    "IdConcepto": "ar_pros_NumberOfRegister",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_082dac1e-81f0-4693-877e-bc722b8975f4": {
                    "Id": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_082dac1e-81f0-4693-877e-bc722b8975f4",
                    "IdConcepto": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegendDocumentAvailableWithTheUnderwriter_217ccb6a-1e54-4098-907f-8b5563b6ec73": {
                    "Id": "ar_pros_LegendDocumentAvailableWithTheUnderwriter_217ccb6a-1e54-4098-907f-8b5563b6ec73",
                    "IdConcepto": "ar_pros_LegendDocumentAvailableWithTheUnderwriter",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLegendDocumentAvailableWithTheUnderwriter"
                },
                "ar_pros_ProspectusSupplementBrochure_329b1ff5-16cb-4709-8708-6f028f5b6f5e": {
                    "Id": "ar_pros_ProspectusSupplementBrochure_329b1ff5-16cb-4709-8708-6f028f5b6f5e",
                    "IdConcepto": "ar_pros_ProspectusSupplementBrochure",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegendProspectusSupplementBrochure_94c484ff-d5be-449b-8385-60107bd40b6d": {
                    "Id": "ar_pros_LegendProspectusSupplementBrochure_94c484ff-d5be-449b-8385-60107bd40b6d",
                    "IdConcepto": "ar_pros_LegendProspectusSupplementBrochure",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLegendProspectusSupplementBrochure"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUELegend_e6924825-3f90-4eeb-acaa-8e552adfb7e1": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegend_e6924825-3f90-4eeb-acaa-8e552adfb7e1",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUELegend"
                },
                "ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering_ed7383a8-3aa1-4407-88e4-329794b819a6": {
                    "Id": "ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering_ed7383a8-3aa1-4407-88e4-329794b819a6",
                    "IdConcepto": "ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfNonvotingShares_ed7383a8-3aa1-4407-88e4-329794b819a6": {
                    "Id": "ar_pros_InTheCaseOfNonvotingShares_ed7383a8-3aa1-4407-88e4-329794b819a6",
                    "IdConcepto": "ar_pros_InTheCaseOfNonvotingShares",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_EffectOfEmissionsUnderAProgram_e3afbff4-6732-499b-93d5-c518c60f3564": {
                    "Id": "ar_pros_EffectOfEmissionsUnderAProgram_e3afbff4-6732-499b-93d5-c518c60f3564",
                    "IdConcepto": "ar_pros_EffectOfEmissionsUnderAProgram",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ExchangeRateUDIValue_e3afbff4-6732-499b-93d5-c518c60f3564": {
                    "Id": "ar_pros_ExchangeRateUDIValue_e3afbff4-6732-499b-93d5-c518c60f3564",
                    "IdConcepto": "ar_pros_ExchangeRateUDIValue",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentionOfBeingRegisteredWithoutAnyOffer_43daeef5-bb04-4938-a5fb-d86ff34b44d4": {
                    "Id": "ar_pros_MentionOfBeingRegisteredWithoutAnyOffer_43daeef5-bb04-4938-a5fb-d86ff34b44d4",
                    "IdConcepto": "ar_pros_MentionOfBeingRegisteredWithoutAnyOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountProgramRegistrationInUDIS_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_AmountProgramRegistrationInUDIS_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_AmountProgramRegistrationInUDIS",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountProgramRegistrationInUSD_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_AmountProgramRegistrationInUSD_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_AmountProgramRegistrationInUSD",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedEURO_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedEURO_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedEURO",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountProgramRegistrationInFOREIGNCURRENCY_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_AmountProgramRegistrationInFOREIGNCURRENCY_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_AmountProgramRegistrationInFOREIGNCURRENCY",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_Depositary_ed7383a8-3aa1-4407-88e4-329794b819a6": {
                    "Id": "ar_pros_Depositary_ed7383a8-3aa1-4407-88e4-329794b819a6",
                    "IdConcepto": "ar_pros_Depositary",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDepositary"
                },
                "ar_pros_CommonRepresentativeText_ed7383a8-3aa1-4407-88e4-329794b819a6": {
                    "Id": "ar_pros_CommonRepresentativeText_ed7383a8-3aa1-4407-88e4-329794b819a6",
                    "IdConcepto": "ar_pros_CommonRepresentativeText",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ProspectusPublicationAuthorizationDate_f64c16f5-f340-49c0-8950-ba1f63647fe7": {
                    "Id": "ar_pros_ProspectusPublicationAuthorizationDate_f64c16f5-f340-49c0-8950-ba1f63647fe7",
                    "IdConcepto": "ar_pros_ProspectusPublicationAuthorizationDate",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ParticipantsInTheSyndicateIntermediariesLogo-0000-0000": {
                    "Id": "ar_pros_ParticipantsInTheSyndicateIntermediariesLogo-0000-0000",
                    "IdConcepto": "ar_pros_ParticipantsInTheSyndicateIntermediariesLogo",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IssuerLogo-0000-0000": {
                    "Id": "ar_pros_IssuerLogo-0000-0000",
                    "IdConcepto": "ar_pros_IssuerLogo",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IntroductionToOperationOfTheIssuer-0000-0000": {
                    "Id": "ar_pros_IntroductionToOperationOfTheIssuer-0000-0000",
                    "IdConcepto": "ar_pros_IntroductionToOperationOfTheIssuer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS-0000-0000": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS-0000-0000",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalAmountOfTheOffer_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_TotalAmountOfTheOffer_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_PrimaryOverallotmentMexicoAmountr_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_PrimaryOverallotmentMexicoAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MexicoPrimaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_MexicoPrimaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_MexicoPrimaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_PrimaryOverallotmentMexicoAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_PrimaryOverallotmentMexicoAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MexicoSecondaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_MexicoSecondaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_MexicoSecondaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MexicoOverallotmentSecondaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_MexicoOverallotmentSecondaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_AbroadPrimaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_AbroadPrimaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_AbroadPrimaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ForeignPrimaryOverAllotmentAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ForeignPrimaryOverAllotmentAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ForeignPrimaryOverAllotmentAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ForeignSecondaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ForeignSecondaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ForeignSecondaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ForeignOverallotmentSecondaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ForeignOverallotmentSecondaryAmount_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_94c484ff-d5be-449b-8385-60107bd40b6d": {
                    "Id": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_94c484ff-d5be-449b-8385-60107bd40b6d",
                    "IdConcepto": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalAmountOfTheOffer-0000-0000": {
                    "Id": "ar_pros_TotalAmountOfTheOffer-0000-0000",
                    "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary-0000-0000": {
                    "Id": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary-0000-0000",
                    "IdConcepto": "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_MexicoPrimaryAmount-0000-0000": {
                    "Id": "ar_pros_MexicoPrimaryAmount-0000-0000",
                    "IdConcepto": "ar_pros_MexicoPrimaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_PrimaryOverallotmentMexicoAmount-0000-0000": {
                    "Id": "ar_pros_PrimaryOverallotmentMexicoAmount-0000-0000",
                    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_MexicoSecondaryAmount-0000-0000": {
                    "Id": "ar_pros_MexicoSecondaryAmount-0000-0000",
                    "IdConcepto": "ar_pros_MexicoSecondaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_MexicoOverallotmentSecondaryAmount-0000-0000": {
                    "Id": "ar_pros_MexicoOverallotmentSecondaryAmount-0000-0000",
                    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_AbroadPrimaryAmount-0000-0000": {
                    "Id": "ar_pros_AbroadPrimaryAmount-0000-0000",
                    "IdConcepto": "ar_pros_AbroadPrimaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_ForeignPrimaryOverAllotmentAmount-0000-0000": {
                    "Id": "ar_pros_ForeignPrimaryOverAllotmentAmount-0000-0000",
                    "IdConcepto": "ar_pros_ForeignPrimaryOverAllotmentAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_ForeignSecondaryAmount-0000-0000": {
                    "Id": "ar_pros_ForeignSecondaryAmount-0000-0000",
                    "IdConcepto": "ar_pros_ForeignSecondaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_ForeignOverallotmentSecondaryAmount-0000-0000": {
                    "Id": "ar_pros_ForeignOverallotmentSecondaryAmount-0000-0000",
                    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryAmount",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_NumberOfStocksOfferedInMexico-0000-0000": {
                    "Id": "ar_pros_NumberOfStocksOfferedInMexico-0000-0000",
                    "IdConcepto": "ar_pros_NumberOfStocksOfferedInMexico",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary-0000-0000": {
                    "Id": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary-0000-0000",
                    "IdConcepto": "ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_MexicoPrimaryNumberOfValues-0000-0000": {
                    "Id": "ar_pros_MexicoPrimaryNumberOfValues-0000-0000",
                    "IdConcepto": "ar_pros_MexicoPrimaryNumberOfValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_PrimaryOverallotmentMexicoNumberOfValues-0000-0000": {
                    "Id": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues-0000-0000",
                    "IdConcepto": "ar_pros_PrimaryOverallotmentMexicoNumberOfValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_MexicoSecondaryNumberOfValues-0000-0000": {
                    "Id": "ar_pros_MexicoSecondaryNumberOfValues-0000-0000",
                    "IdConcepto": "ar_pros_MexicoSecondaryNumberOfValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_MexicoOverallotmentSecondaryNumberOfValues-0000-0000": {
                    "Id": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues-0000-0000",
                    "IdConcepto": "ar_pros_MexicoOverallotmentSecondaryNumberOfValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_AbroadPrimaryNumberOfValues-0000-0000": {
                    "Id": "ar_pros_AbroadPrimaryNumberOfValues-0000-0000",
                    "IdConcepto": "ar_pros_AbroadPrimaryNumberOfValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_ForeignPrimaryOverallotmentNumberOfValues-0000-0000": {
                    "Id": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues-0000-0000",
                    "IdConcepto": "ar_pros_ForeignPrimaryOverallotmentNumberOfValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_ForeignSecondaryNumberOfValues-0000-0000": {
                    "Id": "ar_pros_ForeignSecondaryNumberOfValues-0000-0000",
                    "IdConcepto": "ar_pros_ForeignSecondaryNumberOfValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
                "ar_pros_ForeignOverallotmentSecondaryNumberOfValues-0000-0000": {
                    "Id": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues-0000-0000",
                    "IdConcepto": "ar_pros_ForeignOverallotmentSecondaryNumberOfValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNumerico"
                },
            };

        }
    }

}