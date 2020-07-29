///<reference path="../../../Scripts/typings/FileSaver/FileSaver.d.ts" /> 

module abaxXBRL.componentes.controllers {
    /**
     * Definición de la estructura del scope para el controlador que sirve para listar los documentos del usuario
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export interface AbaxXBRLListaDocumentosInstanciaScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de documentos del usuario a mostrar.
        **/
        documentosUsuario: Array<abaxXBRL.shared.modelos.IDocumentoInstancia>;
        /**
        * Listado de documentos compartidos a mostrar.
        **/
        documentosCompartidos: Array<abaxXBRL.shared.modelos.IDocumentoInstancia>;

        /**
        * Listado de documentos recibidos a mostrar.
        */
        documentosRecibidos: Array<abaxXBRL.shared.modelos.IDocumentoInstancia>;
        /**
        * Listado de emisoras a mostrar en el seleect.
        **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;
        /**
        * Emisora seleccionada.
        **/
        emisoraSeleccionada: abaxXBRL.shared.modelos.IEmisora;
        /**
         * Fecha del documento instancia a buscar.
         **/
        fecha: Date;
        /**
        * Filtro por fecha.
        **/
        filtroFecha: string;
        /**
        * Llena el listado de documentos.
        **/
        cargarDocumentosUsuario(): void;
        /**
        * Solicita la confirmación para la eliminación del usuario (¿Esta Seguro de Borrar el usuario?) y|
        * si es positiva se elimina el usuario.
        * @param id del usuario que se pretende eliminar.
        **/
        eliminaDocumentoUsuario(id: string): void;
        /**
        * Exporta la lista de documentosUsuario a excel.
        **/
        descargaArchivo(): void;
        /**
        * Bandera que indica que aun no se han obtenido los documentos instancia del usuario.
        **/
        cargandoDocumentosUsuario: boolean;
        /**
        * Bandera que indica que no existen documentos instancia del usuario.
        **/
        existenDocumentosUsuario: boolean;
        /**
        * Objeto con las opcinoes de configuración del datatable local.
        **/
        opcionesDataTableDocumentosUsuario: any;
        /**
        * Bandera que indica que aun no se han obtenido los documentos instancia compartidos.
        **/
        cargandoDocumentosCompartidos: boolean;

        /**
        * Bandera que indica que no existen documentos instancia compartidos.
        **/
        existenDocumentosCompartidos: boolean;

        /**
        * Bandera que indica que aun no se han obtenido los documentos instancia recibidos.
        **/
        cargandoDocumentosRecibidos: boolean;

        /**
        * Bandera que indica que no existen documentos instancia recibidos.
        **/
        existenDocumentosRecibidos: boolean;

        /**
        * Objeto con las opcinoes de configuración del datatable local.
        **/
        opcionesDataTableDocumentosRecibidos: any;
        
        /**
        * Objeto con las opcinoes de configuración del datatable local.
        **/
        opcionesDataTableDocumentosCompartidos: any;
        /**
        * Referencia a la instancia del datatable.
        **/
        dataTableInstance: any;
        /**
         * Bandera que indica que se esta exportando el listado a excel.
         **/
        exportando: boolean;
        /**
         * Bandera que indica que se mostrara la tab 1.
         **/
        tab1: string;
        /**
         * Bandera que indica que se mostrara la tab 2.
         **/
        tab2: string;

        /**
         * Bandera que indica que se mostrara la tab .
         **/
        tab3: string;
        /**
         * Funcion para cambiar la clase para mostrar tabs.
         **/
        mostrarTab(mostrarTab1: boolean, mostrarTab2: boolean, mostrarTab3:boolean): void;

        /**
        * Expone el enum con la lista de facultades disponibles.
        **/
        FacultadesEnum: any;

