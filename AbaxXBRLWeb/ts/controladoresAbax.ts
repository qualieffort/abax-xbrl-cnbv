///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="modeloAbax.ts" /> 
///<reference path="../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../scripts/typings/angular-file-upload/angular-file-upload.d.ts" /> 
///<reference path="../scripts/typings/loading/jquery.isloading.d.ts" />
///<reference path="../scripts/typings/impromptu/jquery-impromptu.d.ts" />
///<reference path="../scripts/typings/fileDownload/jquery.fileDownload.d.ts" />
///<reference path="../scripts/typings/intro/jquery.intro.d.ts" />
///<reference path="../scripts/typings/jquery-fullscreen/jquery-fullscreen.d.ts" />
///<reference path="jQuery/pluginsXbrl.ts" />

module abaxXBRL.controller {

    import services = abaxXBRL.services;
    import model = abaxXBRL.model;
    import upload = ng.angularFileUpload;

    /**
     * Implementación de un controlador para la edición/visualización de documentos instancia XBRL
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class AbaxXBRLController {

        /** El scope del controlador */
        private $scope: IDocumentoInstanciaScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;

        /** El servicio para encolar solicitudes */
        private qService: ng.IQService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /** El servicio para ejecutar tareas asíncronas */
        private $timeout: ng.ITimeoutService;

        /** El servicio para ser notificado cuando el usuario intenta navegar fuera de la página actual */
        private guardiaNavegacionService: services.GuardianNavegarFueraPaginaService;

        /**
         * Presenta el documento instancia en pantalla para el usuario.
         */
        private presentarDocumento(): void {
            var self = this;

            self.$scope.idUsuarioActivo = self.abaxService.idUsuarioActivo;
            self.$scope.idEmisoraActiva = self.abaxService.idEmisoraActiva;
            self.$scope.nombreCompletoUsuarioActivo = self.abaxService.nombreCompletoUsuarioActivo;
            self.abaxService.getDocumentoInstancia().xbrlIdioma = null;
            //español por default
            for (var idm in self.abaxService.getDocumentoInstancia().Taxonomia.IdiomasTaxonomiaObjeto) {
                if (self.abaxService.getDocumentoInstancia().Taxonomia.IdiomasTaxonomiaObjeto[idm].ClaveIdioma === "es") {
                    self.abaxService.getDocumentoInstancia().xbrlIdioma = self.abaxService.getDocumentoInstancia().Taxonomia.IdiomasTaxonomiaObjeto[idm];
                    break;
                }
            }
            if (self.abaxService.getDocumentoInstancia().xbrlIdioma == null) {
                self.abaxService.getDocumentoInstancia().xbrlIdioma = self.abaxService.getDocumentoInstancia().Taxonomia.IdiomasTaxonomiaObjeto[0];
            }

            self.$scope.xbrlIdioma = self.abaxService.getDocumentoInstancia().xbrlIdioma;

            self.abaxService.getDocumentoInstancia().modoVistaFormato = "formato";

            var documentoInstancia = self.abaxService.getDocumentoInstancia();

            var evaluaConceptosOpcionales = function (idHechoGenerado: string, idHechoPlantilla:string , definicionPlantilla: model.DefinicionDePlantillaXbrl) {
                var hechoGenerado = documentoInstancia.HechosPorId[idHechoGenerado];
                if (hechoGenerado && definicionPlantilla.conceptosOpcionales && definicionPlantilla.conceptosOpcionales[hechoGenerado.IdConcepto]) {
                    self.abaxService.eliminarHechoDeDocumentoInstancia(hechoGenerado, idHechoPlantilla);
                    if (!definicionPlantilla.hechosPlantillaOpcionales) {
                        definicionPlantilla.hechosPlantillaOpcionales = {};
                    }
                    definicionPlantilla.hechosPlantillaOpcionales[idHechoPlantilla] = true;
                }
            }

            self.$scope.actualizarMostrarListaRoles = function () {
                self.$scope.mostrarListaRoles = !self.$scope.mostrarListaRoles;
                if (self.$scope.mostrarListaRoles) {
                    self.$timeout(function () {
                        self.$scope.$broadcast('resize::resize');
                        $('#panelToolbar a[ng-click="actualizarMostrarListaRoles()"] i.fa-caret-right').removeClass('text-active');
                        $('#panelToolbar a[ng-click="actualizarMostrarListaRoles()"] i.fa-caret-right').addClass('text');
                        $('#panelToolbar a[ng-click="actualizarMostrarListaRoles()"] i.fa-caret-left').removeClass('text');
                        $('#panelToolbar a[ng-click="actualizarMostrarListaRoles()"] i.fa-caret-left').addClass('text-active');
                    });
                } else {
                    $('#panelToolbar a[ng-click="actualizarMostrarListaRoles()"] i.fa-caret-left').removeClass('text-active');
                    $('#panelToolbar a[ng-click="actualizarMostrarListaRoles()"] i.fa-caret-left').addClass('text');
                    $('#panelToolbar a[ng-click="actualizarMostrarListaRoles()"] i.fa-caret-right').removeClass('text');
                    $('#panelToolbar a[ng-click="actualizarMostrarListaRoles()"] i.fa-caret-right').addClass('text-active');
                }
            };

            this.crearHechosDocumentoInstancia().then(function (resultado: boolean) {
                if (resultado) {
                    
                    if (self.abaxService.getDefinicionPlantilla()) {

                        var definicionPlantilla = self.abaxService.getDefinicionPlantilla();
                        if (definicionPlantilla.obtenerVariablePorId('generarHechos') &&
                            definicionPlantilla.obtenerVariablePorId('generarHechos') != null &&
                            definicionPlantilla.obtenerVariablePorId('generarHechos') == "false") {

                        }else {
                            for (var idHechoPlantilla in definicionPlantilla.obtenerDefinicionDeElementos().HechosPlantillaPorId) {
                                if (definicionPlantilla.obtenerDefinicionDeElementos().HechosPlantillaPorId.hasOwnProperty(idHechoPlantilla)) {

                                    if (definicionPlantilla.conceptosOpcionales) {

                                        var plantilla = definicionPlantilla.obtenerDefinicionDeElementos().HechosPlantillaPorId[idHechoPlantilla];
                                        if (plantilla && definicionPlantilla.conceptosOpcionales[plantilla.IdConcepto]) {
                                            if (!definicionPlantilla.hechosPlantillaOpcionales) {
                                                definicionPlantilla.hechosPlantillaOpcionales = {};
                                            }
                                            definicionPlantilla.hechosPlantillaOpcionales[idHechoPlantilla] = true;
                                        } else {
                                            self.abaxService.obtenerIdHechoDocumentoInstanciaEquivalenteAIdHechoPlantilla(idHechoPlantilla);
                                        }
                                    } else {
                                        self.abaxService.obtenerIdHechoDocumentoInstanciaEquivalenteAIdHechoPlantilla(idHechoPlantilla);
                                    }
                                }
                            }
                        }
                    }
                }
            }).finally(function () {
                
                if (self.abaxService.getDefinicionPlantilla()) {
                    self.abaxService.getDefinicionPlantilla().eliminarHechosSinUso(self.abaxService);
                }

                self.$scope.formatoActivo = 0;
                self.$scope.rolFormatoActivo = self.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion[self.$scope.formatoActivo];
                plugins.XbrlPluginUtils.presentarLoaderFormatos();

                self.$scope.documentoInstancia = self.abaxService.getDocumentoInstancia();

                if (self.$scope.documentoInstancia.Bloqueado && self.$scope.documentoInstancia.IdUsuarioBloqueo != self.abaxService.idUsuarioActivo || !self.$scope.documentoInstancia.Bloqueado) {
                    self.$scope.documentoInstancia.BloquearCamposCaptura = true;
                } else {
                    self.$scope.documentoInstancia.BloquearCamposCaptura = false;
                }
 
                if (self.$scope.documentoInstancia.IdDocumentoInstancia > 0) {
                    self.$scope.documentoInstancia.PendienteGuardar = false;
                }

                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo = self.abaxService.getDocumentoInstancia().Taxonomia.generarIndiceOperacionesCalculo();
                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceVariablesFormulas = self.abaxService.generarIndiceVariablesFormulas();
                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto = self.abaxService.generarIndiceFormulasPorConcepto();
                self.abaxService.getDocumentoInstancia().RequiereValidacion = true;
                self.abaxService.getDocumentoInstancia().RequiereValidacionFormulas = true;
                self.abaxService.validarDocumentoInstancia();
                self.abaxService.validarFormulasDocumentoInstancia();
                 
                self.$scope.$watch('documentoInstancia.RequiereValidacion', function (newValue: boolean, oldValue: boolean, scope: IDocumentoInstanciaScope): void {
                    if (newValue) {
                        self.abaxService.validarDocumentoInstancia();
                        self.$timeout(function () {
                            $('xbrl\\:campo-captura').xbrlCampoCaptura('update');
                            $('xbrl\\:valor-calculado-hecho').xbrlValorCalculadoHecho('update');
                        });
                    }
                });
                self.$scope.$watch('documentoInstancia.RequiereValidacionFormulas', function (newValue: boolean, oldValue: boolean, scope: IDocumentoInstanciaScope): void {
                    if (newValue) {
                        self.abaxService.validarFormulasDocumentoInstancia();
                        self.$timeout(function () {
                            $('xbrl\\:campo-captura').xbrlCampoCaptura('update');
                            $('xbrl\\:mensaje-validacion-formula').xbrlMensajeValidacionFormula('update');
                        });
                    }
                });

                self.$scope.$watch('documentoInstancia.xbrlIdioma', function () {

                    for (var i = 0; i < self.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion.length; i++) {
                        self.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion[i].Nombre = self.obtenerEtiquetaRol(self.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion[i]);
                    }
                });

                //Funcionalidad agregada validacionDocumentos
                if (self.abaxService.getDefinicionPlantilla().obtenerVariablePorId('mostrarValidarDocumento') &&
                    self.abaxService.getDefinicionPlantilla().obtenerVariablePorId('mostrarValidarDocumento') != null &&
                    self.abaxService.getDefinicionPlantilla().obtenerVariablePorId('mostrarValidarDocumento') == "true") {
                    //self.$scope.actualizarMostrarListaRoles();
                    self.$scope.mostrarValidarDocumento = true;
                }

                self.$scope.mostrarHerramientaPDF = self.abaxService.getDefinicionPlantilla().obtenerVariablePorId("puedeConcatenarPDF") == "true";

                });



           //Configurar botones
           var plantillaDocumento = self.abaxService.getDefinicionPlantilla();
           if (plantillaDocumento.informacionExtra !== undefined && plantillaDocumento.informacionExtra != null
               && plantillaDocumento.informacionExtra["deshabilitarImportarWord"] !== undefined && plantillaDocumento.informacionExtra["deshabilitarImportarWord"] == "true") {
                self.$scope.deshabilitarImportarWord = true;
           }
            
           this.evaluaImportarExcel();
        }
        /**
        * Evalua si el documento actual puede importar a Excel.
        **/
        private evaluaImportarExcel(): void {

            var $self = this;
            shared.service.AbaxXBRLUtilsService.setTimeout(function () {

                var puedeImporarExcel: boolean = true;
                var puedeImporarWord: boolean = true;
                var definicionPlantilla = $self.abaxService.getDefinicionPlantilla();
                if (definicionPlantilla) {

                    var desactivar_excel = definicionPlantilla.obtenerVariablePorId("desactivar_excel");
                    if (desactivar_excel == "true") {

                        puedeImporarExcel = false;
                    }
                    var desactivar_importa_word = definicionPlantilla.obtenerVariablePorId("desactivar_importa_word");
                    if (desactivar_importa_word && desactivar_importa_word == "true") {

                        puedeImporarWord = false;
                    }
                }

                if (!puedeImporarExcel) {

                    $self.$scope.ocultarImportacionExcel = true;
                    var pasos = $self.$scope.opcionesIntro.steps;
                    for (var index = 0; index < pasos.length; index++) {

                        var paso = pasos[index];
                        if (paso.element == "#btnImportarExcel") {

                            pasos.splice(index, 1);
                            break;
                        }
                    }
                }

                if (!puedeImporarWord) {

                    $self.$scope.ocultarImportacionWord = true;
                    var pasos = $self.$scope.opcionesIntro.steps;
                    for (var index = 0; index < pasos.length; index++) {

                        var paso = pasos[index];
                        if (paso.element == "#btnImportarWord") {

                            pasos.splice(index, 1);
                            break;
                        }
                    }
                }
            });
        }

