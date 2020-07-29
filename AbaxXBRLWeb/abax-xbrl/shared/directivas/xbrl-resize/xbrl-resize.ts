module abaxXBRL.directives {
    /**
     * Implementación de una directiva encargada de escuchar el evento de resize de la ventana para poder notificarlo a otras directivas que puedan estar interesadas en procesar el evento.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlResize {

        /**
         * Crea la definición de la directiva.
         * 
         * @return la definición de la directiva.
         */
        public static XbrlResizeDirective($window: ng.IWindowService): ng.IDirective {
            return {
                link: function (scope) {
                    angular.element($window).bind('resize', function (e) {
                        scope.$broadcast('resize::resize');
                    });
                }
            };
        }
    }
    XbrlResize.XbrlResizeDirective.$inject = ['$window'];
}