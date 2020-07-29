module abaxXBRL.componentes.controllers {
    /**
 * Definición de la estructura del scope para el controlador que sirve para editar un usuario
 *
 * @author Alan Alberto Caballero Ibarra
 * @version 1.0
 */
    export interface AbaxXBRLEditarUsuarioScope extends IAbaxXBRLInicioScope {
        /**
        * Usuario a editar.
        **/
        usuario: abaxXBRL.shared.modelos.IUsuario;
        /**
        * Expresión Regular para validar en correo del usuario.
        **/
        email: RegExp;
        /**
        * Guarda los cambios hechos al usuario.
        **/
        actualizarUsuario(): void;
        /**
        * Cancela la operacion y regresa al indice.
        **/
        cancelar(): void;
        /**
        * Formulario del usuario a editar.
        **/
        usuarioForm: ng.IFormController;
        /**
        * Activa / desactiva el usuario indicado.
        **/
        activacionUsuario(): void;
        /**
        * Activa / desactiva el usuario indicado.
        **/
        bloqueoUsuario(): void;
        /**
        * Cancela la operacion y vuelve a la pantalla indice.
        **/
        cancelar(): void;

        /** Dispara la solicitud para generar y enviar nueva contraseña al usuario*/
        enviarNuevaContrasena();
        /**
         * Bandera que indica si es la pantalla de usuario o usuario empresa.
         **/
        esUsuarioEmpresa: number;
        /**
         * Bandera que indica si se esta guardando los cambios hechos.
         **/
        guardando: boolean;

        /**
         * Indica si al realizar la autenticación es mediante single sign on.
         **/
        sso: boolean;

        /**
        * Valida el usuario  en el directorio activo
        */
        validarUsuarioDirectorioActivo(): void;

        /**
         * Bandera que indica si se esta validando el usuario en el directorio activo.
         **/
        validandoUsuario: boolean;
        /**
        * Bandera que indica si se debe de mostrar el botón para generar una nueva contraseña.
        **/
        tieneFacultadGeneraraNuevaContrasena: boolean;
    }

    /**
     * Definición de la estructura del scope para el servicio de parametros de ruta
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface IAbaxXBRLEditaUsuarioRouteParams extends ng.ui.IStateParamsService {
        id: string;
    }

    /**
     * Implementación de un controlador para la edición de un usuario
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLEditaUsuarioController {
        /** El scope del controlador */
        private $scope: AbaxXBRLEditarUsuarioScope;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /** Servicio para controlar los parametros de la ruta de navegación */
        private $stateParams: IAbaxXBRLEditaUsuarioRouteParams;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        /**
        * Obtiene el usuario a mofificar mediante el id del mismo.
        **/
        private obtenerUsuario(id: string) {
            var self: AbaxXBRLEditaUsuarioController = this;

            var onSuccess = function (result: any) { self.onObtenerUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_USUARIO_PATH, { id: id }).then(onSuccess, onError);
        }

        /** 
        * Procesa la respuesta asincrona de la obtención del usuario.
        * Asigna los elementos de la respuesta.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenerUsuarioSuccess(resultado: any): void {
            var scope: AbaxXBRLEditarUsuarioScope = this.$scope;

            scope.usuario = resultado;
        }



        

        /**
        * Registra los cambios hechos al usuario.
        **/
        private actualizarUsuarioActiveDirectory(): void {


            var self = this;
            var scope: AbaxXBRLEditarUsuarioScope = self.$scope;

            var onSuccess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
                var $util = shared.service.AbaxXBRLUtilsService;

                var mensaje: string = "";
                if (resultado.Mensaje != null)
                    mensaje = $util.getValorEtiqueta(resultado.Mensaje);

                var mensajeUsuario = "";
                if (!resultado.Resultado) {
                    mensajeUsuario = "MENSAJE_ACT_USUARIO_DIRECTORIO_ACTIVO_NO_EXISTE_DESEA_CONTINUAR";
                } else {
                    self.actualizarUsuario();
                }

                if (!resultado.Resultado) {
                    shared.service.AbaxXBRLUtilsService.muestraMensajeConfirmacion(mensajeUsuario, "TITULO_PROMPT_REEEM_VALORES")
                        .then(function (confirmado: boolean) {
                        if (confirmado) {

                            var onSuccess = function (result: any) { self.onActualizarUsuarioSuccess(result.data); }
                            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
                            var onFinally = function () {
                                scope.guardando = false;
                                self.$scope.validandoUsuario = false;
                            };
                            scope.guardando = true;
                            self.$scope.validandoUsuario = true;
                            var json: string = angular.toJson(scope.usuario);

                            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ACTUALIZA_USUARIO_PATH, { 'json': json }).then(onSuccess, onError).finally(onFinally);



                        }
                    });
                }



            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.validandoUsuario = false; };

            self.$scope.validandoUsuario = true;

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.VALIDAR_USUARIO_DIRECTORIO_ACTIVO_PATH, {
                'nombreUsuario': self.$scope.usuario.CorreoElectronico
            }).then(onSuccess, onError).finally(onFinally);


        }



        /**
        * Registra los cambios hechos al usuario.
        **/
        private actualizarUsuario(): void {
            var self: AbaxXBRLEditaUsuarioController = this;
            var scope: AbaxXBRLEditarUsuarioScope = self.$scope;

            var onSuccess = function (result: any) { self.onActualizarUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () {
                scope.guardando = false;
                self.$scope.validandoUsuario = false;
            };
            scope.guardando = true;
            self.$scope.validandoUsuario = true;
            var json: string = angular.toJson(scope.usuario);

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ACTUALIZA_USUARIO_PATH, { 'json': json }).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la actualización del usuario.
        * Asigna los elementos de la respuesta y muestra el mensaje relacionado.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onActualizarUsuarioSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLEditaUsuarioController = this;
            var scope: AbaxXBRLEditarUsuarioScope = self.$scope;

            var util = shared.service.AbaxXBRLUtilsService;
            var mensaje = util.getValorEtiqueta(resultado.Mensaje);
            if (resultado.Resultado) {
                scope.usuarioForm.$setPristine();
                self.$state.go('inicio.usuario.indice', { esUsuarioEmpresa: scope.esUsuarioEmpresa ? scope.esUsuarioEmpresa : "0" }).finally(function () {
                    util.ExitoBootstrap(mensaje);
                });
            } else {
                util.ErrorBootstrap(mensaje);
            }

        }

        /** 
        * Procesa la respuesta del envio de nueva contraseña al usuario.
        * Asigna los elementos de la respuesta y muestra el mensaje relacionado.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onEnvioPasswordSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLEditaUsuarioController = this;
            var scope: AbaxXBRLEditarUsuarioScope = self.$scope;

            var util = shared.service.AbaxXBRLUtilsService;
            var mensaje = util.getValorEtiqueta(resultado.Mensaje);

            scope.usuarioForm.$setPristine();
            self.$state.go('inicio.usuario.indice', { esUsuarioEmpresa: (scope.esUsuarioEmpresa ? scope.esUsuarioEmpresa : "0") }).finally(function () {
                if (resultado.Resultado) {
                    util.ExitoBootstrap(mensaje);
                } else {
                    util.ErrorBootstrap(mensaje);
                }
            });


        }

        /**
        * Activa o desactiva el usuario especificado
        **/
        private activacionUsuario(): void {
            var self: AbaxXBRLEditaUsuarioController = this;
            var scope: AbaxXBRLEditarUsuarioScope = self.$scope;

            var onSuccess = function (result: any) { self.onCambioUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ACTIVACION_USUARIO_PATH, { 'id': scope.usuario.IdUsuario, 'estado': scope.usuario.Activo }).then(onSuccess, onError);
        }

        /**
        * Bloquea o desbloquea el usuario especificado
        **/
        private bloqueoUsuario(): void {
            var self: AbaxXBRLEditaUsuarioController = this;
            var scope: AbaxXBRLEditarUsuarioScope = self.$scope;

            var onSuccess = function (result: any) { self.onCambioUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.BLOQUEADO_USUARIO_PATH, { 'id': scope.usuario.IdUsuario, 'estado': scope.usuario.Bloqueado }).then(onSuccess, onError);
        }

        /** 
        * Procesa la respuesta asincrona de la activacion o bloqueo del usuario.
        * Asigna los elementos de la respuesta y muestra el mensaje relacionado.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCambioUsuarioSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLEditaUsuarioController = this;
            self.obtenerUsuario(self.$stateParams.id);
            var util = shared.service.AbaxXBRLUtilsService;
            var mensaje: string = util.getValorEtiqueta(resultado.Mensaje);

            if (resultado.Resultado)
                util.ExitoBootstrap(mensaje);
            else
                util.ErrorBootstrap(mensaje);
        }

        private enviarNuevaContrasena(): void {
            var self: AbaxXBRLEditaUsuarioController = this;
            var scope: AbaxXBRLEditarUsuarioScope = self.$scope;
            var onSuccess = function (result: any) { self.onEnvioPasswordSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            $.isLoading({
                text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('MENSAJE_ENVIANDO_CONTRASENA')
            });
            var url = window.location.href
            var indexSharp = url.indexOf('#');
            url = url.substr(0, indexSharp);
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ENVIA_PASSWORD_USUARIO, { 'correo': scope.usuario.CorreoElectronico, 'urlHref': url }).then(onSuccess, onError).finally(function () {
                $.isLoading('hide');
            });
        }

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self = this;
            self.$scope.sso = shared.service.AbaxXBRLSessionService.getAtributoSesion(shared.service.AbaxXBRLSessionService.AUTENTICACION_SSO_NAME);
            self.$scope.tieneFacultadGeneraraNuevaContrasena = self.$scope.tieneFacultad(AbaxXBRLFacultadesEnum.GeneraraNuevaContrasena) || (self.$scope.esUsuarioEmpresa != 0 && self.$scope.tieneFacultad(AbaxXBRLFacultadesEnum.GeneraraNuevaContrasenaMismaEmpresa))

            self.$scope.guardando = false;
            self.obtenerUsuario(self.$stateParams.id);
        }

        /**
         * Constructor de la clase UsuarioListCtrl
         *
         * @param $scope el scope del controlador
         * @param UsuarioDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLEditarUsuarioScope, $stateParams: IAbaxXBRLEditaUsuarioRouteParams, $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            var self: AbaxXBRLEditaUsuarioController = this;

            self.$scope = $scope;
            self.$stateParams = $stateParams;
            self.$state = $state;
            self.$scope.usuario = {};

            self.abaxXBRLRequestService = abaxXBRLRequestService;

            self.$scope.esUsuarioEmpresa = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ES_USUARIO_EMPRESA);
            shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ES_USUARIO_EMPRESA);

            self.$scope.email = /[a-z0-9!#$%*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

            self.$scope.actualizarUsuario = function () {
                if (self.$scope.sso) {
                    self.actualizarUsuarioActiveDirectory();
                } else {
                    self.actualizarUsuario();
                }
            };

            self.$scope.activacionUsuario = function () { self.activacionUsuario(); };

            self.$scope.bloqueoUsuario = function () { self.bloqueoUsuario(); };

            self.$scope.enviarNuevaContrasena = function () { self.enviarNuevaContrasena(); };


            self.$scope.validarUsuarioDirectorioActivo = function () {

                var onSuccess = function (result: any) {
                    var resultado: shared.modelos.IResultadoOperacion = result.data;
                    var $util = shared.service.AbaxXBRLUtilsService;
                    var mensaje: string = "";
                    if (resultado.Mensaje != null)
                        mensaje = $util.getValorEtiqueta(resultado.Mensaje);

                    if (resultado.Resultado) {

                        if (resultado.InformacionExtra != null) {
                            shared.service.AbaxXBRLUtilsService.muestraMensajeConfirmacion("MENSAJE_CONFIRM_REEMPLAZAR_VAL_USUARIO", "TITULO_PROMPT_REEEM_VALORES")
                                .then(function (confirmado: boolean) {
                                if (confirmado) {
                                    var usuarioDirectorioActivo: abaxXBRL.shared.modelos.IUsuario = resultado.InformacionExtra;
                                    self.$scope.usuario.Nombre = usuarioDirectorioActivo.Nombre;
                                    self.$scope.usuario.ApellidoPaterno = usuarioDirectorioActivo.ApellidoPaterno;
                                    self.$scope.usuario.ApellidoMaterno = usuarioDirectorioActivo.ApellidoMaterno;
                                    self.$scope.usuario.Puesto = usuarioDirectorioActivo.Puesto;
                                }
                            });
                        } else {
                            shared.service.AbaxXBRLUtilsService.ExitoBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_VALIDACION_USUARIO_SIN_VALIDACION"));
                        }

                    } else {
                        shared.service.AbaxXBRLUtilsService.muestraMensajeError(resultado.Mensaje, "TITULO_ERROR_VAL_USUARIO");
                    }

                }
                var onError = self.abaxXBRLRequestService.getOnErrorDefault();
                var onFinally = function () { self.$scope.validandoUsuario = false; };

                self.$scope.validandoUsuario = true;

                self.abaxXBRLRequestService.post(AbaxXBRLConstantes.VALIDAR_USUARIO_DIRECTORIO_ACTIVO_PATH, {
                    'nombreUsuario': self.$scope.usuario.CorreoElectronico
                }).then(onSuccess, onError).finally(onFinally);
            };

            self.$scope.cancelar = function () {
                self.$scope.usuarioForm.$setPristine();
                self.$state.go('inicio.usuario.indice', { esUsuarioEmpresa: self.$scope.esUsuarioEmpresa });
            };



            self.init();
        }
    }
    AbaxXBRLEditaUsuarioController.$inject = ['$scope', '$stateParams', '$state', 'abaxXBRLRequestService'];
} 