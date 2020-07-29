///<reference path="../../../../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../../../../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../../../../../scripts/typings/impromptu/jquery-impromptu.d.ts" />
///<reference path="../../../../visorXbrl.ts" /> 
///<reference path="../../../../directivasAbax.ts" /> 
///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../../scripts/typings/moment/moment.d.ts" />

module abaxXBRL.templates.extensions.series {

    /**
       * Implementación del controlador encargado de crear el comportamiento necesario para presentar el formato de distribución de ingresos por producto en pantalla.
       *
       * @author Carlos Alejandro Rosas Montano
       * @version 1.0
       */
    export class XbrlSeriesController {

        /** El scope del controlador */
        private $scope: IXbrlSeriesScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** El servicio para ejecutar tareas asíncronas de angular */
        private $timeout: ng.ITimeoutService;

        /** Apunta a la instancia acutal del controlador. **/
        private controllerSelf = this;

        /** Apunta al documento de instancia**/
        private documentoInstancia: model.DocumentoInstanciaXbrl;

        /** El nombre de la dimensión tipificada serie */
        public static get NOMBRE_DIMENSION_SERIES(): string { return 'SerieDomain'; }

        /** El espacio de nombres de la dimensión tipificada series */
        public static get ESPACIO_NOMRES_DIMENSION_SERIES(): string { return 'http://www.cnbv.gob.mx/2016-08-22/annext'; }

        /** Contiene la plantilla que deberá usarse para definir un nuevo valor de la dimensión tipificada series */
        public static get TEMPLATE_VALOR_DIMENSION_SERIES(): string { return '<annext:SerieDomain xmlns:annext="http://www.cnbv.gob.mx/2016-08-22/annext">#valorDimensionSerie</annext:SerieDomain>'; }

        /** Contiene el nombre del placeholder para reemplazar en la plantilla de definición un nuevo valor de la dimensión tipificada institución */
        public static get PLACEHOLDER_VALOR_DIMENSION_SERIES(): string { return '#valorDimensionSerie'; }

        /** Contiene el nombre completamente calificado de la dimensión implícita series */
        public static get QNAME_DIMENSION_SERIES(): string { return 'http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis'; }

        /** Contiene el id de concepto de Detalle de saldo insoluto de la emision al final del periodo **/
        public static get ID_CONCEPTO_OUTSTANDING_BALANCE(): string { return "annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod"; }

        /** Contiene el id del renglon de Detalle de saldo insoluto de la emision al final del periodo **/
        public static get ID_RENGLON_OUTSTANDING_BALANCE(): string { return "renglonOutstandingBalance"; }

        /** Contiene el id de concepto de Detalle de monto de intereses pagados a los tenedores de titulos fiduciarios **/
        public static get ID_CONCEPTO_INTEREST_PAID(): string { return "annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes"; }

        /** Contiene el id del renglon de Detalle de monto de intereses pagados a los tenedores de titulos fiduciarios **/
        public static get ID_RENGLON_INTEREST_PAID(): string { return "renglonInterestPaid"; }

        /** Contiene el id de concepto de Detalle de monto pagado por amortizacion a los tenedores de titulos fiduciarios **/
        public static get ID_CONCEPTO_PAID_FOR_AMORTIZATION(): string { return "annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes"; }

        /** Contiene el id del renglon de Detalle de monto pagado por amortizacion a los tenedores de titulos fiduciarios **/
        public static get ID_RENGLON_PAID_FOR_AMORTIZATION(): string { return "renglonPaidForAmortization"; }

        /** Contiene el Id de la dimensión de series */
        public static get ID_DIMENSION_SERIES(): string { return 'annext_SerieTypedAxis'; }

        /** El nombre del elemento que contiene el prefijo de acuerdo a la librería X2JS */
        public static get X2JS_ELEMENTO_PREFIX(): string { return '__prefix'; }

        /** El prefijo del nombre del elemento que contiene el xmlns de acuerdo a la librería X2JS */
        public static get X2JS_PREFIJO_ELEMENTO_XMLNS(): string { return '_xmlns:'; }

        /** El nombre del elemento que contiene el texto contenido en un nodo xml de acuerdo a la librería X2JS */
        public static get X2JS_ELEMENTO_TEXT(): string { return '__text'; }

        /** El prefijo del nombre de la serie que se asignará a todos los nuevos elementos de la dimensión explícita creados por el editor */
        public static get PREFIJO_NOMBRE_SERIE_DEFECTO(): string { return 'NUEVA SERIE'; }

        /**Id del timeout para reevalura la plantilla **/
        private idTimeOutReEvaluaPlantilla: number;

        /** Settings de la tabla de excel. **/
        private tableSettings: plugins.XbrlTablaExcelSettings;

        /**
        * Funcion que se ejecuta una ves terminado el tiempo de espera del timeout.
        **/
        private onReEvaluaElementosPlantillaSucess(): void {

            var etiquetasConcepto = $('xbrl\\:etiqueta-concepto:not(.inicializado)');
            var $self = this;
            if (etiquetasConcepto.length > 0) {

                plugins.AngularJQueryBridge.getInstance().establecerMapaElementosPorIdHecho({});
                etiquetasConcepto.xbrlEtiquetaConcepto()
                etiquetasConcepto.addClass('inicializado');
            }
            var tablaExcelSinInicializar = $('table[xbrl\\:tabla-excel]:not(.inicializado)');
            if (tablaExcelSinInicializar.length > 0) {
                tablaExcelSinInicializar.xbrlTablaExcel('init', $self.tableSettings);
                tablaExcelSinInicializar.addClass('inicializado');
            }
            var etiquetasCampoCaptura = $('xbrl\\:campo-captura:not(.inicializado)');
            
            etiquetasCampoCaptura.xbrlCampoCaptura().promise().done(function () {
                $('table[xbrl\\:tabla-excel]').xbrlTablaExcel('init', $self.tableSettings);
                etiquetasCampoCaptura.parent('td').parent('tr').show();
                etiquetasCampoCaptura.find('.div-default').removeClass('div-default');
                $('table[xbrl\\:tabla-excel]').find('td')
                    .removeClass('celdaSeleccionada')
                    .removeClass('rangoSeleccionado')
                    .removeClass('rangoSeleccionadoR')
                    .removeClass('rangoSeleccionadoL')
                    .removeClass('rangoSeleccionadoT')
                    .removeClass('rangoSeleccionadoB');
                var $util = shared.service.AbaxXBRLUtilsService;
                //setTimeout(function () { plugins.XbrlPluginUtils.ocultarLoaderFormatos(); }, 1000);
                $util.setTimeout(function () { shared.service.AbaxXBRLUtilsService.evaluaTablasDinamicas(); }, 333);
            });
            etiquetasCampoCaptura.addClass('inicializado');

        }

        /** 
        * Reevalua los elementos de la plantilla 
        **/
        private reEvaluaElementosPlantilla(): void {
            var $self = this;
            setTimeout(function () {
                if ($self.idTimeOutReEvaluaPlantilla) {
                    clearTimeout($self.idTimeOutReEvaluaPlantilla);
                }
                var trigger = function () { $self.onReEvaluaElementosPlantillaSucess(); };
                $self.idTimeOutReEvaluaPlantilla = setTimeout(trigger, 10);
            }, 5);
        }

        /**
        * Genera el elemento miembro tipificado para una serie en particular. 
        * @param valorMiembro Nombre del miembro que será anexado a la dimensión de Series.
        * @return Nombre del mimembro tipificado a al taxonomía actual.
        **/
        private generaElementoMiembroTipificadoSerie(valorMiembro) {
            var valorCodificadoXML = shared.service.AbaxXBRLUtilsService.xmlEncode(valorMiembro);
            //Se cambió a únicamente reemplazar el valor del template
            return XbrlSeriesController.TEMPLATE_VALOR_DIMENSION_SERIES.replace("#valorDimensionSerie", valorCodificadoXML);
        }

