/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_annext_roles_301100_D4_annext_UnpaidBalanceOfTheAssetsGroupedInArrearsAtTheEndOfThePeriodTable = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "annext_CurrentMonth",
      "annext_LastMonth"
    ],
    "Periodo": [
      {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      }
    ],
    "ClaveEntidad": [],
    "ConjuntosParcialesDimensiones": [
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between31And60DaysOrBetween1AndUpTo2MonthsMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:LessThan1MonthOrLessThan30DaysMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between61And90DaysOrBetween2AndUpTo3MonthsMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between91And120DaysOr3ToUpTo4MonthsMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between121And150DaysOrFrom4To5MonthsMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between151And180DaysOrBetween5AndUpTo6MonthsMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:MoreThan180DaysOrMoreThan6MonthsMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:InJudicialProcessMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:ExtensionMember"
        }
      ],
      [
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "annext_TimeIntervalAxis": {
      "PrefijoValor": "http://www.cnbv.gob.mx/2016-08-22/annext:",
      "SubfijoValor": "",
      "EtiquetaNuevoElemento": "Between31And60DaysOrBetween1AndUpTo2MonthsMember",
      "Explicita": true,
      "IdDimension": "annext_TimeIntervalAxis",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis"
    }
  },
  "MiembrosDimensiones": {
    "annext_TimeIntervalAxis": {
      "Between31And60DaysOrBetween1AndUpTo2MonthsMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between31And60DaysOrBetween1AndUpTo2MonthsMember"
      },
      "LessThan1MonthOrLessThan30DaysMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_LessThan1MonthOrLessThan30DaysMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:LessThan1MonthOrLessThan30DaysMember"
      },
      "Between61And90DaysOrBetween2AndUpTo3MonthsMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between61And90DaysOrBetween2AndUpTo3MonthsMember"
      },
      "Between91And120DaysOr3ToUpTo4MonthsMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_Between91And120DaysOr3ToUpTo4MonthsMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between91And120DaysOr3ToUpTo4MonthsMember"
      },
      "Between121And150DaysOrFrom4To5MonthsMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_Between121And150DaysOrFrom4To5MonthsMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between121And150DaysOrFrom4To5MonthsMember"
      },
      "Between151And180DaysOrBetween5AndUpTo6MonthsMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:Between151And180DaysOrBetween5AndUpTo6MonthsMember"
      },
      "MoreThan180DaysOrMoreThan6MonthsMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_MoreThan180DaysOrMoreThan6MonthsMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:MoreThan180DaysOrMoreThan6MonthsMember"
      },
      "InJudicialProcessMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_InJudicialProcessMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:InJudicialProcessMember"
      },
      "ExtensionMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_ExtensionMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:ExtensionMember"
      },
      "TotalMember": {
        "Explicita": true,
        "IdDimension": "annext_TimeIntervalAxis",
        "IdItemMiembro": "annext_TotalMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:TimeIntervalAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/annext:TotalMember"
      }
    }
  },
  "GruposDimensionesMiembro": {
    "Between31And60DaysOrBetween1AndUpTo2MonthsMember": {
      "annext_TimeIntervalAxis": "Between31And60DaysOrBetween1AndUpTo2MonthsMember"
    },
    "LessThan1MonthOrLessThan30DaysMember": {
      "annext_TimeIntervalAxis": "LessThan1MonthOrLessThan30DaysMember"
    },
    "Between61And90DaysOrBetween2AndUpTo3MonthsMember": {
      "annext_TimeIntervalAxis": "Between61And90DaysOrBetween2AndUpTo3MonthsMember"
    },
    "Between91And120DaysOr3ToUpTo4MonthsMember": {
      "annext_TimeIntervalAxis": "Between91And120DaysOr3ToUpTo4MonthsMember"
    },
    "Between121And150DaysOrFrom4To5MonthsMember": {
      "annext_TimeIntervalAxis": "Between121And150DaysOrFrom4To5MonthsMember"
    },
    "Between151And180DaysOrBetween5AndUpTo6MonthsMember": {
      "annext_TimeIntervalAxis": "Between151And180DaysOrBetween5AndUpTo6MonthsMember"
    },
    "MoreThan180DaysOrMoreThan6MonthsMember": {
      "annext_TimeIntervalAxis": "MoreThan180DaysOrMoreThan6MonthsMember"
    },
    "InJudicialProcessMember": {
      "annext_TimeIntervalAxis": "InJudicialProcessMember"
    },
    "ExtensionMember": {
      "annext_TimeIntervalAxis": "ExtensionMember"
    },
    "TotalMember": {
      "annext_TimeIntervalAxis": "TotalMember"
    }
  },
  "PlantillasContextos": {
    "Between31And60DaysOrBetween1AndUpTo2MonthsMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "Between31And60DaysOrBetween1AndUpTo2MonthsMember",
      "ContieneInformacionDimensional": true
    },
    "LessThan1MonthOrLessThan30DaysMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "LessThan1MonthOrLessThan30DaysMember",
      "ContieneInformacionDimensional": true
    },
    "Between61And90DaysOrBetween2AndUpTo3MonthsMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "Between61And90DaysOrBetween2AndUpTo3MonthsMember",
      "ContieneInformacionDimensional": true
    },
    "Between91And120DaysOr3ToUpTo4MonthsMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "Between91And120DaysOr3ToUpTo4MonthsMember",
      "ContieneInformacionDimensional": true
    },
    "Between121And150DaysOrFrom4To5MonthsMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "Between121And150DaysOrFrom4To5MonthsMember",
      "ContieneInformacionDimensional": true
    },
    "Between151And180DaysOrBetween5AndUpTo6MonthsMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "Between151And180DaysOrBetween5AndUpTo6MonthsMember",
      "ContieneInformacionDimensional": true
    },
    "MoreThan180DaysOrMoreThan6MonthsMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "MoreThan180DaysOrMoreThan6MonthsMember",
      "ContieneInformacionDimensional": true
    },
    "InJudicialProcessMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "InJudicialProcessMember",
      "ContieneInformacionDimensional": true
    },
    "ExtensionMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "ExtensionMember",
      "ContieneInformacionDimensional": true
    },
    "TotalMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "TotalMember",
      "ContieneInformacionDimensional": true
    }
  },
  "Unidades": {
    "Udf8d7589-2c9d-4509-f0a5-11ddc17ee0d7": {
      "Id": "Udf8d7589-2c9d-4509-f0a5-11ddc17ee0d7",
      "Tipo": 1,
      "Medidas": [
        {
          "Nombre": "medida_MXN",
          "EspacioNombres": "medida_http___www_xbrl_org_2003_iso4217"
        }
      ]
    }
  }
};

}