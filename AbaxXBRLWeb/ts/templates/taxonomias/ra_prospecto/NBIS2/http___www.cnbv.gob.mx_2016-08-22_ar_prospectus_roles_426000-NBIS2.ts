///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/426000-NBIS2
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_426000_NBIS2 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_426000_NBIS2
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_SelectedFinancialInformationOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_SelectedFinancialInformationOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedFinancialInformationOfTheSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfTheSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_OperationResultsOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_OperationResultsOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OperationResultsOfTheSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfTheSettlor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_InternalControlOfTheSettlor': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Informacion_Financiera_de_la_Fideicomitente_no_vacios_ar_pros_InternalControlOfTheSettlor',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InternalControlOfTheSettlor',
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
  "ar_pros_ReferenceIncorporationSettlorFinancialInformation_570c83b9-bbc5-46f4-bca1-173a894efeec": {
    "Id": "ar_pros_ReferenceIncorporationSettlorFinancialInformation_570c83b9-bbc5-46f4-bca1-173a894efeec",
    "IdConcepto": "ar_pros_ReferenceIncorporationSettlorFinancialInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationSettlorFinancialInformation"
  },
  "ar_pros_SelectedFinancialInformationOfTheSettlor_c06a5962-1459-43de-a8dd-45259225156f": {
    "Id": "ar_pros_SelectedFinancialInformationOfTheSettlor_c06a5962-1459-43de-a8dd-45259225156f",
    "IdConcepto": "ar_pros_SelectedFinancialInformationOfTheSettlor",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfTheSettlor_35134bef-239a-4e6b-b418-a80dd19a8eec": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfTheSettlor_35134bef-239a-4e6b-b418-a80dd19a8eec",
    "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfTheSettlor",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OperationResultsOfTheSettlor_9da9b067-99b4-4fa6-8d8b-3898b9973d4a": {
    "Id": "ar_pros_OperationResultsOfTheSettlor_9da9b067-99b4-4fa6-8d8b-3898b9973d4a",
    "IdConcepto": "ar_pros_OperationResultsOfTheSettlor",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfTheSettlor_51c8f860-2732-457a-8d86-e874776ee85d": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfTheSettlor_51c8f860-2732-457a-8d86-e874776ee85d",
    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfTheSettlor",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InternalControlOfTheSettlor_e48b5217-0229-463e-a204-675c3d5aa3c3": {
    "Id": "ar_pros_InternalControlOfTheSettlor_e48b5217-0229-463e-a204-675c3d5aa3c3",
    "IdConcepto": "ar_pros_InternalControlOfTheSettlor",
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