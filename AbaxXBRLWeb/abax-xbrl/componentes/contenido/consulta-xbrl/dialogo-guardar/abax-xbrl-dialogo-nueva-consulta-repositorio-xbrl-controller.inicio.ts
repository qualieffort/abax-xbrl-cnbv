module abaxXBRL.componentes.controllers {

    /**
    * Scope para la interacción con la vista.
    **/
    export interface IAbaxXBRLDialogoNuevaConsultaRepositorioXbrlScope extends ng.IScope {

        /**
        * Bandera que indica si puede persistir la información del elemento.
        **/
        puedePersistir: boolean;
        /**
        * Bandera que indica si se esta editando una entidad o se esta creando una nueva.
        **/
        editando: boolean;
        /**
        * Bandera que indica si se esta ejecutando el proceso de guardado.
        **/
        estaGuardando: boolean;
        /**
        * Entidad a editar o agregar.
        **/
        entidad: shared.modelos.IConsultaRepositorioCnbv;
        /**
        * Formulario a validar.
        **/
        formulario: ng.IFormController;
        /**
        * Guarda los cambios realizados en la entidad.
        **/
        guardar(): void;
        /**
        * Cierra el dialogo sin retornar respuesta.
        **/
        cancelar(): void;
    }

    /**
    * Controlador del dialogo de alerta.
    **/
    export class AbaxXBRLDialogoNuevaConsultaRepositorioXbrlController {

        /**
       * Scope de la vista.
       **/
        private $scope: IAbaxXBRLDialogoNuevaConsultaRepositorioXbrlScope;

        /**
        * Servicio para el manejo de la instancia del diálogo modal. 
        **/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        /**
        * Servicio para el manejo de las peticiones al servidor. 
        **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;


        /**
       * Cierra el dialogo sin retornar respuesta.
       **/
        private cancelar(): void {
            this.$modalInstance.dismiss();
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
            if (!nombre || !nombre.length || nombre.trim().length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CAMPO_NOMBRE_REQUERIDO");
                util.ErrorBootstrap(mensaje);
                valido = false;
            }
            if (!descripcion || !descripcion.length || descripcion.trim().length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CAMPO_DESCRIPCION_REQUERIDO");
                util.ErrorBootstrap(mensaje);
                valido = false;
            }

            return valido;
        }

        /**
        * Accion que se dispara al precionar el botón guardar.
        **/
        private guardar(): void {
            var self = this;
            if (!self.validaCamposGuardar()) {
                return;
            }
            var scope = self.$scope;
            var editando: boolean = scope.editando;
            var url = AbaxXBRLConstantes.GUARDAR_CONSULTA_REPOSITORIO_PATH;
            var copia = angular.copy(scope.entidad);
            copia.FechaCreacion = null;
            var json = angular.toJson(copia);
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onSucess = function (response: any) { self.onGuardarSucess(response.data); }
            var onFinally = function () { scope.estaGuardando = false; };
            self.abaxXBRLRequestService.post(url, { "json": json, "editando": (editando ? "true" : "false") }, false, true).then(onSucess, onError).finally(onFinally);
            scope.estaGuardando = true;
        }

        /**
        * Procesa la respuesta para un solicitud de persistencia.
        * @param response Resultado de la solicitud.
        **/
        private onGuardarSucess(response: shared.modelos.IResultadoOperacion): void {
            var util = shared.service.AbaxXBRLUtilsService;
            var self = this;
            var entidad = self.$scope.entidad;
            var parametros: { [token: string]: string } = { "NOMBRE": entidad.Nombre };
            var mensaje = '';

            if (response.Resultado) {
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZANDO_CONSULTA_REPOSITORIO", parametros) : util.getValorEtiqueta("MENSAJE_EXITO_GUARDANDO_CONSULTA_REPOSITORIO", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_CONSULTA_REPOSITORIO", parametros) : util.getValorEtiqueta("MENSAJE_ERROR_GUARDAR_CONSULTA_REPOSITORIO", parametros);
                util.ErrorBootstrap(mensaje);
            }
            self.$modalInstance.close(response.InformacionExtra);
        }
        /**
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $session = shared.service.AbaxXBRLSessionService;
            $scope.estaGuardando = false;
            $scope.editando = !$util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO);
            $scope.entidad = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR);
            $scope.puedePersistir = $session.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarConsultaRepositorio);
            $scope.guardar = function (): void { $self.guardar(); };
            $scope.cancelar = function (): void { $self.cancelar(); };
        }

        /**
       * Constructor de la clase.
       * @param $scope Scope de la vista.
       * @param $modalInstance Instancia de la ventana modal que contiene esta vista.
       * @param abaxXBRLRequestService Servicio para el manejo de solicitudes al servidor.
       **/
        constructor($scope: IAbaxXBRLDialogoNuevaConsultaRepositorioXbrlScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {

            this.$scope = $scope;
            this.$modalInstance = $modalInstance;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }

    AbaxXBRLDialogoNuevaConsultaRepositorioXbrlController.$inject = ['$scope', '$modalInstance', 'abaxXBRLRequestService'];
} 