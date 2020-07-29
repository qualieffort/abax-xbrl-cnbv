///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/427000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_427000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_427000_H
         */
        constructor() {

            this.ListadoDeFormulas = {

                'LA_ADMINISTRACION_obligatorio_Auditores_externos_ar_pros_ReferenceIncorporationAdministrationText': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_Auditores_externos_ar_pros_ReferenceIncorporationAdministrationText',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ReferenceIncorporationAdministrationText',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),

                'LA_ADMINISTRACION_obligatorio_Auditores_externos_ar_pros_ExternalAuditors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_Auditores_externos_ar_pros_ExternalAuditors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExternalAuditors',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TransactionsWithRelatedParties': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TransactionsWithRelatedParties',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TransactionsWithRelatedParties",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),

                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdministratorName",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AssociationAndOtherAgreements': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AssociationAndOtherAgreements',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AssociationAndOtherAgreements",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TotalPercentageOfMenAsRelevantDirectors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TotalPercentageOfMenAsRelevantDirectors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TotalPercentageOfMenAsRelevantDirectors",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }
                             
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TotalPercentageOfWomenAsRelevantDirectors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TotalPercentageOfWomenAsRelevantDirectors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TotalPercentageOfWomenAsRelevantDirectors",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }

                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TotalPercentageOfMenAsCounselors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TotalPercentageOfMenAsCounselors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TotalPercentageOfMenAsCounselors",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }

                            }
                    }
                ),

                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TotalPercentageOfWomenAsCounselors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_TotalPercentageOfWomenAsCounselors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_TotalPercentageOfWomenAsCounselors",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }

                            }
                    }
                ),

                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorFirstName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorFirstName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdministratorFirstName",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorDirectorshipType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorDirectorshipType',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdministratorDirectorshipType",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorPeriodForWhichTheyWereElected': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorPeriodForWhichTheyWereElected',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdministratorPeriodForWhichTheyWereElected",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorPosition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorPosition',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdministratorPosition",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorGenderProspectoH': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorGenderProspectoH',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdministratorGenderProspectoH",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia_EmisoraExtranjera__ar_pros_OtherCorporateGovernancePractices': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia_EmisoraExtranjera__ar_pros_OtherCorporateGovernancePractices',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO" and variable3 == "SI")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no usar Incorporación por referencia y que el concepto "Emisora extranjera" sea "SI".',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no usar Incorporación por referencia y que el concepto "Emisora extranjera" sea "SI".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_OtherCorporateGovernancePractices",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                },
                                "variable2": {
                                    "Id": "variable2",
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                },
                                "variable3": {
                                    "Id": "variable3",
                                    "IdConcepto": "ar_pros_ForeingIssuer",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
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
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia_ar_pros_CompaniesWithCollaborationHasRelationWithIssuerOfAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_CompaniesWithCollaborationHasRelationWithIssuerOfAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0)',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_CompaniesWithCollaborationHasRelationWithIssuerOfAdministrator",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": ""
                                }
                            }
                    }
                )
                ,'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_DescriptionOfTheFormInWhichDirectorsAreDesignated': new model.DefinicionFormula().deserialize({
                    Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_DescriptionOfTheFormInWhichDirectorsAreDesignated',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                    MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                    MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DescriptionOfTheFormInWhichDirectorsAreDesignated",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                })
                , 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_FunctionAndFacultiesOfTheBoardOfDirectors': new model.DefinicionFormula().deserialize({
                    Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_FunctionAndFacultiesOfTheBoardOfDirectors',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                    MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                    MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_FunctionAndFacultiesOfTheBoardOfDirectors",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                })
                ,'Requeridos_ar_pros_DetailBoardOfDirectorsKinship': new model.DefinicionFormula().deserialize({
                    Id: 'Requeridos_ar_pros_DetailBoardOfDirectorsKinship',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "SI")',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres cuando se indica que existe parentesco o afinidad con cualquier consejero o directivo',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres cuando se indica existe parentesco o afinidad con cualquier consejero o directivo',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DetailBoardOfDirectorsKinship",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_IsThereKinshipByConsanguinityOrAffinityBetweenAnyCounselorOrRelevantManager",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                })
                , 'Requeridos_ar_pros_DetailChangesInThePercentageOwnershipOfShareholders': new model.DefinicionFormula().deserialize({
                    Id: 'Requeridos_ar_pros_DetailChangesInThePercentageOwnershipOfShareholders',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "SI")',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres si se presentaron cambios significativos en los últimos 3 años en el porcentaje de propiedad',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres si se presentaron cambios significativos en los últimos 3 años en el porcentaje de propiedad',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DetailChangesInThePercentageOwnershipOfShareholders",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_HaveThereBeenSignificantChangesInThePercentageOfOwnershipMaintainedByTheMainShareholdersInTheLast3Years",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                })
                , 'Requeridos_ar_pros_InformationOnTheControlOfAThirdPartyOverTheIssuer': new model.DefinicionFormula().deserialize({
                    Id: 'Requeridos_ar_pros_InformationOnTheControlOfAThirdPartyOverTheIssuer',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "SI" or variable3 == "SI" or variable4 == "SI")',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres si la emisora es cotrolada por cualquier otra persona física o moral',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres si la emisora es cotrolada por cualquier otra persona física o moral',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_InformationOnTheControlOfAThirdPartyOverTheIssuer",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnotherCompany",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAForeignGovernment",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnyOtherNaturalOrLegalPerson",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                    }
                })
                , 'Requeridos_ar_pros_MainGuidelinesOfBoardOfDirectorsCodesOfConduct': new model.DefinicionFormula().deserialize({
                    Id: 'Requeridos_ar_pros_MainGuidelinesOfBoardOfDirectorsCodesOfConduct',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "SI")',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres si la emisora cuenta con códigos de conducta',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres si la emisora cuenta con códigos de conducta',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_MainGuidelinesOfBoardOfDirectorsCodesOfConduct",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_TheIssuerHasCodesOfConductApplicableToTheBoardOfDirectorsRelevantDirectors",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                })
                ,'Requeridos_ar_pros_ReasonsWhyTheCommitteesAuxiliaryToTheBoardOfDirectorsDoNotHaveAFinancialExpertMember': new model.DefinicionFormula().deserialize({
                    Id: 'Requeridos_ar_pros_ReasonsWhyTheCommitteesAuxiliaryToTheBoardOfDirectorsDoNotHaveAFinancialExpertMember',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '((abaxXBRL.templates.ArProsBasePlantilla.evaluaMiembrosExpertosFinancieros()) || (variable1.length > 0))',
                    MensajeExito: 'En caso de no contar con expertos financieros se debe capturar el concepto "En su caso, motivos por los que el(os) comité(s) auxiliares al consejo de administración, no cuenta con un miembro experto financiero".',
                    MensajeError: 'En caso de no contar con expertos financieros se debe capturar el concepto "En su caso, motivos por los que el(os) comité(s) auxiliares al consejo de administración, no cuenta con un miembro experto financiero".',
                    ExpresionJavaScript: true,
	                VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_ReasonsWhyTheCommitteesAuxiliaryToTheBoardOfDirectorsDoNotHaveAFinancialExpertMember",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false
                        
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_CommiteeFinancialExpert",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                                    "IdItemMiembro": "ar_pros_RelevantDirectorsMember",
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:RelevantDirectorsMember",
                                    "DistintoDe": true,
                                    "EvaluaExplicita": true
                                }
                            ]
                        }
                    }
                })
                , 'LA_ADMINISTRACION_ar_pros_NumberOfMembersInTheBoardOfDirectors': new model.DefinicionFormula().deserialize({
                    Id: 'LA_ADMINISTRACION_ar_pros_NumberOfMembersInTheBoardOfDirectors',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'abaxXBRL.templates.ArProsBasePlantilla.evaluaCantidadMiembrosAdministradoresEmpresa()',
                    MensajeExito: 'El "Número de miembros que integran el Consejo de Administración" debe coincidir con el número de registros en la tabla de "Administradores de la empresa".',
                    MensajeError: 'El "Número de miembros que integran el Consejo de Administración" debe coincidir con el número de registros en la tabla de "Administradores de la empresa".',
                    VariablesCoincidenPeriodo: true,
                    ExpresionJavaScript: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_NumberOfMembersInTheBoardOfDirectors",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_AdministratorName",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": true,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                                    "IdItemMiembro": "ar_pros_RelevantDirectorsMember",
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:RelevantDirectorsMember",
                                    "DistintoDe": true,
                                    "EvaluaExplicita":true
                                }
                            ],
                        }
                    }
                })
                , 'LA_ADMINISTRACION_ar_pros_AdministratorSecondName': new model.DefinicionFormula().deserialize({
                    Id: 'LA_ADMINISTRACION_ar_pros_AdministratorSecondName',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or variable2 == "SI" ',
                    MensajeExito: 'El apellido materno es requerido para administradores no extranjeros.".',
                    MensajeError: 'El apellido materno es requerido para administradores no extranjeros.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_AdministratorSecondName",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ForeignAdministrator",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
				            "MismasDimensiones": true
                        }
                    }
                })
                , 'LA_ADMINISTRACION_ar_pros_ShareholderFirstName': new model.DefinicionFormula().deserialize({
                    Id: 'LA_ADMINISTRACION_ar_pros_ShareholderFirstName',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or variable2 != "Física" ',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                    MensajeError: 'El Apellido Paterno es requerido cuando el Tipo de Persona es Física.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_ShareholderFirstName",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ShareholderType",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
				            "MismasDimensiones": true
                        }
                    }
                })
                , 'LA_ADMINISTRACION_ar_pros_ShareholderSecondName': new model.DefinicionFormula().deserialize({
                    Id: 'LA_ADMINISTRACION_ar_pros_ShareholderSecondName',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or variable2 != "Física" ',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                    MensajeError: 'El apellido materno es requerido cuando el Tipo de Persona es Física.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_ShareholderSecondName",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ShareholderType",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "MismasDimensiones": true
                        }
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
  "ar_pros_ReferenceIncorporationAdministration_2b39479b-3795-4b0b-bace-24c845d9a591": {
    "Id": "ar_pros_ReferenceIncorporationAdministration_2b39479b-3795-4b0b-bace-24c845d9a591",
    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationAdministration"
     },
   "ar_pros_ReferenceIncorporationAdministrationText_2b39479b-3795-4b0b-bace-24c845d9a591": {
   "Id": "ar_pros_ReferenceIncorporationAdministrationText_2b39479b-3795-4b0b-bace-24c845d9a591",
   "IdConcepto": "ar_pros_ReferenceIncorporationAdministrationText",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
       "Valor": "#valorDefaultReferenceIncorporationAdministrationText"
   },
  "ar_pros_ExternalAuditors_9c9da18a-f62c-48a8-a6a9-c3bc9616b4c0": {
    "Id": "ar_pros_ExternalAuditors_9c9da18a-f62c-48a8-a6a9-c3bc9616b4c0",
    "IdConcepto": "ar_pros_ExternalAuditors",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TransactionsWithRelatedParties_690d35c3-ff0c-48a3-bd67-dd3d0da19037": {
    "Id": "ar_pros_TransactionsWithRelatedParties_690d35c3-ff0c-48a3-bd67-dd3d0da19037",
    "IdConcepto": "ar_pros_TransactionsWithRelatedParties",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },

  "ar_pros_NumberOfMembersInTheBoardOfDirectors_690d35c3-ff0c-48a3-bd67-dd3d0da19037": {
   "Id": "ar_pros_NumberOfMembersInTheBoardOfDirectors_690d35c3-ff0c-48a3-bd67-dd3d0da19037",
    "IdConcepto": "ar_pros_NumberOfMembersInTheBoardOfDirectors",
  "IdContextoPlantilla": "ctx_2014",
  "Hechos": [],
  "IdUnidadPlantilla": "PURE",
  "ValorNumerador": null,
  "ValorDenominador": null,
  "Precision": null,
  "Decimales": "0",
  "Valor": "#valorDefaultNumerico"
                },
  "ar_pros_DescriptionOfTheFormInWhichDirectorsAreDesignated_690d35c3-ff0c-48a3-bd67-dd3d0da19037": {
  "Id": "ar_pros_DescriptionOfTheFormInWhichDirectorsAreDesignated_690d35c3-ff0c-48a3-bd67-dd3d0da19037",
  "IdConcepto": "ar_pros_DescriptionOfTheFormInWhichDirectorsAreDesignated",
  "IdContextoPlantilla": "ctx_2014",
  "Hechos": [],
  "IdUnidadPlantilla": null,
  "ValorNumerador": null,
  "ValorDenominador": null,
  "Precision": null,
  "Decimales": null,
  "Valor": "#valorDefaultNoNumerico"
   },
   "ar_pros_FunctionAndFacultiesOfTheBoardOfDirectors_690d35c3-ff0c-48a3-bd67-dd3d0da19037": {
   "Id": "ar_pros_FunctionAndFacultiesOfTheBoardOfDirectors_690d35c3-ff0c-48a3-bd67-dd3d0da19037",
   "IdConcepto": "ar_pros_FunctionAndFacultiesOfTheBoardOfDirectors",
   "IdContextoPlantilla": "ctx_2014",
   "Hechos": [],
   "IdUnidadPlantilla": null,
   "ValorNumerador": null,
   "ValorDenominador": null,
   "Precision": null,
   "Decimales": null,
   "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdministratorsAndShareholders_e6cd04d1-1157-42e6-bb01-9efcd0fd258b": {
    "Id": "ar_pros_AdministratorsAndShareholders_e6cd04d1-1157-42e6-bb01-9efcd0fd258b",
    "IdConcepto": "ar_pros_AdministratorsAndShareholders",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AssociationAndOtherAgreements_d4b1549f-10b1-43cc-b9be-bdd023d92c1e": {
    "Id": "ar_pros_AssociationAndOtherAgreements_d4b1549f-10b1-43cc-b9be-bdd023d92c1e",
    "IdConcepto": "ar_pros_AssociationAndOtherAgreements",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherCorporateGovernancePractices_b603fc3b-c32c-44fa-a14d-091bccb67ca0": {
    "Id": "ar_pros_OtherCorporateGovernancePractices_b603fc3b-c32c-44fa-a14d-091bccb67ca0",
    "IdConcepto": "ar_pros_OtherCorporateGovernancePractices",
    "IdContextoPlantilla": "ctx_2014",
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
      "IdContextoPlantilla": "ctx_2014",
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
      "IdContextoPlantilla": "ctx_2014",
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
      "IdContextoPlantilla": "ctx_2014",
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
      "IdContextoPlantilla": "ctx_2014",
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
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultHasAPolicyOrProgramOfLaborInclusion"
  },
  "DescriptionOfThePolicyOrProgramOfLaborInclusion_0000-0000-0000-0000-20180116": {
      "Id": "DescriptionOfThePolicyOrProgramOfLaborInclusion_0000-0000-0000-0000-20180116",
      "IdConcepto": "ar_pros_DescriptionOfThePolicyOrProgramOfLaborInclusion",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "DescriptionOfTheFunctionsOfTheAuxiliaryCommitteesToTheBoardOfDirectors-0000-0000-0000": {
      "Id": "DescriptionOfTheFunctionsOfTheAuxiliaryCommitteesToTheBoardOfDirectors-0000-0000-0000",
      "IdConcepto": "ar_pros_DescriptionOfTheFunctionsOfTheAuxiliaryCommitteesToTheBoardOfDirectors",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ReasonsWhyTheCommitteesAuxiliaryToTheBoardOfDirectorsDoNotHaveAFinancialExpertMember-0000-0000-0000": {
      "Id": "ReasonsWhyTheCommitteesAuxiliaryToTheBoardOfDirectorsDoNotHaveAFinancialExpertMember-0000-0000-0000",
      "IdConcepto": "ar_pros_ReasonsWhyTheCommitteesAuxiliaryToTheBoardOfDirectorsDoNotHaveAFinancialExpertMember",
      "IdContextoPlantilla": "ctx_2014",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
 "ar_pros_IsThereKinshipByConsanguinityOrAffinityBetweenAnyCounselorOrRelevantManager_0000-0000-0000-0000-20180116": {
 "Id": "ar_pros_IsThereKinshipByConsanguinityOrAffinityBetweenAnyCounselorOrRelevantManager_0000-0000-0000-0000-20180116",
 "IdConcepto": "ar_pros_IsThereKinshipByConsanguinityOrAffinityBetweenAnyCounselorOrRelevantManager",
 "IdContextoPlantilla": "ctx_2014",
 "Hechos": [],
 "IdUnidadPlantilla": null,
 "ValorNumerador": null,
 "ValorDenominador": null,
 "Precision": null,
 "Decimales": null,
 "Valor": "#valorDefaultIsThereKinshipByConsanguinityOrAffinityBetweenAnyCounselorOrRelevantManager"
                },
 "ar_pros_DetailBoardOfDirectorsKinship_0000-0000-0000-0000-20180116": {
     "Id": "ar_pros_DetailBoardOfDirectorsKinship_0000-0000-0000-0000-20180116",
     "IdConcepto": "ar_pros_DetailBoardOfDirectorsKinship",
 "IdContextoPlantilla": "ctx_2014",
 "Hechos": [],
 "IdUnidadPlantilla": null,
 "ValorNumerador": null,
 "ValorDenominador": null,
 "Precision": null,
 "Decimales": null,
 "Valor": "#valorDefaultNoNumerico"
                },
    "ar_pros_HaveThereBeenSignificantChangesInThePercentageOfOwnershipMaintainedByTheMainShareholdersInTheLast3Years_0000-0000-0000-0000-20180116": {
    "Id": "ar_pros_HaveThereBeenSignificantChangesInThePercentageOfOwnershipMaintainedByTheMainShareholdersInTheLast3Years_0000-0000-0000-0000-20180116",
    "IdConcepto": "ar_pros_HaveThereBeenSignificantChangesInThePercentageOfOwnershipMaintainedByTheMainShareholdersInTheLast3Years",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
     "Decimales": null,
     "Valor": "#valorDefaultHaveThereBeenSignificantChangesInThePercentageOfOwnershipMaintainedByTheMainShareholdersInTheLast3Years"
                },
    "ar_pros_DetailChangesInThePercentageOwnershipOfShareholders_0000-0000-0000-0000-20180116": {
    "Id": "ar_pros_DetailChangesInThePercentageOwnershipOfShareholders_0000-0000-0000-0000-20180116",
    "IdConcepto": "ar_pros_DetailChangesInThePercentageOwnershipOfShareholders",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
                },
    "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnotherCompany_0000-0000-0000-0000-20180116": {
    "Id": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnotherCompany_0000-0000-0000-0000-20180116",
    "IdConcepto": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnotherCompany",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultIsTheIssuerControlledDirectlyOrIndirectlyByAnotherCompany"
                },
                "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAForeignGovernment_0000-0000-0000-0000-20180116": {
                    "Id": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAForeignGovernment_0000-0000-0000-0000-20180116",
                    "IdConcepto": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAForeignGovernment",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIsTheIssuerControlledDirectlyOrIndirectlyByAForeignGovernment"
                },
                "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnyOtherNaturalOrLegalPerson_0000-0000-0000-0000-20180116": {
                    "Id": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnyOtherNaturalOrLegalPerson_0000-0000-0000-0000-20180116",
                    "IdConcepto": "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnyOtherNaturalOrLegalPerson",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIsTheIssuerControlledDirectlyOrIndirectlyByAnyOtherNaturalOrLegalPerson"
                },
                "ar_pros_InformationOnTheControlOfAThirdPartyOverTheIssuer_0000-0000-0000-0000-20180116": {
                    "Id": "ar_pros_InformationOnTheControlOfAThirdPartyOverTheIssuer_0000-0000-0000-0000-20180116",
                    "IdConcepto": "ar_pros_InformationOnTheControlOfAThirdPartyOverTheIssuer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                }
                ,"ar_pros_TheIssuerHasCodesOfConductApplicableToTheBoardOfDirectorsRelevantDirectors-0000-0000-0000": {
                    "Id": "ar_pros_TheIssuerHasCodesOfConductApplicableToTheBoardOfDirectorsRelevantDirectors-0000-0000-0000",
                    "IdConcepto": "ar_pros_TheIssuerHasCodesOfConductApplicableToTheBoardOfDirectorsRelevantDirectors",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultIsTheIssuerControlledDirectlyOrIndirectlyByAForeignGovernment"
                }
                ,"ar_pros_MainGuidelinesOfBoardOfDirectorsCodesOfConduct-0000-0000-0000": {
                    "Id": "ar_pros_MainGuidelinesOfBoardOfDirectorsCodesOfConduct-0000-0000-0000",
                    "IdConcepto": "ar_pros_MainGuidelinesOfBoardOfDirectorsCodesOfConduct",
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