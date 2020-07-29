module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAsignaRolesUsuariosScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de usuarios a los que se les pretende asiganr el rol.
        **/
        usuarios: Array<shared.modelos.IUsuario>;
        /**
        * Bandera que indica que se esta esperando la respuesta del servdor a la petisión de usuarios.
        **/
        cargandoUsuarios: boolean;
        /**
        * Filtro para del chosen superior de la vista.
        **/
        usuarioSeleccionado: shared.modelos.IUsuario;
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
        listaExistentes: Array<shared.modelos.IRol>
        /**
        * Bandera que indica aun se está  esperando la respuesta del servidor.
        **/
        cargandoExistentes: boolean;
        /**
        * Arreglo con los asignables que ya han sido asignados al elemento actual.
        **/
        listaAsignados: Array<shared.modelos.IRol>
        /**
        * Bandera que indica que se están cargando los roles del elemento actual.
        **/
        cargandoAsignados: boolean;
        /**
        * Diccionario con checks de las propieadades seleccinadas.
        **/
        listaChecks: { [idUsuario: number]: boolean }
        /**
        * Asinga los roles seleccionados al usuario actual.
        **/
        asignarTodos();
        /**
        * Quita los roles seleccionados del usuario actual.
        **/
        quitarTodos();
        /**
        * Arreglo con los asignables que no han sido asignados al elemento actual.
        **/
        listaNoAsignados: Array<shared.modelos.IRol>
        /**
        * Acutaliza los roles asignados del elemento actual.
        **/
        guardar();
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de los roles de la izquierda.
        **/
        checkAllLeft: boolean;
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de los roles de la derecha.
        **/
        checkAllRight: boolean;
        /**
        * Bandera que indica que se esta procesando una solicitud de guardar.
        **/
        guardando: boolean;
        /**
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro de emisora.
        **/
        onChangeEmisora();
        /**
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro de usuario.
        **/
        onChangeUsuario();
        /**
        * Marca o desmarca la lista de elementos asignados visibles.
        **/
        checkAllAsignadas();
        /**
        * Marca o desmarca la lista de elementos no asignados visibles.
        **/
        checkAllNoAsignadas();
        /**
        * Bandera que indica si solo se deben de considerar los usuarios de la emrpesa en sesion.
        **/
        mismaEmpresa: boolean;
        /**
        * Lista de emisoras.
        **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;
        /**
        * Bandera que indica si solo se deben de considerar los usuarios de la emrpesa en sesion.
        **/
        emisoraSeleccionada: abaxXBRL.shared.modelos.IEmisora;
        /**
        * Bandera que indica que se esta esperando la respuesta del servdor a la petisión de emisoras.
        **/
        cargandoEmisoras: boolean;
    }

    /**
    * Controlador de la vista.
    **/
    export class AbaxXBRLAsignaRolesUsuariosController {
        /** 
       * El scope del controlador 
       **/
        private $scope: AbaxXBRLAsignaRolesUsuariosScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /**
        * Determina las elementos no asignados.
        **/
        private determinaFacultadesNoAsignadas(): void {
            var scope = this.$scope;
            var listaExistentes = scope.listaExistentes;
            var listaAsignadas = scope.listaAsignados;
            var listaNoAsignados = new Array<shared.modelos.IRol>();
            var listCheck: { [idRol: number]: boolean } = {};

            for (var indexExistente = 0; indexExistente < listaExistentes.length; indexExistente++) {
                var existente = listaExistentes[indexExistente];
                var estaAsignada = false;
                for (var indexAsignadas = 0; indexAsignadas < listaAsignadas.length; indexAsignadas++) {
                    var asignada = listaAsignadas[indexAsignadas];
                    if (existente.IdRol == asignada.IdRol) {
                        estaAsignada = true;
                        break;
                    }
                }
                if (!estaAsignada) {
                    listaNoAsignados.push(existente);
                }
                listCheck[existente.IdRol] = false;
            }
            scope.listaNoAsignados = listaNoAsignados;
            scope.listaChecks = listCheck;
        }

        /**
        * Obtiene los elementos asignados al usuario.
        **/
        private obtenAsignados(): void {

            var self = this;
            var scope = self.$scope;

            if (!scope.usuarioSeleccionado) {
                return;
            }
            var url = AbaxXBRLConstantes.OBTEN_ROLES_ASIGNADOS_USUARIOS;
            var onSucess = function (result: any) { self.determinaFacultadesNoAsignadas(); };
            var idUsuario = scope.usuarioSeleccionado.IdUsuario;
            var idEmpresa = scope.emisoraSeleccionada.IdEmpresa;
            var parametros: { [id: string]: string } = { "idEmpresa": idEmpresa.toString(), "idUsuario": idUsuario.toString() };
            this.abaxXBRLRequestService.asignaResultadoPost(url, parametros, scope, 'listaAsignados', 'cargandoAsignados').then(onSucess);
        }
        /**
        * Obtiene los roles existentes en la empresa actual.
        **/
        private obtenExistentes(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTEN_ROLES_POR_EMPRESAS_USUARIO;
            var onSucess = function (result: any) { self.obtenAsignados(); };
            var idEmpresa = scope.emisoraSeleccionada.IdEmpresa;
            var idUsuario = scope.usuarioSeleccionado.IdUsuario;
            var parametros: { [id: string]: string } = { "idEmpresa": idEmpresa.toString(), "idUsuario": idUsuario.toString() };
            this.abaxXBRLRequestService.asignaResultadoPost(url, parametros, scope, 'listaExistentes', 'cargandoExistentes').then(onSucess);
        }
        /**
        * Dispara la solicitud al servidor para obtener los elementos existentes a los que se les pueden asignar los roles.
        **/
        private obtenUsuarios(usuarioYaSeleccionado = false): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTEN_USUARIOS_POR_EMPRESA;
            var parametros: { [id: string]: string } = { "idEmpresa": scope.emisoraSeleccionada.IdEmpresa.toString() };
            var onSucess = function (response: any) {
                if (!usuarioYaSeleccionado) {
                    scope.usuarioSeleccionado = scope.usuarios[0];
                }
                self.obtenExistentes();
            };
            this.abaxXBRLRequestService.asignaResultadoPost(url, parametros, scope, 'usuarios', 'cargandoUsuarios').then(onSucess);
        }

        /**
       * Asigna las facultades seleccinadas la usuario.
       **/
        private guardar() {
            var self = this;
            var scope = self.$scope;

            var idEmpresa = scope.emisoraSeleccionada.IdEmpresa;
            var idUsuario = scope.usuarioSeleccionado.IdUsuario;
            var listaAsignados = scope.listaAsignados;

            if (listaAsignados.length == 0) {
                shared.service.AbaxXBRLUtilsService.AlertaBootstrap(shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_WARNING_ASIGNAR_ROLES"));
                return;
            }
            
            var url = AbaxXBRLConstantes.ASIGNA_ROLES_USUARIO;
            var idsAsignados = new Array<number>();
            for (var index = 0; index < listaAsignados.length; index++) { idsAsignados.push(listaAsignados[index].IdRol); }
            var json = angular.toJson(idsAsignados);
            var onSucess = function (response: any) { self.onGuardarSucess(response.data); };
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            scope.guardando = true;
            self.abaxXBRLRequestService.post(url, { "listaJson": json, "idEmpresa": idEmpresa, "idUsuario": idUsuario.toString() },false, true).then(onSucess, onError);

        }
        /**
        * Procesa el resultado de la respuesta al evento guardar del servidor.
        * @resultado Resultado obtenido de la operación.
        **/
        private onGuardarSucess(resultado: shared.modelos.IResultadoOperacion) {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;
            var elemento = self.$scope.usuarioSeleccionado;
            var nombre = elemento.Nombre + " " + elemento.ApellidoPaterno + " " + elemento.ApellidoMaterno;
            var esUsuarioEmpresa = self.$scope.mismaEmpresa ? 1 : 0;
            if (resultado.Resultado) {
                var mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZAR_ROLES_USUARIO", { "NOMBRE": nombre });
                util.ExitoBootstrap(mensaje);
                self.$state.go("inicio.usuario.indice", { esUsuarioEmpresa: esUsuarioEmpresa });
            } else {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_ROLES_USUARIO", { "NOMBRE": nombre });
                util.ErrorBootstrap(mensaje);
            }
            self.$scope.guardando = false;
        }

        /**
       * Busca de un arreglo de elementos aquellas que esten checadas y las retorna.
       * @param evaluar Lista de elementos a evaluar.
       * @return Lista de elementos que están checadas del listado ingresado.
       **/
        private getElementosChecados(evaluar: Array<shared.modelos.IRol>): Array<shared.modelos.IRol> {
            var checks = this.$scope.listaChecks;
            var checadas = new Array<shared.modelos.IRol>();
            for (var index = 0; index < evaluar.length; index++) {
                var evaluado = evaluar[index];
                if (checks[evaluado.IdRol]) {
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

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdRol');
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

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdRol');
        }
        /**
        * Asigna el valor al check de la lista de elementos.
        * @param evaluar Lista de elementos a evaluar.
        * @param value Valor que se asignara al check correspondiente.
        **/
        private setCheckAll(evaluar: Array<shared.modelos.IRol>, value: boolean) {
            if (evaluar && evaluar.length > 0) {
                var checks = this.$scope.listaChecks;
                for (var index = 0; index < evaluar.length; index++) {
                    var evaluado = evaluar[index];
                    checks[evaluado.IdRol] = value;
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
        private onChangeEmisora() {
            var self = this;
            var scope = self.$scope;

            if (scope.emisoraSeleccionada) {
                self.obtenUsuarios();
            }
        }

        /**
        * Listener a ejecutar cuando cambia el valor seleccionado del filtro de usuarios.
        **/
        private onChangeUsuario() {
            var self = this;
            var scope = self.$scope;

            if (scope.usuarioSeleccionado) {
                self.obtenAsignados();
            }
        }

        /**
        * Llena el listado de usuarios.
        **/
        private cargarEmisoras(emisoraYaSeleccionada = false): void {
            var self: AbaxXBRLAsignaRolesUsuariosController = this;
            var scope: AbaxXBRLAsignaRolesUsuariosScope = self.$scope;

            var onSuccess = function () {
                if (!emisoraYaSeleccionada) {
                    scope.emisoraSeleccionada = scope.emisoras[0];
                    self.obtenUsuarios();
                } else {
                    self.obtenUsuarios(true);
                }
            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            var url = AbaxXBRLConstantes.OBTENER_EMISORAS_PATH;
            self.abaxXBRLRequestService.asignaResultadoPost(url, {}, scope, 'emisoras', 'cargandoEmisoras').then(onSuccess);
        }

        /**
        * Inicializa los elementos del scope.
        **/
        private init() {

            var self = this;
            var scope = self.$scope;

            scope.usuarios = Array<shared.modelos.IUsuario>();
            scope.emisoras = Array<shared.modelos.IEmisora>();

            scope.mismaEmpresa = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_MISMA_EMPRESA) ? true : false;
            shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_MISMA_EMPRESA);
            scope.usuarioSeleccionado = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO);
            shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO);

            if (!scope.mismaEmpresa) {
                scope.emisoraSeleccionada = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO_2);
                shared.service.AbaxXBRLSessionService.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO_2);
            } else {
                scope.emisoraSeleccionada = { IdEmpresa: shared.service.AbaxXBRLSessionService.getSesionInmediate().IdEmpresa, NombreCorto: null };
            }
            
            scope.cargandoEmisoras = true;
            scope.cargandoUsuarios = true;
            scope.filtroLeft = "";
            scope.filtroRight = "";
            scope.listaExistentes = Array<shared.modelos.IRol>();
            scope.cargandoExistentes = true;
            scope.listaAsignados = Array<shared.modelos.IRol>();
            scope.cargandoAsignados = true;
            scope.listaChecks = {}
            scope.asignarTodos = function (): void { self.asignarTodos(); };
            scope.quitarTodos = function (): void { self.quitarTodos(); };
            scope.guardar = function (): void { self.guardar(); };
            scope.listaNoAsignados = Array<shared.modelos.IRol>();
            scope.checkAllLeft = false;
            scope.checkAllRight = false;
            scope.guardando = false;
            scope.onChangeEmisora = function () { self.onChangeEmisora(); };
            scope.onChangeUsuario = function () { self.onChangeUsuario(); };
            scope.checkAllAsignadas = function () { self.checkAllAsignadas(); };
            scope.checkAllNoAsignadas = function () { self.checkAllNoAsignadas(); };

            self.cargarEmisoras(true);
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual de la vista.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: AbaxXBRLAsignaRolesUsuariosScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }
    AbaxXBRLAsignaRolesUsuariosController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
} 