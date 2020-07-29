module abaxXBRL.componentes.controllers {
    /**
     * Definición de la estructura del scope para el controlador que sirve para la eliminación de registros de la bitacora 
     * @author Juan Carlos Huizar Moreno
     * @version 1.0
     */
    export interface AbaxXBRLConfirmarDepurarBitacoraScope extends IAbaxXBRLInicioScope { 
        $state: ng.ui.IStateService; 
        fecha: string;
        eliminarRegistros(): void;
        cancelar(): void;  
    }

    /**
     * Implementación de un controlador para la eliminación de una empresa 
     * @author Juan Carlos Huizar Moreno
     * @version 1.0
     */
    export class AbaxXBRLConfirmarDepurarBitacoraController {

        /** El scope del controlador */
        private $scope: AbaxXBRLConfirmarDepurarBitacoraScope;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Servicio para el manejo de la instancia del diálogo modal. **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        /**
         * Ejecuta el proceso para eliminar los registros a partir de la fecha proporcionada.
         */
        private eliminarRegistros() { 
            var self: AbaxXBRLConfirmarDepurarBitacoraController = this;
            var scope: AbaxXBRLConfirmarDepurarBitacoraScope = this.$scope; 
            var onSuccess = function (result: any) { self.onEliminarRegistrosSuccess(result.data); }
            var onError = function (error: any) { self.$modalInstance.dismiss(error); } 
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ELIMINA_REGISTROS_BITACORA_PATH, { 'fecha': scope.fecha }).then(onSuccess, onError);
        } 

        /**
         * Al terminar de eliminar los registro, se cierra la pantalla modal
         */
        private onEliminarRegistrosSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLConfirmarDepurarBitacoraController = this;
            self.$modalInstance.close(resultado); 
        }

        /**
         * Constructor de la clase AbaxXBRLConfirmarDepurarBitacoraController
         *
         * @param $scope el scope del controlador
         * @param fecha el fecha de la empresa a eliminar
         * @param EmpresaDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLConfirmarDepurarBitacoraScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, fecha: string) {
            var self: AbaxXBRLConfirmarDepurarBitacoraController = this;

            self.$scope = $scope;
            self.$modalInstance = $modalInstance;
            self.$state = $state;
            self.abaxXBRLRequestService = abaxXBRLRequestService;
            self.$scope.fecha = fecha;

            self.$scope.eliminarRegistros = function () { self.eliminarRegistros(); }; 
            self.$scope.cancelar = function () { self.$modalInstance.close(); }; 
        }
    }

    AbaxXBRLConfirmarDepurarBitacoraController.$inject = ['$scope', '$modalInstance', '$state', 'abaxXBRLRequestService', 'fecha'];
}