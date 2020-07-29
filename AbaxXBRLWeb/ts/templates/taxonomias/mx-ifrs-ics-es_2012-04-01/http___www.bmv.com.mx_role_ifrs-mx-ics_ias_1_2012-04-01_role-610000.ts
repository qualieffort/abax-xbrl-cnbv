///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/role/ifrs-mx-ics/ias_1_2012-04-01_role-610000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_bmv_com_mx_role_ifrs_mx_ics_ias_1_2012_04_01_role_610000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_bmv_com_mx_role_ifrs_mx_ics_ias_1_2012_04_01_role_610000
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
                },
                "P_Instante_2013-12-31_ifrs_IssuedCapitalMember": {
                    "Id": "P_Instante_2013-12-31_ifrs_IssuedCapitalMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:IssuedCapitalMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_ifrs_TreasurySharesMember": {
                    "Id": "P_Instante_2013-12-31_ifrs_TreasurySharesMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:TreasurySharesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_TreasurySharesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:TreasurySharesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_ifrs_SharePremiumMember": {
                    "Id": "P_Instante_2013-12-31_ifrs_SharePremiumMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:SharePremiumMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_SharePremiumMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:SharePremiumMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro": {
                    "Id": "P_Instante_2013-12-31_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:AportacionesFuturosAumentosCapitalMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:AportacionesFuturosAumentosCapitalMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_mx-ifrs-ics_OtroCapitalContribuidoMiembro": {
                    "Id": "P_Instante_2013-12-31_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:OtroCapitalContribuidoMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:OtroCapitalContribuidoMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_ifrs_OtherReservesMember": {
                    "Id": "P_Instante_2013-12-31_ifrs_OtherReservesMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:OtherReservesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_ifrs_RetainedEarningsMember": {
                    "Id": "P_Instante_2013-12-31_ifrs_RetainedEarningsMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:RetainedEarningsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember": {
                    "Id": "P_Instante_2013-12-31_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-08-26/ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_ifrs_EquityAttributableToOwnersOfParentMember": {
                    "Id": "P_Instante_2013-12-31_ifrs_EquityAttributableToOwnersOfParentMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_ifrs_NoncontrollingInterestsMember": {
                    "Id": "P_Instante_2013-12-31_ifrs_NoncontrollingInterestsMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:NoncontrollingInterestsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-12-31_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro": {
                    "Id": "P_Instante_2013-12-31_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:UtilidadesPerdidasAcumuladasMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:UtilidadesPerdidasAcumuladasMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_ifrs_IssuedCapitalMember": {
                    "Id": "P_Instante_2014-09-30_ifrs_IssuedCapitalMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:IssuedCapitalMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_ifrs_TreasurySharesMember": {
                    "Id": "P_Instante_2014-09-30_ifrs_TreasurySharesMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:TreasurySharesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_TreasurySharesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:TreasurySharesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_ifrs_SharePremiumMember": {
                    "Id": "P_Instante_2014-09-30_ifrs_SharePremiumMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:SharePremiumMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_SharePremiumMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:SharePremiumMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro": {
                    "Id": "P_Instante_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:AportacionesFuturosAumentosCapitalMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:AportacionesFuturosAumentosCapitalMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro": {
                    "Id": "P_Instante_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:OtroCapitalContribuidoMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:OtroCapitalContribuidoMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_ifrs_OtherReservesMember": {
                    "Id": "P_Instante_2014-09-30_ifrs_OtherReservesMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:OtherReservesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_ifrs_RetainedEarningsMember": {
                    "Id": "P_Instante_2014-09-30_ifrs_RetainedEarningsMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:RetainedEarningsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember": {
                    "Id": "P_Instante_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-08-26/ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember": {
                    "Id": "P_Instante_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_ifrs_NoncontrollingInterestsMember": {
                    "Id": "P_Instante_2014-09-30_ifrs_NoncontrollingInterestsMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:NoncontrollingInterestsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro": {
                    "Id": "P_Instante_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:UtilidadesPerdidasAcumuladasMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:UtilidadesPerdidasAcumuladasMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31": {
                    "Id": "P_Instante_2012-12-31",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                "P_Instante_2013-09-30": {
                    "Id": "P_Instante_2013-09-30",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                "P_Instante_2012-12-31_ifrs_IssuedCapitalMember": {
                    "Id": "P_Instante_2012-12-31_ifrs_IssuedCapitalMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:IssuedCapitalMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_ifrs_TreasurySharesMember": {
                    "Id": "P_Instante_2012-12-31_ifrs_TreasurySharesMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:TreasurySharesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_TreasurySharesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:TreasurySharesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_ifrs_SharePremiumMember": {
                    "Id": "P_Instante_2012-12-31_ifrs_SharePremiumMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:SharePremiumMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_SharePremiumMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:SharePremiumMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro": {
                    "Id": "P_Instante_2012-12-31_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:AportacionesFuturosAumentosCapitalMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:AportacionesFuturosAumentosCapitalMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_mx-ifrs-ics_OtroCapitalContribuidoMiembro": {
                    "Id": "P_Instante_2012-12-31_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:OtroCapitalContribuidoMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:OtroCapitalContribuidoMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_ifrs_OtherReservesMember": {
                    "Id": "P_Instante_2012-12-31_ifrs_OtherReservesMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:OtherReservesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_ifrs_RetainedEarningsMember": {
                    "Id": "P_Instante_2012-12-31_ifrs_RetainedEarningsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:RetainedEarningsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember": {
                    "Id": "P_Instante_2012-12-31_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-08-26/ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_ifrs_EquityAttributableToOwnersOfParentMember": {
                    "Id": "P_Instante_2012-12-31_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_ifrs_NoncontrollingInterestsMember": {
                    "Id": "P_Instante_2012-12-31_ifrs_NoncontrollingInterestsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:NoncontrollingInterestsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2012-12-31_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro": {
                    "Id": "P_Instante_2012-12-31_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2012_12_31",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:UtilidadesPerdidasAcumuladasMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:UtilidadesPerdidasAcumuladasMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_ifrs_IssuedCapitalMember": {
                    "Id": "P_Instante_2013-09-30_ifrs_IssuedCapitalMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:IssuedCapitalMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_ifrs_TreasurySharesMember": {
                    "Id": "P_Instante_2013-09-30_ifrs_TreasurySharesMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:TreasurySharesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_TreasurySharesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:TreasurySharesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_ifrs_SharePremiumMember": {
                    "Id": "P_Instante_2013-09-30_ifrs_SharePremiumMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:SharePremiumMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_SharePremiumMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:SharePremiumMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro": {
                    "Id": "P_Instante_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:AportacionesFuturosAumentosCapitalMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:AportacionesFuturosAumentosCapitalMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro": {
                    "Id": "P_Instante_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:OtroCapitalContribuidoMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:OtroCapitalContribuidoMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_ifrs_OtherReservesMember": {
                    "Id": "P_Instante_2013-09-30_ifrs_OtherReservesMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:OtherReservesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_ifrs_RetainedEarningsMember": {
                    "Id": "P_Instante_2013-09-30_ifrs_RetainedEarningsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:RetainedEarningsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember": {
                    "Id": "P_Instante_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-08-26/ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember": {
                    "Id": "P_Instante_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_ifrs_NoncontrollingInterestsMember": {
                    "Id": "P_Instante_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:NoncontrollingInterestsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Instante_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro": {
                    "Id": "P_Instante_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_09_30",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:UtilidadesPerdidasAcumuladasMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:UtilidadesPerdidasAcumuladasMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30",
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
                "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:IssuedCapitalMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:TreasurySharesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_TreasurySharesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:TreasurySharesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:SharePremiumMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_SharePremiumMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:SharePremiumMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:AportacionesFuturosAumentosCapitalMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:AportacionesFuturosAumentosCapitalMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:OtroCapitalContribuidoMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:OtroCapitalContribuidoMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:OtherReservesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:RetainedEarningsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-08-26/ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:NoncontrollingInterestsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro": {
                    "Id": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:UtilidadesPerdidasAcumuladasMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:UtilidadesPerdidasAcumuladasMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                },
                "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:IssuedCapitalMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:TreasurySharesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_TreasurySharesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:TreasurySharesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:SharePremiumMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_SharePremiumMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:SharePremiumMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:AportacionesFuturosAumentosCapitalMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:AportacionesFuturosAumentosCapitalMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:OtroCapitalContribuidoMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:OtroCapitalContribuidoMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:OtherReservesMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:RetainedEarningsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-08-26/ifrs-cp_1:AccumulatedOtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs:NoncontrollingInterestsMember</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro": {
                    "Id": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_01_01",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<scenario xmlns=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx-ifrs-ics:UtilidadesPerdidasAcumuladasMiembro</xbrldi:explicitMember></scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/fr/ics/2012-04-01:UtilidadesPerdidasAcumuladasMiembro",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
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
                "P_Duracion_2013-07-01_2013-09-30": {
                    "Id": "P_Duracion_2013-07-01_2013-09-30",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2013_07_01",
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
                "Ab1183d43-2eae-44d7-a1b1-92cc114b03bd": {
                    "Id": "Ab1183d43-2eae-44d7-a1b1-92cc114b03bd",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af785719f-9071-4c46-b38a-f71bd40cf9af": {
                    "Id": "Af785719f-9071-4c46-b38a-f71bd40cf9af",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa7851feb-5777-4ae4-a491-c99df50f7df6": {
                    "Id": "Aa7851feb-5777-4ae4-a491-c99df50f7df6",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1d111c71-bbfe-4266-8851-a3dd08b09063": {
                    "Id": "A1d111c71-bbfe-4266-8851-a3dd08b09063",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A286d2940-d8f4-4172-9c37-c17fceeb2e73": {
                    "Id": "A286d2940-d8f4-4172-9c37-c17fceeb2e73",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A576dd6c2-85f3-4c65-b0fc-0f2f77e3bb5d": {
                    "Id": "A576dd6c2-85f3-4c65-b0fc-0f2f77e3bb5d",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A94caf2c2-a927-4392-85d0-5e586a99cde3": {
                    "Id": "A94caf2c2-a927-4392-85d0-5e586a99cde3",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab4ff5d42-63b6-4311-8706-24c4e6cd37bb": {
                    "Id": "Ab4ff5d42-63b6-4311-8706-24c4e6cd37bb",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa3750049-63fb-4c5c-a200-d7df38f6ee0f": {
                    "Id": "Aa3750049-63fb-4c5c-a200-d7df38f6ee0f",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab8f5bba7-2752-4573-aaa5-9f57de58611a": {
                    "Id": "Ab8f5bba7-2752-4573-aaa5-9f57de58611a",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6dc70f0e-738a-40a2-b4cf-938154060bc1": {
                    "Id": "A6dc70f0e-738a-40a2-b4cf-938154060bc1",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A614baabf-7e44-4eb1-8db8-1521c8febe96": {
                    "Id": "A614baabf-7e44-4eb1-8db8-1521c8febe96",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af80149c6-e8a7-409b-b41a-90ba2458942c": {
                    "Id": "Af80149c6-e8a7-409b-b41a-90ba2458942c",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-12-31_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A78a843f5-e79c-4115-9319-64da7571850d": {
                    "Id": "A78a843f5-e79c-4115-9319-64da7571850d",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abd03b9d8-7106-4488-9efe-6bb6f2cf80ec": {
                    "Id": "Abd03b9d8-7106-4488-9efe-6bb6f2cf80ec",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A04c6bd4c-5280-4cd9-8129-93e3038e1717": {
                    "Id": "A04c6bd4c-5280-4cd9-8129-93e3038e1717",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac824b6c9-5ed3-4581-b955-3cda7123af32": {
                    "Id": "Ac824b6c9-5ed3-4581-b955-3cda7123af32",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abe2f16db-1e67-4ec6-b85d-32f8e322abd8": {
                    "Id": "Abe2f16db-1e67-4ec6-b85d-32f8e322abd8",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae4fc7464-2c05-421f-ad58-c87d23fd70db": {
                    "Id": "Ae4fc7464-2c05-421f-ad58-c87d23fd70db",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A844a7c18-5d7d-45cc-ac60-895e2445d976": {
                    "Id": "A844a7c18-5d7d-45cc-ac60-895e2445d976",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab220a7fb-d532-4734-92b7-01debafc4a9c": {
                    "Id": "Ab220a7fb-d532-4734-92b7-01debafc4a9c",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6d38ae8f-a557-4f77-8158-55973def20b5": {
                    "Id": "A6d38ae8f-a557-4f77-8158-55973def20b5",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac4954dff-8967-47a3-a037-55545553a442": {
                    "Id": "Ac4954dff-8967-47a3-a037-55545553a442",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab0e8e648-f7f6-4eea-a676-ddfb3a95e71a": {
                    "Id": "Ab0e8e648-f7f6-4eea-a676-ddfb3a95e71a",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A69c97f4a-b558-49bf-a17d-94f51ba2f41e": {
                    "Id": "A69c97f4a-b558-49bf-a17d-94f51ba2f41e",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af354d793-89c5-4870-958f-aabf8c715c20": {
                    "Id": "Af354d793-89c5-4870-958f-aabf8c715c20",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A808aa557-a192-409f-bff3-b5c2a15a38b9": {
                    "Id": "A808aa557-a192-409f-bff3-b5c2a15a38b9",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8bae8924-1624-4892-96c2-f43d1f3ca16b": {
                    "Id": "A8bae8924-1624-4892-96c2-f43d1f3ca16b",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab0203250-109a-4d4d-9335-259806b9727c": {
                    "Id": "Ab0203250-109a-4d4d-9335-259806b9727c",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2bc03482-c5cd-429b-8c21-9515c398a22e": {
                    "Id": "A2bc03482-c5cd-429b-8c21-9515c398a22e",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A331bdab6-fce1-429e-8394-ab09cf56a5c9": {
                    "Id": "A331bdab6-fce1-429e-8394-ab09cf56a5c9",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A70197cbf-1e91-4951-9309-e3cecc637885": {
                    "Id": "A70197cbf-1e91-4951-9309-e3cecc637885",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Add393653-4dd5-4db3-85c9-09b977eb6f2a": {
                    "Id": "Add393653-4dd5-4db3-85c9-09b977eb6f2a",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac047289b-2319-486b-b736-d73806c1aaa7": {
                    "Id": "Ac047289b-2319-486b-b736-d73806c1aaa7",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A92e4834e-6334-477f-aaae-78c6fe038522": {
                    "Id": "A92e4834e-6334-477f-aaae-78c6fe038522",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A74645510-2371-44d8-875e-0e54805fcb54": {
                    "Id": "A74645510-2371-44d8-875e-0e54805fcb54",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A12819f44-eeb5-4005-94f5-15a64a0f6aa8": {
                    "Id": "A12819f44-eeb5-4005-94f5-15a64a0f6aa8",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2012-12-31_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adbc34118-baaa-4e66-bcfc-d9f9005b15dd": {
                    "Id": "Adbc34118-baaa-4e66-bcfc-d9f9005b15dd",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A07e0ce93-a6bc-4fcf-9b05-3ccc6f49b5d0": {
                    "Id": "A07e0ce93-a6bc-4fcf-9b05-3ccc6f49b5d0",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A76dd91f3-6e0a-4819-920e-6808b332bca7": {
                    "Id": "A76dd91f3-6e0a-4819-920e-6808b332bca7",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8152cfb4-074e-4d3e-8c84-030fb3809b59": {
                    "Id": "A8152cfb4-074e-4d3e-8c84-030fb3809b59",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A12543662-a42e-4aeb-8462-23215216438a": {
                    "Id": "A12543662-a42e-4aeb-8462-23215216438a",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A02beaa20-8ce5-4a0b-a9d6-63c8bd2210e6": {
                    "Id": "A02beaa20-8ce5-4a0b-a9d6-63c8bd2210e6",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A05436236-1898-46cd-91ec-ed3658331afb": {
                    "Id": "A05436236-1898-46cd-91ec-ed3658331afb",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A44967151-d788-48fd-83ed-884fa97c0a00": {
                    "Id": "A44967151-d788-48fd-83ed-884fa97c0a00",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A60a4bb69-6740-4d7a-a9fd-8ada24866032": {
                    "Id": "A60a4bb69-6740-4d7a-a9fd-8ada24866032",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4ade0cdf-b3b6-49fc-b1b6-7412b7a0c174": {
                    "Id": "A4ade0cdf-b3b6-49fc-b1b6-7412b7a0c174",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A276edb9b-b86e-4205-8e78-11f5ad86a407": {
                    "Id": "A276edb9b-b86e-4205-8e78-11f5ad86a407",
                    "IdConcepto": "ifrs_Equity",
                    "IdContextoPlantilla": "P_Instante_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09ebceb6-6caf-43b1-bdeb-4cb0573a3839": {
                    "Id": "A09ebceb6-6caf-43b1-bdeb-4cb0573a3839",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A30d2e92e-7b47-460b-b69f-edae4aba12dd": {
                    "Id": "A30d2e92e-7b47-460b-b69f-edae4aba12dd",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4db1b2a2-349a-47a8-8ff4-4575b774ea5c": {
                    "Id": "A4db1b2a2-349a-47a8-8ff4-4575b774ea5c",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4b721ecd-45bf-40c8-b7d0-35b1d8c59522": {
                    "Id": "A4b721ecd-45bf-40c8-b7d0-35b1d8c59522",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A61a9bf84-5bd0-48b2-a64c-d08adf71fb3c": {
                    "Id": "A61a9bf84-5bd0-48b2-a64c-d08adf71fb3c",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9d60aa4b-64cc-496c-beab-29251caff0cf": {
                    "Id": "A9d60aa4b-64cc-496c-beab-29251caff0cf",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6184b24e-d868-464e-90c1-de93c9712f1a": {
                    "Id": "A6184b24e-d868-464e-90c1-de93c9712f1a",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa7edfdce-9acd-40f3-ac2a-7528f14375eb": {
                    "Id": "Aa7edfdce-9acd-40f3-ac2a-7528f14375eb",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4a177430-4a50-46c5-b0f7-cf03a068ab4f": {
                    "Id": "A4a177430-4a50-46c5-b0f7-cf03a068ab4f",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A675e52b1-e212-4e34-b8d4-822676bf68dd": {
                    "Id": "A675e52b1-e212-4e34-b8d4-822676bf68dd",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5549c9fd-dae0-47b8-bac3-4ac6fe7d28dd": {
                    "Id": "A5549c9fd-dae0-47b8-bac3-4ac6fe7d28dd",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A91a0d55a-43ef-4c01-8b56-dcbf160c29d6": {
                    "Id": "A91a0d55a-43ef-4c01-8b56-dcbf160c29d6",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac9a6d60e-81dd-47a2-85d6-7fc7528d4528": {
                    "Id": "Ac9a6d60e-81dd-47a2-85d6-7fc7528d4528",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acbcc8f8b-7304-4684-b811-0c99fe2a04b0": {
                    "Id": "Acbcc8f8b-7304-4684-b811-0c99fe2a04b0",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A73cc6f17-c934-4849-8259-3193b223208d": {
                    "Id": "A73cc6f17-c934-4849-8259-3193b223208d",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8dba85aa-2d14-436f-9796-f4fff035612d": {
                    "Id": "A8dba85aa-2d14-436f-9796-f4fff035612d",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5d4bc2b7-020d-429b-8a54-0b068588faf6": {
                    "Id": "A5d4bc2b7-020d-429b-8a54-0b068588faf6",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A56311bf2-ff59-4c6a-8d42-97552c39da99": {
                    "Id": "A56311bf2-ff59-4c6a-8d42-97552c39da99",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0b45ec39-5c75-4ab8-9c80-fd25f9e3f804": {
                    "Id": "A0b45ec39-5c75-4ab8-9c80-fd25f9e3f804",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A16e09744-de26-4374-9d2f-9873bade4654": {
                    "Id": "A16e09744-de26-4374-9d2f-9873bade4654",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A11c39a4f-67e8-464a-af8b-bf91f15b57a6": {
                    "Id": "A11c39a4f-67e8-464a-af8b-bf91f15b57a6",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa32a1e21-5aad-43d5-baf7-82e6ad415e44": {
                    "Id": "Aa32a1e21-5aad-43d5-baf7-82e6ad415e44",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9a872d97-c4f8-499d-9b9d-73219738f766": {
                    "Id": "A9a872d97-c4f8-499d-9b9d-73219738f766",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8d457937-46b9-443f-b433-5c175d6d407b": {
                    "Id": "A8d457937-46b9-443f-b433-5c175d6d407b",
                    "IdConcepto": "mx-ifrs-ics_AjustesRetrospectivos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aed93200c-c0bc-4d2c-9296-781ee82c9ee4": {
                    "Id": "Aed93200c-c0bc-4d2c-9296-781ee82c9ee4",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abc591a09-8633-4d4e-b577-24456b44b8e4": {
                    "Id": "Abc591a09-8633-4d4e-b577-24456b44b8e4",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adc8ff569-06cf-4906-9122-78c425ccfea9": {
                    "Id": "Adc8ff569-06cf-4906-9122-78c425ccfea9",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa9467880-59a8-4d4f-baa0-88ddcd7ac46c": {
                    "Id": "Aa9467880-59a8-4d4f-baa0-88ddcd7ac46c",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abbe31d52-f306-4bca-ba6f-6512dabc492d": {
                    "Id": "Abbe31d52-f306-4bca-ba6f-6512dabc492d",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae1a03b50-c244-4714-89b5-24e4d2d079c8": {
                    "Id": "Ae1a03b50-c244-4714-89b5-24e4d2d079c8",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2a7b889a-f55c-454e-8f83-5c1d6c5ec804": {
                    "Id": "A2a7b889a-f55c-454e-8f83-5c1d6c5ec804",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1f85c523-1d77-444e-b8c1-dd613eff510f": {
                    "Id": "A1f85c523-1d77-444e-b8c1-dd613eff510f",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09457944-202c-4159-b0c0-7f429171495c": {
                    "Id": "A09457944-202c-4159-b0c0-7f429171495c",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A27d63da2-cc66-4b44-88a2-29470155ecd9": {
                    "Id": "A27d63da2-cc66-4b44-88a2-29470155ecd9",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaf40c076-09cb-4778-81d3-9a56f073acbd": {
                    "Id": "Aaf40c076-09cb-4778-81d3-9a56f073acbd",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acc913e3e-7422-4109-bc5c-afd4f5aee367": {
                    "Id": "Acc913e3e-7422-4109-bc5c-afd4f5aee367",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5dfe3612-fca2-4fe1-b088-e5fb7829ad48": {
                    "Id": "A5dfe3612-fca2-4fe1-b088-e5fb7829ad48",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1d4230ea-ea97-4b33-a12d-782c82750f46": {
                    "Id": "A1d4230ea-ea97-4b33-a12d-782c82750f46",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2ea86275-eb62-4734-9461-2cd0414724fb": {
                    "Id": "A2ea86275-eb62-4734-9461-2cd0414724fb",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acb3ac36b-da01-40ba-a9cf-b7e17442f9bb": {
                    "Id": "Acb3ac36b-da01-40ba-a9cf-b7e17442f9bb",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4810524a-6d17-4b89-bf43-8a48f74a9e27": {
                    "Id": "A4810524a-6d17-4b89-bf43-8a48f74a9e27",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A44179076-3358-4ae4-97f6-2aa87e98dda5": {
                    "Id": "A44179076-3358-4ae4-97f6-2aa87e98dda5",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3c694945-7623-44ce-aa56-0aa64b3b3d89": {
                    "Id": "A3c694945-7623-44ce-aa56-0aa64b3b3d89",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af873c7b3-05a8-40e9-8c40-9a8ae14c5bf0": {
                    "Id": "Af873c7b3-05a8-40e9-8c40-9a8ae14c5bf0",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A66c9d491-87e3-4c08-8af3-ec045c8c2ea7": {
                    "Id": "A66c9d491-87e3-4c08-8af3-ec045c8c2ea7",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac7b20319-1240-428b-9e5b-d218b9c132dd": {
                    "Id": "Ac7b20319-1240-428b-9e5b-d218b9c132dd",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A06e68261-08a6-41ee-a9fe-55bdc81bf1d0": {
                    "Id": "A06e68261-08a6-41ee-a9fe-55bdc81bf1d0",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A266fa595-fe46-4984-92ba-132075d30f88": {
                    "Id": "A266fa595-fe46-4984-92ba-132075d30f88",
                    "IdConcepto": "mx-ifrs-ics_AplicacionOtrosResultadosIntegralesUtilidadesRetenidas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2d4f531a-5b16-4c49-80ac-4390b49d0635": {
                    "Id": "A2d4f531a-5b16-4c49-80ac-4390b49d0635",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af152bcae-8720-45dd-9e35-e56638fea8c2": {
                    "Id": "Af152bcae-8720-45dd-9e35-e56638fea8c2",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa1505af2-f823-4b12-b0ac-864fa79ca5d0": {
                    "Id": "Aa1505af2-f823-4b12-b0ac-864fa79ca5d0",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6ccdcf2e-afc6-4e74-a820-57aed612e8f1": {
                    "Id": "A6ccdcf2e-afc6-4e74-a820-57aed612e8f1",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A62bbba81-fc34-4a36-81b1-67d8ca086a46": {
                    "Id": "A62bbba81-fc34-4a36-81b1-67d8ca086a46",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09b0cffb-6487-4b14-ba7c-1956ede29619": {
                    "Id": "A09b0cffb-6487-4b14-ba7c-1956ede29619",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae9e858de-1cc1-4962-8db5-f9de4e5e2738": {
                    "Id": "Ae9e858de-1cc1-4962-8db5-f9de4e5e2738",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aad4bd9f6-657b-4b1e-ae70-fdce131a3643": {
                    "Id": "Aad4bd9f6-657b-4b1e-ae70-fdce131a3643",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A969e0efa-fb0f-4683-ae4b-6d7757e85248": {
                    "Id": "A969e0efa-fb0f-4683-ae4b-6d7757e85248",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac28fb7e4-0901-483e-9fb4-bf86cbd84ea1": {
                    "Id": "Ac28fb7e4-0901-483e-9fb4-bf86cbd84ea1",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab3aa2aff-5a9e-40b0-adcb-617389cc9237": {
                    "Id": "Ab3aa2aff-5a9e-40b0-adcb-617389cc9237",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac7319f03-67b3-49d9-8399-ec2ff81c8b0e": {
                    "Id": "Ac7319f03-67b3-49d9-8399-ec2ff81c8b0e",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aea616e36-0f96-428f-a812-606863e70e1f": {
                    "Id": "Aea616e36-0f96-428f-a812-606863e70e1f",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A80abbc0f-197f-43d6-8aa9-efbc56c1dc5a": {
                    "Id": "A80abbc0f-197f-43d6-8aa9-efbc56c1dc5a",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3cdabf62-dd8e-4e1a-95ff-f6bba8962096": {
                    "Id": "A3cdabf62-dd8e-4e1a-95ff-f6bba8962096",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A76395b72-ad31-4abd-a97a-d903048b8a18": {
                    "Id": "A76395b72-ad31-4abd-a97a-d903048b8a18",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae67fa4b4-98fd-4b44-a90a-c85d38e6883b": {
                    "Id": "Ae67fa4b4-98fd-4b44-a90a-c85d38e6883b",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abeaa0168-3a1f-4042-ba49-03bf9fb754f2": {
                    "Id": "Abeaa0168-3a1f-4042-ba49-03bf9fb754f2",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A618481a1-cc63-4873-a205-9fe165d6a454": {
                    "Id": "A618481a1-cc63-4873-a205-9fe165d6a454",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A31d0ffe8-1273-4a7d-908d-42f8e922503b": {
                    "Id": "A31d0ffe8-1273-4a7d-908d-42f8e922503b",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ace6002b0-6961-4f40-a5d1-56b6fe749995": {
                    "Id": "Ace6002b0-6961-4f40-a5d1-56b6fe749995",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8f96da45-5c66-460d-9d56-bfbec0df7854": {
                    "Id": "A8f96da45-5c66-460d-9d56-bfbec0df7854",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad3c6c48b-feb1-4aa2-ad96-2229abebd9e5": {
                    "Id": "Ad3c6c48b-feb1-4aa2-ad96-2229abebd9e5",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7d0346ca-4267-4fd7-a7dd-08be18791148": {
                    "Id": "A7d0346ca-4267-4fd7-a7dd-08be18791148",
                    "IdConcepto": "mx-ifrs-ics_ConstitucionReservas",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A009be09c-e62d-482e-a254-10f1f916bfe3": {
                    "Id": "A009be09c-e62d-482e-a254-10f1f916bfe3",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af340b42c-998a-4d04-8c26-18e01cd3bc90": {
                    "Id": "Af340b42c-998a-4d04-8c26-18e01cd3bc90",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A076dc8d8-bdbc-47ac-ad7a-ff4906fc9a96": {
                    "Id": "A076dc8d8-bdbc-47ac-ad7a-ff4906fc9a96",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A076d2a25-c47c-4242-a962-da06d982ea17": {
                    "Id": "A076d2a25-c47c-4242-a962-da06d982ea17",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af311475a-20d1-4298-b07a-147b798e9672": {
                    "Id": "Af311475a-20d1-4298-b07a-147b798e9672",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A20796457-58fa-4de2-8a24-0a0a55a5bf86": {
                    "Id": "A20796457-58fa-4de2-8a24-0a0a55a5bf86",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1b81966d-d31d-40c4-81bc-088bb8682065": {
                    "Id": "A1b81966d-d31d-40c4-81bc-088bb8682065",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A521661eb-e610-492c-932a-df793a5c06e3": {
                    "Id": "A521661eb-e610-492c-932a-df793a5c06e3",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0901d565-78d8-46fc-b611-ef3335e8b4b5": {
                    "Id": "A0901d565-78d8-46fc-b611-ef3335e8b4b5",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab1f0c293-b615-47f1-a252-7810769f4594": {
                    "Id": "Ab1f0c293-b615-47f1-a252-7810769f4594",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1a6560ce-49c4-4b4d-967c-1894fa7d4792": {
                    "Id": "A1a6560ce-49c4-4b4d-967c-1894fa7d4792",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aed43ee16-9e52-4210-b1cb-cd635a6d60de": {
                    "Id": "Aed43ee16-9e52-4210-b1cb-cd635a6d60de",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6e584718-bbe3-44f1-974f-60a149ad7eaf": {
                    "Id": "A6e584718-bbe3-44f1-974f-60a149ad7eaf",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A22247c07-6fa0-49f1-8de4-3ccd65c078c5": {
                    "Id": "A22247c07-6fa0-49f1-8de4-3ccd65c078c5",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7e532675-e39b-43ac-ab57-d955abc3a4bb": {
                    "Id": "A7e532675-e39b-43ac-ab57-d955abc3a4bb",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A826f3ab0-5c00-41fe-a084-120e60ba2cbe": {
                    "Id": "A826f3ab0-5c00-41fe-a084-120e60ba2cbe",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A45bf0e30-cb69-4d87-a02e-6168875be910": {
                    "Id": "A45bf0e30-cb69-4d87-a02e-6168875be910",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5b6f4d1f-7600-4624-94de-0e2a01bbae2c": {
                    "Id": "A5b6f4d1f-7600-4624-94de-0e2a01bbae2c",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A84bb87e4-5af5-4ac7-bc2b-379bc0fdaeab": {
                    "Id": "A84bb87e4-5af5-4ac7-bc2b-379bc0fdaeab",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A73d905a4-dfef-4a73-9234-4a48d1cd65d5": {
                    "Id": "A73d905a4-dfef-4a73-9234-4a48d1cd65d5",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad78ddadb-2839-416f-8c1b-f7ff8daf46c7": {
                    "Id": "Ad78ddadb-2839-416f-8c1b-f7ff8daf46c7",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A232c0102-cd1d-4381-8d1e-4d936f93fdb5": {
                    "Id": "A232c0102-cd1d-4381-8d1e-4d936f93fdb5",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A59373eef-2aa4-43b7-99db-b5c362834823": {
                    "Id": "A59373eef-2aa4-43b7-99db-b5c362834823",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5a3923af-eccb-4b5b-be2f-fb5ea233c1d2": {
                    "Id": "A5a3923af-eccb-4b5b-be2f-fb5ea233c1d2",
                    "IdConcepto": "ifrs_DividendsPaid",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5114b695-aa9f-43ba-b50f-419d662ee8e3": {
                    "Id": "A5114b695-aa9f-43ba-b50f-419d662ee8e3",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af5ba11d0-5de7-461b-b745-d732ce8a5cbf": {
                    "Id": "Af5ba11d0-5de7-461b-b745-d732ce8a5cbf",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A166dd782-abd8-4be0-b8c9-94b99a31eba0": {
                    "Id": "A166dd782-abd8-4be0-b8c9-94b99a31eba0",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5680e091-be01-4af0-9df5-aae4582b6edb": {
                    "Id": "A5680e091-be01-4af0-9df5-aae4582b6edb",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab00b1df8-87f9-4aef-8a51-f391c8538c1a": {
                    "Id": "Ab00b1df8-87f9-4aef-8a51-f391c8538c1a",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3060ea18-1e60-4ad5-9d9c-2c636cbbac60": {
                    "Id": "A3060ea18-1e60-4ad5-9d9c-2c636cbbac60",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae9aec17a-1ddf-42e7-9af8-c39ea2041198": {
                    "Id": "Ae9aec17a-1ddf-42e7-9af8-c39ea2041198",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae9119b5d-697a-4795-b750-954b269d5ad2": {
                    "Id": "Ae9119b5d-697a-4795-b750-954b269d5ad2",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5f8e0230-fde4-41d4-ab1d-ea857a191394": {
                    "Id": "A5f8e0230-fde4-41d4-ab1d-ea857a191394",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af6b38d32-340e-4680-a8a6-57646cab23b8": {
                    "Id": "Af6b38d32-340e-4680-a8a6-57646cab23b8",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A793fb4d2-a5ad-458b-9a13-82459a2e997e": {
                    "Id": "A793fb4d2-a5ad-458b-9a13-82459a2e997e",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa63a56f2-ac8f-41bd-978a-fa4228ccd65a": {
                    "Id": "Aa63a56f2-ac8f-41bd-978a-fa4228ccd65a",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aba544be1-ef1a-4853-97a2-c57064435792": {
                    "Id": "Aba544be1-ef1a-4853-97a2-c57064435792",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Addd2eda5-396c-4cbc-92e5-78ce510b9d26": {
                    "Id": "Addd2eda5-396c-4cbc-92e5-78ce510b9d26",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A422649a5-d5e7-4609-922e-f1cf00b30cfd": {
                    "Id": "A422649a5-d5e7-4609-922e-f1cf00b30cfd",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8a5c59fb-d963-48f1-a465-53bc8ce6fa38": {
                    "Id": "A8a5c59fb-d963-48f1-a465-53bc8ce6fa38",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A48bc685a-523b-42c9-9e84-fee1ea40d728": {
                    "Id": "A48bc685a-523b-42c9-9e84-fee1ea40d728",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A270e19c0-ad9c-4e54-814b-67c6c472c55a": {
                    "Id": "A270e19c0-ad9c-4e54-814b-67c6c472c55a",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af7a8aff0-662c-4fc4-958f-c58fcfb0b868": {
                    "Id": "Af7a8aff0-662c-4fc4-958f-c58fcfb0b868",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aea7ee831-f619-4edd-a9e9-fdd0c7cf15c7": {
                    "Id": "Aea7ee831-f619-4edd-a9e9-fdd0c7cf15c7",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0b3c421d-3141-453d-ac86-ca86ca009c69": {
                    "Id": "A0b3c421d-3141-453d-ac86-ca86ca009c69",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0d5f66c1-48a7-424e-b091-f973efc9215e": {
                    "Id": "A0d5f66c1-48a7-424e-b091-f973efc9215e",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4d67b187-5f9b-4897-87da-92a9281493ea": {
                    "Id": "A4d67b187-5f9b-4897-87da-92a9281493ea",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af26cb266-7f8b-4d45-a503-02660a2406db": {
                    "Id": "Af26cb266-7f8b-4d45-a503-02660a2406db",
                    "IdConcepto": "mx-ifrs-ics_DisminucionAumentosCapital",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A94b0ddff-690f-4276-9e2d-5b135062be82": {
                    "Id": "A94b0ddff-690f-4276-9e2d-5b135062be82",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A647d49b4-65cd-40d6-96af-1c52651f740e": {
                    "Id": "A647d49b4-65cd-40d6-96af-1c52651f740e",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8817ec1a-a683-4c1a-9a8a-63619bf1403c": {
                    "Id": "A8817ec1a-a683-4c1a-9a8a-63619bf1403c",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A488febf7-30ed-443b-b27a-d8c172ed455e": {
                    "Id": "A488febf7-30ed-443b-b27a-d8c172ed455e",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A018061f6-db14-4787-a40a-748f625eb5de": {
                    "Id": "A018061f6-db14-4787-a40a-748f625eb5de",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad422002a-2921-46f9-8dc7-20c18396790e": {
                    "Id": "Ad422002a-2921-46f9-8dc7-20c18396790e",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A42e64c56-5806-4669-b0c7-dca645027094": {
                    "Id": "A42e64c56-5806-4669-b0c7-dca645027094",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A735478cc-c3be-4418-9c4d-b052148933c9": {
                    "Id": "A735478cc-c3be-4418-9c4d-b052148933c9",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab1a08d3b-9ee1-4933-99ae-b4ce458f4780": {
                    "Id": "Ab1a08d3b-9ee1-4933-99ae-b4ce458f4780",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab02f1aa4-08aa-478b-9e88-57e89595ebd5": {
                    "Id": "Ab02f1aa4-08aa-478b-9e88-57e89595ebd5",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A79873fbd-dcaa-471e-aba0-b754ee86770b": {
                    "Id": "A79873fbd-dcaa-471e-aba0-b754ee86770b",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adcf485d1-b9eb-4ded-aef8-af97f1917748": {
                    "Id": "Adcf485d1-b9eb-4ded-aef8-af97f1917748",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A36ec0731-95a2-40ec-a39c-09917fbc7949": {
                    "Id": "A36ec0731-95a2-40ec-a39c-09917fbc7949",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae7d4be7a-879c-4638-a0db-ee2ddba6f79f": {
                    "Id": "Ae7d4be7a-879c-4638-a0db-ee2ddba6f79f",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A977ba5c3-763f-4f3b-af7c-506fc1e467d7": {
                    "Id": "A977ba5c3-763f-4f3b-af7c-506fc1e467d7",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2e31d962-beeb-4cae-be3d-34021a7e1a33": {
                    "Id": "A2e31d962-beeb-4cae-be3d-34021a7e1a33",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5edb77cb-17c7-4861-a1b9-d696eed6e80d": {
                    "Id": "A5edb77cb-17c7-4861-a1b9-d696eed6e80d",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa463d928-7b5f-4d06-8a3c-1e4a16a8be52": {
                    "Id": "Aa463d928-7b5f-4d06-8a3c-1e4a16a8be52",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7469dc14-c588-46c3-9769-b253c61704b6": {
                    "Id": "A7469dc14-c588-46c3-9769-b253c61704b6",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1262373b-64dd-45e8-bd75-73189d3c9268": {
                    "Id": "A1262373b-64dd-45e8-bd75-73189d3c9268",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A27f95495-d843-4e4e-bdde-a9c60ea106dd": {
                    "Id": "A27f95495-d843-4e4e-bdde-a9c60ea106dd",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af14af58e-cb03-497b-ad38-fb4d7db490c6": {
                    "Id": "Af14af58e-cb03-497b-ad38-fb4d7db490c6",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae3e53786-deb0-43c6-883a-86753ff401e9": {
                    "Id": "Ae3e53786-deb0-43c6-883a-86753ff401e9",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afcca09bf-1eca-4764-b05f-0c7c65e4012c": {
                    "Id": "Afcca09bf-1eca-4764-b05f-0c7c65e4012c",
                    "IdConcepto": "ifrs_IncreaseDecreaseThroughTreasuryShareTransactions",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aea4eb10b-7cc5-4ef5-b608-84253e19f31b": {
                    "Id": "Aea4eb10b-7cc5-4ef5-b608-84253e19f31b",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A109d1e69-ef1c-4695-becd-675b73fb3332": {
                    "Id": "A109d1e69-ef1c-4695-becd-675b73fb3332",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acbdb55b7-6f41-4431-b7ad-ed640ca620d5": {
                    "Id": "Acbdb55b7-6f41-4431-b7ad-ed640ca620d5",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A96dbecf4-9c63-4dfc-bbf7-05955b955df4": {
                    "Id": "A96dbecf4-9c63-4dfc-bbf7-05955b955df4",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A343e66f1-5e01-483f-843b-2259443f3e9e": {
                    "Id": "A343e66f1-5e01-483f-843b-2259443f3e9e",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab44b5bd4-563e-4589-b210-ef9c38913baa": {
                    "Id": "Ab44b5bd4-563e-4589-b210-ef9c38913baa",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac88b42dc-bd4c-4bc2-bcb8-4962899c3148": {
                    "Id": "Ac88b42dc-bd4c-4bc2-bcb8-4962899c3148",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A38801f05-24f0-446c-b13b-e972c05e6a0d": {
                    "Id": "A38801f05-24f0-446c-b13b-e972c05e6a0d",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A058cd1dc-a6a8-4603-bf4d-dcc0441146ce": {
                    "Id": "A058cd1dc-a6a8-4603-bf4d-dcc0441146ce",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac7108650-4057-4597-a26e-a3f95c821e51": {
                    "Id": "Ac7108650-4057-4597-a26e-a3f95c821e51",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad0973f34-8fb0-4147-8e81-5fdc8424e3aa": {
                    "Id": "Ad0973f34-8fb0-4147-8e81-5fdc8424e3aa",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa5b8baae-65ff-4cc3-a9ed-f8dc9fe4a47b": {
                    "Id": "Aa5b8baae-65ff-4cc3-a9ed-f8dc9fe4a47b",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae62a14d5-554e-4e3b-a1cf-39f9755ce569": {
                    "Id": "Ae62a14d5-554e-4e3b-a1cf-39f9755ce569",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A807e5dbb-a987-4b09-822e-7ccb4932f125": {
                    "Id": "A807e5dbb-a987-4b09-822e-7ccb4932f125",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A90a6e84e-9030-4f42-ba09-f9d7bc0eddd6": {
                    "Id": "A90a6e84e-9030-4f42-ba09-f9d7bc0eddd6",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae863bff1-f05a-4aa7-83e4-4ef754b1da72": {
                    "Id": "Ae863bff1-f05a-4aa7-83e4-4ef754b1da72",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0c87324c-4f3d-449a-88fa-802057f79297": {
                    "Id": "A0c87324c-4f3d-449a-88fa-802057f79297",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A62b7b52b-36c1-4f9c-8eb9-72872c1858e7": {
                    "Id": "A62b7b52b-36c1-4f9c-8eb9-72872c1858e7",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A36939052-9cc9-4f8d-93b5-f33ee482ca73": {
                    "Id": "A36939052-9cc9-4f8d-93b5-f33ee482ca73",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A96a73e5c-9fa0-437e-a2ca-4a946f68a636": {
                    "Id": "A96a73e5c-9fa0-437e-a2ca-4a946f68a636",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A08d81161-da64-4db5-ba50-a281f9a12149": {
                    "Id": "A08d81161-da64-4db5-ba50-a281f9a12149",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A475972a4-eaf8-4b04-9c98-6f8f2153ebae": {
                    "Id": "A475972a4-eaf8-4b04-9c98-6f8f2153ebae",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac9bc8889-5890-4430-9311-6bd136016738": {
                    "Id": "Ac9bc8889-5890-4430-9311-6bd136016738",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa333b01d-20e2-4504-9bcd-0e5588274b2f": {
                    "Id": "Aa333b01d-20e2-4504-9bcd-0e5588274b2f",
                    "IdConcepto": "ifrs_IssueOfEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1108192c-ef63-4f5d-8438-3f5d212bf47c": {
                    "Id": "A1108192c-ef63-4f5d-8438-3f5d212bf47c",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0d028a42-7dcd-435e-ae1e-ca5ddc54dc2b": {
                    "Id": "A0d028a42-7dcd-435e-ae1e-ca5ddc54dc2b",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1f612bc4-2666-4757-97a1-2c6778a0301a": {
                    "Id": "A1f612bc4-2666-4757-97a1-2c6778a0301a",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aeff04415-2953-4fbe-8fc4-6f20ab047d4d": {
                    "Id": "Aeff04415-2953-4fbe-8fc4-6f20ab047d4d",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A78d692b4-6483-436d-a0be-0c4211fd7dec": {
                    "Id": "A78d692b4-6483-436d-a0be-0c4211fd7dec",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2fe31acd-fe32-4547-b4b3-ae24d0026896": {
                    "Id": "A2fe31acd-fe32-4547-b4b3-ae24d0026896",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9e734685-ccfa-46ad-a8ff-402910d9ea38": {
                    "Id": "A9e734685-ccfa-46ad-a8ff-402910d9ea38",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A06e10e0e-ec9c-4691-a111-b23ed048a1f4": {
                    "Id": "A06e10e0e-ec9c-4691-a111-b23ed048a1f4",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3ce4c530-3411-4151-93f8-3e9bd7372882": {
                    "Id": "A3ce4c530-3411-4151-93f8-3e9bd7372882",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A14d29f9d-a4ad-4358-81b4-940a62a4977c": {
                    "Id": "A14d29f9d-a4ad-4358-81b4-940a62a4977c",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa687bee5-3519-40c3-987c-480b65d8c6e1": {
                    "Id": "Aa687bee5-3519-40c3-987c-480b65d8c6e1",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2e6bc3cc-4c64-424f-9ea0-dab5dbb76052": {
                    "Id": "A2e6bc3cc-4c64-424f-9ea0-dab5dbb76052",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae1c9f131-db7b-4bfe-a117-232427ef1180": {
                    "Id": "Ae1c9f131-db7b-4bfe-a117-232427ef1180",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acc54b657-52e4-4d06-88a2-bd72c0ad72ac": {
                    "Id": "Acc54b657-52e4-4d06-88a2-bd72c0ad72ac",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1b5b218f-a31d-4bab-b0b4-227aa45ae63f": {
                    "Id": "A1b5b218f-a31d-4bab-b0b4-227aa45ae63f",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0e8319f3-1763-4150-83f7-22d0c0647dbb": {
                    "Id": "A0e8319f3-1763-4150-83f7-22d0c0647dbb",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad8b4e2ab-1cf4-4da7-9b05-ae276b2d7d15": {
                    "Id": "Ad8b4e2ab-1cf4-4da7-9b05-ae276b2d7d15",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A910ddb22-a86c-4d10-8550-c9181cc86448": {
                    "Id": "A910ddb22-a86c-4d10-8550-c9181cc86448",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0eddffa5-fe45-4466-88f2-ef85c94ceeb2": {
                    "Id": "A0eddffa5-fe45-4466-88f2-ef85c94ceeb2",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1885d8eb-ebdc-43a9-84ff-ba414eb1772a": {
                    "Id": "A1885d8eb-ebdc-43a9-84ff-ba414eb1772a",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6e0ae6e6-daa9-4800-91d2-b0288835e2fc": {
                    "Id": "A6e0ae6e6-daa9-4800-91d2-b0288835e2fc",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4251b8dd-fc1b-408b-8c24-f1bfa0ca5844": {
                    "Id": "A4251b8dd-fc1b-408b-8c24-f1bfa0ca5844",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5fb4ae5f-27e5-41ae-a449-ecad9b812862": {
                    "Id": "A5fb4ae5f-27e5-41ae-a449-ecad9b812862",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A73dded79-7d33-40f9-bed2-e6e2decbf0b6": {
                    "Id": "A73dded79-7d33-40f9-bed2-e6e2decbf0b6",
                    "IdConcepto": "ifrs-cp_1_IncreaseDecreaseThroughChangeInEquityOfSubsidiaries",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ade365ec4-abf6-445c-a4f3-e4d28ea6c6fb": {
                    "Id": "Ade365ec4-abf6-445c-a4f3-e4d28ea6c6fb",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7f849b07-d260-4ec5-9c48-2a24d8320b07": {
                    "Id": "A7f849b07-d260-4ec5-9c48-2a24d8320b07",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abb954782-fd9c-4828-a84c-db1097888e32": {
                    "Id": "Abb954782-fd9c-4828-a84c-db1097888e32",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5af4c86a-67ec-4ea6-ac52-c7e54062dc2a": {
                    "Id": "A5af4c86a-67ec-4ea6-ac52-c7e54062dc2a",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aadba73c9-4c3a-46fa-b7bb-ce3704cabbff": {
                    "Id": "Aadba73c9-4c3a-46fa-b7bb-ce3704cabbff",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A128fd961-eaf7-4751-8c48-fb3d691fb509": {
                    "Id": "A128fd961-eaf7-4751-8c48-fb3d691fb509",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A66bbcaef-51d5-48e8-8653-3e1f6fa71927": {
                    "Id": "A66bbcaef-51d5-48e8-8653-3e1f6fa71927",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9319a3fa-4b2c-4ed1-999f-c1075d206d30": {
                    "Id": "A9319a3fa-4b2c-4ed1-999f-c1075d206d30",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adc9f747d-4e1d-42d6-9be1-d52cf417c128": {
                    "Id": "Adc9f747d-4e1d-42d6-9be1-d52cf417c128",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A488a98c7-88a2-40e5-9db2-cb462ec9a43e": {
                    "Id": "A488a98c7-88a2-40e5-9db2-cb462ec9a43e",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A87d046c7-b594-4d96-a30c-4a94e12f3fc2": {
                    "Id": "A87d046c7-b594-4d96-a30c-4a94e12f3fc2",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A07cd751c-a7e7-46d2-a41a-44bbeb72aa68": {
                    "Id": "A07cd751c-a7e7-46d2-a41a-44bbeb72aa68",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3d879a58-7e65-4eeb-8c5e-3d29ecce5147": {
                    "Id": "A3d879a58-7e65-4eeb-8c5e-3d29ecce5147",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A87e9edbb-fcd5-4d89-b628-a7de47847fdc": {
                    "Id": "A87e9edbb-fcd5-4d89-b628-a7de47847fdc",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5fab85d3-70ff-4a1f-896d-8bbf586be21b": {
                    "Id": "A5fab85d3-70ff-4a1f-896d-8bbf586be21b",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A93941900-59b7-42d8-8eff-c10343a8a331": {
                    "Id": "A93941900-59b7-42d8-8eff-c10343a8a331",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0a5d734b-29b6-497c-95dc-6659299a3649": {
                    "Id": "A0a5d734b-29b6-497c-95dc-6659299a3649",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A57f6dd7c-4fa4-4b31-83ea-ccc7a4d08dbb": {
                    "Id": "A57f6dd7c-4fa4-4b31-83ea-ccc7a4d08dbb",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f9cce39-e36b-4fac-841c-19b965d6300c": {
                    "Id": "A4f9cce39-e36b-4fac-841c-19b965d6300c",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A35e7f37c-00c5-4817-936e-7cf82232e1ea": {
                    "Id": "A35e7f37c-00c5-4817-936e-7cf82232e1ea",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5aaa41ec-ad21-4b9e-97d6-9dda2ef99e1e": {
                    "Id": "A5aaa41ec-ad21-4b9e-97d6-9dda2ef99e1e",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A82e92659-22b8-4725-950b-0b3ee44d7301": {
                    "Id": "A82e92659-22b8-4725-950b-0b3ee44d7301",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaff2a67f-4f7b-41a5-ba27-c7aa9e4f74d9": {
                    "Id": "Aaff2a67f-4f7b-41a5-ba27-c7aa9e4f74d9",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4a93df7c-4bee-426e-a8ff-6897e71f9741": {
                    "Id": "A4a93df7c-4bee-426e-a8ff-6897e71f9741",
                    "IdConcepto": "mx-ifrs-ics_OtrosMovimientos",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad939eaff-dd1b-4e01-90e3-81130c516878": {
                    "Id": "Ad939eaff-dd1b-4e01-90e3-81130c516878",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-07-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aed3739c7-675f-42f3-94d9-954d07ac9e35": {
                    "Id": "Aed3739c7-675f-42f3-94d9-954d07ac9e35",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A74b8948c-e372-4378-894a-d043f790792e": {
                    "Id": "A74b8948c-e372-4378-894a-d043f790792e",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A68758ff0-231c-4cce-bff7-a35518547629": {
                    "Id": "A68758ff0-231c-4cce-bff7-a35518547629",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7dfe01a1-ec1c-4728-bbdf-0033b61a8c8e": {
                    "Id": "A7dfe01a1-ec1c-4728-bbdf-0033b61a8c8e",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A86b43ad3-1dba-4f42-88aa-ec1da7cb4e34": {
                    "Id": "A86b43ad3-1dba-4f42-88aa-ec1da7cb4e34",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae699699e-272a-400e-9f4d-92321b8fd789": {
                    "Id": "Ae699699e-272a-400e-9f4d-92321b8fd789",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9726f171-a59e-4141-a564-29f7f6acf963": {
                    "Id": "A9726f171-a59e-4141-a564-29f7f6acf963",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae95f2cbf-c414-4861-a3f5-fd40d0ef4afa": {
                    "Id": "Ae95f2cbf-c414-4861-a3f5-fd40d0ef4afa",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa897c415-11ab-444f-bceb-d25d213b80a3": {
                    "Id": "Aa897c415-11ab-444f-bceb-d25d213b80a3",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A58726a7d-fb29-43f3-9607-7fdd8a4fd86b": {
                    "Id": "A58726a7d-fb29-43f3-9607-7fdd8a4fd86b",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A155e97ac-6f1c-4ac3-9fac-4be5cd94a902": {
                    "Id": "A155e97ac-6f1c-4ac3-9fac-4be5cd94a902",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A67a23bb8-84d5-410f-b3f0-f6556d236289": {
                    "Id": "A67a23bb8-84d5-410f-b3f0-f6556d236289",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A689271ba-3972-418f-9c84-27ecf11d0f32": {
                    "Id": "A689271ba-3972-418f-9c84-27ecf11d0f32",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4eba3ec8-02e0-4ac6-b0a9-ae756ff9aea3": {
                    "Id": "A4eba3ec8-02e0-4ac6-b0a9-ae756ff9aea3",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2f535e95-4d41-4d8d-9d39-02867e306d4f": {
                    "Id": "A2f535e95-4d41-4d8d-9d39-02867e306d4f",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A261fb97d-d90f-4f5e-baab-e78cd910399b": {
                    "Id": "A261fb97d-d90f-4f5e-baab-e78cd910399b",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A68101310-7328-48c1-8375-86a204ddede2": {
                    "Id": "A68101310-7328-48c1-8375-86a204ddede2",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8b022909-2331-4ee3-80e0-d21beac36f53": {
                    "Id": "A8b022909-2331-4ee3-80e0-d21beac36f53",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A03b6157a-75f2-4103-b9fe-2f52ef73568b": {
                    "Id": "A03b6157a-75f2-4103-b9fe-2f52ef73568b",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A76ef549a-d72c-4afb-90c6-2c2481ed0fb3": {
                    "Id": "A76ef549a-d72c-4afb-90c6-2c2481ed0fb3",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A85b23fe2-bf1b-4b71-ab48-e8a2700bb9e5": {
                    "Id": "A85b23fe2-bf1b-4b71-ab48-e8a2700bb9e5",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A82e32a24-f2b6-43bf-bde1-6d1fd7a15612": {
                    "Id": "A82e32a24-f2b6-43bf-bde1-6d1fd7a15612",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A98c735be-ad70-4f20-b216-0fe43bd23465": {
                    "Id": "A98c735be-ad70-4f20-b216-0fe43bd23465",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A40ba86e0-e157-4603-9a2d-751f700c1c48": {
                    "Id": "A40ba86e0-e157-4603-9a2d-751f700c1c48",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0c170f70-c3cc-4b0b-97f6-57c2d89ce955": {
                    "Id": "A0c170f70-c3cc-4b0b-97f6-57c2d89ce955",
                    "IdConcepto": "ifrs_ComprehensiveIncome",
                    "IdContextoPlantilla": "P_Duracion_2013-07-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A71701bee-cbbb-4a49-acff-cec7e934e5cd": {
                    "Id": "A71701bee-cbbb-4a49-acff-cec7e934e5cd",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A80546c99-31e1-4842-8a87-9a0886debead": {
                    "Id": "A80546c99-31e1-4842-8a87-9a0886debead",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa40c8ad5-78f0-4fad-a818-826879ef71ca": {
                    "Id": "Aa40c8ad5-78f0-4fad-a818-826879ef71ca",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7822dce2-e068-42b9-8943-484004bf11ca": {
                    "Id": "A7822dce2-e068-42b9-8943-484004bf11ca",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Add37d5bc-788d-4d1d-8f71-cbfb1267959e": {
                    "Id": "Add37d5bc-788d-4d1d-8f71-cbfb1267959e",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1ed459c2-52eb-4b60-a1a7-dc3102fc540f": {
                    "Id": "A1ed459c2-52eb-4b60-a1a7-dc3102fc540f",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4ddb6376-b148-4900-91d1-6e7d1e0efb19": {
                    "Id": "A4ddb6376-b148-4900-91d1-6e7d1e0efb19",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af95713da-cc79-4021-9d69-7099a54ba4fb": {
                    "Id": "Af95713da-cc79-4021-9d69-7099a54ba4fb",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afee7e224-9e45-430a-bb0d-3e1313613b5f": {
                    "Id": "Afee7e224-9e45-430a-bb0d-3e1313613b5f",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A266e19e9-8bf5-4f3a-ac2a-e6333a29c68d": {
                    "Id": "A266e19e9-8bf5-4f3a-ac2a-e6333a29c68d",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af706e6bf-4bb9-4b63-b268-d1c7b81ea8cf": {
                    "Id": "Af706e6bf-4bb9-4b63-b268-d1c7b81ea8cf",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4f0d898d-5d88-4f61-ad0e-1eb43cdf64c5": {
                    "Id": "A4f0d898d-5d88-4f61-ad0e-1eb43cdf64c5",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2014-01-01_2014-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aac506f2b-6520-47ae-8e3c-dbd0fc460fbc": {
                    "Id": "Aac506f2b-6520-47ae-8e3c-dbd0fc460fbc",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0c226c59-d701-48a3-a991-abbd32b06c44": {
                    "Id": "A0c226c59-d701-48a3-a991-abbd32b06c44",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1ba4a4b4-7e31-4df3-bfd9-20b3904ab673": {
                    "Id": "A1ba4a4b4-7e31-4df3-bfd9-20b3904ab673",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_TreasurySharesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac3deaccd-f015-4566-ae40-f175dd6cbaf3": {
                    "Id": "Ac3deaccd-f015-4566-ae40-f175dd6cbaf3",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_SharePremiumMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4c2ea455-e3fe-47cd-89f4-e52faac66204": {
                    "Id": "A4c2ea455-e3fe-47cd-89f4-e52faac66204",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_AportacionesFuturosAumentosCapitalMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab25038ba-4a07-458b-9f36-c62b260839cd": {
                    "Id": "Ab25038ba-4a07-458b-9f36-c62b260839cd",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_OtroCapitalContribuidoMiembro",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae248dde2-7779-4ea5-9ef8-6e53180eeff8": {
                    "Id": "Ae248dde2-7779-4ea5-9ef8-6e53180eeff8",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09ab9a26-f52c-4274-8466-6366f19fd109": {
                    "Id": "A09ab9a26-f52c-4274-8466-6366f19fd109",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A87096c8c-7615-493f-be96-f62c49ecfc84": {
                    "Id": "A87096c8c-7615-493f-be96-f62c49ecfc84",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs-cp_1_AccumulatedOtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9e6627c3-00c5-40f6-b8ba-70ff23bcc78f": {
                    "Id": "A9e6627c3-00c5-40f6-b8ba-70ff23bcc78f",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aee208649-a045-4fcb-97d5-918a85ffa2f9": {
                    "Id": "Aee208649-a045-4fcb-97d5-918a85ffa2f9",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_ifrs_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acd73a6c1-332b-4101-9800-5db77f0fa280": {
                    "Id": "Acd73a6c1-332b-4101-9800-5db77f0fa280",
                    "IdConcepto": "ifrs_ChangesInEquity",
                    "IdContextoPlantilla": "P_Duracion_2013-01-01_2013-09-30_mx-ifrs-ics_UtilidadesPerdidasAcumuladasMiembro",
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