///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/rol_full_ifrs_mx_2019-01-01-815101
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_rol_full_ifrs_mx_2019_01_01_815101 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_rol_full_ifrs_mx_2019_01_01_815101
         */
        constructor() {

            this.ListadoDeFormulas = {


                'VA_AnexoAA_VS_800100': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_AnexoAA_VS_800100',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(totalFunding) + bignumber(totalDebtInSecurities) + bignumber(totalUnpaidAccruedInterest) + bignumber(totalCreditsLoansOrNotRelevantFunding) ' +
                                   '  == bignumber(variable1) + bignumber(variable2)',
                        MensajeExito: 'El importe del Total de otros pasivos financieros a corto plazo + Total de otros pasivos financieros a largo plazo del rol [800100] corresponde a la suma de: ' +
                        'Total de financiamientos + Total de deuda bursátil + Total de intereses devengados no pagados + Total de créditos, préstamos o financiamientos no relevantes en el rol [815101]',
                        MensajeError: 'El importe del Total de otros pasivos financieros a corto plazo + Total de otros pasivos financieros a largo plazo del rol [800100] debe corresponder a la suma de: ' +
                        'Total de financiamientos + Total de deuda bursátil + Total de intereses devengados no pagados + Total de créditos, préstamos o financiamientos no relevantes en el rol [815101]',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'totalFunding': new model.DefinicionVariableFormula().deserialize({
                                Id: 'totalFunding',
                                IdConcepto: 'ifrs_mx-cor_20160822_TotalFunding',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalDeOtrosPasivosFinancierosACortoPlazo',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalDeOtrosPasivosFinancierosALargoPlazo',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        
                            'totalDebtInSecurities': new model.DefinicionVariableFormula().deserialize({
                                Id: 'totalDebtInSecurities',
                                IdConcepto: 'ifrs_mx-cor_20160822_TotalDebtInSecurities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'totalUnpaidAccruedInterest': new model.DefinicionVariableFormula().deserialize({
                                Id: 'totalUnpaidAccruedInterest',
                                IdConcepto: 'ifrs_mx-cor_20160822_TotalUnpaidAccruedInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'totalCreditsLoansOrNotRelevantFunding': new model.DefinicionVariableFormula().deserialize({
                                Id: 'totalCreditsLoansOrNotRelevantFunding',
                                IdConcepto: 'ifrs_mx-cor_20160822_TotalCreditsLoansOrNotRelevantFunding',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                            
                        }
                    }),
                
                'VA_IndiceDeCoberturaDelServicioDeLaDeuda': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_IndiceDeCoberturaDelServicioDeLaDeuda',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion:  '(bignumber(EstimatedDepreciationInterest) + bignumber(PlannedCapitalRedemption) + bignumber(RecurringCapitalExpendituresEstimates) + bignumber(DevelopmentExpendituresEstimatedNoDiscretionary)) != 0?('+
                                    'bignumber(variable1) == round(' +
                                    '((bignumber(LiquidAssets) + bignumber(RecoverableIVA) + bignumber(EstimatedOperatingIncome) + bignumber(RevolvingCreditLines)) /' +
                                    '(bignumber(EstimatedDepreciationInterest) + bignumber(PlannedCapitalRedemption) + bignumber(RecurringCapitalExpendituresEstimates) + bignumber(DevelopmentExpendituresEstimatedNoDiscretionary)))' +
                                    ' * 100 ) / 100):0==0',
                        MensajeExito: 'El valor de {variable1} es igual a la operación  (Activos Líquidos + IVA por recuperar + Utilidad Operativa Estimada + Líneas de Crédito Revolventes)  /  ( Amortización Estimadas Intereses + Amortización Programadas Capital + Gastos de Capital Recurrentes Estimados + Gastos de Desarrollo no Discrecional Estimados)',
                        MensajeError: 'El valor de {variable1} deber ser igual a la operación  (Activos Líquidos + IVA por recuperar + Utilidad Operativa Estimada + Líneas de Crédito Revolventes)  /  ( Amortización Estimadas Intereses + Amortización Programadas Capital + Gastos de Capital Recurrentes Estimados + Gastos de Desarrollo no Discrecional Estimados)',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20160822_CoverageRateDebtService',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'LiquidAssets': new model.DefinicionVariableFormula().deserialize({
                                Id: 'LiquidAssets',
                                IdConcepto: 'ifrs_mx-cor_20160822_LiquidAssets',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'RecoverableIVA': new model.DefinicionVariableFormula().deserialize({
                                Id: 'RecoverableIVA',
                                IdConcepto: 'ifrs_mx-cor_20160822_RecoverableIVA',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'EstimatedOperatingIncome': new model.DefinicionVariableFormula().deserialize({
                                Id: 'EstimatedOperatingIncome',
                                IdConcepto: 'ifrs_mx-cor_20160822_EstimatedOperatingIncome',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'RevolvingCreditLines': new model.DefinicionVariableFormula().deserialize({
                                Id: 'RevolvingCreditLines',
                                IdConcepto: 'ifrs_mx-cor_20160822_RevolvingCreditLines',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'EstimatedDepreciationInterest': new model.DefinicionVariableFormula().deserialize({
                                Id: 'EstimatedDepreciationInterest',
                                IdConcepto: 'ifrs_mx-cor_20160822_EstimatedDepreciationInterest',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'PlannedCapitalRedemption': new model.DefinicionVariableFormula().deserialize({
                                Id: 'PlannedCapitalRedemption',
                                IdConcepto: 'ifrs_mx-cor_20160822_PlannedCapitalRedemption',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'RecurringCapitalExpendituresEstimates': new model.DefinicionVariableFormula().deserialize({
                                Id: 'RecurringCapitalExpendituresEstimates',
                                IdConcepto: 'ifrs_mx-cor_20160822_RecurringCapitalExpendituresEstimates',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'DevelopmentExpendituresEstimatedNoDiscretionary': new model.DefinicionVariableFormula().deserialize({
                                Id: 'DevelopmentExpendituresEstimatedNoDiscretionary',
                                IdConcepto: 'ifrs_mx-cor_20160822_DevelopmentExpendituresEstimatedNoDiscretionary',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),

                'MontoTotal_ifrs_mx-cor_20160822_TotalFunding': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_TotalFunding',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2) + bignumber(variable3))',
                    MensajeExito: 'El valor de Total de financimientos es igual a la suma del: ' +
                        'Total de Saldo insoluto de Bancarios + Total de Saldo insoluto de Otros Pasivos Circulantes y No Circulantes con costo',
                    MensajeError: 'El valor de Total de financimientos debe ser igual a la suma del: ' +
                        'Total de Saldo insoluto de Bancarios + Total de Saldo insoluto de Otros Pasivos Circulantes y No Circulantes con costo',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ifrs_mx-cor_20160822_TotalFunding',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
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
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        }),
                        "variable3": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable3",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    Explicita: true,
                                    QNameDimension: 'http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis',
                                    QNameItemMiembro: 'http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember',
                                    IdDimension: 'ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis',
                                    IdItemMiembro: 'ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember'
                                }
                            ],
                            "MismasDimensiones": false,
                            "ConjuntoDimensionesParcial": true
                        })
                    }
                }),


                'MontoTotal_ifrs_mx-cor_20160822_TotalDebtInSecurities': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_TotalDebtInSecurities',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de Total de deuda bursátil es igual al : ' +
                        'Total de Saldo insoluto de Busátiles y Colocaciones Privadas',
                    MensajeError: 'El valor de Total de deuda bursátil debe ser igual a la suma del: ' +
                        'Total de Saldo insoluto de Busátiles y Colocaciones Privadas',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ifrs_mx-cor_20160822_TotalDebtInSecurities',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ifrs_mx-cor_20160822_OutstandingBalance',
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false,
                            FiltrosDimension: [
                                {
                                    Explicita: true,
                                    QNameDimension: 'http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis',
                                    QNameItemMiembro: 'http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember',
                                    IdDimension: 'ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis',
                                    IdItemMiembro: 'ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember'
                                }
                            ],
                            MismasDimensiones: false,
                            ConjuntoDimensionesParcial: true
                        })
                    }
                }),


                'MontoTotal_ifrs_mx-cor_20160822_TotalUnpaidAccruedInterest': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_TotalUnpaidAccruedInterest',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'bignumber(variable1) == bignumber(variable2)',
                    MensajeExito: 'El valor de Total de intereses devengados no pagados es igual a los : ' +
                        'Intereses devengados no pagados al cierre del trimestre en moneda nacional desglosado en Total general',
                    MensajeError: 'El valor de Total de intereses devengados no pagados debe ser igual a los: ' +
                        'Intereses devengados no pagados al cierre del trimestre en moneda nacional desglosado en Total general',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ifrs_mx-cor_20160822_TotalUnpaidAccruedInterest',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency',
                            PuedeEliminarse: false,
                            PuedeCrearse: false,
                            ConteoHechos: false,
                            FiltrosDimension: [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
                                    "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
                                }
                            ],
                            MismasDimensiones: false,
                            ConjuntoDimensionesParcial: true
                        })
                    }
                }),

                'VA_ifrs_mx-cor_20160822_CorrectivePlanSummaryText': new model.DefinicionFormula().deserialize({
                    Id: 'VA_ifrs_mx-cor_20160822_CorrectivePlanSummaryText',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(not(bignumber(variable2) >= 0.5) or squeeze(size(variable1)) > 0)',
                    MensajeExito: 'El valor de {variable1} no debe debe ser requirido debido a que el "Nivel de endeudamiento al cierre del trimestre" es menor al 50%',
                    MensajeError: 'El valor de {variable1} debe ser requirido debido a que el "Nivel de endeudamiento al cierre del trimestre" es mayor o igual al 50%',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ifrs_mx-cor_20160822_CorrectivePlanSummaryText',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ifrs_mx-cor_20160822_IndebtednessLevelAtTheEndOfTheQuarter',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }),
                

                'VA_NivelDeApalancamiento': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_NivelDeApalancamiento',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(bignumber(EquitySecurities)) != 0?(' +
                        'bignumber(variable1) == round( (bignumber(Assets)  /  bignumber(EquitySecurities)) * 100) / 100 ' +
                        '):0==0',
                        MensajeExito: 'El valor de {variable1} es la razón de Activos totales entre Títulos de capital',
                        MensajeError: 'El valor de {variable1} debe ser la razón de Activos totales entre Títulos de capital',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20160822_LeverageLevel',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'Assets': new model.DefinicionVariableFormula().deserialize({
                                Id: 'Assets',
                                IdConcepto: 'ifrs-full_Assets',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'EquitySecurities': new model.DefinicionVariableFormula().deserialize({
                                Id: 'EquitySecurities',
                                IdConcepto: 'ifrs_mx-cor_20160822_EquitySecurities',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_NivelEndeudamiento': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_NivelEndeudamiento',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(bignumber(Assets)) != 0?(' +
                        'bignumber(variable1) == round((( bignumber(TotalFunding) + bignumber(TotalDebtInSecurities) + bignumber(TotalUnpaidAccruedInterest) + bignumber(TotalCreditsLoansOrNotRelevantFunding) ) '+
                        '/'+
                        'bignumber(Assets) )* 100) / 100 ' +
                        '):0==0',
                        MensajeExito: 'El valor de {variable1} corresponde a la operación  (Total de Financiamientos + Total de Deuda Bursátil + Total de Intereses Devengados no Pagados + Total de créditos, préstamos o financiamientos no relevantes) / Activos totales. Debe redondearse a dos decimales.',
                        MensajeError: 'El valor de {variable1} debe corresponder a la operación  (Total de Financiamientos + Total de Deuda Bursátil + Total de Intereses Devengados no Pagados + Total de créditos, préstamos o financiamientos no relevantes) / Activos totales. Debe redondearse a dos decimales.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20160822_IndebtednessLevelAtTheEndOfTheQuarter',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'TotalFunding': new model.DefinicionVariableFormula().deserialize({
                                Id: 'TotalFunding',
                                IdConcepto: 'ifrs_mx-cor_20160822_TotalFunding',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'TotalDebtInSecurities': new model.DefinicionVariableFormula().deserialize({
                                Id: 'TotalDebtInSecurities',
                                IdConcepto: 'ifrs_mx-cor_20160822_TotalDebtInSecurities',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'TotalUnpaidAccruedInterest': new model.DefinicionVariableFormula().deserialize({
                                Id: 'TotalUnpaidAccruedInterest',
                                IdConcepto: 'ifrs_mx-cor_20160822_TotalUnpaidAccruedInterest',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'TotalCreditsLoansOrNotRelevantFunding': new model.DefinicionVariableFormula().deserialize({
                                Id: 'TotalCreditsLoansOrNotRelevantFunding',
                                IdConcepto: 'ifrs_mx-cor_20160822_TotalCreditsLoansOrNotRelevantFunding',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'Assets': new model.DefinicionVariableFormula().deserialize({
                                Id: 'Assets',
                                IdConcepto: 'ifrs-full_Assets',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    })


            };

            this.ContextosPlantillaPorId = {
              "ct1": {
                "Id": "ct1",
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
                  "ContieneInformacionDimensional": false,
                  "Escenario": null,
                  "ValoresDimension": []
                }
            };

            this.UnidadesPlantillaPorId = {
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
              },
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
  "ifrs_mx-cor_20160822_IndebtednessLevelAtTheEndOfTheQuarter_2785b06f-1525-4335-abe0-2a1b6b4fa119": {
    "Id": "ifrs_mx-cor_20160822_IndebtednessLevelAtTheEndOfTheQuarter_2785b06f-1525-4335-abe0-2a1b6b4fa119",
    "IdConcepto": "ifrs_mx-cor_20160822_IndebtednessLevelAtTheEndOfTheQuarter",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "pure",
    "Decimales": "1",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },

    "ifrs_mx-cor_20160822_TotalFunding_007d5bb7-422c-4f47-a4a4-d73934dee7d6": {
    "Id": "ifrs_mx-cor_20160822_TotalFunding_007d5bb7-422c-4f47-a4a4-d73934dee7d6",
    "IdConcepto": "ifrs_mx-cor_20160822_TotalFunding",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_TotalDebtInSecurities_2ee11baa-f584-4c37-ab14-d7acc21c48bd": {
    "Id": "ifrs_mx-cor_20160822_TotalDebtInSecurities_2ee11baa-f584-4c37-ab14-d7acc21c48bd",
    "IdConcepto": "ifrs_mx-cor_20160822_TotalDebtInSecurities",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_TotalUnpaidAccruedInterest_21bf852b-580a-4b21-ad53-308a7c8e49c3": {
    "Id": "ifrs_mx-cor_20160822_TotalUnpaidAccruedInterest_21bf852b-580a-4b21-ad53-308a7c8e49c3",
    "IdConcepto": "ifrs_mx-cor_20160822_TotalUnpaidAccruedInterest",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa0362da5-edfe-46d4-b504-4075688be74d": {
    "Id": "Aa0362da5-edfe-46d4-b504-4075688be74d",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_TotalCreditsLoansOrNotRelevantFunding_d7fc8bd1-f225-4391-8f33-2aa5419c1a01": {
    "Id": "ifrs_mx-cor_20160822_TotalCreditsLoansOrNotRelevantFunding_d7fc8bd1-f225-4391-8f33-2aa5419c1a01",
    "IdConcepto": "ifrs_mx-cor_20160822_TotalCreditsLoansOrNotRelevantFunding",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_LeverageLevelText_8081f31d-6430-4ceb-9960-845fe428aaf9": {
    "Id": "ifrs_mx-cor_20160822_LeverageLevelText_8081f31d-6430-4ceb-9960-845fe428aaf9",
    "IdConcepto": "ifrs_mx-cor_20160822_LeverageLevelText",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ifrs_mx-cor_20160822_LeverageLevel_59649681-5a21-4bde-92c6-90bfcab37dbd": {
    "Id": "ifrs_mx-cor_20160822_LeverageLevel_59649681-5a21-4bde-92c6-90bfcab37dbd",
    "IdConcepto": "ifrs_mx-cor_20160822_LeverageLevel",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "pure",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_EquitySecurities_e8a685dd-2a66-4b3c-bca8-4c0a8d8bf790": {
    "Id": "ifrs_mx-cor_20160822_EquitySecurities_e8a685dd-2a66-4b3c-bca8-4c0a8d8bf790",
    "IdConcepto": "ifrs_mx-cor_20160822_EquitySecurities",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_CoverageRateDebtService_df592dcc-9d40-44bd-97ca-e898688415f6": {
    "Id": "ifrs_mx-cor_20160822_CoverageRateDebtService_df592dcc-9d40-44bd-97ca-e898688415f6",
    "IdConcepto": "ifrs_mx-cor_20160822_CoverageRateDebtService",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "pure",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_LiquidAssets_98d628f2-73ca-487c-a5fa-be91b1cb2d14": {
    "Id": "ifrs_mx-cor_20160822_LiquidAssets_98d628f2-73ca-487c-a5fa-be91b1cb2d14",
    "IdConcepto": "ifrs_mx-cor_20160822_LiquidAssets",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_RecoverableIVA_78f42709-8f55-413e-8ca6-a4e12d84bcbb": {
    "Id": "ifrs_mx-cor_20160822_RecoverableIVA_78f42709-8f55-413e-8ca6-a4e12d84bcbb",
    "IdConcepto": "ifrs_mx-cor_20160822_RecoverableIVA",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_EstimatedOperatingIncome_797d88c0-5f35-4ee3-90ae-79bff5d1971b": {
    "Id": "ifrs_mx-cor_20160822_EstimatedOperatingIncome_797d88c0-5f35-4ee3-90ae-79bff5d1971b",
    "IdConcepto": "ifrs_mx-cor_20160822_EstimatedOperatingIncome",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_RevolvingCreditLines_b484d945-02e9-490f-b096-2e96451c5e66": {
    "Id": "ifrs_mx-cor_20160822_RevolvingCreditLines_b484d945-02e9-490f-b096-2e96451c5e66",
    "IdConcepto": "ifrs_mx-cor_20160822_RevolvingCreditLines",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_EstimatedDepreciationInterest_42906bd6-6e8e-4767-8c46-5551594065f7": {
    "Id": "ifrs_mx-cor_20160822_EstimatedDepreciationInterest_42906bd6-6e8e-4767-8c46-5551594065f7",
    "IdConcepto": "ifrs_mx-cor_20160822_EstimatedDepreciationInterest",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_PlannedCapitalRedemption_4fc08f5b-e005-4885-aaf2-73593ed50fee": {
    "Id": "ifrs_mx-cor_20160822_PlannedCapitalRedemption_4fc08f5b-e005-4885-aaf2-73593ed50fee",
    "IdConcepto": "ifrs_mx-cor_20160822_PlannedCapitalRedemption",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_RecurringCapitalExpendituresEstimates_bc2e7dfe-4d13-494b-acaf-ec60c1dd71ce": {
    "Id": "ifrs_mx-cor_20160822_RecurringCapitalExpendituresEstimates_bc2e7dfe-4d13-494b-acaf-ec60c1dd71ce",
    "IdConcepto": "ifrs_mx-cor_20160822_RecurringCapitalExpendituresEstimates",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_DevelopmentExpendituresEstimatedNoDiscretionary_9037c1c1-0c4e-4000-a0f3-e56ff50c99d0": {
    "Id": "ifrs_mx-cor_20160822_DevelopmentExpendituresEstimatedNoDiscretionary_9037c1c1-0c4e-4000-a0f3-e56ff50c99d0",
    "IdConcepto": "ifrs_mx-cor_20160822_DevelopmentExpendituresEstimatedNoDiscretionary",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": "mxn",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "ifrs_mx-cor_20160822_CommentsOnAnnexAA_6c46e936-9aa4-42f1-bb6f-bc9ccc2a4398": {
    "Id": "ifrs_mx-cor_20160822_CommentsOnAnnexAA_6c46e936-9aa4-42f1-bb6f-bc9ccc2a4398",
    "IdConcepto": "ifrs_mx-cor_20160822_CommentsOnAnnexAA",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
                },
    "ifrs_mx-cor_20160822_CorrectivePlanSummaryText_100082018": {
    "Id": "ifrs_mx-cor_20160822_CorrectivePlanSummaryText_100082018",
    "IdConcepto": "ifrs_mx-cor_20160822_CorrectivePlanSummaryText",
    "IdContextoPlantilla": "ct1",
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