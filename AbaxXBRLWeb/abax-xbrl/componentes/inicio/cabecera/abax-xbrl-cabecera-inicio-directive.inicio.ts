/// <reference path="abax-xbrl-cabecera-inicio-controller.inicio.ts" />

module abaxXBRL.componentes.directivas {

    /**Clase que define la configuración para el usuo de la directiva de cabecera de inicio. **/
    export class AbaxXBRLCabeceraInicio {

        /**Fabrica de la directiva. **/
        public static AbaxXBRLCabeceraInicioDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: true,
                transclude: false,
                templateUrl: 'abax-xbrl/componentes/inicio/cabecera/abax-xbrl-cabecera-inicio-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: controllers.AbaxXBRLCabeceraInicioController
            }
        }
    }
} 