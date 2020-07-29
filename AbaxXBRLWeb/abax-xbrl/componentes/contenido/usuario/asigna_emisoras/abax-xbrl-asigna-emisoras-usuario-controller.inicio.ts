module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAsignaEmisorasUsuarioScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de usuarios a mostrar.
        **/
        listadoUsuarios: Array<shared.modelos.IUsuario>;
        /**
        * Bandera que indica que se esta esperando la respuesta del servdor a la petisión de usuarios.
        **/
        cargandoUsuarios: boolean;
        /**
        * Filtro para del chosen superior de la vista de asingación de emisoras.
        **/
        filtroChosenTop: shared.modelos.IUsuario;
        /**
        * Texto para filtrar las emisoras de la izquierda.
        **/
        filtroLeft: string;
        /**
        * Arreglo con el total de emisoras existentes.
        **/
        listaEmisoras: Array<shared.modelos.IEmisora>
        /**
        * Bandera que indica aun se está  esperando la respuesta del servidor.
        **/
        cargandoEmisoras: boolean;
        /**
        * Arreglo con las facutades que tiene asignadas el usuario actual.
        **/
        listaEmisorasAsignadas: Array<shared.modelos.IEmisora>
        /**
        * Bandera que indica que se están cargando las emisoras asignadas al usuario.
        **/
        cargandoEmisorasAsignadas: boolean;
        /**
        * Diccionario que indica que emisoras fueron checadas.
        **/
        listaChecks: { [idEmisora: number]: boolean }
        /**
        * Asinga las emisoras seleccionadas.
        **/
        asignarTodos();
        /**
        * Quita las emisoras seleccionadas.
        **/
        quitarTodos();
        /**
        * Bandera que indica que se están cargando las emisoras No asignadas al usuario.
        **/
        listaEmisorasNoAsignadas: Array<shared.modelos.IEmisora>
        /**
        * Actualiza las emisoras asignadas al usuario.
        **/
        guardar();
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de las emisoras de la izquierda.
        **/
        checkAllLeft: boolean;
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de las emisoras de la derecha.
        **/
        checkAllRight: boolean;
        /**
        * Arreglo con las emisoras asignadas visibles en el contenedor.
        **/
        asignadasVisibles: Array<shared.modelos.IEmisora>;
        /**
        * Arreglo con las emisoras no asignadas visibles en el contenedor.
        **/
        noAsignadasVisibles: Array<shared.modelos.IEmisora>;
        /**
        * Bandera que indica que se esta procesando una solicitud de guardar.
        **/
        guardando: boolean;
    }

    /**
     * Definición de la estructura del scope para el servicio de parametros de ruta
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface IAbaxXBRLAsignaEmisorasUsuarioRouteParams extends ng.ui.IStateParamsService {
        id: number;
    }

    /**
    * Controlador de la vista de usuarios.
    **/
    export class AbaxXBRLAsignaEmisorasUsuarioController {
        /** 
        * El scope del controlador 
        **/
        private $scope: AbaxXBRLAsignaEmisorasUsuarioScope;

        /** Servicio para controlar los parametros de la ruta de navegación */
        private $stateParams: IAbaxXBRLAsignaEmisorasUsuarioRouteParams;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;
        
        /**
        * Llena el listado de usuarios.
        **/
        private obtenUsuarios(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTENER_USUARIOS_PATH;
            var onSucess = function () { self.asignaUsuarioPorSesion(); };

            this.abaxXBRLRequestService.asignaResultadoPost(url, { "esUsuarioEmpresa":"0"}, scope, 'listadoUsuarios', 'cargandoUsuarios').then(onSucess);
        }
        /**
        * Busca y asigna en el listado de usuarios el usuario pasado por parametro.
        **/
        private asignaUsuarioPorSesion() {
            var scope = this.$scope;
            var listadoUsuarios = scope.listadoUsuarios;
            var idUsuario = this.$stateParams.id;
            for (var index = 0; index < listadoUsuarios.length; index++) {
                var usuario = listadoUsuarios[index];
                if (idUsuario == usuario.IdUsuario) {
                    scope.filtroChosenTop = usuario;
                    break;
                }
            }
            if (!scope.filtroChosenTop) { scope.filtroChosenTop = listadoUsuarios[0]; }
            this.obtenEmisoras();
            this.obtenEmisorasUsuario();
        }
        /**
        * Llena el listado de usuarios.
        **/
        private obtenEmisoras(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTENER_EMISORAS_PATH;
            var onSucess = function (result: any) { self.determinaEmisorasNoAsignadas(); };
            this.abaxXBRLRequestService.asignaResultadoPost(url, {}, scope, 'listaEmisoras', 'cargandoEmisoras').then(onSucess);
        }

        /**
       * Llena el listado de usuarios.
       **/
        private obtenEmisorasUsuario(): void {

            var self = this;
            var scope = self.$scope;

            if (!scope.filtroChosenTop) {
                return;
            }


            var url = AbaxXBRLConstantes.OBTENER_EMISORAS_USUARIO_PATH;
            var onSucess = function (result: any) { self.determinaEmisorasNoAsignadas(); };
            var idUsuario = scope.filtroChosenTop.IdUsuario;
            this.abaxXBRLRequestService.asignaResultadoPost(url, { "idUsuario": idUsuario.toString() }, scope, 'listaEmisorasAsignadas', 'cargandoEmisorasAsignadas').then(onSucess);
        }
        /**
        * Determina las emisoras no asignadas en base al total de emisoras y las emisoras asignadas.
        **/
        private determinaEmisorasNoAsignadas(): void {
            var scope = this.$scope;
            if (scope.cargandoEmisoras || scope.cargandoEmisorasAsignadas) {
                return;
            }
            var listaEmisoras = scope.listaEmisoras;
            var listaAsignadas = scope.listaEmisorasAsignadas;
            var listaNoAsignadas = new Array<shared.modelos.IEmisora>();
            var listCheck: { [idEmisora: number]: boolean } = {};

            for (var indexEmisora = 0; indexEmisora < listaEmisoras.length; indexEmisora++) {
                var emisora = listaEmisoras[indexEmisora];
                var estaAsignada = false;
                for (var indexAsignadas = 0; indexAsignadas < listaAsignadas.length; indexAsignadas++) {
                    var asignada = listaAsignadas[indexAsignadas];
                    if (emisora.IdEmpresa == asignada.IdEmpresa) {
                        estaAsignada = true;
                        break;
                    }
                }
                if (!estaAsignada) {
                    listaNoAsignadas.push(emisora);
                }
                listCheck[emisora.IdEmpresa] = false;
            }
            scope.listaEmisorasNoAsignadas = listaNoAsignadas;
            scope.listaChecks = listCheck;
        }
        /**
        * Asigna las emisoras seleccinadas la usuario.
        **/
        private guardar() {
            var self = this;
            var scope = self.$scope;
            var idUsuario = scope.filtroChosenTop.IdUsuario;
            var idsEmisoras = Array<number>();
            var listaEmisoras = scope.listaEmisorasAsignadas;
            for (var indexEmisora = 0; indexEmisora < listaEmisoras.length; indexEmisora++) {
                var emisora = listaEmisoras[indexEmisora];
                idsEmisoras.push(emisora.IdEmpresa);
            }

            var url = AbaxXBRLConstantes.ASIGNA_EMISORAS_USUARIO_PATH;
            var idsEmisoras = new Array<number>();
            for (var index = 0; index < listaEmisoras.length; index++) { idsEmisoras.push(listaEmisoras[index].IdEmpresa); }

            if (idsEmisoras.length == 0) {
                shared.service.AbaxXBRLUtilsService.AlertaBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('MENSAJE_WARNING_ASIGNAR_EMISORAS'));
                return;
            }

            var json = angular.toJson(idsEmisoras);
            var onSucess = function (response: any) { self.onGuardarSucess(response.data); };
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { scope.guardando = false; };
            scope.guardando = true;
            self.abaxXBRLRequestService.post(url, { "listaJson": json, "idUsuario": idUsuario.toString() }).then(onSucess, onError).finally(onFinally);

        }
        /**
        * Procesa el resultado de la respuesta al evento guardar del servidor.
        * @resultado Resultado obtenido de la operación.
        **/
        private onGuardarSucess(resultado: shared.modelos.IResultadoOperacion) {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;
            var usuario = self.$scope.filtroChosenTop;
            var usuarioTxt = usuario.Nombre + ' ' + usuario.ApellidoPaterno + ' ' + usuario.ApellidoMaterno;
            if (resultado.Resultado) {
                var mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZAR_EMISORAS_USUARIO", { "NOMBRE_USUARIO": usuarioTxt });
                util.ExitoBootstrap(mensaje);
                self.$state.go("inicio.usuario.indice", { esUsuarioEmpresa: 0 });
            } else {
                console.log(resultado.Mensaje);
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_EMISORAS_USUARIO", { "NOMBRE_USUARIO": usuarioTxt });
                util.ErrorBootstrap(mensaje);
            }
        }

        /**
        * Busca de un arreglo de emisoras aquellas que esten checadas y las retorna.
        * @param emisoras Lista de emisoras a evaluar.
        * @return Lista de emisoras que están checadas del listado ingresado.
        **/
        private getElementosChecados(fcultades: Array<shared.modelos.IEmisora>): Array<shared.modelos.IEmisora> {
            var checks = this.$scope.listaChecks;
            var emisorasChecadas = new Array<shared.modelos.IEmisora>();
            for (var indexEmisora = 0; indexEmisora < fcultades.length; indexEmisora++) {
                var emisora = fcultades[indexEmisora];
                if (checks[emisora.IdEmpresa]) {
                    emisorasChecadas.push(emisora);
                }
            }

            return emisorasChecadas;
        }

        /**
        * Asinga las emisoras seleccionadas.
        **/
        private asignarTodos(): void {
            var scope = this.$scope;
            var visibles = filters.AbaxXBRLAsignarFilter.getResultadoFiltro('noAsignadasVisibles');
            var elementos = this.getElementosChecados(visibles);
            var origen = scope.listaEmisorasNoAsignadas;
            var destino = scope.listaEmisorasAsignadas;

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdEmpresa');
        }

        /**
        * Quita las emisoras seleccionadas.
        **/
        private quitarTodos(): void {
            var scope = this.$scope;
            var visibles = filters.AbaxXBRLAsignarFilter.getResultadoFiltro('asignadasVisibles');
            var elementos = this.getElementosChecados(visibles);
            var origen = scope.listaEmisorasAsignadas;
            var destino = scope.listaEmisorasNoAsignadas;

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdEmpresa');
        }
        /**
        * Asigna el valor al check de emisoras para la lista de emisoras dadas.
        * @param emisoras Lista de emisoras a evaluar.
        * @param value Valor que se asignara al check correspondiente.
        **/
        private setCheckValue(emisoras, value) {
            if (emisoras && emisoras.length > 0) {
                var checks = this.$scope.listaChecks;
                for (var indexEmisora = 0; indexEmisora < emisoras.length; indexEmisora++) {
                    var emisora = emisoras[indexEmisora];
                    checks[emisora.IdEmpresa] = value;
                }
            }
        }
        
        /**Inicializa los elementos del constructor.**/
        private init(): void {
            var self = this;
            var scope = self.$scope;

            scope.cargandoEmisoras = true;
            scope.cargandoEmisorasAsignadas = true;
            scope.cargandoUsuarios = true;
            scope.guardando = false;

            scope.asignadasVisibles = [];
            scope.noAsignadasVisibles = [];

            scope.guardar = function () { self.guardar() };
            scope.asignarTodos = function () { self.asignarTodos(); };
            scope.quitarTodos = function () { self.quitarTodos(); };

            scope.$watch('filtroChosenTop', function () {
                if (scope.filtroChosenTop) {
                    scope.cargandoEmisorasAsignadas = true;
                    self.obtenEmisorasUsuario();
                }
            });

            scope.$watch('checkAllLeft', function () {
                if (scope.checkAllLeft != undefined) {
                    var arreglo = filters.AbaxXBRLAsignarFilter.getResultadoFiltro('asignadasVisibles');
                    self.setCheckValue(arreglo, scope.checkAllLeft);
                }
            });
            scope.$watch('checkAllRight', function () {
                if (scope.checkAllRight != undefined) {
                    var arreglo = filters.AbaxXBRLAsignarFilter.getResultadoFiltro('noAsignadasVisibles');
                    self.setCheckValue(arreglo, scope.checkAllRight);
                }
            });

            self.obtenUsuarios();
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual del login.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: AbaxXBRLAsignaEmisorasUsuarioScope,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService,
            $state: ng.ui.IStateService,
            $stateParams: IAbaxXBRLAsignaEmisorasUsuarioRouteParams) {
                this.$scope = $scope;
                this.abaxXBRLRequestService = abaxXBRLRequestService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.init();
        }
    }
    AbaxXBRLAsignaEmisorasUsuarioController.$inject = ['$scope', 'abaxXBRLRequestService', '$state', '$stateParams'];
}