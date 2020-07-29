module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLEditarDestinatarioNotificacionScope extends IAbaxXBRLInicioScope
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
        entidad: shared.modelos.IDestinatarioNotificacion;
        /**
        * Formulario a validar.
        **/
        formulario: ng.IFormController;
        /**
        * Guarda los cambios realizados en la entidad.
        **/
        guardar(): void;
        /**
        * Cancela los cambios y regresa al listado de destinatarios.
        **/
        cancelar(): void;
        /**
        * Expresion regular utilizada para validar el correo electronico.
        **/
        emailPattern: RegExp;
        /**
        * Entidad propietaria del  elemento a persistir.
        **/
        entidadPadre: shared.modelos.IListaNotificacion;
        /**
        * Titulo del destinatario a mostrar.
        **/
        tituloDestinatarios: string;
    }
    /**
    * Controlador de la vista
    **/
    export class AbaxXBRLEditarDestinatarioNotificacionController
    {
        /**
        * Scope de interacción con la vista.
        **/
        private $scope: IAbaxXBRLEditarDestinatarioNotificacionScope;
        /**
        * Servicio para el manejo de las peticiones al servidor. 
        **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio con utilerías genericas.
        **/
        private $util = shared.service.AbaxXBRLUtilsService;
        /**
        * Expresion regular utilizada para validar el email.
        **/
        private expRegEmail = /[a-z0-9!#$%*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        
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
            var correo: string = entidad.CorreoElectronico;
            var valido: boolean = true;
            if (!nombre || !nombre.length || nombre.trim().length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CAMPO_NOMBRE_REQUERIDO");
                util.ErrorBootstrap(mensaje);
                valido = false;
            } 
            if (!correo || !correo.length || correo.trim().length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CORREO_ELECTRONICO_REQUERIDO");
                util.ErrorBootstrap(mensaje);
                valido = false;
            }

            if (valido && !self.expRegEmail.test(correo)) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_CORREO_ELECTRONICO_FORMATO_INVALIDO");
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
            var url = AbaxXBRLConstantes.GUARDAR_DESTINATARIO_NOTIFICACION_PATH;
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
            var mensaje = '';

            if (response.Resultado) {
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZAR_DESTINATARIO", parametros) : util.getValorEtiqueta("MENSAJE_EXITO_GUARDAR_DESTINATARIO", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_DESTINATARIO", parametros) : util.getValorEtiqueta("MENSAJE_ERROR_GUARDAR_DESTINATARIO", parametros);
                util.ErrorBootstrap(mensaje);
            }
            self.$scope.cancelar();
        }
        /**
        * Genera un elemento en blanco para ser actualizado y persitido.
        * @return Elemento a persistir.
        ***/
        private generaTemplateNuevoElemento(): shared.modelos.IDestinatarioNotificacion
        {
            var $scope = this.$scope;
            var elemento: shared.modelos.IDestinatarioNotificacion =
                {
                    IdDestinatarioNotificacion: 0,
                    IdListaNotificacion: $scope.entidadPadre.IdListaNotificacion,
                    Nombre: "",
                    CorreoElectronico: ""
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

            $scope.estaGuardando = false;
            $scope.emailPattern = /[a-z0-9!#$%*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            $scope.editando = !$util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO);
            $scope.entidadPadre = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ENTIDAD_PADRE);
            $scope.entidad = $scope.editando ? $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR) : $self.generaTemplateNuevoElemento();
            $scope.puedePersistir = !$scope.editando && $scope.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarGrupoEmpresas) ||
                                    $scope.editando  && $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EditarGrupoEmpresas);
            $scope.guardar = function (): void { $self.guardar(); };
            $scope.cancelar = function (): void {
                $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ENTIDAD_PADRE, $scope.entidadPadre);
                $util.cambiarEstadoVistasA('inicio.listaDestinatariosNotificacion');
            };

            $scope.tituloDestinatarios = $util.getValorEtiqueta('TITULO_DESTINATARIOS_LISTA_NOTIFICACION', { "LISTA_NOTIFICACION": $scope.entidadPadre.Nombre });
        }
        /**
        * Constructor de controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
        **/
        constructor($scope: IAbaxXBRLEditarDestinatarioNotificacionScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }
    /**
    * Inicializamos las dependencias a inyectar.
    **/
    AbaxXBRLEditarDestinatarioNotificacionController.$inject = ["$scope","abaxXBRLRequestService"];
} 