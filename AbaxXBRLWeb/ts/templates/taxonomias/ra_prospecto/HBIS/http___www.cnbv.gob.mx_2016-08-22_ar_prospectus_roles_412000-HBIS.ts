///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-HBIS
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS
         */
        constructor() {

            this.ListadoDeFormulas = {

                'PORTADA_no_vacios_ar_pros_DenominationOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_DenominationOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DenominationOfTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_no_vacios_ar_pros_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Ticker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_no_vacios_ar_pros_SerieDepositary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_SerieDepositary',
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
                'PORTADA_no_vacios_ar_pros_LegalBasisOfTheTaxRegimeApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_LegalBasisOfTheTaxRegimeApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LegalBasisOfTheTaxRegimeApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_no_vacios_ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV',
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
                'PORTADA_no_vacios_ar_pros_LegendArticle86OfTheLMV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_LegendArticle86OfTheLMV',
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
                'PORTADA_no_vacios_ar_pros_NumberOfRegister': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_NumberOfRegister',
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
                'PORTADA_no_vacios_ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus',
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
                'PORTADA_no_vacios_ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission',
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
                'PORTADA_no_vacios_ar_pros_ProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_ProspectusSupplementBrochure',
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
                'PORTADA_no_vacios_ar_pros_LegendProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_no_vacios_ar_pros_LegendProspectusSupplementBrochure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LegendProspectusSupplementBrochure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_TheMentionOfBeingPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_TheMentionOfBeingPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_LegendDocumentAvailableWithTheUnderwriter': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_LegendDocumentAvailableWithTheUnderwriter',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_NumberOfTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_NumberOfTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfTrust",
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
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_DataRelatingToTheIndenture': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_DataRelatingToTheIndenture',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DataRelatingToTheIndenture",
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
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_Settlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_Settlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Settlor",
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
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_TrusteesInFirstPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_TrusteesInFirstPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TrusteesInFirstPlace",
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
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_TrusteesInSecondPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_TrusteesInSecondPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TrusteesInSecondPlace",
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
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_TrusteesInThirdPlace': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_TrusteesInThirdPlace',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TrusteesInThirdPlace",
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
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_OtherTrustees': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_OtherTrustees',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OtherTrustees",
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
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_AssetsRightsOrValuesUnderATrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_AssetsRightsOrValuesUnderATrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_AssetsRightsOrValuesUnderATrust",
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
                'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_WhereAppropriateValuatoryOpinion': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_mencion_de_ser_oferta_publica_ar_pros_WhereAppropriateValuatoryOpinion',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_WhereAppropriateValuatoryOpinion",
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
                'PORTADA_vigencia_del_programa_ar_pros_LifeOfTheProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_vigencia_del_programa_ar_pros_LifeOfTheProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "NO")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto y Emisión No unica',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de Prospecto y Emisión No unica',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional__ar_pros_DateOfPublicationOfTenderNotice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_DateOfPublicationOfTenderNotice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional__ar_pros_PeriodOrDateOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_PeriodOrDateOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional__ar_pros_ClosingDateBookOrAuction': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_ClosingDateBookOrAuction',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional__ar_pros_DateOfRegisterInTheStockExchange': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_DateOfRegisterInTheStockExchange',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional__ar_pros_SettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_SettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional__ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional__ar_pros_ShouldIncludeTheNameOfAnyOtherThirdPartyNotProvidedForInTheLMV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_ShouldIncludeTheNameOfAnyOtherThirdPartyNotProvidedForInTheLMV',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ShouldIncludeTheNameOfAnyOtherThirdPartyNotProvidedForInTheLMV",
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
                'PORTADA_obligatorio_condicional__ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer",
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
                'PORTADA_obligatorio_condicional__ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment",
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
                'PORTADA_obligatorio_condicional__ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        VariablesCoincidenPeriodo: true,
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
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional__ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional__ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 != "INF" and variable3 == "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        MensajeError: 'El concepto {variable1} debe ser reportado para un reporte de Prospecto y Emisión unica',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer",
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
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_Series': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_Series',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_TotalAmountProgramRegistration': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_TotalAmountProgramRegistration',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_Class': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_Class',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Class",
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_Type': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_Type',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Type",
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_NominalValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_NominalValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NominalValue",
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_NumberOfValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_NumberOfValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NumberOfValues",
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_TickerOfTheOriginStockMarket': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_TickerOfTheOriginStockMarket',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TickerOfTheOriginStockMarket",
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_TypeOfOperation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_TypeOfOperation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TypeOfOperation",
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_Observations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_serie_tabla_numero_y_caracteristicas_de_los_titulos_que_se_ofrecen_ar_pros_Observations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not((variable2 != "INF" and variable3 == "SI") or (variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        MensajeError: 'El hecho {variable1} es requerido para para tipo de reporte: Prospecto en emisión única y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_Observations",
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
                                "IdConcepto": "ar_pros_Brochure",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'PORTADA_obligatorio_condicional_leyenda_emision_al_amparo_del_art_13_bis_de_la_cue_ar_pros_IssuanceUnderArt13OfTheCUELegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_obligatorio_condicional_leyenda_emision_al_amparo_del_art_13_bis_de_la_cue_ar_pros_IssuanceUnderArt13OfTheCUELegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "SI")',
                        MensajeExito: 'El concepto "Leyenda emisión al amparo del art. 13 bis de la CUE" debe ser reportado cuando el concepto "Emisión al amparo del art. 13 bis de la CUE" es "SI".',
                        MensajeError: 'El concepto "Leyenda emisión al amparo del art. 13 bis de la CUE" debe ser reportado cuando el concepto "Emisión al amparo del art. 13 bis de la CUE" es "SI".',
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
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),

                //Datos Generales

                'Obligatorio_Condicional_Emision_Unica_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el concepto "Emisión única" es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el concepto "Emisión única" es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
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
                'Obligatorio_Condicional_leyenda_prospecto_ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_leyenda_prospecto_ar_pros_ProspectusLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ProspectusLegend',
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

            this.UnidadesPlantillaPorId = {
                "MXN": {
                    "Id": "MXN",
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
                "ar_pros_TheMentionOfBeingPublicOffering_cfbac6fe-1f8f-49ae-b8ac-fa74d134462f": {
                    "Id": "ar_pros_TheMentionOfBeingPublicOffering_cfbac6fe-1f8f-49ae-b8ac-fa74d134462f",
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
                "ar_pros_TypeOfOffer_64745a5c-dc04-4f7e-835a-a826b8255148": {
                    "Id": "ar_pros_TypeOfOffer_64745a5c-dc04-4f7e-835a-a826b8255148",
                    "IdConcepto": "ar_pros_TypeOfOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultTypeOfOffer"
                },
                "ar_pros_DenominationOfTheIssuer_f94b56d4-6b02-4d91-8ef7-02736f5566ab": {
                    "Id": "ar_pros_DenominationOfTheIssuer_f94b56d4-6b02-4d91-8ef7-02736f5566ab",
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
                "ar_pros_Ticker_8161d0f2-1944-4700-85e3-0f96b933d2f3": {
                    "Id": "ar_pros_Ticker_8161d0f2-1944-4700-85e3-0f96b933d2f3",
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
                "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_bc345cab-c9b8-4df5-8306-5f36f1b3c35f": {
                    "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_bc345cab-c9b8-4df5-8306-5f36f1b3c35f",
                    "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNameOfTheReferenceCurrencyInWhichTheIssueIsMade"
                },
                "ar_pros_ExchangeRateUDIValue_95faa017-e888-4fd9-964b-40bd5bd074b9": {
                    "Id": "ar_pros_ExchangeRateUDIValue_95faa017-e888-4fd9-964b-40bd5bd074b9",
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
                "ar_pros_PlacementPriceValues_06f201bb-2cf7-43d3-9a6e-f6d00d2ab2a0": {
                    "Id": "ar_pros_PlacementPriceValues_06f201bb-2cf7-43d3-9a6e-f6d00d2ab2a0",
                    "IdConcepto": "ar_pros_PlacementPriceValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalAmountOfTheOffer_7945f392-9434-41a1-ac7c-c0bdbcfc1130": {
                    "Id": "ar_pros_TotalAmountOfTheOffer_7945f392-9434-41a1-ac7c-c0bdbcfc1130",
                    "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalAmountProgramRegistration_f8158cdf-90be-4314-b986-5d2258ce0fb5": {
                    "Id": "ar_pros_TotalAmountProgramRegistration_f8158cdf-90be-4314-b986-5d2258ce0fb5",
                    "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_LifeOfTheProgram_6a902f13-3ea0-4494-a37a-a5c5d26eb1e9": {
                    "Id": "ar_pros_LifeOfTheProgram_6a902f13-3ea0-4494-a37a-a5c5d26eb1e9",
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
                "ar_pros_DateOfPublicationOfTenderNotice_e54a7dfe-33b7-46e2-b5a2-35ab85760ee2": {
                    "Id": "ar_pros_DateOfPublicationOfTenderNotice_e54a7dfe-33b7-46e2-b5a2-35ab85760ee2",
                    "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDateOfPublicationOfTenderNotice"
                },
                "ar_pros_PeriodOrDateOfTheOffer_7d007fad-87ed-49e2-8814-9407064e590b": {
                    "Id": "ar_pros_PeriodOrDateOfTheOffer_7d007fad-87ed-49e2-8814-9407064e590b",
                    "IdConcepto": "ar_pros_PeriodOrDateOfTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ClosingDateBookOrAuction_0f77ce37-72eb-4d13-8f16-bea600377245": {
                    "Id": "ar_pros_ClosingDateBookOrAuction_0f77ce37-72eb-4d13-8f16-bea600377245",
                    "IdConcepto": "ar_pros_ClosingDateBookOrAuction",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultClosingDateBookOrAuction"
                },
                "ar_pros_DateOfRegisterInTheStockExchange_630cc337-1c9b-4fb7-8f0a-e194e5cf28f0": {
                    "Id": "ar_pros_DateOfRegisterInTheStockExchange_630cc337-1c9b-4fb7-8f0a-e194e5cf28f0",
                    "IdConcepto": "ar_pros_DateOfRegisterInTheStockExchange",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDateOfRegisterInTheStockExchange"
                },
                "ar_pros_SettlementDate_37ddc8ef-6db5-4e4a-884f-3e20d7a5ff5e": {
                    "Id": "ar_pros_SettlementDate_37ddc8ef-6db5-4e4a-884f-3e20d7a5ff5e",
                    "IdConcepto": "ar_pros_SettlementDate",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultSettlementDate"
                },
                "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_28495163-09e9-4ec0-82c1-849c07999791": {
                    "Id": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_28495163-09e9-4ec0-82c1-849c07999791",
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
                "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_e4f544c6-2a5d-4762-9ab9-5cf45ed3dc0c": {
                    "Id": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_e4f544c6-2a5d-4762-9ab9-5cf45ed3dc0c",
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
                "ar_pros_SerieDepositary_a38b341c-0655-4d39-b0bc-ac44fc91eec5": {
                    "Id": "ar_pros_SerieDepositary_a38b341c-0655-4d39-b0bc-ac44fc91eec5",
                    "IdConcepto": "ar_pros_SerieDepositary",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegalBasisOfTheTaxRegimeApplicable_61ac9b66-da14-4f31-9045-8bb5cd515a5c": {
                    "Id": "ar_pros_LegalBasisOfTheTaxRegimeApplicable_61ac9b66-da14-4f31-9045-8bb5cd515a5c",
                    "IdConcepto": "ar_pros_LegalBasisOfTheTaxRegimeApplicable",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_9e740204-6ae5-4eb5-b32e-724f90f6af48": {
                    "Id": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_9e740204-6ae5-4eb5-b32e-724f90f6af48",
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
                "ar_pros_LegendArticle86OfTheLMV_ed7c502c-2355-4ecf-a9a7-447b686b08fd": {
                    "Id": "ar_pros_LegendArticle86OfTheLMV_ed7c502c-2355-4ecf-a9a7-447b686b08fd",
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
                "ar_pros_NumberOfRegister_538b124c-3e1b-4e7e-adb4-9bdec788eb24": {
                    "Id": "ar_pros_NumberOfRegister_538b124c-3e1b-4e7e-adb4-9bdec788eb24",
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
                "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_ee4110d9-056c-4aa3-98a9-ba7562023181": {
                    "Id": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_ee4110d9-056c-4aa3-98a9-ba7562023181",
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
                "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_10d0053f-90fd-4131-ac1d-399553b27dce": {
                    "Id": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_10d0053f-90fd-4131-ac1d-399553b27dce",
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
                "ar_pros_LegendDocumentAvailableWithTheUnderwriter_3d54a988-36ef-4282-a70d-734d2720e7d0": {
                    "Id": "ar_pros_LegendDocumentAvailableWithTheUnderwriter_3d54a988-36ef-4282-a70d-734d2720e7d0",
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
                "ar_pros_ProspectusSupplementBrochure_92357217-876f-4e7d-8635-39e61e86845a": {
                    "Id": "ar_pros_ProspectusSupplementBrochure_92357217-876f-4e7d-8635-39e61e86845a",
                    "IdConcepto": "ar_pros_ProspectusSupplementBrochure",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultProspectusSupplementBrochure"
                },
                "ar_pros_LegendProspectusSupplementBrochure_cb4f1f5b-a685-40d2-94fb-5aac717ff1c6": {
                    "Id": "ar_pros_LegendProspectusSupplementBrochure_cb4f1f5b-a685-40d2-94fb-5aac717ff1c6",
                    "IdConcepto": "ar_pros_LegendProspectusSupplementBrochure",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ShouldIncludeTheNameOfAnyOtherThirdPartyNotProvidedForInTheLMV_a037f5e6-45ae-4a4c-8e6c-f54503b1c186": {
                    "Id": "ar_pros_ShouldIncludeTheNameOfAnyOtherThirdPartyNotProvidedForInTheLMV_a037f5e6-45ae-4a4c-8e6c-f54503b1c186",
                    "IdConcepto": "ar_pros_ShouldIncludeTheNameOfAnyOtherThirdPartyNotProvidedForInTheLMV",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer_e9b7533e-9447-4846-bdf5-11ba76b2bf26": {
                    "Id": "ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer_e9b7533e-9447-4846-bdf5-11ba76b2bf26",
                    "IdConcepto": "ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment_f7279b4e-5bf2-4da0-8015-bf3f13632954": {
                    "Id": "ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment_f7279b4e-5bf2-4da0-8015-bf3f13632954",
                    "IdConcepto": "ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer_090d2cfb-6ca9-4362-a3df-375ea96ec5df": {
                    "Id": "ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer_090d2cfb-6ca9-4362-a3df-375ea96ec5df",
                    "IdConcepto": "ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer_5130abd8-e2a4-495d-93c9-c122d5492ee4": {
                    "Id": "ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer_5130abd8-e2a4-495d-93c9-c122d5492ee4",
                    "IdConcepto": "ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering_4494e58f-ef86-4d6e-82e4-c8a4fc414561": {
                    "Id": "ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering_4494e58f-ef86-4d6e-82e4-c8a4fc414561",
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
                "ar_pros_NumberOfTrust_84a372ba-e6ee-4c5f-b795-db805053e04c": {
                    "Id": "ar_pros_NumberOfTrust_84a372ba-e6ee-4c5f-b795-db805053e04c",
                    "IdConcepto": "ar_pros_NumberOfTrust",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DataRelatingToTheIndenture_d6304180-42fa-440f-98c2-e14c2d954548": {
                    "Id": "ar_pros_DataRelatingToTheIndenture_d6304180-42fa-440f-98c2-e14c2d954548",
                    "IdConcepto": "ar_pros_DataRelatingToTheIndenture",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Settlor_5a3af6bb-938e-4187-9c6d-3ebb48a5c1f7": {
                    "Id": "ar_pros_Settlor_5a3af6bb-938e-4187-9c6d-3ebb48a5c1f7",
                    "IdConcepto": "ar_pros_Settlor",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInFirstPlace_eff7308f-caea-45f9-91d5-bfa69527b295": {
                    "Id": "ar_pros_TrusteesInFirstPlace_eff7308f-caea-45f9-91d5-bfa69527b295",
                    "IdConcepto": "ar_pros_TrusteesInFirstPlace",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInSecondPlace_b206ddc2-de0c-4a4a-8c4c-0b5078924058": {
                    "Id": "ar_pros_TrusteesInSecondPlace_b206ddc2-de0c-4a4a-8c4c-0b5078924058",
                    "IdConcepto": "ar_pros_TrusteesInSecondPlace",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInThirdPlace_c8a3876a-2837-426f-893d-0f71d548cc73": {
                    "Id": "ar_pros_TrusteesInThirdPlace_c8a3876a-2837-426f-893d-0f71d548cc73",
                    "IdConcepto": "ar_pros_TrusteesInThirdPlace",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OtherTrustees_5faf46fd-3f0f-4fa5-b81d-71ad60d75664": {
                    "Id": "ar_pros_OtherTrustees_5faf46fd-3f0f-4fa5-b81d-71ad60d75664",
                    "IdConcepto": "ar_pros_OtherTrustees",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AssetsRightsOrValuesUnderATrust_a27570e9-ccdb-475e-9916-aec5dedcee2d": {
                    "Id": "ar_pros_AssetsRightsOrValuesUnderATrust_a27570e9-ccdb-475e-9916-aec5dedcee2d",
                    "IdConcepto": "ar_pros_AssetsRightsOrValuesUnderATrust",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_WhereAppropriateValuatoryOpinion_bfe2efa2-53c6-4a3c-9afd-5d564e3c7b0c": {
                    "Id": "ar_pros_WhereAppropriateValuatoryOpinion_bfe2efa2-53c6-4a3c-9afd-5d564e3c7b0c",
                    "IdConcepto": "ar_pros_WhereAppropriateValuatoryOpinion",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUELegend_bfe2efa2-53c6-4a3c-9afd-5d564e3c7b0d": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegend_bfe2efa2-53c6-4a3c-9afd-5d564e3c7b0d",
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
                "ar_pros_PlacementProspectus_5564a409-e776-40bb-981b-f5c4dadfee5c": {
                    "Id": "ar_pros_PlacementProspectus_5564a409-e776-40bb-981b-f5c4dadfee5c",
                    "IdConcepto": "ar_pros_PlacementProspectus",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultPlacementProspectus"
                },
                "ar_pros_ProspectusLegend_88df3ca4-cae1-4e60-b1cc-838b576ffba9": {
                    "Id": "ar_pros_ProspectusLegend_88df3ca4-cae1-4e60-b1cc-838b576ffba9",
                    "IdConcepto": "ar_pros_ProspectusLegend",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OnlyEmission_d738f2f8-2c4e-4512-8206-2cadef42c4bb": {
                    "Id": "ar_pros_OnlyEmission_d738f2f8-2c4e-4512-8206-2cadef42c4bb",
                    "IdConcepto": "ar_pros_OnlyEmission",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultOnlyEmission"
                },
                "ar_pros_Brochure_d5f67ed5-c703-4159-b744-b6aca5fa8e98": {
                    "Id": "ar_pros_Brochure_d5f67ed5-c703-4159-b744-b6aca5fa8e98",
                    "IdConcepto": "ar_pros_Brochure",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultBrochure"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUE_f1db512f-8844-464d-8840-dd1551faec30": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_f1db512f-8844-464d-8840-dd1551faec30",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUE"
                },
                "ar_pros_LimitedPublicOffering_20840062-6d0b-4d5a-a3dc-622cc7adcea4": {
                    "Id": "ar_pros_LimitedPublicOffering_20840062-6d0b-4d5a-a3dc-622cc7adcea4",
                    "IdConcepto": "ar_pros_LimitedPublicOffering",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLimitedPublicOffering"
                },
                "ar_pros_TypeOfInstrument_d64a57c5-264d-4e0c-8ccc-73a0c574e84e": {
                    "Id": "ar_pros_TypeOfInstrument_d64a57c5-264d-4e0c-8ccc-73a0c574e84e",
                    "IdConcepto": "ar_pros_TypeOfInstrument",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultTypeOfInstrument"
                },
                "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000": {
                    "Id": "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000",
                    "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultTypeOfInstrumentDescription"
                },
                "ar_pros_ForeingIssuer_34492c0c-864f-4cad-bb3d-8ddb978d16af": {
                    "Id": "ar_pros_ForeingIssuer_34492c0c-864f-4cad-bb3d-8ddb978d16af",
                    "IdConcepto": "ar_pros_ForeingIssuer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultForeingIssuer"
                },
                "ar_pros_MentioningwhetherOrNotHaveCollateral_beec5e3c-4d79-44b5-b904-dd469f840887": {
                    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_beec5e3c-4d79-44b5-b904-dd469f840887",
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
                "ar_pros_MentioningPartialOrTotalDependencePros_0e30184d-f1d3-41de-87d6-55d53484b0f5": {
                    "Id": "ar_pros_MentioningPartialOrTotalDependencePros_0e30184d-f1d3-41de-87d6-55d53484b0f5",
                    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
                }
            };
        }
    }

}