        /**
        * Actualiza el valor de los elementos miembro tipificados de un miembro en particularo por un nuevo valor, para todos los contextos de la lista dada.
        * @param contextosIds Lista con los identificadores de los contextos a evaluar para actualizar su miembro tipificado.
        * @param valorDimensionAnterior Valor del miembro que se pretende actualizar en las dimensiones de los contextos.
        * @param valorDimensionNuevo Nuevo nombre del miembro que se utilizará para generar el nuevo valor del elemento típificado de las dimensiones de los contextos.
        * @param esSerie  Indica si se esta generando para la dimensión serie o para la dimensión producto.
        **/
        private actualizaElementoMiembroTipificado(contextosIds: Array<string>, valorDimensionAnterior: string, valorDimensionNuevo: string) {
            var self = this.controllerSelf;
            var scope: IXbrlSeriesScope = self.$scope;
            var documentoInstancia: model.DocumentoInstanciaXbrl = self.documentoInstancia;
            var miembroTipificadoAnterior: string = self.generaElementoMiembroTipificadoSerie(valorDimensionAnterior);
            var miembroTipificadoNuevo: string = self.generaElementoMiembroTipificadoSerie(valorDimensionNuevo);
            for (var indexContexto: number = 0; indexContexto < contextosIds.length; indexContexto++) {
                var idContexto: string = contextosIds[indexContexto];
                var contexto: model.Contexto = documentoInstancia.ContextosPorId[idContexto];
                if (contexto.ValoresDimension) {
                    for (var indexDimensionItera: number = 0; indexDimensionItera < contexto.ValoresDimension.length; indexDimensionItera++) {
                        var dimensionItera = contexto.ValoresDimension[indexDimensionItera];
                        //Se espera que sea implicita y tenga el miembro tipificado correspondiente.
                        if (!dimensionItera.Explicita && dimensionItera.ElementoMiembroTipificado == miembroTipificadoAnterior) {
                            //Actualizamos el elemento miembro tipificado.
                            dimensionItera.ElementoMiembroTipificado = miembroTipificadoNuevo;
                            dimensionItera.CreatTextoElementoMiembroTipificado();
                        }
                    }
                }
            }
        }
        /**
        * Obtiene el Identificador del primer contexto que tenga el QNameItemMiembro indicado en la lista de contextos.
        * @param idsContextos Arreglo con los identificadores de los contexto donde se prentende buscar el QNameItemMiembro.
        * @param qNameMiembro Valor del QNameItemMiembro buscado.
        * @return Retorna el identificador del primer contexto en cuya dimensiónes se encuentre el QNameItemMiembro con el valor indicado ó  null si no existe ningun contexto con el QNameItemMiembro.
        **/
        private buscaIdContextoPorQNameItemMiembro(idsContextos: Array<string>) {

            var documentoInstancia = this.documentoInstancia;
            if (idsContextos && idsContextos.length && idsContextos.length > 0) {

                for (var index: number = 0; index < idsContextos.length; index++) {
                    var idContexto = idsContextos[index];
                    var contexto: model.Contexto = documentoInstancia.ContextosPorId[idContexto];
                    if (!contexto || contexto == null) {
                        continue;
                    }
                    if (!contexto.ValoresDimension || contexto.ValoresDimension == null || !contexto.ValoresDimension.length) {
                        continue;
                    }
                    //for (var indexDimension: number = 0; indexDimension < contexto.ValoresDimension.length; indexDimension++) {
                    //    var dimension: model.DimensionInfo = contexto.ValoresDimension[indexDimension];
                    //    if (dimension.QNameItemMiembro == qNameMiembro) {
                    //        return idContexto;
                    //    }
                    //}
                }
            }
            return null;
        }

