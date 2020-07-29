/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433001_D_ar_pros_CompanyAdministratorsTableH = {
    "FiltroCargaInicial": {
        "IdConcepto": [
            "ar_pros_CompanyAdministratorsAbstract",
            "ar_pros_AdministratorsLineItems",
            "ar_pros_AdministratorName",
            "ar_pros_AdministratorFirstName",
            "ar_pros_AdministratorSecondName",
            "ar_pros_ForeignAdministrator",
            "ar_pros_AdministratorDirectorshipType",
            "ar_pros_AdministratorParticipateInCommittees",
            "ar_pros_AdministratorDesignationAbstract",
            "ar_pros_AdministratorDesignationDate",
            "ar_pros_AdministratorAssemblyType",
            "ar_pros_AdministratorAssemblyTypePros",
            "ar_pros_AdministratorPeriodForWhichTheyWereElected",
            "ar_pros_AdministratorPosition",
            "ar_pros_AdministratorWorksForTheIssuer",
            "ar_pros_AdministratorTimeWorkedInTheIssuerNumber",
            "ar_pros_AdministratorShareholding",
            "ar_pros_AdministratorAdditionalInformation",
            "ar_pros_AdministratorGenderProspectoH",
            "ar_pros_CompaniesWithCollaborationAsRelevantManagerOrMemberOfTheBoardOfAdministrator",
            "ar_pros_CompaniesWithCollaborationHasRelationWithIssuerOfAdministrator",
            "ar_pros_AdministratorParticipateInCommitteesAudit",
            "ar_pros_AdministratorParticipateInCommitteesCorporatePractices",
            "ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation",
            "ar_pros_AdministratorParticipateInCommitteesOthers"
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
            "PatrimonialMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_PatrimonialMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PatrimonialMember"
            },
            "PatrimonialIndependentMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_PatrimonialIndependentMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PatrimonialIndependentMember"
            },
            "RelatedMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCompanyAdministratorsAxis",
                "IdItemMiembro": "ar_pros_RelatedMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCompanyAdministratorsAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:RelatedMember"
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
        "PatrimonialMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "PatrimonialMember"
        },
        "PatrimonialIndependentMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "PatrimonialIndependentMember"
        },
        "RelatedMember": {
            "ar_pros_TypeOfCompanyAdministratorsAxis": "RelatedMember"
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
        "PatrimonialMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "PatrimonialMember",
            "ContieneInformacionDimensional": true
        },
        "PatrimonialIndependentMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "PatrimonialIndependentMember",
            "ContieneInformacionDimensional": true
        },
        "RelatedMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "RelatedMember",
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
        ,"pure": {
            "Id": "pure",
            "Tipo": 1,
            "Medidas": [
                {
                    "Nombre": "medida_pure",
                    "EspacioNombres": "medida_http___www_xbrl_org_2003_instance"
                }
            ]
        }
    }
};

}