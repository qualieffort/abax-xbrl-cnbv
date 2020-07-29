///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/432000-HBIS5
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_HBIS5 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_HBIS5
         */
        constructor() {

            this.ListadoDeFormulas = {


                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineCNBVAnnexes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineCNBVAnnexes',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable2)) > 0) and (variable1 == "SI")) or ((squeeze(size(variable2)) == 0) and (variable1 == "NO"))',
                        MensajeExito: 'Se requiere el concepto "Fecha de entrega a la CNBV" cuando es incorporación por referencia.',
                        MensajeError: 'Se requiere el concepto "Fecha de entrega a la CNBV" cuando es incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_DeadlineCNBVAnnexes",
                                    "PuedeEliminarse": true,
                                    "PuedeCrearse": true,
                                    "ConteoHechos": false,
                                    "ValorFallback": "",
                                    "MismasDimensiones": true
                                },

                            }
                    }
                ),
                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineCNBVAnnexesB': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineCNBVAnnexesB',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) and (variable2 == "SI")) or ((squeeze(size(variable1)) == 0) and (variable2 == "NO"))',
                        MensajeExito: 'El concepto "Fecha de entrega a la CNBV" solo aplica cuando es incorporación por referencia.',
                        MensajeError: 'El concepto "Fecha de entrega a la CNBV" solo aplica cuando es incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_DeadlineCNBVAnnexes",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "",
                                    "MismasDimensiones": true
                                },

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

                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineStockExchangeAnnexes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineStockExchangeAnnexes',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable2)) > 0) and (variable1 == "SI")) or ((squeeze(size(variable2)) == 0) and (variable1 == "NO"))',
                        MensajeExito: 'El concepto "Fecha de entrega a la bolsa de valores" es requerido en caso de utilizar incorporación por referencia.',
                        MensajeError: 'El concepto "Fecha de entrega a la bolsa de valores" es requerido en caso de utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_DeadlineStockExchangeAnnexes",
                                    "PuedeEliminarse": true,
                                    "PuedeCrearse": true,
                                    "ConteoHechos": false,
                                    "ValorFallback": "",
                                    "MismasDimensiones": true
                                }

                            }
                    }
                ),
                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineStockExchangeAnnexesB': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineStockExchangeAnnexesB',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) and (variable2 == "SI")) or ((squeeze(size(variable1)) == 0) and (variable2 == "NO"))',
                        MensajeExito: 'El concepto "Fecha de entrega a la bolsa de valores" es requerido en caso de utilizar incorporación por referencia.',
                        MensajeError: 'El concepto "Fecha de entrega a la bolsa de valores" es requerido en caso de utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_DeadlineStockExchangeAnnexes",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "",
                                    "MismasDimensiones": true
                                }

                            }
                    }
                ),
                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_PublicConsultationSitesAnnexes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_PublicConsultationSitesAnnexes',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) and (variable2 == "SI")) or ((squeeze(size(variable1)) == 0) and (variable2 == "NO"))',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_PublicConsultationSitesAnnexes",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "",
                                    "MismasDimensiones": true
                                }

                            }
                    }
                )
                /*, 'ANEXOS__DocumentAnnexesToken_SI': new model.DefinicionFormula().deserialize({
                    Id: 'ANEXOS__DocumentAnnexesToken_SI',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable1 == "EEFF Trimestrales" or variable1 == "Reporte Anual") or (variable2 != "SI")',
                    MensajeExito: 'El concepto "Documento" solo admite los valores "EEFF Trimestrales" y "Reporte Anual" cuando la "Incorporación por referencia" es "SI".',
                    MensajeError: 'El concepto "Documento" solo admite los valores "EEFF Trimestrales" y "Reporte Anual" cuando la "Incorporación por referencia" es "SI".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DocumentAnnexesToken",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "",
                            "MismasDimensiones": true
                        }

                    }
                })
                , 'ANEXOS__DocumentAnnexesToken_NO': new model.DefinicionFormula().deserialize({
                    Id: 'ANEXOS__DocumentAnnexesToken_NO',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable1 == "EEFF Anuales" or variable1 == "EEFF Trimestrales" or variable1 == "EEFF Intermedios" or variable1 == "EEFF Internos") or (variable2 != "NO")',
                    MensajeExito: 'El concepto "Documento" solo admite los valores "EEFF Anuales", "EEFF Trimestrales", "EEFF Intermedios"  y "EEFF Internos" cuando la "Incorporación por referencia" es "NO".',
                    MensajeError: 'El concepto "Documento" solo admite los valores "EEFF Anuales", "EEFF Trimestrales", "EEFF Intermedios"  y "EEFF Internos" cuando la "Incorporación por referencia" es "NO".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DocumentAnnexesToken",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "",
                            "MismasDimensiones": true
                        }

                    }
                })*/

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
  "ar_pros_ReferenceIncorporationAnnex_21237053-ea8d-485c-85a9-b9bb245616a2": {
    "Id": "ar_pros_ReferenceIncorporationAnnex_21237053-ea8d-485c-85a9-b9bb245616a2",
    "IdConcepto": "ar_pros_ReferenceIncorporationAnnex",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationAnnex"
  },
  "ar_pros_FinancialStatementsAuditedPdf_692e7380-6712-446b-ba57-8b72a6346ea0": {
    "Id": "ar_pros_FinancialStatementsAuditedPdf_692e7380-6712-446b-ba57-8b72a6346ea0",
    "IdConcepto": "ar_pros_FinancialStatementsAuditedPdf",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LegalOpinionPdf_c0192b30-004e-4128-8728-7d0c8f4f493d": {
    "Id": "ar_pros_LegalOpinionPdf_c0192b30-004e-4128-8728-7d0c8f4f493d",
    "IdConcepto": "ar_pros_LegalOpinionPdf",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TitleWhichCoversTheIssuePdf_ca393dd6-a29d-4cc9-994a-94aa76ad7e49": {
    "Id": "ar_pros_TitleWhichCoversTheIssuePdf_ca393dd6-a29d-4cc9-994a-94aa76ad7e49",
    "IdConcepto": "ar_pros_TitleWhichCoversTheIssuePdf",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrustContractPdf_cc1bc796-6162-49af-aeb8-5f25fdc9b57f": {
    "Id": "ar_pros_TrustContractPdf_cc1bc796-6162-49af-aeb8-5f25fdc9b57f",
    "IdConcepto": "ar_pros_TrustContractPdf",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdditionalInformationAnnexPdf_103d8199-fcb9-4ec9-834a-9327ec02e126": {
    "Id": "ar_pros_AdditionalInformationAnnexPdf_103d8199-fcb9-4ec9-834a-9327ec02e126",
    "IdConcepto": "ar_pros_AdditionalInformationAnnexPdf",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_WhereApplicableCertificateOfTheIssuancePdf_2b52190a-7913-4a7c-809d-f9742b4e3e2f": {
    "Id": "ar_pros_WhereApplicableCertificateOfTheIssuancePdf_2b52190a-7913-4a7c-809d-f9742b4e3e2f",
    "IdConcepto": "ar_pros_WhereApplicableCertificateOfTheIssuancePdf",
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