///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news/roles/issuer_view
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_issuer_view implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_issuer_view
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Requeridos_Emisoras_rel_news_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Emisoras_rel_news_Ticker',
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
                'Requeridos_Emisoras_rel_news_Date': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Emisoras_rel_news_Date',
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
                'Requeridos_Emisoras_rel_news_BusinessName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Emisoras_rel_news_BusinessName',
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
                'Requeridos_Emisoras_rel_news_Place': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Emisoras_rel_news_Place',
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
                'Requeridos_Emisoras_rel_news_Subject': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Emisoras_rel_news_Subject',
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
                'Requeridos_Emisoras_rel_news_RelevantEventContent': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Emisoras_rel_news_RelevantEventContent',
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
                )
};

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
              "Context_Instant_ChangesInTheCorporateStructureOfTheIssuerIssuerEventMember": {
                "Id": "Context_Instant_ChangesInTheCorporateStructureOfTheIssuerIssuerEventMember",
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
                "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"rel_news:RelevantEventTypesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">rel_news:ChangesInTheCorporateStructureOfTheIssuerIssuerEventMember</xbrldi:explicitMember></xbrli:scenario>",
                "ValoresDimension": [
                  {
                    "Explicita": true,
                    "IdDimension": "rel_news_RelevantEventTypesAxis",
                    "IdItemMiembro": "rel_news_ChangesInTheCorporateStructureOfTheIssuerIssuerEventMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news:RelevantEventTypesAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news:ChangesInTheCorporateStructureOfTheIssuerIssuerEventMember",
                    "ElementoMiembroTipificado": null
                  }
                ]
              }
            };

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
                  "rel_news_Ticker_8fe03902-b806-4f57-8c09-4cdb0d860a62": {
                    "Id": "rel_news_Ticker_8fe03902-b806-4f57-8c09-4cdb0d860a62",
                    "IdConcepto": "rel_news_Ticker",
                    "IdContextoPlantilla": "ctx_2017",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#nombreEntidad"
                  },
                  "rel_news_Date_a3090a61-f8c1-4fb2-852d-1a7adc4cc1bf": {
                    "Id": "rel_news_Date_a3090a61-f8c1-4fb2-852d-1a7adc4cc1bf",
                    "IdConcepto": "rel_news_Date",
                    "IdContextoPlantilla": "ctx_2017",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                     "Valor": "#fecha_2017_12_31"
                  },
                  "rel_news_BusinessName_fe78dab6-a168-4045-b491-bd51fc54b021": {
                    "Id": "rel_news_BusinessName_fe78dab6-a168-4045-b491-bd51fc54b021",
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
                  "rel_news_Place_88b10fc3-4a20-4b32-8b2f-6f7a4e4ba750": {
                    "Id": "rel_news_Place_88b10fc3-4a20-4b32-8b2f-6f7a4e4ba750",
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
                  "rel_news_Subject_7872f8ff-7b6d-4345-8511-ae249c217901": {
                    "Id": "rel_news_Subject_7872f8ff-7b6d-4345-8511-ae249c217901",
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
                  "rel_news_ForeignMarket_c504bbbe-a929-413c-92f9-73121fe37fbf": {
                    "Id": "rel_news_ForeignMarket_c504bbbe-a929-413c-92f9-73121fe37fbf",
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
                  "rel_news_AttachedDocumentPdf_dfc417fc-4376-48fe-a62e-b36a8c0a488c": {
                    "Id": "rel_news_AttachedDocumentPdf_dfc417fc-4376-48fe-a62e-b36a8c0a488c",
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