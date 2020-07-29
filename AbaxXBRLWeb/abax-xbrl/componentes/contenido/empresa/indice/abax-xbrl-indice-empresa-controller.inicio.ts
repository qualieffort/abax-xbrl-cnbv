 ///<reference path="../../../../../Scripts/typings/FileSaver/FileSaver.d.ts" /> 

module abaxXBRL.componentes.controllers {
    /**
 * Definición de la estructura del scope para el controlador  que sirve para listar las empresas
 *
 * @author Alan Alberto Caballero Ibarra
 * @version 1.0
 */
    export interface AbaxXBRLIndiceEmpresaScope extends IAbaxXBRLInicioScope {
        mostrarMensaje: boolean;
        tipoMensaje: number;
        mensaje: string;

        /**
        * Listado de empresas a mostrar.
        **/
        empresas: Array<abaxXBRL.shared.modelos.IEmpresa>;
        /**
        * Solicita la confirmación para la eliminación de la empresa (¿Esta Seguro de Borrar la empresa?) y
        * si es positiva se elimina la empresa.
        * @param id de la empresa que se pretende eliminar.
        **/
        eliminaEmpresa(id: string): void;
        /**
        * Exporta la lista de empresas a excel.
        **/
        descargaArchivo(): void;/**
        /**
        * Bandera que indica que aun no se han obtenido las empresas.
        **/
        cargandoEmpresas: boolean;
        /**
        * Bandera que indica que no existen empresas.
        **/
        existenEmpresas: boolean;
        /**
        * Objeto con las opcinoes de configuración del datatable local.
        **/
        opcionesDataTableEmpresas: any;
        /**
        * Referencia a la instancia del datatable.
        **/
        dataTableInstance: any;
        /**
        * Valor del campo para el filtrado de datos.
        **/
        empresaBuscada: string;
        /**
         * Bandera que indica que se esta exportando el listado a excel.
         **/
        exportando: boolean;
        /**
         * Funcion para dirigirse a la pantalla para asignar tipos de empresa.
         **/
        asignarTiposEmpresa(empresa: shared.modelos.IEmpresa);
        /**
         * Funcion para dirigirse a la pantalla para asignar fiduciarios.
         **/
        asignarFiduciarios(empresa: shared.modelos.IEmpresa);

        /**
         * Funcion para dirigirse a la pantalla para asignar fiduciarios.
         **/
        asignarFiduciariosRepComun(empresa: shared.modelos.IEmpresa);

        /**
        * Muestra la vista para asignar grupos a la empresa actual.
        * @param empresa Empresa sobre la que se realizará la asignación de grupos.
        **/
        asignarGrupoEmpresa(empresa: shared.modelos.IEmpresa): void;

        cancelar(): void;
        abrirPopup(id: string): void;

        /** Servicio para el cambio de estado de las vistas dentro del sitio. */
        $state: ng.ui.IStateService;

        /** Servicio para presentar diálogos modales al usuario */
        $modal: ng.ui.bootstrap.IModalService;

        /** Servicio para el manejo de las peticiones al servidor. */        
        abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
    }

    /**
 * Implementación de un controlador para la visualización del listado de empresas
 *
 * @author Alan Alberto Caballero Ibarra
 * @version 1.0
 */
    export class AbaxXBRLIndiceEmpresaController {
        /** El scope del controlador */
        private $scope: AbaxXBRLIndiceEmpresaScope;
        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**
        * Nombre del estado que despliega la vista para asingar empresas al grupo actual.
        **/
        public static estadoAsignarEmpresa: string = 'inicio.asignarGruposEmpresaAempresa';
       
        /**
        * Descarga en excel el listado de empresas.
        **/
        private descargaArchivo(): void {
            var self: AbaxXBRLIndiceEmpresaController = this;

            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.DESCARGA_EMPRESAS_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'empresas.xls');
        }

