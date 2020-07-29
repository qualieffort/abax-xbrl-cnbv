///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../scripts/typings/json/jquery.json.d.ts" />
///<reference path="../scripts/typings/moment/moment.d.ts" />
///<reference path="../scripts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///<reference path="../scripts/typings/angular-file-upload/angular-file-upload.d.ts" /> 
///<reference path="modeloAbax.ts" />
///<reference path="modeloPlantillaAbax.ts" />
///<reference path="serviciosAbax.ts" />

module abaxXBRL.directives {

    import services = abaxXBRL.services;
    import UsuarioDocumentoInstancia = abaxXBRL.model.UsuarioDocumentoInstancia;
    import ResultadoOperacion = abaxXBRL.model.ResultadoOperacion;
    import upload = ng.angularFileUpload;
    /** Implementación de un controlador para presentar y manipular los datos necesarios para elegir una pantilla de captura de Abax
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export class XbrlElegirPlantillaController {

        /** el scope de la directiva que presenta el listado de usuarios asignados a un documento de instancia */
        private $scope: IXbrlElegirPlantillaScope;

        /**
        * El servicio que permite la consulta y guardado de los usuarios asignados a un documento de instancia
        */
        private abaxXBRLServices: services.AbaxXBRLServices;

        /** Servicio de manejo de ubicacion del navegador */
        $location: ng.ILocationService;

        /** Servicio de timeout */
        $timeout: ng.ITimeoutService
        /**
         * Inicializa el controlador al asociarlo con el listado de usuarios del documento de instancia correspondiente
         */
        private init(): void {
            var self = this;
            //Cargar las taxonomías
            self.$scope.AtributoFecha = model.TipoDatoParametroConfiguracion.Fecha;
            self.$scope.AtributoLista = model.TipoDatoParametroConfiguracion.Lista;
            self.$scope.AtributoCadena = model.TipoDatoParametroConfiguracion.Cadena;
            self.$scope.AtributoListaSeleccionMultiple = model.TipoDatoParametroConfiguracion.ListaSeleccionMultiple;
            self.$scope.opcionesFinales = new Array<model.SelectItem>();
            self.$scope.listaOpciones = {};
            self.$scope.opened = {};
            self.$scope.valoresParametros = {};
            self.$scope.taxonomiasSoloLectura = false;
            self.$scope.listaCargada = {};
            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

            $.isLoading({
                text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_OBTENIENDO_TAXONOMIAS_REGISTRADAS')
            });
            this.abaxXBRLServices.obtenerTaxonomiasRegistradas().then(
                function (resultado: ResultadoOperacion) {
                    if (resultado && resultado.InformacionExtra && resultado.InformacionExtra.length) {
                        self.$scope.taxonomias = new Array<model.TaxonomiaXbrlBd>();
                        for (var i = 0; i < resultado.InformacionExtra.length; i++) {
                            self.$scope.taxonomias.push(new model.TaxonomiaXbrlBd().deserialize(resultado.InformacionExtra[i]));
                        }
                        self.inicializarValoresDocumentoPrecargado();
                    }
                },
                function (resultado: ResultadoOperacion) {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                }
                ).finally(
                function () {
                    $.isLoading("hide");
                }
                );

            //manejar el cambio de plantilla
            this.$scope.actualizarPlantillaSeleccionada = function (): void {
                self.$scope.atributosConfiguracion = null;
                self.$scope.listaOpciones = {};
                self.$scope.valoresParametros = {};
                self.$scope.opened = {};

                if (self.$scope.taxonomiaSeleccionada && self.$scope.taxonomiaSeleccionada != null &&
                    self.$scope.taxonomiaSeleccionada.EspacioNombresPrincipal != "") {
                    var shcema = self.$scope.taxonomiaSeleccionada.EspacioNombresPrincipal;

                    //Cargar la definición de la plantilla
                    $.isLoading({
                        text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_OBTENIENDO_INFO_PLANTILLA')
                    });
                    self.abaxXBRLServices.cargarDefinicionDePlantillaParaTaxonomia(shcema).
                        then(function (definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl) {

                        self.$scope.plantillaSeleccionada = definicionPlantilla;

                        self.$scope.atributosConfiguracion = new Array<model.DefinicionParametroConfiguracionPlantilla>();
                        for (var llave in definicionPlantilla.obtenerDefinicionDeParametrosDeConfiguracion()) {
                            self.$scope.atributosConfiguracion.push(definicionPlantilla.obtenerDefinicionDeParametrosDeConfiguracion()[llave]);
                            self.$scope.configurarAtributo(definicionPlantilla.obtenerDefinicionDeParametrosDeConfiguracion()[llave]);

                        }

                    },
                        function (error: any) {
                            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_INFO_PLANTILLA'),
                                {
                                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                    buttons: { aceptar: true }
                                });
                        })
                        .finally(function () {
                        $.isLoading("hide");
                    });




                }
            }

