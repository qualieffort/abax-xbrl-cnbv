 
module abaxXBRL.shared.directivas {
    /**Directiva para el loading de la seccion de contenido del sitio. **/
    export class AbaxXBRLSplashContenidoInicio {

        /**Fabrica de la directiva. **/
        public static AbaxXBRLSplashContenidoInicioDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: true,
                transclude: false,
                templateUrl: 'abax-xbrl/shared/directivas/splash-contenido/abax-xbrl-splash-contenido-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
            }
        }
    }

}