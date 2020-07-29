///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/427000-HBIS
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_427000_HBIS implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_427000_HBIS
         */
        constructor() {

            this.ListadoDeFormulas = {


                'LA_ADMINISTRACION_obligatorio_Auditores_externos_ar_pros_ExternalAuditors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_Auditores_externos_ar_pros_ExternalAuditors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
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
                            })
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
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_OtherCorporateGovernancePractices': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_OtherCorporateGovernancePractices',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
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
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorsAndShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_AdministratorsAndShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                            {
                                "variable1": {
                                    "Id": "variable1",
                                    "IdConcepto": "ar_pros_AdministratorsAndShareholders",
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
                'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_ShareholderNameCorporateName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorios_IncorporacionPorReferencia__ar_pros_ShareholderNameCorporateName',
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
                                    "IdConcepto": "ar_pros_ReferenceIncorporationAdministration",
                                    "PuedeEliminarse": false,
                                    "PuedeCrearse": false,
                                    "ConteoHechos": false,
                                    "ValorFallback": "INF"
                                }
                            }
                    }
                ),
                'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorName',
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
                'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorFirstName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorFirstName',
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
                'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorDirectorshipType': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorDirectorshipType',
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
                'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorPeriodForWhichTheyWereElected': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorPeriodForWhichTheyWereElected',
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
                'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorPosition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorPosition',
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
                'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorTimeWorkedInTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorTimeWorkedInTheIssuer',
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
                'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorGenderProspectoH': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_condicional_renglon_tabla_administradores_de_la_empresa__ar_pros_AdministratorGenderProspectoH',
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
                'LA_ADMINISTRACION_obligatorio_renglon_tabla_accionistas_de_la_empresa__ar_pros_ShareholderNameCorporateName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'LA_ADMINISTRACION_obligatorio_renglon_tabla_accionistas_de_la_empresa__ar_pros_ShareholderNameCorporateName',
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
  "ar_pros_ReferenceIncorporationAdministration_0e65d890-0e8d-40c4-b367-8950780db928": {
    "Id": "ar_pros_ReferenceIncorporationAdministration_0e65d890-0e8d-40c4-b367-8950780db928",
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
  "ar_pros_ExternalAuditors_0aba69a4-bff1-450c-9893-9d39bc04515d": {
    "Id": "ar_pros_ExternalAuditors_0aba69a4-bff1-450c-9893-9d39bc04515d",
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
  "ar_pros_TransactionsWithRelatedParties_1332fca8-8e99-4ba0-a848-8881ebce4554": {
    "Id": "ar_pros_TransactionsWithRelatedParties_1332fca8-8e99-4ba0-a848-8881ebce4554",
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
  "ar_pros_AdministratorsAndShareholders_f5b08ec0-16ab-4d84-b811-62ecf8d230f8": {
    "Id": "ar_pros_AdministratorsAndShareholders_f5b08ec0-16ab-4d84-b811-62ecf8d230f8",
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
  "ar_pros_AssociationAndOtherAgreements_f602aa20-7ad7-4605-8725-3cc02ea79bd6": {
    "Id": "ar_pros_AssociationAndOtherAgreements_f602aa20-7ad7-4605-8725-3cc02ea79bd6",
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
  "ar_pros_OtherCorporateGovernancePractices_047693ad-0ff4-4e26-8338-9e8a0271a3d6": {
    "Id": "ar_pros_OtherCorporateGovernancePractices_047693ad-0ff4-4e26-8338-9e8a0271a3d6",
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
                    "Valor": "#valorDefaultNo"
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
                }
};
        }
    }

}