/// <reference path="../../../../shared/services/abax-xbrl-request-service.root.ts" />
/// <reference path="../../../../../scripts/typings/datatables/jquery.datatables.d.ts" />
/// <reference path="../../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../shared/constantes/abax-xbrl-constantes.inicio.ts" />
///<reference path="../../../../../ts/serviciosAbax.ts" />
///<reference path="../../../../../ts/modeloAbax.ts" />

module abaxXBRL.componentes.controllers {

    import ResultadoOperacion = abaxXBRL.model.ResultadoOperacion;

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAnalisisEjecutarConsultaScope extends IAbaxXBRLInicioScope {

        /**
        * Bandera que indica si aún no se ha recibido la respusta de la consulta de hechos.
        **/
        cargandoPantalla: boolean;

        /**
        * Bandera que indica si se encontraron resultados para la consulta.
        **/
        existenHechos: boolean;

        /** Lista de los hechos en la consulta de configuracion de analisis por empresa*/
        hechosPorEmpresa: any;

        /** Lista de los hechos en la consulta de configuracion de analisis por contexto*/
        hechosPorContexto: { [idContexto: number]: any };

        /** Lista de los contextos en la consulta de configuracion de analisis*/
        contextosPorEmpresa: any;

        /** Diccionario de todos los hechos de un resultado operacion*/
        hechosResultadoOperacion: any;

        /** Listado de entidades */
        entidades: Array<abaxXBRL.shared.modelos.IConsultaAnalisisEntidad>;

        /** Numero de columnas por empresa que se presentan como contextos*/
        contextos: Array<abaxXBRL.shared.modelos.IConsultaAnalisisContexto>;

        /** Conceptos con información a mostrar en la consulta de configuracion de analisis*/
        conceptos: Array<abaxXBRL.shared.modelos.IConsultaAnalisisConcepto>;

        /** Metodo que realiza la acción de guardar la consulta en Base de datos*/
        guardarConsultaConfiguracion(): void;

        /**
        * Consulta de configuracion de analisis
        */
        consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis;

        /**
         * Bandera que indica que se esta exportando el listado a excel.
         **/
        exportando: boolean;


        /**
        * Exporta la lista de consultas a excel.
        **/
        descargaArchivo(): void;

    }

    /**
     * Definición del parametro que recibe la ejecucion de la consulta
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export interface IAbaxXBRLEjecutarConsultaRouteParams extends ng.ui.IStateParamsService {
        id: number;
    }

    /** 
    * Controller de la vista para ejecutar consultas de analisis.
    **/
    export class AbaxXBRLAnalisisEjecutarConsultaController {

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**Scope de la vista del controller **/
        private $scope: AbaxXBRLAnalisisEjecutarConsultaScope;

        /**
        * El servicio que permite la consulta y guardado de los usuarios asignados a un documento de instancia
        */
        private abaxXBRLServices: abaxXBRL.services.AbaxXBRLServices;
        

        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;

        /** Servicio para controlar los parametros de la ruta de navegación */
        private $stateParams: IAbaxXBRLEjecutarConsultaRouteParams;


        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;
            self.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();



            if (this.$stateParams.id && this.$stateParams.id > 0) {
                this.obtenerConsultaAnalisis();
            } else {
                scope.conceptos = self.$scope.consultaAnalisis.ConsultaAnalisisConcepto;
                this.onbtenerHechosPorConsulta();
            }

