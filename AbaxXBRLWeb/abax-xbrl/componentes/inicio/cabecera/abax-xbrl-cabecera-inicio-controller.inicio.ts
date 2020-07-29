///<reference path="../../../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../../../scripts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" /> 
///<reference path="../../../shared/services/abax-xbrl-request-service.root.ts" />

module abaxXBRL.componentes.controllers {

    /** 
    * Contrato de propiedades y atributos visibles para los elementos dentro del controlador de la cabecera.
    * @version 1.0
    * @since 2015/01/30
    **/
    export interface IXbrlCabeceraInicioScope extends IAbaxXBRLInicioScope {
        
        /**Valores para el llenado del combo de busqueda de cuentas. **/
        valoresSelectBusquedaCuenta: { [value: string]: string };
        /**Valor seleccionado del filtro de busqueda de cuentas.**/
        filtroBusquedaCuenta: string;
        /**Listado de las alertas que se han enviado.**/
        listadoAlertas: Array<shared.modelos.IAlerta>;
        /**Bandera que indica si existen o no alertas. **/
        existenAlertas: boolean;
        /**
        * Redirije a la ventana de consulta repositorio y busca los hechos para el concepto seleccionado.
        **/
        consultarRepositorio(): void;

        /**
        * Realiza la consulta de conceptos de una taxonomia
        */
        cargarConceptosBusquedaCuenta(): void;


        /** Url para levantar tickets de soporte por parte de las emisoras*/
        urlSoporteTecnico: string;

        /** Indicador que define si es una autenticación de tipo single sign on */
        sso: boolean;

        /** Lista de plantillas disponibles para la taxonomía elegida */
        taxonomias: Array<model.TaxonomiaXbrlBd>;

        /**Identificador de la taxonomia a consultar los conceptos*/
        IdTaxonomiaXbrl: string;
    }

    /** 
    * Controlador del template header_template.html para la cabecera de la página de inicio del sitio.
    * @version 1.0
    * @since 2015/01/30
    **/
    export class AbaxXBRLCabeceraInicioController {
        /** El scope del controlador */
        private $scope: IXbrlCabeceraInicioScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        /**
        * Obtiene la información para la generación de las opciones del selector de la busqueda de hechos.
        **/
        private cargarConceptosBusquedaCuenta(): void {

            var self = this;
            var onHttpSucess = function (result: any) {
                self.$scope.valoresSelectBusquedaCuenta = result.data;
                self.$scope.filtroBusquedaCuenta = "";
            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONCEPTOS_BUSQUEDA_PATH, { "idTaxonomia": self.$scope.IdTaxonomiaXbrl }).then(onHttpSucess, onHttpError);
        }
        /**
        * Solicita al servidor las úlimas alertas asignadas al usuario actual.
        **/
        private obtenUltimasAlertasUsuario(): void {
            var self = this;
            var onSucess = function (result: any) { self.onObtenUltimasAlertasUsuarioSucess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.ULTIMAS_ALERTAS_USUARIO_PATH, {}).then(onSucess, onError);
        }
        /** 
       * Procesa la respuesta asincrona de la solicitud de últimas alertas de usuario.
       * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
       * @param resultado Respuesta resultante de la solicitud.
       **/
        private onObtenUltimasAlertasUsuarioSucess(resultado: shared.modelos.IResultadoOperacion) {
            var alertas = resultado.InformacionExtra;
            var scope = this.$scope;
            if (alertas && alertas.length > 0) {

                scope.listadoAlertas = alertas;
                scope.existenAlertas = true;
            }
        }

        /**
        * Carga un listado de las taxonomias cargadas en cache en la aplicacion
        */
        private cargarTaxonomias(): void {
            var self = this;

            this.abaxXBRLRequestService.post("DocumentoInstancia/ObtenerTaxonomiasRegistradasJsonResult", {}).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    if (resultadoOperacion && resultadoOperacion.InformacionExtra && resultadoOperacion.InformacionExtra.length) {
                        self.$scope.taxonomias = new Array<model.TaxonomiaXbrlBd>();
                        for (var i = 0; i < resultadoOperacion.InformacionExtra.length; i++) {
                            self.$scope.taxonomias.push(new model.TaxonomiaXbrlBd().deserialize(resultadoOperacion.InformacionExtra[i]));
                        }
                    }
                } else {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                }
            }, function (error: any) {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                });

        }


        

        /**
        * Redirije a la ventana de consulta repositorio y busca los hechos para el concepto seleccionado.
        **/
        private consultarRepositorio(): void {
            var concepto = this.$scope.filtroBusquedaCuenta;
            if (concepto && concepto != null && concepto.length > 0) {
                shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_CONCEPTO_BUSQUEDA, concepto);
                shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_TAXONOMIA, this.$scope.IdTaxonomiaXbrl);

            }

            if (this.$state.current.name == 'inicio.consultaRepositorio') {
                this.$state.reload();
            } else {
                this.$state.go('inicio.consultaRepositorio');
            }
        }
        /**Inicializa los elementos del constructor.**/
        private init(): void {
            var $self: AbaxXBRLCabeceraInicioController = this;
            var scope = $self.$scope;
            scope.existenAlertas = false;
            scope.sso = shared.service.AbaxXBRLSessionService.getAtributoSesion(shared.service.AbaxXBRLSessionService.AUTENTICACION_SSO_NAME);

            scope.consultarRepositorio = function () { $self.consultarRepositorio(); }
            scope.cargarConceptosBusquedaCuenta = function () { $self.cargarConceptosBusquedaCuenta();}
            $self.obtenUltimasAlertasUsuario();

            $self.cargarTaxonomias();
            scope.valoresSelectBusquedaCuenta = {};

            scope.urlSoporteTecnico = AbaxXBRLConstantes.URL_SOPORTE_TECNICO;
        }
        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual del login.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: IXbrlCabeceraInicioScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }
    //Asignamos las dependencias que se deben de inyectar en el constructor.
    AbaxXBRLCabeceraInicioController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
} 