        private crearHechosDocumentoInstancia(): ng.IPromise<boolean> {
            var deferred = this.qService.defer<boolean>();

            var definicionPlantilla = this.abaxService.getDefinicionPlantilla();
            if (definicionPlantilla && definicionPlantilla != null && !definicionPlantilla.IncapazDeterminarParametrosConfiguracion) {
                this.cargarGrupoDocumentos(this.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion, 0, deferred);
            } else {
                deferred.resolve(false);
            }
            return deferred.promise;
        }

        private cargarGrupoDocumentos(rolesPresentacion: Array<model.RolPresentacion>, rolActual: number, deferred: ng.IDeferred<boolean>) {

            if (rolActual == rolesPresentacion.length) {
                deferred.resolve(true);
                return;
            }
            var self = this;
            var definicionPlantilla = this.abaxService.getDefinicionPlantilla();
            var rol = rolesPresentacion[rolActual];
            var url = definicionPlantilla.obtenerUbicacionDefinicionDeRol(rol.Uri);
            url += ((url.indexOf('?') > 0 ? '&' : '?') + "versionApp=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version);
            $.getScript(url).done(function () {
                var nombreClase = rol.Uri.replace(/:/g, '_').replace(/\//g, '_').replace(/\./g, '_').replace(/\-/g, '_');
                var definicionElementosPlantilla: abaxXBRL.model.DefinicionDeElementosPlantilla = eval('new abaxXBRL.templates.' + nombreClase + '()');
                definicionPlantilla.agregarDefinicionElementos(definicionElementosPlantilla);
                self.cargarGrupoDocumentos(rolesPresentacion, ++rolActual, deferred);
            }).fail(function () {
                deferred.resolve(false);
            });
        }

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self = this;

            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');
            self.$scope.idUsuarioActivo = self.abaxService.idUsuarioActivo;
            self.$scope.idEmisoraActiva = self.abaxService.idEmisoraActiva;
            self.$scope.panelActivo = PanelesDatos.Formatos;
            self.$scope.PanelFormatos = PanelesDatos.Formatos;
            self.$scope.PanelUsuarios = PanelesDatos.Usuarios;
            self.$scope.PanelVersiones = PanelesDatos.Versiones;
            self.$scope.deshabilitarExportar = false;
            self.$scope.deshabilitarGuardar = false;
            self.$scope.deshabilitarImportarWord = false;
            self.$scope.deshabilitarImportarExcel = false;
            self.$scope.deshabilitarUnirPdf = false;
            self.$scope.mostrarValidarDocumento = false;
            self.$scope.mostrarHerramientaPDF = false;


            self.$scope.$on('$locationChangeStart', function ($event: ng.IAngularEvent, newUrl: string, oldUrl: string) {
                $event.preventDefault();
                return;
            })

            this.guardiaNavegacionService.depurarGuardianes();
            this.guardiaNavegacionService.registrarGuardian(function (): string {
                var mensaje = undefined;
                if (self.$scope.documentoInstancia && self.$scope.documentoInstancia.PendienteGuardar) {
                    mensaje = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('MENSAJE_CONFIRM_SALIR_EDITOR_SIN_GUARDAR');
                }
                return mensaje;
            });


            if (self.abaxService.getDocumentoInstancia() == null) {
                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CARGANDO_DOCUMENTO_INSTANCIA')
                });
                self.abaxService.limpiarDocumentoYPlantilla();
                var idDocumentoInstancia = shared.service.AbaxXBRLSessionService.getAtributoSesion("idDocumentoInstancia");
                self.$scope.identificadoresDocumentosPresentados = [];
                self.$scope.identificadoresDocumentosPresentados.push(idDocumentoInstancia);
                shared.service.AbaxXBRLSessionService.remueveAtributoSesion("idDocumentoInstancia");
                self.abaxService.cargarDocumentoInstanciaPorId(idDocumentoInstancia, null).then(function (resultadoOperacion: model.ResultadoOperacion) {
                    if (resultadoOperacion.Resultado) {
                        self.presentarDocumento();
                    }
                }).catch(function (): void {
                    var $lutil = shared.service.AbaxXBRLUtilsService;
                    var titulo = $lutil.getValorEtiqueta("TITULO_ERROR_CARGAR_DOCUMENOT");
                    var contenido = $lutil.getValorEtiqueta("MENSAJE_ERROR_OBTENER_DOCUMENTO_INSTANCIA");
                    $lutil.error({ textoTititulo: titulo, texto: contenido }).finally(function () { $lutil.cambiarEstadoVistasA('inicio'); });
                }).finally(function (): void {
                    $.isLoading('hide');
                });
            } else {
                self.presentarDocumento();
            }



            this.$scope.esFormatoActivo = function (numeroFormato: number): boolean {
                return self.$scope.formatoActivo == numeroFormato;
            };

            this.$scope.establecerFormatoActivo = function (numeroFormato: number, recargar?: boolean): void {
                if (!recargar && self.$scope.formatoActivo == numeroFormato) return;
                self.$scope.formatoActivo = numeroFormato;
                plugins.XbrlPluginUtils.presentarLoaderFormatos();
                self.$scope.rolFormatoActivo = self.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion[numeroFormato];
                if (self.$scope.panelActivo != PanelesDatos.Formatos) {
                    self.$scope.panelActivo = PanelesDatos.Formatos;
                }
                //self.$scope.rolFormatoActivo = self.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion[0];
               
            };

