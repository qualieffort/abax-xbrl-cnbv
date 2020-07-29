
module abaxXBRL.componentes.controllers {

    /**
    * Define los elementos de interacción con la vista.
    **/
    export interface IAbaxXBRLDialogoListaDetalleScope extends ng.IScope {

        /**
        * Cierra el dialogo sin retornar respuesta.
        **/
        cancelar():void ;
        /**
        * Configuración de los elementos a mostrar en el dialogo.
        **/
        configuracion: shared.modelos.IConfiguracionDialogoListaDetalle;
        /**
        * Alias para TipoElementoListadoDetalleEnum.
        **/
        tipo: any;
    }

    /**
    * Controlador de la vista.
    **/
    export class AbaxXBRLDialogoListaDetalleController {

        /**
       * Scope de la vista.
       **/
        private $scope: IAbaxXBRLDialogoListaDetalleScope;

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
        * Inicializa los elementos del scope.
        **/ 
        private init(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            $scope.tipo = shared.modelos.TipoElementoListadoDetalleEnum;
            $scope.configuracion = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_CONFIGURACION_DIALOGO_DETALLE);
            if (!$scope.configuracion.claseIconoTitulo) {
                $scope.configuracion.claseIconoTitulo = "i i-info";
            }
            if (!$scope.configuracion.claseTitulo) {
                $scope.configuracion.claseTitulo = "panel-info";
            }
            if (!$scope.configuracion.textoTititulo) {
                $scope.configuracion.textoTititulo = $util.getValorEtiqueta("TITULO_DETALLE");
            }

            if (!$scope.configuracion.textoTititulo) {
                $scope.configuracion.textoTititulo = $util.getValorEtiqueta("TITULO_DETALLE");
            }

            $scope.cancelar = function (): void { $self.cancelar(); };

        }

        /**
       * Constructor de la clase.
       * @param $scope Scope de la vista.
       * @param $modalInstance Instancia de la ventana modal que contiene esta vista.
       **/
        constructor($scope: IAbaxXBRLDialogoListaDetalleScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {

            this.$scope = $scope;
            this.$modalInstance = $modalInstance;
            this.init();
        }
    }

    AbaxXBRLDialogoListaDetalleController.$inject = ['$scope', '$modalInstance'];
} 