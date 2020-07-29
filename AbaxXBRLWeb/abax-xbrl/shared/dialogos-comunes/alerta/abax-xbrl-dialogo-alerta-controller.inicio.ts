
module abaxXBRL.componentes.controllers {

    export interface IAbaxXBRLDialogoAlertaScope extends ng.IScope {

        /**
        * Cierra el dialogo sin retornar respuesta.
        **/
        cancelar():void ;
        /**
        * Cierra el dialogo con la respuesta de confirmación o no.
        * @param confirmado Si se confirmo  o no.
        **/
        aceptar(confirmado: boolean) : void;
        /**
        * Configuración de los elementos a mostrar en el dialogo.
        **/
        configuracion: shared.modelos.IConfiguracionDialogoConfirmacion;
        /**
        * Identificador del contenedor principal de la ventana a desplegar en el dialogo modal.
        **/
        idTemplateContent: string;
    }

    /**
    * Controlador del dialogo de alerta.
    **/
    export class AbaxXBRLDialogoAlertaController {

        /**
       * Scope de la vista.
       **/
        private $scope: IAbaxXBRLDialogoAlertaScope;

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
        private aceptar(confirmado: boolean):void {
            this.$modalInstance.close(confirmado);
        }


        /**
        * Inicializa los elementos del scope.
        **/ 
        private init(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            var now = new Date();
            $scope.idTemplateContent = 'alerta_modal_' + now.getTime();
            $scope.configuracion = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_CONFIGURACION_DIALOGO_CONFIRMACION);
            if (!$scope.configuracion) {
                $self.cancelar();
            }
            if (!$scope.configuracion.claseIconoTitulo) {
                $scope.configuracion.claseIconoTitulo = "fa fa-exclamation-triangle";
            }
            if (!$scope.configuracion.claseTitulo) {
                $scope.configuracion.claseTitulo = "panel-warning";
            }
            if (!$scope.configuracion.textoTititulo) {
                $scope.configuracion.textoTititulo = $util.getValorEtiqueta("TITULO_PROMPT_ADVERTENCIA");
            }

            $scope.configuracion.texto = $util.getValorEtiqueta($scope.configuracion.texto, $scope.configuracion.parametrosTexto);
            
            $scope.cancelar = function (): void { $self.cancelar(); };
            $scope.aceptar = function (confirmado: boolean): void { $self.aceptar(confirmado);};

            $self.$modalInstance.opened.finally(function () {
                setTimeout(function () {
                    var current = $('#' + $scope.idTemplateContent);
                    var modalContainer = current.parents('[modal-window]');
                    var sobreTodo = $('.sobreTodo');
                    if (sobreTodo.length > 0 && modalContainer.length > 0) {
                        sobreTodo.append(modalContainer);
                    }
                },333);
            });

        }

        /**
       * Constructor de la clase.
       * @param $scope Scope de la vista.
       * @param $modalInstance Instancia de la ventana modal que contiene esta vista.
       **/
        constructor($scope: IAbaxXBRLDialogoAlertaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {

            this.$scope = $scope;
            this.$modalInstance = $modalInstance;
            this.init();
        }
    }

    AbaxXBRLDialogoAlertaController.$inject = ['$scope', '$modalInstance'];
} 