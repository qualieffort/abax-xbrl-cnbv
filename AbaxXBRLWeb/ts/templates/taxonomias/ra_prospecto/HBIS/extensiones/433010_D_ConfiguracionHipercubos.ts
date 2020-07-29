/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433010_D_ar_pros_MultiplesTables = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_MultiplesAbstract",
      "ar_pros_MultiplesLineItems",
      "ar_pros_MultiplePriceEarningsBeforeTheOffer",
      "ar_pros_MultiplePriceBookValueBeforeTheOffer",
      "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
      "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
      "ar_pros_OtherMultipleBeforeBid",
      "ar_pros_MultiplePriceEarningsAfterTheOffer",
      "ar_pros_MultiplePriceBookValueAfterTheOffer",
      "ar_pros_MultiplePriceEbitdaAfterTheOffer",
      "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
      "ar_pros_OtherMultipleAfterTheOffer"
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
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PresentMultiplesMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MultiplesOfSectorOrBranchMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MarketMultiplesMember"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ar_pros_TypeOfMultiplesAxis": {
      "PrefijoValor": "http:",
      "SubfijoValor": "",
      "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:PresentMultiplesMember",
      "Explicita": true,
      "IdDimension": "ar_pros_TypeOfMultiplesAxis",
      "IdItemMiembro": "ar_pros_PresentMultiplesMember",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
      "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PresentMultiplesMember"
    }
  },
  "MiembrosDimensiones": {
    "ar_pros_TypeOfMultiplesAxis": {
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:PresentMultiplesMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfMultiplesAxis",
        "IdItemMiembro": "ar_pros_PresentMultiplesMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PresentMultiplesMember"
      },
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:MultiplesOfSectorOrBranchMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfMultiplesAxis",
        "IdItemMiembro": "ar_pros_MultiplesOfSectorOrBranchMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MultiplesOfSectorOrBranchMember"
      },
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:MarketMultiplesMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfMultiplesAxis",
        "IdItemMiembro": "ar_pros_MarketMultiplesMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MarketMultiplesMember"
      }
    }
  },
  "GruposDimensionesMiembro": {
    "G0": {
      "ar_pros_TypeOfMultiplesAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:PresentMultiplesMember"
    },
    "G1": {
      "ar_pros_TypeOfMultiplesAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:MultiplesOfSectorOrBranchMember"
    },
    "G2": {
      "ar_pros_TypeOfMultiplesAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:MarketMultiplesMember"
    }
  },
  "PlantillasContextos": {
    "P0": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G0",
      "ContieneInformacionDimensional": true
    },
    "P1": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G1",
      "ContieneInformacionDimensional": true
    },
    "P2": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G2",
      "ContieneInformacionDimensional": true
    }
  },
  "Unidades": {
    "U0": {
      "Id": "MXN",
      "Tipo": 1,
      "Medidas": [
        {
          "Nombre": "medida_MXN",
          "EspacioNombres": "medida_http___www_xbrl_org_2003_iso4217",
          "Etiqueta": "MXN"
        }
      ]
    }
  }
};

}