        /**
        * Determina si el usuario en sesión tiene la facultad indicada.
        * @param facultad Identificador de la facultad a evaluar.
        * @return Si el usuario en sesión tiene la facultad indicada.
        **/
        tieneFacultad(facultad: number): boolean;
        /**
        * Bandera para mostrar u ocultar el datepiker.
        **/
        datePikerOpen: boolean;
        /**
        * Muestra el datepiker.
        **/
        muestraDatePiker($event);
        /**
        * Bandera que indica si tiene la facultad para guardar.
        **/
        tieneFacultadGuardarDocumentoInstancia: boolean;
        /**
        * Bandera que indica si tiene la facultad para editar.
        **/
        tieneFacultadEditarDocumentoInstancia: boolean;
        /**
        * Bandera que indica si tiene la facultad para eliminar.
        **/
        tieneFacultadEliminarDocumentoInstancia: boolean;
        /**
        * Bandera que indica si tiene la facultad para exportar.
        **/
        tieneFacultadExportarDocumentoInstancia: boolean;
        /**
        * Bandera que indica si el usuario tiene facultad para acceder al visor generico desde su documento.
        **/
        tieneFacultadVisorGenerico: boolean;
        /**
        * Bandera que indica si el usaurio tiene facultad para migrar los documentos de instancia a la nueva vesrión.
        **/
        tieneFacultadMigrarVersiondocumentos: boolean;
        /**
        * Filtro de documentos.
        **/
        filtroDocumentos(value: shared.modelos.IDocumentoInstancia, index: number): boolean;

