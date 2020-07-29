/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433008_D_ar_pros_FoundingShareholdersTableH = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_FoundingShareholdersAbstract",
      "ar_pros_FoundingShareholdersLineItems",
      "ar_pros_FoundingShareholdersName",
      "ar_pros_FoundingShareholderPosition"
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
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FoundingShareholdersSecuenceTypedAxis"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ar_pros_FoundingShareholdersSecuenceTypedAxis": {
      "PrefijoValor": "<ar_pros:FoundingInvestorSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
      "SubfijoValor": "</ar_pros:FoundingInvestorSequenceDomain>",
      "EtiquetaNuevoElemento": "1",
      "Explicita": false,
      "IdDimension": "ar_pros_FoundingShareholdersSecuenceTypedAxis",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FoundingShareholdersSecuenceTypedAxis"
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
      }
  }
};

}