            this.$scope.guardarDocumentoInstancia = function (): void {
                self.$scope.deshabilitarGuardar = true;
                
                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-guardar-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: GuardarDocumentoController,
                    resolve: {
                        documentoInstancia: function () {
                            return self.$scope.documentoInstancia;
                        }
                    }
                });

                modalInstance.result.then(function () {
                    self.$scope.deshabilitarGuardar = false;
                }, function () {
                        self.$scope.deshabilitarGuardar = false;
                    });
            };

            this.$scope.esPanelActivo = function (idPanel: PanelesDatos): boolean {
                return self.$scope.panelActivo == idPanel;
            };

            this.$scope.establecerPanelActivo = function (idPanel: PanelesDatos): void {
                self.$scope.panelActivo = idPanel;
            };

            this.$scope.establecerPanelActivoFormatos = function (recargar: boolean): void {
                self.$scope.panelActivo = self.$scope.PanelFormatos;
                if (recargar) {
                    self.$scope.establecerFormatoActivo(self.$scope.formatoActivo, true);
                } 
            };

            this.$scope.presentarVersionesDocumentoInstancia = function (): void {

                $.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CARGANDO_HISTORIA_DOCUMENTO') });
                self.abaxService.obtenerHistoricoVersionesDeDocumentoInstancia().then(function (resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {
                    self.$scope.listaHistoricoVersiones = new Array<model.VersionDocumentoInstancia>();
                    if (resultadoOperacion.InformacionExtra && resultadoOperacion.InformacionExtra != null && resultadoOperacion.InformacionExtra.length && resultadoOperacion.InformacionExtra.length > 0) {
                        for (var i = 0; i < resultadoOperacion.InformacionExtra.length; i++) {
                            self.$scope.listaHistoricoVersiones.push(new model.VersionDocumentoInstancia().deserialize(resultadoOperacion.InformacionExtra[i]));
                        }
                    }
                    self.$scope.panelActivo = PanelesDatos.Versiones;
                }, function (resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_HISTORIA_DOCUMENTO'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                buttons: { aceptar: true }
                            });
                    }).finally(function () {
                    $.isLoading('hide');
                });
            };

            this.$scope.presentarUsuariosDocumentoInstancia = function (): void {
                if (self.$scope.documentoInstancia.IdDocumentoInstancia != null) {
                    self.$scope.panelActivo = PanelesDatos.Usuarios;
                } else {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_CAMBIOS_PENDIENTES'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_DOCUMENTO_INSTANCIA'),
                            buttons: { aceptar: true }
                        });
                }
            };

            this.$scope.bloquearLiberarDocumentoInstancia = function (): void {

                var bloquear = !self.$scope.documentoInstancia.Bloqueado || self.$scope.documentoInstancia.IdUsuarioBloqueo != shared.service.AbaxXBRLSessionService.getSesionInmediate().Usuario.IdUsuario;

                if (!bloquear && self.$scope.documentoInstancia.PendienteGuardar) {
                    var $util = shared.service.AbaxXBRLUtilsService;
                    var titulo = $util.getValorEtiqueta("TITULO_LIBERAR_DOCUMENTO_INSTANCIA");
                    var textoMensaje = $util.getValorEtiqueta("MENSAJE_WARNING_LIBERAR_DOCUMENTO_INSTANCIA_CAMBIOS_PENDIENTES");
                    $util.advertencia({
                        claseIconoTitulo: "fa fa-unlock",
                        claseTitulo: "panel-warning",
                        textoTititulo: titulo,
                        texto: textoMensaje
                    });

                    return;
                }

                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_BLOQUEANDO_DOCUMENTO_INSTANCIA')
                });
                
                self.abaxService.bloquearLiberarDocumentoInstancia(bloquear).then(function (resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {
                    self.$scope.documentoInstancia.Bloqueado = resultadoOperacion.InformacionExtra.Bloqueado;
                    self.$scope.documentoInstancia.IdUsuarioBloqueo = resultadoOperacion.InformacionExtra.IdUsuarioBloqueo;
                    self.$scope.documentoInstancia.NombreUsuarioBloqueo = resultadoOperacion.InformacionExtra.NombreUsuarioBloqueo;

                    if ((self.$scope.documentoInstancia.Bloqueado && self.$scope.documentoInstancia.IdUsuarioBloqueo != self.abaxService.idUsuarioActivo) || !self.$scope.documentoInstancia.Bloqueado) {
                        self.$scope.documentoInstancia.BloquearCamposCaptura = true;
                    } else {
                        self.$scope.documentoInstancia.BloquearCamposCaptura = false;
                    }
                    $('xbrl\\:campo-captura').xbrlCampoCaptura('soloLectura', self.$scope.documentoInstancia.BloquearCamposCaptura);
                    $('xbrl\\:campo-captura').xbrlCampoCaptura('update');
                    $('table[xbrl\\:tabla-excel]').xbrlTablaExcel('soloLectura', self.$scope.documentoInstancia.BloquearCamposCaptura);
                    self.$scope.rolFormatoActivo = self.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion[self.$scope.formatoActivo];
                    var mensajePop = shared.service.AbaxXBRLUtilsService.getValorEtiqueta(resultadoOperacion.Mensaje);  
                    var ultimaVersion = resultadoOperacion.InformacionExtra.UltimaVersion;
                    var refrescarDocumento = ultimaVersion != self.$scope.documentoInstancia.Version;
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta(mensajePop),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('ETIQUETA_BLOQUEAR_DESBLOQUEAR'),
                            buttons: { aceptar: true },
                            submit: function (e, v, m, f) {
                                if (v && !self.$scope.documentoInstancia.BloquearCamposCaptura && refrescarDocumento) {

                                    //Cargamos nuevamente el documento de instancia, para obtener las modificaciones que alguien más haya realizado.
                                    $.isLoading({
                                        text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CARGANDO_DOCUMENTO_INSTANCIA')
                                    });
                                    self.abaxService.limpiarDocumentoYPlantilla();
                                    var idDocumentoInstancia = self.$scope.documentoInstancia.IdDocumentoInstancia;
                                    self.$scope.identificadoresDocumentosPresentados = [];
                                    self.$scope.identificadoresDocumentosPresentados.push(idDocumentoInstancia);
                                    self.abaxService.cargarDocumentoInstanciaPorId(idDocumentoInstancia.toString(), null).then(function (resultadoOperacion: model.ResultadoOperacion) {
                                        if (resultadoOperacion.Resultado) {
                                            plugins.XbrlPluginUtils.presentarLoaderFormatos();
                                            self.presentarDocumento();
                                        }
                                    }).catch(function (): void {
                                        var $lutil = shared.service.AbaxXBRLUtilsService;
                                        var titulo = $lutil.getValorEtiqueta("TITULO_ERROR_CARGAR_DOCUMENOT");
                                        var contenido = $lutil.getValorEtiqueta("MENSAJE_ERROR_OBTENER_DOCUMENTO_INSTANCIA");
                                        $lutil.error({ textoTititulo: titulo, texto: contenido }).finally(function () { $lutil.cambiarEstadoVistasA('inicio'); });
                                    }).finally(function (): void {
                                        $.isLoading('hide');
                                    });

                                }
                            }
                        });


                }, function (resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {
                        var mensajePop = shared.service.AbaxXBRLUtilsService.getValorEtiqueta(resultadoOperacion.Mensaje);  
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta(mensajePop),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('TITULO_PROMPT_DOCUMENTO_BLOQUEADO'),
                                buttons: { aceptar: true }
                            });

                    }).finally(function () {

                    $.isLoading('hide');


                });

            };

            this.$scope.exportarDocumentoInstancia = function () {
                self.$scope.deshabilitarExportar = true;
                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-exportar-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ExportarDocumentoController,
                    resolve: {
                        documentoInstancia: function () {
                            return self.$scope.documentoInstancia;
                        }
                    }
                });

                modalInstance.result.then(function () {
                    self.$scope.deshabilitarExportar = false;
                }, function () {    
                        self.$scope.deshabilitarExportar = false;
                    });
            };

            this.$scope.cambiarIdiomaDocumentoInstancia = function (indiceIdiomaSeleccionado: number):void {
                self.abaxService.getDocumentoInstancia().xbrlIdioma = self.$scope.documentoInstancia.Taxonomia.IdiomasTaxonomiaObjeto[indiceIdiomaSeleccionado];
                self.$scope.xbrlIdioma = self.abaxService.getDocumentoInstancia().xbrlIdioma;
                $('xbrl\\:etiqueta-concepto').xbrlEtiquetaConcepto('update');
                $('.claseCambioIdioma').click();
            };

            this.$scope.validarManualDocumentoInstancia = function (): void {

                self.$timeout(function () {
                    var data: { [nombre: string]: any } = {
                        "documentoInstancia": $.toJSON(self.abaxService.getDocumentoInstancia()),
                    };
                    //plugins.XbrlPluginUtils.presentarLoaderFormatos();
                    //self.abaxService.abaxXBRLRequestService.post("DocumentoInstancia/ValidarDocumentoExcelSpreadJS", data).then(function (result: any) {

                    //    self.abaxService.getDocumentoInstancia().EsCorrecto = true;
                    //    scope.listaErrores = new Array<model.ErrorCargaTaxonomia>();
                    //    if (result.data.InformacionExtra.errores && result.data.InformacionExtra.errores.length) {
                    //        if (result.data.InformacionExtra.errores.length > 0) {
                    //            self.abaxService.getDocumentoInstancia().EsCorrecto = false;
                    //        }
                    //        for (var i = 0; i < result.data.InformacionExtra.errores.length; i++) {
                    //            scope.listaErrores.push(new model.ErrorCargaTaxonomia().deserialize(result.data.InformacionExtra.errores[i]));
                    //        }
                    //    }

                    //    scope.clearError();
                    //    plugins.XbrlPluginUtils.ocultarLoaderFormatos();
                    //}, function (error) {
                    //    alert(error);
                    //    plugins.XbrlPluginUtils.ocultarLoaderFormatos();
                    //});
                });

            };

            this.$scope.expandirEditor = function () {
                if (self.abaxService.getDocumentoInstancia().modoVistaFormato == "formatoExpandido") {
                    self.abaxService.getDocumentoInstancia().modoVistaFormato = "formato";
                } else {
                    self.abaxService.getDocumentoInstancia().modoVistaFormato = "formatoExpandido";
                }

            };

            this.$scope.mostrarPantallaCompletaDocumento = function () {

                if ($(document).fullScreen() && $(document).fullScreen() !== null) {
                    $(document).fullScreen(false);
                    self.$scope.EsPantallaCompleta = false;
                } else {
                    if ($(document).fullScreen() !== null){
                        $(document).fullScreen(true);
                        self.$scope.EsPantallaCompleta = true;
                        $(document).bind("fullscreenchange", function () {
                            $(document).unbind("fullscreenchange");
                            self.$scope.EsPantallaCompleta = $(document).fullScreen();
                        });

                    }
                }
            };

            this.$scope.importarNotasWord = function () {
                self.$scope.deshabilitarImportarWord = true;
                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-importar-notas-word.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ImportarNotasDocumentoInstanciaController,
                    resolve: {
                        documentoInstancia: function () {
                            return self.$scope.documentoInstancia;
                        }
                    }
                });
                modalInstance.result.then(function (exitoImportacion) {
                    if (exitoImportacion) {
                        self.$scope.establecerFormatoActivo(self.$scope.formatoActivo, true);
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_EXITO_IMPORTAR_WORD'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTAR_DOCUMENTO'),
                                buttons: { "Aceptar": true }
                            });
                    }
                    self.$scope.deshabilitarImportarWord = false;
                }, function () {
                        //console.log('Modal dismissed at: ' + new Date());
                        self.$scope.deshabilitarImportarWord = false;
                    });
            };

            this.$scope.importarInformacionDeDocumentoExcel = function () {
                self.$scope.deshabilitarImportarExcel = true;
                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-importar-documento-excel.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ImportarDocumentoInstanciaExcelController,
                    size:'lg',
                    resolve: {
                        documentoInstancia: function () {
                            return self.$scope.documentoInstancia;
                        }
                    }
                });
                modalInstance.result.then(function (exitoImportacion) {
                    if (exitoImportacion) {
                        self.$scope.establecerFormatoActivo(self.$scope.formatoActivo, true);
                        /*$.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_EXITO_IMPORTAR_EXCEL'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTAR_DOCUMENTO'),
                                buttons: { aceptar: true }
                            });*/
                    }
                    self.$scope.deshabilitarImportarExcel = false;
                }, function () {
                        //console.log('Modal dismissed at: ' + new Date());
                        self.$scope.deshabilitarImportarExcel = false;
                    });
            };

            this.$scope.unirArchivosPdf = function () {
                self.$scope.deshabilitarUnirPdf = true;
                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-unir-archivos-pdf.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: UnirArchivosPdfController,
                    resolve: {
                        documentoInstancia: function () {
                            return self.$scope.documentoInstancia;
                        }
                    }
                });
                modalInstance.result.then(function (exitoUnion) {
                    if (exitoUnion) {
                        self.$scope.establecerFormatoActivo(self.$scope.formatoActivo, true);
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_EXITO_IMPORTAR_WORD'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTAR_DOCUMENTO'),
                                buttons: { "Aceptar": true }
                            });
                    }
                    self.$scope.deshabilitarUnirPdf = false;
                }, function () {
                    self.$scope.deshabilitarUnirPdf = false;
                });
            };
            var pasosAPresentar = [];
            pasosAPresentar.push({
                    element: '#panelRolesTaxonomia',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_PANEL_ROLES_TAXONOMIA'),
                    position: 'right'
                });
            pasosAPresentar.push({
                element: '#panelToolbar',
                intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_PANEL_TOOLBAR'),
                position: 'bottom'
            });
            if (this.$scope.tieneFacultad(this.$scope.FacultadesEnum.ExportarDocumentoInstancia)) {
                pasosAPresentar.push({
                    element: '#btnExportarDocumentoInstancia',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_EXPORTAR'),
                    position: 'bottom'
                });
            }
            if (this.$scope.tieneFacultad(this.$scope.FacultadesEnum.ImportarDocumentoInstancia)) {
                pasosAPresentar.push({
                    element: '#btnImportarExcel',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_IMPORTAR_EXCEL'),
                    position: 'bottom'
                });
            }

            if (this.$scope.tieneFacultad(this.$scope.FacultadesEnum.ImportarNotasDocumentoInstancia)) {
                pasosAPresentar.push({
                    element: '#btnImportarWord',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_IMPORTAR_WORD'),
                    position: 'bottom'
                });
            }

            if (this.$scope.tieneFacultad(this.$scope.FacultadesEnum.ImportarHechosDeDocumentoInstancia)) {
                pasosAPresentar.push({
                    element: '#btnImportarDocumentoInstancia',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_IMPORTAR_DOC_INSTANCIA'),
                    position: 'bottom'
                });
            }
            if (this.$scope.tieneFacultad(this.$scope.FacultadesEnum.BloquearDocumentosInstancia)) {
                pasosAPresentar.push({
                    element: '#btnBloquearEstadoFinanciero',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_BLOQUEAR_DOCUMENTO'),
                    position: 'bottom'
                });
            }
            if (this.$scope.tieneFacultad(this.$scope.FacultadesEnum.GuardarDocumentoInstancia)) {
                pasosAPresentar.push({
                    element: '#btnGuardarEstadoFinanciero',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_GUARDAR_DOCUMENTO'),
                    position: 'bottom'
                });
            }
            if (this.$scope.tieneFacultad(this.$scope.FacultadesEnum.CompartirDocumentoInstancia)) {
                pasosAPresentar.push({
                    element: '#btnCompartirEstadoFinanciero',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_COMPARTIR_DOCUMENTO'),
                    position: 'bottom'
                });
            }
            if (this.$scope.tieneFacultad(this.$scope.FacultadesEnum.HistorialDocumentoInstancia)) {
                pasosAPresentar.push({
                    element: '#btnHistorialEstadoFinanciero',
                    intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_HISTORIAL_DOCUMENTO'),
                    position: 'bottom'
                });
            }
            pasosAPresentar.push({
                element: '#btnExpandirVista',
                intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_EXPANDIR_VISTA'),
                position: 'bottom'
            });
            pasosAPresentar.push({
                element: '#btnPantallaCompleta',
                intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_PANTALLA_COMPLETA'),
                position: 'bottom'
            });
            pasosAPresentar.push({
                element: '#btnCambiarIdiomaEtiquetas',
                intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_IDIOMA_DOCUMENTO'),
                position: 'bottom'
            });
            pasosAPresentar.push({
                element: '#filtroEtiquetas',
                intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_FILTRO_ETIQUETAS'),
                position: 'bottom'
            });
            pasosAPresentar.push({
                element: '#indicadorEstadoValidacion',
                intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_BTN_ESTADO_VALIDACION'),
                position: 'left'
            });
            pasosAPresentar.push({
                element: '#contenedorFormatos',
                intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_CONTENEDOR_FORMATOS'),
                position: 'left'
            });
            pasosAPresentar.push({
                element: '#footerEditor',
                intro: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_INTRO_FOOTER_EDITOR'),
                position: 'top'
            });
            

            this.$scope.opcionesIntro = {
                doneLabel: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_LISTO'),
                exitOnEsc: true,
                keyboardNavigation: true,
                exitOnOverlayClick: false,
                showBullets: true,
                showButtons: true,
                showProgress: true,
                showStepNumbers: true,
                prevLabel: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREVIO'),
                nextLabel: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SIGUIENTE'),
                skipLabel: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SALTAR'),
                scrollToElement: true,
                steps: pasosAPresentar
            };

            this.$scope.tieneFacultad = function (facultad: number) { return shared.service.AbaxXBRLSessionService.tieneFacultad(facultad); }

            this.$scope.idUsuarioActivo = this.abaxService.idUsuarioActivo;
            this.$scope.idEmisoraActiva = this.abaxService.idEmisoraActiva;
            this.$scope.nombreCompletoUsuarioActivo = this.abaxService.nombreCompletoUsuarioActivo;

            var self = this;
            var scope = self.$scope;


            this.$scope.presentarDocumentosParaComparar = function (esVersionDocumentoOrigen?:boolean): void {
                
               var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templatesVisor/template-xbrl-presentar-documentos-para-comparar.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ConsultarDocumentosParaCompararController,
                    size: 'lg', 
                    resolve: {
                        documentoInstancia: function () {
                            return self.$scope.documentoInstancia;
                        },
                        identificadoresDocumentosPresentados: function () {
                            return self.$scope.identificadoresDocumentosPresentados;
                        },
                        esVersionDocumento: function () {

                            return esVersionDocumentoOrigen == true;
                        }
                    }
                });
                modalInstance.result.then(function (exitoImportacion) {
                    if (exitoImportacion) {
                        
                        self.$scope.establecerFormatoActivo(self.$scope.formatoActivo, true);
                    }
                }, function () {
                        //console.log('Modal dismissed at: ' + new Date());
                    });

               
            };

            this.$scope.presentarDocumentosParaImportar = function (): void {
                var modalInstance = self.$modal.open({
                    templateUrl: 'ts/templates/template-xbrl-presentar-documentos-para-importar.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ConsultarDocumentosParaImportarController,
                    size: 'lg',
                    resolve: {
                        documentoInstancia: function () {
                            return self.$scope.documentoInstancia;
                        }
                    }
                });
                modalInstance.result.then(function (exitoImportacion) {
                    if (exitoImportacion) {
                        self.$scope.establecerFormatoActivo(self.$scope.formatoActivo, true);
                    }
                        
                    
                }, function () {
                        //console.log('Modal dismissed at: ' + new Date());
                });
            };

            /*shared.service.AbaxXBRLUtilsService.addEventListenerToRootScope('validarSalidaEditorPlantilla', '$stateChangeStart',
                function (event: ng.IAngularEvent, toState: ng.ui.IState, toParams: {}, fromState: ng.ui.IState, fromParams: {}) {
                    if (scope.documentoInstancia && scope.documentoInstancia != null) {
                        if (fromState.name == "inicio.editorXBRL.editorXbrl" && scope.documentoInstancia.PendienteGuardar == true) {
                            event.preventDefault();
                            shared.service.AbaxXBRLUtilsService
                                .muestraMensajeConfirmacion("MENSAJE_CONFIRM_SALIR_EDITOR_SIN_GUARDAR", "TITULO_PROMPT_SALIR_SIN_GUARDAR")
                                .then(
                                function (confirmado: boolean) {
                                    if (confirmado) {
                                        scope.documentoInstancia.PendienteGuardar = false;
                                        self.$state.go(toState.name, toParams);
                                    }
                                }
                                );
                        }
                    }
                }
                );*/
            shared.service.AbaxXBRLUtilsService.addEventListenerToRootScope('validaRetornoDeEditorGenerico', '$stateChangeSuccess',
                function (event: ng.IAngularEvent, toState: ng.ui.IState, toParams: {}, fromState: ng.ui.IState, fromParams: {}) {
                    if (scope.documentoInstancia && scope.documentoInstancia != null) {
                        if (fromState.name == "inicio.editorXBRL.editorXbrl") {
                            var to: string = toState.name;
                            if (to.indexOf('inicio.editorXBRL.') == 0 && to != 'inicio.editorXBRL.DocumentoInstanciaCrearDocumentoInstancia1') {
                                self.$state.go('inicio.editorXBRL.DocumentoInstanciaCrearDocumentoInstancia1');
                            }
                        }
                    }
                }
                );

            math.config({ number: 'bignumber' });
            plugins.AngularJQueryBridge.getInstance().establecerAbaxService(this.abaxService);
            plugins.AngularJQueryBridge.getInstance().establecerScopeAngular(this.$scope);


            plugins.XbrlPluginUtils.inicializaCampoBusqueda();
        }

        /**
         * Obtiene la etiqueta del rol que deberá ser presentada al usuario.
         *
         * @return la etiqueta del rol que deberá ser presentada al usuario.
         */
        obtenerEtiquetaRol(rolPresentacion: model.RolPresentacion): string {

            var etiquetaRol = this.abaxService.getDocumentoInstancia().Taxonomia.obtenerEtiquetaDeRol(rolPresentacion.Uri, this.abaxService.getDocumentoInstancia().xbrlIdioma.ClaveIdioma);

            if (etiquetaRol.length == 0) {
                etiquetaRol = rolPresentacion.Nombre;
            }


            return etiquetaRol;
        }

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         * @param $q el servicio angular para operaciones en cola.
         * @param FullScreen servicio que muestra el documento en pantalla completa
         * @param $state Servicio para el manejo de cambios de estadoen las vistas.
         * @param $timeout El servicio para ejecutar tareas asíncronas
         * @param guardiaNavegacionService el servicio para ser notificado cuando el usuario intenta navegar fuera de la página
         */
        constructor($scope: IDocumentoInstanciaScope, abaxXBRLServices: services.AbaxXBRLServices, $modal: ng.ui.bootstrap.IModalService, $q: ng.IQService, FullScreen: ng.fullscreen.IFullScreen, $state: ng.ui.IStateService, $timeout: ng.ITimeoutService, guardiaNavegacionService: services.GuardianNavegarFueraPaginaService) {
            var self = this;
            this.$scope = $scope;
            this.qService = $q;
            this.abaxService = abaxXBRLServices;
            this.$scope.operacionesCalculo = model.OperacionesCalculoDocumentoInstancia.getInstance();
            this.$modal = $modal;
            this.$scope.FullScreen = FullScreen;
            this.$scope.mostrarListaRoles = true;
            this.$state = $state;
            this.$timeout = $timeout;
            this.guardiaNavegacionService = guardiaNavegacionService;

            this.init();
        }
    }
    AbaxXBRLController.$inject = ['$scope', 'abaxXBRLServices', '$modal', '$q', 'Fullscreen', '$state', '$timeout', 'guardiaNavegacionService'];

    /*
    * Interfaz para recibir parámetros en el controller
    */
    export interface AbaxControllerRouteParams extends ng.route.IRouteParamsService {
        idDocumentoInstancia: string;
        version: string;
    }
    /**
     * Implementación de un controlador para la operación de guardar una versión del documento instancia XBRL
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class GuardarDocumentoController {

        /** El scope del controlador para guardar versiones del documento instancia */
        private $scope: IGuardarDocumentoInstanciaScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IGuardarDocumentoInstanciaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLServices: services.AbaxXBRLServices, documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            var self = this;

            this.$scope.resultadoOperacion = null;
            this.$scope.guardado = false;
            this.$scope.regExpGuardarDocumento = /^[\w+(\s\w+)][^\*=;?\"|#$%&/()<>:,\]\[\.\\@]*$/;
            this.$scope.documentoInstancia = documentoInstancia;
            this.$scope.cerrarDialogo = function (): void {
                self.$scope.guardado = false;
                self.$scope.resultadoOperacion = null;
                $modalInstance.close();
            };

            this.$scope.guardarDocumento = function (isValid: boolean): void {
                if (isValid) {
                    $.isLoading({
                        text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_GUARDANDO_ESPERE')
                    });
                    abaxXBRLServices.guardarDocumentoInstancia().then(function (resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {
                        self.$scope.resultadoOperacion = resultadoOperacion;
                        if (resultadoOperacion.Resultado) {
                            abaxXBRLServices.getDocumentoInstancia().IdDocumentoInstancia = resultadoOperacion.InformacionExtra.idDocumentoInstancia;
                            abaxXBRLServices.getDocumentoInstancia().Version = resultadoOperacion.InformacionExtra.version;
                            abaxXBRLServices.getDocumentoInstancia().PendienteGuardar = false;
                        }
                        
                    }, function (resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {
                            self.$scope.resultadoOperacion = resultadoOperacion;
                            console.log(resultadoOperacion);
                        }).finally(function () {
                        $.isLoading('hide');
                        self.$scope.guardado = true;
                    });
                }
            };
        }
    }
    GuardarDocumentoController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'documentoInstancia'];


    /**
     * Implementación de un controlador para la operación de exportar un documento instancia en el formato definido
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class ExportarDocumentoController {

        /** El scope del controlador para exportar un documento instancia */
        private $scope: IExportarDocumentoInstanciaScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;


        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param $modalInstance la pantalla modal del documento instancia
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         * @param documentoInstancia documento que se tiene trabajando
         */
        constructor($scope: IExportarDocumentoInstanciaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, abaxXBRLServices: services.AbaxXBRLServices, documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$scope.formatoExportaDocumentoInstancia = TipoFormato.FormatoXbrl;

            var self = this;

            this.$scope.documentoInstancia = documentoInstancia;

            this.$scope.exportarExcel = true;
            this.$scope.importarWord = true;
            var desactivar_excel = abaxXBRLServices.getDefinicionPlantilla().obtenerVariablePorId("desactivar_excel");
            if (desactivar_excel && desactivar_excel == "true") {

                this.$scope.exportarExcel = false;
            }

            this.$scope.cerrarDialogo = function (): void {
                $modalInstance.close();
            };

            this.$scope.exportarDocumentoInstancia = function (): void {
                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREPARANDO_DESCARGA')
                });

                var definicionPlantilla = abaxXBRLServices.getDefinicionPlantilla();
                var conceptosDescartar: { [idConcepto: string]: boolean } = {};
                if (definicionPlantilla.conceptosDescartar) {
                    conceptosDescartar = definicionPlantilla.conceptosDescartar;
                }


                var hojasDescartar: Array<string> = [];
                if (definicionPlantilla.obtenerHojasDescartarExcel) {
                    hojasDescartar = definicionPlantilla.obtenerHojasDescartarExcel();
                }

                var data = {
                    espacioNombresPrincipal: $scope.documentoInstancia.EspacioNombresPrincipal,
                    documentoInstancia: $.toJSON(self.$scope.documentoInstancia),
                    idioma: self.$scope.documentoInstancia.xbrlIdioma.ClaveIdioma,
                    idUsuario: self.abaxService.idUsuarioActivo,
                    idEmpresa: self.abaxService.idEmisoraActiva,
                    fechaConstitucion: self.abaxService.getDefinicionPlantilla().ParametrosConfiguracion.fechaConstitucion,
                    dtsTaxonomia: $.toJSON($scope.documentoInstancia.DtsDocumentoInstancia),
                    conceptosDescartar: $.toJSON(conceptosDescartar),
                    hojasDescartar: $.toJSON(hojasDescartar)
                };
                var url = '';
                if (self.$scope.formatoExportaDocumentoInstancia == TipoFormato.FormatoExcel) {
                    url = 'DocumentoInstancia/GenerarDocumentoExcel';
                } else if (self.$scope.formatoExportaDocumentoInstancia == TipoFormato.FormatoWord) {
                    url = 'DocumentoInstancia/GenerarDocumentoWord';
                } else if (self.$scope.formatoExportaDocumentoInstancia == TipoFormato.FormatoPdf) {
                    url = 'DocumentoInstancia/GenerarDocumentoPdf';
                } else if (self.$scope.formatoExportaDocumentoInstancia == TipoFormato.FormatoHtml) {
                    url = 'DocumentoInstancia/GenerarDocumentoHtml';
                } else if (self.$scope.formatoExportaDocumentoInstancia == 7) {
                    url = 'DocumentoInstancia/GenerarArchivoFondosInversion';
                } else if (self.$scope.formatoExportaDocumentoInstancia == TipoFormato.FormatoZip) {
                    url = 'DocumentoInstancia/GenerarDocumentoXBRL';
                    data["zip"] = "true";
                } else {
                    url = 'DocumentoInstancia/GenerarDocumentoXBRL';
                }
                var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

                $.fileDownload(url, {
                    httpMethod: "POST",
                    data: data,
                    successCallback: function (response,url) {
                        $.isLoading('hide');
                        $modalInstance.close();
                    },
                    failCallback: function (response, url) {
                        $.isLoading('hide');
                        
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCARGA_ARCHIVO') + ":" + response,
                            {
                                title:shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_DESCARGA'),
                                buttons: { aceptar: true }
                            });
                        $modalInstance.close();
                    }
                });
            };
        }
    }
    ExportarDocumentoController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'documentoInstancia'];


    /**
     * Implementación de un controlador para la operación de importar un documento plantilla para las notas 
     * de un documento instancia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class ImportarNotasDocumentoInstanciaController {

        /** El scope del controlador para importar notas de un documento instancia */
        private $scope: IImportarNotasDocumentoInstanciaScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**
        * El servicio que permite el upload del archivo importado
        */
        private $upload: upload.IUploadService;


        /**
         * Constructor de la clase ImportarNotasDocumentoInstanciaController
         *
         * @param $scope el scope del controlador
         * @param $modalInstance la pantalla modal del documento instancia
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         * @param documentoInstancia documento que se tiene trabajando
         * @param $upload servicio para la cara de archivos
         */
        constructor($scope: IImportarNotasDocumentoInstanciaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, abaxXBRLServices: services.AbaxXBRLServices, documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl, $upload: upload.IUploadService) {
            this.$scope = $scope;
            this.$upload = $upload;

            this.abaxService = abaxXBRLServices;
            var self = this;

            this.$scope.documentoInstancia = documentoInstancia;
            this.$scope.extensionesPermitidas = "*.docx";

            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

            this.$scope.cerrarDialogo = function (): void {
                $modalInstance.close();
            };
            var generarDinamicamente: string = abaxXBRLServices.getDefinicionPlantilla().obtenerVariablePorId("PLANTILLA_WORD_DINAMICA");
            var colorConceptoNotas: { [idConcepto: string]: string } = {};
            if (abaxXBRLServices.getDefinicionPlantilla().obtenColoresConceptosPlantillaNotas)
            {
                colorConceptoNotas = abaxXBRLServices.getDefinicionPlantilla().obtenColoresConceptosPlantillaNotas();
            }

            this.$scope.puedeExportarNotasAPlantillaWord = generarDinamicamente == "true" ? true : false;

            this.$scope.obtenerPlantillaNotaDocumentoInstancia = function (): void {

                $.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREPARANDO_DESCARGA') });
                var url = 'DocumentoInstancia/ObtenerPlantillaNotasDocumentoInstancia';
                var generarDinamicamente:string = abaxXBRLServices.getDefinicionPlantilla().obtenerVariablePorId("PLANTILLA_WORD_DINAMICA");
                var data = {
                    espacioNombresPrincipal: self.$scope.documentoInstancia.EspacioNombresPrincipal
                };
                if (generarDinamicamente == "true")
                {
                    var documentoInstanciaAuxiliar = new model.DocumentoInstanciaXbrl().deserialize(self.$scope.documentoInstancia);
                    for (var idHecho in documentoInstanciaAuxiliar.HechosPorId)
                    {
                        documentoInstanciaAuxiliar.HechosPorId[idHecho].ValorHecho = "";
                        documentoInstanciaAuxiliar.HechosPorId[idHecho].ValorDefault = "";
                    }
                    data["documentoInstanciaXbrl"] = angular.toJson(documentoInstanciaAuxiliar);
                    data["idioma"] = $scope.documentoInstancia.xbrlIdioma.ClaveIdioma;
                    data["coloresConceptos"] = angular.toJson(colorConceptoNotas);
                }

                $.fileDownload(url, {
                    httpMethod: "POST",
                    data: data,
                    successCallback: function (url) {
                        $.isLoading('hide');
                    },
                    failCallback: function (response, url) {

                        $.isLoading('hide');
                        $modalInstance.close();
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_DESCARGA'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCARGA_PLANTILLA'),
                                buttons: { aceptar: true }
                            });
                    }
                });
            };

            this.$scope.exportaNotasAPlantillaNotasWord = function (): void {

                $.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREPARANDO_DESCARGA') });
                var url = 'DocumentoInstancia/ExportarAPlantillaNotasWordDocumentoInstancia';
                var data: {[nombre:string]:string} = {
                    "documentoInstanciaXbrl": angular.toJson(self.$scope.documentoInstancia),
                    "idioma": $scope.documentoInstancia.xbrlIdioma.ClaveIdioma,
                    "coloresConceptos": angular.toJson(colorConceptoNotas)
                };
                $.fileDownload(url, {
                    httpMethod: "POST",
                    data: data,
                    successCallback: function (url) {
                        $.isLoading('hide');
                    },
                    failCallback: function (response, url) {

                        $.isLoading('hide');
                        $modalInstance.close();
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_DESCARGA'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCARGA_PLANTILLA'),
                                buttons: { aceptar: true }
                            });
                    }
                });
            }

            this.$scope.importarNotasDocumentoInstancia = function (): void {

                if (!self.$scope.archivoNotasDocumentoInstanciaImportado || self.$scope.archivoNotasDocumentoInstanciaImportado == null) {
                    alert(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SELECCIONAR_ARCHIVO_NOTAS'));
                    return;
                }

                var plantillaDinamica: string = abaxXBRLServices.getDefinicionPlantilla().obtenerVariablePorId("PLANTILLA_WORD_DINAMICA");
                var fileConfig: upload.IFileUploadConfig = new MyFileConfig();
                fileConfig.file = self.$scope.archivoNotasDocumentoInstanciaImportado[0];
                fileConfig.fileName = self.$scope.archivoNotasDocumentoInstanciaImportado[0].name;
                fileConfig.data = { "documentoInstancia": $.toJSON(self.$scope.documentoInstancia), "esPlantillaDinamica": plantillaDinamica ? plantillaDinamica : "false" };
                fileConfig.method = "POST";
                fileConfig.url = "DocumentoInstancia/ImportarNotasDocumentoInstancia";
                fileConfig.transformRequest = angular.identity,
                fileConfig.headers = { 'Authorization': 'Bearer ' + shared.service.AbaxXBRLSessionService.getSesionInmediate().Token };

                var exitoImportacion = false;

                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTANDO_NOTAS')
                });
                self.$upload.upload(fileConfig).progress(
                    function (progreso: any) {

                        self.$scope.cargado = progreso.loaded;
                        self.$scope.total = progreso.total;
                        if (self.$scope.cargado > 0) {
                            self.$scope.porcentajeCargado = Math.round((self.$scope.cargado / self.$scope.total) * 100);
                        }
                    }
                    ).then(
                    function (response: any) {
                        var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = response.data;

                        if (resultadoOperacion.Resultado) {
                            self.$scope.documentoInstancia.deserialize(resultadoOperacion.InformacionExtra);
                            if (self.abaxService.getDefinicionPlantilla() && self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas) {
                                for (var idFormula in self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas) {
                                    if (self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas.hasOwnProperty(idFormula)) {
                                        self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula].RequiereValidacion = true;
                                    }
                                }
                                plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().evaluaHechosFijosDocumentoInstancia();
                                self.$scope.documentoInstancia.RequiereValidacionFormulas = true;
                                self.$scope.documentoInstancia.PendienteGuardar = true;
                            }
                            self.$scope.documentoInstancia.RequiereValidacion = true;
                            /* for (var property in resultadoOperacion.InformacionExtra.HechosPorId) {
                                 if (self.$scope.documentoInstancia.HechosPorId.hasOwnProperty(property)) {
                                     self.$scope.documentoInstancia.HechosPorId[property].deserialize(resultadoOperacion.InformacionExtra.HechosPorId[property]);
                                 }
                             }*/

                            exitoImportacion = true;
                        } else {
                            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_IMPORTAR_NOTAS') + (resultadoOperacion.Mensaje ? resultadoOperacion.Mensaje : ""),
                                {
                                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                    buttons: { aceptar: true }
                                });
                        }
                    },
                    function (response: any) {

                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_IMPORTAR_NOTAS'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                buttons: { aceptar: true }
                            });
                    }
                    ).finally(
                    function () {
                        self.$scope.cargado = 0;
                        $.isLoading('hide');
                        $modalInstance.close(exitoImportacion);
                    }
                    );
            };


            this.$scope.mostrarNombreInput = function (files: any): void {
                self.$scope.nombreArchivoSeleccionado = files[0].name;
            };
        }
    }
    ImportarNotasDocumentoInstanciaController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'documentoInstancia', '$upload'];




    /**
    * Implementación de un controlador para la operación de importar un documento plantilla a partir
    * de un documento en excel
    *
    * @author Luis Angel Morales Gonzalez
    * @version 1.0
    */
    export class ImportarDocumentoInstanciaExcelController {

        /** El scope del controlador para importar notas de un documento instancia en excel*/
        private $scope: IImportarDocumentoInstanciaExcelScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**
        * El servicio que permite el upload del archivo importado
        */
        private $upload: upload.IUploadService;


        /**
         * Constructor de la clase ImportarDocumentoInstanciaExcelController
         *
         * @param $scope el scope del controlador
         * @param $modalInstance la pantalla modal del documento instancia
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         * @param documentoInstancia documento que se tiene trabajando
         * @param $upload servicio para la cara de archivos
         */
        constructor($scope: IImportarDocumentoInstanciaExcelScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, abaxXBRLServices: services.AbaxXBRLServices, documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl, $upload: upload.IUploadService) {
            this.$scope = $scope;
            this.$upload = $upload;
            this.$scope.mostrarResumenCarga = false;
            this.abaxService = abaxXBRLServices;
            var self = this;

            this.$scope.documentoInstancia = documentoInstancia;
            this.$scope.extensionesPermitidas = "*.xlsx";

            this.$scope.cerrarDialogo = function (): void {
                $modalInstance.close(self.$scope.mostrarResumenCarga);
            };

            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

            this.$scope.obtenerPlantillaExcel = function (): void {

                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREPARANDO_DESCARGA')
                });
                var url = 'DocumentoInstancia/ObtenerPlantillaImportacionExcel';

                var definicionPlantilla = abaxXBRLServices.getDefinicionPlantilla();
                var conceptosDescartar: { [idConcepto: string]: boolean } = {};
                if (definicionPlantilla.conceptosDescartar) {
                    conceptosDescartar = definicionPlantilla.conceptosDescartar;
                }


                var hojasDescartar: Array<string> = [];
                if (definicionPlantilla.obtenerHojasDescartarExcel) {
                    hojasDescartar = definicionPlantilla.obtenerHojasDescartarExcel();
                }

                var data = {
                    espacioNombresPrincipal: $scope.documentoInstancia.EspacioNombresPrincipal,
                    dtsTaxonomia: $.toJSON($scope.documentoInstancia.DtsDocumentoInstancia),
                    idioma: $scope.documentoInstancia.xbrlIdioma.ClaveIdioma,
                    conceptosDescartar: $.toJSON(conceptosDescartar),
                    hojasDescartar: $.toJSON(hojasDescartar)

                };

                $.fileDownload(url, {
                    httpMethod: "POST",
                    data: data,
                    successCallback: function (url) {
                        $.isLoading('hide');
                        self.$scope.rolFormatoActivo = self.abaxService.getDocumentoInstancia().Taxonomia.RolesPresentacion[0];
                    },
                    failCallback: function (response, url) {
                        $.isLoading('hide');
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCARGA_ARCHIVO') + ":" + response,
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_DESCARGA'),
                                buttons: { aceptar: true }
                            });
                        $modalInstance.close();
                    }
                });
            };

            this.$scope.importarDocumentoExcel = function (): void {

                if (!self.$scope.archivoXLS || self.$scope.archivoXLS == null) {
                    alert(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SELECCIONAR_ARCHIVO_EXCEL'));
                    return;
                }

                var definicionPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla();
                var conceptosDescartar: { [idConcepto: string]: boolean } = {};
                if (definicionPlantilla.conceptosDescartar) {
                    conceptosDescartar = definicionPlantilla.conceptosDescartar;
                }


                var hojasDescartar: Array<string> = [];
                if (definicionPlantilla.obtenerHojasDescartarExcel) {
                    hojasDescartar = definicionPlantilla.obtenerHojasDescartarExcel();
                }


                var fileConfig: upload.IFileUploadConfig = new MyFileConfig();
                fileConfig.file = self.$scope.archivoXLS[0];
                fileConfig.fileName = self.$scope.archivoXLS[0].name;
                fileConfig.data = { "documentoInstancia": $.toJSON(self.$scope.documentoInstancia), conceptosDescartar: $.toJSON(conceptosDescartar), hojasDescartar: $.toJSON(hojasDescartar) };
                fileConfig.headers = { 'Authorization': 'Bearer ' + shared.service.AbaxXBRLSessionService.getSesionInmediate().Token };
                fileConfig.method = "POST";
                fileConfig.url = "DocumentoInstancia/ImportarDocumentoInstanciaExcel";
                fileConfig.transformRequest = angular.identity;

                var exitoImportacion = false;

                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTANDO_EXCEL')
                });
                self.$upload.upload(fileConfig).progress(
                    function (progreso: any) {

                        self.$scope.cargado = progreso.loaded;
                        self.$scope.total = progreso.total;
                        if (self.$scope.cargado > 0) {
                            self.$scope.porcentajeCargado = Math.round((self.$scope.cargado / self.$scope.total) * 100);
                        }
                    }
                    ).then(
                    function (response: any) {
                        var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = response.data;

                        if (resultadoOperacion.Resultado) {
                            self.$scope.documentoInstancia.deserialize(resultadoOperacion.InformacionExtra["documentoInstancia"]);
                            self.abaxService.limpiarDiccionariosServicio();
                            self.$scope.resumenProcesoImportacion = new model.ResumenProcesoImportacionExcelDto().deserialize(resultadoOperacion.InformacionExtra["resumenProceso"]);

                            if (self.abaxService.getDefinicionPlantilla()) {
                                self.abaxService.getDefinicionPlantilla().eliminarHechosSinUso(self.abaxService);
                            }

                            if (self.abaxService.getDefinicionPlantilla() && self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas) {
                                for (var idFormula in self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas) {
                                    if (self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas.hasOwnProperty(idFormula)) {
                                        self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula].RequiereValidacion = true;
                                    }
                                }
                                self.$scope.documentoInstancia.RequiereValidacionFormulas = true;
                            }
                            plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().evaluaHechosFijosDocumentoInstancia();
                            self.$scope.documentoInstancia.RequiereValidacion = true;
                            self.$scope.documentoInstancia.PendienteGuardar = true;
                            exitoImportacion = true;
                        } else {
                            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_IMPORTAR_EXCEL') + (resultadoOperacion.Mensaje ? resultadoOperacion.Mensaje : ""),
                                {
                                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                    buttons: { aceptar: true }
                                });
                            $modalInstance.close(false);
                        }
                    },
                    function (response: any) {

                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_IMPORTAR_EXCEL'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                buttons: { aceptar: true }
                            });
                    }
                    ).finally(
                    function () {
                        self.$scope.mostrarResumenCarga = true;
                        self.$scope.cargado = 0;
                        $.isLoading('hide');
                        //$modalInstance.close(exitoImportacion);
                    }
                    );



            };

            this.$scope.mostrarNombreInput = function (files: any): void {
                self.$scope.nombreArchivoSeleccionado = files[0].name;
            };


        }
    }
    ImportarDocumentoInstanciaExcelController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'documentoInstancia', '$upload'];


    /**
     * Implementación de un controlador para la operación de unir varios archivos PDF
     *
     * @author Estefania Vargas
     * @version 1.0
     */
    export class UnirArchivosPdfController {

        /** 
         * El scope del controlador para importar notas de un documento instancia 
         */
        private $scope: IUnirArchivosPDFScope;

        /** 
         * El servicio angular parala comunicación con el backend de la aplicación 
         */
        private abaxService: services.AbaxXBRLServices;

        /**
         * El servicio que permite el upload del archivo importado
         */
        private $upload: upload.IUploadService;


        /**
         * Constructor de la clase UnirArchivosPDFController
         *
         * @param $scope el scope del controlador
         * @param $modalInstance la pantalla modal del documento instancia
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         * @param documentoInstancia documento que se tiene trabajando
         * @param $upload servicio para la cara de archivos
         */
        constructor($scope: IUnirArchivosPDFScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, abaxXBRLServices: services.AbaxXBRLServices, documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl, $upload: upload.IUploadService) {
            this.$scope = $scope;
            this.$upload = $upload;
            var $util = shared.service.AbaxXBRLUtilsService;

            this.abaxService = abaxXBRLServices;
            var self = this;

            this.$scope.documentoInstancia = documentoInstancia;
            this.$scope.extensionesPermitidas = "*.pdf";

            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

            this.$scope.cerrarDialogo = function (): void {
                $modalInstance.close();
            };
           
            this.$scope.descargarArchivoPdfUnido = function (): void {

                if (!self.$scope.archivosPDF || self.$scope.archivosPDF == null) {
                    $util.advertencia({ texto: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SELECCIONAR_ARCHIVO_PDF_CONCATENAR') });
                    return;
                }

                $.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREPARANDO_DESCARGA') });
                var url = 'DocumentoInstancia/DescagarPDFConcatenado';   
                self.$scope.formData = new FormData();

                for (let file of self.$scope.archivosPDF)
                    self.$scope.formData.append(file.name, file);

                var xhr = new XMLHttpRequest();
                var cerrar = function () {
                    $.isLoading('hide');
                    $modalInstance.close();
                };

                xhr.open("POST", url);
                xhr.responseType = "arraybuffer";
                xhr.setRequestHeader("Authorization", 'Bearer ' + shared.service.AbaxXBRLSessionService.getSesionInmediate().Token );
                xhr.onloadend = function () {

                    if (xhr.status != 200)
                    {
                        cerrar();
                        shared.service.AbaxXBRLUtilsService.error({ texto: shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MESSAGE_ERROR_CONCATENAR_PDF") });
                        return;
                    }

                    self.$scope.arrayBuffer = xhr.response;
                    var anchor = $('<a/>');
                    var fileName = "archivosAgrupados.pdf"; 
                    if (window.navigator.msSaveOrOpenBlob) {
                        var blob = new Blob([self.$scope.arrayBuffer]);
                        $(anchor).click(function () {
                            window.navigator.msSaveOrOpenBlob(blob, fileName);
                        });
                    } else {
                        var blob = new Blob([self.$scope.arrayBuffer], { type: "application/pdf" });
                        anchor.attr({
                            href: window.URL.createObjectURL(blob),
                            download: fileName
                        });
                    }
                    $('body').append(anchor);
                    anchor[0].click();
                    anchor.remove();
                    cerrar();
                };
                xhr.onreadystatechange = cerrar;
                xhr.onabort = cerrar;
                xhr.onerror = function () {

                    cerrar();
                    shared.service.AbaxXBRLUtilsService.error({ texto: shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MESSAGE_ERROR_CONCATENAR_PDF")});
                };

                xhr.send(self.$scope.formData);
                
            };

            this.$scope.mostrarNombresInput = function (files: any): void {
                self.$scope.nombresArchivosSeleccionados = "";

                for (let file of files) {
                    self.$scope.nombresArchivosSeleccionados = self.$scope.nombresArchivosSeleccionados + file.name + ", ";
                }

                self.$scope.nombresArchivosSeleccionados = self.$scope.nombresArchivosSeleccionados.substring(0, (self.$scope.nombresArchivosSeleccionados.length - 2));
                self.$scope.archivosPDF = files;
            };
        }
    }
    UnirArchivosPdfController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'documentoInstancia', '$upload'];


    /**
     * Enumeración para contener los posibles identificadores de paneles de datos que se presentan al usuarios
     */
    export enum PanelesDatos {
        /** El identificador del panel que muestra los formatos */
        Formatos = 1,
        /** El identificador del panel que muestra las versiones del documento */
        Versiones = 2,
        /** El identificador del panel que muestra los usuarios con acceso al documento */
        Usuarios = 3
    }

    /**
     * Definición de la estructura del scope del controlador.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IDocumentoInstanciaScope extends ng.IScope {


        /** Actualiza la bandera que indica si debe mostrarse o no la lista de roles */
        actualizarMostrarListaRoles();

        /** El documento instancia que está siendo presentado en pantalla */
        documentoInstancia: model.DocumentoInstanciaXbrl;

        /** El conjunto de operaciones de cálculo que se realizan dentro del documento instancia */
        operacionesCalculo: model.OperacionesCalculoDocumentoInstancia;

        /** Idioma que se muestra en el documento instancia*/
        xbrlIdioma: abaxXBRL.model.IdiomaTaxonomia;

        /** Listado de versiones del documento de instancia */
        listaHistoricoVersiones: Array<model.VersionDocumentoInstancia>;

        /** El formato que se encuentra activo en el momento */
        formatoActivo: number;

        /** Indica si debe mostrarse o no la lista de roles */
        mostrarListaRoles: boolean;

        /** Indica si el botón de mostrar / ocular roles se debe de mostrar */
        mostrarValidarDocumento: boolean;

        /** Indica si el botón exportar debería estar deshabilitado */
        deshabilitarExportar: boolean;

        /** Indica si el botón guardar debería estar deshabilitado */
        deshabilitarGuardar: boolean;

        /** Indica si el botón importar excel debería estar deshabilitado */
        deshabilitarImportarExcel: boolean;

        /** Indica si el botón importar notas debería estar deshabilitado */
        deshabilitarImportarWord: boolean;

        /** Indica si el botón para unir archivos PDF debería estar deshabilitado */
        deshabilitarUnirPdf: boolean;

        /** El URI del rol del formato activo */
        rolFormatoActivo: abaxXBRL.model.RolPresentacion;

        /** El identificador del panel de datos que está visible al usuario */
        panelActivo: PanelesDatos;

        /** Definición del valor por default del ckeditor que se carga de un inicio en los formatos de un documento instancia*/
        valorCkEditorDefault: string;

        /**
         * Indica si el índice de formato proporcionado es el formato activo.
         *
         * @param numeroFormato el número de formato a consultar
         * @return true si el número de formato corresponde al activo. false en cualquier otro caso.
         */
        esFormatoActivo(numeroFormato: number): boolean;

        /**
         * Establece el número de formato que será considerado como activo.
         *
         * @param numeroFormato el número del formato a marcar como activo.
         */
        establecerFormatoActivo(numeroFormato: number, recargar?: boolean): void;

        /**
         * Presenta el diálogo modal para que el usuario pueda guardar una versión del documento instancia.
         */
        guardarDocumentoInstancia(): void;

        /**
        * Presenta el diálogo para que el usuario pueda exportar un documento instancia en el formato definido.
        */
        exportarDocumentoInstancia(): void;


        /** El panel de datos que muestra los formatos de captura */
        PanelFormatos: PanelesDatos;

        /** El panel que muestra las versiones del documento */
        PanelVersiones: PanelesDatos;

        /** El panel que muestra los usuarios con acceso al documento */
        PanelUsuarios: PanelesDatos;

        /**
         * Indica si el identificador del panel proporcionado es el panel activo.
         *
         * @param idPanel el identificador del panel a consultar
         * @return true si el identificador del panel corresponde al activo. false en cualquier otro caso.
         */
        esPanelActivo(idPanel: PanelesDatos): boolean;

        /**
         * Establece el identificador del panel que será considerado como activo.
         *
         * @param idPanel el identificador del panel a marcar como activo.
         */
        establecerPanelActivo(idPanel: PanelesDatos): void;
        /**
        * Establece el panel de formatos como panel activo
        */
        establecerPanelActivoFormatos(recargar: boolean): void;
        /**
         * Presenta el panel de datos que contiene el histórico de versiones del documento instancia.
         */
        presentarVersionesDocumentoInstancia(): void;

        /**
         * Presenta el panel de datos que contiene el listado de usuarios asignados del documento instancia.
         */
        presentarUsuariosDocumentoInstancia(): void;

        /**
        *Bloquea o desbloquea el documento instancia que este trabajando el usuario
        */
        bloquearLiberarDocumentoInstancia(): void;

        /**
        *Cambia el idioma al documento instancia
        */
        cambiarIdiomaDocumentoInstancia(indiceIdiomaSeleccionado: number): void;

        /**
        * Validación manual en el server del documento de instancia
        */
        validarManualDocumentoInstancia(): void;

        /**
        *Expande el editor que esta visualizando el usuario
        */
        expandirEditor(): void;

        /** Muestra el documento activo en pantalla completa*/
        mostrarPantallaCompletaDocumento(): void;

        /**
        * Muestra el dialogo para bajar la plantilla para poder importar notas a los hechos del documento instancia
        */
        importarNotasWord(): void;

        /**
        * Muestra el dialogo para bajar la plantilla y poder importar la informacion de un excel en el documento que se esta trabajando
        */
        importarInformacionDeDocumentoExcel(): void;

        /**
         * Muestra el dialogo para bajar unir varios archivos pdf en uno solo
         */
        unirArchivosPdf(): void;
        /**
        * Bandera que indica si debe presentarse la herramienta para concatenar PDFs.
        **/
        mostrarHerramientaPDF: boolean;


        /* Identificador del usuario que realiza la operación */
        idUsuarioActivo: number;

        /* Identificador de la emisora del usuario que realiza la operación */
        idEmisoraActiva: number;

        /* Nombre completo del usuario que realiza la operación */
        nombreCompletoUsuarioActivo: string;


        /* Indica si el formato se esta presentando en pantalla completa */
        EsPantallaCompleta: boolean;

        /** Muestra la pantalla completa del documento que se esta visualizando*/
        FullScreen: ng.fullscreen.IFullScreen;

        /** Las opciones del módulo introductorio a la interfaz del usuario */
        opcionesIntro: intro.js.IntroJSOptions;

        /**
        * Expone el enum con la lista de facultades disponibles.
        **/
        FacultadesEnum: any;

        /**
        * Determina si el usuario en sesión tiene la facultad indicada.
        * @param facultad Identificador de la facultad a evaluar.
        * @return Si el usuario en sesión tiene la facultad indicada.
        **/
        tieneFacultad(facultad: number): boolean;

        /**
        * Presenta pantalla para elegir un documento a comparar con el documento presentado actualmente
        */
        presentarDocumentosParaComparar(esVersionDocumentoOrigen?: boolean): void;

        /* Lista de los identificadores de los documentos presentados actualmente, incluyendo
        *  los identificadores de los documentos que se comparan
        */
        identificadoresDocumentosPresentados: Array<number>;
        /*
        * Presenta pantalla para elegir un documento del cual se realiza la importación de hechos
        */
        presentarDocumentosParaImportar(): void;
        /**
        * Bandera que indica si el tipo de taxonomía puede importar a excel.
        **/
        ocultarImportacionExcel: boolean;

        /**
        * Bandera que indica si el tipo de taxonomía puede importar a word.
        **/
        ocultarImportacionWord: boolean;
    }

    /**
     * Definición de la estructura del scope del controlador para guardar un documento instancia.
     * @ author
     */
    export interface IGuardarDocumentoInstanciaScope extends IDocumentoInstanciaScope {

        /** Indica si la operación de guardado ya se ha completado */
        guardado: boolean;

        /** Expresión Regular que se utiliza para validar el nombre del documento de instancia */
        regExpGuardarDocumento: RegExp;

        /** El resultado de la invocación remota al servicio de guardado del documento instancia */
        resultadoOperacion: abaxXBRL.model.ResultadoOperacion;

        /** Documento editado */
        documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;


        /**
         * Cierra el diálogo que permite guardar el documento
         */
        cerrarDialogo(): void;


        /**
         * Guarda el documento instancia.
         * 
         * @param isValid el estado de la validación de la forma presentada al usuario. 
         */
        guardarDocumento(isValid: boolean): void;
    }


    /**
    * Enumeración para los tipos de formatos que se pueden exportar
    */
    export enum TipoFormato {
        /** El identificador del tipo de formato XBRL */
        FormatoXbrl = 1,
        /** El identificador del tipo de formato Excel */
        FormatoExcel = 2,
        /** El identificador del tipo de formato Word */
        FormatoWord = 3,
        /** El identificador del tipo de formato PDF */
        FormatoPdf = 4,
        /** El identificador del tipo de formato HTML */
        FormatoHtml = 5,
        /** El identificador del tipo de formato ZIP */
        FormatoZip = 6
    }

    /**
     * Definición de la estructura del scope del controlador para exportar un documento instancia.
     * @ author Luis Angel Morales Gonzalez
     */
    export interface IExportarDocumentoInstanciaScope extends IDocumentoInstanciaScope {

        /** Documento que se pretende exportar */
        documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;

        /**
         * Cierra el diálogo que permite guardar el documento
         */
        cerrarDialogo(): void;

        /**
         * Exporta el documento instancia al formato definido.
         */
        exportarDocumentoInstancia(): void;

        /**
         * Formato que se pretende exportar el documento instancia.
         */
        formatoExportaDocumentoInstancia: number;
        /**
        * Bandera que indica si se debe de exportar a excel.
        **/
        exportarExcel: boolean;
    }

    /**
     * Definición de la estructura del scope del controlador para importar las notas de un documento instancia.
     * @ author Luis Angel Morales Gonzalez
     */
    export interface IImportarNotasDocumentoInstanciaScope extends IDocumentoInstanciaScope {

        /** Documento que se pretende importar las notas */
        documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;

        /**
         * Cierra el diálogo que permite importar las notas de un documento instancia
         */
        cerrarDialogo(): void;

        /**
         * Importa las notas de los hechos del documento instancia.
         */
        importarNotasDocumentoInstancia(): void;

        /**Muestra en el input de la pantalla de carga el nombre del archivo seleccionado*/
        mostrarNombreInput(files: any): void;

        /** Obtiene la plantilla para poder importar informacion de los hechos de tipo blocking text*/
        obtenerPlantillaNotaDocumentoInstancia(): void;
        /**
        * Exporta las notas a la palntilla de notas de Word.
        **/
        exportaNotasAPlantillaNotasWord(): void;

        /** Archivo que será importado en el documento de instancia */
        archivoNotasDocumentoInstanciaImportado: File;

        /** Configuración de extensiones de archivo permitidas */
        extensionesPermitidas: string;

        /** Nombre del archivo Seleccionado */
        nombreArchivoSeleccionado: string;

        /** Total de bytes cargados al momento **/
        cargado: number;

        /** Total de bytes del documento de instancia */
        total: number;

        /** Porcentaje del archivo que se ha cargado */
        porcentajeCargado: number;
        /**
        * Bandera que indica si se pueden exportar las notas a plantilla de Word.
        **/
        puedeExportarNotasAPlantillaWord: boolean;

    }


    /**
     * Definición de la estructura del scope del controlador para importar informacion de un documento en excel.
     * @ author Luis Angel Morales Gonzalez
     */
    export interface IImportarDocumentoInstanciaExcelScope extends IDocumentoInstanciaScope {

        /** Documento que se pretende importar las notas */
        documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;
        /** Cifras de control y mensajes de errores del proceso de importación de excel */
        resumenProcesoImportacion: abaxXBRL.model.ResumenProcesoImportacionExcelDto;
        /** Indica si se debe de presentar el resumen de la carga de archivo */
        mostrarResumenCarga: boolean;
        /**
         * Cierra el diálogo que permite importar las notas de un documento instancia
         */
        cerrarDialogo(): void;

        /**
         * Importa las notas de los hechos del documento instancia.
         */
        importarDocumentoExcel(): void;

        /**Muestra en el input de la pantalla de carga el nombre del archivo seleccionado*/
        mostrarNombreInput(files: any): void;

        /** Obtiene la plantilla que será utilizada para importar informacion al documento instancia*/
        obtenerPlantillaExcel();

        /** Archivo que será importado en el documento de instancia */
        archivoXLS: File;

        /** Nombre del archivo Seleccionado */
        nombreArchivoSeleccionado: string;

        /** Configuración de extensiones de archivo permitidas */
        extensionesPermitidas: string;

        /** Total de bytes cargados al momento **/

        cargado: number;

        /** Total de bytes del documento de instancia */
        total: number;

        /** Porcentaje del archivo que se ha cargado */
        porcentajeCargado: number;

    }

    /**
     * Definición de la estructura del scope del controlador para concatenar varios archivos PDF.
     * @ author Estefania Vargas
     */
    export interface IUnirArchivosPDFScope extends IDocumentoInstanciaScope {

        /** 
         * Documento que se pretende importar las notas
         */
        documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;

        /**
         * Cifras de control y mensajes de errores del proceso de importación de excel
         */
        resumenProcesoImportacion: abaxXBRL.model.ResumenProcesoImportacionExcelDto;

        /** 
         * Indica si se debe de presentar el resumen de la carga de archivo 
         */
        mostrarResumenCarga: boolean;

        /**
         * Cierra el diálogo que permite importar las notas de un documento instancia
         */
        cerrarDialogo(): void;

        /** 
         * Archivo que será importado en el documento de instancia
         */
        archivosPDF: Array<File>;

        /**
         * Muestra en el input de la pantalla de carga el nombre de los archivos seleccionados
         */
        mostrarNombresInput(files: any): void;

        /** 
         * Nombres de los archivos Seleccionados
         */
        nombresArchivosSeleccionados: string;

        /** 
         * Configuración de extensiones de archivo permitidas
         */
        extensionesPermitidas: string;

        /**
         * Descarga el PDF resultante después de la concatenación
         */
        descargarArchivoPdfUnido(files: any): void;

        /** 
         * Total de bytes cargados al momento 
         */
        cargado: number;

        /** 
         * Total de bytes del documento de instancia 
         */
        total: number;

        /** 
         * Porcentaje del archivo que se ha cargado 
         */
        porcentajeCargado: number;

        formData: FormData;

        arrayBuffer: any;

    }



    /**
    * Implementación de la interfaz para los parámetros de configuración del request del plugin
    * File Upload
    */
    class MyFileConfig implements upload.IFileUploadConfig {
        file: any;
        fileName: string;
        cache;
        data: any;
        headers: any;
        method: string;
        params: any;
        responseType: any;
        timeout: any;
        transformRequest: any;
        transformResponse: any;
        url: string;
        withCredentials: any;
        xsrfCookieName: any;
        xsrfHeaderName: any;
    }

    export interface IConsultarDocumentosParaCompararScope extends IDocumentoInstanciaScope {
        /**
        * Listado de documentos del usuario
        **/
        documentosUsuario: Array<abaxXBRL.shared.modelos.IDocumentoInstancia>;
        
        /**
        * Muestra el icono de cargar mientras se consultan los documentos
        */
        mostrarCargando: boolean;
        
        /**
        * Cierra el dálogo de consulta
        */
        cerrarDialogo(): void;

        /** Indica si el usuario tiene documentos */
        existenDocumentosUsuario: boolean;

        /**
        * Objeto con las opcinoes de configuración del datatable local.
        **/
        opcionesDataTableDocumentosUsuario: any;

        /** ID del documento que se selecciona */
        idDocumentoSeleccionado: number;

        /** Invoca el servicio para imortar los hechos de un documento de instancia al documento de instancia actual */
        importarHechosDocumento(): void;

        /* Actualiza el identificador del documento de instancia */
        actualizarDocumentoSeleeccionado(idDoc: number): void;
    }

    export class ConsultarDocumentosParaCompararController {
        
        /** El scope del controlador para cargar un documento a comparar*/
        private $scope: IConsultarDocumentosParaCompararScope;
        /**
        * Bandera que indica que el comparador va ha mostrar una version del mismo documento.
        **/ 
        private esVersionDocumento: boolean;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        
        /* Servicio de diálogos modales
        */
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        private init(): void {

            this.$scope.mostrarCargando = true;
            this.$scope.existenDocumentosUsuario = false;
            var self = this;

            this.$scope.cerrarDialogo = function (): void {
                self.$scope.documentosUsuario = null;
                self.$modalInstance.close(false);
            };
            
            
            this.$scope.importarHechosDocumento = function (): void {
                
                
                if (self.$scope.idDocumentoSeleccionado && self.$scope.idDocumentoSeleccionado !== undefined) {
                    $.isLoading({
                        text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CARGANDO_DOCUMENTO_INSTANCIA')
                    });
                    
                    self.abaxService.agregarDocumentoInstanciaAComparar(self.$scope.idDocumentoSeleccionado, self.esVersionDocumento).then(function (resultado: model.ResultadoOperacion): void {
                       

                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('VISOR_XBRL_COMPARAR_DOCUMENTO_ALERTA_DOCUMENTO_IMPORTADO_CORRECTAMENTE'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('VISOR_XBRL_COMPARAR_DOCUMENTO_ALERTA'),
                                buttons: { aceptar: true }
                            });

                        self.$scope.identificadoresDocumentosPresentados.push(self.$scope.idDocumentoSeleccionado);
                        
                        self.abaxService.getDocumentoInstancia().EsComparadorDocumento = true;
                        self.abaxService.getDocumentoInstancia().RequiereValidacion = true;
                        self.abaxService.getDocumentoInstancia().RequiereValidacionFormulas = true;

                        self.$modalInstance.close(true);
                    }
                    ,
                        self.abaxXBRLRequestService.getOnErrorDefault()
                        ).finally(function (): void { $.isLoading('hide'); });

                } else {
                    alert(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('VISOR_XBRL_COMPARAR_DOCUMENTO_ALERTA_ELEGIR_DOCUMENTO'));
                }

            };

            this.$scope.actualizarDocumentoSeleeccionado = function (idDocumento: number): void {
                self.$scope.idDocumentoSeleccionado = idDocumento;
            }
            self.$scope.opcionesDataTableDocumentosUsuario = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            self.$scope.opcionesDataTableDocumentosUsuario.withOption("paging", true);
            self.$scope.opcionesDataTableDocumentosUsuario.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
            
            var idDocumentoInstancia = self.abaxService.getDocumentoInstancia().IdDocumentoInstancia;
            this.abaxService.obtenerDocumentosVersion(idDocumentoInstancia).then(
                function (result: any) {
                    var resultado: model.ResultadoOperacion = result;
                    self.$scope.documentosUsuario = [];
                    for (var idxDoc in resultado.InformacionExtra["ListaDocumentos"]) {
                        var documento: shared.modelos.IDocumentoInstancia = resultado.InformacionExtra["ListaDocumentos"][idxDoc];
                        if (!self.$scope.identificadoresDocumentosPresentados || self.$scope.identificadoresDocumentosPresentados.indexOf(documento.IdDocumentoInstancia) < 0) {
                            self.$scope.documentosUsuario.push(documento);
                        }
                    }

                    if (self.$scope.documentosUsuario && self.$scope.documentosUsuario.length && self.$scope.documentosUsuario.length > 0) {
                        self.$scope.existenDocumentosUsuario = true;
                    }
                    self.$scope.mostrarCargando = false;
                }
                ,
                self.abaxXBRLRequestService.getOnErrorDefault());
        }

        /**
        * Constructor de la clase ConsultarDocumentosParaCompararController
        *
        * @param $scope el scope del controlador
        * @param $modalInstance la pantalla modal del documento instancia
        * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
        * @param documentoInstancia documento que se tiene trabajando
        */
        constructor($scope: IConsultarDocumentosParaCompararScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLServices: services.AbaxXBRLServices,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService,
            documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl,
            identificadoresDocumentosPresentados: Array<number>,
            esVersionDocumento:boolean) {
            this.$modalInstance = $modalInstance;
            this.$scope = $scope;
            this.$scope.identificadoresDocumentosPresentados = identificadoresDocumentosPresentados;
            this.abaxService = abaxXBRLServices;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            var self = this;
            this.$scope.documentoInstancia = documentoInstancia;
            this.esVersionDocumento = esVersionDocumento;
            this.init();
        }
    }
    ConsultarDocumentosParaCompararController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'abaxXBRLRequestService', 'documentoInstancia', 'identificadoresDocumentosPresentados','esVersionDocumento'];


    export interface IConsultarDocumentosParaImportarScope extends IDocumentoInstanciaScope {
        /**
        * Listado de documentos del usuario
        **/
        documentosUsuario: Array<abaxXBRL.shared.modelos.IDocumentoInstancia>;
        
        /**
        * Muestra el icono de cargar mientras se consultan los documentos
        */
        mostrarCargando: boolean;
        
        /**
        * Cierra el dálogo de consulta
        */
        cerrarDialogo(): void;

        /** Indica si el usuario tiene documentos */
        existenDocumentosUsuario: boolean;

        /**
        * Objeto con las opcinoes de configuración del datatable local.
        **/
        opcionesDataTableDocumentosUsuario: any;

        /** ID del documento que se selecciona */
        idDocumentoSeleccionado: number;

        /** Invoca el servicio para imortar los hechos de un documento de instancia al documento de instancia actual */
        importarHechosDocumento(): void;

        /* Actualiza el identificador del documento de instancia */
        actualizarDocumentoSeleeccionado(idDoc: number): void;

        /* Indicador para la opción de importar valores solo si la unidad coincide */
        coincidirMoneda: boolean;

        /* Indicador para la opción de importar valores solo si el hecho destino es cero */
        sobreescribirValores: boolean;
    }

    export class ConsultarDocumentosParaImportarController {
        
        /** El scope del controlador para cargar un documento a comparar*/
        private $scope: IConsultarDocumentosParaImportarScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        
        /* Servicio de diálogos modales
        */
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        private init(): void {
            var $self = this;
            this.$scope.mostrarCargando = true;
            this.$scope.existenDocumentosUsuario = false;
            this.$scope.coincidirMoneda = false;
            this.$scope.sobreescribirValores = false;
            var self = this;

            this.$scope.cerrarDialogo = function (): void {
                
                self.$modalInstance.close(false);
            };

            this.$scope.importarHechosDocumento = function (): void {

                if (self.$scope.idDocumentoSeleccionado && self.$scope.idDocumentoSeleccionado !== undefined) {
                    $.isLoading({
                        text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTANDO_HECHOS_DOCUMENTO_INSTANCIA')
                    });
                    self.abaxService.importarHechosDeDocumento(self.$scope.idDocumentoSeleccionado,true,true).then(function (resultado: model.ResultadoOperacion): void {
                        if (self.abaxService.getDefinicionPlantilla() && self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas) {
                            for (var idFormula in self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas) {
                                if (self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas.hasOwnProperty(idFormula)) {
                                    self.abaxService.getDefinicionPlantilla().obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula].RequiereValidacion = true;
                                }
                            }
                            self.$scope.documentoInstancia.RequiereValidacionFormulas = true;
                        }
                        self.$scope.documentoInstancia.RequiereValidacion = true;
                        self.$scope.documentoInstancia.PendienteGuardar = true;
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTAR_HECHOS_ALERTA_DOCUMENTO_IMPORTADO_CORRECTAMENTE', { numHechos: resultado.InformacionExtra['hechosImportados'] }));
                        self.$modalInstance.close(true);
                    }
                        ,
                        self.abaxXBRLRequestService.getOnErrorDefault()
                        ).finally(function (): void { $.isLoading('hide'); });

                } else {
                    alert(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTAR_DOCUMENTO_ALERTA_ELEGIR_DOCUMENTO'));
                }

            };

            this.$scope.actualizarDocumentoSeleeccionado = function (idDocumento: number): void {
                self.$scope.idDocumentoSeleccionado = idDocumento;
            }
            self.$scope.opcionesDataTableDocumentosUsuario = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            self.$scope.opcionesDataTableDocumentosUsuario.withOption("paging", true);
            self.$scope.opcionesDataTableDocumentosUsuario.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");


            this.abaxService.obtenerDocumentosUsuarioEnListaUnificada().then(
                function (result: any) {
                    var resultado: model.ResultadoOperacion = result;
                    self.$scope.documentosUsuario = [];
                    for (var idxDoc in resultado.InformacionExtra["ListaDocumentos"]) {
                        var documento: shared.modelos.IDocumentoInstancia = resultado.InformacionExtra["ListaDocumentos"][idxDoc];
                        if (documento.IdDocumentoInstancia != self.$scope.documentoInstancia.IdDocumentoInstancia) {
                            documento.FechaCreacion = moment(documento.FechaCreacion).utc().format('YYYY/MM/DD HH:mm');
                            self.$scope.documentosUsuario.push(documento);
                        }
                    }
                    if (self.$scope.documentosUsuario && self.$scope.documentosUsuario.length && self.$scope.documentosUsuario.length > 0) {
                        self.$scope.existenDocumentosUsuario = true;
                    }
                    self.$scope.mostrarCargando = false;
                }
                ,
                self.abaxXBRLRequestService.getOnErrorDefault());
        }

        /**
        * Constructor de la clase ConsultarDocumentosParaImportarController
        *
        * @param $scope el scope del controlador
        * @param $modalInstance la pantalla modal del documento instancia
        * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
        * @param documentoInstancia documento que se tiene trabajando
        */
        constructor($scope: IConsultarDocumentosParaImportarScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLServices: services.AbaxXBRLServices,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService,
            documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl, identificadoresDocumentosPresentados: Array<number>) {
            this.$modalInstance = $modalInstance;
            this.$scope = $scope;
            this.$scope.identificadoresDocumentosPresentados = identificadoresDocumentosPresentados;
            this.abaxService = abaxXBRLServices;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            var self = this;
            this.$scope.documentoInstancia = documentoInstancia;
            this.init();
        }
    }
    ConsultarDocumentosParaImportarController.$inject = ['$scope', '$modalInstance', 'abaxXBRLServices', 'abaxXBRLRequestService', 'documentoInstancia'];


}