///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ias_7_2014-03-05_role-520000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ias_7_2014_03_05_role_520000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ias_7_2014_03_05_role_520000
         */
        constructor() {

            this.ListadoDeFormulas = {
                //Se integran formulas de Value Assertion - ID : VA_520000_01
                'formula26': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula26',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'abs(bignumber(variable1)) > 0',
                        MensajeExito: 'El hecho reportado para el {variable1} tiene un valor diferente de 0.',
                        MensajeError: 'El hecho reportado para el {variable1} debería tener un valor diferente de 0.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    ),
                    //Incremento (disminución) neto de efectivo y equivalentes de efectivo = Efectivo y equivalentes de efectivo al final del periodo - 
                    //Efectivo y equivalentes de efectivo al principio del periodo  
                    //Junio 2015
                    'formula_520000_1': new model.DefinicionFormula().deserialize(
                        {
                            Id: 'formula_520000_1',
                            TipoFormula: model.TipoFormula.ValueAssertion,
                            Expresion: 'bignumber(variable1) == bignumber(variable3) - bignumber(variable2)',
                            MensajeExito: 'El valor de {variable1} es igual al valor de Efectivo y equivalentes de efectivo al final del periodo - Efectivo y equivalentes de efectivo al principio del periodo.',
                            MensajeError: 'El valor de {variable1} debe ser igual al valor de Efectivo y equivalentes de efectivo al final del periodo - Efectivo y equivalentes de efectivo al principio del periodo.',
                            VariablesCoincidenPeriodo: true,
                            DefinicionVariables: {
                                'variable1': new model.DefinicionVariableFormula().deserialize({
                                    Id: 'variable1',
                                    IdConcepto: 'ifrs-full_IncreaseDecreaseInCashAndCashEquivalents',
                                    PuedeCrearse: false,
                                    PuedeEliminarse: false,
                                    ConteoHechos: false,

                                }),
                                'variable2': new model.DefinicionVariableFormula().deserialize({
                                    Id: 'variable2',
                                    IdConcepto: 'ifrs-full_CashAndCashEquivalents',
                                    PuedeCrearse: false,
                                    PuedeEliminarse: false,
                                    ConteoHechos: false,
                                    EmpatarPeriodo: model.TipoMatchPeriodo.PeriodStartMatch,
                                    RolEtiqueta: "http://www.xbrl.org/2003/role/periodStartLabel"
                                }),
                                'variable3': new model.DefinicionVariableFormula().deserialize({
                                    Id: 'variable3',
                                    IdConcepto: 'ifrs-full_CashAndCashEquivalents',
                                    PuedeCrearse: false,
                                    PuedeEliminarse: false,
                                    ConteoHechos: false,
                                    EmpatarPeriodo: model.TipoMatchPeriodo.PeriodEndMatch,
                                    RolEtiqueta: "http://www.xbrl.org/2003/role/periodEndLabel"
                                })
                            }
                        })


            };

            this.ContextosPlantillaPorId = {
  "trimestre_actual": {
    "Id": "trimestre_actual",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2015_07_01",
      "FechaFin": "#fecha_2015_09_30",
      "FechaInstante": ""
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
  "info_12_meses_al_cierre_trimestre": {
    "Id": "info_12_meses_al_cierre_trimestre",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2014_10_01",
      "FechaFin": "#fecha_2015_09_30",
      "FechaInstante": ""
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
  "trimestre_ejercicio_anterior": {
    "Id": "trimestre_ejercicio_anterior",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2014_07_01",
      "FechaFin": "#fecha_2014_09_30",
      "FechaInstante": ""
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
  "info_12_meses_al_cierre_trim_eje_anterior": {
    "Id": "info_12_meses_al_cierre_trim_eje_anterior",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2013_10_01",
      "FechaFin": "#fecha_2014_09_30",
      "FechaInstante": ""
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
  "acumulado_ejercicio_actual": {
    "Id": "acumulado_ejercicio_actual",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2015_01_01",
      "FechaFin": "#fecha_2015_09_30",
      "FechaInstante": ""
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
  "acumulado_ejercicio_anterior": {
    "Id": "acumulado_ejercicio_anterior",
    "Periodo": {
      "Tipo": 2,
      "FechaInicio": "#fecha_2014_01_01",
      "FechaFin": "#fecha_2014_09_30",
      "FechaInstante": ""
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
  "cierre_trimestre_actual": {
    "Id": "cierre_trimestre_actual",
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
  "cierre_ejercicio_anterior": {
    "Id": "cierre_ejercicio_anterior",
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
  "cierre_ejercicio_anterior_anterior": {
    "Id": "cierre_ejercicio_anterior_anterior",
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
  "cierre_trimestre_ejercicio_anterior": {
    "Id": "cierre_trimestre_ejercicio_anterior",
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
  "Peso_Mx": {
    "Id": "Peso_Mx",
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
  "A465e1b09-486e-4c92-ab2e-a05fc04d21b1": {
    "Id": "A465e1b09-486e-4c92-ab2e-a05fc04d21b1",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab6e4f3be-6798-4993-9754-aed7950b209a": {
    "Id": "Ab6e4f3be-6798-4993-9754-aed7950b209a",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af31cfe25-cc23-49b7-ab0c-a1cc4f39e157": {
    "Id": "Af31cfe25-cc23-49b7-ab0c-a1cc4f39e157",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A62136776-c1a5-4fef-b1ba-7537fc51a783": {
    "Id": "A62136776-c1a5-4fef-b1ba-7537fc51a783",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aabae587d-e04d-4229-9426-ed722436f9d5": {
    "Id": "Aabae587d-e04d-4229-9426-ed722436f9d5",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A80034792-af8c-43f4-bf7a-0076c63f7550": {
    "Id": "A80034792-af8c-43f4-bf7a-0076c63f7550",
    "IdConcepto": "ifrs-full_ProfitLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A59d101e8-8b61-4a32-933d-74da9e63feb1": {
    "Id": "A59d101e8-8b61-4a32-933d-74da9e63feb1",
    "IdConcepto": "ifrs_mx-cor_20141205_OperacionesDiscontinuas",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A00a7eb2d-0a45-4b18-b2a9-9bca12d3d326": {
    "Id": "A00a7eb2d-0a45-4b18-b2a9-9bca12d3d326",
    "IdConcepto": "ifrs_mx-cor_20141205_OperacionesDiscontinuas",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae9146636-a603-424b-9e4e-1f27f41e1e62": {
    "Id": "Ae9146636-a603-424b-9e4e-1f27f41e1e62",
    "IdConcepto": "ifrs-full_AdjustmentsForIncomeTaxExpense",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aefe29061-20c5-4bb9-8c26-e865a6970f51": {
    "Id": "Aefe29061-20c5-4bb9-8c26-e865a6970f51",
    "IdConcepto": "ifrs-full_AdjustmentsForIncomeTaxExpense",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A85ea0f49-449d-4a35-9199-b288bdf3fb11": {
    "Id": "A85ea0f49-449d-4a35-9199-b288bdf3fb11",
    "IdConcepto": "ifrs-full_AdjustmentsForFinanceCosts",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A87e44d6c-55f8-43d5-a2f3-1c097b03ce56": {
    "Id": "A87e44d6c-55f8-43d5-a2f3-1c097b03ce56",
    "IdConcepto": "ifrs-full_AdjustmentsForFinanceCosts",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae2045713-32bc-4741-ab45-fae4d6e84d6d": {
    "Id": "Ae2045713-32bc-4741-ab45-fae4d6e84d6d",
    "IdConcepto": "ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa117ddc5-46b5-4a2b-a32f-fa9f2cb87f65": {
    "Id": "Aa117ddc5-46b5-4a2b-a32f-fa9f2cb87f65",
    "IdConcepto": "ifrs-full_AdjustmentsForDepreciationAndAmortisationExpense",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4061d3bb-1bc5-4451-b79a-8f118359d3e2": {
    "Id": "A4061d3bb-1bc5-4451-b79a-8f118359d3e2",
    "IdConcepto": "ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A85e18659-bfc7-4eb5-aeb0-e5bafbae173a": {
    "Id": "A85e18659-bfc7-4eb5-aeb0-e5bafbae173a",
    "IdConcepto": "ifrs-full_AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab1ed8db0-a67e-44fb-aed9-d7ae052b39a0": {
    "Id": "Ab1ed8db0-a67e-44fb-aed9-d7ae052b39a0",
    "IdConcepto": "ifrs-full_AdjustmentsForProvisions",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A55306796-55e2-479e-b3d7-656ab1111d09": {
    "Id": "A55306796-55e2-479e-b3d7-656ab1111d09",
    "IdConcepto": "ifrs-full_AdjustmentsForProvisions",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A61b4e134-b1a2-4dda-b28f-2f40342a2862": {
    "Id": "A61b4e134-b1a2-4dda-b28f-2f40342a2862",
    "IdConcepto": "ifrs-full_AdjustmentsForUnrealisedForeignExchangeLossesGains",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afc7ba21e-8fdc-4764-8a82-0b3aa6aadf13": {
    "Id": "Afc7ba21e-8fdc-4764-8a82-0b3aa6aadf13",
    "IdConcepto": "ifrs-full_AdjustmentsForUnrealisedForeignExchangeLossesGains",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5f08e0bd-d928-4aa2-8769-27338e830cce": {
    "Id": "A5f08e0bd-d928-4aa2-8769-27338e830cce",
    "IdConcepto": "ifrs-full_AdjustmentsForSharebasedPayments",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A35f4578e-6e03-4372-b559-117db3a8bdb0": {
    "Id": "A35f4578e-6e03-4372-b559-117db3a8bdb0",
    "IdConcepto": "ifrs-full_AdjustmentsForSharebasedPayments",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0b42b8af-1c70-4d53-8a2e-89d037f931dc": {
    "Id": "A0b42b8af-1c70-4d53-8a2e-89d037f931dc",
    "IdConcepto": "ifrs-full_AdjustmentsForFairValueGainsLosses",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae0313b22-4e09-45a8-bc19-84eab8da47a6": {
    "Id": "Ae0313b22-4e09-45a8-bc19-84eab8da47a6",
    "IdConcepto": "ifrs-full_AdjustmentsForFairValueGainsLosses",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac4928c2e-af22-4a08-8195-2e59429f9229": {
    "Id": "Ac4928c2e-af22-4a08-8195-2e59429f9229",
    "IdConcepto": "ifrs-full_AdjustmentsForUndistributedProfitsOfAssociates",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aaba0cf55-f984-4650-870e-fea2f7b12059": {
    "Id": "Aaba0cf55-f984-4650-870e-fea2f7b12059",
    "IdConcepto": "ifrs-full_AdjustmentsForUndistributedProfitsOfAssociates",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A06f95c10-41f7-411e-bc55-bfa438bfa08e": {
    "Id": "A06f95c10-41f7-411e-bc55-bfa438bfa08e",
    "IdConcepto": "ifrs-full_AdjustmentsForLossesGainsOnDisposalOfNoncurrentAssets",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5cd8e26f-8252-4b77-94d3-1193eeb37105": {
    "Id": "A5cd8e26f-8252-4b77-94d3-1193eeb37105",
    "IdConcepto": "ifrs-full_AdjustmentsForLossesGainsOnDisposalOfNoncurrentAssets",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afd3eda19-7da0-4b65-9ebb-f2208facd129": {
    "Id": "Afd3eda19-7da0-4b65-9ebb-f2208facd129",
    "IdConcepto": "ifrs_mx-cor_20141205_ParticipacionEnAsociadasYNegociosConjuntos",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afb14c2af-1e4c-4ecb-87ee-6469f1a06a93": {
    "Id": "Afb14c2af-1e4c-4ecb-87ee-6469f1a06a93",
    "IdConcepto": "ifrs_mx-cor_20141205_ParticipacionEnAsociadasYNegociosConjuntos",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A992ac880-e61a-43ad-9060-e8edd8b34b65": {
    "Id": "A992ac880-e61a-43ad-9060-e8edd8b34b65",
    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInInventories",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A20ee58f2-d7d2-4715-96a7-c417e1387165": {
    "Id": "A20ee58f2-d7d2-4715-96a7-c417e1387165",
    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInInventories",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9fdcc002-02e8-4338-8d67-925f1829f277": {
    "Id": "A9fdcc002-02e8-4338-8d67-925f1829f277",
    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae11e5fb1-00ea-4f0d-a999-418c82a8ba36": {
    "Id": "Ae11e5fb1-00ea-4f0d-a999-418c82a8ba36",
    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInTradeAccountReceivable",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae318e380-dae9-4698-a5be-5d5ca07813ee": {
    "Id": "Ae318e380-dae9-4698-a5be-5d5ca07813ee",
    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae8c31781-ebb2-4796-b548-05dfa62d948b": {
    "Id": "Ae8c31781-ebb2-4796-b548-05dfa62d948b",
    "IdConcepto": "ifrs-full_AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2be56038-8f8e-4ea4-a0f8-426e5a936e86": {
    "Id": "A2be56038-8f8e-4ea4-a0f8-426e5a936e86",
    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A56fdc934-00ee-423c-8eed-241ef14b91d1": {
    "Id": "A56fdc934-00ee-423c-8eed-241ef14b91d1",
    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInTradeAccountPayable",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A99a2d594-3526-40fa-8430-d6cb4d875f02": {
    "Id": "A99a2d594-3526-40fa-8430-d6cb4d875f02",
    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A85989ddd-e5bf-4cd3-88af-bfd46b2324d8": {
    "Id": "A85989ddd-e5bf-4cd3-88af-bfd46b2324d8",
    "IdConcepto": "ifrs-full_AdjustmentsForIncreaseDecreaseInOtherOperatingPayables",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A699297fa-e10d-4303-a219-bf1335409b29": {
    "Id": "A699297fa-e10d-4303-a219-bf1335409b29",
    "IdConcepto": "ifrs-full_OtherAdjustmentsForNoncashItems",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A559eabdd-f273-494f-a315-d3873f2bcf08": {
    "Id": "A559eabdd-f273-494f-a315-d3873f2bcf08",
    "IdConcepto": "ifrs-full_OtherAdjustmentsForNoncashItems",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adf4666e3-2741-4e7a-99f2-56799d9e9f48": {
    "Id": "Adf4666e3-2741-4e7a-99f2-56799d9e9f48",
    "IdConcepto": "ifrs-full_OtherAdjustmentsForWhichCashEffectsAreInvestingOrFinancingCashFlow",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A394a308d-b648-4cc5-afc2-01483ea6c860": {
    "Id": "A394a308d-b648-4cc5-afc2-01483ea6c860",
    "IdConcepto": "ifrs-full_OtherAdjustmentsForWhichCashEffectsAreInvestingOrFinancingCashFlow",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A23e39cd9-7b0a-4a96-97ba-175a88f89773": {
    "Id": "A23e39cd9-7b0a-4a96-97ba-175a88f89773",
    "IdConcepto": "ifrs_mx-cor_20141205_AjusteLinealDeIngresosPorArrendamientos",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A39b2f463-e7bb-4917-b550-a89bc1291907": {
    "Id": "A39b2f463-e7bb-4917-b550-a89bc1291907",
    "IdConcepto": "ifrs_mx-cor_20141205_AjusteLinealDeIngresosPorArrendamientos",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7fcc2773-c60e-4e3a-81a9-d49cdfcff7bb": {
    "Id": "A7fcc2773-c60e-4e3a-81a9-d49cdfcff7bb",
    "IdConcepto": "ifrs_mx-cor_20141205_AmortizacionDeComisionesPorArrendamiento",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A42e00ced-5220-4b3b-a69b-33b9abc43726": {
    "Id": "A42e00ced-5220-4b3b-a69b-33b9abc43726",
    "IdConcepto": "ifrs_mx-cor_20141205_AmortizacionDeComisionesPorArrendamiento",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A969716bb-2a17-4d64-98d3-285a05e1596a": {
    "Id": "A969716bb-2a17-4d64-98d3-285a05e1596a",
    "IdConcepto": "ifrs_mx-cor_20141205_AjustePorValorDeLasPropiedades",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4a1f0123-c64b-47d8-8ec3-a63a9436512f": {
    "Id": "A4a1f0123-c64b-47d8-8ec3-a63a9436512f",
    "IdConcepto": "ifrs_mx-cor_20141205_AjustePorValorDeLasPropiedades",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7957cf83-caea-430e-b91b-d2b99c403ba1": {
    "Id": "A7957cf83-caea-430e-b91b-d2b99c403ba1",
    "IdConcepto": "ifrs-full_OtherAdjustmentsToReconcileProfitLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2923fae1-03df-47fb-b5f8-4fac08b0a56e": {
    "Id": "A2923fae1-03df-47fb-b5f8-4fac08b0a56e",
    "IdConcepto": "ifrs-full_OtherAdjustmentsToReconcileProfitLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab79c67cb-3f13-4281-8dd7-697d7b24dd58": {
    "Id": "Ab79c67cb-3f13-4281-8dd7-697d7b24dd58",
    "IdConcepto": "ifrs-full_AdjustmentsForReconcileProfitLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A41a35c30-9fe7-42d8-9f1a-5c74d145f8d7": {
    "Id": "A41a35c30-9fe7-42d8-9f1a-5c74d145f8d7",
    "IdConcepto": "ifrs-full_AdjustmentsForReconcileProfitLoss",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6c115212-3c19-4bea-babe-30584708cba5": {
    "Id": "A6c115212-3c19-4bea-babe-30584708cba5",
    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A222b6291-e4dd-42e4-95d8-7053a5a64f56": {
    "Id": "A222b6291-e4dd-42e4-95d8-7053a5a64f56",
    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperations",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abbaf591f-6a3f-4eb0-b5c3-b85937d238c6": {
    "Id": "Abbaf591f-6a3f-4eb0-b5c3-b85937d238c6",
    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A50d902f3-abf1-4b59-99b0-9a29aabc47d9": {
    "Id": "A50d902f3-abf1-4b59-99b0-9a29aabc47d9",
    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A28e5b05e-fd81-4b8b-a8aa-afb6fc00ed75": {
    "Id": "A28e5b05e-fd81-4b8b-a8aa-afb6fc00ed75",
    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A54eaea31-65bb-49e6-a865-b0a5f41effef": {
    "Id": "A54eaea31-65bb-49e6-a865-b0a5f41effef",
    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4667126c-ef98-44e6-9f1f-2a2b2903eae6": {
    "Id": "A4667126c-ef98-44e6-9f1f-2a2b2903eae6",
    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae0061636-84ac-4bb3-add4-3c209947f6df": {
    "Id": "Ae0061636-84ac-4bb3-add4-3c209947f6df",
    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A89c74e08-710a-43d1-bcec-9b7b7a06a0b7": {
    "Id": "A89c74e08-710a-43d1-bcec-9b7b7a06a0b7",
    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac4969462-7a4f-4fa4-bde3-5a44f2b6ca4c": {
    "Id": "Ac4969462-7a4f-4fa4-bde3-5a44f2b6ca4c",
    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6b992ae8-c1ee-4cb7-b936-aab514ea0b64": {
    "Id": "A6b992ae8-c1ee-4cb7-b936-aab514ea0b64",
    "IdConcepto": "ifrs-full_IncomeTaxesPaidRefundClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8ac41feb-339b-4d89-8ca9-1bcbb9aa608a": {
    "Id": "A8ac41feb-339b-4d89-8ca9-1bcbb9aa608a",
    "IdConcepto": "ifrs-full_IncomeTaxesPaidRefundClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A70423dd5-10e6-401f-8fa8-ac03e617c9d2": {
    "Id": "A70423dd5-10e6-401f-8fa8-ac03e617c9d2",
    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5f79fb22-c773-43dd-9108-82f2a7d33920": {
    "Id": "A5f79fb22-c773-43dd-9108-82f2a7d33920",
    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aac98ed31-9f55-4b1e-915b-009ee5ebc8a2": {
    "Id": "Aac98ed31-9f55-4b1e-915b-009ee5ebc8a2",
    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab1412f8c-a4b5-4fbb-bcf7-b7d86b9aa10f": {
    "Id": "Ab1412f8c-a4b5-4fbb-bcf7-b7d86b9aa10f",
    "IdConcepto": "ifrs-full_CashFlowsFromUsedInOperatingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab1b8c0f3-5fe4-4b7f-8b68-796ee8656dbb": {
    "Id": "Ab1b8c0f3-5fe4-4b7f-8b68-796ee8656dbb",
    "IdConcepto": "ifrs-full_CashFlowsFromLosingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad37cfedb-d5ba-4aa2-ac77-35942f1ca1ed": {
    "Id": "Ad37cfedb-d5ba-4aa2-ac77-35942f1ca1ed",
    "IdConcepto": "ifrs-full_CashFlowsFromLosingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aafa74107-17bb-47a5-8da5-ce15a87b40ef": {
    "Id": "Aafa74107-17bb-47a5-8da5-ce15a87b40ef",
    "IdConcepto": "ifrs-full_CashFlowsUsedInObtainingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5c2f2063-5d6b-426a-8a74-98d5c4a878b3": {
    "Id": "A5c2f2063-5d6b-426a-8a74-98d5c4a878b3",
    "IdConcepto": "ifrs-full_CashFlowsUsedInObtainingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab9d9c346-a431-4733-9ff4-a64ce8883f9a": {
    "Id": "Ab9d9c346-a431-4733-9ff4-a64ce8883f9a",
    "IdConcepto": "ifrs-full_OtherCashReceiptsFromSalesOfEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A447bf4df-f07a-4adf-97aa-5fea8e834d6d": {
    "Id": "A447bf4df-f07a-4adf-97aa-5fea8e834d6d",
    "IdConcepto": "ifrs-full_OtherCashReceiptsFromSalesOfEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1561473a-9850-4d2a-892e-de8c5cbda564": {
    "Id": "A1561473a-9850-4d2a-892e-de8c5cbda564",
    "IdConcepto": "ifrs-full_OtherCashPaymentsToAcquireEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9b4da0bd-dc6d-4a8b-bf8a-1ba55608f18b": {
    "Id": "A9b4da0bd-dc6d-4a8b-bf8a-1ba55608f18b",
    "IdConcepto": "ifrs-full_OtherCashPaymentsToAcquireEquityOrDebtInstrumentsOfOtherEntitiesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0d11550b-edfc-49ea-9355-3b8cfae55467": {
    "Id": "A0d11550b-edfc-49ea-9355-3b8cfae55467",
    "IdConcepto": "ifrs-full_OtherCashReceiptsFromSalesOfInterestsInJointVenturesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A092f46de-03cf-48e7-8841-db312a3ffc0f": {
    "Id": "A092f46de-03cf-48e7-8841-db312a3ffc0f",
    "IdConcepto": "ifrs-full_OtherCashReceiptsFromSalesOfInterestsInJointVenturesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2cbb6463-76d2-40b6-8638-3c1a901fc6fc": {
    "Id": "A2cbb6463-76d2-40b6-8638-3c1a901fc6fc",
    "IdConcepto": "ifrs-full_OtherCashPaymentsToAcquireInterestsInJointVenturesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa2422c35-50bc-4719-afe1-55eb541c653d": {
    "Id": "Aa2422c35-50bc-4719-afe1-55eb541c653d",
    "IdConcepto": "ifrs-full_OtherCashPaymentsToAcquireInterestsInJointVenturesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0d650a52-0857-4b32-b96c-e99c53fb42ab": {
    "Id": "A0d650a52-0857-4b32-b96c-e99c53fb42ab",
    "IdConcepto": "ifrs-full_ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A99e13c33-290d-4c18-b464-a563414e845b": {
    "Id": "A99e13c33-290d-4c18-b464-a563414e845b",
    "IdConcepto": "ifrs-full_ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3f554f88-ed98-4397-8a64-f380495fa46d": {
    "Id": "A3f554f88-ed98-4397-8a64-f380495fa46d",
    "IdConcepto": "ifrs-full_PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A212ec38e-1723-4fd2-bc44-69d435f6185a": {
    "Id": "A212ec38e-1723-4fd2-bc44-69d435f6185a",
    "IdConcepto": "ifrs-full_PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2fce4b92-647b-4cf3-9398-8db8a62ffa6b": {
    "Id": "A2fce4b92-647b-4cf3-9398-8db8a62ffa6b",
    "IdConcepto": "ifrs-full_ProceedsFromSalesOfIntangibleAssetsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abdd1c572-83e9-46d9-9b46-363d2d362b58": {
    "Id": "Abdd1c572-83e9-46d9-9b46-363d2d362b58",
    "IdConcepto": "ifrs-full_ProceedsFromSalesOfIntangibleAssetsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae3d5da5d-a2bc-4ff0-a766-892bdad84037": {
    "Id": "Ae3d5da5d-a2bc-4ff0-a766-892bdad84037",
    "IdConcepto": "ifrs-full_PurchaseOfIntangibleAssetsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4f9e5973-deb7-4b4c-82ee-e5a01a2ae0fb": {
    "Id": "A4f9e5973-deb7-4b4c-82ee-e5a01a2ae0fb",
    "IdConcepto": "ifrs-full_PurchaseOfIntangibleAssetsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1fb02e5b-58f6-49bb-97d9-2b5a155b269f": {
    "Id": "A1fb02e5b-58f6-49bb-97d9-2b5a155b269f",
    "IdConcepto": "ifrs-full_ProceedsFromOtherLongtermAssetsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A079a71b6-8574-4a20-9fbf-d271bc0e6030": {
    "Id": "A079a71b6-8574-4a20-9fbf-d271bc0e6030",
    "IdConcepto": "ifrs-full_ProceedsFromOtherLongtermAssetsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2a3ac176-368a-4d39-a9c9-382c44f29014": {
    "Id": "A2a3ac176-368a-4d39-a9c9-382c44f29014",
    "IdConcepto": "ifrs-full_PurchaseOfOtherLongtermAssetsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1d61248d-bbcc-421a-a378-7c7c1db3f149": {
    "Id": "A1d61248d-bbcc-421a-a378-7c7c1db3f149",
    "IdConcepto": "ifrs-full_PurchaseOfOtherLongtermAssetsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A71e673b3-69de-4411-b3f0-5050f0800b1e": {
    "Id": "A71e673b3-69de-4411-b3f0-5050f0800b1e",
    "IdConcepto": "ifrs-full_ProceedsFromGovernmentGrantsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A39f44df2-cc08-4771-9094-aa486c82bd0c": {
    "Id": "A39f44df2-cc08-4771-9094-aa486c82bd0c",
    "IdConcepto": "ifrs-full_ProceedsFromGovernmentGrantsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afe0892f3-2408-4bbe-b7c0-781a067e47ae": {
    "Id": "Afe0892f3-2408-4bbe-b7c0-781a067e47ae",
    "IdConcepto": "ifrs-full_CashAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ababe7914-4563-4fb1-a6b3-648bf2105261": {
    "Id": "Ababe7914-4563-4fb1-a6b3-648bf2105261",
    "IdConcepto": "ifrs-full_CashAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac08d0fe6-4d60-4400-8c43-740d7b0f0767": {
    "Id": "Ac08d0fe6-4d60-4400-8c43-740d7b0f0767",
    "IdConcepto": "ifrs-full_CashReceiptsFromRepaymentOfAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0e1400e8-71ad-4743-bea0-6df83a680466": {
    "Id": "A0e1400e8-71ad-4743-bea0-6df83a680466",
    "IdConcepto": "ifrs-full_CashReceiptsFromRepaymentOfAdvancesAndLoansMadeToOtherPartiesClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A32f22c1f-8b8a-4fb0-9938-3bde74c7816e": {
    "Id": "A32f22c1f-8b8a-4fb0-9938-3bde74c7816e",
    "IdConcepto": "ifrs-full_CashPaymentsForFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae88c6328-a409-4e25-a531-3f0aae17d50c": {
    "Id": "Ae88c6328-a409-4e25-a531-3f0aae17d50c",
    "IdConcepto": "ifrs-full_CashPaymentsForFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7771cc43-4b14-48eb-9951-933f6d4230b8": {
    "Id": "A7771cc43-4b14-48eb-9951-933f6d4230b8",
    "IdConcepto": "ifrs-full_CashReceiptsFromFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A453a7ede-e8fa-482e-9398-104f64cd9e9a": {
    "Id": "A453a7ede-e8fa-482e-9398-104f64cd9e9a",
    "IdConcepto": "ifrs-full_CashReceiptsFromFutureContractsForwardContractsOptionContractsAndSwapContractsClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0e20c369-6405-4ea2-82af-da0d5b9dd4f4": {
    "Id": "A0e20c369-6405-4ea2-82af-da0d5b9dd4f4",
    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acd57c53b-c6b8-4a7a-8b1b-6d8d5ead0307": {
    "Id": "Acd57c53b-c6b8-4a7a-8b1b-6d8d5ead0307",
    "IdConcepto": "ifrs-full_DividendsReceivedClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3088d41f-5228-4978-a62f-ae3f18cd1674": {
    "Id": "A3088d41f-5228-4978-a62f-ae3f18cd1674",
    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A85d18fc4-3c00-49af-a4da-4e9bb7123e14": {
    "Id": "A85d18fc4-3c00-49af-a4da-4e9bb7123e14",
    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3eec3d84-1a43-4dc3-8be0-435b30b5a228": {
    "Id": "A3eec3d84-1a43-4dc3-8be0-435b30b5a228",
    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A23fb6583-6f37-4042-8a93-0adc7816b4ec": {
    "Id": "A23fb6583-6f37-4042-8a93-0adc7816b4ec",
    "IdConcepto": "ifrs-full_InterestReceivedClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A08634c40-1b18-4a98-80ca-82608a0aae90": {
    "Id": "A08634c40-1b18-4a98-80ca-82608a0aae90",
    "IdConcepto": "ifrs-full_IncomeTaxesPaidRefundClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4b706951-dba9-470a-9f0a-00efd920d199": {
    "Id": "A4b706951-dba9-470a-9f0a-00efd920d199",
    "IdConcepto": "ifrs-full_IncomeTaxesPaidRefundClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A82b9a19e-24c5-462f-b3f7-d1b9c6b8a061": {
    "Id": "A82b9a19e-24c5-462f-b3f7-d1b9c6b8a061",
    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adc02191d-1848-4587-80b6-dfbcc08013d9": {
    "Id": "Adc02191d-1848-4587-80b6-dfbcc08013d9",
    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0b07421b-393d-499b-90e6-d01e63f40139": {
    "Id": "A0b07421b-393d-499b-90e6-d01e63f40139",
    "IdConcepto": "ifrs-full_CashFlowsFromUsedInInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A46e60239-95a3-40d5-88c4-b9352ec4ffe1": {
    "Id": "A46e60239-95a3-40d5-88c4-b9352ec4ffe1",
    "IdConcepto": "ifrs-full_CashFlowsFromUsedInInvestingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A546afe0d-bcd7-4695-8df8-7bcf8763340e": {
    "Id": "A546afe0d-bcd7-4695-8df8-7bcf8763340e",
    "IdConcepto": "ifrs-full_ProceedsFromChangesInOwnershipInterestsInSubsidiaries",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A87b8e79a-8fad-4a9e-827e-dc4fe26356e3": {
    "Id": "A87b8e79a-8fad-4a9e-827e-dc4fe26356e3",
    "IdConcepto": "ifrs-full_ProceedsFromChangesInOwnershipInterestsInSubsidiaries",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aadd4fffd-f1f2-4c49-b8cf-43196ee6fc17": {
    "Id": "Aadd4fffd-f1f2-4c49-b8cf-43196ee6fc17",
    "IdConcepto": "ifrs-full_PaymentsFromChangesInOwnershipInterestsInSubsidiaries",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A99a8aded-0020-4075-9332-95a6d76dbbec": {
    "Id": "A99a8aded-0020-4075-9332-95a6d76dbbec",
    "IdConcepto": "ifrs-full_PaymentsFromChangesInOwnershipInterestsInSubsidiaries",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0f4613de-295d-4734-9aae-cb2ec1e5b596": {
    "Id": "A0f4613de-295d-4734-9aae-cb2ec1e5b596",
    "IdConcepto": "ifrs-full_ProceedsFromIssuingShares",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7a88eb33-b1ae-48aa-9106-44989ba16105": {
    "Id": "A7a88eb33-b1ae-48aa-9106-44989ba16105",
    "IdConcepto": "ifrs-full_ProceedsFromIssuingShares",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa5d9f3a8-3bf0-4ae8-8df4-54384767e832": {
    "Id": "Aa5d9f3a8-3bf0-4ae8-8df4-54384767e832",
    "IdConcepto": "ifrs-full_ProceedsFromIssuingOtherEquityInstruments",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aab27f632-a73d-47cb-832e-7ef63a768739": {
    "Id": "Aab27f632-a73d-47cb-832e-7ef63a768739",
    "IdConcepto": "ifrs-full_ProceedsFromIssuingOtherEquityInstruments",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afd8b9df7-ef78-44b6-9f59-b0c04a6c4e6c": {
    "Id": "Afd8b9df7-ef78-44b6-9f59-b0c04a6c4e6c",
    "IdConcepto": "ifrs-full_PaymentsToAcquireOrRedeemEntitysShares",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9022bb0b-b803-47ad-b131-30945340b18c": {
    "Id": "A9022bb0b-b803-47ad-b131-30945340b18c",
    "IdConcepto": "ifrs-full_PaymentsToAcquireOrRedeemEntitysShares",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab8fc4559-5819-47b9-94f0-680ca230b16d": {
    "Id": "Ab8fc4559-5819-47b9-94f0-680ca230b16d",
    "IdConcepto": "ifrs-full_PaymentsOfOtherEquityInstruments",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0cc1e498-e540-47a1-87a4-026d597a9a21": {
    "Id": "A0cc1e498-e540-47a1-87a4-026d597a9a21",
    "IdConcepto": "ifrs-full_PaymentsOfOtherEquityInstruments",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac26eb09b-6810-42cb-97a0-a106ee657768": {
    "Id": "Ac26eb09b-6810-42cb-97a0-a106ee657768",
    "IdConcepto": "ifrs-full_ProceedsFromBorrowingsClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7409699a-b7a2-4d26-a721-05e732f8fd04": {
    "Id": "A7409699a-b7a2-4d26-a721-05e732f8fd04",
    "IdConcepto": "ifrs-full_ProceedsFromBorrowingsClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A063a4e2c-f06d-445a-8d12-da612e6fb4da": {
    "Id": "A063a4e2c-f06d-445a-8d12-da612e6fb4da",
    "IdConcepto": "ifrs-full_RepaymentsOfBorrowingsClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ade94b506-207f-452a-9294-6bbac2735763": {
    "Id": "Ade94b506-207f-452a-9294-6bbac2735763",
    "IdConcepto": "ifrs-full_RepaymentsOfBorrowingsClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa2957aae-a06b-4d30-9096-989551d42c33": {
    "Id": "Aa2957aae-a06b-4d30-9096-989551d42c33",
    "IdConcepto": "ifrs-full_PaymentsOfFinanceLeaseLiabilitiesClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5d25f467-acf1-4404-9afd-8c1edec1a085": {
    "Id": "A5d25f467-acf1-4404-9afd-8c1edec1a085",
    "IdConcepto": "ifrs-full_PaymentsOfFinanceLeaseLiabilitiesClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A200cbdad-6888-4bf7-95e8-32b36378dbc4": {
    "Id": "A200cbdad-6888-4bf7-95e8-32b36378dbc4",
    "IdConcepto": "ifrs-full_ProceedsFromGovernmentGrantsClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A62ca371d-230a-4393-a654-b8d0b1454846": {
    "Id": "A62ca371d-230a-4393-a654-b8d0b1454846",
    "IdConcepto": "ifrs-full_ProceedsFromGovernmentGrantsClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abc90cb13-b708-4ae5-8685-45a6aecb4487": {
    "Id": "Abc90cb13-b708-4ae5-8685-45a6aecb4487",
    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A188c8987-cd5b-42d9-b6da-5a9b58369d7d": {
    "Id": "A188c8987-cd5b-42d9-b6da-5a9b58369d7d",
    "IdConcepto": "ifrs-full_DividendsPaidClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aed9bbc42-0480-4c1f-908a-e509ef46fe72": {
    "Id": "Aed9bbc42-0480-4c1f-908a-e509ef46fe72",
    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A88873385-74e5-489c-a5ff-cba6005507f9": {
    "Id": "A88873385-74e5-489c-a5ff-cba6005507f9",
    "IdConcepto": "ifrs-full_InterestPaidClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afc24d98c-256c-4034-adc2-ecf27a355d87": {
    "Id": "Afc24d98c-256c-4034-adc2-ecf27a355d87",
    "IdConcepto": "ifrs-full_IncomeTaxesPaidRefundClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6a017536-c1b4-43fe-9e1f-69b06be1871a": {
    "Id": "A6a017536-c1b4-43fe-9e1f-69b06be1871a",
    "IdConcepto": "ifrs-full_IncomeTaxesPaidRefundClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab204a34f-8c6a-44fc-a154-a5934f697a21": {
    "Id": "Ab204a34f-8c6a-44fc-a154-a5934f697a21",
    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A14e5e62e-6e3a-406b-b1e9-e99eea16eaeb": {
    "Id": "A14e5e62e-6e3a-406b-b1e9-e99eea16eaeb",
    "IdConcepto": "ifrs-full_OtherInflowsOutflowsOfCashClassifiedAsFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0dd220be-1408-4e5e-bdf6-ca65b68b1768": {
    "Id": "A0dd220be-1408-4e5e-bdf6-ca65b68b1768",
    "IdConcepto": "ifrs-full_CashFlowsFromUsedInFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab68abcd5-d7ba-49a9-8be0-af8f269f02d0": {
    "Id": "Ab68abcd5-d7ba-49a9-8be0-af8f269f02d0",
    "IdConcepto": "ifrs-full_CashFlowsFromUsedInFinancingActivities",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac8df12c6-2bf8-41fa-85ac-27bc1bed84aa": {
    "Id": "Ac8df12c6-2bf8-41fa-85ac-27bc1bed84aa",
    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5ed1222f-3e96-4665-90ef-bb48a9280c13": {
    "Id": "A5ed1222f-3e96-4665-90ef-bb48a9280c13",
    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A79bf70f8-4689-4e7e-bd79-84696c9b6dda": {
    "Id": "A79bf70f8-4689-4e7e-bd79-84696c9b6dda",
    "IdConcepto": "ifrs-full_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5b69ffc9-7924-4239-89d2-f201afcd48f9": {
    "Id": "A5b69ffc9-7924-4239-89d2-f201afcd48f9",
    "IdConcepto": "ifrs-full_EffectOfExchangeRateChangesOnCashAndCashEquivalents",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8a304845-98f9-4cd0-ba4f-e266afd52a29": {
    "Id": "A8a304845-98f9-4cd0-ba4f-e266afd52a29",
    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aacbfbf12-d498-4ae3-8439-9ab2d147745d": {
    "Id": "Aacbfbf12-d498-4ae3-8439-9ab2d147745d",
    "IdConcepto": "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abae301d4-541d-4b94-b11e-8ca5868ae285": {
    "Id": "Abae301d4-541d-4b94-b11e-8ca5868ae285",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af958383c-6dea-4e23-ba10-0cc35d34e451": {
    "Id": "Af958383c-6dea-4e23-ba10-0cc35d34e451",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A35369017-c4f4-430d-b4a6-8ffd46d23342": {
    "Id": "A35369017-c4f4-430d-b4a6-8ffd46d23342",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A56ff84d9-4809-4458-9dcb-acb50867b536": {
    "Id": "A56ff84d9-4809-4458-9dcb-acb50867b536",
    "IdConcepto": "ifrs-full_CashAndCashEquivalents",
    "IdContextoPlantilla": "cierre_trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
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