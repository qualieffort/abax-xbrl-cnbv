///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/autonumeric/autonumeric.d.ts" />
///<reference path="../scripts/typings/json/jquery.json.d.ts" />
///<reference path="../scripts/typings/bootstrap.datepicker/bootstrap.datepicker.d.ts" />
///<reference path="../scripts/typings/moment/moment.d.ts" />
///<reference path="../scripts/typings/livequery/livequery.d.ts" />
///<reference path="../scripts/typings/math/math.d.ts" />
///<reference path="../scripts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///<reference path="../scripts/typings/angular-strap/angular-strap.d.ts" />
///<reference path="../scripts/typings/toolbartip/jquery-toolbar.d.ts" />
///<reference path="modeloAbax.ts" />
///<reference path="serviciosAbax.ts" />


module abaxXBRL.directives {

    import services = abaxXBRL.services;
    import model = abaxXBRL.model;

    /**
     * Implementación de una directiva encargada de presentar una etiqueta de un concepto de acuerdo a su rol e idioma
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlEtiquetaConcepto {

        /**
         * Crea la definición de la directiva.
         * 
         * @return la definición de la directiva.
         */
        public static XbrlEtiquetaConceptoDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                require: ['xbrlEtiquetaConcepto', '?^xbrlFiltroBusqueda'],
                scope: {
                    xbrlIdConcepto: '@',
                    xbrlIdioma: '@',
                    xbrlRolEtiqueta: '@',
                    xbrlNivelIndentacion: '@',
                    xbrlStyle: '@'
                },
                templateUrl: 'ts/templates/template-xbrl-etiqueta-concepto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlEtiquetaConceptoController,
                link: function ($scope: IEtiquetaConceptoDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controllers: any) {

                    $scope.$on("$destroy", function () {
                        element.remove();
                    });

                    //Inicializamos a null los controladores
                    var etiquetaConceptoController: XbrlEtiquetaConceptoController = null;
                    var filtroBusquedaController: XbrlFiltroBusquedaController = null;
                    //Si se inyectaron controladores
                    if (controllers && controllers.length && controllers.length > 0) {
                        //Iteramos los controladores inyectados y asignamos a los controllers segun corresponda.
                        var index: number;
                        for (index = 0; index < controllers.length; index++) {
                            if (controllers[index] instanceof XbrlEtiquetaConceptoController) {
                                etiquetaConceptoController = controllers[index];
                                continue;
                            } else if (controllers[index] instanceof XbrlFiltroBusquedaController) {
                                filtroBusquedaController = controllers[index];
                                continue;
                            }
                        }
                    }
                    //Si tenemos el controller del campo captura
                    if (etiquetaConceptoController && etiquetaConceptoController != null) {
                        //Si tenemos el controller de la etiqueta de concepto entonces lo asignamos al controler de filtro de busqueda.
                        if (filtroBusquedaController && filtroBusquedaController != null) {

                            filtroBusquedaController.establecerIdConcepto($scope.xbrlIdConcepto);
                        }

                    }
                }
            }
        }
    }

    /**
     * Definición de la estructura del scope de la directica encargada de presentar un formato de captura al usuario
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IEtiquetaConceptoDirectiveScope extends ng.IScope {

        /** el identificador del concepto del cual se presentará la etiqueta */
        xbrlIdConcepto: string;

        /** el idioma en que se deberá presentar la etiqueta */
        xbrlIdioma: string;

        /** El rol de la etiqueta que se presentará */
        xbrlRolEtiqueta: string;

        /** El nivel de indentación con el que debe presentarse la etiqueta. */
        xbrlNivelIndentacion: number;

        /** La etiqueta que se presentará al usuario */
        etiquetaConcepto: string;

        /** El estilo css que debe aplicarse a la etiqueta */
        xbrlStyle: string;

        /** El documento instancia que contiene la etiqueta */
        documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;

        /** Bandera que muestra si tiene referencia el concepto de la taxonomia */
        tieneReferencias: boolean;

        /** Muestra en un dialogo el detalle de las referencias del concepto*/
        mostrarDetalleReferencias(): void;

        /** El concepto que contiene la etiqueta*/
        concepto: abaxXBRL.model.Concepto;

    }

    /**
     * Implementación de un controlador para presentar la etiqueta de un concepto de la taxonomía XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlEtiquetaConceptoController {

        /** el scope de la directiva que presenta la etiqueta de un concepto de la taxonomía XBRL */
        private $scope: IEtiquetaConceptoDirectiveScope;

        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;

        /**
         * Inicializa el controlador al asociarlo con el concepto correspondiente
         */
        private init(): void {

            var self = this;

            self.$scope.$watch('xbrlIdioma', function () {
                self.$scope.etiquetaConcepto = self.obtenerEtiquetaConcepto();
            });

            self.$scope.$watch('xbrlRolEtiqueta', function () {
                self.$scope.etiquetaConcepto = self.obtenerEtiquetaConcepto();
            });

            self.$scope.mostrarDetalleReferencias = function () {

                //this.abaxService.definicionPlantilla.obtenerEtiquetaParteReferencia();
                self.$scope.concepto = self.abaxService.getDocumentoInstancia().Taxonomia.obtenerConcepto(self.$scope.xbrlIdConcepto);


                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-detalle-referencia-concepto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: PresentarDetalleReferenciaConceptoController,
                    size: 'lg',
                    resolve: {
                        concepto: function () {
                            return self.$scope.concepto;
                        },
                        xbrlIdioma: function () {
                            return self.$scope.xbrlIdioma;
                        },
                        etiquetaConcepto: function () {
                            return self.$scope.etiquetaConcepto;
                        }
                    }
                });
            }

            self.$scope.etiquetaConcepto = self.obtenerEtiquetaConcepto();
            this.$scope.documentoInstancia = this.abaxService.getDocumentoInstancia();

            this.$scope.tieneReferencias = this.abaxService.getDocumentoInstancia().Taxonomia.tieneReferenciasConcepto(this.$scope.xbrlIdConcepto);

        }

        /**
         * Obtiene la etiqueta que deberá ser presentada al usuario.
         *
         * @return la etiqueta que deberá ser presentada al usuario.
         */
        obtenerEtiquetaConcepto(): string {

            var etiqueta: string = null;

            var idioma = this.$scope.xbrlIdioma;
            var rol = this.$scope.xbrlRolEtiqueta;
            var idConcepto = this.$scope.xbrlIdConcepto;

            if (!idConcepto || idConcepto == null) {
                etiqueta = '';
            } else {
                if (!idioma || idioma == null) {
                    idioma = abaxXBRL.model.ConstantesComunes.IDIOMA_DEFAULT;
                }
                if (!rol || rol == null) {
                    rol = abaxXBRL.model.ConstantesComunes.ROL_ETIQUETA_DEFAULT;
                }
                etiqueta = this.abaxService.getDocumentoInstancia().Taxonomia.obtenerEtiquetaDeConcepto(idConcepto, rol, idioma);

            }
            return etiqueta;
        }

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el backend de la aplicación
         * @param $modal el servicio para presentar diálogos modales de angular
         */
        constructor($scope: IEtiquetaConceptoDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$modal = $modal;
            this.init();
        }
    }
    XbrlEtiquetaConceptoController.$inject = ['$scope', 'abaxXBRLServices', '$modal'];



    /**
     * Define la estructura del Scope de la Directiva para mostrar el detalle referencia del concepto
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export interface IPresentarDetalleReferenciaConceptoScope extends ng.IScope {

        /** El concepto que contiene la etiqueta*/
        concepto: abaxXBRL.model.Concepto;

        /** La etiqueta que se presentará al usuario */
        etiquetaConcepto: string;

        /** el idioma en que se deberá presentar la etiqueta */
        xbrlIdioma: string;

        /** El índice del detalle de la referencia que se presenta en pantalla actualmente */
        indiceDetalleReferenciaActual: number;


        /**
         * Presenta la siguiente referencia asociado a un concepto.
         */
        presentarSiguienteReferencia(): void;

        /**
         * Presenta la anterior referencia asociado a un concepto.
         */
        presentarAnteriorReferencia(): void;

        /**
         * Cierra el diálogo que presenta el detalle del cálculo
         */
        cerrarDialogo(): void;

        /**
        * Definicion de la plantilla para mostrar las partes de las referencias
        */
        definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl;
    }

    /**
     * Implementación de un controlador para presentar el detalle de referencias del concepto.
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class PresentarDetalleReferenciaConceptoController {

        /** el scope del controlador */
        private $scope: IPresentarDetalleReferenciaConceptoScope;

        /** el servicio de negocio para comunicarse con el backend y ejecutar validaciones */
        private abaxService: services.AbaxXBRLServices;



        /**
         * Constructor de la clase PresentarDetalleReferenciaConceptoController
         *
         * @param $scope el scope del controlador
         * @param $modalInstance la instancia del diálogo modal
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         * @param xbrlIdioma Idioma en el que se visualiza el documento
         * @etiquetaConcepto Etiqueta que se le va a mostrar al usuario del concepto consultado
         */
        constructor($scope: IPresentarDetalleReferenciaConceptoScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, abaxXBRLServices: services.AbaxXBRLServices, concepto: abaxXBRL.model.Concepto, xbrlIdioma: string, etiquetaConcepto: string) {

            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$scope.definicionPlantilla = abaxXBRLServices.getDefinicionPlantilla();
            this.$scope.concepto = concepto;
            this.$scope.etiquetaConcepto = etiquetaConcepto;
            this.$scope.xbrlIdioma = xbrlIdioma;

            $scope.indiceDetalleReferenciaActual = 0;



            $scope.presentarAnteriorReferencia = function (): void {
                if ($scope.indiceDetalleReferenciaActual > 0) {
                    $scope.indiceDetalleReferenciaActual--;
                }
            };


            $scope.presentarSiguienteReferencia = function (): void {
                if (($scope.indiceDetalleReferenciaActual + 1) < $scope.concepto.Referencias.length) {
                    $scope.indiceDetalleReferenciaActual++;
                }
            };

            $scope.cerrarDialogo = function (): void {
                $modalInstance.close();
            };

        }

    }
    PresentarDetalleReferenciaConceptoController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'concepto', 'xbrlIdioma', 'etiquetaConcepto'];


    /**
     * Implementación de una directiva encargada de presentar un formato de captura para el usuario.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlContenedorFormato {

        /**
         * Crea la definición de la directiva.
         * 
         * @return la definición de la directiva.
         */
        public static XbrlContenedorFormatoDirective($timeout: ng.ITimeoutService, abaxXBRLServices: abaxXBRL.services.AbaxXBRLServices): ng.IDirective {
            return {
                restrict: 'E',
                replace: false,
                transclude: true,
                scope: {
                    xbrlRolUri: '@',
                    orientacion: '@',
                    xbrlOcultarTituloRol: '@',
                    modoVistaFormato: '@',
                },
                templateUrl: 'ts/templates/template-xbrl-contenedor-formato.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlContenedorFormatoController,
                link: function (scope, element) {
                    scope.$on("$destroy", function () {
                        element.remove();
                    });
                },
                compile: function compile(tElement: ng.IAugmentedJQuery, tAttrs: ng.IAttributes, transclude) {
                    return {
                        pre: function ($scope: Object, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {

                        },
                        post: function ($scope: Object, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
                            $timeout(function () {
                                plugins.AngularJQueryBridge.getInstance().establecerMapaElementosPorIdHecho({});

                                var tableSettings = new plugins.XbrlTablaExcelSettings();
                                tableSettings.estilos = plugins.XbrlTablaExcel.ESTILOS_POR_DEFECTO;
                                tableSettings.soloLectura = abaxXBRLServices.getDocumentoInstancia().BloquearCamposCaptura;
                                tableSettings.tabIndex = 1;
                                tableSettings.contenedorTextArea = $(plugins.XbrlTablaExcel.CONTENEDOR_CLIPBOARD_POR_DEFECTO);
                                tableSettings.onAfterPaste = plugins.XbrlPluginUtils.onAfterPaste;
                                tableSettings.onAfterRangePaste = plugins.XbrlPluginUtils.onAfterRangePaste;
                                tableSettings.onBeforeCopy = plugins.XbrlPluginUtils.onBeforeCopy;
                                tableSettings.onSpaceOrEnterKey = plugins.XbrlPluginUtils.onSpaceOrEnterKey;
                                element.find('table[xbrl\\:tabla-excel]').xbrlTablaExcel('init', tableSettings);
                                element.find('xbrl\\:campo-captura').xbrlCampoCaptura('init', { soloLectura: abaxXBRLServices.getDocumentoInstancia().BloquearCamposCaptura });
                                element.find('xbrl\\:etiqueta-concepto').xbrlEtiquetaConcepto();
                                shared.service.AbaxXBRLUtilsService.setDefaultTablaExcelSettings(tableSettings);
                            });

                            $('.scrollable').expire('#ultimoCampo');
                            $('.scrollable').livequery('#ultimoCampo', function () {
                                $timeout(function () {
                                    plugins.XbrlPluginUtils.ocultarLoaderFormatos();
                                });

                                $('.scrollable').expire('#ultimoCampo');
                            });
                        }
                    };
                }
            };
        }
    }
    XbrlContenedorFormato.XbrlContenedorFormatoDirective.$inject = ['$timeout', 'abaxXBRLServices'];

    /**
     * Implementación de un controlador para la directiva encargada de presentar el formato de captura al usuario.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlContenedorFormatoController {

        /** El scope de la directiva en el controlador */
        private $scope: IContenedorFormatoDirectiveScope;

        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            this.$scope.rol = this.abaxService.getDocumentoInstancia().obtenerRolPresentacion(this.$scope.xbrlRolUri);
            this.$scope.visualizarDocumentoSoloLectura = this.abaxService.getDocumentoInstancia().documentoSoloLectura;

        }

        /**
         * Constructor de la clase XbrlContenedorFormatoController
         * 
         * @param $scope el scope de la directiva
         * @param abaxXBRLServices el servicio de negocio para interactuar con el backend de la aplicación.
         */
        constructor($scope: IContenedorFormatoDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;

            $scope.esOrientacionLandscape = function (): boolean {
                return $scope.orientacion == 'landscape';
            }
            $scope.esOrientacionPortrait = function (): boolean {
                return $scope.orientacion == 'portrait';
            }
            $scope.ocultarTituloRol = function (): boolean {
                return $scope.xbrlOcultarTituloRol == 'true';
            }
            this.init();
        }
    }
    XbrlContenedorFormatoController.$inject = ['$scope', 'abaxXBRLServices'];

    /**
     * Definición de la estructura del scope de la directica encargada de presentar un formato de captura al usuario
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IContenedorFormatoDirectiveScope extends ng.IScope {

        /** El URI del rol que se presentará al usuario */
        xbrlRolUri: string;

        /** objeto con el rol de presentación */
        rol: abaxXBRL.model.RolPresentacion;

        /** La orientación con la que debe presentarse el formato */
        orientacion: string;

        /** Bandera que indica si se debe mostrar el nombre del rol al inicio del formulario */
        xbrlOcultarTituloRol: string;

        /**
         * Indica si la orientación del formato a presentar es landscape
         *
         * @return true si la orientación del formato es landscape. false en cualquier otro caso.
         */
        esOrientacionLandscape(): boolean;

        /**
         * Indica si la orientación del formato a presentar es landscape
         *
         * @return true si la orientación del formato es landscape. false en cualquier otro caso.
         */
        esOrientacionPortrait(): boolean;
        /**
        * Indica que no debe mostrarse el nombre del rol al inicio del formato.
        *
        * @return true si Se debe dibujar el titulo con el nombre del rol al inicio del forato.
        */
        ocultarTituloRol(): boolean;

        /**
        *Indica el modo en que se visualiza el formato expandido o normal
        */
        modoVistaFormato: string;

        /**
        * Indica si el formato solo se visualiza como visor
        */
        visualizarDocumentoSoloLectura: boolean;
    }

    /**
     * Implementación de una directiva la cual carga la plantilla apropiada para presentar un editor del documento instancia amigable al usuario.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlEditorFormato {

        public static newScope: ng.IScope;

        /**
         * Compila una plantilla cargada de manera dinámica
         *
         * @param data el objeto que contiene la plantilla
         * @param element el elemento donde se declara la directiva
         * @param $scope el scope de la directiva
         * @param $compile el servicio de compilación de angular.
         * @param $timeout el servicio de ejecución demorada de angular.
         */
        public static compilarPlantilla(data: any, element: ng.IAugmentedJQuery, $scope: IEditorFormatoDirectiveScope, $compile: ng.ICompileService, $timeout: ng.ITimeoutService): void {


            if (XbrlEditorFormato.newScope && XbrlEditorFormato.newScope != null) {
                XbrlEditorFormato.newScope.$destroy();

                XbrlEditorFormato.newScope = null;
            }
            XbrlEditorFormato.newScope = $scope.$new();

            var $plantilla = XbrlEditorFormato.evaluaElementosDescartarPlantilla($(data));
            var el = $compile($plantilla)(XbrlEditorFormato.newScope);

            element.empty().append(el);

        }

        /**
         * Evalua los elementos que debe descartar de la plantilla dada.
         * @param $plantilla Plantilla que se pretenede evaluar.
         * @return Plantilla evaluada, es el mismo objeto  que se recibe.
         */
        public static evaluaElementosDescartarPlantilla($plantilla: JQuery): JQuery {

            var $abaxService = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService();
            var conceptosDescartar = $abaxService.getDefinicionPlantilla().conceptosDescartar;
            if (conceptosDescartar) {

                var etiquetasConcepto: JQuery = $plantilla.find("xbrl\\:etiqueta-concepto");
                if (etiquetasConcepto.length > 0) {

                    etiquetasConcepto.each(function (indexElement: number, element: Element) {

                        var $element = $(element);
                        var idConcepto = $element.attr("xbrl:id-concepto");
                        if (conceptosDescartar[idConcepto]) {
                            $abaxService.eliminaContenedorTr($element);
                        }
                    });
                }
                var camposCaptura = $plantilla.find("xbrl\\:campo-captura");
                if (camposCaptura.length > 0) {

                    var hechosPorId = $abaxService.getDocumentoInstancia().HechosPorId;
                    camposCaptura.each(function (indexElement: number, element: Element) {

                        var $element = $(element);
                        var idHechoPlantilla = $element.attr("xbrl:id-hecho-plantilla");
                        var idConcepto: string = undefined;
                        if (idHechoPlantilla) {
                            var hechoPlantilla: model.HechoPlantilla = $abaxService.obtenDefinicionPlantillaPorId(idHechoPlantilla);
                            if (hechoPlantilla) {

                                idConcepto = hechoPlantilla.IdConcepto;
                            }
                        } else {

                            idConcepto = $element.attr("xbrl:id-concepto");
                        }
                        if (idConcepto) {

                            if (conceptosDescartar[idConcepto]) {
                                $abaxService.eliminaContenedorTr($element);
                            }
                        }
                    });
                }
                var elementosEvaluarDescartar = $plantilla.find("[xbrl\\:evalua-descartar]");
                if (elementosEvaluarDescartar.length > 0) {
                    elementosEvaluarDescartar.each(function (index: number, element: Element) {

                        var $elementoEvaluarDescartar = $(element);
                        var idEvaluarDescartar = $elementoEvaluarDescartar.attr("xbrl:evalua-descartar");
                        if (idEvaluarDescartar && conceptosDescartar[idEvaluarDescartar]) {
                            $elementoEvaluarDescartar.remove();
                        }
                    });
                }

                var ultimoCampo = $plantilla.find("xbrl\\:campo-captura:last");
                if (ultimoCampo.length > 0) {

                    ultimoCampo.attr("xbrl:ultimo", "true");
                } else {
                    shared.service.AbaxXBRLUtilsService.setTimeout(function () {
                        abaxXBRL.plugins.XbrlPluginUtils.ocultarLoaderFormatos();
                    }, 1000);
                }
            }

            return $plantilla;
        }

        /**
         * Obtiene la descripción de la directiva angular.
         *
         * @param $compile el servicio de compilación de angular.
         * @param $timeout el servicio de ejecución demorada de angular.
         * @param abaxXBRLServices el servicio requerido para interactuar con el backend.
         * @return la descripción de la directiva angular.
         */
        public static XbrlEditorFormatoDirective($compile: ng.ICompileService, $timeout: ng.ITimeoutService, abaxXBRLServices: abaxXBRL.services.AbaxXBRLServices): ng.IDirective {
            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                scope: {
                    xbrlRol: '=',
                    xbrlDocumentoSoloVisor: '='
                },
                template: '<div></div>',
                link: function ($scope: IEditorFormatoDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {

                    $scope.$on("$destroy", function () {
                        element.remove();
                    });

                    $scope.$watch('xbrlRol', function () {

                        if (!$scope.xbrlRol || $scope.xbrlRol == null || !$scope.xbrlRol.Uri || $scope.xbrlRol.Uri == null) return;

                        $scope.definicionPlantilla = abaxXBRLServices.getDefinicionPlantilla();
                        $scope.documentoInstancia = abaxXBRLServices.getDocumentoInstancia();
                        $scope.idUsuarioActivo = abaxXBRLServices.idUsuarioActivo;

                        if ($scope.xbrlDocumentoSoloVisor) {
                            $scope.documentoInstancia.PuedeEscribir = false;
                            $scope.documentoInstancia.BloquearCamposCaptura = true;
                            $scope.documentoInstancia.Bloqueado = false;
                            $scope.documentoInstancia.documentoSoloLectura = true;
                        }


                        plugins.XbrlListadoErrores.getInstance().inicializaListadoErrores();


                        var rutaPlantillas = 'ts/templates/taxonomias/';
                        var extensionPlantillas = '.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
                        var nombrePlantillaGenerica = 'plantilla_generica';
                        var rutaPlantilla: string = null;
                        var rutaDefinicionElementos: string = null;

                        if ($scope.definicionPlantilla && $scope.definicionPlantilla != null && !$scope.definicionPlantilla.IncapazDeterminarParametrosConfiguracion && !$scope.documentoInstancia.EsComparadorDocumento) {


                            rutaPlantilla = $scope.definicionPlantilla.obtenerUbicacionPlantillaDeRol($scope.xbrlRol.Uri);
                            rutaDefinicionElementos = $scope.definicionPlantilla.obtenerUbicacionDefinicionDeRol($scope.xbrlRol.Uri);

                            rutaPlantilla += ((rutaPlantilla.indexOf('?') > 0 ? '&' : '?') + "versionApp=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version);
                            rutaDefinicionElementos += ((rutaDefinicionElementos.indexOf('?') > 0 ? '&' : '?') + "versionApp=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version);

                            var existeDefinicion: boolean = false;
                            var contenidoDefinicion = '';

                            $.ajax({
                                type: 'GET',
                                url: rutaPlantilla,
                                success: function (data) {
                                    $.getScript(rutaDefinicionElementos).done(function () {
                                        var nombreClase = $scope.xbrlRol.Uri.replace(/:/g, '_').replace(/\//g, '_').replace(/\./g, '_').replace(/\-/g, '_');
                                        var definicionElementosPlantilla: abaxXBRL.model.DefinicionDeElementosPlantilla = eval('new abaxXBRL.templates.' + nombreClase + '()');
                                        $scope.definicionPlantilla.agregarDefinicionElementos(definicionElementosPlantilla);
                                    }).always(function () {
                                        XbrlEditorFormato.compilarPlantilla(data, element, $scope, $compile, $timeout);
                                    });
                                },
                                error: function () {
                                    rutaPlantilla = rutaPlantillas + nombrePlantillaGenerica + extensionPlantillas;
                                    rutaPlantilla += ((rutaPlantilla.indexOf('?') > 0 ? '&' : '?') + "versionApp=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version);
                                    $.ajax({
                                        type: 'GET',
                                        url: rutaPlantilla,
                                        success: function (data) {
                                            XbrlEditorFormato.compilarPlantilla(data, element, $scope, $compile, $timeout);
                                        }
                                    });
                                }
                            });
                        } else {
                            rutaPlantilla = rutaPlantillas + nombrePlantillaGenerica + extensionPlantillas;
                            rutaPlantilla += ((rutaPlantilla.indexOf('?') > 0 ? '&' : '?') + "versionApp=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version);
                            $.ajax({
                                type: 'GET',
                                url: rutaPlantilla,
                                success: function (data) {
                                    XbrlEditorFormato.compilarPlantilla(data, element, $scope, $compile, $timeout);
                                }
                            });
                        }

                    });
                },
                controller: XbrlEditorFormatoController
            };
        }
    }
    XbrlEditorFormato.XbrlEditorFormatoDirective.$inject = ['$compile', '$timeout', 'abaxXBRLServices'];

    /**
     * Implementación de un controlador para la directiva encargada de cargar la plantilla apropiada para que el usuario pueda editar un formato del documento instancia.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlEditorFormatoController {

        /** El scope de la directiva */
        private $scope: IEditorFormatoDirectiveScope;

        /** El servicio angular para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**
         * Inicializa el controller
         */
        private init(): void {

            var self = this;

            this.$scope.definicionPlantilla = this.abaxService.getDefinicionPlantilla();
            this.$scope.documentoInstancia = this.abaxService.getDocumentoInstancia();
            this.$scope.idUsuarioActivo = this.abaxService.idUsuarioActivo;

            this.$scope.onSpaceOrEnterKey = function (evento: JQueryKeyEventObject, x: number, y: number): void {

            };

            this.$scope.onAfterPaste = function (valorPegado: string, x: number, y: number): void {

            };

            this.$scope.onAfterRangePaste = function (valorPegado: string, x: number, y: number, ancho: number, alto: number): void {

                self.abaxService.getDocumentoInstancia().RequiereValidacion = true;
                self.abaxService.getDocumentoInstancia().RequiereValidacionFormulas = true;
                self.abaxService.getDocumentoInstancia().PendienteGuardar = true;
            };
        }

        /**
         * Constructor de la clase XbrlEditorFormatoController
         *
         * @param $scope el scope de la directiva
         * @param abaxXBRLServices el servicio angular para interactuar con el backend de la aplicación.
         */
        constructor($scope: IEditorFormatoDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;

            this.init();
        }
    }
    XbrlEditorFormatoController.$inject = ['$scope', 'abaxXBRLServices'];

    /**
     * Definición de la estructura del scope de la directiva que contiene el editor del documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IEditorFormatoDirectiveScope extends ng.IScope {

        /** El rol de presentación relacionado al rol de la taxonomía XBRL */
        xbrlRol: abaxXBRL.model.RolPresentacion;

        /** Indica si el documento se mostrara unicamente en visor sin la posibilidad de editar, copiar, pergar información*/
        xbrlDocumentoSoloVisor: boolean;

        /** La definición de la plantilla asociada al rol */
        definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl;

        /** El documento instancia que contiene al rol */
        documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;

        /* Identificador del usuario que realiza la operación */
        idUsuarioActivo: number;

        /** El método que se ejecutará cuando se presiona la tecla espacio o enter en una celda de la tabla */
        onSpaceOrEnterKey(evento: JQueryKeyEventObject, x: number, y: number): void;

        /** El método que se ejecutará después de que se pegue un valor en una celda de la tabla */
        onAfterPaste(valorPegado: string, x: number, y: number): void;

        /** El método que se ejecutará después de que se pegue un rango de valores en la tabla */
        onAfterRangePaste(valorPegado: string, x: number, y: number, ancho: number, alto: number): void;

        /** Los contextos que fueron definidos en la plantilla */
        contextosPlantillaPorId: { [idHecho: string]: model.Hecho };

        /** Las unidades que fueron definidas en la plantilla */
        unidadesPlantillaPorId: { [idUnidad: string]: model.Unidad };
    }

    export interface IEstilosTablaExcel {
        activeClass: string;
        rangoSeleccionado: string;
        rangoSeleccionadoL: string;
        rangoSeleccionadoR: string;
        rangoSeleccionadoT: string;
        rangoSeleccionadoB: string;
        rangoSeleccionadoLD: string;
        rangoSeleccionadoRD: string;
        rangoSeleccionadoTD: string;
        rangoSeleccionadoBD: string;
    }

    export interface IRangoSeleccionTablaExcel {
        x: number;
        y: number;
        ancho: number;
        alto: number;
    }


    /**
     * Define la estructura del Scope de la Directiva para el plugin autoNumeric
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IAutoNumericDirectiveScope extends ng.IScope {

        /** Indica si el elemento sobre el cual se registró esta directiva es un control input o no */
        esControlInput: boolean;

        /** Contiene las opciones que serán pasadas al plugin autoNumeric */
        opcionesAutoNumeric: any;

        /** La expresión que deberá observarse sobre el modelo */
        expresion: string;

        /** El objeto del modelo que deberá observarse por cambios para los campos que no son de captura */
        modelo: any;
    }

    /**
     * Define la estructura de los atributos de la directiva para el plugin autoNumeric
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IAutoNumericDirectiveAttributes extends ng.IAttributes {

        /** Contiene la expresión del modelo a observar */
        ngModel: string;

        /** Contiene la expresión del modelo a observar para elementos no input */
        expresion: string;
    }

    /**
     * Implementación de una directiva para presentar un botón el cual permita saber el estado general de la validación de un documento instancia.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlBotonEstadoValidacion {

        /**
         * Crea la definción de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlBotonEstadoValidacionDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                templateUrl: 'ts/templates/template-xbrl-boton-estado-validacion.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                link: function (scope, element) {
                    scope.$on("$destroy", function () {
                        element.remove();
                    });
                }
            };
        }
    }

    /**
     * Define la estructura de los atributos de la directiva para hacer "brillar" un elemento
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IXbrlBlinkDirectiveAttributes extends ng.IAttributes {

        /** Contiene la expresión del modelo a observar */
        expresion: string;
    }

    /**
     * Define la estructura del Scope de la Directiva para hacer "brillar" un elemento
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IXbrlBlinkDirectiveScope extends ng.IScope {

        /** La expresión que deberá observarse sobre el modelo */
        expresion: string;

        /** El objeto del modelo que deberá observarse por cambios */
        modelo: any;
    }

    /**
     * Implementación de una directiva para hacer que "brille" un elemento en pantalla de acuerdo al cambio de estado de una propiedad en el scope
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlBlink {

        /**
         * Ejecuta una animación que simula que el elemento indicado como parámetro "brilla".
         *
         * @param element el elemento sobre el cual se realizará la animación.
         */
        public static blinkElement(element: ng.IAugmentedJQuery): void {
            element.each(function (i: number) {
                var img = $(this);
                img.data('count', 1);
                if (img.data('interval')) {
                    clearInterval(img.data('interval'));
                }
                img.data('interval', setInterval(function () {
                    img.animate({ opacity: .3 }, 400, function () {
                        img.animate({ opacity: 1 }, 200);
                    });
                    if (img.data('count') >= 3) {
                        clearInterval(img.data('interval'));
                    }
                    img.data('count', img.data('count') + 1);
                }, 1000));
            });
        }

        /**
         * Crea la definción de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlBlinkDirective(): ng.IDirective {
            var options = {};
            return {
                require: '?ngModel',
                restrict: 'A',
                replace: true,
                scope: {
                    expresion: '@',
                    modelo: '='
                },
                link: function ($scope: IXbrlBlinkDirectiveScope, element: ng.IAugmentedJQuery, attrs: IXbrlBlinkDirectiveAttributes) {

                    $scope.$on("$destroy", function () {
                        element.remove();
                    });

                    $scope.$watch(attrs.expresion, function (newValue: boolean, oldValue: boolean, scope: IXbrlBlinkDirectiveScope): void {
                        if (newValue != oldValue) {
                            XbrlBlink.blinkElement(element);
                        }
                    });

                }
            }
        }
    }


    /**
     * Implementación de una directiva para presentar el listado de errores del documento instancia
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlListadoErrores {

        /**
         * Crea la definción de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlListadoErroresDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                scope: {
                    documentoInstancia: '=',
                    operaciones: '=',
                    xbrlIdioma: '@'
                },
                templateUrl: 'ts/templates/template-xbrl-listado-errores.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlListadoErroresController,
                link: function (scope, element) {
                    scope.$on("$destroy", function () {
                        element.remove();
                    });
                }
            };
        }
    }


    /**
     * Define la estructura del Scope de la Directiva para la edición / visualización de datos de tipo cadena
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IXbrlListadoErroresDirectiveScope extends ng.IScope {

        /** El documento instancia del cual se están listando los errores */
        documentoInstancia: model.DocumentoInstanciaXbrl;

        /** El objeto que contiene el resumen de los errores encontrados dentro del documento instancia XBRL */
        operaciones: model.OperacionesCalculoDocumentoInstancia;

        /**
         * Genera la descripción legible para un usuario de un error de cálculo del documento instancia XBRL
         * 
         * @param detalleOperacion el detalle de la operación de cálculo para cual se generará la descripción legible para el usuario.
         * @return la descripción legible para un usuario de un error de cálculo del documento instancia XBRL
         */
        generarDescripcionErrorCalculo(detalleOperacion: model.DetalleOperacion): string;

        /**
         * Genera la descripción legible para un usuario de un error de fórmula del documento instancia XBRL
         * 
         * @param detalleOperacion el detalle de la operación de la fórmula para cual se generará la descripción legible para el usuario.
         * @return la descripción legible para un usuario de un error de fórmula del documento instancia XBRL
         */
        generarDescripcionErrorFormula(detalleOperacion: model.DetalleOperacion): string;

        /**
         * Presenta el diálogo modal con el detalle de la operación de cálculo que contiene un error en el documento instancia XBRL.
         *
         * @param detalleOperacion el detalle de la operación de cálculo que será presentado en el diálogo modal al usuario.
         */
        presentarDetalleCalculo(detalleOperacion: model.DetalleOperacion): void;

        /** el idioma en que se deberá presentar la etiqueta */
        xbrlIdioma: string;

        /** Descripción del error de calculo*/
        descripcionErrorCalculo: string;

    }

    /**
     * Implementación de un controlador para presentar el listado de errores de un documento instancia XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlListadoErroresController {

        /** el scope de la directiva que presenta el listado de errores del documento instancia XBRL */
        private $scope: IXbrlListadoErroresDirectiveScope;

        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;

        /**
         * Inicializa el controlador al asociarlo con el listado de errores correspondiente
         */
        private init(): void {

            var self = this;

            this.$scope.generarDescripcionErrorCalculo = function (detalleOperacion: model.DetalleOperacion): string {
                return self.$scope.documentoInstancia.describirHecho(self.$scope.documentoInstancia.obtenerHechoPorId(detalleOperacion.IdHecho));
            };

            this.$scope.generarDescripcionErrorFormula = function (detalleOperacion: model.DetalleOperacion): string {
                var descripcionErrorFormula: string = detalleOperacion.Motivo;
                var descripcionVariable: string = null;

                var hecho = self.$scope.documentoInstancia.obtenerHechoPorId(detalleOperacion.IdHecho);

                if (hecho && hecho != null) {
                    descripcionVariable = this.documentoInstancia.describirHecho(hecho);
                } /*else if (hecho && hecho != null) {
                    descripcionVariable = this.documentoInstancia.Taxonomia.obtenerEtiquetaDeConcepto(detalleOperacion.IdConcepto, model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, this.documentoInstancia.xbrlIdioma.ClaveIdioma);
                }*/

                descripcionErrorFormula = descripcionErrorFormula.replace("{variable1}", descripcionVariable);

                return descripcionErrorFormula;
            };


        }

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param $modal el servicio para presentar diálogos modales de angular
         */
        constructor($scope: IXbrlListadoErroresDirectiveScope, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.$modal = $modal;
            this.init();
        }
    }
    XbrlListadoErroresController.$inject = ['$scope', '$modal'];

    export interface IXbrlFiltroBusquedaDirectiveScope extends ng.IScope {

        /** la expresión del modelo que se observará para ver si se cumple con el filtro de búsqueda o no. */
        xbrlFiltro: string;

        /** el identificador del concepto del cual se presentará la etiqueta */
        xbrlIdConcepto: string;

        /** el idioma en que se deberá presentar la etiqueta */
        xbrlIdioma: string;

        /** El rol de la etiqueta que se presentará */
        xbrlRolEtiqueta: string;

        /** Indica si el renglon es visible */
        visible: boolean;

        /** Valor actual de la etiqueta para el cocepto indeicado**/
        xbrlEtiquetaConcepto: string;

        /** Busca la etiqueta para el concepto, nombre y rol indicados**/
        obtenEtiquetaConcepto(): string;

    }


    /**
     * Implementación de una directiva para presentar un filtro de búsqueda de elementos dentro del documento instancia.
     *
     * @author Oscar Ernesto Loyola.
     * @version 1.0
     */
    export class XbrlFiltroBusqueda {

        /**
         * Crea la definición de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlFiltroBusquedaDirective(): ng.IDirective {

            return {
                restrict: 'A',
                replace: true,
                transclude: true,
                scope: {
                    xbrlIdConcepto: '@',
                    xbrlIdioma: '@',
                    xbrlRolEtiqueta: '@',
                    xbrlFiltro: '=',
                },
                templateUrl: 'ts/templates/template-xbrl-tr-filtro-busqueda.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlFiltroBusquedaController,
                link: function (scope, element) {
                    scope.$on("$destroy", function () {
                        element.remove();
                    });
                }
            };
        }
    }


    /**Controlador de la directiva de filtro busqueda. **/
    export class XbrlFiltroBusquedaController {

        /** el scope de la directiva que presenta la etiqueta de un concepto de la taxonomía XBRL */
        private $scope: IXbrlFiltroBusquedaDirectiveScope;
        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;
        /** Bandera que indica si ya se intento asignar el valor para la etiqueta del concepto*/
        private etiquetaAsignada: boolean;

        /**Asigna el controlador del campo de captura. **/
        public establecerIdConcepto(idConcepto: string): void {

            this.$scope.xbrlIdConcepto = idConcepto;
        }
        /**
        * Asigna el XbrlIdioma del filtro de busqueda.
        * @param xbrlIdioma  Identificador del idimoa que será asignado.
        **/
        public establecerIdIdioma(xbrlIdioma: string): void {

            this.$scope.xbrlIdioma = xbrlIdioma;
        }

        /**
         * Inicializa el controlador al asociarlo con el concepto correspondiente
         */
        private init(): void {

            var self = this;

            self.$scope.$watch('xbrlFiltro', function () {
                self.$scope.visible = !self.ocultarPorFiltroBusqueda(self.$scope.xbrlFiltro);
            });

            self.$scope.$watch('xbrlIdioma', function () {

                self.$scope.xbrlEtiquetaConcepto = self.$scope.obtenEtiquetaConcepto();
                self.$scope.xbrlFiltro = "";
                self.$scope.visible = !self.ocultarPorFiltroBusqueda(self.$scope.xbrlFiltro);
            });

            self.$scope.obtenEtiquetaConcepto = function (): string {

                var etiqueta: string = null;

                var idioma = self.$scope.xbrlIdioma;
                var rol = self.$scope.xbrlRolEtiqueta;
                var idConcepto = self.$scope.xbrlIdConcepto;

                if (!idConcepto || idConcepto == null) {
                    etiqueta = '';
                } else {
                    if (!idioma || idioma == null) {
                        idioma = abaxXBRL.model.ConstantesComunes.IDIOMA_DEFAULT;
                    }
                    if (!rol || rol == null) {
                        rol = abaxXBRL.model.ConstantesComunes.ROL_ETIQUETA_DEFAULT;
                    }
                    etiqueta = self.abaxService.getDocumentoInstancia().Taxonomia.obtenerEtiquetaDeConcepto(idConcepto, rol, idioma);
                }


                return etiqueta;
            };

        }
        /** 
         * Metodo que indica si se debe de ocultar el contenido del elemento en base al valor del filtro de busqueda.
         *
         * @param filtro el filto que deberá ser consultado.
         * @return true si debe ocultarse el renglón. false en cualquier otro caso.
         */
        private ocultarPorFiltroBusqueda(filtro: string): boolean {

            //Si no se ha asignado un fitro.
            if (!filtro || filtro == null) {
                return false;
            }
            //Validamos si el filtro no viene vacio.
            filtro = filtro.trim();
            if (filtro.length == 0) {
                return false;
            }
            //Si no se ha asignado al etiqueta.
            if (!this.etiquetaAsignada) {
                //Intentamos obtenerla para los valores dados.
                this.$scope.xbrlEtiquetaConcepto = this.$scope.obtenEtiquetaConcepto();
            }
            var textoEtiqueta: string = this.$scope.xbrlEtiquetaConcepto;
            //Si no fue posible obtener una etiqueta retornamos false.
            if (!textoEtiqueta || textoEtiqueta == null || textoEtiqueta.length == 0) {
                var idioma = this.$scope.xbrlIdioma;
                var rol = this.$scope.xbrlRolEtiqueta;
                var idConcepto = this.$scope.xbrlIdConcepto;
                return false;
            } else {
                this.etiquetaAsignada = true;
            }
            //Validamos si la etiqueta contiene el flitro
            var contieneFiltro: boolean = textoEtiqueta.toLowerCase().indexOf(filtro.toLocaleLowerCase()) != -1
            //Si la etiqueta y el filtro tienen valor y la etiqueta no tiene el filtro se oculta.
            return !contieneFiltro;
        }

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el backend de la aplicación
         */
        constructor($scope: IXbrlFiltroBusquedaDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.init();
        }
    }
    XbrlFiltroBusquedaController.$inject = ['$scope', 'abaxXBRLServices'];

    /**
     * Implementación de un filtro el cual genera un arreglo de n posiciones.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Rango {

        /**
         * Crea la definición del filtro a ser creado.
         *
         * @return la definición del filtro a ser creado.
         */
        public static RangoFilter(): Function {
            return (valor: string, rango: number) => {
                var rangoNum = Number(rango);
                if (isNaN(rangoNum)) {
                    rangoNum = 1;
                }
                var array = new Array<any>();
                for (var i = 0; i < rangoNum; ++i) {
                    array.push(i);
                }
                return array;
            };
        }
    }
    Rango.$inject = ['$filter'];
    /** Boton para todos los campos de captura. **/
    export class XbrlBotonCampoCaptura {

        /**
         * Crea la definición de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlBotonCampoCapturaDirective(): ng.IDirective {

            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                templateUrl: 'ts/templates/template-xbrl-boton-campo-captura.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                require: '^xbrlCampoCapturaController'
            };
        }
    }
    /**Directiva para el despliegue de un tooltip sobre un  elemento dado **/
    export class XbrlToolbarTip {

        /**
         * Crea la definición de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlToolbarTipDirective(): ng.IDirective {

            return {
                restrict: 'A',
                scope: {
                    xbrlToolbarContentId: '@',
                    xbrlToolbarPosition: '@',
                    xbrlToolbarHideOnclic: '=',
                },
                require: '?xbrlToolbarTipContent',
                link: function ($scope: IXbrlToolTipScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controllers: any) {
                    $scope.$on("$destroy", function () {
                        element.remove();
                    });

                    $scope.$watch('xbrlToolbarContentId', function () {
                        element.toolbar({
                            content: '#' + $scope.xbrlToolbarContentId,
                            position: $scope.xbrlToolbarPosition,
                            hideOnClick: ($scope.xbrlToolbarHideOnclic == true ? true : false),
                            zIndex: 930
                        })
                    });
                }
            }
        }


        /**
         * Crea la definición de la directiva para el contenido del toolbar.
         *
         * @return la definición de la directiva.
         */
        public static XbrlToolbarTipContentDirective(): ng.IDirective {

            return {
                restrict: 'A',
                link: function ($scope: IXbrlToolTipScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controllers: any) {
                    $scope.$on("$destroy", function () {
                        element.remove();
                    });
                }
            }
        }

    }

    /**Define el contrato de los elementos visibles el en tooltip **/
    export interface IXbrlToolTipScope extends ng.IScope {

        /** Identificador de la etiqueta que contiene la definición de los elementos del tooltip. **/
        xbrlToolbarContentId: string;

        /** 
        * Posición de la barra de herramientas.
        * Los valores posibles son:
        * - top 
        * - bottom
        * - left
        * - right
        **/
        xbrlToolbarPosition: string;

        /** Indica si la barra de herramientas debe de ocultarse cuando se de clic sobre cualquier otro elemento de la página **/
        xbrlToolbarHideOnclic: boolean;
    }


    /**
     * Implementación de una directiva para presentar el listado de notas del documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlNotaHecho {

        /**
         * Crea la definción de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlNotaHechoDirective(): ng.IDirective {

            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                scope: {
                    xbrlHecho: '=',
                    xbrlSoloLectura: '='
                },
                templateUrl: 'ts/templates/template-xbrl-mostrar-nota-hecho.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlMostrarNotaHechoController,
                link: function (scope, element) {
                    scope.$on("$destroy", function () {
                        element.remove();
                    });
                }
            };
        }
    }

    /**
     * Define la estructura del Scope de la Directiva para la edición / visualización de las notas de los hechos del documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export interface IXbrlNotaHechoDirectiveScope extends ng.IScope {

        /** Hecho que se desea visualizar las notas al pie */
        xbrlHecho: model.Hecho;

        /** Es la etiqueta que muestra la descripción del hecho */
        descripcionHecho: string;

        /** Valor que identifica si el idioma se esta editando*/
        idiomaEditando: boolean;

        /** Notas al pie de los hechos*/
        notas: Array<model.NotaAlPie>;

        /** Valida el estado del bloque te texto para crear el editor en el caso que no exista */
        validarEstadoBloqueTexto(indiceNota: number): void;

        /** Valida si el campo seleccionado es el idioma*/
        validarEstadoFecha(indiceNota: number): void;

        /** Indica si el componente está en modo de edición o de visualización */
        editando: boolean;

        /** metodo que nos ayuda a obtener la cadena en html*/
        toTrustedHTML(textoHtml): string;


        /** Registra una nota al pie*/
        registrarNotaPie(): void;

        /** Nota que se puede registrar en la forma de notas al pie*/
        notaRegistro: string;

        /** Arreglo de opciones del listado de lenguajes que se va a presentar en la directiva */
        ListaIdiomas: Array<any>;

        /** Obtiene la etiqueta del lenguaje en base al código */
        obtenerEtiquetaLenguaje(codigo: string): string;

        /** Elimina la nota del pie especificada*/
        eliminarNotaPie(nota: model.NotaAlPie): void;

        /** Cambia el valor de la nota*/
        manejarOnChange(): void;

        /** Cambia es estatus en que se encuentra el campo de texto a solo lectura*/
        manejarBlur(indiceNota: number): void;
        /**
         * Cierra el diálogo que presenta el detalle del cálculo
         */
        cerrarDialogo(): void;

        /** Bandera que indica si la directiva es de solo lectura*/
        xbrlSoloLectura: boolean;
    }

    /**
     * Define la estructura del Scope de la Directiva para la edición / visualización de las notas de los hechos del documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export interface IXbrlMostrarNotaHechoDirectiveScope extends ng.IScope {
        /** Hecho que se desea visualizar las notas al pie */
        xbrlHecho: model.Hecho;

        /** Muestra las notas al pie*/
        mostrarNotasPie(): void;

        /** Indica si la directiva sera solo de lectura*/
        xbrlSoloLectura: boolean;
    }

    /**
     * Implementación de un controlador para la visualización de las nota de los tipos de datos
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlMostrarNotaHechoController {

        /** el scope de la directa para la edición / visualización de las notas de los hechos del documento instancia */
        private $scope: IXbrlMostrarNotaHechoDirectiveScope;

        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;



        /**
         * Inicializa el controlador al asociarlo con el hecho correspondiente
         */
        private init(): void {

            var self = this;

            this.$scope.mostrarNotasPie = function () {

                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-notas-hecho.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    //placement: 'left',
                    size: 'lg',
                    windowClass: 'ng-aside horizontal left',
                    resolve: {
                        xbrlHecho: function () {
                            return self.$scope.xbrlHecho;
                        },
                        xbrlSoloLectura: function () { return self.$scope.xbrlSoloLectura; }
                    },
                    controller: XbrlNotaHechoController
                });


            };

        }

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador         
         * @param $modal Ventana modal que indique que se muestre hacia la izquierda o derecha un template
         */
        constructor($scope: IXbrlMostrarNotaHechoDirectiveScope, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.$modal = $modal;
            this.init();
        }
    }
    XbrlMostrarNotaHechoController.$inject = ['$scope', '$modal'];


    /**
     * Implementación de un controlador para la edición / visualización de las notas de los hechos del documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlNotaHechoController {

        /** el scope de la directa para la edición / visualización de las notas de los hechos del documento instancia */
        private $scope: IXbrlNotaHechoDirectiveScope;

        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** Servicio que permite integrar contenido en html*/
        private $sce: ng.ISCEService

        /** Servicio para manejar la instancia del modal enviada*/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;


        /**
         * Inicializa el controlador al asociarlo con el hecho correspondiente
         */
        private init(): void {

            var self = this;
            this.$scope.notaRegistro = "";
            this.$scope.ListaIdiomas = new Array<any>();

            for (var language in abaxXBRL.utils.LanguageISO639.ObtenerLenguajes()) {
                this.$scope.ListaIdiomas.push({ idioma: language, etiqueta: abaxXBRL.utils.LanguageISO639.ObtenerNombreLenguaje(language) });
            }

            self.$scope.notas = new Array<model.NotaAlPie>();
            self.$scope.descripcionHecho = self.abaxService.getDocumentoInstancia().describirHecho(self.$scope.xbrlHecho);

            if (self.$scope.xbrlHecho.NotasAlPie) {
                for (var lenguaje in self.$scope.xbrlHecho.NotasAlPie) {
                    for (var idNota in self.$scope.xbrlHecho.NotasAlPie[lenguaje]) {
                        self.$scope.notas.push(self.$scope.xbrlHecho.NotasAlPie[lenguaje][idNota]);
                    }
                }
            } else {
                self.$scope.xbrlHecho.NotasAlPie = {};
            }


            this.$scope.validarEstadoBloqueTexto = function (indiceNota: number): void {
                if (!self.$scope.xbrlSoloLectura) {
                    self.$scope.notas[indiceNota].NotaEditando = true;
                }
            };

            this.$scope.validarEstadoFecha = function (indiceNota: number): void {
                if (!self.$scope.xbrlSoloLectura) {
                    self.$scope.notas[indiceNota].NotaEditando = true;
                    self.$scope.idiomaEditando = true;
                }
            };

            this.$scope.toTrustedHTML = function (textoHtml) {
                return self.$sce.trustAsHtml(textoHtml);
            };

            this.$scope.registrarNotaPie = function () {
                var nota = new model.NotaAlPie();
                nota.Idioma = self.abaxService.getDocumentoInstancia().xbrlIdioma.ClaveIdioma;
                nota.Valor = "";

                self.$scope.notas.unshift(nota);

                if (!self.$scope.xbrlHecho.NotasAlPie.hasOwnProperty(self.abaxService.getDocumentoInstancia().xbrlIdioma.ClaveIdioma)) {
                    self.$scope.xbrlHecho.NotasAlPie[self.abaxService.getDocumentoInstancia().xbrlIdioma.ClaveIdioma] = new Array<model.NotaAlPie>();
                }

                self.$scope.xbrlHecho.NotasAlPie[self.abaxService.getDocumentoInstancia().xbrlIdioma.ClaveIdioma].push(nota);
                self.$scope.xbrlHecho.TieneNotasAlPie = true;

            }

            this.$scope.manejarBlur = function (indiceNota: number): void {
                self.$scope.notas[indiceNota].NotaEditando = false;
                self.$scope.idiomaEditando = false;
                self.abaxService.getDocumentoInstancia().PendienteGuardar = true;
            };


            this.$scope.obtenerEtiquetaLenguaje = function (codigo): string {
                return abaxXBRL.utils.LanguageISO639.ObtenerNombreLenguaje(codigo);
            };


            this.$scope.manejarOnChange = function (): void {

                self.$scope.xbrlHecho.NotasAlPie = {};

                for (var indice in self.$scope.notas) {
                    var nota = self.$scope.notas[indice];

                    if (!self.$scope.xbrlHecho.NotasAlPie.hasOwnProperty(nota.Idioma)) {
                        self.$scope.xbrlHecho.NotasAlPie[nota.Idioma] = new Array<model.NotaAlPie>();
                    }
                    self.$scope.xbrlHecho.NotasAlPie[nota.Idioma].push(nota);
                }
            };

            this.$scope.cerrarDialogo = function (): void {
                self.$modalInstance.close();
            };

            this.$scope.eliminarNotaPie = function (nota) {

                var si = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SI');
                var no = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_NO');

                $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ELIMINAR_NOTA'), {
                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_TITULO_ELIMINAR_NOTA'),
                    buttons: { si: true, no: false },
                    submit: function (e, v, m, f) {
                        if (v) {
                            var scope = self.$scope;
                            scope.$apply(function () {

                                for (var indice in self.$scope.xbrlHecho.NotasAlPie[nota.Idioma]) {
                                    if (self.$scope.xbrlHecho.NotasAlPie[nota.Idioma][indice].Valor == nota.Valor) {
                                        self.$scope.xbrlHecho.NotasAlPie[nota.Idioma][indice] = null;
                                        break;
                                    }
                                }

                                var NotasAlPieFinal: { [idioma: string]: Array<model.NotaAlPie>; } = {};

                                for (var idioma in self.$scope.xbrlHecho.NotasAlPie) {
                                    for (var notaEvaluar in self.$scope.xbrlHecho.NotasAlPie[idioma]) {
                                        if (self.$scope.xbrlHecho.NotasAlPie[idioma][notaEvaluar] != null) {
                                            if (!NotasAlPieFinal[idioma]) {
                                                NotasAlPieFinal[idioma] = new Array<model.NotaAlPie>();
                                            }
                                            NotasAlPieFinal[idioma].push(self.$scope.xbrlHecho.NotasAlPie[idioma][notaEvaluar]);
                                        }
                                    }
                                }
                                self.$scope.xbrlHecho.NotasAlPie = NotasAlPieFinal;

                                self.$scope.notas = new Array<model.NotaAlPie>();
                                if (self.$scope.xbrlHecho.NotasAlPie) {
                                    for (var lenguajeNota in self.$scope.xbrlHecho.NotasAlPie) {
                                        for (var idNota in self.$scope.xbrlHecho.NotasAlPie[lenguajeNota]) {
                                            self.$scope.notas.push(self.$scope.xbrlHecho.NotasAlPie[lenguajeNota][idNota]);
                                        }
                                    }
                                }

                                if (self.$scope.notas.length == 0) {
                                    self.$scope.xbrlHecho.TieneNotasAlPie = false;
                                }

                            });
                        }
                    }
                });
            }

        }

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el backend de la aplicación
         * @param $sce Servicio para permiti agregar contenido en html
         * @param $modalInstance instancia generada por la ventana modal de visualizacion de notas del hecho
         * @param  xbrlSoloLectura indica si la directiva sera de solo lectura
         */
        constructor($scope: IXbrlNotaHechoDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices, $sce: ng.ISCEService, xbrlHecho: model.Hecho, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, xbrlSoloLectura: boolean) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$sce = $sce;
            this.$modalInstance = $modalInstance;
            this.$scope.xbrlSoloLectura = xbrlSoloLectura;

            if (xbrlHecho) {
                this.$scope.xbrlHecho = xbrlHecho;
            }

            this.init();
        }
    }
    XbrlNotaHechoController.$inject = ['$scope', 'abaxXBRLServices', '$sce', 'xbrlHecho', '$modalInstance', 'xbrlSoloLectura'];


    /**
    * Define la estructura del Scope de la Directiva para la edición / visualización de las unidades del documento instancia
    *
    * @author Luis Angel Morales Gonzalez
    * @version 1.0
    */
    export interface IXbrlUnidadDocumentoDirectiveScope extends ng.IScope {


        /** Las unidades del documento instancia indexadas por su identificador */
        UnidadesDocumentoInstancia: { [id: string]: model.Unidad };

        /** Cierra el diálogo que presenta el listado de unidades del documento instancia */
        cerrarDialogo(): void;

        /** Registra una unidad al documento instancia*/
        registrarUnidadDocumento(): void;

        /** Muestra el texto de la medida de la unidad del documento instancia*/
        GenerarEtiquetaMedidaUnidad(unidad: model.Unidad): string;

        /** Obtiene la etiqueta del tipo de unidad*/
        ObtenerEtiquetaTipo(idTipoUnidad): string;

        /** Elimina una unidad del documento instancia*/
        EliminarUnidadDocumento(idUnidad: string): void;

        /** Editar una unidad del documento instancia*/
        EditarUnidadDocumento(idUnidad: string): void;
    }

    /**
    * Define la estructura del Scope de la Directiva para la edición / visualización de las unidades del documento instancia
    *
    * @author Luis Angel Morales Gonzalez
    * @version 1.0
    */
    export interface IXbrlRegistrarUnidadDocumentoDirectiveScope extends ng.IScope {

        /** Cierra el diálogo que presenta el listado de unidades del documento instancia */
        cerrarDialogo(): void;

        /** Arreglo de opciones del listado de los tipos de unidad permitidos*/
        ListaTiposUnidad: Array<any>;

        /** Arreglo de opciones de los codigos de monedas a presentar en la directiva */
        ListaCodigosMoneda: Array<any>;

        /** Registra un valor a la unidad del documento instancia*/
        RegistrarMedida(): void;

        /** Registraun nuevo numerador a la unidad del documento instancia*/
        RegistrarNumerador(): void;

        /** Registraun nuevo denominador a la unidad del documento instancia*/
        RegistrarDenominador(): void;

        /** Registra/actualiza una unidad en el documento Instancia*/
        RegistrarUnidad(): void;

        /** Unidad de documento que se desea registrar/editar en el documento instancia*/
        unidadDocumento: model.Unidad;

        /** Cambia la medida a personalizada o a especifica acorde a las monedas del grupo ISO*/
        CambiarMedidaPersonalizada(medida: model.Medida): void;

        /** Accion para eliminar una medida de la unidad del documento instancia*/
        EliminarMedida(indiceMedida: number, tipoMedida: string): void;
    }

    /**
     * Define la estructura del Scope de la Directiva para la visualización del texto para invocacion a las unidades de un documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export interface IXbrlMostrarUnidadDocumentoDirectiveScope extends ng.IScope {

        /** Muestra las unidades de un documento instancia*/
        mostrarUnidadesDocumentoInstancia(): void;
    }




    /**
     * Implementación de una directiva para las unidades de un documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlUnidadDocumento {

        /**
         * Crea la definción de la directiva de las unidades de un documento .
         *
         * @return la definición de la directiva.
         */
        public static XbrlUnidadDocumentoDirective(): ng.IDirective {

            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                templateUrl: 'ts/templates/template-xbrl-mostrar-unidad-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlMostrarUnidadDocumentoController,
                link: function (scope, element) {
                    scope.$on("$destroy", function () {
                        element.remove();
                    });
                }
            };
        }
    }

    /**
     * Implementación de un controlador para la visualización de la imagen o texto de las unidades de un documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlMostrarUnidadDocumentoController {

        /** el scope de la directa para la visualización de las unidades del documento instancia */
        private $scope: IXbrlMostrarUnidadDocumentoDirectiveScope;

        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;

        /**
         * Inicializa el controlador para mostrar la etiqueta de unidad e invocación a las unidades del documento instancia
         */
        private init(): void {

            var self = this;

            this.$scope.mostrarUnidadesDocumentoInstancia = function () {

                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-unidades-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    //placement: 'left',
                    size: 'lg',
                    controller: XbrlUnidadDocumentoController
                });
            };
        }

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador         
         * @param $modal Ventana modal que muestra las unidades de un documento instancia
         */
        constructor($scope: IXbrlMostrarUnidadDocumentoDirectiveScope, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.$modal = $modal;
            this.init();
        }
    }
    XbrlMostrarUnidadDocumentoController.$inject = ['$scope', '$modal'];


    /**
     * Implementación de un controlador para la edición / visualización de las unidades de un documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlUnidadDocumentoController {

        /** el scope de la directa para la edición / visualización de l las unidades de un documento instancia */
        private $scope: IXbrlUnidadDocumentoDirectiveScope;

        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** Servicio para manejar la instancia del modal enviada*/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;

        /** Tipo de unidad del documento como valor unica medida*/
        private static TIPO_UNIDAD_MEDIDA: string = "Medida";

        /** Tipo de unidad del documento como valor denominador/denominador */
        private static TIPO_UNIDAD_DIVISORIA: string = "Divisoria";

        /**
         * Inicializa el controlador al asociarlo con el hecho correspondiente
         */
        private init(): void {

            var self = this;

            self.$scope.UnidadesDocumentoInstancia = self.abaxService.getDocumentoInstancia().UnidadesPorId;

            this.$scope.cerrarDialogo = function (): void {
                self.$modalInstance.close();
            };

            this.$scope.registrarUnidadDocumento = function () {
                var unidadDocumento = new model.Unidad();

                var modalRegistroInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-registrar-unidad-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    size: 'lg',
                    controller: XbrlRegistrarUnidadDocumentoController,
                    resolve: {
                        unidadDocumento: function () {
                            return unidadDocumento;
                        }
                    }
                });
            };


            this.$scope.GenerarEtiquetaMedidaUnidad = function (unidad: model.Unidad) {
                var medidaUnidad: string = "";

                if (unidad.Tipo == model.Unidad.MEDIDA) {
                    if (unidad.Medidas) {
                        for (var indiceMedida = 0; indiceMedida < unidad.Medidas.length; indiceMedida++) {
                            var medida = unidad.Medidas[indiceMedida];
                            medidaUnidad += medida.Nombre;

                            if (indiceMedida < unidad.Medidas.length - 1) {
                                medidaUnidad += " * ";
                            }
                        }
                    }


                } else {

                    if (unidad.MedidasNumerador) {
                        for (var indiceMedida = 0; indiceMedida < unidad.MedidasNumerador.length; indiceMedida++) {
                            var medida = unidad.MedidasNumerador[indiceMedida];
                            medidaUnidad += medida.Nombre;

                            if (indiceMedida < unidad.MedidasNumerador.length - 1) {
                                medidaUnidad += " * ";
                            }
                        }

                        medidaUnidad += " / ";
                    }



                    if (unidad.MedidasDenominador) {
                        for (var indiceMedida = 0; indiceMedida < unidad.MedidasDenominador.length; indiceMedida++) {
                            var medida = unidad.MedidasDenominador[indiceMedida];
                            medidaUnidad += medida.Nombre;

                            if (indiceMedida < unidad.MedidasDenominador.length - 1) {
                                medidaUnidad += " * ";
                            }
                        }
                    }
                }

                return medidaUnidad;
            };

            this.$scope.ObtenerEtiquetaTipo = function (idTipoUnidad: number): string {
                return idTipoUnidad && idTipoUnidad == model.Unidad.MEDIDA ? XbrlUnidadDocumentoController.TIPO_UNIDAD_MEDIDA : XbrlUnidadDocumentoController.TIPO_UNIDAD_DIVISORIA;
            };

            this.$scope.EditarUnidadDocumento = function (idUnidad: string): void {

                var modalRegistroInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-registrar-unidad-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    size: 'lg',
                    controller: XbrlRegistrarUnidadDocumentoController,
                    resolve: {
                        unidadDocumento: function () {
                            return self.abaxService.getDocumentoInstancia().UnidadesPorId[idUnidad];
                        }
                    }
                });
            };

            this.$scope.EliminarUnidadDocumento = function (idUnidad: string): void {

                var si = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SI');
                var no = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_NO');

                $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ELIMINAR_UNIDAD_DOCUMENTO'), {
                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ELIMINAR_UNIDAD'),
                    buttons: { si: true, no: false },
                    submit: function (e, v, m, f) {
                        if (v) {
                            var scope = self.$scope;
                            scope.$apply(function () {

                                //Se elimina los hechos de la unidad

                                for (var indiceHecho in self.abaxService.getDocumentoInstancia().HechosPorIdUnidad[idUnidad]) {
                                    var idHecho = self.abaxService.getDocumentoInstancia().HechosPorIdUnidad[idUnidad][indiceHecho];
                                    self.abaxService.getDocumentoInstancia().HechosPorId[idHecho] = null;
                                }

                                //Se elimina la unidad

                                self.abaxService.getDocumentoInstancia().UnidadesPorId[idUnidad] = null;
                                var UnidadesPorId: { [id: string]: model.Unidad } = {};

                                for (var unidad in self.abaxService.getDocumentoInstancia().UnidadesPorId) {
                                    if (self.abaxService.getDocumentoInstancia().UnidadesPorId[unidad] && self.abaxService.getDocumentoInstancia().UnidadesPorId[unidad] != null) {
                                        if (!UnidadesPorId.hasOwnProperty(unidad)) {
                                            UnidadesPorId[unidad] = self.abaxService.getDocumentoInstancia().UnidadesPorId[unidad];
                                        }
                                    }
                                }

                                self.abaxService.getDocumentoInstancia().UnidadesPorId = UnidadesPorId;
                                self.$scope.UnidadesDocumentoInstancia = UnidadesPorId;
                            });
                        }
                    }
                });
            }
        }

        /**
        * Constructor de la clase
        *
        * @param $scope el scope de la directiva a la que está asociado este controlador
        * @param abaxXBRLServices el servicio de negocio para interactuar con el backend de la aplicación
        * @param $modalInstance instancia generada por la ventana modal de visualizacion de las unidades de un documento instancia
        * @param $modal  el servicio para presentar diálogos modales de angular
        */
        constructor($scope: IXbrlUnidadDocumentoDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$modalInstance = $modalInstance;
            this.$modal = $modal;

            this.init();
        }
    }

    XbrlUnidadDocumentoController.$inject = ['$scope', 'abaxXBRLServices', '$modalInstance', '$modal'];


    /**
     * Implementación de un controlador para el registro/ edición de las unidades de un documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlRegistrarUnidadDocumentoController {

        /** el scope de la directa para la edición / visualización de l las unidades de un documento instancia */
        private $scope: IXbrlRegistrarUnidadDocumentoDirectiveScope;

        /** Servicio para manejar la instancia del modal enviada*/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** Tipo de unidad del documento como valor unica medida*/
        private static TIPO_UNIDAD_MEDIDA: string = "Medida";

        /** Tipo de unidad del documento como valor denominador/denominador */
        private static TIPO_UNIDAD_DIVISORIA: string = "Divisoria";

        /** Espacio de nombres iso 4217 para las medidas de una unidad */
        private static ESPACIO_NOMBRES_ISO4217: string = "http://www.xbrl.org/2003/iso4217";

        /** Espacio de nombres para las unidades de una instancia xbrl */
        private static ESPACIO_NOMBRES_INSTANCIA_XBRL: string = "http://www.xbrl.org/2003/instance";

        /**
         * Inicializa el controlador al asociarlo con el hecho correspondiente
         */
        private init(): void {

            var self = this;

            this.$scope.ListaTiposUnidad = new Array<any>();
            this.$scope.ListaCodigosMoneda = new Array<any>();

            this.$scope.ListaTiposUnidad.push({ idTipoValor: model.Unidad.MEDIDA, etiqueta: XbrlRegistrarUnidadDocumentoController.TIPO_UNIDAD_MEDIDA });
            this.$scope.ListaTiposUnidad.push({ idTipoValor: model.Unidad.DIVISORIA, etiqueta: XbrlRegistrarUnidadDocumentoController.TIPO_UNIDAD_DIVISORIA });

            for (var codigoMoneda in abaxXBRL.utils.CodigosMonedaISO4217.ObtenerCodigosMonedas()) {
                this.$scope.ListaCodigosMoneda.push({ codigo: codigoMoneda, descripcion: abaxXBRL.utils.CodigosMonedaISO4217.ObtenerDescripcionMoneda(codigoMoneda) });
            }

            //TODO Checar donde poner este listado de los tipos de unidades posibles en un documento xbrl (pure/shares)
            this.$scope.ListaCodigosMoneda.push({ codigo: "shares", descripcion: "xbrl:shares" });
            this.$scope.ListaCodigosMoneda.push({ codigo: "pure", descripcion: "xbrl:pure" });


            if (!(this.$scope.unidadDocumento && this.$scope.unidadDocumento.Id && this.$scope.unidadDocumento.Id.length > 0)) {
                this.$scope.unidadDocumento.Tipo = model.Unidad.MEDIDA;
            }

            this.$scope.cerrarDialogo = function (): void {
                self.$modalInstance.close();
            };

            this.$scope.RegistrarMedida = function (): void {
                var medida = new model.Medida();
                medida.Nombre = "";

                if (!self.$scope.unidadDocumento.Medidas) {
                    self.$scope.unidadDocumento.Medidas = new Array<model.Medida>();
                }

                self.$scope.unidadDocumento.Medidas.push(medida);
            };
            this.$scope.RegistrarNumerador = function (): void {

                var medida = new model.Medida();
                medida.Nombre = "";

                if (!self.$scope.unidadDocumento.MedidasNumerador) {
                    self.$scope.unidadDocumento.MedidasNumerador = new Array<model.Medida>();
                }

                self.$scope.unidadDocumento.MedidasNumerador.push(medida);
            };

            this.$scope.RegistrarDenominador = function (): void {

                var medida = new model.Medida();

                medida.Nombre = "";

                if (!self.$scope.unidadDocumento.MedidasDenominador) {
                    self.$scope.unidadDocumento.MedidasDenominador = new Array<model.Medida>();
                }

                self.$scope.unidadDocumento.MedidasDenominador.push(medida);
            };

            this.$scope.CambiarMedidaPersonalizada = function (medida: model.Medida): void {
                if (medida.EsMedidaPersonalizada) {
                    medida.EsMedidaPersonalizada = false;
                } else {
                    medida.EsMedidaPersonalizada = true;
                }

            };

            this.$scope.RegistrarUnidad = function (): void {

                if (!self.abaxService.getDocumentoInstancia().UnidadesPorId) {
                    self.abaxService.getDocumentoInstancia().UnidadesPorId = {};
                }

                if (self.$scope.unidadDocumento.Tipo == model.Unidad.MEDIDA) {

                    for (var indiceMedida = 0; indiceMedida < self.$scope.unidadDocumento.Medidas.length; indiceMedida++) {
                        var medida = self.$scope.unidadDocumento.Medidas[indiceMedida];
                        if (abaxXBRL.utils.CodigosMonedaISO4217.ObtenerCodigosMonedas().hasOwnProperty(medida.Nombre)) {
                            medida.EspacioNombres = XbrlRegistrarUnidadDocumentoController.ESPACIO_NOMBRES_ISO4217;
                        } else {
                            medida.EspacioNombres = XbrlRegistrarUnidadDocumentoController.ESPACIO_NOMBRES_INSTANCIA_XBRL;
                        }
                    }
                }

                self.abaxService.getDocumentoInstancia().UnidadesPorId[self.$scope.unidadDocumento.Id] = self.$scope.unidadDocumento;

                self.$scope.cerrarDialogo();
            };

            this.$scope.EliminarMedida = function (indiceUnidad: number, tipoMedida: string): void {

                var si = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SI');
                var no = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_NO');

                $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ELIMINAR_MEDIDA_DOCUMENTO'), {
                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ELIMINAR_MEDIDA'),
                    buttons: { si: true, no: false },
                    submit: function (e, v, m, f) {
                        if (v) {
                            var scope = self.$scope;
                            scope.$apply(function () {
                                if (tipoMedida == "MEDIDA") {
                                    self.$scope.unidadDocumento.Medidas.splice(indiceUnidad, 1);
                                } else if (tipoMedida == "NUMERADOR") {
                                    self.$scope.unidadDocumento.MedidasNumerador.splice(indiceUnidad, 1);
                                } else if (tipoMedida == "DENOMINADOR") {
                                    self.$scope.unidadDocumento.MedidasDenominador.splice(indiceUnidad, 1);
                                }

                            });
                        }
                    }
                });
            };



        }

        /**
        * Constructor de la clase
        *
        * @param $scope el scope de la directiva a la que está asociado este controlador
        * @param $modalInstance instancia generada por la ventana modal de visualizacion de las unidades de un documento instancia
        */
        constructor($scope: IXbrlRegistrarUnidadDocumentoDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, unidadDocumento: model.Unidad) {
            this.$scope = $scope;
            this.$modalInstance = $modalInstance;
            this.$scope.unidadDocumento = unidadDocumento;
            this.abaxService = abaxXBRLServices;
            this.init();
        }
    }

    XbrlRegistrarUnidadDocumentoController.$inject = ['$scope', 'abaxXBRLServices', '$modalInstance', 'unidadDocumento'];






    /**
     * Implementación de una directiva encargada de presentar un diálogo que permite al usuario controlar la manera en que se presenta una tabla.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlConfigurarTabla {

        /**
         * Crea la definición de la directiva.
         * 
         * @return la definición de la directiva.
         */
        public static XbrlConfigurarTablaDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                scope: {
                    xbrlEstructuraTabla: '=',
                    documentoInstancia: '=',
                    xbrlFnActualizarTabla: '&',
                    xbrlIdElementoDocumento: '@',
                },
                templateUrl: 'ts/templatesVisor/template-xbrl-configurar-tabla.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlConfigurarTablaController
            };
        }
    }

    /**
     * Implementación de un controlador para la directiva encargada de presentar un diálogo que permite al usuario controlar la manera en que se presenta una tabla.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlConfigurarTablaController {

        /** El scope de la directiva en el controlador */
        private $scope: IConfigurarTablaDirectiveScope;

        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** El servicio para utilizar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self = this;

            self.$scope.configurarTabla = function (): void {
                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templatesVisor/template-xbrl-modal-configurar-tabla.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ModalConfigurarTablaController,
                    size: 'lg',
                    resolve: {
                        documentoInstancia: function () {
                            return self.$scope.documentoInstancia;
                        },
                        estructuraTabla: function () {
                            //return self.$scope.xbrlEstructuraTabla;
                            return $('#' + self.$scope.xbrlIdElementoDocumento).data('elementoDocumento');
                        },
                        xbrlFnActualizarTabla: function () {
                            return self.$scope.xbrlFnActualizarTabla;
                        }
                    }
                });
            };

            self.$scope.establecerPanelDim = function (idDim: string): void {
                self.$scope.panelSeleccionado = idDim;
            }

            self.$scope.panelSeleccionado = self.$scope.xbrlEstructuraTabla.tabla.encabezado.dimensiones[0].idConceptoEje;
        }

        /**
         * Constructor de la clase XbrlConfigurarTablaController
         *
         * @param $scope el scope de la directiva
         * @param abaxXBRLServices el servicio de negocio para interactuar con el backend de la aplicación.
         */
        constructor($scope: IConfigurarTablaDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$modal = $modal;
            this.init();
        }
    }
    XbrlConfigurarTablaController.$inject = ['$scope', 'abaxXBRLServices', '$modal'];

    /**
     * Definición del scope de la directiva que presenta un diálogo que permite al usuario controlar la manera en que se presenta una tabla.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IConfigurarTablaDirectiveScope extends ng.IScope {

        /** Estructura del elemento de documento qu ese está editando */
        xbrlEstructuraTabla: ElementoDocumento;

        /** El documento instancia que está siendo editado por el usuario */
        documentoInstancia: model.DocumentoInstanciaXbrl;
        /** Funcion a llamar para actualizar los valores de la configuración de la tabla */
        xbrlFnActualizarTabla(): void;
        /**
         * Lanza el diálogo que permite al usuario controlar la manera en que se presenta una tabla.
         */
        configurarTabla(): void;

        panelSeleccionado: string;

        establecerPanelDim(idDim: string): void;

        /**
        * Identificador del elemento raíza de esta estructura del documento.
        **/
        xbrlIdElementoDocumento: string;
    }


    /**
     * Definición del scope de la directiva que presenta un diálogo que permite al usuario controlar la manera en que se presenta una tabla.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IModalConfigurarTablaDirectiveScope extends ng.IScope {

        /** La estructura de la tabla que se está modificando */
        xbrlEstructuraTabla: ElementoDocumento;

        /** El documento instancia que está siendo editado por el usuario */
        documentoInstancia: model.DocumentoInstanciaXbrl;

        /** Cierra el diálogo modal */
        cerrarDialogo(): void;

        /** Modelo de elementos de dimension ordenados */
        itemsOrdenDimensiones: Array<{}>;
        /** Nodos del árbol que representan los renglones a presentar */
        itemsRenglones: Array<any>;
        //opciones de configuración del árbol para orden de dimensiones
        opcionesTreeOrden: any;
        /**
         * Ejecuta la operación de actualización de la presentación de la tabla en pantalla.
         */
        actualizarTabla(): void;
        //Id de la dimensión de tiempo
        idDimensionTiempo: string;
        //Id de la dimensión de entidad
        idDimensionEntidad: string;
        //guarda las opciones de columna, renglones y agrupación
        opcionesTabla: { [id: string]: boolean };
        // Filtro de búsqueda de renglones
        filtroBusquedaRenglon: string;
        //Estructura replicada de renglones
        renglones: Array<RenglonTabla>;
        ///funcion que aplica un valor de visible a todos los renglones
        aplicarATodosLosRenglones(visible: boolean, aplicarSoloSiVerdadero: boolean): void;
        //Elementos de configuración del árbol para elegir los miembros visibles de las dimensiones
        itemMiembros: { [idDimension: string]: any; };
        //Aplica el criterio de visible o invisible a todos los hijos de un item de arbol
        aplicarVisibleAHijos(item: any, visible: boolean): void;
        //Altura maxima para presentar el detalle en el modal
        alturaModal: number;
    }

    /**
     * Implementación de un controlador para la operación de configurar cómo se presenta una tabla del documento instancia XBRL
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ModalConfigurarTablaController {

        /** El scope del controlador para la operación de configurar cómo se presenta una tabla del documento instancia XBRL */
        private $scope: IModalConfigurarTablaDirectiveScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**
         * Constructor de la clase ModalConfigurarTablaController
         *
         * @param $scope el scope del controlador
         * @param $modalInstance el servicio para interactuar con la instancia de un diálogo modal
         * @param abaxXBRLServices el servicio de negocio para interactuar con el backend de la aplicación.
         * @param documentoInstancia el documento instancia que se está presentando al usuario.
         * @param estructuraTabla la estructura de la tabla a configurar.
         */
        constructor($scope: IModalConfigurarTablaDirectiveScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLServices: services.AbaxXBRLServices, documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl, estructuraTabla: ElementoDocumento,
            xbrlFnActualizarTabla: any, $timeout: ng.ITimeoutService) {
            this.$scope = $scope;


            this.abaxService = abaxXBRLServices;
            var self = this;

            this.$scope.xbrlEstructuraTabla = estructuraTabla;
            this.$scope.documentoInstancia = documentoInstancia;
            this.$scope.opcionesTreeOrden = {};
            this.$scope.itemsOrdenDimensiones = new Array<any>();
            this.$scope.idDimensionEntidad = InformacionDimension.ID_DIMENSION_ENTIDAD;
            this.$scope.idDimensionTiempo = InformacionDimension.ID_DIMENSION_TIEMPO;
            this.$scope.opcionesTabla = {};
            this.$scope.opcionesTabla["mostrarColumnasVacias"] = estructuraTabla.tabla.mostrarColumnasVacias;
            this.$scope.opcionesTabla["agruparDimensionFecha"] = estructuraTabla.tabla.agruparFechas;
            this.$scope.opcionesTabla["mostrarRenglonesVacios"] = estructuraTabla.tabla.mostrarRenglonesVacios;
            this.$scope.alturaModal = (window.innerHeight - 400);

            //replicar renglones en estructura de arbol
            this.$scope.itemsRenglones = new Array<any>();



            for (var iRenglon = 0; iRenglon < estructuraTabla.tabla.renglones.length; iRenglon++) {
                var renglonActual = estructuraTabla.tabla.renglones[iRenglon];
                if (renglonActual.indentacion == 0) {
                    var indice = {};
                    indice["indice"] = iRenglon;
                    this.$scope.itemsRenglones.push(this.crearItemRenglon(estructuraTabla.tabla.renglones, indice));
                }
            }

            var dimensionesOrdenadas = estructuraTabla.tabla.encabezado.dimensiones.sort(function (dimA: InformacionDimension, dimB: InformacionDimension): number {
                return dimA.orden - dimB.orden;
            });
            this.$scope.itemMiembros = {};
            for (var idxDim in dimensionesOrdenadas) {

                var infoDim = estructuraTabla.tabla.encabezado.dimensiones[idxDim];
                this.$scope.itemsOrdenDimensiones.push(
                    {
                        "id": infoDim.idConceptoEje,
                        "title": infoDim.titulo ? infoDim.titulo : infoDim.idConceptoEje
                    }
                );
                //Colocar los items del arbol de miembros de dimensión
                this.$scope.itemMiembros[infoDim.idConceptoEje] = new Array<any>();
                if (infoDim.tipo == TipoDimension.Ficticia) {
                    for (var idMiembro in infoDim.miembros) {
                        var miembro = infoDim.miembros[idMiembro];
                        this.$scope.itemMiembros[infoDim.idConceptoEje].push(this.crearItemMiembroFicticio(miembro, infoDim));
                    }
                } else {
                    for (var idMiembro in infoDim.subEstructuraOrigen.SubEstructuras) {
                        var subEstruct = infoDim.subEstructuraOrigen.SubEstructuras[idMiembro];
                        this.$scope.itemMiembros[infoDim.idConceptoEje].push(this.crearItemMiembro(subEstruct, infoDim));
                    }
                }


            }

            this.$scope.cerrarDialogo = function (): void {
                $modalInstance.close();
            };

            this.$scope.actualizarTabla = function (): void {
                self.$scope.xbrlEstructuraTabla.tabla.mostrarColumnasVacias = self.$scope.opcionesTabla["mostrarColumnasVacias"];
                self.$scope.xbrlEstructuraTabla.tabla.mostrarRenglonesVacios = self.$scope.opcionesTabla["mostrarRenglonesVacios"];
                self.$scope.xbrlEstructuraTabla.tabla.agruparFechas = self.$scope.opcionesTabla["agruparDimensionFecha"];

                //Actualizar visible de renglones
                var indice = {};
                indice["indiceActual"] = 0;
                for (var idxItem in self.$scope.itemsRenglones) {
                    var item = self.$scope.itemsRenglones[idxItem];
                    self.actualizarVisibleRenglones(item, estructuraTabla.tabla.renglones, indice);
                }


                //ordenar las dimensiones
                var dimensionesOrdenadas = new Array<InformacionDimension>();
                var indiceFinal = 0;
                for (var idxDim in self.$scope.itemsOrdenDimensiones) {
                    var itemDim = self.$scope.itemsOrdenDimensiones[idxDim];
                    //buscar la dimension
                    for (var iDim = 0; iDim < self.$scope.xbrlEstructuraTabla.tabla.encabezado.dimensiones.length; iDim++) {
                        var infoDim = self.$scope.xbrlEstructuraTabla.tabla.encabezado.dimensiones[iDim];
                        if (infoDim.idConceptoEje == itemDim["id"]) {
                            infoDim.orden = indiceFinal;
                            indiceFinal++;
                            break;
                        }
                    }
                }

                //Miembros visibles
                for (var idxDim in self.$scope.xbrlEstructuraTabla.tabla.encabezado.dimensiones) {
                    var dimensionaActualizar = self.$scope.xbrlEstructuraTabla.tabla.encabezado.dimensiones[idxDim];
                    var infoMiembros = self.$scope.itemMiembros[dimensionaActualizar.idConceptoEje];
                    for (var idxMiembro in infoMiembros) {
                        var miembroConInfo = infoMiembros[idxMiembro];
                        dimensionaActualizar.miembros[miembroConInfo["idMiembro"]].visible = miembroConInfo["visible"];
                    }


                }

                if (xbrlFnActualizarTabla) {
                    xbrlFnActualizarTabla();
                }
                $modalInstance.close();
            };

            this.$scope.aplicarATodosLosRenglones = function (visible: boolean, aplicarSoloSiVerdadero: boolean): void {

                if (aplicarSoloSiVerdadero) {

                    for (var idxItem in self.$scope.itemsRenglones) {
                        var item = self.$scope.itemsRenglones[idxItem];
                        item["visible"] = visible;
                        self.$scope.aplicarVisibleAHijos(item, visible);
                    }


                }
            };

            this.$scope.aplicarVisibleAHijos = function (item: any, visible: boolean): void {
                if (item.items && !visible) {
                    for (var idItem in item.items) {
                        var hijo = item.items[idItem];
                        if (hijo) {
                            hijo.visible = visible;
                            self.$scope.aplicarVisibleAHijos(hijo, visible);
                        }
                    }
                }
            };

            $timeout(function () {
                $('xbrl\\:etiqueta-concepto').xbrlEtiquetaConcepto();
            });
        }


        //Actualiza la lista de renglones con los valores configurados de visible / invisible 
        //del modelo del árbol presentado en pantalla
        private actualizarVisibleRenglones(item: {}, renglones: Array<RenglonTabla>, indice: {}): void {
            renglones[indice["indiceActual"]].visible = item["visible"];
            indice["indiceActual"] = indice["indiceActual"] + 1;

            if (item["items"]) {
                for (var idItem in item["items"]) {
                    var hijo = item["items"][idItem];
                    if (hijo) {
                        this.actualizarVisibleRenglones(hijo, renglones, indice);
                    }
                }
            }

        }

        //Crea e invoca de forma estructurada la creación de items de renglones
        private crearItemRenglon(renglones: Array<RenglonTabla>, indice: any) {
            var item = {};
            var indentacionActual = renglones[indice["indice"]].indentacion;
            item["esAbstracto"] = renglones[indice["indice"]].EsAbstracto ? renglones[indice["indice"]].EsAbstracto : false;
            item["idConcepto"] = renglones[indice["indice"]].idConcepto;
            item["indentacion"] = renglones[indice["indice"]].indentacion;
            item["visible"] = renglones[indice["indice"]].visible;
            item["rolEtiqueta"] = renglones[indice["indice"]].rolEtiqueta ? renglones[indice["indice"]].rolEtiqueta : null;
            item["items"] = new Array<{}>();
            indice["indice"] = indice["indice"] + 1;
            while (indice["indice"] < renglones.length) {
                if (renglones[indice["indice"]].indentacion != indentacionActual + 1) {
                    break;
                }
                item["items"].push(this.crearItemRenglon(renglones, indice));
            }

            return item;
        }
        //Crea un elemento que representa un nodo del árbol que sirve para seleccionar los miembros de dimensión visibles
        private crearItemMiembro(estructura: model.EstructuraFormato, infoDim: InformacionDimension): any {
            var item = {};
            item["idDimension"] = infoDim.idConceptoEje;
            item["idMiembro"] = infoDim.miembros[estructura.IdConcepto].idConceptoMiembro;
            item["visible"] = infoDim.miembros[estructura.IdConcepto].visible;
            item["titulo"] = infoDim.miembros[estructura.IdConcepto].titulo;
            item["items"] = new Array<any>();
            if (estructura.SubEstructuras) {
                for (var idMiembro in estructura.SubEstructuras) {
                    item["items"].push(this.crearItemMiembro(estructura.SubEstructuras[idMiembro], infoDim));
                }
            }
            return item;
        }
        //Crea un elemento que representa un nodo del árbol de dimensión ficticia que sirve para seleccionar los miembros de dimensión visibles
        private crearItemMiembroFicticio(estructura: MiembroDimension, infoDim: InformacionDimension): any {
            var item = {};
            item["idDimension"] = infoDim.idConceptoEje;
            item["idMiembro"] = estructura.idConceptoMiembro;
            item["visible"] = estructura.visible;
            item["titulo"] = estructura.titulo;
            return item;
        }
    }
    ModalConfigurarTablaController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'documentoInstancia', 'estructuraTabla', 'xbrlFnActualizarTabla', '$timeout'];

    /**
    * Enumerador con los eventos que aplican a un hipercubo.
    **/
    export enum XbrlEventoHipercubo {
        /**
        * Evento que se dispara cuando se agrega un nuevo miembro a la dimensión.
        **/
        CREAR_MIEMBRO,
        /**
        * Evento que se dispara cuando se elimina un miembro de la dimensión.
        **/
        ELIMINAR_MIEMBRO,
        /**
        * Evento que se dispara cuando se modifica el nombre o identificador de un mimebro.
        **/
        MODIFICAR_IDENTIFICADOR_MIEMBRO,
    }

    /**
    * Scope de la directiva para la administración de contextos dimensionales.
    * @author Oscar Ernesto Loyola S&aacute;nchez.
    **/
    export interface IXbrTablaHipercuboDirectiveScope extends ng.IScope {

        /**
        * Configuración de inicialización de la directiva.
        * @param contexto Este atributo es evaluado dentro del modulo "abaxXBRL.hipercubos.config" como contexto.
        **/
        xbrlConfiguracion: (contexto: any) => model.XbrlConfiguracionTablaHipercuboDirective;
        /**
        * Controlador base de la directiva.
        **/
        xbrlControlador: (contexto: any) => Function;
        /**
        * Identificador de la tabla del hipercubo.
        **/
        xbrlIdTablaHipercubo: string;
        /**
        * Definción del documento de instancia.
        **/
        documentoInstancia: model.DocumentoInstanciaXbrl;
        /**
        * Definición de la plantilla XBRL.
        **/
        definicionPlantilla: model.DefinicionDePlantillaXbrl;
        /**
        * Arreglo con las depencencias requeridas por la directiva.
        **/
        xbrlDependencias: () => Array<string>;
        /**
        * Manejador que se invoca una vezque se completa el proceso de agregar un miembro en alguna de las dimensiones type del hipercubo.
        * @param contexto Contexto de ejecución que proporciona las siguientes variables:
        *  $controlador Controlador actual de la directiva, este controlador extiende de XbrTablaHipercuboDirectiveController.
        *  $eventoHipercubo Valor del enumerador de eventos con el valor del evento ejecutado (crear, eliminar o modificar los miembros del hipercubo).
        *  $parametros Parametros adicionales relacionados al eveto ejecutado.
        * @return Retorna una promesa que se resuelve cuando se completa el procedimiento.
        **/
        xbrlEnEventoHipercubo: (contexto: { $eventoHipercubo: XbrlEventoHipercubo, $controlador: XbrTablaHipercuboDirectiveController, $parametros: { [nombreParametro: string]: any } }) => ng.IPromise<any>,
        /**
        * Bandera que indica si el hipecubo debe de buscar sincronizarse con otros otros hipercubos, es decir que cada que el hipercubo cambie
        * otros hipercubos se reevaluen, esto es util para proyecciones del hipercubo cuando esta en el mismo rol o cuando existen hipercubos internos definidos
        * en direrentes partes del mismo rol.
        * Se espera que el resultado retorne los identificadores de los hierpcubos con los que se debe de sincronizar se parados por comas  o
        * la cadenna '$equivalentes' para que busque aquellos hipercubos con la misma definición (proyecciones), ejemplo:
        * xbrl:sincronizar=" 'idHipercubo1',  'idHipercubo2', 'idHipercubo3'"
        * xbrl:sincronizar="$equivalentes"
        **/
        xbrlSincronizar: string;
        /**
        * Cadena con el identificador de la proyección que se aplica en este hipercubo.
        **/
        xbrlIdProyeccion: string;
        /**
        * Variables de la plantilla.
        **/
        modelo: { variablesPlantilla: { [nombre: string]: any } };
        /**
        * Reevalua los campo captura que cuadren con el filtro dado.
        * @param filtro Objeto con los elementos dimensionales por los que se filtran los contextos.
        * @return Promesa que se cumple cuando los elementos buscados fueron evaluados.
        **/
        reEvaluarCamposCapturaHechoDimension(filtro: model.XbrlConfiguracionMiembrosDimensionContexto, nombrePlantillaContexto: string): ng.IPromise<void>;
        /**
        * Elimina el miembro de la dimención indicada.
        * @param aliasDimension Identificador de la dimensión.
        * @param aliasMiembro Identificador del miembro de la dimensión que se pretende eliminar.
        **/
        eliminaMiembroDimension(aliasDimension: string, aliasMiembro: string): ng.IPromise<void>;
        /**
        * Crea un nuevo miembro para la dimension indicada.
        * @param aliasDimension Identificador de la dimension.
        * @return Miembro de la dimensión generada.
        **/
        creaMiembroDimension(aliasDimension: string): model.DimensionInfo;
    }
    /**
    * Directiva de para la presentación de una tabla de tipo hipercubo.
    *
    **/
    export class XbrlTablaHipercuboDirective {


        public static factory($compile: ng.ICompileService, $controller: ng.IControllerService, $http: ng.IHttpService, $injector: ng.auto.IInjectorService, $ocLazyLoad: oc.ILazyLoad): ng.IDirective {

            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                scope: {
                    xbrlConfiguracion: '&',
                    xbrlControlador: '&?',
                    xbrlDependencias: '&?',
                    xbrlIdTablaHipercubo: '@',
                    xbrlEnEventoHipercubo: '&?',
                    xbrlSincronizar: '@?',
                    xbrlIdProyeccion: '@?'
                },
                link: function ($scope: IXbrTablaHipercuboDirectiveScope, $element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controllerArr: any) {

                    var index: number;
                    var serviceName: string;
                    var service: any;
                    var $util = shared.service.AbaxXBRLUtilsService;
                    var $abaxXBRLService = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService();
                    var deferred = $util.creatPromiseDeferred<void>();



                    if ($scope.xbrlDependencias) {

                        var dependencias = $scope.xbrlDependencias();
                        if (dependencias) {
                            var url = dependencias + (dependencias.indexOf('?') > -1 ? "&" : "?") + "version=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
                            $ocLazyLoad.load(url).then(function () {
                                deferred.resolve();
                            }).catch(function (error) {

                                console.error("No fue posible cargar las dependencias de la tabla hipercubo \"" + $scope.xbrlIdTablaHipercubo + "\":");
                                console.error(dependencias);
                                console.error(error);
                                deferred.reject(error);
                            });
                        }
                    } else {

                        deferred.resolve();
                    }

                    deferred.promise.then(function () {

                        var claseControlador = $scope.xbrlControlador ? $scope.xbrlControlador({ "abaxXBRL": abaxXBRL }) : undefined;
                        if (!claseControlador) {

                            claseControlador = XbrTablaHipercuboDirectiveController;
                        }
                        var parametros = {};
                        $element.data('hhScope', $scope.$new());
                        $scope.documentoInstancia = $abaxXBRLService.getDocumentoInstancia();
                        $scope.definicionPlantilla = $abaxXBRLService.getDefinicionPlantilla();

                        if (claseControlador.$inject && claseControlador.$inject.length > 0) {
                            for (index = 0; index < claseControlador.$inject.length; index++) {

                                serviceName = claseControlador.$inject[index];
                                if (serviceName == "$scope") {

                                    parametros[serviceName] = $element.data('hhScope');
                                } else if (serviceName == "$xbrlConfiguracion") {
                                    var xbrlConfiguracionAtt: any = $scope.xbrlConfiguracion(abaxXBRL.hipercubos.config);
                                    parametros[serviceName] = new model.XbrlConfiguracionTablaHipercuboDirective().deserialize(xbrlConfiguracionAtt);
                                } else if (serviceName == "$xbrlHipercubo") {

                                    parametros[serviceName] = $element;
                                }
                                else {

                                    service = $injector.get(serviceName);
                                    parametros[serviceName] = service;
                                }

                            }
                        }
                        var controller: XbrTablaHipercuboDirectiveController = $controller(claseControlador, parametros);
                        if (!(controller instanceof XbrTablaHipercuboDirectiveController)) {

                            throw new Error("El controlador de la directiva XbrTablaHipercuboDirective debe extender de XbrTablaHipercuboDirectiveController");
                        }
                        $element.data('$ngControllerController', controller);
                        $element.children().data('$ngControllerController', controller);
                        $compile($element.contents())($element.data('hhScope'));
                        $element.data("xbrlControladorHipercubo", controller);
                        $element.data("xbrlPlantillaOriginal", $element.html());
                        controller.evaluaComponentesHipercubo().then(function () {

                            controller.reajustaTamanioCeldasFijas();
                        });
                    });
                }
            }
        }
    }
    /**
    * Controlador base de la directiva de presentación de hipercubos en tablas.
    **/
    export class XbrTablaHipercuboDirectiveController {

        /**
        * Scope para la interación con la vista.
        **/
        protected $scope: IXbrTablaHipercuboDirectiveScope;
        /**
        * Configuración inicial de la directiva.
        **/
        protected $config: model.XbrlConfiguracionTablaHipercuboDirective;
        /**
        * Servicio de acceso a los elementos de la taxonomía y documento de instancia XBRL. 
        **/
        protected $abaxXBRLService: abaxXBRL.services.AbaxXBRLServices;
        /**
        * Elmento de la directiva.
        **/
        protected $xbrlHipercubo: ng.IAugmentedJQuery;
        /**
        * Objeto JQuery con referencia a todos los componentes del tipo tabla excel dentro del hipercubo.
        **/
        protected $tablasExcel: JQuery;
        /**
        * Bandera que indica si existe un proceso activo de evaluación de celdas fijas.
        **/
        private procesoReajustarCeldasActivo: boolean = false;
        /**
        * Identificador del intervalo para el proceso de recalculo de columnas fijas.
        **/
        private idIntervaloReajustaTamanioColumnasFijas: number;
        /**
        * Listado con todas las dimensiones que conforman el hipercubo.
        **/
        private ListaDimensionesHipercubo: Array<string> = [];
        /**
        * Diccionario que retorna el alias de la dimensión por su QName.
        **/
        private DiccionarioDimensionesAlias: { [QNameDimension: string]: string } = {};
        /**
        * Diccionario con los alias de los miembros de las dimensiones por su QName o nombre tipificado.
        **/
        private DiccionarioMiemborsDimensionAlias: { [aliasDimension: string]: { [QNameOrTipified: string]: string } } = {};
        /**
        * Diccionario de contextos y grupos.
        **/
        private DiccionarioDimensionMiembroGrupo: { [aliasDimension: string]: { [aliasMiembro: string]: Array<string> } } = {};
        /**
        * Diccionrio de grupos.
        **/
        private DiccionarioGrupoDimensionMiembro: { [nombreGupo: string]: { [aliasDimension: string]: string } } = {};

        /**
        * Diccionario con las definiciones de los elementos de las dimensiones miembro.
        **/
        private MiembrosDimensiones: { [aliasDimension: string]: { [aliasMiembro: string]: model.DimensionInfo; }; } = {}
        /**
        * Diccionario donde se indican los conceptos que deben ser reevaluados una vez completado el proceso de agregar o eliminar conceptos.
        **/
        private ConceptoFormulasReevaluar: { [idConcepto: string]: boolean } = {};
        /**
        * Identificador del timeout de las formulas.
        **/
        private ReevaluarFormulasTimeOut: number;

        /**
        * Indica si el diccionario esta vacio.
        * @param dicctionary Diccionario a evalular.
        + @return Si esta vacio.
        */
        private isDictionaryEmpty(dicctionary: any): boolean {

            return Object.keys(dicctionary).length === 0;
        }
        /**
        * Indice único para la asignación de un alias al miembro de la dimensión.
        **/
        private dimensionAliasIndex: number = 0;

        /**
        * Arreglo con los tempaltes de los contextos que serán generados cuando se invoque la generación de contextos.
        **/
        public PlantillasContextos: { [nombrePlantilla: string]: model.PlantillaContexto } = {};
        /**
        * Diccionario que relaciona e alias de las unidades con su identificador en el documento.
        **/
        public Unidades: { [aliasUnidad: string]: string } = {};

        /**
        * Inicializa los diccionarios de trabajo con la información proporcionada por los datos de configuración inicial.
        **/
        public inicializaConfiguracion(): void {

            var $self = this;
            try {
                var aliasDimension: string;
                var aliasMiembro: string;
                var nombreGrupoConfig: string;
                var contexto: model.Contexto;
                var dimension: model.DimensionInfo;
                var qNameDimension: string;
                var valoresDimension: Array<model.DimensionInfo>;
                var aliasMiembro: string;
                var nombreSeccion: string;
                //var seccion: { filtros: Array<model.FiltroHechosDto>, idsContextos: Array<string> };
                var listaIdsContextosEvaluar: Array<string> = [];
                var hechosSeccion: Array<string>;
                var index: number;
                var filtro: model.FiltroHechosDto;
                var contextosInicializacion: { [idContexto: string]: model.Contexto } = {};
                var idContexto: string;
                var contexto: model.Contexto;
                var plantillaContexto: model.PlantillaContexto;
                var idMiembro: string;
                var agrupacionMiembrosDimension: { [aliasDimension: string]: string };
                var periodo: model.Periodo;
                var nombreGrupo: string;

                if ($self.isDictionaryEmpty($self.$config.TemplatesDimensiones)) {

                    throw new Error("El listado de dimensiones del hipercubo no puede estar vacio.");
                }
                for (aliasDimension in $self.$config.TemplatesDimensiones) {

                    $self.ListaDimensionesHipercubo.push(aliasDimension);
                    dimension = $self.$config.TemplatesDimensiones[aliasDimension];
                    qNameDimension = dimension.QNameDimension;

                    if (!$self.DiccionarioDimensionesAlias[qNameDimension]) {

                        $self.DiccionarioDimensionesAlias[qNameDimension] = aliasDimension;
                    } else {

                        throw new Error("Se ha definido más de un alias para la dimension \"" + qNameDimension + "\".");
                    }
                    if (!$self.DiccionarioMiemborsDimensionAlias[aliasDimension]) {

                        $self.DiccionarioMiemborsDimensionAlias[aliasDimension] = {};
                    }
                    if (!$self.MiembrosDimensiones[aliasDimension]) {

                        $self.MiembrosDimensiones[aliasDimension] = {};
                    }
                    if (!$self.DiccionarioDimensionMiembroGrupo[aliasDimension]) {

                        $self.DiccionarioDimensionMiembroGrupo[aliasDimension] = {};
                    }
                }
                for (aliasDimension in $self.$config.MiembrosDimensiones) {

                    if (!$self.$config.TemplatesDimensiones[aliasDimension]) {

                        throw new Error("No existe la dimension " + aliasDimension + " en los templates configurados.");
                    }
                    for (aliasMiembro in $self.$config.MiembrosDimensiones[aliasDimension]) {

                        dimension = $self.$config.MiembrosDimensiones[aliasDimension][aliasMiembro];
                        idMiembro = dimension.Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
                        if (!$self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro]) {

                            $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro] = aliasMiembro;
                        } else {

                            throw new Error("Existe más de una definición para el miembro \"" + idMiembro + "\" de la dimensión \"" + aliasDimension + "\" ");
                        }
                        if (!$self.MiembrosDimensiones[aliasDimension][aliasMiembro]) {

                            $self.MiembrosDimensiones[aliasDimension][aliasMiembro] = angular.copy($self.$config.MiembrosDimensiones[aliasDimension][aliasMiembro]);
                        }
                    }
                }

                for (nombreGrupo in $self.$config.GruposDimensionesMiembro) {

                    if (!$self.DiccionarioGrupoDimensionMiembro[nombreGrupo]) {

                        $self.DiccionarioGrupoDimensionMiembro[nombreGrupo] = {};
                        for (aliasDimension in $self.$config.GruposDimensionesMiembro[nombreGrupo]) {

                            $self.DiccionarioGrupoDimensionMiembro[nombreGrupo][aliasDimension] = $self.$config.GruposDimensionesMiembro[nombreGrupo][aliasDimension];
                        }
                    }
                }

                if (!$self.$config.FiltroCargaInicial) {

                    throw new Error("Se requiere al menos una sección de carga para el llenado de los contextos y dimensiones del hipercubo.");
                }

                filtro = $self.$config.FiltroCargaInicial;
                hechosSeccion = $self.$abaxXBRLService.buscaHechosPorFiltro(filtro);
                if ($self.$scope.xbrlIdProyeccion && $self.$config.Proyecciones) {

                    var proyeccion = $self.$config.Proyecciones[$self.$scope.xbrlIdProyeccion];
                    if (proyeccion) {

                        hechosSeccion = $self.$abaxXBRLService.AplicaFiltroProyeccionContextos(hechosSeccion, proyeccion);
                    } else {

                        console.error("No existe la proyección '" + $self.$scope.xbrlIdProyeccion + "', definida para le hipercubo '" + $self.$xbrlHipercubo.attr("xbrl:id-tabla-hipercubo") + "'");
                    }
                }
                listaIdsContextosEvaluar = $self.$abaxXBRLService.obtenIdsContextosHechos(hechosSeccion);
                for (index = 0; index < listaIdsContextosEvaluar.length; index++) {

                    idContexto = listaIdsContextosEvaluar[index];
                    if (!contextosInicializacion[idContexto]) {

                        contextosInicializacion[idContexto] = $self.$abaxXBRLService.getDocumentoInstancia().ContextosPorId[idContexto];
                    }
                }

                for (idContexto in contextosInicializacion) {

                    contexto = contextosInicializacion[idContexto];
                    $self.evaluaContexto(contexto);
                }
                var nombrePlantillaContexto: string;
                var definicionPlantilla: model.DefinicionDePlantillaXbrl = $self.$abaxXBRLService.getDefinicionPlantilla();
                var valorVariable: string;
                var nombreEntidad = definicionPlantilla.obtenerVariablePorId('nombreEntidad');
                var esquemaEntidad = definicionPlantilla.obtenerVariablePorId('esquemaEntidad');
                var entidadPorDefecto = new model.Entidad();
                entidadPorDefecto.Id = nombreEntidad;
                entidadPorDefecto.EsquemaId = esquemaEntidad;
                entidadPorDefecto.IdEntidad = esquemaEntidad + abaxXBRL.model.ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO + nombreEntidad;
                entidadPorDefecto.ContieneInformacionDimensional = false;


                for (nombrePlantillaContexto in $self.$config.PlantillasContextos) {


                    if ($self.PlantillasContextos[nombrePlantillaContexto]) {

                        continue;
                    }
                    $self.PlantillasContextos[nombrePlantillaContexto] = new model.PlantillaContexto().deserialize($self.$config.PlantillasContextos[nombrePlantillaContexto])
                    plantillaContexto = $self.PlantillasContextos[nombrePlantillaContexto];
                    plantillaContexto.Periodo.evaluaVariablesPlantilla(definicionPlantilla);
                    if (plantillaContexto.NombreGrupoDimensionesIniciales) {
                        agrupacionMiembrosDimension = $self.DiccionarioGrupoDimensionMiembro[plantillaContexto.NombreGrupoDimensionesIniciales];
                        if (!agrupacionMiembrosDimension) {

                            throw new Error("No existe la agrupación definida en la plantilla de contexto \"" + nombrePlantillaContexto + "\"");
                        }
                        plantillaContexto.ContieneInformacionDimensional = true;
                        plantillaContexto.ValoresDimension = $self.obtenArregloDimensionesDiccionario(agrupacionMiembrosDimension);
                        if (!plantillaContexto.Entidad) {

                            plantillaContexto.Entidad = entidadPorDefecto;
                        } else {

                            throw new Error("No se han definidio criterios de evaluación de entidades de contexto de plantilla.");
                        }
                        filtro = plantillaContexto.generaFiltroHechos();
                        filtro.IdContexto = listaIdsContextosEvaluar;

                        hechosSeccion = $self.$abaxXBRLService.buscaHechosPorFiltro(filtro);
                        plantillaContexto.ContextosRelacionados = $self.$abaxXBRLService.obtenIdsContextosHechos(hechosSeccion);
                    }
                }

                if ($self.$config.Unidades) {

                    var aliasUnidad: string;
                    for (aliasUnidad in $self.$config.Unidades) {

                        var unidad: model.Unidad = new model.Unidad().deserialize($self.$config.Unidades[aliasUnidad]);
                        if (unidad.Tipo == model.Unidad.MEDIDA) {

                            $self.EvaluaMedidas(unidad.Medidas, definicionPlantilla);
                        } else {

                            $self.EvaluaMedidas(unidad.MedidasNumerador, definicionPlantilla);
                            $self.EvaluaMedidas(unidad.MedidasDenominador, definicionPlantilla);
                        }
                        var unidadDocumento: model.Unidad = $self.$abaxXBRLService.buscarUnidadEnDocumento(unidad);
                        if (!unidadDocumento) {
                            $self.Unidades[aliasUnidad] = $self.$abaxXBRLService.ObtenerIdUnidadEquivalente(unidad);
                        } else {
                            $self.Unidades[aliasUnidad] = unidadDocumento.Id;
                        }
                    }
                }

            } catch (excepsion) {

                console.error("Error al inicializar la configuración del hipercubo: " + $self.$scope.xbrlIdTablaHipercubo);
                throw excepsion;
            }
        }
        /**
        * Evalua los identificadores de las variables de medida y si existen los asigna a cada medida dada.
        * @param medidas Arreglo con las medidas a evaluar.
        * @param definicionPlantilla Definición de la plantilla de la que se obtendran las variables.
        **/
        private EvaluaMedidas(medidas: Array<model.Medida>, definicionPlantilla: model.DefinicionDePlantillaXbrl): void {

            var indexMedida: number;
            for (indexMedida = 0; indexMedida < medidas.length; indexMedida++) {

                var medida = medidas[indexMedida];
                var nombreEvaluado = definicionPlantilla.obtenerVariablePorId(medida.Nombre);
                var espacioNombresEvaluado = definicionPlantilla.obtenerVariablePorId(medida.EspacioNombres);
                if (nombreEvaluado) {

                    medida.Nombre = nombreEvaluado;
                } else {

                    throw new Error("No existe la variable con el nombre \"" + medida.Nombre + "\" para la unidad configurada");
                }
                if (espacioNombresEvaluado) {

                    medida.EspacioNombres = espacioNombresEvaluado;
                } else {

                    throw new Error("No existe la variable con el nombre \"" + medida.EspacioNombres + "\" para la unidad configurada");
                }
                medida.Etiqueta = null;
            }
        }
        /**
        * Obtiene el arreglo de dimensiones para un diccionario dado.
        * @param dicccionarioMiembrosDimension Diccionario con los alias de los miembros por dimension.
        * @return Lista con los  miembros dimensionales para los alias indicados.
        **/
        private obtenArregloDimensionesDiccionario(dicccionarioMiembrosDimension: { [aliasDimension: string]: string }): Array<model.DimensionInfo> {

            var $self = this;
            var resultado: Array<model.DimensionInfo> = [];
            var aliasDimension: string;
            var aliasMiembro: string;
            for (aliasDimension in dicccionarioMiembrosDimension) {

                if (!$self.MiembrosDimensiones[aliasDimension]) {

                    throw new Error("No existen elementos para la dimension \"" + aliasDimension + "\"");
                }

                aliasMiembro = dicccionarioMiembrosDimension[aliasDimension];

                if (!$self.MiembrosDimensiones[aliasDimension][aliasMiembro]) {

                    throw new Error("No existen un miembro con el alias \"" + aliasMiembro + "\" en la dimension \"" + aliasDimension + "\"");
                }
                resultado.push($self.MiembrosDimensiones[aliasDimension][aliasMiembro]);
            }

            return resultado;
        }

        /**
        * Crea un contexto con la plantilla indicada y el conjunto de dimensiones dado.
        * @param nombrePlantillaContexto Identificador de la plantilla de contexto que será utilizada para generar el nuevo contexto.
        * @param miemborsDimension Configuración de los miembros de dimensión a utilizar para generar el nuevo contexto.
        * @return Identificador del contexto obtenido.
        **/
        private obtenIdContexto(nombrePlantillaContexto: string, miembrosDimension: model.XbrlConfiguracionMiembrosDimensionContexto, crearContexto?: boolean): string {

            var idContexto: string = null;
            var $self = this;
            var idsContextos = $self.obtenIdsContextos(nombrePlantillaContexto, miembrosDimension, crearContexto);
            if (idsContextos.length > 0) {

                idContexto = idsContextos[0];
            }
            return idContexto;
        }

        /**
        * Crea un contexto con la plantilla indicada y el conjunto de dimensiones dado.
        * @param nombrePlantillaContexto Identificador de la plantilla de contexto que será utilizada para generar el nuevo contexto.
        * @param miemborsDimension Configuración de los miembros de dimensión a utilizar para generar el nuevo contexto.
        * @return Identificador del contexto obtenido.
        **/
        private obtenIdsContextos(nombrePlantillaContexto: string, miembrosDimension: model.XbrlConfiguracionMiembrosDimensionContexto, crearContexto?: boolean): Array<string> {

            var $self = this;
            var plantillaContexto: model.PlantillaContexto;
            if (nombrePlantillaContexto) {

                plantillaContexto = $self.PlantillasContextos[nombrePlantillaContexto];
                if (!plantillaContexto) {

                    throw new Error("No existe una definición de plantilla de contexto con el nombre \"" + nombrePlantillaContexto + "\".");
                }
            }

            var arregloGruposDimensiones: Array<string> = plantillaContexto ? [plantillaContexto.NombreGrupoDimensionesIniciales] : [];

            if (crearContexto == undefined || crearContexto == null) {
                crearContexto = true;
            }

            if (miembrosDimension && miembrosDimension.gruposDimensiones && miembrosDimension.gruposDimensiones.length > 0) {

                miembrosDimension.gruposDimensiones = arregloGruposDimensiones.concat(miembrosDimension.gruposDimensiones);
            }
            var miembros: model.XbrlConfiguracionMiembrosDimensionContexto =
                new model.XbrlConfiguracionMiembrosDimensionContexto().deserialize(miembrosDimension);

            var valoresDimension: Array<model.DimensionInfo> =
                miembros.obtenArregloMiembrosDimension($self.MiembrosDimensiones, $self.DiccionarioGrupoDimensionMiembro);
            var filtro: model.FiltroHechosDto = plantillaContexto ? plantillaContexto.generaFiltroHechos() : new model.FiltroHechosDto();
            filtro.ConjuntosExactosDimensiones = [];

            if (miembrosDimension.dimensionesGenerarMiembros && miembrosDimension.dimensionesGenerarMiembros.length > 0) {

                for (var indexDimensionGenerar = 0; indexDimensionGenerar < miembrosDimension.dimensionesGenerarMiembros.length; indexDimensionGenerar++) {

                    var aliasDimensionGenerar = miembrosDimension.dimensionesGenerarMiembros[indexDimensionGenerar];
                    var plantillaDimension: model.PlantillaDimensionInfo = $self.$config.TemplatesDimensiones[aliasDimensionGenerar];
                    var miembroGenerar = new model.DimensionInfo().deserialize(plantillaDimension);
                    valoresDimension.push(miembroGenerar);
                }
            }
            if (plantillaContexto && plantillaContexto.ValoresDimension) {

                valoresDimension = plantillaContexto.generaConjuntoDimensiones(valoresDimension);
            }

            if (miembros.exactas) {

                filtro.ConjuntosExactosDimensiones = [valoresDimension];
            } else {

                filtro.ConjuntosParcialesDimensiones = [valoresDimension];
            }

            var contextosExistentes: Array<string> = $self.$abaxXBRLService.obtenIdsContextosPorFiltro(filtro);
            var contexto: model.Contexto;
            var idContexto: string;
            if (!contextosExistentes || contextosExistentes.length == 0) {

                contextosExistentes = [];
                if (crearContexto) {

                    contexto = new model.Contexto().deserialize(plantillaContexto);
                    contexto.ValoresDimension = plantillaContexto.generaConjuntoDimensiones(valoresDimension);
                    if (miembrosDimension.dimensionesGenerarMiembros && miembrosDimension.dimensionesGenerarMiembros.length > 0) {

                        $self.evaluaDimensionesVirtuales(miembrosDimension.dimensionesGenerarMiembros, contexto);
                    }
                    contexto.Id = nombrePlantillaContexto + abaxXBRL.utils.UUIDUtils.generarUUID();
                    $self.$abaxXBRLService.inyectarContextoADocumentoInstancia(contexto);
                    $self.evaluaContexto(contexto);
                    contextosExistentes.push(contexto.Id);
                }
            }
            return contextosExistentes;
        }

        /**
        * Genera un arreglo de dimensiones con las dimensiones del contexto remplazando o agregando los miembros
        * dimensionales incluidos en el arreglo "dimensionesReplazar".
        * @param Arreglo con las dimensiones que se quieren remplazar o agregar a la definición del contexto.
        * @return Arreglo con las dimensiónes definidas en el contexto más las dimensiones asignadas en el parametro.
        **/
        private evaluaDimensionesVirtuales(dimensionesVirtuales: Array<string>, contexto: model.Contexto): void {

            var dimensiones: Array<model.DimensionInfo> = [];
            var $self = this;
            var miembrosAgrupar: Array<model.DimensionInfo> = contexto.ContieneInformacionDimensional ? contexto.ValoresDimension :
                contexto.Entidad.ContieneInformacionDimensional ? contexto.Entidad.ValoresDimension : [];
            var diccionarioMiembros: { [aliasDimension: string]: string } = {};
            var miembrosInvalidos = new Array<model.DimensionInfo>();
            for (var indexMiembro = 0; indexMiembro < miembrosAgrupar.length; indexMiembro++) {

                var miembroItera = miembrosAgrupar[indexMiembro];
                var aliasDimension = $self.DiccionarioDimensionesAlias[miembroItera.QNameDimension];
                var idMiembro = miembroItera.Explicita ? miembroItera.QNameItemMiembro : miembroItera.ElementoMiembroTipificado;
                var miembroValido = false;
                if (idMiembro) {
                    var aliasMiembro = $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro];
                    if (aliasMiembro) {

                        diccionarioMiembros[aliasDimension] = aliasMiembro;
                        miembroValido = true;
                    }
                }

                if (!miembroValido) {

                    miembrosInvalidos.push(miembroItera);
                }
            }

            for (var indexMiembrosInvalidos = 0; indexMiembrosInvalidos < miembrosInvalidos.length; indexMiembrosInvalidos++) {

                var miembroInvalido = miembrosInvalidos[indexMiembrosInvalidos];
                var indexEliminar = miembrosAgrupar.indexOf(miembroInvalido);
                if (indexEliminar != -1) {

                    miembrosAgrupar.splice(indexEliminar, 1);
                }
            }

            for (var indexDimensionVirtual = 0; indexDimensionVirtual < dimensionesVirtuales.length; indexDimensionVirtual++) {

                var aliasDimensionVirtual: string = dimensionesVirtuales[indexDimensionVirtual];
                if (!diccionarioMiembros[aliasDimensionVirtual]) {

                    var miembroGenerado: model.DimensionInfo = $self.creaMiembroDimension(aliasDimensionVirtual);
                    var idMiembro = miembroGenerado.Explicita ? miembroGenerado.QNameItemMiembro : miembroGenerado.ElementoMiembroTipificado;
                    var aliasMiembro = $self.DiccionarioMiemborsDimensionAlias[aliasDimensionVirtual][idMiembro];
                    diccionarioMiembros[aliasDimensionVirtual] = aliasMiembro;
                    miembrosAgrupar.push(miembroGenerado);
                }
            }
            $self.agrupaDimensiones(diccionarioMiembros);
        }
        /**
        * Crea un grupo con todos los miembros del listado.
        * @param miembrosAgrupar Lista con los miembros que se pretenden agrupar.
        **/
        private agrupaMiembrosLista(miembrosAgrupar: Array<model.DimensionInfo>): void {
            var $self = this;
            var diccionarioMiembros: { [aliasDimension: string]: string } = {};
            for (var indexMiembro = 0; indexMiembro < miembrosAgrupar.length; indexMiembro++) {

                var miembroItera = miembrosAgrupar[indexMiembro];
                var aliasDimension = $self.DiccionarioDimensionesAlias[miembroItera.QNameDimension];
                var idMiembor = miembroItera.Explicita ? miembroItera.QNameItemMiembro : miembroItera.ElementoMiembroTipificado;
                var aliasMiembro = $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembor];
                diccionarioMiembros[aliasDimension] = aliasMiembro;
            }

            $self.agrupaDimensiones(diccionarioMiembros);
        }

        /**
        * Evalua el cotexto dado para asignarlo en las plantillas en las que aplica.
        * @param contexto Contexto a evaluar.
        **/
        private evaluaContextoPlantilla(contexto: model.Contexto): void {

            var $self = this;
            var nombrePlantilla: string;
            var plantilla: model.PlantillaContexto;
            var filtro: model.FiltroHechosDto;
            var idsContextosEncontrados: Array<string>;
            for (nombrePlantilla in $self.PlantillasContextos) {

                plantilla = $self.PlantillasContextos[nombrePlantilla];
                if (plantilla.ContextosRelacionados.indexOf(contexto.Id) == -1) {

                    filtro = plantilla.generaFiltroHechos();
                    filtro.IdContexto = [contexto.Id];
                    idsContextosEncontrados = $self.$abaxXBRLService.obtenIdsContextosPorFiltro(filtro);
                    if (idsContextosEncontrados.indexOf(contexto.Id) != -1) {

                        plantilla.ContextosRelacionados.push(contexto.Id);
                    }
                }
            }
        }

        /**
        * Crea un nuevo miembro para la dimension indicada.
        * @param aliasDimension Identificador de la dimension.
        * @return Miembro de la dimensión generada.
        **/
        private creaMiembroDimension(aliasDimension: string): model.DimensionInfo {

            var $self = this;
            var plantillaDimension: model.PlantillaDimensionInfo = $self.$config.TemplatesDimensiones[aliasDimension];
            var $util = shared.service.AbaxXBRLUtilsService;
            if (!plantillaDimension) {

                throw new Error("No existe la definición para la dimension \"" + aliasDimension + "\"");
            }
            var dimension = new model.DimensionInfo().deserialize(plantillaDimension);
            var indexNombre: number = 2;
            var nombreXml = $util.xmlEncode(plantillaDimension.EtiquetaNuevoElemento);
            var idMiembro: string = plantillaDimension.obtenXbrlNombreMiembro(nombreXml);
            while ($self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro]) {

                idMiembro = plantillaDimension.obtenXbrlNombreMiembro(nombreXml + indexNombre);
                indexNombre++;
            }
            if (dimension.Explicita) {

                dimension.IdItemMiembro = plantillaDimension.obtenNombreMiembro(idMiembro);
                dimension.QNameItemMiembro = idMiembro;

            } else {

                dimension.ElementoMiembroTipificado = idMiembro;
            }
            $self.evaluaDimensionMiembro(dimension);
            return dimension;
        }
        /**
         * Retorna el alias para el miembro de la dimensión dado.
         * @param qNameDimension Identificador del nombre de la dimensión.
         * @param Alias de la dimension dada.
         */
        public obtenAliasDimension(qNameDimension: string): string {

            var $self = this;
            return $self.DiccionarioDimensionesAlias[qNameDimension];
        }
        /**
         * Obtiene el alieas para el miembro dado.
         * @param qNameDimension Qname de la dimension requerida.
         * @param idMiembro Identificador del miembro.
         */
        public obtenAliasMiembro(qNameDimension: string, idMiembro: string): string {
            var $self = this;
            var aliasDimension = $self.DiccionarioDimensionesAlias[qNameDimension];
            return $self.DiccionarioMiemborsDimensionAlias[aliasDimension] ? $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro] : null;
        }

        /**
        * Elimina el miembro de la dimención indicada.
        * @param aliasDimension Identificador de la dimensión.
        * @param aliasMiembro Identificador del miembro de la dimensión que se pretende eliminar.
        **/
        private eliminaMiembroDimension(aliasDimension: string, aliasMiembro: string): ng.IPromise<model.DimensionInfo> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<model.DimensionInfo>();
            setTimeout(function () {
                try {
                    var dimension: model.DimensionInfo = $self.MiembrosDimensiones[aliasDimension] ? $self.MiembrosDimensiones[aliasDimension][aliasMiembro] : null;
                    if (!dimension) {

                        $deferred.resolve(null);
                        return $deferred.promise;
                    }

                    var filtro: model.FiltroHechosDto = new model.FiltroHechosDto().deserialize($self.$config.FiltroCargaInicial);
                    var hechosIds: Array<string>;
                    var contextosIds: Array<string>;
                    var index: number;
                    var nombrePlantilla: string;
                    var indexEliminar: number;
                    var contextoId: string;
                    var aliasGrupo: string;
                    var $documentoInstancia = $self.$abaxXBRLService.getDocumentoInstancia();
                    filtro.ConjuntosExactosDimensiones = [];
                    filtro.ConjuntosParcialesDimensiones = [[dimension]];
                    hechosIds = $self.$abaxXBRLService.buscaHechosPorFiltro(filtro);
                    contextosIds = $self.$abaxXBRLService.obtenIdsContextosHechos(hechosIds);

                    for (index = 0; index < hechosIds.length; index++) {

                        var idHecho = hechosIds[index];
                        var hecho = $documentoInstancia.HechosPorId[idHecho];
                        var idConcepto = hecho.IdConcepto;
                        $self.ConceptoFormulasReevaluar[idConcepto] = true;
                        $self.$abaxXBRLService.eliminarHechoDeDocumentoInstanciaPorId(idHecho);
                    }
                    for (index = 0; index < contextosIds.length; index++) {

                        contextoId = contextosIds[index];
                        for (nombrePlantilla in $self.PlantillasContextos) {

                            indexEliminar = $self.PlantillasContextos[nombrePlantilla].ContextosRelacionados.indexOf(contextoId);
                            if (indexEliminar != -1) {

                                $self.PlantillasContextos[nombrePlantilla].ContextosRelacionados.splice(indexEliminar, 1);
                            }
                        }
                        $self.$abaxXBRLService.eliminarContextoDeDocumentoInstancia(contextoId);
                    }
                    var listaAliasGrupos: Array<string> = $self.DiccionarioDimensionMiembroGrupo[aliasDimension][aliasMiembro];
                    if (listaAliasGrupos) {
                        for (index = 0; index < listaAliasGrupos.length; index++) {

                            aliasGrupo = listaAliasGrupos[index];
                            if ($self.DiccionarioGrupoDimensionMiembro[aliasGrupo] != undefined) {

                                $self.DiccionarioGrupoDimensionMiembro[aliasGrupo] = undefined;
                                delete $self.DiccionarioGrupoDimensionMiembro[aliasGrupo];
                            }
                        }
                        $self.DiccionarioDimensionMiembroGrupo[aliasDimension][aliasMiembro] = undefined;
                        delete $self.DiccionarioDimensionMiembroGrupo[aliasDimension][aliasMiembro];
                    }
                    var idMiembro = dimension.Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
                    if ($self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro]) {

                        $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro] = undefined;
                        delete $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro]
                    }
                    if ($self.MiembrosDimensiones[aliasDimension][aliasMiembro]) {

                        $self.MiembrosDimensiones[aliasDimension][aliasMiembro] = undefined;
                        delete $self.MiembrosDimensiones[aliasDimension][aliasMiembro];
                    }
                    $deferred.resolve(dimension);
                } catch (causa) {

                    console.error(causa);
                    $deferred.reject(causa);
                }
            });
            return $deferred.promise;
        }

        /**
        * Evalua el contexto indicado para asignar sus elementos dimensionales en los diccionarios correspondientes.
        * @param contexto Contexto que será evaluado.
        **/
        private evaluaContexto(contexto: model.Contexto): void {

            var $self = this;
            var index: number;
            var valoresDimension = [];
            var dimension: model.DimensionInfo;
            var qNameDimension: string;
            var idMiembro: string;
            var aliasDimension: string;
            var aliasMiembro: string;

            if (contexto.ContieneInformacionDimensional) {

                valoresDimension = contexto.ValoresDimension;
            } else if (contexto.Entidad.ContieneInformacionDimensional) {

                valoresDimension = contexto.Entidad.ValoresDimension;
            }
            if (valoresDimension.length == 0) {

                return;
            }
            var agrupacionMiembrosDimension: { [aliasDimension: string]: string } = {};
            for (index = 0; index < valoresDimension.length; index++) {

                dimension = valoresDimension[index];
                $self.evaluaDimensionMiembro(dimension);
                qNameDimension = dimension.QNameDimension;
                idMiembro = dimension.Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
                aliasDimension = $self.DiccionarioDimensionesAlias[qNameDimension];
                if (!aliasDimension) {

                    throw new Error("No fue definido un alias para la dimensión \"" + qNameDimension + "\"");
                }
                if (!$self.DiccionarioMiemborsDimensionAlias[aliasDimension]) {

                    throw new Error("No existe una definición para el alias \"" + aliasDimension + "\" correspondiente a la dimensión \"" + qNameDimension + "\".");
                }
                aliasMiembro = $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro];
                if (!aliasMiembro) {

                    throw new Error("No existe un alias para el miembro \"" + idMiembro + "\" en la dimension \"" + aliasDimension + "\"");
                }
                if (!agrupacionMiembrosDimension[aliasDimension]) {
                    agrupacionMiembrosDimension[aliasDimension] = aliasMiembro;
                }
            }
            $self.agrupaDimensiones(agrupacionMiembrosDimension);
            $self.evaluaContextoPlantilla(contexto);
        }

        /**
        * Agrega el miembro de la dimensión a los diccionarios de agrupación de elementos.
        * @param dimension Dimensión a evaluar.
        **/
        private evaluaDimensionMiembro(dimension: model.DimensionInfo): void {

            var $self = this;
            var qNameDimension = dimension.QNameDimension;
            var idMiembro: string = dimension.Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
            var aliasDimension: string = $self.DiccionarioDimensionesAlias[qNameDimension];
            if (!aliasDimension) {

                return;
            }
            var aliasMiembro: string = $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro];
            if (!aliasMiembro) {

                $self.dimensionAliasIndex++;
                aliasMiembro = "Miembro_" + $self.dimensionAliasIndex++;
                $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro] = aliasMiembro;
            }
            if (!$self.MiembrosDimensiones[aliasDimension][aliasMiembro]) {

                $self.MiembrosDimensiones[aliasDimension][aliasMiembro] = dimension;
            }
        }
        /**
        * Evalua si un miembro esta agrupado por los elmentos dados.
        * @param aliasDimension Identificador de la dimension.
        * @param aliasMiembro Identificador del miembro.
        * @param agrupadoPor Diccionario con los miembros de otras dimensiones por los que se pretende agrupar.
        * @return Si esta o no agrupado por las dimensiones dadas.
        **/
        private esMiembroAgrupadoPor(aliasDimension: string, aliasMiembro: string, agrupadosPor: { [aliasDimension: string]: string }): boolean {

            var $self = this;
            var indexGrupo: number;
            var nombreGrupo: string;
            var miembrosGrupo: { [aliasDimension: string]: string };
            var indexGrupo: number;
            var aliasDimensionAgrupar: string;
            var aliasMiembroAgrupar: string;
            var aliasMiembroGrupo: string;
            var grupoCoincide: boolean;
            var existenCoincidencias: boolean = false;
            var nombresGrupos: Array<string> = $self.DiccionarioDimensionMiembroGrupo[aliasDimension][aliasMiembro];
            if (nombresGrupos) {

                for (indexGrupo = 0; indexGrupo < nombresGrupos.length; indexGrupo++) {

                    nombreGrupo = nombresGrupos[indexGrupo];
                    miembrosGrupo = $self.DiccionarioGrupoDimensionMiembro[nombreGrupo];
                    if (!miembrosGrupo) {
                        console.log("No existe un grupo definido con el nombre: [" + nombreGrupo + "] para la dimensión [" + aliasDimension + "] y miembro [" + aliasMiembro + "].");
                        continue;                        
                    }
                    grupoCoincide = true;
                    for (aliasDimensionAgrupar in agrupadosPor) {

                        aliasMiembroAgrupar = agrupadosPor[aliasDimensionAgrupar];
                        aliasMiembroGrupo = miembrosGrupo[aliasDimensionAgrupar];
                        if (!aliasMiembroGrupo || aliasMiembroGrupo != aliasMiembroAgrupar) {

                            grupoCoincide = false;
                            break;
                        }
                    }
                    if (grupoCoincide) {

                        existenCoincidencias = true;
                        break;
                    }
                }
            }
            return existenCoincidencias;
        }

        /**
        * Retorna un listado con los miembros existentes de una dimensión en particular.
        * @param aliasDimension Identificador de la dimensión requerida.
        * @param agrupadosPor Diccionarios con los miembros de cada dimensión por la que se quiere agrupar.
        * @return Lista con los identificadores de los miembros existentes en esa dimensión.
        **/
        private obtenMiembrosDimension(aliasDimension: string, agrupadosPor?: { [aliasDimension: string]: string }): Array<string> {

            var $self = this;
            var listaMiembros: Array<string> = [];
            var aliasMiembro: string;
            var grupos: Array<string>;
            var nombreGrupo: string;
            var miembrosGrupo: { [aliasDimension: string]: string };
            var indexGrupo: number;
            var aliasDimensionAgrupar: string;
            var aliasMiembroAgrupar: string;
            var aliasMiembroGrupo: string;
            var grupoCoincide: boolean;

            for (aliasMiembro in $self.MiembrosDimensiones[aliasDimension]) {

                if (agrupadosPor && $self.esMiembroAgrupadoPor(aliasDimension, aliasMiembro, agrupadosPor)) {

                    listaMiembros.push(aliasMiembro);
                } else {

                    listaMiembros.push(aliasMiembro);
                }
            }

            return listaMiembros;
        }


        /**
        * Obtiene las dimensiones relacionadas al miembro indicado.
        * @param aliasDimension Identificador de la dimensión de referencia.
        * @param aliasMiembro Identificadoor del miembro de referencia.
        * @param dimensionesRequeridas Lista con las dimensiones de las que se obtendran los miembros relasionados al miembrod e referencia.
        **/
        private obtenElementosDimensionesRelacionados(aliasDimensionReferencia: string, aliasMiembroReferencia: string, dimensionesRequeridas: Array<string>): { [aliasDimension: string]: Array<string> } {

            var $self = this;
            var resultado: { [aliasDimension: string]: Array<string> } = {};
            var grupos: Array<string>;
            var nombreGrupo: string;
            var index: number;
            var diccionarioGrupo: { [aliasDimension: string]: string };
            var indexDimensiones: number;
            var dimensionRequerida: string;
            var miembroDimensionRequerida: string;

            if ($self.DiccionarioDimensionMiembroGrupo[aliasDimensionReferencia] && $self.DiccionarioDimensionMiembroGrupo[aliasDimensionReferencia][aliasMiembroReferencia]) {

                grupos = $self.DiccionarioDimensionMiembroGrupo[aliasDimensionReferencia][aliasMiembroReferencia];
                for (index = 0; index < grupos.length; index++) {

                    nombreGrupo = grupos[index];
                    diccionarioGrupo = $self.DiccionarioGrupoDimensionMiembro[nombreGrupo];
                    for (indexDimensiones = 0; indexDimensiones < dimensionesRequeridas.length; indexDimensiones++) {

                        dimensionRequerida = dimensionesRequeridas[indexDimensiones];
                        if (dimensionRequerida) {

                            miembroDimensionRequerida = diccionarioGrupo[dimensionRequerida];
                            if (miembroDimensionRequerida) {

                                if (!resultado[dimensionRequerida]) {

                                    resultado[dimensionRequerida] = [];
                                }
                                if (resultado[dimensionRequerida].indexOf(miembroDimensionRequerida) == -1) {

                                    resultado[dimensionRequerida].push(miembroDimensionRequerida);
                                }
                            }
                        }
                    }
                }
            }

            return resultado;
        }

        /**
        * Genera el nombre del grupo en base al diccionario de dimensiones.
        * @param elementosDimension Elementos de dimension con los que se formará el grupo.
        * @return Nombre del grupo.
        **/
        private generaNombreGrupo(elementosDimension: { [aliasDimension: string]: string }): string {

            var $self = this;
            var aliasDimension: string;
            var aliasMiembro: string;
            var nombreGrupo: string = "";
            var index: number;

            for (index = 0; index < $self.ListaDimensionesHipercubo.length; index++) {

                var aliasDimension = $self.ListaDimensionesHipercubo[index];
                if (elementosDimension[aliasDimension]) {

                    aliasMiembro = elementosDimension[aliasDimension];
                    nombreGrupo += ',"' + aliasDimension + '": "' + aliasMiembro.replace("\"", "&#38;") + '"';
                }
            }
            nombreGrupo = '{' + nombreGrupo.substring(1); + '}';
            return nombreGrupo;
        }

        /**
        * Agrupa un conjunto de elementos de dimensiones para su uso posterior.
        * @param elementosDimension  Diccionario con los elementos de las dimensiones que serán agrupados.
        **/
        public agrupaDimensiones(elementosDimension: { [aliasDimension: string]: string }): string {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var grupo: any;
            var index: number;
            var existeGrupo: boolean;
            var nombreGrupo = $self.generaNombreGrupo(elementosDimension);
            var arreglo: Array<string>;
            var arreglosGrupos: Array<Array<string>> = [];
            var diccionarioGrupo: { [aliasDimension: string]: string } = $self.DiccionarioGrupoDimensionMiembro[nombreGrupo];

            if (diccionarioGrupo) {

                return nombreGrupo;
            }

            diccionarioGrupo = {};

            if (elementosDimension) {

                var aliasDimension: string;
                var aliasMiembro: string;
                for (aliasDimension in elementosDimension) {

                    aliasMiembro = elementosDimension[aliasDimension];

                    if (!aliasMiembro && !$self.MiembrosDimensiones[aliasDimension][aliasMiembro]) {
                        var texto = "No existe el miembro \"" + aliasMiembro + "\" en la dimension \"" + aliasDimension + "\" ";
                        throw new Error(texto);
                    }

                    if (!$self.DiccionarioDimensionMiembroGrupo[aliasDimension]) {

                        $self.DiccionarioDimensionMiembroGrupo[aliasDimension] = {};
                    }

                    if (!$self.DiccionarioDimensionMiembroGrupo[aliasDimension][aliasMiembro]) {

                        $self.DiccionarioDimensionMiembroGrupo[aliasDimension][aliasMiembro] = [];
                    }
                    arreglosGrupos.push($self.DiccionarioDimensionMiembroGrupo[aliasDimension][aliasMiembro]);
                    diccionarioGrupo[aliasDimension] = aliasMiembro;
                }

                $self.DiccionarioGrupoDimensionMiembro[nombreGrupo] = diccionarioGrupo;

                for (index = 0; index < arreglosGrupos.length; index++) {

                    arreglo = arreglosGrupos[index];
                    if (arreglo.indexOf(nombreGrupo) == -1) {

                        arreglo.push(nombreGrupo);
                    }
                }
            }

            return nombreGrupo;
        }
        /**
        * Obtiene el valor decodificado de XML sin los prefijos y subfijos XBRL del miembro de la dimensión.
        * @param dimension Miembro de la dimension del que se pretende obtener el nombre.
        * @return Nombre simple del miembro de esta dimensión.
        **/
        private obtenNombreCrudoDimension(dimension: model.DimensionInfo): string {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var aliasDimension: string = $self.DiccionarioDimensionesAlias[dimension.QNameDimension];
            var plantillaDimension: model.PlantillaDimensionInfo = $self.$config.TemplatesDimensiones[aliasDimension];
            var idMiembro = dimension.Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
            var valorXML: string = plantillaDimension.obtenNombreMiembro(idMiembro);
            var valor: string = $util.xmlDecode(valorXML);
            return valor;
        }
        /**
         * Bandera que indica si existe un miembro con el nombre dado para la dimensión indicada.
         * @param aliasDimension Identificador de la dimensión.
         * @param nombreCrudoMiembro Nombre del miembro buscado.
         * @return Si existe un miembro con el nombre dado para la dimensión indicada.
        **/
        private existeNombreMiembroDimension(aliasDimension: string, nombreCrudoMiembro: string): boolean {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var valorXML: string = $util.xmlEncode(nombreCrudoMiembro);
            var plantillaDimension: model.PlantillaDimensionInfo = $self.$config.TemplatesDimensiones[aliasDimension];
            var idMiembro: string = plantillaDimension.obtenXbrlNombreMiembro(valorXML);
            return $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro] ? true : false;
        }

        /**
        * Actualiza el identificador de una miembro de dimensión en base al nombre porporcionado.
        * @param dimension Definición del miembro de dimensión que se pretende actualizar.
        * @param nombreMiembro Nuevo nombre que sera asingado al miembro de la dimensión.
        * @return Promesa que se resuelve al completarse la tarea.
        **/
        private actualizaNombreMiembroDimension(dimension: model.DimensionInfo, nombreMiembro: string): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            setTimeout(function () {
                try {

                    var aliasDimension: string = $self.DiccionarioDimensionesAlias[dimension.QNameDimension];
                    var newDimension: model.DimensionInfo = new model.DimensionInfo().deserialize(dimension);
                    var nombreCrudoXML: string = $util.xmlEncode(nombreMiembro);
                    var plantillaDimension: model.PlantillaDimensionInfo = $self.$config.TemplatesDimensiones[aliasDimension];
                    var nuevoNombreXbrl: string = plantillaDimension.obtenXbrlNombreMiembro(nombreCrudoXML);
                    var anteriorNombreXbrl: string = dimension.Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
                    var aliasMiembro: string = $self.DiccionarioMiemborsDimensionAlias[aliasDimension][anteriorNombreXbrl];
                    var filtro: model.FiltroHechosDto = new model.FiltroHechosDto().deserialize($self.$config.FiltroCargaInicial);
                    var hechosIds: Array<string>;
                    var contextosIds: Array<string>;
                    var index: number;
                    var indexDimensionContexto: number;
                    var contextoId: string;
                    var nombrePlantilla: string;
                    var indexModificar: number;
                    var contexto: model.Contexto;
                    var elementoDimensionContexto: model.DimensionInfo;
                    var dimensionesContexto: Array<model.DimensionInfo>;
                    if (newDimension.Explicita) {

                        newDimension.IdItemMiembro = nombreCrudoXML;
                        newDimension.QNameItemMiembro = nuevoNombreXbrl;
                    } else {

                        newDimension.ElementoMiembroTipificado = nuevoNombreXbrl;
                    }

                    newDimension = new model.DimensionInfo().deserialize(newDimension);

                    filtro.ConjuntosExactosDimensiones = [];
                    filtro.ConjuntosParcialesDimensiones = [[dimension]];
                    hechosIds = $self.$abaxXBRLService.buscaHechosPorFiltro(filtro);

                    if (hechosIds.length <= 0) {
                        $util.advertencia({ texto: 'Para editar el nombre de la serie, debe existir un hecho.' }).finally(function () {
                            return;
                        });
                    }

                    contextosIds = $self.$abaxXBRLService.obtenIdsContextosHechos(hechosIds);

                    for (index = 0; index < contextosIds.length; index++) {

                        contextoId = contextosIds[index];
                        contexto = $self.$abaxXBRLService.getDocumentoInstancia().ContextosPorId[contextoId];
                        dimensionesContexto = null;
                        if (contexto.ContieneInformacionDimensional) {

                            dimensionesContexto = contexto.ValoresDimension;
                        } else if (contexto.Entidad.ContieneInformacionDimensional) {

                            dimensionesContexto = contexto.Entidad.ValoresDimension;
                        }
                        if (!dimensionesContexto || dimensionesContexto.length == 0) {

                            continue;
                        }
                        for (indexDimensionContexto = 0; indexDimensionContexto < dimensionesContexto.length; indexDimensionContexto++) {

                            elementoDimensionContexto = dimensionesContexto[indexDimensionContexto];
                            if (elementoDimensionContexto.QNameDimension == newDimension.QNameDimension) {

                                if (newDimension.Explicita) {

                                    elementoDimensionContexto.IdItemMiembro = newDimension.IdItemMiembro;
                                    elementoDimensionContexto.QNameItemMiembro = newDimension.QNameItemMiembro;
                                } else {

                                    elementoDimensionContexto.ElementoMiembroTipificado = newDimension.ElementoMiembroTipificado;
                                }

                                dimensionesContexto[indexDimensionContexto] = elementoDimensionContexto.deserialize(newDimension);
                            }
                        }
                    }
                    $self.MiembrosDimensiones[aliasDimension][aliasMiembro] = newDimension;
                    $self.DiccionarioMiemborsDimensionAlias[aliasDimension][nuevoNombreXbrl] = aliasMiembro;
                    $self.DiccionarioMiemborsDimensionAlias[aliasDimension][anteriorNombreXbrl] = undefined;
                    delete $self.DiccionarioMiemborsDimensionAlias[aliasDimension][anteriorNombreXbrl];
                    $deferred.resolve();
                } catch (causaError) {

                    console.error(causaError);
                    $deferred.reject(causaError);
                }
            });
            return $deferred.promise;
        }

        /**
        * Crea el campo de texto correspondiente.
        * @param $elemento Elemento que contienen la representación del campo.
        * @param $plantilla Plantilla que será utilizada para generar el componente.
        **/
        private inicializaCampoEdicionDimension($elemento: JQuery, $plantilla: string, variablesPlantillaXbrl: { [nombre: string]: string }): ng.IPromise<void> {
            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            setTimeout(function () {
                try {

                    var aliasDimension = $elemento.attr("xbrl:alias-dimension");
                    if (!aliasDimension || aliasDimension.length == 0) {

                        throw new Error("No se indicó un alias de dimensión para el campo de edición de dimensiones.");
                    }
                    var aliasMiembro = $elemento.attr("xbrl:alias-miembro");
                    if (!aliasMiembro || aliasMiembro.length == 0) {

                        throw new Error("No se indicó un alias de miembro para el campo de edición de dimensiones [" + aliasDimension + "].");
                    }
                    if (!$self.MiembrosDimensiones[aliasDimension]) {

                        throw new Error("No existe la dimension \2" + aliasDimension + "\" definida dentro del diccionario \"MiembrosDimensiones\" de la directiva.");
                    }

                    var dimension = $self.MiembrosDimensiones[aliasDimension][aliasMiembro];
                    if (!dimension) {

                        throw new Error("No se exite el miembro de la dimensión que se prentende editar en el campo captura [" + aliasDimension + "][" + aliasMiembro + "].");
                    }
                    var valorDimension: string = $self.obtenNombreCrudoDimension(dimension);
                    var idCampoCapturaDimension: string = aliasDimension + '-' + aliasMiembro;
                    var plantillaDimensionInstitucion: string = "" + $plantilla;
                    var variables = angular.copy(variablesPlantillaXbrl);
                    variables["$idCampoCapturaDimension"] = idCampoCapturaDimension;
                    variables["$valorDimension"] = valorDimension;
                    plantillaDimensionInstitucion = $self.remplazaVariablesPlantilla(plantillaDimensionInstitucion, variables);
                    $elemento.html(plantillaDimensionInstitucion);
                    //Agregamos el elemento 
                    var $contenedorCampoTexto = $elemento.find('div.contenedorCampoCapturaDimension');
                    var $botonEliminar = $elemento.find('button.btn-eliminar-dimension');
                    var $contenedorEditor = $contenedorCampoTexto.find('.contenedor-editor');
                    var $contenedorVisor = $contenedorCampoTexto.find('.contenedor-visor');
                    var $campoTextoEditor = $contenedorEditor.find('input');
                    var $etiquetaVisor = $contenedorVisor.find('span.xbrl-visor');
                    var enEditor = false;
                    $campoTextoEditor.data('valorAnterior', $campoTextoEditor.val());
                    //Inicializamos los listeners de los distintos eventos.
                    var mostrarEditor = function (): void {
                        $contenedorVisor.addClass('hide');
                        $contenedorEditor.removeClass('hide');
                        $self.pausarTablaExcel();
                        $campoTextoEditor.focus();
                        $campoTextoEditor.select();
                        enEditor = true;
                    }

                    var mostrarVisor = function (): void {
                        $contenedorVisor.removeClass('hide');
                        $contenedorEditor.addClass('hide');
                        $etiquetaVisor.text($campoTextoEditor.val());
                        if (enEditor) {

                            $self.reanudarTablaExcel();
                        }
                        enEditor = false;
                    }

                    $elemento.data("actualizaValorComponente", function (nuevoValor: string) {

                        $campoTextoEditor.val(nuevoValor);
                        $etiquetaVisor.text($campoTextoEditor.val());
                        $campoTextoEditor.data('valorAnterior', nuevoValor);
                        mostrarVisor();
                    });


                    var manejarBlur = function () {
                        var valorAnterior: string = $campoTextoEditor.data('valorAnterior');
                        var valorActual: string = $campoTextoEditor.val();

                        if (!valorAnterior) {
                            $campoTextoEditor.data('valorAnterior', valorActual);
                        }

                        if (valorAnterior == valorActual) {
                            return;
                        }

                        if (valorAnterior !== valorActual) {
                            if (!valorActual || valorActual.trim().length == 0) {
                                valorActual = valorAnterior;
                                var mensaje = $util.getValorEtiqueta($self.$config.MensajesError["CAMPO_DIMENSION_VACIO"]);
                                $util.advertencia({ texto: mensaje }).finally(function () {
                                    $campoTextoEditor.val(valorActual);
                                    mostrarVisor();
                                });

                            } else {
                                if ($self.existeNombreMiembroDimension(aliasDimension, valorActual)) {

                                    valorActual = valorAnterior;
                                    var mensaje = $util.getValorEtiqueta($self.$config.MensajesError["ELEMENTOS_DIMENSION_DUPLICADOS"]);
                                    $util.advertencia({ texto: mensaje }).finally(function () {
                                        $campoTextoEditor.val(valorActual);
                                        mostrarVisor();
                                    });
                                } else {

                                    $self.actualizaNombreMiembroDirectiva(aliasDimension, aliasMiembro, valorActual);
                                    $campoTextoEditor.data('valorAnterior', valorActual);
                                    //$self.actualizaNombreMiembroDimension(dimension, valorActual).then(function () {

                                    //    valorAnterior = valorActual;
                                    //    $campoTextoEditor.data('valorAnterior', valorActual);
                                    //    mostrarVisor();
                                    //});
                                }
                            }
                        } else {
                            mostrarVisor();
                        }
                    }

                    var eliminarMiembro = function (): void {

                        $self.eliminaMiembroDimensionDirectiva(aliasDimension, aliasMiembro);
                    }
                    $contenedorVisor.dblclick(mostrarEditor);

                    $campoTextoEditor.blur(manejarBlur);
                    $botonEliminar.click(eliminarMiembro);

                    $deferred.resolve();
                } catch (causaError) {

                    console.error(causaError);
                    $deferred.reject(causaError);
                }
            });

            return $deferred.promise;
        }

        /**
        * Busca los componentes de tipo <xbrl:campo-texto-dimension></xbrl:campo-texto-dimension> para incluir un elemento para la dimensión deseada.
        **/
        private evaluaComponenteXbrlCamposTextoDimension($container: JQuery, variablesPlantillaXbrl: { [nombre: string]: string }): ng.IPromise<void> {

            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            var idTablaHipercubo = $scope.xbrlIdTablaHipercubo;
            var $camposTexto = $container.find('xbrl\\:campo-texto-dimension:not([xbrl\\:evaluado])');
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            var urlTemplate: string = 'ts/templates/template-xbrl-campo-captura-dimension.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
            var $plantilla: JQuery;
            var arregloPromesas: Array<ng.IPromise<void>> = [];
            abaxXBRL.plugins.XbrlPluginUtils.cargarPlantillaYReemplazarVariables(urlTemplate, variablesPlantilla, function (plantilla: JQuery) {
                $plantilla = plantilla;

                $camposTexto.each(function (indexElement: number, element: Element): any {

                    var $element: JQuery = $(element);
                    var promesa = $self.inicializaCampoEdicionDimension($element, $plantilla[0].outerHTML, variablesPlantillaXbrl);
                    arregloPromesas.push(promesa);
                    promesa.then(function () {

                        $element.attr("xbrl:evaluado", "true");
                    });
                });
            }, function (textStatus: any, errorThrown: any) {
                console.log('Ocurrio un error al cargar los campos captura (' + textStatus + '):');
                console.log(errorThrown);
                $deferred.reject(errorThrown);
            }
            );
            $util.getQService().all(arregloPromesas)
                .then(function () { $deferred.resolve() })
                .catch(function (causaError: any) { $deferred.reject(causaError); });
            return $deferred.promise;
        }
        /**
        * Sustituye las variables en el dirccionario por su valor correspondiente en la plantilla dada.
        * @param plantilla Texto donde serán remplazadas las variables.
        * @param variablesPlantilla Diccinario con las variables a remplazar.
        * @return Texto con el valor de las variables remplazado.
        **/
        private remplazaVariablesPlantilla(plantilla: string, variablesPlantilla: { [nombre: string]: string }): string {

            var nombreVariable: string;
            var plantillaAuxiliar: string = "" + plantilla;
            var valorVariable: string;
            var variableEvaluada: string;
            for (nombreVariable in variablesPlantilla) {

                valorVariable = variablesPlantilla[nombreVariable];
                variableEvaluada = nombreVariable.replace(new RegExp("[\\$]", 'g'), "\\$");
                plantillaAuxiliar = plantillaAuxiliar.replace(new RegExp(variableEvaluada, 'g'), valorVariable);
            }

            return plantillaAuxiliar;
        }

        /**
        * Inserta un nodo antes del nodo de referencia.
        * @param referencia Nodo de referencia.
        * @param nodo Nodo que sera agregado antes del nodo de referencia.
        **/
        private agregaNodoAntes(referencia: Node, nodo: Node): void {

            referencia.parentNode.insertBefore(nodo, referencia);
        }
        /**
        * Agrega un nodo despues del nodo de referencia.
        * @param referencia Nodo de referencia
        * @param nodo Nodo que sera agregado despus del nodo de referencia.
        **/
        private agregaNodoDespues(referencia: Node, nodo: Node): void {

            referencia.parentNode.insertBefore(nodo, referencia.nextSibling);

        }
        /**
        * Busca los comentario que contentan el contenido indicado.
        * @param $contenedor Contenedor donde se buscarán los comentarios.
        * @param contenidoComentario Contenido a filtrar.
        * @return Comentarios encontrados.
        **/
        private buscaNodosComentario($contenedor: JQuery, contenidoComentario: string): Array<Node> {

            var nodosEncontrados = new Array<Node>();
            $contenedor.each(function (index: number, element: Element) {

                var iterator: NodeIterator = document.createNodeIterator(element, NodeFilter.SHOW_COMMENT);
                var nodo: Node;
                while (nodo = iterator.nextNode()) {
                    if (nodo.nodeValue.indexOf(contenidoComentario) != -1) {

                        nodosEncontrados.push(nodo);
                    }
                }
            });
            return nodosEncontrados;
        }

        /**
        * Inicializa un miembro del elemento repetición.
        * @param $marcadorRepeat Marcador con los datos de los elementos a repetir.
        **/
        private inicializaMiembroElementoRepeticion($marcadorRepeat: JQuery): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            setTimeout(function () {
                try {

                    $marcadorRepeat.data("xbrl-funcion-agregar", function (aliasMiembro: string): ng.IPromise<void> {

                        var plantilla: string = $marcadorRepeat.data("xbrl-plantilla");
                        var $configuracion: model.XbrlConfiguracionRepiteDimension = $marcadorRepeat.data("xbrl-configuracion");
                        var agrupadosPor: { [aliasDimension: string]: string } = $configuracion.agruparPor;
                        var aliasDimension: string = $configuracion.aliasDimension;
                        var deferredFuncionAgregar = $util.creatPromiseDeferred<void>();

                        if (agrupadosPor && !$self.esMiembroAgrupadoPor(aliasDimension, aliasMiembro, agrupadosPor)) {

                            deferredFuncionAgregar.resolve();
                        } else {

                            var variablesPlantilla: { [nombre: string]: string } = $marcadorRepeat.data("xbrl-variablesPlantilla");
                            var variables = angular.copy(variablesPlantilla);
                            variables[$configuracion.variableAliasMiembro] = aliasMiembro;
                            plantilla = $self.remplazaVariablesPlantilla(plantilla, variables);
                            var $elementoRepeticion: JQuery = $(plantilla);
                            //$elementoRepeticion.removeAttr("xbrl:miembro-elementos-repetir");
                            var idItemRepeticion: string = $configuracion.aliasDimension + '-' + aliasMiembro;
                            $elementoRepeticion.addClass("dimenesion-item-" + idItemRepeticion);

                            var marcaFin: JQuery = $marcadorRepeat.data("marca");
                            marcaFin.before($elementoRepeticion);

                            $self.evaluaComponentes($elementoRepeticion, variables)
                                .then(function () {
                                    deferredFuncionAgregar.resolve();
                                })
                                .catch(function (error) {
                                    console.error(error);
                                    $deferred.reject(error);
                                });

                        }
                        return deferredFuncionAgregar.promise;
                    });

                    var indexMiembro: number;
                    var aliasMiembro: string;
                    var $configuracionAuxiliar: model.XbrlConfiguracionRepiteDimension = $marcadorRepeat.data("xbrl-configuracion");
                    var miembros = $self.obtenMiembrosDimension($configuracionAuxiliar.aliasDimension, $configuracionAuxiliar.agruparPor);
                    var agregar: (aliasMiembro: string, $marcador: JQuery) => ng.IPromise<void> = $marcadorRepeat.data("xbrl-funcion-agregar");
                    var arregloPromesas = new Array<ng.IPromise<any>>();
                    for (indexMiembro = 0; indexMiembro < miembros.length; indexMiembro++) {

                        aliasMiembro = miembros[indexMiembro];
                        arregloPromesas.push(agregar(aliasMiembro, $marcadorRepeat));
                    }

                    $util.getQService().all(arregloPromesas).finally(function () {
                        //$self.reevaluaFormulas();
                        $deferred.resolve();
                    });
                } catch (causaError) {

                    console.error(causaError);
                    $deferred.reject(causaError);
                }
            });
            return $deferred.promise;

        }

        /**
        * Busca los elementos "xbrl:repite-miembros-dimension" y los evalua.
        * @param $container Contenedor sobre el que se buscaran los elementos a evaluar.
        * @param variablesPlantilla Variables a utilziar para remplazar en la plantilla.
        * @return Promesa que se cumple cuando se ha completado la evaluación de los elementos. 
        **/
        private evaluaComponenteXBRLRepiteDimension($container: JQuery, variablesPlantilla: { [nombre: string]: string }): ng.IPromise<void> {


            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            var $listaJQueryElementosRepiteAEvaluar: Array<JQuery> = [];
            var arregloPromesas: Array<ng.IPromise<void>> = [];

            if ($container.is("[xbrl\\:repite-miembros-dimension][xbrl\\:miembro-elementos-repetir]:not([xbrl\\:repeat-evaluado])")) {

                $container.attr("xbrl:repeat-evaluado", "true");
                $listaJQueryElementosRepiteAEvaluar.push($container);
            }

            $container.find('[xbrl\\:repite-miembros-dimension]:not([xbrl\\:miembro-elementos-repetir])')
                .each(function (indexElement: number, element: Element): any {

                    $listaJQueryElementosRepiteAEvaluar.push($(element));
                });

            for (var indexElement: number = 0; indexElement < $listaJQueryElementosRepiteAEvaluar.length; indexElement++) {

                var $elementToRepeat: JQuery = $listaJQueryElementosRepiteAEvaluar[indexElement];
                var aliasDimension: string = $elementToRepeat.attr("xbrl:repite-miembros-dimension");
                var agruparPorAtt: string = $elementToRepeat.attr("xbrl:agrupar-por");
                var agruparPor: { [aliasDimension: string]: string };
                var aliasItemMiembro: string = $elementToRepeat.attr("xbrl:alias-item-miembro");
                if (!aliasItemMiembro) {

                    aliasItemMiembro = "$aliasMiembroRepeat";
                }
                if (agruparPorAtt) {

                    agruparPor = angular.fromJson($self.evaluaAtributoCadenJson(agruparPorAtt));
                }

                var $configuracion: model.XbrlConfiguracionRepiteDimension = new model.XbrlConfiguracionRepiteDimension().deserialize({

                    aliasDimension: aliasDimension,
                    agruparPor: agruparPor,
                    variableAliasMiembro: aliasItemMiembro
                });
                var listaMiembrosRepetir: Array<JQuery> = [$elementToRepeat];
                var grupoRepetir: string = $elementToRepeat.attr("xbrl:grupo-elementos-repetir");
                if (grupoRepetir) {

                    $container.find('[xbrl\\:miembro-elementos-repetir="' + grupoRepetir + '"]')
                        .each(function (index: number, elementoGrupo: Element) {

                            listaMiembrosRepetir.push($(elementoGrupo));
                        });
                }
                for (var indexMiembro: number = 0; indexMiembro < listaMiembrosRepetir.length; indexMiembro++) {

                    var $miembroRepetir: JQuery = listaMiembrosRepetir[indexMiembro];
                    var plantilla: string = $miembroRepetir[0].outerHTML;
                    plantilla = plantilla.replace(new RegExp('xbrl\\:miembro\\-elementos\\-repetir *= *[\'"][\w\d]+[\'"]', 'g'), "");
                    var $marcadorAuxiliar: JQuery = $('<xbrl:marcador-repeat xbrl:alias-dimension="' + $configuracion.aliasDimension + '" / style="display:none;"></xbrl:marcador-repeat>');
                    $marcadorAuxiliar.data("xbrl-plantilla", plantilla);
                    $marcadorAuxiliar.data("xbrl-configuracion", $configuracion);
                    $marcadorAuxiliar.data("xbrl-variablesPlantilla", variablesPlantilla);
                    $marcadorAuxiliar.data("xbrl-id-marcador", abaxXBRL.utils.UUIDUtils.generarUUID());
                    $self.$xbrlHipercubo.append($marcadorAuxiliar);
                    var marca = $('<!--xbrl-repeater: ' + $marcadorAuxiliar.data("xbrl-id-marcador") + '-->');
                    $self.agregaNodoAntes($miembroRepetir[0], marca[0]);
                    $miembroRepetir.remove();
                    $marcadorAuxiliar.data("marca", marca);
                    var promesa = $self.inicializaMiembroElementoRepeticion($marcadorAuxiliar);
                    arregloPromesas.push(promesa);
                }
            }
            $util.getQService().all(arregloPromesas)
                .then(function () {
                    $deferred.resolve()
                })
                .catch(function (causaError: any) {
                    $deferred.reject(causaError);
                });
            return $deferred.promise;
        }
        /**
         * Inicia el evento de agregar un miembro a la dimensión de este hipercubo.
         * @param dimension Miembro de la dimensión que se agrega.
         * @param aliasDimension Alias del miembro de la dimensión que se agrega.
         * @param agruparPor Dimensiones sobre las que se debe grupar.
         */
        public agregarMiembroDimensionDirectiva(aliasDimension: string, agruparPor: { [aliasDimension: string]: string }): ng.IPromise<any> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<any>();
            try {
                var dimension = $self.creaMiembroDimension(aliasDimension);
                var idMiembro: string = dimension.Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
                var aliasMiembro: string = $self.DiccionarioMiemborsDimensionAlias[aliasDimension][idMiembro];
                var arregloPromesas: Array<ng.IPromise<void>> = [];

                if (agruparPor) {

                    agruparPor[aliasDimension] = aliasMiembro;
                    $self.agrupaDimensiones(agruparPor);
                }

                $self.$xbrlHipercubo.find('xbrl\\:marcador-repeat[xbrl\\:alias-dimension="' + aliasDimension + '"]').each(function (indexElementRepeat: number, elementTargetRepeat: Element): any {

                    var $targetRepeat = $(elementTargetRepeat);
                    var agregar: (aliasMiembro: string, $marcador: JQuery) => ng.IPromise<void> = $targetRepeat.data("xbrl-funcion-agregar");
                    var promesaAgregar = agregar(aliasMiembro, $targetRepeat);
                    arregloPromesas.push(promesaAgregar);
                });

                $util.getQService().all(arregloPromesas)
                    .then(function () {

                        $self.reconstrulleTablaExcel();
                        $deferred.resolve();
                        $self.enModificarHipercubo(XbrlEventoHipercubo.CREAR_MIEMBRO, { "dimension": dimension, "aliasDimension": aliasDimension, "agruparPor": agruparPor });
                    }).catch(function (exception) {
                        $deferred.reject(exception);
                    });
            } catch (exception) {
                $deferred.reject(exception);
            }


            return $deferred.promise;

        }
        /**
         * Elimina el miembro indicado.
         * @param aliasDimension Identificador de la dimensión.
         * @param aliasMiembro Alias del miembro.
         */
        public eliminaMiembroDimensionDirectiva(aliasDimension: string, aliasMiembro: string): ng.IPromise<any> {

            var $self = this;
            var $scope = $self.$scope;
            var $deferred = shared.service.AbaxXBRLUtilsService.creatPromiseDeferred<any>();
            var idCampoCapturaDimension: string = aliasDimension + '-' + aliasMiembro;
            $self.eliminaMiembroDimension(aliasDimension, aliasMiembro)
                .then(function (dimension: model.DimensionInfo): void {

                    $self.$xbrlHipercubo.find('.dimenesion-item-' + idCampoCapturaDimension).remove();
                    $('section.sobreTodo .dimenesion-item-' + idCampoCapturaDimension).remove();
                    $self.reevaluaFormulas();
                    $self.marcarPendientePorGuardar()
                    $self.reajustaTamanioCeldasFijas();
                    $deferred.resolve();
                    $self.enModificarHipercubo(XbrlEventoHipercubo.ELIMINAR_MIEMBRO, { "dimension": dimension, "aliasDimension": aliasDimension, "aliasMiembro": aliasMiembro });
                })
                .catch(function (exception) {

                    $deferred.reject(exception);
                });
            return $deferred.promise;
        }
        /**
         * Reevalua las formulas para los conceptos pendientes de evaluar.
         */
        private marcarPendientePorGuardar(): void {

            var $self = this;
            var $abaxService: services.AbaxXBRLServices = $self.$abaxXBRLService;
            var $documentoInstancia: model.DocumentoInstanciaXbrl = $abaxService.getDocumentoInstancia();
            $documentoInstancia.PendienteGuardar = true;
        }

        /**
         * Actualiza el valor del nombre del miembro de la dimensión indicada para el componente.
         * @param aliasDimension Alias de la dimensión.
         * @param aliasMiembro Alias del miembro.
         * @param nuevoValor Nuevo nombre del miembro.
         * @returns Promesa que se resuelve cuando se actualiza el valor del elemento.
         */
        public actualizaNombreMiembroDirectiva(aliasDimension: string, aliasMiembro: string, nuevoValor: string): ng.IPromise<any> {

            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<any>();
            var dimension = $self.MiembrosDimensiones[aliasDimension][aliasMiembro];
            if (!dimension) {

                $deferred.reject(new Error("No se exite el miembro de la dimensión que se prentende editar en el campo captura [" + aliasDimension + "][" + aliasMiembro + "]."));
            } else {
                var dimensionOriginal = angular.copy(dimension);
                $self.actualizaNombreMiembroDimension(dimension, nuevoValor)
                    .then(function () {

                        $self.$xbrlHipercubo.find('xbrl\\:campo-texto-dimension[xbrl\\:alias-dimension="' + aliasDimension + '"][xbrl\\:alias-miembro="' + aliasMiembro + '"]')
                            .each(function (index: number, elemento: Element) {

                                var $elemento = $(elemento);
                                var actualizaValorComponente: (nuevoValor: string) => void = $elemento.data("actualizaValorComponente");
                                actualizaValorComponente(nuevoValor);
                            });
                        $deferred.resolve();
                        $self.enModificarHipercubo(XbrlEventoHipercubo.MODIFICAR_IDENTIFICADOR_MIEMBRO, { "dimension": dimensionOriginal, "aliasDimension": aliasDimension, "aliasMiembro": aliasMiembro, "nuevoValor": nuevoValor });
                    })
                    .catch(function (exception) {

                        $deferred.reject(exception);
                    });
            }
            return $deferred.promise;
        }

        /**
        * Inicializa un componente de tipo agregar miembro dimensión.
        * @param $elementEvaluar Componente a inicializ qar.
        * @param variablesPlantilla Variables a remplazar en la plantilla.
        * @return Promesa que se resuelve cuando se completa la inicialización del componente.
        **/
        private inicializaComponenteAgregarMiemborDimension($elementEvaluar: JQuery, variablesPlantilla: { [nombre: string]: string }): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            setTimeout(function () {

                try {
                    $elementEvaluar.off("click");
                    $elementEvaluar.click(function (evento: BaseJQueryEventObject): any {

                        var aliasDimension: string = $elementEvaluar.attr("xbrl:agregar-miembro-dimension");
                        var agruparPorAtt: string = $elementEvaluar.attr("xbrl:agrupar-por");
                        var agruparPor: { [aliasDimension: string]: string } = null;
                        if (agruparPorAtt) {

                            agruparPor = angular.fromJson($self.evaluaAtributoCadenJson(agruparPorAtt));
                        }
                        $self.marcarPendientePorGuardar();
                        $self.agregarMiembroDimensionDirectiva(aliasDimension, agruparPor);
                    });
                    $deferred.resolve();
                } catch (causaError) {
                    console.error(causaError);
                    $deferred.reject();
                }
            });

            return $deferred.promise;
        }
        /**
        * Incializa los elementos con el componente agergar dimension.
        * @para $container Contenedor de donde se evaluara el componente.
        * @param variablesPlantilla Variables a remplazar en la plantilla.
        * @return Promesa que se cumple cuando se completa la evaluación de los componentes.
        **/
        private evaluaComponenteAgregarMiemborDimension($container: JQuery, variablesPlantilla: { [nombre: string]: string }): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            var $elementosEvaluar = $container.find('[xbrl\\:agregar-miembro-dimension]');
            var arregloPromesas: Array<ng.IPromise<void>> = [];

            $elementosEvaluar.each(function (indexElement: number, element: Element): any {
                var promesa = $self.inicializaComponenteAgregarMiemborDimension($(element), variablesPlantilla);
                arregloPromesas.push(promesa);
            });
            $util.getQService().all(arregloPromesas)
                .then(function () { $deferred.resolve() })
                .catch(function (causaError: any) { $deferred.reject(causaError); });

            return $deferred.promise;
        }

        /**
        * Inicializa un componente de tipo agregar miembro dimensión.
        * @param $elementEvaluar Componente a inicializ qar.
        * @param variablesPlantilla Variables a remplazar en la plantilla.
        * @return Promesa que se resuelve cuando se completa la inicialización del componente.
        **/
        private inicializaComponenteEliminarMiemborDimension($elementEvaluar: JQuery): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            setTimeout(function () {

                try {
                    $elementEvaluar.off("click");
                    $elementEvaluar.click(function (evento: BaseJQueryEventObject): any {

                        try {
                            var aliasDimension: string = $elementEvaluar.attr("xbrl:eliminar-miembro-dimension");
                            var aliasMiembro: string = $elementEvaluar.attr("xbrl:alias-miembro");
                            if (!aliasMiembro) {

                                throw new Error("No se indico el atributo \"xbrl:alias-miembro\" del componente  xbrl:eliminar-miembro-dimension=\"" + aliasDimension + "\".");
                            }
                            $self.eliminaMiembroDimensionDirectiva(aliasDimension, aliasMiembro);
                        } catch (causaError) {

                            console.error(causaError);
                        }
                    });
                    $deferred.resolve();
                } catch (causaError) {
                    console.error(causaError);
                    $deferred.reject();
                }
            });

            return $deferred.promise;
        }

        /**
        * Incializa los elementos con el componente agergar dimension.
        * @para $container Contenedor de donde se evaluara el componente.
        * @param variablesPlantilla Variables a remplazar en la plantilla.
        * @return Promesa que se cumple cuando se completa la evaluación de los componentes.
        **/
        private evaluaComponenteEliminarMiemborDimension($container: JQuery, variablesPlantilla: { [nombre: string]: string }): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            var $elementosEvaluar = $container.find('[xbrl\\:eliminar-miembro-dimension]');
            var arregloPromesas: Array<ng.IPromise<void>> = [];

            $elementosEvaluar.each(function (indexElement: number, element: Element): any {
                var promesa = $self.inicializaComponenteEliminarMiemborDimension($(element));
                arregloPromesas.push(promesa);
            });
            $util.getQService().all(arregloPromesas)
                .then(function () {

                    $deferred.resolve()
                })
                .catch(function (causaError: any) {

                    $deferred.reject(causaError);
                });

            return $deferred.promise;
        }
        /**
        * Evalua un atributo cadena y remplaza caracteres especiales.
        * @param valorAtributo Valor a evaluar.
        * @returnn Valor evaluado.
        **/
        private evaluaAtributoCadenJson(valorAtributo: string): string {

            if (!valorAtributo) {

                return valorAtributo;
            }

            return valorAtributo.replace(new RegExp("[']", 'g'), '"');

        }

        /**
        * Inicializa uno de los componentes de campo captura.
        * @param $elemento Componente de campo captura.
        * @param $plantilla Cadena con el contenido de plantilla del componente.
        * @param varialbesPlantilla Variables de plantilla que serán remplazadas en el componente.
        * @return Promesa que se resuelve cuando se completa la inicialización del componente.
        **/
        private inicializaCampoCapturaHecho($elemento: JQuery, $plantilla: string, variablesPlantilla: { [nombre: string]: string }): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            var definicionPlantilla: model.DefinicionDePlantillaXbrl = $self.$abaxXBRLService.getDefinicionPlantilla();
            setTimeout(function () {
                try {

                    if ($elemento.attr("xbrl:evaluado") != "true") {

                        var $idConcepto: string = $elemento.attr("xbrl:id-concepto");
                        //var idContexto: string = $elemento.attr("xbrl:id-contexto");
                        var $aliasUnidad: string = $elemento.attr("xbrl:alias-unidad");
                        var decimales: string = $elemento.attr("xbrl:decimales");
                        var valorDefault: string = $elemento.attr("xbrl:valor-default");
                        var crearHecho: string = $elemento.attr("xbrl:crear-hecho");
                        var eliminable: string = $elemento.attr("xbrl:eliminable");
                        var soloLectura: string = $elemento.attr("xbrl:solo-lectura");
                        var soloEdicion: string = $elemento.attr("xbrl:solo-edicion");
                        var formula: string = $elemento.attr("xbrl:formula");
                        var plantillaContexto: string = $elemento.attr("xbrl:contexto-plantilla");
                        var miembrosDimension: string = $elemento.attr("xbrl:contexto-miembros-dimension");
                        var gruposDimensiones: string = $elemento.attr("xbrl:contexto-grupos-dimensiones");
                        var dimensionesExactas: string = $elemento.attr("xbrl:contexto-dimensiones-exactas");
                        var attrGenerarMiembrosDimension: string = $elemento.attr("xbrl:contexto-generar-miembros-dimensiones");
                        var valorEtiquetaDefaultAtt: string = $elemento.attr("xbrl:valor-default-etiqueta");
                        var attrAbrirPopup: string = $elemento.attr("xbr:abrir-popup");
                        var cuandoCambia: string = $elemento.attr("xbrl:cuando-cambia");
                        var configuracionBusquedaDimensiones = new model.XbrlConfiguracionMiembrosDimensionContexto();

                        var $atributoscampocaptura: string = $atributoscampocaptura += " xbrl:contexto-plantilla = \"" + plantillaContexto + "\"";

                        if (!$idConcepto) {

                            throw new Error("El atributo xbrl:id-concepto es requerido por el componente <xbrl:campo-captura-hecho-dimension></xbrl:campo-captura-hecho-dimension>");
                        }
                        if (!plantillaContexto) {

                            throw new Error("El atributo xbrl:contexto-plantilla es requerido por el componente <xbrl:campo-captura-hecho-dimension></xbrl:campo-captura-hecho-dimension>");
                        }
                        if (miembrosDimension) {

                            configuracionBusquedaDimensiones = configuracionBusquedaDimensiones.deserialize({ miembrosDimension: angular.fromJson($self.evaluaAtributoCadenJson(miembrosDimension)) });
                            $atributoscampocaptura += ' xbrl:contexto-miembros-dimension="' + miembrosDimension + '"'
                        }
                        if (gruposDimensiones) {

                            configuracionBusquedaDimensiones = configuracionBusquedaDimensiones.deserialize({ gruposDimensiones: angular.fromJson($self.evaluaAtributoCadenJson(gruposDimensiones)) });
                            $atributoscampocaptura += ' xbrl:contexto-grupos-dimensiones="' + gruposDimensiones + '"'
                        }
                        if (dimensionesExactas) {

                            configuracionBusquedaDimensiones = configuracionBusquedaDimensiones.deserialize({ exactas: angular.fromJson($self.evaluaAtributoCadenJson(dimensionesExactas)) });
                            $atributoscampocaptura += ' xbrl:contexto-dimensiones-exactas="' + dimensionesExactas + '"'
                        } else {

                            configuracionBusquedaDimensiones.exactas = true;
                        }
                        if (attrGenerarMiembrosDimension) {

                            configuracionBusquedaDimensiones = configuracionBusquedaDimensiones.deserialize({ dimensionesGenerarMiembros: angular.fromJson($self.evaluaAtributoCadenJson(attrGenerarMiembrosDimension)) });
                            $atributoscampocaptura += ' xbrl:contexto-generar-miembros-dimensiones="' + attrGenerarMiembrosDimension + '"'
                        }
                        var $idContexto = $self.obtenIdContexto(plantillaContexto, configuracionBusquedaDimensiones);

                        if (decimales) {

                            $atributoscampocaptura += ' xbrl:decimales="' + decimales + '"';
                        }
                        if (valorDefault) {

                            $atributoscampocaptura += ' xbrl:valor-default="' + valorDefault + '"';
                        }
                        if (crearHecho) {

                            $atributoscampocaptura += ' xbrl:crear-hecho="' + crearHecho + '"';
                        }
                        if (eliminable) {

                            $atributoscampocaptura += ' xbrl:eliminable="' + eliminable + '"';
                        }
                        if (soloLectura) {

                            $atributoscampocaptura += ' xbrl:solo-lectura="' + soloLectura + '"';
                        }
                        if (soloEdicion) {

                            $atributoscampocaptura += ' xbrl:solo-edicion="' + soloEdicion + '"';
                        }
                        if (formula) {

                            $atributoscampocaptura += ' xbrl:formula="' + formula + '"';
                        }
                        if (attrAbrirPopup) {

                            $atributoscampocaptura += ' xbr:abrir-popup="' + attrAbrirPopup + '"';
                        }
                        if ($aliasUnidad) {

                            var idUnidad = $self.Unidades[$aliasUnidad];
                            if (!idUnidad) {

                                throw new Error("No existe definida una unidad con el alias \"" + $aliasUnidad + "\" ");
                            }
                            $atributoscampocaptura += " xbrl:id-unidad=\"" + idUnidad + "\"";
                            $atributoscampocaptura += " xbrl:alias-unidad=\"" + $aliasUnidad + "\"";
                        }
                        if (cuandoCambia) {

                            $atributoscampocaptura += " xbrl:cuando-cambia=\"" + cuandoCambia + "\"";
                        }
                        if (!valorDefault && valorEtiquetaDefaultAtt) {

                            var valorEtiquetaDefault: { idConcepto: string; rol: string } = angular.fromJson(valorEtiquetaDefaultAtt.replace(new RegExp("[']", "g"), '"'));
                            if (!valorEtiquetaDefault.idConcepto) {
                                throw new Error("El atributo xbrl:valor-default-etiqueta requiere que se indique un identificador de concepto (idConcepto).");
                            }
                            var rol = valorEtiquetaDefault.rol ? valorEtiquetaDefault.rol : model.ConstantesComunes.ROL_ETIQUETA_DEFAULT;
                            var idioma: string  = shared.service.AbaxXBRLUtilsService.getIdiomaActual();
                            var taxonomia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia().Taxonomia;
                            var etiqueta = taxonomia.obtenerEtiquetaDeConcepto(valorEtiquetaDefault.idConcepto, rol, idioma);
                            if (etiqueta) {
                                $atributoscampocaptura += ' xbrl:valor-default="' + etiqueta + '"';
                            }
                        }

                        $atributoscampocaptura += 'xbrl:campo-captura-hecho-dimension="' + $idContexto + '"'
                        variablesPlantilla["$idContexto"] = $idContexto;
                        variablesPlantilla["$idConcepto"] = $idConcepto;
                        variablesPlantilla["$atributoscampocaptura"] = $atributoscampocaptura;
                        var plantillaEvaluada: string = $self.remplazaVariablesPlantilla($plantilla, variablesPlantilla);
                        var $campoCaptura = $(plantillaEvaluada);
                        $elemento.before($campoCaptura);
                        $campoCaptura.xbrlCampoCaptura();
                        $self.reevaluaFormulas();
                        $self.ConceptoFormulasReevaluar[$idConcepto] = true;
                        $campoCaptura.attr("xbrl:evaluado", "true");
                        $elemento.remove();
                    }
                    $deferred.resolve();
                } catch (causaError) {

                    console.error(causaError);
                    $deferred.reject(causaError);
                }
            });
            return $deferred.promise;
        }

        /**
        * Evalua los componentes del tipo campo <xbrl:campo-captura-hecho-dimension>.
        * @param $container Contenedor donde se obtendrán los compontentes.
        * @param variablesPlantilla Variables de plantilla que serán sustituidas en el template.
        * @return Promesa que se cumple cuando se completa la evaluación de los componentes.
        **/
        private evaluaComponenteCampoCapturaHecho($container: JQuery, variablesPlantilla: { [nombre: string]: string }, camposEvaluar?: JQuery): ng.IPromise<void> {

            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            var idTablaHipercubo = $scope.xbrlIdTablaHipercubo;
            var $camposEvaluar: JQuery = camposEvaluar ? camposEvaluar : $container.find('xbrl\\:campo-captura-hecho-dimension:not([xbrl\\:evaluado="true"])');
            var variablesAuxiliar = new Array<{ llave: string; valor: string; }>();
            var urlTemplate: string = 'ts/templates/template-xbrl-campo-captura-hecho-dimension.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
            var arregloPromesas: Array<ng.IPromise<void>> = [];            
            abaxXBRL.plugins.XbrlPluginUtils.cargarPlantillaYReemplazarVariables(urlTemplate, variablesAuxiliar, function (plantilla: JQuery) {

                var $plantilla: string = plantilla[0].outerHTML;
                $camposEvaluar.each(function (indexElement: number, element: Element): any {

                    var $element: JQuery = $(element);
                    var promesa = $self.inicializaCampoCapturaHecho($element, $plantilla, variablesPlantilla);
                    arregloPromesas.push(promesa);
                    promesa.then(function () {

                        $element.remove();
                    });
                });
            }, function (textStatus: any, errorThrown: any) {
                console.log('Ocurrio un error al cargar los campos captura (' + textStatus + '):');
                console.log(errorThrown);
                $deferred.reject(errorThrown);
            }
            );
            $util.getQService().all(arregloPromesas)
                .then(function () {
                    $deferred.resolve();
                    $('xbrl\\:campo-captura:not([xbrl\\:evaluado="true"])').xbrlCampoCaptura();
                })
                .catch(function (causaError: any) {
                    $deferred.reject(causaError);
                });
            return $deferred.promise;
        }


        /**
        * Pausa los componentes de tabla excel.
        **/
        public pausarTablaExcel(): void {

            var $self = this;
            if ($self.$tablasExcel.length > 0) {
                $self.$tablasExcel.xbrlTablaExcel('pausar');
            }
        }
        /**
        * Pausa los componentes de tabla excel.
        **/
        public reanudarTablaExcel(): void {

            var $self = this;
            if ($self.$tablasExcel.length > 0) {
                $self.$tablasExcel.xbrlTablaExcel('reanudar');
            }
        }
        /**
        * Reconstrulle los componentes de tipo tabla excel.
        **/
        public reconstrulleTablaExcel(): void {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            if (!$self.$tablasExcel) {

                $self.$tablasExcel = $self.$xbrlHipercubo.find('table[xbrl\\:tabla-excel]');
            }
            if ($self.$tablasExcel.length > 0) {

                $self.$tablasExcel.each(function (index: number, element: Element) {

                    var $tabla = $(element);
                    if ($tabla.data('tableKeyNavigator')) {

                        $tabla.xbrlTablaExcel('rebuild');
                    } else {

                        $tabla.xbrlTablaExcel('init');
                    }
                    $self.reajustaTamanioCeldasFijas($tabla);
                });
            }
        }
        /**
        * Tarea azincrona que ejecuta el recaluclo del tamaño de las celdas de una tabla con columnas fijas.
        * @param $dinamicContainer Contenedor que será reajustado y donde se buscaran los campo captura no evaluados.
        * @param deferred Tubería que resuelve la promesa retornada cuando se completa la operación.
        * @return Promesa que se resuelve cuando se completa la evaluacón.
        **/
        private reajustaCeltasTablaTask($dinamicContainer: JQuery, deferred?: ng.IDeferred<void>): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred: ng.IDeferred<void> = deferred ? deferred : $util.creatPromiseDeferred<void>();

            if ($self.idIntervaloReajustaTamanioColumnasFijas != undefined && $self.idIntervaloReajustaTamanioColumnasFijas != null) {
                clearInterval($self.idIntervaloReajustaTamanioColumnasFijas);
            }
            $self.idIntervaloReajustaTamanioColumnasFijas = setInterval(function () {
                var camposCaptura = $dinamicContainer.find('xbrl\\:campo-captura-hecho-dimension:not([xbrl\\:evaluado="true"])');
                if (camposCaptura.length == 0) {

                    $util.reAjustaCeldasTabla($dinamicContainer)
                        .then(function () {

                            $deferred.resolve()
                        })
                        .fail(function (causa: any) {

                            $deferred.reject(causa);
                        })
                        .always(function () {

                            clearInterval($self.idIntervaloReajustaTamanioColumnasFijas);
                        });
                }
            }, 333);

            return $deferred.promise;
        }
        /**
        * Evalua el tamañon de las celdas fijas y las ajusta para cuadrar los titulos, este proceo solo se ejecuta si no existen campos captura pendientes de evaluar.
        * @param tablaEvaluar Elemento que sera evaluado para ajustar el tamaño de sus titulos, en caso de no
        * indicarse este parametro se evaluaran todas las tablase excel con columnas fijas contenidas en el hipercubo.
        * @return Promesa que se resuelve cuando se concreto la evaluación, retorna un boleano que indica si se evaluó la tabla
        * <code>true</code> o si existe un proceso activo pendiente de evaluar <code>false</code>.
        **/
        public reajustaTamanioCeldasFijas(tablaEvaluar?: JQuery): ng.IPromise<boolean> {
            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var deferred = $util.creatPromiseDeferred<boolean>();
            var arrayPromises: Array<ng.IPromise<void>> = [];
            var $tablasEvaluar = tablaEvaluar ? tablaEvaluar : $self.$tablasExcel;
            if (!$self.procesoReajustarCeldasActivo) {
                try {
                    $self.procesoReajustarCeldasActivo = true;
                    if ($tablasEvaluar.length > 0) {

                        $tablasEvaluar.each(function (index: number, element: Element) {

                            var $tabla = $(element);
                            var $dinamicContainer: JQuery = $tabla.data("xbrl:dinamic-table-ref");

                            if (!$dinamicContainer) {

                                $dinamicContainer = $tabla.closest(".dinamic-table-master-container");
                            }

                            if ($dinamicContainer) {

                                var promesa = $self.reajustaCeltasTablaTask($dinamicContainer);
                                arrayPromises.push(promesa);
                            }
                        });
                        $util.getQService().all(arrayPromises).then(function () {

                            deferred.resolve(true);
                        }).catch(function (reason: any) {

                            deferred.reject(reason);
                        }).finally(function () {

                            $self.procesoReajustarCeldasActivo = false;
                        });
                    } else {

                        deferred.resolve(false);
                    }
                } catch (causaError) {

                    deferred.reject(causaError);
                }
            } else {

                deferred.resolve(false);
            }
            return deferred.promise;
        }
        /**
         * Reevalua las formulas para los conceptos pendientes de evaluar.
         */
        private reevaluaFormulas(): void {

            var $self = this;
            var $abaxService = $self.$abaxXBRLService;

            if ($self.ReevaluarFormulasTimeOut) {

                clearTimeout($self.ReevaluarFormulasTimeOut);
            }

            $self.ReevaluarFormulasTimeOut = setTimeout(function () {

                var idConcepto: string;
                var conceptosFormulaReevaluar = $self.ConceptoFormulasReevaluar;
                for (idConcepto in conceptosFormulaReevaluar) {
                    if (conceptosFormulaReevaluar[idConcepto]) {

                        $abaxService.reevaluaFormulasPorConcepto(idConcepto);
                        conceptosFormulaReevaluar[idConcepto] = false;
                    }
                }
            }, 33);
        }


        /**
        * Reevalua los campo captura que cuadren con el filtro dado.
        * @param filtro Objeto con los elementos dimensionales por los que se filtran los contextos.
        * @return Promesa que se cumple cuando los elementos buscados fueron evaluados.
        **/
        public reEvaluarCamposCapturaHechoDimension(filtro: model.XbrlConfiguracionMiembrosDimensionContexto, nombrePlantillaContexto: string): ng.IPromise<void> {

            var atributosQuery: string = "";
            var $idsContextos: Array<string>;
            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            if (filtro) {

                filtro = new model.XbrlConfiguracionMiembrosDimensionContexto().deserialize(filtro);
                $idsContextos = $self.obtenIdsContextos(nombrePlantillaContexto, filtro, false);
            } else {

                filtro = new model.XbrlConfiguracionMiembrosDimensionContexto();
                $idsContextos = $self.obtenIdsContextos(nombrePlantillaContexto, filtro, false);
            }

            if ($idsContextos && $idsContextos.length > 0) {

                var index: number;
                var promises: Array<ng.IPromise<void>> = [];
                for (index = 0; index < $idsContextos.length; index++) {

                    var idContexto = $idsContextos[index];
                    var camposCaptura = $self.$xbrlHipercubo.find("xbrl\\:campo-captura[xbrl\\:campo-captura-hecho-dimension][xbrl\\:id-contexto=\"" + idContexto + "\"]");
                    var promise = $self.evaluaComponenteCampoCapturaHecho($self.$xbrlHipercubo, $self.$scope.modelo.variablesPlantilla, camposCaptura);;
                    promises.push(promise);
                }
                $util.getQService().all(promises)
                    .then(function () { $deferred.resolve(); })
                    .catch(function (cause: any) { $deferred.reject(cause); });
            } else {

                $deferred.resolve();
            }

            return $deferred.promise;
        }


        /**
        * Tomando el hipercubo como elemento contenedor de partida evalua todos los subcomponentes.
        **/
        public evaluaComponentesHipercubo(): ng.IPromise<void> {
            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var deferred = $util.creatPromiseDeferred<void>();
            $util.setTimeout(function () {
                var promises = new Array<ng.IPromise<any>>();
                $self.$xbrlHipercubo.each(function (index: number, element: Element) {

                    var itemPromise = $self.evaluaComponentes($(element), $self.$scope.modelo.variablesPlantilla);
                    promises.push(itemPromise);

                });
                $util.getQService().all(promises)
                    .then(function () {

                        $self.reconstrulleTablaExcel();
                        deferred.resolve();
                    }).catch(function (causa) {

                        deferred.reject(causa);
                    });
            });

            return deferred.promise;
        }
        /**
         * Inicializa los manejdaores de los evento de maximizar y restaurar ya que tienen efecto sobre los bloques de texto.
         */
        private inicializaEvaluacionTextAreas(): void {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;

            $util.agregaManejadorEvento('body', 'abax-maximisaElemento', 'reevaluaTextBlock', function (eventObject: JQueryEventObject, bloque: JQuery): void {
                bloque.find('xbrl\\:campo-captura iframe').parents('xbrl\\:campo-captura').xbrlCampoCaptura();
            });

            $util.agregaManejadorEvento('body', 'abax-restaurarElementoMaximizado', 'reevaluaTextBlock', function (eventObject: JQueryEventObject, bloque: JQuery): void {
                bloque.find('xbrl\\:campo-captura iframe').parents('xbrl\\:campo-captura').xbrlCampoCaptura();
            });

        }
        /**
        * Inicializa los eventos de cambio de tamañio para recalcular el tamaño de las celdas donde aplica.
        */
        private incializaEventosCambioTamanio(): void {

            var $self = this;
            $(window).off("xbrlCampoCapturaChangeHeigth");
            $(window).on("xbrlCampoCapturaChangeHeigth", $.proxy($self.manejadorCambioDimensiones, $self));
        }
        /**
         * Manejador del evento que se ejecuta cuando 
         * @param event Evento ejecutado.
         * @param elemento Elemento que ejecuto el evento.
         */
        private manejadorCambioDimensiones(event: JQueryEventObject, elemento: JQuery):void {

            var $self = this;
            elemento.parents('table[xbrl\\:tabla-excel]').first().each(function (indexElement: number, elemento: Element) {

                $self.reajustaTamanioCeldasFijas($(elemento));
            })
        }

        /**
        * Inactiva elementos de edicion que noaplican a la vista.
        **/
        private desactivaElementosDeEdicion(): void {

            var $self = this;
            $self.$xbrlHipercubo.find('[xbrl\\:agregar-miembro-dimension]').remove();
            $self.$xbrlHipercubo.find('[xbrl\\:eliminar-miembro-dimension]').remove();

        }
        /**
         * Inicializa las etiquetas concepto.
         * @param $container Contenedor.
         * @param variablesPlantilla Variables auxiliares.
         */
        private evaluaEtiquetasConcepto($container, variablesPlantilla): ng.IPromise<void> {

            var $util = shared.service.AbaxXBRLUtilsService;
            var deferred = $util.creatPromiseDeferred<void>();
            $container.find('xbrl\\:etiqueta-concepto:empty').xbrlEtiquetaConcepto();
            deferred.resolve();
            return deferred.promise;
        }

        /**
       * Evalua los componentes dentro del contenedor.
       * @param $container Contenedor de componentes.
       * @param variablesPlantilla Equivalente al scope, pasa variables entre evaluaciones.
       * @return Promesa que se cumple cuando se evaluan todos los componentes.
       **/
        private evaluaComponentes($container: JQuery, variablesPlantilla: { [nombreVariable: string]: string }): ng.IPromise<any[]> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var arregloPromesas = new Array<ng.IPromise<any>>();
            var promesaRetornar = $util.creatPromiseDeferred<any[]>();

            //$self.desactivaElementosDeEdicion();
            arregloPromesas.push($self.evaluaComponenteXBRLRepiteDimension($container, variablesPlantilla)
                .then(function () {
                    arregloPromesas.push($self.evaluaComponenteXbrlCamposTextoDimension($container, variablesPlantilla).then(function () {

                        arregloPromesas.push($self.evaluaComponenteAgregarMiemborDimension($container, variablesPlantilla).then(function () {

                            arregloPromesas.push($self.evaluaComponenteCampoCapturaHecho($container, variablesPlantilla).then(function () {

                                arregloPromesas.push($self.evaluaComponenteEliminarMiemborDimension($container, variablesPlantilla).then(function () {

                                    arregloPromesas.push($self.evaluaEtiquetasConcepto($container, variablesPlantilla));
                                }));
                            }));
                        }));
                    }));
                }));
            var promesaFinal = $util.getQService().all(arregloPromesas);
            promesaFinal.then(function () {
                plugins.XbrlPluginUtils.ocultarLoaderFormatos();
                $util.evaluaTablasDinamicas();
                promesaRetornar.resolve();
            }).catch(function (causaError) {

                promesaRetornar.reject(causaError);
            });
            return promesaRetornar.promise;
        }
        /**
         * Función que se manda a ejecutar cuando se realiza una afectación a los miembros del hipercubo.
         * Es un manejador general que concentra la lógica para invocar los manejadores publicos de la directiva.
         * @param evento Evento que se esta lanzando.
         * @param parametros Parametros adicionales que serán enviados como parate del evento.
         * @return Promesa que se resuelve cuando finaliza el método.
         */
        private enModificarHipercubo(evento: XbrlEventoHipercubo, parametros?: { [nombreParametro: string]: any }): ng.IPromise<any> {

            var $self = this;
            var $scope = $self.$scope;
            var parametrosLocales = parametros ? parametros : {};
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<any>();
            var $onError = function (exception: any) {
                console.error(exception);
                $deferred.reject(exception);
            };
            $util.setTimeout(function () {
                if ($scope.xbrlEnEventoHipercubo) {
                    try {
                        var contexto = {
                            $eventoHipercubo: evento,
                            $controlador: $self.$xbrlHipercubo.data("xbrlControladorHipercubo"),
                            $parametros: parametros
                        };
                        var promise = $scope.xbrlEnEventoHipercubo(contexto);
                        if (promise) {
                            promise
                                .then(function () {

                                    $deferred.resolve();
                                })
                                .catch(function (error: any) {

                                    $deferred.reject(error);
                                });
                        } else {

                            $deferred.resolve();
                        }
                    } catch (exception) {

                        $onError(exception);
                    }
                } else {

                    $deferred.resolve();
                }
            });
            var time: number = evento == XbrlEventoHipercubo.CREAR_MIEMBRO ? 1000 : 0;
            $util.setTimeout(function () {
                
                if ($scope.xbrlSincronizar) {
                    $self.sincronizarOtrosHipercubos();
                }
            }, time);
            return $deferred.promise;
        }
        private sincronizarOtrosHipercubos(): void {

            var $self = this;
            var $scope = $self.$scope;
            var idsHipercubos: Array<string> = eval('([' + $scope.xbrlSincronizar + '])');
            var configuracion: string = $self.$xbrlHipercubo.attr("xbrl:configuracion");
            var hipercuboActual = $self.$xbrlHipercubo;
            for (var index = 0; index < idsHipercubos.length; index++) {
                var idHipercubo = idsHipercubos[index];
                var selector:string;
                if (idHipercubo == "$equivalentes") {

                    selector = 'xbrl\\:tabla-hipercubo[xbrl\\:configuracion="' + configuracion + '"]';
                } else {

                    selector = 'xbrl\\:tabla-hipercubo[xbrl\\:id-tabla-hipercubo="' + idHipercubo + '"]';
                }
                $(selector).each(function(indexHipercube:number, elemento:Element){
                    var $elemento = $(elemento);
                    if ($elemento.get(0) != hipercuboActual.get(0) &&
                        $elemento.attr("xbrl:id-tabla-hipercubo") != hipercuboActual.attr("xbrl:id-tabla-hipercubo")) {

                        var plantillaOriginal = $elemento.data('xbrlPlantillaOriginal');
                        var $controlador: XbrTablaHipercuboDirectiveController = $elemento.data("xbrlControladorHipercubo");
                        $elemento.html(plantillaOriginal);
                        $controlador.limpiaDiccionarios();
                        $controlador.inicializaConfiguracion();
                        $controlador.evaluaComponentesHipercubo().then(function () {

                            $controlador.reajustaTamanioCeldasFijas();
                        });
                    }
                });
            }
        }

        /**
         * Limpia los diccioarios.
         */
        public limpiaDiccionarios(): void {

            var $self = this;
            var $scope = $self.$scope;
            $scope.modelo = { variablesPlantilla: {} };
            $self.ListaDimensionesHipercubo = [];
            $self.DiccionarioDimensionesAlias = {};
            $self.DiccionarioMiemborsDimensionAlias = {};
            $self.DiccionarioDimensionMiembroGrupo = {};
            $self.DiccionarioGrupoDimensionMiembro = {};
            $self.MiembrosDimensiones = {};
            $self.ConceptoFormulasReevaluar = {};
            $self.dimensionAliasIndex = 0;
            $self.PlantillasContextos = {};
            $self.Unidades = {};
            $self.$tablasExcel = null;
        }

        /**
        * Inicializa el scope de interacción con la vista.
        **/
        private init(): void {

            var $self = this;
            var $scope = $self.$scope;
            $self.limpiaDiccionarios();
            $self.inicializaConfiguracion();
            $scope.reEvaluarCamposCapturaHechoDimension = $.proxy($self.reEvaluarCamposCapturaHechoDimension, $self);
            $scope.eliminaMiembroDimension = $.proxy($self.eliminaMiembroDimension, $self);
            $scope.creaMiembroDimension = $.proxy($self.creaMiembroDimension, $self);
            $self.inicializaEvaluacionTextAreas();
            $self.incializaEventosCambioTamanio();
        }

        /**
        * Constructor por defecto de la clase.
        * @param $scope Scope para interactuar con la vista.
        * @param $xbrlConfiguracion Configuración de inicialización de los componentes.
        * @param $abaxXBRLService Servicio para la interacción con los componetes XBRL.
        **/
        constructor($scope: IXbrTablaHipercuboDirectiveScope,
            $xbrlConfiguracion: model.XbrlConfiguracionTablaHipercuboDirective,
            $abaxXBRLService: abaxXBRL.services.AbaxXBRLServices,
            $xbrlHipercubo: ng.IAugmentedJQuery
        ) {

            this.$scope = $scope;
            this.$config = $xbrlConfiguracion;
            this.$abaxXBRLService = $abaxXBRLService;
            this.$xbrlHipercubo = $xbrlHipercubo;

            this.init();
        }
    }

    XbrTablaHipercuboDirectiveController.$inject = ['$scope', '$xbrlConfiguracion', 'abaxXBRLServices', '$xbrlHipercubo'];

    export interface XbrlAplicaElementoTaxonomiaDirectiveScope extends ng.IScope {

        /**
        * Bandera que indica si se deben de presentar los e
        **/
        aplicanElementos: boolean;
    }

    /**
    * Directiva de para la presentación de una tabla de tipo hipercubo.
    * @author Oscar Ernesto Loyola Sánchez
    **/
    export class XbrlAplicaElementoTaxonomiaDirective {

        /**
         * Fabrica de la directiva.
         */
        public static factory(): ng.IDirective {

            return {
                restrict: 'A',
                replace: false,
                transclude: false,
                link: function ($scope: XbrlAplicaElementoTaxonomiaDirectiveScope, $element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {

                    var etiquetasConcepto: ng.IAugmentedJQuery = $element.find("xbrl\\:etiqueta-concepto");
                    var aplicanElementos: boolean = true;
                    var $abaxService = abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerAbaxService();
                    var conceptosDescartar = $abaxService.getDefinicionPlantilla().conceptosDescartar;
                    if (!conceptosDescartar) {

                        return;
                    }
                    if (etiquetasConcepto.length > 0) {

                        etiquetasConcepto.each(function (indexElement: number, element: Element) {

                            var $element = $(element);
                            var idConcepto = $element.attr("xbrl:id-concepto");
                            if (conceptosDescartar[idConcepto]) {
                                aplicanElementos = false;
                            }
                        });
                    }
                    if (aplicanElementos) {

                        var camposCaptura = $element.find("xbrl\\:campo-captura");
                        if (camposCaptura.length > 0) {

                            var hechosPorId = $abaxService.getDocumentoInstancia().HechosPorId;
                            camposCaptura.each(function (indexElement: number, element: Element) {

                                var $element = $(element);
                                var idHechoPlantilla = $element.attr("xbrl:id-hecho-plantilla");
                                var idConcepto: string = undefined;
                                if (idHechoPlantilla) {
                                    var hechoPlantilla: model.HechoPlantilla = $abaxService.obtenDefinicionPlantillaPorId(idHechoPlantilla);
                                    if (hechoPlantilla) {

                                        idConcepto = hechoPlantilla.IdConcepto;
                                    }
                                } else {

                                    idConcepto = $element.attr("xbrl:id-concepto");
                                }
                                if (idConcepto) {
                                    if (conceptosDescartar[idConcepto]) {
                                        aplicanElementos = false;
                                    }
                                }
                            });
                        }
                    }
                    if (!aplicanElementos) {

                        $element.remove();
                    }
                }
            }
        }
    }


}