/// <reference path="../../../shared/services/abax-xbrl-request-service.root.ts" />
/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />

module abaxXBRL.componentes.controllers {

    

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLPanelControlScope extends IAbaxXBRLInicioScope {

        /**Cantidad de archivos propios del usuario. **/
        cantidadArchivosPropios: number;
        /**Cantidad de archivos que estan siendo comportidos al usuario actual. **/
        cantidadArchivosCompartidos: number;
        /**Cantidad de archivos que tienen datos incorrectos (formulas, fechas, etc). **/
        cantidadARchivosErroneos: number;
        /**Cantidad de archivos que no tiene datos incorrectos. **/
        cantidadArchivosCorrectos: number;
        /**Bandera que indica que aun no se han cargado los archivos de usuario. **/
        cargandoArchivosUsuario: boolean;
        /**Bandera que indica si existen o no archivos de usuario que mostrar **/
        existenArchivosUsuario: boolean;
        /**Arreglo de documentos del usuario en sesión. **/
        archivosUsuario: Array<shared.modelos.IDocumentoInstancia>;
        /**Indica si se están cargando los datos de auditoria de suaruio. **/
        cargandoBitacora: boolean;
        /**Listado con los registros de auditoría. **/
        registrosAuditoria: Array<shared.modelos.IRegistroAuditoria>;
        /**Bandera que indica si se están cargando las alertas de usuario. **/
        cargandoAlertasUsuario: boolean;
        /**Indica que se están obteniendo la cantidad de archivos en sesión. **/
        cargandoConteoArchivos: boolean;
        /**Determina si existen alertas que mostrar al usuario **/
        existenAlertasUsuario: boolean;
        /**Listado de alertas a mostrar. **/
        alertas: Array<shared.modelos.IAlerta>;

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
        * Cantidad de distribuciones pendientes de procesar.
        **/
        cantidadDistribucionesPendientes: number;
        /**
        * Cantidad de distribuciones con error.
        **/
        cantidadDistribucionesErroneos: number;
        /**
        * Cantidad de documentos pendientes de procesar.
        **/
        cantidadProcesoArchivosPendientes: number;
        /**
        * Cantidad de documentos procesados con error.
        **/
        cantidadProcesoArchivosErroneos: number;

        /**
        * Bandera que indica si se está cargando la bitacora de versión 
        **/
        estaCargandoListadoBitacoraVersionDocumentos: boolean;
        /**
        * Bandera que indica si existen registros aue mostrar.
        **/
        existenElementosBitacoraVersionDocumentos: boolean;
        /**
        * Arreglo con los registros de la bitacora de versión de documentos.
        **/
        paginacionElementosBitacoraVersionDocumento: shared.modelos.IPaginacionSimple<shared.modelos.IBitacoraVersionDocumento>;
        /**
        * Listado de Dtos con la información para reprecentar los graficos de empresas reportadas por taxonomia.
        **/
        chartsTaxonomias: Array<shared.modelos.IEasyPieChart>;
        /**
        * Bandera que indica si se están cargando las graficas de documentos por taxonomía.
        **/
        estaCargandoChartsTaxonomias: boolean;
        /**
        * Bandera que indica si existen elementos que mostrar.
        **/
        existenChartsTaxonomias: boolean;
        /**
        * Bandera que indica si el usuario puede consultar la bitacora de versiones de documentos.
        **/
        puedeConsultarBitacoraVersionDocumentos: boolean;

        /**
        * Refresca la información general del panel de control.
        **/
        refrescarDatosPanelControl(): void;
        /**
        * Modelo donde se almacenara el anio y el trimestre.
        **/
        trimestreAgraficar: { trimestre: shared.modelos.ISelectItem; anio: shared.modelos.ISelectItem; }
        /**
        * Listado de años a presentar en el combo de graficas.
        **/
        opcionesAnio: Array<shared.modelos.ISelectItem>;
        /**
        * Listado de opciones de trimestre.
        **/
        opcionesTrimestre: Array<shared.modelos.ISelectItem>;
        /**
        * Obtiene los últimos registros de la bitacora de versión de documentos.
        **/
        obtenDatosGraficasTaxonomias(): void;
    }

