///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {

    /**
     * Implementación del Objeto de Plantilla de documento de instancia XBRL para la taxonomía de http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS5_entry_point_2016-08-22
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_ar_NBIS5_entry_point_2016_08_22 extends ArProsBasePlantilla implements abaxXBRL.model.DefinicionDePlantillaXbrl {

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
            resultado = this.determinarParametrosConfiguracionAr(this.ParametrosConfiguracion, this.DocumentoInstancia);
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

            var resultado: boolean = this.generarVariablesDocumentoInstanciaArPros(this.VariablesDocumentoInstancia, this.ParametrosConfiguracion);

            if (resultado) {
                //Se inicializan valores por defecto de la portada.
                //Se inicializa el tipo de reporte que se esta realizando.
                this.VariablesDocumentoInstancia['valorDefaultAnnualReport'] = 'Anexo N Bis 5';
                this.VariablesDocumentoInstancia['valorDefaultLimitedPublicOffering'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultForeingIssuer'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultMentioningPartialOrTotalDependence'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultTypeOfInstrument'] = 'Acciones';
                //Se inicializan valores por defecto en los conceptos tipo siNoItemType correspondientes a incorporación por referencia.
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationGeneralInformation'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationOperationStructure'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationSettlor'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationAdministrator'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationFinancialInformationOfTheTrust'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationAnnex'] = 'NO';

                this.VariablesDocumentoInstancia['valorDefaultDebtSerieSettlementDate'] = '2014-12-31';

                var anio: Date = this.ParametrosConfiguracion["anio"];
                var moneda: string = this.ParametrosConfiguracion["moneda"];
                var numeroAnio = moment(anio).utc().year();
                var finAnio = moment(numeroAnio + '-12-31 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
                var iniciAnio = moment(numeroAnio + '-01-01 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();

                //Inicio año actual
                this.VariablesDocumentoInstancia['fecha_2014_01_01'] = iniciAnio.format('YYYY-MM-DD');
                //Fecha de fin de reporte
                this.VariablesDocumentoInstancia['fecha_2014_12_31'] = finAnio.format('YYYY-MM-DD');



                this.VariablesDocumentoInstancia['valorDefaultTheMentionThatTheValuesOfTheIssuerAreRegistered'] = '';
                this.VariablesDocumentoInstancia['valorDefaultArticle86LegendOfTheLmv'] = '';
                this.VariablesDocumentoInstancia['valorDefaultAnnualReportCueLegend'] = '';



                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultTheMentionThatTheValuesOfTheIssuerAreRegistered'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_TheMentionThatTheValuesOfTheIssuerAreRegistered'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }

                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_AnnualReportCueLegend'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_AnnualReportCueLegend'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_AnnualReportCueLegend'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultAnnualReportCueLegend'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_AnnualReportCueLegend'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }

                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_Article86LegendOfTheLmv'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_Article86LegendOfTheLmv'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_Article86LegendOfTheLmv'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultArticle86LegendOfTheLmv'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_Article86LegendOfTheLmv'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }

            }
            this.asignarHechosSoloLectura(this.VariablesDocumentoInstancia);
            return resultado;
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
                var rutaPlantillas = 'ts/templates/taxonomias/ra_prospecto/';

                if (rolURI != "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-AR") {
                    rutaPlantillas = rutaPlantillas + "NBIS5/";
                } 

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
                var rutaDefiniciones = 'ts/templates/taxonomias/ra_prospecto/';

                if (rolURI != "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/411000-AR") {
                    rutaDefiniciones = rutaDefiniciones + "NBIS5/";
                } 

                var extensionDefiniciones = '.js?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
                return rutaDefiniciones + rolURI.replace(':', '_').replace(/\//g, '_') + extensionDefiniciones;
            } else {
                return 'ts/templates/taxonomias/plantilla_generica.html'
            }
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

        private inicializaAccionesTaxonomia(): void {

            var $self = this;
            this.accionesPlantilla["descargarPlantillaPersonasResponsables"] = function () { $self.descargarPlantillaPersonasResponsables(); };

        }

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_ar_NBIS5_entry_point_2016_08_22
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
            this.DefinicionesParametrosConfiguracion = this.inicializarParametrosConfiguracionAr(true, true, false);
            this.inicializaAccionesTaxonomia();
        }
    }

}