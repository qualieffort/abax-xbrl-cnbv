/// <reference path="../../../../scripts/typings/raven-sentry/raven.ts" />
/// <reference path="../../../../scripts/typings/freshwidget/freshwidget.ts" />
module abaxXBRL.root {

    /**
   * Clase que funje como repositorio de las constantes de la raíz de la aplicasión.
   **/
    export class AbaxXBRLConstantesRoot { 
        /** Información de la version de la aplicación */
        public static VERSION_APP: {
            /* La version publicada junto con la revisión, este dato se utiliza para evitar el cache en las solicitudes de los elementos estáticos. */
            version: string;
            /* El nombre del TAG */
            tag: string;
            /* El numero de la revision de SVN */
            revision: string;
            /* Url del servidor donde se instalo la versión */
            url: string;
            /**Bandera que indica si se esta en modo debug. **/
            debug: boolean;
            /**Bandera que india si se debe de procesar como una versiónn liberada. **/
            release: boolean;
            /**Bandera que india si se trata de un single Sign On. **/
            sso: boolean;
            /**
            * Bandera que indica que si se debe de activar las sección de fideicomisos.
            **/
            fideicomisos: boolean;
            /**
            * Parannetro que indica que la aplicación debe intentar auto autenticarse al iniciar.
            **/
            logeoAutomatico: boolean;
            /**
            * Bandera que indica si se deben de mostrar los terminos y condiciones en el login.
            **/
            mostrarTerminosCondiciones: boolean;
            /**
            * Etiqueta que se muestra en aquellas secciones de la app donde se indica la versión.
            **/
            etiquetaVersion;
            /**
            * Diccionario con los parametros asignados.
            **/
            paramsSet: { [nombre: string]: string };
            /**
            * Identificador del estilo personalizado que será utilizado por la aplicación.
            **/
            estiloPersonalizado?: string;

            /**
            * Define la url que debera de mostrar como el visor externo
            */
            urlVisorExterno?: string;
        };

        /**
        * Nombre de paramaetro con la versión actual de la aplicación. 
        **/
        public static get NOMBRE_PARAMETRO_VERSION(): string { return "versionApp"; }

        /**
        * Indica si corresponde a un single sign on. 
        **/

        public static get ES_SINGLE_SIGN_ON(): string { return "esSso"; }
        /**
        * Indica si se deben de activar la funcionalidad de fideicomisos.
        **/
        public static get FIDEICOMISOS_ON(): string { return "fideicomisosOn"; }
        /**
        * Atributo para personalizar los estilos de la aplicación.
        **/
        public static get ESTILOS_PERSONALIZADOS(): string { return "customStyle"; }
        /**
        * Nombre de paramaetro con el tag de svn actual de la aplicación. 
        **/
        public static get NOMBRE_PARAMETRO_TAG(): string { return "tagApp"; }
        /**
        * Nombre de paramaetro con la revisión del svn actual de la aplicación. 
        **/
        public static get NOMBRE_PARAMETRO_REVISION(): string { return "revisionApp"; }
        /**
        * Nombre del parametro que indica si debe tratarse como una versión liberada.
        **/
        public static get NOMBRE_PARAMETRO_RELEASE(): string { return "release"; }
        /**
        * Nombre modulo que inicializa
        **/
        public static get NOMBRE_MODULO_ABAX_XBRL_RAIZ(): string { return "abaxXBRL"; }
        /**
        * Nombre modulo angular principal de la aplicación. 
        **/
        public static get NOMBRE_MODULO_ABAX_XBRL_PRINCIPAL(): string { return "abaxXBRL.main"; }
        /**
        * Nombre modulo angular principal de la aplicación. 
        **/
        public static get NOMBRE_MODULO_ABAX_XBRL_INICIO(): string { return 'abaxXBRL.inicio'; }
        /**
        * Nombre modulo angular para el manejo de excepciones. 
        **/
        public static get NOMBRE_MODULO_ABAX_XBRL_MANEJO_EXCEPCIONES(): string { return 'abaxXBRL.exceptionHandler'; }
        /**
        * Nombre modulo angular para el editor xbrl. 
        **/
        public static get NOMBRE_MODULO_ABAX_XBRL_EDITOR(): string { return 'abaxXBRLViewer'; }
        /**
        * Nombre modulo angular para el visor xbrl. 
        **/
        public static get NOMBRE_MODULO_ABAX_XBRL_VISOR(): string { return 'abaxVisorXBRLViewer'; }

        /**
        * Nombre modulo angular para el estado de cambios al captial contable.
        **/
        public static get NOMBRE_MODULO_ESTADO_CAMBIOS_CAPITAL_CONTABLE(): string { return 'abaxXBRLEstadoVariacionesViewer'; }
        /**
        * Nombre modulo angular para el estado de cambios al captial contable.
        **/
        public static get NOMBRE_MODULO_ESTADO_CAMBIOS_CAPITAL_CONTABLE_CNBV(): string { return 'abaxXBRLEstadoVariacionesViewerCNBV'; }
        /**
        * Nombre modulo angular para el estado de cambios al captial contable IFRS 2019
        **/
        public static get NOMBRE_MODULO_ESTADO_CAMBIOS_CAPITAL_CONTABLE_CNBV_2019(): string { return 'abaxXBRLEstadoVariacionesViewerCNBV2019'; }
        /**
        * Nombre modulo angular para el desglose de creditos.
        **/
        public static get NOMBRE_MODULO_DESGLOSE_CREDITOS(): string { return 'abaxXBRLDesgloseCreditosViewer'; }
        /**
        * Nombre modulo angular para el desglose de creditos.
        **/
        public static get NOMBRE_MODULO_DESGLOSE_CREDITOS_CNBV(): string { return 'abaxXbrlDesgloseCreditosViewerCNBV'; }
        /**
        * Nombre modulo angular para el desglose de creditos IFRS 2019.
        **/
        public static get NOMBRE_MODULO_DESGLOSE_CREDITOS_CNBV_2019(): string { return 'abaxXbrlDesgloseCreditosViewerCNBV2019'; }
        /**
        * Nombre modulo angular para la distribucion de ingresos por producto.
        **/
        public static get NOMBRE_MODULO_DISTRIBUCION_INGRESOS_PRODUCTO(): string { return 'abaxXBRLDistribucionIngresosModule'; }
        /**
        * Nombre modulo angular para la distribucion de ingresos por producto.
        **/
        public static get NOMBRE_MODULO_DISTRIBUCION_INGRESOS_PRODUCTO_CNBV(): string { return 'abaxXBRLDistribucionIngresosModuleCNBV'; }
        /**
        * Nombre modulo angular para la distribucion de ingresos por producto IFRS 2019.
        **/
        public static get NOMBRE_MODULO_DISTRIBUCION_INGRESOS_PRODUCTO_CNBV_2019(): string { return 'abaxXBRLDistribucionIngresosModuleCNBV2019'; }
        /**
        * Nombre módulo angular para la edición de 
        **/
        public static get NOMBRE_MODULO_EVENTOS_RELEVANTES(): string { return 'abaxXBRLEventosRelevantesModule'; }
        /**
        * Nombre módulo angular para la edición de 
        **/
        public static get NOMBRE_MODULO_EVENTOS_RELEVANTES2017(): string { return 'abaxXBRLEventosRelevantesModule2017'; }
        /**
        * Nombre modulo angular para la distribucion de series.
        **/
        public static get NOMBRE_MODULO_SERIES(): string { return 'abaxXBRLSeriesModule'; }



    }

