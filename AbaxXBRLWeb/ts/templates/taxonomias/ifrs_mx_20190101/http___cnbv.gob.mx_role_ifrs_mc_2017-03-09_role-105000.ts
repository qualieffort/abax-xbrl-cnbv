///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/mc_2017-03-09_role-105000
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___cnbv_gob_mx_role_ifrs_mc_2017_03_09_role_105000 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___cnbv_gob_mx_role_ifrs_mc_2017_03_09_role_105000
         */
        constructor() {

            this.ListadoDeFormulas = {
                'formula5': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula5',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs-mc_DisclosureOfResultsOfOperationsAndProspectsExplanatory',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    ),
                //Se integran formulas de Value Assertion - ID : VA_105000_02
                'formula7': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula7',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'mc_mx-cor_20141205_SituacionFinancieraLiquidezYRecursosDeCapitalBloqueDeTexto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
                            })
                        }
                    }
                    )
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

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {
  "A1847a04f-55d9-46b6-bc42-692b0fd5bce8": {
    "Id": "A1847a04f-55d9-46b6-bc42-692b0fd5bce8",
    "IdConcepto": "ifrs-mc_ManagementCommentaryExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A26e89b5c-c19f-4f57-b958-e0bb54ec70f0": {
    "Id": "A26e89b5c-c19f-4f57-b958-e0bb54ec70f0",
    "IdConcepto": "ifrs-mc_DisclosureOfNatureOfBusinessExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4b97c719-03ad-448e-a0bf-0e1f8983ab42": {
    "Id": "A4b97c719-03ad-448e-a0bf-0e1f8983ab42",
    "IdConcepto": "ifrs-mc_DisclosureOfManagementsObjectivesAndItsStrategiesForMeetingThoseObjectivesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ad87de965-9e74-41ef-9ce5-1339c5ea4065": {
    "Id": "Ad87de965-9e74-41ef-9ce5-1339c5ea4065",
    "IdConcepto": "ifrs-mc_DisclosureOfEntitysMostSignificantResourcesRisksAndRelationshipsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A72f63033-410a-491e-83f4-9debf540fbd7": {
    "Id": "A72f63033-410a-491e-83f4-9debf540fbd7",
    "IdConcepto": "ifrs-mc_DisclosureOfResultsOfOperationsAndProspectsExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A1e3cdf95-3347-4bea-b378-b47dc1ad00af": {
    "Id": "A1e3cdf95-3347-4bea-b378-b47dc1ad00af",
    "IdConcepto": "mc_mx-cor_20141205_SituacionFinancieraLiquidezYRecursosDeCapitalBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "Ab6654faa-fd59-464f-9682-e14e5f222e34": {
    "Id": "Ab6654faa-fd59-464f-9682-e14e5f222e34",
    "IdConcepto": "mc_mx-cor_20141205_ControlInternoBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4378f08a-c23d-45f5-8b2f-fbd7b4598ab9": {
    "Id": "A4378f08a-c23d-45f5-8b2f-fbd7b4598ab9",
    "IdConcepto": "ifrs-mc_DisclosureOfCriticalPerformanceMeasuresAndIndicatorsThatManagementUsesToEvaluateEntitysPerformanceAgainstStatedObjectivesExplanatory",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
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