        /**
        * Configura las opciones del data table para manejar del lado del servidor el procesamiento de los datos a mostrar.
        **/
        private configurarOpcionesDataTable() {
            var self = this;
            var scope = self.$scope;

            var onBeforeSend = function (xhr: any, settings: any) {
                var params: { [id: string]: any } = {};
                //settings.data += '&' + $.param(params);
            };

            var opcionesDt = scope.opcionesDataTableEmpresas;
            var onOpcionesSucess = function (opcioensAjax) {
                opcionesDt.withOption("paging", true);
                opcionesDt.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f><'col-sm-6'>r>t<'row'<'col-sm-6'i>><'#paginacionTablaAdministradores'p>");
                opcionesDt.withPaginationType('simple_numbers');
                opcionesDt.withOption("order", [[0, 'desc']]);
                opcionesDt.withOption("scrollX", true);
                opcionesDt.withOption("searching", true);
                opcionesDt.withOption("processing", true);

                opcionesDt.withOption("columns", [
                    { "data": "RFC" },
                    { "data": "NombreCorto" },
                    { "data": "AliasClaveCotizacion" },
                    { "data": "RazonSocial" },
                    { "data": "FiduciarioEmisor" },
                    { "data": "RepresentanteComunDelFideicomiso" },
                    { "data": "Borrado" },
                    { "data": "DomicilioFiscal" },
                    { "data": "FechaConstitucion" },
                    { "data": "Fideicomitente" },
                    { "data": "RepresentanteComun" },
                    { "data": "GrupoEmpresa" },
                    { "data": "IdEmpresa" }

                ]);

                opcionesDt.withOption("columnDefs", [
                    {
                        "targets": [0, 1, 4],
                        "className": "text-center",
                        "width": "150px"
                    },
                    {
                        "targets": [2, 5],
                        "className": "text-center",
                        "width": "170px"
                    },
                    {
                        "targets": [3],
                        "className": "text-center",
                        "width": "300px"
                    },
                    {
                        "targets": 6,
                        "className": "text-center",
                        "width": "150px",
                        "data": null,
                        "render": function (data, val, type, row, meta) {

                            if (type.Fideicomitente) {
                                return "<i class='fa fa-check-circle text-success icono'></i>";
                            } else {
                                return "<i></i>";
                            }
                        }
                    },
                    {
                        "targets": 7,
                        "className": "text-center",
                        "width": "160px",
                        "data": null,
                        "render": function (data, val, type, row, meta) {

                            if (type.RepresentanteComun) {
                                return "<i class='fa fa-check-circle text-success icono'></i>";
                            } else {
                                return "<i></i>";
                            }
                        }
                    },
                    {
                        "targets": 8,
                        "className": "text-center",
                        "data": null,
                        "orderable": false,
                        "render": function (data, val, type, row, meta) {
                            if (shared.service.AbaxXBRLSessionService.tieneFacultad(abaxXBRL.AbaxXBRLFacultadesEnum.AsignarGrupoEmpresas)) {
                                return '<a onclick=\"javascript: abaxXBRL.componentes.controllers.AbaxXBRLIndiceEmpresaController.asignarGrupoEmpresa(\'' + type.NombreCorto + '\',\'' + type.IdEmpresa + '\');\" class=\"btn btn-rounded btn-sm btn-icon btn-default auto\" ><i class=\"i i-flow-tree\"></i>';
                            } else {
                                return "";
                            }
                        }
                    },
                    {
                        "targets": 9,
                        "className": "text-center",
                        "data": null,
                        "orderable": false,
                        "render": function (data, val, type, row, meta) {
                            if (shared.service.AbaxXBRLSessionService.tieneFacultad(abaxXBRL.AbaxXBRLFacultadesEnum.AsignarTipoEmpresa)) {
                                return '<a onclick=\"javascript: abaxXBRL.componentes.controllers.AbaxXBRLIndiceEmpresaController.asignarTiposEmpresa(\'' + type.NombreCorto + '\',\'' + type.IdEmpresa + '\');\" class=\"btn btn-rounded btn-sm btn-icon btn-default auto\" ><i class=\"i i-flow-tree\"></i>';
                            } else {
                                return "";
                            }

                        }
                    },
                    {
                        "targets": 10,
                        "className": "text-center",
                        "data": null,
                        "orderable": false,
                        "render": function (data, val, type, row, meta) {
                            if (type.Fideicomitente && shared.service.AbaxXBRLSessionService.tieneFacultad(abaxXBRL.AbaxXBRLFacultadesEnum.RelacionarFiduciarioFideicomitente)) {
                                return '<a onclick=\"javascript: abaxXBRL.componentes.controllers.AbaxXBRLIndiceEmpresaController.asignarFiduciarios(\'' + type.IdEmpresa + '\',\'' + type.NombreCorto + '\');\" class=\"btn btn-rounded btn-sm btn-icon btn-default auto\" ><i class=\"i i-flow-tree\"></i>';
                            } else {
                                return '<a onclick=\"javascript: abaxXBRL.componentes.controllers.AbaxXBRLIndiceEmpresaController.asignarFiduciarios(\'' + type.IdEmpresa + '\',\'' + type.NombreCorto + '\');\" class=\"btn btn-rounded btn-sm btn-icon btn-default auto\" disabled><i class=\"i i-flow-tree\"></i>';
                            }
                        }
                    },
                    {
                        "targets": 11,
                        "className": "text-center",
                        "width": "170px",
                        "orderable": false,
                        "data": null,
                        "render": function (data, val, type, row, meta) {
                            if (type.RepresentanteComun) {
                                return '<a onclick=\"javascript: abaxXBRL.componentes.controllers.AbaxXBRLIndiceEmpresaController.asignarFiduciariosRepComun(\'' + type.IdEmpresa + '\',\'' + type.NombreCorto + '\');\" class=\"btn btn-rounded btn-sm btn-icon btn-default auto\" ><i class=\"i i-flow-tree\"></i>';
                            } else {
                                return '<a onclick=\"javascript: abaxXBRL.componentes.controllers.AbaxXBRLIndiceEmpresaController.asignarFiduciariosRepComun(\'' + type.IdEmpresa + '\',\'' + type.NombreCorto + '\');\" class=\"btn btn-rounded btn-sm btn-icon btn-default auto\" disabled><i class=\"i i-flow-tree\"></i>';
                            }
                        }
                    },
                    {
                        "targets": 12,
                        "data": null,
                        "className": "text-center",
                        "orderable": false,
                        "render": function (data, val, type, row, meta) {
                            if (shared.service.AbaxXBRLSessionService.tieneFacultad(abaxXBRL.AbaxXBRLFacultadesEnum.EditarEmpresas)) {
                                return '<a onclick=\"javascript: abaxXBRL.componentes.controllers.AbaxXBRLIndiceEmpresaController.editarEmpresa(\'' + type.IdEmpresa + '\',\'' + type.NombreCorto + '\');\" class=\"btn btn-rounded btn-sm btn-icon btn-default auto\" ><i class=\"fa fa-pencil\"></i>';
                            } else {
                                return "";
                            }


                        }
                    },
                    {
                        "targets": 13,
                        "className": "text-center",
                        "width": "100px",
                        "data": null,
                        "render": function (data, val, type, row, meta) {
                            if (shared.service.AbaxXBRLSessionService.tieneFacultad(abaxXBRL.AbaxXBRLFacultadesEnum.EliminarEmpresas)) {
                                return '<a onclick=\"javascript: abaxXBRL.componentes.controllers.AbaxXBRLIndiceEmpresaController.abrirPopupEliminar(\'' + type.IdEmpresa + '\');\" class=\"btn btn-rounded btn-sm btn-icon btn-danger\"><i class=\"fa fa-trash-o\"></i>';
                            } else {
                                return "";
                            }
                        }
                    }
                ]);

                opcionesDt.withOption('rowCallback', function () {

                });

                opcioensAjax.url = AbaxXBRLConstantes.OBTENER_EMPRESAS_PATH;

                opcioensAjax.beforeSend = onBeforeSend;

                opcionesDt.withOption('serverSide', true);
                opcionesDt.withOption('ajax', opcioensAjax);
                shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                    scope.dataTableInstance = instance;
                    scope.existenEmpresas = true;
                    //$("#tablaEmpresa_length").append("<div>Buscar: <input id='inputBusquedaEmpresa' type='search' name='search' class='input-sm form-control input-s-lg inline v-middle'/></div>");
                    //var input: any = document.querySelector('#inputBusquedaEmpresa');                     

                    //input.addEventListener('input', function () {
                    //    if (scope.dataTableInstance && scope.dataTableInstance != null) {
                    //        var valorInput = $("#inputBusquedaEmpresa").val();
                    //        console.log("Valor input:" + valorInput);
                    //        scope.dataTableInstance.DataTable.search(valorInput).draw();
                    //    }                        
                    //});

                });
            }

            self.abaxXBRLRequestService.generarOpcionesAjax().then(onOpcionesSucess);
        }

        /**
        * Muestra la vista para asignar grupos a la empresa actual.
        * @param empresa Empresa sobre la que se realizará la asignación de grupos.
        **/
        public static asignarGrupoEmpresa(nombreCorto: any, idEmpresa: any): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var propietario: shared.modelos.ISelectItem = { Etiqueta: nombreCorto, Valor: idEmpresa };
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, propietario);
            $util.cambiarEstadoVistasA(this.estadoAsignarEmpresa);
        }

        public static asignarTiposEmpresa(nombreCorto: any, idEmpresa: any): void {
            var util = shared.service.AbaxXBRLUtilsService;

            var emisora: shared.modelos.IEmisora = {
                IdEmpresa: idEmpresa,
                NombreCorto: nombreCorto
            };

            util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO, emisora);
            util.cambiarEstadoVistasA('inicio.asignaTipoEmpresa');
        }

        public static asignarFiduciarios(idEmpresa: any, nombreCorto: any): void {
            var util = shared.service.AbaxXBRLUtilsService;

            var emisora: shared.modelos.IEmisora = {
                IdEmpresa: idEmpresa,
                NombreCorto: nombreCorto
            };

            util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO, emisora);
            util.cambiarEstadoVistasA('inicio.asignaFiduciarios');
        }

        public static asignarFiduciariosRepComun(idEmpresa: any, nombreCorto: any): void {
            var util = shared.service.AbaxXBRLUtilsService;

            var emisora: shared.modelos.IEmisora = {
                IdEmpresa: idEmpresa,
                NombreCorto: nombreCorto
            };

            util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO, emisora);
            util.cambiarEstadoVistasA('inicio.asignaFiduciariosRepComun');
        }

        public static editarEmpresa(idEmpresa: any, nombreCorto: any): void {
            var util = shared.service.AbaxXBRLUtilsService;

            var emisora: shared.modelos.IEmisora = {
                IdEmpresa: idEmpresa,
                NombreCorto: nombreCorto
            };

            util.cambiarEstadoVistasConParametroA('inicio.empresa.edita', { id: idEmpresa });
        }

        public static abrirPopupEliminar(idEmpresa: string) {

            var scope = angular.element(document.getElementById('tablaEmpresa')).scope();

            scope.$apply(function () {

                var resultadoEliminarEmpresa = function (resultado: shared.modelos.IResultadoOperacion) {
                    if (resultado != undefined) {
                        var util = shared.service.AbaxXBRLUtilsService;
                        var mensaje: string = '';
                        if (resultado && resultado.Resultado) {
                            mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ELIMINAR_EMPRESA");
                            util.ExitoBootstrap(mensaje);

                        } else {
                            mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ELIMINAR_EMPRESA");
                            util.ErrorBootstrap(mensaje);
                        }

                        $('#tablaEmpresa').DataTable().ajax.reload();
                    }
                };

                var onError = scope.abaxXBRLRequestService.getOnErrorDefault();

                if (idEmpresa == shared.service.AbaxXBRLSessionService.getSesionInmediate().IdEmpresa.toString()) {
                    shared.service.AbaxXBRLUtilsService.AlertaBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_WARNING_BORRAR_EMPRESA"));
                    return;
                }

                var modalInstance = scope.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/empresa/elimina/abax-xbrl-elimina-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: AbaxXBRLEliminaEmpresaController,
                    resolve: {
                        id: function () {
                            return idEmpresa;
                        }
                    }
                });

                modalInstance.result.then(resultadoEliminarEmpresa, onError);
            });
        }

        private refreshData(): void {
            var scope = this.$scope;
            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });
            if (scope.dataTableInstance) {
                scope.dataTableInstance.DataTable.ajax.reload();
            }
        }

        /** Carga Combo de Taxonomias **/
        private cargarTaxonomias(): void {
            var self = this;

            var onSuccess = function (result: any) { self.onCargarTaxonomiasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.configurarOpcionesDataTable(); };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_TAXONOMIAS, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de taxonomias.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarTaxonomiasSuccess(resultado: Array<shared.modelos.ITaxonomiaXbrl>): void {
            var scope: AbaxXBRLIndiceEmpresaScope = this.$scope;
            var listado: Array<shared.modelos.ITaxonomiaXbrl> = resultado;
            scope.taxonomias = listado;
        }    
       
        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self: AbaxXBRLIndiceEmpresaController = this;
            var scope: AbaxXBRLIndiceEmpresaScope = self.$scope;
            
            scope.exportando = false;
            scope.existenEmpresas = false;
            scope.mostrarMensaje = false;

            var dtOptions = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.opcionesDataTableEmpresas = dtOptions;

            scope.opcionesDataTableLocal = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();

            //shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
            //    scope.dataTableInstance = instance;
            //});

            scope.$watch('empresaBuscada', function () {
                if (scope.dataTableInstance && scope.dataTableInstance != null) {
                    scope.dataTableInstance.DataTable.search(scope.empresaBuscada).draw();
                }
            });

            scope.refreshData = function (): void { self.refreshData(); };

            scope.configurarOpcionesDataTable = function (): void { self.configurarOpcionesDataTable(); };

            self.cargarTaxonomias();                                                                        
        }


        /**
         * Constructor de la clase EmpresaListCtrl
         *
         * @param $scope el scope del controlador
         * @param EmpresaDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLIndiceEmpresaScope, $modal: ng.ui.bootstrap.IModalService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            var self = this;

            self.$scope = $scope;
            this.$scope.$modal = $modal
            this.$scope.$state = $state;
            this.$scope.abaxXBRLRequestService = abaxXBRLRequestService;
            self.abaxXBRLRequestService = abaxXBRLRequestService;
                        
            self.$scope.descargaArchivo = function () { self.descargaArchivo(); };           
            self.init();
        }
    }
    AbaxXBRLIndiceEmpresaController.$inject = ['$scope', '$modal', 'abaxXBRLRequestService', '$state'];
}