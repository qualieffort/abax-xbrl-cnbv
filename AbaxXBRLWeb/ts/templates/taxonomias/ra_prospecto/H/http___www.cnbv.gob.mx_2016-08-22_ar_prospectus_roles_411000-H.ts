///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_411000_H
         */
        constructor() {

            this.ListadoDeFormulas = {

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
  "ar_pros_PlacementProspectus_741f3227-96ec-4b92-8e2b-fa2896cb202f": {
    "Id": "ar_pros_PlacementProspectus_741f3227-96ec-4b92-8e2b-fa2896cb202f",
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
  "ar_pros_ProspectusLegend_2b6c62d5-4e2d-40a7-817d-dfae4f62f9df": {
    "Id": "ar_pros_ProspectusLegend_2b6c62d5-4e2d-40a7-817d-dfae4f62f9df",
    "IdConcepto": "ar_pros_ProspectusLegend",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultProspectusLegend"
  },
  "ar_pros_OnlyEmission_b5bc685a-f372-4719-b01a-890fd8231aa7": {
    "Id": "ar_pros_OnlyEmission_b5bc685a-f372-4719-b01a-890fd8231aa7",
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
  "ar_pros_Supplement_a3d2ef8f-0b7f-4ceb-b867-dbc6752de554": {
    "Id": "ar_pros_Supplement_a3d2ef8f-0b7f-4ceb-b867-dbc6752de554",
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
  "ar_pros_SupplementLegend_851ee7f7-f590-4147-8fe8-693d4812b8e8": {
    "Id": "ar_pros_SupplementLegend_851ee7f7-f590-4147-8fe8-693d4812b8e8",
    "IdConcepto": "ar_pros_SupplementLegend",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultSupplementLegend"
  },
  "ar_pros_Brochure_c878b08b-8fd7-420b-9c42-75a5b0644188": {
    "Id": "ar_pros_Brochure_c878b08b-8fd7-420b-9c42-75a5b0644188",
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
  "ar_pros_RecentEvents_71606fe7-add8-4ba0-81fc-62bc219668c2": {
    "Id": "ar_pros_RecentEvents_71606fe7-add8-4ba0-81fc-62bc219668c2",
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
  "ar_pros_IssuanceUnderArt13OfTheCUE_b27894de-1250-4098-8b52-1b35e63a7a89": {
    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_b27894de-1250-4098-8b52-1b35e63a7a89",
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
  "ar_pros_LimitedPublicOffering_3ad48242-7785-4db8-9450-377bd169eff9": {
    "Id": "ar_pros_LimitedPublicOffering_3ad48242-7785-4db8-9450-377bd169eff9",
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
  "ar_pros_TypeOfInstrument_4be94fd0-05a5-43a6-8f02-41788eb48536": {
    "Id": "ar_pros_TypeOfInstrument_4be94fd0-05a5-43a6-8f02-41788eb48536",
    "IdConcepto": "ar_pros_TypeOfInstrument",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#tipoInstrumentoDefault"
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
  "ar_pros_ForeingIssuer_0d738a85-8b85-4a06-b83b-0063badf6207": {
    "Id": "ar_pros_ForeingIssuer_0d738a85-8b85-4a06-b83b-0063badf6207",
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
  "ar_pros_DisclosureIfAnyIssueOnShares_4268fd59-d430-4185-8260-592e20593d57": {
    "Id": "ar_pros_DisclosureIfAnyIssueOnShares_4268fd59-d430-4185-8260-592e20593d57",
    "IdConcepto": "ar_pros_DisclosureIfAnyIssueOnShares",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MentioningwhetherOrNotHaveCollateral_bf601524-f19d-440f-9926-8319a85112a8": {
    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_bf601524-f19d-440f-9926-8319a85112a8",
    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
    "IdContextoPlantilla": "ctx_2014",
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