///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/431000-NBIS
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_NBIS implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_NBIS
         */
        constructor() {

            this.ListadoDeFormulas = {


                'PERSONAS_RESPONSABLES_obligatorio_renglon_tabla_personas_responsables_ar_pros_ResponsiblePersonName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PERSONAS_RESPONSABLES_obligatorio_renglon_tabla_personas_responsables_ar_pros_ResponsiblePersonName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ResponsiblePersonName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PERSONAS_RESPONSABLES_obligatorio_renglon_tabla_personas_responsables_ar_pros_ResponsiblePersonPosition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PERSONAS_RESPONSABLES_obligatorio_renglon_tabla_personas_responsables_ar_pros_ResponsiblePersonPosition',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ResponsiblePersonPosition',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PERSONAS_RESPONSABLES_obligatorio_renglon_tabla_personas_responsables_ar_pros_ResponsiblePersonInstitution': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PERSONAS_RESPONSABLES_obligatorio_renglon_tabla_personas_responsables_ar_pros_ResponsiblePersonInstitution',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ResponsiblePersonInstitution',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PERSONAS_RESPONSABLES_obligatorio_renglon_tabla_personas_responsables_ar_pros_ResponsiblePersonLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PERSONAS_RESPONSABLES_obligatorio_renglon_tabla_personas_responsables_ar_pros_ResponsiblePersonLegend',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ResponsiblePersonLegend',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'PERSONAS_RESPONSABLES_ObligatoriosPorInstitucion_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PERSONAS_RESPONSABLES_ObligatoriosPorInstitucion_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) and (squeeze(size(variable2)) > 0) and (squeeze(size(variable3)) > 0)',
                        MensajeExito: 'Se deben ingresar almenos una persona responsalbe para la inclusión {variable1}.',
                        MensajeError: 'Se deben ingresar almenos una persona responsalbe para la inclusión {variable1}.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ResponsiblePersonInstitution",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ResponsiblePersonName",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ConjuntoDimensionesParcial": true,
                                "ValorFallback": ""
                            },
                            "variable3": {
                                "Id": "variable3",
                                "IdConcepto": "ar_pros_ResponsiblePersonPosition",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "MismasDimensiones": true,
                                "ConjuntoDimensionesParcial": true,
                                "ValorFallback": ""
                            }
                        }
                    }
                ),
                'ExistenciaNombrePersonaResponsable_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaNombrePersonaResponsable_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'Se adjunto un documento de "Nombre y cargo de personas responsables".',
                        MensajeError: 'Se debe adjuntar un documento de "Nombre y cargo de personas responsables".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_NameAndPositionsOfResponsiblePersonsPdf",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            }
                        }
                    }
                ),
          
                //===========================================================================================================================
                // Existence Asertions
                //===========================================================================================================================
                'ExistenciaPersonaResponsable': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaPersonaResponsable',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'Debe existir al menos un registro en la tabla "Personas responsables del informe".',
                        MensajeError: 'Debe existir al menos un registro en la tabla "Personas responsables del informe".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ResponsiblePersonName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: true
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
  "ar_pros_NameAndPositionsOfResponsiblePersonsPdf_7c9b495c-be2f-4897-9094-a5e364874272": {
    "Id": "ar_pros_NameAndPositionsOfResponsiblePersonsPdf_7c9b495c-be2f-4897-9094-a5e364874272",
    "IdConcepto": "ar_pros_NameAndPositionsOfResponsiblePersonsPdf",
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