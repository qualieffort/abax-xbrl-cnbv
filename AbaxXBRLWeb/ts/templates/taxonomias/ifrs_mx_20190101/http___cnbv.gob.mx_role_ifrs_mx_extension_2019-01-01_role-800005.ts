///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://cnbv.gob.mx/role/ifrs/mx_extension_2019-01-01_role-800005
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_mx_extension_2019_01_01_role_800005 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_800005
         */
        constructor() {

            this.ListadoDeFormulas = {
                //Se integran formulas de < Value Assertion>  ID : VA_800005_800200_01: Ingresos = Importe de ingresos[dimensional]
                'formula107': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula107',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El importe del hecho del {variable1} son iguales a el total de ingresos.',
                        MensajeError: 'El importe del hecho del {variable1} deberían ser iguales a el total de ingresos.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosTotalesMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosTotalesMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: 'TODOS'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs-full_Revenue',
                                PuedeCrearse: false,
                                PuedeEliminarse: false
                            })
                        }
                    }),
                //Se integran formulas de < Value Assertion>  ID : VA_800005_01:  Importe de ingresos = Importe de ingresos + Importe de ingresos + Importe de ingresos[dimensional]
                'formula108': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula108',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3) + bignumber(variable4)',
                        MensajeExito: 'El importe del hecho del {variable1} es igual a la suma de los importes de ingreso.',
                        MensajeError: 'El importe del hecho del {variable1} debería ser igual a la suma de los importes de ingreso.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosTotalesMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosTotalesMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: 'TODOS'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosNacionalesMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosNacionalesMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: 'TODOS'
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosPorExportacionMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosPorExportacionMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: 'TODOS'
                                    }
                                ]
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosDeSubsidiariasEnElExtranjeroMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: 'TODOS'
                                    }
                                ]
                            })

                        }
                    }),
                //Fabrica las formulas que validan el total de ingresos por producto de cada producto.
                'formulaValidaTotalIngresosPorProductos': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formulaValidaTotalIngresosPorProductos',
                        EvaluacionDinamica: {
                            Evaluar: function (servicioAbax: services.AbaxXBRLServices): void {
                                var documentoInstnacia = servicioAbax.getDocumentoInstancia();
                                var idsHechos = documentoInstnacia.HechosPorIdConcepto['ifrs_mx-cor_20141205_ImporteDeIngresos'];
                                var regExpItem = /\>.+\</i;
                                var regExpBorders = /[\>\<]/g
                                for (var indexHecho: number = 0; indexHecho < idsHechos.length; indexHecho++) {
                                    var idHecho = idsHechos[indexHecho];
                                    var hecho = documentoInstnacia.HechosPorId[idHecho];
                                    var contexto = documentoInstnacia.ContextosPorId[hecho.IdContexto];
                                    var valoresDimension = contexto.ContieneInformacionDimensional ? contexto.ValoresDimension : contexto.Entidad && contexto.Entidad.ContieneInformacionDimensional ? contexto.Entidad.ValoresDimension : undefined;
                                    if (!valoresDimension || !valoresDimension.length || valoresDimension.length == 0) {
                                        continue;
                                    }
                                    var marca: string = undefined;
                                    var producto: string = undefined;
                                    for (var indexDimension: number = 0; indexDimension < valoresDimension.length; indexDimension++) {
                                        var dimension = valoresDimension[indexDimension];
                                        if (dimension.QNameDimension == 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje') {
                                            marca = dimension.ElementoMiembroTipificado.match(regExpItem)[0].replace(regExpBorders, '');
                                        }
                                        if (dimension.QNameDimension == 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje') {
                                            producto = dimension.ElementoMiembroTipificado.match(regExpItem)[0].replace(regExpBorders, '');
                                        }
                                    }
                                    if (marca == 'TODAS' || producto == 'TODOS') {
                                       continue;
                                    }

                                    if (marca && producto) {
                                        var epacios = new RegExp("[ \t\r\n]", "g");
                                        var idFormula = "formula108_";
                                        idFormula += marca.trim().replace(epacios, "_");
                                        idFormula += '_' + producto.trim().replace(epacios, "_");

                                        var formula = servicioAbax.obtenDefinicionFormulaPorId(idFormula);
                                        var $util = shared.service.AbaxXBRLUtilsService;
                                        if (!formula) {
                                            formula = new model.DefinicionFormula().deserialize(
                                                {
                                                    Id: idFormula,
                                                    TipoFormula: model.TipoFormula.ValueAssertion,
                                                    Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3) + bignumber(variable4)',
                                                    MensajeExito: 'El importe del hecho del {variable1} es igual a la suma de los importes de ingreso del producto "' + producto + '" de la maraca "' + marca + '".',
                                                    MensajeError: 'El importe del hecho del {variable1} debería ser igual a la suma de los importes de ingreso del producto "' + producto + '" de la maraca "' + marca + '".',
                                                    VariablesCoincidenPeriodo: true,
                                                    DefinicionVariables: {
                                                        'variable1': new model.DefinicionVariableFormula().deserialize({
                                                            Id: 'variable1',
                                                            IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                                            PuedeCrearse: false,
                                                            PuedeEliminarse: false,
                                                            ValorFallback: '0',
                                                            FiltrosDimension: [
                                                                {
                                                                    Explicita: true,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosTotalesMiembro',
                                                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosTotalesMiembro'
                                                                },
                                                                {
                                                                    Explicita: false,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(marca) + '</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                                                    ValorTipificado: $util.xmlEncode(marca)
                                                                },
                                                                {
                                                                    Explicita: false,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(producto) + '</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                                                    ValorTipificado: $util.xmlEncode(producto)
                                                                }
                                                            ]
                                                        }),
                                                        'variable2': new model.DefinicionVariableFormula().deserialize({
                                                            Id: 'variable2',
                                                            IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                                            PuedeCrearse: false,
                                                            PuedeEliminarse: false,
                                                            ValorFallback: '0',
                                                            FiltrosDimension: [
                                                                {
                                                                    Explicita: true,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosNacionalesMiembro',
                                                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosNacionalesMiembro'
                                                                },
                                                                {
                                                                    Explicita: false,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(marca) + '</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                                                    ValorTipificado: $util.xmlEncode(marca)
                                                                },
                                                                {
                                                                    Explicita: false,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(producto) + '</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                                                    ValorTipificado: $util.xmlEncode(producto)
                                                                }
                                                            ]
                                                        }),
                                                        'variable3': new model.DefinicionVariableFormula().deserialize({
                                                            Id: 'variable3',
                                                            IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                                            PuedeCrearse: false,
                                                            PuedeEliminarse: false,
                                                            ValorFallback: '0',
                                                            FiltrosDimension: [
                                                                {
                                                                    Explicita: true,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosPorExportacionMiembro',
                                                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosPorExportacionMiembro'
                                                                },
                                                                {
                                                                    Explicita: false,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(marca) + '</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                                                    ValorTipificado: $util.xmlEncode(marca)
                                                                },
                                                                {
                                                                    Explicita: false,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(producto) + '</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                                                    ValorTipificado: $util.xmlEncode(producto)
                                                                }
                                                            ]
                                                        }),
                                                        'variable4': new model.DefinicionVariableFormula().deserialize({
                                                            Id: 'variable4',
                                                            IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                                            PuedeCrearse: false,
                                                            PuedeEliminarse: false,
                                                            ValorFallback: '0',
                                                            FiltrosDimension: [
                                                                {
                                                                    Explicita: true,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosDeSubsidiariasEnElExtranjeroMiembro',
                                                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro'
                                                                },
                                                                {
                                                                    Explicita: false,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(marca) + '</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                                                    ValorTipificado: $util.xmlEncode(marca)
                                                                },
                                                                {
                                                                    Explicita: false,
                                                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(producto) + '</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                                                    ValorTipificado: $util.xmlEncode(producto)
                                                                }
                                                            ]
                                                        })

                                                    }
                                                });
                                            servicioAbax.agregaFormulaPlantilla(formula);
                                            servicioAbax.evaluaFormula(formula.Id);
                                        }
                                    }

                                }
                            }
                        }
                    }),

                'formulaSumaMarcas1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formulaSumaMarcas1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del los ingresos de los productos reportados en el miembro Ingresos nacionales [miembro] ',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a la suma del los ingresos de los productos reportados en el miembro Ingresos nacionales [miembro] ',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        EsAdvertencia: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                EsResultado: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension: [{
                                    Explicita: true,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosNacionalesMiembro',
                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosNacionalesMiembro'
                                    },
                                    {
                                    Explicita: false,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                    ValorTipificado: 'TODAS'
                                    },
                                    {
                                    Explicita: false,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                    ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                    ValorTipificado: 'TODOS'
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                EsDinamica: true,
                                FiltrosDimension: [{
                                    Explicita: true,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosNacionalesMiembro',
                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosNacionalesMiembro'
                                }, {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS',
                                        DistintoDe: true
                                    }]
                            })
                        }
                    }),
                'formulaSumaMarcas2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formulaSumaMarcas2',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del los ingresos de los productos reportados en el miembro Ingresos por exportación [miembro] ',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a la suma del los ingresos de los productos reportados en el miembro Ingresos por exportación [miembro] ',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        EsAdvertencia: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                EsResultado: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension: [{
                                    Explicita: true,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosPorExportacionMiembro',
                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosPorExportacionMiembro'
                                },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: 'TODOS'
                                    }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                EsDinamica: true,
                                FiltrosDimension: [{
                                    Explicita: true,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosPorExportacionMiembro',
                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosPorExportacionMiembro'
                                }, {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS',
                                        DistintoDe: true
                                    }]
                            })
                        }
                    }),
                'formulaSumaMarcas3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formulaSumaMarcas3',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del los ingresos de los productos reportados en el miembro Ingresos de subsidiarias en el extranjero [miembro] ',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a la suma del los ingresos de los productos reportados en el miembro Ingresos de subsidiarias en el extranjero [miembro] ',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        EsAdvertencia: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                EsResultado: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension: [{
                                    Explicita: true,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosDeSubsidiariasEnElExtranjeroMiembro',
                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro'
                                },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: 'TODOS'
                                    }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                EsDinamica: true,
                                FiltrosDimension: [{
                                    Explicita: true,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosDeSubsidiariasEnElExtranjeroMiembro',
                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro'
                                }, {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS',
                                        DistintoDe: true
                                    }]
                            })
                        }
                    }),
                'formulaSumaMarcas4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formulaSumaMarcas3',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del los ingresos de los productos reportados en el miembro Ingresos totales [miembro] ',
                        MensajeError: 'El hecho reportado para el {variable1} debe ser igual a la suma del los ingresos de los productos reportados en el miembro Ingresos totales [miembro] ',
                        VariablesCoincidenPeriodo: true,
                        ExcepcionSinHijos: true,
                        EsAdvertencia: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                EsResultado: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension: [{
                                    Explicita: true,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosTotalesMiembro',
                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosTotalesMiembro'
                                },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: 'TODOS'
                                    }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                EsDinamica: true,
                                FiltrosDimension: [{
                                    Explicita: true,
                                    QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                    IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                    QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosTotalesMiembro',
                                    IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosTotalesMiembro'
                                }, {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: 'TODAS',
                                        DistintoDe: true
                                    }]
                            })
                        }
                    })

            };

            this.ContextosPlantillaPorId = {
                "trimestre_actual_total_ingresos_total_marcas_total_productos": {
                    "Id": "trimestre_actual_total_ingresos_total_marcas_total_productos",
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
                    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:TipoDeIngresoEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:IngresosTotalesMiembro</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ifrs_mx-cor_20141205:PrincipalesMarcasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain></xbrldi:typedMember><xbrldi:typedMember dimension=\"ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain></xbrldi:typedMember></xbrli:segment>",
                    "ValoresDimension": [
							{
                                "Explicita": true,
                                "IdDimension": "ifrs_mx-cor_20141205_TipoDeIngresoEje",
                                "IdItemMiembro": "ifrs_mx-cor_20141205_IngresosTotalesMiembro",
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje",
                                "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosTotalesMiembro",
                                "ElementoMiembroTipificado": null
                            },
                            {
                                "Explicita": false,
                                "IdDimension": "ifrs_mx-cor_20141205_PrincipalesMarcasEje",
                                "IdItemMiembro": null,
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje",
                                "QNameItemMiembro": null,
                                "ElementoMiembroTipificado": "<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>"
                            },
                            {
                                "Explicita": false,
                                "IdDimension": "ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje",
                                "IdItemMiembro": null,
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje",
                                "QNameItemMiembro": null,
                                "ElementoMiembroTipificado": "<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>"
                            }
					]
                },
                "Context_Duration_IngresosNacionalesMiembro_TOTAL_TOTAL": {
                    "Id": "Context_Duration_IngresosNacionalesMiembro_TOTAL_TOTAL",
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
                        "ValoresDimension": [
                            
                        ]
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:TipoDeIngresoEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:IngresosNacionalesMiembro</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ifrs_mx-cor_20141205:PrincipalesMarcasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain></xbrldi:typedMember><xbrldi:typedMember dimension=\"ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain></xbrldi:typedMember></xbrli:segment>",
                    "ValoresDimension": [{
                                "Explicita": true,
                                "IdDimension": "ifrs_mx-cor_20141205_TipoDeIngresoEje",
                                "IdItemMiembro": "ifrs_mx-cor_20141205_IngresosNacionalesMiembro",
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje",
                                "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosNacionalesMiembro",
                                "ElementoMiembroTipificado": null
                            },
                            {
                                "Explicita": false,
                                "IdDimension": "ifrs_mx-cor_20141205_PrincipalesMarcasEje",
                                "IdItemMiembro": null,
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje",
                                "QNameItemMiembro": null,
                                "ElementoMiembroTipificado": "<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>"
                            },
                            {
                                "Explicita": false,
                                "IdDimension": "ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje",
                                "IdItemMiembro": null,
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje",
                                "QNameItemMiembro": null,
                                "ElementoMiembroTipificado": "<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>"
                            }]
                },
                "Context_Duration_IngresosPorExportacionMiembro_TOTAL_TOTAL": {
                    "Id": "Context_Duration_IngresosPorExportacionMiembro_TOTAL_TOTAL",
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
                        "ValoresDimension": [
                            
                        ]
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:TipoDeIngresoEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:IngresosPorExportacionMiembro</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ifrs_mx-cor_20141205:PrincipalesMarcasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain></xbrldi:typedMember><xbrldi:typedMember dimension=\"ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain></xbrldi:typedMember></xbrli:segment>",
                    "ValoresDimension": [
					{
                                "Explicita": true,
                                "IdDimension": "ifrs_mx-cor_20141205_TipoDeIngresoEje",
                                "IdItemMiembro": "ifrs_mx-cor_20141205_IngresosPorExportacionMiembro",
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje",
                                "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosPorExportacionMiembro",
                                "ElementoMiembroTipificado": null
                            },
                            {
                                "Explicita": false,
                                "IdDimension": "ifrs_mx-cor_20141205_PrincipalesMarcasEje",
                                "IdItemMiembro": null,
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje",
                                "QNameItemMiembro": null,
                                "ElementoMiembroTipificado": "<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>"
                            },
                            {
                                "Explicita": false,
                                "IdDimension": "ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje",
                                "IdItemMiembro": null,
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje",
                                "QNameItemMiembro": null,
                                "ElementoMiembroTipificado": "<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>"
                            }
					]
                },
                "Context_Duration_IngresosDeSubsidiariasEnElExtranjeroMiembro_TOTAL_TOTAL": {
                    "Id": "Context_Duration_IngresosDeSubsidiariasEnElExtranjeroMiembro_TOTAL_TOTAL",
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
                        "ValoresDimension": [
                            
                        ]
                    },
                    "ContieneInformacionDimensional": true,
                    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:TipoDeIngresoEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:IngresosDeSubsidiariasEnElExtranjeroMiembro</xbrldi:explicitMember><xbrldi:typedMember dimension=\"ifrs_mx-cor_20141205:PrincipalesMarcasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain></xbrldi:typedMember><xbrldi:typedMember dimension=\"ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\"><ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain></xbrldi:typedMember></xbrli:segment>",
                    "ValoresDimension": [
						{
                                "Explicita": true,
                                "IdDimension": "ifrs_mx-cor_20141205_TipoDeIngresoEje",
                                "IdItemMiembro": "ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro",
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje",
                                "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosDeSubsidiariasEnElExtranjeroMiembro",
                                "ElementoMiembroTipificado": null
                            },
                            {
                                "Explicita": false,
                                "IdDimension": "ifrs_mx-cor_20141205_PrincipalesMarcasEje",
                                "IdItemMiembro": null,
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje",
                                "QNameItemMiembro": null,
                                "ElementoMiembroTipificado": "<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODAS</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>"
                            },
                            {
                                "Explicita": false,
                                "IdDimension": "ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje",
                                "IdItemMiembro": null,
                                "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje",
                                "QNameItemMiembro": null,
                                "ElementoMiembroTipificado": "<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">TODOS</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>"
                            }
					]
                }
            };

            this.UnidadesPlantillaPorId = {
                "Peso_Mx": {
                    "Id": "Peso_Mx",
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
                "Ac53c1485-c468-47a9-bbf8-04d90332f49e": {
                    "Id": "Ac53c1485-c468-47a9-bbf8-04d90332f49e",
                    "IdConcepto": "ifrs_mx-cor_20141205_ImporteDeIngresos",
                    "IdContextoPlantilla": "trimestre_actual_total_ingresos_total_marcas_total_productos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A6519bf39-9bd3-4bc8-a100-83adbed489cd": {
                    "Id": "A6519bf39-9bd3-4bc8-a100-83adbed489cd",
                    "IdConcepto": "ifrs_mx-cor_20141205_ImporteDeIngresos",
                    "IdContextoPlantilla": "Context_Duration_IngresosNacionalesMiembro_TOTAL_TOTAL",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A710b15d5-8ad0-485a-93a5-9893b33b0327": {
                    "Id": "A710b15d5-8ad0-485a-93a5-9893b33b0327",
                    "IdConcepto": "ifrs_mx-cor_20141205_ImporteDeIngresos",
                    "IdContextoPlantilla": "Context_Duration_IngresosPorExportacionMiembro_TOTAL_TOTAL",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
                    "Decimales": "-3",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A7a665c9e-3026-4158-a5c6-ddb9da0117f4": {
                    "Id": "A7a665c9e-3026-4158-a5c6-ddb9da0117f4",
                    "IdConcepto": "ifrs_mx-cor_20141205_ImporteDeIngresos",
                    "IdContextoPlantilla": "Context_Duration_IngresosDeSubsidiariasEnElExtranjeroMiembro_TOTAL_TOTAL",
                    "Hechos": [],
                    "IdUnidadPlantilla": "Peso_Mx",
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