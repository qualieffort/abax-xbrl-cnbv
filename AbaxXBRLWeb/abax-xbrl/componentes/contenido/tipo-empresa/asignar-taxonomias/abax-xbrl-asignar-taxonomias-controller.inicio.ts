module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAsignaTaxonomiasScope extends IAbaxXBRLInicioScope {
        /**
        * Lista de tipos de empresa.
        **/
        tiposEmpresa: Array<abaxXBRL.shared.modelos.ITipoEmpresa>;
        /**
        * Tipo de empresa seleccionada.
        **/
        tipoEmpresaSeleccionado: abaxXBRL.shared.modelos.ITipoEmpresa;
        /**
        * Bandera que indica que se esta esperando la respuesta del servdor a la petición de tipps de empresa.
        **/
        cargandoTiposEmpresas: boolean;
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
        listaExistentes: Array<shared.modelos.ITaxonomiaXbrl>
        /**
        * Bandera que indica aun se está  esperando la respuesta del servidor.
        **/
        cargandoExistentes: boolean;
        /**
        * Arreglo con los asignables que ya han sido asignados al elemento actual.
        **/
        listaAsignados: Array<shared.modelos.ITaxonomiaXbrl>
        /**
        * Bandera que indica que se están cargando las taxonomias del elemento actual.
        **/
        cargandoAsignados: boolean;
        /**
        * Diccionario con checks de las propieadades seleccinadas.
        **/
        listaChecks: { [idTaxonomiaXbrl: number]: boolean }
        /**
        * Asinga las taxonomias seleccionadas al tipo de empresa actual.
        **/
        asignarTodos();
        /**
        * Quita las taxonomias seleccionadas del tipo de empresa actual.
        **/
        quitarTodos();
        /**
        * Arreglo con los asignables que no han sido asignados al elemento actual.
        **/
        listaNoAsignados: Array<shared.modelos.ITaxonomiaXbrl>
        /**
        * Acutaliza las taxonomias asignadas del tipo de empresa actual.
        **/
        guardar();
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de las taxonomias de la izquierda.
        **/
        checkAllLeft: boolean;
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de las taxonomias de la derecha.
        **/
        checkAllRight: boolean;
        /**
        * Bandera que indica que se esta procesando una solicitud de guardar.
        **/
        guardando: boolean;
        /**
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro de tipo de empresa.
        **/
        onChangeTipoEmpresa();
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
    export class AbaxXBRLAsignaTaxonomiasController {
        /** 
       * El scope del controlador 
       **/
        private $scope: AbaxXBRLAsignaTaxonomiasScope;

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
            var listaNoAsignados = new Array<shared.modelos.ITaxonomiaXbrl>();
            var listCheck: { [idTaxonomiaXbrl: number]: boolean } = {};

            for (var indexExistente = 0; indexExistente < listaExistentes.length; indexExistente++) {
                var existente = listaExistentes[indexExistente];
                var estaAsignado = false;
                for (var indexAsignados = 0; indexAsignados < listaAsignados.length; indexAsignados++) {
                    var asignado = listaAsignados[indexAsignados];
                    if (existente.IdTaxonomiaXbrl == asignado.IdTaxonomiaXbrl) {
                        estaAsignado = true;
                        break;
                    }
                }
                if (!estaAsignado) {
                    listaNoAsignados.push(existente);
                }
                listCheck[existente.IdTaxonomiaXbrl] = false;
            }
            scope.listaNoAsignados = listaNoAsignados;
            scope.listaChecks = listCheck;
        }

        /**
        * Obtiene los elementos asignados al tipo de empresa.
        **/
        private obtenAsignados(): void {

            var self = this;
            var scope = self.$scope;

            if (!scope.tipoEmpresaSeleccionado) {
                return;
            }
            var url = AbaxXBRLConstantes.OBTEN_TAXONOMIAS_ASIGNADAS_PATH;
            var onSucess = function (result: any) { self.determinaNoAsignados(); };
            var idTipoEmpresa = scope.tipoEmpresaSeleccionado.IdTipoEmpresa;
            var parametros: { [id: string]: string } = { "idTipoEmpresa": idTipoEmpresa.toString() };
            this.abaxXBRLRequestService.asignaResultadoPost(url, parametros, scope, 'listaAsignados', 'cargandoAsignados').then(onSucess);
        }
        /**
        * Obtiene las taxonomias existentes en el tipo de empresa actual.
        **/
        private obtenExistentes(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.CONSULTA_TAXONOMIAS_PATH;
            var onSucess = function (result: any) { self.obtenAsignados(); };
            var idTipoEmpresa = scope.tipoEmpresaSeleccionado.IdTipoEmpresa;
            var parametros: { [id: string]: string } = { "idTipoEmpresa": idTipoEmpresa.toString() };
            this.abaxXBRLRequestService.asignaResultadoPost(url, parametros, scope, 'listaExistentes', 'cargandoExistentes').then(onSucess);
        }

        /**
       * Asigna las taxonomias seleccinadas al tipo de empresa.
       **/
        private guardar() {
            var self = this;
            var scope = self.$scope;

            var idTipoEmpresa = scope.tipoEmpresaSeleccionado.IdTipoEmpresa;
            var listaAsignados = scope.listaAsignados;
            
            var url = AbaxXBRLConstantes.ASIGNA_TAXONOMIAS_PATH;
            var idsAsignados = new Array<number>();
            for (var index = 0; index < listaAsignados.length; index++) { idsAsignados.push(listaAsignados[index].IdTaxonomiaXbrl); }
            var json = angular.toJson(idsAsignados);
            var onSucess = function (response: any) { self.onGuardarSucess(response.data); };
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            scope.guardando = true;
            self.abaxXBRLRequestService.post(url, { "listaJson": json, "idTipoEmpresa": idTipoEmpresa },false, true).then(onSucess, onError);

        }
        /**
        * Procesa el resultado de la respuesta al evento guardar del servidor.
        * @resultado Resultado obtenido de la operación.
        **/
        private onGuardarSucess(resultado: shared.modelos.IResultadoOperacion) {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;

            if (resultado.Resultado) {
                var mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZAR_TAXONOMIAS", {
                    "NOMBRE": self.$scope.tipoEmpresaSeleccionado.Nombre
                });
                util.ExitoBootstrap(mensaje);
                util.cambiarEstadoVistasA("inicio.tipoEmpresaListado");
            } else {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_TAXONOMIAS", {
                    "NOMBRE": self.$scope.tipoEmpresaSeleccionado.Nombre
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
        private getElementosChecados(evaluar: Array<shared.modelos.ITaxonomiaXbrl>): Array<shared.modelos.ITaxonomiaXbrl> {
            var checks = this.$scope.listaChecks;
            var checadas = new Array<shared.modelos.ITaxonomiaXbrl>();
            for (var index = 0; index < evaluar.length; index++) {
                var evaluado = evaluar[index];
                if (checks[evaluado.IdTaxonomiaXbrl]) {
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

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdTaxonomiaXbrl');
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

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdTaxonomiaXbrl');
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
        private setCheckAll(evaluar: Array<shared.modelos.ITaxonomiaXbrl>, value: boolean) {
            if (evaluar && evaluar.length > 0) {
                var checks = this.$scope.listaChecks;
                for (var index = 0; index < evaluar.length; index++) {
                    var evaluado = evaluar[index];
                    checks[evaluado.IdTaxonomiaXbrl] = value;
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
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro de tipos de empresa.
        **/
        private onChangeTipoEmpresa() {
            var self = this;
            var scope = self.$scope;

            if (scope.tipoEmpresaSeleccionado) {
                self.obtenAsignados();
            }
        }

        /**
        * Llena el listado de tipos de empresa.
        **/
        private cargarTiposEmpresa(tipoEmpresaYaSeleccionado = false): void {
            var self: AbaxXBRLAsignaTaxonomiasController = this;
            var scope: AbaxXBRLAsignaTaxonomiasScope = self.$scope;

            var onSuccess = function () {
                self.obtenExistentes();
            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            var url = AbaxXBRLConstantes.CONSULTA_TIPOS_EMPRESA_PATH;
            self.abaxXBRLRequestService.asignaResultadoPost(url, { 'comoResultado': '' }, scope, 'tiposEmpresa', 'cargandoTiposEmpresa').then(onSuccess);
        }

        /**
        * Inicializa los elementos del scope.
        **/
        private init() {

            var self = this;
            var scope = self.$scope;
            var util = shared.service.AbaxXBRLUtilsService;

            scope.tiposEmpresa = Array<shared.modelos.ITipoEmpresa>();
            scope.tipoEmpresaSeleccionado = util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO);
            
            scope.cargandoTiposEmpresas = true;
            scope.filtroLeft = '';
            scope.filtroRight = '';
            scope.listaExistentes = Array<shared.modelos.ITaxonomiaXbrl>();
            scope.cargandoExistentes = true;
            scope.listaAsignados = Array<shared.modelos.ITaxonomiaXbrl>();
            scope.cargandoAsignados = true;
            scope.listaChecks = {}
            scope.asignarTodos = function (): void { self.asignarTodos(); };
            scope.quitarTodos = function (): void { self.quitarTodos(); };
            scope.guardar = function (): void { self.guardar(); };
            scope.listaNoAsignados = Array<shared.modelos.ITaxonomiaXbrl>();
            scope.checkAllLeft = false;
            scope.checkAllRight = false;
            scope.guardando = false;
            scope.onChangeTipoEmpresa = function () { self.onChangeTipoEmpresa(); };
            scope.checkAllAsignadas = function () { self.checkAllAsignadas(); };
            scope.checkAllNoAsignadas = function () { self.checkAllNoAsignadas(); };

            self.cargarTiposEmpresa(true);
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual de la vista.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: AbaxXBRLAsignaTaxonomiasScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }
    AbaxXBRLAsignaTaxonomiasController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
} 