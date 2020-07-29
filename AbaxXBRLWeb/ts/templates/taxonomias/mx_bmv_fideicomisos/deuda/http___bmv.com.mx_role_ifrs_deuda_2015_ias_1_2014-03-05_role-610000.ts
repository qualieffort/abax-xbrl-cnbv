///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-610000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_610000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_deuda_2015_ias_1_2014_03_05_role_610000
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
                
                'VA_610000_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_2',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsMiembrosPatrimonio: Array<string> = [
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:IssuedCapitalMember",
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:RetainedEarningsMember",
                                    "http://www.bmv.com.mx/2015-06-30/deuda:OtherComprehensiveIncomeMember",
                                    "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember",
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

                                            mensajeExito = 'El valor de {variable1} es igual al valor del Patrimonio al final del periodo - Patrimonio al comienzo del periodo..';
                                            mensajeError = 'El valor de {variable1} debe ser igual al valor del Patrimonio al final del periodo - Patrimonio al comienzo del periodo.';
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
                        MensajeExito: 'El hecho reportado para el {variable1} es igual al "Patrimonio" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual al "Patrimonio" expresado en el "[210000] Estado de situación financiera circulante/no circulante".',

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
                
                'VA_610000_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_3',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsConcepto: Array<string> = [
                                    "ifrs-full_Equity",
                                    "ifrs-full_OtherComprehensiveIncome",
                                    "ifrs-full_ComprehensiveIncome",
                                    "ifrs-full_IssueOfEquity",
                                    "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                                    "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                                    "mx_deuda_IncrementsForContributionsToVentureCapital",
                                    "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                                    "ifrs-full_ChangesInEquity",
                                    "ifrs-full_ProfitLoss"
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

                                            mensajeExito = 'El hecho del {variable1} es igual al valor del miembro de Otros resultados integrales acumulados.';
                                            mensajeError = 'El hecho del {variable1} debería ser igual al valor del miembro de Otros resultados integrales acumulados.';
                                            expresion = 'bignumber(variable1) == bignumber(variable2)';
                                        }

                                        var IdItemMiembro = "";
                                        var QNameItemMiembro = "";
                                        if (nombreVariable == "variable1") {
                                            IdItemMiembro = "ifrs-full:OtherReservesMember";
                                            QNameItemMiembro = 'http://xbrl.ifrs.org/taxonomy/2014-03-05/' + IdItemMiembro;
                                        } else if (nombreVariable == "variable2") {
                                            IdItemMiembro = "mx_deuda:OtherComprehensiveIncomeMember";
                                            QNameItemMiembro = 'http://www.bmv.com.mx/2015-06-30/deuda:OtherComprehensiveIncomeMember';
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
                    }),
                'VA_610000_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_4',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsConcepto: Array<string> = [
                                    "ifrs-full_Equity",
                                    "ifrs-full_OtherComprehensiveIncome",
                                    "ifrs-full_ComprehensiveIncome",
                                    "ifrs-full_IssueOfEquity",
                                    "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                                    "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                                    "mx_deuda_IncrementsForContributionsToVentureCapital",
                                    "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                                    "ifrs-full_ChangesInEquity",
                                    "ifrs-full_ProfitLoss"
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
                'VA_610000_5': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'VA_610000_5',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsConcepto: Array<string> = [
                                    "ifrs-full_Equity",
                                    "ifrs-full_OtherComprehensiveIncome",
                                    "ifrs-full_ComprehensiveIncome",
                                    "ifrs-full_IssueOfEquity",
                                    "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                                    "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                                    "mx_deuda_IncrementsForContributionsToVentureCapital",
                                    "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                                    "ifrs-full_ChangesInEquity",
                                    "ifrs-full_ProfitLoss"
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

                                    for (var numeroVariables: number = 0; numeroVariables < 2; numeroVariables++) {

                                        var nombreVariable: string = "variable" + (numeroVariables + 1);

                                        if (indexConcepto == 0) {

                                            mensajeExito = 'El hecho del {variable1} es igual al valor del miembro del Total Patromonio.';
                                            mensajeError = 'El hecho del {variable1} debería ser igual al valor del miembro del Total Patromonio.';
                                            expresion = 'bignumber(variable1) == bignumber(variable2)';
                                        }

                                        var IdItemMiembro = "";
                                        var QNameItemMiembro = "";
                                        if (nombreVariable == "variable1") {
                                            IdItemMiembro = "ifrs-full:EquityMember";
                                            QNameItemMiembro = 'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:EquityMember';

                                            
                                        } else if (nombreVariable == "variable2") {
                                            IdItemMiembro = "ifrs-full:EquityAttributableToOwnersOfParentMember";
                                            QNameItemMiembro = 'http://xbrl.ifrs.org/taxonomy/2014-03-05/' + IdItemMiembro;
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
                "Acum_Actual": {
                    "Id": "Acum_Actual",
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
                "Acumulado_anio_anterior": {
                    "Id": "Acumulado_anio_anterior",
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
                "Context_Instant_RetainedEarningsMember": {
                    "Id": "Context_Instant_RetainedEarningsMember",
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
                "Context_Instant_OtherComprehensiveIncomeMember": {
                    "Id": "Context_Instant_OtherComprehensiveIncomeMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_deuda:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_deuda_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/2015-06-30/deuda:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherReservesMember": {
                    "Id": "Context_Instant_OtherReservesMember",
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
                "Instante_Actual": {
                    "Id": "Instante_Actual",
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
                "Context_Instant_RetainedEarningsMember_2": {
                    "Id": "Context_Instant_RetainedEarningsMember_2",
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
                "Context_Instant_OtherComprehensiveIncomeMember_2": {
                    "Id": "Context_Instant_OtherComprehensiveIncomeMember_2",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_deuda:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_deuda_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/2015-06-30/deuda:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherReservesMember_2": {
                    "Id": "Context_Instant_OtherReservesMember_2",
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
                "Context_Instant_EquityAttributableToOwnersOfParentMember_2": {
                    "Id": "Context_Instant_EquityAttributableToOwnersOfParentMember_2",
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
                "Instante_fin_ejercicio_anterior": {
                    "Id": "Instante_fin_ejercicio_anterior",
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
                "Context_Instant_IssuedCapitalMember_2": {
                    "Id": "Context_Instant_IssuedCapitalMember_2",
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
                "Context_Instant_RetainedEarningsMember_3": {
                    "Id": "Context_Instant_RetainedEarningsMember_3",
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
                "Context_Instant_OtherComprehensiveIncomeMember_3": {
                    "Id": "Context_Instant_OtherComprehensiveIncomeMember_3",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_deuda:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_deuda_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/2015-06-30/deuda:OtherComprehensiveIncomeMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "Context_Instant_OtherReservesMember_3": {
                    "Id": "Context_Instant_OtherReservesMember_3",
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
                "Instante_ejercicio_inicio_ejercicio_anterior": {
                    "Id": "Instante_ejercicio_inicio_ejercicio_anterior",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_deuda:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_deuda_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/2015-06-30/deuda:OtherComprehensiveIncomeMember",
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
                "Instante_ejercicio_anterior": {
                    "Id": "Instante_ejercicio_anterior",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_deuda:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_deuda_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/2015-06-30/deuda:OtherComprehensiveIncomeMember",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs-full:ComponentsOfEquityAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">mx_deuda:OtherComprehensiveIncomeMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ifrs-full_ComponentsOfEquityAxis",
                            "IdItemMiembro": "mx_deuda_OtherComprehensiveIncomeMember",
                            "QNameDimension": "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis",
                            "QNameItemMiembro": "http://www.bmv.com.mx/2015-06-30/deuda:OtherComprehensiveIncomeMember",
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
                "A183459bc-75fc-443a-a11e-659000f9d890": {
                    "Id": "A183459bc-75fc-443a-a11e-659000f9d890",
                    "IdConcepto": "mx_deuda_OtherComprehensiveIncomeMember",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "A3a987fdf-cd91-4f87-bac4-c58eddb07eff": {
                    "Id": "A3a987fdf-cd91-4f87-bac4-c58eddb07eff",
                    "IdConcepto": "mx_deuda_OtherComprehensiveIncomeMember",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "Ad1a95ae2-de5c-410d-a802-b59e06b5ee7f": {
                    "Id": "Ad1a95ae2-de5c-410d-a802-b59e06b5ee7f",
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
                "A3bd1d1ce-4f92-4249-a26b-c93536126cb8": {
                    "Id": "A3bd1d1ce-4f92-4249-a26b-c93536126cb8",
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
                "A47b8e276-9bef-4be2-b598-247edf56bc1b": {
                    "Id": "A47b8e276-9bef-4be2-b598-247edf56bc1b",
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
                "Ae48160a2-c3d8-4365-b120-26585ac835db": {
                    "Id": "Ae48160a2-c3d8-4365-b120-26585ac835db",
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
                "A2e82c326-e8f9-4097-8b66-60c4b79cfadc": {
                    "Id": "A2e82c326-e8f9-4097-8b66-60c4b79cfadc",
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
                "A86309731-4b90-4048-8c3e-179069ec3aa2": {
                    "Id": "A86309731-4b90-4048-8c3e-179069ec3aa2",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Instante_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac3366f8f-5795-40ae-b900-12d6bb0450c8": {
                    "Id": "Ac3366f8f-5795-40ae-b900-12d6bb0450c8",
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
                "A782490cb-0ae9-4005-8429-9922721bbad2": {
                    "Id": "A782490cb-0ae9-4005-8429-9922721bbad2",
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
                "Aca9f972a-621a-4124-afda-9c663eb69f94": {
                    "Id": "Aca9f972a-621a-4124-afda-9c663eb69f94",
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
                "A38f724c5-3479-4aeb-bd67-656a0b6e797b": {
                    "Id": "A38f724c5-3479-4aeb-bd67-656a0b6e797b",
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
                "A3eedd4a5-a611-48f4-add4-d63b121d43e4": {
                    "Id": "A3eedd4a5-a611-48f4-add4-d63b121d43e4",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Instante_fin_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab17a135e-d68d-4b0a-a68a-46c34b4cf33e": {
                    "Id": "Ab17a135e-d68d-4b0a-a68a-46c34b4cf33e",
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
                "A250a0536-9fe2-479a-a272-afca17fdbec6": {
                    "Id": "A250a0536-9fe2-479a-a272-afca17fdbec6",
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
                "A6fffc557-62bd-4a23-9c63-b4024b525d4d": {
                    "Id": "A6fffc557-62bd-4a23-9c63-b4024b525d4d",
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
                "A09025cd8-a1a8-4721-a7eb-f5f4a1c82bab": {
                    "Id": "A09025cd8-a1a8-4721-a7eb-f5f4a1c82bab",
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
                "A4b4ece9a-54b7-4ba5-9642-ce0a6b18b1c7": {
                    "Id": "A4b4ece9a-54b7-4ba5-9642-ce0a6b18b1c7",
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
                "Ab88c4018-33cc-4b34-85a3-d9fb13b30005": {
                    "Id": "Ab88c4018-33cc-4b34-85a3-d9fb13b30005",
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
                "Ad6b964cc-cba2-4556-b6e5-e2dc507a0776": {
                    "Id": "Ad6b964cc-cba2-4556-b6e5-e2dc507a0776",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Instante_ejercicio_inicio_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A24e57571-26bb-42bc-b91b-56adfbc9e048": {
                    "Id": "A24e57571-26bb-42bc-b91b-56adfbc9e048",
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
                "A4ba9ccda-0685-4ec6-a674-f1fd3aec18a4": {
                    "Id": "A4ba9ccda-0685-4ec6-a674-f1fd3aec18a4",
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
                "A63b98576-066a-429c-82e8-cf4c4d8e654b": {
                    "Id": "A63b98576-066a-429c-82e8-cf4c4d8e654b",
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
                "A8452a732-19bb-47b4-8d51-00a8021dcae0": {
                    "Id": "A8452a732-19bb-47b4-8d51-00a8021dcae0",
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
                "A9f873245-bc46-4c83-b7b9-7b9ded0ba77e": {
                    "Id": "A9f873245-bc46-4c83-b7b9-7b9ded0ba77e",
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
                "A30127c64-98d0-4e9b-8d57-8512307d787b": {
                    "Id": "A30127c64-98d0-4e9b-8d57-8512307d787b",
                    "IdConcepto": "ifrs-full_Equity",
                    "IdContextoPlantilla": "Instante_ejercicio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac560c941-5987-43cf-a312-9f4ce8781f18": {
                    "Id": "Ac560c941-5987-43cf-a312-9f4ce8781f18",
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
                "A0a85b103-5221-417c-b6cc-65cb22d69857": {
                    "Id": "A0a85b103-5221-417c-b6cc-65cb22d69857",
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
                "Afe7e0807-6727-4c2b-88fd-f877613f9f01": {
                    "Id": "Afe7e0807-6727-4c2b-88fd-f877613f9f01",
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
                "Ace481cd4-f511-4c6f-9c3d-9828288311f9": {
                    "Id": "Ace481cd4-f511-4c6f-9c3d-9828288311f9",
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
                "Ae840dbf7-59c1-443d-b371-1b1336e358db": {
                    "Id": "Ae840dbf7-59c1-443d-b371-1b1336e358db",
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
                "Ad04b35ea-3b21-46b6-9c2d-f6a63215391c": {
                    "Id": "Ad04b35ea-3b21-46b6-9c2d-f6a63215391c",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A89f5d286-c75e-44ca-8347-d48aef815bd7": {
                    "Id": "A89f5d286-c75e-44ca-8347-d48aef815bd7",
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
                "A2c45efb1-dfda-4c0a-a5dc-decb9b64e45f": {
                    "Id": "A2c45efb1-dfda-4c0a-a5dc-decb9b64e45f",
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
                "A8f051b3c-c998-417d-b3d3-98035b56d5d3": {
                    "Id": "A8f051b3c-c998-417d-b3d3-98035b56d5d3",
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
                "A6b9f67a8-f075-4d90-b606-b291832c104d": {
                    "Id": "A6b9f67a8-f075-4d90-b606-b291832c104d",
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
                "A55fc7056-9ea3-472e-affa-2db1255751f1": {
                    "Id": "A55fc7056-9ea3-472e-affa-2db1255751f1",
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
                "A96804bcc-98d5-46cc-8ca5-9c98ee3e68a7": {
                    "Id": "A96804bcc-98d5-46cc-8ca5-9c98ee3e68a7",
                    "IdConcepto": "ifrs-full_ProfitLoss",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A91851fe8-9c6c-492b-90a5-f023056287fa": {
                    "Id": "A91851fe8-9c6c-492b-90a5-f023056287fa",
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
                "A93f1a398-76b4-41e0-85c1-80c65a54675c": {
                    "Id": "A93f1a398-76b4-41e0-85c1-80c65a54675c",
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
                "A319944ac-beb1-44aa-ad87-b652cbeb218d": {
                    "Id": "A319944ac-beb1-44aa-ad87-b652cbeb218d",
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
                "A4f9173fe-70af-477d-958f-efdd6f519a67": {
                    "Id": "A4f9173fe-70af-477d-958f-efdd6f519a67",
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
                "Af22eeb04-4d61-44df-bf42-14f5927355e6": {
                    "Id": "Af22eeb04-4d61-44df-bf42-14f5927355e6",
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
                "A8ea1e999-738c-4e08-8afb-2e368bd39a9e": {
                    "Id": "A8ea1e999-738c-4e08-8afb-2e368bd39a9e",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A88c6b5a7-bd9f-4a6e-8140-88ef222354aa": {
                    "Id": "A88c6b5a7-bd9f-4a6e-8140-88ef222354aa",
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
                "A547e5953-70fa-4060-9315-1caac7300d4b": {
                    "Id": "A547e5953-70fa-4060-9315-1caac7300d4b",
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
                "Aca4b2711-3cf9-44a3-a2e2-8b690eb61932": {
                    "Id": "Aca4b2711-3cf9-44a3-a2e2-8b690eb61932",
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
                "A8daff0cb-f13f-4c19-98f3-094658de5c1b": {
                    "Id": "A8daff0cb-f13f-4c19-98f3-094658de5c1b",
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
                "A0bef275c-7289-4b33-b27f-6e54324f9ec2": {
                    "Id": "A0bef275c-7289-4b33-b27f-6e54324f9ec2",
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
                "A73973995-8e70-4a24-ad82-b3e92468ec68": {
                    "Id": "A73973995-8e70-4a24-ad82-b3e92468ec68",
                    "IdConcepto": "ifrs-full_OtherComprehensiveIncome",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abf253c41-61be-4130-8147-782b5bcf3f76": {
                    "Id": "Abf253c41-61be-4130-8147-782b5bcf3f76",
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
                "Ac07a63fb-f841-4fd1-9624-ed9173b6ede6": {
                    "Id": "Ac07a63fb-f841-4fd1-9624-ed9173b6ede6",
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
                "Afb9187cb-1024-4154-b158-e17caa52fd4c": {
                    "Id": "Afb9187cb-1024-4154-b158-e17caa52fd4c",
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
                "A798dc62e-a395-47d6-be18-6dcddc69a9f0": {
                    "Id": "A798dc62e-a395-47d6-be18-6dcddc69a9f0",
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
                "A2448a9da-989a-49c7-9d7d-5ebfbff8159e": {
                    "Id": "A2448a9da-989a-49c7-9d7d-5ebfbff8159e",
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
                "A98d4355e-6c29-46c6-a411-f4b01988d537": {
                    "Id": "A98d4355e-6c29-46c6-a411-f4b01988d537",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3bc1402e-223e-47be-b35c-b2e7f6e79a80": {
                    "Id": "A3bc1402e-223e-47be-b35c-b2e7f6e79a80",
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
                "Ad9d21b68-c352-4091-aff4-0c3dfc3d8b5f": {
                    "Id": "Ad9d21b68-c352-4091-aff4-0c3dfc3d8b5f",
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
                "A432c6196-b292-4591-b3e8-0015bda25172": {
                    "Id": "A432c6196-b292-4591-b3e8-0015bda25172",
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
                "A6ef10218-7642-4e0a-b54e-cc77d170a140": {
                    "Id": "A6ef10218-7642-4e0a-b54e-cc77d170a140",
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
                "A9fb0a121-2ce9-4447-a3dc-58d000cbdd62": {
                    "Id": "A9fb0a121-2ce9-4447-a3dc-58d000cbdd62",
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
                "A07922d35-fd04-4f3d-a105-8ecdb9dd8727": {
                    "Id": "A07922d35-fd04-4f3d-a105-8ecdb9dd8727",
                    "IdConcepto": "ifrs-full_ComprehensiveIncome",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A8f8e9fb2-8806-41ab-b9bf-0f3deacc78e7": {
                    "Id": "A8f8e9fb2-8806-41ab-b9bf-0f3deacc78e7",
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
                "A18c9c2cd-dbec-477c-a2ab-1b78fa180119": {
                    "Id": "A18c9c2cd-dbec-477c-a2ab-1b78fa180119",
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
                "Aa87536e8-47ad-460c-8765-11a3b8137c54": {
                    "Id": "Aa87536e8-47ad-460c-8765-11a3b8137c54",
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
                "A8f2f98c7-bc23-4707-b8e2-44607c22ab8c": {
                    "Id": "A8f2f98c7-bc23-4707-b8e2-44607c22ab8c",
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
                "A613c0559-f5db-4bee-b6b4-9d79de5df278": {
                    "Id": "A613c0559-f5db-4bee-b6b4-9d79de5df278",
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
                "A31bdc8d7-3eea-42c0-b02a-4eb9cc04c15f": {
                    "Id": "A31bdc8d7-3eea-42c0-b02a-4eb9cc04c15f",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A98cb4b08-3c07-4d32-b6bc-29aea1534a36": {
                    "Id": "A98cb4b08-3c07-4d32-b6bc-29aea1534a36",
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
                "A040eb613-5691-4af4-85a5-5cd4b6e4c502": {
                    "Id": "A040eb613-5691-4af4-85a5-5cd4b6e4c502",
                    "IdConcepto": "ifrs-full_IssueOfEquity",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4fec002e-b86c-401d-b45f-f68ccb5b5516": {
                    "Id": "A4fec002e-b86c-401d-b45f-f68ccb5b5516",
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
                "Aeebb8ec1-0d52-4462-b4cd-a13b6db8d13e": {
                    "Id": "Aeebb8ec1-0d52-4462-b4cd-a13b6db8d13e",
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
                "Ae151e7e8-5d5d-4aa3-b507-d1f9b0841016": {
                    "Id": "Ae151e7e8-5d5d-4aa3-b507-d1f9b0841016",
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
                "A932f200d-a317-43bf-999a-8f3410b82ee4": {
                    "Id": "A932f200d-a317-43bf-999a-8f3410b82ee4",
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
                "A30f79795-1518-4718-a0d7-3f02732ceb1d": {
                    "Id": "A30f79795-1518-4718-a0d7-3f02732ceb1d",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A4046ec6e-217c-46bf-98f3-cc730b67bc89": {
                    "Id": "A4046ec6e-217c-46bf-98f3-cc730b67bc89",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ad0ef3b3f-4a31-4010-b36b-0534030d4b47": {
                    "Id": "Ad0ef3b3f-4a31-4010-b36b-0534030d4b47",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af84df811-21a2-4338-b881-d85a4f3677ec": {
                    "Id": "Af84df811-21a2-4338-b881-d85a4f3677ec",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A995cfeed-78b4-4406-a49f-9b87d3abf813": {
                    "Id": "A995cfeed-78b4-4406-a49f-9b87d3abf813",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A69161799-670a-4bda-893f-20e060a955c2": {
                    "Id": "A69161799-670a-4bda-893f-20e060a955c2",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aff9a0f7f-fe7c-4643-92bc-937126834fa8": {
                    "Id": "Aff9a0f7f-fe7c-4643-92bc-937126834fa8",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A15474597-9ff0-444b-9aa7-c87b7ecce868": {
                    "Id": "A15474597-9ff0-444b-9aa7-c87b7ecce868",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A0a74dbc7-21eb-4c3e-b985-710a82aa39dd": {
                    "Id": "A0a74dbc7-21eb-4c3e-b985-710a82aa39dd",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ae88b748d-1811-4413-a69d-dbcf47c437ff": {
                    "Id": "Ae88b748d-1811-4413-a69d-dbcf47c437ff",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A056195bd-19c6-41ba-9835-09bca11234d6": {
                    "Id": "A056195bd-19c6-41ba-9835-09bca11234d6",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A32150a16-4d3b-438f-b16f-5d56c87f0987": {
                    "Id": "A32150a16-4d3b-438f-b16f-5d56c87f0987",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A172d80c4-30a4-4707-bcc7-983c91c3fa6f": {
                    "Id": "A172d80c4-30a4-4707-bcc7-983c91c3fa6f",
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
                "A2e11820b-2211-4467-b274-f3fbc9309dd9": {
                    "Id": "A2e11820b-2211-4467-b274-f3fbc9309dd9",
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
                "Aea43bb21-b983-44c2-8d46-c78fa01f74a4": {
                    "Id": "Aea43bb21-b983-44c2-8d46-c78fa01f74a4",
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
                "A85900b70-cfd6-4a84-be42-432a0000d1ba": {
                    "Id": "A85900b70-cfd6-4a84-be42-432a0000d1ba",
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
                "A05bb3989-117e-46ed-bcd2-2028fcb09f73": {
                    "Id": "A05bb3989-117e-46ed-bcd2-2028fcb09f73",
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
                "A31a9c7fb-2460-484a-a860-8748f4fcbb1d": {
                    "Id": "A31a9c7fb-2460-484a-a860-8748f4fcbb1d",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A23dcdbc0-710e-4a2d-95cb-9b7bf10249e4": {
                    "Id": "A23dcdbc0-710e-4a2d-95cb-9b7bf10249e4",
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
                "A7a0a19ac-f620-4481-abb8-7fa177a30ef5": {
                    "Id": "A7a0a19ac-f620-4481-abb8-7fa177a30ef5",
                    "IdConcepto": "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac72155bf-9db6-4301-b201-e1d243127620": {
                    "Id": "Ac72155bf-9db6-4301-b201-e1d243127620",
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
                "A24d31605-a065-485c-8ec7-cdff8db8839b": {
                    "Id": "A24d31605-a065-485c-8ec7-cdff8db8839b",
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
                "A5080fae8-8130-4c37-9a7c-f0fa2f59a184": {
                    "Id": "A5080fae8-8130-4c37-9a7c-f0fa2f59a184",
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
                "A002ceaf1-9f16-4d64-88c5-85fae36b44b6": {
                    "Id": "A002ceaf1-9f16-4d64-88c5-85fae36b44b6",
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
                "A2adf7b4c-b4ec-496a-94c2-3153e9bdd961": {
                    "Id": "A2adf7b4c-b4ec-496a-94c2-3153e9bdd961",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A09c98432-ad96-4b44-8d1f-60f751d6fbc7": {
                    "Id": "A09c98432-ad96-4b44-8d1f-60f751d6fbc7",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A39140bed-5f04-442c-b7ec-652f08c45c50": {
                    "Id": "A39140bed-5f04-442c-b7ec-652f08c45c50",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A84c1b7bf-7c3d-4989-8668-0e054162991d": {
                    "Id": "A84c1b7bf-7c3d-4989-8668-0e054162991d",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aa5ee998e-9ffc-4c6f-8133-f9d3dd299601": {
                    "Id": "Aa5ee998e-9ffc-4c6f-8133-f9d3dd299601",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac9c581ee-fe46-41ed-a03e-ad058f0ac1ae": {
                    "Id": "Ac9c581ee-fe46-41ed-a03e-ad058f0ac1ae",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ab101e766-a21f-488c-b197-d1a4b02227f2": {
                    "Id": "Ab101e766-a21f-488c-b197-d1a4b02227f2",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A350ee954-6ad0-4939-a498-0de93593fdc3": {
                    "Id": "A350ee954-6ad0-4939-a498-0de93593fdc3",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A2af055c6-b22f-4b93-8838-4c9ab526f461": {
                    "Id": "A2af055c6-b22f-4b93-8838-4c9ab526f461",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Af21d730f-9e91-4f1f-a599-0da8c12a3d11": {
                    "Id": "Af21d730f-9e91-4f1f-a599-0da8c12a3d11",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Aca6fa3f6-67fe-422f-a0a7-0339e5bda4e3": {
                    "Id": "Aca6fa3f6-67fe-422f-a0a7-0339e5bda4e3",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac483d494-a942-4223-abf1-9ea5c7269ae4": {
                    "Id": "Ac483d494-a942-4223-abf1-9ea5c7269ae4",
                    "IdConcepto": "mx_deuda_IncrementsForContributionsToVentureCapital",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A55da54da-d71b-4bde-9f4c-beb840ab0fc2": {
                    "Id": "A55da54da-d71b-4bde-9f4c-beb840ab0fc2",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1ad504a2-1330-48fa-a798-4b54dc442e65": {
                    "Id": "A1ad504a2-1330-48fa-a798-4b54dc442e65",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A1304adb0-0ca1-456c-a508-3418b3b595c3": {
                    "Id": "A1304adb0-0ca1-456c-a508-3418b3b595c3",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6ca97f2e-3925-4fab-bafc-0ce7306f7588": {
                    "Id": "A6ca97f2e-3925-4fab-bafc-0ce7306f7588",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A9d4762e4-67be-4d62-8230-4d4b48bb9d05": {
                    "Id": "A9d4762e4-67be-4d62-8230-4d4b48bb9d05",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ac70d9b9f-e02e-4a65-9b7f-6489b6342c94": {
                    "Id": "Ac70d9b9f-e02e-4a65-9b7f-6489b6342c94",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A3810311a-0fc1-465e-849f-0164810e6c23": {
                    "Id": "A3810311a-0fc1-465e-849f-0164810e6c23",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_IssuedCapitalMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A05f938c2-84c6-406b-b49d-b8bab53359cc": {
                    "Id": "A05f938c2-84c6-406b-b49d-b8bab53359cc",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A443a0437-f221-447e-88b3-e8767d497841": {
                    "Id": "A443a0437-f221-447e-88b3-e8767d497841",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_EquityAttributableToOwnersOfParentMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6e97cb90-7ddd-4d0e-a33b-e5cb660e7a3d": {
                    "Id": "A6e97cb90-7ddd-4d0e-a33b-e5cb660e7a3d",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_OtherReservesMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Ade7dd994-1dac-4dea-ba53-d0d53989d2b4": {
                    "Id": "Ade7dd994-1dac-4dea-ba53-d0d53989d2b4",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_OtherComprehensiveIncomeMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7508c951-8cae-4191-aeba-981eb093dcdd": {
                    "Id": "A7508c951-8cae-4191-aeba-981eb093dcdd",
                    "IdConcepto": "mx_deuda_WithdrawalOfResourcesDecreasedByResidualBalances",
                    "IdContextoPlantilla": "Context_Duration_RetainedEarningsMember_2",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A813b2e25-2e15-4350-b417-b9d634d354f6": {
                    "Id": "A813b2e25-2e15-4350-b417-b9d634d354f6",
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
                "A120f8914-3ed7-4748-a8ac-c3acd16ca145": {
                    "Id": "A120f8914-3ed7-4748-a8ac-c3acd16ca145",
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
                "A90fcd401-f791-4647-a500-6f93e2617ab6": {
                    "Id": "A90fcd401-f791-4647-a500-6f93e2617ab6",
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
                "Add7b9204-615a-4435-864d-b90e32e42ed8": {
                    "Id": "Add7b9204-615a-4435-864d-b90e32e42ed8",
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
                "A99e12de0-dfb4-4711-aaea-e8aa0e74b5da": {
                    "Id": "A99e12de0-dfb4-4711-aaea-e8aa0e74b5da",
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
                "A94c48f0d-5e4c-4927-a4ff-33c82cec8be3": {
                    "Id": "A94c48f0d-5e4c-4927-a4ff-33c82cec8be3",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Acum_Actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": "MXN",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "Abaa1b776-3e16-4ec1-a2d3-49c80f1964f1": {
                    "Id": "Abaa1b776-3e16-4ec1-a2d3-49c80f1964f1",
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
                "Ab2e86783-9381-4914-84b8-65290242acfd": {
                    "Id": "Ab2e86783-9381-4914-84b8-65290242acfd",
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
                "A83690886-1f43-4207-93e4-df9eabfc57c0": {
                    "Id": "A83690886-1f43-4207-93e4-df9eabfc57c0",
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
                "Aec41719b-8dd4-41b0-9e5e-dd6ba31cbc28": {
                    "Id": "Aec41719b-8dd4-41b0-9e5e-dd6ba31cbc28",
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
                "A0a12e5fb-646f-42ce-846c-6eb470ed640a": {
                    "Id": "A0a12e5fb-646f-42ce-846c-6eb470ed640a",
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
                "A95d6dabe-5658-4fe9-9581-53f82fad9cf1": {
                    "Id": "A95d6dabe-5658-4fe9-9581-53f82fad9cf1",
                    "IdConcepto": "ifrs-full_ChangesInEquity",
                    "IdContextoPlantilla": "Acumulado_anio_anterior",
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