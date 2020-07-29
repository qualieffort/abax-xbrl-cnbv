///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/419000-L
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_419000_L implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_419000_L
         */
        constructor() {

            this.ListadoDeFormulas = {

                'Descripcion_entidad_obligatorio_descripcion_general_ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'Descripcion_entidad_obligatorio_descripcion_general_ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_NameOfTheStateOrMunicipality': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_NameOfTheStateOrMunicipality',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTheStateOrMunicipality',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_OfficeAddressStateOrMunicipalExecutive': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_OfficeAddressStateOrMunicipalExecutive',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OfficeAddressStateOrMunicipalExecutive',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_RelevantMacroeconomicData': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_RelevantMacroeconomicData',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RelevantMacroeconomicData',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_EnumeratePublicServices': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_EnumeratePublicServices',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EnumeratePublicServices',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfRelevantContracts': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfRelevantContracts',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfRelevantContracts',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfRelevantAdministrativeProcesses': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfRelevantAdministrativeProcesses',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfRelevantAdministrativeProcesses',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_ApplicableLawAndTaxSituation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_ApplicableLawAndTaxSituation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ApplicableLawAndTaxSituation',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_HumanResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_HumanResources',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_HumanResources',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_CorporateInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_CorporateInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CorporateInformation',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfKeyAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_DescriptionOfKeyAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfKeyAssets',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_Investments': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_Investments',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Investments',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
                        }
                    }
                ),
                'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_JudicialAdministrativeOrArbitrationProceedings': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'DESCRIP_DE_LA_ENTIDAD_FEDERATIVA_obligatorio_condicional_incorporacion_por_referencia_ar_pros_JudicialAdministrativeOrArbitrationProceedings',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: '(variable2 == "NO" and squeeze(size(variable1)) > 0) or (variable2 != "NO")',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres ó el valor del hecho {variable2} es distinto de "NO"',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debe ser mayor a 0 caracteres ó el valor del hecho {variable2} debe ser distinto de "NO"',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_JudicialAdministrativeOrArbitrationProceedings',
                                PuedeCrearse: true,
                                PuedeEliminarse: true,
                                ConteoHechos: false
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ar_pros_ReferenceIncorporationFederalEntityOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            }),
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
  }
};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "ar_pros_ReferenceIncorporationFederalEntityOrMunicipality_85798896-0d5d-4f2e-a8fe-80fd66ca0a73": {
    "Id": "ar_pros_ReferenceIncorporationFederalEntityOrMunicipality_85798896-0d5d-4f2e-a8fe-80fd66ca0a73",
    "IdConcepto": "ar_pros_ReferenceIncorporationFederalEntityOrMunicipality",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultReferenceIncorporationFederalEntityOrMunicipality"
  },
  "ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality_2dedfcde-e651-423f-9d32-80846a1991f9": {
    "Id": "ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality_2dedfcde-e651-423f-9d32-80846a1991f9",
    "IdConcepto": "ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_NameOfTheStateOrMunicipality_3ffbbfee-9da0-4fb2-b087-ac7ad82fa394": {
    "Id": "ar_pros_NameOfTheStateOrMunicipality_3ffbbfee-9da0-4fb2-b087-ac7ad82fa394",
    "IdConcepto": "ar_pros_NameOfTheStateOrMunicipality",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_OfficeAddressStateOrMunicipalExecutive_1f570806-a249-46c1-a6ef-54681a1945c5": {
    "Id": "ar_pros_OfficeAddressStateOrMunicipalExecutive_1f570806-a249-46c1-a6ef-54681a1945c5",
    "IdConcepto": "ar_pros_OfficeAddressStateOrMunicipalExecutive",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState_6507b275-f514-45f5-be5d-e3c9fd331fda": {
    "Id": "ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState_6507b275-f514-45f5-be5d-e3c9fd331fda",
    "IdConcepto": "ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years_96bf2849-5724-4a81-bb49-f9d4ce35ab4b": {
    "Id": "ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years_96bf2849-5724-4a81-bb49-f9d4ce35ab4b",
    "IdConcepto": "ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_RelevantMacroeconomicData_f67ec777-cd4f-40d6-8c95-6487de35f212": {
    "Id": "ar_pros_RelevantMacroeconomicData_f67ec777-cd4f-40d6-8c95-6487de35f212",
    "IdConcepto": "ar_pros_RelevantMacroeconomicData",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_EnumeratePublicServices_04d977c7-4b34-4781-95e7-424c9f180793": {
    "Id": "ar_pros_EnumeratePublicServices_04d977c7-4b34-4781-95e7-424c9f180793",
    "IdConcepto": "ar_pros_EnumeratePublicServices",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfRelevantContracts_95f439e1-20bb-4da2-8ce0-1e1a78aa179f": {
    "Id": "ar_pros_DescriptionOfRelevantContracts_95f439e1-20bb-4da2-8ce0-1e1a78aa179f",
    "IdConcepto": "ar_pros_DescriptionOfRelevantContracts",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfRelevantAdministrativeProcesses_4b6a0050-0d26-49b2-abaa-563b31b85d94": {
    "Id": "ar_pros_DescriptionOfRelevantAdministrativeProcesses_4b6a0050-0d26-49b2-abaa-563b31b85d94",
    "IdConcepto": "ar_pros_DescriptionOfRelevantAdministrativeProcesses",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses_01295903-f55e-4bd0-9aa2-827f84d35a45": {
    "Id": "ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses_01295903-f55e-4bd0-9aa2-827f84d35a45",
    "IdConcepto": "ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_ApplicableLawAndTaxSituation_6117e104-da4e-4ac7-981c-7063750e7862": {
    "Id": "ar_pros_ApplicableLawAndTaxSituation_6117e104-da4e-4ac7-981c-7063750e7862",
    "IdConcepto": "ar_pros_ApplicableLawAndTaxSituation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_HumanResources_0df05d57-9b87-41f5-a2cc-e25135d5b63f": {
    "Id": "ar_pros_HumanResources_0df05d57-9b87-41f5-a2cc-e25135d5b63f",
    "IdConcepto": "ar_pros_HumanResources",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_CorporateInformation_83eb4c44-c369-4dd9-aa38-c2dfddb91c45": {
    "Id": "ar_pros_CorporateInformation_83eb4c44-c369-4dd9-aa38-c2dfddb91c45",
    "IdConcepto": "ar_pros_CorporateInformation",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_DescriptionOfKeyAssets_84c579d9-fd16-40a4-8c6e-5a2a50fde222": {
    "Id": "ar_pros_DescriptionOfKeyAssets_84c579d9-fd16-40a4-8c6e-5a2a50fde222",
    "IdConcepto": "ar_pros_DescriptionOfKeyAssets",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_Investments_47b27fdf-81c4-4f74-bc5d-aeb49e6459bd": {
    "Id": "ar_pros_Investments_47b27fdf-81c4-4f74-bc5d-aeb49e6459bd",
    "IdConcepto": "ar_pros_Investments",
    "IdContextoPlantilla": "ctx_2014",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "ar_pros_JudicialAdministrativeOrArbitrationProceedings_1e895f02-77cb-40a1-a4ce-ab3a3f276102": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedings_1e895f02-77cb-40a1-a4ce-ab3a3f276102",
    "IdConcepto": "ar_pros_JudicialAdministrativeOrArbitrationProceedings",
    "IdContextoPlantilla": "ctx_2014",
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