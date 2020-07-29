///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/432000-HBIS2
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_HBIS2 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_HBIS2
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
  "ar_pros_ReferenceIncorporationAnnex_c8b5b797-24bf-49c9-a206-609103b304b6": {
    "Id": "ar_pros_ReferenceIncorporationAnnex_c8b5b797-24bf-49c9-a206-609103b304b6",
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
  "ar_pros_FinancialStatementsAuditedPdf_2936d981-e8ae-4265-947c-96694af8bdba": {
    "Id": "ar_pros_FinancialStatementsAuditedPdf_2936d981-e8ae-4265-947c-96694af8bdba",
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
  "ar_pros_LegalOpinionPdf_c6afad8d-2159-4e98-a9a7-541166b389a4": {
    "Id": "ar_pros_LegalOpinionPdf_c6afad8d-2159-4e98-a9a7-541166b389a4",
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
  "ar_pros_TitleWhichCoversTheIssuePdf_ef24e025-6a45-4c38-ab29-7abb46bb5bd9": {
    "Id": "ar_pros_TitleWhichCoversTheIssuePdf_ef24e025-6a45-4c38-ab29-7abb46bb5bd9",
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
  "ar_pros_TrustContractPdf_dcb15187-fdc9-4c72-ac22-e882c17b6664": {
    "Id": "ar_pros_TrustContractPdf_dcb15187-fdc9-4c72-ac22-e882c17b6664",
    "IdConcepto": "ar_pros_TrustContractPdf",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_AdditionalInformationAnnexPdf_64e82537-1d4a-42c3-be5b-02ad09171473": {
    "Id": "ar_pros_AdditionalInformationAnnexPdf_64e82537-1d4a-42c3-be5b-02ad09171473",
    "IdConcepto": "ar_pros_AdditionalInformationAnnexPdf",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_WhereApplicableCertificateOfTheIssuancePdf_2cab9624-1134-4cd9-8aa5-5092ae84b251": {
    "Id": "ar_pros_WhereApplicableCertificateOfTheIssuancePdf_2cab9624-1134-4cd9-8aa5-5092ae84b251",
    "IdConcepto": "ar_pros_WhereApplicableCertificateOfTheIssuancePdf",
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