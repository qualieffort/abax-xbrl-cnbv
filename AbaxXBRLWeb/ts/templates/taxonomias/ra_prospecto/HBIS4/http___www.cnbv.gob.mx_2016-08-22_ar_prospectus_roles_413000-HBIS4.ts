///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/413000-HBIS4
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_413000_HBIS4 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_413000_HBIS4
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Obligatorio_Incorporación_por_Referencia_ar_pros_ExecutiveSummary': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Incorporación_por_Referencia_ar_pros_ExecutiveSummary',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExecutiveSummary',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationGeneralInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Incorporación_por_Referencia_ar_pros_RiskFactors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Incorporación_por_Referencia_ar_pros_RiskFactors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RiskFactors',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationGeneralInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Incorporación_por_Referencia_ar_pros_OtherValues': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Incorporación_por_Referencia_ar_pros_OtherValues',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OtherValues',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationGeneralInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Incorporación_por_Referencia_ar_pros_SignificantChangesToTheRightsOfSecuritiesRegistered': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Incorporación_por_Referencia_ar_pros_SignificantChangesToTheRightsOfSecuritiesRegistered',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SignificantChangesToTheRightsOfSecuritiesRegistered',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationGeneralInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Incorporación_por_Referencia_ar_pros_PublicDocuments': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Incorporación_por_Referencia_ar_pros_PublicDocuments',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PublicDocuments',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationGeneralInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'Obligatorio_Glosario_Términos_Definiciones_ar_pros_GlossaryOfTermsAndDefinitions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Glosario_Términos_Definiciones_ar_pros_GlossaryOfTermsAndDefinitions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "SI" and squeeze(size(variable1)) > 0) or(variable2 != "SI" and squeeze(size(variable1)) > 0)',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "SI"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "SI"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_GlossaryOfTermsAndDefinitions',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationGeneralInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "cxt": {
    "Id": "cxt",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2016_07_25",
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
  "ar_pros_ReferenceIncorporationGeneralInformation_ef69bec9-bd58-4597-af19-c237704d7f90": {
    "Id": "ar_pros_ReferenceIncorporationGeneralInformation_ef69bec9-bd58-4597-af19-c237704d7f90",
    "IdConcepto": "ar_pros_ReferenceIncorporationGeneralInformation",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationGeneralInformation"
  },
  "ar_pros_GlossaryOfTermsAndDefinitions_0a90f142-b755-4b53-b5ec-6f059e684ea3": {
    "Id": "ar_pros_GlossaryOfTermsAndDefinitions_0a90f142-b755-4b53-b5ec-6f059e684ea3",
    "IdConcepto": "ar_pros_GlossaryOfTermsAndDefinitions",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ExecutiveSummary_83a1058c-1742-4e24-bf50-0b5e06ec3fa4": {
    "Id": "ar_pros_ExecutiveSummary_83a1058c-1742-4e24-bf50-0b5e06ec3fa4",
    "IdConcepto": "ar_pros_ExecutiveSummary",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RiskFactors_8dbd0592-829f-4ad3-be34-95581b321b97": {
    "Id": "ar_pros_RiskFactors_8dbd0592-829f-4ad3-be34-95581b321b97",
    "IdConcepto": "ar_pros_RiskFactors",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherValues_f4fef283-8479-4930-bc58-f264af9fcdcd": {
    "Id": "ar_pros_OtherValues_f4fef283-8479-4930-bc58-f264af9fcdcd",
    "IdConcepto": "ar_pros_OtherValues",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SignificantChangesToTheRightsOfSecuritiesRegistered_a59528b0-558e-40bf-b2f3-3f7593bf1ca4": {
    "Id": "ar_pros_SignificantChangesToTheRightsOfSecuritiesRegistered_a59528b0-558e-40bf-b2f3-3f7593bf1ca4",
    "IdConcepto": "ar_pros_SignificantChangesToTheRightsOfSecuritiesRegistered",
    "IdContextoPlantilla": "cxt",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PublicDocuments_ea34e1ac-5255-4768-95ef-588b5bc996b1": {
    "Id": "ar_pros_PublicDocuments_ea34e1ac-5255-4768-95ef-588b5bc996b1",
    "IdConcepto": "ar_pros_PublicDocuments",
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