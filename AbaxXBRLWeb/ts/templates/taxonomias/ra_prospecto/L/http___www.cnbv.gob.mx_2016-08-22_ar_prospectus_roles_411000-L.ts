///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-L
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_L implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_L
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_Condicional_LeyendaSuplemento_ar_pros_SupplementLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_LeyendaSuplemento_ar_pros_SupplementLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Suplemento" el concepto "Leyenda sumplemento" es requerido, para otro tipo de reporte el concepto "Leyenda suplemento" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Suplemento" el concepto "Leyenda sumplemento" es requerido, para otro tipo de reporte el concepto "Leyenda suplemento" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SupplementLegend",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'obligatorio_condicional_mencionar_dependiendo_parcial_o_total_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'obligatorio_condicional_mencionar_dependiendo_parcial_o_total_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "Fideicomisos" and squeeze(size(variable1)) > 0)  or (variable2 != "Fideicomisos")',
                        MensajeExito: 'El concepto "Mencionar dependencia parcial o total" existe y es reportado cuando el "Tipo de instrumento" es "Fideicomisos"',
                        MensajeError: 'El concepto "Mencionar dependencia parcial o total" debe existir y ser reportado cuando el "Tipo de instrumento" es "Fideicomisos"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_IssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_IssuanceUnderArt13OfTheCUE',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuanceUnderArt13OfTheCUE',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_LimitedPublicOffering': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_LimitedPublicOffering',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_LimitedPublicOffering',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_TypeOfInstrument': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_TypeOfInstrument',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrument',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_ForeingIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_ForeingIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ForeingIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_MentioningwhetherOrNotHaveCollateral': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_MentioningwhetherOrNotHaveCollateral',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MentioningwhetherOrNotHaveCollateral',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_Datos_Generales_ar_pros_IssuewithCapitalCalls': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_Datos_Generales_ar_pros_IssuewithCapitalCalls',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuewithCapitalCalls',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Leyenda_Prospecto_ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Leyenda_Prospecto_ar_pros_ProspectusLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ProspectusLegend",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'Obligatorio_Condicional_Emision_Unica_Prospecto_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 != "INF" or  variable2 == 0)',
                        MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_OnlyEmission",
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
  "ctx_2014": {
    "Id": "ctx_2014",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2014_12_31",
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
  "ar_pros_PlacementProspectus_2fec7314-b8d2-400b-a17b-31929f77e2fe": {
    "Id": "ar_pros_PlacementProspectus_2fec7314-b8d2-400b-a17b-31929f77e2fe",
    "IdConcepto": "ar_pros_PlacementProspectus",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultPlacementProspectus"
  },
  "ar_pros_ProspectusLegend_c6d3a47a-26e0-4e41-9879-0ef5fe62c153": {
    "Id": "ar_pros_ProspectusLegend_c6d3a47a-26e0-4e41-9879-0ef5fe62c153",
    "IdConcepto": "ar_pros_ProspectusLegend",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OnlyEmission_5bd4cebd-174d-4011-b1e8-d8257e02ee35": {
    "Id": "ar_pros_OnlyEmission_5bd4cebd-174d-4011-b1e8-d8257e02ee35",
    "IdConcepto": "ar_pros_OnlyEmission",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultOnlyEmission"
  },
  "ar_pros_Supplement_688d79af-2ced-4c48-9443-1f3f08122e41": {
    "Id": "ar_pros_Supplement_688d79af-2ced-4c48-9443-1f3f08122e41",
    "IdConcepto": "ar_pros_Supplement",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultSupplement"
  },
  "ar_pros_SupplementLegend_a2d8de5e-0721-48fb-abe2-7759fe28c557": {
    "Id": "ar_pros_SupplementLegend_a2d8de5e-0721-48fb-abe2-7759fe28c557",
    "IdConcepto": "ar_pros_SupplementLegend",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Brochure_21c4ccf5-4c86-47f2-8954-ad24d294b407": {
    "Id": "ar_pros_Brochure_21c4ccf5-4c86-47f2-8954-ad24d294b407",
    "IdConcepto": "ar_pros_Brochure",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultBrochure"
  },
  "ar_pros_RecentEvents_93a3b480-b02f-4754-a293-82a4254144f8": {
    "Id": "ar_pros_RecentEvents_93a3b480-b02f-4754-a293-82a4254144f8",
    "IdConcepto": "ar_pros_RecentEvents",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IssuanceUnderArt13OfTheCUE_915d7383-9ec5-46bf-a1db-bbd70bcd60ff": {
    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_915d7383-9ec5-46bf-a1db-bbd70bcd60ff",
    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUE"
  },
  "ar_pros_LimitedPublicOffering_0f1f9660-f103-4189-a194-9a961ac487ea": {
    "Id": "ar_pros_LimitedPublicOffering_0f1f9660-f103-4189-a194-9a961ac487ea",
    "IdConcepto": "ar_pros_LimitedPublicOffering",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultLimitedPublicOffering"
  },
  "ar_pros_TypeOfInstrument_b528b592-1d54-4bdf-a316-12536a35f015": {
    "Id": "ar_pros_TypeOfInstrument_b528b592-1d54-4bdf-a316-12536a35f015",
    "IdConcepto": "ar_pros_TypeOfInstrument",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultTypeOfInstrument"
  },
  "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000": {
      "Id": "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000",
      "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultTypeOfInstrumentDescription"
  },
  "ar_pros_ForeingIssuer_e74e5c2c-27c2-462a-8d97-984e8f7279b6": {
    "Id": "ar_pros_ForeingIssuer_e74e5c2c-27c2-462a-8d97-984e8f7279b6",
    "IdConcepto": "ar_pros_ForeingIssuer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultForeingIssuer"
  },
  "ar_pros_MentioningwhetherOrNotHaveCollateral_cc15792d-c670-4881-bd5d-d2f29223bded": {
    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_cc15792d-c670-4881-bd5d-d2f29223bded",
    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MentioningPartialOrTotalDependencePros_1a19ea74-1176-43d2-a20d-fe52b470fc67": {
    "Id": "ar_pros_MentioningPartialOrTotalDependencePros_1a19ea74-1176-43d2-a20d-fe52b470fc67",
    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
  }
};
        }
    }

}