///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/annext/roles/301100
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_annext_roles_301100 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_annext_roles_301100
         */
        constructor() {
            this.ListadoDeFormulas = {

                'Assertions_No_Numericos_No_Vaciosannext_CorporateNameOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_CorporateNameOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_CorporateNameOfTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_Ticker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_ContractNumberOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_ContractNumberOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_ContractNumberOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_Series': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_Series',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_Series',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_DenominationOfTheIssue': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_DenominationOfTheIssue',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_DenominationOfTheIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_ReportedMonth': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_ReportedMonth',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_ReportedMonth',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_GuarantorOrAval': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_GuarantorOrAval',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_GuarantorOrAval',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Vacio_annext_GuarantorAndGuaranteeName_Si_GuarantorOrAval_Es_Si': new model.DefinicionFormula().deserialize({
                    Id: 'Assertions_No_Vacio_annext_GuarantorAndGuaranteeName_Si_GuarantorOrAval_Es_Si',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                    MensajeExito: 'El concepto "Garante (s) y/o Aval (es)" es "SI" y la longitud del texto contenido en el hecho del concepto "Denominación del Garante (s) y/o Aval (es)" es mayor a 0 caracteres o el concepto "Garante (s) y/o Aval (es)" es "NO"',
                    MensajeError: 'La longitud del texto contenido en el hecho del concepto "Denominación del Garante (s) y/o Aval (es)" debería ser mayor a 0 caracteres cuando el valor del hecho "Garante (s) y/o Aval (es)" es "SI"',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_GuarantorAndGuaranteeName',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_GuarantorOrAval',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                    }
                }),
                'Assertions_No_Vacio_annext_TypeOfGuarantee_Si_GuarantorOrAval_Es_Si': new model.DefinicionFormula().deserialize({
                    Id: 'Assertions_No_Vacio_annext_TypeOfGuarantee_Si_GuarantorOrAval_Es_Si',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                    MensajeExito: 'El concepto "Garante (s) y/o Aval (es)" es "SI" y la longitud del texto contenido en el hecho del concepto "Tipo de Garantía" es mayor a 0 caracteres o el concepto "Garante (s) y/o Aval (es)" es "NO"',
                    MensajeError: 'La longitud del texto contenido en el hecho del concepto "Tipo de Garantía" debería ser mayor a 0 caracteres cuando el valor del hecho "Garante (s) y/o Aval (es)" es "SI"',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_TypeOfGuarantee',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_GuarantorOrAval',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                    }
                }),
                'Assertions_No_Numericos_No_Vaciosannext_MasterAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_MasterAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_MasterAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Assertions_No_Vacio_annext_DenominationoftheMasterAdministrator_Si_MasterAdministrator_Es_Si': new model.DefinicionFormula().deserialize({
                    Id: 'Assertions_No_Vacio_annext_DenominationoftheMasterAdministrator_Si_MasterAdministrator_Es_Si',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                    MensajeExito: 'El concepto "Administrador Maestro" es "SI" y la longitud del texto contenido en el hecho del concepto "Denominación del Administrador Maestro" es mayor a 0 caracteres o el concepto "Administrador Maestro" es "NO"',
                    MensajeError: 'La longitud del texto contenido en el hecho del concepto "Denominación del Administrador Maestro" debería ser mayor a 0 caracteres cuando el valor del hecho "Administrador Maestro" es "SI"',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_DenominationoftheMasterAdministrator',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_MasterAdministrator',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                    }
                }),

                'Assertions_No_Numericos_No_Vaciosannext_AdministratorOrOperator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_AdministratorOrOperator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_AdministratorOrOperator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_CommonRepresentative': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_CommonRepresentative',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_CommonRepresentative',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_Overcollateralization': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_Overcollateralization',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_Overcollateralization',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_LevelOfRoundingUsed': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_LevelOfRoundingUsed',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_LevelOfRoundingUsed',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_TheWeightedAverageInterestRateOfThePortfolioDisclosure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_TheWeightedAverageInterestRateOfThePortfolioDisclosure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_TheWeightedAverageInterestRateOfThePortfolioDisclosure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_NPLRatioDisclosure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_NPLRatioDisclosure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_NPLRatioDisclosure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Assertions_No_Numericos_No_Vaciosannext_RateOfPrepaymentDisclosure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Assertions_No_Numericos_No_Vaciosannext_RateOfPrepaymentDisclosure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_RateOfPrepaymentDisclosure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'TotalSaldoInsolutoDeLaEmisionAlFinal': new model.DefinicionFormula().deserialize (
                    {
                        Id: 'TotalSaldoInsolutoDeLaEmisionAlFinal',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del {variable2}.',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a la suma del {variable2}.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_OutstandingBalanceOfTheIssueAtEndOfPeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "0"
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: "0",
                                EsDinamica: true,
                                FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis',
                                    IdDimension: 'annext_SerieTypedAxis',
                                    CualquierMiembro: true
                                }]
                            }),
                        }
                    }
                ),
                'formula2_existe_annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula2_existe_annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) > 0',
                        MensajeExito: 'Debe existir al menos un hecho  del concepto "Detalle de saldo insoluto de la emisión al final del periodo".',
                        MensajeError: 'Debería existir al menos un hecho del concepto concepto "Detalle de saldo insoluto de la emisión al final del periodo".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'formula2_existe_annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula2_existe_annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) > 0',
                        MensajeExito: 'Debe existir al menos un hecho  del concepto "Detalle de monto de intereses pagados a los tenedores de títulos fiduciarios".',
                        MensajeError: 'Debería existir al menos un hecho del concepto concepto "Detalle de monto de intereses pagados a los tenedores de títulos fiduciarios".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'formula2_existe_annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula2_existe_annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) > 0',
                        MensajeExito: 'Debe existir al menos un hecho  del concepto "Detalle de monto pagado por amortización a los tenedores de títulos fiduciarios".',
                        MensajeError: 'Debería existir al menos un hecho del concepto concepto "Detalle de monto pagado por amortización a los tenedores de títulos fiduciarios".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'Monto_Sobrecolateral': new model.DefinicionFormula().deserialize({
                        Id: 'Monto_Sobrecolateral',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((variable2 == "SI") and (bignumber(variable1) == (bignumber(variable3) + bignumber(variable4) + bignumber(variable5) + bignumber(variable6) ' +
                        ' - bignumber(variable7) - bignumber(variable8) - bignumber(variable9) - bignumber(variable10) - bignumber(variable11) - bignumber(variable12)))) ' +
                        'or (variable2 == "NO")',
                        MensajeExito: 'El hecho reportado para el concepto "Sobrecolateral" tiene el valor "No", de lo contrario el inciso "16) Monto de sobrecolateral al final del periodo" es igual a la suma desde el inciso "6) Saldo insoluto de los activos vigentes al final del periodo" hasta el inciso "9) Otros activos en poder del fideicomiso" menos los conceptos desde el inciso "10) Saldo insoluto de la emisión al final del periodo" hasta el insciso" hasta el inciso "15) Otros adeudos".',
                        MensajeError: 'El hecho reportado para el concepto "Sobrecolateral" debe tener el valor "No", de lo contrario el inciso "16) Monto de sobrecolateral al final del periodo" debe ser igual a la suma desde el inciso "6) Saldo insoluto de los activos vigentes al final del periodo" hasta el inciso "9) Otros activos en poder del fideicomiso" menos los conceptos desde el inciso "10) Saldo insoluto de la emisión al final del periodo" hasta el insciso" hasta el inciso "15) Otros adeudos".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_OvercollateralizationAmountAtEndOfPeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'annext_Overcollateralization',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'annext_OutstandingBalanceOfCurrentAssetsAtEndOfPeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'annext_OutstandingBalanceOfOverdueAtEndOfPeriodAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable5': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable5',
                                IdConcepto: 'annext_CashInTheTrustAtTheEndOfThePeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable6': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable6',
                                IdConcepto: 'annext_OtherAssetsHeldAtTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable7': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable7',
                                IdConcepto: 'annext_OutstandingBalanceOfTheIssueAtEndOfPeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable8': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable8',
                                IdConcepto: 'annext_DebitsForExpensesOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable9': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable9',
                                IdConcepto: 'annext_DebtsPerExerciseOfFinancialGuaranteeIfApplicable',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable10': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable10',
                                IdConcepto: 'annext_TotalAmortizationOfPrincipalOwedToTheHoldersOfTrustNotes',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable11': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable11',
                                IdConcepto: 'annext_TotalInterestOwedToHoldersOfTrustNotes',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable12': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable12',
                                IdConcepto: 'annext_OtherDebts',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Sobrecolateralizacion': new model.DefinicionFormula().deserialize({
                        Id: 'Sobrecolateralizacion',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'round(bignumber(variable1) * 100) == round((1 - (bignumber(variable2) / (bignumber(variable3) + bignumber(variable4)))) * 10000)',
                        MensajeExito: 'Se cumple que el valor del concepto "Sobrecolaterización" es igual a ((1 - ("Saldo insoluto de la emision al final del periodo" / ("Saldo insoluto de los activos vigentes al final del periodo" + "Efectivo en el fideicomiso al final del periodo"))) * 100).',
                        MensajeError: 'Se debe cumplir que el valor del concepto "Sobrecolaterización" debe ser igual a ((1 - ("Saldo insoluto de la emision al final del periodo" / ("Saldo insoluto de los activos vigentes al final del periodo" + "Efectivo en el fideicomiso al final del periodo"))) * 100).',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_OvercollateralizationEexpressedInPercentage',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'annext_OutstandingBalanceOfTheIssueAtEndOfPeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'annext_OutstandingBalanceOfCurrentAssetsAtEndOfPeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'annext_CashInTheTrustAtTheEndOfThePeriod',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Exchangerate': new model.DefinicionFormula().deserialize({
                        Id: 'Exchangerate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Pesos" and squeeze(size(variable1)) > 0) or (variable2 != "Pesos") ',
                        MensajeExito: 'El campo "Denominación de la emisión" es distinto de "Pesos" ó se capturó el valor del campo "18) En su caso, tipo de cambio utilizado para determinar el valor de la cartera de activos denominada en moneda distinta al peso".',
                        MensajeError: 'El campo "Denominación de la emisión" debe ser distinto de "Pesos" ó se debe capturar el valor del campo "18) En su caso, tipo de cambio utilizado para determinar el valor de la cartera de activos denominada en moneda distinta al peso".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_ExchangeRateUsedToDetermineTheValueOfThePortfolioOfAssetsDenominatedInCurrenciesOtherThanMexicanCurrency',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'annext_DenominationOfTheIssue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                '301100_Ticker': new model.DefinicionFormula().deserialize({
                        Id: '301100_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) <= 7',
                        MensajeExito: 'El hecho {variable1} tiene un máximo de 7 caracteres.',
                        MensajeError: 'El hecho {variable1} debe tener un máximo de 7 caracteres.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'annext_Ticker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'TipoDeCambio': new model.DefinicionFormula().deserialize({
                    Id: 'TipoDeCambio',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "Pesos" and squeeze(size(variable1)) > 0) or (variable2 != "Pesos") ',
                    MensajeExito: 'El concepto "Denominación de la emisión" es diferente de "Pesos" ó se capturo el texto del campo "31) Tipo de cambio para el pago de los certificados bursátiles".',
                    MensajeError: 'El concepto "Denominación de la emisión" debe ser distinto de "Pesos" ó se debe capturar el texto del campo "31) Tipo de cambio para el pago de los certificados bursátiles".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_ExchangeRateForThePaymentOfStockCertificates',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_DenominationOfTheIssue',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                    }
                }),
                'MontoTotalDeIntereses': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotalDeIntereses',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma del "Detalle de monto de intereses pagados a los tenedores de títulos fiduciarios" en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma del "Detalle de monto de intereses pagados a los tenedores de títulos fiduciarios" en cada serie.',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_AmountOfInterestPaidToHoldersOfTrustNotes',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: false,
                                QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis',
                                IdDimension: 'annext_SerieTypedAxis',
                                CualquierMiembro: true
                            }]
                        }),
                    }
                }),
                'MontoTotalPagadoPorAmortizacion': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotalPagadoPorAmortizacion',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual a la suma del "Detalle de monto pagado por amortización a los tenedores de títulos fiduciarios" en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma del "Detalle de monto pagado por amortización a los tenedores de títulos fiduciarios" en cada serie.',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_AmountPaidForAmortizationToHoldersOfTrustNotes',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: false,
                                QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis',
                                IdDimension: 'annext_SerieTypedAxis',
                                CualquierMiembro: true
                            }]
                        }),
                    }
                }),
                'NumeroDeActivosAlFinalDelPeriodo': new model.DefinicionFormula().deserialize({
                    Id: 'NumeroDeActivosAlFinalDelPeriodo',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de {variable1} es igual al "Total" del "Número de activos del més actual".',
                    MensajeError: 'El valor de {variable1} es igual al "Total" del "Número de activos del més actual".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_NumberOfAssetsAtEndOfPeriod',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_TotalMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember",
                            }]
                        }),
                    }
                }),
                'TasaMorosidad': new model.DefinicionFormula().deserialize({
                    Id: 'TasaMorosidad',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '((variable1 > 0) and (variable2 > 0) ) or ( (variable1 == 0) and (variable2 == 0))',
                    MensajeExito: 'El valor del campo "7) Saldo insoluto de los activos vencidos al final del periodo" es mayor a cero así como el campo "53) Tasa de morosidad" es mayor a cero ó ambos valen cero.',
                    MensajeError: 'Si el valor del campo "7) Saldo insoluto de los activos vencidos al final del periodo" es mayor a cero, entonces el valor del campo "53) Tasa de morosidad" debe ser mayor a cero, de lo contrario ambos campos deben valer cero.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_NPLRatio',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_OutstandingBalanceOfOverdueAtEndOfPeriodAssets',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                    }
                }),
                'TasaPrepago': new model.DefinicionFormula().deserialize({
                    Id: 'TasaPrepago',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '((variable1 > 0) and (variable2 > 0) ) or ( (variable1 == 0) and (variable2 == 0))',
                    MensajeExito: 'El campo "20) Pagos de principal no pagados" es mayor a cero así como el campo "54) Tasa de prepago" es mayor a cero, de lo contrario ambos valen cero.',
                    MensajeError: 'Si el campo "20) Pagos de principal no pagados" es mayor a cero entonces el campo "54) Tasa de prepago" debe ser mayor a cero, de lo contrario ambos deben valer cero',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_UnscheduledPrincipalPayments',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_RateOfPrepayment',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                    }
                }),
                'SaldoInsolutoDeLosActivosAgrupadosPorSuMorosidad': new model.DefinicionFormula().deserialize({
                    Id: 'SaldoInsolutoDeLosActivosAgrupadosPorSuMorosidad',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == (bignumber(variable2) + bignumber(variable3))',
                    MensajeExito: 'La suma de el "6) Saldos insoluto de los activos vigentes al final del periodo" más el "7) Saldo insoluto de los activos vencidos al final del periodo" es igual al total del "Saldo insoluto del mes actual".',
                    MensajeError: 'La suma de el "6) Saldos insoluto de los activos vigentes al final del periodo" más el "7) Saldo insoluto de los activos vencidos al final del periodo" deben ser igual al total del "Saldo insoluto del mes actual".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_TotalMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember",
                            }]
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_OutstandingBalanceOfCurrentAssetsAtEndOfPeriod',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'annext_OutstandingBalanceOfOverdueAtEndOfPeriodAssets',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        
                    }
                }),
                //*******************************************************************SALDO INSOLUTO - MES ACTUAL************************************************************************
                'SaldoInsolutoDeLosActivos_MesActual': new model.DefinicionFormula().deserialize({
                    Id: 'SaldoInsolutoDeLosActivos_MesActual',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == ( bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5) + bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9) + bignumber(variable10) )',
                    MensajeExito: 'El valor "Total" del "Saldo insoluto del mes actual" es igual a la suma del "Saldo insoluto mes actual" en todos los intervalos de tiempo que lo componen.',
                    MensajeError: 'El valor "Total" del "Saldo insoluto del mes actual" debe ser igual a la suma del "Saldo insoluto mes actual" en todos los intervalos de tiempo que lo componen.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_TotalMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember",
                            }]
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_LessThan1MonthOrLessThan30DaysMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:LessThan1MonthOrLessThan30DaysMember",
                            }]
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                            }]
                        }),
                        'variable4': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable4',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                            }]
                        }),
                        'variable5': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable5',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between91And120DaysOr3ToUpTo4MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between91And120DaysOr3ToUpTo4MonthsMember",
                            }]
                        }),
                        'variable6': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable6',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between121And150DaysOrFrom4To5MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between121And150DaysOrFrom4To5MonthsMember",
                            }]
                        }),
                        'variable7': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable7',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                            }]
                        }),
                        'variable8': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable8',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_MoreThan180DaysOrMoreThan6MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:MoreThan180DaysOrMoreThan6MonthsMember",
                            }]
                        }),
                        'variable9': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable9',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_InJudicialProcessMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:InJudicialProcessMember",
                            }]
                        }),
                        'variable10': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable10',
                            IdConcepto: 'annext_CurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_ExtensionMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:ExtensionMember",
                            }]
                        }),
                    }
                }),
                //*******************************************************************SALDO INSOLUTO - MES ANTERIOR************************************************************************
                'SaldoInsolutoDeLosActivos_MesAnterior': new model.DefinicionFormula().deserialize({
                    Id: 'SaldoInsolutoDeLosActivos_MesActual',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == ( bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5) + bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9) + bignumber(variable10) )',
                    MensajeExito: 'El valor "Total" del "Saldo insoluto del mes anterior" es igual a la suma del "Saldo insoluto mes anterior" en todos los intervalos de tiempo que lo componen.',
                    MensajeError: 'El valor "Total" del "Saldo insoluto del mes anterior" debe ser igual a la suma del "Saldo insoluto mes anterior" en todos los intervalos de tiempo que lo componen.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_TotalMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember",
                            }]
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_LessThan1MonthOrLessThan30DaysMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:LessThan1MonthOrLessThan30DaysMember",
                            }]
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                            }]
                        }),
                        'variable4': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable4',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                            }]
                        }),
                        'variable5': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable5',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between91And120DaysOr3ToUpTo4MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between91And120DaysOr3ToUpTo4MonthsMember",
                            }]
                        }),
                        'variable6': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable6',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between121And150DaysOrFrom4To5MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between121And150DaysOrFrom4To5MonthsMember",
                            }]
                        }),
                        'variable7': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable7',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                            }]
                        }),
                        'variable8': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable8',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_MoreThan180DaysOrMoreThan6MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:MoreThan180DaysOrMoreThan6MonthsMember",
                            }]
                        }),
                        'variable9': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable9',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_InJudicialProcessMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:InJudicialProcessMember",
                            }]
                        }),
                        'variable10': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable10',
                            IdConcepto: 'annext_LastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_ExtensionMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:ExtensionMember",
                            }]
                        }),
                    }
                }),
                //*******************************************************************NÚMERO ACTIVOS - MES ACTUAL************************************************************************
                'NumeroActivos_MesActual': new model.DefinicionFormula().deserialize({
                    Id: 'SaldoInsolutoDeLosActivos_MesActual',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == ( bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5) + bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9) + bignumber(variable10) )',
                    MensajeExito: 'El valor "Total" del "Número de activos mes actual" es igual a la suma del "Número de activos mes actual" en todos los intervalos de tiempo que lo componen.',
                    MensajeError: 'El valor "Total" del "Número de activos mes actual" debe ser igual a la suma del "Número de activos mes actual" en todos los intervalos de tiempo que lo componen.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_TotalMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember",
                            }]
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_LessThan1MonthOrLessThan30DaysMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:LessThan1MonthOrLessThan30DaysMember",
                            }]
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                            }]
                        }),
                        'variable4': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable4',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                            }]
                        }),
                        'variable5': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable5',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between91And120DaysOr3ToUpTo4MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between91And120DaysOr3ToUpTo4MonthsMember",
                            }]
                        }),
                        'variable6': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable6',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between121And150DaysOrFrom4To5MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between121And150DaysOrFrom4To5MonthsMember",
                            }]
                        }),
                        'variable7': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable7',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                            }]
                        }),
                        'variable8': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable8',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_MoreThan180DaysOrMoreThan6MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:MoreThan180DaysOrMoreThan6MonthsMember",
                            }]
                        }),
                        'variable9': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable9',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_InJudicialProcessMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:InJudicialProcessMember",
                            }]
                        }),
                        'variable10': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable10',
                            IdConcepto: 'annext_NumberOfAssetsCurrentMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_ExtensionMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:ExtensionMember",
                            }]
                        }),
                    }
                }),
                //*******************************************************************NÚMERO ACTIVOS - MES ANTERIOR************************************************************************
                'NumeroActivos_MesAnterior': new model.DefinicionFormula().deserialize({
                    Id: 'SaldoInsolutoDeLosActivos_MesActual',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == ( bignumber(variable2) + bignumber(variable3) + bignumber(variable4) + bignumber(variable5) + bignumber(variable6) + bignumber(variable7) + bignumber(variable8) + bignumber(variable9) + bignumber(variable10) )',
                    MensajeExito: 'El valor "Total" del "Número de activos mes anterior" es igual a la suma del "Número de activos mes anterior" en todos los intervalos de tiempo que lo componen.',
                    MensajeError: 'El valor "Total" del "Número de activos mes anterior" debe ser igual a la suma del "Número de activos mes anterior" en todos los intervalos de tiempo que lo componen.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_TotalMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember",
                            }]
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_LessThan1MonthOrLessThan30DaysMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:LessThan1MonthOrLessThan30DaysMember",
                            }]
                        }),
                        'variable3': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable3',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                            }]
                        }),
                        'variable4': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable4',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                            }]
                        }),
                        'variable5': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable5',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between91And120DaysOr3ToUpTo4MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between91And120DaysOr3ToUpTo4MonthsMember",
                            }]
                        }),
                        'variable6': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable6',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between121And150DaysOrFrom4To5MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between121And150DaysOrFrom4To5MonthsMember",
                            }]
                        }),
                        'variable7': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable7',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                            }]
                        }),
                        'variable8': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable8',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_MoreThan180DaysOrMoreThan6MonthsMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:MoreThan180DaysOrMoreThan6MonthsMember",
                            }]
                        }),
                        'variable9': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable9',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_InJudicialProcessMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:InJudicialProcessMember",
                            }]
                        }),
                        'variable10': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable10',
                            IdConcepto: 'annext_NumberOfAssetsLastMonth',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            ValorFallback: '0',
                            EsDinamica: true,
                            FiltrosDimension:
                            [{
                                Explicita: true,
                                IdDimension: "annext_TimeIntervalAxis",
                                IdItemMiembro: "annext_ExtensionMember",
                                QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                                QNameItemMiembro: "http://www.cnbv.gob.mx/2016-08-22/annext:ExtensionMember",
                            }]
                        }),
                    }
                }),

            };

            this.ContextosPlantillaPorId = {
                "ctx_1": {
                    "Id": "ctx_1",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                //"ctx_2": {
                //    "Id": "ctx_2",
                //    "Periodo": {
                //        "Tipo": 1,
                //        "FechaInstante": "#fecha_2016_09_30",
                //        "FechaInicio": "",
                //        "FechaFin": ""
                //    },
                //    "Entidad": {
                //        "Id": "#nombreEntidad",
                //        "EsquemaId": "#esquemaEntidad",
                //        "ContieneInformacionDimensional": false,
                //        "Segmento": null,
                //        "ValoresDimension": []
                //    },
                //    "ContieneInformacionDimensional": true,
                //    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:typedMember dimension=\"annext:SerieTypedAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><annext:SerieDomain xmlns:annext=\"http://www.cnbv.gob.mx/2016-08-22/annext\">B*</annext:SerieDomain></xbrldi:typedMember></xbrli:scenario>",
                //    "ValoresDimension": [
                //        {
                //            "Explicita": false,
                //            "IdDimension": "annext_SerieTypedAxis",
                //            "IdItemMiembro": null,
                //            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis",
                //            "QNameItemMiembro": null,
                //            "ElementoMiembroTipificado": "<annext:SerieDomain xmlns:annext=\"http://www.cnbv.gob.mx/2016-08-22/annext\">B*</annext:SerieDomain>"
                //        }
                //    ]
                //},
                //"ctx_3": {
                //    "Id": "ctx_3",
                //    "Periodo": {
                //        "Tipo": 1,
                //        "FechaInstante": "#fecha_2016_09_30",
                //        "FechaInicio": "",
                //        "FechaFin": ""
                //    },
                //    "Entidad": {
                //        "Id": "#nombreEntidad",
                //        "EsquemaId": "#esquemaEntidad",
                //        "ContieneInformacionDimensional": false,
                //        "Segmento": null,
                //        "ValoresDimension": []
                //    },
                //    "ContieneInformacionDimensional": true,
                //    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:typedMember dimension=\"annext:SerieTypedAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><annext:SerieDomain xmlns:annext=\"http://www.cnbv.gob.mx/2016-08-22/annext\">AA</annext:SerieDomain></xbrldi:typedMember></xbrli:scenario>",
                //    "ValoresDimension": [
                //        {
                //            "Explicita": false,
                //            "IdDimension": "annext_SerieTypedAxis",
                //            "IdItemMiembro": null,
                //            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis",
                //            "QNameItemMiembro": null,
                //            "ElementoMiembroTipificado": "<annext:SerieDomain xmlns:annext=\"http://www.cnbv.gob.mx/2016-08-22/annext\">AA</annext:SerieDomain>"
                //        }
                //    ]
                //},
                //"ctx_4": {
                //    "Id": "ctx_4",
                //    "Periodo": {
                //        "Tipo": 1,
                //        "FechaInstante": "#fecha_2016_09_30",
                //        "FechaInicio": "",
                //        "FechaFin": ""
                //    },
                //    "Entidad": {
                //        "Id": "#nombreEntidad",
                //        "EsquemaId": "#esquemaEntidad",
                //        "ContieneInformacionDimensional": false,
                //        "Segmento": null,
                //        "ValoresDimension": []
                //    },
                //    "ContieneInformacionDimensional": true,
                //    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:typedMember dimension=\"annext:SerieTypedAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><annext:SerieDomain xmlns:annext=\"http://www.cnbv.gob.mx/2016-08-22/annext\">BONN</annext:SerieDomain></xbrldi:typedMember></xbrli:scenario>",
                //    "ValoresDimension": [
                //        {
                //            "Explicita": false,
                //            "IdDimension": "annext_SerieTypedAxis",
                //            "IdItemMiembro": null,
                //            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis",
                //            "QNameItemMiembro": null,
                //            "ElementoMiembroTipificado": "<annext:SerieDomain xmlns:annext=\"http://www.cnbv.gob.mx/2016-08-22/annext\">BONN</annext:SerieDomain>"
                //        }
                //    ]
                //},
                "Context_Instant_Between31And60DaysOrBetween1AndUpTo2MonthsMember": {
                    "Id": "Context_Instant_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:Between31And60DaysOrBetween1AndUpTo2MonthsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_LessThan1MonthOrLessThan30DaysMember": {
                    "Id": "Context_Instant_LessThan1MonthOrLessThan30DaysMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:LessThan1MonthOrLessThan30DaysMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_LessThan1MonthOrLessThan30DaysMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:LessThan1MonthOrLessThan30DaysMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_Between61And90DaysOrBetween2AndUpTo3MonthsMember": {
                    "Id": "Context_Instant_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:Between61And90DaysOrBetween2AndUpTo3MonthsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_Between91And120DaysOr3ToUpTo4MonthsMember": {
                    "Id": "Context_Instant_Between91And120DaysOr3ToUpTo4MonthsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:Between91And120DaysOr3ToUpTo4MonthsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_Between91And120DaysOr3ToUpTo4MonthsMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between91And120DaysOr3ToUpTo4MonthsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_Between121And150DaysOrFrom4To5MonthsMember": {
                    "Id": "Context_Instant_Between121And150DaysOrFrom4To5MonthsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:Between121And150DaysOrFrom4To5MonthsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_Between121And150DaysOrFrom4To5MonthsMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between121And150DaysOrFrom4To5MonthsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_Between151And180DaysOrBetween5AndUpTo6MonthsMember": {
                    "Id": "Context_Instant_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:Between151And180DaysOrBetween5AndUpTo6MonthsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_MoreThan180DaysOrMoreThan6MonthsMember": {
                    "Id": "Context_Instant_MoreThan180DaysOrMoreThan6MonthsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:MoreThan180DaysOrMoreThan6MonthsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_MoreThan180DaysOrMoreThan6MonthsMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:MoreThan180DaysOrMoreThan6MonthsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_InJudicialProcessMember": {
                    "Id": "Context_Instant_InJudicialProcessMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:InJudicialProcessMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_InJudicialProcessMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:InJudicialProcessMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_ExtensionMember": {
                    "Id": "Context_Instant_ExtensionMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:ExtensionMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_ExtensionMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:ExtensionMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_TotalMember": {
                    "Id": "Context_Instant_TotalMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2016_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"annext:TimeIntervalAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">annext:TotalMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "annext_TimeIntervalAxis",
                            "IdItemMiembro": "annext_TotalMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
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
                "Ab4901d05-9181-4922-9e79-10218dc53afc": {
                    "Id": "Ab4901d05-9181-4922-9e79-10218dc53afc",
                    "IdConcepto": "annext_CorporateNameOfTheIssuer",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Af1935438-d99b-4bbe-bb7c-0d50b8c9e8da": {
                    "Id": "Af1935438-d99b-4bbe-bb7c-0d50b8c9e8da",
                    "IdConcepto": "annext_Ticker",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A2c783876-1209-4e1e-8fbb-9d1734b95672": {
                    "Id": "A2c783876-1209-4e1e-8fbb-9d1734b95672",
                    "IdConcepto": "annext_ContractNumberOfTheTrust",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A511cc1f7-60c8-4dd7-8c61-1d67cdd81620": {
                    "Id": "A511cc1f7-60c8-4dd7-8c61-1d67cdd81620",
                    "IdConcepto": "annext_Series",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ae9901dd9-3b0b-4856-8a36-2137fa42b9aa": {
                    "Id": "Ae9901dd9-3b0b-4856-8a36-2137fa42b9aa",
                    "IdConcepto": "annext_DenominationOfTheIssue",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A120e6bbe-1ee5-4337-9de5-787542ba585e": {
                    "Id": "A120e6bbe-1ee5-4337-9de5-787542ba585e",
                    "IdConcepto": "annext_ReportedYear",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae1806672-ef74-4c59-9f7c-dbb0edd60a02": {
                    "Id": "Ae1806672-ef74-4c59-9f7c-dbb0edd60a02",
                    "IdConcepto": "annext_ReportedMonth",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aadd04db9-b91c-4761-b31d-2b8fff5c96b5": {
                    "Id": "Aadd04db9-b91c-4761-b31d-2b8fff5c96b5",
                    "IdConcepto": "annext_GuarantorOrAval",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aadd04db9-b91c-4761-b31d-2b8fff5c9cd9": {
                    "Id": "Aadd04db9-b91c-4761-b31d-2b8fff5c9cd9",
                    "IdConcepto": "annext_GuarantorAndGuaranteeName",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A04a58197-2ab5-4a04-ae70-528933141312": {
                    "Id": "A04a58197-2ab5-4a04-ae70-528933141312",
                    "IdConcepto": "annext_TypeOfGuarantee",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A04a58197-2ab5-4a04-ae70-528933141313": {
                    "Id": "A04a58197-2ab5-4a04-ae70-528933141313",
                    "IdConcepto": "annext_MasterAdministrator",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A04a58197-2ab5-4a04-ae70-528933141314": {
                    "Id": "A04a58197-2ab5-4a04-ae70-528933141314",
                    "IdConcepto": "annext_DenominationoftheMasterAdministrator",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A72aac059-61b2-494c-93ee-28e3a2d795e1": {
                    "Id": "A72aac059-61b2-494c-93ee-28e3a2d795e1",
                    "IdConcepto": "annext_AdministratorOrOperator",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Afe417b62-0b0d-48dd-94dc-612b5775ce91": {
                    "Id": "Afe417b62-0b0d-48dd-94dc-612b5775ce91",
                    "IdConcepto": "annext_CommonRepresentative",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A176366ed-999d-40a0-b97a-b10a738f6526": {
                    "Id": "A176366ed-999d-40a0-b97a-b10a738f6526",
                    "IdConcepto": "annext_Overcollateralization",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A96506806-4c89-4faa-b8ca-a8c854f6beef": {
                    "Id": "A96506806-4c89-4faa-b8ca-a8c854f6beef",
                    "IdConcepto": "annext_LevelOfRoundingUsed",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A5865767c-6961-4bb0-b73d-a601524f741d": {
                    "Id": "A5865767c-6961-4bb0-b73d-a601524f741d",
                    "IdConcepto": "annext_ResponsibilityLetterPdf",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A1f396af3-a640-4ffc-bf66-1323ec26be44": {
                    "Id": "A1f396af3-a640-4ffc-bf66-1323ec26be44",
                    "IdConcepto": "annext_OutstandingBalanceOfCurrentAssetsAtEndOfPeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A86a94e85-4756-4fe0-becf-1840e3bd5a33": {
                    "Id": "A86a94e85-4756-4fe0-becf-1840e3bd5a33",
                    "IdConcepto": "annext_OutstandingBalanceOfOverdueAtEndOfPeriodAssets",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa94a67cb-4a4d-4d54-828f-b0c671f9b54c": {
                    "Id": "Aa94a67cb-4a4d-4d54-828f-b0c671f9b54c",
                    "IdConcepto": "annext_CashInTheTrustAtTheEndOfThePeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0a30d996-d06b-4d81-a06e-4a26cb61b8fe": {
                    "Id": "A0a30d996-d06b-4d81-a06e-4a26cb61b8fe",
                    "IdConcepto": "annext_OtherAssetsHeldAtTheTrust",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A903abd58-9993-4502-b227-1b9847f2d5e1": {
                    "Id": "A903abd58-9993-4502-b227-1b9847f2d5e1",
                    "IdConcepto": "annext_OutstandingBalanceOfTheIssueAtEndOfPeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                //annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod
                
                //"Ad9fccbe6-d330-44ab-a61d-b1d323609f9b": {
                //    "Id": "Ad9fccbe6-d330-44ab-a61d-b1d323609f9b",
                //    "IdConcepto": "annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod",
                //    "IdContextoPlantilla": "ctx_2",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},
                //"A1b6fdd50-afb9-40c1-aa0d-9b34adc8da4d": {
                //    "Id": "A1b6fdd50-afb9-40c1-aa0d-9b34adc8da4d",
                //    "IdConcepto": "annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod",
                //    "IdContextoPlantilla": "ctx_3",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},
                //"A92092cf0-4005-4c19-99a2-9b135af832a4": {
                //    "Id": "A92092cf0-4005-4c19-99a2-9b135af832a4",
                //    "IdConcepto": "annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod",
                //    "IdContextoPlantilla": "ctx_4",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},

                "A5e0a01dd-ebbc-448c-bfbb-b3914b2d082f": {
                    "Id": "A5e0a01dd-ebbc-448c-bfbb-b3914b2d082f",
                    "IdConcepto": "annext_DebitsForExpensesOfTheTrust",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A24b920f3-246f-454f-8062-ca40d928a725": {
                    "Id": "A24b920f3-246f-454f-8062-ca40d928a725",
                    "IdConcepto": "annext_DebtsPerExerciseOfFinancialGuaranteeIfApplicable",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A378d3f46-b19c-4df7-912a-4225373a1b23": {
                    "Id": "A378d3f46-b19c-4df7-912a-4225373a1b23",
                    "IdConcepto": "annext_TotalAmortizationOfPrincipalOwedToTheHoldersOfTrustNotes",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5d758498-72b8-457e-831c-2530fac5f33c": {
                    "Id": "A5d758498-72b8-457e-831c-2530fac5f33c",
                    "IdConcepto": "annext_TotalInterestOwedToHoldersOfTrustNotes",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9a44e2de-2b62-4635-a647-a14b175250da": {
                    "Id": "A9a44e2de-2b62-4635-a647-a14b175250da",
                    "IdConcepto": "annext_OtherDebts",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A46ef437c-284b-4b84-9093-b0ce5f0402fc": {
                    "Id": "A46ef437c-284b-4b84-9093-b0ce5f0402fc",
                    "IdConcepto": "annext_OvercollateralizationAmountAtEndOfPeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7d015fe6-492d-45ff-8eb5-c038f65fad94": {
                    "Id": "A7d015fe6-492d-45ff-8eb5-c038f65fad94",
                    "IdConcepto": "annext_OvercollateralizationEexpressedInPercentage",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae62b0c01-2538-4617-86ad-5f055953b8c5": {
                    "Id": "Ae62b0c01-2538-4617-86ad-5f055953b8c5",
                    "IdConcepto": "annext_ExchangeRateUsedToDetermineTheValueOfThePortfolioOfAssetsDenominatedInCurrenciesOtherThanMexicanCurrency",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A9213e4b9-0443-4c76-8f6e-5f9b73da2c7f": {
                    "Id": "A9213e4b9-0443-4c76-8f6e-5f9b73da2c7f",
                    "IdConcepto": "annext_ScheduledAmortizationCharged",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6220f05e-7920-4311-910f-1c5add2abb87": {
                    "Id": "A6220f05e-7920-4311-910f-1c5add2abb87",
                    "IdConcepto": "annext_UnscheduledPrincipalPayments",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad7e4809c-103a-44a6-b827-7311e6e66c7c": {
                    "Id": "Ad7e4809c-103a-44a6-b827-7311e6e66c7c",
                    "IdConcepto": "annext_IncomeFromSettlementsAndAwards",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad037ac59-5de0-4ebc-8933-0f7b1727a669": {
                    "Id": "Ad037ac59-5de0-4ebc-8933-0f7b1727a669",
                    "IdConcepto": "annext_OrdinaryInterestReceived",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad0510311-7e9c-42eb-86a2-db5262744bc2": {
                    "Id": "Ad0510311-7e9c-42eb-86a2-db5262744bc2",
                    "IdConcepto": "annext_DefaultInterestCharged",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A268989ac-fb7c-4de3-bf0f-937bb27974a7": {
                    "Id": "A268989ac-fb7c-4de3-bf0f-937bb27974a7",
                    "IdConcepto": "annext_IncomeFromCollectedInsurance",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae5e4beca-de7c-47a9-ba7c-5bb039ce7653": {
                    "Id": "Ae5e4beca-de7c-47a9-ba7c-5bb039ce7653",
                    "IdConcepto": "annext_HedgingInstrumentsCollected",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af0061f85-d7eb-4b0e-8b00-8093e6ce9e37": {
                    "Id": "Af0061f85-d7eb-4b0e-8b00-8093e6ce9e37",
                    "IdConcepto": "annext_FeesCharged",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aae54b4d2-8c52-46e5-b646-6fc12d8f12f9": {
                    "Id": "Aae54b4d2-8c52-46e5-b646-6fc12d8f12f9",
                    "IdConcepto": "annext_ExerciseOfTheFinancialGuarantee",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afd5a1c65-3a9b-4b02-b97e-db7917e0bc79": {
                    "Id": "Afd5a1c65-3a9b-4b02-b97e-db7917e0bc79",
                    "IdConcepto": "annext_NetIncomeFromInvestments",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A400c6f4d-f6f0-49dd-90ec-71b0c16479c8": {
                    "Id": "A400c6f4d-f6f0-49dd-90ec-71b0c16479c8",
                    "IdConcepto": "annext_OtherIncome",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae6233c57-088b-4a25-971d-343079e49ad7": {
                    "Id": "Ae6233c57-088b-4a25-971d-343079e49ad7",
                    "IdConcepto": "annext_TotalIncomeToTheTrust",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af88d34ee-53ad-4efe-9f3b-6678a2a08922": {
                    "Id": "Af88d34ee-53ad-4efe-9f3b-6678a2a08922",
                    "IdConcepto": "annext_ExchangeRateForThePaymentOfStockCertificates",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A7c22ad3b-f7b3-4cd7-a2ae-e90a17808134": {
                    "Id": "A7c22ad3b-f7b3-4cd7-a2ae-e90a17808134",
                    "IdConcepto": "annext_LifeInsurancePaid",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0174f929-88e2-410d-ab86-0230faac3be7": {
                    "Id": "A0174f929-88e2-410d-ab86-0230faac3be7",
                    "IdConcepto": "annext_DamageInsurancePaid",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af36fea7d-0527-40e1-b0ab-383dc4c9154b": {
                    "Id": "Af36fea7d-0527-40e1-b0ab-383dc4c9154b",
                    "IdConcepto": "annext_HedgingInstrumentsPremiumsPaid",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0f025817-1b29-422d-a7f1-208deb554efd": {
                    "Id": "A0f025817-1b29-422d-a7f1-208deb554efd",
                    "IdConcepto": "annext_ManagementFeesPaidToTheMasterServicer",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4357ff29-0b6d-426a-9731-59432255bfa8": {
                    "Id": "A4357ff29-0b6d-426a-9731-59432255bfa8",
                    "IdConcepto": "annext_FeesForAdministrationToPrimaryServers",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A60fbcc5e-0a24-49f1-8f1a-12582cc315b9": {
                    "Id": "A60fbcc5e-0a24-49f1-8f1a-12582cc315b9",
                    "IdConcepto": "annext_CollectionChargesPaidWithFundsFromTheTrust",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A761e7043-56ef-4014-8d5a-a697b9ff288d": {
                    "Id": "A761e7043-56ef-4014-8d5a-a697b9ff288d",
                    "IdConcepto": "annext_TrusteeFees",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac0f6210d-f423-41cd-9148-df0f60046f18": {
                    "Id": "Ac0f6210d-f423-41cd-9148-df0f60046f18",
                    "IdConcepto": "annext_FeesCommonRepresentative",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4881ff03-1ede-470e-96ab-8e41eb90d1cd": {
                    "Id": "A4881ff03-1ede-470e-96ab-8e41eb90d1cd",
                    "IdConcepto": "annext_RegulatoryAgencies",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afde5b2c1-e0fd-47df-8886-3eda0d332796": {
                    "Id": "Afde5b2c1-e0fd-47df-8886-3eda0d332796",
                    "IdConcepto": "annext_RatingAgenciesAndExternalAuditors",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1426fc3e-3c16-4dbf-9e88-28951e4773f6": {
                    "Id": "A1426fc3e-3c16-4dbf-9e88-28951e4773f6",
                    "IdConcepto": "annext_AwardCosts",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A50577182-d3fb-41ae-b48f-5d26f7a4b407": {
                    "Id": "A50577182-d3fb-41ae-b48f-5d26f7a4b407",
                    "IdConcepto": "annext_PaymentGuaranteeToHolders",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A72c886e9-42a4-4ea5-9c50-b05c27c06054": {
                    "Id": "A72c886e9-42a4-4ea5-9c50-b05c27c06054",
                    "IdConcepto": "annext_CreditInsuranceAndOrGuaranteeOfPaymentForBreachOfTheAssets",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac4ba8390-7c5a-4dd2-8b3d-135437703098": {
                    "Id": "Ac4ba8390-7c5a-4dd2-8b3d-135437703098",
                    "IdConcepto": "annext_AmountOfInterestPaidToHoldersOfTrustNotes",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                //annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes
                
                //"Aa4a2bd42-7664-4cac-aa28-0ffbc5af6dfe": {
                //    "Id": "Aa4a2bd42-7664-4cac-aa28-0ffbc5af6dfe",
                //    "IdConcepto": "annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes",
                //    "IdContextoPlantilla": "ctx_3",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},
                //"Adf5895d0-a8c2-4b3a-9560-91d50e33556b": {
                //    "Id": "Adf5895d0-a8c2-4b3a-9560-91d50e33556b",
                //    "IdConcepto": "annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes",
                //    "IdContextoPlantilla": "ctx_2",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},
                //"Afe31768c-0e4e-4aa5-b75d-0ef2d0624ee6": {
                //    "Id": "Afe31768c-0e4e-4aa5-b75d-0ef2d0624ee6",
                //    "IdConcepto": "annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes",
                //    "IdContextoPlantilla": "ctx_4",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},

                "Aa6a32b09-28af-46c8-8971-4ad64b24ef5e": {
                    "Id": "Aa6a32b09-28af-46c8-8971-4ad64b24ef5e",
                    "IdConcepto": "annext_AmountPaidForAmortizationToHoldersOfTrustNotes",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                //annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes
                
                //"A1b982f88-41f3-451e-954f-74fe64c72dc6": {
                //    "Id": "A1b982f88-41f3-451e-954f-74fe64c72dc6",
                //    "IdConcepto": "annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes",
                //    "IdContextoPlantilla": "ctx_3",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},
                //"A06ff230a-0ddb-43cb-a301-3c24215028c0": {
                //    "Id": "A06ff230a-0ddb-43cb-a301-3c24215028c0",
                //    "IdConcepto": "annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes",
                //    "IdContextoPlantilla": "ctx_2",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},
                //"A5371b3cc-83ff-4716-97a5-3da512910477": {
                //    "Id": "A5371b3cc-83ff-4716-97a5-3da512910477",
                //    "IdConcepto": "annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes",
                //    "IdContextoPlantilla": "ctx_4",
                //    "Hechos": [],
                //    "IdUnidadPlantilla": "MXN",
                //    "Decimales": "0",
                //    "Precision": null,
                //    "Valor": "#valorDefaultNumerico",
                //    "ValorNumerador": null,
                //    "ValorDenominador": null
                //},

                "A2e3c916f-a025-4cc2-a559-c9f709a6a8ec": {
                    "Id": "A2e3c916f-a025-4cc2-a559-c9f709a6a8ec",
                    "IdConcepto": "annext_AmountPaidToHoldersOfCertificatesOrBondsOrSubordinatedResidual",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A949eb5f2-a2e3-406a-9e9d-4a886caf134a": {
                    "Id": "A949eb5f2-a2e3-406a-9e9d-4a886caf134a",
                    "IdConcepto": "annext_IncreaseOrDecreaseInReserves",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abf6049ba-7fd9-4367-9e43-30208bff2b48": {
                    "Id": "Abf6049ba-7fd9-4367-9e43-30208bff2b48",
                    "IdConcepto": "annext_OtherTrustExpensesDuringThePeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A477c3240-0584-487b-a7b3-8c69b1b11b27": {
                    "Id": "A477c3240-0584-487b-a7b3-8c69b1b11b27",
                    "IdConcepto": "annext_TotalChargesAndPayments",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5e902d34-238b-43b0-8cdf-d888f0709308": {
                    "Id": "A5e902d34-238b-43b0-8cdf-d888f0709308",
                    "IdConcepto": "annext_NumberOfAssetsAtEndOfPeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A55e7b0d4-2ddd-4aa1-8a4b-77e69f7cb9f1": {
                    "Id": "A55e7b0d4-2ddd-4aa1-8a4b-77e69f7cb9f1",
                    "IdConcepto": "annext_TheWeightedAverageInterestRateOfThePortfolio",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Valor": "#valorDefaultNumerico"
                },
                "A0ec87fe4-b30f-4c09-b715-5fd62f71d383": {
                    "Id": "A0ec87fe4-b30f-4c09-b715-5fd62f71d383",
                    "IdConcepto": "annext_TheWeightedAverageInterestRateOfThePortfolioDisclosure",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A761319f5-e1c9-4aaa-887f-fcd9b69aa3bc": {
                    "Id": "A761319f5-e1c9-4aaa-887f-fcd9b69aa3bc",
                    "IdConcepto": "annext_NPLRatio",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3ee418d8-40d1-4fc5-931f-38369c74c2e2": {
                    "Id": "A3ee418d8-40d1-4fc5-931f-38369c74c2e2",
                    "IdConcepto": "annext_NPLRatioDisclosure",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ac4d0c579-8954-442d-8792-5b62df0a8eb9": {
                    "Id": "Ac4d0c579-8954-442d-8792-5b62df0a8eb9",
                    "IdConcepto": "annext_RateOfPrepayment",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac4d0c579-8954-442d-8792-5b62df0a8ec1": {
                    "Id": "Ac4d0c579-8954-442d-8792-5b62df0a8ec1",
                    "IdConcepto": "annext_UnscheduledPaymentAmount",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9cdc1a77-22a2-431d-be88-8f704199ff8f": {
                    "Id": "A9cdc1a77-22a2-431d-be88-8f704199ff8f",
                    "IdConcepto": "annext_RateOfPrepaymentDisclosure",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aebf4e838-8ce2-4251-b1c7-d86a0540d30a": {
                    "Id": "Aebf4e838-8ce2-4251-b1c7-d86a0540d30a",
                    "IdConcepto": "annext_NumberOfPrepaidActive",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0bd36e1a-17e9-4680-a9a1-cf9e1740a436": {
                    "Id": "A0bd36e1a-17e9-4680-a9a1-cf9e1740a436",
                    "IdConcepto": "annext_NumberOfAssetsAtEndOfPeriodExpired",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7ac76898-af07-4655-b6d8-543f9108c867": {
                    "Id": "A7ac76898-af07-4655-b6d8-543f9108c867",
                    "IdConcepto": "annext_NumberOfAssetsOutstandingAtEndOfPeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A592a90fa-2f7e-4e1c-96f4-3f7d3fe0f3fa": {
                    "Id": "A592a90fa-2f7e-4e1c-96f4-3f7d3fe0f3fa",
                    "IdConcepto": "annext_NumberOfRecoveredAssetsInThePeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9505d48e-081a-47b2-a7dd-c19320247203": {
                    "Id": "A9505d48e-081a-47b2-a7dd-c19320247203",
                    "IdConcepto": "annext_InLieuOfPayment",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A425fb167-d1fd-4491-a806-1a3b03474a01": {
                    "Id": "A425fb167-d1fd-4491-a806-1a3b03474a01",
                    "IdConcepto": "annext_AwardOrLiquidation",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ade16937a-dc22-4621-b2d8-39f369ab2a9a": {
                    "Id": "Ade16937a-dc22-4621-b2d8-39f369ab2a9a",
                    "IdConcepto": "annext_SubstitutionOfDebtor",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A455fe868-a68d-40cc-a7cb-5c0f6baecf5b": {
                    "Id": "A455fe868-a68d-40cc-a7cb-5c0f6baecf5b",
                    "IdConcepto": "annext_OtherAssetsRecovered",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A347157b0-6d23-46b7-b997-b6109faf9af0": {
                    "Id": "A347157b0-6d23-46b7-b997-b6109faf9af0",
                    "IdConcepto": "annext_UnpaidBalanceOfTheAssetsGroupedInArrearsAtTheEndOfThePeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "0",
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A79b39466-0752-4334-a167-5895b728fea8": {
                    "Id": "A79b39466-0752-4334-a167-5895b728fea8",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A07e56069-56d8-4885-8231-a7d7a007ce47": {
                    "Id": "A07e56069-56d8-4885-8231-a7d7a007ce47",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_LessThan1MonthOrLessThan30DaysMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A65070f38-164d-4231-8424-717a88f35f31": {
                    "Id": "A65070f38-164d-4231-8424-717a88f35f31",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4bec06b4-f17b-4180-b6eb-7286bd1fdbf0": {
                    "Id": "A4bec06b4-f17b-4180-b6eb-7286bd1fdbf0",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between91And120DaysOr3ToUpTo4MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa2c5514c-ff30-458b-a96e-ec9c4f12da6e": {
                    "Id": "Aa2c5514c-ff30-458b-a96e-ec9c4f12da6e",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between121And150DaysOrFrom4To5MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4ad81a36-b49d-46ca-98a4-c4fbdd6ceda3": {
                    "Id": "A4ad81a36-b49d-46ca-98a4-c4fbdd6ceda3",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A64be218b-224c-4e70-bddc-f227c2672894": {
                    "Id": "A64be218b-224c-4e70-bddc-f227c2672894",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_MoreThan180DaysOrMoreThan6MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A32cfdd99-cc5d-4c59-be53-58e461337e58": {
                    "Id": "A32cfdd99-cc5d-4c59-be53-58e461337e58",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_InJudicialProcessMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac6d348ea-f6f4-478d-b6ef-6573674dc17f": {
                    "Id": "Ac6d348ea-f6f4-478d-b6ef-6573674dc17f",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_ExtensionMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5f78344d-60bf-46f4-b856-92f5e4b9d078": {
                    "Id": "A5f78344d-60bf-46f4-b856-92f5e4b9d078",
                    "IdConcepto": "annext_CurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_TotalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad41ce559-e236-4033-b3c5-9ed12a2e837a": {
                    "Id": "Ad41ce559-e236-4033-b3c5-9ed12a2e837a",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_LessThan1MonthOrLessThan30DaysMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A04afd1fa-8881-44dc-ae67-89edbce864ca": {
                    "Id": "A04afd1fa-8881-44dc-ae67-89edbce864ca",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A26107fa6-fba4-4c82-9d08-5fcadfa7edf5": {
                    "Id": "A26107fa6-fba4-4c82-9d08-5fcadfa7edf5",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0ac66fbb-8938-456a-88b7-a9acf883f04f": {
                    "Id": "A0ac66fbb-8938-456a-88b7-a9acf883f04f",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between91And120DaysOr3ToUpTo4MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4a3b7d8c-ad95-4fa2-ba71-6948e6503b00": {
                    "Id": "A4a3b7d8c-ad95-4fa2-ba71-6948e6503b00",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between121And150DaysOrFrom4To5MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A57e6818b-a7ec-4a3b-b231-96b4a827170c": {
                    "Id": "A57e6818b-a7ec-4a3b-b231-96b4a827170c",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3ed7793e-0309-41d7-b161-c24e04f2563b": {
                    "Id": "A3ed7793e-0309-41d7-b161-c24e04f2563b",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_MoreThan180DaysOrMoreThan6MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4cc8d056-969c-4880-a168-6d2adb4e333a": {
                    "Id": "A4cc8d056-969c-4880-a168-6d2adb4e333a",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_InJudicialProcessMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa860e419-8318-4b32-b698-d1da738c0386": {
                    "Id": "Aa860e419-8318-4b32-b698-d1da738c0386",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_ExtensionMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab186b258-8541-44f0-bc90-58638a140f74": {
                    "Id": "Ab186b258-8541-44f0-bc90-58638a140f74",
                    "IdConcepto": "annext_LastMonth",
                    "IdContextoPlantilla": "Context_Instant_TotalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0889b0fc-8c4e-4cee-8442-91fe7f75d02f": {
                    "Id": "A0889b0fc-8c4e-4cee-8442-91fe7f75d02f",
                    "IdConcepto": "annext_NumberOfAssetsGroupedInArrearsAtTheEndOfThePeriod",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A6d0ac16e-b79f-4009-b825-cf9f6b54c1fa": {
                    "Id": "A6d0ac16e-b79f-4009-b825-cf9f6b54c1fa",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_LessThan1MonthOrLessThan30DaysMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7d1bec4a-5569-478b-8c28-5f06f294b723": {
                    "Id": "A7d1bec4a-5569-478b-8c28-5f06f294b723",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aff4c9a05-69fd-4abb-a639-8bc2933be6ab": {
                    "Id": "Aff4c9a05-69fd-4abb-a639-8bc2933be6ab",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8cd81293-62bf-45d5-8625-6644ed978518": {
                    "Id": "A8cd81293-62bf-45d5-8625-6644ed978518",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between91And120DaysOr3ToUpTo4MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A792af4c2-102c-4541-9b7a-ef0694472452": {
                    "Id": "A792af4c2-102c-4541-9b7a-ef0694472452",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between121And150DaysOrFrom4To5MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A81750d2c-0ff0-4f5b-bf18-c9ec35bcf2d7": {
                    "Id": "A81750d2c-0ff0-4f5b-bf18-c9ec35bcf2d7",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af5210033-b14c-4d7c-8dc6-f42b56dc5541": {
                    "Id": "Af5210033-b14c-4d7c-8dc6-f42b56dc5541",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_MoreThan180DaysOrMoreThan6MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac079ac58-e35d-4fb0-97ee-207005a5f6cc": {
                    "Id": "Ac079ac58-e35d-4fb0-97ee-207005a5f6cc",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_InJudicialProcessMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae33bc9d2-88fd-404b-8e67-da11319b645b": {
                    "Id": "Ae33bc9d2-88fd-404b-8e67-da11319b645b",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_ExtensionMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A822eee33-b789-4d56-a111-943644bfa501": {
                    "Id": "A822eee33-b789-4d56-a111-943644bfa501",
                    "IdConcepto": "annext_NumberOfAssetsCurrentMonth",
                    "IdContextoPlantilla": "Context_Instant_TotalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A42a6b3ec-70ab-45af-9ffa-6b91f233b4af": {
                    "Id": "A42a6b3ec-70ab-45af-9ffa-6b91f233b4af",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_LessThan1MonthOrLessThan30DaysMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af0d41c88-917e-43c4-9012-bf9d6a596c62": {
                    "Id": "Af0d41c88-917e-43c4-9012-bf9d6a596c62",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1388f7fc-1c2e-4e07-b2a9-f6bf4398023b": {
                    "Id": "A1388f7fc-1c2e-4e07-b2a9-f6bf4398023b",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa411414e-d70d-45b3-a154-61cb809f0c3e": {
                    "Id": "Aa411414e-d70d-45b3-a154-61cb809f0c3e",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between91And120DaysOr3ToUpTo4MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acff8b6cf-d08e-478f-9fc0-86e7ead606d3": {
                    "Id": "Acff8b6cf-d08e-478f-9fc0-86e7ead606d3",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between121And150DaysOrFrom4To5MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aec645145-a334-4da1-b172-957a78fb6de7": {
                    "Id": "Aec645145-a334-4da1-b172-957a78fb6de7",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A280e0a86-7a9f-4496-a185-0690c4dac4dc": {
                    "Id": "A280e0a86-7a9f-4496-a185-0690c4dac4dc",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_MoreThan180DaysOrMoreThan6MonthsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad20fad47-f90d-4216-9f0b-1644977c1708": {
                    "Id": "Ad20fad47-f90d-4216-9f0b-1644977c1708",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_InJudicialProcessMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5987fac1-6a43-4cd9-8e64-e9a4da2e0b3c": {
                    "Id": "A5987fac1-6a43-4cd9-8e64-e9a4da2e0b3c",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_ExtensionMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6dc157be-9eb2-4e66-87ae-b7fb50d99242": {
                    "Id": "A6dc157be-9eb2-4e66-87ae-b7fb50d99242",
                    "IdConcepto": "annext_NumberOfAssetsLastMonth",
                    "IdContextoPlantilla": "Context_Instant_TotalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A64258281-bf47-4417-a225-28b759e54f44": {
                    "Id": "A64258281-bf47-4417-a225-28b759e54f44",
                    "IdConcepto": "annext_GuaranteesOnGoodsRightsOrValuesTrust",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ac3aa7266-ab0f-46b7-b668-79d7ce7dba37": {
                    "Id": "Ac3aa7266-ab0f-46b7-b668-79d7ce7dba37",
                    "IdConcepto": "annext_ContractsAndAgreements",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Affc67055-a950-4162-bd18-4df92674349d": {
                    "Id": "Affc67055-a950-4162-bd18-4df92674349d",
                    "IdConcepto": "annext_JudicialAdministrativeOrArbitrationProceedings",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A20ef0388-87c0-4c5e-a570-4f6261301316": {
                    "Id": "A20ef0388-87c0-4c5e-a570-4f6261301316",
                    "IdConcepto": "annext_Directors",
                    "IdContextoPlantilla": "ctx_1",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Acee3ef76-298a-4189-b4a5-9e916ea7228b": {
                    "Id": "Acee3ef76-298a-4189-b4a5-9e916ea7228b",
                    "IdConcepto": "annext_AdditionalInformation",
                    "IdContextoPlantilla": "ctx_1",
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