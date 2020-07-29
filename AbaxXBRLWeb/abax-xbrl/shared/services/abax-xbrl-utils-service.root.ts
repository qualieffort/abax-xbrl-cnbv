///<reference path="../../../scripts/typings/angularjs/angular.d.ts" /> 

module abaxXBRL.shared.service {

    /**
    * Servicio para con utilerias genericas para los controladores. 
    **/
    export class AbaxXBRLUtilsService {
        /** El servicio para encolar solicitudes */
        private qService: ng.IQService;
        /**Servicio para el manejo de etiquetas en multilenguaje **/
        private $translate: ng.translate.ITranslateService;
        /**Servicio para el cambio de estado de las vistas del sitio.**/
        private $state: ng.ui.IStateService;
        /**Servicio para la generación de opciones de un datatable. **/
        private DTOptionsBuilder: any;
        /**Servicio para la obtención de instancias de un data table. **/
        private DTInstances: any;
        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;
        /** Servicio para la inyeción asincrona de modulos angular**/
        private $ocLazyLoad: oc.ILazyLoad;
        /**Scope raíz de la aplicación.**/
        private $rootScope: ng.IScope;
        /**Servicio singelton. **/
        private static SINGELTON_SERVICE_INSTANCE: AbaxXBRLUtilsService;
        /**
        * Propiedad con las propiedades por defecto para reinicializar los elementos de una tabla de excel.
        **/
        private static TABLA_EXCEL_DEFAULT_SETTINGS: plugins.XbrlTablaExcelSettings;
        /**
        * Arreglo con los parametros de petición.
        **/
        private static REQUEST_PARAMS: { [nombre: string]: any } = {};
        /**Selector de un campo autonumeric **/
        private static SELECTOR_AUTONUMERIC = '[xbrl\\:auto-numeric]:not(.autonumeric)';
        /**
        * Arreglo con el listado de manejadores de eventos asignados en el scope raíz de la aplicación.
        **/
        private rootScopeEventsListeners: Array<string> = [];

        /**
        * Diccionario con el listado de watches apuntando a sus funciondes de desregistro.
        **/
        private rootScopeWatchLiistener: { [nombre: string]: Function } = {}; 
        /**
        * Listado con las alertas bootsrap.
        **/
        private alertasBootstrap: Array<shared.modelos.IAlertaBootsrap>;
        /*
        * Servicio que encapsula los timeout de javascript.
        **/
        private $timeout: ng.ITimeoutService;
        /**
        * Diccionario para administrar los manejadores de eventos.
        **/
        private static diccionarioManejadoresEventos: { [selector: string]: { [idEvento: string]: { [idManejador: string]: (eventObject: JQueryEventObject, ...args: any[]) => any }}} = {};

        /**
        * Bandera que indica si se esta utilizando internet explorer.
        **/
        private static USANDO_IE: boolean;
        /**
        * Ejecuta un timeout a la manera angular.
        * @param onTimeOut Funcio a ejecutar cuando se cumpla el tiempo.
        * @param miliseconsDelay Milisegundos antes de ejecutar la función.
        * @param invokeApply Si se debe de invocar Apply una vez que se complete el tiempo.
        * @return La promesa que se resuelve al cumplirse el tiempo.
        **/
        public static setTimeout(onTimeOut: Function, miliseconsDelay?: number, invokeApply?: boolean): ng.IPromise<any> {
            return AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.$timeout(onTimeOut, miliseconsDelay, invokeApply);
        }

        public static usandoInternetExplorer(): boolean {

            if (AbaxXBRLUtilsService.USANDO_IE == undefined || AbaxXBRLUtilsService.USANDO_IE == null) {
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");

                AbaxXBRLUtilsService.USANDO_IE = msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
            }

            return AbaxXBRLUtilsService.USANDO_IE;
        }

        /**
        * Crea las opciones para un datatable.
        **/
        public static creaOpcionesDataTable(): any {

            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            var DTOptionsBuilder = self.DTOptionsBuilder;
            var translate = self.$translate;
            var dtOptions = DTOptionsBuilder.newOptions();
            dtOptions.withOption("order", [[1, "desc"]]);
            dtOptions.withLanguage({
                "processing": (translate.instant("ETIQUETA_PROCESANDO") + "..."),
                "lengthMenu": translate.instant("ETIQUETA_MOSTRAR__MENU__REGISTROS"),
                "zeroRecords": translate.instant("MENSAJE_INFO_SIN_RESULTADOS"),
                "emptyTable": translate.instant("MENSAJE_INFO_NINGUN_DATO_DISPONIBLE_TABLA"),
                "info": translate.instant("ETIQUETA_MOSTRANDO_RANGO_REGISTROS"),
                "infoEmpty": translate.instant("ETIQUETA_MOSTRANDO_RANGO_VACIO"),
                "infoFiltered": translate.instant("ETIQUETA_FILTRADO_DE_UN_TOTAL_DE_REGISTROS"),
                "infoPostFix": "",
                "records": translate.instant("ETIQUETA_ENCONTRADOS_DOCUMENTO"),
                "search": (translate.instant("ETIQUETA_BOTON_BUSCAR") + ":"),
                "show": translate.instant("ETIQUETA_MOSTRAR"),
                "url": "",
                "infoThousands": ",",
                "loadingRecords": (translate.instant("ETIQUETA_CARGANDO") + "..."),
                "paginate": {
                    "first": "««",
                    "last": "»»",
                    "next": "»",
                    "previous": "«"
                },
                "aria": {
                    "sortAscending": ": " + translate.instant("ETIQUETA_ACTIVAR_PARA_ORDENAR_COLUMNAS_ACENDENTE"),
                    "sortDescending": ": " + translate.instant("ETIQUETA_ACTIVAR_PARA_ORDENAR_COLUMNAS_DECENDENTE")
                }
            });
            dtOptions.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
            return dtOptions;
        }
        /**
        * Obtiene la instancia de la última datatable registrada.
        * @return Promesa donde asigna la instancia una vez creada.
        **/
        public static getLasDataTableInstance(): ng.IPromise<any> {
            return AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.DTInstances.getLast();

        }

        /**
        * Muestra un prompt de alerta con el mensaje botenido del translate para el id ingresado.
        * @param mensajeId Identificador del texto del mensaje a mostrar.
        **/
        public static muestraMensajeError(mensajeId: string, tituloId?: string) {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;

            var mensaje: string = self.$translate.instant(mensajeId);
            var titulo: string;
            if (tituloId) {
                titulo = self.$translate.instant(tituloId);
            } else {
                titulo = self.$translate.instant("TITULO_PROMPT_ERRROR");
            }
            var aceptar: string = self.$translate.instant("ETIQUETA_BOTON_ACEPTAR");
            $.prompt(mensaje, { title: titulo, buttons: { aceptar: true } });
        }
        /**
        * Crea una promesa diferida para cualquier uso.
        **/
        public static creatPromiseDeferred<T>(): ng.IDeferred<T> {
            var $self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            return $self.qService.defer<T>();
        }
        /**
        * Retorna el servicio Q para manejo de procesos diferidos.
        * @return Servicio Q de angular.
        **/
        public static getQService(): ng.IQService {

            var $self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            return $self.qService;
        }
        /**
        * Solicita una confirmación.
        * @param mensajeId Nombre de la propiedad con el mensaje amostrar.
        * @param tituloId Nombre de la propiedad con el titulo de la ventana.
        * @param parametros Diccionario con los parametros que se asignarán al mensaje.
        * @return Promesa con la respuesta.
        **/
        public static muestraMensajeConfirmacion(mensajeId: string, tituloId?: string, parametros?: { [nombre: string]: string }): ng.IPromise<boolean> {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            var deferred = self.qService.defer<boolean>();
            var mensaje: string = AbaxXBRLUtilsService.getValorEtiqueta(mensajeId, parametros);
            var titulo: string;

            if (tituloId) {
                titulo = tituloId;
                titulo = AbaxXBRLUtilsService.getValorEtiqueta(titulo, parametros);
            } else {
                titulo = self.$translate.instant("TITULO_PROMPT_CONFIRMAR");
            }
            var si: string = self.$translate.instant("ETIQUETA_BOTON_SI");
            var no: string = self.$translate.instant("ETIQUETA_BOTON_NO");
            var botones: { [label: string]: boolean } = {};
            botones[si] = true;
            botones[no] = false;
            $.prompt(mensaje, {
                title: titulo,
                buttons: botones,
                submit: function (e, v, m, f) {
                    deferred.resolve(v);
                }
            });
            return deferred.promise;
        }
        
        /**
        * Agrega un listener al rootscope, esto es por que existen eventos que solo se ejecutan al nivel de socope raíz y no a nivel de componente
        * como los de cambio de estado de vista y es preferible que no se dupliquen los mismos listeners.
        * @param idEventListener Identificador único del listener, si ya fue agregado no se vuelve a generar.
        * @param name Nombre del evento a escuchar.
        * @param listener Manejador del evento a invocar.
        **/
        public static addEventListenerToRootScope(idEventListener: string, name: string, listener: (event: ng.IAngularEvent, ...args: any[]) => any): void {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            if (self.rootScopeEventsListeners.indexOf(idEventListener) == -1) {
                self.$rootScope.$on(name, listener);
                self.rootScopeEventsListeners.push(idEventListener);
            }
        }
        /**
        * Agrega un watch al scope raíz con la finalidad de que se observe siempre.
        * @param idWatch Identificador del watch que se esta agregando para no agregarlo más de una vez.
        * @param watcher Elemento a observar, puede ser una cadena que represente un elemento del scope o puede ser una función.
        * @param listener Listener que manejra los cambios en el elemento observado.
        **/
        public static addWatchToRootScope(idWatch: string, watcher: any, listener: (newValue: any, oldValue: any, scope: ng.IScope) => any): void {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            if (!self.rootScopeWatchLiistener[idWatch]) {
                self.rootScopeWatchLiistener[idWatch] = self.$rootScope.$watch(watcher, listener);
            }
        }
        /**
        * Retira un watch previamente agregado al rootscope.
        * @para idWatch Identificador del watch que se pretende retirar.
        **/
        public static removeWatchToRootScope(idWatch: string): void {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            if (self.rootScopeWatchLiistener[idWatch]) {
                self.rootScopeWatchLiistener[idWatch]();
                delete self.rootScopeWatchLiistener[idWatch];
                self.rootScopeWatchLiistener[idWatch] = undefined;
            }
        }

