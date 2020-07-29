///<reference path="../../../../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../../../../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../../../../../scripts/typings/impromptu/jquery-impromptu.d.ts" />
///<reference path="../../../../visorXbrl.ts" /> 
///<reference path="../../../../directivasAbax.ts" /> 
///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../../scripts/typings/moment/moment.d.ts" />

module abaxXBRL.templates.extensions {

    /**Dto de los renglones de la tabla. **/
    export class RenglonTablaDto {

        /**Valor del renglon. **/
        numeroRenglon: number;

        /** hecho de la tupla*/
        hecho: abaxXBRL.model.Hecho;

        /** hechos de las columnas  de la tupla*/
        hechosPorConcepto: { [idConcepto: string]: model.Hecho }

        /** Listados de campos de un renglon*/
        camposRenglon: { [indiceColumna: number]: CampoTablaDto };
    }



    /**Dto del campo de la estructura de la pantalla. **/
    export class CampoTablaDto {

        /**Columna en la que se encuentra el campo*/
        columnaCampo: number;

        /**Valor de campo de texto. **/
        valor: string;

        /** Indica si el campo es solo lectura*/
        esActivo: boolean;

        /**Indica si el campo corresponde a un campo numerico*/
        esCampoNumerico: boolean;

        /**Valor del hecho que corresponde al campo*/
        hecho: model.Hecho;
    }




    /**
       * Implementación del controlador encargado de crear el comportamiento necesario para presentar la cartera de inversion en pantalla.
       *
       * @author Luis Angel Morales Gonzalez
       * @version 1.0
       */
    export class XbrlCarteraInversionController {

        /** El scope del controlador */
        private $scope: IXbrlCarteraInversionScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** El servicio para ejecutar tareas asíncronas de angular */
        private $timeout: ng.ITimeoutService;

        /** Conceptos de la cartera de inversion*/
        private idConceptoCarteraInversion: { [indiceColumna: number]: string };

        /** Documento instancia xbrl*/
        private documentoInstancia: model.DocumentoInstanciaXbrl;
        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;


        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self = this;

            self.$scope.valoresTabla = new Array<RenglonTablaDto>();
            self.$scope.identificadorUnicoRenglon = 0;

            self.idConceptoCarteraInversion = {};
            self.idConceptoCarteraInversion[0] = "inver_bmv_cor_NumeroConsecutivoCartera";
            self.idConceptoCarteraInversion[1] = "inver_bmv_cor_TipoInversion";
            self.idConceptoCarteraInversion[2] = "inver_bmv_cor_Emisora";
            self.idConceptoCarteraInversion[3] = "inver_bmv_cor_Serie";
            self.idConceptoCarteraInversion[4] = "inver_bmv_cor_Cupon";
            self.idConceptoCarteraInversion[5] = "inver_bmv_cor_TipoValor";
            self.idConceptoCarteraInversion[6] = "inver_bmv_cor_CodigoIdentificacion";
            self.idConceptoCarteraInversion[7] = "inver_bmv_cor_TasaAlValuar";
            self.idConceptoCarteraInversion[8] = "inver_bmv_cor_TipoTasa";
            self.idConceptoCarteraInversion[9] = "inver_bmv_cor_Agrupacion";
            self.idConceptoCarteraInversion[10] = "inver_bmv_cor_Bursatilidad";
            self.idConceptoCarteraInversion[11] = "inver_bmv_cor_NumeroTitulosOperados";
            self.idConceptoCarteraInversion[12] = "inver_bmv_cor_NumeroTitulosLiquidados";
            self.idConceptoCarteraInversion[13] = "inver_bmv_cor_TotalTitulosEmision";
            self.idConceptoCarteraInversion[14] = "inver_bmv_cor_CostoPromedioUnitario";
            self.idConceptoCarteraInversion[15] = "inver_bmv_cor_CostoTotalAdquisicion";
            self.idConceptoCarteraInversion[16] = "inver_bmv_cor_ValorRazonableContableUnitario";
            self.idConceptoCarteraInversion[17] = "inver_bmv_cor_ValorRazonableContableTotal";
            self.idConceptoCarteraInversion[18] = "inver_bmv_cor_DiasPorVencer";
            self.idConceptoCarteraInversion[19] = "inver_bmv_cor_Var";
            self.idConceptoCarteraInversion[20] = "inver_bmv_cor_TipoContraparte";
            self.idConceptoCarteraInversion[21] = "inver_bmv_cor_TipoContrato";
            self.idConceptoCarteraInversion[22] = "inver_bmv_cor_PaisAdquisicionValores";

