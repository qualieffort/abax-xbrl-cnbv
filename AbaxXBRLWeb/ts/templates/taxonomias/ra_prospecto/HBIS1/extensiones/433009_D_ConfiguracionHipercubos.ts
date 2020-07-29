/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433009_D_ar_pros_SecuritiesRatingTable = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_SecuritiesRatingAbstract",
      "ar_pros_SecuritiesRatingLineItems",
      "ar_pros_Rating",
      "ar_pros_ReasonsForThisRating",
      "ar_pros_RatingMeaning"
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
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:HRRatingsDeMexicoSADeCVMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MoodysDeMexicoSADeCVMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StandardAndPoorsSADeCVMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:VerumCalificadoraDeValoresSAPIDeCVMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AMBestAmericaLatinaSADeCVMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DBRSRatingsMexicoSAdeCVMember"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ar_pros_SecuritiesRatingAxis": {
      "PrefijoValor": "http:",
      "SubfijoValor": "",
      "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember",
      "Explicita": true,
      "IdDimension": "ar_pros_SecuritiesRatingAxis",
      "IdItemMiembro": "ar_pros_FitchMexicoSADeCVMember",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
      "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember"
    }
  },
  "MiembrosDimensiones": {
    "ar_pros_SecuritiesRatingAxis": {
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_SecuritiesRatingAxis",
        "IdItemMiembro": "ar_pros_FitchMexicoSADeCVMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember"
      },
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:HRRatingsDeMexicoSADeCVMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_SecuritiesRatingAxis",
        "IdItemMiembro": "ar_pros_HRRatingsDeMexicoSADeCVMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:HRRatingsDeMexicoSADeCVMember"
      },
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:MoodysDeMexicoSADeCVMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_SecuritiesRatingAxis",
        "IdItemMiembro": "ar_pros_MoodysDeMexicoSADeCVMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MoodysDeMexicoSADeCVMember"
      },
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:StandardAndPoorsSADeCVMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_SecuritiesRatingAxis",
        "IdItemMiembro": "ar_pros_StandardAndPoorsSADeCVMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StandardAndPoorsSADeCVMember"
      },
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:VerumCalificadoraDeValoresSAPIDeCVMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_SecuritiesRatingAxis",
        "IdItemMiembro": "ar_pros_VerumCalificadoraDeValoresSAPIDeCVMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:VerumCalificadoraDeValoresSAPIDeCVMember"
      },
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:AMBestAmericaLatinaSADeCVMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_SecuritiesRatingAxis",
        "IdItemMiembro": "ar_pros_AMBestAmericaLatinaSADeCVMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AMBestAmericaLatinaSADeCVMember"
      },
      "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:DBRSRatingsMexicoSAdeCVMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_SecuritiesRatingAxis",
        "IdItemMiembro": "ar_pros_DBRSRatingsMexicoSAdeCVMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DBRSRatingsMexicoSAdeCVMember"
      }
    }
  },
  "GruposDimensionesMiembro": {
    "G0": {
      "ar_pros_SecuritiesRatingAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember"
    },
    "G1": {
      "ar_pros_SecuritiesRatingAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:HRRatingsDeMexicoSADeCVMember"
    },
    "G2": {
      "ar_pros_SecuritiesRatingAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:MoodysDeMexicoSADeCVMember"
    },
    "G3": {
      "ar_pros_SecuritiesRatingAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:StandardAndPoorsSADeCVMember"
    },
    "G4": {
      "ar_pros_SecuritiesRatingAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:VerumCalificadoraDeValoresSAPIDeCVMember"
    },
    "G5": {
      "ar_pros_SecuritiesRatingAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:AMBestAmericaLatinaSADeCVMember"
    },
    "G6": {
      "ar_pros_SecuritiesRatingAxis": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:DBRSRatingsMexicoSAdeCVMember"
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
    },
    "P3": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G3",
      "ContieneInformacionDimensional": true
    },
    "P4": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G4",
      "ContieneInformacionDimensional": true
    },
    "P5": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G5",
      "ContieneInformacionDimensional": true
    },
    "P6": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G6",
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
      }
  }
};

}