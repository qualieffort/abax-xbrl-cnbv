/// <reference path="../../../shared/services/abax-xbrl-request-service.root.ts" />
/// <reference path="../../../../scripts/typings/datatables/jquery.datatables.d.ts" />
/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../shared/constantes/abax-xbrl-constantes.inicio.ts" />

module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAlertasScope extends IAbaxXBRLInicioScope {
        /**
        * Bandera que indica si se están cargando las alertas en este momento.
        **/
        cargandoAlertas: boolean;
        /**
        * Determina si existen alertas que mostrar al usuario 
        **/
        existenAlertasUsuario: boolean;
        /** 
        * Arreglo con las entidades de alertas a mostrar en pantalla.
        **/
        alertas: Array<shared.modelos.IAlerta>;
    }
    /** 
    * Controller de la vista de alertas.
    **/
    export class AbaxXBRLAlertasController {

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Scope de la vista del controller **/
        private $scope: AbaxXBRLAlertasScope;
        /**
        * Llena el listado de archivos de usuario.
        **/
        private obtenAlertasRecientes(): void {
            var self = this;
            var onSucess = function (result: any) { self.onObtenAlertasRecientesSucess(result.data); }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.ALERTAS_RECIENTES_PATH, {}).then(onSucess, onError);
        }
        /** 
        * Procesa la respuesta asincrona de la solicitud de archivos de usuario.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenAlertasRecientesSucess(resultado: shared.modelos.IResultadoOperacion) {
            var alertas: Array<shared.modelos.IAlerta> = resultado.InformacionExtra;
            var scope = this.$scope;
            if (alertas && alertas.length > 0) {

                scope.alertas = alertas;
                scope.existenAlertasUsuario = true;
            }
            scope.cargandoAlertas = false;
        }
        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;
            scope.existenAlertasUsuario = false;
            scope.cargandoAlertas = true;
            self.obtenAlertasRecientes();
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLAlertasScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }

    AbaxXBRLAlertasController.$inject = ['$scope', 'abaxXBRLRequestService'];
} 