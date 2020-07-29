module abaxXBRL.componentes.controllers {

    /**
    * Declaracion del Scope para consulta del reporte "Calculo de materialidad".
    *
    * @author Angel de Jesús Cruz Gómez
    * @version 1.0
    */
    export interface AbaxXBRLReporteCalculoMaterialidadScope extends IAbaxXBRLInicioScope {

        /**
        * Listado de Emisoras a mostrar.
        **/
        listaEmisoras: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /**
        * Listado de los tipos de instrumento a mostrar.
        **/
        listaTiposInstrumento: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /**
        * Listado de monedad a mostrar.
        **/
        listaMonedas: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /* Emisora Seleccionada. */
        emisoraSeleccionada: any;

        /* Tipo de instrumento seleccionado. */
        tipoInstrumentoSeleccionado: abaxXBRL.shared.modelos.ILlaveValor;

        /* Moneda seleccionada. */
        monedaSeleccionada: abaxXBRL.shared.modelos.ILlaveValor;

        /* Fecha Seleccionada. */
        fechaSeleccionada: any;

        /* Texto del campo noticia. */
        noticia: string;

        /*El monto de la operación. */
        montoDeOperacion: number;

        montoDeOperacionValorNumerico: number;

        /* El tipo de cambio. */
        tipoDeCambio: number;

        /**
        * Bandera que india que se estan cargando los elementos 
        **/
        cargando: boolean;

        /** 
        * Bandera que indica si existen elementos para los filtros dados.
        **/
        existeElementos: boolean;

        /**
        * Bandera que indica si se esta exportando a excel.
        **/
        exportando: boolean;

        /**
        * Exporta los datos de la tabla a excel.
        **/
        exportaAExcel(): void;

        formatearTextoAMoneda(): void;

        /**
        * Exporta los datos de la tabla a excel.
        **/
        obtenerAniosEnvioReporteAnual(): void;

        /**
        * Bandera para mostrar u ocultar el datepiker.
        **/
        datePikerOpen: boolean;

        /**
        * Muestra el datepiker.
        **/
        muestraDatePiker($event);

        /**
        * Opciones para el datepiker
        **/
        datepikerOptions: any;

        /**
         * Servicio para el cambio de estado de las vistas dentro del sitio. 
        **/
        $state: ng.ui.IStateService;
    }

    /**
    * Implementacion del Controller del reporte "Calculo de materialidad".
    *
    * @author Angel de Jesús Cruz Gómez
    * @version 1.0
    */
    export class AbaxXBRLReporteCalculoMaterialidadController {
        /** El Scope del Controlador **/
        private $scope: AbaxXBRLReporteCalculoMaterialidadScope;

        /** Servicio para el manejo de las peticiones al Servidor **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Carga Combo de Emisoras **/
        private cargarEmisoras(): void {
            var self: AbaxXBRLReporteCalculoMaterialidadController = this;

            var onSuccess = function (result: any) { self.onCargarEmisorasSuccess(result.data.InformacionExtra); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { };

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTA_TODAS_EMPRESAS_COMBO_PATH, {}).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud de emisoras.
        * Asigna los elementos de la respuesta y ajusta las banderas relacionadas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onCargarEmisorasSuccess(resultado: Array<shared.modelos.IEmisora>): void {
            var scope: AbaxXBRLReporteCalculoMaterialidadScope = this.$scope;
            scope.emisoras = resultado;
        }

        private muestraDatePiker($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.$scope.datePikerOpen = true;
        }

        private obtenParametrosConsulta(): { [id: string]: any } {
            var self = this;
            var scope = self.$scope;
            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            var params: { [id: string]: any } = {};
            var tipoReporte = scope.tipoDeReporte;
            var emisora = scope.aEmisora;
            var trimestre = scope.trimestreSeleccionado;
            var grupoEmpresa = scope.aGrupoEmpresa;


            if (tipoReporte) {
                params["idTaxonomiaXbrl"] = tipoReporte;
            }
            if (grupoEmpresa && grupoEmpresa.IdGrupoEmpresa) {
                params["idGrupoEmpresa"] = grupoEmpresa.IdGrupoEmpresa;
            }
            if (emisora && emisora.IdEmpresa) {
                params["idEmpresa"] = emisora.IdEmpresa;
            }

            return params;
        }

        /**
        * Valida si el archivo puede ser importado a excel y de ser asi lo importa.
        **/
        private exportaAExcel() {
            var self = this;
            var parametros = self.obtenParametrosConsulta();
            var onSuccess = function (result: any) {
                var data: shared.modelos.IResultadoOperacion = result.data;
                var numeroRegistros: number = data.InformacionExtra;
                if (numeroRegistros <= AbaxXBRLConstantes.MAXIMOS_REGISTROS_RESPUESTA_EXCEL_BITACORA) {
                    self.ejecutaExportaAExcel(parametros);
                } else {
                    var variables: { [id: string]: string } = {};
                    variables["MAXIMOS_REGISTROS"] = AbaxXBRLConstantes.MAXIMOS_REGISTROS_RESPUESTA_EXCEL_BITACORA.toString();
                    variables["CANTIDAD_REGISTROS"] = numeroRegistros.toString();
                    var mensaje = shared.service.AbaxXBRLUtilsService.getValorEtiqueta("MENSAJE_ERROR_EXCEL_BITACORA_SUPERA_MAXIMO_REGISTROS", variables);
                    shared.service.AbaxXBRLUtilsService.AlertaBootstrap(mensaje);
                }
            }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();

            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTEN_NUMERO_REGISTROS_PATH, parametros).then(onSuccess, onError);
        }
        
        /**
         * Solicita la exportación de un archivo a Excel.
         * @param params Parametros de la consulta.
         **/
        private ejecutaExportaAExcel(params: { [id: string]: any }) {
            var self = this;
            var scope = self.$scope;
            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }

            var params: { [id: string]: any } = {};
            var url = AbaxXBRLConstantes.EXPORTA_CALCULO_DE_MATERIALIDAD_A_EXCEL;

            if (scope.emisoraSeleccionada != undefined) {
                params["parametroEmisora"] = "'" + scope.emisoraSeleccionada.NombreCorto + "'";
            }

            if (scope.tipoInstrumentoSeleccionado != undefined) {
                params["datoTipoDeInstumento"] = scope.tipoInstrumentoSeleccionado.valor;
            }

            if (scope.monedaSeleccionada != undefined) {
                params["datoMoneda"] = scope.monedaSeleccionada.valor;
            }

            if (scope.fechaSeleccionada != undefined) {
                if (typeof scope.fechaSeleccionada === 'object') {
                    var fecha = moment(scope.fechaSeleccionada).format('DD/MM/YYYY');
                    params["datoFecha"] = fecha;
                } else {
                    params["datoFecha"] = scope.fechaSeleccionada;
                }                
            }

            if (scope.montoDeOperacion != undefined) {
                params["datoMontoDeOperacion"] = scope.montoDeOperacion;
            }

            if (scope.tipoDeCambio != undefined) {
                params["datoTipoDeCambio"] = scope.tipoDeCambio;
            }

            if (scope.noticia != undefined) {
                params["datoNoticia"] = scope.noticia;
            }

            self.$scope.exportando = true;
            self.abaxXBRLRequestService.post(url, params, true).then(onSuccess, onError).finally(onFinally);
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de empresas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var self = this;
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, "calculo de materialidad - " + self.$scope.emisoraSeleccionada.NombreCorto + '.xls');
        }

        /**
        * Inicializamos los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;

            scope.cargando = true;
            scope.existeElementos = false;
            scope.exportando = false;
            scope.datePikerOpen = false;

            var moneda: shared.modelos.ILlaveValor = {
                llave: null,
                valor: null
            };

            var tipoInstrumento: shared.modelos.ILlaveValor = {
                llave: null,
                valor: null
            };

            scope.listaMonedas = new Array<abaxXBRL.shared.modelos.ILlaveValor>();
            scope.listaMonedas.push({ llave: "1", valor: "USD" });
            scope.listaMonedas.push({ llave: "2", valor: "MXN" });
            scope.listaMonedas.push({ llave: "3", valor: "EURO" });
            scope.listaMonedas.push({ llave: "4", valor: "OTRA" });

            scope.listaTiposInstrumento = new Array<abaxXBRL.shared.modelos.ILlaveValor>();
            scope.listaTiposInstrumento.push({ llave: "1", valor: "Acciones" });
            scope.listaTiposInstrumento.push({ llave: "2", valor: "Certificados bursátiles de largo plazo" });
            scope.listaTiposInstrumento.push({ llave: "3", valor: "Certificados bursátiles de corto plazo" });
            scope.listaTiposInstrumento.push({ llave: "4", valor: "Valores estructurados de corto plazo" });
            scope.listaTiposInstrumento.push({ llave: "5", valor: "Valores estructurados de largo plazo" });
            scope.listaTiposInstrumento.push({ llave: "6", valor: "Certificados de Participación Ordinaria (CPOs)" });
            scope.listaTiposInstrumento.push({ llave: "7", valor: "Certificados bursátiles fiduciarios de largo plazo" });
            scope.listaTiposInstrumento.push({ llave: "8", valor: "Certificados bursátiles fiduciarios de corto plazo" });
            scope.listaTiposInstrumento.push({ llave: "9", valor: "Certificados bursátiles fiduciarios de desarrollo" });
            scope.listaTiposInstrumento.push({ llave: "10", valor: "Certificados bursátiles fiduciarios inmobiliarios" });
            scope.listaTiposInstrumento.push({ llave: "11", valor: "Certificados bursátiles fiduciarios de inversión en energía e infraestructura" });
            scope.listaTiposInstrumento.push({ llave: "12", valor: "Certificados bursátiles fiduciarios de proyectos de inversión" });

            scope.fechaSeleccionada = moment(new Date()).format("DD/MM/YYYY");

            scope.muestraDatePiker = function ($event): void { self.muestraDatePiker($event) };
            scope.exportaAExcel = function (): void { self.exportaAExcel(); };
            //scope.formatearTextoAMoneda = function (): void { self.formatearTextoAMoneda(); };
            self.cargarEmisoras();
        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para las peticiones al servidor.
        **/
        constructor($scope: AbaxXBRLReporteCalculoMaterialidadScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$scope.$state = $state;
            this.init();
        }
    }

    AbaxXBRLReporteCalculoMaterialidadController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
}