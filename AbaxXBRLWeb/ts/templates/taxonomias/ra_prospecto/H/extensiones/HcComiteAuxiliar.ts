/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

    export var ar_pros_CommitteesAuxiliaryToTheBoardOfDirectorsTable = {
        "FiltroCargaInicial": {
            "IdConcepto": [
                "ar_pros_MemberOfAuxiliaryCommitteeLineItems",
                "ar_pros_CommiteeName",
                "ar_pros_CommiteeFirstName",
                "ar_pros_CommiteeSecondName",
                "ar_pros_CommiteeMemberOfTheBoardOfDirectors",
                "ar_pros_CommiteeFinancialExpert",
                "ar_pros_CommiteeParticipateInCommitteesAbstract",
                "ar_pros_CommiteeParticipateInCommitteesAudit",
                "ar_pros_CommiteeParticipateInCommitteesCorporatePractices",
                "ar_pros_CommiteeParticipateInCommitteesEvaluationAndCompensation",
                "ar_pros_CommiteeParticipateInCommitteesInvestors",
                "ar_pros_CommiteeArticipateInCommitteesOthers",
                "ar_pros_CommiteeDesignationDate",
                "ar_pros_CommiteeTypeOfAssembly",
                "ar_pros_CommiteePeriodForWhichTheyWereElected",
                "ar_pros_CommiteeGender",
                "ar_pros_CommiteeAdditionalInformation",
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
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AuxiliaryCommitteesToTheBoardOfDirectorsSequenceTypedAxis"
                    },
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCommitteeMemberAxis"
                    }
                ]
            ]
        },
        "TemplatesDimensiones": {
            "ar_pros_AuxiliaryCommitteesToTheBoardOfDirectorsSequenceTypedAxis": {
                "PrefijoValor": "<ar_pros:CommitteesAuxiliarySequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
                "SubfijoValor": "</ar_pros:CommitteesAuxiliarySequenceDomain>",
                "EtiquetaNuevoElemento": "1",
                "Explicita": false,
                "IdDimension": "ar_pros_AuxiliaryCommitteesToTheBoardOfDirectorsSequenceTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AuxiliaryCommitteesToTheBoardOfDirectorsSequenceTypedAxis"
            },
            "ar_pros_TypeOfCommitteeMemberAxis": {
                "PrefijoValor": "http:",
                "SubfijoValor": "",
                "EtiquetaNuevoElemento": "",
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfCommitteeMemberAxis",
                "IdItemMiembro": "ar_pros_CommitteeIndependentMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCommitteeMemberAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommitteeIndependentMember"
            }
        },
        "MiembrosDimensiones": {
            "ar_pros_TypeOfCommitteeMemberAxis": {
                "ar_pros_CommitteeIndependentMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfCommitteeMemberAxis",
                    "IdItemMiembro": "ar_pros_CommitteeIndependentMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCommitteeMemberAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommitteeIndependentMember"
                },
                "ar_pros_CommitteeNotIndependentMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_TypeOfCommitteeMemberAxis",
                    "IdItemMiembro": "ar_pros_CommitteeNotIndependentMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfCommitteeMemberAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommitteeNotIndependentMember"
                },
            
            }
        },
        "GruposDimensionesMiembro": {
            "ar_pros_CommitteeIndependentMember": {
                "ar_pros_TypeOfCommitteeMemberAxis": "ar_pros_CommitteeIndependentMember"
            },
            "ar_pros_CommitteeNotIndependentMember": {
                "ar_pros_TypeOfCommitteeMemberAxis": "ar_pros_CommitteeNotIndependentMember"
            }
        },
        "PlantillasContextos": {
            "ar_pros_CommitteeIndependentMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "ar_pros_CommitteeIndependentMember",
                "ContieneInformacionDimensional": true
            },
            "ar_pros_CommitteeNotIndependentMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "ar_pros_CommitteeNotIndependentMember",
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