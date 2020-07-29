///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/421000-NBIS4
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_421000_NBIS4 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_421000_NBIS4
         */
        constructor() {

            this.ListadoDeFormulas = {


                'La Fideicomiso_no_vacios_ar_pros_HistoryAndDevelopmentOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_HistoryAndDevelopmentOfTheTrust',
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
                ),
                'La Fideicomiso_no_vacios_ar_pros_TransactionStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_TransactionStructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TransactionStructure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_SectorsInWhichTheTrustIsFocusedOnInvestingEnergyOrInfrastructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_SectorsInWhichTheTrustIsFocusedOnInvestingEnergyOrInfrastructure',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_SectorsInWhichTheTrustIsFocusedOnInvestingEnergyOrInfrastructure',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_PatentsLicensesTrademarksAndOtherContracts': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_PatentsLicensesTrademarksAndOtherContracts',
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
                'La Fideicomiso_no_vacios_ar_pros_MainCustomers': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_MainCustomers',
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
                'La Fideicomiso_no_vacios_ar_pros_ApplicableLawAndTaxation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_ApplicableLawAndTaxation',
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
                'La Fideicomiso_no_vacios_ar_pros_HumanResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_HumanResources',
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
                'La Fideicomiso_no_vacios_ar_pros_IssuerMarketInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_IssuerMarketInformation',
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
                'La Fideicomiso_no_vacios_ar_pros_ManagementStructure': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_ManagementStructure',
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
                'La Fideicomiso_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedings': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_JudicialAdministrativeOrArbitrationProceedings',
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
                'La Fideicomiso_no_vacios_ar_pros_Rights': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_Rights',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Rights',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_Distributions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_Distributions',
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
                'La Fideicomiso_no_vacios_ar_pros_DescriptionOfTheAssetsThatMakeUpTheAssetsOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_DescriptionOfTheAssetsThatMakeUpTheAssetsOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfTheAssetsThatMakeUpTheAssetsOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_AssetsRightsOrSecuritiesOwnedBTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_AssetsRightsOrSecuritiesOwnedBTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_AssetsRightsOrSecuritiesOwnedBTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_RealEstateAcquisitions': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_RealEstateAcquisitions',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RealEstateAcquisitions',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_EvolutionOfTheAssetsOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_EvolutionOfTheAssetsOfTheTrust',
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
                'La Fideicomiso_no_vacios_ar_pros_PerformanceOfTheTrustAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_PerformanceOfTheTrustAssets',
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
                'La Fideicomiso_no_vacios_ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule',
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
                'La Fideicomiso_no_vacios_ar_pros_ReportOfRelevantDebtorsOfTheTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_ReportOfRelevantDebtorsOfTheTrust',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ReportOfRelevantDebtorsOfTheTrust',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_ContractsAndAgreementsRelevant': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_ContractsAndAgreementsRelevant',
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
                'La Fideicomiso_no_vacios_ar_pros_Administrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_Administrator',
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
                'La Fideicomiso_no_vacios_ar_pros_TrustStructureAndMainHolders': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_TrustStructureAndMainHolders',
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
                'La Fideicomiso_no_vacios_ar_pros_FeesCostsAndExpensesOfTheAdministrator': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_FeesCostsAndExpensesOfTheAdministrator',
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
                'La Fideicomiso_no_vacios_ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest',
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
                'La Fideicomiso_no_vacios_ar_pros_ExternalAuditorsTrust': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_ExternalAuditorsTrust',
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
                'La Fideicomiso_no_vacios_ar_pros_OtherRequiredThirdParties': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_OtherRequiredThirdParties',
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
                'La Fideicomiso_no_vacios_ar_pros_TrustStructureAndMainHolder': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_TrustStructureAndMainHolder',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_TrustStructureAndMainHolder',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_BehaviorOfTheTrustBondsInvestingInEnergyAndInfrastructureOnTheStockMarket': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_BehaviorOfTheTrustBondsInvestingInEnergyAndInfrastructureOnTheStockMarket',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_BehaviorOfTheTrustBondsInvestingInEnergyAndInfrastructureOnTheStockMarket',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'La Fideicomiso_no_vacios_ar_pros_NameOfTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_NameOfTheMarketMaker',
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
                'La Fideicomiso_no_vacios_ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker',
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
                'La Fideicomiso_no_vacios_ar_pros_DurationOfTheContractWithTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_DurationOfTheContractWithTheMarketMaker',
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
                'La Fideicomiso_no_vacios_ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker',
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
                'La Fideicomiso_no_vacios_ar_pros_DescriptionOfImpactOfPerformanceOfMarketTrainerOnLevelsOfOperationAndPricesOfRealEstateTrustCertificates': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'La Fideicomiso_no_vacios_ar_pros_DescriptionOfImpactOfPerformanceOfMarketTrainerOnLevelsOfOperationAndPricesOfRealEstateTrustCertificates',
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
  "ar_pros_ReferenceIncorporationTrust_dd626c66-a45f-491b-9c2b-1f75bdc2aaec": {
    "Id": "ar_pros_ReferenceIncorporationTrust_dd626c66-a45f-491b-9c2b-1f75bdc2aaec",
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
  "ar_pros_HistoryAndDevelopmentOfTheTrust_5722633c-660f-4112-b4e3-52f54cb907d2": {
    "Id": "ar_pros_HistoryAndDevelopmentOfTheTrust_5722633c-660f-4112-b4e3-52f54cb907d2",
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
  "ar_pros_TransactionStructure_7e63be26-93bb-4a05-af8a-8f8acf70bf6c": {
    "Id": "ar_pros_TransactionStructure_7e63be26-93bb-4a05-af8a-8f8acf70bf6c",
    "IdConcepto": "ar_pros_TransactionStructure",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_SectorsInWhichTheTrustIsFocusedOnInvestingEnergyOrInfrastructure_d1d4fce7-9d58-4b5b-9059-8efb26ca60ce": {
    "Id": "ar_pros_SectorsInWhichTheTrustIsFocusedOnInvestingEnergyOrInfrastructure_d1d4fce7-9d58-4b5b-9059-8efb26ca60ce",
    "IdConcepto": "ar_pros_SectorsInWhichTheTrustIsFocusedOnInvestingEnergyOrInfrastructure",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PatentsLicensesTrademarksAndOtherContracts_9cabacdc-6b94-4193-b319-eb18704eb6f7": {
    "Id": "ar_pros_PatentsLicensesTrademarksAndOtherContracts_9cabacdc-6b94-4193-b319-eb18704eb6f7",
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
  "ar_pros_MainCustomers_9bd783ff-ce80-4226-8a45-852d2ef841d5": {
    "Id": "ar_pros_MainCustomers_9bd783ff-ce80-4226-8a45-852d2ef841d5",
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
  "ar_pros_ApplicableLawAndTaxation_d0f7b8f9-d059-4bee-9a0e-f170121dad61": {
    "Id": "ar_pros_ApplicableLawAndTaxation_d0f7b8f9-d059-4bee-9a0e-f170121dad61",
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
  "ar_pros_HumanResources_d6f5186f-1fc4-4ab0-81f1-6465fca491c3": {
    "Id": "ar_pros_HumanResources_d6f5186f-1fc4-4ab0-81f1-6465fca491c3",
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
  "ar_pros_IssuerMarketInformation_0827f9df-20b7-4086-8e3a-d0b5e87f2d1a": {
    "Id": "ar_pros_IssuerMarketInformation_0827f9df-20b7-4086-8e3a-d0b5e87f2d1a",
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
  "ar_pros_ManagementStructure_6844f8e3-1c9a-4a5b-bed7-a648702e6882": {
    "Id": "ar_pros_ManagementStructure_6844f8e3-1c9a-4a5b-bed7-a648702e6882",
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
  "ar_pros_JudicialAdministrativeOrArbitrationProceedings_950861bc-5281-4cd1-bfcd-ba485d8762d6": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedings_950861bc-5281-4cd1-bfcd-ba485d8762d6",
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
  "ar_pros_Rights_6760fa3c-4b55-4fe7-aa2a-ef87a4803c17": {
    "Id": "ar_pros_Rights_6760fa3c-4b55-4fe7-aa2a-ef87a4803c17",
    "IdConcepto": "ar_pros_Rights",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Distributions_36d3f7f6-a316-4989-b636-96662f7a6c85": {
    "Id": "ar_pros_Distributions_36d3f7f6-a316-4989-b636-96662f7a6c85",
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
  "ar_pros_AssetsRightsOrSecuritiesOwnedBTheTrust_836ebd39-b010-49cc-a822-15ceea546a0c": {
    "Id": "ar_pros_AssetsRightsOrSecuritiesOwnedBTheTrust_836ebd39-b010-49cc-a822-15ceea546a0c",
    "IdConcepto": "ar_pros_AssetsRightsOrSecuritiesOwnedBTheTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RealEstateAcquisitions_001dd4f6-473e-4d82-9576-993f9b0ffa0d": {
    "Id": "ar_pros_RealEstateAcquisitions_001dd4f6-473e-4d82-9576-993f9b0ffa0d",
    "IdConcepto": "ar_pros_RealEstateAcquisitions",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EvolutionOfTheAssetsOfTheTrust_6236d65b-b70e-497e-b835-bbf981a9513a": {
    "Id": "ar_pros_EvolutionOfTheAssetsOfTheTrust_6236d65b-b70e-497e-b835-bbf981a9513a",
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
  "ar_pros_PerformanceOfTheTrustAssets_3aec9976-82d6-402e-ba78-a1e0c0e2bc9b": {
    "Id": "ar_pros_PerformanceOfTheTrustAssets_3aec9976-82d6-402e-ba78-a1e0c0e2bc9b",
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
  "ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule_53c6c025-f42e-4346-b8d6-41436acabbdd": {
    "Id": "ar_pros_ComplianceWithTheBusinessPlanAndInvestmentSchedule_53c6c025-f42e-4346-b8d6-41436acabbdd",
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
  "ar_pros_ReportOfRelevantDebtorsOfTheTrust_0b03d3e4-9ad4-4c63-96e5-d173fca43a16": {
    "Id": "ar_pros_ReportOfRelevantDebtorsOfTheTrust_0b03d3e4-9ad4-4c63-96e5-d173fca43a16",
    "IdConcepto": "ar_pros_ReportOfRelevantDebtorsOfTheTrust",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ContractsAndAgreementsRelevant_6409cefb-041f-4546-82dd-f651ec4d7796": {
    "Id": "ar_pros_ContractsAndAgreementsRelevant_6409cefb-041f-4546-82dd-f651ec4d7796",
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
  "ar_pros_Administrator_df7d0ef4-d9c6-4f42-9cc3-a30fdf49aa01": {
    "Id": "ar_pros_Administrator_df7d0ef4-d9c6-4f42-9cc3-a30fdf49aa01",
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
  "ar_pros_FeesCostsAndExpensesOfTheAdministrator_54ae6b9a-b1b4-4782-989c-80a22435b06c": {
    "Id": "ar_pros_FeesCostsAndExpensesOfTheAdministrator_54ae6b9a-b1b4-4782-989c-80a22435b06c",
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
  "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest_7fd17e68-7345-4edf-9ed7-4bc7c10de4e0": {
    "Id": "ar_pros_TransactionsWithRelatedPartiesAndConflictsOfInterest_7fd17e68-7345-4edf-9ed7-4bc7c10de4e0",
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
  "ar_pros_ExternalAuditorsTrust_7f0ccd2a-dbb7-45ac-bb80-d43121f69135": {
    "Id": "ar_pros_ExternalAuditorsTrust_7f0ccd2a-dbb7-45ac-bb80-d43121f69135",
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
  "ar_pros_OtherRequiredThirdParties_feacbac1-9949-4231-9bcd-734b141d3cf0": {
    "Id": "ar_pros_OtherRequiredThirdParties_feacbac1-9949-4231-9bcd-734b141d3cf0",
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
  "ar_pros_TrustStructureAndMainHolders_ae851a11-7c7a-4539-829d-60e89907653e": {
    "Id": "ar_pros_TrustStructureAndMainHolders_ae851a11-7c7a-4539-829d-60e89907653e",
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
  "ar_pros_BehaviorOfTheTrustBondsInvestingInEnergyAndInfrastructureOnTheStockMarket_81c27ea2-70a6-4206-aa7a-0c4f8a56d48a": {
    "Id": "ar_pros_BehaviorOfTheTrustBondsInvestingInEnergyAndInfrastructureOnTheStockMarket_81c27ea2-70a6-4206-aa7a-0c4f8a56d48a",
    "IdConcepto": "ar_pros_BehaviorOfTheTrustBondsInvestingInEnergyAndInfrastructureOnTheStockMarket",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTheMarketMaker_e89089a8-6714-4fb3-b325-78cce58db1e7": {
    "Id": "ar_pros_NameOfTheMarketMaker_e89089a8-6714-4fb3-b325-78cce58db1e7",
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
  "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker_0abd3393-2ef2-4dad-92a6-f26be9a89379": {
    "Id": "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker_0abd3393-2ef2-4dad-92a6-f26be9a89379",
    "IdConcepto": "ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker",
    "IdContextoPlantilla": "ctx",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DurationOfTheContractWithTheMarketMaker_234790ed-7829-47a9-a4b1-0e7c68dafdad": {
    "Id": "ar_pros_DurationOfTheContractWithTheMarketMaker_234790ed-7829-47a9-a4b1-0e7c68dafdad",
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
  "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker_9f3ecbd2-14a8-4f32-8c76-68d50ece3fdd": {
    "Id": "ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker_9f3ecbd2-14a8-4f32-8c76-68d50ece3fdd",
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