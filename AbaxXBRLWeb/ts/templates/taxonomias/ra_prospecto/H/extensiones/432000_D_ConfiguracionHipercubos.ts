/**
 * Definición JSON con la configuración base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_432000_D_ar_pros_AnnexesTable = {
  "FiltroCargaInicial": {
    "IdConcepto": [
      "ar_pros_AnnexesAbstract",
      "ar_pros_AnnexesLineItems",
      "ar_pros_ReferenceIncorporationAnnexes",
      "ar_pros_DocumentAnnexesTextBlock",
      "ar_pros_DocumentAnnexesToken",
      "ar_pros_ReportPeriodAnnexes",
      "ar_pros_DeadlineCNBVAnnexes",
      "ar_pros_DeadlineStockExchangeAnnexes",
      "ar_pros_PublicConsultationSitesAnnexes",
      "ar_pros_AttachedFileAnnexes"
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
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AnnexesTableSecuenceTypedAxis"
        },
        {
          "Explicita": true,
            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ar_pros_AnnexesTableSecuenceTypedAxis": {
        "PrefijoValor": "<ar_pros:AnnexesTableSecuenceTypedAxisSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
        "SubfijoValor": "</ar_pros:AnnexesTableSecuenceTypedAxisSequenceDomain>",
        "EtiquetaNuevoElemento": "1",
        "Explicita": false,
        "IdDimension": "ar_pros_AnnexesTableSecuenceTypedAxis",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AnnexesTableSecuenceTypedAxis"
      },
    "ar_pros_TypeOfAnnexAxis": {
        "PrefijoValor": "http:",
        "SubfijoValor": "",
        "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:FinancialStatementsMember",
        "Explicita": true,
        "IdDimension": "ar_pros_TypeOfAnnexAxis",
        "IdItemMiembro": "ar_pros_FinancialStatementsMember",
        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
        "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FinancialStatementsMember"
      }
  },
    "MiembrosDimensiones": {
        "ar_pros_TypeOfAnnexAxis": {
            "FinancialStatementsMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_FinancialStatementsMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FinancialStatementsMember"
            },
            "OpinionsOfAuditCommitteeAndCorporatePracticesMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_OpinionsOfAuditCommitteeAndCorporatePracticesMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:OpinionsOfAuditCommitteeAndCorporatePracticesMember"
            },
            "CommissionerReportMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_CommissionerReportMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:CommissionerReportMember"
            },
            "LegalOpinionMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_LegalOpinionMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:LegalOpinionMember"
            },
            "TitleMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_TitleMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TitleMember"
            },
            "RatingOnCreditRiskMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_RatingOnCreditRiskMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:RatingOnCreditRiskMember"
            },
            "GuaranteesOrGuarantorsMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_GuaranteesOrGuarantorsMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:GuaranteesOrGuarantorsMember"
            },
            "TrustContractMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_TrustContractMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TrustContractMember"
            },
            "IssueCertificateMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_IssueCertificateMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:IssueCertificateMember"
            },
            "OpinionFiscalMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_OpinionFiscalMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:OpinionFiscalMember"
            },
            "OtherDocumentsMember": {
                "Explicita": true,
                "IdDimension": "ar_pros_TypeOfAnnexAxis",
                "IdItemMiembro": "ar_pros_OtherDocumentsMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfAnnexAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:OtherDocumentsMember"
            }
        }
    },
    "GruposDimensionesMiembro": {
        "FinancialStatementsMember": {
            "ar_pros_TypeOfAnnexAxis": "FinancialStatementsMember"
        },
        "OpinionsOfAuditCommitteeAndCorporatePracticesMember": {
            "ar_pros_TypeOfAnnexAxis": "OpinionsOfAuditCommitteeAndCorporatePracticesMember"
        },
        "CommissionerReportMember": {
            "ar_pros_TypeOfAnnexAxis": "CommissionerReportMember"
        },
        "LegalOpinionMember": {
            "ar_pros_TypeOfAnnexAxis": "LegalOpinionMember"
        },
        "TitleMember": {
            "ar_pros_TypeOfAnnexAxis": "TitleMember"
        },
        "RatingOnCreditRiskMember": {
            "ar_pros_TypeOfAnnexAxis": "RatingOnCreditRiskMember"
        },
        "GuaranteesOrGuarantorsMember": {
            "ar_pros_TypeOfAnnexAxis": "GuaranteesOrGuarantorsMember"
        },
        "TrustContractMember": {
            "ar_pros_TypeOfAnnexAxis": "TrustContractMember"
        },
        "IssueCertificateMember": {
            "ar_pros_TypeOfAnnexAxis": "IssueCertificateMember"
        },
        "OpinionFiscalMember": {
            "ar_pros_TypeOfAnnexAxis": "OpinionFiscalMember"
        },
        "OtherDocumentsMember": {
            "ar_pros_TypeOfAnnexAxis": "OtherDocumentsMember"
        }
    },
    "PlantillasContextos": {
        "ar_pros_FinancialStatementsMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "FinancialStatementsMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_OpinionsOfAuditCommitteeAndCorporatePracticesMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "OpinionsOfAuditCommitteeAndCorporatePracticesMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_CommissionerReportMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "CommissionerReportMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_LegalOpinionMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "LegalOpinionMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_TitleMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "TitleMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_RatingOnCreditRiskMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "RatingOnCreditRiskMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_GuaranteesOrGuarantorsMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "GuaranteesOrGuarantorsMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_TrustContractMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "TrustContractMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_IssueCertificateMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "IssueCertificateMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_OpinionFiscalMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "OpinionFiscalMember",
            "ContieneInformacionDimensional": true
        },
        "ar_pros_OtherDocumentsMember": {
            "Periodo": {
                "VariableFechaInstante": "fecha_2014_12_31",
                "Tipo": 1
            },
            "NombreGrupoDimensionesIniciales": "OtherDocumentsMember",
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
                  "EspacioNombres": "medida_http___www_xbrl_org_2003_iso4217"
              }
          ]
      }
  }
};

}