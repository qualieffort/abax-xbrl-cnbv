///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news/roles/rating_agency_view
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_rating_agency_view implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_roles_rating_agency_view
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Requeridos_Calificadoras_rel_news_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Calificadoras_rel_news_Ticker',
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

                'Requeridos_Calificadoras_rel_news_Date': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Calificadoras_rel_news_Date',
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
                'Requeridos_Calificadoras_rel_news_BusinessName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Calificadoras_rel_news_BusinessName',
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
                'Requeridos_Calificadoras_rel_news_Place': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Calificadoras_rel_news_Place',
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
                'Requeridos_Calificadoras_rel_news_Subject': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Calificadoras_rel_news_Subject',
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
                'Requeridos_Calificadoras_rel_news_RelevantEventContent': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Calificadoras_rel_news_RelevantEventContent',
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
              }
            };

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
          "rel_news_Ticker_03a4d44f-9d71-47c0-8411-92ca560e31b8": {
            "Id": "rel_news_Ticker_03a4d44f-9d71-47c0-8411-92ca560e31b8",
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
          "rel_news_Serie_cc6641f1-c35e-42db-a60e-1eeedd7b38cf": {
            "Id": "rel_news_Serie_cc6641f1-c35e-42db-a60e-1eeedd7b38cf",
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
          "rel_news_InstrumetType_2cab43db-4cd3-4530-855a-36345022ee20": {
            "Id": "rel_news_InstrumetType_2cab43db-4cd3-4530-855a-36345022ee20",
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
          "rel_news_ParticipantShortName_6714e1ca-42d7-426c-a0d6-6d0f0c75ed29": {
            "Id": "rel_news_ParticipantShortName_6714e1ca-42d7-426c-a0d6-6d0f0c75ed29",
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
          "rel_news_Date_10275f61-3027-4b43-8530-c31fac4eccda": {
            "Id": "rel_news_Date_10275f61-3027-4b43-8530-c31fac4eccda",
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
          "rel_news_BusinessName_42c3bd3b-b0b4-43b5-9728-b5e50a0072ad": {
            "Id": "rel_news_BusinessName_42c3bd3b-b0b4-43b5-9728-b5e50a0072ad",
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
          "rel_news_Place_3681d99b-9c07-4825-9836-388fd56c37b0": {
            "Id": "rel_news_Place_3681d99b-9c07-4825-9836-388fd56c37b0",
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
          "rel_news_Subject_5f30c2be-670d-400d-b147-0a17fd795838": {
            "Id": "rel_news_Subject_5f30c2be-670d-400d-b147-0a17fd795838",
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
          "rel_news_ForeignMarket_bc6fed41-668f-4d96-999e-e9af71e1ab43": {
            "Id": "rel_news_ForeignMarket_bc6fed41-668f-4d96-999e-e9af71e1ab43",
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
          "rel_news_AttachedDocumentPdf_09bdaf85-989d-4014-ad3d-748b061e8999": {
            "Id": "rel_news_AttachedDocumentPdf_09bdaf85-989d-4014-ad3d-748b061e8999",
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