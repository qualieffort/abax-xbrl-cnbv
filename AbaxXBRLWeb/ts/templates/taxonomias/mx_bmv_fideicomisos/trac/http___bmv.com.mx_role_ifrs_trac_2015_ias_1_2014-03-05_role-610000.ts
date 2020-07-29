///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/trac/2015/ias_1_2014-03-05_role-610000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_610000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_trac_2015_ias_1_2014_03_05_role_610000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_610000_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_2',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsMiembrosPatrimonio: Array<string> = [
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityMember"

                                ];

                                for (var indexMiembro: number = 0; indexMiembro < idsMiembrosPatrimonio.length; indexMiembro++) {

                                    var qNameItemMiembro = idsMiembrosPatrimonio[indexMiembro];
                                    var idFormula = "VA_610000_2_" + indexMiembro;

                                    var formula = servicioAbax.obtenDefinicionFormulaPorId(idFormula);
                                    if (formula) {
                                        continue;
                                    }
                                    var expresion: string;
                                    var mensajeExito: string;
                                    var mensajeError: string;
                                    var definicionVariables: { [nombre: string]: model.DefinicionVariableFormula } = {};

                                    for (var numeroVariables: number = 0; numeroVariables < 3; numeroVariables++) {

                                        var itemMiembros = qNameItemMiembro.split("/");
                                        var nombreVariable: string = "variable" + (numeroVariables + 1);
                                        var nombreMiembro: string = itemMiembros[itemMiembros.length - 1];
                                        nombreMiembro = nombreMiembro.replace(":", "_");


                                        if (indexMiembro == 0) {

                                            mensajeExito = 'El valor de {variable1} es igual al valor de Activos netos atribuibles a los tenedores al final del periodo - Activos netos atribuibles a los tenedores al comienzo del periodo.';
                                            mensajeError = 'El valor de {variable1} debe ser igual al valor de Activos netos atribuibles a los tenedores al final del periodo - Activos netos atribuibles a los tenedores al comienzo del periodo.';
                                            expresion = 'bignumber(variable1) == bignumber(variable2) - bignumber(variable3)';
                                        }

                                        if (nombreVariable == "variable3") {
                                            definicionVariables[nombreVariable] = new model.DefinicionVariableFormula().deserialize({
                                                Id: nombreVariable,
                                                IdConcepto: "ifrs-full_Equity",
                                                PuedeCrearse: false,
                                                PuedeEliminarse: false,
                                                ConteoHechos: false,
                                                EsDinamica: false,
                                                EmpatarPeriodo: abaxXBRL.model.TipoMatchPeriodo.PeriodStartMatch,
                                                RolEtiqueta: "http://www.xbrl.org/2003/role/periodStartLabel",
                                                ValorFallback: '0',
                                                FiltrosDimension: [
                                                    {
                                                        Explicita: true,
                                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                                        IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                                        QNameItemMiembro: qNameItemMiembro,
                                                        IdItemMiembro: nombreMiembro
                                                    },
                                                    {
                                                        Explicita: true,
                                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                                        IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                                        IdItemMiembro: 'ifrs-full_RestatedMember'
                                                    }
                                                ]
                                            });
                                        }
                                        if (nombreVariable == "variable2") {
                                            definicionVariables[nombreVariable] = new model.DefinicionVariableFormula().deserialize({
                                                Id: nombreVariable,
                                                IdConcepto: "ifrs-full_Equity",
                                                PuedeCrearse: false,
                                                PuedeEliminarse: false,
                                                ConteoHechos: false,
                                                EsDinamica: false,
                                                EmpatarPeriodo: abaxXBRL.model.TipoMatchPeriodo.PeriodEndMatch,
                                                RolEtiqueta: "http://www.xbrl.org/2003/role/periodEndLabel",
                                                ValorFallback: '0',
                                                FiltrosDimension: [
                                                    {
                                                        Explicita: true,
                                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                                        IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                                        QNameItemMiembro: qNameItemMiembro,
                                                        IdItemMiembro: nombreMiembro
                                                    },
                                                    {
                                                        Explicita: true,
                                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                                        IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                                        IdItemMiembro: 'ifrs-full_RestatedMember'
                                                    }
                                                ]
                                            });
                                        }

                                        if (nombreVariable == "variable1") {
                                            definicionVariables[nombreVariable] = new model.DefinicionVariableFormula().deserialize({
                                                Id: nombreVariable,
                                                IdConcepto: "ifrs-full_ChangesInEquity",
                                                PuedeCrearse: false,
                                                PuedeEliminarse: false,
                                                ConteoHechos: false,
                                                EsDinamica: false,
                                                ValorFallback: '0',
                                                FiltrosDimension: [
                                                    {
                                                        Explicita: true,
                                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                                        IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                                        QNameItemMiembro: qNameItemMiembro,
                                                        IdItemMiembro: nombreMiembro
                                                    },
                                                    {
                                                        Explicita: true,
                                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                                        IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                                        IdItemMiembro: 'ifrs-full_RestatedMember'
                                                    }
                                                ]
                                            });
                                        }

                                    }

                                    formula = new model.DefinicionFormula().deserialize({
                                        Id: idFormula,
                                        TipoFormula: model.TipoFormula.ValueAssertion,
                                        Expresion: expresion,
                                        MensajeExito: mensajeExito,
                                        MensajeError: mensajeError,
                                        VariablesCoincidenPeriodo: true,
                                        DefinicionVariables: definicionVariables
                                    });
                                    servicioAbax.agregaFormulaPlantilla(formula);
                                    servicioAbax.evaluaFormula(formula.Id);
                                }
                            }
                        }
                    }),
                'VA_610000_210000_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_210000_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual al "Activos netos atribuibles a los tenedores" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual al "Activos netos atribuibles a los tenedores" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_Equity',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                EsDinamica: false,
                                EmpatarPeriodo: abaxXBRL.model.TipoMatchPeriodo.PeriodEndMatch,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                        IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember',
                                        IdItemMiembro: 'ifrs-full_IssuedCapitalMember'
                                    },
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                        IdItemMiembro: 'ifrs-full_RestatedMember'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_IssuedCapital',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }),
                'VA_610000_210000_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_210000_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a las "Activos netos atribuibles a los tenedores" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a las "Activos netos atribuibles a los tenedores" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_Equity',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                EsDinamica: false,
                                EmpatarPeriodo: abaxXBRL.model.TipoMatchPeriodo.PeriodEndMatch,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis',
                                        IdDimension: 'ifrs-full_ComponentsOfEquityAxis',
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember',
                                        IdItemMiembro: 'ifrs-full_EquityAttributableToOwnersOfParentMember'
                                    },
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        IdDimension: 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis',
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RestatedMember',
                                        IdItemMiembro: 'ifrs-full_RestatedMember'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_EquityAttributableToOwnersOfParent',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    })
            };

            this.ContextosPlantillaPorId = {
                "Trimestre_AnioActual": {
                    "Id": "Trimestre_AnioActual",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2015_09_30",
                        "FechaInicio": "",
                        "FechaFin": ""
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
                "Cierre_EjercicioAnterior": {
                    "Id": "Cierre_EjercicioAnterior",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2014_12_31",
                        "FechaInicio": "",
                        "FechaFin": ""
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
                "Inicio_EjercicioAnterior": {
                    "Id": "Inicio_EjercicioAnterior",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_12_31",
                        "FechaInicio": "",
                        "FechaFin": ""
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
                "Cierre_TrimestreAnioAnterior": {
                    "Id": "Cierre_TrimestreAnioAnterior",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2014_09_30",
                        "FechaInicio": "",
                        "FechaFin": ""
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
                "Context_Instant_IssuedCapitalMember": {
                    "Id": "Context_Instant_IssuedCapitalMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2015_09_30",
                        "FechaInicio": "",
                        "FechaFin": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:IssuedCapitalMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_EquityAttributableToOwnersOfParentMember": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2015_09_30",
                        "FechaInicio": "",
                        "FechaFin": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_IssuedCapitalMember_2": {
                    "Id": "Context_Instant_IssuedCapitalMember_2",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2014_09_30",
                        "FechaInicio": "",
                        "FechaFin": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:IssuedCapitalMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_EquityAttributableToOwnersOfParentMember_2": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember_2",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2014_09_30",
                        "FechaInicio": "",
                        "FechaFin": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_IssuedCapitalMember_3": {
                    "Id": "Context_Instant_IssuedCapitalMember_3",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_12_31",
                        "FechaInicio": "",
                        "FechaFin": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:IssuedCapitalMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_EquityAttributableToOwnersOfParentMember_3": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember_3",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2013_12_31",
                        "FechaInicio": "",
                        "FechaFin": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_IssuedCapitalMember_4": {
                    "Id": "Context_Instant_IssuedCapitalMember_4",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2014_12_31",
                        "FechaInicio": "",
                        "FechaFin": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:IssuedCapitalMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_EquityAttributableToOwnersOfParentMember_4": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember_4",
                    "Periodo": {
                        "Tipo": 1,
                        "FechaInstante": "#fecha_2014_12_31",
                        "FechaInicio": "",
                        "FechaFin": ""
                    },
                    "Entidad": {
                        "Id": "#nombreEntidad",
                        "EsquemaId": "#esquemaEntidad",
                        "ContieneInformacionDimensional": false,
                        "Segmento": null,
                        "ValoresDimension": []
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
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
                },
                "Acumulado_AnioAnterior": {
                    "Id": "Acumulado_AnioAnterior",
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
                },
                "Context_Duration_IssuedCapitalMember": {
                    "Id": "Context_Duration_IssuedCapitalMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:IssuedCapitalMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Duration_EquityAttributableToOwnersOfParentMember": {
                    "Id": "Context_Duration_EquityAttributableToOwnersOfParentMember",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Duration_IssuedCapitalMember_2": {
                    "Id": "Context_Duration_IssuedCapitalMember_2",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:IssuedCapitalMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_IssuedCapitalMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Duration_EquityAttributableToOwnersOfParentMember_2": {
                    "Id": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
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
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:EquityAttributableToOwnersOfParentMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_EquityAttributableToOwnersOfParentMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                }
            };

            this.UnidadesPlantillaPorId = {
                "MXN": {
                    "Id": "MXN",
                    "Tipo": 1,
                    "Medidas": [
                        {
                            "Nombre": "#medida_MXN",
                            "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
                        }
                    ],
                    "MedidasDenominador": [],
                    "MedidasNumerador": []
                }
            };

            this.HechosPlantillaPorId = {
                "Abdf16cf3-d051-4d34-9831-2e9338df9fa0": {
                    "Id": "Abdf16cf3-d051-4d34-9831-2e9338df9fa0",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Trimestre_AnioActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5453b7da-d3c5-4123-8eef-5f31945f5a69": {
                    "Id": "A5453b7da-d3c5-4123-8eef-5f31945f5a69",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Cierre_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A94f2d737-4b9f-4c8a-ade0-5fb52b83ca08": {
                    "Id": "A94f2d737-4b9f-4c8a-ade0-5fb52b83ca08",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Inicio_EjercicioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3613f272-6485-425f-8fd2-70cc6d8cf2fe": {
                    "Id": "A3613f272-6485-425f-8fd2-70cc6d8cf2fe",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Cierre_TrimestreAnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aee17df1a-7e87-4165-b7ff-70daa4c017e9": {
                    "Id": "Aee17df1a-7e87-4165-b7ff-70daa4c017e9",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aef85a365-42b7-49ff-a875-d27ecaec011e": {
                    "Id": "Aef85a365-42b7-49ff-a875-d27ecaec011e",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9036915a-a779-4003-b86a-db8de39a54b2": {
                    "Id": "A9036915a-a779-4003-b86a-db8de39a54b2",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2651bd51-3fe2-473a-a4a9-ae13ea233bca": {
                    "Id": "A2651bd51-3fe2-473a-a4a9-ae13ea233bca",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af7696d6f-1f36-4b86-82fc-68dc5683947f": {
                    "Id": "Af7696d6f-1f36-4b86-82fc-68dc5683947f",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_IssuedCapitalMember_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa51a4531-fe30-4bad-a106-19a1b52bfd42": {
                    "Id": "Aa51a4531-fe30-4bad-a106-19a1b52bfd42",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_EquityAttributableToOwnersOfParentMember_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A095cdee0-fbbe-4fba-a098-87082e50d53e": {
                    "Id": "A095cdee0-fbbe-4fba-a098-87082e50d53e",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_IssuedCapitalMember_4",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8afdabb0-6d9c-46c2-9ed7-22a6bbae5c51": {
                    "Id": "A8afdabb0-6d9c-46c2-9ed7-22a6bbae5c51",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_EquityAttributableToOwnersOfParentMember_4",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e841afa-36ad-42e6-bb95-c2696a15c94c": {
                    "Id": "A1e841afa-36ad-42e6-bb95-c2696a15c94c",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aec784537-7bdd-49a8-830c-d47550c3c745": {
                    "Id": "Aec784537-7bdd-49a8-830c-d47550c3c745",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8cda986a-1e16-47a0-a493-288a2804d8c0": {
                    "Id": "A8cda986a-1e16-47a0-a493-288a2804d8c0",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A86818a43-3cef-4793-8b6d-d7163921c2c6": {
                    "Id": "A86818a43-3cef-4793-8b6d-d7163921c2c6",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1c8aa386-8d4b-459e-a012-9dbfe312cd44": {
                    "Id": "A1c8aa386-8d4b-459e-a012-9dbfe312cd44",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aab8f0da0-d92d-471f-81bc-0a11e2181540": {
                    "Id": "Aab8f0da0-d92d-471f-81bc-0a11e2181540",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A421e31d1-1804-424e-8346-430a474d3df8": {
                    "Id": "A421e31d1-1804-424e-8346-430a474d3df8",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acf163872-31c6-4cf7-88a2-0570a509fbb9": {
                    "Id": "Acf163872-31c6-4cf7-88a2-0570a509fbb9",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A23748119-41f0-40ff-bcbb-b502d5ac714d": {
                    "Id": "A23748119-41f0-40ff-bcbb-b502d5ac714d",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A93180fe0-bcdb-4336-b033-423706c47976": {
                    "Id": "A93180fe0-bcdb-4336-b033-423706c47976",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A25f87d7d-808b-4677-aeac-1b41c6560d4c": {
                    "Id": "A25f87d7d-808b-4677-aeac-1b41c6560d4c",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4aeb3fbb-d706-4f19-aa81-5433550cc256": {
                    "Id": "A4aeb3fbb-d706-4f19-aa81-5433550cc256",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3d159ac1-2c5a-4fe4-bcfd-640a918aec86": {
                    "Id": "A3d159ac1-2c5a-4fe4-bcfd-640a918aec86",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6f3084ac-4155-4349-80c2-064e274b5e63": {
                    "Id": "A6f3084ac-4155-4349-80c2-064e274b5e63",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad88c4c82-4a19-41e6-9729-4863664c86a5": {
                    "Id": "Ad88c4c82-4a19-41e6-9729-4863664c86a5",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8580195b-1fea-4716-813f-6fe5c6d6721b": {
                    "Id": "A8580195b-1fea-4716-813f-6fe5c6d6721b",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A936954c0-8fb3-414d-9bf5-88d4c3538632": {
                    "Id": "A936954c0-8fb3-414d-9bf5-88d4c3538632",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6650a572-a0ef-4871-91ae-14330569664c": {
                    "Id": "A6650a572-a0ef-4871-91ae-14330569664c",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af0130fc8-fc5b-44d1-be26-0b4a1058d1bc": {
                    "Id": "Af0130fc8-fc5b-44d1-be26-0b4a1058d1bc",
                    "IdConcepto": "mx_trac_CreationsAndRedemptionsOfCertificates",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6e81f6a7-4976-4cc9-95d7-6fba46a2778c": {
                    "Id": "A6e81f6a7-4976-4cc9-95d7-6fba46a2778c",
                    "IdConcepto": "mx_trac_CreationsAndRedemptionsOfCertificates",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af576b20c-d083-4c67-898e-e52d9285079c": {
                    "Id": "Af576b20c-d083-4c67-898e-e52d9285079c",
                    "IdConcepto": "mx_trac_CreationsAndRedemptionsOfCertificates",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9c25509f-9117-433a-ac8f-4316a205aac9": {
                    "Id": "A9c25509f-9117-433a-ac8f-4316a205aac9",
                    "IdConcepto": "mx_trac_CreationsAndRedemptionsOfCertificates",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A248200c4-d9b9-4e0d-8af9-b751ed588395": {
                    "Id": "A248200c4-d9b9-4e0d-8af9-b751ed588395",
                    "IdConcepto": "mx_trac_CreationsAndRedemptionsOfCertificates",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6ff528e6-5157-4b4d-91d9-b7937d485556": {
                    "Id": "A6ff528e6-5157-4b4d-91d9-b7937d485556",
                    "IdConcepto": "mx_trac_CreationsAndRedemptionsOfCertificates",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4b790e59-c1b1-4ae3-8178-9cd4eea4670c": {
                    "Id": "A4b790e59-c1b1-4ae3-8178-9cd4eea4670c",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad4e67bca-1bfd-416b-8ff7-9b5580b6a08e": {
                    "Id": "Ad4e67bca-1bfd-416b-8ff7-9b5580b6a08e",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2716ca2c-40f8-48ed-a842-9253024f0097": {
                    "Id": "A2716ca2c-40f8-48ed-a842-9253024f0097",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A22efefeb-ad23-494c-9575-1bea2b1df784": {
                    "Id": "A22efefeb-ad23-494c-9575-1bea2b1df784",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A51fa29cd-663b-48fe-9b3a-6234a1cfc327": {
                    "Id": "A51fa29cd-663b-48fe-9b3a-6234a1cfc327",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6bf5f5cf-1812-437e-97be-9cc04284d9c2": {
                    "Id": "A6bf5f5cf-1812-437e-97be-9cc04284d9c2",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0ae8c9cb-c3b4-48cf-bf73-125c8cfc74c5": {
                    "Id": "A0ae8c9cb-c3b4-48cf-bf73-125c8cfc74c5",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Acumulado_AnoActual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad4281b64-ca4a-4e10-932b-650b34dfd70b": {
                    "Id": "Ad4281b64-ca4a-4e10-932b-650b34dfd70b",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Acumulado_AnioAnterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A260b3468-9e50-4ee3-935a-b008c94b4fb2": {
                    "Id": "A260b3468-9e50-4ee3-935a-b008c94b4fb2",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8075ed52-3545-4032-8061-aa951f173e46": {
                    "Id": "A8075ed52-3545-4032-8061-aa951f173e46",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9c37d2fd-b63c-460d-a9c2-e8319c39f06d": {
                    "Id": "A9c37d2fd-b63c-460d-a9c2-e8319c39f06d",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A02ce2a89-c3f9-4cfc-8ac4-8ec8be54dc78": {
                    "Id": "A02ce2a89-c3f9-4cfc-8ac4-8ec8be54dc78",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                }
            };
        }
    }

}