///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

module abaxXBRL.viewer {


    export class Config {
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $httpProvider: ng.IHttpProvider) {

            $httpProvider.interceptors.push('solicitudesPendientesInterceptor')

            $stateProvider.state("inicio.editorXBRL.DocumentoInstanciaCrearDocumentoInstancia1", {
                url: "documentoInstanciaCrearDocumentoInstancia",
                //parent: 'inicio.editorXBRL',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/editor-xbrl/abax-xbrl-editor-xbrl-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    },
                    'contenidoEditorXBRL': {
                        templateUrl: 'ts/templates/template-xbrl-crear-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'XbrlElegirFormaCreacionDocumentoInstanciaController'
                    }

                }
            });

            $stateProvider.state("inicio.editorXBRL.elegirPlantilla", {
                url: "elegirPlantilla",
                //parent: 'inicio.editorXBRL',
                views: {
                    'contenidoEditorXBRL': {
                        templateUrl: 'ts/templates/template-xbrl-elegir-plantilla.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'XbrlElegirPlantillaController'
                    }

                }
            });

            $stateProvider.state("inicio.editorXBRL.importarArchivo", {
                url: "importarArchivo",
                //parent: 'inicio.editorXBRL',
                views: {
                    'contenidoEditorXBRL': {
                        templateUrl: 'ts/templates/template-xbrl-importar-archivo.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'XbrlImportarArchivoDocumentoController'
                    }

                }
            });
            $stateProvider.state("inicio.editorXBRL.editorXbrlIdDocumentoInstancia", {
                url: "editorXbrlIdDocumentoInstancia",
                //parent: 'inicio.editorXBRL',
                views: {
                    'contenidoEditorXBRL': {
                        templateUrl: 'ts/templates/template-xbrl-editor-xbrl.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'AbaxXBRLController'
                    }

                }
            });

            $stateProvider.state("inicio.editorXBRL.editorXbrl", {
                url: "editorxbrl",
                //parent: 'inicio.editorXBRL',
                views: {
                    'contenidoEditorXBRL': {
                        templateUrl: 'ts/templates/template-xbrl-editor-xbrl.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'AbaxXBRLController'
                    }

                }
            });

            $stateProvider.state("inicio.editorXBRL.elegirTaxonomia", {
                url: "elegirTaxonomia",
                //parent: 'inicio.editorXBRL',
                views: {
                    'contenidoEditorXBRL': {
                        templateUrl: 'ts/templates/template-xbrl-elegir-taxonomia.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'XbrlElegirTaxonomiaController'
                    }

                }
            });
            shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA('inicio.editorXBRL.DocumentoInstanciaCrearDocumentoInstancia1');
        }
    }

    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    /**
     * Implementación de un singleton para contener la instancia única de la declaración del módulo del visor XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ModuloVisor {

        /** La instancia única de la clase */
        private static _instance: ModuloVisor = null;

        /** La declaración del módulo angular que contiene al visor */
        public module: ng.IModule;

        /**
        * Obtiene la instancia única de esta clase. Si no existe, la crea.
        *
        * @return la instancia única de esta clase.
        */
        public static getInstance(): ModuloVisor {
            if (ModuloVisor._instance === null) {
                ModuloVisor._instance = new ModuloVisor();
            }
            return ModuloVisor._instance;
        }

        private init() {

            var appViewer = ModuloVisor.getInstance().module;

            appViewer.factory('abaxXBRLServices', ['$http', '$q', 'abaxXBRLRequestService', abaxXBRL.services.AbaxXBRLServices.AbaxXBRLServicesFactory]);
            appViewer.factory('guardiaNavegacionService', ['$window', '$rootScope', '$state', abaxXBRL.services.GuardianNavegarFueraPaginaService.GuardianNavegarFueraPaginaServiceFactory]);
            appViewer.factory('solicitudesPendientesInterceptor', ['$q', 'guardiaNavegacionService', abaxXBRL.services.SolicitudesPendientesInterceptor.SolicitudesPendientesFactory]);

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
            appViewer.directive('xbrlBotonEstadoValidacion', abaxXBRL.directives.XbrlBotonEstadoValidacion.XbrlBotonEstadoValidacionDirective);
            appViewer.directive('xbrlBlink', abaxXBRL.directives.XbrlBlink.XbrlBlinkDirective);
            appViewer.directive('xbrlHistoricoVersiones', abaxXBRL.directives.XbrlHistoricoVersiones.XbrlHistoricoVersionesDirective);
            appViewer.directive('xbrlUsuariosDocumentoInstancia', abaxXBRL.directives.XbrlUsuariosDocumentoInstancia.XbrlUsuariosDocumentoInstanciaDirective);
            appViewer.directive('xbrlResize', abaxXBRL.directives.XbrlResize.XbrlResizeDirective);
            appViewer.directive('xbrlTablaHipercubo', abaxXBRL.directives.XbrlTablaHipercuboDirective.factory);
            appViewer.directive('xbrlAplicaElementoTaxonomia', abaxXBRL.directives.XbrlAplicaElementoTaxonomiaDirective.factory);
            appViewer.directive('xbrlValidacionListaSeleccionMultiple', abaxXBRL.directives.XbrlValidacionListaSeleccionMultiple.XbrlValidacionListaSeleccionMultipleDirective);
            appViewer.filter('rango', abaxXBRL.directives.Rango.RangoFilter);

            appViewer.config(Config);
        }

        /**
         * Constructor de la clase ModuloVisor
         */
        constructor() {
            if (ModuloVisor._instance) {
                throw new Error("Error: Fallo al instanciar: Utilice ModuloVisor.getInstance() en lugar de new.");
            }
            ModuloVisor._instance = this;
            var self = this;
            shared.service.AbaxXBRLUtilsService.cargaModulosAngularPoNombre(['ckeditor', 'angularFileUpload', 'ngSanitize', 'ngAnimate', 'ngAside', 'ui.slimscroll', 'angular-intro'])
                .then(function () {
                    self.module = angular.module('abaxXBRLViewer', [root.AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_INICIO, 'ui.router', 'ckeditor', 'angularFileUpload', 'ngSanitize', 'ngAnimate', 'ngAside', 'FBAngular', 'ui.slimscroll', 'angular-intro']);
                self.init();
            }, function (error) {
                    console.log(error);
                });
        }

    }
    ModuloVisor.getInstance();
}
