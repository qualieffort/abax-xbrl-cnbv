///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module abaxXBRL.viewer {


    export class ConfigVisor {
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $httpProvider: ng.IHttpProvider) {

            $httpProvider.interceptors.push('solicitudesPendientesInterceptor')

            $stateProvider.state("inicio.visorXBRL.DocumentoInstanciaVisorDocumentoInstancia", {
                url: "documentoInstanciaVisorDocumentoInstancia",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/visor-xbrl/abax-xbrl-visor-xbrl-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    },
                    'contenidoEditorXBRL': {
                        controller: 'XbrlElegirFormaCreacionDocumentoInstanciaController'
                    }

                }
            });



            $stateProvider.state("inicio.visorXBRL.visorXbrl", {
                url: "visorXbrl",
                views: {
                    'contenidoEditorXBRL': {
                        templateUrl: 'ts/templatesVisor/template-xbrl-visor-xbrl.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'AbaxXBRLController'
                    }

                }
            });





            shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA('inicio.visorXBRL.DocumentoInstanciaVisorDocumentoInstancia');
        }
    }

    ConfigVisor.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    /**
     * Implementación de un singleton para contener la instancia única de la declaración del módulo del visor XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ModuloVisorXbrl {

        /** La instancia única de la clase */
        private static _instance: ModuloVisorXbrl = null;

        /** La declaración del módulo angular que contiene al visor */
        public module: ng.IModule;

        /**
        * Obtiene la instancia única de esta clase. Si no existe, la crea.
        * @return la instancia única de esta clase.
        */
        public static getInstance(): ModuloVisorXbrl {
            if (ModuloVisorXbrl._instance === null) {
                ModuloVisorXbrl._instance = new ModuloVisorXbrl();
            }
            return ModuloVisorXbrl._instance;
        }

        private init() {

            var appViewer = ModuloVisorXbrl.getInstance().module;

            appViewer.factory('abaxXBRLServices', ['$http', '$q', 'abaxXBRLRequestService', abaxXBRL.services.AbaxXBRLServices.AbaxXBRLServicesFactory]);
            appViewer.factory('guardiaNavegacionService', ['$window', '$rootScope', '$state', abaxXBRL.services.GuardianNavegarFueraPaginaService.GuardianNavegarFueraPaginaServiceFactory]);
            this.inicializarDirectivasVisor(appViewer);

            appViewer.filter('rango', abaxXBRL.directives.Rango.RangoFilter);

            appViewer.config(ConfigVisor);
        }

        private inicializarDirectivasVisor(appViewer: ng.IModule): void {

            appViewer.controller('AbaxXBRLController', abaxXBRL.controller.AbaxXBRLController);
            appViewer.controller('XbrlEditorFormatoController', abaxXBRL.directives.XbrlEditorFormatoController);
            appViewer.controller('XbrlContenedorFormatoController', abaxXBRL.directives.XbrlContenedorFormatoController);
            appViewer.controller('GuardarDocumentoController', abaxXBRL.controller.GuardarDocumentoController);
            appViewer.controller('XbrlListadoHistoricoVersionesController', abaxXBRL.directives.XbrlListadoHistoricoVersionesController);
            appViewer.controller('XbrlUsuariosDocumentoController', abaxXBRL.directives.XbrlUsuariosDocumentoController);
            appViewer.controller('XbrlElegirPlantillaController', abaxXBRL.directives.XbrlElegirPlantillaController);
            appViewer.controller('XbrlElegirFormaCreacionDocumentoInstanciaController', abaxXBRL.directives.XbrlElegirFormaCreacionDocumentoInstanciaController);
            appViewer.controller('XbrlImportarArchivoDocumentoController', abaxXBRL.directives.XbrlImportarArchivoDocumentoController);
            appViewer.controller('XbrlFiltroBusquedaController', abaxXBRL.directives.XbrlFiltroBusquedaController);
            appViewer.controller('XbrlElegirTaxonomiaController', abaxXBRL.directives.XbrlElegirTaxonomiaController);
            appViewer.controller('AbaxXBRLErrorCargaTaxonomiaPopupController', abaxXBRL.componentes.controllers.AbaxXBRLErrorCargaTaxonomiaPopupController);

            appViewer.controller('XbrlConfigurarTablaController', abaxXBRL.directives.XbrlConfigurarTablaController);
            appViewer.controller('ModalConfigurarTablaController', abaxXBRL.directives.ModalConfigurarTablaController);


            appViewer.directive('xbrlContenedorFormato', abaxXBRL.directives.XbrlContenedorFormato.XbrlContenedorFormatoDirective);
            appViewer.directive('xbrlEditorFormato', abaxXBRL.directives.XbrlEditorFormato.XbrlEditorFormatoDirective);
            appViewer.directive('xbrlVisorBotonEstadoValidacion', abaxXBRL.directives.XbrlBotonEstadoValidacion.XbrlBotonEstadoValidacionDirective);
            appViewer.directive('xbrlHistoricoVersiones', abaxXBRL.directives.XbrlHistoricoVersiones.XbrlHistoricoVersionesDirective);
            appViewer.directive('xbrlUsuariosDocumentoInstancia', abaxXBRL.directives.XbrlUsuariosDocumentoInstancia.XbrlUsuariosDocumentoInstanciaDirective);
            appViewer.directive('xbrlResize', abaxXBRL.directives.XbrlResize.XbrlResizeDirective);
            appViewer.directive('xbrlConfigurarTabla', abaxXBRL.directives.XbrlConfigurarTabla.XbrlConfigurarTablaDirective);
            appViewer.directive('xbrlTablaHipercubo', abaxXBRL.directives.XbrlTablaHipercuboDirective.factory);
            appViewer.directive('xbrlAplicaElementoTaxonomia', abaxXBRL.directives.XbrlAplicaElementoTaxonomiaDirective.factory);
            appViewer.directive('xbrlValidacionListaSeleccionMultiple', abaxXBRL.directives.XbrlValidacionListaSeleccionMultiple.XbrlValidacionListaSeleccionMultipleDirective);

            appViewer.directive('xbrlResize', abaxXBRL.directives.XbrlResize.XbrlResizeDirective);
        }


        /**
         * Constructor de la clase ModuloVisorXbrl
         */
        constructor() {
            if (ModuloVisorXbrl._instance) {
                throw new Error("Error: Fallo al instanciar: Utilice ModuloVisorXbrl.getInstance() en lugar de new.");
            }
            ModuloVisorXbrl._instance = this;
            var self = this;
            shared.service.AbaxXBRLUtilsService.cargaModulosAngularPoNombre(['ckeditor', 'angularFileUpload', 'ngSanitize', 'ngAnimate', 'ngAside', 'ui.slimscroll', 'angular-intro', 'ui.tree'])
                .then(function () {
                self.module = angular.module('abaxVisorXBRLViewer', ['abaxXBRL.inicio', 'ui.router', 'ckeditor', 'angularFileUpload', 'ngSanitize', 'ngAnimate', 'ngAside', 'FBAngular', 'ui.slimscroll', 'angular-intro', 'ui.tree']);
                self.init();
            }, function (error) {
                    console.log(error);
                });
        }

    }
    ModuloVisorXbrl.getInstance();
}