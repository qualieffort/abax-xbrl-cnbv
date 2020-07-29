///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/420000-HBIS5
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_420000_HBIS5 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_420000_HBIS5
         */
        constructor() {

            this.ListadoDeFormulas = {


                'LA_FIDEICOMITENTE_historia_y_desarrollo_del_fideicomitente_ar_pros_HistoryAndDevelopmentOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_historia_y_desarrollo_del_fideicomitente_ar_pros_HistoryAndDevelopmentOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HistoryAndDevelopmentOfTheSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_BusinessOverview': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_BusinessOverview',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BusinessOverview',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_MainActivity': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_MainActivity',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MainActivity',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_CorporateStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_CorporateStructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CorporateStructure',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_DescriptionOfKeyAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_DescriptionOfKeyAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfKeyAssets',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_SharesRepresentingTheCapital': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_SharesRepresentingTheCapital',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SharesRepresentingTheCapital',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_DirectorsAndShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_DirectorsAndShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DirectorsAndShareholders',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_AssociationAndOtherAgreements': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_AssociationAndOtherAgreements',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AssociationAndOtherAgreements',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterestOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_FIDEICOMITENTE_obligatorio_condicional_no_vacios_ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterestOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterestOfTheSettlor',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
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
                'La_Fideicomitente_obligatorios_IncorporacionPorReferencia__ar_pros_ShareholderNameCorporateName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La_Fideicomitente_obligatorios_IncorporacionPorReferencia__ar_pros_ShareholderNameCorporateName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_ShareholderNameCorporateName",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationSettlor",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
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
  "ar_pros_ReferenceIncorporationSettlor_0d2c7c4a-84ea-4772-9fb4-1a8e5b44ffa0": {
    "Id": "ar_pros_ReferenceIncorporationSettlor_0d2c7c4a-84ea-4772-9fb4-1a8e5b44ffa0",
    "IdConcepto": "ar_pros_ReferenceIncorporationSettlor",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationSettlor"
  },
  "ar_pros_HistoryAndDevelopmentOfTheSettlor_8c5a3e36-2d4a-4dc5-88f6-e9d7eab835e1": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTheSettlor_8c5a3e36-2d4a-4dc5-88f6-e9d7eab835e1",
    "IdConcepto": "ar_pros_HistoryAndDevelopmentOfTheSettlor",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BusinessOverview_1f881885-4b1f-4204-84e9-c6f838071dcc": {
    "Id": "ar_pros_BusinessOverview_1f881885-4b1f-4204-84e9-c6f838071dcc",
    "IdConcepto": "ar_pros_BusinessOverview",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainActivity_3cd5b176-6133-4df1-bd85-ef49b3dca5ec": {
    "Id": "ar_pros_MainActivity_3cd5b176-6133-4df1-bd85-ef49b3dca5ec",
    "IdConcepto": "ar_pros_MainActivity",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CorporateStructure_09924abf-7bdb-4ad6-9740-d1989c4d6ee5": {
    "Id": "ar_pros_CorporateStructure_09924abf-7bdb-4ad6-9740-d1989c4d6ee5",
    "IdConcepto": "ar_pros_CorporateStructure",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfKeyAssets_b8856ba9-e1c0-4b8e-bb5a-cfb2e7d08e05": {
    "Id": "ar_pros_DescriptionOfKeyAssets_b8856ba9-e1c0-4b8e-bb5a-cfb2e7d08e05",
    "IdConcepto": "ar_pros_DescriptionOfKeyAssets",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor_81e723bd-d7a3-47bb-9643-2e9f76050b87": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor_81e723bd-d7a3-47bb-9643-2e9f76050b87",
    "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedingsSettlor",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SharesRepresentingTheCapital_d23d76f8-64d1-493f-a2d0-3c5c7df7d190": {
    "Id": "ar_pros_SharesRepresentingTheCapital_d23d76f8-64d1-493f-a2d0-3c5c7df7d190",
    "IdConcepto": "ar_pros_SharesRepresentingTheCapital",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DirectorsAndShareholders_2dd8d1f2-7c41-404c-b664-7991e578cbb4": {
    "Id": "ar_pros_DirectorsAndShareholders_2dd8d1f2-7c41-404c-b664-7991e578cbb4",
    "IdConcepto": "ar_pros_DirectorsAndShareholders",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AssociationAndOtherAgreements_f1afcabc-8ce2-4b13-a9ab-fee08bb1ef2a": {
    "Id": "ar_pros_AssociationAndOtherAgreements_f1afcabc-8ce2-4b13-a9ab-fee08bb1ef2a",
    "IdConcepto": "ar_pros_AssociationAndOtherAgreements",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterestOfTheSettlor_0cf521db-0372-4cc5-b895-d19936dceebf": {
    "Id": "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterestOfTheSettlor_0cf521db-0372-4cc5-b895-d19936dceebf",
    "IdConcepto": "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterestOfTheSettlor",
    "IdContextoPlantilla": "cxt",
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
                    "IdContextoPlantilla": "cxt",
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
                    "IdContextoPlantilla": "cxt",
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
                    "IdContextoPlantilla": "cxt",
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
                    "IdContextoPlantilla": "cxt",
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
                    "IdContextoPlantilla": "cxt",
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