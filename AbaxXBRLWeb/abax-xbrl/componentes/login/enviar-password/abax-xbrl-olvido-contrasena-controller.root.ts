/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

module abaxXBRL.componentes.controllers {
    /**Scope del login **/
    export interface IAbaxXBRLOlvidoContrasena extends ng.IScope {
       
        /**Envia el password al correo correspondiente. **/
        enviarPassword(correo: string): void;
        /**
        * Correo del usuario.
        **/
        correo: string;
        /**
        * Bandera que indica que se esta enviando la contraseña al correo de usuario.
        **/
        enviandoContrasena: boolean;
        /**
        * Cierra la ventanta modal actual.
        **/
        cerrar(): void;
    }
    
    /**Controller del login**/
    export class AbaxXBRLOlvidoContrasenaController {

        /**Scope actual del login **/
        private $scope: IAbaxXBRLOlvidoContrasena;
        /**Servicio para el manejo de etiquetas en multilenguaje **/
        private $translate: ng.translate.ITranslateService;
        /** El servicio angular para la comunicación con el backend de la aplicación */
        private abaxXBRLLoginService: abaxXBRL.componentes.services.AbaxXBRLLoginService;
        /**
        * Instancia de la ventana modal.
        **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        /**
       * Muestra un prompt de alerta con el mensaje botenido del translate para el id ingresado.
       * @param mensajeId Identificador del texto del mensaje a mostrar.
       **/
        private muestraAlertaError(mensajeId: string, tituloId?: string) {
            var self = this;

            var mensaje: string = self.$translate.instant(mensajeId);
            var titulo: string;
            if (tituloId) {
                titulo = tituloId;
            } else {
                titulo = self.$translate.instant("TITULO_PROMPT_ERROR_AUTENTICAR_USUARIO");
            }
            var aceptar: string = self.$translate.instant("ETIQUETA_BOTON_ACEPTAR");
            $.prompt(mensaje, { title: titulo, buttons: { aceptar: true } });
        }
        
        /** 
        * Metodo para el envio de contraseña por correo electronico.
        **/
        private enviarPassword(correo: string): void {
            var self = this;
            var scope = this.$scope;

            if (!correo || correo == null || correo.trim().length == 0) {
                self.muestraAlertaError("MENSAJE_ERROR_AUTENTICAR_USUARIO_SIN_CORREO", self.$translate.instant("TITULO_PROMPT_OLVIDO_CONTRASENA"));
                return;
            }

            var onSucess = function (result: any) { self.onEnviarPasswordSucess(result); };
            var onError = function (error: any) { self.onEnviarPasswordError(error); };
            var onFinally = function () { scope.enviandoContrasena = false; };

            scope.enviandoContrasena = true;
            self.abaxXBRLLoginService.enviarPassword(correo).then(onSucess, onError).finally(onFinally);
        }

        /**
        * Listener de la promesa cuando fue cumplida. 
        * @param result Objeto con los datos de la respuesta.
        **/
        private onEnviarPasswordSucess(resultado: abaxXBRL.shared.modelos.IResultadoOperacion): void {
            var self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var mensaje = $util.getValorEtiqueta(resultado.Mensaje);
            self.muestraAlertaError(mensaje, self.$translate.instant("TITULO_PROMPT_OLVIDO_CONTRASENA"));
            self.cerrar();
            return;
        }

        /**
      * Listener de la promesa cuando no fue posible cumplirla 
      * @param error Objeto de error o texto con la causa del error.
      **/
        private onEnviarPasswordError(error: any): void {
            console.log(error);
            return;
        }

        /**
        * Cierra la ventanta modal actual.
        **/
        private cerrar():void {
            this.$modalInstance.close(false);
        }
       

        /**Inicializa los elementos del controller. **/
        private init(): void {
            //proxy de la instancia
            var self: AbaxXBRLOlvidoContrasenaController = this;
            var scope: IAbaxXBRLOlvidoContrasena = self.$scope;

            scope.enviandoContrasena = false;
            scope.cerrar = function (): void { self.cerrar(); };
            scope.enviarPassword = function (correo: string) { self.enviarPassword(correo); };
        }
        /**
        * Constructor base de la clase
        * @param $scope Scope actual del login.
        * @param abaxXBRLLoginService Servicio para el manejo del back end.
        * @param $translate Servicio para el manejo de multi idioma.
        * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        * @param $modal Servicio para el manejo de los diálogos modales.
        **/
        constructor($scope: IAbaxXBRLOlvidoContrasena, abaxXBRLLoginService: services.AbaxXBRLLoginService, $translate: ng.translate.ITranslateService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {

            this.$scope = $scope;
            this.abaxXBRLLoginService = abaxXBRLLoginService;
            this.$translate = $translate;
            this.$modalInstance = $modalInstance;
            this.init();
        }
    }

    AbaxXBRLOlvidoContrasenaController.$inject = ['$scope', 'abaxXBRLLoginService', '$translate','$modalInstance'];
} 