module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLEdicionFideicomisoScope extends IAbaxXBRLInicioScope {
        /**
        * Dto con los valores del fideicomiso que se esta editando o registrando.
        **/
        entidad: shared.modelos.IFideicomiso;
        /**
        * Accion que se dispara al precionar el botón guardar.
        **/
        guardar();
        /**
        * Bandera que indica que se esta procesando una solicitud de guardar.
        **/
        guardando: boolean;
        /**
        * Bandera que indica si se esta editando o registrando.
        **/
        editando: boolean;
        /**
        * Formulario del rol que se agregara o editara.
        **/
        fideicomisoForm: ng.IFormController;
    }
    /**
    * Controlador de la vista.
    **/
    export class AbaxXBREdicionFideicomisoController {

        /** 
        * El scope del controlador 
        **/
        private $scope: AbaxXBRLEdicionFideicomisoScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /**
        * Valido los campos del formulario.
        * @return Si el formulario es valido.
        **/
        private validaCamposGuardar(): boolean {
            var self = this;
            var scope = self.$scope;
            var entidad = scope.entidad;
            var util = shared.service.AbaxXBRLUtilsService;
            var clave: string = entidad.ClaveFideicomiso;
            var descripcion: string = entidad.Descripcion;
            var valido: boolean = true;
            if (!clave || !clave.length || clave.length == 0) {
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
            var editando: boolean = scope.editando;
            var url = editando ? AbaxXBRLConstantes.ACTUALIZAR_FIDEICOMISO_PATH : AbaxXBRLConstantes.REGISTRAR_FIDEICOMISO_PATH;
            var json = angular.toJson(scope.entidad);
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onSucess = function (response: any) { if (editando) { self.onEditandoSucess(response.data); } else { self.onRegistrarSucess(response.data); } }
            self.abaxXBRLRequestService.post(url, { "json": json }, false, true).then(onSucess, onError);
            scope.guardando = true;
        }
        /**
        * Procesa la respuesta para un solicitud de edición.
        **/
        private onEditandoSucess(response: shared.modelos.IResultadoOperacion) {
            var util = shared.service.AbaxXBRLUtilsService;
            var self = this;
            var entidad = self.$scope.entidad;
            var parametros: { [token: string]: string } = { "CLAVE": entidad.ClaveFideicomiso };
            var mensaje = '';

            if (response.Resultado) {
                mensaje = util.getValorEtiqueta("MENSAJE_EXITO_EDITAR_FIDEICOMISO", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = util.getValorEtiqueta("MENSAJE_ERROR_EDITAR_FIDEICOMISO", parametros);
                util.ErrorBootstrap(mensaje);
            }
            self.$state.go("inicio.fideicomisos");
            self.$scope.guardando = false;
        }

        /**
        * Procesa la respuesta para un solicitud de registro.
        **/
        private onRegistrarSucess(response: shared.modelos.IResultadoOperacion) {
            var util = shared.service.AbaxXBRLUtilsService;
            var self = this;
            var entidad = self.$scope.entidad;
            var parametros: { [token: string]: string } = { "CLAVE": entidad.ClaveFideicomiso };
            var mensaje = '';

            if (response.Resultado) {
                mensaje = util.getValorEtiqueta("MENSAJE_EXITO_REGISTRAR_FIDEICOMISO", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = util.getValorEtiqueta("MENSAJE_ERROR_REGISTRO_FIDEICOMISO", parametros);
                util.ErrorBootstrap(mensaje);
            }
            self.$state.go("inicio.fideicomisos");
            self.$scope.guardando = false;
        }

        /**Inicializa los elementos del constructor.**/
        private init(): void {
            var self = this;
            var scope = self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            scope.guardando = false;
            var dtOptions = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            
            scope.guardar = function () { self.guardar(); };
            scope.editando = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_EDITANDO_ENTIDAD) == true;

            if (scope.editando) {
                scope.entidad = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_ENTIDAD_ACTUAL);
            } else {
                scope.entidad = { IdFideicomiso: 0, IdEmpresa: 0, ClaveFideicomiso: "", Descripcion: "" };
            }
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual del login.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
         * @param $modal Servicio para presentar diálogos modales al usuario.
        **/
        constructor($scope: AbaxXBRLEdicionFideicomisoScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }

    AbaxXBREdicionFideicomisoController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];

} 