            self.documentoInstancia = this.abaxService.getDocumentoInstancia();

            self.$scope.inicializarHechosTupla = function (renglon: RenglonTablaDto): void {
                renglon.camposRenglon = new Array<CampoTablaDto>();
                if (!renglon.hecho.Hechos)
                renglon.hecho.Hechos = new Array<string>();

                for (var i = 0; i < 23; i++) {
                    var campoTabla = new CampoTablaDto()
                    campoTabla.columnaCampo = i;
                    campoTabla.esActivo = false;
                    campoTabla.valor = "";

                    if (!renglon.hechosPorConcepto || !renglon.hechosPorConcepto[self.idConceptoCarteraInversion[i]]) {
                        var hechoCreacion = self.abaxService.crearHechoAPartirDeIdDescriptores(self.idConceptoCarteraInversion[i], "ContextoGeneral", "moneda_reporte", null, "2", campoTabla.esCampoNumerico ? "0" : "");
                        campoTabla.hecho = hechoCreacion;
                        renglon.hecho.Hechos.push(hechoCreacion.Id);
                    } else {
                        campoTabla.hecho = renglon.hechosPorConcepto[self.idConceptoCarteraInversion[i]];
                        campoTabla.valor = campoTabla.hecho.ValorHecho;
                    }


                    renglon.camposRenglon[i] = campoTabla;
                }
            }

            self.$scope.mostrarPaginacion = function (): void {
                self.$scope.valoresTablaPaginada = new Array<RenglonTablaDto>();
                self.$scope.numeroElementosPorPagina = 15;
                self.$scope.totalRegistros = self.$scope.valoresTabla.length;

                if (self.$scope.valoresTabla.length > self.$scope.numeroElementosPorPagina) {
                    var elementoInicial = (self.$scope.paginaActual - 1) * self.$scope.numeroElementosPorPagina;
                    var elementoFinal = (self.$scope.paginaActual-1) * self.$scope.numeroElementosPorPagina + self.$scope.numeroElementosPorPagina;

                    var numeroValor = 0;
                    for (var valorTabla in self.$scope.valoresTabla) {

                        if (numeroValor >= elementoInicial && numeroValor < elementoFinal) {
                            self.$scope.valoresTablaPaginada.push(self.$scope.valoresTabla[valorTabla]);
                        }

                        numeroValor++
                    }

                } else {
                    for (var valorTabla in self.$scope.valoresTabla) {
                        self.$scope.valoresTablaPaginada.push(self.$scope.valoresTabla[valorTabla]);
                    }
                }



            }

            self.$scope.agregarElementoTabla = function (): void {
                self.$scope.identificadorUnicoRenglon = self.$scope.identificadorUnicoRenglon + 1;
                var renglon = new RenglonTablaDto();
                renglon.hecho = self.abaxService.crearHechoAPartirDeIdDescriptores("inver_bmv_cor_RegistroCartera", null, null);
                renglon.numeroRenglon = self.$scope.identificadorUnicoRenglon;

                self.$scope.inicializarHechosTupla(renglon);
                self.$scope.valoresTabla.push(renglon);
                self.$scope.mostrarPaginacion();
            }

            self.$scope.eliminarElementoTabla = function (identificadorElemento: number): void {

                var indiceElementoEliminar = 0;
                for (var indiceValorTabla = 0; indiceValorTabla < self.$scope.valoresTabla.length; indiceValorTabla++) {
                    if (self.$scope.valoresTabla[indiceValorTabla].numeroRenglon == identificadorElemento) {
                        indiceElementoEliminar = indiceValorTabla;
                        break;
                    }
                    
                }

                var elementosEliminado = self.$scope.valoresTabla.splice(indiceElementoEliminar, 1);

                for (var indiceElementoEliminado in elementosEliminado) {
                    for (var indiceHechoEliminar in elementosEliminado[indiceElementoEliminado].hecho.Hechos) {
                        self.abaxService.eliminarHechoDeDocumentoInstanciaPorId(elementosEliminado[indiceElementoEliminado].hecho.Hechos[indiceHechoEliminar].toString());
            }
                    self.abaxService.eliminarHechoDeDocumentoInstanciaPorId(elementosEliminado[indiceElementoEliminado].hecho.Id);
                }

                self.$scope.mostrarPaginacion();
            }

