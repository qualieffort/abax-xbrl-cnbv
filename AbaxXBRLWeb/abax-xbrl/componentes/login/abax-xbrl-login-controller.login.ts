/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />

module abaxXBRL.componentes.controllers {
    /**Scope del login **/
    export interface IAbaxXBRLoginScope extends ng.IScope {
        /**Valor de Correo electronico capturado por el usuario. **/
        credencial: abaxXBRL.shared.modelos.ICredencial;
        /** Lista de emisoras que se cargaran cuando el usuario tenga mas de una emrpesa asignada **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;
        /** La emisora que sera seleccionada **/
        miEmisora: abaxXBRL.shared.modelos.IEmisora;
        /** Objeto que contiene los datos para el cambio de password. **/
        cambioPassword: abaxXBRL.shared.modelos.ICambioPassword;
        /**Valida el usuario y la contraseña antes de iniciar sesión. **/
        autentificar(): void;
        /**Inicia la sesion y envia a la página de inicio. **/
        acceder(): void;
        /**Cambia el password del usuario actual. **/
        cambiarPassword(): void;
        /**Muestra los terminos de uso en un diálogo modal.**/
        mostrarTerminosUso(): void;
        /**Muestra el aviso de privacidad en un diálogo modal.**/
        mostrarAvisoPrivacidad(): void;
        /**
        * Correo del usuario.
        **/
        correo: string;
        /**
        * Evalua el evento keypress de angular.
        * @$event Evento keypress ocurrido.
        **/
        onKeyPressListener($event: ng.IAngularEvent): void;
        /**
        * Bandera que indica que se esta validando los datos de usuario.
        **/
        autenticando: boolean;
        /**
        * Bandera que indica que se esta enviando la contraseña al correo de usuario.
        **/
        enviandoContrasena: boolean;
        /**
        * Referencia a la ventana de olvido contraseña.
        **/
        ventanaOlvidoContrasena: ng.ui.bootstrap.IModalServiceInstance;
        /**
        * Muestra la ventana modal con el template para cuando el usuario a olvidado su contraseña.
        **/
        muestraOlvidoContrasena(): void;
        /**
        * Versión de la aplicación.
        **/
        versionApp: string;

        /**
        * Indicador si se trata de un  single sing on
        */
        esSSO: boolean;
        /**
        * Mensaje a mostrar cuando se muestra la pantalla de error.
        **/
        textoMensajePantallaError: string;
        /**
        * Bandera que indica si se deben de mostrar los terminos y condiciones.
        **/
        mostrarTerminosCondiciones: boolean;
    }
    
    /**Controller del login**/
    export class AbaxXBRLLoginController {

        /**Scope actual del login **/
        private $scope: IAbaxXBRLoginScope;
        /**Servicio para el manejo de etiquetas en multilenguaje **/
        private $translate: ng.translate.ITranslateService;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;
        /** El servicio angular para la comunicación con el backend de la aplicación */
        private abaxXBRLLoginService: abaxXBRL.componentes.services.AbaxXBRLLoginService;
        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;
        /** Servicio para el cambio dinamico de locale de anguar **/
        private tmhDynamicLocale: any;
        /**
        * Ultimas credenciales utilizadas para iniciar sesión.
        **/
        private static ultimaCredencial: abaxXBRL.shared.modelos.ICredencial;

        /**
        * Muestra un prompt de alerta con el mensaje botenido del translate para el id ingresado.
        * @param mensajeId Identificador del texto del mensaje a mostrar.
        **/
        private muestraAlertaError(mensajeId: string, tituloId?: string, parametros?: { [nombre: string]: string }) {
            var self: AbaxXBRLLoginController = this;

            var mensaje: string = self.$translate.instant(mensajeId, parametros);
            var titulo: string;
            if (tituloId) {
                titulo = self.$translate.instant(tituloId);
            } else {
                titulo = self.$translate.instant("TITULO_PROMPT_ERROR_AUTENTICAR_USUARIO");
            }
            var aceptar: string = self.$translate.instant("ETIQUETA_BOTON_ACEPTAR");
            $.prompt(mensaje, { title: titulo, buttons: { aceptar: true } });
        }