            //manejar las opciones por atributo
            self.$scope.obtenerListaOpciones = function (parametro: model.DefinicionParametroConfiguracionPlantilla): void {

                if (parametro.Tipo == model.TipoDatoParametroConfiguracion.Lista || parametro.Tipo == model.TipoDatoParametroConfiguracion.ListaSeleccionMultiple) {

                    if (parametro.InformacionAdicional && parametro.InformacionAdicional != null) {

                        if (parametro.InformacionAdicional["tipoLista"] == "remota") {
                            self.$scope.listaOpciones[parametro.Id] = new Array<model.SelectItem>();
                            var parametrosRequest: { [nombre: string]: any } = {};

                            var dependencias: Array<string> = parametro.InformacionAdicional['dependencias'];
                            if (dependencias && dependencias.length > 0) {
                                var parametrosConfiguracion = self.$scope.plantillaSeleccionada.obtenerDefinicionDeParametrosDeConfiguracion();
                                for (var indexDependencia: number = 0; indexDependencia < dependencias.length; indexDependencia++) {
                                    var idParametroDependencia = dependencias[indexDependencia];
                                    var valor = self.$scope.valoresParametros[idParametroDependencia];
                                    parametrosRequest[idParametroDependencia] = valor;
                                }
                            }

                            self.abaxXBRLServices.obtenerOpcionesLista(parametro.InformacionAdicional["urlServicio"], parametrosRequest).then(
                                function (resultado: model.ResultadoOperacion) {
                                    if (resultado.InformacionExtra && resultado.InformacionExtra != null && resultado.InformacionExtra.length
                                        && resultado.InformacionExtra.length != null) {
                                        //llenar las opciones de la lista que corresponde al parametro de configuracion
                                        self.$scope.listaOpciones[parametro.Id] = new Array<model.SelectItem>();
                                        for (var i = 0; i < resultado.InformacionExtra.length; i++) {
                                            var opcion = new model.SelectItem();
                                            opcion.Etiqueta = resultado.InformacionExtra[i][parametro.InformacionAdicional["llaveEtiqueta"]];
                                            opcion.Valor = resultado.InformacionExtra[i][parametro.InformacionAdicional["llaveValor"]];
                                            self.$scope.listaOpciones[parametro.Id].push(opcion);
                                        }

                                        //si el atributo es del tipo lista y el valor seleccionado no se encuentra, agregarlo
                                        var encontrado = false;
                                        var valorBuscado = self.$scope.valoresParametros[parametro.Id] && self.$scope.valoresParametros[parametro.Id] != null ? self.$scope.valoresParametros[parametro.Id] : "";
                                        for (var j = 0; j < self.$scope.listaOpciones[parametro.Id].length; j++) {
                                            if (self.$scope.listaOpciones[parametro.Id][j].Valor === valorBuscado) {
                                                encontrado = true;
                                                self.$scope.valoresParametros[parametro.Id] = self.$scope.listaOpciones[parametro.Id][j].Valor;
                                                break;
                                            }
                                        }
                                        if (!encontrado && valorBuscado != "") {
                                            var opcion = new model.SelectItem();
                                            opcion.Etiqueta = valorBuscado;
                                            opcion.Valor = valorBuscado;
                                            opcion.Extra = true;
                                            self.$scope.listaOpciones[parametro.Id].push(opcion);
                                        }

                                    }
                                    else {
                                        //si el atributo es del tipo lista y el valor seleccionado no se encuentra, agregarlo
                                        var encontrado = false;
                                        var valorBuscado = self.$scope.valoresParametros[parametro.Id] && self.$scope.valoresParametros[parametro.Id] != null ? self.$scope.valoresParametros[parametro.Id] : "";
                                        for (var j = 0; j < self.$scope.listaOpciones[parametro.Id].length; j++) {
                                            if (self.$scope.listaOpciones[parametro.Id][j].Valor === valorBuscado) {
                                                encontrado = true;
                                                self.$scope.valoresParametros[parametro.Id] = self.$scope.listaOpciones[parametro.Id][j].Valor;
                                                break;
                                            }
                                        }
                                        if (!encontrado && valorBuscado != "") {
                                            var opcion = new model.SelectItem();
                                            opcion.Etiqueta = valorBuscado;
                                            opcion.Valor = valorBuscado;
                                            opcion.Extra = true;
                                            self.$scope.listaOpciones[parametro.Id].push(opcion);
                                        }
                                    }
                                }
                                ).finally(function () { self.$scope.listaCargada[parametro.Id] = "true"; });

                        } else if (parametro.InformacionAdicional["tipoLista"] == "local") {

                            if (parametro.InformacionAdicional && parametro.InformacionAdicional != null &&
                                parametro.InformacionAdicional["valores"] && parametro.InformacionAdicional["valores"] != null) {
                                self.$scope.listaOpciones[parametro.Id] = new Array<model.SelectItem>();
                                for (var key in parametro.InformacionAdicional["valores"]) {
                                    var opcion = new model.SelectItem();
                                    opcion.Etiqueta = parametro.InformacionAdicional["valores"][key];
                                    opcion.Valor = key;
                                    self.$scope.listaOpciones[parametro.Id].push(opcion);
                                }
                                //si el atributo es del tipo lista y el valor seleccionado no se encuentra, agregarlo
                                var encontrado = false;
                                var valorBuscado = self.$scope.valoresParametros[parametro.Id] && self.$scope.valoresParametros[parametro.Id] != null ? self.$scope.valoresParametros[parametro.Id] : "";
                                for (var j = 0; j < self.$scope.listaOpciones[parametro.Id].length; j++) {
                                    if (self.$scope.listaOpciones[parametro.Id][j].Valor === valorBuscado) {
                                        encontrado = true;
                                        break;
                                    }
                                }
                                if (!encontrado && valorBuscado != "") {
                                    var opcion = new model.SelectItem();
                                    opcion.Etiqueta = valorBuscado;
                                    opcion.Valor = valorBuscado;
                                    opcion.Extra = true;
                                    self.$scope.listaOpciones[parametro.Id].push(opcion);
                                }
                                self.$scope.listaCargada[parametro.Id] = "true";
                            }

                        } else if (parametro.InformacionAdicional["tipoLista"] == "funcion") {

                            self.$scope.listaOpciones[parametro.Id] = new Array<model.SelectItem>();
                            var parametrosRequest: { [nombre: string]: any } = {};

                            var dependencias: Array<string> = parametro.InformacionAdicional['dependencias'];
                            if (dependencias && dependencias.length > 0) {
                                var parametrosConfiguracion = self.$scope.plantillaSeleccionada.obtenerDefinicionDeParametrosDeConfiguracion();
                                for (var indexDependencia: number = 0; indexDependencia < dependencias.length; indexDependencia++) {
                                    var idParametroDependencia = dependencias[indexDependencia];
                                    var valor = self.$scope.valoresParametros[idParametroDependencia];
                                    parametrosRequest[idParametroDependencia] = valor;
                                }
                            }
                            self.$scope.listaOpciones[parametro.Id] = parametro.InformacionAdicional['accion'](parametrosRequest);
                            self.$scope.valorSeleccionOpcion.opcionesSeleccionadas = new Array<model.SelectItem>();

                            var valorAsignado = self.$scope.valoresParametros[parametro.Id] && self.$scope.valoresParametros[parametro.Id] != null ? self.$scope.valoresParametros[parametro.Id] : null;
                            //Si existe un valor lo asignamos
                            if (valorAsignado) {

                                var listaValoresAsignados = valorAsignado.split ? valorAsignado.split(",") : valorAsignado.length > 0 ? valorAsignado[0].Valor : "";
                                for (var indexOpcion = 0; indexOpcion < listaValoresAsignados.length; indexOpcion++)
                                {
                                    var valor = listaValoresAsignados[indexOpcion];
                                    var elementoAsignado = new model.SelectItem();
                                    elementoAsignado.Etiqueta = valor;
                                    elementoAsignado.Valor = valor;
                                    self.$scope.valorSeleccionOpcion.opcionesSeleccionadas.push(elementoAsignado);
                                }
                            }
                            self.$scope.listaCargada[parametro.Id] = "true";
                        }
                    }
                }
            };


