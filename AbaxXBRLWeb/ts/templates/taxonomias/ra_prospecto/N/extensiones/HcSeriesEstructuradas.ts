/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

    export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_N_D4_ar_pros_StructuredSeriesCharacteristicsTable = {
        "FiltroCargaInicial": {
            "IdConcepto": [
                "ar_pros_StructuredSeriesCharacteristicsLineItems",
                "ar_pros_StructuredSeries",
                "ar_pros_StructuredSeriesIssuanceDate",
                "ar_pros_StructuredSeriesSettlementDate",
                "ar_pros_StructuredSeriesTermOfTheIssuance",
                "ar_pros_StructuredSeriesInterestPerformanceAndCalculationProcedure",
                "ar_pros_StructuredSeriesPaymentFrequencyOfInterest",
                "ar_pros_StructuredSeriesLocationAndPaymentOfInterestAndPrincipal",
                "ar_pros_StructuredSeriesSubordinationOfTitlesIfAny",
                "ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable",
                "ar_pros_StructuredSeriesGuaranteeIfAny",
                "ar_pros_StructuredSeriesTrustIfAny",
                "ar_pros_StructuredSeriesCommonRepresentative",
                "ar_pros_StructuredSeriesDepositary",
                "ar_pros_StructuredSeriesTaxRegime",
                "ar_pros_StructuredSeriesObservations"
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
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis"
                    }
                ]
            ]
        },
        "TemplatesDimensiones": {
            "ar_pros_StructuredSeriesTypedAxis": {
                "PrefijoValor": "<ar_pros:SerieDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
                "SubfijoValor": "</ar_pros:SerieDomain>",
                "EtiquetaNuevoElemento": "serie",
                "Explicita": false,
                "IdDimension": "ar_pros_StructuredSeriesTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StructuredSeriesTypedAxis"
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
            }
        }
    };

}