        /** 
       * Método que autentifica si el usuario es correcto e inicia la sessión.
       **/
        public autentificar(): void {

            var self: AbaxXBRLLoginController = this;
            var scope: IAbaxXBRLoginScope = this.$scope;
            
            if (scope.esSSO) {
                if (!scope.credencial.Usuario || scope.credencial.Usuario == null || scope.credencial.Usuario.trim().length == 0) {
                    self.muestraAlertaError("MENSAJE_ERROR_AUTENTICAR_USUARIO_SIN_USR_LDAP");
                    scope.autenticando = false;
                    return;
                }
            } else {
                if (!scope.credencial.Correo || scope.credencial.Correo == null || scope.credencial.Correo.trim().length == 0) {
                    self.muestraAlertaError("MENSAJE_ERROR_AUTENTICAR_USUARIO_SIN_CORREO");
                    scope.autenticando = false;
                    return;
                }
            }
            
            if (!scope.credencial.Password || scope.credencial.Password == null || scope.credencial.Password.trim().length == 0) {
                self.muestraAlertaError("MENSAJE_ERROR_AUTENTICAR_SIN_CONTRASENA");
                scope.autenticando = false;
                return;
            }
            scope.autenticando = true;
            var onSucess = function (result: any) { self.onAutentificarSucess(result); };
            var onError = function (error: any) { self.onAutentificarError(error); };
            var onFinally = function () {  };

            AbaxXBRLLoginController.ultimaCredencial = angular.copy(scope.credencial);
            scope.autenticando = true;
            self.abaxXBRLLoginService.autentificar(scope.credencial.Usuario,
                scope.credencial.Correo,
                scope.credencial.Password,
                scope.miEmisora.IdEmpresa).then(onSucess, onError).finally(onFinally);
        }
        /**
        * Listener de la promesa cuando fue cumplida. 
        * @param result Objeto con los datos de la respuesta.
        **/
        private onAutentificarSucess(result: any): void {
            var self: AbaxXBRLLoginController = this;
            var scope: IAbaxXBRLoginScope = this.$scope;
            if (result.error) {
                if (result.error_description) {
                    var resultadoError: shared.modelos.IResultadoOperacion = angular.fromJson(result.error_description);
                    root.AbaxXBRLRootUtilService.errorLog(resultadoError);
                    if (resultadoError.Mensaje) {
                        if (resultadoError.Mensaje == "SEND_REDIRECT") {
                            window.location.href = resultadoError.InformacionExtra["URL"];
                        } else {
                            if (resultadoError.Mensaje == "SEND_ERROR_SCREEN")
                            {
                                var $util = shared.service.AbaxXBRLUtilsService;
                                var claveMensaje = resultadoError.InformacionExtra["claveMensaje"];
                                var textoMensaje = $util.getValorEtiqueta(claveMensaje, resultadoError.InformacionExtra);
                                self.$scope.textoMensajePantallaError = textoMensaje;
                                self.$state.go('login.ErrorAutentificarSSO');
                                scope.autenticando = false;
                            } else {
                                self.muestraAlertaError(resultadoError.Mensaje);
                                scope.autenticando = false;
                            }
                        }
                    } else {
                        self.muestraAlertaError(result.error_description);
                        scope.autenticando = false;
                    }
                } else {
                    self.muestraAlertaError("MENSAJE_ERROR_AUTENTICAR_USUARIO_SESION_SERVIDOR", "TITULO_PROMPT_ERROR_CONTACTAR_SERVIDOR");
                    scope.autenticando = false;
                }

            } else {
                switch (result.Mensaje) {
                    case '':
                        AbaxXBRLLoginController.ultimaCredencial = null;
                        self.$state.go('inicio').finally(function () {
                            self.$scope.autenticando = false;
                        });
                        break;
                    case 'EmisoraLogin':
                        self.emisoraLogin();
                        break;
                    case 'CambiarPassword':
                        self.cambioDePassword();
                        break;
                }
            }
            

            return;
        }

