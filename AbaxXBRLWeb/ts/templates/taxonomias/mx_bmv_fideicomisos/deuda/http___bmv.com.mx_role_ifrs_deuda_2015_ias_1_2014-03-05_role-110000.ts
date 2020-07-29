///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-110000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_110000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_110000
         */
        constructor() {

            this.ListadoDeFormulas = {
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
                                  IdConcepto: 'mx_deuda_Ticker',
                                  PuedeCrearse: false,
                                  PuedeEliminarse: false,
                                  ConteoHechos: false
                              })
                          }
                      })
            };

            this.ContextosPlantillaPorId = {
                "Acum_Actual": {
                    "Id": "Acum_Actual",
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
                }
            };

            this.UnidadesPlantillaPorId = {};

            this.HechosPlantillaPorId = {
                "A96752435-af92-45df-bc23-07e4c1991541": {
                    "Id": "A96752435-af92-45df-bc23-07e4c1991541",
                    "IdConcepto": "ifrs-full_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A3e56c61a-c03a-42e8-9628-ecd15621cb8c": {
                    "Id": "A3e56c61a-c03a-42e8-9628-ecd15621cb8c",
                    "IdConcepto": "ifrs-full_NameOfReportingEntityOrOtherMeansOfIdentification",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ad1c04afc-feb4-49b6-a229-7e3553b9d80d": {
                    "Id": "Ad1c04afc-feb4-49b6-a229-7e3553b9d80d",
                    "IdConcepto": "mx_deuda_Ticker",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#nombreEntidad"
                },
                "Aac5ab72b-4e01-4e33-a2be-c75f088a7b08": {
                    "Id": "Aac5ab72b-4e01-4e33-a2be-c75f088a7b08",
                    "IdConcepto": "ifrs-full_ExplanationOfChangeInNameOfReportingEntityOrOtherMeansOfIdentificationFromEndOfPrecedingReportingPeriod",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A7b712d7f-c9d7-4693-9a92-91b67b0684a1": {
                    "Id": "A7b712d7f-c9d7-4693-9a92-91b67b0684a1",
                    "IdConcepto": "ifrs-full_DescriptionOfNatureOfFinancialStatements",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A84a60afb-2078-4232-8edc-c55d15b06fef": {
                    "Id": "A84a60afb-2078-4232-8edc-c55d15b06fef",
                    "IdConcepto": "ifrs-full_DateOfEndOfReportingPeriod2013",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha_2015_09_30"
                },
                "A1effe810-0a1c-4d76-bd6b-a8be42a9431a": {
                    "Id": "A1effe810-0a1c-4d76-bd6b-a8be42a9431a",
                    "IdConcepto": "ifrs-full_PeriodCoveredByFinancialStatements",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha_2015_07_01 - #fecha_2015_09_30"
                },
                "A23f3f169-b052-48be-9824-a28273b01449": {
                    "Id": "A23f3f169-b052-48be-9824-a28273b01449",
                    "IdConcepto": "ifrs-full_DescriptionOfPresentationCurrency",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#medida_MXN"
                },
                "Af932089d-521a-471a-869b-bdc582173875": {
                    "Id": "Af932089d-521a-471a-869b-bdc582173875",
                    "IdConcepto": "ifrs-full_LevelOfRoundingUsedInFinancialStatements",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A942ef6a2-6ccd-404d-9cbd-cdddba6eef03": {
                    "Id": "A942ef6a2-6ccd-404d-9cbd-cdddba6eef03",
                    "IdConcepto": "mx_deuda_TrusteesAdministratorAvalOrGuarantor",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Accb17bdd-b562-4480-8e25-71512ac29b00": {
                    "Id": "Accb17bdd-b562-4480-8e25-71512ac29b00",
                    "IdConcepto": "mx_deuda_TrustNumber",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#numeroFideicomiso"
                },
                "Ae0b3c16a-91e9-423b-9112-1d8dc031ef6f": {
                    "Id": "Ae0b3c16a-91e9-423b-9112-1d8dc031ef6f",
                    "IdConcepto": "mx_deuda_CashFlowStatementForInderectMethod",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#metodoIndirecto"
                },
                "A309d4276-bfd3-4949-a7e1-619645fceda3": {
                    "Id": "A309d4276-bfd3-4949-a7e1-619645fceda3",
                    "IdConcepto": "mx_deuda_NumberOfQuarter",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#trimestre"
                },
                "A01f2728f-96f8-48d2-8140-be7ca0d3808e": {
                    "Id": "A01f2728f-96f8-48d2-8140-be7ca0d3808e",
                    "IdConcepto": "mx_deuda_NameServiceProviderExternalAudit",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A3f9201a0-7ec9-490d-a55e-8ab1f15e3d3f": {
                    "Id": "A3f9201a0-7ec9-490d-a55e-8ab1f15e3d3f",
                    "IdConcepto": "mx_deuda_NameOfTheAsociadoSigningOpinion",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A07ebb1b2-dabc-4b09-b863-62593b8da3c4": {
                    "Id": "A07ebb1b2-dabc-4b09-b863-62593b8da3c4",
                    "IdConcepto": "mx_deuda_TypeOfOpinionOnTheFinancialStatements",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A2af09d30-3a59-4d8b-be65-6b7e92745fbf": {
                    "Id": "A2af09d30-3a59-4d8b-be65-6b7e92745fbf",
                    "IdConcepto": "mx_deuda_DateOfOpinionOnTheFinancialStatements",
                    "IdContextoPlantilla": "Acum_Actual",
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