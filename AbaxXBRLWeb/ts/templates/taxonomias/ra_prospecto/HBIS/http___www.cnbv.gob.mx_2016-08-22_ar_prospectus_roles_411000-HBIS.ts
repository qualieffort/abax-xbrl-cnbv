///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-HBIS
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_HBIS implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_HBIS
         */
        constructor() {

            this.ListadoDeFormulas = {
                

                'Obligatorio_Condicional_Emision_Unica_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_Emision_Unica_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el concepto "Emisión única" es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                        MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el concepto "Emisión única" es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
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
                'Obligatorio_Condicional_leyenda_prospecto_ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Condicional_leyenda_prospecto_ar_pros_ProspectusLegend',
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
  "ar_pros_PlacementProspectus_5564a409-e776-40bb-981b-f5c4dadfee5c": {
    "Id": "ar_pros_PlacementProspectus_5564a409-e776-40bb-981b-f5c4dadfee5c",
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
  "ar_pros_ProspectusLegend_88df3ca4-cae1-4e60-b1cc-838b576ffba9": {
    "Id": "ar_pros_ProspectusLegend_88df3ca4-cae1-4e60-b1cc-838b576ffba9",
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
  "ar_pros_OnlyEmission_d738f2f8-2c4e-4512-8206-2cadef42c4bb": {
    "Id": "ar_pros_OnlyEmission_d738f2f8-2c4e-4512-8206-2cadef42c4bb",
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
  "ar_pros_Brochure_d5f67ed5-c703-4159-b744-b6aca5fa8e98": {
    "Id": "ar_pros_Brochure_d5f67ed5-c703-4159-b744-b6aca5fa8e98",
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
  "ar_pros_RecentEvents_75321331-29b8-4968-a02a-30c9272d9e32": {
    "Id": "ar_pros_RecentEvents_75321331-29b8-4968-a02a-30c9272d9e32",
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
  "ar_pros_IssuanceUnderArt13OfTheCUE_f1db512f-8844-464d-8840-dd1551faec30": {
    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_f1db512f-8844-464d-8840-dd1551faec30",
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
  "ar_pros_LimitedPublicOffering_20840062-6d0b-4d5a-a3dc-622cc7adcea4": {
    "Id": "ar_pros_LimitedPublicOffering_20840062-6d0b-4d5a-a3dc-622cc7adcea4",
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
  "ar_pros_TypeOfInstrument_d64a57c5-264d-4e0c-8ccc-73a0c574e84e": {
    "Id": "ar_pros_TypeOfInstrument_d64a57c5-264d-4e0c-8ccc-73a0c574e84e",
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
  "ar_pros_ForeingIssuer_34492c0c-864f-4cad-bb3d-8ddb978d16af": {
    "Id": "ar_pros_ForeingIssuer_34492c0c-864f-4cad-bb3d-8ddb978d16af",
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
  "ar_pros_MentioningwhetherOrNotHaveCollateral_beec5e3c-4d79-44b5-b904-dd469f840887": {
    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_beec5e3c-4d79-44b5-b904-dd469f840887",
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
  "ar_pros_MentioningPartialOrTotalDependencePros_0e30184d-f1d3-41de-87d6-55d53484b0f5": {
    "Id": "ar_pros_MentioningPartialOrTotalDependencePros_0e30184d-f1d3-41de-87d6-55d53484b0f5",
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