/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433003_D_ar_pros_CompanyAdministratorsTableL = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_CompanyAdministratorsAbstract",
      "ar_pros_AdministratorsLineItems",
      "ar_pros_AdministratorName",
      "ar_pros_AdministratorFirstName",
      "ar_pros_AdministratorSecondName",
      "ar_pros_AdministratorPosition",
      "ar_pros_AdministratorAge",
      "ar_pros_AdministratorMaximumStudiesDegree",
      "ar_pros_AdministratorMainResponsabilities",
      "ar_pros_AdministratorRelationship"
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
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CompanyAdministratorsSecuenceTypedAxis"
                },
                {
                    "Explicita": true,
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis"
                }
            ]
        ]
    },
    "TemplatesDimensiones": {
        "ar_pros_CompanyAdministratorsSecuenceTypedAxis": {
            "PrefijoValor": "<ar_pros:CompanyAdministratorsSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
            "SubfijoValor": "</ar_pros:CompanyAdministratorsSequenceDomain>",
            "EtiquetaNuevoElemento": "1",
            "Explicita": false,
            "IdDimension": "ar_pros_CompanyAdministratorsSecuenceTypedAxis",
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CompanyAdministratorsSecuenceTypedAxis"
        },
        "ar_pros_TypeOfCompanyAdministratorsAxis": {
            "PrefijoValor": "http:",
            "SubfijoValor": "",
            "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:GovernorMember",
            "Explicita": true,
            "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
            "IdItemMiembro": "ar_pros_GovernorMember",
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:GovernorMember"
        }
    },
    "MiembrosDimensiones": {
        "ar_pros_TypeOfCompanyAdministratorsAxis": {
            "GovernorMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_GovernorMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:GovernorMember"
            },
            "FinancialSecretaryMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_FinancialSecretaryMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FinancialSecretaryMember"
            },
            "TreasurerMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_TreasurerMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TreasurerMember"
            },
            "TopOfficialsMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_TopOfficialsMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TopOfficialsMember"
            }
        }
    },
    "GruposDimensionesMiembro": {
        "GovernorMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "GovernorMember"
        },
        "FinancialSecretaryMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "FinancialSecretaryMember"
        },
        "TreasurerMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "TreasurerMember"
        },
        "TopOfficialsMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "TopOfficialsMember"
        }
    },
    "PlantillasContextos": {
        "GovernorMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "GovernorMember",
            "ContieneInformacionDimensional": true
        },
        "FinancialSecretaryMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "FinancialSecretaryMember",
            "ContieneInformacionDimensional": true
        },
        "TreasurerMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "TreasurerMember",
            "ContieneInformacionDimensional": true
        },
        "TopOfficialsMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "TopOfficialsMember",
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