    /**
    * Utilerias genericas para la carga inicial.
    **/
    export class AbaxXBRLRootUtilService {

        /**
        * Instancia única del objeto.
        **/
        private static SELF_INSTANCE: AbaxXBRLRootUtilService;
        /**
        * Retorna la instancia única de la clase.
        * @return Instancia única.
        **/
        public static getInstnce(): AbaxXBRLRootUtilService {
            if (!AbaxXBRLRootUtilService.SELF_INSTANCE || !AbaxXBRLRootUtilService.SELF_INSTANCE == null) {
                AbaxXBRLRootUtilService.SELF_INSTANCE  = new AbaxXBRLRootUtilService();
            }
            return AbaxXBRLRootUtilService.SELF_INSTANCE;
        }

        /**
        * Evalua el valor de un parametro y lo retonra sin espacios o retorna desconocido si no fue asignado.
        * @param parametro Valor de parametro a evaluar.
        * @return Valor del parametro sin espacios o la cadena 'desconocido' si no fue asignado.
        **/
        private evaluaParametro(parametro: string): string {
            var evaluado: string = 'desconocida';
            if (parametro && parametro != null && parametro.trim().length > 0) {
                evaluado = parametro.trim();
            }
            return evaluado;
        }
        /**
        * Obtienen los parametros de la url.
        * @return Diccionario con los parametros y sus valores.
        **/
        private getParametrosCargaInicial(): { [name: string]: string } {
            var vars: { [name: string]: string } = {};
            var script = $('script[src*="abax-xbrl-carga-inicial-app.js"]');
            if (script.length == 0) {
                script = $('script[src*="' + AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_RAIZ + '.js"]');
            }
            var url = script.attr('src');
            if (url && url != null) {
                var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi,
                    function (m, key, value): string {
                        vars[key] = value;
                        return "";
                    });
            }
            return vars;
        }
        /**
        * Obtiene los parametros de configuración directo del servidor.
        **/
        private obtenParametrosConfiguracionServidor() {
            var configuracion: { [nombre: string]: string } = null;
            try {
                $.ajax({
                    type: 'POST',
                    url: "Login/ObtenConfiguracionInicial",
                    success: function (result: any) {
                        configuracion = result;
                    },
                    async: false
                });

                if (configuracion) {
                    if (configuracion["esSso"]) {
                        AbaxXBRLConstantesRoot.VERSION_APP.sso = (configuracion["esSso"] == "true");
                    }
                    if (configuracion["fideicomisosOn"]) {
                        AbaxXBRLConstantesRoot.VERSION_APP.fideicomisos = (configuracion["fideicomisosOn"] == "true");
                    }
                    if (configuracion["customStyle"]) {
                        AbaxXBRLConstantesRoot.VERSION_APP.estiloPersonalizado = configuracion["customStyle"];
                    }
                    if (configuracion["logeoAutomatico"]) {
                        AbaxXBRLConstantesRoot.VERSION_APP.logeoAutomatico = (configuracion["logeoAutomatico"] == "true");
                    }
                    if (configuracion["mostrarTerminosYConndiciones"]) {
                        AbaxXBRLConstantesRoot.VERSION_APP.mostrarTerminosCondiciones = (configuracion["mostrarTerminosYConndiciones"] == "true");
                    }

                    if (configuracion["UrlVisorExterno"]) {
                        AbaxXBRLConstantesRoot.VERSION_APP.urlVisorExterno = configuracion["UrlVisorExterno"];
                    }


                }
            } catch (error) {
                this.enviaErrorSentry(error);
            }
            return configuracion;
        }
        /**
        * Cargamos los parametros de versión.
        **/
        public cargaParametrosVersion(): void {
            var self = this;
            var params = self.getParametrosCargaInicial();
            var releaseParam:string = params[AbaxXBRLConstantesRoot.NOMBRE_PARAMETRO_RELEASE];

            var versionApp: string = self.evaluaParametro(params[AbaxXBRLConstantesRoot.NOMBRE_PARAMETRO_VERSION]);
            var esSsoParam: string = params[AbaxXBRLConstantesRoot.ES_SINGLE_SIGN_ON];
            var fideicomisosParam: string = params[AbaxXBRLConstantesRoot.FIDEICOMISOS_ON];

            var tagApp: string = self.evaluaParametro(params[AbaxXBRLConstantesRoot.NOMBRE_PARAMETRO_TAG]);
            var revisionApp: string = self.evaluaParametro(params[AbaxXBRLConstantesRoot.NOMBRE_PARAMETRO_REVISION]);
            var releaseApp: boolean = releaseParam && releaseParam != null ? releaseParam.toLowerCase() == "true" : false;
            var esSsoApp: boolean = esSsoParam && esSsoParam != null ? esSsoParam.toLowerCase() == "true" : false;
            var fideicomisosOn: boolean = fideicomisosParam ? fideicomisosParam.toLocaleLowerCase() == "true" : false;
            var claveEstiloPersonalizado: string = params[AbaxXBRLConstantesRoot.ESTILOS_PERSONALIZADOS];

            var debugApp = versionApp.toUpperCase().indexOf("SNAPSHOT") != -1;
            //Asignamos los elmentos de la donstante con la versión
            AbaxXBRLConstantesRoot.VERSION_APP = {
                version: (versionApp + '-' + revisionApp),
                tag: versionApp,
                revision: versionApp,
                url: '',
                debug: debugApp,
                release: releaseApp,
                paramsSet: params,
                sso: esSsoApp,
                etiquetaVersion: versionApp,
                fideicomisos: fideicomisosOn,
                estiloPersonalizado: claveEstiloPersonalizado,
                logeoAutomatico: false,
                mostrarTerminosCondiciones: false
            };
            self.obtenParametrosConfiguracionServidor();
        }
        /**
        * Intenta imprimir en el log el mensaje ingresado.
        * @param exception Mensaje u objeto a imprimir en el log.
        **/
        public static errorLog(exception: any): void {
            try {
                var error = exception.stack ? exception.stack : exception;

                if (console) {
                    if (console.error) {
                        console.error(error);
                    } else {
                        if (console.log) {
                            console.log(error);
                        }
                    }
                }
            } catch (errorWriteLog) {
                AbaxXBRLRootUtilService.errorLog(errorWriteLog);
            }
        }

