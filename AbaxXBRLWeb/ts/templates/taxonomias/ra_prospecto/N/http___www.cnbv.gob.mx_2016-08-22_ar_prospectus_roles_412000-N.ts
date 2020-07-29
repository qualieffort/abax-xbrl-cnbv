///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-N
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_N implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_N
         */
        constructor() {

            this.ListadoDeFormulas = {
                ///DATOS GENERALES
                'Obligatorio_Condicional_MentioningPartialOrTotalDependence_ar_pros_MentioningPartialOrTotalDependence': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_MentioningPartialOrTotalDependence_ar_pros_MentioningPartialOrTotalDependence',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "Fideicomisos" or variable2 == "Deuda LP,Fideicomisos" or variable2 == "Deuda CP,Fideicomisos" or variable2 == "Fideicomisos, Deuda")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Fideicomisos".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Fideicomisos".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentioningPartialOrTotalDependence",
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
                'Obligatorio_Condicional_MentioningwhetherOrNotHaveCollateral_ar_pros_MentioningwhetherOrNotHaveCollateral': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_MentioningwhetherOrNotHaveCollateral_ar_pros_MentioningwhetherOrNotHaveCollateral',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "Acciones" or variable2 == "Fideicomisos" or variable2 == "Estructurados" or variable2 == "Acciones,Estructurados")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Deuda".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Deuda".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
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
                'AnnualReport_ar_pros_AnnualReport': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'AnnualReport_ar_pros_AnnualReport',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'variable1 == "Anexo N"',
                        MensajeExito: 'El valor del hecho {variable1} es igual a "Anexo N"',
                        MensajeError: 'El valor del hecho {variable1} debe ser igual a "Anexo N"',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AnnualReport',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                //DATOS GENERALES


                'Portada_No_Vacios_ar_pros_IssuerLogo': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_IssuerLogo',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuerLogo',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_NameOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NameOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_AdressOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_AdressOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdressOfTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_Ticker',
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
                'Portada_No_Vacios_ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_Article86LegendOfTheLmv': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_Article86LegendOfTheLmv',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Article86LegendOfTheLmv',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_AnnualReportCueLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_AnnualReportCueLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AnnualReportCueLegend',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_PeriodRepresenting': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_PeriodRepresenting',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PeriodRepresenting',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_PolicyThatTheIssuerWillFollowDuringTheTermOfTheIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_PolicyThatTheIssuerWillFollowDuringTheTermOfTheIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PolicyThatTheIssuerWillFollowDuringTheTermOfTheIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_PolicyThatTheIssuerWillFollowRegardingCorporateStructures': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_PolicyThatTheIssuerWillFollowRegardingCorporateStructures',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PolicyThatTheIssuerWillFollowRegardingCorporateStructures',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_PolicyThatTheIssuerWillFollowonTheSaleOfSpecialAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_PolicyThatTheIssuerWillFollowonTheSaleOfSpecialAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PolicyThatTheIssuerWillFollowonTheSaleOfSpecialAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
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
                                "IdConcepto": "ar_pros_StructuredSeries",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesIssuanceDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesIssuanceDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesSettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesTermOfTheIssuance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesTermOfTheIssuance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesTermOfTheIssuance",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesInterestPerformanceAndCalculationProcedure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesInterestPerformanceAndCalculationProcedure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesInterestPerformanceAndCalculationProcedure",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesPaymentFrequencyOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesPaymentFrequencyOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesLocationAndPaymentOfInterestAndPrincipal': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesLocationAndPaymentOfInterestAndPrincipal',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesLocationAndPaymentOfInterestAndPrincipal",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesSubordinationOfTitlesIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesSubordinationOfTitlesIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesSubordinationOfTitlesIfAny",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesGuaranteeIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesGuaranteeIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesGuaranteeIfAny",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesTrustIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesTrustIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesTrustIfAny",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesCommonRepresentative': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesCommonRepresentative',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesCommonRepresentative",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesDepositary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesDepositary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesDepositary",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesTaxRegime': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_StructuredSeriesTaxRegime',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_StructuredSeriesTaxRegime",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_SerieGuaranteedCapital': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_SerieGuaranteedCapital',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SerieGuaranteedCapital",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_SerieUnderlyingAsset': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_SerieUnderlyingAsset',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SerieUnderlyingAsset",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_SerieCalculationAgentIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_SerieCalculationAgentIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SerieCalculationAgentIfAny",
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
                            }
                        }
                    }
                ),
                'Requeridos_Deuda_Estructurados_ar_pros_SerieMultiplierIfApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Estructurados_ar_pros_SerieMultiplierIfApplicable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        MensajeError: 'El hecho {variable1} debe ser reportado para el tipo de instrumento "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SerieMultiplierIfApplicable",
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
                            }
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
                'VA_Requeridos_Significado_Calificaciones_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_Requeridos_Significado_Calificaciones_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable2)) > 0) and (squeeze(size(variable1)) > 0)) or ((squeeze(size(variable2)) == 0) and (squeeze(size(variable1)) == 0))',
                        MensajeExito: 'Por cada calificación capturada se debe de ingresar el significado de la calificación.',
                        MensajeError: 'Por cada calificación capturada se debe de ingresar el significado de la calificación.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_RatingMeaning",
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
                'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieTermOfTheIssuance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieTermOfTheIssuance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtSerieTermOfTheIssuance',
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
                'ExistenciaSerieEje_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaSerieEje_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != " _null_ ") or not(variable1 == "Acciones" or variable1 == "Acciones,Deuda LP" or variable1 == "Acciones,Deuda CP" or variable1 == "Acciones,Deuda LP,Deuda CP" or variable1 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable1 == "Acciones,Estructurados")',
                        MensajeExito: 'Existe al menos una serie en la tabla "Especificación de las características de los títulos en circulación" para el tipo de valor "Acciones".',
                        MensajeError: 'Debería existir al menos una serie en la tabla "Especificación de las características de los títulos en circulación" para el tipo de valor "Acciones".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_Class",
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
                        Expresion: '(variable2 != " _null_ ") or not(variable1 == "Deuda LP" or variable1 == "Deuda CP" or variable1 == "Acciones,Deuda LP" or variable1 == "Acciones,Deuda CP" or variable1 == "Acciones,Deuda LP,Deuda CP" or variable1 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable1 == "Deuda LP,Deuda CP" or variable1 == "Deuda LP,Deuda CP,Estructurados" or variable1 == "Deuda LP,Fideicomisos" or variable1 == "Deuda LP,Estructurados" or variable1 == "Deuda CP,Fideicomisos" or variable1 == "Deuda CP,Estructurados")',
                        MensajeExito: 'Existe al menos una serie en la tabla "Especificación de las características de los títulos de deuda" para el tipo de valor "Deuda".',
                        MensajeError: 'Debería existir al menos una serie en la tabla "Especificación de las características de los títulos de deuda" para el tipo de valor "Deuda".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
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
                        Expresion: '(variable2 != " _null_ ") or not(variable1 == "Estructurados" or variable1 == "Acciones,Deuda LP,Deuda CP,Estructurados" or variable1 == "Acciones,Estructurados" or variable1 == "Deuda LP,Deuda CP,Estructurados" or variable1 == "Deuda LP,Estructurados" or variable1 == "Deuda CP,Estructurados")',
                        MensajeExito: 'Existe al menos una serie en la tabla "Especificación de las características de los títulos estructurados" para el tipo de valor "Estructurados".',
                        MensajeError: 'Debería existir al menos una serie en la tabla "Especificación de las características de los títulos estructurados" para el tipo de valor "Estructurados".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
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
                'VA_Requerido_OtraCalificadoraNombreCalificacion_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_Requerido_OtraCalificadoraNombreCalificacion_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) == 0 and squeeze(size(variable2)) == 0) or ( squeeze(size(variable1)) > 0  and squeeze(size(variable2)) > 0 )',
                        MensajeExito: 'En caso de indicar un "Nombre" para "Otro [Miembro]" de la sección de "Calificadoras" de la tabla Series de Deuda, se indica una "Calificación"',
                        MensajeError: 'En caso de indicar un "Nombre" para "Otro [Miembro]" de la sección de "Calificadoras" de la tabla Series de Deuda, también se debe de indicar una "Calificación"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SecuritiesRatingOherName",
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
                                ]
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_Rating",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true
                            }
                        }
                    }
                ),
                'Requeridos_SerieCapitales_ar_pros_Class': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_SerieCapitales_ar_pros_Class',
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
                'Requeridos_SerieCapitales_ar_pros_EquitySerie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_SerieCapitales_ar_pros_EquitySerie',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerie',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_SerieCapitales_ar_pros_SerieType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_SerieCapitales_ar_pros_SerieType',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieType',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_SerieCapitales_ar_pros_SerieNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_SerieCapitales_ar_pros_SerieNumberOfStocks',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieNumberOfStocks',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_SerieCapitales_ar_pros_SerieStockExhangesWhereTheyAreRegistered': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_SerieCapitales_ar_pros_SerieStockExhangesWhereTheyAreRegistered',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieStockExhangesWhereTheyAreRegistered',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_SerieCapitales_ar_pros_SerieTickerFromTheSourceMarket': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_SerieCapitales_ar_pros_SerieTickerFromTheSourceMarket',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieTickerFromTheSourceMarket',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
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

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
              "ar_pros_IssuerLogo_82c8d7ff-95a6-42d1-b594-137ebac30cbf": {
                "Id": "ar_pros_IssuerLogo_82c8d7ff-95a6-42d1-b594-137ebac30cbf",
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
              "ar_pros_NameOfTheIssuer_514df73b-4a04-4c14-b2ff-b2f1c699051b": {
                "Id": "ar_pros_NameOfTheIssuer_514df73b-4a04-4c14-b2ff-b2f1c699051b",
                "IdConcepto": "ar_pros_NameOfTheIssuer",
                "IdContextoPlantilla": "ctx_2014",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "ar_pros_AdressOfTheIssuer_a0da1149-7b31-4a62-adbb-ad0fcd40745a": {
                "Id": "ar_pros_AdressOfTheIssuer_a0da1149-7b31-4a62-adbb-ad0fcd40745a",
                "IdConcepto": "ar_pros_AdressOfTheIssuer",
                "IdContextoPlantilla": "ctx_2014",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "ar_pros_Ticker_6dba9670-1b41-418d-9a7e-604f15b30b2a": {
                "Id": "ar_pros_Ticker_6dba9670-1b41-418d-9a7e-604f15b30b2a",
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
              "ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered_82ada786-9ea2-40ad-9f11-072c08565e04": {
                "Id": "ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered_82ada786-9ea2-40ad-9f11-072c08565e04",
                "IdConcepto": "ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered",
                "IdContextoPlantilla": "ctx_2014",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultTheMentionThatTheValuesOfTheIssuerAreRegistered"
              },
              "ar_pros_Article86LegendOfTheLmv_fcb8f642-2361-4b37-b8b8-c8131e5fb7db": {
                "Id": "ar_pros_Article86LegendOfTheLmv_fcb8f642-2361-4b37-b8b8-c8131e5fb7db",
                "IdConcepto": "ar_pros_Article86LegendOfTheLmv",
                "IdContextoPlantilla": "ctx_2014",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultArticle86LegendOfTheLmv"
              },
              "ar_pros_AnnualReportCueLegend_46d6e68e-147e-4ac7-9392-29d9d49c5541": {
                "Id": "ar_pros_AnnualReportCueLegend_46d6e68e-147e-4ac7-9392-29d9d49c5541",
                "IdConcepto": "ar_pros_AnnualReportCueLegend",
                "IdContextoPlantilla": "ctx_2014",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultAnnualReportCueLegend"
              },
              "ar_pros_PeriodRepresenting_ef2757df-918e-4588-a907-18ae28b1c9e6": {
                "Id": "ar_pros_PeriodRepresenting_ef2757df-918e-4588-a907-18ae28b1c9e6",
                "IdConcepto": "ar_pros_PeriodRepresenting",
                "IdContextoPlantilla": "ctx_2014",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "ar_pros_PolicyThatTheIssuerWillFollowDuringTheTermOfTheIssue_360924f6-036d-4f52-b8dc-c69a8f9e3a89": {
                "Id": "ar_pros_PolicyThatTheIssuerWillFollowDuringTheTermOfTheIssue_360924f6-036d-4f52-b8dc-c69a8f9e3a89",
                "IdConcepto": "ar_pros_PolicyThatTheIssuerWillFollowDuringTheTermOfTheIssue",
                "IdContextoPlantilla": "ctx_2014",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "ar_pros_PolicyThatTheIssuerWillFollowRegardingCorporateStructures_d668c8f0-76ab-4f6a-a86d-f364533b4752": {
                "Id": "ar_pros_PolicyThatTheIssuerWillFollowRegardingCorporateStructures_d668c8f0-76ab-4f6a-a86d-f364533b4752",
                "IdConcepto": "ar_pros_PolicyThatTheIssuerWillFollowRegardingCorporateStructures",
                "IdContextoPlantilla": "ctx_2014",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "ar_pros_PolicyThatTheIssuerWillFollowonTheSaleOfSpecialAssets_48895232-ad38-403a-8373-9306953c2d18": {
                "Id": "ar_pros_PolicyThatTheIssuerWillFollowonTheSaleOfSpecialAssets_48895232-ad38-403a-8373-9306953c2d18",
                "IdConcepto": "ar_pros_PolicyThatTheIssuerWillFollowonTheSaleOfSpecialAssets",
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