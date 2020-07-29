///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/432000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_H
         */
        constructor() {
            
            this.ListadoDeFormulas = {


                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineCNBVAnnexes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineCNBVAnnexes',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable2)) > 0) and (variable1 == "SI")) or ((squeeze(size(variable2)) == 0) and (variable1 == "NO"))',
                        MensajeExito: 'Se requiere el concepto "Fecha de entrega a la CNBV" cuando es incorporación por referencia.',
                        MensajeError: 'Se requiere el concepto "Fecha de entrega a la CNBV" cuando es incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos:true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_DeadlineCNBVAnnexes",
                                "PuedeEliminarse": true,
                                "PuedeCrearse": true,
                                "ConteoHechos": false,
                                "ValorFallback": "",
                                "MismasDimensiones": true
                            },
                                
                            }
                    }
                ),
                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineCNBVAnnexesB': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineCNBVAnnexesB',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) and (variable2 == "SI")) or ((squeeze(size(variable1)) == 0) and (variable2 == "NO"))',
                        MensajeExito: 'El concepto "Fecha de entrega a la CNBV" solo aplica cuando es incorporación por referencia.',
                        MensajeError: 'El concepto "Fecha de entrega a la CNBV" solo aplica cuando es incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DeadlineCNBVAnnexes",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "",
                                "MismasDimensiones": true
                            },

                        }
                    }
                ),
                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineStockExchangeAnnexes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineStockExchangeAnnexes',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable2)) > 0) and (variable1 == "SI")) or ((squeeze(size(variable2)) == 0) and (variable1 == "NO"))',
                        MensajeExito: 'El concepto "Fecha de entrega a la bolsa de valores" es requerido en caso de utilizar incorporación por referencia.',
                        MensajeError: 'El concepto "Fecha de entrega a la bolsa de valores" es requerido en caso de utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_DeadlineStockExchangeAnnexes",
                                "PuedeEliminarse": true,
                                "PuedeCrearse": true,
                                "ConteoHechos": false,
                                "ValorFallback": "",
                                "MismasDimensiones": true
                            }
                                
                         }
                    }
                ),
                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineStockExchangeAnnexesB': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_DeadlineStockExchangeAnnexesB',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) and (variable2 == "SI")) or ((squeeze(size(variable1)) == 0) and (variable2 == "NO"))',
                        MensajeExito: 'El concepto "Fecha de entrega a la bolsa de valores" es requerido en caso de utilizar incorporación por referencia.',
                        MensajeError: 'El concepto "Fecha de entrega a la bolsa de valores" es requerido en caso de utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_DeadlineStockExchangeAnnexes",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "",
                                "MismasDimensiones": true
                            }

                        }
                    }
                ),
                'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_PublicConsultationSitesAnnexes': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ANEXOS__obligatorios_SinIncorporacionReferencia__ar_pros_PublicConsultationSitesAnnexes',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((squeeze(size(variable1)) > 0) and (variable2 == "SI")) or ((squeeze(size(variable1)) == 0) and (variable2 == "NO"))',
                        MensajeExito: 'El hecho {variable1} es obligatorio en caso de utilizar incorporación por referencia.',
                        MensajeError: 'El hecho {variable1} es obligatorio en caso de utilizar incorporación por referencia.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PublicConsultationSitesAnnexes",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "",
                                "MismasDimensiones": true
                            }
                                
                            }
                    }
                )
                /*, 'ANEXOS__DocumentAnnexesToken_SI': new model.DefinicionFormula().deserialize({
                    Id: 'ANEXOS__DocumentAnnexesToken_SI',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable1 == "EEFF Trimestrales" or variable1 == "Reporte Anual") or (variable2 != "SI")',
                    MensajeExito: 'El concepto "Documento" solo admite los valores "EEFF Trimestrales" y "Reporte Anual" cuando la "Incorporación por referencia" es "SI".',
                    MensajeError: 'El concepto "Documento" solo admite los valores "EEFF Trimestrales" y "Reporte Anual" cuando la "Incorporación por referencia" es "SI".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DocumentAnnexesToken",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "",
                            "MismasDimensiones": true
                        }

                    }
                })
                , 'ANEXOS__DocumentAnnexesToken_NO': new model.DefinicionFormula().deserialize({
                    Id: 'ANEXOS__DocumentAnnexesToken_NO',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable1 == "EEFF Anuales" or variable1 == "EEFF Trimestrales" or variable1 == "EEFF Intermedios" or variable1 == "EEFF Internos") or (variable2 != "NO")',
                    MensajeExito: 'El concepto "Documento" solo admite los valores "EEFF Anuales", "EEFF Trimestrales", "EEFF Intermedios"  y "EEFF Internos" cuando la "Incorporación por referencia" es "NO".',
                    MensajeError: 'El concepto "Documento" solo admite los valores "EEFF Anuales", "EEFF Trimestrales", "EEFF Intermedios"  y "EEFF Internos" cuando la "Incorporación por referencia" es "NO".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DocumentAnnexesToken",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_ReferenceIncorporationAnnexes",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "",
                            "MismasDimensiones": true
                        }

                    }
                })*/

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
  "ar_pros_ReferenceIncorporationAnnex_3b80bffd-762f-4902-9dfb-a5c9dedb8d5d": {
    "Id": "ar_pros_ReferenceIncorporationAnnex_3b80bffd-762f-4902-9dfb-a5c9dedb8d5d",
    "IdConcepto": "ar_pros_ReferenceIncorporationAnnex",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationAnnex"
  },
  "ar_pros_FinancialStatementsAuditedPdf_88d9e73e-dfe4-4b89-b0f5-01336eab2cd5": {
    "Id": "ar_pros_FinancialStatementsAuditedPdf_88d9e73e-dfe4-4b89-b0f5-01336eab2cd5",
    "IdConcepto": "ar_pros_FinancialStatementsAuditedPdf",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LegalOpinionPdf_70d548ac-acdd-46d6-9090-0ef12424b3b1": {
    "Id": "ar_pros_LegalOpinionPdf_70d548ac-acdd-46d6-9090-0ef12424b3b1",
    "IdConcepto": "ar_pros_LegalOpinionPdf",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TitleWhichCoversTheIssuePdf_6f11ee54-2f76-45b5-94f7-f09636d5b6da": {
    "Id": "ar_pros_TitleWhichCoversTheIssuePdf_6f11ee54-2f76-45b5-94f7-f09636d5b6da",
    "IdConcepto": "ar_pros_TitleWhichCoversTheIssuePdf",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RatingOnCreditRiskPdf_3c71b1b3-b7a2-4611-84eb-34877aff3d26": {
    "Id": "ar_pros_RatingOnCreditRiskPdf_3c71b1b3-b7a2-4611-84eb-34877aff3d26",
    "IdConcepto": "ar_pros_RatingOnCreditRiskPdf",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CompanyNameAndTradeName_0c867e80-9ab4-4277-aad3-a1ca639b4adf": {
    "Id": "ar_pros_CompanyNameAndTradeName_0c867e80-9ab4-4277-aad3-a1ca639b4adf",
    "IdConcepto": "ar_pros_CompanyNameAndTradeName",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FinancialStatementsPdf_19f6b3de-b05e-4c00-ab89-5a3a8a64b63f": {
    "Id": "ar_pros_FinancialStatementsPdf_19f6b3de-b05e-4c00-ab89-5a3a8a64b63f",
    "IdConcepto": "ar_pros_FinancialStatementsPdf",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AnyOtherInformationDeemedRelevant_b3cc0321-51c7-448b-8b5f-6fee06708ed6": {
    "Id": "ar_pros_AnyOtherInformationDeemedRelevant_b3cc0321-51c7-448b-8b5f-6fee06708ed6",
    "IdConcepto": "ar_pros_AnyOtherInformationDeemedRelevant",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IfGuarantorsSpecifyTheDifferences_2cec26ca-e85e-4c75-a63f-9ffc29f9413c": {
    "Id": "ar_pros_IfGuarantorsSpecifyTheDifferences_2cec26ca-e85e-4c75-a63f-9ffc29f9413c",
    "IdConcepto": "ar_pros_IfGuarantorsSpecifyTheDifferences",
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