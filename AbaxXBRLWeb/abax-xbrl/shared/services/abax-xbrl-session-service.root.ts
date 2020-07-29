///<reference path="../../../Scripts/typings/impromptu/jquery-impromptu.d.ts" /> 
///<reference path="../../../scripts/typings/angular-translate/angular-translate.d.ts" /> 
/// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../scripts/typings/angular-local-storage/angular-local-storage.d.ts" />
module abaxXBRL.shared.service {
    
    /**Servicio para el menjo de la sesión**/
    export class AbaxXBRLSessionService {
        
        /** El servicio para encolar solicitudes */
        private qService: ng.IQService;
        /**Servicio para el manejo de etiquetas en multilenguaje **/
        private $translate: ng.translate.ITranslateService;
        /** El servicio para comunicarse al servidor remoto */
        private httpService: ng.IHttpService;
        /**Servicio para el cambio de estado de las vistas dentro de la app. **/
        private $state: ng.ui.IStateService = null;
        /**Servicio del local storage para el manejo del almacenamiento local **/
        private localStorageService: ng.local.storage.ILocalStorageService<any> = null;
        /**Servicio para el cambio dinamico de locale de anguarl**/
        private tmhDynamicLocale: any;
        /**Servicio de acceso al objeto window del dom **/
        private $window: ng.IWindowService;
        /**Instancia única de la sesión **/
        private static SINGELTON_SESSSION_INSTANCE: modelos.ISession = null;
        /**
        * Arreglo con los ids de las facultades de las que dispone el usuario en sesion.
        **/
        private static SINGELGTON_IDS_FACULTADES: Array<number>;
        /**Instancia única del servicio**/
        private static SINGELTON_SERVICE_INSTANCE: AbaxXBRLSessionService = null;
        /**Path para obtener los datos de la sesión por token **/
        private static get OBTENER_SESION_POR_TOKEN_PATH(): string { return "Login/SesionPorToken"; }
        /**Nombre del elemento que contiene el valor del token en el local storage **/
        private static get TOKEN_NAME(): string { return "token" }
        /**Nombre del elemento que contiene el valor del single sign on en el local storage **/
        public static get AUTENTICACION_SSO_NAME(): string { return "sso" }
        /**Prefijo que se agrega a los atricutos de sesion en el storage. **/
        private static get PREFIJO_ATRIBUTOS_STORAGE(): string { return "ATTR_SESSION_"; }
        /**
        * Ruta para cerrar la sesión de usuario.
        **/
        private static get CIERRA_SESSION_PATH(): string { return "Login/logout"; }
        /**
        * Ruta para cerrar la sesión de usuario.
        **/
        private static get CIERRA_SESSION_SSO_PATH(): string { return "logout.html"; }
        /**Diccionario con atructos globales de la sesion. **/
        private static ATRIBUTOS_SESSION: { [id: string]: any } = {};
        /**
        * Bandera que indica que se debe de mostrar el mensaje de inicio de sesión aun cuando no exista ya la sesión.
        **/
        private static MOSTRAR_MENSAJE_SIN_SESSION:boolean = false;


        /**
        * Retorna una copia de la sesion.
        **/
        public static getSesionInmediate(): shared.modelos.ISession {
            return angular.copy(AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE);
        }
        /**
        * Cierra la sesión si existe, por problemas en la autorización del token.
        * @return Promesa con el resultado del error.
        **/
        public static cerrarSesionTokenInvalido(rejection: any): ng.IPromise<any> {
            var $self = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            if (AbaxXBRLSessionService && AbaxXBRLSessionService.MOSTRAR_MENSAJE_SIN_SESSION != true) {
                if (!$self || !AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE || AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE == null) {
                    return $self.qService.reject(rejection);
                }
            }
            var defered = $self.qService.defer();
            var $util = shared.service.AbaxXBRLUtilsService;
            var titulo = $util.getValorEtiqueta("TITULO_SESION_INVALIDA");
            var mensaje = $util.getValorEtiqueta("MENSAJE_WARNING_SESION_INVALIDA");
            var editandoDocumento = $util.getEstadoVista() == "inicio.editorXBRL.editorXbrl" || $util.getEstadoVista() == "inicio.editorXBRL.editorXbrlIdDocumentoInstancia";
            
            if (editandoDocumento) {
                mensaje += "\n" +$util.getValorEtiqueta("MENSAJE_WARNING_SESION_INVALIDA_RESPALDAR_EXCEL");
            }
            $.isLoading("hide");
            shared.service.AbaxXBRLUtilsService.advertencia({
                textoTititulo: titulo,
                texto: mensaje
            }).finally(function () {
                $self.cerrarSesion();
                defered.reject(rejection);
                AbaxXBRLSessionService.MOSTRAR_MENSAJE_SIN_SESSION = editandoDocumento;
            });
            //Nos aseguramos de que se cirren todos los loading que surgan despues.
            $util.setTimeout(function () { $.isLoading("hide"); }, 500);
            return defered.promise;
        }

