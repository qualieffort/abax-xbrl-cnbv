///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ias_1_2014-03-05_role-410000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ias_1_2014_03_05_role_410000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ias_1_2014_03_05_role_410000
         */
        constructor() {

            this.ListadoDeFormulas = {
                //Se integran formulas de Value Assertion - ID : VA_410000_01
                'formula25': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula25',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'abs(bignumber(variable1)) > 0',
                        MensajeExito: 'El hecho reportado para el {variable1} tiene un valor diferente de 0.',
                        MensajeError: 'El hecho reportado para el {variable1} debería tener un valor diferente de 0.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_ComprehensiveIncome',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                FiltrosDimension:
                                [{
                                    Explicita: true,
                                    QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                    IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                    QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityMember',
                                    IdItemMiembro: 'ifrs-full_EquityMember'
                                }, {
                                        Explicita: true,
                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                        IdItemMiembro: 'ifrs-full_RestatedMember'
                                    }]
                            })
                        }
                    }
                    ),
                //Se integran formulas de Value Assertion - ID : VA_310000_01
                'formula24': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula24',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'abs(bignumber(variable1)) > 0',
                        MensajeExito: 'El hecho reportado para el {variable1} tiene un valor diferente de 0.',
                        MensajeError: 'El hecho reportado para el {variable1} debería tener un valor diferente de 0.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_ProfitLoss',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                FiltrosDimension:
                                [{
                                    Explicita: true,
                                    QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                    IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                    QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityMember',
                                    IdItemMiembro: 'ifrs-full_EquityMember'
                                }, {
                                        Explicita: true,
                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                        IdItemMiembro: 'ifrs-full_RestatedMember'
                                    }]

                            })
                        }
                }),
                //Solo si consolida, pero si no consolida, la participación no controladora siempre es 0
                //Resultado integral total = Resultado integral atribuible a la participación controladora + Resultado integral atribuible a la participación no controladora
                //Junio 2015
                'formula_410000_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula_410000_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(consolidado == "false") or (bignumber(variable1) == bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'En caso de que el reporte sea Consolidado, el valor de {variable1} es igual al valor de Resultado integral atribuible a la participación controladora + Resultado integral atribuible a la participación no controladora.',
                        MensajeError: 'En caso de que el reporte sea Consolidado, el valor de {variable1} debe ser igual al valor de Resultado integral atribuible a la participación controladora + Resultado integral atribuible a la participación no controladora.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_ComprehensiveIncome',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                FiltrosDimension:
                                [{
                                    Explicita: true,
                                    QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                    IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                    QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityMember',
                                    IdItemMiembro: 'ifrs-full_EquityMember'
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'consolidado': new model.DefinicionVariableFormula().deserialize({
                                Id: 'consolidado',
                                IdConcepto: 'ifrs_mx-cor_20141205_Consolidado',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ExcepcionPeriodo: true
                            })
                        }
                    })

            };

            this.ContextosPlantillaPorId = {
                "trimestre_actual": {
                    "Id": "trimestre_actual",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2015_07_01",
                        "FechaFin": "#fecha_2015_09_30",
                        "FechaInstante": ""
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
                "info_12_meses_al_cierre_trimestre": {
                    "Id": "info_12_meses_al_cierre_trimestre",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2014_10_01",
                        "FechaFin": "#fecha_2015_09_30",
                        "FechaInstante": ""
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
                "trimestre_ejercicio_anterior": {
                    "Id": "trimestre_ejercicio_anterior",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2014_07_01",
                        "FechaFin": "#fecha_2014_09_30",
                        "FechaInstante": ""
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
                "info_12_meses_al_cierre_trim_eje_anterior": {
                    "Id": "info_12_meses_al_cierre_trim_eje_anterior",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_10_01",
                        "FechaFin": "#fecha_2014_09_30",
                        "FechaInstante": ""
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
                "acumulado_ejercicio_actual": {
                    "Id": "acumulado_ejercicio_actual",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2015_01_01",
                        "FechaFin": "#fecha_2015_09_30",
                        "FechaInstante": ""
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
                "acumulado_ejercicio_anterior": {
                    "Id": "acumulado_ejercicio_anterior",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2014_01_01",
                        "FechaFin": "#fecha_2014_09_30",
                        "FechaInstante": ""
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
                "Peso_Mx": {
                    "Id": "Peso_Mx",
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
                "A465e1b09-486e-4c92-ab2e-a05fc04d21b1": {
                    "Id": "A465e1b09-486e-4c92-ab2e-a05fc04d21b1",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab6e4f3be-6798-4993-9754-aed7950b209a": {
                    "Id": "Ab6e4f3be-6798-4993-9754-aed7950b209a",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af31cfe25-cc23-49b7-ab0c-a1cc4f39e157": {
                    "Id": "Af31cfe25-cc23-49b7-ab0c-a1cc4f39e157",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A62136776-c1a5-4fef-b1ba-7537fc51a783": {
                    "Id": "A62136776-c1a5-4fef-b1ba-7537fc51a783",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aabae587d-e04d-4229-9426-ed722436f9d5": {
                    "Id": "Aabae587d-e04d-4229-9426-ed722436f9d5",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A80034792-af8c-43f4-bf7a-0076c63f7550": {
                    "Id": "A80034792-af8c-43f4-bf7a-0076c63f7550",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac17393af-12e2-4ef3-aafc-166dbc35d9f6": {
                    "Id": "Ac17393af-12e2-4ef3-aafc-166dbc35d9f6",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesFromInvestmentsInEquityInstruments",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1af810c5-ee3c-4564-b0f4-2988184ffeb2": {
                    "Id": "A1af810c5-ee3c-4564-b0f4-2988184ffeb2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesFromInvestmentsInEquityInstruments",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A524f55a9-6c49-4c4d-abc8-7c24330df0ee": {
                    "Id": "A524f55a9-6c49-4c4d-abc8-7c24330df0ee",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesFromInvestmentsInEquityInstruments",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A072d7733-d640-4f32-967b-ab4162553dd2": {
                    "Id": "A072d7733-d640-4f32-967b-ab4162553dd2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesFromInvestmentsInEquityInstruments",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acf154981-49bf-4f31-9206-10bbe70011f1": {
                    "Id": "Acf154981-49bf-4f31-9206-10bbe70011f1",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae35af76e-a0af-4f1d-a275-253ed02c9840": {
                    "Id": "Ae35af76e-a0af-4f1d-a275-253ed02c9840",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adb4705b3-15ee-4cde-a176-8cf80c916ee1": {
                    "Id": "Adb4705b3-15ee-4cde-a176-8cf80c916ee1",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A63370ff1-b09c-4a7b-a2b7-fa2f45917828": {
                    "Id": "A63370ff1-b09c-4a7b-a2b7-fa2f45917828",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A50815570-ae6c-4052-80fd-5858e6ccbafe": {
                    "Id": "A50815570-ae6c-4052-80fd-5858e6ccbafe",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRemeasurementsOfDefinedBenefitPlans",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A822f55f5-bb47-4b5b-b71b-0a9baa71a7ac": {
                    "Id": "A822f55f5-bb47-4b5b-b71b-0a9baa71a7ac",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRemeasurementsOfDefinedBenefitPlans",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab5005c1b-95fd-46e6-ac67-eccf85794e48": {
                    "Id": "Ab5005c1b-95fd-46e6-ac67-eccf85794e48",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRemeasurementsOfDefinedBenefitPlans",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2f2ea4bf-924c-473b-80e1-67f4fb0b8f15": {
                    "Id": "A2f2ea4bf-924c-473b-80e1-67f4fb0b8f15",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRemeasurementsOfDefinedBenefitPlans",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6356bbff-621e-4398-8f2f-5bea8b790003": {
                    "Id": "A6356bbff-621e-4398-8f2f-5bea8b790003",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiability",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A81862f7e-0b93-4681-bdac-3b222e48540d": {
                    "Id": "A81862f7e-0b93-4681-bdac-3b222e48540d",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiability",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8ee39d8e-319b-4607-be95-aea8ef41e40a": {
                    "Id": "A8ee39d8e-319b-4607-be95-aea8ef41e40a",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiability",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab5510894-3eee-42b7-870b-5b2bea868078": {
                    "Id": "Ab5510894-3eee-42b7-870b-5b2bea868078",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiability",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acf04c6a3-27cc-49b5-a1b3-0251a9c58f57": {
                    "Id": "Acf04c6a3-27cc-49b5-a1b3-0251a9c58f57",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac77a9ab4-3eac-407a-9e40-260590945dbe": {
                    "Id": "Ac77a9ab4-3eac-407a-9e40-260590945dbe",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A31e352f5-39e5-4af5-8b0f-fb4082971752": {
                    "Id": "A31e352f5-39e5-4af5-8b0f-fb4082971752",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac1d86255-aa9e-446d-9d87-573946905edb": {
                    "Id": "Ac1d86255-aa9e-446d-9d87-573946905edb",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstruments",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A04006335-2773-4c11-acec-6c7211d069c2": {
                    "Id": "A04006335-2773-4c11-acec-6c7211d069c2",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae7d63e09-6ea8-410d-bc7b-df3470814ba6": {
                    "Id": "Ae7d63e09-6ea8-410d-bc7b-df3470814ba6",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0b6cbf93-0ab1-404c-bb27-65bbd211ab41": {
                    "Id": "A0b6cbf93-0ab1-404c-bb27-65bbd211ab41",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A30da87a6-9e02-4fd7-8d0b-59aca99e55bf": {
                    "Id": "A30da87a6-9e02-4fd7-8d0b-59aca99e55bf",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A69c7ab02-0ee4-40c6-b306-e716a74452c9": {
                    "Id": "A69c7ab02-0ee4-40c6-b306-e716a74452c9",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abe6a28c2-754d-45f4-9ab1-165f259ea184": {
                    "Id": "Abe6a28c2-754d-45f4-9ab1-165f259ea184",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adf7102f9-f0e0-4419-8016-df948bc486dd": {
                    "Id": "Adf7102f9-f0e0-4419-8016-df948bc486dd",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A76e64672-1946-411d-bfbf-fb34b9af4ed5": {
                    "Id": "A76e64672-1946-411d-bfbf-fb34b9af4ed5",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa02f48f2-ead6-4f59-98ef-cd80b7de504c": {
                    "Id": "Aa02f48f2-ead6-4f59-98ef-cd80b7de504c",
                    "IdConcepto": "ifrs-full_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaff7c09c-1220-4855-ae7e-5272dd1f395a": {
                    "Id": "Aaff7c09c-1220-4855-ae7e-5272dd1f395a",
                    "IdConcepto": "ifrs-full_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3036af40-b229-41a5-b05e-50a02acd11c0": {
                    "Id": "A3036af40-b229-41a5-b05e-50a02acd11c0",
                    "IdConcepto": "ifrs-full_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab2b333f1-21c2-4e79-81c1-78c430c47ac5": {
                    "Id": "Ab2b333f1-21c2-4e79-81c1-78c430c47ac5",
                    "IdConcepto": "ifrs-full_GainsLossesOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e5d2324-22d2-44e6-9c4c-915b363ad14d": {
                    "Id": "A1e5d2324-22d2-44e6-9c4c-915b363ad14d",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A40538cf2-3f20-4d9e-ab6e-26ea45c7d75d": {
                    "Id": "A40538cf2-3f20-4d9e-ab6e-26ea45c7d75d",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aecb4f70f-93f5-4985-a769-0f77e859b731": {
                    "Id": "Aecb4f70f-93f5-4985-a769-0f77e859b731",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A64eb0c74-eaa9-4718-b670-caa2d0b1b40a": {
                    "Id": "A64eb0c74-eaa9-4718-b670-caa2d0b1b40a",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnExchangeDifferencesOnTranslationNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A121896b9-e9b8-4947-a94d-3deaaeb2189b": {
                    "Id": "A121896b9-e9b8-4947-a94d-3deaaeb2189b",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxExchangeDifferencesOnTranslation",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9e78757c-6ff3-482c-80c0-12c5759ebbfd": {
                    "Id": "A9e78757c-6ff3-482c-80c0-12c5759ebbfd",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxExchangeDifferencesOnTranslation",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af23e1a05-b503-43fd-b117-615bf874cf89": {
                    "Id": "Af23e1a05-b503-43fd-b117-615bf874cf89",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxExchangeDifferencesOnTranslation",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1f2b7ab7-34c1-415d-9614-88c4b2e30672": {
                    "Id": "A1f2b7ab7-34c1-415d-9614-88c4b2e30672",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxExchangeDifferencesOnTranslation",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A203203f3-d369-46ac-8044-7351df138ecf": {
                    "Id": "A203203f3-d369-46ac-8044-7351df138ecf",
                    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af011b111-f63c-4695-b30e-a6060d06da2e": {
                    "Id": "Af011b111-f63c-4695-b30e-a6060d06da2e",
                    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acff09098-f54e-43da-954f-4f2f26ae3f5d": {
                    "Id": "Acff09098-f54e-43da-954f-4f2f26ae3f5d",
                    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A02279f68-4fc6-47fc-a602-2adcc21af5e4": {
                    "Id": "A02279f68-4fc6-47fc-a602-2adcc21af5e4",
                    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac9cd0fa5-0945-4ab3-bd26-2ed2c621280d": {
                    "Id": "Ac9cd0fa5-0945-4ab3-bd26-2ed2c621280d",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A975e8868-ca71-4bd6-b562-2ffbda4537e1": {
                    "Id": "A975e8868-ca71-4bd6-b562-2ffbda4537e1",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab0d06ba2-887c-472c-a2db-94fc01671a6b": {
                    "Id": "Ab0d06ba2-887c-472c-a2db-94fc01671a6b",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A89d3558e-f5f6-4c41-9440-3225e2fd51e5": {
                    "Id": "A89d3558e-f5f6-4c41-9440-3225e2fd51e5",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab7875554-67ea-4b33-8502-e3ecad02f565": {
                    "Id": "Ab7875554-67ea-4b33-8502-e3ecad02f565",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aed52314e-143e-4193-b5a0-2b47b4f0836a": {
                    "Id": "Aed52314e-143e-4193-b5a0-2b47b4f0836a",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A441783a5-d237-42a6-aeb3-17637e1cdb6b": {
                    "Id": "A441783a5-d237-42a6-aeb3-17637e1cdb6b",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af1100ccc-f7cb-41ec-a343-a674c9083c4d": {
                    "Id": "Af1100ccc-f7cb-41ec-a343-a674c9083c4d",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab26f273b-d97d-4cb0-8627-23b661c22ad1": {
                    "Id": "Ab26f273b-d97d-4cb0-8627-23b661c22ad1",
                    "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae91c1a1b-3a1a-461e-bb91-e6c9821f94f0": {
                    "Id": "Ae91c1a1b-3a1a-461e-bb91-e6c9821f94f0",
                    "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Accdfeb23-7f14-406c-9393-913e84cd1385": {
                    "Id": "Accdfeb23-7f14-406c-9393-913e84cd1385",
                    "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A635251d4-cd16-4574-82a8-6cbdfc9c2492": {
                    "Id": "A635251d4-cd16-4574-82a8-6cbdfc9c2492",
                    "IdConcepto": "ifrs-full_GainsLossesOnCashFlowHedgesNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A48928c88-0032-4b10-8915-fe707c0d4f1c": {
                    "Id": "A48928c88-0032-4b10-8915-fe707c0d4f1c",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A81f52159-1162-4b1e-8a29-c1fd5534fffa": {
                    "Id": "A81f52159-1162-4b1e-8a29-c1fd5534fffa",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2c86ad3a-252e-4ba5-afb5-41673d008836": {
                    "Id": "A2c86ad3a-252e-4ba5-afb5-41673d008836",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af67a72c7-a5cb-427f-9636-316c6bb79d2c": {
                    "Id": "Af67a72c7-a5cb-427f-9636-316c6bb79d2c",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A98b6f695-8f64-4094-819e-c99733c96250": {
                    "Id": "A98b6f695-8f64-4094-819e-c99733c96250",
                    "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A57008131-0822-4424-842d-3c58be5ee4f0": {
                    "Id": "A57008131-0822-4424-842d-3c58be5ee4f0",
                    "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1abc0b1b-95b8-47c9-8552-31b359000e95": {
                    "Id": "A1abc0b1b-95b8-47c9-8552-31b359000e95",
                    "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae93e632a-4ca5-4fea-89f6-0d750ee05af1": {
                    "Id": "Ae93e632a-4ca5-4fea-89f6-0d750ee05af1",
                    "IdConcepto": "ifrs-full_AdjustmentsForAmountsTransferredToInitialCarryingAmountOfHedgedItems",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0e484b2d-0504-4a6e-ab1f-82dc4544d3cb": {
                    "Id": "A0e484b2d-0504-4a6e-ab1f-82dc4544d3cb",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9458d87e-9bfc-453d-88b6-15daee7a293e": {
                    "Id": "A9458d87e-9bfc-453d-88b6-15daee7a293e",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5d8ca238-bd46-4363-92a1-b7433702f011": {
                    "Id": "A5d8ca238-bd46-4363-92a1-b7433702f011",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A27cef46f-7e8c-4dcb-bffb-d7c96f0b8c95": {
                    "Id": "A27cef46f-7e8c-4dcb-bffb-d7c96f0b8c95",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxCashFlowHedges",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A16cf73a8-1752-43f1-ac4a-dcff003f6d56": {
                    "Id": "A16cf73a8-1752-43f1-ac4a-dcff003f6d56",
                    "IdConcepto": "ifrs-full_GainsLossesOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6f8da6ab-53a1-488a-a2ca-064435144e6a": {
                    "Id": "A6f8da6ab-53a1-488a-a2ca-064435144e6a",
                    "IdConcepto": "ifrs-full_GainsLossesOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5b743f65-eb79-455b-a1d0-2bd5f95dfb6b": {
                    "Id": "A5b743f65-eb79-455b-a1d0-2bd5f95dfb6b",
                    "IdConcepto": "ifrs-full_GainsLossesOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4aa76906-363e-4748-949c-926c7e949a0c": {
                    "Id": "A4aa76906-363e-4748-949c-926c7e949a0c",
                    "IdConcepto": "ifrs-full_GainsLossesOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab08ad3f5-07d4-451b-a681-ba33c9dfd7c3": {
                    "Id": "Ab08ad3f5-07d4-451b-a681-ba33c9dfd7c3",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9c99eb97-68c6-4c26-b62a-4edee01d1dee": {
                    "Id": "A9c99eb97-68c6-4c26-b62a-4edee01d1dee",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac1be9bd8-1eae-4d3c-b01d-fbb78f3de566": {
                    "Id": "Ac1be9bd8-1eae-4d3c-b01d-fbb78f3de566",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3883f9b9-5c21-4da5-a556-1d8750ad34f5": {
                    "Id": "A3883f9b9-5c21-4da5-a556-1d8750ad34f5",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnHedgesOfNetInvestmentsInForeignOperationsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa3f007ce-ef25-4a01-bc3e-b40a6931d7d9": {
                    "Id": "Aa3f007ce-ef25-4a01-bc3e-b40a6931d7d9",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxHedgesOfNetInvestmentsInForeignOperations",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A138dae23-5b7a-4a7d-a174-14db0a3cf2ad": {
                    "Id": "A138dae23-5b7a-4a7d-a174-14db0a3cf2ad",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxHedgesOfNetInvestmentsInForeignOperations",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A660c92c2-24e4-40e6-89e9-e79cb0195fe7": {
                    "Id": "A660c92c2-24e4-40e6-89e9-e79cb0195fe7",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxHedgesOfNetInvestmentsInForeignOperations",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae9c9e7a4-9ced-4455-9a8a-2ace8ef975d2": {
                    "Id": "Ae9c9e7a4-9ced-4455-9a8a-2ace8ef975d2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxHedgesOfNetInvestmentsInForeignOperations",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afbd1b314-878f-4d08-9286-af6a20dba5dd": {
                    "Id": "Afbd1b314-878f-4d08-9286-af6a20dba5dd",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfTimeValueOfOptionsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acfd48c66-3bfb-44ca-912a-1273e5fab542": {
                    "Id": "Acfd48c66-3bfb-44ca-912a-1273e5fab542",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfTimeValueOfOptionsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A053db87b-778f-4651-ac1a-57a25dba8863": {
                    "Id": "A053db87b-778f-4651-ac1a-57a25dba8863",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfTimeValueOfOptionsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A86084755-4d85-49e4-9c6c-0ea1fe226f08": {
                    "Id": "A86084755-4d85-49e4-9c6c-0ea1fe226f08",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfTimeValueOfOptionsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aec67850e-6028-4da7-9a52-54fc059c6585": {
                    "Id": "Aec67850e-6028-4da7-9a52-54fc059c6585",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfTimeValueOfOptionsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac8bd4490-1109-4fd1-815f-a1ecde53966b": {
                    "Id": "Ac8bd4490-1109-4fd1-815f-a1ecde53966b",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfTimeValueOfOptionsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad99043e0-573e-47fa-b869-77b2eeade5a6": {
                    "Id": "Ad99043e0-573e-47fa-b869-77b2eeade5a6",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfTimeValueOfOptionsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0ab5efcc-7338-4a92-a73e-f2be6cedc860": {
                    "Id": "A0ab5efcc-7338-4a92-a73e-f2be6cedc860",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfTimeValueOfOptionsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab6c58d40-279d-4aa7-8993-662a6d348570": {
                    "Id": "Ab6c58d40-279d-4aa7-8993-662a6d348570",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfTimeValueOfOptions",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A69981395-0c15-47dc-afb2-dd76e9bfdca1": {
                    "Id": "A69981395-0c15-47dc-afb2-dd76e9bfdca1",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfTimeValueOfOptions",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9d9b26ab-e563-4fbb-9e1c-c9af95ef8218": {
                    "Id": "A9d9b26ab-e563-4fbb-9e1c-c9af95ef8218",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfTimeValueOfOptions",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8ea3956c-3a5c-456e-a13f-265c578cce6f": {
                    "Id": "A8ea3956c-3a5c-456e-a13f-265c578cce6f",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfTimeValueOfOptions",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A044d6788-d2ac-4d22-9e59-1eb26992a243": {
                    "Id": "A044d6788-d2ac-4d22-9e59-1eb26992a243",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab0b6f974-6971-4f77-b824-208a8f0b2173": {
                    "Id": "Ab0b6f974-6971-4f77-b824-208a8f0b2173",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af8d15166-b6c2-4699-989d-e3eb88d53e62": {
                    "Id": "Af8d15166-b6c2-4699-989d-e3eb88d53e62",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A29118f60-6374-4b78-a5a7-aac8c556409e": {
                    "Id": "A29118f60-6374-4b78-a5a7-aac8c556409e",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A11f5b76f-2899-48cf-80af-9f966e20fe4c": {
                    "Id": "A11f5b76f-2899-48cf-80af-9f966e20fe4c",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A703e7e66-4c92-41d9-9331-b212062c0c67": {
                    "Id": "A703e7e66-4c92-41d9-9331-b212062c0c67",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3be2c4c0-e23b-4477-9ae6-25d78396c77d": {
                    "Id": "A3be2c4c0-e23b-4477-9ae6-25d78396c77d",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa7b1d50a-0221-43c0-a623-5b43ce2f39b8": {
                    "Id": "Aa7b1d50a-0221-43c0-a623-5b43ce2f39b8",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForwardElementsOfForwardContractsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8cb383be-cbc9-4e2b-91c4-60f83a9357d2": {
                    "Id": "A8cb383be-cbc9-4e2b-91c4-60f83a9357d2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForwardElementsOfForwardContracts",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab845c643-dd77-4dfb-881f-1c4de8310809": {
                    "Id": "Ab845c643-dd77-4dfb-881f-1c4de8310809",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForwardElementsOfForwardContracts",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A238b0b84-0b6b-464a-b97d-26b778810109": {
                    "Id": "A238b0b84-0b6b-464a-b97d-26b778810109",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForwardElementsOfForwardContracts",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac3518bc4-ff09-4944-938a-99ffa89c156f": {
                    "Id": "Ac3518bc4-ff09-4944-938a-99ffa89c156f",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForwardElementsOfForwardContracts",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e2c8c49-98c7-4066-8168-019f90df8c9f": {
                    "Id": "A1e2c8c49-98c7-4066-8168-019f90df8c9f",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7c97078a-ccfc-4d7e-ab10-ae5af88c37b3": {
                    "Id": "A7c97078a-ccfc-4d7e-ab10-ae5af88c37b3",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A39e95513-70c6-4595-b637-44003e7d9239": {
                    "Id": "A39e95513-70c6-4595-b637-44003e7d9239",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af1aad941-4a72-4bbd-a004-18814e8c90f9": {
                    "Id": "Af1aad941-4a72-4bbd-a004-18814e8c90f9",
                    "IdConcepto": "ifrs-full_GainsLossesOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abb3235f0-45a9-4b8c-bcd2-eaed622de903": {
                    "Id": "Abb3235f0-45a9-4b8c-bcd2-eaed622de903",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f1eab6b-dbef-4a2e-824d-9b793d59a256": {
                    "Id": "A4f1eab6b-dbef-4a2e-824d-9b793d59a256",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A833ce4e3-6668-4967-af89-eb8ab735059f": {
                    "Id": "A833ce4e3-6668-4967-af89-eb8ab735059f",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa0fe7769-b297-483f-99c4-ed08f53ccba8": {
                    "Id": "Aa0fe7769-b297-483f-99c4-ed08f53ccba8",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnChangeInValueOfForeignCurrencyBasisSpreadsNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acc24e74d-78e3-47ce-9ad6-3d478068fa2e": {
                    "Id": "Acc24e74d-78e3-47ce-9ad6-3d478068fa2e",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForeignCurrencyBasisSpreads",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4d18d78b-7966-4b16-8033-eeac91ef0f16": {
                    "Id": "A4d18d78b-7966-4b16-8033-eeac91ef0f16",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForeignCurrencyBasisSpreads",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8add5218-95dd-44e4-a21e-11901f3c5750": {
                    "Id": "A8add5218-95dd-44e4-a21e-11901f3c5750",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForeignCurrencyBasisSpreads",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac33c6ea8-3307-49fa-af70-168cf3914cb5": {
                    "Id": "Ac33c6ea8-3307-49fa-af70-168cf3914cb5",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxChangeInValueOfForeignCurrencyBasisSpreads",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A774b27ca-04ba-43ea-906a-a2efbabec32a": {
                    "Id": "A774b27ca-04ba-43ea-906a-a2efbabec32a",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3ef2cc1b-29d8-49fe-8645-b336852f9e5e": {
                    "Id": "A3ef2cc1b-29d8-49fe-8645-b336852f9e5e",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aca1ad494-cd19-48b0-9f0e-25933e79c6ca": {
                    "Id": "Aca1ad494-cd19-48b0-9f0e-25933e79c6ca",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af7a519c6-3a07-4e03-a3b0-7b53c2219084": {
                    "Id": "Af7a519c6-3a07-4e03-a3b0-7b53c2219084",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5b80fafe-67d9-4cd1-afdf-7ede2f36d136": {
                    "Id": "A5b80fafe-67d9-4cd1-afdf-7ede2f36d136",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adc59f2e3-4459-4889-a010-549ba7b955cf": {
                    "Id": "Adc59f2e3-4459-4889-a010-549ba7b955cf",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac7c37b22-0bbf-4171-b278-b1638bfab411": {
                    "Id": "Ac7c37b22-0bbf-4171-b278-b1638bfab411",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A37796dd2-6619-4ebb-ba9b-19923d75d975": {
                    "Id": "A37796dd2-6619-4ebb-ba9b-19923d75d975",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa4c2e0bd-f57b-40c9-aacc-8bb41627f0fd": {
                    "Id": "Aa4c2e0bd-f57b-40c9-aacc-8bb41627f0fd",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab6d2e4f3-be2b-4efa-b1e6-4163400c9f53": {
                    "Id": "Ab6d2e4f3-be2b-4efa-b1e6-4163400c9f53",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2bffa086-a0f2-4fb5-a390-637e1afedb28": {
                    "Id": "A2bffa086-a0f2-4fb5-a390-637e1afedb28",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3dbf55af-a3c0-4ed2-a1c7-bf1c2333991c": {
                    "Id": "A3dbf55af-a3c0-4ed2-a1c7-bf1c2333991c",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1ea6cf51-8495-4ff8-9d8b-7c4f1edc87a1": {
                    "Id": "A1ea6cf51-8495-4ff8-9d8b-7c4f1edc87a1",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2573982d-fc1d-43e3-9852-c71663c73ce7": {
                    "Id": "A2573982d-fc1d-43e3-9852-c71663c73ce7",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7b1d2ee9-cd01-40f2-a771-fc694fbbc5ce": {
                    "Id": "A7b1d2ee9-cd01-40f2-a771-fc694fbbc5ce",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7ecc3b12-7d2d-43bf-b82f-63da2ce02df5": {
                    "Id": "A7ecc3b12-7d2d-43bf-b82f-63da2ce02df5",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8a586280-d6a4-45af-b5b6-fd538d2c2617": {
                    "Id": "A8a586280-d6a4-45af-b5b6-fd538d2c2617",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4160f324-b640-40fc-a9d7-6efa1fa5a144": {
                    "Id": "A4160f324-b640-40fc-a9d7-6efa1fa5a144",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af90ea505-edc8-4fac-96ce-04536bcfeb0b": {
                    "Id": "Af90ea505-edc8-4fac-96ce-04536bcfeb0b",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4c37155f-00ed-4d4e-b7be-3d7b03211546": {
                    "Id": "A4c37155f-00ed-4d4e-b7be-3d7b03211546",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adf311d00-c9f8-455a-9cba-2f2679ce6792": {
                    "Id": "Adf311d00-c9f8-455a-9cba-2f2679ce6792",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ace7b292e-d82f-4c12-a2da-1adc20f85ee1": {
                    "Id": "Ace7b292e-d82f-4c12-a2da-1adc20f85ee1",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad8ef61a6-2f8f-4ebf-a286-d9bf611d5e3a": {
                    "Id": "Ad8ef61a6-2f8f-4ebf-a286-d9bf611d5e3a",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A33a161f3-d5a4-4e29-9c61-e39bb6901cfa": {
                    "Id": "A33a161f3-d5a4-4e29-9c61-e39bb6901cfa",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                }
            };
        }
    }

}