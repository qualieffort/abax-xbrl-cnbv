///<reference path="../../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../../scripts/typings/angular-ui-router/angular-ui-router.ts" />

module abaxXBRL.componentes.controllers {

    /**Scope raís de toda la aplicación**/
    export interface IAbaxXBRLMainScope extends ng.IScope{
        /**Copia de la entidad con los datos del usuario en sesion. **/
        usuarioSesion: shared.modelos.IUsuario;
        /**
        * Expone el enum con la lista de facultades disponibles.
        **/
        FacultadesEnum: any;

        /**
        * Define la url del visor externo que debe desplegar
        */
        urlVisorExterno: string;

        /**
        * Determina si el usuario en sesión tiene la facultad indicada.
        * @param facultad Identificador de la facultad a evaluar.
        * @return Si el usuario en sesión tiene la facultad indicada.
        **/
        tieneFacultad(facultad: number): boolean;
        /**Destruye la sesión de usuario. **/
        cerrarSesion(): void;
        /**Cambia el idoma en la aplicación. **/
        cambiarIdioma(idioma: string): void;
        /**Muestra u oculta el menú de navegacion. **/
        toggleMenuNavegacion(): void;
        /**Bandera que indica si se debe de mostrar el menú de navegación cuando se esta en vista portrait. **/
        mostrarMenuNavegacionEnportrait: boolean;
        /**
        * Bandera que indica si la navegación debe de ser extra small.
        **/
        navegacionXS: boolean;
        /**
        * Bandera que nos indica si estamos en el editor XBRL o no.
        **/
        enEditorXBRL: boolean;
        /** Version publicada del control de versiones. **/
        versionApp: string;
        /**
        * Bandera que indica si se esta utilizando el navegador Internet Explorer o no.
        **/
        usandoIE: boolean;

        
    }

    /**Controller principal de la raíz del sitio actual**/
    export class AbaxXBRLMainController {
        /**Scope raíz de la aplicación**/
        private $scope: IAbaxXBRLMainScope = null;
        /**Servicio para el manejo de la sesion. **/
        private abaxXBRLSessionService: shared.service.AbaxXBRLSessionService;
        /**Servicio para el cambio de estado de las vistas dentro de. **/
        private $state: ng.ui.IStateService = null; 
        /**Cambia la bandera que determina si se agrega o no la clase que mustra el menú de navegación den portrait **/
        private toggleMenuNavegacion() {
            this.$scope.mostrarMenuNavegacionEnportrait = !this.$scope.mostrarMenuNavegacionEnportrait;
        }
         
        /**Inicializamos los elementos del scope raíz.**/
        private init(): void {
            var self = this;
            var scope = self.$scope;

            scope.mostrarMenuNavegacionEnportrait = false;
            scope.usuarioSesion = {
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

            scope.urlVisorExterno = root.AbaxXBRLConstantesRoot.VERSION_APP.urlVisorExterno;
            scope.enEditorXBRL = false;
            shared.service.AbaxXBRLUtilsService.addEventListenerToRootScope('validaEditorGenerico2', '$stateChangeSuccess', function (event: ng.IAngularEvent, toState: ng.ui.IState, toParams: {}, fromState: ng.ui.IState, fromParams: {}) {
                scope.enEditorXBRL = (toState.name.indexOf('inicio.editorXBRL') == 0 || toState.name.indexOf('inicio.visorXBRL') == 0);
            });
            
             
            self.abaxXBRLSessionService.esSesionActiva().then(function (esActiva) {
                if (esActiva) {
                    self.$state.go('inicio');
                }
            });
            scope.tieneFacultad = function (facultad: number) { return shared.service.AbaxXBRLSessionService.tieneFacultad(facultad); }
            scope.cerrarSesion = function () { self.abaxXBRLSessionService.cerrarSesion(); }
            scope.cambiarIdioma = function (idioma: string) { self.abaxXBRLSessionService.cambiarIdioma(idioma); }
            scope.toggleMenuNavegacion = function () { self.toggleMenuNavegacion(); };

            scope.usandoIE = shared.service.AbaxXBRLUtilsService.usandoInternetExplorer();

            //Validamos si la sesion esta activa.
            self.abaxXBRLSessionService.esSesionActiva();
        }

        /** 
        * Constructor del controller.
        * @param $scope Scope raíz del sitio.
        * @param abaxXBRLSessionService Servicio para el manejo de la sesion.
        * @param $state Servicio para el cambio de estado de las vistas del sitio.
        **/
        constructor($scope: IAbaxXBRLMainScope, abaxXBRLSessionService: shared.service.AbaxXBRLSessionService, $state: ng.ui.IStateService, abaxXBRLUtilsService: shared.service.AbaxXBRLUtilsService) {
            this.$scope = $scope;
            this.$state = $state;
            this.abaxXBRLSessionService = abaxXBRLSessionService;
            this.init();
        }
    }
    AbaxXBRLMainController.$inject = ['$scope', 'abaxXBRLSessionService', '$state','abaxXBRLUtilsService'];
} 