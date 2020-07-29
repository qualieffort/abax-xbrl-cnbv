///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {

    /**
     * Implementación del Objeto de Plantilla de documento de instancia XBRL para la taxonomía de http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS_entry_point_2016-08-22
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_pros_HBIS_entry_point_2016_08_22 extends ArProsBasePlantilla implements abaxXBRL.model.DefinicionDePlantillaXbrl {

        /**
         * Contiene la definción de los parámetros de configuración utilizados por esta plantilla
         */
        DefinicionesParametrosConfiguracion: { [id: string]: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla };

        /**
         * Contiene la definición de los elementos utilizados por las plantillas de los diferentes roles que componen la plantilla
         */
        DefinicionesElementos: abaxXBRL.model.DefinicionDeElementosPlantilla;

        /** El documento instancia que presenta esta plantilla */
        DocumentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;

        /** Las variables que se calcularon para la plantilla del documento instancia en base a los parámetros de configuración. */
        VariablesDocumentoInstancia: { [id: string]: string };

        /** Indica que no fue capaz de determinar los parámetros de configuración del usuario */
        IncapazDeterminarParametrosConfiguracion: boolean;

        /** Los valores de los diferentes parámetros de configuración */
        ParametrosConfiguracion: { [id: string]: any } = {};

        /** Las llaves que identifican los diferentes grupos de periodos por fecha (instante o duración) */
        llavesPeriodo: Array<string>;

        /** Las entidades asociadas con el documento instancia */
        entidades: Array<model.EntidadPlantilla>;
        /** Información adicional asociada a la plantilla de taxonomía */
        informacionExtra: { [id: string]: any };
        /** El idioma por defecto para las etiquetas */
        IDIOMA_DEFAULT(): string { return 'es'; }

        /**
        * Diccionario de acciones.
        **/
        accionesPlantilla: { [nombreAccion: string]: () => any } = {}; 

        /** Muestra el diccioneadio de las etiquetas de las partes de una referencia por idioma. */
        EtiquetasParteReferencia: { [idioma: string]: { [nombreParte: string]: string } } = {};

        obtenerDefinicionDeParametrosDeConfiguracion(): { [id: string]: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla } {
            return this.DefinicionesParametrosConfiguracion;
        }

        agregarDefinicionElementos(definicion: abaxXBRL.model.DefinicionDeElementosPlantilla): void {
            $.extend(true, this.DefinicionesElementos.ContextosPlantillaPorId, definicion.ContextosPlantillaPorId);
            $.extend(true, this.DefinicionesElementos.UnidadesPlantillaPorId, definicion.UnidadesPlantillaPorId);
            $.extend(true, this.DefinicionesElementos.HechosPlantillaPorId, definicion.HechosPlantillaPorId);
            $.extend(true, this.DefinicionesElementos.ListadoDeFormulas, definicion.ListadoDeFormulas);
        }

        obtenerDefinicionDeElementos(): abaxXBRL.model.DefinicionDeElementosPlantilla {
            return this.DefinicionesElementos;
        }

        determinarParametrosConfiguracion(): boolean {
            var resultado: boolean = true;
            this.ParametrosConfiguracion = {};
            resultado = this.determinarParametrosConfiguracionPros(this.ParametrosConfiguracion, this.DocumentoInstancia);
            return resultado;
        }

        /**
         * Inicializa la definición de la plantilla de un documento XBRL.
         *
         * @param documentoInstancia el documentoInstanciaXBRL que será presentado.
         */
        init(documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): void {
            this.DocumentoInstancia = documentoInstancia;

            if (this.ParametrosConfiguracion !== undefined && this.ParametrosConfiguracion != null) {
                if (this.DefinicionesParametrosConfiguracion !== undefined) {
                    for (var idx in this.DefinicionesParametrosConfiguracion) {

                        var definicionParametro = this.DefinicionesParametrosConfiguracion[idx];
                        if (definicionParametro.InformacionAdicional['opcional'] || definicionParametro.InformacionAdicional['ocultar'] != undefined) {
                            continue;
                        }

                        if (!(this.ParametrosConfiguracion[idx] !== undefined && this.ParametrosConfiguracion[idx] != null)) {
                            //Falta un parámetro de configuración
                            this.ParametrosConfiguracion = null;
                            break;
                        }
                    }
                }
            }

            if (!this.ParametrosConfiguracion || this.ParametrosConfiguracion == null) {
                if (!this.determinarParametrosConfiguracion()) {
                    this.IncapazDeterminarParametrosConfiguracion = true;
                    return;
                }
            }

            if (!this.generarVariablesDocumentoInstancia()) {
                this.IncapazDeterminarParametrosConfiguracion = true;
            }

            this.generarEtiquetasPartesReferencia();
        }

        /**
         * Genera las variables requeridas por el documento instancia.
         *
         * @return true si fue posible generar con éxito las variables. false en cualquier otro caso.
         */
        generarVariablesDocumentoInstancia(): boolean {
            var resultado: boolean = this.generarVariablesDocumentoInstanciaArPros(this.VariablesDocumentoInstancia, this.ParametrosConfiguracion, this.DocumentoInstancia);

            if (resultado) {
                var cierreAnoActual = moment().month(11).date(31).format("YYYY-MM-DD");
                //Valores por defecto del Rol 411000
                this.VariablesDocumentoInstancia['valorDefaultPlacementProspectus'] = 'Anexo H Bis';
                this.VariablesDocumentoInstancia['valorDefaultOnlyEmission'] = this.VariablesDocumentoInstancia['tipoReporte'] == "pe" ? 'SI' : 'NO';
                this.VariablesDocumentoInstancia['valorDefaultBrochure'] = 'Anexo H Bis';
                this.VariablesDocumentoInstancia['valorDefaultIssuanceUnderArt13OfTheCUE'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultLimitedPublicOffering'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultTypeOfInstrument'] = 'Acciones';
                this.VariablesDocumentoInstancia['valorDefaultTypeOfInstrumentDescription'] = 'Acciones';
                this.VariablesDocumentoInstancia['valorDefaultForeingIssuer'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultMentioningPartialOrTotalDependence'] = 'NO';
                //Valores por defecto del Rol 412000
                this.VariablesDocumentoInstancia['valorDefaultTypeOfOffer'] = 'Primaria, Nacional';
                this.VariablesDocumentoInstancia['valorDefaultNameOfTheReferenceCurrencyInWhichTheIssueIsMade'] = 'PESOS';
                this.VariablesDocumentoInstancia['valorDefaultDateOfPublicationOfTenderNotice'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultClosingDateBookOrAuction'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultDateOfRegisterInTheStockExchange'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultSettlementDate'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultProspectusSupplementBrochure'] = 'Definitivo';
                //Valores por defecto del Rol 413000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationGeneralInformation'] = 'NO';
                //Valores por defecto del Rol 414000
                this.VariablesDocumentoInstancia['valorDefaultDateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultIndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultRedemptionDateIfAny'] = cierreAnoActual;
                //Valores por defecto del Rol 417000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationTheIssuer'] = 'NO';
                //Valores por defecto del Rol 424000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationFinancialInformation'] = 'NO';
                //Valores por defecto del Rol 427000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationAdministration'] = 'NO';
                //Valores por defecto del Rol 432000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationAnnex'] = 'NO';

                var anio: Date = this.ParametrosConfiguracion["anio"];
                var numeroAnio = moment(anio).utc().year();
                var iniciAnio = moment(numeroAnio + '-01-01 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
                var finAnioAnt = moment(numeroAnio - 1 + '-12-31 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
                var iniciAnioAnt = moment(numeroAnio - 1 + '-01-01 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
                var finAnioAntAnt = moment(numeroAnio - 2 + '-12-31 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
                var iniciAnioAntAnt = moment(numeroAnio - 2 + '-01-01 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
                //inicio año ante anterior
                this.VariablesDocumentoInstancia['fecha_2012_01_01'] = iniciAnioAntAnt.format('YYYY-MM-DD');
                //fin año ante anterior
                this.VariablesDocumentoInstancia['fecha_2012_12_31'] = finAnioAntAnt.format('YYYY-MM-DD');;
                //Inicio año anterior
                this.VariablesDocumentoInstancia['fecha_2013_01_01'] = iniciAnioAnt.format('YYYY-MM-DD');
                //Fin año anterior
                this.VariablesDocumentoInstancia['fecha_2013_12_31'] = finAnioAnt.format('YYYY-MM-DD');;
                //Inicio año actual
                this.VariablesDocumentoInstancia['fecha_2014_01_01'] = iniciAnio.format('YYYY-MM-DD');

                


                // etiquetas

                this.VariablesDocumentoInstancia['valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV'] = '';
                this.VariablesDocumentoInstancia['valorDefaultIssuanceUnderArt13OfTheCUELegend'] = '';
                this.VariablesDocumentoInstancia['valorDefaultLegendArticle86OfTheLMV'] = '';
                this.VariablesDocumentoInstancia['valorDefaultLegendDocumentAvailableWithTheUnderwriter'] = '';
                this.VariablesDocumentoInstancia['valorDefaultNumerationOfPossibleAcquirers'] = '';
               

                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }


                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_IssuanceUnderArt13OfTheCUELegend'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_IssuanceUnderArt13OfTheCUELegend'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_IssuanceUnderArt13OfTheCUELegend'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultIssuanceUnderArt13OfTheCUELegend'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_IssuanceUnderArt13OfTheCUELegend'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }

                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendDocumentAvailableWithTheUnderwriter'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendDocumentAvailableWithTheUnderwriter'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendDocumentAvailableWithTheUnderwriter'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultLegendDocumentAvailableWithTheUnderwriter'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendDocumentAvailableWithTheUnderwriter'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }
                
                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendArticle86OfTheLMV'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendArticle86OfTheLMV'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendArticle86OfTheLMV'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultLegendArticle86OfTheLMV'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendArticle86OfTheLMV'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }
                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }

                this.evaluaelementosAplicablesProspecto(this.DocumentoInstancia, this, this.VariablesDocumentoInstancia);

            }
            this.asignarHechosSoloLectura(this.VariablesDocumentoInstancia);
            return resultado;

            /*
            var resultado: boolean = true;
			this.VariablesDocumentoInstancia['fecha_2014_12_31'] = '';
            this.VariablesDocumentoInstancia['nombreEntidad'] = '';
            this.VariablesDocumentoInstancia['esquemaEntidad'] = '';
            this.VariablesDocumentoInstancia['valorDefaultNoNumerico'] = '';
            this.VariablesDocumentoInstancia['medida_MXN'] = '';
            this.VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_iso4217'] = '';
            this.VariablesDocumentoInstancia['valorDefaultNumerico'] = '';
            this.VariablesDocumentoInstancia['fecha_2014_01_01'] = '';
            this.VariablesDocumentoInstancia['fecha_2013_01_01'] = '';
            this.VariablesDocumentoInstancia['fecha_2013_12_31'] = '';
            this.VariablesDocumentoInstancia['fecha_2012_01_01'] = '';
            this.VariablesDocumentoInstancia['fecha_2012_12_31'] = '';
            return resultado;*/
        }


		/**
        * Elimina de cada rol los hechos que no aplican según las características del documento de instancia
        */
        eliminarHechosSinUso(abaxServicio: services.AbaxXBRLServices): void {
            super.eliminarHechosSinUsoPros(abaxServicio, this.DocumentoInstancia, this.VariablesDocumentoInstancia);
        }

		/**
         * Obtiene la etiqueta de la parte de referencia.
         *
         * @param nombreParte el nombre que se requiere obtener la etiqueta.
         * @param lenguaje es el código del lenguaje que se desea presentar la etiqueta
         * @return la etiqueta de la parte de la referencia en el lenguaje especificado.
         */
        obtenerEtiquetaParteReferencia(nombreParte: string, lenguaje: string): string {

            var etiquetaParte = this.EtiquetasParteReferencia[lenguaje][nombreParte];

            if (etiquetaParte == null) {
                etiquetaParte = this.EtiquetasParteReferencia[this.IDIOMA_DEFAULT()][nombreParte];
            }

            return etiquetaParte;
        }

		/**
        * Crea todas las etiquetas de las partes de una referencia por taxonomia.
        */
        generarEtiquetasPartesReferencia(): void {
            this.generarEtiquetasPartesReferenciaArPros(this.EtiquetasParteReferencia);
        }

        /**
         * Obtiene un mapa cuyas llaves son el identificador de la variable del documento instancia y como valor asociado el valor determinado para la variable del documento.
         *
         * @return un mapa cuyas llaves son el identificador de la variable del documento instancia y como valor asociado el valor determinado para la variable del documento.
         */
        obtenerVariablesDocumentoInstancia(): { [id: string]: string } {
            return this.VariablesDocumentoInstancia;
        }

        /**
         * Obtiene el valor de una variable por medio de su identificador.
         *
         * @param id el identificador de la variable a consultar.
         * @return el valor asociado a la variable que corresponde al identificador proporcionado. null si no existe una variable con dicho identificador.
         */
        obtenerVariablePorId(id: string): string {
            var variable: string = null;

            if (this.VariablesDocumentoInstancia[id] && this.VariablesDocumentoInstancia[id] != null) {
                variable = this.VariablesDocumentoInstancia[id];
            }

            return variable;
        }

        /**
         * Obtiene una ruta relativa a la raíz de la aplicación web en donde se encuentra la plantilla que deberá ser utilizada para el formato de captura de un rol de un documento instancia XBRL.
         *
         * @param rolURI el URI del rol a consultar.
         * @return la ubicación relativa desde la raíz de la aplicación donde se localiza la plantilla. null en caso de no existir una plantilla para dicho rol.
         */
        obtenerUbicacionPlantillaDeRol(rolURI: string): string {
            if (!this.IncapazDeterminarParametrosConfiguracion) {
                var rutaPlantillas = 'ts/templates/taxonomias/ra_prospecto/HBIS/';
                var extensionPlantillas = '.html';
                return rutaPlantillas + rolURI.replace(':', '_').replace(/\//g, '_') + extensionPlantillas;
            } else {
                return 'ts/templates/taxonomias/plantilla_generica.html'
            }
        }

        /**
         * Obtiene una ruta relativa a la raíz de la aplicación web en donde se encuentra la definición de la plantilla que deberá ser utilizada para el formato de captura de un rol de un documento instancia XBRL.
         *
         * @param rolURI el URI del rol a consultar.
         * @return la ubicación relativa desde la raíz de la aplicación donde se localiza la definición de la  plantilla. null en caso de no existir una definició nde la plantilla para dicho rol.
         */
        obtenerUbicacionDefinicionDeRol(rolURI: string): string {
            if (!this.IncapazDeterminarParametrosConfiguracion) {
                var rutaDefiniciones = 'ts/templates/taxonomias/ra_prospecto/HBIS/';
                var extensionDefiniciones = '.js?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
                return rutaDefiniciones + rolURI.replace(':', '_').replace(/\//g, '_') + extensionDefiniciones;
            } else {
                return 'ts/templates/taxonomias/plantilla_generica.html'
            }
        }

        /**
         * Manejador para el llenado del tipo de instrmento.
         * @param dependencias Dependencias.
         * @return Opciones del combo.
         */
        public manejadorTipoInstrumento(dependencias: { [nombreParametro: string]: string }): Array<model.SelectItem> {

            var opcionesTipoInstrumento: { [clave: string]: string };

            opcionesTipoInstrumento = {
                "Acciones": "Acciones"
            }
            
            var listaOpciones = new Array<model.SelectItem>();

            for (var etiqueta in opcionesTipoInstrumento) {
                var opcion = new model.SelectItem();
                opcion.Etiqueta = etiqueta;
                opcion.Valor = opcionesTipoInstrumento[etiqueta];
                listaOpciones.push(opcion);
            }

            return listaOpciones;
        }
        /**
         *
         * Obtiene los conceptos a colorear en la plantilla denotas.
         * @returns Diccionario con los conceptos que deben ser pintados.
         */
        public obtenColoresConceptosPlantillaNotas(): { [idConcepto: string]: string } {
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            return super.obtenColoresConceptosNotas(documentoInstancia);
        }
        /**
         * Inicializa las acciones personalizadas de la taxonomía.
         */
        private inicializaAccionesTaxonomia(): void {

            var $self = this;
            $self.accionesPlantilla["descargarPlantillaPersonasResponsables"] = function () { $self.descargarPlantillaPersonasResponsables(); };

        }

        /**
        * Manejador para el llenado del tipo de instrmento.
        * @param parametros Parametros.
        * @return Opciones que serán mostradas por el usuario.
        */
        public manejadorOpcionesSeleccionadas(parametros: { [nombreParametro: string]: any }): Array<model.SelectItem> {

            var opcionesFinales = new Array<model.SelectItem>();

            if (parametros['tipoReporte'] == "pe" || parametros['tipoReporte'] == "su") {
                opcionesFinales.push(parametros['opcionActualSeleccionada']);
            } else {
                opcionesFinales = parametros['opcionesSeleccionadas'];
                opcionesFinales.push(parametros['opcionActualSeleccionada']);
            }

            return opcionesFinales;
        }

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_pros_HBIS_entry_point_2016_08_22
         */
        constructor() {
            super();
            this.DefinicionesElementos = {
                ContextosPlantillaPorId: {},
                UnidadesPlantillaPorId: {},
                HechosPlantillaPorId: {},
                ListadoDeFormulas: {}
            };
            this.VariablesDocumentoInstancia = {};
            this.EtiquetasParteReferencia = {};
            this.DocumentoInstancia = null;
            this.ParametrosConfiguracion = null;
            this.IncapazDeterminarParametrosConfiguracion = false;
            this.DefinicionesParametrosConfiguracion = this.inicializarParametrosConfiguracionPros(false);
            this.DefinicionesParametrosConfiguracion['tipoInstrumentoDescripcion']
                .InformacionAdicional['accion'] = $.proxy(this.manejadorTipoInstrumento, this);
            this.DefinicionesParametrosConfiguracion['tipoInstrumentoDescripcion']
                .InformacionAdicional['onSelected'] = $.proxy(this.manejadorOpcionesSeleccionadas, this);
            this.inicializaAccionesTaxonomia();
        }
    }

}