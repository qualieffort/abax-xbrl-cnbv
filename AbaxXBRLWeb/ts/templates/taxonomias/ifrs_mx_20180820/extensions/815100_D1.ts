/**
 * Definicion JSON con la configuracion base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

    export var http___cnbv_gob_mx_role_ifrs_rol_full_ifrs_mx_2016_08_22_815100_D1_ifrs_mx_cor_20160822_BreakdownOfLiabilitiesTable = {
        "FiltroCargaInicial": {
            "IdConcepto": [
                "ifrs_mx-cor_20160822_InstitutionName",
                "ifrs_mx-cor_20160822_NumberOfContract",
                "ifrs_mx-cor_20160822_TypeOfCreditRevolvingPayingAtExpirationConstantPayments",
                "ifrs_mx-cor_20160822_LiabilityCurrency",
                "ifrs_mx-cor_20160822_RefinancingClauseToMaturatyYesNo",
                "ifrs_mx-cor_20160822_PriorityOfPayment",
                "ifrs_mx-cor_20160822_SignatureDateContract",
                "ifrs_mx-cor_20160822_SettlementDate",
                "ifrs_mx-cor_20160822_DeterminationOfTheRateOfReference",
                "ifrs_mx-cor_20160822_InterestRate",
                "ifrs_mx-cor_20160822_DescriptionOfWarrantyOrSignificantFeatures",
                "ifrs_mx-cor_20160822_InitialCreditLine",
                "ifrs_mx-cor_20160822_OutstandingBalance",
                "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
                "ifrs_mx-cor_20160822_PercentageOfTheTotalDebt",
                "ifrs_mx-cor_20160822_MonthsOfDelaysPrincipalOrInterest",
                "ifrs_mx-cor_20160822_IsinAndOrTicker",
                "ifrs_mx-cor_20160822_ListedMexicoOrForeign",
                "ifrs_mx-cor_20160822_ScheduleOfAmortization",
                "ifrs_mx-cor_20160822_IsReferredAPlanOfRefinancingAtExpiration",
                "ifrs_mx-cor_20160822_InitialAmountOfTheIssuance",
                "ifrs_mx-cor_20160822_LiabilityCreditor",
                "ifrs_mx-cor_20160822_LiabilityConcept",
                "ifrs_mx-cor_20160822_PaymentScheme",
                "ifrs_mx-cor_20160822_TotalInitialCreditLineAndInitialAmountOfTheIssuance",
                "ifrs_mx-cor_20160822_OutstandingBalanceDetail"
    ],
    "Periodo": [
      {
        "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      }
    ],
    "ClaveEntidad": [],
    "ConjuntosParcialesDimensiones": [
      [
        {
          "Explicita": false,
          "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:LiabilitiesSequenceTypedAxis"
        },
        {
          "Explicita": true,
          "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis"
        },

        ],
      [
          {
              "Explicita": false,
              "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:LiabilitiesSequenceTypedAxis"
          },
          {
              "Explicita": true,
              "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis"
              
          },
          {
              "Explicita": true,
              "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis"
          }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ifrs_mx-cor_20160822_LiabilitiesSequenceTypedAxis": {
      "PrefijoValor": "<ifrs_mx-cor_20160822:LiabilitiesSequenceDomain xmlns:ifrs_mx-cor_20160822=\"http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22\">",
      "SubfijoValor": "</ifrs_mx-cor_20160822:LiabilitiesSequenceDomain>",
      "EtiquetaNuevoElemento": "1",
      "Explicita": false,
      "IdDimension": "ifrs_mx-cor_20160822_LiabilitiesSequenceTypedAxis",
      "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:LiabilitiesSequenceTypedAxis"
    },
    "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": {
      "PrefijoValor": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:",
      "SubfijoValor": "",
      "EtiquetaNuevoElemento": "BankingMember",
      "Explicita": true,
      "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
      "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember",
      "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
      "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember"
    },
    "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": {
        "PrefijoValor": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:",
        "SubfijoValor": "",
        "EtiquetaNuevoElemento": "ZeroToSixMonthsMember",
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
    }
  },
  "MiembrosDimensiones": {
    "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": {
      "BankingMember": {
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_BankingMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:BankingMember"
      },
      "SotckMarketMember": {
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_SotckMarketMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SotckMarketMember"
      },
      "PrivatePlacementsMember": {
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_PrivatePlacementsMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:PrivatePlacementsMember"
      },
      "OtherCurrentAndNonCurrentLiabilitiesWithCostMember": {
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
      },
      "TotalBankingMember": {
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember"
      },
      "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember": {
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
      },
      "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember": {
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
      },
      "GrandTotalLiabilitiesMember": {
        "Explicita": true,
        "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
        "IdItemMiembro": "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember",
        "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
        "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:GrandTotalLiabilitiesMember"
      }
      },


    "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": {
        "ZeroToSixMonthsMember": {
            "Explicita": true,
            "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
            "IdItemMiembro": "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ZeroToSixMonthsMember"
        },
        "SevenToTwelveMonthsMember": {
            "Explicita": true,
            "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
            "IdItemMiembro": "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:SevenToTwelveMonthsMember"
        },
        "ThirteenToEightTeenMonthsMember": {
            "Explicita": true,
            "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
            "IdItemMiembro": "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirteenToEightTeenMonthsMember"
        },
        "NineTeenToThirtySixMonthsMember": {
            "Explicita": true,
            "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
            "IdItemMiembro": "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:NineTeenToThirtySixMonthsMember"
        },
        "ThirtySevenMonthsOrMoreMember": {
            "Explicita": true,
            "IdDimension": "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis",
            "IdItemMiembro": "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember",
            "QNameDimension": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TimeIntervalBreakdownOfLiabilitiesAxis",
            "QNameItemMiembro": "http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:ThirtySevenMonthsOrMoreMember"
        }
    }


  },
  "GruposDimensionesMiembro": {
    "BankingMember": {
      "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "BankingMember"
    },
    "SotckMarketMember": {
      "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "SotckMarketMember"
    },
    "PrivatePlacementsMember": {
      "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "PrivatePlacementsMember"
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember": {
      "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
    },
    "TotalBankingMember": {
      "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalBankingMember"
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember": {
      "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember": {
      "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
    },
    "GrandTotalLiabilitiesMember": {
      "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "GrandTotalLiabilitiesMember"
    },
    "BankingMember_ZeroToSixMonthsMember": {
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "BankingMember",
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ZeroToSixMonthsMember"
    },
    "BankingMember_SevenToTwelveMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "SevenToTwelveMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "BankingMember"
    },
    "BankingMember_ThirteenToEightTeenMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirteenToEightTeenMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "BankingMember"
    },
    "BankingMember_NineTeenToThirtySixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "NineTeenToThirtySixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "BankingMember"
    },
    "BankingMember_ThirtySevenMonthsOrMoreMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirtySevenMonthsOrMoreMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "BankingMember"
    },
    "TotalBankingMember_ZeroToSixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ZeroToSixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalBankingMember"
    },
    "TotalBankingMember_SevenToTwelveMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "SevenToTwelveMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalBankingMember"
    },
    "TotalBankingMember_ThirteenToEightTeenMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirteenToEightTeenMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalBankingMember"
    },
    "TotalBankingMember_NineTeenToThirtySixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "NineTeenToThirtySixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalBankingMember"
    },
    "TotalBankingMember_ThirtySevenMonthsOrMoreMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirtySevenMonthsOrMoreMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalBankingMember"
    },
    "SotckMarketMember_ZeroToSixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ZeroToSixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "SotckMarketMember"
    },
    "SotckMarketMember_SevenToTwelveMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "SevenToTwelveMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "SotckMarketMember"
    },
    "SotckMarketMember_ThirteenToEightTeenMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirteenToEightTeenMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "SotckMarketMember"
    },
    "SotckMarketMember_NineTeenToThirtySixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "NineTeenToThirtySixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "SotckMarketMember"
    },
    "SotckMarketMember_ThirtySevenMonthsOrMoreMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirtySevenMonthsOrMoreMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "SotckMarketMember"
    },
    "PrivatePlacementsMember_ZeroToSixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ZeroToSixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "PrivatePlacementsMember"
    },
    "PrivatePlacementsMember_SevenToTwelveMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "SevenToTwelveMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "PrivatePlacementsMember"
    },
    "PrivatePlacementsMember_ThirteenToEightTeenMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirteenToEightTeenMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "PrivatePlacementsMember"
    },
    "PrivatePlacementsMember_NineTeenToThirtySixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "NineTeenToThirtySixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "PrivatePlacementsMember"
    },
    "PrivatePlacementsMember_ThirtySevenMonthsOrMoreMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirtySevenMonthsOrMoreMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "PrivatePlacementsMember"
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ZeroToSixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ZeroToSixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_SevenToTwelveMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "SevenToTwelveMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ThirteenToEightTeenMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirteenToEightTeenMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_NineTeenToThirtySixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "NineTeenToThirtySixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ThirtySevenMonthsOrMoreMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirtySevenMonthsOrMoreMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember"
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ZeroToSixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ZeroToSixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_SevenToTwelveMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "SevenToTwelveMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ThirteenToEightTeenMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirteenToEightTeenMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_NineTeenToThirtySixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "NineTeenToThirtySixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ThirtySevenMonthsOrMoreMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirtySevenMonthsOrMoreMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ZeroToSixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ZeroToSixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_SevenToTwelveMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "SevenToTwelveMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ThirteenToEightTeenMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirteenToEightTeenMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_NineTeenToThirtySixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "NineTeenToThirtySixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ThirtySevenMonthsOrMoreMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirtySevenMonthsOrMoreMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
    },
    "GrandTotalLiabilitiesMember_ZeroToSixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ZeroToSixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "GrandTotalLiabilitiesMember"
    },
    "GrandTotalLiabilitiesMember_SevenToTwelveMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "SevenToTwelveMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "GrandTotalLiabilitiesMember"
    },
    "GrandTotalLiabilitiesMember_ThirteenToEightTeenMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirteenToEightTeenMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "GrandTotalLiabilitiesMember"
    },
    "GrandTotalLiabilitiesMember_NineTeenToThirtySixMonthsMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "NineTeenToThirtySixMonthsMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "GrandTotalLiabilitiesMember"
    },
    "GrandTotalLiabilitiesMember_ThirtySevenMonthsOrMoreMember": {
        "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis": "ThirtySevenMonthsOrMoreMember",
        "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis": "GrandTotalLiabilitiesMember"
    }
  },
  "PlantillasContextos": {
    "BankingMember": {
      "Periodo": {
          "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "BankingMember",
      "ContieneInformacionDimensional": true
    },
    "SotckMarketMember": {
      "Periodo": {
          "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "SotckMarketMember",
      "ContieneInformacionDimensional": true
    },
    "PrivatePlacementsMember": {
      "Periodo": {
          "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "PrivatePlacementsMember",
      "ContieneInformacionDimensional": true
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember": {
      "Periodo": {
          "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
      "ContieneInformacionDimensional": true
    },
    "TotalBankingMember": {
      "Periodo": {
          "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "TotalBankingMember",
      "ContieneInformacionDimensional": true
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember": {
      "Periodo": {
          "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
      "ContieneInformacionDimensional": true
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember": {
      "Periodo": {
          "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
      "ContieneInformacionDimensional": true
    },
    "GrandTotalLiabilitiesMember": {
      "Periodo": {
          "VariableFechaInstante": "fecha_2015_09_30",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "GrandTotalLiabilitiesMember",
      "ContieneInformacionDimensional": true
    },



    "BankingMember_ZeroToSixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "BankingMember_ZeroToSixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "BankingMember_SevenToTwelveMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "BankingMember_SevenToTwelveMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "BankingMember_ThirteenToEightTeenMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "BankingMember_ThirteenToEightTeenMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "BankingMember_NineTeenToThirtySixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "BankingMember_NineTeenToThirtySixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "BankingMember_ThirtySevenMonthsOrMoreMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "BankingMember_ThirtySevenMonthsOrMoreMember",
        "ContieneInformacionDimensional": true
    },
    "TotalBankingMember_ZeroToSixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalBankingMember_ZeroToSixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalBankingMember_SevenToTwelveMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalBankingMember_SevenToTwelveMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalBankingMember_ThirteenToEightTeenMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalBankingMember_ThirteenToEightTeenMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalBankingMember_NineTeenToThirtySixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalBankingMember_NineTeenToThirtySixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalBankingMember_ThirtySevenMonthsOrMoreMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalBankingMember_ThirtySevenMonthsOrMoreMember",
        "ContieneInformacionDimensional": true
    },
    "SotckMarketMember_ZeroToSixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "SotckMarketMember_ZeroToSixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "SotckMarketMember_SevenToTwelveMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "SotckMarketMember_SevenToTwelveMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "SotckMarketMember_ThirteenToEightTeenMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "SotckMarketMember_ThirteenToEightTeenMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "SotckMarketMember_NineTeenToThirtySixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "SotckMarketMember_NineTeenToThirtySixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "SotckMarketMember_ThirtySevenMonthsOrMoreMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "SotckMarketMember_ThirtySevenMonthsOrMoreMember",
        "ContieneInformacionDimensional": true
    },
    "PrivatePlacementsMember_ZeroToSixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "PrivatePlacementsMember_ZeroToSixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "PrivatePlacementsMember_SevenToTwelveMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "PrivatePlacementsMember_SevenToTwelveMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "PrivatePlacementsMember_ThirteenToEightTeenMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "PrivatePlacementsMember_ThirteenToEightTeenMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "PrivatePlacementsMember_NineTeenToThirtySixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "PrivatePlacementsMember_NineTeenToThirtySixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "PrivatePlacementsMember_ThirtySevenMonthsOrMoreMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "PrivatePlacementsMember_ThirtySevenMonthsOrMoreMember",
        "ContieneInformacionDimensional": true
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ZeroToSixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ZeroToSixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_SevenToTwelveMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_SevenToTwelveMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ThirteenToEightTeenMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ThirteenToEightTeenMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_NineTeenToThirtySixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_NineTeenToThirtySixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ThirtySevenMonthsOrMoreMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "OtherCurrentAndNonCurrentLiabilitiesWithCostMember_ThirtySevenMonthsOrMoreMember",
        "ContieneInformacionDimensional": true
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ZeroToSixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ZeroToSixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_SevenToTwelveMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_SevenToTwelveMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ThirteenToEightTeenMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ThirteenToEightTeenMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_NineTeenToThirtySixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_NineTeenToThirtySixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ThirtySevenMonthsOrMoreMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember_ThirtySevenMonthsOrMoreMember",
        "ContieneInformacionDimensional": true
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ZeroToSixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ZeroToSixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_SevenToTwelveMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_SevenToTwelveMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ThirteenToEightTeenMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ThirteenToEightTeenMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_NineTeenToThirtySixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_NineTeenToThirtySixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ThirtySevenMonthsOrMoreMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember_ThirtySevenMonthsOrMoreMember",
        "ContieneInformacionDimensional": true
    },
    "GrandTotalLiabilitiesMember_ZeroToSixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "GrandTotalLiabilitiesMember_ZeroToSixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "GrandTotalLiabilitiesMember_SevenToTwelveMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "GrandTotalLiabilitiesMember_SevenToTwelveMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "GrandTotalLiabilitiesMember_ThirteenToEightTeenMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "GrandTotalLiabilitiesMember_ThirteenToEightTeenMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "GrandTotalLiabilitiesMember_NineTeenToThirtySixMonthsMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "GrandTotalLiabilitiesMember_NineTeenToThirtySixMonthsMember",
        "ContieneInformacionDimensional": true
    },
    "GrandTotalLiabilitiesMember_ThirtySevenMonthsOrMoreMember": {
        "Periodo": {
            "VariableFechaInstante": "fecha_2015_09_30",
            "Tipo": 1
        },
        "NombreGrupoDimensionesIniciales": "GrandTotalLiabilitiesMember_ThirtySevenMonthsOrMoreMember",
        "ContieneInformacionDimensional": true
    }
  },
  "Unidades": {
      "pure": {
          "Id": "pure",
          "Tipo": 1,
          "Medidas": [
              {
                  "Nombre": "medida_pure",
                  "EspacioNombres": "medida_http___www_xbrl_org_2003_instance"
              }
          ]
      },
    "mxn": {
      "Id": "mxn",
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