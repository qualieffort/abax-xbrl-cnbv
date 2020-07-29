/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433001_D_ar_pros_CompanyAdministratorsTableNBis2 = {
    "FiltroCargaInicial": {
        "IdConcepto": [
            "ar_pros_CompanyAdministratorsAbstract",
            "ar_pros_AdministratorsLineItems",
            "ar_pros_AdministratorName",
            "ar_pros_AdministratorFirstName",
            "ar_pros_AdministratorSecondName",
            "ar_pros_AdministratorDirectorshipType",
            "ar_pros_AdministratorDesignationAbstract",
            "ar_pros_AdministratorDesignationDate",
            "ar_pros_AdministratorAssemblyType",
            "ar_pros_AdministratorPeriodForWhichTheyWereElected",
            "ar_pros_AdministratorPosition",
            "ar_pros_AdministratorTimeWorkedInTheIssuer",
            "ar_pros_AdministratorGender",
            "ar_pros_AdministratorAdditionalInformation"
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
            "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:IndependentMember",
            "Explicita": true,
            "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
            "IdItemMiembro": "ar_pros_IndependentMember",
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:IndependentMember"
        }
    },
    "MiembrosDimensiones": {
        "ar_pros_TypeOfCompanyAdministratorsAxis": {
            "IndependentMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_IndependentMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:IndependentMember"
            },
            "NotIndependentMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_NotIndependentMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:NotIndependentMember"
            },
            "RelevantDirectorsMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_RelevantDirectorsMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:RelevantDirectorsMember"
            }
        }
    },
    "GruposDimensionesMiembro": {
        "IndependentMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "IndependentMember"
        },
        "NotIndependentMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "NotIndependentMember"
        },
        "RelevantDirectorsMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "RelevantDirectorsMember"
        }

    },
    "PlantillasContextos": {
        "IndependentMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "IndependentMember",
            "ContieneInformacionDimensional": true
        },
        "NotIndependentMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "NotIndependentMember",
            "ContieneInformacionDimensional": true
        },
        "RelevantDirectorsMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "RelevantDirectorsMember",
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