module abaxXBRL.componentes.controllers {

    /**
    *  Interface que define los elementos necesarios para presentar los videos de ayuda.
    **/
    export interface AbaxXBRLAyudaScope extends IAbaxXBRLInicioScope {
        
        /** Contiene la informacion del material de apoyo  y version actual de la aplicacion de Abax*/
        ayuda: any;

        /** metodo que nos ayuda a obtener la cadena en html*/
        toTrustedHTML(textoHtml): string;

        /** Muestra el video en una ventana modal*/
        mostrarVideo(urlVideo): void;

        /** Cambia todas las vocales con acentos y diéresis. */
        ajustarFiltro(item: any): boolean;
        
        /** Filtro de busqueda. */
        buscarCont: string;
    }

    /**
    *  Interface que define los elementos necesarios para presentar los videos de ayuda.
    **/
    export interface AbaxXBRLMostrarVideoScope extends IAbaxXBRLInicioScope {
        
        /** Contiene la url del video*/
        urlVideo: string;

        /** Evento para cerrar el dialogo del video de apoyo*/
        cerrarDialogo(): void;

    }

    /**
    * Implementacion del Controller para mostrar los videos de ayuda de Abax Xbrl
    *
    * @author Luis Angel Morales González
    * @version 1.0
    */
    export class AbaxXBRLMostrarVideoController {

        /** Elementos necesarios para presentar la ayuda del abax **/
        private $scope: AbaxXBRLMostrarVideoScope;
         

        /**
       * Constructor de la clase.
       * @param $scope define el alcance la vista.
       * @$modalInstance servicio para manejo de ventana modal
       * @urlVideo url del video
       **/
        constructor($scope: AbaxXBRLMostrarVideoScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, urlVideo: string) {
            this.$scope = $scope;
            this.$scope.urlVideo = urlVideo;

            $scope.cerrarDialogo = function (): void {
                $modalInstance.close();
            };

        }
    }

    AbaxXBRLMostrarVideoController.$inject = ['$scope', '$modalInstance', 'urlVideo'];

    /**
    * Implementacion del Controller para visualizar el listado de videos de ayuda de Abax Xbrl
    *
    * @author Luis Angel Morales González
    * @version 1.0
    */
    export class AbaxXBRLAyudaController {

        /** Elementos necesarios para presentar la ayuda del abax **/
        private $scope: AbaxXBRLAyudaScope;

        /** Servicio para el manejo de las peticiones al Servidor **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** El servicio para comunicarse al servidor remoto */
        private httpService: ng.IHttpService;

        /** Servicio para el manejo asincrono de peticiones*/
        private $timeout: ng.ITimeoutService;

        /** El servicio para encolar solicitudes */
        private qService: ng.IQService;
        
        /** Servicio que permite integrar contenido en html*/
        private $sce: ng.ISCEService

        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;
          
        /** Cambia todas las vocales con acentos y diéresis. */
        normalize(texto: string): string {
            return texto.replace(/[áàäâÁ]/g, "&aacute;")
                .replace(/[éèëêÉ]/g, "&eacute;")
                .replace(/[íìïîÍ]/g, "&iacute;")
                .replace(/[óòôöÓ]/g, "&oacute;")
                .replace(/[úùüü]/g, "&uacute;")
                .replace(/[ñÑ]/g, "&ntilde;");
        }

        /**   Esta función cambia todas las vocales con acentos y diéresis. */
        ajustarFiltro(item: any): boolean {
            var self = this;
            var scope = self.$scope;

            if ((item.Contenido.toLowerCase().indexOf(self.normalize(scope.buscarCont).toLowerCase()) >= 0) ||
                (item.Titulo.toLowerCase().indexOf(self.normalize(scope.buscarCont).toLowerCase()) >= 0)) {
                return true;
            } else {
                return false;
            }
        }
         
        /**
         * Inicializamos los elementos del scope.
         **/
        private init(): void {
            var self = this;
            var scope = self.$scope;

            var deferred = self.qService.defer();

            scope.buscarCont = '';

            scope.ajustarFiltro = function (item: any): boolean {
                if (item.Contenido === undefined || item.Titulo === undefined || scope.buscarCont === undefined) {
                    return true;
                }
                else if (item.Contenido === '' || item.Titulo === '' || scope.buscarCont === '') {
                    return true;
                } else {
                    return self.ajustarFiltro(item);
                }
            };

            self.$timeout(function () {
                self.httpService.get('materialApoyo.json?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version).success(function (data) {
                    scope.ayuda = data;
                    deferred.resolve(data);
                }).error(function (data) {
                    console.log(data);
                    deferred.reject(data);
                });
            }, 30);

            deferred.promise;

            this.$scope.toTrustedHTML = function (textoHtml) {
                return self.$sce.trustAsHtml(textoHtml);
            };


            this.$scope.mostrarVideo = function (urlVideo: string) {
                self.$modal.open({
                    templateUrl: 'ts/templatesVisor/template-mostrar-video.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    size: 'lg',
                    windowClass: 'ng-all horizontal',
                    resolve: {
                        urlVideo: function () {
                            return urlVideo;
                        }
                    },
                    controller: AbaxXBRLMostrarVideoController

                });
            }

        }

        /**
        * Constructor de la clase.
        * @param $scope define el alcance la vista.
        * @param abaxXBRLRequestService maneja los servicios para las peticiones al servidor.
        * @param $http servicio para obtener el archivo json y generar el listado de materiales
        * @param $timeout para generar peticiones asincronas
        * @param $q servicio para generar las promesas de la carga de archivo
        * @$modal servicio para mostrar pantallas modales
        **/
        constructor($scope: AbaxXBRLAyudaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $http: ng.IHttpService, $timeout: ng.ITimeoutService, $q: ng.IQService, $sce: ng.ISCEService, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.httpService = $http;
            this.$timeout = $timeout;
            this.qService = $q;
            this.$sce = $sce;
            this.$modal = $modal;
            this.init();
        }
    }

    AbaxXBRLAyudaController.$inject = ['$scope', 'abaxXBRLRequestService', '$http', '$timeout', '$q', '$sce', '$modal'];

}