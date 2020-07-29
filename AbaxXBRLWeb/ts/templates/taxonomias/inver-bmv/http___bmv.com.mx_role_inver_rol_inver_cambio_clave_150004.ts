///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/role/ifrs-mx-ics/ias_1_2012-04-01_role-110000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_inver_rol_inver_cambio_clave_150004 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

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
                "ContextoGeneral": {
                    "Id": "ContextoGeneral",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha",
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
                "Fecha": {
                    "Id": "Fecha",
                    "IdConcepto": "inver_bmv_cor_FechaReporte",
                    "IdContextoPlantilla": "ContextoGeneral",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha"
                },
                "ClaveCotizacion": {
                    "Id": "ClaveCotizacion",
                    "IdConcepto": "inver_bmv_cor_ClaveCotizacion",
                    "IdContextoPlantilla": "ContextoGeneral",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#nombreEntidad"
                },
                "RazonSocial": {
                    "Id": "RazonSocial",
                    "IdConcepto": "inver_bmv_cor_RazonSocial",
                    "IdContextoPlantilla": "ContextoGeneral",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "FechaAplicacion": {
                    "Id": "FechaAplicacion",
                    "IdConcepto": "inver_bmv_cor_FechaAplicacionCambioClave",
                    "IdContextoPlantilla": "ContextoGeneral",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha"
                },
                "ClaveActual": {
                    "Id": "ClaveActual",
                    "IdConcepto": "inver_bmv_cor_ClaveActualCambioClave",
                    "IdContextoPlantilla": "ContextoGeneral",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ClaveNueva": {
                    "Id": "ClaveNueva",
                    "IdConcepto": "inver_bmv_cor_ClaveNuevaCambioClave",
                    "IdContextoPlantilla": "ContextoGeneral",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Comentarios": {
                    "Id": "Comentarios",
                    "IdConcepto": "inver_bmv_cor_ComentariosCambioClave",
                    "IdContextoPlantilla": "ContextoGeneral",
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