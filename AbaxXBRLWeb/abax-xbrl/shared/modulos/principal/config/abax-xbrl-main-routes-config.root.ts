/// <reference path="../../../../../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../scripts/typings/angular-ui-router/angular-ui-router.ts" />
/// <reference path="../../../../../scripts/typings/oclazyload/oclazyload.d.ts" />

module abaxXBRL.routes {
    

    /**
    * Clase que especifica la configuración de las rutas para los componetes de la administración.
    **/
    export class AbaxXBRLMainRoutesConfig {
        /** 
        * Constructor de la clase.
        * @param $stateProvider Proveedor de los cambios de estado de las vistas del sitio.
        * @param $urlRouterProvider Provedor de las rutas por defecto del sitio.
        **/
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            //$urlRouterProvider.otherwise("");
            /**Estado que envia la vista raíz a el login. **/
            $stateProvider.state("login", {
                //url: "",
                views: {
                    'root': {
                        templateUrl: 'abax-xbrl/componentes/login/abax-xbrl-login-main-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLLoginController'
                    }
                }
            }); 
            /**Estado para autenticar por correo o usuario del single sign on**/
            $stateProvider.state("login.autenticar", { 
				//url:"",
                views: {
                    'loginFormView': {
                        templateUrl: 'abax-xbrl/componentes/login/autentificar/abax-xbrl-autentificar-login-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
                    }

                }
            }); 

            /**Estado para autenticar por correo o usuario del single sign on**/
            $stateProvider.state("login.errorsso", { 
                //url:"errorsso",
                views: {
                    'loginFormView': {
                        templateUrl: '<%= ConfigurationManager.AppSettings["OSSO_URL"] %>'
                    }

                }
            });


            /**Estado que envia la vista de selecion de emisoras. **/
            $stateProvider.state("login.EmisoraLogin", { 
				//url:"",
                views: {
                    'loginFormView': {
                        templateUrl: 'abax-xbrl/componentes/login/emisoras/abax-xbrl-emisoras-login-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
                    }

                }
            });
            /**Estado que envia la vista de cambio de password. **/
            $stateProvider.state("login.CambiarPassword", { 
				//url:"CambiarPassword",
                views: {
                    'loginFormView': {
                        templateUrl: 'abax-xbrl/componentes/login/cambiar-password/abax-xbrl-cambiar-password-login-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
                    }

                }
            });

            /**Estado que envia la vista de error al autenticar por SSO **/
            $stateProvider.state("login.ErrorAutentificarSSO", { 
                //url:"CambiarPassword",
                views: {
                    'loginFormView': {
                        templateUrl: 'abax-xbrl/componentes/login/error-autentificar/abax-xbrl-error-autentificar-sso-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
                    }

                }
            });

            /**Estado que envia la vista raíz a el home. **/
            $stateProvider.state("inicio", {
                //url: "",
                views: {
                    'root': {
                        templateUrl: 'abax-xbrl/componentes/inicio/raiz/abax-xbrl-inicio-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLInicioController'
                    }
                }
            });
        }
    }
    AbaxXBRLMainRoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
}