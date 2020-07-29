///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/424000-L
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_L implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_L
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Informacion_Financiera_obligatorio_descripcion_general_ar_pros_SelectedFinancialInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_obligatorio_descripcion_general_ar_pros_SelectedFinancialInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedFinancialInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_PublicDebt': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_PublicDebt',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PublicDebt',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFinancialInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFinancialInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_OperationResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_OperationResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OperationResults',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFinancialInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_FinancialPositionLiquidityAndCapitalResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_FinancialPositionLiquidityAndCapitalResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FinancialPositionLiquidityAndCapitalResources',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFinancialInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_InternalControl': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_InternalControl',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InternalControl',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFinancialInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_EstimatesCriticalAccountingProvisionsOrReserves': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'INF_FINANCIERA_obligatorio_condicional_no_vacios_incorporacion_por_referencia_ar_pros_EstimatesCriticalAccountingProvisionsOrReserves',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EstimatesCriticalAccountingProvisionsOrReserves',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFinancialInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
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

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationFinancialInformation_43a91dbe-fd5d-4a6d-bb4b-0a9e19596807": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformation_43a91dbe-fd5d-4a6d-bb4b-0a9e19596807",
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
  "ar_pros_SelectedFinancialInformation_d74a2c9e-3a3d-499f-bb8a-fc3467389861": {
    "Id": "ar_pros_SelectedFinancialInformation_d74a2c9e-3a3d-499f-bb8a-fc3467389861",
    "IdConcepto": "ar_pros_SelectedFinancialInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PublicDebt_f42a1972-9060-4cc5-a709-f0fa7651b448": {
    "Id": "ar_pros_PublicDebt_f42a1972-9060-4cc5-a709-f0fa7651b448",
    "IdConcepto": "ar_pros_PublicDebt",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality_b3ea3196-e4f4-47e7-a810-963089e0231c": {
    "Id": "ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality_b3ea3196-e4f4-47e7-a810-963089e0231c",
    "IdConcepto": "ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OperationResults_3b4ef0f1-743c-4743-b579-7e610a9a8868": {
    "Id": "ar_pros_OperationResults_3b4ef0f1-743c-4743-b579-7e610a9a8868",
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
  "ar_pros_FinancialPositionLiquidityAndCapitalResources_b17683fc-d604-47f0-b6ef-2659bd6c44d1": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResources_b17683fc-d604-47f0-b6ef-2659bd6c44d1",
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
  "ar_pros_InternalControl_f958e6a0-9b1e-4d6d-a12d-9ce8d71f5106": {
    "Id": "ar_pros_InternalControl_f958e6a0-9b1e-4d6d-a12d-9ce8d71f5106",
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
  "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves_673353e5-db8c-42ab-973c-d90e3c47da0e": {
    "Id": "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves_673353e5-db8c-42ab-973c-d90e3c47da0e",
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