module abaxXBRL.componentes.controllers {

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface IAbaxXBRLListadoBitacoraVersionDocumentoScope extends IAbaxXBRLInicioScope {
        
        /**
        * Indica si se esta ejecutando el proceso de exportación a Excel.
        **/
        estaExportandoExcel: boolean;
        /**
        * Bandera que indica que se esta esperando la respuesta a la consulta de elementos.
        **/
        estaCargandoListadoElementos: boolean;
        /**
        * Bandera que indica que se esta esperando la respuesta a la solicitud de reprocesamiento de elementos.
        **/
        estaReprocesandoElementos: boolean;
        /**
        * Bandera que indica si la consulta de elementos retorno datos..
        **/
        existenElementos: boolean;
        /**
        * Bandera que indica si tiene facutlad para mandar a procesar nuevamente los elementos seleccionados.
        **/
        puedeReprocesarDocumentos: boolean;
        /**
        * Bandera que indica si tiene facutlad para exportar a excel los registros del listado.
        **/
        puedeExportarExcel: boolean;
        /**
        * Bandera que indica si tiene facutlad para exportar a excel los registros del listado.
        **/
        seReprocesaronTodosDocumentosInstancia: boolean;
        /**
        * Bandera que indica si tiene facutlad para exportar a excel los registros del listado.
        **/
        numeroDocumentosInstanciaReprocesados: number;
        /**
        * Bandera que indica si tiene facutlad para exportar a excel los registros del listado.
        **/
        numeroDocumentosInstanciaAReprocesar: number;
        /**
        * Bandera que indica si tiene facutlad para exportar a excel los registros del listado.
        **/
        porcentajeDocumentosReprocesados: number;
        /**
        * Arreglo con el listado de elementos a mostrar.
        **/
        listadoElementos: Array<shared.modelos.IBitacoraVersionDocumento>;
        /**
        * Muestra u oculta el listado de distribuciones de un registro de versionamiento.
        * @param elemento Elemento a desplegar.
        **/
        mostrarOcultarDistribucion(elemento: shared.modelos.IBitacoraVersionDocumento);
        /**
        * Muestra en una ventana emergente el detalle del registro con los textos sin cortar.
        **/
        mostrarDetalle(elemento: shared.modelos.IBitacoraVersionDocumento): void;
        /**
        * Muestra en una vetnana emeregente el detalle del registsro con los textos sin cortar.
        * @param elemento Elemento a desplegar.
        **/
        mostrarDetalleDistribucion(elemento: shared.modelos.IBitacoraDistribucionDocumento): void;
        /**
        * Selecciona o deselecciona un el elemento indicado.
        * @param elemento Elemento que será marcado o des marcado.
        **/
        seleccionarToggle(elemento: shared.modelos.IBitacoraVersionDocumento): void;
        /**
        * Selecciona o deselecciona un el elemento indicado.
        * @param versionDocumento Entidad conla versión del documento.
        * @param distribucion Entidad con la distribución del documento.
        **/
        seleccionarDistribucionToggle(versionDocumento: shared.modelos.IBitacoraVersionDocumento, distribucion: shared.modelos.IBitacoraDistribucionDocumento): void;
        /**
        * Manda reprocesar los proceso seleccionados.
        **/
        reprocesarElementosSeleccionados(): void;
        /**
         *         /**
        * Manda reprocesar los proceso seleccionados.
        **/
        reprocesarDocumentosInstancia(): void;
        /**
        /**
        * Manda reprocesar todos los documentos instancia.
        **/
        reprocesarTodosDocumentosInstancia(): void;
        /**
        * Manda reprocesar todos los documentos instancia.
        **/
        onObtenerIdsDocumentosInstancia(): void;
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
        * Lista con los identificadores de los registros seleccionados.
        **/
        idsElementosSeleccionados: Array<number>;
        /**
        * Identificador de las distribuciones a reporcesar.
        **/
        idsDistribucionesReprocesar: Array<number>;
        /**
        * Información para la paginación de la información.
        **/
        paginacion: shared.modelos.IPaginacionSimple<shared.modelos.IBitacoraVersionDocumento>;
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
        /**
        * Bandera que indica que se esta esperando la respuesta a la solicitud de reprocesamiento de elementos.
        **/
        estaReprocesandoTodosDocumentosPendientes: boolean;

    }
    /***
    * Controlador de la vista para el listado de tipos de empresa.
    **/
    export class AbaxXBRLListadoBitacoraVersionDocumentoController {
        /** 
        * El scope del controlador 
        **/
        private $scope: IAbaxXBRLListadoBitacoraVersionDocumentoScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**
        * Servicio con utilerías genericas.
        **/
        private $util = shared.service.AbaxXBRLUtilsService;
        /**
        * Etiquetas a utilizar según el estado del registro.
        **/
        private etiquetasEstado: { [estatus: number]: string } = { 0: "ETIQUETA_PENDIENTE", 1: "ETIQUETA_APLICADO", 2: "ETIQUETA_ERROR" };
        /**
        * Clase a utilizar para mostrar el texto en un estado.
        **/
        private clasesEstado: { [estatus: number]: string } = { 0: "text-warning", 1: "text-success", 2: "text-danger" };