        /**
        * Listener de la promesa cuando no fue posible cumplirla 
        * @param error Objeto de error o texto con la causa del error.
        **/
        private onAutentificarError(error: any): void {

            var self: AbaxXBRLLoginController = this;
            self.$scope.autenticando = false;
            if (error.data.error_description) {
                self.muestraAlertaError(error.data.error_description);
            } else {
                self.muestraAlertaError("MENSAJE_ERROR_AUTENTICAR_USUARIO_SESION_SERVIDOR", "TITULO_PROMPT_ERROR_CONTACTAR_SERVIDOR");
            }
            
            return;
        }

        /** 
        * En este método se obtiene las emisoras del usuario y si tiene más de una se envía a la pantalla de selección de emisoras para que determine con cual logearse.
        **/
        private emisoraLogin(): void {
            //obtener las emisoras y en base a eso enviar a la pantalla de seleccion de emisoras o de login.
            var self: AbaxXBRLLoginController = this;
            var scope: IAbaxXBRLoginScope = this.$scope;
            self.abaxXBRLLoginService.obtenerEmisoras().then(
                function (data) {
                    scope.emisoras = data;
                    self.$state.go('login.EmisoraLogin').finally(function () {
                        scope.autenticando = false;
                    });

                },
                function (error) {
                    self.muestraAlertaError("MENSAJE_ERROR_NO_CARGO_EMISORAS");
                });
        }

        /** 
        * Metodo para la segunda fase del logueo cuando se tiene mas de una emisora asignada.
        **/
        private acceder(): void {
            var self: AbaxXBRLLoginController = this;
            var scope: IAbaxXBRLoginScope = self.$scope;
            
            if (scope.miEmisora.IdEmpresa === 0 || scope.miEmisora.IdEmpresa === null) {
                self.muestraAlertaError("MENSAJE_ERROR_SELECCIONAR_EMISORA");
                return;
            }
            scope.credencial = AbaxXBRLLoginController.ultimaCredencial;
            self.autentificar();
        }

        /** 
        * Metodo para acceder a la pantalla de cambio de contraseña cuando esta ya esta caducada.
        **/
        private cambioDePassword(): void {
            var self: AbaxXBRLLoginController = this;

            self.$state.go('login.CambiarPassword');
        }

        /** 
        * Metodo para el cambio de contraseña.
        **/
        private cambiarPassword(): void {
            var self: AbaxXBRLLoginController = this;
            var scope: IAbaxXBRLoginScope = this.$scope;
            //var expReg = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
            ///var expReg = /(?=.*\d{1})(?=.*[a-z])(?=.*[A-Z])^([a-zA-Z0-9_]{8,20})$/;
            var titulo: string = 'TITULO_PROMPT_CAMBIO_PASSWORD';
            if (!scope.cambioPassword.PasswordActual || scope.cambioPassword.PasswordActual == null || scope.cambioPassword.PasswordActual.trim().length == 0) {
                self.muestraAlertaError("MENSAJE_ERROR_CAMBIO_PASSWORD_SIN_PASSWORD_ACTUAL", titulo);
                return;
            }
            if (!scope.cambioPassword.PasswordNuevo || scope.cambioPassword.PasswordNuevo == null || scope.cambioPassword.PasswordNuevo.trim().length == 0) {
                self.muestraAlertaError("MENSAJE_ERROR_CAMBIO_PASSWORD_SIN_PASSWORD_NUEVO", titulo);
                return;
            }
            var nuevoPassword = scope.cambioPassword.PasswordNuevo.trim();
            /*
            if (!nuevoPassword.match(expReg)) {
                self.muestraAlertaError("MENSAJE_ERROR_CONTRASENA_INVALIDA", titulo);
                return;
            }*/
            if (!scope.cambioPassword.PasswordNuevoConfirmacion || scope.cambioPassword.PasswordNuevoConfirmacion == null || scope.cambioPassword.PasswordNuevoConfirmacion.trim().length == 0) {
                self.muestraAlertaError("MENSAJE_ERROR_CAMBIO_PASSWORD_SIN_PASSWORD_CONFIRMACION", titulo);
                return;
            }
            if (scope.cambioPassword.PasswordNuevo != scope.cambioPassword.PasswordNuevoConfirmacion) {
                self.muestraAlertaError("MENSAJE_ERROR_CONTRASENAS_NO_COINCIDEN", titulo);
                return;
            }
            if (scope.cambioPassword.PasswordActual == scope.cambioPassword.PasswordNuevo) {
                self.muestraAlertaError("MENSAJE_ERROR_CONTRASENAS_ACTUAL_NUEVA_IGUALES", titulo);
                return;
            }

            var onSucess = function (resultado: abaxXBRL.shared.modelos.IResultadoOperacion) { self.onCambiarPasswordSucess(resultado); };
            var onError = function (error: any) { self.onCambiarPasswordError(error); };
            var onFinally = function () { scope.autenticando = false; };
            
            scope.autenticando = true;
            self.abaxXBRLLoginService.cambiarPassword(
                scope.cambioPassword.PasswordActual,
                scope.cambioPassword.PasswordNuevo,
                scope.cambioPassword.PasswordNuevoConfirmacion).then(onSucess, onError).finally(onFinally);
        }

