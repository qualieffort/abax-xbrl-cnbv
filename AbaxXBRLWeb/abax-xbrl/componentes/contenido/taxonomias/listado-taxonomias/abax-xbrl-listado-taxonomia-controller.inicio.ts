module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLListadoTaxonomiasScope extends IAbaxXBRLInicioScope {
        
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
        * Bandera que indica si puede activar o desactivar un elemento del catalogo.
        **/
        puedeActivarDesactivar: boolean;
        /**
        * Configuración de opciones para el datatable.
        **/
        opcionesDataTableActual: any;
        /**
        * Arreglo con el listado de elementos a mostrar.
        **/
        listadoElementos: Array<shared.modelos.ITaxonomiaXbrl>;
        /**
        * Manda a la vista de edición para agregar un nuevo registro.
        **/
        irRegistrarNuevoElemento(): void;
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        * @param elemento Elemento a editar.
        **/
        irEditar(elemento: shared.modelos.ITaxonomiaXbrl): void;
        /**
        * Método que intenta eliminar el elemento indicado del catálogo.
        * @param elemento Elemento a eliminar.
        **/
        eliminar(elemento: shared.modelos.ITaxonomiaXbrl): void;
        /**
        * Marca la taxonomía como activa o inactiva.
        * @param elemento Elemento a activar/desactivar.
        */
        activarDesactivar(elemento: shared.modelos.ITaxonomiaXbrl): void;
        /**
        * Exporta la lista de roles a excel.
        **/
        exportaAExcel(): void;
    }
    /***
    * Controlador de la vista para el listado de tipos de empresa.
    **/
    export class AbaxXBRLListadoTaxonomiasController {
        /** 
        * El scope del controlador 
        **/
        private $scope: IAbaxXBRLListadoTaxonomiasScope;

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
            $util.cambiarEstadoVistasA('inicio.taxonomiaEdicion');

        }
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        * @param elemento Elemento a editar.
        **/
        private irEditar(elemento: shared.modelos.ITaxonomiaXbrl): void
        {
            var $util = this.$util;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO, false);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, elemento);
            $util.cambiarEstadoVistasA('inicio.taxonomiaEdicion');
        }
        /**
        * Método que intenta eliminar el elemento indicado del catálogo.
        * @param elemento Elemento a eliminar.
        **/
        private eliminar(elemento: shared.modelos.ITaxonomiaXbrl): void
        {
            var $self = this;
            var $util = $self.$util;
            var $request = $self.abaxXBRLRequestService;
            var mensajeEleminar = $util.getValorEtiqueta("MENSAJE_CONFIRM_ELIMINAR_TAXONOMIA", {"NOMBRE": elemento.Nombre});
            $util.confirmaEliminar(mensajeEleminar).then(function (confirmado: boolean) {
                if (confirmado) {
                    var params: { [nombre: string]: string } = { "id": elemento.IdTaxonomiaXbrl.toString() };
                    var onSucess = function (response: any): void { $self.onEliminarSucess(response.data) };
                    var onError = $request.getOnErrorDefault();
                    $request.post(AbaxXBRLConstantes.BORRAR_TAXONOMIA_PATH, params).then(onSucess, onError);
                }
            });
        }
        /**
        * Marca la taxonomía como activa o inactiva.
        * @param elemento Elemento a activar/desactivar.
        */
        private activarDesactivar(elemento: shared.modelos.ITaxonomiaXbrl):void
        {
            elemento.Activa = !elemento.Activa;
            var self = this;
            var url = AbaxXBRLConstantes.GUARDAR_TAXONOMIA_PATH;
            var json = angular.toJson(elemento);
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onSucess = function (response: any) { self.onActivarDesactivarSucess(response.data, elemento); }
            var onFinally = function () { elemento.EstaActivandoDesactivando = false; };
            self.abaxXBRLRequestService.post(url, { "json": json, "editando": "true" }, false, true).then(onSucess, onError).finally(onFinally);
            elemento.EstaActivandoDesactivando = true;
        }
        /**
        * Maneja la respuesta a la solicitud del servidor de activar o desactivar un elemento.
        * @param response Resultado de la ejecución del proceso en el servidor.
        * @param entidad Entidad procesada.
        **/
        private onActivarDesactivarSucess(response: shared.modelos.IResultadoOperacion, entidad: shared.modelos.ITaxonomiaXbrl): void
        {
            var util = shared.service.AbaxXBRLUtilsService;
            var self = this;
            var parametros: { [token: string]: string } = { "NOMBRE": entidad.Nombre };
            var mensaje = '';

            if (response.Resultado) {
                mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZO_TAXONOMIA", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_TAXONOMIA", parametros);
                util.ErrorBootstrap(mensaje);
            }
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
                    msg = util.getValorEtiqueta('MENSAJE_EXITO_ELIMINAR_TAXONOMIA');
                    util.ExitoBootstrap(msg);
                } else {
                    msg = util.getValorEtiqueta('MENSAJE_ERROR_ELIMINAR_TAXONOMIA');
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
            $request.post(AbaxXBRLConstantes.CONSULTA_TAXONOMIAS_PATH, {}).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta del servidor a la solicitud del listado de elementos.
        * @param resultado Resultado retornado por el servidor.
        **/
        private onObtenElementosSucess(listado: Array<shared.modelos.ITaxonomiaXbrl>): void
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
            $request.post(AbaxXBRLConstantes.EXPORTAR_TAXONOMIAS_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud de exporatación a excel.
        * @param data Stream con el archivo de Excel a guardar.
        **/
        private onExportarExcelSucess(data: any): void
        {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'CatalogoTaxonomías.xls');
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
            $scope.puedeRegistrarNuevoElemento = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarTaxonomias);
            $scope.puedeEditar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EditarTaxonomias);
            $scope.puedeBorrar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarTaxonomias);
            $scope.puedeActivarDesactivar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ActivarDesactivarTaxonomia);
            $scope.puedeExportarExcel = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ExportarTaxonomias);
            $scope.opcionesDataTableActual = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            

            $scope.irRegistrarNuevoElemento = function (): void { $self.irRegistrarNuevoElemento(); };
            $scope.irEditar = function (elemento: shared.modelos.ITaxonomiaXbrl): void { $self.irEditar(elemento); };
            $scope.eliminar = function (elemento: shared.modelos.ITaxonomiaXbrl): void { $self.eliminar(elemento); };
            $scope.activarDesactivar = function (elemento: shared.modelos.ITaxonomiaXbrl): void { $self.activarDesactivar(elemento); };
            $scope.exportaAExcel = function () { $self.exportaAExcel(); };
            $self.obtenerListadoElementos();
        }
        /**
        * Consstructor del controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService
        **/
        constructor($scope: IAbaxXBRLListadoTaxonomiasScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
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