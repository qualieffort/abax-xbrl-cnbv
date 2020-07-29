///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/424000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_H
         */
        constructor() {

            this.ListadoDeFormulas = {


                'INF_FINANCIERA_obligatorio_descripcion_o_explicacion_de_la_informacion_financiera_seleccionada_ar_pros_ReferenceIncorporationFinancialInformationText': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_obligatorio_descripcion_o_explicacion_de_la_informacion_financiera_seleccionada_ar_pros_ReferenceIncorporationFinancialInformationText',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                IdConcepto: 'ar_pros_ReferenceIncorporationFinancialInformationText',
                                ConteoHechos: false
                            }),
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),

                'INF_FINANCIERA_obligatorio_descripcion_o_explicacion_de_la_informacion_financiera_seleccionada_ar_pros_SelectedFinancialInformationDisclosure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_obligatorio_descripcion_o_explicacion_de_la_informacion_financiera_seleccionada_ar_pros_SelectedFinancialInformationDisclosure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion:'(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedFinancialInformationDisclosure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_SelectedQuarterlyFinancialInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_SelectedQuarterlyFinancialInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SelectedQuarterlyFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_FinancialInformationByBusinessLine': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_FinancialInformationByBusinessLine',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_FinancialInformationByBusinessLine",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_RelevantCreditReport': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_RelevantCreditReport',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_RelevantCreditReport",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_CommentsAndManagementAnalysisOnOperatingResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_CommentsAndManagementAnalysisOnOperatingResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnOperatingResults",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_OperationResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_OperationResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_OperationResults",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResources",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_InternalControl': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_InternalControl',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_InternalControl",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                    }
                ),
                'INF_FINANCIERA_no_vacios_ar_pros_EstimatesCriticalAccountingProvisionsOrReserves': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_no_vacios_ar_pros_EstimatesCriticalAccountingProvisionsOrReserves',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or not(variable2 == "NO")',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de no utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
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
  "pesos": {
    "Id": "pesos",
    "Tipo": 1,
    "Medidas": [
      {
        "Nombre": "#medida_MXN",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "MedidasDenominador": [],
    "MedidasNumerador": []
  }
};
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationFinancialInformation_c75946f3-3485-454a-b416-fdf2d841570d": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformation_c75946f3-3485-454a-b416-fdf2d841570d",
    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationFinancialInformation"
    },
    "ar_pros_ReferenceIncorporationFinancialInformationText_c75946f3-3485-454a-b416-fdf2d841570d": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformationText_c75946f3-3485-454a-b416-fdf2d841570d",
    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationText",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
        "Valor": "#valorDefaultReferenceIncorporationFinancialInformationText"
   },
  "ar_pros_SelectedFinancialInformationDisclosure_a061f5f1-8c78-4156-bdf8-dbeed50c75b0": {
    "Id": "ar_pros_SelectedFinancialInformationDisclosure_a061f5f1-8c78-4156-bdf8-dbeed50c75b0",
    "IdConcepto": "ar_pros_SelectedFinancialInformationDisclosure",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SelectedQuarterlyFinancialInformation_88948703-7c3d-40ba-9a51-a9df4b4f4a20": {
    "Id": "ar_pros_SelectedQuarterlyFinancialInformation_88948703-7c3d-40ba-9a51-a9df4b4f4a20",
    "IdConcepto": "ar_pros_SelectedQuarterlyFinancialInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer_a126f33c-a14a-4dad-9f2b-c398b7f87e9d": {
    "Id": "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer_a126f33c-a14a-4dad-9f2b-c398b7f87e9d",
    "IdConcepto": "ar_pros_InformationInCaseOfIssuesGuaranteedBySubsidiariesOfTheIssuer",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialInformationByBusinessLine_d92192ed-b7f3-4d79-ac22-75f327e795ca": {
    "Id": "ar_pros_FinancialInformationByBusinessLine_d92192ed-b7f3-4d79-ac22-75f327e795ca",
    "IdConcepto": "ar_pros_FinancialInformationByBusinessLine",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RelevantCreditReport_409b9004-7d2d-48f9-a28b-944f3cbd3797": {
    "Id": "ar_pros_RelevantCreditReport_409b9004-7d2d-48f9-a28b-944f3cbd3797",
    "IdConcepto": "ar_pros_RelevantCreditReport",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndManagementAnalysisOnOperatingResults_da818f7d-df73-491c-bd01-da2b5d7193ed": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnOperatingResults_da818f7d-df73-491c-bd01-da2b5d7193ed",
    "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnOperatingResults",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OperationResults_3cdedc04-da93-439d-a610-5941bbc6a04b": {
    "Id": "ar_pros_OperationResults_3cdedc04-da93-439d-a610-5941bbc6a04b",
    "IdConcepto": "ar_pros_OperationResults",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialPositionLiquidityAndCapitalResources_2061338e-fe66-40e0-ad41-c6f3bc7e0eaa": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResources_2061338e-fe66-40e0-ad41-c6f3bc7e0eaa",
    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResources",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InternalControl_b0b9713c-685a-4a02-afb4-3e59341c5144": {
    "Id": "ar_pros_InternalControl_b0b9713c-685a-4a02-afb4-3e59341c5144",
    "IdConcepto": "ar_pros_InternalControl",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves_a669aaf3-585e-4a07-80d0-0c5e0ea9f722": {
    "Id": "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves_a669aaf3-585e-4a07-80d0-0c5e0ea9f722",
    "IdConcepto": "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves",
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