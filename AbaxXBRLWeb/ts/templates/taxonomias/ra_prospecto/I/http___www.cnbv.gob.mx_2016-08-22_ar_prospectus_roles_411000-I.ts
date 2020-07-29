///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

  /**
   * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-I
   * 
   * @author AbaxXBRL Template Generator
   * @version 1.0
   */
  export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_I implements abaxXBRL.model.DefinicionDeElementosPlantilla {

    /** La definición de los contextos utilizados por la plantilla */
    ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

    /** La definición de las unidades utilizadas por la plantilla */
    UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

    /** La definición de los hechos utilizados por la plantilla */
    HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

    /** El listado de fórmulas que se utilizan en un rol */
    ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

    /**
     * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_I
     */
    constructor() {

        this.ListadoDeFormulas = {

            'No_Vacios_Datos_Generales_ar_pros_PlacementProspectus': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_PlacementProspectus',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_PlacementProspectus',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'No_Vacios_Datos_Generales_ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_ProspectusLegend',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ProspectusLegend',
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
            'No_Vacios_Datos_Generales_ar_pros_OnlyEmission': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_OnlyEmission',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_OnlyEmission',
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
        "ar_pros_PlacementProspectus_b4d791c4-58aa-4802-aa85-d117b8516e90": {
          "Id": "ar_pros_PlacementProspectus_b4d791c4-58aa-4802-aa85-d117b8516e90",
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
        "ar_pros_ProspectusLegend_4a075a63-1e2b-4637-9476-c7a909135e61": {
          "Id": "ar_pros_ProspectusLegend_4a075a63-1e2b-4637-9476-c7a909135e61",
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
        "ar_pros_OnlyEmission_9dddb84e-cb6f-486c-8a99-95da40f47500": {
          "Id": "ar_pros_OnlyEmission_9dddb84e-cb6f-486c-8a99-95da40f47500",
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
        "ar_pros_RecentEvents_257ab96c-bb16-41c6-a20a-8b68fb4fcf48": {
          "Id": "ar_pros_RecentEvents_257ab96c-bb16-41c6-a20a-8b68fb4fcf48",
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
        "ar_pros_LimitedPublicOffering_7f77ca50-de67-4d8b-9ee6-7382f641187b": {
          "Id": "ar_pros_LimitedPublicOffering_7f77ca50-de67-4d8b-9ee6-7382f641187b",
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
        "ar_pros_ForeingIssuer_6175fbd4-9544-4a24-a0ef-6d64251179a6": {
          "Id": "ar_pros_ForeingIssuer_6175fbd4-9544-4a24-a0ef-6d64251179a6",
          "IdConcepto": "ar_pros_ForeingIssuer",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultForeingIssuer"
        }
      };
    }
  }

}