        /**
        * Obtiene la sesión actual.
        * @Return Una promesa que asigna al listener de su resolven una copia de la sesión actual o null si no existe.
        **/
        public getSesion(): ng.IPromise<modelos.ISession> {

            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            var deferred: ng.IDeferred<modelos.ISession> = self.qService.defer<modelos.ISession>();
            //Método invocado si la promesa se cumple.
            var onSucess = function (activa: boolean) {
                var sesion: modelos.ISession = null;
                if (activa) {
                    sesion = angular.copy(AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE);
                }
                deferred.resolve(sesion);
            };
            //Método invocado en caso de excepsion.
            var onError = function (error: any) {
                deferred.reject(error);
            }

            self.esSesionActiva().then(onSucess,onError);


            return deferred.promise;
        }
        /**
        * Evalua las facultades asignadas actualmente al usuario y genera un diccionario de booleanos indicando si tiene o no la facultad.
        * @return Diccionario de facultades.
        **/
        public static getDiccionarioFacultades(): { [nombreFacultad: string]: boolean } {
            var diccionario: { [nombreFacultad: string]: boolean } = {};
            var listaFacultades: Array<number> = AbaxXBRLSessionService.SINGELGTON_IDS_FACULTADES;
            for (var elemento in AbaxXBRLFacultadesEnum) {
                if (!isNaN(Number(elemento))) {
                    var idFacultad = parseInt(elemento);
                    var nombreFacultad:string = AbaxXBRLFacultadesEnum[idFacultad];
                    diccionario[nombreFacultad] = listaFacultades.indexOf(idFacultad) != -1;
                }
            }
            //Evaluamos los elementos de fideicomisos.
            if (root.AbaxXBRLConstantesRoot.VERSION_APP.fideicomisos) {
                diccionario["Inicio_Fideicomisos"] = diccionario["ExportarFideicomisos"] || diccionario["CrearFideicomiso"] || diccionario["EditarFideicomiso"] || diccionario["EliminarFideicomiso"];
            } else {
                diccionario["Inicio_Fideicomisos"] = false;
                diccionario["ExportarFideicomisos"] = false;
                diccionario["CrearFideicomiso"] = false;
                diccionario["EditarFideicomiso"] = false;
                diccionario["EliminarFideicomiso"] = false;
            }


            return diccionario;
        }