        /** Servicio para el manejo asincrono de peticiones*/
        private $interval: ng.IIntervalService;

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
            $request.post(AbaxXBRLConstantes.OBTENER_BITACORA_VERSION_DOCUMENOT_PATH, params).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta del servidor a la solicitud del listado de elementos.
        * @param resultado Resultado retornado por el servidor.
        **/
        private onObtenElementosSucess(resultado: shared.modelos.IResultadoOperacion): void
        {
            var paginacion: shared.modelos.IPaginacionSimple<shared.modelos.IBitacoraVersionDocumento> = resultado.InformacionExtra;
            var listado: Array<shared.modelos.IBitacoraVersionDocumento> = paginacion.ListaRegistros;
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
        * Muestra u oculta el listado de distribuciones de un registro de versionamiento.
        **/
        private mostrarOcultarDistribucion(elemento: shared.modelos.IBitacoraVersionDocumento): void {
            if (elemento.TieneDistribuciones) {
                elemento.MostrarDistribuciones = !elemento.MostrarDistribuciones;
            } else {
                elemento.MostrarDistribuciones = false;
            }
        }
        /**
        * Muestra en una ventana emergente el detalle del registro con los textos sin cortar.
        **/
        private mostrarDetalle(elemento: shared.modelos.IBitacoraVersionDocumento): void {
            
            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var valorVersion = (elemento.Version < 10 ? ('00' + elemento.Version) : (elemento.Version < 100 ? ('0' + elemento.Version) : elemento.Version.toString()));
            var claseEstado = $self.clasesEstado[elemento.Estatus];
            if (!claseEstado) {
                claseEstado = "text-danger";
            }
            var datosElemento: Array<shared.modelos.IElementoListaDetalle> =  [
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_EMPRESA"),
                    Valor: elemento.Empresa
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_DOCUMENTO"),
                    Valor: elemento.Documento
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_VERSION"),
                    Valor: valorVersion
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_ESTADO"),
                    Valor: $util.getValorEtiqueta(elemento.DescripcionEstado),
                    ClaseValor: claseEstado
                    
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_USUARIO"),
                    Valor: elemento.Usuario
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_FECHA_CREACION"),
                    Valor: elemento.FechaRegistro
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_FECHA_ULTIMA_MODIFICACION"),
                    Valor: elemento.FechaUltimaModificacion
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.TextScrollable,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_MENSAJE_ERROR"),
                    Valor: elemento.MensajeError
                }
            ];

            $util.muestraDialogoListaDetalle({
                textoTititulo: $util.getValorEtiqueta('TITULO_DETALLE_REGISTRO_BITACORA'),
                datos: datosElemento,
                claseIconoTitulo: 'i i-health'
            });

        }
        /**
        * Muestra en una vetnana emeregente el detalle del registsro con los textos sin cortar.
        **/
        private mostrarDetalleDistribucion(elemento: shared.modelos.IBitacoraDistribucionDocumento): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $self = this;
            var claseEstado = $self.clasesEstado[elemento.Estatus];
            if (!claseEstado) {
                claseEstado = "text-danger";
            }
            var datosElemento: Array<shared.modelos.IElementoListaDetalle> = [
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("TITULO_CLAVE_DISTRIBUCION"),
                    Valor: elemento.CveDistribucion
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_ESTADO"),
                    Valor: $util.getValorEtiqueta(elemento.DescripcionEstado),
                    ClaseValor: claseEstado
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_FECHA_CREACION"),
                    Valor: elemento.FechaRegistro
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.Text,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_FECHA_ULTIMA_MODIFICACION"),
                    Valor: elemento.FechaUltimaModificacion
                },
                {
                    Tipo: shared.modelos.TipoElementoListadoDetalleEnum.TextScrollable,
                    Titulo: $util.getValorEtiqueta("ETIQUETA_MENSAJE_ERROR"),
                    Valor: elemento.MensajeError
                }
            ];

