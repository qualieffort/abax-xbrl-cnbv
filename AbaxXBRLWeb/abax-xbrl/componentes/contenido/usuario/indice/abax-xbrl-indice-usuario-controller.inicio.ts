///<reference path="../../../../../Scripts/typings/FileSaver/FileSaver.d.ts" /> 

module abaxXBRL.componentes.controllers {
    /**
     * Definición de la estructura del scope para el controlador que sirve para listar los usuarios
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface AbaxXBRLIndiceUsuarioScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de usuarios a mostrar.
        **/
        usuarios: Array<abaxXBRL.shared.modelos.IUsuario>;
        /**
        * Listado de emisoras a mostrar en el seleect.
        **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;
        /**
        * Emisora seleccionada.
        **/
        emisoraSeleccionada: abaxXBRL.shared.modelos.IEmisora;
        /**
        * Llena el listado de usuarios.
        **/
        cargarUsuarios(): void;
        /**
        * Solicita la confirmación para la eliminación del usuario (¿Esta Seguro de Borrar el usuario?) y|
        * si es positiva se elimina el usuario.
        * @param id del usuario que se pretende eliminar.
        **/
        eliminaUsuario(id: string): void;
        /**
        * Exporta la lista de usuarios a excel.
        **/
        descargaArchivo(): void;
        /**
        * Activa / desactiva el usuario indicado.
        **/
        activacionUsuario(idUsuario: number, estado: boolean): void;
        /**
        * Activa / desactiva el usuario indicado.
        **/
        bloqueoUsuario(idUsuario: number, estado: boolean): void;
        /**
        * Bandera que indica que aun no se han obtenido los usuario.
        **/
        cargandoUsuarios: boolean;
        /**
        * Bandera que indica que no existen usuarios.
        **/
        existenUsuarios: boolean;
        /**
        * Objeto con las opcinoes de configuración del datatable local.
        **/
        opcionesDataTableUsuarios: any;
        /**
        * Referencia a la instancia del datatable.
        **/
        dataTableInstance: any;
        /**
        * Valor del campo para el filtrado de datos.
        **/
        usuarioBuscado: string;
        /**
        * Muestra la vista para la asignación de roles.
        * @param usuario Usuario al que se le pretenden asingar los roles.
        **/
        asignarRoles(usuario: shared.modelos.IUsuario): void;
        /**
         * Bandera que indica si es la pantalla de usuario o usuario empresa.
         **/
        esUsuarioEmpresa: number;
        /**
         * Bandera que indica que se esta exportando el listado a excel.
         **/
        exportando: boolean;
        /**
        * Funcion que muestra la vista con la bitacora del usuarios eleccionado.
        * @param usuario Usuario del que se requiere la bitacora.
        **/
        muestraBitacora(usuario: shared.modelos.IUsuario): void;
        /**
        * Bandera que indica si el usuario puede bloquear y desbloquear.
        **/
        puedeBloquearDesbloquear: boolean;

