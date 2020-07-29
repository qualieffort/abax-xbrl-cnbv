module abaxXBRL.componentes.directivas {

    export interface AbaxXBRLEstadoInicialVistaScope extends ng.IScope {

        /**Clave de estado de la vista a mostrar **/
        estado: string;
    }

    /**Directiva para marcar el estado inicial de las vistas cuando se carga un template determinado. **/
    export class AbaxXBRLEstadoInicialVista {

        /**Fabrica de la directiva. **/
        public static AbaxXBRLEstadoInicialVistaDirective(): ng.IDirective {
            return {
                restrict: 'E',
                scope: {
                    estado:'@'
                },
                replace: false,
                transclude: false,
                link: function (scope: AbaxXBRLEstadoInicialVistaScope, element:any) {
                    //Actuaizamos el estado de la vista.
                    shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA(scope.estado);
                }
            }
        }
    }
}   