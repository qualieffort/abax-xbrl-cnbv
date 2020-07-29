///<reference path="../../../../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../../../../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../../../../../scripts/typings/impromptu/jquery-impromptu.d.ts" />
///<reference path="../../../../visorXbrl.ts" /> 
///<reference path="../../../../directivasAbax.ts" /> 
///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../../scripts/typings/moment/moment.d.ts" />

module abaxXBRL.templates.extensions.dip {

    /**
       * Implementación del controlador encargado de crear el comportamiento necesario para presentar el formato de distribución de ingresos por producto en pantalla.
       *
       * @author José Antonio Huizar Moreno
       * @version 1.0
       */
    export class XbrlDistribucionIngresosProductoController {

        /** El scope del controlador */
        private $scope: IXbrlDistribucionIngresosProductoScope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** El servicio para ejecutar tareas asíncronas de angular */
        private $timeout: ng.ITimeoutService;
        
        /** Apunta a la instancia acutal del controlador. **/
        private controllerSelf = this;

        /** Apunta al documento de instancia**/
        private documentoInstancia: model.DocumentoInstanciaXbrl;

        /** El nombre de la dimensión tipificada principales marcas */
        public static get NOMBRE_DIMENSION_PRINCIPALES_MARCAS(): string { return 'PrincipalesMarcasDomain'; }

        /** El nombre de la dimensión tipificada línea de productos */
        public static get NOMBRE_DIMENSION_LINEA_PRODUCTOS(): string { return 'PrincipalesProductosOLineaDeProductosDomain'; }

