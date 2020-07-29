///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/414000-H
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_H implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_414000_H
         */
        constructor() {

            this.ListadoDeFormulas = {
                'Requeridos_Deuda_Por_Serie_ar_pros_PotentialAcquirers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_PotentialAcquirers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PotentialAcquirers',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_Deuda_Por_Serie_ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Requeridos_Deuda_Por_Serie_ar_pros_DistributionPlan': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DistributionPlan',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DistributionPlan',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_TheResourcesWillBeUsedDirectlyOrIndirectlyToAcquireAssetsOtherThanTheNormalActivityOfTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_ar_pros_DescriptionOfTheBusinessesToAcquireAndNegotiationsForTheAcquisition': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_ar_pros_DescriptionOfTheBusinessesToAcquireAndNegotiationsForTheAcquisition',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfTheBusinessesToAcquireAndNegotiationsForTheAcquisition',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_TheResourcesWillBeUsedToFinanceTheAcquisitionOfOtherBusinesses',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'Requeridos_ar_pros_TypeOfAssetsToBeAcquiredCostExpectedBenefitVendorIdentityAndFormOfTransactionCostDetermination': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_ar_pros_TypeOfAssetsToBeAcquiredCostExpectedBenefitVendorIdentityAndFormOfTransactionCostDetermination',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "NO") and (variable3 == "NO"))',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfAssetsToBeAcquiredCostExpectedBenefitVendorIdentityAndFormOfTransactionCostDetermination',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_TheResourcesWillBeUsedDirectlyOrIndirectlyToAcquireAssetsOtherThanTheNormalActivityOfTheIssuer',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),

                'Requeridos_ar_pros_MentioningPartialOrTotalDependencePros': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_ar_pros_MentioningPartialOrTotalDependencePros',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "SI")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MentioningPartialOrTotalDependencePros',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'MontoTotal_ar_pros_MainFinancingPurposePercentage': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ar_pros_MainFinancingPurposePercentage',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: ' bignumber(variable2) == bignumber(100)',
                    MensajeExito: 'La suma de los porcentajes es igual 100',
                    MensajeError: 'La suma de los porcentajes no es igual a 100',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        'variable2': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable2',
                            IdConcepto: 'ar_pros_MainFinancingPurposePercentage',
                            PuedeCrearse: true,
                            PuedeEliminarse: false,
                            ConteoHechos: false,
                            EsDinamica: true,
                            FiltrosDimension:
                                [{
                                    Explicita: false,
                                    QNameDimension: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ar_pros_MainProjectsOrFinancingPurposesSequenceTypedAxiss',
                                    IdDimension: 'ar_pros_MainProjectsOrFinancingPurposesSequenceTypedAxis',
                                    CualquierMiembro: true
                                }]
                        }),
                    }
                }),
                'Requeridos_ar_pros_TermsOfTheSecuritiesToBeOffered': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_ar_pros_TermsOfTheSecuritiesToBeOffered',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '((variable4 != "INF") and (variable1 != "Toma en firme y Mejores esfuerzos")) or ((variable3 == "SI") and (variable1 != "Toma en firme y Mejores esfuerzos")) or (variable2 != "INF")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TermsOfTheSecuritiesToBeOffered',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable2",
                                IdConcepto: "ar_pros_PlacementProspectus",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable3",
                                IdConcepto: "ar_pros_OnlyEmission",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable4",
                                IdConcepto: "ar_pros_Supplement",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            })
                        }
                    }
                ),



                'Requeridos_parricipantesEnLaOferta': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_parricipantesEnLaOferta',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'variable2 != "INF" or bignumber(variable3) > 0',
                        MensajeExito: 'Se debe registrar almenos un elemento en la talba "Participantes en la oferta".', 
                        MensajeError: 'Se debe registrar almenos un elemento en la tabla "Participantes en la oferta".',
                        VariablesCoincidenPeriodo: false,
                        ExcepcionSinHijos: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TypeOfInstrumentDescription',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: "variable2",
                                IdConcepto: "ar_pros_Brochure",
                                PuedeEliminarse: false,
                                PuedeCrearse: false,
                                ConteoHechos: false,
                                ValorFallback: "INF"
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ar_pros_SignificantParticipationInTheOffer',
                                PuedeCrearse: true,
                                PuedeEliminarse: false,
                                ConteoHechos: true,
                                EsDinamica: false,
                                FiltrosDimension:
                                    [{
                                        Explicita: true,
                                        IdDimension: "ar_pros_TypeOfParticipationsInTheOfferAxis",
                                        QNameDimension: "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfParticipationsInTheOfferAxis",
                                        CualquierMiembro: true
                                    }]
                            }),
                        }
                    }
                ),

                'Requeridos_ar_pros_SellingShareholders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Requeridos_ar_pros_SellingShareholders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "Secundaria")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SellingShareholders',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_EquitySerieOfferType',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
                "ctx_2014": {
                    "Id": "ctx_2014",
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
                "ctx_tipoMultiplo_presentarMultiplos": {
                    "Id": "ctx_tipoMultiplo_presentarMultiplos",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfMultiplesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:PresentMultiplesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ar_pros_TypeOfMultiplesAxis",
                            "IdItemMiembro": "ar_pros_PresentMultiplesMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:PresentMultiplesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "ctx_tipoMultiplo_multiplosSectorORamo": {
                    "Id": "ctx_tipoMultiplo_multiplosSectorORamo",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfMultiplesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:MultiplesOfSectorOrBranchMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ar_pros_TypeOfMultiplesAxis",
                            "IdItemMiembro": "ar_pros_MultiplesOfSectorOrBranchMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MultiplesOfSectorOrBranchMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                },
                "ctx_tipoMultiplo_multiplosDelMercado": {
                    "Id": "ctx_tipoMultiplo_multiplosDelMercado",
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
                    "Escenario": "<xbrli:scenario xmlns:xbrli=\"http://www.xbrl.org/2003/instance\"><xbrldi:explicitMember dimension=\"ar_pros:TypeOfMultiplesAxis\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\">ar_pros:MarketMultiplesMember</xbrldi:explicitMember></xbrli:scenario>",
                    "ValoresDimension": [
                        {
                            "Explicita": true,
                            "IdDimension": "ar_pros_TypeOfMultiplesAxis",
                            "IdItemMiembro": "ar_pros_MarketMultiplesMember",
                            "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfMultiplesAxis",
                            "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MarketMultiplesMember",
                            "ElementoMiembroTipificado": null
                        }
                    ]
                }
            };

            this.UnidadesPlantillaPorId = {
                "pesos": {
                    "Id": "pesos",
                    "Tipo": 1,
                    "Medidas": [
                        {
                            "Nombre": "#medida_MXN",
                            "EspacioNombres": "#medida_http___www_xbrl_org_2003_iso4217"
                        }
                    ],
                    "MedidasDenominador": [],
                    "MedidasNumerador": []
                },
                "pure": {
                    "Id": "pure",
                    "Tipo": 1,
                    "Medidas": [
                        {
                            "Nombre": "#medida_pure",
                            "EspacioNombres": "#medida_http___www_xbrl_org_2003_instance"
                        }
                    ],
                    "MedidasDenominador": [],
                    "MedidasNumerador": []
                }
            };

            this.HechosPlantillaPorId = {
                "ar_pros_OfferCharacteristics_d3b73af6-341f-47d1-a319-2607c73244a7": {
                    "Id": "ar_pros_OfferCharacteristics_d3b73af6-341f-47d1-a319-2607c73244a7",
                    "IdConcepto": "ar_pros_OfferCharacteristics",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_12ec5896-0255-4dfa-becd-b7069fc7e3cc": {
                    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_12ec5896-0255-4dfa-becd-b7069fc7e3cc",
                    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OtherConsiderationsOfSupply_ca499fe4-f177-45fd-b8c4-c1c4cec3a338": {
                    "Id": "ar_pros_OtherConsiderationsOfSupply_ca499fe4-f177-45fd-b8c4-c1c4cec3a338",
                    "IdConcepto": "ar_pros_OtherConsiderationsOfSupply",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_370a1d64-5282-46d0-9002-05dc296bab0e": {
                    "Id": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect_370a1d64-5282-46d0-9002-05dc296bab0e",
                    "IdConcepto": "ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_a5727842-53db-4faf-b0da-c5f95ca057f2": {
                    "Id": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities_a5727842-53db-4faf-b0da-c5f95ca057f2",
                    "IdConcepto": "ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PotentialAcquirers_4200b24a-8adf-4a85-96f5-50e41a941dbb": {
                    "Id": "ar_pros_PotentialAcquirers_4200b24a-8adf-4a85-96f5-50e41a941dbb",
                    "IdConcepto": "ar_pros_PotentialAcquirers",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders_02acad1d-c2ad-4a75-bad8-da9a76b29b15": {
                    "Id": "ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders_02acad1d-c2ad-4a75-bad8-da9a76b29b15",
                    "IdConcepto": "ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DescriptiveAndSchematicExplanationOfTheOperation_df77fe10-eae8-4f4f-ae7c-4ecda3f51d33": {
                    "Id": "ar_pros_DescriptiveAndSchematicExplanationOfTheOperation_df77fe10-eae8-4f4f-ae7c-4ecda3f51d33",
                    "IdConcepto": "ar_pros_DescriptiveAndSchematicExplanationOfTheOperation",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountOfFixedCapitalBeforePlacement_c8faab08-d709-466b-97c1-3470fdc8668a": {
                    "Id": "ar_pros_AmountOfFixedCapitalBeforePlacement_c8faab08-d709-466b-97c1-3470fdc8668a",
                    "IdConcepto": "ar_pros_AmountOfFixedCapitalBeforePlacement",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_AmountOfVariableCapitalBeforePlacement_ad4d4a88-e94f-4d1d-857d-83f632829100": {
                    "Id": "ar_pros_AmountOfVariableCapitalBeforePlacement_ad4d4a88-e94f-4d1d-857d-83f632829100",
                    "IdConcepto": "ar_pros_AmountOfVariableCapitalBeforePlacement",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_AmountOfFixedCapitalAfterPlacement_460dc478-8dda-4f57-8ae8-49f8969df07b": {
                    "Id": "ar_pros_AmountOfFixedCapitalAfterPlacement_460dc478-8dda-4f57-8ae8-49f8969df07b",
                    "IdConcepto": "ar_pros_AmountOfFixedCapitalAfterPlacement",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_AmountVariableShareCapitalAfterThePlacement_cf674079-d438-4e1f-ba2f-e6151beceedc": {
                    "Id": "ar_pros_AmountVariableShareCapitalAfterThePlacement_cf674079-d438-4e1f-ba2f-e6151beceedc",
                    "IdConcepto": "ar_pros_AmountVariableShareCapitalAfterThePlacement",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed_2392298e-7081-476b-8eb5-b1b3095e3339": {
                    "Id": "ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed_2392298e-7081-476b-8eb5-b1b3095e3339",
                    "IdConcepto": "ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed"
                },
                "ar_pros_MentionThatHoldersOfTheseSecuritiesAreInDisadvantaged_91e450e1-285c-46b1-a215-8baf48d978bb": {
                    "Id": "ar_pros_MentionThatHoldersOfTheseSecuritiesAreInDisadvantaged_91e450e1-285c-46b1-a215-8baf48d978bb",
                    "IdConcepto": "ar_pros_MentionThatHoldersOfTheseSecuritiesAreInDisadvantaged",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented_4982a11b-9514-40d7-a157-462e347d17c8": {
                    "Id": "ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented_4982a11b-9514-40d7-a157-462e347d17c8",
                    "IdConcepto": "ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_RedemptionDateIfAny_159c4ca3-c10a-45d2-8780-a11eac10d7e1": {
                    "Id": "ar_pros_RedemptionDateIfAny_159c4ca3-c10a-45d2-8780-a11eac10d7e1",
                    "IdConcepto": "ar_pros_RedemptionDateIfAny",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorRedemptionDateIfAny"
                },
                "ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation_026113f8-d0e7-4d93-9a5d-d066a9d57ee6": {
                    "Id": "ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation_026113f8-d0e7-4d93-9a5d-d066a9d57ee6",
                    "IdConcepto": "ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation_91f40644-fd9a-45bc-93cf-70b405950d6d": {
                    "Id": "ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation_91f40644-fd9a-45bc-93cf-70b405950d6d",
                    "IdConcepto": "ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },


                "ar_pros_MultiplePriceEarningsBeforeTheOffer_960673bd-9a52-433e-8e7f-aa211d1a3096": {
                    "Id": "ar_pros_MultiplePriceEarningsBeforeTheOffer_960673bd-9a52-433e-8e7f-aa211d1a3096",
                    "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEarningsBeforeTheOffer_f3d85724-e51f-4b66-a30e-6dcaac175961": {
                    "Id": "ar_pros_MultiplePriceEarningsBeforeTheOffer_f3d85724-e51f-4b66-a30e-6dcaac175961",
                    "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEarningsBeforeTheOffer_ce6bdabf-4d71-43b3-97ef-d25e0c653aad": {
                    "Id": "ar_pros_MultiplePriceEarningsBeforeTheOffer_ce6bdabf-4d71-43b3-97ef-d25e0c653aad",
                    "IdConcepto": "ar_pros_MultiplePriceEarningsBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceBookValueBeforeTheOffer_1d6a94e6-772d-442d-9c61-0a7aece29ca3": {
                    "Id": "ar_pros_MultiplePriceBookValueBeforeTheOffer_1d6a94e6-772d-442d-9c61-0a7aece29ca3",
                    "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceBookValueBeforeTheOffer_3a16df03-478d-4af1-8a83-043d5ebe767f": {
                    "Id": "ar_pros_MultiplePriceBookValueBeforeTheOffer_3a16df03-478d-4af1-8a83-043d5ebe767f",
                    "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceBookValueBeforeTheOffer_3ac4a60f-6d3f-4e51-8f4f-6e8ade3c82a7": {
                    "Id": "ar_pros_MultiplePriceBookValueBeforeTheOffer_3ac4a60f-6d3f-4e51-8f4f-6e8ade3c82a7",
                    "IdConcepto": "ar_pros_MultiplePriceBookValueBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEbitdaBeforeTheOffer_c0f33163-a108-4626-9b69-de00191c2686": {
                    "Id": "ar_pros_MultiplePriceEbitdaBeforeTheOffer_c0f33163-a108-4626-9b69-de00191c2686",
                    "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEbitdaBeforeTheOffer_38bdc56a-5b7e-4cff-8ba3-3976cd38d439": {
                    "Id": "ar_pros_MultiplePriceEbitdaBeforeTheOffer_38bdc56a-5b7e-4cff-8ba3-3976cd38d439",
                    "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEbitdaBeforeTheOffer_21d79b9c-0568-4816-acf8-3f1ab150f2c6": {
                    "Id": "ar_pros_MultiplePriceEbitdaBeforeTheOffer_21d79b9c-0568-4816-acf8-3f1ab150f2c6",
                    "IdConcepto": "ar_pros_MultiplePriceEbitdaBeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_0a9f015b-89c0-4aae-8fc7-4375f30755c3": {
                    "Id": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_0a9f015b-89c0-4aae-8fc7-4375f30755c3",
                    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_4852fcec-38d5-4212-9fe3-16a2734b5be9": {
                    "Id": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_4852fcec-38d5-4212-9fe3-16a2734b5be9",
                    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_baccd36f-0362-49c6-91c8-35b469d665d9": {
                    "Id": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer_baccd36f-0362-49c6-91c8-35b469d665d9",
                    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_AmountProgramIssueInUDIS_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_AmountProgramIssueInUDIS_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_AmountProgramIssueInUDIS",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountOfTheIssueInUSD_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_AmountOfTheIssueInUSD_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_AmountOfTheIssueInUSD",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmountOfTheIssueInFOREIGNCURRENCY_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567": {
                    "Id": "ar_pros_AmountOfTheIssueInFOREIGNCURRENCY_3a4f3eae-86e0-4bf2-a2f7-fdaa06631567",
                    "IdConcepto": "ar_pros_AmountOfTheIssueInFOREIGNCURRENCY",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_OtherMultipleBeforeBid_8286e01f-3399-477f-a84b-93069987e34d": {
                    "Id": "ar_pros_OtherMultipleBeforeBid_8286e01f-3399-477f-a84b-93069987e34d",
                    "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_OtherMultipleBeforeBid_0ab2ec9f-1d4c-4054-9387-b3f9bee12435": {
                    "Id": "ar_pros_OtherMultipleBeforeBid_0ab2ec9f-1d4c-4054-9387-b3f9bee12435",
                    "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_OtherMultipleBeforeBid_a2c53ff1-276c-4ba3-836e-3f18d264d74f": {
                    "Id": "ar_pros_OtherMultipleBeforeBid_a2c53ff1-276c-4ba3-836e-3f18d264d74f",
                    "IdConcepto": "ar_pros_OtherMultipleBeforeBid",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEarningsAfterTheOffer_da1b9556-b1e4-443b-ad36-2426c754d447": {
                    "Id": "ar_pros_MultiplePriceEarningsAfterTheOffer_da1b9556-b1e4-443b-ad36-2426c754d447",
                    "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEarningsAfterTheOffer_8611de5a-9378-409e-853f-76ca9e265418": {
                    "Id": "ar_pros_MultiplePriceEarningsAfterTheOffer_8611de5a-9378-409e-853f-76ca9e265418",
                    "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEarningsAfterTheOffer_86196dc3-cc2f-4017-95be-9685d9fd4964": {
                    "Id": "ar_pros_MultiplePriceEarningsAfterTheOffer_86196dc3-cc2f-4017-95be-9685d9fd4964",
                    "IdConcepto": "ar_pros_MultiplePriceEarningsAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceBookValueAfterTheOffer_e60aee15-7dba-4188-a2da-539b6f706936": {
                    "Id": "ar_pros_MultiplePriceBookValueAfterTheOffer_e60aee15-7dba-4188-a2da-539b6f706936",
                    "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceBookValueAfterTheOffer_ae09eb89-011a-4755-8b2d-b3fc328c26c3": {
                    "Id": "ar_pros_MultiplePriceBookValueAfterTheOffer_ae09eb89-011a-4755-8b2d-b3fc328c26c3",
                    "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceBookValueAfterTheOffer_e28dd3ba-d151-44e9-96fe-f47f92fbb28a": {
                    "Id": "ar_pros_MultiplePriceBookValueAfterTheOffer_e28dd3ba-d151-44e9-96fe-f47f92fbb28a",
                    "IdConcepto": "ar_pros_MultiplePriceBookValueAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEbitdaAfterTheOffer_ee665189-e37e-48d6-91af-286368f7b345": {
                    "Id": "ar_pros_MultiplePriceEbitdaAfterTheOffer_ee665189-e37e-48d6-91af-286368f7b345",
                    "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEbitdaAfterTheOffer_ea6fcaba-261b-4a96-8c18-775476b4040d": {
                    "Id": "ar_pros_MultiplePriceEbitdaAfterTheOffer_ea6fcaba-261b-4a96-8c18-775476b4040d",
                    "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_MultiplePriceEbitdaAfterTheOffer_c4fa63b0-9ab1-40eb-8ce9-2ac53fb80c79": {
                    "Id": "ar_pros_MultiplePriceEbitdaAfterTheOffer_c4fa63b0-9ab1-40eb-8ce9-2ac53fb80c79",
                    "IdConcepto": "ar_pros_MultiplePriceEbitdaAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_74b6f56a-078f-4d55-bba1-13af0fe40e4d": {
                    "Id": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_74b6f56a-078f-4d55-bba1-13af0fe40e4d",
                    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_9f476370-1ac2-4eb6-8ad4-acfe4f66a3a9": {
                    "Id": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_9f476370-1ac2-4eb6-8ad4-acfe4f66a3a9",
                    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_d824b4f8-e361-4d50-a021-90104e50fcff": {
                    "Id": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer_d824b4f8-e361-4d50-a021-90104e50fcff",
                    "IdConcepto": "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_OtherMultipleAfterTheOffer_13dad42a-3ce8-4c1d-9194-c6e7df13c58c": {
                    "Id": "ar_pros_OtherMultipleAfterTheOffer_13dad42a-3ce8-4c1d-9194-c6e7df13c58c",
                    "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_presentarMultiplos",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_OtherMultipleAfterTheOffer_3fa7dc37-e9dc-4580-a934-6509cd06416c": {
                    "Id": "ar_pros_OtherMultipleAfterTheOffer_3fa7dc37-e9dc-4580-a934-6509cd06416c",
                    "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosSectorORamo",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_OtherMultipleAfterTheOffer_4f50a9a3-333f-4fb4-8ffe-128ed2788134": {
                    "Id": "ar_pros_OtherMultipleAfterTheOffer_4f50a9a3-333f-4fb4-8ffe-128ed2788134",
                    "IdConcepto": "ar_pros_OtherMultipleAfterTheOffer",
                    "IdContextoPlantilla": "ctx_tipoMultiplo_multiplosDelMercado",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "2",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                


                "ar_pros_MentioningwhetherOrNotHaveCollateral_c2a1dd80-461f-4463-a24e-c36409e8cfaa": {
                    "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_c2a1dd80-461f-4463-a24e-c36409e8cfaa",
                    "IdConcepto": "ar_pros_MentioningwhetherOrNotHaveCollateral",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentioningPartialOrTotalDependencePros_f62a49e1-6f9b-4c10-ad65-57a35dde9ba3": {
                    "Id": "ar_pros_MentioningPartialOrTotalDependencePros_f62a49e1-6f9b-4c10-ad65-57a35dde9ba3",
                    "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_HowToImplementOrEnforceTheGuarantee_45e2aa3d-4520-4a1c-9213-9b6d28fb2929": {
                    "Id": "ar_pros_HowToImplementOrEnforceTheGuarantee_45e2aa3d-4520-4a1c-9213-9b6d28fb2929",
                    "IdConcepto": "ar_pros_HowToImplementOrEnforceTheGuarantee",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral_f37f8423-ceeb-49e1-bbd8-4322bc597359": {
                    "Id": "ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral_f37f8423-ceeb-49e1-bbd8-4322bc597359",
                    "IdConcepto": "ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MentionIfTheCollateralAreInsured_f0c792d6-defc-402f-bd4d-a6655c707fe5": {
                    "Id": "ar_pros_MentionIfTheCollateralAreInsured_f0c792d6-defc-402f-bd4d-a6655c707fe5",
                    "IdConcepto": "ar_pros_MentionIfTheCollateralAreInsured",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IfTheTitlesHaveFiduciaryGuarantee_4cdc9841-2a94-4dd5-9cc7-96551ca14e07": {
                    "Id": "ar_pros_IfTheTitlesHaveFiduciaryGuarantee_4cdc9841-2a94-4dd5-9cc7-96551ca14e07",
                    "IdConcepto": "ar_pros_IfTheTitlesHaveFiduciaryGuarantee",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_BasisForDeterminingThePerformance_b70569e5-8741-4259-8131-659f82a377a0": {
                    "Id": "ar_pros_BasisForDeterminingThePerformance_b70569e5-8741-4259-8131-659f82a377a0",
                    "IdConcepto": "ar_pros_BasisForDeterminingThePerformance",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AmortizationTable_40842bd1-2c6d-4a22-882d-2b77f0639c9b": {
                    "Id": "ar_pros_AmortizationTable_40842bd1-2c6d-4a22-882d-2b77f0639c9b",
                    "IdConcepto": "ar_pros_AmortizationTable",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_FrequencyAndFormOfAmortizationOfSecurities_0e68c92a-ae12-407f-9bad-2210e9dde93e": {
                    "Id": "ar_pros_FrequencyAndFormOfAmortizationOfSecurities_0e68c92a-ae12-407f-9bad-2210e9dde93e",
                    "IdConcepto": "ar_pros_FrequencyAndFormOfAmortizationOfSecurities",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue_b04dc545-257a-4489-9d2e-15f33ef3efbb": {
                    "Id": "ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue_b04dc545-257a-4489-9d2e-15f33ef3efbb",
                    "IdConcepto": "ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DiscloseTheTermsOfAnyClause_d2199fca-0f00-4950-a6bd-f4f9e5788aa0": {
                    "Id": "ar_pros_DiscloseTheTermsOfAnyClause_d2199fca-0f00-4950-a6bd-f4f9e5788aa0",
                    "IdConcepto": "ar_pros_DiscloseTheTermsOfAnyClause",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TranscriptOfOtherRelevantTermsTitle_fd084f04-00e4-4999-b8ee-3fb0b564bf86": {
                    "Id": "ar_pros_TranscriptOfOtherRelevantTermsTitle_fd084f04-00e4-4999-b8ee-3fb0b564bf86",
                    "IdConcepto": "ar_pros_TranscriptOfOtherRelevantTermsTitle",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources_50bfaf62-f013-44d7-927f-d4d9c6d7ca12": {
                    "Id": "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources_50bfaf62-f013-44d7-927f-d4d9c6d7ca12",
                    "IdConcepto": "ar_pros_IdentificationOfTheSourceOfTheNecessaryResources",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },

                "ar_pros_UseOfFunds_aaae7f3e-192b-4c4a-90f5-463067030939": {
                    "Id": "ar_pros_UseOfFunds_aaae7f3e-192b-4c4a-90f5-463067030939",
                    "IdConcepto": "ar_pros_UseOfFunds",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DistributionPlan_1776b647-d8b5-4f61-a40b-a7e0fd5a4d2f": {
                    "Id": "ar_pros_DistributionPlan_1776b647-d8b5-4f61-a40b-a7e0fd5a4d2f",
                    "IdConcepto": "ar_pros_DistributionPlan",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_CapitalStructureAfterTheOffering_9bfa13db-9e97-4ef7-a9c5-a9e53e4cf89d": {
                    "Id": "ar_pros_CapitalStructureAfterTheOffering_9bfa13db-9e97-4ef7-a9c5-a9e53e4cf89d",
                    "IdConcepto": "ar_pros_CapitalStructureAfterTheOffering",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_FeaturesCommonRepresentative_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c": {
                    "Id": "ar_pros_FeaturesCommonRepresentative_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c",
                    "IdConcepto": "ar_pros_FeaturesCommonRepresentative",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_Dilution_1228c2af-4e44-4456-b3dc-01669de87fcb": {
                    "Id": "ar_pros_Dilution_1228c2af-4e44-4456-b3dc-01669de87fcb",
                    "IdConcepto": "ar_pros_Dilution",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SellingShareholders_417abe74-e3d7-4fbf-b088-94c0f1b877b3": {
                    "Id": "ar_pros_SellingShareholders_417abe74-e3d7-4fbf-b088-94c0f1b877b3",
                    "IdConcepto": "ar_pros_SellingShareholders",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_MarketInformation_3a32cdc8-a215-4acc-8988-c15588279277": {
                    "Id": "ar_pros_MarketInformation_3a32cdc8-a215-4acc-8988-c15588279277",
                    "IdConcepto": "ar_pros_MarketInformation",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NameOfTheMarketMaker_3bd3658f-ee16-40d7-b3ad-a42ba7acfb20": {
                    "Id": "ar_pros_NameOfTheMarketMaker_3bd3658f-ee16-40d7-b3ad-a42ba7acfb20",
                    "IdConcepto": "ar_pros_NameOfTheMarketMaker",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker_4c6e7165-af64-42ff-a243-ba5f877a3d2d": {
                    "Id": "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker_4c6e7165-af64-42ff-a243-ba5f877a3d2d",
                    "IdConcepto": "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DurationOfTheContractWithTheMarketMaker_63323d79-ba34-4bfa-9a80-7baba2d162bd": {
                    "Id": "ar_pros_DurationOfTheContractWithTheMarketMaker_63323d79-ba34-4bfa-9a80-7baba2d162bd",
                    "IdConcepto": "ar_pros_DurationOfTheContractWithTheMarketMaker",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker_ffed9d2e-6eb0-4892-8e24-1bef5b5e1822": {
                    "Id": "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker_ffed9d2e-6eb0-4892-8e24-1bef5b5e1822",
                    "IdConcepto": "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InTheCaseOfAdditionalValues_dab9b27c-f561-4031-a32b-e706ee895385": {
                    "Id": "ar_pros_InTheCaseOfAdditionalValues_dab9b27c-f561-4031-a32b-e706ee895385",
                    "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_897b9ae0-3681-46f6-be82-0125d27a732b": {
                    "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue_897b9ae0-3681-46f6-be82-0125d27a732b",
                    "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalAmountOfSecurities_77d5859c-87c0-44dd-84f9-a455aabb742e": {
                    "Id": "ar_pros_TotalAmountOfSecurities_77d5859c-87c0-44dd-84f9-a455aabb742e",
                    "IdConcepto": "ar_pros_TotalAmountOfSecurities",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_6cffd876-fb37-4b43-b14b-d255f8ba8639": {
                    "Id": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_6cffd876-fb37-4b43-b14b-d255f8ba8639",
                    "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ObservationsOnTheAuthorizedAmountOfTheProgramRegistration_84c69d54-9e23-4f84-ab3a-f4335cacc070": {
                    "Id": "ar_pros_ObservationsOnTheAuthorizedAmountOfTheProgramRegistration_84c69d54-9e23-4f84-ab3a-f4335cacc070",
                    "IdConcepto": "ar_pros_ObservationsOnTheAuthorizedAmountOfTheProgramRegistration",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TotalAmountProgramRegistration_ae85cc76-ecbd-4165-8288-c0ff05bb7bc2": {
                    "Id": "ar_pros_TotalAmountProgramRegistration_ae85cc76-ecbd-4165-8288-c0ff05bb7bc2",
                    "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedEURO_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedEURO_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedEURO",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_IssuanceUnderArt13OfTheCUE_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_RevolvingCharacterProgram_f000c411-7993-48fe-82b7-87d647f7c4d8": {
                    "Id": "ar_pros_RevolvingCharacterProgram_f000c411-7993-48fe-82b7-87d647f7c4d8",
                    "IdConcepto": "ar_pros_RevolvingCharacterProgram",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_LifeOfTheProgram_e3afbff4-6732-499b-93d5-c518c60f3564": {
                    "Id": "ar_pros_LifeOfTheProgram_e3afbff4-6732-499b-93d5-c518c60f3564",
                    "IdConcepto": "ar_pros_LifeOfTheProgram",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_EffectOfEmissionsUnderAProgram_e3afbff4-6732-499b-93d5-c518c60f3564": {
                    "Id": "ar_pros_EffectOfEmissionsUnderAProgram_e3afbff4-6732-499b-93d5-c518c60f3564",
                    "IdConcepto": "ar_pros_EffectOfEmissionsUnderAProgram",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TypeOfInstrument_eb0f03f4-b3b4-4dc7-8bb7-0bfb4054d680": {
                    "Id": "ar_pros_TypeOfInstrument_eb0f03f4-b3b4-4dc7-8bb7-0bfb4054d680",
                    "IdConcepto": "ar_pros_TypeOfInstrument",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#tipoInstrumentoDefault"
                },
                "ar_pros_LegalBasisOfTheTaxRegimeApplicable_50bfaf62-f013-44d7-927f-d4d9c6d7ca12": {
                    "Id": "ar_pros_LegalBasisOfTheTaxRegimeApplicable_50bfaf62-f013-44d7-927f-d4d9c6d7ca12",
                    "IdConcepto": "ar_pros_LegalBasisOfTheTaxRegimeApplicable",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NetAmountOfTheResourcesOfTheOffer_460dc478-8dda-4f57-8ae8-49f8969df07b": {
                    "Id": "ar_pros_NetAmountOfTheResourcesOfTheOffer_460dc478-8dda-4f57-8ae8-49f8969df07b",
                    "IdConcepto": "ar_pros_NetAmountOfTheResourcesOfTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TheResourcesWillBeUsedDirectlyOrIndirectlyToAcquireAssetsOtherThanTheNormalActivityOfTheIssuer_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_TheResourcesWillBeUsedDirectlyOrIndirectlyToAcquireAssetsOtherThanTheNormalActivityOfTheIssuer_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_TheResourcesWillBeUsedDirectlyOrIndirectlyToAcquireAssetsOtherThanTheNormalActivityOfTheIssuer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TypeOfAssetsToBeAcquiredCostExpectedBenefitVendorIdentityAndFormOfTransactionCostDetermination_50bfaf62-f013-44d7-927f-d4d9c6d7ca12": {
                    "Id": "ar_pros_TypeOfAssetsToBeAcquiredCostExpectedBenefitVendorIdentityAndFormOfTransactionCostDetermination_50bfaf62-f013-44d7-927f-d4d9c6d7ca12",
                    "IdConcepto": "ar_pros_TypeOfAssetsToBeAcquiredCostExpectedBenefitVendorIdentityAndFormOfTransactionCostDetermination",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheResourcesWillBeUsedToFinanceTheAcquisitionOfOtherBusinesses_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_TheResourcesWillBeUsedToFinanceTheAcquisitionOfOtherBusinesses_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_TheResourcesWillBeUsedToFinanceTheAcquisitionOfOtherBusinesses",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DescriptionOfTheBusinessesToAcquireAndNegotiationsForTheAcquisition_50bfaf62-f013-44d7-927f-d4d9c6d7ca12": {
                    "Id": "ar_pros_DescriptionOfTheBusinessesToAcquireAndNegotiationsForTheAcquisition_50bfaf62-f013-44d7-927f-d4d9c6d7ca12",
                    "IdConcepto": "ar_pros_DescriptionOfTheBusinessesToAcquireAndNegotiationsForTheAcquisition",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheResourcesWillBeUsedToPartiallyOrFullyAmortizeDebt_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_TheResourcesWillBeUsedToPartiallyOrFullyAmortizeDebt_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_TheResourcesWillBeUsedToPartiallyOrFullyAmortizeDebt",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_UseOfFunds_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_UseOfFunds_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_UseOfFunds",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },

                "ar_pros_TermsOfTheSecuritiesToBeOffered_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_TermsOfTheSecuritiesToBeOffered_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_TermsOfTheSecuritiesToBeOffered",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ExistanceOfASubPplacementContract_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_ExistanceOfASubPplacementContract_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_ExistanceOfASubPplacementContract",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ExistanceOfAConflictOfInterestArisingFromTheParticipationOfThePlacementBrokerInTheOffer_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_ExistanceOfAConflictOfInterestArisingFromTheParticipationOfThePlacementBrokerInTheOffer_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_ExistanceOfAConflictOfInterestArisingFromTheParticipationOfThePlacementBrokerInTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheAmountOfTheOfferInMexicoMayBeIncreasedByTheOverAllotmentExercise_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_TheAmountOfTheOfferInMexicoMayBeIncreasedByTheOverAllotmentExercise_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_TheAmountOfTheOfferInMexicoMayBeIncreasedByTheOverAllotmentExercise",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_SecuritiesWereIssuedBetweenRelatedPartiesOfThePlacementBroker_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_SecuritiesWereIssuedBetweenRelatedPartiesOfThePlacementBroker_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_SecuritiesWereIssuedBetweenRelatedPartiesOfThePlacementBroker",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_DistributionPlanAdditionalInformation_1776b647-d8b5-4f61-a40b-a7e0fd5a4d2f": {
                    "Id": "ar_pros_DistributionPlanAdditionalInformation_1776b647-d8b5-4f61-a40b-a7e0fd5a4d2f",
                    "IdConcepto": "ar_pros_DistributionPlanAdditionalInformation",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_CostsRelatedWithTheOfferAdditionalInfo_1776b647-d8b5-4f61-a40b-a7e0fd5a4d2f": {
                    "Id": "ar_pros_CostsRelatedWithTheOfferAdditionalInfo_1776b647-d8b5-4f61-a40b-a7e0fd5a4d2f",
                    "IdConcepto": "ar_pros_CostsRelatedWithTheOfferAdditionalInfo",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AdditionalInformationPersonsWithRelevantParticipationInTheOffer_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c": {
                    "Id": "ar_pros_AdditionalInformationPersonsWithRelevantParticipationInTheOffer_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c",
                    "IdConcepto": "ar_pros_AdditionalInformationPersonsWithRelevantParticipationInTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c": {
                    "Id": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c",
                    "IdConcepto": "ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_InCaseOfPrimaryOfferDilutiveEffectInAmountAndPercentageOfTheOfferOnShares_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c": {
                    "Id": "ar_pros_InCaseOfPrimaryOfferDilutiveEffectInAmountAndPercentageOfTheOfferOnShares_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c",
                    "IdConcepto": "ar_pros_InCaseOfPrimaryOfferDilutiveEffectInAmountAndPercentageOfTheOfferOnShares",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_BookValuePerShare_460dc478-8dda-4f57-8ae8-49f8969df07b": {
                    "Id": "ar_pros_BookValuePerShare_460dc478-8dda-4f57-8ae8-49f8969df07b",
                    "IdConcepto": "ar_pros_BookValuePerShare",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pesos",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_DilutiveEffectInAmountAndPercentageForShareholdersWhoDoNotSubscribeForTheSharesSubjectToTheOffer_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c": {
                    "Id": "ar_pros_DilutiveEffectInAmountAndPercentageForShareholdersWhoDoNotSubscribeForTheSharesSubjectToTheOffer_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c",
                    "IdConcepto": "ar_pros_DilutiveEffectInAmountAndPercentageForShareholdersWhoDoNotSubscribeForTheSharesSubjectToTheOffer",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_TheSharesHaveNotBeenAcquiredInTheMarketOrOfferedToAllShareholdersInTheLast3Years_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_TheSharesHaveNotBeenAcquiredInTheMarketOrOfferedToAllShareholdersInTheLast3Years_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_TheSharesHaveNotBeenAcquiredInTheMarketOrOfferedToAllShareholdersInTheLast3Years",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_AdditionalInformationDilution_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c": {
                    "Id": "ar_pros_AdditionalInformationDilution_8f49db4b-bd06-4442-9705-f2b2b0a9ce2c",
                    "IdConcepto": "ar_pros_AdditionalInformationDilution",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ThereWereSuspensionsInTheTradingOfTheSecuritiesInTheLast3Years_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_ThereWereSuspensionsInTheTradingOfTheSecuritiesInTheLast3Years_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_ThereWereSuspensionsInTheTradingOfTheSecuritiesInTheLast3Years",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ThereIsAContractOrItIsIntendedToHireAMarketMaker_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_ThereIsAContractOrItIsIntendedToHireAMarketMaker_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_ThereIsAContractOrItIsIntendedToHireAMarketMaker",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS_b6df9e39-2eac-478d-938e-bcf5a1417eaf": {
                    "Id": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS_b6df9e39-2eac-478d-938e-bcf5a1417eaf",
                    "IdConcepto": "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_UseOfFundsAdditionalInformation_50bfaf62-f013-44d7-927f-d4d9c6d7ca12": {
                    "Id": "ar_pros_UseOfFundsAdditionalInformation_50bfaf62-f013-44d7-927f-d4d9c6d7ca12",
                    "IdConcepto": "ar_pros_UseOfFundsAdditionalInformation",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": null,
                    "ValorNumerador": null,
                    "ValorDenominador": null,
                    "Precision": null,
                    "Decimales": null,
                    "Valor": "#valorDefaultNoNumerico"
                },
                "ar_pros_ApproximateNumberOfCurrentHoldersOfTheSharesAtTheDateOfTheLastFinancialInformation_1e807e90-65e9-43c2-9d98-9b0c603367b9": {
                    "Id": "ar_pros_ApproximateNumberOfCurrentHoldersOfTheSharesAtTheDateOfTheLastFinancialInformation_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdConcepto": "ar_pros_ApproximateNumberOfCurrentHoldersOfTheSharesAtTheDateOfTheLastFinancialInformation_1e807e90-65e9-43c2-9d98-9b0c603367b9",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_ApproximateNumberOfCurrentHoldersOfTheSharesAtTheDateOfTheLastFinancialInformation_91f40644-fd9a-45bc-93cf-70b405950d6d": {
                    "Id": "ar_pros_ApproximateNumberOfCurrentHoldersOfTheSharesAtTheDateOfTheLastFinancialInformation_91f40644-fd9a-45bc-93cf-70b405950d6d",
                    "IdConcepto": "ar_pros_ApproximateNumberOfCurrentHoldersOfTheSharesAtTheDateOfTheLastFinancialInformation",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },
                "ar_pros_TotalAmountOfSecurities_91f40644-fd9a-45bc-93cf-70b405950d6d": {
                    "Id": "ar_pros_TotalAmountOfSecurities_91f40644-fd9a-45bc-93cf-70b405950d6d",
                    "IdConcepto": "ar_pros_TotalAmountOfSecurities",
                    "IdContextoPlantilla": "ctx_2014",
                    "Hechos": [],
                    "IdUnidadPlantilla": "pure",
                    "Decimales": "0",
                    "Precision": null,
                    "Valor": "#valorDefaultNumerico",
                    "ValorNumerador": null,
                    "ValorDenominador": null
                },

            };



        }
    }

}