module abaxXBRL.componentes.controllers {

    /**
    * Declaracion del Scope para la Bitacora
    *
    * @author Jorge Luis Trujillo Huerta
    * @version 1.0
    */
    export interface AbaxXBRLEnviosTaxonomiaScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de Emisoras a mostrar
        **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;

        /**
        * Listado de taxonomias a mostrar
        **/
        taxonomias: Array<abaxXBRL.shared.modelos.ITaxonomiaXbrl>;

        /**
        * Listado de Modulos a mostrar
        **/
        grupoEmpresas: Array<abaxXBRL.shared.modelos.IGrupoEmpresa>;

        /**
        * Listado de Acciones a mostrar
        **/
        tipoEmpresas: Array<abaxXBRL.shared.modelos.ITipoEmpresa>;

        /**
        * Listado de Fideicomisos a mostrar
        **/
        numeroFideicomisos: Array<string>;

        /**
        * Criterio de busqueda.
        **/ 
        criterioBusqueda: abaxXBRL.shared.modelos.IRegistroAuditoria;


        //Fecha filtro
        aFecha: string;

        //Fecha Rango Inicio filtro
        aFechaCreacionInicial: string;

        //Fecha Rango Final filtro
        aFechaCreacionFinal: string;

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

        /* Tipo Empresa Seleccionada*/
        aTipoEmpresa: abaxXBRL.shared.modelos.ITipoEmpresa;

        /* Número de Fideicomiso Seleccionado*/
        aNumeroFideicomiso: string;

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
        /** Asigna un periodo a la consulta principal*/
        asignarPeriodo(): void;
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
        * Diccionario con los Tipos de Empresas.
        **/
        diccionarioTipoEmpresas: { [id: number]: shared.modelos.ITipoEmpresa }
        /**
        * Bandera para mostrar u ocultar el datepiker A.
        **/
        datePikerOpenRangoInicial: boolean;
        /**
        * Bandera para mostrar u ocultar el datepiker B.
        **/
        datePikerOpenRangoFinal: boolean;
        /**
        * Muestra el datepiker A.
        **/
        muestraDatePikerRangoInicial($event);

        /**
        * Muestra el datepiker B.
        **/
        muestraDatePikerRangoFinal($event);
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

        /** Valor del enum para el tipo de atributo campo lista selección múltiple */
        AtributoListaSeleccionMultiple: model.TipoDatoParametroConfiguracion;

        /** Valor seleccionado del parámetro de la lista de seleccion múltiple */
        valorSeleccionOpcion: { opcion: model.SelectItem, opcionesSeleccionadas: Array<model.SelectItem> };

