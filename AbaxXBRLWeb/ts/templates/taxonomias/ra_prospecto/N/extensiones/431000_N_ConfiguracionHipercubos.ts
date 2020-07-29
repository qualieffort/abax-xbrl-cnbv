/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_N_ar_pros_ResponsiblePersonsOfTheReportTable = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_ResponsiblePersonName",
      "ar_pros_ResponsiblePersonPosition",
      "ar_pros_ResponsiblePersonInstitution",
      "ar_pros_ResponsiblePersonLegend"
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
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member"
        }
      ],
      [ 
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorRepresentativeAndAuditorA33N12Member"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ar_pros_ResponsiblePersonsSequenceTypedAxis": {
      "PrefijoValor": "<ar_pros:ResponsiblePersonSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
      "SubfijoValor": "</ar_pros:ResponsiblePersonSequenceDomain>",
      "EtiquetaNuevoElemento": "1",
      "Explicita": false,
      "IdDimension": "ar_pros_ResponsiblePersonsSequenceTypedAxis",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis"
    },
    "ar_pros_TypeOfResponsibleFigureAxis": {
      "PrefijoValor": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:",
      "SubfijoValor": "",
      "EtiquetaNuevoElemento": "CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member",
      "Explicita": true,
      "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis"
    },
    "ar_pros_ResponsiblePersonsInstitutionSequenceTypedAxis": {
        "PrefijoValor": "<ar_pros:ResponsiblePersonInstitutionSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
        "SubfijoValor": "</ar_pros:ResponsiblePersonInstitutionSequenceDomain>",
        "EtiquetaNuevoElemento": "1",
        "Explicita": false,
        "IdDimension": "ar_pros_ResponsiblePersonsInstitutionSequenceTypedAxis",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsInstitutionSequenceTypedAxis"
    }
  },
  "MiembrosDimensiones": {
    "ar_pros_TypeOfResponsibleFigureAxis": {
      "CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member"
      },
      "ExternalAuditorRepresentativeAndAuditorA33N12Member": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_ExternalAuditorRepresentativeAndAuditorA33N12Member",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorRepresentativeAndAuditorA33N12Member"
      }
    }
  },
  "GruposDimensionesMiembro": {
    "CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member": {
      "ar_pros_TypeOfResponsibleFigureAxis": "CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member"
    },
    "ExternalAuditorRepresentativeAndAuditorA33N12Member": {
      "ar_pros_TypeOfResponsibleFigureAxis": "ExternalAuditorRepresentativeAndAuditorA33N12Member"
    }
  },
  "PlantillasContextos": {
    "CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member",
      "ContieneInformacionDimensional": true
    },
    "ExternalAuditorRepresentativeAndAuditorA33N12Member": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "ExternalAuditorRepresentativeAndAuditorA33N12Member",
      "ContieneInformacionDimensional": true
    }
  },
  "Unidades": {}
};

}