/// <reference path="abax-xbrl-barra-navegacion-inicio-controller.inicio.ts" />

module abaxXBRL.componentes.directivas {

    /**Clase que define la configuración para el usuo de la directiva de cabecera de inicio. **/
    export class AbaxXBRLBarraNavegacionInicio {

        /**Fabrica de la directiva. **/
        public static AbaxXBRLBarraNavegacionInicioDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: true,
                transclude: false,
                templateUrl: 'abax-xbrl/componentes/inicio/barra-navegacion/abax-xbrl-barra-navegacion-inicio-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: controllers.AbaxXBRLBarraNavegacionInicioController
            }
        }
    }
}  