        /**
        * Listener de la promesa cuando fue cumplida. 
        * @param resultado Objeto con los datos de la respuesta.
        **/
        private onCambiarPasswordSucess(resultado: abaxXBRL.shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLLoginController = this;
            var scope: IAbaxXBRLoginScope = this.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            scope.credencial.Password = scope.cambioPassword.PasswordNuevo;
            AbaxXBRLLoginController.ultimaCredencial.Password = scope.cambioPassword.PasswordNuevo;

            if (resultado.Resultado) {
                switch (resultado.Mensaje) {
                    case '':
                        self.autentificar();
                        break;
                    case 'EmisoraLogin':
                        self.emisoraLogin();
                        break;
                }
            } else {
                var parametros: { [token: string]: string } = null;
                if (resultado.Mensaje == 'MENSAJE_WARNING_CONTRASEÑA_USADA') {
                    parametros = { "numero": resultado.InformacionExtra };
                } 
                self.muestraAlertaError(resultado.Mensaje, "TITULO_PROMPT_CAMBIO_PASSWORD", parametros);
            }

            return;
        }

        /**
        * Listener de la promesa cuando no fue posible cumplirla 
        * @param error Objeto de error o texto con la causa del error.
        **/
        private onCambiarPasswordError(error: any): void {
            console.log(error);
            return;
        }

