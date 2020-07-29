///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://www.bmv.com.mx/2016-08-22/rel_ev/roles/800011
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___www_bmv_com_mx_2016_08_22_rel_ev_roles_800011 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___www_bmv_com_mx_2016_08_22_rel_ev_roles_800011
         */
        constructor() {

            this.ListadoDeFormulas = {
                'EA_BusinessName': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_BusinessName',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'rel_ev_BusinessName',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'EA_Date': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_Date',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'rel_ev_Date',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'EA_Place': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_Place',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'rel_ev_Place',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'EA_RelevantEventContent': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_RelevantEventContent',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'rel_ev_RelevantEventContent',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'EA_Subject': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_Subject',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'rel_ev_Subject',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                ),
                'EA_Ticker': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'EA_Ticker',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'rel_ev_Ticker',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                )
            };

            this.ContextosPlantillaPorId = {
  "ct1": {
    "Id": "ct1",
    "Periodo": {
      "Tipo": 1,
      "FechaInstante": "#fecha_2016_10_12",
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
  "rel_ev_Ticker_2b98a49c-aa87-4f26-b9c8-a09228509047": {
    "Id": "rel_ev_Ticker_2b98a49c-aa87-4f26-b9c8-a09228509047",
    "IdConcepto": "rel_ev_Ticker",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#nombreEntidad"
  },
  "rel_ev_Date_f1bac7d6-e2fa-47c5-b5be-8e286b35a037": {
    "Id": "rel_ev_Date_f1bac7d6-e2fa-47c5-b5be-8e286b35a037",
    "IdConcepto": "rel_ev_Date",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#fecha_2016_10_12"
  },
  "rel_ev_BusinessName_e6c21fc6-75e0-4343-92f8-c8281c284df4": {
    "Id": "rel_ev_BusinessName_e6c21fc6-75e0-4343-92f8-c8281c284df4",
    "IdConcepto": "rel_ev_BusinessName",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_ev_Place_f01cba99-df21-4925-86fa-74575bf57b03": {
    "Id": "rel_ev_Place_f01cba99-df21-4925-86fa-74575bf57b03",
    "IdConcepto": "rel_ev_Place",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "rel_ev_Subject_a909871e-6fb0-4d35-9018-2131affc7b3d": {
    "Id": "rel_ev_Subject_a909871e-6fb0-4d35-9018-2131affc7b3d",
    "IdConcepto": "rel_ev_Subject",
    "IdContextoPlantilla": "ct1",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
 
  "rel_ev_AttachedDocumentPdf_20e6fae3-1aaa-433a-8744-aa9f5ce7f34d": {
    "Id": "rel_ev_AttachedDocumentPdf_20e6fae3-1aaa-433a-8744-aa9f5ce7f34d",
    "IdConcepto": "rel_ev_AttachedDocumentPdf",
    "IdContextoPlantilla": "ct1",
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