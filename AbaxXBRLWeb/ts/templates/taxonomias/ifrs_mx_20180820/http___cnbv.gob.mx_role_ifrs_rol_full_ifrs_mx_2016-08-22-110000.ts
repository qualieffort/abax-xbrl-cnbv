///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ias_1_2014-03-05_role-110000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_rol_full_ifrs_mx_2016_08_22_110000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_rol_full_ifrs_mx_2016_08_22_110000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'formula6': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula6',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable1 == "ICS" and variable2 == "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-2018-08-20/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd") or (variable1 == "CP" and variable2 == "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-2018-08-20/full_ifrs_mc_mx_cp_entry_point_2014-12-05.xsd") or ( variable1 == "FIBRAS" and variable2 == "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-2018-08-20/full_ifrs_mc_mx_fibras_entry_point_2014-12-05.xsd") or (variable1 == "SAPIB" and variable2 == "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-2018-08-20/full_ifrs_mc_mx_sapib_entry_point_2014-12-05.xsd") or (variable2 == "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-2018-08-20/full_ifrs_mc_mx_all_entry_point_2014-12-05.xsd") or ( variable1 == "FIBRAS" and variable2 == "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-2018-08-20/full_ifrs_mc_mx_fibras_entry_point_2016-08-22.xsd") ',
                        MensajeExito: 'El valor del {variable1} coincide con el punto de entrada de la taxonomía utilizado para crear el documento instancia.',
                        MensajeError: 'El valor del {variable1} no es apropiado para el punto de entrada de la taxonomía utilizado para crear el documento instancia.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TipoDeEmisora',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                PuedeCrearse: false,
                                EsSchemaRef: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    ),
                //Se integran formulas de Value Assertion - ID : VA_110000_01
                'formula8': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula8',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    )
                //Se integran formulas de Value Assertion - ID : VA_110000_02
                , 'formula9': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula9',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_PeriodCoveredByFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    )

            //Se integran formulas de Value Assertion - ID : VA_110000_03
                , 'formula10': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula10',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DescriptionOfPresentationCurrency',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    )
            //Se integran formulas de Value Assertion - ID : VA_110000_04
                , 'formula11': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula11',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'Se tiene seleccionado valor en el hecho {variable1}',
                        MensajeError: 'No se tiene seleccionado valor en el hecho {variable1}',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TipoDeEmisora',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    )
            //Se integran formulas de Value Assertion - ID : VA_110000_05
                , 'formula12': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula12',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'Se tiene seleccionado valor en el hecho {variable1}',
                        MensajeError: 'No se tiene seleccionado valor en el hecho {variable1}',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_Consolidado',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    )
            //Se integran formulas de Value Assertion - ID : VA_110000_06
                , 'formula13': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula13',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'Se tiene seleccionado valor en el hecho {variable1}',
                        MensajeError: 'No se tiene seleccionado valor en el hecho {variable1}',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_NumeroDeTrimestre',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    )
            //Se integran formulas de Value Assertion - ID : VA_110000_08
                , 'formula14': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula14',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                            , 'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_NumeroDeTrimestre',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }
                    )

            //Se integran formulas de Value Assertion - ID : VA_110000_09
                , 'formula15': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula15',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_NombreDelSocioQueFirmaLaOpinionBloqueDeTexto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                            , 'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_NumeroDeTrimestre',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }
                    )
            //Se integran formulas de Value Assertion - ID : VA_110000_10
                , 'formula16': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula16',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TipoDeOpinionALosEstadosFinancierosBloqueDeTexto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                            , 'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_NumeroDeTrimestre',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }
                    )

            //Se integran formulas de Value Assertion - ID : VA_110000_11
                , 'formula17': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula17',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',
                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_FechaDeOpinionSobreLosEstadosFinancierosBloqueDeTexto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                            , 'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_NumeroDeTrimestre',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }
                    )

            //Se integran formulas de Value Assertion - ID : VA_110000_12
                , 'formula18': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula18',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',
                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_FechaDeAsambleaEnQueSeAprobaronLosEstadosFinancierosBloqueDeTexto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                            , 'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_NumeroDeTrimestre',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }
                    )

            //Se integran formulas de Value Assertion - ID : VA_110000_210000_01
                , 'formula19': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula19',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2=="false" and bignumber(variable1) == 0) or (variable2=="true" and abs(bignumber(variable1)) >= 0)',
                         
                        MensajeExito: 'El hecho del {variable1} esta reportado para consolidado de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado para consolidado de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_NoncontrollingInterests',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                            , 'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_Consolidado',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }
                    )

                , 'formulaAdvertenciaGradoRedondeo': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formulaAdvertenciaGradoRedondeo',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        EsAdvertencia:true,
                        MensajeExito: 'El hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'El hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_LevelOfRoundingUsedInFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    )

                

            };

            this.ContextosPlantillaPorId = {
                "trimestre_actual": {
                    "Id": "trimestre_actual",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2015_07_01",
                        "FechaFin": "#fecha_2015_09_30",
                        "FechaInstante": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": false,
                    "Escenario": null,
                    "ValoresDimension": []
                },
                "acumulado_ejercicio_actual": {
                    "Id": "acumulado_ejercicio_actual",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2015_01_01",
                        "FechaFin": "#fecha_2015_09_30",
                        "FechaInstante": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": false,
                    "Escenario": null,
                    "ValoresDimension": []
                },
                "trimestre_ejercicio_anterior": {
                    "Id": "trimestre_ejercicio_anterior",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2014_07_01",
                        "FechaFin": "#fecha_2014_09_30",
                        "FechaInstante": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": false,
                    "Escenario": null,
                    "ValoresDimension": []
                },
                "acumulado_ejercicio_anterior": {
                    "Id": "acumulado_ejercicio_anterior",
                    "Periodo": {
                        "Tipo": 2,
                        "FechaInicio": "#fecha_2014_01_01",
                        "FechaFin": "#fecha_2014_09_30",
                        "FechaInstante": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": false,
                    "Escenario": null,
                    "ValoresDimension": []
                }
            };

            this.UnidadesPlantillaPorId = {};

            this.HechosPlantillaPorId = {

  "A5f309eb8-4fd0-43d6-afcc-001c3cb9edde": {
    "Id": "A5f309eb8-4fd0-43d6-afcc-001c3cb9edde",
    "IdConcepto": "ifrs-full_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
 
  "A6f48e7ee-3874-460c-91db-39b37c5c65c1": {
    "Id": "A6f48e7ee-3874-460c-91db-39b37c5c65c1",
    "IdConcepto": "ifrs-full_NameOfReportingEntityOrOtherMeansOfIdentification",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#nombreEntidad"
                },

  "A4aa4911c-1057-4b09-a76d-b8d4da0882ca": {
    "Id": "A4aa4911c-1057-4b09-a76d-b8d4da0882ca",
    "IdConcepto": "ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#nombreEntidad"
  },
  "Aee80951d-408c-4afb-999d-c2ae7bddcd5b": {
    "Id": "Aee80951d-408c-4afb-999d-c2ae7bddcd5b",
    "IdConcepto": "ifrs-full_ExplanationOfChangeInNameOfReportingEntityOrOtherMeansOfIdentificationFromEndOfPrecedingReportingPeriod",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Af0c18079-1032-4a39-b6da-2aee7134afc5": {
    "Id": "Af0c18079-1032-4a39-b6da-2aee7134afc5",
    "IdConcepto": "ifrs-full_DescriptionOfNatureOfFinancialStatements",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A83231101-63ee-4e7a-9311-9758c6cdf2bf": {
    "Id": "A83231101-63ee-4e7a-9311-9758c6cdf2bf",
    "IdConcepto": "ifrs-full_DateOfEndOfReportingPeriod2013",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#fecha_2015_09_30"
  },
  "Ae56bc760-ce16-4cd3-bec2-051765403951": {
    "Id": "Ae56bc760-ce16-4cd3-bec2-051765403951",
    "IdConcepto": "ifrs-full_PeriodCoveredByFinancialStatements",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#fecha_2015_07_01 - #fecha_2015_09_30"
  },
  "A38406107-5cf4-45bc-ac0c-7614c84b85d9": {
    "Id": "A38406107-5cf4-45bc-ac0c-7614c84b85d9",
    "IdConcepto": "ifrs-full_DescriptionOfPresentationCurrency",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#medida_MXN"
  },
  "A146d9368-3c33-45b2-befb-912e0c598fad": {
    "Id": "A146d9368-3c33-45b2-befb-912e0c598fad",
    "IdConcepto": "ifrs-full_LevelOfRoundingUsedInFinancialStatements",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A948dfb7f-2dfe-42c7-8fed-49d80dba5822": {
    "Id": "A948dfb7f-2dfe-42c7-8fed-49d80dba5822",
    "IdConcepto": "ifrs_mx-cor_20141205_TipoDeEmisora",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
      "Valor": "#tipoEmisora"
  },
  "A7903b4eb-7f91-488b-bf1b-250e3c277ec9": {
    "Id": "A7903b4eb-7f91-488b-bf1b-250e3c277ec9",
    "IdConcepto": "ifrs_mx-cor_20141205_Consolidado",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6bb10c09-b490-4fbf-9f49-5cab9d427007": {
    "Id": "A6bb10c09-b490-4fbf-9f49-5cab9d427007",
    "IdConcepto": "ifrs_mx-cor_20141205_NumeroDeTrimestre",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#trimestre"
    },
  "A3044199a-3e49-41b0-99ce-2bd9b75e19f5": {
    "Id": "A3044199a-3e49-41b0-99ce-2bd9b75e19f5",
    "IdConcepto": "ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A3e48bdb5-944f-4672-ba75-be9147973bab": {
    "Id": "A3e48bdb5-944f-4672-ba75-be9147973bab",
    "IdConcepto": "ifrs_mx-cor_20141205_NombreDelSocioQueFirmaLaOpinionBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4797322d-56ed-45aa-9956-816ac8b544d2": {
    "Id": "A4797322d-56ed-45aa-9956-816ac8b544d2",
    "IdConcepto": "ifrs_mx-cor_20141205_TipoDeOpinionALosEstadosFinancierosBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad2938c8d-0043-4c6f-a29e-7c699ec7418d": {
    "Id": "Ad2938c8d-0043-4c6f-a29e-7c699ec7418d",
    "IdConcepto": "ifrs_mx-cor_20141205_FechaDeOpinionSobreLosEstadosFinancierosBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A55834e59-ba5d-455d-99b4-d612660f2213": {
    "Id": "A55834e59-ba5d-455d-99b4-d612660f2213",
    "IdConcepto": "ifrs_mx-cor_20141205_FechaDeAsambleaEnQueSeAprobaronLosEstadosFinancierosBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4f047eed-5ff4-43be-ae19-8c8ceca5f876": {
    "Id": "A4f047eed-5ff4-43be-ae19-8c8ceca5f876",
    "IdConcepto": "ifrs_mx-cor_20141205_SeguimientoDeAnalisisBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  }
};
        }
    }

}