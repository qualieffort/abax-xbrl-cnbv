module abaxXBRL.componentes.controllers {
    /**
 * Definición de la estructura del scope para el controlador que sirve para editar una empresa
 *
 * @author Alan Alberto Caballero Ibarra
 * @version 1.0
 */
    export interface AbaxXBRLEditarEmpresaScope extends IAbaxXBRLInicioScope {
        empresa: abaxXBRL.shared.modelos.IEmpresa;
        rfc: RegExp;
        actualizarEmpresa(): void;
        cancelar(): void;
        empresaForm: ng.IFormController;
        guardando: boolean;
        cargando: boolean;

        claveGrupoEmpresa: string;
    }

    /**
     * Definición de la estructura del scope para el servicio de parametros de ruta
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface IAbaxXBRLEditaEmpresaRouteParams extends ng.ui.IStateParamsService {
        id: string;
    }

    /**
     * Implementación de un controlador para la edición de una empresa
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLEditaEmpresaController {
        /** El scope del controlador */
        private $scope: AbaxXBRLEditarEmpresaScope;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /** Servicio para controlar los parametros de la ruta de navegación */
        private $stateParams: IAbaxXBRLEditaEmpresaRouteParams;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        private obtenerEmpresa(id: string) {
            var self: AbaxXBRLEditaEmpresaController = this;

            var onSuccess = function (result: any) {
                self.onObtenerEmpresaSuccess(result.data);
                self.inicializarAgregarEmpresa();
            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_EMPRESA_PATH, { id: id }).then(onSuccess, onError);
        }

        private inicializarAgregarEmpresa(): void {
            var self: AbaxXBRLEditaEmpresaController = this;
            var scope: AbaxXBRLEditarEmpresaScope = this.$scope;

            var onSuccess = function (result: any) {
                var resultado = <shared.modelos.IResultadoOperacion>result.data;
                var util = shared.service.AbaxXBRLUtilsService;
                var mensaje = '';

                if (resultado.Resultado) {
                    var empresaResultadoOperacion = <abaxXBRL.shared.modelos.IEmpresa>resultado.InformacionExtra;
                    self.$scope.empresa.TieneGrupoEmpresa = empresaResultadoOperacion.GrupoEmpresa != null ? true : false;
                    
                }

            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { scope.cargando = false; };
            scope.cargando = true;
            var json = angular.toJson(scope.empresa);
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.INIT_EMPRESA_PATH, { "json": json }).then(onSuccess, onError).finally(onFinally);

        } 


        private onObtenerEmpresaSuccess(resultado: any): void {
            var scope: AbaxXBRLEditarEmpresaScope = this.$scope;

            scope.empresa = resultado;
            scope.empresa.TieneGrupoEmpresa = false;
            
        }

        private actualizarEmpresa(): void {
            var self: AbaxXBRLEditaEmpresaController = this;
            var scope: AbaxXBRLEditarEmpresaScope = self.$scope;

            var onSuccess = function (result: any) { self.onActualizarEmpresaSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { scope.guardando = false; };

            if (!scope.empresa.AsignarGrupoEmpresa) {
                scope.empresa.GrupoEmpresa = null;
            }

            var json:string = angular.toJson(scope.empresa);
            scope.guardando = true;

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ACTUALIZA_EMPRESA_PATH, {'json': json}).then(onSuccess, onError).finally(onFinally);
        }

        private onActualizarEmpresaSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLEditaEmpresaController = this;
            var scope: AbaxXBRLEditarEmpresaScope = self.$scope;

            var util = shared.service.AbaxXBRLUtilsService;
            var empresa = scope.empresa.NombreCorto;
            var parametros: { [token: string]: string } = { "NOMBRE_EMPRESA": empresa };
            var mensaje = '';

            scope.empresaForm.$setPristine();
            self.$state.go('inicio.empresa.indice').finally(function () {
                if (resultado.Resultado) {
                    mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZAR_EMPRESA", parametros);
                    util.ExitoBootstrap(mensaje);
                } else {
                    mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_EMPRESA", parametros);
                    util.ErrorBootstrap(mensaje);
                }
            });
        }

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self = this;

            self.$scope.guardando = false;

            self.obtenerEmpresa(self.$stateParams.id);
        }

        /**
         * Constructor de la clase EmpresaListCtrl
         *
         * @param $scope el scope del controlador
         * @param EmpresaDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLEditarEmpresaScope, $stateParams: IAbaxXBRLEditaEmpresaRouteParams, $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            var self: AbaxXBRLEditaEmpresaController = this;

            self.$scope = $scope;
            self.$stateParams = $stateParams;
            self.$state = $state;
            self.abaxXBRLRequestService = abaxXBRLRequestService;

            self.$scope.rfc = /^[a-zA-Z]{3,4}(\d{6})((\D|\d){3})?$/;

            self.$scope.empresa = { IdEmpresa: 0, RazonSocial: '', NombreCorto: '', AliasClaveCotizacion: null, RFC: '', DomicilioFiscal: '', Borrado: null, TieneGrupoEmpresa: false, GrupoEmpresa: '', Fideicomitente: false, DescripcionFideicomitente: '', RepresentanteComun: false };

            

            self.$scope.actualizarEmpresa = function () { self.actualizarEmpresa(); };

            self.$scope.cancelar = function () {
                self.$scope.empresaForm.$setPristine();
                self.$state.go('inicio.empresa.indice');
            };

            self.init();
        }
    }
    AbaxXBRLEditaEmpresaController.$inject = ['$scope', '$stateParams', '$state', 'abaxXBRLRequestService'];
} 