    /**
    * Controlador para la vista del panel de control. 
    **/
    export class AbaxXBRLPanelControlController {

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Scope de la vista del controller **/
        private $scope: AbaxXBRLPanelControlScope;
        /**Path del servicio que retorna los documentos de instancia **/
        private static get ULTIMOS_DOCUMENTOS_USUARIO_PATH(): string { return "Home/UltimosDocumentosDeUsuario"; }
        /**Path del servicio que retorna el conteo de los archivos de usuario. **/
        private static get CONTEO_ARCHIVOS_USUARIO_PATH(): string { return "Home/ConteoArchivos"; }
        /**Path del servicio que retorna los últimos registros de auditoria del usuario. **/
        private static get ULTIMOS_ARCHIVOS_AUDITORIA_USUARIO_PATH(): string { return "Home/UltimosRegistrosAuditoriaDeUsuario"; }
        /**Path del servicio que retorna los últimos registros de auditoria del usuario. **/
        private static get ULTIMAS_ALERTAS_USUARIO_PATH(): string { return "Home/UltimasAlertasUsuario"; }
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;
        private coloresChart: Array<string> = ["#18AFA4", "#74CFC8", "#46BFB6", "#A2DFDA", "#5DC7BF", "#2FB7AD"];
        /**
        * Obtiene los valores de los conatadores para cada caso.
        **/
        private obtenConteoArchivosBitacoraVersion(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var urlProcesos = AbaxXBRLConstantes.OBTEN_CONTADOR_BITACORA_VERSION_DOCUMPENTOS_POR_ESTADO_PATH;
            var urlDistribuciones = AbaxXBRLConstantes.OBTEN_CONTADOR_BITACORA_DISTRIBUCIONES_POR_ESTADO_PATH;
            var paramsPendientes: { [nombre: string]: string } = {"estado": "0"};
            var paramsError: { [nombre: string]: string } = { "estado": "2" };

            $request.asignaResultadoPost(urlProcesos      , paramsPendientes, $scope, 'cantidadProcesoArchivosPendientes').catch(function () { $scope.cantidadProcesoArchivosPendientes = 0 });
            $request.asignaResultadoPost(urlDistribuciones, paramsPendientes, $scope, 'cantidadDistribucionesPendientes').catch(function () { $scope.cantidadDistribucionesPendientes = 0 });
            
            $request.asignaResultadoPost(urlProcesos      , paramsError, $scope, 'cantidadProcesoArchivosErroneos').catch(function () { $scope.cantidadProcesoArchivosErroneos = 0 });
            $request.asignaResultadoPost(urlDistribuciones, paramsError, $scope, 'cantidadDistribucionesErroneos').catch(function () { $scope.cantidadDistribucionesErroneos = 0 });
        }
        /**
        * Obtiene los últimos registros de la bitacora de versión de documentos.
        **/
        private obtenUltimosRegistrosBitacoraVersionDocumentos(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var paginasion: shared.modelos.IPaginacionSimple<shared.modelos.IBitacoraVersionDocumento> = {
                TotalRregistros: 0,
                RegistrosPorPagina: 5,
                PaginaActual: 1,
                Filtro: { "Estatus": "1" }
            }
            var url = AbaxXBRLConstantes.OBTENER_BITACORA_VERSION_DOCUMENOT_PATH;
            $scope.estaCargandoListadoBitacoraVersionDocumentos = true;
            var paginacionJson = angular.toJson(paginasion);
            var params: { [nombre: string]: string } = { 'json': paginacionJson };
            $request.asignaResultadoPost(url, params, $scope,
                'paginacionElementosBitacoraVersionDocumento',
                'estaCargandoListadoBitacoraVersionDocumentos',
                'existenElementosBitacoraVersionDocumentos').then(function () {
                    $scope.existenElementosBitacoraVersionDocumentos =
                                $scope.paginacionElementosBitacoraVersionDocumento.ListaRegistros &&
                                $scope.paginacionElementosBitacoraVersionDocumento.ListaRegistros.length > 0;

                    var listaElementos = $scope.paginacionElementosBitacoraVersionDocumento.ListaRegistros;
                    var indexElemento: number = 0;

                    for (indexElemento = 0; indexElemento < listaElementos.length; indexElemento++) {
                        var elemento = listaElementos[indexElemento];
                        elemento.TieneDistribuciones = elemento.Distribuciones && elemento.Distribuciones.length > 0;
                        elemento.CatindadDistribuciones = elemento.TieneDistribuciones ? elemento.Distribuciones.length : 0;
                        elemento.FechaRegistro = moment(elemento.FechaRegistro).format('DD/MM/YYYY HH:mm');
                        elemento.FechaUltimaModificacion = moment(elemento.FechaUltimaModificacion).format('DD/MM/YYYY HH:mm');
                    }
                });
        }

