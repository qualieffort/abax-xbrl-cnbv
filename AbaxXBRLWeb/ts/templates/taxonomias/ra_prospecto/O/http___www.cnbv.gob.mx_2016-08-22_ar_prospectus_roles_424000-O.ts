///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/424000-O
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_O implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_424000_O
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_SelectedFinancialInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_SelectedFinancialInformation',
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
                'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_PublicDebt': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_PublicDebt',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PublicDebt',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_OperationResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_OperationResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OperationResults',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_FinancialPositionLiquidityAndCapitalResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_FinancialPositionLiquidityAndCapitalResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FinancialPositionLiquidityAndCapitalResources',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_InternalControl': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_InternalControl',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InternalControl',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_EstimatesCriticalAccountingProvisionsOrReserves': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Informacion_Financiera_no_vacia_ar_pros_EstimatesCriticalAccountingProvisionsOrReserves',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EstimatesCriticalAccountingProvisionsOrReserves',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
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
  "ar_pros_ReferenceIncorporationFinancialInformation_1d47baa8-0aeb-4285-9e8d-f4dd65dfd8af": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformation_1d47baa8-0aeb-4285-9e8d-f4dd65dfd8af",
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
  "ar_pros_SelectedFinancialInformation_040a1102-959b-4b4a-bd84-53691b99a611": {
    "Id": "ar_pros_SelectedFinancialInformation_040a1102-959b-4b4a-bd84-53691b99a611",
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
  "ar_pros_PublicDebt_8baf4253-a770-4ce4-aa3c-03bed4e5538e": {
    "Id": "ar_pros_PublicDebt_8baf4253-a770-4ce4-aa3c-03bed4e5538e",
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
  "ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality_c0fb1507-1f36-4d5b-b51b-91a418a09b71": {
    "Id": "ar_pros_CommentsAndAnalysisOfTheFederalEntityOrMunicipality_c0fb1507-1f36-4d5b-b51b-91a418a09b71",
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
  "ar_pros_OperationResults_baac070b-fdcc-45e6-9b0d-30dd3c5b5b86": {
    "Id": "ar_pros_OperationResults_baac070b-fdcc-45e6-9b0d-30dd3c5b5b86",
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
  "ar_pros_FinancialPositionLiquidityAndCapitalResources_1c93eacf-f047-41c1-9f61-7843b54bd88d": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResources_1c93eacf-f047-41c1-9f61-7843b54bd88d",
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
  "ar_pros_InternalControl_e39c43d1-cd0a-48ce-9ad2-dbfa7d762b34": {
    "Id": "ar_pros_InternalControl_e39c43d1-cd0a-48ce-9ad2-dbfa7d762b34",
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
  "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves_ba7e7519-f215-4529-91cd-dd7efd2d494f": {
    "Id": "ar_pros_EstimatesCriticalAccountingProvisionsOrReserves_ba7e7519-f215-4529-91cd-dd7efd2d494f",
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