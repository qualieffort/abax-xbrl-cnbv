///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/425000-NBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_425000_NBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_425000_NBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_RelevantCreditReportTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_RelevantCreditReportTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RelevantCreditReportTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_EstimatesCriticalAccountingProvisionsOrReservesTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_EstimatesCriticalAccountingProvisionsOrReservesTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EstimatesCriticalAccountingProvisionsOrReservesTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_OperationResultsTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_OperationResultsTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OperationResultsTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_InternalControlTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Información_Financiera_de_Fideicomitente_no_vacios_ar_pros_InternalControlTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InternalControlTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Información_financiero_Seleccionada_del_Fideicomiso_ar_pros_SelectedFinancialInformationOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Información_financiero_Seleccionada_del_Fideicomiso_ar_pros_SelectedFinancialInformationOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedFinancialInformationOfTheTrust',
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

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust_6c7cd10e-1924-438f-be16-a019446e23a0": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust_6c7cd10e-1924-438f-be16-a019446e23a0",
    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationFinancialInformationOfTheTrust"
  },
  "ar_pros_SelectedFinancialInformationOfTheTrust_e108acd3-6e22-4992-a5fa-175b2c40533b": {
    "Id": "ar_pros_SelectedFinancialInformationOfTheTrust_e108acd3-6e22-4992-a5fa-175b2c40533b",
    "IdConcepto": "ar_pros_SelectedFinancialInformationOfTheTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RelevantCreditReportTrust_cd3f258a-476a-4096-8ce7-4a93621c7abe": {
    "Id": "ar_pros_RelevantCreditReportTrust_cd3f258a-476a-4096-8ce7-4a93621c7abe",
    "IdConcepto": "ar_pros_RelevantCreditReportTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults_e1eef2fc-1993-4282-8da7-8b0a3f2406fb": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults_e1eef2fc-1993-4282-8da7-8b0a3f2406fb",
    "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OperationResultsTrust_50de8b63-e569-42e9-8c91-a8114e74e4ad": {
    "Id": "ar_pros_OperationResultsTrust_50de8b63-e569-42e9-8c91-a8114e74e4ad",
    "IdConcepto": "ar_pros_OperationResultsTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust_d985a30a-7042-4f0c-adc2-f37865246e09": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust_d985a30a-7042-4f0c-adc2-f37865246e09",
    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InternalControlTrust_793f7ca9-8287-4015-9c21-bb1ea929933b": {
    "Id": "ar_pros_InternalControlTrust_793f7ca9-8287-4015-9c21-bb1ea929933b",
    "IdConcepto": "ar_pros_InternalControlTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EstimatesCriticalAccountingProvisionsOrReservesTrust_3bfbed87-b0a5-4fee-ab5c-3b030587ca5e": {
    "Id": "ar_pros_EstimatesCriticalAccountingProvisionsOrReservesTrust_3bfbed87-b0a5-4fee-ab5c-3b030587ca5e",
    "IdConcepto": "ar_pros_EstimatesCriticalAccountingProvisionsOrReservesTrust",
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