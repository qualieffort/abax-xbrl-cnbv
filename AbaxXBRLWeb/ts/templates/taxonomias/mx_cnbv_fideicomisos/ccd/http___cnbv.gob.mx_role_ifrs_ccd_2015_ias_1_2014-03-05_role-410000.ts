///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ccd/2015/ias_1_2014-03-05_role-410000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_410000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_410000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_410000_1_Consolidado': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_410000_1_Consolidado',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();

                                var idFormula = "VA_410000_1_Consolidado";

                                var formula = servicioAbax.obtenDefinicionFormulaPorId(idFormula);

                                var expresion: string = 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)';
                                var mensajeExito: string = 'El valor de {variable1} es igual al valor de Resultado integral atribuible a la participación controladora + Resultado integral atribuible a la participación no controladora.';
                                var mensajeError: string = 'El valor de {variable1} debe ser igual al valor de Resultado integral atribuible a la participación controladora + Resultado integral atribuible a la participación no controladora.';
                                var definicionVariables: { [nombre: string]: model.DefinicionVariableFormula } = {};


                                definicionVariables["variable1"] = new model.DefinicionVariableFormula().deserialize({
                                    Id: "variable1",
                                    IdConcepto: "ifrs-full_ComprehensiveIncome",
                                    PuedeCrearse: false,
                                    PuedeEliminarse: false,
                                    ConteoHechos: false,
                                    EsDinamica: false,
                                    ValorFallback: '0',
                                    FiltrosDimension: [{
                                        Explicita: true,
                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                        IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityMember',
                                        IdItemMiembro: 'ifrs-full_EquityMember'
                                    },
                                        {
                                            Explicita: true,
                                            QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                            IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                            QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                            IdItemMiembro: 'ifrs-full_RestatedMember'
                                        }]
                                });

                                definicionVariables["variable2"] = new model.DefinicionVariableFormula().deserialize({
                                    Id: "variable2",
                                    IdConcepto: "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                                    PuedeCrearse: false,
                                    PuedeEliminarse: false,
                                    ConteoHechos: false
                                });

                                definicionVariables["variable3"] = new model.DefinicionVariableFormula().deserialize({
                                    Id: "variable3",
                                    IdConcepto: "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                                    PuedeCrearse: false,
                                    PuedeEliminarse: false,
                                    ConteoHechos: false
                                });



                                var idHechos = servicioAbax.getDocumentoInstancia().HechosPorIdConcepto["mx_ccd_Consolidated"];

                                if (idHechos) {
                                    //En el caso de consolidado solo se tiene un hecho con ese valor
                                    var hecho = servicioAbax.getDocumentoInstancia().HechosPorId[idHechos[0]];

                                    if (hecho.ValorHecho && hecho.ValorHecho == "SI") {
                                        formula = new model.DefinicionFormula().deserialize({
                                            Id: idFormula,
                                            TipoFormula: model.TipoFormula.ValueAssertion,
                                            Expresion: expresion,
                                            MensajeExito: mensajeExito,
                                            MensajeError: mensajeError,
                                            VariablesCoincidenPeriodo: true,
                                            DefinicionVariables: definicionVariables
                                        });
                                        servicioAbax.agregaFormulaPlantilla(formula);
                                        servicioAbax.evaluaFormula(formula.Id);
                                    }
                                }


                            }
                        }
                    })
            };

            this.ContextosPlantillaPorId = {
                "trimestre_acumulado_comparativo": {
                    "Id": "trimestre_acumulado_comparativo",
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
                },
                "trimestre_acumulado_actual": {
                    "Id": "trimestre_acumulado_actual",
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

                "trimestre_comparativo": {
                "Id": "trimestre_comparativo",
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
                "AT_410_1": {
                    "Id": "AT_410_1",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_1": {
                    "Id": "ATANT_410_1",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A11bc8b71-773e-4668-a85e-d2dd75e78ab2": {
                    "Id": "A11bc8b71-773e-4668-a85e-d2dd75e78ab2",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A92d5a42f-5ed0-47a5-af6d-7a4e49eaa730": {
                    "Id": "A92d5a42f-5ed0-47a5-af6d-7a4e49eaa730",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "AT_410_2": {
                    "Id": "AT_410_2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_2": {
                    "Id": "ATANT_410_2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae7f373b5-4297-42b4-b14a-d869776f2f27": {
                    "Id": "Ae7f373b5-4297-42b4-b14a-d869776f2f27",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae29b4c28-4ad6-444a-a2d1-7ee937722eed": {
                    "Id": "Ae29b4c28-4ad6-444a-a2d1-7ee937722eed",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxGainsLossesOnRevaluation",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "AT_410_3": {
                    "Id": "AT_410_3",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_3": {
                    "Id": "ATANT_410_3",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab0012361-190c-49ac-b4e5-d250bf2bab93": {
                    "Id": "Ab0012361-190c-49ac-b4e5-d250bf2bab93",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6ecef73a-0cd5-4617-8392-5e8b474ec76b": {
                    "Id": "A6ecef73a-0cd5-4617-8392-5e8b474ec76b",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "AT_410_4": {
                    "Id": "AT_410_4",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_4": {
                    "Id": "ATANT_410_4",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1111b29a-1729-4088-b9ef-01430fe4cac2": {
                    "Id": "A1111b29a-1729-4088-b9ef-01430fe4cac2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A04f06be3-05a4-4b68-9415-060362b70a26": {
                    "Id": "A04f06be3-05a4-4b68-9415-060362b70a26",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "AT_410_5": {
                    "Id": "AT_410_5",
                    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_5": {
                    "Id": "ATNT_410_5",
                    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A99525e43-1a5a-4392-bfb9-3c411ba04809": {
                    "Id": "A99525e43-1a5a-4392-bfb9-3c411ba04809",
                    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1d0a3aa2-858c-4384-b8c1-b0ca2a8e81c9": {
                    "Id": "A1d0a3aa2-858c-4384-b8c1-b0ca2a8e81c9",
                    "IdConcepto": "ifrs-full_GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "AT_410_6": {
                    "Id": "AT_410_6",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_6": {
                    "Id": "ATANT_410_6",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac099de21-7a04-4b18-b74f-92b66640bf2b": {
                    "Id": "Ac099de21-7a04-4b18-b74f-92b66640bf2b",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab5413336-847d-4f31-81d1-088635215cf4": {
                    "Id": "Ab5413336-847d-4f31-81d1-088635215cf4",
                    "IdConcepto": "ifrs-full_ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "AT_410_7": {
                    "Id": "AT_410_7",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_7": {
                    "Id": "ATANT_410_7",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aeaa809b1-1339-49e4-b7e9-942f5a083d8c": {
                    "Id": "Aeaa809b1-1339-49e4-b7e9-942f5a083d8c",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad9e3bd07-6389-4a8a-8ade-7e4d65bf8bee": {
                    "Id": "Ad9e3bd07-6389-4a8a-8ade-7e4d65bf8bee",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "AT_410_8": {
                    "Id": "AT_410_8",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_8": {
                    "Id": "ATANT_410_8",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab18cb936-7cbc-47ac-95a7-f2361b9a5306": {
                    "Id": "Ab18cb936-7cbc-47ac-95a7-f2361b9a5306",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1fe515cb-6232-4fbf-aaa3-49d867c43c96": {
                    "Id": "A1fe515cb-6232-4fbf-aaa3-49d867c43c96",
                    "IdConcepto": "ifrs-full_ShareOfOtherComprehensiveIncomeOfAssociatesAndJointVenturesAccountedForUsingEquityMethodThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },


                "AT_410_9": {
                    "Id": "AT_410_9",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_9": {
                    "Id": "ATANT_410_9",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A554e1cac-9942-44f7-bd25-1e3deb0d97e0": {
                    "Id": "A554e1cac-9942-44f7-bd25-1e3deb0d97e0",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8da4f2f8-cda2-428f-a83d-2ec1ad545a0d": {
                    "Id": "A8da4f2f8-cda2-428f-a83d-2ec1ad545a0d",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

                "AT_410_10": {
                    "Id": "AT_410_10",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_10": {
                    "Id": "ATANT_410_10",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aacd493a4-bb50-457d-a29f-ad59a0aefee2": {
                    "Id": "Aacd493a4-bb50-457d-a29f-ad59a0aefee2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6718d3d5-c721-4116-acc5-4f22e9bdf3ed": {
                    "Id": "A6718d3d5-c721-4116-acc5-4f22e9bdf3ed",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },


                "AT_410_11": {
                    "Id": "AT_410_11",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_11": {
                    "Id": "ATANT_410_11",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7c7d051a-a1ea-4a55-98f8-f0516599f85f": {
                    "Id": "A7c7d051a-a1ea-4a55-98f8-f0516599f85f",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A79e169f8-9d81-4f76-b769-11dbab1b904a": {
                    "Id": "A79e169f8-9d81-4f76-b769-11dbab1b904a",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },


                "AT_410_12": {
                    "Id": "AT_410_12",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_12": {
                    "Id": "ATANT_410_12",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afbe0c0dc-e6bf-4112-bf72-423e8a1d7e3d": {
                    "Id": "Afbe0c0dc-e6bf-4112-bf72-423e8a1d7e3d",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A92e2c3c5-c7c8-4d57-987f-6dcd787efd3f": {
                    "Id": "A92e2c3c5-c7c8-4d57-987f-6dcd787efd3f",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },


                "AT_410_13": {
                    "Id": "AT_410_13",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT_410_13": {
                    "Id": "ATANT_410_13",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0f9e49b0-f5ad-4638-92b4-9a50028ec7a3": {
                    "Id": "A0f9e49b0-f5ad-4638-92b4-9a50028ec7a3",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A18982957-515b-4aac-91e1-020b0e83b601": {
                    "Id": "A18982957-515b-4aac-91e1-020b0e83b601",
                    "IdConcepto": "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
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