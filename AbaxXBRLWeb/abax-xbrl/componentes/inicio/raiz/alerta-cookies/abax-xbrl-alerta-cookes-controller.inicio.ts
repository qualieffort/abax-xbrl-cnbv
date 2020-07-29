

module abaxXBRL.componentes.controllers {

    /**
    * Scope de la vista.
    **/
    export interface IAbaxXBRLAlertaCookesScope extends ng.IScope {
        /**
        * Cierra el dialogo modal.
        **/
        aceptar(): void;
    }

    /**
    * Clase del controlador de la vista.
    **/
    export class AbaxXBRLAlertaCookesController {

        /**
        * Scope de la vista.
        **/
        private $scope: IAbaxXBRLAlertaCookesScope;

        /**
        * Servicio para el manejo de la instancia del diálogo modal. 
        **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        
        /**
        * Cierra el dialogo modal.
        **/
        private aceptar(): void {
            this.$modalInstance.close();
        }
        /**
        * Inicializa los elementos del scope.
        **/
        private init(): void {

            var $self = this;
            var $scope = $self.$scope;

            $scope.aceptar = function (): void { $self.aceptar(); };
        }
        /**
        * Constructor de la clase.
        **/
        constructor($scope: IAbaxXBRLAlertaCookesScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {
            this.$scope = $scope;
            this.$modalInstance = $modalInstance;
            this.init();
        }
    }
    AbaxXBRLAlertaCookesController.$inject = ['$scope', '$modalInstance'];


} 