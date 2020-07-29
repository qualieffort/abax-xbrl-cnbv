///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-210000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_210000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_210000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_210000_1_Activos': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_210000_1_Activos',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El valor de {variable1} es igual al valor del Total de patrimonio / Activos netos y pasivos.',
                        MensajeError: 'El valor de {variable1} debe ser igual al valor del Total de patrimonio / Activos netos y pasivos.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_Assets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_EquityAndLiabilities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })

                        }
                    })
            };


            this.ContextosPlantillaPorId = {
  "Trimestre_AnioActual": {
    "Id": "Trimestre_AnioActual",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2015_09_30",
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
  },
  "Cierre_EjercicioAnterior": {
    "Id": "Cierre_EjercicioAnterior",
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
  },
  "Inicio_EjercicioAnterior": {
    "Id": "Inicio_EjercicioAnterior",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2013_12_31",
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
  },
  "Cierre_TrimestreAnioAnterior": {
    "Id": "Cierre_TrimestreAnioAnterior",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2014_09_30",
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

            this.UnidadesPlantillaPorId = {
  "MXN": {
    "Id": "MXN",
    "Tipo": 1,
    "Medidas": [
      {
        "Nombre": "#medida_MXN",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "MedidasDenominador": [],
    "MedidasNumerador": []
  }
};
            
            this.HechosPlantillaPorId = {
  "A6262ec50-e994-411e-bc7e-04410d9c2fe4": {
    "Id": "A6262ec50-e994-411e-bc7e-04410d9c2fe4",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aeeaefc7e-6980-44ea-971a-58b8bac70e1f": {
    "Id": "Aeeaefc7e-6980-44ea-971a-58b8bac70e1f",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa2be892e-edda-4e67-b0ce-99bbfa970fb6": {
    "Id": "Aa2be892e-edda-4e67-b0ce-99bbfa970fb6",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae7707729-3326-4c9b-b471-8446f4d47aed": {
    "Id": "Ae7707729-3326-4c9b-b471-8446f4d47aed",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "Cierre_TrimestreAnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4115156d-1294-410f-a8ec-c6e7bd7583c9": {
    "Id": "A4115156d-1294-410f-a8ec-c6e7bd7583c9",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentReceivables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A22607a48-ef32-4d57-9138-d0e529fdbc1e": {
    "Id": "A22607a48-ef32-4d57-9138-d0e529fdbc1e",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentReceivables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A30939020-950b-477b-b38c-4c7410018828": {
    "Id": "A30939020-950b-477b-b38c-4c7410018828",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentReceivables",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A67c50f08-d77f-4b6b-9a45-8cca03d2d4c4": {
    "Id": "A67c50f08-d77f-4b6b-9a45-8cca03d2d4c4",
    "IdConcepto": "mx_trac_FinancialAssetsAtFairValueThroughProfitOrLoss",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A16a4c0ca-d67c-4068-aeb7-de37b27f3e52": {
    "Id": "A16a4c0ca-d67c-4068-aeb7-de37b27f3e52",
    "IdConcepto": "mx_trac_FinancialAssetsAtFairValueThroughProfitOrLoss",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aef3811a4-f398-4f70-aee5-54e7e1c1663c": {
    "Id": "Aef3811a4-f398-4f70-aee5-54e7e1c1663c",
    "IdConcepto": "mx_trac_FinancialAssetsAtFairValueThroughProfitOrLoss",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9d5b6655-bfe2-402a-99f9-b5f9d7eb57ef": {
    "Id": "A9d5b6655-bfe2-402a-99f9-b5f9d7eb57ef",
    "IdConcepto": "mx_trac_LiquidatingDebtorAccountCapitalTransactions",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A37060e7d-a713-4e16-9acb-4bc1a02374bc": {
    "Id": "A37060e7d-a713-4e16-9acb-4bc1a02374bc",
    "IdConcepto": "mx_trac_LiquidatingDebtorAccountCapitalTransactions",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac903d8b3-8ab5-4f3e-8b95-addff58410a9": {
    "Id": "Ac903d8b3-8ab5-4f3e-8b95-addff58410a9",
    "IdConcepto": "mx_trac_LiquidatingDebtorAccountCapitalTransactions",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abacdd175-5d3e-4ded-ab52-3925b1f0cca0": {
    "Id": "Abacdd175-5d3e-4ded-ab52-3925b1f0cca0",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialAssets",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad47e6680-8143-49ec-8bce-daa554d57334": {
    "Id": "Ad47e6680-8143-49ec-8bce-daa554d57334",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialAssets",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5a66bbcb-1bcf-431f-bf45-557d6b9b590d": {
    "Id": "A5a66bbcb-1bcf-431f-bf45-557d6b9b590d",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialAssets",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9a22cd8f-e33e-4504-a629-7eb74797a26d": {
    "Id": "A9a22cd8f-e33e-4504-a629-7eb74797a26d",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialAssets",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A761ae94a-c596-46b9-86b6-e9c57b484a5b": {
    "Id": "A761ae94a-c596-46b9-86b6-e9c57b484a5b",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialAssets",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af2d8a6d3-613e-47b7-9012-d5855a91928c": {
    "Id": "Af2d8a6d3-613e-47b7-9012-d5855a91928c",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialAssets",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8727a968-6098-4238-b189-2fbb4d24a559": {
    "Id": "A8727a968-6098-4238-b189-2fbb4d24a559",
    "IdConcepto": "mx_trac_Collateral",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A280050fa-0094-4110-9e2b-e49d4f761a4d": {
    "Id": "A280050fa-0094-4110-9e2b-e49d4f761a4d",
    "IdConcepto": "mx_trac_Collateral",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adad4ced6-a4ec-4786-8d0f-36eba8d6ec3b": {
    "Id": "Adad4ced6-a4ec-4786-8d0f-36eba8d6ec3b",
    "IdConcepto": "mx_trac_Collateral",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A71f15e6d-5060-400a-894c-2b21314e2dbf": {
    "Id": "A71f15e6d-5060-400a-894c-2b21314e2dbf",
    "IdConcepto": "ifrs-full_CurrentAssets",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A90e56ee7-b988-4462-8b41-5f5245b15f2d": {
    "Id": "A90e56ee7-b988-4462-8b41-5f5245b15f2d",
    "IdConcepto": "ifrs-full_CurrentAssets",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab0fa6850-120d-4a7e-ad96-ed382eea4323": {
    "Id": "Ab0fa6850-120d-4a7e-ad96-ed382eea4323",
    "IdConcepto": "ifrs-full_CurrentAssets",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa80f20f6-07e2-45df-8068-650865a3018b": {
    "Id": "Aa80f20f6-07e2-45df-8068-650865a3018b",
    "IdConcepto": "ifrs-full_NoncurrentReceivables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A16b75ca2-190f-4a2b-a9c3-41132c0fa094": {
    "Id": "A16b75ca2-190f-4a2b-a9c3-41132c0fa094",
    "IdConcepto": "ifrs-full_NoncurrentReceivables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adb3be75f-2f8c-496c-b051-c2ad2229d31f": {
    "Id": "Adb3be75f-2f8c-496c-b051-c2ad2229d31f",
    "IdConcepto": "ifrs-full_NoncurrentReceivables",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae5b6376f-aec9-4f51-bf62-6286b4574916": {
    "Id": "Ae5b6376f-aec9-4f51-bf62-6286b4574916",
    "IdConcepto": "mx_trac_LiquidatingADebtorHasNoWorkingCapitalOperations",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af81a789d-8f1c-4018-b8bf-b5f4b88ed577": {
    "Id": "Af81a789d-8f1c-4018-b8bf-b5f4b88ed577",
    "IdConcepto": "mx_trac_LiquidatingADebtorHasNoWorkingCapitalOperations",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab7c7903e-c4aa-4009-99f9-91e2c6bd2edc": {
    "Id": "Ab7c7903e-c4aa-4009-99f9-91e2c6bd2edc",
    "IdConcepto": "mx_trac_LiquidatingADebtorHasNoWorkingCapitalOperations",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afdff1417-17c9-478b-8933-006a91646b83": {
    "Id": "Afdff1417-17c9-478b-8933-006a91646b83",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassifiedAsNonCurrentAssets",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A04117e56-6797-43ac-8103-623b60277df1": {
    "Id": "A04117e56-6797-43ac-8103-623b60277df1",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassifiedAsNonCurrentAssets",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A02808908-287a-49bb-ba92-d556efc4a07c": {
    "Id": "A02808908-287a-49bb-ba92-d556efc4a07c",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassifiedAsNonCurrentAssets",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A15a512a0-b188-4286-b54f-f54ebf6b01a2": {
    "Id": "A15a512a0-b188-4286-b54f-f54ebf6b01a2",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialAssets",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aed28e768-9543-4f0a-b34e-830707048975": {
    "Id": "Aed28e768-9543-4f0a-b34e-830707048975",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialAssets",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aed51f50f-f039-408b-9549-1d46794891bf": {
    "Id": "Aed51f50f-f039-408b-9549-1d46794891bf",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialAssets",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A78b389f8-41cc-4420-af9f-418fe9563839": {
    "Id": "A78b389f8-41cc-4420-af9f-418fe9563839",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialAssets",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1b9e79ad-10e8-4488-bff3-edd78a742f84": {
    "Id": "A1b9e79ad-10e8-4488-bff3-edd78a742f84",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialAssets",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7d4f615d-f107-43f1-b71a-6623f1a481f2": {
    "Id": "A7d4f615d-f107-43f1-b71a-6623f1a481f2",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialAssets",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad0fd00c0-07c1-47c0-b1a9-c7f461b910ef": {
    "Id": "Ad0fd00c0-07c1-47c0-b1a9-c7f461b910ef",
    "IdConcepto": "ifrs-full_NoncurrentAssets",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae5449c29-bce1-4f7e-a80b-839a2963253a": {
    "Id": "Ae5449c29-bce1-4f7e-a80b-839a2963253a",
    "IdConcepto": "ifrs-full_NoncurrentAssets",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af1750093-34d3-42ab-b390-1300c9e353df": {
    "Id": "Af1750093-34d3-42ab-b390-1300c9e353df",
    "IdConcepto": "ifrs-full_NoncurrentAssets",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A17c003fb-7767-4efd-b2ad-6bba4d567abe": {
    "Id": "A17c003fb-7767-4efd-b2ad-6bba4d567abe",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae48a6cec-3fe9-4a46-8b1d-e78973d44a45": {
    "Id": "Ae48a6cec-3fe9-4a46-8b1d-e78973d44a45",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae336a357-56e9-43bb-bf92-ad87f257f105": {
    "Id": "Ae336a357-56e9-43bb-bf92-ad87f257f105",
    "IdConcepto": "ifrs-full_Assets",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3d037144-35b9-4864-8ab6-deb7259bc108": {
    "Id": "A3d037144-35b9-4864-8ab6-deb7259bc108",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentPayables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aee085755-3ddf-44cb-80db-831dd98d31e0": {
    "Id": "Aee085755-3ddf-44cb-80db-831dd98d31e0",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentPayables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A70c6bbdc-31c4-4725-8692-e18c07257c5b": {
    "Id": "A70c6bbdc-31c4-4725-8692-e18c07257c5b",
    "IdConcepto": "ifrs-full_TradeAndOtherCurrentPayables",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0f812834-ec78-414e-8541-acf1993637a2": {
    "Id": "A0f812834-ec78-414e-8541-acf1993637a2",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4e6813e8-9109-46f6-94d1-f4a7050a17cb": {
    "Id": "A4e6813e8-9109-46f6-94d1-f4a7050a17cb",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad3abea63-3c24-48cb-9af3-aa80052e4ace": {
    "Id": "Ad3abea63-3c24-48cb-9af3-aa80052e4ace",
    "IdConcepto": "ifrs-full_OtherCurrentFinancialLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac79c6d15-a973-4701-addf-1be59315e655": {
    "Id": "Ac79c6d15-a973-4701-addf-1be59315e655",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A325161ea-419f-4047-aceb-bddaf50451b8": {
    "Id": "A325161ea-419f-4047-aceb-bddaf50451b8",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad2e24902-3ff1-4f36-9460-3c023edae463": {
    "Id": "Ad2e24902-3ff1-4f36-9460-3c023edae463",
    "IdConcepto": "ifrs-full_OtherCurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2f6575f2-9041-4183-aec3-0c7ab01b0dcb": {
    "Id": "A2f6575f2-9041-4183-aec3-0c7ab01b0dcb",
    "IdConcepto": "ifrs-full_OtherShorttermProvisions",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab00b75da-3e16-410e-83bb-5ad386ca7b13": {
    "Id": "Ab00b75da-3e16-410e-83bb-5ad386ca7b13",
    "IdConcepto": "ifrs-full_OtherShorttermProvisions",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aabf18d27-68f2-4a36-9bde-f16ce8f5cc55": {
    "Id": "Aabf18d27-68f2-4a36-9bde-f16ce8f5cc55",
    "IdConcepto": "ifrs-full_OtherShorttermProvisions",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0db0f733-3605-4955-8044-cbfd48d4ed7b": {
    "Id": "A0db0f733-3605-4955-8044-cbfd48d4ed7b",
    "IdConcepto": "ifrs-full_CurrentProvisions",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac722b159-911a-4fb1-9c5d-eb1996fc57a4": {
    "Id": "Ac722b159-911a-4fb1-9c5d-eb1996fc57a4",
    "IdConcepto": "ifrs-full_CurrentProvisions",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3e49c94e-2129-4412-86d6-e393c10a35d3": {
    "Id": "A3e49c94e-2129-4412-86d6-e393c10a35d3",
    "IdConcepto": "ifrs-full_CurrentProvisions",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af091a698-52e1-414c-9a8f-6b8470d33189": {
    "Id": "Af091a698-52e1-414c-9a8f-6b8470d33189",
    "IdConcepto": "mx_trac_LiquidationAccountPayablesForCapitalOperations",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aedbb9873-3ddb-460b-aa18-b604bd6fb54a": {
    "Id": "Aedbb9873-3ddb-460b-aa18-b604bd6fb54a",
    "IdConcepto": "mx_trac_LiquidationAccountPayablesForCapitalOperations",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5bdb3122-773f-40a7-b0c2-601ee9855fd1": {
    "Id": "A5bdb3122-773f-40a7-b0c2-601ee9855fd1",
    "IdConcepto": "mx_trac_LiquidationAccountPayablesForCapitalOperations",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad5c2ac24-55a1-489c-a11a-ed377e98e763": {
    "Id": "Ad5c2ac24-55a1-489c-a11a-ed377e98e763",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassifiedAsShortTermLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ade8696b6-d119-4168-b426-6292b02a4feb": {
    "Id": "Ade8696b6-d119-4168-b426-6292b02a4feb",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassifiedAsShortTermLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa600e0c9-7192-4749-9715-dd95b0af1c9a": {
    "Id": "Aa600e0c9-7192-4749-9715-dd95b0af1c9a",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassifiedAsShortTermLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aac3114e0-f02d-48a1-ba72-a2afc441a111": {
    "Id": "Aac3114e0-f02d-48a1-ba72-a2afc441a111",
    "IdConcepto": "ifrs-full_CurrentLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa8f4ea21-336a-4ce6-995d-99be1b478d09": {
    "Id": "Aa8f4ea21-336a-4ce6-995d-99be1b478d09",
    "IdConcepto": "ifrs-full_CurrentLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0c49f6c4-28df-407f-98a3-71c9e9aa68e1": {
    "Id": "A0c49f6c4-28df-407f-98a3-71c9e9aa68e1",
    "IdConcepto": "ifrs-full_CurrentLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5e4e3a1d-5504-4f63-8ca0-4720f8fbc0b1": {
    "Id": "A5e4e3a1d-5504-4f63-8ca0-4720f8fbc0b1",
    "IdConcepto": "ifrs-full_NoncurrentPayables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1dbe217d-dd29-4814-b9af-6729dca370ed": {
    "Id": "A1dbe217d-dd29-4814-b9af-6729dca370ed",
    "IdConcepto": "ifrs-full_NoncurrentPayables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4f1dede3-b68f-41ed-9f90-c7478918628b": {
    "Id": "A4f1dede3-b68f-41ed-9f90-c7478918628b",
    "IdConcepto": "ifrs-full_NoncurrentPayables",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A512ad65a-947c-4065-84ff-4f330100f960": {
    "Id": "A512ad65a-947c-4065-84ff-4f330100f960",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afe865cf9-a56d-49d9-942c-34da19333059": {
    "Id": "Afe865cf9-a56d-49d9-942c-34da19333059",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae4223445-335d-4d88-b518-c552b3111d80": {
    "Id": "Ae4223445-335d-4d88-b518-c552b3111d80",
    "IdConcepto": "ifrs-full_OtherNoncurrentFinancialLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aecd527f4-34cb-42eb-b258-54f97dd7280c": {
    "Id": "Aecd527f4-34cb-42eb-b258-54f97dd7280c",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A34204588-6357-4454-bc56-fe13809ae598": {
    "Id": "A34204588-6357-4454-bc56-fe13809ae598",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1e40f7ca-916b-4909-a470-6e6c1da9a617": {
    "Id": "A1e40f7ca-916b-4909-a470-6e6c1da9a617",
    "IdConcepto": "ifrs-full_OtherNoncurrentNonfinancialLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3f3da21f-bf99-4f24-ac11-d38ee41ae7fd": {
    "Id": "A3f3da21f-bf99-4f24-ac11-d38ee41ae7fd",
    "IdConcepto": "ifrs-full_OtherLongtermProvisions",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5cf957d0-94d9-415e-b3a6-17d81af10ee1": {
    "Id": "A5cf957d0-94d9-415e-b3a6-17d81af10ee1",
    "IdConcepto": "ifrs-full_OtherLongtermProvisions",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2a096010-4dc4-4d4b-8be5-aaab2d68a4e9": {
    "Id": "A2a096010-4dc4-4d4b-8be5-aaab2d68a4e9",
    "IdConcepto": "ifrs-full_OtherLongtermProvisions",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A06f430a3-7532-483c-9fe1-1a9fd3486a03": {
    "Id": "A06f430a3-7532-483c-9fe1-1a9fd3486a03",
    "IdConcepto": "ifrs-full_NoncurrentProvisions",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad822180a-e020-47e6-bc28-06022502738b": {
    "Id": "Ad822180a-e020-47e6-bc28-06022502738b",
    "IdConcepto": "ifrs-full_NoncurrentProvisions",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9ee8a3c7-771e-4085-ab73-f1c9bbcc5591": {
    "Id": "A9ee8a3c7-771e-4085-ab73-f1c9bbcc5591",
    "IdConcepto": "ifrs-full_NoncurrentProvisions",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7b744fa2-4d64-4154-af30-3104f60c8b01": {
    "Id": "A7b744fa2-4d64-4154-af30-3104f60c8b01",
    "IdConcepto": "mx_trac_AccountPayablesForLiquidationOperationsLongTermCapital",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A599932dd-2baf-4da6-97be-0e2ea23cf3ff": {
    "Id": "A599932dd-2baf-4da6-97be-0e2ea23cf3ff",
    "IdConcepto": "mx_trac_AccountPayablesForLiquidationOperationsLongTermCapital",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6419b30f-7aa2-4073-8896-37841113c1aa": {
    "Id": "A6419b30f-7aa2-4073-8896-37841113c1aa",
    "IdConcepto": "mx_trac_AccountPayablesForLiquidationOperationsLongTermCapital",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7a91f191-a370-48dc-8a54-e2e56d732ac2": {
    "Id": "A7a91f191-a370-48dc-8a54-e2e56d732ac2",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassigiedAsLongTermLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6cc23007-d580-4fbf-8e4e-f19116602df7": {
    "Id": "A6cc23007-d580-4fbf-8e4e-f19116602df7",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassigiedAsLongTermLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3a732108-fac0-42af-aa65-8f66f762eaee": {
    "Id": "A3a732108-fac0-42af-aa65-8f66f762eaee",
    "IdConcepto": "mx_trac_DerivativeFinancialInstrumentsAndHedgingClassigiedAsLongTermLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A727e6aed-9035-467c-9985-5ad57fad7a4d": {
    "Id": "A727e6aed-9035-467c-9985-5ad57fad7a4d",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad4183484-8fbc-466a-9990-d5a3970405c6": {
    "Id": "Ad4183484-8fbc-466a-9990-d5a3970405c6",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A82274fa4-0782-43cc-a37e-5b9208251dd0": {
    "Id": "A82274fa4-0782-43cc-a37e-5b9208251dd0",
    "IdConcepto": "ifrs-full_NoncurrentLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2b5920b8-2662-4c9e-adeb-253ffde230d1": {
    "Id": "A2b5920b8-2662-4c9e-adeb-253ffde230d1",
    "IdConcepto": "ifrs-full_Liabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A42557b2e-deef-4e7d-85a7-9a6b8559d62c": {
    "Id": "A42557b2e-deef-4e7d-85a7-9a6b8559d62c",
    "IdConcepto": "ifrs-full_Liabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab98e61a8-915d-4c9a-9772-07add84cd998": {
    "Id": "Ab98e61a8-915d-4c9a-9772-07add84cd998",
    "IdConcepto": "ifrs-full_Liabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af9d2d038-c08a-4553-9966-21fdd6ed6bbd": {
    "Id": "Af9d2d038-c08a-4553-9966-21fdd6ed6bbd",
    "IdConcepto": "ifrs-full_IssuedCapital",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae017ec83-e163-4561-930c-dbf9475562b0": {
    "Id": "Ae017ec83-e163-4561-930c-dbf9475562b0",
    "IdConcepto": "ifrs-full_IssuedCapital",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A110b273d-b8b0-4b57-ae1e-a0d814ab236f": {
    "Id": "A110b273d-b8b0-4b57-ae1e-a0d814ab236f",
    "IdConcepto": "ifrs-full_IssuedCapital",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A219b2df8-b883-481f-b015-3ec663205dd2": {
    "Id": "A219b2df8-b883-481f-b015-3ec663205dd2",
    "IdConcepto": "ifrs-full_EquityAttributableToOwnersOfParent",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A97d4a455-8e1d-4ad6-a501-99729e9aa830": {
    "Id": "A97d4a455-8e1d-4ad6-a501-99729e9aa830",
    "IdConcepto": "ifrs-full_EquityAttributableToOwnersOfParent",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2e7b521f-e0a7-4e50-897e-fc96ff2fb1f8": {
    "Id": "A2e7b521f-e0a7-4e50-897e-fc96ff2fb1f8",
    "IdConcepto": "ifrs-full_EquityAttributableToOwnersOfParent",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abdf16cf3-d051-4d34-9831-2e9338df9fa0": {
    "Id": "Abdf16cf3-d051-4d34-9831-2e9338df9fa0",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5453b7da-d3c5-4123-8eef-5f31945f5a69": {
    "Id": "A5453b7da-d3c5-4123-8eef-5f31945f5a69",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A94f2d737-4b9f-4c8a-ade0-5fb52b83ca08": {
    "Id": "A94f2d737-4b9f-4c8a-ade0-5fb52b83ca08",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3613f272-6485-425f-8fd2-70cc6d8cf2fe": {
    "Id": "A3613f272-6485-425f-8fd2-70cc6d8cf2fe",
    "IdConcepto": "ifrs-full_Equity",
    "IdContextoPlantilla": "Cierre_TrimestreAnioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2d87becb-c181-4c0a-a395-f0dc7aba835b": {
    "Id": "A2d87becb-c181-4c0a-a395-f0dc7aba835b",
    "IdConcepto": "ifrs-full_EquityAndLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A26228336-2c2d-42d2-86b2-83143a359ac2": {
    "Id": "A26228336-2c2d-42d2-86b2-83143a359ac2",
    "IdConcepto": "ifrs-full_EquityAndLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2f0efc2a-8821-48f3-9f32-cf8b326ca5ef": {
    "Id": "A2f0efc2a-8821-48f3-9f32-cf8b326ca5ef",
    "IdConcepto": "ifrs-full_EquityAndLiabilities",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  }
};
        }
    }

}