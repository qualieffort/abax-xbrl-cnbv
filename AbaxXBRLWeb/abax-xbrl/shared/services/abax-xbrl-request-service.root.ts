 ///<reference path="../../../scripts/typings/angularjs/angular.d.ts" /> 

module abaxXBRL.shared.service {

    /**
    * Servicio para el manejo de solicitudes al servidor. 
    **/
    export class AbaxXBRLRequestService {
        
        /** El servicio para encolar solicitudes */
        private qService: ng.IQService;

        /** El servicio para comunicarse al servidor remoto */
        private httpService: ng.IHttpService;
        /**Servicio para el manejo de la sesion. **/
        private abaxXBRLSessionService: shared.service.AbaxXBRLSessionService;

        /** 
        * Obtiene un objeto IDeferred para el manejo de promesas diferidas.
        * @param <T> Tipo de respuesta que retorna la promesa.
        **/
        public getPromiseDefer<T>(): ng.IDeferred<T> {
            var defer = this.qService.defer<T>();
            return defer;
        }
        /**
        * Enviar una solicitud Get a la url indicada con los parametros asignados.
        * @param url Ruta donde se va realizar la solicitud.
        * @param params Diccionario con los parametros a enviar.
        * @return Promesa con el resultado de la solicitud.
        **/
        public _Get(url: string, params: { [key: string]: string }): ng.IPromise<any> {
            var self = this;
            var defered = this.getPromiseDefer();
            var onError = function (error: any) {
                console.log(error);
                defered.reject(error);
            };
            var onHttpSucess = function (result: any) {
                defered.resolve(result);
            };
            var onTokenSucess = function (token: string) {
                self.httpService({
                    method: 'GET',
                    url: url,
                    params: params,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token }
                }).then(onHttpSucess, onError);
            };
            self.abaxXBRLSessionService.getToken().then(onTokenSucess, onError);

            return defered.promise;
        }
        /**
        * Enviar una solicitud Post a la url indicada con los parametros asignados.
        * @param url Ruta donde se va realizar la solicitud.
        * @param params Diccionario con los parametros a enviar.
        * @return Promesa con el resultado de la solicitud.
        **/
        public postUtf8(url: string, params: { [key: string]: string }): ng.IPromise<any> {
            var self = this;
            var defered = this.getPromiseDefer();
            var onError = function (error: any) { defered.reject(error); };
            var onHttpSucess = function (result: any) { defered.resolve(result); };
            var onTokenSucess = function (token: string) {
                var config = { headers: { 'Authorization': 'Bearer ' + token } };
                self.httpService.post(url, params, config).then(onHttpSucess, onError);
            };
            self.abaxXBRLSessionService.getToken().then(onTokenSucess, onError);
            return defered.promise;

            ;
        }

        /**
        * Enviar una solicitud Post a la url indicada con los parametros asignados codificada a tipo "application/x-www-form-urlencoded".
        * @param url Ruta donde se va realizar la solicitud.
        * @param params Diccionario con los parametros a enviar.
        * @param evaluarResultadoNoExitoso Si se deben de manejar resultados de operacion no exitosos como error.
        * @return Promesa con el resultado de la solicitud.
        **/
        public post(url: string, params: {[nombre:string]:any}, descargaArchivo = false, evaluarResultadoNoExitoso?:boolean): ng.IPromise<any> {
            var self = this;
            var defered = this.getPromiseDefer();
            var onError = function (error: any) {
                console.log(error);
                defered.reject(error);
            };
            var onHttpSucess = function (result: any) {

                if (evaluarResultadoNoExitoso == true && !self.evaluaResultadoOperacion(result)) {
                    defered.reject(result);
                }

                defered.resolve(result);
            };

            
            var onTokenSucess = function (token: string) {
                var parametros: ng.IRequestConfig;

                params['noCacheParam'] = new Date().getTime();

                if (descargaArchivo) {
                    parametros = {
                        method: 'POST',
                        url: url,
                        data: $.param(params),
                        responseType: 'arraybuffer',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token }
                    };
                } else {
                    parametros = {
                        method: 'POST',
                        url: url,
                        data: $.param(params),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token }
                    };
                }

