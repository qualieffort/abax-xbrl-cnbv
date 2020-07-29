/// <reference path="../../../../shared/services/abax-xbrl-request-service.root.ts" />
/// <reference path="../../../../../scripts/typings/datatables/jquery.datatables.d.ts" />
/// <reference path="../../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../shared/constantes/abax-xbrl-constantes.inicio.ts" />

module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAnalisisConsultasScope extends IAbaxXBRLInicioScope {
        /**
        * Bandera que indica si se están cargando las consultas de analisis.
        **/
        cargandoConsultas: boolean;
        /**
        * Determina si existen consultas de analisis
        **/
        existenConsultasAnalisis: boolean;

        /**
        * Objeto con las opcinoes de configuración del datatable local.
        **/
        opcionesDataTableConsultas: any;

        /** 
        * Arreglo con las entidades de consultas de analisis a mostrar en pantalla.
        **/
        consultas: Array<shared.modelos.IConsultaAnalisis>;

        /**
        * Valor del campo para el filtrado de datos.
        **/
        valorCampoConsulta: string;

        /**
         * Bandera que indica que se esta exportando el listado a excel.
         **/
        exportando: boolean;

        /**
        * Referencia a la instancia del datatable.
        **/
        dataTableInstance: any;

        /**
        * Exporta la lista de consultas a excel.
        **/
        descargaArchivo(): void;

        /**
        * Elimina un elemento de una consulta.
        **/
        eliminar(id:string): void;

        /**
        * Muestra la configuracion de la consulta de analisis.
        **/
        mostrarConfiguracionConsulta(id: string): void;
    }
    /** 
    * Controller de la vista de consultas de analisis.
    **/
    export class AbaxXBRLAnalisisConsultasController {

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Scope de la vista del controller **/
        private $scope: AbaxXBRLAnalisisConsultasScope;

        /**
        * Servicio para el cambio de estado de las vistas dentro del sitio. 
        **/
        private $state: ng.ui.IStateService = null;

        /**
        * Llena el listado consultas de analisis.
        **/
        private obtenConsultasAnalisis(): void {
            var self = this;
            var onSucess = function (result: any) { self.onObtenConsultasAnalisisSucess(result.data); }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTAS_ANALISIS_PATH, {}).then(onSucess, onError);
        }
        /** 
        * Procesa la respuesta asincrona de la solicitud de archivos de usuario.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenConsultasAnalisisSucess(resultado: shared.modelos.IResultadoOperacion) {
            var consultas: Array<shared.modelos.IConsultaAnalisis> = resultado.InformacionExtra;
            var scope = this.$scope;
            if (consultas && consultas.length > 0) {

                scope.consultas = consultas;
                scope.existenConsultasAnalisis = true;
            }

            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });

            scope.$watch('valorCampoConsulta', function () {
                if (scope.dataTableInstance && scope.dataTableInstance != null) {
                    scope.dataTableInstance.DataTable.search(scope.valorCampoConsulta).draw();
                }
            });

            var paging = consultas.length > 10;
            scope.opcionesDataTableConsultas.withOption("paging", paging);

            if (!paging) {
                scope.opcionesDataTableConsultas.withOption("sDom", "t");
            } else {
                scope.opcionesDataTableConsultas.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
            }

            scope.cargandoConsultas = false;
        }
        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;
            scope.existenConsultasAnalisis = false;
            scope.cargandoConsultas = true;
            self.obtenConsultasAnalisis();

            var dtOptions = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.opcionesDataTableConsultas= dtOptions;
        }

        /**
        * Descarga en excel el listado de consultas.
        **/
        private descargaArchivo(): void {
            var self: AbaxXBRLAnalisisConsultasController = this;

            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.DESCARGA_CONSULTAS_PATH, {
                'valorConsulta': self.$scope.valorCampoConsulta
            }, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de consultas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'consultasAnalisis.xls');
        }



        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
        * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: AbaxXBRLAnalisisConsultasScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;

            this.init();
            var self = this;

            self.$scope.mostrarConfiguracionConsulta = function (id: string): void {
                var sesion = shared.service.AbaxXBRLSessionService;
                sesion.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_CONSULTA_CONFIGURACION, id);
                self.$state.go("inicio.analisis.configuracion");

            }

            self.$scope.eliminar = function (id: string): void {
              
                var si = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SI');
                var no = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_NO');

                $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('ELIMINAR_CONSULTA_CONFIGURACION'), {
                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('ELIMINAR_CONSULTA'),
                    buttons: { si: true, no: false },
                    submit: function (e, v, m, f) {
                        if (v) {
                            var scope = self.$scope;
                            scope.$apply(function () {
                                self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ELIMINAR_CONSULTA_PATH, { "idConsulta": id }).then(onSucess, onHttpError);
                            });
                        }
                    }
                });

                var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();

                var onSucess = function (resultado: any) {

                    var resultadoOperacion: shared.modelos.IResultadoOperacion = resultado.data;

                    var util = shared.service.AbaxXBRLUtilsService
                    var mensaje: string = '';
                    if (resultadoOperacion && resultadoOperacion.Resultado) {
                        self.obtenConsultasAnalisis();
                        mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ELIMINAR");
                        util.ExitoBootstrap(mensaje);
                    } else {
                        mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ELIMINAR_CONSULTA");
                        util.ErrorBootstrap(mensaje);
                    }
                    self.obtenConsultasAnalisis();
                };

                
            }

            self.$scope.descargaArchivo = function () { self.descargaArchivo(); };

         


        }
    }

    AbaxXBRLAnalisisConsultasController.$inject = ['$scope', 'abaxXBRLRequestService','$state'];
} 