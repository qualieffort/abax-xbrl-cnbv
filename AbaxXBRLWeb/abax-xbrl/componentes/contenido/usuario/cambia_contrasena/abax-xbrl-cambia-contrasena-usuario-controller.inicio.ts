module abaxXBRL.componentes.controllers {
    /**
     * Definición de la estructura del scope para el controlador que sirve para cambiar la contraseña del usuario logueado.
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface AbaxXBRLCambioContrasenaUsuarioScope extends IAbaxXBRLInicioScope {
        /** Objeto que contiene los datos para el cambio de password. **/
        cambioPassword: abaxXBRL.shared.modelos.ICambioPassword;
        /**Cambia el password del usuario actual. **/
        cambiarPassword(): void;
        /**Bandera que indica si se esta guardando los cambios hechos.**/
        guardando: boolean;
    }

    /**
     * Implementación de un controlador para el cambio de contrasela del usuario logueado.
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLCambioContrasenaUsuarioController {
        /** El scope del controlador */
        private $scope: AbaxXBRLCambioContrasenaUsuarioScope;
        /**Servicio para el manejo de etiquetas en multilenguaje **/
        private $translate: ng.translate.ITranslateService;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        private cambiarPassword(): void {
            var self: AbaxXBRLCambioContrasenaUsuarioController = this;
            var scope: AbaxXBRLCambioContrasenaUsuarioScope = self.$scope;

            if (!scope.cambioPassword.PasswordActual || scope.cambioPassword.PasswordActual == null || scope.cambioPassword.PasswordActual.trim().length == 0) {
                shared.service.AbaxXBRLUtilsService.ErrorBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_ERROR_CAMBIO_PASSWORD_SIN_PASSWORD_ACTUAL"));
                scope.cambioPassword = { PasswordActual: '', PasswordNuevo: '', PasswordNuevoConfirmacion: '' };
                return;
            }
            if (!scope.cambioPassword.PasswordNuevo || scope.cambioPassword.PasswordNuevo == null || scope.cambioPassword.PasswordNuevo.trim().length == 0) {
                shared.service.AbaxXBRLUtilsService.ErrorBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_ERROR_CAMBIO_PASSWORD_SIN_PASSWORD_NUEVO"));
                scope.cambioPassword = { PasswordActual: '', PasswordNuevo: '', PasswordNuevoConfirmacion: '' };
                return;
            }
            if (!scope.cambioPassword.PasswordNuevoConfirmacion || scope.cambioPassword.PasswordNuevoConfirmacion == null || scope.cambioPassword.PasswordNuevoConfirmacion.trim().length == 0) {
                shared.service.AbaxXBRLUtilsService.ErrorBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_ERROR_CAMBIO_PASSWORD_SIN_PASSWORD_CONFIRMACION"));
                scope.cambioPassword = { PasswordActual: '', PasswordNuevo: '', PasswordNuevoConfirmacion: '' };
                return;
            }
            if (scope.cambioPassword.PasswordNuevo != scope.cambioPassword.PasswordNuevoConfirmacion) {
                shared.service.AbaxXBRLUtilsService.ErrorBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_ERROR_CONTRASENAS_NO_COINCIDEN"));
                scope.cambioPassword = { PasswordActual: '', PasswordNuevo: '', PasswordNuevoConfirmacion: '' };
                return;
            }
            if (scope.cambioPassword.PasswordActual == scope.cambioPassword.PasswordNuevo) {
                shared.service.AbaxXBRLUtilsService.ErrorBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_ERROR_CONTRASENAS_ACTUAL_NUEVA_IGUALES"));
                scope.cambioPassword = { PasswordActual: '', PasswordNuevo: '', PasswordNuevoConfirmacion: '' };
                return;
            }

            var onSucess = function (result: any) { self.onCambiarPasswordSuccess(result.data); };
            var onError = function (error: any) { self.abaxXBRLRequestService.getOnErrorDefault(); };
            var onFinally = function () { scope.guardando = false; };
            scope.guardando = true;

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CAMBIA_CONTRASEÑA_USUARIO_PATH, {
                'passwordAnterior': scope.cambioPassword.PasswordActual,
                'passwordNuevo': scope.cambioPassword.PasswordNuevo,
                'passwordConfirmar': scope.cambioPassword.PasswordNuevoConfirmacion
            }).then(onSucess, onError).finally(onFinally);
        }

        private onCambiarPasswordSuccess(resultado: abaxXBRL.shared.modelos.IResultadoOperacion) {
            var scope: AbaxXBRLCambioContrasenaUsuarioScope = this.$scope;
            var util = shared.service.AbaxXBRLUtilsService;
            var parametros: { [token: string]: string } = null;

            if (resultado.Mensaje == 'MENSAJE_WARNING_CONTRASEÑA_USADA') {
                parametros = { "numero": resultado.InformacionExtra };
            }

            var mensaje: string = util.getValorEtiqueta(resultado.Mensaje, parametros);

            if (resultado.Resultado) {
                util.ExitoBootstrap(mensaje);
            } else {
                util.ErrorBootstrap(mensaje);
            }
            scope.cambioPassword = { PasswordActual: '', PasswordNuevo: '', PasswordNuevoConfirmacion: '' };
        }

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self: AbaxXBRLCambioContrasenaUsuarioController = this;
            var scope: AbaxXBRLCambioContrasenaUsuarioScope = self.$scope;

            scope.guardando = false;
            scope.cambioPassword = { PasswordActual: '', PasswordNuevo: '', PasswordNuevoConfirmacion: '' };

            scope.cambiarPassword = function (): void { self.cambiarPassword(); }
        }

        /**
         * Constructor de la clase EmpresaListCtrl
         *
         * @param $scope el scope del controlador
         * @param EmpresaDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLCambioContrasenaUsuarioScope, $translate: ng.translate.ITranslateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.$translate = $translate;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }
    AbaxXBRLCambioContrasenaUsuarioController.$inject = ['$scope', '$translate', 'abaxXBRLRequestService'];
}