            self.$scope.inicializarCatalogoTipoInversion = function (): void {
                self.$scope.catalogoTipoInversion = new Array<any>();

                self.$scope.catalogoTipoInversion.push({ clave: 'C', descripcion: 'C' });
                self.$scope.catalogoTipoInversion.push({ clave: 'D', descripcion: 'D' });
                self.$scope.catalogoTipoInversion.push({ clave: 'E', descripcion: 'E' });
                self.$scope.catalogoTipoInversion.push({ clave: 'F', descripcion: 'F' });
                self.$scope.catalogoTipoInversion.push({ clave: 'G', descripcion: 'G' });
                self.$scope.catalogoTipoInversion.push({ clave: 'I', descripcion: 'I' });
                self.$scope.catalogoTipoInversion.push({ clave: 'N', descripcion: 'N' });
                self.$scope.catalogoTipoInversion.push({ clave: 'O', descripcion: 'O' });
                self.$scope.catalogoTipoInversion.push({ clave: 'P', descripcion: 'P' });
                self.$scope.catalogoTipoInversion.push({ clave: 'R', descripcion: 'R' });
                self.$scope.catalogoTipoInversion.push({ clave: 'S', descripcion: 'S' });
                self.$scope.catalogoTipoInversion.push({ clave: 'T', descripcion: 'T' });
                self.$scope.catalogoTipoInversion.push({ clave: 'W', descripcion: 'W' });
                self.$scope.catalogoTipoInversion.push({ clave: 'L', descripcion: 'L' });
            }

            self.$scope.inicializarCatalogoTasa = function (): void {
                self.$scope.catalogoTipoTasa = new Array<any>();
                self.$scope.catalogoTipoTasa.push({ clave: 'RI', descripcion: 'RI' });
                self.$scope.catalogoTipoTasa.push({ clave: 'RU', descripcion: 'RU' });
                self.$scope.catalogoTipoTasa.push({ clave: 'ST', descripcion: 'ST' });
                self.$scope.catalogoTipoTasa.push({ clave: 'TD', descripcion: 'TD' });
                self.$scope.catalogoTipoTasa.push({ clave: 'TR', descripcion: 'TR' });

            }

            self.$scope.inicializarCatalogoBursatilidad = function (): void {
                self.$scope.catalogoBursatilidad = new Array<any>();
                self.$scope.catalogoBursatilidad.push({ clave: 'ALTB', descripcion: 'ALTB' });
                self.$scope.catalogoBursatilidad.push({ clave: 'BAJB', descripcion: 'BAJB' });
                self.$scope.catalogoBursatilidad.push({ clave: 'NULB', descripcion: 'NULB' });
                self.$scope.catalogoBursatilidad.push({ clave: 'MEDB', descripcion: 'MEDB' });
                self.$scope.catalogoBursatilidad.push({ clave: 'MINB', descripcion: 'MINB' });
            }

            self.$scope.inicializarCatalogoTipoContrato = function (): void {
                self.$scope.catalogoTipoContrato = new Array<any>();
                self.$scope.catalogoTipoContrato.push({ clave: 'CPRA', descripcion: 'CPRA' });
                self.$scope.catalogoTipoContrato.push({ clave: 'VTA', descripcion: 'VTA' });
                self.$scope.catalogoTipoContrato.push({ clave: 'INT', descripcion: 'INT' });
            }

            self.$scope.editarCampo = function (campoTabla: CampoTablaDto): void {
                campoTabla.esActivo = true;
            }

            self.$scope.inicializarCatalogoTipoInversion();
            self.$scope.inicializarCatalogoTasa();
            self.$scope.inicializarCatalogoBursatilidad();
            self.$scope.inicializarCatalogoTipoContrato();

