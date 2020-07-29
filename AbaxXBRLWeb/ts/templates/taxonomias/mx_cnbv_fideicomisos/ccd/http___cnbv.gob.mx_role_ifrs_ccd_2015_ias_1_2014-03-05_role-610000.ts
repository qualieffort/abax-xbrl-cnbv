///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/ccd/2015/ias_1_2014-03-05_role-610000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_610000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_ccd_2015_ias_1_2014_03_05_role_610000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'VA_set_diferente_cero_full_EquityAndLiabilities': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_set_diferente_cero_full_EquityAndLiabilities',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'abs(bignumber(variable1)) > 0',
                        MensajeExito: 'El hecho reportado para el {variable1} tiene un valor distinto a 0.',
                        MensajeError: 'El hecho reportado para el {variable1} debe tener un valor distinto a 0.',

                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-full_EquityAndLiabilities',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false

                            })
                        }
                    }),
                'VA_610000_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_2',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsMiembrosPatrimonio: Array<string> = [
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
                                    "http://www.cnbv.gob.mx/2015-06-30/ccd:OtherComprehensiveIncomeMember",
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityAttributableToOwnersOfParentMember",
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember"

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

                                            mensajeExito = 'El valor de {variable1} es igual al valor del Patrimonio / Activo Neto al final del periodo - Patrimonio / Activo Neto al comienzo del periodo..';
                                            mensajeError = 'El valor de {variable1} debe ser igual al valor del Patrimonio / Activo Neto al final del periodo - Patrimonio / Activo Neto al comienzo del periodo.';
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
                        MensajeExito: 'El hecho reportado para el {variable1} es igual al "Patrimonio / Activos Netos" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual al "Patrimonio / Activos Netos" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',

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
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a las "Utilidades Acumuladas" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a las "Utilidades Acumuladas" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',

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
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember',
                                        IdItemMiembro: 'ifrs-full_RetainedEarningsMember'
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
                                IdConcepto: 'ifrs-full_RetainedEarnings',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }),
                'VA_610000_210000_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_210000_3',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a "Otros resultados integrales acumulados" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a "Otros resultados integrales acumulados" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',

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
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember',
                                        IdItemMiembro: 'ifrs-full_OtherReservesMember'
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
                                IdConcepto: 'ifrs-full_OtherReserves',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }),
                'VA_610000_210000_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_210000_4',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la "Participación controladora" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a la "Participación controladora" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',

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
                    }),
                'VA_610000_210000_5': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_210000_5',
                        TipoFormula: model.TipoFormula.ValueAssertion,

                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la "Participación no controladora" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a la "Participación no controladora" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',

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
                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember',
                                        IdItemMiembro: 'ifrs-full_NoncontrollingInterestsMember'
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
                                IdConcepto: 'ifrs-full_NoncontrollingInterests',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),

                        }
                    }),
                'VA_610000_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_3',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsConcepto: Array<string> = [
                                    "ifrs-full_ProfitLoss",
                                    "ifrs-full_OtherComprehensiveIncome",
                                    "ifrs-full_ComprehensiveIncome",
                                    "ifrs-full_IssueOfEquity",
                                    "ifrs-full_DividendsPaid",
                                    "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                                    "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                                    "ifrs-full_ChangesInEquity",
                                    "ifrs-full_Equity"
                                ];

                                for (var indexConcepto: number = 0; indexConcepto < idsConcepto.length; indexConcepto++) {

                                    var idConcepto = idsConcepto[indexConcepto];
                                    var idFormula = "VA_610000_3_" + indexConcepto;

                                    var formula = servicioAbax.obtenDefinicionFormulaPorId(idFormula);
                                    if (formula) {
                                        continue;
                                    }
                                    var expresion: string;
                                    var mensajeExito: string;
                                    var mensajeError: string;
                                    var definicionVariables: { [nombre: string]: model.DefinicionVariableFormula } = {};

                                    for (var numeroVariables: number = 0; numeroVariables < 2; numeroVariables++) {

                                        var nombreVariable: string = "variable" + (numeroVariables + 1);

                                        if (indexConcepto == 0) {

                                            mensajeExito = 'El hecho del {variable1} esta reportado para un documento consolidado de lo contrario no se reporta';
                                            mensajeError = 'El hecho del {variable1} debe ser reportado para un documento consolidado de lo contrario no debe ser reportado';
                                            expresion = '(variable2 == "NO" and bignumber(variable1) == 0) or (  variable2 == "SI" and abs(bignumber(variable1)) >= 0)';
                                        }


                                        if (nombreVariable == "variable1") {
                                            definicionVariables[nombreVariable] = new model.DefinicionVariableFormula().deserialize({
                                                Id: nombreVariable,
                                                IdConcepto: idConcepto,
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
                                                        QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember',
                                                        IdItemMiembro: 'ifrs-full_NoncontrollingInterestsMember'
                                                    }
                                                ]
                                            });
                                        }

                                        if (nombreVariable == "variable2") {
                                            definicionVariables[nombreVariable] = new model.DefinicionVariableFormula().deserialize({
                                                Id: nombreVariable,
                                                IdConcepto: "mx_ccd_Consolidated",
                                                PuedeCrearse: false,
                                                PuedeEliminarse: false,
                                                ConteoHechos: false
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
                'VA_610000_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_4',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsConcepto: Array<string> = [
                                    "ifrs-full_DividendsPaid",
                                    "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                                    "ifrs-full_ChangesInEquity",
                                    "ifrs-full_OtherComprehensiveIncome",
                                    "ifrs-full_ProfitLoss",
                                    "ifrs-full_Equity",
                                    "ifrs-full_IssueOfEquity",
                                    "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                                    "ifrs-full_ComprehensiveIncome"
                                ];



                                for (var indexConcepto: number = 0; indexConcepto < idsConcepto.length; indexConcepto++) {

                                    var idConcepto = idsConcepto[indexConcepto];
                                    var idFormula = "VA_610000_4_" + indexConcepto;

                                    var formula = servicioAbax.obtenDefinicionFormulaPorId(idFormula);
                                    if (formula) {
                                        continue;
                                    }
                                    var expresion: string;
                                    var mensajeExito: string;
                                    var mensajeError: string;
                                    var definicionVariables: { [nombre: string]: model.DefinicionVariableFormula } = {};

                                    for (var numeroVariables: number = 0; numeroVariables < 3; numeroVariables++) {

                                        var nombreVariable: string = "variable" + (numeroVariables + 1);

                                        if (indexConcepto == 0) {

                                            mensajeExito = 'El hecho del {variable1} es igual a la suma del "Patrimonio/Activo neto de la participación controladora" y "Participación no controladora".';
                                            mensajeError = 'El hecho del {variable1} debe ser igual a la suma del "Patrimonio/Activo neto de la participación controladora" y "Participación no Controladora".';
                                            expresion = 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)';
                                        }

                                        var IdItemMiembro = "";
                                        if (nombreVariable == "variable1") {
                                            IdItemMiembro = "ifrs-full:EquityMember";
                                        } else if (nombreVariable == "variable2") {
                                            IdItemMiembro = "ifrs-full:EquityAttributableToOwnersOfParentMember";
                                        } else if (nombreVariable == "variable3") {
                                            IdItemMiembro = "ifrs-full:NoncontrollingInterestsMember";
                                        }

                                        definicionVariables[nombreVariable] = new model.DefinicionVariableFormula().deserialize({
                                            Id: nombreVariable,
                                            IdConcepto: idConcepto,
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
                                                    QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/' + IdItemMiembro,
                                                    IdItemMiembro: IdItemMiembro.replace(":", "_")
                                                }
                                            ]
                                        });
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
                'VA_610000_5': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_5',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsConcepto: Array<string> = [
                                    "ifrs-full_DividendsPaid",
                                    "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                                    "ifrs-full_ChangesInEquity",
                                    "ifrs-full_OtherComprehensiveIncome",
                                    "ifrs-full_ProfitLoss",
                                    "ifrs-full_Equity",
                                    "ifrs-full_IssueOfEquity",
                                    "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                                    "ifrs-full_ComprehensiveIncome"
                                ];



                                for (var indexConcepto: number = 0; indexConcepto < idsConcepto.length; indexConcepto++) {

                                    var idConcepto = idsConcepto[indexConcepto];
                                    var idFormula = "VA_610000_5_" + indexConcepto;

                                    var formula = servicioAbax.obtenDefinicionFormulaPorId(idFormula);
                                    if (formula) {
                                        continue;
                                    }
                                    var expresion: string;
                                    var mensajeExito: string;
                                    var mensajeError: string;
                                    var definicionVariables: { [nombre: string]: model.DefinicionVariableFormula } = {};

                                    for (var numeroVariables: number = 0; numeroVariables < 4; numeroVariables++) {

                                        var nombreVariable: string = "variable" + (numeroVariables + 1);

                                        if (indexConcepto == 0) {

                                            mensajeExito = 'El hecho del {variable1} es igual a la suma de sus componentes.';
                                            mensajeError = 'El hecho del {variable1} debería ser igual a la suma de sus componentes.';
                                            expresion = 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)+ bignumber(variable4)';
                                        }

                                        var IdItemMiembro = "";
                                        if (nombreVariable == "variable1") {
                                            IdItemMiembro = "ifrs-full:EquityAttributableToOwnersOfParentMember";
                                        } else if (nombreVariable == "variable2") {
                                            IdItemMiembro = "ifrs-full:IssuedCapitalMember";
                                        } else if (nombreVariable == "variable3") {
                                            IdItemMiembro = "ifrs-full:RetainedEarningsMember";
                                        } else if (nombreVariable == "variable4") {
                                            IdItemMiembro = "ifrs-full:OtherReservesMember";
                                        }

                                        definicionVariables[nombreVariable] = new model.DefinicionVariableFormula().deserialize({
                                            Id: nombreVariable,
                                            IdConcepto: idConcepto,
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
                                                    QNameItemMiembro: 'http://xbrl.ifrs.org/taxonomy/2014-03-05/' + IdItemMiembro,
                                                    IdItemMiembro: IdItemMiembro.replace(":", "_")
                                                }
                                            ]
                                        });
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
                'VA_610000_6': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_6',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsConcepto: Array<string> = [
                                    "ifrs-full_DividendsPaid",
                                    "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                                    "ifrs-full_ChangesInEquity",
                                    "ifrs-full_OtherComprehensiveIncome",
                                    "ifrs-full_ProfitLoss",
                                    "ifrs-full_Equity",
                                    "ifrs-full_IssueOfEquity",
                                    "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                                    "ifrs-full_ComprehensiveIncome"
                                ];



                                for (var indexConcepto: number = 0; indexConcepto < idsConcepto.length; indexConcepto++) {

                                    var idConcepto = idsConcepto[indexConcepto];
                                    var idFormula = "VA_610000_6_" + indexConcepto;

                                    var formula = servicioAbax.obtenDefinicionFormulaPorId(idFormula);
                                    if (formula) {
                                        continue;
                                    }
                                    var expresion: string;
                                    var mensajeExito: string;
                                    var mensajeError: string;
                                    var definicionVariables: { [nombre: string]: model.DefinicionVariableFormula } = {};

                                    for (var numeroVariables: number = 0; numeroVariables < 2; numeroVariables++) {

                                        var nombreVariable: string = "variable" + (numeroVariables + 1);

                                        if (indexConcepto == 0) {

                                            mensajeExito = 'El hecho del {variable1} es igual a Otros resultados integrales acumulados.';
                                            mensajeError = 'El hecho del {variable1} debería ser igual a Otros resultados integrales acumulados.';
                                            expresion = 'bignumber(variable1) == bignumber(variable2)';
                                        }

                                        var IdItemMiembro = "";
                                        var QNameItemMiembro = "";
                                        if (nombreVariable == "variable1") {
                                            IdItemMiembro = "ifrs-full:OtherReservesMember";
                                            QNameItemMiembro='http://xbrl.ifrs.org/taxonomy/2014-03-05/' + IdItemMiembro;
                                        } else if (nombreVariable == "variable2") {
                                            IdItemMiembro = "mx_ccd:OtherComprehensiveIncomeMember";
                                            QNameItemMiembro = 'http://www.cnbv.gob.mx/2015-06-30/ccd:OtherComprehensiveIncomeMember';
                                        } 

                                        definicionVariables[nombreVariable] = new model.DefinicionVariableFormula().deserialize({
                                            Id: nombreVariable,
                                            IdConcepto: idConcepto,
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
                                                    QNameItemMiembro: QNameItemMiembro,
                                                    IdItemMiembro: IdItemMiembro.replace(":", "_")
                                                }
                                            ]
                                        });
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
                    })


            };

            this.ContextosPlantillaPorId = {
                "fin_trimestre_actual": {
                    "Id": "fin_trimestre_actual",
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
                "inicio_ejercicio_anterior": {
                    "Id": "inicio_ejercicio_anterior",
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
                "fin_ejercicio_anterior": {
                    "Id": "fin_ejercicio_anterior",
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
                "Context_Instant_IssuedCapitalMember_3": {
                    "Id": "Context_Instant_IssuedCapitalMember_3",
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
                "Context_Instant_RetainedEarningsMember_3": {
                    "Id": "Context_Instant_RetainedEarningsMember_3",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherComprehensiveIncomeMember_3": {
                    "Id": "Context_Instant_OtherComprehensiveIncomeMember_3",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_ccd_2:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_ccd_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2015-06-30/ccd:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherReservesMember_3": {
                    "Id": "Context_Instant_OtherReservesMember_3",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:OtherReservesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_EquityAttributableToOwnersOfParentMember_3": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember_3",
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
                "Context_Instant_NoncontrollingInterestsMember_3": {
                    "Id": "Context_Instant_NoncontrollingInterestsMember_3",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:NoncontrollingInterestsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant": {
                    "Id": "Context_Instant",
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
                "Context_Instant_IssuedCapitalMember_4": {
                    "Id": "Context_Instant_IssuedCapitalMember_4",
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
                "Context_Instant_RetainedEarningsMember_4": {
                    "Id": "Context_Instant_RetainedEarningsMember_4",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherComprehensiveIncomeMember_4": {
                    "Id": "Context_Instant_OtherComprehensiveIncomeMember_4",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_ccd_2:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_ccd_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2015-06-30/ccd:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherReservesMember_4": {
                    "Id": "Context_Instant_OtherReservesMember_4",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:OtherReservesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_EquityAttributableToOwnersOfParentMember_4": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember_4",
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
                "Context_Instant_NoncontrollingInterestsMember_4": {
                    "Id": "Context_Instant_NoncontrollingInterestsMember_4",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:NoncontrollingInterestsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_IssuedCapitalMember": {
                    "Id": "Context_Instant_IssuedCapitalMember",
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
                "Context_Instant_RetainedEarningsMember": {
                    "Id": "Context_Instant_RetainedEarningsMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherComprehensiveIncomeMember": {
                    "Id": "Context_Instant_OtherComprehensiveIncomeMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_ccd_2:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_ccd_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2015-06-30/ccd:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherReservesMember": {
                    "Id": "Context_Instant_OtherReservesMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:OtherReservesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_EquityAttributableToOwnersOfParentMember": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember",
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
                "Context_Instant_NoncontrollingInterestsMember": {
                    "Id": "Context_Instant_NoncontrollingInterestsMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:NoncontrollingInterestsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_IssuedCapitalMember_2": {
                    "Id": "Context_Instant_IssuedCapitalMember_2",
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
                "Context_Instant_RetainedEarningsMember_2": {
                    "Id": "Context_Instant_RetainedEarningsMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherComprehensiveIncomeMember_2": {
                    "Id": "Context_Instant_OtherComprehensiveIncomeMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_ccd_2:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_ccd_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2015-06-30/ccd:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherReservesMember_2": {
                    "Id": "Context_Instant_OtherReservesMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:OtherReservesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_EquityAttributableToOwnersOfParentMember_2": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember_2",
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
                "Context_Instant_NoncontrollingInterestsMember_2": {
                    "Id": "Context_Instant_NoncontrollingInterestsMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:NoncontrollingInterestsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "trimestre_acumulado_comparativo": {
                    "Id": "trimestre_acumulado_comparativo",
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
                "trimestre_acumulado_actual": {
                    "Id": "trimestre_acumulado_actual",
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
                "Context_Duration_NoncontrollingInterestsMember": {
                    "Id": "Context_Duration_NoncontrollingInterestsMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:NoncontrollingInterestsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember",
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
                "Context_Duration_RetainedEarningsMember": {
                    "Id": "Context_Duration_RetainedEarningsMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Duration_OtherComprehensiveIncomeMember": {
                    "Id": "Context_Duration_OtherComprehensiveIncomeMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_ccd_2:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_ccd_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2015-06-30/ccd:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Duration_OtherReservesMember": {
                    "Id": "Context_Duration_OtherReservesMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:OtherReservesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
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
                "Context_Duration_RetainedEarningsMember_2": {
                    "Id": "Context_Duration_RetainedEarningsMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:RetainedEarningsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_RetainedEarningsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Duration_OtherComprehensiveIncomeMember_2": {
                    "Id": "Context_Duration_OtherComprehensiveIncomeMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_ccd_2:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_ccd_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2015-06-30/ccd:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Duration_OtherReservesMember_2": {
                    "Id": "Context_Duration_OtherReservesMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:OtherReservesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_OtherReservesMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
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
                },
                "Context_Duration_NoncontrollingInterestsMember_2": {
                    "Id": "Context_Duration_NoncontrollingInterestsMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs-full:NoncontrollingInterestsMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "ifrs-full_NoncontrollingInterestsMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:NoncontrollingInterestsMember",
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
                "Ab861cf3c-eb47-46da-95e7-735861723029": {
                    "Id": "Ab861cf3c-eb47-46da-95e7-735861723029",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "fin_trimestre_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0a848658-e91d-4a53-b881-b770db8abf51": {
                    "Id": "A0a848658-e91d-4a53-b881-b770db8abf51",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac972dc0d-206b-4272-ab5f-5da6ff13708c": {
                    "Id": "Ac972dc0d-206b-4272-ab5f-5da6ff13708c",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aed116159-35a0-4ef5-bf77-4c56c423cede": {
                    "Id": "Aed116159-35a0-4ef5-bf77-4c56c423cede",
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
                "A9b6ce674-487c-4ce6-bcdd-556ab037ab8e": {
                    "Id": "A9b6ce674-487c-4ce6-bcdd-556ab037ab8e",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_RetainedEarningsMember_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3cd315a9-2b02-4589-87c3-53c235bc37c3": {
                    "Id": "A3cd315a9-2b02-4589-87c3-53c235bc37c3",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_OtherComprehensiveIncomeMember_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2e16a23d-502e-4998-a443-d25dcab8a9fc": {
                    "Id": "A2e16a23d-502e-4998-a443-d25dcab8a9fc",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_OtherReservesMember_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af99b3142-e706-48f2-be70-117f396eae54": {
                    "Id": "Af99b3142-e706-48f2-be70-117f396eae54",
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
                "A66f8845e-0ba4-4f16-940e-215033dc0b52": {
                    "Id": "A66f8845e-0ba4-4f16-940e-215033dc0b52",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_NoncontrollingInterestsMember_3",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8e8e9fd5-3ea5-4fdb-814a-c079d940c6e6": {
                    "Id": "A8e8e9fd5-3ea5-4fdb-814a-c079d940c6e6",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A46a42c7b-ab54-4c06-ac07-725df5945ece": {
                    "Id": "A46a42c7b-ab54-4c06-ac07-725df5945ece",
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
                "Ab278d728-27ec-4954-b367-54ee098649e8": {
                    "Id": "Ab278d728-27ec-4954-b367-54ee098649e8",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_RetainedEarningsMember_4",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4ffb714f-a402-4ee5-a28f-8c36c969943f": {
                    "Id": "A4ffb714f-a402-4ee5-a28f-8c36c969943f",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_OtherComprehensiveIncomeMember_4",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4e18767a-8b55-4d69-aeab-9d5c8b1179a8": {
                    "Id": "A4e18767a-8b55-4d69-aeab-9d5c8b1179a8",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_OtherReservesMember_4",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8879fc5b-2b1e-44e9-bec0-7bd33f8813b1": {
                    "Id": "A8879fc5b-2b1e-44e9-bec0-7bd33f8813b1",
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
                "A26760715-22a1-4dc3-bcb5-2bce3d7b9623": {
                    "Id": "A26760715-22a1-4dc3-bcb5-2bce3d7b9623",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_NoncontrollingInterestsMember_4",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af5bb65df-9c85-484b-9fa5-d5b452d5ac39": {
                    "Id": "Af5bb65df-9c85-484b-9fa5-d5b452d5ac39",
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
                "A1bd35fab-7a02-44ec-b2f9-ff90d723f27c": {
                    "Id": "A1bd35fab-7a02-44ec-b2f9-ff90d723f27c",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6113eaf3-c07a-48e1-affe-ea46c0361e6e": {
                    "Id": "A6113eaf3-c07a-48e1-affe-ea46c0361e6e",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09446792-fc5e-4163-982f-509a73316cc7": {
                    "Id": "A09446792-fc5e-4163-982f-509a73316cc7",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4cc4efda-98e4-4ffe-b26a-5fa676f44626": {
                    "Id": "A4cc4efda-98e4-4ffe-b26a-5fa676f44626",
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
                "A48990467-ec48-470c-91ec-ba4a773f8829": {
                    "Id": "A48990467-ec48-470c-91ec-ba4a773f8829",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0a454af8-1746-4647-870b-185196d45fc1": {
                    "Id": "A0a454af8-1746-4647-870b-185196d45fc1",
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
                "A487b430b-8085-43dd-bf13-224fa5f4614e": {
                    "Id": "A487b430b-8085-43dd-bf13-224fa5f4614e",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Acc835fc5-66cb-471a-b13e-c507b4f772a2": {
                    "Id": "Acc835fc5-66cb-471a-b13e-c507b4f772a2",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A28fa2e7b-5586-446b-9e6a-aa02647013c9": {
                    "Id": "A28fa2e7b-5586-446b-9e6a-aa02647013c9",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A72d0d167-3161-4eeb-874f-574268a42492": {
                    "Id": "A72d0d167-3161-4eeb-874f-574268a42492",
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
                "A8aad1ad7-0065-407d-ad72-702016eceb66": {
                    "Id": "A8aad1ad7-0065-407d-ad72-702016eceb66",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Context_Instant_NoncontrollingInterestsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A11bc8b71-773e-4668-a85e-d2dd75e78ab2": {
                    "Id": "A11bc8b71-773e-4668-a85e-d2dd75e78ab2",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A92d5a42f-5ed0-47a5-af6d-7a4e49eaa730": {
                    "Id": "A92d5a42f-5ed0-47a5-af6d-7a4e49eaa730",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0043bbe9-e0c8-40ea-ab36-c30008f77e2e": {
                    "Id": "A0043bbe9-e0c8-40ea-ab36-c30008f77e2e",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4b75d55c-1b46-46a7-b3d1-cf14e9202e13": {
                    "Id": "A4b75d55c-1b46-46a7-b3d1-cf14e9202e13",
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
                "A67d65113-6fd0-494e-ab12-0c82be13ef9d": {
                    "Id": "A67d65113-6fd0-494e-ab12-0c82be13ef9d",
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
                "A50e6593a-b004-49ab-b7b8-612cc494b034": {
                    "Id": "A50e6593a-b004-49ab-b7b8-612cc494b034",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aebc76050-dcb8-4798-87a4-486aac5dd4bb": {
                    "Id": "Aebc76050-dcb8-4798-87a4-486aac5dd4bb",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae02d37db-7ebc-4e39-82a6-4ad52450a3cd": {
                    "Id": "Ae02d37db-7ebc-4e39-82a6-4ad52450a3cd",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A74d8cfc6-0e24-472e-953f-5323e8401581": {
                    "Id": "A74d8cfc6-0e24-472e-953f-5323e8401581",
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
                "A1ae001df-59da-4b4f-8d31-abbf52e59dab": {
                    "Id": "A1ae001df-59da-4b4f-8d31-abbf52e59dab",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3af9721d-bcae-464c-997c-a81fda7b9c7f": {
                    "Id": "A3af9721d-bcae-464c-997c-a81fda7b9c7f",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6fbbc488-bb13-4f44-94a8-fd4f859ecd81": {
                    "Id": "A6fbbc488-bb13-4f44-94a8-fd4f859ecd81",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8a87225a-bb12-4a17-8445-e5ceabd7263c": {
                    "Id": "A8a87225a-bb12-4a17-8445-e5ceabd7263c",
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
                "A766b4c15-422e-435a-9be9-cd1c7f0f4a5d": {
                    "Id": "A766b4c15-422e-435a-9be9-cd1c7f0f4a5d",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aacd493a4-bb50-457d-a29f-ad59a0aefee2": {
                    "Id": "Aacd493a4-bb50-457d-a29f-ad59a0aefee2",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6718d3d5-c721-4116-acc5-4f22e9bdf3ed": {
                    "Id": "A6718d3d5-c721-4116-acc5-4f22e9bdf3ed",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6284cd18-91f1-4cab-b226-cf51e282e9de": {
                    "Id": "A6284cd18-91f1-4cab-b226-cf51e282e9de",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1bf9a59a-5343-4340-8c76-9bb8b5d9135c": {
                    "Id": "A1bf9a59a-5343-4340-8c76-9bb8b5d9135c",
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
                "Af214cf0e-adf9-44ce-a83e-7e8f86303b6e": {
                    "Id": "Af214cf0e-adf9-44ce-a83e-7e8f86303b6e",
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
                "Aee1d117f-c73b-4e41-a59c-49ba6df105e8": {
                    "Id": "Aee1d117f-c73b-4e41-a59c-49ba6df105e8",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5294b059-2c50-459e-94d4-79846325796b": {
                    "Id": "A5294b059-2c50-459e-94d4-79846325796b",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A60c96668-93c2-414b-ad39-d3cc929dfded": {
                    "Id": "A60c96668-93c2-414b-ad39-d3cc929dfded",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A02c95396-882c-4c87-b656-0becd74cf438": {
                    "Id": "A02c95396-882c-4c87-b656-0becd74cf438",
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
                "A217fb1c2-8c46-4925-a8df-f82e178ed19c": {
                    "Id": "A217fb1c2-8c46-4925-a8df-f82e178ed19c",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af30adb9a-3039-426e-b677-9a658264e63f": {
                    "Id": "Af30adb9a-3039-426e-b677-9a658264e63f",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6f6de1e9-10f9-40ca-bad0-77eb4885c89b": {
                    "Id": "A6f6de1e9-10f9-40ca-bad0-77eb4885c89b",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abc86233b-708d-4d32-9faf-ed6a7a1244fb": {
                    "Id": "Abc86233b-708d-4d32-9faf-ed6a7a1244fb",
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
                "A473e6f4a-1d8d-4c6f-9133-badebd914433": {
                    "Id": "A473e6f4a-1d8d-4c6f-9133-badebd914433",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7c7d051a-a1ea-4a55-98f8-f0516599f85f": {
                    "Id": "A7c7d051a-a1ea-4a55-98f8-f0516599f85f",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A79e169f8-9d81-4f76-b769-11dbab1b904a": {
                    "Id": "A79e169f8-9d81-4f76-b769-11dbab1b904a",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A108eb64c-938e-4ab4-8fee-1e945077a9e0": {
                    "Id": "A108eb64c-938e-4ab4-8fee-1e945077a9e0",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1bb1efc5-0c86-40d9-9874-221cfac32730": {
                    "Id": "A1bb1efc5-0c86-40d9-9874-221cfac32730",
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
                "A8929b305-ac57-4f05-9517-e4265b3e5180": {
                    "Id": "A8929b305-ac57-4f05-9517-e4265b3e5180",
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
                "A67531d41-585a-42a1-b126-b0f703fb6586": {
                    "Id": "A67531d41-585a-42a1-b126-b0f703fb6586",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9098c5b8-7047-4365-9a35-1652b3cb3655": {
                    "Id": "A9098c5b8-7047-4365-9a35-1652b3cb3655",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4c7a1b88-a722-4f3f-8ab0-c17196fcb36f": {
                    "Id": "A4c7a1b88-a722-4f3f-8ab0-c17196fcb36f",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aeb0fc04d-2450-4ffc-b0fb-1efd8be43f8e": {
                    "Id": "Aeb0fc04d-2450-4ffc-b0fb-1efd8be43f8e",
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
                "Ab95b3ecc-f662-4c01-adef-95649016ddf3": {
                    "Id": "Ab95b3ecc-f662-4c01-adef-95649016ddf3",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A738a13a7-4f39-48c6-a7d8-1d27403009c9": {
                    "Id": "A738a13a7-4f39-48c6-a7d8-1d27403009c9",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4de17535-9a73-4003-8cd2-8f304eab051b": {
                    "Id": "A4de17535-9a73-4003-8cd2-8f304eab051b",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A328b7792-77fe-4109-9bc7-588fddbcffca": {
                    "Id": "A328b7792-77fe-4109-9bc7-588fddbcffca",
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
                "A215af508-cd48-40d3-9003-36440a8a608e": {
                    "Id": "A215af508-cd48-40d3-9003-36440a8a608e",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A74135e9d-067d-4f1c-81a6-d457dc13f829": {
                    "Id": "A74135e9d-067d-4f1c-81a6-d457dc13f829",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa151a5ca-3dd8-4903-9098-fae53c2e468c": {
                    "Id": "Aa151a5ca-3dd8-4903-9098-fae53c2e468c",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1de656c7-471b-4fac-9648-0f421a77fa38": {
                    "Id": "A1de656c7-471b-4fac-9648-0f421a77fa38",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A03ab0fa9-feb0-4ca6-bc53-c200f6cb648c": {
                    "Id": "A03ab0fa9-feb0-4ca6-bc53-c200f6cb648c",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A16e84325-9bb9-49a3-bcb2-5d1afff11ad0": {
                    "Id": "A16e84325-9bb9-49a3-bcb2-5d1afff11ad0",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7a5ecb22-a0c2-4dbc-af53-8636eeec5ab8": {
                    "Id": "A7a5ecb22-a0c2-4dbc-af53-8636eeec5ab8",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A22bc4821-56b7-4f6e-8e6a-0fe8237051fa": {
                    "Id": "A22bc4821-56b7-4f6e-8e6a-0fe8237051fa",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A21de8186-2d95-449d-a9c4-6d38521ddc3d": {
                    "Id": "A21de8186-2d95-449d-a9c4-6d38521ddc3d",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae12e32b1-5a41-470c-b4b7-46c2ca995f84": {
                    "Id": "Ae12e32b1-5a41-470c-b4b7-46c2ca995f84",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5a6484eb-bf96-4c77-b50a-02b5c6ed0238": {
                    "Id": "A5a6484eb-bf96-4c77-b50a-02b5c6ed0238",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aaf159b80-9c78-4148-88f7-77c222d9edf8": {
                    "Id": "Aaf159b80-9c78-4148-88f7-77c222d9edf8",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abe070f74-0e8a-430b-91cd-3dfcac3d02cd": {
                    "Id": "Abe070f74-0e8a-430b-91cd-3dfcac3d02cd",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2768b927-7561-4b94-8196-991f0242e750": {
                    "Id": "A2768b927-7561-4b94-8196-991f0242e750",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A469c89e4-a414-4dc7-b395-f8a82c421779": {
                    "Id": "A469c89e4-a414-4dc7-b395-f8a82c421779",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad2e161c6-3481-40c8-b5a6-f404349e38d5": {
                    "Id": "Ad2e161c6-3481-40c8-b5a6-f404349e38d5",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A69d2bb13-d645-4647-b94a-8399e743e101": {
                    "Id": "A69d2bb13-d645-4647-b94a-8399e743e101",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A530f5c1e-9af4-4161-8dc3-e5b17383e5eb": {
                    "Id": "A530f5c1e-9af4-4161-8dc3-e5b17383e5eb",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adecc989d-5ed2-4661-9155-66fe13a4ed14": {
                    "Id": "Adecc989d-5ed2-4661-9155-66fe13a4ed14",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abf67f12e-ca02-4e5a-8879-b0bda3e3a161": {
                    "Id": "Abf67f12e-ca02-4e5a-8879-b0bda3e3a161",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5adc93d1-95e0-454b-8a98-2a6c086900e9": {
                    "Id": "A5adc93d1-95e0-454b-8a98-2a6c086900e9",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af67b3346-d95d-43f8-ad28-85dbf796b2af": {
                    "Id": "Af67b3346-d95d-43f8-ad28-85dbf796b2af",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad7e987da-8eb0-4b64-9678-c051fc7f987a": {
                    "Id": "Ad7e987da-8eb0-4b64-9678-c051fc7f987a",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1e844022-06e8-464b-b41b-9337dfcc8fac": {
                    "Id": "A1e844022-06e8-464b-b41b-9337dfcc8fac",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A699840f6-6da1-44a0-b830-d4fef69b3d12": {
                    "Id": "A699840f6-6da1-44a0-b830-d4fef69b3d12",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adb66a52e-d098-4ebe-b0c4-9493da39eb7f": {
                    "Id": "Adb66a52e-d098-4ebe-b0c4-9493da39eb7f",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A220067f9-f273-429b-9a7f-4fd8fba85982": {
                    "Id": "A220067f9-f273-429b-9a7f-4fd8fba85982",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A05e11682-ce30-4fea-af54-aaa0638f0db1": {
                    "Id": "A05e11682-ce30-4fea-af54-aaa0638f0db1",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac70cdc5e-ddc8-4530-9ad9-d12ee4d35b3e": {
                    "Id": "Ac70cdc5e-ddc8-4530-9ad9-d12ee4d35b3e",
                    "IdConcepto": "ifrs-full_DividendsPaid",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0f11850a-6a7d-4f1b-9fd3-5ca2f3f8d75d": {
                    "Id": "A0f11850a-6a7d-4f1b-9fd3-5ca2f3f8d75d",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A07a68cfd-0e95-46b2-a9da-e281c87349f2": {
                    "Id": "A07a68cfd-0e95-46b2-a9da-e281c87349f2",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6ead75f0-e0b9-47ae-831d-af2b7e906a5d": {
                    "Id": "A6ead75f0-e0b9-47ae-831d-af2b7e906a5d",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A51e4ca7e-4876-4246-92e7-e54a1b042e97": {
                    "Id": "A51e4ca7e-4876-4246-92e7-e54a1b042e97",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A57a78378-9e58-4e0a-a2af-39e30af6f6db": {
                    "Id": "A57a78378-9e58-4e0a-a2af-39e30af6f6db",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae3ce4bf6-670f-4de5-900a-f79a9d84e24f": {
                    "Id": "Ae3ce4bf6-670f-4de5-900a-f79a9d84e24f",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6083003d-2b53-4a72-85c0-d932a6161d7d": {
                    "Id": "A6083003d-2b53-4a72-85c0-d932a6161d7d",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0c9ede52-e938-41b5-8e28-0f97ddc6a116": {
                    "Id": "A0c9ede52-e938-41b5-8e28-0f97ddc6a116",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afedebf4e-1aa7-43a7-956f-bf7d233e719e": {
                    "Id": "Afedebf4e-1aa7-43a7-956f-bf7d233e719e",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A486829b8-022c-4cdc-8c35-e410d245ed89": {
                    "Id": "A486829b8-022c-4cdc-8c35-e410d245ed89",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aafb311c3-79be-4040-8bbc-b40992ad810e": {
                    "Id": "Aafb311c3-79be-4040-8bbc-b40992ad810e",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Adab88e59-3f41-4b5a-ae8f-1a8912b700ed": {
                    "Id": "Adab88e59-3f41-4b5a-ae8f-1a8912b700ed",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A23bce1ef-088b-422b-84ae-ba802fc52da5": {
                    "Id": "A23bce1ef-088b-422b-84ae-ba802fc52da5",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa2a8aac3-c03c-4850-9e51-c4fbe4998303": {
                    "Id": "Aa2a8aac3-c03c-4850-9e51-c4fbe4998303",
                    "IdConcepto": "mx_ccd_NetContributionOfHoldersOfIssuanceAndPlacementCosts",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7e2ee034-e2dd-4fc0-87e7-a552a5131c4a": {
                    "Id": "A7e2ee034-e2dd-4fc0-87e7-a552a5131c4a",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa469dec7-98ca-4196-8d66-38ae84815d1e": {
                    "Id": "Aa469dec7-98ca-4196-8d66-38ae84815d1e",
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
                "A4ac3a683-a3ca-4c42-8a7d-adbe21a2a0ec": {
                    "Id": "A4ac3a683-a3ca-4c42-8a7d-adbe21a2a0ec",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab581203d-c25a-4d0b-8006-f20d84dcc199": {
                    "Id": "Ab581203d-c25a-4d0b-8006-f20d84dcc199",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae8c0dc93-91e1-49e8-9ad4-7e9df08a42f3": {
                    "Id": "Ae8c0dc93-91e1-49e8-9ad4-7e9df08a42f3",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A972f87af-6b70-4c51-aa92-4f518d032873": {
                    "Id": "A972f87af-6b70-4c51-aa92-4f518d032873",
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
                "A7f566175-bf07-456b-8392-99d97966ee07": {
                    "Id": "A7f566175-bf07-456b-8392-99d97966ee07",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aff74111e-3ac4-4b47-8798-9413299655fe": {
                    "Id": "Aff74111e-3ac4-4b47-8798-9413299655fe",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0f840642-9dae-435f-9681-6a1cefb86fd5": {
                    "Id": "A0f840642-9dae-435f-9681-6a1cefb86fd5",
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
                "A38c52956-8bb1-4146-b055-f01c6e5a63f4": {
                    "Id": "A38c52956-8bb1-4146-b055-f01c6e5a63f4",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9d618c01-dd28-4502-9347-59c26c213454": {
                    "Id": "A9d618c01-dd28-4502-9347-59c26c213454",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae140c508-951e-44e3-a46b-3ef40220bc7c": {
                    "Id": "Ae140c508-951e-44e3-a46b-3ef40220bc7c",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A315958e7-0351-4c82-8f9c-75da300cb26e": {
                    "Id": "A315958e7-0351-4c82-8f9c-75da300cb26e",
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
                "A62079149-0d03-47f4-95d1-b7d2494fdc0c": {
                    "Id": "A62079149-0d03-47f4-95d1-b7d2494fdc0c",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5970a1c4-eba0-41e0-8218-1d405e1c8df7": {
                    "Id": "A5970a1c4-eba0-41e0-8218-1d405e1c8df7",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "trimestre_acumulado_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3750ab31-d861-4449-86f8-5c4f29a8b1e5": {
                    "Id": "A3750ab31-d861-4449-86f8-5c4f29a8b1e5",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A5737420a-641b-48de-b301-85ce422ac6e0": {
                    "Id": "A5737420a-641b-48de-b301-85ce422ac6e0",
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
                "Aedeedee1-1b40-40d4-a0eb-35b1138fe835": {
                    "Id": "Aedeedee1-1b40-40d4-a0eb-35b1138fe835",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A01964e49-2a57-49c7-be03-814a1db41726": {
                    "Id": "A01964e49-2a57-49c7-be03-814a1db41726",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8aabbc21-c023-48f3-9f1a-cb296ed336b0": {
                    "Id": "A8aabbc21-c023-48f3-9f1a-cb296ed336b0",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A49d11de6-a350-4454-9efa-37a24148bfed": {
                    "Id": "A49d11de6-a350-4454-9efa-37a24148bfed",
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
                "Ae1f0e2b1-08a9-493b-90b0-4ca9b77b2b93": {
                    "Id": "Ae1f0e2b1-08a9-493b-90b0-4ca9b77b2b93",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "trimestre_acumulado_comparativo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2a667d58-1f10-4e78-a93e-70e5011e0c1c": {
                    "Id": "A2a667d58-1f10-4e78-a93e-70e5011e0c1c",
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
                "A78268308-97a1-46d7-ae8e-183345f9e00c": {
                    "Id": "A78268308-97a1-46d7-ae8e-183345f9e00c",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af027df7f-64e7-4c51-900f-c46ff5c24249": {
                    "Id": "Af027df7f-64e7-4c51-900f-c46ff5c24249",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9c9720de-c02d-4395-9ab1-d8ac71920f51": {
                    "Id": "A9c9720de-c02d-4395-9ab1-d8ac71920f51",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Afa287dde-2322-4b85-a85d-9f136d46a7e8": {
                    "Id": "Afa287dde-2322-4b85-a85d-9f136d46a7e8",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab9e23b2e-ab90-4e29-8f43-cfbc6d1699ae": {
                    "Id": "Ab9e23b2e-ab90-4e29-8f43-cfbc6d1699ae",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Context_Duration_NoncontrollingInterestsMember_2",
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