        /**
        * Obtiene los últimos registros de la bitacora de versión de documentos.
        **/
        private obtenDatosGraficasTaxonomias(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $request = $self.abaxXBRLRequestService;
            var url = AbaxXBRLConstantes.OBTENER_LISTA_GRAFICAS_EMPRESAS_POR_TAXONOMIA_TRIMESTRE_ACTUAL_PATH;
            $scope.estaCargandoChartsTaxonomias = true;
            var anio: string = $scope.trimestreAgraficar.anio.Valor;
            var trimestre: string = $scope.trimestreAgraficar.trimestre.Valor; 
            var params: { [nombre: string]: string } = { "anio": anio , "trimestre": trimestre};
            var onSuccess = function (): void { $self.calculaPorcentajesGraficas(); };
            $request.asignaResultadoPost(url, params, $scope,
                'chartsTaxonomias',
                'estaCargandoChartsTaxonomias',
                'existenChartsTaxonomias').then(onSuccess);
        }
        /**
        * Calcula los porcentajes a ser representeados por cada grafico.
        **/
        private calculaPorcentajesGraficas(): void {
            var $self = this;
            var $scope = $self.$scope;
            if (!$scope.existenChartsTaxonomias) {
                return;
            }
            var listaCharts = $scope.chartsTaxonomias;
            var indexChart: number;
            for (indexChart = 0; indexChart < listaCharts.length; indexChart++) {
                var chart = listaCharts[indexChart];
                var porcentaje = Math.round((chart.Cantidad / chart.Total) * 100);
                var colorIndex = (indexChart % $self.coloresChart.length);
                var color = $self.coloresChart[colorIndex];
                chart.Porcentaje = porcentaje;
                chart.Color = color;
                chart.AnchoLinea = 16;
                chart.Ciclar = false;
                chart.TextoPorcentaje = porcentaje.toString();
                chart.Diametro = 188;
                chart.ParametrosEtiqueta = { "CANTIDAD": chart.Cantidad.toString(), "TOTAL": chart.Total.toString() };
            }
        }



        /**
        * Carga de forma asincorna la cantidad de archivos propios del usuario.
        **/
        private obtenConteoArchivosUsuario(): void {
            var self = this;
            var onError:any = self.getOnErrorDefault();
            var onSucess = function (response: any) { self.onObtenConteoArchivosUsuarioSucess(response.data); }
            var onFinally = function () { self.$scope.cargandoConteoArchivos = false; };
            self.abaxXBRLRequestService.post(AbaxXBRLPanelControlController.CONTEO_ARCHIVOS_USUARIO_PATH, {})
                .then(onSucess, onError).finally(onFinally);
        }
        /**
        * Retorna la funcion a ejecutar por defecto cuando ocurre un error.
        **/
        private getOnErrorDefault(): any {
            var self = this;
            return function (error: any) {
                console.log(error);
            };
        }
        /** 
        * Procesa la respuesta asincrona de la solicitud del conteo de archivos.
        **/
        private onObtenConteoArchivosUsuarioSucess(response: shared.modelos.IResultadoOperacion) {
            var scope = this.$scope;
            var Conteo: {[key:string]: number} = response.InformacionExtra;
            scope.cantidadArchivosPropios = Conteo["propios"];
            scope.cantidadArchivosCompartidos = Conteo["compartidos"];
            scope.cantidadArchivosCorrectos = Conteo["correctos"];
            scope.cantidadARchivosErroneos = Conteo["erroneos"];
        }
        
