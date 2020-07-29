module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLEditarTaxonomiaScope extends IAbaxXBRLInicioScope
    {
        /**
        * Bandera que indica si puede persistir la información del elemento.
        **/
        puedePersistir: boolean;
        /**
        * Bandera que indica si puede activar o desactivar un elemento del catalogo.
        **/
        puedeActivarDesactivar: boolean;
        /**
        * Bandera que indica si se esta editando una entidad o se esta creando una nueva.
        **/
        editando: boolean;
        /**
        * Bandera que indica si se esta ejecutando el proceso de guardado.
        **/
        estaGuardando: boolean;
        /**
        * Opciones a presentar en el combo de año.
        **/
        opcionesAno: Array<shared.modelos.ISelectItem>;
        /**
        * Entidad a editar o agregar.
        **/
        entidad: shared.modelos.ITaxonomiaXbrl;
        /**
        * Formulario a validar.
        **/
        formulario: ng.IFormController;
        /**
        * Guarda los cambios realizados en la entidad.
        **/
        guardar(): void;

        espacioNombresPrincipal: RegExp;

        puntoEntrada: RegExp;
    }
    /**
    * Controlador de la vista
    **/
    export class AbaxXBRLEditarTaxonomiaController
    {
        /**
        * Scope de interacción con la vista.
        **/
        private $scope: IAbaxXBRLEditarTaxonomiaScope;
        /**
        * Servicio para el manejo de las peticiones al servidor. 
        **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio con utilerías genericas.
        **/
        private $util = shared.service.AbaxXBRLUtilsService;
        /**
        * Primera opcion a mostrar en el combo de año.
        **/
        private primerAnoXBRL: number = 1998;
        
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
            var ano: number = entidad.Anio;
            var puntoEntrada: string = entidad.PuntoEntrada;
            var espacioNombres: string = entidad.EspacioNombresPrincipal;
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
            if (ano < AbaxXBRLConstantes.ANO_PRIMER_TAXONOMIA_XBRL) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ANO_REQUERIDO");
                util.ErrorBootstrap(mensaje);
                valido = false;
            }
            if (!espacioNombres || espacioNombres.trim().length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ANO_ESPACIO_NOMBRES");
                util.ErrorBootstrap(mensaje);
                valido = false;
            }
            if (!puntoEntrada || puntoEntrada.trim().length == 0) {
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ANO_PUNTO_ENTRADA");
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
            var url = AbaxXBRLConstantes.GUARDAR_TAXONOMIA_PATH;
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
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZO_TAXONOMIA", parametros) : util.getValorEtiqueta("MENSAJE_EXITO_GUARDAR_TAXONOMIA", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = self.$scope.editando ? util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_TAXONOMIA", parametros) : util.getValorEtiqueta("MENSAJE_ERROR_GUARDAR_TAXONOMIA", parametros);
                util.ErrorBootstrap(mensaje);
            }
            util.cambiarEstadoVistasA("inicio.taxonomiasListado");
        }
        /**
        * Genera un elemento en blanco para ser actualizado y persitido.
        * @return Elemento a persistir.
        ***/
        private generaTemplateNuevoElemento(): shared.modelos.ITaxonomiaXbrl
        {
            var elemento: shared.modelos.ITaxonomiaXbrl =
                {
                    IdTaxonomiaXbrl: 0,
                    Nombre: "",
                    Descripcion: "",
                    Anio: null,
                    EspacioNombresPrincipal: "",
                    PuntoEntrada: "",
                    Activa: true
                }
            return elemento;
        }
        /**
        * Genera un arreglo con las opciones a presentar en el combo de Año.
        * @return Lista de opciones a presentar.
        **/
        private ObtenOpcionesAno(): Array<shared.modelos.ISelectItem> {

            var $self = this;
            var opciones: Array<shared.modelos.ISelectItem> = [];
            var anoActual: number = moment().year();
            var ano: number;
            for (ano = $self.primerAnoXBRL; ano <= anoActual; ano++)
            {
                var opcion: shared.modelos.ISelectItem = {
                    Etiqueta: ano.toString(),
                    Valor:ano
                }
                opciones.push(opcion);
            }
            return opciones;
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
            $scope.editando = !$util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO);
            $scope.entidad = $scope.editando ? $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR) : $self.generaTemplateNuevoElemento();
            $scope.puedeActivarDesactivar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ActivarDesactivarTaxonomia);
            $scope.puedePersistir = !$scope.editando && $scope.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarTaxonomias) ||
                                    $scope.editando  && $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EditarTaxonomias);

            $scope.opcionesAno = $self.ObtenOpcionesAno();
            $scope.guardar = function (): void { $self.guardar(); };

            $scope.espacioNombresPrincipal = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/;
            $scope.puntoEntrada = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/;
        }
        /**
        * Constructor de controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
        **/
        constructor($scope: IAbaxXBRLEditarTaxonomiaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();

        }
    }
    /**
    * Inicializamos las dependencias a inyectar.
    **/
    AbaxXBRLEditarTaxonomiaController.$inject = ["$scope","abaxXBRLRequestService"];
} 