        /** El espacio de nombres de la dimensión tipificada principales marcas */
        public static get ESPACIO_NOMRES_DIMENSION_PRINCIPALES_MARCAS(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05'; }

        /** El espacio de nombres de la dimensión tipificada línea de productos */
        public static get ESPACIO_NOMRES_DIMENSION_LINEA_PRODUCTOS(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05'; }

        /** El espacio de nombres de la dimensión tipificada línea de productos */
        public static get ESPACIO_NOMRES_DIMENSION_TIPO_INGRESO(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05'; }

        /** Contiene la plantilla que deberá usarse para definir un nuevo valor de la dimensión tipificada principales marcas */
        public static get TEMPLATE_VALOR_DIMENSION_PRINCIPALES_MARCAS(): string { return '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205="http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05">#valorDimensionMarcas</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>'; }

        /** Contiene la plantilla que deberá usarse para definir un nuevo valor de la dimensión tipificada línea de productos */
        public static get TEMPLATE_VALOR_DIMENSION_LINEA_PRODUCTOS(): string { return '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205="http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05">#valorDimensionLineaProductos</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>'; }

        /** Contiene el nombre completamente calificado de la dimensión implícita principales marcas */
        public static get QNAME_DIMENSION_PRINCIPALES_MARCAS(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje'; }

        /** Contiene el Id de la dimensión de principales marcas */
        public static get ID_DIMENSION_PRINCIPALES_MARCAS(): string { return 'ifrs_mx-cor_20141205_PrincipalesMarcasEje'; }

        /** Contiene el nombre completamente calificado de la dimensión implícita línea de productos */
        public static get QNAME_DIMENSION_LINEA_PRODUCTOS(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje'; }

        /** Contiene el Id de la dimensión de líneas de productos */
        public static get ID_DIMENSION_LINEA_PRODUCTOS(): string { return 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje'; }

        /** Contiene el nombre completamente calificado de la dimensión explítica tipo de ingreso */
        public static get QNAME_DIMENSION_TIPO_DE_INGRESO(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje'; }

        /** Contiene el Id de la dimensión de tipos de ingreso */
        public static get ID_DIMENSION_TIPO_DE_INGRESO(): string { return 'ifrs_mx-cor_20141205_TipoDeIngresoEje'; }

        /** El nombre del elemento que contiene el prefijo de acuerdo a la librería X2JS */
        public static get X2JS_ELEMENTO_PREFIX(): string { return '__prefix'; }

        /** El prefijo del nombre del elemento que contiene el xmlns de acuerdo a la librería X2JS */
        public static get X2JS_PREFIJO_ELEMENTO_XMLNS(): string { return '_xmlns:'; }

        /** El nombre del elemento que contiene el texto contenido en un nodo xml de acuerdo a la librería X2JS */
        public static get X2JS_ELEMENTO_TEXT(): string { return '__text'; }

        /** El prefijo del nombre de la institución que se asignará a todos los nuevos elementos de la dimensión explícita creados por el editor */
        public static get PREFIJO_NOMBRE_MARCA_DEFECTO(): string { return 'NUEVA MARCA'; }

        /** El prefijo del nombre de la institución que se asignará a todos los nuevos elementos de la dimensión explícita creados por el editor */
        public static get PREFIJO_NOMBRE_PRODUCTO_DEFECTO(): string { return 'NUEVO PRODUCTO'; }

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
                //setTimeout(function () { plugins.XbrlPluginUtils.ocultarLoaderFormatos(); }, 1000);
                setTimeout(function () { shared.service.AbaxXBRLUtilsService.reAjustaCeldasTabla(null); }, 333);

            });
            etiquetasCampoCaptura.addClass('inicializado');

        }

        /** 
        * Reevalua los elementos de la plantilla 
        **/
        public reEvaluaElementosPlantilla(): void {
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
        * Genera el elemento miembro tipificado para una marca en particular. 
        * @param valorMiembro Nombre del miembro que será anexado a la dimensión de Principales Marcas.
        * @return Nombre del mimembro tipificado a al taxonomía actual.
        **/
        private generaElementoMiembroTipificadoMarca(valorMiembro) {
            /*var plantillaXml = abaxXBRL.utils.XmlUtils.CrearJsonAPartirDeXml(XbrlDistribucionIngresosProductoController.TEMPLATE_VALOR_DIMENSION_PRINCIPALES_MARCAS);
            plantillaXml[XbrlDistribucionIngresosProductoController.NOMBRE_DIMENSION_PRINCIPALES_MARCAS][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_TEXT] = valorMiembro;
            return abaxXBRL.utils.XmlUtils.CrearXmlAPartirDeJson(plantillaXml);*/
            var valorCodificadoXML = shared.service.AbaxXBRLUtilsService.xmlEncode(valorMiembro);
            //Se cambió a únicamente reemplazar el valor del template
            return XbrlDistribucionIngresosProductoController.TEMPLATE_VALOR_DIMENSION_PRINCIPALES_MARCAS.replace("#valorDimensionMarcas", valorCodificadoXML);
        }

        /**
        * Genera el elemento miembro tipificado para un producto en particular. 
        * @param valorMiembro Nombre del miembro que será anexado a la dimensión de Productos.
        * @return Nombre del mimembro tipificado a al taxonomía actual.
        **/
        private generaElementoMiembroTipificadoProducto(valorMiembro) {
            /*var plantillaXml = abaxXBRL.utils.XmlUtils.CrearJsonAPartirDeXml(XbrlDistribucionIngresosProductoController.TEMPLATE_VALOR_DIMENSION_LINEA_PRODUCTOS);
            plantillaXml[XbrlDistribucionIngresosProductoController.NOMBRE_DIMENSION_LINEA_PRODUCTOS][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_TEXT] = valorMiembro;
            return abaxXBRL.utils.XmlUtils.CrearXmlAPartirDeJson(plantillaXml);*/
            var valorCodificadoXML = shared.service.AbaxXBRLUtilsService.xmlEncode(valorMiembro);
            return XbrlDistribucionIngresosProductoController.TEMPLATE_VALOR_DIMENSION_LINEA_PRODUCTOS.replace("#valorDimensionLineaProductos", valorCodificadoXML);
        }

        /**
        * Actualiza el valor de los elementos miembro tipificados de un miembro en particularo por un nuevo valor, para todos los contextos de la lista dada.
        * @param contextosIds Lista con los identificadores de los contextos a evaluar para actualizar su miembro tipificado.
        * @param valorDimensionAnterior Valor del miembro que se pretende actualizar en las dimensiones de los contextos.
        * @param valorDimensionNuevo Nuevo nombre del miembro que se utilizará para generar el nuevo valor del elemento típificado de las dimensiones de los contextos.
        * @param esMarca  Indica si se esta generando para la dimensión marca o para la dimensión producto.
        **/
        private actualizaElementoMiembroTipificado(contextosIds: Array<string>, valorDimensionAnterior: string, valorDimensionNuevo: string, esMarca: boolean) {
            var self = this.controllerSelf;
            var scope: IXbrlDistribucionIngresosProductoScope = self.$scope;
            var documentoInstancia: model.DocumentoInstanciaXbrl = self.documentoInstancia;
            var miembroTipificadoAnterior: string = esMarca ? self.generaElementoMiembroTipificadoMarca(valorDimensionAnterior) : self.generaElementoMiembroTipificadoProducto(valorDimensionAnterior);
            var miembroTipificadoNuevo: string = esMarca ? self.generaElementoMiembroTipificadoMarca(valorDimensionNuevo) : self.generaElementoMiembroTipificadoProducto(valorDimensionNuevo);
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
        private buscaIdContextoPorQNameItemMiembro(idsContextos: Array<string>, qNameMiembro: string) {

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
                    for (var indexDimension: number = 0; indexDimension < contexto.ValoresDimension.length; indexDimension++) {
                        var dimension: model.DimensionInfo = contexto.ValoresDimension[indexDimension];
                        if (dimension.QNameItemMiembro == qNameMiembro) {
                            return idContexto;
                        }
                    }
                }
            }
            return null;
        }

        /**
         * Crea un contexto para su uso en la dsitribución de ingresos a partir de los valores dimensionales especificados y las características solicitadas para el nuevo contexto.
         *
         * @param valorDimensionMarca El valor de la dimensión tipificada principales marcas.
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
        private crearContextoDeDistribucionDeIngresos(valorDimensionMarca: string, valorDimensionProducto: string, qNameMiembroTipoIngreso: string, idItemMiembroTipoIngreso: string, emisora: string, esquemaEmisora: string, tipo: number, fechaInicio: string, fechaFin?: string): abaxXBRL.model.Contexto {
            var contexto = new abaxXBRL.model.Contexto();

            contexto.ContieneInformacionDimensional = false;
            contexto.Escenario = null;
            contexto.Id = "CDI" + abaxXBRL.utils.UUIDUtils.generarUUID();
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

            var dimensionTipoIngreso = new abaxXBRL.model.DimensionInfo();
            dimensionTipoIngreso.Explicita = true;
            dimensionTipoIngreso.QNameDimension = XbrlDistribucionIngresosProductoController.QNAME_DIMENSION_TIPO_DE_INGRESO;
            dimensionTipoIngreso.IdDimension = XbrlDistribucionIngresosProductoController.ID_DIMENSION_TIPO_DE_INGRESO;
            dimensionTipoIngreso.QNameItemMiembro = qNameMiembroTipoIngreso;
            dimensionTipoIngreso.IdItemMiembro = idItemMiembroTipoIngreso;

            contexto.ValoresDimension.push(dimensionTipoIngreso);

            var dimensionMarca = new abaxXBRL.model.DimensionInfo();
            dimensionMarca.Explicita = false;
            dimensionMarca.QNameDimension = XbrlDistribucionIngresosProductoController.QNAME_DIMENSION_PRINCIPALES_MARCAS;
            dimensionMarca.IdDimension = XbrlDistribucionIngresosProductoController.ID_DIMENSION_PRINCIPALES_MARCAS;
            dimensionMarca.ElementoMiembroTipificado = this.generaElementoMiembroTipificadoMarca(valorDimensionMarca);
            dimensionMarca.CreatTextoElementoMiembroTipificado();
            contexto.ValoresDimension.push(dimensionMarca);

            var dimensionProducto = new abaxXBRL.model.DimensionInfo();
            dimensionProducto.Explicita = false;
            dimensionProducto.QNameDimension = XbrlDistribucionIngresosProductoController.QNAME_DIMENSION_LINEA_PRODUCTOS;
            dimensionProducto.IdDimension = XbrlDistribucionIngresosProductoController.ID_DIMENSION_LINEA_PRODUCTOS;
            dimensionProducto.ElementoMiembroTipificado = this.generaElementoMiembroTipificadoProducto(valorDimensionProducto);
            dimensionProducto.CreatTextoElementoMiembroTipificado();
            contexto.ValoresDimension.push(dimensionProducto);

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
                QNameDimension: XbrlDistribucionIngresosProductoController.QNAME_DIMENSION_LINEA_PRODUCTOS
            }));
            valoresDimensionComparar.push(new abaxXBRL.model.DimensionInfo().deserialize({
                Explicita: false,
                QNameDimension: XbrlDistribucionIngresosProductoController.QNAME_DIMENSION_PRINCIPALES_MARCAS
            }));
            valoresDimensionComparar.push(new abaxXBRL.model.DimensionInfo().deserialize({
                Explicita: true,
                QNameDimension: XbrlDistribucionIngresosProductoController.QNAME_DIMENSION_TIPO_DE_INGRESO
            }));

            for (var i = 0; i < idsContextosRevisar.length; i++) {
                var contexto = documentoInstancia.ContextosPorId[idsContextosRevisar[i]];
                if (contexto && contexto != null) {
                    if (contexto.Entidad.Id === emisora && contexto.Entidad.EsquemaId === esquemaEmisora && contexto.ContieneInformacionDimensional && contexto.ValoresDimension && contexto.ValoresDimension.length && contexto.ValoresDimension.length == valoresDimensionComparar.length) {
                        var copiaComparar = valoresDimensionComparar.slice();
                        var valorDimensionMarca: string = null;
                        var valorDimensionProducto: string = null;
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
                                        var nombreDimensionEvaluada = XbrlDistribucionIngresosProductoController.NOMBRE_DIMENSION_PRINCIPALES_MARCAS;
                                        var espacionNombresDimensionEvaluada = XbrlDistribucionIngresosProductoController.ESPACIO_NOMRES_DIMENSION_PRINCIPALES_MARCAS;

                                        if (elementoMiembroTipificado[nombreDimensionEvaluada]) {
                                            if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_PREFIX]) {
                                                var prefijo = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_PREFIX];
                                                if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_PREFIJO_ELEMENTO_XMLNS + prefijo]) {
                                                    var xmlns = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_PREFIJO_ELEMENTO_XMLNS + prefijo];
                                                    if (xmlns === espacionNombresDimensionEvaluada) {
                                                        if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_TEXT]) {
                                                            valorDimensionMarca = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_TEXT];
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                        //Luego determinamos si se trata de la dimension PRODUCTOS
                                        var nombreDimensionEvaluada = XbrlDistribucionIngresosProductoController.NOMBRE_DIMENSION_LINEA_PRODUCTOS;
                                        var espacionNombresDimensionEvaluada = XbrlDistribucionIngresosProductoController.ESPACIO_NOMRES_DIMENSION_LINEA_PRODUCTOS;

                                        if (elementoMiembroTipificado[nombreDimensionEvaluada]) {
                                            if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_PREFIX]) {
                                                var prefijo = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_PREFIX];
                                                if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_PREFIJO_ELEMENTO_XMLNS + prefijo]) {
                                                    var xmlns = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_PREFIJO_ELEMENTO_XMLNS + prefijo];
                                                    if (xmlns === espacionNombresDimensionEvaluada) {
                                                        if (elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_TEXT]) {
                                                            valorDimensionProducto = elementoMiembroTipificado[nombreDimensionEvaluada][XbrlDistribucionIngresosProductoController.X2JS_ELEMENTO_TEXT];
                                                        }
                                                    }
                                                }
                                            }
                                        }


                                    } else {
                                        if (contexto.ValoresDimension[j].QNameDimension === XbrlDistribucionIngresosProductoController.QNAME_DIMENSION_TIPO_DE_INGRESO) {
                                            qNameTipoIngreso = contexto.ValoresDimension[j].QNameItemMiembro;
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

                        if (equivalente && valorDimensionMarca != null && valorDimensionMarca != "TODAS" && valorDimensionProducto != "TODOS") {
                            self.agregaIndices(contexto.Id, valorDimensionMarca, valorDimensionProducto, qNameTipoIngreso);
                        }

                    }
                }
            }
        }
        /** Agrega los indices requeridos **/
        private agregaIndices(idContexto: string, valorDimensionMarca: string, valorDimensionProducto: string, qNameTipoIngreso: string): void {

            var scope = this.$scope;
            var documentoInstancia = this.documentoInstancia;

            if ($.inArray(valorDimensionMarca, scope.valoresDimensionMarca) == -1) {
                scope.valoresDimensionMarca.push(valorDimensionMarca);
            }

            if (!scope.contextosPorValorDimensionMarca[valorDimensionMarca]) {
                scope.contextosPorValorDimensionMarca[valorDimensionMarca] = new Array<string>();
            }

            if ($.inArray(idContexto, scope.contextosPorValorDimensionMarca[valorDimensionMarca]) == -1) {
                scope.contextosPorValorDimensionMarca[valorDimensionMarca].push(idContexto);
            }

            if (valorDimensionProducto != null) {

                if (!scope.valoresDimensionProductoPorMarca[valorDimensionMarca]) {
                    scope.valoresDimensionProductoPorMarca[valorDimensionMarca] = new Array<string>();
                }
                if ($.inArray(valorDimensionProducto, scope.valoresDimensionProductoPorMarca[valorDimensionMarca]) == -1) {
                    scope.valoresDimensionProductoPorMarca[valorDimensionMarca].push(valorDimensionProducto);
                }

                if (!scope.contextosPorValorDimensionProducto[valorDimensionMarca]) {
                    scope.contextosPorValorDimensionProducto[valorDimensionMarca] = {};
                }
                if (!scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto]) {
                    scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto] = new Array<string>();
                }
                if ($.inArray(idContexto, scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto]) == -1) {
                    scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto].push(idContexto);
                }

                if (qNameTipoIngreso != null) {

                    if (!scope.contextosPorLlaveDimension[valorDimensionMarca]) {
                        scope.contextosPorLlaveDimension[valorDimensionMarca] = {};
                    }
                    if (!scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto]) {
                        scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto] = {};
                    }

                    scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto][qNameTipoIngreso] = idContexto;