        /*** Indica si la lista está preparada para mostrarse */
        listaCargada: { [id: string]: string; };
    }

    /**
    * Implementacion del Controller de la Consulta de Envios Taxonomia
    *
    * @author Jose Carlos Castellanos Ruiz
    * @version 1.0
    */
    export class AbaxXBRLEnviosTaxonomiaController {
        /** El Scope del Controlador **/
        private $scope: AbaxXBRLEnviosTaxonomiaScope;

        /** Servicio para el manejo de las peticiones al Servidor **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Carga Combo de Emisoras **/
        private cargarEmisoras(): void {
            var self: AbaxXBRLEnviosTaxonomiaController = this;

            var onSuccess = function (result: any) { self.onCargarEmisorasSuccess(result.data.InformacionExtra); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.cargarTaxonomias(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTA_TODAS_EMPRESAS_COMBO_PATH, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Taxonomias **/
        private cargarTaxonomias(): void {
            var self: AbaxXBRLEnviosTaxonomiaController = this;

            var onSuccess = function (result: any) { self.onCargarTaxonomiasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.cargarGrupoEmpresas();};

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_TAXONOMIAS, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Grupo de Empresas **/
        private cargarGrupoEmpresas(): void {
            var self: AbaxXBRLEnviosTaxonomiaController = this;

            var onSuccess = function (result: any) { self.onCargarGrupoEmpresasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.cargarNumeroFideicomisos(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.GRUPO_ENTIDADES_REPOSITORIO_XBRL_PATH, {}).then(onSuccess, onError).finally(onFinally);
        }
        /**
         * Carga Combo de Número de Fideicomisos
         */
        private cargarNumeroFideicomisos(): void {
            var self: AbaxXBRLEnviosTaxonomiaController = this;

            var onSuccess = function (result: any) { self.onCargarFideicomisosSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.cargarTiposEmpresas();; };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_NUMEROS_FIDEICOMISOS, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Tipo de Empresas **/
        private cargarTiposEmpresas(): void {
            var self: AbaxXBRLEnviosTaxonomiaController = this;

            var onSuccess = function (result: any) { self.onCargarTipoEmpresasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.configurarOpcionesDataTable(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTA_TIPOS_EMPRESA_PATH, {}).then(onSuccess, onError).finally(onFinally);
        }

   
        /** 
        * Procesa la respuesta asincrona de la solicitud de emisoras.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarEmisorasSuccess(resultado: Array<shared.modelos.IEmisora>): void {
            var scope: AbaxXBRLEnviosTaxonomiaScope = this.$scope;
            scope.emisoras = resultado;
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de número de fideicomisos.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarFideicomisosSuccess(resultado: any): void {
            var scope: AbaxXBRLEnviosTaxonomiaScope = this.$scope;
            scope.numeroFideicomisos = resultado.InformacionExtra;
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de taxonomias.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarTaxonomiasSuccess(resultado: Array<shared.modelos.ITaxonomiaXbrl>): void {
            var scope: AbaxXBRLEnviosTaxonomiaScope = this.$scope;
            var listado: Array<shared.modelos.ITaxonomiaXbrl> = resultado;

            if (listado && listado.length > 0) {
                scope.taxonomias = listado;
                for (var index = 0; index < listado.length; index++) {
                    var elemento = listado[index];
                    scope.diccionarioTaxonomias[elemento.IdTaxonomiaXbrl] = elemento;
                }
            }
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de grupos de empresas.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarGrupoEmpresasSuccess(resultado: any): void {
            var scope: AbaxXBRLEnviosTaxonomiaScope = this.$scope;
            scope.grupoEmpresas = resultado.InformacionExtra;
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de tipos de empresas.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarTipoEmpresasSuccess(resultado: Array<shared.modelos.ITipoEmpresa>): void {
            var scope: AbaxXBRLEnviosTaxonomiaScope = this.$scope;
            var listado: Array<shared.modelos.ITipoEmpresa> = resultado;

            if (listado && listado.length > 0) {
                scope.tipoEmpresas = listado;
                for (var index = 0; index < listado.length; index++) {
                    var elemento = listado[index];
                    scope.diccionarioTipoEmpresas[elemento.IdTipoEmpresa] = elemento;
                }
            }
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
                var grupoEmpresas = scope.aGrupoEmpresa;
                var fideicomisos = scope.aNumeroFideicomiso;
                var tipoEmpresas = scope.aTipoEmpresa;
                var fecha = scope.aFecha;
                var fechaCreacionInicial = scope.aFechaCreacionInicial;
                var fechaCreacionFinal = scope.aFechaCreacionFinal;
                var registro = scope.aRegistro;

                if (taxonomia && taxonomia.Nombre) {
                    params["taxonomia"] = taxonomia.Nombre;
                }
                if (grupoEmpresas && grupoEmpresas.IdGrupoEmpresa) {
                    params["grupoEmpresas"] = scope.aGrupoEmpresa.IdGrupoEmpresa;
                }
                if (tipoEmpresas && tipoEmpresas.IdTipoEmpresa) {
                    params["tipoEmpresas"] = scope.aTipoEmpresa.IdTipoEmpresa;
                }
                if (emisora && emisora.NombreCorto) {
                    params["ClaveCotizacion"] = emisora.NombreCorto;
                }
                if (fideicomisos && fideicomisos != null) {
                    params["NumFideicomiso"] = fideicomisos;
                }
                if (fecha && fecha != null) {
                    params["fecha"] = moment(fecha).format("YYYY-MM-DD");
                }
                if (fechaCreacionInicial && fechaCreacionInicial != null) {
                    params["fechaCreacionInicial"] = moment(fechaCreacionInicial).format("YYYY-MM-DD HH:mm:ss");
                }
                if (fechaCreacionFinal && fechaCreacionFinal != null) {
                    params["fechaCreacionFinal"] = moment(fechaCreacionFinal).format("YYYY-MM-DD HH:mm:ss");
                }
                if (registro && registro.trim().length > 0) {
                    params["registro"] = registro.trim();
                }
                settings.data += '&' + $.param(params);
            };
            var opcionesDt = scope.opcionesDataTableLocal;
            var onOpcionesSucess = function (opcioensAjax) {
                opcionesDt.withOption("paging", true);
                opcionesDt.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
                opcionesDt.withPaginationType('simple_numbers');
                opcionesDt.withOption("order", [[0, 'desc']]);
                opcionesDt.withOption("columns", [
                    { "data": "ClaveCotizacion" },
                    { "data": "RazonSocial" },
                    { "data": "NumFideicomiso" },
                    { "data": "FechaReporteFormateada" },
                    { "data": "Taxonomia" },
                    { "data": "FechaEnvio" },
                    
                ]);
                opcionesDt.withOption('rowCallback', function () {

                });

                opcioensAjax.url = AbaxXBRLConstantes.OBTENER_ENVIOS_TAXONOMIA;
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

        private refreshData():void {
            var scope = this.$scope;
            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });
            if (scope.dataTableInstance) {
                scope.dataTableInstance.DataTable.ajax.reload();
            }
        }

     

        private muestraDatePikerRangoInicial($event) {
            $event.preventDefault();
            $event.stopPropagation();

            this.$scope.datePikerOpenRangoInicial = true;
        }
        private muestraDatePikerRangoFinal($event) {
            $event.preventDefault();
            $event.stopPropagation();

            this.$scope.datePikerOpenRangoFinal = true;
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
            var grupoEmpresas = scope.aGrupoEmpresa;
            var tipoEmpresas = scope.aTipoEmpresa;
            var fideicomisos = scope.aNumeroFideicomiso;
            var fecha = scope.aFecha;
            var fechaCreacionInicial = scope.aFechaCreacionInicial;
            var fechaCreacionFinal = scope.aFechaCreacionFinal;
            var registro = scope.aRegistro;
            if (taxonomia && taxonomia != null) {
                params["taxonomia"] = taxonomia;
            }
            if (grupoEmpresas && grupoEmpresas != null) {
                params["grupoEmpresas"] = grupoEmpresas;
            }
            if (tipoEmpresas && tipoEmpresas != null) {
                params["tipoEmpresas"] = tipoEmpresas;
            }
            if (emisora && emisora != null) {
                params["emisora"] = emisora;
            }
            if (fideicomisos && fideicomisos != null) {
                params["fideicomisos"] = fideicomisos;
            }
            if (fecha && fecha != null) {
                params["fecha"] = moment(fecha).format("DD/MM/YYYY");
            }
            if (fechaCreacionInicial && fechaCreacionInicial != null) {
                params["fechaCreacionInicial"] = moment(fechaCreacionInicial).format("DD/MM/YYYY HH:mm:ss");
            }
            if (fechaCreacionFinal && fechaCreacionFinal != null) {
                params["fechaCreacionFinal"] = moment(fechaCreacionFinal).format("DD/MM/YYYY HH:mm:ss");
            }
            if (registro && registro.trim().length > 0) {
                params["registro"] = registro.trim();
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
            var grupoEmpresas = scope.aGrupoEmpresa;
            var tipoEmpresas = scope.aTipoEmpresa;
            var fideicomisos = scope.aNumeroFideicomiso;
            var fecha = scope.aFecha;;
            var fechaCreacionInicial = scope.aFechaCreacionInicial;
            var fechaCreacionFinal = scope.aFechaCreacionFinal;
            var registro = scope.aRegistro;

            if (taxonomia && taxonomia.Nombre) {
                params["taxonomia"] = taxonomia.Nombre;
            }
            if (grupoEmpresas && grupoEmpresas.IdGrupoEmpresa) {
                params["grupoEmpresas"] = scope.aGrupoEmpresa.IdGrupoEmpresa;
            }
            if (tipoEmpresas && tipoEmpresas.IdTipoEmpresa) {
                params["tipoEmpresas"] = scope.aTipoEmpresa.IdTipoEmpresa;
            }
            if (emisora && emisora.NombreCorto) {
                params["ClaveCotizacion"] = emisora.NombreCorto;
            }
            if (fideicomisos && fideicomisos != null) {
                params["NumFideicomiso"] = fideicomisos;
            }
            if (fecha && fecha != null) {
                params["fecha"] = moment(fecha).format("YYYY-MM-DD");
            }
            if (fechaCreacionInicial && fechaCreacionInicial != null) {
                params["fechaCreacionInicial"] = moment(fechaCreacionInicial).format("YYYY-MM-DD");
            }
            if (fechaCreacionFinal && fechaCreacionFinal != null) {
                params["fechaCreacionFinal"] = moment(fechaCreacionFinal).format("YYYY-MM-DD");
            }
            if (registro && registro.trim().length > 0) {
                params["registro"] = registro.trim();
            }
            self.$scope.exportando = true;
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.EXPORTA_ENVIOS_TAXONOMIAS_EXCEL_PATH, params, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {

            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'ENVIOS-TAXONOMIAS.xls');
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
            scope.datePikerOpenRangoInicial = false;
            scope.datePikerOpenRangoFinal = false;

            scope.diccionarioTaxonomias = {};
            scope.diccionarioEmisoras = {};
            scope.diccionarioGrupoEmpresas = {};
            scope.diccionarioTipoEmpresas = {};
            scope.muestraDatePikerRangoInicial = function ($event): void { self.muestraDatePikerRangoInicial($event) };
            scope.muestraDatePikerRangoFinal = function ($event): void { self.muestraDatePikerRangoFinal($event) };
            scope.refreshData = function (): void { self.refreshData(); };
            scope.exportaAExcel = function (): void { self.exportaAExcel(); };
            self.cargarEmisoras();

            //self.$scope.listaCargada = {};
            //self.$scope.AtributoListaSeleccionMultiple = model.TipoDatoParametroConfiguracion.ListaSeleccionMultiple;



            
        }


        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para las peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLEnviosTaxonomiaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService ) {
            this.$scope = $scope; 
            this.abaxXBRLRequestService = abaxXBRLRequestService; 
            this.$scope.$state = $state;  
            this.init();
        }
    }

    AbaxXBRLEnviosTaxonomiaController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
}