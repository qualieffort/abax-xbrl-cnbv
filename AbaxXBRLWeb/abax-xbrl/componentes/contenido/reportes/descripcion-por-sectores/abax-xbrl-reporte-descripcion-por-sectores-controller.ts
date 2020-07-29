module abaxXBRL.componentes.controllers {

    /**
    * Declaracion del Scope para consulta de reporte "Descripción por sectores".
    *
    * @author Angel de Jesús Cruz Gómez
    * @version 1.0
    */
    export interface AbaxXBRLReporteDescripcionSectoresScope extends IAbaxXBRLInicioScope {

        /**
        * Listado de Emisoras a mostrar
        **/
        listaSectores: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /**
        * Listado de Emisoras a mostrar
        **/
        listaSubSectores: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /**
        * Listado de Emisoras a mostrar
        **/
        listaRamos: Array<abaxXBRL.shared.modelos.ILlaveValor>;
        
        /**
        * Listado de anios de Envios de Reporte Anual.
        **/
        listaAnios: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /**
        * Listado de trimestres de ICS por año.
        **/
        listaTrimestres: Array<abaxXBRL.shared.modelos.ILlaveValor>;
        
        /* Sector Seleccionado */
        sectorSeleccionado: any;

        /* Subsector Seleccionado */
        subSectorSeleccionado: any;

        /* Ramo seleccionado */
        ramoSeleccionado: any;

        /**
        * Año selecionnado en el select.
        **/
        anioSeleccionado: any;

        /**
        * Trimestre seleccionado en el select.
        **/
        trimestreSeleccionado: any;

        /**
        * Bandera que india que se estan cargando los elementos 
        **/
        cargando: boolean;
        /** 
        * Bandera que indica si existen elementos para los filtros dados.
        **/
        existeElementos: boolean;
        /**
        * Bandera que indica si se esta exportando a excel.
        **/
        exportando: boolean;
        /**
        * Exporta los datos de la tabla a excel.
        **/
        exportaAExcel(): void;

        /**
        * Obtiene la lista de los subsectores dado el sector.
        **/
        obtenerSubSectores(): void;

        /**
        * Obtiene la lista de los ramos dado el subSector.
        **/
        obtenerRamos(): void;

        /**
        * Obtiene la lista de anios.
        **/
        obtenerAniosEnvioReporteAnual(): void;

        obtenerTrimestresEnvioReporteAnual(): void;

        /**
        * Bandera para mostrar u ocultar el datepiker.
        **/
        datePikerOpen: boolean;
        /**
        * Muestra el datepiker.
        **/
        muestraDatePiker($event);

        /**
        * Opciones para el datepiker
        **/
        datepikerOptions: any;
        /**
         * Servicio para el cambio de estado de las vistas dentro del sitio. 
        **/
        $state: ng.ui.IStateService;       
    }

    /**
    * Implementacion del Controller del reporte "Descripción por sectores".
    *
    * @author Angel de Jesús Cruz Gómez
    * @version 1.0
    */
    export class AbaxXBRLReporteDescripcionSectoresController {
        /** El Scope del Controlador **/
        private $scope: AbaxXBRLReporteDescripcionSectoresScope;

        /** Servicio para el manejo de las peticiones al Servidor **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Carga Combo de Sectores **/
        private cargarSectores(): void {
            var self: AbaxXBRLReporteDescripcionSectoresController = this;

            var onSuccess = function (result: any) { self.onCargarSectoresSuccess(result.data.InformacionExtra); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_SECTORES, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de Sectores.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarSectoresSuccess(resultado: Array<shared.modelos.ILlaveValor>): void {
            var scope: AbaxXBRLReporteDescripcionSectoresScope = this.$scope;
            scope.listaSectores = resultado;
        }

        /** Carga Combo de SubSectores **/
        private obtenerSubSectores(): void {
            var self: AbaxXBRLReporteDescripcionSectoresController = this;
            var scope: AbaxXBRLReporteDescripcionSectoresScope = this.$scope;

            var onSuccess = function (result: any) { self.onCargarSubSectoresSuccess(result.data.InformacionExtra); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_SUB_SECTORES, { "idSector": scope.sectorSeleccionado.Llave }).then(onSuccess, onError).finally(onFinally);                    
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de SubSectores.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarSubSectoresSuccess(resultado: Array<shared.modelos.ILlaveValor>): void {
            var self: AbaxXBRLReporteDescripcionSectoresController = this;
            var scope: AbaxXBRLReporteDescripcionSectoresScope = this.$scope;
            scope.listaSubSectores = resultado;            
        }

        /** Carga Combo de SubSectores **/
        private obtenerRamos(): void {
            var self: AbaxXBRLReporteDescripcionSectoresController = this;
            var scope: AbaxXBRLReporteDescripcionSectoresScope = this.$scope;

            var onSuccess = function (result: any) { self.onCargarRamosSuccess(result.data.InformacionExtra); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_RAMOS, { "idSubSector": scope.subSectorSeleccionado.Llave }).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de SubSectores.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarRamosSuccess(resultado: Array<shared.modelos.ILlaveValor>): void {
            var self: AbaxXBRLReporteDescripcionSectoresController = this;
            var scope: AbaxXBRLReporteDescripcionSectoresScope = this.$scope;
            scope.listaRamos = resultado;
        }

        /** Carga Combo de Grupo de Empresas **/
        private cargarGrupoEmpresas(): void {
            var self: AbaxXBRLReporteDescripcionSectoresController = this;

            var onSuccess = function (result: any) { self.onCargarGrupoEmpresasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.cargarSectores(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.GRUPO_ENTIDADES_REPOSITORIO_XBRL_PATH, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de grupos de empresas.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarGrupoEmpresasSuccess(resultado: any): void {
            var scope: AbaxXBRLReporteDescripcionSectoresScope = this.$scope;
            scope.grupoEmpresas = resultado.InformacionExtra;
        }

        private muestraDatePiker($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.$scope.datePikerOpen = true;
        }

        private obtenParametrosConsulta(): { [id: string]: any } {
            var self = this;
            var scope = self.$scope;
            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            var params: { [id: string]: any } = {};
            var tipoReporte = scope.tipoDeReporte;
            var emisora = scope.aEmisora;
            var trimestre = scope.trimestreSeleccionado;
            var grupoEmpresa = scope.aGrupoEmpresa;
            
            
            if (tipoReporte) {
                params["idTaxonomiaXbrl"] = tipoReporte;
            }
            if (grupoEmpresa && grupoEmpresa.IdGrupoEmpresa) {
                params["idGrupoEmpresa"] = grupoEmpresa.IdGrupoEmpresa;
            }
            if (emisora && emisora.IdEmpresa) {
                params["idEmpresa"] = emisora.IdEmpresa;
            }
           
            return params;
        }

        /**
        * Valida si el archivo puede ser importado a excel y de ser asi lo importa.
        **/
        private exportaAExcel() {
            var self = this;
            var parametros = self.obtenParametrosConsulta();
            var onSuccess = function (result: any) {
                var data: shared.modelos.IResultadoOperacion = result.data;
                var numeroRegistros: number = data.InformacionExtra;
                if (numeroRegistros <= AbaxXBRLConstantes.MAXIMOS_REGISTROS_RESPUESTA_EXCEL_BITACORA) {
                    self.ejecutaExportaAExcel(parametros);
                } else {
                    var variables: { [id: string]: string } = {};
                    variables["MAXIMOS_REGISTROS"] = AbaxXBRLConstantes.MAXIMOS_REGISTROS_RESPUESTA_EXCEL_BITACORA.toString();
                    variables["CANTIDAD_REGISTROS"] = numeroRegistros.toString();
                    var mensaje = shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_ERROR_EXCEL_BITACORA_SUPERA_MAXIMO_REGISTROS", variables);
                    shared.service.AbaxXBRLUtilsService.AlertaBootstrap(mensaje);
                }
            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTEN_NUMERO_REGISTROS_PATH, parametros).then(onSuccess, onError);
        }

        /** Carga Combo de Emisoras **/
        private obtenerAniosEnvioReporteAnual(): void {
            var self: AbaxXBRLReporteDescripcionSectoresController = this;

            if (self.$scope.ramoSeleccionado != undefined) {
                var params: { [id: string]: any } = {};
                params['idSector'] = self.$scope.sectorSeleccionado.Llave;
                params['idSubSector'] = self.$scope.subSectorSeleccionado.Llave;
                params['idRamo'] = self.$scope.ramoSeleccionado.Llave;

                var onSuccess = function (result: any) {
                    if (result.data != undefined ) {
                        self.$scope.listaAnios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();                                         
                        self.$scope.listaAnios = result.data;
                    } else {
                        self.$scope.listaAnios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();
                        var anio: shared.modelos.ILlaveValor = {
                            llave: "",
                            valor: ""
                        };
                        self.$scope.listaAnios.push(anio);
                    }                    
                };

                var onError = self.abaxXBRLRequestService.getOnErrorDefault();

                var onFinally = function () {
                    //self.obtenerTrimestresEnvios();
                };

                self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_COMBO_ANIOS_REPORTE_DESCRIPCION_POR_SECTORES, params).then(onSuccess, onError).finally(onFinally);
            } else {

                var anio: shared.modelos.ILlaveValor = {
                    llave: "",
                    valor: ""
                };

                self.$scope.anioSeleccionado = null;
                self.$scope.listaAnios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();                
                self.$scope.listaAnios.push(anio);
                //self.obtenerTrimestresEnvios();
            }           
        }

        //Obtiene los trimestres de acuerdo al año.
        private obtenerTrimestresEnvios(): void {
            var self: AbaxXBRLReporteDescripcionSectoresController = this;

            if (self.$scope.ramoSeleccionado != undefined && self.$scope.anioSeleccionado != undefined) {
                var params: { [id: string]: any } = {};
                params['idRamo'] = self.$scope.ramoSeleccionado.Llave;
                params['parametroAnio'] = self.$scope.anioSeleccionado.Llave;

                var onSuccess = function (result: any) {
                    if (result.data != undefined && result.data.length > 0) {
                        self.$scope.listaTrimestres = new Array<abaxXBRL.shared.modelos.ILlaveValor>();   
                        self.$scope.listaTrimestres = result.data;
                    } else {
                        var trimestre: shared.modelos.ILlaveValor = {
                            llave: null,
                            valor: null
                        };
                        self.$scope.trimestreSeleccionado = null;  
                        self.$scope.listaTrimestres = new Array<abaxXBRL.shared.modelos.ILlaveValor>();
                        self.$scope.listaTrimestres.push(trimestre);
                    }
                };

                var onError = self.abaxXBRLRequestService.getOnErrorDefault();

                var onFinally = function () { };

                self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_COMBO_TRIMESTRES_REPORTE_DESCRIPCION_POR_SECTORES, params).then(onSuccess, onError).finally(onFinally);
            } else {
                var trimestre: shared.modelos.ILlaveValor = {
                    llave: null,
                    valor: null
                };

                self.$scope.trimestreSeleccionado = null;                
                self.$scope.listaTrimestres = new Array<abaxXBRL.shared.modelos.ILlaveValor>();                
                self.$scope.listaTrimestres.push(trimestre);                
            }
        }

        /**
         * Solicita la exportación de un archivo a Excel.
         * @param params Parametros de la consulta.
         **/
        private ejecutaExportaAExcel(params: { [id: string]: any }) {
            var self = this;
            var scope = self.$scope;
            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }

            var params: { [id: string]: any } = {};
            var url = AbaxXBRLConstantes.EXPORTA_DESCRIPCION_POR_SECTORES_A_EXCEL;

            if (self.$scope.sectorSeleccionado != undefined) {
                params["idSector"] = self.$scope.sectorSeleccionado.Llave;
                params["nombreSector"] = self.$scope.sectorSeleccionado.Valor;
            }

            if (self.$scope.subSectorSeleccionado != undefined) {
                params["idSubSector"] = self.$scope.subSectorSeleccionado.Llave;
                params["nombreSubSector"] = self.$scope.subSectorSeleccionado.Valor;
            }

            if (self.$scope.ramoSeleccionado != undefined) {
                params["idRamo"] = self.$scope.ramoSeleccionado.Llave;
                params["nombreRamo"] = self.$scope.ramoSeleccionado.Valor;
            }

            if (self.$scope.anioSeleccionado != undefined) {
                params["anio"] = self.$scope.anioSeleccionado.Llave;                
            }

            if (self.$scope.trimestreSeleccionado != undefined) {
                params["trimestre"] = self.$scope.trimestreSeleccionado.Llave;                
            }
            
            self.$scope.exportando = true;
            self.abaxXBRLRequestService.post(url, params, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var self = this;
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, self.$scope.sectorSeleccionado.Valor + '.xls');
        }

        /**
        * Inicializamos los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;

            scope.cargando = true;
            scope.existeElementos = false;
            scope.exportando = false;
            scope.datePikerOpen = false;
            
            scope.muestraDatePiker = function ($event): void { self.muestraDatePiker($event) };
            scope.exportaAExcel = function (): void { self.exportaAExcel(); };

            scope.obtenerSubSectores = function (): void { self.obtenerSubSectores(); };
            scope.obtenerRamos = function (): void { self.obtenerRamos(); };

            scope.obtenerAniosEnvioReporteAnual = function (): void { self.obtenerAniosEnvioReporteAnual(); };
            scope.obtenerTrimestresEnvios = function (): void { self.obtenerTrimestresEnvios(); };                        

            self.cargarSectores();
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para las peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLReporteDescripcionSectoresScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$scope.$state = $state;                     
            this.init();
        }
    }

    AbaxXBRLReporteDescripcionSectoresController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
}