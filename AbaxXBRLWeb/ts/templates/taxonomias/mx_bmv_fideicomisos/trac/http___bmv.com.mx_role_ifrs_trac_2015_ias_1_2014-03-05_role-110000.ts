///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-110000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_110000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_110000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'EA_4D_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_4D_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',


                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_NameServiceProviderExternalAudit',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_trac_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                'EA_4D_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_4D_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_NameOfTheAsociadoSigningOpinion',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_trac_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                'EA_4D_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_4D_3',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_TypeOfOpinionOnTheFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_trac_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                'EA_4D_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_4D_4',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: '(variable2 == "4D" and squeeze(size(variable1)) > 0 ) or (variable2 != "4D" and squeeze(size(variable1)) == 0 )',

                        MensajeExito: 'El hecho del {variable1} esta reportado en el trimestre 4D de lo contrario no se reporta',
                        MensajeError: 'El hecho del {variable1} debe ser reportado en el trimestre 4D de lo contrario no debe ser reportado',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_DateOfOpinionOnTheFinancialStatements',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'mx_trac_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                'VA_110000_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_110000_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_Ticker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_Diferente_Cero_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_Diferente_Cero_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'abs(bignumber(variable1)) > 0',
                        MensajeExito: 'El hecho reportado para el {variable1} tiene un valor diferente de 0.',
                        MensajeError: 'El hecho reportado para el {variable1} debería tener un valor diferente de 0.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_EquityAndLiabilities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                FiltrosDimension:
                                [{
                                    Explicita: true,
                                    QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                    IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                    QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityMember',
                                    IdItemMiembro: 'ifrs-full_EquityMember'
                                }, {
                                        Explicita: true,
                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                        IdItemMiembro: 'ifrs-full_RestatedMember'
                                    }]
                            })
                        }
                    }),
                
                'VA_set_no_vacios_9': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_9',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfDerivativeFinancialInstrumentsExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_8': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_8',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfNotesAndOtherExplanatoryInformationExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_7': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_7',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_NumberOfQuarter',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_6': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_6',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_TrustNumber',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_5': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_5',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_TrusteesAdministratorAvalOrGuarantor',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_4',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

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
                    }),
                'VA_set_no_vacios_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_3',
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
                    }),
                'VA_set_no_vacios_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DateOfEndOfReportingPeriod2013',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mx_trac_HeritageOfTheFund',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_10': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_10',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfSummaryOfSignificantAccountingPoliciesExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }),
                'VA_set_no_vacios_11': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_no_vacios_11',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_DisclosureOfInterimFinancialReportingExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    })




            };

            this.ContextosPlantillaPorId = {
                "Acumulado_AnoActual": {
                    "Id": "Acumulado_AnoActual",
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
                }
            };

            this.UnidadesPlantillaPorId = {};

            this.HechosPlantillaPorId = {
                "A94cec5de-ead2-4484-ba2a-7c2351d5dff9": {
                    "Id": "A94cec5de-ead2-4484-ba2a-7c2351d5dff9",
                    "IdConcepto": "ifrs-full_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ae946c407-a7f2-4659-861a-313e65226b8e": {
                    "Id": "Ae946c407-a7f2-4659-861a-313e65226b8e",
                    "IdConcepto": "ifrs-full_NameOfReportingEntityOrOtherMeansOfIdentification",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ade29eab1-df3f-4940-8a7f-85bf6ece07ae": {
                    "Id": "Ade29eab1-df3f-4940-8a7f-85bf6ece07ae",
                    "IdConcepto": "mx_trac_Ticker",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#nombreEntidad"
                },
                "Aeb9d9c7e-8069-49af-9068-f035138933d5": {
                    "Id": "Aeb9d9c7e-8069-49af-9068-f035138933d5",
                    "IdConcepto": "ifrs-full_ExplanationOfChangeInNameOfReportingEntityOrOtherMeansOfIdentificationFromEndOfPrecedingReportingPeriod",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Aa11a0e8a-c77f-4a66-bbf7-b2af6a30067d": {
                    "Id": "Aa11a0e8a-c77f-4a66-bbf7-b2af6a30067d",
                    "IdConcepto": "ifrs-full_DescriptionOfNatureOfFinancialStatements",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ac6e58f88-83e7-4b03-b15b-61bec024489c": {
                    "Id": "Ac6e58f88-83e7-4b03-b15b-61bec024489c",
                    "IdConcepto": "ifrs-full_DateOfEndOfReportingPeriod2013",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha_2015_09_30"
                },
                "A00f8df6e-6332-45ed-8298-58332d38997b": {
                    "Id": "A00f8df6e-6332-45ed-8298-58332d38997b",
                    "IdConcepto": "ifrs-full_PeriodCoveredByFinancialStatements",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#fecha_2015_07_01 - #fecha_2015_09_30"
                },
                "Ae9d88d83-28cd-4b44-b5ae-3d6155576f0c": {
                    "Id": "Ae9d88d83-28cd-4b44-b5ae-3d6155576f0c",
                    "IdConcepto": "ifrs-full_DescriptionOfPresentationCurrency",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#medida_MXN"
                },
                "Aa308df78-55a0-4a67-a770-26b47ab9f6de": {
                    "Id": "Aa308df78-55a0-4a67-a770-26b47ab9f6de",
                    "IdConcepto": "ifrs-full_LevelOfRoundingUsedInFinancialStatements",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A29275a9e-74d0-4a93-a744-4d76a5465428": {
                    "Id": "A29275a9e-74d0-4a93-a744-4d76a5465428",
                    "IdConcepto": "mx_trac_TrusteesAdministratorAvalOrGuarantor",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Af15ad9e4-28e1-4286-9c87-24829a58cb12": {
                    "Id": "Af15ad9e4-28e1-4286-9c87-24829a58cb12",
                    "IdConcepto": "mx_trac_TrustNumber",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#numeroFideicomiso"
                },
                "Ac13d8e88-1ea3-4063-a4e5-39fea527cba0": {
                    "Id": "Ac13d8e88-1ea3-4063-a4e5-39fea527cba0",
                    "IdConcepto": "mx_trac_NumberOfQuarter",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#trimestre"
                },
                "A2b3e676a-99c2-4091-ba26-eda00077c441": {
                    "Id": "A2b3e676a-99c2-4091-ba26-eda00077c441",
                    "IdConcepto": "mx_trac_NameServiceProviderExternalAudit",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A1bc2adf2-3773-4729-a8ad-b92bf8fcab11": {
                    "Id": "A1bc2adf2-3773-4729-a8ad-b92bf8fcab11",
                    "IdConcepto": "mx_trac_NameOfTheAsociadoSigningOpinion",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A85e95925-2fc2-4cb2-86c6-2d87d9011be6": {
                    "Id": "A85e95925-2fc2-4cb2-86c6-2d87d9011be6",
                    "IdConcepto": "mx_trac_TypeOfOpinionOnTheFinancialStatements",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A69d15a71-f440-4468-9ad9-46696be31fdd": {
                    "Id": "A69d15a71-f440-4468-9ad9-46696be31fdd",
                    "IdConcepto": "mx_trac_DateOfOpinionOnTheFinancialStatements",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
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