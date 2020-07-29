///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/425000-NBIS2
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_425000_NBIS2 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_425000_NBIS2
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_SelectedFinancialInformationOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_SelectedFinancialInformationOfTheTrust',
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
                ),
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_BalanceAndTrustResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_BalanceAndTrustResults',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BalanceAndTrustResults',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_SourceAndApplicationOfResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_SourceAndApplicationOfResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SourceAndApplicationOfResources',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_MovementsInTheAccountsForCashManagement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_MovementsInTheAccountsForCashManagement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MovementsInTheAccountsForCashManagement',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_IndexesAndFinancialRatios': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_IndexesAndFinancialRatios',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IndexesAndFinancialRatios',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_RelevantCreditReportTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_RelevantCreditReportTrust',
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
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults',
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
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_OperationResultsTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_OperationResultsTrust',
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
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust',
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
                'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_InternalControlTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_del_Fideicomiso_no_vacios_ar_pros_InternalControlTrust',
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
  "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust_287ffe85-28f6-4b16-8fef-c05c796a712d": {
    "Id": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust_287ffe85-28f6-4b16-8fef-c05c796a712d",
    "IdConcepto": "ar_pros_ReferenceIncorporationFinancialInformationOfTheTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationFinancialInformationOfTheTrust"
  },
  "ar_pros_SelectedFinancialInformationOfTheTrust_65996a5e-6ec4-4398-997a-4fc7005f07ea": {
    "Id": "ar_pros_SelectedFinancialInformationOfTheTrust_65996a5e-6ec4-4398-997a-4fc7005f07ea",
    "IdConcepto": "ar_pros_SelectedFinancialInformationOfTheTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BalanceAndTrustResults_4c4f63c1-4825-41bd-9739-a5f2b0b46913": {
    "Id": "ar_pros_BalanceAndTrustResults_4c4f63c1-4825-41bd-9739-a5f2b0b46913",
    "IdConcepto": "ar_pros_BalanceAndTrustResults",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SourceAndApplicationOfResources_f47c0d5d-d0ef-4fb6-8e80-67d0bbd94e7e": {
    "Id": "ar_pros_SourceAndApplicationOfResources_f47c0d5d-d0ef-4fb6-8e80-67d0bbd94e7e",
    "IdConcepto": "ar_pros_SourceAndApplicationOfResources",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MovementsInTheAccountsForCashManagement_8cbc456c-e240-4e53-9935-941230a58b24": {
    "Id": "ar_pros_MovementsInTheAccountsForCashManagement_8cbc456c-e240-4e53-9935-941230a58b24",
    "IdConcepto": "ar_pros_MovementsInTheAccountsForCashManagement",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IndexesAndFinancialRatios_e4ffa673-d62a-4f5f-b884-e68722ebd91f": {
    "Id": "ar_pros_IndexesAndFinancialRatios_e4ffa673-d62a-4f5f-b884-e68722ebd91f",
    "IdConcepto": "ar_pros_IndexesAndFinancialRatios",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests_d57b0a3c-e194-42d1-b683-514b3fa59e91": {
    "Id": "ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests_d57b0a3c-e194-42d1-b683-514b3fa59e91",
    "IdConcepto": "ar_pros_SelectedFinancialInformationOfTheCompaniesForWhichTheTrustInvests",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RelevantCreditReportTrust_e810d12d-efe5-4265-8b47-f73557e2f976": {
    "Id": "ar_pros_RelevantCreditReportTrust_e810d12d-efe5-4265-8b47-f73557e2f976",
    "IdConcepto": "ar_pros_RelevantCreditReportTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults_150ecfea-3044-4386-9326-17ec45d1fc93": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults_150ecfea-3044-4386-9326-17ec45d1fc93",
    "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnTrustOperatingResults",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OperationResultsTrust_d4ccb96b-33a4-49ec-ade0-b5523c32c540": {
    "Id": "ar_pros_OperationResultsTrust_d4ccb96b-33a4-49ec-ade0-b5523c32c540",
    "IdConcepto": "ar_pros_OperationResultsTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust_19f6021a-8db1-4b08-8c90-4408a96e23dd": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust_19f6021a-8db1-4b08-8c90-4408a96e23dd",
    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesTrust",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InternalControlTrust_92d8d49d-72e4-4d44-9caf-134c8c97d2f4": {
    "Id": "ar_pros_InternalControlTrust_92d8d49d-72e4-4d44-9caf-134c8c97d2f4",
    "IdConcepto": "ar_pros_InternalControlTrust",
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