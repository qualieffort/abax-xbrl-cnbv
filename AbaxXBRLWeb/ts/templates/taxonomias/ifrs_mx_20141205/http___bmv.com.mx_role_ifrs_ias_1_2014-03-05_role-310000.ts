///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/ias_1_2014-03-05_role-310000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_ias_1_2014_03_05_role_310000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_ias_1_2014_03_05_role_310000
         */
        constructor() {
            this.ListadoDeFormulas = {
                //Solo si consolida, pero si no consolida, la participación no controladora siempre es 0
                //Utilidad (pérdida) neta = Utilidad (pérdida) atribuible a la participación controladora + Utilidad (pérdida) atribuible a la participación no controladora
                //Junio 2015
                'formula_310000_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula_310000_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(consolidado == "false") or (bignumber(variable1) == bignumber(variable2) + bignumber(variable3))',
                        MensajeExito: 'En caso de que el reporte sea Consolidado, el valor de {variable1} es igual al valor de Utilidad (pérdida) atribuible a la participación controladora + Utilidad (pérdida) atribuible a la participación no controladora.',
                        MensajeError: 'En caso de que el reporte sea Consolidado, El valor de {variable1} debe ser igual al valor de Utilidad (pérdida) atribuible a la participación controladora + Utilidad (pérdida) atribuible a la participación no controladora.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_ProfitLoss',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                FiltrosDimension:
                                [
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
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_ProfitLossAttributableToOwnersOfParent',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs-full_ProfitLossAttributableToNoncontrollingInterests',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'consolidado': new model.DefinicionVariableFormula().deserialize({
                                Id: 'consolidado',
                                IdConcepto: 'ifrs_mx-cor_20141205_Consolidado',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ExcepcionPeriodo: true
                            })
                        }
                    }), 'formulaTotalUtilidadPerdidaDiluida': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formulaTotalUtilidadPerdidaDiluida',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abs(bignumber(variable1)) > 0',
                        MensajeExito: 'El hecho reportado para el {variable1} tiene un valor diferente de 0.',
                        MensajeError: 'El hecho reportado para el {variable1} debería tener un valor diferente de 0.',
                        VariablesCoincidenPeriodo: true,
                        EsAdvertencia: true,
                        DefinicionVariables: {
                            
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DilutedEarningsLossPerShare',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }), 'formulaTotalUtilidadPerdidaBasica': new model.DefinicionFormula().deserialize(
                    {
                            Id: 'formulaTotalUtilidadPerdidaBasica',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abs(bignumber(variable1)) > 0',
                        MensajeExito: 'El hecho reportado para el {variable1} tiene un valor diferente de 0.',
                        MensajeError: 'El hecho reportado para el {variable1} debería tener un valor diferente de 0.',
                        VariablesCoincidenPeriodo: true,
                        EsAdvertencia: true,
                        DefinicionVariables: {

                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_BasicEarningsLossPerShare',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    })
            };

            this.ContextosPlantillaPorId = {
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
  "info_12_meses_al_cierre_trimestre": {
    "Id": "info_12_meses_al_cierre_trimestre",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2014_10_01",
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
  "trimestre_ejercicio_anterior": {
    "Id": "trimestre_ejercicio_anterior",
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
  "info_12_meses_al_cierre_trim_eje_anterior": {
    "Id": "info_12_meses_al_cierre_trim_eje_anterior",
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
  "acumulado_ejercicio_actual": {
    "Id": "acumulado_ejercicio_actual",
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
  "acumulado_ejercicio_anterior": {
    "Id": "acumulado_ejercicio_anterior",
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
  "Context_Duration_ReserveForEqualisationMember": {
    "Id": "Context_Duration_ReserveForEqualisationMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveForEqualisationMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveForEqualisationMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveForEqualisationMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfDiscretionaryParticipationFeaturesMember": {
    "Id": "Context_Duration_ReserveOfDiscretionaryParticipationFeaturesMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfDiscretionaryParticipationFeaturesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfDiscretionaryParticipationFeaturesMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfDiscretionaryParticipationFeaturesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_OtrosResultadosIntegralesMiembro": {
    "Id": "Context_Duration_OtrosResultadosIntegralesMiembro",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:OtrosResultadosIntegralesMiembro</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs_mx-cor_20141205_OtrosResultadosIntegralesMiembro",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrosResultadosIntegralesMiembro",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_OtherReservesMember": {
    "Id": "Context_Duration_OtherReservesMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:OtherReservesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_OtherReservesMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_EquityAttributableToOwnersOfParentMember": {
    "Id": "Context_Duration_EquityAttributableToOwnersOfParentMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_EquityAttributableToOwnersOfParentMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_NoncontrollingInterestsMember": {
    "Id": "Context_Duration_NoncontrollingInterestsMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:NoncontrollingInterestsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_NoncontrollingInterestsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_IssuedCapitalMember_RestatedMember": {
    "Id": "Context_Duration_IssuedCapitalMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:IssuedCapitalMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_IssuedCapitalMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_SharePremiumMember_RestatedMember": {
    "Id": "Context_Duration_SharePremiumMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:SharePremiumMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_SharePremiumMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:SharePremiumMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_TreasurySharesMember_RestatedMember": {
    "Id": "Context_Duration_TreasurySharesMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:TreasurySharesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_TreasurySharesMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:TreasurySharesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_RetainedEarningsMember_RestatedMember": {
    "Id": "Context_Duration_RetainedEarningsMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_RetainedEarningsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_RevaluationSurplusMember_RestatedMember": {
    "Id": "Context_Duration_RevaluationSurplusMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RevaluationSurplusMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_RevaluationSurplusMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RevaluationSurplusMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfExchangeDifferencesOnTranslationMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfExchangeDifferencesOnTranslationMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfExchangeDifferencesOnTranslationMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfExchangeDifferencesOnTranslationMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfExchangeDifferencesOnTranslationMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfCashFlowHedgesMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfCashFlowHedgesMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfCashFlowHedgesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfCashFlowHedgesMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfCashFlowHedgesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfChangeInValueOfTimeValueOfOptionsMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfChangeInValueOfTimeValueOfOptionsMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfChangeInValueOfTimeValueOfOptionsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfChangeInValueOfTimeValueOfOptionsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfChangeInValueOfTimeValueOfOptionsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfSharebasedPaymentsMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfSharebasedPaymentsMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfSharebasedPaymentsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfSharebasedPaymentsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfSharebasedPaymentsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfRemeasurementsOfDefinedBenefitPlansMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfRemeasurementsOfDefinedBenefitPlansMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfRemeasurementsOfDefinedBenefitPlansMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfRemeasurementsOfDefinedBenefitPlansMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfRemeasurementsOfDefinedBenefitPlansMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember_RestatedMember": {
    "Id": "Context_Duration_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember_RestatedMember": {
    "Id": "Context_Duration_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveForCatastropheMember_RestatedMember": {
    "Id": "Context_Duration_ReserveForCatastropheMember_RestatedMember",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveForCatastropheMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveForCatastropheMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveForCatastropheMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_IssuedCapitalMember": {
    "Id": "Context_Duration_IssuedCapitalMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:IssuedCapitalMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_IssuedCapitalMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_SharePremiumMember": {
    "Id": "Context_Duration_SharePremiumMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:SharePremiumMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_SharePremiumMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:SharePremiumMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_TreasurySharesMember": {
    "Id": "Context_Duration_TreasurySharesMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:TreasurySharesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_TreasurySharesMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:TreasurySharesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_RetainedEarningsMember": {
    "Id": "Context_Duration_RetainedEarningsMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_RetainedEarningsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_RevaluationSurplusMember": {
    "Id": "Context_Duration_RevaluationSurplusMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RevaluationSurplusMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_RevaluationSurplusMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RevaluationSurplusMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfExchangeDifferencesOnTranslationMember": {
    "Id": "Context_Duration_ReserveOfExchangeDifferencesOnTranslationMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfExchangeDifferencesOnTranslationMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfExchangeDifferencesOnTranslationMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfExchangeDifferencesOnTranslationMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfCashFlowHedgesMember": {
    "Id": "Context_Duration_ReserveOfCashFlowHedgesMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfCashFlowHedgesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfCashFlowHedgesMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfCashFlowHedgesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember": {
    "Id": "Context_Duration_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfChangeInValueOfTimeValueOfOptionsMember": {
    "Id": "Context_Duration_ReserveOfChangeInValueOfTimeValueOfOptionsMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfChangeInValueOfTimeValueOfOptionsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfChangeInValueOfTimeValueOfOptionsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfChangeInValueOfTimeValueOfOptionsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember": {
    "Id": "Context_Duration_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember": {
    "Id": "Context_Duration_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember": {
    "Id": "Context_Duration_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfSharebasedPaymentsMember": {
    "Id": "Context_Duration_ReserveOfSharebasedPaymentsMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfSharebasedPaymentsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfSharebasedPaymentsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfSharebasedPaymentsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfRemeasurementsOfDefinedBenefitPlansMember": {
    "Id": "Context_Duration_ReserveOfRemeasurementsOfDefinedBenefitPlansMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfRemeasurementsOfDefinedBenefitPlansMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfRemeasurementsOfDefinedBenefitPlansMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfRemeasurementsOfDefinedBenefitPlansMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember": {
    "Id": "Context_Duration_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember": {
    "Id": "Context_Duration_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember": {
    "Id": "Context_Duration_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveForCatastropheMember": {
    "Id": "Context_Duration_ReserveForCatastropheMember",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveForCatastropheMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveForCatastropheMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveForCatastropheMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveForEqualisationMember_2": {
    "Id": "Context_Duration_ReserveForEqualisationMember_2",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveForEqualisationMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveForEqualisationMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveForEqualisationMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_ReserveOfDiscretionaryParticipationFeaturesMember_2": {
    "Id": "Context_Duration_ReserveOfDiscretionaryParticipationFeaturesMember_2",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:ReserveOfDiscretionaryParticipationFeaturesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_ReserveOfDiscretionaryParticipationFeaturesMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ReserveOfDiscretionaryParticipationFeaturesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_OtrosResultadosIntegralesMiembro_2": {
    "Id": "Context_Duration_OtrosResultadosIntegralesMiembro_2",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:OtrosResultadosIntegralesMiembro</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs_mx-cor_20141205_OtrosResultadosIntegralesMiembro",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrosResultadosIntegralesMiembro",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_OtherReservesMember_2": {
    "Id": "Context_Duration_OtherReservesMember_2",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:OtherReservesMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_OtherReservesMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_EquityAttributableToOwnersOfParentMember_2": {
    "Id": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_EquityAttributableToOwnersOfParentMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
        "ElementoMiembroTipificado": null
      }
    ]
  },
  "Context_Duration_NoncontrollingInterestsMember_2": {
    "Id": "Context_Duration_NoncontrollingInterestsMember_2",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:NoncontrollingInterestsMember</xbrldi:explicitMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
        "IdItemMiembro": "ifrs-full_NoncontrollingInterestsMember",
        "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
        "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember",
        "ElementoMiembroTipificado": null
      }
    ]
  }
};

            this.UnidadesPlantillaPorId = {
  "Peso_Mx": {
    "Id": "Peso_Mx",
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
  "MXN_SHARES": {
    "Id": "MXN_SHARES",
    "Tipo": 2,
    "MedidasDenominador": [
      {
        "Nombre": "#medida_shares",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
      }
    ],
    "MedidasNumerador": [
      {
        "Nombre": "#medida_MXN",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "Medidas": []
  }
};
            
            this.HechosPlantillaPorId = {
  "Ad1c06620-9daf-4154-845f-b09e5812adc3": {
    "Id": "Ad1c06620-9daf-4154-845f-b09e5812adc3",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A82d1a6e3-405f-4bc5-914f-4f1e5bdf8fa7": {
    "Id": "A82d1a6e3-405f-4bc5-914f-4f1e5bdf8fa7",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A96b3fa73-9c8d-440c-b1f4-5c5156a2634d": {
    "Id": "A96b3fa73-9c8d-440c-b1f4-5c5156a2634d",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7e9ee5e9-7189-4093-b913-098fb862bc58": {
    "Id": "A7e9ee5e9-7189-4093-b913-098fb862bc58",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aaabc1338-51eb-49e8-a292-f172c31aa495": {
    "Id": "Aaabc1338-51eb-49e8-a292-f172c31aa495",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A305195b7-19be-469e-a0df-9834897af900": {
    "Id": "A305195b7-19be-469e-a0df-9834897af900",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3e083f9f-fc1c-4908-8781-98d175c98115": {
    "Id": "A3e083f9f-fc1c-4908-8781-98d175c98115",
    "IdConcepto": "ifrs-full_CostOfSales",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad18efaa3-25de-4bd5-a591-019e1e3b55ef": {
    "Id": "Ad18efaa3-25de-4bd5-a591-019e1e3b55ef",
    "IdConcepto": "ifrs-full_CostOfSales",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A63b62f32-0ef4-409a-8b36-5bb863dbbba2": {
    "Id": "A63b62f32-0ef4-409a-8b36-5bb863dbbba2",
    "IdConcepto": "ifrs-full_CostOfSales",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A73f73d50-8e73-4891-be5d-8b7e8b429b17": {
    "Id": "A73f73d50-8e73-4891-be5d-8b7e8b429b17",
    "IdConcepto": "ifrs-full_CostOfSales",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af3274e0b-25ad-4a3b-8aab-ea278b300fcb": {
    "Id": "Af3274e0b-25ad-4a3b-8aab-ea278b300fcb",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A89346158-370f-4c02-9441-1ff3941a613b": {
    "Id": "A89346158-370f-4c02-9441-1ff3941a613b",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A99e04cbb-4650-4941-b11c-8c02ab18801f": {
    "Id": "A99e04cbb-4650-4941-b11c-8c02ab18801f",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9e408f9e-5c89-4668-8f10-547ec7c33b6b": {
    "Id": "A9e408f9e-5c89-4668-8f10-547ec7c33b6b",
    "IdConcepto": "ifrs-full_GrossProfit",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae1220f87-32d3-4f38-80bf-cc5114a49b23": {
    "Id": "Ae1220f87-32d3-4f38-80bf-cc5114a49b23",
    "IdConcepto": "ifrs-full_DistributionCosts",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A09766437-b3c0-4b38-ba48-fbd48323ba77": {
    "Id": "A09766437-b3c0-4b38-ba48-fbd48323ba77",
    "IdConcepto": "ifrs-full_DistributionCosts",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9ea98c8d-e0a1-4791-a61b-ad44adcb730d": {
    "Id": "A9ea98c8d-e0a1-4791-a61b-ad44adcb730d",
    "IdConcepto": "ifrs-full_DistributionCosts",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad37b1fb4-354b-442c-b985-a51ad2a68b26": {
    "Id": "Ad37b1fb4-354b-442c-b985-a51ad2a68b26",
    "IdConcepto": "ifrs-full_DistributionCosts",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A04890b13-85d4-4f4a-a43d-2425c5ef5848": {
    "Id": "A04890b13-85d4-4f4a-a43d-2425c5ef5848",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aff9f1842-beba-4bab-8971-2d702814c258": {
    "Id": "Aff9f1842-beba-4bab-8971-2d702814c258",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7faf4ac7-b839-4369-bba6-49c879a2be28": {
    "Id": "A7faf4ac7-b839-4369-bba6-49c879a2be28",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1b988c88-908c-4185-8cab-151853786525": {
    "Id": "A1b988c88-908c-4185-8cab-151853786525",
    "IdConcepto": "ifrs-full_AdministrativeExpense",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A84a2cb9a-8511-414d-8715-3978b45811aa": {
    "Id": "A84a2cb9a-8511-414d-8715-3978b45811aa",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A517ec897-a1c2-45be-8630-f4ccaaa39986": {
    "Id": "A517ec897-a1c2-45be-8630-f4ccaaa39986",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5dab528e-04ad-458d-8a73-eee5faa37614": {
    "Id": "A5dab528e-04ad-458d-8a73-eee5faa37614",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A25f90d89-6848-4761-a6cb-983fcff7228b": {
    "Id": "A25f90d89-6848-4761-a6cb-983fcff7228b",
    "IdConcepto": "ifrs-full_OtherIncome",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9eaccbd1-046c-45cb-9815-f85e71e166dd": {
    "Id": "A9eaccbd1-046c-45cb-9815-f85e71e166dd",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3b37dbf0-0874-4b4c-93f7-383e4a506edf": {
    "Id": "A3b37dbf0-0874-4b4c-93f7-383e4a506edf",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A67975df3-96fe-4fcb-83c6-d06ac1ea6a68": {
    "Id": "A67975df3-96fe-4fcb-83c6-d06ac1ea6a68",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acff18ef8-01e7-4fb1-9606-1fc67d337878": {
    "Id": "Acff18ef8-01e7-4fb1-9606-1fc67d337878",
    "IdConcepto": "ifrs-full_OtherExpenseByFunction",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7100144c-f15f-464e-a65c-ae7e6cd61a9e": {
    "Id": "A7100144c-f15f-464e-a65c-ae7e6cd61a9e",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A101c90a5-1429-4367-b5db-6f42bf8d55ee": {
    "Id": "A101c90a5-1429-4367-b5db-6f42bf8d55ee",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A91e0a202-80c0-49b7-ac2c-075d66c67064": {
    "Id": "A91e0a202-80c0-49b7-ac2c-075d66c67064",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af4d07cbf-7006-460d-83ca-f8eec771e215": {
    "Id": "Af4d07cbf-7006-460d-83ca-f8eec771e215",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad1c9efbc-8628-4501-89ce-e2b8c095f11b": {
    "Id": "Ad1c9efbc-8628-4501-89ce-e2b8c095f11b",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab230a58b-77c0-40ab-b39c-6af19995fb6f": {
    "Id": "Ab230a58b-77c0-40ab-b39c-6af19995fb6f",
    "IdConcepto": "ifrs-full_ProfitLossFromOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5c926dd1-46f5-441c-b99c-e2f5b6729a39": {
    "Id": "A5c926dd1-46f5-441c-b99c-e2f5b6729a39",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A98cdee9e-1e01-466f-bd27-f34efeec965e": {
    "Id": "A98cdee9e-1e01-466f-bd27-f34efeec965e",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adf99c0e2-d0e3-46c8-adf6-9c4a5e638108": {
    "Id": "Adf99c0e2-d0e3-46c8-adf6-9c4a5e638108",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A62e4e6e1-d3c2-4950-9827-b497434406bb": {
    "Id": "A62e4e6e1-d3c2-4950-9827-b497434406bb",
    "IdConcepto": "ifrs-full_FinanceIncome",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6f63e719-fc0a-4813-800e-b9e9c0dec363": {
    "Id": "A6f63e719-fc0a-4813-800e-b9e9c0dec363",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A01af474c-8d2b-4214-99c2-1df5de9f9854": {
    "Id": "A01af474c-8d2b-4214-99c2-1df5de9f9854",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad80f07dc-f142-4c51-9aeb-973262cd793f": {
    "Id": "Ad80f07dc-f142-4c51-9aeb-973262cd793f",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8f9400ec-da2e-4a8f-9599-65fe27d779c8": {
    "Id": "A8f9400ec-da2e-4a8f-9599-65fe27d779c8",
    "IdConcepto": "ifrs-full_FinanceCosts",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A62016642-82b9-4591-a56e-c018e6ac4d7a": {
    "Id": "A62016642-82b9-4591-a56e-c018e6ac4d7a",
    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5858af3b-ca4e-4bac-b18d-cc20a6d5ce39": {
    "Id": "A5858af3b-ca4e-4bac-b18d-cc20a6d5ce39",
    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A249df818-8971-4e14-8052-4b1c15eaddf9": {
    "Id": "A249df818-8971-4e14-8052-4b1c15eaddf9",
    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A251e373e-b309-4b41-8685-4d0496f928be": {
    "Id": "A251e373e-b309-4b41-8685-4d0496f928be",
    "IdConcepto": "ifrs-full_ShareOfProfitLossOfAssociatesAndJointVenturesAccountedForUsingEquityMethod",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9f748ea6-7074-44a5-924e-f588fb29feea": {
    "Id": "A9f748ea6-7074-44a5-924e-f588fb29feea",
    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab29b1ad1-c5e8-4a99-a1bc-1f51d1ce25c9": {
    "Id": "Ab29b1ad1-c5e8-4a99-a1bc-1f51d1ce25c9",
    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab89d84db-7591-4b50-9b37-e74f80c3e799": {
    "Id": "Ab89d84db-7591-4b50-9b37-e74f80c3e799",
    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A51aa308b-a5cc-468c-b03d-b53c49b5b767": {
    "Id": "A51aa308b-a5cc-468c-b03d-b53c49b5b767",
    "IdConcepto": "ifrs-full_ProfitLossBeforeTax",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac3ae128c-319a-46d1-9072-d779bf95b5d0": {
    "Id": "Ac3ae128c-319a-46d1-9072-d779bf95b5d0",
    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5e34e876-2155-41e1-a5a2-c981ac350340": {
    "Id": "A5e34e876-2155-41e1-a5a2-c981ac350340",
    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5a8fea75-c925-4eb0-8a78-428bd367af9d": {
    "Id": "A5a8fea75-c925-4eb0-8a78-428bd367af9d",
    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9516c522-f0f8-4580-bf94-cd69e43521bb": {
    "Id": "A9516c522-f0f8-4580-bf94-cd69e43521bb",
    "IdConcepto": "ifrs-full_IncomeTaxExpenseContinuingOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A16eaacf4-4143-4d21-affa-882fcbf80bf9": {
    "Id": "A16eaacf4-4143-4d21-affa-882fcbf80bf9",
    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A25e60e13-8c26-4605-ab5d-db45fc895b50": {
    "Id": "A25e60e13-8c26-4605-ab5d-db45fc895b50",
    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae3ae1171-1542-4191-9cdd-70307986d477": {
    "Id": "Ae3ae1171-1542-4191-9cdd-70307986d477",
    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0d3845b1-5a61-4121-8b22-183cc958ed47": {
    "Id": "A0d3845b1-5a61-4121-8b22-183cc958ed47",
    "IdConcepto": "ifrs-full_ProfitLossFromContinuingOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af83e2525-82ce-4e20-ae95-08949eef8fa1": {
    "Id": "Af83e2525-82ce-4e20-ae95-08949eef8fa1",
    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A000b313c-6c9f-434e-aa9e-8291cca3654d": {
    "Id": "A000b313c-6c9f-434e-aa9e-8291cca3654d",
    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A573f0618-a080-49b0-8e0d-ee1f8c96751c": {
    "Id": "A573f0618-a080-49b0-8e0d-ee1f8c96751c",
    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5ffa8eb2-ce1c-40b5-b352-3102b98ef75f": {
    "Id": "A5ffa8eb2-ce1c-40b5-b352-3102b98ef75f",
    "IdConcepto": "ifrs-full_ProfitLossFromDiscontinuedOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A465e1b09-486e-4c92-ab2e-a05fc04d21b1": {
    "Id": "A465e1b09-486e-4c92-ab2e-a05fc04d21b1",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A975f4710-afcd-4f8c-acd6-18563319966b": {
    "Id": "A975f4710-afcd-4f8c-acd6-18563319966b",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveForEqualisationMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9683c9aa-1bce-4f22-9475-ac8318b4b4b0": {
    "Id": "A9683c9aa-1bce-4f22-9475-ac8318b4b4b0",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfDiscretionaryParticipationFeaturesMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7435516d-e403-4437-8576-588d9e8cae14": {
    "Id": "A7435516d-e403-4437-8576-588d9e8cae14",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_OtrosResultadosIntegralesMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A646ef23a-733e-4033-9cc4-c2e12f65cecc": {
    "Id": "A646ef23a-733e-4033-9cc4-c2e12f65cecc",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A18f8718e-3f43-4372-98f9-29fb8647604c": {
    "Id": "A18f8718e-3f43-4372-98f9-29fb8647604c",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A836a6cc6-c639-4ee9-99d4-3e1121960417": {
    "Id": "A836a6cc6-c639-4ee9-99d4-3e1121960417",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab40446e1-6361-4a3f-a917-e4008a045c5f": {
    "Id": "Ab40446e1-6361-4a3f-a917-e4008a045c5f",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A30c9f827-1764-48a2-b97c-a728f2ce79c6": {
    "Id": "A30c9f827-1764-48a2-b97c-a728f2ce79c6",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_SharePremiumMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7524d1c9-de16-4c2f-b2fc-738b831541d3": {
    "Id": "A7524d1c9-de16-4c2f-b2fc-738b831541d3",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_TreasurySharesMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6d19ba12-ee1c-496d-9f05-92978d17e859": {
    "Id": "A6d19ba12-ee1c-496d-9f05-92978d17e859",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adda2e9af-ea46-4c53-a192-7ec564da26d0": {
    "Id": "Adda2e9af-ea46-4c53-a192-7ec564da26d0",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_RevaluationSurplusMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A87425913-d0d7-4ac3-bc51-d597321359e0": {
    "Id": "A87425913-d0d7-4ac3-bc51-d597321359e0",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfExchangeDifferencesOnTranslationMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab6c0af6e-7444-4d1b-8ccf-a2501d32d5f3": {
    "Id": "Ab6c0af6e-7444-4d1b-8ccf-a2501d32d5f3",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfCashFlowHedgesMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A63858433-246a-4f51-8346-3934b2c6bd27": {
    "Id": "A63858433-246a-4f51-8346-3934b2c6bd27",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adee5d55e-5834-4fe0-9c6f-ef5e1d880623": {
    "Id": "Adee5d55e-5834-4fe0-9c6f-ef5e1d880623",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfChangeInValueOfTimeValueOfOptionsMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac85cb4e2-ed91-4e9a-af29-fcf60ada8ba4": {
    "Id": "Ac85cb4e2-ed91-4e9a-af29-fcf60ada8ba4",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4b0812ad-a0b7-4d1f-a64e-3c355640c6ec": {
    "Id": "A4b0812ad-a0b7-4d1f-a64e-3c355640c6ec",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A919d81f4-e141-4230-9a47-f02495378a34": {
    "Id": "A919d81f4-e141-4230-9a47-f02495378a34",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8519b8b6-bbfa-4e19-8d40-7b492ee162f9": {
    "Id": "A8519b8b6-bbfa-4e19-8d40-7b492ee162f9",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfSharebasedPaymentsMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aba4693fd-30b9-4c67-84b4-20d7462fb627": {
    "Id": "Aba4693fd-30b9-4c67-84b4-20d7462fb627",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfRemeasurementsOfDefinedBenefitPlansMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ada8250d4-7921-484f-b307-c566da44c136": {
    "Id": "Ada8250d4-7921-484f-b307-c566da44c136",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad86eba27-a85f-41db-9ede-fd6748fb3473": {
    "Id": "Ad86eba27-a85f-41db-9ede-fd6748fb3473",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A37dfb6dd-1054-4315-81a1-6bba972605c7": {
    "Id": "A37dfb6dd-1054-4315-81a1-6bba972605c7",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ada038c93-8dd3-4bda-b216-dab54440f5cb": {
    "Id": "Ada038c93-8dd3-4bda-b216-dab54440f5cb",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveForCatastropheMember_RestatedMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab6e4f3be-6798-4993-9754-aed7950b209a": {
    "Id": "Ab6e4f3be-6798-4993-9754-aed7950b209a",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af31cfe25-cc23-49b7-ab0c-a1cc4f39e157": {
    "Id": "Af31cfe25-cc23-49b7-ab0c-a1cc4f39e157",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A62136776-c1a5-4fef-b1ba-7537fc51a783": {
    "Id": "A62136776-c1a5-4fef-b1ba-7537fc51a783",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1f5a6736-487e-474f-a797-6f1903caff10": {
    "Id": "A1f5a6736-487e-474f-a797-6f1903caff10",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aca989e12-09a9-41bb-8743-0f2f9a743757": {
    "Id": "Aca989e12-09a9-41bb-8743-0f2f9a743757",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_SharePremiumMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae9f97284-0d76-41ec-9a58-ecae0d482e78": {
    "Id": "Ae9f97284-0d76-41ec-9a58-ecae0d482e78",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_TreasurySharesMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A954482ef-6263-40e4-ad32-669602d3f2ab": {
    "Id": "A954482ef-6263-40e4-ad32-669602d3f2ab",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A501ea61a-0b6d-476e-89c1-f610f6ce34dc": {
    "Id": "A501ea61a-0b6d-476e-89c1-f610f6ce34dc",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_RevaluationSurplusMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6d339536-1972-4129-b654-db0275338ffb": {
    "Id": "A6d339536-1972-4129-b654-db0275338ffb",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfExchangeDifferencesOnTranslationMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa84d1c87-f600-47f9-9f2f-a58846cfb913": {
    "Id": "Aa84d1c87-f600-47f9-9f2f-a58846cfb913",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfCashFlowHedgesMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afdd53964-acd3-40d9-8043-0ef828d36d4f": {
    "Id": "Afdd53964-acd3-40d9-8043-0ef828d36d4f",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1f4f8a44-3d27-4452-9842-e07129d608f7": {
    "Id": "A1f4f8a44-3d27-4452-9842-e07129d608f7",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfChangeInValueOfTimeValueOfOptionsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A43653b57-f95e-4a56-b110-453ce5c7412f": {
    "Id": "A43653b57-f95e-4a56-b110-453ce5c7412f",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af37d6d8a-ca56-49ba-b0aa-53fa89fb0120": {
    "Id": "Af37d6d8a-ca56-49ba-b0aa-53fa89fb0120",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adffb9441-39f1-4175-86a3-8293c2e8affa": {
    "Id": "Adffb9441-39f1-4175-86a3-8293c2e8affa",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6df7e481-c602-4281-9308-4f71ade3b338": {
    "Id": "A6df7e481-c602-4281-9308-4f71ade3b338",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfSharebasedPaymentsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5ae02ca8-29e1-46b1-9f86-15be0fbf63da": {
    "Id": "A5ae02ca8-29e1-46b1-9f86-15be0fbf63da",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfRemeasurementsOfDefinedBenefitPlansMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A74ce24f6-6311-4030-a9a8-eb8dd4bb6580": {
    "Id": "A74ce24f6-6311-4030-a9a8-eb8dd4bb6580",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4dcc98f6-16de-4e34-92fe-ed123c7e786a": {
    "Id": "A4dcc98f6-16de-4e34-92fe-ed123c7e786a",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab594a4d4-050d-4a74-b6b4-9ca9b4094b48": {
    "Id": "Ab594a4d4-050d-4a74-b6b4-9ca9b4094b48",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa4c20fd9-bcb5-4df5-b5f6-4eac70c3e421": {
    "Id": "Aa4c20fd9-bcb5-4df5-b5f6-4eac70c3e421",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveForCatastropheMember",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A97d74c9e-4054-4613-8ace-6cc93e339a0a": {
    "Id": "A97d74c9e-4054-4613-8ace-6cc93e339a0a",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveForEqualisationMember_2",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A43256728-fdb5-43e0-8d95-817efb382008": {
    "Id": "A43256728-fdb5-43e0-8d95-817efb382008",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_ReserveOfDiscretionaryParticipationFeaturesMember_2",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9e8ea4b0-05b5-426e-a87e-59b8b55eb672": {
    "Id": "A9e8ea4b0-05b5-426e-a87e-59b8b55eb672",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_OtrosResultadosIntegralesMiembro_2",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A34b07737-4acf-414e-9cf0-34dd7f309cf2": {
    "Id": "A34b07737-4acf-414e-9cf0-34dd7f309cf2",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5365326f-5df6-422d-8d9a-d9fb49ba1041": {
    "Id": "A5365326f-5df6-422d-8d9a-d9fb49ba1041",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae7f6f73d-3b2f-471b-bce0-5104341227b9": {
    "Id": "Ae7f6f73d-3b2f-471b-bce0-5104341227b9",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aabae587d-e04d-4229-9426-ed722436f9d5": {
    "Id": "Aabae587d-e04d-4229-9426-ed722436f9d5",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A80034792-af8c-43f4-bf7a-0076c63f7550": {
    "Id": "A80034792-af8c-43f4-bf7a-0076c63f7550",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A37bd93b5-15e3-4f3b-acae-46242b6e330e": {
    "Id": "A37bd93b5-15e3-4f3b-acae-46242b6e330e",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad40c7a09-6e9c-4bd3-b91b-1fdcb6e506cf": {
    "Id": "Ad40c7a09-6e9c-4bd3-b91b-1fdcb6e506cf",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad8b2ea05-3700-424a-93ae-e2ad71a43237": {
    "Id": "Ad8b2ea05-3700-424a-93ae-e2ad71a43237",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A75e0267e-1393-42a1-b4ad-e3e35e6ca299": {
    "Id": "A75e0267e-1393-42a1-b4ad-e3e35e6ca299",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3dde8ac4-c1ff-48f0-9f9a-718242279dc3": {
    "Id": "A3dde8ac4-c1ff-48f0-9f9a-718242279dc3",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3b97c124-3938-49fb-abd6-54d13b9bb963": {
    "Id": "A3b97c124-3938-49fb-abd6-54d13b9bb963",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToOwnersOfParent",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3dfe035a-dcf6-47bf-8981-46068a8abf4b": {
    "Id": "A3dfe035a-dcf6-47bf-8981-46068a8abf4b",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad6b934cc-7c82-4cf3-a390-6defe22bd017": {
    "Id": "Ad6b934cc-7c82-4cf3-a390-6defe22bd017",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad2d9e7ed-711e-425c-947e-202867971f84": {
    "Id": "Ad2d9e7ed-711e-425c-947e-202867971f84",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af3e79a02-36c2-4838-b308-8859a1159006": {
    "Id": "Af3e79a02-36c2-4838-b308-8859a1159006",
    "IdConcepto": "ifrs-full_ProfitLossAttributableToNoncontrollingInterests",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A301b94a6-fc67-4976-bb69-5adb8e8ef544": {
    "Id": "A301b94a6-fc67-4976-bb69-5adb8e8ef544",
    "IdConcepto": "ifrs-full_EarningsPerShareExplanatory",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A13812f78-f68c-4bb6-ab42-010eabda2115": {
    "Id": "A13812f78-f68c-4bb6-ab42-010eabda2115",
    "IdConcepto": "ifrs-full_EarningsPerShareExplanatory",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Abb87ffed-f1e5-49d1-9a17-991cfba2e2b8": {
    "Id": "Abb87ffed-f1e5-49d1-9a17-991cfba2e2b8",
    "IdConcepto": "ifrs-full_EarningsPerShareExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A92991f75-c1c3-48be-9078-36df38aaecc5": {
    "Id": "A92991f75-c1c3-48be-9078-36df38aaecc5",
    "IdConcepto": "ifrs-full_EarningsPerShareExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A45164545-921a-43f2-85e7-22538d8b8352": {
    "Id": "A45164545-921a-43f2-85e7-22538d8b8352",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae4cbc81f-d0c2-4283-8eef-67ba73c32f7a": {
    "Id": "Ae4cbc81f-d0c2-4283-8eef-67ba73c32f7a",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad1fae3b2-f817-47bf-8a5b-003fbdf1d4c6": {
    "Id": "Ad1fae3b2-f817-47bf-8a5b-003fbdf1d4c6",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A02d5a617-b18c-48cf-9c8d-17d803769e49": {
    "Id": "A02d5a617-b18c-48cf-9c8d-17d803769e49",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A73eb51b3-c685-4ab3-935b-6739a4272122": {
    "Id": "A73eb51b3-c685-4ab3-935b-6739a4272122",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adece8869-2c5b-4021-a612-0acb87ffe11c": {
    "Id": "Adece8869-2c5b-4021-a612-0acb87ffe11c",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A22f880a9-e758-4359-adc1-1f8259030f11": {
    "Id": "A22f880a9-e758-4359-adc1-1f8259030f11",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Accb28111-9c5c-4b5c-b796-64f8c3aa734c": {
    "Id": "Accb28111-9c5c-4b5c-b796-64f8c3aa734c",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A93116e2a-ed5a-4fab-aadf-f381fb445142": {
    "Id": "A93116e2a-ed5a-4fab-aadf-f381fb445142",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad6f97d45-b04c-42b4-8da3-f66f79c11ae1": {
    "Id": "Ad6f97d45-b04c-42b4-8da3-f66f79c11ae1",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Affdb573c-3301-43c1-8deb-fa51ff4ce1c2": {
    "Id": "Affdb573c-3301-43c1-8deb-fa51ff4ce1c2",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abed700ec-2e5c-4035-8244-6005efd24e5d": {
    "Id": "Abed700ec-2e5c-4035-8244-6005efd24e5d",
    "IdConcepto": "ifrs-full_BasicEarningsLossPerShare",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A12277766-ef0b-4e53-96e5-afc779bc4d00": {
    "Id": "A12277766-ef0b-4e53-96e5-afc779bc4d00",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A684ba6aa-726f-44ed-9574-e22732fa1dd2": {
    "Id": "A684ba6aa-726f-44ed-9574-e22732fa1dd2",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A94b2f563-be08-4e7e-a7f0-e4b926aade98": {
    "Id": "A94b2f563-be08-4e7e-a7f0-e4b926aade98",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae220e6f8-08f3-4cc9-9d86-d66550a988ca": {
    "Id": "Ae220e6f8-08f3-4cc9-9d86-d66550a988ca",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromContinuingOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A41fad473-1b9f-4178-975d-9ca7b42e024c": {
    "Id": "A41fad473-1b9f-4178-975d-9ca7b42e024c",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab0967183-49b3-4284-a6bf-e753cb7f4b99": {
    "Id": "Ab0967183-49b3-4284-a6bf-e753cb7f4b99",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa0e6e68a-4305-4c0a-914c-6140e214b033": {
    "Id": "Aa0e6e68a-4305-4c0a-914c-6140e214b033",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A52347434-350e-45b8-8c4b-262232d6af64": {
    "Id": "A52347434-350e-45b8-8c4b-262232d6af64",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShareFromDiscontinuedOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aef4f5138-49ba-42b9-8715-5d34f82fbb4b": {
    "Id": "Aef4f5138-49ba-42b9-8715-5d34f82fbb4b",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShare",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aea1eb012-24b3-4e20-bd97-2d973e4e15ac": {
    "Id": "Aea1eb012-24b3-4e20-bd97-2d973e4e15ac",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShare",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A06956eba-b6b7-4efa-9f03-7db341cd395d": {
    "Id": "A06956eba-b6b7-4efa-9f03-7db341cd395d",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShare",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abdd4e5c0-c606-4bcd-be89-84ae74d283e5": {
    "Id": "Abdd4e5c0-c606-4bcd-be89-84ae74d283e5",
    "IdConcepto": "ifrs-full_DilutedEarningsLossPerShare",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN_SHARES",
    "Decimales": "2",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }
};
        }
    }

}