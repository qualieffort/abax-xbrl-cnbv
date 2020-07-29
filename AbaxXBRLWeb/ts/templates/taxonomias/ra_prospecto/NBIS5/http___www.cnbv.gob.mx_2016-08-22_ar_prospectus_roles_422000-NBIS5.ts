///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/422000-NBIS5
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_NBIS5 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_NBIS5
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_BusinessOverviewAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_BusinessOverviewAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BusinessOverviewAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_MainActivityAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_MainActivityAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MainActivityAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_HumanResourcesAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_HumanResourcesAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HumanResourcesAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_CorporateStructureAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_CorporateStructureAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CorporateStructureAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_DirectorsAndShareholdersAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_DirectorsAndShareholdersAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DirectorsAndShareholdersAdministrator',
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
  "ar_pros_ReferenceIncorporationAdministrator_dca483a7-7816-48b6-8837-bb7b0588fcf9": {
    "Id": "ar_pros_ReferenceIncorporationAdministrator_dca483a7-7816-48b6-8837-bb7b0588fcf9",
    "IdConcepto": "ar_pros_ReferenceIncorporationAdministrator",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationAdministrator"
  },
  "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator_42c9576d-2f44-4148-8f48-c6209e83f3ea": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator_42c9576d-2f44-4148-8f48-c6209e83f3ea",
    "IdConcepto": "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainActivityAdministrator_6937dce6-d8fb-4823-828e-a442859c72d5": {
    "Id": "ar_pros_MainActivityAdministrator_6937dce6-d8fb-4823-828e-a442859c72d5",
    "IdConcepto": "ar_pros_MainActivityAdministrator",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_HumanResourcesAdministrator_c87faf74-fb54-431d-8a32-7ba3405d31eb": {
    "Id": "ar_pros_HumanResourcesAdministrator_c87faf74-fb54-431d-8a32-7ba3405d31eb",
    "IdConcepto": "ar_pros_HumanResourcesAdministrator",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CorporateStructureAdministrator_8eac360d-4283-4e3a-8aee-0989452fca8c": {
    "Id": "ar_pros_CorporateStructureAdministrator_8eac360d-4283-4e3a-8aee-0989452fca8c",
    "IdConcepto": "ar_pros_CorporateStructureAdministrator",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator_181f5841-0bd3-473b-9ef3-635032a21926": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator_181f5841-0bd3-473b-9ef3-635032a21926",
    "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DirectorsAndShareholdersAdministrator_a72ec48d-a3bb-4686-b18d-934aed94500e": {
    "Id": "ar_pros_DirectorsAndShareholdersAdministrator_a72ec48d-a3bb-4686-b18d-934aed94500e",
    "IdConcepto": "ar_pros_DirectorsAndShareholdersAdministrator",
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