        /**
         * Crea un contexto para su uso en la dsitribución de ingresos a partir de los valores dimensionales especificados y las características solicitadas para el nuevo contexto.
         *
         * @param valorDimensionSerie El valor de la dimensión tipificada principales marcas.
         * @param valorDimensionProducto El valor de la dimensión tipificada linea de productos.
         * @param qNameMiembroTipoIngreso El nombre calificado del miembro para la dimensión tipo de ingreso.
         * @param idItemMiembroTipoIngreso Identificador del concepto miembro para la dimensión de tipo de ingreso.
         * @param emisora el nombre de la emisora para la entidad del contexto.
         * @param esquemaEmisora el esquema en que se definió  el nombre de la emisora para la entidad del contexto.
         * @param tipo el tipo de contexto (duración o instante).
         * @param fechaInicio la fecha que sirve como instante o como inicio del periodo de duración del periodo del contexto.
         * @param fechaFin la fecha que sirve como fin para el periodo del contexto en caso de ser de tipo duración.
         * @return el contexto creado a partir de las características proporcionadas.
         */
        private crearContextoDeSerie(valorDimensionSerie: string, emisora: string, esquemaEmisora: string, tipo: number, fechaInicio: string, fechaFin?: string): abaxXBRL.model.Contexto {
            var contexto = new abaxXBRL.model.Contexto();

            contexto.ContieneInformacionDimensional = false;
            contexto.Escenario = null;
            contexto.Id = "CS" + abaxXBRL.utils.UUIDUtils.generarUUID();
            contexto.ValoresDimension = null;
            contexto.Periodo = new abaxXBRL.model.Periodo();

            contexto.Periodo.Tipo = tipo;
            if (contexto.Periodo.Tipo == abaxXBRL.model.Periodo.INSTANTE) {
                contexto.Periodo.FechaInstante = moment(fechaInicio + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
            } else {
                contexto.Periodo.FechaInicio = moment(fechaInicio + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
                contexto.Periodo.FechaFin = moment(fechaFin + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
            }

            contexto.Entidad = new abaxXBRL.model.Entidad();
            contexto.Entidad.Id = emisora;
            contexto.Entidad.EsquemaId = esquemaEmisora;
            contexto.Entidad.IdEntidad = esquemaEmisora + abaxXBRL.model.ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO + emisora;
            contexto.Entidad.ContieneInformacionDimensional = false;
            contexto.ContieneInformacionDimensional = true;
            contexto.Entidad.Segmento = null;
            contexto.Escenario = null;
            contexto.ValoresDimension = new Array<abaxXBRL.model.DimensionInfo>();

            var DimensionSerie = new abaxXBRL.model.DimensionInfo();
            DimensionSerie.Explicita = false;
            DimensionSerie.QNameDimension = XbrlSeriesController.QNAME_DIMENSION_SERIES;
            DimensionSerie.IdDimension = XbrlSeriesController.ID_DIMENSION_SERIES;
            DimensionSerie.ElementoMiembroTipificado = this.generaElementoMiembroTipificadoSerie(valorDimensionSerie);
            DimensionSerie.CreatTextoElementoMiembroTipificado();
            contexto.ValoresDimension.push(DimensionSerie);

            this.abaxService.inyectarContextoADocumentoInstancia(contexto);
            return contexto;
        }

        /**
        * Carga del documento instancia la información para llenar los indicies y hechos del formato actual.
        * @param fechaInicioPeriodo Fecha de inicio del periodo del documento actual.
        * @param fechaFinTrimestre Fecha de fin del trimestre del documento actual.
        * @param emisora Nombre de la emisora que se esta reportando.
        * @param esquemaEmisora Esquema donde se define la emisora que se reporta. 
        **/
        private inicializaIndices(fechaInicioPeriodo: string, fechaFinTrimestre: string, emisora: string, esquemaEmisora: string): void {
            var self = this;
            var documentoInstancia: model.DocumentoInstanciaXbrl = self.documentoInstancia;
            var scope = self.$scope;
            var contextosInstante = documentoInstancia.ContextosPorFecha[fechaFinTrimestre];
            var contextosDuracion = documentoInstancia.ContextosPorFecha[fechaInicioPeriodo + '_' + fechaFinTrimestre];
            var idsContextosRevisar = new Array();
            if (contextosInstante && contextosInstante != null && contextosInstante.length && contextosInstante.length > 0) {
                idsContextosRevisar = idsContextosRevisar.concat(contextosInstante);
            }
            if (contextosDuracion && contextosDuracion != null && contextosDuracion.length && contextosDuracion.length > 0) {
                idsContextosRevisar = idsContextosRevisar.concat(contextosDuracion);
            }

            var valoresDimensionComparar = new Array<abaxXBRL.model.DimensionInfo>();
            valoresDimensionComparar.push(new abaxXBRL.model.DimensionInfo().deserialize({
                Explicita: false,
                QNameDimension: XbrlSeriesController.QNAME_DIMENSION_SERIES
            }));

            for (var i = 0; i < idsContextosRevisar.length; i++) {
                var contexto = documentoInstancia.ContextosPorId[idsContextosRevisar[i]];
                if (contexto && contexto != null) {
                    if (contexto.Entidad.Id === emisora && contexto.Entidad.EsquemaId === esquemaEmisora && contexto.ContieneInformacionDimensional && contexto.ValoresDimension && contexto.ValoresDimension.length && contexto.ValoresDimension.length == valoresDimensionComparar.length) {
                        var copiaComparar = valoresDimensionComparar.slice();
                        var valorDimensionSerie: string = null;
                        var qNameTipoIngreso: string = null;
                        var equivalente = true;
                        for (var j = 0; j < contexto.ValoresDimension.length; j++) {
                            var equivalenteEncontrado: boolean = false;
                            for (var k = 0; k < copiaComparar.length; k++) {
                                if (contexto.ValoresDimension[j].EsInfoMismaDimension(copiaComparar[k])) {
                                    equivalenteEncontrado = true;
                                    if (!contexto.ValoresDimension[j].Explicita) {
                                        var elementoMiembroTipificado = abaxXBRL.utils.XmlUtils.CrearJsonAPartirDeXml(contexto.ValoresDimension[j].ElementoMiembroTipificado);

                                        //Primero determinamos si se trata de la dimension MARCA
                                        var nombreDimensionEvaluada = XbrlSeriesController.NOMBRE_DIMENSION_SERIES;
                                        var espacionNombresDimensionEvaluada = XbrlSeriesController.ESPACIO_NOMRES_DIMENSION_SERIES;

                                        if (elementoMiembroTipificado[nombreDimensionEvaluada]) {
                                            if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlSeriesController.X2JS_ELEMENTO_PREFIX]) {
                                                var prefijo = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlSeriesController.X2JS_ELEMENTO_PREFIX];
                                                if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlSeriesController.X2JS_PREFIJO_ELEMENTO_XMLNS + prefijo]) {
                                                    var xmlns = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlSeriesController.X2JS_PREFIJO_ELEMENTO_XMLNS + prefijo];
                                                    if (xmlns === espacionNombresDimensionEvaluada) {
                                                        if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlSeriesController.X2JS_ELEMENTO_TEXT]) {
                                                            valorDimensionSerie = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlSeriesController.X2JS_ELEMENTO_TEXT];
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    copiaComparar.splice(k, 1);
                                    break;
                                }
                            }
                            if (!equivalenteEncontrado) {
                                equivalente = false;
                                break;
                            }
                        }
                    }
                }
            }
        }
        /** Agrega los indices requeridos **/
        private agregaIndices(idContexto: string, valorDimensionSerie: string, qNameTipoIngreso: string): void {

            var scope = this.$scope;
            var documentoInstancia = this.documentoInstancia;

            if ($.inArray(valorDimensionSerie, scope.valoresDimensionSerie) == -1) {
                scope.valoresDimensionSerie.push(valorDimensionSerie);
            }

            if (!scope.contextosPorValorDimensionSerie[valorDimensionSerie]) {
                scope.contextosPorValorDimensionSerie[valorDimensionSerie] = new Array<string>();
            }

            if ($.inArray(idContexto, scope.contextosPorValorDimensionSerie[valorDimensionSerie]) == -1) {
                scope.contextosPorValorDimensionSerie[valorDimensionSerie].push(idContexto);
            }

            if (qNameTipoIngreso != null) {

                if (!scope.contextosPorLlaveDimension[valorDimensionSerie]) {
                    scope.contextosPorLlaveDimension[valorDimensionSerie] = "";
                }

                var hechos = documentoInstancia.HechosPorIdContexto[idContexto];

                if (hechos && hechos.length && hechos.length > 0) {
                    for (var l = 0; l < hechos.length; l++) {
                        var hecho = documentoInstancia.HechosPorId[hechos[l]];
                    }
                }
            }
        }

