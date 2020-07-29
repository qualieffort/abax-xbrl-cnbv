///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/role/ifrs-mx-ics/ias_1_2012-04-01_role-110000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_bmv_com_mx_role_ifrs_mx_ics_ias_1_2012_04_01_role_110000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_bmv_com_mx_role_ifrs_mx_ics_ias_1_2012_04_01_role_110000
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
                "P_Duracion_2014-07-01_2014-09-30": {
                    "Id": "P_Duracion_2014-07-01_2014-09-30",
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
                "P_Instante_2014-09-30": {
                    "Id": "P_Instante_2014-09-30",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2014_09_30",
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

            this.UnidadesPlantillaPorId = {};

            this.HechosPlantillaPorId = {
                "Ab1133c4c-1fe1-4e44-96a0-302d0ddc5d4d": {
                    "Id": "Ab1133c4c-1fe1-4e44-96a0-302d0ddc5d4d",
                    "IdConcepto": "ifrs_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ac8c9bdf9-fbe7-4e86-82bc-d10661a038d0": {
                    "Id": "Ac8c9bdf9-fbe7-4e86-82bc-d10661a038d0",
                    "IdConcepto": "ifrs_NameOfReportingEntityOrOtherMeansOfIdentification",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#nombreEntidad"
                },
                "A6737ad5c-2a28-4fdf-a01a-cd8610c0bd0c": {
                    "Id": "A6737ad5c-2a28-4fdf-a01a-cd8610c0bd0c",
                    "IdConcepto": "ifrs_ExplanationOfChangeInNameOfReportingEntityOrOtherMeansOfIdentificationFromEndOfPrecedingReportingPeriod",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aa6a0bccf-914c-4874-8710-2d138d967d89": {
                    "Id": "Aa6a0bccf-914c-4874-8710-2d138d967d89",
                    "IdConcepto": "mx-ifrs-ics_ClaveCotizacion",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#nombreEntidad"
                },
                "A1d7eea76-2310-4431-adf2-bbc8128404cf": {
                    "Id": "A1d7eea76-2310-4431-adf2-bbc8128404cf",
                    "IdConcepto": "ifrs_DescriptionOfNatureOfFinancialStatements",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A9ead3564-238f-4b87-a242-89279a72e488": {
                    "Id": "A9ead3564-238f-4b87-a242-89279a72e488",
                    "IdConcepto": "ifrs_DateOfEndOfReportingPeriod",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha_2014_09_30"
                },
                "A189a673e-e7f1-42ae-a51a-7b2719e2c1f6": {
                    "Id": "A189a673e-e7f1-42ae-a51a-7b2719e2c1f6",
                    "IdConcepto": "ifrs_PeriodCoveredByFinancialStatements",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#periodoReportado"
                },
                "Ab5adfb5e-aa69-4671-9d3d-1398e8ccbcf0": {
                    "Id": "Ab5adfb5e-aa69-4671-9d3d-1398e8ccbcf0",
                    "IdConcepto": "ifrs_DescriptionOfPresentationCurrency",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#medida_MXN"
                },
                "A6e62b59f-85db-4900-b38c-3e7b856c0909": {
                    "Id": "A6e62b59f-85db-4900-b38c-3e7b856c0909",
                    "IdConcepto": "ifrs_LevelOfRoundingUsedInFinancialStatements",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#redondeo"
                },
                "Af2d19254-0881-4f72-976b-ea7223c15d26": {
                    "Id": "Af2d19254-0881-4f72-976b-ea7223c15d26",
                    "IdConcepto": "mx-ifrs-ics_Dictaminado",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
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