        /**
        * Llena el listado de archivos de usuario.
        **/
        private obtenUltimosDocumentosDeUsuario():void {
            var self = this;
            var scope = self.$scope;
            var onSucess = function (result: any) { self.onObtenUltimosDocumentosDeUsuarioSucess(result.data); }
            var onError = this.getOnErrorDefault();
            var onFinally = function () { scope.cargandoArchivosUsuario = false;};
            this.abaxXBRLRequestService.post(AbaxXBRLPanelControlController.ULTIMOS_DOCUMENTOS_USUARIO_PATH, {}).then(onSucess,onError);
        }
        /** 
        * Procesa la respuesta asincrona de la solicitud de archivos de usuario.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenUltimosDocumentosDeUsuarioSucess(resultado: shared.modelos.IResultadoOperacion) {
            var archivosUsuario: Array<shared.modelos.IDocumentoInstancia> = resultado.InformacionExtra;
            var scope = this.$scope;
            if (archivosUsuario && archivosUsuario.length> 0) {
                
                scope.archivosUsuario = archivosUsuario;
                scope.existenArchivosUsuario = true;
            }
            scope.cargandoArchivosUsuario = false;
        }
        /**
        * Solicita al servidor las úlimas alertas asignadas al usuario actual.
        **/
        private obtenUltimasAlertasUsuario(): void {
            var self = this;
            var onSucess = function (result: any) { self.onObtenUltimasAlertasUsuarioSucess(result.data); }
            var onError = this.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLPanelControlController.ULTIMAS_ALERTAS_USUARIO_PATH, {}).then(onSucess, onError);
        }
         /** 
        * Procesa la respuesta asincrona de la solicitud de últimas alertas de usuario.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenUltimasAlertasUsuarioSucess(resultado: shared.modelos.IResultadoOperacion) {
            var alertas = resultado.InformacionExtra;
            var scope = this.$scope;
            if (alertas && alertas.length > 0) {

                scope.alertas = alertas;
                scope.existenAlertasUsuario = true;
            }
            scope.cargandoAlertasUsuario = false;
        }
        /**
        * Envia la solicitud de los registros de auditoría la servidor.
        **/
        private obtenerUltimosRegistrosAuditoriaDeUsuario() {
            var self = this;
            var onSucess = function (result: any) { self.onObtenerUltimosRegistrosAuditoriaDeUsuarioSucess(result.data); }
            var onError = this.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLPanelControlController.ULTIMOS_ARCHIVOS_AUDITORIA_USUARIO_PATH, {}).then(onSucess, onError);
        }
        /**
        * Procesa la respuesta de la solicitud de los últimos registros de auditoría.
        **/
        private onObtenerUltimosRegistrosAuditoriaDeUsuarioSucess(resultado: shared.modelos.IResultadoOperacion) {
            var scope = this.$scope;
            scope.registrosAuditoria = resultado.InformacionExtra;
            scope.cargandoBitacora = false;
        }

        /**
        * Inicializa los listados para el comobo del año y del trimestre.
        **/
        private inicializaOpcionesTrimestre(): void {
            var $sellf = this;
            var $scope = $sellf.$scope;
            var valoresTrimestre: Array<string> = ["1", "2", "3", "4", "4D"];
            var index: number = 0;
            var opcionesTrimestre: Array<shared.modelos.ISelectItem> = [];
            var opcionesAnio: Array<shared.modelos.ISelectItem> = [];
            var aniosAmostrar: number = 5;
            var ahora = moment(new Date()).utc();
            var anioActual = ahora.year();
            var anioInicial = anioActual - aniosAmostrar;
            var anio: number;
            var trimestreActual:string = ahora.quarter().toString();
            var opcionTrimestreActual: shared.modelos.ISelectItem;
            var opcionAnioActual: shared.modelos.ISelectItem;
            
            for (index = 0; index < valoresTrimestre.length; index++) {
                var valor: string = valoresTrimestre[index];
                var opcion: shared.modelos.ISelectItem = { Etiqueta: valor, Valor: valor }; 
                opcionesTrimestre.push(opcion);
                if (valor == trimestreActual) {
                    opcionTrimestreActual = opcion;
                }
            }

            for (anio = anioInicial; anio <= anioActual; anio++) {
                var opcion: shared.modelos.ISelectItem = { Etiqueta: anio.toString(), Valor: anio };
                opcionesAnio.push(opcion);
                if (anio == anioActual) {
                    opcionAnioActual = opcion;
                }
            }

            if (!opcionTrimestreActual) {
                opcionTrimestreActual = opcionesTrimestre[0];
            }
            if (!opcionAnioActual) {
                opcionAnioActual = opcionesAnio[0];
            }


            $scope.opcionesAnio = opcionesAnio;
            $scope.opcionesTrimestre = opcionesTrimestre;
            $scope.trimestreAgraficar = { anio: opcionAnioActual, trimestre: opcionTrimestreActual };
        }

        /** 
        * Inicializa los elementos del scope.
        **/
        private init() {
            var self = this;
            var scope = self.$scope;

            scope.puedeConsultarBitacoraVersionDocumentos = shared.service.AbaxXBRLSessionService.tieneFacultad(AbaxXBRLFacultadesEnum.ConsultarBitacoraVersionDocumento);
            scope.cantidadProcesoArchivosErroneos = -1;
            scope.cantidadProcesoArchivosPendientes = -1;
            scope.cantidadDistribucionesPendientes = -1;
            scope.cantidadDistribucionesErroneos = -1
            scope.estaCargandoListadoBitacoraVersionDocumentos = false;
            scope.existenElementosBitacoraVersionDocumentos = false;
            scope.paginacionElementosBitacoraVersionDocumento = {TotalRregistros:0, RegistrosPorPagina:5,PaginaActual:1,ListaRegistros:[]};
            scope.estaCargandoChartsTaxonomias = false;
            scope.existenChartsTaxonomias = false;
            scope.chartsTaxonomias = [];

            scope.cantidadArchivosPropios = 0;
            scope.cantidadArchivosCompartidos = 0;
            scope.cantidadARchivosErroneos = 0;
            scope.cantidadArchivosCorrectos = 0;
            scope.cargandoArchivosUsuario = true;
            scope.existenArchivosUsuario = false;
            scope.cargandoAlertasUsuario = true;
            scope.existenAlertasUsuario = false;
            scope.cargandoBitacora = true;
            scope.cargandoConteoArchivos = true;
            self.inicializaOpcionesTrimestre();
            scope.obtenDatosGraficasTaxonomias = function ():void { self.obtenDatosGraficasTaxonomias(); };
            scope.refrescarDatosPanelControl = function (): void {

                self.obtenConteoArchivosBitacoraVersion();
                self.obtenUltimosRegistrosBitacoraVersionDocumentos();
                self.obtenDatosGraficasTaxonomias();
                self.obtenUltimasAlertasUsuario();
                self.obtenerUltimosRegistrosAuditoriaDeUsuario();
            };

            scope.refrescarDatosPanelControl();
            
            scope.tieneFacultad = function (facultad: number) { return shared.service.AbaxXBRLSessionService.tieneFacultad(facultad); }
            
            
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista del panel de control.
        * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLPanelControlScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();

        }
    }

    AbaxXBRLPanelControlController.$inject = ['$scope','abaxXBRLRequestService','$state'];
}