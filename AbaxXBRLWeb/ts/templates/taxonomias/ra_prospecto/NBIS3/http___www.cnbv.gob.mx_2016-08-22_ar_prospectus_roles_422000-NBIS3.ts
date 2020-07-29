///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/422000-NBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_NBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_NBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {

                'ADMINISTRACION_Historia_desarrollo_administracion_patrimonio_fideicomiso_ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_Historia_desarrollo_administracion_patrimonio_fideicomiso_ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator',
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
                'ADMINISTRACION_no_vacios_ar_pros_BusinessOverviewAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_no_vacios_ar_pros_BusinessOverviewAdministrator',
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
                'ADMINISTRACION_no_vacios_ar_pros_MainActivity': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_no_vacios_ar_pros_MainActivity',
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
                'ADMINISTRACION_no_vacios_ar_pros_HumanResourcesAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_no_vacios_ar_pros_HumanResourcesAdministrator',
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
                'ADMINISTRACION_no_vacios_ar_pros_CorporateStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_no_vacios_ar_pros_CorporateStructure',
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
                'ADMINISTRACION_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator',
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
                'ADMINISTRACION_no_vacios_ar_pros_DirectorsAndShareholdersAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_no_vacios_ar_pros_DirectorsAndShareholdersAdministrator',
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
                ),
                'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorName',
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
                'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorFirstName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorFirstName',
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
                'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorGender': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorGender',
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
                'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorDirectorshipType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorDirectorshipType',
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
                'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorPeriodForWhichTheyWereElected': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorPeriodForWhichTheyWereElected',
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
                'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorPosition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorPosition',
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
                'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorTimeWorkedInTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorio_renglon_tabla_administradores_de_la_empresa_ar_pros_AdministratorTimeWorkedInTheIssuer',
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
                'ADMINISTRACION_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderNameCorporateName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ADMINISTRACION_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderNameCorporateName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ShareholderNameCorporateName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
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
  "ar_pros_ReferenceIncorporationAdministrator_34d888ca-bec9-4733-b8a2-edff40b0beda": {
    "Id": "ar_pros_ReferenceIncorporationAdministrator_34d888ca-bec9-4733-b8a2-edff40b0beda",
    "IdConcepto": "ar_pros_ReferenceIncorporationAdministrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationAdministrator"
  },
  "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator_efad51aa-a484-400b-880d-6307350e73e3": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator_efad51aa-a484-400b-880d-6307350e73e3",
    "IdConcepto": "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainActivity_9833227a-35f3-4d04-80c0-96dab6b62210": {
    "Id": "ar_pros_MainActivity_9833227a-35f3-4d04-80c0-96dab6b62210",
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
  "ar_pros_HumanResourcesAdministrator_4b963207-8c82-425c-a82b-dbe3a8cc4086": {
    "Id": "ar_pros_HumanResourcesAdministrator_4b963207-8c82-425c-a82b-dbe3a8cc4086",
    "IdConcepto": "ar_pros_HumanResourcesAdministrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CorporateStructure_f798b521-dae5-49d1-9038-16873cb0efb5": {
    "Id": "ar_pros_CorporateStructure_f798b521-dae5-49d1-9038-16873cb0efb5",
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
  "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator_9fb6076b-9439-4e7f-838f-7d03630f888f": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator_9fb6076b-9439-4e7f-838f-7d03630f888f",
    "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DirectorsAndShareholdersAdministrator_7a3d9af8-bf9f-44dd-b72d-9be7d19062e7": {
    "Id": "ar_pros_DirectorsAndShareholdersAdministrator_7a3d9af8-bf9f-44dd-b72d-9be7d19062e7",
    "IdConcepto": "ar_pros_DirectorsAndShareholdersAdministrator",
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