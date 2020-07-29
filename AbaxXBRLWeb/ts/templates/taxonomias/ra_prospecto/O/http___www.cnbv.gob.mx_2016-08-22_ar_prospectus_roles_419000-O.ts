///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/419000-O
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_419000_O implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_419000_O
         */
        constructor() {

            this.ListadoDeFormulas = {

                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality',
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
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_NameOfTheStateOrMunicipality': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_NameOfTheStateOrMunicipality',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_NameOfTheStateOrMunicipality',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_OfficeAddressStateOrMunicipalExecutive': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_OfficeAddressStateOrMunicipalExecutive',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_OfficeAddressStateOrMunicipalExecutive',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_RelevantMacroeconomicData': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_RelevantMacroeconomicData',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_RelevantMacroeconomicData',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_EnumeratePublicServices': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_EnumeratePublicServices',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_EnumeratePublicServices',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfRelevantContracts': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfRelevantContracts',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfRelevantContracts',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfRelevantAdministrativeProcesses': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfRelevantAdministrativeProcesses',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfRelevantAdministrativeProcesses',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_ApplicableLawAndTaxSituation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_ApplicableLawAndTaxSituation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_ApplicableLawAndTaxSituation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_HumanResources': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_HumanResources',
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
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_CorporateInformation': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_CorporateInformation',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_CorporateInformation',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfKeyAssets': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_DescriptionOfKeyAssets',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_DescriptionOfKeyAssets',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_Investments': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_Investments',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ar_pros_Investments',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_JudicialAdministrativeOrArbitrationProceedings': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'No_Vacios_DESCRIPCION_DE_LA_ENTIDAD_FEDERATIVA_O_MUNICIPIO_ar_pros_JudicialAdministrativeOrArbitrationProceedings',
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
  "ar_pros_ReferenceIncorporationFederalEntityOrMunicipality_20a66a6d-0d4c-4521-80e2-bb83d11e3af8": {
    "Id": "ar_pros_ReferenceIncorporationFederalEntityOrMunicipality_20a66a6d-0d4c-4521-80e2-bb83d11e3af8",
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
  "ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality_d2a63b15-adec-47af-95ba-33f01d7305f2": {
    "Id": "ar_pros_DescriptionAndDevelopmentOfTheFederalEntityOrMunicipality_d2a63b15-adec-47af-95ba-33f01d7305f2",
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
  "ar_pros_NameOfTheStateOrMunicipality_5a9a75ad-fd6a-461a-9970-448ad30c3b5b": {
    "Id": "ar_pros_NameOfTheStateOrMunicipality_5a9a75ad-fd6a-461a-9970-448ad30c3b5b",
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
  "ar_pros_OfficeAddressStateOrMunicipalExecutive_caf6ec6c-1706-4ddd-8a33-96b11dede25f": {
    "Id": "ar_pros_OfficeAddressStateOrMunicipalExecutive_caf6ec6c-1706-4ddd-8a33-96b11dede25f",
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
  "ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState_f5924f60-ae6b-440b-834c-c86cc87275ea": {
    "Id": "ar_pros_PreponderantEconomicActivityOfTheMunicipalityOrState_f5924f60-ae6b-440b-834c-c86cc87275ea",
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
  "ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years_5a911d3d-66a1-4bde-b6f6-77dc9b144cd7": {
    "Id": "ar_pros_DescriptionOfEconomicDevelopmentInTheLast3Years_5a911d3d-66a1-4bde-b6f6-77dc9b144cd7",
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
  "ar_pros_RelevantMacroeconomicData_02c0ca61-9459-458e-8c32-b8853b34c5ef": {
    "Id": "ar_pros_RelevantMacroeconomicData_02c0ca61-9459-458e-8c32-b8853b34c5ef",
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
  "ar_pros_EnumeratePublicServices_53d2205f-a060-4bc3-9279-7037d786179e": {
    "Id": "ar_pros_EnumeratePublicServices_53d2205f-a060-4bc3-9279-7037d786179e",
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
  "ar_pros_DescriptionOfRelevantContracts_3e1d801f-02a0-4489-a276-9402d79fa6db": {
    "Id": "ar_pros_DescriptionOfRelevantContracts_3e1d801f-02a0-4489-a276-9402d79fa6db",
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
  "ar_pros_DescriptionOfRelevantAdministrativeProcesses_f426b82d-10d5-4702-96d0-b161f26c2f70": {
    "Id": "ar_pros_DescriptionOfRelevantAdministrativeProcesses_f426b82d-10d5-4702-96d0-b161f26c2f70",
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
  "ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses_9837ef2a-a693-4499-aad9-bb35cf173a69": {
    "Id": "ar_pros_DescriptionOfTheMainItemsOfIncomeAndExpenses_9837ef2a-a693-4499-aad9-bb35cf173a69",
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
  "ar_pros_ApplicableLawAndTaxSituation_c97d357a-d38c-45c6-8432-81b36cd9bd4b": {
    "Id": "ar_pros_ApplicableLawAndTaxSituation_c97d357a-d38c-45c6-8432-81b36cd9bd4b",
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
  "ar_pros_HumanResources_7bf0a809-d21f-4c81-a36f-f1f242500c60": {
    "Id": "ar_pros_HumanResources_7bf0a809-d21f-4c81-a36f-f1f242500c60",
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
  "ar_pros_CorporateInformation_c75f885f-f7a0-4f0d-a4b1-520c5adbbf5a": {
    "Id": "ar_pros_CorporateInformation_c75f885f-f7a0-4f0d-a4b1-520c5adbbf5a",
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
  "ar_pros_DescriptionOfKeyAssets_b1a53088-9a46-47c4-af46-7908816d6a4a": {
    "Id": "ar_pros_DescriptionOfKeyAssets_b1a53088-9a46-47c4-af46-7908816d6a4a",
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
  "ar_pros_Investments_a8c322b4-acab-4403-a550-8f6a59f43ae3": {
    "Id": "ar_pros_Investments_a8c322b4-acab-4403-a550-8f6a59f43ae3",
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
  "ar_pros_JudicialAdministrativeOrArbitrationProceedings_4dbfacc8-bff7-47f4-a93f-dff7077e0463": {
    "Id": "ar_pros_JudicialAdministrativeOrArbitrationProceedings_4dbfacc8-bff7-47f4-a93f-dff7077e0463",
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