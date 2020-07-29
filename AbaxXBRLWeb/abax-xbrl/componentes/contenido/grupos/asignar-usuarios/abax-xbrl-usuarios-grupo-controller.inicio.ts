module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAsignaUsuariosGrupoScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de grupos a los que se les pretende asiganr el usuario.
        **/
        listadoElementos: Array<shared.modelos.IGrupoUsuario>;
        /**
        * Bandera que indica que se esta esperando la respuesta del servdor a la petisión de grupos.
        **/
        cargandoElementos: boolean;
        /**
        * Filtro para del chosen superior de la vista.
        **/
        filtroChosenTop: shared.modelos.IGrupoUsuario;
        /**
        * Filtro de la lista de la izquierda.
        **/
        filtroLeft: string;
        /**
        * Filtro de la lista de la derecha.
        **/
        filtroRight: string;
        /**
        * Arreglo con todos los elementos asignables.
        **/
        listaExistentes: Array<shared.modelos.IUsuario>
        /**
        * Bandera que indica aun se está  esperando la respuesta del servidor.
        **/
        cargandoExistentes: boolean;
        /**
        * Arreglo con los asignables que ya han sido asignados al elemento actual.
        **/
        listaAsignados: Array<shared.modelos.IUsuario>
        /**
        * Bandera que indica que se están cargando los usuarios del elemento actual.
        **/
        cargandoAsignados: boolean;
        /**
        * Diccionario con checks de las propieadades seleccinadas.
        **/
        listaChecks: { [idGrupoUsuario: number]: boolean }
        /**
        * Asinga los usuarios seleccionados al grupo actual.
        **/
        asignarTodos();
        /**
        * Quita los usuarios seleccionados del grupo actual.
        **/
        quitarTodos();
        /**
        * Arreglo con los asignables que no han sido asignados al elemento actual.
        **/
        listaNoAsignados: Array<shared.modelos.IUsuario>
        /**
        * Acutaliza los usuarios asignados del elemento actual.
        **/
        guardar();
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de los usuarios de la izquierda.
        **/
        checkAllLeft: boolean;
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de los usuarios de la derecha.
        **/
        checkAllRight: boolean;
        /**
        * Arreglo con los usuarios asignados visibles en el contenedor.
        **/
        asignadasVisibles: Array<shared.modelos.IUsuario>;
        /**
        * Arreglo con los usuarios no asignados visibles en el contenedor.
        **/
        noAsignadasVisibles: Array<shared.modelos.IUsuario>;
        /**
        * Bandera que indica que se esta procesando una solicitud de guardar.
        **/
        guardando: boolean;
        /**
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro principal de elementos.
        **/
        onChangeFiltroTop();
        /**
        * Marca o desmarca la lista de elementos asignados visibles.
        **/
        checkAllAsignadas();
        /**
        * Marca o desmarca la lista de elementos no asignados visibles.
        **/
        checkAllNoAsignadas();
    }

    /**
    * Controlador de la vista.
    **/
    export class AbaxXBRLAsignaUsuariosGruposController {

        /** 
       * El scope del controlador 
       **/
        private $scope: AbaxXBRLAsignaUsuariosGrupoScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService;

        /**
        * Determina las elementos no asignados.
        **/
        private determinaFacultadesNoAsignadas(): void {
            var scope = this.$scope;
            var listaExistentes = scope.listaExistentes;
            var listaAsignadas = scope.listaAsignados;
            var listaNoAsignados = new Array<shared.modelos.IUsuario>();
            var listCheck: { [IdUsuario: number]: boolean } = {};

            for (var indexExistente = 0; indexExistente < listaExistentes.length; indexExistente++) {
                var existente = listaExistentes[indexExistente];
                var estaAsignada = false;
                for (var indexAsignadas = 0; indexAsignadas < listaAsignadas.length; indexAsignadas++) {
                    var asignada = listaAsignadas[indexAsignadas];
                    if (existente.IdUsuario == asignada.IdUsuario) {
                        estaAsignada = true;
                        break;
                    }
                }
                if (!estaAsignada) {
                    listaNoAsignados.push(existente);
                }
                listCheck[existente.IdUsuario] = false;
            }
            scope.listaNoAsignados = listaNoAsignados;
            scope.listaChecks = listCheck;
        }

        /**
        * Obtiene los elementos asignados al grupo.
        **/
        private obtenAsignados(): void {

            var self = this;
            var scope = self.$scope;

            if (!scope.filtroChosenTop) {
                return;
            }
            var url = AbaxXBRLConstantes.OBTEN_USUARIOS_GRUPO_PATH;
            var onSucess = function (result: any) { self.determinaFacultadesNoAsignadas(); };
            var idGrupoUsuarios = scope.filtroChosenTop.IdGrupoUsuarios;
            var parametros: { [id: string]: string } = { "idGrupoUsuarios": idGrupoUsuarios.toString() };
            this.abaxXBRLRequestService.asignaResultadoPost(url, parametros, scope, 'listaAsignados', 'cargandoAsignados').then(onSucess);
        }
        /**
        * Obtiene los roles existentes en la empresa actual.
        **/
        private obtenExistentes(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTEN_USUARIOS_EMPRESA_PATH;;
            var onSucess = function (result: any) { self.obtenAsignados(); };
            this.abaxXBRLRequestService.asignaResultadoPost(url, {}, scope, 'listaExistentes', 'cargandoExistentes').then(onSucess);
        }
        /**
        * Dispara la solicitud al servidor para obtener los elementos existentes a los que se les pueden asignar los roles.
        **/
        private obtenElementos(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTEN_GRUPOS_USUARIOS_EMPRESA_PATH;
            var onSucess = function (response: any) { self.onObtenElementosSucess(response.data); };
            this.abaxXBRLRequestService.asignaResultadoPost(url, {}, scope, 'listadoElementos', 'cargandoElementos').then(onSucess);
        }
        /**
        * Asigna el filtro principal en base al listado de elementos existentes.
        **/
        private onObtenElementosSucess(resultado: shared.modelos.IResultadoOperacion) {
            var scope = this.$scope;
            var listadoElementos = scope.listadoElementos;
            var idElemento = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO);
            for (var index = 0; index < listadoElementos.length; index++) {
                var elemento = listadoElementos[index];
                if (idElemento == elemento.IdGrupoUsuarios) {
                    scope.filtroChosenTop = elemento;
                    break;
                }
            }
            if (!scope.filtroChosenTop) { scope.filtroChosenTop = listadoElementos[0]; }
            this.obtenExistentes();
        }

        /**
       * Asigna las facultades seleccinadas la usuario.
       **/
        private guardar() {
            var self = this;
            var scope = self.$scope;
            var idGrupoUsuarios = scope.filtroChosenTop.IdGrupoUsuarios;
            var listaAsignados = scope.listaAsignados;
            var url = AbaxXBRLConstantes.ASIGNA_USUARIOS_A_GRUPO_PATH;
            var idsAsignados = new Array<number>();
            for (var index = 0; index < listaAsignados.length; index++) { idsAsignados.push(listaAsignados[index].IdUsuario); }
            var json = angular.toJson(idsAsignados);
            var onSucess = function (response: any) { self.onGuardarSucess(response.data); };
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            scope.guardando = true;
            self.abaxXBRLRequestService.post(url, { "listaJson": json, "idGrupoUsuarios": idGrupoUsuarios.toString() }).then(onSucess, onError);

        }
        /**
        * Procesa el resultado de la respuesta al evento guardar del servidor.
        * @resultado Resultado obtenido de la operación.
        **/
        private onGuardarSucess(resultado: shared.modelos.IResultadoOperacion) {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;
            var elemento = self.$scope.filtroChosenTop;
            if (resultado.Resultado) {
                var mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZAR_USUARIOS_GRUPO", { "NOMBRE": elemento.Nombre });
                util.ExitoBootstrap(mensaje);
                self.$state.go("inicio.grupos");
            } else {
                console.log(resultado);
                var mensaje = util.getValorEtiqueta(resultado.Mensaje);
                util.ErrorBootstrap(mensaje);
            }
            self.$scope.guardando = false;
        }

        /**
       * Busca de un arreglo de elementos aquellas que esten checadas y las retorna.
       * @param evaluar Lista de elementos a evaluar.
       * @return Lista de elementos que están checadas del listado ingresado.
       **/
        private getElementosChecados(evaluar: Array<shared.modelos.IUsuario>): Array<shared.modelos.IUsuario> {
            var checks = this.$scope.listaChecks;
            var checadas = new Array<shared.modelos.IUsuario>();
            for (var index = 0; index < evaluar.length; index++) {
                var evaluado = evaluar[index];
                if (checks[evaluado.IdUsuario]) {
                    checadas.push(evaluado);
                }
            }
            return checadas;
        }

        /**
        * Asinga los elementos seleccionados.
        **/
        private asignarTodos(): void {
            var scope = this.$scope;
            var visibles = filters.AbaxXBRLAsignarFilter.getResultadoFiltro(AbaxXBRLConstantes.ATRIBUTO_FILTRO_NO_ASIGNADAS_VISBLES);
            var elementos = this.getElementosChecados(visibles);
            var origen = scope.listaNoAsignados;
            var destino = scope.listaAsignados;

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdUsuario');
        }

        /**
        * Quita los elementos seleccionados.
        **/
        private quitarTodos(): void {
            var scope = this.$scope;
            var visibles = filters.AbaxXBRLAsignarFilter.getResultadoFiltro(AbaxXBRLConstantes.ATRIBUTO_FILTRO_ASIGNADAS_VISBLES);
            var elementos = this.getElementosChecados(visibles);
            var origen = scope.listaAsignados;
            var destino = scope.listaNoAsignados;

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdUsuario');
        }
        /**
        * Asigna el valor al check de la lista de elementos.
        * @param evaluar Lista de elementos a evaluar.
        * @param value Valor que se asignara al check correspondiente.
        **/
        private setCheckAll(evaluar: Array<shared.modelos.IUsuario>, value: boolean) {
            if (evaluar && evaluar.length > 0) {
                var checks = this.$scope.listaChecks;
                for (var index = 0; index < evaluar.length; index++) {
                    var evaluado = evaluar[index];
                    checks[evaluado.IdUsuario] = value;
                }
            }
        }
        /**
        * Marca o desmarca la lista de elementos asignados visibles.
        **/
        private checkAllAsignadas() {
            var self = this;
            var scope = self.$scope;
            var arreglo = filters.AbaxXBRLAsignarFilter.getResultadoFiltro(AbaxXBRLConstantes.ATRIBUTO_FILTRO_ASIGNADAS_VISBLES);
            scope.checkAllLeft = !scope.checkAllLeft;
            self.setCheckAll(arreglo, scope.checkAllLeft);

        }

        /**
        * Marca o desmarca la lista de elementos no asignados visibles.
        **/
        private checkAllNoAsignadas() {
            var self = this;
            var scope = self.$scope;
            var arreglo = filters.AbaxXBRLAsignarFilter.getResultadoFiltro(AbaxXBRLConstantes.ATRIBUTO_FILTRO_NO_ASIGNADAS_VISBLES);
            scope.checkAllRight = !scope.checkAllRight;
            self.setCheckAll(arreglo, scope.checkAllRight);
        }

        /**
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro principal de elementos.
        **/
        private onChangeFiltroTop() {
            var self = this;
            var scope = this.$scope;

            if (scope.filtroChosenTop) {
                self.obtenAsignados();
            }
        }

        /**
        * Inicializa los elementos del scope.
        **/
        private init() {

            var self = this;
            var scope = self.$scope;

            scope.listadoElementos = Array<shared.modelos.IGrupoUsuario>();
            scope.cargandoElementos = true;
            scope.filtroChosenTop = undefined;
            scope.filtroLeft = "";
            scope.filtroRight = "";
            scope.listaExistentes = Array<shared.modelos.IUsuario>();
            scope.cargandoExistentes = true;
            scope.listaAsignados = Array<shared.modelos.IUsuario>();
            scope.cargandoAsignados = true;
            scope.listaChecks = {}
            scope.asignarTodos = function (): void { self.asignarTodos(); };
            scope.quitarTodos = function (): void { self.quitarTodos(); };
            scope.guardar = function (): void { self.guardar(); };
            scope.listaNoAsignados = Array<shared.modelos.IUsuario>();
            scope.checkAllLeft = false;
            scope.checkAllRight = false;
            scope.asignadasVisibles = Array<shared.modelos.IUsuario>();
            scope.noAsignadasVisibles = Array<shared.modelos.IUsuario>();
            scope.guardando = false;
            scope.onChangeFiltroTop = function () { self.onChangeFiltroTop(); };
            scope.checkAllAsignadas = function () { self.checkAllAsignadas(); };
            scope.checkAllNoAsignadas = function () { self.checkAllNoAsignadas(); };

            self.obtenElementos();
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual de la vista.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: AbaxXBRLAsignaUsuariosGrupoScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }
    AbaxXBRLAsignaUsuariosGruposController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
}  