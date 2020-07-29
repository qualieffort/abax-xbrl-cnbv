///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/rol_full_ifrs_mx_2019-01-01-815100
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_rol_full_ifrs_mx_2019_01_01_815100 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_rol_full_ifrs_mx_2019_01_01_815100
         */
        constructor() {

            this.ListadoDeFormulas = {

                'MontoTotal_ifrs_mx-cor_20160822_OutstandingBalance': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_OutstandingBalance',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        
                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",

                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                'MontoTotal_ifrs_mx-cor_20160822_InitialCreditLine': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_InitialCreditLine',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialCreditLine",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialCreditLine",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                }
                            ],
                            "MismasDimensiones": false, 
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),
               
                'MontoTotal_ifrs_mx-cor_20160822_ZeroToSixMonthsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ZeroToSixMonthsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                   
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),
            
                'MontoTotal_ifrs_mx-cor_20160822_SevenToTwelveMonthsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_SevenToTwelveMonthsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember"
                                },

                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                   

                'MontoTotal_ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),


                'MontoTotal_ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),
                'MontoTotal_ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),


                'MontoTotal_ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),



                /*Totales Bursatiles */

                

                'MontoTotal_ifrs_mx-cor_20160822_InitialAmountOfTheIssuance': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_InitialAmountOfTheIssuance',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) +bignumber(variable3)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialAmountOfTheIssuance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialAmountOfTheIssuance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialAmountOfTheIssuance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                'MontoTotal_ifrs_mx-cor_20160822_OutstandingBalance_bursatil': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_OutstandingBalance_bursatil',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) +bignumber(variable3)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                'MontoTotal_ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency_bursatil': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency_bursatil',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) +bignumber(variable3)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true,
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),


                /* Total Bursatil  + Miembros*/

                'MontoTotal_ifrs_mx-cor_20160822_ZeroToSixMonthsMember_bursatil': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ZeroToSixMonthsMember_bursatil',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) +bignumber(variable3)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                'MontoTotal_ifrs_mx-cor_20160822_SevenToTwelveMonthsMember_bursatil': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_SevenToTwelveMonthsMember_bursatil',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) +bignumber(variable3)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),


                'MontoTotal_ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember_bursatil': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember_bursatil',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) +bignumber(variable3)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),


                'MontoTotal_ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember_bursatil': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember_bursatil',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) +bignumber(variable3)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                'MontoTotal_ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMemberr_bursatil': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember_bursatil',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) +bignumber(variable3)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),


                /*Total circulantes */


                'MontoTotal_ifrs_mx-cor_20160822_OutstandingBalance_circulantes': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_OutstandingBalance_circulantes',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    ExcepcionSinHijos: true,
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),
                'MontoTotal_ifrs_mx-cor_20160822_InitialCreditLine_circulantes': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_InitialCreditLine_circulantes',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialCreditLine",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialCreditLine",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),
                'MontoTotal_ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency_circulantes': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency_circulantes',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                'MontoTotal_ifrs_mx-cor_20160822_ZeroToSixMonthsMember_circulantes': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ZeroToSixMonthsMember_circulantes',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"

                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                'MontoTotal_ifrs_mx-cor_20160822_SevenToTwelveMonthsMember_circulantes': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_SevenToTwelveMonthsMember_circulantes',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember"
                                },

                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),



                'MontoTotal_ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember_circulantes': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember_circulantes',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),


                'MontoTotal_ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember_circulantes': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember_circulantes',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),
                'MontoTotal_ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember_circulantes': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember_circulantes',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })
                    }
                }),

                /*Total circulantes + miembros */


                'MontoTotal_ifrs_mx-cor_20160822_TotalInitialCreditLineAndInitialAmountOfTheIssuance': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_TotalInitialCreditLineAndInitialAmountOfTheIssuance',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_TotalInitialCreditLineAndInitialAmountOfTheIssuance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                }
                 
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialCreditLine",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                }

                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialAmountOfTheIssuance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),

                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_InitialCreditLine",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })
                
                       
                    }
                }),


                'MontoTotal_OutstandingBalance': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_OutstandingBalance',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true,
                            "ValorFallback": "0"
                        })

                    }
                }),


                'MontoTotal_AmortizationDenominatedInDomesticCurrency': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_AmortizationDenominatedInDomesticCurrency',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                }

                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                }

                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })


                    }
                }),


                'MontoTotal_ZeroToSixMonthsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ZeroToSixMonthsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })
                    }
                }),

                'MontoTotal_SevenToTwelveMonthsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_SevenToTwelveMonthsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })
                    }
                }),

                'MontoTotal_ThirteenToEightTeenMonthsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ThirteenToEightTeenMonthsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })
                    }
                }),


                'MontoTotal_NineTeenToThirtySixMonthsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_NineTeenToThirtySixMonthsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })
                    }
                }),

                'MontoTotal_ThirtySevenMonthsOrMoreMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ThirtySevenMonthsOrMoreMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3) + bignumber(variable4)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })
                    }
                }),


                'MontoTotal_OutstandingBalance_Total': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_OutstandingBalance_Total',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3)  + bignumber(variable4) + bignumber(variable5) + bignumber(variable6)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable5": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable5",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable6": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable6",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })
                        
                    }
                }),
                'MontoTotal_OutstandingBalance_Total_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_OutstandingBalance_Total_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3)  + bignumber(variable4) + bignumber(variable5) + bignumber(variable6)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable5": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable5",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable6": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable6",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })

                    }
                }),

                'MontoTotal_OutstandingBalance_Total_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_OutstandingBalance_Total_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3)  + bignumber(variable4) + bignumber(variable5) + bignumber(variable6)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable5": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable5",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable6": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable6",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })

                    }
                }),
                'Requeridos__ifrs_mx-cor_20160822_InstitutionName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__ifrs_mx-cor_20160822_InstitutionName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ifrs_mx-cor_20160822_InstitutionName",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": true,
                                    "ConteoHechos": false,
                                    "EsDinamica": false,
                                    "FiltrosDimension": [
                                        {
                                            "Explicita": true,
                                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember",
                                            "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                            "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember"
                                        }
                                    ],
                                    "MismasDimensiones": true,
                                    "ConjuntoDimensionesParcial": true
                                }
                            }
                    }
                ),

                'Requeridos__ifrs_mx-cor_20160822_IsinAndOrTickerA': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__ifrs_mx-cor_20160822_IsinAndOrTickerB',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ifrs_mx-cor_20160822_IsinAndOrTicker",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": true,
                                    "ConteoHechos": false,
                                    "EsDinamica": false,
                                    "FiltrosDimension": [
                                        {
                                            "Explicita": true,
                                            "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                            "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember",
                                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember"
                                        }
                                    ],
                                    "MismasDimensiones": true,
                                    "ConjuntoDimensionesParcial": true
                                }
                            }
                    }
                ),

                'Requeridos__ifrs_mx-cor_20160822_IsinAndOrTickerB': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__ifrs_mx-cor_20160822_IsinAndOrTickerB',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ifrs_mx-cor_20160822_IsinAndOrTicker",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": true,
                                    "ConteoHechos": false,
                                    "EsDinamica": false,
                                    "FiltrosDimension": [

                                        {
                                            "Explicita": true,
                                            "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                            "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember",
                                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember"
                                        }
                                    ],
                                    "MismasDimensiones": true,
                                    "ConjuntoDimensionesParcial": true
                                }
                            }
                    }
                ),

                'Requeridos__ifrs_mx-cor_20160822_LiabilityCreditor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__ifrs_mx-cor_20160822_LiabilityCreditor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ifrs_mx-cor_20160822_LiabilityCreditor",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": true,
                                    "ConteoHechos": false,
                                    "EsDinamica": false,
                                    "FiltrosDimension": [
                                        {
                                            "Explicita": true,
                                            "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                            "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                        }
                                    ],
                                    "MismasDimensiones": true,
                                    "ConjuntoDimensionesParcial": true
                                }
                            }
                    }
                ),

                'MontoTotal_GrandTotalLiabilitiesMember_OutstandingBalance': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_GrandTotalLiabilitiesMember_OutstandingBalance',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3)  + bignumber(variable4) + bignumber(variable5) + bignumber(variable6)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable5": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable5",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable6": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable6",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })


                    }
                }),
                'MontoTotal_OutstandingBalance_BankingMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_OutstandingBalance_BankingMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3)  + bignumber(variable4) + bignumber(variable5) + bignumber(variable6)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable5": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable5",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable6": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable6",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        })


                    }
                }),
                'MontoTotal_OutstandingBalance_SotckMarketMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_OutstandingBalance_SotckMarketMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3)  + bignumber(variable4) + bignumber(variable5) + bignumber(variable6)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable5": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable5",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable6": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable6",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        })


                    }
                }),
                'MontoTotal_OutstandingBalance_PrivatePlacementsMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_OutstandingBalance_PrivatePlacementsMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3)  + bignumber(variable4) + bignumber(variable5) + bignumber(variable6)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable5": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable5",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable6": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable6",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        })


                    }
                }),
                'MontoTotal_OutstandingBalance_OtherCurrentAndNonCurrentLiabilitiesWithCostMember': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_OutstandingBalance_OtherCurrentAndNonCurrentLiabilitiesWithCostMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == (bignumber(variable2) + bignumber(variable3)  + bignumber(variable4) + bignumber(variable5) + bignumber(variable6)))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes al Saldo Insoluto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {

                        "variable1": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable1",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable4": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable4",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable5": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable5",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable6": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable6",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "EsDinamica": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
                                },
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        })


                    }
                })

            };

            this.ContextosPlantillaPorId = {
                "ctx_TotalBankingMember": {
                    "Id": "ctx_TotalBankingMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2015_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">full_ifrs_mx-cor_2016-08-22:TotalBankingMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                            "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                            "ElementoMiembroTipificado": null
                        },
                        {
                            "Explicita": false,
                            "IdDimension": "ifrs_mx-cor_20160822_LiabilitiesSequenceTypedAxis",
                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:LiabilitiesSequenceTypedAxis",
                            "ElementoMiembroTipificado": '<ifrs_mx-cor_20160822:LiabilitiesSequenceDomain xmlns:ifrs_mx-cor_20160822=\"http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22\">1</ifrs_mx-cor_20160822:LiabilitiesSequenceDomain>'
                        }                        

                    ]
                },
                "ctx_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember": {
                    "Id": "ctx_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2015_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                            "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                            "ElementoMiembroTipificado": null
                        },
                        {
                            "Explicita": false,
                            "IdDimension": "ifrs_mx-cor_20160822_LiabilitiesSequenceTypedAxis",
                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:LiabilitiesSequenceTypedAxis",
                            "ElementoMiembroTipificado": '<ifrs_mx-cor_20160822:LiabilitiesSequenceDomain xmlns:ifrs_mx-cor_20160822=\"http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22\">1</ifrs_mx-cor_20160822:LiabilitiesSequenceDomain>'
                        }

                    ]
                },
                "ctx_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember": {
                    "Id": "ctx_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2015_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                            "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                            "ElementoMiembroTipificado": null
                        },
                        {
                            "Explicita": false,
                            "IdDimension": "ifrs_mx-cor_20160822_LiabilitiesSequenceTypedAxis",
                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:LiabilitiesSequenceTypedAxis",
                            "ElementoMiembroTipificado": '<ifrs_mx-cor_20160822:LiabilitiesSequenceDomain xmlns:ifrs_mx-cor_20160822=\"http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22\">1</ifrs_mx-cor_20160822:LiabilitiesSequenceDomain>'
                        }

                    ]
                },

                "ctx_GrandTotalLiabilitiesMember": {
                    "Id": "ctx_GrandTotalLiabilitiesMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2015_09_30",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                            "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember",
                            "ElementoMiembroTipificado": null
                        },
                        {
                            "Explicita": false,
                            "IdDimension": "ifrs_mx-cor_20160822_LiabilitiesSequenceTypedAxis",
                            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:LiabilitiesSequenceTypedAxis",
                            "ElementoMiembroTipificado": '<ifrs_mx-cor_20160822:LiabilitiesSequenceDomain xmlns:ifrs_mx-cor_20160822=\"http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22\">1</ifrs_mx-cor_20160822:LiabilitiesSequenceDomain>'
                        }
                       
                    ]
                }
            };

            this.UnidadesPlantillaPorId = {
           
                "mxn": {
                    "Id": "mxn",
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
                "TotalBankingMember_OutstandingBalance-0000-0000": {
                    "Id": "TotalBankingMember_OutstandingBalance-0000-0000",
                    "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                    "IdContextoPlantilla": "ctx_TotalBankingMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "mxn",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "-3",
                    "Valor": "#valorDefaultNumerico"
                },
                "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_OutstandingBalance-0000-0000": {
                    "Id": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_OutstandingBalance-0000-0000",
                    "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                    "IdContextoPlantilla": "ctx_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "mxn",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "-3",
                    "Valor": "#valorDefaultNumerico"
                },
                "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_OutstandingBalance-0000-0000": {
                    "Id": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_OutstandingBalance-0000-0000",
                    "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                    "IdContextoPlantilla": "ctx_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "mxn",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "-3",
                    "Valor": "#valorDefaultNumerico"
                },
                "Total-AmortizationDenominatedInDomesticCurrency-0000-0000": {
                    "Id": "Total-AmortizationDenominatedInDomesticCurrency-0000-0000",
                    "IdConcepto": "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                    "IdContextoPlantilla": "ctx_GrandTotalLiabilitiesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "mxn",
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": "-3",
                    "Valor": "#valorDefaultNumerico"
                }
            };
        }
    }

}