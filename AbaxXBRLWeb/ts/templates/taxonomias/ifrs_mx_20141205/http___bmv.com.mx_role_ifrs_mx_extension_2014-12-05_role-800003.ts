///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/mx_extension_2014-12-05_role-800003
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_800003 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_800003
         */
        constructor() {

            this.ListadoDeFormulas = {

                //Se integran formulas de < Value Assertion>  ID : VA_800003_01:  Total activo monetario = Activo monetario circulante + Activo monetario no circulante[dimensional]
                'formula44': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    }
                    )
                , 'formula44_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    })
                , 'formula44_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    })
                , 'formula44_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44_3',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    })
                , 'formula44_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44_4',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    }),
                //Se integran formulas de < Value Assertion>  ID : VA_800003_01:  Total activo monetario = Activo monetario circulante + Activo monetario no circulante[dimensional]
                'formula45': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula45',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    }
                    )
                , 'formula45_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    })
                , 'formula45_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    })
                , 'formula45_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44_3',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    })
                , 'formula45_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula44_4',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El hecho reportado para el {variable1} es igual a la suma del activo monetario circulante y activo monetario no circulante.',
                        MensajeError: 'El hecho reportado para el {variable1} debería ser igual a la suma del activo monetario circulante y activo monetario no circulante.',

                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false,
                                ValorFallback: '0',
                                FiltrosDimension:
                                [{
                                    "Explicita": true,
                                    "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                    "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                    "ElementoMiembroTipificado": null
                                }]
                            })
                        }
                    }),

                //Se integran formulas de < Value Assertion>  ID : VA_800003_04:  Monetario activo(pasivo) neto = Total activo monetario - Total pasivo monetario[dimensional]
                'formula109': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula109',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) - bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la diferencia del activo monetario menos el pasivo monetario.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la diferencia del activo monetario menos el pasivo monetario.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            })
                        }
                    }),
                'formula109_1': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula109_1',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) - bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la diferencia del activo monetario menos el pasivo monetario.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la diferencia del activo monetario menos el pasivo monetario.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            })
                        }
                    }),
                'formula109_2': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula109_2',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) - bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la diferencia del activo monetario menos el pasivo monetario.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la diferencia del activo monetario menos el pasivo monetario.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            })
                        }
                    }),
                'formula109_3': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula109_3',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) - bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la diferencia del activo monetario menos el pasivo monetario.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la diferencia del activo monetario menos el pasivo monetario.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            })
                        }
                    }),
                'formula109_4': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula109_4',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) - bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la diferencia del activo monetario menos el pasivo monetario.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la diferencia del activo monetario menos el pasivo monetario.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        "Explicita": true,
                                        "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
                                        "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
                                        "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
                                        "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
                                        "ElementoMiembroTipificado": null
                                    }
                                ]
                            })
                        }
                    }),
                //Se integran formulas de < Value Assertion>  ID : VA_800003_03: $TotalDePesosMiembro = $DolaresContravalorPesosMiembro + $OtrasMonedasContravalorPesosMiembro[dimensional]
                'formula110': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula110',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_TotalDePesosMiembro'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro'
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro'
                                    }
                                ]
                            })
                        }
                    }),

                //Se integran formulas de < Value Assertion>  ID : VA_800003_02:  Total pasivo monetario = Pasivo monetario circulante + Pasivo monetario no circulante[dimensional]
                'formula113': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula113',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_TotalDePesosMiembro'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro'
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro'
                                    }
                                ]
                            })
                        }
                    }),
                //Se integra formula <Value Assertion>  ID : VA_800003_01 :  Total activo monetario = Activo monetario circulante + Activo monetario no circulante  [dimensional] 
                'formula114': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula114',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_TotalDePesosMiembro'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro'
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro'
                                    }
                                ]
                            })
                        }
                    }),
                // Se integra formula de formato 800003
                'formula115': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula115',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_TotalDePesosMiembro'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro'
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalPasivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro'
                                    }
                                ]
                            })
                        }
                    }),

                // Se integra formula de formato 800003
                'formula116': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula116',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_TotalDePesosMiembro'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro'
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro'
                                    }
                                ]
                            })
                        }
                    }),
                // Se integra formula de formato 800003
                'formula117': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula117',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_TotalDePesosMiembro'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro'
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_TotalActivoMonetario',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro'
                                    }
                                ]
                            })
                        }
                    }),
                // Validacion del formato 8000003
                'formula119': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula119',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3)',
                        MensajeExito: 'El valor del hecho del {variable1} es la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        MensajeError: 'El valor del hecho del {variable1} debería ser la suma de Otras monedas contravalor pesos y Dólares contravalor pesos.',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_TotalDePesosMiembro'
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro'
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_MonedasEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro'
                                    }
                                ]
                            })
                        }
                    })
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
  "Context_Instant_DolaresMiembro": {
    "Id": "Context_Instant_DolaresMiembro",
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
      "ValoresDimension": [
        
      ]
    },
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:MonedasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:DolaresMiembro</xbrldi:explicitMember></xbrli:segment>",
    "ValoresDimension": [
	{
          "Explicita": true,
          "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
          "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresMiembro",
          "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
          "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresMiembro",
          "ElementoMiembroTipificado": null
        }
	]
  },
  "Context_Instant_DolaresContravalorPesosMiembro": {
    "Id": "Context_Instant_DolaresContravalorPesosMiembro",
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
      "ValoresDimension": [
        
      ]
    },
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:MonedasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:DolaresContravalorPesosMiembro</xbrldi:explicitMember></xbrli:segment>",
    "ValoresDimension": [
		{
          "Explicita": true,
          "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
          "IdItemMiembro": "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
          "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
          "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DolaresContravalorPesosMiembro",
          "ElementoMiembroTipificado": null
        }
	]
  },
  "Context_Instant_OtrasMonedasContravalorDolaresMiembro": {
    "Id": "Context_Instant_OtrasMonedasContravalorDolaresMiembro",
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
      "ValoresDimension": [
        
      ]
    },
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:MonedasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:OtrasMonedasContravalorDolaresMiembro</xbrldi:explicitMember></xbrli:segment>",
    "ValoresDimension": [
	{
          "Explicita": true,
          "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
          "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
          "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
          "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorDolaresMiembro",
          "ElementoMiembroTipificado": null
        }
	]
  },
  "Context_Instant_OtrasMonedasContravalorPesosMiembro": {
    "Id": "Context_Instant_OtrasMonedasContravalorPesosMiembro",
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
      "ValoresDimension": [
        
      ]
    },
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:MonedasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:OtrasMonedasContravalorPesosMiembro</xbrldi:explicitMember></xbrli:segment>",
    "ValoresDimension": [
	{
          "Explicita": true,
          "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
          "IdItemMiembro": "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
          "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
          "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:OtrasMonedasContravalorPesosMiembro",
          "ElementoMiembroTipificado": null
        }
	]
  },
  "Context_Instant_TotalDePesosMiembro": {
    "Id": "Context_Instant_TotalDePesosMiembro",
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
      "ValoresDimension": [
        
      ]
    },
    "ContieneInformacionDimensional": true,
    "Escenario": "<xbrli:segment xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ifrs_mx-cor_20141205:MonedasEje\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ifrs_mx-cor_20141205:TotalDePesosMiembro</xbrldi:explicitMember></xbrli:segment>",
    "ValoresDimension": [
		{
          "Explicita": true,
          "IdDimension": "ifrs_mx-cor_20141205_MonedasEje",
          "IdItemMiembro": "ifrs_mx-cor_20141205_TotalDePesosMiembro",
          "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedasEje",
          "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalDePesosMiembro",
          "ElementoMiembroTipificado": null
        }]
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
                "CC6241a5d-937b-4a83-b132-8d7cfee81666": {
                    "Id": "CC6241a5d-937b-4a83-b132-8d7cfee81666",
                    "IdConcepto": "ifrs_mx-cor_20141205_InformacionARevelarSobrePosicionMonetariaEnMonedaExtranjeraBloqueDeTexto",
                    "IdContextoPlantilla": "acumulado_ejercicio_actual",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "Decimales": null,
                    "Precision": null,
                    "Valor": "#valorDefaultNoNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "A438efa31-fc2e-4b67-9b9f-8a3413d4d065": {
    "Id": "A438efa31-fc2e-4b67-9b9f-8a3413d4d065",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_DolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af75ca9fa-211e-4b84-8a48-2e32d84d36c4": {
    "Id": "Af75ca9fa-211e-4b84-8a48-2e32d84d36c4",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_DolaresContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A99519914-fa6c-44ad-bc55-ecd050d3b8b1": {
    "Id": "A99519914-fa6c-44ad-bc55-ecd050d3b8b1",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorDolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A93de0b61-d99c-44f1-872c-08a63934108c": {
    "Id": "A93de0b61-d99c-44f1-872c-08a63934108c",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9cfce979-6de7-4992-9b65-79d42abce653": {
    "Id": "A9cfce979-6de7-4992-9b65-79d42abce653",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_TotalDePesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af53f483e-b78c-4f5c-bc52-89df605eece7": {
    "Id": "Af53f483e-b78c-4f5c-bc52-89df605eece7",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_DolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Af1dd79bc-c9cf-4046-83b2-440753ed93e3": {
    "Id": "Af1dd79bc-c9cf-4046-83b2-440753ed93e3",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_DolaresContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A22d7ec75-25a8-4196-a1d4-b8edd0065eeb": {
    "Id": "A22d7ec75-25a8-4196-a1d4-b8edd0065eeb",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorDolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4ba0ab92-2f34-4a16-8770-3637e95afe67": {
    "Id": "A4ba0ab92-2f34-4a16-8770-3637e95afe67",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6604bb24-9073-4bb3-ad61-c4bd18c6197e": {
    "Id": "A6604bb24-9073-4bb3-ad61-c4bd18c6197e",
    "IdConcepto": "ifrs_mx-cor_20141205_ActivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_TotalDePesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4f8b61ce-4fa3-429e-ac3f-0003fb3c8c31": {
    "Id": "A4f8b61ce-4fa3-429e-ac3f-0003fb3c8c31",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalActivoMonetario",
    "IdContextoPlantilla": "Context_Instant_DolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8e77fd11-b99a-4deb-8a3c-d7792497a97a": {
    "Id": "A8e77fd11-b99a-4deb-8a3c-d7792497a97a",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalActivoMonetario",
    "IdContextoPlantilla": "Context_Instant_DolaresContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A2fcdc3be-f9eb-4454-a5e7-ab830fe0823a": {
    "Id": "A2fcdc3be-f9eb-4454-a5e7-ab830fe0823a",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalActivoMonetario",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorDolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A132aac42-0370-4c74-98f9-362a0a6e0df5": {
    "Id": "A132aac42-0370-4c74-98f9-362a0a6e0df5",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalActivoMonetario",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A01cf43a0-3581-4bee-8704-04c86c1c54bc": {
    "Id": "A01cf43a0-3581-4bee-8704-04c86c1c54bc",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalActivoMonetario",
    "IdContextoPlantilla": "Context_Instant_TotalDePesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8a602a05-4a3c-422b-b2bc-ffd8e20a2f43": {
    "Id": "A8a602a05-4a3c-422b-b2bc-ffd8e20a2f43",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_DolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A9aab2052-7e94-4000-aa9c-9f004aebf62b": {
    "Id": "A9aab2052-7e94-4000-aa9c-9f004aebf62b",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_DolaresContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Afb259d5c-0c44-46cb-9bbe-cb1a906931a6": {
    "Id": "Afb259d5c-0c44-46cb-9bbe-cb1a906931a6",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorDolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A3ad5513d-9257-4289-9c61-6fb9f9a968f3": {
    "Id": "A3ad5513d-9257-4289-9c61-6fb9f9a968f3",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A0ce21a5f-0d92-4e64-9b4f-f6c5b6ca2d87": {
    "Id": "A0ce21a5f-0d92-4e64-9b4f-f6c5b6ca2d87",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioCirculante",
    "IdContextoPlantilla": "Context_Instant_TotalDePesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A72e0c466-2d6b-4041-ae51-ca384d00afa0": {
    "Id": "A72e0c466-2d6b-4041-ae51-ca384d00afa0",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_DolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A272bfca2-4d17-407c-8583-c9e23114cdf2": {
    "Id": "A272bfca2-4d17-407c-8583-c9e23114cdf2",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_DolaresContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Abf28c4ff-e18f-4e58-a8ce-87394bce1292": {
    "Id": "Abf28c4ff-e18f-4e58-a8ce-87394bce1292",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorDolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ad19b79c4-d783-4ac0-be5f-e679c0ceb289": {
    "Id": "Ad19b79c4-d783-4ac0-be5f-e679c0ceb289",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A6295683d-8951-4b65-899b-72f26d1c61eb": {
    "Id": "A6295683d-8951-4b65-899b-72f26d1c61eb",
    "IdConcepto": "ifrs_mx-cor_20141205_PasivoMonetarioNoCirculante",
    "IdContextoPlantilla": "Context_Instant_TotalDePesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A4c32c39f-4472-4412-8d4e-df114233a9c6": {
    "Id": "A4c32c39f-4472-4412-8d4e-df114233a9c6",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalPasivoMonetario",
    "IdContextoPlantilla": "Context_Instant_DolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A8e67e292-3151-4519-851b-f37cb9aa3446": {
    "Id": "A8e67e292-3151-4519-851b-f37cb9aa3446",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalPasivoMonetario",
    "IdContextoPlantilla": "Context_Instant_DolaresContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aabad5bc5-43a8-4613-9cad-a895683e9007": {
    "Id": "Aabad5bc5-43a8-4613-9cad-a895683e9007",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalPasivoMonetario",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorDolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ac2c57d6e-4a5f-42a1-80fa-8a84a226af02": {
    "Id": "Ac2c57d6e-4a5f-42a1-80fa-8a84a226af02",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalPasivoMonetario",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A99ce0e8b-7e61-4451-893c-2da4ede5a8a9": {
    "Id": "A99ce0e8b-7e61-4451-893c-2da4ede5a8a9",
    "IdConcepto": "ifrs_mx-cor_20141205_TotalPasivoMonetario",
    "IdContextoPlantilla": "Context_Instant_TotalDePesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Adb51f27c-c243-40df-8fa0-14cb7c10d52a": {
    "Id": "Adb51f27c-c243-40df-8fa0-14cb7c10d52a",
    "IdConcepto": "ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto",
    "IdContextoPlantilla": "Context_Instant_DolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Ab30c8755-9d2a-4603-bb30-4376887acddc": {
    "Id": "Ab30c8755-9d2a-4603-bb30-4376887acddc",
    "IdConcepto": "ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto",
    "IdContextoPlantilla": "Context_Instant_DolaresContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A18d7a810-51a7-4c26-b7bf-5a441754638d": {
    "Id": "A18d7a810-51a7-4c26-b7bf-5a441754638d",
    "IdConcepto": "ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorDolaresMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "Aadbc3590-e73a-4514-b416-3072ff32f01e": {
    "Id": "Aadbc3590-e73a-4514-b416-3072ff32f01e",
    "IdConcepto": "ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto",
    "IdContextoPlantilla": "Context_Instant_OtrasMonedasContravalorPesosMiembro",
    "Hechos": [],
    "IdUnidadPlantilla": "Peso_Mx",
    "Decimales": "-3",
    "Precision": null,
    "Valor": "#valorDefaultNumerico",
    "ValorNumerador": null,
    "ValorDenominador": null
  },
  "A226c1c38-6043-4d8e-8e63-f1d4f6202b7f": {
    "Id": "A226c1c38-6043-4d8e-8e63-f1d4f6202b7f",
    "IdConcepto": "ifrs_mx-cor_20141205_MonetarioActivoPasivoNeto",
    "IdContextoPlantilla": "Context_Instant_TotalDePesosMiembro",
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