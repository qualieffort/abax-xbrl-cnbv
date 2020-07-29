/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

    export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433012_D_ar_pros_MainProjectsOrFinancingPurposesTable = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_MainProjectsOrFinancingPurposesAbstract",
      "ar_pros_ProjectOrFinancingPurposeLineItems",
      "ar_pros_MainFinancingPurposeDescription",
      "ar_pros_MainFinancingPurposePercentage"
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
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MainProjectsOrFinancingPurposesSequenceTypedAxis"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ar_pros_MainProjectsOrFinancingPurposesSequenceTypedAxis": {
      "PrefijoValor": "<ar_pros:SerieDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
      "SubfijoValor": "</ar_pros:SerieDomain>",
      "EtiquetaNuevoElemento": "1",
      "Explicita": false,
        "IdDimension": "ar_pros_MainProjectsOrFinancingPurposesSequenceTypedAxis",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MainProjectsOrFinancingPurposesSequenceTypedAxis"
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
                ],
                "MedidasDenominador": [],
                "MedidasNumerador": []
            }
        }
};

}