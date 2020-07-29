///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ccd/2015/ias_1_2014-03-05_role-310000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_310000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_310000
         */
        constructor() {

            this.ListadoDeFormulas = {

                'VA_310000_1_Consolidado': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_310000_1_Consolidado',

                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();

                                var idFormula = "VA_310000_1_Consolidado";

                                var formula = servicioAbax.obtenDefinicionFormulaPorId(idFormula);

                                var expresion: string = 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)';
                                var mensajeExito: string = 'El valor de {variable1} es igual al valor de Utilidad (pérdida) atribuible a la participación controladora + Utilidad (pérdida) atribuible a la participación no controladora.';
                                var mensajeError: string = 'El valor de {variable1} debe ser igual al valor de Utilidad (pérdida) atribuible a la participación controladora + Utilidad (pérdida) atribuible a la participación no controladora.';
                                var definicionVariables: { [nombre: string]: model.DefinicionVariableFormula } = {};


                                definicionVariables["variable1"] = new model.DefinicionVariableFormula().deserialize({
                                    Id: "variable1",
                                    IdConcepto: "ifrs-full_ProfitLoss",
                                    PuedeCrearse: false,
                                    PuedeEliminarse: false,
                                    ConteoHechos: false,
                                    EsDinamica: false,
                                    ValorFallback: '0',
                                    FiltrosDimension: [

                                        {
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
                                        }
                                    ]
                                });

                                definicionVariables["variable2"] = new model.DefinicionVariableFormula().deserialize({
                                    Id: "variable2",
                                    IdConcepto: "ifrs-full_ProfitLossAttributableToOwnersOfParent",
                                    PuedeCrearse: false,
                                    PuedeEliminarse: false,
                                    ConteoHechos: false
                                });

                                definicionVariables["variable3"] = new model.DefinicionVariableFormula().deserialize({
                                    Id: "variable3",
                                    IdConcepto: "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
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
                "ATA1": {
                    "Id": "ATA1",
                    "IdConcepto": "ifrs-full_Revenue",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT1": {
                    "Id": "ATANT1",
                    "IdConcepto": "ifrs-full_Revenue",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A16f9cfc2-c2a1-4ef9-8c9a-6981c53e22eb": {
                    "Id": "A16f9cfc2-c2a1-4ef9-8c9a-6981c53e22eb",
                    "IdConcepto": "ifrs-full_Revenue",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac3eee251-c3bd-4223-97ea-ba3138040626": {
                    "Id": "Ac3eee251-c3bd-4223-97ea-ba3138040626",
                    "IdConcepto": "ifrs-full_Revenue",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA2": {
                    "Id": "ATA2",
                    "IdConcepto": "ifrs-full_CostOfSales",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT2": {
                    "Id": "ATANT2",
                    "IdConcepto": "ifrs-full_CostOfSales",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad8173c60-41f6-424c-9846-3e11046e8d9b": {
                    "Id": "Ad8173c60-41f6-424c-9846-3e11046e8d9b",
                    "IdConcepto": "ifrs-full_CostOfSales",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5ba3231e-1082-4df9-ac13-11b06306413a": {
                    "Id": "A5ba3231e-1082-4df9-ac13-11b06306413a",
                    "IdConcepto": "ifrs-full_CostOfSales",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA3": {
                    "Id": "ATA3",
                    "IdConcepto": "ifrs-full_GrossProfit",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT3": {
                    "Id": "ATANT3",
                    "IdConcepto": "ifrs-full_GrossProfit",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A819c3f84-fa97-4cb2-aa9b-31925316af4b": {
                    "Id": "A819c3f84-fa97-4cb2-aa9b-31925316af4b",
                    "IdConcepto": "ifrs-full_GrossProfit",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af71edbb8-78de-4b91-8290-d57dad1ce20e": {
                    "Id": "Af71edbb8-78de-4b91-8290-d57dad1ce20e",
                    "IdConcepto": "ifrs-full_GrossProfit",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA4": {
                    "Id": "ATA4",
                    "IdConcepto": "ifrs-full_AdministrativeExpense",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT4": {
                    "Id": "ATANT4",
                    "IdConcepto": "ifrs-full_AdministrativeExpense",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5bf7297c-b538-491e-9513-cdb0bf6c5b1c": {
                    "Id": "A5bf7297c-b538-491e-9513-cdb0bf6c5b1c",
                    "IdConcepto": "ifrs-full_AdministrativeExpense",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae8ae7b06-0a1d-42d0-8e5a-3d46e7fbc77b": {
                    "Id": "Ae8ae7b06-0a1d-42d0-8e5a-3d46e7fbc77b",
                    "IdConcepto": "ifrs-full_AdministrativeExpense",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA5": {
                    "Id": "ATA5",
                    "IdConcepto": "ifrs-full_OtherIncome",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT5": {
                    "Id": "ATA5",
                    "IdConcepto": "ifrs-full_OtherIncome",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1f58016c-740e-4efc-bf66-ce623a83e779": {
                    "Id": "A1f58016c-740e-4efc-bf66-ce623a83e779",
                    "IdConcepto": "ifrs-full_OtherIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa5979a2d-b473-487e-adc3-8891f9c38f7e": {
                    "Id": "Aa5979a2d-b473-487e-adc3-8891f9c38f7e",
                    "IdConcepto": "ifrs-full_OtherIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA6": {
                    "Id": "ATA6",
                    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT6": {
                    "Id": "ATANT6",
                    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9695582e-71d4-43cd-aa43-803f5a302e2b": {
                    "Id": "A9695582e-71d4-43cd-aa43-803f5a302e2b",
                    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A239d1cb8-8cf5-4a07-8f42-c59d23d42ae7": {
                    "Id": "A239d1cb8-8cf5-4a07-8f42-c59d23d42ae7",
                    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA7": {
                    "Id": "ATA7",
                    "IdConcepto": "mx_ccd_EstimatesAndReservesForImpairmentAssets",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT7": {
                    "Id": "ATANT7",
                    "IdConcepto": "mx_ccd_EstimatesAndReservesForImpairmentAssets",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A008db986-2585-48c0-8c0b-37b0c21c61e3": {
                    "Id": "A008db986-2585-48c0-8c0b-37b0c21c61e3",
                    "IdConcepto": "mx_ccd_EstimatesAndReservesForImpairmentAssets",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae24ac4d9-2d72-4904-89ed-400bc1609dac": {
                    "Id": "Ae24ac4d9-2d72-4904-89ed-400bc1609dac",
                    "IdConcepto": "mx_ccd_EstimatesAndReservesForImpairmentAssets",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA8": {
                    "Id": "ATA8",
                    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT8": {
                    "Id": "ATANT8",
                    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A007d7b16-4282-4e01-a77c-62a721539ccd": {
                    "Id": "A007d7b16-4282-4e01-a77c-62a721539ccd",
                    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac94078ff-5f50-4fd8-b13a-bdf7a17ff837": {
                    "Id": "Ac94078ff-5f50-4fd8-b13a-bdf7a17ff837",
                    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA9": {
                    "Id": "ATA9",
                    "IdConcepto": "ifrs-full_FinanceIncome",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT9": {
                    "Id": "ATANT9",
                    "IdConcepto": "ifrs-full_FinanceIncome",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3b746d98-27e7-4e80-8b06-80fb54579427": {
                    "Id": "A3b746d98-27e7-4e80-8b06-80fb54579427",
                    "IdConcepto": "ifrs-full_FinanceIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af74ec868-b748-4813-919f-8323051229c0": {
                    "Id": "Af74ec868-b748-4813-919f-8323051229c0",
                    "IdConcepto": "ifrs-full_FinanceIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA10": {
                    "Id": "ATA10",
                    "IdConcepto": "ifrs-full_FinanceCosts",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT10": {
                    "Id": "ATANT10",
                    "IdConcepto": "ifrs-full_FinanceCosts",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e946993-1bcd-45f2-88af-fb37801b4bb6": {
                    "Id": "A1e946993-1bcd-45f2-88af-fb37801b4bb6",
                    "IdConcepto": "ifrs-full_FinanceCosts",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad50af6b7-04d0-4e86-9ee8-f95bf514fd59": {
                    "Id": "Ad50af6b7-04d0-4e86-9ee8-f95bf514fd59",
                    "IdConcepto": "ifrs-full_FinanceCosts",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA11": {
                    "Id": "ATA11",
                    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT11": {
                    "Id": "ATANT11",
                    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f0060f5-8af5-498d-8ce0-e04e4ac8832f": {
                    "Id": "A4f0060f5-8af5-498d-8ce0-e04e4ac8832f",
                    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8d9b1937-9ed4-443f-aea2-e998fb6c907d": {
                    "Id": "A8d9b1937-9ed4-443f-aea2-e998fb6c907d",
                    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA12": {
                    "Id": "ATA12",
                    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT12": {
                    "Id": "ATANT12",
                    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2e657d78-543c-4c29-b62b-a9afb25f10cf": {
                    "Id": "A2e657d78-543c-4c29-b62b-a9afb25f10cf",
                    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abfe74555-eb72-42cf-877e-37b09d97ab8c": {
                    "Id": "Abfe74555-eb72-42cf-877e-37b09d97ab8c",
                    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA13": {
                    "Id": "ATA13",
                    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT13": {
                    "Id": "ATANT13",
                    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A25eff938-9184-4c70-a518-5d8919be29a2": {
                    "Id": "A25eff938-9184-4c70-a518-5d8919be29a2",
                    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A26cab955-27cb-49fa-8469-b2a4d13d0cc0": {
                    "Id": "A26cab955-27cb-49fa-8469-b2a4d13d0cc0",
                    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA14": {
                    "Id": "ATA14",
                    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT14": {
                    "Id": "ATANT14",
                    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3b43e73f-e842-4b69-992a-be1ed894e7e4": {
                    "Id": "A3b43e73f-e842-4b69-992a-be1ed894e7e4",
                    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4dd660dd-8554-4828-82ea-48afb9b23e67": {
                    "Id": "A4dd660dd-8554-4828-82ea-48afb9b23e67",
                    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA15": {
                    "Id": "ATA15",
                    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT15": {
                    "Id": "ATANT15",
                    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab0347898-9746-4cff-b7a8-66508f3ad98b": {
                    "Id": "Ab0347898-9746-4cff-b7a8-66508f3ad98b",
                    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae940e4ce-7978-4d8c-897b-aa19bce18d94": {
                    "Id": "Ae940e4ce-7978-4d8c-897b-aa19bce18d94",
                    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA16": {
                    "Id": "ATA16",
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
                "ATANT16": {
                    "Id": "ATANT16",
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
                "ATA17": {
                    "Id": "ATA17",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT17": {
                    "Id": "ATANT17",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A352716ce-6336-454f-828a-1cd84004c17b": {
                    "Id": "A352716ce-6336-454f-828a-1cd84004c17b",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A281ef5be-756a-4ece-b72f-fcd682042b8f": {
                    "Id": "A281ef5be-756a-4ece-b72f-fcd682042b8f",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATA18": {
                    "Id": "ATA18",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ATANT18": {
                    "Id": "ATANT18",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A25b53c25-66af-485b-95f2-bc0220e0b1a0": {
                    "Id": "A25b53c25-66af-485b-95f2-bc0220e0b1a0",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acde3efea-4c0d-4055-83b5-865a7e346c99": {
                    "Id": "Acde3efea-4c0d-4055-83b5-865a7e346c99",
                    "IdConcepto": "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
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