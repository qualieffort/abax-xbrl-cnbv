
module abaxXBRL.componentes.controllers {

    /**Contrato con la definición de los elementos del scope para la vista inicio. **/
    export interface IAbaxVisorXBRLScope extends IAbaxXBRLInicioScope {
       
    }
    /**Controlador principal de la vista de inicio, su scope sirve de puente de comunicación entre los diferentes componentes (header, navegación y contenido) del sitio una vez iniciada la sesion.**/
    export class AbaxVisorXBRLController {
        /**Scope actual del componente **/
        private $scope: IAbaxVisorXBRLScope;
        /**Servicio para el manejo de la sesion. **/
        private abaxXBRLSessionService: shared.service.AbaxXBRLSessionService;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;
        /**Servicio para el manejo de etiquetas en multilenguaje **/
        private $translate: ng.translate.ITranslateService;
        /**Servicio de utilerias genericas de abax. **/
        private abaxXBRLUtilsService: shared.service.AbaxXBRLUtilsService

      
        
        /**Inicializa los elementos del controller. **/
        private init(): void {
            //proxy de la instancia
            var self: AbaxVisorXBRLController = this;
            var scope: IAbaxVisorXBRLScope = self.$scope;
            var $state = self.$state;   

            var currentState = $state.current.name;
            //Si no se inicio en el estado correcto (el usuario esta navegando con los botones del browser) o metio la url directamente.
            if (currentState != 'inicio.visorXBRL') {
                //Cargamos el estado inicial desde 0 aunque se pierde el historial de navegación.
                $state.go('inicio.visorXBRL');
            }
            
        }
        /**
        * Constructor base de la clase
        * @param $scope Scope actual del login.
        * @param abaxXBRLSessionService Servicio para el manejo de la sesion.
        * @param $state Servicio para el cambio de estado de las vistas dentro del sitio.
        * @param $translate Servicio para el manejo de multi idioma.
        * @param abaxXBRLUtilsService Servicio de utilerias genericas de abax.
        **/
        constructor(
            $scope: IAbaxVisorXBRLScope,
            abaxXBRLSessionService: shared.service.AbaxXBRLSessionService,
            $state: ng.ui.IStateService,
            $translate: ng.translate.ITranslateService,
            abaxXBRLUtilsService: shared.service.AbaxXBRLUtilsService) {
            this.$scope = $scope;
            this.abaxXBRLSessionService = abaxXBRLSessionService;
            this.$state = $state;
            this.$translate = $translate;
            this.abaxXBRLUtilsService = abaxXBRLUtilsService;
            this.init();
        }
    }
    AbaxVisorXBRLController.$inject = ['$scope', 'abaxXBRLSessionService', '$state', '$translate', 'abaxXBRLUtilsService'];
}  