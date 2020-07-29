module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLListaFideicomisosScope extends IAbaxXBRLInicioScope {

        /**
        * Exporta la lista de elementos.
        **/
        exportaAExcel(): void;
        /**
        * Muestra la vista para el registro de un nuevo elemento.
        **/
        irRegistrar();
        /**
        * Listado de elementos a mostrar.
        **/
        listadoElementos: Array<shared.modelos.IFideicomiso>;
        /**
        * Bandera que indica que aun no se han obtenido los elementos.
        **/
        cargando: boolean;
        /**
        * Bandera que indica si existen elementos disponibles que mostrar.
        **/
        existenElementos: boolean;
        /**
        * Muestra la vista para editar los datos del elemento indicado.
        * @param item Elemento que se pretende editar.
        **/
        irEditar(item: shared.modelos.IFideicomiso): void;
        /**
        * Solicita la confirmación para la eliminación del elemento y
        * si es positiva se elimina.
        * @param item Elemento que se pretende eliminar.
        **/
        eliminar(item: shared.modelos.IFideicomiso): void;
        /**
        * Objeto con las opcines de configuración del datatable local.
        **/
        opcionesDataTableFideicomisos: any;
        /**
        * Referencia a la instancia del datatable.
        **/
        dataTableInstance: any;
        /**
        * Valor del campo para el filtrado de datos.
        **/
        cadenaBusqueda: string;
        
        /**
        * Bandera que indica que se esta exportando el listado a excel.
        **/
        exportando: boolean;
    }
    /**
    * Controlador de la vista.
    **/
    export class AbaxXBRLListaFideicomisosController {

        /** 
        * El scope del controlador 
        **/
        private $scope: AbaxXBRLListaFideicomisosScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /**
        * Llena el listado de elementos.
        **/
        private obtenElementosLista(): void {
            var self = this;
            var scope = self.$scope;
            var onSucess = function (result: any) { self.onObtenelementosSucess(result.data); }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            scope.cargando = true;
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTEN_LISTA_FIDEICOMISOS_PATH, {}).then(onSucess, onError);
        }
        /** 
        * Procesa la respuesta asincrona de la solicitud de elementos.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenelementosSucess(resultado: shared.modelos.IResultadoOperacion) {
            var listado: Array<any> = resultado.InformacionExtra;
            var scope = this.$scope;
            if (listado && listado.length > 0) {

                scope.listadoElementos = listado;
                scope.existenElementos = true;
                var paging = listado.length > 10;
                scope.opcionesDataTableFideicomisos.withOption("paging", paging);
                if (!paging) {
                    scope.opcionesDataTableFideicomisos.withOption("sDom", "t");
                } else {
                    scope.opcionesDataTableFideicomisos.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
                }
            } else {
                scope.existenElementos = false;
            }
            scope.cargando = false;
            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });
        }
        /**
        * Elimina el eleme indicado.
        * @param item Elemento que se pretende eliminar.
        **/
        private eliminar(item: shared.modelos.IFideicomiso): void {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;
            var onSuccess = function (response: any) {
                var resultado: shared.modelos.IResultadoOperacion = response.data;
                if (resultado) {
                    
                    var msg = '';

                    if (resultado.Resultado == true) {
                        msg = util.getValorEtiqueta('MENSAJE_EXITO_ELIMINAR_FIDEICOMISO');
                        util.ExitoBootstrap(msg);
                    } else {
                        msg = util.getValorEtiqueta('MENSAJE_ERROR_ELIMINAR_FIDEICOMISO');
                        util.ErrorBootstrap(msg);
                    }

                    self.obtenElementosLista();
                }
            };
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            var onConfirm = function (confirmado: boolean) {
                if (confirmado) {
                    self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ELIMINAR_FIDEICOMISO_PATH, { "IdFideicomiso": item.IdFideicomiso }).then(onSuccess, onError);
                }
            }

            var mensajeConfirmaEliminar = util.getValorEtiqueta('MENSAJE_CONFIRM_ELIMINAR_FIDEICOMISO', { "CLAVE": item.ClaveFideicomiso });
            util.confirmaEliminar(mensajeConfirmaEliminar).then(onConfirm);
        }

        /**
        * Redirecciona a la vista de registro.
        **/
        private irRegistrar() {
            var self = this;
            var scope = self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD, false);
            self.$state.go("inicio.fideicomisoEditar");
        }

        /**
        * Muestra la vista para editar los datos del elemento indicado.
        * @param rol Rol que se pretende editar.
        **/
        private irEditar(item: shared.modelos.IFideicomiso): void {
            var self = this;
            var scope = self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD, true);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL, item);
            self.$state.go("inicio.fideicomisoEditar");
        }
        
        /**
        * Solicita la exportación de un archivo a Excel.
        **/
        private exportaAExcel() {
            var self = this;
            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.EXPORTAR_FIDEICOMISO_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {

            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'Fideicomisos.xls');
        }

        /**Inicializa los elementos del constructor.**/
        private init(): void {
            var self = this;
            var scope = self.$scope;
            scope.cargando = true;
            scope.existenElementos = false;
            var dtOptions = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.$watch('cadenaBusqueda', function () {
                if (scope.dataTableInstance && scope.dataTableInstance != null) {
                    scope.dataTableInstance.DataTable.search(scope.cadenaBusqueda).draw();
                }
            });
            scope.opcionesDataTableFideicomisos = dtOptions;

            scope.irEditar = function (item: shared.modelos.IFideicomiso) { self.irEditar(item); };
            scope.irRegistrar = function () { self.irRegistrar(); };
            scope.eliminar = function (item: shared.modelos.IFideicomiso) { self.eliminar(item); };
            scope.exportaAExcel = function () { self.exportaAExcel(); }
            self.obtenElementosLista();
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual del login.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
         * @param $modal Servicio para presentar diálogos modales al usuario.
        **/
        constructor($scope: AbaxXBRLListaFideicomisosScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }

    AbaxXBRLListaFideicomisosController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];

} 