///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-HBIS5
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS5 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS5
         */
        constructor() {

            this.ListadoDeFormulas = {

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
                'Portada_No_Vacios_ar_pros_NameOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NameOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTheSettlor',
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
                'Portada_No_Vacios_ar_pros_TermAndExpirationDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TermAndExpirationDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TermAndExpirationDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided',
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
                'Portada_No_Vacios_ar_pros_TrusteesInFirstPlace_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TrusteesInFirstPlace_0',
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
                'Portada_No_Vacios_ar_pros_RightsUnderTheTrustNotes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_RightsUnderTheTrustNotes',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RightsUnderTheTrustNotes',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_FrequencyAndFormOfAmortizationOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_FrequencyAndFormOfAmortizationOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FrequencyAndFormOfAmortizationOfSecurities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_PlaceAndFormOfPayment': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_PlaceAndFormOfPayment',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PlaceAndFormOfPayment',
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
                'Portada_No_Vacios_ar_pros_LegendProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_LegendProspectusSupplementBrochure',
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
                'Portada_No_Vacios_ar_pros_LogoOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_LogoOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LogoOfTheSettlor',
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
                'Portada_No_Vacios_ar_pros_InTheCaseOfEmissionsUnderAProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_InTheCaseOfEmissionsUnderAProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InTheCaseOfEmissionsUnderAProgram',
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
                'Portada_No_Vacios_ar_pros_AssetsRightsOrValuesTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_AssetsRightsOrValuesTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AssetsRightsOrValuesTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_InvestorWithJointVentureAgreements': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_InvestorWithJointVentureAgreements',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InvestorWithJointVentureAgreements',
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
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
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
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_InTheCaseOfAdditionalValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_InTheCaseOfAdditionalValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
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
                                }
                            }
                    }
                ),
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AdditionalValueDateOfIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AdditionalValueDateOfIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdditionalValueDateOfIssue",
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
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DateOfPublicationOfTenderNotice': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DateOfPublicationOfTenderNotice',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
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
                'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_AmountProgramAndOrNumberOfCertificates': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_AmountProgramAndOrNumberOfCertificates',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "NO") and variable4 == "INF")',
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
                'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_LifeOfTheProgram': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_LifeOfTheProgram',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "NO") and variable4 == "INF")',
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
                'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable5 == "SI" and ((variable2 != "INF" and variable3 == "SI") or variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                        MensajeError: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdditionalValueDateOfIssue",
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
                                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable5 == "SI" and ((variable2 != "INF" and variable3 == "SI") or variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                        MensajeError: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
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
                                },
                                "variable5": {
                                    "Id": "variable5",
                                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_TotalAmountOfSecurities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_TotalAmountOfSecurities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable5 == "SI" and ((variable2 != "INF" and variable3 == "SI") or variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                        MensajeError: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
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
                                },
                                "variable5": {
                                    "Id": "variable5",
                                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable5 == "SI" and ((variable2 != "INF" and variable3 == "SI") or variable4 != "INF"))',
                        MensajeExito: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                        MensajeError: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
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
                                },
                                "variable5": {
                                    "Id": "variable5",
                                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
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
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TheMentionOfBeingPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TheMentionOfBeingPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
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
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_LegendDocumentAvailableWithTheUnderwriter': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_LegendDocumentAvailableWithTheUnderwriter',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
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
                'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
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
                'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_InTheCaseOfAdditionalValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_InTheCaseOfAdditionalValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InTheCaseOfAdditionalValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
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
                'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_SerieNumberOfCorrespondingEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_SerieNumberOfCorrespondingEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
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
                'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_Term': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_Term',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_Term",
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
                'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_DebtSerieSettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_DebtSerieSettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
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
                'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                        MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided",
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
                'No_Vacios_Datos_Generales_ar_pros_IssuewithCapitalCalls': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_IssuewithCapitalCalls',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuewithCapitalCalls',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
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
                )
            };

            this.ContextosPlantillaPorId = {
                "cxt": {
                    "Id": "cxt",
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
                "ar_pros_TheMentionOfBeingPublicOffering_c8bb035a-5906-4677-8e64-ad829e6ec40a": {
                    "Id": "ar_pros_TheMentionOfBeingPublicOffering_c8bb035a-5906-4677-8e64-ad829e6ec40a",
                    "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IssuerLogo_c4816966-86f4-44a3-8681-cf2a6f289e0a": {
                    "Id": "ar_pros_IssuerLogo_c4816966-86f4-44a3-8681-cf2a6f289e0a",
                    "IdConcepto": "ar_pros_IssuerLogo",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTrustee_72563a14-1c00-4ec7-b095-802f57df090c": {
                    "Id": "ar_pros_NameOfTrustee_72563a14-1c00-4ec7-b095-802f57df090c",
                    "IdConcepto": "ar_pros_NameOfTrustee",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LogoOfTheSettlor_d8d33e1e-8914-45d0-98da-74abfd038b49": {
                    "Id": "ar_pros_LogoOfTheSettlor_d8d33e1e-8914-45d0-98da-74abfd038b49",
                    "IdConcepto": "ar_pros_LogoOfTheSettlor",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTheSettlor_262dcd38-0d3a-4edb-be78-3d14a1814ab4": {
                    "Id": "ar_pros_NameOfTheSettlor_262dcd38-0d3a-4edb-be78-3d14a1814ab4",
                    "IdConcepto": "ar_pros_NameOfTheSettlor",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OtherFigures_ea1432d4-3543-4d81-83de-d1009de97280": {
                    "Id": "ar_pros_OtherFigures_ea1432d4-3543-4d81-83de-d1009de97280",
                    "IdConcepto": "ar_pros_OtherFigures",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Ticker_629af94b-8b59-420e-b69d-986925172dac": {
                    "Id": "ar_pros_Ticker_629af94b-8b59-420e-b69d-986925172dac",
                    "IdConcepto": "ar_pros_Ticker",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_4da64280-87bd-4899-b91f-b29cb213c12c": {
                    "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_4da64280-87bd-4899-b91f-b29cb213c12c",
                    "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ExchangeRateUDIValue_97c85a71-612c-42ab-930d-bc8429075e30": {
                    "Id": "ar_pros_ExchangeRateUDIValue_97c85a71-612c-42ab-930d-bc8429075e30",
                    "IdConcepto": "ar_pros_ExchangeRateUDIValue",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PriceOrPriceRangeOfTheSecuritiesPlacement_22c32231-257c-4368-a0bf-658a54b791fa": {
                    "Id": "ar_pros_PriceOrPriceRangeOfTheSecuritiesPlacement_22c32231-257c-4368-a0bf-658a54b791fa",
                    "IdConcepto": "ar_pros_PriceOrPriceRangeOfTheSecuritiesPlacement",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalAmountOfTheOffer_56d57041-b74d-48f7-b821-fc14b5b4de77": {
                    "Id": "ar_pros_TotalAmountOfTheOffer_56d57041-b74d-48f7-b821-fc14b5b4de77",
                    "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_e192b80f-4266-4d13-9f2e-f83ab7e9e1f6": {
                    "Id": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_e192b80f-4266-4d13-9f2e-f83ab7e9e1f6",
                    "IdConcepto": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_d12d3f7d-dac9-4d7b-821c-83426b39410d": {
                    "Id": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_d12d3f7d-dac9-4d7b-821c-83426b39410d",
                    "IdConcepto": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_71b138af-0e83-4ee2-bde8-779ff964bfe0": {
                    "Id": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_71b138af-0e83-4ee2-bde8-779ff964bfe0",
                    "IdConcepto": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountProgramAndOrNumberOfCertificates_d6a773bf-d493-4e7c-8e4c-5c1559559f65": {
                    "Id": "ar_pros_AmountProgramAndOrNumberOfCertificates_d6a773bf-d493-4e7c-8e4c-5c1559559f65",
                    "IdConcepto": "ar_pros_AmountProgramAndOrNumberOfCertificates",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LifeOfTheProgram_6b3e6e32-b69e-4b3d-8230-bc499b357608": {
                    "Id": "ar_pros_LifeOfTheProgram_6b3e6e32-b69e-4b3d-8230-bc499b357608",
                    "IdConcepto": "ar_pros_LifeOfTheProgram",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Term_15b6d767-6847-4781-971b-f04df4a5734c": {
                    "Id": "ar_pros_Term_15b6d767-6847-4781-971b-f04df4a5734c",
                    "IdConcepto": "ar_pros_Term",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DebtSerieSettlementDate_096142b4-4aff-4bc0-b907-20dc310652e9": {
                    "Id": "ar_pros_DebtSerieSettlementDate_096142b4-4aff-4bc0-b907-20dc310652e9",
                    "IdConcepto": "ar_pros_DebtSerieSettlementDate",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDebtSerieSettlementDate"
                },
                "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided_3e9903f4-0d3b-4ab6-abf5-11f9dd5fd90c": {
                    "Id": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided_3e9903f4-0d3b-4ab6-abf5-11f9dd5fd90c",
                    "IdConcepto": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SerieNumberOfCorrespondingEmission_e17c7cd5-e478-4748-bc1e-9a42549cc82d": {
                    "Id": "ar_pros_SerieNumberOfCorrespondingEmission_e17c7cd5-e478-4748-bc1e-9a42549cc82d",
                    "IdConcepto": "ar_pros_SerieNumberOfCorrespondingEmission",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NumberOfTrust_60cff27b-4bae-410b-b3a5-c771db8abe4c": {
                    "Id": "ar_pros_NumberOfTrust_60cff27b-4bae-410b-b3a5-c771db8abe4c",
                    "IdConcepto": "ar_pros_NumberOfTrust",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DataRelatedToTheIndenture_b11469ee-350f-4d73-a938-0ef866b457dd": {
                    "Id": "ar_pros_DataRelatedToTheIndenture_b11469ee-350f-4d73-a938-0ef866b457dd",
                    "IdConcepto": "ar_pros_DataRelatedToTheIndenture",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInFirstPlace_82252146-a138-473b-980c-9fd36c1eb34d": {
                    "Id": "ar_pros_TrusteesInFirstPlace_82252146-a138-473b-980c-9fd36c1eb34d",
                    "IdConcepto": "ar_pros_TrusteesInFirstPlace",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInSecondPlace_81e026b4-2828-4110-a73e-9155a2bacb30": {
                    "Id": "ar_pros_TrusteesInSecondPlace_81e026b4-2828-4110-a73e-9155a2bacb30",
                    "IdConcepto": "ar_pros_TrusteesInSecondPlace",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TrusteesInThirdPlace_131016f2-2467-4426-96cb-fc9bdbbf562c": {
                    "Id": "ar_pros_TrusteesInThirdPlace_131016f2-2467-4426-96cb-fc9bdbbf562c",
                    "IdConcepto": "ar_pros_TrusteesInThirdPlace",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OtherTrustees_7b89afa4-f8ca-48bd-b806-a4531be04b12": {
                    "Id": "ar_pros_OtherTrustees_7b89afa4-f8ca-48bd-b806-a4531be04b12",
                    "IdConcepto": "ar_pros_OtherTrustees",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InvestorWithJointVentureAgreements_b414f87f-882c-44e4-9700-41adfa483e18": {
                    "Id": "ar_pros_InvestorWithJointVentureAgreements_b414f87f-882c-44e4-9700-41adfa483e18",
                    "IdConcepto": "ar_pros_InvestorWithJointVentureAgreements",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IndicationOfAnyOtherRelevantThirdParties_48d4d229-f4b7-4bb3-bf29-659c71034c33": {
                    "Id": "ar_pros_IndicationOfAnyOtherRelevantThirdParties_48d4d229-f4b7-4bb3-bf29-659c71034c33",
                    "IdConcepto": "ar_pros_IndicationOfAnyOtherRelevantThirdParties",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AssetsRightsOrValuesTrust_2206d129-1d6d-4e3a-bb5c-59f3869c1ff7": {
                    "Id": "ar_pros_AssetsRightsOrValuesTrust_2206d129-1d6d-4e3a-bb5c-59f3869c1ff7",
                    "IdConcepto": "ar_pros_AssetsRightsOrValuesTrust",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SummaryOfTheMostImportantCharacteristics_ec1b4ffb-9bfd-4f43-9497-5d96867086c2": {
                    "Id": "ar_pros_SummaryOfTheMostImportantCharacteristics_ec1b4ffb-9bfd-4f43-9497-5d96867086c2",
                    "IdConcepto": "ar_pros_SummaryOfTheMostImportantCharacteristics",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_RightsConferredByTrustBondsOfInvestmentProjects_0b596fb4-9bad-492b-8de7-a95aba9709f2": {
                    "Id": "ar_pros_RightsConferredByTrustBondsOfInvestmentProjects_0b596fb4-9bad-492b-8de7-a95aba9709f2",
                    "IdConcepto": "ar_pros_RightsConferredByTrustBondsOfInvestmentProjects",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_FrequencyAndFormOfAmortizationOfSecurities_1efd223a-8733-4359-86b4-238a2763251d": {
                    "Id": "ar_pros_FrequencyAndFormOfAmortizationOfSecurities_1efd223a-8733-4359-86b4-238a2763251d",
                    "IdConcepto": "ar_pros_FrequencyAndFormOfAmortizationOfSecurities",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DistributionsFrequencyAndCalculationProcedure_0f8ac1a7-7e35-4316-856e-f4d820c0f93f": {
                    "Id": "ar_pros_DistributionsFrequencyAndCalculationProcedure_0f8ac1a7-7e35-4316-856e-f4d820c0f93f",
                    "IdConcepto": "ar_pros_DistributionsFrequencyAndCalculationProcedure",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SourceDistributions_d2ea7b91-e323-4541-b2b0-4ae5490c742d": {
                    "Id": "ar_pros_SourceDistributions_d2ea7b91-e323-4541-b2b0-4ae5490c742d",
                    "IdConcepto": "ar_pros_SourceDistributions",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LocationAndPaymentOfDistributions_967634ac-b0fc-48c4-a8df-582d38253404": {
                    "Id": "ar_pros_LocationAndPaymentOfDistributions_967634ac-b0fc-48c4-a8df-582d38253404",
                    "IdConcepto": "ar_pros_LocationAndPaymentOfDistributions",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_WhereAppropriateValuatoryOpinion_6e747bd7-5622-4723-a1d8-db848b3a1146": {
                    "Id": "ar_pros_WhereAppropriateValuatoryOpinion_6e747bd7-5622-4723-a1d8-db848b3a1146",
                    "IdConcepto": "ar_pros_WhereAppropriateValuatoryOpinion",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest_d2484140-0e99-4164-8e68-4c042e7e7ba9": {
                    "Id": "ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest_d2484140-0e99-4164-8e68-4c042e7e7ba9",
                    "IdConcepto": "ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfEmissionsUnderAProgram_e9a9021d-0eb8-4d0f-ba36-b10f66521ffc": {
                    "Id": "ar_pros_InTheCaseOfEmissionsUnderAProgram_e9a9021d-0eb8-4d0f-ba36-b10f66521ffc",
                    "IdConcepto": "ar_pros_InTheCaseOfEmissionsUnderAProgram",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_DateOfPublicationOfTenderNotice_f2f7370c-d33e-471b-b6ec-35eade104317": {
                    "Id": "ar_pros_DateOfPublicationOfTenderNotice_f2f7370c-d33e-471b-b6ec-35eade104317",
                    "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDateOfPublicationOfTenderNotice"
                },
                "ar_pros_PeriodOrDateOfTheOffer_7554632a-2c5c-4bd1-a5e1-e16bf03039c5": {
                    "Id": "ar_pros_PeriodOrDateOfTheOffer_7554632a-2c5c-4bd1-a5e1-e16bf03039c5",
                    "IdConcepto": "ar_pros_PeriodOrDateOfTheOffer",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ClosingDateBookOrAuction_ca1a20c9-8479-4028-a138-4656ee889957": {
                    "Id": "ar_pros_ClosingDateBookOrAuction_ca1a20c9-8479-4028-a138-4656ee889957",
                    "IdConcepto": "ar_pros_ClosingDateBookOrAuction",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultClosingDateBookOrAuction"
                },
                "ar_pros_DateOfRegisterInTheStockExchange_54ae032c-481c-4c2e-9ad9-c28e987c94f6": {
                    "Id": "ar_pros_DateOfRegisterInTheStockExchange_54ae032c-481c-4c2e-9ad9-c28e987c94f6",
                    "IdConcepto": "ar_pros_DateOfRegisterInTheStockExchange",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDateOfRegisterInTheStockExchange"
                },
                "ar_pros_SettlementDate_0ea68d20-2094-4af7-9bd0-203e9ebd50d2": {
                    "Id": "ar_pros_SettlementDate_0ea68d20-2094-4af7-9bd0-203e9ebd50d2",
                    "IdConcepto": "ar_pros_SettlementDate",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultSettlementDate"
                },
                "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_27719765-e9cc-4f1b-b64f-05547894d6a9": {
                    "Id": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_27719765-e9cc-4f1b-b64f-05547894d6a9",
                    "IdConcepto": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PossiblePurchasers_8a05c2d0-1f75-4126-a6b7-f8de984e3a6d": {
                    "Id": "ar_pros_PossiblePurchasers_8a05c2d0-1f75-4126-a6b7-f8de984e3a6d",
                    "IdConcepto": "ar_pros_PossiblePurchasers",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PossibleLimitations_3273e64f-63ef-4c41-a618-cce9dab45007": {
                    "Id": "ar_pros_PossibleLimitations_3273e64f-63ef-4c41-a618-cce9dab45007",
                    "IdConcepto": "ar_pros_PossibleLimitations",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TypeOfInvestorToWhichItIsAddressed_ea935915-00c9-4900-aac2-64a60d66251f": {
                    "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_ea935915-00c9-4900-aac2-64a60d66251f",
                    "IdConcepto": "ar_pros_TypeOfInvestorToWhichItIsAddressed",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_a177e181-4484-464f-8c38-1c6264fda00a": {
                    "Id": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_a177e181-4484-464f-8c38-1c6264fda00a",
                    "IdConcepto": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SerieDepositary_c4fb7037-1811-4262-97e7-bd9de873016e": {
                    "Id": "ar_pros_SerieDepositary_c4fb7037-1811-4262-97e7-bd9de873016e",
                    "IdConcepto": "ar_pros_SerieDepositary",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegalBasisOfTheTaxRegimeApplicable_c352fb31-e5a5-4bb1-b5ed-aaabe6d9d2bb": {
                    "Id": "ar_pros_LegalBasisOfTheTaxRegimeApplicable_c352fb31-e5a5-4bb1-b5ed-aaabe6d9d2bb",
                    "IdConcepto": "ar_pros_LegalBasisOfTheTaxRegimeApplicable",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation_20a7014c-9e18-4d3f-adde-91701d94957c": {
                    "Id": "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation_20a7014c-9e18-4d3f-adde-91701d94957c",
                    "IdConcepto": "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_267bf659-5726-4b75-97d7-bac4b9673b4b": {
                    "Id": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_267bf659-5726-4b75-97d7-bac4b9673b4b",
                    "IdConcepto": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV"
                },
                "ar_pros_LegendArticle86OfTheLMV_f84a8dfd-6293-4bb0-89b8-03fba27d3001": {
                    "Id": "ar_pros_LegendArticle86OfTheLMV_f84a8dfd-6293-4bb0-89b8-03fba27d3001",
                    "IdConcepto": "ar_pros_LegendArticle86OfTheLMV",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLegendArticle86OfTheLMV"
                },
                "ar_pros_NumberOfRegister_f8ef749a-ee2c-4163-88fc-5c6de98f00fa": {
                    "Id": "ar_pros_NumberOfRegister_f8ef749a-ee2c-4163-88fc-5c6de98f00fa",
                    "IdConcepto": "ar_pros_NumberOfRegister",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_96ed377e-3260-4a9e-9929-56bc4b0ed255": {
                    "Id": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_96ed377e-3260-4a9e-9929-56bc4b0ed255",
                    "IdConcepto": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_4c7a2822-7066-42ce-9c5e-9abffc5be5ae": {
                    "Id": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_4c7a2822-7066-42ce-9c5e-9abffc5be5ae",
                    "IdConcepto": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegendDocumentAvailableWithTheUnderwriter_82b107cd-c6f2-440e-b50f-c3b2f1b8ee20": {
                    "Id": "ar_pros_LegendDocumentAvailableWithTheUnderwriter_82b107cd-c6f2-440e-b50f-c3b2f1b8ee20",
                    "IdConcepto": "ar_pros_LegendDocumentAvailableWithTheUnderwriter",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLegendDocumentAvailableWithTheUnderwriter"
                },
                "ar_pros_ProspectusSupplementBrochure_e7cdb353-c871-4b58-b78e-2d0606779041": {
                    "Id": "ar_pros_ProspectusSupplementBrochure_e7cdb353-c871-4b58-b78e-2d0606779041",
                    "IdConcepto": "ar_pros_ProspectusSupplementBrochure",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultProspectusSupplementBrochure"
                },
                "ar_pros_LegendProspectusSupplementBrochure_36425bc2-10da-4ac8-a791-c8330acb4521": {
                    "Id": "ar_pros_LegendProspectusSupplementBrochure_36425bc2-10da-4ac8-a791-c8330acb4521",
                    "IdConcepto": "ar_pros_LegendProspectusSupplementBrochure",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfAdditionalValues_b15a77b3-9b83-403b-af09-ad9da70dc27b": {
                    "Id": "ar_pros_InTheCaseOfAdditionalValues_b15a77b3-9b83-403b-af09-ad9da70dc27b",
                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_e9460e9a-588a-4a35-86da-d66c9392a0da": {
                    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_e9460e9a-588a-4a35-86da-d66c9392a0da",
                    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_2510dea4-0440-40e0-b3d5-7b538ac46541": {
                    "Id": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_2510dea4-0440-40e0-b3d5-7b538ac46541",
                    "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalAmountOfSecurities_b7b6d896-03c7-4ec8-819e-26b3b7c74c87": {
                    "Id": "ar_pros_TotalAmountOfSecurities_b7b6d896-03c7-4ec8-819e-26b3b7c74c87",
                    "IdConcepto": "ar_pros_TotalAmountOfSecurities",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_IssuanceUnderArt13OfTheCUELegend_b1a3d781-73c1-45d1-9778-b6b85578c3f3": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegend_b1a3d781-73c1-45d1-9778-b6b85578c3f3",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUELegend"
                },
                "ar_pros_PlacementProspectus_fb9ff821-0660-4620-ba6f-000a285dc560": {
                    "Id": "ar_pros_PlacementProspectus_fb9ff821-0660-4620-ba6f-000a285dc560",
                    "IdConcepto": "ar_pros_PlacementProspectus",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultPlacementProspectus"
                },
                "ar_pros_ProspectusLegend_751c2fd5-d6de-41f6-bcca-08cedb5c7bfb": {
                    "Id": "ar_pros_ProspectusLegend_751c2fd5-d6de-41f6-bcca-08cedb5c7bfb",
                    "IdConcepto": "ar_pros_ProspectusLegend",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OnlyEmission_58d30de4-2e11-4b0e-9c6e-e9e868fb3fbe": {
                    "Id": "ar_pros_OnlyEmission_58d30de4-2e11-4b0e-9c6e-e9e868fb3fbe",
                    "IdConcepto": "ar_pros_OnlyEmission",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultOnlyEmission"
                },
                "ar_pros_Supplement_8646631b-6c94-4fa6-8e8e-bf32e53f63b5": {
                    "Id": "ar_pros_Supplement_8646631b-6c94-4fa6-8e8e-bf32e53f63b5",
                    "IdConcepto": "ar_pros_Supplement",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultSupplement"
                },
                "ar_pros_SupplementLegend_19b5407f-973d-4df3-a3d4-0fce0aa27e31": {
                    "Id": "ar_pros_SupplementLegend_19b5407f-973d-4df3-a3d4-0fce0aa27e31",
                    "IdConcepto": "ar_pros_SupplementLegend",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Brochure_0387337f-cc2a-469b-a8aa-ef06392a2719": {
                    "Id": "ar_pros_Brochure_0387337f-cc2a-469b-a8aa-ef06392a2719",
                    "IdConcepto": "ar_pros_Brochure",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultBrochure"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUE_fdecfc18-24f6-499f-ad72-7fdc8f006db6": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_fdecfc18-24f6-499f-ad72-7fdc8f006db6",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUE"
                },
                "ar_pros_LimitedPublicOffering_0d8b6c3b-8516-4904-b915-8611e2f3f844": {
                    "Id": "ar_pros_LimitedPublicOffering_0d8b6c3b-8516-4904-b915-8611e2f3f844",
                    "IdConcepto": "ar_pros_LimitedPublicOffering",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultLimitedPublicOffering"
                },
                "ar_pros_TypeOfInstrument_e708769b-0506-428e-99bd-2907abee8b92": {
                    "Id": "ar_pros_TypeOfInstrument_e708769b-0506-428e-99bd-2907abee8b92",
                    "IdConcepto": "ar_pros_TypeOfInstrument",
                    "IdContextoPlantilla": "cxt",
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
                "ar_pros_ForeingIssuer_78a223b3-4927-4406-95d8-0a4df049f528": {
                    "Id": "ar_pros_ForeingIssuer_78a223b3-4927-4406-95d8-0a4df049f528",
                    "IdConcepto": "ar_pros_ForeingIssuer",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultForeingIssuer"
                },
                "ar_pros_MentioningwhetherOrNotHaveCollateral_eddb2bab-be95-4b78-a757-fc07c3d8de98": {
                    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_eddb2bab-be95-4b78-a757-fc07c3d8de98",
                    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentioningPartialOrTotalDependencePros_d49fbc68-074a-4c7e-b5be-605514842111": {
                    "Id": "ar_pros_MentioningPartialOrTotalDependencePros_d49fbc68-074a-4c7e-b5be-605514842111",
                    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
                },
                "ar_pros_IssuewithCapitalCalls_4ce1ebc0-1759-4900-ba43-c0408cb9903d": {
                    "Id": "ar_pros_IssuewithCapitalCalls_4ce1ebc0-1759-4900-ba43-c0408cb9903d",
                    "IdConcepto": "ar_pros_IssuewithCapitalCalls",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIssuewithCapitalCalls"
                }
            };
        }
    }
}