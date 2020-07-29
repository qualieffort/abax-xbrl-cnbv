/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_HBIS4_ar_pros_ParticipantsInTheOfferTable = {
    "FiltroCargaInicial": {
        "IdConcepto": [
            "ar_pros_ParticipantsInTheOfferAbstract",
            "ar_pros_ParticipantLineItems",
            "ar_pros_ParticipantName",
            "ar_pros_SignificantParticipationInTheOffer",
            "ar_pros_CostsRelatedToTheOfferAbstract",
            "ar_pros_AmountOfferCost",
            "ar_pros_IvaOfferCost",
            "ar_pros_TotalOfferCost"
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
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis"
                },
                {
                    "Explicita": true,
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis"
                }
            ]
        ]
    },
    "TemplatesDimensiones": {
        "ar_pros_ParticipantsInTheOfferSequenceTypedAxis": {
            "PrefijoValor": "<ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
            "SubfijoValor": "</ar_pros:ParticipantSequenceDomain>",
            "EtiquetaNuevoElemento": "1",
            "Explicita": false,
            "IdDimension": "ar_pros_ParticipantsInTheOfferSequenceTypedAxis",
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis"
        },
        "ar_pros_TypeOfParticipationsInTheOfferAxis": {
            "PrefijoValor": "ar_pros_",
            "SubfijoValor": "",
            "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:NationalLawyersMember",
            "Explicita": true,
            "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
            "IdItemMiembro": "ar_pros_NationalLawyersMember",
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis"
        }
    },
    "MiembrosDimensiones": {
        "ar_pros_TypeOfParticipationsInTheOfferAxis": {
            "NationalLawyersMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_NationalLawyersMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:NationalLawyersMember"
            },
            "InternationalLawyersMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_InternationalLawyersMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:InternationalLawyersMember"
            },
            "BrokerageCommissionsAndPlacementMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_BrokerageCommissionsAndPlacementMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:BrokerageCommissionsAndPlacementMember"
            },
            "StructuringAgentMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_StructuringAgentMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuringAgentMember"
            },
            "CommonRepresentativeMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_CommonRepresentativeMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommonRepresentativeMember"
            },
            "ExternalAuditorMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_ExternalAuditorMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorMember"
            },
            "TrustFeesMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_TrustFeesMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TrustFeesMember"
            },
            "OtherParticipantMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_OtherParticipantMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:OtherParticipantMember"
            },
            "StudyAndProcessInCnbvMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_StudyAndProcessInCnbvMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StudyAndProcessInCnbvMember"
            },
            "StudyAndProcessInBmvMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_StudyAndProcessInBmvMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StudyAndProcessInBmvMember"
            },
            "NationalSecuritiesRegistryMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_NationalSecuritiesRegistryMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:NationalSecuritiesRegistryMember"
            },
            "ListingInBmvMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_ListingInBmvMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ListingInBmvMember"
            },
            "GuarantorOrAvalMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_GuarantorOrAvalMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:GuarantorOrAvalMember"
            },
            "TrustorsMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_TrustorsMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TrustorsMember"
            },
            "AdministratorMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_AdministratorMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AdministratorMember"
            },
            "PromoterCompaniesOrProjects": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_PromoterCompaniesOrProjects",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PromoterCompaniesOrProjects"
            },
            "AllParticipantMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfParticipationsInTheOfferAxis",
                "IdItemMiembro": "ar_pros_AllParticipantMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AllParticipantMember"
            }
        },
        "ar_pros_ParticipantsInTheOfferSequenceTypedAxis": {
            "TOTAL": {
                "Explicita": false,
                "IdDimension": "ar_pros_ParticipantsInTheOfferSequenceTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis",
                "ElementoMiembroTipificado": "<ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">TOTAL</ar_pros:ParticipantSequenceDomain>"
            },
            "StudyAndProcessInCnbvMember": {
                "Explicita": false,
                "IdDimension": "ar_pros_ParticipantsInTheOfferSequenceTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis",
                "ElementoMiembroTipificado": "<ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">StudyAndProcessInCnbvMember</ar_pros:ParticipantSequenceDomain>"
            },
            "StudyAndProcessInBmvMember": {
                "Explicita": false,
                "IdDimension": "ar_pros_ParticipantsInTheOfferSequenceTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis",
                "ElementoMiembroTipificado": "<ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">StudyAndProcessInBmvMember</ar_pros:ParticipantSequenceDomain>"
            },
            "NationalSecuritiesRegistryMember": {
                "Explicita": false,
                "IdDimension": "ar_pros_ParticipantsInTheOfferSequenceTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis",
                "ElementoMiembroTipificado": "<ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">NationalSecuritiesRegistryMember</ar_pros:ParticipantSequenceDomain>"
            },
            "ListingInBmvMember": {
                "Explicita": false,
                "IdDimension": "ar_pros_ParticipantsInTheOfferSequenceTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ParticipantsInTheOfferSequenceTypedAxis",
                "ElementoMiembroTipificado": "<ar_pros:ParticipantSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">ListingInBmvMember</ar_pros:ParticipantSequenceDomain>"
            }
        }
    },
    "GruposDimensionesMiembro": {
        "NationalLawyersMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "NationalLawyersMember"
        },
        "InternationalLawyersMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "InternationalLawyersMember"
        },
        "BrokerageCommissionsAndPlacementMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "BrokerageCommissionsAndPlacementMember"
        },
        "StructuringAgentMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "StructuringAgentMember"
        },
        "CommonRepresentativeMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "CommonRepresentativeMember"
        },
        "ExternalAuditorMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "ExternalAuditorMember"
        },
        "TrustFeesMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "TrustFeesMember"
        },
        "OtherParticipantMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "OtherParticipantMember"
        },
        "StudyAndProcessInCnbvMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "StudyAndProcessInCnbvMember"
        },
        "StudyAndProcessInBmvMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "StudyAndProcessInBmvMember"
        },
        "NationalSecuritiesRegistryMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "NationalSecuritiesRegistryMember"
        },
        "ListingInBmvMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "ListingInBmvMember"
        },
        "GuarantorOrAvalMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "GuarantorOrAvalMember"
        },
        "TrustorsMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "TrustorsMember"
        },
        "AdministratorMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "AdministratorMember"
        },
        "PromoterCompaniesOrProjects": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis":"PromoterCompaniesOrProjects"
        },
        "AllParticipantMember": {
            "ar_pros_TypeOfParticipationsInTheOfferAxis": "AllParticipantMember"
        }
    },
    "PlantillasContextos": {
        "NationalLawyersMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "NationalLawyersMember",
            "ContieneInformacionDimensional": true
        },
        "InternationalLawyersMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "InternationalLawyersMember",
            "ContieneInformacionDimensional": true
        },
        "BrokerageCommissionsAndPlacementMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "BrokerageCommissionsAndPlacementMember",
            "ContieneInformacionDimensional": true
        },
        "StructuringAgentMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "StructuringAgentMember",
            "ContieneInformacionDimensional": true
        },
        "CommonRepresentativeMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "CommonRepresentativeMember",
            "ContieneInformacionDimensional": true
        },
        "ExternalAuditorMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "ExternalAuditorMember",
            "ContieneInformacionDimensional": true
        },
        "TrustFeesMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "TrustFeesMember",
            "ContieneInformacionDimensional": true
        },
        "OtherParticipantMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "OtherParticipantMember",
            "ContieneInformacionDimensional": true
        },
        "StudyAndProcessInCnbvMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "StudyAndProcessInCnbvMember",
            "ContieneInformacionDimensional": true
        },
        "StudyAndProcessInBmvMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "StudyAndProcessInBmvMember",
            "ContieneInformacionDimensional": true
        },
        "NationalSecuritiesRegistryMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "NationalSecuritiesRegistryMember",
            "ContieneInformacionDimensional": true
        },
        "ListingInBmvMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "ListingInBmvMember",
            "ContieneInformacionDimensional": true
        },
        "GuarantorOrAvalMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "GuarantorOrAvalMember",
            "ContieneInformacionDimensional": true
        },
        "TrustorsMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "TrustorsMember",
            "ContieneInformacionDimensional": true
        },
        "AdministratorMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "AdministratorMember",
            "ContieneInformacionDimensional": true
        },
        "PromoterCompaniesOrProjects": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "PromoterCompaniesOrProjects",
            "ContieneInformacionDimensional": true
        },
        "AllParticipantMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "AllParticipantMember",
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