        /**
        * Método que determina si el usuario tiene activa la sesión o no.
        * Se valida determinando si existe el objeto sesión o si fue posible obtenerlo por el token del local storage.
        * @Return Una promesa que inyecta un valor booleano a sus listeners indicando si esta o no activa la asesión.
        **/
        public esSesionActiva(): ng.IPromise<boolean> {
            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            var singeltonSession = AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE;
            var deferred = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE.qService.defer<boolean>();
            if (singeltonSession && singeltonSession != null) {
                
                deferred.resolve(true);
                return deferred.promise;
            }
            var token: string = self.localStorageService.get(AbaxXBRLSessionService.TOKEN_NAME);
            if (!token || token == null || token.length == 0) {
                //Cerramos la sesion garantizar que se limpie todo.
                self.limpiarSesion();
                deferred.resolve(false);
                return deferred.promise;
            }

            return self.iniciarSesionPorToken(token);
        }
        /** 
        * Obtiene el token de la sesion actual.
        * @Return una promesa que resuelve el token de la esión actual.
        **/
        public getToken(): ng.IPromise<string> {
            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            var deferred: ng.IDeferred<string> = self.qService.defer<string>();
            //Método invocado si la promesa se cumple.
            var onSucess = function (activa: boolean) {
                var token: string = null;
                if (activa) {
                    
                    if (!AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE.Token || AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE.Token == null) {
                        AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE.Token = self.localStorageService.get(AbaxXBRLSessionService.TOKEN_NAME);
                    }
                    token = angular.copy(AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE.Token);
                }
                deferred.resolve(token);
            };
            //Método invocado en caso de excepsion.
            var onError = function (error: any) {
                deferred.reject(error);
            }
            self.esSesionActiva().then(onSucess, onError);
            return deferred.promise;
        }
        /**
        * Utiliza el token ingresado para solicitar los datos de sesión al servidor.
        * Si el token es valido se inicia sesión con los datos del servicor.
        * Si el token no es valido se cierra la sesión actual (si existe).
        * @return Una promesa donde se indica si fue posible iniciar o no sesión con el token.
        **/
        public iniciarSesionPorToken(token: string): ng.IPromise<boolean> {
            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            var deferred: ng.IDeferred<boolean> = self.qService.defer<boolean>();
            //Creamos proxy para evitar conflicto de referencias en la invocación.
            var onHttpSucess = function (result: any) { deferred.resolve(self.onHttpSesionPorTokenSucess(result,token)); };
            var onHttpError = function (error: any) { console.log(error); deferred.reject(false); self.limpiarSesion(); };
            self.httpService.post(
                AbaxXBRLSessionService.OBTENER_SESION_POR_TOKEN_PATH,
                null,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token } }
            ).then(onHttpSucess, onHttpError);

