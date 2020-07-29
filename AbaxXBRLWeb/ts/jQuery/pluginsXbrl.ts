///<reference path="../../scripts/typings/xregexp/xregexp.d.ts" /> 
///<reference path="../../scripts/typings/decimal.js/decimal.js.d.ts" /> 
///<reference path="../../scripts/typings/bootstrap/bootstrap.d.ts" />
///<reference path="../../scripts/typings/toolbartip/jquery-toolbar.d.ts" /> 
///<reference path="../../scripts/typings/scrollto/scrollto.d.ts" /> 

interface JQuery {

    /**
     * Implementación de un plugin de JQuery el cual presenta un campo de captura o un visor de un hecho de un documento instancia XBRL al usuario.
     *
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlCampoCaptura(): JQuery;

    /**
     * Implementación de un plugin de JQuery el cual presenta un campo de captura o un visor de un hecho de un documento instancia XBRL al usuario.
     *
     * @param action la acción a realizar sobre el plugin
     * @param settings los parámetros de configuración del plugin que son sobreescritos para la ejecución del mismo.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlCampoCaptura(action: string, settings?: any): any;

    /**
     * Implementación de un plugin de JQuery el cual presenta al usuario la etiqueta asociada a un concepto en un idioma con un rol específico.
     *
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlEtiquetaConcepto(): JQuery;

    /**
     * Implementación de un plugin de JQuery el cual presenta al usuario la etiqueta asociada a un concepto en un idioma con un rol específico.
     *
     * @param action la acción a realizar sobre el plugin
     * @param los parámetros de configuración del plugin que son sobreescritos para la ejecución del mismo.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlEtiquetaConcepto(action: string, settings?: abaxXBRL.plugins.XbrlEtiquetaConceptoSettings): JQuery;

    /**
     * Implementación de un plugin de JQuery el cual convierte una tabla HTML en una interfaz similar a un hoja de cálculo de excel.
     *
     * @param action la acción a realizar sobre el plugin
     * @param los parámetros de configuración del plugin que son sobreescritos para la ejecución del mismo.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlTablaExcel(action: string, settings?: any): any;

    /**
     * Implementación de un plugin para presentar una barra de herramientas auxiliares a la edición de un campo de captura XBRL.
     *
     * @param botones la lista de botones que debe asociarse al campo de captura.
     * @param settings los settings del campo captura que hospeda este botón.
     */
    xbrlBotonCampoCaptura(botones: Array<abaxXBRL.model.IProcesoBotonItem>, campoCaptura: abaxXBRL.plugins.XbrlCampoCaptura): JQuery;

    /**
     * Implementación de un plugin de JQuery el cual presenta el mensaje de validacion de una formula.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlMensajeValidacionFormula(): JQuery;

    /**
     * Implementación de un plugin de JQuery el cual presenta el mensaje de validacion de una formula.
     *
     * @param action la acción a realizar sobre el plugin
     * @param settings los parámetros de configuración del plugin que son sobreescritos para la ejecución del mismo.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlMensajeValidacionFormula(action: string, settings?: any): any;

    /**
     * Implementación de un plugin de JQuery el cual presenta el valor calculado de un hecho.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlValorCalculadoHecho(): JQuery;

    /**
     * Implementación de un plugin de JQuery el cual presenta el valor calculado de un hecho.
     *
     * @param action la acción a realizar sobre el plugin
     * @param settings los parámetros de configuración del plugin que son sobreescritos para la ejecución del mismo.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlValorCalculadoHecho(action: string, settings?: any): any;

    

    /**
     * Implementación de un plugin de JQuery para la estructura de un documento en una plantilla generica.
     *
     * @param action la acción a realizar sobre el plugin
     * @param settings los parámetros de configuración del plugin que son sobreescritos para la ejecución del mismo.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    xbrlEstructuraDocumento(action: string, settings?: any): any;

    /**
     * Da el foco a un elemento sin realizar el scroll de la página.
     *
     * @param contenedor el elemento JQuery que contiene el elemento que obtiene el foco.
     */
    focusWithoutScrolling(contenedor: JQuery);

    /**
    * Envuelve el despliegue de tooltip para prevenir problemas de permanencia de tooltips en la vista.
    * @param opciones Opciones del tooltip a desplegar.
    * @return Elemento JQuery que invoca la función.
    **/
    setTooltip(opciones?: abaxXBRL.shared.modelos.IOpcionesTooltip): JQuery;

    /**
    * Utilería que muestra un tooltipo sobre el elemento con los roles en los que se encuentra el concepto indicado.
    **/
    xbrlRolesConceptoToolTip():void;
}

(function ($: JQueryStatic) {

    $.fn.xbrlCampoCaptura = function (action: string, settings?: any): any {
        if (!action || action === 'init') {
            return this.each(function () {
                var xbrlCampoCaptura = new abaxXBRL.plugins.XbrlCampoCaptura();
                try {
                    xbrlCampoCaptura.init($(this), settings);
                } catch (e) {
                    console.log(e);
                    if (e.stack) {
                        console.error(e.stack);
                    }
                }
            });
        } else if (action === 'editar') {
            return this.each(function () {
                var xbrlCampoCaptura: abaxXBRL.plugins.XbrlCampoCaptura = $(this).data('xbrlCampoCaptura');
                if (xbrlCampoCaptura) {
                    xbrlCampoCaptura.cambiarAModoEdicion();
                }
            });
        } else if (action === 'update') {
            return this.each(function () {
                var xbrlCampoCaptura: abaxXBRL.plugins.XbrlCampoCaptura = $(this).data('xbrlCampoCaptura');
                if (xbrlCampoCaptura) {
                    xbrlCampoCaptura.actualizarUI();
                }
            });
        } else if (action === 'setValor') {
            return this.each(function () {
                var xbrlCampoCaptura: abaxXBRL.plugins.XbrlCampoCaptura = $(this).data('xbrlCampoCaptura');
                if (xbrlCampoCaptura) {
                    xbrlCampoCaptura.establecerValor(settings);
                }
            });
        } else if (action === 'getValor') {
            var xbrlCampoCaptura: abaxXBRL.plugins.XbrlCampoCaptura = $(this).data('xbrlCampoCaptura');
            if (xbrlCampoCaptura) {
                return xbrlCampoCaptura.obtenerValor();
            }
        } else if (action === 'marcarSucio') {
            return this.each(function () {
                var xbrlCampoCaptura: abaxXBRL.plugins.XbrlCampoCaptura = $(this).data('xbrlCampoCaptura');
                if (xbrlCampoCaptura) {
                    return xbrlCampoCaptura.marcarSucio();
                }
            });
        } else if (action === 'soloLectura') {
            return this.each(function () {
                var xbrlCampoCaptura: abaxXBRL.plugins.XbrlCampoCaptura = $(this).data('xbrlCampoCaptura');
                if (xbrlCampoCaptura) {
                    return xbrlCampoCaptura.establecerSoloLectura(settings);
                }
            });
        } else if (action === 'editarToggle') {
            return this.each(function () {
                var xbrlCampoCaptura: abaxXBRL.plugins.XbrlCampoCaptura = $(this).data('xbrlCampoCaptura');
                if (xbrlCampoCaptura) {
                    xbrlCampoCaptura.editarToggle();
                }
            });
        }
    };

    $.fn.xbrlEtiquetaConcepto = function (action: string, settings?: abaxXBRL.plugins.XbrlEtiquetaConceptoSettings): JQuery {
        if (!action || action === 'init') {
            return this.each(function () {
                var xbrlEtiquetaConcepto = new abaxXBRL.plugins.XbrlEtiquetaConcepto();
                xbrlEtiquetaConcepto.init($(this), settings);
            });
        } else if (action === 'update') {
            return this.each(function () {
                var xbrlEtiquetaConcepto: abaxXBRL.plugins.XbrlEtiquetaConcepto = $(this).data('xbrlEtiquetaConcepto');
                if (xbrlEtiquetaConcepto) {
                    xbrlEtiquetaConcepto.actualizarUI();
                }
            });
        }
    };

    $.fn.xbrlBotonCampoCaptura = function (botones: Array<abaxXBRL.model.IProcesoBotonItem>, campoCaptura: abaxXBRL.plugins.XbrlCampoCaptura): JQuery {
        return this.each(function () {
            var xbrlBotonCampoCaptura = new abaxXBRL.plugins.XbrlBotonCampoCaptura();
            xbrlBotonCampoCaptura.init($(this), botones, campoCaptura);
        });
    };

    $.fn.xbrlTablaExcel = function (action: string, settings?: any): JQuery {
        if (!action || action === 'init') {
            return this.each(function () {
                var xbrlTablaExcel = new abaxXBRL.plugins.XbrlTablaExcel();
                xbrlTablaExcel.init($(this), settings);
            });
        } else if (action === 'seleccionarRango') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                xbrlTablaExcel.seleccionarRango(settings);
            });
        } else if (action === 'pausar') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                if (xbrlTablaExcel) {
                    xbrlTablaExcel.pausar();
                }
            });
        } else if (action === 'reanudar') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                xbrlTablaExcel.reanudar();
            });
        } else if (action === 'editarSiguiente') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                xbrlTablaExcel.editNext();
            });
        } else if (action === 'editarPrevio') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                xbrlTablaExcel.editPrev();
            });
        } else if (action === 'soloLectura') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                xbrlTablaExcel.establecerSoloLectura(settings);
            });

        } else if (action === 'editDown') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                xbrlTablaExcel.editDown();
            });

        } else if (action === 'editUp') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                xbrlTablaExcel.editUp();
            });

        } else if (action === 'rebuild') {
            return this.each(function () {
                var xbrlTablaExcel: abaxXBRL.plugins.XbrlTablaExcel = $(this).data('tableKeyNavigator');
                xbrlTablaExcel.rebuild();
            });
        }
    };

    $.fn.xbrlMensajeValidacionFormula = function (action: string, settings?: any): JQuery {
        if (!action || action === 'init') {
            return this.each(function () {
                var xbrlMensajeValidacionFormula = new abaxXBRL.plugins.XbrlMensajeValidacionFormula();
                xbrlMensajeValidacionFormula.init($(this), settings);
            });
        } else if (action === 'update') {
            return this.each(function () {
                var xbrlMensajeValidacionFormula: abaxXBRL.plugins.XbrlMensajeValidacionFormula = $(this).data('xbrlMensajeValidacionFormula');
                if (xbrlMensajeValidacionFormula) {
                    xbrlMensajeValidacionFormula.actualizarUI();
                }
            });
        }
    };

    $.fn.xbrlValorCalculadoHecho = function (action: string, settings?: any): JQuery {
        if (!action || action === 'init') {
            return this.each(function () {
                var xbrlValorCalculadoHecho = new abaxXBRL.plugins.XbrlValorCalculadoHecho();
                xbrlValorCalculadoHecho.init($(this), settings);
            });
        } else if (action === 'update') {
            return this.each(function () {
                var xbrlValorCalculadoHecho: abaxXBRL.plugins.XbrlValorCalculadoHecho = $(this).data('xbrlValorCalculadoHecho');
                if (xbrlValorCalculadoHecho) {
                    xbrlValorCalculadoHecho.actualizarUI();
                }
            });
        }
    };

    $.fn.focusWithoutScrolling = function (contenedor: JQuery) {
        var x = contenedor.scrollLeft();
        var y = contenedor.scrollTop();
        this.focus();
        contenedor.scrollTop(y);
        contenedor.scrollLeft(x);
        return this;
    };

    $.fn.setTooltip = function (opciones?: abaxXBRL.shared.modelos.IOpcionesTooltip):JQuery {
        var elemento = $(this);
        var options = (opciones && opciones.options) ? opciones.options : undefined;
        var $util = abaxXBRL.shared.service.AbaxXBRLUtilsService;
        elemento.tooltip('destroy');
        if (options) {
            elemento.tooltip(options);
        } else
        {
            elemento.tooltip();
        }
        elemento.addClass('tooltipAsignado');
        //Proceso que oculta el tooltip.
        if (!$util.existTask('tooltipHidder')) {
            $util.setAsyncTask({
                Name: 'tooltipHidder',
                Process: function () { $('.tooltipAsignado').tooltip('hide'); $util.startTask('tooltipDestroyer');},
                Timeout: 20000,
                StartOnDefine: false
            });
        }
        //Proceso que destruye los div con el rol de tooltip.
        if (!$util.existTask('tooltipDestroyer')) {
            $util.setAsyncTask({
                Name: 'tooltipDestroyer',
                Process: function () { $('div[role="tooltip"]').hide(33, function () { $(this).remove(); }); },
                StartOnDefine:false
            });
        }
        
        elemento.on('show.bs.tooltip', function () {
            $util.startTask('tooltipHidder');
        });

        elemento.on('hide.bs.tooltip', function () {
            $util.startTask('tooltipDestroyer');
        });

        return elemento;
    }

    $.fn.xbrlRolesConceptoToolTip = function (): void {
        var elemento = $(this);
        setTimeout(function () {
            var idConcepto = elemento.attr('xbrl:roles-concepto-tool-tip');
            var texto = abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().obtenIdFormatosPorConcepto(idConcepto);
            texto = '<div><div class="rol-tooltip">' + texto + '</div></div>';
            elemento.setTooltip({
                options: {
                    html: true,
                    title: texto,
                }
            });
        });
    }
})(jQuery);


module abaxXBRL.plugins {
    
    /**
     * Implementación deun Bridge para comunicar el scope de AngularJS con plugins de JQuery.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class AngularJQueryBridge {

        /** La instancia única de la clase */
        private static _instance: AngularJQueryBridge = null;

        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**Servicio para el manejo de etiquetas en multilenguaje **/
        private $translate: ng.translate.ITranslateService;

        /** El scope de angular para poder notificar cambios al modelo */
        private $scope: controller.IDocumentoInstanciaScope;

        /** Contiene un mapa cuya llave es el identificador del hecho y como valor un arreglo con los identificadores de los elementos de campo captura asociados */
        private mapaElementosPorIdHecho: { [idHecho: string]: Array<string> };

        /**
         * Obtiene la instancia única del Bridge entre AngularJS y JQuery
         */
        public static getInstance(): AngularJQueryBridge {
            if (AngularJQueryBridge._instance === null) {
                AngularJQueryBridge._instance = new AngularJQueryBridge();
            }
            return AngularJQueryBridge._instance;
        }

        /**
         * Inicializa el puente de comunicación entre AngularJS y JQuery
         *
         * @param abaxXBRLServices el servicio de negocio para interactuar con el backend del editor/visor de documentos instancia XBRL.
         */
        constructor() {
            this.abaxService = null;
            this.mapaElementosPorIdHecho = {};
        }

        /**
         * Obtiene el documento instancia que está siendo editado/presentado en el editr/visor de documentos instancia XBRL.
         *
         * @return el documento instancia que está siendo editado/presentado en el editr/visor de documentos instancia XBRL. 
         */
        public obtenerDocumentoInstancia(): model.DocumentoInstanciaXbrl {
            return this.abaxService.getDocumentoInstancia();
        }


        /**
         * Obtiene la definición de la plantilla asociada al documento instancia XBRL que está siendo editado/presentado en el editor/visor de documentos instancia XBRL.
         * 
         * @return la definición de la plantilla asociada al documento instancia XBRL que está siendo editado/presentado en el editor/visor de documentos instancia XBRL.
         */
        public obtenerDefinicionPlantilla(): model.DefinicionDePlantillaXbrl {
            return this.abaxService.getDefinicionPlantilla();
        }

        /** 
         * Establece el servicio AngularJS con el cual se interactua con el scope del editor/visor de documentos instancia XBRL.
         *
         * @param abaxService el servicio AngularJS con el cual se interactua con el scope del editor/visor de documentos instancia XBRL.
         */
        public establecerAbaxService(abaxService: services.AbaxXBRLServices) {
            this.abaxService = abaxService;
        }

        /** 
         * Obtiene el servicio AngularJS con el cual se interactua con el scope del editor/visor de documentos instancia XBRL.
         *
         * @return el servicio AngularJS con el cual se interactua con el scope del editor/visor de documentos instancia XBRL.
         */
        public obtenerAbaxService(): services.AbaxXBRLServices {
            return this.abaxService;
        }

        /** 
         * Establece el servicio AngularJS con el cual se interactua con el scope del editor/visor de documentos instancia XBRL.
         *
         * @param translateService el manejo de etiquetas en multilenguaje.
         */
        public establecerTranslateService(translateService: ng.translate.ITranslateService) {
            this.$translate = translateService;
        }

        /** 
         * Obtiene el servicio AngularJS con el cual se interactua con el scope del editor/visor de documentos instancia XBRL.
         *
         * @return el manejo de etiquetas en multilenguaje.
         */
        public obtenerTranslateService(): ng.translate.ITranslateService {
            return this.$translate;
        }

        /** 
         * Obtiene el scope AngularJS con el cual se notifican de cambios al modelo.
         *
         * @return el scope AngularJS con el cual se notifican de cambios al modelo.
         */
        public obtenerScopeAngular(): controller.IDocumentoInstanciaScope {
            return this.$scope;
        }

        /** 
         * Establece el scope AngularJS con el cual se notifican de cambios al modelo.
         *
         * @param $scope el scope AngularJS con el cual se notifican de cambios al modelo.
         */
        public establecerScopeAngular($scope: controller.IDocumentoInstanciaScope) {
            this.$scope = $scope;
        }

        /** 
         * Obtiene el scope AngularJS con el cual se notifican de cambios al modelo.
         *
         * @return el scope AngularJS con el cual se notifican de cambios al modelo.
         */
        public obtenerMapaElementosPorIdHecho(): { [idHecho: string]: Array<string> } {
            return this.mapaElementosPorIdHecho;
        }


