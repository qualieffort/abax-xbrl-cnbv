module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLMigrarVersionScope extends IAbaxXBRLInicioScope {

        /**
        * Bandera que determina si el usuario tiene facultades para migrar la información.
        **/
        tieneFacultadMigrar: boolean;
        /**
        * Bandera que indica si se está ejecutando la operación de migrar.
        **/
        migrando: boolean;
        /**
        * Ejecuta el procedimiento de migración.
        **/
        migrar(): void;
    }

    /**
    * Controlador de la vista de migración de datos.
    **/
    export class AbaxXBRLMigrarVersionController {

        /**
        * Scope de la vista.
        **/
        private $scope: AbaxXBRLMigrarVersionScope;

        /**
        * Utileria generica de Abax xbrl.
        **/
        private $abaxXBRLUtilsService: shared.service.AbaxXBRLUtilsService;
        /**
        * Servico para el manejo de los elementos de sesión.
        **/
        private $abaxXBRLSessionService: shared.service.AbaxXBRLSessionService;
        /**
        * Servicio para la invocación del procedimientos al servidor de BD.
        **/
        private $abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Bandera que indica si el usuario tiene privilegios suficientes para migrar la información.
        **/
        private puedeMigrar: boolean;

        /**
        * Determina si el usuario cuenta con privilegios suficientes para migrar.
        * @return Si tiene o no privilegios suficienntes para migrar.
        **/
        private getPrivilegiosMigracion(): boolean {
            var $session = shared.service.AbaxXBRLSessionService;
            var puedeDepurar: boolean = $session.tieneFacultad(AbaxXBRLFacultadesEnum.DepurarDatosBitacora);
            var puedeAdministrarUsuarios:boolean =
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarUsuario) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.EditarUsuario) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarUsuario) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.AsignarEmisorasUsuarios) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.ActivarDesactivarUsuarios) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.BloquearDesbloquearUsuarios);
            var puedeAdministrarRoles:boolean = 
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarRoles) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.EditarRoles) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarRoles) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.AsignarFacultadesRoles);

            return puedeDepurar && puedeAdministrarRoles && puedeAdministrarUsuarios;
        }

        /**
        * Si se ha confirmado la ejecución del proceso de migración.
        **/
        private onMigrarConfirm(): void {

            var $util = shared.service.AbaxXBRLUtilsService;
            var $request = this.$abaxXBRLRequestService;
            var url: string = AbaxXBRLConstantes.GENERAR_DOCUMENTOS_CONTEXTOS_ACTUALIZADOS_PATH;
            var onError = $request.getOnErrorDefault();
            var onSucess = function () {
                $util.ExitoBootstrap("Se ejecuto con exito el procedimiento de actualización de versión de los documentos de iinstancia.");
                $util.cambiarEstadoVistasA('inicio.panelControl');
            }
            this.$scope.migrando = true;
            $request.post(url, {}).then(onSucess);
            
        }

        /**
        * Ejecuta el procedimiento de migración.
        **/
        private migrar(): void {
            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var configuracionConfirmarRespaldoBD: shared.modelos.IConfiguracionDialogoConfirmacion = {
                claseIconoTitulo: "i i-data",
                claseTitulo: "panel-danger",
                textoTititulo: "Confirmar Respaldo BD",
                texto: "¿Se ha respaldado la BD?"
            }
            var configuracionConfirmaUsuariosfuera: shared.modelos.IConfiguracionDialogoConfirmacion = {
                claseIconoTitulo: "i i-logout",
                claseTitulo: "panel-warning",
                textoTititulo: "Confirmar Notificación Usuarios",
                texto: "¿Se ha notificado a los usuarios que salgan de la aplicación?"
            }
            var configuracionConfirmaMigrar: shared.modelos.IConfiguracionDialogoConfirmacion = {
                claseIconoTitulo: "fa fa-reply-all",
                claseTitulo: "panel-info",
                textoTititulo: "Confirmar Migración",
                texto: "El proceso puede demorar unos minutos.\n¿Realmente desea migrar los datos de la versión ahora?"
            }

            $util.confirmar(configuracionConfirmarRespaldoBD).then(function (confirmadoBD: boolean) {
                if (confirmadoBD) {
                    $util.confirmar(configuracionConfirmaMigrar).then(function (confirmadoMigrar: boolean) {
                        if (confirmadoMigrar) {
                            $self.onMigrarConfirm();
                        }
                    });
                }
            });

        }

        /**
        * Inicializa los elementos del scope.
        **/
        private init():void {
            var $self = this;
            var $scope = $self.$scope;
            $scope.tieneFacultadMigrar = $self.getPrivilegiosMigracion();
            $scope.migrando = false;
            $scope.migrar = function () { $self.migrar(); };

        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        **/
        constructor($scope: AbaxXBRLMigrarVersionScope, abaxXBRLUtilsService: shared.service.AbaxXBRLUtilsService, abaxXBRLSessionService: shared.service.AbaxXBRLSessionService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.$abaxXBRLUtilsService = abaxXBRLUtilsService;
            this.$abaxXBRLSessionService = abaxXBRLSessionService;
            this.$abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();

        }
    }

    AbaxXBRLMigrarVersionController.$inject = ['$scope', 'abaxXBRLUtilsService', 'abaxXBRLSessionService','abaxXBRLRequestService'];


} 