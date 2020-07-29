///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ias_1_2014-03-05_role-800200
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ias_1_2014_03_05_role_800200 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ias_1_2014_03_05_role_800200
         */
        constructor() {

            this.ListadoDeFormulas = {
                //Se integran formulas de < Value Assertion>  ID : VA_800200_03:  Total de Impuestos a la utilidad = Impuestos a la utilidad[dimensional]
                'formula103': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula103',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El total en el hecho {variable1} es igual al valor de los impuestos a la utilidad.',
                        MensajeError: 'El total en el hecho {variable1} debería ser igual al valor de los impuestos a la utilidad.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_IncomeTaxExpenseContinuingOperations',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalDeImpuestosALaUtilidad',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                //Se integran formulas de < Value Assertion>  ID : VA_800200_02:  Total de gastos financieros = Gastos financieros[dimensional]
                'formula104': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula104',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El valor del hecho del {variable1} es igual al valor de los gastos financieros.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser igual al valor de los gastos financieros.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_FinanceCosts',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalDeGastosFinancieros',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                //Se integran formulas de < Value Assertion>  ID : VA_800200_01:  Total de ingresos financieros = Ingresos financieros[dimensional]
                'formula105': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula105',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El valor del hecho del {variable1}  es igual al valor de los ingresos financieros.',
                        MensajeError: 'El valor del hecho del {variable1}  debería ser igual al valor de los ingresos financieros.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_FinanceIncome',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalDeIngresosFinancieros',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
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
  "Aa3044f02-80ae-4d51-821a-6604ec7409e9": {
    "Id": "Aa3044f02-80ae-4d51-821a-6604ec7409e9",
    "IdConcepto": "ifrs-full_RevenueFromRenderingOfServices",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aec91b4d0-42d4-4a73-8d72-1330ce0a8bf0": {
    "Id": "Aec91b4d0-42d4-4a73-8d72-1330ce0a8bf0",
    "IdConcepto": "ifrs-full_RevenueFromRenderingOfServices",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A342b7e51-cc6d-4c3c-a1ad-3df18eeda9e1": {
    "Id": "A342b7e51-cc6d-4c3c-a1ad-3df18eeda9e1",
    "IdConcepto": "ifrs-full_RevenueFromRenderingOfServices",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Add747ea6-db47-42fc-9603-047981b03815": {
    "Id": "Add747ea6-db47-42fc-9603-047981b03815",
    "IdConcepto": "ifrs-full_RevenueFromRenderingOfServices",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0a67b516-6858-4708-acc4-42e2ac9dd924": {
    "Id": "A0a67b516-6858-4708-acc4-42e2ac9dd924",
    "IdConcepto": "ifrs-full_RevenueFromSaleOfGoods",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A50b496a4-3846-46b5-b580-2120ed102eee": {
    "Id": "A50b496a4-3846-46b5-b580-2120ed102eee",
    "IdConcepto": "ifrs-full_RevenueFromSaleOfGoods",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adb01d9b9-be8d-458a-beee-441f4591cc10": {
    "Id": "Adb01d9b9-be8d-458a-beee-441f4591cc10",
    "IdConcepto": "ifrs-full_RevenueFromSaleOfGoods",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A215dcf0c-cd6a-4918-9fab-080c64bb28aa": {
    "Id": "A215dcf0c-cd6a-4918-9fab-080c64bb28aa",
    "IdConcepto": "ifrs-full_RevenueFromSaleOfGoods",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab1343701-aa2d-44ba-a384-b32d61774d61": {
    "Id": "Ab1343701-aa2d-44ba-a384-b32d61774d61",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac2bc0f1a-e0f8-4341-98c8-6d4e3f8e2440": {
    "Id": "Ac2bc0f1a-e0f8-4341-98c8-6d4e3f8e2440",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab4e1955e-3948-4c51-ac2d-6b62d7f46db8": {
    "Id": "Ab4e1955e-3948-4c51-ac2d-6b62d7f46db8",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad5dfbfec-17e2-4976-806b-46995a381790": {
    "Id": "Ad5dfbfec-17e2-4976-806b-46995a381790",
    "IdConcepto": "ifrs-full_RevenueFromInterest",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0ab1db62-7e32-4abb-8f22-557ebfc6c114": {
    "Id": "A0ab1db62-7e32-4abb-8f22-557ebfc6c114",
    "IdConcepto": "ifrs-full_RevenueFromRoyalties",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abc57ab02-df8f-45b9-bfaa-e02a527af38d": {
    "Id": "Abc57ab02-df8f-45b9-bfaa-e02a527af38d",
    "IdConcepto": "ifrs-full_RevenueFromRoyalties",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A763f1de8-9135-467e-8b9f-9a4a6b6d5398": {
    "Id": "A763f1de8-9135-467e-8b9f-9a4a6b6d5398",
    "IdConcepto": "ifrs-full_RevenueFromRoyalties",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9b452e60-b919-4931-be9c-2edcb5587b85": {
    "Id": "A9b452e60-b919-4931-be9c-2edcb5587b85",
    "IdConcepto": "ifrs-full_RevenueFromRoyalties",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A74639b81-833b-4a31-9744-ce8e129f0747": {
    "Id": "A74639b81-833b-4a31-9744-ce8e129f0747",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1e734802-b973-4844-8a3b-b5de6fe59e88": {
    "Id": "A1e734802-b973-4844-8a3b-b5de6fe59e88",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3bab9132-7c4c-4e96-bf6e-5ee0edf7540c": {
    "Id": "A3bab9132-7c4c-4e96-bf6e-5ee0edf7540c",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A30b235ba-8537-46f3-bfdb-6cd0a51c808c": {
    "Id": "A30b235ba-8537-46f3-bfdb-6cd0a51c808c",
    "IdConcepto": "ifrs-full_RevenueFromDividends",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa50e6a11-3aa3-49bf-98d5-b1fe37872f2b": {
    "Id": "Aa50e6a11-3aa3-49bf-98d5-b1fe37872f2b",
    "IdConcepto": "ifrs-full_RentalIncome",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adb341335-3fcc-4ff6-b0b2-d8fd453f2480": {
    "Id": "Adb341335-3fcc-4ff6-b0b2-d8fd453f2480",
    "IdConcepto": "ifrs-full_RentalIncome",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af6a3ed9f-fffb-4eae-81bd-5f062ccab887": {
    "Id": "Af6a3ed9f-fffb-4eae-81bd-5f062ccab887",
    "IdConcepto": "ifrs-full_RentalIncome",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af1df5a95-faed-4be4-9300-f53e7c9e05ca": {
    "Id": "Af1df5a95-faed-4be4-9300-f53e7c9e05ca",
    "IdConcepto": "ifrs-full_RentalIncome",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab8b2c907-2b09-4883-b90b-732bd28b0b99": {
    "Id": "Ab8b2c907-2b09-4883-b90b-732bd28b0b99",
    "IdConcepto": "ifrs-full_RevenueFromConstructionContracts",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8ffbec7f-89ee-4f55-9047-83b1d66d3807": {
    "Id": "A8ffbec7f-89ee-4f55-9047-83b1d66d3807",
    "IdConcepto": "ifrs-full_RevenueFromConstructionContracts",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A19a533e9-6398-46da-a578-e5dd1c0a90cc": {
    "Id": "A19a533e9-6398-46da-a578-e5dd1c0a90cc",
    "IdConcepto": "ifrs-full_RevenueFromConstructionContracts",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4712cf62-0f52-4fab-a91f-2b238c3398d5": {
    "Id": "A4712cf62-0f52-4fab-a91f-2b238c3398d5",
    "IdConcepto": "ifrs-full_RevenueFromConstructionContracts",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad15678fa-2433-4096-bf5d-9b60d71cb6e6": {
    "Id": "Ad15678fa-2433-4096-bf5d-9b60d71cb6e6",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9521962b-5c4a-4cc6-b211-91fc3f9c9ad3": {
    "Id": "A9521962b-5c4a-4cc6-b211-91fc3f9c9ad3",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac8a8c868-8dcd-4850-8dcb-740977c182be": {
    "Id": "Ac8a8c868-8dcd-4850-8dcb-740977c182be",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A475a1684-7a71-45a2-a552-9c7620dd3ad0": {
    "Id": "A475a1684-7a71-45a2-a552-9c7620dd3ad0",
    "IdConcepto": "ifrs-full_OtherRevenue",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad1c06620-9daf-4154-845f-b09e5812adc3": {
    "Id": "Ad1c06620-9daf-4154-845f-b09e5812adc3",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A82d1a6e3-405f-4bc5-914f-4f1e5bdf8fa7": {
    "Id": "A82d1a6e3-405f-4bc5-914f-4f1e5bdf8fa7",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trimestre",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A96b3fa73-9c8d-440c-b1f4-5c5156a2634d": {
    "Id": "A96b3fa73-9c8d-440c-b1f4-5c5156a2634d",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7e9ee5e9-7189-4093-b913-098fb862bc58": {
    "Id": "A7e9ee5e9-7189-4093-b913-098fb862bc58",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "info_12_meses_al_cierre_trim_eje_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aaabc1338-51eb-49e8-a292-f172c31aa495": {
    "Id": "Aaabc1338-51eb-49e8-a292-f172c31aa495",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A305195b7-19be-469e-a0df-9834897af900": {
    "Id": "A305195b7-19be-469e-a0df-9834897af900",
    "IdConcepto": "ifrs-full_Revenue",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A57bd6341-ca6f-416f-9170-23b3a3eade97": {
    "Id": "A57bd6341-ca6f-416f-9170-23b3a3eade97",
    "IdConcepto": "ifrs_mx-cor_20141205_InteresesGanados",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aec672aa8-ce68-49d9-9f29-148896150503": {
    "Id": "Aec672aa8-ce68-49d9-9f29-148896150503",
    "IdConcepto": "ifrs_mx-cor_20141205_InteresesGanados",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af62caeb9-860f-4d0a-9e84-fbf61c608162": {
    "Id": "Af62caeb9-860f-4d0a-9e84-fbf61c608162",
    "IdConcepto": "ifrs_mx-cor_20141205_InteresesGanados",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A769581c8-f020-46e3-b1c9-67e840743f01": {
    "Id": "A769581c8-f020-46e3-b1c9-67e840743f01",
    "IdConcepto": "ifrs_mx-cor_20141205_InteresesGanados",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A52548121-4982-44b0-9de1-e57830383a87": {
    "Id": "A52548121-4982-44b0-9de1-e57830383a87",
    "IdConcepto": "ifrs_mx-cor_20141205_UtilidadPorFluctuacionCambiaria",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac2b31425-a003-4674-b683-e75a6fbb1737": {
    "Id": "Ac2b31425-a003-4674-b683-e75a6fbb1737",
    "IdConcepto": "ifrs_mx-cor_20141205_UtilidadPorFluctuacionCambiaria",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af232526f-ac15-458d-aa03-d2716e570583": {
    "Id": "Af232526f-ac15-458d-aa03-d2716e570583",
    "IdConcepto": "ifrs_mx-cor_20141205_UtilidadPorFluctuacionCambiaria",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2066d676-6cc7-446b-89a9-a56caee9f269": {
    "Id": "A2066d676-6cc7-446b-89a9-a56caee9f269",
    "IdConcepto": "ifrs_mx-cor_20141205_UtilidadPorFluctuacionCambiaria",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A993ae91d-1421-448e-84aa-c2c640676758": {
    "Id": "A993ae91d-1421-448e-84aa-c2c640676758",
    "IdConcepto": "ifrs-full_GainsOnChangeInFairValueOfDerivatives",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3388c111-d495-4141-92a4-da5b2dc200f4": {
    "Id": "A3388c111-d495-4141-92a4-da5b2dc200f4",
    "IdConcepto": "ifrs-full_GainsOnChangeInFairValueOfDerivatives",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A29eb2127-3d8c-420f-8c7f-5cdaec0d847e": {
    "Id": "A29eb2127-3d8c-420f-8c7f-5cdaec0d847e",
    "IdConcepto": "ifrs-full_GainsOnChangeInFairValueOfDerivatives",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adcc3ff4d-1517-402c-835d-62eb5ec2c657": {
    "Id": "Adcc3ff4d-1517-402c-835d-62eb5ec2c657",
    "IdConcepto": "ifrs-full_GainsOnChangeInFairValueOfDerivatives",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af06719f6-bab8-4920-a7ab-6eac0a737b91": {
    "Id": "Af06719f6-bab8-4920-a7ab-6eac0a737b91",
    "IdConcepto": "ifrs_mx-cor_20141205_UtilidadPorCambiosEnValorRazonableDeInstrumentosFinancieros",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A235d7205-be4f-4d39-afd1-e061761a8b7c": {
    "Id": "A235d7205-be4f-4d39-afd1-e061761a8b7c",
    "IdConcepto": "ifrs_mx-cor_20141205_UtilidadPorCambiosEnValorRazonableDeInstrumentosFinancieros",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac80b07ed-c71b-4a68-aa79-175f1b02dfa6": {
    "Id": "Ac80b07ed-c71b-4a68-aa79-175f1b02dfa6",
    "IdConcepto": "ifrs_mx-cor_20141205_UtilidadPorCambiosEnValorRazonableDeInstrumentosFinancieros",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7d7a4dbb-d513-4ce6-805a-f957f168c408": {
    "Id": "A7d7a4dbb-d513-4ce6-805a-f957f168c408",
    "IdConcepto": "ifrs_mx-cor_20141205_UtilidadPorCambiosEnValorRazonableDeInstrumentosFinancieros",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad504c089-b3cb-4452-b5db-9d1065f23f76": {
    "Id": "Ad504c089-b3cb-4452-b5db-9d1065f23f76",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A948eb4ac-a80a-49e6-bf11-1784d51ef98f": {
    "Id": "A948eb4ac-a80a-49e6-bf11-1784d51ef98f",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A948eb4ac-a80a-49e6-bf11-1784d51ef98g": {
      "Id": "A948eb4ac-a80a-49e6-bf11-1784d51ef98g",
      "IdConcepto": "ifrs_mx-cor_20141205_TotalDeIngresosFinancieros",
      "IdContextoPlantilla": "trimestre_ejercicio_anterior",
      "Hechos": [],
      "IdUnidadPlantilla": "Peso_Mx",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },
  "A948eb4ac-a80a-49e6-bf11-1784d51ef98h": {
      "Id": "A948eb4ac-a80a-49e6-bf11-1784d51ef98h",
      "IdConcepto": "ifrs_mx-cor_20141205_TotalDeIngresosFinancieros",
      "IdContextoPlantilla": "acumulado_ejercicio_anterior",
      "Hechos": [],
      "IdUnidadPlantilla": "Peso_Mx",
      "Decimales": "-3",
      "Precision": null,
      "Valor": "#valorDefaultNumerico",
      "ValorNumerador": null,
      "ValorDenominador": null
  },
  "Ab30505b2-a075-464b-8913-6c308640fe6d": {
    "Id": "Ab30505b2-a075-464b-8913-6c308640fe6d",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A21eae28c-9bf2-4efc-b406-8a2f69e5bffa": {
    "Id": "A21eae28c-9bf2-4efc-b406-8a2f69e5bffa",
    "IdConcepto": "ifrs-full_OtherFinanceIncome",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8623b401-1e1b-4925-a24d-24818ee9b371": {
    "Id": "A8623b401-1e1b-4925-a24d-24818ee9b371",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeIngresosFinancieros",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6bfad3fa-6a44-441b-9b08-c03a58e8ec5a": {
    "Id": "A6bfad3fa-6a44-441b-9b08-c03a58e8ec5a",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeIngresosFinancieros",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A58846fed-dbea-4958-b2c5-ba5066e3c1fe": {
    "Id": "A58846fed-dbea-4958-b2c5-ba5066e3c1fe",
    "IdConcepto": "ifrs_mx-cor_20141205_InteresesDevengadosACargo",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aad7e01e8-d573-41ac-bd35-6170af93ed9b": {
    "Id": "Aad7e01e8-d573-41ac-bd35-6170af93ed9b",
    "IdConcepto": "ifrs_mx-cor_20141205_InteresesDevengadosACargo",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A079e5f44-7175-4ee3-aeb9-6e7e46c8e762": {
    "Id": "A079e5f44-7175-4ee3-aeb9-6e7e46c8e762",
    "IdConcepto": "ifrs_mx-cor_20141205_InteresesDevengadosACargo",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4e911be5-006d-45b6-b5bc-827647512fce": {
    "Id": "A4e911be5-006d-45b6-b5bc-827647512fce",
    "IdConcepto": "ifrs_mx-cor_20141205_InteresesDevengadosACargo",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae3ad8973-c812-4aed-99ae-44d6bb39c3c5": {
    "Id": "Ae3ad8973-c812-4aed-99ae-44d6bb39c3c5",
    "IdConcepto": "ifrs_mx-cor_20141205_PerdidaPorFluctuacionCambiaria",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A186d76d1-ce4d-4773-ae73-2a1e6c36a3d5": {
    "Id": "A186d76d1-ce4d-4773-ae73-2a1e6c36a3d5",
    "IdConcepto": "ifrs_mx-cor_20141205_PerdidaPorFluctuacionCambiaria",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aedaf2d34-d7aa-410d-9668-828b9b13dc83": {
    "Id": "Aedaf2d34-d7aa-410d-9668-828b9b13dc83",
    "IdConcepto": "ifrs_mx-cor_20141205_PerdidaPorFluctuacionCambiaria",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A035fea61-04f8-47ec-af19-0f42c3bd8c81": {
    "Id": "A035fea61-04f8-47ec-af19-0f42c3bd8c81",
    "IdConcepto": "ifrs_mx-cor_20141205_PerdidaPorFluctuacionCambiaria",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8c865efe-8e18-496b-89ac-ece894214548": {
    "Id": "A8c865efe-8e18-496b-89ac-ece894214548",
    "IdConcepto": "ifrs-full_LossesOnChangeInFairValueOfDerivatives",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A542a7575-a451-443d-9871-07ac0fbd7f40": {
    "Id": "A542a7575-a451-443d-9871-07ac0fbd7f40",
    "IdConcepto": "ifrs-full_LossesOnChangeInFairValueOfDerivatives",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad885ca3e-7ab3-4c52-b70a-5af3e951c861": {
    "Id": "Ad885ca3e-7ab3-4c52-b70a-5af3e951c861",
    "IdConcepto": "ifrs-full_LossesOnChangeInFairValueOfDerivatives",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa1407a57-3b93-4fc5-bb36-e36942983cec": {
    "Id": "Aa1407a57-3b93-4fc5-bb36-e36942983cec",
    "IdConcepto": "ifrs-full_LossesOnChangeInFairValueOfDerivatives",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abc4393f3-2ff5-4206-b608-0495cce0df8d": {
    "Id": "Abc4393f3-2ff5-4206-b608-0495cce0df8d",
    "IdConcepto": "ifrs_mx-cor_20141205_PerdidaPorCambiosEnValorRazonableDeInstrumentosFinancieros",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0361eb97-3e35-45b9-a513-b6d992b59ee0": {
    "Id": "A0361eb97-3e35-45b9-a513-b6d992b59ee0",
    "IdConcepto": "ifrs_mx-cor_20141205_PerdidaPorCambiosEnValorRazonableDeInstrumentosFinancieros",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A59531f1d-6106-4029-9ce3-0003a1be481b": {
    "Id": "A59531f1d-6106-4029-9ce3-0003a1be481b",
    "IdConcepto": "ifrs_mx-cor_20141205_PerdidaPorCambiosEnValorRazonableDeInstrumentosFinancieros",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae372de70-bcd1-4513-af7f-46c06cd33b75": {
    "Id": "Ae372de70-bcd1-4513-af7f-46c06cd33b75",
    "IdConcepto": "ifrs_mx-cor_20141205_PerdidaPorCambiosEnValorRazonableDeInstrumentosFinancieros",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab058c18f-ad89-45f6-a369-b09122cae82d": {
    "Id": "Ab058c18f-ad89-45f6-a369-b09122cae82d",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abd9c172c-3131-4aa1-bcea-5af0c3a9e980": {
    "Id": "Abd9c172c-3131-4aa1-bcea-5af0c3a9e980",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2adb96e6-70d9-4dbc-ab2e-a7376a28400a": {
    "Id": "A2adb96e6-70d9-4dbc-ab2e-a7376a28400a",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4ee874b9-bcd6-4c24-b6bc-59a523bb1819": {
    "Id": "A4ee874b9-bcd6-4c24-b6bc-59a523bb1819",
    "IdConcepto": "ifrs-full_OtherFinanceCost",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A45b8209b-0b39-4014-8160-1defb68b49a7": {
    "Id": "A45b8209b-0b39-4014-8160-1defb68b49a7",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeGastosFinancieros",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A53a65e27-0df7-4c82-b0b6-4bca05f56304": {
    "Id": "A53a65e27-0df7-4c82-b0b6-4bca05f56304",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeGastosFinancieros",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae5b21fb6-f6f5-4627-9a94-47cc06624c40": {
    "Id": "Ae5b21fb6-f6f5-4627-9a94-47cc06624c40",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeGastosFinancieros",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A524401af-d967-43e7-8bb2-363e9258309b": {
    "Id": "A524401af-d967-43e7-8bb2-363e9258309b",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeGastosFinancieros",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abbd428a3-2a6c-46b4-8eea-188e1e0ee626": {
    "Id": "Abbd428a3-2a6c-46b4-8eea-188e1e0ee626",
    "IdConcepto": "ifrs_mx-cor_20141205_ImpuestoCausado",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8aeb914a-c026-4518-88db-8fe2cbc909dc": {
    "Id": "A8aeb914a-c026-4518-88db-8fe2cbc909dc",
    "IdConcepto": "ifrs_mx-cor_20141205_ImpuestoCausado",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A719bcd86-1b4c-4b7c-b4b9-176e666645d9": {
    "Id": "A719bcd86-1b4c-4b7c-b4b9-176e666645d9",
    "IdConcepto": "ifrs_mx-cor_20141205_ImpuestoCausado",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8d864987-cc46-47ea-b95a-db33165cdc04": {
    "Id": "A8d864987-cc46-47ea-b95a-db33165cdc04",
    "IdConcepto": "ifrs_mx-cor_20141205_ImpuestoCausado",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A31e18188-6517-4588-a2ed-318d9169fa67": {
    "Id": "A31e18188-6517-4588-a2ed-318d9169fa67",
    "IdConcepto": "ifrs_mx-cor_20141205_ImpuestoDiferido",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad4335872-0e50-46ae-9618-5bc8ab32de4a": {
    "Id": "Ad4335872-0e50-46ae-9618-5bc8ab32de4a",
    "IdConcepto": "ifrs_mx-cor_20141205_ImpuestoDiferido",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A21169fb3-84d2-4815-85e2-a90a776bc2f8": {
    "Id": "A21169fb3-84d2-4815-85e2-a90a776bc2f8",
    "IdConcepto": "ifrs_mx-cor_20141205_ImpuestoDiferido",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7406ff5a-8241-483c-8459-927600c210cf": {
    "Id": "A7406ff5a-8241-483c-8459-927600c210cf",
    "IdConcepto": "ifrs_mx-cor_20141205_ImpuestoDiferido",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa2b0e35b-b08f-4052-abcc-c70c69a9c7a3": {
    "Id": "Aa2b0e35b-b08f-4052-abcc-c70c69a9c7a3",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeImpuestosALaUtilidad",
    "IdContextoPlantilla": "trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1a901a0c-7b21-4b7c-879c-4ff6ca52fd59": {
    "Id": "A1a901a0c-7b21-4b7c-879c-4ff6ca52fd59",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeImpuestosALaUtilidad",
    "IdContextoPlantilla": "trimestre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab7d197f0-6ece-4c2f-b597-0ecc44eb8f13": {
    "Id": "Ab7d197f0-6ece-4c2f-b597-0ecc44eb8f13",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeImpuestosALaUtilidad",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab7461c3d-91f7-4f49-a51b-d4bc2cf09c85": {
    "Id": "Ab7461c3d-91f7-4f49-a51b-d4bc2cf09c85",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalDeImpuestosALaUtilidad",
    "IdContextoPlantilla": "acumulado_ejercicio_anterior",
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