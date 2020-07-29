/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

    export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_433014_D_ar_pros_FinancialInformationToReportTable = {
        "FiltroCargaInicial": {
            "IdConcepto": [
                "ar_pros_FinancialInformationToReportStartDate",
                "ar_pros_FinancialInformationToReportEndtDate",
                "ifrs-full_Revenue",
                "ifrs-full_GrossProfit",
                "ifrs-full_ProfitLossFromOperatingActivities",
                "ifrs-full_ProfitLoss",
                "ifrs-full_BasicEarningsLossPerShare",
                "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment",
                "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa",
                "ifrs-full_Assets",
                "ifrs-full_NoncurrentLiabilities",
                "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal",
                "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal",
                "ifrs_mx-cor_20141205_InventoryTurnoverDecimal",
                "ifrs-full_Equity",
                "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare"
            ],
            "ConjuntosParcialesDimensiones": [
                [
                    {
                        "Explicita": false,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FinancialInformationToReportTypedAxis"
                    }
                ]
            ]
        },
        "TemplatesDimensiones": {
            "ar_pros_FinancialInformationToReportTypedAxis": {
                "PrefijoValor": "<ar_pros:FinancialInformationToReportDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
                "SubfijoValor": "</ar_pros:FinancialInformationToReportDomain>",
                "EtiquetaNuevoElemento": "Periodo",
                "Explicita": false,
                "IdDimension": "ar_pros_FinancialInformationToReportTypedAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FinancialInformationToReportTypedAxis"
            }
        },
        "MiembrosDimensiones": {},
        "GruposDimensionesMiembro": {
            "G0": {},
        },
        "PlantillasContextos": {
            "Instante": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "G0",
                "ContieneInformacionDimensional": true
            },
            "Duracion": {
                "Periodo": {
                    "VariableFechaInicio": "fecha_2014_01_01",
                    "VariableFechaFin": "fecha_2014_12_31",
                    "Tipo": 2
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
            "pure": {
                "Id": "pure",
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