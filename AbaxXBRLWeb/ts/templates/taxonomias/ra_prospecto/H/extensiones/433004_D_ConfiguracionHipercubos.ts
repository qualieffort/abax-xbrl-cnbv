/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433004_D_ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedTableH = {
  "FiltroCargaInicial": {
    "IdConcepto": [
        "ar_pros_EquitySerie",
        "ar_pros_EquitySerieTotalAmountProgramRegistration",
        "ar_pros_EquitySerieAdditionalSecurities",
        "ar_pros_Class",
        "ar_pros_EquitySerieDescription",
        "ar_pros_Type",
        "ar_pros_TickerOfTheOriginStockMarket",
        "ar_pros_EquitySerieOfferTypAbstract",
        "ar_pros_EquitySerieOfferTypePrimaryNational",
        "ar_pros_EquitySerieOfferTypeSecondaryNational",
        "ar_pros_EquitySerieOfferTypeMixNational",
        "ar_pros_EquitySerieOfferTypePrimaryInternational",
        "ar_pros_EquitySerieOfferTypeSecondaryInternational",
        "ar_pros_EquitySerieOfferTypeMixInternational",
        "ar_pros_EquitySerieOfferTypePrimaryGlobal",
        "ar_pros_EquitySerieOfferTypeSecondaryGlobal",
        "ar_pros_EquitySerieOfferTypeMixGlobal",
        "ar_pros_EquitySerieOfferTypeToBeDefined",
        "ar_pros_EquityTypeOfInstrument",
        "ar_pros_TypeOfOperation",
        "ar_pros_EquitySerieIssuanceUnderArt13OfTheCUE",
        "ar_pros_EquitySerieLimitedPublicOffering",
        "ar_pros_EquitySerieTotalAmountOfTheOffer",
        "ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
        "ar_pros_EquitySerieMexicoPrimaryAmount",
        "ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount",
        "ar_pros_EquitySerieMexicoSecondaryAmount",
        "ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount",
        "ar_pros_EquitySerieAbroadPrimaryAmount",
        "ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount",
        "ar_pros_EquitySerieForeignSecondaryAmount",
        "ar_pros_EquitySerieForeignOverallotmentSecondaryAmount",
        "ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade",
        "ar_pros_EquitySerieAmountProgramRegistrationInUDIS",
        "ar_pros_EquitySerieAmountOfTheIssueInUSD",
        "ar_pros_EquitySerieAmountOfTheIssueInFOREIGNCURRENCY",
        "ar_pros_EquitySerieObservationsOnTheAmountOfTheOffer",
        "ar_pros_EquitySerieExchangeRateUDIValue",
        "ar_pros_EquitySerieNominalValueString",
        "ar_pros_EquitySerieNominalValueMonetary",
        "ar_pros_EquitySeriePlacementPrice",
        "ar_pros_EquitySerieObservationsOnNominalValuePlacementPrice",
        "ar_pros_EquitySerieNumberOfStocks",
        "ar_pros_EquitySerieNumberOfStocksOfferedInMexico",
        "ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign",
        "ar_pros_EquitySerieMexicoPrimaryNumberOfStocks",
        "ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks",
        "ar_pros_EquitySerieMexicoSecondaryNumberOfStocks",
        "ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks",
        "ar_pros_EquitySerieForeignPrimaryNumberOfStocks",
        "ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks",
        "ar_pros_EquitySerieForeignSecondaryNumberOfStocks",
        "ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks",
        "ar_pros_EquitySerieIssueNumberUnderAProgram",
        "ar_pros_EquitySeriesIssuanceDate",
        "ar_pros_EquitySerieDateOfPublicationOfOfferNotice",
        "ar_pros_EquitySeriePeriodOrDateOfTheOffer",
        "ar_pros_EquitySerieClosingDateBookOrAuction",
        "ar_pros_EquitySerieDateOfPublicationOfTheNoticeForInformationalPurposes",
        "ar_pros_EquitySerieDateOfRegisterInTheStockExchange",
        "ar_pros_EquitySerieSettlementDate",
        "ar_pros_EquitySeriesPositioningMechanism",
        "ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable",
        "ar_pros_EquitySerieObservations",
        "ar_pros_EquitySerieInTheCaseOfAuctionSecuritiesAbstract",
        "ar_pros_EquitySerieAmountOfPositionsPresented",
        "ar_pros_EquitySerieNumberOfPositionsPresented",
        "ar_pros_EquitySerieNumberOfAssignedPositions",
        "ar_pros_EquitySerieSecuritiesTotalDemand",
        "ar_pros_EquitySerieRateOrMinimumAndMaximumPrice",
        "ar_pros_EquitySerieAssignedRateOrPrice",
        "ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuerBeforeTheOffer",
        "ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuerAfterTheOffer",
        "ar_pros_NumberOfSecuritiesOfThePrimaryPortion",
        "ar_pros_NumberOfSecuritiesOfTheSecondaryPortion",
        "ar_pros_EquitySerieOperationWithOverAllocation",
        "ar_pros_NumberOfSecuritiesThatWillBeAllocatedToOverallotment",
        "ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment",
        "ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer",
        "ar_pros_WhereAppropriatePercentageIncludingOverAllotmentOptionAfterTheOffer"
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
          "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis"
        }
      ]
    ]
  },
  "TemplatesDimensiones": {
    "ar_pros_SeriesTypedAxis": {
      "PrefijoValor": "<ar_pros:SerieDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
      "SubfijoValor": "</ar_pros:SerieDomain>",
      "EtiquetaNuevoElemento": "serie",
      "Explicita": false,
      "IdDimension": "ar_pros_SeriesTypedAxis",
      "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SeriesTypedAxis"
    }
  },
  "MiembrosDimensiones": {},
  "GruposDimensionesMiembro": {
    "G0": {}
  },
  "PlantillasContextos": {
    "P0": {
      "Periodo": {
        "VariableFechaInstante": "fecha_2014_12_31",
        "Tipo": 1
      },
      "NombreGrupoDimensionesIniciales": "G0",
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
        },
        "PURE": {
            "Id": "PURE",
            "Tipo": 1,
            "Medidas": [
                {
                    "Nombre": "medida_pure",
                    "EspacioNombres": "medida_http___www_xbrl_org_2003_instance"
                }
            ],
            "MedidasDenominador": [],
            "MedidasNumerador": []
        }
    }
};

}