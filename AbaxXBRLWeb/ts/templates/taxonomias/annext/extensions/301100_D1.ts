/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_annext_roles_301100_D1_annext_OutstandingBalanceOfTheIssueAtEndOfPeriodTable = {
  "FiltroCargaInicial": {
    "IdConcepto": [
        "annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod",
        "annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes",
        "annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes"
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
          "Explicita": false,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "annext_SerieTypedAxis": {
      "PrefijoValor": "<annext:SerieDomain xmlns:annext=\"http://www.cnbv.gob.mx/2016-08-22/annext\">",
      "SubfijoValor": "</annext:SerieDomain>",
      "EtiquetaNuevoElemento": "SERIE",
      "Explicita": false,
      "IdDimension": "annext_SerieTypedAxis",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis"
    }
  },
  "MiembrosDimensiones": {},
  "GruposDimensionesMiembro": {
    "DEFAULT": {}
  },
  "PlantillasContextos": {
    "DEFAULT": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2016_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "DEFAULT",
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