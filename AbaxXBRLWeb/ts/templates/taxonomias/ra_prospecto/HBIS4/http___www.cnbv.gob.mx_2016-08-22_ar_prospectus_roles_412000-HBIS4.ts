///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-HBIS4
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS4 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_HBIS4
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
                'Portada_No_Vacios_ar_pros_IndicationThatTheTrustBondsInvestingInEnergyAndInfrastructureAreNotRedeemable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_IndicationThatTheTrustBondsInvestingInEnergyAndInfrastructureAreNotRedeemable',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IndicationThatTheTrustBondsInvestingInEnergyAndInfrastructureAreNotRedeemable',
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
                'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
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
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF" and variable3 == "INF")',
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
                        "FechaInstante": "#fecha_2016_07_25",
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
                "ar_pros_TheMentionOfBeingPublicOffering_e32d5d19-2eb5-484e-863d-cc61312688c4": {
                    "Id": "ar_pros_TheMentionOfBeingPublicOffering_e32d5d19-2eb5-484e-863d-cc61312688c4",
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
                "ar_pros_TypeOfOffer_d8c64087-c43e-4e34-8b39-7c2e00cefed8": {
                    "Id": "ar_pros_TypeOfOffer_d8c64087-c43e-4e34-8b39-7c2e00cefed8",
                    "IdConcepto": "ar_pros_TypeOfOffer",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultTypeOfOffer"
                },
                "ar_pros_IssuerLogo_808661c9-3e1b-4f10-82fb-620068759ba9": {
                    "Id": "ar_pros_IssuerLogo_808661c9-3e1b-4f10-82fb-620068759ba9",
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
                "ar_pros_NameOfTrustee_c1090df5-04b9-4d44-a58b-f8cd6c4aaefa": {
                    "Id": "ar_pros_NameOfTrustee_c1090df5-04b9-4d44-a58b-f8cd6c4aaefa",
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
                "ar_pros_LogoOfTheSettlor_46abcd0b-f028-48c2-90b6-bf19a1a77a57": {
                    "Id": "ar_pros_LogoOfTheSettlor_46abcd0b-f028-48c2-90b6-bf19a1a77a57",
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
                "ar_pros_NameOfTheSettlor_015ada5f-2a19-4331-ba96-4f2b717dac79": {
                    "Id": "ar_pros_NameOfTheSettlor_015ada5f-2a19-4331-ba96-4f2b717dac79",
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
                "ar_pros_OtherFigures_ce3a433f-37a3-46df-8867-afa1701fd662": {
                    "Id": "ar_pros_OtherFigures_ce3a433f-37a3-46df-8867-afa1701fd662",
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
                "ar_pros_Ticker_ad44ab86-0c31-447a-8567-d1d708645f10": {
                    "Id": "ar_pros_Ticker_ad44ab86-0c31-447a-8567-d1d708645f10",
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
                "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_7e4ba839-f87b-4207-be90-b02c9a62cf83": {
                    "Id": "ar_pros_TotalAmountOfTheIssueWithCapitalCalls_7e4ba839-f87b-4207-be90-b02c9a62cf83",
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
                "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_03a40816-b552-4fe1-9ea9-a59d7ac3c273": {
                    "Id": "ar_pros_MaximumNumberOfSecuritiesToBeRegistered_03a40816-b552-4fe1-9ea9-a59d7ac3c273",
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
                "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_698ea542-d2bf-42ee-b5a3-304c0fd3c2b7": {
                    "Id": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_698ea542-d2bf-42ee-b5a3-304c0fd3c2b7",
                    "IdConcepto": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultDesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized"
                },
                "ar_pros_AmountProgramAndOrNumberOfCertificates_4df81c44-4485-4acd-bcb3-cc91d489821b": {
                    "Id": "ar_pros_AmountProgramAndOrNumberOfCertificates_4df81c44-4485-4acd-bcb3-cc91d489821b",
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
                "ar_pros_LifeOfTheProgram_94bc7afc-453b-4531-a2ac-eaa922b2deab": {
                    "Id": "ar_pros_LifeOfTheProgram_94bc7afc-453b-4531-a2ac-eaa922b2deab",
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
                "ar_pros_TotalAmountOfTheOffer_75a9b9c1-dee9-4da0-b862-9a6f7c4c6e66": {
                    "Id": "ar_pros_TotalAmountOfTheOffer_75a9b9c1-dee9-4da0-b862-9a6f7c4c6e66",
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
                "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_4110a5d3-a7f3-4959-8179-5001a4e35308": {
                    "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_4110a5d3-a7f3-4959-8179-5001a4e35308",
                    "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNameOfTheReferenceCurrencyInWhichTheIssueIsMade"
                },
                "ar_pros_ExchangeRateUDIValue_c38328d7-8e64-4b38-b9b1-ff7eb8310513": {
                    "Id": "ar_pros_ExchangeRateUDIValue_c38328d7-8e64-4b38-b9b1-ff7eb8310513",
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
                "ar_pros_PlacementPriceValues_6887a605-47bd-4755-99d1-da29ff4f7ab4": {
                    "Id": "ar_pros_PlacementPriceValues_6887a605-47bd-4755-99d1-da29ff4f7ab4",
                    "IdConcepto": "ar_pros_PlacementPriceValues",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_DateOfPublicationOfTenderNotice_90117212-96fe-4ee6-9439-76097ee825b2": {
                    "Id": "ar_pros_DateOfPublicationOfTenderNotice_90117212-96fe-4ee6-9439-76097ee825b2",
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
                "ar_pros_PeriodOrDateOfTheOffer_51156097-9a03-4280-af06-9098a0b7575a": {
                    "Id": "ar_pros_PeriodOrDateOfTheOffer_51156097-9a03-4280-af06-9098a0b7575a",
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
                "ar_pros_ClosingDateBookOrAuction_87c59f2e-aa9f-4098-823a-235787ddec81": {
                    "Id": "ar_pros_ClosingDateBookOrAuction_87c59f2e-aa9f-4098-823a-235787ddec81",
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
                "ar_pros_DateOfRegisterInTheStockExchange_a6d4f747-d9fe-423c-a778-a958fb1da2f7": {
                    "Id": "ar_pros_DateOfRegisterInTheStockExchange_a6d4f747-d9fe-423c-a778-a958fb1da2f7",
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
                "ar_pros_SettlementDate_6dd3cbe3-4eca-4ed5-9171-b8c2d1ab47de": {
                    "Id": "ar_pros_SettlementDate_6dd3cbe3-4eca-4ed5-9171-b8c2d1ab47de",
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
                "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_1f27b931-b446-4b18-be11-d45bcc1ec5b0": {
                    "Id": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_1f27b931-b446-4b18-be11-d45bcc1ec5b0",
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
                "ar_pros_PossiblePurchasers_b0d8fde8-59bb-4f8e-96d8-b5cd168384f2": {
                    "Id": "ar_pros_PossiblePurchasers_b0d8fde8-59bb-4f8e-96d8-b5cd168384f2",
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
                "ar_pros_PossibleLimitations_a2fcc228-0bd8-405b-b874-702a2225b149": {
                    "Id": "ar_pros_PossibleLimitations_a2fcc228-0bd8-405b-b874-702a2225b149",
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
                "ar_pros_TypeOfInvestorToWhichItIsAddressed_2000023f-36a5-45cf-8ffb-c76cd8f5eb12": {
                    "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_2000023f-36a5-45cf-8ffb-c76cd8f5eb12",
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
                "ar_pros_WhereApplicableNumberCorrespondingEmission_6273963b-6e25-4e1a-a9fd-94970597926c": {
                    "Id": "ar_pros_WhereApplicableNumberCorrespondingEmission_6273963b-6e25-4e1a-a9fd-94970597926c",
                    "IdConcepto": "ar_pros_WhereApplicableNumberCorrespondingEmission",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NumberOfTrust_5ba072cc-c6fb-4e81-b1c3-7d2759e63692": {
                    "Id": "ar_pros_NumberOfTrust_5ba072cc-c6fb-4e81-b1c3-7d2759e63692",
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
                "ar_pros_DataRelatedToTheIndenture_c8792240-6c78-4b94-b9f0-34df3e89a3d3": {
                    "Id": "ar_pros_DataRelatedToTheIndenture_c8792240-6c78-4b94-b9f0-34df3e89a3d3",
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
                "ar_pros_TrusteesInFirstPlace_9bcd4a28-7543-48f5-9ed1-bf98281dbf51": {
                    "Id": "ar_pros_TrusteesInFirstPlace_9bcd4a28-7543-48f5-9ed1-bf98281dbf51",
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
                "ar_pros_TrusteesInSecondPlace_5fb795d4-0d37-4a96-b291-51b6c2916730": {
                    "Id": "ar_pros_TrusteesInSecondPlace_5fb795d4-0d37-4a96-b291-51b6c2916730",
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
                "ar_pros_TrusteesInThirdPlace_099f802f-1e59-4bfd-b4a3-0c9fb9093f61": {
                    "Id": "ar_pros_TrusteesInThirdPlace_099f802f-1e59-4bfd-b4a3-0c9fb9093f61",
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
                "ar_pros_OtherTrustees_b81fed4c-7fad-4d6b-a5a4-51fa94be4691": {
                    "Id": "ar_pros_OtherTrustees_b81fed4c-7fad-4d6b-a5a4-51fa94be4691",
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
                "ar_pros_TrustEstateManager_14d8e007-01c8-4602-922e-9261b6c4cc62": {
                    "Id": "ar_pros_TrustEstateManager_14d8e007-01c8-4602-922e-9261b6c4cc62",
                    "IdConcepto": "ar_pros_TrustEstateManager",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AdvisoryOfTheTrust_d4526a2a-28de-4111-b2b5-161209ca0f37": {
                    "Id": "ar_pros_AdvisoryOfTheTrust_d4526a2a-28de-4111-b2b5-161209ca0f37",
                    "IdConcepto": "ar_pros_AdvisoryOfTheTrust",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IndicationOfAnyOtherRelevantThirdParties_cad798df-3419-4d46-acc6-54c5e514f4d4": {
                    "Id": "ar_pros_IndicationOfAnyOtherRelevantThirdParties_cad798df-3419-4d46-acc6-54c5e514f4d4",
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
                "ar_pros_DistributionsFrequencyAndCalculationProcedure_e3daa540-3b16-4418-8c98-afc549429295": {
                    "Id": "ar_pros_DistributionsFrequencyAndCalculationProcedure_e3daa540-3b16-4418-8c98-afc549429295",
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
                "ar_pros_SourceDistributions_9a1755a5-b822-4bfe-9ae7-93e04c4b3ea8": {
                    "Id": "ar_pros_SourceDistributions_9a1755a5-b822-4bfe-9ae7-93e04c4b3ea8",
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
                "ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest_cae65034-d01a-4df9-9609-4d5708e39a2d": {
                    "Id": "ar_pros_IndicationThatThereIsNoObligationToPayPrincipalOrInterest_cae65034-d01a-4df9-9609-4d5708e39a2d",
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
                "ar_pros_IndicationThatTheTrustBondsInvestingInEnergyAndInfrastructureAreNotRedeemable_bff6a338-5021-4783-9d78-129853dbb5fd": {
                    "Id": "ar_pros_IndicationThatTheTrustBondsInvestingInEnergyAndInfrastructureAreNotRedeemable_bff6a338-5021-4783-9d78-129853dbb5fd",
                    "IdConcepto": "ar_pros_IndicationThatTheTrustBondsInvestingInEnergyAndInfrastructureAreNotRedeemable",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LocationAndPaymentOfDistributions_36f94d68-2aa5-4e3f-8f03-7e2b31236f32": {
                    "Id": "ar_pros_LocationAndPaymentOfDistributions_36f94d68-2aa5-4e3f-8f03-7e2b31236f32",
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
                "ar_pros_SerieDepositary_184558d7-ceef-4703-be4e-8319f84e9fa3": {
                    "Id": "ar_pros_SerieDepositary_184558d7-ceef-4703-be4e-8319f84e9fa3",
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
                "ar_pros_FiscalRegimeApplicable_e2af0f09-4c9b-4483-aa82-73899bef1f5a": {
                    "Id": "ar_pros_FiscalRegimeApplicable_e2af0f09-4c9b-4483-aa82-73899bef1f5a",
                    "IdConcepto": "ar_pros_FiscalRegimeApplicable",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_b3fdd8d1-6ee0-4260-a9bb-e5cd6d28d894": {
                    "Id": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_b3fdd8d1-6ee0-4260-a9bb-e5cd6d28d894",
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
                "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation_cea765c5-bec4-443f-8609-1afcf633b26a": {
                    "Id": "ar_pros_TheMentionOfAnyRiskAssociatedWithTheOperation_cea765c5-bec4-443f-8609-1afcf633b26a",
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
                "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_98faac69-0ea7-4299-aedd-8e294c033bd0": {
                    "Id": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_98faac69-0ea7-4299-aedd-8e294c033bd0",
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
                "ar_pros_LegendArticle86OfTheLMV_03782bf5-e42a-42b4-9fbe-ba41b553d313": {
                    "Id": "ar_pros_LegendArticle86OfTheLMV_03782bf5-e42a-42b4-9fbe-ba41b553d313",
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
                "ar_pros_NumberOfRegister_4c790259-55ec-423b-be86-20aec25ccdb4": {
                    "Id": "ar_pros_NumberOfRegister_4c790259-55ec-423b-be86-20aec25ccdb4",
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
                "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_ba8c4acd-e5e7-4428-a433-d22a7d38631d": {
                    "Id": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_ba8c4acd-e5e7-4428-a433-d22a7d38631d",
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
                "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_65829e1d-792b-4db0-90db-27e0a068b665": {
                    "Id": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_65829e1d-792b-4db0-90db-27e0a068b665",
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
                "ar_pros_LegendDocumentAvailableWithTheUnderwriter_8101d438-3654-4617-9ba3-15f540707774": {
                    "Id": "ar_pros_LegendDocumentAvailableWithTheUnderwriter_8101d438-3654-4617-9ba3-15f540707774",
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
                "ar_pros_ProspectusSupplementBrochure_8c8d0399-5301-4491-a70e-0d9c2e3c4c71": {
                    "Id": "ar_pros_ProspectusSupplementBrochure_8c8d0399-5301-4491-a70e-0d9c2e3c4c71",
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
                "ar_pros_LegendProspectusSupplementBrochure_eb598f60-cefd-44a7-a3bd-e82a68525269": {
                    "Id": "ar_pros_LegendProspectusSupplementBrochure_eb598f60-cefd-44a7-a3bd-e82a68525269",
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
                "ar_pros_InTheCaseOfAdditionalValues_01994ad2-1c7d-498f-a7fd-96f121094dd1": {
                    "Id": "ar_pros_InTheCaseOfAdditionalValues_01994ad2-1c7d-498f-a7fd-96f121094dd1",
                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultInTheCaseOfAdditionalValues"
                },
                "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_af8e1411-21ae-4bc9-b528-17371fdb197a": {
                    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_af8e1411-21ae-4bc9-b528-17371fdb197a",
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
                "ar_pros_TotalAmountOfSecurities_5a3901c6-d065-4270-8cd2-a0209d1c6f87": {
                    "Id": "ar_pros_TotalAmountOfSecurities_5a3901c6-d065-4270-8cd2-a0209d1c6f87",
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
                "ar_pros_TotalNumberOfValues_8ac399a0-401c-4441-b667-130743db4d95": {
                    "Id": "ar_pros_TotalNumberOfValues_8ac399a0-401c-4441-b667-130743db4d95",
                    "IdConcepto": "ar_pros_TotalNumberOfValues",
                    "IdContextoPlantilla": "cxt",
                    "Hechos": [],
                    "IdUnidadPlantilla": "moneda",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_IssuanceUnderArt13OfTheCUELegend_462cb31c-3d57-4195-8a2d-46f97073963a": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegend_462cb31c-3d57-4195-8a2d-46f97073963a",
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
                "ar_pros_PlacementProspectus_736d53ab-3e61-44ef-be0f-8b5e8da9c2a7": {
                    "Id": "ar_pros_PlacementProspectus_736d53ab-3e61-44ef-be0f-8b5e8da9c2a7",
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
                "ar_pros_ProspectusLegend_772fdcfc-70d6-432f-94e1-d02b5be2d4b5": {
                    "Id": "ar_pros_ProspectusLegend_772fdcfc-70d6-432f-94e1-d02b5be2d4b5",
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
                "ar_pros_OnlyEmission_00544bc7-5f74-4507-90ec-ee4e97d4b2cf": {
                    "Id": "ar_pros_OnlyEmission_00544bc7-5f74-4507-90ec-ee4e97d4b2cf",
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
                "ar_pros_Supplement_88294c83-15af-4934-a4bc-1ce02d41c092": {
                    "Id": "ar_pros_Supplement_88294c83-15af-4934-a4bc-1ce02d41c092",
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
                "ar_pros_SupplementLegend_54cac185-2ae3-45e9-a022-2cb2340b8924": {
                    "Id": "ar_pros_SupplementLegend_54cac185-2ae3-45e9-a022-2cb2340b8924",
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
                "ar_pros_Brochure_db748ab5-61e2-47a3-beaf-aafeb549f247": {
                    "Id": "ar_pros_Brochure_db748ab5-61e2-47a3-beaf-aafeb549f247",
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
                "ar_pros_IssuanceUnderArt13OfTheCUE_8be7128d-4bda-4bab-b1d1-f3f4fdeb59e5": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_8be7128d-4bda-4bab-b1d1-f3f4fdeb59e5",
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
                "ar_pros_LimitedPublicOffering_f5377c78-d43d-47dd-8d1e-8b25fb41ede2": {
                    "Id": "ar_pros_LimitedPublicOffering_f5377c78-d43d-47dd-8d1e-8b25fb41ede2",
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
                "ar_pros_TypeOfInstrument_89d9b6ca-3d27-464d-8ce6-1e834fdde682": {
                    "Id": "ar_pros_TypeOfInstrument_89d9b6ca-3d27-464d-8ce6-1e834fdde682",
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
                "ar_pros_ForeingIssuer_1564dce6-2257-41dd-9937-fa3e328921e3": {
                    "Id": "ar_pros_ForeingIssuer_1564dce6-2257-41dd-9937-fa3e328921e3",
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
                "ar_pros_MentioningwhetherOrNotHaveCollateral_cd534a1a-4d94-44fd-91ef-cddca23da1c0": {
                    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_cd534a1a-4d94-44fd-91ef-cddca23da1c0",
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
                "ar_pros_MentioningPartialOrTotalDependencePros_f9c6dc31-773f-4fca-a1cb-d55230b3fe41": {
                    "Id": "ar_pros_MentioningPartialOrTotalDependencePros_f9c6dc31-773f-4fca-a1cb-d55230b3fe41",
                    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                    "IdContextoPlantilla": "cxt",
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