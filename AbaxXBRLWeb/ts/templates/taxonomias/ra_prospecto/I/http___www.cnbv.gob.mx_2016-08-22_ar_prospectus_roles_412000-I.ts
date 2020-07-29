///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-I
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_I implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_I
         */
        constructor() {

            this.ListadoDeFormulas = {

                'No_Vacios_Datos_Generales_ar_pros_MentionOfBeOptionalTitlesEitherBuyingOrSelling': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_MentionOfBeOptionalTitlesEitherBuyingOrSelling',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MentionOfBeOptionalTitlesEitherBuyingOrSelling',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TheMentionOfBeingPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TheMentionOfBeingPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TheMentionOfBeingPublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_DenominationOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_DenominationOfTheIssuer',
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
                'No_Vacios_Datos_Generales_ar_pros_NumberAndCharacteristicsOfTheTitles': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_NumberAndCharacteristicsOfTheTitles',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberAndCharacteristicsOfTheTitles',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_ValueOfTheWarrants': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_ValueOfTheWarrants',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ValueOfTheWarrants',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TotalAmountOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TotalAmountOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_PeriodOrDateOfTheOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_PeriodOrDateOfTheOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PeriodOrDateOfTheOffer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_DateOfRegisterInTheStockExchange': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_DateOfRegisterInTheStockExchange',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DateOfRegisterInTheStockExchange',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_SerieIssuanceDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_SerieIssuanceDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SerieIssuanceDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement',
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
                'No_Vacios_Datos_Generales_ar_pros_SettlementDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_SettlementDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SettlementDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_PlaceOfIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_PlaceOfIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PlaceOfIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_NumberOfLicensedTitlesToCirculate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_NumberOfLicensedTitlesToCirculate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberOfLicensedTitlesToCirculate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TermOfTheIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TermOfTheIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TermOfTheIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TypeOfExercise': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TypeOfExercise',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfExercise',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_ExerciseDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_ExerciseDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExerciseDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_ReferenceValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_ReferenceValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ReferenceValues',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_MinimumNumberOfWarrantsToExercise': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_MinimumNumberOfWarrantsToExercise',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MinimumNumberOfWarrantsToExercise',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_SerieTicker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_SerieTicker',
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
                'No_Vacios_Datos_Generales_ar_pros_GenericListOfPossibleAcquirersAndPotentialLimitations': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_GenericListOfPossibleAcquirersAndPotentialLimitations',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_GenericListOfPossibleAcquirersAndPotentialLimitations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_LegalBasisOfTheTaxRegimeApplicable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_LegalBasisOfTheTaxRegimeApplicable',
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
                'No_Vacios_Datos_Generales_ar_pros_PlaceAndFormOfSettlement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_PlaceAndFormOfSettlement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PlaceAndFormOfSettlement',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_NumberAndTickerSymbolOfTheSame': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_NumberAndTickerSymbolOfTheSame',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberAndTickerSymbolOfTheSame',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_PricePerBatch': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_PricePerBatch',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PricePerBatch',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_InCaseIntrinsicValue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_InCaseIntrinsicValue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InCaseIntrinsicValue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_NumberOfTitlesInTheSeries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_NumberOfTitlesInTheSeries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NumberOfTitlesInTheSeries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_DescriptionOfTheRightsGrantedToHoldersOfWarrants': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_DescriptionOfTheRightsGrantedToHoldersOfWarrants',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfTheRightsGrantedToHoldersOfWarrants',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TheEffectsOfTheReferenceValuesOnOptionalTitles': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TheEffectsOfTheReferenceValuesOnOptionalTitles',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TheEffectsOfTheReferenceValuesOnOptionalTitles',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV',
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
                'No_Vacios_Datos_Generales_ar_pros_LegendArticle86OfTheLMV': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_LegendArticle86OfTheLMV',
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
                'No_Vacios_Datos_Generales_ar_pros_NumberOfRegister': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_NumberOfRegister',
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
                'No_Vacios_Datos_Generales_ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus',
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
                'No_Vacios_Datos_Generales_ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission',
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
                'No_Vacios_Datos_Generales_ar_pros_LegendDocumentAvailableWithTheUnderwriter': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_LegendDocumentAvailableWithTheUnderwriter',
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
                'No_Vacios_Datos_Generales_ar_pros_ProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_ProspectusSupplementBrochure',
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
                'No_Vacios_Datos_Generales_ar_pros_LegendProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_LegendProspectusSupplementBrochure',
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
                'No_Vacios_Datos_Generales_ar_pros_IssuanceUnderArt13OfTheCUELegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_IssuanceUnderArt13OfTheCUELegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuanceUnderArt13OfTheCUELegend',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TypeOfOffer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TypeOfOffer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfOffer',
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
                'ExistenciaParticipantesOferta': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaParticipantesOferta',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Nombre participante" de "Participantes en la oferta" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Nombre participante" de "Participantes en la oferta" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ParticipantName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
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
                'ExistenciaRelacionInversionista': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaRelacionInversionista',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'El concepto "Relación con inversionista" de la tabla "Relación con inversionistas" debe existir y ser reportado una sola vez.',
                        MensajeError: 'El concepto "Relación con inversionista" de la tabla "Relación con inversionistas" debe existir y ser reportado una sola vez.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InvestorName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_PlacementProspectus': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_PlacementProspectus',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PlacementProspectus',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_ProspectusLegend',
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
                'No_Vacios_Datos_Generales_ar_pros_OnlyEmission': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_OnlyEmission',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OnlyEmission',
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
                "ar_pros_MentionOfBeOptionalTitlesEitherBuyingOrSelling_8369788f-388f-4926-ab4a-ea01df6ae058": {
                    "Id": "ar_pros_MentionOfBeOptionalTitlesEitherBuyingOrSelling_8369788f-388f-4926-ab4a-ea01df6ae058",
                    "IdConcepto": "ar_pros_MentionOfBeOptionalTitlesEitherBuyingOrSelling",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfBeingPublicOffering_9999efcb-6e8f-4d82-a39b-1596a6e536cf": {
                    "Id": "ar_pros_TheMentionOfBeingPublicOffering_9999efcb-6e8f-4d82-a39b-1596a6e536cf",
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
                "ar_pros_TypeOfOffer_70f8b7da-a151-4361-a7a2-10a792971186": {
                    "Id": "ar_pros_TypeOfOffer_70f8b7da-a151-4361-a7a2-10a792971186",
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
                "ar_pros_DenominationOfTheIssuer_d5a8f37e-d7e1-40f9-8283-d97db5b97dc8": {
                    "Id": "ar_pros_DenominationOfTheIssuer_d5a8f37e-d7e1-40f9-8283-d97db5b97dc8",
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
                "ar_pros_NumberAndCharacteristicsOfTheTitles_5f4df6f5-8ada-429f-8b8a-ee43bf69665d": {
                    "Id": "ar_pros_NumberAndCharacteristicsOfTheTitles_5f4df6f5-8ada-429f-8b8a-ee43bf69665d",
                    "IdConcepto": "ar_pros_NumberAndCharacteristicsOfTheTitles",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ValueOfTheWarrants_21dfecf8-d688-4bd7-b2d7-08b3ffb090b7": {
                    "Id": "ar_pros_ValueOfTheWarrants_21dfecf8-d688-4bd7-b2d7-08b3ffb090b7",
                    "IdConcepto": "ar_pros_ValueOfTheWarrants",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalAmountOfTheOffer_15e9d46e-ead7-4133-a2f5-36537b4d4f84": {
                    "Id": "ar_pros_TotalAmountOfTheOffer_15e9d46e-ead7-4133-a2f5-36537b4d4f84",
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
                "ar_pros_PeriodOrDateOfTheOffer_c24b3087-414f-4ddc-ab72-c3ab971994af": {
                    "Id": "ar_pros_PeriodOrDateOfTheOffer_c24b3087-414f-4ddc-ab72-c3ab971994af",
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
                "ar_pros_DateOfRegisterInTheStockExchange_5a18a27d-ea7c-4445-ac19-aeb010b058f0": {
                    "Id": "ar_pros_DateOfRegisterInTheStockExchange_5a18a27d-ea7c-4445-ac19-aeb010b058f0",
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
                "ar_pros_SerieIssuanceDate_b8cafef7-f722-4b8a-b6f9-4a07d6abf8af": {
                    "Id": "ar_pros_SerieIssuanceDate_b8cafef7-f722-4b8a-b6f9-4a07d6abf8af",
                    "IdConcepto": "ar_pros_SerieIssuanceDate",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultSerieIssuanceDate"
                },
                "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_89aa9f53-9d04-47ee-8834-f8f630a039df": {
                    "Id": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_89aa9f53-9d04-47ee-8834-f8f630a039df",
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
                "ar_pros_SettlementDate_db305069-db34-4bcf-90c8-e00124da069f": {
                    "Id": "ar_pros_SettlementDate_db305069-db34-4bcf-90c8-e00124da069f",
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
                "ar_pros_PlaceOfIssue_cd90b28b-b50a-4632-98b9-e1529023b8bc": {
                    "Id": "ar_pros_PlaceOfIssue_cd90b28b-b50a-4632-98b9-e1529023b8bc",
                    "IdConcepto": "ar_pros_PlaceOfIssue",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NumberOfLicensedTitlesToCirculate_c2e33e03-12ca-42ef-b8a5-fdd21fdfbe8f": {
                    "Id": "ar_pros_NumberOfLicensedTitlesToCirculate_c2e33e03-12ca-42ef-b8a5-fdd21fdfbe8f",
                    "IdConcepto": "ar_pros_NumberOfLicensedTitlesToCirculate",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TermOfTheIssue_288bfc75-4c36-4c65-9907-8c96c96bcec2": {
                    "Id": "ar_pros_TermOfTheIssue_288bfc75-4c36-4c65-9907-8c96c96bcec2",
                    "IdConcepto": "ar_pros_TermOfTheIssue",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TypeOfExercise_a054f4e2-3a1b-4d91-a0ac-82e939cbeba2": {
                    "Id": "ar_pros_TypeOfExercise_a054f4e2-3a1b-4d91-a0ac-82e939cbeba2",
                    "IdConcepto": "ar_pros_TypeOfExercise",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ExerciseDate_d2af762b-b90f-4d4e-a909-6ee0abd07178": {
                    "Id": "ar_pros_ExerciseDate_d2af762b-b90f-4d4e-a909-6ee0abd07178",
                    "IdConcepto": "ar_pros_ExerciseDate",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultExerciseDate"
                },
                "ar_pros_ReferenceValues_572f0510-c0b3-478d-a5d7-05f0b660dafe": {
                    "Id": "ar_pros_ReferenceValues_572f0510-c0b3-478d-a5d7-05f0b660dafe",
                    "IdConcepto": "ar_pros_ReferenceValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MinimumNumberOfWarrantsToExercise_6d75adf0-324b-4af3-ba29-a6d61e8ff252": {
                    "Id": "ar_pros_MinimumNumberOfWarrantsToExercise_6d75adf0-324b-4af3-ba29-a6d61e8ff252",
                    "IdConcepto": "ar_pros_MinimumNumberOfWarrantsToExercise",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_SerieTicker_158d6287-e82a-4e0a-9a71-19e1ecaaa6ba": {
                    "Id": "ar_pros_SerieTicker_158d6287-e82a-4e0a-9a71-19e1ecaaa6ba",
                    "IdConcepto": "ar_pros_SerieTicker",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_GenericListOfPossibleAcquirersAndPotentialLimitations_40eb6848-d19b-4ee1-ada4-3fa5802dc025": {
                    "Id": "ar_pros_GenericListOfPossibleAcquirersAndPotentialLimitations_40eb6848-d19b-4ee1-ada4-3fa5802dc025",
                    "IdConcepto": "ar_pros_GenericListOfPossibleAcquirersAndPotentialLimitations",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LegalBasisOfTheTaxRegimeApplicable_382d358d-3c9a-4d9d-8bd3-c50bf1dd6b88": {
                    "Id": "ar_pros_LegalBasisOfTheTaxRegimeApplicable_382d358d-3c9a-4d9d-8bd3-c50bf1dd6b88",
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
                "ar_pros_PlaceAndFormOfSettlement_dc0f981f-690c-46cb-b189-668cf771a357": {
                    "Id": "ar_pros_PlaceAndFormOfSettlement_dc0f981f-690c-46cb-b189-668cf771a357",
                    "IdConcepto": "ar_pros_PlaceAndFormOfSettlement",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NumberAndTickerSymbolOfTheSame_308d7c84-a0c2-4c65-aef8-6a5a4c7d0de4": {
                    "Id": "ar_pros_NumberAndTickerSymbolOfTheSame_308d7c84-a0c2-4c65-aef8-6a5a4c7d0de4",
                    "IdConcepto": "ar_pros_NumberAndTickerSymbolOfTheSame",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IssueFee_36ac9e53-41f2-4701-9b3a-95f42b910b06": {
                    "Id": "ar_pros_IssueFee_36ac9e53-41f2-4701-9b3a-95f42b910b06",
                    "IdConcepto": "ar_pros_IssueFee",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ExercisePrice_90b6a687-af16-42c6-bc63-e68e37e45fb6": {
                    "Id": "ar_pros_ExercisePrice_90b6a687-af16-42c6-bc63-e68e37e45fb6",
                    "IdConcepto": "ar_pros_ExercisePrice",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_PricePerBatch_e4deff85-0a02-4815-801f-b98e27d22dbe": {
                    "Id": "ar_pros_PricePerBatch_e4deff85-0a02-4815-801f-b98e27d22dbe",
                    "IdConcepto": "ar_pros_PricePerBatch",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_InCaseIntrinsicValue_492fd552-dd33-47fb-bf27-1fba2c28ad63": {
                    "Id": "ar_pros_InCaseIntrinsicValue_492fd552-dd33-47fb-bf27-1fba2c28ad63",
                    "IdConcepto": "ar_pros_InCaseIntrinsicValue",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NumberOfTitlesInTheSeries_d50a27d5-f71c-4b69-9b5e-65b566134f9c": {
                    "Id": "ar_pros_NumberOfTitlesInTheSeries_d50a27d5-f71c-4b69-9b5e-65b566134f9c",
                    "IdConcepto": "ar_pros_NumberOfTitlesInTheSeries",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_PeriodOfValidity_2fe69c53-709e-48e5-928d-2ae0604f7dba": {
                    "Id": "ar_pros_PeriodOfValidity_2fe69c53-709e-48e5-928d-2ae0604f7dba",
                    "IdConcepto": "ar_pros_PeriodOfValidity",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DescriptionOfTheRightsGrantedToHoldersOfWarrants_e9fda2cb-05cb-43b0-a4df-7f1afa9ae119": {
                    "Id": "ar_pros_DescriptionOfTheRightsGrantedToHoldersOfWarrants_e9fda2cb-05cb-43b0-a4df-7f1afa9ae119",
                    "IdConcepto": "ar_pros_DescriptionOfTheRightsGrantedToHoldersOfWarrants",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheEffectsOfTheReferenceValuesOnOptionalTitles_c20c5f1b-fc4f-45a5-be08-1b99ae600f3b": {
                    "Id": "ar_pros_TheEffectsOfTheReferenceValuesOnOptionalTitles_c20c5f1b-fc4f-45a5-be08-1b99ae600f3b",
                    "IdConcepto": "ar_pros_TheEffectsOfTheReferenceValuesOnOptionalTitles",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ExtraordinaryEvents_bd349b36-af4f-4835-9962-e1f2c9d1d3f2": {
                    "Id": "ar_pros_ExtraordinaryEvents_bd349b36-af4f-4835-9962-e1f2c9d1d3f2",
                    "IdConcepto": "ar_pros_ExtraordinaryEvents",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PotentialAcquirers_d402ed26-8195-496c-9691-04add987557e": {
                    "Id": "ar_pros_PotentialAcquirers_d402ed26-8195-496c-9691-04add987557e",
                    "IdConcepto": "ar_pros_PotentialAcquirers",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PossibleLimitations_80bab3de-443d-4514-a925-50f8b0ab4c90": {
                    "Id": "ar_pros_PossibleLimitations_80bab3de-443d-4514-a925-50f8b0ab4c90",
                    "IdConcepto": "ar_pros_PossibleLimitations",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TypeOfInvestorToWhichItIsAddressed_bc5a2acc-cd90-4561-b96b-3ed19288c010": {
                    "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_bc5a2acc-cd90-4561-b96b-3ed19288c010",
                    "IdConcepto": "ar_pros_TypeOfInvestorToWhichItIsAddressed",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_c15d57b9-e345-40ef-af7a-342b4ac03e99": {
                    "Id": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_c15d57b9-e345-40ef-af7a-342b4ac03e99",
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
                "ar_pros_LegendArticle86OfTheLMV_c49dd6b6-2822-4d14-8fb2-a26248545256": {
                    "Id": "ar_pros_LegendArticle86OfTheLMV_c49dd6b6-2822-4d14-8fb2-a26248545256",
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
                "ar_pros_NumberOfRegister_cb06c101-22ee-4516-b8ff-a3561b47b0aa": {
                    "Id": "ar_pros_NumberOfRegister_cb06c101-22ee-4516-b8ff-a3561b47b0aa",
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
                "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_102cc190-d640-499f-b69f-db7a35bdbefb": {
                    "Id": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_102cc190-d640-499f-b69f-db7a35bdbefb",
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
                "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_6c51c5d5-713e-45b1-9e88-09137fa75c5b": {
                    "Id": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_6c51c5d5-713e-45b1-9e88-09137fa75c5b",
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
                "ar_pros_LegendDocumentAvailableWithTheUnderwriter_dc72ac1e-4b6a-4568-84d3-f4c2cd1c140e": {
                    "Id": "ar_pros_LegendDocumentAvailableWithTheUnderwriter_dc72ac1e-4b6a-4568-84d3-f4c2cd1c140e",
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
                "ar_pros_ProspectusSupplementBrochure_9090baea-11fa-49aa-9086-f68cf046275b": {
                    "Id": "ar_pros_ProspectusSupplementBrochure_9090baea-11fa-49aa-9086-f68cf046275b",
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
                "ar_pros_LegendProspectusSupplementBrochure_38f4062f-55f7-43fd-94e3-9ad18bcb7ac7": {
                    "Id": "ar_pros_LegendProspectusSupplementBrochure_38f4062f-55f7-43fd-94e3-9ad18bcb7ac7",
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
                "ar_pros_IssuanceUnderArt13OfTheCUELegend_38f4062f-55f7-43fd-94e3-9ad18bcb7ac8": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegend_38f4062f-55f7-43fd-94e3-9ad18bcb7ac8",
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
                "ar_pros_PlacementProspectus_b4d791c4-58aa-4802-aa85-d117b8516e90": {
                    "Id": "ar_pros_PlacementProspectus_b4d791c4-58aa-4802-aa85-d117b8516e90",
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
                "ar_pros_ProspectusLegend_4a075a63-1e2b-4637-9476-c7a909135e61": {
                    "Id": "ar_pros_ProspectusLegend_4a075a63-1e2b-4637-9476-c7a909135e61",
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
                "ar_pros_OnlyEmission_9dddb84e-cb6f-486c-8a99-95da40f47500": {
                    "Id": "ar_pros_OnlyEmission_9dddb84e-cb6f-486c-8a99-95da40f47500",
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
                "ar_pros_LimitedPublicOffering_7f77ca50-de67-4d8b-9ee6-7382f641187b": {
                    "Id": "ar_pros_LimitedPublicOffering_7f77ca50-de67-4d8b-9ee6-7382f641187b",
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
                "ar_pros_ForeingIssuer_6175fbd4-9544-4a24-a0ef-6d64251179a6": {
                    "Id": "ar_pros_ForeingIssuer_6175fbd4-9544-4a24-a0ef-6d64251179a6",
                    "IdConcepto": "ar_pros_ForeingIssuer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultForeingIssuer"
                }
            };
        }
    }
}