        /**
        * Información para la paginación de la información de documentos propios.
        **/
        paginacionPropios: shared.modelos.IPaginacionSimple<shared.modelos.IDocumentoInstancia>;
        /**
        * Información para la paginación de la información de documentos compartidos.
        **/
        paginacionCompartidos: shared.modelos.IPaginacionSimple<shared.modelos.IDocumentoInstancia>;
        /**
        * Información para la paginación de la información de documentos Enviados.
        **/
        paginacionRecibidos: shared.modelos.IPaginacionSimple<shared.modelos.IDocumentoInstancia>;
        /**
        * Carga el listado de documentos recibidos.
        **/
        cargaDocumentosRecibidos(): void;
        /**
        * Carga el listado de documentos propios.
        **/
        cargaDocumentosPropios(): void;
        /**
        * Carga el listado de documentos compartidos.
        **/
        cargaDocumentosCompartidos(): void;
        /**
        * Carga la página seleccionada para el conjunto de documentos.
        **/
        pageChangedRecibidos(newPageNumber: number);
        /**
        * Carga la página seleccionada para el conjunto de documentos.
        **/
        pageChangedPropios(newPageNumber: number);
        /**
        * Carga la página seleccionada para el conjunto de documentos.
        **/
        pageChangedCompartidos(newPageNumber: number);
    }

    /**
     * Implementación de un controlador para la visualización del listado de documentos del usuario
     *
     * @author Alan Alberto Caballero Ibarra
     * @version 1.0
     */
    export class AbaxXBRLListaDocumentosInstanciaController {
        /** El scope del controlador */
        private $scope: AbaxXBRLListaDocumentosInstanciaScope;
        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;
        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /** Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /**
        * Llena el listado de documentos del usuario.
        **/
        private cargarDocumentosUsuario(): void {
            var self: AbaxXBRLListaDocumentosInstanciaController = this;
            var scope: AbaxXBRLListaDocumentosInstanciaScope = self.$scope;

            scope.cargandoDocumentosUsuario = true;
            scope.cargandoDocumentosCompartidos = true;
            scope.cargandoDocumentosRecibidos = true;

            var onSuccess = function (result: any) { self.onCargaDocumentosUsuarioSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_DOCUMENTOS_PATH, {}).then(onSuccess, onError);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de documentos del usuario.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargaDocumentosUsuarioSuccess(resultado: any): void {
            var scope: AbaxXBRLListaDocumentosInstanciaScope = this.$scope;
            var listado: Array<shared.modelos.IDocumentoInstancia> = resultado.InformacionExtra.DocumentosPropios;

            scope.documentosUsuario = listado;

            if (listado && listado.length > 0) {
                scope.existenDocumentosUsuario = true;
                var paging = listado.length > 10;
                scope.opcionesDataTableDocumentosUsuario.withOption("paging", paging);

                if (!paging) {
                    scope.opcionesDataTableDocumentosUsuario.withOption("sDom", "t");
                } else {
                    scope.opcionesDataTableDocumentosUsuario.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
                }

                for (var index: number = 0; index < listado.length; index++) {
                    var documento = listado[index];
                    documento.FechaCreacion = moment(documento.FechaCreacion).format('DD/MM/YYYY HH:mm');
                    documento.FechaUltMod = moment(documento.FechaUltMod).format('DD/MM/YYYY HH:mm');
                }

            } else {
                scope.existenDocumentosUsuario = false;
            }


            listado = resultado.InformacionExtra.DocumentosCompartidos;
            scope.documentosCompartidos = listado;
            if (listado && listado.length > 0) {

                scope.existenDocumentosCompartidos = true;
                var paging = listado.length > 10;
                scope.opcionesDataTableDocumentosCompartidos.withOption("paging", paging);

                if (!paging) {
                    scope.opcionesDataTableDocumentosCompartidos.withOption("sDom", "t");
                } else {
                    scope.opcionesDataTableDocumentosCompartidos.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
                }
                for (var index: number = 0; index < listado.length; index++) {
                    var documento = listado[index];
                    documento.FechaCreacion = moment(documento.FechaCreacion).format('DD/MM/YYYY HH:mm');
                    documento.FechaUltMod = moment(documento.FechaUltMod).format('DD/MM/YYYY HH:mm');
                }
            } else {
                scope.existenDocumentosCompartidos = false;
            }


            listado = resultado.InformacionExtra.DocumentosEnviados;
            scope.documentosRecibidos = listado;
            if (listado && listado.length > 0) {

                scope.existenDocumentosRecibidos = true;
                var paging = listado.length > 10;
                scope.opcionesDataTableDocumentosRecibidos.withOption("paging", paging);

                if (!paging) {
                    scope.opcionesDataTableDocumentosRecibidos.withOption("sDom", "t");
                } else {
                    scope.opcionesDataTableDocumentosRecibidos.withOption("sDom", "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>");
                }
                for (var index: number = 0; index < listado.length; index++) {
                    var documento = listado[index];
                    documento.FechaCreacion = moment(documento.FechaCreacion).format('DD/MM/YYYY HH:mm');
                    documento.FechaUltMod = moment(documento.FechaUltMod).format('DD/MM/YYYY HH:mm');
                }
            } else {
                scope.existenDocumentosRecibidos= false;
            }





            scope.cargandoDocumentosUsuario = false;
            scope.cargandoDocumentosCompartidos = false;
            scope.cargandoDocumentosRecibidos = false;
        }

        /**
        * Llena el listado de documentos del usuario.
        **/
        private cargarEmisoras(): void {
            var self: AbaxXBRLListaDocumentosInstanciaController = this;

            var onSuccess = function (result: any) { self.onCargaEmisorasSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_EMISORAS_PATH, {}).then(onSuccess, onError);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de documentos del usuario.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargaEmisorasSuccess(resultado: Array<shared.modelos.IEmisora>): void {
            var scope: AbaxXBRLListaDocumentosInstanciaScope = this.$scope;

            scope.emisoras = resultado;
        }

        /**
        * Descarga en excel el listado de documentos del usuario.
        **/
        private descargaArchivo(): void {
            var self: AbaxXBRLListaDocumentosInstanciaController = this;
            var scope: AbaxXBRLListaDocumentosInstanciaScope = self.$scope;

            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.DESCARGA_USUARIOS_PATH, {
                'claveEmpresa': scope.emisoraSeleccionada.IdEmpresa,
                'fecha': scope.fecha
            }, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de documentos del usuario.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'documentosUsuario.xls');
        }

        private muestraDatePiker($event) {
            $event.preventDefault();
            $event.stopPropagation();

            this.$scope.datePikerOpen = true;
        }
        /**
        * Refresca los elementos del data table.
        **/
        private refrescaDataTables(): void {
            this.cargaDocumentosRecibidos();
            this.cargaDocumentosPropios();
            this.cargaDocumentosCompartidos();
        }

        /**
       * Determina si el usuario cuenta con privilegios suficientes para migrar.
       * @return Si tiene o no privilegios suficienntes para migrar.
       **/
        private getPrivilegiosMigracion(): boolean {
            var $session = shared.service.AbaxXBRLSessionService;
            var puedeDepurar: boolean = $session.tieneFacultad(AbaxXBRLFacultadesEnum.DepurarDatosBitacora);
            var puedeAdministrarUsuarios: boolean =
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarUsuario) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.EditarUsuario) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarUsuario) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.AsignarEmisorasUsuarios) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.ActivarDesactivarUsuarios) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.BloquearDesbloquearUsuarios);
            var puedeAdministrarRoles: boolean =
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.InsertarRoles) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.EditarRoles) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarRoles) &&
                $session.tieneFacultad(AbaxXBRLFacultadesEnum.AsignarFacultadesRoles);

            return puedeDepurar && puedeAdministrarRoles && puedeAdministrarUsuarios;
        }

        /**
        * Carga la página seleccionada para el conjunto de documentos.
        **/
        private pageChangedRecibidos(newPageNumber: number): void {
            var $self = this;
            $self.$scope.paginacionRecibidos.PaginaActual = newPageNumber;
            $self.cargaDocumentosRecibidos();
        }
        /**
        * Carga la página seleccionada para el conjunto de documentos.
        **/
        private pageChangedPropios(newPageNumber: number): void {
            var $self = this;
            $self.$scope.paginacionPropios.PaginaActual = newPageNumber;
            $self.cargaDocumentosPropios();
        }
        /**
        * Carga la página seleccionada para el conjunto de documentos.
        **/
        private pageChangedCompartidos(newPageNumber: number): void {
            var $self = this;
            $self.$scope.paginacionCompartidos.PaginaActual = newPageNumber;
            $self.cargaDocumentosCompartidos();
        }

        /**
        * Carga el listado de documentos propios.
        **/
        private cargaDocumentosPropios(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var onSucess = function (result: any) { $self.onCargaDocumentosPropiosSuccess(result.data); }
            var onError = $request.getOnErrorDefault();
            var onFinally = function () { $scope.cargandoDocumentosUsuario = false; };
            $scope.cargandoDocumentosUsuario = true;
            var paginacion = $scope.paginacionPropios;
            paginacion.ListaRegistros = null;
            paginacion.Filtro = {};
            if ($scope.filtroFecha && $scope.filtroFecha.trim().length > 0)
            {
                paginacion.Filtro["fechaCreacion"] = $scope.filtroFecha.trim();
            }
            if ($scope.emisoraSeleccionada && $scope.emisoraSeleccionada.NombreCorto)
            {
                paginacion.Filtro["claveEmisora"] = $scope.emisoraSeleccionada.NombreCorto;
            }
            var paginacionJson = angular.toJson(paginacion);
            var params: { [nombre: string]: string } = { "paginacion": paginacionJson, "tipoDocumentos": "PROPIOS"};
            $request.post(AbaxXBRLConstantes.OBTENER_DOCUMENTOS_PAGINADOS_PATH, params).then(onSucess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud hecha hacia el servidor.
        * @param paginacion Dto con la información para la paginación.
        **/
        private onCargaDocumentosPropiosSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var $scope = this.$scope;
            if (!resultado.Resultado) {
                shared.service.AbaxXBRLUtilsService.muestraMensajeError("TITULO_PROMPT_ERROR_CONTACTAR_SERVIDOR");
                $scope.existenDocumentosUsuario = false;
                return;
            }
            var paginacion: shared.modelos.IPaginacionSimple<shared.modelos.IDocumentoInstancia> = resultado.InformacionExtra;
            $scope.paginacionPropios = paginacion;
            var listado = paginacion.ListaRegistros;

            if (listado && listado.length > 0) {
                $scope.existenDocumentosUsuario = true;
                for (var index: number = 0; index < listado.length; index++) {
                    var documento = listado[index];
                    documento.FechaCreacion = moment(documento.FechaCreacion).format('DD/MM/YYYY HH:mm');
                    documento.FechaUltMod = moment(documento.FechaUltMod).format('DD/MM/YYYY HH:mm');
                }
            } else {
                $scope.existenDocumentosUsuario = false;
            }
        }

        /**
        * Carga el listado de documentos compartidos.
        **/
        private cargaDocumentosCompartidos(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var onSucess = function (result: any) { $self.onCargaDocumentosCompartidosSuccess(result.data); }
            var onError = $request.getOnErrorDefault();
            var onFinally = function () { $scope.cargandoDocumentosCompartidos = false; };
            $scope.cargandoDocumentosCompartidos = true;
            var paginacion = $scope.paginacionCompartidos;
            paginacion.ListaRegistros = null;
            paginacion.Filtro = {};
            if ($scope.filtroFecha && $scope.filtroFecha.trim().length > 0) {
                paginacion.Filtro["fechaCreacion"] = $scope.filtroFecha.trim();
            }
            if ($scope.emisoraSeleccionada && $scope.emisoraSeleccionada.NombreCorto) {
                paginacion.Filtro["claveEmisora"] = $scope.emisoraSeleccionada.NombreCorto;
            }
            var paginacionJson = angular.toJson(paginacion);
            var params: { [nombre: string]: string } = { "paginacion": paginacionJson, "tipoDocumentos": "COMPARTIDOS" };
            $request.post(AbaxXBRLConstantes.OBTENER_DOCUMENTOS_PAGINADOS_PATH, params).then(onSucess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud hecha hacia el servidor.
        * @param paginacion Dto con la información para la paginación.
        **/
        private onCargaDocumentosCompartidosSuccess(resultado: shared.modelos.IResultadoOperacion): void {
            var $scope = this.$scope;
            if (!resultado.Resultado) {
                shared.service.AbaxXBRLUtilsService.muestraMensajeError("TITULO_PROMPT_ERROR_CONTACTAR_SERVIDOR");
                $scope.existenDocumentosCompartidos = false;
                return;
            }

            var paginacion: shared.modelos.IPaginacionSimple<shared.modelos.IDocumentoInstancia> = resultado.InformacionExtra;
            $scope.paginacionCompartidos = paginacion;
            var listado = paginacion.ListaRegistros;

            if (listado && listado.length > 0) {
                $scope.existenDocumentosCompartidos = true;
                for (var index: number = 0; index < listado.length; index++) {
                    var documento = listado[index];
                    documento.FechaCreacion = moment(documento.FechaCreacion).format('DD/MM/YYYY HH:mm');
                    documento.FechaUltMod = moment(documento.FechaUltMod).format('DD/MM/YYYY HH:mm');
                }
            } else {
                $scope.existenDocumentosCompartidos = false;
            }
        }

        /**
        * Carga el listado de documentos recibidos.
        **/
        private cargaDocumentosRecibidos(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var onSucess = function (result: any) { $self.onCargaDocumentosRecibidosSuccess(result.data); }
            var onError = $request.getOnErrorDefault();
            var onFinally = function () { $scope.cargandoDocumentosRecibidos = false; };
            $scope.cargandoDocumentosRecibidos= true;
            var paginacion = $scope.paginacionRecibidos;
            paginacion.ListaRegistros = null;
            paginacion.Filtro = {};
            if ($scope.filtroFecha && $scope.filtroFecha.trim().length > 0) {
                paginacion.Filtro["fechaCreacion"] = $scope.filtroFecha.trim();
            }
            if ($scope.emisoraSeleccionada && $scope.emisoraSeleccionada.NombreCorto) {
                paginacion.Filtro["claveEmisora"] = $scope.emisoraSeleccionada.NombreCorto;
            }
            var paginacionJson = angular.toJson(paginacion);
            var params: { [nombre: string]: string } = { "paginacion": paginacionJson, "tipoDocumentos": "RECIBIDOS" };
            $request.post(AbaxXBRLConstantes.OBTENER_DOCUMENTOS_PAGINADOS_PATH, params).then(onSucess, onError).finally(onFinally);
        }
        /**
        * Procesa la respuesta a la solicitud hecha hacia el servidor.
        * @param paginacion Dto con la información para la paginación.
        **/
        private onCargaDocumentosRecibidosSuccess(resultado:shared.modelos.IResultadoOperacion): void {
            var $scope = this.$scope;
            if (!resultado.Resultado) {
                shared.service.AbaxXBRLUtilsService.muestraMensajeError("TITULO_PROMPT_ERROR_CONTACTAR_SERVIDOR");
                $scope.existenDocumentosRecibidos = false;
                return;
            }

            var paginacion: shared.modelos.IPaginacionSimple<shared.modelos.IDocumentoInstancia> = resultado.InformacionExtra;
            $scope.paginacionRecibidos = paginacion;
            var listado = paginacion.ListaRegistros;

            if (listado && listado.length > 0) {
                $scope.existenDocumentosRecibidos = true;
                for (var index: number = 0; index < listado.length; index++) {
                    var documento = listado[index];
                    documento.FechaCreacion = moment(documento.FechaCreacion).format('DD/MM/YYYY HH:mm');
                    documento.FechaUltMod = moment(documento.FechaUltMod).format('DD/MM/YYYY HH:mm');
                }
            } else {
                $scope.existenDocumentosRecibidos = false;
            }
        }

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self: AbaxXBRLListaDocumentosInstanciaController = this;
            var scope: AbaxXBRLListaDocumentosInstanciaScope = self.$scope;

            scope.exportando = false;
            scope.existenDocumentosUsuario = false;
            scope.datePikerOpen = false;

            scope.paginacionPropios = {
                PaginaActual: 1,
                RegistrosPorPagina: 10,
                TotalRregistros: 0
            }

            scope.paginacionCompartidos = {
                PaginaActual: 1,
                RegistrosPorPagina: 10,
                TotalRregistros: 0
            }

            scope.paginacionRecibidos = {
                PaginaActual: 1,
                RegistrosPorPagina: 10,
                TotalRregistros: 0
            }

            scope.cargaDocumentosRecibidos = function () { self.cargaDocumentosRecibidos(); };
            scope.cargaDocumentosCompartidos = function () { self.cargaDocumentosCompartidos(); };
            scope.cargaDocumentosPropios = function () { self.cargaDocumentosPropios(); };

            scope.pageChangedRecibidos = function (newPageNumber: number) { self.pageChangedRecibidos(newPageNumber); };
            scope.pageChangedPropios = function (newPageNumber: number) { self.pageChangedPropios(newPageNumber); };
            scope.pageChangedCompartidos = function (newPageNumber: number) { self.pageChangedCompartidos(newPageNumber); };


            scope.emisoraSeleccionada = { IdEmpresa: null, NombreCorto: null };
            scope.mostrarTab = function (mostrarTab1: boolean, mostrarTab2: boolean, mostrarTab3:boolean) {
                scope.tab1 = mostrarTab1 ? 'active' : '';
                scope.tab2 = mostrarTab2 ? 'active' : '';
                scope.tab3 = mostrarTab3 ? 'active' : '';

            }

            shared.service.AbaxXBRLUtilsService.getLasDataTableInstance().then(function (instance: any) {
                scope.dataTableInstance = instance;
            });
            scope.opcionesDataTableDocumentosUsuario = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.opcionesDataTableDocumentosCompartidos = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.opcionesDataTableDocumentosRecibidos = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            self.cargarEmisoras();
            //self.cargarDocumentosUsuario();


            self.cargaDocumentosRecibidos();
            self.cargaDocumentosPropios();
            self.cargaDocumentosCompartidos();

            self.$scope.mostrarTab(false, false,true);

            scope.tieneFacultad = function (facultad: number) { return shared.service.AbaxXBRLSessionService.tieneFacultad(facultad); }
            scope.muestraDatePiker = function ($event): void { self.muestraDatePiker($event) };

            

            scope.$watch('fecha', function () {
                if (scope.fecha && scope.fecha != null) {
                    scope.filtroFecha = moment(scope.fecha).format('DD/MM/YYYY');
                } else {
                    scope.filtroFecha = null;
                }
                self.refrescaDataTables();
            });
            scope.$watch('emisoraSeleccionada', function () {
                self.refrescaDataTables();
            });

            var sesion = shared.service.AbaxXBRLSessionService;
            scope.tieneFacultadGuardarDocumentoInstancia = sesion.tieneFacultad(AbaxXBRLFacultadesEnum.GuardarDocumentoInstancia);
            scope.tieneFacultadEditarDocumentoInstancia = sesion.tieneFacultad(AbaxXBRLFacultadesEnum.EditarDocumentoInstancia);
            scope.tieneFacultadEliminarDocumentoInstancia = sesion.tieneFacultad(AbaxXBRLFacultadesEnum.EliminarDocumentoInstancia);
            scope.tieneFacultadExportarDocumentoInstancia = sesion.tieneFacultad(AbaxXBRLFacultadesEnum.ExportarDocumentoInstancia);
            scope.tieneFacultadVisorGenerico = sesion.tieneFacultad(AbaxXBRLFacultadesEnum.VisorGenerico);
            scope.tieneFacultadMigrarVersiondocumentos = sesion.tieneFacultad(AbaxXBRLFacultadesEnum.MigrarVersionDocumentosInstancia);//self.getPrivilegiosMigracion();
        }

        /**
        * Filtro de documentos.
        * @param value Documento a validar.
        * @param index Indice del elemento en la tabla.
        **/
        private filtroDocumentos(value: shared.modelos.IDocumentoInstancia, index: number): boolean {
            var scope = this.$scope;
            var fechaValida: boolean = true;
            var empresaValida: boolean = true; 
            
            if (value && value != null) {

                var fecha = scope.filtroFecha;
                if (fecha && fecha != null && fecha.length > 0) {
                    fechaValida = value.FechaCreacion.indexOf(fecha) != -1;
                }
                var emisora = scope.emisoraSeleccionada;
                if (emisora && emisora != null && emisora.IdEmpresa) {
                    empresaValida = value.IdEmpresa == emisora.IdEmpresa;
                }
            }
            return empresaValida && fechaValida;
        }

        /**
         * Constructor de la clase UsuarioListCtrl
         *
         * @param $scope el scope del controlador
         * @param $modal Servicio para el manejode ventanas modales.
         * @param abaxXBRLRequestService el servicio de negocio para interactuar con el back end.
         * @param $state Servicio para el cambio de estado de las vistas del sitio.
         * @param $stateParams Servicio para controlar los parametros de la ruta de navegación.
         */
        constructor($scope: AbaxXBRLListaDocumentosInstanciaScope,
            $modal: ng.ui.bootstrap.IModalService,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService,
            $state: ng.ui.IStateService) {
            var self = this;

            self.$scope = $scope;
            self.$modal = $modal
            self.abaxXBRLRequestService = abaxXBRLRequestService;
            self.$state = $state;

            self.$scope.cargarDocumentosUsuario = function (): void { self.cargarDocumentosUsuario(); };

            self.$scope.eliminaDocumentoUsuario = function (id: string): void {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/lista-documentos-instancia/elimina/abax-xbrl-elimina-documento-instancia-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: AbaxXBRLEliminaDocumentoInstanciaController,
                    resolve: {
                        id: function () {
                            return id;
                        },
                        claveEmpresa: self.$scope.emisoraSeleccionada.IdEmpresa,
                        fecha: self.$scope.fecha
                    }
                });

                modalInstance.result.then(function (resultado) {
                    // actualizar el listado
                    self.onCargaDocumentosUsuarioSuccess(resultado);
                });
            }

            self.$scope.descargaArchivo = function () { self.descargaArchivo(); };

            self.$scope.filtroDocumentos = function (value: shared.modelos.IDocumentoInstancia, index: number): boolean { return self.filtroDocumentos(value, index); }

            self.init();
        }
    }
    AbaxXBRLListaDocumentosInstanciaController.$inject = ['$scope', '$modal', 'abaxXBRLRequestService', '$state'];
} 