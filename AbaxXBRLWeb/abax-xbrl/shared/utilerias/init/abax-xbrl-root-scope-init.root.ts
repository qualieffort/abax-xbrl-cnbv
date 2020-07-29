module abaxXBRL.utilerias.init {

    /**
   * Definición de scope con atributos personalizados genericos.
   **/
    export interface IAbaxRootScope extends ng.IScope {
        /**
        * Diccionario que contiene la configuaración base de los estilos de la aplicación.
        **/
        abaxStyle: IAbaxXBRLEstilo
    }

    /**
    * Configuración de atributos de scope raíz que serán consultados por todos los elementos de la aplicación.
    **/
    export class AbaxXBRLRootScopeInit {

        /**
        * Scope raíz de la aplicación.
        **/
        private static $abaxRootScope: IAbaxRootScope;
        /**
        * Servicio de Lacy load para la carga de dependencias.
        **/
        private static $ocLazyLoad: oc.ILazyLoad;
        /**
        * Obtiene el estilo que será aplicado en Abax XBRL.
        **/
        private static obtenEstilo(clave: string): IAbaxXBRLEstilo {
            var $self = AbaxXBRLRootScopeInit;
            var valida: boolean = clave && clave != null && clave.trim().length > 0;
            var estilo: IAbaxXBRLEstilo = undefined;
            if (valida) {
                estilo = AbaxXBRLEstilos.DEFINICION[clave];
            }

            if (!estilo) {
                estilo = AbaxXBRLEstilos.DEFINICION["default"];
            }

            if (estilo.dependenciasCss && estilo.dependenciasCss != null) {
                $self.$ocLazyLoad.load(estilo.dependenciasCss);
            }

            return estilo;
        }

        /**
        * Inicializa los elementos del scope raíz de la aplicación.
        **/
        private static init(): void {
            var $self = AbaxXBRLRootScopeInit;
            $self.$abaxRootScope.abaxStyle = $self.obtenEstilo(root.AbaxXBRLConstantesRoot.VERSION_APP.estiloPersonalizado);
        }

        /**
        * Constructor por defecto de la clase.
        * @param $rootScope Scoper raíz de la aplicación AbaxXBRL.
        * @param $ocLazyLoad Servicio para la carga de dependencias.
        **/
        constructor($rootScope: IAbaxRootScope, $ocLazyLoad: oc.ILazyLoad) {
            var $self = AbaxXBRLRootScopeInit;
            $self.$abaxRootScope = $rootScope;
            $self.$ocLazyLoad = $ocLazyLoad;
            $self.init();
        }
    }
    AbaxXBRLRootScopeInit.$inject = ['$rootScope', '$ocLazyLoad'];
} 