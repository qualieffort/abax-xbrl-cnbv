///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-NBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_NBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_NBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Reporte_Anual_ar_pros_AnnualReport': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Reporte_Anual_ar_pros_AnnualReport',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'variable1 == "Anexo N Bis 3"',
                        MensajeExito: 'El valor del hecho {variable1} es igual a "Anexo N Bis 3"',
                        MensajeError: 'El valor del hecho {variable1} debe ser igual a "Anexo N Bis 3"',
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
                ),
                                
                /*fin de datos generales*/


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
                'Portada_No_Vacios_ar_pros_AddressOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_AddressOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AddressOfTheSettlor',
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
                'Portada_No_Vacios_ar_pros_OutstandingEstateTrustBonds': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_OutstandingEstateTrustBonds',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OutstandingEstateTrustBonds',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_TrustBondsInTreasury': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_TrustBondsInTreasury',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TrustBondsInTreasury',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Portada_No_Vacios_ar_pros_NameOfTheStockExchangesWhereTheyAreRegistered': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_NameOfTheStockExchangesWhereTheyAreRegistered',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTheStockExchangesWhereTheyAreRegistered',
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
                'Portada_No_Vacios_ar_pros_DebtLevel': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Portada_No_Vacios_ar_pros_DebtLevel',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DebtLevel',
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
                )          
            };

            this.ContextosPlantillaPorId = {
  "ctx": {
    "Id": "ctx",
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
  "ar_pros_IssuerLogo_959862e7-5a9f-42b3-952e-e9ff629a4dcf": {
    "Id": "ar_pros_IssuerLogo_959862e7-5a9f-42b3-952e-e9ff629a4dcf",
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
  "ar_pros_NameOfTrustee_993711f7-1c17-47f1-9cbd-df5b7e545690": {
    "Id": "ar_pros_NameOfTrustee_993711f7-1c17-47f1-9cbd-df5b7e545690",
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
  "ar_pros_AdressOfTheIssuer_7358ec9a-6f51-4d5c-9ff1-b7ea09069089": {
    "Id": "ar_pros_AdressOfTheIssuer_7358ec9a-6f51-4d5c-9ff1-b7ea09069089",
    "IdConcepto": "ar_pros_AdressOfTheIssuer",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LogoOfTheSettlor_cdd52205-6b50-4bf2-b801-5ef06f041370": {
    "Id": "ar_pros_LogoOfTheSettlor_cdd52205-6b50-4bf2-b801-5ef06f041370",
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
  "ar_pros_NameOfTheSettlor_e5d15aaa-cde1-4c3c-8073-bce5dfa387c1": {
    "Id": "ar_pros_NameOfTheSettlor_e5d15aaa-cde1-4c3c-8073-bce5dfa387c1",
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
  "ar_pros_AddressOfTheSettlor_db6a217a-1e02-4d94-b4a1-49f1f213b3df": {
    "Id": "ar_pros_AddressOfTheSettlor_db6a217a-1e02-4d94-b4a1-49f1f213b3df",
    "IdConcepto": "ar_pros_AddressOfTheSettlor",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Ticker_d5153bee-59df-4381-9f66-5905d2752e62": {
    "Id": "ar_pros_Ticker_d5153bee-59df-4381-9f66-5905d2752e62",
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
  "ar_pros_OutstandingEstateTrustBonds_6fb41053-6686-4e0f-a011-8058584cc839": {
    "Id": "ar_pros_OutstandingEstateTrustBonds_6fb41053-6686-4e0f-a011-8058584cc839",
    "IdConcepto": "ar_pros_OutstandingEstateTrustBonds",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_TrustBondsInTreasury_52912044-ae53-4d38-99fc-0e5ce9975238": {
    "Id": "ar_pros_TrustBondsInTreasury_52912044-ae53-4d38-99fc-0e5ce9975238",
    "IdConcepto": "ar_pros_TrustBondsInTreasury",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_NameOfTheStockExchangesWhereTheyAreRegistered_d0d6fcc4-420e-4d22-ad79-772358cd03f4": {
    "Id": "ar_pros_NameOfTheStockExchangesWhereTheyAreRegistered_d0d6fcc4-420e-4d22-ad79-772358cd03f4",
    "IdConcepto": "ar_pros_NameOfTheStockExchangesWhereTheyAreRegistered",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NumberOfTrust_8e1f8fe4-e948-4fd0-b072-13b64d82db14": {
    "Id": "ar_pros_NumberOfTrust_8e1f8fe4-e948-4fd0-b072-13b64d82db14",
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
  "ar_pros_DataRelatingToTheIndenture_744c61b7-827e-4707-8198-bba129c2ef81": {
    "Id": "ar_pros_DataRelatingToTheIndenture_744c61b7-827e-4707-8198-bba129c2ef81",
    "IdConcepto": "ar_pros_DataRelatingToTheIndenture",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrusteesInFirstPlace_a9371942-9c71-48ac-bf56-097416481213": {
    "Id": "ar_pros_TrusteesInFirstPlace_a9371942-9c71-48ac-bf56-097416481213",
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
  "ar_pros_TrusteesInSecondPlace_fe2502bc-84c7-4957-9fad-4efe6fa9448c": {
    "Id": "ar_pros_TrusteesInSecondPlace_fe2502bc-84c7-4957-9fad-4efe6fa9448c",
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
  "ar_pros_TrusteesInThirdPlace_809d838a-ba69-49ed-9e47-d3bb733cbb62": {
    "Id": "ar_pros_TrusteesInThirdPlace_809d838a-ba69-49ed-9e47-d3bb733cbb62",
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
  "ar_pros_OtherTrustees_ca7a66c7-9245-4108-a5d6-cda3283081d2": {
    "Id": "ar_pros_OtherTrustees_ca7a66c7-9245-4108-a5d6-cda3283081d2",
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
  "ar_pros_TrustEstateManager_3471411c-a8b6-4310-926e-47b441e7152b": {
    "Id": "ar_pros_TrustEstateManager_3471411c-a8b6-4310-926e-47b441e7152b",
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
  "ar_pros_AdvisoryOfTheTrust_80f2c333-b7f9-4647-88ff-de26c7b5a94f": {
    "Id": "ar_pros_AdvisoryOfTheTrust_80f2c333-b7f9-4647-88ff-de26c7b5a94f",
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
  "ar_pros_IndicationOfAnyOtherRelevantThirdParties_eeabd19d-ff3e-4648-a6c4-0dcd5cf36f3b": {
    "Id": "ar_pros_IndicationOfAnyOtherRelevantThirdParties_eeabd19d-ff3e-4648-a6c4-0dcd5cf36f3b",
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
  "ar_pros_SummaryOfTheMostImportantCharacteristics_df864a80-648f-4a5f-aa72-8313cdcb06a9": {
    "Id": "ar_pros_SummaryOfTheMostImportantCharacteristics_df864a80-648f-4a5f-aa72-8313cdcb06a9",
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
  "ar_pros_DistributionsFrequencyAndCalculationProcedure_ba5c13bc-c743-437b-8c18-d7b1e2779c58": {
    "Id": "ar_pros_DistributionsFrequencyAndCalculationProcedure_ba5c13bc-c743-437b-8c18-d7b1e2779c58",
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
  "ar_pros_SourceOfTheDistributions_42b7ab56-4e88-4834-8874-9904691caaea": {
    "Id": "ar_pros_SourceOfTheDistributions_42b7ab56-4e88-4834-8874-9904691caaea",
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
  "ar_pros_DebtLevel_9c716b93-ece0-42bd-8497-4dd2589db0bd": {
    "Id": "ar_pros_DebtLevel_9c716b93-ece0-42bd-8497-4dd2589db0bd",
    "IdConcepto": "ar_pros_DebtLevel",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_CoverageRatioOfDebtService_30eb3900-a3a9-460f-8789-6d9cb30b91a2": {
    "Id": "ar_pros_CoverageRatioOfDebtService_30eb3900-a3a9-460f-8789-6d9cb30b91a2",
    "IdConcepto": "ar_pros_CoverageRatioOfDebtService",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": "moneda",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal_08643d1f-a329-496f-8e48-32cd65a9d46d": {
    "Id": "ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal_08643d1f-a329-496f-8e48-32cd65a9d46d",
    "IdConcepto": "ar_pros_IndicationThatThereIsNoObligationToPayThePrincipal",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IndicationThatRealEstateTrustBondsAreNotRedeemable_b2d0a5aa-e452-4093-96d8-d1561352d6f2": {
    "Id": "ar_pros_IndicationThatRealEstateTrustBondsAreNotRedeemable_b2d0a5aa-e452-4093-96d8-d1561352d6f2",
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
  "ar_pros_LocationAndPaymentOfDistributions_a17cdc52-5361-441e-a1a9-99fefe16ae1e": {
    "Id": "ar_pros_LocationAndPaymentOfDistributions_a17cdc52-5361-441e-a1a9-99fefe16ae1e",
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
  "ar_pros_NameOfTheCommonRepresentative_76094483-c89d-4adf-adc5-21c7a9c1a5f9": {
    "Id": "ar_pros_NameOfTheCommonRepresentative_76094483-c89d-4adf-adc5-21c7a9c1a5f9",
    "IdConcepto": "ar_pros_NameOfTheCommonRepresentative",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SerieDepositary_02170f98-4542-4ae0-be98-72db86896ebc": {
    "Id": "ar_pros_SerieDepositary_02170f98-4542-4ae0-be98-72db86896ebc",
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
  "ar_pros_SerieTaxRegime_0dc830c9-cc48-4484-8005-dcd2a4aea631": {
    "Id": "ar_pros_SerieTaxRegime_0dc830c9-cc48-4484-8005-dcd2a4aea631",
    "IdConcepto": "ar_pros_SerieTaxRegime",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_WhereAppropriateValuatotyOpinion_db0a3c5f-ef07-402e-ae64-6f268399f3b0": {
    "Id": "ar_pros_WhereAppropriateValuatotyOpinion_db0a3c5f-ef07-402e-ae64-6f268399f3b0",
    "IdConcepto": "ar_pros_WhereAppropriateValuatotyOpinion",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered_76b043e0-7881-46a9-8073-d5b4a5ccd1e4": {
    "Id": "ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered_76b043e0-7881-46a9-8073-d5b4a5ccd1e4",
    "IdConcepto": "ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTheMentionThatTheValuesOfTheIssuerAreRegistered"
  },
  "ar_pros_Article86LegendOfTheLmv_9ba74dc8-00da-4621-a54f-d64a453f7e90": {
    "Id": "ar_pros_Article86LegendOfTheLmv_9ba74dc8-00da-4621-a54f-d64a453f7e90",
    "IdConcepto": "ar_pros_Article86LegendOfTheLmv",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultArticle86LegendOfTheLmv"
  },
  "ar_pros_AnnualReportCueLegend_c3683e89-9b0a-492c-93e8-f9e3cb2a9074": {
    "Id": "ar_pros_AnnualReportCueLegend_c3683e89-9b0a-492c-93e8-f9e3cb2a9074",
    "IdConcepto": "ar_pros_AnnualReportCueLegend",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultAnnualReportCueLegend"
  },
  "ar_pros_PeriodRepresenting_afb81ba4-da9f-4a3d-9a92-d5426a5567a8": {
    "Id": "ar_pros_PeriodRepresenting_afb81ba4-da9f-4a3d-9a92-d5426a5567a8",
    "IdConcepto": "ar_pros_PeriodRepresenting",
    "IdContextoPlantilla": "ctx",
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