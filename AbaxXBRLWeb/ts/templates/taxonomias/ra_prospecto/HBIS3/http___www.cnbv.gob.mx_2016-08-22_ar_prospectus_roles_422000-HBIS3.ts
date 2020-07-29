///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/422000-HBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_HBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_HBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {


                'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderNameCorporateName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderNameCorporateName',
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
                'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderFirstName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderFirstName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ShareholderFirstName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderSecondName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderSecondName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ShareholderSecondName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderShareholding': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderShareholding',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ShareholderShareholding',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderAdditionalInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglon_tabla_accionistas_de_la_empresa_ar_pros_ShareholderAdditionalInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ShareholderAdditionalInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorName',
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
                'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorFirstName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorFirstName',
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
                'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorDirectorshipType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorDirectorshipType',
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
                'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorPeriodForWhichTheyWereElected': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorPeriodForWhichTheyWereElected',
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
                'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorPosition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorPosition',
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
                'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorTimeWorkedInTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorTimeWorkedInTheIssuer',
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
                'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorGenderProspectoH': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorio_renglos_tabla_administradores_de_la_empresa_ar_pros_AdministratorGenderProspectoH',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AdministratorGenderProspectoH',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_BusinessOverviewAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_BusinessOverviewAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
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
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_MainActivityAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_MainActivityAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
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
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_HumanResourcesAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_HumanResourcesAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
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
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_CorporateStructureAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_CorporateStructureAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
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
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
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
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_DirectorsAndShareholdersAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_DirectorsAndShareholdersAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
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
                ),
                'LA_EMISORA_obligatorio_historia_y_desarrollo_de_la_emisora_ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_EMISORA_obligatorio_historia_y_desarrollo_de_la_emisora_ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator',
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
  },
  "cxt_2": {
    "Id": "cxt_2",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfCompanyAdministratorsAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:IndependentMember</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ar_pros:CompanyAdministratorsSecuenceTypedAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ar_pros:CompanyAdministratorsSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">2</ar_pros:CompanyAdministratorsSequenceDomain></xbrldi:typedMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
        "IdItemMiembro": "ar_pros_IndependentMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:IndependentMember",
        "ElementoMiembroTipificado": null
      },
      {
        "Explicita": false,
        "IdDimension": "ar_pros_CompanyAdministratorsSecuenceTypedAxis",
        "IdItemMiembro": null,
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CompanyAdministratorsSecuenceTypedAxis",
        "QNameItemMiembro": null,
        "ElementoMiembroTipificado": "<ar_pros:CompanyAdministratorsSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">2</ar_pros:CompanyAdministratorsSequenceDomain>"
      }
    ]
  },
  "cxt_3": {
    "Id": "cxt_3",
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
    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfCompanyShareholdersAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:BeneficialShareholdersOfMoreThan10Member</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ar_pros:CompanyShareholdersSequenceTypedAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ar_pros:CompanyShareholdersSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">3</ar_pros:CompanyShareholdersSequenceDomain></xbrldi:typedMember></xbrli:scenario>",
    "ValoresDimension": [
      {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfCompanyShareholdersAxis",
        "IdItemMiembro": "ar_pros_BeneficialShareholdersOfMoreThan10Member",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyShareholdersAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:BeneficialShareholdersOfMoreThan10Member",
        "ElementoMiembroTipificado": null
      },
      {
        "Explicita": false,
        "IdDimension": "ar_pros_CompanyShareholdersSequenceTypedAxis",
        "IdItemMiembro": null,
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CompanyShareholdersSequenceTypedAxis",
        "QNameItemMiembro": null,
        "ElementoMiembroTipificado": "<ar_pros:CompanyShareholdersSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">3</ar_pros:CompanyShareholdersSequenceDomain>"
      }
    ]
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
  "ar_pros_ReferenceIncorporationAdministrator_e08fa26c-f4b5-41c1-9503-b39f96044863": {
    "Id": "ar_pros_ReferenceIncorporationAdministrator_e08fa26c-f4b5-41c1-9503-b39f96044863",
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
  "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator_5e668e3c-b3a4-4c0b-89d9-07c63a57a627": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTrustPropertyAdministrator_5e668e3c-b3a4-4c0b-89d9-07c63a57a627",
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
  "ar_pros_BusinessOverviewAdministrator_679ce55b-cb7b-4bdb-a3c0-6de6ad16306d": {
    "Id": "ar_pros_BusinessOverviewAdministrator_679ce55b-cb7b-4bdb-a3c0-6de6ad16306d",
    "IdConcepto": "ar_pros_BusinessOverviewAdministrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainActivityAdministrator_fc004c2e-17b8-4934-9b4f-d67be6eedf81": {
    "Id": "ar_pros_MainActivityAdministrator_fc004c2e-17b8-4934-9b4f-d67be6eedf81",
    "IdConcepto": "ar_pros_MainActivityAdministrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_HumanResourcesAdministrator_3a1bcb28-87e9-4383-b4f0-23d00984e8d0": {
    "Id": "ar_pros_HumanResourcesAdministrator_3a1bcb28-87e9-4383-b4f0-23d00984e8d0",
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
  "ar_pros_CorporateStructureAdministrator_ea551b0e-a677-464d-b187-1ee512a18b09": {
    "Id": "ar_pros_CorporateStructureAdministrator_ea551b0e-a677-464d-b187-1ee512a18b09",
    "IdConcepto": "ar_pros_CorporateStructureAdministrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator_a93263fa-8443-4253-9d4d-0e538684be0d": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsAdministrator_a93263fa-8443-4253-9d4d-0e538684be0d",
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
  "ar_pros_DirectorsAndShareholdersAdministrator_4e757b70-ba46-4ed8-a3e5-1519cc7e4b37": {
    "Id": "ar_pros_DirectorsAndShareholdersAdministrator_4e757b70-ba46-4ed8-a3e5-1519cc7e4b37",
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
  "ar_pros_AdministratorName_abec3d0f-bdb3-4ba6-ade0-f19783e3bb85": {
    "Id": "ar_pros_AdministratorName_abec3d0f-bdb3-4ba6-ade0-f19783e3bb85",
    "IdConcepto": "ar_pros_AdministratorName",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorFirstName_227764d5-2d27-481c-b57d-5f9a2c8390b2": {
    "Id": "ar_pros_AdministratorFirstName_227764d5-2d27-481c-b57d-5f9a2c8390b2",
    "IdConcepto": "ar_pros_AdministratorFirstName",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorSecondName_11f6bb72-e828-4df1-87f1-67ef89f30ba6": {
    "Id": "ar_pros_AdministratorSecondName_11f6bb72-e828-4df1-87f1-67ef89f30ba6",
    "IdConcepto": "ar_pros_AdministratorSecondName",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorDirectorshipType_68705383-b874-4fd8-a0f4-c0be246ef11f": {
    "Id": "ar_pros_AdministratorDirectorshipType_68705383-b874-4fd8-a0f4-c0be246ef11f",
    "IdConcepto": "ar_pros_AdministratorDirectorshipType",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorParticipateInCommittees_aab858c9-b8c6-4dd6-9c96-468c2a56d5a8": {
    "Id": "ar_pros_AdministratorParticipateInCommittees_aab858c9-b8c6-4dd6-9c96-468c2a56d5a8",
    "IdConcepto": "ar_pros_AdministratorParticipateInCommittees",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  /*"ar_pros_AdministratorDesignationDate_297369a4-8529-47be-82ba-0915829f5d3a": {
    "Id": "ar_pros_AdministratorDesignationDate_297369a4-8529-47be-82ba-0915829f5d3a",
    "IdConcepto": "ar_pros_AdministratorDesignationDate",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultAdministratorDesignationDate"
  },*/
  "ar_pros_AdministratorAssemblyTypePros_295c1722-976d-465a-b4a9-3cc7e54322bd": {
    "Id": "ar_pros_AdministratorAssemblyTypePros_295c1722-976d-465a-b4a9-3cc7e54322bd",
    "IdConcepto": "ar_pros_AdministratorAssemblyTypePros",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorPeriodForWhichTheyWereElected_ac25fdee-0f4f-40be-87df-4a35c02820d2": {
    "Id": "ar_pros_AdministratorPeriodForWhichTheyWereElected_ac25fdee-0f4f-40be-87df-4a35c02820d2",
    "IdConcepto": "ar_pros_AdministratorPeriodForWhichTheyWereElected",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorPosition_cb2346fb-0b24-4718-a4f4-70a7c94c453b": {
    "Id": "ar_pros_AdministratorPosition_cb2346fb-0b24-4718-a4f4-70a7c94c453b",
    "IdConcepto": "ar_pros_AdministratorPosition",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorTimeWorkedInTheIssuer_779a9b82-f9e0-4fba-8f06-573639022cde": {
    "Id": "ar_pros_AdministratorTimeWorkedInTheIssuer_779a9b82-f9e0-4fba-8f06-573639022cde",
    "IdConcepto": "ar_pros_AdministratorTimeWorkedInTheIssuer",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorShareholding_7eae6cea-0fff-47b7-928c-6da4f7201eb6": {
    "Id": "ar_pros_AdministratorShareholding_7eae6cea-0fff-47b7-928c-6da4f7201eb6",
    "IdConcepto": "ar_pros_AdministratorShareholding",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorAdditionalInformation_5a437f7c-1234-4c97-b4ae-38f92db5ad6a": {
    "Id": "ar_pros_AdministratorAdditionalInformation_5a437f7c-1234-4c97-b4ae-38f92db5ad6a",
    "IdConcepto": "ar_pros_AdministratorAdditionalInformation",
    "IdContextoPlantilla": "cxt_2",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ShareholderNameCorporateName_eb573cba-269a-41d5-9988-c4c8471da553": {
    "Id": "ar_pros_ShareholderNameCorporateName_eb573cba-269a-41d5-9988-c4c8471da553",
    "IdConcepto": "ar_pros_ShareholderNameCorporateName",
    "IdContextoPlantilla": "cxt_3",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ShareholderFirstName_1b52de19-dbf1-47e3-80f3-8afa1a1e3d85": {
    "Id": "ar_pros_ShareholderFirstName_1b52de19-dbf1-47e3-80f3-8afa1a1e3d85",
    "IdConcepto": "ar_pros_ShareholderFirstName",
    "IdContextoPlantilla": "cxt_3",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ShareholderSecondName_395f27d5-0b2d-44c0-9e3a-de7514e1f703": {
    "Id": "ar_pros_ShareholderSecondName_395f27d5-0b2d-44c0-9e3a-de7514e1f703",
    "IdConcepto": "ar_pros_ShareholderSecondName",
    "IdContextoPlantilla": "cxt_3",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ShareholderShareholding_db6eb58e-20fb-489e-89af-e1a57d95a7ef": {
    "Id": "ar_pros_ShareholderShareholding_db6eb58e-20fb-489e-89af-e1a57d95a7ef",
    "IdConcepto": "ar_pros_ShareholderShareholding",
    "IdContextoPlantilla": "cxt_3",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
 },

  "ar_pros_ShareholderAdditionalInformation_d2847bfa-1236-4bd5-a354-3dc11284a1d5": {
    "Id": "ar_pros_ShareholderAdditionalInformation_d2847bfa-1236-4bd5-a354-3dc11284a1d5",
    "IdConcepto": "ar_pros_ShareholderAdditionalInformation",
    "IdContextoPlantilla": "cxt_3",
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