            if (!self.documentoInstancia.ContextosPorId["ContextoGeneral"]) {
                self.documentoInstancia.ContextosPorId["ContextoGeneral"] = self.abaxService.crearContextoAPartirDeDefinicionPlantilla("ContextoGeneral");
                self.documentoInstancia.ContextosPorId["ContextoGeneral"].Id = "ContextoGeneral";
            }

            if (!self.documentoInstancia.UnidadesPorId["moneda_reporte"]) {
                self.documentoInstancia.UnidadesPorId["moneda_reporte"] = self.abaxService.crearUnidadAPartirDeDefinicionPlantilla("moneda_reporte");
                self.documentoInstancia.UnidadesPorId["pure"] = self.abaxService.crearUnidadAPartirDeDefinicionPlantilla("pure");

                self.documentoInstancia.UnidadesPorId["moneda_reporte"].Id = "moneda_reporte";
                self.documentoInstancia.UnidadesPorId["pure"].Id = "pure";
            }

            var indiceRenglonTabla = 0;
            for (var idHechoTupla in self.documentoInstancia.HechosPorIdConcepto["inver_bmv_cor_RegistroCartera"]) {
                var hechoTupla = self.documentoInstancia.HechosPorId[self.documentoInstancia.HechosPorIdConcepto["inver_bmv_cor_RegistroCartera"][idHechoTupla]];

                var renglon = new RenglonTablaDto();
                renglon.hecho = hechoTupla;
                renglon.hechosPorConcepto = {};
                renglon.numeroRenglon = self.$scope.identificadorUnicoRenglon;

                for (var indiceHechoEnTupla in hechoTupla.Hechos) {
                    var idHechoAuxiliar:string = hechoTupla.Hechos[indiceHechoEnTupla];
                    var hechoAuxiliar = self.documentoInstancia.HechosPorId[idHechoAuxiliar];
                    renglon.hechosPorConcepto[hechoAuxiliar.IdConcepto] = hechoAuxiliar;
                }

                self.$scope.inicializarHechosTupla(renglon);
                self.$scope.valoresTabla.push(renglon);
                self.$scope.identificadorUnicoRenglon = self.$scope.identificadorUnicoRenglon + 1;
            }

            $(document).keydown(function (e: any) {
                self.onKeyPressListener(e);
            });

            self.$scope.mostrarPopUp = function (index: number) { self.mostrarPopUp(index); }


            self.$scope.paginaActual = 1;
            self.$scope.mostrarPaginacion();


        }
	
        /**
        * Cordenadas del último campo activo.
        **/
        private cordenadaActual: { indexRenglon: number; indexCampo: number; } = { indexCampo: 0, indexRenglon: 0 }
        /**
        * Obtiene la posición del campo activo.
        * @return Objeto con las cordenadas del campo activo.
        **/
        private getCampoActivo(): CampoTablaDto {
            var valoresTabla = this.$scope.valoresTabla;
            for (var indexRenglon: number = 0; indexRenglon < valoresTabla.length; indexRenglon++) {
                var renglon = valoresTabla[indexRenglon];
                for (var indexCampo in renglon.camposRenglon) {
                    var campo = renglon.camposRenglon[indexCampo];
                    if (campo.esActivo) {



                        this.cordenadaActual.indexCampo = Number(indexCampo);
                        this.cordenadaActual.indexRenglon = indexRenglon;
                        return campo;
                    }
                }

            }
            var cordenadaActual = this.cordenadaActual;
            if (!this.esCordenadaValida(cordenadaActual)) {
                cordenadaActual.indexRenglon = 0;
                cordenadaActual.indexCampo = 0;
            }
            return valoresTabla[cordenadaActual.indexRenglon].camposRenglon[cordenadaActual.indexCampo];
        }
        /**
        * Determina si una cordena es valida.
        * @param cordenada Objeto con la posiciones a validar.
        * @return Si es valida.
        **/
        private esCordenadaValida(cordenada: { indexRenglon: number; indexCampo: number; }): boolean {
            var valoresTabla = this.$scope.valoresTabla;
            var valida = false;
            if (valoresTabla.length > cordenada.indexRenglon) {
                var campo = valoresTabla[cordenada.indexRenglon].camposRenglon[cordenada.indexCampo];
                if (campo && campo != null) {
                    valida = true;
                }
            }
            return valida;
        }
        /**
        * Evalua el evento keypress de agular.
        * @$event Evento ocurrido.
        **/
        private onKeyPressListener($event: ng.IAngularEvent): void {
            var $self = this;
            var $scope = $self.$scope;
            var valoresTabla = $self.$scope.valoresTabla;
            if ($event.keyCode == AbaxXBRLCodigoTecla.Tab) {
                $event.preventDefault();
                if ($scope.valoresTabla && $scope.valoresTabla.length > 0) {
                    var campoActivo = $self.getCampoActivo();
                    var cordenada = $self.cordenadaActual;
                    cordenada.indexCampo++;
                    if (!$self.esCordenadaValida(cordenada)) {
                        cordenada.indexCampo = 0;
                        cordenada.indexRenglon++;
                        if (!$self.esCordenadaValida(cordenada)) {
                            $self.$scope.agregarElementoTabla();
                            if (!$self.esCordenadaValida(cordenada)) {
                                cordenada.indexRenglon = 0;
                            }
                        }
                    }
                    campoActivo.esActivo = false;

                    valoresTabla[cordenada.indexRenglon].camposRenglon[cordenada.indexCampo].esActivo = true;
                    $scope.$apply();
                    var input = $('input[type="text"]');
                    if (input.length > 0) {
                        input.focus();
                    } else {
                        $('select[name="valor"]').focus();
                    }
                }
            }
        }



