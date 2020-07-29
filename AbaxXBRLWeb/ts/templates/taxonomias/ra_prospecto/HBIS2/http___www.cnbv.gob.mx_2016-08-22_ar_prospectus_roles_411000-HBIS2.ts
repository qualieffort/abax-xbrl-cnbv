///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

  /**
   * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-HBIS2
   * 
   * @author AbaxXBRL Template Generator
   * @version 1.0
   */
  export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_HBIS2 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

    /** La definición de los contextos utilizados por la plantilla */
    ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

    /** La definición de las unidades utilizadas por la plantilla */
    UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

    /** La definición de los hechos utilizados por la plantilla */
    HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

    /** El listado de fórmulas que se utilizan en un rol */
    ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

    /**
     * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_HBIS2
     */
    constructor() {

        this.ListadoDeFormulas = {

            'Obligatorio_Condicional__ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional__ar_pros_ProspectusLegend',
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
            'Obligatorio_Condicional__ar_pros_OnlyEmission': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional__ar_pros_OnlyEmission',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                    MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                    MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_OnlyEmission",
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
            'DATOS_GENERALES_no_vacios_ar_pros_IssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                {
                    Id: 'DATOS_GENERALES_no_vacios_ar_pros_IssuanceUnderArt13OfTheCUE',
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
            'DATOS_GENERALES_no_vacios_ar_pros_LimitedPublicOffering': new model.DefinicionFormula().deserialize(
                {
                    Id: 'DATOS_GENERALES_no_vacios_ar_pros_LimitedPublicOffering',
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
            'DATOS_GENERALES_no_vacios_ar_pros_TypeOfInstrument': new model.DefinicionFormula().deserialize(
                {
                    Id: 'DATOS_GENERALES_no_vacios_ar_pros_TypeOfInstrument',
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
            'DATOS_GENERALES_no_vacios_ar_pros_ForeingIssuer': new model.DefinicionFormula().deserialize(
                {
                    Id: 'DATOS_GENERALES_no_vacios_ar_pros_ForeingIssuer',
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
            'DATOS_GENERALES_no_vacios_ar_pros_MentioningwhetherOrNotHaveCollateral': new model.DefinicionFormula().deserialize(
                {
                    Id: 'DATOS_GENERALES_no_vacios_ar_pros_MentioningwhetherOrNotHaveCollateral',
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
            'DATOS_GENERALES_no_vacios_ar_pros_IssuewithCapitalCalls': new model.DefinicionFormula().deserialize(
                {
                    Id: 'DATOS_GENERALES_no_vacios_ar_pros_IssuewithCapitalCalls',
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
            'DATOS_GENERALES_obligatorio_condicional__': new model.DefinicionFormula().deserialize(
                {
                    Id: 'DATOS_GENERALES_obligatorio_condicional__',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "Fideicomisos" and squeeze(size(variable1)) > 0) or (variable2 != "Fideicomisos")',
                    MensajeExito: 'El concepto "Mencionar dependencia parcial o total" debe existir y ser reportado cuando el "Tipo de instrumento" es "Fideicomisos".',
                    MensajeError: 'El concepto "Mencionar dependencia parcial o total" debe existir y ser reportado cuando el "Tipo de instrumento" es "Fideicomisos".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
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
        "ar_pros_PlacementProspectus_f0506b05-7f5c-4022-a157-8f5662f35f50": {
          "Id": "ar_pros_PlacementProspectus_f0506b05-7f5c-4022-a157-8f5662f35f50",
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
        "ar_pros_ProspectusLegend_17d2e40e-e5b3-4fbd-91cd-067cd6ae58cf": {
          "Id": "ar_pros_ProspectusLegend_17d2e40e-e5b3-4fbd-91cd-067cd6ae58cf",
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
        "ar_pros_OnlyEmission_96812d61-0274-47fe-a9d8-5d50de9087d9": {
          "Id": "ar_pros_OnlyEmission_96812d61-0274-47fe-a9d8-5d50de9087d9",
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
        "ar_pros_Supplement_b6c084ac-16af-4245-adce-50ea5f36fc7e": {
          "Id": "ar_pros_Supplement_b6c084ac-16af-4245-adce-50ea5f36fc7e",
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
        "ar_pros_SupplementLegend_982d502c-c882-4c39-8d08-bb16d65b4f67": {
          "Id": "ar_pros_SupplementLegend_982d502c-c882-4c39-8d08-bb16d65b4f67",
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
        "ar_pros_Brochure_2e5e2f4f-0979-4c75-a7d8-1080472d2f4f": {
          "Id": "ar_pros_Brochure_2e5e2f4f-0979-4c75-a7d8-1080472d2f4f",
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
        "ar_pros_RecentEvents_63fb3597-ff3d-4e0c-8344-5df5104e7126": {
          "Id": "ar_pros_RecentEvents_63fb3597-ff3d-4e0c-8344-5df5104e7126",
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
        "ar_pros_IssuanceUnderArt13OfTheCUE_270808be-b188-4763-8259-9166b702c9cb": {
          "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_270808be-b188-4763-8259-9166b702c9cb",
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
        "ar_pros_LimitedPublicOffering_b13ce18d-b760-472a-a9aa-7988c2d8f88c": {
          "Id": "ar_pros_LimitedPublicOffering_b13ce18d-b760-472a-a9aa-7988c2d8f88c",
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
        "ar_pros_TypeOfInstrument_659bbdd0-fad8-4310-bcb1-872cfb6a6f6c": {
          "Id": "ar_pros_TypeOfInstrument_659bbdd0-fad8-4310-bcb1-872cfb6a6f6c",
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
        "ar_pros_ForeingIssuer_1f171e20-dd3e-4d79-9dac-7274a21bb546": {
          "Id": "ar_pros_ForeingIssuer_1f171e20-dd3e-4d79-9dac-7274a21bb546",
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
        "ar_pros_MentioningwhetherOrNotHaveCollateral_dba06db9-480f-4b6f-9f97-1e9281722d50": {
          "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_dba06db9-480f-4b6f-9f97-1e9281722d50",
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
        "ar_pros_MentioningPartialOrTotalDependencePros_f17e3800-f807-44e9-8677-d5ccbc82beb8": {
          "Id": "ar_pros_MentioningPartialOrTotalDependencePros_f17e3800-f807-44e9-8677-d5ccbc82beb8",
          "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
        },
        "ar_pros_IssuewithCapitalCalls_45f09801-13da-42dc-8b34-303b1d4a8c40": {
          "Id": "ar_pros_IssuewithCapitalCalls_45f09801-13da-42dc-8b34-303b1d4a8c40",
          "IdConcepto": "ar_pros_IssuewithCapitalCalls",
          "IdContextoPlantilla": "ctx_2014",
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