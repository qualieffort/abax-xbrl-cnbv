///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/428000-HBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_428000_HBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_428000_HBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfInternalManagement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfInternalManagement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfInternalManagement',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationInternalManagement',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_InternalControlOfInternalManagement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_InternalControlOfInternalManagement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_InternalControlOfInternalManagement',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationInternalManagement',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_OperationResultsOfInternalManagement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_OperationResultsOfInternalManagement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OperationResultsOfInternalManagement',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationInternalManagement',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfInternalManagement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_no_Vacio_Incorporacion_Referencia_ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfInternalManagement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfInternalManagement',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationInternalManagement',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Información_financiera_seleccionada_de_la_Admisnitración_Interna_ar_pros_SelectedFinancialInformationOfInternalManagement': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Información_financiera_seleccionada_de_la_Admisnitración_Interna_ar_pros_SelectedFinancialInformationOfInternalManagement',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SelectedFinancialInformationOfInternalManagement',
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
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationInternalManagement_9d39bf83-ad4b-4e41-8be8-47a99e0dfdf7": {
    "Id": "ar_pros_ReferenceIncorporationInternalManagement_9d39bf83-ad4b-4e41-8be8-47a99e0dfdf7",
    "IdConcepto": "ar_pros_ReferenceIncorporationInternalManagement",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationInternalManagement"
  },
  "ar_pros_SelectedFinancialInformationOfInternalManagement_a6b51da2-a7ee-4c54-aed8-79db2df3bf2b": {
    "Id": "ar_pros_SelectedFinancialInformationOfInternalManagement_a6b51da2-a7ee-4c54-aed8-79db2df3bf2b",
    "IdConcepto": "ar_pros_SelectedFinancialInformationOfInternalManagement",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfInternalManagement_28ae1f66-2bb7-4b13-b4eb-1a9940a272db": {
    "Id": "ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfInternalManagement_28ae1f66-2bb7-4b13-b4eb-1a9940a272db",
    "IdConcepto": "ar_pros_CommentsAndManagementAnalysisOnOperatingResultsOfInternalManagement",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OperationResultsOfInternalManagement_52eb4609-8a77-4ea1-8858-34a030729439": {
    "Id": "ar_pros_OperationResultsOfInternalManagement_52eb4609-8a77-4ea1-8858-34a030729439",
    "IdConcepto": "ar_pros_OperationResultsOfInternalManagement",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfInternalManagement_eb517523-4eaf-4a1b-a41b-9d17e32396c7": {
    "Id": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfInternalManagement_eb517523-4eaf-4a1b-a41b-9d17e32396c7",
    "IdConcepto": "ar_pros_FinancialPositionLiquidityAndCapitalResourcesOfInternalManagement",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_InternalControlOfInternalManagement_1e677522-3999-45d4-bc03-e60b091125e9": {
    "Id": "ar_pros_InternalControlOfInternalManagement_1e677522-3999-45d4-bc03-e60b091125e9",
    "IdConcepto": "ar_pros_InternalControlOfInternalManagement",
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