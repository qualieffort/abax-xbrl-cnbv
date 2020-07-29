///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/422000-HBIS5
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_HBIS5 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_HBIS5
         */
        constructor() {

            this.ListadoDeFormulas = {

                'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_historia_y_desarrollo_del_administrador_ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_historia_y_desarrollo_del_administrador_ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator',
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
                'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_BusinessOverviewAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_BusinessOverviewAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BusinessOverviewAdministrator',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_MainActivityAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_MainActivityAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MainActivityAdministrator',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_HumanResourcesAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_HumanResourcesAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HumanResourcesAdministrator',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_CorporateStructureAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_CorporateStructureAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CorporateStructureAdministrator',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_DirectorsAndShareholdersAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRADOR_DEL_PATRIMONIO_DEL_FIDEICOMISO_obligatorio_condicional_no_vacios_ar_pros_DirectorsAndShareholdersAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DirectorsAndShareholdersAdministrator',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
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
  "ar_pros_ReferenceIncorporationAdministrator_3308b9e6-a00d-41de-abf7-e8ea9c23feb6": {
    "Id": "ar_pros_ReferenceIncorporationAdministrator_3308b9e6-a00d-41de-abf7-e8ea9c23feb6",
    "IdConcepto": "ar_pros_ReferenceIncorporationAdministrator",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationAdministrator"
  },
  "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator_16738143-e64e-43f2-b293-cd581d8de359": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator_16738143-e64e-43f2-b293-cd581d8de359",
    "IdConcepto": "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BusinessOverviewAdministrator_ef69b728-7871-49ac-a21c-b51583d6d7b1": {
    "Id": "ar_pros_BusinessOverviewAdministrator_ef69b728-7871-49ac-a21c-b51583d6d7b1",
    "IdConcepto": "ar_pros_BusinessOverviewAdministrator",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainActivityAdministrator_86b81842-4ee2-4e3d-9ce2-058f761f1bb2": {
    "Id": "ar_pros_MainActivityAdministrator_86b81842-4ee2-4e3d-9ce2-058f761f1bb2",
    "IdConcepto": "ar_pros_MainActivityAdministrator",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_HumanResourcesAdministrator_bf5ae2d5-38c0-4777-93e7-d8a605a32ce7": {
    "Id": "ar_pros_HumanResourcesAdministrator_bf5ae2d5-38c0-4777-93e7-d8a605a32ce7",
    "IdConcepto": "ar_pros_HumanResourcesAdministrator",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CorporateStructureAdministrator_3a8d5a5c-11f4-4cad-9976-f06f6c8f89a2": {
    "Id": "ar_pros_CorporateStructureAdministrator_3a8d5a5c-11f4-4cad-9976-f06f6c8f89a2",
    "IdConcepto": "ar_pros_CorporateStructureAdministrator",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator_be18904c-4308-4d41-9270-3c42756ebbb4": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator_be18904c-4308-4d41-9270-3c42756ebbb4",
    "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DirectorsAndShareholdersAdministrator_248b83b8-3776-4a4b-94f2-e4e562393e2e": {
    "Id": "ar_pros_DirectorsAndShareholdersAdministrator_248b83b8-3776-4a4b-94f2-e4e562393e2e",
    "IdConcepto": "ar_pros_DirectorsAndShareholdersAdministrator",
    "IdContextoPlantilla": "cxt",
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