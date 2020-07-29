///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/json/jquery.json.d.ts" />
///<reference path="../scripts/typings/moment/moment.d.ts" />
///<reference path="../scripts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///<reference path="modeloAbax.ts" />
///<reference path="serviciosAbax.ts" />

module abaxXBRL.directives {


    import services = abaxXBRL.services;

    /**
    * Implementación de una directiva para presentar el listado de versiones del documento instancia
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export class XbrlHistoricoVersiones {

        /**
     * Crea la definción de la directiva.
     *
     * @return la definición de la directiva.
     */
        public static XbrlHistoricoVersionesDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                scope: {
                    xbrlListadoVersiones: '=',
                    xbrlFnVersionCargada: '&'
                },
                templateUrl: 'ts/templates/template-xbrl-historico-versiones.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlListadoHistoricoVersionesController
            };
        }
    }

    /**
     * Define la estructura del Scope de la Directiva para la presentación del listado de histórico
     * de versiones de un documento de instancia.
     *
     * @author Emigdio Hernandez Rodriguez
     * @version 1.0
     */
    export interface IXbrlListadoHistoricoVersionesDirectiveScope extends ng.IScope {

        /** El listado que contiene las versiones de un documento de instancia */
        xbrlListadoVersiones: Array<model.VersionDocumentoInstancia>;
        /** 
         * Realiza la carga de una versión de un documento de instancia para su visualización o edición
         * @param idDocumentoInstancia Identificador del documento de instancia a cargar
         * @param version Versión del documento de instancia a cargar
         */
        cargarVersionDocumentoInstancia(idDocumentoInstancia: number, version: number): void;
        /** Funcion para establecer el panel activo */
        xbrlFnVersionCargada(): void;
    }

    /**
    * Implementación de un controlador para presentar el listado de versiones de un documento instancia XBRL.
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export class XbrlListadoHistoricoVersionesController {

        /** el scope de la directiva que presenta el listado de versiones del documento instancia XBRL */
        private $scope: IXbrlListadoHistoricoVersionesDirectiveScope;

        /**
        * El servicio que permite la consulta de las versiones de un documento de instancia
        */
        private abaxXBRLServices: services.AbaxXBRLServices;

        /**
         * Inicializa el controlador al asociarlo con el listado de versiones del documento de instancia correspondiente
         */
        private init(): void {

            var self = this;

            this.$scope.cargarVersionDocumentoInstancia = function(idDocumentoInstancia: number, version: number): void {

                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_HISTORIAL_CARGANDO') });

                var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

                self.abaxXBRLServices.cargarDocumentoInstanciaPorId(idDocumentoInstancia.toString(), version.toString()).then(
                    function(resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {
                        
                        if (self.abaxXBRLServices.getDefinicionPlantilla() && self.abaxXBRLServices.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas) {
                            for (var idFormula in self.abaxXBRLServices.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas) {
                                if (self.abaxXBRLServices.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas.hasOwnProperty(idFormula)) {
                                    self.abaxXBRLServices.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula].RequiereValidacion = true;
                                }
                            }
                            self.abaxXBRLServices.getDocumentoInstancia().RequiereValidacionFormulas = true;
                        }
                        self.abaxXBRLServices.getDocumentoInstancia().RequiereValidacion = true;
                        self.abaxXBRLServices.getDocumentoInstancia().PendienteGuardar = true;
                        self.abaxXBRLServices.validarDocumentoInstancia();
                        self.abaxXBRLServices.validarFormulasDocumentoInstancia();
                    },
                    function(resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_HISTORIAL_ERROR'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                    }).catch(function (): void {
                        var $lutil = shared.service.AbaxXBRLUtilsService;
                        var titulo = $lutil.getValorEtiqueta("TITULO_ERROR_CARGAR_DOCUMENOT");
                        var contenido = $lutil.getValorEtiqueta("MENSAJE_ERROR_OBTENER_DOCUMENTO_INSTANCIA");
                        $lutil.error({ textoTititulo: titulo, texto: contenido }).finally(function () { $lutil.cambiarEstadoVistasA('inicio'); });
                    }).finally(function() {
                        $.isLoading('hide');
                        if (self.$scope.xbrlFnVersionCargada) {
                            self.$scope.xbrlFnVersionCargada();
                        }

                    }
                );
            };
        }

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio para presentar diálogos modales de angular
         */
        constructor($scope: IXbrlListadoHistoricoVersionesDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices) {
            this.$scope = $scope;
            this.abaxXBRLServices = abaxXBRLServices;
            this.init();
        }
    }

    XbrlListadoHistoricoVersionesController.$inject = ['$scope', 'abaxXBRLServices'];

}