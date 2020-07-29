/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_431000_H_ar_pros_ResponsiblePersonsOfTheReportTableHBis5 = {
        "FiltroCargaInicial": {
            "IdConcepto": [
                "ar_pros_ResponsiblePersonName",
                "ar_pros_ResponsiblePersonPosition",
                "ar_pros_ResponsiblePersonInstitution",
                "ar_pros_ResponsiblePersonLegend",
                "ar_pros_SignIssuanceUnderArt13OfTheCUE",
                "ar_pros_ResponsiblePersonInstitutionExternalAuditor",
                "ar_pros_OtherInstitutionExternalAuditor",
                "ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws",
                "ar_pros_OtherInstitutionBacherlorOfLaws"
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
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MembersOfTheBoardOfDirectorsA2N1Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommissionerA2N2Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterA2N4Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:Underwriter2RepresentativesA2N4Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterSharesA2N4Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterSharesAnd2RepresentativesA2N4Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterRestrictedOfferA2N4Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterRestrictedAnd2RepresentativesOfferA2N4Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterPublicOfferSharesAndRestrictedA2N4Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterSharesRestrictedPublicOfferingAnd2RepresentativesA2N4Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorRepresentativeAndAuditorA2N5Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:BachelorOfLawsA2N6Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfTheGuarantorA2N7Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfTheGuarantor2RepresentativesA2No7Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfAvalA2N7Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfAval2RepresentativesA2N7Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfTheTrustA2N8Member"
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
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfTheTrust2RepresentativesA2N8Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommonRepresentativeTrustSecuritiesOtherThanSharesAnd2RepresentativesA2N10Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuringAgentA2N12Member"
                    }
                ],
                [
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuringAgent2RepresentativesA2N12Member"
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
                "EtiquetaNuevoElemento": "MembersOfTheBoardOfDirectorsA2N1Member",
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
                "MembersOfTheBoardOfDirectorsA2N1Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_MembersOfTheBoardOfDirectorsA2N1Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MembersOfTheBoardOfDirectorsA2N1Member"
                },
                "MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member"
                },
                "CommissionerA2N2Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_CommissionerA2N2Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommissionerA2N2Member"
                },
                "CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member"
                },
                "UnderwriterA2N4Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_UnderwriterA2N4Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterA2N4Member"
                },
                "Underwriter2RepresentativesA2N4Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_Underwriter2RepresentativesA2N4Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:Underwriter2RepresentativesA2N4Member"
                },
                "UnderwriterSharesA2N4Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_UnderwriterSharesA2N4Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterSharesA2N4Member"
                },
                "UnderwriterSharesAnd2RepresentativesA2N4Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_UnderwriterSharesAnd2RepresentativesA2N4Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterSharesAnd2RepresentativesA2N4Member"
                },
                "UnderwriterRestrictedOfferA2N4Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_UnderwriterRestrictedOfferA2N4Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterRestrictedOfferA2N4Member"
                },
                "UnderwriterRestrictedAnd2RepresentativesOfferA2N4Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_UnderwriterRestrictedAnd2RepresentativesOfferA2N4Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterRestrictedAnd2RepresentativesOfferA2N4Member"
                },
                "UnderwriterPublicOfferSharesAndRestrictedA2N4Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_UnderwriterPublicOfferSharesAndRestrictedA2N4Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterPublicOfferSharesAndRestrictedA2N4Member"
                },
                "UnderwriterSharesRestrictedPublicOfferingAnd2RepresentativesA2N4Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_UnderwriterSharesRestrictedPublicOfferingAnd2RepresentativesA2N4Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:UnderwriterSharesRestrictedPublicOfferingAnd2RepresentativesA2N4Member"
                },
                "ExternalAuditorRepresentativeAndAuditorA2N5Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_ExternalAuditorRepresentativeAndAuditorA2N5Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorRepresentativeAndAuditorA2N5Member"
                },
                "BachelorOfLawsA2N6Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_BachelorOfLawsA2N6Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:BachelorOfLawsA2N6Member"
                },
                "LegalRepresentativeOfTheGuarantorA2N7Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_LegalRepresentativeOfTheGuarantorA2N7Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfTheGuarantorA2N7Member"
                },
                "LegalRepresentativeOfTheGuarantor2RepresentativesA2No7Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_LegalRepresentativeOfTheGuarantor2RepresentativesA2No7Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfTheGuarantor2RepresentativesA2No7Member"
                },
                "LegalRepresentativeOfAvalA2N7Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_LegalRepresentativeOfAvalA2N7Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfAvalA2N7Member"
                },
                "LegalRepresentativeOfAval2RepresentativesA2N7Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_LegalRepresentativeOfAval2RepresentativesA2N7Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfAval2RepresentativesA2N7Member"
                },
                "LegalRepresentativeOfTheTrustA2N8Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_LegalRepresentativeOfTheTrustA2N8Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfTheTrustA2N8Member"
                },
                "LegalRepresentativeOfTheTrust2RepresentativesA2N8Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_LegalRepresentativeOfTheTrust2RepresentativesA2N8Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalRepresentativeOfTheTrust2RepresentativesA2N8Member"
                },
                "DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member"
                },
                "CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member"
                },
                "CommonRepresentativeTrustSecuritiesOtherThanSharesAnd2RepresentativesA2N10Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_CommonRepresentativeTrustSecuritiesOtherThanSharesAnd2RepresentativesA2N10Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommonRepresentativeTrustSecuritiesOtherThanSharesAnd2RepresentativesA2N10Member"
                },
                "ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member"
                },
                "StructuringAgentA2N12Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_StructuringAgentA2N12Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuringAgentA2N12Member"
                },
                "StructuringAgent2RepresentativesA2N12Member": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfResponsibleFigureAxis",
                    "IdItemMiembro": "ar_pros_StructuringAgent2RepresentativesA2N12Member",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuringAgent2RepresentativesA2N12Member"
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
            "MembersOfTheBoardOfDirectorsA2N1Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "MembersOfTheBoardOfDirectorsA2N1Member"
            },
            "MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member"
            },
            "CommissionerA2N2Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "CommissionerA2N2Member"
            },
            "CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member"
            },
            "UnderwriterA2N4Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "UnderwriterA2N4Member"
            },
            "Underwriter2RepresentativesA2N4Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "Underwriter2RepresentativesA2N4Member"
            },
            "UnderwriterSharesA2N4Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "UnderwriterSharesA2N4Member"
            },
            "UnderwriterSharesAnd2RepresentativesA2N4Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "UnderwriterSharesAnd2RepresentativesA2N4Member"
            },
            "UnderwriterRestrictedOfferA2N4Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "UnderwriterRestrictedOfferA2N4Member"
            },
            "UnderwriterRestrictedAnd2RepresentativesOfferA2N4Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "UnderwriterRestrictedAnd2RepresentativesOfferA2N4Member"
            },
            "UnderwriterPublicOfferSharesAndRestrictedA2N4Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "UnderwriterPublicOfferSharesAndRestrictedA2N4Member"
            },
            "UnderwriterSharesRestrictedPublicOfferingAnd2RepresentativesA2N4Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "UnderwriterSharesRestrictedPublicOfferingAnd2RepresentativesA2N4Member"
            },
            "ExternalAuditorRepresentativeAndAuditorA2N5Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "ExternalAuditorRepresentativeAndAuditorA2N5Member"
            },
            "BachelorOfLawsA2N6Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "BachelorOfLawsA2N6Member"
            },
            "LegalRepresentativeOfTheGuarantorA2N7Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "LegalRepresentativeOfTheGuarantorA2N7Member"
            },
            "LegalRepresentativeOfTheGuarantor2RepresentativesA2No7Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "LegalRepresentativeOfTheGuarantor2RepresentativesA2No7Member"
            },
            "LegalRepresentativeOfAvalA2N7Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "LegalRepresentativeOfAvalA2N7Member"
            },
            "LegalRepresentativeOfAval2RepresentativesA2N7Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "LegalRepresentativeOfAval2RepresentativesA2N7Member"
            },
            "LegalRepresentativeOfTheTrustA2N8Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "LegalRepresentativeOfTheTrustA2N8Member"
            },
            "LegalRepresentativeOfTheTrust2RepresentativesA2N8Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "LegalRepresentativeOfTheTrust2RepresentativesA2N8Member"
            },
            "DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member"
            },
            "CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member"
            },
            "CommonRepresentativeTrustSecuritiesOtherThanSharesAnd2RepresentativesA2N10Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "CommonRepresentativeTrustSecuritiesOtherThanSharesAnd2RepresentativesA2N10Member"
            },
            "ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member"
            },
            "StructuringAgentA2N12Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "StructuringAgentA2N12Member"
            },
            "StructuringAgent2RepresentativesA2N12Member": {
                "ar_pros_TypeOfResponsibleFigureAxis": "StructuringAgent2RepresentativesA2N12Member"
            }
        },
        "PlantillasContextos": {
            "MembersOfTheBoardOfDirectorsA2N1Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "MembersOfTheBoardOfDirectorsA2N1Member",
                "ContieneInformacionDimensional": true
            },
            "MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member",
                "ContieneInformacionDimensional": true
            },
            "CommissionerA2N2Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "CommissionerA2N2Member",
                "ContieneInformacionDimensional": true
            },
            "CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member",
                "ContieneInformacionDimensional": true
            },
            "UnderwriterA2N4Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "UnderwriterA2N4Member",
                "ContieneInformacionDimensional": true
            },
            "Underwriter2RepresentativesA2N4Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "Underwriter2RepresentativesA2N4Member",
                "ContieneInformacionDimensional": true
            },
            "UnderwriterSharesA2N4Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "UnderwriterSharesA2N4Member",
                "ContieneInformacionDimensional": true
            },
            "UnderwriterSharesAnd2RepresentativesA2N4Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "UnderwriterSharesAnd2RepresentativesA2N4Member",
                "ContieneInformacionDimensional": true
            },
            "UnderwriterRestrictedOfferA2N4Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "UnderwriterRestrictedOfferA2N4Member",
                "ContieneInformacionDimensional": true
            },
            "UnderwriterRestrictedAnd2RepresentativesOfferA2N4Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "UnderwriterRestrictedAnd2RepresentativesOfferA2N4Member",
                "ContieneInformacionDimensional": true
            },
            "UnderwriterPublicOfferSharesAndRestrictedA2N4Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "UnderwriterPublicOfferSharesAndRestrictedA2N4Member",
                "ContieneInformacionDimensional": true
            },
            "UnderwriterSharesRestrictedPublicOfferingAnd2RepresentativesA2N4Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "UnderwriterSharesRestrictedPublicOfferingAnd2RepresentativesA2N4Member",
                "ContieneInformacionDimensional": true
            },
            "ExternalAuditorRepresentativeAndAuditorA2N5Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "ExternalAuditorRepresentativeAndAuditorA2N5Member",
                "ContieneInformacionDimensional": true
            },
            "BachelorOfLawsA2N6Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "BachelorOfLawsA2N6Member",
                "ContieneInformacionDimensional": true
            },
            "LegalRepresentativeOfTheGuarantorA2N7Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "LegalRepresentativeOfTheGuarantorA2N7Member",
                "ContieneInformacionDimensional": true
            },
            "LegalRepresentativeOfTheGuarantor2RepresentativesA2No7Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "LegalRepresentativeOfTheGuarantor2RepresentativesA2No7Member",
                "ContieneInformacionDimensional": true
            },
            "LegalRepresentativeOfAvalA2N7Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "LegalRepresentativeOfAvalA2N7Member",
                "ContieneInformacionDimensional": true
            },
            "LegalRepresentativeOfAval2RepresentativesA2N7Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "LegalRepresentativeOfAval2RepresentativesA2N7Member",
                "ContieneInformacionDimensional": true
            },
            "LegalRepresentativeOfTheTrustA2N8Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "LegalRepresentativeOfTheTrustA2N8Member",
                "ContieneInformacionDimensional": true
            },
            "LegalRepresentativeOfTheTrust2RepresentativesA2N8Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "LegalRepresentativeOfTheTrust2RepresentativesA2N8Member",
                "ContieneInformacionDimensional": true
            },
            "DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member",
                "ContieneInformacionDimensional": true
            },
            "CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member",
                "ContieneInformacionDimensional": true
            },
            "CommonRepresentativeTrustSecuritiesOtherThanSharesAnd2RepresentativesA2N10Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "CommonRepresentativeTrustSecuritiesOtherThanSharesAnd2RepresentativesA2N10Member",
                "ContieneInformacionDimensional": true
            },
            "ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member",
                "ContieneInformacionDimensional": true
            },
            "StructuringAgentA2N12Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "StructuringAgentA2N12Member",
                "ContieneInformacionDimensional": true
            },
            "StructuringAgent2RepresentativesA2N12Member": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "StructuringAgent2RepresentativesA2N12Member",
                "ContieneInformacionDimensional": true
            }
        },
        "Unidades": {}
    };

}