module abaxXBRL.componentes.controllers {
    /**
     * Definición de la estructura del scope para el controlador que sirve para la eliminación de un documento instancia
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface AbaxXBRLEliminaDocumentoInstanciaScope extends IAbaxXBRLInicioScope {
        /**
        * Id del usuario a borrar.
        **/
        id: string;
        /**
        * Borra el docuemento con el id indicado.
        **/
        eliminarDocumentoInstancia(): void;
        /**
        * Cancela la operación y cierrra el modal.
        **/
        cancelar(): void;
        /** La clave de la emisora */
        claveEmisora: number;
        /** La fecha de consulta */
        fecha: Date;
        /**Bandera que indica que se esta esperando la respuesta del servidor. **/
        eliminando: boolean;
    }

    /**
     * Implementación de un controlador para la eliminación de un documento instancia
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class AbaxXBRLEliminaDocumentoInstanciaController {
        /** El scope del controlador */
        private $scope: AbaxXBRLEliminaDocumentoInstanciaScope;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Servicio para el manejo de la instancia del diálogo modal. **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        /**
        * Borra el usuario indicado.
        **/
        private eliminarDocumentoInstancia() {
            var self: AbaxXBRLEliminaDocumentoInstanciaController = this;
            var scope: AbaxXBRLEliminaDocumentoInstanciaScope = this.$scope;

            var onSuccess = function (result: any) { self.onEliminarDocumentoInstanciaSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            scope.eliminando = true;
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ELIMINAR_DOCUMENTO_INSTANCIA, {
                'idDocumentoInstancia': scope.id,
                'claveEmpresa': scope.claveEmisora,
                'fecha': scope.fecha
            }).then(onSuccess, onError);
        }

        /** 
        * Procesa la respuesta asincrona del borrado del documento instancia.
        * Muestra el mensaje de exito o error y cierra el modal.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onEliminarDocumentoInstanciaSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLEliminaDocumentoInstanciaController = this;
            self.$modalInstance.close(resultado);
            self.$scope.eliminando = false;
        }

        /**
         * Constructor de la clase AbaxXBRLEliminaDocumentoInstanciaController
         *
         * @param $scope el scope del controlador
         * @param $modalInstance el servicio para presentar diálogos modales
         * @param $state el servicio para consultar el estado de la navegación
         * @param abaxXBRLRequestService el servicio para invocar peticiones remotas
         * @param id el identificador del documento instancia
         */
        constructor($scope: AbaxXBRLEliminaDocumentoInstanciaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, id: string, claveEmpresa: number, fecha: Date) {
            var self: AbaxXBRLEliminaDocumentoInstanciaController = this;

            self.$scope = $scope;
            self.$modalInstance = $modalInstance;
            self.$state = $state;
            self.abaxXBRLRequestService = abaxXBRLRequestService;
            self.$scope.id = id;
            self.$scope.eliminando = false;

            self.$scope.eliminarDocumentoInstancia = function () { self.eliminarDocumentoInstancia(); };

            self.$scope.cancelar = function () {
                self.$modalInstance.close();
            };
        }
    }
    AbaxXBRLEliminaDocumentoInstanciaController.$inject = ['$scope', '$modalInstance', '$state', 'abaxXBRLRequestService', 'id', 'claveEmpresa', 'fecha'];
} 