module abaxXBRL.componentes.controllers {

    /**
    * Declaracion del Scope para consulta de reportes "Ficha Administrativa", "Ficha técnica" entre otros.
    *
    * @author Angel de Jesús Cruz Gómez
    * @version 1.0
    */
    export interface AbaxXBRLReporteScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de Emisoras a mostrar
        **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;

        /**
        * Listado de Emisoras a mostrar
        **/
        emisorasPorGrupo: Array<abaxXBRL.shared.modelos.IEmisora>;

        /**
        * Listado de listaTipoReporte a mostrar
        **/
        listaTipoReporte: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /**
        * Listado de Modulos a mostrar
        **/
        grupoEmpresas: Array<abaxXBRL.shared.modelos.IGrupoEmpresa>;

        /**
        * Listado de anios de Envios de Reporte Anual.
        **/
        aniosEnvios: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /**
        * Listado de trimestres de ICS por año.
        **/
        trimestesEnvios: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        //Fecha filtro
        aFecha: string;

        /* Emisora Seleccionada*/
        aEmisora: abaxXBRL.shared.modelos.IEmisora;

        /* Grupo Empresa Seleccionada*/
        aGrupoEmpresa: abaxXBRL.shared.modelos.IGrupoEmpresa;

        /**
        * Año selecionnado en el select.
        **/
        anioSeleccionado: abaxXBRL.shared.modelos.ILlaveValor;

        /**
        * Trimestre seleccionado en el select.
        **/
        trimestreSeleccionado: abaxXBRL.shared.modelos.ILlaveValor;

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
        * Exporta los datos de la tabla a excel.
        **/
        obtenerAniosEnvioReporteAnual(): void;
       
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

        /**
        * Indica el tipo de reporte, de acuerdo al mismo se mostraran los campos.
        **/
        tipoDeReporte: number;

