///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/432000-N
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_N implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_N
         */
        constructor() {

            this.ListadoDeFormulas = {



                'Obligatorio_Anexos_ar_pros_AnyOtherInformationDeemedRelevant': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Anexos_ar_pros_AnyOtherInformationDeemedRelevant',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AnyOtherInformationDeemedRelevant',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Obligatorio_Anexos_ar_pros_CompanyNameAndTradeName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Obligatorio_Anexos_ar_pros_CompanyNameAndTradeName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CompanyNameAndTradeName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'ExistenciaEstadoFinancieroDictaminado_': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'ExistenciaEstadoFinancieroDictaminado_',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'Se adjunto un documento de "Estados financieros (Dictaminados) y opiniones del comité de auditoría y/o prácticas societarias, e informe del comisario".',
                        MensajeError: 'Se debe adjuntar un documento de "Estados financieros (Dictaminados) y opiniones del comité de auditoría y/o prácticas societarias, e informe del comisario".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_FinancialStatementsAuditedPdf",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            }
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
  "ar_pros_ReferenceIncorporationAnnex_628d10ed-0131-4b5b-877a-b337df80e808": {
    "Id": "ar_pros_ReferenceIncorporationAnnex_628d10ed-0131-4b5b-877a-b337df80e808",
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
  "ar_pros_FinancialStatementsAuditedPdf_a21c0116-a690-4752-bd45-b95aa3f02bd8": {
    "Id": "ar_pros_FinancialStatementsAuditedPdf_a21c0116-a690-4752-bd45-b95aa3f02bd8",
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
  "ar_pros_ExhibitNTerPdf_e4be68c6-99da-45b3-b0fd-13b1ada86a9d": {
    "Id": "ar_pros_ExhibitNTerPdf_e4be68c6-99da-45b3-b0fd-13b1ada86a9d",
    "IdConcepto": "ar_pros_ExhibitNTerPdf",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CompanyNameAndTradeName_74cc7799-b861-478d-972f-4dca062e8d7f": {
    "Id": "ar_pros_CompanyNameAndTradeName_74cc7799-b861-478d-972f-4dca062e8d7f",
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
  "ar_pros_FinancialStatementsPdf_f4483fb5-31b3-4459-b993-4385ed36aea8": {
    "Id": "ar_pros_FinancialStatementsPdf_f4483fb5-31b3-4459-b993-4385ed36aea8",
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
  "ar_pros_AnyOtherInformationDeemedRelevant_ccd563ec-6e96-48b1-9907-bc24b32bf7e8": {
    "Id": "ar_pros_AnyOtherInformationDeemedRelevant_ccd563ec-6e96-48b1-9907-bc24b32bf7e8",
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
  "ar_pros_IfGuarantorsSpecifyTheDifferences_dae19016-5d80-4766-a5f3-df94791f80c1": {
    "Id": "ar_pros_IfGuarantorsSpecifyTheDifferences_dae19016-5d80-4766-a5f3-df94791f80c1",
    "IdConcepto": "ar_pros_IfGuarantorsSpecifyTheDifferences",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultIfGuarantorsSpecifyTheDifferences"
  }
};
        }
    }

}