/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433002_D_ar_pros_CompanyShareholdersTableHBis5 = {
    "FiltroCargaInicial": {
        "IdConcepto": [
            "ar_pros_CompanyShareholdersAbstract",
            "ar_pros_ShareholdersLineItems",
            "ar_pros_ShareholderNameCorporateName",
            "ar_pros_ShareholderFirstName",
            "ar_pros_ShareholderSecondName",
            "ar_pros_ShareholderShareholding",
            "ar_pros_ShareholderAdditionalInformation"
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
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CompanyShareholdersSequenceTypedAxis"
                },
                {
                    "Explicita": true,
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyShareholdersAxis"
                }
            ]
        ]
    },
    "TemplatesDimensiones": {
        "ar_pros_CompanyShareholdersSequenceTypedAxis": {
            "PrefijoValor": "<ar_pros:CompanyShareholdersSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
            "SubfijoValor": "</ar_pros:CompanyShareholdersSequenceDomain>",
            "EtiquetaNuevoElemento": "1",
            "Explicita": false,
            "IdDimension": "ar_pros_CompanyShareholdersSequenceTypedAxis",
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CompanyShareholdersSequenceTypedAxis"
        },
        "ar_pros_TypeOfCompanyShareholdersAxis": {
            "PrefijoValor": "http:",
            "SubfijoValor": "",
            "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:BeneficialShareholdersOfMoreThan10Member",
            "Explicita": true,
            "IdDimension": "ar_pros_TypeOfCompanyShareholdersAxis",
            "IdItemMiembro": "ar_pros_BeneficialShareholdersOfMoreThan10Member",
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyShareholdersAxis"
        }
    },
    "MiembrosDimensiones": {
        "ar_pros_TypeOfCompanyShareholdersAxis": {
            "BeneficialShareholdersOfMoreThan10Member": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyShareholdersAxis",
                "IdItemMiembro": "ar_pros_BeneficialShareholdersOfMoreThan10Member",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyShareholdersAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:BeneficialShareholdersOfMoreThan10Member"
            },
            "ShareholdersWithInfluenceMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyShareholdersAxis",
                "IdItemMiembro": "ar_pros_ShareholdersWithInfluenceMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyShareholdersAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ShareholdersWithInfluenceMember"
            },
            "ShareholdersExercisingControlMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyShareholdersAxis",
                "IdItemMiembro": "ar_pros_ShareholdersExercisingControlMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyShareholdersAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ShareholdersExercisingControlMember"
            }
        }
    },
    "GruposDimensionesMiembro": {
        "BeneficialShareholdersOfMoreThan10Member": {
            "ar_pros_TypeOfCompanyShareholdersAxis": "BeneficialShareholdersOfMoreThan10Member"
        },
        "ShareholdersWithInfluenceMember": {
            "ar_pros_TypeOfCompanyShareholdersAxis": "ShareholdersWithInfluenceMember"
        },
        "ShareholdersExercisingControlMember": {
            "ar_pros_TypeOfCompanyShareholdersAxis": "ShareholdersExercisingControlMember"
        }
    },
    "PlantillasContextos": {
        "BeneficialShareholdersOfMoreThan10Member": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "BeneficialShareholdersOfMoreThan10Member",
            "ContieneInformacionDimensional": true
        },
        "ShareholdersWithInfluenceMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "ShareholdersWithInfluenceMember",
            "ContieneInformacionDimensional": true
        },
        "ShareholdersExercisingControlMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "ShareholdersExercisingControlMember",
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