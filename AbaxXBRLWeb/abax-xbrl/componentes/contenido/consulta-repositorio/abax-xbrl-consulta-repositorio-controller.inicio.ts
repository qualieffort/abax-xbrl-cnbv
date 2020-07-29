/// <reference path="../../../shared/services/abax-xbrl-request-service.root.ts" />
/// <reference path="../../../../scripts/typings/datatables/jquery.datatables.d.ts" />
/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />

module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista de consulta repositorio.
    **/
    export interface IAbaxXBRLConsultaRepositorioScope extends IAbaxXBRLInicioScope {
        /**
        * Valores para el llenado del combo de busqueda de conceptos. 
        **/
        diccionarioConceptos: { [value: string]: string };
        /**
        * Listado de archivos y contextos asignados al concepto seleccionado.
        **/
        resultadoConsulta: Array<shared.modelos.IConsultaRepositorio>;

        /** Lista de diferentes contextos encontrados en la búsqueda */
        contextosResultado: Array<shared.modelos.IHechosEnDocumento>;
        /**
        * Concepto que se busca.
        **/
        conceptoBusqueda: string;

        /**Identificador de la taxonomia a consultar los conceptos*/
        IdTaxonomiaXbrlRepositorio: string;

        /** Lista de plantillas disponibles para la taxonomía elegida */
        taxonomiasRepositorio: Array<model.TaxonomiaXbrlBd>;


        /**
        * Dispara la ejecución de la busqueda del concepto.
        **/
        buscarHechosConcepto(): void;
        /**
        * Bandera que indica si aún no se ha recibido la respusta de la consulta de hechos.
        **/
        cargandoHechos: boolean;
        /**
        * Bandera que indica si se encontraron resultados para la consulta.
        **/
        existenHechos: boolean;
        /**
        * Muestra el datepiker.
        **/
        muestraDatePiker($event);

        datePikerOpen: boolean;

        /**
        * Realiza la consulta de conceptos de una taxonomia
        */
        cargarConceptosTaxonomia(): void;

    }
    /** 
    * Controller de la vista de alertas.
    **/
    export class AbaxXBRLConsultaRepositorioController {
        
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Scope de la vista del controller **/
        private $scope: IAbaxXBRLConsultaRepositorioScope;

        /**
        * Carga un listado de las taxonomias cargadas en cache en la aplicacion
        */
        private cargarTaxonomias(): void {
            var self = this;

            this.abaxXBRLRequestService.post("DocumentoInstancia/ObtenerTaxonomiasRegistradasJsonResult", {}).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    if (resultadoOperacion && resultadoOperacion.InformacionExtra && resultadoOperacion.InformacionExtra.length) {
                        self.$scope.taxonomiasRepositorio = new Array<model.TaxonomiaXbrlBd>();
                        for (var i = 0; i < resultadoOperacion.InformacionExtra.length; i++) {
                            self.$scope.taxonomiasRepositorio.push(new model.TaxonomiaXbrlBd().deserialize(resultadoOperacion.InformacionExtra[i]));
                        }
                    }
                } else {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                }
            }, function (error: any) {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                });

        }


        /**
        * Obtiene la información para la generación de las opciones del selector de la busqueda de hechos.
        **/
        private cargarConceptosTaxonomia(): void {

            if (this.$scope.IdTaxonomiaXbrlRepositorio != null && parseInt(this.$scope.IdTaxonomiaXbrlRepositorio) > 0) {

                var self = this;
                var onHttpSucess = function (result: any) { self.onObtenConceptosBusquedaSucess(result.data); };
                var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();

                this.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONCEPTOS_BUSQUEDA_PATH, { "idTaxonomia": self.$scope.IdTaxonomiaXbrlRepositorio }).then(onHttpSucess, onHttpError);
            }
            
        }
        /**
        * Procesa la respuesta del servidor a la solicitud del diccionario de conceptos.
        **/
        private onObtenConceptosBusquedaSucess(resultado: { [value: string]: string }) {
            var diccionarioConceptos = resultado;
            var self = this;
            var scope = self.$scope;
            var conceptoBusqueda = scope.conceptoBusqueda;
            var tieneConcepto = conceptoBusqueda && conceptoBusqueda != null && conceptoBusqueda.length > 0;
            if (diccionarioConceptos && diccionarioConceptos != null && self.hasValues(diccionarioConceptos)) {
                
                scope.diccionarioConceptos = diccionarioConceptos;
                if (!tieneConcepto) {
                    for (var concepto in diccionarioConceptos) {
                        scope.conceptoBusqueda = concepto;
                        break;
                    }
                }
            }
        }
        /**
        * Determina si un diccionario tiene valores.
        **/
        private hasValues(diccionario: { [value: string]: string }): boolean {
            var hasValues: boolean = false;
            for (var key in diccionario) {
                hasValues = true;
                break;
            }
            return hasValues;
        }

        /**
        * Obtiene el listado de hechos para el concepto seleccionado.
        **/
        private onbtenerHechosConcepto(): void {
            var self = this;
            self.$scope.cargandoHechos = true;
            var onHttpSucess = function (result: any) { self.onOnbtenerHechosConceptoSucess(result.data); };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
            var idConcepto = self.$scope.conceptoBusqueda;
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.HECHOS_POR_CONCEPTO_PATH, { "idConcepto": idConcepto, "idTaxonomia": self.$scope.IdTaxonomiaXbrlRepositorio }).then(onHttpSucess, onHttpError).finally(function () {
                self.$scope.cargandoHechos = false;
            });
        }
        /**
        * Procesa el resulado de la consulta de hechos por concepto.
        * @param resulado Respuseta del servidor a la consulta.
        **/
        private onOnbtenerHechosConceptoSucess(resultado: shared.modelos.IResultadoOperacion) {
            var scope = this.$scope;
            var resultadoConsulta: Array<shared.modelos.IConsultaRepositorio> = resultado.InformacionExtra;
            if (resultado.Resultado == true && resultadoConsulta) {
                scope.resultadoConsulta = resultadoConsulta;
                scope.existenHechos = true;
                if (resultadoConsulta.length && resultadoConsulta.length > 0) {

                    for (var indiceRenglon in resultadoConsulta) {
                        for (var indiceHecho in resultadoConsulta[indiceRenglon].HechosEnDocumento) {
                            if (resultadoConsulta[indiceRenglon].HechosEnDocumento[indiceHecho].EsMonetario) {
                                var valorHecho :number = parseInt(resultadoConsulta[indiceRenglon].HechosEnDocumento[indiceHecho].Valor);
                                resultadoConsulta[indiceRenglon].HechosEnDocumento[indiceHecho].Valor = "$ "+valorHecho.toFixed(2).replace(/(\d)(?=(\d{3})+\b)/g, '$1,');

                            } else if (resultadoConsulta[indiceRenglon].HechosEnDocumento[indiceHecho].EsNumerico && !resultadoConsulta[indiceRenglon].HechosEnDocumento[indiceHecho].EsMonetario) {

                                var valorHecho: number = parseInt(resultadoConsulta[indiceRenglon].HechosEnDocumento[indiceHecho].Valor);
                                resultadoConsulta[indiceRenglon].HechosEnDocumento[indiceHecho].Valor = valorHecho.toFixed(0).replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
                            }
                            
                        }
                    }

                    scope.contextosResultado = resultadoConsulta[0].HechosEnDocumento;

                }
            }
        }

        private muestraDatePiker($event) {
            $event.preventDefault();
            $event.stopPropagation();

            this.$scope.datePikerOpen = true;
        }
        
        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var $self = this;
            var $scope = $self.$scope;

            $scope.cargandoHechos = false;
            $scope.existenHechos = false;
            $scope.diccionarioConceptos = {};

            $scope.buscarHechosConcepto = function () { $self.onbtenerHechosConcepto(); };

            $scope.cargarConceptosTaxonomia = function () { $self.cargarConceptosTaxonomia(); };

            
            

            var conceptoBusqueda = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_CONCEPTO_BUSQUEDA);

            if (conceptoBusqueda && conceptoBusqueda != "") {
                var IdTaxonomiConsulta = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_TAXONOMIA);

                $scope.conceptoBusqueda = conceptoBusqueda;
                $scope.IdTaxonomiaXbrlRepositorio = IdTaxonomiConsulta;

                shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_CONCEPTO_BUSQUEDA);
                shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_TAXONOMIA);

                $self.onbtenerHechosConcepto();
            }

            $self.cargarTaxonomias();

            $self.cargarConceptosTaxonomia();

            
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
        * @param abaxXBRLSessionService Servicio para el manejo de la sesion.
        **/
        constructor($scope: IAbaxXBRLConsultaRepositorioScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }

    AbaxXBRLConsultaRepositorioController.$inject = ['$scope', 'abaxXBRLRequestService'];
}
