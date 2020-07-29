module abaxXBRL.directives {
    
    /**
    * Directiva que implementa la definición de un editor aritmetico.
    **/
    export class AbaxXbrlEditorAritmenticoDirective {


        public static factory(): ng.IDirective {
            return {
                restrict: 'E',
                scope: {
                    abaxOperacion: '='
                },
                controller: AbaxXbrlEditorAritmeticoController,
                templateUrl: "abax-xbrl/shared/directivas/editor-aritmetico/abax-xbrl-editor-aritmetico-template.html?version=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
            };
        }
    }

    

    /**
    * Scope de la directiva del editor aritmentico.
    **/
    export interface AbaxXbrlEditorAritmeticoScope extends ng.IScope {

        /**
        * Entidad que representa la operación aritmetica mostrada.
        **/
        abaxOperacion: shared.modelos.IOperacionAritmetica;
        /**
        * Agregaga un operador de tipo parentesis que agrupa un conjunto de aplicaciones.
        **/
        agregaParentesis(): void;

        /**
        * Agrega un operador suma.
        **/
        agregaSuma(): void;
    }
    /**
    * Controlador de la vista del editor aritmetico.
    **/
    export class AbaxXbrlEditorAritmeticoController {

        /**
        * Scope de la vista a mostrar.
        **/
        private $scope: AbaxXbrlEditorAritmeticoScope;

        /**
        * Agrega un operador suma.
        **/
        private agregaSuma(): void {

        }

        /**
        * Agregaga un operador de tipo parentesis que agrupa un conjunto de aplicaciones.
        **/
        private agregaParentesis(): void {

        }
        
        /**
        * Inicializa los elementos del scope.
        **/
        private init(): void {

            var $self = this;
            var $scope = $self.$scope;
            $scope.agregaParentesis = function () { $self.agregaParentesis(); };
            $scope.agregaSuma = function () { $self.agregaSuma();};

        }

        /**
        * Constructor de la clase.
        **/
        constructor($scope: AbaxXbrlEditorAritmeticoScope) {
            this.$scope = $scope;

            this.init();
        }
    }

    AbaxXbrlEditorAritmeticoController.$inject = ['$scope'];
}
 