        /**
       * Método de acceso a la instancia del servicio si la instancia ya existe se retorna y si no existe se crea.
       * @param qService Servicio que encola las solcitudes al sevidor.
       * @param $translate Servicio para el manejo de multi idioma.
       * @param DTOptionsBuilder Servicio para la generación de opciones de un datatable.
       * @param DTInstances Servicio para la obtención de instnacias del datatable.
       * @param $modal Servicio para el manejo de los diálogos modales.
       * @return Retorna la instancia única del servicio. Si no existe aún la crea.
       * @param $timeout Servicio para el manejo de timeot de javascript.
       * @param $rootScope Scope raíz de la aplicación.
       **/
        public static factory(
            qService: ng.IQService,
            $translate: ng.translate.ITranslateService,
            $state: ng.ui.IStateService,
            DTOptionsBuilder: any,
            DTInstances: any,
            $modal: ng.ui.bootstrap.IModalService,
            $timeout: ng.ITimeoutService,
            $ocLazyLoad: oc.ILazyLoad,
            $rootScope: any): AbaxXBRLUtilsService {

            if (!AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE || AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE == null) {
                AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE = new AbaxXBRLUtilsService(qService, $translate, $state, DTOptionsBuilder, DTInstances, $modal, $timeout, $ocLazyLoad, $rootScope);
            }

            return AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
        }

        /**
        * Cierra la alerta bootsrap en el indice indicado.
        * @param indice Indice de la alerta que se pretende cerrar.
        **/
        public static cerrarAlertaBootsrap(index: number) {

            AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.alertasBootstrap.splice(index, 1);
        }
        /**
        * Mustra una alerta Bootsrap.
        **/
        public static mostrarAlertaBootsrap(alerta: shared.modelos.IAlertaBootsrap) {

            var $timeout = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.$timeout;
            var close = function () {
                var index = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.alertasBootstrap.indexOf(alerta);
                AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.alertasBootstrap.splice(index, 1);
            }
            var hide = function () {
                alerta.Hide = true;
            }

            alerta.Hide = false;
            AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.alertasBootstrap.push(alerta);

            $timeout(hide, 3000);
            $timeout(close, 3990);


        }
        /**
        * Retorna la referencia a la lsta de alertas bootsrap.
        **/
        public static getListaAlertasBootsrap(): Array<shared.modelos.IAlertaBootsrap> {
            return AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.alertasBootstrap;
        }
        /**
        * Mustra un mensaje de error tipo bootsrap.
        **/
        public static ErrorBootstrap(mensaje: string) {
            AbaxXBRLUtilsService.mostrarAlertaBootsrap({ Tipo: "danger", Mensaje: mensaje });
        }
        /**
        * Mustra un mensaje de exito tipo bootsrap.
        **/
        public static ExitoBootstrap(mensaje: string) {
            AbaxXBRLUtilsService.mostrarAlertaBootsrap({ Tipo: "success", Mensaje: mensaje });
        }
        /**
        * Mustra un mensaje de alerta tipo bootsrap.
        **/
        public static AlertaBootstrap(mensaje: string) {
            AbaxXBRLUtilsService.mostrarAlertaBootsrap({ Tipo: "warning", Mensaje: mensaje });
        }
        /**
        * Mustra un mensaje de alerta tipo bootsrap.
        **/
        public static InfoBootstrap(mensaje: string) {
            AbaxXBRLUtilsService.mostrarAlertaBootsrap({ Tipo: "info", Mensaje: mensaje });
        }

        /**
        * Evalua el contenido de un texto con multiples etiquetas y remplaza las estiquetas por su valor correspondiente.
        * @param texto Texto con multiples etiquetas a evaluar.
        * @param parametros Parametros que se asignan a los resulados de cada etiqueta.
        * @return Retorna el texto ya con las etiquetas procesadas.
        **/
        public static evaluaTextoMultiplesEtiquetas(texto: string, parametros?: { [nombre: string]: string }): string {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            var regExp = new RegExp('[A-Z_]*', 'g');
            var tokens: Array<string> = texto.match(regExp);
            var textoEvaluado = texto;
            for (var tokenIndex: number = 0; tokenIndex < tokens.length; tokenIndex++) {
                var token: string = tokens[tokenIndex];
                if (regExp.test(token)) {
                    var valorToken = self.$translate.instant(token, parametros);
                    textoEvaluado = textoEvaluado.replace(token, valorToken);
                }
            }
            return textoEvaluado;
        }

        /**
         * Obtiene el idioma actualmente utilizado.
         */
        public static getIdiomaActual(): string {
            return AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.$translate.use();
        }

        /**
        * Obtiene el valor textual para una etiqueta dada.
        * @param nombreEtiqueta Nombre de la propiedad con el mensje a mostrar.
        * @param parametros Diccionario con los parametros a remplazar del mensaje.
        **/
        public static getValorEtiqueta(nombreEtiqueta: string, parametros?: { [nombre: string]: string }): string {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            var mensaje: string;
            nombreEtiqueta = nombreEtiqueta.trim();
            if (nombreEtiqueta.indexOf(' ') != -1) {
                mensaje = AbaxXBRLUtilsService.evaluaTextoMultiplesEtiquetas(nombreEtiqueta, parametros);
            } else {
                mensaje = self.$translate.instant(nombreEtiqueta, parametros);
            }

            return mensaje;
        }
        /**
        * Obtiene el indice de un elmento comparando por un atricuto en particular.
        * @param arreglo Arreglo a evaluar.
        * @param elemento Elmento buscado.
        * @param nombreAtributo Nombre del atributo a comparar.
        * @return Indice del elemento en el arreglo o -1 si no existe.
        **/
        public static obtenIndicePorAtributo(arreglo: Array<Object>, elemento: Object, nombreAtributo: string) {
            var index = -1;
            for (var indexArreglo = 0; indexArreglo < arreglo.length; indexArreglo++) {
                var elementoArreglo = arreglo[indexArreglo];
                if (elementoArreglo[nombreAtributo] == elemento[nombreAtributo]) {
                    index = indexArreglo;
                    break;
                }
            }
            return index;
        }

        /**
        * Mueve los elementos de un arreglo a otro.
        **/
        public static mueveElementosDeArreglo(origen: Array<any>, destino: Array<any>, elementos: Array<any>, atrubutoComparar?: string): void {

            var tieneComarador = atrubutoComparar && atrubutoComparar.length > 0;
            //Primero insertamos en el destino
            for (var indexElemento = 0; indexElemento < elementos.length; indexElemento++) {
                var elemento = elementos[indexElemento];
                var indexOrigen = tieneComarador ? AbaxXBRLUtilsService.obtenIndicePorAtributo(origen, elemento, atrubutoComparar) : origen.indexOf(elemento);
                if (indexOrigen != -1) {
                    destino.push(origen[indexOrigen]);
                    origen.splice(indexOrigen, 1);
                }
            }
        }
        /**
        * Cara a angular un listado de modulos.
        * Aqui no carga las dependencias, se espera que se invoquen desde otro modulo.
        * @param modulos Lista con los nombres de los modulos a cragar.
        * @return promesa que se cumple cuando se termina la carga de modulos.
        **/
        public static cargaModulosAngularPoNombre(modulos: Array<string>): ng.IPromise<any> {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            var $ocLazyLoad = self.$ocLazyLoad;
            var definiciones: Array<{ name: string }> = [];

            for (var index = 0; index < modulos.length; index++) {
                definiciones[index] = { name: modulos[index] };
            }

            return $ocLazyLoad.load(definiciones);
        }
        /**
        * Carga la definicion del modulo indicado, con todas sus dependencias.
        **/
        public static cargaDefinicionModulo(nombreModulo: string): ng.IPromise<any> {
            return AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.$ocLazyLoad.load(nombreModulo);
        }
        
        /**
        * Retorna el servico para la carga de dependencias.
        * @return Servicio para la carga de dependencias.
        **/
        public static getLazyLoadService(): oc.ILazyLoad {
            return AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.$ocLazyLoad;
        }

        /**
        * Actualiza el estado de la vista al estado requerido.
        **/
        public static cambiarEstadoVistasA(nombreEstado: string) {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            self.$state.go(nombreEstado);
        }

        /**
        * Actualiza el estado de la vista al estado requerido.
        **/
        public static cambiarEstadoVistasConParametroA(nombreEstado: string, parametro: any) {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            self.$state.go(nombreEstado, parametro);
        }

        /**
        * Retorna el nombre del estado actual de la vista.
        **/
        public static getEstadoVista(): string {
            var self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            return self.$state.current.name;
        }
        /**
        * Obtiene un prametro de petición.
        * @param name Nombre del parametro solicitado.
        * @param clean Bandera opcional que indica si se debe de borrar o no el parametro una vez retornado. Por defecto es true.
        * @return Retorna el parametro encontrado o undefined si no existe o si ya fue tomado y eliminado del diccionario.
        **/
        public static getAtributoTemporal(nombre: string, clean?: boolean): any {

            var value = AbaxXBRLUtilsService.REQUEST_PARAMS[nombre];
            if (value && clean != false) {
                AbaxXBRLUtilsService.REQUEST_PARAMS[nombre] = undefined;
                delete AbaxXBRLUtilsService.REQUEST_PARAMS[nombre];
            }

            return value;

        }

        /**
        * Asigna un parametro de petición.
        * @param nombre Nombree del parametro.
        * @param valor Valor del parametro.
        **/
        public static setAtributoTemporal(nombre: string, valor: any): void {
            AbaxXBRLUtilsService.REQUEST_PARAMS[nombre] = valor;
        }
        /**
        * Retorna el servicio para el despliegue de dialogos modales.
        **/
        public static getModalService(): ng.ui.bootstrap.IModalService {
            return AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.$modal;
        }
        /**
        * Muestra un dialogo con información listada según la configurción dada.
        * @param configuracion Configuración del dialogo.
        * @return Promesa que no retorna nada pero permite dar seguimiento cuando el dialogo se cierra.
        **/
        public static muestraDialogoListaDetalle(configuracion: shared.modelos.IConfiguracionDialogoListaDetalle): ng.IPromise<void> {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $modal = $util.getModalService();
            var deferred = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.qService.defer<void>();
            var onSucess = function () { deferred.resolve(); };
            var onCancel = function () { deferred.reject(); };
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_CONFIGURACION_DIALOGO_DETALLE, configuracion);
            $modal.open({
                templateUrl: 'abax-xbrl/shared/dialogos-comunes/detalle-listado/abax-xbrl-dialogo-lista-detalle-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: componentes.controllers.AbaxXBRLDialogoListaDetalleController,
                size: 'lg',
            }).result.then(onSucess, onCancel);

            return deferred.promise;

        }
        /**
        * Muestra un dialogo de advertencia con la configurción dada.
        * @param configuracion Configuración del dialogo de advertencia.
        * @return Promesa que retorna un booleando indicando si se presiono el botón de aceptar.
        **/
        public static advertencia(configuracion: shared.modelos.IConfiguracionDialogoConfirmacion): ng.IPromise<boolean> {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $modal = $util.getModalService();
            var deferred = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.qService.defer<boolean>();
            var onSucess = function (resultado: boolean) { deferred.resolve(resultado); };
            var onCancel = function () { deferred.reject(); };
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_CONFIGURACION_DIALOGO_CONFIRMACION, configuracion);
            $modal.open({
                templateUrl: 'abax-xbrl/shared/dialogos-comunes/alerta/abax-xbrl-dialogo-alerta-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: componentes.controllers.AbaxXBRLDialogoAlertaController,
                size: 'lg',
            }).result.then(onSucess, onCancel);

