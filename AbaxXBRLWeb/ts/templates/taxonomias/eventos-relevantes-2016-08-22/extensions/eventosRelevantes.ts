///<reference path="../../../../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../../../../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../../../../../scripts/typings/impromptu/jquery-impromptu.d.ts" />
///<reference path="../../../../visorXbrl.ts" /> 
///<reference path="../../../../directivasAbax.ts" /> 
///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../../scripts/typings/moment/moment.d.ts" />

module abaxXBRL.templates.extensions.relevents {

    /**
       * Implementación del controlador encargado de personalizar el comportamiento
       * de la plantilla de captura de eventos relevantes
       * @author Emigdio Hernandez
       * @version 1.0
       */
    export class XbrlEventosRelevantesController {
        /** El scope del controlador */
        private $scope: IXbrlEventosRelevantesScope;
       
        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** El servicio para ejecutar tareas asíncronas de angular */
        private $timeout: ng.ITimeoutService;

        /** Apunta a la instancia acutal del controlador. **/
        private controllerSelf = this;

        /** Apunta al documento de instancia**/
        private documentoInstancia: model.DocumentoInstanciaXbrl;
        /**
        * Llena las opciones principales de los tipos de evento
        */
        private llenarOpcionesComboPrincipal(): void {

            
            this.$scope.tiposEventoPrincipales = new Array();
            if (this.$scope.estructuraDimensionTipoEvento !== undefined) {

                this.llenarMiembrosDimension(this.$scope.tiposEventoPrincipales, this.$scope.estructuraDimensionTipoEvento, this.$scope.tipoEventoSeleccionado,'');

                
            }
            
        }
        /**
        * Llena las opciones de los tipos de evento recorriendo recursivamente la estructura de los miembros
        */
        private llenarMiembrosDimension(tiposEventoPrincipales: Array<any>, estructuraDimensionTipoEvento: Array<abaxXBRL.model.EstructuraFormato>, tipoEventoSeleccionado:any, grupoPadre: string) {

            for (var idEst in estructuraDimensionTipoEvento) {
                var estructura = estructuraDimensionTipoEvento[idEst];

                var tituloEst = this.documentoInstancia.Taxonomia.obtenerEtiquetaDeConcepto(estructura.IdConcepto,
                    model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, this.documentoInstancia.xbrlIdioma.ClaveIdioma);

                if (estructura.SubEstructuras !== undefined && estructura.SubEstructuras != null && estructura.SubEstructuras.length > 0) {
                    this.llenarMiembrosDimension(tiposEventoPrincipales, estructura.SubEstructuras, tipoEventoSeleccionado, tituloEst);
                } else {
                    var opcionNueva = {
                        id: estructura.IdConcepto, grupo: grupoPadre, label:
                        this.documentoInstancia.Taxonomia.obtenerEtiquetaDeConcepto(estructura.IdConcepto,
                            model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, this.documentoInstancia.xbrlIdioma.ClaveIdioma)
                    };
                    tiposEventoPrincipales.push(opcionNueva);
                    //Asignar el elemento seleccionado
                    if (tipoEventoSeleccionado.elemento != null && tipoEventoSeleccionado.elemento.id !== undefined) {
                        if (tipoEventoSeleccionado.elemento.id == opcionNueva.id) {
                            tipoEventoSeleccionado.elemento = opcionNueva;
                        }
                    }
                }
            }
        }