        /** 
        * Indica si se trata de una autenticacion mediante single sign on
        */
        sso: boolean;
    }

    /**
     * Definición de la estructura del scope para el servicio de parametros de ruta
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface IAbaxXBRLIndiceUsuarioRouteParams extends ng.ui.IStateParamsService {
        esUsuarioEmpresa: number;
    }

    /**
     * Implementación de un controlador para la visualización del listado de usuarios
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLIndiceUsuarioController {
        /** El scope del controlador */
        private $scope: AbaxXBRLIndiceUsuarioScope;
        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio para el cambio de estado de las vistas dentro del sitio. 
        **/
        private $state: ng.ui.IStateService = null;
        /****/
        private $stateParams: IAbaxXBRLIndiceUsuarioRouteParams;

        /**
        * Llena el listado de usuarios.
        **/
        private cargarUsuarios(): void {
            var self: AbaxXBRLIndiceUsuarioController = this;
            var scope: AbaxXBRLIndiceUsuarioScope = self.$scope;

            scope.cargandoUsuarios = true;

            var onSuccess = function (result: any) { self.onCargaUsuariosSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            var idEmpresa = scope.emisoraSeleccionada.IdEmpresa == null ? '' : scope.emisoraSeleccionada.IdEmpresa.toString();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_USUARIOS_PATH, {
                'idEmpresa': idEmpresa,
                'nombres': scope.usuarioBuscado,
                'esUsuarioEmpresa': scope.esUsuarioEmpresa
            }).then(onSuccess, onError);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de usuarios.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargaUsuariosSuccess(resultado: Array<shared.modelos.IUsuario>): void {
            var scope: AbaxXBRLIndiceUsuarioScope = this.$scope;
            var listado: Array<any> = resultado;

            scope.usuarios = listado;

            if (listado && listado.length > 0)
                scope.existenUsuarios = true;
            else
                scope.existenUsuarios = false;

            var paging = listado.length > 10;
            scope.opcionesDataTableUsuarios.withOption("paging", paging);
            if (!paging) {
                scope.opcionesDataTableUsuarios.withOption("sDom", "t");
            } else {
                scope.opcionesDataTableUsuarios.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
            }

            scope.cargandoUsuarios = false;
        }

        /**
        * Llena el listado de usuarios.
        **/
        private cargarEmisoras(): void {
            var self: AbaxXBRLIndiceUsuarioController = this;

            var onSuccess = function (result: any) { self.onCargaEmisorasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_EMISORAS_PATH, {}).then(onSuccess, onError).finally(function () { self.cargarUsuarios(); });
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de usuarios.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargaEmisorasSuccess(resultado: Array<shared.modelos.IEmisora>): void {
            var self: AbaxXBRLIndiceUsuarioController = this;
            var scope: AbaxXBRLIndiceUsuarioScope = self.$scope;

            scope.emisoras = resultado;
            scope.emisoraSeleccionada.IdEmpresa = shared.service.AbaxXBRLSessionService.getSesionInmediate().IdEmpresa;
        }

        /**
        * Activa o desactiva el usuario especificado
        **/
        private activacionUsuario(idUsuario: number, estado: boolean): void {
            var self: AbaxXBRLIndiceUsuarioController = this;

            var onSuccess = function (result: any) { self.onCambioUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ACTIVACION_USUARIO_PATH, {
                'id': idUsuario,
                'estado': estado,
                'esUsuarioEmpresa': self.$scope.esUsuarioEmpresa
            }).then(onSuccess, onError);
        }

        /**
        * Bloquea o desbloquea el usuario especificado
        **/
        private bloqueoUsuario(idUsuario: number, estado: boolean): void {
            var self: AbaxXBRLIndiceUsuarioController = this;

            var onSuccess = function (result: any) { self.onCambioUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.BLOQUEADO_USUARIO_PATH, {
                'id': idUsuario,
                'estado': estado,
                'esUsuarioEmpresa': self.$scope.esUsuarioEmpresa
            }).then(onSuccess, onError);
        }

        /** 
        * Procesa la respuesta asincrona de la activacion o bloqueo del usuario.
        * Asigna los elementos de la respuesta y muestra el mensaje relacionado.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCambioUsuarioSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var self: AbaxXBRLIndiceUsuarioController = this;
            var util = shared.service.AbaxXBRLUtilsService;
            var mensaje: string = util.getValorEtiqueta(resultado.Mensaje);

            if (resultado.Resultado)
                util.ExitoBootstrap(mensaje);
            else
                util.ErrorBootstrap(mensaje);

            self.cargarUsuarios();
        }

        /**
        * Descarga en excel el listado de usuarios.
        **/
        private descargaArchivo(): void {
            var self: AbaxXBRLIndiceUsuarioController = this;
            var scope: AbaxXBRLIndiceUsuarioScope = self.$scope;

            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.DESCARGA_USUARIOS_PATH, {
                'idEmpresa': scope.emisoraSeleccionada.IdEmpresa,
                'nombres': scope.usuarioBuscado,
                'esUsuarioEmpresa': scope.esUsuarioEmpresa
            }, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de usuarios.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'usuarios.xls');
        }

        /**
        * Muestra la vista para la asignación de roles.
        * @param usuario Usuario al que se le pretenden asingar los roles.
        **/
        private asignarRoles(usuario: shared.modelos.IUsuario): void {
            var $state = this.$state;
            var mismaEmpresa = this.$scope.esUsuarioEmpresa > 0 ? true : false;
            shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO, usuario);
            if (!mismaEmpresa) {
                shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO_2, this.$scope.emisoraSeleccionada);
            }
            shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_MISMA_EMPRESA, mismaEmpresa);
            $state.go('inicio.usuarioAsignarRoles');
        }
        /**
        * Funcion que muestra la vista con la bitacora del usuarios eleccionado.
        * @param usuario Usuario del que se requiere la bitacora.
        **/
        muestraBitacora(usuario: shared.modelos.IUsuario): void {
            shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO, usuario.IdUsuario);
            this.$state.go('inicio.bitacora');
        }

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self: AbaxXBRLIndiceUsuarioController = this;
            var scope: AbaxXBRLIndiceUsuarioScope = self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            var constantes = AbaxXBRLConstantes;
            scope.exportando = false;
            scope.existenUsuarios = false;
            scope.esUsuarioEmpresa = self.$stateParams.esUsuarioEmpresa | $util.getAtributoTemporal(constantes.ATRIBUTO_USUARIO_MISMA_EMPRESA);
            $util.setAtributoTemporal(constantes.ATRIBUTO_USUARIO_MISMA_EMPRESA, scope.esUsuarioEmpresa);

            scope.sso = shared.service.AbaxXBRLSessionService.getAtributoSesion(shared.service.AbaxXBRLSessionService.AUTENTICACION_SSO_NAME);

            shared.service.AbaxXBRLSessionService.setAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ES_USUARIO_EMPRESA, scope.esUsuarioEmpresa);
            
            scope.usuarioBuscado = '';

            var dtOptions = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });
            scope.opcionesDataTableUsuarios = dtOptions;

            var sesion = shared.service.AbaxXBRLSessionService;
            var facultadBloquearDesbloquearMismaEmpresa = sesion.tieneFacultad(AbaxXBRLFacultadesEnum.BloquearDesbloquearUsuariosMismaEmpresa); 
            var facultadBloquearDesbloquear = sesion.tieneFacultad(AbaxXBRLFacultadesEnum.BloquearDesbloquearUsuarios); 
            var puedeBloquearDesbloquear = false;
            if (scope.esUsuarioEmpresa > 0) {
                puedeBloquearDesbloquear = facultadBloquearDesbloquearMismaEmpresa;
            } else {
                puedeBloquearDesbloquear = facultadBloquearDesbloquear;
            }

            scope.puedeBloquearDesbloquear = puedeBloquearDesbloquear; 
            scope.emisoraSeleccionada = { IdEmpresa: null, NombreCorto: null };

            if (scope.esUsuarioEmpresa == 0) {
                self.cargarEmisoras();
            } else {
                self.cargarUsuarios();
            }
        }

        /**
         * Constructor de la clase UsuarioListCtrl
         *
         * @param $scope el scope del controlador
         * @param $modal Servicio para el manejode ventanas modales.
         * @param abaxXBRLRequestService el servicio de negocio para interactuar con el back end.
         * @param $state Servicio para el cambio de estado de las vistas del sitio.
         * @param $stateParams Servicio para controlar los parametros de la ruta de navegación.
         */
        constructor($scope: AbaxXBRLIndiceUsuarioScope,
            $modal: ng.ui.bootstrap.IModalService,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService,
            $state: ng.ui.IStateService,
            $stateParams: IAbaxXBRLIndiceUsuarioRouteParams) {
            var self = this;

            self.$scope = $scope;
            self.$modal = $modal
            self.abaxXBRLRequestService = abaxXBRLRequestService;
            self.$state = $state;
            self.$stateParams = $stateParams;

            self.$scope.cargarUsuarios = function (): void { self.cargarUsuarios(); };

            self.$scope.activacionUsuario = function (idUsuario: number, estado: boolean) { self.activacionUsuario(idUsuario, estado); }

            self.$scope.bloqueoUsuario = function (idUsuario: number, estado: boolean) { self.bloqueoUsuario(idUsuario, estado); }

            self.$scope.asignarRoles = function (usuario: shared.modelos.IUsuario) { self.asignarRoles(usuario); };

            self.$scope.muestraBitacora = function (usuario: shared.modelos.IUsuario) { self.muestraBitacora(usuario); };

            self.$scope.eliminaUsuario = function (id: string): void {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/usuario/elimina/abax-xbrl-elimina-usuario-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: AbaxXBRLEliminaUsuarioController,
                    resolve: {
                        id: function () {
                            return id;
                        }
                    }
                });
                var onSucess = function (resultado: shared.modelos.IResultadoOperacion) {
                    if (resultado) {
                        var util = shared.service.AbaxXBRLUtilsService;
                        var mensaje: string = util.getValorEtiqueta(resultado.Mensaje);

                        if (resultado.Resultado)
                            util.ExitoBootstrap(mensaje);
                        else
                            util.ErrorBootstrap(mensaje);

                        self.cargarUsuarios();
                    }
                };
                var onError = self.abaxXBRLRequestService.getOnErrorDefault();

                modalInstance.result.then(onSucess, onError);
            }

            self.$scope.descargaArchivo = function () { self.descargaArchivo(); };

            self.init();
        }
    }
    AbaxXBRLIndiceUsuarioController.$inject = ['$scope', '$modal', 'abaxXBRLRequestService', '$state', '$stateParams'];
}