        /**
        * Muestra un popup para la captura de los campos en forma vertical.
        **/
        mostrarPopUp(index: number): void {
            var $self = this;
            var valoresTabla = $self.$scope.valoresTabla;
            if (valoresTabla && valoresTabla.length > index) {
                var campo = valoresTabla[index];
                shared.service.AbaxXBRLSessionService.setAtributoSesion("renglonTabla", campo);
                shared.service.AbaxXBRLSessionService.setAtributoSesion("catalogoTipoInversion", $self.$scope.catalogoTipoInversion);
                shared.service.AbaxXBRLSessionService.setAtributoSesion("catalogoTipoTasa", $self.$scope.catalogoTipoTasa);
                shared.service.AbaxXBRLSessionService.setAtributoSesion("catalogoBursatilidad", $self.$scope.catalogoBursatilidad);
                shared.service.AbaxXBRLSessionService.setAtributoSesion("catalogoTipoContrato", $self.$scope.catalogoTipoContrato );

                $self.$modal.open({
                    templateUrl: 'ts/templates/taxonomias/inver-bmv/extensions/popup-captura/popup-captura-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: XbrlPopupCarteraController,
                    size: 'lg'
                });
            }
        }

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         * @param $modal Servicio para mostrar dialogos modales.
         */
        constructor($scope: IXbrlCarteraInversionScope, abaxXBRLServices: services.AbaxXBRLServices, $timeout: ng.ITimeoutService, $modal: ng.ui.bootstrap.IModalService) {
            var self = this;
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$timeout = $timeout;
            this.$modal = $modal;

            this.init();
        }
    }
    XbrlCarteraInversionController.$inject = ['$scope', 'abaxXBRLServices', '$timeout', '$modal'];

    /**
    * Popup para captura.
    **/
    export interface XbrlPopupCarteraScope extends ng.IScope {

        /**
        * Renglon a presentar.
        **/
        renglonTabla: RenglonTablaDto;
        /**
        * Cierra el dialogo.
        **/
        cerrarDialogo(): void;
        /** Informacion del catalogo de tipo de inversion*/
        catalogoTipoInversion: Array<any>;

        /** Informacion del catalogo de tipo de tasa*/
        catalogoTipoTasa: Array<any>;

        /** Informacion del catalogo de bursatilidad*/
        catalogoBursatilidad: Array<any>;

        /** Informacion del catalogo de tipo de contrato*/
        catalogoTipoContrato: Array<any>;

    }
    /**
    * Controlador del popup.
    **/
    export class XbrlPopupCarteraController {

        $scope: XbrlPopupCarteraScope;
        $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        

        private init(): void {
            var $self = this;
            $self.$scope.renglonTabla = shared.service.AbaxXBRLSessionService.getAtributoSesion("renglonTabla");
            $self.$scope.cerrarDialogo = function () {
                $self.$modalInstance.close();
            }
            $self.$scope.catalogoTipoInversion = shared.service.AbaxXBRLSessionService.getAtributoSesion("catalogoTipoInversion");
            $self.$scope.catalogoTipoTasa = shared.service.AbaxXBRLSessionService.getAtributoSesion("catalogoTipoTasa");
            $self.$scope.catalogoBursatilidad = shared.service.AbaxXBRLSessionService.getAtributoSesion("catalogoBursatilidad");
            $self.$scope.catalogoTipoContrato = shared.service.AbaxXBRLSessionService.getAtributoSesion("catalogoTipoContrato");

        }

        constructor($scope: XbrlPopupCarteraScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {
            this.$modalInstance = $modalInstance;
            this.$scope = $scope;
            this.init();
        }
    }

    XbrlPopupCarteraController.$inject = ['$scope', '$modalInstance'];


    /**
     * Define la estructura del Scope para la cartera de inversion
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export interface IXbrlCarteraInversionScope extends ng.IScope {

        /** Elementos que seran presentados en la tabla*/
        valoresTabla: Array<RenglonTablaDto>;

        /** Elementos que seran presentados en la tabla paginada*/
        valoresTablaPaginada: Array<RenglonTablaDto>;

        /** Informacion del catalogo de tipo de inversion*/
        catalogoTipoInversion: Array<any>;

        /** Informacion del catalogo de tipo de tasa*/
        catalogoTipoTasa: Array<any>;

        /** Informacion del catalogo de bursatilidad*/
        catalogoBursatilidad: Array<any>;

        /** Informacion del catalogo de tipo de contrato*/
        catalogoTipoContrato: Array<any>;

        /**
         * Agrega un nuevo valor a la tabla
         *
         */
        agregarElementoTabla(): void;
       

        /** 
        * Elimina un elemento en la tabla
        * @param indiceElemento Define el indice del elemento a eliminar
        **/
        eliminarElementoTabla(indiceElemento: number): void;

        /** Inicializa el catalogo de tipo de inversion*/
        inicializarCatalogoTipoInversion(): void;

        /** Inicializa el catalogo de tipo de tasa*/
        inicializarCatalogoTasa(): void;

        /** Inicializa el catalogo de bursatilidad*/
        inicializarCatalogoBursatilidad(): void;

        /** Inicializa el catalogo de tipo de contrato*/
        inicializarCatalogoTipoContrato(): void;

        /** indica que se va a editar el campo*/
        editarCampo(campoTabla: CampoTablaDto): void;

        /** Inicializa los hechos de una tupla*/
        inicializarHechosTupla(renglon: RenglonTablaDto): void;
        /**
        * Muestra un popup para la captura de los campos en forma vertical.
        **/
        mostrarPopUp(index:number): void;

        /** Evento para manejar la seleccion del */
        mostrarPaginacion(): void;

        /** Registros totales para el paginador */
        totalRegistros: number;

        /** Pagina actual del paginador*/
        paginaActual: number;

        /** Numero de elementos por pagina*/
        numeroElementosPorPagina: number;

        /** identificador unico por renglon*/
        identificadorUnicoRenglon: number;


    }

    /**
     * Implementación de una directiva para presentar el la cartera inversion.
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlCarteraInversion {

        /**
         * Obtiene la definición de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlCarteraInversionDirective(): ng.IDirective {

            return {
                restrict: 'A',
                controller: XbrlCarteraInversionController
            };
        }
    }

    var carteraInversionModule: ng.IModule = angular.module('abaxXBRLCarteraInversionViewer', ['abaxXBRLViewer']);

    carteraInversionModule.controller('XbrlCarteraInversionController', abaxXBRL.templates.extensions.XbrlCarteraInversionController);
    carteraInversionModule.controller('xbrlPopupCarteraController', XbrlPopupCarteraController);
    carteraInversionModule.directive('xbrlCarteraInversion', abaxXBRL.templates.extensions.XbrlCarteraInversion.XbrlCarteraInversionDirective);
}