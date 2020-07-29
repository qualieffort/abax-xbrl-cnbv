module abaxXBRL.componentes.services {
    export class AbaxXBRLLoginService {
        /** El servicio para encolar solicitudes */
        private qService: ng.IQService;
        /** El servicio para comunicarse al servidor remoto */
        private httpService: ng.IHttpService;
        /**Servicio para el manejo de la sesion. **/
        private abaxXBRLSessionService: shared.service.AbaxXBRLSessionService;

        /**Path donde se invoca el servicio para autenticar. **/
        private autentificarPath: string;
        /**Path donde se invoca el servicio para seleccionar la emisora. **/
        private obtenEmisorasPath: string;
        /**Path donde se invoca el servicio para cambiar la contraseña actual. **/
        private cambiarPasswordPath: string;
        /**Path donde se invoca el servicio para enviar la contraseña por correo electronico. **/
        private enviarPasswordPath: string;
        /** 
       * Método que autentifica si el usuario es correcto e inicia la sessión.
       **/
        public autentificar(nombreUsuario:string,correo: string, password: string, idEmisora: number): ng.IPromise<any> {

            var self: AbaxXBRLLoginService = this;
            var deferred = self.qService.defer();
            var usuarioValidacion = "";
            if (correo != null && correo.length > 0) {
                usuarioValidacion = correo;
            } else {
                usuarioValidacion = nombreUsuario;
            }

            var params: { [id: string]: string } = { "userName": usuarioValidacion, "emisora": idEmisora.toString(), "password": password, "grant_type": "password" };
            //Creamos proxy para evitar conflicto de referencias en la invocación.
            var onHttpSucess = function (result: any) { deferred.resolve(self.onHttpAutentificarSucess(result)); };
            var onHttpError = function (error: any) { deferred.reject(self.onHttpAutentificarError(error)); };
            //Enviamos la solicitud
            //self.httpService.post(AbaxXBRLLoginController.AUTENTIFICAR_PATH,params).then(onHttpSucess, onHttpError);
            self.httpService({
                method: 'POST',
                url: self.autentificarPath,
                data: $.param(params),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(onHttpSucess, onHttpError);

            return deferred.promise;
        }
        /**
        * Listener de la promesa cuando fue cumplida. 
        * @param result Objeto con los datos de la respuesta.
        **/
        private onHttpAutentificarSucess(result: any): any {
            var self: AbaxXBRLLoginService = this;

            if (!result.data.error) {
                var sesion = angular.fromJson(result.data.Session);
                var token: string;

                if (sesion.IdEmpresa !== 0) {
                    token = result.data.access_token;
                } else {
                    token = null;
                }

                self.abaxXBRLSessionService.iniciarSesion(sesion, token);
            }
            return result.data;
            
        }

        /**
        * Listener de la promesa cuando no fue posible cumplirla 
        * @param error Objeto de error o texto con la causa del error.
        **/
        private onHttpAutentificarError(error: any): any {
            return error;
        }

        /** 
        * Obtiene las emisoras asignadas al usuario con el identificador dado.
        **/
        public obtenerEmisoras(): ng.IPromise<any> {
            var self: AbaxXBRLLoginService = this;
            var deferred: ng.IDeferred<any> = self.qService.defer<any>();

            var onHttpSucess = function (result: any) { deferred.resolve(self.onObtenEmisorasPorIdUsuarioSucess(result)); };
            var onHttpError = function (error: any) { deferred.reject(self.onObtenEmisorasPorIdUsuarioError(error)); };

            var idUsuario: number;

            self.abaxXBRLSessionService.getSesion().then(
                function (sesion) {
                    idUsuario = sesion.Usuario.IdUsuario;
                    self.httpService.post(self.obtenEmisorasPath + idUsuario, null).then(onHttpSucess, onHttpError);
                });

            return deferred.promise;
        }
        
        /**
        * Listener de la promesa cuando fue cumplida. 
        * @param result Objeto con los datos de la respuesta.
        **/
        private onObtenEmisorasPorIdUsuarioSucess(result: any): any {
            return result.data;
        }

        /**
        * Listener de la promesa cuando no fue posible cumplirla 
        * @param error Objeto de error o texto con la causa del error.
        **/
        private onObtenEmisorasPorIdUsuarioError(error: any): void {
            console.log(error);
            return;
        }

        /** 
        * Metodo para el cambio de contraseña.
        **/
        public cambiarPassword(passwordActual: string, passwordNuevo: string, passwordNuevoConfirmacion: string): ng.IPromise<abaxXBRL.shared.modelos.IResultadoOperacion> {
            var self: AbaxXBRLLoginService = this;
            var deferred: ng.IDeferred<abaxXBRL.shared.modelos.IResultadoOperacion> = self.qService.defer<abaxXBRL.shared.modelos.IResultadoOperacion>();

            var onHttpSucess = function (result: any) { deferred.resolve(self.onCambiarPasswordServiceSucess(result)); };
            var onHttpError = function (error: any) { deferred.reject(self.onCambiarPasswordServiceError(error)); };


            self.abaxXBRLSessionService.getSesion().then(function (data) {

                var params: { [id: string]: any } = {
                    'idUsuario': data.Usuario.IdUsuario,
                    'passwordAnterior': passwordActual,
                    'passwordNuevo': passwordNuevo,
                    'passwordConfirmar': passwordNuevoConfirmacion
                };

                self.httpService({
                    method: 'POST',
                    url: self.cambiarPasswordPath,
                    data: $.param(params),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(onHttpSucess, onHttpError);
            });

            return deferred.promise;
        }

        /**
        * Listener de la promesa cuando fue cumplida. 
        * @param result Objeto con los datos de la respuesta.
        **/
        private onCambiarPasswordServiceSucess(result: any): abaxXBRL.shared.modelos.IResultadoOperacion {
            var self: AbaxXBRLLoginService = this;
            var resultado: abaxXBRL.shared.modelos.IResultadoOperacion;

            resultado = result.data;

            return resultado;
        }

        /**
        * Listener de la promesa cuando no fue posible cumplirla 
        * @param error Objeto de error o texto con la causa del error.
        **/
        private onCambiarPasswordServiceError(error: any): void {
            console.log(error);
            return;
        }

        /** 
        * Metodo para el envio de contraseña por correo electronico.
        **/
        public enviarPassword(correo: string): ng.IPromise<abaxXBRL.shared.modelos.IResultadoOperacion> {
            var self: AbaxXBRLLoginService = this;
            var deferred: ng.IDeferred<abaxXBRL.shared.modelos.IResultadoOperacion> = self.qService.defer<abaxXBRL.shared.modelos.IResultadoOperacion>();

            var onHttpSucess = function (result: any) { deferred.resolve(self.onEnviarPasswordServiceSucess(result)); };
            var onHttpError = function (error: any) { deferred.reject(self.onEnviarPasswordServiceError(error)); };

            var url = window.location.href 
            var indexSharp = url.indexOf('#');
            url = url.substr(0, indexSharp);

            self.httpService.post(self.enviarPasswordPath + '?correo=' + correo + '&urlHref=' + url, null).then(onHttpSucess, onHttpError);

            return deferred.promise;
        }

        /**
        * Listener de la promesa cuando fue cumplida. 
        * @param result Objeto con los datos de la respuesta.
        **/
        private onEnviarPasswordServiceSucess(result: any): abaxXBRL.shared.modelos.IResultadoOperacion {
            var self: AbaxXBRLLoginService = this;
            var resultado: abaxXBRL.shared.modelos.IResultadoOperacion;

            resultado = result.data;

            return resultado;
        }

        /**
        * Listener de la promesa cuando no fue posible cumplirla 
        * @param error Objeto de error o texto con la causa del error.
        **/
        private onEnviarPasswordServiceError(error: any): void {
            console.log(error);
            return;
        }

        /**
         * Constructor de la clase
         * 
         * @param $http el servicio angular para invocaciones http
         * @param $q el servicio angular para operaciones en cola.
         */
        constructor($http: ng.IHttpService, $q: ng.IQService,
                    abaxXBRLSessionService: shared.service.AbaxXBRLSessionService) {
            var self: AbaxXBRLLoginService = this;

            self.httpService = $http;
            self.qService = $q;
            self.abaxXBRLSessionService = abaxXBRLSessionService;

            self.autentificarPath = "token";
            self.obtenEmisorasPath = "Login/EmisoraLogin/";
            self.cambiarPasswordPath = "Login/CambioPassword";
            self.enviarPasswordPath = "Login/EnvioPassword";
        }

        /**
         * Método estático de tipo fábrica para la creación de una instancia del servicio.
         *
         * @param $http el servicio angular para invocaciones http
         * @param $q el servicio angular para operaciones en cola.
         * @return una nueva instancia del servicio.
         */
        public static factory($http: ng.IHttpService, $q: ng.IQService,
            abaxXBRLSessionService: shared.service.AbaxXBRLSessionService): AbaxXBRLLoginService {
            return new AbaxXBRLLoginService($http, $q, abaxXBRLSessionService);
        }
    }
}