                    //console.log("agregando\n[" + valorDimensionMarca + "]\n[" + valorDimensionProducto + "]\n[" + qNameTipoIngreso + "]\n" + idContexto);

                    var hechos = documentoInstancia.HechosPorIdContexto[idContexto];

                    if (hechos && hechos.length && hechos.length > 0) {
                        for (var l = 0; l < hechos.length; l++) {
                            var hecho = documentoInstancia.HechosPorId[hechos[l]];
                        }
                    }
                }
            }
        }

        private eliminarProductoDefinitivamente(valorDimensionMarca: string, valorDimensionProducto: string, fechaInicioTrimestre: string, fechaFinTrimestre: string): void {
            //Primero eliminamos todos los hechos del documento de instancia.
            var self = this;
            var scope = self.$scope;
            var documentoInstancia = self.documentoInstancia;
            var contexto: model.Contexto;
            var contextosIds: Array<string> = scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto];

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

            //Despues eliminamos todos los elementos de la dimensión institución de los indices del desglose de creditos.
            scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto] = undefined;
            delete scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto];

            scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto] = undefined;
            delete scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto];

            var indiceProducto = $.inArray(valorDimensionProducto, scope.valoresDimensionProductoPorMarca[valorDimensionMarca]);
            if (indiceProducto != -1) {
                scope.valoresDimensionProductoPorMarca[valorDimensionMarca].splice(indiceProducto, 1);
            }

            //Finalmente se elimina la formula relacionada 
            var idFormula = this.generaIdFormula(valorDimensionMarca, valorDimensionProducto);
            self.abaxService.eliminaFormula(idFormula);
            self.abaxService.reevaluaFormulasPorConcepto("ifrs_mx-cor_20141205_ImporteDeIngresos");
        }

        private generaIdFormula(marca: string, producto: string): string {
            var epacios = new RegExp("[ \t\r\n]", "g");
            var idFormula = "formula108_";
            idFormula += marca.trim().replace(epacios, "_");
            idFormula += '_' + producto.trim().replace(epacios, "_");
            return idFormula;
        }

        /**
        * Formula para validar el total de ingresos para un producto en particular.
        * @param marca Nombre de elemento de la dimensión marca a la que pertenece el producto.
        * @param producto Nombre del elemento de la dimensión producto a la que pertenece el elemento.
        * @return Identificador de la nueva definición de formula.
        **/
        private obtenIdFormulaTotalIngresos(marca: string, producto: string): string {

            var idFormula = this.generaIdFormula(marca, producto);
            var formula = this.abaxService.obtenDefinicionFormulaPorId(idFormula);
            var $util = shared.service.AbaxXBRLUtilsService;
            if (!formula) {
                formula = new model.DefinicionFormula().deserialize(
                    {
                        Id: idFormula,
                        TipoFormula: model.TipoFormula.ValueAssertion,
                        Expresion: 'bignumber(variable1) == bignumber(variable2) + bignumber(variable3) + bignumber(variable4)',
                        MensajeExito: 'El importe del hecho del {variable1} es igual a la suma de los importes de ingreso del producto "' + producto + '" de la maraca "' + marca + '".',
                        MensajeError: 'El importe del hecho del {variable1} debería ser igual a la suma de los importes de ingreso del producto "' + producto + '" de la maraca "' + marca + '".',
                        VariablesCoincidenPeriodo: true,
                        DefinicionVariables: {
                            'variable1': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable1',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosTotalesMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosTotalesMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(marca) + '</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: $util.xmlEncode(marca)
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(producto) + '</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: $util.xmlEncode(producto)
                                    }
                                ]
                            }),
                            'variable2': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable2',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosNacionalesMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosNacionalesMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(marca) + '</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: $util.xmlEncode(marca)
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(producto) + '</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: $util.xmlEncode(producto)
                                    }
                                ]
                            }),
                            'variable3': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable3',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosPorExportacionMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosPorExportacionMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(marca) + '</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: $util.xmlEncode(marca)
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(producto) + '</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: $util.xmlEncode(producto)
                                    }
                                ]
                            }),
                            'variable4': new model.DefinicionVariableFormula().deserialize({
                                Id: 'variable4',
                                IdConcepto: 'ifrs_mx-cor_20141205_ImporteDeIngresos',
                                PuedeCrearse: false,
                                PuedeEliminarse: false,
                                ValorFallback: '0',
                                FiltrosDimension: [
                                    {
                                        Explicita: true,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:TipoDeIngresoEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_TipoDeIngresoEje',
                                        QNameItemMiembro: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IngresosDeSubsidiariasEnElExtranjeroMiembro',
                                        IdItemMiembro: 'ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro'
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesMarcasEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesMarcasEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(marca) + '</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>',
                                        ValorTipificado: $util.xmlEncode(marca)
                                    },
                                    {
                                        Explicita: false,
                                        QNameDimension: 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:PrincipalesProductosOLineaDeProductosEje',
                                        IdDimension: 'ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje',
                                        ElementoMiembroTipificado: '<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">' + $util.xmlEncode(producto) + '</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>',
                                        ValorTipificado: $util.xmlEncode(producto)
                                    }
                                ]
                            })

                        }
                    });
                this.abaxService.agregaFormulaPlantilla(formula);
                this.abaxService.evaluaFormula(formula.Id);
            }
            return formula.Id;
        }



        /**
        * Inicializa los elementos de controller.
        **/
        private init(): void {
            //Proxy para acceder a la instancia del controler.
            var self: XbrlDistribucionIngresosProductoController = this;
            var scope: IXbrlDistribucionIngresosProductoScope = self.$scope;
            //Variables locales para la inicialización de los elementos del scope.
            var documentoInstancia: model.DocumentoInstanciaXbrl = self.abaxService.getDocumentoInstancia();
            var definicionPlantilla: model.DefinicionDePlantillaXbrl = self.abaxService.getDefinicionPlantilla();
            var fechaInicioPeriodo: string = definicionPlantilla.obtenerVariablePorId('fecha_2015_01_01');
            var fechaFinTrimestre: string = definicionPlantilla.obtenerVariablePorId('fecha_2015_09_30');
            var emisora: string = definicionPlantilla.obtenerVariablePorId('nombreEntidad');
            var esquemaEmisora: string = definicionPlantilla.obtenerVariablePorId('esquemaEntidad');
            //Elementos del último campo.
            scope.ultimoCampo = true;
            scope.actualizarUltimoCampo = function () {
                if (!self.$scope.ultimoCampo) {
                    self.$scope.ultimoCampo = true;
                }
                return self.$scope.ultimoCampo;
            }
            //Inicializamos las unidades.
            scope.obtenerIdUnidadMoneda = function (): string {

                var hechoTasaInteresOSobretasa = new abaxXBRL.model.Hecho();
                var espacionNombresUnidades = definicionPlantilla.obtenerVariablePorId('medida_http___www_xbrl_org_2003_iso4217');
                var nombreUnidadMoneda = definicionPlantilla.obtenerVariablePorId('medida_MXN');
                var unidadMoneda = self.abaxService.ObtenerUnidadPorelementos(model.Unidad.MEDIDA, espacionNombresUnidades, nombreUnidadMoneda);
                return unidadMoneda.Id;
            }
            scope.idUnidadMoneda = scope.obtenerIdUnidadMoneda();

            /**Proxy que inicializa la referencia a la formula **/
            scope.obtenIdFormulaTotalIngresos = function (marca: string, producto: string): string { return self.obtenIdFormulaTotalIngresos(marca, producto); };

            /** Agrupa los diferentes valores de la dimensión tipificada marca */
            scope.valoresDimensionMarca = new Array<string>();

            /** Agrupa los diferentes valores de la dimensión tipificada producto de acuerdo a su uso en las diferentes marcas */
            scope.valoresDimensionProductoPorMarca = {};

            /** Agrupa los contextos por el valor de la dimensión tipificada marcas principales para una acceso más rápido */
            scope.contextosPorValorDimensionMarca = {};

            /** Agrupa los contextos por el valor de la dimensión tipificada línea de productos para una acceso más rápido */
            scope.contextosPorValorDimensionProducto = {};

            /** Agrupa los contextos por la combinación de sus valores dimensionales para una acceso más rápido */
            scope.contextosPorLlaveDimension = {};

            /**Inicializa los indices para el manejo de una nueva dimensión marca **/
            scope.agregarValorDimensionMarca = function (): void {

                var intentos: number = 1;
                var nombreNuevoElemento: string = XbrlDistribucionIngresosProductoController.PREFIJO_NOMBRE_MARCA_DEFECTO;
                var valoresDimensionMaraca = scope.valoresDimensionMarca;
                if (valoresDimensionMaraca) {
                    while ($.inArray(nombreNuevoElemento, valoresDimensionMaraca) != -1) {
                        nombreNuevoElemento = XbrlDistribucionIngresosProductoController.PREFIJO_NOMBRE_MARCA_DEFECTO + ' ' + intentos++;
                    }
                }

                if ($.inArray(nombreNuevoElemento, valoresDimensionMaraca) == -1) {
                    valoresDimensionMaraca.push(nombreNuevoElemento);
                }

                if (!scope.valoresDimensionProductoPorMarca[nombreNuevoElemento]) {
                    scope.valoresDimensionProductoPorMarca[nombreNuevoElemento] = new Array<string>();
                }

                if (!scope.contextosPorValorDimensionMarca[nombreNuevoElemento]) {
                    scope.contextosPorValorDimensionMarca[nombreNuevoElemento] = new Array<string>();
                }

                if (!scope.contextosPorValorDimensionProducto[nombreNuevoElemento]) {
                    scope.contextosPorValorDimensionProducto[nombreNuevoElemento] = {};
                }

                if (!scope.contextosPorLlaveDimension[nombreNuevoElemento]) {
                    scope.contextosPorLlaveDimension[nombreNuevoElemento] = {};
                }
                //Inicializamos los elementos para la reindexada.
                self.$scope.idUltimoCampo = 'FinDistribucionIngresos';
                self.$scope.ultimoCampo = false;
                $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                $('.scrollable').livequery('#' + self.$scope.idUltimoCampo, function () {
                    self.$timeout(function () {
                        self.$scope.ultimoCampo = true;
                    });

                    $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                });
            }

            /**
             * Agrega un valor a la dimensión línea de productos verificando que no se encuentre duplicado.
             *
             * @param valorDimensionMarca el valor de la dimensión implícita marcas principales asociado al nuevo valor de la línea de productos.
             */
            scope.agregarValorDimensionProducto = function (valorDimensionMarca: string): void {

                var intentos: number = 1;
                var nombreNuevoElemento: string = XbrlDistribucionIngresosProductoController.PREFIJO_NOMBRE_PRODUCTO_DEFECTO;
                var valoresDimensionProducto = scope.valoresDimensionProductoPorMarca[valorDimensionMarca];
                if (valoresDimensionProducto) {
                    while ($.inArray(nombreNuevoElemento, valoresDimensionProducto) != -1) {
                        nombreNuevoElemento = XbrlDistribucionIngresosProductoController.PREFIJO_NOMBRE_PRODUCTO_DEFECTO + ' ' + intentos++;
                    }
                }

                if ($.inArray(nombreNuevoElemento, scope.valoresDimensionProductoPorMarca[valorDimensionMarca]) == -1) {
                    scope.valoresDimensionProductoPorMarca[valorDimensionMarca].push(nombreNuevoElemento);
                }


                if (!scope.contextosPorValorDimensionProducto[valorDimensionMarca][nombreNuevoElemento]) {
                    scope.contextosPorValorDimensionProducto[valorDimensionMarca][nombreNuevoElemento] = new Array<string>();
                }

                if (!scope.contextosPorLlaveDimension[valorDimensionMarca][nombreNuevoElemento]) {
                    scope.contextosPorLlaveDimension[valorDimensionMarca][nombreNuevoElemento] = {};
                }

                //Inicializamos los elementos para la reindexada.
                self.$scope.idUltimoCampo = 'FinDistribucionIngresos';
                self.$scope.ultimoCampo = false;
                $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                $('.scrollable').livequery('#' + self.$scope.idUltimoCampo, function () {
                    self.$timeout(function () {
                        self.$scope.ultimoCampo = true;
                    });

                    $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                });
            }

            scope.actualizarValorDimensionMarca = function (valorDimensionAnterior: string, valorDimensionNuevo: string): boolean {

                //Si es el mismo valor
                if (valorDimensionAnterior == valorDimensionNuevo) {
                    return false;
                }

                var indexDimensionAnterior: number;
                //Si no se ha registrado  la institusion terminamos
                indexDimensionAnterior = $.inArray(valorDimensionAnterior, scope.valoresDimensionMarca);
                if (indexDimensionAnterior == -1) {
                    return false;
                }

                var arregloDimensiones = scope.valoresDimensionMarca;
                var indexDimensionAnterior: number = $.inArray(valorDimensionAnterior, arregloDimensiones);
                if (indexDimensionAnterior != -1) {
                    arregloDimensiones.splice(indexDimensionAnterior, 1);
                    arregloDimensiones.push(valorDimensionNuevo);
                }

                var contenidoAnterior: any = scope.valoresDimensionProductoPorMarca[valorDimensionAnterior];
                if (contenidoAnterior) {
                    scope.valoresDimensionProductoPorMarca[valorDimensionNuevo] = contenidoAnterior;
                    scope.valoresDimensionProductoPorMarca[valorDimensionAnterior] = undefined;
                    delete scope.valoresDimensionProductoPorMarca[valorDimensionAnterior];
                }

                //Actualizamos los nombres tipificados que los contextos.
                self.actualizaElementoMiembroTipificado(scope.contextosPorValorDimensionMarca[valorDimensionAnterior], valorDimensionAnterior, valorDimensionNuevo, true);

                contenidoAnterior = scope.contextosPorValorDimensionMarca[valorDimensionAnterior];
                if (contenidoAnterior) {
                    scope.contextosPorValorDimensionMarca[valorDimensionNuevo] = contenidoAnterior;
                    scope.contextosPorValorDimensionMarca[valorDimensionAnterior] = undefined;
                    delete scope.contextosPorValorDimensionMarca[valorDimensionAnterior];
                }

                contenidoAnterior = scope.contextosPorValorDimensionProducto[valorDimensionAnterior];
                if (contenidoAnterior) {
                    scope.contextosPorValorDimensionProducto[valorDimensionNuevo] = contenidoAnterior;
                    scope.contextosPorValorDimensionProducto[valorDimensionAnterior] = undefined;
                    delete scope.contextosPorValorDimensionProducto[valorDimensionAnterior];
                }


                contenidoAnterior = scope.contextosPorLlaveDimension[valorDimensionAnterior];
                if (contenidoAnterior) {
                    scope.contextosPorLlaveDimension[valorDimensionNuevo] = contenidoAnterior;
                    scope.contextosPorLlaveDimension[valorDimensionAnterior] = undefined;
                    delete scope.contextosPorLlaveDimension[valorDimensionAnterior];
                }
                //Eliminamos las formulas anteriores.
                var nombresProducto = scope.valoresDimensionProductoPorMarca[valorDimensionNuevo];
                for (var indexProducto: number = 0; indexProducto < nombresProducto.length; indexProducto++) {
                    var marca = valorDimensionAnterior;
                    var producto = nombresProducto[indexProducto];
                    var idFormula = self.generaIdFormula(marca, producto);
                    self.abaxService.eliminaFormula(idFormula);
                }


                return true;
            }

            scope.actualizarValorDimensionProducto = function (valorDimensionMarca: string, valorDimensionAnterior: string, valorDimensionNuevo: string): boolean {

                //Si es el mismo valor
                if (valorDimensionAnterior == valorDimensionNuevo) {
                    return false;
                }

                var indexDimensionAnterior: number;
                //Si no se ha registrado  la institusion terminamos
                indexDimensionAnterior = $.inArray(valorDimensionAnterior, scope.valoresDimensionProductoPorMarca[valorDimensionMarca]);
                if (indexDimensionAnterior == -1) {
                    return false;
                }

                var arregloDimensiones = scope.valoresDimensionProductoPorMarca[valorDimensionMarca];
                var indexDimensionAnterior: number = $.inArray(valorDimensionAnterior, arregloDimensiones);
                if (indexDimensionAnterior != -1) {
                    arregloDimensiones.splice(indexDimensionAnterior, 1);
                    arregloDimensiones.push(valorDimensionNuevo);
                }

                //Actualizamos los nombres tipificados que los contextos.
                self.actualizaElementoMiembroTipificado(scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionAnterior], valorDimensionAnterior, valorDimensionNuevo, false);

                var contenidoAnterior = scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionAnterior];
                if (contenidoAnterior) {
                    scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionNuevo] = contenidoAnterior;
                    scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionAnterior] = undefined;
                    delete scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionAnterior];
                }

                var contenidoAnterior2 = scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionAnterior];
                if (contenidoAnterior2) {
                    scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionNuevo] = contenidoAnterior2;
                    scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionAnterior] = undefined;
                    delete scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionAnterior];
                }

                var idFormula = self.generaIdFormula(valorDimensionMarca, valorDimensionAnterior);
                self.abaxService.eliminaFormula(idFormula);

                return true;
            }

            scope.obtenerIdContexto = function (valorDimensionMarca: string, valorDimensionProducto: string, tipoIngreso: string, idItemMiembroTipoIngreso: string): string {

                var qNameMiembroTipoIngreso = XbrlDistribucionIngresosProductoController.ESPACIO_NOMRES_DIMENSION_TIPO_INGRESO + ':' + tipoIngreso;
                if (scope.contextosPorLlaveDimension[valorDimensionMarca] && scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto] && scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto][qNameMiembroTipoIngreso]) {
                    var resultado = scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto][qNameMiembroTipoIngreso];
                    //console.log("obteniendo\n[" + valorDimensionMarca + "]\n[" + valorDimensionProducto + "]\n[" + qNameMiembroTipoIngreso + "]\n" + resultado);
                    self.reEvaluaElementosPlantilla();
                    return resultado;
                }

                var idContexto = self.buscaIdContextoPorQNameItemMiembro(scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto], qNameMiembroTipoIngreso);

                if (idContexto && idContexto != null) {
                    self.reEvaluaElementosPlantilla();
                    return idContexto;
                }

                var contextoDenominacionIntervalo = self.crearContextoDeDistribucionDeIngresos(valorDimensionMarca, valorDimensionProducto, qNameMiembroTipoIngreso, idItemMiembroTipoIngreso, emisora, esquemaEmisora, abaxXBRL.model.Periodo.DURACION, fechaInicioPeriodo, fechaFinTrimestre);
                idContexto = contextoDenominacionIntervalo.Id;
                scope.contextosPorValorDimensionMarca[valorDimensionMarca].push(idContexto);
                scope.contextosPorValorDimensionProducto[valorDimensionMarca][valorDimensionProducto].push(idContexto);
                scope.contextosPorLlaveDimension[valorDimensionMarca][valorDimensionProducto][qNameMiembroTipoIngreso] = idContexto;
                self.reEvaluaElementosPlantilla();
                return idContexto;
            }

            scope.eliminarElementosProducto = function (valorDimensionMarca: string, valorDimensionProducto: string): void {


                $.prompt("¿Esta seguro de que quiere eliminar el protducto <b>\"" + valorDimensionProducto + "\"</b> de la marca <b>\"" + valorDimensionMarca + "\"</b>?", {
                    title: "Eliminar Producto",
                    buttons: { "Si": true, "No": false },
                    submit: function (e, v, m, f) {
                        if (v) {
                            abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                            scope.$apply(function () {
                                self.eliminarProductoDefinitivamente(valorDimensionMarca, valorDimensionProducto, fechaInicioPeriodo, fechaFinTrimestre);
                            });
                        }

                    }
                });
            }

            scope.eliminarElementosDimensionMarca = function (valorDimensionMarca: string): void {

                $.prompt("¿Esta seguro de que quiere eliminar el la marca <b>\"" + valorDimensionMarca + "\"</b> con todos los productos que contiene?", {
                    title: "Eliminar Producto",
                    buttons: { "Si": true, "No": false },
                    submit: function (e, v, m, f) {
                        if (v) {
                            abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                            scope.$apply(function () {
                                var nombresProductosEliminar = [];

                                for (var indexPorducto: number = 0; indexPorducto < scope.valoresDimensionProductoPorMarca[valorDimensionMarca].length; indexPorducto++) {
                                    nombresProductosEliminar.push(scope.valoresDimensionProductoPorMarca[valorDimensionMarca][indexPorducto]);
                                }

                                for (var indexPorducto: number = 0; indexPorducto < nombresProductosEliminar.length; indexPorducto++) {
                                    var valorDimensionProducto = nombresProductosEliminar[indexPorducto];
                                    self.eliminarProductoDefinitivamente(valorDimensionMarca, valorDimensionProducto, fechaInicioPeriodo, fechaFinTrimestre);
                                }

                                scope.contextosPorLlaveDimension[valorDimensionMarca] = undefined;
                                delete scope.contextosPorLlaveDimension[valorDimensionMarca];

                                scope.contextosPorValorDimensionProducto[valorDimensionMarca] = undefined;
                                delete scope.contextosPorValorDimensionProducto[valorDimensionMarca];

                                scope.contextosPorValorDimensionMarca[valorDimensionMarca] = undefined;
                                delete scope.contextosPorValorDimensionMarca[valorDimensionMarca];

                                scope.valoresDimensionProductoPorMarca[valorDimensionMarca] = undefined;
                                delete scope.valoresDimensionProductoPorMarca[valorDimensionMarca];

                                var indiceMarca = $.inArray(valorDimensionMarca, scope.valoresDimensionMarca);
                                if (indiceMarca != -1) {
                                    scope.valoresDimensionMarca.splice(indiceMarca, 1);
                                }

                            });
                        }

                    }
                });

            }
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
        constructor($scope: IXbrlDistribucionIngresosProductoScope, abaxXBRLServices: services.AbaxXBRLServices, $timeout: ng.ITimeoutService) {

            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$timeout = $timeout;
            this.documentoInstancia = abaxXBRLServices.getDocumentoInstancia();
            this.init();
            this.reEvaluaElementosPlantilla();
        }

    }

    XbrlDistribucionIngresosProductoController.$inject = ['$scope', 'abaxXBRLServices', '$timeout'];

    /**
     * Define la estructura del Scope de la Directiva para la edición / visualización del formato distribución de ingresos por producto
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IXbrlDistribucionIngresosProductoScope extends ng.IScope {

        /** Agrupa los diferentes valores de la dimensión tipificada marca */
        valoresDimensionMarca: Array<string>;

        /** Agrupa los diferentes valores de la dimensión tipificada producto de acuerdo a su uso en las diferentes marcas */
        valoresDimensionProductoPorMarca: { [valorMarca: string]: Array<string> };

        /** Agrupa los contextos por el valor de la dimensión tipificada marcas principales para una acceso más rápido */
        contextosPorValorDimensionMarca: { [valorDimensionInstitucion: string]: Array<string> };

        /** Agrupa los contextos por el valor de la dimensión tipificada línea de productos para una acceso más rápido */
        contextosPorValorDimensionProducto: { [valorDimensionMarca: string]: { [valorDimensionProducto: string]: Array<string> } };

        /** Agrupa los contextos por la combinación de sus valores dimensionales para una acceso más rápido */
        contextosPorLlaveDimension: { [valorDimensionMarca: string]: { [valorDimensionProducto: string]: { [qNameMiembroTipoIngreso: string]: string } } };

        /**
         * Agrega un valor a la dimensión marca verificando que no se encuentre duplicado.
         */
        agregarValorDimensionMarca(): void;

        /**
         * Agrega un valor a la dimensión línea de productos verificando que no se encuentre duplicado.
         *
         * @param valorDimensionMarca el valor de la dimensión implícita marcas principales asociado al nuevo valor de la línea de productos.
         */
        agregarValorDimensionProducto(valorDimensionMarca: string): void;

        /**
         * Actualiza los contextos asociados a las diferentes combinaciones de dimensiones explícitas del desglose de créditos con el valor de la dimensión tipificada anterior con el nuevo valor.
         *
         * @param valorDimensionAnterior el valor anterior de la dimension tipificada marcas principales.
         * @param valorDimensionActual el valor a actualizar de la dimensión tipificada marcas principales.
         * @return Si fue posible actualizar el valor de la institución.
         */
        actualizarValorDimensionMarca(valorDimensionActual: string, valorDimensionAnterior: string): boolean;

        /**
         * Actualiza los contextos asociados a las diferentes combinaciones de dimensiones explícitas del desglose de créditos con el valor de la dimensión tipificada anterior con el nuevo valor.
         *
         * @param valorDimensionMarca Valor de la marca a la que está asignado el producto que se pretende acutalizar.
         * @param valorDimensionAnterior el valor anterior de la dimension tipificada línea de productos.
         * @param valorDimensionActual el valor a actualizar de la dimensión tipificada línea de productos.
         * @return Si fue posible actualizar el valor de la institución.
         */
        actualizarValorDimensionProducto(valorDimensionMarca: string, valorDimensionActual: string, valorDimensionAnterior: string): boolean;

        /**
         * Obtiene el identificador del contexto que contiene los valores dimensionales proporcionados como parámetros. Si no existe, lo crea.
         *
         * @param valorDimensionMarca el valor como cadena que deberá contener la dimensión implícita marcas principales.
         * @param valorDimensionProducto el identificador del miembro de la dimensión implícita línea de productos
         * @param idMiembroTipoIngreso el identificador del miembro de la dimensión explíctica tipo de ingresos
         * @param idItemMiembro Identificador del concepto del item miembro de la dimensión explícita de tipo de ingresos
         */
        obtenerIdContexto(valorDimensionMarca: string, valorDimensionProducto: string, idMiembroTipoIngreso: string, idItemMiembro: string): string;

        /**
         * Obtiene el identificador de la unidad de acuerdo a lo definido por la plantilla.
         *
         * @return el identificador de la unidad de tipo moneda de la plantilla actual.
         */
        obtenerIdUnidadMoneda(): string;

        /** 
         * Elimina los contextos y hechos relacionados a un valor de la dimensión marcas principales. 
         *
         * @param valorDimensionMarca el valor de la dimensión marcas principales que se pretende eliminar.
         */
        eliminarElementosDimensionMarca(valorDimensionMarca: string): void;

        /** 
         * Elimina los contextos y hechos relacionados a un valor de la dimensión líneas de producto asociado a un valor de la dimensión marcas principales. 
         * 
         * @param valorDimensionMarca el valor de la dimensión marcas principales al que está asociado al valor de la dimensión líneas de productos
         * @param valorDimensionProducto el valor de la dimensión líneas de productos que se pretende eliminar.
         */
        eliminarElementosProducto(valorDimensionMarca: string, valorDimensionProducto: string): void;

        /** Identificador de la unidad moenda que será utilizada para los hechos de moneda. **/
        idUnidadMoneda: string;

        /** Indica si se trata del último campo en presentar en pantalla */
        ultimoCampo: boolean;

        /** El identificador que se asignará al último campo */
        idUltimoCampo: string;

        /** Actualiza el valor del último campo */
        actualizarUltimoCampo(): boolean;

        /**
        * Formula para validar el total de ingresos para un producto en particular.
        * @param marca Nombre de elemento de la dimensión marca a la que pertenece el producto.
        * @param producto Nombre del elemento de la dimensión producto a la que pertenece el elemento.
        * @return Identificador de la nueva definición de formula.
        **/
        obtenIdFormulaTotalIngresos(marca: string, producto: string): string;
    }

    /** 
    * Directiva utilizada únicamente para asignar el controller a una sección determinada.
    **/
    export class XbrlDistribucionIngresosProducto {

        public static XbrlDistribucionIngresosProductoDirective(): ng.IDirective {

            return {
                restrict: 'A',
                controller: XbrlDistribucionIngresosProductoController
            };
        }
    }


    /**Dto del campo de texto para poder hacer uso de la propiedad model. **/
    export interface IXbrlCampoTextoDtoDip {
        /**Valor de campo de texto. **/
        valor: string;
    }

    /**Campo de captura de texto generico. **/
    export interface IXbrlCampoTextoGenericoDipDirectiveScope extends ng.IScope {

        /** Valor con el que se inicializa el campo de captura.**/
        xbrlValor: string;

        /** El valor temporal que almacena los posibles cambios al modelo */
        valorTemporal: IXbrlCampoTextoDtoDip;

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
    export class XbrlCampoTextoGenericoDip {

        /** 
        * Método utilizado por angular para la generación de la directiva.
        *
        * @return Objeto con datos de configuración para la generación de la nueva directiva.
        **/
        public static XbrlCampoTextoGenericoDipDirective(): ng.IDirective {
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
                controller: XbrlCampoTextoGenericoDipController,
                templateUrl: "ts/templates/taxonomias/ifrs_mx_20141205/extensions/template-xbrl-texto-generico.html?version=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                link: function ($scope: IXbrlCampoTextoGenericoDipDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controllers: any) {

                    $scope.contenidoEnTablaExcel = false;
                }
            };
        }
    }

    /**Clase que define el controlador para la dierctiva de campo generico. **/
    export class XbrlCampoTextoGenericoDipController {
        /**Scope de la directiva de campo de texto generico. **/
        private $scope: IXbrlCampoTextoGenericoDipDirectiveScope;
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
        constructor($scope: IXbrlCampoTextoGenericoDipDirectiveScope, $element: ng.IAugmentedJQuery) {
            this.$scope = $scope;
            this.$element = $element;
            this.init();
        }
    }
    /**Inicializamos los atricutos que deberán inyectarse al controller una vez generado. **/
    XbrlCampoTextoGenericoDipController.$inject = ['$scope', '$element'];



    var distribucionIngresosModule: ng.IModule = angular.module('abaxXBRLDistribucionIngresosModule', ['abaxXBRLViewer']);
    distribucionIngresosModule.directive('xbrlDistribucionIngresos', abaxXBRL.templates.extensions.dip.XbrlDistribucionIngresosProducto.XbrlDistribucionIngresosProductoDirective);
    distribucionIngresosModule.controller('XbrlDistribucionIngresosProductoController', abaxXBRL.templates.extensions.dip.XbrlDistribucionIngresosProductoController);

    distribucionIngresosModule.directive('xbrlCampoTextoGenericoDip', abaxXBRL.templates.extensions.dip.XbrlCampoTextoGenericoDip.XbrlCampoTextoGenericoDipDirective);
    distribucionIngresosModule.controller('XbrlCampoTextoGenericoDipController', abaxXBRL.templates.extensions.dip.XbrlCampoTextoGenericoDipController);

} 