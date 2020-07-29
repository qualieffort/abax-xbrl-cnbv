module abaxXBRL.componentes.controllers {

    /**
    * Declaracion del Scope para la Bitacora
    *
    * @author Christian E. Badillo
    * @version 1.0
    */
    export interface AbaxXBRLBitacoraScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de Emisoras a mostrar
        **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;

        /**
        * Listado de Usuarios a mostrar
        **/
        usuarios: Array<abaxXBRL.shared.modelos.IUsuario>;

        /**
        * Listado de Modulos a mostrar
        **/
        modulos: Array<abaxXBRL.shared.modelos.IModulo>;

        /**
        * Listado de Acciones a mostrar
        **/
        acciones: Array<abaxXBRL.shared.modelos.IAccionAuditable>;
        
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

        /* Modulo Seleccionada*/
        aModulo: abaxXBRL.shared.modelos.IModulo;

        /* Accion Seleccionada*/
        aAccion: abaxXBRL.shared.modelos.IAccionAuditable;

        /* Usuario Seleccionada*/
        aUsuario: abaxXBRL.shared.modelos.IUsuario;
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
        * Diccionario con los modulos.
        **/
        diccionarioModulos: { [id: number]: shared.modelos.IModulo }
        /**
        * Diccionario con las acciones.
        **/
        diccionarioAcciones: { [id: number]: shared.modelos.IAccionAuditable }
        /**
        * Diccionario con los usuarios existentes.
        **/
        diccionarioUsuarios: { [id: number]: shared.modelos.IUsuario }
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
    }

    /**
    * Implementacion del Controller de la Bitacora
    *
    * @author Christian E. Badillo
    * @version 1.0
    */
    export class AbaxXBRLBitacoraController {
        /** El Scope del Controlador **/
        private $scope: AbaxXBRLBitacoraScope;

        /** Servicio para el manejo de las peticiones al Servidor **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Carga Combo de Emisoras **/
        private cargarEmisoras(): void {
            var self: AbaxXBRLBitacoraController = this;

            var onSuccess = function(result: any) { self.onCargarEmisorasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.cargarModulos(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_EMISORAS, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Modulos **/
        private cargarModulos(): void {
            var self: AbaxXBRLBitacoraController = this;

            var onSuccess = function (result: any) { self.onCargarModulosSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () {self.cargarAcciones();};

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_MODULOS, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Acciones **/
        private cargarAcciones(): void {
            var self: AbaxXBRLBitacoraController = this;

            var onSuccess = function (result: any) { self.onCargarAccionesSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () {self.cargarUsuarios();};

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_ACCIONES, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** Carga Combo de Acciones **/
        private cargarUsuarios(): void {
            var self: AbaxXBRLBitacoraController = this;

            var onSuccess = function (result: any) { self.onCargarUsuariosSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.configurarOpcionesDataTable(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_USUARIOS, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de emisoras.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarEmisorasSuccess(resultado: Array<shared.modelos.IEmisora>): void {
            var scope: AbaxXBRLBitacoraScope = this.$scope;
            var listado: Array<shared.modelos.IEmisora> = resultado;

            if (listado && listado.length > 0) {
                scope.emisoras = listado;
                for (var index = 0; index < listado.length; index++){
                    var elemento = listado[index];
                    scope.diccionarioEmisoras[elemento.IdEmpresa] = elemento;
                }
            }
        }


        /** 
        * Procesa la respuesta asincrona de la solicitud de modulos.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarModulosSuccess(resultado: Array<shared.modelos.IModulo>): void {
            var scope: AbaxXBRLBitacoraScope = this.$scope;
            var listado: Array<shared.modelos.IModulo> = resultado;

            if (listado && listado.length > 0) {
                scope.modulos = listado;
                for (var index = 0; index < listado.length; index++) {
                    var elemento = listado[index];
                    scope.diccionarioModulos[elemento.IdModulo] = elemento;
                }
            }
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de acciones.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarAccionesSuccess(resultado: Array<shared.modelos.IAccionAuditable>): void {
            var scope: AbaxXBRLBitacoraScope = this.$scope;
            var listado: Array<shared.modelos.IAccionAuditable> = resultado;

            if (listado && listado.length > 0) {
                scope.acciones = listado;
                for (var index = 0; index < listado.length; index++) {
                    var elemento = listado[index];
                    scope.diccionarioAcciones[elemento.IdAccionAuditable] = elemento;
                }
            }
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de acciones.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarUsuariosSuccess(resultado: Array<shared.modelos.IUsuario>): void {
            var scope: AbaxXBRLBitacoraScope = this.$scope;
            var listado: Array<shared.modelos.IUsuario> = resultado;

            if (listado && listado.length > 0) {
                scope.usuarios = listado;
                var idUsuario: number = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO);
                shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO)

                for (var index = 0; index < listado.length; index++) {
                    var elemento = listado[index];
                    scope.diccionarioUsuarios[elemento.IdUsuario] = elemento;
                    if (idUsuario == elemento.IdUsuario) {
                        scope.aUsuario = elemento;
                    }
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
                var modulo = scope.aModulo;
                var emisora = scope.aEmisora;
                var accion = scope.aAccion;
                var usuario = scope.aUsuario;
                var fecha = scope.aFecha;
                var registro = scope.aRegistro;
                if (modulo && modulo.IdModulo) {
                    params["idModulo"] = modulo.IdModulo;
                }
                if (usuario && usuario.IdUsuario) {
                    params["idUsuario"] = usuario.IdUsuario;
                }
                if (emisora && emisora.IdEmpresa) {
                    params["idEmpresa"] = emisora.IdEmpresa;
                }
                if (accion && accion.IdAccionAuditable) {
                    params["idAccion"] = accion.IdAccionAuditable;
                }
                if (fecha && fecha != null) {
                    params["fecha"] = moment(fecha).format("DD/MM/YYYY");
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
                opcionesDt.withOption('rowCallback', function () {

                });

                opcioensAjax.url = AbaxXBRLConstantes.OBTEN_REGISTROS_AUDITORIA_PATH;
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
            var modulo = scope.aModulo;
            var emisora = scope.aEmisora;
            var accion = scope.aAccion;
            var usuario = scope.aUsuario;
            var fecha = scope.aFecha;
            var registro = scope.aRegistro;
            if (modulo && modulo.IdModulo) {
                params["idModulo"] = modulo.IdModulo;
            }
            if (usuario && usuario.IdUsuario) {
                params["idUsuario"] = usuario.IdUsuario;
            }
            if (emisora && emisora.IdEmpresa) {
                params["idEmpresa"] = emisora.IdEmpresa;
            }
            if (accion && accion.IdAccionAuditable) {
                params["idAccion"] = accion.IdAccionAuditable;
            }
            if (fecha && fecha != null) {
                params["fecha"] = moment(fecha).format("DD/MM/YYYY");
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

            self.$scope.exportando = true;
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.EXPORTA_BITACORA_EXCEL_PATH, params, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {

            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'bitacora.xls');
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

            scope.diccionarioAcciones = {};
            scope.diccionarioEmisoras = {};
            scope.diccionarioModulos = {};
            scope.diccionarioUsuarios = {};
            scope.muestraDatePiker = function ($event):void { self.muestraDatePiker($event) };
            scope.refreshData = function (): void { self.refreshData(); };
            scope.exportaAExcel = function (): void { self.exportaAExcel(); };
            scope.irADepurarBitacora = function (): void { self.irADepurarBitacora(); };
            self.cargarEmisoras();
            
        }
        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para las peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLBitacoraScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService ) {
            this.$scope = $scope; 
            this.abaxXBRLRequestService = abaxXBRLRequestService; 
            this.$scope.$state = $state;  
            this.init();
        }
    }

    AbaxXBRLBitacoraController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];

}