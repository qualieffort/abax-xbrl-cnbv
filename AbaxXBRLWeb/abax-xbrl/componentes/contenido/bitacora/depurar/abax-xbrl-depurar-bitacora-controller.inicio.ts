module abaxXBRL.componentes.controllers {
    
    /**
     * Definición de la estructura del scope para el controlador que sirve para 
     * depurara la bitacora 
     * @author Juan Carlos Huizar Moreno
     * @version 1.0
     */
    export interface AbaxXBRLDepurarBitacoraScope extends IAbaxXBRLInicioScope {

        /* Servicio para el cambio de estado de las vistas dentro del sitio. */
        $state: ng.ui.IStateService; 
        /* Criterio de fecha a partir de la cual se depurara la bitacora */
        filtroFecha: string;  
        /* Fecha sugerida */
        fechaSujerida: string; 
        /* Cancela la operacion y regresa al indice.*/
        cancelar(): void;
        /* Bandera para mostrar u ocultar el datepiker.  **/
        datePikerOpen: boolean; 
        /* Muestra el datepiker. **/
        muestraDatePiker($event); 
        /* Opciones para el datepiker */
        datepikerOptions: any; 
        /**
        * Solicita la confirmación para eliminar los registros de la bitacora y
        * si es positiva se eliminan los registros. 
        **/
        depurarBitacora(): void;
    } 

    /**
    * Implementacion del Controller de la Bitacora 
    * @author Juan Carlos Huizar Moreno
    * @version 1.0
    */
    export class AbaxXBRLDepurarBitacoraController {

        /** El Scope del Controlador **/
        private $scope: AbaxXBRLDepurarBitacoraScope; 
        /* Servicio para el cambio de estado de las vistas dentro del sitio. */
        $state: ng.ui.IStateService; 
        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService; 
        /** Servicio para el manejo de las peticiones al Servidor **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService; 

        /** Direcciona al usuario, a la pantalla para depurara la bitacora. */
        private cancelar() {
            var self = this;
            self.$scope.$state.go('inicio.bitacora');
        }

        /** Ordena mostrar el selector de fechas. */
        private muestraDatePiker($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.$scope.datePikerOpen = true;
        }

        /**
        * Solicita la confirmación para eliminar los registros de la bitacora  (¿Esta Seguro de borrar los registros de la bitacora?) y
        * si es positiva se eliminan los registros.
        **/
        private depurarBitacora(fecha: string) {
            var self = this;  
            fecha = moment(fecha).format("DD/MM/YYYY");
            var day = parseInt(fecha.substring(0, 2));
            var month = parseInt(fecha.substring(3, 5));
            var year = parseInt(fecha.substring(6, 10));
            var fechaRequerida = new Date(year, month-1, day); 

            var today = new Date();   
            var fechaPermitida = today.setDate(today.getDate() - 30);

            if (fechaRequerida.getTime() > fechaPermitida) {
                shared.service.AbaxXBRLUtilsService.AlertaBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_WARNING_BORRAR_REGISTROS_BITACORA"));
            } else {

                var modalInstance = this.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/bitacora/confirmar/abax-xbrl-confirmar-depurar-bitacora-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: AbaxXBRLConfirmarDepurarBitacoraController,
                    resolve: {
                        fecha: function () {
                            return fecha;
                        }
                    }
                });
                 
                var onSucess = function (resultado: shared.modelos.IResultadoOperacion) {
                    var util = shared.service.AbaxXBRLUtilsService
                    var mensaje: string = '';

                    if (resultado === undefined) {

                    } else if (resultado && resultado.Resultado) {
                        mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ELIMINAR_BITACORA");
                        self.$scope.$state.go('inicio.bitacora');
                        util.ExitoBootstrap(mensaje);
                    } else {
                        mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ELIMINAR_BITACORA");
                        util.ErrorBootstrap(mensaje);
                    }
                };

                var onError = this.abaxXBRLRequestService.getOnErrorDefault();

                modalInstance.result.then(onSucess, onError);
            }

            
           
        }
         
        /* Inicializamos los elementos del scope. */
        private init(): void {
            var self = this;
            var scope = self.$scope;
            var hoy = new Date();
            hoy.setDate(hoy.getDate() - 30)
            var fechaSujerida = hoy;  //new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDay() - 30); 
            var year = fechaSujerida.getFullYear();
            var month = (1 + fechaSujerida.getMonth()).toString();
            var day = fechaSujerida.getDate().toString(); 
            scope.filtroFecha = ((day.length > 1 ? day : '0' + day) + '/' + (month.length > 1 ? month : '0' + month) + '/' + year); 
            scope.fechaSujerida = scope.filtroFecha; 
            scope.datePikerOpen = false;
            scope.muestraDatePiker = function ($event): void { self.muestraDatePiker($event) };
            scope.cancelar = function (): void { self.cancelar(); };
            scope.depurarBitacora = function (): void { self.depurarBitacora(scope.filtroFecha); };
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para las peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLDepurarBitacoraScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $modal: ng.ui.bootstrap.IModalService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.$scope.$state = $state;
            this.$modal = $modal
            this.abaxXBRLRequestService = abaxXBRLRequestService; 
            this.init();
        }

    }

    AbaxXBRLDepurarBitacoraController.$inject = ['$scope', 'abaxXBRLRequestService', '$modal', '$state'];

}