 module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news/roles/investment_funds_view
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_investment_funds_view implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_investment_funds_view
         */
        constructor() {

            this.ListadoDeFormulas = {
                'Requeridos__rel_news_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_Ticker',
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
                'Requeridos__rel_news_Date': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_Date',
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
                'Requeridos__rel_news_BusinessName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_BusinessName',
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

                'Requeridos__rel_news_Place': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_Place',
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
                'Requeridos__rel_news_Subject': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_Subject',
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
  "Ctx2017": {
    "Id": "Ctx2017",
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
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "rel_news_Ticker_46bb3c6e-6648-415d-a390-790f2abbc73c": {
    "Id": "rel_news_Ticker_46bb3c6e-6648-415d-a390-790f2abbc73c",
    "IdConcepto": "rel_news_Ticker",
    "IdContextoPlantilla": "Ctx2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_ParticipantShortName_bf041438-4a5c-44d0-afd2-fd59ed9731b2": {
    "Id": "rel_news_ParticipantShortName_bf041438-4a5c-44d0-afd2-fd59ed9731b2",
    "IdConcepto": "rel_news_ParticipantShortName",
    "IdContextoPlantilla": "Ctx2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_Date_ef2e2235-04ab-4758-bb75-56e38bb5d0a6": {
    "Id": "rel_news_Date_ef2e2235-04ab-4758-bb75-56e38bb5d0a6",
    "IdConcepto": "rel_news_Date",
    "IdContextoPlantilla": "Ctx2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_BusinessName_fc83813e-6b9a-4547-bd87-1c2b593fa580": {
    "Id": "rel_news_BusinessName_fc83813e-6b9a-4547-bd87-1c2b593fa580",
    "IdConcepto": "rel_news_BusinessName",
    "IdContextoPlantilla": "Ctx2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_Place_90dec5fa-2cb2-4fea-a77a-bb81e1c5f91f": {
    "Id": "rel_news_Place_90dec5fa-2cb2-4fea-a77a-bb81e1c5f91f",
    "IdConcepto": "rel_news_Place",
    "IdContextoPlantilla": "Ctx2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_Subject_b5cfc929-eb3a-4828-8b95-890d524de10b": {
    "Id": "rel_news_Subject_b5cfc929-eb3a-4828-8b95-890d524de10b",
    "IdConcepto": "rel_news_Subject",
    "IdContextoPlantilla": "Ctx2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_ForeignMarket_d0a35792-b9d2-4794-9a59-c6ab359e190a": {
    "Id": "rel_news_ForeignMarket_d0a35792-b9d2-4794-9a59-c6ab359e190a",
    "IdConcepto": "rel_news_ForeignMarket",
    "IdContextoPlantilla": "Ctx2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_AttachedDocumentPdf_2e4d8f9c-9d3a-4e15-86a1-e3c91539b2c2": {
    "Id": "rel_news_AttachedDocumentPdf_2e4d8f9c-9d3a-4e15-86a1-e3c91539b2c2",
    "IdConcepto": "rel_news_AttachedDocumentPdf",
    "IdContextoPlantilla": "Ctx2017",
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