///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/mx_extension_2014-12-05_role-800007
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_800007 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

        /** La lista de fórmulas utilizadas en el rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_mx_extension_2014_12_05_role_800007
         */
        constructor() {

            this.ListadoDeFormulas = {
                //Se integran formulas de < Value Assertion>  ID : VA_800007_01: string - length(Discusión de la administración sobre las políticas de uso de instrumentos financieros derivados, explicando si dichas políticas permiten que sean utilizados únicamente con fines de cobertura o con otro fines tales como negociación [bloque de texto] ) gt 0[dimensional]
                'formula106': new model.DefinicionFormula().deserialize(
                    {
                        Id: 'formula106',
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'squeeze(size(variable1)) > 0',
                        MensajeExito: 'La longitud del texto contenido en el hecho del {variable1} es mayor a 0 caracteres.',
                        MensajeError: 'La longitud del texto contenido en el hecho del {variable1} debería ser mayor a 0 caracteres.',
                        VariablesCoincidenPeriodo: false,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_DiscusionDeLaAdministracionSobreLasPoliticasDeUsoDeInstrumentosFinancierosDerivadosExplicandoSiDichasPoliticasPermitenQueSeanUtilizadosUnicamenteConFinesDeCoberturaOConOtroFinesTalesComoNegociacionBloqueDeTexto',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ConteoHechos: false
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
  "A75775caf-f939-4670-83f4-1a8fb9f31af0": {
    "Id": "A75775caf-f939-4670-83f4-1a8fb9f31af0",
    "IdConcepto": "ifrs_mx-cor_20141205_DiscusionDeLaAdministracionSobreLasPoliticasDeUsoDeInstrumentosFinancierosDerivadosExplicandoSiDichasPoliticasPermitenQueSeanUtilizadosUnicamenteConFinesDeCoberturaOConOtroFinesTalesComoNegociacionBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A6e95836f-7bdc-4bdb-a8f4-577dc2319d1b": {
    "Id": "A6e95836f-7bdc-4bdb-a8f4-577dc2319d1b",
    "IdConcepto": "ifrs_mx-cor_20141205_DescripcionGenericaSobreLasTecnicasDeValuacionDistinguiendoLosInstrumentosQueSeanValuadosACostoOAValorRazonableAsiComoLosMetodosYTecnicasDeValuacionBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A4914aa6c-20ba-4893-9e3d-de6f86e99b9a": {
    "Id": "A4914aa6c-20ba-4893-9e3d-de6f86e99b9a",
    "IdConcepto": "ifrs_mx-cor_20141205_DiscusionDeLaAdministracionSobreLasFuentesInternasYExternasDeLiquidezQuePudieranSerUtilizadasParaAtenderRequerimientosRelacionadosConInstrumentosFinancierosDerivadosBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A9d4c7ab9-df5e-4e79-912c-db5849954f7a": {
    "Id": "A9d4c7ab9-df5e-4e79-912c-db5849954f7a",
    "IdConcepto": "ifrs_mx-cor_20141205_ExplicacionDeLosCambiosEnLaExposicionALosPrincipalesRiesgosIdentificadosYEnLaAdministracionDeLosMismosAsiComoContingenciasYEventosConocidosOEsperadosPorLaAdministracionQuePuedanAfectarEnLosFuturosReportesBloqueDeTexto",
    "IdContextoPlantilla": "acumulado_ejercicio_actual",
    "Hechos": [],
    "IdUnidadPlantilla": null,
    "ValorNumerador": null,
    "ValorDenominador": null,
    "Precision": null,
    "Decimales": null,
    "Valor": "#valorDefaultNoNumerico"
  },
  "A67b319d5-5e6f-4b89-86fa-ec50eca1d92e": {
    "Id": "A67b319d5-5e6f-4b89-86fa-ec50eca1d92e",
    "IdConcepto": "ifrs_mx-cor_20141205_InformacionCuantitativaARevelarBloqueDeTexto",
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