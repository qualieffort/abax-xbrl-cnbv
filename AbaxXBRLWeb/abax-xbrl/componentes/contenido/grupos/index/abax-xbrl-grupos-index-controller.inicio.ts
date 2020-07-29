module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLGruposIndexScope extends IAbaxXBRLInicioScope {

        /**
        * Exporta la lista de roles a excel.
        **/
        exportaAExcel(): void;
        /**
        * Muestra la vista para el registro de un nuevo rol.
        **/
        registrarNuevo();
        /**
        * Listado de roles a mostrar.
        **/
        listadoTabla: Array<shared.modelos.IGrupoUsuario>;
        /**
        * Bandera que indica que aun no se han obtenido los roles de la empresa.
        **/
        cargandoTabla: boolean;
        /**
        * Bandera que indica que no existen roles en la empresa.
        **/
        existenElementos: boolean;
        /**
        * Muestra la vista para la signación de roles.
        * @param elemento Elemento al que se la asignaran los roles.
        **/
        asignarRoles(elemento: shared.modelos.IGrupoUsuario): void; 
        /**
        * Muestra la vista para la signación de usuarios.
        * @param elemento Elemento al que se la asignaran los usuarios.
        **/
        asignarUsuarios(elemento: shared.modelos.IGrupoUsuario): void; 
        /**
        * Muestra la vista para editar los datos del rol indicado.
        * @param rol Rol que se pretende editar.
        **/
        editar(elemento: shared.modelos.IGrupoUsuario): void;
        /**
        * Solicita la confirmación para la eliminación del rol (¿Esta Seguro de Borrar el Rol?) y
        * si es positiva se elimina el rol de la empresa.
        * @param rol Rol que se pretende eliminar.
        **/
        eliminar(elemento: shared.modelos.IGrupoUsuario): void;
        /**
        * Objeto con las opcines de configuración del datatable local.
        **/
        opcionesDataTableLocal: any;
        /**
        * Referencia a la instancia del datatable.
        **/
        dataTableInstance: any;
        /**
        * Valor del campo para el filtrado de datos.
        **/
        filtroBusqueda: string;
        /**
        * Dto con los valores del grupo que se esta editando o registrando.
        **/
        entidad: shared.modelos.IGrupoUsuario;
        /**
        * Accion que se dispara al precionar el botón guardar.
        **/
        guardar();
        /**
        * Bandera que indica que se esta procesando una solicitud de guardar.
        **/
        guardando: boolean;
        /**
        * Bandera que indica que se esta exportando el listado a excel.
        **/
        exportando: boolean;
        /**
        * Bandera que indica si se esta editando o registrando.
        **/
        editando: boolean;

        /**
        * Formulario a validar.
        **/
        formulario: ng.IFormController;
    }

    /**
   * Controlador de la vista.
   **/
    export class AbaxXBRLGruposUsuariosIndexController {

        /** 
        * El scope del controlador 
        **/
        private $scope: AbaxXBRLGruposIndexScope;

        /**
        * Servicio para el manejo de las peticiones al servidor. 
        **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        
        /** 
        * Servicio para presentar diálogos modales al usuario 
        **/
        private $modal: ng.ui.bootstrap.IModalService;

        /**
        * Servicio para el cambio de estado de las vistas dentro del sitio. 
        **/
        private $state: ng.ui.IStateService = null;
        /**
        * Valor de la porpiedad sDom del data table cuando no existen elementos suficientes para utilizar el páginado.
        **/
        private get DOM_DATA_TABLE_SIN_PAGINAR():string { return "t"; }
        /**
        * Valor de la porpiedad sDom del data table cuando no existen elementos suficientes para utilizar el páginado.
        **/
        private get DOM_DATA_TABLE_PAGINADA(): string { return "<'row'<'col-sm-6'l><'col-sm-6'>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>"; }

        /**
        * Llena el listado de grupos empresa.
        **/
        private obtenElementosTabla(): void {
            var self = this;
            var scope = self.$scope;
            var onSuccess = function (result: any) { self.onObtenElementosTablaSuccess(result.data); }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            scope.cargandoTabla = true;
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTEN_GRUPOS_USUARIOS_EMPRESA_PATH, {}).then(onSuccess, onError);
        }
        /** 
        * Procesa la respuesta asincrona de la solicitud de grupos.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenElementosTablaSuccess(resultado: shared.modelos.IResultadoOperacion) {
            var listado: Array<any> = resultado.InformacionExtra;
            var scope = this.$scope;
            if (listado && listado.length > 0) {

                scope.listadoTabla = listado;
                scope.existenElementos = true;
                var paging = listado.length > 10;
                scope.opcionesDataTableLocal.withOption("paging", paging);
                if (!paging) {
                    scope.opcionesDataTableLocal.withOption("sDom", "t");
                } else {
                    scope.opcionesDataTableLocal.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
                }
            } else {
                scope.existenElementos = false;
            }
            scope.cargandoTabla = false;
            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });
        }

      /**
      * Elimina el grupo indicado.
      * @param rol Grupo Usuario que se pretende eliminar.
      **/
        private eliminar(elemento: shared.modelos.IGrupoUsuario): void {
            var self = this;
            var parametros: { [nombre: string]: string } = {};
            parametros["NOMBRE"] = elemento.Nombre;
            shared.service.AbaxXBRLUtilsService.muestraMensajeConfirmacion("MENSAJE_CONFIRM_ELIMINAR_GRUPO_USUARIOS", "TITULO_PROMPT_ELIMINAR_GRUPO", parametros)
                .then(function (confirmado: boolean) {
                if (confirmado) {
                    self.ejecutaEliminar(elemento.IdGrupoUsuarios);
                }
            });
        }
        /**
        * Envia la solicitud al servidor para eliminar el grupo.
        **/
        private ejecutaEliminar(idGrupoUsuarios: number): void {
            var self = this;
            var onSuccess = function (result: any) { self.onejecutaEliminarSuccess(result.data); }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.ELIMINAR_GRUPOS_USUARIOS_PATH, { "idGrupoUsuarios": idGrupoUsuarios.toString() }).then(onSuccess, onError);
        }
        /**
        * Procesa la respuesta del servido cuando se elimina un rol.
        * @param resultado: Respuesta del servidor.
        **/
        private onejecutaEliminarSuccess(resultado: shared.modelos.IResultadoOperacion) {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;
            var msg: string = '';

            if (resultado.Resultado == true) {
                msg = util.getValorEtiqueta("MENSAJE_EXITO_ELIMINAR_GRUPO_USUARIO");
                util.ExitoBootstrap(msg);
            } else {
                msg = util.getValorEtiqueta("MENSAJE_ERROR_ELIMINAR_GRUPO_USUARIO");
                util.ErrorBootstrap(msg);
            }

            self.obtenElementosTabla();
        }
        /**
        * Valido los campos del formulario.
        * @return Si el formulario es valido.
        **/
        private validaCamposGuardar():boolean {
            var self = this;
            var scope = self.$scope;
            var entidad = scope.entidad;
            var util = shared.service.AbaxXBRLUtilsService;
            var nombre:string = entidad.Nombre;
            var descripcion:string = entidad.Descripcion;
            var valido: boolean = true;
            if (!nombre || !nombre.length || nombre.length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CAMPO_NOMBRE_REQUERIDO");
                util.ErrorBootstrap(mensaje);
                valido = false;
            } else {
                if (!descripcion || !descripcion.length || descripcion.length == 0) {
                    var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CAMPO_DESCRIPCION_REQUERIDO");
                    util.ErrorBootstrap(mensaje);
                    valido = false;
                }
            }
            return valido;
        }

        /**
       * Accion que se dispara al precionar el botón guardar.
       **/
        private guardar():void {
            var self = this;
            if (!self.validaCamposGuardar()) {
                return;
            }
            var scope = self.$scope;
            var sesion = shared.service.AbaxXBRLSessionService;
            var editando: boolean = sesion.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD);
            var url = editando ? AbaxXBRLConstantes.ACTUALIZAR_GRUPO_PATH : AbaxXBRLConstantes.REGISTRAR_GRUPO_PATH;
            var json = angular.toJson(scope.entidad);
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onSuccess = function (response: any) { if (editando) { self.onEditandoSuccess(response.data); } else { self.onRegistrarSuccess(response.data); } }
            self.abaxXBRLRequestService.post(url, { "json": json },false,true).then(onSuccess, onError);
            scope.guardando = true;
            sesion.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL);
        }
        /**
        * Procesa la respuesta para un solicitud de edición de rol.
        **/
        private onEditandoSuccess(response: shared.modelos.IResultadoOperacion) {
            var self = this;
            var entidad: shared.modelos.IGrupoUsuario = self.$scope.entidad;
            var parametros: { [token: string]: string } = { "NOMBRE": entidad.Nombre };
            var util = shared.service.AbaxXBRLUtilsService;
            var mensaje = '';

            if (response.Resultado) {
                mensaje = util.getValorEtiqueta('MENSAJE_EXITO_EDITAR_GRUPO_USUARIOS', parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = util.getValorEtiqueta('MENSAJE_ERROR_EDITAR_GRUPO_USUARIOS', parametros);
                util.ErrorBootstrap(mensaje);
            }

            self.$state.go("inicio.grupos");
            self.$scope.guardando = false;
        }

        /**
        * Procesa la respuesta para un solicitud de registro de rol.
        **/
        private onRegistrarSuccess(response: shared.modelos.IResultadoOperacion) {
            var self = this;
            var entidad = self.$scope.entidad;
            var parametros: { [token: string]: string } = { "NOMBRE": entidad.Nombre };
            var util = shared.service.AbaxXBRLUtilsService;
            var mensaje = '';

            if (response.Resultado) {
                mensaje = util.getValorEtiqueta('MENSAJE_EXITO_REGISTRO_GRUPO_USUARIOS', parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = util.getValorEtiqueta('MENSAJE_ERROR_REGISTRO_GRUPO_USUARIOS', parametros);
                util.ErrorBootstrap(mensaje);
            }
            self.$state.go("inicio.grupos");
            self.$scope.guardando = false;
        }
        /**
      * Solicita la exportación de un archivo a Excel.
      **/
        private exportaAExcel() {
            var self = this;
            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.EXPORTAR_GRUPOS_USUARIOS_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {

            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'grupos.xls');
        }

        /**
        * Redirecciona a la vista de registro de rol.
        **/
        private registrarNuevo() {
            var self = this;
            var scope = self.$scope;
            var sesion = shared.service.AbaxXBRLSessionService;
            sesion.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD, false);
            self.$state.go("inicio.gruposEditar");
        }

        /**
        * Muestra la vista para editar el elemento indicado.
        * @param elemento Elemento que se pretende editar.
        **/
        private editar(elemento: shared.modelos.IGrupoUsuario): void {
            var self = this;
            var scope = self.$scope;
            var sesion = shared.service.AbaxXBRLSessionService;
            sesion.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL, elemento);
            sesion.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD, true);
            self.$state.go("inicio.gruposEditar");
        }

        /**
        * Muestra la vista para asingar los roles al grupo indicado.
        * @param elemento Elemento al que se asignaran los roles.
        **/
        private asignarRoles(elemento: shared.modelos.IGrupoUsuario): void {
            var self = this;
            var scope = self.$scope;
            shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO, elemento.IdGrupoUsuarios);
            self.$state.go("inicio.gruposAsignaRoles");
        }

        /**
        * Muestra la vista para asignar los usuarios al grupo indicado.
        * @param elemento Elemento al que se asignaran los usuarios.
        **/
        private asignarUsuarios(elemento: shared.modelos.IGrupoUsuario): void {
            var self = this;
            var scope = self.$scope;
            shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO, elemento.IdGrupoUsuarios);
            self.$state.go("inicio.gruposAsignaUsuarios");
        }

        /**
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;
            var sesion = shared.service.AbaxXBRLSessionService;

            
            scope.opcionesDataTableLocal = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.listadoTabla = [];
            scope.cargandoTabla = true;
            scope.existenElementos = false;
            scope.guardando = false;
            scope.exportando = false;
            scope.exportaAExcel = function (): void { self.exportaAExcel(); };
            scope.registrarNuevo = function (): void { self.registrarNuevo(); };
            scope.asignarRoles = function (elemento: shared.modelos.IGrupoUsuario): void { self.asignarRoles(elemento); }; 
            scope.asignarUsuarios = function (elemento: shared.modelos.IGrupoUsuario): void { self.asignarUsuarios(elemento); }; 
            scope.editar = function (elemento: shared.modelos.IGrupoUsuario): void { self.editar(elemento); };
            scope.eliminar = function (elemento: shared.modelos.IGrupoUsuario): void { self.eliminar(elemento); };
            scope.guardar = function (): void { self.guardar(); };
            scope.editando = sesion.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD) == true;

            if (scope.editando) {
                scope.entidad = sesion.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL);
            } else {
                scope.entidad = {};
            }

            scope.$watch('filtroBusqueda', function () {
                if (scope.dataTableInstance && scope.dataTableInstance != null) {
                    scope.dataTableInstance.DataTable.search(scope.filtroBusqueda).draw();
                }
            });

            self.obtenElementosTabla();
        }

        /**
        * Constructor de las instancias de la clase.
        * @param $scope Scope actual del login.
        * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
        * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        * @param $modal Servicio para presentar diálogos modales al usuario.
        **/
        constructor($scope: AbaxXBRLGruposIndexScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }

    AbaxXBRLRolesIndexController.$inject = ['$scope', 'abaxXBRLRequestService', '$state', '$modal'];

}