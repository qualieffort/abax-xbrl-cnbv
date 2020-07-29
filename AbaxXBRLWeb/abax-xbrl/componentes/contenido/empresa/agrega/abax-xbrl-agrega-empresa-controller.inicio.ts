module abaxXBRL.componentes.controllers {
    /**
 * Definición de la estructura del scope para el controlador que sirve para agregar una empresa nueva
 *
 * @author Alan Alberto Caballero Ibarra
 * @version 1.0
 */
    export interface AbaxXBRLAgregaEmpresaScope extends IAbaxXBRLInicioScope {
        empresa: abaxXBRL.shared.modelos.IEmpresa;
        rfc: RegExp;
        agregaEmpresa(): void;
        cancelar(): void;
        empresaForm: ng.IFormController;
        guardando: boolean;
        cargando: boolean;

        claveGrupoEmpresa: string;
    }

    /**
 * Implementación de un controlador para la inserción de empresa nueva
 *
 * @author Alan Alberto Caballero Ibarra
 * @version 1.0
 */
    export class AbaxXBRLAgregaEmpresaController {
        /** El scope del controlador */
        $scope: AbaxXBRLAgregaEmpresaScope;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;


        private inicializarAgregarEmpresa(): void {
            var self: AbaxXBRLAgregaEmpresaController = this;
            var scope: AbaxXBRLAgregaEmpresaScope = this.$scope;

            var onSuccess = function (result: any) {
                var resultado = <shared.modelos.IResultadoOperacion>result.data;
                var util = shared.service.AbaxXBRLUtilsService;
                var mensaje = '';

                if (resultado.Resultado) {
                    var empresaResultadoOperacion = <abaxXBRL.shared.modelos.IEmpresa>resultado.InformacionExtra;
                    self.$scope.empresa.TieneGrupoEmpresa = empresaResultadoOperacion.GrupoEmpresa != null ? true:false;
                    self.$scope.empresa.GrupoEmpresa = empresaResultadoOperacion.GrupoEmpresa;
                }
                
            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { scope.cargando = false; };
            scope.cargando = true;
            var json = angular.toJson(scope.empresa);
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.INIT_EMPRESA_PATH, { "json": json }).then(onSuccess, onError).finally(onFinally);

        } 
        private agregarEmpresa(): void {
            var self: AbaxXBRLAgregaEmpresaController = this;
            var scope: AbaxXBRLAgregaEmpresaScope = this.$scope;

            var onSuccess = function (result: any) { self.onAgregarEmpresaSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { scope.guardando = false; };
            scope.guardando = true;
            var json = angular.toJson(scope.empresa);
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.AGREGA_EMPRESA_PATH, { "json": json}).then(onSuccess, onError).finally(onFinally);
        }

        private onAgregarEmpresaSuccess(resultado: shared.modelos.IResultadoOperacion) {
            var self: AbaxXBRLAgregaEmpresaController = this;
            var scope: AbaxXBRLAgregaEmpresaScope = this.$scope;

            var util = shared.service.AbaxXBRLUtilsService;
            var empresa = scope.empresa.NombreCorto;
            var parametros: { [token: string]: string } = { "NOMBRE_EMPRESA": empresa };
            var mensaje = '';

            self.$scope.empresa = { IdEmpresa: 0, RazonSocial: '', NombreCorto: '',AliasClaveCotizacion:null, RFC: '', DomicilioFiscal: '', Fideicomitente:false, DescripcionFideicomitente:'' };
            self.$scope.empresaForm.$setPristine;
            self.$state.go('inicio.empresa.indice').finally(function () {
                if (resultado.Resultado) {
                    mensaje = util.getValorEtiqueta("MENSAJE_EXITO_REGISTRO_EMPRESA", parametros);
                    util.ExitoBootstrap(mensaje);
                }
                else {
                    if (resultado.Mensaje) {
                        mensaje = util.getValorEtiqueta(resultado.Mensaje);
                    } else {
                        mensaje = util.getValorEtiqueta("MENSAJE_ERROR_REGISTRO_EMPRESA", parametros);
                    }
                    util.ErrorBootstrap(mensaje);
                }
            });
        }

        /**
         * Constructor de la clase EmpresaListCtrl
         *
         * @param $scope el scope del controlador
         * @param EmpresaDataSvc el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: AbaxXBRLAgregaEmpresaScope, $state: ng.ui.IStateService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            var self: AbaxXBRLAgregaEmpresaController = this;

            self.$scope = $scope;
            self.$state = $state;
            self.abaxXBRLRequestService = abaxXBRLRequestService;

            self.$scope.empresa = { IdEmpresa: 0, RazonSocial: '',AliasClaveCotizacion:null, NombreCorto: '', RFC: '', DomicilioFiscal: '', Borrado: null,Fideicomitente:false,DescripcionFideicomitente:'' };

            self.$scope.guardando = false;
            self.$scope.rfc = /^[a-zA-Z]{3,4}(\d{6})((\D|\d){3})?$/;

            self.$scope.agregaEmpresa = function () { self.agregarEmpresa(); };

            self.inicializarAgregarEmpresa();

            self.$scope.cancelar = function () {
                self.$scope.empresa = { IdEmpresa: 0, RazonSocial: '',AliasClaveCotizacion:null, NombreCorto: '', RFC: '', DomicilioFiscal: '', Borrado: null, Fideicomitente: false, DescripcionFideicomitente: '' };
                self.$scope.empresaForm.$setPristine();
                self.$state.go('inicio.empresa.indice');
            };
        }
    }
    AbaxXBRLAgregaEmpresaController.$inject = ['$scope', '$state', 'abaxXBRLRequestService'];
} 