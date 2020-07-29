/**
 * Definici�n JSON con la configuraci�n base de plantillas de contextos y dimensiones para el manejo de los hipercubos del rol #rolUri.
 * 
 * @author AbaxXBRL Template Generator
 * @version 1.0
 */
module abaxXBRL.hipercubos.config {

    export var http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_422000_N_D1_ar_pros_SubcommitteesTable = {
        "FiltroCargaInicial": {
            "IdConcepto": [
                "ar_pros_SubcommitteesIntegrationOfTheSubcommitteesItems",
                "ar_pros_SubcommitteesNames",
                "ar_pros_SubcommitteesLastName",
                "ar_pros_SubcommitteesMothersLastName",
                "ar_pros_SubcommitteesTypeOfSubcommitteeToWhichItBelongs",
                "ar_pros_SubcommitteesDesignationSynopsis",
                "ar_pros_SubcommitteesAppointmentDate",
                "ar_pros_SubcommitteesTypeOfAssemblyIfApplicable",
                "ar_pros_SubcommitteesPeriodForWhichTheyWereElected",
                "ar_pros_SubcommitteesGender",
                "ar_pros_SubcommitteesAdditionalInformation"
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
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesSequenceAxis"
                    },
                    {
                        "Explicita": true,
                        "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesTypeOfSubcommitteesAxis"
                    }
                ]
            ]
        },
        "TemplatesDimensiones": {
            "ar_pros_SubcommitteesSequenceAxis": {
                "PrefijoValor": "<ar_pros:SubcommitteesSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">",
                "SubfijoValor": "</ar_pros:SubcommitteesSequenceDomain>",
                "EtiquetaNuevoElemento": "1",
                "Explicita": false,
                "IdDimension": "ar_pros_SubcommitteesSequenceAxis",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesSequenceAxis"
            },
            "ar_pros_SubcommitteesTypeOfSubcommitteesAxis": {
                "PrefijoValor": "http:",
                "SubfijoValor": "",
                "EtiquetaNuevoElemento": "//www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesIndependentMember",
                "Explicita": true,
                "IdDimension": "ar_pros_SubcommitteesTypeOfSubcommitteesAxis",
                "IdItemMiembro": "ar_pros_SubcommitteesIndependentMember",
                "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesTypeOfSubcommitteesAxis",
                "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesIndependentMember"
            }
        },
        "MiembrosDimensiones": {
            "ar_pros_SubcommitteesTypeOfSubcommitteesAxis": {
                "ar_pros_SubcommitteesIndependentMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SubcommitteesTypeOfSubcommitteesAxis",
                    "IdItemMiembro": "ar_pros_SubcommitteesIndependentMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesTypeOfSubcommitteesAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesIndependentMember"
                },
                "ar_pros_SubcommitteesNotIndependentMember": {
                    "Explicita": true,
                    "IdDimension": "ar_pros_SubcommitteesTypeOfSubcommitteesAxis",
                    "IdItemMiembro": "ar_pros_SubcommitteesNotIndependentMember",
                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesTypeOfSubcommitteesAxis",
                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SubcommitteesNotIndependentMember"
                }
            }
        },
        "GruposDimensionesMiembro": {
            "ar_pros_SubcommitteesIndependentMember": {
                "ar_pros_SubcommitteesTypeOfSubcommitteesAxis": "ar_pros_SubcommitteesIndependentMember"
            },
            "ar_pros_SubcommitteesNotIndependentMember": {
                "ar_pros_SubcommitteesTypeOfSubcommitteesAxis": "ar_pros_SubcommitteesNotIndependentMember"
            }
        },
        "PlantillasContextos": {
            "ar_pros_SubcommitteesIndependentMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "ar_pros_SubcommitteesIndependentMember",
                "ContieneInformacionDimensional": true
            },
            "ar_pros_SubcommitteesNotIndependentMember": {
                "Periodo": {
                    "VariableFechaInstante": "fecha_2014_12_31",
                    "Tipo": 1
                },
                "NombreGrupoDimensionesIniciales": "ar_pros_SubcommitteesNotIndependentMember",
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