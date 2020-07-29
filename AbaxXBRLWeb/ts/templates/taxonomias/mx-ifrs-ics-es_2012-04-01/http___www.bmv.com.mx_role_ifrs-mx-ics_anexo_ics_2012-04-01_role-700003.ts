///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/role/ifrs-mx-ics/anexo_ics_2012-04-01_role-700003
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_bmv_com_mx_role_ifrs_mx_ics_anexo_ics_2012_04_01_role_700003 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_bmv_com_mx_role_ifrs_mx_ics_anexo_ics_2012_04_01_role_700003
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
                "P_Duracion_2013-10-01_2014-09-30": {
                    "Id": "P_Duracion_2013-10-01_2014-09-30",
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
                "P_Duracion_2012-10-01_2013-09-30": {
                    "Id": "P_Duracion_2012-10-01_2013-09-30",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2012_10_01",
                        "FechaFin": "#fecha_2013_09_30",
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
                "A7e99dbf8-2631-46c1-b91a-2642d70dd83a": {
                    "Id": "A7e99dbf8-2631-46c1-b91a-2642d70dd83a",
                    "IdConcepto": "mx-ifrs-ics_DatosInformativosIngresosNetos12M",
                    "IdContextoPlantilla": "P_Duracion_2013-10-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af80bddaa-49a6-4a9f-99b5-7f801896f154": {
                    "Id": "Af80bddaa-49a6-4a9f-99b5-7f801896f154",
                    "IdConcepto": "mx-ifrs-ics_DatosInformativosIngresosNetos12M",
                    "IdContextoPlantilla": "P_Duracion_2012-10-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad5b44f91-6ee3-4d5a-842e-81c4484677a1": {
                    "Id": "Ad5b44f91-6ee3-4d5a-842e-81c4484677a1",
                    "IdConcepto": "mx-ifrs-ics_DatosInformativosUtilidadPerdidaOperacion12M",
                    "IdContextoPlantilla": "P_Duracion_2013-10-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab51a9e5a-590a-4e82-aae7-c9ae9f0c76ae": {
                    "Id": "Ab51a9e5a-590a-4e82-aae7-c9ae9f0c76ae",
                    "IdConcepto": "mx-ifrs-ics_DatosInformativosUtilidadPerdidaOperacion12M",
                    "IdContextoPlantilla": "P_Duracion_2012-10-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aee34be33-bc5e-4c87-ad80-32d32d0eeedd": {
                    "Id": "Aee34be33-bc5e-4c87-ad80-32d32d0eeedd",
                    "IdConcepto": "mx-ifrs-ics_DatosInformativosUtilidadPerdidaNeta12M",
                    "IdContextoPlantilla": "P_Duracion_2013-10-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aab269670-e40b-4c1a-a83e-36e5efb49458": {
                    "Id": "Aab269670-e40b-4c1a-a83e-36e5efb49458",
                    "IdConcepto": "mx-ifrs-ics_DatosInformativosUtilidadPerdidaNeta12M",
                    "IdContextoPlantilla": "P_Duracion_2012-10-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1254c536-33e1-47e5-9367-60fa2abaf25c": {
                    "Id": "A1254c536-33e1-47e5-9367-60fa2abaf25c",
                    "IdConcepto": "mx-ifrs-ics_DatosInformativosParticipacionControladoraUtilidadPerdidaNeta12M",
                    "IdContextoPlantilla": "P_Duracion_2013-10-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af92567f9-1e85-46cd-b460-5cb3ddc2379e": {
                    "Id": "Af92567f9-1e85-46cd-b460-5cb3ddc2379e",
                    "IdConcepto": "mx-ifrs-ics_DatosInformativosParticipacionControladoraUtilidadPerdidaNeta12M",
                    "IdContextoPlantilla": "P_Duracion_2012-10-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A11ac503c-0d57-488f-892c-cb4d1ed61225": {
                    "Id": "A11ac503c-0d57-488f-892c-cb4d1ed61225",
                    "IdConcepto": "mx-ifrs-ics_DepreciacionAmortizacionOperativa12M",
                    "IdContextoPlantilla": "P_Duracion_2013-10-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A05ae28e6-66ff-4038-88e0-9745a70e8e7e": {
                    "Id": "A05ae28e6-66ff-4038-88e0-9745a70e8e7e",
                    "IdConcepto": "mx-ifrs-ics_DepreciacionAmortizacionOperativa12M",
                    "IdContextoPlantilla": "P_Duracion_2012-10-01_2013-09-30",
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