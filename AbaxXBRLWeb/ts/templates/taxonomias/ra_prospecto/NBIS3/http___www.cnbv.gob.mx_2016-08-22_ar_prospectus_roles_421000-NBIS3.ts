///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/421000-NBIS3
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_421000_NBIS3 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_421000_NBIS3
         */
        constructor() {

            this.ListadoDeFormulas = {


                'El_Fideicomiso_no_vacios_ar_pros_BusinessOverview': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_BusinessOverview',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BusinessOverview',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_ContractsAndAgreementsRelevant': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_ContractsAndAgreementsRelevant',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ContractsAndAgreementsRelevant',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_Administrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_Administrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Administrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_FeesCostsAndExpensesOfTheAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_FeesCostsAndExpensesOfTheAdministrator',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_FeesCostsAndExpensesOfTheAdministrator',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_ExternalAuditorsTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_ExternalAuditorsTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ExternalAuditorsTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_OtherRequiredThirdParties': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_OtherRequiredThirdParties',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OtherRequiredThirdParties',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_TrustStructureAndMainHolders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_TrustStructureAndMainHolders',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TrustStructureAndMainHolders',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarke': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarke',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarke',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_NameOfTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_NameOfTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTheMarketMaker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_DurationOfTheContractWithTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_DurationOfTheContractWithTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DurationOfTheContractWithTheMarketMaker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_RealEstateSectorsInWhichTheTrustIsFocusedOnInvesting': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_RealEstateSectorsInWhichTheTrustIsFocusedOnInvesting',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RealEstateSectorsInWhichTheTrustIsFocusedOnInvesting',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_PatentsLicensesTrademarksAndOtherContracts': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_PatentsLicensesTrademarksAndOtherContracts',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PatentsLicensesTrademarksAndOtherContracts',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_MainCustomers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_MainCustomers',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_MainCustomers',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_ApplicableLawAndTaxation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_ApplicableLawAndTaxation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ApplicableLawAndTaxation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_HumanResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_HumanResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HumanResources',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_EnvironmentalPerformance': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_EnvironmentalPerformance',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EnvironmentalPerformance',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_IssuerMarketInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_IssuerMarketInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_IssuerMarketInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_ManagementStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_ManagementStructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ManagementStructure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedings': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedings',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_JudicialAdministrativeOrArbitrationProceedings',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_RightsConferredByTheEstateTrustBonds': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_RightsConferredByTheEstateTrustBonds',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RightsConferredByTheEstateTrustBonds',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_Distributions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_Distributions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Distributions',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_EstatePropertyOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_EstatePropertyOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EstatePropertyOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_RealEstateAcquisitionsOrRealEstateDevelopments': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_RealEstateAcquisitionsOrRealEstateDevelopments',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RealEstateAcquisitionsOrRealEstateDevelopments',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_EvolutionOfTheAssetsOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_EvolutionOfTheAssetsOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EvolutionOfTheAssetsOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_PerformanceOfTheTrustAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_PerformanceOfTheTrustAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PerformanceOfTheTrustAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_ReportOfRelevantDebtors': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_ReportOfRelevantDebtors',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ReportOfRelevantDebtors',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarket': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarket',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarket',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_no_vacios_ar_pros_DescriptionOfImpactOfPerformanceOfMarketTrainerOnLevelsOfOperationAndPricesOfRealEstateTrustCertificates': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_no_vacios_ar_pros_DescriptionOfImpactOfPerformanceOfMarketTrainerOnLevelsOfOperationAndPricesOfRealEstateTrustCertificates',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfImpactOfPerformanceOfMarketTrainerOnLevelsOfOperationAndPricesOfRealEstateTrustCertificates',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'El_Fideicomiso_Historia_desarrollo_del_fideicomiso_ar_pros_HistoryAndDevelopmentOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'El_Fideicomiso_Historia_desarrollo_del_fideicomiso_ar_pros_HistoryAndDevelopmentOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HistoryAndDevelopmentOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ctx": {
    "Id": "ctx",
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
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationTrust_5e3347ae-8ba0-4bd3-a8fd-bf9b0c95f1d3": {
    "Id": "ar_pros_ReferenceIncorporationTrust_5e3347ae-8ba0-4bd3-a8fd-bf9b0c95f1d3",
    "IdConcepto": "ar_pros_ReferenceIncorporationTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationTrust"
  },
  "ar_pros_HistoryAndDevelopmentOfTheTrust_47a07e9c-6084-4e21-b458-9a1bd72fcdf1": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTheTrust_47a07e9c-6084-4e21-b458-9a1bd72fcdf1",
    "IdConcepto": "ar_pros_HistoryAndDevelopmentOfTheTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BusinessOverview_e509adfa-a716-441a-9029-0f44777259bd": {
    "Id": "ar_pros_BusinessOverview_e509adfa-a716-441a-9029-0f44777259bd",
    "IdConcepto": "ar_pros_BusinessOverview",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RealEstateSectorsInWhichTheTrustIsFocusedOnInvesting_acf39cbc-ed7f-4fd3-b679-497b25259486": {
    "Id": "ar_pros_RealEstateSectorsInWhichTheTrustIsFocusedOnInvesting_acf39cbc-ed7f-4fd3-b679-497b25259486",
    "IdConcepto": "ar_pros_RealEstateSectorsInWhichTheTrustIsFocusedOnInvesting",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PatentsLicensesTrademarksAndOtherContracts_de9d50d0-423e-4473-a68e-e28c70ba6d1e": {
    "Id": "ar_pros_PatentsLicensesTrademarksAndOtherContracts_de9d50d0-423e-4473-a68e-e28c70ba6d1e",
    "IdConcepto": "ar_pros_PatentsLicensesTrademarksAndOtherContracts",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_MainCustomers_a3cc3554-7116-4bb3-af18-99fe109fa305": {
    "Id": "ar_pros_MainCustomers_a3cc3554-7116-4bb3-af18-99fe109fa305",
    "IdConcepto": "ar_pros_MainCustomers",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ApplicableLawAndTaxation_b3371496-4239-41f6-9339-0497bed72130": {
    "Id": "ar_pros_ApplicableLawAndTaxation_b3371496-4239-41f6-9339-0497bed72130",
    "IdConcepto": "ar_pros_ApplicableLawAndTaxation",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_HumanResources_434fdced-e792-4953-b604-d4f1bb38805c": {
    "Id": "ar_pros_HumanResources_434fdced-e792-4953-b604-d4f1bb38805c",
    "IdConcepto": "ar_pros_HumanResources",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EnvironmentalPerformance_de7aae5a-a2aa-4345-8a91-86c2db364bed": {
    "Id": "ar_pros_EnvironmentalPerformance_de7aae5a-a2aa-4345-8a91-86c2db364bed",
    "IdConcepto": "ar_pros_EnvironmentalPerformance",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_IssuerMarketInformation_6e4783d2-fda0-4544-96eb-b0f506866899": {
    "Id": "ar_pros_IssuerMarketInformation_6e4783d2-fda0-4544-96eb-b0f506866899",
    "IdConcepto": "ar_pros_IssuerMarketInformation",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ManagementStructure_1d94471a-41da-40f2-8094-281cff38b847": {
    "Id": "ar_pros_ManagementStructure_1d94471a-41da-40f2-8094-281cff38b847",
    "IdConcepto": "ar_pros_ManagementStructure",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_JudicialAdministrativeOrArbitrationProceedings_5875c342-f69f-48f2-a713-5f8dcc8122d5": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedings_5875c342-f69f-48f2-a713-5f8dcc8122d5",
    "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedings",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RightsConferredByTheEstateTrustBonds_a170f4f7-993a-4ea5-a0f8-f29b470e39bb": {
    "Id": "ar_pros_RightsConferredByTheEstateTrustBonds_a170f4f7-993a-4ea5-a0f8-f29b470e39bb",
    "IdConcepto": "ar_pros_RightsConferredByTheEstateTrustBonds",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Distributions_86e1df1d-fafc-4ac3-9314-7847b6464cd8": {
    "Id": "ar_pros_Distributions_86e1df1d-fafc-4ac3-9314-7847b6464cd8",
    "IdConcepto": "ar_pros_Distributions",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EstatePropertyOfTheTrust_ded0854c-e07a-455f-b3e7-0f726a5f8704": {
    "Id": "ar_pros_EstatePropertyOfTheTrust_ded0854c-e07a-455f-b3e7-0f726a5f8704",
    "IdConcepto": "ar_pros_EstatePropertyOfTheTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RealEstateAcquisitionsOrRealEstateDevelopments_3069a25f-3940-4aaf-b3d1-f24564b0814b": {
    "Id": "ar_pros_RealEstateAcquisitionsOrRealEstateDevelopments_3069a25f-3940-4aaf-b3d1-f24564b0814b",
    "IdConcepto": "ar_pros_RealEstateAcquisitionsOrRealEstateDevelopments",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EvolutionOfTheAssetsOfTheTrust_a648b836-2cde-4261-ab1c-7f93797e16f7": {
    "Id": "ar_pros_EvolutionOfTheAssetsOfTheTrust_a648b836-2cde-4261-ab1c-7f93797e16f7",
    "IdConcepto": "ar_pros_EvolutionOfTheAssetsOfTheTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PerformanceOfTheTrustAssets_1c683e13-bc25-442b-adc7-2d40c9824f81": {
    "Id": "ar_pros_PerformanceOfTheTrustAssets_1c683e13-bc25-442b-adc7-2d40c9824f81",
    "IdConcepto": "ar_pros_PerformanceOfTheTrustAssets",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule_28074919-9d25-421a-86dc-3e72c70eeb7e": {
    "Id": "ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule_28074919-9d25-421a-86dc-3e72c70eeb7e",
    "IdConcepto": "ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ReportOfRelevantDebtors_5ece4ece-85b1-4f1f-b248-d41dba96c155": {
      "Id": "ar_pros_ReportOfRelevantDebtors_5ece4ece-85b1-4f1f-b248-d41dba96c155",
      "IdConcepto": "ar_pros_ReportOfRelevantDebtors",
      "IdContextoPlantilla": "ctx",
      "Hechos": [],
      "IdUnidadPlantilla": null,
      "ValorNumerador": null,
      "ValorDenominador": null,
      "Precision": null,
      "Decimales": null,
      "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ContractsAndAgreementsRelevant_5ece4ece-85b1-4f1f-b248-d41dba96c356": {
    "Id": "ar_pros_ContractsAndAgreementsRelevant_5ece4ece-85b1-4f1f-b248-d41dba96c356",
    "IdConcepto": "ar_pros_ContractsAndAgreementsRelevant",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Administrator_1a1a5c23-83ae-43a2-a4fb-64691f7279df": {
    "Id": "ar_pros_Administrator_1a1a5c23-83ae-43a2-a4fb-64691f7279df",
    "IdConcepto": "ar_pros_Administrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_FeesCostsAndExpensesOfTheAdministrator_056d9c02-1f1c-44dc-99cd-963ebeaf9f65": {
    "Id": "ar_pros_FeesCostsAndExpensesOfTheAdministrator_056d9c02-1f1c-44dc-99cd-963ebeaf9f65",
    "IdConcepto": "ar_pros_FeesCostsAndExpensesOfTheAdministrator",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest_f2ccfeca-ac3f-498a-885f-be26c58e648e": {
    "Id": "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest_f2ccfeca-ac3f-498a-885f-be26c58e648e",
    "IdConcepto": "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ExternalAuditorsTrust_acba8a89-7095-4ec9-bb38-78b083bfce7f": {
    "Id": "ar_pros_ExternalAuditorsTrust_acba8a89-7095-4ec9-bb38-78b083bfce7f",
    "IdConcepto": "ar_pros_ExternalAuditorsTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OtherRequiredThirdParties_9191bc7c-e081-402d-a37f-8205002c621a": {
    "Id": "ar_pros_OtherRequiredThirdParties_9191bc7c-e081-402d-a37f-8205002c621a",
    "IdConcepto": "ar_pros_OtherRequiredThirdParties",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_TrustStructureAndMainHolders_eed70121-d52c-4f32-903a-a9daf820871a": {
    "Id": "ar_pros_TrustStructureAndMainHolders_eed70121-d52c-4f32-903a-a9daf820871a",
    "IdConcepto": "ar_pros_TrustStructureAndMainHolders",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarket_fde531c1-45b9-49de-8f95-0e47fd831c11": {
    "Id": "ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarket_fde531c1-45b9-49de-8f95-0e47fd831c11",
    "IdConcepto": "ar_pros_BehaviorOfRealEstateTrustBondsOnTheStockMarket",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTheMarketMaker_d4e3e328-7f8e-4ea8-b629-e8ce6cde4dfa": {
    "Id": "ar_pros_NameOfTheMarketMaker_d4e3e328-7f8e-4ea8-b629-e8ce6cde4dfa",
    "IdConcepto": "ar_pros_NameOfTheMarketMaker",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DurationOfTheContractWithTheMarketMaker_a31dbaaa-c8bf-48d0-96f1-91789b170422": {
    "Id": "ar_pros_DurationOfTheContractWithTheMarketMaker_a31dbaaa-c8bf-48d0-96f1-91789b170422",
    "IdConcepto": "ar_pros_DurationOfTheContractWithTheMarketMaker",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker_0817f2d8-db7b-449f-94ca-cd3a197c9e8e": {
    "Id": "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker_0817f2d8-db7b-449f-94ca-cd3a197c9e8e",
    "IdConcepto": "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfImpactOfPerformanceOfMarketTrainerOnLevelsOfOperationAndPricesOfRealEstateTrustCertificates-0000-0000-0000-0000": {
      "Id": "ar_pros_DescriptionOfImpactOfPerformanceOfMarketTrainerOnLevelsOfOperationAndPricesOfRealEstateTrustCertificates-0000-0000-0000-0000",
      "IdConcepto": "ar_pros_DescriptionOfImpactOfPerformanceOfMarketTrainerOnLevelsOfOperationAndPricesOfRealEstateTrustCertificates",
      "IdContextoPlantilla": "ctx",
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