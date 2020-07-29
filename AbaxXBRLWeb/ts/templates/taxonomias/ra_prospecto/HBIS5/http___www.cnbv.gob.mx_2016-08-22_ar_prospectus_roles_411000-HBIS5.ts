///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-HBIS5
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_HBIS5 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_HBIS5
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
  "cxt": {
    "Id": "cxt",
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
  "ar_pros_PlacementProspectus_fb9ff821-0660-4620-ba6f-000a285dc560": {
    "Id": "ar_pros_PlacementProspectus_fb9ff821-0660-4620-ba6f-000a285dc560",
    "IdConcepto": "ar_pros_PlacementProspectus",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultPlacementProspectus"
  },
  "ar_pros_ProspectusLegend_751c2fd5-d6de-41f6-bcca-08cedb5c7bfb": {
    "Id": "ar_pros_ProspectusLegend_751c2fd5-d6de-41f6-bcca-08cedb5c7bfb",
    "IdConcepto": "ar_pros_ProspectusLegend",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OnlyEmission_58d30de4-2e11-4b0e-9c6e-e9e868fb3fbe": {
    "Id": "ar_pros_OnlyEmission_58d30de4-2e11-4b0e-9c6e-e9e868fb3fbe",
    "IdConcepto": "ar_pros_OnlyEmission",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultOnlyEmission"
  },
  "ar_pros_Supplement_8646631b-6c94-4fa6-8e8e-bf32e53f63b5": {
    "Id": "ar_pros_Supplement_8646631b-6c94-4fa6-8e8e-bf32e53f63b5",
    "IdConcepto": "ar_pros_Supplement",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultSupplement"
  },
  "ar_pros_SupplementLegend_19b5407f-973d-4df3-a3d4-0fce0aa27e31": {
    "Id": "ar_pros_SupplementLegend_19b5407f-973d-4df3-a3d4-0fce0aa27e31",
    "IdConcepto": "ar_pros_SupplementLegend",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Brochure_0387337f-cc2a-469b-a8aa-ef06392a2719": {
    "Id": "ar_pros_Brochure_0387337f-cc2a-469b-a8aa-ef06392a2719",
    "IdConcepto": "ar_pros_Brochure",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultBrochure"
  },
  "ar_pros_RecentEvents_866a2b4b-c80b-42a7-9468-5fdef92275f0": {
    "Id": "ar_pros_RecentEvents_866a2b4b-c80b-42a7-9468-5fdef92275f0",
    "IdConcepto": "ar_pros_RecentEvents",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IssuanceUnderArt13OfTheCUE_fdecfc18-24f6-499f-ad72-7fdc8f006db6": {
    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_fdecfc18-24f6-499f-ad72-7fdc8f006db6",
    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUE"
  },
  "ar_pros_LimitedPublicOffering_0d8b6c3b-8516-4904-b915-8611e2f3f844": {
    "Id": "ar_pros_LimitedPublicOffering_0d8b6c3b-8516-4904-b915-8611e2f3f844",
    "IdConcepto": "ar_pros_LimitedPublicOffering",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultLimitedPublicOffering"
  },
  "ar_pros_TypeOfInstrument_e708769b-0506-428e-99bd-2907abee8b92": {
    "Id": "ar_pros_TypeOfInstrument_e708769b-0506-428e-99bd-2907abee8b92",
    "IdConcepto": "ar_pros_TypeOfInstrument",
    "IdContextoPlantilla": "cxt",
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
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultTypeOfInstrumentDescription"
  },
  "ar_pros_ForeingIssuer_78a223b3-4927-4406-95d8-0a4df049f528": {
    "Id": "ar_pros_ForeingIssuer_78a223b3-4927-4406-95d8-0a4df049f528",
    "IdConcepto": "ar_pros_ForeingIssuer",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultForeingIssuer"
  },
  "ar_pros_MentioningwhetherOrNotHaveCollateral_eddb2bab-be95-4b78-a757-fc07c3d8de98": {
    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_eddb2bab-be95-4b78-a757-fc07c3d8de98",
    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MentioningPartialOrTotalDependencePros_d49fbc68-074a-4c7e-b5be-605514842111": {
      "Id": "ar_pros_MentioningPartialOrTotalDependencePros_d49fbc68-074a-4c7e-b5be-605514842111",
      "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
  },
  "ar_pros_IssuewithCapitalCalls_4ce1ebc0-1759-4900-ba43-c0408cb9903d": {
    "Id": "ar_pros_IssuewithCapitalCalls_4ce1ebc0-1759-4900-ba43-c0408cb9903d",
    "IdConcepto": "ar_pros_IssuewithCapitalCalls",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultIssuewithCapitalCalls"
  }
};
        }
    }

}