        /**
        * Indica el título del reporte de acuerdo a la opción elegida.
        */
        tituloReporte: string;
    }

    /**
    * Implementacion del Controller del Resumen de Información de Reportes del 4° Dictaminado.
    *
    * @author Angel de Jesús Cruz Gómez
    * @version 1.0
    */
    export class AbaxXBRLReporteController {
        /** El Scope del Controlador **/
        private $scope: AbaxXBRLReporteScope;

        /** Servicio para el manejo de las peticiones al Servidor **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Carga Combo de Emisoras **/
        private cargarEmisoras(): void {
            var self: AbaxXBRLReporteController = this;

            var onSuccess = function (result: any) { self.onCargarEmisorasSuccess(result.data.InformacionExtra); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTA_TODAS_EMPRESAS_COMBO_PATH, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Taxonomias **/
        private cargarTiposReporte(): void {
            var self: AbaxXBRLReporteController = this;


            self.$scope.listaTipoReporte = new Array<abaxXBRL.shared.modelos.ILlaveValor>();

            self.$scope.listaTipoReporte.push({ llave: '0', valor: "Ficha administrativa de Emisoras" });
            self.$scope.listaTipoReporte.push({ llave: '1', valor: "Ficha Técnica de Emisoras" });

            self.onCargarTiposReporteSuccess(self.$scope.listaTipoReporte);
        }

        /** Carga Combo de Grupo de Empresas **/
        private cargarGrupoEmpresas(): void {
            var self: AbaxXBRLReporteController = this;

            var onSuccess = function (result: any) { self.onCargarGrupoEmpresasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.cargarEmisoras(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.GRUPO_ENTIDADES_REPOSITORIO_XBRL_PATH, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de emisoras.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarEmisorasSuccess(resultado: Array<shared.modelos.IEmisora>): void {
            var scope: AbaxXBRLReporteScope = this.$scope;
            scope.emisoras = resultado;
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de emisoras por grupo.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarEmisorasPorGrupoSuccess(resultado: Array<shared.modelos.IEmisora>): void {
            var scope: AbaxXBRLReporteScope = this.$scope;
            scope.emisorasPorGrupo = resultado;
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de listaTipoReporte.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarTiposReporteSuccess(resultado: Array<shared.modelos.ILlaveValor>): void {
            var self: AbaxXBRLReporteController = this;
            var scope: AbaxXBRLReporteScope = this.$scope;
            scope.listaTipoReporte = resultado;

            self.cargarGrupoEmpresas();
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de grupos de empresas.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarGrupoEmpresasSuccess(resultado: any): void {
            var scope: AbaxXBRLReporteScope = this.$scope;
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
            var self: AbaxXBRLReporteController = this;

            if (self.$scope.aEmisora != undefined) {
                var params: { [id: string]: any } = {};
                params['claveCotizacion'] = self.$scope.aEmisora.NombreCorto;

                var onSuccess = function (result: any) {
                    if (result.data != undefined && result.data.length > 0) {

                        self.$scope.aniosEnvios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();

                        for (var indice in result.data) {
                            self.$scope.aniosEnvios.push({ llave: result.data[indice].Llave, valor: result.data[indice].Valor });
                        }                   
                    } else {
                        self.$scope.aniosEnvios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();
                        var anio: shared.modelos.ILlaveValor = {
                            llave: "",
                            valor: ""
                        };
                        self.$scope.aniosEnvios.push(anio);
                    }                    
                };

                var onError = self.abaxXBRLRequestService.getOnErrorDefault();

                var onFinally = function () { self.obtenerTrimestresEnvios(); };

                self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_ENVIOS_POR_ENTIDAD, params).then(onSuccess, onError).finally(onFinally);
            } else {

                var anio: shared.modelos.ILlaveValor = {
                    llave: "",
                    valor: ""
                };

                self.$scope.anioSeleccionado = null;

                self.$scope.aniosEnvios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();
                
                self.$scope.aniosEnvios.push(anio);
                self.obtenerTrimestresEnvios();
            }           
        }

        //Obtiene los trimestres de acuerdo al año.
        private obtenerTrimestresEnvios(): void {
            var self: AbaxXBRLReporteController = this;

            if (self.$scope.aEmisora != undefined && self.$scope.anioSeleccionado != undefined && self.$scope.anioSeleccionado != undefined) {
                var params: { [id: string]: any } = {};
                params['Parametros.Ano'] = self.$scope.anioSeleccionado.llave;
                params['Entidad.Nombre'] = self.$scope.aEmisora.NombreCorto;

                var onSuccess = function (result: any) {
                    if (result.data != undefined && result.data.length > 0) {

                        self.$scope.trimestesEnvios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();

                        for (var indice in result.data) {
                            self.$scope.trimestesEnvios.push({ llave: result.data[indice].Llave, valor: result.data[indice].Valor });
                        }    

                    } else {
                        var trimestre: shared.modelos.ILlaveValor = {
                            llave: null,
                            valor: null
                        };
                        self.$scope.trimestesEnvios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();
                        self.$scope.trimestesEnvios.push(trimestre);
                    }
                };

                var onError = self.abaxXBRLRequestService.getOnErrorDefault();

                var onFinally = function () { };

                self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_TRIMESTRES_ICS_POR_ENTIDAD_Y_ANIO_ENVIO, params).then(onSuccess, onError).finally(onFinally);
            } else {
                var trimestre: shared.modelos.ILlaveValor = {
                    llave: null,
                    valor: null
                };

                self.$scope.trimestreSeleccionado = null;
                
                self.$scope.trimestesEnvios = new Array<abaxXBRL.shared.modelos.ILlaveValor>();
                
                self.$scope.trimestesEnvios.push(trimestre);
                
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
            var url = AbaxXBRLConstantes.EXPORTA_RESUMEN_INFORMACION_4D_A_EXCEL;

            var tipoReporte = scope.tipoDeReporte;
            var emisora = scope.aEmisora;
            var anio = scope.anioSeleccionado;
            var trimestre = scope.trimestreSeleccionado;
            
            if (tipoReporte != undefined) {
                if (tipoReporte == 0) {
                    url = AbaxXBRLConstantes.EXPORTA_REPORTE_FICHA_ADMINISTRATIVA;
                } else {
                    url = AbaxXBRLConstantes.EXPORTA_REPORTE_FICHA_TECNICA;
                }
            }

            if (emisora && emisora.IdEmpresa) {
                params["claveCotizacion"] = emisora.NombreCorto;
            }

            if (anio && anio.llave) {
                params["anio"] = anio.llave;
            }

            if (trimestre && trimestre.llave) {
                params["trimestre"] = trimestre.llave;
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
            saveAs(blob, self.$scope.aEmisora.NombreCorto + '.xls');
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
            scope.obtenerAniosEnvioReporteAnual = function (): void { self.obtenerAniosEnvioReporteAnual(); };
            scope.obtenerTrimestresEnvios = function (): void { self.obtenerTrimestresEnvios(); };                        
            self.cargarGrupoEmpresas();
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para las peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLReporteScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService, $tipoReporte: number) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$scope.$state = $state;
            this.$scope.tipoDeReporte = $tipoReporte;

            if ($tipoReporte == 0) {
                this.$scope.tituloReporte = "TITULO_REPORTE_FICHA_ADMINISTRATIVA"
            } else {
                this.$scope.tituloReporte = "TITULO_REPORTE_FICHA_TECNICA"
            }

            this.init();
        }
    }

    AbaxXBRLReporteController.$inject = ['$scope', 'abaxXBRLRequestService', '$state', '$tipoReporte'];
}