                self.httpService(parametros).then(onHttpSucess, onError);
            };
            self.abaxXBRLSessionService.getToken().then(onTokenSucess,onError);

            return defered.promise;
        }
        /**
        * Crea una configuración de opciones Ajax para ser utilizada por otra herramienta.
        **/
        public generarOpcionesAjax(): ng.IPromise<any> {
            var self = this;
            var defered = this.getPromiseDefer();
            var onError = function (error: any) { console.log(error); defered.reject(error); };

            var onBeforeSend = function (xhr: any, settings:any) {
                settings.data = $.param(settings.data);
            };

            var onTokenSucess = function (token: string) {
                var opciones = {
                        method: 'POST',
                        url: null,
                        //beforeSend: onBeforeSend,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token }
                };
                defered.resolve(opciones);
            };
            self.abaxXBRLSessionService.getToken().then(onTokenSucess, onError);

            return defered.promise;
        }

        /**
        * Enviar una solicitud Post a la url indicada con los parametros asignados codificada a tipo "application/x-www-form-urlencoded".
        * @param url Ruta donde se va realizar la solicitud.
        * @param params Diccionario con los parametros a enviar.
        * @return Promesa con el resultado de la solicitud.
        **/
        public Put(url: string, params: any): ng.IPromise<any> {
            var self = this;
            var defered = this.getPromiseDefer();
            var onError = function (error: any) {
                console.log(error);
                defered.reject(error);
            };
            var onHttpSucess = function (result: any) {
                defered.resolve(result);
            };
            var onTokenSucess = function (token: string) {
                self.httpService({
                    method: 'PUT',
                    url: url,
                    data: $.param(params),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token }
                }).then(onHttpSucess, onError);
            };
            self.abaxXBRLSessionService.getToken().then(onTokenSucess, onError);

            return defered.promise;
        }

        /**
        * Enviar una solicitud Post a la url indicada con los parametros asignados codificada a tipo "application/x-www-form-urlencoded".
        * @param url Ruta donde se va realizar la solicitud.
        * @param params Diccionario con los parametros a enviar.
        * @return Promesa con el resultado de la solicitud.
        **/
        public Delete(url: string, params: { [key: string]: string }): ng.IPromise<any> {
            var self = this;
            var defered = this.getPromiseDefer();
            var onError = function (error: any) {
                console.log(error);
                defered.reject(error);
            };
            var onHttpSucess = function (result: any) {
                defered.resolve(result);
            };
            var onTokenSucess = function (token: string) {
                self.httpService({
                    method: 'DELETE',
                    url: url,
                    params: params,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + token }
                }).then(onHttpSucess, onError);
            };
            self.abaxXBRLSessionService.getToken().then(onTokenSucess, onError);

            return defered.promise;
        }

        /**
         * Retorna la funcion a ejecutar por defecto cuando ocurre un error.
         * @return Función que recibe el detalle del error.
         **/
        public getOnErrorDefault(): any {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;
            return function (error: any) {
                console.log(error);
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_SERVIDOR");
                shared.service.AbaxXBRLUtilsService.ErrorBootstrap(mensaje);
            }
        }

        /**
        * Evalua la respuesta de una solicitud de persistencis y en caso de error muestra el mensaje correspondiente.
        * @param result Resultado de la solicitd.
        * @result Si es valida o no la petición.
        **/
        public evaluaResultadoOperacion(response: any): boolean {
            var util = shared.service.AbaxXBRLUtilsService;
            var resultado = response.data;
            if (!resultado || !resultado.InformacionExtra) {
                return true;
            }
            return resultado.Resultado;
        }

        /**
        * Ejecuta una solicitud post al servidor y asigna el resultado de la misma a una propieadad de un objeto.
        * @param url Ruta donde se va realizar la solicitud.
        * @param params Diccionario con los parametros a enviar.
        * @param receiver Objeto al que se le asignan los resultados de la petición.
        * @param toSetName Nombre de la propiedad en el objeto a la que se le pretende asignar el resultado.
        * @param flagActiveName Nombre de la propiedad donde se indica si la petición esta activa o ha concluido.
        * @param fagHasValuesName Nombre de la propiedad a la que se le indica si la respuesta tiene o no datos.
        * @return Promesa que retorna el resultado de la consulta una vez concluidas las asignaciones.
        **/
        public asignaResultadoPost(url: string, params: { [name: string]: string }, receiver: any, toSetName: string, flagActiveName?: string, flagHasValuesName?: string): ng.IPromise<any> {

            var defered = this.getPromiseDefer();
            var self = this;            
            var onErrorDefault = this.getOnErrorDefault();
            var onError = function (error: any) {
                defered.reject(error);
                onErrorDefault(error);
                if (flagActiveName) { receiver[flagActiveName] = false; }
                if (flagHasValuesName) { receiver[flagHasValuesName] = false; }
            }
            var onSucess = function (result: any) {
                var data = result.data;
                var tieneInformacionExtra = data.InformacionExtra != null && data.InformacionExtra != undefined;
                if (tieneInformacionExtra && data.Resultado == false) {
                    onError(data.InformacionExtra);
                    return;
                }
                var value = tieneInformacionExtra ? data.InformacionExtra : data;
                var hasValue = value && value != null;
                if (hasValue && value.length && value.length == 0) {
                    hasValue = false;
                }
                receiver[toSetName] = value;
                if (flagHasValuesName) { receiver[flagHasValuesName] = hasValue;}
                if (flagActiveName) { receiver[flagActiveName] = false; }
                defered.resolve(result);
            }
            if (flagActiveName) { receiver[flagActiveName] = true;}
            this.post(url,params).then(onSucess, onError);

            return defered.promise;
        }

        /**
         * Método estático de tipo fábrica para la creación de una instancia del servicio.
         *
         * @param $http el servicio angular para invocaciones http
         * @param $q el servicio angular para operaciones en cola.
         * @param abaxXBRLSessionService Servicio para el manejo de la sesión.
         * @return una nueva instancia del servicio.
         */
        public static factory($http: ng.IHttpService, $q: ng.IQService, abaxXBRLSessionService: shared.service.AbaxXBRLSessionService): AbaxXBRLRequestService {
            return new AbaxXBRLRequestService($http, $q, abaxXBRLSessionService);
        }

        /**
        * Constructor de la clase
        * 
        * @param $http el servicio angular para invocaciones http
        * @param $q el servicio angular para operaciones en cola.
        * @param abaxXBRLSessionService Servicio para el manejo de la sesión.
        */
        constructor($http: ng.IHttpService, $q: ng.IQService, abaxXBRLSessionService: shared.service.AbaxXBRLSessionService) {

            this.httpService = $http;
            this.qService = $q;
            this.abaxXBRLSessionService = abaxXBRLSessionService;
        }
    }
}