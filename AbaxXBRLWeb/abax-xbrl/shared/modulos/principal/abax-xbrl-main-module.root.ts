/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../scripts/typings/oclazyload/oclazyload.d.ts" />
/// <reference path="../../../../scripts/typings/angular-local-storage/angular-local-storage.d.ts" />
/// <reference path="config/abax-xbrl-main-local-storage-config.root.ts" />
/// <reference path="config/abax-xbrl-main-routes-config.root.ts" />
/// <reference path="config/abax-xbrl-main-translate-config.root.ts" />

module abaxXBRL.modulos {
    /**
     * Implementación de un singleton para contener la instancia única de la declaración del módulo abaxXBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class AbaxXBRLApp {

        /** La instancia única de la clase */
        private static _instance: AbaxXBRLApp = null;

        /** La declaración del módulo angular que contiene al visor */
        public module: ng.IModule;

       /**
        * Inicializa los elementos del modulo
        **/
        private init(): void {
            var abaxXBRLModule = abaxXBRL.modulos.AbaxXBRLApp.getInstance().module;
    
            //Se agrega la configuración de los idiomas.
            abaxXBRLModule.config(translate.AbaxXBRLTranslateProvider);
            //Configuración del local storage
            abaxXBRLModule.config(localStorage.AbaxXBRLLocalStorage);
            //Se agrega la configuración del ruteo del directorio raíz
            abaxXBRLModule.config(routes.AbaxXBRLMainRoutesConfig);
            //Agregamos la referencias a los servicios
            abaxXBRLModule.factory('abaxXBRLSessionService', ['$http', '$q', '$translate', '$state', 'localStorageService', 'tmhDynamicLocale', '$window', shared.service.AbaxXBRLSessionService.factory]);
            abaxXBRLModule.factory('abaxXBRLRequestService', ['$http', '$q', 'abaxXBRLSessionService', shared.service.AbaxXBRLRequestService.factory]);
            abaxXBRLModule.factory('abaxXBRLUtilsService', ['$q', '$translate', '$state', 'DTOptionsBuilder', 'DTInstances', '$modal', '$timeout', '$ocLazyLoad', '$rootScope', shared.service.AbaxXBRLUtilsService.factory]);
            abaxXBRLModule.factory('abaxXBRLLoginService', ['$http', '$q', 'abaxXBRLSessionService', componentes.services.AbaxXBRLLoginService.factory]);
            //Definimos las referencias a los controladores del modulo.
            abaxXBRLModule.controller('abaxXBRLLoginController', componentes.controllers.AbaxXBRLLoginController);
            abaxXBRLModule.controller('abaxXBRLMainController', componentes.controllers.AbaxXBRLMainController);
            abaxXBRLModule.controller('abaxXBRLInicioController', componentes.controllers.AbaxXBRLInicioController);
            abaxXBRLModule.controller('abaxXBRLOlvidoContrasenaController', componentes.controllers.AbaxXBRLOlvidoContrasenaController);
            //Definimos las directivas
            //Procedimientos de incialización
            abaxXBRLModule.run(utilerias.init.AbaxXBRLRootScopeInit);
        }

        /**
         * Constructor de la clase ModuloVisor
         */
        constructor() {
            if (AbaxXBRLApp._instance) {
                throw new Error("Error: Fallo al instanciar: Utilice ModuloVisor.getInstance() en lugar de new.");
            }

            var self = this;
            AbaxXBRLApp._instance = self;
            AbaxXBRLApp._instance.module = angular.module(
                root.AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_PRINCIPAL,[
                    root.AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_RAIZ
                ]);
            self.init();
        }

        /**
         * Obtiene la instancia única de esta clase. Si no existe, la crea.
         *
         * @return la instancia única de esta clase.
         */
        public static getInstance(): AbaxXBRLApp {
            if (AbaxXBRLApp._instance === null) {
                AbaxXBRLApp._instance = new AbaxXBRLApp();
            }
            return AbaxXBRLApp._instance;
        }
    }

    abaxXBRL.modulos.AbaxXBRLApp.getInstance();
} 