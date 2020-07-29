module abaxXBRL.services {

    /**
     * Extiende la definición de una solicitud para permitir que sea monitoreada.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface SolicitudMonitoreada extends ng.IRequestConfig {

        /** Indica que la solicitud está siendo monitoreada */
        monitoreada: boolean;
    }
    /**
     * Implementación de un servicio AngularJS el cual está encargado de validar si escuchan solicitudes realizadas al servidor pendientes de responder.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class SolicitudesPendientesInterceptor {

        /** El servicio que permite crear operaciones encoladas */
        private $q: ng.IQService;

        /** El servicio que permite ser notificado de que el usuario desea navegar fuera de la página. */
        private guardiaNavegacionService: abaxXBRL.services.GuardianNavegarFueraPaginaService;

        /** El contador de solicitudes pendientes */
        private contadorSolicitudesPendientes = 0;

        /**
         * Método fábrica para obtener una instancia del interceptor de solicitudes pendientes HTTP
         */
        public static SolicitudesPendientesFactory($q: ng.IQService, guardiaNavegacionService: abaxXBRL.services.GuardianNavegarFueraPaginaService): SolicitudesPendientesInterceptor {
            return new SolicitudesPendientesInterceptor($q, guardiaNavegacionService);
        }

        /**
         * Actualiza el contador de solicitudes pendiente sólo si se trata de operaciones http con método POST, PUT o DELETE.
         *
         * @param metodo el método HTTP utilizado en la petición 
         * @param delta el incremenento (o decremento) que debe aplicarse al contador.
         * @return true si el contador fue actualizado. false en cualquier otro caso.
         */
        private actualizarContador(metodo: string, delta: number): boolean {
            if (metodo !== 'POST' && metodo !== 'PUT' && metodo !== 'DELETE') {
                return false;
            }
            this.contadorSolicitudesPendientes += delta;
            return true;
        }

        /**
         * Procesa una solicitud a un servicio remoto.
         *
         * @param requestConfig el objeto que representa la solicitud.
         * @return la misma solicitud aumentada para ser monitoreada.
         */
        public request(requestConfig: SolicitudMonitoreada): ng.IRequestConfig {
            requestConfig.monitoreada = this.actualizarContador(requestConfig.method, 1);
            return requestConfig;
        }

        /**
         * Procesa una respuesta a una solicitud de un servicio remoto.
         *
         * @param requestConfig el objeto que representa la respuesta de la solicitud.
         * @return la misma solicitud aumentada para ser monitoreada.
         */
        public response(response) {
            if (response.config && response.config.monitoreada) {
                this.actualizarContador(response.config.method, -1);
            }
            return response;
        }

        /**
         * Procesa una respuesta con error a una solicitud de un servicio remoto.
         *
         * @param requestConfig el objeto que representa la respuesta con error de la solicitud.
         * @return la misma solicitud aumentada para ser monitoreada.
         */
        public responseError(rejection) {
            if (rejection.config && rejection.config.monitoreada) {
                this.actualizarContador(rejection.config.method, -1);
            }
            return this.$q.reject(rejection);
        }

        /**
         * Constructor de la clase SolicitudesPendientesInterceptor
         * 
         * @param $q el servicio para crear operaciones encoladas
         * @param guardiaNavegacionService el servicio que permite ser notificado de que el usuario desea navegar fuera de la página.
         */
        constructor($q: ng.IQService, guardiaNavegacionService: abaxXBRL.services.GuardianNavegarFueraPaginaService) {
            this.$q = $q;
            this.guardiaNavegacionService = guardiaNavegacionService;

            var self = this;
            this.guardiaNavegacionService.registrarGuardian(function (): string {
                return self.contadorSolicitudesPendientes > 0 ? shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_SOLICITUDES_PENDIENTES') : undefined;
            });
        }
    }
    SolicitudesPendientesInterceptor.SolicitudesPendientesFactory.$inject = ['$q', 'guardiaNavegacionService'];

    /**
     * Implementación de un servicio AngularJS el cual está encargado de supervisar si el usuario navega fuera de la página actual en la aplicación.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class GuardianNavegarFueraPaginaService {

        /** El servicio para acceder a la ventana del navegador */
        private $window: ng.IWindowService;

        /** El servicio que permite acceder al scope raiz */
        private $rootScope: ng.IRootScopeService;

        /** La lista de guardianes registrados */
        private guardianes: Array<() => string>;

        /** El servicio para controlar la navegación en el sitio */
        private $state: ng.ui.IStateService;

        /**
         * Registra un nuevo guardian que desee ser notificado cada vez que el usuario desee navegar fuera de la página actual.
         *
         * @param guardian una función que será invocada cada que el usuario desee navegar fuera de la página, deberá regresar un mensaje al usuario en caso de que desee apelar al usuario para cancelar dicha acción.
         * @return una función que puede ser utilizada para de-registrar el guardian.
         */
        public registrarGuardian(guardian: () => string): () => void {
            this.guardianes.unshift(guardian);
            var self = this;
            return function () {
                var indice = self.guardianes.indexOf(guardian);
                if (indice >= 0) {
                    self.guardianes.splice(indice, 1);
                }
            };
        }

        /** 
         * Desregistra todos los guardianes actualmente registrados en el servicio.
         */
        public depurarGuardianes(): void {
            this.guardianes = new Array<() => string>();
        }

        /**
         *Inicializa el servicio
         */
        private init() {

            var self = this;

            /**
             * Obtiene un mensaje obtenido por alguno de los guardianes registrados. El primer guardian que regrese un mensaje será el procesado.
             *
             * @return un mensaje que deberá ser presentado al usuario en caso de que no se desee que el usuario navegue fuera de la página.
             */
            var getMensajeGuardian = function (): string {
                var mensaje: string = undefined;

                if (self.guardianes && self.guardianes.length && self.guardianes.length > 0) {
                    for (var i = 0; i < self.guardianes.length; i++) {
                        var guardianEncontrado = !!(mensaje = self.guardianes[i]());
                        if (guardianEncontrado) {
                            break;
                        }
                    }
                }

                return mensaje;
            }

            /**
             * Procesa el evento OnBeforeUnload de la ventana del navegador.
             *
             * @return el mensaje que deberá ser mostrado al usuario en el navegador en caso de que no se desee que navegue fuera de la página
             */
            var onBeforeUnloadHandler = function ($event: BeforeUnloadEvent): string {
                var mensaje = getMensajeGuardian();
                if (mensaje) {
                    ($event || self.$window.event).returnValue = mensaje;
                    return mensaje;
                } else {
                    return undefined;
                }
            }

            /**
             * Procesa el evento LocationChangeStart de Angular el cual notifica que el usuario desea navegar fuera de la página.
             */
            var locationChangeStartHandler = function ($event: ng.IAngularEvent, toState: ng.ui.IState, toParams: {}, fromState: ng.ui.IState, fromParams: {}) {
                var mensaje = getMensajeGuardian();
                if (mensaje) {
                    $event.preventDefault();
                    shared.service.AbaxXBRLUtilsService
                        .muestraMensajeConfirmacion(mensaje, "TITULO_PROMPT_SALIR_SIN_GUARDAR")
                        .then(
                        function (confirmado: boolean) {
                            if (confirmado) {
                                self.depurarGuardianes();
                                self.$state.go(toState.name, toParams);
                            }
                        }
                        );
                }
                return;
            }

            if (this.$window.addEventListener) {
                this.$window.addEventListener('beforeunload', onBeforeUnloadHandler);
            } else {
                this.$window.onbeforeunload = onBeforeUnloadHandler;
            }

            this.$rootScope.$on('$stateChangeStart', locationChangeStartHandler);
        }

        /**
         * Constructor de la clase NavegarFueraPaginaService
         *
         * @param $state Servicio para el manejo de cambios de estadoen las vistas.
         */
        constructor($window: ng.IWindowService, $rootScope: ng.IRootScopeService, $state: ng.ui.IStateService) {
            this.$window = $window;
            this.$rootScope = $rootScope;
            this.guardianes = new Array<() => string>();
            this.$state = $state;

            this.init();
        }

        /**
         * Método fábrica para obtener una instancia del servicio para ser notificado cuando el usuario navega fuera de la página actual
         */
        public static GuardianNavegarFueraPaginaServiceFactory($window: ng.IWindowService, $rootScope: ng.IRootScopeService, $state: ng.ui.IStateService): GuardianNavegarFueraPaginaService {
            return new GuardianNavegarFueraPaginaService($window, $rootScope, $state);
        }
    }
    GuardianNavegarFueraPaginaService.GuardianNavegarFueraPaginaServiceFactory.$inject = ['$window', '$rootScope', '$state'];
}