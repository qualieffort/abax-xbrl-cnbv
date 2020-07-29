/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_L_ar_pros_ResponsiblePersonsOfTheReportTable = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_ResponsiblePersonName",
      "ar_pros_ResponsiblePersonPosition",
      "ar_pros_ResponsiblePersonInstitution",
      "ar_pros_ResponsiblePersonLegend",
      "ar_pros_SignIssuanceUnderArt13OfTheCUE"
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
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis"
        },
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PublicServantA2NAMember"
        }
      ],
      [
        {
          "Explicita": false,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis"
        },
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterA3NBMember"
        }
      ],
      [
        {
          "Explicita": false,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis"
        },
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorA3NCMember"
        }
      ],
      [
        {
          "Explicita": false,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis"
        },
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:BachelorOfLawsA3NDMember"
        }
      ],
      [
        {
          "Explicita": false,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis"
        },
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOrAvalGuarantorA3NEMember"
        }
      ],
      [
        {
          "Explicita": false,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis"
        },
        {
          "Explicita": true,
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
          "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuringAgentA3NFMember"
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
      "EtiquetaNuevoElemento": "PublicServantA2NAMember",
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
      "PublicServantA2NAMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_PublicServantA2NAMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PublicServantA2NAMember"
      },
      "UnderwriterA3NBMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_UnderwriterA3NBMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterA3NBMember"
      },
      "ExternalAuditorA3NCMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_ExternalAuditorA3NCMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorA3NCMember"
      },
      "BachelorOfLawsA3NDMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_BachelorOfLawsA3NDMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:BachelorOfLawsA3NDMember"
      },
      "LegalRepresentativeOrAvalGuarantorA3NEMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_LegalRepresentativeOrAvalGuarantorA3NEMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOrAvalGuarantorA3NEMember"
      },
      "StructuringAgentA3NFMember": {
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
        "IdItemMiembro": "ar_pros_StructuringAgentA3NFMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuringAgentA3NFMember"
        },
        "OtherResponsiblePersonMember": {
            "Explicita": true,
            "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
            "IdItemMiembro": "ar_pros_OtherResponsiblePersonMember",
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:OtherResponsiblePersonMember"
        }
    }
  },
  "GruposDimensionesMiembro": {
    "PublicServantA2NAMember": {
      "ar_pros_TypeOfResponsibleFigureAxis": "PublicServantA2NAMember"
    },
    "UnderwriterA3NBMember": {
      "ar_pros_TypeOfResponsibleFigureAxis": "UnderwriterA3NBMember"
    },
    "ExternalAuditorA3NCMember": {
      "ar_pros_TypeOfResponsibleFigureAxis": "ExternalAuditorA3NCMember"
    },
    "BachelorOfLawsA3NDMember": {
      "ar_pros_TypeOfResponsibleFigureAxis": "BachelorOfLawsA3NDMember"
    },
    "LegalRepresentativeOrAvalGuarantorA3NEMember": {
      "ar_pros_TypeOfResponsibleFigureAxis": "LegalRepresentativeOrAvalGuarantorA3NEMember"
    },
    "StructuringAgentA3NFMember": {
      "ar_pros_TypeOfResponsibleFigureAxis": "StructuringAgentA3NFMember"
    }
  },
  "PlantillasContextos": {
    "PublicServantA2NAMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "PublicServantA2NAMember",
      "ContieneInformacionDimensional": true
    },
    "UnderwriterA3NBMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "UnderwriterA3NBMember",
      "ContieneInformacionDimensional": true
    },
    "ExternalAuditorA3NCMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "ExternalAuditorA3NCMember",
      "ContieneInformacionDimensional": true
    },
    "BachelorOfLawsA3NDMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "BachelorOfLawsA3NDMember",
      "ContieneInformacionDimensional": true
    },
    "LegalRepresentativeOrAvalGuarantorA3NEMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "LegalRepresentativeOrAvalGuarantorA3NEMember",
      "ContieneInformacionDimensional": true
    },
    "StructuringAgentA3NFMember": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "StructuringAgentA3NFMember",
      "ContieneInformacionDimensional": true
    }
  },
  "Unidades": {}
};

}