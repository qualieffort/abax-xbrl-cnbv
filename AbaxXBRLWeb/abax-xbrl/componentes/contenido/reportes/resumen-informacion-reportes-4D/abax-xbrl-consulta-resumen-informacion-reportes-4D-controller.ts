module abaxXBRL.componentes.controllers {

    /**
    * Declaracion del Scope para consulta del Resumen de Información de Reportes del 4° Dictaminado.
    *
    * @author Angel de Jesús Cruz Gómez
    * @version 1.0
    */
    export interface AbaxXBRLResumenInformacion4DScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de Emisoras a mostrar
        **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;

        /**
        * Listado de Emisoras a mostrar
        **/
        emisorasPorGrupo: Array<abaxXBRL.shared.modelos.IEmisora>;

        /**
        * Listado de taxonomias a mostrar
        **/
        taxonomias: Array<abaxXBRL.shared.modelos.ITaxonomiaXbrl>;

        /**
        * Listado de Modulos a mostrar
        **/
        grupoEmpresas: Array<abaxXBRL.shared.modelos.IGrupoEmpresa>;

        /**
        * Criterio de busqueda.
        **/
        criterioBusqueda: abaxXBRL.shared.modelos.IRegistroAuditoria;
        /**
        * Listado con los registros de auditoria a mostrar.
        **/
        registrosAuditoria: Array<shared.modelos.IRegistroAuditoria>;
        //Fecha filtro
        aFecha: string;

        //Registro filtro
        aRegistro: string;

        //Opciones DataTable
        opcionesDataTableBitacora: any;

        /* Emisora Seleccionada*/
        aEmisora: abaxXBRL.shared.modelos.IEmisora;

        /* Taxonomia Seleccionada*/
        aTaxonomia: abaxXBRL.shared.modelos.ITaxonomiaXbrl;

        /* Grupo Empresa Seleccionada*/
        aGrupoEmpresa: abaxXBRL.shared.modelos.IGrupoEmpresa;

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
        * Diccionario con las emisoras existentes.
        **/
        diccionarioEmisoras: { [id: number]: shared.modelos.IEmisora }
        /**
        * Diccionario con las taxonomias.
        **/
        diccionarioTaxonomias: { [id: number]: shared.modelos.ITaxonomiaXbrl }
        /**
        * Diccionario con los Grupos de Empresas.
        **/
        diccionarioGrupoEmpresas: { [id: number]: shared.modelos.IGrupoEmpresa }
        /**
        * Bandera para mostrar u ocultar el datepiker.
        **/
        datePikerOpen: boolean;
        /**
        * Muestra el datepiker.
        **/
        muestraDatePiker($event);
        /**
        * Objeto con las opcines de configuración del datatable local.
        **/
        opcionesDataTableLocal: any;
        /**
        * Referencia a la instancia del datatable.
        **/
        dataTableInstance: any;
        /**
        * Refresca el contenido del data table.
        **/
        refreshData(): void;

        /**
        * Opciones para el datepiker
        **/
        datepikerOptions: any;
        /**
         * Servicio para el cambio de estado de las vistas dentro del sitio. 
        **/
        $state: ng.ui.IStateService;
        /**
        * Direcciona al usuario, a la pantalla para depurara la bitacora.
        **/
        irADepurarBitacora(): void;

        /** Valor del enum para el tipo de atributo campo lista selección múltiple */
        AtributoListaSeleccionMultiple: model.TipoDatoParametroConfiguracion;

        /** Valor seleccionado del parámetro de la lista de seleccion múltiple */
        valorSeleccionOpcion: { opcion: model.SelectItem, opcionesSeleccionadas: Array<model.SelectItem> };

        /*** Indica si la lista está preparada para mostrarse */
        listaCargada: { [id: string]: string; };
    }

    /**
    * Implementacion del Controller del Resumen de Información de Reportes del 4° Dictaminado.
    *
    * @author Angel de Jesús Cruz Gómez
    * @version 1.0
    */
    export class AbaxXBRLResumenInformacion4DController {
        /** El Scope del Controlador **/
        private $scope: AbaxXBRLResumenInformacion4DScope;

        /** Servicio para el manejo de las peticiones al Servidor **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Carga Combo de Emisoras **/
        private cargarEmisoras(): void {
            var self: AbaxXBRLResumenInformacion4DController = this;

            var onSuccess = function (result: any) { self.onCargarEmisorasSuccess(result.data.InformacionExtra); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.configurarOpcionesDataTable(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTA_TODAS_EMPRESAS_COMBO_PATH, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Emisoras **/
        private obtenerEmisorasPorGrupo(): void {
            var self: AbaxXBRLResumenInformacion4DController = this;

            if (self.$scope.aGrupoEmpresa != null) {
                var onSuccess = function (result: any) { self.onCargarEmisorasPorGrupoSuccess(result.data); }
                var onError = self.abaxXBRLRequestService.getOnErrorDefault();
                var onFinally = function () { };
                self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_EMISORAS_POR_GRUPO_EMPRESA, { idGrupoEmpresa: self.$scope.aGrupoEmpresa.IdGrupoEmpresa }).then(onSuccess, onError).finally(onFinally);
            } else {
                self.$scope.emisorasPorGrupo = new Array<abaxXBRL.shared.modelos.IEmisora>();

                var emisora: shared.modelos.IEmisora = {
                    IdEmpresa: null,
                    NombreCorto: null
                };

                self.$scope.emisorasPorGrupo.push(emisora);
            }

        }

        /** Carga Combo de Taxonomias **/
        private cargarTaxonomias(): void {
            var self: AbaxXBRLResumenInformacion4DController = this;

            var onSuccess = function (result: any) { self.onCargarTaxonomiasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.cargarGrupoEmpresas(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_TAXONOMIAS, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Grupo de Empresas **/
        private cargarGrupoEmpresas(): void {
            var self: AbaxXBRLResumenInformacion4DController = this;

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
            var scope: AbaxXBRLResumenInformacion4DScope = this.$scope;
            scope.emisoras = resultado;
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de emisoras por grupo.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarEmisorasPorGrupoSuccess(resultado: Array<shared.modelos.IEmisora>): void {
            var scope: AbaxXBRLResumenInformacion4DScope = this.$scope;
            scope.emisorasPorGrupo = resultado;
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de taxonomias.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarTaxonomiasSuccess(resultado: Array<shared.modelos.ITaxonomiaXbrl>): void {
            var scope: AbaxXBRLResumenInformacion4DScope = this.$scope;
            var listado: Array<shared.modelos.ITaxonomiaXbrl> = resultado;
            scope.taxonomias = listado;
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de grupos de empresas.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarGrupoEmpresasSuccess(resultado: any): void {
            var scope: AbaxXBRLResumenInformacion4DScope = this.$scope;
            scope.grupoEmpresas = resultado.InformacionExtra;
        }

        /**
        * Configura las opciones del data table para manejar del lado del servidor el procesamiento de los datos a mostrar.
        **/
        private configurarOpcionesDataTable() {
            var self = this;
            var scope = self.$scope;
            var onBeforeSend = function (xhr: any, settings: any) {
                var params: { [id: string]: any } = {};
                var taxonomia = scope.aTaxonomia;
                var emisora = scope.aEmisora;
                var grupoEmpresa = scope.aGrupoEmpresa;

                var fecha = scope.aFecha;
                var registro = scope.aRegistro;

                if (taxonomia && taxonomia.IdTaxonomiaXbrl) {
                    params["espacioNombres"] = taxonomia.EspacioNombresPrincipal;
                }

                if (emisora && emisora.IdEmpresa) {
                    params["nombreCorto"] = emisora.NombreCorto;
                }

                if (grupoEmpresa && grupoEmpresa.IdGrupoEmpresa) {
                    params["grupoEmpresa"] = scope.aGrupoEmpresa.IdGrupoEmpresa;
                }

                if (fecha && fecha != null) {
                    params["fecha"] = moment(fecha).format("YYYY-MM-DD ");
                }

                if (registro && registro.trim().length > 0) {
                    params["registro"] = registro.trim();
                }
                settings.data += '&' + $.param(params);
            };

            var opcionesDt = scope.opcionesDataTableLocal;
            var onOpcionesSucess = function (opcioensAjax) {
                opcionesDt.withOption("paging", true);
                opcionesDt.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'>r>t<'row'<'col-sm-6'i>><'#paginacionTablaResumenInformacion4D'p>");
                opcionesDt.withPaginationType('simple_numbers');
                opcionesDt.withOption("order", [[0, 'desc']]);
                opcionesDt.withOption("scrollX", true);

                //opcionesDt.withOption("aoColumns", [
                //    { "mData": "taxonomia", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "fecha", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "claveCotizacion", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "numeroFideicomiso", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "unidad", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "totalActivo", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "totalPasivo", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "totalCapitalContablePasivo", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "ingreso", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "nombreProveedorServiciosAuditoria", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "nombreSocioOpinion", sWidth: "45%", bSearchable: false, bSortable: false },
                //    { "mData": "tipoOpinionEstadosFinancieros", sWidth: "45%", bSearchable: false, bSortable: false }
                //]);

                opcionesDt.withOption("columnDefs", [
                    {
                        "targets": [0,1,2,3,4,5,6,7,8],
                        "className": "text-center"
                    },
                    {
                        "targets": [9,10,11],
                        "className": "text-justify"
                    },
                    {
                        "targets": [0, 1],
                        "width": "200px"
                    },
                    {
                        "targets": [2, 3, 4],
                        "width": "100px"
                    }
                ]);

                opcionesDt.withOption("columns", [
                    { "data": "Taxonomia"},
                    { "data": "FechaReporte" },
                    { "data": "ClaveCotizacion" },
                    { "data": "NumeroFideicomiso" },
                    { "data": "Unidad" },
                    { "data": "TotalActivo", render: $.fn.dataTable.render.number(',', '.', 2, '$') },
                    { "data": "TotalPasivo", render: $.fn.dataTable.render.number(',', '.', 2, '$') },
                    { "data": "TotalCapitalContablePasivo", render: $.fn.dataTable.render.number(',', '.', 2, '$') },
                    { "data": "Ingreso", render: $.fn.dataTable.render.number(',', '.', 2, '$') },
                    { "data": "NombreProveedorServiciosAuditoria" },
                    { "data": "NombreSocioOpinion" },
                    { "data": "TipoOpinionEstadosFinancieros" }
                ]);

                opcionesDt.withOption('rowCallback', function () {

                });

                opcioensAjax.url = AbaxXBRLConstantes.OBTENER_RESUMEN_INFORMACION_4D;
                opcioensAjax.beforeSend = onBeforeSend;

                opcionesDt.withOption('serverSide', true);
                opcionesDt.withOption('ajax', opcioensAjax);
                shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                    scope.dataTableInstance = instance;
                    scope.existeElementos = true;
                });
            }

            self.abaxXBRLRequestService.generarOpcionesAjax().then(onOpcionesSucess);
        }

        private refreshData(): void {
            var scope = this.$scope;
            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });
            if (scope.dataTableInstance) {
                scope.dataTableInstance.DataTable.ajax.reload();
                console.log();
            }
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
            var taxonomia = scope.aTaxonomia;
            var emisora = scope.aEmisora;
            var grupoEmpresa = scope.aGrupoEmpresa;
            var fecha = scope.aFecha;
            var registro = scope.aRegistro;
            if (taxonomia && taxonomia.IdTaxonomiaXbrl) {
                params["idTaxonomiaXbrl"] = taxonomia.IdTaxonomiaXbrl;
            }
            if (grupoEmpresa && grupoEmpresa.IdGrupoEmpresa) {
                params["idGrupoEmpresa"] = grupoEmpresa.IdGrupoEmpresa;
            }
            if (emisora && emisora.IdEmpresa) {
                params["idEmpresa"] = emisora.IdEmpresa;
            }
            if (fecha && fecha != null) {
                params["fecha"] = moment(fecha).format("DD/MM/YYYY").trim();
            }
            if (registro && registro.trim().length > 0) {
                params["registro"] = registro.trim();
            }

            return params;
        }

        /**
        * Direcciona al usuario, a la pantalla para depurara la bitacora.
        **/
        private irADepurarBitacora() {
            var self = this;
            self.$scope.$state.go('inicio.bitacoraDepurar');
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

            var taxonomia = scope.aTaxonomia;
            var emisora = scope.aEmisora;
            var grupoEmpresa = scope.aGrupoEmpresa;
            var fecha = scope.aFecha;

            if (taxonomia && taxonomia.IdTaxonomiaXbrl) {
                params["espacioNombres"] = taxonomia.EspacioNombresPrincipal;
            }

            if (grupoEmpresa && grupoEmpresa.IdGrupoEmpresa) {
                params["grupoEmpresa"] = grupoEmpresa.IdGrupoEmpresa;
            }

            if (emisora && emisora.IdEmpresa) {
                params["nombreCorto"] = emisora.NombreCorto;
            }

            if (fecha && fecha != null) {
                params["fecha"] = moment(fecha).format("YYYY-MM-DD ");
            }

            self.$scope.exportando = true;
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.EXPORTA_RESUMEN_INFORMACION_4D_A_EXCEL, params, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'resumen-informacion-4D.xls');
        }

        /**
        * Inicializamos los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;

            scope.opcionesDataTableLocal = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.cargando = true;
            scope.existeElementos = false;
            scope.exportando = false;
            scope.datePikerOpen = false;
            //Se agrega un watch porque el date piker no aplica el ng-change.
            //scope.$watch('aFecha', function () {self.refreshData();});

            scope.diccionarioTaxonomias = {};
            scope.diccionarioEmisoras = {};
            scope.diccionarioGrupoEmpresas = {};
            scope.muestraDatePiker = function ($event): void { self.muestraDatePiker($event) };
            scope.refreshData = function (): void { self.refreshData(); };
            scope.exportaAExcel = function (): void { self.exportaAExcel(); };
            scope.irADepurarBitacora = function (): void { self.irADepurarBitacora(); };

            scope.obtenerEmisorasPorGrupo = function (): void { self.obtenerEmisorasPorGrupo(); };

            self.cargarTaxonomias();
            //self.$scope.listaCargada = {};
            //self.$scope.AtributoListaSeleccionMultiple = model.TipoDatoParametroConfiguracion.ListaSeleccionMultiple;
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para las peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLResumenInformacion4DScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$scope.$state = $state;
            this.init();
        }
    }

    AbaxXBRLResumenInformacion4DController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
}