        /** 
         * Establece el scope AngularJS con el cual se notifican de cambios al modelo.
         *
         * @param $scope el scope AngularJS con el cual se notifican de cambios al modelo.
         */
        public establecerMapaElementosPorIdHecho(mapaElementosPorIdHecho: { [idHecho: string]: Array<string> }) {
            this.mapaElementosPorIdHecho = mapaElementosPorIdHecho;
        }
    }

    /**
     * Define el contrato que deberá implementar la clase detrás de un plugin JQuery para poder ser considerado un elemento de presentación XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface ElementoPresentacionXbrl {

        /** Actualiza la interfaz del usuario para reflejar cualquier cambio realizado al modelo asociado al elemento de presentación */
        actualizarUI(): void;
    }

    /**
     * Implementación de un elemento de presentación XBRL encargado de presentar al usuario la etiqueta de un concepto en un idioma y con un rol específico.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlEtiquetaConcepto implements ElementoPresentacionXbrl {

        /** Los settings del plugin */
        public settings: XbrlEtiquetaConceptoSettings;

        /** La etiqueta que se presentará al usuario */
        private etiquetaConcepto: string;

        /** El documento instancia que contiene la etiqueta */
        private documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;

        /** Bandera que muestra si tiene referencia el concepto de la taxonomia */
        private tieneReferencias: boolean;

        /** El concepto que contiene la etiqueta*/
        private concepto: abaxXBRL.model.Concepto;

        /** El identificador del elemento que contiene este plugin dentro del dom */
        private idPlugin: string;

        /** El identificador del botón que permite consultar las referencias de este plugin */
        private idBotonReferencia: string;

        /** El elemento que originalmente se había definido antes de ejecutar el plugin */
        private elemento: JQuery;

        /** La referencia a los conceptos que tienen referencia asociada y permite mostrar en un modal */
        private referenciaConcepto: ReferenciaConcepto;


        /**
         * Obtiene la etiqueta que deberá ser presentada al usuario.
         *
         * @return la etiqueta que deberá ser presentada al usuario.
         */
        public obtenerEtiquetaConcepto(): string {

            var etiqueta: string = null;

            var idioma = this.settings.idioma;
            var rol = this.settings.rolEtiqueta;
            var idConcepto = this.settings.idConcepto;

            if (!idConcepto || idConcepto == null) {
                etiqueta = '';
            } else {
                if (!idioma || idioma == null) {
                    idioma = abaxXBRL.model.ConstantesComunes.IDIOMA_DEFAULT;
                }
                if (!rol || rol == null) {
                    rol = abaxXBRL.model.ConstantesComunes.ROL_ETIQUETA_DEFAULT;
                }
                etiqueta = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().Taxonomia.obtenerEtiquetaDeConcepto(idConcepto, rol, idioma);

            }
            return etiqueta;
        }

        /**
         * Inicializa el plugin de JQuery a partir de los parámetros especificados en la declaración del elemento
         *
         * @param element el elemento JQuery al que se aplica el plugin
         * @param settings los settings con los que se inicializó el plugin al momento de ser creado
         */
        public init(element: JQuery, settings: XbrlEtiquetaConceptoSettings): void {

            var idConcepto = element.attr('xbrl:id-concepto');
            var rolEtiqueta = element.attr('xbrl:rol-etiqueta');
            var nivelIndentacionString = element.attr('xbrl:nivel-indentacion');
            var style = element.attr('xbrl:style');
            var maxLength = element.attr('xbrl:max-length');

            this.elemento = element;
            this.idPlugin = utils.UUIDUtils.generarUUID();
            this.idBotonReferencia = utils.UUIDUtils.generarUUID();
            this.referenciaConcepto = ReferenciaConcepto.getInstance();

            var nivelIndentacion = Number(nivelIndentacionString);
            if (isNaN(nivelIndentacion)) {
                nivelIndentacion = 0;
            }

            this.settings = $.extend({
                idConcepto: idConcepto,
                rolEtiqueta: rolEtiqueta,
                nivelIndentacion: nivelIndentacion,
                style: style,
                maxLength: maxLength
            }, settings);

            $(this.elemento).data('xbrlEtiquetaConcepto', this);
            var self = this;
            this.actualizarUI();
        }

        actualizarUI(): void {

            this.settings.idioma = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma.ClaveIdioma;
            this.concepto = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().Taxonomia.obtenerConcepto(this.settings.idConcepto);
            this.etiquetaConcepto = this.obtenerEtiquetaConcepto();
            var maxLength = this.settings.maxLength;
            var etiquetaAjustada = this.etiquetaConcepto.trim();
            if (maxLength && maxLength > 3 && etiquetaAjustada.length > maxLength) {
                etiquetaAjustada = etiquetaAjustada.substr(0, maxLength - 3).trim() + '...';
            }

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();

            variablesPlantilla.push({ llave: 'idPlugin', valor: this.idPlugin });
            variablesPlantilla.push({ llave: 'nivelIndentacion', valor: (this.settings.nivelIndentacion * 10).toString() });
            variablesPlantilla.push({ llave: 'style', valor: this.settings.style });
            variablesPlantilla.push({ llave: 'etiquetaConcepto', valor: etiquetaAjustada });
            variablesPlantilla.push({ llave: 'idBotonReferencia', valor: this.idBotonReferencia });
            //variablesPlantilla.push({ llave: 'tooltipEtiqueta', valor: this.etiquetaConcepto });

            var self = this;

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-etiqueta-concepto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {

                    plantilla.find('#' + self.idBotonReferencia).off('click');

                    plantilla.find('#' + self.idBotonReferencia).on('click', function () {
                        self.referenciaConcepto.mostrarDetalleReferencias(self, self.elemento, self.idPlugin, self.concepto);
                    });
                    self.elemento.empty().append(plantilla);
                    if (maxLength && maxLength > 3) {

                        $(self.elemento).setTooltip({
                            options: {
                                container: 'body',
                                title: self.etiquetaConcepto
                            }
                        });
                        $(self.elemento).attr('xbrl:texto-filtro-busqueda', self.etiquetaConcepto);
                    }

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de una etiqueta de concepto');
                });
        }

    }

    /**
     * Implementación de métodos utilería para los diferentes plugins XBRL del editor/visor de documentos instancia XBRL
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlPluginUtils {

        /**
         * Carga una plantilla de una ubicación específica, si la carga es exitosa, reemplaza las variables pasadas como parámetro dentro de la plantillas las cuales
         * están identificadas por expresiones dentro de dobles llaves "{{EXPRESION}}"
         *
         * @param templateUrl el URL que deberá ser cargado.
         * @param variablesReemplazar las variables que deberán ser reemplazadas
         * @param exito el método callback que deberá ser ejecutado en caso de que la carga se realice con éxito.
         * @param fallo el método callback que deberá ser ejecutado en caso de que falle la carga de la plantilla o la operación de reemplazar las variables.
         */
        public static cargarPlantillaYReemplazarVariables(templateUrl: string, variablesReemplazar: Array<{ llave: string; valor: string }>, exito: (plantilla: JQuery) => void, fallo: (textStatus, errorThrown) => void): void {

            var existePlantilla: boolean = false;
            var contenidoPlantilla: string = '';

            $.ajax({
                type: 'GET',
                url: templateUrl
            }).done(function (data: string, textStatus: string, jqXHR) {
                existePlantilla = true;
                contenidoPlantilla = data;

                var expresionesAReemplazar = XRegExp.matchRecursive(contenidoPlantilla, '{{', '}}', 'g');

                if (expresionesAReemplazar && expresionesAReemplazar.length && expresionesAReemplazar.length > 0) {
                    for (var i = 0; i < expresionesAReemplazar.length; i++) {
                        var expresion = expresionesAReemplazar[i];
                        var contenidoExpresion = utils.StringUtils.trim(expresion);
                        var valorReemplazar = '';

                        if (utils.StringUtils.contains(contenidoExpresion, '|')) {
                            var componentes = contenidoExpresion.split('|');
                            if (componentes && componentes !== null && componentes.length && componentes.length == 2) {
                                if (utils.StringUtils.fullTrim(componentes[1]) == 'translate') {
                                    valorReemplazar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta(utils.StringUtils.trim(componentes[0]).replace(/\'/g, ''));
                                }
                            }
                        } else {
                            var llaveABuscar = utils.StringUtils.trim(contenidoExpresion);
                            for (var j = 0; j < variablesReemplazar.length; j++) {
                                if (variablesReemplazar[j].llave === llaveABuscar) {
                                    valorReemplazar = variablesReemplazar[j].valor;
                                    break;
                                }
                            }
                        }

                        valorReemplazar = utils.StringUtils.validarPatronEspecial(valorReemplazar);

                        contenidoPlantilla = contenidoPlantilla.replace('{{' + expresion + '}}', valorReemplazar);
                    }
                }

                exito($(contenidoPlantilla));
            }).fail(function (jqXHR, textStatus, errorThrown) {
                existePlantilla = false;
                fallo(textStatus, errorThrown);
            });
        }

        /**
         * Convierte el nombre de una clase a la referencia de la función para poder instanciar una clase por nombre
         *
         * @param str el nombre de la clase a instanciar.
         * @return la referencia a la función para que pueda ser instanciada la clase
         */
        public static convertirCadenaAFuncion(str: string): any {
            var arr = str.split(".");

            var fn = (window || this);
            for (var i = 0, len = arr.length; i < len; i++) {
                fn = fn[arr[i]];
            }

            if (typeof fn !== "function") {
                throw new Error("function not found");
            }

            return fn;
        }

        /** 
         * Presenta el loader para la carga de formatos en e editor o visor de documentos instancia 
         */
        public static presentarLoaderFormatos(): void {
            $('#splashInterno').show().removeClass('animated bounceOutUp');
            $('#splashInterno').show().addClass('animated bounceInDown');
        }

        /** 
         * Oculta el loader para la carga de formatos en e editor o visor de documentos instancia 
         */
        public static ocultarLoaderFormatos(): void {
            $('#splashInterno.bounceInDown').show().removeClass('animated bounceInDown');
            $('#splashInterno').addClass('animated bounceOutUp');
        }

        /**
         * Método callback el cual es invocado cuando el usuario presiona la tecla espacio o enter sobre una celda de la tabla excel.
         *
         * @param event el evento del teclado que disparó este evento. 
         * @param td el elemento td que recibe la acción.
         */
        public static onSpaceOrEnterKey(e, td) {
            var hecho = $(td).find('xbrl\\:campo-captura');
            if (hecho) {
                $(hecho).xbrlCampoCaptura('editarToggle');
            }
        }

        /**
         * Método callback el cual es invocado después de que se ha determinado que es necesario pegar un valor dado en una celda de la tabla excel.
         *
         * @param cellValue el valor a pegar en la celda.
         * @param cellTd el elemento JQuery que representa la celda donde se pretende pegar el valor.
         */
        public static onAfterPaste(cellValue: string, cellTd: JQuery): void {
            var hecho = $(cellTd).find('xbrl\\:campo-captura');
            if (hecho) {
                $(hecho).xbrlCampoCaptura('setValor', cellValue);
                $(hecho).xbrlCampoCaptura('update');
            }
        }

        /**
         * Método callback el cual es invocado después de que se ha concluido la operación de pegar un valor o rango de valores en una tabla excel.
         *
         * @param pastedValue el valor que originalmente se pegó sobre la tabla excel.
         * @param startTd el elemento JQuery que representa la celda donde se pegó inicialmente el valor.
         * @param rango el rango de celdas que se afectaron durante la operación de pegado.
         */
        public static onAfterRangePaste(pastedValue, startTd, rango: plugins.RangoSeleccionTablaExcel): void {
            $($(startTd).closest('table')).xbrlTablaExcel('seleccionarRango', rango);

            AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().RequiereValidacion = true;
            AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().RequiereValidacionFormulas = true;
            AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
            plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
        }

        /**
         * Método callback el cual es invocado antes de obtener el valor de una celda para ser copiada al portapapeles.
         *
         * @param td el elemento JQuery que representa la celda de la cual se pretende obtener el valor.
         * @return el valor de la celda que deberá ser colocado en el portapapeles.
         */
        public static onBeforeCopy(td): string {
            var hecho = $(td).find('xbrl\\:campo-captura');
            if (hecho) {
                return $(hecho).xbrlCampoCaptura('getValor');
            }
        }

        /**
         * Limpia la selección del usuario en pantalla
         */
        public static clearSelection() {
            var selection: any = null;
            var anyDoc: any = document;
            if (window.getSelection) {
                selection = window.getSelection();
            } else if (anyDoc.selection) {
                selection = anyDoc.selection;
            }
            if (selection) {
                if (selection.empty) {
                    selection.empty();
                }
                if (selection.removeAllRanges) {
                    selection.removeAllRanges();
                }
            }
        }

        /**
        * Maneja el evento keyup del filtro de busqueda.
        **/
        private static keyupHandlerFiltroBusqueda(evento: any): void {

            var claseFiltrados = 'filtradoCampoBusqueda';
            var filtrados = $('.' + claseFiltrados);
            var textoFiltro: string = $(this).val();
            var considerarTablaDinamica: boolean = $('div.mainDT,div.dinamicTable').length > 0;
            textoFiltro = textoFiltro.trim();

            filtrados.show();
            filtrados.removeClass(claseFiltrados);

            if (textoFiltro.length == 0) {
                return;
            }

            var elementos = $("section#contenedorFormatos table tbody tr:not(:containsFilterIgnoreCase('" + textoFiltro + "')):not([xbrl\\:no-filtrar])");
            elementos.hide();
            elementos.addClass(claseFiltrados);
            //Consideracion especial para tablas dinamicas.
            if (considerarTablaDinamica) {
                var elementosVisibles = $("section#contenedorFormatos table tbody tr:containsFilterIgnoreCase('" + textoFiltro + "')");
                elementosVisibles.each(function () {
                    var $fila = $(this);
                    var idFila = $fila.attr('xbrl:dt-row');
                    if (idFila) {
                        $('section#contenedorFormatos table tbody [xbrl\\:dt-row = ' + idFila + ']').show().removeClass(claseFiltrados);
                    }
                });
            }
        }

        /**
        * Inicializa el filtro de busqueda.
        **/
        public static inicializaCampoBusqueda(): void {
            var $self = XbrlPluginUtils;
            var $handler = $self.keyupHandlerFiltroBusqueda;
            var selectorCampoBusqueda = 'input#filtroTabla[ng-model="rolFormatoActivo.FiltroBusqueda"]';
            /**
            * Extendemos jQuery pra agregar un selector tipo contains ignore case.
            **/
            if (!jQuery.expr[':'].containsIgnoreCase) {
                jQuery.extend(jQuery.expr[':'], {
                    containsIgnoreCase: jQuery.expr.createPseudo(function (arg) {
                        return function (elem) {
                            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) != -1;
                        };
                    })
                });
            }

            /**
            * Extendemos jQuery pra evaluar filtro que no se visualiza en texto.
            **/
            if (!jQuery.expr[':'].containsFilterIgnoreCase) {
                jQuery.extend(jQuery.expr[':'], {
                    containsFilterIgnoreCase: jQuery.expr.createPseudo(function (arg) {
                        return function (elem) {
                            var $elem = jQuery(elem);
                            var estaContenido: boolean = $elem.text().toUpperCase().indexOf(arg.toUpperCase()) != -1;
                            if (!estaContenido) {
                                $elem.find('[xbrl\\:texto-filtro-busqueda]').each(function (indexElement:number, elementoFiltro:Element) {
                                    var filtro: string = jQuery(elementoFiltro).attr('xbrl:texto-filtro-busqueda');
                                    if (filtro && filtro.toUpperCase().indexOf(arg.toUpperCase()) != -1) {
                                        estaContenido = true;
                                        return;
                                    }
                                });
                            }
                            return estaContenido;
                        };
                    })
                });
            }
            $('body').off('keyup', selectorCampoBusqueda, $handler);
            $('body').on('keyup', selectorCampoBusqueda, $handler);
        }

    }

    /** 
     * Implementación de un botón auxiliar para los componentes de campo captura en el editor XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlBotonCampoCaptura implements ElementoPresentacionXbrl {
        
        /** Listado con las funcionalidades del campo de captura actual **/
        private procesosBotonCampoCaptura: Array<model.IProcesoBotonItem>;

        /**Indica si se debe de pintar el toolbar **/
        private mostrarToolBar: boolean;

        /** El elemento sobre el cual se presentará el botón del campo captura */
        private element: JQuery;

        /** El identificador único de este plugin */
        private idPlugin: string;

        /** El campo captura que hospeda este botón */
        private campoCaptura: XbrlCampoCaptura;

        /**
         * Inicializa el plugin del botón del campo de captura.
         *
         * @param element el elemento sobre el cual se presentará el botón del campo captura
         */
        public init(element: JQuery, botones: Array<model.IProcesoBotonItem>, campoCaptura: XbrlCampoCaptura): void {
            if (!botones || botones === null) return;

            this.element = element;
            this.mostrarToolBar = false;
            this.procesosBotonCampoCaptura = botones;
            this.mostrarToolBar = botones && botones !== null && botones.length && botones.length > 0;
            this.idPlugin = utils.UUIDUtils.generarUUID();
            this.campoCaptura = campoCaptura;
            this.actualizarUI();
        }

        public actualizarUI(): void {

            this.element.prop('id', this.idPlugin);

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();

            var iconoRaiz: string = "fa-wrench";
            if (this.procesosBotonCampoCaptura.length == 1) {
                iconoRaiz = this.procesosBotonCampoCaptura[0].Icono;
            }

            variablesPlantilla.push({ llave: 'idPlugin', valor: this.idPlugin });
            variablesPlantilla.push({ llave: 'iconoRaiz', valor: iconoRaiz });

            var self = this;

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-boton-captura.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    if (self.procesosBotonCampoCaptura.length == 1) {
                        plantilla.find('#toolbar-content-' + self.idPlugin).remove();
                        self.element.empty().append(plantilla);
                        self.element.find('#toolbar-button-' + self.idPlugin).off('click');
                        self.element.find('#toolbar-button-' + self.idPlugin).on('click', self.procesosBotonCampoCaptura[0].Accion);
                        self.element.find('#toolbar-button-' + self.idPlugin).on('mousedown', function () {
                            self.campoCaptura.settings.pausarEventoBlur = true;
                        });
                    } else {
                        var plantillaA = plantilla.find('#toolbar-content-' + self.idPlugin + ' a').clone();
                        plantilla.find('#toolbar-content-' + self.idPlugin + ' a').remove();
                        for (var i = 0; i < self.procesosBotonCampoCaptura.length; i++) {
                            var elementoA = plantillaA.clone();
                            elementoA.on('click', self.procesosBotonCampoCaptura[i].Accion);
                            elementoA.find('i').addClass(self.procesosBotonCampoCaptura[i].Icono);
                            plantilla.find('#toolbar-content-' + self.idPlugin).append(elementoA);
                        }

                        self.element.empty().append(plantilla);
                        self.element.find('#toolbar-button-' + self.idPlugin).on('mousedown', function () {
                            self.campoCaptura.settings.pausarEventoBlur = true;
                        });
                        self.element.find('#toolbar-button-' + self.idPlugin).toolbar({
                            content: '#toolbar-content-' + self.idPlugin,
                            position: 'top',
                            hideOnClick: true,
                            zIndex:930
                        });
                        self.element.on('toolbarHidden',
                            function (event) {
                                self.campoCaptura.settings.pausarEventoBlur = false;
                                self.campoCaptura.manejarBlur(null);
                            });

                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla del botón de captura.');
                });
        }
    }

    /**
     * Implementación de un elemento de presentación encargado de mostrar al usuario un campo para la captura o visualización de un 
     * hecho contenido en un documento instancia XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlCampoCaptura implements ElementoPresentacionXbrl {

        /** Los parámetros usados para la creación/presentación del plugin en pantalla */
        public settings: XbrlCampoCapturaSettings;

        /** El hecho que se capturará o presentará al usuario */
        private hecho: model.Hecho;

        /** Indica si el modelo asociado al campo captura está "sucio" y necesita ser actualizado en pantalla */
        private isDirty: boolean;

        /** Indica si el componente se está editando o no */
        private editando: boolean;

        /** La clase que brinda la funcionalidad para presentar el campo captura al usuario */
        private campoCaptura: CampoCaptura;

        /** El elemento del DOM sobre el cual se presentará el editor/visor del hecho */
        private element: JQuery;

        /** El concepto de la taxonomía XBRL que define el hecho presentado/editado */
        private concepto: model.Concepto;

        /** Contiene el mapeo por defecto de un tipo de dato contra un campo de captura */
        private mapeoTiposDatoCampoCaptura: { [nombre: string]: CampoCaptura };

        /** La tabla navegable que alberga este campo */
        private tablaNavegable: JQuery;

        /** Indica que el capo captura es de reciente creación */
        private esRecienteCreacion: boolean;
        /**
        * Cadena con código javascript que se evalua cuando el elemento cambia.
        **/
        private cuandoCambia: string;

        /**
         * Inicializa el plugin de JQuery utilizando los parámetros proporcionados para su operación.
         *
         * @param element el elemento sobre el cual actuará el plugin.
         * @param settings los parámetros proporcionados para la operación del plugin.
         */
        public init(element: JQuery, settings: XbrlCampoCapturaSettings): void {
            this.element = element;
            this.settings = settings;
            this.editando = false;
            this.isDirty = true;
            this.esRecienteCreacion = true;
            var definicionPlantilla = abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla();

            var idConcepto = element.attr('xbrl:id-concepto');
            var idContexto = element.attr('xbrl:id-contexto');
            var idUnidad = element.attr('xbrl:id-unidad');
            var idHechoPlantilla = element.attr('xbrl:id-hecho-plantilla');
            var precision = element.attr('xbrl:precision');
            var decimales = element.attr('xbrl:decimales');
            var valorDefault = element.attr('xbrl:valor-default');
            var soloEdicion = element.attr('xbrl:solo-edicion');
            var soloLectura = element.attr('xbrl:solo-lectura');

            var esValorCalculado = element.attr('xbrl:es-valor-calculado');
            var ocultarDetalles = element.attr('xbrl:ocultar-detalles');
            var ultimo = element.attr('xbrl:ultimo');
            var crearHecho = element.attr('xbrl:crear-hecho');
            var crearHechoDobleClick = element.attr('xbrl:crear-hecho-dblclick');
            var parametrosAdicionales = element.attr('xbrl:parametros-adicionales');
            var formula = element.attr('xbrl:formula');
            var eliminable = element.attr('xbrl:eliminable');
            var abrirPopup = element.attr('xbr:abrir-popup');
            var idHecho = element.attr('xbrl:id-hecho');
            var accionCambio = element.attr('xbrl:accion-cambio');
            var cuandoCambia = element.attr('xbrl:cuando-cambia');
            
            this.element = element;

            this.settings = $.extend({
                idConcepto: idConcepto,
                idContexto: idContexto,
                idUnidad: idUnidad,
                idHechoPlantilla: idHechoPlantilla,
                precision: precision,
                decimales: decimales,
                valorDefault: valorDefault,
                soloEdicion: soloEdicion && soloEdicion == "true" ? true : false,
                soloLectura: soloLectura && soloLectura == "true" ? true : false,
                ocultarDetalles: ocultarDetalles && ocultarDetalles == "true" ? true : false,
                ultimo: ultimo,
                crearHecho: crearHecho != "false",
                crearHechoDobleClick: crearHechoDobleClick != "false",
                parametrosAdicionales: parametrosAdicionales,
                idPlugin: utils.UUIDUtils.generarUUID(),
                pausarEventoBlur: false,
                eliminable: eliminable,
                formula: formula,
                abrirPopup: abrirPopup && abrirPopup == "false" ? false : true,
                esValorCalculado: esValorCalculado && esValorCalculado == "true" ? true : false,
                esValorFijo: false,
                idHecho: idHecho,
                accionCambio: accionCambio,
                cuandoCambia: cuandoCambia
            }, settings);

            if ((idConcepto && definicionPlantilla.conceptosOpcionales && definicionPlantilla.conceptosOpcionales[idConcepto]) ||
                (idHechoPlantilla && definicionPlantilla.hechosPlantillaOpcionales && definicionPlantilla.hechosPlantillaOpcionales[idHechoPlantilla])) {
                this.settings.crearHecho = false;
                this.settings.crearHechoDobleClick = true;
                this.settings.eliminable = true;
            }

            if (this.settings.idHechoPlantilla && this.settings.idHecho) {
                throw new Error('Se debe especificar una de las opciones idHecho ó idHechoPlantilla');
            }
			var tieneIdentificadorHecho = this.settings.idHechoPlantilla || this.settings.idHecho;

            if (!this.settings.idConcepto && !tieneIdentificadorHecho) {
                throw new Error('Se debe especificar una de las opciones idHecho, idConcepto ó idHechoPlantilla');
            }

            if (this.settings.idConcepto && tieneIdentificadorHecho) {
                throw new Error('No se deben utilizar al mismo tiempo las opciones idConcepto y idHechoPlantilla ó idConcepto y idHecho');
            }

            if (!this.settings.idContexto && !tieneIdentificadorHecho) {
                //throw new Error('Se debe especificar una de las opciones idContexto, idHechoPlantilla ó idHecho');
                this.creaCampoVacio(element);
            }

            if (this.settings.idContexto && tieneIdentificadorHecho) {
                throw new Error('No se deben utilizar al mismo tiempo las opciones idContexto y idHechoPlantilla ó idContexto y idHecho');
            }

            if (this.settings.idUnidad && tieneIdentificadorHecho) {
                throw new Error('No se deben utilizar al mismo tiempo las opciones idUnidad y idHechoPlantilla ó idUnidad y idHecho');
            }

            if ((this.settings.decimales && this.settings.decimales != null) && (!this.settings.idUnidad || this.settings.idUnidad == null)) {
                throw new Error('Se requiere idUnidad cuando se usa decimales.');
            }

            if ((this.settings.precision && this.settings.precision != null) && (!this.settings.idUnidad || this.settings.idUnidad == null)) {
                throw new Error('Se requiere idUnidad cuando se usa precision.');
            }

            if ((this.settings.precision && this.settings.precision != null) && (this.settings.decimales && this.settings.decimales != null)) {
                throw new Error('No se deben utilizar al mismo tiempo las opciones precision y decimales.');
            }

            if (this.settings.idHecho) {

                this.hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerHechoPorId(this.settings.idHecho);
                if (!this.hecho) {

                    throw new Error("No existe el ehcho con el identificador " + this.settings.idHecho + "  en el documento de instancia.");
                }
                this.concepto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerConceptoPorId(this.hecho.IdConcepto);

            } else if (this.settings.idHechoPlantilla && this.settings.idHechoPlantilla != null) {
                var idHecho = AngularJQueryBridge.getInstance().obtenerAbaxService()
                    .obtenerIdHechoDocumentoInstanciaEquivalenteAIdHechoPlantilla(this.settings.idHechoPlantilla, this.settings.crearHecho);
                if (idHecho != null) {
                    this.hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerHechoPorId(idHecho);
                    if (this.hecho != null) {
                        this.concepto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerConceptoPorId(this.hecho.IdConcepto);
                    }
                } else {
                    this.creaCampoVacio(element);
                }
            } else {
                var idConcepto: string = this.settings.idConcepto;
                var idContexto: string = null;
                var idUnidad: string = null;

                if (this.settings.idContexto && this.settings.idContexto != null) {
                    idContexto = this.settings.idContexto;
                }
                if (this.settings.idUnidad && this.settings.idUnidad != null) {
                    idUnidad = this.settings.idUnidad;
                }
                //Para este caso el hecho puede ser null, en cuyo caso se agrega el campo para generar un hecho.
                this.hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerHecho(idConcepto, idContexto, idUnidad);
                this.concepto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerConceptoPorId(this.settings.idConcepto);
                if (!this.hecho || this.hecho == null) {
                    if (this.settings.crearHecho) {
                        this.crearHechoCampoCaptura();
                    } else {
                        this.creaCampoVacio(element);
                    }
                }
            }
            var tipoDatoFinal = null;
            if (this.concepto){
                var tipoDato = this.concepto.TipoDato;
                var tipoDatoXbrl = this.concepto.TipoDatoXbrl;
                

                if (abaxXBRL.model.TiposDatoXbrl.getInstance().getTiposCampoCaptura()[tipoDato]) {

                    tipoDatoFinal = tipoDato;
                } else if (abaxXBRL.model.TiposDatoXbrl.getInstance().getTiposCampoCaptura()[tipoDatoXbrl]) {

                    tipoDatoFinal = tipoDatoXbrl;
                }
            }

            if (tipoDatoFinal != null && this.hecho) {
                var claseCampoCaptura = XbrlPluginUtils.convertirCadenaAFuncion(abaxXBRL.model.TiposDatoXbrl.getInstance().getTiposCampoCaptura()[tipoDatoFinal]);
                this.campoCaptura = new claseCampoCaptura();
                this.campoCaptura.establecerElemento(this.element);
                this.campoCaptura.establecerHecho(this.hecho);
                if (!AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id]) {
                    AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id] = new Array<string>();
                }
                if ($.inArray(this.settings.idPlugin, AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id]) == -1) {
                    AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id].push(this.settings.idPlugin);
                }
                //Validamos si el hecho corresponde a un parametro de configuración.
                if (AngularJQueryBridge.getInstance().obtenerDefinicionPlantilla()) {
                    var conceptosFijos = AngularJQueryBridge.getInstance().obtenerDefinicionPlantilla().conceptosFijosDocumentoInstancia;
                    if (conceptosFijos && conceptosFijos[this.hecho.IdConcepto]) {
                        this.settings.esValorFijo = true;
                        this.hecho.ValorHecho = conceptosFijos[this.hecho.IdConcepto];
                    }
                }
                this.campoCaptura.establecerSettings(this.settings);
            } else {
                if (this.hecho) {
                    console.error({ "Error": "No existe el tipo de dato requerido ", "tipoDatoFina": tipoDatoFinal, "hecho": this.hecho, "tipoDato": tipoDato, "tipoDatoXbrl": tipoDatoXbrl });
                }
            }


            if ($(this.element).parent().is('td')) {
                var table = $(this.element).closest('table');
                if (table.data('tableKeyNavigator')) {
                    this.tablaNavegable = table;
                }
            }

            $(this.element).data('xbrlCampoCaptura', this);
            var self = this;
            $(this.element).on('destroyed', function () {
                if (self.hecho) {
                    if (AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[self.hecho.Id]) {
                        var indice = $.inArray(self.settings.idPlugin, AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[self.hecho.Id]);
                        if (indice > -1) {
                            AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[self.hecho.Id].splice(indice, 1);
                        }
                    }
                }
            });
            if (this.hecho) {
                AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().RequiereValidacion = true;
                AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().RequiereValidacionFormulas = true;
                this.actualizarUI();
            }
        }

        /**
         * Evalua la formula si es que fue indicado un valor de xbrl-formula en los atributos de la directiva.
         */
        private evaluaFormulaDirectiva(): void {
            if (this.settings.formula && this.settings.formula != null && this.settings.formula.length > 0) {
                var formula = AngularJQueryBridge.getInstance().obtenerAbaxService().obtenDefinicionFormulaPorId(this.settings.formula);
                if (formula && formula != null) {
                    formula.RequiereValidacion = true;
                    if (this.hecho && this.hecho !== null) {
                        AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().RequiereValidacion = true;
                        this.hecho.RequiereValidacion = true;
                    }
                    AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().RequiereValidacionFormulas = true;
                    AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
                } else {
                    throw new Error("No existe una formula con el identificador " + this.settings.formula + " en la plantilla.");
                }
            } else {
                if (this.settings && !this.settings.crearHecho) {

                    var idConcepto = '';
                    if (this.settings && this.settings.idConcepto) {
                        idConcepto = this.settings.idConcepto;
                    } else if (this.hecho && this.hecho !== null && this.hecho.IdConcepto) {
                        idConcepto = this.hecho.IdConcepto;
                    }

                    if (idConcepto) {
                        if (this.hecho && this.hecho !== null) {
                            AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().RequiereValidacion = true;
                            this.hecho.RequiereValidacion = true;
                        }
                        AngularJQueryBridge.getInstance().obtenerAbaxService().reevaluaFormulasPorConcepto(idConcepto);
                    }
                }
            }
        }

        /**
         * Crea el hecho que corresponde a este campo captura en caso de no existir en el documento instancia XBRL.
         */
        public crearHechoCampoCaptura(): void {
            if (this.settings.idHechoPlantilla && this.settings.idHechoPlantilla.trim().length > 0) {
                this.creaHechoPorIdPlantilla();
            } else {
            this.hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().crearHechoAPartirDeIdDescriptores(this.settings.idConcepto, this.settings.idContexto, this.settings.idUnidad, this.settings.precision, this.settings.decimales, this.settings.valorDefault);
            }
        }
        /**
        * Crea el hecho para el campo captura actual a partir de su identificador de hecho de plantilla. 
        **/
        private creaHechoPorIdPlantilla(): void {

            var idHecho = AngularJQueryBridge.getInstance().obtenerAbaxService().obtenerIdHechoDocumentoInstanciaEquivalenteAIdHechoPlantilla(this.settings.idHechoPlantilla);
            if (idHecho != null) {
                this.hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerHechoPorId(idHecho);
                if (this.hecho != null) {
                    this.concepto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerConceptoPorId(this.hecho.IdConcepto);
                }
            }

        }

        /**
         * Cambia el modo del campo de captura a edición si es que este no es de sólo lectura.
         */
        public cambiarAModoEdicion(): boolean {
            if (this.settings.soloEdicion) return false;
            if (this.settings.soloLectura || this.settings.esValorCalculado) {
                return false;
            }
            this.editando = true;
            if (this.tablaNavegable) {
                this.tablaNavegable.xbrlTablaExcel('pausar');
            }
            this.isDirty = true;
            this.actualizarUI();
            return true;
        }
        /**
        * Cambia a modo edicion o a modo vista según el estado actual.
        **/
        public editarToggle(): void {

            if (!this.hecho) {
                this.creaHechoDeCampoVacio();
            }

            if (this.editando && (this.campoCaptura instanceof CampoCapturaNumerico)) {
                this.manejarBlur(null);
            } else {
                this.cambiarAModoEdicion();
            }
        }

        /**
         * Actualiza la interfaz del usuario de acuerdo a los cambios del modelo
         */
        public actualizarUI(): void {
            if (!this.isDirty) return;
            try {

            this.actualizarValorDeModelo();
            this.isDirty = false;
            if (!this.hecho) {
                this.creaCampoVacio(this.element);
                return;
            }
            if (this.editando) {
                XbrlPluginUtils.clearSelection();
                this.campoCaptura.presentarEditor($.proxy(this.manejarBlur, this), $.proxy(this.manejarKeyDown, this), $.proxy(this.prepararBotonesDeEditor, this));
            } else {
                this.campoCaptura.presentarVisor($.proxy(this.manejarDobleClick, this));
            }

            } catch (excepsion) {

                if (this.hecho)
                {
                    console.error({ "Mensaje": "Error al actualiza UI del campo captura", "hecho": this.hecho });
                }
                console.error(excepsion);
				throw excepsion;
            }
        }

        /**
         * Determina qué botones deberán ser agregados al editor del campo captura
         */
        public prepararBotonesDeEditor() {
            if (this.hecho) {

                var self = this;
                var botones = new Array<model.IProcesoBotonItem>();

                var botonNotasAlPie: model.IProcesoBotonItem = {
                    Id: "botonNotasAlPie",
                    ClasesIcono: [],
                    Icono: "i i-popup",
                    Accion: $.proxy(function (): void {
                        this.settings.pausarEventoBlur = false;
                        NotaHechoCampoCaptura.getInstance().mostrarNotasHechoCampoCaptura(self.campoCaptura);
                        this.manejarBlur(null);
                    }, this)
                }
                botones.push(botonNotasAlPie);

                if (this.hecho.TieneDetalleOperaciones || this.hecho.TieneOperacionesCalculo) {
                    var botonProcesoDetalleCalculo: model.IProcesoBotonItem = {
                        Id: "botonDetalleCalculo",
                        ClasesIcono: [],
                        Icono: "fa-calculator",
                        Accion: $.proxy(function (): void {
                            if (!this.hecho.TieneDetalleOperaciones) {
                                this.element.find('input').focus();
                            } else {
                                this.settings.pausarEventoBlur = false;
                                DetalleOperacionCampoCaptura.getInstance().mostrarDetalleOperaciones(this.hecho.Id);
                                this.manejarBlur(null);
                            }
                        }, this)
                    }
                    botones.push(botonProcesoDetalleCalculo);
                }

                if (self.settings.eliminable) {
                    var botonProcesoEliminarHecho: model.IProcesoBotonItem = {
                        Id: "botonEliminarHecho",
                        ClasesIcono: [],
                        Icono: "fa-trash-o",
                        Accion: function (): void {
                            self.eliminaHecho();
                        }
                    }
                    botones.push(botonProcesoEliminarHecho);
                }
                if (self.settings.ocultarDetalles == true) {
                    self.element.find('xbrl\\:boton-campo-captura').remove();
                } else {
                    self.element.find('xbrl\\:boton-campo-captura').xbrlBotonCampoCaptura(botones, self);
                }
            }
        }

        /**
         * Elimina el hecho actual del campo de captura.
         */
        private eliminaHecho(): void {
            try {
                AngularJQueryBridge.getInstance().obtenerAbaxService().eliminarHechoDeDocumentoInstancia(this.hecho, this.settings.idHechoPlantilla);

                var idHecho = this.hecho.Id;
                this.hecho = null;
                this.evaluaFormulaDirectiva();
                this.isDirty = true;
                if (AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[idHecho]) {
                    var indice = $.inArray(this.settings.idPlugin, AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[idHecho]);
                    if (indice > -1) {
                        AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[idHecho].splice(indice, 1);
                    }
                }
                this.campoCaptura.establecerValor('');
                this.actualizarUI();
                AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
            } catch (error) {
                XbrlListadoErrores.getInstance().onError("Error al eliminar hecho", error);
            }
        }

        /**
         * Manejador para el evento blur del campo de captura el cual regresa el estado del campo a visor.
         *
         * @param e el evento que dió origen a la invocación de este método.
         */
        public manejarBlur(e: JQueryInputEventObject): void {
            if (this.settings.soloEdicion || this.settings.pausarEventoBlur) return;
            if (this.tablaNavegable) {
                this.tablaNavegable.xbrlTablaExcel('reanudar');
            }

            if (!this.hecho) {
                this.editando = false;
                $('xbrl\\:campo-captura').xbrlCampoCaptura('update');
                return;
            }

            if (this.esRecienteCreacion || this.campoCaptura.obtenerValor() !== this.hecho.ValorHecho) {
                this.esRecienteCreacion = false;
                this.hecho.ValorHecho = this.campoCaptura.obtenerValor();
                //Si no se referescan los campos por la reevaluación entonces los refrescamos directamente sin correr las evaluaciones del documento.
                if (!this.validarSiEsNecesarioReevaluarFormulas()) {
                    $('xbrl\\:campo-captura').xbrlCampoCaptura('update');
                }
                AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
            }
            this.editando = false;
            this.campoCaptura.presentarVisor($.proxy(this.manejarDobleClick, this));
        }

        /** 
         * Manejador para el evento doble click del campo captura el cual coloca al campo en modo editor.
         *
         * @param e el evento que dió origen a la invocación de este método.
         */
        public manejarDobleClick(e: JQueryMouseEventObject): void {
            if (this.settings.soloLectura || this.settings.esValorCalculado) return;
            if (this.tablaNavegable) {
                this.tablaNavegable.xbrlTablaExcel('pausar');
            }

            if (this.campoCaptura.obtenerValor().length > 1000000) {
                alert("Se ha desactivado el editor en línea de la nota para no afectar el desempeño del navegador; el tamaño óptimo soportado por el editor en línea es de 1MB.\nSe le sugiere editar el contenido desde Microsoft Word y posteriormente, importar o exportar individualmente la nota.");
            } else {
            this.editando = true;
            XbrlPluginUtils.clearSelection();
            this.campoCaptura.presentarEditor($.proxy(this.manejarBlur, this), $.proxy(this.manejarKeyDown, this), $.proxy(this.prepararBotonesDeEditor, this));
        }
        }

        /** 
         * Manejador para el evento key down del campo captura el cual permite navegar a los campos aledaños.
         *
         * @param e el evento que dió origen a la invocación de este método.
         */
        public manejarKeyDown(e: JQueryKeyEventObject): any {
            //console.log(1);
            if (this.editando && (e.which == AbaxXBRLCodigoTecla.Tab && !e.shiftKey)) {
                // Tab
                e.preventDefault();
                if (this.tablaNavegable) {
                    this.tablaNavegable.xbrlTablaExcel('editarSiguiente');
                } else {
                    this.ejecutaBlur();
                    this.editaSiguenteCampoEnPopUp();

                }
            } else if (this.editando && (e.which == AbaxXBRLCodigoTecla.Tab && e.shiftKey)) {
                // Shift + Tab
                e.preventDefault();
                if (this.tablaNavegable) {
                    this.tablaNavegable.xbrlTablaExcel('editarPrevio');
                } else {
                    this.ejecutaBlur();
                    this.editaCampoAnteriorEnPopUp();
                }
            } else if (e.which == AbaxXBRLCodigoTecla.Esc) {
                //Esc
                //e.preventDefault();
                if (this.editando && (this.campoCaptura instanceof CampoCapturaNumerico)) {
                    e.preventDefault();
                    this.ejecutaBlur();
                }
            } else if (e.which == AbaxXBRLCodigoTecla.Enter) {
                //Enter
                //e.preventDefault();
                if (this.editando && (this.campoCaptura instanceof CampoCapturaNumerico)) {
                    e.preventDefault();
                    if (this.tablaNavegable) {
                        if (e.shiftKey) {
                            this.tablaNavegable.xbrlTablaExcel('editUp');
                        } else {
                            this.tablaNavegable.xbrlTablaExcel('editDown');
                        }
                    } else {
                        this.ejecutaBlur();
                        if (e.shiftKey) {
                            this.editaCampoAnteriorEnPopUp();
                        } else {
                            this.editaSiguenteCampoEnPopUp();
                        }
                    }
                    return false;
                }
            }
        }

        /**
        * Edita el siguiente elemento dentro del popup.
        **/
        public editaSiguenteCampoEnPopUp(): void {

            var parent = this.element.parents('.modal-content:first');
            var listaElementos = parent.find('xbrl\\:campo-captura:not([xbrl\\:es-valor-calculado="true"])'); 
            var index = listaElementos.index(this.element) + 1;
            if (index >= listaElementos.length) {
                index = 0;
            }
            $(listaElementos[index]).xbrlCampoCaptura('editar');
        }

        /**
        * Edita el siguiente elemento dentro del popup.
        **/
        public editaCampoAnteriorEnPopUp(): void {

            var parent = this.element.parents('.modal-content:first');
            var listaElementos = parent.find('xbrl\\:campo-captura:not([xbrl\\:es-valor-calculado="true"])'); 
            var index = listaElementos.index(this.element) - 1;
            if (index < 0) {
                index = listaElementos.length -1;
            }
            $(listaElementos[index]).xbrlCampoCaptura('editar');
        }

        

        /**
        * Ejecuta el blur sobre el campo captura.
        **/
        public ejecutaBlur() {

            var autonumerico = this.element.find('input[type="text"][xbrl\\:auto-numeric]');
            if (autonumerico.length > 0) {
                autonumerico.blur();
            } else {
                this.manejarBlur(null);
            }
        }
    
        /**
         * Actualiza el valor del hecho asociado al campo de captura.
         */
        public actualizarValorDeModelo(): void {
            if (this.hecho && this.hecho !== null && this.campoCaptura) {
                this.campoCaptura.establecerValor(this.hecho.ValorHecho);
            }
        }

        /**
         * Establece el valor del hecho asociado al campo de captura.
         *
         * @param valor el valor a establecer.
         */
        public establecerValor(valor: string): void {
            if (!this.hecho) {
                this.creaHechoDeCampoVacio();
            }

            if (!this.hecho || this.hecho == null) {
                this.crearHechoCampoCaptura();
                this.campoCaptura.establecerHecho(this.hecho);
                if (!AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id]) {
                    AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id] = new Array<string>();
                }
                if ($.inArray(this.settings.idPlugin, AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id]) == -1) {
                    AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id].push(this.settings.idPlugin);
                }
            }
            if (this.campoCaptura && (valor !== this.hecho.ValorHecho || this.esRecienteCreacion)) {
                var resultado = true;
                this.esRecienteCreacion = false;
                try {
                    resultado = this.campoCaptura.establecerValor(valor);
                } catch (error) {
                    resultado = false;
                    console.log(error);
                    if (this.settings.valorDefault && this.settings.valorDefault !== null) {
                        try {
                            valor = this.settings.valorDefault;
                            resultado = this.campoCaptura.establecerValor(valor);
                        } catch (error) {
                            console.log(error);
                            resultado = false;
                        }
                    }
                }
                if (resultado) {
                    this.isDirty = true;
                    this.hecho.ValorHecho = valor;
                    this.validarSiEsNecesarioReevaluarFormulas();
                }
            }
        }

        /**
         * Valida si es necesario reevaluar las fórmulas asociadas a un campo de captura y si es así marca el documento para ser reevaluado azincronamiente y refrescar los datos.
         * @return Si es necesario reevaluar el documento o las formulas del documento.
         */
        private validarSiEsNecesarioReevaluarFormulas():boolean {
            var documentoInstancia = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia();
            var reevaluar: boolean = false;

            var conceptosSumatoria: Array<string> = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo[this.hecho.IdConcepto];
            if (conceptosSumatoria && conceptosSumatoria != null && conceptosSumatoria.length > 0) {
                for (var i = 0; i < conceptosSumatoria.length; i++) {
                    for (var j = 0; documentoInstancia.HechosPorIdConcepto[conceptosSumatoria[i]] && ( j < documentoInstancia.HechosPorIdConcepto[conceptosSumatoria[i]].length) ; j++) {
                        var otroHecho = documentoInstancia.obtenerHechoPorId(documentoInstancia.HechosPorIdConcepto[conceptosSumatoria[i]][j]);
                        if (otroHecho && otroHecho != null && $.inArray(otroHecho.IdContexto, documentoInstancia.GruposContextosEquivalentes[this.hecho.IdContexto]) != -1) {
                            if (otroHecho.EsNumerico) {
                                if (otroHecho.IdUnidad === this.hecho.IdUnidad || documentoInstancia.obtenerUnidadPorId(otroHecho.IdUnidad).EstructuralmenteIgual(documentoInstancia.obtenerUnidadPorId(this.hecho.IdUnidad))) {
                                    otroHecho.RequiereValidacion = true;
                                    AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().RequiereValidacion = true;
                                    reevaluar = true;
                                }
                            } else {
                                otroHecho.RequiereValidacion = true;
                                AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().RequiereValidacion = true;
                                reevaluar = true;
                            }
                        }
                    }
                }
            }
            var definicionPlantilla = AngularJQueryBridge.getInstance().obtenerDefinicionPlantilla();
            var idsFormulas: Array<string> = model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto[this.hecho.IdConcepto];
            if (definicionPlantilla && definicionPlantilla != null && idsFormulas && idsFormulas != null && idsFormulas.length > 0) {
                for (var i = 0; i < idsFormulas.length; i++) {
                    var formula = definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[idsFormulas[i]];
                    if (formula) {
                        formula.RequiereValidacion = true;
                        AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().RequiereValidacionFormulas = true;
                        reevaluar = true;
                    }
                }
            }
            return reevaluar;
        }

        /**
         * Marca las fórmulas que deben reevaluarse ya que se encuentran asociadas a un hecho que ha cambiado.
         * @return Si es necesario reevaluar el documento o las formulas del documento.
         */
        private marcarFormulasRelacionadasAEvaluar(): boolean {
            var documentoInstancia = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia();
            var reevaluar: boolean = false;
            
            this.hecho.RequiereValidacion = true;
            AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().RequiereValidacion = true;
            reevaluar = true;
                            
            var definicionPlantilla = AngularJQueryBridge.getInstance().obtenerDefinicionPlantilla();
            var idsFormulas: Array<string> = model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto[this.hecho.IdConcepto];
            if (definicionPlantilla && definicionPlantilla != null && idsFormulas && idsFormulas != null && idsFormulas.length > 0) {
                for (var i = 0; i < idsFormulas.length; i++) {
                    var formula = definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[idsFormulas[i]];
                    if (formula) {
                        formula.RequiereValidacion = true;
                        AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().RequiereValidacionFormulas = true;
                        reevaluar = true;
                    }
                }
            }
            return reevaluar;
        }

        /**
         * Obtiene el valor del hecho asociado al campo de captura.
         *
         * @return el valor del hecho asociado al campo de captura.
         */
        public obtenerValor(): string {
            var valor: string;
            if (this.campoCaptura) {
                valor = this.campoCaptura.obtenerValor();
            }
            return valor;
        }

        /**
         * Marca este campo de captura como "sucio"
         */
        public marcarSucio(): void {
            this.isDirty = true;
        }

        /**
         * Establece el atributo de sólo lectura del campo.
         *
         * @param soloLectura el valor del atributo a establecer.
         */
        public establecerSoloLectura(soloLectura: boolean): void {
            this.isDirty = true;
            this.settings.soloLectura = soloLectura;
        }

        /**
        * Crea un nuevo hecho de un campo que se encontraba vacio.
        **/
        private creaHechoDeCampoVacio(): void {
            this.isDirty = true;
            this.crearHechoCampoCaptura();
            var tipoDato = this.concepto.TipoDato;
            var tipoDatoXbrl = this.concepto.TipoDatoXbrl;
            var tipoDatoFinal = null;
            AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
            if (abaxXBRL.model.TiposDatoXbrl.getInstance().getTiposCampoCaptura()[tipoDato]) {
                tipoDatoFinal = tipoDato;
            } else if (abaxXBRL.model.TiposDatoXbrl.getInstance().getTiposCampoCaptura()[tipoDatoXbrl]) {
                tipoDatoFinal = tipoDatoXbrl;
            }


            if (tipoDatoFinal != null) {
                var claseCampoCaptura = XbrlPluginUtils.convertirCadenaAFuncion(abaxXBRL.model.TiposDatoXbrl.getInstance().getTiposCampoCaptura()[tipoDatoFinal]);
                this.campoCaptura = new claseCampoCaptura();
                this.campoCaptura.establecerElemento(this.element);
                this.campoCaptura.establecerHecho(this.hecho);
                if (!AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id]) {
                    AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id] = new Array<string>();
                }
                if ($.inArray(this.settings.idPlugin, AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id]) == -1) {
                    AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.hecho.Id].push(this.settings.idPlugin);
                }
                this.campoCaptura.establecerSettings(this.settings);
            }


            if ($(this.element).parent().is('td')) {
                var table = $(this.element).closest('table');
                if (table.data('tableKeyNavigator')) {
                    this.tablaNavegable = table;
                }
            }

            $(this.element).data('xbrlCampoCaptura', this);
            var self = this;
            $(this.element).on('destroyed', function () {
                if (self.hecho) {
                    if (AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[self.hecho.Id]) {
                        var indice = $.inArray(self.settings.idPlugin, AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[self.hecho.Id]);
                        if (indice > -1) {
                            AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[self.hecho.Id].splice(indice, 1);
                        }
                    }
                }
            });
            if (this.hecho) {

                this.actualizarUI();
            }
        }
        /**
        * Crea el campo vacio.
        **/
        private creaCampoVacio(elemento: JQuery): void {
            var rutaPlantilla: string = 'ts/templates/template-xbrl-agregar-hecho-campo-captura.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
            var contenidoPlantilla: string;
            var existePlantilla: boolean = false;
            var $self = this;
            var onSucess = function (plantilla: JQuery) {

                elemento.empty().append(plantilla);
                var crearHechoTrack = function ():void {
                    $self.creaHechoDeCampoVacio();
                    $self.isDirty = true;
                    $self.cambiarAModoEdicion();
                    $self.esRecienteCreacion = true;
                };
                if ($self.settings.crearHechoDobleClick) {
                elemento.find('.campo_vacio').on('dblclick', crearHechoTrack);
                }
           

                elemento.find('.campo_vacio').on('keyup', function (event:JQueryEventObject) {
                    if (event.which == AbaxXBRLCodigoTecla.Enter || event.which == AbaxXBRLCodigoTecla.Space) {
                        crearHechoTrack();
                    }
                });

            };
            var onError = function (textStatus: any, errorThrown: any) { XbrlListadoErrores.getInstance().onError(textStatus, errorThrown); };
            $self.isDirty = false;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables(rutaPlantilla, [], onSucess, onError);
        }
    }

    /**
     * Define el contrato mínimo requerido para una clase que puede generar contenido para un campo de captura.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface CampoCaptura {

        /**
         * Genera el HTML necesario para presentar el valor del hecho en modo de sólo edición al usuario.
         * El campo debe registrar el manejador del evento blur de la manera más apropiada para el campo de captura si es apropiado o permitido.
         *
         * @param manejadorBlur el manejador del evento blur.
         * @param manejadorKeyDown el manejador del evento key down.
         * @param callback función a ser invocada posterior a que terminar la operación de presentación del editor.
         */
        presentarEditor(manejadorBlur: (e: any) => any, manejadorKeyDown: (e: any) => any, callback?: () => void): void;

        /** 
         * Obtiene el valor que se ha capturado en el campo.
         *
         * @return el valor del hecho que se capturado en el campo.
         */
        obtenerValor(): string;

        /** 
         * Establece el valor que se presentará en el campo.
         *
         * @param valor el valor que se presentará en el campo.
         * @return true si fue posible establecer el valor. false en cualquier otro caso.
         */
        establecerValor(valor: string): boolean;

        /**
         * Establece el hecho que deberá ser presentado en pantalla.
         *
         * @param hecho el hecho que deberá ser presentado en pantalla.
         */
        establecerHecho(hecho: model.Hecho): void;

        /**
         * Obtiene el hecho que deberá ser presentado en pantalla.
         *
         * @return el hecho que deberá ser presentado en pantalla.
         */
        obtenerHecho(): model.Hecho;

        /**
         * Establece el elemento sobre el cual se presentará el hecho en pantalla.
         *
         * @param element el elemento sobre el cual se presentará el hecho en pantalla.
         */
        establecerElemento(element: JQuery): void;

        /**
         * Obtiene el elemento sobre el cual se presentará el hecho en pantalla.
         *
         * @return el elemento sobre el cual se presentará el hecho en pantalla.
         */
        obtenerElemento(): JQuery;

        /**
         * Establece los parámetros utilizados para la configuración del plugin.
         *
         * @param settings los parámetros utilizados para la configuración del plugin
         */
        establecerSettings(settings: XbrlCampoCapturaSettings): void;

        /**
         * Obtiene los parámetros utilizados para la configuración del plugin.
         *
         * @return los parámetros utilizados para la configuración del plugin.
         */
        obtenerSettings(): XbrlCampoCapturaSettings;

        /**
         * Genera el HTML necesario para presentar el valor del hecho en modo de sólo lectura al usuario.
         * El campo debe registrar el manejador del evento doble clic de la manera más apropiada para el visor si es apropiado o permitido.
         *
         * @param manejadorDobleClick el manejador del evento doble clic.
         */
        presentarVisor(manejadorDobleClick: (e: any) => any): void;

    }

    /**
     * Implementación del mecanismo de presentación de un campo captura para los tipos de datos numéricos de un documento instancia XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class CampoCapturaNumerico implements CampoCaptura {

        /** El valor del hecho representado en un tipo bignumber de la libreria math.js */
        private valorNumerico: decimal.Decimal;

        /** El hecho que deberá ser presentado al usuario */
        private hecho: model.Hecho;

        /** El elemento del DOM sobre el cual se presentará el hecho al usuario */
        private element: JQuery;

        /** Los parámetros de configuración utilizados para la creación del plugin */
        private settings: XbrlCampoCapturaSettings;

        /** El identificador del botón de operaciones asociado al plugin */
        private idBotonOperaciones: string;

        /** El identificador del campo input para que el usuario capture el número */
        private idInput: string;

        /**
         * Presenta el detalle de las operaciones asociadas a este hecho.
         *
         * @param e el evento asociado que disparó la invocación de este método.
         */
        private presentarDetalleOperacion(e: JQueryMouseEventObject): void {
            alert('Detalle del cálculo!');
        }
		
        /** Las operaciones de calculo y formulas asociadas a un hecho y permite mostrar en un modal */
        private detalleOperacionCampoCaptura: DetalleOperacionCampoCaptura;

        establecerHecho(hecho: model.Hecho): void {
            this.hecho = hecho;
            if (this.hecho && this.hecho != null && this.hecho.ValorHecho && this.hecho.ValorHecho != null) {
                this.hecho.validarHechoNumerico()
                this.establecerValor(this.hecho.ValorHecho);
            }
        }

        obtenerHecho(): model.Hecho {
            return this.hecho;
        }

        establecerElemento(element: JQuery): void {
            this.element = element;
        }

        obtenerElemento(): JQuery {
            return this.element;
        }

        establecerSettings(settings: XbrlCampoCapturaSettings): void {
            this.settings = settings;
        }

        obtenerSettings(): XbrlCampoCapturaSettings {
            return this.settings;
        }

        presentarVisor(manejadorDobleClick: (e: any) => any): void {
            var clases: string = '';
            if (this.hecho.ValorEstadoValidacion === model.EstadoValidacion.Invalido) {
                clases = 'text-danger';
            } else if (this.hecho.ValorEstadoValidacion === model.EstadoValidacion.Valido) {
                clases = 'text-success';
            } else if (this.hecho.ValorEstadoValidacion === model.EstadoValidacion.Advertencia) {
                clases = 'text-warning';
            }

            this.idBotonOperaciones = utils.UUIDUtils.generarUUID();

            this.element.prop('id', this.settings.idPlugin);

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();

            variablesPlantilla.push({ llave: 'valorNumerico', valor: this.obtenerValor() });
            variablesPlantilla.push({ llave: 'idBotonOperaciones', valor: this.idBotonOperaciones });
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });

            variablesPlantilla.push({ llave: 'clases', valor: clases });

            var self = this;

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_visor_http___www_xbrl_org_2003_instance_numericItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {

                    self.element.find('#' + self.idInput).off('keydown');

                    if (!self.hecho.TieneDetalleOperaciones || self.settings.ocultarDetalles) {
                        plantilla.find('#' + self.idBotonOperaciones).remove();
                    } else {
                        plantilla.find('#' + self.idBotonOperaciones).off('click');

                        plantilla.find('#' + self.idBotonOperaciones).on('click', function () {
                            self.detalleOperacionCampoCaptura = DetalleOperacionCampoCaptura.getInstance();
                            self.detalleOperacionCampoCaptura.mostrarDetalleOperaciones(self.obtenerHecho().Id);
                        });

                    }

                    if (self.hecho.ValorEstadoValidacion == model.EstadoValidacion.Invalido) {
                        var descripcionError = self.generarDescripcionError();
                        if (descripcionError && descripcionError !== null) {
                            
                            $(self.element).setTooltip({
                                options: {
                                container: 'body',
                                title: descripcionError
                                }
                            });
                        } 
                    } 

                    self.element.empty().append(plantilla);
                    var concepto = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().obtenerConceptoPorId(self.hecho.IdConcepto);
                    var tipoDato = abaxXBRL.model.TiposDatoXbrl.getInstance().get()[concepto.TipoDatoXbrl];
                    var tipoDatoNumericoPorConcepto = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().tipoDatoNumericoPorConcepto;
                    if(tipoDatoNumericoPorConcepto && tipoDatoNumericoPorConcepto[concepto.Id])
                    {
                        tipoDato = tipoDatoNumericoPorConcepto[concepto.Id];
                    }
                    shared.service.AbaxXBRLUtilsService.inicializaAutoNumericPorTipoDato(plantilla, tipoDato);
                    self.element.parent().off('dblclick');
                    self.settings.soloLectura = self.settings.soloLectura || AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().BloquearCamposCaptura;

                    if (!self.settings.esValorFijo)
                        self.element.parent().on('dblclick', manejadorDobleClick);

                    if (self.hecho.TieneNotasAlPie) {
                        $("#nota_" + self.settings.idPlugin).setTooltip();
                        $("#nota_" + self.settings.idPlugin).on('click', function () {
                            NotaHechoCampoCaptura.getInstance().mostrarNotasHechoCampoCaptura(self);
                        });
                    } else {
                        $("#nota_" + self.settings.idPlugin).remove();
                    }

                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo numérico');
                });
        }

        presentarEditor(manejadorBlur: (e: any) => any, manejadorKeyDown: (e: any) => any, callback?: () => void): void {
            var clases: string = '';
            this.idInput = utils.UUIDUtils.generarUUID();

            this.element.prop('id', this.settings.idPlugin);

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();

            variablesPlantilla.push({ llave: 'idInput', valor: this.idInput });
            variablesPlantilla.push({ llave: 'clases', valor: clases });

            var manejadorKeyUp = function (e: any) {
                if (e.which == AbaxXBRLCodigoTecla.Space) {
                    e.preventDefault();
                    $(this).select();
                    return false;
                }
            }
            var self = this;

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_editor_http___www_xbrl_org_2003_instance_numericItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {

                    plantilla.find('#' + self.idInput).val(self.valorNumerico.toString());

                    self.element.empty().append(plantilla);

                    var concepto = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().obtenerConceptoPorId(self.hecho.IdConcepto);
                    var tipoDato = abaxXBRL.model.TiposDatoXbrl.getInstance().get()[concepto.TipoDatoXbrl];
                    var tipoDatoNumericoPorConcepto = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().tipoDatoNumericoPorConcepto;
                    if(tipoDatoNumericoPorConcepto && tipoDatoNumericoPorConcepto[concepto.Id])
                    {
                        tipoDato = tipoDatoNumericoPorConcepto[concepto.Id];
                    }
                    shared.service.AbaxXBRLUtilsService.inicializaAutoNumericPorTipoDato(plantilla, tipoDato);

                    self.element.find('#' + self.idInput).focus();
                    self.element.find('#' + self.idInput).on('blur', function (e: JQueryInputEventObject): any {
                        self.establecerValor(self.element.find('#' + self.idInput).autoNumeric('get'));
                        if (!self.settings.soloLectura) {
                            manejadorBlur(e);
                        }
                    });
                    self.element.find('#' + self.idInput).off('keydown');
                    self.element.find('#' + self.idInput).on('keydown', manejadorKeyDown);
                    self.element.find('#' + self.idInput).on('keyup', manejadorKeyUp);
                    self.element.find('#' + self.idInput).select();
                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                    if (callback) {
                        callback();
                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo numérico');
                });
        }

        obtenerValor(): string {
            var valorHecho: string = null;
            try {
                valorHecho = this.valorNumerico.toString();//toFixed(2);
            } catch (error) {
                console.log(error);
            }

            return valorHecho;
        }

        establecerValor(valor: string): boolean {
            var resultado = true;
            try {
                var datoNumericoRegExp = /^(((\- *)?\$ *)|(\$ *(\- *)?)|(\- *))?((\d{1,3}( *\, *\d{3})*(.\d*)?)|(\d+(.\d*)?)|(.\d+))$/i;

                //console.log(valor);

                var valorAjustado = valor.trim();
                var numeroValido = datoNumericoRegExp.test(valorAjustado);
                if (numeroValido) {
                    valorAjustado = valorAjustado.replace(/[\$ \,]/g, "");
                    this.valorNumerico = math.eval('bignumber("' + valorAjustado + '")');
                } else {
                    this.valorNumerico = math.eval('bignumber(0.00)');
                    this.hecho.ValorHecho = '0';
                }
                
            } catch (error) {
                console.log(error);
                resultado = false;
            }
            return resultado;
        }

        /**
         * Genera la descripción del error asociado al hecho numérico.
         */
        private generarDescripcionError(): string {

            var descripcion = '';
            if (this.hecho.ValorEstadoValidacion == model.EstadoValidacion.Invalido) {
                var detalleOperacion: model.DetalleOperacion = null;
                var erroresHecho = model.OperacionesCalculoDocumentoInstancia.getInstance().ErroresPorIdHecho[this.hecho.Id];
                if (erroresHecho && erroresHecho != null && erroresHecho.length > 0) {
                    detalleOperacion = erroresHecho[0];
                    if (detalleOperacion.EsFormula) {
                        var descripcionVariableMotivo = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().describirHecho(this.hecho);
                        descripcion = detalleOperacion.Motivo.replace("{variable1}", descripcionVariableMotivo);
                    } else {
                        descripcion = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCRIPCION_ERROR_CALCULO', {
                            'descripcionHecho': AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().describirHecho(this.hecho),
                            'valorHecho': detalleOperacion.Valor.toString(),
                            'valorCalculado': detalleOperacion.ValorCalculado.toString()
                        });
                    }

                }
            }
            return descripcion;
        }
    }


    /**
    * Implementación del mecanismo de presentación de un campo captura para los tipos de datos de fecha de un documento instancia XBRL.
    *
    * @author Emigdio Hernandez
    * @version 1.0
    */
    export class CampoCapturaFecha implements CampoCaptura {
        /** Valor de la fecha */

        private valorDate: Date;

        /** El hecho que deberá ser presentado al usuario */
        private hecho: model.Hecho;

        /** El elemento del DOM sobre el cual se presentará el hecho al usuario */
        private element: JQuery;

        /** Los parámetros de configuración utilizados para la creación del plugin */
        private settings: XbrlCampoCapturaSettings;
        /**
        * Elemento que tiene asignado el date piker actualmente.
        **/
        private currentDatePikerelement: JQuery;

        establecerHecho(hecho: model.Hecho): void {
            this.hecho = hecho;
            if (this.hecho && this.hecho != null) {

                if (!this.hecho.ValorDefault) {

                    this.hecho.ValorDefault = moment(new Date()).format(abaxXBRL.model.ConstantesComunes.FORMATO_FECHA);
                }

                if (!this.hecho.ValorHecho || this.hecho.ValorHecho.length == 0) {

                    this.hecho.ValorHecho = this.hecho.ValorDefault;
                }

                this.hecho.validarHechoFecha();
                this.establecerValor(this.hecho.ValorHecho);
            }
        }

        obtenerHecho(): model.Hecho {
            return this.hecho;
        }

        establecerElemento(element: JQuery): void {
            this.element = element;
        }

        obtenerElemento(): JQuery {
            return this.element;
        }

        establecerSettings(settings: XbrlCampoCapturaSettings): void {
            this.settings = settings;
        }

        obtenerSettings(): XbrlCampoCapturaSettings {
            return this.settings;
        }

        presentarVisor(manejadorDobleClick: (e: any) => any): void {

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'valorHecho', valor: this.obtenerValor() });
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });

            this.element.prop('id', this.settings.idPlugin);

            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_visor_http___www_xbrl_org_2003_instance_dateItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    plantilla.addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionDivTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                    plantilla.find("#span_" + self.settings.idPlugin).addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionHechoTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                    self.element.empty().append(plantilla);

                    self.element.parent().off('dblclick');
                    self.settings.soloLectura = self.settings.soloLectura  || AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().BloquearCamposCaptura;

                    if (!self.settings.esValorFijo)
                        self.element.parent().on('dblclick', manejadorDobleClick);

                    if (self.hecho.TieneNotasAlPie) {
                        $("#nota_" + self.settings.idPlugin).setTooltip();
                        $("#nota_" + self.settings.idPlugin).on('click', function () {
                            NotaHechoCampoCaptura.getInstance().mostrarNotasHechoCampoCaptura(self);
                        });
                    } else {
                        $("#nota_" + self.settings.idPlugin).remove();
                    }

                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                    if (self.currentDatePikerelement) {
                        self.currentDatePikerelement.remove();
                        self.currentDatePikerelement = undefined;
                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo fecha');
                });
        }

        presentarEditor(manejadorBlur: (e: any) => any, manejadorKeyDown: (e: any) => any, callback?: () => void): void {
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'valorHecho', valor: this.obtenerValor() });
            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_editor_http___www_xbrl_org_2003_instance_dateItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    self.element.empty().append(plantilla);
                    var elemento = $("#input_" + self.settings.idPlugin);

                    elemento.datepicker({
                        format: 'yyyy-mm-dd',
                        autoclose: true,
                        language: 'es'
                    });


                    if (!moment(self.obtenerValor(), abaxXBRL.model.ConstantesComunes.FORMATO_FECHA, true).isValid()) {
                        self.establecerValor("");
                        elemento.datepicker();
                    } else {
                        elemento.datepicker('setDate', moment(self.obtenerValor(), abaxXBRL.model.ConstantesComunes.FORMATO_FECHA).toDate());
                    }

                    elemento.datepicker().on('hide', function (e) {
                        self.settings.pausarEventoBlur = false;
                        elemento.trigger('blur');
                    });

                    elemento.datepicker().on('show', function (e) {
                        self.settings.pausarEventoBlur = true;
                        self.currentDatePikerelement = $("div.datepicker").last();
                    });

                    elemento.on('blur', function (e: JQueryInputEventObject): any {
                        self.establecerValor(elemento.val());
                        if ($('xbrl\\:boton-campo-captura button:focus')) {

                            shared.service.AbaxXBRLUtilsService.setTimeout(function () {
                                manejadorBlur(e);
                            }, 500);
                        } else {

                            manejadorBlur(e);
                        }
                        
                        
                    });

                    elemento.focus();
                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                    if (callback) {
                        callback();
                    }

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo fecha');
                });
        }

        obtenerValor(): string {
            if (this.valorDate && this.valorDate != null) {
                return moment(this.valorDate).utc().format(abaxXBRL.model.ConstantesComunes.FORMATO_FECHA);
            }
            return "";
        }

        establecerValor(valor: string): boolean {
            var valDate = moment(valor, abaxXBRL.model.ConstantesComunes.FORMATO_FECHA, true);
            if (valDate.isValid()) {
                this.valorDate = valDate.utc().toDate();
            } else {
                this.valorDate = null;
                return false;
            }
            return true;
        }
    }

    /**
    * Implementación del mecanismo de presentación de un campo captura para los tipos de datos de Cadena de un documento instancia XBRL.
    *
    * @author Emigdio Hernandez
    * @version 1.0
    */
    export class CampoCapturaString implements CampoCaptura {
        /** Valor de la fecha */

        private valorString: string;

        /** El hecho que deberá ser presentado al usuario */
        private hecho: model.Hecho;

        /** El elemento del DOM sobre el cual se presentará el hecho al usuario */
        private element: JQuery;

        /** El identificador del botón de operaciones asociado al plugin */
        private idBotonOperaciones: string;

        /** Los parámetros de configuración utilizados para la creación del plugin */
        private settings: XbrlCampoCapturaSettings;

        /** Las operaciones de calculo y formulas asociadas a un hecho y permite mostrar en un modal */
        private detalleOperacionCampoCaptura: DetalleOperacionCampoCaptura;

        establecerHecho(hecho: model.Hecho): void {
            this.hecho = hecho;
            if (this.hecho && this.hecho != null && this.hecho.ValorHecho && this.hecho.ValorHecho != null) {
                this.establecerValor(this.hecho.ValorHecho);
            }
        }

        obtenerHecho(): model.Hecho {
            return this.hecho;
        }

        establecerElemento(element: JQuery): void {
            this.element = element;
        }

        obtenerElemento(): JQuery {
            return this.element;
        }

        establecerSettings(settings: XbrlCampoCapturaSettings): void {
            this.settings = settings;
        }

        obtenerSettings(): XbrlCampoCapturaSettings {
            return this.settings;
        }

        presentarVisor(manejadorDobleClick: (e: any) => any): void {

            this.idBotonOperaciones = utils.UUIDUtils.generarUUID();

            var clases: string = utils.EstilosCampoCaptura.obtenerClaseConIconoEstadoValidacionHechoTipoDatoXbrl(this.hecho.ValorEstadoValidacion);

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'valorHecho', valor: this.obtenerValor() });
            variablesPlantilla.push({ llave: 'idBotonOperaciones', valor: this.idBotonOperaciones });
            variablesPlantilla.push({ llave: 'clases', valor: clases });
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });

            this.element.prop('id', this.settings.idPlugin);

            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_visor_http___www_xbrl_org_2003_instance_stringItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    if (self.hecho && self.hecho != null) {
                        plantilla.addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionDivTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                        plantilla.find("#span_" + self.settings.idPlugin).addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionHechoTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                    }

                    if (!self.hecho.TieneDetalleOperaciones || self.settings.ocultarDetalles) {
                        plantilla.find('#' + self.idBotonOperaciones).remove();
                    } else {
                        plantilla.find('#' + self.idBotonOperaciones).off('click');

                        plantilla.find('#' + self.idBotonOperaciones).on('click', function () {
                            self.detalleOperacionCampoCaptura = DetalleOperacionCampoCaptura.getInstance();
                            self.detalleOperacionCampoCaptura.mostrarDetalleOperaciones(self.obtenerHecho().Id);
                        });
                    }

                    self.element.empty().append(plantilla);

                    var elementoEvaluar = self.element.children("div").first();
                    var currentHeight = elementoEvaluar.outerHeight();
                    var monitoredHeinght = self.element.data("monitoredHeinght");
                    if (monitoredHeinght != undefined &&
                        monitoredHeinght > 0 && currentHeight > 0 &&
                        monitoredHeinght != currentHeight)
                    {
                        $(window).trigger("xbrlCampoCapturaChangeHeigth", [self.element]);
                    }
                    self.element.data("monitoredHeinght", currentHeight);


                    self.element.parent().off('dblclick');
                    self.settings.soloLectura = self.settings.soloLectura  || AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().BloquearCamposCaptura;

                    if (!self.settings.esValorFijo)
                        self.element.parent().on('dblclick', manejadorDobleClick);

                    if (self.hecho.TieneNotasAlPie) {
                        $("#nota_" + self.settings.idPlugin).setTooltip();
                        $("#nota_" + self.settings.idPlugin).on('click', function () {
                            NotaHechoCampoCaptura.getInstance().mostrarNotasHechoCampoCaptura(self);
                        });
                    } else {
                        $("#nota_" + self.settings.idPlugin).remove();
                    }

                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo string');
                });
        }

        presentarEditor(manejadorBlur: (e: any) => any, manejadorKeyDown: (e: any) => any, callback?: () => void): void {

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'valorHecho', valor: this.obtenerValor() });
            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_editor_http___www_xbrl_org_2003_instance_stringItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    self.element.empty().append(plantilla);
                    $("#input_" + self.settings.idPlugin).focus();

                    $("#input_" + self.settings.idPlugin).off('blur');
                    $("#input_" + self.settings.idPlugin).on('blur', function (e: JQueryInputEventObject): any {
                        self.establecerValor($("#input_" + self.settings.idPlugin).val());
                        manejadorBlur(e);
                    });
                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                    if (callback) {
                        callback();
                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo string');
                });
        }

        obtenerValor(): string {
            if (this.valorString === undefined || this.valorString == null) {
                return "";
            }
            return this.valorString;
        }

        establecerValor(valor: string): boolean {
            if (valor === undefined) {
                this.valorString = "";
            } else {
                this.valorString = valor;
            }
            return true;
        }
    }

    /**
    * Implementación del mecanismo de presentación de un campo captura para los tipos de datos de Text Block o HTML de un documento instancia XBRL.
    *
    * @author Emigdio Hernandez
    * @version 1.0
    */
    export class CampoCapturaTextBlock implements CampoCaptura {
        /** Valor de la fecha */

        private valorHtml: string;

        /** El hecho que deberá ser presentado al usuario */
        private hecho: model.Hecho;

        /** El elemento del DOM sobre el cual se presentará el hecho al usuario */
        private element: JQuery;

        /** Los parámetros de configuración utilizados para la creación del plugin */
        private settings: XbrlCampoCapturaSettings;

        /** El identificador del botón de operaciones asociado al plugin */
        private idBotonOperaciones: string;

        /** El identificador del botón para mostrar el texto asociado al plugin */
        private idBotonMostrarTextoCompleto: string;

        /** Las operaciones de calculo y formulas asociadas a un hecho y permite mostrar en un modal */
        private detalleOperacionCampoCaptura: DetalleOperacionCampoCaptura;

        borrarNota() {
            var self = this;
            var si = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SI');
            var no = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_NO');
            var botones = JSON.parse('{ "' + si + '": true, "' + no + '": false }');
            var idNotaEliminar = self.hecho.Id;

            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ELIMINAR_NOTA'), {
                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_TITULO_ELIMINAR_NOTA'),
                buttons: botones,
                submit: function (e, v, m, f) {
                    if (v) {
                        var hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().HechosPorId[idNotaEliminar];
                        hecho.ValorHecho = "";
                        self.establecerValor("");

                        if (hecho.RequiereValidacion && hecho.ValorEstadoValidacion === model.EstadoValidacion.Valido) {
                            hecho.ValorEstadoValidacion = model.EstadoValidacion.Invalido;
                        }

                        $("#frame_" + self.settings.idPlugin).remove();
                        $("#descargar_nota_" + self.hecho.Id).remove();
                        $("#cargar_nota_" + self.hecho.Id).remove();
                        $("#borrar_nota_" + self.hecho.Id).remove();
                        $('#' + self.idBotonMostrarTextoCompleto).removeClass("i-arrow-down-2");

                        self.element.data('xbrlCampoCaptura').actualizarUI();
                    }
                }
            });
        }

        exportarNotaDocumentoWord() {
            var $self = this;
            $.isLoading({
                text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREPARANDO_DESCARGA')
            });

            var data = {
                nota: $self.valorHtml
                /*idioma: self.$scope.documentoInstancia.xbrlIdioma.ClaveIdioma,
                idUsuario: self.abaxService.idUsuarioActivo,
                idEmpresa: self.abaxService.idEmisoraActiva*/
            };

            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

            $.fileDownload('DocumentoInstancia/GenerarNotaDocumentoWord', {
                httpMethod: "POST",
                data: data,
                successCallback: function (response, url) {
                    $.isLoading('hide');
                },
                failCallback: function (response, url) {
                    $.isLoading('hide');

                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCARGA_ARCHIVO') + ":" + response,
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_DESCARGA'),
                            buttons: { aceptar: true }
                        }
                    );
                }
            });
        }

        /** Despliega una ventana para poder cargar consultado
        * @param campoCaptura Identificador unico del hecho
        */
        mostrarCargadorNota(campoCaptura: CampoCaptura) {
            var $self = this;
            var archivoWord;
            var idVentanaCargadorNota = utils.UUIDUtils.generarUUID();
            this.hecho = campoCaptura.obtenerHecho();

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idVentanaCargadorNota', valor: idVentanaCargadorNota });
            //variablesPlantilla.push({ llave: 'descripcionHecho', valor: this.descripcionHecho });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/templates/template-xbrl-cargar-nota-word.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    $('body').append(plantilla);

                    $('#archivoWord').unbind('change');
                    $('#archivoWord').bind('change', function (event) {
                        archivoWord = event.target["files"];
                        if (archivoWord !== undefined && archivoWord[0] && archivoWord[0].name) {
                            var nombreArchivo = archivoWord[0].name;
                            $('#archivoWord').next().find('input').val(nombreArchivo);
                        }
                    });

                    $('#archivoWord').unbind('click');
                    $('#archivoWord').bind('click', function () {
                        $('#archivoWord').next().find('input').val('');
                    });

                    $('#cargarNota_' + idVentanaCargadorNota).unbind('click');
                    $('#cargarNota_' + idVentanaCargadorNota).bind('click', function () {
                        var validExtensions = ['doc', 'docx'];
                        var filename = $("#archivoWord").val();

                        if (filename === undefined || filename === '') {
                            alert('Debe seleccionar un archivo word a importar, verifique.');
                            $('#archivoWord').next().find('input').val('');
                            return false;
                        }

                        var fileNameExt = filename.substr(filename.lastIndexOf('.') + 1);
                        if ($.inArray(fileNameExt, validExtensions) == -1) {
                            alert('La extensión del documento a importar sólo puede ser doc o docx, verifique.');
                            $('#archivoWord').next().find('input').val('');
                            return false;
                        }

                        var data = new FormData();
                        $.each(archivoWord, function (key, value) {
                            data.append('archivoDOC', value);
                        });

                        $.isLoading({ text: "Importando información del documento Word, espere..." });
                        $('#cargarNota_' + idVentanaCargadorNota).prop('disabled', true);

                        var successImportar = function (data, textStatus, jqXHR) {
                            if (data.Resultado) {
                                //var hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().HechosPorId[$self.hecho.Id];
                                $self.hecho.ValorHecho = data.InformacionExtra;
                                //$self.establecerValor(data.InformacionExtra);
                                $('#' + idVentanaCargadorNota).modal('hide');
                                $self.element.data('xbrlCampoCaptura').cambiarAModoEdicion();
                                
                            } else if (data.Mensaje != null) {
                                //var hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().HechosPorId[$self.hecho.Id];
                                $self.hecho.ValorHecho = data.InformacionExtra;
                                //$self.establecerValor(data.InformacionExtra);
                                alert(data.Mensaje);
                                $('#' + idVentanaCargadorNota).modal('hide');
                                $self.element.data('xbrlCampoCaptura').establecerSoloLectura(true);
                                $self.element.data('xbrlCampoCaptura').actualizarUI();
                            } else {
                                alert('El formato del documento Word no es correcto, verifique e inténtelo nuevamente.');
                            }
                        };

                        $.ajax({
                            url: 'DocumentoInstancia/ImportarDocumentoWord',
                            type: 'POST',
                            data: data,
                            cache: false,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data, textStatus, jqXHR) {
                                successImportar(data, textStatus, jqXHR);
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert('Ocurrió un error al importar el documento de Word al documento instancia. Inténtelo nuevamente.');
                            }
                        }).always(function () {
                            $('#cargarNota_' + idVentanaCargadorNota).prop('disabled', false);
                            $.isLoading('hide');
                            CKEDITOR.instances["text_" + $self.settings.idPlugin].focus();
                            CKEDITOR.instances["text_" + $self.settings.idPlugin].fire("change");
                        });

                    });

                    $('#' + idVentanaCargadorNota).modal();

                    $('#' + idVentanaCargadorNota).on('hidden.bs.modal', function () {
                        $('#' + idVentanaCargadorNota).remove();
                        $self.hecho.RequiereValidacion = true;
                        $('#' + campoCaptura.obtenerSettings().idPlugin).xbrlCampoCaptura();
                    });
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de las notas de los hechos');
                }
            );
        }

        establecerHecho(hecho: model.Hecho): void {
            this.hecho = hecho;
            if (this.hecho && this.hecho != null && this.hecho.ValorHecho && this.hecho.ValorHecho != null) {
                this.establecerValor(this.hecho.ValorHecho);
            }
        }

        obtenerHecho(): model.Hecho {
            return this.hecho;
        }

        establecerElemento(element: JQuery): void {
            this.element = element;
        }

        obtenerElemento(): JQuery {
            return this.element;
        }

        establecerSettings(settings: XbrlCampoCapturaSettings): void {
            this.settings = settings;
        }

        obtenerSettings(): XbrlCampoCapturaSettings {
            return this.settings;
        }

        inicializarFrame(manejadorDobleClick: (e: any) => any, valorHechoFrame: string, idPlugin:string): void {

            var $self = this;
            var contenidoFrame = $("#frame_" + idPlugin).contents();
            contenidoFrame.find("body").append(valorHechoFrame);

            contenidoFrame.find("body").on('dblclick', function () {

                if ($self.requiereAbrirPopup()) {

                    $self.mostrarPopUpTextBlock();
                } else {
                manejadorDobleClick(this);
                }
            });
        }

        /**
         * Determina si se requiere mostrar el popup para editar el campo de texto.
         * Valida el ancho del campo de texto sea menor a 400px y que no se encuentre ya dentro de un popup.
         * @return si se debe presentar el popup ó no.
         */
        public requiereAbrirPopup(): boolean {

            var $self = this;
            var $element = $self.element;
            var anchoElemento = $element.find('.campoTextBlock').outerWidth();
            var noCumpleAnchoMinimo = anchoElemento <= 400;
            var yaEstaDentroPopup = $element.parents(".dialogoModalTextBlock").length > 0;
            return noCumpleAnchoMinimo && !yaEstaDentroPopup;
        }
        /**
         * Muestra un dialogo modal con el bloque de texto.
         */
        public mostrarPopUpTextBlock(): void {

            var $self = this;
            var hecho = $self.hecho;
            var idCampoCapturaTextBlockModal = utils.UUIDUtils.generarUUID();
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();

            variablesPlantilla.push({ llave: 'idCampoCapturaTextBlockModal', valor: idCampoCapturaTextBlockModal });
            variablesPlantilla.push({ llave: 'descripcionHecho', valor: AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().describirHecho(hecho) });
            variablesPlantilla.push({ llave: 'hecho.IdConcepto', valor: hecho.IdConcepto });
            variablesPlantilla.push({ llave: 'hecho.IdContexto', valor: hecho.IdContexto });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-text-block.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {

                    $('body').append(plantilla);

                    if ($self.settings.soloLectura) {
                        $('#input_' + idCampoCapturaTextBlockModal).attr("xbrl:solo-lectura", "true");
                    }

                    $('#input_' + idCampoCapturaTextBlockModal).xbrlCampoCaptura();
                    $('#' + idCampoCapturaTextBlockModal).modal();

                    $('#' + idCampoCapturaTextBlockModal).on('hidden.bs.modal', function () {
                        $self.establecerValor(hecho.ValorHecho);
                        $('xbrl\\:campo-captura').xbrlCampoCaptura('update');
                        $('#' + idCampoCapturaTextBlockModal).empty();
                    });
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar el modal para mostrar la informacion de un text block');
                });
        }



        presentarVisor(manejadorDobleClick: (e: any) => any): void {

            this.idBotonOperaciones = utils.UUIDUtils.generarUUID();
            this.idBotonMostrarTextoCompleto = utils.UUIDUtils.generarUUID();

            var clases: string = utils.EstilosCampoCaptura.obtenerClaseConIconoEstadoValidacionHechoTipoDatoXbrl(this.hecho.ValorEstadoValidacion);

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'idHecho', valor: this.hecho && this.hecho != null ? this.hecho.Id : "" });
            variablesPlantilla.push({ llave: 'valorHecho', valor: this.obtenerValor() });
            variablesPlantilla.push({ llave: 'idBotonOperaciones', valor: this.idBotonOperaciones });
            variablesPlantilla.push({ llave: 'idBotonMostrarTextoCompleto', valor: this.idBotonMostrarTextoCompleto });
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });

            variablesPlantilla.push({ llave: 'clases', valor: clases });
            var claseBloqueTexto: string = utils.EstilosCampoCaptura.obtenerClaseConIconoEstadoValidacionHechoBloqueTexto(this.hecho.ValorEstadoValidacion);
            variablesPlantilla.push({ llave: 'claseMostrarTextoCompleto', valor: claseBloqueTexto });

            this.element.prop('id', this.settings.idPlugin);

            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_visor_http___www_xbrl_org_dtr_type_non-numeric_textBlockItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    if (self.hecho && self.hecho != null) {
                        plantilla.addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionDivTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                        plantilla.find("#span_" + self.settings.idPlugin).addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionHechoTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                    }

                    if (!self.hecho.TieneDetalleOperaciones || self.settings.ocultarDetalles) {
                        plantilla.find('#' + self.idBotonOperaciones).remove();
                    } else {
                        plantilla.find('#' + self.idBotonOperaciones).off('click');

                        plantilla.find('#' + self.idBotonOperaciones).on('click', function () {
                            self.detalleOperacionCampoCaptura = DetalleOperacionCampoCaptura.getInstance();
                            self.detalleOperacionCampoCaptura.mostrarDetalleOperaciones(self.obtenerHecho().Id);
                        });

                    }

                    
                    self.element.empty().append(plantilla);


                    var valorHechoFrame = self.obtenerValor();

                    if (valorHechoFrame != "") {

                        if (/firefox/.test(navigator.userAgent.toLowerCase()) || (navigator.appVersion != null && navigator.appVersion.toUpperCase().indexOf("MSIE 10") !== -1)) {
                            
                            $("#frame_" + self.settings.idPlugin).load(function () {
                                self.inicializarFrame(manejadorDobleClick, valorHechoFrame, self.settings.idPlugin);
                                
                            });
                        } else {
                            self.inicializarFrame(manejadorDobleClick, valorHechoFrame, self.settings.idPlugin);
                        }
                    } else {
                        $("#frame_" + self.settings.idPlugin).remove();
                    }


                    self.element.parent().off('dblclick');
                    self.settings.soloLectura = self.settings.soloLectura || AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().BloquearCamposCaptura;

                   

                    if (!self.settings.esValorFijo) {

                        self.element.parent().on('dblclick', function () {

                            var requiereAbrirPopup = self.requiereAbrirPopup();
                            var settingsAbrirPopup = ($(this).is("td") && self.settings.abrirPopup);

                            if (settingsAbrirPopup || requiereAbrirPopup) {

                                self.mostrarPopUpTextBlock();

                            } else {

                                manejadorDobleClick(this);
                            }
                        });
                    }

                    if (self.hecho.TieneNotasAlPie) {
                        $("#nota_" + self.settings.idPlugin).setTooltip();
                        $("#nota_" + self.settings.idPlugin).on('click', function () {
                            NotaHechoCampoCaptura.getInstance().mostrarNotasHechoCampoCaptura(self);
                        });
                    } else {
                        $("#nota_" + self.settings.idPlugin).remove();
                    }

                    if (self.obtenerValor() != null && self.obtenerValor().trim() != "" && self.obtenerValor().length > 1000000) {
                        $("#descargar_nota_" + self.hecho.Id).setTooltip();
                        $("#cargar_nota_" + self.hecho.Id).setTooltip();
                        $("#borrar_nota_" + self.hecho.Id).setTooltip();

                        $("#descargar_nota_" + self.hecho.Id).on('click', function (event) {
                            event.stopImmediatePropagation();
                            self.exportarNotaDocumentoWord();
                        });

                        $("#cargar_nota_" + self.hecho.Id).on('click', function (event) {
                            event.stopImmediatePropagation();
                            self.mostrarCargadorNota(self);
                        });

                        $("#borrar_nota_" + self.hecho.Id).on('click', function (event) {
                            event.stopImmediatePropagation();
                            self.borrarNota();
                        });
                    } else {
                        $("#descargar_nota_" + self.hecho.Id).remove();
                        $("#cargar_nota_" + self.hecho.Id).remove();
                        $("#borrar_nota_" + self.hecho.Id).remove();
                    }


                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }

                    if (self.obtenerValor().length == 0) {
                        plantilla.find('#' + self.idBotonMostrarTextoCompleto).removeClass("i-arrow-down-2");
                    }

                    /*
                    if (/firefox/.test(navigator.userAgent.toLowerCase()) || (navigator.appVersion != null && navigator.appVersion.toUpperCase().indexOf("MSIE 10") !== -1)) {
                        $("#frame_" + self.settings.idPlugin).load(function () {
                            $("#frame_" + self.settings.idPlugin).height($("#frame_" + self.settings.idPlugin).contents().find("body").height() + 20);
                        });
                    } else {
                        $("#frame_" + self.settings.idPlugin).height($("#frame_" + self.settings.idPlugin).contents().find("body").height() + 20);
                    }
                    */

                    plantilla.find('#' + self.idBotonMostrarTextoCompleto).on('click', function () {
                        if ($(this).hasClass("i-arrow-down-2")) {
                            $(this).removeClass("i-arrow-down-2")
                            $(this).addClass("i-arrow-up2")
                            $("#divAreaTexto" + self.idBotonMostrarTextoCompleto).removeClass("divTextBlockMaximo");
                            $("#frame_" + self.settings.idPlugin).height($("#frame_" + self.settings.idPlugin).contents().find("body").height() + 20);
                            $("#divAreaTexto" + self.idBotonMostrarTextoCompleto).height($("#frame_" + self.settings.idPlugin).contents().find("body").height()+30);
                            

                        } else {
                            $(this).removeClass("i-arrow-up2")
                            $(this).addClass("i-arrow-down-2")
                            
                            
                            $("#divAreaTexto" + self.idBotonMostrarTextoCompleto).addClass("divTextBlockMaximo");
                            $("#divAreaTexto" + self.idBotonMostrarTextoCompleto).height(200);
                            
                        }

                    });

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo text block');
                });
        }

        presentarEditor(manejadorBlur: (e: any) => any, manejadorKeyDown: (e: any) => any, callback?: () => void): void {
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'idHecho', valor: this.hecho && this.hecho != null ? this.hecho.Id : "" });
            variablesPlantilla.push({ llave: 'valorHecho', valor: this.obtenerValor() });
            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_editor_http___www_xbrl_org_dtr_type_non-numeric_textBlockItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    self.element.empty().append(plantilla);

                    var elementCkEditor = CKEDITOR.replace("text_" + self.settings.idPlugin, { startupFocus: true });

                    elementCkEditor.on('change', function (e): any {
                        CKEDITOR.currentInstance.focus();
                    });

                    elementCkEditor.on('blur', function (e): any {

                        if (self.settings.pausarEventoBlur) return;

                        if (e.editor.checkDirty()) {
                            e.editor.destroy();
                        } else {
                            e.editor.destroy();
                        }

                        self.establecerValor(this.getData());
                        manejadorBlur(e);
                    });

                    elementCkEditor.on('maximize', function (e): any {
                        if (e.data == CKEDITOR.TRISTATE_OFF) {
                            self.settings.pausarEventoBlur = false;
                        } else if (e.data == CKEDITOR.TRISTATE_ON) {
                            self.settings.pausarEventoBlur = true;
                        }
                    });

                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                    if (callback) {
                        callback();
                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo text block');
                });
        }

        obtenerValor(): string {
            if (this.valorHtml === undefined || this.valorHtml == null) {
                return "";
            }
            return this.valorHtml;
        }

        establecerValor(valor: string): boolean {
            if (valor === undefined) {
                this.valorHtml = "";
            } else {
                this.valorHtml = valor;
            }
            return true;
        }
    }


    /**
    * Implementación del mecanismo de presentación de un campo captura para los tipos de datos Boolean de un documento instancia XBRL.
    *
    * @author Emigdio Hernandez
    * @version 1.0
    */
    export class CampoCapturaBoolean implements CampoCaptura {
        
        /** Valor actualmente seleccionado **/
        private valorBoolean: boolean = false;
        
        /** El hecho que deberá ser presentado al usuario */
        private hecho: model.Hecho;

        /** El elemento del DOM sobre el cual se presentará el hecho al usuario */
        private element: JQuery;

        /** Los parámetros de configuración utilizados para la creación del plugin */
        private settings: XbrlCampoCapturaSettings;

        /** Identificador unico del tipo de dato xbrl boolean */
        private idSeleccionTipoDatoBoolean: string; 

        /** El identificador del botón de operaciones asociado al plugin */
        private idBotonOperaciones: string;

        /** Las operaciones de calculo y formulas asociadas a un hecho y permite mostrar en un modal */
        private detalleOperacionCampoCaptura: DetalleOperacionCampoCaptura;

        establecerHecho(hecho: model.Hecho): void {
            this.hecho = hecho;
            if (this.hecho && this.hecho != null && this.hecho.ValorHecho && this.hecho.ValorHecho != null) {
                this.hecho.validarHechoBoolean();
                this.establecerValor(this.hecho.ValorHecho);
            }
        }

        obtenerHecho(): model.Hecho {
            return this.hecho;
        }

        establecerElemento(element: JQuery): void {
            this.element = element;
        }

        obtenerElemento(): JQuery {
            return this.element;
        }

        establecerSettings(settings: XbrlCampoCapturaSettings): void {
            this.settings = settings;
        }

        obtenerSettings(): XbrlCampoCapturaSettings {
            return this.settings;
        }

        presentarVisor(manejadorDobleClick: (e: any) => any): void {

            this.idBotonOperaciones = utils.UUIDUtils.generarUUID();
            var clases: string = utils.EstilosCampoCaptura.obtenerClaseConIconoEstadoValidacionHechoTipoDatoXbrl(this.hecho.ValorEstadoValidacion);

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'valorSeleccionadoHecho', valor: this.obtenerValorPresentado(this.valorBoolean) });
            variablesPlantilla.push({ llave: 'idBotonOperaciones', valor: this.idBotonOperaciones });
            variablesPlantilla.push({ llave: 'clases', valor: clases });
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });

            this.element.prop('id', this.settings.idPlugin);

            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_visor_http___www_xbrl_org_2003_instance_booleanItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    if (self.hecho && self.hecho != null) {
                        plantilla.addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionDivTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                        plantilla.find("#span_" + self.settings.idPlugin).addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionHechoTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                    }

                    if (!self.hecho.TieneDetalleOperaciones || self.settings.ocultarDetalles) {
                        plantilla.find('#' + self.idBotonOperaciones).remove();
                    } else {
                        plantilla.find('#' + self.idBotonOperaciones).off('click');

                        plantilla.find('#' + self.idBotonOperaciones).on('click', function () {
                            self.detalleOperacionCampoCaptura = DetalleOperacionCampoCaptura.getInstance();
                            self.detalleOperacionCampoCaptura.mostrarDetalleOperaciones(self.obtenerHecho().Id);
                        });

                    }

                    self.element.empty().append(plantilla);

                    self.element.parent().off('dblclick');
                    self.settings.soloLectura = self.settings.soloLectura || AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().BloquearCamposCaptura;

                    if (!self.settings.esValorFijo)
                        self.element.parent().on('dblclick', manejadorDobleClick);

                    if (self.hecho.TieneNotasAlPie) {
                        $("#nota_" + self.settings.idPlugin).setTooltip();
                        $("#nota_" + self.settings.idPlugin).on('click', function () {
                            NotaHechoCampoCaptura.getInstance().mostrarNotasHechoCampoCaptura(self);
                        });
                    } else {
                        $("#nota_" + self.settings.idPlugin).remove();
                    }

                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                    $("#span_" + self.settings.idPlugin).on('click', function () {
                        var valorEtiqueta = "";
                        if (self.valorBoolean) {

                            valorEtiqueta = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().xbrlIdioma.ClaveIdioma == 'es' ? abaxXBRL.model.ConstantesComunes.EDITOR_XBRL_ES_SI : abaxXBRL.model.ConstantesComunes.EDITOR_XBRL_EN_SI;
                        } else {
                            valorEtiqueta = abaxXBRL.model.ConstantesComunes.EDITOR_XBRL_NO;
                        }

                        $(this).empty().append(valorEtiqueta);

                    });
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo boolean');
                });
        }

        presentarEditor(manejadorBlur: (e: any) => any, manejadorKeyDown: (e: any) => any, callback?: () => void): void {
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'opcionBooleanTrue', valor: this.obtenerValorPresentado(true) });
            variablesPlantilla.push({ llave: 'opcionBooleanFalse', valor: this.obtenerValorPresentado(false) });

            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_editor_http___www_xbrl_org_2003_instance_booleanItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    self.element.empty().append(plantilla);
                    $("#input_" + self.settings.idPlugin).val("" + self.valorBoolean);
                    $("#input_" + self.settings.idPlugin).focus();

                    $("#input_" + self.settings.idPlugin).on('blur', function (e: JQueryInputEventObject): any {
                        self.establecerValor($("#input_" + self.settings.idPlugin).val());
                        manejadorBlur(e);
                    });
                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                    if (callback) {
                        callback();
                    }

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo boolean');
                });
        }

        obtenerValor(): string {
            if (this.valorBoolean) {
                return "true";
            }
            return "false";
        }

        establecerValor(valor: string): boolean {
            if (valor && valor.trim().toLowerCase() == "true") {
                this.valorBoolean = true;
            } else {
                this.valorBoolean = false;
            }
            return true;
        }

        obtenerValorPresentado(valorBoolean: boolean): string {
            var nombreConcepto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia.ConceptosPorId[this.hecho.IdConcepto].Nombre;
            var stringRep = abaxXBRL.model.ConstantesComunes.VALOR_FALSE + abaxXBRL.model.ConstantesComunes.ESPACIO_VACIO + nombreConcepto;
            if (valorBoolean) {
                stringRep = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().xbrlIdioma.ClaveIdioma == 'es' ? abaxXBRL.model.ConstantesComunes.EDITOR_XBRL_ES_SI : abaxXBRL.model.ConstantesComunes.EDITOR_XBRL_EN_SI;
            } else {
                stringRep = abaxXBRL.model.ConstantesComunes.EDITOR_XBRL_NO;
            }


            return stringRep;
        }
    }

    /**
    * Implementación del mecanismo de presentación de un campo captura para los tipos de datos Token item type de un documento instancia XBRL.
    *
    * @author Emigdio Hernandez
    * @version 1.0
    */
    export class CampoCapturaToken implements CampoCaptura {
        
        /** Valor actualmente seleccionado **/
        private valorHecho: string;
        
        /** El hecho que deberá ser presentado al usuario */
        private hecho: model.Hecho;

        /** El elemento del DOM sobre el cual se presentará el hecho al usuario */
        private element: JQuery;

        /** Los parámetros de configuración utilizados para la creación del plugin */
        private settings: XbrlCampoCapturaSettings;

        /** Definición de una opción del tipo de dato token item tupe*/
        private opcionBaseToken: string = "<option value=\"valorToken\">valorToken</option>";

        /** El identificador del botón de operaciones asociado al plugin */
        private idBotonOperaciones: string;

        /** Las operaciones de calculo y formulas asociadas a un hecho y permite mostrar en un modal */
        private detalleOperacionCampoCaptura: DetalleOperacionCampoCaptura;

        establecerHecho(hecho: model.Hecho): void {
            this.hecho = hecho;

            if (this.hecho && this.hecho != null && this.hecho.ValorHecho && this.hecho.ValorHecho != null && this.hecho.ValorHecho.length > 0) {

                this.establecerValor(this.hecho.ValorHecho);
            } else {

                var concepto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia.ConceptosPorId[this.obtenerHecho().IdConcepto];
                var ListaValoresToken = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia.TiposDeDatoXbrlPorNombre[concepto.TipoDato].ListaValoresToken;
                if (ListaValoresToken && ListaValoresToken.length > 0) {

                    this.hecho.ValorHecho = ListaValoresToken[0];
                }
            }
        }

        obtenerHecho(): model.Hecho {
            return this.hecho;
        }

        establecerElemento(element: JQuery): void {
            this.element = element;
        }

        obtenerElemento(): JQuery {
            return this.element;
        }

        establecerSettings(settings: XbrlCampoCapturaSettings): void {
            this.settings = settings;
        }

        obtenerSettings(): XbrlCampoCapturaSettings {
            return this.settings;
        }

        presentarVisor(manejadorDobleClick: (e: any) => any): void {

            this.idBotonOperaciones = utils.UUIDUtils.generarUUID();
            var clases: string = utils.EstilosCampoCaptura.obtenerClaseConIconoEstadoValidacionHechoTipoDatoXbrl(this.hecho.ValorEstadoValidacion);

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'valorHecho', valor: this.obtenerValor() });
            variablesPlantilla.push({ llave: 'idBotonOperaciones', valor: this.idBotonOperaciones });
            variablesPlantilla.push({ llave: 'clases', valor: clases });
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });

            this.element.prop('id', this.settings.idPlugin);

            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_visor_http___www_xbrl_org_2003_instance_tokenItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    if (self.hecho && self.hecho != null) {
                        plantilla.addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionDivTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                        plantilla.find("#span_" + self.settings.idPlugin).addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionHechoTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                    }

                    if (!self.hecho.TieneDetalleOperaciones || self.settings.ocultarDetalles) {
                        plantilla.find('#' + self.idBotonOperaciones).remove();
                    } else {
                        plantilla.find('#' + self.idBotonOperaciones).off('click');

                        plantilla.find('#' + self.idBotonOperaciones).on('click', function () {
                            self.detalleOperacionCampoCaptura = DetalleOperacionCampoCaptura.getInstance();
                            self.detalleOperacionCampoCaptura.mostrarDetalleOperaciones(self.obtenerHecho().Id);
                        });

                    }
                    

                    self.element.empty().append(plantilla);

                    self.element.parent().off('dblclick');
                    self.settings.soloLectura = self.settings.soloLectura || AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().BloquearCamposCaptura;


                    if (!self.settings.esValorFijo)
                        self.element.parent().on('dblclick', manejadorDobleClick);

                    if (self.hecho.TieneNotasAlPie) {
                        $("#nota_" + self.settings.idPlugin).setTooltip();
                        $("#nota_" + self.settings.idPlugin).on('click', function () {
                            NotaHechoCampoCaptura.getInstance().mostrarNotasHechoCampoCaptura(self);
                        });
                    } else {
                        $("#nota_" + self.settings.idPlugin).remove();
                    }

                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo token');
                });
        }

        presentarEditor(manejadorBlur: (e: any) => any, manejadorKeyDown: (e: any) => any, callback?: () => void): void {
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'opcionesTokenItem', valor: this.obtenerOpcionesToken() });
            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_editor_http___www_xbrl_org_2003_instance_tokenItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {

                    //Si no existe el elemento de lista de valores de token
                    var removerSelect = false;
                    var pattern = null;
                    if (self.hecho && self.hecho != null) {
                        var concepto = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().Taxonomia.ConceptosPorId[self.hecho.IdConcepto];
                        if (concepto && concepto != null) {
                            var idTipoDato = concepto.TipoDato;
                            if (idTipoDato && idTipoDato != null) {
                                var tipoDato = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().Taxonomia.TiposDeDatoXbrlPorNombre[idTipoDato];
                                if (tipoDato && tipoDato != null) {
                                    if (!tipoDato.ListaValoresToken || tipoDato.ListaValoresToken == null || tipoDato.ListaValoresToken.length == 0) {
                                        //Se prepara un campo de captura de cadena
                                        removerSelect = true;
                                        pattern = tipoDato.Pattern && tipoDato.Pattern != null ? tipoDato.Pattern : "";
                                    }
                                }
                            }
                        }
                    }
                    var idCampo = "";
                    if (removerSelect) {
                        plantilla.find('#select_' + self.settings.idPlugin).remove();
                        idCampo = "#input_" + self.settings.idPlugin;
                    } else {
                        plantilla.find('#input_' + self.settings.idPlugin).remove();
                        idCampo = "#select_" + self.settings.idPlugin;
                    }

                    self.element.empty().append(plantilla);
                    var element = $(idCampo);
                    element.val("" + self.obtenerValor());
                    element.focus();

                    element.on('blur', function (e: JQueryInputEventObject): any {
                        self.establecerValor(element.val());
                        manejadorBlur(e);
                    });
                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                    if (callback) {
                        callback();
                    }

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo token');
                });
        }

        obtenerValor(): string {
            if (this.valorHecho) {
                return this.valorHecho;
            }
            return "";
        }

        establecerValor(valor: string): boolean {
            if (valor) {
                this.valorHecho = valor;
            } else {
                this.valorHecho = "";
            }
            if (this.settings && this.settings.cuandoCambia) {
                try {

                    eval("(" + this.settings.cuandoCambia + ")");
                } catch (error) {
                    console.error(error);
                }
            }

            return true;
        }

        obtenerOpcionesToken(): string {

            var opcionesToken = "";
            var concepto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia.ConceptosPorId[this.obtenerHecho().IdConcepto];
            var ListaValoresToken = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia.TiposDeDatoXbrlPorNombre[concepto.TipoDato].ListaValoresToken;

            for (var indiceValorToken in ListaValoresToken) {
                opcionesToken += this.opcionBaseToken.replace(/valorToken/gi, ListaValoresToken[indiceValorToken]);
            }

            return opcionesToken;
        }


    }

    /**
    * Implementación del mecanismo de presentación de un campo captura para los tipos de datos de Archivo Adjunto de un documento instancia XBRL.
    *
    * @author Emigdio Hernandez
    * @version 1.0
    */
    export class CampoCapturaBinary implements CampoCaptura {
        /** Valor de la fecha */

        private valorString: string;

        /** El hecho que deberá ser presentado al usuario */
        private hecho: model.Hecho;

        /** El elemento del DOM sobre el cual se presentará el hecho al usuario */
        private element: JQuery;

        /** El identificador del botón de operaciones asociado al plugin */
        private idBotonOperaciones: string;

        /** Los parámetros de configuración utilizados para la creación del plugin */
        private settings: XbrlCampoCapturaSettings;

        /** Las operaciones de calculo y formulas asociadas a un hecho y permite mostrar en un modal */
        private detalleOperacionCampoCaptura: DetalleOperacionCampoCaptura;

        establecerHecho(hecho: model.Hecho): void {
            this.hecho = hecho;
            if (this.hecho && this.hecho != null && this.hecho.ValorHecho && this.hecho.ValorHecho != null) {
                this.establecerValor(this.hecho.ValorHecho);
            }
        }

        obtenerHecho(): model.Hecho {
            return this.hecho;
        }

        establecerElemento(element: JQuery): void {
            this.element = element;
        }

        obtenerElemento(): JQuery {
            return this.element;
        }

        establecerSettings(settings: XbrlCampoCapturaSettings): void {
            this.settings = settings;
        }

        obtenerSettings(): XbrlCampoCapturaSettings {
            return this.settings;
        }

        configurarBotones(): void {
            this.element.find("#btn_editar_" + this.settings.idPlugin).hide();
            this.element.find("#btn_borrar_" + this.settings.idPlugin).hide();
            this.element.find("#btn_descargar_" + this.settings.idPlugin).hide();

            if (!this.settings.soloLectura) {
                this.element.find("#btn_editar_" + this.settings.idPlugin).show();
                if (this.obtenerValor() !== undefined && this.obtenerValor() != null && this.obtenerValor().length > 0) {
                    this.element.find("#btn_descargar_" + this.settings.idPlugin).show();
                    this.element.find("#btn_borrar_" + this.settings.idPlugin).show();
                }
            } else {
                if (this.obtenerValor() !== undefined && this.obtenerValor() != null && this.obtenerValor().length > 0) {
                    this.element.find("#btn_descargar_" + this.settings.idPlugin).show();
                }
            }

            if (this.obtenerValor() !== undefined && this.obtenerValor() != null && this.obtenerValor().length > 0) {
                this.element.find("#contenedor_" + this.settings.idPlugin).removeClass("campo_vacio");
                this.element.find("#indicador_vacio_" + this.settings.idPlugin).html("");
            } else {
                this.element.find("#contenedor_" + this.settings.idPlugin).addClass("campo_vacio");
                this.element.find("#indicador_vacio_" + this.settings.idPlugin).html(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("ETIQUETA_VACIO"));
            }
        }

        private b64toBlob(b64Data, contentType): Blob {
            contentType = contentType || '';
            var sliceSize = 1024;
            var byteCharacters = atob(b64Data);
            var bytesLength = byteCharacters.length;
            var slicesCount = Math.ceil(bytesLength / sliceSize);
            var byteArrays = new Array(slicesCount);

            for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
                var begin = sliceIndex * sliceSize;
                var end = Math.min(begin + sliceSize, bytesLength);

                var bytes = new Array(end - begin);
                for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                    bytes[i] = byteCharacters[offset].charCodeAt(0);
                }
                byteArrays[sliceIndex] = new Uint8Array(bytes);
            }
            return new Blob(byteArrays, { type: contentType });
        }


        descargarArchivo() {
            var self = this;
            var anchor = $('<a/>');
            var extensionesPermitidas = self.element.attr("xbrl:extensiones");
            if (extensionesPermitidas === undefined) {
                extensionesPermitidas = "pdf";
            }

            var fileName = self.hecho.IdConcepto + "." + extensionesPermitidas.split(",")[0].trim();
            var mimeType = 'application/download';
            var binario = this.b64toBlob(self.hecho.ValorHecho, "");
            var hrefBlob = null;
            if (window.navigator.msSaveOrOpenBlob) {
               
                $(anchor).click(function () {
                    window.navigator.msSaveOrOpenBlob(binario, fileName);
                });
            } else {
                hrefBlob = window.URL.createObjectURL(binario);
                anchor.attr({
                    href: hrefBlob,
                    download: fileName
                });

            }
            $('body').append(anchor);
            anchor[0].click();
            if (hrefBlob != null) {
                window.URL.revokeObjectURL(hrefBlob);
                hrefBlob = null;
            }
            binario = null;
            anchor.remove();
        }
        partirCadena(cadenaEntrada:string): string {
            var tamanoLinea = 80;
            var tamano = cadenaEntrada.length;
            var numLineas = Math.ceil(tamano / tamanoLinea);
            var resultado = "";
            for (var idxLinea = 0; idxLinea < numLineas; ++idxLinea) {
                var inicio = idxLinea * tamanoLinea;
                var fin = Math.min(inicio + tamanoLinea, tamano);

                var strLinea = cadenaEntrada.substring(inicio, fin);

                resultado += strLinea+"\n";
            }
            return resultado;
        }
        presentarModalImportacion(): void {

            var self = this;


            var variablesPlantillaBase64 = new Array<{ llave: string; valor: string; }>();

            variablesPlantillaBase64.push({ llave: 'idPlugin', valor: self.settings.idPlugin });
            variablesPlantillaBase64.push({ llave: 'etiquetaConcepto', valor: self.obtenerEtiquetaConcepto(self.obtenerHecho().IdConcepto) });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-convertir-archivo-base64.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantillaBase64,
                function (plantilla: JQuery) {

                    $('body').append(plantilla);

                    $('#ventana_' + self.settings.idPlugin).modal();

                    $('#ventana_' + self.settings.idPlugin).on('hidden.bs.modal', function () {
                        $('#ventana_' + self.settings.idPlugin).remove();
                    });
                    var archivoImport = null;
                    plantilla.find("#archivo_" + self.settings.idPlugin).unbind();
                    plantilla.find("#archivo_" + self.settings.idPlugin).bind('change', function (event) {
                        archivoImport = event.target["files"];
                        if (archivoImport !== undefined && archivoImport[0] && archivoImport[0].name) {
                            var nombreArchivo = archivoImport[0].name;
                            plantilla.find("#nomre_archivo_" + self.settings.idPlugin).val(nombreArchivo);
                        }
                    });

                    $("#archivo_" + self.settings.idPlugin).unbind('click');
                    $("#archivo_" + self.settings.idPlugin).bind('click', function () {
                        plantilla.find("#nomre_archivo_" + self.settings.idPlugin).val('');
                    });



                    $('#cargarArchivo_' + self.settings.idPlugin).unbind('click');
                    $('#cargarArchivo_' + self.settings.idPlugin).bind('click', function () {
                        var descripcionValidExt = 'pdf';
                        var validExtensions = ['pdf'];
                        var parametroExtensiones = self.element.attr("xbrl:extensiones");
                        if (parametroExtensiones !== undefined && parametroExtensiones != null) {
                            validExtensions = parametroExtensiones.split(",");
                            descripcionValidExt = parametroExtensiones;
                        }

                        var filename = $("#nomre_archivo_" + self.settings.idPlugin).val();

                        if (filename === undefined || filename === '') {
                            alert('Debe seleccionar un archivo a importar, verifique.');
                            $("#archivo_" + self.settings.idPlugin).val('');
                            return false;
                        }

                        var fileNameExt = filename.substr(filename.lastIndexOf('.') + 1);
                        if ($.inArray(fileNameExt, validExtensions) == -1) {
                            alert('La extensión del documento a importar sólo pueden ser ' + descripcionValidExt + '; verifique.');
                            $("#archivo_" + self.settings.idPlugin).val('');
                            return false;
                        }

                        var data = new FormData();
                        $.each(archivoImport, function (key, value) {
                            data.append('archivoImportar', value);
                        });

                        $.isLoading({ text: "Importando contenido del archivo, espere..." });
                        $('#cargarArchivo_' + self.settings.idPlugin).prop('disabled', true);

                        var reader = new FileReader();
                        reader.readAsDataURL(archivoImport[0]);
                        reader.onload = function () {
                            var abaxService = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService();
                            var documento = abaxService.getDocumentoInstancia();
                            self.hecho.ValorHecho = self.partirCadena(reader.result.toString().replace("data:application/pdf;base64,", ""));
                            $('#cargarArchivo_' + self.settings.idPlugin).prop('disabled', false);
                            $('#ventana_' + self.settings.idPlugin).modal('hide');
                            self.element.data('xbrlCampoCaptura').actualizarUI();
                            $.isLoading('hide');
                            documento.PendienteGuardar = true;
                            abaxService.reevaluaFormulasPorConcepto(self.hecho.IdConcepto);
                            
                        };


                        

                        /*
                        $.ajax({
                            url: 'DocumentoInstancia/ImportarArchivoBase64',
                            type: 'POST',
                            data: data,
                            cache: false,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data, textStatus, jqXHR) {
                                successImportar(data, textStatus, jqXHR);
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert('Ocurrió un error al importar el archivo binario al documento instancia. Inténtelo nuevamente.');
                            }
                        }).always(function () {
                            $('#cargarArchivo_' + self.settings.idPlugin).prop('disabled', false);
                            $.isLoading('hide');

                        });
                        */

                    });

                    $('#cancelar_' + self.settings.idPlugin).bind('click', function () {
                        self.element.data('xbrlCampoCaptura').actualizarUI();

                    });

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla para importar un archivo binario del concepto');
                });
        }

        presentarVisor(manejadorDobleClick: (e: any) => any): void {
            var self = this;
            this.idBotonOperaciones = utils.UUIDUtils.generarUUID();

            var clases: string = utils.EstilosCampoCaptura.obtenerClaseConIconoEstadoValidacionHechoTipoDatoXbrl(this.hecho.ValorEstadoValidacion);

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.settings.idPlugin });
            variablesPlantilla.push({ llave: 'archivoAsignado', valor: (this.obtenerValor()!= null && this.obtenerValor().length>0)?"true":"false" });
            variablesPlantilla.push({ llave: 'idBotonOperaciones', valor: this.idBotonOperaciones });
            variablesPlantilla.push({ llave: 'clases', valor: clases });
            variablesPlantilla.push({ llave: 'valorHecho', valor: this.hecho.ValorHecho });
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template_visor_http___www_xbrl_org_2003_instance_base64BinaryItemType.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    if (self.hecho && self.hecho != null) {
                        plantilla.addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionDivTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                        plantilla.find("#span_" + self.settings.idPlugin).addClass(utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionHechoTipoDatoXbrl(self.hecho.ValorEstadoValidacion));
                    }

                    if (!self.hecho.TieneDetalleOperaciones || self.settings.ocultarDetalles) {
                        plantilla.find('#' + self.idBotonOperaciones).remove();
                    } else {
                        plantilla.find('#' + self.idBotonOperaciones).off('click');

                        plantilla.find('#' + self.idBotonOperaciones).on('click', function () {
                            self.detalleOperacionCampoCaptura = DetalleOperacionCampoCaptura.getInstance();
                            self.detalleOperacionCampoCaptura.mostrarDetalleOperaciones(self.obtenerHecho().Id);
                        });
                    }
                    self.element.empty().append(plantilla);
                    self.element.parent().off('dblclick');
                    self.settings.soloLectura = self.settings.soloLectura || AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().BloquearCamposCaptura;

                    if (!self.settings.esValorFijo) {
                        //self.element.parent().on('dblclick', manejadorDobleClick);
                        plantilla.find("#btn_editar_" + self.settings.idPlugin).on('click', function () {
                            self.presentarModalImportacion();
                        } );
                    }

                    plantilla.find("#btn_borrar_" + self.settings.idPlugin).on('click', function () {
                        self.hecho.ValorHecho = '';
                        self.element.data('xbrlCampoCaptura').actualizarUI();
                    });

                    plantilla.find("#btn_descargar_" + self.settings.idPlugin).on('click', function () {
                        self.descargarArchivo();
                    });

                    self.configurarBotones();

                    if (self.hecho.TieneNotasAlPie) {
                        $("#nota_" + self.settings.idPlugin).setTooltip();
                        $("#nota_" + self.settings.idPlugin).on('click', function () {
                            NotaHechoCampoCaptura.getInstance().mostrarNotasHechoCampoCaptura(self);
                        });
                    } else {
                        $("#nota_" + self.settings.idPlugin).remove();
                    }

                    if (self.settings.ultimo) {
                        self.element.append('<input type="hidden" id="ultimoCampo"/>')
                    }
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un campo token');
                });


            this.element.prop('id', this.settings.idPlugin);

            
            ;
        }

        


        presentarEditor(manejadorBlur: (e: any) => any, manejadorKeyDown: (e: any) => any, callback?: () => void): void {

            

            
        }

        obtenerValor(): string {
            if (this.valorString === undefined || this.valorString == null) {
                return "";
            }
            return this.valorString;
        }

        establecerValor(valor: string): boolean {
            if (valor === undefined) {
                this.valorString = "";
            } else {
                this.valorString = valor;
            }
            return true;
        }
        /**
         * Obtiene la etiqueta que deberá ser presentada al usuario.
         *
         * @return la etiqueta que deberá ser presentada al usuario.
         */
        public obtenerEtiquetaConcepto(idConcepto:string): string {

            var etiqueta: string = null;

            var idioma = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma.ClaveIdioma;
            var rol = null;
            var idConcepto = idConcepto;

            if (!idConcepto || idConcepto == null) {
                etiqueta = '';
            } else {
                if (!idioma || idioma == null) {
                    idioma = abaxXBRL.model.ConstantesComunes.IDIOMA_DEFAULT;
                }
                if (!rol || rol == null) {
                    rol = abaxXBRL.model.ConstantesComunes.ROL_ETIQUETA_DEFAULT;
                }
                etiqueta = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().Taxonomia.obtenerEtiquetaDeConcepto(idConcepto, rol, idioma);

            }
            return etiqueta;
        }
    }

    /**
     * Definición de los settings del plugin que presenta el campo de captura/visualización para un hecho de un documento instancia XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlCampoCapturaSettings {

        /** El identificador del concepto que deberá presentar el campo */
        public idConcepto: string;

        /** El identificador del contexto relacionado al hecho a presentar */
        public idContexto: string;

        /** El identificador de la unidad relacionada al hecho a presentar en caso de que este sea de tipo numérico */
        public idUnidad: string;
        
        /** El identificador de la definición del hecho de la plantilla que deberá servir para la búsqueda o creación del hecho en cuestión */
        public idHechoPlantilla: string;

        /** La precisión que deberá tener el hecho presentado en caso de ser numérico */
        public precision: string;

        /** Los decimales que deberá tener el hecho presentado en caso de ser numérico */
        public decimales: string;

        /** El valor por defecto que deberá presentar el hecho en caso de que se le asigne un valor erroneo o falte valor al hecho presentado */
        public valorDefault: string;

        /** Indica si el campo deberá ser presentado en modo exclusivo de edición */
        public soloEdicion: boolean;

        /** Indica si el campo deberá ser presentado en modo exclusivo de sólo lectura */
        public soloLectura: boolean;

        /**
        * Bandera que indica si solo se esta mostrando el valor calculado.
        **/
        public esValorCalculado: boolean;

        /** Indica si el campo deberá sólo presentar el valor del hecho pero no así los controles para presentar detalles (como cálculo, referencias, fórmulas, etc.). */
        public ocultarDetalles: boolean;

        /** Indica que el campo que se está procesando es el último en presentarse en pantalla */
        public ultimo: boolean;

        /** Indica que es posible crear el hecho si es que no existe uno en el documento instancia */
        public crearHecho: boolean;
        /** Indica que es posible crear el hecho cuando no existe en el evento de doble click */
        public crearHechoDobleClick: boolean;
        /** Contiene parámetros adicionales que pueden servir para la creación del campo de captura o de visualización del hecho del documento instancia XBRL */
        public parametrosAdicionales: any;

        /** El identificador de la fórmula asociada con este campo de captura que debería reevaluarse cada que el valor del hecho cambie */
        public formula: string;

        /** Indica que el usuario puede eliminar este hecho del documento instancia si así lo desea */
        public eliminable: boolean;

        /** El identificador del plugin actual */
        public idPlugin: string;

        /** Indica si se debe de pausar el evento blur */
        public pausarEventoBlur: boolean;

        /** Indica si se debe de abrir un popup con la informacion del hecho */
        public abrirPopup: boolean;

        /** Bandera que indica que el campo no pudes ser modificado puesto que se tratara siempre de un mismo valor*/
        public esValorFijo: boolean;
        /**
        * Identificador del hecho dentro del documento de instancia.
        **/
        public idHecho: string;
        /**
        * Cadena con código javascript que se evalua cundo cambia el valor del hecho.
        **/
        public cuandoCambia: string;
    }

    /**
     * Definición de los settings del plugin que presenta la etiqueta de un concepto en un idioma y rol solicitado.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlEtiquetaConceptoSettings {
        
        /** el identificador del concepto del cual se presentará la etiqueta */
        public idConcepto: string;

        /** el idioma en que se deberá presentar la etiqueta */
        public idioma: string;

        /** El rol de la etiqueta que se presentará */
        public rolEtiqueta: string;

        /** El nivel de indentación con el que debe presentarse la etiqueta. */
        public nivelIndentacion: number;

        /** El estilo css que debe aplicarse a la etiqueta */
        public style: string;
        /**
        * Longitud maxima a mostrar del texto de la etiqueta de concepto.
        **/
        public maxLength: number;

    }

    /**
     * Define los diferentes estilos utilizados por el plugin XBRL Tabla Excel.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IEstilosTablaExcel {

        /** La clase que se asigna cuando la celda está activa */
        activeClass: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado. */
        rangoSeleccionado: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado y define el estilo del borde izquierdo. */
        rangoSeleccionadoL: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado y define el estilo del borde derecho. */
        rangoSeleccionadoR: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado y define el estilo del borde superior. */
        rangoSeleccionadoT: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado y define el estilo del borde inferior. */
        rangoSeleccionadoB: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado y define el estilo del borde izquierdo. */
        rangoSeleccionadoLD: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado y define el estilo del borde derecho. */
        rangoSeleccionadoRD: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado y define el estilo del borde superior. */
        rangoSeleccionadoTD: string;

        /** La clase que se asigna cuando la celda forma parte de un rango seleccionado y define el estilo del borde inferior. */
        rangoSeleccionadoBD: string;
    }

    /**
     * Definición de un rango de selección dentro de una tabla excel.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class RangoSeleccionTablaExcel {

        /** La coordenada en x del origen */
        x: number;

        /** La coordenada en y del origen */
        y: number;

        /** El ancho de la selección */
        ancho: number;

        /** El alto de la selección */
        alto: number;
    }

    /**
     * Implementación de un plugin JQuery encargado de convertir una tabla de excel en una interfaz similar a una hoja de cálculo de excel.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlTablaExcel {

        /** Los estilos que se aplicarán por defecto a la tabla excel */
        public static ESTILOS_POR_DEFECTO: IEstilosTablaExcel = {
            activeClass: 'celdaSeleccionada',
            rangoSeleccionado: 'rangoSeleccionado',
            rangoSeleccionadoL: 'rangoSeleccionadoL',
            rangoSeleccionadoR: 'rangoSeleccionadoR',
            rangoSeleccionadoT: 'rangoSeleccionadoT',
            rangoSeleccionadoB: 'rangoSeleccionadoB',
            rangoSeleccionadoLD: 'rangoSeleccionadoLD',
            rangoSeleccionadoRD: 'rangoSeleccionadoRD',
            rangoSeleccionadoTD: 'rangoSeleccionadoTD',
            rangoSeleccionadoBD: 'rangoSeleccionadoBD'
        };
        
        /** El selector por defecto para localizar el contenedor del textarea para acceder al clipboard por defecto */
        public static CONTENEDOR_CLIPBOARD_POR_DEFECTO: string = '#clipboard-container';

        /** Los parámetros utilizados para configurar esta instancia del plugin XbrlTablaExcel */
        private settings: XbrlTablaExcelSettings;

        /** El conjunto de elementos td que componen el área de trabajo de la tabla excel */
        private elementos: JQuery;

        /** El td actualmente seleccionado */
        private currentTd: JQuery;

        /** El elemento table que es el padre de todos los td */
        private parent: JQuery;

        /** Indica que el funcionamiento de la tabla excel está pausado */
        private paused: boolean;
 
        /** El elemento textarea que es utilizado para interactuar con el clipboard */
        private textArea: JQuery;

        /** Indica que la tecla ctrl está siendo presionada en este momento por el usuario */
        private ctrlPresionado: boolean;

        /** El ancho total de celdas de la tabla excel */
        private ancho: number;

        /** El alto total de celdas de la tabla excel */
        private alto: number;

        /** Indica si actualmente existe un rango de celdas seleccionado */
        private rangoSeleccionado: boolean;

        /** Contiene el rango actual de celdas seleccionado */
        private rangoActual: RangoSeleccionTablaExcel;

        /** Indica que hay alguna celda seleccionada actualmente */
        private estaSeleccionando: boolean;

        /**
         * Inicializa el plugin de la tabla excel.
         *
         * @param element el elemento JQuery sobre el cual se ejecutará el plugin de la tabla excel.
         * @param settings los parámetros indicados para la configuración y ejecución del plugin
         */
        init(element: JQuery, settings: XbrlTablaExcelSettings): void {

            this.parent = element;
            this.settings = settings;
            this.paused = false;
            this.ctrlPresionado = false;
            this.rangoSeleccionado = false;
            this.rangoActual = null;
            this.estaSeleccionando = false;

            var selectorElementos = element.attr('selector');
            var selectorContenedorX = element.attr('selector-contenedor-x');
            var selectorContenedorY = element.attr('selector-contenedor-y');
            var xContainer: JQuery = null;
            var yContainer: JQuery = null;

            var tableSettings: any = {};

            if (selectorElementos && selectorElementos !== null && selectorElementos.length && selectorElementos.length > 0) {
                tableSettings.selectorElementos = selectorElementos;
            }

            if (selectorContenedorX && selectorContenedorX !== null && selectorContenedorX.length && selectorContenedorX.length > 0) {
                tableSettings.xContainer = $(selectorContenedorX);
            }

            if (selectorContenedorY && selectorContenedorY !== null && selectorContenedorY.length && selectorContenedorY.length > 0) {
                tableSettings.yContainer = $(selectorContenedorY);
            }

            this.settings = $.extend(tableSettings, settings);

            this.build();

            element.data('tableKeyNavigator', this);
            element.data('tablaExcelSettings', this.settings);
        }
        /**
        * Reindexa los elementos de la tabla excel, esto en caso de que se modifique dinamicamente su estructura.
        **/
        public rebuild(): void {
            var $self = this;
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionadoT).removeClass($self.settings.estilos.rangoSeleccionadoT);
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionadoB).removeClass($self.settings.estilos.rangoSeleccionadoB);
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionadoL).removeClass($self.settings.estilos.rangoSeleccionadoL);
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionadoR).removeClass($self.settings.estilos.rangoSeleccionadoR);
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionadoTD).removeClass($self.settings.estilos.rangoSeleccionadoTD);
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionadoBD).removeClass($self.settings.estilos.rangoSeleccionadoBD);
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionadoLD).removeClass($self.settings.estilos.rangoSeleccionadoLD);
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionadoRD).removeClass($self.settings.estilos.rangoSeleccionadoRD);
            $self.parent.find('.' + $self.settings.estilos.rangoSeleccionado).removeClass($self.settings.estilos.rangoSeleccionado);
            $self.parent.find('.' + $self.settings.estilos.activeClass).removeClass($self.settings.estilos.activeClass);

            $self.build();
        }

        /**
         * Establece el valor del atributo sólo lectura.
         *
         * @param soloLectura el valor del atributo a establecer.
         */
        public establecerSoloLectura(soloLectura: boolean): void {
            this.settings.soloLectura = soloLectura;
        }

        /**
         * Marca como activa una celda.
         *
         * @param el el elemento que contiene el td para marcar como celda activa.
         * @param limpiarSeleccion indica si al momento de marcar la celda como activa debe limpiarse la selección de celdas actual.
         */
        public activateCell(el: JQuery, limpiarSeleccion: boolean) {

            try {

                if (this.settings.onBeforeActive) {
                    this.settings.onBeforeActive(el);
                }

                if (this.rangoSeleccionado && limpiarSeleccion) {
                    this.limpiarSeleccionRango();
                }

                this.currentTd.removeClass(this.settings.estilos.activeClass);
                this.currentTd = el;
                this.currentTd.addClass(this.settings.estilos.activeClass);
                
                //this.currentTd.focusWithoutScrolling(this.settings.yContainer);

                var containerHeight = this.settings.yContainer.height();
                var containerWidth = this.settings.xContainer.width();
                var containerScrollY = this.settings.yContainer.scrollTop();
                var containerScrollX = this.settings.xContainer.scrollLeft();

                var elementTop = el.position().top - this.settings.yContainer.position().top;
                var elementLeft = el.position().left - this.settings.xContainer.position().left;
                var elementHeight = el.outerHeight();
                var elementWidth = el.width();

                if ((elementTop + (elementHeight * 2) ) > containerHeight) {
                    this.settings.yContainer.scrollTop(containerScrollY + elementHeight + 50);
                }

                if (elementTop < 0) {
                    this.settings.yContainer.scrollTop(containerScrollY + elementTop - 50);
                }

                if ((elementLeft + elementWidth) > containerWidth) {
                    this.settings.xContainer.scrollLeft(containerScrollX + elementWidth + 50);
                }

                if (elementLeft < 0) {
                    this.settings.xContainer.scrollLeft(containerScrollX + elementLeft - 100);
                }

                if (elementLeft == 0 && containerScrollX > 0) {
                    this.settings.xContainer.scrollLeft(containerScrollX - elementWidth);
                }

                if (this.settings.onAfterActive) {
                    this.settings.onAfterActive(el);
                }
                $(':focus').blur();
                this.marcarTablaComoActiva(this.parent);
            } catch (exception){
                root.AbaxXBRLRootUtilService.errorLog(exception);
                throw exception;
            }
        }

        /**
         * Maneja el evento keydown cuando sucede en algún elemento contenido en la tabla excel.
         *
         * @param e el evento del teclado que dió origen a esta invocación.
         */
        public handleKeyDown(e: JQueryKeyEventObject):any {
            
            var td;

            if (e.which == AbaxXBRLCodigoTecla.Shift) {
                this.iniciaSeleccionTeclado();
            } else if (e.shiftKey && (e.which == AbaxXBRLCodigoTecla.Left || e.which == AbaxXBRLCodigoTecla.Right || e.which == AbaxXBRLCodigoTecla.Down || e.which == AbaxXBRLCodigoTecla.Up)) {
                e.preventDefault();
                this.seleccionaPorTeclado(e);
                return true;
            } else if (e.which == 39) {
                // Right Arrow
                e.preventDefault();
                this.rigth(false);
            } else if (e.which == 37) {
                // Left Arrow
                e.preventDefault();
                this.left(false);
            } else if (e.which == 38) {
                // Up Arrow
                e.preventDefault();
                this.up();
            } else if (e.which == 40) {
                // Down Arrow
                e.preventDefault();
                this.down();
            } else if (e.which == 13 || e.which == 32) {
                // Enter or Spacebar - edit cell
                e.preventDefault();
                if (this.settings.onSpaceOrEnterKey) {
                    this.settings.onSpaceOrEnterKey(e, this.currentTd);
                    return false;
                }
            } else if (e.which == 9 && !e.shiftKey) {
                // Tab
                e.preventDefault();
                this.rigth();
            } else if (e.which == 9 && e.shiftKey) {
                // Shift + Tab
                e.preventDefault();
                this.left();
            } else if (e.which == 17) {
                // Ctrl
                if (!this.ctrlPresionado) {
                    this.ctrlPresionado = true;
                    this.textArea = $('<textarea id="clipboard" style="width:1px; height: 1px; padding: 0px;"></textarea>');
                    this.textArea.on('keyup', $.proxy(this.handleKeyUp, this));
                    this.settings.contenedorTextArea.empty().show();
                    this.settings.contenedorTextArea.append(this.textArea);
                    var self = this;
                    this.textArea.focus();
                    this.crearContenidoACopiar(function (valorACopiar) {
                        self.textArea.val(valorACopiar);
                        self.textArea.select();
                    });
                }
            }
        }

        /**
         * Maneja el evento keyup del textarea utilizado para colocar y leer valores del portapapeles
         *
         * @param e el evento del teclado que dió origen a la invocación de este método.
         */
        public handleKeyUp(e: JQueryKeyEventObject): void {

            if (this.ctrlPresionado) {
                var selectionStart = 0, selectionEnd = 0;
                if (this.textArea[0]["selectionStart"]) {
                    selectionStart = this.textArea[0]["selectionStart"];
                }
                if (this.textArea[0]["selectionEnd"]) {
                    selectionEnd = this.textArea[0]["selectionEnd"];
                }
                if (selectionStart == selectionEnd && !this.settings.soloLectura) {
                    this.pegarTexto(this.textArea.val(), this.currentTd);
                } else {
                    this.parent.find('.' + this.settings.estilos.rangoSeleccionadoB).removeClass(this.settings.estilos.rangoSeleccionadoB).addClass(this.settings.estilos.rangoSeleccionadoBD);
                    this.parent.find('.' + this.settings.estilos.rangoSeleccionadoT).removeClass(this.settings.estilos.rangoSeleccionadoT).addClass(this.settings.estilos.rangoSeleccionadoTD);
                    this.parent.find('.' + this.settings.estilos.rangoSeleccionadoL).removeClass(this.settings.estilos.rangoSeleccionadoL).addClass(this.settings.estilos.rangoSeleccionadoLD);
                    this.parent.find('.' + this.settings.estilos.rangoSeleccionadoR).removeClass(this.settings.estilos.rangoSeleccionadoR).addClass(this.settings.estilos.rangoSeleccionadoRD);
                }
                this.settings.contenedorTextArea.empty();
                this.ctrlPresionado = false;
            }
        }

        /**
         * Método encargado de crear el contenido que deberá copiarse al portapapeles del usuario basado en la selección de celdas actuales en la tabla excel.
         *
         * @param callback el método que deberá ser invocado una vez que se haya generado el contenido del portapapeles solicitado.
         */
        public crearContenidoACopiar(callback: (string) => void): void {
            if (this.rangoActual) {

                var contenidos = new Array(Math.abs(this.rangoActual.alto));
                for (var i = 0; i < contenidos.length; i++) {
                    contenidos[i] = new Array(Math.abs(this.rangoActual.ancho));
                }

                var inicioRangoX = 0;
                var finRangoX = 0;
                var inicioRangoY = 0;
                var finRangoY = 0;

                if (this.rangoActual.ancho < 0) {
                    inicioRangoX = (this.rangoActual.x + this.rangoActual.ancho + 1) < 0 ? 0 : (this.rangoActual.x + this.rangoActual.ancho + 1);
                    finRangoX = this.rangoActual.x;
                } else {
                    inicioRangoX = this.rangoActual.x;
                    finRangoX = (this.rangoActual.x + this.rangoActual.ancho) > (this.ancho) ? (this.ancho - 1) : (this.rangoActual.x + this.rangoActual.ancho - 1);
                }

                if (this.rangoActual.alto < 0) {
                    inicioRangoY = (this.rangoActual.y + this.rangoActual.alto + 1) < 0 ? 0 : (this.rangoActual.y + this.rangoActual.alto + 1);
                    finRangoY = this.rangoActual.y;
                } else {
                    inicioRangoY = this.rangoActual.y;
                    finRangoY = (this.rangoActual.y + this.rangoActual.alto) > (this.alto) ? (this.alto - 1) : (this.rangoActual.y + this.rangoActual.alto - 1);
                }

                var self = this;

                this.elementos.each(function () {
                    var row = $(this).data('row');
                    var col = $(this).data('col');
                    if (row >= inicioRangoY && col >= inicioRangoX && row <= finRangoY && col <= finRangoX) {
                        var valor = '';
                        if (self.settings.onBeforeCopy) {
                            valor = self.settings.onBeforeCopy($(this));
                            if (!valor) {
                                valor = '';
                            }
                        }
                        contenidos[row - inicioRangoY][col - inicioRangoX] = valor;
                    }
                }).promise().done(function () {
                    var renglones = new Array();
                    for (var j = 0; j < contenidos.length; j++) {
                        renglones[j] = contenidos[j].join('\t');
                    }
                    callback(renglones.join('\n'));
                });

            } else {
                callback(this.settings.onBeforeCopy($(this.currentTd)));
            }
        }

        /**
         * Pega el texto que se tiene en el portapapeles en la tabla excel. Si el contenido del portapapeles cumple con el formato de celdas de excel, 
         * copiará cada valor en la celda correspondientes.
         * 
         * @param value el texto a pegar obtenido del portapapeles
         * @param startTd el td que representa la celda donde se pegó inicialmente el texto.
         */
        public pegarTexto(value: string, startTd: JQuery) {
            var rows = value.split('\n');
            var rowStartTd = startTd;

            var rango = new RangoSeleccionTablaExcel();

            rango.y = startTd.data('row');
            rango.x = startTd.data('col');
            rango.ancho = 0;
            rango.alto = 0;

            if (this.settings.onAfterPaste) {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i] === '') {
                        if (i == (rows.length - 1)) {
                            break;
                        }
                    }
                    rango.alto++;
                    var cells = rows[i].split("\t");
                    if (cells.length > rango.ancho) { rango.ancho = cells.length; }
                    var cellStartTd = rowStartTd;
                    for (var j = 0; j < cells.length; j++) {
                        this.settings.onAfterPaste(cells[j], cellStartTd);
                        cellStartTd = this.rigthTd(cellStartTd);
                        if (!cellStartTd) break;
                    }
                    rowStartTd = this.downTd(rowStartTd);
                    if (!rowStartTd) break;
                }
                if (this.settings.onAfterRangePaste) {
                    this.settings.onAfterRangePaste(value, startTd, rango);
                }
            }
        }

        /**
         * Selecciona en pantalla el rango marcado por el usuario.
         *
         * @param rango el objeto con la definición del rango a seleccionar.
         */
        public seleccionarRango(rango: RangoSeleccionTablaExcel): void {
            var self = this;

            if (rango.x === undefined || rango.y === undefined || rango.ancho === undefined || rango.alto === undefined || rango.x < 0 || rango.y < 0 || rango.ancho == 0 || rango.alto == 0) { return; }

            var inicioRangoX = 0;
            var finRangoX = 0;
            var inicioRangoY = 0;
            var finRangoY = 0;

            if (rango.ancho < 0) {
                inicioRangoX = (rango.x + rango.ancho + 1) < 0 ? 0 : (rango.x + rango.ancho + 1);
                finRangoX = rango.x;
            } else {
                inicioRangoX = rango.x;
                finRangoX = (rango.x + rango.ancho) > (this.ancho) ? (this.ancho - 1) : (rango.x + rango.ancho - 1);
            }

            if (rango.alto < 0) {
                inicioRangoY = (rango.y + rango.alto + 1) < 0 ? 0 : (rango.y + rango.alto + 1);
                finRangoY = rango.y;
            } else {
                inicioRangoY = rango.y;
                finRangoY = (rango.y + rango.alto) > (this.alto) ? (this.alto - 1) : (rango.y + rango.alto - 1);
            }

            this.elementos.each(function () {
                var row = $(this).data('row');
                var col = $(this).data('col');
                if (row >= inicioRangoY && col >= inicioRangoX && row <= finRangoY && col <= finRangoX) {
                    $(this).addClass(self.settings.estilos.rangoSeleccionado);
                    if (row == inicioRangoY) {
                        $(this).addClass(self.settings.estilos.rangoSeleccionadoT);
                    } else {
                        $(this).removeClass(self.settings.estilos.rangoSeleccionadoT);
                    }
                    if (row == finRangoY) {
                        $(this).addClass(self.settings.estilos.rangoSeleccionadoB);
                    } else {
                        $(this).removeClass(self.settings.estilos.rangoSeleccionadoB);
                    }
                    if (col == inicioRangoX) {
                        $(this).addClass(self.settings.estilos.rangoSeleccionadoL);
                    } else {
                        $(this).removeClass(self.settings.estilos.rangoSeleccionadoL);
                    }
                    if (col == finRangoX) {
                        $(this).addClass(self.settings.estilos.rangoSeleccionadoR);
                    } else {
                        $(this).removeClass(self.settings.estilos.rangoSeleccionadoR);
                    }
                } else {
                    $(this).removeClass(self.settings.estilos.rangoSeleccionadoT);
                    $(this).removeClass(self.settings.estilos.rangoSeleccionadoB);
                    $(this).removeClass(self.settings.estilos.rangoSeleccionadoL);
                    $(this).removeClass(self.settings.estilos.rangoSeleccionadoR);
                    $(this).removeClass(self.settings.estilos.rangoSeleccionadoTD);
                    $(this).removeClass(self.settings.estilos.rangoSeleccionadoBD);
                    $(this).removeClass(self.settings.estilos.rangoSeleccionadoLD);
                    $(this).removeClass(self.settings.estilos.rangoSeleccionadoRD);
                    $(this).removeClass(self.settings.estilos.rangoSeleccionado);
                }
            });

            this.rangoSeleccionado = true;
        }

        /**
         * Limpia la selección actual del usuario en pantalla.
         */
        public limpiarSeleccionRango(): void {
            var self = this;
            this.elementos.each(function () {
                $(this).removeClass(self.settings.estilos.rangoSeleccionadoT);
                $(this).removeClass(self.settings.estilos.rangoSeleccionadoB);
                $(this).removeClass(self.settings.estilos.rangoSeleccionadoL);
                $(this).removeClass(self.settings.estilos.rangoSeleccionadoR);
                $(this).removeClass(self.settings.estilos.rangoSeleccionadoTD);
                $(this).removeClass(self.settings.estilos.rangoSeleccionadoBD);
                $(this).removeClass(self.settings.estilos.rangoSeleccionadoLD);
                $(this).removeClass(self.settings.estilos.rangoSeleccionadoRD);
                $(this).removeClass(self.settings.estilos.rangoSeleccionado);
            });
            this.rangoSeleccionado = false;
            this.rangoActual = undefined;
        }

        /**
         * Edita el siguiente campo disponible en la tabla excel una fila hacia abajo.
         */
        public editDown(): void {
            var td = this.downTd(this.currentTd);
            var origen = this.getCurrentCampoCaptura();
            if (origen) {
                origen.ejecutaBlur();
            }
            if (td) {
                this.activateCell(td, true);
                if (this.settings.onSpaceOrEnterKey) {
                    var defCampoCaptura = $(this.currentTd).find('xbrl\\:campo-captura');
                    if (defCampoCaptura) {
                        var campoCaptura: XbrlCampoCaptura = defCampoCaptura.data('xbrlCampoCaptura');
                        if (campoCaptura) {
                            this.settings.onSpaceOrEnterKey(null, this.currentTd);
                        } else {
                            this.editDown();
                        }
                    } else {
                        this.editDown();
                    }
                }
            }
        }
        /**
        * Obtiene el campo captuar el td activo actual si es que tiene uno.
        * @return Campo captura del td activo o null si el td activo no tiene un campo captura.
        **/
        private getCurrentCampoCaptura(): XbrlCampoCaptura
        {
            var campoCaptura: XbrlCampoCaptura = null;
            var defCampoCaptura = $(this.currentTd).find('xbrl\\:campo-captura');
            if (defCampoCaptura) {
                campoCaptura = defCampoCaptura.data('xbrlCampoCaptura');
                if (campoCaptura) {
                    this.settings.onSpaceOrEnterKey(null, this.currentTd);
                }
            }

            return campoCaptura;
        } 

        /**
         * Edita el siguiente campo disponible en la tabla excel una fila hacia arriba.
         */
        public editUp(): void {
            var td = this.upTd(this.currentTd);
            var origen = this.getCurrentCampoCaptura();
            if (origen) {
                origen.ejecutaBlur();
            }
            if (td) {
                this.activateCell(td, true);
                if (this.settings.onSpaceOrEnterKey) {
                    var defCampoCaptura = $(this.currentTd).find('xbrl\\:campo-captura');
                    if (defCampoCaptura) {
                        var campoCaptura: XbrlCampoCaptura = defCampoCaptura.data('xbrlCampoCaptura');
                        if (campoCaptura) {
                            this.settings.onSpaceOrEnterKey(null, this.currentTd);
                        } else {
                            this.editUp();
                        }
                    } else {
                        this.editUp();
                    }
                }
            }
        }

        

        /**
         * Edita el siguiente campo disponible en la tabla excel.
         */
        public editNext(): void {
            if (this.next()) {
                if (this.settings.onSpaceOrEnterKey) {
                    var defCampoCaptura = $(this.currentTd).find('xbrl\\:campo-captura');
                    if (defCampoCaptura) {
                        var campoCaptura: XbrlCampoCaptura = defCampoCaptura.data('xbrlCampoCaptura');
                        if (campoCaptura) {
                            this.settings.onSpaceOrEnterKey(null, this.currentTd);
                        } else {
                            this.next();
                        }
                    } else {
                        this.prev();
                    }
                } else {
                    this.prev();
                }
            }
        }

        /**
         * Edita el anterior campo disponible en la tabla excel.
         */
        public editPrev(): void {
            if (this.prev()) {
                if (this.settings.onSpaceOrEnterKey) {
                    var defCampoCaptura = $(this.currentTd).find('xbrl\\:campo-captura');
                    if (defCampoCaptura) {
                        var campoCaptura: XbrlCampoCaptura = defCampoCaptura.data('xbrlCampoCaptura');
                        if (campoCaptura) {
                            this.settings.onSpaceOrEnterKey(null, this.currentTd);
                        } else {
                            this.prev();
                        }
                    } else {
                        this.next();
                    }
                } else {
                    this.next();
                }
            }
        }

        /**
         * Obtiene el siguiente elemento td disponible a la izquierda si es que existe.
         *
         * @param startTd el elemento a partir del cual se debe realizar la búsqueda.
         * @param overflow Boleano que indica si se debe de buscar sobre las anteriores filas de la tabla, por defecto es true.
         * @return el elemento encontrado o undefined/null en caso de no existir otra celda a la izquierda.
         */
        public leftTd(startTd: JQuery, overflow?: boolean): JQuery {
            var td: JQuery;
            var next = startTd.prev();
            if (next && next.data('keynav')) {
                td = next;
            } else {
                if (overflow == false) {
                    return td;
                }
                var tr: JQuery = startTd.parent("tr").prev();
                var tdAux: JQuery;
                while (tr.length > 0) {
                    tdAux = tr.find('xbrl\\:campo-captura:last').parent('td');
                    if (tdAux && tdAux.length > 0) {
                        td = tdAux;
                        break;
                    }
                    tr = tr.prev();
                }
            }
            return td;
        }

        /**
         * Obtiene el siguiente elemento td disponible a la derecha si es que existe.
         *
         * @param startTd el elemento a partir del cual se debe realizar la búsqueda.
         * @param overflow Boleano que indica si se debe de buscar sobre las siguientes filas de la tabla, por defecto es true.
         * @return el elemento encontrado o undefined/null en caso de no existir otra celda a la derecha.
         */
        public rigthTd(startTd: JQuery, overflow?: boolean): JQuery {
            var td: JQuery;
            var next = startTd.next();
            if (next && next.data('keynav')) {
                td = next;
            } else {
                if (overflow == false) {
                    return td;
                }
                var tr: JQuery = startTd.parent("tr").next();
                var tdAux: JQuery;
                while (tr.length > 0) {
                    tdAux = tr.find('xbrl\\:campo-captura:first').parent('td');
                    if (tdAux && tdAux.length > 0) {
                        td = tdAux;
                        break;
                    }
                    tr = tr.next();
                }
            }
            return td;
        }

        /**
         * Obtiene el siguiente elemento td disponible hacia arriba si es que existe.
         *
         * @param startTd el elemento a partir del cual se debe realizar la búsqueda.
         * @return el elemento encontrado o undefined/null en caso de no existir otra celda hacia arriba.
         */
        public upTd(startTd: JQuery): JQuery {
            var td: JQuery;
            var next = startTd.closest('tr').prev().find('td').eq(startTd.index());
            if (next && next.data('keynav')) {
                td = next;
            }
            return td;
        }

        /**
         * Obtiene el siguiente elemento td disponible hacia abajo si es que existe.
         *
         * @param startTd el elemento a partir del cual se debe realizar la búsqueda.
         * @return el elemento encontrado o undefined/null en caso de no existir otra celda hacia abajo.
         */
        public downTd(startTd: JQuery): JQuery {
            var td: JQuery;
            var next = startTd.closest('tr').next().find('td').eq(startTd.index());
            if (next && next.data('keynav')) {
                td = next;
            }
            return td;
        }

        /**
         * Indica si existe un elemento td disponible a la izquierda del actual.
         * @param overFlow Indica si continua con el primer elemento del siguiente renglon al llegar  la última celda del renglon actual.
         * @param limpiarSeleccion Bandera que indica si se debe de limpiar la seleccion actual antes de marcar la selda como activa.
         * @return true si existe un elemento td disponible a la izquierda del actual.
         */
        public left(overFlow?: boolean, limpiarSeleccion?: boolean): boolean {
            var td = this.leftTd(this.currentTd, overFlow);
            if (td && td.length > 0) {
                this.activateCell(td, limpiarSeleccion != false);
                return true;
            }
            return false;
        }

        /**
         * Indica si existe un elemento td disponible a la derecha del actual.
         * @param overFlow Indica si continua con el primer elemento del siguiente renglon al llegar  la última celda del renglon actual.
         * @param limpiarSeleccion Bandera que indica si se debe de limpiar la seleccion actual antes de marcar la selda como activa.
         * @return true si existe un elemento td disponible a la derecha del actual.
         */
        public rigth(overFlow?: boolean, limpiarSeleccion?: boolean): boolean {
            var td = this.rigthTd(this.currentTd, overFlow);
            if (td && td.length > 0) {
                this.activateCell(td, limpiarSeleccion != false);
                return true;
            }
            return false;
        }

        /**
         * Indica si existe un elemento td disponible a la derecha del actual o en el siguiente renglón.
         *
         * @return true si existe un elemento td disponible a la derecha del actual o en el siguiente renglón
         */
        public next(): boolean {
            if (!this.rigth()) {
                var td = this.currentTd.closest('tr').next().find('td').first();
                while (td && td.length > 0 && !td.data('keynav')) {
                    td = td.next();
                }
                if (td && td.length > 0) {
                    this.activateCell(td, true);
                    return true;
                }
            } else {
                return true;
            }
            return false;
        }

        /**
         * Indica si existe un elemento td disponible a la izquierda del actual o en el renglón anterior.
         *
         * @return true si existe un elemento td disponible a la izquierda del actual o en el renglón anterior.
         */
        public prev(): boolean {
            if (!this.left()) {
                var td = this.currentTd.closest('tr').prev().find('td').last();
                while (td && td.length > 0 && !td.data('keynav')) {
                    td = td.prev();
                }
                if (td && td.length > 0) {
                    this.activateCell(td, true);
                    return true;
                }
            } else {
                return true;
            }
            return false;
        }

        /**
         * Indica si existe un elemento td disponible hacia arriba del actual.
         * @param limpiarSeleccion Bandera que indica si se debe de limpiar la seleccion actual antes de marcar la selda como activa.
         * @return true si existe un elemento td disponible hacia arriba del actual.
         */
        public up(limpiarSeleccion?: boolean): boolean {
            var td = this.upTd(this.currentTd);
            if (td && td.length > 0) {
                this.activateCell(td, limpiarSeleccion != false);
                return true;
            }
            return false;
        }

        /**
         * Indica si existe un elemento td disponible hacia abajo del actual.
         * @param limpiarSeleccion Bandera que indica si se debe de limpiar la seleccion actual antes de marcar la selda como activa.
         * @return true si existe un elemento td disponible hacia abajo del actual.
         */
        public down(limpiarSeleccion?: boolean): boolean {
            var td = this.downTd(this.currentTd);
            if (td && td.length > 0) {
                this.activateCell(td, limpiarSeleccion != false);
                return true;
            }
            return false;
        }

        /**
         * Indexa todos los elementos que componen la tabla excel.
         */
        public indexarElementos(): void {
            var rowTd = this.elementos.first();
            var renglon = 0;
            var alto = 0;
            var ancho = 0;
            while (rowTd && rowTd.length > 0) {
                var cellTd = rowTd;
                var columna = 0;
                while (cellTd && cellTd.length > 0) {
                    cellTd.data('row', renglon);
                    cellTd.data('col', columna++);

                    if (columna > ancho) { ancho = columna; }

                    cellTd = this.rigthTd(cellTd, false);
                }
                renglon++;
                if (renglon > alto) { alto = renglon; }
                rowTd = this.downTd(rowTd);
            }
            this.ancho = ancho;
            this.alto = alto;
        }

        /**
         * Construye el plugin de la tabla excel.
         */
        public build(): void {

            this.elementos = this.parent.find(this.settings.selectorElementos);

            this.parent.off('keydown');
            this.elementos.off('mousedown');
            this.elementos.off('mousemove');
            this.elementos.off('mouseup');
            this.elementos.off('click');
            this.parent.off('selectstart');

            this.currentTd = this.elementos.first();
            this.elementos.data('keynav', true);
            this.indexarElementos();
            var self = this;

            this.elementos.bind('click', function (e) {
                self.handleClick(this, e);
            });

            this.elementos.bind('mousedown', $.proxy(this.handleMouseDown, this));
            this.elementos.bind('mousemove', $.proxy(this.handleMouseMove, this));
            this.elementos.bind('mouseup', $.proxy(this.handleMouseUp, this));

            this.parent.css('user-select', 'none').prop('unselectable', 'on').on('selectstart', function (e) { return false; });
            if (!this.parent.attr('tabindex')) {
                this.parent.attr({ tabindex: this.settings.tabIndex || -1 });
            }

            
            this.marcarTablaComoActiva(this.parent);
            $(document).off('keydown', XbrlTablaExcel.documentKeyDownBridge);
            $(document).on('keydown', XbrlTablaExcel.documentKeyDownBridge);
            //this.parent.on('keydown', $.proxy(this.handleKeyDown, this));
            this.parent.data('handleKeyDown', $.proxy(this.handleKeyDown, this));
        }
        /**
        * Manejador del evento keyDown del documento que sirve de puente para  transladar el evento a la tabla excel tomando en cuenta las siguientes condiciones:
        * <ul>
        *   <li>Que no exista un elemento en el documento distito a la tabla excel que tenga el foco actualmente (elemento activo).</li>
        *   <li>Que exista una tabla de excel visible marcada como activa y que no ha sido deshabilitada.</li>
        *   <li>Que sea la primera tabla que cumpla conlas condiciones anteriores.</li>
        * </ul>
        * @return De momento nada para dejar que el evento continue.
        */
        private static documentKeyDownBridge(evento: JQueryEventObject,...args:any[]): any {

            //console.log('key: ' + evento.which);
            var activeElement = $(':focus');
            if (activeElement.length > 0 && activeElement.is(':focusable') && !(activeElement.is('[xbrl\\:tabla-excel]'))) {
                //console.log('rechazado: {length:[' + activeElement.length + '],isExcel:[' + activeElement.is('[xbrl\\:tabla-excel]') + ']}');
                //console.log(activeElement);
                return;
            }
            var tabla = $('table[xbrl\\:tabla-excel].tabla-excel-activa:visible:not(.tabla-excel-deshabilitada):first');
            if (tabla.length > 0) {
                
                var handler: (evento: JQueryEventObject, ...args: any[]) => any = tabla.data('handleKeyDown');
                //console.log('tablaExcel: {length:[' + tabla.length + '],tieneManejador:[' + !handler + ']}');
                if (handler) {
                    handler(evento,args);
                }
            }
        }

        /** 
         * Pausa los eventos de la tabla excel para que no interfieran con otros plugins.
         */
        public pausar() {

            
            this.parent.addClass('tabla-excel-deshabilitada');
            //this.parent.off('keydown');
            this.elementos.unbind('mousedown');
            this.elementos.unbind('mousemove');
            this.elementos.unbind('mouseup');
            this.elementos.unbind('click');
        }

        /** 
         * Reanuda los eventos de la tabla excel.
         */
        public reanudar() {

            var self = this;
            //this.parent.off('keydown');
            this.elementos.unbind('mousedown');
            this.elementos.unbind('mousemove');
            this.elementos.unbind('mouseup');
            this.elementos.unbind('click');


            //this.parent.on('keydown', $.proxy(this.handleKeyDown, this));
            this.elementos.bind('mousedown', $.proxy(this.handleMouseDown, this));
            this.elementos.bind('mousemove', $.proxy(this.handleMouseMove, this));
            this.elementos.bind('mouseup', $.proxy(this.handleMouseUp, this));
            this.elementos.bind('click', function (e) {
                self.handleClick(this, e);
            });
            this.parent.removeClass('tabla-excel-deshabilitada');
            //this.parent.focusWithoutScrolling(this.settings.yContainer);
        }

        /**
         * Maneja el evento mousedown cuando sucede sobre la tabla excel.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si se desea propagar el evento. false en cualquier otro caso.
         */
        public handleMouseDown(e: JQueryMouseEventObject): boolean {
            if (this.isRightClick(e)) { return false }
            var target = $(e.target);
            if (!target.is('td')) {
                target = target.closest('td');
            }
            if (target.data('keynav')) {
                this.estaSeleccionando = true;
                this.rangoActual = {
                    x: target.data('col'),
                    y: target.data('row'),
                    ancho: 1,
                    alto: 1
                };
                this.seleccionarRango(this.rangoActual);
                if (typeof e.preventDefault != 'undefined') { e.preventDefault(); }
                document.documentElement.onselectstart = function () { return false; };
                e.stopPropagation();
            }
            return false;
        }

        /**
         * Maneja el evento mouseup cuando sucede sobre la tabla excel.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si se desea propagar el evento. false en cualquier otro caso.
         */
        public handleMouseUp(e: JQueryMouseEventObject): boolean {
            if (this.isRightClick(e)) {
                return false;
            }
            if (this.estaSeleccionando) {
                //$('button:first').focus();
                //this.parent.focusWithoutScrolling(this.settings.yContainer);
                this.marcarTablaComoActiva(this.parent);
            }
            this.estaSeleccionando = false;
            document.documentElement.onselectstart = function () { return true; };
            return true;
        }
        /**
        * Marca la tabla indicada como la tabla activa.
        **/
        private marcarTablaComoActiva(tabla?: JQuery): void {

            if (!tabla || tabla.length == 0 || !tabla.is('[xbrl\\:tabla-excel]:visible')) {
                tabla = $('tabla[xbrl\\:tabla-excel]:visible:first');
            }
            if (tabla.length > 1) {
                tabla = $(tabla[0]);
            }

            $('table.tabla-excel-activa').removeClass('tabla-excel-activa');
            tabla.addClass('tabla-excel-activa');
        }

        /**
         * Maneja el evento click del mouse
         */
        public handleClick(o: JQuery, e: JQueryMouseEventObject): void {
            if (o[0] != this.currentTd[0]) {
                this.activateCell($(o), true);
            }
        }

        /**
         * Maneja el evento mousemove cuando sucede sobre la tabla excel.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         */
        public handleMouseMove(e: JQueryMouseEventObject): void {
            if (this.estaSeleccionando) {
                var target = $(e.target);
                if (!target.is('td')) {
                    target = target.closest('td');
                }
                if (target.data('keynav')) {
                    var curCol = target.data('col');
                    var curRow = target.data('row');
                    var ancho = 0;
                    var alto = 0;

                    if ((curCol - this.rangoActual.x) >= 0) {
                        ancho = (curCol - this.rangoActual.x) + 1;
                    } else {
                        ancho = (curCol - this.rangoActual.x) - 1;
                    }

                    if ((curRow - this.rangoActual.y) >= 0) {
                        alto = (curRow - this.rangoActual.y) + 1;
                    } else {
                        alto = (curRow - this.rangoActual.y) - 1;
                    }

                    this.rangoActual = {
                        x: this.rangoActual.x,
                        y: this.rangoActual.y,
                        ancho: ancho,
                        alto: alto
                    };

                    this.seleccionarRango(this.rangoActual);
                    this.activateCell(target, false);
                }
            }
        }

        /**
        * Marca el inicio del rengo para la selección por teclado.
        **/
        public iniciaSeleccionTeclado(): void {
            var target = this.currentTd;
            this.rangoActual = {
                x: target.data('col'),
                y: target.data('row'),
                ancho: 1,
                alto: 1
            };
        }
        /**
        * Permite seleccionar el contenido de la tabla excel mediante la techa shipt y las flechas de desplasamiento del teclado.
        * @param eventoKeyDown Evento keyDown del teclado que dispara la selección. Este evento debe de ser una de las teclas de flechas de desplasamiento.
        **/
        public seleccionaPorTeclado(eventoKeyDown: JQueryKeyEventObject): void {

            if (eventoKeyDown.which == AbaxXBRLCodigoTecla.Right) {
                this.rigth(false,false);
            } else if (eventoKeyDown.which == AbaxXBRLCodigoTecla.Left) {
                this.left(false,false);
            } else if (eventoKeyDown.which == AbaxXBRLCodigoTecla.Up) {
                this.up(false);
            } else if (eventoKeyDown.which == AbaxXBRLCodigoTecla.Down) {
                this.down(false);
            }
            var target = this.currentTd;
            if(!target.data('keynav')) {
                return;
            }
            var curCol = target.data('col');
            var curRow = target.data('row');
            var ancho = (curCol - this.rangoActual.x);
            var alto = (curRow - this.rangoActual.y);

            ancho += ancho >= 0 ? 1 : -1;
            alto += alto >= 0 ? 1 : -1;

            this.rangoActual.ancho = ancho;
            this.rangoActual.alto = alto;

            this.seleccionarRango(this.rangoActual);
            //this.activateCell(target, false);

        }

        /**
         * Indica si el evento del mouse fue disparado por el botón derecho del mouse.
         *
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si el evento del mouse fue disparado por el botón derecho del mouse. false en cualquier otro caso.
         */
        public isRightClick(e: JQueryMouseEventObject): boolean {
            if (e.which) {
                return (e.which == 3);
            } else if (e.button) {
                return (e.button == 2);
            }
            return false;
        }

    }

    /**
     * Definición de los parámetros necesarios para configurar una instancia del plugin XbrlTablaExcel
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlTablaExcelSettings {

        /** La expresión con el selector JQuery para identificar los elementos td que compondrán la tabla excel */
        public selectorElementos: string;

        /** El elemento que actua como contenedor de la tabla excel en el eje de las x */
        public xContainer: JQuery;

        /** El elemento que actua como contenedor de la tabla excel en el eje de las y */
        public yContainer: JQuery;

        /** Los estilos que se utilizarán para presentar la tabla excel al usuario */
        public estilos: IEstilosTablaExcel;

        /** El índice del tabulador aplicable a esta tabla */
        public tabIndex: number;

        /** El elemento que contiene el textarea que es utilizado para interactuar con el clipboard */
        public contenedorTextArea: JQuery;

        /** Indica que la tabla excel funciona sólo en modo de lectura, las operaciónes de pegado no son permitidas */
        public soloLectura: boolean;

        /** 
         * Método callback que es invocado antes de que una celda se vuelva activa. Si desea cancelar la operación deberá regresar false. 
         *
         * @param element el elemento que está a punto de ser marcado como la celda activa.
         * @return false en caso de desear cancelar la operación. true en cualquier otro caso.
         */
        public onBeforeActive: (element: JQuery) => boolean;

        /**
         * Método callback que es invocado después de que una celda se ha vuelto activa.
         *
         * @param element el elemento que se ha convertido en activo.
         */
        public onAfterActive: (element: JQuery) => void;

        /**
         * Método callback el cual es invocado cuando el usuario presiona la tecla espacio o enter sobre una celda de la tabla excel.
         *
         * @param event el evento del teclado que disparó este evento. 
         * @param td el elemento td que recibe la acción.
         */
        public onSpaceOrEnterKey: (event: JQueryKeyEventObject, td: JQuery) => void;

        /**
         * Método callback el cual es invocado después de que se ha determinado que es necesario pegar un valor dado en una celda de la tabla excel.
         *
         * @param cellValue el valor a pegar en la celda.
         * @param cellTd el elemento JQuery que representa la celda donde se pretende pegar el valor.
         */
        public onAfterPaste: (cellValue: string, cellTd: JQuery) => void;

        /**
         * Método callback el cual es invocado después de que se ha concluido la operación de pegar un valor o rango de valores en una tabla excel.
         *
         * @param pastedValue el valor que originalmente se pegó sobre la tabla excel.
         * @param startTd el elemento JQuery que representa la celda donde se pegó inicialmente el valor.
         * @param rango el rango de celdas que se afectaron durante la operación de pegado.
         */
        public onAfterRangePaste: (pastedValue: string, startTd: JQuery, rango: RangoSeleccionTablaExcel) => void;
        
        /**
         * Método callback el cual es invocado antes de obtener el valor de una celda para ser copiada al portapapeles.
         *
         * @param td el elemento JQuery que representa la celda de la cual se pretende obtener el valor.
         * @return el valor de la celda que deberá ser colocado en el portapapeles.
         */
        public onBeforeCopy: (td: JQuery) => string;
    }

    /**
     *  Clase para mostrar las referencias de un concepto.
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class ReferenciaConcepto {

        /** Definicion de la plantilla para un renglon sin referencias de Url*/
        definicionPlantillaRenglonReferencia: string;

        /** Definicion de la plantilla para un renglon con referencias de Url*/
        definicionPlantillaRenglonReferenciaUrl: string;

        /** Instancia unica de las referencias del concepto*/
        private static _instance: ReferenciaConcepto = null;

        /** El identificador del botón para la siguiente referencia */
        private idBtnReferenciaAdelante: string;

        /** El identificador del botón para la anterior referencia */
        private idBtnReferenciaAtras: string;


        /** El identificador del detalle de la tabla de referencias */
        private idDetalleReferencias: string;


        /** Indice de referencia que se encuentra visualizando*/
        private indiceReferenciaConceptoActual: number = 0;


        /** Singleton para el manejo unico de la compilacion de los tipos de referencia de un concepto*/
        public static getInstance(): ReferenciaConcepto {
            if (ReferenciaConcepto._instance === null) {
                ReferenciaConcepto._instance = new ReferenciaConcepto();
                ReferenciaConcepto._instance.inicializarPlantillas();
            }
            return ReferenciaConcepto._instance;
        }


        /** 
        * Inicializa las plantillas de los renglones con url y sin url
        */
        private inicializarPlantillas(): void {

            var self = this;
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-renglon-detalle-referencia-concepto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    self.definicionPlantillaRenglonReferencia = plantilla[0].outerHTML;
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de una etiqueta de concepto');
                });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-renglon-uri-detalle-referencia-concepto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    self.definicionPlantillaRenglonReferenciaUrl = plantilla[0].outerHTML;
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de una etiqueta de concepto');
                });
        }
        /**
         * Obtiene el tipo de etiqueta opcional de documentación del concepto mostrado.
         *
         * @return el texto con la documentación.
         */
        public obtenerDocumentacionConcepto(concepto: model.Concepto, scope: XbrlEtiquetaConcepto): string {
            var documentacion = "";
            var idioma = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma;
            if (idioma !== undefined && idioma != null && concepto !== undefined && concepto != null) {
                if (concepto.Etiquetas !== undefined && concepto.Etiquetas != null) {
                    var rolDoc = 'http://www.xbrl.org/2003/role/documentation';
                    for (var idxIdioma in concepto.Etiquetas){
                        for (var idxRol in concepto.Etiquetas[idxIdioma]){
                            if (concepto.Etiquetas[idxIdioma][idxRol].Rol == rolDoc) {
                                documentacion = concepto.Etiquetas[idxIdioma][idxRol].Valor;
                                if (concepto.Etiquetas[idxIdioma][idxRol].Idioma == idioma.ClaveIdioma) {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            return documentacion;
        }
        /**
         * Obtiene el detalle de las etiquetas de un concepto
         *
         * @return el texto con la declaración de las etiquetas.
         */
        public obtenerDetalleEtiquetas(concepto: model.Concepto): string {
            var etiquetas = "";
            var idioma = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma;
            if (idioma !== undefined && idioma != null && concepto !== undefined && concepto != null) {
                if (concepto.Etiquetas !== undefined && concepto.Etiquetas != null) {
                    for (var idxIdioma in concepto.Etiquetas) {
                        for (var idxRol in concepto.Etiquetas[idxIdioma]) {
                            var etq = concepto.Etiquetas[idxIdioma][idxRol];
                            etiquetas += this.definicionPlantillaRenglonReferencia.replace("parteReferencia", "<b>"+etq.Rol + " ("+etq.Idioma+")</b>").
                                replace("Valor",etq.Valor);
                        }
                    }
                }
            }
            return etiquetas;
        }
        /**
         * Obtiene todos los renglones de las referencias de un concepto.
         *
         * @return los renglones de una tabla de referencias de un concepto.
         */
        public obtenerDetalleReferencias(referenciasConcepto, indiceReferencia, scope: XbrlEtiquetaConcepto): string {

            var renglonesReferenciasConcepto = "";
            if (referenciasConcepto !== undefined && referenciasConcepto != null) {
                for (var indiceParteReferencia in referenciasConcepto[indiceReferencia].Partes) {
                    var nombreFinalParteReferencia = referenciasConcepto[indiceReferencia].Partes[indiceParteReferencia].Nombre;

                    //buscar si existen etiquetas personalizadas
                    var plantilla = AngularJQueryBridge.getInstance().obtenerDefinicionPlantilla();
                    var idioma = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma;
                    if (plantilla !== undefined && plantilla != null && idioma !== undefined && idioma != null) {
                        var partePersonalizada = plantilla.obtenerEtiquetaParteReferencia(nombreFinalParteReferencia, idioma.ClaveIdioma);
                        if (partePersonalizada !== undefined && partePersonalizada != null) {
                            nombreFinalParteReferencia = partePersonalizada;
                        }
                    }


                if (referenciasConcepto[indiceReferencia].Partes[indiceParteReferencia].Nombre == 'URI') {
                        renglonesReferenciasConcepto += this.definicionPlantillaRenglonReferenciaUrl.replace("parteReferencia", nombreFinalParteReferencia).
                        replace("Valor", referenciasConcepto[indiceReferencia].Partes[indiceParteReferencia].Valor);
                } else {

                        renglonesReferenciasConcepto += this.definicionPlantillaRenglonReferencia.replace("parteReferencia", nombreFinalParteReferencia).
                        replace("Valor", referenciasConcepto[indiceReferencia].Partes[indiceParteReferencia].Valor);
                }


            }
            } 
            
            return renglonesReferenciasConcepto;
        }

        /** Muestra en un dialogo el detalle de las referencias del concepto */
        public mostrarDetalleReferencias(scope: XbrlEtiquetaConcepto, elemento: JQuery, idEtiqueta: string, concepto: model.Concepto): void {

            var self = this;
            this.idBtnReferenciaAdelante = utils.UUIDUtils.generarUUID();
            this.idBtnReferenciaAtras = utils.UUIDUtils.generarUUID();
            this.idDetalleReferencias = utils.UUIDUtils.generarUUID();
            this.indiceReferenciaConceptoActual = 0;
            var tipoElemento = "";
            if (concepto.Tipo == 1) {
                tipoElemento = 'tuple';
            } else if (concepto.Tipo == 2){
                tipoElemento = 'item';
            } else if (concepto.Tipo == 3) {
                tipoElemento = 'hypercubeItem';
            } else if (concepto.Tipo == 4) {
                tipoElemento = 'dimensionItem';
            } 


            var variablesPlantillaReferencia = new Array<{ llave: string; valor: string; }>();
            variablesPlantillaReferencia.push({ llave: 'idDetalleReferenciaConcepto', valor: "R" + idEtiqueta });
            variablesPlantillaReferencia.push({ llave: 'etiquetaConcepto', valor: scope.obtenerEtiquetaConcepto() });
            variablesPlantillaReferencia.push({ llave: 'detalleReferencias', valor: this.obtenerDetalleReferencias(concepto.Referencias, this.indiceReferenciaConceptoActual, scope) });
            variablesPlantillaReferencia.push({ llave: 'idBtnReferenciaAdelante', valor: this.idBtnReferenciaAdelante });
            variablesPlantillaReferencia.push({ llave: 'idBtnReferenciaAtras', valor: this.idBtnReferenciaAtras });
            variablesPlantillaReferencia.push({ llave: 'idDetalleReferencias', valor: this.idDetalleReferencias });
            variablesPlantillaReferencia.push({ llave: 'documentacion', valor: this.obtenerDocumentacionConcepto(concepto, scope) });
            variablesPlantillaReferencia.push({ llave: 'espacioNombresConcepto', valor: concepto.EspacioNombres });
            variablesPlantillaReferencia.push({ llave: 'nombreConcepto', valor: concepto.Nombre });
            variablesPlantillaReferencia.push({ llave: 'idConcepto', valor: concepto.Id });
            variablesPlantillaReferencia.push({ llave: 'tipoDatoConcepto', valor: concepto.TipoDato });
            variablesPlantillaReferencia.push({ llave: 'tipoConcepto', valor: tipoElemento });
            variablesPlantillaReferencia.push({ llave: 'conceptoAbstracto', valor: (""+concepto.EsAbstracto) });
            variablesPlantillaReferencia.push({ llave: 'detalleEtiquetas', valor: this.obtenerDetalleEtiquetas(concepto)});


            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-detalle-referencia-concepto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantillaReferencia,
                function (plantilla: JQuery) {
                    if (concepto.Referencias !== undefined && concepto.Referencias != null && concepto.Referencias.length > 0){
                        plantilla.find('#tr_no_existe').remove();
                    }
                    plantilla.find('#' + self.idBtnReferenciaAtras).addClass("none");

                    if (concepto.Referencias === undefined || concepto.Referencias == null || concepto.Referencias.length == 1) {
                        plantilla.find('#' + self.idBtnReferenciaAdelante).addClass("none");
                    }

                    plantilla.find('#' + self.idBtnReferenciaAtras).on('click', function () {
                        var contenidoHtmlDetalleReferencias = self.obtenerDetalleReferencias(concepto.Referencias, --self.indiceReferenciaConceptoActual,scope);

                        $('#' + self.idBtnReferenciaAdelante).removeClass("none");
                        if (self.indiceReferenciaConceptoActual == 0) {
                            $('#' + self.idBtnReferenciaAtras).addClass("none");
                        }

                        $('#' + self.idDetalleReferencias).empty();
                        $('#' + self.idDetalleReferencias).html(contenidoHtmlDetalleReferencias);

                    });

                    plantilla.find('#' + self.idBtnReferenciaAdelante).on('click', function () {
                        var contenidoHtmlDetalleReferencias = self.obtenerDetalleReferencias(concepto.Referencias, ++self.indiceReferenciaConceptoActual,scope);

                        $('#' + self.idBtnReferenciaAtras).removeClass("none");

                        if (concepto.Referencias === undefined || concepto.Referencias == null || concepto.Referencias.length <= (self.indiceReferenciaConceptoActual + 1)) {
                            $('#' + self.idBtnReferenciaAdelante).addClass("none");
                        }
                        $('#' + self.idDetalleReferencias).empty();
                        $('#' + self.idDetalleReferencias).html(contenidoHtmlDetalleReferencias);

                    });



                    $('body').append(plantilla);
                    $('#R' + idEtiqueta).modal();

                    $('#R' + idEtiqueta).on('hidden.bs.modal', function () {
                        $('#R' + idEtiqueta).remove();
                    });
                    if (self.obtenerDocumentacionConcepto(concepto, scope) == "") {
                        plantilla.find("#seccionDocumentacion").hide();
                    }

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de la referencia del concepto');
                });
        }
    }


    /**
     * Definición de los settings del plugin que presenta un mensaje de validacion de una formula asociada al hecho.
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlMensajeValidacionFormulaSettings {

        /** Detalle de operacion que identifica la formula ejecutada*/
        public detalleOperacion: model.DetalleOperacion;

        /** Identificador de la formula que se ejecuto*/
        public idFormula: string;

        /** Identificador unico del hecho*/
        public idHecho: string;

        /** El identificador del elemento que contiene este plugin dentro del dom */
        public idPlugin: string;
    }


    /**
     * Implementación de un elemento de presentación encargado de mostrar al usuario el mensaje de validacion de formula
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlMensajeValidacionFormula implements ElementoPresentacionXbrl {

        /** Los parámetros usados para la creación/presentación del plugin en pantalla */
        private settings: XbrlMensajeValidacionFormulaSettings;

        /** El identificador del elemento que contiene este plugin dentro del dom */
        private idPlugin: string;

        /** El elemento que originalmente se había definido antes de ejecutar el plugin */
        private elemento: JQuery;

        /**
         * Inicializa el plugin de JQuery a partir de los parámetros especificados en la declaración del elemento
         *
         * @param element el elemento JQuery al que se aplica el plugin
         * @param settings los settings con los que se inicializó el plugin al momento de ser creado
         */
        public init(element: JQuery, settings: XbrlMensajeValidacionFormulaSettings): void {
            this.elemento = element;
            this.idPlugin = utils.UUIDUtils.generarUUID();

            var idFormula = element.attr('xbrl:id-formula');
            var idHecho = element.attr('xbrl:id-hecho');

            this.settings = $.extend({
                idFormula: idFormula,
                idHecho: idHecho
            }, settings);

            $(this.elemento).data('xbrlMensajeValidacionFormula', this);

            var self = this;

            this.actualizarUI();

        }

        /**
         * Actualiza la interfaz del usuario de acuerdo a los cambios del modelo
         */
        actualizarUI(): void {

            var self = this;

            var detallesOperacionHecho = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().OperacionesPorIdHecho[this.settings.idHecho];

            for (var indiceDetalleOperacionEvaluar in detallesOperacionHecho) {
                if (detallesOperacionHecho[indiceDetalleOperacionEvaluar].EsFormula && detallesOperacionHecho[indiceDetalleOperacionEvaluar].IdFormula == this.settings.idFormula) {
                    this.settings.detalleOperacion = detallesOperacionHecho[indiceDetalleOperacionEvaluar];
                }
            }
            var claseValidacionSpan = "btn-default";
            var iconoValidacion = "fa-info";
            if (this.settings.detalleOperacion.EstadoValidacionFormula == model.EstadoValidacion.Invalido) {
                claseValidacionSpan = "btn-danger";
                iconoValidacion = "fa-exclamation";
            } else if (this.settings.detalleOperacion.EstadoValidacionFormula == model.EstadoValidacion.Valido) {
                claseValidacionSpan = "btn-success";
                iconoValidacion = "fa-check";
            } else if (this.settings.detalleOperacion.EstadoValidacionFormula == model.EstadoValidacion.Advertencia) {
                claseValidacionSpan = "btn-warning";
                iconoValidacion = "fa-warning";
            }

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.idPlugin });
            variablesPlantilla.push({ llave: 'iconoValidacionFormula', valor: iconoValidacion });
            variablesPlantilla.push({ llave: 'claseValidacionSpan', valor: claseValidacionSpan });
            variablesPlantilla.push({ llave: 'motivoFormula', valor: this.generarMotivoFormulaDetalleOperacion() });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-mensaje-validacion-formula.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    self.elemento.empty().append(plantilla);
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de un mensaje de validacion');
                });
        }

        /*
        * Genera el motivo de la formula de una operacion del hecho
        */
        generarMotivoFormulaDetalleOperacion(): string {
            var descripcionErrorFormula: string = this.settings.detalleOperacion.Motivo;
            var descripcionVariable: string = null;

            var hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerHechoPorId(this.settings.detalleOperacion.IdHecho);

            if (hecho && hecho != null) {
                descripcionVariable = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().describirHecho(hecho);
            }

            descripcionErrorFormula = descripcionErrorFormula.replace("{variable1}", descripcionVariable);

            descripcionErrorFormula = AngularJQueryBridge.getInstance().obtenerAbaxService()
                .remplazarVariablesAdicionalesDescripcionFormula(descripcionErrorFormula, this.settings.detalleOperacion.IdFormula, hecho);

            return descripcionErrorFormula;
        }


    }


    /**
     * Definición de los settings del plugin que presenta el valor calculado de un hecho en un detalle de calculo.
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlValorCalculadoHechoSettings {

        /** Identificador unico del hecho*/
        public idHecho: string;

        /** Peso del detalle operando de la validacion del calculo*/
        public peso: number;

        /** Indica si debe ocultar el detalle del calculo del valor calculado*/
        public ocultarDetalleCalculo: boolean;

    }


    /**
     * Implementación de un elemento de presentación encargado de mostrar al usuario el valor calculado de un hecho en un detalle de calculo
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlValorCalculadoHecho implements ElementoPresentacionXbrl {

        /** Los parámetros usados para la creación/presentación del plugin en pantalla */
        private settings: XbrlValorCalculadoHechoSettings;

        /** El identificador del elemento que contiene este plugin dentro del dom */
        private idPlugin: string;

        /** El elemento que originalmente se había definido antes de ejecutar el plugin */
        private elemento: JQuery;

        /** Elemento del modelo que tiene la definicion del hecho*/
        private hecho: model.Hecho;

        /** Elemento del modelo que tiene la definicion del concepto*/
        private concepto: model.Concepto;

        /**
         * Inicializa el plugin de JQuery a partir de los parámetros especificados en la declaración del elemento
         *
         * @param element el elemento JQuery al que se aplica el plugin
         * @param settings los settings con los que se inicializó el plugin al momento de ser creado
         */
        public init(element: JQuery, settings: XbrlValorCalculadoHechoSettings): void {
            this.elemento = element;
            this.idPlugin = utils.UUIDUtils.generarUUID();

            var idHecho = element.attr('xbrl:id-hecho');
            var peso = element.attr('xbrl:peso');

            this.settings = $.extend({
                idHecho: idHecho,
                peso: peso
            }, settings);

            $(this.elemento).data('xbrlValorCalculadoHecho', this);

            this.actualizarUI();

        }

        /**
         * Actualiza la interfaz del usuario de acuerdo a los cambios del modelo
         */
        actualizarUI(): void {

            var self = this;
            this.hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerHechoPorId(this.settings.idHecho);
            this.concepto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia.ConceptosPorId[this.hecho.IdConcepto];

            var claseOperando = "";
            if (this.hecho.ValorEstadoValidacion == 1 || this.hecho.ValorEstadoValidacion == 2 || this.hecho.ValorEstadoValidacion == 4) {
                claseOperando = utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionHechoTipoDatoXbrl(this.hecho.ValorEstadoValidacion)
                claseOperando += " seleccionOperacionCalculo";
            }


            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: this.idPlugin });
            variablesPlantilla.push({ llave: 'valorCalculado', valor: "" + this.obtenerValorCalculado() });
            variablesPlantilla.push({ llave: 'clases', valor: claseOperando });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-valor-calculado.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    self.elemento.empty().append(plantilla);
                    self.hecho.IdConcepto;
                    var tipoDatoNumerico = <abaxXBRL.model.TipoDatoNumerico>(abaxXBRL.model.TiposDatoXbrl.getInstance().get()[self.concepto.TipoDatoXbrl]);
                    var tipoDatoNumericoPorConcepto = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().tipoDatoNumericoPorConcepto;
                    if (tipoDatoNumericoPorConcepto && tipoDatoNumericoPorConcepto[self.concepto.Id]) {
                        tipoDatoNumerico = tipoDatoNumericoPorConcepto[self.concepto.Id];
                    }
                    var opcionesAutonumeric = tipoDatoNumerico.OpcionesAutonumeric;

                    $("#operando_" + self.idPlugin).autoNumeric('init', opcionesAutonumeric);

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla del valor calculado de un hecho en un detalle de operacion');
                });
        }

        /** 
        * Obtiene el valor calculado del operando de una operacion 
        */
        obtenerValorCalculado(): decimal.Decimal {
            var DetalleOperaciones = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().OperacionesPorIdHecho[this.settings.idHecho];
            var valorCalculado: decimal.Decimal = this.hecho.ValorRedondeado.times(this.settings.peso);

            if (DetalleOperaciones && DetalleOperaciones.length > 0) {
                for (var indiceDetalleOperacion in DetalleOperaciones) {
                    if (!DetalleOperaciones[indiceDetalleOperacion].EsFormula) {

                        valorCalculado = math.eval('bignumber("' + DetalleOperaciones[indiceDetalleOperacion].ValorCalculado + '")');
                        break;
                    }
                }
            }

            return valorCalculado;
        }
    }


    /**
      *  Clase para el manejo del detalle de operaciones y formulas para los tipos de datos de campo captura numérico.
      *
      * @author Luis Angel Morales Gonzalez
      * @version 1.0
    */
    export class DetalleOperacionCampoCaptura {


        /** Identificador unico del boton del paginador de las valdiaciones*/
        idBtnValidacionAdelante: string;

        /** Identificador unico del boton del paginador de las valdiaciones*/
        idBtnValidacionAtras: string;

        /** Identificador unico del modal de detalle de validacion*/
        idDetalleValidacion: string;

        /** Definicion de detalle de operaciones */
        detallesOperaciones: model.DetalleOperacion[];

        /** Definicion del hecho en el modelo*/
        hecho: model.Hecho;

        /** Indice de operacion  que se encuentra visualizando*/
        private indiceOperacionActual: number = 0;

        /** Definicion de un bread crumb*/
        private definicionBreadCrumb: string = "<li class=\"esActiva\" id=\"idBreadCrumb\"><a tooltip=\"descripcionHecho\">descripcionCortaHecho</a></li>";

        /** Valores de los breadCrumb*/
        private breadCrumbs: Array<any>;


        /** Instancia unica de las operaciones de un hecho*/
        private static _instance: DetalleOperacionCampoCaptura = null;


        /** Singleton para el manejo unico de la compilacion de las operaciones de un hecho*/
        public static getInstance(): DetalleOperacionCampoCaptura {
            if (DetalleOperacionCampoCaptura._instance === null) {
                DetalleOperacionCampoCaptura._instance = new DetalleOperacionCampoCaptura();
                DetalleOperacionCampoCaptura._instance.inicializarPlantillas();
            }
            return DetalleOperacionCampoCaptura._instance;
        }

        /** 
        * Inicializa las plantillas de los renglones de operaciones de un hecho
        */
        private inicializarPlantillas(): void {

            var self = this;
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
        }



        /** Muestra en un dialogo el detalle de las operaciones de un hecho */
        public mostrarDetalleOperaciones(idHecho: string): void {

            var self = this;
            this.idDetalleValidacion = utils.UUIDUtils.generarUUID();

            this.idBtnValidacionAtras = "Anterior_" + this.idDetalleValidacion;
            this.idBtnValidacionAdelante = "Adelante_" + this.idDetalleValidacion;
            this.indiceOperacionActual = 0;
            this.detallesOperaciones = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().OperacionesPorIdHecho[idHecho];
            this.hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().HechosPorId[idHecho];
            this.breadCrumbs = new Array<any>();
            if (this.hecho === undefined || this.hecho == null) {
                return;
            }
            var descripcionHecho = this.obtenerEtiquetaDeConcepto(this.hecho.IdConcepto);
            var descripcionCortaHecho = descripcionHecho.length > abaxXBRL.model.ConstantesComunes.MAXIMO_CARACTERES_CONCEPTO ?
                descripcionHecho.substring(0, abaxXBRL.model.ConstantesComunes.MAXIMO_CARACTERES_CONCEPTO) + abaxXBRL.model.ConstantesComunes.CADENA_PUNTOS_SUSPENSIVOS :
                descripcionHecho;
            this.breadCrumbs.push({ idHecho: this.hecho.Id, descripcionHecho: descripcionHecho, descripcionCortaHecho: descripcionCortaHecho });
            var alturaModal = "" + (window.innerHeight - 400);


            var variablesPlantillaOperaciones = new Array<{ llave: string; valor: string; }>();
            variablesPlantillaOperaciones.push({ llave: 'idDetalleValidacion', valor: this.idDetalleValidacion });
            variablesPlantillaOperaciones.push({ llave: 'idBtnValidacionAtras', valor: this.idBtnValidacionAtras });
            variablesPlantillaOperaciones.push({ llave: 'idBtnValidacionAdelante', valor: this.idBtnValidacionAdelante });
            variablesPlantillaOperaciones.push({ llave: 'alturaModal', valor: alturaModal });



            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-detalle-validacion.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantillaOperaciones,
                function (plantilla: JQuery) {

                    plantilla.find('#' + self.idBtnValidacionAtras).addClass("none");

                    if (self.detallesOperaciones.length == 1) {
                        plantilla.find('#' + self.idBtnValidacionAdelante).addClass("none");
                    }
                    if (self.detallesOperaciones[self.indiceOperacionActual].EsFormula) {
                        self.mostrarDetalleFormula(plantilla.find('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                    } else {
                        self.mostrarDetalleCalculo(plantilla.find('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                    }


                    plantilla.find('#' + self.idBtnValidacionAtras).on('click', function () {

                        self.indiceOperacionActual -= 1;

                        $('#' + self.idBtnValidacionAdelante).removeClass("none");
                        if (self.indiceOperacionActual == 0) {
                            $('#' + self.idBtnValidacionAtras).addClass("none");
                        }

                        if (self.detallesOperaciones[self.indiceOperacionActual].EsFormula) {
                            $('#detalleValidacion_' + self.idDetalleValidacion).empty();
                            self.mostrarDetalleFormula($('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                        } else {
                            self.mostrarDetalleCalculo($('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                        }


                    });

                    plantilla.find('#' + self.idBtnValidacionAdelante).on('click', function () {

                        self.indiceOperacionActual += 1;

                        $('#' + self.idBtnValidacionAtras).removeClass("none");

                        if (self.detallesOperaciones.length <= (self.indiceOperacionActual + 1)) {
                            $('#' + self.idBtnValidacionAdelante).addClass("none");
                        }

                        if (self.detallesOperaciones[self.indiceOperacionActual].EsFormula) {
                            $('#detalleValidacion_' + self.idDetalleValidacion).empty();
                            self.mostrarDetalleFormula($('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                        } else {
                            self.mostrarDetalleCalculo($('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                        }

                    });


                    $('body').append(plantilla);

                    $("#breadcrumbDetalleOperaciones_" + self.idDetalleValidacion).addClass("none");
                    $('#' + self.idDetalleValidacion).modal();

                    $('#' + self.idDetalleValidacion).on('hidden.bs.modal', function () {
                        $('#' + self.idDetalleValidacion).empty();
                    });


                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar el modal de las operaciones de un hecho');
                });
        }


        /**
        *Muestra un detalle de calculo de una operacion del hecho
        */
        mostrarDetalleCalculo(elemento: JQuery, hecho: model.Hecho, indiceOperacionActual: number): void {
            var self = this;

            var alturaModal = "" + (window.innerHeight - 400);

            var variablesPlantillaOperaciones = new Array<{ llave: string; valor: string; }>();
            variablesPlantillaOperaciones.push({ llave: 'idDetalleValidacion', valor: this.idDetalleValidacion });
            variablesPlantillaOperaciones.push({ llave: 'descripcionConcepto', valor: this.obtenerEtiquetaDeConcepto(hecho.IdConcepto) });
            variablesPlantillaOperaciones.push({ llave: 'alturaModal', valor: alturaModal });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-detalle-calculo-cuerpo.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantillaOperaciones,
                function (plantilla: JQuery) {

                    plantilla.find('#' + self.idBtnValidacionAtras).addClass("none");

                    if (self.detallesOperaciones.length == 1) {
                        plantilla.find('#' + self.idBtnValidacionAdelante).addClass("none");
                    }

                    self.obtenerDetalleOperandosOperacionCalculo(plantilla.find('#detalleOperaciones_' + self.idDetalleValidacion), indiceOperacionActual);
                    self.obtenerFooterOperacionCalculo(plantilla.find('#operacioFooter_' + self.idDetalleValidacion), indiceOperacionActual);

                    elemento.empty().append(plantilla);

                    var detalleOperacion = self.detallesOperaciones[indiceOperacionActual];
                    var etiquetaRol = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().Taxonomia.obtenerEtiquetaDeRol(detalleOperacion.UriRol, AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().xbrlIdioma.ClaveIdioma);
                    $("#nombreFormatoValidacion").empty().append(etiquetaRol);

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar el un detalle de calculo de la operacion de hecho');
                });
        }

        /**
        *Obtiene los operandos de una operacion de los detalles de un hecho
        *@param elemento, elemento jquery al cual se le asignara el detall del operando de una operacion de calculo
        */
        obtenerDetalleOperandosOperacionCalculo(elemento: JQuery, indiceOperacionActual: number): void {
            var detalleOperacion = this.detallesOperaciones[indiceOperacionActual];
            var self = this;
            for (var indiceDetalleOperando in detalleOperacion.DetalleOperandos) {

                var variablesPlantillaOperaciones = new Array<{ llave: string; valor: string; }>();
                variablesPlantillaOperaciones.push({ llave: 'descripcionConcepto', valor: this.obtenerEtiquetaDeConcepto(detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdConcepto) });
                variablesPlantillaOperaciones.push({ llave: 'peso', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].Peso.toString() });

                var claseOperando = "";

                if (detalleOperacion.DetalleOperandos[indiceDetalleOperando].EstadoValidacion == 1 || detalleOperacion.DetalleOperandos[indiceDetalleOperando].EstadoValidacion == 2 || detalleOperacion.DetalleOperandos[indiceDetalleOperando].EstadoValidacion == 4) {
                    claseOperando = utils.EstilosCampoCaptura.obtenerClaseEstadoValidacionHechoTipoDatoXbrl(detalleOperacion.DetalleOperandos[indiceDetalleOperando].EstadoValidacion)
                    claseOperando += " seleccionOperacionCalculo";
                }

                variablesPlantillaOperaciones.push({ llave: 'clases', valor: claseOperando });
                variablesPlantillaOperaciones.push({ llave: 'IdConcepto', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdConcepto });
                variablesPlantillaOperaciones.push({ llave: 'IdContexto', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdContexto });
                variablesPlantillaOperaciones.push({ llave: 'IdUnidad', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdUnidad });
                variablesPlantillaOperaciones.push({ llave: 'idHecho', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdHecho });
                variablesPlantillaOperaciones.push({ llave: 'xbrlSoloLectura', valor: "" + !AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Bloqueado });
                variablesPlantillaOperaciones.push({ llave: 'xbrlSoloEdicion', valor: "false" });

                detalleOperacion.DetalleOperandos[indiceDetalleOperando].EstadoValidacion = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().HechosPorId[detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdHecho].ValorEstadoValidacion;

                this.mostrarRenglonOperando(variablesPlantillaOperaciones, detalleOperacion.DetalleOperandos[indiceDetalleOperando].EstadoValidacion, elemento);

            }
        }

        /**
        * Muestra el footer de la operacionde calculo
        */
        obtenerFooterOperacionCalculo(elemento: JQuery, indiceOperacionActual: number): void {

            var detalleOperacion = this.detallesOperaciones[indiceOperacionActual];
            var variablesPlantillaOperaciones = new Array<{ llave: string; valor: string; }>();

            variablesPlantillaOperaciones.push({ llave: 'valorCalculado', valor: detalleOperacion.ValorCalculado.toString() });
            variablesPlantillaOperaciones.push({ llave: 'descripcionConcepto', valor: this.obtenerEtiquetaDeConcepto(detalleOperacion.IdConcepto) });

            variablesPlantillaOperaciones.push({ llave: 'IdConcepto', valor: detalleOperacion.IdConcepto });
            variablesPlantillaOperaciones.push({ llave: 'IdContexto', valor: detalleOperacion.IdContexto });
            variablesPlantillaOperaciones.push({ llave: 'IdUnidad', valor: detalleOperacion.IdUnidad });
            variablesPlantillaOperaciones.push({ llave: 'idHecho', valor: detalleOperacion.IdHecho });
            variablesPlantillaOperaciones.push({ llave: 'peso', valor: "1" });

            variablesPlantillaOperaciones.push({ llave: 'xbrlSoloLectura', valor: "" + !AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Bloqueado });
            //variablesPlantillaOperaciones.push({ llave: 'xbrlSoloEdicion', valor: "true" });
            variablesPlantillaOperaciones.push({ llave: 'xbrlSoloEdicion', valor: "false" });

            this.mostrarRenglonOperando(variablesPlantillaOperaciones, null, elemento);
        }

        /**
        * Muestra el renglon de la operacion definida por un hecho en la operacion de calculo
        * @param variablesPlantillaOperaciones variables necesarias para presentar la plantilla de un renglon en el detalle de calculo
        * @param estadoValidacion estado de validacion de la operacion
        * @elemento Elemento que se le asignara la plantilla el renglon de la operacion
        */
        mostrarRenglonOperando(variablesPlantillaOperaciones: Array<{ llave: string; valor: string; }>, estadoValidacion: model.EstadoValidacion, elemento: JQuery): void {
            var self = this;
            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-detalle-calculo-renglon.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantillaOperaciones,
                function (plantilla: JQuery) {
                    plantilla.find('xbrl\\:campo-captura').xbrlCampoCaptura();
                    plantilla.find('xbrl\\:valor-calculado-hecho').xbrlValorCalculadoHecho();
                    plantilla.find('[xbrl\\:roles-concepto-tool-tip]').xbrlRolesConceptoToolTip();
                    elemento.append(plantilla);

                    if (estadoValidacion && (estadoValidacion == 1 || estadoValidacion == 2 || estadoValidacion == 4)) {
                        var variableHecho = $.grep(variablesPlantillaOperaciones, function (e) { return e.llave == "idHecho"; });
                        if (variableHecho) {
                            $("#operando_" + variableHecho[0].valor).on('click', function () {
                                self.mostrarDetalleOperacionCalculoFormulaHecho(variableHecho[0].valor);
                            });
                        }
                    }

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de la operacion de un hecho');
                });
        }

        


        /**
        *Muestra el detalle de la operacion de calculo de un hecho a partir de un bread
        */
        mostrarDetalleOperacionCalculoFormulaHecho = function (idHecho: string): void {

            this.detallesOperaciones = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().OperacionesPorIdHecho[idHecho];

            this.hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().HechosPorId[idHecho];

            var descripcionHecho = this.obtenerEtiquetaDeConcepto(this.hecho.IdConcepto);
            var descripcionCortaHecho = descripcionHecho.length > abaxXBRL.model.ConstantesComunes.MAXIMO_CARACTERES_CONCEPTO ?
                descripcionHecho.substring(0, abaxXBRL.model.ConstantesComunes.MAXIMO_CARACTERES_CONCEPTO) + abaxXBRL.model.ConstantesComunes.CADENA_PUNTOS_SUSPENSIVOS :
                descripcionHecho;
            this.breadCrumbs.push({ idHecho: this.hecho.Id, descripcionHecho: descripcionHecho, descripcionCortaHecho: descripcionCortaHecho });

            this.inicializarBreadCrumbs(idHecho);

            this.indiceOperacionActual = 0;
            var self = this;

            $('#' + this.idBtnValidacionAtras).addClass("none");

            if (this.detallesOperaciones.length == 1) {
                $('#' + this.idBtnValidacionAdelante).addClass("none");
            }
            if (this.detallesOperaciones[this.indiceOperacionActual].EsFormula) {
                this.mostrarDetalleFormula($('#detalleValidacion_' + this.idDetalleValidacion), this.hecho, this.indiceOperacionActual);
            } else {
                this.mostrarDetalleCalculo($('#detalleValidacion_' + this.idDetalleValidacion), this.hecho, this.indiceOperacionActual);
            }


            $('#' + this.idBtnValidacionAtras).on('click', function () {

                self.indiceOperacionActual -= 1;

                $('#' + self.idBtnValidacionAdelante).removeClass("none");
                if (self.indiceOperacionActual == 0) {
                    $('#' + self.idBtnValidacionAtras).addClass("none");
                }

                if (self.detallesOperaciones[self.indiceOperacionActual].EsFormula) {
                    $('#detalleValidacion_' + self.idDetalleValidacion).empty();
                    self.mostrarDetalleFormula($('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                } else {
                    self.mostrarDetalleCalculo($('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                }


            });

            $('#' + this.idBtnValidacionAdelante).on('click', function () {

                self.indiceOperacionActual += 1;

                $('#' + self.idBtnValidacionAtras).removeClass("none");

                if (self.detallesOperaciones.length <= (self.indiceOperacionActual + 1)) {
                    $('#' + self.idBtnValidacionAdelante).addClass("none");
                }

                if (self.detallesOperaciones[self.indiceOperacionActual].EsFormula) {
                    $('#detalleValidacion_' + self.idDetalleValidacion).empty();
                    self.mostrarDetalleFormula($('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                } else {
                    self.mostrarDetalleCalculo($('#detalleValidacion_' + self.idDetalleValidacion), self.hecho, self.indiceOperacionActual);
                }

            });


        }

        /**
        *Inicializa los bread crumbs del flujo de consulta de operaciones de hechos
        */
        inicializarBreadCrumbs = function (idHecho: string): void {
            var self = this;

            $("#breadcrumbDetalleOperaciones_" + this.idDetalleValidacion).empty();
            if (this.breadCrumbs.length > 1) {

                this.depurarBreadCrums(idHecho);

                if (this.breadCrumbs.length > 1) {
                    $("#breadcrumbDetalleOperaciones_" + this.idDetalleValidacion).removeClass("none");
                    for (var indice = 0; indice < this.breadCrumbs.length; indice++) {
                        var plantillaBreadCrumb = "";

                        var idBreadCrumb = this.breadCrumbs[indice].idHecho + "_" + this.idDetalleValidacion;
                        plantillaBreadCrumb += this.definicionBreadCrumb.replace("descripcionHecho", this.breadCrumbs[indice].descripcionHecho);
                        plantillaBreadCrumb = plantillaBreadCrumb.replace("descripcionCortaHecho", this.breadCrumbs[indice].descripcionCortaHecho);

                        plantillaBreadCrumb = plantillaBreadCrumb.replace("idBreadCrumb", idBreadCrumb);


                        if ((this.breadCrumbs.length - 1) == indice) {
                            plantillaBreadCrumb = plantillaBreadCrumb.replace("esActiva", "active");
                            $("#breadcrumbDetalleOperaciones_" + this.idDetalleValidacion).append(plantillaBreadCrumb);
                        } else {
                            plantillaBreadCrumb = plantillaBreadCrumb.replace("esActiva", "");
                            $("#breadcrumbDetalleOperaciones_" + this.idDetalleValidacion).append(plantillaBreadCrumb);

                            $("#" + idBreadCrumb).on('click', function () {
                                self.mostrarDetalleOperacionCalculoFormulaHecho(this.id.split("_")[0]);
                            });
                        }


                    }
                } else {
                    $("#breadcrumbDetalleOperaciones_" + this.idDetalleValidacion).addClass("none");
                }

            }
        }

        /**
        *Realiza una depuracion de los breadCrumbs para eliminar elementos repetidos
        */
        depurarBreadCrums = function (idHecho: string): void {
            var indiceDepurar = this.breadCrumbs.length;
            for (var indice in this.breadCrumbs) {
                if (this.breadCrumbs[indice].idHecho == idHecho) {
                    indiceDepurar = parseInt(indice) + 1;
                    break;
                }
            }
            this.breadCrumbs.splice(indiceDepurar);
        }


        /**
        *Muestra un detalle de la formula  de una operacion del hecho
        */
        mostrarDetalleFormula(elemento: JQuery, hecho: model.Hecho, indiceOperacionActual: number): void {
            var self = this;

            var alturaModal = "" + (window.innerHeight - 400);

            var variablesPlantillaOperaciones = new Array<{ llave: string; valor: string; }>();
            var claseValidacionSpan = "btn-danger";
            var claseValidacionFormula = "fa-exclamation";

            if (this.detallesOperaciones[indiceOperacionActual].EstadoValidacionFormula == model.EstadoValidacion.Valido) {
                claseValidacionSpan = "btn-success";
                claseValidacionFormula = "fa-check";
            } else if (this.detallesOperaciones[indiceOperacionActual].EstadoValidacionFormula == model.EstadoValidacion.Advertencia) {
                claseValidacionSpan = "btn-warning";
                claseValidacionFormula = "fa-warning";
            }

            variablesPlantillaOperaciones.push({ llave: 'idDetalleValidacion', valor: this.idDetalleValidacion });
            variablesPlantillaOperaciones.push({ llave: 'alturaModal', valor: alturaModal });
            variablesPlantillaOperaciones.push({ llave: 'idFormula', valor: this.detallesOperaciones[indiceOperacionActual].IdFormula });
            variablesPlantillaOperaciones.push({ llave: 'idHecho', valor: this.detallesOperaciones[indiceOperacionActual].IdHecho });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-detalle-formula-cuerpo.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantillaOperaciones,
                function (plantilla: JQuery) {

                    plantilla.find('#' + self.idBtnValidacionAtras).addClass("none");

                    if (self.detallesOperaciones.length == 1) {
                        plantilla.find('#' + self.idBtnValidacionAdelante).addClass("none");
                    }

                    if (self.detallesOperaciones[indiceOperacionActual].ContieneInformacionDimension) {
                        plantilla.find('#EncabezadoDetalleOperandos_' + self.idDetalleValidacion).remove();
                        self.obtenerDetalleOperandosOperacionFormulaDimensional(plantilla.find('#detalleOperandosFormula_' + self.idDetalleValidacion), indiceOperacionActual);
                    } else {
                        plantilla.find('#EncabezadoDetalleOperandosDimension_' + self.idDetalleValidacion).remove();
                        self.obtenerDetalleOperandosOperacionFormula(plantilla.find('#detalleOperandosFormula_' + self.idDetalleValidacion), indiceOperacionActual);
                    }
                    if (!self.detallesOperaciones[indiceOperacionActual].mostrarPeriodo) {
                        plantilla.find('#tituloPeriodo').remove();
                    }

                    plantilla.find('xbrl\\:mensaje-validacion-formula').xbrlMensajeValidacionFormula();

                    elemento.empty().append(plantilla);
                    $("#nombreFormatoValidacion").empty();

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar un detalle de formula de la operacion de hecho');
                });
        }

        /**
        *Obtiene los operandos de una operacion de formula de los detalles de un hecho
        */
        obtenerDetalleOperandosOperacionFormula = function (elemento: JQuery, indiceOperacionActual: number): void {
            var detalleOperacion: model.DetalleOperacion = this.detallesOperaciones[indiceOperacionActual];

            if (detalleOperacion.DetalleOperandos.length > 1) {
                detalleOperacion = angular.copy(detalleOperacion);
                var detalleOperandos = detalleOperacion.DetalleOperandos;
                var primerOperando = detalleOperandos[0];
                detalleOperandos.splice(0, 1);
                detalleOperandos.push(primerOperando);
            }
            var hechosListados: Array<string> = [];
            for (var indiceDetalleOperando in detalleOperacion.DetalleOperandos) {

                var variablesPlantillaOperaciones = new Array<{ llave: string; valor: string; }>();
                var etiqueta = "";
                var roles = "";
                var descripcionPeriodo = "";

                if (detalleOperacion.mostrarPeriodo) {
                    var idHechoPeriodo = detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdHecho;
                    if (hechosListados.indexOf(idHechoPeriodo) != -1) {
                        continue;
                    }
                    hechosListados.push(idHechoPeriodo);
                    descripcionPeriodo = this.obtenerDescripcionPeriodo(idHechoPeriodo);
                }

                if (detalleOperacion.DetalleOperandos[indiceDetalleOperando].RolEtiqueta && detalleOperacion.DetalleOperandos[indiceDetalleOperando].RolEtiqueta != null
                    && detalleOperacion.DetalleOperandos[indiceDetalleOperando].RolEtiqueta != "") {
                    etiqueta = this.obtenerEtiquetaDeConceptoConRol(detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdConcepto, detalleOperacion.DetalleOperandos[indiceDetalleOperando].RolEtiqueta);
                    roles = this.obt
                } else {
                    etiqueta = this.obtenerEtiquetaDeConcepto(detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdConcepto);
                }
                variablesPlantillaOperaciones.push({ llave: 'descripcionConcepto', valor: etiqueta });
                variablesPlantillaOperaciones.push({ llave: 'detalleOperando.IdConcepto', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdConcepto });
                variablesPlantillaOperaciones.push({ llave: 'detalleOperando.IdContexto', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdContexto });

                if (detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdUnidad) {
                    variablesPlantillaOperaciones.push({ llave: 'detalleOperando.IdUnidad', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdUnidad });
                }

                variablesPlantillaOperaciones.push({ llave: 'xbrlSoloLectura', valor: "" + !AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Bloqueado });
                variablesPlantillaOperaciones.push({ llave: 'xbrlSoloEdicion', valor: "false" });
                variablesPlantillaOperaciones.push({ llave: 'descripcionPeriodo', valor: descripcionPeriodo });

                XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-detalle-formula-renglon.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    variablesPlantillaOperaciones,
                    function (plantilla: JQuery) {
                        plantilla.find('xbrl\\:campo-captura').xbrlCampoCaptura();
                        plantilla.find('[xbrl\\:roles-concepto-tool-tip]').xbrlRolesConceptoToolTip();
                        if (!detalleOperacion.mostrarPeriodo) {

                            plantilla.find('td.celdaPeriodo').remove();
                        } 
                        elemento.append(plantilla);

                    }, function (textStatus: any, errorThrown: any) {
                        console.log('ocurrió un error al cargar la plantilla del renglon de una formula de un hecho');
                    });
            }
        }

        /**
        *Obtiene los operandos de una operacion de formula dimensional de los detalles de un hecho
        */
        obtenerDetalleOperandosOperacionFormulaDimensional = function (elemento: JQuery, indiceOperacionActual: number): void {
            var detalleOperacion: model.DetalleOperacion = this.detallesOperaciones[indiceOperacionActual];
            if (detalleOperacion.DetalleOperandos.length > 1) {
                detalleOperacion = angular.copy(detalleOperacion);
                var detalleOperandos = detalleOperacion.DetalleOperandos;
                var primerOperando = detalleOperandos[0];
                detalleOperandos.splice(0, 1);
                detalleOperandos.push(primerOperando);
            }
            for (var indiceDetalleOperando in detalleOperacion.DetalleOperandos) {

                var etiquetaMiembroDimension = "";
                for (var indiceInformacionDimension in detalleOperacion.DetalleOperandos[indiceDetalleOperando].InformacionDimensiones) {
                    var informacionDimension = detalleOperacion.DetalleOperandos[indiceDetalleOperando].InformacionDimensiones[indiceInformacionDimension];
                    etiquetaMiembroDimension += this.obtenerEtiquetaDeConcepto(informacionDimension.dimension);
                    etiquetaMiembroDimension += " : " + this.obtenerEtiquetaDeMiembro(informacionDimension.miembro, informacionDimension.valorTipificado);
                }

                var etiqueta = "";
                if (detalleOperacion.DetalleOperandos[indiceDetalleOperando].RolEtiqueta && detalleOperacion.DetalleOperandos[indiceDetalleOperando].RolEtiqueta != null
                    && detalleOperacion.DetalleOperandos[indiceDetalleOperando].RolEtiqueta != "") {
                    etiqueta = this.obtenerEtiquetaDeConceptoConRol(detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdConcepto, detalleOperacion.DetalleOperandos[indiceDetalleOperando].RolEtiqueta);
                } else {
                    etiqueta = this.obtenerEtiquetaDeConcepto(detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdConcepto);
                }

                var variablesPlantillaOperaciones = new Array<{ llave: string; valor: string; }>();
                variablesPlantillaOperaciones.push({ llave: 'descripcionConcepto', valor: etiqueta });
                variablesPlantillaOperaciones.push({ llave: 'etiquetaMiembroDimension', valor: etiquetaMiembroDimension });

                variablesPlantillaOperaciones.push({ llave: 'detalleOperando.IdConcepto', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdConcepto });
                variablesPlantillaOperaciones.push({ llave: 'detalleOperando.IdContexto', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdContexto });

                if (detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdUnidad) {
                    variablesPlantillaOperaciones.push({ llave: 'detalleOperando.IdUnidad', valor: detalleOperacion.DetalleOperandos[indiceDetalleOperando].IdUnidad });
                }

                variablesPlantillaOperaciones.push({ llave: 'xbrlSoloLectura', valor: "" + !AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Bloqueado });
                //variablesPlantillaOperaciones.push({ llave: 'xbrlSoloEdicion', valor: "false" });
                variablesPlantillaOperaciones.push({ llave: 'xbrlSoloEdicion', valor: "false" });



                XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-detalle-formula-renglon-dimension.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    variablesPlantillaOperaciones,
                    function (plantilla: JQuery) {
                        plantilla.find('xbrl\\:campo-captura').xbrlCampoCaptura();
                        plantilla.find('[xbrl\\:roles-concepto-tool-tip]').xbrlRolesConceptoToolTip();
                        elemento.append(plantilla);

                    }, function (textStatus: any, errorThrown: any) {
                        console.log('ocurrió un error al cargar la plantilla del renglon de una formula de un hecho');
                    });
            }
        }


        /**Obtiene la etiqueta del concepto en el detalle de operaciones*/
        obtenerEtiquetaDeConcepto = function (idConcepto: string): string {
            return AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia.obtenerEtiquetaDeConcepto(
                idConcepto, abaxXBRL.model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().xbrlIdioma.ClaveIdioma);
        };

        /**Obtiene la etiqueta del concepto en el detalle de operaciones considerando el rol de la etiqueta*/
        obtenerEtiquetaDeConceptoConRol = function (idConcepto: string, rol: string): string {
            return AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia.obtenerEtiquetaDeConcepto(
                idConcepto, rol, AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().xbrlIdioma.ClaveIdioma);
        };

        /**
        * Obtiene una descripción del periodo en el que se reporta el hhecho indicado.
        * @param idHecho Identificador del hecho.
        * @return Descripción del periodo en el que se reporta el hecho indicado.
        **/
        obtenerDescripcionPeriodo = function (idHecho: string): string {
            var hecho: model.Hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().HechosPorId[idHecho];
            if (!hecho) {
                return "";
            }
            var contexto: model.Contexto = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().ContextosPorId[hecho.IdContexto];
            if (!contexto) {
                return "";
            }
            var periodo = contexto.Periodo;
            var descripcion = "";
            if (periodo.Tipo == model.Periodo.DURACION) {

                var fechaInicio = moment(periodo.FechaInicio).utc().format("DD/MM/YYYY");
                var fechaFin = moment(periodo.FechaFin).utc().format("DD/MM/YYYY");
                descripcion = fechaInicio + " al " + fechaFin;
            }
            if (periodo.Tipo == model.Periodo.INSTANTE) {

                var fechaInstante = moment(periodo.FechaInstante).utc().format("DD/MM/YYYY");
                descripcion = fechaInstante;
            }
            return descripcion;
        }

        /*
        *Genera el motivo de la formula de una operacion del hecho
        */
        generarMotivoFormulaDetalleOperacion = function (detalleOperacion: abaxXBRL.model.DetalleOperacion): string {
            var descripcionErrorFormula: string = detalleOperacion.Motivo;
            var descripcionVariable: string = null;

            var hecho = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().obtenerHechoPorId(detalleOperacion.IdHecho);

            if (hecho && hecho != null) {
                descripcionVariable = AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().describirHecho(hecho);
            }

            descripcionErrorFormula = descripcionErrorFormula.replace("{variable1}", descripcionVariable);

            return descripcionErrorFormula;
        };

        /**
        *Obtiene la etiqueta de un miembro de un operando de una operacion de la formula del hecho
        */
        obtenerEtiquetaDeMiembro = function (miembro: string, valorTipificado: string): string {

            var etiquetaMiembro = valorTipificado;
            if (miembro) {
                etiquetaMiembro = this.obtenerEtiquetaDeConcepto(miembro);
            }

            return etiquetaMiembro;
        };

    }

    /**
      *  Clase para el manejo de las notas al pie de los hechos en los campos de captura
      *
      * @author Luis Angel Morales Gonzalez
      * @version 1.0
    */
    export class NotaHechoCampoCaptura {

        /** Valores de los breadCrumb*/
        private idVentanaNotasPieHecho: string;

        /** Hecho al que perteneces las notas al pie*/
        private hecho: model.Hecho;

        /** Indica si se debe de pausar el evento blur */
        public pausarEventoBlur: boolean;


        /** Nota que se puede registrar en la forma de notas al pie*/
        private notaRegistro: string;

        /** Arreglo de opciones del listado de lenguajes que se va a presentar en la directiva */
        private ListaIdiomas: Array<any>;

        /** Notas al pie de los hechos*/
        private notas: Array<model.NotaAlPie>;

        /** Es la etiqueta que muestra la descripción del hecho */
        private descripcionHecho: string;

        /** Instancia unica de las notas de un hecho*/
        private static _instance: NotaHechoCampoCaptura = null;

        /** Template para agregar una opcion al listado de notas*/
        private templateOpcionLenguaje: string = "<option value=\"valorLenguaje\">descripcionLenguaje</option>";

        /** Singleton para el manejo unico de las notas de los hechos de captura*/
        public static getInstance(): NotaHechoCampoCaptura {
            if (NotaHechoCampoCaptura._instance === null) {
                NotaHechoCampoCaptura._instance = new NotaHechoCampoCaptura();
            }
            NotaHechoCampoCaptura._instance.ListaIdiomas = new Array<any>();

            for (var language in abaxXBRL.utils.LanguageISO639.ObtenerLenguajes()) {
                NotaHechoCampoCaptura._instance.ListaIdiomas.push({ idioma: language, etiqueta: abaxXBRL.utils.LanguageISO639.ObtenerNombreLenguaje(language) });
            }
            NotaHechoCampoCaptura._instance.ListaIdiomas.sort(function (a, b) {
                if (a.etiqueta < b.etiqueta) return -1;
                if (a.etiqueta > b.etiqueta) return 1;
                return 0;
            });

            return NotaHechoCampoCaptura._instance;
        }

        /** Muestra el detalle de las notas del hecho consultado
        * @param campoCaptura Identificador unico del hecho
        */
        public mostrarNotasHechoCampoCaptura(campoCaptura: CampoCaptura) {
            var self = this;
            this.idVentanaNotasPieHecho = utils.UUIDUtils.generarUUID();
            this.hecho = campoCaptura.obtenerHecho();
            this.pausarEventoBlur = false;

            this.notas = new Array<model.NotaAlPie>();
            this.descripcionHecho = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().describirHecho(this.hecho);

            if (this.hecho.NotasAlPie) {
                for (var lenguaje in this.hecho.NotasAlPie) {
                    for (var idNota in this.hecho.NotasAlPie[lenguaje]) {
                        this.notas.push(this.hecho.NotasAlPie[lenguaje][idNota]);
                    }
                }
            } else {
                this.hecho.NotasAlPie = {};
            }


            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idVentanaNotasPieHecho', valor: this.idVentanaNotasPieHecho });
            variablesPlantilla.push({ llave: 'descripcionHecho', valor: this.descripcionHecho });

            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-notas-hecho.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {

                    $('body').append(plantilla);

                    if (self.notas.length > 0) {
                        $('#mensajeHechoSinNotas').addClass('none');

                        for (var indiceNota in self.notas) {
                            self.mostrarNotaHechoCampoCaptura(self.notas[indiceNota], $("#notasHecho"));
                        }

                    }

                    $('#registrarNota').on('click', function () {

                        $('#mensajeHechoSinNotas').addClass('none');

                        var nota = new model.NotaAlPie();
                        nota.Idioma = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma.ClaveIdioma;
                        nota.Valor = "";

                        self.notas.unshift(nota);

                        if (!self.hecho.NotasAlPie.hasOwnProperty(AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma.ClaveIdioma)) {
                            self.hecho.NotasAlPie[AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma.ClaveIdioma] = new Array<model.NotaAlPie>();
                        }

                        self.hecho.NotasAlPie[AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().xbrlIdioma.ClaveIdioma].push(nota);
                        self.hecho.TieneNotasAlPie = true; 

                        self.mostrarNotaHechoCampoCaptura(self.notas[0], $("#notasHecho"));
                        AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                        plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();

                    });

                    $('#' + self.idVentanaNotasPieHecho).modal();

                    $('#' + self.idVentanaNotasPieHecho).on('hidden.bs.modal', function () {
                        $('#' + self.idVentanaNotasPieHecho).remove();
                        self.hecho.RequiereValidacion = true;
                        $('#' + campoCaptura.obtenerSettings().idPlugin).xbrlCampoCaptura();
                    });


                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de las notas de los hechos');
                });
        }

        /** 
        *   Muestra en la tabla de notas un renglo que corresponde a una nota del hecho 
        *   @param nota Nota que se desea desplegar y forma parte de un hecho
        *   @param elemento Elemento JQuery que se le asignara la plantilla
        */
        public mostrarNotaHechoCampoCaptura(nota: model.NotaAlPie, elemento: JQuery): void {

            var self = this;
            var idNota = utils.UUIDUtils.generarUUID();
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'opcionesIdiomas', valor: this.obtenerOpcionesLenguajes() });
            variablesPlantilla.push({ llave: 'idNota', valor: idNota });
            variablesPlantilla.push({ llave: 'valorSelect', valor: this.obtenerEtiquetaLenguaje(nota.Idioma) });
            variablesPlantilla.push({ llave: 'informacionNota', valor: nota.Valor });


            XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-notas-hecho-renglon.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {

                    elemento.append(plantilla);
                    $("#select_" + idNota).val(nota.Idioma);

                    $("#visorSelect_" + idNota).on('dblclick', function (e: JQueryMouseEventObject) {
                        XbrlPluginUtils.clearSelection();
                        $("#visorSelect_" + idNota).addClass('none');
                        $("#editorSelect_" + idNota).removeClass('none');
                        $("#select_" + idNota).focus();
                    });

                    $("#text_" + idNota).on('blur', function (e: JQueryMouseEventObject) {
                        var valorAnterior = nota.Valor.trim();
                        nota.Valor = this.value.trim();

                            if (valorAnterior != nota.Valor) {
                                AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                                plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
                            }

                            if (self.pausarEventoBlur) return;

                        $("#text_" + idNota).empty();
                        $("#text_" + idNota).append(nota.Valor);
                        });

                    $("#select_" + idNota).on('blur', function (e: JQueryMouseEventObject) {
                        $("#visorSelect_" + idNota).empty();
                        $("#visorSelect_" + idNota).append(self.obtenerEtiquetaLenguaje($("#select_" + idNota).val()));
                        $("#editorSelect_" + idNota).addClass('none');
                        $("#visorSelect_" + idNota).removeClass('none');

                        nota.Idioma = $("#select_" + idNota).val();

                    });




                    $("#eliminar_" + idNota).on('click', function () {

                        var si = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SI');
                        var no = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_NO');
                        var idNotaEliminar = idNota;
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ELIMINAR_NOTA'), {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_TITULO_ELIMINAR_NOTA'),
                            buttons: { si: true, no: false },
                            submit: function (e, v, m, f) {
                                if (v) {

                                    for (var indice in self.hecho.NotasAlPie[nota.Idioma]) {
                                        if (self.hecho.NotasAlPie[nota.Idioma][indice].Valor == nota.Valor) {
                                            self.hecho.NotasAlPie[nota.Idioma][indice] = null;
                                            break;
                                        }
                                    }

                                    var NotasAlPieFinal: { [idioma: string]: Array<model.NotaAlPie>; } = {};

                                    for (var idioma in self.hecho.NotasAlPie) {
                                        for (var notaEvaluar in self.hecho.NotasAlPie[idioma]) {
                                            if (self.hecho.NotasAlPie[idioma][notaEvaluar] != null) {
                                                if (!NotasAlPieFinal[idioma]) {
                                                    NotasAlPieFinal[idioma] = new Array<model.NotaAlPie>();
                                                }
                                                NotasAlPieFinal[idioma].push(self.hecho.NotasAlPie[idioma][notaEvaluar]);
                                            }
                                        }
                                    }
                                    self.hecho.NotasAlPie = NotasAlPieFinal;

                                    self.notas = new Array<model.NotaAlPie>();
                                    if (self.hecho.NotasAlPie) {
                                        for (var lenguajeNota in self.hecho.NotasAlPie) {
                                            for (var idNota in self.hecho.NotasAlPie[lenguajeNota]) {
                                                self.notas.push(self.hecho.NotasAlPie[lenguajeNota][idNota]);
                                            }
                                        }
                                    }

                                    $('#' + idNotaEliminar).empty();
                                    if (self.notas.length == 0) {
                                        self.hecho.TieneNotasAlPie = false;
                                        $('#mensajeHechoSinNotas').removeClass('none');
                                    } else {
                                        $('#mensajeHechoSinNotas').addClass('none');
                                    }
                                    AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                                    plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
                                }
                            }
                        });

                    });


                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de la una nota del hecho');
                });
        }

        /**
        * Obtiene los lenguajes que pueden dar de alta en las notas de un hecho
        */
        public obtenerOpcionesLenguajes(): string {
            var lenguajes = "";

            for (var indiceIdioma in this.ListaIdiomas) {
                lenguajes += this.templateOpcionLenguaje.replace(/valorLenguaje/gi, this.ListaIdiomas[indiceIdioma].idioma).replace(/descripcionLenguaje/gi, this.ListaIdiomas[indiceIdioma].etiqueta);
            }

            return lenguajes;

        }

        /** Obtiene la etiqueta del lenguaje en base al código 
        * @param codigo del lenguaje que se requiere la etiqueta
        */
        public obtenerEtiquetaLenguaje(codigo: string): string {
            return abaxXBRL.utils.LanguageISO639.ObtenerNombreLenguaje(codigo);
        }

    }


    /**
    * Implementación de una directiva para presentar el listado de errores del documento instancia
    *
    * @version 1.0
    */
    export class XbrlListadoErrores {

        /** El documento instancia del cual se están listando los errores */
        private documentoInstancia: model.DocumentoInstanciaXbrl;

        /** El objeto que contiene el resumen de los errores encontrados dentro del documento instancia XBRL */
        private operaciones: model.OperacionesCalculoDocumentoInstancia;

        /** el idioma en que se deberá presentar la etiqueta */
        private xbrlIdioma: string;

        /** Descripción del error de calculo*/
        private descripcionErrorCalculo: string;
        /** Cantidad de errores a mostrar en el listado **/
        private get MAX_ERRORES_A_MOSTRAR(): number { return 20; }
        /** Identificador del timeout que evalua si se debe procesar la lista de errores**/
        private idTimeOutEvalua: number; 
        /***
        * Bandera que indica si ya se inicializo el listado de errores.
        **/
        private iniciado: boolean;

        /**
        * Instancia única de la clase.
        **/
        private static $instance: XbrlListadoErrores;

        /**
         * Genera la descripción legible para un usuario de un error de cálculo del documento instancia XBRL
         * 
         * @param detalleOperacion el detalle de la operación de cálculo para cual se generará la descripción legible para el usuario.
         * @return la descripción legible para un usuario de un error de cálculo del documento instancia XBRL
         */
        public generarDescripcionErrorCalculo = function (detalleOperacion: model.DetalleOperacion): string {
            return this.documentoInstancia.describirHecho(this.documentoInstancia.obtenerHechoPorId(detalleOperacion.IdHecho));
        };

        /**
         * Genera la descripción legible para un usuario de un error de fórmula del documento instancia XBRL
         * 
         * @param detalleOperacion el detalle de la operación de la fórmula para cual se generará la descripción legible para el usuario.
         * @return la descripción legible para un usuario de un error de fórmula del documento instancia XBRL
         */
        public generarDescripcionErrorFormula = function (detalleOperacion: model.DetalleOperacion): string {
            var descripcionErrorFormula: string = detalleOperacion.Motivo;
            var descripcionVariable: string = null;

            var hecho = this.documentoInstancia.obtenerHechoPorId(detalleOperacion.IdHecho);

            if (hecho && hecho != null) {
                descripcionVariable = this.documentoInstancia.describirHecho(hecho);
            } /*else if (hecho && hecho != null) {
                        descripcionVariable = this.documentoInstancia.Taxonomia.obtenerEtiquetaDeConcepto(detalleOperacion.IdConcepto, model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, this.documentoInstancia.xbrlIdioma.ClaveIdioma);
                    }*/

            descripcionErrorFormula = descripcionErrorFormula.replace("{variable1}", descripcionVariable);

            return descripcionErrorFormula;
        };
        /**
         * Presenta el diálogo modal con el detalle de la operación de cálculo que contiene un error en el documento instancia XBRL.
         *
         * @param detalleOperacion el detalle de la operación de cálculo que será presentado en el diálogo modal al usuario.
         */
        public presentarDetalleCalculo(): void {

            var $self = jQuery(this);
            var detalle = DetalleOperacionCampoCaptura.getInstance();
            detalle.mostrarDetalleOperaciones($self.attr('id-hecho'));
        }
        /**
        * Manejador de errores de la clase.
        **/
        public onError(textStatus: any, errorThrown: any) {

            var pirnt = console ? console.error ? console.error : console.log ? console.log : undefined : undefined;

            if (pirnt) {
                if (textStatus) {
                    pirnt(textStatus)
                }
                var error = errorThrown ? errorThrown.stack ? errorThrown.stack : errorThrown : "Ocurrió un error a cargar la plantilla.";
                pirnt(error);
            }
        }

        

        /**
        * Manejador que se ejecuta cuando se tiene la plantilla para los item de error.
        **/
        private onrefrescaListadoErroresSucess(plantilla: JQuery) {
            var $self = this;
            var lista = $('#listaErroresValidacion');
            var errores = $self.operaciones.Errores;
            var advertencias = $self.operaciones.Advertencias;
            var textoIncidencias = $('xbrl\\:listado-errores #numIncidencias');
            var numIncidencias:number = (errores.length + advertencias.length);

            lista.find('.error-item').remove();
            textoIncidencias.text(numIncidencias.toString());

            if (numIncidencias == 0) {
                $('#listaErroresValidacion #ItemSucessListaErrores').show();
                return;
            }
            $('#listaErroresValidacion #ItemSucessListaErrores').hide();
            var opcionesAutonumeric = { aSign: '$', pSign: 'p', vMin: '-99999999999999.00', nBracket: '(,)' };

            for (var indexError: number = 0; indexError < errores.length; indexError++) {

                if (indexError > $self.MAX_ERRORES_A_MOSTRAR) {
                    break;
                }

                var error = errores[indexError];
                var template = plantilla.clone();
                template.attr('id-hecho', error.IdHecho);
                template.on('click', $self.presentarDetalleCalculo);
                if (!error.EsFormula && error.OperacionEjecutada) {
                    template.find('a:not(.error-tipo-operacion)').remove();

                    template.find('.valorError').text(error.Valor).autoNumeric(opcionesAutonumeric);
                    template.find('.valorCalculadoError').text(error.ValorCalculado).autoNumeric(opcionesAutonumeric);

                    var descripcion = $self.generarDescripcionErrorCalculo(error);
                    var texto = template.html();
                    texto = texto.replace("${descripcionErrorCalculo}", descripcion);
                    template.html(texto);
                    lista.append(template);
                } else {
                    if (!error.EsFormula && !error.OperacionEjecutada) {
                        template.find('a:not(.error-tipo-validacion)').remove();
                        var item = template.find('.error-tipo-validacion');
                        var texto = item.text();
                        texto = texto.replace("${errorMotivo}", error.Motivo);
                        item.text(texto);
                        lista.append(template);
                    } else {
                        if (error.EsFormula) {
                            template.find('a:not(.error-tipo-formula)').remove();
                            var descripcion = $self.generarDescripcionErrorFormula(error);
                            template.find('.error-tipo-formula').text(descripcion);
                            lista.append(template);
                        }
                    }
                }
            }

            for (var indexAdvertencia: number = 0; indexAdvertencia < advertencias.length; indexAdvertencia++) {

                if (indexAdvertencia > $self.MAX_ERRORES_A_MOSTRAR) {
                    break;
                }

                var advertencia = advertencias[indexAdvertencia];
                var template = plantilla.clone();
                template.find("#colorError").removeClass("text-danger");
                template.find("#colorError").addClass("text-warning");

                template.find("#iconoError").removeClass("fa-exclamation");
                template.find("#iconoError").addClass("fa-warning");

                template.attr('id-hecho', advertencia.IdHecho);
                template.on('click', $self.presentarDetalleCalculo);
                if (!advertencia.EsFormula && advertencia.OperacionEjecutada) {
                    template.find('a:not(.error-tipo-operacion)').remove();

                    template.find('.valorError').text(error.Valor).autoNumeric(opcionesAutonumeric);
                    template.find('.valorCalculadoError').text(error.ValorCalculado).autoNumeric(opcionesAutonumeric);

                    var descripcion = $self.generarDescripcionErrorCalculo(error);
                    var texto = template.html();
                    texto = texto.replace("${descripcionErrorCalculo}", descripcion);
                    template.html(texto);
                    lista.append(template);
                } else {
                    if (!advertencia.EsFormula && !advertencia.OperacionEjecutada) {
                        template.find('a:not(.error-tipo-validacion)').remove();
                        var item = template.find('.error-tipo-validacion');
                        var texto = item.text();
                        texto = texto.replace("${errorMotivo}", error.Motivo);
                        item.text(texto);
                        lista.append(template);
                    } else {
                        if (advertencia.EsFormula) {
                            template.find('a:not(.error-tipo-formula)').remove();
                            var descripcion = $self.generarDescripcionErrorFormula(advertencia);
                            template.find('.error-tipo-formula').text(descripcion);
                            lista.append(template);
                        }
                    }
                }
            }
        }

        /**
        * Refresca el contenido del listado de errores.
        **/
        public refrescaListadoErrores(): void {
            var $self = this;
            var urlTemplate = 'ts/jQuery/templates/template-xbrl-listado-errores-item.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            var onError = function (textStatus: any, errorThrown: any) { $self.onError(textStatus, errorThrown); };
            var onSucess = function (plantilla: JQuery) { $self.onrefrescaListadoErroresSucess(plantilla); };


            XbrlPluginUtils.cargarPlantillaYReemplazarVariables(urlTemplate, variablesPlantilla, onSucess, onError);
        }

        /**
        * Manejador que se ejecuta al cargar la plantilla del listado de  errores.
        **/
        private onCargarPlantillaListadoSucess(plantilla: JQuery) {
            var $self = this;
            var listadoErrores = $('xbrl\\:listado-errores');
            if (listadoErrores.length > 0) {
                listadoErrores.empty();
                listadoErrores.append(plantilla);
                $self.refrescaListadoErrores();
                $self.iniciado = true;
            }
        }
        /**
        * Elimina la instancia del servicio.
        **/
        public desechar(): void {
            var $self = this;
            $self.iniciado = false;
            XbrlListadoErrores.$instance = undefined;
        }

        /**
        * Inicializa los elementos de la clase.
        **/
        private init(): void {
            this.documentoInstancia = AngularJQueryBridge.getInstance().obtenerDocumentoInstancia();
            this.operaciones = model.OperacionesCalculoDocumentoInstancia.getInstance();
        }

        /**
        * Hace un llenado inicial del listado de errores.
        **/
        public inicializaListadoErrores(): void {
            var $self = this;
            $self.init();
            var urlTemplate = 'ts/jQuery/templates/template-xbrl-listado-errores.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            var onError = function (textStatus: any, errorThrown: any) { $self.onError(textStatus, errorThrown); };
            var onSucess = function (plantilla: JQuery) { $self.onCargarPlantillaListadoSucess(plantilla); };


            XbrlPluginUtils.cargarPlantillaYReemplazarVariables(urlTemplate, variablesPlantilla, onSucess, onError);
        }

        /**
        * Crea un hilo que refresca el listado de formulas.
        * Si el proceso ya ha sido solicitado se cancel la petición anteiror y se inicia la acutal.
        **/
        public reevaluaListadoErrores(): void {
            var $self = this;

            if (!$self.iniciado) {
                return;
            }

            if ($self.idTimeOutEvalua) {
                clearTimeout($self.idTimeOutEvalua);
            }
            var evaluar = function () {
                $self.refrescaListadoErrores();
            };
            $self.idTimeOutEvalua = setTimeout(evaluar, 330);
        }

        /**
        * Obtiene la instancia única de la clase.
        **/
        public static getInstance(): XbrlListadoErrores {

            if (!XbrlListadoErrores.$instance) {
                XbrlListadoErrores.$instance = new XbrlListadoErrores();
            }
            return XbrlListadoErrores.$instance;
        }

        /**
        * Constructor de la clase.
        **/
        constructor() {
            if (XbrlListadoErrores.$instance) {
                throw new Error("No es posible instanciar directamente esta claes por favor utilice el método estatico getInstance().");
            }
        }

    }
}