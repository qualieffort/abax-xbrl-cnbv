///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-NBIS5
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_NBIS5 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_NBIS5
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_Condicional_MentioningPartialOrTotalDependence_ar_pros_MentioningPartialOrTotalDependence': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_MentioningPartialOrTotalDependence_ar_pros_MentioningPartialOrTotalDependence',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Fideicomisos" and squeeze(size(variable1)) > 0) or (variable2 != "Fideicomisos")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "Fideicomisos"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "Fideicomisos"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MentioningPartialOrTotalDependence',
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
                )
                ,
                'AnnualReport_ar_pros_AnnualReport': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'AnnualReport_ar_pros_AnnualReport',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'variable1 == "Anexo N Bis 5"',
                        MensajeExito: 'El valor del hecho {variable1} es igual a "Anexo N Bis 5"',
                        MensajeError: 'El valor del hecho {variable1} debe ser igual a "Anexo N Bis 5"',
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
                /*fin de datos generales*/


                'Portada_No_Vacios_ar_pros_Term': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_Term',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Term',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_DebtSerieSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_DebtSerieSettlementDate',
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
                'Portada_No_Vacios_ar_pros_WhereApplicableNumberOfSeriesInWhichTheEmissionIsDivided': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_WhereApplicableNumberOfSeriesInWhichTheEmissionIsDivided',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_WhereApplicableNumberOfSeriesInWhichTheEmissionIsDivided',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_WhereApplicableNumberCorrespondingEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_WhereApplicableNumberCorrespondingEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_WhereApplicableNumberCorrespondingEmission',
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
                'Portada_No_Vacios_ar_pros_DataRelatingToTheIndenture': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_DataRelatingToTheIndenture',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DataRelatingToTheIndenture',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_NameOfTrustee': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NameOfTrustee',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTrustee',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_Settlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_Settlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Settlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_NameOfTheCommonRepresentative': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NameOfTheCommonRepresentative',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTheCommonRepresentative',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_OtherFigures': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_OtherFigures',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OtherFigures',
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
                'Portada_No_Vacios_ar_pros_InvestorsWithExistingCoinvestmentAgreements': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_InvestorsWithExistingCoinvestmentAgreements',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InvestorsWithExistingCoinvestmentAgreements',
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
                'Portada_No_Vacios_ar_pros_AssetsRightsOrValuesUnderATrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_AssetsRightsOrValuesUnderATrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AssetsRightsOrValuesUnderATrust',
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
                'Portada_No_Vacios_ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_RightsConferredByTrustBondsOfInvestmentProjects': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_RightsConferredByTrustBondsOfInvestmentProjects',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RightsConferredByTrustBondsOfInvestmentProjects',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_SerieSubordinationOfTitlesIfAny': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_SerieSubordinationOfTitlesIfAny',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieSubordinationOfTitlesIfAny',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_SourceDistributions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_SourceDistributions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SourceDistributions',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_Leverage': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_Leverage',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Leverage',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_CoverageRatioOfDebtService': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_CoverageRatioOfDebtService',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CoverageRatioOfDebtService',
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
                'Portada_No_Vacios_ar_pros_NameOfTheCommonRepresentativ': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NameOfTheCommonRepresentativ',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTheCommonRepresentativ',
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
                'Portada_No_Vacios_ar_pros_SerieTaxRegime': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_SerieTaxRegime',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieTaxRegime',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_WhereAppropriateValuatotyOpinion': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_WhereAppropriateValuatotyOpinion',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_WhereAppropriateValuatotyOpinion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_PurchasersInstitutionalInvestors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_PurchasersInstitutionalInvestors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PurchasersInstitutionalInvestors',
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
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_Class': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_Class',
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
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_EquitySerie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_EquitySerie',
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
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieType',
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
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTicker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTicker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieTicker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTotalAmount': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTotalAmount',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieTotalAmount',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNumberOfStocks': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNumberOfStocks',
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
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNominalValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNominalValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieNominalValue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieStockExhangesWhereTheyAreRegistered': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieStockExhangesWhereTheyAreRegistered',
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
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTerm': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTerm',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieTerm',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_EquitySerieSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_EquitySerieSettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EquitySerieSettlementDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNumberOfCorrespondingEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNumberOfCorrespondingEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieNumberOfCorrespondingEmission',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
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
                'ExistenciaSerieEje_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaSerieEje_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != " _null_ ")',
                        MensajeExito: 'Existe al menos una serie en la tabla "Especificación de las características de los títulos en circulación".',
                        MensajeError: 'Debería existir al menos una serie en la tabla "Especificación de las características de los títulos en circulación".',
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
  }
};
            
            this.HechosPlantillaPorId = {
  "ar_pros_Term_0e2a7cd8-4237-411b-b507-670af521453f": {
    "Id": "ar_pros_Term_0e2a7cd8-4237-411b-b507-670af521453f",
    "IdConcepto": "ar_pros_Term",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DebtSerieSettlementDate_0812a3dc-f5c6-43a1-aa0a-820789a06760": {
    "Id": "ar_pros_DebtSerieSettlementDate_0812a3dc-f5c6-43a1-aa0a-820789a06760",
    "IdConcepto": "ar_pros_SettlementDate",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultDebtSerieSettlementDate"
  },
  "ar_pros_WhereApplicableNumberOfSeriesInWhichTheEmissionIsDivided_104cea2d-ec40-4f5b-b0b8-50106765d7f4": {
    "Id": "ar_pros_WhereApplicableNumberOfSeriesInWhichTheEmissionIsDivided_104cea2d-ec40-4f5b-b0b8-50106765d7f4",
    "IdConcepto": "ar_pros_WhereApplicableNumberOfSeriesInWhichTheEmissionIsDivided",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_WhereApplicableNumberCorrespondingEmission_1fc1f6e9-215b-4b99-868d-0d8c7bdc016f": {
    "Id": "ar_pros_WhereApplicableNumberCorrespondingEmission_1fc1f6e9-215b-4b99-868d-0d8c7bdc016f",
    "IdConcepto": "ar_pros_WhereApplicableNumberCorrespondingEmission",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Ticker_8745d7e3-af5b-478b-b14f-00565a440746": {
    "Id": "ar_pros_Ticker_8745d7e3-af5b-478b-b14f-00565a440746",
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
  "ar_pros_NumberOfTrust_d2926eec-733c-4940-bd67-1bd45969e8bf": {
    "Id": "ar_pros_NumberOfTrust_d2926eec-733c-4940-bd67-1bd45969e8bf",
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
  "ar_pros_DataRelatingToTheIndenture_4ff2eb84-4dfb-4a37-a8bf-607224ad245a": {
    "Id": "ar_pros_DataRelatingToTheIndenture_4ff2eb84-4dfb-4a37-a8bf-607224ad245a",
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
  "ar_pros_NameOfTrustee_314d65c4-507a-4ec1-b9f2-64fe322c9c49": {
    "Id": "ar_pros_NameOfTrustee_314d65c4-507a-4ec1-b9f2-64fe322c9c49",
    "IdConcepto": "ar_pros_NameOfTrustee",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Settlor_72060889-dd53-4d92-9252-176216260fd6": {
    "Id": "ar_pros_Settlor_72060889-dd53-4d92-9252-176216260fd6",
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
  "ar_pros_OtherFigures_c5fc90b1-321d-401b-aa0f-3c6ace67d2a7": {
    "Id": "ar_pros_OtherFigures_c5fc90b1-321d-401b-aa0f-3c6ace67d2a7",
    "IdConcepto": "ar_pros_OtherFigures",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrustEstateManager_16f7b3d5-c349-4d2a-a53d-dabfe1fed3bd": {
    "Id": "ar_pros_TrustEstateManager_16f7b3d5-c349-4d2a-a53d-dabfe1fed3bd",
    "IdConcepto": "ar_pros_TrustEstateManager",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InvestorsWithExistingCoinvestmentAgreements_fe6ff885-7c6c-4eab-bbc4-e26f589c3d62": {
    "Id": "ar_pros_InvestorsWithExistingCoinvestmentAgreements_fe6ff885-7c6c-4eab-bbc4-e26f589c3d62",
    "IdConcepto": "ar_pros_InvestorsWithExistingCoinvestmentAgreements",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrusteesInFirstPlace_b5b70058-fa6f-454a-8b15-feda2fcedcaa": {
    "Id": "ar_pros_TrusteesInFirstPlace_b5b70058-fa6f-454a-8b15-feda2fcedcaa",
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
  "ar_pros_TrusteesInSecondPlace_0460708e-4fc9-4e01-a1be-e59c55dea0fe": {
    "Id": "ar_pros_TrusteesInSecondPlace_0460708e-4fc9-4e01-a1be-e59c55dea0fe",
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
  "ar_pros_TrusteesInThirdPlace_36177eb0-c00c-44b6-80bc-89705783a0af": {
    "Id": "ar_pros_TrusteesInThirdPlace_36177eb0-c00c-44b6-80bc-89705783a0af",
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
  "ar_pros_OtherTrustees_de70f07e-853d-44a2-9301-f1fa81688d86": {
    "Id": "ar_pros_OtherTrustees_de70f07e-853d-44a2-9301-f1fa81688d86",
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
  "ar_pros_IndicationOfAnyOtherRelevantThirdParties_5e03924a-a8f4-4701-9462-e017cd1a30c9": {
    "Id": "ar_pros_IndicationOfAnyOtherRelevantThirdParties_5e03924a-a8f4-4701-9462-e017cd1a30c9",
    "IdConcepto": "ar_pros_IndicationOfAnyOtherRelevantThirdParties",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AssetsRightsOrValuesUnderATrust_b64e0fd4-bc19-4404-8595-fea1d41d89b2": {
    "Id": "ar_pros_AssetsRightsOrValuesUnderATrust_b64e0fd4-bc19-4404-8595-fea1d41d89b2",
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
  "ar_pros_SummaryOfTheMostImportantCharacteristics_e38ebdf6-906f-4019-b500-d983b0908c20": {
    "Id": "ar_pros_SummaryOfTheMostImportantCharacteristics_e38ebdf6-906f-4019-b500-d983b0908c20",
    "IdConcepto": "ar_pros_SummaryOfTheMostImportantCharacteristics",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal_a344b072-c06f-437a-ae13-73ab05d69fae": {
    "Id": "ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal_a344b072-c06f-437a-ae13-73ab05d69fae",
    "IdConcepto": "ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RightsConferredByTrustBondsOfInvestmentProjects_be7dabe8-88e4-44fe-9dcd-6c87cab8e2c3": {
    "Id": "ar_pros_RightsConferredByTrustBondsOfInvestmentProjects_be7dabe8-88e4-44fe-9dcd-6c87cab8e2c3",
    "IdConcepto": "ar_pros_RightsConferredByTrustBondsOfInvestmentProjects",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SerieSubordinationOfTitlesIfAny_7c6f3dd2-bc0b-453d-90a0-85db61892c40": {
    "Id": "ar_pros_SerieSubordinationOfTitlesIfAny_7c6f3dd2-bc0b-453d-90a0-85db61892c40",
    "IdConcepto": "ar_pros_SerieSubordinationOfTitlesIfAny",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SourceDistributions_d21b49fc-81a9-4ab7-a91a-e20a83bd403e": {
    "Id": "ar_pros_SourceDistributions_d21b49fc-81a9-4ab7-a91a-e20a83bd403e",
    "IdConcepto": "ar_pros_SourceDistributions",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Leverage_b83b5b09-9a1f-4aa1-9ed1-10e6c92dfd3d": {
    "Id": "ar_pros_Leverage_b83b5b09-9a1f-4aa1-9ed1-10e6c92dfd3d",
    "IdConcepto": "ar_pros_Leverage",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_CoverageRatioOfDebtService_e683961a-5981-4fce-9d45-725a07ec7073": {
    "Id": "ar_pros_CoverageRatioOfDebtService_e683961a-5981-4fce-9d45-725a07ec7073",
    "IdConcepto": "ar_pros_CoverageRatioOfDebtService",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": "pesos",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_LocationAndPaymentOfDistributions_c007785d-84fa-4f8b-9a17-c75b2cfdeece": {
    "Id": "ar_pros_LocationAndPaymentOfDistributions_c007785d-84fa-4f8b-9a17-c75b2cfdeece",
    "IdConcepto": "ar_pros_LocationAndPaymentOfDistributions",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTheCommonRepresentative_ce0e5a06-ea3c-44dc-9035-d64ce01d7bb4": {
    "Id": "ar_pros_NameOfTheCommonRepresentative_ce0e5a06-ea3c-44dc-9035-d64ce01d7bb4",
    "IdConcepto": "ar_pros_NameOfTheCommonRepresentative",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SerieDepositary_d7154af1-b62a-4ac6-858c-3065ea020540": {
    "Id": "ar_pros_SerieDepositary_d7154af1-b62a-4ac6-858c-3065ea020540",
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
  "ar_pros_SerieTaxRegime_5540775f-9b46-4b86-81b0-50db4033705a": {
    "Id": "ar_pros_SerieTaxRegime_5540775f-9b46-4b86-81b0-50db4033705a",
    "IdConcepto": "ar_pros_SerieTaxRegime",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_WhereAppropriateValuatotyOpinion_98ddae90-c60a-4e5a-88c8-80bb9ace5692": {
    "Id": "ar_pros_WhereAppropriateValuatotyOpinion_98ddae90-c60a-4e5a-88c8-80bb9ace5692",
    "IdConcepto": "ar_pros_WhereAppropriateValuatotyOpinion",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PurchasersInstitutionalInvestors_536fa2f5-745a-4ca4-8a60-606e40ba5fac": {
    "Id": "ar_pros_PurchasersInstitutionalInvestors_536fa2f5-745a-4ca4-8a60-606e40ba5fac",
    "IdConcepto": "ar_pros_PurchasersInstitutionalInvestors",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered_e0b31e18-5417-49ab-a1f1-8a17a751601b": {
    "Id": "ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered_e0b31e18-5417-49ab-a1f1-8a17a751601b",
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
  "ar_pros_Article86LegendOfTheLmv_99291ae4-ed8a-4203-ba6b-5331a9c8f886": {
    "Id": "ar_pros_Article86LegendOfTheLmv_99291ae4-ed8a-4203-ba6b-5331a9c8f886",
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
  "ar_pros_AnnualReportCueLegend_9d0aaa7f-5824-4d85-a65d-a0cf08099d7c": {
    "Id": "ar_pros_AnnualReportCueLegend_9d0aaa7f-5824-4d85-a65d-a0cf08099d7c",
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
  "ar_pros_PeriodRepresenting_d7d8b989-c66e-431c-8dc3-2c4dc93bcd56": {
    "Id": "ar_pros_PeriodRepresenting_d7d8b989-c66e-431c-8dc3-2c4dc93bcd56",
    "IdConcepto": "ar_pros_PeriodRepresenting",
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