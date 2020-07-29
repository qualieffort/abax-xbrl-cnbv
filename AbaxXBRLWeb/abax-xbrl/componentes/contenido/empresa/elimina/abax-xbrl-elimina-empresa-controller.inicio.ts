module abaxXBRL.componentes.controllers {
    /**
     * Definición de la estructura del scope para el controlador que sirve para la eliminación de una empresa
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface AbaxXBRLEliminaEmpresaScope extends IAbaxXBRLInicioScope {
        id: string;
        eliminarEmpresa(): void;
        cancelar(): void;
    }

    /**
     * Implementación de un controlador para la eliminación de una empresa
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLEliminaEmpresaController {
        /** El scope del controlador */
        private $scope: AbaxXBRLEliminaEmpresaScope;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Servicio para el manejo de la instancia del diálogo modal. **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        private eliminarEmpresa() {
            var self: AbaxXBRLEliminaEmpresaController = this;
            var scope: AbaxXBRLEliminaEmpresaScope = this.$scope;

            $('#botonEliminar').attr("disabled", 1);

            var onSuccess = function (result: any) { self.onEliminarEmpresaSuccess(result.data); }
            var onError = function (error: any) { self.$modalInstance.dismiss(error);}

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ELIMINA_EMPRESA_PATH, { 'id': scope.id }).then(onSuccess, onError);
        }

        private onEliminarEmpresaSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLEliminaEmpresaController = this;
            $('#botonEliminar').attr("disabled", 0);	
            self.$modalInstance.close(resultado);
        }

        /**
         * Constructor de la clase EmpresaListCtrl
         *
         * @param $scope el scope del controlador
         * @param id el id de la empresa a eliminar
         * @param EmpresaDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLEliminaEmpresaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, id: string) {
            var self: AbaxXBRLEliminaEmpresaController = this;

            self.$scope = $scope;
            self.$modalInstance = $modalInstance;
            self.$state = $state;
            self.abaxXBRLRequestService = abaxXBRLRequestService;
            self.$scope.id = id;

            self.$scope.eliminarEmpresa = function () { self.eliminarEmpresa(); };

            self.$scope.cancelar = function () {
                self.$modalInstance.close();
            };
        }
    }
    AbaxXBRLEliminaEmpresaController.$inject = ['$scope', '$modalInstance', '$state', 'abaxXBRLRequestService', 'id'];
}