///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-800100
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_800100 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_800100
         */
        constructor() {

			this.ListadoDeFormulas = {};

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
  "A24bbcd93-294e-451c-9228-317feb47b08d": {
    "Id": "A24bbcd93-294e-451c-9228-317feb47b08d",
    "IdConcepto": "ifrs-full_CashOnHand",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abe9fed05-39da-4f7d-a15a-1081b563d20b": {
    "Id": "Abe9fed05-39da-4f7d-a15a-1081b563d20b",
    "IdConcepto": "ifrs-full_CashOnHand",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af9b1fde4-3d2e-4161-81f1-fac4d4af1c95": {
    "Id": "Af9b1fde4-3d2e-4161-81f1-fac4d4af1c95",
    "IdConcepto": "ifrs-full_CashOnHand",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A23c44c64-7510-4206-aeff-83d887392666": {
    "Id": "A23c44c64-7510-4206-aeff-83d887392666",
    "IdConcepto": "ifrs-full_BalancesWithBanks",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A49e0594e-a57b-422f-87fb-2f04184978ba": {
    "Id": "A49e0594e-a57b-422f-87fb-2f04184978ba",
    "IdConcepto": "ifrs-full_BalancesWithBanks",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1761d537-2b71-4557-9792-dc2fcd01085e": {
    "Id": "A1761d537-2b71-4557-9792-dc2fcd01085e",
    "IdConcepto": "ifrs-full_BalancesWithBanks",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7749dbe8-5cb6-4dee-81d7-c34ba5c5e638": {
    "Id": "A7749dbe8-5cb6-4dee-81d7-c34ba5c5e638",
    "IdConcepto": "ifrs-full_Cash",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A295aa677-0f8a-4e60-9929-854f4bf4dcc3": {
    "Id": "A295aa677-0f8a-4e60-9929-854f4bf4dcc3",
    "IdConcepto": "ifrs-full_Cash",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6fb3e241-45e4-4747-96fd-c3b22d80641c": {
    "Id": "A6fb3e241-45e4-4747-96fd-c3b22d80641c",
    "IdConcepto": "ifrs-full_Cash",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A952f4a0d-6565-46bf-a50f-109ca335ba91": {
    "Id": "A952f4a0d-6565-46bf-a50f-109ca335ba91",
    "IdConcepto": "ifrs-full_ShorttermDepositsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6209e3eb-1985-4751-91ab-e97833f9ba2e": {
    "Id": "A6209e3eb-1985-4751-91ab-e97833f9ba2e",
    "IdConcepto": "ifrs-full_ShorttermDepositsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab5f30510-2ed8-4076-a536-627508e77109": {
    "Id": "Ab5f30510-2ed8-4076-a536-627508e77109",
    "IdConcepto": "ifrs-full_ShorttermDepositsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A20561586-a470-41d4-b159-c8dc15f4532b": {
    "Id": "A20561586-a470-41d4-b159-c8dc15f4532b",
    "IdConcepto": "ifrs-full_ShorttermInvestmentsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9a27fcc8-9160-4f7f-864d-71c9cf6d6557": {
    "Id": "A9a27fcc8-9160-4f7f-864d-71c9cf6d6557",
    "IdConcepto": "ifrs-full_ShorttermInvestmentsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A49638fe2-9a15-4902-9dd9-5fc241e3d115": {
    "Id": "A49638fe2-9a15-4902-9dd9-5fc241e3d115",
    "IdConcepto": "ifrs-full_ShorttermInvestmentsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afdcc2574-daae-4b0d-8e18-1f6944297920": {
    "Id": "Afdcc2574-daae-4b0d-8e18-1f6944297920",
    "IdConcepto": "ifrs-full_BankingArrangementsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A33b16f1b-73c9-459f-a9db-01257bb4c191": {
    "Id": "A33b16f1b-73c9-459f-a9db-01257bb4c191",
    "IdConcepto": "ifrs-full_BankingArrangementsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aee1cff37-3f8f-4c55-9e5b-61fc29f02601": {
    "Id": "Aee1cff37-3f8f-4c55-9e5b-61fc29f02601",
    "IdConcepto": "ifrs-full_BankingArrangementsClassifiedAsCashEquivalents",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7fb3a153-c9fa-444e-b750-677d6124d763": {
    "Id": "A7fb3a153-c9fa-444e-b750-677d6124d763",
    "IdConcepto": "ifrs-full_CashEquivalents",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac827aa79-cf3b-4175-8a17-85169c70d055": {
    "Id": "Ac827aa79-cf3b-4175-8a17-85169c70d055",
    "IdConcepto": "ifrs-full_CashEquivalents",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adc5b2923-b370-43b4-9365-538be44db3d3": {
    "Id": "Adc5b2923-b370-43b4-9365-538be44db3d3",
    "IdConcepto": "ifrs-full_CashEquivalents",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9dc35756-177f-444b-8858-8b8cd3e3ccb0": {
    "Id": "A9dc35756-177f-444b-8858-8b8cd3e3ccb0",
    "IdConcepto": "ifrs-full_CurrentRestrictedCashAndCashEquivalents",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad19bab0c-879a-4401-974f-8f1fbb045b8b": {
    "Id": "Ad19bab0c-879a-4401-974f-8f1fbb045b8b",
    "IdConcepto": "ifrs-full_CurrentRestrictedCashAndCashEquivalents",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3632e908-ae72-4330-8233-5f7abee78627": {
    "Id": "A3632e908-ae72-4330-8233-5f7abee78627",
    "IdConcepto": "ifrs-full_CurrentRestrictedCashAndCashEquivalents",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A16baa312-c85c-410f-ba62-d1a5b80ad98a": {
    "Id": "A16baa312-c85c-410f-ba62-d1a5b80ad98a",
    "IdConcepto": "ifrs-full_OtherCashAndCashEquivalents",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A95fa469f-e763-4cbf-b03d-43600d310b77": {
    "Id": "A95fa469f-e763-4cbf-b03d-43600d310b77",
    "IdConcepto": "ifrs-full_OtherCashAndCashEquivalents",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5d764761-89ea-422d-98bf-e8090581fb2f": {
    "Id": "A5d764761-89ea-422d-98bf-e8090581fb2f",
    "IdConcepto": "ifrs-full_OtherCashAndCashEquivalents",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
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
  "A9dbd6350-6477-44f1-8c56-d30162780b7f": {
    "Id": "A9dbd6350-6477-44f1-8c56-d30162780b7f",
    "IdConcepto": "ifrs-full_CurrentTradeReceivables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8e227c00-35e7-4d33-b2a2-c0ec8974817e": {
    "Id": "A8e227c00-35e7-4d33-b2a2-c0ec8974817e",
    "IdConcepto": "ifrs-full_CurrentTradeReceivables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Acbe754a3-2d2c-4c94-b1f8-e2f31a825bbe": {
    "Id": "Acbe754a3-2d2c-4c94-b1f8-e2f31a825bbe",
    "IdConcepto": "ifrs-full_CurrentTradeReceivables",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac1517373-d0f3-4fec-af4d-8bc6a7ba5b87": {
    "Id": "Ac1517373-d0f3-4fec-af4d-8bc6a7ba5b87",
    "IdConcepto": "ifrs-full_CurrentAdvancesToSuppliers",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A20727819-8a65-4669-ae1b-ce4ee523a59b": {
    "Id": "A20727819-8a65-4669-ae1b-ce4ee523a59b",
    "IdConcepto": "ifrs-full_CurrentAdvancesToSuppliers",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afb24e450-3ea6-4417-ab54-c78c177a0c9a": {
    "Id": "Afb24e450-3ea6-4417-ab54-c78c177a0c9a",
    "IdConcepto": "ifrs-full_CurrentAdvancesToSuppliers",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af97db669-ce13-440f-a43d-ee8649283669": {
    "Id": "Af97db669-ce13-440f-a43d-ee8649283669",
    "IdConcepto": "ifrs-full_CurrentPrepaidExpenses",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab13dee43-4161-4e8b-9280-0ef5f02009c3": {
    "Id": "Ab13dee43-4161-4e8b-9280-0ef5f02009c3",
    "IdConcepto": "ifrs-full_CurrentPrepaidExpenses",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A70c015d0-9c1f-4149-a39d-3fe73461ad03": {
    "Id": "A70c015d0-9c1f-4149-a39d-3fe73461ad03",
    "IdConcepto": "ifrs-full_CurrentPrepaidExpenses",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A00f3daa9-1613-4b92-bbcd-36889900b195": {
    "Id": "A00f3daa9-1613-4b92-bbcd-36889900b195",
    "IdConcepto": "ifrs-full_CurrentPrepayments",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A17761c52-c588-4eb5-8935-9c16249d1e87": {
    "Id": "A17761c52-c588-4eb5-8935-9c16249d1e87",
    "IdConcepto": "ifrs-full_CurrentPrepayments",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A99bc9853-d616-42ad-9d14-85d098f3b2d8": {
    "Id": "A99bc9853-d616-42ad-9d14-85d098f3b2d8",
    "IdConcepto": "ifrs-full_CurrentPrepayments",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8094d792-2abd-43df-8213-400ad01d3caa": {
    "Id": "A8094d792-2abd-43df-8213-400ad01d3caa",
    "IdConcepto": "ifrs-full_OtherCurrentReceivables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8e9f92de-d82f-47dd-ad60-76f09165b64d": {
    "Id": "A8e9f92de-d82f-47dd-ad60-76f09165b64d",
    "IdConcepto": "ifrs-full_OtherCurrentReceivables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7e7b2897-53dd-4599-b0d8-8e12d4461722": {
    "Id": "A7e7b2897-53dd-4599-b0d8-8e12d4461722",
    "IdConcepto": "ifrs-full_OtherCurrentReceivables",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
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
  "A7c1afd47-bb81-4d37-8718-b43ff2e21adf": {
    "Id": "A7c1afd47-bb81-4d37-8718-b43ff2e21adf",
    "IdConcepto": "ifrs-full_NoncurrentTradeReceivables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A38f8b08d-685c-4aa9-a13e-5e03880fceae": {
    "Id": "A38f8b08d-685c-4aa9-a13e-5e03880fceae",
    "IdConcepto": "ifrs-full_NoncurrentTradeReceivables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A30cc64e7-b91d-40f5-9bb7-a7e37d525183": {
    "Id": "A30cc64e7-b91d-40f5-9bb7-a7e37d525183",
    "IdConcepto": "ifrs-full_NoncurrentTradeReceivables",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4cabcab8-a572-49fb-ad0d-e963e44290c1": {
    "Id": "A4cabcab8-a572-49fb-ad0d-e963e44290c1",
    "IdConcepto": "mx_trac_NonCurrentPrepayments",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A90cb68fa-8f07-4528-ad71-4b9e557d97f5": {
    "Id": "A90cb68fa-8f07-4528-ad71-4b9e557d97f5",
    "IdConcepto": "mx_trac_NonCurrentPrepayments",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A681ce206-a6af-41db-97a4-6798b44e5415": {
    "Id": "A681ce206-a6af-41db-97a4-6798b44e5415",
    "IdConcepto": "mx_trac_NonCurrentPrepayments",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5839a5d8-fdac-4d9b-b3b7-d3c5cf0b7ffc": {
    "Id": "A5839a5d8-fdac-4d9b-b3b7-d3c5cf0b7ffc",
    "IdConcepto": "mx_trac_NonCurrentPrepaidExpenses",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8fe7777e-3c62-4889-8b1a-001e17d606b1": {
    "Id": "A8fe7777e-3c62-4889-8b1a-001e17d606b1",
    "IdConcepto": "mx_trac_NonCurrentPrepaidExpenses",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A201586fd-aeb1-44c3-a525-bb00c90065e6": {
    "Id": "A201586fd-aeb1-44c3-a525-bb00c90065e6",
    "IdConcepto": "mx_trac_NonCurrentPrepaidExpenses",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1da8d725-8f57-49a8-966c-0e1f1501d347": {
    "Id": "A1da8d725-8f57-49a8-966c-0e1f1501d347",
    "IdConcepto": "ifrs-full_NoncurrentPrepayments",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A5c3ddaed-9fbd-4f3f-847d-698def5fdcdb": {
    "Id": "A5c3ddaed-9fbd-4f3f-847d-698def5fdcdb",
    "IdConcepto": "ifrs-full_NoncurrentPrepayments",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae85cf74f-ed35-4bda-a43a-23685d155b33": {
    "Id": "Ae85cf74f-ed35-4bda-a43a-23685d155b33",
    "IdConcepto": "ifrs-full_NoncurrentPrepayments",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aff036e38-4b0a-422a-ad76-8313261a5277": {
    "Id": "Aff036e38-4b0a-422a-ad76-8313261a5277",
    "IdConcepto": "ifrs-full_OtherNoncurrentReceivables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6fc3d88f-cf7b-4a43-b295-f7170c2ec9ef": {
    "Id": "A6fc3d88f-cf7b-4a43-b295-f7170c2ec9ef",
    "IdConcepto": "ifrs-full_OtherNoncurrentReceivables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A917464fb-e620-4818-93c4-cd196cee3611": {
    "Id": "A917464fb-e620-4818-93c4-cd196cee3611",
    "IdConcepto": "ifrs-full_OtherNoncurrentReceivables",
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
  "A6f5561eb-aae4-49e8-b03e-01ffabb4b150": {
    "Id": "A6f5561eb-aae4-49e8-b03e-01ffabb4b150",
    "IdConcepto": "mx_trac_BankLoansCurrent",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9c4a124d-261e-4134-925f-fd21fea60990": {
    "Id": "A9c4a124d-261e-4134-925f-fd21fea60990",
    "IdConcepto": "mx_trac_BankLoansCurrent",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1b5f7c77-24ea-4961-aa03-aaed58695260": {
    "Id": "A1b5f7c77-24ea-4961-aa03-aaed58695260",
    "IdConcepto": "mx_trac_BankLoansCurrent",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad7579fd6-a785-4441-b0a9-3cb97fecfc0a": {
    "Id": "Ad7579fd6-a785-4441-b0a9-3cb97fecfc0a",
    "IdConcepto": "mx_trac_StockMarketLoansCurrent",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aafcd90c5-3cd0-4c00-b621-3976fec19fd0": {
    "Id": "Aafcd90c5-3cd0-4c00-b621-3976fec19fd0",
    "IdConcepto": "mx_trac_StockMarketLoansCurrent",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A52e071ac-1a62-43bd-a4cc-ec22a7782f06": {
    "Id": "A52e071ac-1a62-43bd-a4cc-ec22a7782f06",
    "IdConcepto": "mx_trac_StockMarketLoansCurrent",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3a244660-2f3a-46ab-b535-e1684a580695": {
    "Id": "A3a244660-2f3a-46ab-b535-e1684a580695",
    "IdConcepto": "mx_trac_InterestPayableInTheShortTerm",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0394668c-24a7-4a38-b795-9ba7865ac2ee": {
    "Id": "A0394668c-24a7-4a38-b795-9ba7865ac2ee",
    "IdConcepto": "mx_trac_InterestPayableInTheShortTerm",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A47241c19-6e70-4523-ae30-b9da997f8852": {
    "Id": "A47241c19-6e70-4523-ae30-b9da997f8852",
    "IdConcepto": "mx_trac_InterestPayableInTheShortTerm",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aff50f8bd-5865-4675-927c-f38207cd27e2": {
    "Id": "Aff50f8bd-5865-4675-927c-f38207cd27e2",
    "IdConcepto": "mx_trac_SundryDebtors",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A65152b0a-ab2e-4fb3-82cc-d05dbedfc5b1": {
    "Id": "A65152b0a-ab2e-4fb3-82cc-d05dbedfc5b1",
    "IdConcepto": "mx_trac_SundryDebtors",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa04c392c-ab20-4cbb-a109-a741afaa1372": {
    "Id": "Aa04c392c-ab20-4cbb-a109-a741afaa1372",
    "IdConcepto": "mx_trac_SundryDebtors",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad6e53ca6-54de-41a8-988c-fc015937402f": {
    "Id": "Ad6e53ca6-54de-41a8-988c-fc015937402f",
    "IdConcepto": "ifrs-full_OtherCurrentPayables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4c89b636-48c7-4c72-bbeb-7f73f866b2e9": {
    "Id": "A4c89b636-48c7-4c72-bbeb-7f73f866b2e9",
    "IdConcepto": "ifrs-full_OtherCurrentPayables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2eef7bf4-c6ea-428a-b9e0-3937a3623456": {
    "Id": "A2eef7bf4-c6ea-428a-b9e0-3937a3623456",
    "IdConcepto": "ifrs-full_OtherCurrentPayables",
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
  "Af9493cda-7f7f-4d31-88ab-fd1db8f574a2": {
    "Id": "Af9493cda-7f7f-4d31-88ab-fd1db8f574a2",
    "IdConcepto": "mx_trac_BankLoansNonCurrent",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A830e1959-6019-4cd8-b58d-ebf431f0a609": {
    "Id": "A830e1959-6019-4cd8-b58d-ebf431f0a609",
    "IdConcepto": "mx_trac_BankLoansNonCurrent",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A12f2180d-b078-46f0-be23-144317fb4003": {
    "Id": "A12f2180d-b078-46f0-be23-144317fb4003",
    "IdConcepto": "mx_trac_BankLoansNonCurrent",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa4dfac47-3bf4-401e-add5-1b02789ae8ec": {
    "Id": "Aa4dfac47-3bf4-401e-add5-1b02789ae8ec",
    "IdConcepto": "mx_trac_StockMarketLoansNonCurrent",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6cd2bf16-3e7a-4b0f-818a-c6e3538aff6a": {
    "Id": "A6cd2bf16-3e7a-4b0f-818a-c6e3538aff6a",
    "IdConcepto": "mx_trac_StockMarketLoansNonCurrent",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A78c44a83-19c6-4e25-9784-b8daed4fca4f": {
    "Id": "A78c44a83-19c6-4e25-9784-b8daed4fca4f",
    "IdConcepto": "mx_trac_StockMarketLoansNonCurrent",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A874bfe6c-9c71-412d-82b9-83d728514bac": {
    "Id": "A874bfe6c-9c71-412d-82b9-83d728514bac",
    "IdConcepto": "mx_trac_InterestOnLongTermDebt",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abbaf2172-820d-4ed7-82d6-4c9d1438969d": {
    "Id": "Abbaf2172-820d-4ed7-82d6-4c9d1438969d",
    "IdConcepto": "mx_trac_InterestOnLongTermDebt",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A19a3091d-c678-4b69-9e6c-99cf042c9562": {
    "Id": "A19a3091d-c678-4b69-9e6c-99cf042c9562",
    "IdConcepto": "mx_trac_InterestOnLongTermDebt",
    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0a3493c2-32b7-4722-971b-1e4fe4b08cdd": {
    "Id": "A0a3493c2-32b7-4722-971b-1e4fe4b08cdd",
    "IdConcepto": "ifrs-full_OtherNoncurrentPayables",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad48ba77c-6197-444e-8023-e781dd03e899": {
    "Id": "Ad48ba77c-6197-444e-8023-e781dd03e899",
    "IdConcepto": "ifrs-full_OtherNoncurrentPayables",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1b01e31b-f1e6-4fd8-b918-ea836875abd2": {
    "Id": "A1b01e31b-f1e6-4fd8-b918-ea836875abd2",
    "IdConcepto": "ifrs-full_OtherNoncurrentPayables",
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
  "Abd0b3001-40de-4c34-bbb1-023b16877e95": {
    "Id": "Abd0b3001-40de-4c34-bbb1-023b16877e95",
    "IdConcepto": "ifrs-full_NetAssetsLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A956fec5b-632f-4b32-ad88-e448e967ab02": {
    "Id": "A956fec5b-632f-4b32-ad88-e448e967ab02",
    "IdConcepto": "ifrs-full_NetAssetsLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aa0efb678-b5d1-4387-b525-1157673e58c4": {
    "Id": "Aa0efb678-b5d1-4387-b525-1157673e58c4",
    "IdConcepto": "ifrs-full_NetAssetsLiabilities",
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
  "A9ba59743-cacf-4544-acf7-f42ae5218b56": {
    "Id": "A9ba59743-cacf-4544-acf7-f42ae5218b56",
    "IdConcepto": "ifrs-full_CurrentAssetsLiabilities",
    "IdContextoPlantilla": "Trimestre_AnioActual",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A1a58a9e8-2c1b-433c-a67e-d4c5c1c86cfd": {
    "Id": "A1a58a9e8-2c1b-433c-a67e-d4c5c1c86cfd",
    "IdConcepto": "ifrs-full_CurrentAssetsLiabilities",
    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
    "Hechos": [],
    "IdUnidadPlantilla": "MXN",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afb359971-28c1-4b44-908e-236604207bf0": {
    "Id": "Afb359971-28c1-4b44-908e-236604207bf0",
    "IdConcepto": "ifrs-full_CurrentAssetsLiabilities",
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