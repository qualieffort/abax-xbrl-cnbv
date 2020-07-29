///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/mx_extension_2014-12-05_role-700000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_700000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_700000
         */
        constructor() {

            this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
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
  },
  "MXN_SHARES": {
    "Id": "MXN_SHARES",
    "Tipo": 2,
    "MedidasDenominador": [
      {
        "Nombre": "#medida_shares",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
      }
    ],
    "MedidasNumerador": [
      {
        "Nombre": "#medida_MXN",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
      }
    ],
    "Medidas": []
  },
  "acciones": {
    "Id": "acciones",
    "Tipo": 1,
    "Medidas": [
      {
        "Nombre": "#medida_shares",
        "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
      }
    ],
    "MedidasDenominador": [],
    "MedidasNumerador": []
  },
    "pure": {
        "Id": "pure",
        "Tipo": 1,
        "Medidas": [
            {
                "Nombre": "#medida_pure",
                "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
            }
        ],
        "MedidasDenominador": [],
        "MedidasNumerador": []
    }
};
            
            this.HechosPlantillaPorId = {
  "A00e0ceeb-af04-40f5-b02d-2ade236c4820": {
    "Id": "A00e0ceeb-af04-40f5-b02d-2ade236c4820",
    "IdConcepto": "ifrs_mx-cor_20141205_CapitalSocialNominal",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2c50cee3-3447-4480-903d-6f33e19acb85": {
    "Id": "A2c50cee3-3447-4480-903d-6f33e19acb85",
    "IdConcepto": "ifrs_mx-cor_20141205_CapitalSocialNominal",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7ceb4174-dac2-4967-b35f-d6e01cdf82f4": {
    "Id": "A7ceb4174-dac2-4967-b35f-d6e01cdf82f4",
    "IdConcepto": "ifrs_mx-cor_20141205_CapitalSocialNominal",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af413cc09-5fa8-47da-b266-88e713659e7e": {
    "Id": "Af413cc09-5fa8-47da-b266-88e713659e7e",
    "IdConcepto": "ifrs_mx-cor_20141205_CapitalSocialPorActualizacion",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0dc0caf4-df6c-4530-b6bd-b35c3c7697a9": {
    "Id": "A0dc0caf4-df6c-4530-b6bd-b35c3c7697a9",
    "IdConcepto": "ifrs_mx-cor_20141205_CapitalSocialPorActualizacion",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afbf34a96-80e0-4a9a-9c5d-f266e7d0e679": {
    "Id": "Afbf34a96-80e0-4a9a-9c5d-f266e7d0e679",
    "IdConcepto": "ifrs_mx-cor_20141205_CapitalSocialPorActualizacion",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A739f49ab-1241-4ebb-8da7-1c0d3877dd57": {
    "Id": "A739f49ab-1241-4ebb-8da7-1c0d3877dd57",
    "IdConcepto": "ifrs_mx-cor_20141205_FondosParaPensionesYPrimaDeAntiguedad",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A19010250-5ebe-406a-8b32-a627cd972770": {
    "Id": "A19010250-5ebe-406a-8b32-a627cd972770",
    "IdConcepto": "ifrs_mx-cor_20141205_FondosParaPensionesYPrimaDeAntiguedad",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A802f287b-1c0a-4278-82e4-823516179c17": {
    "Id": "A802f287b-1c0a-4278-82e4-823516179c17",
    "IdConcepto": "ifrs_mx-cor_20141205_FondosParaPensionesYPrimaDeAntiguedad",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0831ad20-be92-4c4a-afe8-8ec16c2f6299": {
    "Id": "A0831ad20-be92-4c4a-afe8-8ec16c2f6299",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeFuncionarios",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3a4278de-d9e1-45b0-9880-76a45d3ff6f7": {
    "Id": "A3a4278de-d9e1-45b0-9880-76a45d3ff6f7",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeFuncionarios",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae36e4073-a9a3-4a76-82bb-3bfae55b9473": {
    "Id": "Ae36e4073-a9a3-4a76-82bb-3bfae55b9473",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeFuncionarios",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A56037b63-7ea7-478d-a6fa-2fa935a0f863": {
    "Id": "A56037b63-7ea7-478d-a6fa-2fa935a0f863",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeEmpleados",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abe4d0706-6117-4884-90e9-a59e7056fbba": {
    "Id": "Abe4d0706-6117-4884-90e9-a59e7056fbba",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeEmpleados",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af5a4c967-fdeb-4a83-a68f-758609750b6e": {
    "Id": "Af5a4c967-fdeb-4a83-a68f-758609750b6e",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeEmpleados",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0c6f6b1a-93db-4b7b-b7e7-81bf6a597d98": {
    "Id": "A0c6f6b1a-93db-4b7b-b7e7-81bf6a597d98",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeObreros",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab4099649-0d43-4ac4-9b69-a4e3d0b8e464": {
    "Id": "Ab4099649-0d43-4ac4-9b69-a4e3d0b8e464",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeObreros",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ade5aa1e8-6aa7-454b-9f9c-da35deac3618": {
    "Id": "Ade5aa1e8-6aa7-454b-9f9c-da35deac3618",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeObreros",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
      "IdUnidadPlantilla": "pure",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6a743dde-1f27-4ad0-a1f8-fa12dc0ef1d2": {
    "Id": "A6a743dde-1f27-4ad0-a1f8-fa12dc0ef1d2",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeAccionesEnCirculacion",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "acciones",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac21a4a99-2087-40f7-838f-3fc0432cf536": {
    "Id": "Ac21a4a99-2087-40f7-838f-3fc0432cf536",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeAccionesEnCirculacion",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "acciones",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A398e048e-d8ca-4961-91b6-0b8c119eeae0": {
    "Id": "A398e048e-d8ca-4961-91b6-0b8c119eeae0",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeAccionesEnCirculacion",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "acciones",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A62ce78ac-c37c-42a2-a513-27f254138058": {
    "Id": "A62ce78ac-c37c-42a2-a513-27f254138058",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeAccionesRecompradas",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "acciones",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab6021d5f-1a71-4949-8ee7-f99d1dd9340e": {
    "Id": "Ab6021d5f-1a71-4949-8ee7-f99d1dd9340e",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeAccionesRecompradas",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "acciones",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A100eab26-627c-41e2-b9b9-d9a1f91f65b5": {
    "Id": "A100eab26-627c-41e2-b9b9-d9a1f91f65b5",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeAccionesRecompradas",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "acciones",
    "Decimales": "0",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A7c02164d-ab44-4236-ba96-08ca22101686": {
    "Id": "A7c02164d-ab44-4236-ba96-08ca22101686",
    "IdConcepto": "ifrs_mx-cor_20141205_EfectivoRestringido",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad2b982e7-80d0-4eca-b260-ee83ce066f00": {
    "Id": "Ad2b982e7-80d0-4eca-b260-ee83ce066f00",
    "IdConcepto": "ifrs_mx-cor_20141205_EfectivoRestringido",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac831c7e9-b642-48c4-be51-b90d364fc1dd": {
    "Id": "Ac831c7e9-b642-48c4-be51-b90d364fc1dd",
    "IdConcepto": "ifrs_mx-cor_20141205_EfectivoRestringido",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A658a7092-233f-4140-b334-80fed02a6235": {
    "Id": "A658a7092-233f-4140-b334-80fed02a6235",
    "IdConcepto": "ifrs_mx-cor_20141205_DeudaDeAsociadasGarantizada",
    "IdContextoPlantilla": "cierre_trimestre_actual",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ae487daba-8589-42b2-9793-fd1ba7ee2c25": {
    "Id": "Ae487daba-8589-42b2-9793-fd1ba7ee2c25",
    "IdConcepto": "ifrs_mx-cor_20141205_DeudaDeAsociadasGarantizada",
    "IdContextoPlantilla": "cierre_ejercicio_anterior",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A94032781-25a3-4bfc-90e3-05227bb956d6": {
    "Id": "A94032781-25a3-4bfc-90e3-05227bb956d6",
    "IdConcepto": "ifrs_mx-cor_20141205_DeudaDeAsociadasGarantizada",
    "IdContextoPlantilla": "cierre_ejercicio_anterior_anterior",
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