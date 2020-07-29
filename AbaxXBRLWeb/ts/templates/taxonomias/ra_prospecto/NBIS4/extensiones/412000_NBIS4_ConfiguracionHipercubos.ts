/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_NBIS4_ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesTable = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesAbstract",
      "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesLineItems",
      "ar_pros_Class",
      "ar_pros_EquitySerie",
      "ar_pros_SerieType",
      "ar_pros_SerieTicker",
      "ar_pros_SerieTotalAmount",
      "ar_pros_SerieNumberOfStocks",
      "ar_pros_SerieNominalValue",
      "ar_pros_SerieStockExhangesWhereTheyAreRegistered",
      "ar_pros_SerieTerm",
      "ar_pros_EquitySerieSettlementDate",
      "ar_pros_SerieNumberOfCorrespondingEmission",
      "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided",
      "ar_pros_SerieObservations"
    ],
    "Periodo": [
      {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      }
    ],
    "ClaveEntidad": [],
    "ConjuntosParcialesDimensiones": [
      [
        {
          "Explicita": false,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ar_pros_SeriesTypedAxis": {
      "PrefijoValor": "<ar_pros:SerieDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
      "SubfijoValor": "</ar_pros:SerieDomain>",
      "EtiquetaNuevoElemento": "serie",
      "Explicita": false,
      "IdDimension": "ar_pros_SeriesTypedAxis",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis"
    }
  },
  "MiembrosDimensiones": {},
  "GruposDimensionesMiembro": {
    "G0": {}
  },
  "PlantillasContextos": {
    "P0": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G0",
      "ContieneInformacionDimensional": true
    }
  },
  "Unidades": {
      "MXN": {
          "Id": "MXN",
          "Tipo": 1,
          "Medidas": [
              {
                  "Nombre": "medida_MXN",
                  "EspacioNombres": "medida_http___www_xbrl_org_2003_iso4217",
                  "Etiqueta": "MXN"
              }
          ]
      },
      "PURE": {
          "Id": "PURE",
          "Tipo": 1,
          "Medidas": [
              {
                  "Nombre": "medida_pure",
                  "EspacioNombres": "medida_http___www_xbrl_org_2003_instance"
              }
          ]
      }
  }
};

}