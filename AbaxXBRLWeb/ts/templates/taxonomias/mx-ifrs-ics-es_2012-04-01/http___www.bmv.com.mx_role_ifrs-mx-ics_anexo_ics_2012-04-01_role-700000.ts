///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/role/ifrs-mx-ics/anexo_ics_2012-04-01_role-700000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_bmv_com_mx_role_ifrs_mx_ics_anexo_ics_2012_04_01_role_700000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_bmv_com_mx_role_ifrs_mx_ics_anexo_ics_2012_04_01_role_700000
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
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
                },
                "P_Instante_2013-12-31": {
                    "Id": "P_Instante_2013-12-31",
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
                "shares": {
                    "Id": "shares",
                    "Tipo": 1,
                    "Medidas": [
                        {
                            "Nombre": "#medida_shares",
                            "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
                        }
                    ],
                    "MedidasDenominador": [],
                    "MedidasNumerador": []
                }
            };

            this.HechosPlantillaPorId = {
                "A3cdee41b-5144-4f07-a1cb-56934a984533": {
                    "Id": "A3cdee41b-5144-4f07-a1cb-56934a984533",
                    "IdConcepto": "mx-ifrs-ics_PasivosMonedaExtranjeraCortoPlazo",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad396acd6-e8d4-44a2-8c22-51d1107d0de8": {
                    "Id": "Ad396acd6-e8d4-44a2-8c22-51d1107d0de8",
                    "IdConcepto": "mx-ifrs-ics_PasivosMonedaExtranjeraCortoPlazo",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Addf97a42-071c-476f-a283-513a0be8e189": {
                    "Id": "Addf97a42-071c-476f-a283-513a0be8e189",
                    "IdConcepto": "mx-ifrs-ics_PasivosMonedaExtranjeraLargoPlazo",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ade74f3ce-31d3-4ada-9dfc-d63f442a51e3": {
                    "Id": "Ade74f3ce-31d3-4ada-9dfc-d63f442a51e3",
                    "IdConcepto": "mx-ifrs-ics_PasivosMonedaExtranjeraLargoPlazo",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Addfec7d5-e2f8-4766-984b-cc61820f7f00": {
                    "Id": "Addfec7d5-e2f8-4766-984b-cc61820f7f00",
                    "IdConcepto": "mx-ifrs-ics_CapitalSocialNominal",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae5ccb9db-7cb4-4ab3-8f6c-f3e11238f42a": {
                    "Id": "Ae5ccb9db-7cb4-4ab3-8f6c-f3e11238f42a",
                    "IdConcepto": "mx-ifrs-ics_CapitalSocialNominal",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A15ae3e36-147a-437a-a5f8-02d77632b9a2": {
                    "Id": "A15ae3e36-147a-437a-a5f8-02d77632b9a2",
                    "IdConcepto": "mx-ifrs-ics_CapitalSocialporActualizacion",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab922beb9-4e2b-40ab-a28e-f5ab9b880fe8": {
                    "Id": "Ab922beb9-4e2b-40ab-a28e-f5ab9b880fe8",
                    "IdConcepto": "mx-ifrs-ics_CapitalSocialporActualizacion",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4004dc4f-74a7-4237-a1ea-be03bd378d86": {
                    "Id": "A4004dc4f-74a7-4237-a1ea-be03bd378d86",
                    "IdConcepto": "mx-ifrs-ics_FondosPensionesPrimaAntiguedad",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab67ad69d-9b96-48f6-b78a-8a6b7175a56d": {
                    "Id": "Ab67ad69d-9b96-48f6-b78a-8a6b7175a56d",
                    "IdConcepto": "mx-ifrs-ics_FondosPensionesPrimaAntiguedad",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adae08c20-76cc-4463-8244-709873e1e6cf": {
                    "Id": "Adae08c20-76cc-4463-8244-709873e1e6cf",
                    "IdConcepto": "mx-ifrs-ics_NumeroFuncionarios",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae164e2d9-f903-44b9-9ee5-84f81f7068e9": {
                    "Id": "Ae164e2d9-f903-44b9-9ee5-84f81f7068e9",
                    "IdConcepto": "mx-ifrs-ics_NumeroFuncionarios",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A32aeba86-02a0-4d0a-ad0b-0d64192d0892": {
                    "Id": "A32aeba86-02a0-4d0a-ad0b-0d64192d0892",
                    "IdConcepto": "mx-ifrs-ics_NumeroEmpleados",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac80a235e-7a70-4dec-9280-070bc776c93e": {
                    "Id": "Ac80a235e-7a70-4dec-9280-070bc776c93e",
                    "IdConcepto": "mx-ifrs-ics_NumeroEmpleados",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abb14b98e-c762-4e9d-8da5-8f9538d0d044": {
                    "Id": "Abb14b98e-c762-4e9d-8da5-8f9538d0d044",
                    "IdConcepto": "mx-ifrs-ics_NumeroObreros",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A48c17357-dbd0-4b51-871a-14664afde9ae": {
                    "Id": "A48c17357-dbd0-4b51-871a-14664afde9ae",
                    "IdConcepto": "mx-ifrs-ics_NumeroObreros",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae46c3719-60b6-4c90-ab05-98cd9d78292f": {
                    "Id": "Ae46c3719-60b6-4c90-ab05-98cd9d78292f",
                    "IdConcepto": "mx-ifrs-ics_NumeroAccionesCirculacion",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "shares",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab00ea180-74f7-4e30-9f01-2fa532246f57": {
                    "Id": "Ab00ea180-74f7-4e30-9f01-2fa532246f57",
                    "IdConcepto": "mx-ifrs-ics_NumeroAccionesCirculacion",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "shares",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0fc76ccb-0787-423a-9240-24a864e4e708": {
                    "Id": "A0fc76ccb-0787-423a-9240-24a864e4e708",
                    "IdConcepto": "mx-ifrs-ics_NumeroAccionesRecompradas",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "shares",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5608128a-696e-432d-b417-b21624aa657d": {
                    "Id": "A5608128a-696e-432d-b417-b21624aa657d",
                    "IdConcepto": "mx-ifrs-ics_NumeroAccionesRecompradas",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "shares",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e5dd8d1-2962-42f4-9e35-6832242b1ade": {
                    "Id": "A1e5dd8d1-2962-42f4-9e35-6832242b1ade",
                    "IdConcepto": "mx-ifrs-ics_EfectivoRestringido",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2f5c08a4-4c63-4ccb-8707-c1dba708d9bf": {
                    "Id": "A2f5c08a4-4c63-4ccb-8707-c1dba708d9bf",
                    "IdConcepto": "mx-ifrs-ics_EfectivoRestringido",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A00cfcd6b-52de-43ca-a205-e73e3e5c18e0": {
                    "Id": "A00cfcd6b-52de-43ca-a205-e73e3e5c18e0",
                    "IdConcepto": "mx-ifrs-ics_DeudaAsociadasGarantizada",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3a0518f5-f5b4-491c-aae2-3b5367888cf4": {
                    "Id": "A3a0518f5-f5b4-491c-aae2-3b5367888cf4",
                    "IdConcepto": "mx-ifrs-ics_DeudaAsociadasGarantizada",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
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