        private eliminarSerieDefinitivamente(valorDimensionSerie: string, fechaInicioTrimestre: string, fechaFinTrimestre: string): void {
            //Primero eliminamos todos los hechos del documento de instancia.
            var self = this;
            var scope = self.$scope;
            var documentoInstancia = self.documentoInstancia;
            var contexto: model.Contexto;
            var contextosIds: Array<string> = scope.contextosPorValorDimensionSerie[valorDimensionSerie];

            //Iteramos hechos.
            for (var indexContexto: number = 0; indexContexto < contextosIds.length; indexContexto++) {
                var idContexto: string = contextosIds[indexContexto];
                var hechosIds: Array<string> = angular.copy(self.abaxService.getDocumentoInstancia().HechosPorIdContexto[idContexto]);
                if (hechosIds && hechosIds != null && hechosIds.length > 0) {
                    for (var indexHechoId: number = 0; indexHechoId < hechosIds.length; indexHechoId++) {

                        var idHecho = hechosIds[indexHechoId];
                        self.abaxService.eliminarHechoDeDocumentoInstanciaPorId(idHecho);
                    }
                }
            }
            // Eliminamos los contextos del documeno de instancia.
            var hechosPorIdContexto: { [id: string]: Array<string> } = documentoInstancia.HechosPorIdContexto;
            var contextosPorId: { [idContexto: string]: model.Contexto } = documentoInstancia.ContextosPorId;
            var gruposContextosEquivalentes: { [id: string]: Array<string> } = documentoInstancia.GruposContextosEquivalentes;
            var contextosPorFecha: { [fecha: string]: Array<string> } = documentoInstancia.ContextosPorFecha;
            //Iteramos todos los contextos por id.
            for (var indexContexto: number = 0; indexContexto < contextosIds.length; indexContexto++) {

                var idContexto: string = contextosIds[indexContexto];

                //Borramos el arreglo de hechos del diccionario.
                hechosPorIdContexto[idContexto] = undefined;
                delete hechosPorIdContexto[idContexto];

                var contextosEquivalentes: Array<string> = angular.copy(gruposContextosEquivalentes[idContexto]);
                //Borramos el idContexto del arreglo de equivalentes de sus equivalentes.
                if (contextosEquivalentes && contextosEquivalentes != null && contextosEquivalentes.length > 0) {
                    for (var indexContextoEquivalente: number = 0; indexContextoEquivalente < contextosEquivalentes.length; indexContextoEquivalente++) {
                        var idContextoEquivalente: string = contextosEquivalentes[indexContextoEquivalente];
                        var idsContexotsEquivalentes2: Array<string> = gruposContextosEquivalentes[idContextoEquivalente];
                        var indexContextoEquivalente2 = $.inArray(idContexto, idsContexotsEquivalentes2);
                        if (indexContextoEquivalente2 != -1) {
                            idsContexotsEquivalentes2.splice(indexContextoEquivalente2, 1);
                        }

                    }
                    //Borramos el arreglo de elementos equivalentes del diccionario.
                    gruposContextosEquivalentes[idContexto] = undefined;
                    delete gruposContextosEquivalentes[idContexto];
                }

                //Eliminamos los contextos del diccionario por fechas.

                var contextosInstante: Array<string> = contextosPorFecha[fechaFinTrimestre];
                var contextosDuracion: Array<string> = contextosPorFecha[fechaInicioTrimestre + '_' + fechaFinTrimestre];
                //Instante.
                var indexInstante = $.inArray(idContexto, contextosInstante);
                if (indexInstante != -1) {
                    contextosInstante.splice(indexInstante, 1);
                }
                //Duracion
                var indexDuracion = $.inArray(idContexto, contextosDuracion);
                if (indexDuracion != -1) {
                    contextosDuracion.splice(indexDuracion, 1);
                }

                //Borramos el contexto del diccionario base.
                contextosPorId[idContexto] = undefined;
                delete contextosPorId[idContexto];

            }

            /*var indiceProducto = $.inArray(valorDimensionProducto, scope.valoresDimensionProductoPorMarca[valorDimensionSerie]);
            if (indiceProducto != -1) {
                scope.valoresDimensionProductoPorMarca[valorDimensionSerie].splice(indiceProducto, 1);
            }*/
        }
        /**
        * Obtiene el filtro para buscar los hechos pertenecientes a los hipercubos del documento.
        * @return Filtro para la busqueda de los hechos del hipercubo.
        **/
        private obtenFiltroElementosSeries(): model.FiltroHechosDto {

            var $self = this;
            var dimensionSerie = new model.DimensionInfo().deserialize(
                {
                    Explicita: true,
                    IdDimension:'annext_SerieTypedAxis',
                    QNameDimension:'http://www.cnbv.gob.mx/2016-08-22/annext:SerieTypedAxis'
                }
            );

            return new model.FiltroHechosDto().deserialize({

                IdConcepto: [XbrlSeriesController.ID_CONCEPTO_OUTSTANDING_BALANCE, XbrlSeriesController.ID_CONCEPTO_INTEREST_PAID, XbrlSeriesController.ID_CONCEPTO_PAID_FOR_AMORTIZATION],
                ConjuntosParcialesDimensiones: [dimensionSerie]
            });
        }
        /**
        * Inicializa los diccionarios de series en base al contenido del documento de instancia.
        **/ 
        private incializaSeriesDocumentoIsntancia(): void {

            var $self = this;
            var $scope = $self.$scope;
            var filtro = $self.obtenFiltroElementosSeries();
            var hechosIds = $self.abaxService.buscaHechosPorFiltro(filtro);
            var regExpresionPrefijo = new RegExp("\\<annext\\:SerieDomain +xmlns\\:annext\\=\"http\\:\\/\\/www.cnbv.gob.mx\\/2016\\-08\\-22\\/annext\\\" *\\>", "g");
            var regExpresionSubFijo = new RegExp("\\<\\/annext\\:SerieDomain\\>", "g");
            var diccionarioSeries: { [valorSerie: string]: string } = {};
            var conceptosGenerales = {
                "annext_DetailOfOutstandingBalanceOfTheIssueAtEndOfPeriod": XbrlSeriesController.ID_RENGLON_OUTSTANDING_BALANCE,
                "annext_DetailOfAmountOfInterestPaidToHoldersOfTrustNotes": XbrlSeriesController.ID_RENGLON_INTEREST_PAID,
                "annext_DetailOfAmountPaidForAmortizationToHoldersOfTrustNotes": XbrlSeriesController.ID_RENGLON_PAID_FOR_AMORTIZATION
            };
            for (var index = 0; index < hechosIds.length; index++) {

                var idHecho = hechosIds[index];
                var hecho = $self.documentoInstancia.HechosPorId[idHecho];
                if (!hecho) {

                    continue;
                }
                var idContexto = hecho.IdContexto;
                var idConcepto = hecho.IdConcepto;
                var contexto = $self.documentoInstancia.ContextosPorId[idContexto];
                if (contexto && contexto.ContieneInformacionDimensional) {

                    for (var indexMiembro = 0; indexMiembro < contexto.ValoresDimension.length; indexMiembro++) {

                        var dimension = contexto.ValoresDimension[indexMiembro];
                        if (dimension.IdDimension == 'annext_SerieTypedAxis') {

                            var elementoMiembroTipificado = dimension.ElementoMiembroTipificado;
                            var serie = elementoMiembroTipificado.replace(regExpresionPrefijo, "").replace(regExpresionSubFijo, "");
                            if (!diccionarioSeries[serie]) {

                                diccionarioSeries[serie] = serie;
                                $scope.valoresDimensionSerie.push(serie);
                                for (var conceptoGeneral in conceptosGenerales) {
                                    if (!$scope.valoresHechoPorIdConcepto[conceptoGeneral]) {

                                        $scope.valoresHechoPorIdConcepto[conceptoGeneral] = new Array<Object>();
                                    }
                                    var prefijoSerie = serie.replace(/\s/g, "_");
                                    prefijoSerie = (prefijoSerie == "NUEVA_SERIE" ? prefijoSerie.concat("_0") : prefijoSerie);
                                    $scope.valoresHechoPorIdConcepto[conceptoGeneral].push({
                                        idValorSerieRenglon: (prefijoSerie + "_" + conceptosGenerales[conceptoGeneral]),
                                        contextoSerie: idContexto,
                                        conceptoSerie: conceptoGeneral,
                                        idUnidadMoneda: hecho.IdUnidad
                                    });
                                }
                                if (!$scope.contextosPorValorDimensionSerie[serie]) {
                                    $scope.contextosPorValorDimensionSerie[serie] = new Array<string>();
                                }
                                $scope.contextosPorValorDimensionSerie[serie].push(idContexto);
                                $scope.contextosPorLlaveDimension[serie] = idContexto;
                            }
                            
                        }
                    }
                }
            }
        }


