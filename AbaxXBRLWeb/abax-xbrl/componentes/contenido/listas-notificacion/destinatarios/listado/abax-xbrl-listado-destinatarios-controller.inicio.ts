module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLListadoDestinatariosNotificacionScope extends IAbaxXBRLInicioScope {
        
        /**
        * Indica si se esta ejecutando el proceso de exportación a Excel.
        **/
        estaExportandoExcel: boolean;
        /**
        * Bandera que indica que se esta esperando la respuesta a la consulta de elementos.
        **/
        estaCargandoListadoElementos: boolean;
        /**
        * Bandera que indica si la consulta de elementos retorno datos..
        **/
        existenElementos: boolean;
        /**
        * Bandera que indica si tiene facutlad para registrar un núevo elemento.
        **/
        puedeRegistrarNuevoElemento: boolean;
        /**
        * Bandera que indica si puede editar un elemento del catalogo.
        **/
        puedeEditar: boolean;
        /**
        * Bandera que indica si puede borrar un elemento del catalogo.
        **/
        puedeBorrar: boolean;
        /**
        * Bandera que indica si puede exportar a excel los elementos del catalogo.
        **/
        puedeExportarExcel: boolean;
        /**
        * Bandera que indica si se tiene la facultad para asingar empresas al grupo.
        **/
        puedeAsignarEmpresas: boolean;
        /**
        * Configuración de opciones para el datatable.
        **/
        opcionesDataTableActual: any;
        /**
        * Arreglo con el listado de elementos a mostrar.
        **/
        listadoElementos: Array<shared.modelos.IDestinatarioNotificacion>;
        /**
        * Manda a la vista de edición para agregar un nuevo registro.
        **/
        irRegistrarNuevoElemento(): void;
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        * @param elemento Elemento a editar.
        **/
        irEditar(elemento: shared.modelos.IDestinatarioNotificacion): void;
        /**
        * Método que intenta eliminar el elemento indicado del catálogo.
        * @param elemento Elemento a eliminar.
        **/
        eliminar(elemento: shared.modelos.IDestinatarioNotificacion): void;
        /**
        * Exporta la lista de roles a excel.
        **/
        exportaAExcel(): void;
        /**
        * Identificador del estado de vista para el listado de notificaciones..
        **/
        estadoVistaListasNotificacion: string;
        /**
        * Identificador del estado de la vista para la edicion de elementos.
        **/
        estadiVistaEdicion: string;
        /**
        * Entidad padre a la que pertenecen los retistros presentados
        **/
        entidadPadre: shared.modelos.IListaNotificacion;
        /**
        * Titulo del destinatario a mostrar.
        **/
        tituloDestinatarios: string;
    }
    /***
    * Controlador de la vista para el listado de tipos de empresa.
    **/
    export class AbaxXBRLListadoDestinatariosNotificacionController {
        /** 
        * El scope del controlador 
        **/
        private $scope: IAbaxXBRLListadoDestinatariosNotificacionScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio con utilerías genericas.
        **/
        private $util = shared.service.AbaxXBRLUtilsService;
        
        /**
        * Manda a la vista de edición para agregar un nuevo registro.
        **/
        private irRegistrarNuevoElemento(): void
        {
            var $util = this.$util;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO, true);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, null);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ENTIDAD_PADRE, this.$scope.entidadPadre);
            $util.cambiarEstadoVistasA(this.$scope.estadiVistaEdicion);

        }
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        * @param elemento Elemento a editar.
        **/
        private irEditar(elemento: shared.modelos.IDestinatarioNotificacion): void
        {
            var $util = this.$util;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO, false);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, elemento);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ENTIDAD_PADRE, this.$scope.entidadPadre);
            $util.cambiarEstadoVistasA(this.$scope.estadiVistaEdicion);
        }
        
        /**
        * Método que intenta eliminar el elemento indicado del catálogo.
        * @param elemento Elemento a eliminar.
        **/
        private eliminar(elemento: shared.modelos.IDestinatarioNotificacion): void
        {
            var $self = this;
            var $util = $self.$util;
            var $request = $self.abaxXBRLRequestService;
            var mensajeEleminar = $util.getValorEtiqueta("MENSAJE_CONFIRM_ELIMINAR_DESTINATARIO_NOTIFICACION", {"NOMBRE": elemento.Nombre});
            $util.confirmaEliminar(mensajeEleminar).then(function (confirmado: boolean) {
                if (confirmado) {
                    var params: { [nombre: string]: string } = { "id": elemento.IdDestinatarioNotificacion.toString() };
                    var onSucess = function (response: any): void { $self.onEliminarSucess(response.data, elemento.Nombre) };
                    var onError = $request.getOnErrorDefault();
                    $request.post(AbaxXBRLConstantes.BORRAR_DESTINATARIO_NOTIFICACION_PATH, params).then(onSucess, onError);
                }
            });
        }
        /**
        * Método que se invoca cuando se obtiene la respuesta a una petición de borrado.
        * @param data Resultado de la respuseta enviada.
        **/
        private onEliminarSucess(data: shared.modelos.IResultadoOperacion, nombre: string): void
        {
            var $self = this;
            if (data) {
                var util = shared.service.AbaxXBRLUtilsService;
                var msg = '';

                if (data.Resultado == true) {
                    msg = util.getValorEtiqueta('MENSAJE_EXITO_ELIMNAR_DESTINATARIO', { "NOMBRE": nombre });
                    util.ExitoBootstrap(msg);
                } else {
                    msg = util.getValorEtiqueta('MENSAJE_ERROR_ELIMINAR_DESTINATARIO', { "NOMBRE": nombre });
                    util.ErrorBootstrap(msg);
                }

                $self.obtenerListadoElementos();
            }
        }
        /**
        * Método que consulta los elementos de BD.
        **/
        private obtenerListadoElementos(): void
        {
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var params: { [nombre: string]: string } = { "id": $scope.entidadPadre.IdListaNotificacion.toString() };
            var onSucess = function (result: any) { $self.onObtenElementosSucess(result.data); }
            var onError = $request.getOnErrorDefault();
            $scope.estaCargandoListadoElementos = true;
            $request.post(AbaxXBRLConstantes.CONSULTA_DESTINATARIOS_NOTIFICACION_PATH, params).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta del servidor a la solicitud del listado de elementos.
        * @param resultado Resultado retornado por el servidor.
        **/
        private onObtenElementosSucess(listado: Array<shared.modelos.IDestinatarioNotificacion>): void
        {
            var scope = this.$scope;
            if (listado && listado.length > 0) {

                scope.listadoElementos = listado;
                scope.existenElementos = true;
                var paging = listado.length > 10;
                scope.opcionesDataTableActual.withOption("paging", paging);
                if (!paging) {
                    scope.opcionesDataTableActual.withOption("sDom", '<"table-responsive"t>');
                } else {
                    scope.opcionesDataTableActual.withOption("sDom", '<"row"<"col-sm-6"l><"col-sm-6"f>r><"table-responsive"t><"row"<"col-sm-6"i><"col-sm-6"p>>');
                }
            } else {
                scope.existenElementos = false;
            }
            scope.estaCargandoListadoElementos = false;
        }

        /**
        * Exporta la lista de roles a excel.
        **/
        private exportaAExcel(): void
        {
            var self = this;
            var $request = self.abaxXBRLRequestService;
            var onSuccess = function (result: any) { self.onExportarExcelSucess(result.data); }
            var onError = $request.getOnErrorDefault();
            var onFinally = function () { self.$scope.estaExportandoExcel = false; }
            self.$scope.estaExportandoExcel = true;
            $request.post(AbaxXBRLConstantes.EXPORTAR_DESTINATARIOS_NOTIFICACION_PATH, { 'id': self.$scope.entidadPadre.IdListaNotificacion }, true).then(onSuccess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud de exporatación a excel.
        * @param data Stream con el archivo de Excel a guardar.
        **/
        private onExportarExcelSucess(data: any): void
        {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'Destinatarios_' + this.$scope.entidadPadre.Nombre.replace(' ','') + '.xls');
        }

        /**
        * Inicializa los elementos de la clase.
        **/
        private init(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;

            
            $scope.estadiVistaEdicion = 'inicio.editarDestinatarioNotificacion';
            $scope.estadoVistaListasNotificacion = 'inicio.listadoListasNotificacion';
            $scope.estaCargandoListadoElementos = true;
            $scope.estaExportandoExcel = false;
            $scope.existenElementos = false;
            $scope.entidadPadre = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ENTIDAD_PADRE);
            $scope.puedeRegistrarNuevoElemento = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarDestinatarioNotificacion);
            $scope.puedeEditar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EditarDestinatarioNotificacion);
            $scope.puedeBorrar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarDestinatarioNotificacion);
            $scope.puedeExportarExcel = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ExportarDestinatariosNotificacion);
            $scope.opcionesDataTableActual = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            

            $scope.irRegistrarNuevoElemento = function (): void { $self.irRegistrarNuevoElemento(); };
            $scope.irEditar = function (elemento: shared.modelos.IDestinatarioNotificacion): void { $self.irEditar(elemento); };
            $scope.eliminar = function (elemento: shared.modelos.IDestinatarioNotificacion): void { $self.eliminar(elemento); };
            $scope.exportaAExcel = function () { $self.exportaAExcel(); };

            $scope.tituloDestinatarios = $util.getValorEtiqueta('TITULO_DESTINATARIOS_LISTA_NOTIFICACION', { "LISTA_NOTIFICACION": $scope.entidadPadre.Nombre });
            $self.obtenerListadoElementos();
        }
        /**
        * Consstructor del controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService
        **/
        constructor($scope: IAbaxXBRLListadoDestinatariosNotificacionScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }
    /**
    * Definimos los elementos a inyectar en el construcotr de la calse.
    **/
    AbaxXBRLListadoDestinatariosNotificacionController.$inject = ['$scope', 'abaxXBRLRequestService'];
} 