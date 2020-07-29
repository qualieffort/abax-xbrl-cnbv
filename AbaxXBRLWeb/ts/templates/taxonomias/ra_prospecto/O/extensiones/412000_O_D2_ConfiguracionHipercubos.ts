/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

    export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_O_D2_ar_pros_DebtSeriesCharacteristicsTable = {
        "FiltroCargaInicial": {
            "IdConcepto": [
                "ar_pros_DebtSeries",
                "ar_pros_DebtIssuanceDate",
                "ar_pros_DebtSerieSettlementDate",
                "ar_pros_DebtSerieTermOfTheIssuance",
                "ar_pros_DebtInterestPerformanceAndCalculationProcedure",
                "ar_pros_DebtPaymentFrequencyOfInterest",
                "ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal",
                "ar_pros_DebtSubordinationOfTitlesIfAny",
                "ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable",
                "ar_pros_DebtGuaranteeIfAny",
                "ar_pros_DebtTrustIfAny",
                "ar_pros_DebtCommonRepresentative",
                "ar_pros_DebtDepositary",
                "ar_pros_DebtTaxRegime",
                "ar_pros_DebtGuaranteedCapital",
                "ar_pros_DebtUnderlyingAsset",
                "ar_pros_DebtCalculationAgentIfAny",
                "ar_pros_DebtMultiplierIfApplicable",
                "ar_pros_DebtSerieObservations",
                "ar_pros_Rating",
                "ar_pros_RatingMeaning",
                "ar_pros_SecuritiesRatingOherName"
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
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis"
                    },
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis"
                    }
                ]
            ]
        },
        "TemplatesDimensiones": {
            "ar_pros_DebtSeriesTypedAxis": {
                "PrefijoValor": "<ar_pros:SerieDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
                "SubfijoValor": "</ar_pros:SerieDomain>",
                "EtiquetaNuevoElemento": "serie",
                "Explicita": false,
                "IdDimension": "ar_pros_DebtSeriesTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DebtSeriesTypedAxis"
            },
            "ar_pros_SecuritiesRatingAxis": {
                "PrefijoValor": "http:",
                "SubfijoValor": "",
                "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember",
                "Explicita": true,
                "IdDimension": "ar_pros_SecuritiesRatingAxis",
                "IdItemMiembro": "ar_pros_FitchMexicoSADeCVMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember"
            }
        },
        "MiembrosDimensiones": {
            "ar_pros_SecuritiesRatingAxis": {
                "FitchMexicoSADeCVMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                    "IdItemMiembro": "ar_pros_FitchMexicoSADeCVMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember"
                },
                "HRRatingsDeMexicoSADeCVMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                    "IdItemMiembro": "ar_pros_HRRatingsDeMexicoSADeCVMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:HRRatingsDeMexicoSADeCVMember"
                },
                "MoodysDeMexicoSADeCVMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                    "IdItemMiembro": "ar_pros_MoodysDeMexicoSADeCVMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MoodysDeMexicoSADeCVMember"
                },
                "StandardAndPoorsSADeCVMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                    "IdItemMiembro": "ar_pros_StandardAndPoorsSADeCVMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StandardAndPoorsSADeCVMember"
                },
                "VerumCalificadoraDeValoresSAPIDeCVMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                    "IdItemMiembro": "ar_pros_VerumCalificadoraDeValoresSAPIDeCVMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:VerumCalificadoraDeValoresSAPIDeCVMember"
                },
                "AMBestAmericaLatinaSADeCVMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                    "IdItemMiembro": "ar_pros_AMBestAmericaLatinaSADeCVMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AMBestAmericaLatinaSADeCVMember"
                },
                "DBRSRatingsMexicoSAdeCVMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                    "IdItemMiembro": "ar_pros_DBRSRatingsMexicoSAdeCVMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DBRSRatingsMexicoSAdeCVMember"
                },
                "SecuritiesRatingOtherMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                    "IdItemMiembro": "ar_pros_SecuritiesRatingOtherMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingOtherMember"
                }
            }
        },
        "GruposDimensionesMiembro": {
            "G0": {},
            "FitchMexicoSADeCVMember": {
                "ar_pros_SecuritiesRatingAxis": "FitchMexicoSADeCVMember"
            },
            "HRRatingsDeMexicoSADeCVMember": {
                "ar_pros_SecuritiesRatingAxis": "HRRatingsDeMexicoSADeCVMember"
            },
            "MoodysDeMexicoSADeCVMember": {
                "ar_pros_SecuritiesRatingAxis": "MoodysDeMexicoSADeCVMember"
            },
            "StandardAndPoorsSADeCVMember": {
                "ar_pros_SecuritiesRatingAxis": "StandardAndPoorsSADeCVMember"
            },
            "VerumCalificadoraDeValoresSAPIDeCVMember": {
                "ar_pros_SecuritiesRatingAxis": "VerumCalificadoraDeValoresSAPIDeCVMember"
            },
            "AMBestAmericaLatinaSADeCVMember": {
                "ar_pros_SecuritiesRatingAxis": "AMBestAmericaLatinaSADeCVMember"
            },
            "DBRSRatingsMexicoSAdeCVMember": {
                "ar_pros_SecuritiesRatingAxis": "DBRSRatingsMexicoSAdeCVMember"
            },
            "SecuritiesRatingOtherMember": {
                "ar_pros_SecuritiesRatingAxis": "SecuritiesRatingOtherMember"
            }
        },
        "PlantillasContextos": {
            "P0": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "G0",
                "ContieneInformacionDimensional": true
            },
            "FitchMexicoSADeCVMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "FitchMexicoSADeCVMember",
                "ContieneInformacionDimensional": true
            },
            "HRRatingsDeMexicoSADeCVMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "HRRatingsDeMexicoSADeCVMember",
                "ContieneInformacionDimensional": true
            },
            "MoodysDeMexicoSADeCVMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "MoodysDeMexicoSADeCVMember",
                "ContieneInformacionDimensional": true
            },
            "StandardAndPoorsSADeCVMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "StandardAndPoorsSADeCVMember",
                "ContieneInformacionDimensional": true
            },
            "VerumCalificadoraDeValoresSAPIDeCVMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "VerumCalificadoraDeValoresSAPIDeCVMember",
                "ContieneInformacionDimensional": true
            },
            "AMBestAmericaLatinaSADeCVMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "AMBestAmericaLatinaSADeCVMember",
                "ContieneInformacionDimensional": true
            },
            "DBRSRatingsMexicoSAdeCVMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "DBRSRatingsMexicoSAdeCVMember",
                "ContieneInformacionDimensional": true
            },
            "SecuritiesRatingOtherMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "SecuritiesRatingOtherMember",
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