        /**
        * Intenta enviar a sentry un error.
        * @param exception Excepsion ocurrida.
        * @param data Objeto con datos adincionales, es opcional.
        **/
        public enviaErrorSentry(exception: any, data?: any): void {

            setTimeout(function () {
                AbaxXBRLRootUtilService.errorLog(exception);
                if (root.AbaxXBRLConstantesRoot.VERSION_APP.debug) {
                    return;
                }
                //try {
                //    if (Raven && Raven.captureException) {

                //        if (data && data != null) {
                //            Raven.captureException(exception, data);
                //        } else {
                //            Raven.captureException(exception);
                //        }
                //    }
                //} catch (error) {
                //    AbaxXBRLRootUtilService.errorLog(error);
                //}
            }, 3);
        }

        /**
        * Inicializa la utilería para el reporteo de errores a sentry.
        **/
        public inicializaRaven(): void {
            var debugApp: boolean = AbaxXBRLConstantesRoot.VERSION_APP.debug;
            var versionApp: string = AbaxXBRLConstantesRoot.VERSION_APP.version;
            try {
                //if (Raven && Raven != null && !debugApp) {
                //    if (Raven.config && Raven.config != null) {
                //        Raven.config('https://68280a2802ad4a7c8a6cadc341f80601@app.getsentry.com/39177', {}).install();
                //    }
                //    if (Raven.setReleaseContext && Raven.setReleaseContext != null) {
                //        Raven.setReleaseContext(versionApp);
                //    }
                //}
            } catch (error) {
                AbaxXBRLRootUtilService.errorLog(error);
            }
        }

        /**
        * Inicializa los elmentos de la utilería para el soporte tecnico.
        **/
        public inicializaFreshwidget(): void {
            try {

                FreshWidget.init("", {
                    "queryString": "&widgetType=popup&formTitle=Ayuda+y+Soporte&submitThanks=%C2%A1Gracias+por+sus+comentarios!",
                    "widgetType": "popup",
                    "buttonType": "text",
                    "buttonText": "Soporte Técnico",
                    "buttonColor": "black",
                    "buttonBg": "#ffcc33",
                    "alignment": "3",
                    "offset": "235px",
                    "submitThanks": "¡Gracias por sus comentarios!",
                    "formHeight": "500px",
                    "url": "https://soporte.2hsoftware.com.mx"
                });
            } catch (error){
                AbaxXBRLRootUtilService.errorLog(error);
            }
        }

        /**
        * Inicializa las utilerias y componentes genericos de la aplicación.
        **/
        public inicializaApp():void {
            this.cargaParametrosVersion();

            //this.inicializaRaven();
            this.inicializaFreshwidget();
        }
        /**
        * Crea un modulo con todas las dependencias js.
        **/
        public static generaModuloRaiz(): oc.ILazyLoadModuleConfig {
            var dependenciasRoot: Array<string> = [];
            jQuery('script').each(function (index: number, element: Element) {
                var $this = jQuery(this);
                var src = $this.attr('src');
                if (!src || src == null) {
                    return;
                }
                if (src.indexOf("https://") != -1 || src.indexOf("http://") != -1 || src.indexOf("//cdn.ravenjs.com") != -1) {
                    return;
                }
                dependenciasRoot.push(src);
            });
             
            var moduloRaiz: oc.ILazyLoadModuleConfig = {
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_RAIZ,
                files: dependenciasRoot,
                reconfig: false,
                cache: true,
                serie: true
            }
            return moduloRaiz;
        }
        /**
        * Manda a la consola el comando necesario para ofuscar el código js.
        * @param publishPath Path del directorio destino de los archivos ofuscados, por defecto "..\\publishAbaxXBRL".
        **/
        public static getUglifyBatContent(publishPath?:string):string {
            var content: string = "";
            var deleteContent: string = "";
            var diagonal = new RegExp('/', 'g')
            var modulos: Array<oc.ILazyLoadModuleConfig> = angular.copy(AbaxXBRLDependencyLoadConfig.MODULOS_ABAX);

            if (!publishPath) {
                publishPath = "..\\publishAbaxXBRL";
            }

            var copiaTaxonomias = "\nxcopy /s ..\\Taxonomias\\*.* " + publishPath + '\\';
            var copiaIndexModificado = "\ncopy /Y .\\index.html.release " + publishPath + "\\index.html";

            for (var indexModulo: number = 0; indexModulo < modulos.length; indexModulo++) {
                var modulo = modulos[indexModulo];
                content += '\necho procesando ' + modulo.name;
                content += '\ncall uglifyjs ';
                for (var indexSrc: number = 0; indexSrc < modulo.files.length; indexSrc++) {
                    var src = modulo.files[indexSrc];
                    var indexVars = src.indexOf('?');
                    if (indexVars != -1) {
                        src = src.substring(0,indexVars);
                    }
                    if (src.indexOf(".css") != -1 || AbaxXBRLDependencyLoadConfig.noEsOfuscable(src)) {
                        continue;
                    }
                    content += ' ".\\' + src.trim() + '"';
                    deleteContent += '\ndel ".\\' + src.trim() + '"';
                    deleteContent += '\ndel ".\\' + src.trim() + '.map"';
                }
                content += '  -o ' + publishPath + '"\\abax-xbrl\\' + modulo.name + '.js"';
            }
            content += "\ncd " + publishPath;
            content += deleteContent;
            content = content.replace(diagonal, '\\');
            content += '\necho UGLIFY FINISH\ncmd\n\n\n';
            content = "\n\n\n" + copiaIndexModificado + copiaTaxonomias + content;
            
            return content;

        }

