///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/423000-NBIS4
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_423000_NBIS4 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_423000_NBIS4
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_HistoryAndDevelopmentOfTheSettlorOrPromoter': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_HistoryAndDevelopmentOfTheSettlorOrPromoter',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HistoryAndDevelopmentOfTheSettlorOrPromoter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_BusinessOverview': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_BusinessOverview',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BusinessOverview',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_MainActivity': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_MainActivity',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MainActivity',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_HumanResourcesSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_HumanResourcesSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HumanResourcesSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_CorporateStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_CorporateStructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CorporateStructure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_La_Fideicomitente_no_vacio_ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdministratorName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorFirstName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorFirstName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdministratorFirstName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorGender': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorGender',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdministratorGender',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorDirectorshipType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorDirectorshipType',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdministratorDirectorshipType',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorPeriodForWhichTheyWereElected': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorPeriodForWhichTheyWereElected',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdministratorPeriodForWhichTheyWereElected',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorPosition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorPosition',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdministratorPosition',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorTimeWorkedInTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorTimeWorkedInTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdministratorTimeWorkedInTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'VA_DescripcionPoliticaPrograma_ar_pros_DescriptionOfThePolicyOrProgramOfLaborInclusion': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_DescripcionPoliticaPrograma_ar_pros_DescriptionOfThePolicyOrProgramOfLaborInclusion',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'El concepto {variable1} debe ser reportado si el concepto "Cuenta con programa o política de inclusión laboral" tiene valor "SI".',
                        MensajeError: 'El concepto {variable1} debe ser reportado si el concepto "Cuenta con programa o política de inclusión laboral" tiene valor "SI".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DescriptionOfThePolicyOrProgramOfLaborInclusion",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_HasAPolicyOrProgramOfLaborInclusion",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            }
                        }
                    }
                ),
                'ExistenciaAdministradores_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaAdministradores_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 != " _null_ ")',
                        MensajeExito: 'Existe al menos un registro en la tabla de "Administradores de la empresa".',
                        MensajeError: 'Debe existir al menos un registro en la tabla de "Administradores de la empresa".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_AdministratorName",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": " _null_ "
                            }
                        }
                    }
                ),
                'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesNames': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesNames',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SubcommitteesNames',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesTypeOfSubcommitteeToWhichItBelongs': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesTypeOfSubcommitteeToWhichItBelongs',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SubcommitteesTypeOfSubcommitteeToWhichItBelongs',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesAppointmentDate': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesAppointmentDate',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SubcommitteesAppointmentDate',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesPeriodForWhichTheyWereElected': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesPeriodForWhichTheyWereElected',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SubcommitteesPeriodForWhichTheyWereElected',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesGender': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorios_subcomites_ar_pros_SubcommitteesGender',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SubcommitteesGender',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx": {
    "Id": "ctx",
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

            this.UnidadesPlantillaPorId = {

                "PURE": {
                    "Id": "PURE",
                    "Tipo": 1,
                    "Medidas": [
                        {
                            "Nombre": "#medida_pure",
                            "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
                        }
                    ],
                    "MedidasDenominador": [],
                    "MedidasNumerador": []
                }
            };
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationSettlorOrPromoter_edb26cec-0d73-434a-b707-7834d94e7b60": {
    "Id": "ar_pros_ReferenceIncorporationSettlorOrPromoter_edb26cec-0d73-434a-b707-7834d94e7b60",
    "IdConcepto": "ar_pros_ReferenceIncorporationSettlorOrPromoter",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationSettlorOrPromoter"
  },
  "ar_pros_HistoryAndDevelopmentOfTheSettlorOrPromoter_961acf78-c8e8-460f-8335-2310772cc9ca": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTheSettlorOrPromoter_961acf78-c8e8-460f-8335-2310772cc9ca",
    "IdConcepto": "ar_pros_HistoryAndDevelopmentOfTheSettlorOrPromoter",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BusinessOverview_4a98a011-a426-4e8b-b860-a7bf8ff03c40": {
    "Id": "ar_pros_BusinessOverview_4a98a011-a426-4e8b-b860-a7bf8ff03c40",
    "IdConcepto": "ar_pros_BusinessOverview",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainActivity_3b59ee0c-0822-4897-b4af-820b8a79ddec": {
    "Id": "ar_pros_MainActivity_3b59ee0c-0822-4897-b4af-820b8a79ddec",
    "IdConcepto": "ar_pros_MainActivity",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_HumanResourcesSettlor_10c63f6e-e81a-4b3f-9aea-08f4517d465b": {
    "Id": "ar_pros_HumanResourcesSettlor_10c63f6e-e81a-4b3f-9aea-08f4517d465b",
    "IdConcepto": "ar_pros_HumanResourcesSettlor",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CorporateStructure_c2b1368b-f476-4c8c-bf37-2657ff43d262": {
    "Id": "ar_pros_CorporateStructure_c2b1368b-f476-4c8c-bf37-2657ff43d262",
    "IdConcepto": "ar_pros_CorporateStructure",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor_a7ff15e0-fe7d-43a6-8f1d-02310910060b": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor_a7ff15e0-fe7d-43a6-8f1d-02310910060b",
    "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorsAndShareholders_95a4a475-48f7-49e9-b426-ae4bfa353986": {
    "Id": "ar_pros_AdministratorsAndShareholders_95a4a475-48f7-49e9-b426-ae4bfa353986",
    "IdConcepto": "ar_pros_AdministratorsAndShareholders",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "TotalPercentageOfMenAsRelevantDirectors_0000-0000-0000-0000-20180116": {
      "Id": "TotalPercentageOfMenAsRelevantDirectors_0000-0000-0000-0000-20180116",
      "IdConcepto": "ar_pros_TotalPercentageOfMenAsRelevantDirectors",
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": "PURE",
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": "2",
      "Valor": "#valorDefaultNumerico"
  },
  "TotalPercentageOfWomenAsRelevantDirectors_0000-0000-0000-0000-20180116": {
      "Id": "TotalPercentageOfWomenAsRelevantDirectors_0000-0000-0000-0000-20180116",
      "IdConcepto": "ar_pros_TotalPercentageOfWomenAsRelevantDirectors",
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": "PURE",
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": "2",
      "Valor": "#valorDefaultNumerico"
  },
  "TotalPercentageOfMenAsCounselors_0000-0000-0000-0000-20180116": {
      "Id": "TotalPercentageOfMenAsCounselors_0000-0000-0000-0000-20180116",
      "IdConcepto": "ar_pros_TotalPercentageOfMenAsCounselors",
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": "PURE",
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": "2",
      "Valor": "#valorDefaultNumerico"
  },
  "TotalPercentageOfWomenAsCounselors_0000-0000-0000-0000-20180116": {
      "Id": "TotalPercentageOfWomenAsCounselors_0000-0000-0000-0000-20180116",
      "IdConcepto": "ar_pros_TotalPercentageOfWomenAsCounselors",
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": "PURE",
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": "2",
      "Valor": "#valorDefaultNumerico"
  },
  "HasAPolicyOrProgramOfLaborInclusion_0000-0000-0000-0000-20180116": {
      "Id": "HasAPolicyOrProgramOfLaborInclusion_0000-0000-0000-0000-20180116",
      "IdConcepto": "ar_pros_HasAPolicyOrProgramOfLaborInclusion",
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNo"
  },
  "DescriptionOfThePolicyOrProgramOfLaborInclusion_0000-0000-0000-0000-20180116": {
      "Id": "DescriptionOfThePolicyOrProgramOfLaborInclusion_0000-0000-0000-0000-20180116",
      "IdConcepto": "ar_pros_DescriptionOfThePolicyOrProgramOfLaborInclusion",
      "IdContextoPlantilla": "ctx",
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