/// <reference path="../../../../shared/services/abax-xbrl-request-service.root.ts" />
/// <reference path="../../../../../scripts/typings/xregexp/xregexp.d.ts" /> 
/// <reference path="../../../../../scripts/typings/datatables/jquery.datatables.d.ts" />
/// <reference path="../../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../shared/constantes/abax-xbrl-constantes.inicio.ts" />
///<reference path="../../../../../ts/serviciosAbax.ts" />
///<reference path="../../../../../ts/modeloAbax.ts" />

module abaxXBRL.componentes.controllers {

    import ResultadoOperacion = abaxXBRL.model.ResultadoOperacion;

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAnalisisMostrarConsultaScope extends IAbaxXBRLInicioScope {

        

        /**
        * Bandera que indica si se encontraron resultados para la consulta.
        **/
        existenHechos: boolean;

        /** Lista de los hechos en la consulta de configuracion de analisis por empresa*/
        hechosPorEmpresa: any;

        /** Lista de los hechos en la consulta de configuracion de analisis por contexto*/
        hechosPorContexto: { [idContexto: number]: any };

        /** Lista de los contextos en la consulta de configuracion de analisis*/
        contextosPorEmpresa: any;

        /** Diccionario de todos los hechos de un resultado operacion*/
        hechosResultadoOperacion: any;

        /** Listado de entidades */
        entidades: Array<abaxXBRL.shared.modelos.IConsultaAnalisisEntidad>;

        /** Numero de columnas por empresa que se presentan como contextos*/
        contextos: Array<abaxXBRL.shared.modelos.IConsultaAnalisisContexto>;

        /** Conceptos con información a mostrar en la consulta de configuracion de analisis*/
        conceptos: Array<abaxXBRL.shared.modelos.IConsultaAnalisisConcepto>;

        /** Metodo que realiza la acción de guardar la consulta en Base de datos*/
        guardarConsultaConfiguracion(): void;

        /**
        * Consulta de configuracion de analisis
        */
        consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis;

        /**
         * Bandera que indica que se esta exportando el listado a excel.
         **/
        exportando: boolean;


        /**
        * Exporta la lista de consultas a excel.
        **/
        descargaArchivo(): void;

        /**
        * Agrega un concepto a la configuracion de la consulta de analisis
        */
        agregarConcepto(): void;

        /**
        *Agrega un contexto a la configuracion de la consulta de analisis
        */
        agregarPeriodo(): void;

        /**
        *Agrega un contexto a la configuracion de la consulta de analisis
        */
        agregarEmpresa(): void;


        /**
        *Realiza la consulta con la configuración de la consulta de analisis definida
        */
        realizarConsulta(): void;

        /**
        *Realia el ajuste de las celdas de la tabla dinamica.
        **/
        ajustaCeldasTabla(): string;


        /**
        * Indicador de que se esta realizando la consulta
        */
        ejecutandoConsulta: boolean;
    }

    /**
     * Definición del parametro que recibe la ejecucion de la consulta
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export interface IAbaxXBRLMostrarConsultaRouteParams extends ng.ui.IStateParamsService {
        id: number;
    }

    /** 
    * Controller de la vista para ejecutar consultas de analisis.
    **/
    export class AbaxXBRLAnalisisMostrarConsultaController {

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**Scope de la vista del controller **/
        private $scope: AbaxXBRLAnalisisMostrarConsultaScope;

        /**
        * El servicio que permite la consulta y guardado de los usuarios asignados a un documento de instancia
        */
        private abaxXBRLServices: abaxXBRL.services.AbaxXBRLServices;
        

        /** el servicio angular para presentar diálogos modales */
        private $modal: ng.ui.bootstrap.IModalService;

        /** Servicio para controlar los parametros de la ruta de navegación */
        private $stateParams: IAbaxXBRLMostrarConsultaRouteParams;

        /** Plantilla Jquery del renglon del concepto */
        private plantillaRenglonConcepto: JQuery;

        /** Plantilla del renglon que define los hechos por concepto */
        private plantillaRenglonHecho: JQuery;
    
        /** Plantilla que define la celda de un hecho en la tabla */
        private plantillaCeldaHecho: JQuery;


        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;
            self.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();
            self.$scope.consultaAnalisis.IdConsultaAnalisis = 0;
            self.$scope.consultaAnalisis.ConsultaAnalisisConcepto = new Array();
            self.$scope.consultaAnalisis.ConsultaAnalisisEntidad = new Array();
            self.$scope.consultaAnalisis.ConsultaAnalisisRolTaxonomia = new Array();
            self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo = new Array();
            self.$scope.contextos = new Array<abaxXBRL.shared.modelos.IConsultaAnalisisContexto>();
            self.$scope.ejecutandoConsulta = false;



