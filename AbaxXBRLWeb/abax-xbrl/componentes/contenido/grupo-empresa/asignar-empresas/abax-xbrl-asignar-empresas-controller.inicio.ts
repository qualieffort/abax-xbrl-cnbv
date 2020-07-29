module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAsignaEmpresasAGrupoScope extends IAbaxXBRLInicioScope {
        /**
        * Lista de elementos sobre los que se realizará la asignación.
        **/
        listaElementosPropietarios: Array<abaxXBRL.shared.modelos.ISelectItem>;
        /**
        * Elemento propietario sobre el que se esta realizando la asingación actual.
        **/
        propietario: abaxXBRL.shared.modelos.ISelectItem;
        /**
        * Dto para referenciar el elementos seleccionado en el combo de propietarios.
        **/
        propietarioSeleccionado: shared.modelos.ISelectItem;
        /**
        * Bandera que indica que se están cargando los propietarios.
        **/
        cargandoPropietarios: boolean;
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
        listaExistentes: Array<shared.modelos.ISelectItem>
        /**
        * Bandera que indica aun se está  esperando la respuesta del servidor.
        **/
        cargandoExistentes: boolean;
        /**
        * Arreglo con los asignables que ya han sido asignados al elemento actual.
        **/
        listaAsignados: Array<shared.modelos.ISelectItem>
        /**
        * Bandera que indica que se están cargando los tipos de empresa del elemento actual.
        **/
        cargandoAsignados: boolean;
        /**
        * Diccionario con checks de las propieadades seleccinadas.
        **/
        listaChecks: { [idElemento: number]: boolean }
        /**
        * Asinga los tipos seleccionados a la empresa actual.
        **/
        asignarTodos();
        /**
        * Quita los tipos seleccionados de la empresa actual.
        **/
        quitarTodos();
        /**
        * Arreglo con los asignables que no han sido asignados al elemento actual.
        **/
        listaNoAsignados: Array<shared.modelos.ISelectItem>
        /**
        * Acutaliza los tipos asignados de la empresa actual.
        **/
        guardar();
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de los tipos de empresa de la izquierda.
        **/
        checkAllLeft: boolean;
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de los tipos de empresa de la derecha.
        **/
        checkAllRight: boolean;
        /**
        * Bandera que indica que se esta procesando una solicitud de guardar.
        **/
        guardando: boolean;
        /**
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro de propietario cambia.
        **/
        onChangeElementoPropietario();
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
    export class AbaxXBRLAsignaEmpresasGrupoEmpresasController {
        /** 
       * El scope del controlador 
       **/
        private $scope: AbaxXBRLAsignaEmpresasAGrupoScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /**
        * Determina las elementos no asignados.
        **/
        private determinaNoAsignados(): void {
            var scope = this.$scope;
            var listaExistentes = scope.listaExistentes;
            var listaAsignados = scope.listaAsignados;
            var listaNoAsignados = new Array<shared.modelos.ISelectItem>();
            var listCheck: { [idTipoEmpresa: number]: boolean } = {};

            for (var indexExistente = 0; indexExistente < listaExistentes.length; indexExistente++) {
                var existente = listaExistentes[indexExistente];
                var estaAsignado = false;
                for (var indexAsignados = 0; indexAsignados < listaAsignados.length; indexAsignados++) {
                    var asignado = listaAsignados[indexAsignados];
                    if (existente.Valor == asignado.Valor) {
                        estaAsignado = true;
                        break;
                    }
                }
                if (!estaAsignado) {
                    listaNoAsignados.push(existente);
                }
                listCheck[existente.Valor] = false;
            }
            scope.listaNoAsignados = listaNoAsignados;
            scope.listaChecks = listCheck;
        }

        /**
        * Obtiene los elementos asignados a la empresa.
        **/
        private obtenAsignados(): void {

            var self = this;
            var scope = self.$scope;

            if (!scope.propietario.Valor && !(scope.propietario.Valor.length > 0 )) {
                return;
            }
            var url = AbaxXBRLConstantes.OBTEN_EMPRESAS_ASINGADAS_GRUPO_EMPRESA_PATH;
            var onSucess = function (result: any) { self.determinaNoAsignados(); };
            var idPropietario = scope.propietario.Valor;
            var parametros: { [id: string]: string } = { "idPropietario": idPropietario.toString() };
            this.abaxXBRLRequestService.asignaResultadoPost(url, parametros, scope, 'listaAsignados', 'cargandoAsignados').then(onSucess);
        }
        /**
        * Obtiene los tipos existentes en la empresa actual.
        **/
        private obtenExistentes(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTEN_EMPRESAS_ASIGNABLES_GRUPO_EMPRESA_PATH;
            var onSucess = function (result: any) { self.obtenAsignados(); };
            var idPropietario = scope.propietario.Valor;
            var parametros: { [id: string]: string } = {};
            this.abaxXBRLRequestService.asignaResultadoPost(url, parametros, scope, 'listaExistentes', 'cargandoExistentes').then(onSucess);
        }

        /**
       * Asigna los tipos seleccinados a la empresa.
       **/
        private guardar() {
            var self = this;
            var scope = self.$scope;

            var idPropietario = scope.propietario.Valor;
            var listaAsignados = scope.listaAsignados;
            
            var url = AbaxXBRLConstantes.GUARDA_ASINGACION_EMPRESAS_GRUPO_EMPRESA_PATH;
            var idsAsignados = new Array<number>();
            for (var index = 0; index < listaAsignados.length; index++) { idsAsignados.push(listaAsignados[index].Valor); }
            var json = angular.toJson(idsAsignados);
            var onSucess = function (response: any) { self.onGuardarSucess(response.data); };
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            scope.guardando = true;
            self.abaxXBRLRequestService.post(url, { "listaJson": json, "idPropietario": idPropietario },false, true).then(onSucess, onError);

        }
        /**
        * Procesa el resultado de la respuesta al evento guardar del servidor.
        * @resultado Resultado obtenido de la operación.
        **/
        private onGuardarSucess(resultado: shared.modelos.IResultadoOperacion) {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;

            if (resultado.Resultado) {
                var mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZO_GRUPO_EMPRESAS", {
                    "NOMBRE": self.$scope.propietario.Etiqueta
                });
                util.ExitoBootstrap(mensaje);
                util.cambiarEstadoVistasA("inicio.listaGrupoEmpresas");
            } else {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_GRUPO_EMPRESAS", {
                    "NOMBRE": self.$scope.propietario.Etiqueta
                });
                util.ErrorBootstrap(mensaje);
            }
            self.$scope.guardando = false;
        }

        /**
       * Busca de un arreglo de elementos aquellas que esten checadas y las retorna.
       * @param evaluar Lista de elementos a evaluar.
       * @return Lista de elementos que están checadas del listado ingresado.
       **/
        private getElementosChecados(evaluar: Array<shared.modelos.ISelectItem>): Array<shared.modelos.ISelectItem> {
            var checks = this.$scope.listaChecks;
            var checadas = new Array<shared.modelos.ISelectItem>();
            for (var index = 0; index < evaluar.length; index++) {
                var evaluado = evaluar[index];
                if (checks[evaluado.Valor]) {
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

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'Valor');
            this.desmarcaTodo();
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

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'Valor');
            this.desmarcaTodo();
        }
        /**
        * Desmarca todos los elementos seleccionados.
        **/
        private desmarcaTodo(): void {
            var self = this;
            var scope = self.$scope;
            var asignadas = filters.AbaxXBRLAsignarFilter.getResultadoFiltro(AbaxXBRLConstantes.ATRIBUTO_FILTRO_ASIGNADAS_VISBLES);
            var noAsignadas = filters.AbaxXBRLAsignarFilter.getResultadoFiltro(AbaxXBRLConstantes.ATRIBUTO_FILTRO_NO_ASIGNADAS_VISBLES);
            scope.checkAllLeft = false;
            scope.checkAllRight = false;
            self.setCheckAll(asignadas, false);
            self.setCheckAll(noAsignadas, false);
        }
        /**
        * Asigna el valor al check de la lista de elementos.
        * @param evaluar Lista de elementos a evaluar.
        * @param value Valor que se asignara al check correspondiente.
        **/
        private setCheckAll(evaluar: Array<shared.modelos.ISelectItem>, value: boolean) {
            if (evaluar && evaluar.length > 0) {
                var checks = this.$scope.listaChecks;
                for (var index = 0; index < evaluar.length; index++) {
                    var evaluado = evaluar[index];
                    checks[evaluado.Valor] = value;
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
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro de emisoras.
        **/
        private onChangeElementoPropietario() {
            var self = this;
            var scope = self.$scope;
            scope.propietario = scope.propietarioSeleccionado;
            if (scope.propietario && scope.propietario.Valor.length > 0) {
                self.obtenAsignados();
            }
        }

        /**
        * Llena el listado de empresas.
        **/
        private cargaComboPropietarios(): void {
            var self: AbaxXBRLAsignaEmpresasGrupoEmpresasController = this;
            var scope: AbaxXBRLAsignaEmpresasAGrupoScope = self.$scope;

            var onSuccess = function () {
                self.determinaPropietarioSeleccionadoActual();
                self.obtenExistentes();
            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            var url = AbaxXBRLConstantes.OBTEN_GRUPOS_EMPRESAS_COMBO_PATH;
            self.abaxXBRLRequestService.asignaResultadoPost(url, {}, scope, 'listaElementosPropietarios', 'cargandoPropietarios').then(onSuccess);
        }
        /**
        * Itera el listado de elementos para determinar cual debe considerarse como el seleccionado.
        **/
        private determinaPropietarioSeleccionadoActual(): void {
            var $self = this;
            var $scope = $self.$scope;
            var listaPropietarios = $scope.listaElementosPropietarios;
            var propietarioActual = $scope.propietario;
            
            var indexItem: number;
            for (indexItem = 0; indexItem < listaPropietarios.length; indexItem++) {
                var item: shared.modelos.ISelectItem = listaPropietarios[indexItem];
                if (item.Valor == propietarioActual.Valor) {
                    $scope.propietarioSeleccionado = item;
                    break;
                }
            }
        }

        /**
        * Inicializa los elementos del scope.
        **/
        private init() {

            var self = this;
            var scope = self.$scope;
            var util = shared.service.AbaxXBRLUtilsService;

            scope.listaElementosPropietarios = Array<shared.modelos.ISelectItem>();
            scope.propietario = util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR);
            
            scope.cargandoPropietarios = true;
            scope.filtroLeft = '';
            scope.filtroRight = '';
            scope.listaExistentes = Array<shared.modelos.ISelectItem>();
            scope.cargandoExistentes = true;
            scope.listaAsignados = Array<shared.modelos.ISelectItem>();
            scope.cargandoAsignados = true;
            scope.listaChecks = {}
            scope.asignarTodos = function (): void { self.asignarTodos(); };
            scope.quitarTodos = function (): void { self.quitarTodos(); };
            scope.guardar = function (): void { self.guardar(); };
            scope.listaNoAsignados = Array<shared.modelos.ISelectItem>();
            scope.checkAllLeft = false;
            scope.checkAllRight = false;
            scope.guardando = false;
            scope.onChangeElementoPropietario = function () { self.onChangeElementoPropietario(); };
            scope.checkAllAsignadas = function () { self.checkAllAsignadas(); };
            scope.checkAllNoAsignadas = function () { self.checkAllNoAsignadas(); };

            self.cargaComboPropietarios();
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual de la vista.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: AbaxXBRLAsignaEmpresasAGrupoScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }
    AbaxXBRLAsignaEmpresasGrupoEmpresasController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
} 