        /**
        * Inicializa los elementos de controller.
        **/
        private init(): void {
          
            for (var rol in this.documentoInstancia.Taxonomia.ListaHipercubos) {
                for (var idHiper in this.documentoInstancia.Taxonomia.ListaHipercubos[rol]) {
                    var hipercubo = this.documentoInstancia.Taxonomia.ListaHipercubos[rol][idHiper];
                    if (hipercubo.ArcRoleDeclaracion.indexOf("/all") >= 0) {
                        for (var idDim in hipercubo.EstructuraDimension) {
                            this.$scope.estructuraDimensionTipoEvento = hipercubo.EstructuraDimension[idDim];
                            break;
                        }
                    }
                }
            }
            var idTipoEventoInicial = null;
            for (var idHecho in this.documentoInstancia.HechosPorIdConcepto['rel_ev_RelevantEventContent']){
                var hecho = this.documentoInstancia.HechosPorId[this.documentoInstancia.HechosPorIdConcepto['rel_ev_RelevantEventContent'][idHecho]];
                var contexto = this.documentoInstancia.ContextosPorId[hecho.IdContexto];
                idTipoEventoInicial = contexto.ValoresDimension[0].IdItemMiembro;
            }
            
            //Llenar opciones y guardar estructura de dimensiones

            this.$scope.tipoEventoSeleccionado = { elemento: null};
            if (idTipoEventoInicial != null && idTipoEventoInicial != "") {
                this.$scope.tipoEventoSeleccionado = { elemento: { id: idTipoEventoInicial } };
            }
            this.llenarOpcionesComboPrincipal();
            
            var self = this;
            

            this.$scope.onChangeTipoEventoPrincipal = function () {
                if (self.$scope.tipoEventoSeleccionado.elemento != null && self.$scope.tipoEventoSeleccionado.elemento.id !== undefined) {
                    var etiquetasCampoCaptura = $('#detalleTipoEvento').find('xbrl\\:etiqueta-concepto');

                   
                    etiquetasCampoCaptura.attr("xbrl:id-concepto", self.$scope.tipoEventoSeleccionado.elemento.id);
                    etiquetasCampoCaptura.xbrlEtiquetaConcepto();

                    $('#detalleTipoEvento').show();

                    var qNameTipoEventoSeleccionado = this.documentoInstancia.Taxonomia.ConceptosPorId[self.$scope.tipoEventoSeleccionado.elemento.id].EspacioNombres
                        + ":" + this.documentoInstancia.Taxonomia.ConceptosPorId[self.$scope.tipoEventoSeleccionado.elemento.id].Nombre;
                    var idTipoEventoSeleccionado = self.$scope.tipoEventoSeleccionado.elemento.id;

                    var hechoContenido = null;


                    for (var idHecho in this.documentoInstancia.HechosPorIdConcepto['rel_ev_RelevantEventContent']) {
                        hechoContenido = this.documentoInstancia.HechosPorId[this.documentoInstancia.HechosPorIdConcepto['rel_ev_RelevantEventContent'][idHecho]];
                        break;
                        
                    } 
                    var idContexto = null;
                    if (hechoContenido != null) {
                        var contextoEncontrado = this.documentoInstancia.ContextosPorId[hechoContenido.IdContexto];
                        contextoEncontrado.ValoresDimension[0].IdItemMiembro = idTipoEventoSeleccionado;
                        contextoEncontrado.ValoresDimension[0].QNameItemMiembro = qNameTipoEventoSeleccionado;
                        idContexto = contextoEncontrado.Id;
                    }
                    if (idContexto == null) {
                        var contexto = new abaxXBRL.model.Contexto();

                        contexto.ContieneInformacionDimensional = true;
                        contexto.Escenario = null;
                        contexto.Id = "ev_rev_" + abaxXBRL.utils.UUIDUtils.generarUUID();
                        contexto.ValoresDimension = null;
                        contexto.Periodo = new abaxXBRL.model.Periodo();
                        contexto.Periodo.Tipo = abaxXBRL.model.Periodo.INSTANTE;

                        contexto.Periodo.FechaInstante = moment(self.abaxService.getDefinicionPlantilla().obtenerVariablePorId("fecha_2017_12_31") +
                            '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();

                        

                        contexto.Entidad = new abaxXBRL.model.Entidad();
                        contexto.Entidad.Id = self.abaxService.getDefinicionPlantilla().obtenerVariablePorId("nombreEntidad");
                        contexto.Entidad.EsquemaId = self.abaxService.getDefinicionPlantilla().obtenerVariablePorId("esquemaEntidad");
                        contexto.Entidad.IdEntidad = self.abaxService.getDefinicionPlantilla().obtenerVariablePorId("esquemaEntidad") +
                            abaxXBRL.model.ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO +
                            self.abaxService.getDefinicionPlantilla().obtenerVariablePorId("nombreEntidad");
                        contexto.Entidad.ContieneInformacionDimensional = false;
                        contexto.ContieneInformacionDimensional = true;
                        contexto.Entidad.Segmento = null;
                        contexto.Escenario = null;
                        contexto.ValoresDimension = new Array<abaxXBRL.model.DimensionInfo>();

                        var dimensionTipoEvento = new abaxXBRL.model.DimensionInfo();
                        dimensionTipoEvento.Explicita = true;
                        dimensionTipoEvento.QNameDimension = "http://www.bmv.com.mx/2016-08-22/rel_events:RelevantEventTypesAxis";
                        dimensionTipoEvento.IdDimension = "rel_ev_RelevantEventTypesAxis";
                        dimensionTipoEvento.QNameItemMiembro = qNameTipoEventoSeleccionado;
                        dimensionTipoEvento.IdItemMiembro = idTipoEventoSeleccionado;

                        contexto.ValoresDimension.push(dimensionTipoEvento);


                        self.abaxService.inyectarContextoADocumentoInstancia(contexto);
                        idContexto = contexto.Id;
                    }
                    var campoCaptura = $('#contenedorCampoContenidoEvento').find('xbrl\\:campo-captura');
                    campoCaptura.attr("xbrl:id-contexto", idContexto);
                    campoCaptura.xbrlCampoCaptura();
                    self.$timeout(function () {
                        $('xbrl\\:campo-captura').xbrlCampoCaptura('update');
                        $('xbrl\\:mensaje-validacion-formula').xbrlMensajeValidacionFormula('update');
                        campoCaptura.dblclick();
                        campoCaptura.blur();
                    });
                    campoCaptura.xbrlCampoCaptura('update');
                    
                    
                }
                
            };

            this.$scope.documentoInstancia = this.documentoInstancia;

            this.$timeout(function () { self.$scope.onChangeTipoEventoPrincipal(); });

            
           
        }
        /**
         * Constructor de la clase XbrlEventosRelevantesController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IXbrlEventosRelevantesScope, abaxXBRLServices: services.AbaxXBRLServices, $timeout: ng.ITimeoutService) {

            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$timeout = $timeout;
            this.documentoInstancia = abaxXBRLServices.getDocumentoInstancia();
            this.init();

        }
    }
        XbrlEventosRelevantesController.$inject = ['$scope', 'abaxXBRLServices', '$timeout'];

        /**
        * Define la estructura del Scope de la Directiva para la edición / visualización de un documento de instancia
        * para la taxonomía de eventos relevantes
        */
        export interface IXbrlEventosRelevantesScope extends ng.IScope {
            /**
            * Tipo principal de evento seleccionado
            */
            tipoEventoSeleccionado: any;
            /**
            * Tipo del evento final que será asignado al evento relevante
            */
            tipoSubEventoSeleccionado: any;
            /**
            * Lista de opciones disponibles de tipos de eventos principales
            */
            tiposEventoPrincipales: Array<any>;
            /*
            * Lista de las opciones disponibles para el sub tipo de evento relevante
            */
            tiposSubEvento: Array<any>;
            /**
            * Estructura raíz de la dimensión de tipo de evento relevante
            */
            estructuraDimensionTipoEvento: Array<abaxXBRL.model.EstructuraFormato>;
            /**
            * Evento change de la selección de tipo de evento principal
            */
            onChangeTipoEventoPrincipal(): void;
            

             /** Apunta al documento de instancia**/
            documentoInstancia: model.DocumentoInstanciaXbrl;
        }

    /** 
    * Directiva utilizada únicamente para asignar el controller a una sección determinada.
    **/
    export class XbrlEventosRelevantes {

        public static XbrlEventosRelevantesDirective(): ng.IDirective {

            return {
                restrict: 'A',
                controller: XbrlEventosRelevantesController
            };
        }
    }
   
    var eventosRelevantesModule: ng.IModule = angular.module('abaxXBRLEventosRelevantesModule', ['abaxXBRLViewer']);
    eventosRelevantesModule.directive('xbrlEventosRelevantes', abaxXBRL.templates.extensions.relevents.XbrlEventosRelevantes.XbrlEventosRelevantesDirective);
    eventosRelevantesModule.controller('xbrlEventosRelevantesController', abaxXBRL.templates.extensions.relevents.XbrlEventosRelevantesController);

}