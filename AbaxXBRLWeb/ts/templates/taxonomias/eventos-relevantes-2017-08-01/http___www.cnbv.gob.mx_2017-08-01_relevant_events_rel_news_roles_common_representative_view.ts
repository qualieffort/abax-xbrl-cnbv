///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 

module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news/roles/common_representative_view
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_common_representative_view implements abaxXBRL.model.DefinicionDeElementosPlantilla {
        
        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_common_representative_view
         */
        constructor() {
            debugger;
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
                'Requeridos__rel_news_Serie': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_Serie',
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
                'Requeridos__rel_news_InstrumetType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_InstrumetType',
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
                'Requeridos__rel_news_TrustNumber': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_TrustNumber',
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
                'Requeridos__rel_news_ParticipantShortName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos__rel_news_ParticipantShortName',
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
  "Ctxt2017": {
    "Id": "Ctxt2017",
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
  "rel_news_Ticker_4045eb89-e160-418a-9c01-767407581ca0": {
    "Id": "rel_news_Ticker_4045eb89-e160-418a-9c01-767407581ca0",
    "IdConcepto": "rel_news_Ticker",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_Serie_27ff9341-e6ae-420d-8115-f0ece27c925b": {
    "Id": "rel_news_Serie_27ff9341-e6ae-420d-8115-f0ece27c925b",
    "IdConcepto": "rel_news_Serie",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_InstrumetType_de9ddebc-29ae-4455-8d8d-f0b016c14649": {
    "Id": "rel_news_InstrumetType_de9ddebc-29ae-4455-8d8d-f0b016c14649",
    "IdConcepto": "rel_news_InstrumetType",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_TrustNumber_06b13f1c-7b2d-49d8-b737-e5ae6a0b7fff": {
    "Id": "rel_news_TrustNumber_06b13f1c-7b2d-49d8-b737-e5ae6a0b7fff",
    "IdConcepto": "rel_news_TrustNumber",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_ParticipantShortName_7656432b-71d8-4037-9c4a-62376b7a10dd": {
    "Id": "rel_news_ParticipantShortName_7656432b-71d8-4037-9c4a-62376b7a10dd",
    "IdConcepto": "rel_news_ParticipantShortName",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_Date_4a34a531-7602-4dcc-a5cc-113c29fc3dae": {
    "Id": "rel_news_Date_4a34a531-7602-4dcc-a5cc-113c29fc3dae",
    "IdConcepto": "rel_news_Date",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_BusinessName_0ad531d8-7b22-42b6-b8c7-a31fb354becd": {
    "Id": "rel_news_BusinessName_0ad531d8-7b22-42b6-b8c7-a31fb354becd",
    "IdConcepto": "rel_news_BusinessName",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_Place_8ff7b308-17fe-4bb2-980a-25dcb01d7e50": {
    "Id": "rel_news_Place_8ff7b308-17fe-4bb2-980a-25dcb01d7e50",
    "IdConcepto": "rel_news_Place",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_Subject_c4f60fd8-20f2-4bb8-85da-647724650e3e": {
    "Id": "rel_news_Subject_c4f60fd8-20f2-4bb8-85da-647724650e3e",
    "IdConcepto": "rel_news_Subject",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_ForeignMarket_4f42a0d9-810f-4e74-beb8-37beaefb9f8c": {
    "Id": "rel_news_ForeignMarket_4f42a0d9-810f-4e74-beb8-37beaefb9f8c",
    "IdConcepto": "rel_news_ForeignMarket",
    "IdContextoPlantilla": "Ctxt2017",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_news_AttachedDocumentPdf_4f8beb71-6739-48b3-86a1-989a5fbb64f8": {
    "Id": "rel_news_AttachedDocumentPdf_4f8beb71-6739-48b3-86a1-989a5fbb64f8",
    "IdConcepto": "rel_news_AttachedDocumentPdf",
    "IdContextoPlantilla": "Ctxt2017",
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