        /** 
        * Metodo para mostarar los terminos de uso.
        **/
        private mostrarTerminosUso(): void {
            var self: AbaxXBRLLoginController = this;
            if (self.$translate.use() == 'es') {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/login/terminos-condiciones/abax-xbrl-terminos-uso-template.es.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    backdrop: true,
                    keyboard: true,
                    size: 'lg'
                });
            } else {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/login/terminos-condiciones/abax-xbrl-terminos-uso-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    backdrop: true,
                    keyboard: true,
                    size: 'lg'
                });
            }
        }

        private mostrarAvisoPrivacidad(): void {
            var self: AbaxXBRLLoginController = this;    
            if (self.$translate.use() == 'es') { 
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/login/terminos-condiciones/abax-xbrl-aviso-privacidad.es.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    backdrop: true,
                    keyboard: true,
                    size: 'lg'
                }); 
            } else {  
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/login/terminos-condiciones/abax-xbrl-aviso-privacidad.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    backdrop: true,
                    keyboard: true,
                    size: 'lg'
                }); 
            } 
        }
        /**
        * Muestra la ventana modal con el template para cuando el usuario a olvidado su contraseña.
        **/
        private muestraOlvidoContrasena(): void {
            var self: AbaxXBRLLoginController = this;
            
            self.$scope.ventanaOlvidoContrasena = self.$modal.open({
                templateUrl: 'abax-xbrl/componentes/login/enviar-password/abax-xbrl-enviar-password-login-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: 'abaxXBRLOlvidoContrasenaController',
                backdrop: true,
                keyboard: true
                //size: 'lg'
            });

            self.$scope.ventanaOlvidoContrasena.result.finally(function () {
                self.$scope.ventanaOlvidoContrasena = null;
            });
        }
        /**
        * Evalua el evento keypress de agular.
        * @$event Evento ocurrido.
        **/
        private onKeyPressListener($event: ng.IAngularEvent):void {
            var self = this;
            if ($event.keyCode == AbaxXBRLCodigoTecla.Enter) {
                $event.preventDefault();

                var ventanaOlvidoContrasena = self.$scope.ventanaOlvidoContrasena;
                
                if (!ventanaOlvidoContrasena || ventanaOlvidoContrasena == null) {
                    self.autentificar();
                } 
            }
        }
        /**
        * Envía una solicitud de autentificación de fomra automatica.
        **/
        private autoAutenticar(): void {
            var self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var estadoActual = $util.getEstadoVista();
            if (estadoActual == "login.autenticar") {

                self.$scope.credencial.Usuario = "none";
                self.$scope.credencial.Correo = "none";
                self.$scope.credencial.Password = "none";
                self.autentificar();
            }
        }

        /**Inicializa los elementos del controller. **/
        private init(): void {
            //proxy de la instancia
            var self: AbaxXBRLLoginController = this;
            var scope: IAbaxXBRLoginScope = self.$scope;
            scope.esSSO = shared.service.AbaxXBRLSessionService.getAtributoSesion(shared.service.AbaxXBRLSessionService.AUTENTICACION_SSO_NAME);
            scope.mostrarTerminosCondiciones = root.AbaxXBRLConstantesRoot.VERSION_APP.mostrarTerminosCondiciones;

            if (scope.esSSO == null) {
                scope.esSSO = root.AbaxXBRLConstantesRoot.VERSION_APP.sso;
                shared.service.AbaxXBRLSessionService.setAtributoSesion(shared.service.AbaxXBRLSessionService.AUTENTICACION_SSO_NAME, scope.esSSO);
            }
            scope.autenticando = false;
            scope.enviandoContrasena = false;
            scope.autentificar = function () { self.autentificar(); };
            scope.acceder = function () { self.acceder(); };
            scope.cambiarPassword = function () { self.cambiarPassword() };
            
            scope.mostrarTerminosUso = function () { self.mostrarTerminosUso(); };
            scope.mostrarAvisoPrivacidad = function () { self.mostrarAvisoPrivacidad(); }

            scope.credencial = { Correo: '', Password: '', AceptoTerminosCondiciones: true ,Usuario:''};
            scope.emisoras = new Array<abaxXBRL.shared.modelos.IEmisora>();
            scope.miEmisora = { IdEmpresa: 0, NombreCorto: '' };
            scope.cambioPassword = { PasswordActual: '', PasswordNuevo: '', PasswordNuevoConfirmacion: '' };
            scope.onKeyPressListener = function ($evento: ng.IAngularEvent) { self.onKeyPressListener($evento); };
            scope.muestraOlvidoContrasena = function () { self.muestraOlvidoContrasena(); };
            scope.versionApp = root.AbaxXBRLConstantesRoot.VERSION_APP.etiquetaVersion;
            if (root.AbaxXBRLConstantesRoot.VERSION_APP.logeoAutomatico) {
                self.autoAutenticar();
            }
        }
        /**
        * Constructor base de la clase
        * @param $scope Scope actual del login.
        * @param abaxXBRLLoginService Servicio para el manejo del back end.
        * @param $translate Servicio para el manejo de multi idioma.
        * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        * @param $modal Servicio para el manejo de los diálogos modales.
        * @param tmhDynamicLocale Servicio para el cambio dinamico del locale.
        **/
        constructor($scope: IAbaxXBRLoginScope,
                    abaxXBRLLoginService: services.AbaxXBRLLoginService,
                    $translate: ng.translate.ITranslateService,
                    $state: ng.ui.IStateService,
                    $modal: ng.ui.bootstrap.IModalService,
                    tmhDynamicLocale: any
            ) { 

            this.$scope = $scope;
            this.abaxXBRLLoginService = abaxXBRLLoginService;
            this.$translate = $translate;
            this.$state = $state;
            this.$modal = $modal;
            this.tmhDynamicLocale = tmhDynamicLocale;
            this.init();

        }

    }

    AbaxXBRLLoginController.$inject = ['$scope', 'abaxXBRLLoginService', '$translate', '$state', '$modal', 'tmhDynamicLocale'];
} 