        /**
        * Inicializa los elementos de controller.
        **/
        private init(): void {
            //Proxy para acceder a la instancia del controler.
            var self: XbrlSeriesController = this;
            var scope: IXbrlSeriesScope = self.$scope;
            //Variables locales para la inicialización de los elementos del scope.
            var documentoInstancia: model.DocumentoInstanciaXbrl = self.abaxService.getDocumentoInstancia();
            var definicionPlantilla: model.DefinicionDePlantillaXbrl = self.abaxService.getDefinicionPlantilla();
            var fechaInicioPeriodo: string = definicionPlantilla.obtenerVariablePorId('fecha_2016_09_30');
            var fechaFinTrimestre: string = definicionPlantilla.obtenerVariablePorId('fecha_2016_09_30');
            var emisora: string = definicionPlantilla.obtenerVariablePorId('nombreEntidad');
            var esquemaEmisora: string = definicionPlantilla.obtenerVariablePorId('esquemaEntidad');

            //Inicializamos las unidades.
            scope.obtenerIdUnidadMoneda = function (): string {

                var hechoTasaInteresOSobretasa = new abaxXBRL.model.Hecho();
                var espacionNombresUnidades = definicionPlantilla.obtenerVariablePorId('medida_http___www_xbrl_org_2003_iso4217');
                var nombreUnidadMoneda = definicionPlantilla.obtenerVariablePorId('medida_MXN');
                var unidadMoneda = self.abaxService.ObtenerUnidadPorelementos(model.Unidad.MEDIDA, espacionNombresUnidades, nombreUnidadMoneda);
                return unidadMoneda.Id;
            }
            scope.idUnidadMoneda = scope.obtenerIdUnidadMoneda();

            /** Agrupa los diferentes valores de la dimensión tipificada serie */
            scope.valoresDimensionSerie = new Array<string>();

            scope.valoresHechoPorIdConcepto = {};

            /** Agrupa los contextos por el valor de la dimensión tipificada marcas principales para una acceso más rápido */
            scope.contextosPorValorDimensionSerie = {};

            /** Agrupa los contextos por la combinación de sus valores dimensionales para una acceso más rápido */
            scope.contextosPorLlaveDimension = {};

            

            /**Inicializa los indices para el manejo de una nueva dimensión serie **/
            scope.agregarValorDimensionSerie = function (): void {

                var intentos: number = 1;
                var $util = shared.service.AbaxXBRLUtilsService;
                var nombreNuevoElemento: string = XbrlSeriesController.PREFIJO_NOMBRE_SERIE_DEFECTO;
                var valoresDimensionSerie = scope.valoresDimensionSerie;
                var valoresHechoPorIdConcepto = scope.valoresHechoPorIdConcepto;
                if (valoresDimensionSerie) {
                    while ($.inArray(nombreNuevoElemento, valoresDimensionSerie) != -1) {
                        nombreNuevoElemento = XbrlSeriesController.PREFIJO_NOMBRE_SERIE_DEFECTO + ' ' + intentos++;
                    }
                }

                if ($.inArray(nombreNuevoElemento, valoresDimensionSerie) == -1) {
                    valoresDimensionSerie.push(nombreNuevoElemento);

                    var prefixId = nombreNuevoElemento.replace(/\s/g, "_");
                    prefixId = (prefixId == "NUEVA_SERIE" ? prefixId.concat("_0") : prefixId);

                    var promiseoOutstandingBalance = $util.setTimeout(function () {
                        var contextoSerie = scope.obtenerIdContexto(nombreNuevoElemento);
                        var idValorOutstandingBalance = prefixId.concat("_", XbrlSeriesController.ID_RENGLON_OUTSTANDING_BALANCE);

                        valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_OUTSTANDING_BALANCE].push(
                            {
                                idValorSerieRenglon: idValorOutstandingBalance,
                                contextoSerie: contextoSerie,
                                conceptoSerie: XbrlSeriesController.ID_CONCEPTO_OUTSTANDING_BALANCE,
                                idUnidadMoneda: scope.idUnidadMoneda
                            }
                        );
                    });

                    var promiseInterestPaid = $util.setTimeout(function () {
                        var contextoSerie = scope.obtenerIdContexto(nombreNuevoElemento);
                        var idValorInterestPaid = prefixId.concat("_", XbrlSeriesController.ID_RENGLON_INTEREST_PAID);

                        valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_INTEREST_PAID].push(
                            {
                                idValorSerieRenglon: idValorInterestPaid,
                                contextoSerie: contextoSerie,
                                conceptoSerie: XbrlSeriesController.ID_CONCEPTO_INTEREST_PAID,
                                idUnidadMoneda: scope.idUnidadMoneda
                            }
                        );
                    });

                    var promisePaidForAmortization = $util.setTimeout(function () {
                        var contextoSerie = scope.obtenerIdContexto(nombreNuevoElemento);
                        var idValorPaidForAmortization = prefixId.concat("_", XbrlSeriesController.ID_RENGLON_PAID_FOR_AMORTIZATION);

                        valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_PAID_FOR_AMORTIZATION].push(
                            {
                                idValorSerieRenglon: idValorPaidForAmortization,
                                contextoSerie: contextoSerie,
                                conceptoSerie: XbrlSeriesController.ID_CONCEPTO_PAID_FOR_AMORTIZATION,
                                idUnidadMoneda: scope.idUnidadMoneda
                            }
                        );
                    });

                    promiseoOutstandingBalance.then(function () {
                        promiseInterestPaid.then(function () {
                            promisePaidForAmortization.then(function () {
                                self.reEvaluaElementosPlantilla();
                            });
                        });
                    });
                }

                if (!scope.contextosPorValorDimensionSerie[nombreNuevoElemento]) {
                    scope.contextosPorValorDimensionSerie[nombreNuevoElemento] = new Array<string>();
                }