            //Opcionalmente, obtener una fecha preconfigurada del servidor
            self.$scope.obtenerFechaServidor = function (parametro: model.DefinicionParametroConfiguracionPlantilla): void {

                if (parametro.Tipo == model.TipoDatoParametroConfiguracion.Fecha) {

                    if (parametro.InformacionAdicional && parametro.InformacionAdicional != null) {

                        if (parametro.InformacionAdicional["urlServicio"] !== undefined) {
                            var parametrosRequest: { [nombre: string]: any } = {};
                           
                            var dependencias: Array<string> = parametro.InformacionAdicional['dependencias'];
                            if (dependencias && dependencias.length > 0) {
                                var parametrosConfiguracion = self.$scope.plantillaSeleccionada.obtenerDefinicionDeParametrosDeConfiguracion();
                                for (var indexDependencia: number = 0; indexDependencia < dependencias.length; indexDependencia++) {
                                    var idParametroDependencia = dependencias[indexDependencia];
                                    var valor = self.$scope.valoresParametros[idParametroDependencia];
                                    parametrosRequest[idParametroDependencia] = valor;
                                    if (self.$scope.listaOpciones[idParametroDependencia] && self.$scope.listaOpciones[idParametroDependencia] &&
                                        self.$scope.listaOpciones[idParametroDependencia][valor] !== undefined &&
                                        self.$scope.listaOpciones[idParametroDependencia][valor].Extra !== undefined &&
                                        self.$scope.listaOpciones[idParametroDependencia][valor].Extra) {
                                       
                                    }
                                }
                            }

                            self.abaxXBRLServices.obtenerOpcionesLista(parametro.InformacionAdicional["urlServicio"], parametrosRequest).then(
                                function (resultado: model.ResultadoOperacion) {
                                    if (resultado && resultado.Resultado) {
                                        
                                            self.$scope.valoresParametros[parametro.Id] = resultado.InformacionExtra;
                                        
                                    }
                                }
                            ).finally(function () { self.$scope.listaCargada[parametro.Id] = "true"; });

                        } 
                    }
                }
            };

            self.$scope.abrirCalendario = function ($event: any, idAtributo: string): void {
                $event.preventDefault();
                $event.stopPropagation();

                self.$scope.opened[idAtributo] = true;
            };


