///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/ccd/2015/ias_1_2014-03-05_role-110000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_ccd_rol_full_ifrs_mx_2016_08_22_110000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_ccd_rol_full_ifrs_mx_2016_08_22_110000
         */
        constructor() {

            this.ListadoDeFormulas = {
                  'VA_110000_210000_Consolidado': new model.DefinicionFormula().deserialize(
                    {
                          Id: 'VA_110000_210000_Consolidado',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2=="NO" and bignumber(variable1) == 0) or (variable2=="SI" and abs(bignumber(variable1)) >= 0)',

                        MensajeExito: 'El hecho del {variable1} esta reportado para consolidado de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado para consolidado de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_NoncontrollingInterests',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                            , 'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_ccd_Consolidated',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }
                    ),
                  'VA_110000_Ticker': new model.DefinicionFormula().deserialize(
                      {
                          Id: 'VA_110000_Ticker',
                          TipoFormula: model.TipoFormula.ValueAssertion,

                          Expresion: 'squeeze(size(variable1)) <= 7',
                          MensajeExito: 'El hecho del {variable1} tiene como máximo 7 caracteres.',
                          MensajeError: 'El hecho del {variable1} debe de tener un máximo de 7 caracteres.',

                          VariablesCoincidenPeriodo: false,
                          DefinicionVariables: {
                              'variable1': new model.DefinicionVariableFormula().deserialize({
                                  Id: 'variable1',
                                  IdConcepto: 'mx_ccd_Ticker',
                                  PuedeCrearse: false,
                                  PuedeEliminarse: false,
                                  ConteoHechos: false
                              })
                          }
                      })
            };

            this.ContextosPlantillaPorId = {
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
                        "FechaInicio": "",
                        "FechaFin": "",
                        "FechaInstante": "#fecha_2015_09_30"
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

            this.UnidadesPlantillaPorId = {};

            this.HechosPlantillaPorId = {
                "A0299856c-40f3-44ab-9c58-7142794c303f": {
                    "Id": "A0299856c-40f3-44ab-9c58-7142794c303f",
                    "IdConcepto": "ifrs-full_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Abba38e92-39d3-43d0-b339-ead90f6d2541": {
                    "Id": "Abba38e92-39d3-43d0-b339-ead90f6d2541",
                    "IdConcepto": "ifrs-full_NameOfReportingEntityOrOtherMeansOfIdentification",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aa7979455-3f7f-456d-9c93-a55ae74708bc": {
                    "Id": "Aa7979455-3f7f-456d-9c93-a55ae74708bc",
                    "IdConcepto": "mx_ccd_Ticker",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#nombreEntidad"
                },
                "A6c4e5286-27c2-4b32-a42c-8f9bb07612e8": {
                    "Id": "A6c4e5286-27c2-4b32-a42c-8f9bb07612e8",
                    "IdConcepto": "ifrs-full_ExplanationOfChangeInNameOfReportingEntityOrOtherMeansOfIdentificationFromEndOfPrecedingReportingPeriod",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A8d6da499-4bad-44d0-91b8-930de559b549": {
                    "Id": "A8d6da499-4bad-44d0-91b8-930de559b549",
                    "IdConcepto": "ifrs-full_DescriptionOfNatureOfFinancialStatements",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A0292436d-a9e0-4cb5-9650-4f03b0cff99c": {
                    "Id": "A0292436d-a9e0-4cb5-9650-4f03b0cff99c",
                    "IdConcepto": "ifrs-full_DateOfEndOfReportingPeriod2013",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha_2015_09_30"
                },
                "A1aa1c94d-4ea7-4dd9-8b9a-e4594fd3eb9b": {
                    "Id": "A1aa1c94d-4ea7-4dd9-8b9a-e4594fd3eb9b",
                    "IdConcepto": "ifrs-full_PeriodCoveredByFinancialStatements",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha_2015_07_01 - #fecha_2015_09_30"
                },
                "A6ed5289c-3ca8-47a5-8e4e-271cccfdcca9": {
                    "Id": "A6ed5289c-3ca8-47a5-8e4e-271cccfdcca9",
                    "IdConcepto": "ifrs-full_DescriptionOfPresentationCurrency",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#medida_MXN"
                },
                "A0468a317-1c8e-4690-922d-e06df3d81318": {
                    "Id": "A0468a317-1c8e-4690-922d-e06df3d81318",
                    "IdConcepto": "ifrs-full_LevelOfRoundingUsedInFinancialStatements",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A8a40a324-b948-4343-b82a-0595f5bd485e": {
                    "Id": "A8a40a324-b948-4343-b82a-0595f5bd485e",
                    "IdConcepto": "mx_ccd_Consolidated",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fideicomisoConsolidado"
                },
                "A47d749c4-32db-4664-88e7-36393f349aa2": {
                    "Id": "A47d749c4-32db-4664-88e7-36393f349aa2",
                    "IdConcepto": "mx_ccd_TrusteesAdministratorAvalOrGuarantor",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aa8cd0ac6-4f7f-4792-a637-021bd5b798f0": {
                    "Id": "Aa8cd0ac6-4f7f-4792-a637-021bd5b798f0",
                    "IdConcepto": "mx_ccd_TrustNumber",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#numeroFideicomiso"
                },
                "A54b8ce09-6df1-49a9-be31-c497d577a133": {
                    "Id": "A54b8ce09-6df1-49a9-be31-c497d577a133",
                    "IdConcepto": "mx_ccd_CashFlowStatementForInderectMethod",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#metodoIndirecto"
                },
                "Ac32f48fc-6a05-4640-96fe-04ff002e5966": {
                    "Id": "Ac32f48fc-6a05-4640-96fe-04ff002e5966",
                    "IdConcepto": "mx_ccd_NumberOfQuarter",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#trimestre"
                },
                "Acae53173-d5e1-492b-8002-17392646985c": {
                    "Id": "Acae53173-d5e1-492b-8002-17392646985c",
                    "IdConcepto": "mx_ccd_NameServiceProviderExternalAudit",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A76a15bd8-4790-4c37-a687-93140f0d678d": {
                    "Id": "A76a15bd8-4790-4c37-a687-93140f0d678d",
                    "IdConcepto": "mx_ccd_NameOfTheAsociadoSigningOpinion",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Accfd3746-5580-4440-a52f-f5ac8a4346ba": {
                    "Id": "Accfd3746-5580-4440-a52f-f5ac8a4346ba",
                    "IdConcepto": "mx_ccd_TypeOfOpinionOnTheFinancialStatements",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A6bb10c09-b490-4fbf-9f49-5cab9d427007-RequiresSubmittingAnnexAA": {
                    "Id": "A6bb10c09-b490-4fbf-9f49-5cab9d427007-RequiresSubmittingAnnexAA",
                    "IdConcepto": "ifrs_mx-cor_20160822_RequiresSubmittingAnnexAA",
                    "IdContextoPlantilla": "trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#esAnexoAA"
                },
                "Aa34ee647-c5d0-4edf-8fc8-08f7f2b85772": {
                    "Id": "Aa34ee647-c5d0-4edf-8fc8-08f7f2b85772",
                    "IdConcepto": "mx_ccd_DateOfOpinionOnTheFinancialStatements",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
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