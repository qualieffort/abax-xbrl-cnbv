
module abaxXBRL.componentes.controllers {

    export interface IAbaxXBRLDialogoConfirmacionScope extends ng.IScope {

        /**
        * Cierra el dialogo sin retornar respuesta.
        **/
        cancelar():void ;
        /**
        * Cierra el dialogo con la respuesta de confirmación o no.
        * @param confirmado Si se confirmo  o no.
        **/
        confirmar(confirmado: boolean) : void;
        /**
        * Configuración de los elementos a mostrar en el dialogo.
        **/
        configuracion: shared.modelos.IConfiguracionDialogoConfirmacion;
    }

    /**
    * 
    **/
    export class AbaxXBRLDialogoConfirmacionController {

        /**
       * Scope de la vista.
       **/
        private $scope: IAbaxXBRLDialogoConfirmacionScope;

        /**
        * Servicio para el manejo de la instancia del diálogo modal. 
        **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;


        /**
       * Cierra el dialogo sin retornar respuesta.
       **/
        private cancelar():void {
            this.$modalInstance.dismiss();
        }

        /**
        * Cierra el dialogo con la respuesta de confirmación o no.
        * @param confirmado Respuesta a la confiramción.
        **/
        private confirmar(confirmado: boolean):void {
            this.$modalInstance.close(confirmado);
        }


        /**
        * Inicializa los elementos del scope.
        **/ 
        private init(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;

            $scope.configuracion = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_CONFIGURACION_DIALOGO_CONFIRMACION);
            if (!$scope.configuracion.claseIconoTitulo) {
                $scope.configuracion.claseIconoTitulo = "i i-checked";
            }
            if (!$scope.configuracion.claseTitulo) {
                $scope.configuracion.claseTitulo = "panel-info";
            }
            if (!$scope.configuracion.textoTititulo) {
                $scope.configuracion.textoTititulo = $util.getValorEtiqueta("TITULO_CONFIRMAR");
            }
            
            $scope.cancelar = function (): void { $self.cancelar(); };
            $scope.confirmar = function (confirmado: boolean): void { $self.confirmar(confirmado);};

        }

        /**
       * Constructor de la clase.
       * @param $scope Scope de la vista.
       * @param $modalInstance Instancia de la ventana modal que contiene esta vista.
       **/
        constructor($scope: IAbaxXBRLDialogoConfirmacionScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {

            this.$scope = $scope;
            this.$modalInstance = $modalInstance;
            this.init();
        }
    }

    AbaxXBRLDialogoConfirmacionController.$inject = ['$scope', '$modalInstance'];
} 