///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

  /**
   * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/412000-L
   * 
   * @author AbaxXBRL Template Generator
   * @version 1.0
   */
  export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_L implements abaxXBRL.model.DefinicionDeElementosPlantilla {

    /** La definición de los contextos utilizados por la plantilla */
    ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

    /** La definición de las unidades utilizadas por la plantilla */
    UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

    /** La definición de los hechos utilizados por la plantilla */
    HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

    /** El listado de fórmulas que se utilizan en un rol */
    ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

    /**
     * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_roles_412000_L
     */
    constructor() {

        this.ListadoDeFormulas = {

            'Portada_No_Vacios_ar_pros_DenominationOfTheIssuer': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_DenominationOfTheIssuer',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DenominationOfTheIssuer',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_Ticker': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_Ticker',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_Ticker',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_SerieDepositary': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_SerieDepositary',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieDepositary',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_LegendArticle86OfTheLMV': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_LegendArticle86OfTheLMV',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_LegendArticle86OfTheLMV',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_NumberOfRegister': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_NumberOfRegister',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfRegister',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_ProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_ProspectusSupplementBrochure',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ProspectusSupplementBrochure',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_LegendProspectusSupplementBrochure': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_LegendProspectusSupplementBrochure',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_LegendProspectusSupplementBrochure',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_TermAndExpirationDate': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_TermAndExpirationDate',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TermAndExpirationDate',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Portada_No_Vacios_ar_pros_NumberOfSeriesInWhichTheEmissionIsDividedInTheCaseOfSecuritiesIssuedUnderATrust': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Portada_No_Vacios_ar_pros_NumberOfSeriesInWhichTheEmissionIsDividedInTheCaseOfSecuritiesIssuedUnderATrust',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfSeriesInWhichTheEmissionIsDividedInTheCaseOfSecuritiesIssuedUnderATrust',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_Class': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_Class',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_Class',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_EquitySerie': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_EquitySerie',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_EquitySerie',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieType': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieType',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieType',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTicker': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTicker',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieTicker',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTotalAmount': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTotalAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieTotalAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNumberOfStocks': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNumberOfStocks',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieNumberOfStocks',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNominalValue': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNominalValue',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieNominalValue',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieStockExhangesWhereTheyAreRegistered': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieStockExhangesWhereTheyAreRegistered',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieStockExhangesWhereTheyAreRegistered',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTerm': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieTerm',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieTerm',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_EquitySerieSettlementDate': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_EquitySerieSettlementDate',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_EquitySerieSettlementDate',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNumberOfCorrespondingEmission': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieNumberOfCorrespondingEmission',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieNumberOfCorrespondingEmission',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieObservations': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Renglon_Serie_especificacion_de_las_caracteristicas_de_los_titulos_en_circulacion_ar_pros_SerieObservations',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_SerieObservations',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_PeriodOrDateOfTheOffer': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_PeriodOrDateOfTheOffer',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_PeriodOrDateOfTheOffer",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_ClosingDateBookOrAuction': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_ClosingDateBookOrAuction',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_ClosingDateBookOrAuction",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DateOfRegisterInTheStockExchange': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DateOfRegisterInTheStockExchange',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DateOfRegisterInTheStockExchange",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SettlementDate': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SettlementDate',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_SettlementDate",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalNumberOfValues': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalNumberOfValues',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TotalNumberOfValues",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_IssuanceUnderArt13OfTheCUELegend': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_IssuanceUnderArt13OfTheCUELegend',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_InTheCaseOfAdditionalValues': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_InTheCaseOfAdditionalValues',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AdditionalValueDateOfIssue': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AdditionalValueDateOfIssue',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_AdditionalValueDateOfIssue",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DateOfPublicationOfTenderNotice': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DateOfPublicationOfTenderNotice',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AmountOfPositionsPresented': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AmountOfPositionsPresented',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_AmountOfPositionsPresented",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NumberOfPositionsPresented': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NumberOfPositionsPresented',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_NumberOfPositionsPresented",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NumberOfAssignedPositions': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NumberOfAssignedPositions',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_NumberOfAssignedPositions",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalDemandValues': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_TotalDemandValues',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TotalDemandValues",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AssignedRateOrPrice': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_AssignedRateOrPrice',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_AssignedRateOrPrice",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_RateOrMinimumAndMaximumPrice': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_RateOrMinimumAndMaximumPrice',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_RateOrMinimumAndMaximumPrice",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_Term': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_Term',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_Term",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_WhereApplicableNumberCorrespondingEmission': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_WhereApplicableNumberCorrespondingEmission',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_WhereApplicableNumberCorrespondingEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SerieIssuanceDate': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SerieIssuanceDate',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_SerieIssuanceDate",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_InterestRateOfIssue': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_InterestRateOfIssue',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_InterestRateOfIssue",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_FrequencyOfPaymentOfIncome': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_FrequencyOfPaymentOfIncome',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_FrequencyOfPaymentOfIncome",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_InterestRateApplicableForTheFirstPeriod': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_InterestRateApplicableForTheFirstPeriod',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_InterestRateApplicableForTheFirstPeriod",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_WhereAppropriateSubordinationOfTitles': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_WhereAppropriateSubordinationOfTitles',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_WhereAppropriateSubordinationOfTitles",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DataRelatingToTheIndenture': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DataRelatingToTheIndenture',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DataRelatingToTheIndenture",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NumberOfTrust': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_NumberOfTrust',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_NumberOfTrust",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_DescriptionOfHowThePlacementPriceIsDetermined',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_WhereAppropriateIssueNumberForTheCaseOfSecuritiesIssuedUnderATrust': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_WhereAppropriateIssueNumberForTheCaseOfSecuritiesIssuedUnderATrust',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_WhereAppropriateIssueNumberForTheCaseOfSecuritiesIssuedUnderATrust",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SerieNumberOfCorrespondingEmission': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_ar_pros_SerieNumberOfCorrespondingEmission',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_SerieNumberOfCorrespondingEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_AmountProgramAndOrNumberOfCertificates': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_AmountProgramAndOrNumberOfCertificates',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_AmountProgramAndOrNumberOfCertificates",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_LifeOfTheProgram': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_LifeOfTheProgram',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_LifeOfTheProgram",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_EffectOfEmissionsUnderAProgram': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Programa_2_ar_pros_EffectOfEmissionsUnderAProgram',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 == "NO") and variable4 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un reporte de tipo Programa o Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_EffectOfEmissionsUnderAProgram",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue': new model.DefinicionFormula().deserialize(
                {
                    Id: 'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable5 == "SI" and ((variable2 != "INF" and variable3 == "SI") or variable4 != "INF"))',
                    MensajeExito: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                    MensajeError: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_AdditionalValueDateOfIssue",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue': new model.DefinicionFormula().deserialize(
                {
                    Id: 'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable5 == "SI" and ((variable2 != "INF" and variable3 == "SI") or variable4 != "INF"))',
                    MensajeExito: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                    MensajeError: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_TotalAmountOfSecurities': new model.DefinicionFormula().deserialize(
                {
                    Id: 'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_TotalAmountOfSecurities',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable5 == "SI" and ((variable2 != "INF" and variable3 == "SI") or variable4 != "INF"))',
                    MensajeExito: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                    MensajeError: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TotalAmountOfSecurities",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional': new model.DefinicionFormula().deserialize(
                {
                    Id: 'LA_OFERTA_obligatorio_condicional_tabla_Valores_Adicionales_ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or not(variable5 == "SI" and ((variable2 != "INF" and variable3 == "SI") or variable4 != "INF"))',
                    MensajeExito: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                    MensajeError: 'El hecho {variable1} de la tabla "Valores adicionales" debe existir y ser reportado al menos una vez para Prospecto Emisión unica o Suplemento cuando el concepto "Tratándose de valores adicionales" es "SI".',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Emision_Al_Amparo_ar_pros_IssuanceUnderArt13OfTheCUELegend': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Emision_Al_Amparo_ar_pros_IssuanceUnderArt13OfTheCUELegend',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 != "SI" or squeeze(size(variable1)) > 0 )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado en caso de que el concepto "Emisión al amparo del art. 13 bis de la CUE" sea "SI", en caso contrario no debe ser reportado.',
                    MensajeError: 'El hecho {variable1} debe ser reportado en caso de que el concepto "Emisión al amparo del art. 13 bis de la CUE" sea "SI", en caso contrario no debe ser reportado.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TheMentionOfBeingPublicOffering': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TheMentionOfBeingPublicOffering',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_LegendDocumentAvailableWithTheUnderwriter': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_LegendDocumentAvailableWithTheUnderwriter',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_LegendDocumentAvailableWithTheUnderwriter",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_DiscountInterestRateOrYield': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_DiscountInterestRateOrYield',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DiscountInterestRateOrYield",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_PlaceAndMannerOfPaymentOfInterestOrIncomeAndPrincipal': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_PlaceAndMannerOfPaymentOfInterestOrIncomeAndPrincipal',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_PlaceAndMannerOfPaymentOfInterestOrIncomeAndPrincipal",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_Settlor': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_Settlor',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_Settlor",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TrusteesInFirstPlace': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TrusteesInFirstPlace',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TrusteesInFirstPlace",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TrusteesInSecondPlace': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TrusteesInSecondPlace',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TrusteesInSecondPlace",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TrusteesInThirdPlace': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TrusteesInThirdPlace',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TrusteesInThirdPlace",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_OtherTrustees': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_OtherTrustees',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_OtherTrustees",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TrustValues': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_TrustValues',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TrustValues",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_RightsUnderTheSecuritiesIssued': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_RightsUnderTheSecuritiesIssued',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_RightsUnderTheSecuritiesIssued",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_GeneralCharacteristicsOfTheSecuritiesToTrust': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_GeneralCharacteristicsOfTheSecuritiesToTrust',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_GeneralCharacteristicsOfTheSecuritiesToTrust",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_FormOfAmortizationOfSecurities': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_FormOfAmortizationOfSecurities',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_FormOfAmortizationOfSecurities",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_NameOfTheCommonRepresentative': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_NameOfTheCommonRepresentative',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_NameOfTheCommonRepresentative",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_WhereAppropriateValuatoryOpinion': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_WhereAppropriateValuatoryOpinion',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_WhereAppropriateValuatoryOpinion",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Suplemento_Prospecto__ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 != "INF" or variable3 != "INF" )',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueDateOfIssue',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AdditionalValueDateOfIssue',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueAmount': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueAmount',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AdditionalValueAmount',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueNumberOfValues': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueNumberOfValues',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AdditionalValueNumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueTerm': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueTerm',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AdditionalValueTerm',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValuePlacementPrice': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValuePlacementPrice',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AdditionalValuePlacementPrice',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueObservations': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Renglon_Renglon_Valores_Adicionales_ar_pros_AdditionalValueObservations',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_AdditionalValueObservations',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Serie_ar_pros_Series': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Serie_ar_pros_Series',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_Series',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Serie_ar_pros_Type': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Serie_ar_pros_Type',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_Type',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Serie_ar_pros_Class': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Serie_ar_pros_Class',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_Class',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Serie_ar_pros_NominalValue': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Serie_ar_pros_NominalValue',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NominalValue',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Serie_ar_pros_NumberOfValues': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Serie_ar_pros_NumberOfValues',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_NumberOfValues',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Serie_ar_pros_TickerOfTheOriginStockMarket': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Serie_ar_pros_TickerOfTheOriginStockMarket',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TickerOfTheOriginStockMarket',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Serie_ar_pros_TypeOfOperation': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Serie_ar_pros_TypeOfOperation',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TypeOfOperation',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'PORTADA_Obligatorio_Serie_ar_pros_Observations': new model.DefinicionFormula().deserialize(
                {
                    Id: 'PORTADA_Obligatorio_Serie_ar_pros_Observations',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_Observations',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_SerieNumberOfCorrespondingEmission': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_SerieNumberOfCorrespondingEmission',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                    MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_SerieNumberOfCorrespondingEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_Brochure",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_DateOfPublicationOfTenderNotice': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_DateOfPublicationOfTenderNotice',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                    MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_Brochure",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_Series': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_Series',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                    MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_Series",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_Brochure",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_TotalAmountOfTheOffer': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_TotalAmountOfTheOffer',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                    MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_Brochure",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_DebtSerieSettlementDate': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_DebtSerieSettlementDate',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                    MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DebtSerieSettlementDate",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_Brochure",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                    MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_Brochure",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_RevolvingCharacterProgram': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Prospecto_emisión_única_Suplemento_Folleto_ar_pros_RevolvingCharacterProgram',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 == "INF" or variable3 != "SI") and variable4 == "INF" and variable5 == "INF")',
                    MensajeExito: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    MensajeError: 'La sección {variable1} es obligatoria para tipo de reporte: Prospecto en emisión única, Suplemento y Folleto.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_RevolvingCharacterProgram",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_Brochure",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_En_caso_de_emisiones_al_amparo_de_un_programa_ar_pros_InTheCaseOfEmissionsUnderAProgram': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_En_caso_de_emisiones_al_amparo_de_un_programa_ar_pros_InTheCaseOfEmissionsUnderAProgram',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or (variable2 == "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_InTheCaseOfEmissionsUnderAProgram",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_Supplement",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            'Obligatorio_Condicional_Monto_total_programa_inscripcion_ar_pros_TotalAmountProgramRegistration': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Monto_total_programa_inscripcion_ar_pros_TotalAmountProgramRegistration',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable1)) > 0) or ((variable2 != "INF" or variable3 == "NO") and variable4 != "INF")',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para un tipo de reporte Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": ""
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_PlacementProspectus",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_OnlyEmission",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Brochure",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "ValorFallback": "INF"
                        }
                    }
                }
            ),
            //===========================================================================================================================
            // Existence Asertions
            //===========================================================================================================================
            'ExistenciaPersonaResponsable': new model.DefinicionFormula().deserialize(
                {
                    Id: 'ExistenciaPersonaResponsable',
                    TipoFormula: model.TipoFormula.ExistenceAssertion,
                    Expresion: 'bignumber(variable1) >= 1',
                    MensajeExito: 'El concepto "Nombre" de la tabla "Personas responsables del informe" debe existir y ser reportado al menos una vez.',
                    MensajeError: 'El concepto "Nombre" de la tabla "Personas responsables del informe" debe existir y ser reportado al menos una vez.',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ResponsiblePersonName',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: true
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Calificaciones_': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Calificaciones_',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(squeeze(size(variable2)) > 0) or (squeeze(size(variable3)) > 0) or (squeeze(size(variable4)) > 0) or (squeeze(size(variable5)) > 0) or (squeeze(size(variable6)) > 0) or (squeeze(size(variable7)) > 0) or (squeeze(size(variable8)) > 0) or (squeeze(size(variable9)) > 0)',
                    MensajeExito: 'Para cada serie de deuda se debe registrar almenos una calificación.',
                    MensajeError: 'Para cada serie de deuda se debe registrar almenos una calificación.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                    {
                        "variable1": {
                            "Id": "variable1",
                            "IdConcepto": "ar_pros_DebtSeries",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false
                        },
                        "variable2": {
                            "Id": "variable2",
                            "IdConcepto": "ar_pros_Rating",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:FitchMexicoSADeCVMember",
                                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                    "IdItemMiembro": "ar_pros_FitchMexicoSADeCVMember"
                                }
                            ],
                            "MismasDimensiones": true
                        },
                        "variable3": {
                            "Id": "variable3",
                            "IdConcepto": "ar_pros_Rating",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:HRRatingsDeMexicoSADeCVMember",
                                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                    "IdItemMiembro": "ar_pros_HRRatingsDeMexicoSADeCVMember"
                                }
                            ],
                            "MismasDimensiones": true
                        },
                        "variable4": {
                            "Id": "variable4",
                            "IdConcepto": "ar_pros_Rating",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:MoodysDeMexicoSADeCVMember",
                                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                    "IdItemMiembro": "ar_pros_MoodysDeMexicoSADeCVMember"
                                }
                            ],
                            "MismasDimensiones": true
                        },
                        "variable5": {
                            "Id": "variable5",
                            "IdConcepto": "ar_pros_Rating",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:StandardAndPoorsSADeCVMember",
                                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                    "IdItemMiembro": "ar_pros_StandardAndPoorsSADeCVMember"
                                }
                            ],
                            "MismasDimensiones": true
                        },
                        "variable6": {
                            "Id": "variable6",
                            "IdConcepto": "ar_pros_Rating",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:VerumCalificadoraDeValoresSAPIDeCVMember",
                                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                    "IdItemMiembro": "ar_pros_VerumCalificadoraDeValoresSAPIDeCVMember"
                                }
                            ],
                            "MismasDimensiones": true
                        },
                        "variable7": {
                            "Id": "variable7",
                            "IdConcepto": "ar_pros_Rating",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:AMBestAmericaLatinaSADeCVMember",
                                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                    "IdItemMiembro": "ar_pros_AMBestAmericaLatinaSADeCVMember"
                                }
                            ],
                            "MismasDimensiones": true
                        },
                        "variable8": {
                            "Id": "variable8",
                            "IdConcepto": "ar_pros_Rating",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:DBRSRatingsMexicoSAdeCVMember",
                                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                    "IdItemMiembro": "ar_pros_DBRSRatingsMexicoSAdeCVMember"
                                }
                            ],
                            "MismasDimensiones": true
                        },
                        "variable9": {
                            "Id": "variable9",
                            "IdConcepto": "ar_pros_Rating",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingAxis",
                                    "QNameItemMiembro": "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:SecuritiesRatingOtherMember",
                                    "IdDimension": "ar_pros_SecuritiesRatingAxis",
                                    "IdItemMiembro": "ar_pros_SecuritiesRatingOtherMember"
                                }
                            ],
                            "MismasDimensiones": true
                        }
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeries': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSeries',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtSeries',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtIssuanceDate': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtIssuanceDate',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtIssuanceDate',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieSettlementDate': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieSettlementDate',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtSerieSettlementDate',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieTermOfTheIssuancePros': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSerieTermOfTheIssuancePros',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtSerieTermOfTheIssuancePros',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtInterestPerformanceAndCalculationProcedure': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtInterestPerformanceAndCalculationProcedure',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtInterestPerformanceAndCalculationProcedure',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtPaymentFrequencyOfInterest': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtPaymentFrequencyOfInterest',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtPaymentFrequencyOfInterest',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtSubordinationOfTitlesIfAny': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtSubordinationOfTitlesIfAny',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtSubordinationOfTitlesIfAny',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtGuaranteeIfAny': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtGuaranteeIfAny',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtGuaranteeIfAny',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtTrustIfAny': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtTrustIfAny',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtTrustIfAny',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtCommonRepresentative': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtCommonRepresentative',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtCommonRepresentative',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtDepositary': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtDepositary',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtDepositary',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Requeridos_Deuda_Por_Serie_ar_pros_DebtTaxRegime': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Requeridos_Deuda_Por_Serie_ar_pros_DebtTaxRegime',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_DebtTaxRegime',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Condicional_LeyendaSuplemento_ar_pros_SupplementLegend': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_LeyendaSuplemento_ar_pros_SupplementLegend',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                    MensajeExito: 'Para el tipo de reporte "Suplemento" el concepto "Leyenda sumplemento" es requerido, para otro tipo de reporte el concepto "Leyenda suplemento" no debe ser reportado.',
                    MensajeError: 'Para el tipo de reporte "Suplemento" el concepto "Leyenda sumplemento" es requerido, para otro tipo de reporte el concepto "Leyenda suplemento" no debe ser reportado.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_SupplementLegend",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_Supplement",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                }
            ),
            'obligatorio_condicional_mencionar_dependiendo_parcial_o_total_': new model.DefinicionFormula().deserialize(
                {
                    Id: 'obligatorio_condicional_mencionar_dependiendo_parcial_o_total_',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "Fideicomisos" and squeeze(size(variable1)) > 0)  or (variable2 != "Fideicomisos")',
                    MensajeExito: 'El concepto "Mencionar dependencia parcial o total" existe y es reportado cuando el "Tipo de instrumento" es "Fideicomisos"',
                    MensajeError: 'El concepto "Mencionar dependencia parcial o total" debe existir y ser reportado cuando el "Tipo de instrumento" es "Fideicomisos"',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_TypeOfInstrument",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                }
            ),
            'No_Vacios_Datos_Generales_ar_pros_IssuanceUnderArt13OfTheCUE': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_IssuanceUnderArt13OfTheCUE',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_IssuanceUnderArt13OfTheCUE',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'No_Vacios_Datos_Generales_ar_pros_LimitedPublicOffering': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_LimitedPublicOffering',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_LimitedPublicOffering',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'No_Vacios_Datos_Generales_ar_pros_TypeOfInstrument': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_TypeOfInstrument',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_TypeOfInstrument',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'No_Vacios_Datos_Generales_ar_pros_ForeingIssuer': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_ForeingIssuer',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_ForeingIssuer',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'No_Vacios_Datos_Generales_ar_pros_MentioningwhetherOrNotHaveCollateral': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_MentioningwhetherOrNotHaveCollateral',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_MentioningwhetherOrNotHaveCollateral',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'No_Vacios_Datos_Generales_ar_pros_IssuewithCapitalCalls': new model.DefinicionFormula().deserialize(
                {
                    Id: 'No_Vacios_Datos_Generales_ar_pros_IssuewithCapitalCalls',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: 'squeeze(size(variable1)) > 0',
                    MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                    MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                    VariablesCoincidenPeriodo: false,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ar_pros_IssuewithCapitalCalls',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        })
                    }
                }
            ),
            'Obligatorio_Leyenda_Prospecto_ar_pros_ProspectusLegend': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Leyenda_Prospecto_ar_pros_ProspectusLegend',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable2 == "INF" and squeeze(size(variable1)) == 0) or (variable2 != "INF" and squeeze(size(variable1)) > 0)',
                    MensajeExito: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                    MensajeError: 'Para el tipo de reporte "Prospecto de colocación" el hecho {variable1} es requerido, para otro tipo de reporte el concepto "Emisión única" no debe ser reportado.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_ProspectusLegend",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": ""
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
                        }
                }
            ),
            'Obligatorio_Condicional_Emision_Unica_Prospecto_': new model.DefinicionFormula().deserialize(
                {
                    Id: 'Obligatorio_Condicional_Emision_Unica_Prospecto_',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(variable1 != "INF" or  variable2 == 0)',
                    MensajeExito: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    MensajeError: 'El hecho {variable1} debe ser reportado para reportes del tipo Prospecto y Suplemento.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables:
                        {
                            "variable1": {
                                "Id": "variable1",
                                "IdConcepto": "ar_pros_PlacementProspectus",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            },
                            "variable2": {
                                "Id": "variable2",
                                "IdConcepto": "ar_pros_OnlyEmission",
                                "PuedeEliminarse": false,
                                "PuedeCrearse": false,
                                "ConteoHechos": false,
                                "ValorFallback": "INF"
                            }
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
        "ar_pros_TheMentionOfBeingPublicOffering_c6b6cb52-6dfb-4eea-97e2-391c757a3813": {
          "Id": "ar_pros_TheMentionOfBeingPublicOffering_c6b6cb52-6dfb-4eea-97e2-391c757a3813",
          "IdConcepto": "ar_pros_TheMentionOfBeingPublicOffering",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_TypeOfOffer_4255d5aa-eba7-4c35-992d-90139958cf45": {
          "Id": "ar_pros_TypeOfOffer_4255d5aa-eba7-4c35-992d-90139958cf45",
          "IdConcepto": "ar_pros_TypeOfOffer",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultTypeOfOffer"
        },
        "ar_pros_DenominationOfTheIssuer_cc637cef-432d-4df0-b039-955b563409c2": {
          "Id": "ar_pros_DenominationOfTheIssuer_cc637cef-432d-4df0-b039-955b563409c2",
          "IdConcepto": "ar_pros_DenominationOfTheIssuer",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_Ticker_bd6b12fb-b6dd-4072-b9a4-42d3b19dc1c1": {
          "Id": "ar_pros_Ticker_bd6b12fb-b6dd-4072-b9a4-42d3b19dc1c1",
          "IdConcepto": "ar_pros_Ticker",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_cad8eb2a-2f5a-44cd-be2d-d319d3410477": {
          "Id": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized_cad8eb2a-2f5a-44cd-be2d-d319d3410477",
          "IdConcepto": "ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_a228b98c-76b3-44af-a8b4-4f8acaba9c77": {
          "Id": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade_a228b98c-76b3-44af-a8b4-4f8acaba9c77",
          "IdConcepto": "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_ExchangeRateUDIValue_f6ebc5dc-0906-4e5f-83a0-415b1b4c4473": {
          "Id": "ar_pros_ExchangeRateUDIValue_f6ebc5dc-0906-4e5f-83a0-415b1b4c4473",
          "IdConcepto": "ar_pros_ExchangeRateUDIValue",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_PlacementPriceValues_dc59ab7c-8a37-4586-9fc3-c58d301a8537": {
          "Id": "ar_pros_PlacementPriceValues_dc59ab7c-8a37-4586-9fc3-c58d301a8537",
          "IdConcepto": "ar_pros_PlacementPriceValues",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_TotalAmountOfTheOffer_0c30e310-3b9e-4ecd-afbf-d6ac6f088e93": {
          "Id": "ar_pros_TotalAmountOfTheOffer_0c30e310-3b9e-4ecd-afbf-d6ac6f088e93",
          "IdConcepto": "ar_pros_TotalAmountOfTheOffer",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_InTheCaseOfEmissionsUnderAProgram_55d3a11b-b03a-42a8-85c0-f6b7f0450a44": {
          "Id": "ar_pros_InTheCaseOfEmissionsUnderAProgram_55d3a11b-b03a-42a8-85c0-f6b7f0450a44",
          "IdConcepto": "ar_pros_InTheCaseOfEmissionsUnderAProgram",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_TotalAmountProgramRegistration_73b57f92-e71d-4b43-a96b-9c6b4caceef7": {
          "Id": "ar_pros_TotalAmountProgramRegistration_73b57f92-e71d-4b43-a96b-9c6b4caceef7",
          "IdConcepto": "ar_pros_TotalAmountProgramRegistration",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_RevolvingCharacterProgram_8ac47cd9-40a0-4b1d-aa58-60198918e2ad": {
          "Id": "ar_pros_RevolvingCharacterProgram_8ac47cd9-40a0-4b1d-aa58-60198918e2ad",
          "IdConcepto": "ar_pros_RevolvingCharacterProgram",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultRevolvingCharacterProgram"
        },
        "ar_pros_LifeOfTheProgram_286aed56-2dd9-4656-b258-8fe6fe7df3d2": {
          "Id": "ar_pros_LifeOfTheProgram_286aed56-2dd9-4656-b258-8fe6fe7df3d2",
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
        "ar_pros_EffectOfEmissionsUnderAProgram_52b49cc9-29a5-49b8-836e-9ef8cfba3a66": {
          "Id": "ar_pros_EffectOfEmissionsUnderAProgram_52b49cc9-29a5-49b8-836e-9ef8cfba3a66",
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
        "ar_pros_DateOfPublicationOfTenderNotice_36947010-cfb3-4b53-b100-d8bb469190c4": {
          "Id": "ar_pros_DateOfPublicationOfTenderNotice_36947010-cfb3-4b53-b100-d8bb469190c4",
          "IdConcepto": "ar_pros_DateOfPublicationOfTenderNotice",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultDateOfPublicationOfTenderNotice"
        },
        "ar_pros_PeriodOrDateOfTheOffer_fe6d606c-f0b5-4d31-89a0-d31558893ec3": {
          "Id": "ar_pros_PeriodOrDateOfTheOffer_fe6d606c-f0b5-4d31-89a0-d31558893ec3",
          "IdConcepto": "ar_pros_PeriodOrDateOfTheOffer",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_ClosingDateBookOrAuction_7416274b-9a54-40e8-bd91-bc71630cb16d": {
          "Id": "ar_pros_ClosingDateBookOrAuction_7416274b-9a54-40e8-bd91-bc71630cb16d",
          "IdConcepto": "ar_pros_ClosingDateBookOrAuction",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultClosingDateBookOrAuction"
        },
        "ar_pros_DateOfRegisterInTheStockExchange_ade1ce12-9444-4fb4-97ea-591054047e3e": {
          "Id": "ar_pros_DateOfRegisterInTheStockExchange_ade1ce12-9444-4fb4-97ea-591054047e3e",
          "IdConcepto": "ar_pros_DateOfRegisterInTheStockExchange",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultDateOfRegisterInTheStockExchange"
        },
        "ar_pros_SettlementDate_694ff495-16c1-4d79-96bb-2076a703e769": {
          "Id": "ar_pros_SettlementDate_694ff495-16c1-4d79-96bb-2076a703e769",
          "IdConcepto": "ar_pros_SettlementDate",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultSettlementDate"
        },
        "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_4347e140-f5be-4c7d-b785-f6dc4ea79094": {
          "Id": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement_4347e140-f5be-4c7d-b785-f6dc4ea79094",
          "IdConcepto": "ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_AmountOfPositionsPresented_c5a35f04-94e8-45c3-b6f5-2009d3ded236": {
          "Id": "ar_pros_AmountOfPositionsPresented_c5a35f04-94e8-45c3-b6f5-2009d3ded236",
          "IdConcepto": "ar_pros_AmountOfPositionsPresented",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_NumberOfPositionsPresented_26582bb1-bd3e-4d3f-a3f1-6482444f8ff7": {
          "Id": "ar_pros_NumberOfPositionsPresented_26582bb1-bd3e-4d3f-a3f1-6482444f8ff7",
          "IdConcepto": "ar_pros_NumberOfPositionsPresented",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_NumberOfAssignedPositions_8a00e286-0142-47ac-a962-09425e0c32f8": {
          "Id": "ar_pros_NumberOfAssignedPositions_8a00e286-0142-47ac-a962-09425e0c32f8",
          "IdConcepto": "ar_pros_NumberOfAssignedPositions",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_TotalDemandValues_948fde32-3915-4a7f-8730-55420f73a1a1": {
          "Id": "ar_pros_TotalDemandValues_948fde32-3915-4a7f-8730-55420f73a1a1",
          "IdConcepto": "ar_pros_TotalDemandValues",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_RateOrMinimumAndMaximumPrice_fb72ded8-1513-4c5c-a829-6c1c73ee87c0": {
          "Id": "ar_pros_RateOrMinimumAndMaximumPrice_fb72ded8-1513-4c5c-a829-6c1c73ee87c0",
          "IdConcepto": "ar_pros_RateOrMinimumAndMaximumPrice",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_AssignedRateOrPrice_06f0a481-e042-4b1e-a17e-a1c7aa43825f": {
          "Id": "ar_pros_AssignedRateOrPrice_06f0a481-e042-4b1e-a17e-a1c7aa43825f",
          "IdConcepto": "ar_pros_AssignedRateOrPrice",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_PotentialAcquirers_08dfd03c-8798-45c9-899c-a663ad42990f": {
          "Id": "ar_pros_PotentialAcquirers_08dfd03c-8798-45c9-899c-a663ad42990f",
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
        "ar_pros_PossibleLimitations_120e63a8-0106-4b0d-856e-17c2bde8b6c2": {
          "Id": "ar_pros_PossibleLimitations_120e63a8-0106-4b0d-856e-17c2bde8b6c2",
          "IdConcepto": "ar_pros_PossibleLimitations",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_TypeOfInvestorToWhichItIsAddressed_3b6312f4-766d-4f8e-b115-daa0a0e6a467": {
          "Id": "ar_pros_TypeOfInvestorToWhichItIsAddressed_3b6312f4-766d-4f8e-b115-daa0a0e6a467",
          "IdConcepto": "ar_pros_TypeOfInvestorToWhichItIsAddressed",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_a796a13d-0b31-47e3-a591-52d04dcb60f2": {
          "Id": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries_a796a13d-0b31-47e3-a591-52d04dcb60f2",
          "IdConcepto": "ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_SerieDepositary_c67b98c6-031b-42d5-9add-bf213c998ddb": {
          "Id": "ar_pros_SerieDepositary_c67b98c6-031b-42d5-9add-bf213c998ddb",
          "IdConcepto": "ar_pros_SerieDepositary",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_LegalBasisOfTheTaxRegimeApplicable_0468db25-bc69-4e82-96e4-c50b3ee34b38": {
          "Id": "ar_pros_LegalBasisOfTheTaxRegimeApplicable_0468db25-bc69-4e82-96e4-c50b3ee34b38",
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
        "ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion_afaf6c3c-d84f-4689-8249-18e4de2a2d95": {
          "Id": "ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion_afaf6c3c-d84f-4689-8249-18e4de2a2d95",
          "IdConcepto": "ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_0d344ae8-776a-450b-8b77-345e953429e7": {
          "Id": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV_0d344ae8-776a-450b-8b77-345e953429e7",
          "IdConcepto": "ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV"
        },
        "ar_pros_LegendArticle86OfTheLMV_a112cf7b-7a57-4c9b-858c-6144ae1a2e01": {
          "Id": "ar_pros_LegendArticle86OfTheLMV_a112cf7b-7a57-4c9b-858c-6144ae1a2e01",
          "IdConcepto": "ar_pros_LegendArticle86OfTheLMV",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultLegendArticle86OfTheLMV"
        },
        "ar_pros_NumberOfRegister_1b714a90-69cc-4ba7-ad3c-058bad9dc735": {
          "Id": "ar_pros_NumberOfRegister_1b714a90-69cc-4ba7-ad3c-058bad9dc735",
          "IdConcepto": "ar_pros_NumberOfRegister",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_3dd37d18-8672-402b-aaa5-67cf4269d2ea": {
          "Id": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus_3dd37d18-8672-402b-aaa5-67cf4269d2ea",
          "IdConcepto": "ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_03850a07-3929-4ff2-92c0-29b2cc5f0915": {
          "Id": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission_03850a07-3929-4ff2-92c0-29b2cc5f0915",
          "IdConcepto": "ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_LegendDocumentAvailableWithTheUnderwriter_6df76de4-2ef5-4f6c-9cc9-4feca8d8bd1c": {
          "Id": "ar_pros_LegendDocumentAvailableWithTheUnderwriter_6df76de4-2ef5-4f6c-9cc9-4feca8d8bd1c",
          "IdConcepto": "ar_pros_LegendDocumentAvailableWithTheUnderwriter",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultLegendDocumentAvailableWithTheUnderwriter"
        },
        "ar_pros_ProspectusSupplementBrochure_a1afd4be-e9d8-4443-a4cb-2d6af9532a50": {
          "Id": "ar_pros_ProspectusSupplementBrochure_a1afd4be-e9d8-4443-a4cb-2d6af9532a50",
          "IdConcepto": "ar_pros_ProspectusSupplementBrochure",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultProspectusSupplementBrochure"
        },
        "ar_pros_LegendProspectusSupplementBrochure_07b6b96a-df0c-41a0-a5fb-842f4d0cb158": {
          "Id": "ar_pros_LegendProspectusSupplementBrochure_07b6b96a-df0c-41a0-a5fb-842f4d0cb158",
          "IdConcepto": "ar_pros_LegendProspectusSupplementBrochure",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_Term_92d552d5-4755-4fe8-bc95-a2d359e4b513": {
          "Id": "ar_pros_Term_92d552d5-4755-4fe8-bc95-a2d359e4b513",
          "IdConcepto": "ar_pros_Term",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_DebtSerieSettlementDate_a47635ec-d122-42aa-bef8-b9979b2ed9b1": {
          "Id": "ar_pros_DebtSerieSettlementDate_a47635ec-d122-42aa-bef8-b9979b2ed9b1",
          "IdConcepto": "ar_pros_DebtSerieSettlementDate",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultDebtSerieSettlementDate"
        },
        "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided_447b0206-6434-4914-8425-77a1b0ab0855": {
          "Id": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided_447b0206-6434-4914-8425-77a1b0ab0855",
          "IdConcepto": "ar_pros_NumberOfSeriesInWhichTheIssuanceIsDivided",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_WhereApplicableNumberCorrespondingEmission_3ff6e1dd-e07d-4263-84b7-f40d0caa3b09": {
          "Id": "ar_pros_WhereApplicableNumberCorrespondingEmission_3ff6e1dd-e07d-4263-84b7-f40d0caa3b09",
          "IdConcepto": "ar_pros_WhereApplicableNumberCorrespondingEmission",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_DiscountInterestRateOrYield_ddccf219-2631-404b-9a9d-3cf9c261d4d4": {
          "Id": "ar_pros_DiscountInterestRateOrYield_ddccf219-2631-404b-9a9d-3cf9c261d4d4",
          "IdConcepto": "ar_pros_DiscountInterestRateOrYield",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultDiscountInterestRateOrYield"
        },
        "ar_pros_InterestRateOfIssue_bc0b9b0d-1262-40f3-9ffc-cd819701433b": {
          "Id": "ar_pros_InterestRateOfIssue_bc0b9b0d-1262-40f3-9ffc-cd819701433b",
          "IdConcepto": "ar_pros_InterestRateOfIssue",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultInterestRateOfIssue"
        },
        "ar_pros_BasisForDeterminingThePerformance_c7066f6f-868e-4785-9461-db617423f20b": {
          "Id": "ar_pros_BasisForDeterminingThePerformance_c7066f6f-868e-4785-9461-db617423f20b",
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
        "ar_pros_InterestRateApplicableForTheFirstPeriod_0f8cf6ea-7ad3-48e7-9c0c-d88cf3ae23aa": {
          "Id": "ar_pros_InterestRateApplicableForTheFirstPeriod_0f8cf6ea-7ad3-48e7-9c0c-d88cf3ae23aa",
          "IdConcepto": "ar_pros_InterestRateApplicableForTheFirstPeriod",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_FrequencyOfPaymentOfIncome_262a7367-fd21-4119-9f54-f6d43bde97ba": {
          "Id": "ar_pros_FrequencyOfPaymentOfIncome_262a7367-fd21-4119-9f54-f6d43bde97ba",
          "IdConcepto": "ar_pros_FrequencyOfPaymentOfIncome",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_FrequencyAndFormOfAmortizationOfSecurities_4d771e08-4e1c-4d1b-a530-4942824219eb": {
          "Id": "ar_pros_FrequencyAndFormOfAmortizationOfSecurities_4d771e08-4e1c-4d1b-a530-4942824219eb",
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
        "ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity_aa7959c9-8b2b-4057-b67a-14773bf1bea0": {
          "Id": "ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity_aa7959c9-8b2b-4057-b67a-14773bf1bea0",
          "IdConcepto": "ar_pros_MentioningWhetherOrNotHaveCollateralOrOtherSecurity",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_SerieIssuanceDate_98f58dc1-c042-4b38-97aa-46eccc76403b": {
            "Id": "ar_pros_SerieIssuanceDate_98f58dc1-c042-4b38-97aa-46eccc76403b",
            "IdConcepto": "ar_pros_SerieIssuanceDate",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultSerieIssuanceDate"
        },
        "ar_pros_PlaceAndMannerOfPaymentOfInterestOrIncomeAndPrincipal_e8acfe29-922b-4454-89a9-136ded046afe": {
          "Id": "ar_pros_PlaceAndMannerOfPaymentOfInterestOrIncomeAndPrincipal_e8acfe29-922b-4454-89a9-136ded046afe",
          "IdConcepto": "ar_pros_PlaceAndMannerOfPaymentOfInterestOrIncomeAndPrincipal",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_WhereAppropriateSubordinationOfTitles_402111c7-87f9-4c42-a926-263e36da8165": {
          "Id": "ar_pros_WhereAppropriateSubordinationOfTitles_402111c7-87f9-4c42-a926-263e36da8165",
          "IdConcepto": "ar_pros_WhereAppropriateSubordinationOfTitles",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_TermAndExpirationDate_731cb3b5-509c-4398-844f-c8ff9eb7a746": {
          "Id": "ar_pros_TermAndExpirationDate_731cb3b5-509c-4398-844f-c8ff9eb7a746",
          "IdConcepto": "ar_pros_TermAndExpirationDate",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_NumberOfSeriesInWhichTheEmissionIsDividedInTheCaseOfSecuritiesIssuedUnderATrust_6bfdcef4-f025-47c9-92f4-a82b2610fc91": {
          "Id": "ar_pros_NumberOfSeriesInWhichTheEmissionIsDividedInTheCaseOfSecuritiesIssuedUnderATrust_6bfdcef4-f025-47c9-92f4-a82b2610fc91",
          "IdConcepto": "ar_pros_NumberOfSeriesInWhichTheEmissionIsDividedInTheCaseOfSecuritiesIssuedUnderATrust",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_WhereAppropriateIssueNumberForTheCaseOfSecuritiesIssuedUnderATrust_3360552c-6c90-4c4d-b600-a4afed18f881": {
          "Id": "ar_pros_WhereAppropriateIssueNumberForTheCaseOfSecuritiesIssuedUnderATrust_3360552c-6c90-4c4d-b600-a4afed18f881",
          "IdConcepto": "ar_pros_WhereAppropriateIssueNumberForTheCaseOfSecuritiesIssuedUnderATrust",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_NumberOfTrust_9a602a9c-7f3d-48ae-a850-84e5b7d12d6a": {
          "Id": "ar_pros_NumberOfTrust_9a602a9c-7f3d-48ae-a850-84e5b7d12d6a",
          "IdConcepto": "ar_pros_NumberOfTrust",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_DataRelatingToTheIndenture_32586b46-c010-4603-80f0-29d25ef69e16": {
          "Id": "ar_pros_DataRelatingToTheIndenture_32586b46-c010-4603-80f0-29d25ef69e16",
          "IdConcepto": "ar_pros_DataRelatingToTheIndenture",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_Settlor_d3a04cce-be13-493a-8ae2-c6a8e744ea43": {
          "Id": "ar_pros_Settlor_d3a04cce-be13-493a-8ae2-c6a8e744ea43",
          "IdConcepto": "ar_pros_Settlor",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_TrusteesInFirstPlace_79b25d4b-7821-4b95-98d6-12b5e152fd3c": {
          "Id": "ar_pros_TrusteesInFirstPlace_79b25d4b-7821-4b95-98d6-12b5e152fd3c",
          "IdConcepto": "ar_pros_TrusteesInFirstPlace",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_TrusteesInSecondPlace_10721516-f6df-4832-841d-f27a408e06e3": {
          "Id": "ar_pros_TrusteesInSecondPlace_10721516-f6df-4832-841d-f27a408e06e3",
          "IdConcepto": "ar_pros_TrusteesInSecondPlace",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_TrusteesInThirdPlace_7826ad33-1f45-4cee-876b-98fe1e9d6dcf": {
          "Id": "ar_pros_TrusteesInThirdPlace_7826ad33-1f45-4cee-876b-98fe1e9d6dcf",
          "IdConcepto": "ar_pros_TrusteesInThirdPlace",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_OtherTrustees_75d2ad8d-62f1-49cf-9cc5-c89202102622": {
          "Id": "ar_pros_OtherTrustees_75d2ad8d-62f1-49cf-9cc5-c89202102622",
          "IdConcepto": "ar_pros_OtherTrustees",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_TrustValues_264c0ef4-c0cc-4c77-a269-78dc6c89fdc9": {
          "Id": "ar_pros_TrustValues_264c0ef4-c0cc-4c77-a269-78dc6c89fdc9",
          "IdConcepto": "ar_pros_TrustValues",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_GeneralCharacteristicsOfTheSecuritiesToTrust_1b9fa466-2bdf-48b1-9439-cdb42ab839a8": {
          "Id": "ar_pros_GeneralCharacteristicsOfTheSecuritiesToTrust_1b9fa466-2bdf-48b1-9439-cdb42ab839a8",
          "IdConcepto": "ar_pros_GeneralCharacteristicsOfTheSecuritiesToTrust",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_RightsUnderTheSecuritiesIssued_d39c6ca1-5683-481b-a944-20a80bd41b2d": {
          "Id": "ar_pros_RightsUnderTheSecuritiesIssued_d39c6ca1-5683-481b-a944-20a80bd41b2d",
          "IdConcepto": "ar_pros_RightsUnderTheSecuritiesIssued",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_FormOfAmortizationOfSecurities_f17fdd26-7038-4f92-96d6-ee5e7404af1c": {
          "Id": "ar_pros_FormOfAmortizationOfSecurities_f17fdd26-7038-4f92-96d6-ee5e7404af1c",
          "IdConcepto": "ar_pros_FormOfAmortizationOfSecurities",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_NameOfTheCommonRepresentative_d06ec4c6-06ca-4c17-bdfe-8f4901815d43": {
          "Id": "ar_pros_NameOfTheCommonRepresentative_d06ec4c6-06ca-4c17-bdfe-8f4901815d43",
          "IdConcepto": "ar_pros_NameOfTheCommonRepresentative",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_WhereAppropriateValuatoryOpinion_5eecc9ac-079c-434a-b881-93af218ad07f": {
          "Id": "ar_pros_WhereAppropriateValuatoryOpinion_5eecc9ac-079c-434a-b881-93af218ad07f",
          "IdConcepto": "ar_pros_WhereAppropriateValuatoryOpinion",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultNoNumerico"
        },
        "ar_pros_InTheCaseOfAdditionalValues_cdaa297a-fa17-4d0d-a813-2e5232a4e0de": {
          "Id": "ar_pros_InTheCaseOfAdditionalValues_cdaa297a-fa17-4d0d-a813-2e5232a4e0de",
          "IdConcepto": "ar_pros_InTheCaseOfAdditionalValues",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultInTheCaseOfAdditionalValues"
        },
        "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_3ba6a4f6-41b0-4477-8b7e-1188189244c2": {
          "Id": "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined_3ba6a4f6-41b0-4477-8b7e-1188189244c2",
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
        "ar_pros_TotalAmountOfSecurities_87f3df7d-0fe4-4e7d-a49f-e3fcd8f7d88d": {
          "Id": "ar_pros_TotalAmountOfSecurities_87f3df7d-0fe4-4e7d-a49f-e3fcd8f7d88d",
          "IdConcepto": "ar_pros_TotalAmountOfSecurities",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_b7c50b9f-5575-4638-8643-d7c91acef8ee": {
          "Id": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional_b7c50b9f-5575-4638-8643-d7c91acef8ee",
          "IdConcepto": "ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": "MXN",
          "Decimales": "0",
          "Precision": null,
          "Valor": "#valorDefaultNumerico",
          "ValorNumerador": null,
          "ValorDenominador": null
        },
        "ar_pros_IssuanceUnderArt13OfTheCUELegend_f1245e7c-b6a0-4387-82c7-a05655046152": {
          "Id": "ar_pros_IssuanceUnderArt13OfTheCUELegend_f1245e7c-b6a0-4387-82c7-a05655046152",
          "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUELegend",
          "IdContextoPlantilla": "ctx_2014",
          "Hechos": [],
          "IdUnidadPlantilla": null,
          "ValorNumerador": null,
          "ValorDenominador": null,
          "Precision": null,
          "Decimales": null,
          "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUELegend"
          },
          "ar_pros_PlacementProspectus_2fec7314-b8d2-400b-a17b-31929f77e2fe": {
              "Id": "ar_pros_PlacementProspectus_2fec7314-b8d2-400b-a17b-31929f77e2fe",
              "IdConcepto": "ar_pros_PlacementProspectus",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultPlacementProspectus"
          },
          "ar_pros_ProspectusLegend_c6d3a47a-26e0-4e41-9879-0ef5fe62c153": {
              "Id": "ar_pros_ProspectusLegend_c6d3a47a-26e0-4e41-9879-0ef5fe62c153",
              "IdConcepto": "ar_pros_ProspectusLegend",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultNoNumerico"
          },
          "ar_pros_OnlyEmission_5bd4cebd-174d-4011-b1e8-d8257e02ee35": {
              "Id": "ar_pros_OnlyEmission_5bd4cebd-174d-4011-b1e8-d8257e02ee35",
              "IdConcepto": "ar_pros_OnlyEmission",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultOnlyEmission"
          },
          "ar_pros_Supplement_688d79af-2ced-4c48-9443-1f3f08122e41": {
              "Id": "ar_pros_Supplement_688d79af-2ced-4c48-9443-1f3f08122e41",
              "IdConcepto": "ar_pros_Supplement",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultSupplement"
          },
          "ar_pros_SupplementLegend_a2d8de5e-0721-48fb-abe2-7759fe28c557": {
              "Id": "ar_pros_SupplementLegend_a2d8de5e-0721-48fb-abe2-7759fe28c557",
              "IdConcepto": "ar_pros_SupplementLegend",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultNoNumerico"
          },
          "ar_pros_Brochure_21c4ccf5-4c86-47f2-8954-ad24d294b407": {
              "Id": "ar_pros_Brochure_21c4ccf5-4c86-47f2-8954-ad24d294b407",
              "IdConcepto": "ar_pros_Brochure",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultBrochure"
          },
          "ar_pros_IssuanceUnderArt13OfTheCUE_915d7383-9ec5-46bf-a1db-bbd70bcd60ff": {
              "Id": "ar_pros_IssuanceUnderArt13OfTheCUE_915d7383-9ec5-46bf-a1db-bbd70bcd60ff",
              "IdConcepto": "ar_pros_IssuanceUnderArt13OfTheCUE",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultIssuanceUnderArt13OfTheCUE"
          },
          "ar_pros_LimitedPublicOffering_0f1f9660-f103-4189-a194-9a961ac487ea": {
              "Id": "ar_pros_LimitedPublicOffering_0f1f9660-f103-4189-a194-9a961ac487ea",
              "IdConcepto": "ar_pros_LimitedPublicOffering",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultLimitedPublicOffering"
          },
          "ar_pros_TypeOfInstrument_b528b592-1d54-4bdf-a316-12536a35f015": {
              "Id": "ar_pros_TypeOfInstrument_b528b592-1d54-4bdf-a316-12536a35f015",
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
          "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000": {
              "Id": "ar_pros_TypeOfInstrumentDescription-0000-0000-0000-0000000000",
              "IdConcepto": "ar_pros_TypeOfInstrumentDescription",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#tipoInstrumentoDescripcionDefault"
          },
          "ar_pros_ForeingIssuer_e74e5c2c-27c2-462a-8d97-984e8f7279b6": {
              "Id": "ar_pros_ForeingIssuer_e74e5c2c-27c2-462a-8d97-984e8f7279b6",
              "IdConcepto": "ar_pros_ForeingIssuer",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultForeingIssuer"
          },
          "ar_pros_MentioningwhetherOrNotHaveCollateral_cc15792d-c670-4881-bd5d-d2f29223bded": {
              "Id": "ar_pros_MentioningwhetherOrNotHaveCollateral_cc15792d-c670-4881-bd5d-d2f29223bded",
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
          "ar_pros_MentioningPartialOrTotalDependencePros_1a19ea74-1176-43d2-a20d-fe52b470fc67": {
              "Id": "ar_pros_MentioningPartialOrTotalDependencePros_1a19ea74-1176-43d2-a20d-fe52b470fc67",
              "IdConcepto": "ar_pros_MentioningPartialOrTotalDependencePros",
              "IdContextoPlantilla": "ctx_2014",
              "Hechos": [],
              "IdUnidadPlantilla": null,
              "ValorNumerador": null,
              "ValorDenominador": null,
              "Precision": null,
              "Decimales": null,
              "Valor": "#valorDefaultMentioningPartialOrTotalDependence"
          }
      };
    }
  }

}