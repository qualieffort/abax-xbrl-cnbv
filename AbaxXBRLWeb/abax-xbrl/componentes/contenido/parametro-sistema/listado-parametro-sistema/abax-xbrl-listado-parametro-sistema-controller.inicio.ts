module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLListadoParametroSistemaScope extends IAbaxXBRLInicioScope {
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
        * Bandera que indica si puede editar un elemento del catalogo.
        **/
        puedeEditar: boolean;
        /**
        * Bandera que indica si puede exportar a excel los elementos del catalogo.
        **/
        puedeExportarExcel: boolean;
        /**
        * Configuración de opciones para el datatable.
        **/
        opcionesDataTableActual: any;
        /**
        * Arreglo con el listado de elementos a mostrar.
        **/
        listadoElementos: Array<shared.modelos.IParametroSistema>;
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        * @param elemento Elemento a editar.
        **/
        irEditar(elemento: shared.modelos.IParametroSistema): void;
        /**
        * Exporta la lista de roles a excel.
        **/
        exportaAExcel(): void;
    }
    /***
    * Controlador de la vista para el listado de tipos de empresa.
    **/
    export class AbaxXBRLListadoParametroSistemaController {
        /** 
        * El scope del controlador 
        **/
        private $scope: IAbaxXBRLListadoParametroSistemaScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio con utilerías genericas.
        **/
        private $util = shared.service.AbaxXBRLUtilsService;
        /**
        * Nombre del estado que despliega la vista para registrar un nuevo elemento o editar un elemento existente.
        **/
        private estadoEdicion: string = 'inicio.editarParametroSistema';


        /*
        * Muestra la lista para editar uno de los elementos del listado.
        * @param elemento Elemento a editar.
        **/
        private irEditar(elemento: shared.modelos.IParametroSistema): void
        {
            var $util = this.$util;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, elemento);
            $util.cambiarEstadoVistasA(this.estadoEdicion);
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
            $request.post(AbaxXBRLConstantes.CONSULTA_PARAMETROS_SISTEMA_PATH, {}).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta del servidor a la solicitud del listado de elementos.
        * @param resultado Resultado retornado por el servidor.
        **/
        private onObtenElementosSucess(listado: Array<shared.modelos.IParametroSistema>): void
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
            $request.post(AbaxXBRLConstantes.EXPORTAR_PARAMETROS_SISTEMA_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud de exporatación a excel.
        * @param data Stream con el archivo de Excel a guardar.
        **/
        private onExportarExcelSucess(data: any): void
        {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'ParametrosSistema.xls');
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
            $scope.puedeEditar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ActualizarParametrosSistema);
            $scope.puedeExportarExcel = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ExportarParametrosSistema);
            $scope.opcionesDataTableActual = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            

            $scope.irEditar = function (elemento: shared.modelos.IParametroSistema): void { $self.irEditar(elemento); };
            $scope.exportaAExcel = function () { $self.exportaAExcel(); };
            $self.obtenerListadoElementos();
        }
        /**
        * Consstructor del controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService
        **/
        constructor($scope: IAbaxXBRLListadoParametroSistemaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }
    /**
    * Definimos los elementos a inyectar en el construcotr de la calse.
    **/
    AbaxXBRLListadoParametroSistemaController.$inject = ['$scope', 'abaxXBRLRequestService'];
} 