///<reference path="../../../../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../../../../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../../../../../scripts/typings/impromptu/jquery-impromptu.d.ts" />
///<reference path="../../../../visorXbrl.ts" /> 
///<reference path="../../../../directivasAbax.ts" /> 
///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../../scripts/typings/moment/moment.d.ts" />

module abaxXBRL.templates.extensions {

    /**
       * Implementación del controlador encargado de crear el comportamiento necesario para presentar el desglose de créditos en pantalla.
       *
       * @author José Antonio Huizar Moreno
       * @version 1.0
       */
    export class XbrlDesgloseCreditosCNBV2019Controller {

        /** El scope del controlador */
        private $scope: IXbrlDesgloseCreditosCNBV2019Scope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** El servicio para ejecutar tareas asíncronas de angular */
        private $timeout: ng.ITimeoutService;

        /** Secuencia renglongenerado */
        private secuenciaRenglon: number = 0;


        /** El nombre de la dimensión tipificada institución */
        public static get NOMBRE_DIMENSION_INSTITUCION(): string { return 'InstitucionDomain'; }

        /** El espacio de nombres de la dimensión tipificada institución */
        public static get ESPACIO_NOMRES_DIMENSION_INSTITUCION(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05'; }

        /** Contiene la plantilla que deberá usarse para definir un nuevo valor de la dimensión tipificada institución */
        public static get TEMPLATE_VALOR_DIMENSION_INSTITUCION(): string { return '<ifrs_mx-cor_20141205:InstitucionDomain xmlns:ifrs_mx-cor_20141205="http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05">#valorDimensionInstitucion</ifrs_mx-cor_20141205:InstitucionDomain>'; }

        /** Contiene el nombre del placeholder para reemplazar en la plantilla de definición un nuevo valor de la dimensión tipificada institución */
        public static get PLACEHOLDER_VALOR_DIMENSION_INSTITUCION(): string { return '#valorDimensionInstitucion'; }

        /** Contiene el nombre completamente calificado de la dimensión explicita dimensión */
        public static get QNAME_DIMENSION_DENOMINACION(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DenominacionEje'; }

        /** Identificador de la dimensión de Denominación**/
        public static get ID_DIMENSION_DENOMINACION(): string { return 'ifrs_mx-cor_20141205_DenominacionEje'; }

        /** Contiene el nombre completamente calificado de la dimensión explicita intervalo de tiempo */
        public static get QNAME_DIMENSION_INTERVALO_TIEMPO(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IntervaloDeTiempoEje'; }

        /** Identificador de la dimensión explicita intervalo de tiempo */
        public static get ID_DIMENSION_INTERVALO_TIEMPO(): string { return 'ifrs_mx-cor_20141205_IntervaloDeTiempoEje'; }

        /** Contiene el nombre completamente calificado de la dimensión implícita institución */
        public static get QNAME_DIMENSION_INSTITUCION(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje'; }

        /** Identificador de la dimensión implícita institución */
        public static get ID_DIMENSION_INSTITUCION(): string { return 'ifrs_mx-cor_20141205_InstitucionEje'; }

        /** El nombre del elemento que contiene el prefijo de acuerdo a la librería X2JS */
        public static get X2JS_ELEMENTO_PREFIX(): string { return '__prefix'; }

        /** El prefijo del nombre del elemento que contiene el xmlns de acuerdo a la librería X2JS */
        public static get X2JS_PREFIJO_ELEMENTO_XMLNS(): string { return '_xmlns:'; }

        /** El nombre del elemento que contiene el texto contenido en un nodo xml de acuerdo a la librería X2JS */
        public static get X2JS_ELEMENTO_TEXT(): string { return '__text'; }

        /** El prefijo del nombre de la institución que se asignará a todos los nuevos elementos de la dimensión explícita creados por el editor */
        public static get PREFIJO_NOMBRE_INSTITUCION_DEFECTO(): string { return 'NUEVA INSTITUCIÓN'; }

        /** El espacio de nombres de la dimension tipificada de intervalos de tiempo. **/
        public static get ESPACIO_NOMBRES_DIMENSION_INTERVALO_DE_TIEMPO(): string { return "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05"; }

        /** El espacio de nombres de la dimension tipificada de intervalos de tiempo. **/
        public static get ESPACIO_NOMBRES_DIMENSION_DENOMINACION(): string { return "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05"; }

        /** Arreglo con los nombres de todos los elementos de la dimesión de intervalos de tiempo. **/
        public static get NOMBRE_ELEMENTOS_DIMENSION_INTERVALO_DE_TIEMPO(): Array<string> { return ["AnoActualMiembro", "Hasta1AnoMiembro", "Hasta2AnosMiembro", "Hasta3AnosMiembro", "Hasta4AnosMiembro", "Hasta5AnosOMasMiembro", "TotalIntervalosMiembro"]; }

        /** Arreglo con los nombres de todos los elementos de la dimesión denominación. **/
        public static get NOMBRE_ELEMENTOS_DIMENSION_DENOMINACION(): Array<string> { return ["MonedaNacionalMiembro", "MonedaExtranjeraMiembro", "TotalMonedasMiembro"]; }

        /** Nombre del elemento totales de la dimensión de intervalos de tiempo. **/
        public static get NOMBRE_ELEMENTO_TOTAL_DIMENSION_INTERVALO_DE_TIEMPO(): string { return "TotalIntervalosMiembro"; }

        /** Nombre del elemento totales de la dimensión de denominación. **/
        public static get NOMBRE_ELEMENTO_TOTAL_DIMENSION_DENOMINACION(): string { return "TotalMonedasMiembro"; }

        /**Identificador del item miembro **/
        private ID_ITEM_MIEMBRO_POR_QNAME: { [id: string]: string };

        /**Id del timeout para reevalura la plantilla **/
        private idTimeOutReEvaluaPlantilla: number;

        /** Settings de la tabla de excel. **/
        private tableSettings: plugins.XbrlTablaExcelSettings;
        /**
        * Conceptos a desplegear.
        **/
        private CONCEPTOS_DIMENSIONES_INSTITUCIONES = [
            "ifrs_mx-cor_20141205_ComercioExteriorBancarios",
            "ifrs_mx-cor_20141205_ConGarantiaBancarios",
            "ifrs_mx-cor_20141205_BancaComercial",
            "ifrs_mx-cor_20141205_OtrosBancarios",
            "ifrs_mx-cor_20141205_BursatilesListadasEnBolsaQuirografarios",
            "ifrs_mx-cor_20141205_BursatilesListadasEnBolsaConGarantia",
            "ifrs_mx-cor_20141205_ColocacionesPrivadasQuirografarios",
            "ifrs_mx-cor_20141205_ColocacionesPrivadasConGarantia",
            "ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesConCosto",
            "ifrs_mx-cor_20141205_Proveedores",
            "ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesSinCosto"
        ];

        /**
        * Crea el campo de texto correspondiente.
        **/
        private creaCampoEdicionDimensionInstitucion(concepto: string, valorDimensionInstitucion: string): void {
            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var plantillaDimensionInstitucion: string = $self.$scope.plantillaCampoTexotDimensionInstitucion.clone()[0].outerHTML
            var renglonTotalConceptoAbstracto: JQuery = $('tr[xbrl\\:total-concepto-abstracto="' + concepto + '"]');
            var contextoTotalIntervaloMiembro = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'TotalIntervalosMiembro', 'TotalMonedasMiembro', true);
            var idRenglon = 'idCampoTexto_' + utils.UUIDUtils.generarUUID();
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace(/\$idRenglon/g, idRenglon);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace(/\$valorDimensionInstitucion/g, valorDimensionInstitucion);
            //Agregamos el elemento 
            renglonTotalConceptoAbstracto.before(plantillaDimensionInstitucion);
            var $renglonActual = $('#' + idRenglon);
            var $contenedorCampoTexto = $renglonActual.find('div.contenedorEntidadDesgloseCreditos');
            var $botonEliminar = $renglonActual.find('button.btn-desglose-credito');
            var $contenedorEditor = $contenedorCampoTexto.find('.contenedor-editor');
            var $contenedorVisor = $contenedorCampoTexto.find('.contenedor-visor');
            var $campoTexto = $contenedorEditor.find('input');
            var $etiquetaVisor = $contenedorVisor.find('span.xbrl-visor');
            var $tablaExcel = $('table[xbrl\\:tabla-excel]');
            //Inicializamos los listeners de los distintos eventos.
            var mostrarEditor = function (): void {
                $contenedorVisor.addClass('hide');
                $contenedorEditor.removeClass('hide');
                $tablaExcel.xbrlTablaExcel('pausar');
                $campoTexto.focus();
                $campoTexto.select();
            }

            var mostrarVisor = function (): void {
                $contenedorVisor.removeClass('hide');
                $contenedorEditor.addClass('hide');
                $etiquetaVisor.text($campoTexto.val());
                $tablaExcel.xbrlTablaExcel('reanudar');
            }

            $campoTexto.data('valorAnterior', $campoTexto.val());
            var manejarBlur = function () {
                var valorAnterior = $campoTexto.data('valorAnterior');
                var valorActual = $campoTexto.val();
                var valoresDimensionInstitucion = $self.$scope.valoresDimensionInstitucion;

                if (!valorAnterior) {
                    $campoTexto.data('valorAnterior', valorActual);
                }

                if (valorAnterior !== valorActual) {
                    if (!valorActual || valorActual.trim().length == 0) {
                        valorActual = valorAnterior;
                        var mensaje = $util.getValorEtiqueta('MENSAJE_WARNING_INSTITUCION_CREDITICIA_VACIA');
                        $util.advertencia({ texto: mensaje }).finally(function () {
                            $campoTexto.val(valorActual);
                            mostrarVisor();
                        });

                    } else {
                        if (valoresDimensionInstitucion && $.inArray(valorActual, valoresDimensionInstitucion) == -1) {
                            var _deferred = $util.creatPromiseDeferred<void>();
                            $self.$scope.$apply(function () {
                                $self.$scope.actualizarValorDimensionInstitucion(valorAnterior, valorActual);
                                _deferred.resolve();
                            });
                            _deferred.promise.then(function () {
                                valorAnterior = valorActual;
                                $campoTexto.data('valorAnterior', valorActual);
                                mostrarVisor();
                                $self.reEvaluaColumnasFijas();
                            });

                        } else {
                            valorActual = valorAnterior;
                            var mensaje = $util.getValorEtiqueta('DESGLOSE_CREDITOS_NOMBRE_INSTITUCION_UNICO');
                            $util.advertencia({ texto: mensaje }).finally(function () {
                                $campoTexto.val(valorActual);
                                mostrarVisor();
                            });
                        }
                    }
                } else {
                    mostrarVisor();
                }
            }

            var eliminarInstitucion = function (): void {
                $self.$scope.$apply(function (): void {
                    $self.$scope.eliminarElementosDimensionInstitucion($campoTexto.val(), concepto).then(
                        function (eliminado: boolean): void {
                            if (eliminado) {
                                $renglonActual.remove();
                            }
                        }
                    );
                });

            }

            $contenedorVisor.dblclick(mostrarEditor);
            $campoTexto.blur(manejarBlur);
            $botonEliminar.click(eliminarInstitucion);
        }

        /**
        * Carga los campos de texto donde se captura la diemnsión institución.
        **/
        private inicializaCaposEdicionDimensioInsitucion(): ng.IPromise<void> {
            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            abaxXBRL.plugins.XbrlPluginUtils
                .cargarPlantillaYReemplazarVariables('ts/templates/taxonomias/ifrs_mx_20190101/extensions/template-xbrl-campo-dimension-institucion.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    var idHechoIndice = 0;
                    $self.$scope.plantillaCampoTexotDimensionInstitucion = plantilla;
                    for (var idConcepto in $self.CONCEPTOS_DIMENSIONES_INSTITUCIONES) {
                        var concepto = $self.CONCEPTOS_DIMENSIONES_INSTITUCIONES[idConcepto];
                        var valorPlantillaDimensionInstitucion = "";
                        var dimensionesInstitucion = $self.$scope.valoresDimensionInstitucionPorElementoPrimario[concepto];
                        for (var indiceValorDimensionInstitucion in dimensionesInstitucion) {

                            var valorDimensionInstitucion = dimensionesInstitucion[indiceValorDimensionInstitucion];
                            $self.creaCampoEdicionDimensionInstitucion(concepto, valorDimensionInstitucion);

                        }
                    }
                    $deferred.resolve();
                }, function (textStatus: any, errorThrown: any) {
                    console.log('Ocurrio un error al cargar los campos captura (' + textStatus + '):');
                    console.log(errorThrown);
                    $deferred.reject(errorThrown);
                });

            return $deferred.promise;
        }


        /**
        * Inicializa todos los detalles de Instituciones
        */
        private inicializarDetalleInstituciones(): ng.IPromise<void> {

            var $self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var $deferred = $util.creatPromiseDeferred<void>();
            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            abaxXBRL.plugins.XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/templates/taxonomias/ifrs_mx_20190101/extensions/template-xbrl-detalle-desglose-institucion.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    $self.$scope.plantillaRenglonDimensionInstitucion = plantilla;

                    var idHechoIndice = 0;

                    for (var idConcepto in $self.CONCEPTOS_DIMENSIONES_INSTITUCIONES) {
                        var concepto = $self.CONCEPTOS_DIMENSIONES_INSTITUCIONES[idConcepto];
                        var valorPlantillaDimensionInstitucion = "";

                        for (var indiceValorDimensionInstitucion in $self.$scope.valoresDimensionInstitucionPorElementoPrimario[concepto]) {
                            var valorDimensionInstitucion = $self.$scope.valoresDimensionInstitucionPorElementoPrimario[concepto][indiceValorDimensionInstitucion];

                            var secuenciaRenglonDimensionInstitucion = $self.secuenciaRenglon++;
                            $self.$scope.idRenglonDimensionInstitucionValoresInstitucion[valorDimensionInstitucion] = secuenciaRenglonDimensionInstitucion.toString();

                            valorPlantillaDimensionInstitucion += $self.crearRenglonDimensionInstitucion(concepto, valorDimensionInstitucion);

                        }

                        $("#" + concepto).before(valorPlantillaDimensionInstitucion);
                    }
                    $deferred.resolve();

                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla de una etiqueta de concepto');
                    $deferred.reject(errorThrown);
                });

            return $deferred.promise;
        }


