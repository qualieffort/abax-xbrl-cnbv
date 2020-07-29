module abaxXBRL.componentes.controllers {
    /**
     * Definición de la estructura del scope para el controlador que sirve para agregar una usuario nuevo
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface AbaxXBRLAgregaUsuarioScope extends IAbaxXBRLInicioScope {
        /**
        * Usuario a borrar.
        **/
        usuario: abaxXBRL.shared.modelos.IUsuario;
        /**
        * Expresión Regular para validar en correo del usuario.
        **/
        email: RegExp;
        /**
        * Agrega el usuario nuevo.
        **/
        agregarUsuario(): void;

        /**
        * Valida el usuario  en el directorio activo
        */
        validarUsuarioDirectorioActivo(): void;

        /**
        * Cancela la operacion y regresa al indice.
        **/
        cancelar(): void;
        /**
        * Formulario del usuario a agregar.
        **/
        usuarioForm: ng.IFormController;
        /**
         * Bandera que indica si es la pantalla de usuario o usuario empresa.
         **/
        esUsuarioEmpresa: number;
        /**
         * Bandera que indica si se esta guardando los cambios hechos.
         **/
        guardando: boolean;

        /**
         * Bandera que indica si se esta validando el usuario en el directorio activo.
         **/
        validandoUsuario: boolean;


        /**
        * Indica si la autenticación es por single sign on
        */
        sso: boolean;

    }

    /**
     * Implementación de un controlador para la inserción de usuario nuevo
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLAgregaUsuarioController {
        /** El scope del controlador */
        $scope: AbaxXBRLAgregaUsuarioScope;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**
        * Registra el usuario nuevo del active directory.
        **/

        private agregarUsuarioActiveDirectory(): void {

            var self = this;
            var scope: AbaxXBRLAgregaUsuarioScope = self.$scope;

            var onSuccess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
                var $util = shared.service.AbaxXBRLUtilsService;

                var mensaje: string = "";
                if (resultado.Mensaje != null)
                    mensaje = $util.getValorEtiqueta(resultado.Mensaje);

                var mensajeUsuario = "";
                if (!resultado.Resultado) {
                    mensajeUsuario = "MENSAJE_USUARIO_DIRECTORIO_ACTIVO_NO_EXISTE_DESEA_CONTINUAR";
                } else {
                    self.agregarUsuario();
                }

                if (!resultado.Resultado) {

                    shared.service.AbaxXBRLUtilsService.muestraMensajeConfirmacion(mensajeUsuario, "TITULO_PROMPT_REEEM_VALORES")
                        .then(function (confirmado: boolean) {
                        if (confirmado) {



                            var onSuccess = function (result: any) { self.onAgregarUsuarioSuccess(result.data); }
                            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
                            var onFinally = function () {
                                scope.guardando = false;
                                scope.validandoUsuario = false;
                            };
                            scope.guardando = true;
                            scope.validandoUsuario = true;


                            var json = angular.toJson(scope.usuario);
                            var esusuarioEmpresa: boolean = scope.esUsuarioEmpresa && scope.esUsuarioEmpresa != null && scope.esUsuarioEmpresa > 0;
                            var url = window.location.href
                            var indexSharp = url.indexOf('#');
                            url = url.substr(0, indexSharp);
                            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.AGREGA_USUARIO_PATH, {
                                'json': json,
                                'esUsuarioEmpresa': esusuarioEmpresa,
                                'urlHref': url
                            }).then(onSuccess, onError).finally(onFinally);


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
        * Registra el usuario nuevo.
        **/
        private agregarUsuario(): void {
            var self: AbaxXBRLAgregaUsuarioController = this;
            var scope: AbaxXBRLAgregaUsuarioScope = self.$scope;

            var onSuccess = function (result: any) { self.onAgregarUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () {
                scope.guardando = false;
                scope.validandoUsuario = false;
            };
            scope.guardando = true;
            scope.validandoUsuario = true;


            var json = angular.toJson(scope.usuario);
            var esusuarioEmpresa: boolean = scope.esUsuarioEmpresa && scope.esUsuarioEmpresa != null && scope.esUsuarioEmpresa > 0;
            var url = window.location.href
            var indexSharp = url.indexOf('#');
            url = url.substr(0, indexSharp);
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.AGREGA_USUARIO_PATH, {
                'json': json,
                'esUsuarioEmpresa': esusuarioEmpresa,
                'urlHref': url
            }).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la inserción del usuario.
        * Asigna los elementos de la respuesta y muestra el mensaje relacionado.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onAgregarUsuarioSuccess(resultado: shared.modelos.IResultadoOperacion) {
            var self: AbaxXBRLAgregaUsuarioController = this;
            var scope: AbaxXBRLAgregaUsuarioScope = self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;

            var util = shared.service.AbaxXBRLUtilsService;
            var mensaje: string = $util.getValorEtiqueta(resultado.Mensaje);

            if (resultado.Resultado) {
                self.$scope.usuario = {
                    IdUsuario: 0,
                    Nombre: '',
                    ApellidoPaterno: '',
                    ApellidoMaterno: '',
                    CorreoElectronico: '',
                    VigenciaPassword: null,
                    IntentosErroneosLogin: null,
                    Bloqueado: null,
                    Activo: null,
                    Puesto: '',
                    Borrado: null
                };
                self.$scope.usuarioForm.$setPristine;
                self.$state.go('inicio.usuario.indice', { esUsuarioEmpresa: scope.esUsuarioEmpresa }).finally(function () {
                    util.ExitoBootstrap(mensaje);
                });
            } else {
                util.ErrorBootstrap(mensaje);
            }

        }

        /**
         * Constructor de la clase AbaxXBRLAgregaUsuarioController
         *
         * @param $scope el scope del controlador
         * @param $state Servicio para el cambio de estado de las vistas del sitio.
         * @param abaxXBRLRequestService el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLAgregaUsuarioScope, $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            var self: AbaxXBRLAgregaUsuarioController = this;

            self.$scope = $scope;
            self.$state = $state;
            self.$scope.usuario = {};
            self.abaxXBRLRequestService = abaxXBRLRequestService;
            self.$scope.sso = shared.service.AbaxXBRLSessionService.getAtributoSesion(shared.service.AbaxXBRLSessionService.AUTENTICACION_SSO_NAME);

            self.$scope.esUsuarioEmpresa = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ES_USUARIO_EMPRESA);
            shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ES_USUARIO_EMPRESA);

            self.$scope.guardando = false;
            self.$scope.validandoUsuario = false;

            self.$scope.email = /[a-z0-9!#$%*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

            self.$scope.agregarUsuario = function () {
                if (self.$scope.sso) {
                    self.agregarUsuarioActiveDirectory();
                } else {
                    self.agregarUsuario();
                }

            };

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
                self.$scope.usuario = {
                    IdUsuario: 0,
                    Nombre: '',
                    ApellidoPaterno: '',
                    ApellidoMaterno: '',
                    CorreoElectronico: '',
                    VigenciaPassword: null,
                    IntentosErroneosLogin: null,
                    Bloqueado: null,
                    Activo: null,
                    Puesto: '',
                    Borrado: null
                };
                self.$scope.usuarioForm.$setPristine();
                self.$state.go('inicio.usuario.indice', { esUsuarioEmpresa: self.$scope.esUsuarioEmpresa });
            };
        }
    }
    AbaxXBRLAgregaUsuarioController.$inject = ['$scope', '$state', 'abaxXBRLRequestService'];
}