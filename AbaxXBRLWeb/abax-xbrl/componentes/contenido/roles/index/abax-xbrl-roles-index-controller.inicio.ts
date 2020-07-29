module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLRolesIndexScope extends IAbaxXBRLInicioScope {

        /**
        * Exporta la lista de roles a excel.
        **/
        exportaAExcel(): void;
        /**
        * Muestra la vista para el registro de un nuevo rol.
        **/
        irRegistrarNuevoRol();
        /**
        * Listado de roles a mostrar.
        **/
        listadoRoles: Array<shared.modelos.IRol>;
        /**
        * Bandera que indica que aun no se han obtenido los roles de la empresa.
        **/
        cargandoRoles: boolean;
        /**
        * Bandera que indica que no existen roles en la empresa.
        **/
        existeRoles: boolean;
        /**
        * Muestra la vista para la signación de facultades a los roles.
        * @param idRol Identificador del rol al que se pretenden asignar las facultades.
        **/
        irAsignarFacultades(idRol: shared.modelos.IRol): void; 
        /**
        * Muestra la vista para editar los datos del rol indicado.
        * @param rol Rol que se pretende editar.
        **/
        irEditarRol(rol: shared.modelos.IRol): void;
        /**
        * Solicita la confirmación para la eliminación del rol (¿Esta Seguro de Borrar el Rol?) y
        * si es positiva se elimina el rol de la empresa.
        * @param rol Rol que se pretende eliminar.
        **/
        eliminarRol(rol: shared.modelos.IRol): void;
        /**
        * Objeto con las opcines de configuración del datatable local.
        **/
        opcionesDataTableRoles: any;
        /**
        * Referencia a la instancia del datatable.
        **/
        dataTableInstance: any;
        /**
        * Valor del campo para el filtrado de datos.
        **/
        rolBuscado: string;
        /**
        * Dto con los valores del rol que se esta editando o registrando.
        **/
        entidad: shared.modelos.IRol;
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
        * Formulario del rol que se agregara o editara.
        **/
        rolForm: ng.IFormController;
    }
    /**
    * Controlador de la vista de roles.
    **/
    export class AbaxXBRLRolesIndexController {

        /** 
        * El scope del controlador 
        **/
        private $scope: AbaxXBRLRolesIndexScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        
        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /**
        * Llena el listado de roles.
        **/
        private obtenRoles(): void {
            var self = this;
            var scope = self.$scope;
            var onSucess = function (result: any) { self.onObtenRolesSucess(result.data); }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            scope.cargandoRoles = true;
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTEN_ROLES_EMPRESA_PATH, {}).then(onSucess, onError);
        }
        /** 
        * Procesa la respuesta asincrona de la solicitud de roles.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenRolesSucess(resultado: shared.modelos.IResultadoOperacion) {
            var listado: Array<any> = resultado.InformacionExtra;
            var scope = this.$scope;
            if (listado && listado.length > 0) {

                scope.listadoRoles = listado;
                scope.existeRoles = true;
                var paging = listado.length > 10;
                scope.opcionesDataTableRoles.withOption("paging", paging);
                if (!paging) {
                    scope.opcionesDataTableRoles.withOption("sDom", "t");
                } else {
                    scope.opcionesDataTableRoles.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
                }
            } else {
                scope.existeRoles = false;
            }
            scope.cargandoRoles = false;
            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });
        }
        /**
        * Elimina el rol indicado.
        * @param rol Rol que se pretende eliminar.
        **/
        private eliminarRol(rol: shared.modelos.IRol): void {
            var self = this;
            var onSuccess = function (resultado: shared.modelos.IResultadoOperacion) {
                if (resultado) {
                    var util = shared.service.AbaxXBRLUtilsService;
                    var msg = '';

                    if (resultado.Resultado == true) {
                        msg = util.getValorEtiqueta('MENSAJE_EXITO_ELIMINAR_ROL_USUARIO');
                        util.ExitoBootstrap(msg);
                    } else {
                        msg = util.getValorEtiqueta('MENSAJE_ERROR_ELIMINAR_ROL_USUARIO');
                        util.ErrorBootstrap(msg);
                    }

                    self.obtenRoles();
                }
            };
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var instanciaModal = self.$modal.open({
                templateUrl: 'abax-xbrl/componentes/contenido/roles/borrar-rol/abax-xbrl-borrar-rol-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: AbaxXBRLRolesBorrarController,
                resolve: {
                    rol: function () {
                        return rol;
                    }
                }
            });
            instanciaModal.result.then(onSuccess, onError);
        }

        /**
        * Redirecciona a la vista de registro de rol.
        **/
        private irRegistrarNuevoRol() {
            var self = this;
            var scope = self.$scope;
            var sesion = shared.service.AbaxXBRLSessionService;
            sesion.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL);
            sesion.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD, false);
            self.$state.go("inicio.rolesEditar");
        }

        /**
        * Muestra la vista para editar los datos del rol indicado.
        * @param rol Rol que se pretende editar.
        **/
        private irEditarRol(rol: shared.modelos.IRol): void {
            var self = this;
            var scope = self.$scope;
            var sesion = shared.service.AbaxXBRLSessionService;
            sesion.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL,rol);
            sesion.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD, true);
            self.$state.go("inicio.rolesEditar");
        }

        /**
        * Muestra la vista para editar los datos del rol indicado.
        * @param rol Rol que se pretende editar.
        **/
        private irAsignarFacultades(rol: shared.modelos.IRol): void {
            var self = this;
            var scope = self.$scope;
            shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ROL_PROCESADO, rol.IdRol);
            self.$state.go("inicio.rolesFacultades");
        }
        /**
        * Valido los campos del formulario.
        * @return Si el formulario es valido.
        **/
        private validaCamposGuardar(): boolean {
            var self = this;
            var scope = self.$scope;
            var entidad = scope.entidad;
            var util = shared.service.AbaxXBRLUtilsService;
            var nombre: string = entidad.Nombre;
            var descripcion: string = entidad.Descripcion;
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
        private guardar() {
            var self = this;
            if (!self.validaCamposGuardar()) {
                return;
            }
            var scope = self.$scope;
            var sesion = shared.service.AbaxXBRLSessionService;
            var editando: boolean = sesion.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD);
            var url = editando ? AbaxXBRLConstantes.ACTUALIZAR_ROL_PATH : AbaxXBRLConstantes.REGISTRAR_ROL_PATH;
            var json = angular.toJson(scope.entidad);
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onSucess = function (response: any) { if (editando) { self.onEditandoSucess(response.data); } else { self.onRegistrarSucess(response.data); } }
            self.abaxXBRLRequestService.post(url, { "json": json },false,true).then(onSucess, onError);
            scope.guardando = true;
            sesion.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL);
        }
        /**
        * Procesa la respuesta para un solicitud de edición de rol.
        **/
        private onEditandoSucess(response: shared.modelos.IResultadoOperacion) {
            var util = shared.service.AbaxXBRLUtilsService;
            var self = this;
            var entidad = self.$scope.entidad;
            var parametros: { [token: string]: string } = { "NOMBRE_ROL": entidad.Nombre};
            var mensaje = '';

            if (response.Resultado) {
                mensaje = util.getValorEtiqueta("MENSAJE_EXITO_EDITAR_ROL_USUARIO", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = util.getValorEtiqueta("MENSAJE_ERROR_EDITAR_ROL_USUARIO", parametros);
                util.ErrorBootstrap(mensaje);
            }
            self.$state.go("inicio.roles");
            self.$scope.guardando = false;
        }

        /**
        * Procesa la respuesta para un solicitud de registro de rol.
        **/
        private onRegistrarSucess(response: shared.modelos.IResultadoOperacion) {
            var util = shared.service.AbaxXBRLUtilsService;
            var self = this;
            var entidad = self.$scope.entidad;
            var parametros: { [token: string]: string } = { "NOMBRE_ROL": entidad.Nombre };
            var mensaje = '';

            if (response.Resultado) {
                mensaje = util.getValorEtiqueta("MENSAJE_EXITO_REGISTRO_ROL_USUARIO", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = util.getValorEtiqueta("MENSAJE_ERROR_REGISTRO_ROL_USUARIO", parametros);
                util.ErrorBootstrap(mensaje);
            }
            self.$state.go("inicio.roles");
            self.$scope.guardando = false;
        }
        /**
        * Solicita la exportación de un archivo a Excel.
        **/
        private exportaAExcel() {
            var self = this;
            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data);}
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.EXPORTAR_ROLES_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'roles.xls');
        }

        /**Inicializa los elementos del constructor.**/
        private init(): void {
            var self = this;
            var scope = self.$scope;
            var sesion = shared.service.AbaxXBRLSessionService;
            scope.cargandoRoles = true;
            scope.existeRoles = false;
            scope.guardando = false;
            var dtOptions = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.$watch('rolBuscado', function () {
                if (scope.dataTableInstance && scope.dataTableInstance != null) {
                    scope.dataTableInstance.DataTable.search(scope.rolBuscado).draw();
                }
            });
            scope.opcionesDataTableRoles = dtOptions;

            scope.irEditarRol = function (rol: shared.modelos.IRol) { self.irEditarRol(rol); };
            scope.irRegistrarNuevoRol = function () { self.irRegistrarNuevoRol(); };
            scope.guardar = function () { self.guardar(); };
            scope.irAsignarFacultades = function (rol: shared.modelos.IRol) { self.irAsignarFacultades(rol); };
            scope.eliminarRol = function (rol: shared.modelos.IRol) { self.eliminarRol(rol); };
            scope.exportaAExcel = function () { self.exportaAExcel(); }
            scope.editando = sesion.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD) == true;
            
            if (scope.editando) {
                scope.entidad = sesion.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL);
            } else {
                scope.entidad = {};
            }

            self.obtenRoles();
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual del login.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
         * @param $modal Servicio para presentar diálogos modales al usuario.
        **/
        constructor($scope: AbaxXBRLRolesIndexScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.$modal = $modal;
            this.init();
        }
    }

    AbaxXBRLRolesIndexController.$inject = ['$scope', 'abaxXBRLRequestService', '$state', '$modal'];

} 