        /**
        *Crea un renglon de dimension institucion
        */
        private crearRenglonDimensionInstitucion(concepto: string, valorDimensionInstitucion: string): string {
            var plantillaDimensionInstitucion = this.$scope.plantillaRenglonDimensionInstitucion.clone()[0].outerHTML;

            var contextoTotalIntervaloMiembro = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'TotalIntervalosMiembro', 'TotalMonedasMiembro', true);

            var contextoAnoActualMiembroMonedaNacional = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'AnoActualMiembro', 'MonedaNacionalMiembro', false);
            var contextoHasta1AnoMiembroMonedaNacional = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta1AnoMiembro', 'MonedaNacionalMiembro', false);
            var contextoHasta2AnoMiembroMonedaNacional = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta2AnosMiembro', 'MonedaNacionalMiembro', false);
            var contextoHasta3AnoMiembroMonedaNacional = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta3AnosMiembro', 'MonedaNacionalMiembro', false);
            var contextoHasta4AnoMiembroMonedaNacional = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta4AnosMiembro', 'MonedaNacionalMiembro', false);
            var contextoHasta5AnoMiembroMonedaNacional = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta5AnosOMasMiembro', 'MonedaNacionalMiembro', false);

            var contextoAnoActualMiembroMonedaExtranjera = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'AnoActualMiembro', 'MonedaExtranjeraMiembro', false);
            var contextoHasta1AnoMiembroMonedaExtranjera = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta1AnoMiembro', 'MonedaExtranjeraMiembro', false);
            var contextoHasta2AnoMiembroMonedaExtranjera = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta2AnosMiembro', 'MonedaExtranjeraMiembro', false);
            var contextoHasta3AnoMiembroMonedaExtranjera = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta3AnosMiembro', 'MonedaExtranjeraMiembro', false);
            var contextoHasta4AnoMiembroMonedaExtranjera = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta4AnosMiembro', 'MonedaExtranjeraMiembro', false);
            var contextoHasta5AnoMiembroMonedaExtranjera = this.$scope.obtenerIdContexto(valorDimensionInstitucion, 'Hasta5AnosOMasMiembro', 'MonedaExtranjeraMiembro', false);

            var idRenglon = this.$scope.idRenglonDimensionInstitucionValoresInstitucion[valorDimensionInstitucion];

            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("idRenglonDimensionInstitucion", idRenglon + "_T2");


            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace(/contextoTotalIntervaloMiembro/g, contextoTotalIntervaloMiembro);

            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoAnoActualMiembroMonedaNacional", contextoAnoActualMiembroMonedaNacional);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta1AnoMiembroMonedaNacional", contextoHasta1AnoMiembroMonedaNacional);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta2AnoMiembroMonedaNacional", contextoHasta2AnoMiembroMonedaNacional);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta3AnoMiembroMonedaNacional", contextoHasta3AnoMiembroMonedaNacional);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta4AnoMiembroMonedaNacional", contextoHasta4AnoMiembroMonedaNacional);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta5AnoMiembroMonedaNacional", contextoHasta5AnoMiembroMonedaNacional);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoAnoActualMiembroMonedaExtranjera", contextoAnoActualMiembroMonedaExtranjera);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta1AnoMiembroMonedaExtranjera", contextoHasta1AnoMiembroMonedaExtranjera);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta2AnoMiembroMonedaExtranjera", contextoHasta2AnoMiembroMonedaExtranjera);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta3AnoMiembroMonedaExtranjera", contextoHasta3AnoMiembroMonedaExtranjera);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta4AnoMiembroMonedaExtranjera", contextoHasta4AnoMiembroMonedaExtranjera);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace("contextoHasta5AnoMiembroMonedaExtranjera", contextoHasta5AnoMiembroMonedaExtranjera);

            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace(/conceptoInstitucion/g, concepto);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace(/valorDefaultFecha/g, this.$scope.valorDefaultFecha);
            plantillaDimensionInstitucion = plantillaDimensionInstitucion.replace(/idUnidadMoneda/g, this.$scope.idUnidadMoneda);

            var plantillaJQUERY = $(plantillaDimensionInstitucion);

            if (concepto == "ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesConCosto") {
                //plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "FechaFirmaContrato").html("");
                //plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "FechaVencimiento").html("");
                plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "TasaInteres").html("");
            } else if (concepto == "ifrs_mx-cor_20141205_Proveedores") {
                //plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "FechaFirmaContrato").html("");
                //plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "FechaVencimiento").html("");
                plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "TasaInteres").html("");
            } else if (concepto == "ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesSinCosto") {
                plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "FechaFirmaContrato").html("");
                plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "FechaVencimiento").html("");
                plantillaJQUERY.find("#" + contextoTotalIntervaloMiembro + "TasaInteres").html("")
            }



            return plantillaJQUERY[0].outerHTML;
        }

        /**
        * Re evalua las columnas fijas para reajustar el alto y ancho.
        */
        private reEvaluaColumnasFijas(): ng.IPromise<void> {
            var opciones: shared.modelos.IOpcionesTablaDinamica = $('#posicionOriginalElementoMaximizado').length > 0 ? { fullScreen: true } : { heightScreenPorcent: 65 };
            var scrollTop = $('div.scrollableXYAuto').scrollTop();
            var $util = shared.service.AbaxXBRLUtilsService;
            var deferred = $util.creatPromiseDeferred<void>();
            $util.reAjustaCeldasTabla(null, opciones).then(function () {
                $('div.scrollableXYAuto').scrollTop(scrollTop);
                $('table[xbrl\\:tabla-excel]').each(function (indexTablaExcel: number, elementoTablaExcel: Element) {
                    var tablaExcel = $(elementoTablaExcel);
                    tablaExcel.xbrlTablaExcel('rebuild');
                });
                deferred.resolve();
            }, function (reason: any): void { deferred.reject(reason); });
            return deferred.promise;
        }
        /**
        * Actualiza el valor de la variable último campo primero a false, luego a true en un digest de angular.
        **/
        private ejecutaEvaluacionListados(): void {
            var self = this;
            self.$scope.idUltimoCampo = 'FinDesglose';
            self.$scope.ultimoCampo = false;
            $('body').expire('#' + self.$scope.idUltimoCampo);
            $('body').livequery('#' + self.$scope.idUltimoCampo, function () {
                self.$timeout(function () {
                    self.$scope.ultimoCampo = true;
                });

                $('body').expire('#' + self.$scope.idUltimoCampo);
            });
        }

        /** 
        * Llena los indices para el contexto y dimensión indicados
        * @param idConcepto Identificador de concepto que será mapeado a los indices.
        * @param idContexto Identificador del contexto que será mapeado a los indices.
        * @param valorDimensionInstitucion Nombre del nuevo miembro del eje (dimensión) Instituciones.
        * @param qNameMiembroIntervalo el nombre completamente calificado del miembro de la dimensión intervalo de tiempo.
        * @param qNameMiembroDenominacion el nombre completamente calificado del miembro de la dimensión denominacion.
        */
        private agregaIndicesDimensionInstitucion(idConcepto: string, contexto: abaxXBRL.model.Contexto, valorDimensionInstitucion: string, qNameMiembroIntervalo: string, qNameMiembroDenominacion: string, tipoPeriodo: number): void {

            var documentoInstancia: model.DocumentoInstanciaXbrl = this.abaxService.getDocumentoInstancia();

            if (!this.$scope.contextosPorLlaveDimension[valorDimensionInstitucion]) {
                this.$scope.contextosPorLlaveDimension[valorDimensionInstitucion] = {};
            }
            if (!this.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervalo]) {
                this.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervalo] = {};
            }
            if (!this.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervalo][qNameMiembroDenominacion]) {
                this.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervalo][qNameMiembroDenominacion] = {};
                //console.log("agregaIndicesDimensionInstitucion:[" + valorDimensionInstitucion + "][" + qNameMiembroIntervalo + "][" + qNameMiembroDenominacion + "] = " + contexto.Id);
            }
            if (!this.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervalo][qNameMiembroDenominacion][tipoPeriodo]) {
                this.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervalo][qNameMiembroDenominacion][tipoPeriodo] = contexto.Id;
                //console.log("agregaIndicesDimensionInstitucion:[" + valorDimensionInstitucion + "][" + qNameMiembroIntervalo + "][" + qNameMiembroDenominacion + "] = " + contexto.Id);
            }

            if (!this.$scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion]) {
                this.$scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion] = new Array<string>();
            }
            if ($.inArray(contexto.Id, this.$scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion]) == -1) {
                this.$scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion].push(contexto.Id);
            }
            if ($.inArray(valorDimensionInstitucion, this.$scope.valoresDimensionInstitucion) == -1) {
                this.$scope.valoresDimensionInstitucion.push(valorDimensionInstitucion);
            }
            if (idConcepto && idConcepto != null) {

                if (idConcepto == 'ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo' || idConcepto == 'ifrs_mx-cor_20141205_FechaDeFirmaContrato' || idConcepto == 'ifrs_mx-cor_20141205_FechaDeVencimiento' || idConcepto == 'ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa') {
                    this.$scope.contextoTotalesPorDimensionInstitucion[valorDimensionInstitucion] = contexto.Id;
                } else {
                    if (!this.$scope.valoresDimensionInstitucionPorElementoPrimario[idConcepto]) {
                        this.$scope.valoresDimensionInstitucionPorElementoPrimario[idConcepto] = new Array<string>();
                        this.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idConcepto] = new Array<string>();
                    }
                    if ($.inArray(valorDimensionInstitucion, this.$scope.valoresDimensionInstitucionPorElementoPrimario[idConcepto]) == -1) {
                        this.$scope.valoresDimensionInstitucionPorElementoPrimario[idConcepto].push(valorDimensionInstitucion);
                        this.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idConcepto].push(valorDimensionInstitucion);
                    }
                }
            }
        }

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self = this;


            self.ID_ITEM_MIEMBRO_POR_QNAME = {
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:AnoActualMiembro": "ifrs_mx-cor_20141205_AnoActualMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:Hasta1AnoMiembro": "ifrs_mx-cor_20141205_Hasta1AnoMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:Hasta2AnosMiembro": "ifrs_mx-cor_20141205_Hasta2AnosMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:Hasta3AnosMiembro": "ifrs_mx-cor_20141205_Hasta3AnosMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:Hasta4AnosMiembro": "ifrs_mx-cor_20141205_Hasta4AnosMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:Hasta5AnosOMasMiembro": "ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalIntervalosMiembro": "ifrs_mx-cor_20141205_TotalIntervalosMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedaNacionalMiembro": "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:MonedaExtranjeraMiembro": "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
                "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TotalMonedasMiembro": "ifrs_mx-cor_20141205_TotalMonedasMiembro"
            };

            this.$scope.ultimoCampo = true;

            this.$scope.actualizarUltimoCampo = function () {
                if (!self.$scope.ultimoCampo) {
                    self.$scope.ultimoCampo = true;
                }
                return self.$scope.ultimoCampo;
            }

            var documentoInstancia = self.abaxService.getDocumentoInstancia();
            var definicionPlantilla = self.abaxService.getDefinicionPlantilla();

            var fechaInicioPeriodo = definicionPlantilla.obtenerVariablePorId('fecha_2015_01_01');
            var fechaFinTrimestre = definicionPlantilla.obtenerVariablePorId('fecha_2015_09_30');
            var emisora = definicionPlantilla.obtenerVariablePorId('nombreEntidad');
            var esquemaEmisora = definicionPlantilla.obtenerVariablePorId('esquemaEntidad');

            this.$scope.obtenerIdUnidadMoneda = function (): string {

                var hechoTasaInteresOSobretasa = new abaxXBRL.model.Hecho();
                var espacionNombresUnidades = definicionPlantilla.obtenerVariablePorId('medida_http___www_xbrl_org_2003_iso4217');
                var nombreUnidadMoneda = definicionPlantilla.obtenerVariablePorId('medida_MXN');
                var unidadMoneda = self.abaxService.ObtenerUnidadPorelementos(model.Unidad.MEDIDA, espacionNombresUnidades, nombreUnidadMoneda);
                return unidadMoneda.Id;
            }

            this.$scope.idUnidadMoneda = this.$scope.obtenerIdUnidadMoneda();

            this.$scope.obtenerIdUnidadPure = function (): string {

                var hechoTasaInteresOSobretasa = new abaxXBRL.model.Hecho();
                var espacionNombresUnidades = definicionPlantilla.obtenerVariablePorId('medida_http___www_xbrl_org_2003_instance');
                var nombreUnidadPure = 'pure';
                var unidadMoneda = self.abaxService.ObtenerUnidadPorelementos(model.Unidad.MEDIDA, espacionNombresUnidades, nombreUnidadPure);
                return unidadMoneda.Id;
            }

            this.$scope.idUnidadPure = this.$scope.obtenerIdUnidadPure();

            this.$scope.valorDefaultFecha = moment().format(model.ConstantesComunes.FORMATO_FECHA);

            self.$scope.contextosPorValorDimensionInstitucion = {};
            self.$scope.valoresDimensionInstitucionPorElementoPrimario = {};
            self.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario = {};
            self.$scope.contextosPorLlaveDimension = {};
            self.$scope.valoresDimensionInstitucion = new Array<string>();
            self.$scope.contextoTotalesPorDimensionInstitucion = {};

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
                Explicita: true,
                QNameDimension: XbrlDesgloseCreditosCNBV2019Controller.QNAME_DIMENSION_DENOMINACION,
                IdDimension: XbrlDesgloseCreditosCNBV2019Controller.ID_DIMENSION_DENOMINACION
            }));
            valoresDimensionComparar.push(new abaxXBRL.model.DimensionInfo().deserialize({
                Explicita: true,
                QNameDimension: XbrlDesgloseCreditosCNBV2019Controller.QNAME_DIMENSION_INTERVALO_TIEMPO,
                IdDimension: XbrlDesgloseCreditosCNBV2019Controller.ID_DIMENSION_INTERVALO_TIEMPO
            }));
            valoresDimensionComparar.push(new abaxXBRL.model.DimensionInfo().deserialize({
                Explicita: false,
                QNameDimension: XbrlDesgloseCreditosCNBV2019Controller.QNAME_DIMENSION_INSTITUCION,
                IdDimension: XbrlDesgloseCreditosCNBV2019Controller.ID_DIMENSION_INSTITUCION
            }));

            for (var i = 0; i < idsContextosRevisar.length; i++) {
                var contexto = documentoInstancia.ContextosPorId[idsContextosRevisar[i]];
                if (contexto && contexto != null) {
                    if (contexto.Entidad.Id === emisora && contexto.Entidad.EsquemaId === esquemaEmisora && contexto.ContieneInformacionDimensional && contexto.ValoresDimension && contexto.ValoresDimension.length && contexto.ValoresDimension.length == valoresDimensionComparar.length) {
                        var copiaComparar = valoresDimensionComparar.slice();
                        var valorDimensionInstitucion: string = null;
                        var qNameMiembroIntervalo: string = null;
                        var qNameMiembroDenominacion: string = null;
                        var equivalente = true;
                        for (var j = 0; j < contexto.ValoresDimension.length; j++) {
                            var equivalenteEncontrado: boolean = false;
                            for (var k = 0; k < copiaComparar.length; k++) {
                                if (contexto.ValoresDimension[j].EsInfoMismaDimension(copiaComparar[k])) {
                                    equivalenteEncontrado = true;
                                    if (!contexto.ValoresDimension[j].Explicita) {
                                        var elementoMiembroTipificado = abaxXBRL.utils.XmlUtils.CrearJsonAPartirDeXml(contexto.ValoresDimension[j].ElementoMiembroTipificado);
                                        if (elementoMiembroTipificado[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION]) {
                                            if (elementoMiembroTipificado[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION][XbrlDesgloseCreditosCNBV2019Controller.X2JS_ELEMENTO_PREFIX]) {
                                                var prefijo = elementoMiembroTipificado[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION][XbrlDesgloseCreditosCNBV2019Controller.X2JS_ELEMENTO_PREFIX];
                                                if (elementoMiembroTipificado[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION][XbrlDesgloseCreditosCNBV2019Controller.X2JS_PREFIJO_ELEMENTO_XMLNS + prefijo]) {
                                                    var xmlns = elementoMiembroTipificado[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION][XbrlDesgloseCreditosCNBV2019Controller.X2JS_PREFIJO_ELEMENTO_XMLNS + prefijo];
                                                    if (xmlns === XbrlDesgloseCreditosCNBV2019Controller.ESPACIO_NOMRES_DIMENSION_INSTITUCION) {
                                                        if (elementoMiembroTipificado[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION][XbrlDesgloseCreditosCNBV2019Controller.X2JS_ELEMENTO_TEXT]) {
                                                            valorDimensionInstitucion = elementoMiembroTipificado[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION][XbrlDesgloseCreditosCNBV2019Controller.X2JS_ELEMENTO_TEXT];
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        if (contexto.ValoresDimension[j].QNameDimension === XbrlDesgloseCreditosCNBV2019Controller.QNAME_DIMENSION_DENOMINACION) {
                                            qNameMiembroDenominacion = contexto.ValoresDimension[j].QNameItemMiembro;
                                        }
                                        if (contexto.ValoresDimension[j].QNameDimension === XbrlDesgloseCreditosCNBV2019Controller.QNAME_DIMENSION_INTERVALO_TIEMPO) {
                                            qNameMiembroIntervalo = contexto.ValoresDimension[j].QNameItemMiembro;
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
                        if (equivalente && valorDimensionInstitucion !== null) {
                            if (valorDimensionInstitucion != 'TOTAL') {
                                //console.log(valorDimensionInstitucion);
                                self.agregaIndicesDimensionInstitucion(null, contexto, valorDimensionInstitucion, qNameMiembroIntervalo, qNameMiembroDenominacion, contexto.Periodo.Tipo)
                                var hechos = documentoInstancia.HechosPorIdContexto[contexto.Id];
                                if (hechos && hechos.length && hechos.length > 0) {
                                    for (var l = 0; l < hechos.length; l++) {
                                        var hecho = documentoInstancia.HechosPorId[hechos[l]];
                                        self.agregaIndicesDimensionInstitucion(hecho.IdConcepto, contexto, valorDimensionInstitucion, qNameMiembroIntervalo, qNameMiembroDenominacion, contexto.Periodo.Tipo);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            self.$scope.agregarValorDimensionInstitucion = function (idElementoPrimario: string): void {
                var intentos = 1;
                var $util = shared.service.AbaxXBRLUtilsService;
                var nombreNuevoElemento: string = XbrlDesgloseCreditosCNBV2019Controller.PREFIJO_NOMBRE_INSTITUCION_DEFECTO;
                if (self.$scope.valoresDimensionInstitucion) {
                    while ($.inArray(nombreNuevoElemento, self.$scope.valoresDimensionInstitucion) != -1) {
                        nombreNuevoElemento = XbrlDesgloseCreditosCNBV2019Controller.PREFIJO_NOMBRE_INSTITUCION_DEFECTO + ' ' + intentos++;
                    }
                }

                if ($.inArray(nombreNuevoElemento, self.$scope.valoresDimensionInstitucion) == -1) {
                    self.$scope.valoresDimensionInstitucion.push(nombreNuevoElemento);
                    var promise1 = $util.setTimeout(function () {
                        var secuenciaRenglonDimensionInstitucion = self.secuenciaRenglon++;
                        var idRenglonDetalle = secuenciaRenglonDimensionInstitucion.toString();
                        self.$scope.idRenglonDimensionInstitucionValoresInstitucion[nombreNuevoElemento] = idRenglonDetalle;
                        var renglonDimensionInstitucion = self.crearRenglonDimensionInstitucion(idElementoPrimario, nombreNuevoElemento);
                        $("#" + idElementoPrimario).before(renglonDimensionInstitucion);
                        var etiquetasCampoCaptura = $('#' + idRenglonDetalle + "_T2").find('xbrl\\:campo-captura:not(.inicializado)');
                        etiquetasCampoCaptura.xbrlCampoCaptura();
                        etiquetasCampoCaptura.addClass('inicializado');
                        etiquetasCampoCaptura.find('.div-default').removeClass('div-default');
                    });
                    var promise2 = $util.setTimeout(function () {
                        self.creaCampoEdicionDimensionInstitucion(idElementoPrimario, nombreNuevoElemento);
                    });
                    promise1.then(function () {
                        promise2.then(function () {
                            self.reEvaluaColumnasFijas();
                        });
                    });
                }

                if (!self.$scope.valoresDimensionInstitucionPorElementoPrimario[idElementoPrimario]) {
                    self.$scope.valoresDimensionInstitucionPorElementoPrimario[idElementoPrimario] = new Array<string>();
                    self.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idElementoPrimario] = new Array<string>();
                }
                if ($.inArray(nombreNuevoElemento, self.$scope.valoresDimensionInstitucionPorElementoPrimario[idElementoPrimario]) == -1) {
                    self.$scope.valoresDimensionInstitucionPorElementoPrimario[idElementoPrimario].push(nombreNuevoElemento);
                    self.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idElementoPrimario].push(nombreNuevoElemento);
                }
            }

            self.$scope.actualizarValorDimensionInstitucion = function (valorDimensionAnterior: string, valorDimensionNuevo: string): boolean {

                if (valorDimensionAnterior == valorDimensionNuevo) {
                    return false;
                }

                var indexDimensionAnterior: number;
                //Si no se ha registrado  la institusion terminamos
                indexDimensionAnterior = $.inArray(valorDimensionAnterior, self.$scope.valoresDimensionInstitucion);
                if (indexDimensionAnterior == -1) {
                    return false;
                }

                if (self.$scope.contextosPorLlaveDimension[valorDimensionAnterior]) {
                    self.$scope.contextosPorLlaveDimension[valorDimensionNuevo] = self.$scope.contextosPorLlaveDimension[valorDimensionAnterior];
                    self.$scope.contextosPorLlaveDimension[valorDimensionAnterior] = undefined;
                    delete self.$scope.contextosPorLlaveDimension[valorDimensionAnterior];
                }

                //Indice de instituciones por contexto.
                for (var idConcepto in self.$scope.valoresDimensionInstitucionPorElementoPrimario) {
                    indexDimensionAnterior = $.inArray(valorDimensionAnterior, self.$scope.valoresDimensionInstitucionPorElementoPrimario[idConcepto]);
                    if (indexDimensionAnterior != -1) {
                        //self.$scope.valoresDimensionInstitucionPorElementoPrimario[idConcepto].splice(indexDimensionAnterior, 1);
                        //self.$scope.valoresDimensionInstitucionPorElementoPrimario[idConcepto].push(valorDimensionNuevo);
                        self.$scope.valoresDimensionInstitucionPorElementoPrimario[idConcepto][indexDimensionAnterior] = valorDimensionNuevo;
                    }
                }
                //Indice de instituciones por contexto temporal.
                for (var idConcepto in self.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario) {
                    indexDimensionAnterior = $.inArray(valorDimensionAnterior, self.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idConcepto]);
                    if (indexDimensionAnterior != -1) {
                        //self.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idConcepto].splice(indexDimensionAnterior, 1);
                        //self.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idConcepto].push(valorDimensionNuevo);
                        self.$scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idConcepto][indexDimensionAnterior] = valorDimensionNuevo;
                    }
                }

                //Indice de instituciones por contexto.
                var plantillaXml = abaxXBRL.utils.XmlUtils.CrearJsonAPartirDeXml(XbrlDesgloseCreditosCNBV2019Controller.TEMPLATE_VALOR_DIMENSION_INSTITUCION);

                plantillaXml[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION][XbrlDesgloseCreditosCNBV2019Controller.X2JS_ELEMENTO_TEXT] = valorDimensionNuevo;
                var elementoMiembroTipificadoValorDimensionNuevo = abaxXBRL.utils.XmlUtils.CrearXmlAPartirDeJson(plantillaXml);

                for (var indexContexto: number = 0; indexContexto < self.$scope.contextosPorValorDimensionInstitucion[valorDimensionAnterior].length; indexContexto++) {

                    var idContexto = self.$scope.contextosPorValorDimensionInstitucion[valorDimensionAnterior][indexContexto];
                    var contexto: model.Contexto = documentoInstancia.ContextosPorId[idContexto];
                    if (contexto.ValoresDimension) {
                        for (var indexDimensionItera: number = 0; indexDimensionItera < contexto.ValoresDimension.length; indexDimensionItera++) {
                            var dimensionItera = contexto.ValoresDimension[indexDimensionItera];
                            if (!dimensionItera.Explicita) {
                                dimensionItera.ElementoMiembroTipificado = elementoMiembroTipificadoValorDimensionNuevo;
                                dimensionItera.CreatTextoElementoMiembroTipificado();
                            }
                        }
                    }
                }

                var idCtxTotal = self.$scope.contextoTotalesPorDimensionInstitucion[valorDimensionAnterior];
                if (idCtxTotal && idCtxTotal != null) {
                    var contextoTotal: model.Contexto = documentoInstancia.ContextosPorId[idCtxTotal];
                    if (contextoTotal.ValoresDimension) {
                        for (var indexDimensionItera: number = 0; indexDimensionItera < contextoTotal.ValoresDimension.length; indexDimensionItera++) {
                            var dimensionItera = contextoTotal.ValoresDimension[indexDimensionItera];
                            if (!dimensionItera.Explicita) {
                                dimensionItera.ElementoMiembroTipificado = elementoMiembroTipificadoValorDimensionNuevo;
                                dimensionItera.CreatTextoElementoMiembroTipificado();
                            }
                        }
                    }
                    self.$scope.contextoTotalesPorDimensionInstitucion[valorDimensionNuevo] = self.$scope.contextoTotalesPorDimensionInstitucion[valorDimensionAnterior];
                    self.$scope.contextoTotalesPorDimensionInstitucion[valorDimensionAnterior] = undefined;
                    delete self.$scope.contextoTotalesPorDimensionInstitucion[valorDimensionAnterior];
                }
                //Se asignan los indices de contexto al nuevo valor de dimension.
                var contextosDimensionAnterior: Array<string> = self.$scope.contextosPorValorDimensionInstitucion[valorDimensionAnterior];
                self.$scope.contextosPorValorDimensionInstitucion[valorDimensionNuevo] = contextosDimensionAnterior;
                self.$scope.contextosPorValorDimensionInstitucion[valorDimensionAnterior] = undefined;
                delete self.$scope.contextosPorValorDimensionInstitucion[valorDimensionAnterior];


                //Finalmente actualizamos el valor del elemento en la lista general  para que se re dibuje el tr que mustra sus valores.
                indexDimensionAnterior = $.inArray(valorDimensionAnterior, self.$scope.valoresDimensionInstitucion);
                self.$scope.valoresDimensionInstitucion[indexDimensionAnterior] = valorDimensionNuevo;

                self.$scope.idRenglonDimensionInstitucionValoresInstitucion[valorDimensionNuevo] = self.$scope.idRenglonDimensionInstitucionValoresInstitucion[valorDimensionAnterior];
                delete self.$scope.idRenglonDimensionInstitucionValoresInstitucion[valorDimensionAnterior];
                self.ejecutaEvaluacionListados();

                return true;
            }


            self.$scope.obtenerIdContexto = function (valorDimensionInstitucion: string, miembroIntervaloTiempo: string, miembroMoneda: string, esPeriodoDuracion: boolean): string {

                var qNameMiembroIntervaloTiempo = XbrlDesgloseCreditosCNBV2019Controller.ESPACIO_NOMBRES_DIMENSION_INTERVALO_DE_TIEMPO + ':' + miembroIntervaloTiempo;
                var qNameMiembroMoneda = XbrlDesgloseCreditosCNBV2019Controller.ESPACIO_NOMBRES_DIMENSION_DENOMINACION + ':' + miembroMoneda;
                var tipoPeriodo: number = esPeriodoDuracion == true ? abaxXBRL.model.Periodo.DURACION : abaxXBRL.model.Periodo.INSTANTE;
                var dInicio = moment(fechaInicioPeriodo + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
                var dFin = moment(fechaFinTrimestre + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();


                if (self.$scope.contextosPorLlaveDimension[valorDimensionInstitucion] &&
                    self.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervaloTiempo] &&
                    self.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervaloTiempo][qNameMiembroMoneda] &&
                    self.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervaloTiempo][tipoPeriodo]) {
                    var encontrada = self.$scope.contextosPorLlaveDimension[valorDimensionInstitucion][qNameMiembroIntervaloTiempo][qNameMiembroMoneda][tipoPeriodo];
                    //console.log("obtenerIdContexto: [" + valorDimensionInstitucion + "][" + qNameMiembroIntervaloTiempo + "][" + qNameMiembroMoneda + "] = " + encontrada );

                    return encontrada;
                }
                //console.log("obtenerIdContexto: [" + valorDimensionInstitucion + "][" + qNameMiembroIntervaloTiempo + "][" + qNameMiembroMoneda + "] = null");
                var idsContextos: Array<string> = self.$scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion];
                var existe = false;
                if (idsContextos && idsContextos.length && idsContextos.length > 0) {
                    var idContextoResultado: string = null;
                    for (var index: number = 0; index < idsContextos.length; index++) {
                        var idContexto = idsContextos[index];
                        var contexto: model.Contexto = self.abaxService.getDocumentoInstancia().ContextosPorId[idContexto];
                        if (!contexto || contexto == null) {
                            continue;
                        }
                        if (!contexto.ValoresDimension || contexto.ValoresDimension == null || !contexto.ValoresDimension.length) {
                            continue;
                        }

                        if (contexto.Periodo.Tipo != tipoPeriodo) {
                            continue;
                        }

                        if (contexto.Periodo.Tipo == abaxXBRL.model.Periodo.INSTANTE) {
                            if (contexto.Periodo.FechaInstante.getTime() != dFin.getTime()) {
                                continue;
                            }
                        } else {
                            if (contexto.Periodo.FechaInicio.getTime() != dInicio.getTime() || contexto.Periodo.FechaFin.getTime() != dFin.getTime()) {
                                continue;
                            }
                        }

                        var mismoMiembroIntervalo: boolean = false;
                        var mismoMiembroDenominacion: boolean = false;
                        for (var indexDimension: number = 0; indexDimension < contexto.ValoresDimension.length; indexDimension++) {
                            var dimension: model.DimensionInfo = contexto.ValoresDimension[indexDimension];
                            if (dimension.QNameItemMiembro == qNameMiembroIntervaloTiempo) {
                                mismoMiembroIntervalo = true;
                            }
                            if (dimension.QNameItemMiembro == qNameMiembroMoneda) {
                                mismoMiembroDenominacion = true;
                            }
                        }
                        if (mismoMiembroIntervalo && mismoMiembroDenominacion) {
                            existe = true;
                            idContextoResultado = idContexto;
                        }
                    }
                }
                if (!existe) {
                    var contextoDenominacionIntervalo = self.crearContextoDeDesgloseDeCreditos(valorDimensionInstitucion, qNameMiembroIntervaloTiempo, qNameMiembroMoneda, emisora, esquemaEmisora, tipoPeriodo, fechaInicioPeriodo, fechaFinTrimestre);
                    self.agregaIndicesDimensionInstitucion(null, contextoDenominacionIntervalo, valorDimensionInstitucion, qNameMiembroIntervaloTiempo, qNameMiembroMoneda, tipoPeriodo);
                    idContextoResultado = contextoDenominacionIntervalo.Id;
                }

                return idContextoResultado;
            }

            self.$scope.eliminarElementosDimensionInstitucion = function (valorDimensionInstitucion: string, idElementoPrimario: string): ng.IPromise<boolean> {

                function eliminarElementos() {
                    var scope = self.$scope;
                    //scope.$apply(function () {
                    //Primero eliminamos todos los hechos del documento de instancia.
                    var contexto: model.Contexto;

                    if (scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion] && scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion] != null) {
                        var contextosIds: Array<string> = scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion];
                        var contextoTotales: string = scope.contextoTotalesPorDimensionInstitucion[valorDimensionInstitucion];
                        var idsConceptos: Array<string> = [];
                        contextosIds.push(contextoTotales);
                        //Iteramos hechos.
                        for (var indexContexto: number = 0; indexContexto < contextosIds.length; indexContexto++) {
                            var idContexto: string = contextosIds[indexContexto];
                            var hechosIds: Array<string> = angular.copy(self.abaxService.getDocumentoInstancia().HechosPorIdContexto[idContexto]);
                            if (hechosIds && hechosIds != null && hechosIds.length > 0) {
                                for (var indexHechoId: number = 0; indexHechoId < hechosIds.length; indexHechoId++) {

                                    var idHecho = hechosIds[indexHechoId];
                                    var hecho = self.abaxService.getDocumentoInstancia().HechosPorId[idHecho];
                                    if (hecho && hecho != null) {
                                        var idConcepto = hecho.IdConcepto;
                                        if (idsConceptos.indexOf(idConcepto) == -1) {
                                            idsConceptos.push(idConcepto);
                                        }
                                    }

                                    self.abaxService.eliminarHechoDeDocumentoInstanciaPorId(idHecho);
                                }
                            }
                        }
                        // Eliminamos los contextos del documeno de instancia.
                        var hechosPorIdContexto: { [id: string]: Array<string> } = self.abaxService.getDocumentoInstancia().HechosPorIdContexto;
                        var contextosPorId: { [idContexto: string]: model.Contexto } = self.abaxService.getDocumentoInstancia().ContextosPorId;
                        var gruposContextosEquivalentes: { [id: string]: Array<string> } = self.abaxService.getDocumentoInstancia().GruposContextosEquivalentes;
                        var contextosPorFecha: { [fecha: string]: Array<string> } = self.abaxService.getDocumentoInstancia().ContextosPorFecha;
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
                            var fechaInicioPeriodo: string = definicionPlantilla.obtenerVariablePorId('fecha_2015_01_01');
                            var fechaFinTrimestre: string = definicionPlantilla.obtenerVariablePorId('fecha_2015_09_30');
                            var contextosInstante: Array<string> = contextosPorFecha[fechaFinTrimestre];
                            var contextosDuracion: Array<string> = contextosPorFecha[fechaInicioPeriodo + '_' + fechaFinTrimestre];
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

                        //Despues eliminamos todos los elementos de la dimensión institución de los indices del desglose de creditos.

                        //Indice de contextos totales
                        scope.contextoTotalesPorDimensionInstitucion[valorDimensionInstitucion] = undefined;
                        delete scope.contextoTotalesPorDimensionInstitucion[valorDimensionInstitucion];
                        //Indice de contextos no totales.
                        scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion] = undefined;
                        delete scope.contextosPorValorDimensionInstitucion[valorDimensionInstitucion];

                        if (idElementoPrimario && idElementoPrimario != null) {
                            //Indice por contexto primario
                            var nombreInstituciones = scope.valoresDimensionInstitucionPorElementoPrimario[idElementoPrimario];
                            var indexDimension = $.inArray(valorDimensionInstitucion, nombreInstituciones);
                            if (indexDimension != -1) { nombreInstituciones.splice(indexDimension, 1); }
                            //Indice temporal por contexto primario
                            nombreInstituciones = scope.valoresTemporalDimensionInstitucionPorElementoPrimario[idElementoPrimario];
                            indexDimension = $.inArray(valorDimensionInstitucion, nombreInstituciones);
                            if (indexDimension != -1) { nombreInstituciones.splice(indexDimension, 1); }
                        }

                        //Indice general
                        nombreInstituciones = scope.valoresDimensionInstitucion;
                        indexDimension = $.inArray(valorDimensionInstitucion, nombreInstituciones);
                        if (indexDimension != -1) { nombreInstituciones.splice(indexDimension, 1); }
                        //Mapa on los elementos por dimensión.
                        scope.contextosPorLlaveDimension[valorDimensionInstitucion] = undefined;
                        delete scope.contextosPorLlaveDimension[valorDimensionInstitucion];

                        if (scope.idRenglonDimensionInstitucionValoresInstitucion) {
                            //Se elimina el renglon de hechos de valores
                            $("#" + scope.idRenglonDimensionInstitucionValoresInstitucion[valorDimensionInstitucion] + "_T2").remove();
                            delete scope.idRenglonDimensionInstitucionValoresInstitucion[valorDimensionInstitucion];
                        }

                        //Reevaluamos las formulas de los conceptos relacionados a los hechos eliminados.
                        for (var indexConcepto: number = 0; indexConcepto < idsConceptos.length; indexConcepto++) {
                            var idConcepto = idsConceptos[indexConcepto];
                            self.abaxService.reevaluaFormulasPorConcepto(idConcepto);
                        }
                        $('xbrl\\:campo-captura').xbrlCampoCaptura('update');
                        abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                        self.ejecutaEvaluacionListados();
                        //plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
                        //deferred.resolve(true);
                        //});
                    }
                }

                var deferred = shared.service.AbaxXBRLUtilsService.creatPromiseDeferred<boolean>();

                if (idElementoPrimario && idElementoPrimario != null) {
                    var si = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('DESGLOSE_CREDITOS_SI');
                    var no = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('DESGLOSE_CREDITOS_NO');
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('DESGLOSE_CREDITOS_ELIMINAR_INSTITUCION', {
                        'valorDimensionInstitucion': valorDimensionInstitucion
                    }), {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('DESGLOSE_CREDITOS_ELIMINAR_INSTITUCION'),
                            buttons: { si: true, no: false },
                            submit: function (e, v, m, f) {
                                if (v) {
                                    eliminarElementos();
                                    deferred.resolve(true);
                                } else {
                                    deferred.resolve(false);
                                }
                            }
                        });
                } else {
                    eliminarElementos();
                    deferred.resolve(true);
                }

                return deferred.promise;
            }

            var valoresDimensionInstitucionTMP = [];

            $.each(self.$scope.valoresDimensionInstitucionPorElementoPrimario, function (i, elementoPrimario) {
                $.each(elementoPrimario, function (j, institucionTMP) {
                    valoresDimensionInstitucionTMP.push(institucionTMP);
                });
            });

            var copiaInstituciones = self.$scope.valoresDimensionInstitucion.slice();

            $.each(copiaInstituciones, function (i, institucion) {
                if ($.inArray(institucion, valoresDimensionInstitucionTMP) == -1) {
                    self.$scope.eliminarElementosDimensionInstitucion(institucion, null);
                }
            });

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

            self.$scope.idRenglonDimensionInstitucionValoresInstitucion = {};

        }



        /**
         * Crea un contexto para su uso en el desglose de créditos a partir de los valores dimensionales especificados y las características solicitadas para el nuevo contexto.
         *
         * @param valorDimensionInstitucion el valor de la dimensión tipificada institución.
         * @param qNameMiembroIntervaloTiempo el nombre calificado del miembro para la dimensión intervalo de tiempo.
         * @param qNameMiembroDenominacion el nombre calificado del miembro para la dimensión denominación.
         * @param emisora el nombre de la emisora para la entidad del contexto.
         * @param esquemaEmisora el esquema en que se definió  el nombre de la emisora para la entidad del contexto.
         * @param tipo el tipo de contexto (duración o instante).
         * @param fechaInicio la fecha que sirve como instante o como inicio del periodo de duración del periodo del contexto.
         * @param fechaFin la fecha que sirve como fin para el periodo del contexto en caso de ser de tipo duración.
         * @return el contexto creado a partir de las características proporcionadas.
         */
        private crearContextoDeDesgloseDeCreditos(valorDimensionInstitucion: string, qNameMiembroIntervaloTiempo: string, qNameMiembroDenominacion: string, emisora: string, esquemaEmisora: string, tipo: number, fechaInicio: string, fechaFin?: string): abaxXBRL.model.Contexto {
            var contexto = new abaxXBRL.model.Contexto();

            contexto.ContieneInformacionDimensional = false;
            contexto.Escenario = null;
            contexto.Id = "CDC" + abaxXBRL.utils.UUIDUtils.generarUUID();
            contexto.ValoresDimension = null;
            contexto.Periodo = new abaxXBRL.model.Periodo();

            contexto.Periodo.Tipo = tipo;
            if (contexto.Periodo.Tipo == abaxXBRL.model.Periodo.INSTANTE) {
                contexto.Periodo.FechaInstante = moment(fechaFin + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
            }
            if (contexto.Periodo.Tipo == abaxXBRL.model.Periodo.DURACION) {
                contexto.Periodo.FechaInicio = moment(fechaInicio + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
                contexto.Periodo.FechaFin = moment(fechaFin + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
            }

            contexto.Entidad = new abaxXBRL.model.Entidad();
            contexto.Entidad.Id = emisora;
            contexto.Entidad.EsquemaId = esquemaEmisora;
            contexto.Entidad.IdEntidad = esquemaEmisora + abaxXBRL.model.ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO + emisora;
            contexto.Entidad.ContieneInformacionDimensional = false;
            contexto.ContieneInformacionDimensional = true;
            contexto.Escenario = null;
            contexto.ValoresDimension = new Array<abaxXBRL.model.DimensionInfo>();

            var dimensionDenominacion = new abaxXBRL.model.DimensionInfo();

            dimensionDenominacion.Explicita = true;
            dimensionDenominacion.QNameDimension = XbrlDesgloseCreditosCNBV2019Controller.QNAME_DIMENSION_DENOMINACION;
            dimensionDenominacion.IdDimension = XbrlDesgloseCreditosCNBV2019Controller.ID_DIMENSION_DENOMINACION;
            dimensionDenominacion.QNameItemMiembro = qNameMiembroDenominacion;
            dimensionDenominacion.IdItemMiembro = this.ID_ITEM_MIEMBRO_POR_QNAME[qNameMiembroDenominacion];

            contexto.ValoresDimension.push(dimensionDenominacion);

            var dimensionIntervaloTiempo = new abaxXBRL.model.DimensionInfo();

            dimensionIntervaloTiempo.Explicita = true;
            dimensionIntervaloTiempo.QNameDimension = XbrlDesgloseCreditosCNBV2019Controller.QNAME_DIMENSION_INTERVALO_TIEMPO;
            dimensionIntervaloTiempo.IdDimension = XbrlDesgloseCreditosCNBV2019Controller.ID_DIMENSION_INTERVALO_TIEMPO;
            dimensionIntervaloTiempo.QNameItemMiembro = qNameMiembroIntervaloTiempo;
            dimensionIntervaloTiempo.IdItemMiembro = this.ID_ITEM_MIEMBRO_POR_QNAME[qNameMiembroIntervaloTiempo];

            contexto.ValoresDimension.push(dimensionIntervaloTiempo);

            var dimensionInstitucion = new abaxXBRL.model.DimensionInfo();

            dimensionInstitucion.Explicita = false;
            dimensionInstitucion.QNameDimension = XbrlDesgloseCreditosCNBV2019Controller.QNAME_DIMENSION_INSTITUCION;
            dimensionInstitucion.IdDimension = XbrlDesgloseCreditosCNBV2019Controller.ID_DIMENSION_INSTITUCION;

            var plantillaXml = abaxXBRL.utils.XmlUtils.CrearJsonAPartirDeXml(XbrlDesgloseCreditosCNBV2019Controller.TEMPLATE_VALOR_DIMENSION_INSTITUCION);
            plantillaXml[XbrlDesgloseCreditosCNBV2019Controller.NOMBRE_DIMENSION_INSTITUCION][XbrlDesgloseCreditosCNBV2019Controller.X2JS_ELEMENTO_TEXT] = valorDimensionInstitucion;
            dimensionInstitucion.ElementoMiembroTipificado = abaxXBRL.utils.XmlUtils.CrearXmlAPartirDeJson(plantillaXml);
            dimensionInstitucion.CreatTextoElementoMiembroTipificado();
            contexto.ValoresDimension.push(dimensionInstitucion);

            this.abaxService.inyectarContextoADocumentoInstancia(contexto);

            return contexto;
        }

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IXbrlDesgloseCreditosCNBV2019Scope, abaxXBRLServices: services.AbaxXBRLServices, $timeout: ng.ITimeoutService) {
            var self = this;

            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$timeout = $timeout;
            //plugins.XbrlPluginUtils.presentarLoaderFormatos();
            this.init();

            var promiseA = self.inicializaCaposEdicionDimensioInsitucion();
            var promiseB = self.inicializarDetalleInstituciones();

            promiseA.then(function (): void {
                promiseB.then(function (): void {
                    //self.reEvaluaElementosPlantilla();
                    var etiquetasCampoCaptura = $('xbrl\\:campo-captura:not(.inicializado)');
                    etiquetasCampoCaptura.xbrlCampoCaptura();
                    etiquetasCampoCaptura.addClass('inicializado');
                    etiquetasCampoCaptura.find('.div-default').removeClass('div-default');
                    self.reEvaluaColumnasFijas().then(function (): void {
                        plugins.XbrlPluginUtils.ocultarLoaderFormatos();
                    });

                });
            });

        }
    }
    XbrlDesgloseCreditosCNBV2019Controller.$inject = ['$scope', 'abaxXBRLServices', '$timeout'];

    /**
     * Define la estructura del Scope de la Directiva para la edición / visualización de datos de tipo numérico
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IXbrlDesgloseCreditosCNBV2019Scope extends ng.IScope {

        /** Agrupa los diferentes valores de la dimensión tipificada institución */
        valoresDimensionInstitucion: Array<string>;

        /** Identificadores de las dimensiones de las tablas de las instituciones*/
        idRenglonDimensionInstitucionValoresInstitucion: { [NombreInstitucion: string]: string };

        /** Agrupa los diferentes valores de la dimensión tipificada institución de acuerdo a su uso en los diferentes elementos primarios */
        valoresDimensionInstitucionPorElementoPrimario: { [idElementoPrimario: string]: Array<string> };

        /** Copia de los valores utilizados en la dimensión tipificada institución para poder detectar cambios en los valores y propagarlos al modelo final */
        valoresTemporalDimensionInstitucionPorElementoPrimario: { [idElementoPrimario: string]: Array<string> };

        /** Agrupa los contextos por el valor de la dimensión tipificada institución para una acceso más rápido */
        contextosPorValorDimensionInstitucion: { [valorDimensionInstitucion: string]: Array<string> };

        /** Agrupa los contextos por la combinación de sus valores dimensionales para una acceso más rápido */
        contextosPorLlaveDimension: { [valorDimensionInstitucion: string]: { [qNameMiembroIntervalo: string]: { [qNameMiembroDimension: string]: { [tipoPeriodo: number]: string } } } };

        /** Agrupoa los contextos totales por el valor de la dimensión tipificada institución para una acceso más rápido */
        contextoTotalesPorDimensionInstitucion: { [valorDimensionInstitucion: string]: string };


        /**
         * Agrega un valor a la dimensión institución verificando que no se encuentre duplicado.
         *
         * @param idElementoPrimario el identificador del elemento primario que desea utilizar el valor de la dimensión
         * @param nombreInstitucion el identificador 
         */
        agregarValorDimensionInstitucion(idElementoPrimario: string): void;

        /**
         * Actualiza los contextos asociados a las diferentes combinaciones de dimensiones explícitas del desglose de créditos con el valor de la dimensión tipificada anterior con el nuevo valor.
         *
         * @param valorDimensionActual el valor a actualizar de la dimensión tipificada institución.
         * @param valorDimensionAnterior el valor anterior de la dimension tipificada institución.
         * @return Si fue posible actualizar el valor de la institución.
         */
        actualizarValorDimensionInstitucion(valorDimensionAnterior: string, valorDimensionActual: string): boolean;

        /**
         * Obtiene el identificador del contexto que contiene los valores dimensionales proporcionados como parámetros. Si no existe, lo crea.
         *
         * @param valorDimensionInstitucion el valor como cadena que deberá contener la dimensión tipificada institución.
         * @param idMiembroIntervaloTiempo el identificador del miembro de la dimensión explíctica intervalo de tiempo
         * @param idMiembroMoneda el identificador del miembro de la dimensión explíctica moneda
         * @param esPeriodoDuracion Bandera que indica si el periodo es de tipo duración (true) o instante (false).
         */
        obtenerIdContexto(valorDimensionInstitucion: string, idMiembroIntervaloTiempo: string, idMiembroMoneda: string, esPeriodoDuracion: boolean): string;

        /**
         * Obtiene el identificador de la unidad de acuerdo a lo definido por la plantilla.
         *
         * @return el identificador de la unidad de tipo moneda de la plantilla actual.
         */
        obtenerIdUnidadMoneda(): string;

        /**
         * Obtiene el identificador de la unidad de acuerdo a lo definido por la plantilla.
         *
         * @return el identificador de la unidad de tipo pure de la plantilla actual.
         */
        obtenerIdUnidadPure(): string;

        /**
         * Obtiene el identificador del hecho a capturar que pertenezca al contexto de los valores totales de las dimensiones explícitas del desglos de créditos. Si no existe el hecho, lo crea.
         *
         * @param valorDimensionInstitucion el valor que deberá tener el contexto en la dimensión tipificada institución.
         * @return el identificador del hecho para capturar.
         */
        obtenerIdHecho(valorDimensionInstitucion: string): string;

        /** Valor por defecto que será asignado a los campos fecha **/
        valorDefaultFecha: string;

        /** Identificador de la unidad moenda que será utilizada para los hechos de moneda. **/
        idUnidadMoneda: string;

        /** Identificador de la unidad moenda que será utilizada para los hechos de moneda. **/
        idUnidadPure: string;

        /** 
        * Elimina los contextos y hechos relacionados a una dimensión Institución 
        * @param valorDimensionInstitucion Nombre de la dimensión institución que se pretende eliminar.
        * @param idContextoPrimario Identificador del contexto primario al que pertenece la dimensión institución.
        **/
        eliminarElementosDimensionInstitucion(valorDimensionInstitucion: string, idContextoPrimario): ng.IPromise<boolean>;

        /** Indica si se trata del último campo en aparecer en pantalla */
        ultimoCampo: boolean;

        /** El identificador del último campo que aparece en pantalla */
        idUltimoCampo: string;

        /** Actualiza el estatus del último campo en aparecer en pantalla */
        actualizarUltimoCampo(): boolean;

        /** Información de la plantilla del renglon de la dimension institucion*/
        plantillaRenglonDimensionInstitucion: JQuery;
        /**
        * Plantilla para mostrar y editar el valor de una dimensión institución.
        **/
        plantillaCampoTexotDimensionInstitucion: JQuery;

    }

    /**
     * Implementación de una directiva para presentar el desglose de créditos.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlDesgloseCNBV2019Creditos {

        /**
         * Obtiene la definición de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlDesgloseCNBV2019CreditosDirective(): ng.IDirective {

            return {
                restrict: 'A',
                controller: XbrlDesgloseCreditosCNBV2019Controller
            };
        }
    }


    /**Dto del campo de texto para poder hacer uso de la propiedad model. **/
    export interface IXbrlCampoTextoCNBV2019Dto {
        /**Valor de campo de texto. **/
        valor: string;
        /**Valor anterior **/
        valorAnterior?: string;
    }

    /**Campo de captura de texto generico. **/
    export interface IXbrlCampoTextoGenericoDirectiveCNBV2019Scope extends ng.IScope {

        /** Valor con el que se inicializa el campo de captura.**/
        xbrlValor: string;

        /** El valor temporal que almacena los posibles cambios al modelo */
        valorTemporal: IXbrlCampoTextoCNBV2019Dto;

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
    export class XbrlCampoTextoCNBV2019Generico {

        /** 
        * Método utilizado por angular para la generación de la directiva.
        *
        * @return Objeto con datos de configuración para la generación de la nueva directiva.
        */
        public static XbrlCampoTextoGenericoCNBV2019Directive(): ng.IDirective {
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
                controller: XbrlCampoTextoGenericoCNBV2019Controller,
                templateUrl: "ts/templates/taxonomias/ifrs_mx_20190101/extensions/template-xbrl-texto-generico.html?version=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                link: function ($scope: IXbrlCampoTextoGenericoDirectiveCNBV2019Scope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controllers: any) {

                    $scope.contenidoEnTablaExcel = false;
                    //Si se inyectaron controladores
                    if (controllers && controllers.length && controllers.length > 0) {
                        //Iteramos los controladores inyectados y asignamos a los controllers segun corresponda.
                        var index: number;
                        /*for (index = 0; index < controllers.length; index++) {
                            if (controllers[index] instanceof abaxXBRL.directives.XbrlTablaExcelController) {
                                $scope.tablaExcelController = controllers[index];
                                $scope.contenidoEnTablaExcel = true;
                                continue;
                            }
                        }*/
                    }
                }
            };
        }
    }

    /**Clase que define el controlador para la dierctiva de campo generico. **/
    export class XbrlCampoTextoGenericoCNBV2019Controller {
        /**Scope de la directiva de campo de texto generico. **/
        private $scope: IXbrlCampoTextoGenericoDirectiveCNBV2019Scope;
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
        constructor($scope: IXbrlCampoTextoGenericoDirectiveCNBV2019Scope, $element: ng.IAugmentedJQuery) {
            this.$scope = $scope;
            this.$element = $element;
            this.init();
        }
    }
    /**Inicializamos los atricutos que deberán inyectarse al controller una vez generado. **/
    XbrlCampoTextoGenericoCNBV2019Controller.$inject = ['$scope', '$element'];


    var desgloseCreditosModule2019: ng.IModule = angular.module('abaxXbrlDesgloseCreditosViewerCNBV2019', ['abaxXBRLViewer', 'pascalprecht.translate', 'tmh.dynamicLocale']);
    
    desgloseCreditosModule2019.controller('xbrlDesgloseCreditosCNBV2019Controller', abaxXBRL.templates.extensions.XbrlDesgloseCreditosCNBV2019Controller);
    desgloseCreditosModule2019.directive('xbrlDesgloseCreditosCnbv2019', abaxXBRL.templates.extensions.XbrlDesgloseCNBV2019Creditos.XbrlDesgloseCNBV2019CreditosDirective);

    desgloseCreditosModule2019.directive('xbrlCampoTextoGenericoCnbv2019', abaxXBRL.templates.extensions.XbrlCampoTextoCNBV2019Generico.XbrlCampoTextoGenericoCNBV2019Directive);
    desgloseCreditosModule2019.controller('xbrlCampoTextoGenericoCNBV2019Controller', abaxXBRL.templates.extensions.XbrlCampoTextoGenericoCNBV2019Controller);

    desgloseCreditosModule2019.config(['$translateProvider', function ($translateProvider: ng.translate.ITranslateProvider) {

        $translateProvider.translations('en', {
            DESGLOSE_CREDITOS_NOMBRE_INSTITUCION_UNICO: 'The name assigned to the institution must be unique  El nombre de la institución debe ser único para cada renglón de datos del desglose de créditos.',
            DESGLOSE_CREDITOS_ERROR_DATOS: 'Data error',
            DESGLOSE_CREDITOS_ACEPTAR: 'Ok',
            DESGLOSE_CREDITOS_CONFIRMAR_ELIMINAR_INSTITUCION: 'Please confirm that you want to remove the data related to the institution: {{valorDimensionInstitucion}}.',
            DESGLOSE_CREDITOS_ELIMINAR_INSTITUCION: 'Delete institution',
            DESGLOSE_CREDITOS_SI: 'Yes',
            DESGLOSE_CREDITOS_NO: 'No'
        });

        $translateProvider.translations('es', {
            DESGLOSE_CREDITOS_NOMBRE_INSTITUCION_UNICO: 'El nombre de la institución debe ser único para cada renglón de datos del desglose de créditos.',
            DESGLOSE_CREDITOS_ERROR_DATOS: 'Error de datos',
            DESGLOSE_CREDITOS_ACEPTAR: 'Aceptar',
            DESGLOSE_CREDITOS_CONFIRMAR_ELIMINAR_INSTITUCION: '¿Esta seguro de que quiere eliminar todos los datos de la institución {{valorDimensionInstitucion}}?',
            DESGLOSE_CREDITOS_ELIMINAR_INSTITUCION: 'Eliminar Institución',
            DESGLOSE_CREDITOS_SI: 'Si',
            DESGLOSE_CREDITOS_NO: 'No'
        });

        $translateProvider.preferredLanguage('en');
    }]);



}