        /**
        * Constructor de la clase.
        **/
        constructor() { }

    }
    //Cargamos los parametros de version
    AbaxXBRLRootUtilService.getInstnce().inicializaApp();

    /**Clase que configura las dependencias de cada uno de los modulos angular que se cargan en la vista del sistema (excepto el modulo raíz) **/
    export class AbaxXBRLDependencyLoadConfig {
        /**Provedor del servicio a configurar. **/
        private $ocLazyLoadProvider: oc.ILazyLoadProvider;

        /**
        * Crea la configuración para el modulo principal de abax xbrl.
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_MODULO_ABAX_XBRL(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_PRINCIPAL,
                //Dependencias
                files: [
                //Estilos generales para todos los componentes del sitio
                    "css/bootstrap.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/font-awesome.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/animate.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/angular-motion.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/bootstrap-additions.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/angular-aside/angular-aside.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/icon.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/font.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/app.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/materialApoyo.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "Scripts/datatables/datatables.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "Scripts/impromptu/jquery-impromptu.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/select.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/select2.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                //Constantes
                    "abax-xbrl/shared/constantes/abax-xbrl-codigo-tecla-enum.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/constantes/abax-xbrl-estilos-personalizados.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Modelos
                    "abax-xbrl/shared/modelos/i-resultado-operacion.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-session.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-usuario.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-emisora.login.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-credencial.login.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Servicios
                    "abax-xbrl/shared/services/abax-xbrl-request-service.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/services/abax-xbrl-session-service.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/services/abax-xbrl-utils-service.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/login/abax-xbrl-login-service.login.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Controllers
                    "abax-xbrl/componentes/inicio/raiz/abax-xbrl-inicio-controller.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/login/abax-xbrl-login-controller.login.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/raiz/abax-xbrl-main-controller.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/login/enviar-password/abax-xbrl-olvido-contrasena-controller.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Inicializadores
                    "abax-xbrl/shared/utilerias/init/abax-xbrl-root-scope-init.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Directivas
                //Configuracion
                //"abax-xbrl/shared/modulos/principal/config/abax-xbrl-main-dependency-modules-config.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modulos/principal/config/abax-xbrl-main-local-storage-config.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modulos/principal/config/abax-xbrl-main-routes-config.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modulos/principal/config/abax-xbrl-main-translate-config.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Modulos
                    "abax-xbrl/shared/modulos/principal/abax-xbrl-main-module.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Crea la configuración para el modulo de toda la sección de inicio (Home) que se carga una vez que se inicia sesión. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_MODULO_INICIO(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_INICIO,
                //Dependencias
                files: [
                //Estilos css
                    "js/datepicker/datepicker.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "Scripts/chosen/chosen.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "Scripts/chosen/chosen-spinner.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/json-formatter/json-formatter.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",

                //Archivos no TS
                    "js/autoNumeric/autoNumeric-1.9.22.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/chosen/chosen.jquery.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/chosen/chosen.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/moment/moment.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/dirPagination.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/FileSaver.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/datepicker/bootstrap-datepicker.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/wizard/jquery.bootstrap.wizard.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/datepicker/locales/bootstrap-datepicker.es.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/json/jquery.json.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/xregexp/xregexp-all-min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/smartresize/jquery.smartresize.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/charts/easypiechart/jquery.easy-pie-chart.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/charts/easypiechart/abax-easy-pie-chart.init.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Utilerias locales
                    "ts/JQuery/jQuery.hh.treetable.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/xml2json/xml2json.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/utileriasAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/utilerias/gramaticas/abax-xbrl-gramatica-util.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/jQuery/pluginsXbrl.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Constantes
                    "abax-xbrl/shared/constantes/abax-xbrl-constantes.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/constantes/abax-xbrl-tipo-contexto-enum.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/constantes/abax-xbrl-facultades.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/constantes/abax-xbrl-paleta-colores-materiales.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/constantes/abax-xbrl-caracteres-especiales.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Modelos
                    "abax-xbrl/shared/modelos/i-consulta-xbrl.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-accion-auditable.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-alerta.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-contexto.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-documento-instancia.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-empresa.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-modulo.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-registro-auditoria.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-resultado-operacion.root.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-consulta-repositorio.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-hecho.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-facultad.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-rol.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-alerta-bootsrap.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-alerta-bootsrap.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-categoria-facultad.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-grupo-usuarios.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-material-apoyo.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-consulta-analisis-concepto.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-consulta-analisis-entidad.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-consulta-analisis-periodo.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-consulta-analisis.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-opciones-tabla-dinamica.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-opciones-async-task.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-opciones-tool-tip.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-taxonomia-xbrl.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-tipo-empresa.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-elemento-lista-detalle.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-paginacion-simple.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-destinatario-notificacion.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-lista-notificacion.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/modelos/i-easy-pie-chart.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Controllers
                    "abax-xbrl/componentes/inicio/cabecera/abax-xbrl-cabecera-inicio-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/inicio/barra-navegacion/abax-xbrl-barra-navegacion-inicio-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/panel-control/abax-xbrl-panel-control-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/alertas/abax-xbrl-alertas-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/consulta-repositorio/abax-xbrl-consulta-repositorio-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/roles/index/abax-xbrl-roles-index-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/roles/borrar-rol/abax-xbrl-borrar-rol-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/roles/facultades-rol/abax-xbrl-facultades-rol-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/empresa/indice/abax-xbrl-indice-empresa-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/empresa/agrega/abax-xbrl-agrega-empresa-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/empresa/edita/abax-xbrl-edita-empresa-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/empresa/elimina/abax-xbrl-elimina-empresa-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/empresa/asignar-tipos/abax-xbrl-asignar-tipos-empresa-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/empresa/asignar-fiduciarios/abax-xbrl-asignar-fiduciarios-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/empresa/asignar-fideicomisos-a-representante-comun/abax-xbrl-asignar-fiduciarios-a-representante-comun-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/usuario/indice/abax-xbrl-indice-usuario-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/lista-documentos-instancia/elimina/abax-xbrl-elimina-documento-instancia-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/usuario/agrega/abax-xbrl-agrega-usuario-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/usuario/edita/abax-xbrl-edita-usuario-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/usuario/elimina/abax-xbrl-elimina-usuario-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/usuario/cambia_contrasena/abax-xbrl-cambia-contrasena-usuario-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/usuario/asigna_emisoras/abax-xbrl-asigna-emisoras-usuario-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/grupos/index/abax-xbrl-grupos-index-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/grupos/asignar-roles/abax-xbrl-roles-grupos-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/grupos/asignar-usuarios/abax-xbrl-usuarios-grupo-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/usuario/asignar-rol/abax-xbrl-roles-usuarios-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/bitacora/index/abax-xbrl-bitacora-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/bitacora/depurar/abax-xbrl-depurar-bitacora-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/bitacora/confirmar/abax-xbrl-confirmar-depurar-bitacora-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/ayuda/abax-xbrl-ayuda-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/consulta-xbrl/abax-xbrl-consulta-xbrl-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/editor-xbrl/abax-xbrl-editor-xbrl-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/visor-xbrl/abax-xbrl-visor-xbrl-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/lista-documentos-instancia/abax-xbrl-lista-documentos-instancia-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/inicio/raiz/alerta-cookies/abax-xbrl-alerta-cookes-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/dialogos-comunes/confirmar/abax-xbrl-dialogo-confirmacion-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/dialogos-comunes/detalle-listado/abax-xbrl-dialogo-lista-detalle-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/utilerias/abax-xbrl-migrar-version-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-consulta-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-configuracion-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-ejecutar-consulta.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-mostrar-consulta.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/fideicomisos/edicion/abax-xbrl-edicion-fideicomiso-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/fideicomisos/listado/abax-xbrl-lista-fideicomisos-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/listas-notificacion/listas/editar/abax-xbrl-editar-lista-notificacion-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/listas-notificacion/listas/listado/abax-xbrl-listado-listas-notificaciones-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/modeloAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    //"ts/utileriasAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/dialogos-comunes/alerta/abax-xbrl-dialogo-alerta-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/tipo-empresa/listado-tipo-empresa/abax-xbrl-listado-tipo-empresa-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/tipo-empresa/editar-tipo-empresa/abax-xbrl-editar-tipo-empresa-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/tipo-empresa/asignar-taxonomias/abax-xbrl-asignar-taxonomias-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/taxonomias/editar-taxonomia/abax-xbrl-editar-taxonomia-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/taxonomias/listado-taxonomias/abax-xbrl-listado-taxonomia-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/bitacora-version-documento/listado/abax-xbrl-listado-bitacora-version-documento-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/bitacora-archivo-bmv/listado/abax-xbrl-listado-bitacora-archivo-bmv-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    //Personas responsables
                    "abax-xbrl/componentes/contenido/consulta-personas-responsables/listado/abax-xbrl-consulta-personas-responsables-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    // Reportes - Administradores
                    "abax-xbrl/componentes/contenido/reporte-administradores/listado/abax-xbrl-consulta-administradores-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    // Reportes- Resumen información 4D
                    "abax-xbrl/componentes/contenido/reportes/resumen-informacion-reportes-4D/abax-xbrl-consulta-resumen-informacion-reportes-4D-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    //Envios por taxonomía
                    "abax-xbrl/componentes/contenido/consulta-envios-taxonomia/listado/abax-xbrl-consulta-envios-taxonomia-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    //Otros reportes
                    "abax-xbrl/componentes/contenido/reportes/otros-reportes/abax-xbrl-consulta-reportes-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    //Reporte Descripción por sectores.
                    "abax-xbrl/componentes/contenido/reportes/descripcion-por-sectores/abax-xbrl-reporte-descripcion-por-sectores-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    //Reporte Calculo de materialidad.
                    "abax-xbrl/componentes/contenido/reportes/calculo-materialidad/abax-xbrl-reporte-calculo-materialidad-controller.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "abax-xbrl/componentes/contenido/grupo-empresa/editar-grupo-empresas/abax-xbrl-editar-grupo-empresas-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/grupo-empresa/listado-grupo-empresas/abax-xbrl-listado-grupo-empresas-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/grupo-empresa/asignar-empresas/abax-xbrl-asignar-empresas-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/empresa/asignar-grupo-empresa/abax-xbrl-asignar-grupo-empresas-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/parametro-sistema/editar-parametro-sistema/abax-xbrl-editar-parametro-sistema-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/parametro-sistema/listado-parametro-sistema/abax-xbrl-listado-parametro-sistema-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/listas-notificacion/destinatarios/editar/abax-xbrl-editar-destinatario-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/listas-notificacion/destinatarios/listado/abax-xbrl-listado-destinatarios-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/consultas-repo-admin/listado/abax-xbrl-listado-consultas-repositorio-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/consultas-repo-admin/editar/abax-xbrl-editar-consulta-repositorio-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/contenido/consulta-xbrl/dialogo-guardar/abax-xbrl-dialogo-nueva-consulta-repositorio-xbrl-controller.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Directivas
                    "abax-xbrl/componentes/inicio/cabecera/abax-xbrl-cabecera-inicio-directive.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/inicio/barra-navegacion/abax-xbrl-barra-navegacion-inicio-directive.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/directivas/splash-contenido/abax-xbrl-splash-contenido-directive.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/directivas/start-view-state/abax-xbr-estado-inicial-vista-directive.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/directivas/xbrl-resize/xbrl-resize.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/directivas/editor-aritmetico/abax-xbrl-editor-aritmetico-directive.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/directivasEditorGenerico.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/directivas/charts/abax-easy-pie-chart/abax-easy-pie-chart.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Filtros
                    "abax-xbrl/shared/filtros/abax-xbrl-asigna-filter.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/filtros/abax-xbrl-corta-texto-filter.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Configuracion
                    "abax-xbrl/shared/modulos/inicio/config/abax-xbrl-inicio-routes-config.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                //Definicion del Modulo
                    "abax-xbrl/shared/modulos/inicio/abax-xbrl-inicio-module.inicio.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Crea la configuración para el modulo de toda la sección de xbrl. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_MODULO_EDITOR_XBRL(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_EDITOR,
                //Dependencias
                files: [
                    "js/datepicker/datepicker.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/slider/slider.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/chosen/chosen.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",

                    "js/impromptu/jquery-impromptu.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/intro/introjs.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/toolbartip/jquery.toolbars.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/datatables/datatables.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/layout-default.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",

                    "js/fullscreen/jquery.fullscreen-min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/app.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/slimscroll/jquery.slimscroll.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/xregexp/xregexp-all-min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/jQuery/pluginsXbrl.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/datepicker/bootstrap-datepicker.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/datepicker/locales/bootstrap-datepicker.es.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/app.plugin.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/jquery-ui-1.10.3.custom.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/jquery.ui.touch-punch.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/autocomplete/jquery.autocomplete.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/impromptu/jquery-impromptu.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/toolbartip/jquery.toolbar.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,


                    "Scripts/angular-animate.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-cookies.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-resource.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-route.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-sanitize.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-file-upload-shim.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-file-upload.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/slimscroll/angular-slimscroll.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/scrollto/jquery.scrollTo.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/mask/masks.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/autoNumeric/autoNumeric-1.9.22.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/datepicker/moment.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/ckeditor/ckeditor.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/ngckeditor/angular-ckeditor.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/json/jquery.json.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/math/math.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/math/decimal-min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/intro/intro.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/angular-ui/ui-bootstrap-custom-0.12.0.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/angular-ui/ui-bootstrap-custom-tpls-0.12.0.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/angular-aside/angular-aside.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/intro/angular-intro.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/xml2json/xml2json.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/livequery/jquery.livequery.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/fileDownload/jquery.fileDownload.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/fileDownload/jquery.fileDownload.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/directivas/xbrl-resize/xbrl-resize.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                //"ts/abax.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/componentes/editor-xbrl/error-carga-taxonomia/abax-xbrl-error-carga-taxonomia-controller.editorXbrl.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/utileriasAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/modeloAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/modeloPlantillaAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/serviciosAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/serviciosLogout.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/controladoresAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/directivasAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/elegirPlantillaAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    
                    "ts/templates/taxonomias/ifrs_mx_20141205/extensions/desgloseCreditos.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    //"ts/templates/taxonomias/eventos-relevantes-2016-08-22/extensions/eventosRelevantes.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/templates/taxonomias/eventos-relevantes-2017-08-01/extensions/eventosRelevantes.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/templates/taxonomias/definiciones/extensions/ArProsBasePlantilla.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/versionesDocumentoAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/usuariosDocumentoAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/elegirPlantillaAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/editorXbrl.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version

                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Crea la configuración para el modulo de toda la sección de xbrl. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_MODULO_VISOR_XBRL(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_VISOR,
                //Dependencias
                files: [
                    "Scripts/angular-ui-tree/angular-ui-tree.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-ui-tree/angular-ui-tree.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
					"js/datepicker/datepicker.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/slider/slider.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/chosen/chosen.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/impromptu/jquery-impromptu.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/intro/introjs.min.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/toolbartip/jquery.toolbars.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "js/datatables/datatables.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",
                    "css/layout-default.css?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css",

                    "js/app.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/slimscroll/jquery.slimscroll.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/xregexp/xregexp-all-min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/jQuery/pluginsXbrl.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/datepicker/bootstrap-datepicker.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/datepicker/locales/bootstrap-datepicker.es.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/app.plugin.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/jquery-ui-1.10.3.custom.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/jquery.ui.touch-punch.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/autocomplete/jquery.autocomplete.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/impromptu/jquery-impromptu.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/toolbartip/jquery.toolbar.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,


                    "Scripts/angular-animate.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-cookies.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-resource.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-route.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-sanitize.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-file-upload-shim.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "Scripts/angular-file-upload.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/slimscroll/angular-slimscroll.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/mask/masks.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/autoNumeric/autoNumeric-1.9.22.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/datepicker/moment.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/ckeditor/ckeditor.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/ngckeditor/angular-ckeditor.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,

                    "js/json/jquery.json.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/math/math.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/intro/intro.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/angular-ui/ui-bootstrap-custom-0.12.0.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/angular-ui/ui-bootstrap-custom-tpls-0.12.0.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/angular-aside/angular-aside.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/intro/angular-intro.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/xml2json/xml2json.min.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/livequery/jquery.livequery.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "js/fileDownload/jquery.fileDownload.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "abax-xbrl/shared/directivas/xbrl-resize/xbrl-resize.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/utileriasAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/modeloAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/modeloPlantillaAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/serviciosAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/serviciosLogout.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/controladoresAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/directivasAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/elegirPlantillaAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    
                    "ts/versionesDocumentoAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/usuariosDocumentoAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/elegirPlantillaAbax.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                    "ts/visorXbrl.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }
        
        /**
        * Crea la configuración para el modulo estado de variación al captial contable. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_ESTADO_CAMBIOS_CAPITAL_CONTABLE(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_ESTADO_CAMBIOS_CAPITAL_CONTABLE,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20141205/extensions/estadoVariacionesCapitalContable.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }
       /**
        * Crea la configuración para el modulo estado de variación al captial contable. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_ESTADO_CAMBIOS_CAPITAL_CONTABLE_CNBV(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_ESTADO_CAMBIOS_CAPITAL_CONTABLE_CNBV,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20180820/extensions/estadoVariacionesCapitalContable.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Crea la configuración para el modulo estado de variación al captial contable IFRS 2019. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_ESTADO_CAMBIOS_CAPITAL_CONTABLE_CNBV_2019(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_ESTADO_CAMBIOS_CAPITAL_CONTABLE_CNBV_2019,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20190101/extensions/estadoVariacionesCapitalContable2019.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }
        
        /**
        * Crea la configuración para el modulo de desglose de creditos. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_DESGLOSE_CREDITOS(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_DESGLOSE_CREDITOS,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20141205/extensions/desgloseCreditos.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }
        
        /**
        * Crea la configuración para el modulo de desglose de creditos. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_DESGLOSE_CREDITOS_CNBV(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_DESGLOSE_CREDITOS_CNBV,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20180820/extensions/desgloseCreditos.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
       * Crea la configuración para el modulo de desglose de creditos IFRS 2019. 
       * @return Definición del nombre y las dependencias del modulo.
       **/
        private static get CONFIGURACION_DESGLOSE_CREDITOS_CNBV_2019(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_DESGLOSE_CREDITOS_CNBV_2019,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20190101/extensions/desgloseCreditos2019.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }
        
        /**
        * Crea la configuración para el modulo de distribución de ingresos por producto. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_DISTRIBUCION_INGRESOS_PRODUCTO(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_DISTRIBUCION_INGRESOS_PRODUCTO,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20141205/extensions/distribucionIngresos.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        } 

        /**
        * Crea la configuración para el modulo de distribución de ingresos por producto. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_DISTRIBUCION_INGRESOS_PRODUCTO_CNBV(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_DISTRIBUCION_INGRESOS_PRODUCTO_CNBV,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20180820/extensions/distribucionIngresos.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        } 

        /**
       * Crea la configuración para el modulo de distribución de ingresos por producto IFRS 2019. 
       * @return Definición del nombre y las dependencias del modulo.
       **/
        private static get CONFIGURACION_DISTRIBUCION_INGRESOS_PRODUCTO_CNBV_2019(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_DISTRIBUCION_INGRESOS_PRODUCTO_CNBV_2019,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/ifrs_mx_20190101/extensions/distribucionIngresos2019.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        } 

        /**
        * Crea la configuración para el modulo de distribución de ingresos por producto. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_EVENTOS_RELEVANTES(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_EVENTOS_RELEVANTES,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/eventos-relevantes-2016-08-22/extensions/eventosRelevantes.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Crea la configuración para el modulo de distribución de ingresos por producto. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_EVENTOS_RELEVANTES_2017(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_EVENTOS_RELEVANTES2017,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/eventos-relevantes-2017-08-01/extensions/eventosRelevantes.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Crea la configuración para el modulo de series. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_MODULO_SERIES(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: AbaxXBRLConstantesRoot.NOMBRE_MODULO_SERIES,
                //Dependencias
                files: [
                    "ts/templates/taxonomias/annext/extensions/series.js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version,
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Arreglo de modulos Abax
        **/
        public static MODULOS_ABAX: Array<oc.ILazyLoadModuleConfig>;

        /**
        * Lista con las dependencias que no se deben de ofuscar.
        **/
        public static DEPENDENCIAS_NO_OFUSCABLES: Array<string> = ["js/ckeditor/ckeditor.js", "js/ngckeditor/angular-ckeditor.js", "js/autoNumeric/autoNumeric-1.9.22.js"];
        /**
        * Determina si la dependencia pertenece a la lista de los elementos no ofuscables.
        * @param src Soruce de la dependencia a evaluar.
        * @return Boleano que indica si la dependencia está en la lista de los elementos no ofuscables.
        **/
        public static noEsOfuscable(src: string): boolean {
            var noOfuscables = AbaxXBRLDependencyLoadConfig.DEPENDENCIAS_NO_OFUSCABLES;
            var ofuscable = true;
            for (var indexNoOfuscable: number = 0; indexNoOfuscable < noOfuscables.length; indexNoOfuscable++) {
                var elementoNoOfuscable = noOfuscables[indexNoOfuscable];
                if (src.indexOf(elementoNoOfuscable) != -1) {
                    ofuscable = false;
                    break;
                }
            }
            return !ofuscable;
        }

        /**
        * Ajusta el contenido de los archivos en release.
        * @param modulos Modulos a evaluar.
        **/
        private static ajustaDependenciasRelease(modulos: Array<oc.ILazyLoadModuleConfig>): Array<oc.ILazyLoadModuleConfig> {

            var scriptSufix = ".js?version=" + AbaxXBRLConstantesRoot.VERSION_APP.version;
            var outDirectory = "abax-xbrl/";
            

            for (var indexModulo: number = 0; indexModulo < modulos.length; indexModulo++) {
                var modulo = modulos[indexModulo];
                var filesAjustados: Array<string> = [];
                for (var indexSrc: number = 0; indexSrc < modulo.files.length; indexSrc++) {
                    var src = modulo.files[indexSrc];
                    if (src.indexOf(scriptSufix) == -1 || AbaxXBRLDependencyLoadConfig.noEsOfuscable(src)){
                        filesAjustados.push(src);
                    }
                    
                }
                filesAjustados.push(outDirectory + modulo.name + scriptSufix);
                modulo.files = filesAjustados;
            }
            return modulos;
        }

        /**
        * Configura el servicio que carga los modulos angular con sus dependencias.
        * @param $ocLazyLoadProvider Provedor del servicio "$ocLazyLoad" que se va ha configurar.
        **/
        constructor($ocLazyLoadProvider: oc.ILazyLoadProvider) {

            var self = this;
            var configLazyLoad: oc.ILazyLoadConfig = {
                asyncLoader: undefined,
                modules: [
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_MODULO_ABAX_XBRL,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_MODULO_INICIO,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_MODULO_EDITOR_XBRL,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_MODULO_VISOR_XBRL,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_DISTRIBUCION_INGRESOS_PRODUCTO,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_DISTRIBUCION_INGRESOS_PRODUCTO_CNBV,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_DISTRIBUCION_INGRESOS_PRODUCTO_CNBV_2019,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_MODULO_SERIES,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_DESGLOSE_CREDITOS,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_DESGLOSE_CREDITOS_CNBV,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_DESGLOSE_CREDITOS_CNBV_2019,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_ESTADO_CAMBIOS_CAPITAL_CONTABLE,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_ESTADO_CAMBIOS_CAPITAL_CONTABLE_CNBV,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_ESTADO_CAMBIOS_CAPITAL_CONTABLE_CNBV_2019,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_EVENTOS_RELEVANTES,
                    AbaxXBRLDependencyLoadConfig.CONFIGURACION_EVENTOS_RELEVANTES_2017
                ]
            };
            if (AbaxXBRLConstantesRoot.VERSION_APP.release) {
                configLazyLoad.modules = AbaxXBRLDependencyLoadConfig.ajustaDependenciasRelease(configLazyLoad.modules);
            } else {
                AbaxXBRLDependencyLoadConfig.MODULOS_ABAX = angular.copy(configLazyLoad.modules);
                var moduloRaiz = AbaxXBRLRootUtilService.generaModuloRaiz();
                AbaxXBRLDependencyLoadConfig.MODULOS_ABAX.push(moduloRaiz);
            }

            $ocLazyLoadProvider.config(configLazyLoad);

            
        }
    }
    //Arreglo con las depndencias a inyectar
    AbaxXBRLDependencyLoadConfig.$inject = ['$ocLazyLoadProvider'];

    /**
    * Clase que define la configuración del modulo para el manejo del lenguaje.
    **/
    export class AbaxXBRLTranslateRootConfig {
        /**Constructor de la clase que recibe el translateProvider al que se asignan las etiquetas para la traducción**/
        constructor($translateProvider: ng.translate.ITranslateProvider) {

            //Leguaje predeterminado.
            $translateProvider.preferredLanguage('es');
            $translateProvider.useLocalStorage();
        }
    }
    AbaxXBRLTranslateRootConfig.$inject = ['$translateProvider'];



    /**
    * Clase que especifica la configuración de las peticiones del servicio http.
    **/
    export class AbaxXBRLErrorHttpConfig {
        /**
        * Constructor de la configuración.
        **/
        constructor($httpProvider: ng.IHttpProvider) {
            $httpProvider.interceptors.push('errorHttpInterceptor');
        }
    }
    AbaxXBRLErrorHttpConfig.$inject = ['$httpProvider'];

    /**
    * Interceptor de rechazos de una promesa http.
    **/
    export class AbaxXBRLInterceptorErroresHttp {

        /**
        * Servicio para la el encolamiento de peticiones.
        **/
        private $q: ng.IQService;

        /**
        * Fabrica del interceptor.
        * @param $q Servicio para la el encolamiento de peticiones.
        **/
        public static factory($q: ng.IQService): any {
            var interceptor = new AbaxXBRLInterceptorErroresHttp($q);
            var proxyResponseError = function (rejection) {
                return interceptor.respuestaError(rejection);
            };

            return { responseError: proxyResponseError };
        }

        /**
        * Maneja el error enviado por http.
        * @param rejection Información enviada en la promesa rechazada.
        * @return Retorna la promesa que proceso la solicitud rechazada.
        **/
        public respuestaError(rejection: any): ng.IPromise<any> {
            try {
                var esContrasenaIncorrecta = rejection.status == 400 && rejection.data && rejection.data.error == "invalid_grant";
                if (rejection.status == 401) {
                    return shared.service.AbaxXBRLSessionService.cerrarSesionTokenInvalido(rejection);
                }

                if (!esContrasenaIncorrecta) {
                    var datos:string = null;
                    var url: string = null;
                    var method: string = null;

                    if (rejection.config) {
                        url = rejection.config.url;
                        method = rejection.config.method; 
                    }
                    
                    if (rejection.data) {
                        var datosStr = angular.toJson(rejection.data);
                        if (datosStr.length >= 3000) {
                            datos = datosStr.substr(0, 2990);
                        } else {
                            datos = rejection.data;
                        }
                    }

                    AbaxXBRLRootUtilService.getInstnce().enviaErrorSentry(new Error('HTTP ERROR (' + rejection.status + "): Error al realizar solicitud http al servidor  "), {
                        extra: {
                            url: url,
                            method: method,
                            status: rejection.status,
                            data: datos 
                        }
                    });

                }
            } catch (error) {
                AbaxXBRLRootUtilService.getInstnce().enviaErrorSentry(rejection);
                AbaxXBRLRootUtilService.getInstnce().enviaErrorSentry(error);
            }
            return this.$q.reject(rejection);
        }
        /**
        * Constructor de la clase.
        * @param $q Servicio para la el encolamiento de peticiones.
        **/
        constructor($q: ng.IQService) {
            this.$q = $q;
        }
    }

    /**
    * Manejador de excepciones globales de AbaxXBRL.
    **/
    export class AbaxXBRLManejadorExcepciones {
        /**
        * Fabrica de los manejadores de excepsiones.
        **/
        public static factory(): Function {
            var manejador = new AbaxXBRLManejadorExcepciones();
            //Retornamos una funcion que funje como proxy para el manejador abax.
            return function (exception, cause) {
                manejador.manejaExcepsion(exception, cause);
            };
        }
        /**
        * Maneja un error ocurrido en la app.
        * @param exception Excepsion ocurrida.
        * @param cause Motivo del error.
        **/
        public manejaExcepsion(exception: any, cause: any): void {
            
            AbaxXBRLRootUtilService.getInstnce().enviaErrorSentry(exception);
        }
        

        /**
        * Constructor  por defecto de la aplicación.
        **/
        constructor() { }
    }

    /**
    * Clase que genera el modulo para el manejo de errores en AbaxXBRL.
    * @author Oscar Ernesto Loyola Sánchez - 2H
    * @version 1.0
    **/
    export class AbaxXBRLExceptionHandler {
        /** La instancia única de la clase */
        private static _instance: AbaxXBRLExceptionHandler = null;
        /** La declaración del módulo angular que contiene al visor */
        public module: ng.IModule;
        /**
         * Constructor de la clase.
         */
        constructor() {
            if (AbaxXBRLExceptionHandler._instance) {
                throw new Error("Error: Fallo al instanciar: Utilice ModuloVisor.getInstance() en lugar de new.");
            }
            AbaxXBRLExceptionHandler._instance = this;
            AbaxXBRLExceptionHandler._instance.module = angular.module(AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_MANEJO_EXCEPCIONES, []);
        }
        /**
         * Obtiene la instancia única de esta clase. Si no existe, la crea.
         *
         * @return la instancia única de esta clase.
         */
        public static getInstance(): AbaxXBRLExceptionHandler {
            if (AbaxXBRLExceptionHandler._instance === null) {
                AbaxXBRLExceptionHandler._instance = new AbaxXBRLExceptionHandler();
            }
            return AbaxXBRLExceptionHandler._instance;
        }
    }
    //Inicializamos el modulo.
    var errorModule = AbaxXBRLExceptionHandler.getInstance().module;
    errorModule.factory('$exceptionHandler', [AbaxXBRLManejadorExcepciones.factory]);
    errorModule.factory('errorHttpInterceptor', ['$q', AbaxXBRLInterceptorErroresHttp.factory]);
    errorModule.config(AbaxXBRLErrorHttpConfig);


    /**
     * Implementación de un singleton para contener la instancia única de la declaración del módulo abaxXBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class AbaxXBRLCargaInicial {

        /** La instancia única de la clase */
        private static _instance: AbaxXBRLCargaInicial = null;

        /** La declaración del módulo angular que contiene al visor */
        public module: ng.IModule;


        private init(): void {
            var self = this;
            var moduloRaiz = AbaxXBRLCargaInicial.getInstance().module;
            //Agregamos la configuración de lazy load para la carga de elementos.
            moduloRaiz.config(AbaxXBRLDependencyLoadConfig);
            moduloRaiz.config(AbaxXBRLTranslateRootConfig);
        }

        /**
         * Obtiene la instancia única de esta clase. Si no existe, la crea.
         *
         * @return la instancia única de esta clase.
         */
        public static getInstance(): AbaxXBRLCargaInicial {
            if (AbaxXBRLCargaInicial._instance === null) {
                AbaxXBRLCargaInicial._instance = new AbaxXBRLCargaInicial();
            }
            return AbaxXBRLCargaInicial._instance;
        }

        /**
         * Constructor de la clase ModuloVisor
         */
        constructor() {
            if (AbaxXBRLCargaInicial._instance) {
                throw new Error("Error: Fallo al instanciar: Utilice AbaxXBRLCargaInicial.getInstance() en lugar de new.");
            }
            var self = this;
            AbaxXBRLCargaInicial._instance = self;
            
            //Agregamos los siguientes modulos de dependencias:
            //- oc.lazyLoad: Para la carga asincrona de otros modulos y dependencias de otros componentes de AbaxXBRL.
            AbaxXBRLCargaInicial._instance.module = angular.module(AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_RAIZ, [
                AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_MANEJO_EXCEPCIONES,
                'ui.bootstrap', 'ui.router', 'ui.slimscroll', 'oc.lazyLoad', 'pascalprecht.translate', 'LocalStorageModule', 'datatables', 'ngCookies', 'tmh.dynamicLocale', 'ngSanitize', 'ui.select', 'jsonFormatter']);
            self.init();
        }
    }
    
    AbaxXBRLCargaInicial.getInstance();
} 