module abaxXBRL.componentes.controllers {
    /**
     * Definición de la estructura del scope para el controlador que sirve para la eliminación de una usuario
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface AbaxXBRLEliminaUsuarioScope extends IAbaxXBRLInicioScope {
        /**
        * Id del usuario a borrar.
        **/
        id: string;
        /**
        * Borra el usuario con el id indicado.
        **/
        eliminarUsuario(): void;
        /**
        * Cancela la operación y cierrra el modal.
        **/
        cancelar(): void;
        /**
         * Bandera que indica si es la pantalla de usuario o usuario empresa.
         **/
        esUsuarioEmpresa: number;
    }

    /**
     * Implementación de un controlador para la eliminación de una usuario
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLEliminaUsuarioController {
        /** El scope del controlador */
        private $scope: AbaxXBRLEliminaUsuarioScope;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Servicio para el manejo de la instancia del diálogo modal. **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        /**
        * Borra el usuario indicado.
        **/
        private eliminarUsuario() {
            var self: AbaxXBRLEliminaUsuarioController = this;
            var scope: AbaxXBRLEliminaUsuarioScope = this.$scope;

            var onSuccess = function (result: any) { self.onEliminarUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ELIMINA_USUARIO_PATH, {
                'id': scope.id,
                'esUsuarioEmpresa': (scope.esUsuarioEmpresa > 0).toString()
            }).then(onSuccess, onError);
        }

        /** 
        * Procesa la respuesta asincrona del borrado del usuario.
        * Muestra el mensaje de exito o error y cierra el modal.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onEliminarUsuarioSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLEliminaUsuarioController = this;
            self.$modalInstance.close(resultado);
        }

        /**
         * Constructor de la clase UsuarioListCtrl
         *
         * @param $scope el scope del controlador
         * @param id el id de la usuario a eliminar
         * @param UsuarioDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLEliminaUsuarioScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, id: string) {
            var self: AbaxXBRLEliminaUsuarioController = this;

            self.$scope = $scope;
            self.$modalInstance = $modalInstance;
            self.$state = $state;
            self.abaxXBRLRequestService = abaxXBRLRequestService;
            self.$scope.id = id;

            self.$scope.esUsuarioEmpresa = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ES_USUARIO_EMPRESA);
            shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ES_USUARIO_EMPRESA);

            self.$scope.eliminarUsuario = function () { self.eliminarUsuario(); };

            self.$scope.cancelar = function () {
                self.$modalInstance.close();
            };
        }
    }
    AbaxXBRLEliminaUsuarioController.$inject = ['$scope', '$modalInstance', '$state', 'abaxXBRLRequestService', 'id'];
} 