                if (!scope.contextosPorLlaveDimension[nombreNuevoElemento]) {
                    scope.contextosPorLlaveDimension[nombreNuevoElemento] = "";
                }
            }

            scope.actualizarValorDimensionSerie = function (valorDimensionAnterior: string, valorDimensionNuevo: string): boolean {
                valorDimensionAnterior = valorDimensionAnterior.toUpperCase();
                valorDimensionNuevo = valorDimensionNuevo.toUpperCase();

                //Si es el mismo valor
                if (valorDimensionAnterior == valorDimensionNuevo) {
                    return false;
                }

                var prefixIdAnterior = valorDimensionAnterior.replace(/\s/g, "_");
                var prefixIdNuevo = valorDimensionNuevo.replace(/\s/g, "_");
                prefixIdAnterior = (prefixIdAnterior == "NUEVA_SERIE" ? prefixIdAnterior.concat("_0") : prefixIdAnterior);
                prefixIdNuevo = (prefixIdNuevo == "NUEVA_SERIE" ? prefixIdNuevo.concat("_0") : prefixIdNuevo);

                var idValorOutstandingBalanceAnterior = prefixIdAnterior.concat("_", XbrlSeriesController.ID_RENGLON_OUTSTANDING_BALANCE);
                var idValorOutstandingBalanceNuevo = prefixIdNuevo.concat("_", XbrlSeriesController.ID_RENGLON_OUTSTANDING_BALANCE);

                var idValorInterestPaidAnterior = prefixIdAnterior.concat("_", XbrlSeriesController.ID_RENGLON_INTEREST_PAID);
                var idValorInterestPaidNuevo = prefixIdNuevo.concat("_", XbrlSeriesController.ID_RENGLON_INTEREST_PAID);

                var idValorPaidForAmortizationAnterior = prefixIdAnterior.concat("_", XbrlSeriesController.ID_RENGLON_PAID_FOR_AMORTIZATION);
                var idValorPaidForAmortizationNuevo = prefixIdNuevo.concat("_", XbrlSeriesController.ID_RENGLON_PAID_FOR_AMORTIZATION);

                var arrayIndexOutstandingBalance = $.map(scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_OUTSTANDING_BALANCE], function (e, index) { if (e["idValorSerieRenglon"] == idValorOutstandingBalanceAnterior) return index; });
                var arrayIndexInterestPaid = $.map(scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_INTEREST_PAID], function (e, index) { if (e["idValorSerieRenglon"] == idValorInterestPaidAnterior) return index; });
                var arrayIndexPaidForAmortization = $.map(scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_PAID_FOR_AMORTIZATION], function (e, index) { if (e["idValorSerieRenglon"] == idValorPaidForAmortizationAnterior) return index; });

                var indexOutstandingBalance: number;
                var indexInterestPaid: number;
                var indexPaidForAmortization: number;

                var indexDimensionAnterior: number;
                //Si no se ha registrado  la institusion terminamos
                indexDimensionAnterior = $.inArray(valorDimensionAnterior, scope.valoresDimensionSerie);
                if (indexDimensionAnterior == -1 && arrayIndexOutstandingBalance.length < 1 && arrayIndexInterestPaid.length < 1 && arrayIndexPaidForAmortization.length < 1) {
                    return false;
                }

                var arregloDimensiones = scope.valoresDimensionSerie;
                var indexDimensionAnterior: number = $.inArray(valorDimensionAnterior, arregloDimensiones);
                if (indexDimensionAnterior != -1 && arrayIndexOutstandingBalance.length == 1 && arrayIndexInterestPaid.length == 1 && arrayIndexPaidForAmortization.length == 1) {
                    arregloDimensiones.splice(indexDimensionAnterior, 1);
                    arregloDimensiones.push(valorDimensionNuevo);

                    indexOutstandingBalance = arrayIndexOutstandingBalance[0];
                    indexInterestPaid = arrayIndexInterestPaid[0];
                    indexPaidForAmortization = arrayIndexPaidForAmortization[0];

                    scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_OUTSTANDING_BALANCE][indexOutstandingBalance]["idValorSerieRenglon"] = idValorOutstandingBalanceNuevo;
                    scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_INTEREST_PAID][indexInterestPaid]["idValorSerieRenglon"] = idValorInterestPaidNuevo;
                    scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_PAID_FOR_AMORTIZATION][indexPaidForAmortization]["idValorSerieRenglon"] = idValorPaidForAmortizationNuevo;
                }

                //Actualizamos los nombres tipificados que los contextos.
                self.actualizaElementoMiembroTipificado(scope.contextosPorValorDimensionSerie[valorDimensionAnterior], valorDimensionAnterior, valorDimensionNuevo);

                var contenidoAnterior = scope.contextosPorValorDimensionSerie[valorDimensionAnterior];
                if (contenidoAnterior) {
                    scope.contextosPorValorDimensionSerie[valorDimensionNuevo] = contenidoAnterior;
                    scope.contextosPorValorDimensionSerie[valorDimensionAnterior] = undefined;
                    delete scope.contextosPorValorDimensionSerie[valorDimensionAnterior];
                }

                var contenidoContextoAnterior = scope.contextosPorLlaveDimension[valorDimensionAnterior];
                if (contenidoContextoAnterior) {
                    scope.contextosPorLlaveDimension[valorDimensionNuevo] = contenidoContextoAnterior;
                    scope.contextosPorLlaveDimension[valorDimensionAnterior] = undefined;
                    delete scope.contextosPorLlaveDimension[valorDimensionAnterior];
                }

                return true;
            }

            scope.obtenerIdContexto = function (valorDimensionSerie: string): string {

                //var qNameMiembroTipoIngreso = XbrlSeriesController.ESPACIO_NOMRES_DIMENSION_SERIES + ':' + tipoIngreso;
                if (scope.contextosPorLlaveDimension[valorDimensionSerie]) {
                    var resultado = scope.contextosPorLlaveDimension[valorDimensionSerie];
                    //console.log("obteniendo\n[" + valorDimensionSerie + "]\n[" + valorDimensionProducto + "]\n[" + qNameMiembroTipoIngreso + "]\n" + resultado);
                    self.reEvaluaElementosPlantilla();
                    return resultado;
                }

                var idContexto = self.buscaIdContextoPorQNameItemMiembro(scope.contextosPorValorDimensionSerie[valorDimensionSerie]);

                if (idContexto && idContexto != null) {
                    self.reEvaluaElementosPlantilla();
                    return idContexto;
                }

                var contextoDenominacionIntervalo = self.crearContextoDeSerie(valorDimensionSerie, emisora, esquemaEmisora, abaxXBRL.model.Periodo.INSTANTE, fechaInicioPeriodo, fechaFinTrimestre);
                idContexto = contextoDenominacionIntervalo.Id;
                scope.contextosPorValorDimensionSerie[valorDimensionSerie].push(idContexto);
                scope.contextosPorLlaveDimension[valorDimensionSerie] = idContexto;
                self.reEvaluaElementosPlantilla();
                return idContexto;
            }

            scope.eliminarElementosDimensionSerie = function (valorDimensionSerie: string): void {

                $.prompt("¿Esta seguro de que quiere eliminar la Serie <b>\"" + valorDimensionSerie + "\"</b> de todas las tablas que lo contienen?", {
                    title: "Eliminar Serie",
                    buttons: { "Si": true, "No": false },
                    submit: function (e, v, m, f) {
                        if (v) {
                            abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                            scope.$apply(function () {
                                var prefixId = valorDimensionSerie.replace(/\s/g, "_");
                                prefixId = (prefixId == "NUEVA_SERIE" ? prefixId.concat("_0") : prefixId);

                                var idValorOutstandingBalance = prefixId.concat("_", XbrlSeriesController.ID_RENGLON_OUTSTANDING_BALANCE);
                                var idValorInterestPaid = prefixId.concat("_", XbrlSeriesController.ID_RENGLON_INTEREST_PAID);
                                var idValorPaidForAmortization = prefixId.concat("_", XbrlSeriesController.ID_RENGLON_PAID_FOR_AMORTIZATION);

                                self.eliminarSerieDefinitivamente(valorDimensionSerie, fechaInicioPeriodo, fechaFinTrimestre);

                                scope.contextosPorLlaveDimension[valorDimensionSerie] = undefined;
                                delete scope.contextosPorLlaveDimension[valorDimensionSerie];

                                scope.contextosPorValorDimensionSerie[valorDimensionSerie] = undefined;
                                delete scope.contextosPorValorDimensionSerie[valorDimensionSerie];

                                var indiceSerie = $.inArray(valorDimensionSerie, scope.valoresDimensionSerie);
                                if (indiceSerie != -1) {
                                    scope.valoresDimensionSerie.splice(indiceSerie, 1);
                                }

                                var arrayIndexOutstandingBalance = $.map(scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_OUTSTANDING_BALANCE], function (e, index) { if (e["idValorSerieRenglon"] == idValorOutstandingBalance) return index; });
                                if (arrayIndexOutstandingBalance.length == 1) {
                                    scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_OUTSTANDING_BALANCE].splice(arrayIndexOutstandingBalance[0], 1);
                                }

                                var arrayIndexInterestPaid = $.map(scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_INTEREST_PAID], function (e, index) { if (e["idValorSerieRenglon"] == idValorInterestPaid) return index; });
                                if (arrayIndexInterestPaid.length == 1) {
                                    scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_INTEREST_PAID].splice(arrayIndexInterestPaid[0], 1);
                                }

                                var arrayIndexPaidForAmortization = $.map(scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_PAID_FOR_AMORTIZATION], function (e, index) { if (e["idValorSerieRenglon"] == idValorPaidForAmortization) return index; });
                                if (arrayIndexPaidForAmortization.length == 1) {
                                    scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_PAID_FOR_AMORTIZATION].splice(arrayIndexPaidForAmortization[0], 1);
                                }
                            });
                        }

                    }
                });

            }

            scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_OUTSTANDING_BALANCE] = new Array<Object>();
            scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_INTEREST_PAID] = new Array<Object>();
            scope.valoresHechoPorIdConcepto[XbrlSeriesController.ID_CONCEPTO_PAID_FOR_AMORTIZATION] = new Array<Object>();

            self.incializaSeriesDocumentoIsntancia(); 

            //Tratamos de cargar información del documento instancia para llenar el formato actual.
            self.inicializaIndices(fechaInicioPeriodo, fechaFinTrimestre, emisora, esquemaEmisora);
            var documentoInstnacia = this.abaxService.getDocumentoInstancia();
            this.tableSettings = new plugins.XbrlTablaExcelSettings();
            this.tableSettings.estilos = plugins.XbrlTablaExcel.ESTILOS_POR_DEFECTO;
            this.tableSettings.soloLectura = documentoInstnacia.BloquearCamposCaptura;
            this.tableSettings.tabIndex = 1;
            this.tableSettings.contenedorTextArea = $(plugins.XbrlTablaExcel.CONTENEDOR_CLIPBOARD_POR_DEFECTO);
            this.tableSettings.onAfterPaste = plugins.XbrlPluginUtils.onAfterPaste;
            this.tableSettings.onAfterRangePaste = plugins.XbrlPluginUtils.onAfterRangePaste;
            this.tableSettings.onBeforeCopy = plugins.XbrlPluginUtils.onBeforeCopy;
            this.tableSettings.onSpaceOrEnterKey = plugins.XbrlPluginUtils.onSpaceOrEnterKey;
            $(window).resize(function () {
                shared.service.AbaxXBRLUtilsService.reAjustaCeldasTabla(null);
            });

            var mainDT = $('div.mainDT');
            scope.$watch(
                function () {
                    return mainDT.outerWidth();
                },
                function (newValue, oldValue) {
                    if (newValue != oldValue) {
                        shared.service.AbaxXBRLUtilsService.reAjustaCeldasTabla(null);
                    }
                }
            );

        } // Fin de l init

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IXbrlSeriesScope, abaxXBRLServices: services.AbaxXBRLServices, $timeout: ng.ITimeoutService) {
            var self = this;

            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$timeout = $timeout;
            this.documentoInstancia = abaxXBRLServices.getDocumentoInstancia();
            this.init();
            self.reEvaluaElementosPlantilla();
        }

    }

    XbrlSeriesController.$inject = ['$scope', 'abaxXBRLServices', '$timeout'];

    /**
     * Define la estructura del Scope de la Directiva para la edición / visualización del formato distribución de ingresos por producto
     *
     * @author Carlos Alejandro Rosas Montano
     * @version 1.0
     */
    export interface IXbrlSeriesScope extends ng.IScope {

        /** Agrupa los diferentes valores de la dimensión tipificada serie */
        valoresDimensionSerie: Array<string>;

        valoresHechoPorIdConcepto: { [idConcepto: string]: Array<Object> };

        /** Agrupa los contextos por el valor de la dimensión tipificada marcas principales para una acceso más rápido */
        contextosPorValorDimensionSerie: { [valorDimensionSerie: string]: Array<string> };

        /** Agrupa los contextos por la combinación de sus valores dimensionales para una acceso más rápido */
        contextosPorLlaveDimension: { [valorDimensionSerie: string]: string };

        /**
         * Agrega un valor a la dimensión serie verificando que no se encuentre duplicado.
         */
        agregarValorDimensionSerie(): void;

        /**
         * Actualiza los contextos asociados a las diferentes combinaciones de dimensiones explícitas del desglose de créditos con el valor de la dimensión tipificada anterior con el nuevo valor.
         *
         * @param valorDimensionAnterior el valor anterior de la dimension tipificada marcas principales.
         * @param valorDimensionActual el valor a actualizar de la dimensión tipificada marcas principales.
         * @return Si fue posible actualizar el valor de la institución.
         */
        actualizarValorDimensionSerie(valorDimensionActual: string, valorDimensionAnterior: string): boolean;

        /**
         * Obtiene el identificador del contexto que contiene los valores dimensionales proporcionados como parámetros. Si no existe, lo crea.
         *
         * @param valorDimensionSerie el valor como cadena que deberá contener la dimensión implícita marcas principales.
         * @param valorDimensionProducto el identificador del miembro de la dimensión implícita línea de productos
         * @param idMiembroTipoIngreso el identificador del miembro de la dimensión explíctica tipo de ingresos
         * @param idItemMiembro Identificador del concepto del item miembro de la dimensión explícita de tipo de ingresos
         */
        obtenerIdContexto(valorDimensionSerie: string): string;

        /**
         * Obtiene el identificador de la unidad de acuerdo a lo definido por la plantilla.
         *
         * @return el identificador de la unidad de tipo moneda de la plantilla actual.
         */
        obtenerIdUnidadMoneda(): string;

        /** 
         * Elimina los contextos y hechos relacionados a un valor de la dimensión marcas principales. 
         *
         * @param valorDimensionSerie el valor de la dimensión marcas principales que se pretende eliminar.
         */
        eliminarElementosDimensionSerie(valorDimensionSerie: string): void;

        /** Identificador de la unidad moenda que será utilizada para los hechos de moneda. **/
        idUnidadMoneda: string;

        /**
        * Plantilla para mostrar y editar el valor de una dimensión institución.
        **/
        plantillaCampoValorSerie: JQuery;
    }

    /** 
    * Directiva utilizada únicamente para asignar el controller a una sección determinada.
    **/
    export class XbrlSeries {

        public static XbrlSeriesDirective(): ng.IDirective {

            return {
                restrict: 'A',
                controller: XbrlSeriesController
            };
        }
    }


    /**Dto del campo de texto para poder hacer uso de la propiedad model. **/
    export interface IXbrlCampoTextoSeriesDto {
        /**Valor de campo de texto. **/
        valor: string;
    }

    /**Campo de captura de texto generico. **/
    export interface IXbrlCampoTextoGenericoSeriesDirectiveScope extends ng.IScope {

        /** Valor con el que se inicializa el campo de captura.**/
        xbrlValor: string;

        /** El valor temporal que almacena los posibles cambios al modelo */
        valorTemporal: IXbrlCampoTextoSeriesDto;

        /** La lista de valores contra la cual se compara el modelo */
        xbrlListaValores: Array<string>;

        /** 
        * Listener que será invocado cada vez que cambie el valor  del campo.
        * @param newValue Valor actual del campo de texto.
        * @param oldValue Valor anterior del campo de texto.
        **/
        xbrlChangeValueListener(any): void;

        /**
        * Clave del mensaje a mostrarn cuando se intenta agregar un valor repetido en la lista.
        **/
        xbrlMensajeAlertaRepetido: string;

        /**
        * Mensaje a mostrar cuando se intenta dejar el valor del campo vacio.
        **/
        xbrlMensajeAlertaVacio: string;

        /** Si ses esta mostrando el input para modificación del valor del campo. **/
        editando: boolean;

        /** Se encarga de procesar el evento blur del editor */
        manejarBlur(): void;

        /**Etiqueta que contiene el elemento "xbrl:campo-texto-generico" **/
        padre: JQuery;

        /**Bandera que indica que el componente esta contenido dentro de una directiva de tabla de excel. **/
        contenidoEnTablaExcel: boolean;

    }

    /**Clase que implementa la fabrica de la directiva de campo de texto generico. **/
    export class XbrlCampoTextoGenericoSeries {

        /** 
        * Método utilizado por angular para la generación de la directiva.
        *
        * @return Objeto con datos de configuración para la generación de la nueva directiva.
        **/
        public static XbrlCampoTextoGenericoSeriesDirective(): ng.IDirective {
            return {
                restrict: 'E',
                scope: {
                    xbrlValor: '@',
                    xbrlChangeValueListener: '&',
                    xbrlListaValores: '=',
                    xbrlMensajeAlertaRepetido: '@',
                    xbrlMensajeAlertaVacio: '@',
                },
                require: ['?^xbrlTablaExcel'],
                controller: XbrlCampoTextoGenericoSeriesController,
                templateUrl: "ts/templates/taxonomias/annext/extensions/template-xbrl-texto-generico.html?version=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                link: function ($scope: IXbrlCampoTextoGenericoSeriesDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controllers: any) {

                    $scope.contenidoEnTablaExcel = false;
                }
            };
        }
    }

    /**Clase que define el controlador para la dierctiva de campo generico. **/
    export class XbrlCampoTextoGenericoSeriesController {
        /**Scope de la directiva de campo de texto generico. **/
        private $scope: IXbrlCampoTextoGenericoSeriesDirectiveScope;
        /**Elemento JQuery de dom del campo de texto generico. **/
        private $element: ng.IAugmentedJQuery;

        private ctrlSelf = this;

        private mostrarEditor() {
            var self = this;
            self.$scope.$apply(function () {
                self.$scope.editando = true;
            });
            $('table[xbrl\\:tabla-excel]').xbrlTablaExcel('pausar');
            self.$scope.padre.off('dblclick');
            self.$element.find('input').focus();

        }

        private mostrarVisor(): void {
            var self = this;
            self.$scope.padre.on('dblclick', function () { self.mostrarEditor(); });
            setTimeout(function () {
                self.$element.find('span.xbrl-visor').text(self.$scope.valorTemporal.valor);
            }, 500);
        }

        /**Método donde se inicializan los componentes del scope y el controlador. **/
        private init(): void {
            var self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            self.$scope.editando = false;

            self.$scope.valorTemporal = { valor: self.$scope.xbrlValor };
            this.$scope.padre = self.$element.parent();

            self.$scope.manejarBlur = function () {

                if (self.$scope.xbrlValor !== self.$scope.valorTemporal.valor) {
                    if (!self.$scope.valorTemporal.valor || self.$scope.valorTemporal.valor.trim().length == 0) {
                        self.$scope.valorTemporal.valor = self.$scope.xbrlValor;
                        var mensaje = $util.getValorEtiqueta(self.$scope.xbrlMensajeAlertaVacio);
                        $util.advertencia({ texto: mensaje });
                    } else {
                        if (self.$scope.xbrlListaValores && $.inArray(self.$scope.valorTemporal.valor, self.$scope.xbrlListaValores) == -1) {
                            if (self.$scope.xbrlChangeValueListener) {
                                self.$scope.xbrlChangeValueListener({ newValue: self.$scope.xbrlValor, oldValue: self.$scope.valorTemporal.valor });
                            }
                            self.$scope.xbrlValor = self.$scope.valorTemporal.valor;
                        } else {
                            self.$scope.valorTemporal.valor = self.$scope.xbrlValor;
                            var mensaje = $util.getValorEtiqueta(self.$scope.xbrlMensajeAlertaRepetido);
                            $util.advertencia({ texto: mensaje });
                        }
                    }
                }
                self.$scope.editando = false;
                self.mostrarVisor();
                $('table[xbrl\\:tabla-excel]').xbrlTablaExcel('reanudar');
            }

            self.mostrarVisor();
        }
        /**
        * Constructor del controlador.
        * @param $scope Scope de la directiva de campo de texto generico.
         **/
        constructor($scope: IXbrlCampoTextoGenericoSeriesDirectiveScope, $element: ng.IAugmentedJQuery) {
            this.$scope = $scope;
            this.$element = $element;
            this.init();
        }
    }
    /**Inicializamos los atricutos que deberán inyectarse al controller una vez generado. **/
    XbrlCampoTextoGenericoSeriesController.$inject = ['$scope', '$element'];



    var seriesModule: ng.IModule = angular.module('abaxXBRLSeriesModule', ['abaxXBRLViewer']);
    seriesModule.directive('xbrlSeries', abaxXBRL.templates.extensions.series.XbrlSeries.XbrlSeriesDirective);
    seriesModule.controller('XbrlSeriesController', abaxXBRL.templates.extensions.series.XbrlSeriesController);

    seriesModule.directive('xbrlCampoTextoGenericoSeries', abaxXBRL.templates.extensions.series.XbrlCampoTextoGenericoSeries.XbrlCampoTextoGenericoSeriesDirective);
    seriesModule.controller('XbrlCampoTextoGenericoSeriesController', abaxXBRL.templates.extensions.series.XbrlCampoTextoGenericoSeriesController);

    /**
     * Controlador para los hipercubos de anexo T.
     */
    export class ControladorHipercubosAnexoT extends abaxXBRL.directives.XbrTablaHipercuboDirectiveController {

        
        /**
         * Función que se manda a ejecutar cuando se realiza una afectación a los miembros del hipercubo.
         * Es un manejador general que concentra la lógica para invocar los manejadores publicos de la directiva.
         * @param evento Evento que se esta lanzando.
         * @param parametros Parametros adicionales que serán enviados como parate del evento.
         * @return Promesa que se resuelve cuando finaliza el método.
         */
        public sincronizaEventos(evento: abaxXBRL.directives.XbrlEventoHipercubo, parametros?: { [nombreParametro: string]: any }): void {

            console.log("Accedio a sincroniza Eventos.");
            var $self = this;
            $('xbrl\\:tabla-hipercubo:not([xbrl\\:id-tabla-hipercubo="' + $self.$scope.xbrlIdTablaHipercubo + '"])').each(function (index: number, elemento: Element) {

                var $elemento = $(elemento);
                var controlador: abaxXBRL.directives.XbrTablaHipercuboDirectiveController = $elemento.data("xbrlControladorHipercubo");
                if (controlador) {

                    var dimension: model.DimensionInfo = parametros["dimension"];
                    var idMiembro = dimension.Explicita ? dimension.IdItemMiembro : dimension.ElementoMiembroTipificado;
                    var aliasDimension = controlador.obtenAliasDimension(dimension.QNameDimension);
                    var aliasMiembro = controlador.obtenAliasMiembro(dimension.QNameDimension, idMiembro);

                    switch (evento) {

                        case abaxXBRL.directives.XbrlEventoHipercubo.CREAR_MIEMBRO:

                            if (!aliasMiembro) {

                                var agruparPor: { [aliasDimension: string]: string } = parametros["agruparPor"];
                                controlador.agregarMiembroDimensionDirectiva(aliasDimension, agruparPor);
                            }
                            break;
                        case abaxXBRL.directives.XbrlEventoHipercubo.ELIMINAR_MIEMBRO:
                            
                            if (aliasMiembro) {

                                controlador.eliminaMiembroDimensionDirectiva(aliasDimension, aliasMiembro);
                            }
                            
                            break;
                        case abaxXBRL.directives.XbrlEventoHipercubo.MODIFICAR_IDENTIFICADOR_MIEMBRO:

                            if (aliasMiembro) {

                                var nuevoValor = parametros["nuevoValor"];
                                controlador.actualizaNombreMiembroDirectiva(aliasDimension, aliasMiembro, nuevoValor);
                            }
                            
                            break;
                    }
                }
            });
            
        }

        /**
        * Constructor por defecto de la clase.
        * @param $scope Scope para interactuar con la vista.
        * @param $config Configuración de inicialización de los componentes.
        * @param $abaxXBRLService Servicio para la interacción con los componetes XBRL.
        **/
        constructor($scope: abaxXBRL.directives.IXbrTablaHipercuboDirectiveScope, $xbrlConfiguracion: model.XbrlConfiguracionTablaHipercuboDirective, $abaxXBRLService: abaxXBRL.services.AbaxXBRLServices, $xbrlHipercubo: ng.IAugmentedJQuery) {

            super($scope, $xbrlConfiguracion, $abaxXBRLService, $xbrlHipercubo);
        }
    }

    ControladorHipercubosAnexoT.$inject = ['$scope', '$xbrlConfiguracion', 'abaxXBRLServices', '$xbrlHipercubo'];

} 