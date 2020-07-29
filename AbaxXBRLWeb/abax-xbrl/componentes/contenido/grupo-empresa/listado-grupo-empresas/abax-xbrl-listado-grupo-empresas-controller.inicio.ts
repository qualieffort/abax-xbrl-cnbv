module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLListadoGrupoEmpresaScope extends IAbaxXBRLInicioScope {
        
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
        listadoElementos: Array<shared.modelos.IGrupoEmpresa>;
        /**
        * Manda a la vista de edición para agregar un nuevo registro.
        **/
        irRegistrarNuevoElemento(): void;
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        * @param elemento Elemento a editar.
        **/
        irEditar(elemento: shared.modelos.IGrupoEmpresa): void;
        /*
        * Muestra la pantalla para la asingación de empresas al grupo.
        * @param elemento Elemento a procesar.
        **/
        irAsignarEmpresas(elemento: shared.modelos.IGrupoEmpresa): void;
        /**
        * Método que intenta eliminar el elemento indicado del catálogo.
        * @param elemento Elemento a eliminar.
        **/
        eliminar(elemento: shared.modelos.IGrupoEmpresa): void;
        /**
        * Exporta la lista de roles a excel.
        **/
        exportaAExcel(): void;
    }
    /***
    * Controlador de la vista para el listado de tipos de empresa.
    **/
    export class AbaxXBRLListadoGrupoEmpresaController {
        /** 
        * El scope del controlador 
        **/
        private $scope: IAbaxXBRLListadoGrupoEmpresaScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio con utilerías genericas.
        **/
        private $util = shared.service.AbaxXBRLUtilsService;
        /**
        * Nombre del estado que despliega la vista para registrar un nuevo elemento o editar un elemento existente.
        **/
        private estadoEdicion: string = 'inicio.editarGrupoEmpresas';

        /**
        * Nombre del estado que despliega la vista para asingar empresas al grupo actual.
        **/
        private estadoAsignarEmpresa: string = 'inicio.asignarEmpresasGrupoEmpresa';


        /**
        * Manda a la vista de edición para agregar un nuevo registro.
        **/
        private irRegistrarNuevoElemento(): void
        {
            var $util = this.$util;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO, true);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, null);
            $util.cambiarEstadoVistasA(this.estadoEdicion);

        }
        /*
        * Muestra la lista para editar uno de los elementos del listado.
        * @param elemento Elemento a editar.
        **/
        private irEditar(elemento: shared.modelos.IGrupoEmpresa): void
        {
            var $util = this.$util;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO, false);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, elemento);
            $util.cambiarEstadoVistasA(this.estadoEdicion);
        }
        /*
        * Muestra la pantalla para la asingación de empresas al grupo.
        * @param elemento Elemento a procesar.
        **/
        irAsignarEmpresas(elemento: shared.modelos.IGrupoEmpresa): void
        {
            var $util = this.$util;
            var propietario: shared.modelos.ISelectItem = { Etiqueta: elemento.Nombre, Valor: elemento.IdGrupoEmpresa };
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, propietario);
            $util.cambiarEstadoVistasA(this.estadoAsignarEmpresa);
        }
        /**
        * Método que intenta eliminar el elemento indicado del catálogo.
        * @param elemento Elemento a eliminar.
        **/
        private eliminar(elemento: shared.modelos.IGrupoEmpresa): void
        {
            var $self = this;
            var $util = $self.$util;
            var $request = $self.abaxXBRLRequestService;
            var mensajeEleminar = $util.getValorEtiqueta("MESNAJE_CONFIRM_ELIMINAR_GRUPO_EMPRESA", {"NOMBRE": elemento.Nombre});
            $util.confirmaEliminar(mensajeEleminar).then(function (confirmado: boolean) {
                if (confirmado) {
                    var params: { [nombre: string]: string } = { "id": elemento.IdGrupoEmpresa.toString() };
                    var onSucess = function (response: any): void { $self.onEliminarSucess(response.data) };
                    var onError = $request.getOnErrorDefault();
                    $request.post(AbaxXBRLConstantes.BORRAR_GRUPO_EMPRESAS_PATH, params).then(onSucess, onError);
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
                    msg = util.getValorEtiqueta('MENSAJE_EXITO_ELIMINAR_GRUPO_EMPRESAS');
                    util.ExitoBootstrap(msg);
                } else {
                    msg = util.getValorEtiqueta('MENSAJE_ERROR_ELIMINAR_GRUPO_EMPRESAS');
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
            var onSucess = function (result: any) { $self.onObtenElementosSucess(result.data.InformacionExtra); }
            var onError = $request.getOnErrorDefault();
            $scope.estaCargandoListadoElementos = true;
            $request.post(AbaxXBRLConstantes.CONSULTA_GRUPO_EMPRESAS_PATH, {}).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta del servidor a la solicitud del listado de elementos.
        * @param resultado Resultado retornado por el servidor.
        **/
        private onObtenElementosSucess(listado: Array<shared.modelos.IGrupoEmpresa>): void
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
            $request.post(AbaxXBRLConstantes.EXPORTAR_GRUPO_EMPRESAS_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud de exporatación a excel.
        * @param data Stream con el archivo de Excel a guardar.
        **/
        private onExportarExcelSucess(data: any): void
        {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'GruposEmpresas.xls');
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
            $scope.puedeRegistrarNuevoElemento = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarGrupoEmpresas);
            $scope.puedeEditar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EditarGrupoEmpresas);
            $scope.puedeBorrar = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarGrupoEmpresas);
            $scope.puedeExportarExcel = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ExportarListadoGrupoEmpresas);
            $scope.puedeAsignarEmpresas = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.AsignarGrupoEmpresas);
            $scope.opcionesDataTableActual = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            

            $scope.irRegistrarNuevoElemento = function (): void { $self.irRegistrarNuevoElemento(); };
            $scope.irEditar = function (elemento: shared.modelos.IGrupoEmpresa): void { $self.irEditar(elemento); };
            $scope.irAsignarEmpresas = function (elemento: shared.modelos.IGrupoEmpresa): void { $self.irAsignarEmpresas(elemento); };
            $scope.eliminar = function (elemento: shared.modelos.IGrupoEmpresa): void { $self.eliminar(elemento); };
            $scope.exportaAExcel = function () { $self.exportaAExcel(); };
            $self.obtenerListadoElementos();
        }
        /**
        * Consstructor del controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService
        **/
        constructor($scope: IAbaxXBRLListadoGrupoEmpresaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }
    /**
    * Definimos los elementos a inyectar en el construcotr de la calse.
    **/
    AbaxXBRLListadoGrupoEmpresaController.$inject = ['$scope', 'abaxXBRLRequestService'];
} 