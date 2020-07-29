///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/431000-HBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_HBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_HBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {


                'Obligatorios_Renglon_Persona_Responsable_ar_pros_ResponsiblePersonName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorios_Renglon_Persona_Responsable_ar_pros_ResponsiblePersonName',
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
                'Obligatorios_Renglon_Persona_Responsable_ar_pros_ResponsiblePersonPosition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorios_Renglon_Persona_Responsable_ar_pros_ResponsiblePersonPosition',
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
                'Obligatorios_Renglon_Persona_Responsable_ar_pros_ResponsiblePersonInstitution': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorios_Renglon_Persona_Responsable_ar_pros_ResponsiblePersonInstitution',
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
                'Obligatorios_Renglon_Persona_Responsable_ar_pros_ResponsiblePersonLegend': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorios_Renglon_Persona_Responsable_ar_pros_ResponsiblePersonLegend',
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
                'ExistenciaPersonaResponsable_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaPersonaResponsable_',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'Debe existir al menos un registro en la tabla "Personas responsables del informe".',
                        MensajeError: 'Debe existir al menos un registro en la tabla "Personas responsables del informe".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ResponsiblePersonName",
                                "PuedeEliminarse": true,
                                "PuedeCrearse": true,
                                "ConteoHechos": true
                            }
                        }
                    }
                ),
                    'Condicional_ar_pros_FirstExerciseSubjectToReview': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_FirstExerciseSubjectToReview',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se debe indicar una opinion para el hecho {variable1}.',
                    MensajeError: 'Se debe indicar una opinion para el hecho {variable1}.',
                    VariablesCoincidenPeriodo: false,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_FirstExerciseSubjectToReview',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_TypeOfOpinionFirstExercise',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            MismasDimensiones: true,
                            ValorFallback: "INF"
                        })
                    }
                }), 'Condicional_ar_pros_TypeOfOpinionFirstExercise': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_TypeOfOpinionFirstExercise',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se debe indicar una opinion para el hecho {variable1}.',
                    MensajeError: 'Se debe indicar una opinion para el hecho {variable1}.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TypeOfOpinionFirstExercise',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_FirstExerciseSubjectToReview',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            MismasDimensiones: true,
                            "ValorFallback": "INF"
                        })
                    }
                }), 'Condicional_ar_pros_SecondExerciseSubjectToReview': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_SecondExerciseSubjectToReview',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se debe indicar una opinion para el hecho {variable1}.',
                    MensajeError: 'Se debe indicar una opinion para el hecho {variable1}.',
                    VariablesCoincidenPeriodo: false,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SecondExerciseSubjectToReview',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_TypeOfOpinionSecondExercise',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            MismasDimensiones: true,
                            ValorFallback: "INF"
                        })
                    }
                }), 'Condicional_ar_pros_TypeOfOpinionSecondExercise': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_TypeOfOpinionSecondExercise',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se debe indicar una opinion para el hecho {variable1}.',
                    MensajeError: 'Se debe indicar una opinion para el hecho {variable1}.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TypeOfOpinionSecondExercise',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_SecondExerciseSubjectToReview',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            MismasDimensiones: true,
                            "ValorFallback": "INF"
                        })
                    }
                }), 'Condicional_ar_pros_ThirdExerciseSubjectToReview': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_ThirdExerciseSubjectToReview',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se debe indicar una opinion para el hecho {variable1}.',
                    MensajeError: 'Se debe indicar una opinion para el hecho {variable1}.',
                    VariablesCoincidenPeriodo: false,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ThirdExerciseSubjectToReview',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_TypeOfOpinionThirdExercise',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            MismasDimensiones: true,
                            ValorFallback: "INF"
                        })
                    }
                }), 'Condicional_ar_pros_TypeOfOpinionThirdExercise': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_TypeOfOpinionThirdExercise',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se debe indicar una opinion para el hecho {variable1}.',
                    MensajeError: 'Se debe indicar una opinion para el hecho {variable1}.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TypeOfOpinionThirdExercise',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_ThirdExerciseSubjectToReview',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            MismasDimensiones: true,
                            "ValorFallback": "INF"
                        })
                    }
                }), 'Condicional_ar_pros_IfIsTheCasePeriodsIntermediatesSubjectsOfRevision': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_IfIsTheCasePeriodsIntermediatesSubjectsOfRevision',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se debe indicar una opinion para el hecho {variable1}.',
                    MensajeError: 'Se debe indicar una opinion para el hecho {variable1}.',
                    VariablesCoincidenPeriodo: false,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_IfIsTheCasePeriodsIntermediatesSubjectsOfRevision',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_TypeOfOpinionPeriodsIntermediates',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            MismasDimensiones: true,
                            ValorFallback: "INF"
                        })
                    }
                }), 'Condicional_ar_pros_TypeOfOpinionPeriodsIntermediates': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_TypeOfOpinionPeriodsIntermediates',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se debe indicar una opinion para el hecho {variable1}.',
                    MensajeError: 'Se debe indicar una opinion para el hecho {variable1}.',
                    VariablesCoincidenPeriodo: true,
                    ExcepcionSinHijos: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TypeOfOpinionPeriodsIntermediates',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_IfIsTheCasePeriodsIntermediatesSubjectsOfRevision',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            MismasDimensiones: true,
                            "ValorFallback": "INF"
                        })
                    }
                }),


                'ExistenciaFirmaPersonaResponsable_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaFirmaPersonaResponsable_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'Se adjunto un documento de "Nombre y cargo de personas responsables".',
                        MensajeError: 'Se debe adjuntar un documento de "Nombre y cargo de personas responsables".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegendPDF",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }
                            }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "cxt_4": {
    "Id": "cxt_4",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2015_06_10",
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
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfResponsibleFigureAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:MembersOfTheBoardOfDirectorsA2N1Member</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ar_pros:ResponsiblePersonsSequenceTypedAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ar_pros:ResponsiblePersonSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">4</ar_pros:ResponsiblePersonSequenceDomain></xbrldi:typedMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_MembersOfTheBoardOfDirectorsA2N1Member",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MembersOfTheBoardOfDirectorsA2N1Member",
        "ElementoMiembroTipificado": null
      },
      {
        "Explicita": false,
        "IdDimension": "ar_pros_ResponsiblePersonsSequenceTypedAxis",
        "IdItemMiembro": null,
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis",
        "QNameItemMiembro": null,
        "ElementoMiembroTipificado": "<ar_pros:ResponsiblePersonSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">4</ar_pros:ResponsiblePersonSequenceDomain>"
      }
    ]
  },
  "ctx": {
    "Id": "ctx",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2015_06_10",
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
  "ar_pros_ResponsiblePersonName_5f9a5e09-4080-4de5-a54b-ada53b800107": {
    "Id": "ar_pros_ResponsiblePersonName_5f9a5e09-4080-4de5-a54b-ada53b800107",
    "IdConcepto": "ar_pros_ResponsiblePersonName",
    "IdContextoPlantilla": "cxt_4",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ResponsiblePersonPosition_8ee2e2e8-e80e-4c49-bbd8-80b3769b5d71": {
    "Id": "ar_pros_ResponsiblePersonPosition_8ee2e2e8-e80e-4c49-bbd8-80b3769b5d71",
    "IdConcepto": "ar_pros_ResponsiblePersonPosition",
    "IdContextoPlantilla": "cxt_4",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ResponsiblePersonInstitution_b109796b-fbe3-41e3-9d6e-0460f052c9e1": {
    "Id": "ar_pros_ResponsiblePersonInstitution_b109796b-fbe3-41e3-9d6e-0460f052c9e1",
    "IdConcepto": "ar_pros_ResponsiblePersonInstitution",
    "IdContextoPlantilla": "cxt_4",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ResponsiblePersonLegend_afe7ad32-5766-451a-be28-fa7bea508c3d": {
    "Id": "ar_pros_ResponsiblePersonLegend_afe7ad32-5766-451a-be28-fa7bea508c3d",
    "IdConcepto": "ar_pros_ResponsiblePersonLegend",
    "IdContextoPlantilla": "cxt_4",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameAndPositionsOfResponsiblePersonsPdf_b1ce6cbe-27f8-4336-a865-6f92c86d53cb": {
    "Id": "ar_pros_NameAndPositionsOfResponsiblePersonsPdf_b1ce6cbe-27f8-4336-a865-6f92c86d53cb",
    "IdConcepto": "ar_pros_NameAndPositionsOfResponsiblePersonsPdf",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUELegendPDF_b1ce6cbe-27f8-4336-a865-6f92c86d53cb": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegendPDF_b1ce6cbe-27f8-4336-a865-6f92c86d53cb",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegendPDF",
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