            return deferred.promise;
        }

        /**Destruye la sesion actual. **/
        private limpiarSesion() {
            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE = null;
            self.localStorageService.remove(AbaxXBRLSessionService.TOKEN_NAME);
            self.limpiaAtributosSesion();
            self.$state.go("login.autenticar");
           
        }
        /**Limpia los datos en sesion y refresca la pantalla para limpiar el cache**/
        public cerrarSesion():void {
            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            
                self.cerrarSessionStandar();
            
        }
        /**
        * Cierra sesión de la forma normal.
        **/
        private cerrarSessionStandar(): void {
            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            self.$state.go("login.autenticar").then(function () {
                try {
                    var token: string = self.localStorageService.get(AbaxXBRLSessionService.TOKEN_NAME);
	                AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE = null;
	                self.localStorageService.remove(AbaxXBRLSessionService.TOKEN_NAME);
	                self.limpiaAtributosSesion();
	                self.sendLogoutServer(token).finally(function () {
		                self.$window.location.reload();
		            });
                } catch (error) {
                    root.AbaxXBRLRootUtilService.errorLog(error);
                }
            });

        }
        

        /**
        * Solicita el servicio de logout.
        **/
        private sendLogoutServer(token:string): ng.IPromise<void> {
            var $self = this;
            var $deferred = AbaxXBRLUtilsService.creatPromiseDeferred<void>();
            var onSucess = function () { $deferred.resolve(); };
            var onError = function (reason: any): void { $deferred.reject(reason); }


            $self.httpService.post(
                AbaxXBRLSessionService.CIERRA_SESSION_PATH,
                null,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token } }
            ).then(onSucess, onError);
            return $deferred.promise;
        }
        /**
        * Elimina todas las cookies del dominio.
        **/
        private deleteAllCookies() {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }
      
        /**
         * Procesa la solicitude de la petisión de iniciar la sesión por token
         * @param result Respuesta de la solicitud.
         * @param token Token con el que se logro iniciar sesión.
         * @result Retorna true si fue posible iniciar la sesión y false en cualquier otro caso.
         **/
        private onHttpSesionPorTokenSucess(result: any,token:string): boolean {

            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            var sesion: modelos.ISession = result.data;
            self.iniciarSesion(sesion,token);
            return true;
        }
        /**
        * Asigna el bojeto de sesion y guarda el token 
        * @param session Entidad de tipo ISession con los datos necearios para iniciar la sesión.
        **/
        public iniciarSesion(sesion: modelos.ISession, token?: string): void {

            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;

            if (token) {
                self.localStorageService.set(AbaxXBRLSessionService.TOKEN_NAME, token);
                
                sesion.Token = token;
                self.cargaAtributosSesion();
            }
            try {
                //if (Raven && Raven.setUserContext) {
                //    Raven.setUserContext({
                //        email: sesion.Usuario.CorreoElectronico
                //    });
                //}
            } catch (error) {
                root.AbaxXBRLRootUtilService.errorLog(error);
            }

            AbaxXBRLSessionService.SINGELTON_SESSSION_INSTANCE = sesion;
            self.llenaIndiceFacultades(sesion.Facultades);
            AbaxXBRLSessionService.MOSTRAR_MENSAJE_SIN_SESSION = false;
        }
        /** 
        * Llena el indice de facultades con los identificadores de las facultades asingadas al usuaro actual.
        * @param facultades Lista de entidades de tipo facultad de las cuales se obtendrán los ids.
        **/
        private llenaIndiceFacultades(facultades: Array<shared.modelos.IFacultad>): void {

            AbaxXBRLSessionService.SINGELGTON_IDS_FACULTADES = new Array<number>();

            if (!facultades || facultades == null || facultades.length == 0) {
                return;
            }

            var indice = new Array<number>();
            var facultad: shared.modelos.IFacultad;
            
            for (var index: number = 0; index < facultades.length; index++) {
                facultad = facultades[index];
                indice.push(facultad.IdFacultad);
            }
            AbaxXBRLSessionService.SINGELGTON_IDS_FACULTADES = indice;
        }

        /**Cambia el idioma en la apliación.
         * @param idioma Idioma al que se cambiara la aplicación.
         **/
        public cambiarIdioma(idioma: string): void {
            var self: AbaxXBRLSessionService = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            if (idioma == 'en') {
                self.tmhDynamicLocale.set('en-us');
            } else {
                self.tmhDynamicLocale.set('es-mx');
            }
            self.$translate.use(idioma).then(function () {
                //Repintamos los chosen para que tomen el cambio en el placeholder
                var onTimeOut = function () { $('[chosen]').trigger('chosen:updated'); }; 
                //tenemo que esperar a que se ejecute el cambio en la expresion regular de sus place holders (una centesima de segundo).
                shared.service.AbaxXBRLUtilsService.setTimeout(onTimeOut, 100);
            });
        }
       

        /**
        * Método de acceso a la instancia del servicio si la instancia ya existe se retorna y si no existe se crea.
        * @param httpService Servicio para el envio de solicitudes al servidor.
        * @param qService Servicio que encola las solcitudes al sevidor.
        * @param $translate Servicio para el manejo de multi idioma.
        * @param $state Servicio para el cambio de estado de las vistas del sitio.
        * @param localStorageService Servicio para el manejo del almacenamiento local.
        * @param tmhDynamicLocale Servicio para el cambio dinamico del locale.
        * @param $window Servicio de acceso al objeto window del dom.
        * @return Retorna la instancia única del servicio. Si no existe aún la crea.
        **/
        public static factory(
                                    httpService?:         ng.IHttpService,
                                    qService?:            ng.IQService,
                                    $translate?:          ng.translate.ITranslateService,
                                    $state?:              ng.ui.IStateService,
                                    localStorageService?: ng.local.storage.ILocalStorageService<any>,
                                    tmhDynamicLocale?: any,
                                    $window?: ng.IWindowService): AbaxXBRLSessionService {

            if (!AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE || AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE == null) {
                AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE = new AbaxXBRLSessionService(httpService, qService, $translate, $state, localStorageService, tmhDynamicLocale, $window);
            }

            return AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
        }
        /**
        * Obtiene un atricuto de sesion por el nombre.
        * @param key Nombre del atricuto requerido.
        * @return Valor del atributo, puede ser undefined si no existe.
        **/
        public static getAtributoSesion(key: string):any {
            var value = AbaxXBRLSessionService.ATRIBUTOS_SESSION[key];
            var self = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            if (!value) {
                value = self.localStorageService.get(key);
                if (value && value != null) {
                    var keyStorage: string = AbaxXBRLSessionService.PREFIJO_ATRIBUTOS_STORAGE + key;
                    self.localStorageService.set(keyStorage, value);
                }
            }
            return value;
        }
        /**
        * Crea un atributo de sesión.
        **/
        public static setAtributoSesion(key: string, value: any):void {

            var self = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            AbaxXBRLSessionService.ATRIBUTOS_SESSION[key] = value;
            var keyStorage: string = AbaxXBRLSessionService.PREFIJO_ATRIBUTOS_STORAGE + key;
            self.localStorageService.set(keyStorage, value);
        }
        /**
        * Elimina el atributo de sesión de la sesión actual.
        **/
        public static remueveAtributoSesion(key: string):any {
            var self = AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE;
            var value = AbaxXBRLSessionService.getAtributoSesion(key);
            if (value && value != null) {
                var keyStorage: string = AbaxXBRLSessionService.PREFIJO_ATRIBUTOS_STORAGE + key;
                self.localStorageService.remove(key);
                AbaxXBRLSessionService.ATRIBUTOS_SESSION[keyStorage] = undefined;
                delete AbaxXBRLSessionService.ATRIBUTOS_SESSION[key];
            }
            return value;
        }
        /**
        * Limpiamos los atricutos de sesión, del arreglo y del local storage.
        **/
        private limpiaAtributosSesion():void {
            var self = this;
            var keys = self.localStorageService.clearAll;
            AbaxXBRLSessionService.ATRIBUTOS_SESSION = {};
        }
        /**
        * Carga los atributos de sesion que existan en el local storage
        **/
        private cargaAtributosSesion(): void {
            var self = this;
            var keys = self.localStorageService.keys;
            for (var index = 0; index < keys.length; index++) {
                var key:string = keys[index];
                if (key.indexOf(AbaxXBRLSessionService.PREFIJO_ATRIBUTOS_STORAGE) != -1) {
                    AbaxXBRLSessionService.ATRIBUTOS_SESSION[key] = self.localStorageService.get(key);
                }
            }
        }
        /**
        * Determina si el usuario en sesión tiene la facultad indicada.
        * @param facultad Identificador de la facultad a evaluar.
        * @return Si el usuario en sesión tiene la facultad indicada.
        **/
        public static tieneFacultad(facultad: number): boolean {
            
            return AbaxXBRLSessionService.SINGELGTON_IDS_FACULTADES.indexOf(facultad) != -1;
        }


        /**
        * Constructor base del servicio.
        * @param httpService Servicio para el envio de solicitudes al servidor.
        * @param qService Servicio que encola las solcitudes al sevidor.
        * @param $translate Servicio para el manejo de multi idioma.
        * @param $state Servicio para el cambio de estado de las vistas del sitio.
        * @param localStorageService Servicio para el manejo del almacenamiento local.
        * @param tmhDynamicLocale Servicio para el cambio dinamico del locale.
        * @param $window Servicio de acceso al objeto window del dom.
        **/
        constructor(httpService:         ng.IHttpService,
                    qService:            ng.IQService,
                    $translate:          ng.translate.ITranslateService,
                    $state:              ng.ui.IStateService,
                    localStorageService: ng.local.storage.ILocalStorageService<any>,
                    tmhDynamicLocale: any,
                    $window: ng.IWindowService) {
            if (AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE && AbaxXBRLSessionService.SINGELTON_SERVICE_INSTANCE != null) {
                throw new Error("No se puede hacer referencia directa al constructor de este servicio, se debe de utilizar el método getInstence().");
            }
            if (!httpService || !qService || !$translate || !$state || !localStorageService || !tmhDynamicLocale || !$window) {
                throw new Error("No fue posible generar  una instancia del servicio puesto que faltan uno ó mas parametros del construcotr.");
            }
            this.httpService = httpService;
            this.qService = qService;
            this.$translate = $translate;
            this.$state = $state;
            this.localStorageService = localStorageService;
            this.tmhDynamicLocale = tmhDynamicLocale;
            this.$window = $window;
        }
    }
}