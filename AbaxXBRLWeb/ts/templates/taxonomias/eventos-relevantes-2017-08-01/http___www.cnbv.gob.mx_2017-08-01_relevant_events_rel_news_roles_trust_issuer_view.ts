///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news/roles/trust_issuer_view
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_trust_issuer_view implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_trust_issuer_view
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Requeridos_Fiduciarios_rel_news_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_Ticker",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_Serie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_Serie',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_Serie",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_InstrumetType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_InstrumetType',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_InstrumetType",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_TrustNumber': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_TrustNumber',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_TrustNumber",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_ParticipantShortName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_ParticipantShortName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_ParticipantShortName",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_Date': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_Date',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_Date",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_BusinessName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_BusinessName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_BusinessName",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_Place': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_Place',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_Place",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_Subject': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_Subject',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_Subject",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'formula2_existe_rel_news_RelevantEventContent': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula2_existe_rel_news_RelevantEventContent',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) > 0',
                        MensajeExito: 'Debe existir al menos un hecho  del concepto "Evento relevante".',
                        MensajeError: 'Debería existir al menos un hecho del concepto concepto "Evento relevante".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'rel_news_RelevantEventContent',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: true
                            })
                        }
                    }
                ),
                'Requeridos_Fiduciarios_rel_news_RelevantEventContent': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Fiduciarios_rel_news_RelevantEventContent',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1))) > 0 and (variable1 != "INF")',
                        MensajeExito: 'El hecho {variable1} debe ser reportado.',
                        MensajeError: 'El hecho {variable1} debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "rel_news_RelevantEventContent",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                )};

            this.ContextosPlantillaPorId = {
                  "ctx_2017": {
                    "Id": "ctx_2017",
                    "Periodo": {
                      "Tipo": 1,
                      "FechaInstante": "#fecha_2017_12_31",
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
                  "Context_Instant_ChangesOfTheMembersOfTheGoverningBodiesOfTheIssuerIssuerEventMember": {
                    "Id": "Context_Instant_ChangesOfTheMembersOfTheGoverningBodiesOfTheIssuerIssuerEventMember",
                    "Periodo": {
                      "Tipo": 1,
                      "FechaInstante": "#fecha_2017_12_31",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"rel_news:RelevantEventTypesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">rel_news:ChangesOfTheMembersOfTheGoverningBodiesOfTheIssuerIssuerEventMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                      {
                        "Explicita": true,
                        "IdDimension": "rel_news_RelevantEventTypesAxis",
                        "IdItemMiembro": "rel_news_ChangesOfTheMembersOfTheGoverningBodiesOfTheIssuerIssuerEventMember",
                        "QNameDimension": "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news:RelevantEventTypesAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news:ChangesOfTheMembersOfTheGoverningBodiesOfTheIssuerIssuerEventMember",
                        "ElementoMiembroTipificado": null
                      }
                    ]
                  }
                };

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
              "rel_news_Ticker_f9c1f87a-4977-4526-bbb2-5bca9ea04a3c": {
                "Id": "rel_news_Ticker_f9c1f87a-4977-4526-bbb2-5bca9ea04a3c",
                "IdConcepto": "rel_news_Ticker",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_Serie_4c124ae2-4244-4bb8-8233-f022b89017ce": {
                "Id": "rel_news_Serie_4c124ae2-4244-4bb8-8233-f022b89017ce",
                "IdConcepto": "rel_news_Serie",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_InstrumetType_ff41b159-4524-40c5-a914-e8a6f583b46a": {
                "Id": "rel_news_InstrumetType_ff41b159-4524-40c5-a914-e8a6f583b46a",
                "IdConcepto": "rel_news_InstrumetType",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_TrustNumber_60bab7c1-1135-483c-89a1-a001c5f44dfb": {
                "Id": "rel_news_TrustNumber_60bab7c1-1135-483c-89a1-a001c5f44dfb",
                "IdConcepto": "rel_news_TrustNumber",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_ParticipantShortName_34ac38a6-b5b6-481a-b85c-71cc84cc6e75": {
                "Id": "rel_news_ParticipantShortName_34ac38a6-b5b6-481a-b85c-71cc84cc6e75",
                "IdConcepto": "rel_news_ParticipantShortName",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_Date_b051d48c-7c24-4a6c-8a98-cf6af871e4d2": {
                "Id": "rel_news_Date_b051d48c-7c24-4a6c-8a98-cf6af871e4d2",
                "IdConcepto": "rel_news_Date",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_BusinessName_89afa7ca-721a-4a3b-a001-6953d286d446": {
                "Id": "rel_news_BusinessName_89afa7ca-721a-4a3b-a001-6953d286d446",
                "IdConcepto": "rel_news_BusinessName",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_Place_61348c75-b1dc-4b40-aae0-e48d39979a12": {
                "Id": "rel_news_Place_61348c75-b1dc-4b40-aae0-e48d39979a12",
                "IdConcepto": "rel_news_Place",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_Subject_5570ff6f-5abf-4e5d-bbb3-579556fb1995": {
                "Id": "rel_news_Subject_5570ff6f-5abf-4e5d-bbb3-579556fb1995",
                "IdConcepto": "rel_news_Subject",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_ForeignMarket_bf1430b3-c2f9-4485-8769-c19c62b136d7": {
                "Id": "rel_news_ForeignMarket_bf1430b3-c2f9-4485-8769-c19c62b136d7",
                "IdConcepto": "rel_news_ForeignMarket",
                "IdContextoPlantilla": "ctx_2017",
                "Hechos": [],
                "IdUnidadPlantilla": null,
                "ValorNumerador": null,
                "ValorDenominador": null,
                "Precision": null,
                "Decimales": null,
                "Valor": "#valorDefaultNoNumerico"
              },
              "rel_news_AttachedDocumentPdf_e083a9f2-d075-499f-868e-fa19c8196a32": {
                "Id": "rel_news_AttachedDocumentPdf_e083a9f2-d075-499f-868e-fa19c8196a32",
                "IdConcepto": "rel_news_AttachedDocumentPdf",
                "IdContextoPlantilla": "ctx_2017",
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