            this.$scope.guardarConsultaConfiguracion = function () {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-guardar-consulta.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: GuardarConsultaController
                });
            }

            this.$scope.descargaArchivo = function () { self.descargaArchivo(); };

            this.$scope.agregarConcepto = function (): void {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-configuracion-concepto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ConfiguracionConceptoController
                });

                modalInstance.result.then(function (resultado) {
                    self.$scope.conceptos = self.$scope.consultaAnalisis.ConsultaAnalisisConcepto;
                    self.cargarPlantillasConsulta();
                    self.inicializarPantallaHechos();
                });
            }

            this.$scope.agregarPeriodo = function (): void {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-configuracion-periodo.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ConfiguracionPeriodoController
                });

                modalInstance.result.then(function (resultado) {
                    self.inicializarContextos();
                    self.cargarPlantillasConsulta();
                    self.inicializarPantallaHechos();
                });
            }

            this.$scope.agregarEmpresa = function (): void {
                var modalInstance = self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-configuracion-empresa.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: ConfiguracionEmpresaController
                });

                modalInstance.result.then(function (resultado) {
                    self.inicializarContextos();
                    self.cargarPlantillasConsulta();
                    self.inicializarPantallaHechos();
                });


            }

            this.$scope.realizarConsulta = function (): void {
                self.onbtenerHechosPorConsulta();
            }
            var $self = this;
            this.$scope.ajustaCeldasTabla = function (): string { return $self.ajustaCeldasTabla(); };


            if (this.$stateParams.id && this.$stateParams.id > 0) {

                this.obtenerConsultaAnalisis();

            } else {
                self.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();
            }

        }

       

        /**
        * Reajusta las celdas de la tabla dinamica.
        **/
        private ajustaCeldasTabla(): string {
            shared.service.AbaxXBRLUtilsService.reAjustaCeldasTabla(undefined);
            return "";
        }

        /**
        * Genera un identificador unico del componente
        */
        private generarUUID(): string {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
            });
            return uuid;
        }


        /**
        * Inicializa el cuerpoc on la informacion de todos los hechos de la consulta
        * de configuracion
        */
        private inicializarPantallaHechos(): void {

            $("#cuerpoTablaConceptos").empty();
            $("#cuerpoTablaHechos").empty();

            for (var indiceConcepto in this.$scope.consultaAnalisis.ConsultaAnalisisConcepto) {
                var renglonConcepto = this.plantillaRenglonConcepto.clone();
                var id = this.generarUUID();
                renglonConcepto.attr('id', id);
                renglonConcepto.find("#celdaConcepto").attr('id', 'celdaConcepto' + id);
                renglonConcepto = $(renglonConcepto[0].outerHTML.replace("indiceRenglon", indiceConcepto));

                var concepto = this.$scope.consultaAnalisis.ConsultaAnalisisConcepto[indiceConcepto];

                renglonConcepto.find("#celdaConcepto" + id).append(concepto.DescripcionConcepto);

                $("#cuerpoTablaConceptos").append(renglonConcepto);
            }

            for (var indiceConcepto in this.$scope.consultaAnalisis.ConsultaAnalisisConcepto) {
                var renglonHechos = this.plantillaRenglonHecho.clone();
                var id = this.generarUUID();
                renglonHechos.attr('id', id);

                var concepto = this.$scope.consultaAnalisis.ConsultaAnalisisConcepto[indiceConcepto];

                renglonHechos = $(renglonHechos[0].outerHTML.replace("indiceRenglon", indiceConcepto));

                for (var indiceContexto = 0; indiceContexto < this.$scope.contextos.length; indiceContexto++) {
                //for (var indiceContexto in this.$scope.contextos) {
                    var celdaHecho = this.plantillaCeldaHecho.clone();
                    var contexto = this.$scope.contextos[indiceContexto];

                    celdaHecho.attr('id', id + indiceContexto);

                    var hecho = null;

                    if (this.$scope.hechosPorContexto && this.$scope.hechosPorContexto[contexto.Id] && this.$scope.hechosPorContexto[contexto.Id][concepto.IdConcepto]) {
                        hecho = this.$scope.hechosPorContexto[contexto.Id][concepto.IdConcepto];
                    }

                    if (hecho && hecho != null) {
                        celdaHecho = this.generarCeldaHecho(hecho, celdaHecho, indiceContexto, concepto);
                        renglonHechos.append(celdaHecho);
                    } else {
                        celdaHecho.find("#hecho").append("");
                        var valorCeldaHecho = celdaHecho[0].outerHTML.replace(/indiceColumna/i, indiceContexto.toString())
                        renglonHechos.append($(valorCeldaHecho));

                    }

                }


                $("#cuerpoTablaHechos").append(renglonHechos);
            }

            this.$scope.ajustaCeldasTabla();

        }

        /**
        * Inicializa los contexto en base a los periodos configurados
        * @param hecho, objeto con la informacion del hecho a desplegar
        * @celdaCampoHecho, informacion de la celda en donde se va a encontrar la informacion del hecho
        * @indiceColumna, indice de la columna en donde se va a presentar
        * @concepto, Definicion del concepto del hecho
        */
        private generarCeldaHecho(hecho: any, celdaCampoHecho: JQuery, indiceColumna: number, concepto: abaxXBRL.shared.modelos.IConsultaAnalisisConcepto): JQuery {
            var valorHecho = hecho.Valor;
            var id = this.generarUUID();

            var celdaCampoHechoString = celdaCampoHecho[0].outerHTML;
            celdaCampoHechoString = celdaCampoHechoString.replace("hecho", "hecho" + id);
            celdaCampoHechoString = celdaCampoHechoString.replace("indiceColumna", indiceColumna.toString());

            celdaCampoHecho = $(celdaCampoHechoString);

            if (hecho.EsNumerico) {
                celdaCampoHecho.find("#hecho" + id).append(hecho.Valor);
                var tipoDatoNumerico = <abaxXBRL.model.TipoDatoNumerico>(abaxXBRL.model.TiposDatoXbrl.getInstance().get()[hecho.TipoDato]);
                var opcionesAutonumeric = tipoDatoNumerico.OpcionesAutonumeric;
                celdaCampoHecho.find("#hecho" + id).autoNumeric('init', opcionesAutonumeric);

            } else if (hecho.TipoDato.indexOf("booleanItemType") > 0) {

                celdaCampoHecho.find("#hecho" + id).append(hecho.Valor == "true" ? "SI" : "NO");

            } else if (hecho.TipoDato.indexOf("textBlockItemType") > 0) {

                celdaCampoHecho.find("#hecho" + id).addClass("i i-search btn btn-rounded btn-sm btn-icon btn-default");
                celdaCampoHecho.find("#hecho" + id).on('click', function () {

                    var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
                    variablesPlantilla.push({ llave: 'id', valor: id });
                    variablesPlantilla.push({ llave: 'descripcionConcepto', valor: concepto.DescripcionConcepto });
                    variablesPlantilla.push({ llave: 'valorHecho', valor: valorHecho });


                    XbrlPluginUtils.cargarPlantillaYReemplazarVariables('abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-mostrar-textBlock.consulta.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        variablesPlantilla,
                        function (plantilla: JQuery) {

                            $('body').append(plantilla);

                            $("#" + id).addClass("none");
                            $('#' + id).modal();

                            $('#' + id).on('hidden.bs.modal', function () {
                                $('#' + id).remove();
                            });

                        }, function (textStatus: any, errorThrown: any) {
                            console.log('ocurrió un error al cargar la plantilla al visualizar un campo de tipo texto block');
                        });

                });

            } else {
                celdaCampoHecho.find("#hecho" + id).append(hecho.Valor);
            }

            return celdaCampoHecho;
        }

        /**
        *Genera un color de la entidad
        */
        private GenerarColorEntidad(): string {
            var h = this.rand(10, 100); // color hue between 1 and 360
            var s = this.rand(10, 30); // saturation 
            var l = this.rand(50, 90); // lightness 
            return 'hsl(' + h + ',' + s + '%,' + l + '%)';
        }

        private rand(min: number, max: number): number {
            var valorColor = Math.random() * (max - min + 1);
            return parseInt(valorColor.toString(), 10) + min;
        }

        /**
        * Inicializa los contexto en base a los periodos configurados
        */
        private inicializarContextos(): void {
            this.$scope.contextos = new Array<abaxXBRL.shared.modelos.IConsultaAnalisisContexto>();

            for (var indiceEntidad in this.$scope.consultaAnalisis.ConsultaAnalisisEntidad) {
                var colorEntidad = this.GenerarColorEntidad();
                var entidad = this.$scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceEntidad];

                entidad.NumeroColumnas = this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.length;
                entidad.Color = colorEntidad;
                for (var indicePeriodos in this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo) {
                    var periodo = this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo[indicePeriodos];
                    var idContexto = 0;
                    if (periodo.ContextosPorIdEmpresa && periodo.ContextosPorIdEmpresa[entidad.IdEmpresa]) {
                        for (var indicePeriodo in periodo.ContextosPorIdEmpresa[entidad.IdEmpresa]) {
                            var ctx = periodo.ContextosPorIdEmpresa[entidad.IdEmpresa][indicePeriodo];
                            if (periodo.Periodo == ctx.NombreContexto) {
                                idContexto = ctx.Id;
                                break;
                            }
                        }
                    }
                    this.$scope.contextos.push({ NombreContexto: periodo.Periodo, Id: idContexto, IdEmpresa: entidad.IdEmpresa, Color: colorEntidad });
                }
            }
        }

        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de consultas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'consultasAnalisis.xls');
        }


        /**
        * Descarga en excel el listado de consultas.
        **/
        private descargaArchivo(): void {
            var self: AbaxXBRLAnalisisMostrarConsultaController = this;

            var onSuccess = function (result: any) { self.onDescargaArchivoSuccess(result.data); }
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () { self.$scope.exportando = false; }
            self.$scope.exportando = true;


            self.abaxXBRLRequestService.post(AbaxXBRLConstantes.DESCARGA_EJECUCION_CONSULTA_PATH, { "consulta": $.toJSON(self.$scope.consultaAnalisis), "hechos": $.toJSON(self.$scope.hechosResultadoOperacion.hechos), "contextos": $.toJSON(self.$scope.hechosResultadoOperacion.contextos) }, true).then(onSuccess, onError).finally(onFinally);
        }

        /**
        *   Carga las plantillas del renglon de conceptos y hechos de los contextos definidos por empresa
        */
        private cargarPlantillasConsulta(): void {

            this.plantillaRenglonConcepto = $("#renglonConcepto").clone();
            this.plantillaRenglonHecho = $("#renglonHecho").clone();
            this.plantillaCeldaHecho = $("#renglonHecho").find("#celdaHecho").clone();
            this.plantillaRenglonHecho.find("#celdaHecho").remove();
        }

        /**
        * Obtiene una consulta de analisis registrada
        */
        private obtenerConsultaAnalisis(): void {
            var self = this;


            var onHttpSucess = function (result: any) {
                var resultadoOperacion: shared.modelos.IResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    var consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis = resultadoOperacion.InformacionExtra;
                    abaxXBRL.shared.modelos.IConsultaAnalisis.setInstance(consultaAnalisis);
                    self.$scope.consultaAnalisis = consultaAnalisis;
                    self.$scope.conceptos = self.$scope.consultaAnalisis.ConsultaAnalisisConcepto;

                    self.inicializarContextos();
                    self.onbtenerHechosPorConsulta();

                } else {
                    self.abaxXBRLRequestService.getOnErrorDefault();
                }

            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();

            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_CONSULTA_ANALISIS_PATH, { "idConsulta": self.$stateParams.id }).then(onHttpSucess, onHttpError);
        }


        /**
        * Obtiene el listado de hechos de la configuracion de la consulta.
        **/
        private onbtenerHechosPorConsulta(): void {

            var self = this;
            self.$scope.hechosPorContexto = {};
            self.$scope.ejecutandoConsulta = true;



            $.isLoading({
                text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('Cargando información de la consulta')
            });

            var onHttpSucess = function (result: any) {
                self.onOnbtenerHechosConsultaSucess(result.data);


                setTimeout(function () {
                    self.$scope.$apply(function () {
                        self.$scope.ejecutandoConsulta = false;
                        $.isLoading('hide');
                    });

                }, 2000);
            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();

            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.HECHOS_POR_CONSULTA_ANALISIS_PATH, { "consulta": $.toJSON(self.$scope.consultaAnalisis) }).then(onHttpSucess, onHttpError);
        }
       
        /**
        * Procesa el resulado de la consulta de los hechos de la configuracion de la consulta.
        * @param resulado Respuseta del servidor a la consulta.
        **/
        private onOnbtenerHechosConsultaSucess(resultado: shared.modelos.IResultadoOperacion) {
            var scope = this.$scope;
            scope.hechosResultadoOperacion = resultado.InformacionExtra;
            if (resultado.Resultado == true && scope.hechosResultadoOperacion) {
                scope.hechosPorEmpresa = scope.hechosResultadoOperacion.hechos;
                scope.contextosPorEmpresa = scope.hechosResultadoOperacion.contextos;

                for (var indiceEntidad in scope.consultaAnalisis.ConsultaAnalisisEntidad) {
                    var entidad = scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceEntidad];
                    var contextosEmpresa = scope.contextosPorEmpresa[entidad.IdEmpresa];
                    for (var indicePeriodo in scope.consultaAnalisis.ConsultaAnalisisPeriodo) {
                        var periodo = scope.consultaAnalisis.ConsultaAnalisisPeriodo[indicePeriodo]

                        for (var indiceContextoEmpresa in contextosEmpresa) {
                            var ctx = contextosEmpresa[indiceContextoEmpresa];
                            var nombrePeriodoContexto = this.generarNombrePeriodoContexto(ctx);
                            if (periodo.Periodo == nombrePeriodoContexto) {
                                if (!periodo.ContextosPorIdEmpresa) {
                                    periodo.ContextosPorIdEmpresa = {};
                                }

                                if (!periodo.ContextosPorIdEmpresa[entidad.IdEmpresa]) {
                                    periodo.ContextosPorIdEmpresa[entidad.IdEmpresa] = new Array<shared.modelos.IConsultaAnalisisContexto>();
                                }
                                periodo.ContextosPorIdEmpresa[entidad.IdEmpresa].push({ Id: ctx.Id, IdEmpresa: entidad.IdEmpresa, NombreContexto: periodo.Periodo });
                                break;
                            }
                        }
                    }
                }

                for (var IdEmpresa in scope.hechosPorEmpresa) {
                    for (var IdContexto in scope.hechosPorEmpresa[IdEmpresa]) {
                        scope.hechosPorContexto[IdContexto] = scope.hechosPorEmpresa[IdEmpresa][IdContexto];
                    }
                }

                this.inicializarContextos();
                this.cargarPlantillasConsulta();
                this.inicializarPantallaHechos();

            }
        }

       
        /**
        * Genera el nombre del contexto en base a el contenido del contexto enviado
        */
        private generarNombrePeriodoContexto(ctx: any): string {
            var nombrePeriodoContexto = "";
            if (ctx.Fecha && ctx.Fecha != null) {
                nombrePeriodoContexto = moment(ctx.Fecha).format('DD/MM/YYYY');
            } else {
                nombrePeriodoContexto = moment(ctx.FechaInicio).format('DD/MM/YYYY') + " - " + moment(ctx.FechaFin).format('DD/MM/YYYY');
            }
            return nombrePeriodoContexto
        }

        

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
        * @param $stateParams Parametros para la ejecion de una consulta registrada
        **/
        constructor($scope: AbaxXBRLAnalisisMostrarConsultaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $modal: ng.ui.bootstrap.IModalService, $stateParams: IAbaxXBRLMostrarConsultaRouteParams) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$modal = $modal;
            this.$stateParams = $stateParams;



            this.init();
            var self = this;

        }
    }

    AbaxXBRLAnalisisMostrarConsultaController.$inject = ['$scope', 'abaxXBRLRequestService', '$modal', '$stateParams'];


    /**
     * Definición de la estructura del scope del controlador
     * @author Luis Angel Morales Gonzalez
     */
    export interface IConfiguracionConceptoScope extends IAbaxXBRLInicioScope {

        /** Indica el concepto seleccionado a agregar a la configuracion de la consulta */
        conceptoSeleccionado: string;

        /** Indica la taxonomia seleccionada */
        IdTaxonomiaXbrl: string;

        /**Valores para el llenado del combo de busqueda de cuentas. **/
        valoresSelectBusquedaCuenta: { [value: string]: string };

        /**
        * Agrega un elemento concepto a la consulta de analisis
        **/
        agregarElementoConcepto(IdConcepto: string): void;


        /** 
        * Valores para la configuracion de una consulta
        */
        consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis;

        /** Lista de plantillas disponibles para la taxonomía elegida */
        taxonomiasConfiguracionConsulta: Array<model.TaxonomiaXbrlBd>;

        /**
        * Elimina un concepto de la configuracion de la consulta
        */
        eliminarConcepto(IdConcepto: string): void;

        /**
         * Cierra el diálogo que permite guardar la consulta de analisis
         */
        cerrarDialogo(): void;

        /**
        * Carga los conceptos de una taxonomia 
        */
        cargarConceptosBusquedaCuenta(): void;

        /**
        *Define la altura máxima del detalle de la tabla para aplicar el scroll vertical
        */
        alturaModal: number;

    }

    /**
     * Implementación de un controlador para la operación de la configuracion de los conceptos de una consulta
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class ConfiguracionConceptoController {

        /** El scope del controlador para la configuracion de un concepto en la consulta de analisis */
        private $scope: IConfiguracionConceptoScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Servicio de una instancia para el manejo modal*/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            this.$scope.alturaModal = window.innerHeight - 400;
            this.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();
            this.$scope.agregarElementoConcepto = function (IdConcepto: string): void { self.agregarElementoConcepto(IdConcepto); };
            //this.cargarConceptosBusquedaCuenta();
            this.cargarTaxonomias();

            this.$scope.eliminarConcepto = function (IdConcepto: string): void {
                var indiceEliminar: number = 0;

                for (var indiceConsulta = 0; indiceConsulta < this.$scope.ConsultaAnalisisConcepto.length; indiceConsulta++) {
                //for (var indiceConsulta in self.$scope.consultaAnalisis.ConsultaAnalisisConcepto) {
                    if (self.$scope.consultaAnalisis.ConsultaAnalisisConcepto[indiceConsulta].IdConcepto == IdConcepto) {
                        indiceEliminar = indiceConsulta;
                    }
                }
                self.$scope.consultaAnalisis.ConsultaAnalisisConcepto.splice(indiceEliminar, 1);
                self.$scope.consultaAnalisis.PendienteGuardar = true;
            }

            this.$scope.cerrarDialogo = function (): void {
                self.$modalInstance.close();
            };

            /**
            * Obtiene la información para la generación de las opciones del selector de la busqueda de hechos.
            **/
            this.$scope.cargarConceptosBusquedaCuenta = function (): void {
                self.$scope.valoresSelectBusquedaCuenta = {};

                if (self.$scope.IdTaxonomiaXbrl && parseInt(self.$scope.IdTaxonomiaXbrl) > 0) {
                    var onHttpSucess = function (result: any) {
                        var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                        if (resultadoOperacion.Resultado) {
                            self.$scope.valoresSelectBusquedaCuenta = resultadoOperacion.InformacionExtra;
                        } else {
                            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('MENSAJE_ERROR_SERVIDOR'),
                                {
                                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                    buttons: { aceptar: true }
                                });
                        }
                    };
                    var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
                    self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONCEPTOS_POR_ENTIDAD_PATH, { "consulta": $.toJSON(self.$scope.consultaAnalisis), "idTaxonomia": self.$scope.IdTaxonomiaXbrl }).then(onHttpSucess, onHttpError);
                }
            }


        }


        private cargarTaxonomias(): void {
            var self = this;
            this.abaxXBRLRequestService.post("DocumentoInstancia/ObtenerTaxonomiasRegistradasJsonResult", {}).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    if (resultadoOperacion && resultadoOperacion.InformacionExtra && resultadoOperacion.InformacionExtra.length) {
                        self.$scope.taxonomiasConfiguracionConsulta = new Array<model.TaxonomiaXbrlBd>();
                        for (var i = 0; i < resultadoOperacion.InformacionExtra.length; i++) {
                            self.$scope.taxonomiasConfiguracionConsulta.push(new model.TaxonomiaXbrlBd().deserialize(resultadoOperacion.InformacionExtra[i]));
                        }
                    }
                } else {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                }
            }, function (error: any) {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                });
        }

        /**
        * Agrega un elemento concepto a la configuracion de la consulta.
        **/
        private agregarElementoConcepto(IdConcepto: string): void {
            var self = this;
            var indiceConsulta: number = -1;
            for (var indiceConsultaAnalisis = 0; indiceConsultaAnalisis < self.$scope.consultaAnalisis.ConsultaAnalisisConcepto.length; indiceConsultaAnalisis++) {

            //for (var indiceConsultaAnalisis in self.$scope.consultaAnalisis.ConsultaAnalisisConcepto) {
                if (self.$scope.consultaAnalisis.ConsultaAnalisisConcepto[indiceConsultaAnalisis].IdConcepto == IdConcepto) {
                    indiceConsulta = indiceConsultaAnalisis;
                }
            }

            if (indiceConsulta < 0 && IdConcepto.length > 0) {
                self.$scope.consultaAnalisis.ConsultaAnalisisConcepto.push({ IdConcepto: IdConcepto, DescripcionConcepto: self.$scope.valoresSelectBusquedaCuenta[IdConcepto] });
                self.$scope.consultaAnalisis.PendienteGuardar = true;
            }
        }


        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IConfiguracionConceptoScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$modalInstance = $modalInstance;
            this.init();
        }
    }

    /**
    * Inyección de referencias para inicializar en controlador
    */
    ConfiguracionConceptoController.$inject = ['$scope', '$modalInstance', 'abaxXBRLRequestService'];



    /**
     * Definición de la estructura del scope del controlador
     * @author Luis Angel Morales Gonzalez
     */
    export interface IConfiguracionPeriodoScope extends IAbaxXBRLInicioScope {

        /**
        * Consulta de configuracion de analisis
        */
        consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis;

        /** identifica el periodo seleccionado en un contexto de tipo instante*/
        periodoSeleccionInstante: abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo;

        /** identifica el periodo seleccionado en un contexto de tipo peirodo*/
        periodoSeleccionPeriodo: abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo;


        /**Arreglo de los periodos cargados de tipo instante*/
        periodosInstante: Array<abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo>;

        /**Arreglo de los periodos cargados de tipo periodo*/
        periodos: Array<abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo>;

        /** Indica si se trata de un instante o un periodo*/
        esInstante: boolean;

        CambiarSeleccion(periodoSeleccion: abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo): void;

        /**
         * Cierra el diálogo que permite guardar la consulta de analisis
         */
        cerrarDialogo(): void;

        /** Agrega un periodo al arreglo de los periodos de la configuracion de la consulta de analisis*/
        agregarElementoPeriodo(): void;

        /**Elimina un periodo definido en la configuracion de la consulta*/
        eliminarPeriodo(Periodo: string): void;

        /**
        *Define la altura máxima del detalle de la tabla para aplicar el scroll vertical
        */
        alturaModal: number;
    }

    /**
     * Implementación de un controlador para la operación de la configuracion de los periodos de una consulta
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class ConfiguracionPeriodoController {

        /** El scope del controlador para la configuracion de un periodo en la consulta de analisis */
        private $scope: IConfiguracionPeriodoScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Servicio de una instancia para el manejo modal*/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            self.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();
            self.$scope.periodosInstante = new Array<abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo>();
            self.$scope.periodos = new Array<abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo>();
            self.$scope.periodoSeleccionInstante = {};
            self.$scope.periodoSeleccionPeriodo = {};
            self.$scope.alturaModal = window.innerHeight - 400;

            this.$scope.cerrarDialogo = function (): void {
                self.$modalInstance.close();
            };

            this.$scope.agregarElementoPeriodo = function (): void { self.agregarElementoPeriodo(); };

            this.$scope.eliminarPeriodo = function (Periodo: string): void {
                var indiceEliminar: number = 0;

                for (var indiceConsulta = 0; indiceConsulta < self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.length; indiceConsulta++) {
                //for (var indiceConsulta in self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo) {
                    if (self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo[indiceConsulta].Periodo == Periodo) {
                        indiceEliminar = indiceConsulta;
                    }
                }
                self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.splice(indiceEliminar, 1);
                self.$scope.consultaAnalisis.PendienteGuardar = true;
            };


            this.$scope.CambiarSeleccion = function (periodoSeleccion: abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo): void {
                if (self.$scope.esInstante) {
                    self.$scope.periodoSeleccionInstante = periodoSeleccion;
                } else {
                    self.$scope.periodoSeleccionPeriodo = periodoSeleccion;
                }
            }

            this.CargarContextosPorEmpresas();

        }

        /**
        * Agrega un elemento periodo a la configuracion de la consulta
        */
        private agregarElementoPeriodo(): void {


            var indiceExistente: number = -1;

            for (var indiceConsulta = 0; indiceConsulta < this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.length; indiceConsulta++) {
            //for (var indiceConsulta in this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo) {

                var periodo = this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo[indiceConsulta];

                if (periodo.TipoPeriodo == this.$scope.periodoSeleccionInstante.TipoPeriodo || periodo.TipoPeriodo == this.$scope.periodoSeleccionPeriodo.TipoPeriodo) {
                    var fechaComparacion: string;

                    if (this.$scope.esInstante && this.$scope.periodoSeleccionInstante.Fecha) {
                        fechaComparacion = this.generarFecha(this.$scope.periodoSeleccionInstante.Fecha);
                    } else if (!this.$scope.esInstante && this.$scope.periodoSeleccionPeriodo.FechaInicio){
                        fechaComparacion = this.generarFecha(this.$scope.periodoSeleccionPeriodo.FechaInicio) + " - " + this.generarFecha(this.$scope.periodoSeleccionPeriodo.FechaFinal)
                    }

                    if (periodo.Periodo == fechaComparacion) {
                        indiceExistente = indiceConsulta;
                        break;
                    }
                }
            }

            if (indiceExistente < 0) {
                if (this.$scope.esInstante && this.$scope.periodoSeleccionInstante.Fecha) {
                    this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.push({ Periodo: this.generarFecha(this.$scope.periodoSeleccionInstante.Fecha), FechaInicio: this.$scope.periodoSeleccionInstante.FechaInicio, FechaFinal: this.$scope.periodoSeleccionInstante.FechaFinal, Fecha: this.$scope.periodoSeleccionInstante.Fecha, TipoPeriodo: this.$scope.periodoSeleccionInstante.TipoPeriodo });
                } else if (!this.$scope.esInstante && this.$scope.periodoSeleccionPeriodo.FechaInicio){
                    this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.push({ Periodo: this.generarFecha(this.$scope.periodoSeleccionPeriodo.FechaInicio) + " - " + this.generarFecha(this.$scope.periodoSeleccionPeriodo.FechaFinal), FechaInicio: this.$scope.periodoSeleccionPeriodo.FechaInicio, FechaFinal: this.$scope.periodoSeleccionPeriodo.FechaFinal, Fecha: this.$scope.periodoSeleccionPeriodo.Fecha, TipoPeriodo: this.$scope.periodoSeleccionPeriodo.TipoPeriodo });
                }
                this.$scope.consultaAnalisis.PendienteGuardar = true;
            }

        }


        /**
        *Carga los contextos que se tengan entre empresas
        */
        private CargarContextosPorEmpresas() {
            var self = this;
            self.$scope.periodosInstante = new Array<abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo>();
            self.$scope.periodos = new Array<abaxXBRL.shared.modelos.IConsultaAnalisisPeriodo>();

            var onHttpSucess = function (result: any) {
                var resultadoOperacion: shared.modelos.IResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    var contextos = resultadoOperacion.InformacionExtra;
                    for (var indiceContexto in contextos) {
                        var ctx: abaxXBRL.shared.modelos.IContexto = contextos[indiceContexto];
                        if (ctx.TipoContexto == 1) {
                            self.$scope.periodosInstante.push({
                                TipoPeriodo: ctx.TipoContexto,
                                Periodo: self.generarFecha(ctx.Fecha),
                                Fecha: ctx.Fecha,
                                FechaFinal: ctx.FechaFin,
                                FechaInicio: ctx.FechaInicio
                            });
                        } else {
                            self.$scope.periodos.push({
                                TipoPeriodo: ctx.TipoContexto,
                                Periodo: self.generarFecha(ctx.FechaInicio) + " - " + self.generarFecha(ctx.FechaFin),
                                Fecha: ctx.Fecha,
                                FechaFinal: ctx.FechaFin,
                                FechaInicio: ctx.FechaInicio
                            });
                        }
                    }

                } else {
                    self.abaxXBRLRequestService.getOnErrorDefault();
                }
            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();

            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONTEXTOS_POR_EMPRESA_PATH, { "entidades": $.toJSON(this.$scope.consultaAnalisis.ConsultaAnalisisEntidad) }).then(onHttpSucess, onHttpError);

        }

        /**
        *Genera la fecha del tipo dd/MM/yyyy
        */
        private generarFecha(fecha: Date): string {
            var fechaMostrar = moment(fecha).format('DD/MM/YYYY');
            return fechaMostrar;
        }

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IConfiguracionPeriodoScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$modalInstance = $modalInstance;
            this.init();
        }
    }

    /**
    * Inyección de referencias para inicializar en controlador
    */
    ConfiguracionPeriodoController.$inject = ['$scope', '$modalInstance', 'abaxXBRLRequestService'];


    /**
     * Definición de la estructura del scope del controlador
     * @author Luis Angel Morales Gonzalez
     */
    export interface IConfiguracionEmpresaScope extends IAbaxXBRLInicioScope {

        /** Indica la entidad seleccionada*/
        entidadSeleccionada: abaxXBRL.shared.modelos.IEmisora;

        /** Lista de emisoras que se cargaran cuando el usuario tenga mas de una emrpesa asignada **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;

        /** 
        * Valores para la configuracion de una consulta
        */
        consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis;

        /**
        * Agrega una entidad en la configuracion de la consulta
        */
        agregarElementoEntidad(): void;

        /**
        * Elimina una entidad de la configuracion de la consulta
        */
        eliminarEntidad(IdEmpresa: number): void;

        /**
         * Cierra el diálogo que permite guardar la consulta de analisis
         */
        cerrarDialogo(): void;

        /**
        *Define la altura máxima del detalle de la tabla para aplicar el scroll vertical
        */
        alturaModal: number;
    }

    /**
     * Implementación de un controlador para la operación de la configuracion de los periodos de una consulta
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class ConfiguracionEmpresaController {

        /** El scope del controlador para la configuracion de una empresa en la consulta de analisis */
        private $scope: IConfiguracionEmpresaScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Servicio de una instancia para el manejo modal*/
        private $modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        /**
        *Genera un color de la entidad
        */
        private GenerarColorEntidad(): string {
            var h = this.rand(10, 100); // color hue between 1 and 360
            var s = this.rand(10, 30); // saturation 30-100%
            var l = this.rand(50, 90); // lightness 30-70%
            return 'hsl(' + h + ',' + s + '%,' + l + '%)';
        }

        private rand(min: number, max: number): number {
            var valorColor = Math.random() * (max - min + 1);
            return parseInt(valorColor.toString(), 10) + min;
        }


        /**
        * Obtiene la información para la generación de las opciones del selector de la busqueda de entidades.
        **/
        private cargarEntidades(): void {

            var self = this;
            var onHttpSucess = function (result: any) {
                var resultado: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultado.Resultado) {
                    self.$scope.emisoras = resultado.InformacionExtra;
                } else {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('MENSAJE_ERROR_SERVIDOR'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                }

            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.ENTIDADES_BUSQUEDA_PATH, {}).then(onHttpSucess, onHttpError);

        }

        /**
        * Agrega un elemento entidad en la configuracion de la consulta
        **/
        private agregarElementoEntidad(): void {
            var self = this;

            var indiceExistente: number = -1;
            for (var indiceConsulta = 0; indiceConsulta < this.$scope.consultaAnalisis.ConsultaAnalisisEntidad.length; indiceConsulta++) {
            //for (var indiceConsulta in self.$scope.consultaAnalisis.ConsultaAnalisisEntidad) {
                if (self.$scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceConsulta].IdEmpresa == self.$scope.entidadSeleccionada.IdEmpresa) {
                    indiceExistente = indiceConsulta;
                }
            }
            if (indiceExistente < 0) {
                self.$scope.consultaAnalisis.ConsultaAnalisisEntidad.push({ IdEmpresa: self.$scope.entidadSeleccionada.IdEmpresa, NombreEntidad: self.$scope.entidadSeleccionada.NombreCorto, Color: this.GenerarColorEntidad() });
                self.$scope.consultaAnalisis.PendienteGuardar = true;
            }
        }


        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            this.$scope.alturaModal = window.innerHeight - 400;
            this.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();
            this.$scope.agregarElementoEntidad = function (): void { self.agregarElementoEntidad(); };


            this.$scope.eliminarEntidad = function (IdEmpresa: number): void {
                var indiceEliminar: number = 0;
                for (var indiceConsulta = 0; indiceConsulta < self.$scope.consultaAnalisis.ConsultaAnalisisEntidad.length; indiceConsulta++) {
                //for (var indiceConsulta in self.$scope.consultaAnalisis.ConsultaAnalisisEntidad) {
                    if (self.$scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceConsulta].IdEmpresa == IdEmpresa) {
                        indiceEliminar = indiceConsulta;
                    }
                }
                self.$scope.consultaAnalisis.ConsultaAnalisisEntidad.splice(indiceEliminar, 1);
                self.$scope.consultaAnalisis.PendienteGuardar = true;
            }

            this.cargarEntidades();

            this.$scope.cerrarDialogo = function (): void {
                self.$modalInstance.close();
            };

        }

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IConfiguracionEmpresaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$modalInstance = $modalInstance;
            this.init();
        }
    }

    /**
    * Inyección de referencias para inicializar en controlador
    */
    ConfiguracionEmpresaController.$inject = ['$scope', '$modalInstance', 'abaxXBRLRequestService'];




    /**
     * Definición de la estructura del scope del controlador para guardar una consulta de configuracion.
     * @author Luis Angel Morales Gonzalez
     */
    export interface IGuardarConsultaScope extends IAbaxXBRLInicioScope {

        /** Indica si la operación de guardado ya se ha completado */
        guardado: boolean;

        /** El resultado de la invocación remota al servicio de guardar una consulta de configuracion de analisis */
        resultadoOperacion: abaxXBRL.model.ResultadoOperacion;

        /**
         * Cierra el diálogo que permite guardar la consulta de analisis
         */
        cerrarDialogo(): void;


        /**
         * Guarda la consulta de analisis.
         * 
         * @param isValid el estado de la validación de la forma presentada al usuario. 
         */
        guardarConsulta(isValid: boolean): void;

        /**
        * Consulta de configuracion de analisis
        */
        consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis;

    }

    /**
     * Implementación de un controlador para la operación de guardar un consulta de analisis
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class GuardarConsultaController {

        /** El scope del controlador para guardar versiones del documento instancia */
        private $scope: IGuardarConsultaScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IGuardarConsultaScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            var self = this;

            self.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();

            this.$scope.resultadoOperacion = null;
            this.$scope.guardado = false;
            this.$scope.cerrarDialogo = function (): void {
                self.$scope.guardado = false;
                self.$scope.resultadoOperacion = null;
                $modalInstance.close();
            };

            this.$scope.guardarConsulta = function (isValid: boolean): void {
                if (isValid) {

                    var onHttpSucess = function (result: any) {
                        self.$scope.guardado = true;
                        var resultadoOperacion: shared.modelos.IResultadoOperacion = result.data;
                        if (resultadoOperacion.Resultado) {
                            abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance().IdConsultaAnalisis = resultadoOperacion.InformacionExtra;
                        } else {
                            self.abaxXBRLRequestService.getOnErrorDefault()
                        }
                    };
                    var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
                    self.abaxXBRLRequestService.post(AbaxXBRLConstantes.REGISTRAR_CONSULTA_ANALISIS_PATH, { "consulta": $.toJSON(abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance()) }).then(onHttpSucess, onHttpError);

                }
            };
        }
    }



    GuardarConsultaController.$inject = ['$scope', '$modalInstance', 'abaxXBRLRequestService'];




    /**
    * Implementación de métodos utilería para los diferentes plugins XBRL del editor/visor de documentos instancia XBRL
    *
    * @author José Antonio Huizar Moreno
    * @version 1.0
    */
    export class XbrlPluginUtils {


        /** 
         * Elimina los espacios antes, dentro y después de una cadena 
         * 
         * @param valor el valor a procesar
         * @return la cadena sin espacios antes, dentro y después
         */
        public static fullTrim(valor: string): string {
            return valor.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
        }

        /**
         * Indica si una cadena está contenida dentro de otra cadena.
         *
         * @param valor el valor a procesar
         * @param cadenaBuscada la cadena a buscar
         * @return true si la cadena está contenida en la primera. false en cualquier otro caso.
         */
        public static contains(valor: string, cadenaBuscada: string): boolean {
            return valor.indexOf(cadenaBuscada) > -1;
        }

        /** 
         * Elimina los espacios antes y después de una cadena 
         * 
         * @param valor el valor a procesar
         * @return la cadena sin espacios antes y después
         */
        public static trim(valor: string): string {
            return valor.replace(/^\s+|\s+$/g, '');
        }


        /**
            * Carga una plantilla de una ubicación específica, si la carga es exitosa, reemplaza las variables pasadas como parámetro dentro de la plantillas las cuales
            * están identificadas por expresiones dentro de dobles llaves "{{EXPRESION}}"
            *
            * @param templateUrl el URL que deberá ser cargado.
            * @param variablesReemplazar las variables que deberán ser reemplazadas
            * @param exito el método callback que deberá ser ejecutado en caso de que la carga se realice con éxito.
            * @param fallo el método callback que deberá ser ejecutado en caso de que falle la carga de la plantilla o la operación de reemplazar las variables.
            */
        public static cargarPlantillaYReemplazarVariables(templateUrl: string, variablesReemplazar: Array<{ llave: string; valor: string }>, exito: (plantilla: JQuery) => void, fallo: (textStatus, errorThrown) => void): void {

            var existePlantilla: boolean = false;
            var contenidoPlantilla: string = '';

            $.ajax({
                type: 'GET',
                url: templateUrl
            }).done(function (data: string, textStatus: string, jqXHR) {
                existePlantilla = true;
                contenidoPlantilla = data;

                var expresionesAReemplazar = XRegExp.matchRecursive(contenidoPlantilla, '{{', '}}', 'g');

                if (expresionesAReemplazar && expresionesAReemplazar.length && expresionesAReemplazar.length > 0) {
                    for (var i = 0; i < expresionesAReemplazar.length; i++) {
                        var expresion = expresionesAReemplazar[i];
                        var contenidoExpresion = XbrlPluginUtils.trim(expresion);
                        var valorReemplazar = '';

                        if (XbrlPluginUtils.contains(contenidoExpresion, '|')) {
                            var componentes = contenidoExpresion.split('|');
                            if (componentes && componentes !== null && componentes.length && componentes.length == 2) {
                                if (XbrlPluginUtils.fullTrim(componentes[1]) == 'translate') {
                                    valorReemplazar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta(XbrlPluginUtils.trim(componentes[0]).replace(/\'/g, ''));
                                }
                            }
                        } else {
                            var llaveABuscar = XbrlPluginUtils.trim(contenidoExpresion);
                            for (var j = 0; j < variablesReemplazar.length; j++) {
                                if (variablesReemplazar[j].llave === llaveABuscar) {
                                    valorReemplazar = variablesReemplazar[j].valor;
                                    break;
                                }
                            }
                        }

                        contenidoPlantilla = contenidoPlantilla.replace('{{' + expresion + '}}', valorReemplazar);
                    }
                }

                exito($(contenidoPlantilla));
            }).fail(function (jqXHR, textStatus, errorThrown) {
                existePlantilla = false;
                fallo(textStatus, errorThrown);
            });
        }

    }


} 