            this.$scope.guardarConsultaConfiguracion = function () {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-guardar-consulta.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: GuardarConfiguracionConsultaController
                });

            }

            this.$scope.descargaArchivo = function () { self.descargaArchivo(); };

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
        * Descarga en excel el listado de consultas.
        **/
        private descargaArchivo(): void {
            var self: AbaxXBRLAnalisisEjecutarConsultaController = this;

            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;


            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.DESCARGA_EJECUCION_CONSULTA_PATH, { "consulta": $.toJSON(self.$scope.consultaAnalisis), "hechos": $.toJSON(self.$scope.hechosResultadoOperacion.hechos), "contextos": $.toJSON(self.$scope.hechosResultadoOperacion.contextos)}, true).then(onSuccess, onError).finally(onFinally);
        }

        /**
        * Obtiene una consulta de analisis registrada
        */
        private obtenerConsultaAnalisis(): void {
            var self = this;
            var onHttpSucess = function (result: any) {
                var resultadoOperacion: shared.modelos.IResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    var consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis =resultadoOperacion.InformacionExtra;
                    abaxXBRL.shared.modelos.IConsultaAnalisis.setInstance(consultaAnalisis);
                    self.$scope.consultaAnalisis = consultaAnalisis;
                    self.$scope.conceptos = self.$scope.consultaAnalisis.ConsultaAnalisisConcepto;
                    self.onbtenerHechosPorConsulta();

                } else {
                    self.abaxXBRLRequestService.getOnErrorDefault();
                }
            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_CONSULTA_ANALISIS_PATH, { "idConsulta": self.$stateParams.id }).then(onHttpSucess, onHttpError);
        }


        /**
        * Obtiene el listado de hechos de la configuracion de la consulta.
        **/
        private onbtenerHechosPorConsulta(): void {
            var self = this;
            self.$scope.cargandoPantalla = true;
            self.$scope.entidades = new Array<abaxXBRL.shared.modelos.IConsultaAnalisisEntidad>();
            self.$scope.contextos = new Array<abaxXBRL.shared.modelos.IConsultaAnalisisContexto>();
            self.$scope.hechosPorContexto = {};

            var onHttpSucess = function (result: any) {
                self.onOnbtenerHechosConsultaSucess(result.data);

                setTimeout(function () {
                    self.$scope.$apply(function () {
                        self.$scope.cargandoPantalla = false;
                    });
                    
                },2000);
            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();

            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.HECHOS_POR_CONSULTA_ANALISIS_PATH, { "consulta": $.toJSON(self.$scope.consultaAnalisis) }).then(onHttpSucess, onHttpError);
        }
       
        /**
        * Procesa el resulado de la consulta de los hechos de la configuracion de la consulta.
        * @param resulado Respuseta del servidor a la consulta.
        **/
        private onOnbtenerHechosConsultaSucess(resultado: shared.modelos.IResultadoOperacion) {
            var scope = this.$scope;
            scope.hechosResultadoOperacion = resultado.InformacionExtra;
            if (resultado.Resultado == true && scope.hechosResultadoOperacion) {
                scope.hechosPorEmpresa = scope.hechosResultadoOperacion.hechos;
                scope.contextosPorEmpresa = scope.hechosResultadoOperacion.contextos;

                for (var IdEmpresa in scope.hechosPorEmpresa) {
                    for (var IdContexto in scope.hechosPorEmpresa[IdEmpresa]) {
                        scope.hechosPorContexto[IdContexto] = scope.hechosPorEmpresa[IdEmpresa][IdContexto];
                    }
                }

                this.inicializarConsultaPantalla();

            }
        }

        /*
        *Inicaliza la pantalla con la consulta de analisis de informacion de hechos
        */
        private inicializarConsultaPantalla(): void {

            for (var indiceEntidad in this.$scope.consultaAnalisis.ConsultaAnalisisEntidad) {
                var IdEmpresa = this.$scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceEntidad].IdEmpresa;
                if (this.$scope.hechosPorEmpresa[IdEmpresa]) {
                    var ContextosEmpresa = this.$scope.contextosPorEmpresa[IdEmpresa];
                    if (ContextosEmpresa) {
                        this.$scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceEntidad].NumeroColumnas = ContextosEmpresa.length;
                        this.$scope.entidades.push(this.$scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceEntidad]);

                        for (var indiceContexto in this.$scope.contextosPorEmpresa[IdEmpresa]) {
                            var contexto = this.$scope.contextosPorEmpresa[IdEmpresa][indiceContexto];
                            this.$scope.contextos.push({ NombreContexto: this.generarNombreColumnaContexto(contexto), Id: contexto.Id,IdEmpresa:0 });
                        }
                    }
                }
            }
        }

        /*
        * Metodo que genera el nombre de las columnas de los contextos de tipo periodo o instante
        */
        private generarNombreColumnaContexto(contexto: any): string {
            var nombreColumna = "";
            if (contexto.Fecha != null) {
                nombreColumna = moment(contexto.Fecha).format("DD/MM/YYYY");
            } else {
                nombreColumna = moment(contexto.FechaInicio).format("DD/MM/YYYY") + " AL " + moment(contexto.FechaFin).format("DD/MM/YYYY");
            }
            return nombreColumna;
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
        * @param $stateParams Parametros para la ejecion de una consulta registrada
        **/
        constructor($scope: AbaxXBRLAnalisisEjecutarConsultaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $modal: ng.ui.bootstrap.IModalService, $stateParams: IAbaxXBRLEjecutarConsultaRouteParams) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$modal = $modal;
            this.$stateParams = $stateParams;
            this.$scope.cargandoPantalla = true;

            this.init();
            var self = this;

        }
    }

    AbaxXBRLAnalisisConfigurarConsultaController.$inject = ['$scope', 'abaxXBRLRequestService', '$modal', '$stateParams'];


    /**
     * Definición de la estructura del scope del controlador para guardar una consulta de configuracion.
     * @author Luis Angel Morales Gonzalez
     */
    export interface IGuardarConfiguracionConsultaScope extends IAbaxXBRLInicioScope {

        /** Indica si la operación de guardado ya se ha completado */
        guardado: boolean;

        /** El resultado de la invocación remota al servicio de guardar una consulta de configuracion de analisis */
        resultadoOperacion: abaxXBRL.model.ResultadoOperacion;

        /**
         * Cierra el diálogo que permite guardar la consulta de analisis
         */
        cerrarDialogo(): void;


        /**
         * Guarda la consulta de analisis.
         * 
         * @param isValid el estado de la validación de la forma presentada al usuario. 
         */
        guardarConsulta(isValid: boolean): void;

        /**
        * Consulta de configuracion de analisis
        */
        consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis;

    }


    /**
     * Implementación de un controlador para la operación de guardar un consulta de analisis
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class GuardarConfiguracionConsultaController {

        /** El scope del controlador para guardar versiones del documento instancia */
        private $scope: IGuardarConfiguracionConsultaScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IGuardarConfiguracionConsultaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            var self = this;

            self.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();

            this.$scope.resultadoOperacion = null;
            this.$scope.guardado = false;
            this.$scope.cerrarDialogo = function (): void {
                self.$scope.guardado = false;
                self.$scope.resultadoOperacion = null;
                $modalInstance.close();
            };

            this.$scope.guardarConsulta = function (isValid: boolean): void {
                if (isValid) {

                    var onHttpSucess = function (result: any) {
                        self.$scope.guardado = true;
                        var resultadoOperacion: shared.modelos.IResultadoOperacion = result.data;
                        if (resultadoOperacion.Resultado) {
                            abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance().IdConsultaAnalisis= resultadoOperacion.InformacionExtra;
                        } else {
                            self.abaxXBRLRequestService.getOnErrorDefault()
                        }
                    };
                    var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
                    self.abaxXBRLRequestService.post(AbaxXBRLConstantes.REGISTRAR_CONSULTA_ANALISIS_PATH, { "consulta": $.toJSON(abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance()) }).then(onHttpSucess, onHttpError);

                }
            };
        }
    }

    GuardarConfiguracionConsultaController.$inject = ['$scope', '$modalInstance', 'abaxXBRLRequestService'];

} 