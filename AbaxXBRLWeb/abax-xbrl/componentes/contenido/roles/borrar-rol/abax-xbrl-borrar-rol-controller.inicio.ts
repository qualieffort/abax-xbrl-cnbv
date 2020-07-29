module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLRolesBorrarScope extends AbaxXBRLRolesIndexScope {
        /**
        * Entidad de tipo rol que se eliminará.
        **/
        rol: shared.modelos.IRol;
        /**
        * Borra el rol indicado.
        **/
        eliminarRol(): void;
        /**
        * Cancela la operación y cierrra el modal.
        **/
        cancelar(): void;
    }

    /**
     * Implementación de un controlador para la eliminación de una usuario
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLRolesBorrarController {
        /** El scope del controlador */
        private $scope: AbaxXBRLRolesBorrarScope;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Servicio para el manejo de la instancia del diálogo modal. **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        /**
        * Envia la solicitud al servidor para eliminar el rol
        **/
        private eliminarRol(): void {
            var self = this;
            var onSucess = function (result: any) { self.oneliminarRolSucess(result.data); }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.ELIMINAR_ROL_PATH, { "IdRol": self.$scope.rol.IdRol.toString() }).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta del servido cuando se elimina un rol.
        * @param resultado: Respuesta del servidor.
        **/
        private oneliminarRolSucess(resultado: shared.modelos.IResultadoOperacion) {
            var self = this;
            self.$modalInstance.close(resultado);
        }

        /**
         * Constructor de la clase UsuarioListCtrl
         *
         * @param $scope el scope del controlador
         * @param id el id de la usuario a eliminar
         * @param UsuarioDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLRolesBorrarScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, rol: shared.modelos.IRol) {
            var self: AbaxXBRLRolesBorrarController = this;

            self.$scope = $scope;
            self.$modalInstance = $modalInstance;
            self.$state = $state;
            self.abaxXBRLRequestService = abaxXBRLRequestService;
            self.$scope.rol = rol;

            self.$scope.eliminarRol = function () { self.eliminarRol(); };

            self.$scope.cancelar = function () {
                self.$modalInstance.close();
            };
        }
    }
    AbaxXBRLRolesBorrarController.$inject = ['$scope', '$modalInstance', '$state', 'abaxXBRLRequestService', 'rol'];
} 