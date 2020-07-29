module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLEditarListaNotificacionScope extends IAbaxXBRLInicioScope
    {
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
        entidad: shared.modelos.IListaNotificacion;
        /**
        * Formulario a validar.
        **/
        formulario: ng.IFormController;
        /**
        * Guarda los cambios realizados en la entidad.
        **/
        guardar(): void;
         /**
        * Nombre del estado que retorna al listado de elementos.
        **/
        nombreEstadoListado: string;

    }
    /**
    * Controlador de la vista
    **/
    export class AbaxXBRLEditarListaNotificacionController
    {
        /**
        * Scope de interacción con la vista.
        **/
        private $scope: IAbaxXBRLEditarListaNotificacionScope;
        /**
        * Servicio para el manejo de las peticiones al servidor. 
        **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio con utilerías genericas.
        **/
        private $util = shared.service.AbaxXBRLUtilsService;
        
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
            var titulo: string = entidad.TituloMensaje;
            var claveLista: string = entidad.ClaveLista;
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
            if (!claveLista || !claveLista.length || claveLista.trim().length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CAMPO_CLAVE_REQUERIDO");
                util.ErrorBootstrap(mensaje);
                valido = false;
            }
            if (!titulo || !titulo.length || titulo.trim().length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CAMPO_TITULO_MENSAJE_REQUERIDO");
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
            var url = AbaxXBRLConstantes.GUARDAR_LISTA_NOTIFICACION_PATH;
            var json = angular.toJson(scope.entidad);
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
        private onGuardarSucess(response: shared.modelos.IResultadoOperacion):void {
            var util = shared.service.AbaxXBRLUtilsService;
            var self = this;
            var entidad = self.$scope.entidad;
            var parametros: { [token: string]: string } = { "NOMBRE": entidad.Nombre };
            var parametrosClave: { [token: string]: string } = { "CLAVE": entidad.ClaveLista };
            var mensaje = '';

            if (response.InformacionExtra == "-1") {
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_CLAVE_REPETIDA_LISTA_NOTIFICACION", parametrosClave) : util.getValorEtiqueta("MENSAJE_ERROR_GUARDAR_CLAVE_REPETIDA_LISTA_NOTIFICACION", parametrosClave);
                util.ErrorBootstrap(mensaje);
            }
            else if (response.Resultado) {
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZAR_LISTA_NOTIFICACION", parametros) : util.getValorEtiqueta("MENSAJE_EXITO_GUARDAR_LISTA_NOTIFICACION", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_LISTA_NOTIFICACION", parametros) : util.getValorEtiqueta("MENSAJE_ERROR_GUARDAR_LISTA_NOTIFICACION", parametros);
                util.ErrorBootstrap(mensaje);
            }
            util.cambiarEstadoVistasA(self.$scope.nombreEstadoListado);
        }
        /**
        * Genera un elemento en blanco para ser actualizado y persitido.
        * @return Elemento a persistir.
        ***/
        private generaTemplateNuevoElemento(): shared.modelos.IListaNotificacion
        {
            var elemento: shared.modelos.IListaNotificacion =
                {
                    IdListaNotificacion: 0,
                    Nombre: '',
                    Descripcion: '',
                    TituloMensaje: '',
                    ClaveLista: ''
                }
            return elemento;
        }
        /**
        * Inicializa los elementos del scope.
        **/
        private init(): void
        {
            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;

            $scope.nombreEstadoListado = 'inicio.listadoListasNotificacion';
            $scope.estaGuardando = false;
            $scope.editando = !$util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO);
            $scope.entidad = $scope.editando ? $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR) : $self.generaTemplateNuevoElemento();
            $scope.puedePersistir = !$scope.editando && $scope.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarListaNotificacion) ||
                                    $scope.editando  && $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EditarListaNotificacion);
            $scope.guardar = function (): void { $self.guardar(); };
        }
        /**
        * Constructor de controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
        **/
        constructor($scope: IAbaxXBRLEditarListaNotificacionScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }
    /**
    * Inicializamos las dependencias a inyectar.
    **/
    AbaxXBRLEditarListaNotificacionController.$inject = ["$scope","abaxXBRLRequestService"];
} 