            $util.muestraDialogoListaDetalle({
                textoTititulo: $util.getValorEtiqueta('TITULO_DETALLE_REGISTRO_DISTRIBUCION'),
                datos: datosElemento,
                claseIconoTitulo: 'i i-feed'
            });
        }

        /**
        * Selecciona o deselecciona un el elemento indicado.
        * @param elemento Elemento que será marcado o des marcado.
        **/
        seleccionarToggle(elemento: shared.modelos.IBitacoraVersionDocumento): void
        {
            var $self = this;
            var $scope = $self.$scope;
            var idsElementosSeleccionados = $scope.idsElementosSeleccionados;
            var seleccionar = !elemento.Seleccionado;
            var idElemento = elemento.IdBitacoraVersionDocumento;
            var indexElemento = idsElementosSeleccionados.indexOf(idElemento);

            if (seleccionar) {
                if (indexElemento == -1) {
                    idsElementosSeleccionados.push(idElemento);
                }
            } else {
                if (indexElemento != -1) {
                    idsElementosSeleccionados.splice(indexElemento, 1);
                }
            }

            elemento.Seleccionado = seleccionar;
        }
        /**
        * Selecciona o deselecciona un el elemento indicado.
        * @param versionDocumento Entidad conla versión del documento.
        * @param distribucion Entidad con la distribución del documento.
        **/
        private seleccionarDistribucionToggle(versionDocumento: shared.modelos.IBitacoraVersionDocumento,distribucion: shared.modelos.IBitacoraDistribucionDocumento): void {
            var $self = this;
            var $scope = $self.$scope;
            var idsDistribucionesReprocesar = $scope.idsDistribucionesReprocesar;
            var seleccionar = !distribucion.Seleccionado;
            var idElemento = distribucion.IdBitacoraDistribucionDocumento;
            var indexElemento = idsDistribucionesReprocesar.indexOf(idElemento);

            if (seleccionar) {
                if (indexElemento == -1) {
                    idsDistribucionesReprocesar.push(idElemento);
                }
            } else {
                if (indexElemento != -1) {
                    idsDistribucionesReprocesar.splice(indexElemento, 1);
                }
            }
            
            distribucion.Seleccionado = seleccionar;
        }

        private reprocesarDocumentosInstancia(): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var listaElemento = $scope.listadoElementos;



            $util.confirmar({

                texto: $util.getValorEtiqueta("MENSAJE_CONFIRM_REPROCEAR_TODOS_DOCUMENTOS"),

            }).then(function (confirmado: boolean): void {
                if (!confirmado) { return; }
                var params: { [nombre: string]: string } =
                    {
                    };
                var onError = $request.getOnErrorDefault();
                var onSucessA = function (response: any) {  };
                var onSucess = function (response: any) {  };
                var onFinally = function (): void { };
                $scope.estaReprocesandoElementos = true;
                $scope.estaReprocesandoTodosDocumentosPendientes = true;
                $request.post(AbaxXBRLConstantes.REPROCESAR_DOCUMENTOS, params).then(onSucess).catch(onError).finally(onFinally);
                $scope.porcentajeDocumentosReprocesados = 0;

                var timer = $self.$interval(callAtInterval, 3000);

                function callAtInterval() {
                    var onSucessStatus = function (response: any) {
                        
                        if (!response.data.InformacionExtra && $scope.porcentajeDocumentosReprocesados >= 99.8) {
                            $util.exito({

                                texto: $util.getValorEtiqueta("MENSAJE_EXITO_REPROCESADO"),

                            });
                            $self.$interval.cancel(timer);
                            $scope.estaReprocesandoElementos = false;
                            $scope.estaReprocesandoTodosDocumentosPendientes = false;
                        }
                    };
                    var onSucessStatusPercentaje = function (response: any) {
                        $scope.porcentajeDocumentosReprocesados = Math.round(response.data.InformacionExtra);
                        console.log(response.data);

                    };
                    var onFinallyStatus = function (): void {  };
                    var onErrorStatus = $request.getOnErrorDefault();
                    $request.post(AbaxXBRLConstantes.VERIFICAR_ESTA_REPROCESANDO, params).then(onSucessStatus).catch(onErrorStatus).finally(onFinallyStatus);
                    $request.post(AbaxXBRLConstantes.OBTENER_PORCENTAJE_REPROCESAMIENTO, params).then(onSucessStatusPercentaje).catch(onErrorStatus).finally(onFinallyStatus);

                }

            });

        }


        /**
        * Manda reprocesar los proceso seleccionados.
        **/
        private reprocesarElementosSeleccionados(): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var listaElemento = $scope.listadoElementos;
            var idsRegostrpsReprocesar: Array<number> = $scope.idsElementosSeleccionados;
            var idsDistribucionesReprocesar: Array<number> = $scope.idsDistribucionesReprocesar;

            if (idsRegostrpsReprocesar.length == 0 && idsDistribucionesReprocesar.length == 0)
            {
                $util.error({
                    texto: $util.getValorEtiqueta("MESNAJE_ERROR_NINGUN_ELEMENTO_SELECCIONADO_REPROCESAR")
                });
                return;
            }
            var parametrosTexto: {[nombre:string]: string}  = { "CANTIDAD": idsRegostrpsReprocesar.length.toString() };
            $util.confirmar({
                
                texto: $util.getValorEtiqueta("MENSAJE_CONFIRM_REPROCEAR_BITACORA", parametrosTexto),
                
            }).then(function (confirmado: boolean): void {
                if (!confirmado) { return; }
                var params: { [nombre: string]: string } =
                    {
                        "idsReprocesar": angular.toJson(idsRegostrpsReprocesar),
                        "idsDistribucionesReprocesar": angular.toJson(idsDistribucionesReprocesar)
                    };
                var onError = $request.getOnErrorDefault();
                var onSucess = function (response: any) { $self.onReprocesarSucess(response.data); };
                var onFinally = function (): void { $scope.estaReprocesandoElementos = false; };
                $scope.estaReprocesandoElementos = true;
                $request.post(AbaxXBRLConstantes.REPROCEAR_BITACORA_VERSION_DOCUMENOT_PATH, params).then(onSucess).catch(onError).finally(onFinally);
            });
        }
        /**
* Manda reprocesar todos los documentos instancia
**/
        private reprocesarTodosDocumentosInstancia(): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var listaElemento = $scope.listadoElementos;
            var idsRegostrpsReprocesar: Array<number> = $scope.idsElementosSeleccionados;
            var idsDistribucionesReprocesar: Array<number> = $scope.idsDistribucionesReprocesar;


            
            $util.confirmar({

                texto: $util.getValorEtiqueta("MENSAJE_CONFIRM_REPROCEAR_TODOS_DOCUMENTOS"),

            }).then(function (confirmado: boolean): void {
                if (!confirmado) { return; }
                var params: { [nombre: string]: string } =
                    {
                    };
                var onError = $request.getOnErrorDefault();
                var onSucess = function (response: any) { $self.onObtenerIdsDocumentosInstancia(response.data); };
                var onFinally = function (): void { $scope.estaReprocesandoElementos = false; };
                $scope.estaReprocesandoElementos = true;
                //$request.post(AbaxXBRLConstantes.REPROCESA_TODOS_DOCUMENTOS_INSTANCIA, params).then(onSucess).catch(onError).finally(onFinally);
                $request.post(AbaxXBRLConstantes.OBTENER_DOCUMENTOS_INSTANCIA, params).then(onSucess).catch(onError).finally(onFinally);
            });
        }

        /**
* Procesa la respuesta a la solicitud de reprocesamiento de archivos.
* @param resultado Resultado de la operación solicitada.
**/
        private onObtenerIdsDocumentosInstancia(resultado: shared.modelos.IResultadoOperacion): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var listaElemento = $scope.listadoElementos;

            if (resultado.Resultado) {
                $scope.numeroDocumentosInstanciaAReprocesar = resultado.InformacionExtra.length;

                for (let documentoInstacia of resultado.InformacionExtra) {

                    console.log(documentoInstacia.IdDocumentoInstancia);

                    /** Se envía cada archivo  */
                    var params: { [nombre: string]: string } =
                        {
                            "idReprocesar": angular.toJson(documentoInstacia.IdDocumentoInstancia)
                        };
                    var onError = $request.getOnErrorDefault();
                    var onSucess = function (response: any) { $self.onReprocesarDocumentoInstanciaSucess(response.data); };
                    var onFinally = function (): void { $scope.estaReprocesandoElementos = false; };
                    $scope.estaReprocesandoElementos = true;
                    $request.post(AbaxXBRLConstantes.REPROCESA_TODOS_DOCUMENTOS_INSTANCIA, params).then(onSucess).catch(onError).finally(onFinally);

                    $scope.estaReprocesandoElementos = true;
                }


            } else {
                $util.error({
                    texto: $util.getValorEtiqueta("MENSAJE_ERROR_REPROCESAR_VERSION_DCOUMENTO")
                });
            }
        }


        /**
        * Procesa la respuesta a la solicitud de reprocesamiento de archivos.
        * @param resultado Resultado de la operación solicitada.
        **/
        private onReprocesarDocumentoInstanciaSucess(resultado: shared.modelos.IResultadoOperacion): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            if (resultado.Resultado) {
                $scope.numeroDocumentosInstanciaReprocesados++;
                $scope.porcentajeDocumentosReprocesados = ($scope.numeroDocumentosInstanciaReprocesados / $scope.numeroDocumentosInstanciaAReprocesar) * 100;
                console.log("Se reprocesó el archivo con id");
                if ($scope.numeroDocumentosInstanciaReprocesados == $scope.numeroDocumentosInstanciaAReprocesar) {
                    $self.limpiarElementosSeleccionados();
                    $util.exito({
                        texto: $util.getValorEtiqueta("MENSAJE_EXITO_REPROCESAR_BITACORA_VERSION_DOCUMENTO")
                    });

                    $scope.numeroDocumentosInstanciaReprocesados = 0;
                    $scope.porcentajeDocumentosReprocesados = 0;
                } 
            } else {
                console.log("No se reprocesó el archivo con id");
                $scope.seReprocesaronTodosDocumentosInstancia = false;
                $util.error({
                    texto: $util.getValorEtiqueta("MENSAJE_ERROR_REPROCESAR_VERSION_DCOUMENTO")
                });
            }
        }

        /**
        * Procesa la respuesta a la solicitud de reprocesamiento de archivos.
        * @param resultado Resultado de la operación solicitada.
        **/
        private onReprocesarSucess(resultado: shared.modelos.IResultadoOperacion): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $self = this;
            if (resultado.Resultado) {
                $self.limpiarElementosSeleccionados();
                $util.exito({
                    texto: $util.getValorEtiqueta("MENSAJE_EXITO_REPROCESAR_BITACORA_VERSION_DOCUMENTO")
                });
            } else {
                $util.error({
                    texto: $util.getValorEtiqueta("MENSAJE_ERROR_REPROCESAR_VERSION_DCOUMENTO")
                });
            }
        }
        /**
        * Desmarca los elementos seleccionados.
        **/
        private limpiarElementosSeleccionados():void {
            var $self = this;
            var $scope = $self.$scope;
            var listaElementos = $scope.listadoElementos;
            var indexElemento: number;
            for (indexElemento = 0; indexElemento < listaElementos.length; indexElemento++) {
                var elemento = listaElementos[indexElemento];
                elemento.Seleccionado = false;
            }
            $scope.idsElementosSeleccionados = [];
            $scope.idsDistribucionesReprocesar = [];
        }



        /**
        * Determina si alguno de los elementos presentados en la vista esta seleccionado y ajusta su estado.
        **/
        private sincronizaSeleccionVista(): void {
            var $self = this;
            var $scope = $self.$scope;
            var listaElementos = $scope.listadoElementos;
            var idsSeleccionados = $scope.idsElementosSeleccionados;
            var indexElemento: number = 0;
            var indexDistribucion:number = 0

            for (indexElemento = 0; indexElemento < listaElementos.length; indexElemento++) {
                var elemento = listaElementos[indexElemento];
                elemento.Seleccionado = idsSeleccionados.indexOf(elemento.IdBitacoraVersionDocumento) != -1;
                elemento.DescripcionEstado = $self.etiquetasEstado[elemento.Estatus];
                elemento.TieneDistribuciones = elemento.Distribuciones && elemento.Distribuciones.length > 0;
                elemento.CatindadDistribuciones = elemento.TieneDistribuciones ? elemento.Distribuciones.length : 0;
                elemento.PuedeReprocesar = elemento.Estatus != 1;
                elemento.FechaRegistro = moment(elemento.FechaRegistro).format('DD/MM/YYYY HH:mm');
                elemento.FechaUltimaModificacion = moment(elemento.FechaUltimaModificacion).format('DD/MM/YYYY HH:mm');
                
                if (!elemento.DescripcionEstado) {
                    elemento.DescripcionEstado = 'ETIQUETA_DESCONOCIDO';
                }
                if (elemento.Distribuciones && elemento.Distribuciones.length > 0) {
                    for (indexDistribucion = 0; indexDistribucion < elemento.Distribuciones.length; indexDistribucion++) {
                        var distribucion: shared.modelos.IBitacoraDistribucionDocumento = elemento.Distribuciones[indexDistribucion];
                        distribucion.DescripcionEstado = $self.etiquetasEstado[distribucion.Estatus];
                        if (!distribucion.DescripcionEstado) {
                            distribucion.DescripcionEstado = 'ETIQUETA_DESCONOCIDO';
                        }
                        distribucion.FechaRegistro = moment(distribucion.FechaRegistro).format('DD/MM/YYYY HH:mm');
                        distribucion.FechaUltimaModificacion = moment(distribucion.FechaUltimaModificacion).format('DD/MM/YYYY HH:mm');
                    }
                }
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
            $request.post(AbaxXBRLConstantes.EXPORTAR_BITACORA_VERSION_DOCUMENOT_PATH, {}, true).then(onSuccess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud de exporatación a excel.
        * @param data Stream con el archivo de Excel a guardar.
        **/
        private onExportarExcelSucess(data: any): void
        {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'Distribuciones.xls');
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
                { Valor: 0, Etiqueta: $util.getValorEtiqueta("ETIQUETA_PENDIENTE") },
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
            $scope.estaReprocesandoElementos = false;
            $scope.estaExportandoExcel = false;
            $scope.seReprocesaronTodosDocumentosInstancia = true;
            $scope.existenElementos = false;
            $scope.numeroDocumentosInstanciaReprocesados = 0;
            $scope.numeroDocumentosInstanciaAReprocesar = 0;
            $scope.porcentajeDocumentosReprocesados = 0.0;
            $scope.estaReprocesandoTodosDocumentosPendientes = false;
            $scope.idsElementosSeleccionados = [];
            $scope.idsDistribucionesReprocesar = [];
            $scope.puedeReprocesarDocumentos = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ReprocesarBitacoraVersionDocumento);
            $scope.puedeExportarExcel = $scope.tieneFacultad(AbaxXBRLFacultadesEnum.ExportarBitacoraVersionDocumento);
            $scope.paginacion = {
                PaginaActual: 1,
                RegistrosPorPagina: 10,
                TotalRregistros:0
            }
            
            $scope.mostrarOcultarDistribucion = function (elemento: shared.modelos.IBitacoraVersionDocumento): void { $self.mostrarOcultarDistribucion(elemento); };
            $scope.mostrarDetalle = function (elemento: shared.modelos.IBitacoraVersionDocumento): void { $self.mostrarDetalle(elemento); };
            $scope.mostrarDetalleDistribucion = function (elemento: shared.modelos.IBitacoraDistribucionDocumento): void { $self.mostrarDetalleDistribucion(elemento); };
            $scope.seleccionarToggle = function (elemento: shared.modelos.IBitacoraVersionDocumento): void { $self.seleccionarToggle(elemento); };
            $scope.seleccionarDistribucionToggle = function (versionDocumento: shared.modelos.IBitacoraVersionDocumento, distribucion: shared.modelos.IBitacoraDistribucionDocumento): void { $self.seleccionarDistribucionToggle(versionDocumento, distribucion); };
            $scope.reprocesarElementosSeleccionados = function (): void { $self.reprocesarElementosSeleccionados(); };
            $scope.reprocesarDocumentosInstancia = function (): void { $self.reprocesarDocumentosInstancia(); };
            $scope.reprocesarTodosDocumentosInstancia = function (): void { $self.reprocesarTodosDocumentosInstancia(); };
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
        constructor($scope: IAbaxXBRLListadoBitacoraVersionDocumentoScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $interval: ng.IIntervalService)
        {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$interval = $interval;
            this.init();
        }
    }
    /**
    * Definimos los elementos a inyectar en el construcotr de la calse.
    **/
    AbaxXBRLListadoTipoEmpresaController.$inject = ['$scope', 'abaxXBRLRequestService', '$interval'];
} 