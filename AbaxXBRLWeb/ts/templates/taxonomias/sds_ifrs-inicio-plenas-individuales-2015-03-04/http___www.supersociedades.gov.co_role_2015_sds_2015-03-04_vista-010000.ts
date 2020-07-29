///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.supersociedades.gov.co/role/2015/sds_2015-03-04_vista-010000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_supersociedades_gov_co_role_2015_sds_2015_03_04_vista_010000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_supersociedades_gov_co_role_2015_sds_2015_03_04_vista_010000
         */
        constructor() {

			this.ListadoDeFormulas = {};

            this.ContextosPlantillaPorId = {
  "Acum_Actual": {
    "Id": "Acum_Actual",
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
  "Cierre_Actual": {
    "Id": "Cierre_Actual",
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
  },
  "id2": {
      "Id": "id2",
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
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"sds:TipoDeContraparteEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">sds:RepresentantePrincipalMiembro</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "sds_TipoDeContraparteEje",
              "IdItemMiembro": "sds_RepresentantePrincipalMiembro",
              "QNameDimension": "http://www.supersociedades.gov.co/sds/fr/ifrs/2015-03-04:TipoDeContraparteEje",
              "QNameItemMiembro": "http://www.supersociedades.gov.co/sds/fr/ifrs/2015-03-04:RepresentantePrincipalMiembro",
              "ElementoMiembroTipificado": null
          }
      ]
  },
  "id3": {
      "Id": "id3",
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
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"sds:TipoDeContraparteEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">sds:PrimerSuplenteMiembro</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "sds_TipoDeContraparteEje",
              "IdItemMiembro": "sds_PrimerSuplenteMiembro",
              "QNameDimension": "http://www.supersociedades.gov.co/sds/fr/ifrs/2015-03-04:TipoDeContraparteEje",
              "QNameItemMiembro": "http://www.supersociedades.gov.co/sds/fr/ifrs/2015-03-04:PrimerSuplenteMiembro",
              "ElementoMiembroTipificado": null
          }
      ]
  },
  "id4": {
      "Id": "id4",
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
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"sds:TipoDeContraparteEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">sds:ContadorMiembro</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "sds_TipoDeContraparteEje",
              "IdItemMiembro": "sds_ContadorMiembro",
              "QNameDimension": "http://www.supersociedades.gov.co/sds/fr/ifrs/2015-03-04:TipoDeContraparteEje",
              "QNameItemMiembro": "http://www.supersociedades.gov.co/sds/fr/ifrs/2015-03-04:ContadorMiembro",
              "ElementoMiembroTipificado": null
          }
      ]
  },
  "id5": {
      "Id": "id5",
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
      "ContieneInformacionDimensional": true,
      "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"sds:TipoDeContraparteEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">sds:RevisorFiscalPrincipalMiembro</xbrldi:explicitMember></xbrli:scenario>",
      "ValoresDimension": [
          {
              "Explicita": true,
              "IdDimension": "sds_TipoDeContraparteEje",
              "IdItemMiembro": "sds_RevisorFiscalPrincipalMiembro",
              "QNameDimension": "http://www.supersociedades.gov.co/sds/fr/ifrs/2015-03-04:TipoDeContraparteEje",
              "QNameItemMiembro": "http://www.supersociedades.gov.co/sds/fr/ifrs/2015-03-04:RevisorFiscalPrincipalMiembro",
              "ElementoMiembroTipificado": null
          }
      ]
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "A16f89a05-f534-4922-b9cb-2d47ebc9e7ee": {
    "Id": "A16f89a05-f534-4922-b9cb-2d47ebc9e7ee",
    "IdConcepto": "sds_NumeroDeIdentificacionTributaria",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#nombreEntidad"
  },
  "A3a56b50c-b317-4ea0-af19-f4e8fa47c190": {
    "Id": "A3a56b50c-b317-4ea0-af19-f4e8fa47c190",
    "IdConcepto": "ifrs-full_NameOfReportingEntityOrOtherMeansOfIdentification",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A865c3099-a531-4521-a4c8-9312d5d04ad7": {
    "Id": "A865c3099-a531-4521-a4c8-9312d5d04ad7",
    "IdConcepto": "sds_ActividadPrincipalRealizadaDuranteElEjercicioSegunCiiu4",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A90cc842b-fca9-470a-97eb-b031f6b968dd": {
    "Id": "A90cc842b-fca9-470a-97eb-b031f6b968dd",
    "IdConcepto": "sds_TipoSocietario",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af96ce6c6-b113-4a3c-b615-cbe0ee3bf02b": {
    "Id": "Af96ce6c6-b113-4a3c-b615-cbe0ee3bf02b",
    "IdConcepto": "sds_FechaDeCorte",
    "IdContextoPlantilla": "Cierre_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#fecha_2014_09_30"
  },
  "A8b2123fd-59a1-4b27-8c51-88c171767e6e": {
    "Id": "A8b2123fd-59a1-4b27-8c51-88c171767e6e",
    "IdConcepto": "sds_DepartamentoDeLaDireccionDelDomicilio",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A19d17cc6-80a5-442b-be4b-7e7dbe6eb391": {
    "Id": "A19d17cc6-80a5-442b-be4b-7e7dbe6eb391",
    "IdConcepto": "sds_CiudadDeLaDireccionDelDomicilio",
    "IdContextoPlantilla": "Acum_Actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A594da310-a20c-4598-89a2-839a7ae5bc51": {
      "Id": "A594da310-a20c-4598-89a2-839a7ae5bc51",
      "IdConcepto": "sds_TipoDeDocumento",
      "IdContextoPlantilla": "id2",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Aab58b4c3-308f-4126-9b69-bb5533bd5e99": {
      "Id": "Aab58b4c3-308f-4126-9b69-bb5533bd5e99",
      "IdConcepto": "sds_TipoDeDocumento",
      "IdContextoPlantilla": "id3",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Adb4b3bb7-dfdb-43c8-9bf1-d886fc2d9441": {
      "Id": "Adb4b3bb7-dfdb-43c8-9bf1-d886fc2d9441",
      "IdConcepto": "sds_TipoDeDocumento",
      "IdContextoPlantilla": "id4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Ae50f544f-7273-47f9-823b-f8811965dda8": {
      "Id": "Ae50f544f-7273-47f9-823b-f8811965dda8",
      "IdConcepto": "sds_TipoDeDocumento",
      "IdContextoPlantilla": "id5",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Abebb6c47-caac-42c8-a5ee-861b0dbb5a90": {
      "Id": "Abebb6c47-caac-42c8-a5ee-861b0dbb5a90",
      "IdConcepto": "sds_NumeroDeDocumento",
      "IdContextoPlantilla": "id2",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A03426edc-506d-4b10-be26-77ab7a4d60f5": {
      "Id": "A03426edc-506d-4b10-be26-77ab7a4d60f5",
      "IdConcepto": "sds_NumeroDeDocumento",
      "IdContextoPlantilla": "id3",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A17d1015b-1cb5-4f4d-8816-4bae5d7b9250": {
      "Id": "A17d1015b-1cb5-4f4d-8816-4bae5d7b9250",
      "IdConcepto": "sds_NumeroDeDocumento",
      "IdContextoPlantilla": "id4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A750a237c-88b9-4c00-a658-0cdfa1f703e1": {
      "Id": "A750a237c-88b9-4c00-a658-0cdfa1f703e1",
      "IdConcepto": "sds_NumeroDeDocumento",
      "IdContextoPlantilla": "id5",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A17273bd5-ac97-4f74-a2ab-7e46579f75bf": {
      "Id": "A17273bd5-ac97-4f74-a2ab-7e46579f75bf",
      "IdConcepto": "sds_Nombres",
      "IdContextoPlantilla": "id2",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A9d3b6f0f-ffa8-49e6-9fef-69b855b8d5a1": {
      "Id": "A9d3b6f0f-ffa8-49e6-9fef-69b855b8d5a1",
      "IdConcepto": "sds_Nombres",
      "IdContextoPlantilla": "id3",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A4e4d5fee-2d62-4bd2-92ba-0b9f688c433e": {
      "Id": "A4e4d5fee-2d62-4bd2-92ba-0b9f688c433e",
      "IdConcepto": "sds_Nombres",
      "IdContextoPlantilla": "id4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Aeebec904-36b7-4459-8e0a-90896aa1f11a": {
      "Id": "Aeebec904-36b7-4459-8e0a-90896aa1f11a",
      "IdConcepto": "sds_Nombres",
      "IdContextoPlantilla": "id5",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A36e113d0-2fc7-4fb0-b8f2-54bc9cad02ea": {
      "Id": "A36e113d0-2fc7-4fb0-b8f2-54bc9cad02ea",
      "IdConcepto": "sds_Appellidos",
      "IdContextoPlantilla": "id2",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Ac3143e40-1a1e-40f9-8ecb-c91ee095f00f": {
      "Id": "Ac3143e40-1a1e-40f9-8ecb-c91ee095f00f",
      "IdConcepto": "sds_Appellidos",
      "IdContextoPlantilla": "id3",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Afaae2b46-017a-4e47-8584-d6d27622efc0": {
      "Id": "Afaae2b46-017a-4e47-8584-d6d27622efc0",
      "IdConcepto": "sds_Appellidos",
      "IdContextoPlantilla": "id4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Ace10aa72-d890-4052-9dac-a555e69343b1": {
      "Id": "Ace10aa72-d890-4052-9dac-a555e69343b1",
      "IdConcepto": "sds_Appellidos",
      "IdContextoPlantilla": "id5",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A570da63e-661f-486b-9e89-fa2c277cc0fb": {
      "Id": "A570da63e-661f-486b-9e89-fa2c277cc0fb",
      "IdConcepto": "sds_TarjetaProfesional",
      "IdContextoPlantilla": "id4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "A958bc326-d92e-4515-9c46-ad0f87e236a5": {
      "Id": "A958bc326-d92e-4515-9c46-ad0f87e236a5",
      "IdConcepto": "sds_TarjetaProfesional",
      "IdContextoPlantilla": "id5",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },




  "B36e113d0-2fc7-4fb0-b8f2-54bc9cad02ea": {
      "Id": "B36e113d0-2fc7-4fb0-b8f2-54bc9cad02ea",
      "IdConcepto": "sds_Email",
      "IdContextoPlantilla": "id2",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Bc3143e40-1a1e-40f9-8ecb-c91ee095f00f": {
      "Id": "Bc3143e40-1a1e-40f9-8ecb-c91ee095f00f",
      "IdConcepto": "sds_Email",
      "IdContextoPlantilla": "id3",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Bfaae2b46-017a-4e47-8584-d6d27622efc0": {
      "Id": "Bfaae2b46-017a-4e47-8584-d6d27622efc0",
      "IdConcepto": "sds_Email",
      "IdContextoPlantilla": "id4",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "Bce10aa72-d890-4052-9dac-a555e69343b1": {
      "Id": "Bce10aa72-d890-4052-9dac-a555e69343b1",
      "IdConcepto": "sds_Email",
      "IdContextoPlantilla": "id5",
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