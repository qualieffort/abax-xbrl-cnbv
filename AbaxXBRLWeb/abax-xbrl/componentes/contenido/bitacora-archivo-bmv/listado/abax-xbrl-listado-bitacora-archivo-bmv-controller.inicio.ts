module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLListadoBitacoraArchivoBMVScope extends IAbaxXBRLInicioScope {
        
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
        * Bandera que indica si tiene facutlad para exportar a excel los registros del listado.
        **/
        puedeExportarExcel: boolean;
        /**
        * Arreglo con el listado de elementos a mostrar.
        **/
        listadoElementos: Array<shared.modelos.IBitacoraArchivoBMV>;
        
        
        /**
        * Método invocado cuanod se preciona alguna pátina de los controlse de paginación.
        * @param numeroPagina El numero de la página que se desea consultar.
        **/
        pageChanged(numeroPagina: number): void;
        /**
        * Exporta la lista de roles a excel.
        **/
        exportaAExcel(): void;
        
        /**
        * Información para la paginación de la información.
        **/
        paginacion: shared.modelos.IPaginacionSimple<shared.modelos.IBitacoraArchivoBMV>;
        /**
        * Valor del filtro para la bitacora.
        **/
        filtroEstadoBitacora: shared.modelos.ISelectItem;
        /**
        * Opciones del combo para el filtro de estado.
        **/
        opcionesFiltroEstado: Array<shared.modelos.ISelectItem>;
        /**
        * Acción a ejecutar cuando se cambia el valor del comobo para el filtro de estado.
        **/
        onChangeFiltroEstado(): void;
    }
    /***
    * Controlador de la vista para el listado de tipos de empresa.
    **/
    export class AbaxXBRLListadoBitacoraArchivoBMVController {
        /** 
        * El scope del controlador 
        **/
        private $scope: IAbaxXBRLListadoBitacoraArchivoBMVScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio con utilerías genericas.
        **/
        private $util = shared.service.AbaxXBRLUtilsService;
        /**
        * Etiquetas a utilizar según el estado del registro.
        **/
        private etiquetasEstado: { [estatus: number]: string } = {  1: "ETIQUETA_APLICADO", 2: "ETIQUETA_ERROR" };
        /**
        * Clase a utilizar para mostrar el texto en un estado.
        **/
        private clasesEstado: { [estatus: number]: string } = { 0: "text-warning", 1: "text-success", 2: "text-danger" };

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
            $scope.paginacion.ListaRegistros = null;
            $scope.paginacion.Filtro = { "Estatus": $scope.filtroEstadoBitacora.Valor.toString() };
            var paginacion = angular.toJson($scope.paginacion);
            var params:{[nombre:string]: string} = {'json': paginacion};
            $request.post(AbaxXBRLConstantes.OBTENER_BITACORA_ARCHIVOS_BMV_PATH, params).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta del servidor a la solicitud del listado de elementos.
        * @param resultado Resultado retornado por el servidor.
        **/
        private onObtenElementosSucess(resultado: shared.modelos.IResultadoOperacion): void
        {
            var paginacion: shared.modelos.IPaginacionSimple<shared.modelos.IBitacoraArchivoBMV> = resultado.InformacionExtra;
            var listado: Array<shared.modelos.IBitacoraArchivoBMV> = paginacion.ListaRegistros;
            var $self = this;
            var scope = $self.$scope;
            if (listado && listado.length > 0) {

                scope.listadoElementos = listado;
                scope.existenElementos = true;
                $self.sincronizaSeleccionVista();
            } else {
                scope.existenElementos = false;
            }
            paginacion.ListaRegistros = null;
            scope.paginacion = paginacion;
            scope.estaCargandoListadoElementos = false;
        }
        

        
        
        /**
        * Desmarca los elementos seleccionados.
        **/
        private limpiarElementosSeleccionados():void {
            var $self = this;
            var $scope = $self.$scope;
            var listaElementos = $scope.listadoElementos;
            var indexElemento: number;
        }
        /**
        * Determina si alguno de los elementos presentados en la vista esta seleccionado y ajusta su estado.
        **/
        private sincronizaSeleccionVista(): void {
            var $self = this;
            var $scope = $self.$scope;
            var listaElementos = $scope.listadoElementos;
            
            var indexElemento: number = 0;
            var indexDistribucion:number = 0

            for (indexElemento = 0; indexElemento < listaElementos.length; indexElemento++) {
                var elemento = listaElementos[indexElemento];
                
                elemento.DescripcionEstado = $self.etiquetasEstado[elemento.Estatus];
                elemento.FechaRegistro = moment(elemento.FechaHoraProcesamiento).format('DD/MM/YYYY HH:mm');
                if (elemento.RutaDestinoArchivoEmisoras && elemento.RutaDestinoArchivoEmisoras != null)
                    elemento.NombreArchivoEmisoras = elemento.RutaDestinoArchivoEmisoras.split('\\').pop();
                else
                    elemento.NombreArchivoEmisoras = "Sin información";
                if (elemento.RutaDestinoArchivoFideicomisos && elemento.RutaDestinoArchivoFideicomisos != null)
                    elemento.NombreArchivoFideicomisos = elemento.RutaDestinoArchivoFideicomisos.split('\\').pop();
                else
                    elemento.NombreArchivoEmisoras = "Sin información";

                if (!elemento.DescripcionEstado) {
                    elemento.DescripcionEstado = 'ETIQUETA_DESCONOCIDO';
                }
                elemento.MostrarDetalle = false;
                elemento.InformacionSalidaJson = JSON.parse(elemento.InformacionSalida);


               
            }
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
            $request.post(AbaxXBRLConstantes.EXPORTAR_BITACORA_ARCHIVOS_BMV_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud de exporatación a excel.
        * @param data Stream con el archivo de Excel a guardar.
        **/
        private onExportarExcelSucess(data: any): void
        {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'Bitacora.xls');
        }


        /**
        * Método invocado cuanod se preciona alguna pátina de los controlse de paginación.
        * @param numeroPagina El numero de la página que se desea consultar.
        **/
        private pageChanged(numeroPagina: number): void {
            var $self = this;
            $self.$scope.paginacion.PaginaActual = numeroPagina;
            $self.obtenerListadoElementos();
        }
        /**
        * Crea un arreglo con las opciones a mostrar en el combo de estados.
        * @return Retorna un arreglo con las opciones del combo de estados.
        **/
        private generaOpcionesComboEstado(): Array<shared.modelos.ISelectItem> {
            var $util = shared.service.AbaxXBRLUtilsService;
            var opciones: Array<shared.modelos.ISelectItem> = [
                { Valor: -1, Etiqueta: $util.getValorEtiqueta("ETIQUETA_TODOS") },
                { Valor: 1, Etiqueta: $util.getValorEtiqueta("ETIQUETA_APLICADO") },
                { Valor: 2, Etiqueta: $util.getValorEtiqueta("ETIQUETA_ERROR") },
            ];

            return opciones;
        }
        /**
        * Inicializa los elementos de la clase.
        **/
        private init():void
        {
            var $self = this;
            var $scope = $self.$scope;
            
            $scope.opcionesFiltroEstado = $self.generaOpcionesComboEstado();
            $scope.filtroEstadoBitacora = $scope.opcionesFiltroEstado[0];
            $scope.estaCargandoListadoElementos = true;
            
            $scope.estaExportandoExcel = false;
            $scope.existenElementos = false;
            
            $scope.puedeExportarExcel = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ExportarBitacoraVersionDocumento);
            $scope.paginacion = {
                PaginaActual: 1,
                RegistrosPorPagina: 10,
                TotalRregistros:0
            }
            
            $scope.exportaAExcel = function () { $self.exportaAExcel(); };
            $scope.pageChanged = function (numeroPagina: number): void { $self.pageChanged(numeroPagina); };
            $scope.onChangeFiltroEstado = function (): void { $self.obtenerListadoElementos(); };
            $self.obtenerListadoElementos();
        }
        /**
        * Consstructor del controlador.
        * @param $scope Scope de interacción con la vista.
        * @param abaxXBRLRequestService
        **/
        constructor($scope: IAbaxXBRLListadoBitacoraArchivoBMVScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.init();
        }
    }
    /** 
    * Definimos los elementos a inyectar en el construcotr de la calse.
    **/
    AbaxXBRLListadoBitacoraArchivoBMVController.$inject = ['$scope', 'abaxXBRLRequestService'];
} 