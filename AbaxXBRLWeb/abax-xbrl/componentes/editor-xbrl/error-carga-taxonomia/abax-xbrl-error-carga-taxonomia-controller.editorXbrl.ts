module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxErrorCargaTaxonomiaPopupScope extends AbaxXBRLRolesIndexScope {
        
        /**
        * Listado con los errores resultantes de la carga de la taxonomía.
        **/
        errores: Array<shared.modelos.IErrorCargaTaxonomia>;
        /**
        * Cancela la operación y cierrra el modal.
        **/
        aceptar(): void;
        /**
        * Clave de la severidad nivel error.
        **/
        severidadError: number;
        /**
        * Clave de la severidad nivel advertencia.
        **/
        severidadAdvertencia: number;
    }

    /**
     * Implementación de un controlador para la eliminación de una usuario
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLErrorCargaTaxonomiaPopupController {
        /** El scope del controlador */
        private $scope: AbaxErrorCargaTaxonomiaPopupScope;
        /**Servicio para el manejo de la instancia del diálogo modal. **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        /**
        * Cierra el dialogo modal y retorna ala ventana de captura.
        **/
        private aceptar(): void {
            var $state = this.$state;
            var $modalInstance = this.$modalInstance;
            $modalInstance.close();
            $state.go("inicio.editorXBRL.DocumentoInstanciaCrearDocumentoInstancia1");
        }

        /**
        * Inicializa los elementos del scope.
        **/
        private init(): void {

            var self = this;
            var $scope = self.$scope;
            var $session = shared.service.AbaxXBRLSessionService;
            var atributoListaErrores = AbaxXBRLConstantes.ATRIBUTO_LISTADO_ERRORES;

            $scope.severidadError = 0;
            $scope.severidadAdvertencia = 1;
            $scope.aceptar = function () { self.aceptar(); };
            $scope.errores = $session.getAtributoSesion(atributoListaErrores);
        }

        /**
         * Constructor de la clase UsuarioListCtrl
         *
         * @param $scope el scope del controlador
         * @param id el id de la usuario a eliminar
         * @param UsuarioDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxErrorCargaTaxonomiaPopupScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $state: ng.ui.IStateService) {
            var self: AbaxXBRLErrorCargaTaxonomiaPopupController = this;

            self.$scope = $scope;
            self.$modalInstance = $modalInstance;
            self.$state = $state;
            self.init();
        }
    }
    AbaxXBRLErrorCargaTaxonomiaPopupController.$inject = ['$scope', '$modalInstance', '$state'];
} 