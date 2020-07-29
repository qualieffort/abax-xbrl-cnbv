///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/431000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };
        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_H
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
                'ExistenciaFirmaPersonaResponsable_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaFirmaPersonaResponsable_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((abaxXBRL.templates.ArProsBasePlantilla.evaluaEmisionAmparoArticulo13CUE()) || (variable1.length > 0))',
                        MensajeExito: 'Se adjunto un documento de "Nombre y cargo de personas responsables".',
                        MensajeError: 'Se debe adjuntar un documento de "Nombre y cargo de personas responsables".',
                        VariablesCoincidenPeriodo: true,
                        ExpresionJavaScript: true,
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
                ),
                'ExistenciaPersonaResponsable_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaPersonaResponsable_',
                        TipoFormula: model.TipoFormula.ExistenceAssertion,
                        Expresion: 'bignumber(variable1) >= 1',
                        MensajeExito: 'Existe un registro en la tabla "Personas responsables del informe".',
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

                'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 == "SI") and (variable2 == "INF" or variable3 == "INF" or variable4 == "INF")',
                        MensajeExito: 'Los intermediarios colocadores y fideicomitentes firmaron la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        MensajeError: 'Los intermediarios colocadores y fideicomitentes deben firmar la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_SignIssuanceUnderArt13OfTheCUE",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "FiltrosDimension": [
                                        {
                                            "Explicita": true,
                                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterA2N4Member",
                                            "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                                            "IdItemMiembro": "ar_pros_UnderwriterA2N4Member"
                                        }
                                    ],
                                    "MismasDimensiones": true,
                                    "ConjuntoDimensionesParcial": true
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_OnlyEmission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_Brochure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable4": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_PlacementProspectus",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),

                'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE_0': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE_0',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 == "SI")  and (variable2 == "INF" or variable3 == "INF" or variable4 == "INF")',
                        MensajeExito: 'Los intermediarios colocadores y fideicomitentes firmaron la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        MensajeError: 'Los intermediarios colocadores y fideicomitentes deben firmar la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SignIssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterSharesA2N4Member",
                                        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                                        "IdItemMiembro": "ar_pros_UnderwriterSharesA2N4Member"
                                    }
                                ],
                                "MismasDimensiones": true,
                                "ConjuntoDimensionesParcial": true
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_OnlyEmission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_Brochure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable4": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_PlacementProspectus",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                        }
                    }
                ),
                'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'variable1 == "SI"',
                        MensajeExito: 'Los intermediarios colocadores y fideicomitentes firmaron la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        MensajeError: 'Los intermediarios colocadores y fideicomitentes deben firmar la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SignIssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterRestrictedOfferA2N4Member",
                                        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                                        "IdItemMiembro": "ar_pros_UnderwriterRestrictedOfferA2N4Member"
                                    }
                                ],
                                "MismasDimensiones": true,
                                "ConjuntoDimensionesParcial": true
                            }
                        }
                    }
                ),
                'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 == "SI") and (variable2 == "INF" or variable3 == "INF" or variable4 == "INF")',
                        MensajeExito: 'Los intermediarios colocadores y fideicomitentes firmaron la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        MensajeError: 'Los intermediarios colocadores y fideicomitentes deben firmar la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                                "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SignIssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterPublicOfferSharesAndRestrictedA2N4Member",
                                        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                                        "IdItemMiembro": "ar_pros_UnderwriterPublicOfferSharesAndRestrictedA2N4Member"
                                    }
                                ],
                                "MismasDimensiones": true,
                                "ConjuntoDimensionesParcial": true
                                },

                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_OnlyEmission",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_Brochure",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable4": {
                                    "Id": "variable4",
                                    "IdConcepto": "ar_pros_PlacementProspectus",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                        }
                    }
                ),
                'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'PersonasResponsables_obligatorio_firma_art_13_ar_pros_SignIssuanceUnderArt13OfTheCUE_3',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'variable1 == "SI"',
                        MensajeExito: 'Los intermediarios colocadores y fideicomitentes firmaron la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        MensajeError: 'Los intermediarios colocadores y fideicomitentes deben firmar la "Leyenda de Emisión al amparo del art 13 Bis de la CUE".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SignIssuanceUnderArt13OfTheCUE",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "FiltrosDimension": [
                                    {
                                        "Explicita": true,
                                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member",
                                        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                                        "IdItemMiembro": "ar_pros_DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member"
                                    }
                                ],
                                "MismasDimensiones": true,
                                "ConjuntoDimensionesParcial": true
                            }
                        }
                    }
                ),
                'Condicional_Otra_Institucion_Auditor_Externo': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Condicional_Otra_Institucion_Auditor_Externo',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "Otro" and squeeze(size(variable1)) == 0) or (variable2 == "Otro" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Se capturo el concepto "Otra institución" y el valor seleccionado del  concepto "Institución" es igual a "Otro".',
                        MensajeError: 'Se debe capturar el concepto "Otra institución" unicamente cuando el valor seleccionado del  concepto "Institución" es igual a "Otro".',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OtherInstitutionExternalAuditor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ResponsiblePersonInstitutionExternalAuditor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                ),
                'Condicional_Otra_Institucion_Lisenciado_Derecho': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Condicional_Otra_Institucion_Lisenciado_Derecho',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != "Otro" and squeeze(size(variable1)) == 0) or (variable2 == "Otro" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'Se capturo el concepto "Otra institución" y el valor seleccionado del  concepto "Institución" es igual a "Otro".',
                        MensajeError: 'Se debe capturar el concepto "Otra institución" unicamente cuando el valor seleccionado del  concepto "Institución" es igual a "Otro".',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OtherInstitutionBacherlorOfLaws',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                MismasDimensiones: true
                            })
                        }
                    }
                )
                , 'Condicional_ar_pros_FirstExerciseSubjectToReview': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_FirstExerciseSubjectToReview',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se indico una opinión para el hecho Tipo de opinión primer ejercicio',
                    MensajeError: 'Se debe indicar una opinión para el hecho Tipo de opinión primer ejercicio',
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
                })
                , 'Condicional_ar_pros_TypeOfOpinionFirstExercise': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_TypeOfOpinionFirstExercise',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se indico un valor para el hecho Primer ejercicio sujeto de revisión.',
                    MensajeError: 'Se debe indicar un valor para el hecho Primer ejercicio sujeto de revisión.',
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
                })
                , 'Condicional_ar_pros_SecondExerciseSubjectToReview': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_SecondExerciseSubjectToReview',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se indico una opinión para el hecho Tipo de opinión segundo ejercicio.',
                    MensajeError: 'Se debe indicar una opinión para el hecho Tipo de opinión segundo ejercicio.',
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
                })
                , 'Condicional_ar_pros_TypeOfOpinionSecondExercise': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_TypeOfOpinionSecondExercise',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se indico un valor para el hecho Segundo ejercicio sujeto de revisión.',
                    MensajeError: 'Se debe indicar un valor para el hecho Segundo ejercicio sujeto de revisión.',
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
                })
                , 'Condicional_ar_pros_ThirdExerciseSubjectToReview': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_ThirdExerciseSubjectToReview',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se indico una opinión para el hecho Tipo de opinión tercer ejercicio.',
                    MensajeError: 'Se debe indicar una opinión para el hecho Tipo de opinión tercer ejercicio.',
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
                })
                , 'Condicional_ar_pros_TypeOfOpinionThirdExercise': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_TypeOfOpinionThirdExercise',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se indico un valor para el hecho Tercer ejercicio sujeto de revisión.',
                    MensajeError: 'Se debe indicar un valor para el hecho Tercer ejercicio sujeto de revisión.',
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
                })
                , 'Condicional_ar_pros_IfIsTheCasePeriodsIntermediatesSubjectsOfRevision': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_IfIsTheCasePeriodsIntermediatesSubjectsOfRevision',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se indico una opinión para el hecho Tipo de opinión, periodo(s) intermedio(s).',
                    MensajeError: 'Se debe indicar una opinión para el hecho Tipo de opinión, periodo(s) intermedio(s).',
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
                })
                , 'Condicional_ar_pros_TypeOfOpinionPeriodsIntermediates': new model.DefinicionFormula().deserialize({
                    Id: 'Condicional_ar_pros_TypeOfOpinionPeriodsIntermediates',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "INF")',
                    MensajeExito: 'Se indico un valor para el hecho En su caso, periodo(s) intermedio (s) sujeto(s) de revisión.',
                    MensajeError: 'Se debe indicar un valor para el hecho En su caso, periodo(s) intermedio (s) sujeto(s) de revisión.',
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
                })

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
                "ar_pros_NameAndPositionsOfResponsiblePersonsPdf_efa2f0ad-6a99-4d32-a0c5-0fc02390bc8b": {
                    "Id": "ar_pros_NameAndPositionsOfResponsiblePersonsPdf_efa2f0ad-6a99-4d32-a0c5-0fc02390bc8b",
                    "IdConcepto": "ar_pros_NameAndPositionsOfResponsiblePersonsPdf",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUELegendPDF_efa2f0ad-6a99-4d32-a0c5-0fc02390bc8b": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegendPDF_efa2f0ad-6a99-4d32-a0c5-0fc02390bc8b",
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