///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_112_2014-03-05_role-700004
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_112_2014_03_05_role_700004 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_112_2014_03_05_role_700004
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
                "Trimestre_AnioActual": {
                    "Id": "Trimestre_AnioActual",
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
                },
                "Cierre_EjercicioAnterior": {
                    "Id": "Cierre_EjercicioAnterior",
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
                },
                "Inicio_EjercicioAnterior": {
                    "Id": "Inicio_EjercicioAnterior",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_12_31",
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
                "PURE": {
                    "Id": "PURE",
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
                "A1eaa53dd-4486-4231-88eb-27e664231ac2": {
                    "Id": "A1eaa53dd-4486-4231-88eb-27e664231ac2",
                    "IdConcepto": "mx_trac_AuthorizedCreditLine",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A40b18a83-d0ed-4dd0-8585-a4c6ebac2a43": {
                    "Id": "A40b18a83-d0ed-4dd0-8585-a4c6ebac2a43",
                    "IdConcepto": "mx_trac_NominalValueOfDerivatives",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3af78f4a-9d48-4370-afdf-f0779537d81d": {
                    "Id": "A3af78f4a-9d48-4370-afdf-f0779537d81d",
                    "IdConcepto": "mx_trac_AuthorizedCertificates",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1de7e240-061f-4bcc-b738-1de59e745002": {
                    "Id": "A1de7e240-061f-4bcc-b738-1de59e745002",
                    "IdConcepto": "mx_trac_CertificatesInCirculation",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4e3135f6-d3fc-40df-b969-7c42404b770b": {
                    "Id": "A4e3135f6-d3fc-40df-b969-7c42404b770b",
                    "IdConcepto": "mx_trac_TreasuryCertificates",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa1b913ea-3112-428a-b1c9-de8d6c25b7e4": {
                    "Id": "Aa1b913ea-3112-428a-b1c9-de8d6c25b7e4",
                    "IdConcepto": "mx_trac_AmountOfAuthorizedCertificates",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A705726e7-c17d-42a2-ba3a-8bb96e84f30e": {
                    "Id": "A705726e7-c17d-42a2-ba3a-8bb96e84f30e",
                    "IdConcepto": "mx_trac_AmountOutstandingCertificates",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A36947336-46f6-4fa4-a653-28af878c83c6": {
                    "Id": "A36947336-46f6-4fa4-a653-28af878c83c6",
                    "IdConcepto": "mx_trac_AmountOfTreasuryCertificates",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                

                /** CIERRE EJERCICIO ANTERIOR **/
                "CA_eaa53dd-4486-4231-88eb-27e664231ac2": {
                    "Id": "CA_eaa53dd-4486-4231-88eb-27e664231ac2",
                    "IdConcepto": "mx_trac_AuthorizedCreditLine",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "CA_0b18a83-d0ed-4dd0-8585-a4c6ebac2a43": {
                    "Id": "CA_0b18a83-d0ed-4dd0-8585-a4c6ebac2a43",
                    "IdConcepto": "mx_trac_NominalValueOfDerivatives",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "CA_af78f4a-9d48-4370-afdf-f0779537d81d": {
                    "Id": "CA_af78f4a-9d48-4370-afdf-f0779537d81d",
                    "IdConcepto": "mx_trac_AuthorizedCertificates",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "CA_de7e240-061f-4bcc-b738-1de59e745002": {
                    "Id": "CA_de7e240-061f-4bcc-b738-1de59e745002",
                    "IdConcepto": "mx_trac_CertificatesInCirculation",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "CA_e3135f6-d3fc-40df-b969-7c42404b770b": {
                    "Id": "CA_e3135f6-d3fc-40df-b969-7c42404b770b",
                    "IdConcepto": "mx_trac_TreasuryCertificates",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "CA_1b913ea-3112-428a-b1c9-de8d6c25b7e4": {
                    "Id": "CA_1b913ea-3112-428a-b1c9-de8d6c25b7e4",
                    "IdConcepto": "mx_trac_AmountOfAuthorizedCertificates",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "CA_05726e7-c17d-42a2-ba3a-8bb96e84f30e": {
                    "Id": "CA_05726e7-c17d-42a2-ba3a-8bb96e84f30e",
                    "IdConcepto": "mx_trac_AmountOutstandingCertificates",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "CA_6947336-46f6-4fa4-a653-28af878c83c6": {
                    "Id": "CA_6947336-46f6-4fa4-a653-28af878c83c6",
                    "IdConcepto": "mx_trac_AmountOfTreasuryCertificates",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                /** INICIO EJERCICIO ANTERIOR **/
                "IA_eaa53dd-4486-4231-88eb-27e664231ac2": {
                    "Id": "IA_eaa53dd-4486-4231-88eb-27e664231ac2",
                    "IdConcepto": "mx_trac_AuthorizedCreditLine",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "IA_0b18a83-d0ed-4dd0-8585-a4c6ebac2a43": {
                    "Id": "IA_0b18a83-d0ed-4dd0-8585-a4c6ebac2a43",
                    "IdConcepto": "mx_trac_NominalValueOfDerivatives",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "IA_af78f4a-9d48-4370-afdf-f0779537d81d": {
                    "Id": "IA_af78f4a-9d48-4370-afdf-f0779537d81d",
                    "IdConcepto": "mx_trac_AuthorizedCertificates",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "IA_de7e240-061f-4bcc-b738-1de59e745002": {
                    "Id": "IA_de7e240-061f-4bcc-b738-1de59e745002",
                    "IdConcepto": "mx_trac_CertificatesInCirculation",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "IA_e3135f6-d3fc-40df-b969-7c42404b770b": {
                    "Id": "IA_e3135f6-d3fc-40df-b969-7c42404b770b",
                    "IdConcepto": "mx_trac_TreasuryCertificates",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "PURE",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "IA_1b913ea-3112-428a-b1c9-de8d6c25b7e4": {
                    "Id": "IA_1b913ea-3112-428a-b1c9-de8d6c25b7e4",
                    "IdConcepto": "mx_trac_AmountOfAuthorizedCertificates",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "IA_05726e7-c17d-42a2-ba3a-8bb96e84f30e": {
                    "Id": "IA_05726e7-c17d-42a2-ba3a-8bb96e84f30e",
                    "IdConcepto": "mx_trac_AmountOutstandingCertificates",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "IA_6947336-46f6-4fa4-a653-28af878c83c6": {
                    "Id": "IA_6947336-46f6-4fa4-a653-28af878c83c6",
                    "IdConcepto": "mx_trac_AmountOfTreasuryCertificates",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
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