            return deferred.promise;

        }
        /**
       * Muestra un dialogo de error con la configurción dada.
       * @param configuracion Configuración del dialogo de error.
       * @return Promesa que retorna un booleando indicando si se presiono el botón de aceptar.
       **/
        public static error(configuracion: shared.modelos.IConfiguracionDialogoConfirmacion): ng.IPromise<boolean> {
            var $util = shared.service.AbaxXBRLUtilsService;
            
            if (!configuracion.claseTitulo) {
                configuracion.claseTitulo = "panel-danger";
            }

            if (!configuracion.textoTititulo) {
                configuracion.textoTititulo = $util.getValorEtiqueta("TITULO_ERROR"); 
            }
            return $util.advertencia(configuracion);
        }
        /**
        * Muestra un dialogo de exito con la configurción dada.
        * @param configuracion Configuración del dialogo.
        * @return Promesa que retorna un booleando indicando si se presiono el botón de aceptar.
        **/
        public static exito(configuracion: shared.modelos.IConfiguracionDialogoConfirmacion): ng.IPromise<boolean> {
            var $util = shared.service.AbaxXBRLUtilsService;

            if (!configuracion.claseTitulo) {
                configuracion.claseTitulo = "panel-success";
            }

            if (!configuracion.textoTititulo) {
                configuracion.textoTititulo = $util.getValorEtiqueta("TITULO_EXITO");
            }

            if (!configuracion.claseIconoTitulo) {
                configuracion.claseIconoTitulo = "fa fa-check-circle";
            }

            return $util.advertencia(configuracion);
        }
		/**
        * Muestra un dialogo de confirmación con la configurción dada.
        * @param configuracion Configuración del dialogo de confirmación.
        * @return Promesa que retorna un booleando indicando si se confirmo o no el mensaje.
        **/
        public static confirmar(configuracion: shared.modelos.IConfiguracionDialogoConfirmacion): ng.IPromise<boolean> {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $modal = $util.getModalService();
            var deferred = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.qService.defer<boolean>();
            var onSucess = function (resultado: boolean) { deferred.resolve(resultado); };
            var onCancel = function () { deferred.reject(); };
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_CONFIGURACION_DIALOGO_CONFIRMACION, configuracion);
            $modal.open({
                templateUrl: 'abax-xbrl/shared/dialogos-comunes/confirmar/abax-xbrl-dialogo-confirmacion-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: componentes.controllers.AbaxXBRLDialogoConfirmacionController,
                size: 'lg',
            }).result.then(onSucess, onCancel);

            return deferred.promise;

        }
        /**
        * Muestra un dialogo de confirmación perconfigurado para salir sin guardar.
        * @param mensaje Clave de etiqueta o mensaje de texto con el texto a mostrar en la confiramción.
        * @return Promesa con la respuesta de la confirmación.
        **/
        public static confirmarSalirSinGuardar(mensaje: string): ng.IPromise<boolean> {
            var $util = shared.service.AbaxXBRLUtilsService;
            var titulo = $util.getValorEtiqueta("TITULO_SALIR_SIN_GUARDAR");
            var textoMensaje = $util.getValorEtiqueta(mensaje);
            var configuracion: shared.modelos.IConfiguracionDialogoConfirmacion = {
                claseIconoTitulo: "i i-logout",
                claseTitulo: "panel-warning",
                textoTititulo: titulo,
                texto: textoMensaje
            }
            return $util.confirmar(configuracion);
        }

        /**
        * Muestra un dialogo de confirmación perconfigurado para eliminar.
        * @param mensaje Clave de etiqueta o mensaje de texto con el texto a mostrar en la confiramción.
        * @return Promesa con la respuesta de la confirmación.
        **/
        public static confirmaEliminar(mensaje: string): ng.IPromise<boolean> {
            var $util = shared.service.AbaxXBRLUtilsService;
            var titulo = $util.getValorEtiqueta("ETIQUETA_ELIMINAR");
            var textoMensaje = $util.getValorEtiqueta(mensaje);
            var configuracion: shared.modelos.IConfiguracionDialogoConfirmacion = {
                claseIconoTitulo: "fa fa-trash-o",
                claseTitulo: "panel-danger",
                textoTititulo: titulo,
                texto: textoMensaje
            }
            return $util.confirmar(configuracion);
        }

        /**
        * Muestra un dialogo de confirmación perconfigurado para guardar.
        * @param mensaje Clave de etiqueta o mensaje de texto con el texto a mostrar en la confiramción.
        * @return Promesa con la respuesta de la confirmación.
        **/
        public static confirmaGuardar(mensaje: string): ng.IPromise<boolean> {
            var $util = shared.service.AbaxXBRLUtilsService;
            var titulo = $util.getValorEtiqueta("ETIQUETA_BOTON_GUARDAR");
            var textoMensaje = $util.getValorEtiqueta(mensaje);
            var configuracion: shared.modelos.IConfiguracionDialogoConfirmacion = {
                claseIconoTitulo: "fa fa-floppy-o",
                claseTitulo: "panel-sucess",
                textoTititulo: titulo,
                texto: textoMensaje
            }
            return $util.confirmar(configuracion);
        }
        /**
        * Inicializa los elemento autonumericos del componente con los parametros dados.
        * @param element Elemento que se pretende inicializar.
        * @param tipoDato Tipo de dato que contiene las opciones del autonumeric.
        **/
        public static inicializaAutoNumericPorTipoDato(element: JQuery, tipoDato: any): void {
            var $self = AbaxXBRLUtilsService;
            var autonumerico = element.is($self.SELECTOR_AUTONUMERIC) ? element : element.find($self.SELECTOR_AUTONUMERIC);
            var opcionesAutonumeric = tipoDato.OpcionesAutonumeric ? tipoDato.OpcionesAutonumeric : {};
            autonumerico.each(function () {

                var $this = jQuery(this);
                $this.autoNumeric('init', opcionesAutonumeric);
                var value: string = $this.is('input') ? $this.val() : $this.text();
                value = value.trim();
                if (value.length == 0) {
                    value = '0.00'
                }
                $this.autoNumeric('set', value);
            });

        }

        /**
        * Inicializa los elemento autonumericos del componente con los parametros dados.
        * @param element Elemento que se pretende inicializar.
        * @param tipoDato Tipo de dato que contiene las opciones del autonumeric.
        * @param se personaliza con el numero de decimales si se requiere aumentar o disminuir.
        **/
        public static inicializaAutoNumericPorTipoDatoPersonalizado(element: JQuery, tipoDato: any,numeroDecimales:number): void {
            var $self = AbaxXBRLUtilsService;
            var autonumerico = element.is($self.SELECTOR_AUTONUMERIC) ? element : element.find($self.SELECTOR_AUTONUMERIC);
            var opcionesAutonumeric = tipoDato.OpcionesAutonumeric ? tipoDato.OpcionesAutonumeric : {};
            autonumerico.each(function () {

                var $this = jQuery(this);
                if (numeroDecimales > 0) {
                    var opcionesAutonumericPersonalizado: any = {};
                    opcionesAutonumericPersonalizado.mDec = numeroDecimales.toString();
                    opcionesAutonumericPersonalizado.vMin = opcionesAutonumeric.vMin;
                    opcionesAutonumericPersonalizado.vMax = opcionesAutonumeric.vMax;
                    //opcionesAutonumericPersonalizado.aPad = opcionesAutonumeric.aPad;
                    opcionesAutonumericPersonalizado.aSign = opcionesAutonumeric.aSign;
                    opcionesAutonumericPersonalizado.nBracket = opcionesAutonumeric.nBracket;
                    opcionesAutonumericPersonalizado.pSign = opcionesAutonumeric.pSign;

                    $this.autoNumeric('init', opcionesAutonumericPersonalizado);
                } else {

                    $this.autoNumeric('init', opcionesAutonumeric);
                }
                
                var value: string = $this.is('input') ? $this.val() : $this.text();
                value = value.trim();
                if (value.length > 0) {
                    $this.autoNumeric('set', value);
                }
                
            }); 

        }

        public static setNumberFormat(valor: string, opciones: any, decimales?: number): string {
            var decReales = decimales;
            if (decReales === undefined) {
                decReales = opciones.mDec;
            }
            if (decReales === undefined) {
                decReales = 0;
            }
            var n = valor,
                valorNumerico = isNaN(parseFloat(n)) ? 0 : parseFloat(n),
                numDecimales = isNaN(decReales = Math.abs(decReales)) ? 2 : decReales,
                puntoDecimal = opciones.aDec == undefined ? "." : opciones.aDec,
                separadorMiles = opciones.aSep == undefined ? "," : opciones.aSep;
            var signoIzq = "",
                signoDer = "";
            if (valorNumerico < 0) {
                if (opciones.nBracket !== undefined) {
                    if (opciones.nBracket == "(,)") {
                        signoIzq = "(";
                        signoDer = ")";
                    }
                } else {
                    signoIzq = "-";
                }
            }
            var padDec = opciones.aPad == undefined ? false : opciones.aPad;
            var i = parseInt(n = Math.abs(+n || 0).toFixed(numDecimales)) + "",
                ii = isNaN(parseFloat(i)) ? 0 : parseFloat(i),
                j = (j = i.length) > 3 ? j % 3 : 0;
            return signoIzq +
                (j ? i.substr(0, j) + separadorMiles : "") +
                i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + separadorMiles) +
                (numDecimales ? puntoDecimal +
                (padDec ?
                    Math.abs(valorNumerico - ii).toFixed(numDecimales) :
                    (valorNumerico - ii == 0 ?
                    "0.0" : parseFloat(Math.abs(valorNumerico - ii).toFixed(numDecimales)) + "")
                    ).
                    slice(2) 
                :
                "")
                + signoDer
                ;
        }

        /**
        * Diccionario con los identificadores de los intervalos que se evaluan en setAsyncTask. 
        **/
        private static INTERVALS_TASK_DATA: { [intervalName: string]: { IdTask: number; ProcessList: Array<() => any>; TimeOut?: number; Repeat:boolean}} = {}
        /**
        * Asigna un proceso a un intervalo determinado para ser ejecutado cada que se procese el intervalo.
        * @param Opciones a considerar para la ejecución del intervalo.
        * @return Opciones asingadas con datos adicionales del hilo.
        **/
        public static setAsyncTask(opciones: modelos.IOpcionesAsyncTask): modelos.IOpcionesAsyncTask {
            var replace:boolean = opciones.Replace != false;
            var repeat = opciones.Repeat == true ? true : false;
            var $util = AbaxXBRLUtilsService;
            var name = opciones.Name;
            var taskData = $util.INTERVALS_TASK_DATA[name]; 
            $util.stopTasks(opciones.Name);
            if (!taskData || replace) {
                $util.INTERVALS_TASK_DATA[name] = { IdTask: 0, ProcessList: [], Repeat: repeat };
                taskData = $util.INTERVALS_TASK_DATA[name];
            }
            var processList = taskData.ProcessList;
            var executor = opciones.Executor ? opciones.Executor : this;
            var newProcess = $.proxy(opciones.Process, executor);
            processList.push(newProcess);

            taskData.TimeOut = opciones.Timeout;
            taskData.Repeat = repeat;
            if (opciones.StartOnDefine != false) {
                opciones = $util.startTask(name);
            }
            return opciones;
        }
        /**
        * Detiene la ejecuación de un proceso.
        * @param name Nombre del proceso a detener.
        **/
        public static stopTasks(name: string): void {
            var $util = AbaxXBRLUtilsService;
            var data = $util.INTERVALS_TASK_DATA[name];
            if (data) {
                if (data.Repeat) {
                    clearInterval(data.IdTask);
                } else {
                    clearTimeout(data.IdTask);
                }
            }
        }
        /**
        * Inicia la ejecución de un proceso por su nombre.
        * @param name Nombre del proceso a iniciar.
        * @return Si fue posible iniciar el proceso.
        **/
        public static startTask(name: string): modelos.IOpcionesAsyncTask {
            var $util = AbaxXBRLUtilsService;
            var data = $util.INTERVALS_TASK_DATA[name];
            if (data) {
                var processList = data.ProcessList;
                var timeOut = data.TimeOut;
                var result: modelos.IOpcionesAsyncTask = { Name: name, Process: undefined, Replace: data.Repeat, ProcessListLength: processList.length };
                var deferred :ng.IDeferred<any> = data.Repeat ? undefined : $util.SINGELTON_SERVICE_INSTANCE.qService.defer();
                var mainTask = function () {
                    try {
                        for (var indexProcess: number = 0; indexProcess < processList.length; indexProcess++) {
                            var process: Function = processList[indexProcess];
                            process();
                        }
                    } catch (exception) {
                        root.AbaxXBRLRootUtilService.errorLog(exception);
                        if (deferred) { deferred.reject(exception); }
                    }
                    if (deferred) { deferred.resolve(); }
                    
                };
                $util.stopTasks(name);
                if (data.Repeat) {
                    clearInterval(data.IdTask);
                    data.IdTask = setInterval(mainTask, timeOut);
                    result.Promise = undefined;
                } else {
                    clearTimeout(data.IdTask);
                    data.IdTask = setTimeout(mainTask, timeOut);
                    result.Promise = deferred.promise;
                }
                result.IdMainTask = data.IdTask;
            }
            return result;
        }
        /**
        * Indica si existe la definición de un proceso con el nommbre dado.
        **/
        public static existTask(name: string):boolean {
            return AbaxXBRLUtilsService.INTERVALS_TASK_DATA[name] ? true : false;
        }


        /**
        * Inicializa los autonumerics.
        **/
        public static inicializaAutoNumerics(): void {
            //jQuery('body').on('focus chage load', '[xbrl\\:auto-numeric]:not(.autonumeric)', function (e) {
                
            //});
            jQuery('[xbrl\\:auto-numeric]:not(.autonumeric)').each(function () {

                var $this = jQuery(this);
                if (!$this.hasClass('autonumeric')) {

                    var opciones = {};
                    var opcionesAttr = $this.attr('opciones-auto-numeric');
                    if (opcionesAttr) {
                        opciones = eval('(' + opcionesAttr + ')');
                    }
                    $this.autoNumeric('init', opciones);
                    var expresionAttr = $this.attr('expresion');
                    if (expresionAttr) {
                        var expresion = eval('(' + expresionAttr + ')');
                        if (expresionAttr) {
                            $this.autoNumeric('set', expresion);
                        }
                    }

                    var modelAttr = $this.attr('model');
                    if (modelAttr) {
                        var model = eval('(' + modelAttr + ')');
                        if (model) {
                            $this.autoNumeric('set', model);
                        }
                    }

                }
            });

        }

        /**
        * Identificador del timeout para ejecutar el proceso que ajusta las celdas.
        **/
        private static reAjustaCeldastablaTimeOutId: number;
        /**
        * Template utilizado para generar la tabla dinamica.
        **/
        private static templateTablaDinamica =
        "<div class=\"dinamicTable dinamic-table-master-container\">" +
        "<table class=\"dinamic-table-master-table\">" +
        "     <thead class=\"dinamic-table-master-head\">" +
        "         <tr class=\"dinamic-table-master-head-tr\" xbrl:no-filtrar=\"true\" >" +
        "             <td class=\"celdaFija dinamic-table-master-head-td0\" xbrl:dt-column=\"TitulosIzquierda\" ></td>" +
        "             <td class=\"dinamic-table-master-head-td1\">" +
        "                 <div class=\"scrollableXHidden\"></div>" +
        "             </td>" +
        "         </tr>" +
        "     </thead>" +
        "     <tbody class=\"dinamic-table-master-body\">" +
        "         <tr xbrl:no-filtrar=\"true\" class=\"dinamic-table-master-body-tr\" >" +
        "             <td xbrl:dt-column=\"TitulosIzquierda\" class=\"dinamic-table-master-body-td0\">" +
        "                 <div class=\"scrollableYHidden\"></div>" +
        "             </td>" +
        "             <td class=\"dinamic-table-master-body-td1\">" +
        "                 <div class=\"scrollableXYAuto\"></div>" +
        "             </td>" +
        "         </tr>" +
        "     </tbody>" +
        "</table>" +
        "</div>";

        /**
        * Busca dentro del documento todas las tablas que contengan el atributo xbrl:tabla-scrolleable y las modifica para dejar fija su cabecera y su primera fila.
        **/
        public static evaluaTablasDinamicas(opcionesTablaDinamica?: shared.modelos.IOpcionesTablaDinamica ): void {
            var $util = AbaxXBRLUtilsService;
            var $self = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE;
            var deferred = $self.qService.defer();
            $('table[xbrl\\:tabla-scrolleable],[xbrl\\:tabla-scrolleable]').each(function (indexTablaScrollable: number, elementScrollable: Element) {
                try {
                    var $scrollableContainer = $(elementScrollable);
                    var $tabla: JQuery;
                    if (!$scrollableContainer.is('table')) {

                        $tabla = $scrollableContainer.find("table:first");
                    } else {

                        $tabla = $scrollableContainer;
                        $scrollableContainer = null;
                    }

                    $tabla.css('margin', '0');
                    $tabla.removeAttr('xbrl:tabla-scrolleable')
                    if (!opcionesTablaDinamica) {
                        opcionesTablaDinamica = {};
                    }

                    var celdaSelector = ':first-child[rowspan]';
                    var cabeceraTabla = $tabla.find('thead:first');
                    var firstColumnMinWidth: number = opcionesTablaDinamica.firstColumnMinWidth > 0 ? opcionesTablaDinamica.firstColumnMinWidth : 300;

                    if (cabeceraTabla.find('th' + celdaSelector).length == 0) {
                        celdaSelector = ':first-child';
                    }
                    cabeceraTabla.find('tr').each(function (indexHRow: number, hRow: any) { $(hRow).attr('xbrl:dt-row', 'dtHRwo' + indexHRow); });
                    var cabeceraVacia = cabeceraTabla.clone();
                    cabeceraVacia.find('> tr > th').remove();

                    var cabeceraScrollable = cabeceraTabla;
                    var celdaFija = cabeceraVacia.clone();

                    celdaFija.find('> tr').each(function (trIndex: number, tr: Element) {
                        var thOriginales = cabeceraTabla.find('> tr:eq(' + trIndex + ') > th' + celdaSelector);
                        var $tr = $(tr);
                        $tr.append(thOriginales);

                    });

                    //cabeceraTabla.remove();

                    //celdaFija.find('th:not(' + celdaSelector + ')').remove();
                    //cabeceraScrollable.find('th' + celdaSelector).remove();

                    var cuerpoTabla = $tabla.find('tbody:first');
                    var columnaScrollable = cuerpoTabla.clone();
                    columnaScrollable.find('> tr > td').remove();

                    columnaScrollable.find('> tr').each(function (trIndex: number, tr: Element) {
                        var tdOriginales = cuerpoTabla.find('> tr:eq(' + trIndex + ') > td:first-child');
                        var $tr = $(tr);
                        $tr.append(tdOriginales);

                    });

                    //var contenidoScrollable = $tabla.find('tbodyy:first');
                    //contenidoScrollable.find('td:first-child').remove();

                    var templateHead = $('<table style="height:100%; margin: 0;"></table>').attr('class', $tabla.attr('class'));
                    var templateBody = $('<table></table>').attr('class', $tabla.attr('class'));
                    var dinamicTable = $($util.templateTablaDinamica);

                    var idMaterTable: string;
                    if (opcionesTablaDinamica.idMasterTable && opcionesTablaDinamica.idMasterTable.length > 0) {
                        if (indexTablaScrollable == 0) {
                            idMaterTable = opcionesTablaDinamica.idMasterTable;
                        } else {
                            idMaterTable = opcionesTablaDinamica.idMasterTable + '_' + indexTablaScrollable;
                        }
                    } else {
                        idMaterTable = 'dtS-' + utils.UUIDUtils.generarUUID();
                    }

                    dinamicTable.attr('id', idMaterTable);

                    if (!$scrollableContainer) {

                    $tabla.before(dinamicTable);
                    } else {

                        $scrollableContainer.append(dinamicTable);
                    }
                    

                    var c1r1 = templateHead.clone();
                    var c2r1 = templateHead;
                    var c1r2 = templateBody;
                    var c2r2 = $tabla;

                    $tabla.css('table-layout', 'fixed');

                    //c2r1.attr('xbrl:dt-column', 'dtCbody');
                    //c2r2.attr('xbrl:dt-column', 'dtCbody');

                    dinamicTable.find('td.celdaFija:first').append(c1r1);
                    dinamicTable.find('div.scrollableXHidden:first').append(c2r1);
                    dinamicTable.find('div.scrollableYHidden:first').append(c1r2);
                    dinamicTable.find('div.scrollableXYAuto:first').append(c2r2);

                    c1r1.append(celdaFija);
                    c2r1.append(cabeceraScrollable);
                    c1r2.append(columnaScrollable);
                    //c2r2.append(contenidoScrollable);

                    dinamicTable.find('div.scrollableYHidden:first').css('min-width', firstColumnMinWidth + 'px');

                    if (dinamicTable.find('[xbrl\\:dt-boton-maximizar]').length == 0 && dinamicTable.find('[xbrl\\:dt-boton-restaurar]').length == 0) {

                        //var dtPosition: JQueryCoordinates = dinamicTable.find('td.celdaFija:first').position();
                        var buttonExpand = $('<button type="button" xbrl:dt-boton-maximizar="" class="btn btn-sm btn-icon btn-default tdButton"><i class="fa fa-expand rotar90"></i></button>');
                        var buttonRestaurar = $('<button type="button" xbrl:dt-boton-restaurar="" class="btn btn-sm btn-icon btn-default tdButton" style="display:none;"><i class="fa fa-compress rotar90"></i></button>');
                        if ($scrollableContainer) {
                            buttonExpand.data("xbrl-contenedor-tabla", $scrollableContainer);
                        }

                        //buttonExpand.offset(dtPosition);
                        //buttonRestaurar.offset({ left: 0, top: 0 });

                        dinamicTable.append(buttonExpand);
                        dinamicTable.append(buttonRestaurar);

                    }

                    $tabla.data("xbrl:dinamic-table-ref", dinamicTable);
                    $tabla.data("xbrl:dinamic-table-options", opcionesTablaDinamica);

                    $util.reAjustaCeldasTabla(dinamicTable,opcionesTablaDinamica).always(function () {
                        try {
                            if ($tabla.is('[xbrl\\:tabla-excel]')) {

                                if (!opcionesTablaDinamica || !opcionesTablaDinamica.desHabilitarTablaExcel) {

                                    var settingsExcel = $util.reEvaluaTablaExcel($tabla);
                                    var idExcelContainer = utils.UUIDUtils.generarUUID();
                                    var excelContainer = dinamicTable.find('div.scrollableXYAuto:first');
                                    excelContainer.attr('xbrl:identificador-contenedor', idExcelContainer);

                                    settingsExcel.yContainer = excelContainer;
                                    settingsExcel.xContainer = excelContainer;
                                    settingsExcel.selectorElementos = 'td';

                                    $tabla.attr('selector', 'td');
                                    $tabla.attr('selector-contenedor-x', '[xbrl\\\\:identificador-contenedor = \'' + idExcelContainer + '\']');
                                    $tabla.attr('selector-contenedor-y', '[xbrl\\\\:identificador-contenedor = \'' + idExcelContainer + '\']');
                                } else {
                                    try {
                                        $tabla.xbrlTablaExcel('pausar');
                                        $tabla.off('click');
                                        $tabla.off('dbclick');
                                        var cellSelector = $tabla.attr('selector');
                                        if (cellSelector && cellSelector.length > 0) {
                                            $tabla.find(cellSelector).off('click');
                                        }
                                    } catch (exception) {
                                        root.AbaxXBRLRootUtilService.errorLog(exception);
                                    }   
                                }
                            }
                            $('#panelToolbar button:first').focus();
                            //$util.iniciaEvaluadorDT(dinamicTable, opcionesTablaDinamica);
                           
                            plugins.XbrlPluginUtils.ocultarLoaderFormatos();			    
                        } catch (exception) {
                            root.AbaxXBRLRootUtilService.errorLog(exception);
                        }

                    });
                } catch (exception) {
                    root.AbaxXBRLRootUtilService.errorLog(exception);
                }
            });
        }
        /**
        * Inicia un hilo que esta evaluando que la los altos de las finals y demas elementos en la tabla cuadren de los congtrario reprocesa.
        * esta función es util cuando existen elementos que se van a agregar a destiempo dentro de la tabla.
        * @param dinamicTable Tabla a evaluar.
        * @param opcionesTablaDinamica Opciones adincionales de la tabla.
        **/
        private static iniciaEvaluadorDT(dinamicTable: JQuery, opcionesTablaDinamica?:shared.modelos.IOpcionesTablaDinamica): void {
            var $util = AbaxXBRLUtilsService;
            var idIntervalEvaluador: number = setInterval(function () {

                $util.reAjustaCeldasTabla(dinamicTable, opcionesTablaDinamica);
                var correcto: boolean = true;
                var rowsByIndex: { [rowIndex: string]: JQuery } = {};
                dinamicTable.find('[xbrl\\:dt-row]').each(function () {
                    var $this = $(this);
                    var rowIndex = $this.attr('xbrl:dt-row');
                    if (!rowsByIndex[rowIndex]) {
                        rowsByIndex[rowIndex] = dinamicTable.find('[xbrl\\:dt-row = ' + rowIndex + ']');
                        var prevHeight: number;
                        rowsByIndex[rowIndex].each(function () {
                            var height = $(this).outerHeight();
                            if (!prevHeight) {
                                prevHeight = height;
                            }
                            if (prevHeight != height) {
                                correcto = false;
                                return false;
                            }
                        });
                        if (!correcto) {
                            return false;
                        }
                    }
                });

                if (correcto) {
                    clearInterval(dinamicTable.data('idIntervalEvaluador'));
                }
            }, 3);
            dinamicTable.data('idIntervalEvaluador', idIntervalEvaluador);
        }

        /**
        * Asigna los settings por defecto de las tablas de excel.
        **/
        public static setDefaultTablaExcelSettings(settings: plugins.XbrlTablaExcelSettings): void {

            AbaxXBRLUtilsService.TABLA_EXCEL_DEFAULT_SETTINGS = settings;
        }
        /**
        * Reevaluamos las tablas de excel para inicializarlas o reinicializarlas.
        * @return Retorna el listado de settins de las tablas de excel inicializadas.
        **/
        public static reEvaluaTablasExcel(): Array<plugins.XbrlTablaExcelSettings> {
            var settinsTablas = new Array<plugins.XbrlTablaExcelSettings>();
            var tablasExcel = $('table[xbrl\\:tabla-excel]');
            tablasExcel.each(function (indexTablaExcel: number, elementoTablaExcel: Element) {
                var tablaExcel = $(elementoTablaExcel);
                AbaxXBRLUtilsService.reEvaluaTablaExcel(tablaExcel);
            });

            return settinsTablas;
        }

        /**
        * Inicializa si no ha sido inicializada la tabla de excel.
        * @param tablaExcel Elemento de tipo table con las propiedades de configuración de una tabla de excel.
        * @return Retorna la configuración de la tabla de excel.
        **/
        public static reEvaluaTablaExcel(tablaExcel: JQuery): plugins.XbrlTablaExcelSettings {
            var settings = tablaExcel.data('tablaExcelSettings');
            if (!settings) {
                tablaExcel.xbrlTablaExcel('init', AbaxXBRLUtilsService.TABLA_EXCEL_DEFAULT_SETTINGS);
                settings = tablaExcel.data('tablaExcelSettings');
            }
            tablaExcel.xbrlTablaExcel('pausar');
            tablaExcel.xbrlTablaExcel('reanudar');

            return settings;
        }
        /**
        * Retorna la configuración por defecto para la inicialización de una tabla de excel.
        **/
        private static getDefaultTablaExcelSettings(): plugins.XbrlTablaExcelSettings {
            if (!AbaxXBRLUtilsService.TABLA_EXCEL_DEFAULT_SETTINGS) {
                var tableSettings = new plugins.XbrlTablaExcelSettings();
                tableSettings.estilos = plugins.XbrlTablaExcel.ESTILOS_POR_DEFECTO;
                tableSettings.soloLectura = false;
                tableSettings.tabIndex = 1;
                tableSettings.contenedorTextArea = $(plugins.XbrlTablaExcel.CONTENEDOR_CLIPBOARD_POR_DEFECTO);
                tableSettings.onAfterPaste = plugins.XbrlPluginUtils.onAfterPaste;
                tableSettings.onAfterRangePaste = plugins.XbrlPluginUtils.onAfterRangePaste;
                tableSettings.onBeforeCopy = plugins.XbrlPluginUtils.onBeforeCopy;
                tableSettings.onSpaceOrEnterKey = plugins.XbrlPluginUtils.onSpaceOrEnterKey;
                AbaxXBRLUtilsService.TABLA_EXCEL_DEFAULT_SETTINGS;
            }
            return AbaxXBRLUtilsService.TABLA_EXCEL_DEFAULT_SETTINGS;
        }

        /**
        * Trata de asignar los identificadores de filas y columnas de una tabla dinamica.
        *  @param tabla Contenedor principal de la tabla que será evaluada. 
        **/
        private static asignaIdsColumnasFilasCeldas(tabla: JQuery): void {

            var filas = tabla.find('div.scrollableYHidden:first table:first, div.scrollableXYAuto:first table:first');
            var filasConColumnas = tabla.find('div.scrollableXHidden table:first thead:first > tr:last, div.scrollableXYAuto table:first tbody:first > tr');
            //Se valida si fueron definidos elementos xbrl:dt-row y xbrl:dt-column directo sobre la plantilla en cuyo caso se manejaran como constantes o fijos
            //Con lo cual no serán recalculados ni sobreescritos. 
            var dtColumnasFijasAsignadas: boolean = tabla.data('dtColumnasFijasAsignadas') == true;
            if (!dtColumnasFijasAsignadas) {
                //Agregamos un atributo (xbrl:dt-row-id-fijo) para diferenciar a los elementos fijos de los calcúlados.
                tabla.find('[xbrl\\:dt-row]').each(function () {
                    var $this = $(this);
                    var dtRow = $this.attr('xbrl:dt-row');
                    $this.attr('xbrl:dt-row-id-fijo', 'true');
                    $this.addClass(dtRow);
                });
                tabla.find('[xbrl\\:dt-column]').each(function () {
                    var $this = $(this);
                    var dtColumn = $this.attr('xbrl:dt-column');
                    $this.attr('xbrl:dt-column-id-fijo', 'true');
                    $this.addClass(dtColumn);
                });
                tabla.data('dtColumnasFijasAsignadas', true);
            } else {
                //Si ya fueron inicializados los elementos fijos (proceso que solo se ejecuta la primera vez que se evalua la tabla)
                //entonces retiramos la clase relacionada con la clave
                tabla.find('[xbrl\\:dt-row]:not([xbrl\\:dt-row-id-fijo])').each(function () {
                    var $this = $(this);
                    var dtRow = $this.attr('xbrl:dt-row');
                    $this.removeClass(dtRow);
                });
                tabla.find('[xbrl\\:dt-column]:not([xbrl\\:dt-row-id-fijo])').each(function () {
                    var $this = $(this);
                    var dtColumn = $this.attr('dt-column');
                    $this.removeClass(dtColumn);
                });
            }
            //Se reasigna la calve de los elementos que no son fijos (para considerar los casos cuando se alteran dinamicamente las tablas.
            filas.each(function (index: number, table: Element) {
                var $table = $(table);
                var $rows = $table.find('tbody:first > tr:not([xbrl\\:dt-row-id-fijo])');

                $rows.each(function (index: number, row: Element) {
                    var $row = $(row);
                    var idGroup = 'dtR' + index;
                    $row.attr('xbrl:dt-row', idGroup);
                    $row.addClass(idGroup);
                });
            });

            filasConColumnas.each(function (index: number, elem: Element) {
                var $table = $(elem);
                var $cells = $table.find('> td:not([xbrl\\:dt-column-id-fijo]),> th:not([xbrl\\:dt-column-id-fijo])');

                $cells.each(function (index: number, cell: Element) {
                    var $cell = $(cell);
                    var idGroup = 'dtC' + index;
                    $cell.attr('xbrl:dt-column', idGroup);
                    $cell.addClass(idGroup);
                });
            });
        }

        /**
        * Elimina el contendor de reglas de estilo (<style>) con el id indicado.
        * @param id Identificador del elemento a eliminar.
        **/
        private static removeSyleRoulesContainer(id: string): void {

            var style: JQuery = $('head:first style#' + id);
            if (style.length > 0 ) {
                style.remove();
            }
        }

        /**
        * Crea un elemento style en la cabedera del documento con el identificador dado.
        * @param id Identificador del elemento.
        **/
        private static createStyleRoulesContainer(id: string): JQuery {

            var style: JQuery = $('head:first style#' + id);
            var create: boolean = style.length == 0;
            if (create) {
                style = $('<style id="' + id + '"></style>');
                $('head:first').append(style);
            }
            return style;
        }

        /**
        * Agrega una regla de estilo al documento.
        * @param idStyle Identificador de la etiqueta Style donde se asignaran los estilos.
        * @param cssSelector Selector de elementos a los que se aplicara la regla.
        * @param ruleContent Contenido de la regla de estilo.
        **/
        private static setStyleRule(idStyle: string, cssSelector: string, ruleContent: string): void {
            var $util = AbaxXBRLUtilsService;
            var style = $util.createStyleRoulesContainer(idStyle);
            var content = style.html() + '\n' + cssSelector + '{' + ruleContent + '}' 
            style.html(content);
        }

        /**
        * Agrega una regla de estilo al documento.
        * @param idStyle Identificador de la etiqueta Style donde se asignaran los estilos.
        * @param content Contenido del elemento style.
        **/
        private static setStyleRulesFullContent(idStyle: string, content:string): void {
            var $util = AbaxXBRLUtilsService;
            var style = $util.createStyleRoulesContainer(idStyle);
            style.html(content);
        }

        /**
        * Ajusta las filas y columnas de un elemento que contenga los xbrl:dt-row y/o xbrl:dt-column.
        * @param tabla Elemento que contiene subelementos que representan las filas (atributo xbrl:dt-row) y las columnas (xbrl:dt-column).
        * @param options Opciones de configuración adicionales.
        **/
        public static reAjustaCeldasTabla(tabla: JQuery, options?: shared.modelos.IOpcionesTablaDinamica): JQueryPromise<any> {
            if (!tabla) {
                tabla = $('.mainDT');
            }
            var xbrlOpcionesTablaDinamica = tabla.attr('xbrl:opciones-tabla-dinamica');
            if (xbrlOpcionesTablaDinamica && xbrlOpcionesTablaDinamica.length > 0) {
                options = eval("(" + xbrlOpcionesTablaDinamica + ")");
            }
            
            if (!options) {
                var firstTable = tabla.first();
                options = firstTable.data(AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ACTUALES_DINAMIC_TABLE);
            }

            if (options) {
                tabla.data(AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ACTUALES_DINAMIC_TABLE, options);
            }
            var $q = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.qService;
            var defered = $.Deferred();
            try {
                if (tabla.length > 1) {
                    var completadas: number = 0;
                    var errors: Array<any> = [];
                    tabla.each(function (indexDt: number, elementDt: any) {
                        AbaxXBRLUtilsService.reAjustaCeldasTabla($(elementDt), options).fail(function (reason: any) {
                            errors.push(reason);
                        }).always(function () {
                            completadas++;
                            if (completadas >= tabla.length) {
                                if (errors.length > 0) {
                                    defered.reject(errors);
                                } else {
                                    defered.resolve();
                                }
                            }
                        });
                    });
                    //setTimeout(function () { defered.reject("Se supero el tiempo de espera maximo para completar la operación."); }, 5000);
                    return defered.promise();
                }
                if (!jQuery.contains($("body").get(0), tabla.get(0))) {
                    var resizeDtListener = tabla.data('resizeDTListener');
                    if (resizeDtListener) {
                        $(window).off('resize', resizeDtListener);
                        defered.fail();
                        return defered.promise();
                    }
                }
                if (!options) {
                    options = {};
                }

                if (options.fullScreen == undefined && options.heightScreenPorcent == undefined) {
                    options.fullScreen = false;
                    options.heightScreenPorcent = 50;
                }
                var timeOutId = tabla.data('reAjustaCeldastablaTimeOutId');
                if (timeOutId) {
                    clearTimeout(timeOutId);
                }

                var timeOutIdNew = setTimeout(function () {
                    try {
                        AbaxXBRLUtilsService.reAjustaCeldasTablaTask(tabla, options);
                        defered.resolve();
                    } catch (exception) {
                        defered.reject(exception);
                    }
                });//33
                tabla.data('reAjustaCeldastablaTimeOutId', timeOutIdNew);
            } catch (exception) {
                root.AbaxXBRLRootUtilService.errorLog(exception);
                defered.reject(exception);
            }
            return defered.promise();
        }
        /**
        * Proceso azincrono que se encarga de limpiar los estilos de la tabla dinamica para posteriormente reevaluar sus elementos y asignar los algos y los anchos.
        * @tabal Tabla dinamica a evaluar.
        * @options Opciones generales de la tabla.
        **/
        private static reAjustaCeldasTablaTask(tabla: JQuery, options: shared.modelos.IOpcionesTablaDinamica): void {
            AbaxXBRLUtilsService.asignaIdsColumnasFilasCeldas(tabla);
            var scrollAuto = tabla.find('div.scrollableXYAuto');
            var scrollY = tabla.find('div.scrollableYHidden');
            scrollAuto.css('width', '100%');
            scrollY.css('width', '100%');
            var celdas = tabla.find('[xbrl\\:dt-row],[xbrl\\:dt-column]');
            var regExpWidths = / *((max\-width)|(min-width)|(width)|(height)) *[:=] *\d+(\.\d*)? *((px)|(\%)) *;?/g;
            celdas.removeClass('dtHeightAjustado');
            celdas.removeClass('dtWidthAjustado');
            celdas.each(function (indexElement: number, cellElement: Element) {
                var $cell = $(cellElement);
                var style = $cell.attr('style');
                if (!style) {
                    return;
                }
                style = style.replace(regExpWidths, '');
                $cell.attr('style', style);
            });
            
            //Eliminamos los estilos asignados a la tabla
            var idTabla = AbaxXBRLUtilsService.generaIdentificadorElemento(tabla);
            var idStyle = 'dtS_' + idTabla;
            AbaxXBRLUtilsService.removeSyleRoulesContainer(idStyle);

            //Ajustamos elementos de la tabla.
            AbaxXBRLUtilsService.ajustaCeldasTabla(tabla, options);
        }

        /**
        * Evalua los scroll views de la tabla dinamica y les asigna un ancho y un alto tomando de referencia viewPort y las opciones asignadas.
        * @tabla Tabla dinamica a la que se evaluan los scrolls views.
        * @opciones Opciones a tomar en cuenta al reevaluar los scrollviews de la tabla dinamica.
        **/
        private static evaluaScrollsViewsDt(tabla: JQuery, opciones?:shared.modelos.IOpcionesTablaDinamica):void {
            var scrollAuto = tabla.find('div.scrollableXYAuto');
            var scrollY = tabla.find('div.scrollableYHidden');
            var scrollX = tabla.find('div.scrollableXHidden');

            var tableParent = tabla.parent();
            var anchoFijo = scrollY.outerWidth();
            var anchoTotal = tableParent.outerWidth();

            while (anchoTotal == 0) {

                tableParent = tableParent.parent();
                anchoTotal = tableParent.outerWidth();
            }

            var anchoDinamico = anchoTotal - anchoFijo;
            scrollX.width(anchoDinamico);
            scrollAuto.width(anchoDinamico);


            var heightViewPort = $(window).height();
            var altoDinamico = 500;
            var altoBodyTable = scrollAuto.find('table:first').outerHeight();
            var altoLeftColum = scrollY.find('table:first').outerHeight();
            var altoFijo = scrollX.outerHeight();
            if (altoBodyTable < altoLeftColum) {
                altoBodyTable = altoLeftColum
            }
            var dentroFullScreen = false;//tabla.parents("section#sectionSobreTodo.sobreTodo").length > 0;

            if ((opciones && opciones.fullScreen) || dentroFullScreen) {

                altoDinamico = heightViewPort - altoFijo;
            } else {

                var heightBodyPorcent:string = tabla.attr("xbrl:heght-body-porcent");
                if (heightBodyPorcent) {

                    opciones.heightScreenPorcent = parseInt(heightBodyPorcent);
                }

                if (opciones && opciones.heightScreenPorcent > 0) {

                    altoDinamico = (opciones.heightScreenPorcent / 100) * heightViewPort;
                } else {

                    altoDinamico = heightViewPort - altoFijo;
                }
            }

            if (!dentroFullScreen) {
	            if (altoBodyTable < altoDinamico) {
	
	                altoDinamico = altoBodyTable;
	            }
            }

            if (scrollAuto.parents(".add-scroll-height")) {
                altoDinamico += 10;
            }


            scrollAuto.height(altoDinamico);
            scrollY.height(altoDinamico);

            scrollAuto.off('scroll');
            scrollAuto.on('scroll', function () {
                scrollY.scrollTop($(this).scrollTop());
                scrollX.scrollLeft($(this).scrollLeft());
            });
        }

        /**
        * Obtiene el identificador del elemento indicado y si no tiene uno lo genera.
        * Se entiende como identificador el valor del atributo id.
        * @param elemento Elemento a evaluar.
        * @return Valor del identificador del elemento.
        **/
        private static generaIdentificadorElemento(elemento: JQuery): string {
            var idElemento = elemento.attr('id');
            //Si no existe identificador lo generamos.
            if (!idElemento || idElemento.length == 0) {
                idElemento = 'idGen_' + utils.UUIDUtils.generarUUID();
                elemento.attr('idGen_', idElemento);
            }
            return idElemento;
        }
        
        /**
        * Ajusta las filas y columnas de un elemento que contenga los xbrl:dt-row y/o xbrl:dt-column.
        * @param tabla Elemento que contiene subelementos que representan las filas (atributo xbrl:dt-row) y las columnas (xbrl:dt-column).
        **/
        private static ajustaCeldasTabla(tabla: JQuery, opciones?: shared.modelos.IOpcionesTablaDinamica): void {
            try {
                var rawRows = tabla.find('[xbrl\\:dt-row]:not(.dtHeightAjustado)');
                var rawColumns = tabla.find('[xbrl\\:dt-column]:not(.dtWidthAjustado)');
                var rowsByIndex: { [rowIndex: string]: JQuery } = {};
                var colsByIndex: { [rowIndex: string]: JQuery } = {};
                var $util = shared.service.AbaxXBRLUtilsService;
                //Propiedades de configuración.
                var deshabilitarAjuteAnchoColumnas: boolean = opciones && opciones.deshabilitarAjuteAnchoColumnas == true;
                var deshabilitarAjuteAltoFilas: boolean = opciones && opciones.deshabilitarAjuteAltoFilas == true;
                var sincronizarAnchoColumnasBody: boolean = !deshabilitarAjuteAnchoColumnas && opciones && opciones.sincronizarAnchoColumnasBody == true;
                var ajustarPorReglasDeEstilo: boolean = !opciones || opciones.ajustarPorReglasDeEstilo != false;
                var minColumWidth: number = opciones && opciones.minColumWidth > 0 ? opciones.minColumWidth : 0 ;
                //Obtenemos el identificador del elemento propietario de la tabla.
                var idTabla = $util.generaIdentificadorElemento(tabla);
                var idStyle = 'dtS_' + idTabla;
                var cssSelectorPrefix = '#' + idTabla + ' table ';
                //Eliminamos los estilos asignados a la tabla.
                $util.removeSyleRoulesContainer(idStyle);
                $util.evaluaScrollsViewsDt(tabla, opciones);
                var styleHeightContent: string = "";
                //Si esta activo el ajuste automatico del alto de las filas
                if (!deshabilitarAjuteAltoFilas) {
                    rawRows.each(function () {
                        var $this = $(this);
                        var rowIndex = $this.attr('xbrl:dt-row');
                        if (!rowsByIndex[rowIndex]) {
                            rowsByIndex[rowIndex] = tabla.find('[xbrl\\:dt-row = ' + rowIndex + ']:not(.dtHeightAjustado)');
                            var maxHeight: number = 0;
                            rowsByIndex[rowIndex].each(function () {
                                var height = $(this).outerHeight();
                                if (maxHeight < height) {
                                    maxHeight = height;
                                }
                            });
                            //Si no se ajusta por estilos se fija la altura directo en el elemento.
                            if (!ajustarPorReglasDeEstilo) {
                                rowsByIndex[rowIndex].outerHeight(maxHeight);
                                rowsByIndex[rowIndex].addClass('dtHeightAjustado');
                            } else {
                                //Se asignan los estilos dinamicamente en clases css
                                var styleSelector = cssSelectorPrefix + '.' + rowIndex;
                                var styleHeight = 'height: ' + maxHeight + 'px;'
                                styleHeightContent += '\n' + styleSelector + '{ ' + styleHeight + ' }'
                            }
                        }
                    });
                }
                //Si esta activo el ajuste automático del ancho de las columnas
                if (!deshabilitarAjuteAnchoColumnas) {
                    var maxColumnsWidth: number = 0;
                    var styleWidthContent: string = "";
                    rawColumns.each(function (index: number, elem: Element) {
                        var $this = $(elem);
                        var colIndex = $this.attr('xbrl:dt-column');
                        if (!colsByIndex[colIndex]) {
                            colsByIndex[colIndex] = tabla.find('[xbrl\\:dt-column = ' + colIndex + ']:not(.dtWidthAjustado)');
                            var maxWidth: number = 0;
                            var current = 0;
                            colsByIndex[colIndex].each(function (index: number, elem: Element) {
                                var width = $(elem).outerWidth();
                                if (maxWidth < width) {
                                    maxWidth = width;
                                }
                                current++;
                            });
                            if (maxWidth == 0 && colIndex == "TitulosIzquierda") {
                                maxWidth = 400;
                            }
                            if (maxColumnsWidth < maxWidth) {
                                maxColumnsWidth = maxWidth;
                            }
                            if (minColumWidth > maxWidth) {
                                maxWidth = minColumWidth;
                            }
                            //Si no se ajusta por estilos se fija el ancho directo en el elemento.
                            if (!ajustarPorReglasDeEstilo) {
                                colsByIndex[colIndex].css('min-width', maxWidth + "px");
                                colsByIndex[colIndex].css('max-width', maxWidth + "px");
                                colsByIndex[colIndex].addClass('dtWidthAjustado');
                            } else {
                                //Se definen las reglas de estilo para el ancho de los elementos.
                                var styleSelector = cssSelectorPrefix + '.' + colIndex;
                                var styleWidth = 'width: ' + maxWidth + 'px; min-width: ' + maxWidth + 'px; max-width: ' + maxWidth + 'px;';
                                styleWidthContent += '\n' + styleSelector + '{ ' + styleWidth + ' }'
                            }
                        }
                    });
                }
                //Si las alturas y anchos se fijan por reglas de estilo se asignan dichas reglas en una sola invocación.
                if (ajustarPorReglasDeEstilo) {
                    var styleFullContent = styleHeightContent + '\n\n' + styleWidthContent;
                    $util.setStyleRulesFullContent(idStyle, styleFullContent);
                }

                $util.evaluaScrollsViewsDt(tabla, opciones);
                //Si se requiere sincronizar el ancho de todas las columnas del cuerpo del documento.
                if (sincronizarAnchoColumnasBody) {
                    var columnsBody = tabla.find('div.scrollableXYAuto [xbrl\\:dt-column]');
                    columnsBody.css('min-width', maxColumnsWidth + "px");
                    columnsBody.css('max-width', maxColumnsWidth + "px");
                    columnsBody.outerWidth(maxColumnsWidth);
                }
                var botonMaximizar = tabla.find('button:not(.dtButtonInicializado)[xbrl\\:dt-boton-maximizar]');
                var botonRestaurar = tabla.find('button:not(.dtButtonInicializado)[xbrl\\:dt-boton-restaurar]');

                //botonMaximizar.off('click');
                botonMaximizar.on('click', function () {
                    try {
                        botonMaximizar.hide();
                        botonRestaurar.show();
                        var opcionesFullScreen:shared.modelos.IOpcionesTablaDinamica = opciones ? angular.copy(opciones) : {};
                        opcionesFullScreen.fullScreen = true;
                        var contenedorTabla = botonMaximizar.data("xbrl-contenedor-tabla");
                        if (contenedorTabla) {

                            $util.maximisaElemento(contenedorTabla);
                        } else {

                        $util.maximisaElemento(tabla);
                        }
                        
                        if (!tabla.data(AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ORIGINALES_DINAMIC_TABLE)) {
                            tabla.data(AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ORIGINALES_DINAMIC_TABLE, opciones);
                        }
                        tabla.data(AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ACTUALES_DINAMIC_TABLE, opcionesFullScreen);
                        $util.reAjustaCeldasTabla(tabla, opcionesFullScreen);
                    } catch (exception) {
                        root.AbaxXBRLRootUtilService.errorLog(exception);
                    }
                });
                //botonRestaurar.off('click');
                botonRestaurar.on('click', function () {
                    try {
                        botonMaximizar.show();
                        botonRestaurar.hide();
                        $util.restauraMaximizados();
                        var currentOptions = tabla.data(AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ORIGINALES_DINAMIC_TABLE);
                        tabla.data(abaxXBRL.AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ACTUALES_DINAMIC_TABLE, currentOptions);
                        $util.reAjustaCeldasTabla(tabla, currentOptions);
                    } catch (exception) {
                        root.AbaxXBRLRootUtilService.errorLog(exception);
                    }
                });

                botonMaximizar.addClass('dtButtonInicializado');
                botonRestaurar.addClass('dtButtonInicializado');


                tabla.data(AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ACTUALES_DINAMIC_TABLE, opciones);

                $util.setResizeDTData(tabla);
                //Hilo que monitorea el cabmio de tamaño de la tabla
                if (!$util.existTask('DTResizeMonitor')) {
                    $util.setAsyncTask({ Name: 'DTResizeMonitor', Process: $util.monitorResizeDT, Timeout: 3300, Repeat: true });
                }
                AbaxXBRLUtilsService.incializaElementosCambioTamanio();
                var resizeDTListener = tabla.data('resizeDTListener');
                if (!resizeDTListener) {
                    resizeDTListener = function () {
                        var currentOptions = tabla.data(AbaxXBRLConstantes.ATRIBUTO_OPCIONES_ACTUALES_DINAMIC_TABLE);
                        $util.reAjustaCeldasTabla(tabla, currentOptions);
                    }
                    tabla.data('resizeDTListener', resizeDTListener);
                    $(window).on('resize', resizeDTListener);
                }
            } catch (_exception) {
                root.AbaxXBRLRootUtilService.errorLog(_exception);
            }
        }
        /**
         * Inicializa los elementos que areajustan el tamaño del contenedor de las tablas de excel.
         */
        public static incializaElementosCambioTamanio(): void {

            var elementos = $('#btnOcultarMenu:not(.inicializado),#content a[ng-click="actualizarMostrarListaRoles()"]:not(.inicializado)');
            elementos.each(function (index: number, elemento: Element) {
                var $elemento = $(elemento);
                $elemento.off("click.xbrlDTResize");
                $elemento.on("click.xbrlDTResize", function () {
                    var tablas = $(".dinamic-table-master-container");
                    AbaxXBRLUtilsService.reAjustaCeldasTabla(tablas);
                });
                $elemento.addClass("inicializado");
            });

        } 

        /**
        * Asigna las propiedades para evaluar el cambio de tamaño de un elemento.
        * @param elemento Elemento a evaluar.
        **/
        public static setResizeDTData(elemento: JQuery):void {
            if (!elemento.hasClass('resizeMonitoredDT')) {
                elemento.addClass('resizeMonitoredDT');
            }

            var monitoredHeinght = elemento.outerHeight();
            var monitoredWidth = elemento.outerWidth();
            elemento.data('monitoredHeinght', monitoredHeinght);
            elemento.data('monitoredWidth', monitoredWidth);
        }
        /**
        * Evalua dt para determinar si cambiaron de tamaño.
        **/
        public static monitorResizeDT():void {
            var elementos = $('.resizeMonitoredDT');
            if (elementos.length == 0)
            {
                AbaxXBRLUtilsService.stopTasks('resizeDTListener');
            }

            elementos.each(function () {
                var $this = $(this);
                var currentHeinght = $this.outerHeight();
                var currentWidth = $this.outerWidth();
                var monitoredHeinght = $this.data('monitoredHeinght');
                var monitoredWidth = $this.data('monitoredWidth');

                if (currentHeinght != monitoredHeinght || currentWidth != monitoredWidth) {
                    var resizeTask:Function = $this.data('resizeDTListener');
                    resizeTask();
                    AbaxXBRLUtilsService.setResizeDTData($this);
                }
            });
        }

        
        
        /**
        * Maximiza un elemento determinado para que se muestre sobre todo lo que esta en la pantalla.
        **/
        public static maximisaElemento(bloque: JQuery) {
            try {
                bloque = bloque.first();
                //shared.service.AbaxXBRLUtilsService.restauraMaximizados();
                var overAllSection = $('<section id="sectionSobreTodo" class="sobreTodo"></section>');
                var marca = $('<div id="posicionOriginalElementoMaximizado"></div>');
                var body = $('body');
                bloque.before(marca);
                body.append(overAllSection);
                overAllSection.append(bloque);
                $("body").trigger("abax-maximisaElemento", [bloque, marca, overAllSection]);
            } catch (exception) {
                root.AbaxXBRLRootUtilService.errorLog(exception);
            }
        }
        /**
        * Restaura los elementos maximizados a su contenedor original.
        **/
        public static restauraMaximizados() {
            try {
                var section = $('#sectionSobreTodo:first');
                var bloque = section.children(':first');
                var marca = $('#posicionOriginalElementoMaximizado');
                marca.before(bloque);
                section.remove();
                marca.remove();
                $("body").trigger("abax-restaurarElementoMaximizado", [bloque]);
            } catch (exception) {
                root.AbaxXBRLRootUtilService.errorLog(exception);
            }
        }
        /**
        * Codifica el texto a html.
        * @value Cadena con caracteres especiales que serán codificados a HTML.
        **/
        public static htmlEncode(value:string ):string {
            var cadenaDecodificad: string = new String(value).toString();
            var diccionario = AbaxXBRLCaracteresEspeciales.CaracterHtml;
            for (var claveHtml in diccionario) {
                var caracter = diccionario[claveHtml];
                var matcher = new RegExp(claveHtml, 'g');
                if (matcher.test(value)) {
                    cadenaDecodificad = cadenaDecodificad.replace(matcher, caracter);
                }
            }
            return cadenaDecodificad;
        }

        /**
        * Decodifica texto html a sus caracteres equivalentes.
        * @param value Cadena con el codigo html a decodificar en texto normal.
        **/
        public static htmlDecode(value:string ):string {

            var cadenaDecodificad: string = new String(value).toString();
            var diccionario = AbaxXBRLCaracteresEspeciales.HTMLCaracter;
            for (var claveHtml in diccionario) {
                var caracter = diccionario[claveHtml];
                var matcher = new RegExp(claveHtml, 'g');
                if (matcher.test(value)) {
                    cadenaDecodificad = cadenaDecodificad.replace(matcher, caracter);
                }
            }
            return cadenaDecodificad;
        }


        /**
        * Codifica el texto a xml.
        * @value Cadena con caracteres especiales que serán codificados a XML.
        **/
        public static xmlEncode(value: string): string {
            var cadenaDecodificad: string = new String(value).toString();
            var diccionario = AbaxXBRLCaracteresEspeciales.CaracterXML;
            for (var claveHtml in diccionario) {
                var caracter = diccionario[claveHtml];
                var matcher = new RegExp(claveHtml, 'g');
                if (matcher.test(value)) {
                    cadenaDecodificad = cadenaDecodificad.replace(matcher, caracter);
                }
            }
            return cadenaDecodificad;
        }

        /**
        * Decodifica texto xml a sus caracteres equivalentes.
        * @param value Cadena con el codigo html a decodificar en texto normal.
        **/
        public static xmlDecode(value: string): string {

            var cadenaDecodificad: string = new String(value).toString();
            var diccionario = AbaxXBRLCaracteresEspeciales.XMLCaracter;
            for (var claveHtml in diccionario) {
                var caracter = diccionario[claveHtml];
                var matcher = new RegExp(claveHtml, 'g');
                if (matcher.test(value)) {
                    cadenaDecodificad = cadenaDecodificad.replace(matcher, caracter);
                }
            }
            return cadenaDecodificad;
        }
        /**
        * Rota un elemento determinado
        * @param $elem JQuery de los elementos a afectar.
        * @param angulo Angulo que será rotado, si no se indica o se indica nulo su valor por defecto es 360.
        * @param duracion  Tiempo quedurara la animación de la rontación antes de alcansar su valor final en milisegundos, si no se inidca su valor por defecto es 2000 (2 segundos).
        * @param anguloInicio Angulo inicial del elemento al comenzar la animación, si no se indica o se indica null su valor por defecto es 0.
        * @return Promesa que se cumple cuando se completa la animación.
        **/
        public static animateRotate($elem: JQuery, angulo?: number, duracion?: number, anguloInicio?: number): ng.IPromise<void> {
            // caching the object for performance reasons
            var deferred = AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE.qService.defer<void>();
            try {
                var angle: number = (angulo != undefined && angulo != null) ? angulo : 360;
                var duration: number = duracion > 0 ? duracion : 2000;
                var startAngle: number = (anguloInicio != undefined && anguloInicio != null) ? anguloInicio : 0;
                $({ deg: startAngle }).animate({ deg: angle }, {
                    duration: duration,
                    complete: function () {
                        deferred.resolve();
                    },
                    fail: function () {
                        deferred.reject();
                    },
                    step: function (now) {
                        try {
                            $elem.css({
                                transform: 'rotate(' + now + 'deg)'
                            });
                        } catch (ex) {
                            deferred.reject(ex);
                            throw ex;
                        }
                    }
                });
            } catch (ex) {
                deferred.reject(ex);
            }
            return deferred.promise;
        }
        /**
        * Anima un determinado elemeto referenciado por JQuery variando su angulo repetida mente.
        * @param $elem Elmento de JQuery que se pretende afectar.
        * @param anguloMaximo Variación en el angulo del elemento.
        * @param repeticiones Cantidad de ciclos de variación de angulo a ejecutar en la animación.
        * @param duracion Tiempo que dura la animación.
        * @return Promesa que se cumple al terminar la animación.
        */
        public static animationShakeAngle($elem: JQuery, anguloMaximo?: number, repeticiones?: number, duracion?: number): ng.IPromise<void>  {
            var $util = AbaxXBRLUtilsService;
            var deferred = $util.SINGELTON_SERVICE_INSTANCE.qService.defer<void>();
            try {
                var maxAngle: number = (anguloMaximo != undefined && anguloMaximo != null) ? anguloMaximo : 1;
                var duration: number = duracion > 0 ? duracion : 200;
                var repetitions: number = repeticiones > 0 ? repeticiones : 5;
                var numeroCiclos: number = repetitions;
                var duracionCiclo: number = Math.round((duration / numeroCiclos));
                var indexCiclo: number = 0;
                var variacion: number = maxAngle * 2;
                var anguloInicial: number = 0;


                var evaluaCiclo = function () {
                    if (indexCiclo <= numeroCiclos) {
                        anguloInicial += variacion;
                        variacion = variacion * -1;
                        indexCiclo++;
                        $util.animateRotate($elem, variacion, duracionCiclo, anguloInicial)
                            .then(evaluaCiclo)
                            .catch(function (reason: any) { deferred.reject(reason); });

                    } else {
                        $elem.css({ transform: 'rotate(0deg)' });
                        deferred.resolve();
                    }
                };

                evaluaCiclo();
            } catch (ex) {
                deferred.reject(ex);
            }
            return deferred.promise;
        }
        /**
        * Cambia intermitentemente la opacidad de un elemento.
        * @param $elemento Elemento que se pretende afectar.
        * @param opacidadMinima  Opacidad minima a la que se cambia intermitentemente, por defaut es 0.25
        * @param duracion Duracion de la animación.
        * @param iteraciones Cantidad de veces que se cambia y retorna la opacidad del elemento.
        **/
        public static animacionOpacidad($elemento: JQuery, opacidadMinima?: number, duracion?:number, iteraciones?:number): void {

            var _duracion = duracion > 0 ? duracion : 1000;
            var _opacidadMinima = opacidadMinima > 0 ? opacidadMinima : 0.25;
            var _iteraciones = iteraciones > 0 ? iteraciones : 2;
            var indexIteracion = 0;
            _duracion = Math.round((_duracion / (2 * _iteraciones)) );

            var validaTransparentar = function () {
                indexIteracion++;
                if (indexIteracion < _iteraciones) {
                    transparentar();
                }
            };

            var opacar = function () {
                $elemento.animate({
                    opacity: 1
                }, _duracion, validaTransparentar);
            }
            var transparentar = function () {
                $elemento.animate({
                    opacity: _opacidadMinima
                }, _duracion, opacar);
            }
            transparentar();
        }
        /**
         * Remueve el manejador del evento indicado.
         * @param selector Selector del elemento sobre el que se ejecuta el evento.
         * @param tipoEvento Tipo de evento del que será removido el manejador.
         * @param idManejadorEvento Identificador del manejador.
         */
        public static removerManejadorEvento(selector:string, tipoEvento: string, idManejadorEvento: string): void {

            var $self = AbaxXBRLUtilsService;
            var manejadoresRegistrados = $self.diccionarioManejadoresEventos;
            if (manejadoresRegistrados[selector] && manejadoresRegistrados[selector][tipoEvento] && manejadoresRegistrados[selector][tipoEvento][idManejadorEvento]) {

                var manejador = manejadoresRegistrados[selector][tipoEvento][idManejadorEvento];
                $(selector).off(tipoEvento, manejador);
                manejadoresRegistrados[tipoEvento][idManejadorEvento] = undefined;
                delete manejadoresRegistrados[tipoEvento][idManejadorEvento];
            }
        }
        /**
         * Agrega un manejador de evento.
         * @param selector Selector del elemento sobre el que se agregará el manejador del evento.
         * @param tipoEvento Tipo de evento a manejar.
         * @param idManejadorEvento Identificador que se dara al manejador de evento en caso de que se requiera remover.
         * @param manejadorEvento Manejador del evento.
         * @param remplazar Bandera que indica si el manejador será sustituido en caso de existir, si no se indica y ya existe el manejador no se vuelva a agregar.
         */
        public static agregaManejadorEvento(selector: string, tipoEvento: string, idManejadorEvento: string, manejadorEvento: (eventObject: JQueryEventObject, ...args: any[]) => any, remplazar?: boolean): void {

            var $self = AbaxXBRLUtilsService;
            var manejadoresRegistrados = $self.diccionarioManejadoresEventos;
            if (!manejadoresRegistrados[selector]) {
                manejadoresRegistrados[selector] = {};
            }
            if (!manejadoresRegistrados[selector][tipoEvento]) {
                manejadoresRegistrados[selector][tipoEvento] = {};
            }
            if (manejadoresRegistrados[selector][tipoEvento][idManejadorEvento] && remplazar) {

                $self.removerManejadorEvento(selector, tipoEvento, idManejadorEvento);
            }
            $(selector).on(tipoEvento, manejadorEvento);
            manejadoresRegistrados[selector][tipoEvento][idManejadorEvento] = manejadorEvento;
        }


        /**
       * Método de acceso a la instancia del servicio si la instancia ya existe se retorna y si no existe se crea.
       * @param qService Servicio que encola las solcitudes al sevidor.
       * @param $translate Servicio para el manejo de multi idioma.
       * @param DTOptionsBuilder Servicio para la generación de opciones de un datatable.
       * @param DTInstances Servicio para la obtención de instnacias del datatable.
       * @return Retorna la instancia única del servicio. Si no existe aún la crea.
       * @param $modal Servicio para el manejo de los diálogos modales.
       * @param $timeout Servicio para el manejo de timeot de javascript.
       * @param $rootScope Scope raíz.
       **/
        constructor(
            qService: ng.IQService,
            $translate: ng.translate.ITranslateService,
            $state: ng.ui.IStateService,
            DTOptionsBuilder: any,
            DTInstances: any,
            $modal: ng.ui.bootstrap.IModalService,
            $timeout: ng.ITimeoutService,
            $ocLazyLoad: oc.ILazyLoad,
            $rootScope: any) {
            if (AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE && AbaxXBRLUtilsService.SINGELTON_SERVICE_INSTANCE != null) {
                throw new Error("No se puede hacer referencia directa al constructor de este servicio, se debe de utilizar el método factory().");
            }
            if (!qService || !$translate || !$state || !DTOptionsBuilder || !DTInstances || !$modal || !$timeout || !$ocLazyLoad || !$rootScope) {
                throw new Error("No fue posible generar  una instancia del servicio puesto que faltan uno ó mas parametros del construcotr.");
            }
            this.alertasBootstrap = [];

            this.qService = qService;
            this.$translate = $translate;
            this.$state = $state;
            this.DTOptionsBuilder = DTOptionsBuilder;
            this.DTInstances = DTInstances;
            this.$modal = $modal;
            this.$timeout = $timeout;
            this.$ocLazyLoad = $ocLazyLoad;
            this.$rootScope = $rootScope;
        }
    }

}
 