///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/432000-HBIS1
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_HBIS1 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_HBIS1
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
  "ar_pros_ReferenceIncorporationAnnex_ddf63296-1cad-4aff-82fb-e5e7753f5c20": {
    "Id": "ar_pros_ReferenceIncorporationAnnex_ddf63296-1cad-4aff-82fb-e5e7753f5c20",
    "IdConcepto": "ar_pros_ReferenceIncorporationAnnex",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationAnnex"
  },
  "ar_pros_FinancialStatementsAuditedPdf_60497a70-2633-4b25-b8ee-64db76f416e0": {
    "Id": "ar_pros_FinancialStatementsAuditedPdf_60497a70-2633-4b25-b8ee-64db76f416e0",
    "IdConcepto": "ar_pros_FinancialStatementsAuditedPdf",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_LegalOpinionPdf_d2378a14-b30b-40ba-88f9-6b6759393866": {
    "Id": "ar_pros_LegalOpinionPdf_d2378a14-b30b-40ba-88f9-6b6759393866",
    "IdConcepto": "ar_pros_LegalOpinionPdf",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TitleWhichCoversTheIssuePdf_cdf61aed-ac71-4cc3-b94e-a287bba60d1b": {
    "Id": "ar_pros_TitleWhichCoversTheIssuePdf_cdf61aed-ac71-4cc3-b94e-a287bba60d1b",
    "IdConcepto": "ar_pros_TitleWhichCoversTheIssuePdf",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RatingOnCreditRiskPdf_8617cb3c-3190-4b85-8a06-a840509e78a3": {
    "Id": "ar_pros_RatingOnCreditRiskPdf_8617cb3c-3190-4b85-8a06-a840509e78a3",
    "IdConcepto": "ar_pros_RatingOnCreditRiskPdf",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrustContractPdf_46147f1f-7263-4766-baed-5b14d645b89a": {
    "Id": "ar_pros_TrustContractPdf_46147f1f-7263-4766-baed-5b14d645b89a",
    "IdConcepto": "ar_pros_TrustContractPdf",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdditionalInformationAnnexPdf_05421ae5-c04e-4bac-8af6-1961d9698e5d": {
    "Id": "ar_pros_AdditionalInformationAnnexPdf_05421ae5-c04e-4bac-8af6-1961d9698e5d",
    "IdConcepto": "ar_pros_AdditionalInformationAnnexPdf",
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