            self.$scope.configurarAtributo = function (parametro: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla): void {

                if (parametro.Tipo == model.TipoDatoParametroConfiguracion.Lista || parametro.Tipo == model.TipoDatoParametroConfiguracion.ListaSeleccionMultiple) {
                    self.$scope.obtenerListaOpciones(parametro);
                }
                var dependencias:Array<string> = parametro.InformacionAdicional['dependencias'];
                if (dependencias && dependencias.length > 0) {
                    var parametrosConfiguracion = self.$scope.plantillaSeleccionada.obtenerDefinicionDeParametrosDeConfiguracion();
                    for (var indexDependencia: number = 0; indexDependencia < dependencias.length; indexDependencia++) {
                        var idParametroDependencia = dependencias[indexDependencia];
                        if (parametrosConfiguracion[idParametroDependencia]) {
                            self.$scope.$watch("valoresParametros['" + idParametroDependencia + "']", function (newValue: any, oldValue: any) {
                                if (newValue && newValue.length > 0) {
                                    self.$scope.obtenerListaOpciones(parametro);
                                    self.$scope.obtenerFechaServidor(parametro);
                                }
                            });
                        }
                    }
                }

                if (parametro.Tipo == model.TipoDatoParametroConfiguracion.Fecha && parametro.InformacionAdicional) {
                    self.$scope.opened[parametro.Id] = false;
                }

                if (parametro.Tipo == model.TipoDatoParametroConfiguracion.Fecha) {
                    self.$scope.obtenerFechaServidor(parametro);
                }

            };
            self.$scope.finalizar = function (valid: boolean): void {

                if (valid) {
                    //Asignar la plantilla seleccionada
                    self.$scope.plantillaSeleccionada.ParametrosConfiguracion = self.$scope.valoresParametros;
                    self.abaxXBRLServices.setDefinicionPlantilla(self.$scope.plantillaSeleccionada);


                    if (self.abaxXBRLServices.getDocumentoInstancia() == null) {
                        //Creando desde cero un documento
                        //Asignar la taxonomía elegida
                        $.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CARGANDO_TAXONOMIA') });
                        self.abaxXBRLServices.obtenerDefinicionTaxonomia(self.$scope.taxonomiaSeleccionada.IdTaxonomiaXbrl)
                            .then(
                            function (resultado: model.ResultadoOperacion) {

                                var documentoInstancia = new model.DocumentoInstanciaXbrl();
                                documentoInstancia.IdDocumentoInstancia = 0;
                                documentoInstancia.Bloqueado = true;
                                documentoInstancia.IdUsuarioBloqueo = self.abaxXBRLServices.idUsuarioActivo;
                                documentoInstancia.NombreUsuarioBloqueo = self.abaxXBRLServices.nombreCompletoUsuarioActivo;
                                documentoInstancia.IdEmpresa = self.abaxXBRLServices.idEmisoraActiva;
                                documentoInstancia.PuedeEscribir = true;
                                documentoInstancia.EsDueno = true;
                                documentoInstancia.RequiereValidacion = true;
                                documentoInstancia.RequiereValidacionFormulas = true;
                                documentoInstancia.PendienteGuardar = true;
                                documentoInstancia.ParametrosConfiguracion = self.$scope.valoresParametros;
                                documentoInstancia.EspacioNombresPrincipal = self.$scope.taxonomiaSeleccionada.EspacioNombresPrincipal;
                                documentoInstancia.Taxonomia = new model.Taxonomia().deserialize(resultado.InformacionExtra);
                                documentoInstancia.DtsDocumentoInstancia = self.abaxXBRLServices.obtenerDtsDocumentoDeTaxonomia(self.$scope.taxonomiaSeleccionada.ArchivosImportados);
                                self.abaxXBRLServices.getDefinicionPlantilla().init(documentoInstancia);
                                self.abaxXBRLServices.setDocumentoInstancia(documentoInstancia);
                                self.abaxXBRLServices.getDocumentoInstancia().xbrlIdioma = documentoInstancia.Taxonomia.IdiomasTaxonomiaObjeto[0];

                                if (!abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo ||
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo == null) {
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo =
                                    self.abaxXBRLServices.getDocumentoInstancia().Taxonomia.generarIndiceOperacionesCalculo();
                                }
                                //self.$location.path("editorXbrl");
                                shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.editorXBRL.editorXbrl");
                            }, function (resultado: model.ResultadoOperacion) {

                                if (resultado.Mensaje == "MENSAJE_ERROR_PROCESAR_TAXONOMIAS") {
                                    var uris: string = "";
                                    var errores: Array<shared.modelos.IErrorCargaTaxonomia> = resultado.InformacionExtra;
                                    var $modal = shared.service.AbaxXBRLUtilsService.getModalService();
                                    var $session = shared.service.AbaxXBRLSessionService;
                                    var atributoListaErrores = AbaxXBRLConstantes.ATRIBUTO_LISTADO_ERRORES;
                                    $session.setAtributoSesion(atributoListaErrores, errores);

                                    $modal.open({
                                        templateUrl: 'abax-xbrl/componentes/editor-xbrl/error-carga-taxonomia/abax-xbrl-error-carga-taxonomia-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                                        controller: componentes.controllers.AbaxXBRLErrorCargaTaxonomiaPopupController,
                                        size: 'lg',
                                    });
                                } else {
                                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIA'),
                                        {
                                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                            buttons: { aceptar: true }
                                        });
                                }
                            })
                            .finally(function () {
                            $.isLoading('hide');
                        });
                    } else {
                        //Se había importado previamente un documento
                        self.abaxXBRLServices.getDefinicionPlantilla().init(self.abaxXBRLServices.getDocumentoInstancia());
                        self.abaxXBRLServices.getDocumentoInstancia().PendienteGuardar = true;
                        self.abaxXBRLServices.getDocumentoInstancia().xbrlIdioma = self.abaxXBRLServices.getDocumentoInstancia().Taxonomia.IdiomasTaxonomiaObjeto[0];
                        self.abaxXBRLServices.getDocumentoInstancia().ParametrosConfiguracion = self.$scope.valoresParametros;
                        if (!abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo ||
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo == null) {
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo =
                            self.abaxXBRLServices.getDocumentoInstancia().Taxonomia.generarIndiceOperacionesCalculo();
                        }
                        //self.$location.path("editorXbrl");
                        shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.editorXBRL.editorXbrl");
                    }


                } else {
                    alert(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CAPTURE_INFORMACION_PLANTILLA'));
                }

            }
            self.$scope.valorSeleccionOpcion = { opcion: new model.SelectItem(), opcionesSeleccionadas: new Array <model.SelectItem>() };
            self.$scope.actualizaOpciones = function (parametro: model.DefinicionParametroConfiguracionPlantilla): void {
              
                if (self.$scope.valorSeleccionOpcion.opcionesSeleccionadas.indexOf(self.$scope.valorSeleccionOpcion.opcion) == -1) {
                    if (parametro.InformacionAdicional['onSelected']) {
                        var dependencias: Array<string> = parametro.InformacionAdicional['dependencias'];
                        var parametrosRequest: { [nombre: string]: any } = {};
                        if (dependencias && dependencias.length > 0) {
                            var parametrosConfiguracion = self.$scope.plantillaSeleccionada.obtenerDefinicionDeParametrosDeConfiguracion();
                            for (var indexDependencia: number = 0; indexDependencia < dependencias.length; indexDependencia++) {
                                var idParametroDependencia = dependencias[indexDependencia];
                                var valor = self.$scope.valoresParametros[idParametroDependencia];
                                parametrosRequest[idParametroDependencia] = valor;
                            }
                        }
                        parametrosRequest['opcionesSeleccionadas'] = self.$scope.valorSeleccionOpcion.opcionesSeleccionadas;
                        parametrosRequest['opcionActualSeleccionada'] = self.$scope.valorSeleccionOpcion.opcion;
                        self.$scope.valorSeleccionOpcion.opcionesSeleccionadas = parametro.InformacionAdicional['onSelected'](parametrosRequest);
                        self.$scope.valoresParametros[parametro.Id] = self.$scope.valorSeleccionOpcion.opcionesSeleccionadas;
                    }
                    self.$scope.valorSeleccionOpcion.opcion = undefined;
                }
            }

