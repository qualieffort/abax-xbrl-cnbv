module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLListadoTipoEmpresaScope extends IAbaxXBRLInicioScope {
        
        /**
        * Indica si se esta ejecutando el proceso de exportación a Excel.
        **/
        estaExportandoExcel: boolean;
        /**
        * Bandera que indica que se esta esperando la respuesta a la consulta de elementos.
        **/
        estaCargandoListadoElementos: boolean;
        /**
        * Bandera que indica si la consulta de elementos retorno datos.
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
        * Bandera que indica si puede asignar taxonomias a los elementos del catalogo.
        **/
        puedeAsignarTaxonomias: boolean;
        /**
        * Configuración de opciones para el datatable.
        **/
        opcionesDataTableActual: any;
        /**
        * Arreglo con el listado de elementos a mostrar.
        **/
        listadoElementos: Array<shared.modelos.ITipoEmpresa>;
        /**
        * Manda a la vista de edición para agregar un nuevo registro.
        **/
        irRegistrarNuevoElemento(): void;
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        **/
        irEditar(elemento: shared.modelos.ITipoEmpresa): void;
        /*
        * Muestra la pantalla para asignar taxonomias a un tipo de empresa del listado.
        **/
        irAsignarTaxonomias(elemento: shared.modelos.ITipoEmpresa): void;
        /**
        * Método que intenta eliminar el elemento indicado del catálogo.
        **/
        eliminar(elemento: shared.modelos.ITipoEmpresa): void;
        /**
        * Exporta la lista de roles a excel.
        **/
        exportaAExcel(): void;
    }
    /***
    * Controlador de la vista para el listado de tipos de empresa.
    **/
    export class AbaxXBRLListadoTipoEmpresaController {
        /** 
        * El scope del controlador 
        **/
        private $scope: IAbaxXBRLListadoTipoEmpresaScope;

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
            $util.cambiarEstadoVistasA('inicio.tipoEmpresaEdicion');

        }
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        **/
        private irEditar(elemento: shared.modelos.ITipoEmpresa): void
        {
            var $util = this.$util;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO, false);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, elemento);
            $util.cambiarEstadoVistasA('inicio.tipoEmpresaEdicion');
        }
        /*
        * Muestra la pantalla para asignar taxonomias a un tipo de empresa.
        **/
        private irAsignarTaxonomias(elemento: shared.modelos.ITipoEmpresa): void {
            var $util = this.$util;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO, elemento);
            $util.cambiarEstadoVistasA('inicio.asignaTaxonomia');
        }
        /**
        * Método que intenta eliminar el elemento indicado del catálogo.
        **/
        private eliminar(elemento: shared.modelos.ITipoEmpresa): void
        {
            var $self = this;
            var $util = $self.$util;
            var $request = $self.abaxXBRLRequestService;
            var mensajeEleminar = $util.getValorEtiqueta("MENSAJE_CONFIRM_ELIMINAR_TIPO_EMPRESA", {"NOMBRE": elemento.Nombre});
            $util.confirmaEliminar(mensajeEleminar).then(function (confirmado: boolean) {
                if (confirmado) {
                    var params: { [nombre: string]: string } = { "id": elemento.IdTipoEmpresa.toString() };
                    var onSucess = function (response: any): void { $self.onEliminarSucess(response.data) };
                    var onError = $request.getOnErrorDefault();
                    $request.post(AbaxXBRLConstantes.BORRAR_TIPO_EMPRESA_PATH, params).then(onSucess, onError);
                }
            });
        }
        /**
        * Método que se invoca cuando se obtiene la respuesta a una petición de borrado.
        * @param data Resultado de la respuseta enviada.
        **/
        private onEliminarSucess(data: shared.modelos.IResultadoOperacion): void
        {
            var $self = this;
            if (data) {
                var util = shared.service.AbaxXBRLUtilsService;
                var msg = '';

                if (data.Resultado == true) {
                    msg = util.getValorEtiqueta('MENSAJE_EXITO_ELIMINAR_TIPO_EMPRESA');
                    util.ExitoBootstrap(msg);
                } else {
                    msg = util.getValorEtiqueta('MENSAJE_ERROR_ELIMINAR_TIPO_EMPRESA');
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
            var onSucess = function (result: any) { $self.onObtenElementosSucess(result.data); }
            var onError = $request.getOnErrorDefault();
            $scope.estaCargandoListadoElementos = true;
            $request.post(AbaxXBRLConstantes.CONSULTA_TIPOS_EMPRESA_PATH, {}).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta del servidor a la solicitud del listado de elementos.
        * @param resultado Resultado retornado por el servidor.
        **/
        private onObtenElementosSucess(listado: Array<shared.modelos.ITipoEmpresa>): void
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
            $request.post(AbaxXBRLConstantes.EXPORTAR_TIPO_EMPRESA_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud de exporatación a excel.
        * @param data Stream con el archivo de Excel a guardar.
        **/
        private onExportarExcelSucess(data: any): void
        {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'TiposEmpresa.xls');
        }

        /**
        * Inicializa los elementos de la clase.
        **/
        private init():void
        {
            var $self = this;
            var $scope = $self.$scope;
            
            $scope.estaCargandoListadoElementos = true;
            $scope.estaExportandoExcel = false;
            $scope.existenElementos = false;
            $scope.puedeRegistrarNuevoElemento = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarTipoEmpresa);
            $scope.puedeEditar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EditarTipoEmpresa);
            $scope.puedeBorrar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarTipoEmpresa);
            $scope.puedeExportarExcel = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ExportarListadoTiposEmpresa);
            $scope.puedeAsignarTaxonomias = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.AsignarTaxonomiaTipoEmpresa);
            $scope.opcionesDataTableActual = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();

            $scope.irRegistrarNuevoElemento = function (): void { $self.irRegistrarNuevoElemento(); };
            $scope.irAsignarTaxonomias = function (elemento: shared.modelos.ITipoEmpresa): void { $self.irAsignarTaxonomias(elemento); };
            $scope.irEditar = function (elemento: shared.modelos.ITipoEmpresa): void { $self.irEditar(elemento); };
            $scope.eliminar = function (elemento: shared.modelos.ITipoEmpresa): void { $self.eliminar(elemento); };
            $scope.exportaAExcel = function () { $self.exportaAExcel(); };
            $self.obtenerListadoElementos();
        }
        /**
        * Consstructor del controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService
        **/
        constructor($scope: IAbaxXBRLListadoTipoEmpresaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }
    /**
    * Definimos los elementos a inyectar en el construcotr de la calse.
    **/
    AbaxXBRLListadoTipoEmpresaController.$inject = ['$scope', 'abaxXBRLRequestService'];
} 