            self.$scope.onRemoverValor = function (valorRemover: model.SelectItem, parametro: model.DefinicionParametroConfiguracionPlantilla): void {           
                var indiceItem = self.$scope.valorSeleccionOpcion.opcionesSeleccionadas.indexOf(valorRemover);
                if (indiceItem > -1) {
                    self.$scope.valorSeleccionOpcion.opcionesSeleccionadas.splice(indiceItem, 1);
                    self.$scope.valoresParametros[parametro.Id] = self.$scope.valorSeleccionOpcion.opcionesSeleccionadas;
                }  
            };

        }

        inicializarValoresDocumentoPrecargado(): void {
            //Si viene del documento de importación con una plantilla ya seleccionada
            var self = this;
            var definicionPlantilla = self.abaxXBRLServices.getDefinicionPlantilla();
            var documentoInstancia = self.abaxXBRLServices.getDocumentoInstancia();
            if (definicionPlantilla != null && documentoInstancia != null && self.$scope.taxonomias &&
                self.$scope.taxonomias != null && self.$scope.taxonomias.length) {
                //Buscar a qué taxonomía de la lista pertenece la plantilla
                for (var i = 0; i < self.$scope.taxonomias.length; i++) {
                    if (self.$scope.taxonomias[i].EspacioNombresPrincipal === documentoInstancia.EspacioNombresPrincipal) {
                        self.$scope.taxonomiaSeleccionada = self.$scope.taxonomias[i];
                        break;
                    }
                }


                self.$scope.plantillaSeleccionada = self.abaxXBRLServices.getDefinicionPlantilla();
                self.$scope.taxonomiasSoloLectura = true;
                self.$scope.atributosConfiguracion = new Array<model.DefinicionParametroConfiguracionPlantilla>();
                self.$scope.valoresParametros = self.$scope.plantillaSeleccionada.ParametrosConfiguracion;
                for (var llave in self.$scope.plantillaSeleccionada.obtenerDefinicionDeParametrosDeConfiguracion()) {
                    var attr = self.$scope.plantillaSeleccionada.obtenerDefinicionDeParametrosDeConfiguracion()[llave];
                    self.$scope.atributosConfiguracion.push(attr);
                    self.$scope.configurarAtributo(attr);
                    
                    if (attr.Tipo == model.TipoDatoParametroConfiguracion.Lista) {
                        
                    } else if (attr.Tipo == model.TipoDatoParametroConfiguracion.Fecha) {
                        //Si el atributo es tipo fecha y tiene valor inicial entonces transformar ese valor a cadena
                        if (self.$scope.valoresParametros[attr.Id] && self.$scope.valoresParametros[attr.Id] != null) {
                            self.$scope.valoresParametros[attr.Id] = moment(self.$scope.valoresParametros[attr.Id]).utc().toISOString();
                        }
                    }
                }
            }
        }

        

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio para la manipulación de usuarios asignados a un documento de instancia
        */
        constructor($scope: IXbrlElegirPlantillaScope, abaxXBRLServices: services.AbaxXBRLServices, $location: ng.ILocationService,$timeout: ng.ITimeoutService) {
            this.$scope = $scope;
            this.$location = $location;
            this.abaxXBRLServices = abaxXBRLServices;
            this.$timeout = $timeout;
            this.init();
        }
    }
    XbrlElegirPlantillaController.$inject = ['$scope', 'abaxXBRLServices', '$location', '$timeout'];
    /**
    * Declaración del Scope para la pantalla de elección y llenado de plantillas de Abax
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export interface IXbrlElegirPlantillaScope extends ng.IScope {

        /** Identificador de la taxonomía seleccionada */
        taxonomiaSeleccionada: model.TaxonomiaXbrlBd;

        /** Indica si se puede mover el atributo de taxonomia seleccionada */
        taxonomiasSoloLectura: boolean;

        /** Lista de plantillas disponibles para la taxonomía elegida */
        taxonomias: Array<model.TaxonomiaXbrlBd>;

        /** Actualiza los campos a mostrar para la plantilla seleccionada */
        actualizarPlantillaSeleccionada(): void;

        /** Plantilla actualmente seleccionada */
        plantillaSeleccionada: abaxXBRL.model.DefinicionDePlantillaXbrl;

        /** Atributos de la plantilla */
        atributosConfiguracion: Array<abaxXBRL.model.DefinicionParametroConfiguracionPlantilla>;

        /** Valor del enum para el tipo de atributo fecha */
        AtributoFecha: model.TipoDatoParametroConfiguracion;

        /** Valor del enum para el tipo de atributo lista */
        AtributoLista: model.TipoDatoParametroConfiguracion;

        /** Valor del enum para el tipo de atributo campo cadena */
        AtributoCadena: model.TipoDatoParametroConfiguracion;

        /** Valor del enum para el tipo de atributo campo lista selección múltiple */
        AtributoListaSeleccionMultiple: model.TipoDatoParametroConfiguracion;

        /** Valor seleccionado del parámetro de la lista de seleccion múltiple */
        valorSeleccionOpcion: { opcion: model.SelectItem, opcionesSeleccionadas: Array<model.SelectItem> };

        /** Actualiza el combo de selección múltiple con las diferentes opciones */
        actualizaOpciones(parametro: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla): void;

        /** Arreglo con las opciones finales que fueron seleccionadas por el usuario */
        opcionesFinales: Array<model.SelectItem>;

        /** Remueve un objeto seleccionado del conjunto de opciones */
        onRemoverValor(valorRemover: model.SelectItem, parametro: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla): void;
        
        /** Valores seleccionados de los parámetros de configuración */
        valoresParametros: { [id: string]: any };

        /** Lista de opciones del parámetro de configuración de la plantilla, por ID de parámetro  */
        listaOpciones: { [id: string]: Array<model.SelectItem> };

        /** Configura los datos particulares de cada atributo de plantilla */
        configurarAtributo(parametro: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla): void;
        /** Obtiene una lista de opciones de un atributo de tipo lista */
        obtenerListaOpciones(parametro: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla): void;
        /** Obtiene una lista de opciones de un atributo de tipo lista */
        obtenerFechaServidor(parametro: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla): void;
        /** Indica si está abierto el diálgo de un date picker */
        opened: { [id: string]: boolean };
        /** recibe el evento para abrir el diálogo de un calendario */
        abrirCalendario($event: any, atributoId: string): void;
        /** Función para la asignación de la plantila elegida, asignación de parámetros y ruteo a la siguiente página*/
        finalizar(valid: boolean): void;
        /*** Indica si la lista está preparada para mostrarse */
        listaCargada: { [id: string]: string; };
    }

    /**
    * Controller para la pantalla donde el usuario elige la forma de crear un documento de instancia
    */
    export class XbrlElegirFormaCreacionDocumentoInstanciaController {
        /** el scope del controller para elegir la forma de crear el documento de instancia */
        private $scope: IXbrlElegirFormaCreacionDocumentoInstanciaScope;

        /**
        * El servicio que permite el acceso al servidor para recuperar datos de taxonomías, usuarios, documento etc
        */
        private abaxXBRLServices: services.AbaxXBRLServices;

        /**
         * Inicializa el controlador al asociarlo con el listado de usuarios del documento de instancia correspondiente
         */
        private init(): void {

            this.$scope.tipoOrigenPlantilla = TipoCreacionDocumentoInstancia.Plantilla;
            this.$scope.tipoOrigenImportar = TipoCreacionDocumentoInstancia.Importar;
            this.$scope.tipoOrigenGenerico = TipoCreacionDocumentoInstancia.Generico;
            var self = this;

            self.abaxXBRLServices.limpiarDocumentoYPlantilla();

            var idDocumentoInstancia = shared.service.AbaxXBRLSessionService.getAtributoSesion("idDocumentoInstancia");
            var esVisor = shared.service.AbaxXBRLSessionService.getAtributoSesion("esVisor");


            if (idDocumentoInstancia && idDocumentoInstancia != null) {
                if (esVisor && esVisor != null) {
                    shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.visorXBRL.visorXbrl");
                } else {
                    shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.editorXBRL.editorXbrl");
                }

            }

            this.$scope.siguiente = function (): void {
            }
        }
        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio para la manipulación de usuarios asignados a un documento de instancia
        */
        constructor($scope: IXbrlElegirFormaCreacionDocumentoInstanciaScope, abaxXBRLServices: services.AbaxXBRLServices) {
            this.$scope = $scope;
            this.abaxXBRLServices = abaxXBRLServices;
            this.init();
        }
    }
    XbrlElegirFormaCreacionDocumentoInstanciaController.$inject = ['$scope', 'abaxXBRLServices'];


    /**
    * Interfaz del socope para el manejo de la pantalla para elegir la forma de crear un documento de instancia
    *
    */
    export interface IXbrlElegirFormaCreacionDocumentoInstanciaScope extends ng.IScope {
        /** Valor elegido por el usuario para la creación del documento */
        tipoCreacion: TipoCreacionDocumentoInstancia;

        tipoOrigenPlantilla: TipoCreacionDocumentoInstancia;
        tipoOrigenImportar: TipoCreacionDocumentoInstancia;
        tipoOrigenGenerico: TipoCreacionDocumentoInstancia;

        siguiente(): void;
    }


    /**
     * Enumeración para contener las posibles formas de crear un documento de instancia
     */
    export enum TipoCreacionDocumentoInstancia {
        /** El identificador del panel que muestra los formatos */
        Plantilla = 1,
        /** El identificador del panel que muestra las versiones del documento */
        Importar = 2,
        /** El identificador del panel que muestra los usuarios con acceso al documento */
        Generico = 3
    }

    /**
    * Interfaz del scope para realizar la importación de un documento de instancia
    */
    export interface IXbrlImportarArchivoDocumentoScope extends ng.IScope {

        /** Archivo que será importado como documento de instancia */
        archivoImportado: File;

        /** URL del archivo a importar */
        urlArchivoImportado: string;

        /** Configuración de extensiones de archivo permitidas */
        extensionesPermitidas: string;

        /** Función a ejecutar cuando se inicie la importación del archivo */
        importarArchivo(): void;

        /** Limpia los campos de archivo y URL */
        limpiar(): void;
        
        /** Raliza las validaciones necesarias para pasar al siguiente paso de importación y carga la siguiente pantalla */
        finalizar(): void;
        
        /** Total de bytes cargados al momento **/

        cargado: number;
        
        /** Total de bytes del documento de instancia */
        total: number;

        /** Porcentaje del archivo que se ha cargado */
        porcentajeCargado: number;

        /** Indica si el documento es correcto */
        correcto: boolean;

        /** Indica si se ha terminado la carga de un archivo */
        cargaCompleta: boolean;

        /** Documento de instancia importado */
        documentoInstancia: model.DocumentoInstanciaXbrl;

        /** Severidad de los errores */
        severidadError: model.SeveridadError;
        severidadAdvertencia: model.SeveridadError;

        /** Indica si puede continuar al siguiente paso de importación */
        puedeContinuar: boolean;
    }
    /**
    * Controller para la pantalla de importación de un documento de instancia a partir de un archivo
    */
    export class XbrlImportarArchivoDocumentoController {

        /** el scope del controller para importar archivos de documento de instancia*/
        private $scope: IXbrlImportarArchivoDocumentoScope;
        /**
        * El servicio que permite el acceso al servidor para recuperar datos de taxonomías, usuarios, documento etc
        */
        private abaxXBRLServices: services.AbaxXBRLServices;
        /**
        * El servicio que permite el upload del archivo importado
        */
        private $upload: upload.IUploadService;

        /**
        * Servicio para la navegación entre pantallas
        */
        private $location: ng.ILocationService;
        /**
        * Inicialización del controller
        */
        private init(): void {
            var self = this;
            this.$scope.extensionesPermitidas = "*.zip,*.xml,*.xbrl";
            this.$scope.puedeContinuar = false;
            this.$scope.cargaCompleta = false;
            this.$scope.severidadAdvertencia = model.SeveridadError.Advertencia;
            this.$scope.severidadError = model.SeveridadError.Error;

            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

            this.$scope.limpiar = function (): void {
                self.$scope.urlArchivoImportado = null;
                self.$scope.archivoImportado = null;
                self.$scope.puedeContinuar = false;
                self.$scope.cargaCompleta = false;
                self.$scope.correcto = false;
                self.$scope.documentoInstancia = null;
            };

            this.$scope.importarArchivo = function (): void {
                self.$scope.cargaCompleta = false;
                self.$scope.cargado = 0;
                if ((!self.$scope.archivoImportado || self.$scope.archivoImportado == null) && (!self.$scope.urlArchivoImportado || self.$scope.urlArchivoImportado == null
                    || self.$scope.urlArchivoImportado === "")) {
                    alert(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SELECCIONE_ARCHIVO_O_URL'));
                    return;
                }

                if (self.$scope.archivoImportado && self.$scope.archivoImportado != null && self.$scope.urlArchivoImportado &&
                    self.$scope.urlArchivoImportado !== "") {
                    alert(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SELECCIONE_ARCHIVO_O_URL_NO_AMBAS'));
                    return;
                }
                var archivo: File;
                archivo = null;
                if (self.$scope.archivoImportado && self.$scope.archivoImportado) {
                    archivo = self.$scope.archivoImportado[0];
                }

                var fileConfig: upload.IFileUploadConfig = new MyFileConfig();
                fileConfig.file = archivo;
                fileConfig.fileName = archivo != null ? archivo.name : "";
                fileConfig.data = { "urlArchivoImportado": self.$scope.urlArchivoImportado };
                fileConfig.method = "POST";
                fileConfig.headers = { 'Authorization': 'Bearer ' + shared.service.AbaxXBRLSessionService.getSesionInmediate().Token };
                fileConfig.url = "DocumentoInstancia/ImportarDocumentoInstancia";

                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_IMPORTANDO_DOCUMENTO_INSTANCIA')
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
                        self.$scope.cargaCompleta = true;
                        if (resultadoOperacion.Resultado) {
                            //console.log(resultadoOperacion.InformacionExtra);
                            self.$scope.documentoInstancia = new model.DocumentoInstanciaXbrl().deserialize(resultadoOperacion.InformacionExtra);

                            self.$scope.documentoInstancia.Bloqueado = true;
                            self.$scope.documentoInstancia.IdUsuarioBloqueo = self.abaxXBRLServices.idUsuarioActivo;
                            self.$scope.documentoInstancia.NombreUsuarioBloqueo = self.abaxXBRLServices.nombreCompletoUsuarioActivo;
                            self.$scope.documentoInstancia.IdEmpresa = self.abaxXBRLServices.idEmisoraActiva;
                            self.$scope.documentoInstancia.PuedeEscribir = true;
                            self.$scope.documentoInstancia.EsDueno = true;
                            self.$scope.documentoInstancia.PendienteGuardar = true;
                            self.$scope.documentoInstancia.RequiereValidacion = true;
                            self.$scope.documentoInstancia.RequiereValidacionFormulas = true;
                            self.$scope.puedeContinuar = !self.$scope.documentoInstancia.tieneErroresGraves();
                            self.$scope.correcto = !self.$scope.documentoInstancia.Errores || self.$scope.documentoInstancia.Errores.length == 0;
                        } else {
                            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_IMPORTAR_DOCUMENTO_INSTANCIA') + (resultadoOperacion.Mensaje ? resultadoOperacion.Mensaje : ""),
                                {
                                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                    buttons: { aceptar: true }
                                });
                        }
                    },
                    function (response: any) {

                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_IMPORTAR_DOCUMENTO_INSTANCIA'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                buttons: { aceptar: true }
                            });
                    }
                    ).finally(
                    function () {
                        self.$scope.cargado = 0;
                        $.isLoading('hide');
                    }
                    );
            };

            this.$scope.finalizar = function (): void {
                //Verificar si el Espacio de nombres principal del documento corresponde a alguna plantilla
                if (self.$scope.documentoInstancia) {

                        $.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CARGANDO_DEFINICION_PLANTILLA') });
                        self.abaxXBRLServices.cargarDefinicionDePlantillaParaTaxonomia(self.$scope.documentoInstancia.EspacioNombresPrincipal).then(function (definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl) {
                            //Si pertenece a plantilla entonces cargar la definición e inicializarla
                            if (definicionPlantilla && definicionPlantilla != null) {
                                self.abaxXBRLServices.setDefinicionPlantilla(definicionPlantilla);
                                definicionPlantilla.init(self.$scope.documentoInstancia);
                                self.abaxXBRLServices.setDocumentoInstancia(self.$scope.documentoInstancia);
                                //Pasar a la pantalla dque presenta la configuración de la taxonomía para que el usuario verifique los datos de los
                                //parametros
                                //self.$location.path("elegirPlantilla");
                                shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.editorXBRL.elegirPlantilla");
                            }
                        },
                            function (definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl) {
                                //no existe plantilla, pasar al editor genérico
                                self.abaxXBRLServices.setDocumentoInstancia(self.$scope.documentoInstancia);
                                //self.$location.path("editorXbrl");
                                shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.editorXBRL.editorXbrl");
                            }).finally(function () {

                            $.isLoading('hide');

                        });
                    
                }

            }
        }
        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio para la manipulación de usuarios asignados a un documento de instancia
         * @param $upload servicio para la cara de archivos
        */
        constructor($scope: IXbrlImportarArchivoDocumentoScope, abaxXBRLServices: services.AbaxXBRLServices, $upload: upload.IUploadService, $location: ng.ILocationService) {
            this.$scope = $scope;
            this.$upload = $upload;
            this.$location = $location;
            this.abaxXBRLServices = abaxXBRLServices;
            this.init();
        }
    }
    XbrlImportarArchivoDocumentoController.$inject = ['$scope', 'abaxXBRLServices', '$upload', '$location'];

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


    /**
    * Interfaz del scope para realizar la carga de una taxonomía sin plantilla
    */
    export interface IXbrlElegirTaxonomiaScope extends ng.IScope {
        
        /** Carga la taxonomía descrita en el campo del punto de entrada */
        cargarTaxonomia(): void;

        /** Limpia el valor de la URL de la taxonomía */
        limpiar(): void;

        /** Pasa a la siguiente pantalla con la taxonomía cargada */
        finalizar(): void;

        /** Lista de errores de carga de taxonomía */
        erroresCarga: Array<model.ErrorCargaTaxonomia>;
        
        /** indica que ha sido completada la carga de la taxonomía */
        cargaCompleta: boolean;

        /** Indica si una vez cargada la taxonomía, esta es correcta*/
        puedeContinuar: boolean;

        /** Taxonomia que se ha cargado desde el servidor */
        taxonomiaCargada: model.Taxonomia;

        /** URL de la taxonomía a cargar */
        urlEntryPoint: string;

        /** Severidad de los errores */
        severidadError: model.SeveridadError;
        severidadAdvertencia: model.SeveridadError;

    }
    /** Controller para  */
    export class XbrlElegirTaxonomiaController {
        
        /** el scope del controller para elegir una taxonomía con la cuál crear un documento de instancia*/
        private $scope: IXbrlElegirTaxonomiaScope;
        /**
        * El servicio que permite el acceso al servidor para recuperar datos de taxonomías, usuarios, documento etc
        */
        private abaxXBRLServices: services.AbaxXBRLServices;
        /**
        * Servicio para la navegación entre pantallas
        */
        private $location: ng.ILocationService;

        /**
         * Inicializa el controlador al asociarlo con el listado de usuarios del documento de instancia correspondiente
         */
        private init(): void {
            var self = this;

            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');

            self.$scope.cargaCompleta = false;
            self.$scope.puedeContinuar = false;
            this.$scope.severidadAdvertencia = model.SeveridadError.Advertencia;
            this.$scope.severidadError = model.SeveridadError.Error;
            this.$scope.cargarTaxonomia = function (): void {
                if (self.$scope.urlEntryPoint && self.$scope.urlEntryPoint != "") {
                    self.$scope.cargaCompleta = false;
                    self.$scope.puedeContinuar = false;
                    $.isLoading({
                        text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CARGANDO_TAXONOMIA')
                    });
                    self.$scope.erroresCarga = new Array<model.ErrorCargaTaxonomia>();
                    self.abaxXBRLServices.cargarTaxonomiaPorURL(self.$scope.urlEntryPoint).then(function (resultado: abaxXBRL.model.ResultadoOperacion) {
                        if (resultado.Resultado == true) {
                            self.$scope.puedeContinuar = true;
                            self.$scope.taxonomiaCargada = new model.Taxonomia().deserialize(resultado.InformacionExtra);
                        } else {
                            for (var iError = 0; resultado.InformacionExtra && resultado.InformacionExtra.length &&
                                iError < resultado.InformacionExtra.length; iError++) {
                                self.$scope.erroresCarga.push(new model.ErrorCargaTaxonomia().deserialize(resultado.InformacionExtra[iError]));
                            }
                        }
                    },
                        function (resultado: abaxXBRL.model.ResultadoOperacion) {
                            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIA'),
                                {
                                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                    buttons: { aceptar: true }
                                });
                        }).finally(function () {
                        self.$scope.cargaCompleta = true;
                        $.isLoading('hide');

                    });
                }
            };

            this.$scope.limpiar = function (): void {
                self.$scope.urlEntryPoint = "";
            };

            this.$scope.finalizar = function (): void {
                var documentoInstancia = new model.DocumentoInstanciaXbrl();
                documentoInstancia.IdDocumentoInstancia = 0;
                documentoInstancia.Bloqueado = true;
                documentoInstancia.IdUsuarioBloqueo = self.abaxXBRLServices.idUsuarioActivo;
                documentoInstancia.NombreUsuarioBloqueo = self.abaxXBRLServices.nombreCompletoUsuarioActivo;
                documentoInstancia.IdEmpresa = self.abaxXBRLServices.idEmisoraActiva;
                documentoInstancia.PuedeEscribir = true;
                documentoInstancia.EsDueno = true;
                documentoInstancia.RequiereValidacion = true;
                documentoInstancia.RequiereValidacionFormulas = true;
                documentoInstancia.PendienteGuardar = true;
                documentoInstancia.Taxonomia = self.$scope.taxonomiaCargada;
                documentoInstancia.DtsDocumentoInstancia = new Array<model.DtsDocumentoInstancia>();

                var dts = new model.DtsDocumentoInstancia();
                dts.Tipo = model.ConstantesComunes.TIPO_ARCHIVO_SCHEMA_REF;
                dts.HRef = self.$scope.urlEntryPoint;
                documentoInstancia.DtsDocumentoInstancia.push();

                self.abaxXBRLServices.setDefinicionPlantilla(null);
                self.abaxXBRLServices.setDocumentoInstancia(documentoInstancia);

                if (!abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo ||
                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo == null) {
                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo =
                    self.abaxXBRLServices.getDocumentoInstancia().Taxonomia.generarIndiceOperacionesCalculo();
                }
                //self.$location.path("editorXbrl");
                shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.editorXBRL.editorXbrl");
            };
        }

        /**
         * Constructor de la clase
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio para la manipulación de usuarios asignados a un documento de instancia
         * @param $upload servicio para la cara de archivos
        */
        constructor($scope: IXbrlElegirTaxonomiaScope, abaxXBRLServices: services.AbaxXBRLServices, $location: ng.ILocationService) {
            this.$scope = $scope;
            this.$location = $location;
            this.abaxXBRLServices = abaxXBRLServices;
            this.init();
        }
    }
    XbrlElegirTaxonomiaController.$inject = ['$scope', 'abaxXBRLServices', '$location'];

    /**
    * Directiva de para la validación de la lista de selección múltiple.
    * @author Estefania Vargas
    **/
    export class XbrlValidacionListaSeleccionMultiple {

        /**
         * Directiva para la validación de la lista de selección múltiple
         */
        public static XbrlValidacionListaSeleccionMultipleDirective(): ng.IDirective {

            return {
                require: 'ngModel',
                restrict: 'A',
                replace: false,
                transclude: false,
                link: function ($scope: IXbrlElegirPlantillaScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, myCtrl: any) {
                    $scope.$watchCollection('valorSeleccionOpcion.opcionesSeleccionadas', function (newCollection: any, oldCollection: any) {
                        if ($scope.valorSeleccionOpcion.opcionesSeleccionadas && $scope.valorSeleccionOpcion.opcionesSeleccionadas.length > 0) {
                            myCtrl.$setValidity('valorSeleccionOpcion.opcionesSeleccionadas', true);
                        } else {
                            myCtrl.$setValidity('valorSeleccionOpcion.opcionesSeleccionadas', false);
                        }
                    });
                }
            }
        }
    }
} 
